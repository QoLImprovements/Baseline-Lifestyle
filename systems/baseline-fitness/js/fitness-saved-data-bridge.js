/* Baseline Fitness — protected browser-owned Saved Data bridge. */
(function (global) {
  'use strict';
  if (!global || !global.localStorage || typeof Storage === 'undefined' || global.__BASELINE_FITNESS_SAVED_DATA_BRIDGE__) return;
  global.__BASELINE_FITNESS_SAVED_DATA_BRIDGE__ = true;

  const API = '/systems/baseline-fitness/api/fitness_state.php';
  const BODY_PREFIX = '__bl_fitness_body_profile_v1__::';
  const STEP_PREFIX = '__bl_fitness_workout_progress_v2__::';
  const nativeSet = Storage.prototype.setItem;
  const nativeRemove = Storage.prototype.removeItem;
  const timers = new Map();
  let enabled = false;
  let revision = 0;
  let authName = '';
  let syncing = false;
  let serverActive = null;

  function normalise(value) { return String(value || '').trim().toLowerCase(); }
  function bodyKey() { return BODY_PREFIX + normalise(authName); }
  function parseJson(raw) {
    try { const value = JSON.parse(String(raw)); return value && typeof value === 'object' ? value : null; }
    catch (_error) { return null; }
  }
  function activeFromKey(key, state) {
    const parts = String(key).slice(STEP_PREFIX.length).split('::');
    const planId = Number(parts[0] || 0);
    const sessionIndex = Number(parts[1] || 0);
    const owner = normalise(parts.slice(2).join('::'));
    if (!planId || !sessionIndex || owner !== normalise(authName) || !state || typeof state !== 'object') return null;
    return { planId, sessionIndex, state };
  }
  function stepKey(active) {
    return `${STEP_PREFIX}${Number(active.planId) || 0}::${Number(active.sessionIndex) || 0}::${normalise(authName)}`;
  }
  function localBody() { return parseJson(global.localStorage.getItem(bodyKey())); }
  function localActive() {
    const suffix = `::${normalise(authName)}`;
    for (let index = 0; index < global.localStorage.length; index += 1) {
      const key = global.localStorage.key(index) || '';
      if (!key.startsWith(STEP_PREFIX) || !key.endsWith(suffix)) continue;
      const active = activeFromKey(key, parseJson(global.localStorage.getItem(key)));
      if (active) return active;
    }
    return null;
  }
  function writeLocal(key, value) { nativeSet.call(global.localStorage, key, JSON.stringify(value)); }
  function removeLocal(key) { nativeRemove.call(global.localStorage, key); }

  async function request(options = {}) {
    const response = await fetch(API, {
      method: options.method || 'GET',
      credentials: 'same-origin',
      headers: Object.assign({ Accept: 'application/json' }, options.body ? { 'Content-Type': 'application/json' } : {}),
      body: options.body ? JSON.stringify(options.body) : undefined
    });
    let data = null;
    try { data = await response.json(); } catch (_error) { data = null; }
    if (response.status === 409 && data?.error === 'saved_data_not_enabled') return { ok: false, disabled: true };
    return data && typeof data === 'object' ? data : { ok: false, error: `http_${response.status}` };
  }

  function applyServer(data) {
    if (!data || !data.ok) return;
    revision = Number(data.revision) || 0;
    serverActive = data.activeWorkout && typeof data.activeWorkout === 'object' ? data.activeWorkout : null;
    if (data.profile && typeof data.profile === 'object') writeLocal(bodyKey(), data.profile);
    if (serverActive?.state) writeLocal(stepKey(serverActive), serverActive.state);
  }

  async function reload() {
    const data = await request();
    if (data.disabled) { enabled = false; return data; }
    enabled = !!data.ok;
    if (enabled) applyServer(data);
    return data;
  }

  async function post(body, retry = true) {
    if (!enabled || syncing) return null;
    syncing = true;
    try {
      const data = await request({ method: 'POST', body: Object.assign({}, body, { expectedRevision: revision }) });
      if (data?.ok) { applyServer(data); return data; }
      if (retry && data?.error === 'revision_conflict') {
        await reload();
        return post(body, false);
      }
      if (data?.error === 'profile_conflict' && data.serverProfile) writeLocal(bodyKey(), data.serverProfile);
      if (data?.error === 'active_workout_conflict' && data.serverActiveWorkout?.state) writeLocal(stepKey(data.serverActiveWorkout), data.serverActiveWorkout.state);
      return data;
    } finally {
      syncing = false;
    }
  }

  async function importExisting(server) {
    if (!enabled) return;
    const profile = localBody();
    const activeWorkout = localActive();
    const payload = { action: 'import_local' };
    if (!server?.profile && profile) payload.profile = profile;
    if (!server?.activeWorkout && activeWorkout) payload.activeWorkout = activeWorkout;
    if (!Object.hasOwn(payload, 'profile') && !Object.hasOwn(payload, 'activeWorkout')) return;
    await post(payload);
  }

  function schedule(key, value) {
    clearTimeout(timers.get(key));
    timers.set(key, setTimeout(() => {
      timers.delete(key);
      if (!enabled) return;
      if (key === bodyKey()) post({ action: 'save_profile', profile: value });
      else if (key.startsWith(STEP_PREFIX)) {
        const activeWorkout = activeFromKey(key, value);
        if (activeWorkout) post({ action: 'save_active_workout', activeWorkout });
      }
    }, 450));
  }

  Storage.prototype.setItem = function (key, rawValue) {
    const result = nativeSet.apply(this, arguments);
    if (this === global.localStorage && typeof key === 'string') {
      const value = parseJson(rawValue);
      if (value && (key === bodyKey() || key.startsWith(STEP_PREFIX))) schedule(key, value);
    }
    return result;
  };

  Storage.prototype.removeItem = function (key) {
    const result = nativeRemove.apply(this, arguments);
    if (this === global.localStorage && enabled && typeof key === 'string' && key.startsWith(STEP_PREFIX)) {
      const removed = activeFromKey(key, serverActive?.state || {});
      if (removed && serverActive && Number(serverActive.planId) === removed.planId && Number(serverActive.sessionIndex) === removed.sessionIndex) {
        post({ action: 'clear_active_workout' });
      }
    }
    return result;
  };

  async function syncForAuth(snapshot) {
    const nextName = snapshot && snapshot.authed ? String(snapshot.name || snapshot.user?.name || '').trim() : '';
    if (!nextName) { enabled = false; authName = ''; revision = 0; serverActive = null; return; }
    if (normalise(nextName) !== normalise(authName)) { revision = 0; serverActive = null; }
    authName = nextName;
    const server = await reload();
    if (enabled) await importExisting(server);
  }

  function attachAuth() {
    const auth = global.BASELINE_auth;
    if (!auth || typeof auth.get !== 'function') { setTimeout(attachAuth, 100); return; }
    syncForAuth(auth.get());
    if (typeof auth.onChange === 'function') auth.onChange(syncForAuth);
  }

  global.BASELINE_FITNESS_SAVED_DATA = Object.freeze({
    reload,
    get enabled() { return enabled; },
    get revision() { return revision; }
  });
  attachAuth();
})(typeof window !== 'undefined' ? window : globalThis);

/*
 * Independent exercise progression and timed-burnout history.
 *
 * Rep exercises progress independently: leg-reps add three to every set and
 * standard-reps add one. A failed rep exercise repeats only its own targets.
 *
 * Timed holds are measurements, not pass/fail targets. The user holds to
 * technical burnout, the exact achieved duration is recorded, and the next
 * guide is achieved time +3 seconds (or +2 seconds from 90 seconds onward).
 */
(function (global) {
  'use strict';

  const STEP_PREFIX = '__bl_fitness_workout_progress_v2__::';
  const PLAN_CACHE_PREFIX = '__bl_fitness_plan_cache_v1__::';
  const PLAN_PREFIX = '__bl_fitness_plan_v1__::';
  const TYPES = Object.freeze({
    STANDARD: 'standard-reps',
    LEG: 'leg-reps',
    TIMED: 'timed-hold-burnout',
    LEGACY_TIMED: 'timed-hold'
  });
  const REP_INCREMENT = Object.freeze({ [TYPES.STANDARD]: 1, [TYPES.LEG]: 3 });
  const ANCHOR_SESSION = 6;
  const ANCHOR_VALUES = Object.freeze([44, 41, 47]);

  function parseJson(raw) {
    try { const value = JSON.parse(String(raw)); return value && typeof value === 'object' ? value : null; }
    catch (_error) { return null; }
  }
  function normaliseOwner(value) { return String(value || '').trim().toLowerCase(); }
  function ownerName() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      return snapshot?.authed ? normaliseOwner(snapshot.name || snapshot.user?.name || '') : '';
    } catch (_error) { return ''; }
  }
  function parseStepKey(key) {
    if (!String(key || '').startsWith(STEP_PREFIX)) return null;
    const parts = String(key).slice(STEP_PREFIX.length).split('::');
    const planId = Number(parts.shift() || 0);
    const sessionIndex = Number(parts.shift() || 0);
    const owner = normaliseOwner(parts.join('::'));
    return planId && sessionIndex ? { planId, sessionIndex, owner } : null;
  }
  function stepKey(planId, sessionIndex, owner = ownerName()) {
    return `${STEP_PREFIX}${Number(planId) || 0}::${Number(sessionIndex) || 0}::${normaliseOwner(owner)}`;
  }
  function canonicalExerciseName(name) {
    return String(name || '').trim().replace(/\s+(Left|Right)$/i, '');
  }
  function timedExerciseKey(name) {
    const raw = String(name || '').trim();
    const side = raw.match(/\s+(Left|Right)$/i);
    return side
      ? `${canonicalExerciseName(raw)}::${side[1].toLowerCase()}`
      : canonicalExerciseName(raw);
  }
  function isTimedType(type) {
    return [TYPES.TIMED, TYPES.LEGACY_TIMED].includes(String(type || ''));
  }
  function normaliseHistory(value) {
    const source = value && typeof value === 'object' ? value : {};
    const rawFailures = source.failuresBySession && typeof source.failuresBySession === 'object'
      ? source.failuresBySession
      : {};
    const rawTimed = source.timedBySession && typeof source.timedBySession === 'object'
      ? source.timedBySession
      : {};
    const failuresBySession = {};
    const timedBySession = {};

    Object.entries(rawFailures).forEach(([session, names]) => {
      const index = Math.max(1, Math.round(Number(session) || 0));
      if (!index || !Array.isArray(names)) return;
      failuresBySession[String(index)] = Array.from(new Set(names.map(canonicalExerciseName).filter(Boolean)));
    });

    Object.entries(rawTimed).forEach(([session, values]) => {
      const index = Math.max(1, Math.round(Number(session) || 0));
      if (!index || !values || typeof values !== 'object') return;
      const clean = {};
      Object.entries(values).forEach(([key, seconds]) => {
        const achieved = Math.max(0, Math.round(Number(seconds) || 0));
        if (key && achieved > 0) clean[String(key)] = achieved;
      });
      if (Object.keys(clean).length) timedBySession[String(index)] = clean;
    });

    return { failuresBySession, timedBySession };
  }
  function failedExercises(results) {
    const failed = new Set();
    Object.values(results && typeof results === 'object' ? results : {}).forEach((result) => {
      if (!result || result.status !== 'failed' || result.isTimed || result.unit === 'seconds') return;
      const exercise = canonicalExerciseName(result.exercise);
      if (exercise) failed.add(exercise);
    });
    return Array.from(failed);
  }
  function recordFailures(history, sessionIndex, exercises) {
    const next = normaliseHistory(history);
    next.failuresBySession[String(Math.max(1, Math.round(Number(sessionIndex) || 1)))] =
      Array.from(new Set((exercises || []).map(canonicalExerciseName).filter(Boolean)));
    return next;
  }
  function recordTimedResults(history, sessionIndex, results) {
    const next = normaliseHistory(history);
    const session = String(Math.max(1, Math.round(Number(sessionIndex) || 1)));
    const values = Object.assign({}, next.timedBySession[session] || {});

    Object.values(results && typeof results === 'object' ? results : {}).forEach((result) => {
      if (!result || !(result.isTimed || result.unit === 'seconds')) return;
      const achieved = Math.max(0, Math.round(Number(result.achieved) || 0));
      const key = String(result.exerciseKey || timedExerciseKey(result.stepName || result.exercise || ''));
      if (key && achieved > 0) values[key] = achieved;
    });

    if (Object.keys(values).length) next.timedBySession[session] = values;
    return next;
  }
  function failureCountBefore(exercise, sessionIndex, history) {
    const name = canonicalExerciseName(exercise);
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    return Object.entries(normaliseHistory(history).failuresBySession).reduce((count, [failedSession, names]) => (
      Number(failedSession) < session && names.includes(name) ? count + 1 : count
    ), 0);
  }
  function effectiveSession(exercise, sessionIndex, history) {
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    return Math.max(1, session - failureCountBefore(exercise, session, history));
  }
  function latestTimedAchievement(exerciseKey, sessionIndex, history) {
    const key = String(exerciseKey || '');
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    const timed = normaliseHistory(history).timedBySession;
    const previous = Object.keys(timed)
      .map(Number)
      .filter((index) => index < session && timed[String(index)]?.[key] > 0)
      .sort((a, b) => b - a)[0];
    return previous ? Number(timed[String(previous)][key]) : null;
  }
  function holdIncrement(seconds) {
    return Math.max(1, Math.round(Number(seconds) || 1)) >= 90 ? 2 : 3;
  }
  function timedGuideFromAchievement(seconds) {
    const achieved = Math.max(1, Math.round(Number(seconds) || 1));
    return achieved + holdIncrement(achieved);
  }
  function setCount(value) { return Math.max(1, Math.min(5, Math.round(Number(value) || 3))); }
  function setValues(baseline, count) {
    const max = Math.max(1, Math.round(Number(baseline) || 1));
    const sets = setCount(count);
    if (sets === 1) return [max];
    if (sets === 2) return [Math.max(1, Math.round(max * 0.75)), Math.max(1, Math.round(max * 0.85))];
    if (sets === 3) {
      const first = Math.max(1, Math.round(max * 0.75));
      const second = Math.max(1, Math.round(max * 0.70));
      let third = Math.max(1, Math.round(max * 0.80));
      if (third <= Math.max(first, second)) third = Math.max(first, second) + 1;
      return [first, second, third];
    }
    return (sets === 4 ? [0.62, 0.70, 0.76, 0.84] : [0.58, 0.64, 0.70, 0.76, 0.84])
      .map((ratio) => Math.max(1, Math.round(max * ratio)));
  }
  function progressionIncrements(type, count) {
    const sets = setCount(count);
    const increment = REP_INCREMENT[String(type || '')] || REP_INCREMENT[TYPES.STANDARD];
    return Array(sets).fill(increment);
  }
  function progressedSetValues(baseline, count, sessionIndex, type = TYPES.STANDARD) {
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    const increments = progressionIncrements(type, count);
    return setValues(baseline, count).map((value, index) => value + ((session - 1) * increments[index]));
  }
  function holdValue(baseline, sessionIndex) {
    let seconds = Math.max(1, Math.round(Number(baseline) || 1));
    for (let session = 2; session <= Math.max(1, Math.round(Number(sessionIndex) || 1)); session += 1) seconds += holdIncrement(seconds);
    return seconds;
  }
  function targetsForExercise(item, sessionIndex) {
    const source = item && typeof item === 'object' ? item : {};
    const exercise = canonicalExerciseName(source.exercise);
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    const baseline = Math.max(1, Math.round(Number(source.baseline) || 1));
    const sets = setCount(source.sets || 3);
    const type = String(source.progressionType || TYPES.STANDARD);
    if (isTimedType(type) || !Object.hasOwn(source, 'sets')) return [holdValue(baseline, session)];

    if (exercise === 'Squats' && baseline === 40 && sets === 3 && session >= ANCHOR_SESSION) {
      const increase = (session - ANCHOR_SESSION) * REP_INCREMENT[TYPES.LEG];
      return ANCHOR_VALUES.map((value) => value + increase);
    }
    return progressedSetValues(baseline, sets, session, type);
  }
  function planForOwner(owner = ownerName()) {
    if (!global.localStorage || !owner) return null;
    const cached = parseJson(global.localStorage.getItem(`${PLAN_CACHE_PREFIX}${owner}`));
    if (cached?.planJson?.items) return cached.planJson;
    const saved = parseJson(global.localStorage.getItem(`${PLAN_PREFIX}${owner}`));
    if (saved?.planJson?.items) return saved.planJson;
    if (saved?.items) return saved;
    return null;
  }
  function planFromGeneratorUi() {
    if (!global.document) return null;
    const rows = Array.from(global.document.querySelectorAll('#exerciseList .ex-row'));
    const items = rows.map((row) => {
      const exercise = String(row.querySelector('.ex-select')?.value || '').trim();
      if (!exercise) return null;
      const progressionType = String(row.dataset.progressionType || TYPES.STANDARD);
      const item = {
        exercise,
        baseline: Math.max(1, Math.round(Number(row.querySelector('.ex-baseline')?.value) || 1)),
        progressionType
      };
      if (!isTimedType(progressionType)) {
        const control = row.querySelector('.ex-sets');
        item.sets = setCount(control?.value || control?.dataset.lastSets || 3);
      }
      return item;
    }).filter(Boolean);
    return items.length ? { items } : null;
  }
  function itemForExercise(plan, exercise) {
    const name = canonicalExerciseName(exercise);
    return Array.isArray(plan?.items) ? plan.items.find((item) => canonicalExerciseName(item?.exercise) === name) || null : null;
  }
  function historyForContext(context) {
    if (!global.localStorage || !context?.planId || !context?.sessionIndex) return normaliseHistory(null);
    const state = parseJson(global.localStorage.getItem(stepKey(context.planId, context.sessionIndex)));
    return normaliseHistory(state?.exerciseProgression || state?.exerciseFailures);
  }
  function replaceTargetInLabel(step, target) {
    const label = String(step.label || step.name || '');
    if (step.isTimed || step.unit === 'seconds') {
      if (/guide\s+\d+\s+seconds/i.test(label)) return label.replace(/guide\s+\d+\s+seconds/i, `guide ${target} seconds`);
      return `${step.name} • Hold to technical burnout (guide ${target} seconds)`;
    }
    return label.replace(/\(\d+(?:\s+per side)?\)/, `(${target}${step.laterality === 'per-side' ? ' per side' : ''})`);
  }
  function adjustedContext(source) {
    if (!source || typeof source !== 'object' || !Array.isArray(source.steps)) return source;
    const context = Object.assign({}, source);
    const steps = source.steps.map((step) => step && typeof step === 'object' ? Object.assign({}, step) : step);
    const history = historyForContext(source);
    const plan = planForOwner();
    const repGroups = new Map();

    steps.forEach((step, index) => {
      const exercise = canonicalExerciseName(step?.exercise || step?.name);
      if (!exercise) return;
      step.exercise = exercise;

      if (step.isTimed || step.unit === 'seconds') {
        const key = timedExerciseKey(step.name || exercise);
        const previous = latestTimedAchievement(key, source.sessionIndex, history);
        const item = itemForExercise(plan, exercise);
        const target = previous
          ? timedGuideFromAchievement(previous)
          : Number(targetsForExercise(item || { exercise, baseline: step.target || 1, progressionType: TYPES.TIMED }, source.sessionIndex)[0]);
        step.exerciseKey = key;
        step.progressionSession = source.sessionIndex;
        step.target = target;
        step.progressionType = TYPES.TIMED;
        step.label = replaceTargetInLabel(step, target);
        return;
      }

      if (!repGroups.has(exercise)) repGroups.set(exercise, []);
      repGroups.get(exercise).push(index);
    });

    repGroups.forEach((indexes, exercise) => {
      const item = itemForExercise(plan, exercise);
      const progressionSession = effectiveSession(exercise, source.sessionIndex, history);
      let targets = item ? targetsForExercise(item, progressionSession) : null;
      if (!targets || !targets.length) {
        const failures = failureCountBefore(exercise, source.sessionIndex, history);
        const fallbackIncrement = String(steps[indexes[0]]?.progressionType || '') === TYPES.LEG ? 3 : 1;
        targets = indexes.map((index) => Math.max(1, Number(steps[index]?.target || 1) - (failures * fallbackIncrement)));
      }
      indexes.forEach((stepIndex, position) => {
        const step = steps[stepIndex];
        const target = Number(targets[Math.min(position, targets.length - 1)] || step.target || 1);
        step.exercise = exercise;
        step.progressionSession = progressionSession;
        step.target = target;
        step.label = replaceTargetInLabel(step, target);
      });
    });

    const results = {};
    Object.entries(source.results && typeof source.results === 'object' ? source.results : {}).forEach(([index, raw]) => {
      const result = raw && typeof raw === 'object' ? Object.assign({}, raw) : raw;
      const step = steps[Number(index)];
      if (result && step) {
        result.exercise = canonicalExerciseName(result.exercise || step.exercise || step.name);
        result.exerciseKey = result.exerciseKey || step.exerciseKey || timedExerciseKey(step.name || result.exercise);
        result.stepName = result.stepName || step.name;
        result.isTimed = Boolean(result.isTimed || step.isTimed);
        result.unit = result.unit || step.unit;
        if (result.status === 'success' && !result.isTimed) result.achieved = Number(step.target);
      }
      results[index] = result;
    });

    context.steps = steps;
    context.results = results;
    context.step = steps[Number(context.stepIndex || 0)] || null;
    return context;
  }

  const PUBLIC_API = Object.freeze({
    TYPES,
    canonicalExerciseName,
    timedExerciseKey,
    normaliseHistory,
    failedExercises,
    recordFailures,
    recordTimedResults,
    failureCountBefore,
    effectiveSession,
    latestTimedAchievement,
    holdIncrement,
    timedGuideFromAchievement,
    progressionIncrements,
    progressedSetValues,
    targetsForExercise,
    adjustContext: adjustedContext
  });
  global.BASELINE_FITNESS_EXERCISE_PROGRESSION = PUBLIC_API;
  if (typeof module !== 'undefined' && module.exports) module.exports = PUBLIC_API;

  if (!global.localStorage || typeof Storage === 'undefined' || global.__BASELINE_FITNESS_INDEPENDENT_PROGRESSION__) return;
  global.__BASELINE_FITNESS_INDEPENDENT_PROGRESSION__ = true;

  const previousSet = Storage.prototype.setItem;
  const previousRemove = Storage.prototype.removeItem;
  let originalWorkout = null;
  let frame = 0;

  function contextForSession(sessionIndex) {
    const context = originalWorkout?.getCurrentContext?.();
    return Number(context?.sessionIndex) === Number(sessionIndex) ? context : null;
  }
  function enrichState(key, rawState) {
    const parsed = parseStepKey(key);
    const state = rawState && typeof rawState === 'object' ? Object.assign({}, rawState) : {};
    if (!parsed) return state;
    const existing = parseJson(global.localStorage.getItem(key));
    state.exerciseProgression = normaliseHistory(state.exerciseProgression || state.exerciseFailures || existing?.exerciseProgression || existing?.exerciseFailures);
    delete state.exerciseFailures;
    state.results = state.results && typeof state.results === 'object' ? Object.assign({}, state.results) : {};

    const rawContext = contextForSession(parsed.sessionIndex);
    const context = rawContext ? adjustedContext(rawContext) : null;
    Object.entries(state.results).forEach(([index, raw]) => {
      if (!raw || typeof raw !== 'object') return;
      const result = Object.assign({}, raw);
      const step = context?.steps?.[Number(index)] || rawContext?.steps?.[Number(index)];
      result.exercise = canonicalExerciseName(result.exercise || step?.exercise || step?.name);
      result.exerciseKey = result.exerciseKey || step?.exerciseKey || timedExerciseKey(step?.name || result.exercise);
      result.stepName = result.stepName || step?.name;
      result.isTimed = Boolean(result.isTimed || step?.isTimed);
      result.unit = result.unit || step?.unit;
      if (result.status === 'success' && step && !result.isTimed) result.achieved = Number(step.target);
      state.results[index] = result;
    });
    return state;
  }

  Storage.prototype.setItem = function (key, rawValue) {
    if (this === global.localStorage && typeof key === 'string' && key.startsWith(STEP_PREFIX)) {
      const value = enrichState(key, parseJson(rawValue) || {});
      const result = previousSet.call(this, key, JSON.stringify(value));
      schedulePatch();
      return result;
    }
    return previousSet.apply(this, arguments);
  };

  Storage.prototype.removeItem = function (key) {
    if (this !== global.localStorage || typeof key !== 'string' || !key.startsWith(STEP_PREFIX)) return previousRemove.apply(this, arguments);
    const parsed = parseStepKey(key);
    const removed = parseJson(global.localStorage.getItem(key)) || {};
    const history = normaliseHistory(removed.exerciseProgression || removed.exerciseFailures);
    const result = previousRemove.apply(this, arguments);
    const next = originalWorkout?.getCurrentContext?.();

    if (parsed && next && Number(next.planId) === parsed.planId) {
      if (Number(next.sessionIndex) === parsed.sessionIndex) {
        global.localStorage.setItem(key, JSON.stringify({ completedSteps: 0, started: false, results: {}, pendingFailureStep: null, exerciseProgression: history }));
      } else if (Number(next.sessionIndex) > parsed.sessionIndex) {
        let updatedHistory = recordFailures(history, parsed.sessionIndex, failedExercises(removed.results));
        updatedHistory = recordTimedResults(updatedHistory, parsed.sessionIndex, removed.results);
        const nextKey = stepKey(parsed.planId, next.sessionIndex, parsed.owner);
        const existing = parseJson(global.localStorage.getItem(nextKey)) || {};
        existing.exerciseProgression = updatedHistory;
        delete existing.exerciseFailures;
        global.localStorage.setItem(nextKey, JSON.stringify(existing));
      }
    }
    schedulePatch();
    return result;
  };

  function repairCurrentState() {
    const context = originalWorkout?.getCurrentContext?.();
    if (!context?.planId || !context?.sessionIndex) return;
    const key = stepKey(context.planId, context.sessionIndex);
    const state = parseJson(global.localStorage.getItem(key));
    if (!state) return;
    const enriched = enrichState(key, state);
    if (JSON.stringify(enriched) !== JSON.stringify(state)) global.localStorage.setItem(key, JSON.stringify(enriched));
  }
  function sessionIndexFromCard(card) {
    const text = String(card?.querySelector?.('.title, h3')?.textContent || '');
    const match = text.match(/Session\s+(\d+)/i);
    return match ? Number(match[1]) : 0;
  }
  function patchPlanRows(root, selector, plan, history) {
    if (!plan) return;
    root.querySelectorAll?.(selector).forEach((card) => {
      const sessionIndex = sessionIndexFromCard(card);
      if (!sessionIndex) return;
      card.querySelectorAll('.plan-exercise-row').forEach((row) => {
        const exercise = canonicalExerciseName(row.firstElementChild?.textContent);
        const item = itemForExercise(plan, exercise);
        if (!item || isTimedType(item.progressionType)) return;
        const session = effectiveSession(exercise, sessionIndex, history);
        const targets = targetsForExercise(item, session);
        const detail = Array.from(row.children).find((child) => child.tagName === 'DIV');
        const numbers = detail ? Array.from(detail.querySelectorAll('b')) : [];
        numbers.forEach((node, index) => {
          const value = String(targets[Math.min(index, targets.length - 1)]);
          if (node.textContent !== value) node.textContent = value;
        });
      });
    });
  }
  function patchCurrentWorkout(root) {
    const context = adjustedContext(originalWorkout?.getCurrentContext?.());
    if (!context?.steps) return;
    const labels = Array.from(root.querySelectorAll?.('#currentWorkoutOut .current-step-label') || []);
    labels.forEach((node, index) => {
      const step = context.steps[index];
      if (!step) return;
      if (node.textContent !== step.label) node.textContent = step.label;
      const status = node.closest('.current-step')?.querySelector('.step-status.success');
      if (status && !step.isTimed && /Achieved\s+\d+/i.test(status.textContent)) {
        const nextText = status.textContent.replace(/Achieved\s+\d+/i, `Achieved ${step.target}`);
        if (status.textContent !== nextText) status.textContent = nextText;
      }
    });
  }
  function patchVoiceDisplay(root) {
    const context = adjustedContext(originalWorkout?.getCurrentContext?.());
    const name = root.querySelector?.('#voiceExerciseName');
    const target = root.querySelector?.('#voiceExerciseTarget');
    if (!context?.step || !name || !target) return;
    if (canonicalExerciseName(name.textContent) !== canonicalExerciseName(context.step.name) && !String(name.textContent).includes(context.step.name)) return;
    const nextText = context.step.isTimed
      ? `Hold to technical burnout • guide ${context.step.target} seconds`
      : String(target.textContent || '').replace(/\d+/, String(context.step.target));
    if (target.textContent !== nextText) target.textContent = nextText;
  }
  function patchPage() {
    frame = 0;
    if (!global.document) return;
    repairCurrentState();
    const context = originalWorkout?.getCurrentContext?.();
    patchPlanRows(global.document, '#myPlanSavedWrap .session-card', planForOwner(), historyForContext(context));
    patchPlanRows(global.document, '#planOut .session-card', planFromGeneratorUi(), normaliseHistory(null));
    patchCurrentWorkout(global.document);
    patchVoiceDisplay(global.document);
  }
  function schedulePatch() {
    if (frame || !global.requestAnimationFrame) return;
    frame = global.requestAnimationFrame(patchPage);
  }
  function installWorkoutWrapper() {
    const candidate = global.BASELINE_fitnessWorkout;
    if (!candidate || candidate.__independentExerciseProgression) {
      if (!candidate) global.setTimeout(installWorkoutWrapper, 50);
      return;
    }
    originalWorkout = candidate;
    const wrapper = {
      __independentExerciseProgression: true,
      BUILD: `${candidate.BUILD || 'BASELINE_FITNESS'}_CATALOGUE_AND_BURNOUT_20260804_1`,
      getCurrentContext() { return adjustedContext(candidate.getCurrentContext?.()); },
      startSession() { const result = candidate.startSession?.(); schedulePatch(); return adjustedContext(result); },
      succeedCurrentStep(inputMode = 'manual') {
        const result = candidate.succeedCurrentStep?.(inputMode);
        repairCurrentState(); schedulePatch(); return adjustedContext(result);
      },
      failCurrentStep(achieved, inputMode = 'manual') {
        const result = candidate.failCurrentStep?.(achieved, inputMode);
        repairCurrentState(); schedulePatch(); return adjustedContext(result);
      },
      recordTimedCurrentStep(achieved, inputMode = 'manual') {
        const result = candidate.recordTimedCurrentStep?.(achieved, inputMode) || candidate.succeedCurrentStep?.(inputMode);
        repairCurrentState(); schedulePatch(); return adjustedContext(result);
      },
      async finishSession() {
        repairCurrentState();
        const result = await candidate.finishSession?.();
        schedulePatch(); return adjustedContext(result);
      },
      resetSession() {
        const result = candidate.resetSession?.();
        schedulePatch(); return adjustedContext(result);
      },
      onChange(listener) {
        return candidate.onChange?.((context) => { schedulePatch(); listener(adjustedContext(context)); });
      }
    };
    global.BASELINE_fitnessWorkout = Object.freeze(wrapper);
    repairCurrentState();
    schedulePatch();
  }

  installWorkoutWrapper();
  if (global.document) {
    const observer = new MutationObserver(schedulePatch);
    observer.observe(global.document.documentElement, { childList: true, subtree: true, characterData: true });
    global.addEventListener?.('pagehide', () => observer.disconnect(), { once: true });
  }
})(typeof window !== 'undefined' ? window : globalThis);

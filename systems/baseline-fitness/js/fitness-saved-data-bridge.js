/* Baseline Fitness — protected browser-owned Saved Data bridge. */
(function (global) {
  'use strict';
  if (!global || !global.localStorage || global.__BASELINE_FITNESS_SAVED_DATA_BRIDGE__) return;
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
 * Session 6 squat progression bridge.
 *
 * The first five sessions retain the values already completed under the
 * original +2 / +1 / +3 progression. Session 6 is anchored at 44 / 41 / 47,
 * then all three sets increase by three reps per completed session.
 */
(function (global) {
  'use strict';
  if (!global || global.__BASELINE_SQUAT_UNIFORM_PROGRESSION__) return;
  global.__BASELINE_SQUAT_UNIFORM_PROGRESSION__ = true;

  const STEP_PREFIX = '__bl_fitness_workout_progress_v2__::';
  const ANCHOR_SESSION = 6;
  const ANCHOR_VALUES = Object.freeze([44, 41, 47]);
  const INCREMENT = 3;
  let originalWorkout = null;
  let frame = 0;

  function sessionValues(sessionIndex) {
    const session = Math.max(ANCHOR_SESSION, Math.round(Number(sessionIndex) || ANCHOR_SESSION));
    const increase = (session - ANCHOR_SESSION) * INCREMENT;
    return ANCHOR_VALUES.map((value) => value + increase);
  }

  function legacyValues(sessionIndex) {
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    return [30 + ((session - 1) * 2), 28 + (session - 1), 32 + ((session - 1) * 3)];
  }

  function matchesPeterSquatPlan(values, sessionIndex) {
    if (!Array.isArray(values) || values.length !== 3 || Number(sessionIndex) < ANCHOR_SESSION) return false;
    const legacy = legacyValues(sessionIndex);
    const desired = sessionValues(sessionIndex);
    return values.every((value, index) => Number(value) === legacy[index] || Number(value) === desired[index]);
  }

  function cloneStep(step) {
    return step && typeof step === 'object' ? Object.assign({}, step) : step;
  }

  function adjustedContext(source) {
    if (!source || typeof source !== 'object') return source;
    const context = Object.assign({}, source);
    const sessionIndex = Number(context.sessionIndex || 0);
    if (sessionIndex < ANCHOR_SESSION || !Array.isArray(context.steps)) return context;

    const steps = context.steps.map(cloneStep);
    const squatIndexes = [];
    steps.forEach((step, index) => {
      if (String(step?.name || '').trim() === 'Squats' && !step?.isTimed) squatIndexes.push(index);
    });
    const values = squatIndexes.map((index) => Number(steps[index]?.target));
    if (!matchesPeterSquatPlan(values, sessionIndex)) {
      context.steps = steps;
      context.step = steps[Number(context.stepIndex || 0)] || null;
      return context;
    }

    const desired = sessionValues(sessionIndex);
    squatIndexes.forEach((stepIndex, valueIndex) => {
      const step = steps[stepIndex];
      step.target = desired[valueIndex];
      step.label = `Squats - (${desired[valueIndex]})`;
    });
    context.steps = steps;
    context.step = steps[Number(context.stepIndex || 0)] || null;
    return context;
  }

  function activeOwnerSuffix() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      const name = snapshot?.authed ? String(snapshot.name || snapshot.user?.name || '').trim().toLowerCase() : '';
      return name ? `::${name}` : '';
    } catch (_error) { return ''; }
  }

  function repairStoredSuccesses() {
    if (!originalWorkout || !global.localStorage) return;
    const rawContext = originalWorkout.getCurrentContext?.();
    const context = adjustedContext(rawContext);
    if (!context || Number(context.sessionIndex) < ANCHOR_SESSION || !Array.isArray(context.steps)) return;
    const ownerSuffix = activeOwnerSuffix();
    const expectedPrefix = `${STEP_PREFIX}${Number(context.planId) || 0}::${Number(context.sessionIndex) || 0}::`;

    for (let index = 0; index < global.localStorage.length; index += 1) {
      const key = global.localStorage.key(index) || '';
      if (!key.startsWith(expectedPrefix) || (ownerSuffix && !key.endsWith(ownerSuffix))) continue;
      let state = null;
      try { state = JSON.parse(global.localStorage.getItem(key) || 'null'); } catch (_error) { state = null; }
      if (!state || typeof state !== 'object' || !state.results || typeof state.results !== 'object') continue;

      let changed = false;
      context.steps.forEach((step, stepIndex) => {
        if (String(step?.name || '') !== 'Squats') return;
        const result = state.results[stepIndex];
        if (!result || result.status !== 'success' || Number(result.achieved) === Number(step.target)) return;
        result.achieved = Number(step.target);
        changed = true;
      });
      if (changed) global.localStorage.setItem(key, JSON.stringify(state));
    }
  }

  function sessionIndexFromCard(card) {
    const text = String(card?.querySelector?.('.title, h3')?.textContent || '');
    const match = text.match(/Session\s+(\d+)/i);
    return match ? Number(match[1]) : 0;
  }

  function patchPlanRows(root) {
    root.querySelectorAll?.('.session-card').forEach((card) => {
      const sessionIndex = sessionIndexFromCard(card);
      if (sessionIndex < ANCHOR_SESSION) return;
      card.querySelectorAll('.plan-exercise-row').forEach((row) => {
        if (String(row.firstElementChild?.textContent || '').trim() !== 'Squats') return;
        const detail = Array.from(row.children).find((child) => child.tagName === 'DIV');
        const numbers = detail ? Array.from(detail.querySelectorAll('b')) : [];
        const values = numbers.map((node) => Number(node.textContent));
        if (!matchesPeterSquatPlan(values, sessionIndex)) return;
        const desired = sessionValues(sessionIndex);
        numbers.forEach((node, index) => { node.textContent = String(desired[index]); });
      });
    });
  }

  function patchCurrentWorkout(root) {
    root.querySelectorAll?.('.session-card').forEach((card) => {
      const sessionIndex = sessionIndexFromCard(card);
      if (sessionIndex < ANCHOR_SESSION) return;
      const labels = Array.from(card.querySelectorAll('.current-step-label')).filter((node) => /^Squats\s*-\s*\(\d+\)/i.test(String(node.textContent || '').trim()));
      const values = labels.map((node) => Number((String(node.textContent).match(/\((\d+)\)/) || [])[1]));
      if (!matchesPeterSquatPlan(values, sessionIndex)) return;
      const desired = sessionValues(sessionIndex);
      labels.forEach((node, index) => {
        node.textContent = `Squats - (${desired[index]})`;
        const status = node.closest('.current-step')?.querySelector('.step-status.success');
        if (status && /Achieved\s+\d+/i.test(status.textContent)) {
          status.textContent = status.textContent.replace(/Achieved\s+\d+/i, `Achieved ${desired[index]}`);
        }
      });
    });
  }

  function patchVoiceDisplay(root) {
    const name = root.querySelector?.('#voiceExerciseName');
    const target = root.querySelector?.('#voiceExerciseTarget');
    if (!name || !target || String(name.textContent || '').trim() !== 'Squats') return;
    const context = adjustedContext(originalWorkout?.getCurrentContext?.());
    if (!context?.step || String(context.step.name || '') !== 'Squats') return;
    target.textContent = String(target.textContent || '').replace(/\d+/, String(context.step.target));
  }

  function patchPage() {
    frame = 0;
    if (!global.document) return;
    patchPlanRows(global.document);
    patchCurrentWorkout(global.document);
    patchVoiceDisplay(global.document);
    repairStoredSuccesses();
  }

  function schedulePatch() {
    if (frame || !global.requestAnimationFrame) return;
    frame = global.requestAnimationFrame(patchPage);
  }

  function installWorkoutWrapper() {
    const candidate = global.BASELINE_fitnessWorkout;
    if (!candidate || candidate.__squatUniformProgression) {
      if (!candidate) global.setTimeout(installWorkoutWrapper, 50);
      return;
    }
    originalWorkout = candidate;

    const wrapper = {
      __squatUniformProgression: true,
      BUILD: `${candidate.BUILD || 'BASELINE_FITNESS'}_SQUAT_UNIFORM_20260804_1`,
      getCurrentContext() { return adjustedContext(candidate.getCurrentContext?.()); },
      startSession() { return adjustedContext(candidate.startSession?.()); },
      succeedCurrentStep(inputMode = 'manual') {
        const result = candidate.succeedCurrentStep?.(inputMode);
        repairStoredSuccesses();
        schedulePatch();
        return adjustedContext(result);
      },
      failCurrentStep(achieved, inputMode = 'manual') { return adjustedContext(candidate.failCurrentStep?.(achieved, inputMode)); },
      async finishSession() {
        repairStoredSuccesses();
        return adjustedContext(await candidate.finishSession?.());
      },
      resetSession() { return adjustedContext(candidate.resetSession?.()); },
      onChange(listener) {
        return candidate.onChange?.((context) => {
          schedulePatch();
          listener(adjustedContext(context));
        });
      }
    };
    global.BASELINE_fitnessWorkout = Object.freeze(wrapper);
    schedulePatch();
  }

  installWorkoutWrapper();
  if (global.document) {
    const observer = new MutationObserver(schedulePatch);
    observer.observe(global.document.documentElement, { childList: true, subtree: true, characterData: true });
    global.addEventListener?.('pagehide', () => observer.disconnect(), { once: true });
  }
})(typeof window !== 'undefined' ? window : globalThis);

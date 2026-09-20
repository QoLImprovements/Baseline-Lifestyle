/* Baseline Fitness — production-safe single owner runtime. */
(function (global) {
  'use strict';

  const BUILD = 'BASELINE_FITNESS_CANONICAL_REFRESH_ROUTES_20260920_1';
  const API = '/systems/baseline-fitness/api';
  const TABS = Object.freeze(['system', 'my-plan', 'my-body', 'library', 'achievements']);
  const ALIASES = Object.freeze({ 'exercise-library': 'library', 'workout-routine': 'my-plan' });
  const ROUTE_BASE = '/baseline-fitness';
  const ROUTE_RE = /^\/baseline-fitness\/(system|my-plan|my-body|library|exercise-library|workout-routine|achievements)\/?$/i;
  const ROUTINE_ROUTE_RE = /^\/baseline-fitness\/my-routine(?:\/(?:log|summary|public|plan(?:\/(?:calisthenics|cardio|other|sports))?))?\/?$/i;
  const PLAN_KEY = '__bl_fitness_plan_v1__';
  const PLAN_CACHE_KEY = '__bl_fitness_plan_cache_v1__';
  const STEP_KEY = '__bl_fitness_workout_progress_v2__';
  const BODY_KEY = '__bl_fitness_body_profile_v1__';
  const PAGE_SIZE = 12;
  const REQUEST_TIMEOUT_MS = 12000;
  const PROGRESSION_MODES = Object.freeze({ LINEAR: 'linear-fixed', STRAIGHT: 'straight-sets', TIMED: 'timed-hold' });

  const CATALOGUE = global.BASELINE_FITNESS_EXERCISE_CATALOGUE ||
    (typeof module !== 'undefined' && module.exports ? require('./fitness-exercise-catalogue.js') : null);
  if (!CATALOGUE) throw new Error('fitness_exercise_catalogue_missing');
  const { TYPES, LEGACY_TIMED_TYPE, FAMILIES, FAMILY_ORDER, EXERCISES } = CATALOGUE;
  const EXERCISE_BY_NAME = new Map(EXERCISES.map((item) => [item.name, item]));
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const FILE_PROTOCOL = typeof location !== 'undefined' && location.protocol === 'file:';
  const STORE = global.BASELINE_store && typeof global.BASELINE_store.read === 'function' ? global.BASELINE_store : null;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Object.freeze({ TYPES, FAMILIES, FAMILY_ORDER, EXERCISES, PROGRESSION_MODES, setValues, progressionIncrements, progressedSetValues, planSetValues, holdIncrement, holdValue, normalisePlan, workForSession, work: workForSession, executionSteps, exerciseOptions });
  }
  if (typeof document === 'undefined') return;
  if (global.__BASELINE_FITNESS_APP__) return;
  global.__BASELINE_FITNESS_APP__ = true;

  let auth = { authed: false, name: '' };
  let current = { planId: 0, planJson: null, sessions: [], progress: null };
  let activeTopTab = 'system';
  let activePlanSubtab = 'current';
  let generatorMode = 'create';
  let dirty = false;
  let hydrating = false;
  let hydratedPlanId = null;
  let captionSequence = 0;
  let planLoadPromise = null;
  let planLoadSerial = 0;
  let authUnsubscribe = null;
  let timerInterval = null;
  let renderLimits = { completed: PAGE_SIZE, future: PAGE_SIZE, preview: PAGE_SIZE };
  const workoutListeners = new Set();

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[char]));
  }

  function clamp(value, min, max) {
    const number = Number(value);
    return Number.isFinite(number) ? Math.max(min, Math.min(max, number)) : min;
  }

  function pad(value) { return String(value).padStart(2, '0'); }
  function today() {
    const date = new Date();
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }
  function parseDate(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    return match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : null;
  }
  function isoDate(date) { return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`; }
  function addDays(date, count) { const next = new Date(date); next.setDate(next.getDate() + count); return next; }
  function niceDate(value) {
    const date = parseDate(value);
    return date ? date.toLocaleDateString(undefined, { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }) : String(value || '');
  }
  function completionDateValue(row) {
    const raw = row?.completed_at ?? row?.completedAt ?? '';
    if (!raw) return '';
    if (typeof raw === 'number' || /^\d+$/.test(String(raw))) {
      const number = Number(raw);
      const date = new Date(number > 9999999999 ? number : number * 1000);
      return Number.isNaN(date.getTime()) ? '' : isoDate(date);
    }
    const text = String(raw);
    if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0, 10);
    const parsed = new Date(text);
    return Number.isNaN(parsed.getTime()) ? '' : isoDate(parsed);
  }

  function storageKey(prefix, suffix) { return `${prefix}::${String(suffix || '').trim().toLowerCase()}`; }
  function userPlanKey() { return storageKey(PLAN_KEY, auth.name); }
  function userCacheKey() { return storageKey(PLAN_CACHE_KEY, auth.name); }
  function bodyProfileKey() { return storageKey(BODY_KEY, auth.name || 'local'); }
  function stepStorageKey(planId, sessionIndex) { return storageKey(STEP_KEY, `${planId || 0}::${sessionIndex || 0}::${auth.name || ''}`); }

  function readStorage(key, fallback) {
    try {
      if (STORE) return STORE.read(key, fallback);
      const raw = global.localStorage ? global.localStorage.getItem(key) : null;
      return raw == null ? fallback : (JSON.parse(raw) ?? fallback);
    } catch (_error) { return fallback; }
  }
  function writeStorage(key, value) {
    try {
      if (STORE) return STORE.write(key, value);
      if (global.localStorage) global.localStorage.setItem(key, JSON.stringify(value));
    } catch (_error) {}
  }
  function removeStorage(key) {
    try {
      if (STORE) return STORE.del(key);
      if (global.localStorage) global.localStorage.removeItem(key);
    } catch (_error) {}
  }

  async function apiJson(path, options = {}) {
    if (FILE_PROTOCOL) return { ok: false, error: 'server_required' };
    const revisions=global.BASELINE_api?.revisions;
    const method=String(options.method || 'GET').toUpperCase();
    const requestBody=options.body && method!=='GET'
      ? (revisions?.withExpected?.('fitness',options.body) || Object.assign({ expectedRevision:0 },options.body))
      : options.body;
    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    const timer = controller ? setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS) : null;
    try {
      const baseUrl = location.origin && location.origin !== 'null' ? location.origin : 'https://fitness.test';
      const url = new URL(path, baseUrl);
      if (options.params) Object.entries(options.params).forEach(([name, value]) => url.searchParams.set(name, String(value)));
      const response = await fetch(url, {
        method,
        credentials: 'same-origin',
        headers: Object.assign({ Accept: 'application/json' }, requestBody ? { 'Content-Type': 'application/json' } : {}),
        body: requestBody ? JSON.stringify(requestBody) : undefined,
        signal: controller ? controller.signal : undefined
      });
      const text = await response.text();
      let data = null;
      try { data = text ? JSON.parse(text) : null; } catch (_error) { data = null; }
      if(data && typeof data==='object') revisions?.remember?.('fitness',data);
      return data && typeof data === 'object' ? data : { ok: false, error: response.ok ? 'invalid_json' : `http_${response.status}` };
    } catch (error) {
      return { ok: false, error: error && error.name === 'AbortError' ? 'timeout' : 'network_error' };
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  function setCount(value) { return Math.max(1, Math.min(5, Math.round(Number(value) || 3))); }
  function exerciseDefinition(name) { return EXERCISE_BY_NAME.get(String(name || '')) || EXERCISES[0]; }
  function normaliseItem(value) {
    const source = value && typeof value === 'object' ? value : {};
    const definition = exerciseDefinition(source.exercise);
    const rawType = String(source.progressionType || '');
    const type = rawType === LEGACY_TIMED_TYPE ? TYPES.TIMED : Object.values(TYPES).includes(rawType) ? rawType : definition.progressionType;
    const item = { exercise: definition.name, baseline: Math.round(clamp(source.baseline || definition.base, 1, 9999)), progressionType: type };
    const rawMode = String(source.progressionMode || '');
    const savedMode = rawMode === 'linear-percent' ? PROGRESSION_MODES.LINEAR : rawMode;
    if (definition.unit === 'seconds') item.progressionMode = PROGRESSION_MODES.TIMED;
    else if ([PROGRESSION_MODES.LINEAR, PROGRESSION_MODES.STRAIGHT].includes(savedMode)) item.progressionMode = savedMode;
    if (definition.unit === 'reps') {
      item.sets = setCount(source.sets || 3);
      const defaultPerSet = type === TYPES.LEG ? 3 : 1;
      const rawIncrease = Number(source.repIncrease);
      if (item.progressionMode) {
        item.repIncrease = Math.round(clamp(Number.isFinite(rawIncrease) && rawIncrease >= 0 ? rawIncrease : defaultPerSet, 0, 1000));
      } else {
        const defaultTotal = defaultPerSet * (definition.laterality === 'per-side' ? 2 : 1);
        let totalIncrease = Number.isFinite(rawIncrease) && rawIncrease >= 0 ? Math.round(rawIncrease) : defaultTotal;
        if (definition.laterality === 'per-side' && totalIncrease % 2 !== 0) totalIncrease += 1;
        item.repIncrease = Math.round(clamp(totalIncrease, 0, 1000));
      }
    }
    return item;
  }
  function normalisePlan(value) {
    if (!value || typeof value !== 'object' || !Array.isArray(value.items) || !value.items.length) return null;
    const plan = Object.assign({}, value, { version: 9, items: value.items.slice(0, EXERCISES.length).map(normaliseItem) });
    plan.sessions = Math.round(clamp(plan.sessions || 18, 1, 120));
    plan.frequency = ['1x', '2x', '3x', '4x', '5x', '6x', '7x'].includes(plan.frequency) ? plan.frequency : '3x';
    plan.lengthMode = plan.lengthMode === 'goal' ? 'goal' : 'sessions';
    plan.scheduleMode = plan.scheduleMode === 'specific-days' || (Array.isArray(plan.days) && plan.days.length) ? 'specific-days' : 'weekly-count';
    plan.days = plan.scheduleMode === 'specific-days' && Array.isArray(plan.days) ? plan.days.filter((day) => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].includes(day)).slice(0, 7) : [];
    if (plan.scheduleMode === 'specific-days' && plan.days.length) plan.frequency = `${plan.days.length}x`;
    plan.timerStartDelay = Math.round(clamp(plan.timerStartDelay || 5, 1, 10));
    return plan;
  }
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
    return (sets === 4 ? [0.62, 0.70, 0.76, 0.84] : [0.58, 0.64, 0.70, 0.76, 0.84]).map((ratio) => Math.max(1, Math.round(max * ratio)));
  }
  function progressionIncrements(type, count) {
    const sets = setCount(count);
    return Array(sets).fill(type === TYPES.LEG ? 3 : 1);
  }
  function progressedSetValues(baseline, count, sessionIndex, type = TYPES.STANDARD) {
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    const increments = progressionIncrements(type, count);
    return setValues(baseline, count).map((value, index) => value + ((session - 1) * increments[index]));
  }
  function planSetValues(itemValue, definitionValue, sessionIndex) {
    const item = itemValue && typeof itemValue === 'object' ? itemValue : {};
    const definition = definitionValue && typeof definitionValue === 'object' ? definitionValue : exerciseDefinition(item.exercise);
    const mode = String(item.progressionMode || '');
    if (![PROGRESSION_MODES.LINEAR, PROGRESSION_MODES.STRAIGHT].includes(mode)) {
      return progressedSetValues(item.baseline, item.sets, sessionIndex, item.progressionType);
    }
    const sets = setCount(item.sets || 3);
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    const fallbackIncrease = String(definition.progressionType || '') === String(TYPES.LEG) ? 3 : 1;
    const rawIncrease = Number(item.repIncrease);
    const increase = Number.isFinite(rawIncrease) && rawIncrease >= 0 ? Math.round(rawIncrease) : fallbackIncrease;
    const finalSet = Math.max(1, Math.round((Number(item.baseline) || 1) * 0.80));
    const offsets = { 1:[0], 2:[-1,0], 3:[-1,-2,0], 4:[-2,-3,-1,0], 5:[-3,-4,-2,-1,0] }[sets];
    const initial = mode === PROGRESSION_MODES.STRAIGHT
      ? Array(sets).fill(finalSet)
      : offsets.map((offset) => Math.max(1, finalSet + (offset * increase)));
    return initial.map((value) => value + ((session - 1) * increase));
  }
  function holdIncrement(seconds) {
    return Math.max(1, Math.round(Number(seconds) || 1)) >= 90 ? 2 : 3;
  }
  function holdValue(baseline, sessionIndex) {
    let seconds = Math.max(1, Math.round(Number(baseline) || 1));
    for (let session = 2; session <= Math.max(1, Math.round(Number(sessionIndex) || 1)); session += 1) seconds += holdIncrement(seconds);
    return seconds;
  }
  function workForSession(items, sessionIndex) {
    return (items || []).map((raw) => {
      const item = normaliseItem(raw);
      const definition = exerciseDefinition(item.exercise);
      return definition.unit === 'seconds'
        ? { item: definition, unit: 'seconds', hold: holdValue(item.baseline, sessionIndex), progressionType: TYPES.TIMED }
        : { item: definition, unit: 'reps', sets: item.sets, values: planSetValues(item, definition, sessionIndex), progressionType: item.progressionType };
    });
  }
  function executionSteps(work) {
    const reps = work.filter((item) => item.unit === 'reps');
    const holds = work.filter((item) => item.unit === 'seconds');
    const steps = [];
    const rounds = Math.max(0, ...reps.map((item) => item.values.length));

    for (let round = 0; round < rounds; round += 1) {
      reps.forEach((entry) => {
        if (entry.values[round] == null) return;
        steps.push({
          name: entry.item.name,
          exercise: entry.item.name,
          exerciseKey: entry.item.name,
          label: `${entry.item.name} - (${entry.values[round]})`,
          target: entry.values[round],
          unit: 'reps',
          isTimed: false,
          progressionType: entry.progressionType,
          laterality: entry.item.laterality,
          familyKey: entry.item.familyKey
        });
      });
    }

    holds.forEach((entry) => {
      const base = {
        exercise: entry.item.name,
        target: entry.hold,
        unit: 'seconds',
        isTimed: true,
        progressionType: TYPES.TIMED,
        laterality: entry.item.laterality,
        familyKey: entry.item.familyKey
      };
      if (entry.item.laterality === 'separate-left-right') {
        ['Left', 'Right'].forEach((side) => {
          steps.push(Object.assign({}, base, {
            name: `${entry.item.name} ${side}`,
            exerciseKey: `${entry.item.name}::${side.toLowerCase()}`,
            label: `${entry.item.name} - ${side} - ${entry.hold} seconds`
          }));
        });
      } else {
        steps.push(Object.assign({}, base, {
          name: entry.item.name,
          exerciseKey: entry.item.name,
          label: `${entry.item.name} - ${entry.hold} seconds`
        }));
      }
    });
    return steps;
  }

  function scheduleDates(plan) {
    const selected = (plan.scheduleMode === 'specific-days' ? (plan.days || []) : []).map((day) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day)).filter((day) => day >= 0);
    const dates = [];
    const requestedStart = parseDate(plan.startDate) || parseDate(today());
    const todayDate = parseDate(today());
    let date = requestedStart < todayDate ? todayDate : requestedStart;
    if (selected.length) {
      while (dates.length < plan.sessions) {
        if (selected.includes(date.getDay())) dates.push(isoDate(date));
        date = addDays(date, 1);
      }
      return dates;
    }
    const weeklyCount = Math.max(1, Math.min(7, Number(String(plan.frequency || '3x').replace('x', '')) || 3));
    const pattern = Array.from({ length:weeklyCount }, (_, index) => Math.floor(((index + 1) * 7) / weeklyCount) - Math.floor((index * 7) / weeklyCount));
    for (let index = 0; index < plan.sessions; index += 1) {
      dates.push(isoDate(date));
      date = addDays(date, pattern[index % pattern.length]);
    }
    return dates;
  }
  function sessionRows(plan, previous = []) {
    const old = new Map(previous.map((row) => [Number(row.session_index), row]));
    return scheduleDates(plan).map((date, index) => {
      const prior = old.get(index + 1) || {};
      return { session_index: index + 1, scheduled_date: date, status: prior.status || 'planned', completed_at: prior.completed_at || null };
    });
  }
  function rollForwardPendingSessions(rows, plan) {
    const source = Array.isArray(rows) ? rows.map((row) => Object.assign({}, row)) : [];
    const pending = source.filter((row) => row.status !== 'done');
    if (!pending.length || String(pending[0].scheduled_date || '') >= today()) return source;
    const futurePlan = Object.assign({}, plan, { startDate:today(), sessions:pending.length });
    const futureDates = scheduleDates(futurePlan);
    let index = 0;
    return source.map((row) => row.status === 'done' ? row : Object.assign({}, row, { scheduled_date:futureDates[index++] || today() }));
  }

  function calculateProgress(rows, plan) {
    let done = 0;
    let nextIndex = null;
    rows.forEach((row) => {
      if (row.status === 'done') done += 1;
      else if (nextIndex == null) nextIndex = Number(row.session_index);
    });
    if (nextIndex == null && rows.length) nextIndex = rows.length + 1;
    return { done, total: rows.length, nextIndex, startDate: plan.startDate };
  }

  function routeState() {
    const path = String(location.pathname || '').replace(/\/+$/, '');
    if (ROUTINE_ROUTE_RE.test(path)) {
      return { raw:'my-routine', target:'my-plan', alias:false, routine:true };
    }
    const match = path.match(ROUTE_RE);
    const raw = match ? String(match[1] || '').toLowerCase() : 'system';
    const target = ALIASES[raw] || raw;
    return { raw, target: TABS.includes(target) ? target : 'system', alias: Boolean(ALIASES[raw]), routine:false };
  }
  function routePath(target) {
    const canonical = TABS.includes(target) ? target : 'system';
    return `${ROUTE_BASE}/${canonical}`;
  }
  function replaceTabButtons() {
    $$('.tab[data-target]').forEach((oldButton) => {
      const button = oldButton.cloneNode(true);
      oldButton.replaceWith(button);
      button.addEventListener('click', (event) => {
        event.preventDefault();
        activateTopTab(button.dataset.target, 'push');
      });
    });
  }
  function activateTopTab(target, historyMode = 'none') {
    if (!TABS.includes(target)) target = 'system';
    activeTopTab = target;
    document.documentElement.setAttribute('data-initial-fitness-tab', target);
    $$('.tab[data-target]').forEach((button) => {
      const active = button.dataset.target === target;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    $$('.section[id]').forEach((section) => section.classList.toggle('active', section.id === target));
    const route = routeState();
    try {
      if (historyMode === 'push' && (route.target !== target || route.raw !== target)) history.pushState({ fitnessTab: target }, '', routePath(target));
      if (historyMode === 'replace' && (route.target !== target || route.raw !== target)) history.replaceState({ fitnessTab: target }, '', routePath(target));
    } catch (_error) {}
    if (target === 'my-plan' || target === 'achievements') ensurePlanLoaded();
    if (target === 'library') renderLibrary();
    if (target === 'my-body') fillBodyProfile();
    try { document.dispatchEvent(new CustomEvent('baseline:fitness-tab-changed', { detail: { target } })); } catch (_error) {}
  }

  function markDirty() { if (!hydrating) dirty = true; }
  function normaliseNativeSelect(select) {
    if (!select) return;
    select.setAttribute('data-native-select', 'true');
    const wrapper = select.parentElement && select.parentElement.classList.contains('bl-select') ? select.parentElement : null;
    if (wrapper && wrapper.parentNode) { wrapper.parentNode.insertBefore(select, wrapper); wrapper.remove(); }
  }
  function exerciseOptions(selected) {
    return FAMILIES.map((family) => {
      const options = EXERCISES.filter((item) => item.familyKey === family.key)
        .map((item) => `<option value="${escapeHtml(item.name)}"${item.name === selected ? ' selected' : ''}>${escapeHtml(item.name)}</option>`)
        .join('');
      return `<optgroup label="${escapeHtml(family.label)}">${options}</optgroup>`;
    }).join('');
  }
  function progressionDescription(definition) {
    if (definition.progressionType === TYPES.TIMED) return 'Hold for the set target; the next target increases by 3 seconds, changing to 2 seconds from 90 seconds.';
    if (definition.progressionType === TYPES.LEG) return '+3 repetitions to every set after success.';
    return '+1 repetition to every set after success.';
  }
  function baselineLabel(definition) { return `Max Baseline (${definition.unit === 'seconds' ? 'Seconds' : 'Reps'})`; }
  function syncExerciseRow(row) {
    const definition = exerciseDefinition($('.ex-select', row)?.value);
    const label = $('.baseline-label', row);
    const setsLabel = $('.sets-label', row);
    const setsSelect = $('.ex-sets', row);
    const baseline = $('.ex-baseline', row);
    const info = $('.exercise-info-button', row);
    const source = $('.exercise-caption-source', row);
    row.dataset.progressionType = definition.progressionType;
    row.dataset.familyKey = definition.familyKey;
    row.dataset.laterality = definition.laterality;
    if (label) label.textContent = baselineLabel(definition);
    if (baseline && (!baseline.value || Number(baseline.value) < 1)) baseline.value = definition.base;
    if (info) { info.setAttribute('aria-label', `Information about ${definition.name}`); info.setAttribute('data-bl-info-title', definition.name); }
    if (source) source.innerHTML = `<strong>${escapeHtml(definition.name)}</strong><p><b>Family:</b> ${escapeHtml(definition.family)} • <b>Movement:</b> ${escapeHtml(definition.movementCategory)} • <b>Level:</b> ${escapeHtml(definition.variationLevel)}</p><p><b>Progression:</b> ${escapeHtml(progressionDescription(definition))}</p><p><b>Good for:</b> ${escapeHtml(definition.goodFor)}</p><p><b>How:</b> ${escapeHtml(definition.how)}</p>`;
    if (definition.unit === 'seconds') {
      if (setsSelect && !setsSelect.disabled) setsSelect.dataset.lastSets = setsSelect.value || '3';
      if (setsLabel) setsLabel.textContent = 'Type';
      if (setsSelect) { setsSelect.innerHTML = '<option value="hold">Hold</option>'; setsSelect.disabled = true; }
    } else {
      if (setsLabel) setsLabel.textContent = 'Sets';
      if (setsSelect) {
        const count = setCount(setsSelect.dataset.lastSets || setsSelect.value || 3);
        setsSelect.innerHTML = [1, 2, 3, 4, 5].map((number) => `<option value="${number}"${number === count ? ' selected' : ''}>${number}</option>`).join('');
        setsSelect.disabled = false;
      }
    }
    try { global.BASELINE_info?.refresh?.(); } catch (_error) {}
  }
  function makeExerciseRow(name) {
    const definition = exerciseDefinition(name);
    const row = document.createElement('div');
    const captionId = `exercise-caption-${++captionSequence}`;
    row.className = 'ex-row';
    row.innerHTML = `<div class="ex-exercise-block"><div class="field-stack ex-field-exercise"><label>Exercise</label><select class="ex-select field-select-fixed" data-native-select="true">${exerciseOptions(definition.name)}</select></div><div class="exercise-info-wrap bl-info-wrap"><button class="exercise-info-button bl-info-button" data-bl-info-button type="button" aria-expanded="false" aria-controls="${captionId}"><span aria-hidden="true">i</span></button><div class="exercise-caption exercise-caption-source bl-info-source" id="${captionId}"></div></div></div><div class="field-stack ex-field-baseline"><label class="baseline-label">${baselineLabel(definition)}</label><input class="ex-baseline field-input-fixed" type="number" min="1" inputmode="numeric" value="${definition.base}"></div><div class="field-stack ex-field-sets"><label class="sets-label">Sets</label><select class="ex-sets field-select-fixed" data-native-select="true"><option>1</option><option>2</option><option selected>3</option><option>4</option><option>5</option></select></div><div class="ex-remove-wrap"><button class="action secondary ex-remove" type="button" aria-label="Remove exercise">×</button></div>`;
    syncExerciseRow(row);
    $('.ex-select', row)?.addEventListener('change', () => { markDirty(); syncExerciseRow(row); syncGoalControls(); });
    $('.ex-baseline', row)?.addEventListener('input', markDirty);
    $('.ex-sets', row)?.addEventListener('change', (event) => { markDirty(); event.currentTarget.dataset.lastSets = event.currentTarget.value; });
    $('.ex-remove', row)?.addEventListener('click', () => {
      markDirty(); row.remove();
      const list = $('#exerciseList');
      if (list && !$('.ex-row', list)) list.append(makeExerciseRow(EXERCISES[0].name));
      syncGoalControls();
    });
    return row;
  }
  function itemsFromUi() {
    const seen = new Set();
    const items = [];
    $$('.ex-row').forEach((row) => {
      const definition = exerciseDefinition($('.ex-select', row)?.value);
      if (seen.has(definition.name)) return;
      seen.add(definition.name);
      const item = { exercise: definition.name, baseline: Math.round(clamp($('.ex-baseline', row)?.value || definition.base, 1, 9999)), progressionType: definition.progressionType };
      if (definition.unit === 'reps') item.sets = setCount($('.ex-sets', row)?.value || $('.ex-sets', row)?.dataset.lastSets);
      items.push(item);
    });
    return items;
  }
  function syncGoalControls() {
    const select = $('#goalExercise');
    if (!select) return;
    const old = select.value;
    const names = $$('.ex-select').map((control) => control.value).filter((value, index, array) => array.indexOf(value) === index);
    select.innerHTML = names.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
    select.value = names.includes(old) ? old : (names[0] || '');
    const label = $('#goalAmountLabel');
    if (label) label.textContent = `Goal amount (${exerciseDefinition(select.value).unit})`;
  }
  function syncLengthMode() {
    const goal = $('#lengthMode')?.value === 'goal';
    if ($('#sessions')) { $('#sessions').disabled = goal; $('#sessions').style.opacity = goal ? '.7' : '1'; }
    if ($('#goalHint')) $('#goalHint').style.display = goal ? '' : 'none';
    if ($('#goalControlsRow')) $('#goalControlsRow').style.opacity = goal ? '1' : '.55';
    if ($('#goalExercise')) $('#goalExercise').disabled = !goal;
    if ($('#goalAmount')) $('#goalAmount').disabled = !goal;
    syncGoalControls();
  }
  function totalSessionsForUi(items) {
    if ($('#lengthMode')?.value !== 'goal') return Math.round(clamp($('#sessions')?.value || 18, 1, 120));
    const definition = exerciseDefinition($('#goalExercise')?.value);
    const target = clamp($('#goalAmount')?.value || definition.base, 1, 99999);
    const source = normaliseItem(items.find((item) => item.exercise === definition.name) || { exercise: definition.name, baseline: definition.base });
    for (let index = 1; index <= 120; index += 1) {
      if (definition.unit === 'seconds' && holdValue(source.baseline, index) >= target) return index;
      if (definition.unit === 'reps' && Math.max(...progressedSetValues(source.baseline, source.sets, index, source.progressionType)) >= target) return index;
    }
    return 120;
  }
  function planFromUi() {
    const items = itemsFromUi();
    const existing = current.planJson || {};
    const lengthMode = $('#lengthMode')?.value || 'sessions';
    const scheduleMode = $('#scheduleMode')?.value === 'specific-days' ? 'specific-days' : 'weekly-count';
    const selectedDays = $$('#specificDayControls input[data-plan-day]:checked').map((control) => control.dataset.planDay);
    const startDate = $('#startDate')?.value && $('#startDate').value >= today() ? $('#startDate').value : today();
    const days = scheduleMode === 'specific-days' ? (selectedDays.length ? selectedDays : [['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][parseDate(startDate).getDay()]]) : [];
    const frequency = scheduleMode === 'specific-days' ? `${days.length}x` : ($('#freq')?.value || '3x');
    const plan = { version: 9, startDate, frequency, scheduleMode, sessions: totalSessionsForUi(items), lengthMode, items, days, timerStartDelay: Math.round(clamp(existing.timerStartDelay || 5, 1, 10)) };
    if (lengthMode === 'goal') plan.goal = { exercise: $('#goalExercise')?.value || '', amount: Math.round(clamp($('#goalAmount')?.value || 1, 1, 99999)) };
    return plan;
  }
  function planText(plan) {
    return ['Baseline Fitness Plan', `Start: ${plan.startDate} | Frequency: ${plan.frequency} Weekly | Sessions: ${plan.sessions}`, '', ...plan.items.map((item) => `${item.exercise}: baseline ${item.baseline} ${exerciseDefinition(item.exercise).unit}${item.sets ? ` | sets ${item.sets}` : ''}`)].join('\n');
  }
  function resetGenerator() {
    hydrating = true;
    try {
      if ($('#startDate')) $('#startDate').value = today();
      if ($('#freq')) $('#freq').value = '3x';
      if ($('#scheduleMode')) $('#scheduleMode').value = 'weekly-count';
      $$('#specificDayControls input[data-plan-day]').forEach((control) => { control.checked = false; });
      global.BASELINE_syncCalisthenicsSchedule?.();
      if ($('#lengthMode')) $('#lengthMode').value = 'sessions';
      if ($('#sessions')) $('#sessions').value = '18';
      if ($('#goalAmount')) $('#goalAmount').value = '';
      const list = $('#exerciseList');
      if (list) { list.innerHTML = ''; list.append(makeExerciseRow(EXERCISES[0].name)); }
      syncLengthMode();
      dirty = false;
    } finally { hydrating = false; }
  }
  function hydrateGenerator(rawPlan) {
    const plan = normalisePlan(rawPlan);
    if (!plan) return;
    hydrating = true;
    try {
      if ($('#startDate')) $('#startDate').value = plan.startDate || today();
      if ($('#freq')) $('#freq').value = plan.frequency;
      if ($('#scheduleMode')) $('#scheduleMode').value = plan.scheduleMode;
      $$('#specificDayControls input[data-plan-day]').forEach((control) => { control.checked = plan.days.includes(control.dataset.planDay); });
      global.BASELINE_syncCalisthenicsSchedule?.();
      if ($('#lengthMode')) $('#lengthMode').value = plan.lengthMode;
      if ($('#sessions')) $('#sessions').value = String(plan.sessions);
      const list = $('#exerciseList');
      if (list) {
        list.innerHTML = '';
        plan.items.forEach((item) => {
          const row = makeExerciseRow(item.exercise);
          const baseline = $('.ex-baseline', row); if (baseline) baseline.value = String(item.baseline);
          const setsSelect = $('.ex-sets', row);
          if (setsSelect && item.sets) { setsSelect.dataset.lastSets = String(item.sets); syncExerciseRow(row); if (!setsSelect.disabled) setsSelect.value = String(item.sets); }
          list.append(row);
        });
      }
      syncLengthMode();
      if (plan.goal) {
        if ($('#goalExercise')) $('#goalExercise').value = plan.goal.exercise || $('#goalExercise').value;
        if ($('#goalAmount')) $('#goalAmount').value = String(plan.goal.amount || '');
      }
      dirty = false;
    } finally { hydrating = false; }
  }

  function planExerciseRows(plan, sessionIndex) {
    return workForSession(plan.items, sessionIndex).map((entry) => {
      const detail = entry.unit === 'seconds'
        ? `Hold for <b>${entry.hold}</b> seconds${entry.item.laterality === 'separate-left-right' ? ' on each side.' : '.'}`
        : `Sets (${entry.sets}): ${entry.values.map((value) => `<b>${value}</b>`).join(' / ')} reps.`;
      return `<div class="session-subcard plan-exercise-row"><b>${escapeHtml(entry.item.name)}</b><div>${detail}</div></div>`;
    }).join('');
  }
  function sessionCard(row, plan, suffix = '') {
    const index = Number(row.session_index);
    const completed = row.status === 'done';
    const completionDate = completionDateValue(row) || row.scheduled_date || today();
    const dateDisplay = completed ? `Completed: ${niceDate(completionDate)}` : `Workout date: ${niceDate(row.scheduled_date)}`;
    const dateEditor = suffix === 'Completed'
      ? `<div class="actions-inline session-completion-date-editor"><label class="field-stack"><span>Completion date</span><input type="date" max="${today()}" value="${escapeHtml(completionDate)}" data-session-completion-date="${index}"></label><button type="button" class="compact-action compact-action--primary" data-save-session-completion-date="${index}">Save date</button><span class="status" data-session-completion-date-status="${index}"></span></div>`
      : '';
    return `<div class="card session-card"><div class="top" style="display:flex;justify-content:space-between;gap:12px"><div><div class="title">Session ${index}${suffix ? ` - ${escapeHtml(suffix)}` : ''}</div><div class="muted">${escapeHtml(dateDisplay)}</div></div>${completed ? '' : '<span class="badge">Planned</span>'}</div>${dateEditor}<div class="divider"></div>${planExerciseRows(plan, index)}</div>`;
  }
  async function saveSessionCompletionDate(button, target) {
    const sessionIndex = Number(button.dataset.saveSessionCompletionDate || 0);
    const field = $(`[data-session-completion-date="${sessionIndex}"]`, target);
    const status = $(`[data-session-completion-date-status="${sessionIndex}"]`, target);
    const completionDate = String(field?.value || '');
    if (!sessionIndex || !/^\d{4}-\d{2}-\d{2}$/.test(completionDate) || completionDate > today()) {
      if (status) status.textContent = 'Choose today or an earlier date.';
      field?.focus();
      return;
    }
    button.disabled = true;
    if (status) status.textContent = 'Saving…';
    const result = FILE_PROTOCOL
      ? { ok:true }
      : await apiJson(`${API}/update_session.php`, { method:'POST', body:{ planId:current.planId, sessionIndex, action:'set_completion_date', completionDate } });
    if (!result.ok) {
      button.disabled = false;
      if (status) status.textContent = 'Could not update the completion date.';
      return;
    }
    if (FILE_PROTOCOL) {
      const row = current.sessions.find((item) => Number(item.session_index) === sessionIndex);
      if (row) row.completed_at = `${completionDate}T12:00:00Z`;
    } else {
      current.sessions = Array.isArray(result.sessions) ? result.sessions : current.sessions;
      current.progress = result.progress || calculateProgress(current.sessions, current.planJson);
    }
    await global.BASELINE_fitnessPlans?.refresh?.();
    renderSavedPlanHeader();
    renderPlanSubtab('completed');
    notifyWorkout();
  }
  function paginatedCards(target, rows, plan, type) {
    if (!target) return;
    const limit = renderLimits[type] || PAGE_SIZE;
    const visible = rows.slice(0, limit);
    target.innerHTML = visible.length ? visible.map((row) => sessionCard(row, plan, type === 'completed' ? 'Completed' : 'Future')).join('') : `<div class="${type}-empty">No ${type === 'completed' ? 'completed' : 'future'} workouts ${type === 'completed' ? 'yet' : 'remain in this plan'}.</div>`;
    $$('[data-save-session-completion-date]', target).forEach((button) => button.addEventListener('click', () => saveSessionCompletionDate(button, target)));
    if (rows.length > visible.length) {
      const more = document.createElement('button');
      more.type = 'button';
      more.className = 'action secondary';
      more.textContent = `Show ${Math.min(PAGE_SIZE, rows.length - visible.length)} more`;
      more.addEventListener('click', () => { renderLimits[type] += PAGE_SIZE; renderPlanSubtab(type); });
      target.append(more);
    }
  }
  function renderPlanSubtab(view = activePlanSubtab) {
    activePlanSubtab = ['current', 'completed', 'future'].includes(view) ? view : 'current';
    $$('.my-plan-subtab').forEach((button) => {
      const active = button.dataset.planView === activePlanSubtab;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    if ($('#currentWorkoutOut')) $('#currentWorkoutOut').hidden = activePlanSubtab !== 'current';
    if ($('#completedWorkoutOut')) $('#completedWorkoutOut').hidden = activePlanSubtab !== 'completed';
    if ($('#futureWorkoutOut')) $('#futureWorkoutOut').hidden = activePlanSubtab !== 'future';
    if ($('#myPlanStatus')) $('#myPlanStatus').hidden = activePlanSubtab !== 'current';
    if (!current.planJson) return;
    if (activePlanSubtab === 'current') renderCurrentWorkout();
    if (activePlanSubtab === 'completed') {
      const rows = current.sessions.filter((row) => row.status === 'done').sort((a, b) => Number(b.session_index) - Number(a.session_index));
      paginatedCards($('#completedWorkoutOut'), rows, current.planJson, 'completed');
    }
    if (activePlanSubtab === 'future') {
      const next = Number(current.progress?.nextIndex || 0);
      const rows = current.sessions.filter((row) => row.status !== 'done' && Number(row.session_index) !== next).sort((a, b) => Number(a.session_index) - Number(b.session_index));
      paginatedCards($('#futureWorkoutOut'), rows, current.planJson, 'future');
    }
  }
  function renderSavedPlanHeader() {
    const target = $('#myPlanOut');
    const plan = current.planJson;
    if (!target || !plan) return;
    const scheduleBadge = plan.scheduleMode === 'specific-days' ? `<span class="badge">Schedule begins: ${escapeHtml(niceDate(plan.startDate))}</span>` : '';
    target.innerHTML = `<div class="card"><div class="my-plan-saved-head"><div><h2 style="margin:0 0 12px">Saved plan</h2><div class="session-plan-meta">${scheduleBadge}<span class="badge">Frequency: ${escapeHtml(plan.frequency)} Weekly</span><span class="badge">Sessions: ${plan.sessions}</span><span class="badge">Progress: ${current.progress?.done || 0}/${current.progress?.total || plan.sessions}</span></div></div><div class="saved-plan-actions"><button class="compact-action compact-action--ghost" type="button" id="editOptionsBtn">Edit Plan</button><button class="compact-action compact-action--danger" type="button" id="deletePlanBtn">Delete Plan</button></div></div></div>`;
    $('#editOptionsBtn', target)?.addEventListener('click', () => { generatorMode = 'edit'; hydrateGenerator(plan); syncPlanShells(); });
    $('#deletePlanBtn', target)?.addEventListener('click', openDeletePlanModal);
  }
  function syncPlanShells() {
    const hasPlan = Boolean(current.planJson);
    const showSaved = hasPlan && generatorMode === 'view';
    if ($('#myPlanGeneratorWrap')) $('#myPlanGeneratorWrap').hidden = showSaved;
    if ($('#myPlanSavedWrap')) $('#myPlanSavedWrap').hidden = !showSaved;
    if ($('#savePlanBtn')) $('#savePlanBtn').textContent = hasPlan && generatorMode === 'edit' ? 'Save plan changes' : 'Save plan';
    if ($('#cancelEditPlanBtn')) $('#cancelEditPlanBtn').hidden = !(hasPlan && generatorMode === 'edit');
    if (showSaved) { renderSavedPlanHeader(); renderPlanSubtab(activePlanSubtab); }
  }
  function renderPreview() {
    const target = $('#planOut');
    const plan = normalisePlan(planFromUi());
    if (!target || !plan) return;
    renderLimits.preview = PAGE_SIZE;
    const rows = sessionRows(plan);
    const draw = () => {
      const visible = rows.slice(0, renderLimits.preview);
      const scheduleBadge = plan.scheduleMode === 'specific-days' ? `<span class="badge">Schedule begins: ${escapeHtml(niceDate(plan.startDate))}</span>` : '';
      target.innerHTML = `<div class="card"><h2>Your plan preview</h2><div class="session-plan-meta">${scheduleBadge}<span class="badge">Frequency: ${escapeHtml(plan.frequency)} Weekly</span><span class="badge">Sessions: ${plan.sessions}</span></div></div>${visible.map((row) => sessionCard(row, plan)).join('')}`;
      if (rows.length > visible.length) {
        const more = document.createElement('button'); more.type = 'button'; more.className = 'action secondary'; more.textContent = `Show ${Math.min(PAGE_SIZE, rows.length - visible.length)} more sessions`;
        more.addEventListener('click', () => { renderLimits.preview += PAGE_SIZE; draw(); });
        target.append(more);
      }
    };
    draw();
  }

  function defaultStepState() { return { completedSteps: 0, started: false, results: {}, pendingFailureStep: null, completionDate: '' }; }
  function readStepState(sessionIndex) {
    const source = readStorage(stepStorageKey(current.planId, sessionIndex), defaultStepState()) || defaultStepState();
    return Object.assign(defaultStepState(), source, { results: source.results && typeof source.results === 'object' ? source.results : {} });
  }
  function writeStepState(sessionIndex, value) { writeStorage(stepStorageKey(current.planId, sessionIndex), Object.assign(defaultStepState(), value)); }
  function accessFor(row, sessionIndex) {
    const due = !row.scheduled_date || row.scheduled_date <= today();
    const done = row.status === 'done';
    const next = Number(current.progress?.nextIndex) === sessionIndex;
    return { due, done, next, can: due && next && !done };
  }
  function workoutContext() {
    const empty = { available: false, canStart: false, planId: current.planId || 0, sessionIndex: 0, stepIndex: 0, step: null, steps: [], completedSteps: 0, totalSteps: 0, started: false, allComplete: false, planComplete: false };
    if (!auth.authed || !current.planJson || !current.sessions.length) return empty;
    const sessionIndex = Number(current.progress?.nextIndex || 0);
    const row = current.sessions.find((item) => Number(item.session_index) === sessionIndex);
    if (!row) return Object.assign(empty, { available: true, allComplete: true, planComplete: true });
    const steps = executionSteps(workForSession(current.planJson.items, sessionIndex));
    const state = readStepState(sessionIndex);
    const completed = Math.round(clamp(state.completedSteps || 0, 0, steps.length));
    const access = accessFor(row, sessionIndex);
    const context = {
      available: true,
      canStart: access.can,
      access,
      planId: current.planId || 0,
      sessionIndex,
      scheduledDate: row.scheduled_date || '',
      stepIndex: completed,
      step: steps[completed] || null,
      steps,
      completedSteps: completed,
      totalSteps: steps.length,
      started: Boolean(state.started),
      results: Object.assign({}, state.results || {}),
      allComplete: Boolean(steps.length && completed >= steps.length),
      planComplete: false,
      timerStartDelay: current.planJson.timerStartDelay || 5
    };
    const adjust = global.BASELINE_FITNESS_EXERCISE_PROGRESSION?.adjustContext;
    return typeof adjust === 'function' ? adjust(context) : context;
  }
  function notifyWorkout() {
    const snapshot = workoutContext();
    workoutListeners.forEach((listener) => { try { listener(snapshot); } catch (_error) {} });
    try { document.dispatchEvent(new CustomEvent('baseline:fitness-workout-updated', { detail: snapshot })); } catch (_error) {}
  }
  function recordStep(status, achieved, inputMode = 'manual') {
    const context = workoutContext();
    if (!context.canStart || !context.started || !context.step) return context;
    const state = readStepState(context.sessionIndex);
    const step = context.step;
    state.started = true;
    state.results[context.stepIndex] = {
      status: step.isTimed ? 'success' : status,
      achieved: Math.round(clamp(achieved, 0, 99999)),
      inputMode: inputMode === 'voice' ? 'voice' : 'manual',
      exercise: step.exercise || step.name,
      exerciseKey: step.exerciseKey || step.name,
      stepName: step.name,
      isTimed: Boolean(step.isTimed),
      unit: step.unit
    };
    state.completedSteps = Math.max(state.completedSteps || 0, context.stepIndex + 1);
    state.pendingFailureStep = null;
    writeStepState(context.sessionIndex, state);
    renderCurrentWorkout();
    return workoutContext();
  }
  function startCurrentWorkout() {
    const context = workoutContext();
    if (!context.canStart || context.planComplete) return context;
    const state = readStepState(context.sessionIndex); state.started = true; writeStepState(context.sessionIndex, state); renderCurrentWorkout(); return workoutContext();
  }
  function resetCurrentWorkout() {
    const context = workoutContext();
    if (context.sessionIndex) removeStorage(stepStorageKey(current.planId, context.sessionIndex));
    renderCurrentWorkout(); return workoutContext();
  }
  async function finishCurrentWorkout() {
    const context = workoutContext();
    if (!context.canStart || !context.allComplete || !context.sessionIndex) return context;
    const state = readStepState(context.sessionIndex);
    const completionDate = /^\d{4}-\d{2}-\d{2}$/.test(String(state.completionDate || '')) && state.completionDate <= today() ? state.completionDate : today();
    const result = FILE_PROTOCOL
      ? { ok: true }
      : await apiJson(`${API}/update_session.php`, { method: 'POST', body: { planId: current.planId, sessionIndex: context.sessionIndex, action: 'toggle_done', completionDate } });
    if (!result.ok) {
      if ($('#myPlanStatus')) $('#myPlanStatus').textContent = 'Could not finish the workout. Your recorded steps and completion date have been kept.';
      return context;
    }
    if (FILE_PROTOCOL) {
      const row = current.sessions.find((item) => Number(item.session_index) === context.sessionIndex); if (row) { row.status = 'done'; row.completed_at = `${completionDate}T12:00:00Z`; }
      current.progress = calculateProgress(current.sessions, current.planJson);
    } else if (result.ok) {
      current.sessions = Array.isArray(result.sessions) ? result.sessions : current.sessions;
      current.progress = result.progress || calculateProgress(current.sessions, current.planJson);
    }
    const completedSession = { planId:current.planId, sessionIndex:context.sessionIndex, completionDate };
    removeStorage(stepStorageKey(current.planId, context.sessionIndex));
    cachePlan(current);
    await global.BASELINE_fitnessPlans?.refresh?.();
    global.BASELINE_fitnessRoutine?.render?.();
    renderSavedPlanHeader(); renderPlanSubtab('current'); renderAchievements();
    try { document.dispatchEvent(new CustomEvent('baseline:fitness-workout-completed', { detail:Object.assign({ source:'finish-current-workout' }, completedSession) })); } catch (_error) {}
    notifyWorkout();
    return workoutContext();
  }
  function formatTimer(seconds) { const total = Math.max(0, Math.round(Number(seconds) || 0)); return `${pad(Math.floor(total / 60))}:${pad(total % 60)}`; }
  function closeTimerModal() { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } if ($('#timerModal')) $('#timerModal').hidden = true; }
  function openTimer(step) {
    const modal = $('#timerModal'); const digits = $('#timerDigits'); const message = $('#timerModalMessage');
    if (!modal || !digits || !message) return;
    closeTimerModal();
    modal.hidden = false;
    let prep = Math.round(clamp(current.planJson?.timerStartDelay || 5, 1, 10));
    let remaining = Math.max(1, Math.round(Number(step.target) || 1));
    let phase = 'prep';
    let completed = false;
    const tick = () => {
      if (phase === 'prep') {
        message.textContent = `Get into position. Hold begins in ${prep} second${prep === 1 ? '' : 's'}.`;
        digits.textContent = formatTimer(prep);
        if (prep <= 1) phase = 'work';
        prep -= 1;
      } else {
        message.textContent = `${step.name} • ${step.target}-second hold.`;
        digits.textContent = formatTimer(remaining);
        if (remaining <= 0 && !completed) {
          completed = true;
          if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
          message.textContent = 'Target complete. This hold has been recorded.';
          recordStep('success', step.target);
          return;
        }
        remaining -= 1;
      }
    };
    tick();
    timerInterval = setInterval(tick, 1000);
  }
  function renderCurrentWorkout() {
    const out = $('#currentWorkoutOut'); const status = $('#myPlanStatus');
    if (!out) return;
    if (!auth.authed || !current.planJson || !current.sessions.length) {
      out.textContent = auth.authed ? 'Save a plan to unlock your current workout view.' : 'Log in and save a plan to see your current workout.';
      if (status) status.textContent = '';
      notifyWorkout(); return;
    }
    const context = workoutContext();
    if (context.planComplete) { out.innerHTML = '<div class="card"><h3 style="margin:0">Plan complete</h3><p class="note">All sessions in this plan have been completed.</p></div>'; if (status) status.textContent = ''; notifyWorkout(); return; }
    const row = current.sessions.find((item) => Number(item.session_index) === context.sessionIndex);
    const state = readStepState(context.sessionIndex);
    if (status) status.textContent = context.access.can ? 'Current workout ready.' : context.access.due ? 'Complete earlier sessions first.' : `Next workout unlocks on ${niceDate(row.scheduled_date)}.`;

    const stepsHtml = context.steps.map((step, index) => {
      const result = state.results[index];
      const active = index === context.completedSteps;
      const canAct = context.access.can && state.started && active;
      const failOpen = state.pendingFailureStep === index;
      const resultText = result
        ? step.isTimed
          ? `<div class="step-status success">✓ Recorded · ${escapeHtml(result.achieved)} seconds</div>`
          : `<div class="step-status ${result.status === 'success' ? 'success' : 'failed'}">${result.status === 'success' ? '✓ Succeeded' : '✕ Failed'} · Achieved ${escapeHtml(result.achieved)}</div>`
        : '';
      const timedActions = step.isTimed
        ? `<button class="compact-action compact-action--ghost step-timer" type="button" data-step="${index}" ${canAct ? '' : 'disabled'}>Start Countdown</button><button class="compact-action compact-action--success step-hold-toggle" type="button" data-step="${index}" ${canAct ? '' : 'disabled'}>Record Hold</button>`
        : `<button class="compact-action compact-action--success step-icon-btn step-success" type="button" data-step="${index}" ${canAct ? '' : 'disabled'}>✓</button><button class="compact-action compact-action--danger step-icon-btn step-fail-toggle" type="button" data-step="${index}" ${canAct ? '' : 'disabled'}>✕</button>`;
      const entry = failOpen
        ? `<div class="failure-entry"><label for="failedAmount${index}" class="note">${step.isTimed ? 'Enter completed hold time (seconds)' : `Enter achieved ${escapeHtml(step.unit)}`}</label><input id="failedAmount${index}" class="failed-amount" type="number" min="0" inputmode="numeric"><button class="compact-action ${step.isTimed ? 'compact-action--success step-hold-save' : 'compact-action--danger step-fail-save'}" type="button" data-step="${index}">Save</button></div>`
        : '';
      return `<div class="current-step ${index < context.completedSteps ? 'done' : active ? 'active' : ''}"><div class="current-step-head"><div><b class="current-step-label">${escapeHtml(step.label)}</b></div><div class="step-actions">${resultText}${timedActions}</div></div>${entry}</div>`;
    }).join('');

    const scheduleBadge = current.planJson.scheduleMode === 'specific-days' ? `<span class="badge">Workout date: ${escapeHtml(niceDate(row.scheduled_date))}</span>` : '';
    const completionDate = /^\d{4}-\d{2}-\d{2}$/.test(String(state.completionDate || '')) ? state.completionDate : today();
    out.innerHTML = `<div class="card session-card"><div class="section-head-actions"><div><h3 style="margin:0">Session ${context.sessionIndex} - Current</h3><div class="session-plan-meta" style="margin-top:12px">${scheduleBadge}<span class="badge">${context.completedSteps}/${context.totalSteps} steps done</span></div></div><div class="workout-start-actions"><button class="action secondary voice-workout-start" type="button" id="startVoiceWorkoutBtn" ${context.access.can ? '' : 'disabled'}>Start (Voice Activated)</button><button class="action" type="button" id="startWorkoutBtn" ${context.access.can ? '' : 'disabled'}>${state.started ? 'Continue Workout' : 'Start Workout'}</button></div></div><div class="actions-inline session-completion-date-editor"><label class="field-stack"><span>Workout completion date</span><input id="currentWorkoutCompletionDate" type="date" max="${today()}" value="${escapeHtml(completionDate)}"></label><span class="note">This date is used when you finish the workout and in Routine Log.</span></div><div class="session-step-list">${stepsHtml}</div><div class="actions-inline" style="margin-top:14px"><button class="compact-action compact-action--primary" id="finishWorkout" ${context.access.can && context.allComplete ? '' : 'disabled'}>Finish workout</button><button class="compact-action compact-action--ghost" id="resetWorkout" ${context.access.can ? '' : 'disabled'}>Reset workout steps</button></div></div>`;
    $('#currentWorkoutCompletionDate', out)?.addEventListener('change', (event) => {
      const next = readStepState(context.sessionIndex);
      next.completionDate = String(event.currentTarget.value || '') <= today() ? String(event.currentTarget.value || '') : today();
      event.currentTarget.value = next.completionDate || today();
      writeStepState(context.sessionIndex, next);
    });
    $('#startWorkoutBtn', out)?.addEventListener('click', startCurrentWorkout);
    $$('.step-success', out).forEach((button) => button.addEventListener('click', () => { const step = context.steps[Number(button.dataset.step)]; recordStep('success', step.target); }));
    $$('.step-fail-toggle', out).forEach((button) => button.addEventListener('click', () => { const next = readStepState(context.sessionIndex); next.started = true; next.pendingFailureStep = Number(button.dataset.step); writeStepState(context.sessionIndex, next); renderCurrentWorkout(); }));
    $$('.step-hold-toggle', out).forEach((button) => button.addEventListener('click', () => { const next = readStepState(context.sessionIndex); next.started = true; next.pendingFailureStep = Number(button.dataset.step); writeStepState(context.sessionIndex, next); renderCurrentWorkout(); }));
    $$('.step-fail-save', out).forEach((button) => button.addEventListener('click', () => { const field = $(`#failedAmount${button.dataset.step}`, out); if (!field || String(field.value).trim() === '') { field?.focus(); return; } recordStep('failed', field.value); }));
    $$('.step-hold-save', out).forEach((button) => button.addEventListener('click', () => { const field = $(`#failedAmount${button.dataset.step}`, out); if (!field || Number(field.value) <= 0) { field?.focus(); return; } closeTimerModal(); recordStep('success', field.value); }));
    $$('.step-timer', out).forEach((button) => button.addEventListener('click', () => openTimer(context.steps[Number(button.dataset.step)])));
    $('#resetWorkout', out)?.addEventListener('click', resetCurrentWorkout);
    $('#finishWorkout', out)?.addEventListener('click', finishCurrentWorkout);
    notifyWorkout();
  }

  function applyAuth(snapshot) {
    const next = snapshot && snapshot.authed ? { authed: true, name: String(snapshot.name || snapshot.user?.name || '').trim() } : { authed: false, name: '' };
    const unchanged = next.authed === auth.authed && next.name === auth.name;
    auth = next;
    const button = $('#fitnessAccountBtn'); if (button) button.textContent = auth.authed ? 'Account' : 'Log in / Sign up';
    if (unchanged) return;
    fillBodyProfile();
    current = { planId: 0, planJson: null, sessions: [], progress: null };
    hydratedPlanId = null; generatorMode = 'create'; planLoadPromise = null; planLoadSerial += 1;
    syncPlanShells();
    if (activeTopTab === 'my-plan' || activeTopTab === 'achievements') ensurePlanLoaded(true);
  }
  function bindAuthOnce() {
    let attempts = 0;
    const attach = () => {
      const api = global.BASELINE_auth;
      if (api && typeof api.get === 'function') {
        applyAuth(api.get());
        if (typeof api.onChange === 'function') authUnsubscribe = api.onChange((snapshot) => applyAuth(snapshot));
        return;
      }
      attempts += 1;
      if (attempts < 40) setTimeout(attach, 100);
    };
    attach();
  }
  function cachePlan(saved) {
    if (!auth.authed) return;
    if (saved && saved.planJson) writeStorage(userCacheKey(), { planId: saved.planId || 0, planJson: saved.planJson, sessions: saved.sessions || [], progress: saved.progress || null, cachedAt: Date.now() });
    else removeStorage(userCacheKey());
  }
  function useCachedPlan() {
    if (!auth.authed) return false;
    const cached = readStorage(userCacheKey(), null);
    const plan = normalisePlan(cached?.planJson);
    if (!plan) return false;
    const cachedRows = rollForwardPendingSessions(Array.isArray(cached.sessions) ? cached.sessions.slice(0, plan.sessions) : sessionRows(plan), plan);
    current = { planId: cached.planId || 0, planJson: plan, sessions: cachedRows, progress: calculateProgress(cachedRows, plan) };
    generatorMode = 'view'; syncPlanShells(); return true;
  }
  async function loadPlanFromServer(force = false) {
    if (!auth.authed) {
      current = { planId: 0, planJson: null, sessions: [], progress: null }; generatorMode = 'create'; syncPlanShells();
      if ($('#myPlanOut')) $('#myPlanOut').textContent = 'Log in and save a plan to see your schedule here.';
      return;
    }
    if (!force && current.planJson) return;
    const serial = ++planLoadSerial;
    if ($('#myPlanStatus')) $('#myPlanStatus').textContent = 'Loading your plan…';
    const response = FILE_PROTOCOL ? readStorage(userPlanKey(), null) : await apiJson(`${API}/get_plan.php`);
    if (serial !== planLoadSerial) return;
    const saved = FILE_PROTOCOL ? response : (response && response.ok && response.hasPlan ? { planId: response.planId, planJson: response.planJson, sessions: response.sessions, progress: response.progress } : null);
    const plan = normalisePlan(saved?.planJson);
    if (!plan) {
      current = { planId: 0, planJson: null, sessions: [], progress: null }; generatorMode = 'create'; hydratedPlanId = null; cachePlan(null); resetGenerator(); syncPlanShells();
      if ($('#myPlanStatus')) $('#myPlanStatus').textContent = response?.error === 'timeout' ? 'Plan loading timed out. Try again.' : '';
      return;
    }
    const rows = rollForwardPendingSessions(Array.isArray(saved.sessions) && saved.sessions.length ? saved.sessions.slice(0, plan.sessions) : sessionRows(plan), plan);
    current = { planId: saved.planId || 0, planJson: plan, sessions: rows, progress: calculateProgress(rows, plan) };
    cachePlan(current); generatorMode = 'view'; renderLimits = { completed: PAGE_SIZE, future: PAGE_SIZE, preview: PAGE_SIZE }; syncPlanShells(); renderAchievements();
    if (!dirty && hydratedPlanId !== current.planId) { hydrateGenerator(plan); hydratedPlanId = current.planId; }
  }
  function ensurePlanLoaded(force = false) {
    if (!auth.authed) { loadPlanFromServer(false); return Promise.resolve(); }
    if (!force && current.planJson) return Promise.resolve();
    if (!force && planLoadPromise) return planLoadPromise;
    if (!force) useCachedPlan();
    planLoadPromise = loadPlanFromServer(force).finally(() => { planLoadPromise = null; });
    return planLoadPromise;
  }

  async function savePlan() {
    if (!auth.authed) {
      try { global.BASELINE_openAuth?.(); } catch (_error) { $('#bl-auth-toggle')?.click(); }
      if ($('#savePlanStatus')) $('#savePlanStatus').textContent = 'Log in or sign up to save this plan.';
      return;
    }
    const plan = normalisePlan(planFromUi()); if (!plan) return;
    const updating = Boolean(current.planId);
    if ($('#savePlanStatus')) $('#savePlanStatus').textContent = updating ? 'Saving changes…' : 'Saving…';
    let response;
    if (FILE_PROTOCOL) {
      const rows = sessionRows(plan, updating ? current.sessions : []); const saved = { planId: updating ? current.planId : Date.now(), planJson: plan, sessions: rows, progress: calculateProgress(rows, plan) };
      writeStorage(userPlanKey(), saved); response = { ok: true };
    } else {
      response = await apiJson(`${API}/${updating ? 'plan_update.php' : 'save_plan.php'}`, { method: 'POST', body: updating ? { planId: current.planId, planText: planText(plan), planJson: plan, reschedule: true } : { planText: planText(plan), planJson: plan } });
    }
    if (!response.ok) { if ($('#savePlanStatus')) $('#savePlanStatus').textContent = 'Save failed. Please try again.'; return; }
    dirty = false; generatorMode = 'view'; current = { planId: 0, planJson: null, sessions: [], progress: null }; hydratedPlanId = null;
    await ensurePlanLoaded(true);
    if ($('#savePlanStatus')) $('#savePlanStatus').textContent = updating ? 'Plan updated.' : 'Saved.';
  }
  function openDeletePlanModal() {
    if ($('#deletePlanModal')) $('#deletePlanModal').hidden = false;
    if ($('#deletePlanConfirmInput')) { $('#deletePlanConfirmInput').value = ''; $('#deletePlanConfirmInput').focus(); }
    if ($('#confirmDeletePlanBtn')) $('#confirmDeletePlanBtn').disabled = true;
    if ($('#deletePlanStatus')) $('#deletePlanStatus').textContent = '';
  }
  function closeDeletePlanModal() { if ($('#deletePlanModal')) $('#deletePlanModal').hidden = true; }
  async function deletePlan() {
    const response = FILE_PROTOCOL ? { ok: true } : await apiJson(`${API}/delete_plan.php`, { method: 'POST', body: { planId: current.planId } });
    if (!response.ok) { if ($('#deletePlanStatus')) $('#deletePlanStatus').textContent = 'Could not delete the plan.'; return; }
    removeStorage(userPlanKey()); removeStorage(userCacheKey());
    current = { planId: 0, planJson: null, sessions: [], progress: null }; generatorMode = 'create'; hydratedPlanId = null; resetGenerator(); closeDeletePlanModal(); syncPlanShells(); renderAchievements();
  }

  async function loadProfiles() {
    const select = $('#profileSelect'); if (!select) return;
    const response = FILE_PROTOCOL ? { ok: true, profiles: [] } : await apiJson(`${API}/list_profiles.php`);
    const names = response.ok ? (response.profiles || response.names || []) : [];
    select.innerHTML = '<option value="">Select profile…</option>' + names.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
  }
  async function renderProfilePlan(name) {
    const target = $('#profilePlanOut'); if (!target) return;
    if (!name) { target.textContent = 'Select a profile to view their latest saved plan.'; return; }
    target.textContent = 'Loading plan…';
    const response = await apiJson(`${API}/get_plan.php`, { params: { name } });
    const plan = normalisePlan(response?.planJson);
    if (!response.ok || !plan) { target.textContent = 'No saved plan for this profile yet.'; return; }
    const rows = Array.isArray(response.sessions) ? response.sessions.slice(0, PAGE_SIZE) : sessionRows(plan).slice(0, PAGE_SIZE);
    const scheduleBadge = plan.scheduleMode === 'specific-days' ? `<span class="badge">Schedule begins: ${escapeHtml(niceDate(plan.startDate))}</span>` : '';
    target.innerHTML = `<div class="card"><h2>${escapeHtml(name)}’s plan</h2><div class="session-plan-meta">${scheduleBadge}<span class="badge">Sessions: ${plan.sessions}</span></div></div>${rows.map((row) => sessionCard(row, plan)).join('')}${plan.sessions > rows.length ? `<p class="note">Showing the first ${rows.length} sessions.</p>` : ''}`;
  }
  function renderAchievements() {
    const summary = $('#achSummary'); const grid = $('#achGrid'); if (!summary || !grid) return;
    if (!auth.authed) { summary.textContent = 'Log in to track milestones.'; grid.innerHTML = ''; return; }
    const done = Number(current.progress?.done || 0); const total = Number(current.progress?.total || 0);
    summary.innerHTML = `<strong>Sessions done:</strong> ${done} • <strong>Plan progress:</strong> ${done}/${total}`;
    const items = [['First Session', done >= 1], ['10 Sessions', done >= 10], ['30 Sessions', done >= 30], ['Plan Completed', total > 0 && done === total]];
    grid.innerHTML = items.map(([name, on]) => `<div class="ach-card ${on ? 'unlocked' : ''}"><div class="ach-icon">${on ? '✓' : '○'}</div><div class="ach-meta"><div class="name">${name}</div><div class="prog">${on ? 'Unlocked' : 'Locked'}</div></div></div>`).join('');
  }
  function renderLibrary() {
    const target = $('#exerciseLibrary'); if (!target) return;
    const query = String($('#exSearch')?.value || '').toLowerCase();
    const group = $('#exGroup')?.value || 'all';
    target.innerHTML = EXERCISES
      .filter((item) => (group === 'all' || item.familyKey === group) && (!query || `${item.name} ${item.family} ${item.section} ${item.movementCategory} ${item.unit}`.toLowerCase().includes(query)))
      .map((item) => `<div class="card exercise-card"><div class="title">${escapeHtml(item.name)}</div><div class="muted">${escapeHtml(item.family)} • ${escapeHtml(item.movementCategory)} • ${escapeHtml(item.variationLevel)}</div><div class="divider"></div><p>${escapeHtml(item.how)}</p><p class="note"><b>Progression:</b> ${escapeHtml(progressionDescription(item))}</p></div>`)
      .join('');
  }

  function positive(value) { const number = Number(value); return Number.isFinite(number) && number > 0 ? number : null; }
  function bodyCalculations(profile) {
    const age = positive(profile.age); const height = positive(profile.height); const weight = positive(profile.weight); const waist = positive(profile.waist); const hips = positive(profile.hips); const metres = height ? height / 100 : null;
    const bmi = metres && weight ? weight / (metres * metres) : null; let bmiCategory = '';
    if (bmi) bmiCategory = bmi < 18.5 ? 'Below range' : bmi < 25 ? 'Healthy range' : bmi < 30 ? 'Above range' : 'High range';
    const bmr = age && height && weight && ['male', 'female'].includes(profile.sex) ? 10 * weight + 6.25 * height - 5 * age + (profile.sex === 'male' ? 5 : -161) : null;
    const factors = { sedentary: 1.2, light: 1.375, moderate: 1.55, very: 1.725, extra: 1.9 };
    return { height, weight, bmi, bmiCategory, bmr, tdee: bmr && factors[profile.activity] ? bmr * factors[profile.activity] : null, waistHeight: waist && height ? waist / height : null, waistHip: waist && hips ? waist / hips : null, healthyMin: metres ? 18.5 * metres * metres : null, healthyMax: metres ? 24.9 * metres * metres : null, bodySurface: height && weight ? Math.sqrt(height * weight / 3600) : null };
  }
  function formatMetric(value, digits = 1, suffix = '') { return Number.isFinite(value) ? `${value.toFixed(digits)}${suffix}` : '—'; }
  function metricCard(label, value, detail = '') { return `<div class="body-summary-card"><div class="body-summary-label">${escapeHtml(label)}</div><div class="body-summary-value">${escapeHtml(value)}</div>${detail ? `<div class="note" style="margin-top:5px">${escapeHtml(detail)}</div>` : ''}</div>`; }
  function readBodyProfile() { const value = readStorage(bodyProfileKey(), null); return value && typeof value === 'object' ? value : {}; }
  function profileFromForm() { const form = $('#bodyProfileForm'); const output = {}; if (form) new FormData(form).forEach((value, name) => { output[name] = String(value).trim(); }); return output; }
  function renderBodyCalculations(profile) {
    const target = $('#bodyProfileCalculations'); if (!target) return; const calc = bodyCalculations(profile);
    target.innerHTML = `${metricCard('BMI', formatMetric(calc.bmi, 1), calc.bmiCategory)}${metricCard('BMR', formatMetric(calc.bmr, 0, ' kcal/day'))}${metricCard('Daily energy', formatMetric(calc.tdee, 0, ' kcal/day'))}${metricCard('Waist-to-height', formatMetric(calc.waistHeight, 2))}${metricCard('Waist-to-hip', formatMetric(calc.waistHip, 2))}${metricCard('Body surface area', formatMetric(calc.bodySurface, 2, ' m²'))}`;
  }
  function renderBodySummary() {
    const target = $('#bodyOverallSummary'); if (!target) return; const profile = readBodyProfile(); const calc = bodyCalculations(profile);
    if (!calc.height || !calc.weight) { target.innerHTML = '<div class="card"><h2>Overall Summary</h2><p class="note">Complete your Body Profile to create your body summary and calculations.</p></div>'; return; }
    const healthy = calc.healthyMin && calc.healthyMax ? `${calc.healthyMin.toFixed(1)}–${calc.healthyMax.toFixed(1)} kg` : '—';
    target.innerHTML = `<div class="card"><h2>Overall Summary</h2><p class="note">Your latest saved body profile and calculated indicators.</p><div class="body-summary-grid">${metricCard('Weight', formatMetric(calc.weight, 1, ' kg'))}${metricCard('BMI', formatMetric(calc.bmi, 1), calc.bmiCategory)}${metricCard('BMR', formatMetric(calc.bmr, 0, ' kcal/day'), 'Estimated resting energy')}${metricCard('Daily energy', formatMetric(calc.tdee, 0, ' kcal/day'), 'Estimated from activity level')}${metricCard('Healthy BMI weight range', healthy)}${metricCard('Waist-to-height', formatMetric(calc.waistHeight, 2))}${metricCard('Waist-to-hip', formatMetric(calc.waistHip, 2))}${metricCard('Body surface area', formatMetric(calc.bodySurface, 2, ' m²'))}${metricCard('Resting heart rate', positive(profile.restingHeartRate) ? `${Math.round(profile.restingHeartRate)} bpm` : '—')}</div></div>`;
  }
  function fillBodyProfile() {
    const profile = readBodyProfile(); const form = $('#bodyProfileForm');
    if (form) Array.from(form.elements).forEach((field) => { if (field.name && Object.prototype.hasOwnProperty.call(profile, field.name)) field.value = profile[field.name]; });
    renderBodyCalculations(profile); renderBodySummary();
  }
  function setBodySubtab(view) {
    if (!['overall', 'profile', 'services'].includes(view)) view = 'overall';
    $$('.my-body-subtab').forEach((button) => { const active = button.dataset.bodyView === view; button.classList.toggle('active', active); button.setAttribute('aria-selected', String(active)); });
    $$('.my-body-panel').forEach((panel) => { panel.hidden = panel.dataset.bodyPanel !== view; });
  }

  function bindUi() {
    $$('.my-plan-subtab').forEach((button) => button.addEventListener('click', () => renderPlanSubtab(button.dataset.planView)));
    $$('.my-body-subtab').forEach((button) => button.addEventListener('click', () => setBodySubtab(button.dataset.bodyView)));
    $('#bodyProfileForm')?.addEventListener('input', () => renderBodyCalculations(profileFromForm()));
    $('#bodyProfileForm')?.addEventListener('submit', (event) => { event.preventDefault(); const profile = profileFromForm(); writeStorage(bodyProfileKey(), profile); renderBodyCalculations(profile); renderBodySummary(); if ($('#bodyProfileStatus')) $('#bodyProfileStatus').textContent = 'Body profile saved.'; });
    $('#connectGarminBtn')?.addEventListener('click', () => { if ($('#garminConnectionStatus')) $('#garminConnectionStatus').textContent = 'Garmin OAuth credentials are not configured on the server yet.'; });
    $('#addExerciseBtn')?.addEventListener('click', () => { markDirty(); const used = new Set(itemsFromUi().map((item) => item.exercise)); const next = EXERCISES.find((item) => !used.has(item.name)) || EXERCISES[0]; $('#exerciseList')?.append(makeExerciseRow(next.name)); syncGoalControls(); });
    $('#lengthMode')?.addEventListener('change', () => { markDirty(); syncLengthMode(); });
    $('#goalExercise')?.addEventListener('change', () => { markDirty(); syncGoalControls(); });
    ['startDate', 'freq', 'sessions', 'goalAmount'].forEach((id) => { const control = $(`#${id}`); control?.addEventListener('input', markDirty); control?.addEventListener('change', markDirty); });
    $('#genBtn')?.addEventListener('click', renderPreview);
    $('#savePlanBtn')?.addEventListener('click', savePlan);
    $('#cancelEditPlanBtn')?.addEventListener('click', () => { generatorMode = 'view'; syncPlanShells(); });
    $('#profileRefresh')?.addEventListener('click', loadProfiles);
    $('#profileSelect')?.addEventListener('change', (event) => renderProfilePlan(event.currentTarget.value));
    $('#exSearch')?.addEventListener('input', renderLibrary);
    $('#exGroup')?.addEventListener('change', renderLibrary);
    $('#closeTimerModalBtn')?.addEventListener('click', closeTimerModal);
    $('#cancelDeletePlanBtn')?.addEventListener('click', closeDeletePlanModal);
    $('#deletePlanConfirmInput')?.addEventListener('input', (event) => { if ($('#confirmDeletePlanBtn')) $('#confirmDeletePlanBtn').disabled = String(event.currentTarget.value || '').trim() !== 'DELETE'; });
    $('#confirmDeletePlanBtn')?.addEventListener('click', deletePlan);
    const refresh = $('#profileRefresh'); const host = refresh?.parentElement;
    if (host && !$('#fitnessAccountBtn')) { const button = document.createElement('button'); button.type = 'button'; button.id = 'fitnessAccountBtn'; button.className = 'action'; button.textContent = 'Log in / Sign up'; button.addEventListener('click', () => { try { global.BASELINE_openAuth?.(); } catch (_error) { $('#bl-auth-toggle')?.click(); } }); host.append(button); }
  }

  function init() {
    document.documentElement.setAttribute('data-baseline-fitness-runtime', BUILD);
    document.documentElement.setAttribute('data-baseline-fitness-tab-owner', BUILD);
    replaceTabButtons();
    global.BASELINE_selectTab = (target, options = {}) => activateTopTab(ALIASES[target] || target, options.silentHistory ? 'none' : 'push');
    global.addEventListener('popstate', () => activateTopTab(routeState().target, 'none'));
    $$('select').forEach(normaliseNativeSelect);
    resetGenerator();
    bindUi();
    bindAuthOnce();
    renderLibrary(); renderAchievements(); fillBodyProfile(); setBodySubtab('overall'); renderPlanSubtab('current');
    const route = routeState(); activateTopTab(route.target, route.alias ? 'replace' : 'none');
  }

  global.BASELINE_fitnessWorkout = Object.freeze({
    BUILD,
    getCurrentContext: workoutContext,
    startSession: startCurrentWorkout,
    succeedCurrentStep: (inputMode = 'manual') => { const context = workoutContext(); return recordStep('success', context.step?.target || 0, inputMode); },
    failCurrentStep: (achieved, inputMode = 'manual') => recordStep('failed', achieved, inputMode),
    recordTimedCurrentStep: (achieved, inputMode = 'manual') => recordStep('success', achieved, inputMode),
    finishSession: finishCurrentWorkout,
    resetSession: resetCurrentWorkout,
    onChange(listener) { workoutListeners.add(listener); return () => workoutListeners.delete(listener); }
  });
  global.BASELINE_FITNESS_DEBUG = Object.freeze({ BUILD, TYPES, FAMILIES, FAMILY_ORDER, EXERCISES, PROGRESSION_MODES, setValues, progressionIncrements, progressedSetValues, planSetValues, holdIncrement, holdValue, normalisePlan, workForSession, work: workForSession, executionSteps, exerciseOptions });
  if (typeof module !== 'undefined' && module.exports) module.exports = global.BASELINE_FITNESS_DEBUG;
  if (typeof document === 'undefined' || typeof global.addEventListener !== 'function') return;

  global.addEventListener('pagehide', () => { closeTimerModal(); if (typeof authUnsubscribe === 'function') authUnsubscribe(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})(typeof window !== 'undefined' ? window : globalThis);

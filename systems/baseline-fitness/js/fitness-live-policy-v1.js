/* Baseline Fitness — final live policy for flexible scheduling and workout access.
   This module does not render a second Fitness app. It extends the existing
   plan/workout data owners with policy the base runtime does not yet model:
   optional weekly frequency ranges, early starts and progression shared by
   the same exercise across multiple Calisthenics plans. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_LIVE_POLICY_V1__) return;
  global.__BASELINE_FITNESS_LIVE_POLICY_V1__ = true;
  if ((document.documentElement.dataset.app || document.body?.dataset.app) !== 'fitness') return;

  const document = global.document;
  const RANGE_ID = 'frequencyRangeMax';
  const EARLY_PREFIX = '__bl_fitness_start_early_v1__::';
  let fetchWrapped = false;
  let progressionWrapped = false;
  let workoutWrapped = false;
  let pendingEarlyAction = 'manual';
  let rangeDirty = false;
  let refreshTimer = 0;

  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
    }[character]));
  }

  function selectedPlanId() {
    try { return Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0); }
    catch (_error) { return 0; }
  }

  function plans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }

  function selectedPlan() {
    const id = selectedPlanId();
    const all = plans();
    return all.find((plan) => Number(plan?.planId) === id) || all[0] || null;
  }

  function selectedPlanJson() {
    return selectedPlan()?.planJson || null;
  }

  function weeklyMinimum(plan = selectedPlanJson()) {
    const raw = String(plan?.frequency || $('#freq')?.value || '1x');
    return Math.max(1, Math.min(7, Number(raw.replace('x','')) || 1));
  }

  function weeklyMaximum(plan = selectedPlanJson()) {
    const minimum = weeklyMinimum(plan);
    const raw = Number(plan?.frequencyRangeMax || 0);
    return raw > minimum && raw <= 7 ? raw : 0;
  }

  function isFlexibleWeekly(plan = selectedPlanJson()) {
    const mode = String(plan?.scheduleMode || $('#scheduleMode')?.value || 'weekly-count');
    return mode !== 'specific-days';
  }

  function frequencyLabel(plan = selectedPlanJson()) {
    if (!plan) return '';
    if (String(plan.scheduleMode || 'weekly-count') === 'specific-days') {
      const days = Array.isArray(plan.days) ? plan.days.filter(Boolean) : [];
      return days.length ? days.join(', ') : 'Specific weekdays';
    }
    const min = weeklyMinimum(plan);
    const max = weeklyMaximum(plan);
    if (max) return `${min}–${max} days each week`;
    return `${min} day${min === 1 ? '' : 's'} each week`;
  }

  function injectStyles() {
    if ($('#baselineFitnessLivePolicyStyle')) return;
    const style = document.createElement('style');
    style.id = 'baselineFitnessLivePolicyStyle';
    style.textContent = `
      #exerciseList{overflow:visible!important}
      #myPlanGeneratorWrap .card{overflow:visible}
      #exerciseList .ex-row{position:relative!important;overflow:visible!important}
      #exerciseList .ex-row:has(.ex-picker-menu:not([hidden])){z-index:100000!important}
      #exerciseList .ex-row:has(.ex-picker-menu:not([hidden])) .ex-field-exercise{z-index:100001!important}
      #exerciseList .ex-picker-menu{
        z-index:100002!important;
        opacity:1!important;
        background:#10090c!important;
        background-color:#10090c!important;
        backdrop-filter:none!important;
        -webkit-backdrop-filter:none!important;
        pointer-events:auto!important;
        isolation:isolate!important;
      }
      #exerciseList .ex-picker-menu *{pointer-events:auto!important}
      .ex-picker-inline-status{
        margin-top:7px;
        padding:8px 10px;
        border:1px solid rgba(177,18,38,.48);
        border-radius:10px;
        background:#2b1017;
        color:rgba(255,255,255,.92);
        font-size:.86rem;
        line-height:1.3;
      }
      .fitness-frequency-block{gap:8px!important}
      .fitness-frequency-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px}
      .fitness-frequency-grid>.field-stack{margin:0!important;min-width:0}
      .fitness-frequency-grid label{min-height:24px;display:flex;align-items:end;font-weight:800}
      html[data-flex-weekly-count="true"] #currentWorkoutOut .session-plan-meta .badge:first-child,
      html[data-flex-weekly-count="true"] #futureWorkoutOut .session-card .muted,
      html[data-flex-weekly-count-preview="true"] #planOut .session-card .muted{display:none!important}
      .fitness-start-early-overlay{
        position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;
        padding:20px;background:rgba(0,0,0,.66)
      }
      .fitness-start-early-overlay[hidden]{display:none!important}
      .fitness-start-early-dialog{
        width:min(430px,calc(100vw - 40px));padding:22px;border:1px solid rgba(188,42,63,.52);
        border-radius:20px;background:#10090c;color:rgba(255,255,255,.94);box-shadow:0 28px 80px rgba(0,0,0,.65)
      }
      .fitness-start-early-dialog h3{margin:0 0 8px;font-size:1.35rem}
      .fitness-start-early-dialog p{margin:0 0 18px;color:rgba(255,255,255,.72)}
      .fitness-start-early-actions{display:flex;justify-content:flex-end;gap:10px}
      .fitness-start-early-actions button{min-width:88px}
      @media(max-width:680px){.fitness-frequency-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function rangeOptions(minimum) {
    const options = ['<option value="">Not Selected</option>'];
    for (let value = 2; value <= 7; value += 1) {
      options.push(`<option value="${value}"${value <= minimum ? ' disabled' : ''}>${value}</option>`);
    }
    return options.join('');
  }

  function syncRangeOptions() {
    const field = $('#' + RANGE_ID);
    if (!field) return;
    const minimum = weeklyMinimum({ frequency:$('#freq')?.value || '1x' });
    const selected = Number(field.value || 0);
    field.innerHTML = rangeOptions(minimum);
    field.value = selected > minimum && selected <= 7 ? String(selected) : '';
  }

  function ensureRangeControl() {
    const freq = $('#freq');
    if (!freq) return;
    const original = freq.closest('.field-stack');
    if (!original) return;
    let range = $('#' + RANGE_ID);
    if (!range) {
      original.classList.add('fitness-frequency-block');
      const originalLabel = original.querySelector('label[for="freq"]');
      const grid = document.createElement('div');
      grid.className = 'fitness-frequency-grid';
      const minimumWrap = document.createElement('div');
      minimumWrap.className = 'field-stack';
      if (originalLabel) minimumWrap.appendChild(originalLabel);
      minimumWrap.appendChild(freq);
      const maximumWrap = document.createElement('div');
      maximumWrap.className = 'field-stack';
      maximumWrap.innerHTML = `<label for="${RANGE_ID}">Range</label><select id="${RANGE_ID}" class="field-select-fixed" aria-label="Maximum days each week"><option value="">Not Selected</option></select>`;
      grid.append(minimumWrap, maximumWrap);
      original.replaceChildren(grid);
      range = maximumWrap.querySelector('select');
      range.addEventListener('change', () => { rangeDirty = true; patchFrequencyPresentation(); });
      freq.addEventListener('change', () => { rangeDirty = true; syncRangeOptions(); patchFrequencyPresentation(); });
      $('#scheduleMode')?.addEventListener('change', patchFrequencyPresentation);
    }
    syncRangeOptions();
    const plan = selectedPlanJson();
    if (!rangeDirty && plan && String(plan.scheduleMode || 'weekly-count') !== 'specific-days') {
      const value = weeklyMaximum(plan);
      range.value = value ? String(value) : '';
    }
    patchFrequencyPresentation();
  }

  function currentUiRange() {
    const min = weeklyMinimum({ frequency:$('#freq')?.value || '1x' });
    const max = Number($('#' + RANGE_ID)?.value || 0);
    return { min, max:max > min && max <= 7 ? max : 0 };
  }

  function patchFrequencyPresentation() {
    const plan = selectedPlanJson();
    const weekly = isFlexibleWeekly(plan || { scheduleMode:$('#scheduleMode')?.value || 'weekly-count' });
    document.documentElement.setAttribute('data-flex-weekly-count', weekly ? 'true' : 'false');
    document.documentElement.setAttribute('data-flex-weekly-count-preview', $('#scheduleMode')?.value === 'specific-days' ? 'false' : 'true');
    const rangeField = $('#' + RANGE_ID)?.closest('.field-stack');
    if (rangeField) rangeField.hidden = $('#scheduleMode')?.value === 'specific-days';

    const label = plan ? frequencyLabel(plan) : (() => {
      const value = currentUiRange();
      return value.max ? `${value.min}–${value.max} days each week` : `${value.min} day${value.min === 1 ? '' : 's'} each week`;
    })();

    $$('#myPlanOut .badge,#planOut .badge').forEach((badge) => {
      if (/^Frequency:/i.test(String(badge.textContent || '').trim())) badge.textContent = `Frequency: ${label}`;
    });

    const context = global.BASELINE_fitnessWorkout?.getCurrentContext?.();
    if (context?.available && weekly) {
      const status = $('#myPlanStatus');
      if (status && !context.planComplete) status.textContent = 'Current workout available within your weekly frequency.';
    }
  }

  function installFetchWrapper() {
    if (fetchWrapped || typeof global.fetch !== 'function') return;
    fetchWrapped = true;
    const previousFetch = global.fetch.bind(global);
    global.fetch = function (input, init = {}) {
      let url = null;
      try { url = new URL(input instanceof Request ? input.url : String(input), global.location.href); } catch (_error) {}
      if (!url || (!url.pathname.endsWith('/save_plan.php') && !url.pathname.endsWith('/plan_update.php'))) return previousFetch(input, init);
      const next = Object.assign({}, init || {});
      if (typeof next.body === 'string') {
        try {
          const payload = JSON.parse(next.body);
          if (payload?.planJson && typeof payload.planJson === 'object') {
            const plan = Object.assign({}, payload.planJson);
            if (String(plan.scheduleMode || $('#scheduleMode')?.value || 'weekly-count') !== 'specific-days') {
              const range = currentUiRange();
              plan.scheduleMode = 'weekly-count';
              plan.days = [];
              plan.frequencyMin = range.min;
              if (range.max) plan.frequencyRangeMax = range.max;
              else delete plan.frequencyRangeMax;
              plan.flexibleWeekly = true;
            } else {
              delete plan.frequencyMin;
              delete plan.frequencyRangeMax;
              delete plan.flexibleWeekly;
            }
            payload.planJson = plan;
            next.body = JSON.stringify(payload);
          }
        } catch (_error) {}
      }
      return previousFetch(input, next);
    };
  }

  function catalogueDefinition(name) {
    const target = String(name || '').replace(/\s+(Left|Right)$/i,'').trim();
    const entries = global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || [];
    return entries.find((entry) => String(entry?.name || '').localeCompare(target,'en-GB',{ sensitivity:'base' }) === 0) || null;
  }

  function plansContaining(exercise) {
    const target = String(exercise || '').replace(/\s+(Left|Right)$/i,'').trim();
    return plans().filter((plan) => Array.isArray(plan?.planJson?.items) && plan.planJson.items.some((item) => String(item?.exercise || '').localeCompare(target,'en-GB',{ sensitivity:'base' }) === 0));
  }

  function canonicalExerciseItem(exercise) {
    const target = String(exercise || '').replace(/\s+(Left|Right)$/i,'').trim();
    const candidates = plansContaining(target).map((plan) => ({
      plan,
      item:plan.planJson.items.find((entry) => String(entry?.exercise || '').localeCompare(target,'en-GB',{ sensitivity:'base' }) === 0)
    })).filter((entry) => entry.item);
    if (!candidates.length) return null;
    candidates.sort((left,right) => {
      const a = Date.parse(left.plan?.createdAt || '') || Number(left.plan?.planId || 0);
      const b = Date.parse(right.plan?.createdAt || '') || Number(right.plan?.planId || 0);
      return a - b;
    });
    const master = Object.assign({}, candidates[0].item);
    const baselines = candidates.map((entry) => Number(entry.item?.baseline || 0)).filter((value) => Number.isFinite(value) && value > 0);
    if (baselines.length) master.baseline = Math.max(...baselines);
    return master;
  }

  function completedExerciseSessions(exercise) {
    return plansContaining(exercise).reduce((total, plan) => {
      const sessions = Array.isArray(plan?.sessions) ? plan.sessions : [];
      return total + sessions.filter((session) => String(session?.status || '') === 'done').length;
    }, 0);
  }

  function holdTarget(baseline, sessionIndex) {
    let seconds = Math.max(1, Math.round(Number(baseline) || 1));
    for (let session = 2; session <= Math.max(1, Number(sessionIndex) || 1); session += 1) seconds += seconds >= 90 ? 2 : 3;
    return seconds;
  }

  function setStepTarget(step, target) {
    const copy = Object.assign({}, step, { target });
    const label = String(copy.label || '');
    if (copy.isTimed || copy.unit === 'seconds') {
      if (/guide\s+\d+\s+seconds/i.test(label)) copy.label = label.replace(/guide\s+\d+\s+seconds/i, `guide ${target} seconds`);
      return copy;
    }
    const perSide = copy.laterality === 'per-side';
    if (/\(\d+(?:\s+per side)?\)/.test(label)) copy.label = label.replace(/\(\d+(?:\s+per side)?\)/, `(${target}${perSide ? ' per side' : ''})`);
    else copy.label = `${copy.name || copy.exercise} - (${target}${perSide ? ' per side' : ''})`;
    return copy;
  }

  function applySharedExerciseProgression(context) {
    if (!context || !Array.isArray(context.steps) || !context.steps.length) return context;
    const next = Object.assign({}, context);
    const steps = context.steps.map((step) => step && typeof step === 'object' ? Object.assign({}, step) : step);
    const groups = new Map();
    steps.forEach((step,index) => {
      if (!step) return;
      const exercise = String(step.exercise || step.name || '').replace(/\s+(Left|Right)$/i,'').trim();
      if (!exercise) return;
      if (!groups.has(exercise)) groups.set(exercise, []);
      groups.get(exercise).push(index);
    });

    groups.forEach((indexes, exercise) => {
      const item = canonicalExerciseItem(exercise);
      const definition = catalogueDefinition(exercise);
      if (!item || !definition) return;
      const sessionIndex = completedExerciseSessions(exercise) + 1;
      if (definition.unit === 'seconds') {
        const target = holdTarget(item.baseline, sessionIndex);
        indexes.forEach((index) => { steps[index] = setStepTarget(steps[index], target); });
        return;
      }
      const progression = global.BASELINE_FITNESS_EXERCISE_PROGRESSION;
      const targets = typeof progression?.progressedTargets === 'function'
        ? progression.progressedTargets(item, definition, sessionIndex)
        : [];
      if (!targets.length) return;
      indexes.forEach((index,position) => {
        steps[index] = setStepTarget(steps[index], targets[Math.min(position,targets.length - 1)]);
      });
    });
    next.steps = steps;
    next.step = steps[Math.max(0, Number(context.stepIndex || 0))] || null;
    next.sharedExerciseProgression = true;
    return next;
  }

  function earlyPermissionKey(context) {
    return `${EARLY_PREFIX}${Number(context?.planId || 0)}::${Number(context?.sessionIndex || 0)}`;
  }

  function hasEarlyPermission(context) {
    try { return global.sessionStorage?.getItem(earlyPermissionKey(context)) === 'yes'; }
    catch (_error) { return false; }
  }

  function applyWorkoutAccess(context) {
    if (!context || !context.available || context.planComplete) return context;
    const next = Object.assign({}, context);
    next.access = Object.assign({}, context.access || {});
    const plan = selectedPlanJson();
    const nextSession = next.access.next !== false && !next.access.done;
    if (!nextSession) return next;
    const flexible = String(plan?.scheduleMode || 'weekly-count') !== 'specific-days';
    next.scheduleMode = flexible ? 'weekly-count' : 'specific-days';
    if (flexible) {
      next.access.due = true;
      next.access.can = true;
      next.canStart = true;
      next.flexibleWeekly = true;
      next.startEarlyRequired = false;
      return next;
    }
    if (!next.access.due) {
      next.access.can = true;
      next.canStart = true;
      next.startEarlyRequired = !hasEarlyPermission(next);
    }
    return next;
  }

  function applyPolicy(context) {
    return applyWorkoutAccess(applySharedExerciseProgression(context));
  }

  function installRuntimeWrappers() {
    const progression = global.BASELINE_FITNESS_EXERCISE_PROGRESSION;
    if (progression && !progression.__baselineFitnessLivePolicyV1) {
      const original = progression;
      const wrapped = Object.assign({}, original, {
        __baselineFitnessLivePolicyV1:true,
        adjustContext(source) {
          const adjusted = typeof original.adjustContext === 'function' ? original.adjustContext(source) : source;
          return applyPolicy(adjusted);
        }
      });
      global.BASELINE_FITNESS_EXERCISE_PROGRESSION = Object.freeze(wrapped);
      progressionWrapped = true;
    }

    const workout = global.BASELINE_fitnessWorkout;
    if (workout && !workout.__baselineFitnessLivePolicyV1) {
      const original = workout;
      const wrapped = Object.assign({}, original, {
        __baselineFitnessLivePolicyV1:true,
        getCurrentContext() { return applyPolicy(original.getCurrentContext?.()); },
        startSession() { return applyPolicy(original.startSession?.()); },
        succeedCurrentStep(inputMode = 'manual') { return applyPolicy(original.succeedCurrentStep?.(inputMode)); },
        failCurrentStep(achieved, inputMode = 'manual') { return applyPolicy(original.failCurrentStep?.(achieved,inputMode)); },
        recordTimedCurrentStep(achieved, inputMode = 'manual') { return applyPolicy(original.recordTimedCurrentStep?.(achieved,inputMode)); },
        async finishSession() { return applyPolicy(await original.finishSession?.()); },
        resetSession() { return applyPolicy(original.resetSession?.()); },
        onChange(listener) {
          return original.onChange?.((context) => {
            try { listener(applyPolicy(context)); } catch (_error) {}
          });
        }
      });
      global.BASELINE_fitnessWorkout = Object.freeze(wrapped);
      workoutWrapped = true;
    }
    return progressionWrapped || workoutWrapped;
  }

  function ensureStartEarlyPrompt() {
    if ($('#fitnessStartEarlyPrompt')) return;
    const overlay = document.createElement('div');
    overlay.id = 'fitnessStartEarlyPrompt';
    overlay.className = 'fitness-start-early-overlay';
    overlay.hidden = true;
    overlay.innerHTML = `<div class="fitness-start-early-dialog" role="dialog" aria-modal="true" aria-labelledby="fitnessStartEarlyTitle"><h3 id="fitnessStartEarlyTitle">Start Early?</h3><p id="fitnessStartEarlyMessage">This workout is scheduled for a later date. Start it now?</p><div class="fitness-start-early-actions"><button type="button" class="action secondary" data-start-early="no">No</button><button type="button" class="action" data-start-early="yes">Yes</button></div></div>`;
    document.body.appendChild(overlay);
  }

  function openStartEarly(context, action) {
    ensureStartEarlyPrompt();
    pendingEarlyAction = action === 'voice' ? 'voice' : 'manual';
    const overlay = $('#fitnessStartEarlyPrompt');
    const message = $('#fitnessStartEarlyMessage');
    if (message) message.textContent = context?.scheduledDate ? `This workout is scheduled for ${context.scheduledDate}. Start it now?` : 'This workout is scheduled for later. Start it now?';
    if (overlay) overlay.hidden = false;
    overlay?.querySelector('[data-start-early="yes"]')?.focus();
  }

  function closeStartEarly() {
    const overlay = $('#fitnessStartEarlyPrompt');
    if (overlay) overlay.hidden = true;
  }

  function approveStartEarly() {
    const context = global.BASELINE_fitnessWorkout?.getCurrentContext?.();
    if (!context?.available) { closeStartEarly(); return; }
    try { global.sessionStorage?.setItem(earlyPermissionKey(context), 'yes'); } catch (_error) {}
    closeStartEarly();
    global.BASELINE_fitnessWorkout?.startSession?.();
    if (pendingEarlyAction === 'voice') {
      global.setTimeout(() => document.getElementById('startVoiceWorkoutBtn')?.click(), 80);
    }
  }

  function refreshPlansSoon() {
    clearTimeout(refreshTimer);
    refreshTimer = global.setTimeout(() => global.BASELINE_fitnessPlans?.refresh?.(), 650);
  }

  function patchWorkoutStatus(event) {
    const context = applyPolicy(event?.detail || global.BASELINE_fitnessWorkout?.getCurrentContext?.());
    if (!context?.available || context.planComplete) return;
    const status = $('#myPlanStatus');
    if (status) {
      if (context.flexibleWeekly) status.textContent = 'Current workout available within your weekly frequency.';
      else if (context.startEarlyRequired) status.textContent = 'This session is scheduled for later. You can start it early.';
    }
    patchFrequencyPresentation();
  }

  function validateExerciseRows(event) {
    const trigger = event.target?.closest?.('#genBtn,#savePlanBtn');
    if (!trigger) return;
    let firstInvalid = null;
    $$('#exerciseList .ex-row').forEach((row) => {
      const input = row.querySelector('.ex-search-input');
      const select = row.querySelector('.ex-select');
      if (!input || !select) return;
      const text = String(input.value || '').trim();
      const definition = catalogueDefinition(text);
      let status = row.querySelector('.ex-picker-inline-status');
      if (!definition) {
        if (!status) {
          status = document.createElement('div');
          status.className = 'ex-picker-inline-status';
          row.querySelector('.ex-field-exercise')?.appendChild(status);
        }
        status.textContent = 'Select an exercise from the results.';
        firstInvalid ||= input;
      } else {
        status?.remove();
        input.setCustomValidity('');
        if (select.value !== definition.name) {
          select.value = definition.name;
          select.dispatchEvent(new Event('change',{ bubbles:true }));
        }
      }
    });
    if (firstInvalid) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      firstInvalid.setCustomValidity('');
      firstInvalid.focus();
      firstInvalid.closest('.ex-field-exercise')?.querySelector('.ex-picker-toggle')?.click();
    }
  }

  function bindEvents() {
    /* Do not let the superseded native custom-validity handler trap focus or
       prevent navigation. Exact catalogue matching is validated only when the
       user actually generates or saves the plan. */
    document.addEventListener('blur', (event) => {
      if (!event.target?.matches?.('.ex-search-input')) return;
      event.target.setCustomValidity('');
      event.stopImmediatePropagation();
    }, true);
    document.addEventListener('change', (event) => {
      if (event.target?.matches?.('.ex-search-input')) {
        event.target.setCustomValidity('');
        event.stopImmediatePropagation();
        return;
      }
      if (event.target?.id === 'scheduleMode' || event.target?.id === 'freq') global.setTimeout(patchFrequencyPresentation,0);
    }, true);
    document.addEventListener('input', (event) => {
      if (event.target?.matches?.('.ex-search-input')) {
        event.target.setCustomValidity('');
        event.target.closest('.ex-row')?.querySelector('.ex-picker-inline-status')?.remove();
      }
    }, true);
    document.addEventListener('click', (event) => {
      validateExerciseRows(event);
      const start = event.target?.closest?.('#startWorkoutBtn,#startVoiceWorkoutBtn');
      if (start) {
        const context = global.BASELINE_fitnessWorkout?.getCurrentContext?.();
        if (context?.startEarlyRequired && !hasEarlyPermission(context)) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          openStartEarly(context, start.id === 'startVoiceWorkoutBtn' ? 'voice' : 'manual');
          return;
        }
      }
      if (event.target?.closest?.('#finishWorkout')) refreshPlansSoon();
      if (event.target?.closest?.('.tab[data-target],#cancelEditPlanBtn')) {
        $$('.ex-search-input').forEach((input) => input.setCustomValidity(''));
        $$('.ex-picker-inline-status').forEach((node) => node.remove());
      }
      const early = event.target?.closest?.('[data-start-early]');
      if (early) {
        event.preventDefault();
        if (early.dataset.startEarly === 'yes') approveStartEarly();
        else closeStartEarly();
      }
      if (event.target?.closest?.('#genBtn,#editOptionsBtn')) global.setTimeout(patchFrequencyPresentation,50);
    }, true);
    document.addEventListener('baseline:fitness-plans-updated', () => {
      installRuntimeWrappers();
      rangeDirty = false;
      ensureRangeControl();
      patchFrequencyPresentation();
    });
    document.addEventListener('baseline:fitness-workout-updated', patchWorkoutStatus);
    global.addEventListener('pageshow', () => {
      installRuntimeWrappers();
      ensureRangeControl();
      patchFrequencyPresentation();
    });
  }

  function wrapPlanDateSuggestions() {
    const api = global.BASELINE_fitnessPlans;
    if (!api || api.__baselineFlexibleWeeklyV1) return;
    const original = api;
    const wrapped = Object.assign({}, original, {
      __baselineFlexibleWeeklyV1:true,
      getPlansForDate(date) {
        const entries = original.getPlansForDate?.(date) || [];
        const byId = new Map((original.getPlans?.() || []).map((plan) => [Number(plan.planId), plan]));
        return entries.filter((entry) => {
          if (entry?.status !== 'due') return true;
          const plan = byId.get(Number(entry.planId));
          return String(plan?.planJson?.scheduleMode || 'weekly-count') === 'specific-days';
        });
      }
    });
    global.BASELINE_fitnessPlans = Object.freeze(wrapped);
  }

  function boot() {
    injectStyles();
    ensureStartEarlyPrompt();
    installFetchWrapper();
    ensureRangeControl();
    installRuntimeWrappers();
    wrapPlanDateSuggestions();
    bindEvents();
    patchFrequencyPresentation();
    [100,300,700,1500].forEach((delay) => global.setTimeout(() => {
      installRuntimeWrappers();
      wrapPlanDateSuggestions();
      ensureRangeControl();
      patchFrequencyPresentation();
    },delay));
    document.documentElement.setAttribute('data-baseline-fitness-live-policy','v1');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

/* Baseline Fitness — live policy for flexible weekly scheduling and shared progression.
   Weekly-count plans are frequency targets, not appointments: they never lock
   a workout to a generated weekday. Specific-weekday plans may be started
   early after an explicit Yes/No prompt. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_LIVE_POLICY_V2__) return;
  global.__BASELINE_FITNESS_LIVE_POLICY_V2__ = true;
  global.__BASELINE_FITNESS_LIVE_POLICY_V1__ = true;
  const document = global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app) !== 'fitness') return;

  const RANGE_ID = 'frequencyRangeMax';
  const EARLY_PREFIX = '__bl_fitness_start_early_v2__::';
  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  let fetchWrapped = false;
  let rangeDirty = false;
  let pendingEarlyAction = 'manual';
  let refreshTimer = 0;

  function plans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }
  function selectedPlanId() {
    try { return Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0); }
    catch (_error) { return 0; }
  }
  function selectedPlan() {
    const list = plans();
    const id = selectedPlanId();
    return list.find((plan) => Number(plan?.planId) === id) || list[0] || null;
  }
  function planJson() { return selectedPlan()?.planJson || null; }
  function weeklyMinimum(plan=planJson()) {
    return Math.max(1,Math.min(7,Number(String(plan?.frequency || $('#freq')?.value || '1x').replace(/\D/g,'')) || 1));
  }
  function weeklyMaximum(plan=planJson()) {
    const min = weeklyMinimum(plan);
    const max = Number(plan?.frequencyRangeMax || 0);
    return max > min && max <= 7 ? max : 0;
  }
  function flexibleWeekly(plan=planJson()) {
    return String(plan?.scheduleMode || $('#scheduleMode')?.value || 'weekly-count') !== 'specific-days';
  }
  function frequencyLabel(plan=planJson()) {
    if (!plan) {
      const min = weeklyMinimum({ frequency:$('#freq')?.value || '1x' });
      const max = Number($('#'+RANGE_ID)?.value || 0);
      return max > min ? `${min}–${max} days each week` : `${min} day${min === 1 ? '' : 's'} each week`;
    }
    if (!flexibleWeekly(plan)) {
      const days = Array.isArray(plan.days) ? plan.days.filter(Boolean) : [];
      return days.length ? days.join(', ') : 'Specific weekdays';
    }
    const min = weeklyMinimum(plan);
    const max = weeklyMaximum(plan);
    return max ? `${min}–${max} days each week` : `${min} day${min === 1 ? '' : 's'} each week`;
  }

  function injectStyles() {
    if ($('#baselineFitnessLivePolicyStyle')) return;
    const style = document.createElement('style');
    style.id = 'baselineFitnessLivePolicyStyle';
    style.textContent = `
      #exerciseList,#myPlanGeneratorWrap .card,#exerciseList .ex-row{overflow:visible!important}
      #exerciseList .ex-row{position:relative!important}
      #exerciseList .ex-row:has(.ex-picker-menu:not([hidden])){z-index:100000!important}
      #exerciseList .ex-row:has(.ex-picker-menu:not([hidden])) .ex-field-exercise{z-index:100001!important}
      #exerciseList .ex-picker-menu{z-index:100002!important;opacity:1!important;background:#10090c!important;background-color:#10090c!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;pointer-events:auto!important;isolation:isolate!important}
      #exerciseList .ex-picker-menu *{pointer-events:auto!important}
      .ex-picker-inline-status{margin-top:7px;padding:8px 10px;border:1px solid rgba(177,18,38,.48);border-radius:10px;background:#2b1017;color:rgba(255,255,255,.92);font-size:.86rem;line-height:1.3}
      .fitness-frequency-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px}
      .fitness-frequency-grid>.field-stack{margin:0!important;min-width:0}
      .fitness-frequency-grid label{min-height:24px;display:flex;align-items:end;font-weight:800}
      html[data-flex-weekly-count="true"] #currentWorkoutOut .session-plan-meta .badge:first-child,
      html[data-flex-weekly-count="true"] #futureWorkoutOut .session-card .muted,
      html[data-flex-weekly-count-preview="true"] #planOut .session-card .muted{display:none!important}
      .fitness-start-early-overlay{position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.66)}
      .fitness-start-early-overlay[hidden]{display:none!important}
      .fitness-start-early-dialog{width:min(430px,calc(100vw - 40px));padding:22px;border:1px solid rgba(188,42,63,.52);border-radius:20px;background:#10090c;color:rgba(255,255,255,.94);box-shadow:0 28px 80px rgba(0,0,0,.65)}
      .fitness-start-early-dialog h3{margin:0 0 8px;font-size:1.35rem}.fitness-start-early-dialog p{margin:0 0 18px;color:rgba(255,255,255,.72)}
      .fitness-start-early-actions{display:flex;justify-content:flex-end;gap:10px}.fitness-start-early-actions button{min-width:88px}
      @media(max-width:680px){.fitness-frequency-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function rangeOptions(minimum) {
    let html = '<option value="">Not Selected</option>';
    for (let value=2; value<=7; value+=1) html += `<option value="${value}"${value <= minimum ? ' disabled' : ''}>${value}</option>`;
    return html;
  }
  function syncRangeOptions() {
    const field = $('#'+RANGE_ID);
    if (!field) return;
    const min = weeklyMinimum({ frequency:$('#freq')?.value || '1x' });
    const old = Number(field.value || 0);
    field.innerHTML = rangeOptions(min);
    field.value = old > min && old <= 7 ? String(old) : '';
  }
  function ensureRangeControl() {
    const freq = $('#freq');
    const host = freq?.closest('.field-stack');
    if (!freq || !host) return;
    let range = $('#'+RANGE_ID);
    if (!range) {
      const label = host.querySelector('label[for="freq"]');
      const grid = document.createElement('div');
      grid.className = 'fitness-frequency-grid';
      const minField = document.createElement('div');
      minField.className = 'field-stack';
      if (label) minField.appendChild(label);
      minField.appendChild(freq);
      const maxField = document.createElement('div');
      maxField.className = 'field-stack';
      maxField.innerHTML = `<label for="${RANGE_ID}">Range</label><select id="${RANGE_ID}" class="field-select-fixed" aria-label="Maximum days each week"><option value="">Not Selected</option></select>`;
      grid.append(minField,maxField);
      host.replaceChildren(grid);
      range = maxField.querySelector('select');
      range.addEventListener('change',() => { rangeDirty=true; patchUi(); });
      freq.addEventListener('change',() => { rangeDirty=true; syncRangeOptions(); patchUi(); });
      $('#scheduleMode')?.addEventListener('change',patchUi);
    }
    syncRangeOptions();
    const plan = planJson();
    if (!rangeDirty && plan && flexibleWeekly(plan)) {
      const max = weeklyMaximum(plan);
      range.value = max ? String(max) : '';
    }
  }
  function uiRange() {
    const min = weeklyMinimum({ frequency:$('#freq')?.value || '1x' });
    const raw = Number($('#'+RANGE_ID)?.value || 0);
    return { min,max:raw > min && raw <= 7 ? raw : 0 };
  }

  function installFetchWrapper() {
    if (fetchWrapped || typeof global.fetch !== 'function') return;
    fetchWrapped = true;
    const previous = global.fetch.bind(global);
    global.fetch = function(input,init={}) {
      let url = null;
      try { url = new URL(input instanceof Request ? input.url : String(input),global.location.href); } catch (_error) {}
      if (!url || (!url.pathname.endsWith('/save_plan.php') && !url.pathname.endsWith('/plan_update.php'))) return previous(input,init);
      const next = Object.assign({},init || {});
      if (typeof next.body === 'string') {
        try {
          const payload = JSON.parse(next.body);
          if (payload?.planJson && typeof payload.planJson === 'object') {
            const plan = Object.assign({},payload.planJson);
            if (String(plan.scheduleMode || $('#scheduleMode')?.value || 'weekly-count') !== 'specific-days') {
              const range = uiRange();
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
      return previous(input,next);
    };
  }

  function definition(name) {
    const target = String(name || '').replace(/\s+(Left|Right)$/i,'').trim();
    return (global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || []).find((item) => String(item?.name || '').localeCompare(target,'en-GB',{ sensitivity:'base' }) === 0) || null;
  }
  function plansContaining(exercise) {
    const target = String(exercise || '').replace(/\s+(Left|Right)$/i,'').trim();
    return plans().filter((plan) => Array.isArray(plan?.planJson?.items) && plan.planJson.items.some((item) => String(item?.exercise || '').localeCompare(target,'en-GB',{ sensitivity:'base' }) === 0));
  }
  function sharedItem(exercise) {
    const target = String(exercise || '').replace(/\s+(Left|Right)$/i,'').trim();
    const candidates = plansContaining(target).map((plan) => ({ plan,item:plan.planJson.items.find((entry) => String(entry?.exercise || '').localeCompare(target,'en-GB',{ sensitivity:'base' }) === 0) })).filter((entry) => entry.item);
    if (!candidates.length) return null;
    candidates.sort((a,b) => ((Date.parse(a.plan?.createdAt || '') || Number(a.plan?.planId || 0)) - (Date.parse(b.plan?.createdAt || '') || Number(b.plan?.planId || 0))));
    const item = Object.assign({},candidates[0].item);
    const baselines = candidates.map((entry) => Number(entry.item?.baseline || 0)).filter((value) => Number.isFinite(value) && value > 0);
    if (baselines.length) item.baseline = Math.max(...baselines);
    return item;
  }
  function completedSharedSessions(exercise) {
    return plansContaining(exercise).reduce((total,plan) => total + (Array.isArray(plan?.sessions) ? plan.sessions.filter((session) => session?.status === 'done').length : 0),0);
  }
  function holdTarget(baseline,sessionIndex) {
    let seconds = Math.max(1,Math.round(Number(baseline) || 1));
    for (let session=2; session<=Math.max(1,Number(sessionIndex)||1); session+=1) seconds += seconds >= 90 ? 2 : 3;
    return seconds;
  }
  function relabelStep(step,target) {
    const copy = Object.assign({},step,{ target });
    const label = String(copy.label || '');
    if (copy.isTimed || copy.unit === 'seconds') {
      if (/guide\s+\d+\s+seconds/i.test(label)) copy.label = label.replace(/guide\s+\d+\s+seconds/i,`guide ${target} seconds`);
      return copy;
    }
    const perSide = copy.laterality === 'per-side';
    if (/\(\d+(?:\s+per side)?\)/.test(label)) copy.label = label.replace(/\(\d+(?:\s+per side)?\)/,`(${target}${perSide ? ' per side' : ''})`);
    else copy.label = `${copy.name || copy.exercise} - (${target}${perSide ? ' per side' : ''})`;
    return copy;
  }
  function applySharedProgression(context) {
    if (!context || !Array.isArray(context.steps) || !context.steps.length) return context;
    const next = Object.assign({},context);
    const steps = context.steps.map((step) => step && typeof step === 'object' ? Object.assign({},step) : step);
    const positions = new Map();
    steps.forEach((step,index) => {
      const name = String(step?.exercise || step?.name || '').replace(/\s+(Left|Right)$/i,'').trim();
      if (!name) return;
      if (!positions.has(name)) positions.set(name,[]);
      positions.get(name).push(index);
    });
    positions.forEach((indexes,exercise) => {
      const item = sharedItem(exercise);
      const def = definition(exercise);
      if (!item || !def) return;
      const sharedSession = completedSharedSessions(exercise)+1;
      if (def.unit === 'seconds') {
        const target = holdTarget(item.baseline,sharedSession);
        indexes.forEach((index) => { steps[index] = relabelStep(steps[index],target); });
        return;
      }
      const progression = global.BASELINE_FITNESS_EXERCISE_PROGRESSION;
      const targets = typeof progression?.progressedTargets === 'function' ? progression.progressedTargets(item,def,sharedSession) : [];
      if (!targets.length) return;
      indexes.forEach((index,position) => { steps[index] = relabelStep(steps[index],targets[Math.min(position,targets.length-1)]); });
    });
    next.steps = steps;
    next.step = steps[Math.max(0,Number(context.stepIndex || 0))] || null;
    next.sharedExerciseProgression = true;
    return next;
  }

  function permissionKey(context) { return `${EARLY_PREFIX}${Number(context?.planId||0)}::${Number(context?.sessionIndex||0)}`; }
  function hasEarlyPermission(context) {
    try { return global.sessionStorage?.getItem(permissionKey(context)) === 'yes'; }
    catch (_error) { return false; }
  }
  function applyAccess(context) {
    if (!context || !context.available || context.planComplete) return context;
    const next = Object.assign({},context,{ access:Object.assign({},context.access || {}) });
    if (next.access.next === false || next.access.done) return next;
    if (flexibleWeekly(planJson())) {
      next.access.due = true;
      next.access.can = true;
      next.canStart = true;
      next.flexibleWeekly = true;
      next.startEarlyRequired = false;
    } else if (!next.access.due) {
      next.access.can = true;
      next.canStart = true;
      next.startEarlyRequired = !hasEarlyPermission(next);
    }
    return next;
  }
  function applyPolicy(context) { return applyAccess(applySharedProgression(context)); }

  function installRuntimeWrappers() {
    const progression = global.BASELINE_FITNESS_EXERCISE_PROGRESSION;
    if (progression && !progression.__baselineFitnessLivePolicyV2) {
      const original = progression;
      global.BASELINE_FITNESS_EXERCISE_PROGRESSION = Object.freeze(Object.assign({},original,{
        __baselineFitnessLivePolicyV2:true,
        adjustContext(source) {
          const adjusted = typeof original.adjustContext === 'function' ? original.adjustContext(source) : source;
          return applyPolicy(adjusted);
        }
      }));
    }
    const workout = global.BASELINE_fitnessWorkout;
    if (workout && !workout.__baselineFitnessLivePolicyV2) {
      const original = workout;
      global.BASELINE_fitnessWorkout = Object.freeze(Object.assign({},original,{
        __baselineFitnessLivePolicyV2:true,
        getCurrentContext:() => applyPolicy(original.getCurrentContext?.()),
        startSession:() => applyPolicy(original.startSession?.()),
        succeedCurrentStep:(mode='manual') => applyPolicy(original.succeedCurrentStep?.(mode)),
        failCurrentStep:(achieved,mode='manual') => applyPolicy(original.failCurrentStep?.(achieved,mode)),
        recordTimedCurrentStep:(achieved,mode='manual') => applyPolicy(original.recordTimedCurrentStep?.(achieved,mode)),
        finishSession:async() => applyPolicy(await original.finishSession?.()),
        resetSession:() => applyPolicy(original.resetSession?.()),
        onChange(listener) { return original.onChange?.((context) => { try { listener(applyPolicy(context)); } catch (_error) {} }); }
      }));
    }
  }

  function ensureEarlyPrompt() {
    if ($('#fitnessStartEarlyPrompt')) return;
    const overlay = document.createElement('div');
    overlay.id = 'fitnessStartEarlyPrompt';
    overlay.className = 'fitness-start-early-overlay';
    overlay.hidden = true;
    overlay.innerHTML = '<div class="fitness-start-early-dialog" role="dialog" aria-modal="true" aria-labelledby="fitnessStartEarlyTitle"><h3 id="fitnessStartEarlyTitle">Start Early?</h3><p id="fitnessStartEarlyMessage">This workout is scheduled for later. Start it now?</p><div class="fitness-start-early-actions"><button type="button" class="action secondary" data-start-early="no">No</button><button type="button" class="action" data-start-early="yes">Yes</button></div></div>';
    document.body.appendChild(overlay);
  }
  function openEarly(context,action) {
    ensureEarlyPrompt();
    pendingEarlyAction = action === 'voice' ? 'voice' : 'manual';
    const message = $('#fitnessStartEarlyMessage');
    if (message) message.textContent = context?.scheduledDate ? `This workout is scheduled for ${context.scheduledDate}. Start it now?` : 'This workout is scheduled for later. Start it now?';
    const overlay = $('#fitnessStartEarlyPrompt');
    if (overlay) overlay.hidden = false;
    overlay?.querySelector('[data-start-early="yes"]')?.focus();
  }
  function closeEarly() { const overlay=$('#fitnessStartEarlyPrompt'); if (overlay) overlay.hidden=true; }
  function approveEarly() {
    const context = global.BASELINE_fitnessWorkout?.getCurrentContext?.();
    if (!context?.available) { closeEarly(); return; }
    try { global.sessionStorage?.setItem(permissionKey(context),'yes'); } catch (_error) {}
    closeEarly();
    global.BASELINE_fitnessWorkout?.startSession?.();
    global.setTimeout(() => {
      patchWorkoutAccess();
      if (pendingEarlyAction === 'voice') $('#startVoiceWorkoutBtn')?.click();
    },40);
  }

  function patchWorkoutAccess() {
    installRuntimeWrappers();
    const context = applyPolicy(global.BASELINE_fitnessWorkout?.getCurrentContext?.());
    if (!context?.available || context.planComplete) return;
    const weekly = Boolean(context.flexibleWeekly || flexibleWeekly(planJson()));
    const start = $('#startWorkoutBtn');
    const voice = $('#startVoiceWorkoutBtn');
    if (start) { start.disabled = !context.canStart; start.setAttribute('aria-disabled',context.canStart ? 'false' : 'true'); }
    if (voice) { voice.disabled = !context.canStart; voice.setAttribute('aria-disabled',context.canStart ? 'false' : 'true'); }
    const status = $('#myPlanStatus');
    if (status) {
      if (weekly) status.textContent = 'Current workout available within your weekly frequency.';
      else if (context.startEarlyRequired) status.textContent = 'This session is scheduled for later. You can start it early.';
    }
    document.documentElement.setAttribute('data-flex-weekly-count',weekly ? 'true' : 'false');
  }

  function patchFrequencyPresentation() {
    const plan = planJson();
    const weekly = flexibleWeekly(plan || { scheduleMode:$('#scheduleMode')?.value || 'weekly-count' });
    document.documentElement.setAttribute('data-flex-weekly-count',weekly ? 'true' : 'false');
    document.documentElement.setAttribute('data-flex-weekly-count-preview',$('#scheduleMode')?.value === 'specific-days' ? 'false' : 'true');
    const rangeField = $('#'+RANGE_ID)?.closest('.field-stack');
    if (rangeField) rangeField.hidden = $('#scheduleMode')?.value === 'specific-days';
    const label = frequencyLabel(plan);
    $$('#myPlanOut .badge,#planOut .badge').forEach((badge) => {
      if (/^Frequency:/i.test(String(badge.textContent || '').trim())) badge.textContent = `Frequency: ${label}`;
    });
    patchWorkoutAccess();
  }
  function patchUi() { ensureRangeControl(); patchFrequencyPresentation(); }

  function validateExerciseRows(event) {
    if (!event.target?.closest?.('#genBtn,#savePlanBtn')) return;
    let invalid = null;
    $$('#exerciseList .ex-row').forEach((row) => {
      const input = row.querySelector('.ex-search-input');
      const select = row.querySelector('.ex-select');
      if (!input || !select) return;
      const match = definition(input.value);
      let status = row.querySelector('.ex-picker-inline-status');
      if (!match) {
        if (!status) {
          status = document.createElement('div');
          status.className = 'ex-picker-inline-status';
          row.querySelector('.ex-field-exercise')?.appendChild(status);
        }
        status.textContent = 'Select an exercise from the results.';
        invalid ||= input;
      } else {
        status?.remove();
        input.setCustomValidity('');
        if (select.value !== match.name) { select.value=match.name; select.dispatchEvent(new Event('change',{ bubbles:true })); }
      }
    });
    if (invalid) {
      event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
      invalid.setCustomValidity('');invalid.focus();invalid.closest('.ex-field-exercise')?.querySelector('.ex-picker-toggle')?.click();
    }
  }

  function wrapPlanCalendar() {
    const api = global.BASELINE_fitnessPlans;
    if (!api || api.__baselineFlexibleWeeklyV2) return;
    const original = api;
    global.BASELINE_fitnessPlans = Object.freeze(Object.assign({},original,{
      __baselineFlexibleWeeklyV2:true,
      getPlansForDate(date) {
        const entries = original.getPlansForDate?.(date) || [];
        const byId = new Map((original.getPlans?.() || []).map((plan) => [Number(plan.planId),plan]));
        return entries.filter((entry) => {
          if (entry?.status !== 'due') return true;
          const plan = byId.get(Number(entry.planId));
          return String(plan?.planJson?.scheduleMode || 'weekly-count') === 'specific-days';
        });
      }
    }));
  }

  function bindEvents() {
    document.addEventListener('blur',(event) => {
      if (!event.target?.matches?.('.ex-search-input')) return;
      event.target.setCustomValidity('');
      event.stopImmediatePropagation();
    },true);
    document.addEventListener('change',(event) => {
      if (event.target?.matches?.('.ex-search-input')) {
        event.target.setCustomValidity('');event.stopImmediatePropagation();return;
      }
      if (event.target?.id === 'scheduleMode' || event.target?.id === 'freq' || event.target?.id === RANGE_ID) global.setTimeout(patchUi,0);
    },true);
    document.addEventListener('input',(event) => {
      if (event.target?.matches?.('.ex-search-input')) {
        event.target.setCustomValidity('');event.target.closest('.ex-row')?.querySelector('.ex-picker-inline-status')?.remove();
      }
    },true);
    document.addEventListener('click',(event) => {
      validateExerciseRows(event);
      const start = event.target?.closest?.('#startWorkoutBtn,#startVoiceWorkoutBtn');
      if (start) {
        const context = applyPolicy(global.BASELINE_fitnessWorkout?.getCurrentContext?.());
        if (context?.startEarlyRequired && !hasEarlyPermission(context)) {
          event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
          openEarly(context,start.id === 'startVoiceWorkoutBtn' ? 'voice' : 'manual');return;
        }
      }
      const early = event.target?.closest?.('[data-start-early]');
      if (early) {
        event.preventDefault();
        if (early.dataset.startEarly === 'yes') approveEarly(); else closeEarly();
        return;
      }
      if (event.target?.closest?.('#finishWorkout')) {
        clearTimeout(refreshTimer);refreshTimer=global.setTimeout(() => global.BASELINE_fitnessPlans?.refresh?.(),500);
      }
      if (event.target?.closest?.('.tab[data-target],#cancelEditPlanBtn')) {
        $$('.ex-search-input').forEach((input) => input.setCustomValidity(''));
        $$('.ex-picker-inline-status').forEach((node) => node.remove());
      }
      if (event.target?.closest?.('#genBtn,#editOptionsBtn')) global.setTimeout(patchUi,40);
    },true);
    document.addEventListener('baseline:fitness-plans-updated',() => { rangeDirty=false;installRuntimeWrappers();wrapPlanCalendar();patchUi(); });
    document.addEventListener('baseline:fitness-workout-updated',patchWorkoutAccess);
    global.addEventListener('pageshow',() => { installRuntimeWrappers();wrapPlanCalendar();patchUi(); });
  }

  function boot() {
    injectStyles();ensureEarlyPrompt();installFetchWrapper();ensureRangeControl();installRuntimeWrappers();wrapPlanCalendar();bindEvents();patchUi();
    [80,220,500,1000,1800].forEach((delay) => global.setTimeout(() => { installRuntimeWrappers();wrapPlanCalendar();patchUi(); },delay));
    document.documentElement.setAttribute('data-baseline-fitness-live-policy','v2');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

/* Baseline Fitness — canonical live scheduling and progression policy v3.

   OWNERSHIP CONTRACT
   ------------------
   This file is the single owner of live workout progression/access behaviour:
   - Number Of Days optional range persistence;
   - flexible-weekly / specific-day access;
   - per-exercise progression based on actual session outcome;
   - exact timed-hold success/failure classification;
   - explicit early-start permission.

   It does not inject CSS, poll, render the generator or wrap fetch. Plan-save
   fields are exposed through augmentPlanJson() for the one plan controller.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_LIVE_POLICY_V3__) return;
  global.__BASELINE_FITNESS_LIVE_POLICY_V3__ = true;

  const document = global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app) !== 'fitness') return;

  const RANGE_ID='frequencyRangeMax';
  const EARLY_PREFIX='__bl_fitness_start_early_v3__::';
  const FAILURE_PREFIX='__bl_fitness_exercise_failed_sessions_v3__::';
  const STEP_PREFIX='__bl_fitness_workout_progress_v2__';
  const $=(selector,root=document) => root?.querySelector?.(selector) || null;
  const $$=(selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  let rangeDirty=false;
  let pendingEarlyAction='manual';

  function canonicalExercise(value) { return String(value || '').replace(/\s+\(L\/R\)$/i,'').replace(/\s+(Left|Right)$/i,'').trim(); }
  function owner() {
    try {
      const auth=global.BASELINE_auth?.get?.();
      return auth?.authed?String(auth.name || auth.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user':'guest';
    } catch (_error) { return 'guest'; }
  }
  function plans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }
  function selectedPlanId() {
    try { return Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0); }
    catch (_error) { return 0; }
  }
  function selectedPlan() {
    const list=plans();const id=selectedPlanId();return list.find((plan) => Number(plan?.planId)===id) || list[0] || null;
  }
  function planJson() { return selectedPlan()?.planJson || null; }
  function weeklyMinimum(plan=planJson()) { return Math.max(1,Math.min(6,Number(String(plan?.frequencyMin || plan?.frequency || $('#freq')?.value || '1x').replace(/\D/g,'')) || 1)); }
  function weeklyMaximum(plan=planJson()) {
    const min=weeklyMinimum(plan);const max=Number(plan?.frequencyRangeMax || 0);return max>min && max<=7?max:0;
  }
  function flexibleWeekly(plan=planJson()) { return String(plan?.scheduleMode || $('#scheduleMode')?.value || 'weekly-count')!=='specific-days'; }
  function frequencyLabel(plan=planJson()) {
    if (!plan) { const min=weeklyMinimum({ frequency:$('#freq')?.value || '1x' });const max=Number($('#'+RANGE_ID)?.value || 0);return max>min?`${min}–${max} days each week`:`${min} day${min===1?'':'s'} each week`; }
    if (!flexibleWeekly(plan)) { const days=Array.isArray(plan.days)?plan.days.filter(Boolean):[];return days.length?days.join(', '):'Specific weekdays'; }
    const min=weeklyMinimum(plan);const max=weeklyMaximum(plan);return max?`${min}–${max} days each week`:`${min} day${min===1?'':'s'} each week`;
  }

  function rangeOptions(minimum) {
    let html='<option value="">(Not Specified)</option>';
    for (let value=2;value<=7;value+=1) html+=`<option value="${value}"${value<=minimum?' disabled':''}>${value}</option>`;
    return html;
  }
  function syncRangeOptions() {
    const field=$('#'+RANGE_ID);if (!field) return;const min=weeklyMinimum({ frequency:$('#freq')?.value || '1x' });const old=Number(field.value || 0);field.innerHTML=rangeOptions(min);field.value=old>min && old<=7?String(old):'';
  }
  function ensureRangeControl() {
    const freq=$('#freq');if (!freq) return;
    let grid=freq.closest('.fitness-frequency-grid');let range=$('#'+RANGE_ID);
    if (!grid) {
      const host=freq.closest('.field-stack');if (!host) return;host.classList.add('fitness-frequency-grid');grid=host;
      const existingLabel=Array.from(host.children).find((node) => node.matches?.('label[for="freq"],span'));
      const minField=document.createElement('div');minField.className='field-stack fitness-frequency-min';
      const minLabel=document.createElement('span');minLabel.textContent='Number Of Days';minField.append(minLabel,freq);
      existingLabel?.remove();
      const dash=document.createElement('span');dash.className='bl-frequency-range-dash';dash.setAttribute('aria-hidden','true');dash.textContent='–';
      const maxField=document.createElement('div');maxField.className='field-stack fitness-frequency-max';maxField.innerHTML=`<select id="${RANGE_ID}" class="field-select-fixed" aria-label="Optional upper end of days range"><option value="">(Not Specified)</option></select>`;
      host.replaceChildren(minField,dash,maxField);range=maxField.querySelector('select');
      range.addEventListener('change',() => { rangeDirty=true;patchUi(); });
      freq.addEventListener('change',() => { rangeDirty=true;syncRangeOptions();patchUi(); });
    }
    freq.setAttribute('aria-label','Number Of Days');
    syncRangeOptions();
    const plan=planJson();if (!rangeDirty && plan && flexibleWeekly(plan)) { const max=weeklyMaximum(plan);range.value=max?String(max):''; }
  }
  function uiRange() {
    const min=weeklyMinimum({ frequency:$('#freq')?.value || '1x' });const raw=Number($('#'+RANGE_ID)?.value || 0);return { min,max:raw>min && raw<=7?raw:0 };
  }
  function augmentPlanJson(planValue) {
    const plan=planValue && typeof planValue==='object'?Object.assign({},planValue):{};
    if (String(plan.scheduleMode || $('#scheduleMode')?.value || 'weekly-count')!=='specific-days') {
      const range=uiRange();plan.scheduleMode='weekly-count';plan.days=[];plan.frequency=`${range.min}x`;plan.frequencyMin=range.min;if (range.max) plan.frequencyRangeMax=range.max;else delete plan.frequencyRangeMax;plan.flexibleWeekly=true;
    } else {
      plan.scheduleMode='specific-days';delete plan.frequencyMin;delete plan.frequencyRangeMax;delete plan.flexibleWeekly;
    }
    return plan;
  }

  function definition(name) {
    const target=canonicalExercise(name);
    return (global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || []).find((item) => canonicalExercise(item?.name).localeCompare(target,'en-GB',{ sensitivity:'base' })===0) || null;
  }
  function plansContaining(exercise) {
    const target=canonicalExercise(exercise);
    return plans().filter((plan) => Array.isArray(plan?.planJson?.items) && plan.planJson.items.some((item) => canonicalExercise(item?.exercise).localeCompare(target,'en-GB',{ sensitivity:'base' })===0));
  }
  function sharedItem(exercise) {
    const target=canonicalExercise(exercise);const candidates=plansContaining(target).map((plan) => ({ plan,item:plan.planJson.items.find((entry) => canonicalExercise(entry?.exercise).localeCompare(target,'en-GB',{ sensitivity:'base' })===0) })).filter((entry) => entry.item);
    if (!candidates.length) return null;candidates.sort((a,b) => ((Date.parse(a.plan?.createdAt || '') || Number(a.plan?.planId || 0))-(Date.parse(b.plan?.createdAt || '') || Number(b.plan?.planId || 0))));
    const item=Object.assign({},candidates[0].item);const baselines=candidates.map((entry) => Number(entry.item?.baseline || 0)).filter((value) => Number.isFinite(value) && value>0);if (baselines.length) item.baseline=Math.max(...baselines);return item;
  }
  function completedSharedSessions(exercise) {
    return plansContaining(exercise).reduce((total,plan) => total+(Array.isArray(plan?.sessions)?plan.sessions.filter((session) => session?.status==='done').length:0),0);
  }

  function failureKey() { return `${FAILURE_PREFIX}${owner()}`; }
  function readFailures() {
    try { const value=JSON.parse(global.localStorage?.getItem(failureKey()) || '[]');return Array.isArray(value)?value:[]; }
    catch (_error) { return []; }
  }
  function writeFailures(value) {
    try { global.localStorage?.setItem(failureKey(),JSON.stringify((Array.isArray(value)?value:[]).slice(-500))); }
    catch (_error) {}
  }
  function sessionStillDone(record) {
    const plan=plans().find((candidate) => Number(candidate.planId)===Number(record.planId));
    const session=(plan?.sessions || []).find((candidate) => Number(candidate.sessionIndex ?? candidate.session_index)===Number(record.sessionIndex));
    return String(session?.status || '')==='done';
  }
  function failedCompletedSessions(exercise) {
    const key=canonicalExercise(exercise).toLocaleLowerCase('en-GB');
    return readFailures().filter((record) => record.exercise===key && sessionStillDone(record)).length;
  }
  function progressLevel(exercise) { return Math.max(0,completedSharedSessions(exercise)-failedCompletedSessions(exercise)); }
  function holdTarget(baseline,progressionSession) {
    let seconds=Math.max(1,Math.round(Number(baseline) || 1));for (let session=2;session<=Math.max(1,Number(progressionSession)||1);session+=1) seconds+=seconds>=90?2:3;return seconds;
  }
  function relabelStep(step,target) {
    const copy=Object.assign({},step,{ target });const label=String(copy.label || '');
    if (copy.isTimed || copy.unit==='seconds') { if (/guide\s+\d+\s+seconds/i.test(label)) copy.label=label.replace(/guide\s+\d+\s+seconds/i,`guide ${target} seconds`);return copy; }
    const perSide=copy.laterality==='per-side';if (/\(\d+(?:\s+per side)?\)/.test(label)) copy.label=label.replace(/\(\d+(?:\s+per side)?\)/,`(${target}${perSide?' per side':''})`);else copy.label=`${copy.name || copy.exercise} - (${target}${perSide?' per side':''})`;return copy;
  }
  function applySharedProgression(context) {
    if (!context || !Array.isArray(context.steps) || !context.steps.length) return context;
    const next=Object.assign({},context);const steps=context.steps.map((step) => step && typeof step==='object'?Object.assign({},step):step);const positions=new Map();
    steps.forEach((step,index) => { const name=canonicalExercise(step?.exercise || step?.name);if (!name) return;if (!positions.has(name)) positions.set(name,[]);positions.get(name).push(index); });
    positions.forEach((indexes,exercise) => {
      const item=sharedItem(exercise);const def=definition(exercise);if (!item || !def) return;const progressionSession=progressLevel(exercise)+1;
      if (def.unit==='seconds') { const target=holdTarget(item.baseline,progressionSession);indexes.forEach((index) => { steps[index]=relabelStep(steps[index],target); });return; }
      const progression=global.BASELINE_FITNESS_EXERCISE_PROGRESSION;const targets=typeof progression?.progressedTargets==='function'?progression.progressedTargets(item,def,progressionSession):[];if (!targets.length) return;
      indexes.forEach((index,position) => { steps[index]=relabelStep(steps[index],targets[Math.min(position,targets.length-1)]); });
    });
    next.steps=steps;next.step=steps[Math.max(0,Number(context.stepIndex || 0))] || null;next.sharedExerciseProgression=true;return next;
  }

  function sessionExerciseOutcomes(context) {
    const results=context?.results || {};const groups=new Map();
    (context?.steps || []).forEach((step,index) => { const exercise=canonicalExercise(step?.exercise || step?.name);if (!exercise) return;if (!groups.has(exercise)) groups.set(exercise,[]);groups.get(exercise).push(index); });
    return Array.from(groups.entries()).map(([exercise,indexes]) => ({ exercise,success:indexes.every((index) => String(results[index]?.status || '')==='success') }));
  }
  function storeSessionOutcomes(context) {
    if (!context?.planId || !context?.sessionIndex) return;const records=readFailures();const sessionKey=`${Number(context.planId)}:${Number(context.sessionIndex)}`;const outcomes=sessionExerciseOutcomes(context);const exerciseKeys=new Set(outcomes.map((entry) => entry.exercise.toLocaleLowerCase('en-GB')));
    const next=records.filter((record) => !(record.sessionKey===sessionKey && exerciseKeys.has(record.exercise)));
    outcomes.forEach((entry) => { if (!entry.success) next.push({ sessionKey,planId:Number(context.planId),sessionIndex:Number(context.sessionIndex),exercise:entry.exercise.toLocaleLowerCase('en-GB'),failed:true,at:new Date().toISOString() }); });
    writeFailures(next);
  }

  function permissionKey(context) { return `${EARLY_PREFIX}${Number(context?.planId||0)}::${Number(context?.sessionIndex||0)}`; }
  function hasEarlyPermission(context) { try { return global.sessionStorage?.getItem(permissionKey(context))==='yes'; }catch (_error) { return false; } }
  function applyAccess(context) {
    if (!context || !context.available || context.planComplete) return context;const next=Object.assign({},context,{ access:Object.assign({},context.access || {}) });if (next.access.next===false || next.access.done) return next;
    if (flexibleWeekly(planJson())) { next.access.due=true;next.access.can=true;next.canStart=true;next.flexibleWeekly=true;next.startEarlyRequired=false; }
    else if (!next.access.due) { next.access.can=true;next.canStart=true;next.startEarlyRequired=!hasEarlyPermission(next); }
    return next;
  }
  function applyPolicy(context) { return applyAccess(applySharedProgression(context)); }

  function stepStateKey(context) {
    const suffix=`${Number(context?.planId || 0)}::${Number(context?.sessionIndex || 0)}::${owner()}`.trim().toLocaleLowerCase('en-GB');return `${STEP_PREFIX}::${suffix}`;
  }
  function directTimedRecord(achieved,inputMode='manual') {
    const workout=global.BASELINE_fitnessWorkout;const context=applyPolicy(workout?.getCurrentContext?.());const actual=Math.max(0,Math.round(Number(achieved) || 0));
    if (!workout || !context?.canStart || !context?.started || !context?.step || !(context.step.isTimed || context.step.unit==='seconds') || actual<=0) return context;
    const target=Math.max(1,Math.round(Number(context.step.target || 1)));const status=actual>=target?'success':'failed';const key=stepStateKey(context);let state={ completedSteps:0,started:true,results:{},pendingFailureStep:null };
    try { const raw=global.localStorage?.getItem(key);if (raw) state=Object.assign(state,JSON.parse(raw) || {}); }catch (_error) {}
    state.results=state.results && typeof state.results==='object'?state.results:{};const step=context.step;
    state.results[context.stepIndex]={ status,achieved:actual,inputMode:inputMode==='voice'?'voice':'manual',exercise:step.exercise || step.name,exerciseKey:step.exerciseKey || step.name,stepName:step.name,isTimed:true,unit:'seconds' };
    state.completedSteps=Math.max(Number(state.completedSteps || 0),Number(context.stepIndex || 0)+1);state.started=true;state.pendingFailureStep=null;
    try { global.localStorage?.setItem(key,JSON.stringify(state)); }catch (_error) {}
    const modal=$('#timerModal');if (modal) modal.hidden=true;
    workout.startSession?.();
    return applyPolicy(workout.getCurrentContext?.());
  }

  function installRuntimeWrapper() {
    const progression=global.BASELINE_FITNESS_EXERCISE_PROGRESSION;
    if (progression && !progression.__baselineFitnessLivePolicyV3) {
      const original=progression;global.BASELINE_FITNESS_EXERCISE_PROGRESSION=Object.freeze(Object.assign({},original,{ __baselineFitnessLivePolicyV3:true,adjustContext(source) { const adjusted=typeof original.adjustContext==='function'?original.adjustContext(source):source;return applyPolicy(adjusted); } }));
    }
    const workout=global.BASELINE_fitnessWorkout;
    if (workout && !workout.__baselineFitnessLivePolicyV3) {
      const original=workout;global.BASELINE_fitnessWorkout=Object.freeze(Object.assign({},original,{
        __baselineFitnessLivePolicyV3:true,
        getCurrentContext:() => applyPolicy(original.getCurrentContext?.()),
        startSession:() => applyPolicy(original.startSession?.()),
        succeedCurrentStep:(mode='manual') => applyPolicy(original.succeedCurrentStep?.(mode)),
        failCurrentStep:(achieved,mode='manual') => applyPolicy(original.failCurrentStep?.(achieved,mode)),
        recordTimedCurrentStep:(achieved,mode='manual') => directTimedRecord(achieved,mode),
        finishSession:async() => {
          const before=applyPolicy(original.getCurrentContext?.());const after=await original.finishSession?.();const advanced=Boolean(before?.allComplete && (after?.planComplete || Number(after?.sessionIndex || 0)!==Number(before?.sessionIndex || 0)));
          if (advanced) { storeSessionOutcomes(before);await global.BASELINE_fitnessPlans?.refresh?.(); }
          return applyPolicy(after);
        },
        resetSession:() => applyPolicy(original.resetSession?.()),
        onChange(listener) { return original.onChange?.((context) => { try { listener(applyPolicy(context)); }catch (_error) {} }); }
      }));
    }
  }

  function ensureEarlyPrompt() {
    if ($('#fitnessStartEarlyPrompt')) return;const overlay=document.createElement('div');overlay.id='fitnessStartEarlyPrompt';overlay.className='fitness-start-early-overlay';overlay.hidden=true;overlay.innerHTML='<div class="fitness-start-early-dialog" role="dialog" aria-modal="true" aria-labelledby="fitnessStartEarlyTitle"><h3 id="fitnessStartEarlyTitle">Start Early?</h3><p id="fitnessStartEarlyMessage">This workout is scheduled for later. Start it now?</p><div class="fitness-start-early-actions"><button type="button" class="action secondary" data-start-early="no">No</button><button type="button" class="action" data-start-early="yes">Yes</button></div></div>';document.body.appendChild(overlay);
  }
  function openEarly(context,action) { ensureEarlyPrompt();pendingEarlyAction=action==='voice'?'voice':'manual';const message=$('#fitnessStartEarlyMessage');if (message) message.textContent=context?.scheduledDate?`This workout is scheduled for ${context.scheduledDate}. Start it now?`:'This workout is scheduled for later. Start it now?';const overlay=$('#fitnessStartEarlyPrompt');if (overlay) overlay.hidden=false;overlay?.querySelector('[data-start-early="yes"]')?.focus(); }
  function closeEarly() { const overlay=$('#fitnessStartEarlyPrompt');if (overlay) overlay.hidden=true; }
  function approveEarly() { const context=global.BASELINE_fitnessWorkout?.getCurrentContext?.();if (!context?.available) { closeEarly();return; }try { global.sessionStorage?.setItem(permissionKey(context),'yes'); }catch (_error) {}closeEarly();global.BASELINE_fitnessWorkout?.startSession?.();global.requestAnimationFrame(() => { patchWorkoutAccess();if (pendingEarlyAction==='voice') $('#startVoiceWorkoutBtn')?.click(); }); }

  function patchWorkoutAccess() {
    installRuntimeWrapper();const context=applyPolicy(global.BASELINE_fitnessWorkout?.getCurrentContext?.());if (!context?.available || context.planComplete) return;const weekly=Boolean(context.flexibleWeekly || flexibleWeekly(planJson()));const start=$('#startWorkoutBtn');const voice=$('#startVoiceWorkoutBtn');if (start) { start.disabled=!context.canStart;start.setAttribute('aria-disabled',context.canStart?'false':'true'); }if (voice) { voice.disabled=!context.canStart;voice.setAttribute('aria-disabled',context.canStart?'false':'true'); }
    const status=$('#myPlanStatus');if (status) { if (weekly) status.textContent='';else if (context.startEarlyRequired) status.textContent='This session is scheduled for later. You can start it early.'; }
    document.documentElement.setAttribute('data-flex-weekly-count',weekly?'true':'false');
  }
  function patchFrequencyPresentation() {
    const plan=planJson();const weekly=flexibleWeekly(plan || { scheduleMode:$('#scheduleMode')?.value || 'weekly-count' });document.documentElement.setAttribute('data-flex-weekly-count',weekly?'true':'false');document.documentElement.setAttribute('data-flex-weekly-count-preview',$('#scheduleMode')?.value==='specific-days'?'false':'true');const rangeField=$('#'+RANGE_ID)?.closest('.fitness-frequency-grid');if (rangeField) rangeField.hidden=$('#scheduleMode')?.value==='specific-days';const label=frequencyLabel(plan);$$('#myPlanOut .badge,#planOut .badge').forEach((badge) => { if (/^Frequency:/i.test(String(badge.textContent || '').trim())) badge.textContent=`Frequency: ${label}`; });patchWorkoutAccess();
  }
  function patchUi() { ensureRangeControl();patchFrequencyPresentation(); }

  function validateExerciseRows(event) {
    if (!event.target?.closest?.('#genBtn,#savePlanBtn')) return;let invalid=null;
    $$('#exerciseList .ex-row').forEach((row) => { const input=row.querySelector('.ex-search-input');const select=row.querySelector('.ex-select');if (!input || !select) return;const match=definition(input.value);let status=row.querySelector('.ex-picker-inline-status');if (!match) { if (!status) { status=document.createElement('div');status.className='ex-picker-inline-status';row.querySelector('.ex-field-exercise')?.appendChild(status); }status.textContent='Select an exercise from the results.';invalid ||= input; }else { status?.remove();input.setCustomValidity('');if (select.value!==match.name) { select.value=match.name;select.dispatchEvent(new Event('change',{ bubbles:true })); } } });
    if (invalid) { event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();invalid.setCustomValidity('');invalid.focus();invalid.closest('.ex-field-exercise')?.querySelector('.ex-picker-toggle')?.click(); }
  }

  function bindEvents() {
    document.addEventListener('blur',(event) => { if (!event.target?.matches?.('.ex-search-input')) return;event.target.setCustomValidity('');event.stopImmediatePropagation(); },true);
    document.addEventListener('change',(event) => { if (event.target?.matches?.('.ex-search-input')) { event.target.setCustomValidity('');event.stopImmediatePropagation();return; }if (event.target?.id==='scheduleMode' || event.target?.id==='freq' || event.target?.id===RANGE_ID) global.requestAnimationFrame(patchUi); },true);
    document.addEventListener('input',(event) => { if (event.target?.matches?.('.ex-search-input')) { event.target.setCustomValidity('');event.target.closest('.ex-row')?.querySelector('.ex-picker-inline-status')?.remove(); } },true);
    document.addEventListener('click',(event) => {
      const timedSave=event.target?.closest?.('.step-hold-save');
      if (timedSave) {
        const field=document.getElementById(`failedAmount${timedSave.dataset.step}`);if (!field || Number(field.value)<=0) { field?.focus();return; }
        event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();directTimedRecord(field.value,'manual');return;
      }
      validateExerciseRows(event);
      const start=event.target?.closest?.('#startWorkoutBtn,#startVoiceWorkoutBtn');if (start) { const context=applyPolicy(global.BASELINE_fitnessWorkout?.getCurrentContext?.());if (context?.startEarlyRequired && !hasEarlyPermission(context)) { event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();openEarly(context,start.id==='startVoiceWorkoutBtn'?'voice':'manual');return; } }
      const early=event.target?.closest?.('[data-start-early]');if (early) { event.preventDefault();if (early.dataset.startEarly==='yes') approveEarly();else closeEarly();return; }
      const finish=event.target?.closest?.('#finishWorkout');
      if (finish && !finish.disabled) {
        event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
        global.BASELINE_fitnessWorkout?.finishSession?.();
        return;
      }
      if (event.target?.closest?.('.tab[data-target],#cancelEditPlanBtn')) { $$('.ex-search-input').forEach((input) => input.setCustomValidity(''));$$('.ex-picker-inline-status').forEach((node) => node.remove()); }
      if (event.target?.closest?.('#genBtn,#editOptionsBtn')) global.requestAnimationFrame(patchUi);
    },true);
    document.addEventListener('baseline:fitness-plans-updated',() => { rangeDirty=false;installRuntimeWrapper();patchUi(); });
    document.addEventListener('baseline:fitness-workout-updated',patchWorkoutAccess);
    global.addEventListener('pageshow',() => { installRuntimeWrapper();patchUi(); });
  }

  function boot() {
    ensureEarlyPrompt();ensureRangeControl();installRuntimeWrapper();bindEvents();patchUi();global.BASELINE_FITNESS_LIVE_POLICY=Object.freeze({ augmentPlanJson,applyPolicy,progressLevel });document.documentElement.setAttribute('data-baseline-fitness-live-policy','v3');
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);

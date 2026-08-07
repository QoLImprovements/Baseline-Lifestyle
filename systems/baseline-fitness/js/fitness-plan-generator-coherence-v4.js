/* Baseline Fitness — plan-generator coherence v4.
   Fitness-specific data semantics live here; visual structure is supplied by
   the shared sitewide My Routine experience stylesheet. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_PLAN_GENERATOR_COHERENCE_V4__) return;
  global.__BASELINE_FITNESS_PLAN_GENERATOR_COHERENCE_V4__=true;
  const document=global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app)!=='fitness') return;
  const $=(selector,root=document) => root?.querySelector?.(selector) || null;
  const $$=(selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  let observer=null;
  let frame=0;
  let fetchWrapped=false;
  let progressionWrapped=false;
  let workoutWrapped=false;

  const MODES=Object.freeze({ LINEAR:'linear-fixed',STRAIGHT:'straight-sets',TIMED:'timed-hold' });

  function exerciseName(row) { return String(row?.querySelector?.('.ex-select')?.value || row?.querySelector?.('.ex-search-input')?.value || '').trim(); }
  function definition(name) {
    return (global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || []).find((item) => String(item?.name || '').localeCompare(String(name || ''),'en-GB',{ sensitivity:'base' })===0) || null;
  }
  function modeForRow(row) {
    const def=definition(exerciseName(row));
    if (def?.unit==='seconds' || String(def?.progressionType || '').includes('timed')) return MODES.TIMED;
    const raw=String(row?.querySelector?.('.ex-progression-mode')?.value || row?.dataset?.progressionMode || '');
    return raw===MODES.STRAIGHT ? MODES.STRAIGHT : MODES.LINEAR;
  }
  function sets(value) { return Math.max(1,Math.min(5,Math.round(Number(value)||3))); }
  function increaseFor(row) {
    const def=definition(exerciseName(row));
    const raw=Number(row?.querySelector?.('.ex-rep-increase')?.value);
    if (Number.isFinite(raw) && raw>=0) return Math.round(raw);
    return String(def?.progressionType || '')==='leg-reps' ? 3 : 1;
  }
  function initialStraight(baseline,count) {
    const working=Math.max(1,Math.round((Math.max(1,Number(baseline)||1))*0.80));
    return Array(sets(count)).fill(working);
  }
  function straightTargets(item,sessionIndex) {
    const start=initialStraight(item?.baseline,item?.sets || 3);
    const inc=Math.max(0,Math.round(Number(item?.repIncrease)||0));
    const session=Math.max(1,Math.round(Number(sessionIndex)||1));
    return start.map((value) => value+((session-1)*inc));
  }

  function ensureUnitField(row) {
    const def=definition(exerciseName(row));
    const field=row?.querySelector?.('.ex-field-baseline');
    const input=field?.querySelector?.('.ex-baseline');
    if (!field || !input || !def) return;
    const label=field.querySelector('.baseline-label,label,span');
    if (label) label.textContent='Max Baseline';
    let wrap=input.closest('.bl-input-with-unit');
    if (!wrap) {
      wrap=document.createElement('span');wrap.className='bl-input-with-unit';
      input.insertAdjacentElement('beforebegin',wrap);wrap.appendChild(input);
    }
    let unit=wrap.querySelector('.bl-field-unit');
    if (!unit) { unit=document.createElement('span');unit.className='bl-field-unit';wrap.appendChild(unit); }
    unit.textContent=def.unit==='seconds'?'seconds':'reps';
  }

  function simplifyFixedProgression(row) {
    const def=definition(exerciseName(row));if (!def) return;
    const timed=def.unit==='seconds' || String(def.progressionType || '').includes('timed');
    const field=row.querySelector('.ex-field-progression-mode');
    if (field) field.classList.toggle('bl-generator-mode-hidden',timed);
    if (timed) row.dataset.progressionMode=MODES.TIMED;
  }

  function improveDetails(row) {
    const def=definition(exerciseName(row));const card=row?.querySelector?.('.ex-details-card');if (!def || !card) return;
    const mode=modeForRow(row);const baseline=Math.max(1,Math.round(Number(row.querySelector('.ex-baseline')?.value)||def.base||1));
    const count=sets(row.querySelector('.ex-sets')?.value||3);const inc=increaseFor(row);
    const values=mode===MODES.STRAIGHT ? initialStraight(baseline,count) : null;
    Array.from(card.children).forEach((entry) => {
      const key=String(entry.querySelector('b')?.textContent || '').trim().toLocaleLowerCase('en-GB');
      if (key==='starting sets') {
        if (mode===MODES.STRAIGHT) entry.lastChild.textContent=` ${values.join(' / ')}${def.laterality==='per-side'?' per side':''}`;
        else if (mode===MODES.TIMED) entry.lastChild.textContent=` ${baseline} sec guide`;
      }
      if (key==='rule' && mode===MODES.STRAIGHT) entry.lastChild.textContent=' Equal working sets start at 80% of Max Baseline';
      if (key==='progression' && mode===MODES.STRAIGHT) entry.lastChild.textContent=` +${inc} to every set after success`;
    });
  }

  function patchExerciseRows() {
    $$('#exerciseList .ex-row').forEach((row) => { ensureUnitField(row);simplifyFixedProgression(row);improveDetails(row); });
  }

  function settingsFields() {
    return {
      start:$('#startDate')?.closest('.field-stack'),
      frequency:$('#freq')?.closest('.field-stack'),
      schedule:$('#scheduleMode')?.closest('.field-stack'),
      days:$('#specificDayControls'),
      length:$('#lengthMode')?.closest('.field-stack'),
      sessions:$('#sessions')?.closest('.field-stack'),
      goalExercise:$('#goalExercise')?.closest('.field-stack'),
      goalAmount:$('#goalAmount')?.closest('.field-stack')
    };
  }

  function ensureSettingsGrid() {
    const generator=$('#myPlanGeneratorWrap');if (!generator) return;
    const fields=settingsFields();if (!fields.start || !fields.length) return;
    let grid=$('.bl-generator-settings-grid',generator);
    if (!grid) {
      grid=document.createElement('section');grid.className='bl-generator-settings-grid';
      const divider=$('#addExerciseBtn',generator)?.nextElementSibling;
      if (divider) divider.insertAdjacentElement('afterend',grid);
      else $('#addExerciseBtn',generator)?.insertAdjacentElement('afterend',grid);
    }
    [fields.start,fields.schedule,fields.frequency,fields.days,fields.length,fields.sessions,fields.goalExercise,fields.goalAmount].filter(Boolean).forEach((field) => {
      if (field.parentElement!==grid) grid.appendChild(field);
    });
    /* Remove now-empty legacy row wrappers and spacer divs around moved fields. */
    $$('#myPlanGeneratorWrap .row.row-2,#myPlanGeneratorWrap .calisthenics-schedule-row').forEach((row) => { if (!row.children.length) row.remove(); });
    const hint=$('#goalHint');if (hint) { hint.textContent='';hint.hidden=true; }
  }

  function patchFrequencyRange() {
    const range=$('#frequencyRangeMax');const freq=$('#freq');if (!range || !freq) return;
    const grid=range.closest('.fitness-frequency-grid');if (!grid) return;
    grid.classList.add('bl-frequency-range-row');
    if (!grid.querySelector('.bl-frequency-range-dash')) {
      const dash=document.createElement('span');dash.className='bl-frequency-range-dash';dash.setAttribute('aria-hidden','true');dash.textContent='–';
      grid.insertBefore(dash,grid.children[1] || null);
    }
    const first=grid.querySelector('.field-stack');const second=Array.from(grid.querySelectorAll('.field-stack')).pop();
    if (first) first.style.maxWidth='240px';if (second) second.style.maxWidth='190px';
  }

  function syncLengthMode() {
    const mode=String($('#lengthMode')?.value || 'sessions');
    const fields=settingsFields();const goal=mode==='goal';
    if (fields.sessions) fields.sessions.classList.toggle('bl-generator-mode-hidden',goal);
    if (fields.goalExercise) fields.goalExercise.classList.toggle('bl-generator-mode-hidden',!goal);
    if (fields.goalAmount) fields.goalAmount.classList.toggle('bl-generator-mode-hidden',!goal);
    const sessions=$('#sessions');if (sessions) sessions.disabled=goal;
    const goalExercise=$('#goalExercise');if (goalExercise) goalExercise.disabled=!goal;
    const goalAmount=$('#goalAmount');if (goalAmount) goalAmount.disabled=!goal;
  }

  function preserveStartDate() {
    const start=$('#startDate');if (!start) return;
    start.disabled=false;start.readOnly=false;start.removeAttribute('aria-disabled');
    /* A saved plan can legitimately start in the past; editing it must not be
       forced back to today. New plans receive today only when the field is empty. */
    if (!start.value) {
      const date=new Date();const pad=(value) => String(value).padStart(2,'0');
      start.value=`${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`;
    }
    start.removeAttribute('min');
  }

  function progressionValues() {
    const values=new Map();
    $$('#exerciseList .ex-row').forEach((row) => {
      const name=exerciseName(row);if (!name) return;
      values.set(name,{ progressionMode:modeForRow(row),repIncrease:increaseFor(row),baseline:Math.max(1,Math.round(Number(row.querySelector('.ex-baseline')?.value)||1)),sets:sets(row.querySelector('.ex-sets')?.value||3) });
    });
    return values;
  }

  function installSaveWrapper() {
    if (fetchWrapped || typeof global.fetch!=='function') return;
    fetchWrapped=true;
    const previous=global.fetch.bind(global);
    global.fetch=function(input,init={}) {
      let url=null;try { url=new URL(input instanceof Request?input.url:String(input),global.location.href); } catch (_error) {}
      if (!url || (!url.pathname.endsWith('/save_plan.php') && !url.pathname.endsWith('/plan_update.php'))) return previous(input,init);
      const next=Object.assign({},init || {});
      if (typeof next.body==='string') {
        try {
          const payload=JSON.parse(next.body);const values=progressionValues();
          if (Array.isArray(payload?.planJson?.items)) {
            payload.planJson.items=payload.planJson.items.map((item) => {
              const copy=item&&typeof item==='object'?Object.assign({},item):item;const value=copy?values.get(String(copy.exercise || '')):null;
              if (copy && value) {
                copy.progressionMode=value.progressionMode;copy.repIncrease=value.repIncrease;copy.baseline=value.baseline;copy.sets=value.sets;
              }
              return copy;
            });
            next.body=JSON.stringify(payload);
          }
        } catch (_error) {}
      }
      return previous(input,next);
    };
  }

  function selectedPlan() {
    try {
      const plans=global.BASELINE_fitnessPlans?.getPlans?.() || [];const id=Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0);
      return plans.find((plan) => Number(plan.planId)===id) || plans[0] || null;
    } catch (_error) { return null; }
  }

  function planItem(name) {
    const target=String(name || '').replace(/\s+(Left|Right)$/i,'').trim();
    return (selectedPlan()?.planJson?.items || []).find((item) => String(item?.exercise || '').localeCompare(target,'en-GB',{ sensitivity:'base' })===0) || null;
  }

  function setTargetLabel(step,target) {
    const copy=Object.assign({},step,{ target });const label=String(copy.label || copy.name || '');const perSide=copy.laterality==='per-side';
    if (copy.isTimed || copy.unit==='seconds') return copy;
    if (/\(\d+(?:\s+per side)?\)/.test(label)) copy.label=label.replace(/\(\d+(?:\s+per side)?\)/,`(${target}${perSide?' per side':''})`);
    else copy.label=`${copy.name || copy.exercise} - (${target}${perSide?' per side':''})`;
    return copy;
  }

  function correctStraightContext(context) {
    if (!context || !Array.isArray(context.steps)) return context;
    const next=Object.assign({},context);const steps=context.steps.map((step) => step&&typeof step==='object'?Object.assign({},step):step);
    const byExercise=new Map();
    steps.forEach((step,index) => {
      if (!step || step.isTimed || step.unit==='seconds') return;
      const name=String(step.exercise || step.name || '').replace(/\s+(Left|Right)$/i,'').trim();if (!byExercise.has(name)) byExercise.set(name,[]);byExercise.get(name).push(index);
    });
    byExercise.forEach((indexes,name) => {
      const item=planItem(name);if (!item || String(item.progressionMode || '')!==MODES.STRAIGHT) return;
      const session=Math.max(1,Math.round(Number(steps[indexes[0]]?.progressionSession || context.sessionIndex)||1));const targets=straightTargets(item,session);
      indexes.forEach((index,position) => { steps[index]=setTargetLabel(steps[index],targets[Math.min(position,targets.length-1)]); });
    });
    next.steps=steps;next.step=steps[Math.max(0,Number(context.stepIndex || 0))] || null;return next;
  }

  function installRuntimeWrappers() {
    const progression=global.BASELINE_FITNESS_EXERCISE_PROGRESSION;
    if (progression && !progression.__baselineStraightSetMaxBaselineV4) {
      const original=progression;
      const wrapped=Object.assign({},original,{
        __baselineStraightSetMaxBaselineV4:true,
        straightInitialTargets:initialStraight,
        progressedTargets(item,def,sessionIndex) {
          if (String(item?.progressionMode || '')===MODES.STRAIGHT && def?.unit!=='seconds') return straightTargets(item,sessionIndex);
          return typeof original.progressedTargets==='function' ? original.progressedTargets(item,def,sessionIndex) : [];
        },
        adjustContext(source) {
          const adjusted=typeof original.adjustContext==='function' ? original.adjustContext(source) : source;
          return correctStraightContext(adjusted);
        }
      });
      global.BASELINE_FITNESS_EXERCISE_PROGRESSION=Object.freeze(wrapped);progressionWrapped=true;
    }
    const workout=global.BASELINE_fitnessWorkout;
    if (workout && !workout.__baselineStraightSetMaxBaselineV4) {
      const original=workout;
      const wrapped=Object.assign({},original,{
        __baselineStraightSetMaxBaselineV4:true,
        getCurrentContext(){ return correctStraightContext(original.getCurrentContext?.()); },
        startSession(){ return correctStraightContext(original.startSession?.()); },
        succeedCurrentStep(mode='manual'){ return correctStraightContext(original.succeedCurrentStep?.(mode)); },
        failCurrentStep(value,mode='manual'){ return correctStraightContext(original.failCurrentStep?.(value,mode)); },
        recordTimedCurrentStep(value,mode='manual'){ return correctStraightContext(original.recordTimedCurrentStep?.(value,mode)); },
        async finishSession(){ return correctStraightContext(await original.finishSession?.()); },
        resetSession(){ return correctStraightContext(original.resetSession?.()); },
        onChange(listener){ return original.onChange?.((context) => { try { listener(correctStraightContext(context)); } catch (_error) {} }); }
      });
      global.BASELINE_fitnessWorkout=Object.freeze(wrapped);workoutWrapped=true;
    }
  }

  function patchPreview(root,useUi=true) {
    Array.from(root?.querySelectorAll?.('.plan-exercise-row') || []).forEach((row) => {
      const name=String(row.firstElementChild?.textContent || '').trim();
      const item=useUi ? progressionValues().get(name) : planItem(name);
      if (!item || String(item.progressionMode || '')!==MODES.STRAIGHT) return;
      const card=row.closest('.session-card');const text=String(card?.querySelector?.('.title,h3,.session-title')?.textContent || card?.textContent || '');const match=text.match(/Session\s+(\d+)/i);const session=match?Math.max(1,Number(match[1])):1;
      const targets=straightTargets(item,session);const details=Array.from(row.children).find((child) => child.tagName==='DIV');
      Array.from(details?.querySelectorAll?.('b') || []).forEach((node,index) => { node.textContent=String(targets[Math.min(index,targets.length-1)]); });
    });
  }

  function patch() {
    patchExerciseRows();ensureSettingsGrid();patchFrequencyRange();syncLengthMode();preserveStartDate();installSaveWrapper();installRuntimeWrappers();patchPreview($('#planOut'),true);patchPreview($('#myPlanSavedWrap'),false);
    document.documentElement.setAttribute('data-baseline-fitness-plan-generator-coherence','v4');
  }
  function schedule() { if (frame) return;frame=global.requestAnimationFrame(() => { frame=0;patch(); }); }

  document.addEventListener('change',(event) => {
    if (event.target?.matches?.('#lengthMode,#freq,#frequencyRangeMax,#scheduleMode,#startDate') || event.target?.closest?.('#exerciseList')) global.setTimeout(schedule,0);
  },true);
  document.addEventListener('input',(event) => { if (event.target?.closest?.('#exerciseList') || event.target?.id==='startDate') schedule(); },true);
  document.addEventListener('click',(event) => { if (event.target?.closest?.('#genBtn,#savePlanBtn,#editOptionsBtn,[data-open-calisthenics-plan]')) global.setTimeout(schedule,0); },true);
  document.addEventListener('baseline:fitness-plans-updated',schedule);
  document.addEventListener('baseline:fitness-workout-updated',schedule);
  if (typeof MutationObserver!=='undefined') { observer=new MutationObserver(schedule);observer.observe($('#myPlanGeneratorWrap') || document.getElementById('my-plan'),{ childList:true,subtree:true }); }
  patch();[80,250,700].forEach((delay) => global.setTimeout(patch,delay));
  global.addEventListener('pagehide',() => { observer?.disconnect();if(frame)global.cancelAnimationFrame(frame); },{ once:true });
})(typeof window!=='undefined'?window:globalThis);

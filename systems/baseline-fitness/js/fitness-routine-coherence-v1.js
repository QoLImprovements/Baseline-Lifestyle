/* Baseline Fitness — system adapter for the shared My Routine contract.

   This is NOT a second My Routine renderer. It supplies Fitness-specific facts
   to the shared structure: comprehensive Summary detail, a refresh after plan /
   group data changes, and one exercise progression history across all plans.

   IMPORTANT FOR FUTURE EDITS
   --------------------------
   If the same exercise exists in more than one Calisthenics plan, completed
   sessions from every plan advance that exercise together. Do not calculate
   progression from a plan-local session number again. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V1__) return;
  global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V1__=true;
  const document=global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app)!=='fitness') return;

  const $=(selector,root=document) => root?.querySelector?.(selector) || null;
  const $$=(selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc=(value) => String(value==null?'':value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  let frame=0;
  let workoutWrapped=false;

  function plans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }

  function exerciseDefinition(name) {
    const target=String(name || '').replace(/\s+(Left|Right)$/i,'').trim();
    return (global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || []).find((exercise) => String(exercise.name || '').localeCompare(target,'en-GB',{ sensitivity:'base' })===0) || null;
  }

  function activityDefinition(id) {
    return global.BASELINE_FITNESS_ACTIVITY_CATALOGUE?.ACTIVITY_BY_ID?.get?.(String(id || '')) || null;
  }

  function planItemForExercise(exercise) {
    const selected=Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0);
    const ordered=plans().slice().sort((left,right) => Number(left.planId===selected ? -1 : 0)-Number(right.planId===selected ? -1 : 0));
    for (const plan of ordered) {
      const item=(plan?.planJson?.items || []).find((candidate) => String(candidate?.exercise || '').localeCompare(String(exercise || ''),'en-GB',{ sensitivity:'base' })===0);
      if (item) return item;
    }
    return null;
  }

  function completedSessionsForExercise(exercise) {
    return plans().reduce((count,plan) => {
      const contains=(plan?.planJson?.items || []).some((item) => String(item?.exercise || '').localeCompare(String(exercise || ''),'en-GB',{ sensitivity:'base' })===0);
      if (!contains) return count;
      return count+(plan.sessions || []).filter((session) => String(session?.status || '')==='done').length;
    },0);
  }

  function setTargetLabel(step,target) {
    const copy=Object.assign({},step,{ target });
    const laterality=copy.laterality==='per-side' ? ' per side' : '';
    const label=String(copy.label || copy.name || copy.exercise || '');
    if (/\(\d+(?:\s+per side)?\)/.test(label)) copy.label=label.replace(/\(\d+(?:\s+per side)?\)/,`(${target}${laterality})`);
    else copy.label=`${copy.name || copy.exercise} - (${target}${laterality})`;
    return copy;
  }

  function applyCrossPlanProgression(context) {
    if (!context || !Array.isArray(context.steps)) return context;
    const progression=global.BASELINE_FITNESS_EXERCISE_PROGRESSION;
    const next=Object.assign({},context);
    const steps=context.steps.map((step) => step && typeof step==='object' ? Object.assign({},step) : step);
    const byExercise=new Map();
    steps.forEach((step,index) => {
      if (!step) return;
      const name=String(step.exercise || step.name || '').replace(/\s+(Left|Right)$/i,'').trim();
      if (!name) return;
      if (!byExercise.has(name)) byExercise.set(name,[]);
      byExercise.get(name).push(index);
    });

    byExercise.forEach((indexes,exercise) => {
      const item=planItemForExercise(exercise);
      const definition=exerciseDefinition(exercise);
      if (!item || !definition) return;
      const completed=completedSessionsForExercise(exercise);
      const progressionSession=completed+1;

      if (definition.unit==='seconds' || item.progressionMode==='timed-hold') {
        const baseline=Math.max(1,Math.round(Number(item.baseline || definition.base || 1)));
        const increment=baseline>=90 ? 2 : 3;
        const target=baseline+(completed*increment);
        indexes.forEach((stepIndex) => {
          steps[stepIndex]=Object.assign({},steps[stepIndex],{ target,progressionSession,label:`${steps[stepIndex].name || steps[stepIndex].exercise} - (${target} sec)` });
        });
        return;
      }

      if (typeof progression?.progressedTargets!=='function') return;
      const targets=progression.progressedTargets(item,definition,progressionSession);
      indexes.forEach((stepIndex,position) => {
        const target=targets[Math.min(position,targets.length-1)];
        steps[stepIndex]=setTargetLabel(Object.assign({},steps[stepIndex],{ progressionSession }),target);
      });
    });

    next.steps=steps;
    next.step=steps[Number(context.stepIndex || 0)] || null;
    return next;
  }

  function wrapWorkout() {
    const current=global.BASELINE_fitnessWorkout;
    if (!current || current.__baselineCrossPlanProgressionV1) return Boolean(current);
    const original=current;
    global.BASELINE_fitnessWorkout=Object.freeze(Object.assign({},original,{
      __baselineCrossPlanProgressionV1:true,
      getCurrentContext(){ return applyCrossPlanProgression(original.getCurrentContext?.()); },
      startSession(){ return applyCrossPlanProgression(original.startSession?.()); },
      succeedCurrentStep(inputMode='manual'){ return applyCrossPlanProgression(original.succeedCurrentStep?.(inputMode)); },
      failCurrentStep(achieved,inputMode='manual'){ return applyCrossPlanProgression(original.failCurrentStep?.(achieved,inputMode)); },
      recordTimedCurrentStep(achieved,inputMode='manual'){ return applyCrossPlanProgression(original.recordTimedCurrentStep?.(achieved,inputMode)); },
      async finishSession(){ return applyCrossPlanProgression(await original.finishSession?.()); },
      resetSession(){ return applyCrossPlanProgression(original.resetSession?.()); },
      onChange(listener){ return original.onChange?.((context) => { try { listener(applyCrossPlanProgression(context)); } catch (_error) {} }); }
    }));
    workoutWrapped=true;
    return true;
  }

  function progressionText(item,definition) {
    if (definition?.unit==='seconds' || item?.progressionMode==='timed-hold') return 'Timed hold progression shared across every plan containing this exercise.';
    if (item?.progressionMode==='straight-sets') return `Straight sets: equal starting sets; +${Number(item.repIncrease || 0)} rep${Number(item.repIncrease || 0)===1?'':'s'} to every set after a successful session.`;
    return `Linear fixed progression: initial sets are calculated from the max baseline; +${Number(item.repIncrease || 0)} rep${Number(item.repIncrease || 0)===1?'':'s'} to every set after a successful session.`;
  }

  function enrichSummary() {
    const root=$('#fitnessExerciseSummary');
    if (!root) return;
    const routine=global.BASELINE_fitnessRoutine?.getState?.() || { activities:[] };
    const planMap=new Map(plans().map((plan) => [`plan:${Number(plan.planId)}`,plan]));
    const activityMap=new Map((routine.activities || []).map((activity) => [`activity:${String(activity.id)}`,activity]));

    $$('.fitness-exercise-summary-item',root).forEach((card) => {
      if (card.querySelector(':scope>.bl-fitness-summary-comprehensive')) return;
      const key=String(card.dataset.v4Entity || '');
      const panel=document.createElement('div');
      panel.className='bl-fitness-summary-comprehensive';
      const plan=planMap.get(key);
      if (plan) {
        const items=Array.isArray(plan.planJson?.items) ? plan.planJson.items : [];
        panel.innerHTML=`<div class="bl-public-v3-exercises">${items.map((item,index) => {
          const definition=exerciseDefinition(item.exercise);
          return `<section class="bl-public-v3-exercise"><strong>${index+1}. ${esc(item.exercise || 'Exercise')}</strong><div class="fitness-summary-meta"><span>${esc(definition?.family || 'Calisthenics')}</span><span>${esc(definition?.movementCategory || 'Bodyweight')}</span></div>${definition?.goodFor?`<p><b>Purpose:</b> ${esc(definition.goodFor)}</p>`:''}${definition?.how?`<p><b>Technique:</b> ${esc(definition.how)}</p>`:''}<p><b>Progression:</b> ${esc(progressionText(item,definition))}</p></section>`;
        }).join('')}</div>`;
      } else {
        const activity=activityMap.get(key);
        const definition=activityDefinition(activity?.activityId);
        if (!activity) return;
        const metrics=(definition?.metrics || []).map((metric) => `${metric.label}${metric.unit?` (${metric.unit})`:''}`).join(', ');
        panel.innerHTML=`<div class="bl-public-v3-detail-grid"><section class="bl-public-v3-detail"><h5>Activity classification</h5><p>${esc(definition?.group || activity.section || 'Fitness activity')}</p></section><section class="bl-public-v3-detail"><h5>Relevant session measures</h5><p>${esc(metrics || 'Duration, quality and activity-specific session details.')}</p></section></div>`;
      }
      card.appendChild(panel);
    });
  }

  function refreshRoutineLog() {
    try { global.BASELINE_fitnessRoutine?.render?.(); } catch (_error) {}
  }

  function schedule() {
    if (frame) return;
    frame=global.requestAnimationFrame(() => { frame=0;wrapWorkout();enrichSummary(); });
  }

  function boot() {
    document.addEventListener('baseline:fitness-summary-rendered',schedule);
    document.addEventListener('baseline:fitness-plans-updated',() => { schedule();global.setTimeout(refreshRoutineLog,0); });
    document.addEventListener('baseline:routine-settings-changed',() => { schedule();global.setTimeout(refreshRoutineLog,0); });
    document.addEventListener('baseline:fitness-workout-updated',schedule);
    [0,100,300,700,1500].forEach((delay) => global.setTimeout(schedule,delay));
    document.documentElement.setAttribute('data-fitness-routine-coherence','v1');
  }

  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);
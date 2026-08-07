/* Baseline Fitness — system adapter for the shared My Routine contract.

   OWNERSHIP CONTRACT — DO NOT DUPLICATE RUNTIME PROGRESSION HERE
   --------------------------------------------------------------
   This module does two Fitness-specific jobs only:
     1. enrich the owner-visible Routine Summary with comprehensive details;
     2. ask the Fitness data owner to re-render after plans/groups change.

   Cross-plan exercise progression belongs to fitness-live-policy-v1.js. Keeping
   it in one place prevents two progression wrappers from fighting over targets. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V2__) return;
  global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V2__=true;
  global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V1__=true;

  const document=global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app)!=='fitness') return;

  const $=(selector,root=document) => root?.querySelector?.(selector) || null;
  const $$=(selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc=(value) => String(value==null?'':value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  let frame=0;
  let refreshTimer=0;

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

  function progressionText(item,definition) {
    if (definition?.unit==='seconds' || item?.progressionMode==='timed-hold') {
      return 'Timed hold progression. The exercise advances across every plan that contains it.';
    }
    if (item?.progressionMode==='straight-sets') {
      const increase=Number(item.repIncrease || 0);
      return `Straight sets: equal starting sets; +${increase} rep${increase===1?'':'s'} to every set after a successful session.`;
    }
    const increase=Number(item?.repIncrease || 0);
    return `Linear fixed progression: initial sets are calculated from the max baseline; +${increase} rep${increase===1?'':'s'} to every set after a successful session.`;
  }

  function enrichSummary() {
    const root=$('#fitnessExerciseSummary');
    if (!root) return;
    const routine=global.BASELINE_fitnessRoutine?.getState?.() || { activities:[] };
    const planMap=new Map(plans().map((plan) => [`plan:${Number(plan.planId)}`,plan]));
    const activityMap=new Map((routine.activities || []).map((activity) => [`activity:${String(activity.id)}`,activity]));

    $$('.fitness-exercise-summary-item',root).forEach((card) => {
      const key=String(card.dataset.v4Entity || '');
      let panel=card.querySelector(':scope>.bl-fitness-summary-comprehensive');
      if (!panel) {
        panel=document.createElement('div');
        panel.className='bl-fitness-summary-comprehensive';
        card.appendChild(panel);
      }

      const plan=planMap.get(key);
      if (plan) {
        const items=Array.isArray(plan.planJson?.items) ? plan.planJson.items : [];
        const signature=JSON.stringify(items.map((item) => [item.exercise,item.baseline,item.sets,item.progressionMode,item.repIncrease]));
        if (panel.dataset.signature===signature) return;
        panel.dataset.signature=signature;
        panel.innerHTML=`<div class="bl-public-v3-exercises">${items.map((item,index) => {
          const definition=exerciseDefinition(item.exercise);
          return `<section class="bl-public-v3-exercise"><strong>${index+1}. ${esc(item.exercise || 'Exercise')}</strong><div class="fitness-summary-meta"><span>${esc(definition?.family || 'Calisthenics')}</span><span>${esc(definition?.movementCategory || 'Bodyweight')}</span></div>${definition?.goodFor?`<p><b>Purpose:</b> ${esc(definition.goodFor)}</p>`:''}${definition?.how?`<p><b>Technique:</b> ${esc(definition.how)}</p>`:''}<p><b>Progression:</b> ${esc(progressionText(item,definition))}</p></section>`;
        }).join('')}</div>`;
        return;
      }

      const activity=activityMap.get(key);
      if (!activity) {
        panel.remove();
        return;
      }
      const definition=activityDefinition(activity.activityId);
      const metrics=(definition?.metrics || []).map((metric) => `${metric.label}${metric.unit?` (${metric.unit})`:''}`).join(', ');
      const signature=JSON.stringify([activity.activityId,activity.name,activity.notes,metrics]);
      if (panel.dataset.signature===signature) return;
      panel.dataset.signature=signature;
      panel.innerHTML=`<div class="bl-public-v3-detail-grid"><section class="bl-public-v3-detail"><h5>Activity classification</h5><p>${esc(definition?.group || activity.section || 'Fitness activity')}</p>${activity.notes?`<p>${esc(activity.notes)}</p>`:''}</section><section class="bl-public-v3-detail"><h5>Relevant session measures</h5><p>${esc(metrics || 'Duration, quality and activity-specific session details.')}</p></section></div>`;
    });
  }

  function refreshRoutineLog() {
    clearTimeout(refreshTimer);
    refreshTimer=global.setTimeout(() => {
      try { global.BASELINE_fitnessRoutine?.render?.(); } catch (_error) {}
    },40);
  }

  function schedule() {
    if (frame) return;
    frame=global.requestAnimationFrame(() => { frame=0;enrichSummary(); });
  }

  function onPlansOrGroupsChanged() {
    schedule();
    /* Let the shared authority install/update availability first, then ask the
       single Fitness data owner to render once from the final state. */
    refreshRoutineLog();
  }

  function boot() {
    document.addEventListener('baseline:fitness-summary-rendered',schedule);
    document.addEventListener('baseline:fitness-plans-updated',onPlansOrGroupsChanged);
    document.addEventListener('baseline:routine-settings-changed',onPlansOrGroupsChanged);
    document.addEventListener('baseline:fitness-workout-updated',schedule);
    [0,120,350,800].forEach((delay) => global.setTimeout(() => { schedule();if (delay>=350) refreshRoutineLog(); },delay));
    document.documentElement.setAttribute('data-fitness-routine-coherence','v2-noncompetitive');
  }

  global.addEventListener('pagehide',() => { if (frame) global.cancelAnimationFrame(frame);clearTimeout(refreshTimer); },{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);
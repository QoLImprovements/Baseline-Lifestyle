/* Baseline Fitness — system adapter for the shared My Routine contract.

   OWNERSHIP CONTRACT — DO NOT DUPLICATE RUNTIME PROGRESSION OR RENDERERS HERE
   --------------------------------------------------------------------------
   This module does two Fitness-specific jobs only:
     1. supply comprehensive Fitness content inside the shared Summary structure;
     2. perform one delayed initial Log refresh after all authorities have loaded.

   ROUTINE SUMMARY CONTRACT
   ------------------------
   Skincare is the visual/structural template for Routine Summary sitewide.
   Fitness therefore uses the same numbered title, two-column "Routine details"
   + "Benefits and practical role" silhouette. Fitness may add exercise-specific
   detail beneath that shared shell, but must not introduce a parallel summary UI.

   Cross-plan progression belongs to fitness-live-policy-v1.js. Group and plan
   change events already have their own data-owner render paths. Re-rendering the
   whole workspace from here used to replace activity cards after group numbering
   was applied, so this adapter deliberately does not render on those events. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V5__) return;
  global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V5__=true;
  global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V4__=true;
  global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V3__=true;
  global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V2__=true;
  global.__BASELINE_FITNESS_ROUTINE_COHERENCE_V1__=true;

  const document=global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app)!=='fitness') return;

  const $=(selector,root=document) => root?.querySelector?.(selector) || null;
  const $$=(selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc=(value) => String(value==null?'':value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  let frame=0;
  let initialRefreshTimer=0;
  let initialRefreshDone=false;

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

  function frequencyText(frequency) {
    const value=frequency && typeof frequency==='object' ? frequency : {};
    if (value.mode==='daily') return 'Every day';
    if (value.mode==='days') return Array.isArray(value.days) && value.days.length ? value.days.join(', ') : 'Specific days';
    if (value.mode==='weekly') return `${Math.max(1,Number(value.timesPerWeek || 1))}× each week`;
    if (value.mode==='monthly') return `${Math.max(1,Number(value.timesPerMonth || 1))}× each month`;
    return 'As needed';
  }

  function planFrequencyText(plan) {
    const value=plan?.planJson || {};
    if (value.scheduleMode==='specific-days') {
      const days=Array.isArray(value.days) ? value.days.filter(Boolean) : [];
      return days.length ? days.join(', ') : 'Specific weekdays';
    }
    const min=Math.max(1,Math.min(7,Number(value.frequencyMin || String(value.frequency || '1x').replace(/\D/g,'')) || 1));
    const max=Math.max(0,Math.min(7,Number(value.frequencyRangeMax || 0)));
    return max>min ? `${min}–${max} days each week` : `${min} day${min===1?'':'s'} each week`;
  }

  function progressionText(item,definition) {
    if (definition?.unit==='seconds' || item?.progressionMode==='timed-hold') return 'Timed isometric progression: the hold target advances after successful sessions and is shared across plans containing the same exercise.';
    if (item?.progressionMode==='straight-sets') {
      const increase=Number(item.repIncrease || 0);
      return `Straight sets: equal working sets begin from the Max Baseline calculation; +${increase} rep${increase===1?'':'s'} is added to every set after a successful session.`;
    }
    const increase=Number(item?.repIncrease || 0);
    return `Linear fixed progression: the working sets are calculated from Max Baseline with a deliberate within-session rise; +${increase} rep${increase===1?'':'s'} is added after a successful session.`;
  }

  function exerciseMuscles(definition) {
    const text=`${definition?.family || ''} ${definition?.movementCategory || ''} ${definition?.name || ''}`.toLocaleLowerCase('en-GB');
    if (/reverse plank|posterior core/.test(text)) return 'Glutes, hamstrings, spinal extensors and posterior shoulder stabilisers, with trunk bracing throughout.';
    if (/plank|core|climber|hollow|side/.test(text)) return 'Abdominals, obliques and deep trunk stabilisers, with shoulder and hip stabilisers according to the variation.';
    if (/lunge|squat|leg|cossack|step/.test(text)) return 'Quadriceps, glutes, hamstrings and adductors, with calves and trunk stabilisers supporting balance and control.';
    if (/push|dip|chest/.test(text)) return 'Chest, triceps and anterior shoulders, with the trunk maintaining body position.';
    if (/pull|row|chin|back/.test(text)) return 'Latissimus dorsi, upper back, biceps and grip, with trunk stabilisers resisting unwanted movement.';
    if (/calf/.test(text)) return 'Calves and ankle stabilisers, with the rest of the leg contributing to balance.';
    return 'Exercise-specific prime movers plus the trunk and joint stabilisers required to control the bodyweight movement.';
  }

  function exerciseDemand(item,definition) {
    if (definition?.unit==='seconds' || item?.progressionMode==='timed-hold') return 'Predominantly anaerobic / isometric muscular endurance';
    const text=`${definition?.family || ''} ${definition?.movementCategory || ''}`.toLocaleLowerCase('en-GB');
    if (/climber|burpee|dynamic/.test(text)) return 'Mixed anaerobic muscular work with increasing aerobic demand at sustained pace';
    return 'Predominantly anaerobic resistance and muscular-endurance work';
  }

  function planMuscleSummary(items) {
    const movementNames=Array.from(new Set(items.map((item) => exerciseDefinition(item.exercise)?.movementCategory).filter(Boolean)));
    if (!movementNames.length) return 'Whole-body involvement depends on the exercises saved in this plan.';
    return `${movementNames.join(', ')} movements; individual exercise cards below identify the principal muscle involvement.`;
  }

  function planBenefits(items) {
    const timed=items.some((item) => exerciseDefinition(item.exercise)?.unit==='seconds' || item.progressionMode==='timed-hold');
    const unilateral=items.some((item) => /lunge|split|side/i.test(String(item.exercise || '')));
    const parts=['Builds progressive bodyweight strength and muscular endurance while preserving an exercise-by-exercise progression record.'];
    if (timed) parts.push('Timed holds add isometric strength-endurance and positional control.');
    if (unilateral) parts.push('Unilateral and lateral movements add balance, hip control and side-to-side strength exposure.');
    return parts.join(' ');
  }

  function activityProfile(definition,activity) {
    const profile=String(definition?.metricProfile || 'duration');
    const classification=profile==='running'||profile==='walking'||profile==='cycling'||profile==='swimming'||profile==='cardioMachine'
      ? 'Predominantly aerobic / cardiorespiratory'
      : profile==='intervals'
        ? 'Mixed aerobic and anaerobic interval conditioning'
        : profile==='strength'||profile==='climbing'
          ? 'Resistance / predominantly anaerobic strength work'
          : profile==='martial'||profile==='racket'||profile==='teamSport'||profile==='batBall'
            ? 'Mixed aerobic and anaerobic skill-based activity'
            : profile==='yoga'||profile==='mindful'||profile==='mobility'
              ? 'Mobility, control, balance and low-to-moderate intensity conditioning'
              : 'General physical activity / conditioning';
    const muscles=profile==='running'||profile==='walking'
      ? 'Glutes, quadriceps, hamstrings, calves, hip stabilisers and trunk.'
      : profile==='cycling'
        ? 'Quadriceps, glutes, hamstrings and calves, with trunk stabilisers supporting posture.'
        : profile==='swimming'
          ? 'Shoulders, upper back, chest, arms and trunk, with hips and legs contributing according to stroke.'
          : profile==='racket'
            ? 'Legs and hips for court movement; trunk rotation; shoulder, forearm and grip for racket control.'
            : profile==='martial'
              ? 'Full body: legs and hips, trunk, shoulders, arms and grip according to the discipline.'
              : profile==='strength'||profile==='climbing'
                ? 'Exercise-dependent whole-body musculature, with substantial trunk, grip and joint-stabiliser involvement.'
                : profile==='yoga'||profile==='mindful'||profile==='mobility'
                  ? 'Trunk and postural stabilisers plus the muscles surrounding the joints trained through the selected positions.'
                  : 'Whole-body contribution varies with the selected activity.';
    const benefit=profile==='running'||profile==='walking'||profile==='cycling'||profile==='swimming'||profile==='cardioMachine'
      ? 'Builds cardiovascular capacity, repeatable endurance and local muscular endurance through sustained cyclical work.'
      : profile==='racket'
        ? 'Combines acceleration, deceleration and direction change with reaction speed, coordination and sport-specific skill.'
        : profile==='yoga'||profile==='mindful'||profile==='mobility'
          ? 'Develops usable range, positional control, balance and body awareness while providing lower-load movement practice.'
          : profile==='strength'||profile==='climbing'
            ? 'Builds force production, muscular endurance and movement control, with progression determined by the specific exercise or route demands.'
            : profile==='martial'||profile==='teamSport'||profile==='batBall'
              ? 'Combines conditioning with coordination, reaction, movement skill and repeated changes in intensity.'
              : 'Develops the physical capacities and movement skills specific to the activity while contributing to overall weekly training volume.';
    return {
      activityType:String(definition?.group || activity.section || 'Fitness activity'),
      energyDemand:classification,
      muscles,
      benefit
    };
  }

  function summaryRows(rows) {
    return `<dl class="bl-routine-summary-rows">${rows.filter((row) => row.value).map((row) => `<div><dt>${esc(row.label)}</dt><dd>${esc(row.value)}</dd></div>`).join('')}</dl>`;
  }

  function planHtml(plan) {
    const items=Array.isArray(plan.planJson?.items) ? plan.planJson.items : [];
    const date=String(plan.planJson?.startDate || plan.planJson?.start_date || '').trim();
    return `<div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${summaryRows([
      { label:'Routine type',value:'Calisthenics / bodyweight resistance plan' },
      { label:'Days per week',value:planFrequencyText(plan) },
      { label:'Workout date',value:date },
      { label:'Exercises',value:`${items.length} saved exercise${items.length===1?'':'s'}` },
      { label:'Energy demand',value:'Predominantly anaerobic strength and muscular endurance, with aerobic demand increasing as session density rises.' },
      { label:'Movement emphasis',value:planMuscleSummary(items) }
    ])}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(planBenefits(items))}</p></section></div>${items.length ? `<div class="bl-fitness-summary-exercise-details">${items.map((item,index) => {
      const definition=exerciseDefinition(item.exercise);
      return `<section class="bl-public-v3-exercise bl-routine-summary-section"><strong>${index+1}. ${esc(item.exercise || 'Exercise')}</strong>${summaryRows([
        { label:'Movement',value:definition?.movementCategory || definition?.family || 'Bodyweight' },
        { label:'Exercise demand',value:exerciseDemand(item,definition) },
        { label:'Muscle involvement',value:exerciseMuscles(definition) }
      ])}${definition?.goodFor?`<p><b>Benefits / purpose:</b> ${esc(definition.goodFor)}</p>`:''}${definition?.how?`<p><b>Technique:</b> ${esc(definition.how)}</p>`:''}<p><b>Progression:</b> ${esc(progressionText(item,definition))}</p></section>`;
    }).join('')}</div>` : ''}`;
  }

  function activityHtml(activity) {
    const definition=activityDefinition(activity.activityId);
    const metrics=(definition?.metrics || []).map((metric) => `${metric.label}${metric.unit?` (${metric.unit})`:''}`).join(', ');
    const profile=activityProfile(definition,activity);
    return `<div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${summaryRows([
      { label:'Routine type',value:profile.activityType },
      { label:'Time of day',value:String(activity.timeOfDay || 'Any time') },
      { label:'Frequency',value:frequencyText(activity.frequency) },
      { label:'Energy demand',value:profile.energyDemand },
      { label:'Primary muscle involvement',value:profile.muscles },
      { label:'Relevant session measures',value:metrics || 'Duration, quality and activity-specific session details.' }
    ])}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(profile.benefit)}</p>${activity.notes?`<p><strong>Your notes:</strong> ${esc(activity.notes)}</p>`:''}</section></div>`;
  }

  function makeSharedSummaryTitle(card) {
    let head=card.querySelector(':scope>.fitness-summary-head');
    if (!head) {
      head=document.createElement('div');head.className='fitness-summary-head';card.prepend(head);
    }
    const currentName=String(head.querySelector('strong')?.textContent || card.dataset.v4Entity || 'Routine').trim();
    const siblings=Array.from(card.parentElement?.querySelectorAll?.(':scope>.fitness-exercise-summary-item') || []);
    const index=Math.max(0,siblings.indexOf(card));
    head.className='fitness-summary-head routine-summary-title';
    head.innerHTML=`<span>${index+1}</span><strong>${esc(currentName)}</strong>`;

    /* These strips belonged to the previous Fitness-only Summary design. Their
       information now lives in the same Routine details panel used by Skincare. */
    card.querySelector(':scope>.fitness-summary-meta')?.remove();
    card.querySelector(':scope>.fitness-summary-exercises')?.remove();
  }

  function enrichSummary() {
    const root=$('#fitnessExerciseSummary');
    if (!root) return;
    const routine=global.BASELINE_fitnessRoutine?.getState?.() || { activities:[] };
    const planMap=new Map(plans().map((plan) => [`plan:${Number(plan.planId)}`,plan]));
    const activityMap=new Map((routine.activities || []).map((activity) => [`activity:${String(activity.id)}`,activity]));

    $$('.fitness-exercise-summary-item',root).forEach((card) => {
      makeSharedSummaryTitle(card);
      const key=String(card.dataset.v4Entity || '');
      let panel=card.querySelector(':scope>.bl-fitness-summary-comprehensive');
      if (!panel) { panel=document.createElement('div');panel.className='bl-fitness-summary-comprehensive';card.appendChild(panel); }

      const plan=planMap.get(key);
      if (plan) {
        const items=Array.isArray(plan.planJson?.items) ? plan.planJson.items : [];
        const signature=JSON.stringify([plan.planJson?.startDate,plan.planJson?.frequencyMin,plan.planJson?.frequencyRangeMax,...items.map((item) => [item.exercise,item.baseline,item.sets,item.progressionMode,item.repIncrease])]);
        if (panel.dataset.signature===signature) return;
        panel.dataset.signature=signature;
        panel.innerHTML=planHtml(plan);
        return;
      }

      const activity=activityMap.get(key);
      if (!activity) { panel.remove();return; }
      const definition=activityDefinition(activity.activityId);
      const metrics=(definition?.metrics || []).map((metric) => `${metric.label}${metric.unit?` (${metric.unit})`:''}`).join(', ');
      const signature=JSON.stringify([activity.activityId,activity.name,activity.notes,activity.timeOfDay,activity.frequency,metrics]);
      if (panel.dataset.signature===signature) return;
      panel.dataset.signature=signature;
      panel.innerHTML=activityHtml(activity);
    });
  }

  function initialLogRefresh() {
    if (initialRefreshDone) return;
    clearTimeout(initialRefreshTimer);
    initialRefreshTimer=global.setTimeout(() => {
      if (initialRefreshDone) return;
      initialRefreshDone=true;
      /* One boot-time refresh is needed because the shared authority that makes
         weekly-count plans available loads after the Fitness workspace. Never
         repeat this on later group/settings events. */
      try { global.BASELINE_fitnessRoutine?.render?.(); } catch (_error) {}
      try { document.dispatchEvent(new CustomEvent('baseline:fitness-coherence-initialised')); } catch (_error) {}
    },420);
  }

  function schedule() {
    if (frame) return;
    frame=global.requestAnimationFrame(() => { frame=0;enrichSummary(); });
  }

  function boot() {
    document.addEventListener('baseline:fitness-summary-rendered',schedule);
    document.addEventListener('baseline:fitness-plans-updated',schedule);
    document.addEventListener('baseline:routine-settings-changed',schedule);
    document.addEventListener('baseline:fitness-workout-updated',schedule);
    [0,120,350,800].forEach((delay) => global.setTimeout(schedule,delay));
    initialLogRefresh();
    document.documentElement.setAttribute('data-fitness-routine-coherence','v5-shared-summary');
  }

  global.addEventListener('pagehide',() => { if (frame) global.cancelAnimationFrame(frame);clearTimeout(initialRefreshTimer); },{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);
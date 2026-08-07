/* Baseline Fitness — deterministic loader for the ONE My Routine implementation.

   OWNERSHIP CONTRACT — DO NOT ADD PARALLEL ROUTINE RENDERERS
   ---------------------------------------------------------
   fitness-routine-workspace-v2.js  -> Fitness activity/log data owner
   fitness-routine-structure-v4.js  -> Fitness adapter into four sitewide views
   fitness-routine-groups-v1.js     -> Fitness group assignment adapter
   baseline-public-routine-groups-v1.js -> shared read-only Public Routine viewer
   baseline-routine-authority-v7.js -> shared cross-system coherence rules
   fitness-routine-coherence-v1.js  -> Fitness facts/summary/cross-plan progression

   View switching stays hidden until the selected view is fully restored. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_LOADER_V26__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V26__=true;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V25__=true;

  const document=global.document;
  const ROUTINE_VIEW_KEY='__bl_fitness_routine_view_v2__';
  const PLAN_VIEW_KEY='__bl_fitness_plan_view_v4__';
  const CANONICAL_PATH='/baseline-fitness/my-routine';
  let planSwitchTimer=0;
  let calendarObserver=null;

  function installBootShield() {
    document.documentElement.setAttribute('data-fitness-routine-booting','true');
    if (document.getElementById('fitnessRoutineBootShieldStyle')) return;
    const style=document.createElement('style');style.id='fitnessRoutineBootShieldStyle';
    style.textContent=`
      html[data-fitness-routine-booting="true"] #my-plan{visibility:hidden!important}
      html[data-fitness-plan-switching="true"] [data-fitness-routine-panel="plan"]{visibility:hidden!important}
      #my-plan :is(.fitness-routine-panel,.fitness-routine-card,.ex-row){animation:none!important;transition:none!important}
    `;
    document.head.appendChild(style);
  }

  function releaseBootShield() {
    global.requestAnimationFrame(() => global.requestAnimationFrame(() => document.documentElement.removeAttribute('data-fitness-routine-booting')));
  }
  function beginPlanSwitch() { clearTimeout(planSwitchTimer);document.documentElement.setAttribute('data-fitness-plan-switching','true');planSwitchTimer=global.setTimeout(endPlanSwitch,1600); }
  function endPlanSwitch() { clearTimeout(planSwitchTimer);global.requestAnimationFrame(() => global.requestAnimationFrame(() => document.documentElement.removeAttribute('data-fitness-plan-switching'))); }

  function bindPlanSwitchShield() {
    if (document.documentElement.dataset.fitnessPlanSwitchShield==='true') return;
    document.documentElement.dataset.fitnessPlanSwitchShield='true';
    document.addEventListener('change',(event) => { if (event.target?.id==='calisthenicsPlanSelect') beginPlanSwitch(); },true);
    document.addEventListener('baseline:fitness-plans-updated',endPlanSwitch);
    global.addEventListener('pageshow',endPlanSwitch);
  }

  function navigationPath() {
    try { const entry=global.performance?.getEntriesByType?.('navigation')?.[0];if (entry?.name) return new URL(entry.name,global.location.href).pathname; } catch (_error) {}
    return String(global.location?.pathname || '');
  }

  const path=navigationPath();
  const openRoutine=/\/baseline-fitness\/(?:my-routine|my-plan|workout-routine)\/?$/.test(path) || document.documentElement.getAttribute('data-initial-fitness-tab')==='my-plan';
  const legacyPlanRoute=/\/baseline-fitness\/(?:my-plan|workout-routine)\/?$/.test(path);
  const newPlanRequest=(() => { try { return new URL(global.location.href).searchParams.has('new-plan'); } catch (_error) { return false; } })();

  if (openRoutine) installBootShield();
  bindPlanSwitchShield();

  function load(src,marker) {
    const existing=document.querySelector(`script[${marker}]`);
    if (existing) {
      if (existing.dataset.loaded==='true') return Promise.resolve();
      return new Promise((resolve,reject) => { existing.addEventListener('load',resolve,{ once:true });existing.addEventListener('error',reject,{ once:true }); });
    }
    return new Promise((resolve,reject) => {
      const script=document.createElement('script');script.src=src;script.async=false;script.setAttribute(marker,'true');
      script.addEventListener('load',() => { script.dataset.loaded='true';resolve(); },{ once:true });script.addEventListener('error',reject,{ once:true });document.head.appendChild(script);
    });
  }

  function selectRoutinePage() {
    if (!openRoutine) return;
    document.documentElement.setAttribute('data-initial-fitness-tab','my-plan');
    try { global.BASELINE_selectTab?.('my-plan',{ silentHistory:true }); } catch (_error) {}
    document.querySelectorAll('.tab[data-target]').forEach((button) => { const active=button.dataset.target==='my-plan';button.classList.toggle('active',active);button.setAttribute('aria-selected',active?'true':'false'); });
    document.querySelectorAll('main.wrap > .section').forEach((section) => section.classList.toggle('active',section.id==='my-plan'));
    const section=document.getElementById('my-plan');if (section) section.hidden=false;
    try {
      const current=new URL(global.location.href);
      if (current.pathname!==CANONICAL_PATH) { current.pathname=CANONICAL_PATH;global.history.replaceState(global.history.state,'',current.pathname+current.search+current.hash); }
    } catch (_error) {}
  }

  function bindCanonicalRoutineRoute() {
    if (!openRoutine || document.documentElement.dataset.fitnessRoutineRouteGuard==='true') return;
    document.documentElement.dataset.fitnessRoutineRouteGuard='true';
    document.addEventListener('click',(event) => { if (event.target?.closest?.('.tab[data-target="my-plan"]')) global.setTimeout(selectRoutinePage,0); },true);
    global.addEventListener('pageshow',() => global.setTimeout(selectRoutinePage,0));
  }

  function normaliseFitnessWeekRows() {
    const grid=document.getElementById('fitnessCalendarGrid');const weekdays=document.querySelector('.fitness-calendar-weekdays');if (!grid) return;
    const weekSelected=document.querySelector('[data-calendar-view="week"][aria-selected="true"]');const weekView=Boolean(weekSelected && grid.classList.contains('week-view'));
    if (!weekView) { grid.classList.remove('bl-routine-week-list');grid.querySelectorAll(':scope > .bl-routine-day-row').forEach((row) => row.classList.remove('bl-routine-day-row'));if (weekdays) weekdays.hidden=false;return; }
    const rows=Array.from(grid.querySelectorAll(':scope > [data-calendar-date]'));if (rows.length!==7) return;
    grid.classList.add('bl-routine-week-list');rows.forEach((row) => row.classList.add('bl-routine-day-row'));if (weekdays) weekdays.hidden=true;
  }

  function bindFitnessWeekRows() {
    const grid=document.getElementById('fitnessCalendarGrid');if (!grid) return;
    if (!calendarObserver && typeof MutationObserver!=='undefined') { calendarObserver=new MutationObserver(() => global.requestAnimationFrame(normaliseFitnessWeekRows));calendarObserver.observe(grid,{ childList:true }); }
    document.addEventListener('click',(event) => { if (event.target?.closest?.('[data-calendar-view],[data-calendar-move],[data-calendar-today]')) global.setTimeout(normaliseFitnessWeekRows,0); });
    normaliseFitnessWeekRows();
  }

  function requestedViews() {
    let main='log';let plan='calisthenics';
    try {
      const url=new URL(global.location.href);const queryMain=String(url.searchParams.get('routine-view') || '');const queryPlan=String(url.searchParams.get('routine-plan') || '');
      const rememberedMain=String(global.sessionStorage?.getItem(ROUTINE_VIEW_KEY) || '');const rememberedPlan=String(global.sessionStorage?.getItem(PLAN_VIEW_KEY) || '');
      if (['log','summary','public','plan'].includes(queryMain)) main=queryMain;else if (['log','summary','public','plan','calisthenics','cardio','other','sports'].includes(rememberedMain)) main=rememberedMain;
      if (['calisthenics','cardio','other','sports'].includes(queryPlan)) plan=queryPlan;else if (['calisthenics','cardio','other','sports'].includes(rememberedPlan)) plan=rememberedPlan;
    } catch (_error) {}
    if (['calisthenics','cardio','other','sports'].includes(main)) { plan=main;main='plan'; }
    if (legacyPlanRoute || newPlanRequest) { main='plan';plan='calisthenics'; }
    return { main,plan };
  }

  function restoreRequestedView() {
    if (!openRoutine) return;
    const requested=requestedViews();
    const mainButton=document.querySelector(`[data-fitness-routine-view="${requested.main}"]`);if (mainButton) mainButton.click();
    if (requested.main==='plan') { const planButton=document.querySelector(`[data-fitness-plan-view="${requested.plan}"]`);if (planButton) planButton.click(); }
  }

  if (newPlanRequest) {
    try { global.sessionStorage?.setItem(ROUTINE_VIEW_KEY,'plan');global.sessionStorage?.setItem(PLAN_VIEW_KEY,'calisthenics'); } catch (_error) {}
  }
  selectRoutinePage();bindCanonicalRoutineRoute();

  load('/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js?v=BASELINE_FITNESS_ACTIVITY_CATALOGUE_20260805_3','data-fitness-activity-catalogue-v2')
    .then(() => load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260806_2','data-baseline-routine-system'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260806_2','data-fitness-routine-workspace-v2'))
    .then(() => load('/systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js?v=BASELINE_CALISTHENICS_SCHEDULE_20260805_1','data-fitness-calisthenics-schedule'))
    .then(() => load('/sitewide/js/baseline-fitness-plan-control-authority-v1.js?v=BASELINE_FITNESS_PLAN_CONTROL_AUTHORITY_20260806_1','data-baseline-fitness-plan-control-authority'))
    .then(() => load('/sitewide/js/baseline-public-routine-groups-v1.js?v=BASELINE_PUBLIC_ROUTINE_GROUPS_20260807_3','data-baseline-public-routine-groups'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-structure-v4.js?v=BASELINE_FITNESS_ROUTINE_STRUCTURE_20260807_1','data-fitness-routine-structure-v4'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-groups-v1.js?v=BASELINE_FITNESS_ROUTINE_GROUPS_20260807_2','data-fitness-routine-groups-v1'))
    .then(() => load('/sitewide/js/baseline-routine-authority-v7.js?v=BASELINE_ROUTINE_AUTHORITY_20260807_3','data-baseline-routine-authority-v7'))
    .then(() => load('/systems/baseline-fitness/js/fitness-generator-progression-v1.js?v=BASELINE_FITNESS_GENERATOR_PROGRESSION_20260807_3','data-fitness-generator-progression'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-coherence-v1.js?v=BASELINE_FITNESS_ROUTINE_COHERENCE_20260807_1','data-fitness-routine-coherence-v1'))
    .then(() => load('/systems/baseline-fitness/js/fitness-live-policy-v1.js?v=BASELINE_FITNESS_LIVE_POLICY_20260807_2','data-fitness-live-policy'))
    .then(() => load('/systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js?v=BASELINE_FITNESS_TIMED_TARGETS_20260805_1','data-fitness-timed-hold-targets-v2'))
    .then(() => load('/systems/baseline-fitness/js/fitness-exercise-family-filter.js?v=BASELINE_FITNESS_EXERCISE_FAMILY_FILTER_20260806_1','data-fitness-exercise-family-filter'))
    .then(() => { selectRoutinePage();restoreRequestedView();bindFitnessWeekRows();endPlanSwitch();releaseBootShield(); })
    .catch((error) => { endPlanSwitch();releaseBootShield();try { console.error('Fitness My Routine failed to load.',error); } catch (_error) {} });
})(typeof window!=='undefined'?window:globalThis);
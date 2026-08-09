/* Baseline Fitness — canonical My Routine dependency loader v36.

   OWNERSHIP ORDER
   ---------------
   catalogue/family filter -> shared Routine system -> base Routine workspace ->
   Fitness Routine Log interactions -> groups -> generator -> final live policy ->
   view structure -> Fitness Routine Summary coherence -> Public View Only ->
   shared v12 finisher.

   The base workspace owns routine/activity state and rendering. The dedicated
   Routine Log module owns Fitness-only log controls such as collapsible activity
   details, the calendar Log Date mirror and reversible Calisthenics log removal.
   The dedicated Routine Summary module owns Fitness Summary hierarchy/grouping
   and functional filtering after the structure adapter builds the shared shell.
   Shared coherence must not recreate those Fitness-specific controls.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_LOADER_V36__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V36__ = true;

  const document=global.document;
  const ROUTINE_VIEW_KEY='__bl_fitness_routine_view_v2__';
  const PLAN_VIEW_KEY='__bl_fitness_plan_view_v4__';
  const PLAN_VIEWS=['calisthenics','cardio','other','sports'];
  const MAIN_VIEWS=['log','summary','public','plan'];
  const CANONICAL_PATH='/baseline-fitness/my-routine';

  function routePath() {
    try {
      const entry=global.performance?.getEntriesByType?.('navigation')?.[0];
      return entry?.name ? new URL(entry.name,global.location.href).pathname : String(global.location?.pathname || '');
    } catch (_error) { return String(global.location?.pathname || ''); }
  }
  const path=routePath();
  const openRoutine=/\/baseline-fitness\/(?:my-routine|my-plan|workout-routine)\/?$/.test(path)
    || document.documentElement.getAttribute('data-initial-fitness-tab')==='my-plan';
  const legacyPlanRoute=/\/baseline-fitness\/(?:my-plan|workout-routine)\/?$/.test(path);
  let newPlanRequest=false;
  try { newPlanRequest=new URL(global.location.href).searchParams.has('new-plan'); } catch (_error) {}

  function selectRoutinePage() {
    if (!openRoutine) return;
    document.documentElement.setAttribute('data-initial-fitness-tab','my-plan');
    try { global.BASELINE_selectTab?.('my-plan',{ silentHistory:true }); } catch (_error) {}
    document.querySelectorAll('.tab[data-target]').forEach((button) => {
      const selected=button.dataset.target==='my-plan';
      button.classList.toggle('active',selected);
      button.setAttribute('aria-selected',selected?'true':'false');
    });
    document.querySelectorAll('main.wrap>.section').forEach((section) => section.classList.toggle('active',section.id==='my-plan'));
    const section=document.getElementById('my-plan');
    if (section) section.hidden=false;
    try {
      const url=new URL(global.location.href);
      if (url.pathname!==CANONICAL_PATH) {
        url.pathname=CANONICAL_PATH;
        global.history.replaceState(global.history.state,'',url.pathname+url.search+url.hash);
      }
    } catch (_error) {}
  }
  function requestedViews() {
    let main='log';let plan='calisthenics';
    try {
      const url=new URL(global.location.href);
      const queryMain=String(url.searchParams.get('routine-view') || '');
      const queryPlan=String(url.searchParams.get('routine-plan') || '');
      const savedMain=String(global.sessionStorage?.getItem(ROUTINE_VIEW_KEY) || '');
      const savedPlan=String(global.sessionStorage?.getItem(PLAN_VIEW_KEY) || '');
      if (MAIN_VIEWS.includes(queryMain)) main=queryMain;
      else if (MAIN_VIEWS.includes(savedMain)) main=savedMain;
      else if (PLAN_VIEWS.includes(savedMain)) { main='plan';plan=savedMain; }
      if (PLAN_VIEWS.includes(queryPlan)) plan=queryPlan;
      else if (PLAN_VIEWS.includes(savedPlan)) plan=savedPlan;
    } catch (_error) {}
    if (legacyPlanRoute || newPlanRequest) { main='plan';plan='calisthenics'; }
    return { main,plan };
  }
  function restoreRequestedView() {
    if (!openRoutine) return;
    const requested=requestedViews();
    document.querySelector(`[data-fitness-routine-view="${requested.main}"]`)?.click();
    if (requested.main==='plan') document.querySelector(`[data-fitness-plan-view="${requested.plan}"]`)?.click();
  }
  function loadScript({ src,marker }) {
    const existing=document.querySelector(`script[${marker}]`);
    if (existing) {
      if (existing.dataset.loaded==='true' || existing.readyState==='complete') return Promise.resolve();
      return new Promise((resolve,reject) => {
        existing.addEventListener('load',resolve,{ once:true });
        existing.addEventListener('error',reject,{ once:true });
      });
    }
    return new Promise((resolve,reject) => {
      const script=document.createElement('script');
      script.src=src;
      script.async=false;
      script.setAttribute(marker,'true');
      script.addEventListener('load',() => { script.dataset.loaded='true';resolve(); },{ once:true });
      script.addEventListener('error',reject,{ once:true });
      document.head.appendChild(script);
    });
  }
  function loadOrdered(entries) {
    return entries.reduce((chain,entry) => chain.then(() => loadScript(entry)),Promise.resolve());
  }

  if (newPlanRequest) {
    try {
      global.sessionStorage?.setItem(ROUTINE_VIEW_KEY,'plan');
      global.sessionStorage?.setItem(PLAN_VIEW_KEY,'calisthenics');
    } catch (_error) {}
  }
  if (openRoutine) {
    selectRoutinePage();
    document.addEventListener('click',(event) => {
      if (event.target?.closest?.('.tab[data-target="my-plan"]')) global.requestAnimationFrame(selectRoutinePage);
    },true);
    global.addEventListener('pageshow',selectRoutinePage);
  }

  loadOrdered([
    { src:'/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js?v=BASELINE_FITNESS_ACTIVITY_CATALOGUE_20260805_3',marker:'data-fitness-activity-catalogue-v2' },
    { src:'/systems/baseline-fitness/js/fitness-exercise-family-filter.js?v=BASELINE_FITNESS_EXERCISE_FAMILY_FILTER_20260808_2',marker:'data-fitness-exercise-family-filter' },
    { src:'/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260808_6',marker:'data-baseline-routine-system' },
    { src:'/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260806_2',marker:'data-fitness-routine-workspace-v2' },
    { src:'/systems/baseline-fitness/js/fitness-routine-log-v1.js?v=BASELINE_FITNESS_ROUTINE_LOG_20260809_1',marker:'data-fitness-routine-log-v1' },
    { src:'/systems/baseline-fitness/js/fitness-routine-groups-v2.js?v=BASELINE_FITNESS_ROUTINE_GROUPS_20260808_3',marker:'data-fitness-routine-groups-v2' },
    { src:'/systems/baseline-fitness/js/fitness-generator-progression-v1.js?v=BASELINE_FITNESS_GENERATOR_PROGRESSION_20260809_6',marker:'data-fitness-generator-progression-v5' },
    { src:'/systems/baseline-fitness/js/fitness-live-policy-v1.js?v=BASELINE_FITNESS_LIVE_POLICY_20260809_5',marker:'data-fitness-live-policy-v3' },
    { src:'/systems/baseline-fitness/js/fitness-routine-structure-v4.js?v=BASELINE_FITNESS_ROUTINE_STRUCTURE_20260808_2',marker:'data-fitness-routine-structure-v4' },
    { src:'/systems/baseline-fitness/js/fitness-routine-summary-v1.js?v=BASELINE_FITNESS_ROUTINE_SUMMARY_20260809_1',marker:'data-fitness-routine-summary-v1' },
    { src:'/sitewide/js/baseline-public-routine-viewonly-v4.js?v=BASELINE_PUBLIC_ROUTINE_VIEWONLY_20260809_2',marker:'data-baseline-public-routine-viewonly-v4' },
    { src:'/sitewide/js/baseline-routine-coherence-v12.js?v=BASELINE_ROUTINE_COHERENCE_20260809_9',marker:'data-baseline-routine-coherence-v12' }
  ])
    .then(() => { selectRoutinePage();restoreRequestedView(); })
    .catch((error) => { try { console.error('Fitness My Routine dependency load failed.',error); } catch (_error) {} });
})(typeof window!=='undefined'?window:globalThis);

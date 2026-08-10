/* Baseline Fitness — canonical My Routine dependency loader v39.

   OWNERSHIP / BOOT ORDER
   ----------------------
   Route is resolved synchronously before any My Routine renderer starts.
   catalogue/family filter -> shared Routine system -> base workspace ->
   structure/router -> Summary owner -> Log owner -> groups -> generator ->
   live policy -> Public View Only -> shared v12.

   This prevents the old Log/Plan-first paint followed by a later replacement.
   The structure adapter owns canonical clean paths after boot.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_LOADER_V39__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V39__=true;

  const document=global.document;
  const ROUTINE_VIEW_KEY='__bl_fitness_routine_view_v2__';
  const PLAN_VIEW_KEY='__bl_fitness_plan_view_v4__';
  const ROUTE_BASE='/baseline-fitness/my-routine';
  const TOP_VIEWS=['log','summary','plan','public'];
  const PLAN_VIEWS=['calisthenics','cardio','other','sports'];

  function routePath() {
    try {
      const entry=global.performance?.getEntriesByType?.('navigation')?.[0];
      return entry?.name?new URL(entry.name,global.location.href).pathname:String(global.location?.pathname || '');
    } catch (_error) { return String(global.location?.pathname || ''); }
  }
  function requestedRoute() {
    const path=routePath().replace(/\/+$/,'');
    let match=path.match(/^\/baseline-fitness\/my-routine\/(log|summary|public)$/i);
    if (match) return { view:String(match[1]).toLowerCase(),plan:'calisthenics',path };
    match=path.match(/^\/baseline-fitness\/my-routine\/plan(?:\/(calisthenics|cardio|other|sports))?$/i);
    if (match) return { view:'plan',plan:String(match[1] || 'calisthenics').toLowerCase(),path };
    if (/^\/baseline-fitness\/(?:my-plan|workout-routine)$/i.test(path)) return { view:'plan',plan:'calisthenics',path };
    if (/^\/baseline-fitness\/my-routine$/i.test(path)) {
      try {
        const url=new URL(global.location.href);
        const legacyView=String(url.searchParams.get('routine-view') || '');
        const legacyPlan=String(url.searchParams.get('routine-plan') || '');
        if (TOP_VIEWS.includes(legacyView)) return { view:legacyView,plan:PLAN_VIEWS.includes(legacyPlan)?legacyPlan:'calisthenics',path };
      } catch (_error) {}
      return { view:'log',plan:'calisthenics',path };
    }
    return null;
  }
  let newPlanRequest=false;
  try { newPlanRequest=new URL(global.location.href).searchParams.has('new-plan'); } catch (_error) {}
  const requested=newPlanRequest?{ view:'plan',plan:'calisthenics',path:routePath() }:requestedRoute();
  const openRoutine=Boolean(requested) || document.documentElement.getAttribute('data-initial-fitness-tab')==='my-plan';

  function cleanPath(route=requested || { view:'log',plan:'calisthenics' }) {
    if (route.view==='plan') return `${ROUTE_BASE}/plan/${PLAN_VIEWS.includes(route.plan)?route.plan:'calisthenics'}`;
    return `${ROUTE_BASE}/${TOP_VIEWS.includes(route.view)?route.view:'log'}`;
  }
  function seedBaseWorkspaceView() {
    if (!requested) return;
    try {
      /* The base workspace knows Log and Plan activity panels but not Public.
         For Summary/Public, seed "summary" so it synchronously hides its Log
         panel instead of painting a wrong page while structure is loading. */
      const baseView=requested.view==='plan'?requested.plan:(requested.view==='public'?'summary':requested.view);
      global.sessionStorage?.setItem(ROUTINE_VIEW_KEY,baseView);
      global.sessionStorage?.setItem(PLAN_VIEW_KEY,requested.plan || 'calisthenics');
    } catch (_error) {}
  }
  function selectRoutinePage() {
    if (!openRoutine) return;
    document.documentElement.setAttribute('data-initial-fitness-tab','my-plan');
    document.documentElement.setAttribute('data-initial-routine-view',requested?.view || 'log');
    if (requested?.view==='plan') document.documentElement.setAttribute('data-initial-routine-plan',requested.plan || 'calisthenics');
    try { global.BASELINE_selectTab?.('my-plan',{ silentHistory:true }); } catch (_error) {}
    document.querySelectorAll('.tab[data-target]').forEach((button)=>{
      const selected=button.dataset.target==='my-plan';
      button.classList.toggle('active',selected);
      button.setAttribute('aria-selected',selected?'true':'false');
    });
    document.querySelectorAll('main.wrap>.section').forEach((section)=>section.classList.toggle('active',section.id==='my-plan'));
    const section=document.getElementById('my-plan');
    if (section) section.hidden=false;
    try {
      const url=new URL(global.location.href);
      const desired=cleanPath();
      const hasLegacy=url.searchParams.has('routine-view') || url.searchParams.has('routine-plan') || url.searchParams.has('routine-filter') || url.searchParams.has('routine-date') || url.searchParams.has('new-plan');
      if (url.pathname!==desired || hasLegacy || url.hash) {
        url.pathname=desired;
        ['routine-view','routine-plan','routine-filter','routine-date','new-plan'].forEach((key)=>url.searchParams.delete(key));
        url.hash='';
        global.history.replaceState(global.history.state,'',url.pathname+url.search);
      }
    } catch (_error) {}
  }
  function loadScript({ src,marker }) {
    const existing=document.querySelector(`script[${marker}]`);
    if (existing) {
      if (existing.dataset.loaded==='true' || existing.readyState==='complete') return Promise.resolve();
      return new Promise((resolve,reject)=>{
        existing.addEventListener('load',resolve,{ once:true });
        existing.addEventListener('error',reject,{ once:true });
      });
    }
    return new Promise((resolve,reject)=>{
      const script=document.createElement('script');script.src=src;script.async=false;script.setAttribute(marker,'true');
      script.addEventListener('load',()=>{ script.dataset.loaded='true';resolve(); },{ once:true });
      script.addEventListener('error',reject,{ once:true });document.head.appendChild(script);
    });
  }
  function loadOrdered(entries) {
    return entries.reduce((chain,entry)=>chain.then(()=>loadScript(entry)),Promise.resolve());
  }

  seedBaseWorkspaceView();
  if (openRoutine) {
    selectRoutinePage();
    document.addEventListener('click',(event)=>{
      if (event.target?.closest?.('.tab[data-target="my-plan"]')) global.requestAnimationFrame(selectRoutinePage);
    },true);
    global.addEventListener('pageshow',selectRoutinePage);
  }

  loadOrdered([
    { src:'/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js?v=BASELINE_FITNESS_ACTIVITY_CATALOGUE_20260805_3',marker:'data-fitness-activity-catalogue-v2' },
    { src:'/systems/baseline-fitness/js/fitness-exercise-family-filter.js?v=BASELINE_FITNESS_EXERCISE_FAMILY_FILTER_20260808_2',marker:'data-fitness-exercise-family-filter' },
    { src:'/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260808_6',marker:'data-baseline-routine-system' },
    { src:'/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260810_1',marker:'data-fitness-routine-workspace-v2' },
    { src:'/systems/baseline-fitness/js/fitness-routine-structure-v4.js?v=BASELINE_FITNESS_ROUTINE_STRUCTURE_20260810_1',marker:'data-fitness-routine-structure-v6' },
    { src:'/systems/baseline-fitness/js/fitness-routine-summary-v2.js?v=BASELINE_FITNESS_ROUTINE_SUMMARY_20260810_1',marker:'data-fitness-routine-summary-v2' },
    { src:'/systems/baseline-fitness/js/fitness-routine-log-v1.js?v=BASELINE_FITNESS_ROUTINE_LOG_20260809_1',marker:'data-fitness-routine-log-v1' },
    { src:'/systems/baseline-fitness/js/fitness-routine-groups-v2.js?v=BASELINE_FITNESS_ROUTINE_GROUPS_20260808_3',marker:'data-fitness-routine-groups-v2' },
    { src:'/systems/baseline-fitness/js/fitness-generator-progression-v1.js?v=BASELINE_FITNESS_GENERATOR_PROGRESSION_20260809_6',marker:'data-fitness-generator-progression-v5' },
    { src:'/systems/baseline-fitness/js/fitness-live-policy-v1.js?v=BASELINE_FITNESS_LIVE_POLICY_20260809_5',marker:'data-fitness-live-policy-v3' },
    { src:'/sitewide/js/baseline-public-routine-viewonly-v4.js?v=BASELINE_PUBLIC_ROUTINE_VIEWONLY_20260809_2',marker:'data-baseline-public-routine-viewonly-v4' },
    { src:'/sitewide/js/baseline-routine-coherence-v12.js?v=BASELINE_ROUTINE_COHERENCE_20260810_1',marker:'data-baseline-routine-coherence-v12' }
  ])
    .then(selectRoutinePage)
    .catch((error)=>{ try { console.error('Fitness My Routine dependency load failed.',error); } catch (_error) {} });
})(typeof window!=='undefined'?window:globalThis);

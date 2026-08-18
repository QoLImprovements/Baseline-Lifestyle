/* Baseline Fitness — canonical My Routine dependency loader v50.

   OWNERSHIP / BOOT ORDER
   ----------------------
   Route is resolved synchronously before any My Routine renderer starts.
   catalogue/family filter -> shared Routine system -> base workspace ->
   structure/router -> Summary owner -> Log owner -> groups -> disclosure-state
   authority -> generator -> plan deletion continuity -> plan selection
   continuity -> live policy -> Public View Only -> shared v12.

   Routine Plan is ONE page. Routine Groups appears once at the top as a
   collapsible, group-first card: select a Routine Group, then manage that
   group's Routine Activities through repeatable dropdowns and Add Another
   Activity. Calisthenics, Cardio, Other Fitness Activity and Sports follow as
   collapsible cards.

   DISCLOSURE RESET CONTRACT
   -------------------------
   Routine Groups + all four category cards begin COLLAPSED whenever Routine
   Plan is entered, freshly loaded, refreshed or restored from browser history.
   Disclosure state is never restored from the remembered category/plan. The
   selected Calisthenics plan may persist, but it must not force its card open.
   Legacy /plan/<category> URLs remain readable only for compatibility and are
   canonicalised to /plan without overriding the collapsed-entry rule.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_LOADER_V50__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V50__=true;

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
  function rememberedPlan() {
    try {
      const savedPlan=String(global.sessionStorage?.getItem(PLAN_VIEW_KEY) || '');
      return PLAN_VIEWS.includes(savedPlan)?savedPlan:'calisthenics';
    } catch (_error) { return 'calisthenics'; }
  }
  function rememberedRoute(path) {
    try {
      const savedView=String(global.sessionStorage?.getItem(ROUTINE_VIEW_KEY) || '');
      const savedPlan=rememberedPlan();
      if (TOP_VIEWS.includes(savedView)) return { view:savedView,plan:savedPlan,path };
      if (PLAN_VIEWS.includes(savedView)) return { view:'plan',plan:savedView,path };
    } catch (_error) {}
    return { view:'log',plan:'calisthenics',path };
  }
  function requestedRoute() {
    const path=routePath().replace(/\/+$/,'');
    let match=path.match(/^\/baseline-fitness\/my-routine\/(log|summary|public)$/i);
    if (match) return { view:String(match[1]).toLowerCase(),plan:rememberedPlan(),path };
    match=path.match(/^\/baseline-fitness\/my-routine\/plan(?:\/(calisthenics|cardio|other|sports))?$/i);
    if (match) return { view:'plan',plan:PLAN_VIEWS.includes(String(match[1] || '').toLowerCase())?String(match[1]).toLowerCase():rememberedPlan(),path };
    if (/^\/baseline-fitness\/(?:my-plan|workout-routine)$/i.test(path)) return { view:'plan',plan:rememberedPlan(),path };
    if (/^\/baseline-fitness\/my-routine$/i.test(path)) {
      try {
        const url=new URL(global.location.href);
        const legacyView=String(url.searchParams.get('routine-view') || '');
        const legacyPlan=String(url.searchParams.get('routine-plan') || '');
        if (TOP_VIEWS.includes(legacyView)) return { view:legacyView,plan:PLAN_VIEWS.includes(legacyPlan)?legacyPlan:rememberedPlan(),path };
      } catch (_error) {}
      return rememberedRoute(path);
    }
    return null;
  }
  let newPlanRequest=false;
  try { newPlanRequest=new URL(global.location.href).searchParams.has('new-plan'); } catch (_error) {}
  const requested=newPlanRequest?{ view:'plan',plan:'calisthenics',path:routePath() }:requestedRoute();
  const openRoutine=Boolean(requested) || document.documentElement.getAttribute('data-initial-fitness-tab')==='my-plan';

  function cleanPath(route=requested || { view:'log',plan:'calisthenics' }) {
    if (route.view==='plan') return `${ROUTE_BASE}/plan`;
    return `${ROUTE_BASE}/${TOP_VIEWS.includes(route.view)?route.view:'log'}`;
  }
  function seedBaseWorkspaceView() {
    if (!requested) return;
    document.documentElement.setAttribute('data-initial-routine-view',requested.view || 'log');
    if (requested.view==='plan') document.documentElement.setAttribute('data-initial-routine-plan',requested.plan || 'calisthenics');
    try { global.sessionStorage?.setItem(PLAN_VIEW_KEY,requested.plan || 'calisthenics'); } catch (_error) {}
  }
  function selectRoutinePage() {
    if (!openRoutine) return;
    const route=requestedRoute() || requested || { view:'log',plan:'calisthenics' };
    document.documentElement.setAttribute('data-initial-fitness-tab','my-plan');
    document.documentElement.setAttribute('data-initial-routine-view',route.view || 'log');
    if (route.view==='plan') document.documentElement.setAttribute('data-initial-routine-plan',route.plan || 'calisthenics');
    else document.documentElement.removeAttribute('data-initial-routine-plan');
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
      const desired=cleanPath(route);
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
    { src:'/systems/baseline-fitness/js/fitness-routine-structure-v4.js?v=BASELINE_FITNESS_ROUTINE_STRUCTURE_20260818_2',marker:'data-fitness-routine-structure-v6' },
    { src:'/systems/baseline-fitness/js/fitness-routine-summary-v2.js?v=BASELINE_FITNESS_ROUTINE_SUMMARY_20260810_2',marker:'data-fitness-routine-summary-v3' },
    { src:'/systems/baseline-fitness/js/fitness-routine-log-v1.js?v=BASELINE_FITNESS_ROUTINE_LOG_20260809_1',marker:'data-fitness-routine-log-v1' },
    { src:'/systems/baseline-fitness/js/fitness-routine-groups-v2.js?v=BASELINE_FITNESS_ROUTINE_GROUPS_20260818_4',marker:'data-fitness-routine-groups-v2' },
    { src:'/systems/baseline-fitness/js/fitness-routine-plan-collapse-v1.js?v=BASELINE_FITNESS_ROUTINE_PLAN_COLLAPSE_20260818_3',marker:'data-fitness-routine-plan-collapse-v1' },
    { src:'/systems/baseline-fitness/js/fitness-generator-progression-v1.js?v=BASELINE_FITNESS_GENERATOR_PROGRESSION_20260809_6',marker:'data-fitness-generator-progression-v5' },
    { src:'/systems/baseline-fitness/js/fitness-plan-delete-continuity-v1.js?v=BASELINE_FITNESS_PLAN_DELETE_CONTINUITY_20260818_2',marker:'data-fitness-plan-delete-continuity-v1' },
    { src:'/systems/baseline-fitness/js/fitness-plan-selection-continuity-v1.js?v=BASELINE_FITNESS_PLAN_SELECTION_CONTINUITY_20260818_3',marker:'data-fitness-plan-selection-continuity-v1' },
    { src:'/systems/baseline-fitness/js/fitness-live-policy-v1.js?v=BASELINE_FITNESS_LIVE_POLICY_20260809_5',marker:'data-fitness-live-policy-v3' },
    { src:'/sitewide/js/baseline-public-routine-viewonly-v4.js?v=BASELINE_PUBLIC_ROUTINE_VIEWONLY_20260809_2',marker:'data-baseline-public-routine-viewonly-v4' },
    { src:'/sitewide/js/baseline-routine-coherence-v12.js?v=BASELINE_ROUTINE_COHERENCE_20260810_2',marker:'data-baseline-routine-coherence-v12' }
  ])
    .then(selectRoutinePage)
    .catch((error)=>{ try { console.error('Fitness My Routine dependency load failed.',error); } catch (_error) {} });
})(typeof window!=='undefined'?window:globalThis);
/* Baseline Fitness — synchronous My Routine route owner.

   All My Routine dependencies are parser-authored in baseline-fitness.html.
   This file owns clean-route selection only. It does not load scripts, restore
   browser snapshots, or correct an already-painted interface later. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_ROUTE_OWNER__) return;
  global.__BASELINE_FITNESS_ROUTINE_ROUTE_OWNER__=true;

  const document=global.document;
  const ROUTE_BASE='/baseline-fitness/my-routine';
  const TOP_VIEWS=['log','summary','plan','public'];
  const PLAN_VIEWS=['calisthenics','cardio','other','sports'];

  function routePath() {
    return String(global.location?.pathname || '').replace(/\/+$/,'');
  }
  function requestedRoute() {
    const path=routePath();
    let match=path.match(/^\/baseline-fitness\/my-routine\/(log|summary|public)$/i);
    if(match) return { view:String(match[1]).toLowerCase(),plan:'calisthenics',path };
    match=path.match(/^\/baseline-fitness\/my-routine\/plan(?:\/(calisthenics|cardio|other|sports))?$/i);
    if(match) return { view:'plan',plan:PLAN_VIEWS.includes(String(match[1] || '').toLowerCase())?String(match[1]).toLowerCase():'calisthenics',path };
    if(/^\/baseline-fitness\/(?:my-plan|workout-routine)$/i.test(path)) return { view:'plan',plan:'calisthenics',path };
    if(/^\/baseline-fitness\/my-routine$/i.test(path)) return { view:'log',plan:'calisthenics',path };
    return null;
  }
  function cleanPath(route) {
    if(route?.view==='plan') return `${ROUTE_BASE}/plan`;
    return `${ROUTE_BASE}/${TOP_VIEWS.includes(route?.view)?route.view:'log'}`;
  }
  function selectRoutinePage(route=requestedRoute()) {
    if(!route && document.documentElement.getAttribute('data-initial-fitness-tab')!=='my-plan') return;
    const next=route || { view:'log',plan:'calisthenics' };
    document.documentElement.setAttribute('data-initial-fitness-tab','my-plan');
    document.documentElement.setAttribute('data-initial-routine-view',next.view || 'log');
    if(next.view==='plan') document.documentElement.setAttribute('data-initial-routine-plan',next.plan || 'calisthenics');
    else document.documentElement.removeAttribute('data-initial-routine-plan');

    try { global.BASELINE_selectTab?.('my-plan',{ silentHistory:true }); } catch (_error) {}
    document.querySelectorAll('.tab[data-target]').forEach((button)=>{
      const selected=button.dataset.target==='my-plan';
      button.classList.toggle('active',selected);
      button.setAttribute('aria-selected',selected?'true':'false');
    });
    document.querySelectorAll('main.wrap>.section').forEach((section)=>section.classList.toggle('active',section.id==='my-plan'));
    const section=document.getElementById('my-plan');
    if(section) section.hidden=false;

    try{
      const url=new URL(global.location.href);
      const desired=cleanPath(next);
      const hasLegacy=['routine-view','routine-plan','routine-filter','routine-date','new-plan'].some((key)=>url.searchParams.has(key));
      if(url.pathname!==desired || hasLegacy || url.hash){
        url.pathname=desired;
        ['routine-view','routine-plan','routine-filter','routine-date','new-plan'].forEach((key)=>url.searchParams.delete(key));
        url.hash='';
        global.history.replaceState(global.history.state,'',url.pathname+url.search);
      }
    }catch(_error){}
  }

  let initial=requestedRoute();
  try{
    if(new URL(global.location.href).searchParams.has('new-plan')) initial={ view:'plan',plan:'calisthenics',path:routePath() };
  }catch(_error){}
  if(!initial && document.documentElement.getAttribute('data-initial-fitness-tab')==='my-plan'){
    const view=String(document.documentElement.getAttribute('data-initial-routine-view') || 'log');
    const plan=String(document.documentElement.getAttribute('data-initial-routine-plan') || 'calisthenics');
    initial={ view:TOP_VIEWS.includes(view)?view:'log',plan:PLAN_VIEWS.includes(plan)?plan:'calisthenics',path:routePath() };
  }
  if(initial) selectRoutinePage(initial);

  document.addEventListener('click',(event)=>{
    if(event.target?.closest?.('.tab[data-target="my-plan"]')){
      const route=requestedRoute() || { view:'log',plan:'calisthenics' };
      selectRoutinePage(route);
    }
  },true);
  global.addEventListener('popstate',()=>selectRoutinePage(requestedRoute()));
})(typeof window!=='undefined'?window:globalThis);

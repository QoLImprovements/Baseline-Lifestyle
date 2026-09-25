/* Baseline Natural Skincare — isolated recipe UX bootstrap 2026-09-06.
   This loader is intentionally separate from the My Routine bootstrap and does
   not start recipe-only modules until the parser-loaded My Routine stack is ready. */
(function(global){
  'use strict';
  if(!global.document || global.__BASELINE_SKINCARE_RECIPE_BOOTSTRAP_20260906__) return;
  if(global.document.documentElement.getAttribute('data-app')!=='skin') return;
  global.__BASELINE_SKINCARE_RECIPE_BOOTSTRAP_20260906__=true;

  var document=global.document;
  var modules=[
    '/systems/baseline-natural-skincare/js/skincare-recipe-navigation-20260906.js?v=RECIPE_NAV_20260920_5',
    '/systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js?v=RECIPE_UX_20260906_4',
    '/systems/baseline-natural-skincare/js/skincare-slider-cleanup-20260906.js?v=SLIDER_CLEANUP_20260906_7',
    '/systems/baseline-natural-skincare/js/skincare-recipe-entry-guard-20260906.js?v=RECIPE_ENTRY_20260906_4',
    '/systems/baseline-natural-skincare/js/skincare-recipe-finalise-20260906.js?v=RECIPE_FINALISE_20260906_4'
  ];
  var index=0;

  function next(){
    if(index>=modules.length) return;
    var src=modules[index++];
    var existing=Array.prototype.find.call(document.scripts,function(script){
      return String(script.src||'').split('?')[0]===src.split('?')[0];
    });
    if(existing){
      next();
      return;
    }
    var script=document.createElement('script');
    script.src=src;
    script.async=false;
    script.onload=next;
    script.onerror=next;
    (document.head||document.documentElement).appendChild(script);
  }

  function startAfterRoutine(){
    if(!global.__BASELINE_SKINCARE_ROUTINE_SITEWIDE_V5__ || !global.BASELINE_RoutineSystem) return;
    next();
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',startAfterRoutine,{once:true});
  }else{
    startAfterRoutine();
  }
})(typeof window!=='undefined'?window:globalThis);

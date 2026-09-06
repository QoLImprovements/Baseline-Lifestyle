/* Baseline Natural Skincare — routine module loader + recipe UX wiring 2026-09-06. */
(function(global){
  'use strict';
  if(!global.document) return;
  var document=global.document;
  var scripts=[
    '/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5-core-20260906.js?v=SKINCARE_SITEWIDE_ROUTINE_20260809_5',
    '/systems/baseline-natural-skincare/js/skincare-recipe-navigation-20260906.js?v=RECIPE_NAV_20260906_2',
    '/systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js?v=RECIPE_UX_20260906_2',
    '/systems/baseline-natural-skincare/js/skincare-slider-cleanup-20260906.js?v=SLIDER_CLEANUP_20260906_2',
    '/systems/baseline-natural-skincare/js/skincare-recipe-entry-guard-20260906.js?v=RECIPE_ENTRY_20260906_2',
    '/systems/baseline-natural-skincare/js/skincare-recipe-finalise-20260906.js?v=RECIPE_FINALISE_20260906_1'
  ];
  if(document.readyState==='loading' && document.currentScript){
    document.write(scripts.map(function(src){return '<script src="'+src+'"></'+'script>';}).join(''));
    return;
  }
  var index=0;
  function next(){
    if(index>=scripts.length) return;
    var script=document.createElement('script');
    script.src=scripts[index++];
    script.onload=next;
    script.onerror=next;
    (document.head || document.documentElement).appendChild(script);
  }
  next();
})(typeof window!=='undefined'?window:globalThis);

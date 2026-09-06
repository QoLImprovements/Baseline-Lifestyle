/* Baseline Natural Skincare — recipe UX bootstrap only.

   This file intentionally does not own My Routine, Routine Groups, Routine Log,
   Routine Summary or the Skincare Calendar. Those remain owned by
   skincare-routine-sitewide-v5.js and the existing shared routine infrastructure.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_RECIPE_UX_BOOTSTRAP_20260906__) return;
  global.__BASELINE_SKINCARE_RECIPE_UX_BOOTSTRAP_20260906__ = true;

  var document = global.document;
  var scripts = [
    '/systems/baseline-natural-skincare/js/skincare-recipe-navigation-20260906.js?v=RECIPE_NAV_20260906_2',
    '/systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js?v=RECIPE_UX_20260906_2',
    '/systems/baseline-natural-skincare/js/skincare-slider-cleanup-20260906.js?v=SLIDER_CLEANUP_20260906_2',
    '/systems/baseline-natural-skincare/js/skincare-recipe-entry-guard-20260906.js?v=RECIPE_ENTRY_20260906_2',
    '/systems/baseline-natural-skincare/js/skincare-recipe-finalise-20260906.js?v=RECIPE_FINALISE_20260906_1'
  ];

  var index = 0;
  function next() {
    if (index >= scripts.length) return;
    var script = document.createElement('script');
    script.src = scripts[index++];
    script.onload = next;
    script.onerror = next;
    (document.head || document.documentElement).appendChild(script);
  }
  next();
})(typeof window !== 'undefined' ? window : globalThis);

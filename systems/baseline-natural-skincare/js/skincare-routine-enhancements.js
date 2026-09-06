/* Baseline Natural Skincare — recipe UX bootstrap compatibility boundary.

   This file does not own or patch My Routine. The parser-loaded routine stack
   is allowed to initialise completely before any recipe-only enhancement code
   is requested. This prevents recipe bootstrapping from racing the canonical
   My Routine subtab/group/calendar owners.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_RECIPE_UX_BOOTSTRAP_20260906__) return;
  global.__BASELINE_SKINCARE_RECIPE_UX_BOOTSTRAP_20260906__ = true;

  var document = global.document;
  var scripts = [
    '/systems/baseline-natural-skincare/js/skincare-recipe-navigation-20260906.js?v=RECIPE_NAV_20260906_3',
    '/systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js?v=RECIPE_UX_20260906_3',
    '/systems/baseline-natural-skincare/js/skincare-slider-cleanup-20260906.js?v=SLIDER_CLEANUP_20260906_3',
    '/systems/baseline-natural-skincare/js/skincare-recipe-entry-guard-20260906.js?v=RECIPE_ENTRY_20260906_3',
    '/systems/baseline-natural-skincare/js/skincare-recipe-finalise-20260906.js?v=RECIPE_FINALISE_20260906_2'
  ];

  var index = 0;
  var routineReadyChecks = 0;
  var MAX_ROUTINE_READY_CHECKS = 80;

  function next() {
    if (index >= scripts.length) return;
    var script = document.createElement('script');
    script.src = scripts[index++];
    script.async = false;
    script.onload = next;
    script.onerror = next;
    (document.head || document.documentElement).appendChild(script);
  }

  function start() {
    if (global.__BASELINE_SKINCARE_ROUTINE_SITEWIDE_V5__ && global.BASELINE_RoutineSystem) {
      next();
      return;
    }
    routineReadyChecks += 1;
    if (routineReadyChecks < MAX_ROUTINE_READY_CHECKS) {
      global.setTimeout(start, 25);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once:true });
  else start();
})(typeof window !== 'undefined' ? window : globalThis);

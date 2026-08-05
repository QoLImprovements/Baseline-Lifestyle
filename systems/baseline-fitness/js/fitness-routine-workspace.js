/* Baseline Fitness — load the expanded catalogue, site-coherent routine workspace and timed-target controls. */
(function (global) {
  'use strict';
  if (global.__BASELINE_FITNESS_ROUTINE_LOADER_V3__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V3__ = true;

  function load(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  load('/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js?v=BASELINE_FITNESS_ACTIVITY_CATALOGUE_20260805_2')
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260805_2'))
    .then(() => load('/systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js?v=BASELINE_FITNESS_TIMED_TARGETS_20260805_1'))
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);

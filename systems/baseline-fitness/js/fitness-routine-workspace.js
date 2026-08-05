/* Baseline Fitness — load the expanded catalogue and shared My Routine system. */
(function (global) {
  'use strict';
  if (global.__BASELINE_FITNESS_ROUTINE_LOADER_V4__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V4__ = true;

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

  load('/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js?v=BASELINE_FITNESS_ACTIVITY_CATALOGUE_20260805_3')
    .then(() => load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260805_1'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260805_3'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-sitewide-v3.js?v=BASELINE_FITNESS_SITEWIDE_ROUTINE_20260805_1'))
    .then(() => load('/systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js?v=BASELINE_FITNESS_TIMED_TARGETS_20260805_1'))
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);

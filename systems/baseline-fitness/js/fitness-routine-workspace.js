/* Baseline Fitness — load the preserved routine workspace, then timed-target controls. */
(function (global) {
  'use strict';
  if (global.__BASELINE_FITNESS_ROUTINE_LOADER_V2__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V2__ = true;
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
  load('/systems/baseline-fitness/js/fitness-routine-workspace-core.js?v=BASELINE_FITNESS_ROUTINE_CORE_20260805_1')
    .then(() => load('/systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js?v=BASELINE_FITNESS_TIMED_TARGETS_20260805_1'))
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);

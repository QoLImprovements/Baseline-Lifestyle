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

  function openLegacyPlanRoute() {
    if (!/\/baseline-fitness\/my-plan\/?$/.test(global.location?.pathname || '')) return;

    let attempts = 0;
    const reveal = () => {
      attempts += 1;

      const mainRoutine = document.querySelector('.tab[data-target="my-plan"]');
      if (mainRoutine && mainRoutine.getAttribute('aria-selected') !== 'true') mainRoutine.click();

      const calisthenics = document.querySelector('[data-fitness-routine-view="calisthenics"]');
      if (calisthenics && calisthenics.getAttribute('aria-selected') !== 'true') calisthenics.click();

      const generator = document.querySelector('#myPlanGeneratorWrap');
      const saved = document.querySelector('#myPlanSavedWrap');
      if (generator && saved && saved.hidden) generator.hidden = false;

      const parentSection = document.querySelector('#my-plan');
      const routeReady = Boolean(parentSection?.classList.contains('active') && ((saved && !saved.hidden) || (generator && !generator.hidden)));
      if (routeReady || attempts >= 120) global.clearInterval(interval);
    };

    reveal();
    const interval = global.setInterval(reveal, 100);
  }

  load('/systems/baseline-fitness/js/fitness-routine-workspace-core.js?v=BASELINE_FITNESS_ROUTINE_CORE_20260805_1')
    .then(() => {
      openLegacyPlanRoute();
      return load('/systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js?v=BASELINE_FITNESS_TIMED_TARGETS_20260805_1');
    })
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);
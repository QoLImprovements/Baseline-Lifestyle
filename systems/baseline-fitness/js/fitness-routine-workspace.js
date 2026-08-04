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

      document.querySelectorAll('.tab[data-target]').forEach((button) => {
        button.setAttribute('aria-selected', button.dataset.target === 'my-plan' ? 'true' : 'false');
      });
      document.querySelectorAll('main.wrap > .section').forEach((section) => {
        section.classList.toggle('active', section.id === 'my-plan');
      });

      document.querySelectorAll('[data-fitness-routine-view]').forEach((button) => {
        const active = button.dataset.fitnessRoutineView === 'calisthenics';
        button.classList.toggle('active', active);
        button.setAttribute('aria-selected', active ? 'true' : 'false');
        button.tabIndex = active ? 0 : -1;
      });
      document.querySelectorAll('[data-fitness-routine-panel]').forEach((panel) => {
        panel.hidden = panel.dataset.fitnessRoutinePanel !== 'calisthenics';
      });

      const generator = document.querySelector('#myPlanGeneratorWrap');
      const saved = document.querySelector('#myPlanSavedWrap');
      if (generator && saved && saved.hidden) generator.hidden = false;

      const parentSection = document.querySelector('#my-plan');
      const calisthenicsPanel = document.querySelector('[data-fitness-routine-panel="calisthenics"]');
      const routeReady = Boolean(
        parentSection?.classList.contains('active') &&
        calisthenicsPanel && !calisthenicsPanel.hidden &&
        ((saved && !saved.hidden) || (generator && !generator.hidden))
      );
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
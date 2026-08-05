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

  function shouldOpenMyRoutine() {
    const pathname = String(global.location?.pathname || '');
    const initial = document.documentElement.getAttribute('data-initial-fitness-tab') || '';
    return /\/baseline-fitness\/(?:my-routine|my-plan|workout-routine)\/?$/.test(pathname) || initial === 'my-plan';
  }

  function activateMyRoutineRoute() {
    if (!shouldOpenMyRoutine()) return;
    document.documentElement.setAttribute('data-initial-fitness-tab', 'my-plan');
    document.querySelectorAll('.tab[data-target]').forEach((button) => {
      const active = button.dataset.target === 'my-plan';
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    document.querySelectorAll('main.wrap > .section').forEach((section) => {
      section.classList.toggle('active', section.id === 'my-plan');
    });
  }

  load('/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js?v=BASELINE_FITNESS_ACTIVITY_CATALOGUE_20260805_3')
    .then(() => load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260805_1'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260805_3'))
    .then(() => {
      activateMyRoutineRoute();
      return load('/systems/baseline-fitness/js/fitness-routine-sitewide-v3.js?v=BASELINE_FITNESS_SITEWIDE_ROUTINE_20260805_1');
    })
    .then(() => {
      activateMyRoutineRoute();
      global.requestAnimationFrame(activateMyRoutineRoute);
      global.setTimeout(activateMyRoutineRoute, 80);
      return load('/systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js?v=BASELINE_FITNESS_TIMED_TARGETS_20260805_1');
    })
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);

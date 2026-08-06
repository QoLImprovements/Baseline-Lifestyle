/* Baseline Fitness — deterministic canonical My Routine loader. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_LOADER_V13__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V13__ = true;

  const BUILD = 'BASELINE_FITNESS_ROUTINE_CANONICAL_20260806_1';
  const CANONICAL_PATH = '/baseline-fitness/my-routine';
  const MAIN_VIEW_KEY = '__bl_fitness_canonical_view_v1__';
  const PLAN_VIEW_KEY = '__bl_fitness_plan_view_v4__';

  function requestedPath() {
    try {
      const navigation = global.performance?.getEntriesByType?.('navigation')?.[0];
      if (navigation?.name) return new URL(navigation.name, global.location.href).pathname;
    } catch (_error) {}
    return String(global.location?.pathname || '');
  }

  const path = requestedPath();
  const openRoutine = /\/baseline-fitness\/(?:my-routine|my-plan|workout-routine)\/?$/.test(path)
    || document.documentElement.getAttribute('data-initial-fitness-tab') === 'my-plan';
  const legacyPlanRoute = /\/baseline-fitness\/(?:my-plan|workout-routine)\/?$/.test(path);

  function ensureStyle(href, marker) {
    if (document.querySelector(`link[${marker}]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${href}?v=${BUILD}`;
    link.setAttribute(marker,'true');
    document.head.appendChild(link);
  }

  function loadScript(src, marker) {
    const existing = document.querySelector(`script[${marker}]`);
    if (existing) {
      return existing.dataset.loaded === 'true'
        ? Promise.resolve()
        : new Promise((resolve,reject) => {
            existing.addEventListener('load',resolve,{ once:true });
            existing.addEventListener('error',reject,{ once:true });
          });
    }
    return new Promise((resolve,reject) => {
      const script = document.createElement('script');
      script.src = `${src}?v=${BUILD}`;
      script.async = false;
      script.setAttribute(marker,'true');
      script.addEventListener('load',() => { script.dataset.loaded = 'true'; resolve(); },{ once:true });
      script.addEventListener('error',reject,{ once:true });
      document.head.appendChild(script);
    });
  }

  function ready() {
    return document.readyState === 'loading'
      ? new Promise((resolve) => document.addEventListener('DOMContentLoaded',resolve,{ once:true }))
      : Promise.resolve();
  }

  function selectRoutinePage() {
    if (!openRoutine) return;
    document.documentElement.setAttribute('data-initial-fitness-tab','my-plan');
    try { global.BASELINE_selectTab?.('my-plan',{ silentHistory:true }); } catch (_error) {}
    document.querySelectorAll('.tab[data-target]').forEach((button) => {
      const active = button.dataset.target === 'my-plan';
      button.classList.toggle('active',active);
      button.setAttribute('aria-selected',active ? 'true' : 'false');
    });
    document.querySelectorAll('main.wrap > .section').forEach((section) => {
      section.classList.toggle('active',section.id === 'my-plan');
    });
    const section = document.getElementById('my-plan');
    if (section) section.hidden = false;
    try {
      const current = new URL(global.location.href);
      if (current.pathname !== CANONICAL_PATH) {
        current.pathname = CANONICAL_PATH;
        global.history.replaceState(global.history.state,'',current.pathname + current.search + current.hash);
      }
    } catch (_error) {}
  }

  function setInitialCanonicalView() {
    if (!legacyPlanRoute) return;
    try {
      global.sessionStorage?.setItem(MAIN_VIEW_KEY,'plan');
      global.sessionStorage?.setItem(PLAN_VIEW_KEY,'calisthenics');
    } catch (_error) {}
  }

  ensureStyle('/sitewide/css/baseline-routine-canonical-v1.css','data-baseline-routine-canonical-style');

  ready()
    .then(() => {
      setInitialCanonicalView();
      selectRoutinePage();
      return loadScript('/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js','data-fitness-activity-catalogue-v2');
    })
    .then(() => loadScript('/sitewide/js/baseline-routine-system.js','data-baseline-routine-system-script'))
    .then(() => loadScript('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js','data-fitness-routine-workspace-v2'))
    .then(() => loadScript('/systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js','data-fitness-calisthenics-schedule'))
    .then(() => loadScript('/systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js','data-fitness-timed-hold-targets'))
    .then(() => loadScript('/systems/baseline-fitness/js/fitness-routine-canonical.js','data-fitness-routine-canonical'))
    .then(() => selectRoutinePage())
    .catch((error) => {
      try { console.error('Fitness My Routine failed to load.',error); } catch (_error) {}
    });
})(typeof window !== 'undefined' ? window : globalThis);

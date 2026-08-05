/* Baseline Fitness — load the expanded catalogue and shared My Routine system. */
(function (global) {
  'use strict';
  if (global.__BASELINE_FITNESS_ROUTINE_LOADER_V4__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V4__ = true;

  function navigationPathname() {
    try {
      const entry = global.performance?.getEntriesByType?.('navigation')?.[0];
      if (entry?.name) return new URL(entry.name, global.location?.href || document.baseURI).pathname;
    } catch (_error) {}
    return '';
  }

  const requestedPath = navigationPathname() || String(global.location?.pathname || '');
  const requestedInitialTab = document.documentElement.getAttribute('data-initial-fitness-tab') || '';
  const OPEN_MY_ROUTINE = /\/baseline-fitness\/(?:my-routine|my-plan|workout-routine)\/?$/.test(requestedPath)
    || requestedInitialTab === 'my-plan';

  let routeInterval = 0;
  let routeAttempts = 0;
  let visiblePasses = 0;
  let routeUrlCorrected = false;

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

  function correctRouteUrl() {
    if (routeUrlCorrected || !OPEN_MY_ROUTINE) return;
    routeUrlCorrected = true;
    try {
      const suffix = String(global.location?.search || '') + String(global.location?.hash || '');
      global.history.replaceState(global.history.state, '', `/baseline-fitness/my-routine${suffix}`);
    } catch (_error) {}
  }

  function selectMyRoutine() {
    if (!OPEN_MY_ROUTINE) return false;
    document.documentElement.setAttribute('data-initial-fitness-tab', 'my-plan');

    if (typeof global.BASELINE_selectTab === 'function') {
      try { global.BASELINE_selectTab('my-plan', { silentHistory:true }); } catch (_error) {}
    }

    document.querySelectorAll('.tab[data-target]').forEach((button) => {
      const active = button.dataset.target === 'my-plan';
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    document.querySelectorAll('main.wrap > .section').forEach((section) => {
      section.classList.toggle('active', section.id === 'my-plan');
    });

    const section = document.getElementById('my-plan');
    if (section?.hidden) section.hidden = false;
    if (!section) return false;
    const style = global.getComputedStyle ? global.getComputedStyle(section) : null;
    const visible = section.classList.contains('active') && (!style || (style.display !== 'none' && style.visibility !== 'hidden'));
    if (visible) correctRouteUrl();
    return visible;
  }

  function stopRouteStabiliser() {
    if (routeInterval) global.clearInterval(routeInterval);
    routeInterval = 0;
  }

  function stabiliseMyRoutineRoute() {
    if (!OPEN_MY_ROUTINE) return;
    selectMyRoutine();
    if (routeInterval) return;
    routeAttempts = 0;
    visiblePasses = 0;
    routeInterval = global.setInterval(() => {
      routeAttempts += 1;
      visiblePasses = selectMyRoutine() ? visiblePasses + 1 : 0;
      if (visiblePasses >= 5 || routeAttempts >= 50) stopRouteStabiliser();
    }, 100);
  }

  if (OPEN_MY_ROUTINE) {
    selectMyRoutine();
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', stabiliseMyRoutineRoute, { once:true });
    global.addEventListener('load', stabiliseMyRoutineRoute, { once:true });
    global.addEventListener('pageshow', stabiliseMyRoutineRoute, { once:true });
    global.addEventListener('pagehide', stopRouteStabiliser, { once:true });
  }

  load('/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js?v=BASELINE_FITNESS_ACTIVITY_CATALOGUE_20260805_3')
    .then(() => load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260805_1'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260805_3'))
    .then(() => {
      stabiliseMyRoutineRoute();
      return load('/systems/baseline-fitness/js/fitness-routine-sitewide-v3.js?v=BASELINE_FITNESS_SITEWIDE_ROUTINE_20260805_1');
    })
    .then(() => {
      stabiliseMyRoutineRoute();
      return load('/systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js?v=BASELINE_FITNESS_TIMED_TARGETS_20260805_1');
    })
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);

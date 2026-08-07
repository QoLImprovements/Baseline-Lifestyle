/* Baseline Fitness — deterministic loader for the existing My Routine implementation. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_LOADER_V24__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V24__ = true;

  const ROUTINE_VIEW_KEY = '__bl_fitness_routine_view_v2__';
  const PLAN_VIEW_KEY = '__bl_fitness_plan_view_v4__';
  const CANONICAL_PATH = '/baseline-fitness/my-routine';
  let planSwitchTimer = 0;

  function installBootShield() {
    document.documentElement.setAttribute('data-fitness-routine-booting','true');
    if (document.getElementById('fitnessRoutineBootShieldStyle')) return;
    const style = document.createElement('style');
    style.id = 'fitnessRoutineBootShieldStyle';
    style.textContent = `
      html[data-fitness-routine-booting="true"] #my-plan{visibility:hidden!important}
      html[data-fitness-plan-switching="true"] [data-fitness-plan-panel="calisthenics"] .fitness-calisthenics-plan-workspace{visibility:hidden!important}
    `;
    document.head.appendChild(style);
  }

  function releaseBootShield() {
    global.requestAnimationFrame(() => global.requestAnimationFrame(() => {
      document.documentElement.removeAttribute('data-fitness-routine-booting');
    }));
  }

  function beginPlanSwitch() {
    clearTimeout(planSwitchTimer);
    document.documentElement.setAttribute('data-fitness-plan-switching','true');
    planSwitchTimer = global.setTimeout(endPlanSwitch,1400);
  }

  function endPlanSwitch() {
    clearTimeout(planSwitchTimer);
    global.requestAnimationFrame(() => global.requestAnimationFrame(() => {
      document.documentElement.removeAttribute('data-fitness-plan-switching');
    }));
  }

  function bindPlanSwitchShield() {
    if (document.documentElement.dataset.fitnessPlanSwitchShield === 'true') return;
    document.documentElement.dataset.fitnessPlanSwitchShield = 'true';
    document.addEventListener('change',(event) => {
      if (event.target?.id === 'calisthenicsPlanSelect') beginPlanSwitch();
    },true);
    document.addEventListener('baseline:fitness-plans-updated',endPlanSwitch);
    global.addEventListener('pageshow',endPlanSwitch);
  }

  function navigationPath() {
    try {
      const entry = global.performance?.getEntriesByType?.('navigation')?.[0];
      if (entry?.name) return new URL(entry.name, global.location.href).pathname;
    } catch (_error) {}
    return String(global.location?.pathname || '');
  }

  const path = navigationPath();
  const openRoutine = /\/baseline-fitness\/(?:my-routine|my-plan|workout-routine)\/?$/.test(path)
    || document.documentElement.getAttribute('data-initial-fitness-tab') === 'my-plan';
  const legacyPlanRoute = /\/baseline-fitness\/(?:my-plan|workout-routine)\/?$/.test(path);
  const newPlanRequest = (() => { try { return new URL(global.location.href).searchParams.has('new-plan'); } catch (_error) { return false; } })();

  if (openRoutine) installBootShield();
  bindPlanSwitchShield();

  function load(src, marker) {
    const existing = document.querySelector(`script[${marker}]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') return Promise.resolve();
      return new Promise((resolve, reject) => {
        existing.addEventListener('load', resolve, { once:true });
        existing.addEventListener('error', reject, { once:true });
      });
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.setAttribute(marker, 'true');
      script.addEventListener('load', () => { script.dataset.loaded = 'true'; resolve(); }, { once:true });
      script.addEventListener('error', reject, { once:true });
      document.head.appendChild(script);
    });
  }

  function selectRoutinePage() {
    if (!openRoutine) return;
    document.documentElement.setAttribute('data-initial-fitness-tab', 'my-plan');
    try { global.BASELINE_selectTab?.('my-plan', { silentHistory:true }); } catch (_error) {}
    document.querySelectorAll('.tab[data-target]').forEach((button) => {
      const active = button.dataset.target === 'my-plan';
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    document.querySelectorAll('main.wrap > .section').forEach((section) => section.classList.toggle('active', section.id === 'my-plan'));
    const section = document.getElementById('my-plan');
    if (section) section.hidden = false;
    try {
      const current = new URL(global.location.href);
      if (current.pathname !== CANONICAL_PATH) {
        current.pathname = CANONICAL_PATH;
        global.history.replaceState(global.history.state, '', current.pathname + current.search + current.hash);
      }
    } catch (_error) {}
  }

  function requestedViews() {
    let main = 'log';
    let plan = 'calisthenics';
    try {
      const rememberedMain = String(global.sessionStorage?.getItem(ROUTINE_VIEW_KEY) || '');
      const rememberedPlan = String(global.sessionStorage?.getItem(PLAN_VIEW_KEY) || '');
      if (['log','summary','public','plan','calisthenics','cardio','other','sports'].includes(rememberedMain)) main = rememberedMain;
      if (['calisthenics','cardio','other','sports'].includes(rememberedPlan)) plan = rememberedPlan;
    } catch (_error) {}
    if (['calisthenics','cardio','other','sports'].includes(main)) { plan = main; main = 'plan'; }
    if (legacyPlanRoute || newPlanRequest) { main = 'plan'; plan = 'calisthenics'; }
    return { main, plan };
  }

  function restoreRequestedView() {
    if (!openRoutine) return;
    const requested = requestedViews();
    const mainButton = document.querySelector(`[data-fitness-routine-view="${requested.main}"]`);
    if (mainButton) mainButton.click();
    if (requested.main === 'plan') {
      const planButton = document.querySelector(`[data-fitness-plan-view="${requested.plan}"]`);
      if (planButton) planButton.click();
    }
  }

  if (newPlanRequest) {
    try {
      global.sessionStorage?.setItem(ROUTINE_VIEW_KEY, 'plan');
      global.sessionStorage?.setItem(PLAN_VIEW_KEY, 'calisthenics');
    } catch (_error) {}
  }
  selectRoutinePage();

  load('/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js?v=BASELINE_FITNESS_ACTIVITY_CATALOGUE_20260805_3', 'data-fitness-activity-catalogue-v2')
    .then(() => load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260806_2', 'data-baseline-routine-system'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260806_2', 'data-fitness-routine-workspace-v2'))
    .then(() => load('/systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js?v=BASELINE_CALISTHENICS_SCHEDULE_20260805_1', 'data-fitness-calisthenics-schedule'))
    .then(() => load('/sitewide/js/baseline-fitness-plan-control-authority-v1.js?v=BASELINE_FITNESS_PLAN_CONTROL_AUTHORITY_20260806_1', 'data-baseline-fitness-plan-control-authority'))
    .then(() => load('/sitewide/js/baseline-public-routine-groups-v1.js?v=BASELINE_PUBLIC_ROUTINE_GROUPS_20260807_2', 'data-baseline-public-routine-groups'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-structure-v4.js?v=BASELINE_FITNESS_ROUTINE_STRUCTURE_20260807_1', 'data-fitness-routine-structure-v4'))
    .then(() => load('/systems/baseline-fitness/js/fitness-routine-groups-v1.js?v=BASELINE_FITNESS_ROUTINE_GROUPS_20260807_2', 'data-fitness-routine-groups-v1'))
    .then(() => load('/sitewide/js/baseline-routine-authority-v7.js?v=BASELINE_ROUTINE_AUTHORITY_20260807_2', 'data-baseline-routine-authority-v7'))
    .then(() => load('/systems/baseline-fitness/js/fitness-generator-progression-v1.js?v=BASELINE_FITNESS_GENERATOR_PROGRESSION_20260807_3', 'data-fitness-generator-progression'))
    .then(() => load('/systems/baseline-fitness/js/fitness-live-policy-v1.js?v=BASELINE_FITNESS_LIVE_POLICY_20260807_2', 'data-fitness-live-policy'))
    .then(() => load('/systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js?v=BASELINE_FITNESS_TIMED_TARGETS_20260805_1', 'data-fitness-timed-hold-targets-v2'))
    .then(() => load('/systems/baseline-fitness/js/fitness-exercise-family-filter.js?v=BASELINE_FITNESS_EXERCISE_FAMILY_FILTER_20260806_1', 'data-fitness-exercise-family-filter'))
    .then(() => {
      selectRoutinePage();
      restoreRequestedView();
      endPlanSwitch();
      releaseBootShield();
    })
    .catch((error) => {
      endPlanSwitch();
      releaseBootShield();
      try { console.error('Fitness My Routine failed to load.', error); } catch (_error) {}
    });
})(typeof window !== 'undefined' ? window : globalThis);

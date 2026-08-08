/* Baseline Fitness — deterministic My Routine loader v30.

   PERFORMANCE / OWNERSHIP CONTRACT
   --------------------------------
   - No loading screen and no hidden/placeholder My Routine page.
   - Fitness data/plan modules keep their existing ownership.
   - Public Routines render the same My Routine structure in View Only form.
   - baseline-routine-coherence-v12.js supplies shared, bounded behaviour only.
   - Dependencies start fetching together and execute in dependency order.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_LOADER_V30__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V30__ = true;
  global.__BASELINE_FITNESS_ROUTINE_LOADER_V29__ = true;
  const document = global.document;
  const ROUTINE_VIEW_KEY = '__bl_fitness_routine_view_v2__';
  const PLAN_VIEW_KEY = '__bl_fitness_plan_view_v4__';
  const CANONICAL_PATH = '/baseline-fitness/my-routine';
  let calendarObserver = null;

  function navigationPath() {
    try {
      const entry = global.performance?.getEntriesByType?.('navigation')?.[0];
      if (entry?.name) return new URL(entry.name,global.location.href).pathname;
    } catch (_error) {}
    return String(global.location?.pathname || '');
  }

  const path = navigationPath();
  const openRoutine = /\/baseline-fitness\/(?:my-routine|my-plan|workout-routine)\/?$/.test(path)
    || document.documentElement.getAttribute('data-initial-fitness-tab') === 'my-plan';
  const legacyPlanRoute = /\/baseline-fitness\/(?:my-plan|workout-routine)\/?$/.test(path);
  const newPlanRequest = (() => {
    try { return new URL(global.location.href).searchParams.has('new-plan'); }
    catch (_error) { return false; }
  })();

  function loadOrderedParallel(entries) {
    const pending = entries.map(({ src,marker }) => {
      const existing = document.querySelector(`script[${marker}]`);
      if (existing) {
        if (existing.dataset.loaded === 'true' || existing.readyState === 'complete') return Promise.resolve();
        return new Promise((resolve,reject) => {
          existing.addEventListener('load',resolve,{ once:true });
          existing.addEventListener('error',reject,{ once:true });
        });
      }
      return new Promise((resolve,reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.setAttribute(marker,'true');
        script.addEventListener('load',() => { script.dataset.loaded='true';resolve(); },{ once:true });
        script.addEventListener('error',reject,{ once:true });
        document.head.appendChild(script);
      });
    });
    return Promise.all(pending);
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
    document.querySelectorAll('main.wrap > .section').forEach((section) => section.classList.toggle('active',section.id === 'my-plan'));
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

  function bindCanonicalRoutineRoute() {
    if (!openRoutine || document.documentElement.dataset.fitnessRoutineRouteGuard === 'true') return;
    document.documentElement.dataset.fitnessRoutineRouteGuard = 'true';
    document.addEventListener('click',(event) => {
      if (event.target?.closest?.('.tab[data-target="my-plan"]')) global.setTimeout(selectRoutinePage,0);
    },true);
    global.addEventListener('pageshow',() => global.setTimeout(selectRoutinePage,0));
  }

  function requestedViews() {
    let main = 'log';
    let plan = 'calisthenics';
    try {
      const url = new URL(global.location.href);
      const queryMain = String(url.searchParams.get('routine-view') || '');
      const queryPlan = String(url.searchParams.get('routine-plan') || '');
      const rememberedMain = String(global.sessionStorage?.getItem(ROUTINE_VIEW_KEY) || '');
      const rememberedPlan = String(global.sessionStorage?.getItem(PLAN_VIEW_KEY) || '');
      if (['log','summary','public','plan'].includes(queryMain)) main = queryMain;
      else if (['log','summary','public','plan','calisthenics','cardio','other','sports'].includes(rememberedMain)) main = rememberedMain;
      if (['calisthenics','cardio','other','sports'].includes(queryPlan)) plan = queryPlan;
      else if (['calisthenics','cardio','other','sports'].includes(rememberedPlan)) plan = rememberedPlan;
    } catch (_error) {}
    if (['calisthenics','cardio','other','sports'].includes(main)) { plan=main;main='plan'; }
    if (legacyPlanRoute || newPlanRequest) { main='plan';plan='calisthenics'; }
    return { main,plan };
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

  function normaliseFitnessWeekRows() {
    const grid = document.getElementById('fitnessCalendarGrid');
    const weekdays = document.querySelector('.fitness-calendar-weekdays');
    if (!grid) return;
    const weekSelected = document.querySelector('[data-calendar-view="week"][aria-selected="true"]');
    const weekView = Boolean(weekSelected && grid.classList.contains('week-view'));
    if (!weekView) {
      grid.classList.remove('bl-routine-week-list');
      grid.querySelectorAll(':scope > .bl-routine-day-row').forEach((row) => row.classList.remove('bl-routine-day-row'));
      if (weekdays) weekdays.hidden = false;
      return;
    }
    const rows = Array.from(grid.querySelectorAll(':scope > [data-calendar-date]'));
    if (rows.length !== 7) return;
    grid.classList.add('bl-routine-week-list');
    rows.forEach((row) => row.classList.add('bl-routine-day-row'));
    if (weekdays) weekdays.hidden = true;
  }

  function bindFitnessWeekRows() {
    const grid = document.getElementById('fitnessCalendarGrid');
    if (!grid) return;
    if (!calendarObserver && typeof MutationObserver !== 'undefined') {
      calendarObserver = new MutationObserver(() => global.requestAnimationFrame(normaliseFitnessWeekRows));
      calendarObserver.observe(grid,{ childList:true });
    }
    document.addEventListener('click',(event) => {
      if (event.target?.closest?.('[data-calendar-view],[data-calendar-move],[data-calendar-today]')) global.setTimeout(normaliseFitnessWeekRows,0);
    });
    normaliseFitnessWeekRows();
  }

  if (newPlanRequest) {
    try {
      global.sessionStorage?.setItem(ROUTINE_VIEW_KEY,'plan');
      global.sessionStorage?.setItem(PLAN_VIEW_KEY,'calisthenics');
    } catch (_error) {}
  }

  selectRoutinePage();
  bindCanonicalRoutineRoute();

  loadOrderedParallel([
    { src:'/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js?v=BASELINE_FITNESS_ACTIVITY_CATALOGUE_20260805_3',marker:'data-fitness-activity-catalogue-v2' },
    { src:'/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260807_5',marker:'data-baseline-routine-system' },
    { src:'/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260806_2',marker:'data-fitness-routine-workspace-v2' },
    { src:'/systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js?v=BASELINE_CALISTHENICS_SCHEDULE_20260807_2',marker:'data-fitness-calisthenics-schedule' },
    { src:'/sitewide/js/baseline-fitness-plan-control-authority-v1.js?v=BASELINE_FITNESS_PLAN_CONTROL_AUTHORITY_20260806_1',marker:'data-baseline-fitness-plan-control-authority' },
    { src:'/systems/baseline-fitness/js/fitness-routine-structure-v4.js?v=BASELINE_FITNESS_ROUTINE_STRUCTURE_20260807_1',marker:'data-fitness-routine-structure-v4' },
    { src:'/systems/baseline-fitness/js/fitness-routine-groups-v1.js?v=BASELINE_FITNESS_ROUTINE_GROUPS_20260807_2',marker:'data-fitness-routine-groups-v1' },
    { src:'/systems/baseline-fitness/js/fitness-generator-progression-v1.js?v=BASELINE_FITNESS_GENERATOR_PROGRESSION_20260807_3',marker:'data-fitness-generator-progression' },
    { src:'/systems/baseline-fitness/js/fitness-routine-coherence-v1.js?v=BASELINE_FITNESS_ROUTINE_COHERENCE_20260808_1',marker:'data-fitness-routine-coherence-v1' },
    { src:'/systems/baseline-fitness/js/fitness-live-policy-v1.js?v=BASELINE_FITNESS_LIVE_POLICY_20260807_2',marker:'data-fitness-live-policy' },
    { src:'/systems/baseline-fitness/js/fitness-theme-guard-v1.js?v=BASELINE_FITNESS_THEME_GUARD_20260807_1',marker:'data-fitness-theme-guard-v1' },
    { src:'/systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js?v=BASELINE_FITNESS_TIMED_TARGETS_20260805_1',marker:'data-fitness-timed-hold-targets-v2' },
    { src:'/systems/baseline-fitness/js/fitness-exercise-family-filter.js?v=BASELINE_FITNESS_EXERCISE_FAMILY_FILTER_20260806_1',marker:'data-fitness-exercise-family-filter' },
    { src:'/systems/baseline-fitness/js/fitness-plan-generator-coherence-v4.js?v=BASELINE_FITNESS_PLAN_GENERATOR_COHERENCE_20260807_1',marker:'data-fitness-plan-generator-coherence-v4' },
    { src:'/sitewide/js/baseline-public-routine-viewonly-v4.js?v=BASELINE_PUBLIC_ROUTINE_VIEWONLY_20260808_1',marker:'data-baseline-public-routine-viewonly-v4' },
    { src:'/sitewide/js/baseline-routine-coherence-v12.js?v=BASELINE_ROUTINE_COHERENCE_20260808_1',marker:'data-baseline-routine-coherence-v12' }
  ])
    .then(() => {
      selectRoutinePage();
      restoreRequestedView();
      bindFitnessWeekRows();
    })
    .catch((error) => { try { console.error('Fitness My Routine failed to load.',error); } catch (_error) {} });

  global.addEventListener('pagehide',() => calendarObserver?.disconnect(),{ once:true });
})(typeof window !== 'undefined' ? window : globalThis);

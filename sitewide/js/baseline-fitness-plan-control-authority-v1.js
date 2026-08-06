/* Baseline Fitness — one capture-level owner for multi-plan create/open controls. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_PLAN_CONTROL_AUTHORITY_V1__) return;
  global.__BASELINE_FITNESS_PLAN_CONTROL_AUTHORITY_V1__ = true;
  if ((document.body?.dataset.app || document.documentElement.dataset.app) !== 'fitness') return;

  global.addEventListener('click', (event) => {
    if (!event.target?.closest?.('#createCalisthenicsPlan')) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    global.BASELINE_fitnessPlans?.createPlan?.();
  }, true);

  global.addEventListener('change', (event) => {
    if (event.target?.id !== 'calisthenicsPlanSelect' || !event.target.value) return;
    event.stopPropagation();
    event.stopImmediatePropagation();
    global.BASELINE_fitnessPlans?.openPlan?.(Number(event.target.value));
  }, true);
})(typeof window !== 'undefined' ? window : globalThis);

/* Baseline Fitness — saved Calisthenics plan selection continuity.

   ROUTING INVARIANT
   -----------------
   Choosing another saved Calisthenics plan is a selection change INSIDE
   My Routine > Routine Plan > Calisthenics. It must never activate Routine Log,
   Plan Generator, or another top-level My Routine view.

   This guard runs on window capture so it precedes the legacy document-level
   select handler in fitness-multiple-plans.js. It persists the selected plan,
   preserves the canonical Routine Plan session state, and reloads the clean
   Calisthenics route so the existing plan renderer can load the newly selected
   plan from its normal data source.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_PLAN_SELECTION_CONTINUITY_V1__) return;
  global.__BASELINE_FITNESS_PLAN_SELECTION_CONTINUITY_V1__=true;

  const document=global.document;
  const SELECTED_PREFIX='__bl_fitness_selected_plan_v1__::';
  const CREATE_PREFIX='__bl_fitness_creating_plan_v1__::';
  const PLAN_CACHE_PREFIX='__bl_fitness_plan_cache_v1__::';
  const VIEW_KEY='__bl_fitness_routine_view_v2__';
  const PLAN_VIEW_KEY='__bl_fitness_plan_view_v4__';
  const CLEAN_ROUTE='/baseline-fitness/my-routine/plan/calisthenics';

  function normaliseOwner(value) {
    return String(value || '').trim().toLocaleLowerCase('en-GB') || 'guest';
  }

  function ownerKey() {
    try {
      const snapshot=global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return normaliseOwner(snapshot.name || snapshot.user?.name);
    } catch (_error) {}
    return 'guest';
  }

  function clearPlanCaches() {
    try {
      const keys=[];
      for (let index=0;index<global.localStorage.length;index+=1) {
        const key=String(global.localStorage.key(index) || '');
        if (key.startsWith(PLAN_CACHE_PREFIX)) keys.push(key);
      }
      keys.forEach((key)=>global.localStorage.removeItem(key));
    } catch (_error) {}
  }

  function persistSelection(planId) {
    const id=Math.max(0,Number(planId) || 0);
    if (!id) return false;
    const owner=ownerKey();
    try {
      global.localStorage?.setItem(`${SELECTED_PREFIX}${owner}`,String(id));
      global.localStorage?.removeItem(`${CREATE_PREFIX}${owner}`);
      global.sessionStorage?.setItem(VIEW_KEY,'plan');
      global.sessionStorage?.setItem(PLAN_VIEW_KEY,'calisthenics');
    } catch (_error) {}
    clearPlanCaches();
    document.documentElement.setAttribute('data-initial-fitness-tab','my-plan');
    document.documentElement.setAttribute('data-initial-routine-view','plan');
    document.documentElement.setAttribute('data-initial-routine-plan','calisthenics');
    return true;
  }

  function keepPlanVisible() {
    try {
      global.BASELINE_fitnessRoutineStructure?.activateTopView?.('plan',false);
      global.BASELINE_fitnessRoutineStructure?.activatePlanView?.('calisthenics',false);
    } catch (_error) {}
  }

  function openSelectedPlan(planId) {
    if (!persistSelection(planId)) return;
    keepPlanVisible();
    const url=new URL(CLEAN_ROUTE,global.location.origin);
    /* Reloading the canonical plan route is deliberate: the existing plan data
       owner reads the newly persisted plan ID during its normal boot sequence. */
    global.location.assign(url.toString());
  }

  global.addEventListener('change',(event)=>{
    const select=event.target?.closest?.('#calisthenicsPlanSelect');
    if (!select || !select.value) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    openSelectedPlan(select.value);
  },true);

  global.BASELINE_fitnessPlanSelectionContinuity=Object.freeze({ openSelectedPlan });
})(typeof window!=='undefined'?window:globalThis);

/* Baseline Fitness — saved Calisthenics plan selection continuity.

   ROUTING INVARIANT
   -----------------
   Choosing another saved Calisthenics plan is a selection change INSIDE the
   single My Routine > Routine Plan page. It must never activate Routine Log,
   Plan Generator, or another top-level My Routine view.

   Routine Plan categories are collapsible cards, not nested pages. Selecting a
   Calisthenics plan reloads the canonical /plan page while preserving the plan
   selection. The selected Calisthenics card is revealed again after that
   selection-triggered reload so the newly selected plan is immediately visible.
   This is a one-load hand-off, not general disclosure-state persistence.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_PLAN_SELECTION_CONTINUITY_V4__) return;
  global.__BASELINE_FITNESS_PLAN_SELECTION_CONTINUITY_V4__=true;
  global.__BASELINE_FITNESS_PLAN_SELECTION_CONTINUITY_V3__=true;
  global.__BASELINE_FITNESS_PLAN_SELECTION_CONTINUITY_V2__=true;
  global.__BASELINE_FITNESS_PLAN_SELECTION_CONTINUITY_V1__=true;

  const document=global.document;
  const SELECTED_PREFIX='__bl_fitness_selected_plan_v1__::';
  const CREATE_PREFIX='__bl_fitness_creating_plan_v1__::';
  const PLAN_CACHE_PREFIX='__bl_fitness_plan_cache_v1__::';
  const VIEW_KEY='__bl_fitness_routine_view_v2__';
  const PLAN_VIEW_KEY='__bl_fitness_plan_view_v4__';
  const REVEAL_KEY='__bl_fitness_reveal_plan_card_once_v1__';
  const CLEAN_ROUTE='/baseline-fitness/my-routine/plan';

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
      global.sessionStorage?.setItem(REVEAL_KEY,'calisthenics');
    } catch (_error) {}
    clearPlanCaches();
    document.documentElement.setAttribute('data-initial-fitness-tab','my-plan');
    document.documentElement.setAttribute('data-initial-routine-view','plan');
    document.documentElement.setAttribute('data-initial-routine-plan','calisthenics');
    return true;
  }

  function keepPlanPageActive() {
    try {
      global.BASELINE_fitnessRoutineStructure?.activateTopView?.('plan',false);
    } catch (_error) {}
  }

  function openSelectedPlan(planId) {
    if (!persistSelection(planId)) return;
    keepPlanPageActive();
    const url=new URL(CLEAN_ROUTE,global.location.origin);
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

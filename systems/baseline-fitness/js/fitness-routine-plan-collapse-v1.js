/* Baseline Fitness — Routine Plan disclosure-state authority v1.

   ROUTINE PLAN COLLAPSE CONTRACT
   ------------------------------
   Routine Plan has five disclosure cards:
     1. Routine Groups
     2. Calisthenics
     3. Cardio
     4. Other Fitness Activity
     5. Sports

   ALL FIVE MUST BEGIN COLLAPSED whenever the user enters Routine Plan and on
   every page load / refresh / browser-history restoration. Disclosure state is
   presentation-only and must NEVER be restored from sessionStorage, route state,
   the last selected Calisthenics plan, or a previously-open card.

   Opening/closing a card during the current visit remains a normal native
   <details> interaction. This authority only resets disclosure state at a real
   Routine Plan entry boundary, page lifecycle restoration, or when a new card is
   inserted by a renderer. It does not alter Routine data, groups or plan choice.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_PLAN_COLLAPSE_V1__) return;
  global.__BASELINE_FITNESS_ROUTINE_PLAN_COLLAPSE_V1__=true;

  const document=global.document;
  const READY_ATTR='data-fitness-routine-plan-cards-ready';
  const PLAN_PANEL='[data-fitness-routine-panel="plan"]';
  const CARD_SELECTOR=`${PLAN_PANEL} details[data-v4-group-card="global"],${PLAN_PANEL} details[data-fitness-plan-card]`;
  let lastView='';
  let observer=null;

  function routeIsPlan() {
    try { return /^\/baseline-fitness\/my-routine\/plan(?:\/|$)/i.test(String(global.location?.pathname || '')); }
    catch (_error) { return false; }
  }

  function currentView() {
    try {
      const value=String(global.BASELINE_fitnessRoutine?.getState?.().activeView || '');
      if (value) return value;
    } catch (_error) {}
    return String(document.documentElement.getAttribute('data-initial-routine-view') || '');
  }

  function collapseCards(markReady=true) {
    document.querySelectorAll(CARD_SELECTOR).forEach((card) => { card.open=false; });
    if (markReady) document.documentElement.setAttribute(READY_ATTR,'true');
  }

  function collapseAddedCards(nodes) {
    nodes.forEach((node) => {
      if (!(node instanceof Element)) return;
      if (node.matches?.(CARD_SELECTOR)) node.open=false;
      node.querySelectorAll?.('details[data-v4-group-card="global"],details[data-fitness-plan-card]').forEach((card) => {
        if (card.closest(PLAN_PANEL)) card.open=false;
      });
    });
  }

  function observePlanPanel() {
    const panel=document.querySelector(`#my-plan ${PLAN_PANEL}`);
    if (!panel || observer || typeof MutationObserver==='undefined') return;
    observer=new MutationObserver((mutations) => {
      mutations.forEach((mutation) => collapseAddedCards(Array.from(mutation.addedNodes || [])));
    });
    observer.observe(panel,{ childList:true,subtree:true });
  }

  function bind() {
    /* Capture at document level so cards are collapsed before Routine Plan is
       revealed by the lower-level tab handler. */
    document.addEventListener('click',(event) => {
      const planTab=event.target?.closest?.('.fitness-routine-subtabs>[data-fitness-routine-view="plan"]');
      if (planTab) collapseCards(true);
    },true);

    document.addEventListener('baseline:fitness-routine-structure-ready',(event) => {
      if (String(event.detail?.view || currentView())==='plan') collapseCards(true);
      observePlanPanel();
      lastView=String(event.detail?.view || currentView());
    });

    document.addEventListener('baseline:fitness-routine-view-changed',(event) => {
      const next=String(event.detail?.view || currentView());
      if (next==='plan' && lastView!=='plan') collapseCards(true);
      lastView=next;
    });

    global.addEventListener('pageshow',() => {
      if (routeIsPlan() || currentView()==='plan') collapseCards(true);
      observePlanPanel();
    });

    /* BFCache should store the Routine Plan in its canonical collapsed state. */
    global.addEventListener('pagehide',() => {
      if (routeIsPlan() || currentView()==='plan') collapseCards(false);
      document.documentElement.removeAttribute(READY_ATTR);
      observer?.disconnect();
      observer=null;
    });
  }

  function boot() {
    lastView=currentView();
    if (routeIsPlan() || lastView==='plan') collapseCards(true);
    else document.documentElement.setAttribute(READY_ATTR,'true');
    observePlanPanel();
    bind();
  }

  global.BASELINE_fitnessRoutinePlanCollapse=Object.freeze({ collapseAll:collapseCards });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window!=='undefined'?window:globalThis);

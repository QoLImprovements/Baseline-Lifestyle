/* Baseline Fitness — Routine Plan disclosure-state authority v4.

   ROUTINE PLAN COLLAPSE CONTRACT
   ------------------------------
   Routine Plan has five disclosure cards:
     1. Routine Groups
     2. Calisthenics
     3. Cardio
     4. Other Fitness Activity
     5. Sports

   ALL FIVE begin collapsed whenever the user enters Routine Plan and on every
   normal page load / refresh / browser-history restoration. The sole exception
   is a one-load hand-off created when the user selects another saved
   Calisthenics plan: after its canonical reload, the Calisthenics card opens so
   the selected plan remains in view. Previously-open disclosure state is never
   restored.

   Opening/closing a card during the current visit remains a normal native
   <details> interaction. This authority only resets disclosure state at a real
   Routine Plan entry boundary, page lifecycle/history restoration, or when a
   new card is inserted by a renderer. It does not alter Routine data, groups or
   plan choice.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_PLAN_COLLAPSE_V4__) return;
  global.__BASELINE_FITNESS_ROUTINE_PLAN_COLLAPSE_V4__=true;
  global.__BASELINE_FITNESS_ROUTINE_PLAN_COLLAPSE_V3__=true;
  global.__BASELINE_FITNESS_ROUTINE_PLAN_COLLAPSE_V2__=true;
  global.__BASELINE_FITNESS_ROUTINE_PLAN_COLLAPSE_V1__=true;

  const document=global.document;
  const READY_ATTR='data-fitness-routine-plan-cards-ready';
  const REVEAL_KEY='__bl_fitness_reveal_plan_card_once_v1__';
  const PLAN_PANEL='[data-fitness-routine-panel="plan"]';
  const CARD='details[data-v4-group-card="global"],details[data-fitness-plan-card]';
  const CARD_SELECTOR=`${PLAN_PANEL} details[data-v4-group-card="global"],${PLAN_PANEL} details[data-fitness-plan-card]`;
  let lastView='';
  let observer=null;
  let selectionReveal='';

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
    selectionReveal='';
    document.querySelectorAll(CARD_SELECTOR).forEach((card) => { card.open=false; });
    if (markReady) document.documentElement.setAttribute(READY_ATTR,'true');
  }

  function takeSelectionReveal() {
    try {
      const value=String(global.sessionStorage?.getItem(REVEAL_KEY) || '');
      global.sessionStorage?.removeItem(REVEAL_KEY);
      return value==='calisthenics'?value:'';
    } catch (_error) { return ''; }
  }

  function revealSelectedCard() {
    if (!selectionReveal) return false;
    const card=document.querySelector(`${PLAN_PANEL} details[data-fitness-plan-card="${selectionReveal}"]`);
    if (!card) return false;
    card.open=true;
    return true;
  }

  function applyEntryState(markReady=true,allowSelectionReveal=false) {
    document.querySelectorAll(CARD_SELECTOR).forEach((card) => { card.open=false; });
    if (allowSelectionReveal) revealSelectedCard();
    if (markReady) document.documentElement.setAttribute(READY_ATTR,'true');
  }

  function collapseAddedCards(nodes) {
    nodes.forEach((node) => {
      if (!(node instanceof Element)) return;
      if (node.matches?.(CARD) && node.closest(PLAN_PANEL)) node.open=false;
      node.querySelectorAll?.(CARD).forEach((card) => {
        if (card.closest(PLAN_PANEL)) card.open=false;
      });
    });
    if (selectionReveal) revealSelectedCard();
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
      if (planTab) { selectionReveal='';collapseCards(true); }
    },true);

    document.addEventListener('baseline:fitness-routine-structure-ready',(event) => {
      if (String(event.detail?.view || currentView())==='plan') applyEntryState(true,Boolean(selectionReveal));
      observePlanPanel();
      lastView=String(event.detail?.view || currentView());
    });

    document.addEventListener('baseline:fitness-routine-view-changed',(event) => {
      const next=String(event.detail?.view || currentView());
      if (next==='plan' && lastView!=='plan') { selectionReveal='';collapseCards(true); }
      else if (next!=='plan') selectionReveal='';
      lastView=next;
    });

    /* Structure's popstate listener may restore its remembered category first.
       This listener is registered later, so it normalises the final state back
       to all-collapsed after that restoration completes. */
    global.addEventListener('popstate',() => {
      selectionReveal='';
      if (routeIsPlan()) collapseCards(true);
    });

    global.addEventListener('pageshow',(event) => {
      if (event.persisted && (routeIsPlan() || currentView()==='plan')) {
        selectionReveal='';
        collapseCards(true);
      }
      observePlanPanel();
    });

    /* BFCache should store the Routine Plan in its canonical collapsed state. */
    global.addEventListener('pagehide',() => {
      selectionReveal='';
      if (routeIsPlan() || currentView()==='plan') collapseCards(false);
      document.documentElement.removeAttribute(READY_ATTR);
      observer?.disconnect();
      observer=null;
    });
  }

  function boot() {
    lastView=currentView();
    if (routeIsPlan() || lastView==='plan') {
      selectionReveal=takeSelectionReveal();
      applyEntryState(true,Boolean(selectionReveal));
    }
    else document.documentElement.setAttribute(READY_ATTR,'true');
    observePlanPanel();
    bind();
  }

  global.BASELINE_fitnessRoutinePlanCollapse=Object.freeze({ collapseAll:collapseCards });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window!=='undefined'?window:globalThis);

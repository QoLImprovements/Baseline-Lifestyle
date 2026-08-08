/* Baseline Fitness — timed-hold specialist policy.

   OWNERSHIP CONTRACT
   ------------------
   This module owns timed-hold target adjustment, failure-history learning and
   timed UI cues. It does NOT wrap BASELINE_fitnessWorkout and does not poll for
   that API. fitness-live-policy-v1.js is the single final workout wrapper and
   calls this specialist policy explicitly.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_TIMED_POLICY_V3__) return;
  global.__BASELINE_FITNESS_TIMED_POLICY_V3__ = true;

  const document=global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app)!=='fitness') return;

  const HISTORY_PREFIX='__baseline_fitness_timed_history_v2__::';
  const MAX_HISTORY=24;
  let workoutObserver=null;
  let failureDialogInstalled=false;

  function owner() {
    try {
      const auth=global.BASELINE_auth?.get?.();
      return auth?.authed ? String(auth.name || auth.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user' : 'guest';
    } catch (_error) { return 'guest'; }
  }
  function key(exercise) {
    return `${HISTORY_PREFIX}${owner()}::${String(exercise || '').replace(/\s+(Left|Right)$/i,'').trim().toLocaleLowerCase('en-GB')}`;
  }
  function readHistory(exercise) {
    try {
      const value=JSON.parse(global.localStorage?.getItem(key(exercise)) || '[]');
      return Array.isArray(value) ? value.slice(-MAX_HISTORY) : [];
    } catch (_error) { return []; }
  }
  function writeHistory(exercise,history) {
    try { global.localStorage?.setItem(key(exercise),JSON.stringify(history.slice(-MAX_HISTORY))); } catch (_error) {}
  }
  function definition(name) {
    const target=String(name || '').replace(/\s+(Left|Right)$/i,'').trim();
    return (global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || []).find((item) => String(item?.name || '').localeCompare(target,'en-GB',{ sensitivity:'base' })===0) || null;
  }
  function isTimedStep(step) {
    if (!step || typeof step!=='object') return false;
    const def=definition(step.exercise || step.name);
    return Boolean(step.isTimed || step.unit==='seconds' || def?.unit==='seconds');
  }
  function exerciseName(step) {
    return String(step?.exercise || step?.name || '').replace(/\s+(Left|Right)$/i,'').trim();
  }
  function baseGuide(step) {
    const numeric=Number(step?.baseline || step?.target || 0);
    return Math.max(1,Math.round(Number.isFinite(numeric)&&numeric>0?numeric:1));
  }
  function timedTarget(step) {
    const exercise=exerciseName(step);
    const baseline=baseGuide(step);
    const history=readHistory(exercise);
    if (!history.length) return baseline;

    const latest=history[history.length-1] || {};
    const achieved=Math.max(1,Math.round(Number(latest.achieved || 0)));
    const previousTarget=Math.max(1,Math.round(Number(latest.target || baseline)));
    const successful=latest.failed===false && achieved>=previousTarget;
    if (successful) return previousTarget+(previousTarget>=90?2:3);

    /* A failed timed hold should learn from actual capacity without allowing one
       poor attempt to collapse the guide unrealistically. */
    const recent=history.slice(-3).map((entry) => Math.max(1,Math.round(Number(entry.achieved || 0)))).filter(Boolean);
    const average=recent.length ? Math.round(recent.reduce((sum,value) => sum+value,0)/recent.length) : achieved;
    const floor=Math.max(1,Math.round(baseline*0.55));
    return Math.max(floor,Math.min(previousTarget,average));
  }
  function relabel(step,target) {
    const copy=Object.assign({},step,{ target,isTimed:true,unit:'seconds' });
    const label=String(copy.label || copy.name || copy.exercise || 'Timed hold');
    if (/guide\s+\d+\s+seconds/i.test(label)) copy.label=label.replace(/guide\s+\d+\s+seconds/i,`guide ${target} seconds`);
    else if (/\(\d+\s*(?:sec|seconds?)\)/i.test(label)) copy.label=label.replace(/\(\d+\s*(?:sec|seconds?)\)/i,`(${target} seconds)`);
    else copy.label=`${label.replace(/\s+-\s+guide.*$/i,'')} - guide ${target} seconds`;
    return copy;
  }
  function adjustContext(context) {
    if (!context || !Array.isArray(context.steps) || !context.steps.length) return context;
    const next=Object.assign({},context);
    const steps=context.steps.map((step) => {
      if (!isTimedStep(step)) return step && typeof step==='object' ? Object.assign({},step) : step;
      return relabel(step,timedTarget(step));
    });
    next.steps=steps;
    next.step=steps[Math.max(0,Number(context.stepIndex || 0))] || null;
    next.timedHoldPolicy=true;
    return next;
  }
  function recordAttempt(context,achieved,failed=null) {
    const step=context?.step || context?.steps?.[Math.max(0,Number(context?.stepIndex || 0))];
    if (!isTimedStep(step)) return;
    const exercise=exerciseName(step);
    const target=Math.max(1,Math.round(Number(step?.target || timedTarget(step))));
    const actual=Math.max(1,Math.round(Number(achieved || 0)));
    if (!actual) return;
    const history=readHistory(exercise);
    history.push({
      target,
      achieved:actual,
      failed:failed==null ? actual<target : Boolean(failed),
      at:new Date().toISOString()
    });
    writeHistory(exercise,history);
  }

  function currentContext() {
    try { return adjustContext(global.BASELINE_fitnessWorkout?.getCurrentContext?.()); }
    catch (_error) { return null; }
  }
  function decorateCurrentWorkout() {
    const root=document.getElementById('currentWorkoutOut');
    const context=currentContext();
    if (!root || !context?.available || !isTimedStep(context.step)) return;
    const target=Math.max(1,Math.round(Number(context.step.target || 0)));
    root.querySelectorAll('[data-timed-target],.timed-target,.timer-target').forEach((node) => {
      node.textContent=`${target} seconds`;
    });
    root.dataset.timedGuide=String(target);
  }

  function installFailurePopup() {
    if (failureDialogInstalled || !global.BASELINE_failureDialog) return;
    const original=global.BASELINE_failureDialog;
    if (typeof original.open!=='function') return;
    global.BASELINE_failureDialog=Object.freeze(Object.assign({},original,{
      open(options={}) {
        const context=currentContext();
        if (!context?.step || !isTimedStep(context.step)) return original.open(options);
        const target=Math.max(1,Math.round(Number(context.step.target || 0)));
        return original.open(Object.assign({},options,{
          title:options.title || 'Timed Hold Result',
          message:options.message || `Guide target: ${target} seconds. Record the hold you actually achieved.`
        }));
      }
    }));
    failureDialogInstalled=true;
  }

  function boot() {
    global.BASELINE_FITNESS_TIMED_POLICY=Object.freeze({
      adjustContext,
      recordAttempt,
      timedTarget,
      isTimedStep
    });
    installFailurePopup();
    decorateCurrentWorkout();

    const root=document.getElementById('currentWorkoutOut');
    if (root && typeof MutationObserver!=='undefined') {
      workoutObserver=new MutationObserver(decorateCurrentWorkout);
      workoutObserver.observe(root,{ childList:true,subtree:true,characterData:true });
    }
    document.addEventListener('baseline:fitness-workout-updated',decorateCurrentWorkout);
    document.addEventListener('baseline:fitness-plans-updated',decorateCurrentWorkout);
    global.addEventListener('pageshow',() => { installFailurePopup();decorateCurrentWorkout(); });
    document.documentElement.setAttribute('data-baseline-fitness-timed-policy','v3');
  }

  global.addEventListener('pagehide',() => workoutObserver?.disconnect(),{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window!=='undefined'?window:globalThis);

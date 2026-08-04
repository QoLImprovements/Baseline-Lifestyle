/* Baseline Fitness — prescribed timed targets, countdown cues and independent failure repetition. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_TIMED_TARGETS_V2__) return;
  global.__BASELINE_FITNESS_TIMED_TARGETS_V2__ = true;

  const HISTORY_PREFIX = '__bl_fitness_timed_target_failures_v2__::';
  const PLAN_CACHE_PREFIX = '__bl_fitness_plan_cache_v1__::';
  const PLAN_PREFIX = '__bl_fitness_plan_v1__::';
  let timerInterval = 0;
  let timerAudio = null;
  let activeTimer = null;
  let frame = 0;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function ownerName() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      return snapshot?.authed ? String(snapshot.name || snapshot.user?.name || '').trim().toLocaleLowerCase('en-GB') : 'guest';
    } catch (_error) { return 'guest'; }
  }
  function parse(raw) { try { return JSON.parse(String(raw)); } catch (_error) { return null; } }
  function historyKey() { return HISTORY_PREFIX + ownerName(); }
  function readHistory() {
    const value = parse(global.localStorage?.getItem(historyKey()));
    return Array.isArray(value?.entries) ? value.entries.slice(-500) : [];
  }
  function writeHistory(entries) {
    try { global.localStorage?.setItem(historyKey(), JSON.stringify({ entries: entries.slice(-500), updatedAt:new Date().toISOString() })); }
    catch (_error) {}
  }
  function stepKey(step) {
    if (step?.exerciseKey) return String(step.exerciseKey);
    const name = String(step?.name || step?.exercise || '').trim();
    const side = name.match(/\s+(Left|Right)$/i);
    return side ? `${name.replace(/\s+(Left|Right)$/i, '')}::${side[1].toLowerCase()}` : name;
  }
  function baseExercise(step) {
    return String(step?.exercise || step?.name || '').replace(/\s+(Left|Right)$/i, '').trim();
  }
  function planForOwner() {
    const owner = ownerName();
    const cache = parse(global.localStorage?.getItem(PLAN_CACHE_PREFIX + owner));
    const saved = parse(global.localStorage?.getItem(PLAN_PREFIX + owner));
    return cache?.planJson || saved?.planJson || saved || null;
  }
  function planItem(step) {
    const name = baseExercise(step);
    return planForOwner()?.items?.find((item) => String(item?.exercise || '') === name) || null;
  }
  function holdIncrement(seconds) { return Math.max(1, Math.round(Number(seconds) || 1)) >= 90 ? 2 : 3; }
  function holdValue(baseline, session) {
    let seconds = Math.max(1, Math.round(Number(baseline) || 1));
    for (let index = 2; index <= Math.max(1, Math.round(Number(session) || 1)); index += 1) seconds += holdIncrement(seconds);
    return seconds;
  }
  function failureEntry(planId, sessionIndex, key) {
    return readHistory().find((entry) => Number(entry.planId) === Number(planId) && Number(entry.sessionIndex) === Number(sessionIndex) && entry.exerciseKey === key) || null;
  }
  function failureCountBefore(planId, sessionIndex, key) {
    return readHistory().filter((entry) => Number(entry.planId) === Number(planId) && Number(entry.sessionIndex) < Number(sessionIndex) && entry.exerciseKey === key).length;
  }
  function recordFailure(context, achieved) {
    const key = stepKey(context?.step);
    if (!context?.planId || !context?.sessionIndex || !key) return;
    const entries = readHistory().filter((entry) => !(Number(entry.planId) === Number(context.planId) && Number(entry.sessionIndex) === Number(context.sessionIndex) && entry.exerciseKey === key));
    entries.push({ planId:Number(context.planId), sessionIndex:Number(context.sessionIndex), exerciseKey:key, achieved:Math.max(0, Math.round(Number(achieved) || 0)), recordedAt:new Date().toISOString() });
    writeHistory(entries);
  }
  function clearSessionFailures(context) {
    if (!context?.planId || !context?.sessionIndex) return;
    writeHistory(readHistory().filter((entry) => !(Number(entry.planId) === Number(context.planId) && Number(entry.sessionIndex) === Number(context.sessionIndex))));
  }

  function correctContext(source) {
    if (!source || typeof source !== 'object' || !Array.isArray(source.steps)) return source;
    const context = Object.assign({}, source);
    const steps = source.steps.map((step) => step && typeof step === 'object' ? Object.assign({}, step) : step);
    const results = Object.assign({}, source.results || {});
    steps.forEach((step, index) => {
      if (!(step?.isTimed || step?.unit === 'seconds')) return;
      const key = stepKey(step);
      const failures = failureCountBefore(source.planId, source.sessionIndex, key);
      const progressionSession = Math.max(1, Number(source.sessionIndex || 1) - failures);
      const item = planItem(step);
      const target = item ? holdValue(item.baseline, progressionSession) : Math.max(1, Math.round(Number(step.target) || 1));
      step.exerciseKey = key;
      step.target = target;
      step.progressionSession = progressionSession;
      step.label = `${step.name || step.exercise} (${target} seconds)`;
      const failure = failureEntry(source.planId, source.sessionIndex, key);
      if (failure && results[index]) results[index] = Object.assign({}, results[index], { status:'failed', achieved:failure.achieved, exerciseKey:key, isTimed:true, unit:'seconds' });
    });
    context.steps = steps;
    context.results = results;
    context.step = steps[Number(context.stepIndex || 0)] || null;
    return context;
  }

  function installProgressionCorrection() {
    const previous = global.BASELINE_FITNESS_EXERCISE_PROGRESSION;
    if (!previous || previous.__timedTargetsV2) return;
    global.BASELINE_FITNESS_EXERCISE_PROGRESSION = Object.freeze(Object.assign({}, previous, {
      __timedTargetsV2:true,
      adjustContext(source) {
        const adjusted = typeof previous.adjustContext === 'function' ? previous.adjustContext(source) : source;
        return correctContext(adjusted);
      }
    }));
  }

  function installWorkoutCorrection() {
    const previous = global.BASELINE_fitnessWorkout;
    if (!previous) { global.setTimeout(installWorkoutCorrection, 60); return; }
    if (previous.__timedTargetsV2) return;
    const wrapper = {
      __timedTargetsV2:true,
      BUILD:`${previous.BUILD || 'BASELINE_FITNESS'}_TIMED_TARGETS_V2`,
      getCurrentContext(){ return correctContext(previous.getCurrentContext?.()); },
      startSession(){ return correctContext(previous.startSession?.()); },
      succeedCurrentStep(inputMode='manual'){ return correctContext(previous.succeedCurrentStep?.(inputMode)); },
      failCurrentStep(achieved, inputMode='manual'){
        const context = correctContext(previous.getCurrentContext?.());
        if (context?.step?.isTimed) recordFailure(context, achieved);
        const result = previous.failCurrentStep?.(achieved, inputMode);
        schedulePatch();
        return correctContext(result);
      },
      recordTimedCurrentStep(achieved, inputMode='manual'){
        const context = correctContext(previous.getCurrentContext?.());
        if (Number(achieved) >= Number(context?.step?.target || 0)) return this.succeedCurrentStep(inputMode);
        return this.failCurrentStep(achieved, inputMode);
      },
      async finishSession(){ return correctContext(await previous.finishSession?.()); },
      resetSession(){ const context = correctContext(previous.getCurrentContext?.()); clearSessionFailures(context); return correctContext(previous.resetSession?.()); },
      onChange(listener){ return previous.onChange?.((context) => listener(correctContext(context))); }
    };
    global.BASELINE_fitnessWorkout = Object.freeze(wrapper);
    schedulePatch();
  }

  function audioContext() {
    const Type = global.AudioContext || global.webkitAudioContext;
    if (!Type) return null;
    if (!timerAudio) timerAudio = new Type();
    if (timerAudio.state === 'suspended') timerAudio.resume().catch(() => {});
    return timerAudio;
  }
  function tone(frequency, duration=0.12, delay=0, volume=0.14) {
    global.setTimeout(() => {
      const audio = audioContext();
      if (!audio) return;
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.type = 'sine'; oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(volume, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + duration);
      oscillator.connect(gain); gain.connect(audio.destination);
      oscillator.start(); oscillator.stop(audio.currentTime + duration);
    }, Math.max(0, delay));
  }
  function milestoneBeeps(count) {
    const total = Math.max(1, Math.min(12, Math.round(Number(count) || 1)));
    for (let index=0; index<total; index+=1) tone(620, 0.11, index*180, 0.12);
  }
  function formatTime(seconds) {
    const value = Math.max(0, Math.round(Number(seconds) || 0));
    return `${String(Math.floor(value/60)).padStart(2,'0')}:${String(value%60).padStart(2,'0')}`;
  }
  function closeTimer() {
    if (timerInterval) global.clearInterval(timerInterval);
    timerInterval = 0; activeTimer = null;
    const modal = $('#timerModal'); if (modal) modal.hidden = true;
  }
  function openTimer(step) {
    const modal = $('#timerModal'); const digits = $('#timerDigits'); const message = $('#timerModalMessage');
    if (!modal || !digits || !message) return;
    closeTimer(); audioContext(); modal.hidden = false;
    const target = Math.max(1, Math.round(Number(step.target) || 1));
    let prep = 5; let remaining = target; let phase = 'prep';
    activeTimer = { key:stepKey(step), target, remaining, achieved:0 };
    const tick = () => {
      if (phase === 'prep') {
        if (prep > 0) {
          digits.textContent = formatTime(prep);
          message.textContent = `Get into position. Hold begins in ${prep} second${prep === 1 ? '' : 's'}.`;
          prep -= 1; return;
        }
        phase = 'work';
      }
      activeTimer.remaining = remaining;
      activeTimer.achieved = target - remaining;
      digits.textContent = formatTime(remaining);
      message.textContent = `${step.name} — target ${target} seconds.`;
      if (remaining === 0) {
        global.clearInterval(timerInterval); timerInterval = 0;
        activeTimer.achieved = target;
        tone(1040,0.42,0,0.18);
        message.textContent = 'Target time complete. Mark ✓ if completed, or ✕ if burnout ended the hold early.';
        return;
      }
      if (remaining <= 5) tone(920 + ((5-remaining)*55),0.16,0,0.16);
      else if (remaining % 30 === 0) milestoneBeeps(remaining/30);
      remaining -= 1;
    };
    tick(); timerInterval = global.setInterval(tick,1000);
  }

  function context() { try { return correctContext(global.BASELINE_fitnessWorkout?.getCurrentContext?.()); } catch (_error) { return null; } }
  function showTimedFailure(stepElement, step, index) {
    let entry = stepElement.querySelector('.timed-failure-entry-v2');
    if (!entry) {
      entry = document.createElement('div');
      entry.className = 'failure-entry timed-failure-entry-v2';
      const achieved = activeTimer?.key === stepKey(step) ? activeTimer.achieved : 0;
      entry.innerHTML = `<label class="note" for="timedFailureAmount${index}">Seconds completed before burnout</label><input id="timedFailureAmount${index}" type="number" min="0" max="${step.target}" inputmode="numeric" value="${Math.max(0,Math.min(step.target,achieved))}"><button type="button" class="compact-action compact-action--danger timed-failure-save-v2" data-timed-index="${index}">Save failure</button>`;
      stepElement.appendChild(entry);
    }
    entry.querySelector('input')?.focus();
  }

  function patchCurrentWorkout() {
    const current = context();
    const root = $('#currentWorkoutOut');
    if (!current?.steps || !root) return;
    const rows = $$('.current-step', root);
    rows.forEach((row, index) => {
      const step = current.steps[index];
      if (!(step?.isTimed || step?.unit === 'seconds')) return;
      const label = row.querySelector('.current-step-label');
      if (label) label.textContent = `${step.name} (${step.target} seconds)`;
      const actions = row.querySelector('.step-actions');
      if (!actions) return;
      const timer = actions.querySelector('.step-timer');
      if (timer) { timer.textContent = 'Start Timer'; timer.dataset.timedTargetV2 = String(index); }
      let failure = actions.querySelector('.step-hold-toggle, .timed-fail-v2');
      if (failure) {
        failure.textContent = '✕';
        failure.className = 'compact-action compact-action--danger step-icon-btn timed-fail-v2';
        failure.dataset.timedIndex = String(index);
        failure.setAttribute('aria-label','Timed target ended before completion');
      }
      let success = actions.querySelector('.timed-success-v2');
      if (!success) {
        success = document.createElement('button');
        success.type = 'button';
        success.className = 'compact-action compact-action--success step-icon-btn timed-success-v2';
        success.dataset.timedIndex = String(index);
        success.textContent = '✓';
        success.setAttribute('aria-label','Timed target completed');
        if (failure) actions.insertBefore(success, failure); else actions.appendChild(success);
      }
      const disabled = Boolean(timer?.disabled || failure?.disabled);
      success.disabled = disabled;
      if (failure) failure.disabled = disabled;
      const failed = failureEntry(current.planId,current.sessionIndex,stepKey(step));
      if (failed) {
        const status = row.querySelector('.step-status');
        if (status) { status.className='step-status failed'; status.textContent=`✕ Failed · Achieved ${failed.achieved} seconds`; }
      }
    });
    $$('.step-hold-save', root).forEach((button) => button.remove());
  }

  function schedulePatch() {
    if (frame) return;
    frame = global.requestAnimationFrame(() => { frame=0; patchCurrentWorkout(); });
  }

  document.addEventListener('click', (event) => {
    const timerButton = event.target.closest('.step-timer[data-timed-target-v2]');
    if (timerButton) {
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation?.();
      const current = context(); const step = current?.steps?.[Number(timerButton.dataset.timedTargetV2)];
      if (step) openTimer(step);
      return;
    }
    const success = event.target.closest('.timed-success-v2');
    if (success) {
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation?.();
      closeTimer(); global.BASELINE_fitnessWorkout?.succeedCurrentStep?.('manual'); schedulePatch();
      return;
    }
    const failure = event.target.closest('.timed-fail-v2');
    if (failure) {
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation?.();
      const current = context(); const index = Number(failure.dataset.timedIndex); const step = current?.steps?.[index];
      if (step) showTimedFailure(failure.closest('.current-step'),step,index);
      return;
    }
    const save = event.target.closest('.timed-failure-save-v2');
    if (save) {
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation?.();
      const current = context(); const index = Number(save.dataset.timedIndex); const step = current?.steps?.[index];
      const input = save.parentElement?.querySelector('input');
      const achieved = Math.max(0,Math.min(Number(step?.target || 0),Math.round(Number(input?.value)||0)));
      closeTimer(); global.BASELINE_fitnessWorkout?.failCurrentStep?.(achieved,'manual'); schedulePatch();
      return;
    }
    if (event.target.closest('#closeTimerModalBtn')) closeTimer();
  }, true);

  function boot() {
    installProgressionCorrection(); installWorkoutCorrection();
    const root = $('#currentWorkoutOut') || document.body;
    const observer = new MutationObserver(schedulePatch);
    observer.observe(root,{childList:true,subtree:true,characterData:true});
    document.addEventListener('baseline:fitness-workout-updated',schedulePatch);
    global.addEventListener?.('pagehide',()=>{observer.disconnect();closeTimer();},{once:true});
    schedulePatch();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})(typeof window !== 'undefined' ? window : globalThis);

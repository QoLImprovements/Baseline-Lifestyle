/* Baseline Fitness — explicit progression modes for the Calisthenics generator.

   This extends the existing generator rather than replacing it. The base plan
   remains the data owner; this module adds one persisted `progressionMode`
   field to each exercise and applies it to previews and final workout targets.

   Modes:
     linear-percent  = existing percentage-based starting sets, linear increases
     straight-sets   = equal reps for every set, linear increases each session
     timed-hold      = existing timed-hold progression
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_GENERATOR_PROGRESSION_V2__) return;
  global.__BASELINE_FITNESS_GENERATOR_PROGRESSION_V2__ = true;
  global.__BASELINE_FITNESS_GENERATOR_PROGRESSION_V1__ = true;

  const document = global.document;
  const MODES = Object.freeze({
    LINEAR:'linear-percent',
    STRAIGHT:'straight-sets',
    TIMED:'timed-hold'
  });
  const MODE_LABELS = Object.freeze({
    [MODES.LINEAR]:'Linear — percentage-based sets',
    [MODES.STRAIGHT]:'Straight Sets — equal reps',
    [MODES.TIMED]:'Timed Hold'
  });
  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const wrapperTimers = [];
  let listObserver = null;
  let frame = 0;
  let fetchWrapped = false;

  function catalogue() {
    return global.BASELINE_FITNESS_EXERCISE_CATALOGUE || { EXERCISES:[] };
  }

  function definitionFor(name) {
    const target = String(name || '').trim();
    return (catalogue().EXERCISES || []).find((exercise) => String(exercise.name || '').localeCompare(target,'en-GB',{ sensitivity:'base' }) === 0) || null;
  }

  function defaultMode(definition) {
    if (!definition) return MODES.LINEAR;
    if (definition.unit === 'seconds' || String(definition.progressionType || '').includes('timed')) return MODES.TIMED;
    /* Lunges default to straight sets / sets across: every set begins at the
       same rep target. This includes Reverse Lunges and Side Lunges. */
    if (definition.familyKey === 'lunges') return MODES.STRAIGHT;
    return MODES.LINEAR;
  }

  function validMode(value, definition) {
    const mode = String(value || '');
    if (defaultMode(definition) === MODES.TIMED) return MODES.TIMED;
    return [MODES.LINEAR,MODES.STRAIGHT].includes(mode) ? mode : defaultMode(definition);
  }

  function selectedPlan() {
    try {
      const plans = global.BASELINE_fitnessPlans?.getPlans?.() || [];
      const selected = Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0);
      return plans.find((plan) => Number(plan.planId) === selected) || plans[0] || null;
    } catch (_error) { return null; }
  }

  function savedItem(exerciseName) {
    const items = selectedPlan()?.planJson?.items;
    if (!Array.isArray(items)) return null;
    return items.find((item) => String(item?.exercise || '').localeCompare(String(exerciseName || ''),'en-GB',{ sensitivity:'base' }) === 0) || null;
  }

  function exerciseNameForRow(row) {
    return String(row?.querySelector?.('.ex-select')?.value || row?.querySelector?.('.ex-search-input')?.value || '').trim();
  }

  function currentMode(row, definition = definitionFor(exerciseNameForRow(row))) {
    const control = row?.querySelector?.('.ex-progression-mode');
    return validMode(control?.value || row?.dataset?.progressionMode, definition);
  }

  function modeOptions(mode, timed) {
    const values = timed ? [MODES.TIMED] : [MODES.LINEAR,MODES.STRAIGHT];
    return values.map((value) => `<option value="${value}"${value === mode ? ' selected' : ''}>${MODE_LABELS[value]}</option>`).join('');
  }

  function syncRow(row) {
    if (!row) return;
    const exerciseName = exerciseNameForRow(row);
    const definition = definitionFor(exerciseName);
    if (!definition) return;
    const timed = defaultMode(definition) === MODES.TIMED;
    const exerciseChanged = row.dataset.progressionExercise !== exerciseName;
    const saved = savedItem(exerciseName);
    const storedMode = String(saved?.progressionMode || '');
    let mode = validMode(row.dataset.progressionMode || storedMode || defaultMode(definition), definition);
    if (exerciseChanged && !storedMode) mode = defaultMode(definition);

    let field = row.querySelector('.ex-field-progression-mode');
    if (!field) {
      field = document.createElement('label');
      field.className = 'field-stack ex-field-progression-mode';
      field.innerHTML = '<span>Progression Type</span><select class="ex-progression-mode field-select-fixed" data-native-select="true"></select><small class="note ex-progression-note"></small>';
      const baselineField = row.querySelector('.ex-field-baseline');
      (baselineField || row.firstElementChild)?.insertAdjacentElement(baselineField ? 'beforebegin' : 'afterend', field);
      const select = field.querySelector('.ex-progression-mode');
      select?.addEventListener('change', () => {
        row.dataset.progressionMode = validMode(select.value, definitionFor(exerciseNameForRow(row)));
        row.dataset.progressionCustom = 'true';
        syncRow(row);
        patchPlanDisplays();
      });
    }

    const select = field.querySelector('.ex-progression-mode');
    mode = validMode(row.dataset.progressionMode || storedMode || mode, definition);
    const signature = `${timed}:${mode}`;
    if (select && select.dataset.modeSignature !== signature) {
      select.dataset.modeSignature = signature;
      select.innerHTML = modeOptions(mode, timed);
      select.value = mode;
    }
    if (select) {
      select.disabled = timed;
      select.value = mode;
    }
    row.dataset.progressionMode = mode;
    row.dataset.progressionExercise = exerciseName;

    const baselineLabel = row.querySelector('.baseline-label');
    if (baselineLabel) {
      baselineLabel.textContent = timed
        ? 'Max Baseline (Seconds)'
        : mode === MODES.STRAIGHT
          ? 'Starting Reps (each set)'
          : 'Max Baseline (Reps)';
    }

    const note = field.querySelector('.ex-progression-note');
    if (note) {
      note.textContent = timed
        ? 'Timed holds use the existing technical-burnout progression.'
        : mode === MODES.STRAIGHT
          ? 'Equal reps in every set; commonly called straight sets or sets across.'
          : 'Starts the sets from the existing percentage pattern, then increases them linearly.';
    }

    const repField = row.querySelector('.ex-field-rep-increase');
    if (repField) {
      const label = repField.querySelector('.rep-increase-label');
      const repNote = repField.querySelector('.rep-increase-note');
      if (label) label.textContent = 'Rep Increase Per Session';
      if (repNote) {
        repNote.textContent = mode === MODES.STRAIGHT
          ? 'Applied to every set. Example: 100, 100, 100 → 110, 110, 110 when the increase is 10.'
          : 'Applied after each successful session.';
      }
    }
  }

  function enhanceRows() {
    $$('#exerciseList .ex-row').forEach((row) => syncRow(row));
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(() => {
      frame = 0;
      enhanceRows();
      patchPlanDisplays();
    });
  }

  function modeByExerciseFromUi() {
    const output = new Map();
    $$('#exerciseList .ex-row').forEach((row) => {
      const name = exerciseNameForRow(row);
      if (name) output.set(name, currentMode(row));
    });
    return output;
  }

  function installFetchWrapper() {
    if (fetchWrapped || typeof global.fetch !== 'function') return;
    fetchWrapped = true;
    const previousFetch = global.fetch.bind(global);
    global.fetch = function(input, init = {}) {
      let url = null;
      try { url = new URL(input instanceof Request ? input.url : String(input), global.location.href); } catch (_error) {}
      if (!url || (!url.pathname.endsWith('/save_plan.php') && !url.pathname.endsWith('/plan_update.php'))) {
        return previousFetch(input, init);
      }
      const next = Object.assign({}, init || {});
      if (typeof next.body === 'string') {
        try {
          const payload = JSON.parse(next.body);
          const modes = modeByExerciseFromUi();
          if (Array.isArray(payload?.planJson?.items)) {
            payload.planJson.items = payload.planJson.items.map((item) => {
              const copy = item && typeof item === 'object' ? Object.assign({}, item) : item;
              if (copy && modes.has(String(copy.exercise || ''))) copy.progressionMode = modes.get(String(copy.exercise || ''));
              return copy;
            });
            next.body = JSON.stringify(payload);
          }
        } catch (_error) {}
      }
      return previousFetch(input, next);
    };
  }

  function rawPlanForProgression() {
    return selectedPlan()?.planJson || null;
  }

  function itemForExercise(plan, exercise) {
    return Array.isArray(plan?.items)
      ? plan.items.find((item) => String(item?.exercise || '').localeCompare(String(exercise || ''),'en-GB',{ sensitivity:'base' }) === 0) || null
      : null;
  }

  function setTargetLabel(step, target) {
    const copy = Object.assign({}, step, { target });
    const label = String(copy.label || copy.name || '');
    if (copy.isTimed || copy.unit === 'seconds') return copy;
    if (/\(\d+(?:\s+per side)?\)/.test(label)) {
      copy.label = label.replace(/\(\d+(?:\s+per side)?\)/, `(${target}${copy.laterality === 'per-side' ? ' per side' : ''})`);
    } else {
      copy.label = `${copy.name || copy.exercise} - (${target}${copy.laterality === 'per-side' ? ' per side' : ''})`;
    }
    return copy;
  }

  function applyStraightSets(context) {
    if (!context || !Array.isArray(context.steps)) return context;
    const plan = rawPlanForProgression();
    if (!plan) return context;
    const next = Object.assign({}, context);
    const steps = context.steps.map((step) => step && typeof step === 'object' ? Object.assign({}, step) : step);
    const byExercise = new Map();
    steps.forEach((step, index) => {
      if (!step || step.isTimed || step.unit === 'seconds') return;
      const name = String(step.exercise || step.name || '').replace(/\s+(Left|Right)$/i,'').trim();
      if (!byExercise.has(name)) byExercise.set(name, []);
      byExercise.get(name).push(index);
    });

    byExercise.forEach((indexes, exercise) => {
      const item = itemForExercise(plan, exercise);
      const definition = definitionFor(exercise);
      const mode = validMode(item?.progressionMode || defaultMode(definition), definition);
      if (mode !== MODES.STRAIGHT || !item) return;
      const baseline = Math.max(1, Math.round(Number(item.baseline) || Number(steps[indexes[0]]?.target) || 1));
      const increase = Math.max(0, Math.round(Number(item.repIncrease) || 0));
      /* The existing progression layer has already accounted for a failed
         session by putting its effective session on each step. Preserve that
         independent-exercise failure rule instead of advancing blindly. */
      const progressionSession = Math.max(1, Math.round(Number(steps[indexes[0]]?.progressionSession || context.sessionIndex) || 1));
      const target = baseline + ((progressionSession - 1) * increase);
      indexes.forEach((stepIndex) => { steps[stepIndex] = setTargetLabel(steps[stepIndex], target); });
    });

    next.steps = steps;
    next.step = steps[Number(context.stepIndex || 0)] || null;
    return next;
  }

  function installProgressionWrapper() {
    const current = global.BASELINE_FITNESS_EXERCISE_PROGRESSION;
    if (!current) return false;
    if (current.__baselineExplicitGeneratorProgression) return true;
    const original = current;
    const wrapped = Object.assign({}, original, {
      __baselineExplicitGeneratorProgression:true,
      MODES,
      adjustContext(source) {
        const adjusted = typeof original.adjustContext === 'function' ? original.adjustContext(source) : source;
        return applyStraightSets(adjusted);
      }
    });
    global.BASELINE_FITNESS_EXERCISE_PROGRESSION = Object.freeze(wrapped);
    return true;
  }

  function installWorkoutWrapper() {
    const current = global.BASELINE_fitnessWorkout;
    if (!current) return false;
    if (current.__baselineStraightSetsFinalAuthority) return true;
    const original = current;
    const wrapped = Object.assign({}, original, {
      __baselineStraightSetsFinalAuthority:true,
      getCurrentContext() { return applyStraightSets(original.getCurrentContext?.()); },
      startSession() { return applyStraightSets(original.startSession?.()); },
      succeedCurrentStep(inputMode = 'manual') { return applyStraightSets(original.succeedCurrentStep?.(inputMode)); },
      failCurrentStep(achieved, inputMode = 'manual') { return applyStraightSets(original.failCurrentStep?.(achieved, inputMode)); },
      recordTimedCurrentStep(achieved, inputMode = 'manual') { return applyStraightSets(original.recordTimedCurrentStep?.(achieved, inputMode)); },
      async finishSession() { return applyStraightSets(await original.finishSession?.()); },
      resetSession() { return applyStraightSets(original.resetSession?.()); },
      onChange(listener) {
        return original.onChange?.((context) => {
          try { listener(applyStraightSets(context)); } catch (_error) {}
        });
      }
    });
    global.BASELINE_fitnessWorkout = Object.freeze(wrapped);
    return true;
  }

  function ensureRuntimeWrappers() {
    installProgressionWrapper();
    installWorkoutWrapper();
  }

  function sessionIndexFromCard(card) {
    const text = String(card?.querySelector?.('.title,h3,.session-title')?.textContent || card?.textContent || '');
    const match = text.match(/Session\s+(\d+)/i);
    return match ? Math.max(1, Number(match[1])) : 1;
  }

  function uiItem(exercise) {
    const row = $$('#exerciseList .ex-row').find((candidate) => exerciseNameForRow(candidate).localeCompare(String(exercise || ''),'en-GB',{ sensitivity:'base' }) === 0);
    if (!row) return null;
    const mode = currentMode(row);
    return {
      exercise:exerciseNameForRow(row),
      progressionMode:mode,
      baseline:Math.max(1, Math.round(Number(row.querySelector('.ex-baseline')?.value) || 1)),
      repIncrease:Math.max(0, Math.round(Number(row.querySelector('.ex-rep-increase')?.value) || 0))
    };
  }

  function patchRows(root, useUi) {
    Array.from(root?.querySelectorAll?.('.plan-exercise-row') || []).forEach((row) => {
      const exercise = String(row.firstElementChild?.textContent || '').trim();
      const source = useUi ? uiItem(exercise) : itemForExercise(rawPlanForProgression(), exercise);
      const definition = definitionFor(exercise);
      const mode = validMode(source?.progressionMode || defaultMode(definition), definition);
      if (!source || mode !== MODES.STRAIGHT) return;
      const card = row.closest('.session-card');
      const sessionIndex = sessionIndexFromCard(card);
      const target = Math.max(1, Math.round(Number(source.baseline) || 1)) + ((sessionIndex - 1) * Math.max(0, Math.round(Number(source.repIncrease) || 0)));
      const details = Array.from(row.children).find((child) => child.tagName === 'DIV');
      Array.from(details?.querySelectorAll?.('b') || []).forEach((node) => { node.textContent = String(target); });
    });
  }

  function patchPlanDisplays() {
    patchRows($('#planOut'), true);
    patchRows($('#myPlanSavedWrap'), false);
  }

  function boot() {
    installFetchWrapper();
    enhanceRows();
    const list = $('#exerciseList');
    if (list && typeof MutationObserver !== 'undefined') {
      listObserver = new MutationObserver(schedule);
      listObserver.observe(list, { childList:true, subtree:false });
    }

    document.addEventListener('change', (event) => {
      if (event.target?.closest?.('#exerciseList .ex-select,#exerciseList .ex-search-input,#exerciseList .ex-progression-mode,#exerciseList .ex-rep-increase,#exerciseList .ex-baseline,#exerciseList .ex-sets')) {
        global.setTimeout(schedule, 0);
      }
    }, true);
    document.addEventListener('input', (event) => {
      if (event.target?.closest?.('#exerciseList .ex-rep-increase,#exerciseList .ex-baseline')) schedule();
    }, true);
    document.addEventListener('click', (event) => {
      if (event.target?.closest?.('#genBtn,#savePlanBtn,#editOptionsBtn,[data-open-calisthenics-plan]')) global.setTimeout(schedule, 0);
    }, true);
    document.addEventListener('baseline:fitness-plans-updated', () => { ensureRuntimeWrappers(); schedule(); });
    document.addEventListener('baseline:fitness-workout-updated', () => { ensureRuntimeWrappers(); schedule(); });

    /* Catch normal script-load ordering without leaving a permanent polling
       loop behind. If another Fitness bridge installs shortly after this file,
       the final Straight Sets wrapper is restored above it. */
    [0,100,300,700,1500,3000].forEach((delay) => {
      wrapperTimers.push(global.setTimeout(ensureRuntimeWrappers, delay));
    });
    schedule();
    document.documentElement.setAttribute('data-baseline-fitness-progression-ui', 'BASELINE_FITNESS_GENERATOR_PROGRESSION_20260806_2');
  }

  global.addEventListener('pagehide', () => {
    listObserver?.disconnect();
    if (frame) global.cancelAnimationFrame(frame);
    wrapperTimers.forEach((timer) => global.clearTimeout(timer));
  }, { once:true });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

/* Baseline Fitness — final Calisthenics generator progression and picker authority. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_GENERATOR_PROGRESSION_V3__) return;
  global.__BASELINE_FITNESS_GENERATOR_PROGRESSION_V3__ = true;
  global.__BASELINE_FITNESS_GENERATOR_PROGRESSION_V2__ = true;
  global.__BASELINE_FITNESS_GENERATOR_PROGRESSION_V1__ = true;

  const document = global.document;
  const MODES = Object.freeze({
    LINEAR:'linear-fixed',
    STRAIGHT:'straight-sets',
    TIMED:'timed-hold'
  });
  const MODE_LABELS = Object.freeze({
    [MODES.LINEAR]:'Linear — fixed set progression',
    [MODES.STRAIGHT]:'Straight Sets — equal reps',
    [MODES.TIMED]:'Timed Hold'
  });
  const LEGACY_LINEAR = 'linear-percent';
  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const timers = [];
  let listObserver = null;
  let frame = 0;
  let fetchWrapped = false;
  let outsidePickerBound = false;

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
    }[character]));
  }

  function catalogue() {
    return global.BASELINE_FITNESS_EXERCISE_CATALOGUE || { EXERCISES:[], FAMILIES:[] };
  }

  function definitionFor(name) {
    const target = String(name || '').trim();
    return (catalogue().EXERCISES || []).find((exercise) => String(exercise.name || '').localeCompare(target,'en-GB',{ sensitivity:'base' }) === 0) || null;
  }

  function defaultMode(definition) {
    if (!definition) return MODES.LINEAR;
    if (definition.unit === 'seconds' || String(definition.progressionType || '').includes('timed')) return MODES.TIMED;
    if (definition.familyKey === 'lunges') return MODES.STRAIGHT;
    return MODES.LINEAR;
  }

  function validMode(value, definition) {
    const raw = String(value || '');
    if (defaultMode(definition) === MODES.TIMED) return MODES.TIMED;
    if (raw === LEGACY_LINEAR) return MODES.LINEAR;
    return [MODES.LINEAR,MODES.STRAIGHT].includes(raw) ? raw : defaultMode(definition);
  }

  function defaultRepIncrease(definition) {
    return String(definition?.progressionType || '') === 'leg-reps' ? 3 : 1;
  }

  function setCount(value) {
    return Math.max(1, Math.min(5, Math.round(Number(value) || 3)));
  }

  function linearOffsets(count) {
    const patterns = {
      1:[0],
      2:[-1,0],
      3:[-1,-2,0],
      4:[-2,-3,-1,0],
      5:[-3,-4,-2,-1,0]
    };
    return patterns[setCount(count)];
  }

  function linearInitialTargets(baseline, count, increment) {
    const max = Math.max(1, Math.round(Number(baseline) || 1));
    const step = Math.max(0, Math.round(Number(increment) || 0));
    const finalSet = Math.max(1, Math.round(max * 0.80));
    return linearOffsets(count).map((offset) => Math.max(1, finalSet + (offset * step)));
  }

  function straightInitialTargets(baseline, count) {
    const value = Math.max(1, Math.round(Number(baseline) || 1));
    return Array(setCount(count)).fill(value);
  }

  function progressedTargets(item, definition, sessionIndex) {
    const source = item && typeof item === 'object' ? item : {};
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    const sets = setCount(source.sets || 3);
    const increase = Number.isFinite(Number(source.repIncrease)) && Number(source.repIncrease) >= 0
      ? Math.round(Number(source.repIncrease))
      : defaultRepIncrease(definition);
    const mode = validMode(source.progressionMode, definition);
    const initial = mode === MODES.STRAIGHT
      ? straightInitialTargets(source.baseline, sets)
      : linearInitialTargets(source.baseline, sets, increase);
    return initial.map((value) => value + ((session - 1) * increase));
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
    return validMode(control?.value || row?.dataset?.progressionMode || savedItem(exerciseNameForRow(row))?.progressionMode, definition);
  }

  function repIncreaseForRow(row, definition = definitionFor(exerciseNameForRow(row))) {
    const control = row?.querySelector?.('.ex-rep-increase');
    const saved = Number(savedItem(exerciseNameForRow(row))?.repIncrease);
    const raw = Number(control?.value);
    if (Number.isFinite(raw) && raw >= 0) return Math.round(raw);
    if (Number.isFinite(saved) && saved >= 0) return Math.round(saved);
    return defaultRepIncrease(definition);
  }

  function modeOptions(mode, timed) {
    const values = timed ? [MODES.TIMED] : [MODES.LINEAR,MODES.STRAIGHT];
    return values.map((value) => `<option value="${value}"${value === mode ? ' selected' : ''}>${MODE_LABELS[value]}</option>`).join('');
  }

  function ensureRepField(row, definition) {
    const timed = defaultMode(definition) === MODES.TIMED;
    let field = row.querySelector('.ex-field-rep-increase');
    if (timed) {
      field?.remove();
      return null;
    }
    if (!field) {
      field = document.createElement('label');
      field.className = 'field-stack ex-field-rep-increase';
      field.innerHTML = '<span class="rep-increase-label">Rep Increase Per Session</span><input class="ex-rep-increase field-input-fixed" type="number" min="0" max="1000" step="1" inputmode="numeric">';
      const sets = row.querySelector('.ex-field-sets');
      (sets || row.lastElementChild)?.insertAdjacentElement('afterend', field);
    }
    field.querySelectorAll('.rep-increase-note').forEach((node) => node.remove());
    const label = field.querySelector('.rep-increase-label');
    if (label) label.textContent = 'Rep Increase Per Session';
    const input = field.querySelector('.ex-rep-increase');
    const exercise = exerciseNameForRow(row);
    const saved = Number(savedItem(exercise)?.repIncrease);
    if (input && input.dataset.progressionExercise !== exercise) {
      input.value = String(Number.isFinite(saved) && saved >= 0 ? Math.round(saved) : defaultRepIncrease(definition));
      input.dataset.progressionExercise = exercise;
    }
    return field;
  }

  function detailText(row, definition, mode) {
    const baseline = Math.max(1, Math.round(Number(row.querySelector('.ex-baseline')?.value) || definition?.base || 1));
    const sets = setCount(row.querySelector('.ex-sets')?.value || 3);
    if (mode === MODES.TIMED) {
      return {
        start:`${baseline} sec guide`,
        progression:baseline >= 90 ? 'Next guide +2 sec' : 'Next guide +3 sec',
        rule:'Record technical burnout'
      };
    }
    const increase = repIncreaseForRow(row, definition);
    const item = { baseline, sets, repIncrease:increase, progressionMode:mode };
    const targets = progressedTargets(item, definition, 1);
    const suffix = definition?.laterality === 'per-side' ? ' per side' : '';
    return {
      start:`${targets.join(' / ')}${suffix}`,
      progression:`+${increase} to every set after success`,
      rule:mode === MODES.LINEAR ? 'Final starting set = 80% of max baseline' : 'Every starting set is equal'
    };
  }

  function ensureDetailsCard(row, definition, mode) {
    let card = row.querySelector('.ex-details-card');
    if (!card) {
      card = document.createElement('div');
      card.className = 'ex-details-card';
      row.append(card);
    }
    const detail = detailText(row, definition, mode);
    const signature = [definition?.name, definition?.family, definition?.movementCategory, mode, detail.start, detail.progression, detail.rule].join('|');
    if (card.dataset.signature === signature) return;
    card.dataset.signature = signature;
    card.innerHTML = `
      <span><b>Family</b>${esc(definition?.family || 'Calisthenics')}</span>
      <span><b>Movement</b>${esc(definition?.movementCategory || 'Bodyweight')}</span>
      <span><b>Starting sets</b>${esc(detail.start)}</span>
      <span><b>Progression</b>${esc(detail.progression)}</span>
      <span class="ex-details-rule"><b>Rule</b>${esc(detail.rule)}</span>`;
  }

  function closePicker(field) {
    const menu = field?.querySelector?.('.ex-picker-menu');
    const button = field?.querySelector?.('.ex-picker-toggle');
    if (menu) menu.hidden = true;
    if (button) button.setAttribute('aria-expanded','false');
  }

  function renderPickerMenu(field, query = '') {
    const menu = field.querySelector('.ex-picker-menu');
    if (!menu) return;
    const text = String(query || '').trim().toLocaleLowerCase('en-GB');
    const exercises = (catalogue().EXERCISES || []).filter((exercise) => {
      if (!text) return true;
      return [exercise.name, exercise.family, exercise.section, exercise.movementCategory]
        .some((value) => String(value || '').toLocaleLowerCase('en-GB').includes(text));
    });
    const families = catalogue().FAMILIES || [];
    const known = new Set(families.map((family) => family.key));
    const orderedKeys = families.map((family) => family.key).concat(
      exercises.map((exercise) => exercise.familyKey).filter((key, index, array) => key && !known.has(key) && array.indexOf(key) === index)
    );
    const html = orderedKeys.map((key) => {
      const items = exercises.filter((exercise) => exercise.familyKey === key);
      if (!items.length) return '';
      const family = families.find((entry) => entry.key === key);
      const label = family?.label || items[0]?.family || key;
      const section = items[0]?.section || '';
      return `<section class="ex-picker-group"><div class="ex-picker-group-head"><strong>${esc(label)}</strong>${section ? `<span>${esc(section)}</span>` : ''}</div>${items.map((exercise) => `<button type="button" class="ex-picker-option" role="option" data-exercise-name="${esc(exercise.name)}"><span>${esc(exercise.name)}</span><small>${esc(exercise.movementCategory || '')}</small></button>`).join('')}</section>`;
    }).join('');
    menu.innerHTML = html || '<div class="ex-picker-empty">No matching exercises.</div>';
  }

  function openPicker(field) {
    const menu = field?.querySelector?.('.ex-picker-menu');
    const input = field?.querySelector?.('.ex-search-input');
    const button = field?.querySelector?.('.ex-picker-toggle');
    if (!menu || !input) return;
    $$('.ex-field-exercise').forEach((other) => { if (other !== field) closePicker(other); });
    renderPickerMenu(field, input.value);
    menu.hidden = false;
    if (button) button.setAttribute('aria-expanded','true');
  }

  function installPicker(row) {
    const field = row.querySelector('.ex-field-exercise');
    const select = row.querySelector('.ex-select');
    const input = row.querySelector('.ex-search-input');
    if (!field || !select || !input) return;
    row.querySelector('.exercise-info-wrap')?.remove();
    input.removeAttribute('list');
    input.setAttribute('autocomplete','off');
    input.setAttribute('aria-autocomplete','list');
    input.setAttribute('aria-haspopup','listbox');
    input.placeholder = 'Search or choose an exercise…';
    if (field.dataset.groupedPicker === 'true') return;
    field.dataset.groupedPicker = 'true';

    const control = document.createElement('div');
    control.className = 'ex-picker-control';
    input.parentNode.insertBefore(control, input);
    control.append(input);
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'ex-picker-toggle';
    toggle.setAttribute('aria-label','Show exercise categories');
    toggle.setAttribute('aria-expanded','false');
    toggle.textContent = '▾';
    control.append(toggle);

    const menu = document.createElement('div');
    menu.className = 'ex-picker-menu';
    menu.setAttribute('role','listbox');
    menu.hidden = true;
    field.append(menu);

    input.addEventListener('focus', () => openPicker(field));
    input.addEventListener('input', () => {
      renderPickerMenu(field, input.value);
      menu.hidden = false;
      toggle.setAttribute('aria-expanded','true');
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePicker(field);
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        openPicker(field);
        menu.querySelector('.ex-picker-option')?.focus();
      }
    });
    toggle.addEventListener('click', () => {
      if (menu.hidden) openPicker(field);
      else closePicker(field);
    });
    menu.addEventListener('click', (event) => {
      const option = event.target.closest('.ex-picker-option[data-exercise-name]');
      if (!option) return;
      const name = String(option.dataset.exerciseName || '');
      input.value = name;
      select.value = name;
      select.dispatchEvent(new Event('change',{ bubbles:true }));
      input.dispatchEvent(new Event('change',{ bubbles:true }));
      closePicker(field);
      input.focus();
    });
    menu.addEventListener('keydown', (event) => {
      const option = event.target.closest('.ex-picker-option');
      if (!option) return;
      const options = $$('.ex-picker-option', menu);
      const index = options.indexOf(option);
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        options[Math.min(options.length - 1, index + 1)]?.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (index <= 0) input.focus();
        else options[index - 1]?.focus();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        closePicker(field);
        input.focus();
      }
    });
    renderPickerMenu(field, '');

    if (!outsidePickerBound) {
      outsidePickerBound = true;
      document.addEventListener('pointerdown', (event) => {
        if (event.target?.closest?.('.ex-field-exercise')) return;
        $$('.ex-field-exercise').forEach(closePicker);
      }, true);
    }
  }

  function syncRow(row) {
    if (!row) return;
    const exerciseName = exerciseNameForRow(row);
    const definition = definitionFor(exerciseName);
    if (!definition) return;
    const timed = defaultMode(definition) === MODES.TIMED;
    const previousExercise = row.dataset.progressionExercise || '';
    const saved = savedItem(exerciseName);
    const storedMode = String(saved?.progressionMode || '');
    let mode = validMode(row.dataset.progressionMode || storedMode || defaultMode(definition), definition);
    if (previousExercise && previousExercise !== exerciseName && !storedMode) mode = defaultMode(definition);

    let field = row.querySelector('.ex-field-progression-mode');
    if (!field) {
      field = document.createElement('label');
      field.className = 'field-stack ex-field-progression-mode';
      field.innerHTML = '<span>Progression Type</span><select class="ex-progression-mode field-select-fixed" data-native-select="true"></select>';
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
    field.querySelectorAll('.ex-progression-note').forEach((node) => node.remove());

    const select = field.querySelector('.ex-progression-mode');
    mode = validMode(row.dataset.progressionMode || storedMode || mode, definition);
    const signature = `${timed}:${mode}`;
    if (select && select.dataset.modeSignature !== signature) {
      select.dataset.modeSignature = signature;
      select.innerHTML = modeOptions(mode, timed);
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

    ensureRepField(row, definition);
    installPicker(row);
    ensureDetailsCard(row, definition, mode);
  }

  function enhanceRows() {
    $$('#exerciseList .ex-row').forEach(syncRow);
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(() => {
      frame = 0;
      enhanceRows();
      patchPlanDisplays();
    });
  }

  function generatorValues() {
    const output = new Map();
    $$('#exerciseList .ex-row').forEach((row) => {
      const name = exerciseNameForRow(row);
      if (!name) return;
      output.set(name, {
        progressionMode:currentMode(row),
        repIncrease:repIncreaseForRow(row)
      });
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
      if (!url || (!url.pathname.endsWith('/save_plan.php') && !url.pathname.endsWith('/plan_update.php'))) return previousFetch(input, init);
      const next = Object.assign({}, init || {});
      if (typeof next.body === 'string') {
        try {
          const payload = JSON.parse(next.body);
          const values = generatorValues();
          if (Array.isArray(payload?.planJson?.items)) {
            payload.planJson.items = payload.planJson.items.map((item) => {
              const copy = item && typeof item === 'object' ? Object.assign({}, item) : item;
              const override = copy ? values.get(String(copy.exercise || '')) : null;
              if (copy && override) {
                copy.progressionMode = override.progressionMode;
                copy.repIncrease = override.repIncrease;
              }
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

  function applyExplicitProgression(context) {
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
      if (!item || !definition) return;
      const mode = validMode(item.progressionMode, definition);
      if (mode === MODES.TIMED) return;
      const progressionSession = Math.max(1, Math.round(Number(steps[indexes[0]]?.progressionSession || context.sessionIndex) || 1));
      const targets = progressedTargets(item, definition, progressionSession);
      indexes.forEach((stepIndex, position) => {
        const target = targets[Math.min(position, targets.length - 1)];
        steps[stepIndex] = setTargetLabel(steps[stepIndex], target);
      });
    });

    next.steps = steps;
    next.step = steps[Number(context.stepIndex || 0)] || null;
    return next;
  }

  function installProgressionWrapper() {
    const current = global.BASELINE_FITNESS_EXERCISE_PROGRESSION;
    if (!current) return false;
    if (current.__baselineExplicitGeneratorProgressionV3) return true;
    const original = current;
    const wrapped = Object.assign({}, original, {
      __baselineExplicitGeneratorProgression:true,
      __baselineExplicitGeneratorProgressionV3:true,
      MODES,
      linearInitialTargets,
      progressedTargets,
      adjustContext(source) {
        const adjusted = typeof original.adjustContext === 'function' ? original.adjustContext(source) : source;
        return applyExplicitProgression(adjusted);
      }
    });
    global.BASELINE_FITNESS_EXERCISE_PROGRESSION = Object.freeze(wrapped);
    return true;
  }

  function installWorkoutWrapper() {
    const current = global.BASELINE_fitnessWorkout;
    if (!current) return false;
    if (current.__baselineGeneratorProgressionV3) return true;
    const original = current;
    const wrapped = Object.assign({}, original, {
      __baselineStraightSetsFinalAuthority:true,
      __baselineGeneratorProgressionV3:true,
      getCurrentContext() { return applyExplicitProgression(original.getCurrentContext?.()); },
      startSession() { return applyExplicitProgression(original.startSession?.()); },
      succeedCurrentStep(inputMode = 'manual') { return applyExplicitProgression(original.succeedCurrentStep?.(inputMode)); },
      failCurrentStep(achieved, inputMode = 'manual') { return applyExplicitProgression(original.failCurrentStep?.(achieved, inputMode)); },
      recordTimedCurrentStep(achieved, inputMode = 'manual') { return applyExplicitProgression(original.recordTimedCurrentStep?.(achieved, inputMode)); },
      async finishSession() { return applyExplicitProgression(await original.finishSession?.()); },
      resetSession() { return applyExplicitProgression(original.resetSession?.()); },
      onChange(listener) {
        return original.onChange?.((context) => {
          try { listener(applyExplicitProgression(context)); } catch (_error) {}
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
    return {
      exercise:exerciseNameForRow(row),
      progressionMode:currentMode(row),
      baseline:Math.max(1, Math.round(Number(row.querySelector('.ex-baseline')?.value) || 1)),
      sets:setCount(row.querySelector('.ex-sets')?.value || 3),
      repIncrease:repIncreaseForRow(row)
    };
  }

  function patchRows(root, useUi) {
    Array.from(root?.querySelectorAll?.('.plan-exercise-row') || []).forEach((row) => {
      const exercise = String(row.firstElementChild?.textContent || '').trim();
      const source = useUi ? uiItem(exercise) : itemForExercise(rawPlanForProgression(), exercise);
      const definition = definitionFor(exercise);
      if (!source || !definition || defaultMode(definition) === MODES.TIMED) return;
      const card = row.closest('.session-card');
      const sessionIndex = sessionIndexFromCard(card);
      const targets = progressedTargets(source, definition, sessionIndex);
      const details = Array.from(row.children).find((child) => child.tagName === 'DIV');
      Array.from(details?.querySelectorAll?.('b') || []).forEach((node, index) => {
        node.textContent = String(targets[Math.min(index, targets.length - 1)]);
      });
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
      if (event.target?.closest?.('#exerciseList .ex-select,#exerciseList .ex-search-input,#exerciseList .ex-progression-mode,#exerciseList .ex-rep-increase,#exerciseList .ex-baseline,#exerciseList .ex-sets')) global.setTimeout(schedule, 0);
    }, true);
    document.addEventListener('input', (event) => {
      if (event.target?.closest?.('#exerciseList .ex-search-input,#exerciseList .ex-rep-increase,#exerciseList .ex-baseline')) schedule();
    }, true);
    document.addEventListener('click', (event) => {
      if (event.target?.closest?.('#genBtn,#savePlanBtn,#editOptionsBtn,[data-open-calisthenics-plan]')) global.setTimeout(schedule, 0);
    }, true);
    document.addEventListener('baseline:fitness-plans-updated', () => { ensureRuntimeWrappers(); schedule(); });
    document.addEventListener('baseline:fitness-workout-updated', () => { ensureRuntimeWrappers(); schedule(); });

    [0,100,300,700,1500,3000].forEach((delay) => timers.push(global.setTimeout(ensureRuntimeWrappers, delay)));
    schedule();
    document.documentElement.setAttribute('data-baseline-fitness-progression-ui', 'BASELINE_FITNESS_GENERATOR_PROGRESSION_20260807_3');
  }

  global.addEventListener('pagehide', () => {
    listObserver?.disconnect();
    if (frame) global.cancelAnimationFrame(frame);
    timers.forEach((timer) => global.clearTimeout(timer));
  }, { once:true });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

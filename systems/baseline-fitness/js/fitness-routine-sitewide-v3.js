/* Baseline Fitness — sitewide My Routine structure, summaries and disclosures. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_SITEWIDE_V3__) return;
  global.__BASELINE_FITNESS_ROUTINE_SITEWIDE_V3__ = true;

  const UI = global.BASELINE_RoutineSystem;
  if (!UI) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const esc = UI.escapeHtml;
  const state = {
    expandedActivities:new Set(),
    expandedLogs:new Set(),
    expandedSessions:new Set(),
    observer:null,
    workoutUnsubscribe:null,
    patching:false
  };

  function routineApiState() {
    try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[], logs:{}, selectedDate:UI.isoDate(new Date()), calendarView:'month' }; }
    catch (_error) { return { activities:[], logs:{}, selectedDate:UI.isoDate(new Date()), calendarView:'month' }; }
  }

  function currentWorkoutContext() {
    try { return global.BASELINE_fitnessWorkout?.getCurrentContext?.() || null; }
    catch (_error) { return null; }
  }

  function exerciseCatalogue() {
    const list = global.BASELINE_FITNESS_DEBUG?.EXERCISES;
    return Array.isArray(list) ? list : [];
  }

  function exerciseByName(name) {
    return exerciseCatalogue().find((exercise) => exercise.name === name) || null;
  }

  function activityCatalogue() {
    return global.BASELINE_FITNESS_ACTIVITY_CATALOGUE;
  }

  function activityDefinition(activity) {
    return activityCatalogue()?.ACTIVITY_BY_ID?.get?.(String(activity?.activityId || '')) || null;
  }

  function progressionText(exercise) {
    if (!exercise) return '';
    if (exercise.progressionType === 'leg-reps') return 'Add 3 repetitions to every set after each successful workout. Only this exercise repeats after its own failure.';
    if (exercise.progressionType === 'standard-reps') return 'Add 1 repetition to every set after each successful workout. Only this exercise repeats after its own failure.';
    return 'Increase the hold through the timed progression while preserving technical form. Only this exercise repeats after its own failure.';
  }

  function lateralityText(value) {
    return ({
      bilateral:'Both sides together',
      'per-side':'Repetitions per side',
      'separate-left-right':'Left and right recorded independently'
    })[value] || String(value || 'Not specified');
  }

  function ensureSummaryTab() {
    const shell = $('.fitness-routine-shell');
    const nav = $('.fitness-routine-subtabs', shell);
    const logPanel = $('[data-fitness-routine-panel="log"]', shell);
    if (!shell || !nav || !logPanel) return;

    let button = $('[data-fitness-routine-view="summary"]', nav);
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'tab fitness-routine-subtab bl-routine-tab';
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', 'false');
      button.dataset.fitnessRoutineView = 'summary';
      button.textContent = 'Exercise Summary';
      const logButton = $('[data-fitness-routine-view="log"]', nav);
      logButton?.insertAdjacentElement('afterend', button);
    }

    let panel = $('[data-fitness-routine-panel="summary"]', shell);
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'fitness-routine-panel bl-routine-panel';
      panel.dataset.fitnessRoutinePanel = 'summary';
      panel.hidden = true;
      panel.innerHTML = `<div class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Exercise Summary</h2><p class="note">A comprehensive explanation of every exercise and activity currently used in your routine.</p></div></div><div class="divider"></div><div id="fitnessExerciseSummary" class="fitness-exercise-summary bl-routine-summary-list" aria-live="polite"></div></div>`;
      logPanel.insertAdjacentElement('afterend', panel);
    }
  }

  function activateSummary() {
    const root = $('#my-plan');
    if (!root) return;
    $$('.fitness-routine-subtab', root).forEach((button) => {
      button.setAttribute('aria-selected', button.dataset.fitnessRoutineView === 'summary' ? 'true' : 'false');
    });
    $$('.fitness-routine-panel', root).forEach((panel) => {
      const active = panel.dataset.fitnessRoutinePanel === 'summary';
      panel.hidden = !active;
      panel.classList.toggle('active', active);
    });
    renderExerciseSummary();
  }

  function leaveSummary(view) {
    if (view === 'summary') return;
    const panel = $('[data-fitness-routine-panel="summary"]');
    if (panel) {
      panel.hidden = true;
      panel.classList.remove('active');
    }
  }

  function plannedExerciseNames() {
    const context = currentWorkoutContext();
    const names = [];
    (Array.isArray(context?.steps) ? context.steps : []).forEach((step) => {
      const name = String(step.exercise || step.name || '').replace(/\s+(Left|Right)$/i, '').trim();
      if (name && !names.includes(name)) names.push(name);
    });
    return names;
  }

  function exerciseSummaryCard(exercise, index) {
    const rows = [
      { label:'Exercise family', value:exercise.family },
      { label:'Body section', value:exercise.section },
      { label:'Movement category', value:exercise.movementCategory },
      { label:'Variation level', value:exercise.variationLevel },
      { label:'Laterality', value:lateralityText(exercise.laterality) },
      { label:'Tracked unit', value:exercise.unit === 'seconds' ? 'Timed hold in seconds' : 'Repetitions' },
      { label:'Progression rule', value:progressionText(exercise) }
    ];
    return `<article class="fitness-exercise-summary-item bl-routine-summary-card">
      <div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${index + 1}</span><strong>${esc(exercise.name)}</strong></div><span class="badge">Calisthenics</span></div>
      <div class="bl-routine-summary-grid">
        <section class="bl-routine-summary-section"><h4>Exercise details</h4>${UI.summaryRows(rows)}</section>
        <section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(exercise.goodFor || 'This exercise contributes to the movement pattern and progression selected in the plan.')}</p><h4>How to perform it</h4><p>${esc(exercise.how || 'Use controlled technique and stop when technical form can no longer be maintained.')}</p></section>
      </div>
    </article>`;
  }

  function activitySummaryCard(activity, index) {
    const definition = activityDefinition(activity);
    const metrics = (definition?.metrics || []).filter((metric) => metric.plan !== false);
    const targetRows = metrics.map((metric) => {
      const value = activity.targetMetrics?.[metric.key];
      return value === '' || value == null ? null : `${metric.label}: ${value}${metric.unit ? ` ${metric.unit}` : ''}`;
    }).filter(Boolean);
    const rows = [
      { label:'Category', value:definition?.group || activity.section },
      { label:'Time of day', value:({ morning:'Morning', afternoon:'Afternoon', evening:'Evening', anytime:'Any time' })[activity.timeOfDay] || 'Any time' },
      { label:'Frequency', value:frequencyText(activity.frequency) },
      { label:'Relevant records', value:metrics.length ? metrics.map((metric) => metric.label).join(', ') : 'Duration and personal notes' },
      { label:'Current targets', value:targetRows.length ? targetRows.join(' · ') : 'No optional targets set' }
    ];
    const role = activityRole(definition, activity);
    return `<article class="fitness-exercise-summary-item bl-routine-summary-card">
      <div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${index + 1}</span><strong>${esc(activity.name)}</strong></div><span class="badge">${esc(sectionLabel(activity.section))}</span></div>
      <div class="bl-routine-summary-grid">
        <section class="bl-routine-summary-section"><h4>Activity details</h4>${UI.summaryRows(rows)}</section>
        <section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(role)}</p><h4>Personal routine context</h4><p>${esc(activity.notes || 'No personal notes have been added yet.')}</p></section>
      </div>
    </article>`;
  }

  function frequencyText(frequency) {
    const value = frequency && typeof frequency === 'object' ? frequency : {};
    if (value.mode === 'daily') return 'Every day';
    if (value.mode === 'days') return Array.isArray(value.days) && value.days.length ? value.days.join(', ') : 'Specific days not selected';
    if (value.mode === 'weekly') return `${Math.max(1, Number(value.timesPerWeek || 1))}× each week`;
    return 'As needed';
  }

  function sectionLabel(section) {
    return ({ cardio:'Cardio', other:'Other Fitness Activity', sports:'Sports' })[section] || 'Fitness Activity';
  }

  function activityRole(definition, activity) {
    const group = String(definition?.group || '').toLocaleLowerCase('en-GB');
    if (group.includes('running')) return 'Develops aerobic capacity, running economy and repeatable pacing. Distance, pace, speed and elevation make changes in workload visible.';
    if (group.includes('walking')) return 'Builds accessible cardiovascular volume, lower-body endurance and general movement capacity with controllable intensity.';
    if (group.includes('cycling')) return 'Develops cardiovascular endurance and leg work capacity with lower impact than running. Speed, cadence and elevation describe the session load.';
    if (group.includes('swimming')) return 'Combines cardiovascular conditioning with full-body coordination and breathing control while reducing weight-bearing impact.';
    if (group.includes('yoga')) return 'Develops controlled mobility, balance, body awareness and breathing. The selected style determines whether the session is restorative, technical or physically demanding.';
    if (group.includes('martial')) return 'Develops movement skill, conditioning, coordination and tactical practice. Rounds and sparring time clarify the session’s working volume.';
    if (group.includes('strength')) return 'Builds strength and muscular work capacity through externally loaded or resistance-based movement.';
    if (activity.section === 'sports') return 'Develops sport-specific skill, decision-making, coordination and conditioning. Score, games, position or opponent details provide useful session context.';
    return 'Adds structured movement outside the calisthenics plan and records the details that best describe this activity.';
  }

  function renderExerciseSummary() {
    const target = $('#fitnessExerciseSummary');
    if (!target) return;
    const routine = routineApiState();
    const exerciseNames = plannedExerciseNames();
    const exercises = exerciseNames.map(exerciseByName).filter(Boolean);
    const activities = Array.isArray(routine.activities) ? routine.activities : [];
    const sections = [];
    if (exercises.length) sections.push(`<section class="fitness-summary-group bl-routine-group"><h3>Calisthenics exercises</h3><div class="bl-routine-summary-list">${exercises.map(exerciseSummaryCard).join('')}</div></section>`);
    if (activities.length) sections.push(`<section class="fitness-summary-group bl-routine-group"><h3>Other planned fitness activities</h3><div class="bl-routine-summary-list">${activities.map(activitySummaryCard).join('')}</div></section>`);
    if (!sections.length) sections.push('<div class="fitness-routine-empty">No exercises or activities are currently available to summarise. Save a calisthenics plan or add an activity to My Routine.</div>');
    UI.renderHtml(target, sections.join(''));
  }

  function cardKey(card, prefix, index) {
    if (card.dataset.activityCard) return `${prefix}:${card.dataset.activityCard}`;
    const title = card.querySelector('.session-title,.title,h3,strong')?.textContent?.trim() || `item-${index}`;
    const container = card.closest('[id]')?.id || 'routine';
    return `${prefix}:${container}:${title}:${index}`;
  }

  function wrapCardDetails(card, key, expandedSet, options = {}) {
    if (!card || card.dataset.sitewideDisclosure === 'true') return;
    const header = card.querySelector(options.headerSelector || ':scope > .session-head,:scope > .fitness-log-item-head,:scope > .top,:scope > .section-head-actions');
    if (!header) return;
    const children = Array.from(card.children).filter((child) => child !== header);
    if (!children.length) return;
    const detailId = `fitnessRoutineDetails-${Math.random().toString(36).slice(2, 10)}`;
    const details = document.createElement('div');
    details.className = 'bl-routine-details fitness-collapsible-details';
    details.id = detailId;
    children.forEach((child) => details.append(child));
    card.append(details);

    const actions = document.createElement('div');
    actions.className = 'bl-routine-entry-actions';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'bl-routine-disclosure';
    button.dataset.fitnessDisclosureKey = key;
    button.setAttribute('aria-controls', detailId);
    actions.append(button);
    header.append(actions);

    const open = expandedSet.has(key);
    details.hidden = !open;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.textContent = open ? (options.closeLabel || 'Hide details') : (options.openLabel || 'Show details');
    card.dataset.sitewideDisclosure = 'true';
    card.dataset.blRoutineDisclosureCard = 'true';
    card.classList.add('bl-routine-summary-card');
  }

  function decorateActivityCards() {
    $$('.fitness-activity-item[data-activity-card]').forEach((card, index) => {
      const key = cardKey(card, 'activity', index);
      wrapCardDetails(card, key, state.expandedActivities, { headerSelector:':scope > .fitness-activity-item-head', openLabel:'Edit details', closeLabel:'Close details' });
    });
  }

  function decorateLogCards() {
    $$('.fitness-routine-log-item').forEach((card, index) => {
      const checkbox = card.querySelector('[data-fitness-log-complete]');
      const key = `log:${checkbox?.dataset.fitnessLogComplete || index}`;
      wrapCardDetails(card, key, state.expandedLogs, { headerSelector:':scope > .fitness-log-item-head', openLabel:'Session details', closeLabel:'Hide session details' });
    });
  }

  function decorateSessionCards() {
    ['#planOut','#completedWorkoutOut','#futureWorkoutOut','#profilePlanOut'].forEach((selector) => {
      $$('.session-card', $(selector)).forEach((card, index) => {
        const key = cardKey(card, 'session', index);
        wrapCardDetails(card, key, state.expandedSessions, { headerSelector:':scope > .top,:scope > .session-head,:scope > .section-head-actions', openLabel:'Show session details', closeLabel:'Hide session details' });
      });
    });
  }

  function completedNames(date, routine) {
    const entries = routine.logs?.[date] || {};
    const activities = new Map((routine.activities || []).map((activity) => [activity.id, activity.name]));
    return Object.entries(entries).filter(([, entry]) => entry?.completed).map(([id]) => activities.get(id)).filter(Boolean);
  }

  function makeWeekRows() {
    const grid = $('#fitnessCalendarGrid');
    const weekdays = $('.fitness-calendar-weekdays');
    if (!grid || !grid.classList.contains('week-view')) {
      if (weekdays) weekdays.hidden = false;
      return;
    }
    const routine = routineApiState();
    const firstButton = grid.querySelector('[data-calendar-date]');
    const anchor = UI.parseIsoDate(firstButton?.dataset.calendarDate) || UI.localDate(routine.selectedDate);
    if (weekdays) weekdays.hidden = true;
    grid.classList.add('bl-routine-week-list');
    UI.renderHtml(grid, UI.weekDates(anchor).map((date) => {
      const names = completedNames(UI.isoDate(date), routine);
      return UI.weekRow(date, { count:names.length, details:names, selectedDate:routine.selectedDate });
    }).join(''), { preserveFocus:false });
  }

  function applyTemplate() {
    const root = $('#my-plan');
    if (!root) return;
    UI.applyTemplate(root);
    $('.fitness-routine-shell', root)?.classList.add('bl-routine-shell');
    $('.fitness-routine-subtabs', root)?.classList.add('bl-routine-tabs');
    $$('.fitness-routine-subtab', root).forEach((button) => button.classList.add('bl-routine-tab'));
    $$('.fitness-routine-panel', root).forEach((panel) => panel.classList.add('bl-routine-panel'));
    $$('.fitness-routine-card', root).forEach((card) => card.classList.add('bl-routine-card'));
    $('.fitness-calendar-card', root)?.classList.add('bl-routine-calendar');
    $('.fitness-calendar-head', root)?.classList.add('bl-routine-calendar-head');
    $('.fitness-calendar-controls', root)?.classList.add('bl-routine-calendar-controls');
    $('.fitness-calendar-view-tabs', root)?.classList.add('bl-routine-calendar-view-tabs');
    $('.fitness-calendar-navigation', root)?.classList.add('bl-routine-calendar-nav');
  }

  function patch() {
    if (state.patching) return;
    state.patching = true;
    try {
      ensureSummaryTab();
      applyTemplate();
      decorateActivityCards();
      decorateLogCards();
      decorateSessionCards();
      makeWeekRows();
      renderExerciseSummary();
    } finally {
      state.patching = false;
    }
  }

  function toggleDisclosure(button) {
    const key = button.dataset.fitnessDisclosureKey;
    if (!key) return;
    const set = key.startsWith('activity:') ? state.expandedActivities : key.startsWith('log:') ? state.expandedLogs : state.expandedSessions;
    if (set.has(key)) set.delete(key); else set.add(key);
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const open = set.has(key);
    if (panel) panel.hidden = !open;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.textContent = open
      ? (key.startsWith('activity:') ? 'Close details' : key.startsWith('log:') ? 'Hide session details' : 'Hide session details')
      : (key.startsWith('activity:') ? 'Edit details' : key.startsWith('log:') ? 'Session details' : 'Show session details');
  }

  function bindEvents() {
    const root = $('#my-plan');
    if (!root) return;
    root.addEventListener('click', (event) => {
      const summary = event.target.closest('[data-fitness-routine-view="summary"]');
      if (summary) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        activateSummary();
        return;
      }
      const tab = event.target.closest('[data-fitness-routine-view]');
      if (tab) leaveSummary(tab.dataset.fitnessRoutineView);
      const disclosure = event.target.closest('[data-fitness-disclosure-key]');
      if (disclosure) {
        event.preventDefault();
        event.stopPropagation();
        toggleDisclosure(disclosure);
      }
    }, true);

    root.addEventListener('change', () => global.setTimeout(() => state.observer?.refresh?.(), 0));
  }

  function attachWorkout() {
    let attempts = 0;
    const connect = () => {
      const workout = global.BASELINE_fitnessWorkout;
      if (workout && typeof workout.onChange === 'function') {
        state.workoutUnsubscribe = workout.onChange(() => {
          global.setTimeout(() => {
            renderExerciseSummary();
            state.observer?.refresh?.();
          }, 0);
        });
        return;
      }
      attempts += 1;
      if (attempts < 80) global.setTimeout(connect, 100);
    };
    connect();
  }

  function boot() {
    const root = $('#my-plan');
    if (!root) return;
    bindEvents();
    state.observer = UI.observe(root, patch);
    attachWorkout();
    global.addEventListener('pagehide', () => {
      state.observer?.disconnect();
      if (typeof state.workoutUnsubscribe === 'function') state.workoutUnsubscribe();
    }, { once:true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

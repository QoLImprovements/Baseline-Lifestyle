/* Baseline Fitness — site-coherent My Routine workspace. */
(function (global) {
  'use strict';

  const CATALOGUE = global.BASELINE_FITNESS_ACTIVITY_CATALOGUE;
  if (!CATALOGUE || !global.document || global.__BASELINE_FITNESS_ROUTINE_WORKSPACE_V2__) return;
  global.__BASELINE_FITNESS_ROUTINE_WORKSPACE_V2__ = true;
  global.__BASELINE_FITNESS_ROUTINE_WORKSPACE__ = true;

  const API = '/systems/baseline-fitness/api/routine_state.php';
  const SAVE_DELAY = 500;
  const DAYS = Object.freeze(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
  const TIMES = Object.freeze([
    { value:'morning', label:'Morning' },
    { value:'afternoon', label:'Afternoon' },
    { value:'evening', label:'Evening' },
    { value:'anytime', label:'Any time' }
  ]);
  const FREQUENCIES = Object.freeze([
    { value:'daily', label:'Every day' },
    { value:'days', label:'Specific days' },
    { value:'weekly', label:'A number of times each week' },
    { value:'monthly', label:'A number of times each month' },
    { value:'as-needed', label:'As needed' }
  ]);
  const VIEWS = Object.freeze(['log','summary','calisthenics','cardio','other','sports']);
  const CALENDAR_VIEWS = Object.freeze(['week','month']);

  const state = {
    owner:'guest',
    authed:false,
    activeView:'log',
    selectedDate:isoDate(new Date()),
    calendarView:'month',
    calendarAnchor:firstOfMonth(new Date()),
    activities:[],
    logs:{},
    revision:0,
    saveTimer:0,
    saveInFlight:false,
    saveQueued:false,
    saveBlocked:false,
    loadToken:0,
    loaded:false,
    openPicker:'',
    pickerQuery:{ cardio:'', other:'', sports:'' },
    pickerIndex:{ cardio:-1, other:-1, sports:-1 },
    pendingRemoveId:''
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
    }[character]));
  }

  function cleanText(value, maximum) {
    return String(value == null ? '' : value).trim().slice(0, maximum);
  }

  function normaliseOwner(value) {
    return String(value || '').trim().toLocaleLowerCase('en-GB') || 'guest';
  }

  function uniqueId() {
    return global.crypto?.randomUUID
      ? `activity-${global.crypto.randomUUID()}`
      : `activity-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function localDate(value) {
    if (value instanceof Date) return new Date(value.getFullYear(), value.getMonth(), value.getDate());
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    return match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : new Date();
  }

  function isoDate(value) {
    const date = localDate(value);
    const pad = (number) => String(number).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function todayIso() {
    return global.BASELINE_RoutineSystem?.todayIso?.() || isoDate(new Date());
  }

  function clampLogDate(value) {
    return global.BASELINE_RoutineSystem?.clampLogDate?.(value) || (isoDate(value) > todayIso() ? todayIso() : isoDate(value));
  }

  function isFutureDate(value) {
    return global.BASELINE_RoutineSystem?.isFutureDate?.(value) || isoDate(value) > todayIso();
  }

  function firstOfMonth(value) {
    const date = localDate(value);
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  function dayName(value) {
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][localDate(value).getDay()];
  }

  function weekBounds(value) {
    const date = localDate(value);
    const startIndex = global.BASELINE_RoutineSystem?.startDayIndex?.() ?? 1;
    const offset = ((date.getDay() - startIndex) + 7) % 7;
    const start = new Date(date);
    start.setDate(start.getDate() - offset);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    return { start:isoDate(start), end:isoDate(end), startDate:start, endDate:end };
  }

  function normaliseFrequency(value) {
    const source = value && typeof value === 'object' ? value : {};
    const mode = FREQUENCIES.some((entry) => entry.value === source.mode) ? source.mode : 'weekly';
    const days = Array.isArray(source.days) ? DAYS.filter((day) => source.days.includes(day)) : [];
    const timesPerWeekMin = Math.max(1, Math.min(14, Math.round(Number(source.timesPerWeekMin ?? source.timesPerWeek) || 1)));
    const requestedMaximum = Math.max(1, Math.min(14, Math.round(Number(source.timesPerWeekMax ?? source.timesPerWeek) || timesPerWeekMin)));
    const timesPerWeekMax = Math.max(timesPerWeekMin, requestedMaximum);
    return {
      mode,
      days,
      timesPerWeek:timesPerWeekMin,
      timesPerWeekMin,
      timesPerWeekMax,
      timesPerMonth:Math.max(1, Math.min(31, Math.round(Number(source.timesPerMonth) || 1)))
    };
  }

  function definitionFor(value) {
    const id = String(value?.activityId || value || '');
    return CATALOGUE.ACTIVITY_BY_ID.get(id) || CATALOGUE.ACTIVITIES[0];
  }

  function normaliseMetricValue(metric, value) {
    if (metric.type === 'text' || metric.type === 'select') return cleanText(value, 120);
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? Math.min(1000000, number) : '';
  }

  function normaliseMetricValues(raw, definition, legacyValue, legacyMeasure) {
    const source = raw && typeof raw === 'object' ? raw : {};
    const values = {};
    (definition.metrics || []).forEach((metric) => {
      const value = normaliseMetricValue(metric, source[metric.key]);
      if (value !== '') values[metric.key] = value;
    });
    if (legacyValue != null && Number(legacyValue) > 0 && !Object.keys(values).length) {
      const measure = String(legacyMeasure || definition.measure || '').toLocaleLowerCase('en-GB');
      const matching = (definition.metrics || []).find((metric) => `${metric.label} ${metric.unit}`.toLocaleLowerCase('en-GB').includes(measure))
        || (definition.metrics || [])[0];
      if (matching) values[matching.key] = normaliseMetricValue(matching, legacyValue);
    }
    return values;
  }

  function normaliseActivity(value, index = 0) {
    const source = value && typeof value === 'object' ? value : {};
    const definition = definitionFor(source);
    const section = ['cardio','other','sports'].includes(source.section) ? source.section : definition.section;
    return {
      id:cleanText(source.id || `activity-${index + 1}`, 80),
      activityId:definition.id,
      name:cleanText(source.name || definition.name, 100),
      section,
      timeOfDay:TIMES.some((entry) => entry.value === source.timeOfDay) ? source.timeOfDay : 'anytime',
      frequency:normaliseFrequency(source.frequency),
      targetMetrics:normaliseMetricValues(source.targetMetrics, definition, source.target, source.measure),
      notes:cleanText(source.notes, 1200)
    };
  }

  function normaliseActivities(value) {
    const source = Array.isArray(value) ? value : [];
    const seen = new Set();
    const output = [];
    source.slice(0, 200).forEach((raw, index) => {
      const item = normaliseActivity(raw, index);
      if (!item.id || seen.has(item.id)) item.id = `${item.id || 'activity'}-${index + 1}`;
      seen.add(item.id);
      output.push(item);
    });
    return output;
  }

  function normaliseLogs(value) {
    const source = value && typeof value === 'object' ? value : {};
    const logs = {};
    Object.keys(source).sort().slice(-1095).forEach((date) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return;
      const entries = {};
      Object.entries(source[date] && typeof source[date] === 'object' ? source[date] : {}).slice(0, 250).forEach(([id, raw]) => {
        if (!raw || typeof raw !== 'object') return;
        const activity = state.activities.find((item) => item.id === id);
        const definition = activity ? definitionFor(activity) : CATALOGUE.ACTIVITIES[0];
        entries[cleanText(id, 100)] = {
          completed:Boolean(raw.completed),
          note:cleanText(raw.note, 800),
          metrics:normaliseMetricValues(raw.metrics, definition, raw.actual, activity?.measure),
          completedAt:cleanText(raw.completedAt, 40)
        };
      });
      logs[date] = entries;
    });
    return logs;
  }

  function frequencyText(value) {
    const frequency = normaliseFrequency(value);
    if (frequency.mode === 'daily') return 'Every day';
    if (frequency.mode === 'days') return frequency.days.length ? frequency.days.join(', ') : 'Specific days not selected';
    if (frequency.mode === 'weekly') return frequency.timesPerWeekMax > frequency.timesPerWeekMin
      ? `${frequency.timesPerWeekMin}–${frequency.timesPerWeekMax}× each week`
      : `${frequency.timesPerWeekMin}× each week`;
    if (frequency.mode === 'monthly') return `${frequency.timesPerMonth}× each month`;
    return 'As needed';
  }

  function timeLabel(value) {
    return TIMES.find((entry) => entry.value === value)?.label || 'Any time';
  }

  function completedCountForWeek(itemId, date) {
    const bounds = weekBounds(date);
    return Object.entries(state.logs).reduce((count, [entryDate, entries]) => (
      entryDate >= bounds.start && entryDate <= bounds.end && entries[itemId]?.completed ? count + 1 : count
    ), 0);
  }

  function weeklyGoalStatus(item, date) {
    const frequency = normaliseFrequency(item?.frequency);
    const count = completedCountForWeek(item.id, date);
    const minimum = frequency.timesPerWeekMin;
    const maximum = frequency.timesPerWeekMax;
    const goalMet = count >= minimum;
    const extra = Math.max(0, count - minimum);
    const remaining = Math.max(0, minimum - count);
    let detail = '';
    if (!goalMet) detail = `Weekly goal: ${count}/${minimum} · ${remaining} remaining`;
    else if (count >= maximum) detail = `Weekly goal met · ${extra} extra · range complete (${count}/${maximum})`;
    else detail = `Weekly goal met · ${extra} extra · up to ${maximum - count} more this week`;
    return { count, minimum, maximum, goalMet, extra, remaining, due:count < maximum, detail };
  }

  function monthBounds(value) {
    const date = localDate(value);
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return { start:isoDate(startDate), end:isoDate(endDate) };
  }

  function completedCountForMonth(itemId, date) {
    const bounds = monthBounds(date);
    return Object.entries(state.logs).reduce((count, [entryDate, entries]) => (
      entryDate >= bounds.start && entryDate <= bounds.end && entries[itemId]?.completed ? count + 1 : count
    ), 0);
  }

  function dueStatus(item, date) {
    if (item.frequency.mode === 'daily') return { due:true, detail:'Due today' };
    if (item.frequency.mode === 'days') {
      const due = item.frequency.days.includes(dayName(date));
      return { due, detail:due ? 'Scheduled today' : 'Not scheduled today' };
    }
    if (item.frequency.mode === 'weekly') {
      return weeklyGoalStatus(item, date);
    }
    if (item.frequency.mode === 'monthly') {
      const remaining = Math.max(0, item.frequency.timesPerMonth - completedCountForMonth(item.id, date));
      return { due:remaining > 0, detail:remaining > 0 ? `${remaining} remaining this month` : 'Monthly target complete' };
    }
    return { due:true, detail:'Optional / as needed' };
  }

  async function request(options = {}) {
    try {
      const response = await fetch(API, {
        method:options.method || 'GET',
        credentials:'same-origin',
        headers:Object.assign({ Accept:'application/json' }, options.body ? { 'Content-Type':'application/json' } : {}),
        body:options.body ? JSON.stringify(options.body) : undefined
      });
      let data = null;
      try { data = await response.json(); } catch (_error) {}
      return { ok:Boolean(response.ok && data?.ok),status:response.status,data:data && typeof data === 'object' ? data : null };
    } catch (_error) {
      return { ok:false,status:0,data:null };
    }
  }

  function announceRevision() {
    try { document.dispatchEvent(new CustomEvent('baseline:fitness-routine-resource-revision',{ detail:{ revision:state.revision } })); } catch (_error) {}
  }
  function markSaveBlocked(error='save_failed') {
    state.saveBlocked=true;
    document.documentElement.setAttribute('data-fitness-routine-save-blocked',String(error));
    try { document.dispatchEvent(new CustomEvent('baseline:fitness-routine-save-error',{ detail:{ error:String(error) } })); } catch (_error) {}
  }
  async function saveNow() {
    clearTimeout(state.saveTimer);
    state.saveTimer = 0;
    if (!state.authed || state.saveBlocked) return;
    if (state.saveInFlight) { state.saveQueued=true;return; }
    state.saveInFlight=true;
    const response=await request({ method:'POST', body:{ activities:state.activities, logs:state.logs, expectedRevision:state.revision } });
    if(response.ok){
      state.revision=Number(response.data?.revision || state.revision || 0);
      state.saveBlocked=false;
      document.documentElement.removeAttribute('data-fitness-routine-save-blocked');
      announceRevision();
    }else{
      markSaveBlocked(response.data?.error || (response.status ? `http_${response.status}` : 'network_error'));
    }
    state.saveInFlight=false;
    if(state.saveQueued && !state.saveBlocked){ state.saveQueued=false;saveNow(); }
  }

  function scheduleSave() {
    clearTimeout(state.saveTimer);
    if(state.authed && !state.saveBlocked) state.saveTimer = global.setTimeout(saveNow, SAVE_DELAY);
  }

  function selectOptions(values, selected) {
    return values.map((entry) => `<option value="${escapeHtml(entry.value)}"${entry.value === selected ? ' selected' : ''}>${escapeHtml(entry.label)}</option>`).join('');
  }

  function makeWorkspace() {
    const section = $('#my-plan');
    if (!section || section.dataset.routineWorkspaceV2 === 'true') return;
    section.dataset.routineWorkspaceV2 = 'true';
    const topTab = $('.tab[data-target="my-plan"]');
    if (topTab) topTab.textContent = 'My Routine';

    const original = Array.from(section.childNodes);
    const shell = document.createElement('div');
    shell.className = 'fitness-routine-shell';
    shell.innerHTML = `
      <nav class="fitness-routine-subtabs" role="tablist" aria-label="My Routine views">
        ${[['log','Routine Log'],['calisthenics','Calisthenics'],['cardio','Cardio'],['other','Other Fitness Activity'],['sports','Sports']]
          .map(([key, label], index) => `<button type="button" class="tab fitness-routine-subtab" role="tab" aria-selected="${index === 0 ? 'true' : 'false'}" data-fitness-routine-view="${key}">${label}</button>`).join('')}
      </nav>
      <div class="fitness-routine-panel active" data-fitness-routine-panel="log">
        <div class="card fitness-routine-card">
          <div class="section-head-actions fitness-routine-log-head">
            <div><h2>Routine Log</h2><p class="note">Record calisthenics and other planned fitness activity for the selected date.</p></div>
            <label class="field-stack fitness-log-date"><span>Activity performed date</span><input id="fitnessRoutineLogDate" type="date" aria-label="Activity performed date"></label>
          </div>
          <div id="fitnessRoutineLogProgress" class="status"></div>
          <div id="fitnessRoutineLogItems"></div>
        </div>
        <div class="card fitness-routine-card fitness-calendar-card">
          <div class="section-head-actions fitness-calendar-head">
            <div><h2>Fitness Calendar</h2><p class="note">Completed fitness activity is highlighted. Select a day to open it in Routine Log.</p></div>
            <div class="fitness-calendar-controls">
              <div class="fitness-calendar-view-tabs" role="tablist" aria-label="Calendar view">
                <button type="button" class="tab fitness-calendar-view" data-calendar-view="week" aria-selected="false">Week</button>
                <button type="button" class="tab fitness-calendar-view" data-calendar-view="month" aria-selected="true">Month</button>
              </div>
              <div class="actions-inline fitness-calendar-navigation">
                <button type="button" class="tiny-btn" data-calendar-move="previous" aria-label="Previous period">←</button>
                <strong id="fitnessCalendarLabel"></strong>
                <button type="button" class="tiny-btn" data-calendar-today>Today</button>
                <button type="button" class="tiny-btn" data-calendar-move="next" aria-label="Next period">→</button>
              </div>
            </div>
          </div>
          <div class="fitness-calendar-weekdays" aria-hidden="true"></div>
          <div class="fitness-calendar-grid" id="fitnessCalendarGrid"></div>
        </div>
      </div>
      <div class="fitness-routine-panel" data-fitness-routine-panel="calisthenics" hidden></div>
      <div class="fitness-routine-panel" data-fitness-routine-panel="cardio" hidden></div>
      <div class="fitness-routine-panel" data-fitness-routine-panel="other" hidden></div>
      <div class="fitness-routine-panel" data-fitness-routine-panel="sports" hidden></div>`;

    section.replaceChildren(shell);
    const calisthenics = $('[data-fitness-routine-panel="calisthenics"]', shell);
    original.forEach((node) => calisthenics.append(node));
    const savedTitle = $('#myPlanSavedWrap h2');
    if (savedTitle) savedTitle.textContent = 'Calisthenics';
    ['cardio','other','sports'].forEach(buildActivityPanel);

    const initialTop=String(document.documentElement.dataset.initialRoutineView || '');
    const initialPlan=String(document.documentElement.dataset.initialRoutinePlan || 'calisthenics');
    const initialView=initialTop==='plan' && VIEWS.includes(initialPlan)
      ? initialPlan
      : (initialTop==='summary' || initialTop==='public' ? 'summary' : 'log');
    activateView(initialView,false);
  }

  function buildActivityPanel(section) {
    const panel = $(`[data-fitness-routine-panel="${section}"]`);
    if (!panel) return;
    const label = CATALOGUE.SECTIONS.find((entry) => entry.key === section)?.label || section;
    const menuId = `fitnessActivityMenu-${section}`;
    panel.innerHTML = `<div class="card fitness-routine-card">
      <h2>${escapeHtml(label)}</h2>
      <p class="note">Search the grouped catalogue, add an activity, then set its schedule and the details relevant to that activity.</p>
      <div class="fitness-activity-add">
        <div class="fitness-activity-combobox">
          <input type="search" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="${menuId}" placeholder="Type or choose an activity…" data-activity-search="${section}">
          <button type="button" class="tiny-btn" data-activity-toggle="${section}" aria-label="Open ${escapeHtml(label)} list" aria-controls="${menuId}" aria-expanded="false">⌄</button>
          <div class="fitness-activity-menu" id="${menuId}" data-activity-menu="${section}" role="listbox" hidden></div>
        </div>
        <button type="button" class="action" data-add-activity="${section}">Add to routine</button>
      </div>
      <div class="fitness-activity-list" data-activity-list="${section}"></div>
    </div>`;
    renderPicker(section);
    renderActivityList(section);
  }

  function pickerHtml(section, query = '') {
    const matches = CATALOGUE.search(section, query);
    if (!matches.length) return '<div class="fitness-activity-no-results">No matching activity.</div>';
    return CATALOGUE.groupsFor(section).map((group) => {
      const items = matches.filter((activity) => activity.group === group);
      if (!items.length) return '';
      return `<section class="fitness-activity-group" role="group" aria-label="${escapeHtml(group)}">
        <div class="fitness-activity-group-label">${escapeHtml(group)}</div>
        ${items.map((activity) => `<button type="button" role="option" id="fitness-option-${escapeHtml(activity.id)}" data-activity-option="${escapeHtml(activity.id)}" aria-selected="false">${escapeHtml(activity.name)}</button>`).join('')}
      </section>`;
    }).join('');
  }

  function renderPicker(section) {
    const menu = $(`[data-activity-menu="${section}"]`);
    if (!menu) return;
    menu.innerHTML = pickerHtml(section, state.pickerQuery[section]);
    state.pickerIndex[section] = -1;
  }

  function pickerOptions(section) {
    return $$('[data-activity-option]', $(`[data-activity-menu="${section}"]`)).filter((button) => !button.disabled);
  }

  function setPickerOpen(section, open) {
    state.openPicker = open ? section : '';
    $$('[data-activity-menu]').forEach((menu) => {
      const selected = menu.dataset.activityMenu === section && open;
      menu.hidden = !selected;
    });
    $$('[data-activity-search]').forEach((input) => {
      const selected = input.dataset.activitySearch === section && open;
      input.setAttribute('aria-expanded', selected ? 'true' : 'false');
      if (!selected) input.removeAttribute('aria-activedescendant');
    });
    $$('[data-activity-toggle]').forEach((button) => {
      button.setAttribute('aria-expanded', button.dataset.activityToggle === section && open ? 'true' : 'false');
    });
    if (!open && section) state.pickerIndex[section] = -1;
  }

  function setPickerIndex(section, index) {
    const options = pickerOptions(section);
    if (!options.length) return;
    const next = Math.max(0, Math.min(options.length - 1, index));
    state.pickerIndex[section] = next;
    options.forEach((option, optionIndex) => {
      const active = optionIndex === next;
      option.classList.toggle('is-keyboard-active', active);
      option.setAttribute('aria-selected', active ? 'true' : 'false');
      if (active) option.scrollIntoView({ block:'nearest' });
    });
    const input = $(`[data-activity-search="${section}"]`);
    if (input) input.setAttribute('aria-activedescendant', options[next].id);
  }

  function selectedDefinition(section) {
    const input = $(`[data-activity-search="${section}"]`);
    return CATALOGUE.ACTIVITY_BY_ID.get(input?.dataset.selectedActivity || '') || null;
  }

  function chooseActivity(section, id) {
    const activity = CATALOGUE.ACTIVITY_BY_ID.get(id);
    const input = $(`[data-activity-search="${section}"]`);
    if (!activity || activity.section !== section || !input) return;
    input.value = activity.name;
    input.dataset.selectedActivity = activity.id;
    state.pickerQuery[section] = activity.name;
    setPickerOpen(section, false);
  }

  function resolveTypedActivity(section) {
    const input = $(`[data-activity-search="${section}"]`);
    const text = String(input?.value || '').trim();
    if (!text) return null;
    const exact = CATALOGUE.search(section, text).find((activity) => activity.name.localeCompare(text, 'en-GB', { sensitivity:'base' }) === 0);
    if (exact) {
      chooseActivity(section, exact.id);
      return exact;
    }
    const matches = CATALOGUE.search(section, text);
    if (matches.length === 1) {
      chooseActivity(section, matches[0].id);
      return matches[0];
    }
    return null;
  }

  function addActivity(section) {
    const definition = selectedDefinition(section) || resolveTypedActivity(section);
    if (!definition) {
      const input = $(`[data-activity-search="${section}"]`);
      state.pickerQuery[section] = input?.value || '';
      renderPicker(section);
      setPickerOpen(section, true);
      input?.focus();
      return;
    }
    state.activities.push(normaliseActivity({
      id:uniqueId(),
      activityId:definition.id,
      name:definition.name,
      section,
      timeOfDay:'anytime',
      frequency:{ mode:'weekly', timesPerWeek:1, timesPerWeekMin:1, timesPerWeekMax:1, days:[] },
      targetMetrics:{},
      notes:''
    }, state.activities.length));
    const input = $(`[data-activity-search="${section}"]`);
    if (input) {
      input.value = '';
      delete input.dataset.selectedActivity;
    }
    state.pickerQuery[section] = '';
    scheduleSave();
    renderActivityList(section);
    renderLog();
    renderCalendar();
  }

  function metricInput(metric, value, itemId, context) {
    const attributes = `${context === 'plan' ? `data-activity-id="${escapeHtml(itemId)}" data-target-metric="${escapeHtml(metric.key)}"` : `data-fitness-log-id="${escapeHtml(itemId)}" data-log-metric="${escapeHtml(metric.key)}" data-fitness-log-date="${escapeHtml(state.selectedDate)}"`}`;
    if (metric.type === 'select') {
      return `<select ${attributes}><option value="">Not recorded</option>${metric.options.map((option) => `<option value="${escapeHtml(option)}"${String(value || '') === option ? ' selected' : ''}>${escapeHtml(option)}</option>`).join('')}</select>`;
    }
    const type = metric.type === 'text' ? 'text' : 'number';
    const numberAttributes = type === 'number' ? ` min="${escapeHtml(metric.min)}" step="${escapeHtml(metric.step || '0.1')}" inputmode="decimal"` : '';
    return `<input type="${type}" value="${escapeHtml(value == null ? '' : value)}" placeholder="${escapeHtml(metric.placeholder || '')}"${numberAttributes} ${attributes}>`;
  }

  function metricFields(item, context = 'plan', logEntry = null) {
    const definition = definitionFor(item);
    const values = context === 'plan' ? item.targetMetrics : (logEntry?.metrics || {});
    const metrics = (definition.metrics || []).filter((metric) => context !== 'plan' || metric.plan !== false);
    if (!metrics.length) return '';
    const summary = metrics.map((metric) => metric.label).join(', ');
    return `<fieldset class="fitness-metric-fieldset"><legend>${context === 'plan' ? 'Optional targets and activity details' : 'Session details'}</legend>
      <p class="note fitness-metric-guidance"><strong>Relevant for ${escapeHtml(item.name)}:</strong> ${escapeHtml(summary)}.</p>
      <div class="fitness-metric-grid">${metrics.map((metric) => `<label class="field-stack"><span>${escapeHtml(metric.label)}${metric.unit ? ` (${escapeHtml(metric.unit)})` : ''}</span>${metricInput(metric, values?.[metric.key], item.id, context)}</label>`).join('')}</div>
    </fieldset>`;
  }

  function dayControls(item) {
    if (item.frequency.mode !== 'days') return '';
    return `<fieldset class="fitness-activity-days"><legend>Days</legend>${DAYS.map((day) => `<label><input type="checkbox" data-activity-day="${escapeHtml(day)}" data-activity-id="${escapeHtml(item.id)}"${item.frequency.days.includes(day) ? ' checked' : ''}><span>${day.slice(0, 3)}</span></label>`).join('')}</fieldset>`;
  }

  function weeklyControl(item) {
    if (item.frequency.mode !== 'weekly') return '';
    return `<label class="field-stack"><span>Minimum times each week</span><input type="number" min="1" max="14" value="${item.frequency.timesPerWeekMin}" data-activity-id="${escapeHtml(item.id)}" data-activity-field="timesPerWeekMin"></label><label class="field-stack"><span>Maximum times each week</span><input type="number" min="${item.frequency.timesPerWeekMin}" max="14" value="${item.frequency.timesPerWeekMax}" data-activity-id="${escapeHtml(item.id)}" data-activity-field="timesPerWeekMax"></label>`;
  }

  function monthlyControl(item) {
    if (item.frequency.mode !== 'monthly') return '';
    return `<label class="field-stack"><span>Times each month</span><input type="number" min="1" max="31" value="${item.frequency.timesPerMonth}" data-activity-id="${escapeHtml(item.id)}" data-activity-field="timesPerMonth"></label>`;
  }

  function renderActivityList(section) {
    const target = $(`[data-activity-list="${section}"]`);
    if (!target) return;
    const items = state.activities.filter((item) => item.section === section);
    if (!items.length) {
      target.innerHTML = '<div class="fitness-routine-empty">No activities have been added to this section.</div>';
      return;
    }
    target.innerHTML = items.map((item, index) => {
      const remove = state.pendingRemoveId === item.id
        ? `<span class="fitness-remove-confirm"><span>Remove?</span><button type="button" class="tiny-btn" data-activity-remove-confirm="${escapeHtml(item.id)}">Yes</button><button type="button" class="tiny-btn" data-activity-remove-cancel>Cancel</button></span>`
        : `<button type="button" class="tiny-btn fitness-remove" data-activity-remove-request="${escapeHtml(item.id)}" aria-label="Remove ${escapeHtml(item.name)}">×</button>`;
      return `<article class="session-card fitness-activity-item" data-activity-card="${escapeHtml(item.id)}">
        <div class="session-head fitness-activity-item-head"><div><span class="badge">${index + 1}</span><strong class="session-title">${escapeHtml(item.name)}</strong></div>${remove}</div>
        <div class="row row-2 fitness-activity-fields">
          <label class="field-stack"><span>Activity name</span><input type="text" maxlength="100" value="${escapeHtml(item.name)}" data-activity-id="${escapeHtml(item.id)}" data-activity-field="name"></label>
          <label class="field-stack"><span>Time of day</span><select data-activity-id="${escapeHtml(item.id)}" data-activity-field="timeOfDay">${selectOptions(TIMES, item.timeOfDay)}</select></label>
          <label class="field-stack"><span>How often</span><select data-activity-id="${escapeHtml(item.id)}" data-activity-field="frequencyMode">${selectOptions(FREQUENCIES, item.frequency.mode)}</select></label>
          ${weeklyControl(item)}
          ${monthlyControl(item)}
        </div>
        ${dayControls(item)}
        ${metricFields(item, 'plan')}
        <label class="field-stack fitness-activity-notes"><span>Personal notes</span><textarea rows="3" maxlength="1200" data-activity-id="${escapeHtml(item.id)}" data-activity-field="notes" placeholder="Technique, route, class, equipment, opponent or other details">${escapeHtml(item.notes)}</textarea></label>
      </article>`;
    }).join('');
  }

  function itemById(id) {
    return state.activities.find((item) => item.id === id) || null;
  }

  function ensureLogDate(date) {
    if (!state.logs[date] || typeof state.logs[date] !== 'object') state.logs[date] = {};
    return state.logs[date];
  }

  function currentCalisthenicsContext() {
    try { return global.BASELINE_fitnessWorkout?.getCurrentContext?.() || null; } catch (_error) { return null; }
  }

  function calisthenicsLogHtml() {
    const planEntries = global.BASELINE_fitnessPlans?.getPlansForDate?.(state.selectedDate) || [];
    if (planEntries.length) {
      return `<section class="fitness-routine-log-group"><h3>Calisthenics</h3>${planEntries.map((entry) => `<article class="session-card fitness-calisthenics-log-card">
        <div><strong class="session-title">${escapeHtml(entry.planName)}</strong><small>Session ${escapeHtml(entry.sessionIndex)} · ${escapeHtml(entry.detail)}</small></div>
        <button type="button" class="tiny-btn" data-open-calisthenics-plan="${escapeHtml(entry.planId)}">Open plan</button>
      </article>`).join('')}</section>`;
    }
    const context = currentCalisthenicsContext();
    if (!context?.available || context.planComplete) return '';
    const goal = global.BASELINE_fitnessPlans?.getWeeklyGoalsForDate?.(state.selectedDate)?.find((entry) => Number(entry.planId) === Number(context.planId));
    const selectedPlan = global.BASELINE_fitnessPlans?.getPlans?.().find((plan) => Number(plan.planId) === Number(context.planId));
    const title = String(selectedPlan?.planJson?.name || (context.sessionIndex ? `Session ${context.sessionIndex}` : 'Current workout'));
    const workoutProgress = `${Number(context.completedSteps || 0)}/${Number(context.totalSteps || 0)} steps completed`;
    const goalProgress = goal ? (goal.goalMet ? `Weekly goal met · ${goal.extra} extra` : `Weekly goal: ${goal.count}/${goal.minimum} · ${goal.remaining} remaining`) : '';
    const progress = [context.sessionIndex ? `Session ${context.sessionIndex}` : '',workoutProgress,goalProgress].filter(Boolean).join(' · ');
    return `<section class="fitness-routine-log-group"><h3>Calisthenics</h3><article class="session-card fitness-calisthenics-log-card">
      <div><strong class="session-title">${escapeHtml(title)}</strong><small>${escapeHtml(progress)}</small></div>
      <button type="button" class="tiny-btn" data-open-fitness-view="calisthenics">View workout</button>
    </article></section>`;
  }

  function renderLogItem(item) {
    const entry = ensureLogDate(state.selectedDate)[item.id] || { completed:false, note:'', metrics:{}, completedAt:'' };
    const targetSummary = (definitionFor(item).metrics || [])
      .map((metric) => item.targetMetrics?.[metric.key] !== undefined && item.targetMetrics?.[metric.key] !== ''
        ? `${item.targetMetrics[metric.key]}${metric.unit ? ` ${metric.unit === 'minutes' ? 'min' : metric.unit}` : ''}`
        : '')
      .filter(Boolean)
      .join(' · ');
    const metaSummary = [item.timeOfDay && item.timeOfDay !== 'anytime' ? timeLabel(item.timeOfDay) : '', targetSummary].filter(Boolean).join(' · ');
    return `<article class="session-card fitness-routine-log-item${entry.completed ? ' complete' : ''}">
      <div class="fitness-log-item-head">
        <label class="fitness-log-completion"><input type="checkbox" data-fitness-log-complete="${escapeHtml(item.id)}" data-fitness-log-date="${escapeHtml(state.selectedDate)}"${entry.completed ? ' checked' : ''}><span><strong>${escapeHtml(item.name)}</strong>${metaSummary ? `<small>${escapeHtml(metaSummary)}</small>` : ''}</span></label>
      </div>
      ${metricFields(item, 'log', entry)}
      <label class="field-stack fitness-log-note"><span>Optional note</span><textarea rows="2" maxlength="800" data-fitness-log-note="${escapeHtml(item.id)}" data-fitness-log-date="${escapeHtml(state.selectedDate)}" placeholder="How it felt, conditions, result or anything worth remembering">${escapeHtml(entry.note || '')}</textarea></label>
    </article>`;
  }

  function renderLog() {
    state.selectedDate = clampLogDate(state.selectedDate);
    const dateInput = $('#fitnessRoutineLogDate');
    if (dateInput) {
      if (global.BASELINE_RoutineSystem?.configureLogDateInput) state.selectedDate = global.BASELINE_RoutineSystem.configureLogDateInput(dateInput, state.selectedDate);
      else { dateInput.max = todayIso(); dateInput.value = state.selectedDate; }
    }
    const target = $('#fitnessRoutineLogItems');
    const progress = $('#fitnessRoutineLogProgress');
    if (!target) return;

    const entries = ensureLogDate(state.selectedDate);
    const dueItems = state.activities.filter((item) => dueStatus(item, state.selectedDate).due || entries[item.id]?.completed);
    const weeklyActivityGoals = state.activities.filter((item) => item.frequency.mode === 'weekly').map((item) => weeklyGoalStatus(item, state.selectedDate));
    const weeklyPlanGoals = global.BASELINE_fitnessPlans?.getWeeklyGoalsForDate?.(state.selectedDate) || [];
    const weeklyGoals = weeklyActivityGoals.concat(weeklyPlanGoals);
    const goalsMet = weeklyGoals.filter((goal) => goal.goalMet).length;
    const extras = weeklyGoals.reduce((total, goal) => total + Math.max(0, Number(goal.extra) || 0), 0);
    if (progress) progress.textContent = weeklyGoals.length
      ? `Weekly goals met: ${goalsMet}/${weeklyGoals.length} routine activities · ${extras} extra completion${extras === 1 ? '' : 's'}`
      : 'No weekly activity goals are configured.';

    const sections = [
      ['cardio','Cardio'],
      ['other','Other Fitness Activity'],
      ['sports','Sports']
    ];
    const activityHtml = sections.map(([key, label]) => {
      const items = dueItems.filter((item) => item.section === key);
      return items.length ? `<section class="fitness-routine-log-group"><h3>${label}</h3>${items.map(renderLogItem).join('')}</section>` : '';
    }).join('');

    target.innerHTML = `${calisthenicsLogHtml()}${activityHtml || '<div class="fitness-routine-empty">No non-calisthenics activities are due for this date.</div>'}`;
  }

  function completedActivityCount(date) {
    const entries = state.logs[date] || {};
    return Object.values(entries).filter((entry) => entry?.completed).length;
  }

  function calendarDayButton(date, inCurrentMonth = true) {
    const iso = isoDate(date);
    const count = completedActivityCount(iso);
    const selected = iso === state.selectedDate;
    const today = iso === todayIso();
    const future = isFutureDate(iso);
    return `<button type="button" class="fitness-calendar-day${count ? ' has-completion' : ''}${selected ? ' selected' : ''}${today ? ' today' : ''}${future ? ' future-date' : ''}${inCurrentMonth ? '' : ' outside-month'}" data-calendar-date="${iso}"${future ? ' disabled aria-disabled="true"' : ''} aria-label="${date.toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'long', year:'numeric' })}${count ? `, ${count} completed activity${count === 1 ? '' : 'ies'}` : ''}"><span>${date.getDate()}</span>${count ? `<b>${count}</b>` : ''}</button>`;
  }

  function renderCalendar() {
    const grid = $('#fitnessCalendarGrid');
    const label = $('#fitnessCalendarLabel');
    const weekdays = $('.fitness-calendar-weekdays');
    if (!grid || !label || !weekdays) return;

    $$('.fitness-calendar-view').forEach((button) => {
      const selected = button.dataset.calendarView === state.calendarView;
      button.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
    const orderedWeekdays = global.BASELINE_RoutineSystem?.orderedDays?.(DAYS) || DAYS;
    weekdays.innerHTML = orderedWeekdays.map((day) => `<span>${day.slice(0, 3)}</span>`).join('');

    if (state.calendarView === 'week') {
      const bounds = weekBounds(state.calendarAnchor);
      label.textContent = `${bounds.startDate.toLocaleDateString('en-GB', { day:'numeric', month:'short' })} – ${bounds.endDate.toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' })}`;
      grid.className = 'fitness-calendar-grid week-view';
      const days = [];
      for (let index = 0; index < 7; index += 1) {
        const date = new Date(bounds.startDate);
        date.setDate(date.getDate() + index);
        days.push(calendarDayButton(date));
      }
      grid.innerHTML = days.join('');
      return;
    }

    const month = firstOfMonth(state.calendarAnchor);
    label.textContent = month.toLocaleDateString('en-GB', { month:'long', year:'numeric' });
    grid.className = 'fitness-calendar-grid month-view';
    const startIndex = global.BASELINE_RoutineSystem?.startDayIndex?.() ?? 1;
    const offset = ((month.getDay() - startIndex) + 7) % 7;
    const first = new Date(month);
    first.setDate(first.getDate() - offset);
    const buttons = [];
    for (let index = 0; index < 42; index += 1) {
      const date = new Date(first);
      date.setDate(date.getDate() + index);
      buttons.push(calendarDayButton(date, date.getMonth() === month.getMonth()));
    }
    grid.innerHTML = buttons.join('');
  }

  function activateView(view, remember = false) {
    const requested = VIEWS.includes(view) ? view : 'log';
    const next = ['calisthenics','cardio','other','sports'].includes(requested) ? 'plan' : requested;
    state.activeView = next;
    if (global.BASELINE_fitnessRoutineStructure?.activateTopView) {
      global.BASELINE_fitnessRoutineStructure.activateTopView(next, remember);
      if (next === 'plan' && global.BASELINE_fitnessRoutineStructure?.activatePlanView) {
        global.BASELINE_fitnessRoutineStructure.activatePlanView(requested === 'plan' ? 'calisthenics' : requested, remember);
      }
    }
    if (next === 'log') {
      renderLog();
      renderCalendar();
    }
  }

  function updateActivityField(control) {
    const item = itemById(control.dataset.activityId);
    if (!item) return;
    const field = control.dataset.activityField;
    if (field === 'name') item.name = cleanText(control.value, 100);
    if (field === 'notes') item.notes = cleanText(control.value, 1200);
    if (field === 'timeOfDay') item.timeOfDay = TIMES.some((entry) => entry.value === control.value) ? control.value : 'anytime';
    if (field === 'frequencyMode') item.frequency.mode = FREQUENCIES.some((entry) => entry.value === control.value) ? control.value : 'weekly';
    if (field === 'timesPerWeekMin') {
      item.frequency.timesPerWeekMin = Math.max(1, Math.min(14, Math.round(Number(control.value) || 1)));
      item.frequency.timesPerWeek = item.frequency.timesPerWeekMin;
      item.frequency.timesPerWeekMax = Math.max(item.frequency.timesPerWeekMin, Number(item.frequency.timesPerWeekMax) || item.frequency.timesPerWeekMin);
    }
    if (field === 'timesPerWeekMax') item.frequency.timesPerWeekMax = Math.max(item.frequency.timesPerWeekMin, Math.min(14, Math.round(Number(control.value) || item.frequency.timesPerWeekMin)));
    if (field === 'timesPerMonth') item.frequency.timesPerMonth = Math.max(1, Math.min(31, Math.round(Number(control.value) || 1)));
    scheduleSave();
  }

  function updateTargetMetric(control) {
    const item = itemById(control.dataset.activityId);
    const definition = item && definitionFor(item);
    const metric = definition?.metrics?.find((entry) => entry.key === control.dataset.targetMetric);
    if (!item || !metric) return;
    const value = normaliseMetricValue(metric, control.value);
    if (value === '') delete item.targetMetrics[metric.key];
    else item.targetMetrics[metric.key] = value;
    scheduleSave();
  }

  function updateDay(control) {
    const item = itemById(control.dataset.activityId);
    const day = control.dataset.activityDay;
    if (!item || !DAYS.includes(day)) return;
    item.frequency.days = DAYS.filter((entry) => entry === day ? control.checked : item.frequency.days.includes(entry));
    scheduleSave();
    renderLog();
  }

  function removeActivity(id) {
    state.activities = state.activities.filter((item) => item.id !== id);
    Object.values(state.logs).forEach((entries) => {
      if (entries && typeof entries === 'object') delete entries[id];
    });
    state.pendingRemoveId = '';
    scheduleSave();
    renderAll();
  }

  function updateLog(id, field, value, metricKey = '', logDate = state.selectedDate) {
    const date = clampLogDate(logDate);
    if (isFutureDate(logDate)) return;
    const item = itemById(id);
    if (!item) return;
    const definition = definitionFor(item);
    const entry = ensureLogDate(date)[id] || { completed:false, note:'', metrics:{}, completedAt:'' };
    if (field === 'completed') {
      entry.completed = Boolean(value);
      entry.completedAt = value ? new Date().toISOString() : '';
    }
    if (field === 'note') entry.note = cleanText(value, 800);
    if (field === 'metric') {
      const metric = definition.metrics?.find((candidate) => candidate.key === metricKey);
      if (metric) {
        const normalised = normaliseMetricValue(metric, value);
        if (normalised === '') delete entry.metrics[metric.key];
        else entry.metrics[metric.key] = normalised;
      }
    }
    ensureLogDate(date)[id] = entry;
    scheduleSave();
  }

  function moveCalendar(direction) {
    const amount = direction === 'next' ? 1 : -1;
    const anchor = localDate(state.calendarAnchor);
    if (state.calendarView === 'week') anchor.setDate(anchor.getDate() + (7 * amount));
    else anchor.setMonth(anchor.getMonth() + amount, 1);
    state.calendarAnchor = anchor;
    renderCalendar();
  }

  function renderAll() {
    ['cardio','other','sports'].forEach(renderActivityList);
    renderLog();
    renderCalendar();
  }

  function bindEvents() {
    const root = $('#my-plan');
    if (!root) return;

    root.addEventListener('click', (event) => {
      const planButton = event.target.closest('[data-open-calisthenics-plan]');
      if (planButton) {
        global.BASELINE_fitnessPlans?.openPlan?.(Number(planButton.dataset.openCalisthenicsPlan));
        return;
      }
      const tab = event.target.closest('[data-fitness-routine-view],[data-open-fitness-view]');
      if (tab) {
        const next=String(tab.dataset.fitnessRoutineView || tab.dataset.openFitnessView || '');
        if (['calisthenics','cardio','other','sports'].includes(next) && global.BASELINE_fitnessRoutineStructure) {
          event.preventDefault();
          global.BASELINE_fitnessRoutineStructure.activateTopView('plan',true);
          global.BASELINE_fitnessRoutineStructure.activatePlanView(next,true);
        } else {
          activateView(next,false);
        }
        return;
      }
      const toggle = event.target.closest('[data-activity-toggle]');
      if (toggle) {
        const section = toggle.dataset.activityToggle;
        const input = $(`[data-activity-search="${section}"]`);
        state.pickerQuery[section] = input?.value || '';
        renderPicker(section);
        setPickerOpen(section, state.openPicker !== section);
        if (state.openPicker === section) input?.focus();
        return;
      }
      const option = event.target.closest('[data-activity-option]');
      if (option) {
        const activity = CATALOGUE.ACTIVITY_BY_ID.get(option.dataset.activityOption);
        if (activity) chooseActivity(activity.section, activity.id);
        return;
      }
      const add = event.target.closest('[data-add-activity]');
      if (add) {
        addActivity(add.dataset.addActivity);
        return;
      }
      const removeRequest = event.target.closest('[data-activity-remove-request]');
      if (removeRequest) {
        state.pendingRemoveId = removeRequest.dataset.activityRemoveRequest;
        renderActivityList(itemById(state.pendingRemoveId)?.section || 'other');
        return;
      }
      const removeConfirm = event.target.closest('[data-activity-remove-confirm]');
      if (removeConfirm) {
        removeActivity(removeConfirm.dataset.activityRemoveConfirm);
        return;
      }
      if (event.target.closest('[data-activity-remove-cancel]')) {
        const item = itemById(state.pendingRemoveId);
        state.pendingRemoveId = '';
        if (item) renderActivityList(item.section);
        return;
      }
      const calendarView = event.target.closest('[data-calendar-view]');
      if (calendarView) {
        state.calendarView = CALENDAR_VIEWS.includes(calendarView.dataset.calendarView) ? calendarView.dataset.calendarView : 'month';
        state.calendarAnchor = localDate(state.selectedDate);
        renderCalendar();
        return;
      }
      const calendarMove = event.target.closest('[data-calendar-move]');
      if (calendarMove) {
        moveCalendar(calendarMove.dataset.calendarMove);
        return;
      }
      if (event.target.closest('[data-calendar-today]')) {
        state.selectedDate = isoDate(new Date());
        state.calendarAnchor = localDate(state.selectedDate);
        renderLog();
        renderCalendar();
        return;
      }
      const calendarDate = event.target.closest('[data-calendar-date]');
      if (calendarDate) {
        if (isFutureDate(calendarDate.dataset.calendarDate)) return;
        state.selectedDate = clampLogDate(calendarDate.dataset.calendarDate);
        state.calendarAnchor = localDate(state.selectedDate);
        renderLog();
        renderCalendar();
      }
    });

    root.addEventListener('focusin', (event) => {
      const search = event.target.closest('[data-activity-search]');
      if (!search) return;
      const section = search.dataset.activitySearch;
      state.pickerQuery[section] = search.value;
      renderPicker(section);
      setPickerOpen(section, true);
    });

    root.addEventListener('input', (event) => {
      const search = event.target.closest('[data-activity-search]');
      if (search) {
        const section = search.dataset.activitySearch;
        state.pickerQuery[section] = search.value;
        delete search.dataset.selectedActivity;
        renderPicker(section);
        setPickerOpen(section, true);
        return;
      }
      const field = event.target.closest('[data-activity-field]');
      if (field && ['name','notes','timesPerWeekMin','timesPerWeekMax','timesPerMonth'].includes(field.dataset.activityField)) {
        updateActivityField(field);
        return;
      }
      const targetMetric = event.target.closest('[data-target-metric]');
      if (targetMetric) {
        updateTargetMetric(targetMetric);
        return;
      }
      const logNote = event.target.closest('[data-fitness-log-note]');
      if (logNote) {
        updateLog(logNote.dataset.fitnessLogNote, 'note', logNote.value, '', logNote.dataset.fitnessLogDate);
        return;
      }
      const logMetric = event.target.closest('[data-log-metric]');
      if (logMetric) updateLog(logMetric.dataset.fitnessLogId, 'metric', logMetric.value, logMetric.dataset.logMetric, logMetric.dataset.fitnessLogDate);
    });

    root.addEventListener('change', (event) => {
      const field = event.target.closest('[data-activity-field]');
      if (field) {
        updateActivityField(field);
        if (['frequencyMode','timeOfDay','timesPerWeekMin','timesPerWeekMax'].includes(field.dataset.activityField)) {
          const item = itemById(field.dataset.activityId);
          if (item) renderActivityList(item.section);
          renderLog();
        }
        return;
      }
      const targetMetric = event.target.closest('[data-target-metric]');
      if (targetMetric) {
        updateTargetMetric(targetMetric);
        renderLog();
        return;
      }
      const day = event.target.closest('[data-activity-day]');
      if (day) {
        updateDay(day);
        return;
      }
      const complete = event.target.closest('[data-fitness-log-complete]');
      if (complete) {
        updateLog(complete.dataset.fitnessLogComplete, 'completed', complete.checked, '', complete.dataset.fitnessLogDate);
        renderLog();
        renderCalendar();
        return;
      }
      const logMetric = event.target.closest('[data-log-metric]');
      if (logMetric) {
        updateLog(logMetric.dataset.fitnessLogId, 'metric', logMetric.value, logMetric.dataset.logMetric, logMetric.dataset.fitnessLogDate);
        return;
      }
      if (event.target?.id === 'fitnessRoutineLogDate') {
        state.selectedDate = clampLogDate(event.target.value);
        event.target.value = state.selectedDate;
        state.calendarAnchor = localDate(state.selectedDate);
        renderLog();
        renderCalendar();
      }
    });

    root.addEventListener('keydown', (event) => {
      const search = event.target.closest('[data-activity-search]');
      if (!search) return;
      const section = search.dataset.activitySearch;
      const options = pickerOptions(section);
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (state.openPicker !== section) {
          renderPicker(section);
          setPickerOpen(section, true);
        }
        setPickerIndex(section, state.pickerIndex[section] < 0 ? 0 : state.pickerIndex[section] + 1);
        return;
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (state.openPicker !== section) {
          renderPicker(section);
          setPickerOpen(section, true);
        }
        setPickerIndex(section, state.pickerIndex[section] < 0 ? Math.max(0, options.length - 1) : state.pickerIndex[section] - 1);
        return;
      }
      if (event.key === 'Home' && state.openPicker === section) {
        event.preventDefault();
        setPickerIndex(section, 0);
        return;
      }
      if (event.key === 'End' && state.openPicker === section) {
        event.preventDefault();
        setPickerIndex(section, options.length - 1);
        return;
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        const index = state.pickerIndex[section];
        if (state.openPicker === section && options[index]) {
          options[index].click();
        } else {
          resolveTypedActivity(section);
        }
        return;
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        setPickerOpen(section, false);
      }
    });

    document.addEventListener('pointerdown', (event) => {
      if (!event.target.closest('.fitness-activity-combobox')) setPickerOpen(state.openPicker, false);
    }, true);
  }

  function renderStableState() {
    renderAll();
    try { global.BASELINE_fitnessRoutineSummary?.render?.(); } catch (_error) {}
    try { document.dispatchEvent(new CustomEvent('baseline:fitness-routine-updated',{ detail:{ source:'fitness-routine-state' } })); } catch (_error) {}
  }

  async function loadForAuth(snapshot) {
    if(!snapshot?.ready) return;
    const token=++state.loadToken;
    const authed = Boolean(snapshot.authed);
    const owner = authed ? String(snapshot.name || snapshot.user?.name || '').trim() : 'guest';
    const nextOwner = owner || 'guest';
    const changed = normaliseOwner(nextOwner) !== normaliseOwner(state.owner);
    state.authed = authed;
    state.owner = nextOwner;
    if (!changed && state.loaded) return;

    state.activities=[];
    state.logs={};
    state.revision=0;
    state.saveBlocked=false;
    state.loaded=false;
    document.documentElement.removeAttribute('data-fitness-routine-save-blocked');

    if(!authed){
      state.loaded=true;
      renderStableState();
      return;
    }

    const response = await request();
    if(token!==state.loadToken) return;
    if(response.ok){
      state.activities = normaliseActivities(response.data?.activities);
      state.logs = normaliseLogs(response.data?.logs);
      state.revision=Number(response.data?.revision || 0);
      state.loaded=true;
      announceRevision();
      renderStableState();
      return;
    }

    state.loaded=true;
    markSaveBlocked(response.data?.error || (response.status ? `http_${response.status}` : 'network_error'));
  }

  function attachAuth() {
    const auth = global.BASELINE_auth;
    if (auth && typeof auth.get === 'function') {
      loadForAuth(auth.get());
      if (typeof auth.onChange === 'function') auth.onChange(loadForAuth);
      return;
    }
    loadForAuth(null);
  }

  function boot() {
    makeWorkspace();
    bindEvents();
    document.addEventListener('baseline:fitness-plans-updated', () => { renderLog(); renderCalendar(); });
    document.addEventListener('baseline:fitness-routine-groups-updated',(event)=>{
      const revision=Number(event.detail?.revision);
      if(Number.isFinite(revision) && revision>=0) state.revision=revision;
    });
    try {
      global.BASELINE_fitnessRoutine = Object.freeze({
        getState:() => ({
          activities:normaliseActivities(state.activities),
          logs:normaliseLogs(state.logs),
          selectedDate:state.selectedDate,
          activeView:state.activeView,
          calendarView:state.calendarView,
          revision:state.revision,
          loaded:state.loaded,
          saveBlocked:state.saveBlocked
        }),
        selectView:(view) => activateView(view, true),
        render:renderAll
      });
    } catch (_error) {}
    global.BASELINE_fitnessRoutineStructure?.boot?.();
    attachAuth();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

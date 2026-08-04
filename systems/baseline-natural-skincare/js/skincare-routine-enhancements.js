/* Baseline Natural Skincare — routine calendar, comprehensive summary and routine groups. */
(function (global) {
  'use strict';

  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_ENHANCEMENTS__) return;
  global.__BASELINE_SKINCARE_ROUTINE_ENHANCEMENTS__ = true;

  const CORE = global.BASELINE_SKINCARE_ROUTINE_MODEL;
  if (!CORE) return;

  const GROUP_API = '/systems/baseline-natural-skincare/api/routine_groups.php';
  const ROUTINE_STORAGE_PREFIX = '__bl_skincare_routine_v1__::';
  const GROUP_STORAGE_PREFIX = '__bl_skincare_routine_groups_v1__::';
  const SAVE_DELAY = 450;
  const MAX_GROUPS = 20;
  const state = {
    owner: 'guest',
    authed: false,
    groups: [],
    assignments: {},
    pendingRemoveGroupId: '',
    calendarMonth: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    saveTimer: 0,
    loaded: false,
    renderFrame: 0
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[character]));
  }

  function cleanText(value, maximum) {
    return String(value == null ? '' : value).trim().slice(0, maximum);
  }

  function normaliseOwner(value) {
    return String(value || '').trim().toLowerCase() || 'guest';
  }

  function uniqueId(prefix = 'group') {
    if (global.crypto?.randomUUID) return `${prefix}-${global.crypto.randomUUID()}`;
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }

  /* Add a clearer UK-facing name for the user's body-cleansing method. */
  const OIL_SHOWER_ACTION = Object.freeze({
    id: 'oil-based-cleansing-shower',
    group: 'Cleansing',
    title: 'Oil-Based Cleansing Shower',
    benefit: 'Uses an oil cleanser over the body during showering to loosen oil-soluble residue without relying on conventional body wash or shampoo.',
    benefitBrief: 'Uses an oil cleanser over the body during showering to loosen oil-soluble residue without relying on conventional body wash or shampoo.',
    benefitComprehensive: 'Uses an oil cleanser over the body during showering to loosen oil-soluble residue without relying on conventional body wash or shampoo. Applied with controlled slip and rinsed or removed according to the chosen method, it keeps the cleansing process deliberate while preserving the richer, lipid-conscious finish the routine is intended to provide.'
  });

  function extendRoutineModel() {
    if (CORE.ACTION_BY_ID?.has(OIL_SHOWER_ACTION.id)) return CORE;
    const actions = [];
    let inserted = false;
    CORE.ACTIONS.forEach((action) => {
      actions.push(action);
      if (action.id === 'oil-cleanse') {
        actions.push(OIL_SHOWER_ACTION);
        inserted = true;
      }
    });
    if (!inserted) actions.push(OIL_SHOWER_ACTION);
    const frozenActions = Object.freeze(actions);
    const actionById = new Map(frozenActions.map((action) => [action.id, action]));

    function benefitText(value, requestedMode) {
      const source = value && typeof value === 'object' ? value : {};
      const definition = source.benefitBrief && source.benefitComprehensive
        ? source
        : actionById.get(String(source.actionId || source.id || ''));
      if (!definition) return CORE.benefitText(source, requestedMode);
      const mode = requestedMode === 'comprehensive' || (!requestedMode && source.benefitMode === 'comprehensive')
        ? 'comprehensive'
        : 'brief';
      return mode === 'comprehensive' ? definition.benefitComprehensive : definition.benefitBrief;
    }

    function normaliseItem(value, fallbackIndex = 0) {
      const source = value && typeof value === 'object' ? value : {};
      if (String(source.actionId || '') !== OIL_SHOWER_ACTION.id) return CORE.normaliseItem(source, fallbackIndex);
      const timeOfDay = CORE.TIMES.some((entry) => entry.value === source.timeOfDay) ? source.timeOfDay : 'anytime';
      const benefitMode = source.benefitMode === 'comprehensive' ? 'comprehensive' : 'brief';
      return {
        id: cleanText(source.id || `routine-${fallbackIndex + 1}`, 80),
        actionId: OIL_SHOWER_ACTION.id,
        title: cleanText(source.title || OIL_SHOWER_ACTION.title, 100),
        benefitMode,
        benefit: benefitText(OIL_SHOWER_ACTION, benefitMode),
        timeOfDay,
        frequency: CORE.normaliseFrequency(source.frequency),
        notes: cleanText(source.notes, 600)
      };
    }

    function normaliseRoutine(value) {
      const source = Array.isArray(value) ? value : [];
      const seen = new Set();
      const items = [];
      source.slice(0, 50).forEach((raw, index) => {
        const item = normaliseItem(raw, index);
        if (!item.id || seen.has(item.id)) item.id = `${item.id || 'routine'}-${index + 1}`;
        seen.add(item.id);
        items.push(item);
      });
      return items;
    }

    function summaryGroups(items) {
      const groups = { morning: [], evening: [], anytime: [] };
      normaliseRoutine(items).forEach((item) => groups[item.timeOfDay].push(item));
      return groups;
    }

    const extended = Object.freeze(Object.assign({}, CORE, {
      ACTIONS: frozenActions,
      ACTION_BY_ID: actionById,
      benefitText,
      normaliseItem,
      normaliseRoutine,
      summaryGroups
    }));
    global.BASELINE_SKINCARE_ROUTINE_MODEL = extended;
    return extended;
  }

  const MODEL = extendRoutineModel();

  function groupStorageKey(owner = state.owner) {
    return GROUP_STORAGE_PREFIX + normaliseOwner(owner);
  }

  function routineStorageKey(owner = state.owner) {
    return ROUTINE_STORAGE_PREFIX + normaliseOwner(owner);
  }

  function normaliseGroups(value) {
    const source = Array.isArray(value) ? value : [];
    const seenIds = new Set();
    const seenTitles = new Set();
    const groups = [];
    source.slice(0, MAX_GROUPS).forEach((raw, index) => {
      if (!raw || typeof raw !== 'object') return;
      let id = cleanText(raw.id || `routine-group-${index + 1}`, 80).replace(/[^a-zA-Z0-9_-]/g, '-');
      const title = cleanText(raw.title, 80);
      if (!id || !title) return;
      if (seenIds.has(id)) id = `${id}-${index + 1}`;
      const titleKey = title.toLocaleLowerCase('en-GB');
      if (seenTitles.has(titleKey)) return;
      seenIds.add(id);
      seenTitles.add(titleKey);
      groups.push({ id, title });
    });
    return groups;
  }

  function normaliseAssignments(value, groups = state.groups) {
    const source = value && typeof value === 'object' ? value : {};
    const validGroups = new Set(groups.map((group) => group.id));
    const assignments = {};
    Object.entries(source).slice(0, 50).forEach(([itemId, groupId]) => {
      const cleanItemId = cleanText(itemId, 80);
      const cleanGroupId = cleanText(groupId, 80);
      if (cleanItemId && validGroups.has(cleanGroupId)) assignments[cleanItemId] = cleanGroupId;
    });
    return assignments;
  }

  function readGroupLocal(owner = state.owner) {
    try {
      const raw = global.localStorage?.getItem(groupStorageKey(owner));
      const value = raw ? JSON.parse(raw) : null;
      const groups = normaliseGroups(value?.groups);
      return { groups, assignments: normaliseAssignments(value?.assignments, groups) };
    } catch (_error) {
      return { groups: [], assignments: {} };
    }
  }

  function writeGroupLocal() {
    try {
      global.localStorage?.setItem(groupStorageKey(), JSON.stringify({
        groups: state.groups,
        assignments: state.assignments,
        updatedAt: new Date().toISOString()
      }));
    } catch (_error) {}
  }

  function readRoutineLocal() {
    try {
      const raw = global.localStorage?.getItem(routineStorageKey());
      const value = raw ? JSON.parse(raw) : null;
      return {
        items: MODEL.normaliseRoutine(value?.items || value?.routine),
        logs: MODEL.normaliseLogs(value?.logs)
      };
    } catch (_error) {
      return { items: [], logs: {} };
    }
  }

  async function groupRequest(options = {}) {
    try {
      const response = await fetch(GROUP_API, {
        method: options.method || 'GET',
        credentials: 'same-origin',
        headers: Object.assign({ Accept: 'application/json' }, options.body ? { 'Content-Type': 'application/json' } : {}),
        body: options.body ? JSON.stringify(options.body) : undefined
      });
      let data = null;
      try { data = await response.json(); } catch (_error) { data = null; }
      return data && typeof data === 'object' ? data : { ok: false, error: `http_${response.status}` };
    } catch (_error) {
      return { ok: false, error: 'network_error' };
    }
  }

  async function saveGroupsNow() {
    clearTimeout(state.saveTimer);
    state.saveTimer = 0;
    writeGroupLocal();
    scheduleRender();
    if (!state.authed) return;
    await groupRequest({ method: 'POST', body: { groups: state.groups, assignments: state.assignments } });
  }

  function scheduleGroupSave() {
    writeGroupLocal();
    clearTimeout(state.saveTimer);
    state.saveTimer = global.setTimeout(saveGroupsNow, SAVE_DELAY);
  }

  function currentAuthSnapshot() {
    try { return global.BASELINE_auth?.get?.() || null; } catch (_error) { return null; }
  }

  async function loadGroupsForAuth(snapshot) {
    const authed = Boolean(snapshot?.authed);
    const owner = authed ? String(snapshot.name || snapshot.user?.name || '').trim() : 'guest';
    const nextOwner = owner || 'guest';
    const changed = normaliseOwner(nextOwner) !== normaliseOwner(state.owner);
    state.authed = authed;
    state.owner = nextOwner;
    if (!changed && state.loaded) return;

    const local = readGroupLocal(state.owner);
    if (!authed) {
      state.groups = local.groups;
      state.assignments = local.assignments;
      state.loaded = true;
      scheduleRender();
      return;
    }

    const response = await groupRequest();
    if (response.ok && response.hasGroups) {
      state.groups = normaliseGroups(response.groups);
      state.assignments = normaliseAssignments(response.assignments, state.groups);
      writeGroupLocal();
    } else {
      state.groups = local.groups;
      state.assignments = local.assignments;
      if (state.groups.length || Object.keys(state.assignments).length) saveGroupsNow();
    }
    state.loaded = true;
    scheduleRender();
  }

  function attachAuth() {
    let attempts = 0;
    const connect = () => {
      const auth = global.BASELINE_auth;
      if (auth && typeof auth.get === 'function') {
        loadGroupsForAuth(auth.get());
        if (typeof auth.onChange === 'function') auth.onChange(loadGroupsForAuth);
        return;
      }
      attempts += 1;
      if (attempts < 60) global.setTimeout(connect, 100);
      else loadGroupsForAuth(null);
    };
    connect();
  }

  function groupOptions(selected = '') {
    const options = state.groups.map((group) => `<option value="${escapeHtml(group.id)}"${group.id === selected ? ' selected' : ''}>${escapeHtml(group.title)}</option>`).join('');
    return `<option value="">No routine group</option>${options}`;
  }

  function groupItemCount(groupId, items) {
    return items.filter((item) => state.assignments[item.id] === groupId).length;
  }

  function ensureStaticLabels() {
    const summaryTab = $('[data-routine-view="summary"]');
    if (summaryTab && summaryTab.textContent.trim() !== 'Routine Summary') summaryTab.textContent = 'Routine Summary';

    const summaryPanel = $('[data-routine-panel="summary"]');
    const heading = summaryPanel?.querySelector('.routine-summary-head h2');
    if (heading && heading.textContent.trim() !== 'Routine Summary') heading.textContent = 'Routine Summary';
    summaryPanel?.querySelector('.routine-summary-head h3')?.remove();
    const note = summaryPanel?.querySelector('.routine-summary-head .note');
    const noteText = 'A complete view of every routine action, its schedule, benefits and personal notes. The plan may remain private or be shared publicly, while the completion log always stays private.';
    if (note && note.textContent.trim() !== noteText) note.textContent = noteText;

    const visibility = $('#routineVisibility');
    if (visibility && !visibility.closest('.routine-visibility-control')) {
      const wrapper = document.createElement('label');
      wrapper.className = 'routine-visibility-control';
      const label = document.createElement('span');
      label.textContent = 'Routine Visibility';
      visibility.parentNode.insertBefore(wrapper, visibility);
      wrapper.append(label, visibility);
    }
  }

  function ensureCalendarCard() {
    const panel = $('[data-routine-panel="log"]');
    const logCard = panel?.querySelector('.routine-card');
    if (!panel || !logCard || panel.querySelector('.routine-calendar-card')) return;
    const card = document.createElement('div');
    card.className = 'card routine-card routine-card-full routine-calendar-card';
    card.innerHTML = `<div class="routine-calendar-head"><div><h2>Monthly Routine Calendar</h2><p class="note">Completed routine days are highlighted. Select a date to open it in the Routine Log.</p></div><div class="routine-calendar-nav"><button type="button" data-calendar-move="previous" aria-label="Previous month">←</button><strong id="routineCalendarMonth"></strong><button type="button" data-calendar-move="next" aria-label="Next month">→</button></div></div><div class="routine-calendar-weekdays" aria-hidden="true"></div><div class="routine-calendar-grid" id="routineCalendarGrid"></div>`;
    logCard.insertAdjacentElement('afterend', card);
  }

  function ensureGroupManager() {
    const planCard = $('[data-routine-panel="plan"] .routine-card');
    const addRow = planCard?.querySelector('.routine-add-row');
    if (!planCard || !addRow || planCard.querySelector('.routine-group-manager')) return;
    const manager = document.createElement('section');
    manager.className = 'routine-group-manager';
    manager.innerHTML = `<div class="routine-group-manager-head"><div><h3>Routine Groups</h3><p class="note">Create named routines, then assign each action below. Examples include Microcurrent &amp; LED Routine, LED &amp; Shaving Routine, and Self-Massage &amp; Oil-Based Cleansing Shower.</p></div></div><div class="routine-group-create"><input id="routineGroupName" type="text" maxlength="80" autocomplete="off" placeholder="Name a routine group…"><button id="createRoutineGroup" type="button">Create group</button></div><div id="routineGroupList" class="routine-group-list" aria-live="polite"></div>`;
    addRow.insertAdjacentElement('beforebegin', manager);
  }

  function renderGroupManager() {
    const target = $('#routineGroupList');
    if (!target) return;
    const items = readRoutineLocal().items;
    const html = state.groups.length
      ? state.groups.map((group) => {
        const count = groupItemCount(group.id, items);
        const confirmation = state.pendingRemoveGroupId === group.id
          ? `<span class="routine-group-remove-confirm"><span>Remove group?</span><button type="button" data-group-remove-confirm="${escapeHtml(group.id)}">Yes</button><button type="button" data-group-remove-cancel>Cancel</button></span>`
          : `<button type="button" class="routine-group-remove" data-group-remove-request="${escapeHtml(group.id)}" aria-label="Remove ${escapeHtml(group.title)}">×</button>`;
        return `<div class="routine-group-row" data-routine-group="${escapeHtml(group.id)}"><input type="text" maxlength="80" value="${escapeHtml(group.title)}" data-group-title="${escapeHtml(group.id)}" aria-label="Routine group name"><span class="routine-group-count">${count} action${count === 1 ? '' : 's'}</span>${confirmation}</div>`;
      }).join('')
      : '<div class="routine-group-empty">No routine groups created yet.</div>';
    if (target.innerHTML !== html) target.innerHTML = html;
  }

  function enhanceRoutineItems() {
    const routine = readRoutineLocal();
    const itemMap = new Map(routine.items.map((item) => [item.id, item]));
    let assignmentsChanged = false;
    Object.keys(state.assignments).forEach((itemId) => {
      if (!itemMap.has(itemId)) {
        delete state.assignments[itemId];
        assignmentsChanged = true;
      }
    });
    if (assignmentsChanged) scheduleGroupSave();

    $$('.routine-item[data-routine-item]').forEach((article) => {
      const itemId = article.dataset.routineItem;
      const grid = article.querySelector('.routine-item-grid');
      if (!itemId || !grid) return;
      let field = grid.querySelector('[data-routine-group-field]');
      if (!field) {
        field = document.createElement('label');
        field.className = 'routine-field routine-group-field';
        field.dataset.routineGroupField = itemId;
        field.innerHTML = `<span>Routine group</span><select data-routine-group-select="${escapeHtml(itemId)}"></select>`;
        const actionName = grid.querySelector('[data-field="title"]')?.closest('.routine-field');
        if (actionName?.nextSibling) grid.insertBefore(field, actionName.nextSibling);
        else grid.prepend(field);
      }
      const select = field.querySelector('select');
      const selected = state.assignments[itemId] || '';
      const options = groupOptions(selected);
      if (select && select.innerHTML !== options) select.innerHTML = options;
      if (select && select.value !== selected) select.value = selected;
    });
  }

  function summaryItem(item, index) {
    const time = MODEL.timeLabel(item.timeOfDay);
    const frequency = MODEL.frequencyText(item.frequency);
    return `<article class="routine-summary-item routine-summary-item-comprehensive"><div class="routine-summary-title"><span>${index + 1}</span><strong>${escapeHtml(item.title)}</strong></div><div class="routine-summary-meta"><span>${escapeHtml(time)}</span><span>${escapeHtml(frequency)}</span></div><p>${escapeHtml(MODEL.benefitText(item, 'comprehensive'))}</p>${item.notes ? `<p class="routine-summary-notes"><b>Your notes:</b> ${escapeHtml(item.notes)}</p>` : ''}</article>`;
  }

  function renderEnhancedSummary() {
    const target = $('#routineSummary');
    if (!target) return;
    const items = readRoutineLocal().items;
    if (!items.length) return;

    const assignedIds = new Set();
    const sections = [];
    state.groups.forEach((group) => {
      const groupItems = items.filter((item) => state.assignments[item.id] === group.id);
      if (!groupItems.length) return;
      groupItems.forEach((item) => assignedIds.add(item.id));
      sections.push(`<section class="routine-summary-group routine-summary-custom-group"><h3>${escapeHtml(group.title)}</h3>${groupItems.map(summaryItem).join('')}</section>`);
    });

    const ungrouped = items.filter((item) => !assignedIds.has(item.id));
    if (ungrouped.length) {
      const timeGroups = MODEL.summaryGroups(ungrouped);
      [['morning', 'Morning routine'], ['evening', 'Evening routine'], ['anytime', 'Flexible / any-time actions']].forEach(([key, label]) => {
        if (timeGroups[key].length) sections.push(`<section class="routine-summary-group"><h3>${label}</h3>${timeGroups[key].map(summaryItem).join('')}</section>`);
      });
    }

    const html = sections.join('');
    if (target.innerHTML !== html) target.innerHTML = html;
  }

  function parseIsoDate(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    return match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : null;
  }

  function monthKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  }

  function completedItemsForDate(date, routine) {
    const entries = routine.logs[date] || {};
    const names = new Map(routine.items.map((item) => [item.id, item.title]));
    return Object.entries(entries)
      .filter(([, entry]) => entry?.completed)
      .map(([itemId]) => names.get(itemId) || 'Routine action');
  }

  function renderCalendar() {
    ensureCalendarCard();
    const monthLabel = $('#routineCalendarMonth');
    const grid = $('#routineCalendarGrid');
    const weekdays = $('.routine-calendar-weekdays');
    if (!monthLabel || !grid || !weekdays) return;

    const routine = readRoutineLocal();
    const selectedDate = $('#routineLogDate')?.value || MODEL.isoDate(new Date());
    const today = MODEL.isoDate(new Date());
    const year = state.calendarMonth.getFullYear();
    const month = state.calendarMonth.getMonth();
    const monthText = state.calendarMonth.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
    if (monthLabel.textContent !== monthText) monthLabel.textContent = monthText;
    const weekdayHtml = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => `<span>${day}</span>`).join('');
    if (weekdays.innerHTML !== weekdayHtml) weekdays.innerHTML = weekdayHtml;

    const first = new Date(year, month, 1);
    const offset = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let empty = 0; empty < offset; empty += 1) cells.push('<span class="routine-calendar-empty" aria-hidden="true"></span>');
    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = MODEL.isoDate(new Date(year, month, day));
      const completed = completedItemsForDate(date, routine);
      const classes = ['routine-calendar-day'];
      if (completed.length) classes.push('has-routine');
      if (date === selectedDate) classes.push('selected');
      if (date === today) classes.push('today');
      const title = completed.length ? `${completed.length} completed: ${completed.join(', ')}` : 'No completed routine actions';
      cells.push(`<button type="button" class="${classes.join(' ')}" data-calendar-date="${date}" title="${escapeHtml(title)}"><span class="routine-calendar-number">${day}</span>${completed.length ? `<span class="routine-calendar-count">${completed.length}</span>` : ''}</button>`);
    }
    while (cells.length % 7) cells.push('<span class="routine-calendar-empty" aria-hidden="true"></span>');
    const html = cells.join('');
    if (grid.innerHTML !== html) grid.innerHTML = html;
    const renderedMonth = monthKey(state.calendarMonth);
    if (grid.dataset.month !== renderedMonth) grid.dataset.month = renderedMonth;
  }

  function scheduleRender() {
    if (state.renderFrame) return;
    state.renderFrame = global.requestAnimationFrame(() => {
      state.renderFrame = 0;
      ensureStaticLabels();
      ensureCalendarCard();
      ensureGroupManager();
      renderGroupManager();
      enhanceRoutineItems();
      renderEnhancedSummary();
      renderCalendar();
    });
  }

  function createGroup() {
    const field = $('#routineGroupName');
    const title = cleanText(field?.value, 80);
    if (!title || state.groups.length >= MAX_GROUPS) {
      field?.focus();
      return;
    }
    if (state.groups.some((group) => group.title.localeCompare(title, 'en-GB', { sensitivity: 'base' }) === 0)) {
      field?.focus();
      return;
    }
    state.groups.push({ id: uniqueId('routine-group'), title });
    state.pendingRemoveGroupId = '';
    if (field) field.value = '';
    scheduleGroupSave();
    scheduleRender();
  }

  function renameGroup(groupId, title) {
    const group = state.groups.find((entry) => entry.id === groupId);
    const clean = cleanText(title, 80);
    if (!group || !clean) return;
    if (state.groups.some((entry) => entry.id !== groupId && entry.title.localeCompare(clean, 'en-GB', { sensitivity: 'base' }) === 0)) return;
    group.title = clean;
    scheduleGroupSave();
    scheduleRender();
  }

  function removeGroup(groupId) {
    state.groups = state.groups.filter((group) => group.id !== groupId);
    Object.keys(state.assignments).forEach((itemId) => {
      if (state.assignments[itemId] === groupId) delete state.assignments[itemId];
    });
    state.pendingRemoveGroupId = '';
    scheduleGroupSave();
    scheduleRender();
  }

  function assignItem(itemId, groupId) {
    if (groupId && state.groups.some((group) => group.id === groupId)) state.assignments[itemId] = groupId;
    else delete state.assignments[itemId];
    scheduleGroupSave();
    scheduleRender();
  }

  function moveCalendar(offset) {
    state.calendarMonth = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth() + offset, 1);
    scheduleRender();
  }

  function selectCalendarDate(date) {
    const parsed = parseIsoDate(date);
    if (!parsed) return;
    state.calendarMonth = new Date(parsed.getFullYear(), parsed.getMonth(), 1);
    const input = $('#routineLogDate');
    if (input) {
      input.value = date;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
    scheduleRender();
  }

  function bindEvents() {
    document.addEventListener('click', (event) => {
      if (event.target.closest('#createRoutineGroup')) { createGroup(); return; }
      const removeRequest = event.target.closest('[data-group-remove-request]');
      if (removeRequest) {
        state.pendingRemoveGroupId = removeRequest.dataset.groupRemoveRequest;
        scheduleRender();
        return;
      }
      const removeConfirm = event.target.closest('[data-group-remove-confirm]');
      if (removeConfirm) { removeGroup(removeConfirm.dataset.groupRemoveConfirm); return; }
      if (event.target.closest('[data-group-remove-cancel]')) {
        state.pendingRemoveGroupId = '';
        scheduleRender();
        return;
      }
      const monthMove = event.target.closest('[data-calendar-move]');
      if (monthMove) { moveCalendar(monthMove.dataset.calendarMove === 'previous' ? -1 : 1); return; }
      const dateButton = event.target.closest('[data-calendar-date]');
      if (dateButton) selectCalendarDate(dateButton.dataset.calendarDate);
    });

    document.addEventListener('keydown', (event) => {
      if (event.target?.id === 'routineGroupName' && event.key === 'Enter') {
        event.preventDefault();
        createGroup();
      }
    });

    document.addEventListener('change', (event) => {
      const groupSelect = event.target.closest('[data-routine-group-select]');
      if (groupSelect) {
        assignItem(groupSelect.dataset.routineGroupSelect, groupSelect.value);
        return;
      }
      if (event.target?.id === 'routineLogDate') {
        const date = parseIsoDate(event.target.value);
        if (date) state.calendarMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        scheduleRender();
      }
    });

    document.addEventListener('blur', (event) => {
      const groupTitle = event.target.closest('[data-group-title]');
      if (groupTitle) renameGroup(groupTitle.dataset.groupTitle, groupTitle.value);
    }, true);
  }

  function observeRoutine() {
    const root = $('#routine');
    if (!root || typeof MutationObserver === 'undefined') return;
    const observer = new MutationObserver(scheduleRender);
    observer.observe(root, { childList: true, subtree: true });
    global.addEventListener('pagehide', () => observer.disconnect(), { once: true });
  }

  function watchRoutineStorage() {
    if (typeof Storage === 'undefined') return;
    const originalSet = Storage.prototype.setItem;
    if (originalSet.__skincareRoutineEnhancementWrapped) return;
    function wrappedSetItem(key, value) {
      const result = originalSet.apply(this, arguments);
      if (this === global.localStorage && String(key || '').startsWith(ROUTINE_STORAGE_PREFIX)) global.setTimeout(scheduleRender, 0);
      return result;
    }
    wrappedSetItem.__skincareRoutineEnhancementWrapped = true;
    Storage.prototype.setItem = wrappedSetItem;
  }

  function initialise() {
    ensureStaticLabels();
    ensureCalendarCard();
    ensureGroupManager();
    bindEvents();
    observeRoutine();
    watchRoutineStorage();
    attachAuth();
    const selected = parseIsoDate($('#routineLogDate')?.value);
    if (selected) state.calendarMonth = new Date(selected.getFullYear(), selected.getMonth(), 1);
    scheduleRender();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialise, { once: true });
  else initialise();
})(typeof window !== 'undefined' ? window : globalThis);

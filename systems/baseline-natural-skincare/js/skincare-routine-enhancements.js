/* Baseline Natural Skincare — grouped plans, grouped logs and monthly calendar. */
(function (global) {
  'use strict';

  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_ENHANCEMENTS__) return;
  global.__BASELINE_SKINCARE_ROUTINE_ENHANCEMENTS__ = true;

  const MODEL = global.BASELINE_SKINCARE_ROUTINE_MODEL;
  const PRODUCTS = global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
  if (!MODEL) return;

  const GROUP_API = '/systems/baseline-natural-skincare/api/routine_groups.php';
  const ROUTINE_STORAGE_PREFIX = '__bl_skincare_routine_v1__::';
  const GROUP_STORAGE_PREFIX = '__bl_skincare_routine_groups_v2__::';
  const LEGACY_GROUP_STORAGE_PREFIX = '__bl_skincare_routine_groups_v1__::';
  const SAVE_DELAY = 450;
  const MAX_GROUPS = 30;
  const state = {
    owner: 'guest',
    authed: false,
    groups: [],
    assignments: {},
    pendingRemoveGroupId: '',
    calendarMonth: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    saveTimer: 0,
    loaded: false,
    renderFrame: 0,
    rendering: false
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
    return String(value || '').trim().toLocaleLowerCase('en-GB') || 'guest';
  }

  function uniqueId(prefix = 'group') {
    if (global.crypto?.randomUUID) return `${prefix}-${global.crypto.randomUUID()}`;
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function groupStorageKey(owner = state.owner, legacy = false) {
    return `${legacy ? LEGACY_GROUP_STORAGE_PREFIX : GROUP_STORAGE_PREFIX}${normaliseOwner(owner)}`;
  }

  function routineStorageKey(owner = state.owner) {
    return `${ROUTINE_STORAGE_PREFIX}${normaliseOwner(owner)}`;
  }

  function normaliseGroup(raw, index = 0) {
    const source = raw && typeof raw === 'object' ? raw : {};
    const id = cleanText(source.id || `routine-group-${index + 1}`, 80).replace(/[^a-zA-Z0-9_-]/g, '-');
    const title = cleanText(source.title, 80);
    if (!id || !title) return null;
    return {
      id,
      title,
      collapsed: Boolean(source.collapsed),
      applyFrequency: Boolean(source.applyFrequency),
      frequency: MODEL.normaliseFrequency(source.frequency),
      applyTime: Boolean(source.applyTime),
      timeOfDay: MODEL.TIMES.some((entry) => entry.value === source.timeOfDay) ? source.timeOfDay : 'anytime'
    };
  }

  function normaliseGroups(value) {
    const source = Array.isArray(value) ? value : [];
    const seenIds = new Set();
    const seenTitles = new Set();
    const groups = [];
    source.slice(0, MAX_GROUPS).forEach((raw, index) => {
      const group = normaliseGroup(raw, index);
      if (!group) return;
      if (seenIds.has(group.id)) group.id = `${group.id}-${index + 1}`;
      const titleKey = group.title.toLocaleLowerCase('en-GB');
      if (seenTitles.has(titleKey)) return;
      seenIds.add(group.id);
      seenTitles.add(titleKey);
      groups.push(group);
    });
    return groups;
  }

  function normaliseAssignments(value, groups = state.groups) {
    const source = value && typeof value === 'object' ? value : {};
    const valid = new Set(groups.map((group) => group.id));
    const assignments = {};
    Object.entries(source).slice(0, 120).forEach(([itemId, groupId]) => {
      const item = cleanText(itemId, 80);
      const group = cleanText(groupId, 80);
      if (item && valid.has(group)) assignments[item] = group;
    });
    return assignments;
  }

  function readGroupLocal(owner = state.owner) {
    try {
      const raw = global.localStorage?.getItem(groupStorageKey(owner)) || global.localStorage?.getItem(groupStorageKey(owner, true));
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
        visibility: value?.visibility === 'public' ? 'public' : 'private',
        items: MODEL.normaliseRoutine(value?.items || value?.routine),
        logs: MODEL.normaliseLogs(value?.logs)
      };
    } catch (_error) {
      return { visibility: 'private', items: [], logs: {} };
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

  function groupById(groupId) {
    return state.groups.find((group) => group.id === groupId) || null;
  }

  function groupForItem(itemId) {
    return groupById(state.assignments[itemId]);
  }

  function effectiveItem(item) {
    const group = groupForItem(item.id);
    if (!group) return item;
    const copy = Object.assign({}, item);
    if (group.applyFrequency) copy.frequency = MODEL.normaliseFrequency(group.frequency);
    if (group.applyTime) copy.timeOfDay = group.timeOfDay;
    return copy;
  }

  function groupOptions(selected = '') {
    const options = state.groups.map((group) => `<option value="${escapeHtml(group.id)}"${group.id === selected ? ' selected' : ''}>${escapeHtml(group.title)}</option>`).join('');
    return `<option value="">No routine group</option>${options}`;
  }

  function selectOptions(values, selected) {
    return values.map((item) => `<option value="${escapeHtml(item.value)}"${item.value === selected ? ' selected' : ''}>${escapeHtml(item.label)}</option>`).join('');
  }

  function dayControls(group) {
    if (!group.applyFrequency || group.frequency.mode !== 'days') return '';
    return `<fieldset class="routine-group-days"><legend>Group days</legend>${MODEL.DAYS.map((day) => `<label><input type="checkbox" data-group-day="${escapeHtml(day)}" data-group-id="${escapeHtml(group.id)}"${group.frequency.days.includes(day) ? ' checked' : ''}><span>${escapeHtml(day.slice(0, 3))}</span></label>`).join('')}</fieldset>`;
  }

  function weeklyControl(group) {
    if (!group.applyFrequency || group.frequency.mode !== 'weekly') return '';
    return `<label class="routine-field"><span>Times each week</span><input type="number" min="1" max="14" value="${group.frequency.timesPerWeek}" data-group-field="timesPerWeek" data-group-id="${escapeHtml(group.id)}"></label>`;
  }

  function ensureStaticLabels() {
    const summaryTab = $('[data-routine-view="summary"]');
    if (summaryTab && summaryTab.textContent.trim() !== 'Routine Summary') summaryTab.textContent = 'Routine Summary';
    const summaryPanel = $('[data-routine-panel="summary"]');
    const heading = summaryPanel?.querySelector('.routine-summary-head h2');
    if (heading && heading.textContent.trim() !== 'Routine Summary') heading.textContent = 'Routine Summary';
    summaryPanel?.querySelector('.routine-summary-head h3')?.remove();
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
    manager.innerHTML = `<div class="routine-group-manager-head"><div><h3>Routine Groups</h3><p class="note">A group can carry its own time and frequency. Actions may inherit those settings or retain their individual schedule.</p></div></div><div class="routine-group-create"><input id="routineGroupName" type="text" maxlength="80" autocomplete="off" placeholder="Name a routine group…"><button id="createRoutineGroup" type="button">Create group</button></div><div id="routineGroupList" class="routine-group-list" aria-live="polite"></div>`;
    addRow.insertAdjacentElement('beforebegin', manager);
  }

  function renderGroupManager() {
    const target = $('#routineGroupList');
    if (!target) return;
    const items = readRoutineLocal().items;
    const html = state.groups.length ? state.groups.map((group) => {
      const count = items.filter((item) => state.assignments[item.id] === group.id).length;
      const confirmation = state.pendingRemoveGroupId === group.id
        ? `<span class="routine-group-remove-confirm"><span>Remove group?</span><button type="button" data-group-remove-confirm="${escapeHtml(group.id)}">Yes</button><button type="button" data-group-remove-cancel>Cancel</button></span>`
        : `<button type="button" class="routine-group-remove" data-group-remove-request="${escapeHtml(group.id)}" aria-label="Remove ${escapeHtml(group.title)}">×</button>`;
      return `<article class="routine-group-row" data-routine-group="${escapeHtml(group.id)}">
        <div class="routine-group-row-head"><button type="button" class="routine-group-collapse" data-group-collapse="${escapeHtml(group.id)}" aria-expanded="${group.collapsed ? 'false' : 'true'}">${group.collapsed ? '▸' : '▾'}</button><input type="text" maxlength="80" value="${escapeHtml(group.title)}" data-group-title="${escapeHtml(group.id)}" aria-label="Routine group name"><span class="routine-group-count">${count} action${count === 1 ? '' : 's'}</span>${confirmation}</div>
        <div class="routine-group-settings"${group.collapsed ? ' hidden' : ''}>
          <label class="routine-group-toggle"><input type="checkbox" data-group-field="applyTime" data-group-id="${escapeHtml(group.id)}"${group.applyTime ? ' checked' : ''}><span>Set time for this group</span></label>
          <label class="routine-field"><span>Group time</span><select data-group-field="timeOfDay" data-group-id="${escapeHtml(group.id)}"${group.applyTime ? '' : ' disabled'}>${selectOptions(MODEL.TIMES, group.timeOfDay)}</select></label>
          <label class="routine-group-toggle"><input type="checkbox" data-group-field="applyFrequency" data-group-id="${escapeHtml(group.id)}"${group.applyFrequency ? ' checked' : ''}><span>Set “How often” for this group</span></label>
          <label class="routine-field"><span>Group frequency</span><select data-group-field="frequencyMode" data-group-id="${escapeHtml(group.id)}"${group.applyFrequency ? '' : ' disabled'}>${selectOptions(MODEL.FREQUENCIES, group.frequency.mode)}</select></label>
          ${weeklyControl(group)}${dayControls(group)}
        </div>
      </article>`;
    }).join('') : '<div class="routine-group-empty">No routine groups created yet.</div>';
    if (target.innerHTML !== html) target.innerHTML = html;
  }

  function enhanceRoutineFields() {
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
      const item = itemMap.get(itemId);
      const grid = article.querySelector('.routine-item-grid');
      if (!item || !grid) return;

      let groupField = grid.querySelector('[data-routine-group-field]');
      if (!groupField) {
        groupField = document.createElement('label');
        groupField.className = 'routine-field routine-group-field';
        groupField.dataset.routineGroupField = itemId;
        groupField.innerHTML = `<span>Routine group</span><select data-routine-group-select="${escapeHtml(itemId)}"></select>`;
        const first = grid.querySelector('.routine-field');
        if (first?.nextSibling) grid.insertBefore(groupField, first.nextSibling);
        else grid.prepend(groupField);
      }
      const groupSelect = groupField.querySelector('select');
      const selectedGroup = state.assignments[itemId] || '';
      const options = groupOptions(selectedGroup);
      if (groupSelect && groupSelect.innerHTML !== options) groupSelect.innerHTML = options;
      if (groupSelect && groupSelect.value !== selectedGroup) groupSelect.value = selectedGroup;

      const group = groupForItem(itemId);
      const frequencyField = grid.querySelector('[data-field="frequencyMode"]')?.closest('.routine-field');
      const timeField = grid.querySelector('[data-field="timeOfDay"]')?.closest('.routine-field');
      if (frequencyField) {
        frequencyField.classList.toggle('inherited-setting', Boolean(group?.applyFrequency));
        frequencyField.querySelector('select')?.toggleAttribute('disabled', Boolean(group?.applyFrequency));
        frequencyField.querySelector('span').textContent = group?.applyFrequency ? `How often — inherited from ${group.title}` : 'How often';
      }
      if (timeField) {
        timeField.classList.toggle('inherited-setting', Boolean(group?.applyTime));
        timeField.querySelector('select')?.toggleAttribute('disabled', Boolean(group?.applyTime));
        timeField.querySelector('span').textContent = group?.applyTime ? `Time — inherited from ${group.title}` : 'Time of day';
      }
    });
  }

  function planGroupHeader(group, count) {
    const schedule = [];
    if (group?.applyTime) schedule.push(MODEL.timeLabel(group.timeOfDay));
    if (group?.applyFrequency) schedule.push(MODEL.frequencyText(group.frequency));
    return `<div class="routine-plan-group-head"><div><h3>${escapeHtml(group?.title || 'No routine group')}</h3>${schedule.length ? `<p>${escapeHtml(schedule.join(' · '))}</p>` : ''}</div><span>${count} action${count === 1 ? '' : 's'}</span>${group ? `<button type="button" data-plan-group-collapse="${escapeHtml(group.id)}" aria-expanded="${group.collapsed ? 'false' : 'true'}">${group.collapsed ? 'Expand' : 'Collapse'}</button>` : ''}</div>`;
  }

  function organisePlanGroups() {
    const target = $('#routineItems');
    if (!target || !target.querySelector('.routine-item')) return;
    const articles = $$('.routine-item[data-routine-item]', target);
    const byId = new Map(articles.map((article) => [article.dataset.routineItem, article]));
    const fragment = document.createDocumentFragment();
    const placed = new Set();

    state.groups.forEach((group) => {
      const itemIds = Object.entries(state.assignments).filter(([, groupId]) => groupId === group.id).map(([itemId]) => itemId).filter((itemId) => byId.has(itemId));
      if (!itemIds.length) return;
      const section = document.createElement('section');
      section.className = `routine-plan-group${group.collapsed ? ' collapsed' : ''}`;
      section.dataset.planGroup = group.id;
      section.innerHTML = planGroupHeader(group, itemIds.length);
      const body = document.createElement('div');
      body.className = 'routine-plan-group-body';
      body.hidden = group.collapsed;
      itemIds.forEach((itemId) => { body.append(byId.get(itemId)); placed.add(itemId); });
      section.append(body);
      fragment.append(section);
    });

    const ungrouped = articles.filter((article) => !placed.has(article.dataset.routineItem));
    if (ungrouped.length) {
      const section = document.createElement('section');
      section.className = 'routine-plan-group routine-plan-group-ungrouped';
      section.innerHTML = planGroupHeader(null, ungrouped.length);
      const body = document.createElement('div');
      body.className = 'routine-plan-group-body';
      ungrouped.forEach((article) => body.append(article));
      section.append(body);
      fragment.append(section);
    }

    target.replaceChildren(fragment);
  }

  function productText(item) {
    if (item.productSelection === 'custom') return item.customProductName || item.productName || '';
    return item.productName || PRODUCTS?.selectionDetails(item.productSelection, item.actionId)?.name || '';
  }

  function summaryItem(item, index) {
    const effective = effectiveItem(item);
    const product = productText(item);
    const method = MODEL.supportsShavingMethod?.(item.actionId)
      ? MODEL.SHAVING_METHODS?.find((entry) => entry.value === item.shavingMethod)?.label
      : '';
    return `<article class="routine-summary-item routine-summary-item-comprehensive"><div class="routine-summary-title"><span>${index + 1}</span><strong>${escapeHtml(item.title)}</strong></div><div class="routine-summary-meta"><span>${escapeHtml(MODEL.timeLabel(effective.timeOfDay))}</span><span>${escapeHtml(MODEL.frequencyText(effective.frequency))}</span>${method ? `<span>${escapeHtml(method)}</span>` : ''}${product ? `<span>${escapeHtml(product)}</span>` : ''}</div><p>${escapeHtml(MODEL.benefitText(item, 'comprehensive'))}</p>${item.notes ? `<p class="routine-summary-notes"><b>Your notes:</b> ${escapeHtml(item.notes)}</p>` : ''}</article>`;
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
      const schedule = [group.applyTime ? MODEL.timeLabel(group.timeOfDay) : '', group.applyFrequency ? MODEL.frequencyText(group.frequency) : ''].filter(Boolean).join(' · ');
      sections.push(`<section class="routine-summary-group routine-summary-custom-group"><div class="routine-summary-group-head"><h3>${escapeHtml(group.title)}</h3>${schedule ? `<span>${escapeHtml(schedule)}</span>` : ''}</div>${groupItems.map(summaryItem).join('')}</section>`);
    });
    const ungrouped = items.filter((item) => !assignedIds.has(item.id));
    if (ungrouped.length) {
      const timeGroups = MODEL.summaryGroups(ungrouped);
      [['morning','Morning routine'],['evening','Evening routine'],['anytime','Flexible / any-time actions']].forEach(([key,label]) => {
        if (timeGroups[key].length) sections.push(`<section class="routine-summary-group"><h3>${label}</h3>${timeGroups[key].map(summaryItem).join('')}</section>`);
      });
    }
    const html = sections.join('');
    if (target.innerHTML !== html) target.innerHTML = html;
  }

  function logItemHtml(item, status, entry) {
    const product = productText(item);
    const effective = effectiveItem(item);
    const method = MODEL.supportsShavingMethod?.(item.actionId)
      ? MODEL.SHAVING_METHODS?.find((option) => option.value === item.shavingMethod)?.label
      : '';
    const details = [MODEL.timeLabel(effective.timeOfDay), status.detail, method, product].filter(Boolean).join(' · ');
    return `<article class="routine-log-item${entry.completed ? ' complete' : ''}"><label class="routine-log-check"><input type="checkbox" data-log-complete="${escapeHtml(item.id)}"${entry.completed ? ' checked' : ''}><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(details)}</small></span></label><input class="routine-log-note" type="text" maxlength="500" placeholder="Optional note" value="${escapeHtml(entry.note || '')}" data-log-note="${escapeHtml(item.id)}"></article>`;
  }

  function renderGroupedLog() {
    const target = $('#routineLogItems');
    const progress = $('#routineLogProgress');
    if (!target) return;
    const routine = readRoutineLocal();
    const selectedDate = $('#routineLogDate')?.value || MODEL.isoDate(new Date());
    if (!routine.items.length) return;
    const due = routine.items.map((item) => {
      const effective = effectiveItem(item);
      return { item, effective, status: MODEL.dueStatus(effective, selectedDate, routine.logs) };
    }).filter((entry) => entry.status.due);
    if (!due.length) {
      target.innerHTML = '<div class="routine-empty">No routine actions are scheduled for this date.</div>';
      if (progress) progress.textContent = '0 actions due';
      return;
    }
    const entries = routine.logs[selectedDate] || {};
    const completed = due.filter(({ item }) => entries[item.id]?.completed).length;
    if (progress) progress.textContent = `${completed}/${due.length} completed`;
    const sections = [];
    const used = new Set();
    state.groups.forEach((group) => {
      const groupDue = due.filter(({ item }) => state.assignments[item.id] === group.id);
      if (!groupDue.length) return;
      groupDue.forEach(({ item }) => used.add(item.id));
      sections.push(`<section class="routine-log-group"><div class="routine-log-group-head"><h3>${escapeHtml(group.title)}</h3>${group.applyFrequency ? `<span>${escapeHtml(MODEL.frequencyText(group.frequency))}</span>` : ''}</div>${groupDue.map(({ item, status }) => logItemHtml(item, status, entries[item.id] || { completed:false,note:'',completedAt:'' })).join('')}</section>`);
    });
    const ungrouped = due.filter(({ item }) => !used.has(item.id));
    if (ungrouped.length) sections.push(`<section class="routine-log-group"><h3>Ungrouped routine actions</h3>${ungrouped.map(({ item, status }) => logItemHtml(item, status, entries[item.id] || { completed:false,note:'',completedAt:'' })).join('')}</section>`);
    target.innerHTML = sections.join('');
  }

  function parseIsoDate(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    return match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : null;
  }

  function completedItemsForDate(date, routine) {
    const entries = routine.logs[date] || {};
    const names = new Map(routine.items.map((item) => [item.id, item.title]));
    return Object.entries(entries).filter(([, entry]) => entry?.completed).map(([itemId]) => names.get(itemId) || 'Routine action');
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
    monthLabel.textContent = state.calendarMonth.toLocaleDateString('en-GB', { month:'long', year:'numeric' });
    weekdays.innerHTML = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((day) => `<span>${day}</span>`).join('');
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
    grid.innerHTML = cells.join('');
  }

  function scheduleRender() {
    if (state.renderFrame || state.rendering) return;
    state.renderFrame = global.requestAnimationFrame(() => {
      state.renderFrame = 0;
      state.rendering = true;
      try {
        ensureStaticLabels();
        ensureCalendarCard();
        ensureGroupManager();
        renderGroupManager();
        enhanceRoutineFields();
        organisePlanGroups();
        renderEnhancedSummary();
        renderGroupedLog();
        renderCalendar();
      } finally {
        state.rendering = false;
      }
    });
  }

  function createGroup() {
    const field = $('#routineGroupName');
    const title = cleanText(field?.value, 80);
    if (!title || state.groups.length >= MAX_GROUPS || state.groups.some((group) => group.title.localeCompare(title, 'en-GB', { sensitivity:'base' }) === 0)) {
      field?.focus();
      return;
    }
    state.groups.push(normaliseGroup({ id: uniqueId('routine-group'), title }, state.groups.length));
    state.pendingRemoveGroupId = '';
    if (field) field.value = '';
    scheduleGroupSave();
    scheduleRender();
  }

  function updateGroup(groupId, field, value, checked) {
    const group = groupById(groupId);
    if (!group) return;
    if (field === 'title') group.title = cleanText(value, 80) || group.title;
    if (field === 'collapsed') group.collapsed = Boolean(checked);
    if (field === 'applyFrequency') group.applyFrequency = Boolean(checked);
    if (field === 'applyTime') group.applyTime = Boolean(checked);
    if (field === 'frequencyMode') group.frequency.mode = MODEL.FREQUENCIES.some((entry) => entry.value === value) ? value : 'daily';
    if (field === 'timesPerWeek') group.frequency.timesPerWeek = Math.max(1, Math.min(14, Math.round(Number(value) || 1)));
    if (field === 'timeOfDay') group.timeOfDay = MODEL.TIMES.some((entry) => entry.value === value) ? value : 'anytime';
    scheduleGroupSave();
    scheduleRender();
  }

  function updateGroupDay(groupId, day, checked) {
    const group = groupById(groupId);
    if (!group || !MODEL.DAYS.includes(day)) return;
    group.frequency.days = MODEL.DAYS.filter((entry) => entry === day ? checked : group.frequency.days.includes(entry));
    scheduleGroupSave();
    scheduleRender();
  }

  function removeGroup(groupId) {
    state.groups = state.groups.filter((group) => group.id !== groupId);
    Object.keys(state.assignments).forEach((itemId) => { if (state.assignments[itemId] === groupId) delete state.assignments[itemId]; });
    state.pendingRemoveGroupId = '';
    scheduleGroupSave();
    scheduleRender();
  }

  function assignItem(itemId, groupId) {
    if (groupId && groupById(groupId)) state.assignments[itemId] = groupId;
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
      input.dispatchEvent(new Event('change', { bubbles:true }));
    }
    scheduleRender();
  }

  function bindEvents() {
    document.addEventListener('click', (event) => {
      if (event.target.closest('#createRoutineGroup')) { createGroup(); return; }
      const collapse = event.target.closest('[data-group-collapse], [data-plan-group-collapse]');
      if (collapse) {
        const id = collapse.dataset.groupCollapse || collapse.dataset.planGroupCollapse;
        const group = groupById(id);
        if (group) updateGroup(id, 'collapsed', '', !group.collapsed);
        return;
      }
      const removeRequest = event.target.closest('[data-group-remove-request]');
      if (removeRequest) { state.pendingRemoveGroupId = removeRequest.dataset.groupRemoveRequest; scheduleRender(); return; }
      const removeConfirm = event.target.closest('[data-group-remove-confirm]');
      if (removeConfirm) { removeGroup(removeConfirm.dataset.groupRemoveConfirm); return; }
      if (event.target.closest('[data-group-remove-cancel]')) { state.pendingRemoveGroupId = ''; scheduleRender(); return; }
      const monthMove = event.target.closest('[data-calendar-move]');
      if (monthMove) { moveCalendar(monthMove.dataset.calendarMove === 'previous' ? -1 : 1); return; }
      const dateButton = event.target.closest('[data-calendar-date]');
      if (dateButton) selectCalendarDate(dateButton.dataset.calendarDate);
    });

    document.addEventListener('keydown', (event) => {
      if (event.target?.id === 'routineGroupName' && event.key === 'Enter') { event.preventDefault(); createGroup(); }
    });

    document.addEventListener('change', (event) => {
      const groupSelect = event.target.closest('[data-routine-group-select]');
      if (groupSelect) { assignItem(groupSelect.dataset.routineGroupSelect, groupSelect.value); return; }
      const groupField = event.target.closest('[data-group-field]');
      if (groupField) {
        updateGroup(groupField.dataset.groupId, groupField.dataset.groupField, groupField.value, groupField.checked);
        return;
      }
      const groupDay = event.target.closest('[data-group-day]');
      if (groupDay) { updateGroupDay(groupDay.dataset.groupId, groupDay.dataset.groupDay, groupDay.checked); return; }
      if (event.target?.id === 'routineLogDate') {
        const date = parseIsoDate(event.target.value);
        if (date) state.calendarMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        scheduleRender();
      }
    });

    document.addEventListener('blur', (event) => {
      const title = event.target.closest('[data-group-title]');
      if (title) updateGroup(title.dataset.groupTitle, 'title', title.value, false);
    }, true);
  }

  function observeRoutine() {
    const root = $('#routine');
    if (!root || typeof MutationObserver === 'undefined') return;
    const observer = new MutationObserver(() => scheduleRender());
    observer.observe(root, { childList:true, subtree:true });
    global.addEventListener?.('pagehide', () => observer.disconnect(), { once:true });
  }

  function boot() {
    ensureStaticLabels();
    ensureCalendarCard();
    ensureGroupManager();
    bindEvents();
    observeRoutine();
    attachAuth();
    scheduleRender();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

/* Baseline Natural Skincare — sitewide My Routine implementation. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_SITEWIDE_V4__) return;
  global.__BASELINE_SKINCARE_ROUTINE_SITEWIDE_V4__ = true;

  const UI = global.BASELINE_RoutineSystem;
  const MODEL = global.BASELINE_SKINCARE_ROUTINE_MODEL;
  const PRODUCTS = global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
  if (!UI || !MODEL) return;

  const GROUP_API = '/systems/baseline-natural-skincare/api/routine_groups.php';
  const ROUTINE_STORAGE_PREFIX = '__bl_skincare_routine_v1__::';
  const GROUP_STORAGE_PREFIX = '__bl_skincare_routine_groups_v3__::';
  const LEGACY_GROUP_STORAGE_PREFIXES = ['__bl_skincare_routine_groups_v2__::','__bl_skincare_routine_groups_v1__::'];
  const SAVE_DELAY = 450;
  const MAX_GROUPS = 30;
  const DAYS = MODEL.DAYS || ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  const state = {
    owner:'guest', authed:false, groups:[], assignments:{}, pendingRemoveGroupId:'',
    calendarView:'month', calendarAnchor:new Date(), expandedSteps:new Set(),
    saveTimer:0, loaded:false, observer:null, patching:false
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const esc = UI.escapeHtml;

  function cleanText(value, maximum) {
    return String(value == null ? '' : value).trim().slice(0, maximum);
  }

  function normaliseOwner(value) {
    return String(value || '').trim().toLocaleLowerCase('en-GB') || 'guest';
  }

  function uniqueId(prefix = 'group') {
    return global.crypto?.randomUUID
      ? `${prefix}-${global.crypto.randomUUID()}`
      : `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function routineStorageKey(owner = state.owner) {
    return `${ROUTINE_STORAGE_PREFIX}${normaliseOwner(owner)}`;
  }

  function groupStorageKey(owner = state.owner) {
    return `${GROUP_STORAGE_PREFIX}${normaliseOwner(owner)}`;
  }

  function normaliseGroup(raw, index = 0) {
    const source = raw && typeof raw === 'object' ? raw : {};
    const id = cleanText(source.id || `routine-group-${index + 1}`, 80).replace(/[^a-zA-Z0-9_-]/g, '-');
    const title = cleanText(source.title, 80);
    if (!id || !title) return null;
    return {
      id,
      title,
      collapsed:Boolean(source.collapsed),
      applyFrequency:Boolean(source.applyFrequency),
      frequency:MODEL.normaliseFrequency(source.frequency),
      applyTime:Boolean(source.applyTime),
      timeOfDay:MODEL.TIMES.some((entry) => entry.value === source.timeOfDay) ? source.timeOfDay : 'anytime'
    };
  }

  function normaliseGroups(value) {
    const output = [];
    const ids = new Set();
    const titles = new Set();
    (Array.isArray(value) ? value : []).slice(0, MAX_GROUPS).forEach((raw, index) => {
      const group = normaliseGroup(raw, index);
      if (!group) return;
      if (ids.has(group.id)) group.id = `${group.id}-${index + 1}`;
      const titleKey = group.title.toLocaleLowerCase('en-GB');
      if (titles.has(titleKey)) return;
      ids.add(group.id);
      titles.add(titleKey);
      output.push(group);
    });
    return output;
  }

  function normaliseAssignments(value, groups = state.groups) {
    const validGroups = new Set(groups.map((group) => group.id));
    const output = {};
    Object.entries(value && typeof value === 'object' ? value : {}).slice(0, 200).forEach(([itemId, groupId]) => {
      const item = cleanText(itemId, 80);
      const group = cleanText(groupId, 80);
      if (item && validGroups.has(group)) output[item] = group;
    });
    return output;
  }

  function readRoutineLocal() {
    try {
      const raw = global.localStorage?.getItem(routineStorageKey());
      const value = raw ? JSON.parse(raw) : null;
      return {
        visibility:value?.visibility === 'public' ? 'public' : 'private',
        items:MODEL.normaliseRoutine(value?.items || value?.routine),
        logs:MODEL.normaliseLogs(value?.logs)
      };
    } catch (_error) {
      return { visibility:'private', items:[], logs:{} };
    }
  }

  function readGroupLocal(owner = state.owner) {
    try {
      let raw = global.localStorage?.getItem(groupStorageKey(owner));
      if (!raw) {
        for (const prefix of LEGACY_GROUP_STORAGE_PREFIXES) {
          raw = global.localStorage?.getItem(`${prefix}${normaliseOwner(owner)}`);
          if (raw) break;
        }
      }
      const value = raw ? JSON.parse(raw) : null;
      const groups = normaliseGroups(value?.groups);
      return { groups, assignments:normaliseAssignments(value?.assignments, groups) };
    } catch (_error) {
      return { groups:[], assignments:{} };
    }
  }

  function writeGroupLocal() {
    try {
      global.localStorage?.setItem(groupStorageKey(), JSON.stringify({
        groups:state.groups,
        assignments:state.assignments,
        updatedAt:new Date().toISOString()
      }));
    } catch (_error) {}
  }

  async function groupRequest(options = {}) {
    try {
      const response = await fetch(GROUP_API, {
        method:options.method || 'GET', credentials:'same-origin',
        headers:Object.assign({ Accept:'application/json' }, options.body ? { 'Content-Type':'application/json' } : {}),
        body:options.body ? JSON.stringify(options.body) : undefined
      });
      let data = null;
      try { data = await response.json(); } catch (_error) {}
      return data && typeof data === 'object' ? data : { ok:false, error:`http_${response.status}` };
    } catch (_error) {
      return { ok:false, error:'network_error' };
    }
  }

  async function saveGroupsNow() {
    clearTimeout(state.saveTimer);
    state.saveTimer = 0;
    writeGroupLocal();
    if (state.authed) await groupRequest({ method:'POST', body:{ groups:state.groups, assignments:state.assignments } });
  }

  function scheduleGroupSave() {
    writeGroupLocal();
    clearTimeout(state.saveTimer);
    state.saveTimer = global.setTimeout(saveGroupsNow, SAVE_DELAY);
  }

  function groupById(id) {
    return state.groups.find((group) => group.id === id) || null;
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
    return `<option value="">No routine group</option>${state.groups.map((group) => `<option value="${esc(group.id)}"${group.id === selected ? ' selected' : ''}>${esc(group.title)}</option>`).join('')}`;
  }

  function selectOptions(values, selected) {
    return (values || []).map((entry) => `<option value="${esc(entry.value)}"${entry.value === selected ? ' selected' : ''}>${esc(entry.label)}</option>`).join('');
  }

  function productText(item) {
    if (item.productSelection === 'custom') return item.customProductName || item.productName || '';
    return item.productName || PRODUCTS?.selectionDetails(item.productSelection, item.actionId)?.name || '';
  }

  function methodText(item) {
    if (!MODEL.supportsShavingMethod?.(item.actionId)) return '';
    return MODEL.SHAVING_METHODS?.find((entry) => entry.value === item.shavingMethod)?.label || '';
  }

  function ensureTemplateClasses() {
    const root = $('#routine');
    if (!root) return;
    UI.applyTemplate(root);
    root.querySelector('.routine-shell')?.classList.add('bl-routine-shell');
    root.querySelector('.routine-subtabs')?.classList.add('bl-routine-tabs');
    $$('.routine-subtab', root).forEach((button) => button.classList.add('bl-routine-tab'));
    $$('.routine-panel', root).forEach((panel) => panel.classList.add('bl-routine-panel'));
    $$('.routine-card', root).forEach((card) => card.classList.add('bl-routine-card'));
  }

  function ensureCalendarCard() {
    const panel = $('[data-routine-panel="log"]');
    const logCard = panel?.querySelector('.routine-card');
    if (!panel || !logCard) return;
    let card = panel.querySelector('.routine-calendar-card');
    if (!card) {
      card = document.createElement('section');
      logCard.insertAdjacentElement('afterend', card);
    }
    card.className = 'card routine-card routine-card-full routine-calendar-card bl-routine-card bl-routine-calendar';
    const html = `<div class="routine-calendar-head bl-routine-calendar-head">
      <div><h2>Skincare Calendar</h2><p class="note">Select Week or Month. Each day opens directly in Routine Log.</p></div>
      <div class="routine-calendar-controls bl-routine-calendar-controls">
        <div class="routine-calendar-view-tabs bl-routine-calendar-view-tabs" role="tablist" aria-label="Calendar view">
          <button type="button" class="routine-mini routine-calendar-view" data-skincare-calendar-view="week" aria-selected="${state.calendarView === 'week' ? 'true' : 'false'}">Week</button>
          <button type="button" class="routine-mini routine-calendar-view" data-skincare-calendar-view="month" aria-selected="${state.calendarView === 'month' ? 'true' : 'false'}">Month</button>
        </div>
        <div class="routine-calendar-nav bl-routine-calendar-nav">
          <button type="button" data-skincare-calendar-move="previous" aria-label="Previous period">←</button>
          <strong id="routineCalendarLabel"></strong>
          <button type="button" data-skincare-calendar-today>Today</button>
          <button type="button" data-skincare-calendar-move="next" aria-label="Next period">→</button>
        </div>
      </div>
    </div>
    <div class="routine-calendar-weekdays" id="routineCalendarWeekdays" aria-hidden="true"></div>
    <div class="routine-calendar-grid" id="routineCalendarGrid"></div>`;
    UI.renderHtml(card, html, { preserveFocus:false });
  }

  function groupDayControls(group) {
    if (!group.applyFrequency || group.frequency.mode !== 'days') return '';
    return `<fieldset class="routine-group-days"><legend>Group days</legend>${DAYS.map((day) => `<label><input type="checkbox" data-group-day="${esc(day)}" data-group-id="${esc(group.id)}"${group.frequency.days.includes(day) ? ' checked' : ''}><span>${esc(day.slice(0, 3))}</span></label>`).join('')}</fieldset>`;
  }

  function groupWeeklyControl(group) {
    if (!group.applyFrequency || group.frequency.mode !== 'weekly') return '';
    return `<label class="routine-field"><span>Times each week</span><input type="number" min="1" max="14" value="${group.frequency.timesPerWeek}" data-group-field="timesPerWeek" data-group-id="${esc(group.id)}"></label>`;
  }

  function ensureGroupManager() {
    const planCard = $('[data-routine-panel="plan"] .routine-card');
    const addRow = planCard?.querySelector('.routine-add-row');
    if (!planCard || !addRow) return;
    let manager = planCard.querySelector('.routine-group-manager');
    if (!manager) {
      manager = document.createElement('section');
      manager.className = 'routine-group-manager bl-routine-group-manager';
      addRow.insertAdjacentElement('beforebegin', manager);
    }
    const html = `<div class="routine-group-manager-head"><div><h3>Create Routine Group</h3><p class="note">Use the same group structure as other My Routine systems: shared time, shared frequency and expandable details.</p></div></div>
      <div class="routine-group-create"><input id="routineGroupName" type="text" maxlength="80" autocomplete="off" placeholder="Name a routine group…"><button id="createRoutineGroup" type="button">Create group</button></div>
      <div id="routineGroupList" class="routine-group-list" aria-live="polite"></div>`;
    UI.renderHtml(manager, html);
  }

  function renderGroupManager() {
    const target = $('#routineGroupList');
    if (!target) return;
    const items = readRoutineLocal().items;
    const html = state.groups.length ? state.groups.map((group) => {
      const count = items.filter((item) => state.assignments[item.id] === group.id).length;
      const confirmation = state.pendingRemoveGroupId === group.id
        ? `<span class="routine-group-remove-confirm"><span>Remove group?</span><button type="button" data-group-remove-confirm="${esc(group.id)}">Yes</button><button type="button" data-group-remove-cancel>Cancel</button></span>`
        : `<button type="button" class="routine-group-remove" data-group-remove-request="${esc(group.id)}" aria-label="Remove ${esc(group.title)}">×</button>`;
      return `<article class="routine-group-row bl-routine-summary-card" data-routine-group="${esc(group.id)}">
        <div class="routine-group-row-head"><button type="button" class="routine-group-collapse" data-group-collapse="${esc(group.id)}" aria-expanded="${group.collapsed ? 'false' : 'true'}">${group.collapsed ? 'Expand' : 'Collapse'}</button><input type="text" maxlength="80" value="${esc(group.title)}" data-group-title="${esc(group.id)}" aria-label="Routine group name"><span class="routine-group-count">${count} action${count === 1 ? '' : 's'}</span>${confirmation}</div>
        <div class="routine-group-settings bl-routine-details"${group.collapsed ? ' hidden' : ''}>
          <label class="routine-group-toggle"><input type="checkbox" data-group-field="applyTime" data-group-id="${esc(group.id)}"${group.applyTime ? ' checked' : ''}><span>Set time for this group</span></label>
          <label class="routine-field"><span>Group time</span><select data-group-field="timeOfDay" data-group-id="${esc(group.id)}"${group.applyTime ? '' : ' disabled'}>${selectOptions(MODEL.TIMES, group.timeOfDay)}</select></label>
          <label class="routine-group-toggle"><input type="checkbox" data-group-field="applyFrequency" data-group-id="${esc(group.id)}"${group.applyFrequency ? ' checked' : ''}><span>Set “How often” for this group</span></label>
          <label class="routine-field"><span>Group frequency</span><select data-group-field="frequencyMode" data-group-id="${esc(group.id)}"${group.applyFrequency ? '' : ' disabled'}>${selectOptions(MODEL.FREQUENCIES, group.frequency.mode)}</select></label>
          ${groupWeeklyControl(group)}${groupDayControls(group)}
        </div>
      </article>`;
    }).join('') : '<div class="routine-group-empty">No routine groups created yet.</div>';
    UI.renderHtml(target, html);
  }

  function enhanceRoutineItems() {
    const routine = readRoutineLocal();
    const itemMap = new Map(routine.items.map((item) => [item.id, item]));
    Object.keys(state.assignments).forEach((itemId) => { if (!itemMap.has(itemId)) delete state.assignments[itemId]; });

    $$('.routine-item[data-routine-item]').forEach((article) => {
      const itemId = article.dataset.routineItem;
      const item = itemMap.get(itemId);
      if (!item) return;
      article.classList.add('bl-routine-summary-card');
      article.dataset.blRoutineDisclosureCard = 'true';
      const grid = article.querySelector('.routine-item-grid');
      if (!grid) return;

      let groupField = grid.querySelector('[data-routine-group-field]');
      if (!groupField) {
        groupField = document.createElement('label');
        groupField.className = 'routine-field routine-group-field';
        groupField.dataset.routineGroupField = itemId;
        groupField.innerHTML = `<span>Routine group</span><select data-routine-group-select="${esc(itemId)}"></select>`;
        grid.prepend(groupField);
      }
      const groupSelect = groupField.querySelector('select');
      if (groupSelect) {
        const options = groupOptions(state.assignments[itemId] || '');
        if (groupSelect.innerHTML !== options) groupSelect.innerHTML = options;
        groupSelect.value = state.assignments[itemId] || '';
      }

      const group = groupForItem(itemId);
      const frequencySelect = grid.querySelector('[data-field="frequencyMode"]');
      const timeSelect = grid.querySelector('[data-field="timeOfDay"]');
      if (frequencySelect) frequencySelect.disabled = Boolean(group?.applyFrequency);
      if (timeSelect) timeSelect.disabled = Boolean(group?.applyTime);

      const header = article.querySelector('.routine-item-head');
      const actions = article.querySelector('.routine-item-actions');
      if (!header || !actions) return;
      const detailId = `skincareRoutineDetails-${itemId.replace(/[^a-zA-Z0-9_-]/g, '-')}`;
      let body = article.querySelector(':scope > .bl-routine-details');
      if (!body) {
        body = document.createElement('div');
        body.className = 'bl-routine-details';
        body.id = detailId;
        header.insertAdjacentElement('afterend', body);
        body.append(grid);
        const days = article.querySelector(':scope > .routine-days');
        if (days) body.append(days);
      }
      body.id = detailId;
      body.hidden = !state.expandedSteps.has(itemId);

      let toggle = actions.querySelector('[data-skincare-step-toggle]');
      if (!toggle) {
        toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'bl-routine-disclosure';
        toggle.dataset.skincareStepToggle = itemId;
        actions.prepend(toggle);
      }
      toggle.setAttribute('aria-controls', detailId);
      toggle.setAttribute('aria-expanded', state.expandedSteps.has(itemId) ? 'true' : 'false');
      toggle.textContent = state.expandedSteps.has(itemId) ? 'Close step' : 'Edit step';

      let preview = article.querySelector(':scope > .bl-routine-preview-chips');
      if (!preview) {
        preview = document.createElement('div');
        preview.className = 'bl-routine-preview-chips';
        header.insertAdjacentElement('afterend', preview);
      }
      const effective = effectiveItem(item);
      const chips = [
        group?.title || '', MODEL.timeLabel(effective.timeOfDay), MODEL.frequencyText(effective.frequency),
        methodText(item), productText(item) ? `Product / Recipe: ${productText(item)}` : 'Product / Recipe: Choose…'
      ].filter(Boolean);
      preview.innerHTML = chips.map((value, index) => index === chips.length - 1
        ? `<button type="button" class="routine-product-preview-button" data-open-product-step="${esc(itemId)}">${esc(value)}</button>`
        : `<span>${esc(value)}</span>`).join('');
      preview.hidden = state.expandedSteps.has(itemId);
    });
  }

  function planGroupHeader(group, count) {
    const schedule = [];
    if (group?.applyTime) schedule.push(MODEL.timeLabel(group.timeOfDay));
    if (group?.applyFrequency) schedule.push(MODEL.frequencyText(group.frequency));
    return `<div class="routine-plan-group-head bl-routine-entry-head"><div><h3>${esc(group?.title || 'No routine group')}</h3>${schedule.length ? `<p>${esc(schedule.join(' · '))}</p>` : ''}</div><span>${count} action${count === 1 ? '' : 's'}</span>${group ? `<button type="button" class="bl-routine-disclosure" data-plan-group-collapse="${esc(group.id)}" aria-expanded="${group.collapsed ? 'false' : 'true'}">${group.collapsed ? 'Expand group' : 'Collapse group'}</button>` : ''}</div>`;
  }

  function organisePlanGroups() {
    const target = $('#routineItems');
    if (!target) return;
    const articles = $$('.routine-item[data-routine-item]', target);
    if (!articles.length) return;
    const byId = new Map(articles.map((article) => [article.dataset.routineItem, article]));
    const fragment = document.createDocumentFragment();
    const placed = new Set();

    state.groups.forEach((group) => {
      const itemIds = Object.entries(state.assignments).filter(([, groupId]) => groupId === group.id).map(([itemId]) => itemId).filter((itemId) => byId.has(itemId));
      if (!itemIds.length) return;
      const section = document.createElement('section');
      section.className = 'routine-plan-group bl-routine-group';
      section.dataset.planGroup = group.id;
      section.innerHTML = planGroupHeader(group, itemIds.length);
      const body = document.createElement('div');
      body.className = 'routine-plan-group-body bl-routine-details';
      body.hidden = group.collapsed;
      itemIds.forEach((itemId) => { body.append(byId.get(itemId)); placed.add(itemId); });
      section.append(body);
      fragment.append(section);
    });

    const ungrouped = articles.filter((article) => !placed.has(article.dataset.routineItem));
    if (ungrouped.length) {
      const section = document.createElement('section');
      section.className = 'routine-plan-group routine-plan-group-ungrouped bl-routine-group';
      section.innerHTML = planGroupHeader(null, ungrouped.length);
      const body = document.createElement('div');
      body.className = 'routine-plan-group-body bl-routine-details';
      ungrouped.forEach((article) => body.append(article));
      section.append(body);
      fragment.append(section);
    }
    target.replaceChildren(fragment);
  }

  function summaryCard(item, index) {
    const effective = effectiveItem(item);
    const rows = [
      { label:'Routine group', value:groupForItem(item.id)?.title || 'No routine group' },
      { label:'Time of day', value:MODEL.timeLabel(effective.timeOfDay) },
      { label:'Frequency', value:MODEL.frequencyText(effective.frequency) },
      { label:'Method', value:methodText(item) },
      { label:'Product / recipe', value:productText(item) || 'Not selected' }
    ];
    return `<article class="routine-summary-item routine-summary-item-comprehensive bl-routine-summary-card">
      <div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${index + 1}</span><strong>${esc(item.title)}</strong></div></div>
      <div class="bl-routine-summary-grid">
        <section class="bl-routine-summary-section"><h4>Routine details</h4>${UI.summaryRows(rows)}</section>
        <section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(MODEL.benefitText(item, 'comprehensive'))}</p>${item.notes ? `<p class="routine-summary-notes"><strong>Your notes:</strong> ${esc(item.notes)}</p>` : ''}</section>
      </div>
    </article>`;
  }

  function renderSummary() {
    const target = $('#routineSummary');
    if (!target) return;
    const items = readRoutineLocal().items;
    if (!items.length) return;
    const used = new Set();
    const sections = [];
    state.groups.forEach((group) => {
      const groupItems = items.filter((item) => state.assignments[item.id] === group.id);
      if (!groupItems.length) return;
      groupItems.forEach((item) => used.add(item.id));
      sections.push(`<section class="routine-summary-group bl-routine-group"><div class="routine-summary-group-head"><h3>${esc(group.title)}</h3></div><div class="bl-routine-summary-list">${groupItems.map(summaryCard).join('')}</div></section>`);
    });
    const ungrouped = items.filter((item) => !used.has(item.id));
    if (ungrouped.length) sections.push(`<section class="routine-summary-group bl-routine-group"><div class="routine-summary-group-head"><h3>Ungrouped routine actions</h3></div><div class="bl-routine-summary-list">${ungrouped.map(summaryCard).join('')}</div></section>`);
    UI.renderHtml(target, sections.join(''));
  }

  function logItem(item, status, entry, selectedDate) {
    const effective = effectiveItem(item);
    const details = [MODEL.timeLabel(effective.timeOfDay), status.detail, methodText(item), productText(item)].filter(Boolean).join(' · ');
    return `<article class="routine-log-item bl-routine-entry${entry.completed ? ' complete' : ''}">
      <label class="routine-log-check"><input type="checkbox" data-log-complete="${esc(item.id)}" data-log-date="${esc(selectedDate)}"${entry.completed ? ' checked' : ''}><span><strong>${esc(item.title)}</strong><small>${esc(details)}</small></span></label>
      <input class="routine-log-note" type="text" maxlength="500" placeholder="Optional note" value="${esc(entry.note || '')}" data-log-note="${esc(item.id)}" data-log-date="${esc(selectedDate)}">
    </article>`;
  }

  function renderGroupedLog() {
    const target = $('#routineLogItems');
    const progress = $('#routineLogProgress');
    if (!target) return;
    const routine = readRoutineLocal();
    const selectedDate = $('#routineLogDate')?.value || UI.isoDate(new Date());
    if (!routine.items.length) return;
    const due = routine.items.map((item) => {
      const effective = effectiveItem(item);
      return { item, status:MODEL.dueStatus(effective, selectedDate, routine.logs) };
    }).filter((entry) => entry.status.due);
    const entries = routine.logs[selectedDate] || {};
    const completed = due.filter(({ item }) => entries[item.id]?.completed).length;
    if (progress) progress.textContent = `${completed}/${due.length} completed`;
    if (!due.length) {
      UI.renderHtml(target, '<div class="routine-empty">No routine actions are scheduled for this date.</div>');
      return;
    }
    const sections = [];
    const used = new Set();
    state.groups.forEach((group) => {
      const groupDue = due.filter(({ item }) => state.assignments[item.id] === group.id);
      if (!groupDue.length) return;
      groupDue.forEach(({ item }) => used.add(item.id));
      sections.push(`<section class="routine-log-group bl-routine-group"><div class="routine-log-group-head"><h3>${esc(group.title)}</h3></div>${groupDue.map(({ item, status }) => logItem(item, status, entries[item.id] || { completed:false,note:'',completedAt:'' }, selectedDate)).join('')}</section>`);
    });
    const ungrouped = due.filter(({ item }) => !used.has(item.id));
    if (ungrouped.length) sections.push(`<section class="routine-log-group bl-routine-group"><h3>Ungrouped routine actions</h3>${ungrouped.map(({ item, status }) => logItem(item, status, entries[item.id] || { completed:false,note:'',completedAt:'' }, selectedDate)).join('')}</section>`);
    UI.renderHtml(target, sections.join(''));
  }

  function completedForDate(date, routine) {
    const entries = routine.logs[date] || {};
    const names = new Map(routine.items.map((item) => [item.id, item.title]));
    return Object.entries(entries).filter(([, entry]) => entry?.completed).map(([itemId]) => names.get(itemId)).filter(Boolean);
  }

  function monthDayButton(date, anchor, routine) {
    const iso = UI.isoDate(date);
    const completed = completedForDate(iso, routine);
    const selected = iso === ($('#routineLogDate')?.value || UI.isoDate(new Date()));
    const today = iso === UI.todayIso();
    const future = UI.isFutureDate(iso);
    const classes = ['routine-calendar-day'];
    if (completed.length) classes.push('has-routine');
    if (selected) classes.push('selected');
    if (today) classes.push('today');
    if (future) classes.push('future-date');
    if (date.getMonth() !== anchor.getMonth()) classes.push('outside-month');
    return `<button type="button" class="${classes.join(' ')}" data-calendar-date="${iso}"${future ? ' disabled aria-disabled="true"' : ''} title="${esc(completed.length ? completed.join(', ') : 'No completed routine actions')}"><span class="routine-calendar-number">${date.getDate()}</span>${completed.length ? `<span class="routine-calendar-count">${completed.length}</span>` : ''}</button>`;
  }

  function renderCalendar() {
    const grid = $('#routineCalendarGrid');
    const label = $('#routineCalendarLabel');
    const weekdays = $('#routineCalendarWeekdays');
    if (!grid || !label || !weekdays) return;
    const routine = readRoutineLocal();
    const selectedDate = $('#routineLogDate')?.value || UI.isoDate(new Date());
    $$('.routine-calendar-view').forEach((button) => button.setAttribute('aria-selected', button.dataset.skincareCalendarView === state.calendarView ? 'true' : 'false'));

    if (state.calendarView === 'week') {
      const bounds = UI.weekBounds(state.calendarAnchor);
      label.textContent = `${bounds.start.toLocaleDateString('en-GB', { day:'numeric', month:'short' })} – ${bounds.end.toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' })}`;
      weekdays.hidden = true;
      grid.className = 'routine-calendar-grid bl-routine-week-list';
      UI.renderHtml(grid, UI.weekDates(state.calendarAnchor).map((date) => {
        const completed = completedForDate(UI.isoDate(date), routine);
        return UI.weekRow(date, { count:completed.length, details:completed, selectedDate, disabled:UI.isFutureDate(UI.isoDate(date)) });
      }).join(''), { preserveFocus:false });
      return;
    }

    const anchor = new Date(state.calendarAnchor.getFullYear(), state.calendarAnchor.getMonth(), 1);
    label.textContent = anchor.toLocaleDateString('en-GB', { month:'long', year:'numeric' });
    weekdays.hidden = false;
    weekdays.innerHTML = DAYS.map((day) => `<span>${esc(day.slice(0, 3))}</span>`).join('');
    grid.className = 'routine-calendar-grid month-view';
    UI.renderHtml(grid, UI.monthDates(anchor).map((date) => monthDayButton(date, anchor, routine)).join(''), { preserveFocus:false });
  }

  function patch() {
    if (state.patching) return;
    state.patching = true;
    try {
      ensureTemplateClasses();
      ensureCalendarCard();
      ensureGroupManager();
      renderGroupManager();
      enhanceRoutineItems();
      organisePlanGroups();
      renderSummary();
      renderGroupedLog();
      renderCalendar();
      UI.applyTemplate($('#routine'));
    } finally {
      state.patching = false;
    }
  }

  function schedulePatch() {
    if (state.observer?.refresh) state.observer.refresh();
    else global.requestAnimationFrame(patch);
  }

  function createGroup() {
    const field = $('#routineGroupName');
    const title = cleanText(field?.value, 80);
    if (!title || state.groups.length >= MAX_GROUPS || state.groups.some((group) => group.title.localeCompare(title, 'en-GB', { sensitivity:'base' }) === 0)) {
      field?.focus();
      return;
    }
    state.groups.push(normaliseGroup({ id:uniqueId('routine-group'), title }, state.groups.length));
    if (field) field.value = '';
    scheduleGroupSave();
    schedulePatch();
  }

  function updateGroup(id, field, value, checked) {
    const group = groupById(id);
    if (!group) return;
    if (field === 'title') group.title = cleanText(value, 80) || group.title;
    if (field === 'applyFrequency') group.applyFrequency = Boolean(checked);
    if (field === 'applyTime') group.applyTime = Boolean(checked);
    if (field === 'frequencyMode') group.frequency.mode = MODEL.FREQUENCIES.some((entry) => entry.value === value) ? value : 'daily';
    if (field === 'timesPerWeek') group.frequency.timesPerWeek = Math.max(1, Math.min(14, Math.round(Number(value) || 1)));
    if (field === 'timeOfDay') group.timeOfDay = MODEL.TIMES.some((entry) => entry.value === value) ? value : 'anytime';
    scheduleGroupSave();
    schedulePatch();
  }

  function updateGroupDay(id, day, checked) {
    const group = groupById(id);
    if (!group || !DAYS.includes(day)) return;
    group.frequency.days = DAYS.filter((entry) => entry === day ? checked : group.frequency.days.includes(entry));
    scheduleGroupSave();
    schedulePatch();
  }

  function removeGroup(id) {
    state.groups = state.groups.filter((group) => group.id !== id);
    Object.keys(state.assignments).forEach((itemId) => { if (state.assignments[itemId] === id) delete state.assignments[itemId]; });
    state.pendingRemoveGroupId = '';
    scheduleGroupSave();
    schedulePatch();
  }

  function assignItem(itemId, groupId) {
    if (groupId && groupById(groupId)) state.assignments[itemId] = groupId;
    else delete state.assignments[itemId];
    scheduleGroupSave();
    schedulePatch();
  }

  function moveCalendar(direction) {
    const amount = direction === 'next' ? 1 : -1;
    const anchor = new Date(state.calendarAnchor);
    if (state.calendarView === 'week') anchor.setDate(anchor.getDate() + (amount * 7));
    else anchor.setMonth(anchor.getMonth() + amount, 1);
    state.calendarAnchor = anchor;
    schedulePatch();
  }

  function selectDate(date) {
    const clamped = UI.clampLogDate(date);
    const parsed = UI.parseIsoDate(clamped);
    if (!parsed || UI.isFutureDate(date)) return;
    state.calendarAnchor = parsed;
    const input = $('#routineLogDate');
    if (input) {
      input.value = clamped;
      input.dispatchEvent(new Event('change', { bubbles:true }));
    }
    schedulePatch();
  }

  function bindEvents() {
    /* The base routine saves text fields on change. Prevent only its input-time
       full rerender so the cursor remains inside the field while typing. */
    document.addEventListener('input', (event) => {
      const control = event.target?.closest?.('#routineItems [data-field="title"],#routineItems [data-field="notes"],#routineItems [data-field="customProductName"]');
      if (control) event.stopImmediatePropagation();
    }, true);

    document.addEventListener('click', (event) => {
      if (event.target.closest('#createRoutineGroup')) { createGroup(); return; }
      const stepToggle = event.target.closest('[data-skincare-step-toggle]');
      if (stepToggle) {
        event.preventDefault();
        event.stopPropagation();
        const id = stepToggle.dataset.skincareStepToggle;
        if (state.expandedSteps.has(id)) state.expandedSteps.delete(id); else state.expandedSteps.add(id);
        schedulePatch();
        return;
      }
      const productButton = event.target.closest('[data-open-product-step]');
      if (productButton) {
        event.preventDefault();
        const id = productButton.dataset.openProductStep;
        state.expandedSteps.add(id);
        schedulePatch();
        global.setTimeout(() => $(`[data-routine-item="${CSS.escape(id)}"] [data-field="productSelection"]`)?.focus(), 40);
        return;
      }
      const collapse = event.target.closest('[data-group-collapse],[data-plan-group-collapse]');
      if (collapse) {
        const id = collapse.dataset.groupCollapse || collapse.dataset.planGroupCollapse;
        const group = groupById(id);
        if (group) { group.collapsed = !group.collapsed; scheduleGroupSave(); schedulePatch(); }
        return;
      }
      const removeRequest = event.target.closest('[data-group-remove-request]');
      if (removeRequest) { state.pendingRemoveGroupId = removeRequest.dataset.groupRemoveRequest; schedulePatch(); return; }
      const removeConfirm = event.target.closest('[data-group-remove-confirm]');
      if (removeConfirm) { removeGroup(removeConfirm.dataset.groupRemoveConfirm); return; }
      if (event.target.closest('[data-group-remove-cancel]')) { state.pendingRemoveGroupId = ''; schedulePatch(); return; }
      const view = event.target.closest('[data-skincare-calendar-view]');
      if (view) { state.calendarView = view.dataset.skincareCalendarView === 'week' ? 'week' : 'month'; state.calendarAnchor = UI.localDate($('#routineLogDate')?.value || new Date()); schedulePatch(); return; }
      const move = event.target.closest('[data-skincare-calendar-move]');
      if (move) { moveCalendar(move.dataset.skincareCalendarMove); return; }
      if (event.target.closest('[data-skincare-calendar-today]')) { selectDate(UI.isoDate(new Date())); return; }
      const date = event.target.closest('[data-calendar-date]');
      if (date && date.closest('.routine-calendar-card')) selectDate(date.dataset.calendarDate);
    }, true);

    document.addEventListener('change', (event) => {
      const groupSelect = event.target.closest('[data-routine-group-select]');
      if (groupSelect) { assignItem(groupSelect.dataset.routineGroupSelect, groupSelect.value); return; }
      const groupField = event.target.closest('[data-group-field]');
      if (groupField) { updateGroup(groupField.dataset.groupId, groupField.dataset.groupField, groupField.value, groupField.checked); return; }
      const groupDay = event.target.closest('[data-group-day]');
      if (groupDay) { updateGroupDay(groupDay.dataset.groupId, groupDay.dataset.groupDay, groupDay.checked); return; }
      if (event.target?.id === 'routineLogDate') {
        event.target.value = UI.configureLogDateInput(event.target, event.target.value);
        state.calendarAnchor = UI.localDate(event.target.value);
        global.setTimeout(schedulePatch, 0);
      }
      if (event.target.closest('#routineItems [data-field],#routineLogItems [data-log-complete],#routineLogItems [data-log-note]')) {
        global.setTimeout(schedulePatch, 0);
      }
    });

    document.addEventListener('blur', (event) => {
      const title = event.target.closest('[data-group-title]');
      if (title) updateGroup(title.dataset.groupTitle, 'title', title.value, false);
    }, true);

    document.addEventListener('keydown', (event) => {
      if (event.target?.id === 'routineGroupName' && event.key === 'Enter') { event.preventDefault(); createGroup(); }
    });
  }

  async function loadForAuth(snapshot) {
    const authed = Boolean(snapshot?.authed);
    const owner = authed ? String(snapshot.name || snapshot.user?.name || '').trim() : 'guest';
    const changed = normaliseOwner(owner) !== normaliseOwner(state.owner);
    state.authed = authed;
    state.owner = owner || 'guest';
    if (!changed && state.loaded) return;
    const local = readGroupLocal(state.owner);
    if (!authed) {
      state.groups = local.groups;
      state.assignments = local.assignments;
      state.loaded = true;
      schedulePatch();
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
    schedulePatch();
  }

  function attachAuth() {
    let attempts = 0;
    const connect = () => {
      const auth = global.BASELINE_auth;
      if (auth && typeof auth.get === 'function') {
        loadForAuth(auth.get());
        if (typeof auth.onChange === 'function') auth.onChange(loadForAuth);
        return;
      }
      attempts += 1;
      if (attempts < 80) global.setTimeout(connect, 100);
      else loadForAuth(null);
    };
    connect();
  }

  function boot() {
    const root = $('#routine');
    if (!root) return;
    bindEvents();
    state.observer = UI.observe(root, patch);
    attachAuth();
    global.addEventListener('pagehide', () => state.observer?.disconnect(), { once:true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

/* Baseline Natural Skincare — My Routine interface. */
(function (global) {
  'use strict';

  const MODEL = global.BASELINE_SKINCARE_ROUTINE_MODEL;
  const PRODUCTS = global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
  if (!MODEL || !global.document || global.__BASELINE_SKINCARE_ROUTINE__) return;
  global.__BASELINE_SKINCARE_ROUTINE__ = true;

  const API = '/systems/baseline-natural-skincare/api/routine_state.php';
  const STORAGE_PREFIX = '__bl_skincare_routine_v1__::';
  const VIEW_KEY = '__bl_skincare_routine_view_v1__';
  const SAVE_DELAY = 500;
  const VALID_VIEWS = new Set(['log', 'summary', 'plan', 'public']);
  const state = {
    owner: '',
    authed: false,
    visibility: 'private',
    items: [],
    logs: {},
    selectedDate: MODEL.isoDate(new Date()),
    activeView: 'log',
    loaded: false,
    saving: false,
    saveTimer: 0,
    pendingRemoveId: '',
    publicProfiles: [],
    publicRoutine: null
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[character]));
  }

  function normaliseOwner(value) {
    return String(value || '').trim().toLowerCase() || 'guest';
  }

  function storageKey(owner = state.owner) {
    return STORAGE_PREFIX + normaliseOwner(owner);
  }

  function readLocal(owner = state.owner) {
    try {
      const raw = global.localStorage?.getItem(storageKey(owner));
      const value = raw ? JSON.parse(raw) : null;
      return value && typeof value === 'object' ? {
        visibility: value.visibility === 'public' ? 'public' : 'private',
        items: MODEL.normaliseRoutine(value.items),
        logs: MODEL.normaliseLogs(value.logs)
      } : null;
    } catch (_error) { return null; }
  }

  function writeLocal() {
    try {
      global.localStorage?.setItem(storageKey(), JSON.stringify({
        visibility: state.visibility,
        items: state.items,
        logs: state.logs,
        updatedAt: new Date().toISOString()
      }));
    } catch (_error) {}
  }

  async function request(options = {}) {
    const url = new URL(API, global.location?.origin || 'https://baselinelifestyle.org');
    if (options.name) url.searchParams.set('name', options.name);
    if (options.list) url.searchParams.set('list', options.list);
    try {
      const response = await fetch(url, {
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

  function setStatus(message, kind = '') {
    const target = $('#routineSaveStatus');
    if (!target) return;
    target.textContent = message;
    target.dataset.kind = kind;
  }

  function currentSnapshot() {
    return {
      visibility: state.visibility,
      routine: MODEL.normaliseRoutine(state.items),
      logs: MODEL.normaliseLogs(state.logs)
    };
  }

  async function saveNow() {
    clearTimeout(state.saveTimer);
    state.saveTimer = 0;
    writeLocal();
    renderAll();
    if (!state.authed) {
      setStatus('Draft saved on this device. Log in to save it to your account.', 'local');
      return;
    }
    state.saving = true;
    setStatus('Saving routine…', 'saving');
    const result = await request({ method: 'POST', body: currentSnapshot() });
    state.saving = false;
    if (result.ok) {
      setStatus(state.visibility === 'public' ? 'Routine saved and public.' : 'Routine saved privately.', 'saved');
      loadPublicProfiles();
    } else if (result.error === 'not_logged_in') {
      state.authed = false;
      setStatus('Your session ended. The routine remains saved on this device.', 'local');
    } else {
      setStatus('Routine saved on this device; account sync could not complete.', 'warning');
    }
  }

  function scheduleSave() {
    writeLocal();
    clearTimeout(state.saveTimer);
    state.saveTimer = global.setTimeout(saveNow, SAVE_DELAY);
  }

  function uniqueId() {
    if (global.crypto?.randomUUID) return global.crypto.randomUUID();
    return `routine-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function actionOptions(selected = '') {
    return MODEL.GROUPS.map((groupName) => {
      const items = MODEL.ACTIONS.filter((item) => item.group === groupName);
      if (!items.length) return '';
      return `<optgroup label="${escapeHtml(groupName)}">${items.map((item) => `<option value="${escapeHtml(item.id)}"${item.id === selected ? ' selected' : ''}>${escapeHtml(item.title)}</option>`).join('')}</optgroup>`;
    }).join('');
  }

  function filteredActions(query = '') {
    const words = String(query || '').trim().toLocaleLowerCase('en-GB').split(/\s+/).filter(Boolean);
    if (!words.length) return MODEL.ACTIONS.slice();
    return MODEL.ACTIONS.filter((item) => {
      const haystack = `${item.title} ${item.group}`.toLocaleLowerCase('en-GB');
      return words.every((word) => haystack.includes(word));
    });
  }

  function actionMenuHtml(query = '') {
    const matches = filteredActions(query);
    if (!matches.length) return '<div class="routine-action-no-results">No matching routine action.</div>';
    return MODEL.GROUPS.map((groupName) => {
      const items = matches.filter((item) => item.group === groupName);
      if (!items.length) return '';
      return `<div class="routine-action-group" role="group" aria-label="${escapeHtml(groupName)}"><div class="routine-action-group-label">${escapeHtml(groupName)}</div>${items.map((item) => `<button type="button" class="routine-action-option" role="option" data-action-option="${escapeHtml(item.id)}">${escapeHtml(item.title)}</button>`).join('')}</div>`;
    }).join('');
  }

  function setActionMenuOpen(open) {
    const menu = $('#routineActionMenu');
    const input = $('#routineActionSearch');
    const toggle = $('#routineActionToggle');
    if (!menu || !input) return;
    menu.hidden = !open;
    input.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function renderActionMenu(query = '') {
    const menu = $('#routineActionMenu');
    if (menu) menu.innerHTML = actionMenuHtml(query);
  }

  function chooseAction(actionId, keepOpen = false) {
    const action = MODEL.ACTION_BY_ID.get(String(actionId || ''));
    const select = $('#routineActionSelect');
    const input = $('#routineActionSearch');
    if (!action) return null;
    if (select) select.value = action.id;
    if (input) input.value = action.title;
    if (!keepOpen) setActionMenuOpen(false);
    return action;
  }

  function resolveTypedAction() {
    const input = $('#routineActionSearch');
    const text = String(input?.value || '').trim();
    if (!text) return null;
    const exact = MODEL.ACTIONS.find((item) => item.title.localeCompare(text, 'en-GB', { sensitivity: 'base' }) === 0);
    if (exact) return chooseAction(exact.id);
    const matches = filteredActions(text);
    if (matches.length === 1) return chooseAction(matches[0].id);
    return null;
  }

  function renderActionPicker() {
    const select = $('#routineActionSelect');
    if (select) select.innerHTML = `<option value="">Choose a routine action…</option>${actionOptions()}`;
    renderActionMenu('');
  }

  function selectOptions(values, selected) {
    return values.map((item) => `<option value="${escapeHtml(item.value)}"${item.value === selected ? ' selected' : ''}>${escapeHtml(item.label)}</option>`).join('');
  }

  function itemById(id) {
    return state.items.find((item) => item.id === id) || null;
  }

  function dayControls(item) {
    if (item.frequency.mode !== 'days') return '';
    return `<fieldset class="routine-days"><legend>Days</legend>${MODEL.DAYS.map((day) => `<label><input type="checkbox" data-routine-day="${escapeHtml(day)}" data-id="${escapeHtml(item.id)}"${item.frequency.days.includes(day) ? ' checked' : ''}> <span>${escapeHtml(day.slice(0, 3))}</span></label>`).join('')}</fieldset>`;
  }

  function weeklyControl(item) {
    if (item.frequency.mode !== 'weekly') return '';
    return `<label class="routine-field"><span>Times each week</span><input type="number" min="1" max="14" value="${item.frequency.timesPerWeek}" data-id="${escapeHtml(item.id)}" data-field="timesPerWeek"></label>`;
  }

  function removalControls(item, index) {
    if (state.pendingRemoveId === item.id) {
      return `<span class="routine-remove-confirm" role="group" aria-label="Confirm removal"><span>Remove?</span><button type="button" data-remove-confirm="${escapeHtml(item.id)}">Yes</button><button type="button" data-remove-cancel="${escapeHtml(item.id)}">Cancel</button></span>`;
    }
    return `<button type="button" class="routine-mini" data-move="up" data-id="${escapeHtml(item.id)}"${index === 0 ? ' disabled' : ''} aria-label="Move ${escapeHtml(item.title)} up">↑</button>
      <button type="button" class="routine-mini" data-move="down" data-id="${escapeHtml(item.id)}"${index === state.items.length - 1 ? ' disabled' : ''} aria-label="Move ${escapeHtml(item.title)} down">↓</button>
      <button type="button" class="routine-mini routine-remove" data-remove-request="${escapeHtml(item.id)}" aria-label="Remove ${escapeHtml(item.title)}">×</button>`;
  }

  function renderRoutineItems() {
    const target = $('#routineItems');
    if (!target) return;
    if (!state.items.length) {
      target.innerHTML = '<div class="routine-empty">No actions have been added yet. Type or choose an option above to begin your routine.</div>';
      return;
    }
    target.innerHTML = state.items.map((item, index) => {
      const definition = MODEL.ACTION_BY_ID.get(item.actionId);
      const methodField = MODEL.supportsShavingMethod?.(item.actionId)
        ? `<label class="routine-field routine-shaving-method-field"><span>Shaving method</span><select data-id="${escapeHtml(item.id)}" data-field="shavingMethod">${selectOptions(MODEL.SHAVING_METHODS, item.shavingMethod)}</select></label>`
        : '';
      const productOptions = PRODUCTS?.optionsHtml(item.actionId, item.productSelection) || '<option value="">No product selected</option>';
      const customProduct = item.productSelection === 'custom'
        ? `<label class="routine-field routine-field-wide routine-custom-product-field"><span>Custom product</span><input type="text" maxlength="180" value="${escapeHtml(item.customProductName || '')}" placeholder="Brand and product name" data-id="${escapeHtml(item.id)}" data-field="customProductName"></label>`
        : '';
      return `<article class="routine-item" data-routine-item="${escapeHtml(item.id)}">
      <div class="routine-item-head">
        <div><span class="routine-order">${index + 1}</span><strong>${escapeHtml(item.title)}</strong></div>
        <div class="routine-item-actions">${removalControls(item, index)}</div>
      </div>
      <div class="routine-item-grid">
        <label class="routine-field"><span>Action name</span><input type="text" maxlength="100" value="${escapeHtml(item.title)}" data-id="${escapeHtml(item.id)}" data-field="title"></label>
        <label class="routine-field"><span>Time of day</span><select data-id="${escapeHtml(item.id)}" data-field="timeOfDay">${selectOptions(MODEL.TIMES, item.timeOfDay)}</select></label>
        ${methodField}
        <label class="routine-field routine-product-field"><span>Product / recipe used</span><select data-id="${escapeHtml(item.id)}" data-field="productSelection">${productOptions}</select></label>
        ${customProduct}
        <label class="routine-field"><span>Benefit summary</span><select data-id="${escapeHtml(item.id)}" data-field="benefitMode">${selectOptions(MODEL.BENEFIT_MODES, item.benefitMode)}</select></label>
        <label class="routine-field"><span>How often</span><select data-id="${escapeHtml(item.id)}" data-field="frequencyMode">${selectOptions(MODEL.FREQUENCIES, item.frequency.mode)}</select></label>
        ${weeklyControl(item)}
        <div class="routine-field routine-field-wide routine-benefit-field"><span>Benefits</span><p>${escapeHtml(MODEL.benefitText(item, item.benefitMode))}</p></div>
        <label class="routine-field routine-field-wide"><span>Personal notes</span><textarea rows="3" maxlength="1200" placeholder="Products, technique, order details or reminders" data-id="${escapeHtml(item.id)}" data-field="notes">${escapeHtml(item.notes)}</textarea></label>
      </div>
      ${dayControls(item)}
    </article>`;
    }).join('');
  }

  function summaryItem(item, index) {
    return `<article class="routine-summary-item">
      <div class="routine-summary-title"><span>${index + 1}</span><strong>${escapeHtml(item.title)}</strong></div>
      <div class="routine-summary-frequency">${escapeHtml(MODEL.frequencyText(item.frequency))}</div>
      <p>${escapeHtml(MODEL.benefitText(item))}</p>
      ${item.notes ? `<p class="routine-summary-notes"><b>Your notes:</b> ${escapeHtml(item.notes)}</p>` : ''}
    </article>`;
  }

  function renderSummary() {
    const target = $('#routineSummary');
    if (!target) return;
    if (!state.items.length) {
      target.innerHTML = '<div class="routine-empty">No routine plan exists yet. Add your first action in <button type="button" class="routine-text-button" data-open-routine-view="plan">Routine Plan</button>.</div>';
      return;
    }
    const groups = MODEL.summaryGroups(state.items);
    const order = [
      ['morning', 'Morning routine'],
      ['evening', 'Evening routine'],
      ['anytime', 'Flexible / any-time actions']
    ];
    target.innerHTML = order.filter(([key]) => groups[key].length).map(([key, label]) => `<section class="routine-summary-group"><h3>${label}</h3>${groups[key].map(summaryItem).join('')}</section>`).join('');
  }

  function ensureLogDate(date) {
    if (!state.logs[date] || typeof state.logs[date] !== 'object') state.logs[date] = {};
    return state.logs[date];
  }

  function renderLog() {
    const dateInput = $('#routineLogDate');
    if (dateInput && dateInput.value !== state.selectedDate) dateInput.value = state.selectedDate;
    const target = $('#routineLogItems');
    const progress = $('#routineLogProgress');
    if (!target) return;
    if (!state.items.length) {
      target.innerHTML = '<div class="routine-empty">There is no routine to log yet. Create one in <button type="button" class="routine-text-button" data-open-routine-view="plan">Routine Plan</button>.</div>';
      if (progress) progress.textContent = '0 actions due';
      return;
    }
    const due = state.items.map((item) => ({ item, status: MODEL.dueStatus(item, state.selectedDate, state.logs) })).filter((entry) => entry.status.due);
    if (!due.length) {
      target.innerHTML = '<div class="routine-empty">No routine actions are scheduled for this date.</div>';
      if (progress) progress.textContent = '0 actions due';
      return;
    }
    const entries = ensureLogDate(state.selectedDate);
    const completed = due.filter(({ item }) => entries[item.id]?.completed).length;
    if (progress) progress.textContent = `${completed}/${due.length} completed`;
    target.innerHTML = due.map(({ item, status }) => {
      const entry = entries[item.id] || { completed: false, note: '', completedAt: '' };
      return `<article class="routine-log-item${entry.completed ? ' complete' : ''}">
        <label class="routine-log-check"><input type="checkbox" data-log-complete="${escapeHtml(item.id)}"${entry.completed ? ' checked' : ''}><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(MODEL.timeLabel(item.timeOfDay))} · ${escapeHtml(status.detail)}</small></span></label>
        <input class="routine-log-note" type="text" maxlength="500" placeholder="Optional note" value="${escapeHtml(entry.note || '')}" data-log-note="${escapeHtml(item.id)}">
      </article>`;
    }).join('');
  }

  function renderPrivacy() {
    const control = $('#routineVisibility');
    if (control) {
      control.value = state.visibility;
      control.disabled = false;
      control.title = state.visibility === 'public' ? 'Public plan; completion log remains private' : 'Private plan and completion log';
    }
  }

  function renderSubtabs() {
    $$('.routine-subtab').forEach((button) => {
      const active = button.dataset.routineView === state.activeView;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', active ? 'true' : 'false');
      button.tabIndex = active ? 0 : -1;
    });
    $$('[data-routine-panel]').forEach((panel) => {
      const active = panel.dataset.routinePanel === state.activeView;
      panel.hidden = !active;
      panel.classList.toggle('active', active);
    });
  }

  function activateSubtab(view, focus = false) {
    const selected = VALID_VIEWS.has(view) ? view : 'log';
    state.activeView = selected;
    try { global.sessionStorage?.setItem(VIEW_KEY, selected); } catch (_error) {}
    renderSubtabs();
    if (focus) $(`.routine-subtab[data-routine-view="${selected}"]`)?.focus();
  }

  function renderAll() {
    renderPrivacy();
    renderSubtabs();
    renderRoutineItems();
    renderSummary();
    renderLog();
  }

  function addSelectedAction() {
    const select = $('#routineActionSelect');
    const action = MODEL.ACTION_BY_ID.get(String(select?.value || '')) || resolveTypedAction();
    if (!action) {
      setActionMenuOpen(true);
      $('#routineActionSearch')?.focus();
      return;
    }
    const item = MODEL.normaliseItem({
      id: uniqueId(),
      actionId: action.id,
      title: action.title,
      benefitMode: 'comprehensive',
      timeOfDay: 'anytime',
      frequency: { mode: 'daily', days: [], timesPerWeek: 3 },
      notes: ''
    }, state.items.length);
    state.items.push(item);
    state.pendingRemoveId = '';
    if (select) select.value = '';
    const input = $('#routineActionSearch');
    if (input) input.value = '';
    renderActionMenu('');
    scheduleSave();
    renderAll();
    global.setTimeout(() => $(`[data-routine-item="${CSS.escape(item.id)}"] input[data-field="title"]`)?.focus(), 0);
  }

  function moveItem(id, direction) {
    const index = state.items.findIndex((item) => item.id === id);
    const next = direction === 'up' ? index - 1 : index + 1;
    if (index < 0 || next < 0 || next >= state.items.length) return;
    [state.items[index], state.items[next]] = [state.items[next], state.items[index]];
    state.pendingRemoveId = '';
    scheduleSave();
    renderAll();
  }

  function requestRemoveItem(id) {
    state.pendingRemoveId = id;
    renderRoutineItems();
  }

  function cancelRemoveItem() {
    state.pendingRemoveId = '';
    renderRoutineItems();
  }

  function removeItem(id) {
    state.items = state.items.filter((item) => item.id !== id);
    Object.values(state.logs).forEach((entries) => { if (entries && typeof entries === 'object') delete entries[id]; });
    state.pendingRemoveId = '';
    scheduleSave();
    renderAll();
  }

  function updateItem(control) {
    const id = control.dataset.id;
    const field = control.dataset.field;
    const value = control.value;
    const item = itemById(id);
    if (!item) return;
    if (field === 'title') item.title = String(value || '').trim().slice(0, 100) || MODEL.ACTION_BY_ID.get(item.actionId)?.title || 'Self-Care Action';
    if (field === 'notes') item.notes = String(value || '').slice(0, 1200);
    if (field === 'benefitMode') item.benefitMode = MODEL.BENEFIT_MODES.some((mode) => mode.value === value) ? value : 'comprehensive';
    if (field === 'timeOfDay') item.timeOfDay = MODEL.TIMES.some((time) => time.value === value) ? value : 'anytime';
    if (field === 'frequencyMode') item.frequency.mode = MODEL.FREQUENCIES.some((frequency) => frequency.value === value) ? value : 'daily';
    if (field === 'timesPerWeek') item.frequency.timesPerWeek = Math.max(1, Math.min(14, Math.round(Number(value) || 1)));
    if (field === 'shavingMethod') item.shavingMethod = MODEL.SHAVING_METHODS?.some((method) => method.value === value) ? value : '';
    if (field === 'productSelection') {
      item.productSelection = String(value || '').slice(0, 180);
      const details = PRODUCTS?.selectionDetails(item.productSelection, item.actionId) || { name: '' };
      item.productName = details.name || '';
      if (item.productSelection !== 'custom') item.customProductName = '';
    }
    if (field === 'customProductName') {
      item.customProductName = String(value || '').slice(0, 180);
      if (item.productSelection === 'custom') item.productName = item.customProductName;
    }
    state.items = MODEL.normaliseRoutine(state.items);
    scheduleSave();
    renderAll();
  }

  function updateDay(control) {
    const item = itemById(control.dataset.id);
    if (!item) return;
    const day = control.dataset.routineDay;
    item.frequency.days = MODEL.DAYS.filter((entry) => entry === day ? control.checked : item.frequency.days.includes(entry));
    scheduleSave();
    renderSummary();
    renderLog();
  }

  function updateLogCompletion(itemId, completed) {
    const entry = ensureLogDate(state.selectedDate)[itemId] || { completed: false, note: '', completedAt: '' };
    entry.completed = Boolean(completed);
    entry.completedAt = completed ? new Date().toISOString() : '';
    ensureLogDate(state.selectedDate)[itemId] = entry;
    scheduleSave();
    renderLog();
  }

  function updateLogNote(itemId, note) {
    const entry = ensureLogDate(state.selectedDate)[itemId] || { completed: false, note: '', completedAt: '' };
    entry.note = String(note || '').trim().slice(0, 500);
    ensureLogDate(state.selectedDate)[itemId] = entry;
    scheduleSave();
  }

  function renderPublicProfiles() {
    const select = $('#publicRoutineName');
    if (!select) return;
    const selected = select.value;
    const options = state.publicProfiles.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
    select.innerHTML = `<option value="">${state.publicProfiles.length ? 'Choose a public profile…' : 'No public routines available'}</option>${options}`;
    if (state.publicProfiles.includes(selected)) select.value = selected;
    select.disabled = !state.publicProfiles.length;
  }

  async function loadPublicProfiles() {
    const data = await request({ list: 'public' });
    const profiles = Array.isArray(data?.profiles) ? data.profiles.map((name) => String(name || '').trim()).filter(Boolean) : [];
    state.publicProfiles = Array.from(new Set(profiles)).sort((left, right) => left.localeCompare(right, 'en-GB', { sensitivity: 'base' }));
    renderPublicProfiles();
  }

  function renderPublicRoutine(data) {
    const target = $('#publicRoutineResult');
    if (!target) return;
    if (!data?.ok || !data.publicRoutine) {
      target.innerHTML = `<div class="routine-empty">${escapeHtml(data?.error === 'routine_private' ? 'That routine is private.' : data?.error === 'routine_not_found' ? 'No public routine was found for that profile.' : 'The public routine could not be loaded.')}</div>`;
      return;
    }
    const routine = MODEL.normaliseRoutine(data.publicRoutine.routine);
    const groups = MODEL.summaryGroups(routine);
    target.innerHTML = `<div class="public-routine-head"><h3>${escapeHtml(data.publicRoutine.owner)}’s routine</h3><span class="routine-public-badge">Public</span></div>${['morning', 'evening', 'anytime'].map((key) => {
      if (!groups[key].length) return '';
      return `<section class="public-routine-group"><h4>${escapeHtml(MODEL.timeLabel(key))}</h4>${groups[key].map((item) => `<article><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(MODEL.frequencyText(item.frequency))}</span><p>${escapeHtml(MODEL.benefitText(item))}</p></article>`).join('')}</section>`;
    }).join('')}`;
  }

  async function findPublicRoutine() {
    const field = $('#publicRoutineName');
    const name = String(field?.value || '').trim();
    if (!name) { field?.focus(); return; }
    const target = $('#publicRoutineResult');
    if (target) target.innerHTML = '<div class="routine-empty">Loading public routine…</div>';
    renderPublicRoutine(await request({ name }));
  }

  function applySnapshot(snapshot, owner) {
    state.owner = owner || state.owner || 'guest';
    state.visibility = snapshot?.visibility === 'public' ? 'public' : 'private';
    state.items = MODEL.normaliseRoutine(snapshot?.routine || snapshot?.items);
    state.logs = MODEL.normaliseLogs(snapshot?.logs);
    state.loaded = true;
    writeLocal();
    renderAll();
  }

  async function loadForAuth(snapshot) {
    const authed = Boolean(snapshot?.authed);
    const owner = authed ? String(snapshot.name || snapshot.user?.name || '').trim() : 'guest';
    const ownerChanged = normaliseOwner(owner) !== normaliseOwner(state.owner);
    state.authed = authed;
    state.owner = owner || 'guest';
    if (!ownerChanged && state.loaded) { renderPrivacy(); return; }

    const local = readLocal(state.owner) || (authed ? readLocal('guest') : null) || { visibility: 'private', items: [], logs: {} };
    if (!authed) {
      applySnapshot(local, 'guest');
      setStatus(local.items.length ? 'Draft loaded from this device.' : 'Add an action in Routine Plan to begin your local draft.', 'local');
      return;
    }

    setStatus('Loading your routine…', 'saving');
    const data = await request();
    if (data.ok) {
      if (data.hasRoutine) {
        applySnapshot({ visibility: data.visibility, routine: data.routine, logs: data.logs }, owner);
        setStatus(data.visibility === 'public' ? 'Public routine loaded.' : 'Private routine loaded.', 'saved');
      } else if (local.items.length) {
        applySnapshot(local, owner);
        await saveNow();
      } else {
        applySnapshot({ visibility: 'private', routine: [], logs: {} }, owner);
        setStatus('Add an action in Routine Plan to begin your routine.', 'saved');
      }
    } else {
      applySnapshot(local, owner);
      setStatus('Account routine could not be loaded; using the device copy.', 'warning');
    }
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
      if (attempts < 50) global.setTimeout(connect, 100);
      else loadForAuth(null);
    };
    connect();
  }

  function bindEvents() {
    $('#routineSubtabs')?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-routine-view]');
      if (button) activateSubtab(button.dataset.routineView);
    });
    $('#routineSubtabs')?.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      const tabs = $$('.routine-subtab');
      const current = Math.max(0, tabs.indexOf(event.target.closest('.routine-subtab')));
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      event.preventDefault();
      activateSubtab(tabs[next].dataset.routineView, true);
    });

    $('#routine')?.addEventListener('click', (event) => {
      const opener = event.target.closest('[data-open-routine-view]');
      if (opener) activateSubtab(opener.dataset.openRoutineView, true);
    });

    $('#routineActionSearch')?.addEventListener('focus', (event) => {
      renderActionMenu(event.currentTarget.value);
      setActionMenuOpen(true);
    });
    $('#routineActionSearch')?.addEventListener('input', (event) => {
      const select = $('#routineActionSelect');
      if (select) select.value = '';
      renderActionMenu(event.currentTarget.value);
      setActionMenuOpen(true);
    });
    $('#routineActionSearch')?.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { setActionMenuOpen(false); return; }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActionMenuOpen(true);
        $('#routineActionMenu .routine-action-option')?.focus();
        return;
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        const action = resolveTypedAction();
        if (action) addSelectedAction();
      }
    });
    $('#routineActionToggle')?.addEventListener('click', () => {
      const input = $('#routineActionSearch');
      const open = input?.getAttribute('aria-expanded') === 'true';
      renderActionMenu(input?.value || '');
      setActionMenuOpen(!open);
      input?.focus();
    });
    $('#routineActionMenu')?.addEventListener('click', (event) => {
      const option = event.target.closest('[data-action-option]');
      if (option) chooseAction(option.dataset.actionOption);
    });
    $('#routineActionMenu')?.addEventListener('keydown', (event) => {
      const options = $$('.routine-action-option', event.currentTarget);
      const current = options.indexOf(event.target.closest('.routine-action-option'));
      if (event.key === 'Escape') {
        event.preventDefault();
        setActionMenuOpen(false);
        $('#routineActionSearch')?.focus();
      } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        chooseAction(event.target.dataset.actionOption);
        $('#routineActionSearch')?.focus();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const next = (current + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;
        options[next]?.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.routine-action-combobox')) setActionMenuOpen(false);
    });
    $('#addRoutineActionBtn')?.addEventListener('click', addSelectedAction);

    $('#routineVisibility')?.addEventListener('change', (event) => {
      if (!state.authed) {
        event.currentTarget.value = 'private';
        try { global.BASELINE_openAuth?.(); } catch (_error) { $('#bl-auth-toggle')?.click(); }
        setStatus('Log in before making a routine public.', 'warning');
        return;
      }
      state.visibility = event.currentTarget.value === 'public' ? 'public' : 'private';
      scheduleSave();
      renderPrivacy();
    });
    $('#routineLogDate')?.addEventListener('change', (event) => {
      state.selectedDate = MODEL.isoDate(event.currentTarget.value);
      renderLog();
    });
    $('#findPublicRoutineBtn')?.addEventListener('click', findPublicRoutine);
    $('#publicRoutineName')?.addEventListener('change', () => {
      if ($('#publicRoutineName')?.value) findPublicRoutine();
    });

    $('#routineItems')?.addEventListener('click', (event) => {
      const request = event.target.closest('[data-remove-request]');
      if (request) { requestRemoveItem(request.dataset.removeRequest); return; }
      const confirm = event.target.closest('[data-remove-confirm]');
      if (confirm) { removeItem(confirm.dataset.removeConfirm); return; }
      const cancel = event.target.closest('[data-remove-cancel]');
      if (cancel) { cancelRemoveItem(); return; }
      const move = event.target.closest('[data-move]');
      if (move) moveItem(move.dataset.id, move.dataset.move);
    });
    $('#routineItems')?.addEventListener('input', (event) => {
      const control = event.target.closest('[data-field]');
      if (control && ['title', 'notes'].includes(control.dataset.field)) updateItem(control);
    });
    $('#routineItems')?.addEventListener('change', (event) => {
      const day = event.target.closest('[data-routine-day]');
      if (day) { updateDay(day); return; }
      const control = event.target.closest('[data-field]');
      if (control) updateItem(control);
    });
    $('#routineLogItems')?.addEventListener('change', (event) => {
      const checkbox = event.target.closest('[data-log-complete]');
      if (checkbox) updateLogCompletion(checkbox.dataset.logComplete, checkbox.checked);
    });
    $('#routineLogItems')?.addEventListener('input', (event) => {
      const note = event.target.closest('[data-log-note]');
      if (note) updateLogNote(note.dataset.logNote, note.value);
    });
  }

  function init() {
    const root = $('#routine');
    if (!root) return;
    try {
      const storedView = global.sessionStorage?.getItem(VIEW_KEY);
      if (VALID_VIEWS.has(storedView)) state.activeView = storedView;
    } catch (_error) {}
    document.documentElement.setAttribute('data-skincare-routine-runtime', 'SKINCARE_MY_ROUTINE_WORKSPACE_20260804_1');
    renderActionPicker();
    bindEvents();
    renderAll();
    loadPublicProfiles();
    attachAuth();
  }

  global.BASELINE_SKINCARE_ROUTINE = Object.freeze({
    getState: () => JSON.parse(JSON.stringify(currentSnapshot())),
    save: saveNow,
    render: renderAll,
    activateSubtab
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})(typeof window !== 'undefined' ? window : globalThis);

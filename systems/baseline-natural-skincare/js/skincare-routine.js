/* Baseline Natural Skincare — My Routine interface. */
(function (global) {
  'use strict';

  const MODEL = global.BASELINE_SKINCARE_ROUTINE_MODEL;
  if (!MODEL || !global.document || global.__BASELINE_SKINCARE_ROUTINE__) return;
  global.__BASELINE_SKINCARE_ROUTINE__ = true;

  const API = '/systems/baseline-natural-skincare/api/routine_state.php';
  const STORAGE_PREFIX = '__bl_skincare_routine_v1__::';
  const SAVE_DELAY = 500;
  const state = {
    owner: '',
    authed: false,
    visibility: 'private',
    items: [],
    logs: {},
    selectedDate: MODEL.isoDate(new Date()),
    loaded: false,
    saving: false,
    saveTimer: 0,
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
    const groups = [];
    MODEL.ACTIONS.forEach((item) => {
      let group = groups.find((entry) => entry.name === item.group);
      if (!group) { group = { name: item.group, items: [] }; groups.push(group); }
      group.items.push(item);
    });
    return groups.map((group) => `<optgroup label="${escapeHtml(group.name)}">${group.items.map((item) => `<option value="${escapeHtml(item.id)}"${item.id === selected ? ' selected' : ''}>${escapeHtml(item.title)}</option>`).join('')}</optgroup>`).join('');
  }

  function selectOptions(values, selected) {
    return values.map((item) => `<option value="${escapeHtml(item.value)}"${item.value === selected ? ' selected' : ''}>${escapeHtml(item.label)}</option>`).join('');
  }

  function renderActionPicker() {
    const select = $('#routineActionSelect');
    if (select) select.innerHTML = `<option value="">Select a self-care action…</option>${actionOptions()}`;
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

  function renderRoutineItems() {
    const target = $('#routineItems');
    if (!target) return;
    if (!state.items.length) {
      target.innerHTML = '<div class="routine-empty">No actions have been added yet. Choose one from the dropdown to begin your routine.</div>';
      return;
    }
    target.innerHTML = state.items.map((item, index) => `<article class="routine-item" data-routine-item="${escapeHtml(item.id)}">
      <div class="routine-item-head">
        <div><span class="routine-order">${index + 1}</span><strong>${escapeHtml(item.title)}</strong></div>
        <div class="routine-item-actions">
          <button type="button" class="routine-mini" data-move="up" data-id="${escapeHtml(item.id)}"${index === 0 ? ' disabled' : ''} aria-label="Move ${escapeHtml(item.title)} up">↑</button>
          <button type="button" class="routine-mini" data-move="down" data-id="${escapeHtml(item.id)}"${index === state.items.length - 1 ? ' disabled' : ''} aria-label="Move ${escapeHtml(item.title)} down">↓</button>
          <button type="button" class="routine-mini routine-remove" data-remove="${escapeHtml(item.id)}" aria-label="Remove ${escapeHtml(item.title)}">×</button>
        </div>
      </div>
      <div class="routine-item-grid">
        <label class="routine-field"><span>Action name</span><input type="text" maxlength="100" value="${escapeHtml(item.title)}" data-id="${escapeHtml(item.id)}" data-field="title"></label>
        <label class="routine-field"><span>Time of day</span><select data-id="${escapeHtml(item.id)}" data-field="timeOfDay">${selectOptions(MODEL.TIMES, item.timeOfDay)}</select></label>
        <label class="routine-field routine-field-wide"><span>Benefits</span><textarea rows="2" maxlength="600" data-id="${escapeHtml(item.id)}" data-field="benefit">${escapeHtml(item.benefit)}</textarea></label>
        <label class="routine-field"><span>How often</span><select data-id="${escapeHtml(item.id)}" data-field="frequencyMode">${selectOptions(MODEL.FREQUENCIES, item.frequency.mode)}</select></label>
        ${weeklyControl(item)}
        <label class="routine-field routine-field-wide"><span>Personal notes</span><textarea rows="2" maxlength="600" placeholder="Products, technique, order details or reminders" data-id="${escapeHtml(item.id)}" data-field="notes">${escapeHtml(item.notes)}</textarea></label>
      </div>
      ${dayControls(item)}
    </article>`).join('');
  }

  function summaryItem(item, index) {
    return `<article class="routine-summary-item">
      <div class="routine-summary-title"><span>${index + 1}</span><strong>${escapeHtml(item.title)}</strong></div>
      <div class="routine-summary-frequency">${escapeHtml(MODEL.frequencyText(item.frequency))}</div>
      <p>${escapeHtml(item.benefit)}</p>
      ${item.notes ? `<p class="routine-summary-notes"><b>Your notes:</b> ${escapeHtml(item.notes)}</p>` : ''}
    </article>`;
  }

  function renderSummary() {
    const target = $('#routineSummary');
    if (!target) return;
    if (!state.items.length) {
      target.innerHTML = '<div class="routine-empty">Your routine plan and benefits summary will appear here.</div>';
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
      control.disabled = !state.authed;
    }
    const detail = $('#routineVisibilityDetail');
    if (detail) detail.textContent = state.authed
      ? state.visibility === 'public'
        ? 'Public — other people can view the plan and benefits by searching your profile name. Your log stays private.'
        : 'Private — only you can view your routine and log.'
      : 'Log in before making a routine public. Your current draft remains on this device.';
    const authStatus = $('#routineAuthStatus');
    if (authStatus) authStatus.textContent = state.authed ? `Saving to ${state.owner}.` : 'Local draft mode.';
    const login = $('#routineLoginBtn');
    if (login) login.hidden = state.authed;
  }

  function renderAll() {
    renderPrivacy();
    renderRoutineItems();
    renderSummary();
    renderLog();
  }

  function addSelectedAction() {
    const select = $('#routineActionSelect');
    const action = MODEL.ACTION_BY_ID.get(String(select?.value || ''));
    if (!action) { select?.focus(); return; }
    const item = MODEL.normaliseItem({
      id: uniqueId(),
      actionId: action.id,
      title: action.title,
      benefit: action.benefit,
      timeOfDay: 'anytime',
      frequency: { mode: 'daily', days: [], timesPerWeek: 3 },
      notes: ''
    }, state.items.length);
    state.items.push(item);
    if (select) select.value = '';
    scheduleSave();
    renderAll();
    global.setTimeout(() => $(`[data-routine-item="${CSS.escape(item.id)}"] input[data-field="title"]`)?.focus(), 0);
  }

  function moveItem(id, direction) {
    const index = state.items.findIndex((item) => item.id === id);
    const next = direction === 'up' ? index - 1 : index + 1;
    if (index < 0 || next < 0 || next >= state.items.length) return;
    [state.items[index], state.items[next]] = [state.items[next], state.items[index]];
    scheduleSave();
    renderAll();
  }

  function removeItem(id) {
    state.items = state.items.filter((item) => item.id !== id);
    Object.values(state.logs).forEach((entries) => { if (entries && typeof entries === 'object') delete entries[id]; });
    scheduleSave();
    renderAll();
  }

  function updateItem(control) {
    const item = itemById(control.dataset.id);
    if (!item) return;
    const field = control.dataset.field;
    if (field === 'title' || field === 'benefit' || field === 'notes') item[field] = String(control.value || '').trim().slice(0, field === 'title' ? 100 : 600);
    if (field === 'timeOfDay') item.timeOfDay = MODEL.TIMES.some((entry) => entry.value === control.value) ? control.value : 'anytime';
    if (field === 'frequencyMode') item.frequency.mode = MODEL.FREQUENCIES.some((entry) => entry.value === control.value) ? control.value : 'daily';
    if (field === 'timesPerWeek') item.frequency.timesPerWeek = Math.max(1, Math.min(14, Math.round(Number(control.value) || 1)));
    state.items = MODEL.normaliseRoutine(state.items);
    scheduleSave();
    if (field === 'frequencyMode') renderAll();
    else { renderSummary(); renderLog(); }
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
      return `<section class="public-routine-group"><h4>${escapeHtml(MODEL.timeLabel(key))}</h4>${groups[key].map((item) => `<article><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(MODEL.frequencyText(item.frequency))}</span><p>${escapeHtml(item.benefit)}</p></article>`).join('')}</section>`;
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
      setStatus(local.items.length ? 'Draft loaded from this device.' : 'Add an action to begin your local draft.', 'local');
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
        setStatus('Add an action to begin your routine.', 'saved');
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
    $('#addRoutineActionBtn')?.addEventListener('click', addSelectedAction);
    $('#routineActionSelect')?.addEventListener('change', (event) => { if (event.currentTarget.value) addSelectedAction(); });
    $('#routineVisibility')?.addEventListener('change', (event) => {
      if (!state.authed) {
        event.currentTarget.value = 'private';
        try { global.BASELINE_openAuth?.(); } catch (_error) {}
        setStatus('Log in before making a routine public.', 'warning');
        return;
      }
      state.visibility = event.currentTarget.value === 'public' ? 'public' : 'private';
      scheduleSave();
      renderPrivacy();
    });
    $('#routineLoginBtn')?.addEventListener('click', () => {
      try { global.BASELINE_openAuth?.(); } catch (_error) { $('#bl-auth-toggle')?.click(); }
    });
    $('#routineLogDate')?.addEventListener('change', (event) => {
      state.selectedDate = MODEL.isoDate(event.currentTarget.value);
      renderLog();
    });
    $('#findPublicRoutineBtn')?.addEventListener('click', findPublicRoutine);
    $('#publicRoutineName')?.addEventListener('keydown', (event) => { if (event.key === 'Enter') { event.preventDefault(); findPublicRoutine(); } });

    $('#routineItems')?.addEventListener('click', (event) => {
      const remove = event.target.closest('[data-remove]');
      if (remove) { removeItem(remove.dataset.remove); return; }
      const move = event.target.closest('[data-move]');
      if (move) moveItem(move.dataset.id, move.dataset.move);
    });
    $('#routineItems')?.addEventListener('input', (event) => {
      const control = event.target.closest('[data-field]');
      if (control) updateItem(control);
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
    document.documentElement.setAttribute('data-skincare-routine-runtime', 'SKINCARE_MY_ROUTINE_20260804_1');
    renderActionPicker();
    bindEvents();
    renderAll();
    attachAuth();
  }

  global.BASELINE_SKINCARE_ROUTINE = Object.freeze({
    getState: () => JSON.parse(JSON.stringify(currentSnapshot())),
    save: saveNow,
    render: renderAll
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})(typeof window !== 'undefined' ? window : globalThis);

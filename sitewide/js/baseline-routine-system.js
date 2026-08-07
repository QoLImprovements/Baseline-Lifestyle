/* Baseline Lifestyle — reusable My Routine structure and interaction framework.

   RENDER STABILITY CONTRACT
   -------------------------
   System data owners may update their base DOM, then a My Routine adapter may
   group/decorate it. The adapter observer must react only when core routine
   content is replaced. Presentation-only children (group completion controls,
   calendar markers, reorder controls, public-header alignment and completed
   disclosures) must NEVER wake a core renderer.

   This boundary prevents the feedback loop where a renderer removes a
   decoration and a decoration owner adds it back, producing visible shaking.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_SYSTEM__) return;
  global.__BASELINE_ROUTINE_SYSTEM__ = true;

  const document = global.document;
  const BUILD = 'SITEWIDE_MY_ROUTINE_SYSTEM_20260807_5';
  const observers = new WeakMap();
  const AUTHORITY_DECORATION_SELECTOR = [
    '.bl-routine-group-complete',
    '.bl-calendar-markers',
    '.bl-calendar-marker',
    '.bl-skin-group-order',
    '.bl-exercise-order',
    '.bl-log-detail-toggle',
    '.bl-completed-routines',
    '.bl-completed-routines-list',
    '.bl-completed-routine-row',
    '.bl-routine-summary-filter',
    '.bl-authority-public-head',
    '.bl-authority-public-title',
    '.bl-release-public-visibility'
  ].join(',');
  const SKIN_CORE_SELECTOR = [
    '.routine-item',
    '.routine-log-item',
    '.routine-summary-item',
    '.routine-group-row',
    '.routine-empty'
  ].join(',');
  const SKIN_CORE_HOST_SELECTOR = '#routineItems,#routineLogItems,#routineSummary,#routineGroupList';

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
    }[character]));
  }

  function isoDate(value) {
    const date = value instanceof Date ? value : parseIsoDate(value) || new Date();
    const pad = (number) => String(number).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function parseIsoDate(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    return match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : null;
  }

  function localDate(value) {
    if (value instanceof Date) return new Date(value.getFullYear(), value.getMonth(), value.getDate());
    return parseIsoDate(value) || new Date();
  }

  function todayIso() {
    return isoDate(new Date());
  }

  function isFutureDate(value) {
    const parsed = parseIsoDate(value);
    return Boolean(parsed && isoDate(parsed) > todayIso());
  }

  function clampLogDate(value) {
    const parsed = parseIsoDate(value);
    if (!parsed) return todayIso();
    const date = isoDate(parsed);
    return date > todayIso() ? todayIso() : date;
  }

  function configureLogDateInput(input, value) {
    if (!input) return todayIso();
    const date = clampLogDate(value || input.value);
    input.max = todayIso();
    input.value = date;
    input.setAttribute('aria-label', input.getAttribute('aria-label') || 'Activity performed date');
    return date;
  }

  const SETTINGS_PREFIX = '__bl_sitewide_routine_settings_v1__::';
  const DAY_NAMES = Object.freeze(['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']);

  function routineOwner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function settingsKey(owner = routineOwner()) {
    return `${SETTINGS_PREFIX}${String(owner || 'guest').trim().toLocaleLowerCase('en-GB') || 'guest'}`;
  }

  function readSettings(owner = routineOwner()) {
    try {
      const raw = global.localStorage?.getItem(settingsKey(owner));
      const value = raw ? JSON.parse(raw) : {};
      const startDay = DAY_NAMES.includes(value?.startDay) ? value.startDay : 'Monday';
      return Object.assign({}, value && typeof value === 'object' ? value : {}, { startDay });
    } catch (_error) {
      return { startDay:'Monday' };
    }
  }

  function writeSettings(patch, owner = routineOwner()) {
    const current = readSettings(owner);
    const next = Object.assign({}, current, patch && typeof patch === 'object' ? patch : {});
    if (!DAY_NAMES.includes(next.startDay)) next.startDay = 'Monday';
    try { global.localStorage?.setItem(settingsKey(owner), JSON.stringify(next)); } catch (_error) {}
    try { document.dispatchEvent(new CustomEvent('baseline:routine-settings-changed', { detail:{ owner, settings:next } })); } catch (_error) {}
    return next;
  }

  function startDayIndex(owner = routineOwner()) {
    return Math.max(0, DAY_NAMES.indexOf(readSettings(owner).startDay));
  }

  function orderedDays(days = DAY_NAMES, owner = routineOwner()) {
    const source = Array.isArray(days) && days.length ? days.slice() : DAY_NAMES.slice();
    const startName = readSettings(owner).startDay;
    const index = Math.max(0, source.indexOf(startName));
    return source.slice(index).concat(source.slice(0, index));
  }

  function weekBounds(value) {
    const date = localDate(value);
    const offset = ((date.getDay() - startDayIndex()) + 7) % 7;
    const start = new Date(date);
    start.setDate(start.getDate() - offset);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    return { start, end };
  }

  function weekDates(value) {
    const { start } = weekBounds(value);
    return Array.from({ length:7 }, (_, index) => {
      const date = new Date(start);
      date.setDate(date.getDate() + index);
      return date;
    });
  }

  function monthDates(value) {
    const anchor = localDate(value);
    const month = new Date(anchor.getFullYear(), anchor.getMonth(), 1);
    const offset = ((month.getDay() - startDayIndex()) + 7) % 7;
    const first = new Date(month);
    first.setDate(first.getDate() - offset);
    return Array.from({ length:42 }, (_, index) => {
      const date = new Date(first);
      date.setDate(date.getDate() + index);
      return date;
    });
  }

  function focusIdentity(element) {
    if (!element || !element.matches || !element.matches('input,textarea,select,button,[tabindex]')) return null;
    if (element.id) return { selector:`#${CSS.escape(element.id)}` };
    const attributes = [
      'data-log-note','data-log-complete','data-field','data-id','data-activity-field','data-activity-id',
      'data-target-metric','data-log-metric','data-fitness-log-id','data-fitness-log-note','data-routine-day',
      'data-group-field','data-group-id','data-routine-group-select'
    ];
    const parts = [];
    attributes.forEach((name) => {
      if (element.hasAttribute(name)) parts.push(`[${name}="${CSS.escape(element.getAttribute(name) || '')}"]`);
    });
    if (!parts.length) return null;
    return {
      selector:`${element.tagName.toLowerCase()}${parts.join('')}`,
      start:typeof element.selectionStart === 'number' ? element.selectionStart : null,
      end:typeof element.selectionEnd === 'number' ? element.selectionEnd : null
    };
  }

  function restoreFocus(root, identity) {
    if (!root || !identity) return;
    const next = root.querySelector(identity.selector);
    if (!next) return;
    try { next.focus({ preventScroll:true }); } catch (_error) { try { next.focus(); } catch (__error) {} }
    if (identity.start != null && typeof next.setSelectionRange === 'function') {
      try { next.setSelectionRange(identity.start, identity.end == null ? identity.start : identity.end); } catch (_error) {}
    }
  }

  function renderHtml(target, html, options = {}) {
    if (!target) return false;
    const next = String(html == null ? '' : html);
    if (target.innerHTML === next) return false;
    const active = options.preserveFocus === false || !target.contains(document.activeElement)
      ? null
      : focusIdentity(document.activeElement);
    target.innerHTML = next;
    restoreFocus(target, active);
    return true;
  }

  function setText(target, text) {
    if (!target) return false;
    const next = String(text == null ? '' : text);
    if (target.textContent === next) return false;
    target.textContent = next;
    return true;
  }

  function emit(system, scope = 'all', detail = {}) {
    const payload = Object.assign({ system:String(system || ''), scope:String(scope || 'all') }, detail || {});
    try { document.dispatchEvent(new CustomEvent('baseline:routine-rendered', { detail:payload })); } catch (_error) {}
  }

  function authorityDecorationNode(node) {
    if (!node) return true;
    if (node.nodeType === 3) return !String(node.textContent || '').trim();
    if (node.nodeType !== 1) return true;
    return Boolean(node.matches?.(AUTHORITY_DECORATION_SELECTOR) || node.closest?.(AUTHORITY_DECORATION_SELECTOR));
  }

  function authorityDecorationMutation(mutation) {
    const target = mutation.target?.nodeType === 1 ? mutation.target : mutation.target?.parentElement;
    if (target?.closest?.(AUTHORITY_DECORATION_SELECTOR)) return true;
    const changed = Array.from(mutation.addedNodes || []).concat(Array.from(mutation.removedNodes || []));
    return changed.length > 0 && changed.every(authorityDecorationNode);
  }

  function skinCoreMutation(root, mutation) {
    if (root?.id !== 'routine') return !authorityDecorationMutation(mutation);
    if (authorityDecorationMutation(mutation)) return false;
    const target = mutation.target?.nodeType === 1 ? mutation.target : mutation.target?.parentElement;
    const changed = Array.from(mutation.addedNodes || []).concat(Array.from(mutation.removedNodes || []));
    if (!changed.length) return false;
    if (target?.matches?.(SKIN_CORE_HOST_SELECTOR)) {
      return changed.some((node) => node?.nodeType === 1 && (node.matches?.(SKIN_CORE_SELECTOR) || node.querySelector?.(SKIN_CORE_SELECTOR)));
    }
    return changed.some((node) => node?.nodeType === 1 && (node.matches?.(SKIN_CORE_SELECTOR) || node.querySelector?.(SKIN_CORE_SELECTOR)));
  }

  function observe(root, callback) {
    if (!root || typeof MutationObserver === 'undefined' || typeof callback !== 'function') return null;
    const previous = observers.get(root);
    if (previous) previous.disconnect();
    let queued = false;
    let running = false;
    let active = true;

    const queueRun = (mutations = []) => {
      if (!active || running || queued) return;
      if (mutations.length && !mutations.some((mutation) => skinCoreMutation(root, mutation))) return;
      queued = true;
      const enqueue = typeof global.queueMicrotask === 'function'
        ? global.queueMicrotask.bind(global)
        : (fn) => Promise.resolve().then(fn);
      enqueue(run);
    };

    const observer = new MutationObserver(queueRun);

    function run() {
      queued = false;
      if (!active || running) return;
      running = true;
      observer.disconnect();
      try { callback(); }
      finally {
        running = false;
        if (active) observer.observe(root, { childList:true, subtree:true });
      }
    }

    observer.observe(root, { childList:true, subtree:true });
    observers.set(root, observer);
    run();
    return {
      refresh:run,
      disconnect() {
        active = false;
        queued = false;
        observer.disconnect();
        observers.delete(root);
      }
    };
  }

  function applyTemplate(root) {
    if (!root) return;
    root.classList.add('bl-routine-root');
    root.querySelectorAll('.routine-shell,.fitness-routine-shell').forEach((element) => element.classList.add('bl-routine-shell'));
    root.querySelectorAll('.routine-subtabs,.fitness-routine-subtabs').forEach((element) => element.classList.add('bl-routine-tabs'));
    root.querySelectorAll('.routine-subtab,.fitness-routine-subtab').forEach((element) => element.classList.add('bl-routine-tab'));
    root.querySelectorAll('.routine-panel,.fitness-routine-panel').forEach((element) => element.classList.add('bl-routine-panel'));
    root.querySelectorAll('.routine-card,.fitness-routine-card').forEach((element) => element.classList.add('bl-routine-card'));
    root.querySelectorAll('.routine-log-group,.fitness-routine-log-group,.routine-plan-group').forEach((element) => element.classList.add('bl-routine-group'));
    root.querySelectorAll('.routine-log-item,.fitness-routine-log-item').forEach((element) => element.classList.add('bl-routine-entry'));
    root.querySelectorAll('.routine-summary-item,.fitness-exercise-summary-item').forEach((element) => element.classList.add('bl-routine-summary-card'));
  }

  function setDisclosure(button, open) {
    if (!button) return;
    const controls = button.getAttribute('aria-controls');
    const panel = controls ? document.getElementById(controls) : null;
    if (!panel) return;
    panel.hidden = !open;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    const openLabel = button.getAttribute('data-open-label') || 'Show details';
    const closeLabel = button.getAttribute('data-close-label') || 'Hide details';
    button.textContent = open ? closeLabel : openLabel;
    button.closest('[data-bl-routine-disclosure-card]')?.classList.toggle('is-expanded', open);
  }

  function disclosureButton(id, open, labels = {}) {
    return `<button type="button" class="bl-routine-disclosure" data-bl-routine-disclosure aria-controls="${escapeHtml(id)}" aria-expanded="${open ? 'true' : 'false'}" data-open-label="${escapeHtml(labels.open || 'Show details')}" data-close-label="${escapeHtml(labels.close || 'Hide details')}">${escapeHtml(open ? (labels.close || 'Hide details') : (labels.open || 'Show details'))}</button>`;
  }

  function summaryRows(rows) {
    const entries = (Array.isArray(rows) ? rows : []).filter((entry) => entry && entry.label && entry.value !== '' && entry.value != null);
    if (!entries.length) return '';
    return `<dl class="bl-routine-summary-rows">${entries.map((entry) => `<div><dt>${escapeHtml(entry.label)}</dt><dd>${escapeHtml(entry.value)}</dd></div>`).join('')}</dl>`;
  }

  function weekRow(date, options = {}) {
    const iso = isoDate(date);
    const count = Math.max(0, Number(options.count || 0));
    const selected = iso === options.selectedDate;
    const today = iso === isoDate(new Date());
    const disabled = Boolean(options.disabled || isFutureDate(iso));
    const details = Array.isArray(options.details) ? options.details.filter(Boolean) : [];
    const classes = ['bl-routine-day-row'];
    if (count) classes.push('has-completion');
    if (selected) classes.push('selected');
    if (today) classes.push('today');
    if (disabled) classes.push('future-date');
    return `<button type="button" class="${classes.join(' ')}" data-calendar-date="${iso}"${disabled ? ' disabled aria-disabled="true"' : ''}>
      <span class="bl-routine-day-date"><strong>${escapeHtml(date.toLocaleDateString('en-GB', { weekday:'long' }))}</strong><span>${escapeHtml(date.toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' }))}</span></span>
      <span class="bl-routine-day-details">${details.length ? details.map((detail) => `<span>${escapeHtml(detail)}</span>`).join('') : '<span>No completed items</span>'}</span>
      <span class="bl-routine-day-count">${count}</span>
    </button>`;
  }

  document.addEventListener('click', (event) => {
    const button = event.target?.closest?.('[data-bl-routine-disclosure]');
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    setDisclosure(button, button.getAttribute('aria-expanded') !== 'true');
  });

  document.documentElement.setAttribute('data-baseline-routine-system', BUILD);
  global.BASELINE_RoutineSystem = Object.freeze({
    BUILD,
    escapeHtml,
    isoDate,
    parseIsoDate,
    localDate,
    todayIso,
    isFutureDate,
    clampLogDate,
    configureLogDateInput,
    routineOwner,
    readSettings,
    writeSettings,
    startDayIndex,
    orderedDays,
    weekBounds,
    weekDates,
    monthDates,
    renderHtml,
    setText,
    emit,
    observe,
    applyTemplate,
    setDisclosure,
    disclosureButton,
    summaryRows,
    weekRow
  });
})(typeof window !== 'undefined' ? window : globalThis);
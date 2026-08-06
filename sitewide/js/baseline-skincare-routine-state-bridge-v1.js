/* Baseline Lifestyle — expose and decorate the live Skincare routine state. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_STATE_BRIDGE_V2__) return;
  global.__BASELINE_SKINCARE_ROUTINE_STATE_BRIDGE_V2__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (app !== 'skin') return;

  let syncTimer = 0;
  let decorateTimers = [];

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) {
        return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
      }
    } catch (_error) {}
    return 'guest';
  }

  function readJson(key, fallback) {
    try {
      const raw = global.localStorage?.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) {
      return fallback;
    }
  }

  function liveSnapshot() {
    try {
      const snapshot = global.BASELINE_SKINCARE_ROUTINE?.getState?.();
      if (!snapshot || typeof snapshot !== 'object') return null;
      return {
        visibility:snapshot.visibility === 'public' ? 'public' : 'private',
        items:Array.isArray(snapshot.items) ? snapshot.items : Array.isArray(snapshot.routine) ? snapshot.routine : [],
        logs:snapshot.logs && typeof snapshot.logs === 'object' ? snapshot.logs : {},
        updatedAt:new Date().toISOString()
      };
    } catch (_error) {
      return null;
    }
  }

  function groupState() {
    const value = readJson(`__bl_skincare_routine_groups_v3__::${owner()}`, {});
    return {
      groups:Array.isArray(value?.groups) ? value.groups : [],
      assignments:value?.assignments && typeof value.assignments === 'object' ? value.assignments : {}
    };
  }

  function completed(entry) {
    return entry === true || Boolean(entry?.completed);
  }

  function numberNode(number, label) {
    const node = document.createElement('span');
    node.className = 'bl-v4-number';
    node.textContent = String(number);
    node.setAttribute('aria-label', `${number}. ${label}`);
    return node;
  }

  function decoratePlanNumbers() {
    const data = groupState();
    const snapshot = liveSnapshot();
    if (!snapshot) return;

    document.querySelectorAll('.routine-plan-group[data-plan-group]').forEach((section) => {
      const index = data.groups.findIndex((group) => String(group.id) === String(section.dataset.planGroup));
      if (index < 0) return;
      const heading = section.querySelector(':scope > .routine-plan-group-head h3');
      const wrap = heading?.parentElement;
      if (!heading || !wrap) return;
      wrap.classList.add('bl-v4-numbered-heading');
      wrap.querySelectorAll(':scope > .bl-v4-number,:scope > .bl-routine-group-number').forEach((node) => node.remove());
      heading.insertAdjacentElement('beforebegin', numberNode(index + 1, data.groups[index].title));
      section.querySelectorAll('.routine-item .routine-order,.routine-item .bl-v4-number').forEach((node) => node.remove());
    });

    const ungrouped = document.querySelector('.routine-plan-group-ungrouped');
    if (!ungrouped) return;
    const items = snapshot.items.filter((item) => !data.assignments[item.id]);
    ungrouped.querySelectorAll('.routine-item[data-routine-item]').forEach((item, index) => {
      const head = item.querySelector('.routine-item-head');
      const title = head?.querySelector('strong,h3');
      if (!head || !title) return;
      head.querySelectorAll(':scope > .routine-order,:scope > .bl-v4-number').forEach((node) => node.remove());
      const label = items[index]?.title || title.textContent.trim();
      head.insertAdjacentElement('afterbegin', numberNode(data.groups.length + index + 1, label));
    });
  }

  function calendarMarkers(date) {
    const snapshot = liveSnapshot();
    const data = groupState();
    if (!snapshot) return [];
    const entries = snapshot.logs?.[date] || {};
    const ungrouped = snapshot.items.filter((item) => !data.assignments[item.id]);
    const markers = [];
    const seen = new Set();

    Object.entries(entries).filter(([,entry]) => completed(entry)).forEach(([itemId]) => {
      const item = snapshot.items.find((entry) => String(entry.id) === String(itemId));
      if (!item) return;
      const groupId = data.assignments[itemId];
      if (groupId) {
        const identity = `group:${groupId}`;
        if (seen.has(identity)) return;
        seen.add(identity);
        const index = data.groups.findIndex((group) => String(group.id) === String(groupId));
        if (index >= 0) markers.push({ number:index + 1, caption:data.groups[index].title, target:identity });
        return;
      }
      const index = ungrouped.findIndex((entry) => String(entry.id) === String(itemId));
      if (index >= 0) markers.push({ number:data.groups.length + index + 1, caption:item.title, target:`item:${itemId}` });
    });

    return markers.sort((left,right) => left.number - right.number);
  }

  function calendarCell(day) {
    if (!day?.parentNode) return null;
    if (day.parentElement?.classList?.contains('bl-v4-calendar-cell')) return day.parentElement;
    const cell = document.createElement('div');
    cell.className = 'bl-v4-calendar-cell';
    day.parentNode.insertBefore(cell, day);
    cell.append(day);
    return cell;
  }

  function decorateCalendar() {
    document.querySelectorAll('.routine-calendar-card [data-calendar-date]').forEach((day) => {
      day.querySelectorAll(':scope > b,:scope > .routine-calendar-count,:scope > .bl-routine-calendar-markers').forEach((node) => node.remove());
      const cell = calendarCell(day);
      if (!cell) return;
      const markers = calendarMarkers(day.dataset.calendarDate);
      const signature = markers.map((marker) => `${marker.number}|${marker.caption}|${marker.target}`).join('::');
      let wrap = cell.querySelector(':scope > .bl-v4-calendar-markers');
      if (!markers.length) {
        wrap?.remove();
        return;
      }
      if (!wrap) {
        wrap = document.createElement('span');
        wrap.className = 'bl-v4-calendar-markers';
        cell.append(wrap);
      }
      if (wrap.dataset.signature === signature && wrap.children.length === markers.length) return;
      wrap.dataset.signature = signature;
      wrap.replaceChildren(...markers.map((marker) => {
        const node = document.createElement('span');
        node.className = 'bl-v4-calendar-marker';
        node.setAttribute('role', 'button');
        node.tabIndex = 0;
        node.textContent = String(marker.number);
        node.dataset.v4Caption = marker.caption;
        node.dataset.v4SummaryTarget = marker.target;
        node.dataset.v4System = 'skin';
        node.setAttribute('aria-label', `${marker.caption}. Open in Routine Summary.`);
        return node;
      }));
    });
  }

  function decorateNow() {
    decoratePlanNumbers();
    decorateCalendar();
  }

  function scheduleDecorate() {
    decorateTimers.forEach((timer) => global.clearTimeout(timer));
    decorateTimers = [0,50,140,320,700,1400].map((delay) => global.setTimeout(decorateNow, delay));
  }

  function syncNow() {
    syncTimer = 0;
    const snapshot = liveSnapshot();
    if (!snapshot) return;
    try {
      global.localStorage?.setItem(`__bl_skincare_routine_v1__::${owner()}`, JSON.stringify(snapshot));
    } catch (_error) {}
    document.dispatchEvent(new CustomEvent('baseline:routine-settings-changed', {
      detail:{ source:'skincare-live-state', logs:snapshot.logs }
    }));
    scheduleDecorate();
  }

  function scheduleSync(delay = 0) {
    global.clearTimeout(syncTimer);
    syncTimer = global.setTimeout(syncNow, delay);
  }

  global.addEventListener('click', (event) => {
    if (event.target?.closest?.('#routine')) scheduleDecorate();
  }, true);
  global.addEventListener('change', (event) => {
    if (event.target?.closest?.('#routine [data-log-complete],#routine [data-log-note],#routine [data-field],#routine #routineVisibility')) {
      scheduleSync(20);
    }
    if (event.target?.closest?.('#routine')) scheduleDecorate();
  }, true);
  global.addEventListener('input', (event) => {
    if (event.target?.closest?.('#routine [data-log-note]')) scheduleSync(80);
  }, true);
  document.addEventListener('baseline:skincare-routine-updated', () => scheduleSync(20));
  document.addEventListener('baseline:routine-settings-changed', scheduleDecorate);
  global.addEventListener('pageshow', () => {
    scheduleSync(120);
    scheduleDecorate();
  });
  [80,250,650,1400].forEach((delay) => global.setTimeout(() => {
    syncNow();
    decorateNow();
  }, delay));
  global.addEventListener('pagehide', () => {
    global.clearTimeout(syncTimer);
    decorateTimers.forEach((timer) => global.clearTimeout(timer));
  }, { once:true });
})(typeof window !== 'undefined' ? window : globalThis);

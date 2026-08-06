/* Baseline Natural Skincare — one narrow owner for group completion controls.
   It observes only replacement of the Routine Log's direct children; it does
   not watch or rewrite the whole My Routine subtree. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_GROUP_COMPLETION_V2__) return;
  global.__BASELINE_ROUTINE_GROUP_COMPLETION_V2__ = true;
  if ((document.body?.dataset.app || document.documentElement.dataset.app) !== 'skin') return;

  let observer = null;
  let frame = 0;
  let batching = false;
  const target = document.getElementById('routineLogItems');
  if (!target) return;

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function groupData() {
    try {
      const raw = global.localStorage?.getItem(`__bl_skincare_routine_groups_v3__::${owner()}`);
      const value = raw ? JSON.parse(raw) : {};
      return { groups:Array.isArray(value.groups) ? value.groups.filter((group) => group?.id && group?.title) : [] };
    } catch (_error) { return { groups:[] }; }
  }

  function patch() {
    frame = 0;
    const byTitle = new Map(groupData().groups.map((group) => [String(group.title).trim().toLocaleLowerCase('en-GB'), group]));
    target.querySelectorAll(':scope > .routine-log-group').forEach((section) => {
      const head = section.querySelector(':scope > .routine-log-group-head');
      const heading = head?.querySelector('h3');
      const group = heading ? byTitle.get(String(heading.textContent || '').trim().toLocaleLowerCase('en-GB')) : null;
      if (!head || !heading || !group) return;

      const boxes = Array.from(section.querySelectorAll('.routine-log-item [data-log-complete]'));
      let label = head.querySelector(':scope > .bl-final-group-complete');
      if (!label) {
        label = document.createElement('label');
        label.className = 'bl-final-group-complete';
        label.innerHTML = '<input type="checkbox" data-final-group-complete="true">';
        head.appendChild(label);
      }
      const groupBox = label.querySelector('[data-final-group-complete]');
      if (!groupBox) return;
      const ids = boxes.map((box) => String(box.dataset.logComplete || '')).filter(Boolean);
      groupBox.dataset.itemIds = JSON.stringify(ids);
      const checked = boxes.filter((box) => box.checked).length;
      groupBox.checked = boxes.length > 0 && checked === boxes.length;
      groupBox.indeterminate = checked > 0 && checked < boxes.length;
      groupBox.disabled = boxes.length === 0;
      groupBox.setAttribute('aria-label', `Mark all actions in ${group.title} complete`);
      label.setAttribute('title', `Mark all actions in ${group.title} complete`);
    });
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(patch);
  }

  function setGroup(itemIds, checked) {
    if (batching) return;
    batching = true;
    const ids = Array.isArray(itemIds) ? itemIds : [];
    try {
      /* The base routine remains the data owner. Each synthetic change goes
         through its existing save path. Visual numbering is CSS-owned, so it
         stays stable while those state changes are committed. */
      ids.forEach((id) => {
        const box = target.querySelector(`[data-log-complete="${CSS.escape(String(id))}"]`);
        if (box && box.checked !== checked) {
          box.checked = checked;
          box.dispatchEvent(new Event('change', { bubbles:true }));
        }
      });
    } finally {
      batching = false;
      schedule();
    }
  }

  target.addEventListener('change', (event) => {
    const groupBox = event.target?.closest?.('[data-final-group-complete]');
    if (groupBox) {
      event.stopPropagation();
      let ids = [];
      try { ids = JSON.parse(groupBox.dataset.itemIds || '[]'); } catch (_error) {}
      setGroup(ids, Boolean(groupBox.checked));
      return;
    }
    if (event.target?.matches?.('[data-log-complete]')) schedule();
  }, true);

  /* Direct-child observation catches the base/sitewide renderer replacing
     complete log sections. It deliberately ignores nested changes, including
     this module adding/updating its own checkbox. */
  observer = new MutationObserver(schedule);
  observer.observe(target, { childList:true, subtree:false });
  document.addEventListener('baseline:skincare-routine-updated', schedule);
  document.addEventListener('baseline:routine-rendered', schedule);
  global.addEventListener('pagehide', () => observer?.disconnect(), { once:true });
  schedule();
})(typeof window !== 'undefined' ? window : globalThis);

/* Baseline Natural Skincare — one owner for Complete group controls in Routine Log. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_GROUP_COMPLETION_V1__) return;
  global.__BASELINE_ROUTINE_GROUP_COMPLETION_V1__ = true;
  if ((document.body?.dataset.app || document.documentElement.dataset.app) !== 'skin') return;

  let observer = null;
  let frame = 0;
  const target = document.getElementById('routineLogItems');
  if (!target) return;

  if (!document.getElementById('baselineRoutineGroupCompletionCss')) {
    const style = document.createElement('style');
    style.id = 'baselineRoutineGroupCompletionCss';
    style.textContent = '.bl-final-log-group-head{display:flex!important;align-items:center!important;gap:.75rem!important;flex-wrap:wrap!important}.bl-final-group-complete{display:inline-flex!important;align-items:center!important;gap:.5rem!important;margin-left:auto!important;font-weight:800!important;white-space:nowrap!important}.bl-final-group-complete input{width:1.2rem!important;height:1.2rem!important;flex:0 0 auto!important}';
    document.head.appendChild(style);
  }

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
    observer?.disconnect();
    const byTitle = new Map(groupData().groups.map((group) => [String(group.title).trim().toLocaleLowerCase('en-GB'), group]));
    target.querySelectorAll('.routine-log-group').forEach((section) => {
      const heading = section.querySelector(':scope > .routine-log-group-head h3,:scope > h3');
      const group = heading ? byTitle.get(String(heading.textContent || '').trim().toLocaleLowerCase('en-GB')) : null;
      if (!heading || !group) return;
      const head = heading.closest('.routine-log-group-head') || heading.parentElement;
      if (!head) return;
      head.classList.add('bl-final-log-group-head');
      const boxes = Array.from(section.querySelectorAll('.routine-log-item [data-log-complete]'));
      let label = head.querySelector(':scope > .bl-final-group-complete');
      if (!label) {
        label = document.createElement('label');
        label.className = 'bl-final-group-complete';
        label.innerHTML = '<input type="checkbox" data-final-group-complete="true"><span>Complete group</span>';
        head.appendChild(label);
      }
      const groupBox = label.querySelector('[data-final-group-complete]');
      if (!groupBox) return;
      groupBox.dataset.itemIds = JSON.stringify(boxes.map((box) => String(box.dataset.logComplete || '')).filter(Boolean));
      const checked = boxes.filter((box) => box.checked).length;
      groupBox.checked = boxes.length > 0 && checked === boxes.length;
      groupBox.indeterminate = checked > 0 && checked < boxes.length;
      groupBox.disabled = boxes.length === 0;
      groupBox.setAttribute('aria-label', `Mark all actions in ${group.title} complete`);
    });
    observer?.observe(target, { childList:true, subtree:true });
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(patch);
  }

  function setGroup(itemIds, checked) {
    const ids = Array.isArray(itemIds) ? itemIds : [];
    ids.forEach((id) => {
      const box = target.querySelector(`[data-log-complete="${CSS.escape(String(id))}"]`);
      if (box && box.checked !== checked) {
        box.checked = checked;
        box.dispatchEvent(new Event('change', { bubbles:true }));
      }
    });
    schedule();
  }

  target.addEventListener('change', (event) => {
    const groupBox = event.target?.closest?.('[data-final-group-complete]');
    if (groupBox) {
      event.stopPropagation();
      setGroup(JSON.parse(groupBox.dataset.itemIds || '[]'), Boolean(groupBox.checked));
      return;
    }
    if (event.target?.matches?.('[data-log-complete]')) schedule();
  }, true);

  observer = new MutationObserver(schedule);
  observer.observe(target, { childList:true, subtree:true });
  document.addEventListener('baseline:skincare-routine-updated', schedule);
  document.addEventListener('baseline:routine-rendered', schedule);
  schedule();
})(typeof window !== 'undefined' ? window : globalThis);

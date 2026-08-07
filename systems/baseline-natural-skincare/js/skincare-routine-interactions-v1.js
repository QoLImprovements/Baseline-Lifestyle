/* Baseline Natural Skincare — stable interaction adapter for shared My Routine.

   THIS MODULE DOES NOT RENDER ROUTINE CONTENT.
   --------------------------------------------
   skincare-routine.js owns routine data/editor rendering.
   skincare-routine-sitewide-v4.js owns grouped Skin layout/calendar rendering.
   This adapter owns only controls that must survive those renders:
     - one checkbox beside each Routine Log group title;
     - group reorder buttons in Routine Plan group management;
     - calendar number/caption buttons linking to Routine Summary.

   It is deliberately idempotent and ignores its own DOM mutations. Do not add
   a second Log/Summary/Plan/Public renderer here. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_INTERACTIONS_V1__) return;
  global.__BASELINE_SKINCARE_ROUTINE_INTERACTIONS_V1__=true;

  const document=global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app)!=='skin') return;
  const $=(selector,root=document) => root?.querySelector?.(selector) || null;
  const $$=(selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  let observer=null;
  let queued=false;
  const OWN_SELECTOR='.bl-routine-group-complete,.bl-skin-group-order,.bl-calendar-markers,.bl-calendar-marker';

  function owner() {
    try {
      const snapshot=global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function readJson(key,fallback) {
    try { const raw=global.localStorage?.getItem(key);return raw ? JSON.parse(raw) : fallback; }
    catch (_error) { return fallback; }
  }

  function state() {
    const routine=readJson(`__bl_skincare_routine_v1__::${owner()}`,{});
    const groupsValue=readJson(`__bl_skincare_routine_groups_v3__::${owner()}`,{});
    const items=Array.isArray(routine?.items) ? routine.items : Array.isArray(routine?.routine) ? routine.routine : [];
    const logs=routine?.logs && typeof routine.logs==='object' ? routine.logs : {};
    const groups=(Array.isArray(groupsValue?.groups) ? groupsValue.groups : []).filter((group) => group?.id && group?.title);
    const valid=new Set(groups.map((group) => String(group.id)));
    const assignments={};
    Object.entries(groupsValue?.assignments && typeof groupsValue.assignments==='object' ? groupsValue.assignments : {}).forEach(([itemId,groupId]) => {
      if (valid.has(String(groupId))) assignments[String(itemId)]=String(groupId);
    });
    return { items,logs,groups,assignments };
  }

  function ensureGroupCheckboxes() {
    $$('#routineLogItems>.routine-log-group').forEach((section) => {
      const heading=section.querySelector(':scope>.routine-log-group-head');
      if (!heading) return;
      const boxes=$$('[data-log-complete]',section);
      if (!boxes.length) return;
      let label=heading.querySelector(':scope>.bl-routine-group-complete');
      if (!label) {
        label=document.createElement('label');
        label.className='bl-routine-group-complete';
        label.innerHTML='<input type="checkbox" data-v8-group-complete><span class="sr-only">Complete group</span>';
        heading.appendChild(label);
      }
      const box=label.querySelector('[data-v8-group-complete]');
      const checked=boxes.filter((candidate) => candidate.checked).length;
      box.checked=checked===boxes.length;
      box.indeterminate=checked>0 && checked<boxes.length;
      box.dataset.itemIds=JSON.stringify(boxes.map((candidate) => String(candidate.dataset.logComplete || '')).filter(Boolean));
      box.setAttribute('aria-label',`Mark all actions in ${heading.querySelector('h3')?.textContent || 'group'} complete`);
    });
  }

  function ensureGroupOrderControls() {
    const rows=$$('#routineGroupList>[data-routine-group]');
    rows.forEach((row,index) => {
      const head=row.querySelector('.routine-group-row-head');
      if (!head) return;
      let controls=head.querySelector(':scope>.bl-skin-group-order');
      if (!controls) {
        controls=document.createElement('span');
        controls.className='bl-skin-group-order';
        controls.innerHTML='<button type="button" class="routine-mini" data-skin-group-move="up" aria-label="Move group up">↑</button><button type="button" class="routine-mini" data-skin-group-move="down" aria-label="Move group down">↓</button>';
        head.appendChild(controls);
      }
      controls.querySelector('[data-skin-group-move="up"]').disabled=index===0;
      controls.querySelector('[data-skin-group-move="down"]').disabled=index===rows.length-1;
    });
  }

  function markersForDate(date,snapshot) {
    const entries=snapshot.logs?.[date] || {};
    const ungrouped=snapshot.items.filter((item) => !snapshot.assignments[String(item.id)]);
    const markers=[];
    const seen=new Set();
    Object.entries(entries).forEach(([itemId,entry]) => {
      if (!entry?.completed) return;
      const item=snapshot.items.find((candidate) => String(candidate?.id)===String(itemId));
      if (!item) return;
      const groupId=snapshot.assignments[String(itemId)];
      if (groupId) {
        if (seen.has(`group:${groupId}`)) return;
        seen.add(`group:${groupId}`);
        const index=snapshot.groups.findIndex((group) => String(group.id)===String(groupId));
        if (index>=0) markers.push({ number:index+1,caption:snapshot.groups[index].title,filter:`group:${groupId}` });
      } else {
        const index=ungrouped.findIndex((candidate) => String(candidate.id)===String(itemId));
        markers.push({ number:snapshot.groups.length+Math.max(0,index)+1,caption:item.title || 'Routine action',filter:`item:${item.id}` });
      }
    });
    return markers;
  }

  function escapeHtml(value) {
    return String(value==null?'':value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  }

  function decorateCalendar() {
    const snapshot=state();
    $$('.routine-calendar-card [data-calendar-date]').forEach((day) => {
      const markers=markersForDate(String(day.dataset.calendarDate || ''),snapshot);
      let wrap=day.querySelector(':scope>.bl-calendar-markers');
      const genericCount=day.querySelector(':scope>.routine-calendar-count');
      if (!markers.length) {
        wrap?.remove();
        if (genericCount) genericCount.hidden=false;
        return;
      }
      if (genericCount) genericCount.hidden=true;
      if (!wrap) {
        wrap=document.createElement('span');
        wrap.className='bl-calendar-markers';
        day.appendChild(wrap);
      }
      const signature=markers.map((marker) => `${marker.number}:${marker.caption}:${marker.filter}`).join('|');
      if (wrap.dataset.signature===signature) return;
      wrap.dataset.signature=signature;
      wrap.innerHTML=markers.map((marker) => `<button type="button" class="bl-calendar-marker" data-calendar-summary-filter="${escapeHtml(marker.filter)}" title="${escapeHtml(marker.caption)}" aria-label="Open Routine Summary: ${escapeHtml(marker.caption)}">${marker.number}</button>`).join('');
    });
  }

  function patch() {
    queued=false;
    ensureGroupCheckboxes();
    ensureGroupOrderControls();
    decorateCalendar();
  }

  function ownMutation(mutation) {
    const target=mutation.target?.nodeType===1 ? mutation.target : mutation.target?.parentElement;
    if (target?.closest?.(OWN_SELECTOR)) return true;
    const nodes=Array.from(mutation.addedNodes || []).concat(Array.from(mutation.removedNodes || []));
    return nodes.length>0 && nodes.every((node) => {
      if (node.nodeType===3) return !String(node.textContent || '').trim();
      return node.nodeType!==1 || node.matches?.(OWN_SELECTOR) || node.closest?.(OWN_SELECTOR);
    });
  }

  function schedule(mutations=[]) {
    if (queued || (mutations.length && mutations.every(ownMutation))) return;
    queued=true;
    const enqueue=typeof global.queueMicrotask==='function' ? global.queueMicrotask.bind(global) : (fn) => Promise.resolve().then(fn);
    enqueue(patch);
  }

  function boot() {
    const root=$('#routine');
    if (!root) return;
    patch();
    if (typeof MutationObserver!=='undefined') {
      observer=new MutationObserver(schedule);
      observer.observe(root,{ childList:true,subtree:true });
    }
    ['baseline:skincare-routine-updated','baseline:routine-rendered'].forEach((name) => document.addEventListener(name,() => schedule()));
    document.documentElement.setAttribute('data-skincare-routine-interactions','v1');
  }

  global.addEventListener('pagehide',() => observer?.disconnect(),{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);
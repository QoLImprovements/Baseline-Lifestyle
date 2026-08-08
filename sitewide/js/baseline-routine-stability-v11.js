/* Baseline Lifestyle — shared My Routine coherence layer v11.

   SITEWIDE INVARIANTS
   -------------------
   - Skincare Routine Summary is the structural template for My Routine.
   - Fitness uses the same interaction/spacing/dropdown/calendar language.
   - System CSS tokens own colour. This file must never invent a new palette.
   - Native/select-owning renderers stay in control; do not wrap/re-parent them.
   - There is ONE visible dropdown for each field. Generated duplicate shells are removed.
   - Calendar markers are circled numbers only. Their caption is a tooltip/title.
   - Marker click opens Routine Summary and selects that exact group/step/entity.
   - A Fitness Calisthenics plan is one calendar entity, never one marker per exercise.
   - Routine Log completion is corrected by checking/unchecking; no Remove button belongs there.
   - Public Routine is a read-only My Routine view, not a separate visual system.
   - Do not add loading overlays/screens here.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_STABILITY_V11__) return;
  global.__BASELINE_ROUTINE_STABILITY_V11__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const rootSelector = app === 'skin' ? '#routine' : '#my-plan';
  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot',"'":'&#39;'
  }[character]));
  let frame = 0;
  let observer = null;
  let patching = false;
  let groupCompleting = false;

  function owner() {
    try {
      const auth = global.BASELINE_auth?.get?.();
      if (auth?.authed) return String(auth.name || auth.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function readJson(key,fallback={}) {
    try {
      const raw = global.localStorage?.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) { return fallback; }
  }

  function normaliseTerminology(root) {
    const replacements = new Map([
      ['Ungrouped routine actions','Individual Routine Steps'],
      ['Ungrouped routine items','Individual Routine Steps'],
      ['Ungrouped','Individual Routine Steps'],
      ['All routine items','All Routine Steps'],
      ['All routine actions','All Routine Steps'],
      ['Routine groups','Routine Groups'],
      ['Individual routine items','Individual Routine Steps'],
      ['Individual routine actions','Individual Routine Steps']
    ]);
    $$('option,optgroup,h3,h4',root).forEach((node) => {
      const current = String(node.tagName === 'OPTGROUP' ? node.label : node.textContent || '').trim();
      const next = replacements.get(current);
      if (!next) return;
      if (node.tagName === 'OPTGROUP') node.label = next;
      else if (!node.children.length) node.textContent = next;
    });
  }

  function removeGeneratedDuplicateDropdowns(root) {
    /* Old experimental dropdown layers caused the repeated double-select problem.
       Keep the renderer-owned field/search-combobox; remove only known generated shells. */
    $$('.bl-search-select,.bl-routine-select-shell',root).forEach((shell) => {
      const select = shell.querySelector(':scope>select');
      if (select && shell.childElementCount === 1) shell.replaceWith(select);
      else shell.remove();
    });
    $$('.bl-search-select-source',root).forEach((select) => select.classList.remove('bl-search-select-source'));

    const canonicalIds = app === 'skin'
      ? ['publicRoutineName','routineVisibility','skinRoutineSummaryFilter']
      : ['fitnessPublicRoutineName','fitnessRoutineVisibility','fitnessSummaryGroupFilter'];
    canonicalIds.forEach((id) => {
      const canonical = $(`#${id}`,root);
      if (!canonical) return;
      const row = canonical.closest('.routine-public-select,.fitness-public-select-row,.routine-public-head,.section-head-actions,.bl-routine-summary-filter') || canonical.parentElement;
      if (!row) return;
      const prompt = String(canonical.options?.[0]?.textContent || '').trim();
      $$('select',row).forEach((select) => {
        if (select === canonical) return;
        const otherPrompt = String(select.options?.[0]?.textContent || '').trim();
        if (prompt && otherPrompt === prompt) select.remove();
      });
    });
  }

  function skinState() {
    try {
      const live = global.BASELINE_SKINCARE_ROUTINE?.getState?.();
      if (live) return {
        items:Array.isArray(live.routine) ? live.routine : Array.isArray(live.items) ? live.items : [],
        logs:live.logs && typeof live.logs === 'object' ? live.logs : {}
      };
    } catch (_error) {}
    const value = readJson(`__bl_skincare_routine_v1__::${owner()}`,{});
    return {
      items:Array.isArray(value?.items) ? value.items : Array.isArray(value?.routine) ? value.routine : [],
      logs:value?.logs && typeof value.logs === 'object' ? value.logs : {}
    };
  }

  function skinGroups() {
    const value = readJson(`__bl_skincare_routine_groups_v3__::${owner()}`,{});
    const groups = (Array.isArray(value?.groups) ? value.groups : []).filter((group) => group?.id && group?.title);
    const valid = new Set(groups.map((group) => String(group.id)));
    const assignments = {};
    Object.entries(value?.assignments && typeof value.assignments === 'object' ? value.assignments : {}).forEach(([itemId,groupId]) => {
      if (valid.has(String(groupId))) assignments[String(itemId)] = String(groupId);
    });
    return { groups,assignments };
  }

  function fitnessState() {
    try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[],logs:{} }; }
    catch (_error) { return { activities:[],logs:{} }; }
  }

  function fitnessGroups() {
    try {
      const settings = global.BASELINE_RoutineSystem?.readSettings?.(owner()) || {};
      const groups = (Array.isArray(settings.fitnessRoutineGroups) ? settings.fitnessRoutineGroups : []).filter((group) => group?.id && group?.title);
      const valid = new Set(groups.map((group) => String(group.id)));
      const assignments = {};
      Object.entries(settings.fitnessRoutineAssignments && typeof settings.fitnessRoutineAssignments === 'object' ? settings.fitnessRoutineAssignments : {}).forEach(([key,groupId]) => {
        if (valid.has(String(groupId))) assignments[String(key)] = String(groupId);
      });
      return { groups,assignments };
    } catch (_error) { return { groups:[],assignments:{} }; }
  }

  function ensureSkinGroupCheckboxes(root) {
    if (app !== 'skin') return;
    $$('#routineLogItems>.routine-log-group',root).forEach((section) => {
      const head = section.querySelector(':scope>.routine-log-group-head');
      if (!head) return;
      const children = $$('[data-log-complete]',section);
      if (!children.length) return;
      let label = head.querySelector(':scope>.bl-routine-group-complete');
      if (!label) {
        label = document.createElement('label');
        label.className = 'bl-routine-group-complete';
        label.innerHTML = '<input type="checkbox" data-v11-group-complete>';
        head.appendChild(label);
      }
      const box = label.querySelector('[data-v11-group-complete]');
      const checked = children.filter((child) => child.checked).length;
      box.checked = checked === children.length;
      box.indeterminate = checked > 0 && checked < children.length;
      box.dataset.itemIds = JSON.stringify(children.map((child) => String(child.dataset.logComplete || '')).filter(Boolean));
      const title = String(head.querySelector('h3')?.textContent || 'routine group').trim();
      box.setAttribute('aria-label',`Complete ${title}`);
      box.title = `Complete ${title}`;
    });
  }

  function ensureSkinSummaryFilter(root) {
    if (app !== 'skin') return null;
    const target = $('#routineSummary',root);
    if (!target) return null;
    let select = $('#skinRoutineSummaryFilter',root);
    if (!select) {
      const control = document.createElement('label');
      control.className = 'bl-routine-summary-filter';
      control.innerHTML = '<span>Show</span><select id="skinRoutineSummaryFilter" aria-label="Filter Routine Summary"></select>';
      target.insertAdjacentElement('beforebegin',control);
      select = control.querySelector('select');
    }
    const routine = skinState();
    const data = skinGroups();
    const signature = JSON.stringify({ groups:data.groups.map((group) => [group.id,group.title]),items:routine.items.map((item) => [item.id,item.title]) });
    if (select.dataset.signature !== signature) {
      const old = String(select.value || 'all');
      select.innerHTML = `<option value="all">All Routine Steps</option>${data.groups.length ? `<optgroup label="Routine Groups">${data.groups.map((group) => `<option value="group:${esc(group.id)}">${esc(group.title)}</option>`).join('')}</optgroup>` : ''}${routine.items.length ? `<optgroup label="Individual Routine Steps">${routine.items.map((item) => `<option value="item:${esc(item.id)}">${esc(item.title || 'Routine Step')}</option>`).join('')}</optgroup>` : ''}`;
      select.dataset.signature = signature;
      if (Array.from(select.options).some((option) => option.value === old)) select.value = old;
    }
    return select;
  }

  function normalTitle(value) {
    return String(value || '').replace(/^\s*\d+\.?\s*/,'').trim().toLocaleLowerCase('en-GB');
  }

  function applySkinSummaryFilter(root) {
    if (app !== 'skin') return;
    const select = ensureSkinSummaryFilter(root);
    const target = $('#routineSummary',root);
    if (!select || !target) return;
    const value = String(select.value || 'all');
    const routine = skinState();
    const data = skinGroups();
    const itemId = value.startsWith('item:') ? value.slice(5) : '';
    const item = itemId ? routine.items.find((candidate) => String(candidate.id) === itemId) : null;
    const itemGroup = item ? String(data.assignments[itemId] || '') : '';
    $$('.routine-summary-group',target).forEach((section) => {
      const heading = normalTitle(section.querySelector('h3')?.textContent);
      const group = data.groups.find((candidate) => normalTitle(candidate.title) === heading);
      const groupId = group?.id || '';
      let visible = value === 'all';
      if (value.startsWith('group:')) visible = groupId === value.slice(6);
      if (item) visible = itemGroup ? groupId === itemGroup : !groupId;
      section.hidden = !visible;
      $$('.routine-summary-item',section).forEach((card) => {
        if (!item) { card.hidden = !visible; return; }
        const cardTitle = String(card.querySelector('.routine-summary-title strong')?.textContent || '').trim();
        card.hidden = !(visible && cardTitle.localeCompare(String(item.title || '').trim(),'en-GB',{ sensitivity:'base' }) === 0);
      });
    });
  }

  function completedDate(session) {
    if (session?.completedAt) return String(session.completedAt).slice(0,10);
    if (Number(session?.completed_at)) return new Date(Number(session.completed_at) * 1000).toISOString().slice(0,10);
    return '';
  }

  function skinMarkers(date) {
    const routine = skinState();
    const data = skinGroups();
    const entries = routine.logs?.[date] || {};
    const ungrouped = routine.items.filter((item) => !data.assignments[item.id]);
    const seen = new Set();
    const markers = [];
    Object.entries(entries).forEach(([itemId,entry]) => {
      if (!entry?.completed) return;
      const item = routine.items.find((candidate) => String(candidate.id) === String(itemId));
      if (!item) return;
      const groupId = data.assignments[itemId];
      if (groupId) {
        const key = `group:${groupId}`;
        if (seen.has(key)) return;
        seen.add(key);
        const index = data.groups.findIndex((group) => String(group.id) === String(groupId));
        if (index >= 0) markers.push({ number:index+1,caption:data.groups[index].title,filter:key });
      } else {
        const key = `item:${item.id}`;
        if (seen.has(key)) return;
        seen.add(key);
        const index = ungrouped.findIndex((candidate) => String(candidate.id) === String(item.id));
        markers.push({ number:data.groups.length + Math.max(index,0) + 1,caption:item.title || 'Routine Step',filter:key });
      }
    });
    return markers;
  }

  function fitnessMarkers(date) {
    const routine = fitnessState();
    const data = fitnessGroups();
    const plans = (() => { try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; } catch (_error) { return []; } })();
    const entities = [];
    Object.entries(routine.logs?.[date] || {}).forEach(([id,entry]) => {
      if (!entry?.completed) return;
      const activity = (routine.activities || []).find((candidate) => String(candidate.id) === String(id));
      if (activity) entities.push({ key:`activity:${id}`,name:activity.name || 'Fitness activity' });
    });
    plans.forEach((plan) => {
      if ((plan.sessions || []).some((session) => String(session.status || '') === 'done' && completedDate(session) === date)) {
        entities.push({ key:`plan:${Number(plan.planId)}`,name:String(plan.planJson?.name || 'Calisthenics Plan') });
      }
    });
    const all = plans.map((plan) => ({ key:`plan:${Number(plan.planId)}`,name:String(plan.planJson?.name || 'Calisthenics Plan') }))
      .concat((routine.activities || []).map((activity) => ({ key:`activity:${activity.id}`,name:activity.name || 'Fitness activity' })));
    const ungrouped = all.filter((entity) => !data.assignments[entity.key]);
    const seen = new Set();
    const markers = [];
    entities.forEach((entity) => {
      const groupId = data.assignments[entity.key];
      if (groupId) {
        const key = `group:${groupId}`;
        if (seen.has(key)) return;
        seen.add(key);
        const index = data.groups.findIndex((group) => String(group.id) === String(groupId));
        if (index >= 0) markers.push({ number:index+1,caption:data.groups[index].title,filter:key });
      } else {
        if (seen.has(entity.key)) return;
        seen.add(entity.key);
        const index = ungrouped.findIndex((candidate) => candidate.key === entity.key);
        markers.push({ number:data.groups.length + Math.max(index,0) + 1,caption:entity.name,filter:`entity:${entity.key}` });
      }
    });
    return markers;
  }

  function decorateCalendar(root) {
    const days = app === 'skin' ? $$('.routine-calendar-card [data-calendar-date]',root) : $$('#fitnessCalendarGrid [data-calendar-date]',root);
    days.forEach((day) => {
      const date = String(day.dataset.calendarDate || '');
      if (!date) return;
      const markers = app === 'skin' ? skinMarkers(date) : fitnessMarkers(date);
      let wrap = day.querySelector(':scope>.bl-v11-calendar-markers');
      if (!markers.length) { wrap?.remove(); return; }
      if (!wrap) {
        wrap = document.createElement('span');
        wrap.className = 'bl-v11-calendar-markers';
        day.appendChild(wrap);
      }
      const signature = markers.map((marker) => `${marker.number}:${marker.caption}:${marker.filter}`).join('|');
      if (wrap.dataset.signature === signature) return;
      wrap.dataset.signature = signature;
      wrap.innerHTML = markers.map((marker) => `<button type="button" class="bl-v11-calendar-marker" data-calendar-summary-filter="${esc(marker.filter)}" title="${esc(marker.caption)}" aria-label="${esc(marker.caption)}">${marker.number}</button>`).join('');
    });
  }

  function moveVisibilityControl(root) {
    const panel = app === 'skin' ? $('[data-routine-panel="public"]',root) : $('[data-fitness-routine-panel="public"]',root);
    const select = $(app === 'skin' ? '#routineVisibility' : '#fitnessRoutineVisibility',root);
    if (!panel || !select) return;
    const label = select.closest('label');
    if (!label) return;
    label.classList.add('bl-v11-public-visibility');
    const span = label.querySelector(':scope>span');
    if (span) span.textContent = 'My Routine Visibility';
    const head = panel.querySelector('.routine-public-head,.section-head-actions');
    if (head && label.parentElement !== head) head.appendChild(label);
  }

  function decorateFitnessLog(root) {
    if (app !== 'fitness') return;
    $$('#fitnessRoutineLogItems .fitness-routine-log-item',root).forEach((card) => {
      const head = card.querySelector('.fitness-log-item-head');
      if (!head) return;
      let actions = head.querySelector(':scope>.bl-v11-log-actions');
      if (!actions) {
        actions = document.createElement('span');
        actions.className = 'bl-v11-log-actions';
        head.appendChild(actions);
      }
      let details = actions.querySelector('[data-v11-log-details]');
      if (!details) {
        details = document.createElement('button');
        details.type = 'button';
        details.className = 'tiny-btn';
        details.dataset.v11LogDetails = 'true';
        details.textContent = 'Details';
        details.setAttribute('aria-expanded','false');
        actions.appendChild(details);
        card.classList.add('bl-v11-log-details-collapsed');
      }
      actions.querySelectorAll('[data-v11-remove-fitness]').forEach((node) => node.remove());
    });
  }

  function removeLogRemoveButtons(root) {
    $$('[data-v11-remove-skin],[data-v11-remove-fitness]',root).forEach((button) => button.closest('.bl-v11-remove-confirm')?.remove() || button.remove());
  }

  function openSummaryMarker(marker,root) {
    const filter = String(marker.dataset.calendarSummaryFilter || '');
    if (!filter) return;
    if (app === 'skin') {
      $('[data-routine-view="summary"]',root)?.click();
      const select = ensureSkinSummaryFilter(root);
      if (select && Array.from(select.options).some((option) => option.value === filter)) {
        select.value = filter;
        select.dispatchEvent(new Event('change',{ bubbles:true }));
        applySkinSummaryFilter(root);
      }
    } else {
      $('[data-fitness-routine-view="summary"]',root)?.click();
      const select = $('#fitnessSummaryGroupFilter',root);
      if (select && Array.from(select.options || []).some((option) => option.value === filter)) {
        select.value = filter;
        select.dispatchEvent(new Event('change',{ bubbles:true }));
      }
    }
  }

  function patch() {
    frame = 0;
    if (patching) return;
    const root = $(rootSelector);
    if (!root) return;
    patching = true;
    try {
      root.classList.add('bl-routine-stability-v11');
      normaliseTerminology(root);
      removeGeneratedDuplicateDropdowns(root);
      moveVisibilityControl(root);
      removeLogRemoveButtons(root);
      if (app === 'skin') {
        ensureSkinGroupCheckboxes(root);
        ensureSkinSummaryFilter(root);
        applySkinSummaryFilter(root);
      } else {
        decorateFitnessLog(root);
      }
      decorateCalendar(root);
      document.documentElement.setAttribute('data-baseline-routine-stability','v11');
    } finally { patching = false; }
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(patch);
  }

  function bind() {
    document.addEventListener('click',(event) => {
      const root = $(rootSelector);
      if (!root || !root.contains(event.target)) return;
      const marker = event.target?.closest?.('[data-calendar-summary-filter]');
      if (marker) {
        event.preventDefault();
        event.stopPropagation();
        openSummaryMarker(marker,root);
        return;
      }
      const details = event.target?.closest?.('[data-v11-log-details]');
      if (details) {
        const card = details.closest('.fitness-routine-log-item');
        const collapsed = card?.classList.toggle('bl-v11-log-details-collapsed');
        details.textContent = collapsed ? 'Details' : 'Hide details';
        details.setAttribute('aria-expanded',collapsed ? 'false' : 'true');
      }
    },true);

    document.addEventListener('change',(event) => {
      const root = $(rootSelector);
      if (!root || !root.contains(event.target)) return;
      const groupBox = event.target?.closest?.('[data-v11-group-complete]');
      if (groupBox && !groupCompleting) {
        let ids = [];
        try { ids = JSON.parse(groupBox.dataset.itemIds || '[]'); } catch (_error) {}
        groupCompleting = true;
        ids.forEach((id) => {
          const child = document.querySelector(`#routineLogItems [data-log-complete="${CSS.escape(String(id))}"]`);
          if (child && child.checked !== groupBox.checked) {
            child.checked = groupBox.checked;
            child.dispatchEvent(new Event('change',{ bubbles:true }));
          }
        });
        groupCompleting = false;
      }
      if (event.target?.id === 'skinRoutineSummaryFilter') applySkinSummaryFilter(root);
      global.setTimeout(schedule,0);
    },true);

    [
      'baseline:skincare-routine-updated','baseline:fitness-routine-updated','baseline:fitness-plans-updated',
      'baseline:fitness-workout-updated','baseline:routine-settings-changed','baseline:fitness-summary-rendered',
      'baseline:routine-rendered','baseline:fitness-routine-view-changed'
    ].forEach((name) => document.addEventListener(name,schedule));
  }

  function boot() {
    const root = $(rootSelector);
    if (!root) return;
    bind();
    if (typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver((mutations) => {
        if (!patching && mutations.some((mutation) => mutation.type === 'childList')) schedule();
      });
      observer.observe(root,{ childList:true,subtree:true });
    }
    patch();
  }

  global.addEventListener('pagehide',() => observer?.disconnect(),{ once:true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

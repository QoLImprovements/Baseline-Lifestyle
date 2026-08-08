/* Baseline Lifestyle — My Routine stability layer v11.

   One lightweight shared layer for Skincare and Fitness.
   It may add small controls/captions, but it must not re-parent renderer-owned
   fields, wrap native selects, replace routine cards, or run a render loop.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_STABILITY_V11__) return;
  global.__BASELINE_ROUTINE_STABILITY_V11__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const rootSelector = app === 'skin' ? '#routine' : '#my-plan';
  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[character]));
  let observer = null;
  let frame = 0;
  let patching = false;
  let groupCompleting = false;

  function owner() {
    try {
      const auth = global.BASELINE_auth?.get?.();
      if (auth?.authed) return String(auth.name || auth.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function readJson(key, fallback = {}) {
    try {
      const raw = global.localStorage?.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) { return fallback; }
  }

  function todayIso() {
    try { return global.BASELINE_RoutineSystem?.todayIso?.() || new Date().toLocaleDateString('sv-SE'); }
    catch (_error) { return new Date().toISOString().slice(0,10); }
  }

  function selectedDate() {
    const input = $(app === 'skin' ? '#routineLogDate' : '#fitnessRoutineLogDate');
    return String(input?.value || todayIso());
  }

  function normaliseDateControls(root) {
    ['#routineLogDate','#fitnessRoutineLogDate'].forEach((selector) => {
      const input = $(selector, root);
      if (!input) return;
      input.max = todayIso();
      input.removeAttribute('min');
      input.setAttribute('aria-label','Date');
      const label = input.closest('label');
      const span = label?.querySelector(':scope>span');
      if (span) span.textContent = 'Date';
    });
    const start = $('#startDate', root);
    if (start) start.removeAttribute('max');
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
    $$('option,optgroup,h3,h4', root).forEach((node) => {
      const isGroup = node.tagName === 'OPTGROUP';
      const value = String(isGroup ? node.label : node.textContent || '').trim();
      if (!replacements.has(value)) return;
      if (isGroup) node.label = replacements.get(value);
      else if (!node.children.length) node.textContent = replacements.get(value);
    });
  }

  function skinRoutineState() {
    try {
      const live = global.BASELINE_SKINCARE_ROUTINE?.getState?.();
      if (live) return {
        visibility:live.visibility === 'public' ? 'public' : 'private',
        items:Array.isArray(live.routine) ? live.routine : Array.isArray(live.items) ? live.items : [],
        logs:live.logs && typeof live.logs === 'object' ? live.logs : {}
      };
    } catch (_error) {}
    const value = readJson(`__bl_skincare_routine_v1__::${owner()}`,{});
    return {
      visibility:value?.visibility === 'public' ? 'public' : 'private',
      items:Array.isArray(value?.items) ? value.items : Array.isArray(value?.routine) ? value.routine : [],
      logs:value?.logs && typeof value.logs === 'object' ? value.logs : {}
    };
  }

  function skinGroups() {
    const value = readJson(`__bl_skincare_routine_groups_v3__::${owner()}`,{});
    const groups = (Array.isArray(value?.groups) ? value.groups : []).filter((group) => group?.id && group?.title);
    const valid = new Set(groups.map((group) => String(group.id)));
    const assignments = {};
    Object.entries(value?.assignments && typeof value.assignments === 'object' ? value.assignments : {}).forEach(([itemId, groupId]) => {
      if (valid.has(String(groupId))) assignments[String(itemId)] = String(groupId);
    });
    return { groups, assignments };
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
      Object.entries(settings.fitnessRoutineAssignments && typeof settings.fitnessRoutineAssignments === 'object' ? settings.fitnessRoutineAssignments : {}).forEach(([key, groupId]) => {
        if (valid.has(String(groupId))) assignments[String(key)] = String(groupId);
      });
      return { groups, assignments };
    } catch (_error) { return { groups:[], assignments:{} }; }
  }

  function ensureSkinGroupCheckboxes(root) {
    if (app !== 'skin') return;
    $$('#routineLogItems>.routine-log-group', root).forEach((section) => {
      const head = section.querySelector(':scope>.routine-log-group-head');
      if (!head) return;
      const children = $$('[data-log-complete]', section);
      if (!children.length) return;
      let label = head.querySelector(':scope>.bl-routine-group-complete');
      if (!label) {
        label = document.createElement('label');
        label.className = 'bl-routine-group-complete';
        label.innerHTML = '<input type="checkbox" data-v11-group-complete>';
        head.appendChild(label);
      }
      const box = label.querySelector('[data-v11-group-complete]');
      if (!box) return;
      const checked = children.filter((child) => child.checked).length;
      box.checked = checked === children.length;
      box.indeterminate = checked > 0 && checked < children.length;
      box.dataset.itemIds = JSON.stringify(children.map((child) => String(child.dataset.logComplete || '')).filter(Boolean));
      box.setAttribute('aria-label',`Complete ${String(head.querySelector('h3')?.textContent || 'routine group').trim()}`);
      box.title = box.getAttribute('aria-label');
    });
  }

  function ensureSkinSummaryFilter(root) {
    if (app !== 'skin') return null;
    const target = $('#routineSummary', root);
    if (!target) return null;
    let select = $('#skinRoutineSummaryFilter', root);
    if (!select) {
      const control = document.createElement('label');
      control.className = 'bl-routine-summary-filter';
      control.innerHTML = '<span>Show</span><select id="skinRoutineSummaryFilter" aria-label="Filter Routine Summary"></select>';
      target.insertAdjacentElement('beforebegin', control);
      select = control.querySelector('select');
    }
    const routine = skinRoutineState();
    const data = skinGroups();
    const signature = JSON.stringify({
      groups:data.groups.map((group) => [group.id,group.title]),
      items:routine.items.map((item) => [item.id,item.title])
    });
    if (select.dataset.signature !== signature) {
      const old = String(select.value || 'all');
      const groupOptions = data.groups.map((group) => `<option value="group:${esc(group.id)}">${esc(group.title)}</option>`).join('');
      const itemOptions = routine.items.map((item) => `<option value="item:${esc(item.id)}">${esc(item.title || 'Routine Step')}</option>`).join('');
      select.innerHTML = `<option value="all">All Routine Steps</option>${groupOptions ? `<optgroup label="Routine Groups">${groupOptions}</optgroup>` : ''}${itemOptions ? `<optgroup label="Individual Routine Steps">${itemOptions}</optgroup>` : ''}`;
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
    const target = $('#routineSummary', root);
    if (!select || !target) return;
    const value = String(select.value || 'all');
    const routine = skinRoutineState();
    const data = skinGroups();
    const itemId = value.startsWith('item:') ? value.slice(5) : '';
    const item = itemId ? routine.items.find((candidate) => String(candidate.id) === itemId) : null;
    const itemGroup = item ? String(data.assignments[itemId] || '') : '';
    $$('.routine-summary-group', target).forEach((section) => {
      const heading = normalTitle(section.querySelector('h3')?.textContent);
      const group = data.groups.find((candidate) => normalTitle(candidate.title) === heading);
      const groupId = group?.id || '';
      let visible = value === 'all';
      if (value.startsWith('group:')) visible = groupId === value.slice(6);
      if (item) visible = itemGroup ? groupId === itemGroup : !groupId;
      section.hidden = !visible;
      $$('.routine-summary-item', section).forEach((card) => {
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

  function skinCalendarMarkers(date) {
    const routine = skinRoutineState();
    const data = skinGroups();
    const entries = routine.logs?.[date] || {};
    const ungrouped = routine.items.filter((item) => !data.assignments[item.id]);
    const seen = new Set();
    const markers = [];
    Object.entries(entries).forEach(([itemId, entry]) => {
      if (!entry?.completed) return;
      const item = routine.items.find((candidate) => String(candidate.id) === String(itemId));
      if (!item) return;
      const groupId = data.assignments[itemId];
      if (groupId) {
        const key = `group:${groupId}`;
        if (seen.has(key)) return;
        seen.add(key);
        const index = data.groups.findIndex((group) => String(group.id) === String(groupId));
        if (index >= 0) markers.push({ number:index + 1, caption:data.groups[index].title, filter:key });
      } else {
        const index = ungrouped.findIndex((candidate) => String(candidate.id) === String(itemId));
        const key = `item:${item.id}`;
        if (seen.has(key)) return;
        seen.add(key);
        markers.push({ number:data.groups.length + Math.max(0,index) + 1, caption:item.title || 'Routine Step', filter:key });
      }
    });
    return markers;
  }

  function fitnessCalendarMarkers(date) {
    const routine = fitnessState();
    const groups = fitnessGroups();
    const plans = (() => { try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; } catch (_error) { return []; } })();
    const entities = [];
    Object.entries(routine.logs?.[date] || {}).forEach(([id, entry]) => {
      if (!entry?.completed) return;
      const item = (routine.activities || []).find((candidate) => String(candidate.id) === String(id));
      if (item) entities.push({ key:`activity:${id}`, name:item.name || 'Fitness activity' });
    });
    plans.forEach((plan) => {
      if ((plan.sessions || []).some((session) => String(session.status || '') === 'done' && completedDate(session) === date)) {
        entities.push({ key:`plan:${Number(plan.planId)}`, name:String(plan.planJson?.name || 'Calisthenics') });
      }
    });
    const all = plans.map((plan) => ({ key:`plan:${Number(plan.planId)}`, name:String(plan.planJson?.name || 'Calisthenics') }))
      .concat((routine.activities || []).map((item) => ({ key:`activity:${item.id}`, name:item.name || 'Fitness activity' })));
    const ungrouped = all.filter((entity) => !groups.assignments[entity.key]);
    const seen = new Set();
    const markers = [];
    entities.forEach((entity) => {
      const groupId = groups.assignments[entity.key];
      if (groupId) {
        const key = `group:${groupId}`;
        if (seen.has(key)) return;
        seen.add(key);
        const index = groups.groups.findIndex((group) => String(group.id) === String(groupId));
        if (index >= 0) markers.push({ number:index + 1, caption:groups.groups[index].title, filter:key });
      } else {
        if (seen.has(entity.key)) return;
        seen.add(entity.key);
        const index = ungrouped.findIndex((candidate) => candidate.key === entity.key);
        markers.push({ number:groups.groups.length + Math.max(0,index) + 1, caption:entity.name, filter:`entity:${entity.key}` });
      }
    });
    return markers;
  }

  function decorateCalendar(root) {
    const days = app === 'skin'
      ? $$('.routine-calendar-card [data-calendar-date]', root)
      : $$('#fitnessCalendarGrid [data-calendar-date]', root);
    days.forEach((day) => {
      const date = String(day.dataset.calendarDate || '');
      if (!date) return;
      const markers = app === 'skin' ? skinCalendarMarkers(date) : fitnessCalendarMarkers(date);
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
      wrap.innerHTML = markers.map((marker) => `<span class="bl-v11-calendar-marker" role="button" tabindex="0" data-calendar-summary-filter="${esc(marker.filter)}" title="Open Routine Summary: ${esc(marker.caption)}" aria-label="Open Routine Summary: ${esc(marker.caption)}"><b>${marker.number}</b><span>${esc(marker.caption)}</span></span>`).join('');
    });
  }

  function moveVisibilityControl(root) {
    const panel = app === 'skin' ? $('[data-routine-panel="public"]', root) : $('[data-fitness-routine-panel="public"]', root);
    const select = $(app === 'skin' ? '#routineVisibility' : '#fitnessRoutineVisibility', root);
    if (!panel || !select) return;
    let label = select.closest('label');
    if (!label) {
      label = document.createElement('label');
      select.insertAdjacentElement('beforebegin', label);
      label.appendChild(select);
    }
    label.classList.add('bl-v11-public-visibility');
    let span = label.querySelector(':scope>span');
    if (!span) { span = document.createElement('span'); label.prepend(span); }
    span.textContent = 'My Routine Visibility';
    const head = panel.querySelector('.routine-public-head,.section-head-actions');
    if (head && label.parentElement !== head) head.appendChild(label);
  }

  function addSkinLogRemoveControls(root) {
    if (app !== 'skin') return;
    $$('#routineLogItems .routine-log-item', root).forEach((card) => {
      const id = String(card.querySelector('[data-log-complete]')?.dataset.logComplete || '');
      if (!id || card.querySelector('[data-v11-remove-skin]')) return;
      const actions = document.createElement('span');
      actions.className = 'bl-v11-log-actions';
      actions.innerHTML = `<button type="button" class="routine-mini" data-v11-remove-skin="${esc(id)}">Remove</button>`;
      card.appendChild(actions);
    });
  }

  function restoreFitnessCompletedRows(root) {
    if (app !== 'fitness') return;
    const host = $('#fitnessRoutineLogItems', root);
    if (!host) return;
    const state = fitnessState();
    const date = selectedDate();
    const entries = state.logs?.[date] || {};
    const missing = (state.activities || []).filter((item) => entries[item.id]?.completed && !host.querySelector(`[data-fitness-log-complete="${CSS.escape(String(item.id))}"]`));
    let group = host.querySelector(':scope>.bl-v11-completed-log-group');
    if (!missing.length) { group?.remove(); return; }
    if (!group) {
      group = document.createElement('section');
      group.className = 'fitness-routine-log-group bl-v11-completed-log-group';
      group.innerHTML = '<h3>Completed on this date</h3><div class="bl-v11-completed-log-list"></div>';
      host.appendChild(group);
    }
    const list = group.querySelector('.bl-v11-completed-log-list');
    const signature = missing.map((item) => `${item.id}:${item.name}:${entries[item.id]?.note || ''}`).join('|');
    if (list.dataset.signature === signature) return;
    list.dataset.signature = signature;
    list.innerHTML = missing.map((item) => {
      const entry = entries[item.id] || {};
      return `<article class="session-card fitness-routine-log-item complete bl-v11-preserved-completion">
        <div class="fitness-log-item-head"><label class="fitness-log-completion"><input type="checkbox" checked data-fitness-log-complete="${esc(item.id)}" data-fitness-log-date="${esc(date)}"><span><strong>${esc(item.name || 'Fitness activity')}</strong><small>Completed on this date</small></span></label></div>
        <label class="field-stack fitness-log-note"><span>Optional note</span><textarea rows="2" maxlength="800" data-fitness-log-note="${esc(item.id)}" data-fitness-log-date="${esc(date)}">${esc(entry.note || '')}</textarea></label>
      </article>`;
    }).join('');
  }

  function decorateFitnessLog(root) {
    if (app !== 'fitness') return;
    restoreFitnessCompletedRows(root);
    $$('#fitnessRoutineLogItems .fitness-routine-log-item', root).forEach((card) => {
      const head = card.querySelector('.fitness-log-item-head');
      const id = String(card.querySelector('[data-fitness-log-complete]')?.dataset.fitnessLogComplete || '');
      if (!head || !id) return;
      let actions = head.querySelector(':scope>.bl-v11-log-actions');
      if (!actions) {
        actions = document.createElement('span');
        actions.className = 'bl-v11-log-actions';
        head.appendChild(actions);
      }
      if (!actions.querySelector('[data-v11-log-details]')) {
        const details = document.createElement('button');
        details.type = 'button';
        details.className = 'tiny-btn';
        details.dataset.v11LogDetails = 'true';
        details.textContent = 'Details';
        details.setAttribute('aria-expanded','false');
        actions.appendChild(details);
        card.classList.add('bl-v11-log-details-collapsed');
      }
      if (!actions.querySelector('[data-v11-remove-fitness]')) {
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'tiny-btn';
        remove.dataset.v11RemoveFitness = id;
        remove.textContent = 'Remove';
        actions.appendChild(remove);
      }
    });
  }

  function startRemoval(button, type) {
    const actions = button.closest('.bl-v11-log-actions');
    if (!actions || actions.querySelector('.bl-v11-remove-confirm')) return;
    button.hidden = true;
    const confirm = document.createElement('span');
    confirm.className = 'bl-v11-remove-confirm';
    confirm.dataset.removeType = type;
    confirm.dataset.removeId = type === 'skin' ? String(button.dataset.v11RemoveSkin || '') : String(button.dataset.v11RemoveFitness || '');
    confirm.innerHTML = '<span>Remove?</span><button type="button" class="tiny-btn" data-v11-remove-confirm>Yes</button><button type="button" class="tiny-btn" data-v11-remove-cancel>Cancel</button>';
    actions.appendChild(confirm);
  }

  function confirmRemoval(confirm) {
    const type = String(confirm?.dataset.removeType || '');
    const id = String(confirm?.dataset.removeId || '');
    if (!id) return;
    if (type === 'skin') {
      const request = document.querySelector(`#routineItems [data-routine-item="${CSS.escape(id)}"] [data-remove-request]`);
      request?.click();
      global.requestAnimationFrame(() => document.querySelector(`#routineItems [data-routine-item="${CSS.escape(id)}"] [data-remove-confirm]`)?.click());
    } else {
      const request = document.querySelector(`[data-activity-card="${CSS.escape(id)}"] [data-activity-remove-request]`);
      request?.click();
      global.requestAnimationFrame(() => document.querySelector(`[data-activity-card="${CSS.escape(id)}"] [data-activity-remove-confirm="${CSS.escape(id)}"]`)?.click());
    }
  }

  function openSummaryMarker(marker, root) {
    const filter = String(marker.dataset.calendarSummaryFilter || '');
    if (!filter) return;
    if (app === 'skin') {
      $('[data-routine-view="summary"]', root)?.click();
      const select = ensureSkinSummaryFilter(root);
      if (select && Array.from(select.options).some((option) => option.value === filter)) {
        select.value = filter;
        applySkinSummaryFilter(root);
      }
    } else {
      $('[data-fitness-routine-view="summary"]', root)?.click();
      const select = $('#fitnessSummaryGroupFilter', root);
      if (select && Array.from(select.options || []).some((option) => option.value === filter)) {
        select.value = filter;
        select.dispatchEvent(new Event('change',{ bubbles:true }));
      }
    }
  }

  function cleanLegacyArtifacts(root) {
    $$('.bl-completed-routines', root).forEach((node) => node.remove());
    $$('.routine-log-item[hidden],.fitness-routine-log-item[hidden]', root).forEach((card) => { card.hidden = false; });
    $$('.routine-log-group[hidden],.fitness-routine-log-group[hidden]', root).forEach((group) => { group.hidden = false; });
    $$('.bl-routine-select-shell', root).forEach((shell) => {
      const select = shell.querySelector(':scope>select');
      if (select && shell.childElementCount === 1) shell.replaceWith(select);
    });
    $$('.bl-search-select', root).forEach((node) => node.remove());
    $$('.bl-search-select-source', root).forEach((select) => select.classList.remove('bl-search-select-source'));
  }

  function patch() {
    frame = 0;
    if (patching) return;
    const root = $(rootSelector);
    if (!root) return;
    patching = true;
    try {
      root.classList.add('bl-routine-stability-v11');
      cleanLegacyArtifacts(root);
      normaliseDateControls(root);
      normaliseTerminology(root);
      moveVisibilityControl(root);
      if (app === 'skin') {
        ensureSkinGroupCheckboxes(root);
        ensureSkinSummaryFilter(root);
        applySkinSummaryFilter(root);
        addSkinLogRemoveControls(root);
      } else {
        decorateFitnessLog(root);
      }
      decorateCalendar(root);
      document.documentElement.setAttribute('data-baseline-routine-stability','v11');
    } finally {
      patching = false;
    }
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
        openSummaryMarker(marker, root);
        schedule();
        return;
      }
      const details = event.target?.closest?.('[data-v11-log-details]');
      if (details) {
        const card = details.closest('.fitness-routine-log-item');
        const collapsed = card?.classList.toggle('bl-v11-log-details-collapsed');
        details.textContent = collapsed ? 'Details' : 'Hide details';
        details.setAttribute('aria-expanded',collapsed ? 'false' : 'true');
        return;
      }
      const skinRemove = event.target?.closest?.('[data-v11-remove-skin]');
      if (skinRemove) { event.preventDefault(); startRemoval(skinRemove,'skin'); return; }
      const fitnessRemove = event.target?.closest?.('[data-v11-remove-fitness]');
      if (fitnessRemove) { event.preventDefault(); startRemoval(fitnessRemove,'fitness'); return; }
      const cancel = event.target?.closest?.('[data-v11-remove-cancel]');
      if (cancel) {
        const confirm = cancel.closest('.bl-v11-remove-confirm');
        const actions = confirm?.parentElement;
        confirm?.remove();
        actions?.querySelector('[data-v11-remove-skin],[data-v11-remove-fitness]')?.removeAttribute('hidden');
        return;
      }
      const yes = event.target?.closest?.('[data-v11-remove-confirm]');
      if (yes) { event.preventDefault(); confirmRemoval(yes.closest('.bl-v11-remove-confirm')); return; }
    }, true);

    document.addEventListener('keydown',(event) => {
      const marker = event.target?.closest?.('[data-calendar-summary-filter]');
      if (marker && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        event.stopPropagation();
        const root = $(rootSelector);
        if (root) openSummaryMarker(marker, root);
      }
    }, true);

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
    }, true);

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
        if (patching) return;
        if (mutations.some((mutation) => mutation.type === 'childList')) schedule();
      });
      observer.observe(root,{ childList:true,subtree:true });
    }
    patch();
    [60,180,420].forEach((delay) => global.setTimeout(schedule,delay));
  }

  global.addEventListener('pagehide',() => observer?.disconnect(),{ once:true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

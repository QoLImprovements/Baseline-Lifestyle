/* Baseline Lifestyle — My Routine coherence v12.

   SITEWIDE INVARIANTS
   -------------------
   - My Routine is one product across Skincare, Fitness and Public Routines.
   - Skincare's comprehensive Routine Summary is the structural template.
   - Public Routines are read-only My Routine views, never a separate mini UI.
   - Dropdowns are native/shared controls: never clone a select or add a second arrow.
   - Calendar markers are group/plan identities. A Calisthenics plan gets one marker,
     never one marker per exercise. Markers show only a circled number; their caption
     is exposed by title/aria-label and their click target opens a filtered Summary.
   - System palettes own colour. This layer adds no outsider colour tokens.
   - Routine Log completion is reversible on the date being viewed.
   - This layer never hides the page behind a loading screen and never owns page scroll.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_COHERENCE_V12__) return;
  global.__BASELINE_ROUTINE_COHERENCE_V12__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const rootSelector = app === 'skin' ? '#routine' : '#my-plan';
  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[character]));
  const cssEscape = (value) => global.CSS?.escape ? global.CSS.escape(String(value)) : String(value).replace(/[^a-zA-Z0-9_-]/g,'\\$&');
  let scheduled = 0;
  let decorating = false;
  let skinGroupBusy = false;
  const observers = [];

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
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
    return String($(app === 'skin' ? '#routineLogDate' : '#fitnessRoutineLogDate')?.value || todayIso());
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

  function fitnessPlans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
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

  function completionDate(session) {
    if (session?.completedAt) {
      const text = String(session.completedAt);
      if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0,10);
      const date = new Date(text);
      if (!Number.isNaN(date.getTime())) return date.toLocaleDateString('sv-SE');
    }
    const seconds = Number(session?.completed_at || 0);
    if (seconds > 0) return new Date(seconds * 1000).toLocaleDateString('sv-SE');
    return '';
  }

  function removeLegacyDropdownCopies(root) {
    if (!root) return;
    $$('.bl-search-select',root).forEach((node) => node.remove());
    $$('.bl-routine-select-shell',root).forEach((shell) => {
      const select = shell.querySelector(':scope>select');
      if (select) shell.replaceWith(select);
      else shell.remove();
    });
    $$('.bl-v11-calendar-markers,.bl-v11-log-actions,.bl-v11-completed-log-group',root).forEach((node) => node.remove());
    const controls = [
      ['routineVisibility','[data-routine-panel="public"]'],
      ['publicRoutineName','[data-routine-panel="public"]'],
      ['skinRoutineSummaryFilter','[data-routine-panel="summary"]'],
      ['fitnessRoutineVisibility','[data-fitness-routine-panel="public"]'],
      ['fitnessPublicRoutineName','[data-fitness-routine-panel="public"]'],
      ['fitnessSummaryGroupFilter','[data-fitness-routine-panel="summary"]']
    ];
    controls.forEach(([id,preferred]) => {
      const matches = $$(`#${cssEscape(id)}`,root);
      if (matches.length < 2) return;
      const keep = matches.find((node) => node.closest(preferred)) || matches[0];
      matches.forEach((node) => { if (node !== keep) node.remove(); });
    });
  }

  function normaliseVisibility(root) {
    const panel = app === 'skin' ? $('[data-routine-panel="public"]',root) : $('[data-fitness-routine-panel="public"]',root);
    const select = $(app === 'skin' ? '#routineVisibility' : '#fitnessRoutineVisibility',root);
    if (!panel || !select) return;
    let label = select.closest('label');
    if (!label) {
      label = document.createElement('label');
      label.className = 'field-stack';
      select.before(label);
      label.appendChild(select);
    }
    label.classList.add('bl-routine-visibility-control');
    let text = label.querySelector(':scope>span');
    if (!text) {
      text = document.createElement('span');
      label.prepend(text);
    }
    text.textContent = 'My Routine Visibility';
    const head = app === 'skin' ? $('.routine-public-head',panel) : $('.section-head-actions',panel);
    if (head && label.parentElement !== head) head.appendChild(label);
    $$('h1,h2,h3,h4',panel).forEach((heading) => {
      if (String(heading.textContent || '').trim() === 'Public Routine Visibility') heading.remove();
    });
  }

  function replaceExactText(root, from, to) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const value = String(node.nodeValue || '');
      if (value.trim() === from) node.nodeValue = value.replace(from,to);
    });
  }

  function removeExactParagraphs(root, phrases) {
    $$('p,.note,.status',root).forEach((node) => {
      const value = String(node.textContent || '').trim();
      if (phrases.includes(value)) node.remove();
    });
  }

  function normaliseText(root) {
    const replacements = [
      ['Ungrouped routine actions','Individual Routine Steps'],
      ['Ungrouped routine items','Individual Routine Steps'],
      ['Ungrouped','Individual Routine Steps'],
      ['All routine items','All Routine Steps'],
      ['All routine actions','All Routine Steps'],
      ['Individual routine items','Individual Routine Steps'],
      ['Individual routine actions','Individual Routine Steps'],
      ['Activity performed date','Date'],
      ['Log date','Date'],
      ['Days each week','Days Per Week']
    ];
    replacements.forEach(([from,to]) => replaceExactText(root,from,to));
    $$('option,optgroup',root).forEach((node) => {
      const value = String(node.tagName === 'OPTGROUP' ? node.label : node.textContent || '').trim();
      const match = replacements.find(([from]) => from === value);
      if (!match) return;
      if (node.tagName === 'OPTGROUP') node.label = match[1];
      else node.textContent = match[1];
    });
    removeExactParagraphs(root,[
      'Record calisthenics and other planned fitness activity for the selected date.',
      'Search the grouped catalogue, add an activity, then set its schedule and the details relevant to that activity.',
      'The current workout is shown first. Completed workouts and upcoming workouts are separated into their own tabs.',
      'Keep separate plans for muscle groups, sports preparation or training days.',
      'Current workout available within your weekly frequency.',
      'Type to find an action or open the grouped dropdown, then set its time, frequency, benefit summary and personal notes.'
    ]);
    const walker = document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      let value = String(node.nodeValue || '');
      value = value.replace(/Session\s+(\d+)\s*[-–—]\s*Current\b/g,'Session $1');
      value = value.replace(/\bStart:\s*/g,'Workout Date: ');
      value = value.replace(/^Saved plan\s*[—–-]\s*/i,'');
      node.nodeValue = value;
    });
  }

  function normaliseFitnessFrequencyRange(root) {
    if (app !== 'fitness') return;
    const freq = $('#freq',root);
    const range = $('#frequencyRangeMax',root);
    if (freq) {
      const label = root.querySelector('label[for="freq"]');
      if (label) label.textContent = 'Days Per Week';
      Array.from(freq.options || []).forEach((option) => {
        const number = Number(String(option.value || option.textContent || '').replace(/\D/g,''));
        if (number >= 1 && number <= 7) option.textContent = String(number);
      });
      freq.setAttribute('aria-label','Days Per Week minimum');
    }
    if (!range) return;
    range.setAttribute('aria-label','Maximum days per week');
    const rangeLabel = root.querySelector('label[for="frequencyRangeMax"]');
    if (rangeLabel) rangeLabel.remove();
    const grid = range.closest('.fitness-frequency-grid');
    if (grid && !grid.querySelector(':scope>.bl-frequency-range-dash')) {
      const dash = document.createElement('span');
      dash.className = 'bl-frequency-range-dash';
      dash.textContent = '–';
      const maxField = range.closest('.field-stack');
      if (maxField) grid.insertBefore(dash,maxField);
    }
  }

  function normaliseRoutineGroupHeadings(root) {
    const headings = $$('h2,h3,h4',root).filter((heading) => String(heading.textContent || '').trim() === 'Routine Groups');
    const seenContainers = new Set();
    headings.forEach((heading) => {
      const container = heading.parentElement;
      if (!container) return;
      const key = container.closest('.card,.fitness-routine-card,.routine-card,.bl-routine-card') || container;
      if (seenContainers.has(key)) heading.remove();
      else seenContainers.add(key);
    });
  }

  function normaliseSavedPlanHeading(root) {
    if (app !== 'fitness') return;
    const heading = $('#myPlanSavedWrap h2',root);
    if (!heading) return;
    try {
      const plans = global.BASELINE_fitnessPlans?.getPlans?.() || [];
      const selected = Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0);
      const plan = plans.find((candidate) => Number(candidate?.planId) === selected) || plans[0];
      const name = String(plan?.planJson?.name || plan?.name || '').trim();
      if (name) heading.textContent = name;
    } catch (_error) {}
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
      target.before(control);
      select = control.querySelector('select');
    }
    const routine = skinState();
    const data = skinGroups();
    const signature = JSON.stringify({ groups:data.groups.map((group) => [group.id,group.title]),items:routine.items.map((item) => [item.id,item.title]) });
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
    const select = ensureSkinSummaryFilter(root);
    const target = $('#routineSummary',root);
    if (!select || !target) return;
    const value = String(select.value || 'all');
    const routine = skinState();
    const data = skinGroups();
    const itemId = value.startsWith('item:') ? value.slice(5) : '';
    const item = itemId ? routine.items.find((candidate) => String(candidate.id) === itemId) : null;
    const itemGroupId = item ? String(data.assignments[itemId] || '') : '';
    $$('.routine-summary-group',target).forEach((section) => {
      const heading = normalTitle(section.querySelector('h3')?.textContent);
      const group = data.groups.find((candidate) => normalTitle(candidate.title) === heading);
      const groupId = String(group?.id || '');
      let sectionVisible = value === 'all';
      if (value.startsWith('group:')) sectionVisible = groupId === value.slice(6);
      if (item) sectionVisible = itemGroupId ? groupId === itemGroupId : heading === 'individual routine steps';
      section.hidden = !sectionVisible;
      $$('.routine-summary-item',section).forEach((card) => {
        if (!item) { card.hidden = !sectionVisible; return; }
        const title = String(card.querySelector('.routine-summary-title strong')?.textContent || card.querySelector('strong')?.textContent || '').trim();
        card.hidden = !(sectionVisible && title.localeCompare(String(item.title || '').trim(),'en-GB',{ sensitivity:'base' }) === 0);
      });
    });
  }

  function normaliseFitnessSummaryFilter(root) {
    if (app !== 'fitness') return null;
    const select = $('#fitnessSummaryGroupFilter',root);
    if (!select) return null;
    Array.from(select.options).forEach((option) => {
      if (option.value === 'all') option.textContent = 'All Routine Steps';
    });
    Array.from(select.querySelectorAll('optgroup')).forEach((group) => {
      const label = String(group.label || '').toLocaleLowerCase('en-GB');
      if (label.includes('routine group')) group.label = 'Routine Groups';
      if (label.includes('individual') || label.includes('ungrouped')) group.label = 'Individual Routine Steps';
    });
    return select;
  }

  function applyFitnessSummaryFilter(root) {
    const select = normaliseFitnessSummaryFilter(root);
    const target = $('#fitnessExerciseSummary',root);
    if (!select || !target) return;
    const value = String(select.value || 'all');
    $$('.fitness-summary-group',target).forEach((section) => {
      const groupId = String(section.dataset.summaryGroup || '');
      let showSection = value === 'all';
      if (value.startsWith('group:')) showSection = groupId === value.slice(6);
      if (value.startsWith('entity:')) showSection = Boolean(section.querySelector(`[data-v4-entity="${cssEscape(value.slice(7))}"]`));
      section.hidden = !showSection;
      $$('[data-v4-entity]',section).forEach((card) => {
        card.hidden = value.startsWith('entity:') ? card.dataset.v4Entity !== value.slice(7) : !showSection;
      });
    });
  }

  async function setSkinGroupComplete(box) {
    if (skinGroupBusy) return;
    let ids = [];
    try { ids = JSON.parse(box.dataset.itemIds || '[]'); } catch (_error) {}
    if (!ids.length) return;
    const checked = box.checked;
    skinGroupBusy = true;
    try {
      for (const id of ids) {
        const selector = `#routineLogItems [data-log-complete="${cssEscape(id)}"]`;
        const child = document.querySelector(selector);
        if (!child || child.checked === checked) continue;
        child.checked = checked;
        child.dispatchEvent(new Event('change',{ bubbles:true }));
        await new Promise((resolve) => global.setTimeout(resolve,0));
      }
    } finally {
      skinGroupBusy = false;
      schedule();
    }
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
        label.innerHTML = '<input type="checkbox" data-routine-group-complete>';
        head.appendChild(label);
      }
      const box = label.querySelector('[data-routine-group-complete]');
      const complete = children.filter((child) => child.checked).length;
      box.checked = complete === children.length;
      box.indeterminate = complete > 0 && complete < children.length;
      box.dataset.itemIds = JSON.stringify(children.map((child) => String(child.dataset.logComplete || '')).filter(Boolean));
      const name = String(head.querySelector('h3')?.textContent || 'routine group').trim();
      box.setAttribute('aria-label',`Complete ${name}`);
      box.title = `Complete ${name}`;
    });
  }

  function preserveFitnessCompletedRows(root) {
    if (app !== 'fitness') return;
    const host = $('#fitnessRoutineLogItems',root);
    if (!host) return;
    $$('.bl-routine-preserved-log',host).forEach((node) => node.remove());
    const state = fitnessState();
    const date = selectedDate();
    const logs = state.logs?.[date] || {};
    const visibleIds = new Set($$('[data-fitness-log-complete]',host).map((box) => String(box.dataset.fitnessLogComplete || '')));
    const missing = (state.activities || []).filter((item) => logs[item.id]?.completed && !visibleIds.has(String(item.id)));
    if (!missing.length) return;
    const labels = { cardio:'Cardio',other:'Other Fitness Activity',sports:'Sports' };
    const bySection = new Map();
    missing.forEach((item) => {
      const key = String(item.section || 'other');
      if (!bySection.has(key)) bySection.set(key,[]);
      bySection.get(key).push(item);
    });
    bySection.forEach((items,section) => {
      const group = document.createElement('section');
      group.className = 'fitness-routine-log-group bl-routine-preserved-log';
      group.innerHTML = `<h3>${esc(labels[section] || 'Fitness Activity')}</h3>${items.map((item) => `<article class="session-card fitness-routine-log-item complete"><div class="fitness-log-item-head"><label class="fitness-log-completion"><input type="checkbox" checked data-fitness-log-complete="${esc(item.id)}" data-fitness-log-date="${esc(date)}"><span><strong>${esc(item.name || 'Fitness activity')}</strong><small>Completed on this date</small></span></label></div></article>`).join('')}`;
      host.appendChild(group);
    });
  }

  function skinMarkersForDate(date) {
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
      const groupId = String(data.assignments[itemId] || '');
      if (groupId) {
        const key = `group:${groupId}`;
        if (seen.has(key)) return;
        seen.add(key);
        const index = data.groups.findIndex((group) => String(group.id) === groupId);
        if (index >= 0) markers.push({ number:index + 1,label:data.groups[index].title,target:key });
      } else {
        const target = `item:${item.id}`;
        if (seen.has(target)) return;
        seen.add(target);
        const index = ungrouped.findIndex((candidate) => String(candidate.id) === String(item.id));
        markers.push({ number:data.groups.length + Math.max(0,index) + 1,label:item.title || 'Routine Step',target });
      }
    });
    return markers;
  }

  function fitnessMarkersForDate(date) {
    const routine = fitnessState();
    const plans = fitnessPlans();
    const data = fitnessGroups();
    const entities = [];
    Object.entries(routine.logs?.[date] || {}).forEach(([id,entry]) => {
      if (!entry?.completed) return;
      const item = (routine.activities || []).find((candidate) => String(candidate.id) === String(id));
      if (item) entities.push({ key:`activity:${item.id}`,label:item.name || 'Fitness activity' });
    });
    plans.forEach((plan) => {
      if ((plan.sessions || []).some((session) => String(session.status || '') === 'done' && completionDate(session) === date)) {
        entities.push({ key:`plan:${Number(plan.planId)}`,label:String(plan.planJson?.name || plan.name || 'Calisthenics') });
      }
    });
    const all = plans.map((plan) => ({ key:`plan:${Number(plan.planId)}`,label:String(plan.planJson?.name || plan.name || 'Calisthenics') }))
      .concat((routine.activities || []).map((item) => ({ key:`activity:${item.id}`,label:item.name || 'Fitness activity' })));
    const ungrouped = all.filter((entity) => !data.assignments[entity.key]);
    const seen = new Set();
    const markers = [];
    entities.forEach((entity) => {
      const groupId = String(data.assignments[entity.key] || '');
      if (groupId) {
        const target = `group:${groupId}`;
        if (seen.has(target)) return;
        seen.add(target);
        const index = data.groups.findIndex((group) => String(group.id) === groupId);
        if (index >= 0) markers.push({ number:index + 1,label:data.groups[index].title,target });
      } else {
        const target = `entity:${entity.key}`;
        if (seen.has(target)) return;
        seen.add(target);
        const index = ungrouped.findIndex((candidate) => candidate.key === entity.key);
        markers.push({ number:data.groups.length + Math.max(0,index) + 1,label:entity.label,target });
      }
    });
    return markers;
  }

  function decorateCalendar(root) {
    const days = app === 'skin' ? $$('#routineCalendarGrid [data-calendar-date]',root) : $$('#fitnessCalendarGrid [data-calendar-date]',root);
    days.forEach((day) => {
      const date = String(day.dataset.calendarDate || '');
      if (!date) return;
      const markers = app === 'skin' ? skinMarkersForDate(date) : fitnessMarkersForDate(date);
      let wrap = day.querySelector(':scope>.bl-routine-calendar-markers');
      if (!markers.length) { wrap?.remove(); return; }
      if (!wrap) {
        wrap = document.createElement('span');
        wrap.className = 'bl-routine-calendar-markers';
        day.appendChild(wrap);
      }
      const signature = markers.map((marker) => `${marker.number}:${marker.label}:${marker.target}`).join('|');
      if (wrap.dataset.signature === signature) return;
      wrap.dataset.signature = signature;
      wrap.innerHTML = markers.map((marker) => `<button type="button" class="bl-routine-calendar-marker" data-routine-summary-target="${esc(marker.target)}" title="${esc(marker.label)}" aria-label="Open Routine Summary: ${esc(marker.label)}">${marker.number}</button>`).join('');
    });
  }

  function openSummary(target,root) {
    if (!target) return;
    if (app === 'skin') {
      $('[data-routine-view="summary"]',root)?.click();
      global.setTimeout(() => {
        const select = ensureSkinSummaryFilter(root);
        if (select && Array.from(select.options).some((option) => option.value === target)) {
          select.value = target;
          applySkinSummaryFilter(root);
          select.focus({ preventScroll:true });
        }
      },0);
      return;
    }
    $('[data-fitness-routine-view="summary"]',root)?.click();
    global.setTimeout(() => {
      const select = normaliseFitnessSummaryFilter(root);
      if (select && Array.from(select.options).some((option) => option.value === target)) {
        select.value = target;
        applyFitnessSummaryFilter(root);
        select.focus({ preventScroll:true });
      }
    },0);
  }

  function patch() {
    scheduled = 0;
    if (decorating) return;
    const root = $(rootSelector);
    if (!root) return;
    decorating = true;
    try {
      root.classList.add('bl-routine-coherence-v12');
      removeLegacyDropdownCopies(root);
      normaliseText(root);
      normaliseFitnessFrequencyRange(root);
      normaliseRoutineGroupHeadings(root);
      normaliseSavedPlanHeading(root);
      normaliseVisibility(root);
      if (app === 'skin') {
        ensureSkinSummaryFilter(root);
        applySkinSummaryFilter(root);
        ensureSkinGroupCheckboxes(root);
      } else {
        normaliseFitnessSummaryFilter(root);
        applyFitnessSummaryFilter(root);
        preserveFitnessCompletedRows(root);
      }
      decorateCalendar(root);
      document.documentElement.setAttribute('data-baseline-routine-coherence','v12');
    } finally { decorating = false; }
  }

  function schedule() {
    if (scheduled) return;
    scheduled = global.requestAnimationFrame(patch);
  }

  function bindObservers(root) {
    if (typeof MutationObserver === 'undefined') return;
    const targets = ['#routineCalendarGrid','#fitnessCalendarGrid','#routineLogItems','#fitnessRoutineLogItems','#routineSummary','#fitnessExerciseSummary'];
    targets.forEach((selector) => {
      const target = $(selector,root);
      if (!target) return;
      const observer = new MutationObserver((mutations) => {
        if (decorating) return;
        const meaningful = mutations.some((mutation) => Array.from(mutation.addedNodes || []).concat(Array.from(mutation.removedNodes || [])).some((node) => {
          if (node?.nodeType !== 1) return false;
          return !node.matches?.('.bl-routine-calendar-markers,.bl-routine-group-complete,.bl-routine-preserved-log') && !node.closest?.('.bl-routine-calendar-markers,.bl-routine-group-complete,.bl-routine-preserved-log');
        }));
        if (meaningful) schedule();
      });
      observer.observe(target,{ childList:true,subtree:true });
      observers.push(observer);
    });
  }

  function bind(root) {
    root.addEventListener('click',(event) => {
      const marker = event.target?.closest?.('[data-routine-summary-target]');
      if (marker) {
        event.preventDefault();
        event.stopPropagation();
        openSummary(String(marker.dataset.routineSummaryTarget || ''),root);
      }
    },true);

    root.addEventListener('change',(event) => {
      if (event.target?.matches?.('[data-routine-group-complete]')) {
        event.stopPropagation();
        setSkinGroupComplete(event.target);
        return;
      }
      if (event.target?.id === 'skinRoutineSummaryFilter') applySkinSummaryFilter(root);
      if (event.target?.id === 'fitnessSummaryGroupFilter') applyFitnessSummaryFilter(root);
      global.setTimeout(schedule,0);
    },true);

    [
      'baseline:routine-rendered','baseline:skincare-routine-updated','baseline:fitness-routine-updated',
      'baseline:fitness-plans-updated','baseline:fitness-workout-updated','baseline:routine-settings-changed',
      'baseline:fitness-summary-rendered','baseline:fitness-routine-view-changed'
    ].forEach((name) => document.addEventListener(name,schedule));
  }

  function boot() {
    const root = $(rootSelector);
    if (!root) return;
    bind(root);
    bindObservers(root);
    patch();
    global.setTimeout(schedule,40);
    global.setTimeout(schedule,180);
  }

  global.addEventListener('pagehide',() => observers.forEach((observer) => observer.disconnect()),{ once:true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

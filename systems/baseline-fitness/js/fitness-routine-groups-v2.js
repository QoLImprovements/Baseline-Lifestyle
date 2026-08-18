/* Baseline Fitness — single owner for Fitness Routine group editing v6.

   OWNERSHIP CONTRACT
   ------------------
   This module owns Fitness group definitions/assignments and the grouping of
   existing Routine Log cards. It does not render a second Log, Summary, Plan or
   Public Routine interface. Presentation lives in Fitness/shared CSS.

   ROUTINE PLAN GROUPS CONTRACT
   ----------------------------
   Routine Groups appears ONCE above the four collapsible Routine Plan category
   cards and is itself collapsible. The editor is group-first rather than a long
   assignment table:
     1. create a group when needed;
     2. select one existing Routine Group from a dropdown;
     3. manage that group's Routine Activities with activity dropdown rows;
     4. "Add Another Activity" adds another activity dropdown, matching the
        Plan Generator's add-another interaction language.

   Collapsing Routine Groups must only hide/reveal its editor; it must not alter
   group assignments, selected group state, Routine Log grouping or Routine Plan
   navigation.

   Every saved Calisthenics plan / Cardio / Other Fitness Activity / Sport is a
   Routine Activity option. One activity can belong to only one Routine Group;
   selecting an activity already assigned elsewhere moves it to the selected
   group. Do not restore the old page-long Routine Steps -> group assignment
   table and do not split the manager into category-specific panels.

   The workspace host exists before this ordered dependency loads, so one bounded
   Log observer is sufficient. Do not add boot polling or runtime <style> blocks.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_GROUPS_V6__) return;
  global.__BASELINE_FITNESS_ROUTINE_GROUPS_V6__ = true;
  global.__BASELINE_FITNESS_ROUTINE_GROUPS_V5__ = true;
  global.__BASELINE_FITNESS_ROUTINE_GROUPS_V4__ = true;
  global.__BASELINE_FITNESS_ROUTINE_GROUPS_V3__ = true;
  global.__BASELINE_FITNESS_ROUTINE_GROUPS_V2__ = true;

  const document = global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app) !== 'fitness') return;
  const UI = global.BASELINE_RoutineSystem;
  if (!UI) return;

  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = UI.escapeHtml || ((value) => String(value == null ? '' : value));
  let frame = 0;
  let logObserver = null;
  let arrangingLog = false;
  let selectedGroupId = '';

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function readSettings() {
    try { return UI.readSettings?.(owner()) || {}; }
    catch (_error) { return {}; }
  }

  function groupData() {
    const value = readSettings();
    const seen = new Set();
    const groups = (Array.isArray(value.fitnessRoutineGroups) ? value.fitnessRoutineGroups : [])
      .map((group) => ({ id:String(group?.id || '').trim(),title:String(group?.title || '').trim() }))
      .filter((group) => group.id && group.title && !seen.has(group.id) && seen.add(group.id));
    const valid = new Set(groups.map((group) => group.id));
    const assignments = {};
    Object.entries(value.fitnessRoutineAssignments && typeof value.fitnessRoutineAssignments === 'object' ? value.fitnessRoutineAssignments : {}).forEach(([key,groupId]) => {
      if (valid.has(String(groupId))) assignments[String(key)] = String(groupId);
    });
    return { groups,assignments };
  }

  function save(data) {
    UI.writeSettings?.({ fitnessRoutineGroups:data.groups,fitnessRoutineAssignments:data.assignments },owner());
  }

  function entityList() {
    let planItems = [];
    let activities = [];
    try {
      planItems = (global.BASELINE_fitnessPlans?.getPlans?.() || []).map((plan,index) => ({
        key:`plan:${Number(plan.planId)}`,
        label:String(plan?.planJson?.name || `Calisthenics Plan ${index+1}`),
        section:'calisthenics'
      }));
    } catch (_error) {}
    try {
      activities = (global.BASELINE_fitnessRoutine?.getState?.().activities || []).map((activity) => ({
        key:`activity:${String(activity.id)}`,
        label:String(activity.name || 'Fitness activity'),
        section:String(activity.section || 'other')
      }));
    } catch (_error) {}
    return planItems.concat(activities);
  }

  function uniqueId() {
    return global.crypto?.randomUUID ? `fitness-group-${global.crypto.randomUUID()}` : `fitness-group-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
  }

  function resolveSelectedGroup(data) {
    if (selectedGroupId && data.groups.some((group) => group.id === selectedGroupId)) return selectedGroupId;
    selectedGroupId = data.groups[0]?.id || '';
    return selectedGroupId;
  }

  function groupSelectOptions(data,selected) {
    if (!data.groups.length) return '<option value="">No Routine Groups created</option>';
    return `<option value="">Select a Routine Group</option>${data.groups.map((group,index) => `<option value="${esc(group.id)}"${group.id === selected ? ' selected' : ''}>${index+1}. ${esc(group.title)}</option>`).join('')}`;
  }

  function activitySelectOptions(data,entities,groupId,currentKey='') {
    const assignedHere = new Set(Object.entries(data.assignments).filter(([,assignedGroup]) => assignedGroup === groupId).map(([key]) => key));
    return `<option value="">Select Routine Activity</option>${entities.map((entity) => {
      const duplicate = assignedHere.has(entity.key) && entity.key !== currentKey;
      return `<option value="${esc(entity.key)}"${entity.key === currentKey ? ' selected' : ''}${duplicate ? ' disabled' : ''}>${esc(entity.label)}</option>`;
    }).join('')}`;
  }

  function activityRowHtml(data,entities,groupId,currentKey='') {
    const label = entities.find((entity) => entity.key === currentKey)?.label || 'Routine Activity';
    return `<div class="bl-v4-activity-row" data-v4-activity-slot data-v4-slot-key="${esc(currentKey)}">
      <select data-v4-group-activity aria-label="${currentKey ? `Routine Activity: ${esc(label)}` : 'Select Routine Activity'}">${activitySelectOptions(data,entities,groupId,currentKey)}</select>
      <button type="button" class="tiny-btn bl-v4-activity-remove" data-v4-remove-activity aria-label="Remove ${esc(label)} from this Routine Group">×</button>
    </div>`;
  }

  function renderActivityEditor(card,data,entities,groupId) {
    const editor = $('[data-v4-activity-editor]',card);
    const list = $('[data-v4-activity-list]',card);
    if (!editor || !list) return;
    editor.hidden = !groupId;
    if (!groupId) {
      list.replaceChildren();
      return;
    }
    if (list.contains(document.activeElement)) return;
    const assigned = entities.filter((entity) => data.assignments[entity.key] === groupId);
    list.innerHTML = assigned.length
      ? assigned.map((entity) => activityRowHtml(data,entities,groupId,entity.key)).join('')
      : activityRowHtml(data,entities,groupId,'');
  }

  function appendActivitySlot() {
    const card = $('[data-v4-group-card="global"]');
    const groupSelect = $('[data-v4-group-select]',card);
    const list = $('[data-v4-activity-list]',card);
    const groupId = String(groupSelect?.value || selectedGroupId || '');
    if (!card || !list || !groupId) return;
    const data = groupData();
    const entities = entityList();
    const wrapper = document.createElement('div');
    wrapper.innerHTML = activityRowHtml(data,entities,groupId,'');
    const row = wrapper.firstElementChild;
    if (!row) return;
    list.appendChild(row);
    row.querySelector('select')?.focus();
  }

  function ensureGroupManager() {
    const planPanel = $('[data-fitness-routine-panel="plan"]');
    const planCards = $('.fitness-routine-plan-panels',planPanel);
    if (!planPanel || !planCards) return;

    let card = planPanel.querySelector(':scope>.bl-v4-group-card[data-v4-group-card="global"]');
    $$('.bl-v4-group-card',planPanel).forEach((node) => {
      if (node !== card) node.remove();
    });

    if (!card) {
      card = document.createElement('details');
      card.className = 'bl-v4-group-card bl-v4-group-card-global bl-v4-group-card-compact';
      card.dataset.v4GroupCard = 'global';
      card.open = true;
      card.innerHTML = `<summary class="bl-v4-group-card-summary">Routine Groups</summary>
        <div class="bl-v4-group-card-body">
          <div class="bl-v4-group-create">
            <label class="field-stack"><span>Group name</span><input type="text" maxlength="80" data-v4-group-name="global" placeholder="Name a routine group…"></label>
            <button type="button" class="action secondary" data-v4-create-group="global">Create Group</button>
          </div>
          <div class="bl-v4-group-editor">
            <div class="bl-v4-group-select-row">
              <label class="field-stack bl-v4-group-select-field"><span>Routine Group</span><select data-v4-group-select></select></label>
              <button type="button" class="tiny-btn bl-v4-selected-group-remove" data-v4-remove-selected-group aria-label="Remove selected Routine Group">×</button>
            </div>
            <div class="bl-v4-activity-editor" data-v4-activity-editor hidden>
              <span class="bl-v4-activities-label">Routine Activities</span>
              <div class="bl-v4-activity-list" data-v4-activity-list></div>
              <button type="button" class="action secondary bl-v4-add-activity" data-v4-add-activity>Add Another Activity</button>
            </div>
          </div>
        </div>`;
      planPanel.insertBefore(card,planCards);
    } else if (card.nextElementSibling !== planCards) {
      planPanel.insertBefore(card,planCards);
    }

    const data = groupData();
    const entities = entityList();
    const groupId = resolveSelectedGroup(data);
    const groupSelect = $('[data-v4-group-select]',card);
    const groupOptions = groupSelectOptions(data,groupId);
    if (groupSelect && !groupSelect.matches(':focus') && groupSelect.innerHTML !== groupOptions) groupSelect.innerHTML = groupOptions;
    if (groupSelect && groupSelect.value !== groupId && !groupSelect.matches(':focus')) groupSelect.value = groupId;
    const removeGroupButton = $('[data-v4-remove-selected-group]',card);
    if (removeGroupButton) removeGroupButton.hidden = !groupId;
    renderActivityEditor(card,data,entities,groupId);
    decoratePlanItemNumbers(data,entities);
  }

  function decoratePlanItemNumbers(data,entities) {
    const individual = entities.filter((entity) => !data.assignments[entity.key]);
    const numberByKey = new Map(individual.map((entity,index) => [entity.key,data.groups.length+index+1]));
    $$('.fitness-activity-item[data-activity-card]').forEach((card) => {
      const key = `activity:${String(card.dataset.activityCard || '')}`;
      let number = card.querySelector(':scope .bl-v4-number[data-v4-individual-number]');
      if (data.assignments[key]) {
        number?.remove();
        card.dataset.v4RoutineGroup=data.assignments[key];
        return;
      }
      delete card.dataset.v4RoutineGroup;
      const value = numberByKey.get(key);
      if (!value) { number?.remove();return; }
      if (!number) {
        number = document.createElement('span');
        number.className = 'bl-v4-number';
        number.dataset.v4IndividualNumber = 'true';
        const head = card.querySelector('.fitness-activity-item-head,.section-head-actions') || card;
        head.prepend(number);
      }
      number.textContent = String(value);
      number.setAttribute('aria-label',`${value}. ${entities.find((entity) => entity.key === key)?.label || 'Routine Activity'}`);
    });
  }

  function logEntityForNode(node) {
    const planButton = node.querySelector?.('[data-open-calisthenics-plan]');
    if (planButton) return `plan:${Number(planButton.dataset.openCalisthenicsPlan || 0)}`;
    const activityId = node.getAttribute?.('data-log-activity') || node.querySelector?.('[data-fitness-log-complete]')?.dataset.fitnessLogComplete || '';
    return activityId ? `activity:${String(activityId)}` : '';
  }

  function logCards(target) {
    const cards = [];
    $$('.fitness-calisthenics-log-card,.fitness-routine-log-item',target).forEach((node) => {
      if (cards.includes(node)) return;
      const nested = node.parentElement?.closest?.('.fitness-calisthenics-log-card,.fitness-routine-log-item');
      if (!nested) cards.push(node);
    });
    return cards;
  }

  function logAlreadyArranged(target) {
    const direct = Array.from(target?.children || []);
    return direct.length > 0 && direct.every((child) => child.matches?.('.bl-fitness-log-group,.bl-fitness-log-individual'));
  }

  function arrangeRoutineLog() {
    const target = $('#fitnessRoutineLogItems');
    if (!target || arrangingLog || logAlreadyArranged(target)) return;
    const cards = logCards(target);
    if (!cards.length) return;
    const keyed = cards.map((node) => ({ node,key:logEntityForNode(node) })).filter((entry) => entry.key);
    if (!keyed.length) return;
    const data = groupData();
    const assigned = new Set();
    const fragment = document.createDocumentFragment();
    arrangingLog = true;
    try {
      data.groups.forEach((group) => {
        const members = keyed.filter((entry) => data.assignments[entry.key] === group.id);
        if (!members.length) return;
        const section = document.createElement('section');
        section.className = 'bl-fitness-log-group';
        section.dataset.fitnessRoutineLogGroup = group.id;
        section.innerHTML = `<div class="bl-fitness-log-group-head"><h3>${esc(group.title)}</h3></div>`;
        members.forEach((entry) => {
          assigned.add(entry.key);
          entry.node.classList.add('bl-fitness-log-member');
          entry.node.classList.remove('bl-fitness-log-individual-item');
          entry.node.querySelectorAll(':scope .bl-fitness-log-isolated-number').forEach((number) => number.remove());
          section.appendChild(entry.node);
        });
        fragment.appendChild(section);
      });

      const individual = keyed.filter((entry) => !assigned.has(entry.key));
      if (individual.length) {
        const section = document.createElement('section');
        section.className = 'bl-fitness-log-individual';
        section.dataset.fitnessRoutineLogGroup = 'individual';
        individual.forEach((entry,index) => {
          entry.node.classList.remove('bl-fitness-log-member');
          entry.node.classList.add('bl-fitness-log-individual-item');
          let number = entry.node.querySelector(':scope>.bl-fitness-log-isolated-number');
          if (!number) {
            number = document.createElement('span');
            number.className = 'bl-fitness-log-isolated-number';
            number.setAttribute('aria-hidden','true');
            entry.node.prepend(number);
          }
          number.textContent = String(data.groups.length+index+1);
          section.appendChild(entry.node);
        });
        fragment.appendChild(section);
      }
      target.replaceChildren(fragment);
      target.dataset.fitnessRoutineLogGrouped = 'true';
    } finally { arrangingLog = false; }
  }

  function invalidateRoutineLogLayout() {
    const target = $('#fitnessRoutineLogItems');
    if (!target) return;
    delete target.dataset.fitnessRoutineLogGrouped;
    const cards = logCards(target);
    if (!cards.length) return;
    const fragment = document.createDocumentFragment();
    cards.forEach((card) => fragment.appendChild(card));
    arrangingLog = true;
    try { target.replaceChildren(fragment); }
    finally { arrangingLog = false; }
  }

  function createGroup() {
    const input = $('[data-v4-group-name="global"]');
    const title = String(input?.value || '').trim();
    if (!title) { input?.focus();return; }
    const data = groupData();
    if (data.groups.some((group) => group.title.localeCompare(title,'en-GB',{ sensitivity:'base' }) === 0)) { input?.focus();return; }
    const id = uniqueId();
    data.groups.push({ id,title });
    selectedGroupId = id;
    save(data);
    if (input) input.value='';
    invalidateRoutineLogLayout();
    schedule();
  }

  function removeGroup(id) {
    const data = groupData();
    const removedIndex = data.groups.findIndex((group) => group.id === id);
    data.groups = data.groups.filter((group) => group.id !== id);
    Object.keys(data.assignments).forEach((key) => { if (data.assignments[key] === id) delete data.assignments[key]; });
    if (selectedGroupId === id) selectedGroupId = data.groups[Math.max(0,Math.min(removedIndex,data.groups.length-1))]?.id || '';
    save(data);
    invalidateRoutineLogLayout();
    schedule();
  }

  function changeActivitySlot(select) {
    const card = select.closest('[data-v4-group-card="global"]');
    const row = select.closest('[data-v4-activity-slot]');
    const groupId = String($('[data-v4-group-select]',card)?.value || selectedGroupId || '');
    if (!row || !groupId) return;
    const oldKey = String(row.dataset.v4SlotKey || '');
    const newKey = String(select.value || '');
    const data = groupData();
    if (newKey && data.assignments[newKey] === groupId && newKey !== oldKey) {
      select.value = oldKey;
      return;
    }
    if (oldKey && oldKey !== newKey && data.assignments[oldKey] === groupId) delete data.assignments[oldKey];
    if (newKey) data.assignments[newKey] = groupId;
    row.dataset.v4SlotKey = newKey;
    save(data);
    invalidateRoutineLogLayout();
    schedule();
  }

  function removeActivitySlot(button) {
    const row = button.closest('[data-v4-activity-slot]');
    const card = button.closest('[data-v4-group-card="global"]');
    const list = $('[data-v4-activity-list]',card);
    const groupId = String($('[data-v4-group-select]',card)?.value || selectedGroupId || '');
    const key = String(row?.dataset.v4SlotKey || '');
    if (!row || !list) return;
    if (!key) {
      row.remove();
      if (!list.children.length) appendActivitySlot();
      return;
    }
    const data = groupData();
    if (groupId && data.assignments[key] === groupId) delete data.assignments[key];
    save(data);
    invalidateRoutineLogLayout();
    schedule();
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(() => {
      frame=0;
      ensureGroupManager();
      arrangeRoutineLog();
    });
  }

  function watchLog() {
    const target = $('#fitnessRoutineLogItems');
    if (!target || logObserver || typeof MutationObserver === 'undefined') return;
    logObserver = new MutationObserver(() => {
      if (!arrangingLog && !logAlreadyArranged(target)) arrangeRoutineLog();
    });
    logObserver.observe(target,{ childList:true,subtree:false });
  }

  function bind() {
    document.addEventListener('click',(event) => {
      const create = event.target?.closest?.('[data-v4-create-group]');
      if (create) { event.preventDefault();createGroup();return; }
      const removeSelected = event.target?.closest?.('[data-v4-remove-selected-group]');
      if (removeSelected) {
        event.preventDefault();
        const id = String($('[data-v4-group-select]',removeSelected.closest('[data-v4-group-card="global"]'))?.value || selectedGroupId || '');
        if (id) removeGroup(id);
        return;
      }
      const addActivity = event.target?.closest?.('[data-v4-add-activity]');
      if (addActivity) { event.preventDefault();appendActivitySlot();return; }
      const removeActivity = event.target?.closest?.('[data-v4-remove-activity]');
      if (removeActivity) { event.preventDefault();removeActivitySlot(removeActivity); }
    });

    document.addEventListener('keydown',(event) => {
      const input = event.target?.closest?.('[data-v4-group-name="global"]');
      if (input && event.key === 'Enter') { event.preventDefault();createGroup(); }
    });

    document.addEventListener('change',(event) => {
      const groupSelect = event.target?.closest?.('[data-v4-group-select]');
      if (groupSelect) {
        selectedGroupId = String(groupSelect.value || '');
        const card = groupSelect.closest('[data-v4-group-card="global"]');
        renderActivityEditor(card,groupData(),entityList(),selectedGroupId);
        const removeButton = $('[data-v4-remove-selected-group]',card);
        if (removeButton) removeButton.hidden = !selectedGroupId;
        return;
      }
      const activitySelect = event.target?.closest?.('[data-v4-group-activity]');
      if (activitySelect) changeActivitySlot(activitySelect);
    });

    document.addEventListener('baseline:fitness-plans-updated',schedule);
    document.addEventListener('baseline:routine-settings-changed',schedule);
    document.addEventListener('baseline:fitness-routine-updated',schedule);
    document.addEventListener('baseline:fitness-routine-view-changed',schedule);
  }

  function boot() {
    bind();
    watchLog();
    schedule();
  }

  global.addEventListener('pagehide',() => {
    if (frame) global.cancelAnimationFrame(frame);
    logObserver?.disconnect();
  },{ once:true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
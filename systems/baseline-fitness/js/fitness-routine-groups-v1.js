/* Baseline Fitness — single owner for Fitness Routine group editing.
   This module edits group data only. It does not render Routine Log/Summary/
   Public views and therefore cannot compete with the shared Routine authority. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_GROUPS_V1__) return;
  global.__BASELINE_FITNESS_ROUTINE_GROUPS_V1__ = true;
  if ((document.documentElement.dataset.app || document.body?.dataset.app) !== 'fitness') return;

  const document = global.document;
  const UI = global.BASELINE_RoutineSystem;
  if (!UI) return;
  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  let frame = 0;

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

  function normalisePlanPanels() {
    const plan = $('[data-fitness-routine-panel="plan"]');
    if (!plan) return;
    const nav = $('.fitness-routine-plan-tabs',plan);
    const host = $('.fitness-routine-plan-panels',plan);
    nav?.classList.add('bl-v4-plan-tabs');
    host?.classList.add('bl-v4-plan-host');
    ['calisthenics','cardio','other','sports'].forEach((section) => {
      const panel = host?.querySelector(`[data-fitness-routine-panel="${section}"]`);
      if (!panel) return;
      panel.dataset.fitnessPlanPanel = section;
      panel.classList.add('bl-v4-plan-panel');
    });
    const other = nav?.querySelector('[data-fitness-plan-view="other"]');
    if (other) other.textContent = 'Other Fitness Activities';
  }

  function groupOptions(selected,data) {
    return `<option value="">No routine group</option>${data.groups.map((group,index) => `<option value="${esc(group.id)}"${group.id === selected ? ' selected' : ''}>${index+1}. ${esc(group.title)}</option>`).join('')}`;
  }

  function ensureGroupCards() {
    normalisePlanPanels();
    const data = groupData();
    const entities = entityList();
    const labels = { calisthenics:'Calisthenics plans',cardio:'Cardio activities',other:'Other fitness activities',sports:'Sports activities' };
    ['calisthenics','cardio','other','sports'].forEach((section) => {
      const panel = $(`[data-fitness-plan-panel="${section}"]`);
      if (!panel) return;
      let card = panel.querySelector(':scope>.bl-v4-group-card');
      if (!card) {
        card = document.createElement('section');
        card.className = 'bl-v4-group-card';
        card.dataset.v4GroupCard = section;
        card.innerHTML = `<div><h3>Routine Groups</h3><p class="note">Create a group once, then assign plans or activities to it.</p></div><div class="bl-v4-group-create"><label class="field-stack"><span>Group name</span><input type="text" maxlength="80" data-v4-group-name="${section}" placeholder="Name a routine group…"></label><button type="button" class="action secondary" data-v4-create-group="${section}">Create Group</button></div><div class="bl-v4-group-list" data-v4-group-list="${section}"></div><div><h4>${esc(labels[section])}</h4><div class="bl-v4-assignment-list" data-v4-assignment-list="${section}"></div></div>`;
        panel.prepend(card);
      }
      const list = $(`[data-v4-group-list="${section}"]`,card);
      const groupsHtml = data.groups.length
        ? data.groups.map((group,index) => `<div class="bl-v4-group-row"><span class="bl-v4-number">${index+1}</span><strong>${esc(group.title)}</strong><button type="button" class="tiny-btn bl-v4-group-remove" data-v4-remove-group="${esc(group.id)}" aria-label="Remove ${esc(group.title)}">×</button></div>`).join('')
        : '<p class="note">No routine groups created yet.</p>';
      if (list && list.innerHTML !== groupsHtml) list.innerHTML = groupsHtml;

      const assignments = $(`[data-v4-assignment-list="${section}"]`,card);
      const members = entities.filter((entity) => entity.section === section);
      const assignmentHtml = members.length
        ? members.map((entity) => `<label class="bl-v4-assignment-row"><strong>${esc(entity.label)}</strong><select data-v4-entity-group="${esc(entity.key)}">${groupOptions(data.assignments[entity.key] || '',data)}</select></label>`).join('')
        : `<p class="note">No ${esc(labels[section].toLocaleLowerCase('en-GB'))} are currently saved.</p>`;
      if (assignments && assignments.innerHTML !== assignmentHtml && !assignments.contains(document.activeElement)) assignments.innerHTML = assignmentHtml;
    });
    decorateUngroupedNumbers(data,entities);
  }

  function decorateUngroupedNumbers(data,entities) {
    const ungrouped = entities.filter((entity) => !data.assignments[entity.key]);
    const numberByKey = new Map(ungrouped.map((entity,index) => [entity.key,data.groups.length+index+1]));
    $$('.fitness-activity-card[data-activity-card]').forEach((card) => {
      const key = `activity:${String(card.dataset.activityCard || '')}`;
      let number = card.querySelector(':scope .bl-v4-number[data-v4-ungrouped-number]');
      if (data.assignments[key]) { number?.remove();card.dataset.v4RoutineGroup=data.assignments[key];return; }
      delete card.dataset.v4RoutineGroup;
      const value = numberByKey.get(key);
      if (!value) { number?.remove();return; }
      if (!number) {
        number = document.createElement('span');
        number.className = 'bl-v4-number';
        number.dataset.v4UngroupedNumber = 'true';
        const head = card.querySelector('.fitness-activity-head,.section-head-actions') || card;
        head.prepend(number);
      }
      number.textContent = String(value);
      number.setAttribute('aria-label',`${value}. ${entities.find((entity) => entity.key === key)?.label || 'Routine item'}`);
    });
  }

  function createGroup(section) {
    const input = $(`[data-v4-group-name="${CSS.escape(section)}"]`);
    const title = String(input?.value || '').trim();
    if (!title) { input?.focus();return; }
    const data = groupData();
    if (data.groups.some((group) => group.title.localeCompare(title,'en-GB',{ sensitivity:'base' }) === 0)) {
      input?.focus();return;
    }
    data.groups.push({ id:uniqueId(),title });
    save(data);
    if (input) input.value='';
    schedule();
  }

  function removeGroup(id) {
    const data = groupData();
    data.groups = data.groups.filter((group) => group.id !== id);
    Object.keys(data.assignments).forEach((key) => { if (data.assignments[key] === id) delete data.assignments[key]; });
    save(data);schedule();
  }

  function assign(key,groupId) {
    const data = groupData();
    if (groupId && data.groups.some((group) => group.id === groupId)) data.assignments[key]=groupId;
    else delete data.assignments[key];
    save(data);schedule();
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(() => { frame=0;ensureGroupCards(); });
  }

  function bind() {
    document.addEventListener('click',(event) => {
      const create = event.target?.closest?.('[data-v4-create-group]');
      if (create) { event.preventDefault();createGroup(String(create.dataset.v4CreateGroup || 'other'));return; }
      const remove = event.target?.closest?.('[data-v4-remove-group]');
      if (remove) { event.preventDefault();removeGroup(String(remove.dataset.v4RemoveGroup || '')); }
    });
    document.addEventListener('keydown',(event) => {
      const input = event.target?.closest?.('[data-v4-group-name]');
      if (input && event.key === 'Enter') { event.preventDefault();createGroup(String(input.dataset.v4GroupName || 'other')); }
    });
    document.addEventListener('change',(event) => {
      const select = event.target?.closest?.('[data-v4-entity-group]');
      if (select) assign(String(select.dataset.v4EntityGroup || ''),String(select.value || ''));
    });
    document.addEventListener('baseline:fitness-plans-updated',schedule);
    document.addEventListener('baseline:routine-settings-changed',schedule);
    document.addEventListener('baseline:fitness-routine-updated',schedule);
    document.addEventListener('baseline:fitness-routine-view-changed',schedule);
  }

  function boot() {
    bind();schedule();
    [100,300,700].forEach((delay) => global.setTimeout(schedule,delay));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

/* Baseline Fitness — single owner for Fitness Routine group editing v2.

   OWNERSHIP CONTRACT
   ------------------
   This module owns Fitness group definitions/assignments and the grouping of
   existing Routine Log cards. It does not render a second Log, Summary, Plan or
   Public Routine interface. Presentation lives in Fitness/shared CSS.

   The workspace host exists before this ordered dependency loads, so one bounded
   Log observer is sufficient. Do not add boot polling or runtime <style> blocks.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_GROUPS_V2__) return;
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
  function groupOptions(selected,data) {
    return `<option value="">No routine group</option>${data.groups.map((group,index) => `<option value="${esc(group.id)}"${group.id === selected ? ' selected' : ''}>${index+1}. ${esc(group.title)}</option>`).join('')}`;
  }

  function ensureGroupCards() {
    const data = groupData();
    const entities = entityList();
    const labels = {
      calisthenics:{ title:'Calisthenics plans',empty:'calisthenics plans' },
      cardio:{ title:'Cardio activities',empty:'cardio activities' },
      other:{ title:'Other Fitness Activity',empty:'other fitness activities' },
      sports:{ title:'Sports activities',empty:'sports activities' }
    };
    ['calisthenics','cardio','other','sports'].forEach((section) => {
      const panel = $(`[data-fitness-routine-panel="${section}"]`);
      if (!panel) return;
      let card = panel.querySelector(':scope>.bl-v4-group-card');
      if (!card) {
        card = document.createElement('section');
        card.className = 'bl-v4-group-card';
        card.dataset.v4GroupCard = section;
        card.innerHTML = `<div><h3>Routine Groups</h3></div><div class="bl-v4-group-create"><label class="field-stack"><span>Group name</span><input type="text" maxlength="80" data-v4-group-name="${section}" placeholder="Name a routine group…"></label><button type="button" class="action secondary" data-v4-create-group="${section}">Create Group</button></div><div class="bl-v4-group-list" data-v4-group-list="${section}"></div><div><h4>${esc(labels[section].title)}</h4><div class="bl-v4-assignment-list" data-v4-assignment-list="${section}"></div></div>`;
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
        : `<p class="note">No ${esc(labels[section].empty)} are currently saved.</p>`;
      if (assignments && assignments.innerHTML !== assignmentHtml && !assignments.contains(document.activeElement)) assignments.innerHTML = assignmentHtml;
    });
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
      number.setAttribute('aria-label',`${value}. ${entities.find((entity) => entity.key === key)?.label || 'Routine Step'}`);
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

  function createGroup(section) {
    const input = $(`[data-v4-group-name="${global.CSS?.escape ? CSS.escape(section) : section}"]`);
    const title = String(input?.value || '').trim();
    if (!title) { input?.focus();return; }
    const data = groupData();
    if (data.groups.some((group) => group.title.localeCompare(title,'en-GB',{ sensitivity:'base' }) === 0)) { input?.focus();return; }
    data.groups.push({ id:uniqueId(),title });
    save(data);
    if (input) input.value='';
    invalidateRoutineLogLayout();
  }
  function removeGroup(id) {
    const data = groupData();
    data.groups = data.groups.filter((group) => group.id !== id);
    Object.keys(data.assignments).forEach((key) => { if (data.assignments[key] === id) delete data.assignments[key]; });
    save(data);
    invalidateRoutineLogLayout();
  }
  function assign(key,groupId) {
    const data = groupData();
    if (groupId && data.groups.some((group) => group.id === groupId)) data.assignments[key]=groupId;
    else delete data.assignments[key];
    save(data);
    invalidateRoutineLogLayout();
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(() => {
      frame=0;
      ensureGroupCards();
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

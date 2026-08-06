/* Baseline Lifestyle — sitewide My Routine group settings, numbering, summary filters and calendar links. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_GROUP_SETTINGS_V2__) return;
  global.__BASELINE_ROUTINE_GROUP_SETTINGS_V2__ = true;

  const UI = global.BASELINE_RoutineSystem;
  if (!UI) return;
  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  const isSkin = app === 'skin';
  const isFitness = app === 'fitness';
  if (!isSkin && !isFitness) return;

  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = UI.escapeHtml;
  const state = { frame:0, observer:null, applying:false, skinSummary:'all', fitnessSummary:'all', openSkin:new Set(), openFitness:new Set() };

  function owner() { return UI.routineOwner?.() || 'guest'; }
  function settings() { return UI.readSettings?.(owner()) || { startDay:'Monday' }; }
  function saveSettings(patch) { return UI.writeSettings?.(patch, owner()) || Object.assign(settings(), patch); }

  function schedule() {
    if (state.frame) return;
    state.frame = global.requestAnimationFrame(apply);
  }

  function apply() {
    state.frame = 0;
    if (state.applying) return;
    state.applying = true;
    state.observer?.disconnect();
    try {
      if (isSkin) applySkincare();
      if (isFitness) applyFitness();
    } finally {
      state.applying = false;
      const root = isSkin ? $('#routine') : $('#my-plan');
      if (root && state.observer) state.observer.observe(root, { childList:true, subtree:true });
    }
  }

  function routineSettingsControl(system) {
    const root = system === 'skin' ? $('[data-routine-panel="log"]') : $('[data-fitness-routine-panel="log"]');
    const card = system === 'skin' ? root?.querySelector('.routine-card') : root?.querySelector('.fitness-routine-card');
    if (!card) return;
    let button = card.querySelector('[data-bl-routine-log-settings-toggle]');
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = system === 'skin' ? 'routine-mini bl-routine-log-settings-button' : 'tiny-btn bl-routine-log-settings-button';
      button.dataset.blRoutineLogSettingsToggle = system;
      button.textContent = 'Settings';
      const header = system === 'skin' ? card.querySelector('.routine-log-head,.section-head-actions') : card.querySelector('.fitness-routine-log-head');
      if (header) header.append(button); else card.prepend(button);
    }
    let panel = card.querySelector('[data-bl-routine-log-settings]');
    if (!panel) {
      panel = document.createElement('section');
      panel.className = 'bl-routine-log-settings';
      panel.dataset.blRoutineLogSettings = system;
      panel.hidden = true;
      button.insertAdjacentElement('afterend', panel);
    }
    const current = settings().startDay || 'Monday';
    panel.innerHTML = `<div class="bl-routine-log-settings-row"><label for="${system}RoutineStartDay">Start day of week for My Routine</label><select id="${system}RoutineStartDay" data-bl-routine-start-day>${['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day) => `<option value="${day}"${day === current ? ' selected' : ''}>${day}</option>`).join('')}</select></div>`;
  }

  function skinOwnerKey(prefix) { return `${prefix}${owner()}`; }
  function readSkinRoutine() {
    try {
      const raw = global.localStorage?.getItem(skinOwnerKey('__bl_skincare_routine_v1__::'));
      const value = raw ? JSON.parse(raw) : {};
      return { items:Array.isArray(value?.items) ? value.items : Array.isArray(value?.routine) ? value.routine : [], logs:value?.logs && typeof value.logs === 'object' ? value.logs : {} };
    } catch (_error) { return { items:[], logs:{} }; }
  }
  function readSkinGroups() {
    try {
      const raw = global.localStorage?.getItem(skinOwnerKey('__bl_skincare_routine_groups_v3__::'));
      const value = raw ? JSON.parse(raw) : {};
      return { groups:Array.isArray(value?.groups) ? value.groups : [], assignments:value?.assignments && typeof value.assignments === 'object' ? value.assignments : {} };
    } catch (_error) { return { groups:[], assignments:{} }; }
  }
  async function saveSkinGroups(value) {
    const payload = { groups:value.groups, assignments:value.assignments, updatedAt:new Date().toISOString() };
    try { global.localStorage?.setItem(skinOwnerKey('__bl_skincare_routine_groups_v3__::'), JSON.stringify(payload)); } catch (_error) {}
    try {
      if (global.BASELINE_auth?.get?.()?.authed) await fetch('/systems/baseline-natural-skincare/api/routine_groups.php', { method:'POST', credentials:'same-origin', headers:{ 'Content-Type':'application/json', Accept:'application/json' }, body:JSON.stringify(payload) });
    } catch (_error) {}
  }

  function skinGroupNumber(id, data = readSkinGroups()) { const index = data.groups.findIndex((group) => group.id === id); return index >= 0 ? index + 1 : 0; }
  function skinGroupById(id, data = readSkinGroups()) { return data.groups.find((group) => group.id === id) || null; }
  function skinTimeOptions(selected) { return [['morning','Morning'],['afternoon','Afternoon'],['evening','Evening'],['anytime','Any time']].map(([value,label]) => `<option value="${value}"${value === selected ? ' selected' : ''}>${label}</option>`).join(''); }
  function skinFrequencyOptions(selected) { return [['daily','Every day'],['days','Specific days'],['weekly','A number of times each week'],['as-needed','As needed']].map(([value,label]) => `<option value="${value}"${value === selected ? ' selected' : ''}>${label}</option>`).join(''); }

  function skinSettingsPanel(group) {
    const frequency = group.frequency && typeof group.frequency === 'object' ? group.frequency : { mode:'daily', days:[], timesPerWeek:1 };
    const weekly = frequency.mode === 'weekly' ? `<label class="routine-field"><span>Times each week</span><input type="number" min="1" max="14" value="${Math.max(1, Number(frequency.timesPerWeek || 1))}" data-bl-skin-group-field="timesPerWeek" data-group-id="${esc(group.id)}"></label>` : '';
    const days = frequency.mode === 'days' ? `<fieldset class="routine-group-days"><legend>Group days</legend>${['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day) => `<label><input type="checkbox" data-bl-skin-group-day="${day}" data-group-id="${esc(group.id)}"${Array.isArray(frequency.days) && frequency.days.includes(day) ? ' checked' : ''}><span>${day.slice(0,3)}</span></label>`).join('')}</fieldset>` : '';
    return `<section class="bl-routine-group-settings-panel" data-bl-skin-group-settings="${esc(group.id)}"${state.openSkin.has(group.id) ? '' : ' hidden'}>
      <label class="routine-field"><span>Group name</span><input type="text" maxlength="80" value="${esc(group.title || '')}" data-bl-skin-group-field="title" data-group-id="${esc(group.id)}"></label>
      <label class="bl-routine-group-setting-toggle"><input type="checkbox" data-bl-skin-group-field="applyTime" data-group-id="${esc(group.id)}"${group.applyTime ? ' checked' : ''}><span>Set “What time” for this group</span></label>
      <label class="routine-field"><span>What time</span><select data-bl-skin-group-field="timeOfDay" data-group-id="${esc(group.id)}"${group.applyTime ? '' : ' disabled'}>${skinTimeOptions(group.timeOfDay || 'anytime')}</select></label>
      <label class="bl-routine-group-setting-toggle"><input type="checkbox" data-bl-skin-group-field="applyFrequency" data-group-id="${esc(group.id)}"${group.applyFrequency ? ' checked' : ''}><span>Set “How often” for this group</span></label>
      <label class="routine-field"><span>How often</span><select data-bl-skin-group-field="frequencyMode" data-group-id="${esc(group.id)}"${group.applyFrequency ? '' : ' disabled'}>${skinFrequencyOptions(frequency.mode || 'daily')}</select></label>
      ${weekly}${days}
    </section>`;
  }

  function decorateSkinPlan() {
    const data = readSkinGroups();
    const routine = readSkinRoutine();
    $$('.routine-plan-group[data-plan-group]').forEach((section) => {
      const id = section.dataset.planGroup;
      const group = skinGroupById(id, data);
      if (!group) return;
      const header = section.querySelector(':scope > .routine-plan-group-head');
      if (!header) return;
      header.classList.add('fitness-routine-group-bar');
      let headline = header.querySelector('.bl-routine-group-headline');
      const heading = header.querySelector('h3');
      if (!headline && heading) {
        headline = document.createElement('div');
        headline.className = 'bl-routine-group-headline';
        heading.parentElement?.insertAdjacentElement('beforebegin', headline);
        headline.append(heading.parentElement || heading);
      }
      if (headline && !headline.querySelector('.bl-routine-group-number')) headline.insertAdjacentHTML('afterbegin', `<span class="bl-routine-group-number" title="Routine group ${skinGroupNumber(id, data)}">${skinGroupNumber(id, data)}</span>`);
      let actions = header.querySelector('.bl-routine-group-actions');
      if (!actions) { actions = document.createElement('div'); actions.className = 'bl-routine-group-actions'; header.append(actions); }
      if (!actions.querySelector(`[data-bl-skin-group-settings-toggle="${CSS.escape(id)}"]`)) {
        const index = data.groups.findIndex((entry) => entry.id === id);
        actions.insertAdjacentHTML('afterbegin', `<button type="button" class="routine-mini" data-bl-skin-group-move="up" data-group-id="${esc(id)}"${index <= 0 ? ' disabled' : ''} aria-label="Move ${esc(group.title)} up">↑</button><button type="button" class="routine-mini" data-bl-skin-group-move="down" data-group-id="${esc(id)}"${index < 0 || index >= data.groups.length - 1 ? ' disabled' : ''} aria-label="Move ${esc(group.title)} down">↓</button><button type="button" class="routine-mini bl-routine-group-settings-button" data-bl-skin-group-settings-toggle="${esc(id)}" aria-expanded="${state.openSkin.has(id) ? 'true' : 'false'}">Group Settings</button>`);
      }
      section.querySelector(':scope > [data-bl-skin-group-settings]')?.remove();
      header.insertAdjacentHTML('afterend', skinSettingsPanel(group));
      section.querySelectorAll('.routine-item .routine-order').forEach((badge) => { badge.hidden = true; });
    });
    const ungrouped = $('.routine-plan-group-ungrouped');
    if (ungrouped) {
      $$('.routine-item', ungrouped).forEach((item, index) => {
        const badge = item.querySelector('.routine-order');
        if (badge) { badge.hidden = false; badge.textContent = String(data.groups.length + index + 1); }
      });
    }
    const manager = $('#routineGroupList');
    if (manager) manager.setAttribute('aria-hidden', 'true');
  }

  function ensureSkinSummaryFilter() {
    const target = $('#routineSummary');
    if (!target) return;
    const data = readSkinGroups();
    let wrap = $('#skinRoutineSummaryFilterWrap');
    if (!wrap) {
      wrap = document.createElement('label');
      wrap.id = 'skinRoutineSummaryFilterWrap';
      wrap.className = 'bl-routine-summary-filter';
      wrap.innerHTML = '<span>Show routine group</span><select id="skinRoutineSummaryFilter"></select>';
      target.insertAdjacentElement('beforebegin', wrap);
    }
    const select = $('#skinRoutineSummaryFilter');
    const options = `<option value="all">All routine groups</option>${data.groups.map((group,index) => `<option value="${esc(group.id)}">${index + 1}. ${esc(group.title)}</option>`).join('')}<option value="ungrouped">Ungrouped routine actions</option>`;
    if (select.innerHTML !== options) select.innerHTML = options;
    if (![...select.options].some((option) => option.value === state.skinSummary)) state.skinSummary = 'all';
    select.value = state.skinSummary;
  }

  function decorateSkinSummary() {
    ensureSkinSummaryFilter();
    const data = readSkinGroups();
    const routine = readSkinRoutine();
    const groupsByTitle = new Map(data.groups.map((group) => [String(group.title || '').trim(), group]));
    $$('#routineSummary .routine-summary-group').forEach((section) => {
      const title = section.querySelector('h3')?.textContent?.trim() || '';
      const group = groupsByTitle.get(title);
      const key = group?.id || (title.toLocaleLowerCase('en-GB').includes('ungrouped') ? 'ungrouped' : '');
      section.dataset.blSummaryGroup = key;
      const head = section.querySelector('.routine-summary-group-head') || section;
      const heading = head.querySelector('h3');
      if (group && heading && !head.querySelector('.bl-routine-group-number')) heading.insertAdjacentHTML('beforebegin', `<span class="bl-routine-group-number">${skinGroupNumber(group.id, data)}</span>`);
      section.hidden = state.skinSummary !== 'all' && state.skinSummary !== key;
      const groupItems = key === 'ungrouped' ? routine.items.filter((item) => !data.assignments[item.id]) : routine.items.filter((item) => data.assignments[item.id] === key);
      $$('.routine-summary-item', section).forEach((card) => {
        card.querySelector('.routine-summary-title > span')?.remove();
        const itemTitle = card.querySelector('.routine-summary-title strong')?.textContent?.trim();
        const item = groupItems.find((entry) => entry.title === itemTitle);
        if (item) card.dataset.blSummaryItem = item.id;
      });
    });
  }

  function skinMarkers(date) {
    const data = readSkinGroups();
    const routine = readSkinRoutine();
    const entries = routine.logs?.[date] || {};
    const completedIds = Object.entries(entries).filter(([,entry]) => entry?.completed).map(([id]) => id);
    const markers = [];
    const seenGroups = new Set();
    const ungrouped = routine.items.filter((item) => !data.assignments[item.id]);
    completedIds.forEach((id) => {
      const item = routine.items.find((entry) => entry.id === id);
      if (!item) return;
      const groupId = data.assignments[id];
      if (groupId) {
        if (seenGroups.has(groupId)) return;
        seenGroups.add(groupId);
        const group = skinGroupById(groupId, data);
        if (group) markers.push({ number:skinGroupNumber(groupId, data), title:group.title, target:groupId });
      } else {
        const index = ungrouped.findIndex((entry) => entry.id === id);
        if (index >= 0) markers.push({ number:data.groups.length + index + 1, title:item.title, target:'ungrouped', item:id });
      }
    });
    return markers;
  }

  function markerHtml(marker) { return `<button type="button" class="bl-routine-calendar-marker" data-bl-summary-target="${esc(marker.target)}"${marker.item ? ` data-bl-summary-item="${esc(marker.item)}"` : ''} title="${esc(marker.title)}" aria-label="Open Routine Summary for ${esc(marker.title)}">${marker.number}</button>`; }

  function decorateSkinCalendar() {
    $$('.routine-calendar-card [data-calendar-date]').forEach((day) => {
      const markers = skinMarkers(day.dataset.calendarDate);
      day.querySelector(':scope > .bl-routine-calendar-markers')?.remove();
      if (!markers.length) return;
      day.insertAdjacentHTML('beforeend', `<span class="bl-routine-calendar-markers">${markers.map(markerHtml).join('')}</span>`);
    });
  }

  function openSkinSummary(target, itemId) {
    state.skinSummary = target || 'all';
    const tab = $('[data-routine-view="summary"]');
    tab?.click();
    global.setTimeout(() => {
      decorateSkinSummary();
      const select = $('#skinRoutineSummaryFilter');
      if (select) { select.value = state.skinSummary; select.dispatchEvent(new Event('change', { bubbles:true })); }
      const card = itemId ? $(`#routineSummary [data-bl-summary-item="${CSS.escape(itemId)}"]`) : $(`#routineSummary [data-bl-summary-group="${CSS.escape(state.skinSummary)}"]`);
      card?.scrollIntoView({ behavior:'smooth', block:'start' });
    }, 80);
  }

  function fitnessRoutineState() { try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[], logs:{} }; } catch (_error) { return { activities:[], logs:{} }; } }
  function fitnessPlans() { try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; } catch (_error) { return []; } }
  function planName(plan, index) { return String(plan?.planJson?.name || plan?.name || `Calisthenics Plan ${index + 1}`).trim(); }
  function fitnessGroupKeyForSection(section) { return `section:${section}`; }
  function fitnessBaseGroups() {
    const plans = fitnessPlans().map((plan,index) => ({ key:`plan:${Number(plan.planId)}`, label:planName(plan,index), type:'plan', plan, planId:Number(plan.planId) }));
    const routine = fitnessRoutineState();
    const categories = [['cardio','Cardio'],['other','Other Fitness Activity'],['sports','Sports']].filter(([section]) => (routine.activities || []).some((activity) => activity.section === section)).map(([section,label]) => ({ key:fitnessGroupKeyForSection(section), label, type:'section', section }));
    return plans.concat(categories);
  }
  function fitnessGroups() {
    const groups = fitnessBaseGroups();
    const order = Array.isArray(settings().fitnessGroupOrder) ? settings().fitnessGroupOrder : [];
    return groups.slice().sort((a,b) => {
      const ai = order.indexOf(a.key), bi = order.indexOf(b.key);
      if (ai < 0 && bi < 0) return 0;
      if (ai < 0) return 1;
      if (bi < 0) return -1;
      return ai - bi;
    });
  }
  function fitnessGroupNumber(key) { const index = fitnessGroups().findIndex((group) => group.key === key); return index >= 0 ? index + 1 : 0; }
  function moveFitnessGroup(key, direction) {
    const groups = fitnessGroups();
    const index = groups.findIndex((group) => group.key === key);
    const next = direction === 'up' ? index - 1 : index + 1;
    if (index < 0 || next < 0 || next >= groups.length) return;
    [groups[index], groups[next]] = [groups[next], groups[index]];
    saveSettings({ fitnessGroupOrder:groups.map((group) => group.key) });
    schedule();
  }

  function ensureFitnessSectionSettings(section) {
    const panel = $(`[data-fitness-routine-panel="${section}"]`);
    const card = panel?.querySelector('.fitness-routine-card');
    if (!card) return;
    const key = fitnessGroupKeyForSection(section);
    const groups = fitnessGroups();
    const group = groups.find((entry) => entry.key === key);
    if (!group) return;
    let bar = card.querySelector(':scope > .fitness-routine-group-bar');
    const heading = card.querySelector(':scope > h2');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'fitness-routine-group-bar';
      heading?.insertAdjacentElement('beforebegin', bar);
      if (heading) bar.append(heading);
    }
    bar.querySelector('.bl-routine-group-number')?.remove();
    bar.insertAdjacentHTML('afterbegin', `<span class="bl-routine-group-number">${fitnessGroupNumber(key)}</span>`);
    let actions = bar.querySelector('.bl-routine-group-actions');
    if (!actions) { actions = document.createElement('div'); actions.className = 'bl-routine-group-actions'; bar.append(actions); }
    actions.innerHTML = `<button type="button" class="tiny-btn" data-bl-fitness-group-move="up" data-group-key="${key}">↑</button><button type="button" class="tiny-btn" data-bl-fitness-group-move="down" data-group-key="${key}">↓</button><button type="button" class="tiny-btn bl-routine-group-settings-button" data-bl-fitness-section-settings-toggle="${section}" aria-expanded="${state.openFitness.has(key) ? 'true' : 'false'}">Group Settings</button>`;
    let settingsPanel = card.querySelector(`[data-bl-fitness-section-settings="${section}"]`);
    if (!settingsPanel) { settingsPanel = document.createElement('section'); settingsPanel.dataset.blFitnessSectionSettings = section; bar.insertAdjacentElement('afterend', settingsPanel); }
    settingsPanel.className = 'bl-routine-group-settings-panel';
    settingsPanel.hidden = !state.openFitness.has(key);
    const items = (fitnessRoutineState().activities || []).filter((activity) => activity.section === section);
    const times = [...new Set(items.map((item) => item.timeOfDay))];
    const modes = [...new Set(items.map((item) => item.frequency?.mode))];
    const time = times.length === 1 ? times[0] : '';
    const mode = modes.length === 1 ? modes[0] : '';
    settingsPanel.innerHTML = `<label class="field-stack"><span>What time</span><select data-bl-fitness-section-field="timeOfDay" data-section="${section}"${items.length ? '' : ' disabled'}><option value="">${time ? 'Choose…' : 'Mixed / not set'}</option>${[['morning','Morning'],['afternoon','Afternoon'],['evening','Evening'],['anytime','Any time']].map(([value,label]) => `<option value="${value}"${value === time ? ' selected' : ''}>${label}</option>`).join('')}</select></label><label class="field-stack"><span>How often</span><select data-bl-fitness-section-field="frequencyMode" data-section="${section}"${items.length ? '' : ' disabled'}><option value="">${mode ? 'Choose…' : 'Mixed / not set'}</option>${[['daily','Every day'],['days','Specific days'],['weekly','A number of times each week'],['monthly','A number of times each month'],['as-needed','As needed']].map(([value,label]) => `<option value="${value}"${value === mode ? ' selected' : ''}>${label}</option>`).join('')}</select></label>`;
  }

  function planFrequency(plan) {
    const raw = String(plan?.planJson?.frequency || '3x');
    return Math.max(1, Math.min(7, Number.parseInt(raw,10) || 3));
  }
  function planSettingsHtml(group) {
    const plan = group.plan;
    const json = plan?.planJson || {};
    const range = json.frequencyRange && typeof json.frequencyRange === 'object' ? json.frequencyRange : {};
    const enabled = Boolean(range.enabled);
    const min = Math.max(1, Math.min(7, Number(range.minimum || planFrequency(plan))));
    const max = Math.max(min, Math.min(7, Number(range.maximum || planFrequency(plan))));
    const time = String(json.timeOfDay || 'anytime');
    return `<section class="bl-routine-group-settings-panel" data-bl-fitness-plan-settings="${group.planId}"${state.openFitness.has(group.key) ? '' : ' hidden'}><label class="field-stack"><span>What time</span><select data-bl-fitness-plan-field="timeOfDay" data-plan-id="${group.planId}">${[['morning','Morning'],['afternoon','Afternoon'],['evening','Evening'],['anytime','Any time']].map(([value,label]) => `<option value="${value}"${value === time ? ' selected' : ''}>${label}</option>`).join('')}</select></label><label class="field-stack"><span>How often</span><select data-bl-fitness-plan-field="weeklyCount" data-plan-id="${group.planId}">${[1,2,3,4,5,6,7].map((value) => `<option value="${value}"${value === planFrequency(plan) ? ' selected' : ''}>${value} day${value === 1 ? '' : 's'} each week</option>`).join('')}</select></label><label class="bl-routine-group-setting-toggle"><input type="checkbox" data-bl-fitness-plan-field="rangeEnabled" data-plan-id="${group.planId}"${enabled ? ' checked' : ''}><span>Apply a range</span></label><div class="bl-fitness-frequency-range-fields" data-bl-plan-range-fields="${group.planId}"${enabled ? '' : ' hidden'}><label class="field-stack"><span>Minimum times each week</span><input type="number" min="1" max="7" value="${min}" data-bl-fitness-plan-field="rangeMinimum" data-plan-id="${group.planId}"></label><label class="field-stack"><span>Maximum times each week</span><input type="number" min="1" max="7" value="${max}" data-bl-fitness-plan-field="rangeMaximum" data-plan-id="${group.planId}"></label></div><div class="actions-inline"><button type="button" class="action secondary" data-bl-save-fitness-plan-settings="${group.planId}">Save Group Settings</button></div></section>`;
  }

  function decorateFitnessPlanManager() {
    const manager = $('#calisthenicsPlanManager');
    if (!manager) return;
    let list = manager.querySelector('.bl-fitness-plan-group-list');
    if (!list) { list = document.createElement('div'); list.className = 'bl-fitness-plan-group-list'; manager.append(list); }
    const groups = fitnessGroups().filter((group) => group.type === 'plan');
    list.innerHTML = groups.map((group) => `<article class="bl-fitness-plan-group-row" data-bl-fitness-plan-row="${group.planId}"><div class="bl-fitness-plan-group-row-head"><span class="bl-routine-group-number">${fitnessGroupNumber(group.key)}</span><strong>${esc(group.label)}</strong><div class="bl-routine-group-actions"><button type="button" class="tiny-btn" data-bl-fitness-group-move="up" data-group-key="${group.key}">↑</button><button type="button" class="tiny-btn" data-bl-fitness-group-move="down" data-group-key="${group.key}">↓</button><button type="button" class="tiny-btn" data-bl-open-plan="${group.planId}">Open</button><button type="button" class="tiny-btn bl-routine-group-settings-button" data-bl-fitness-plan-settings-toggle="${group.planId}" data-group-key="${group.key}" aria-expanded="${state.openFitness.has(group.key) ? 'true' : 'false'}">Group Settings</button></div></div>${planSettingsHtml(group)}</article>`).join('');
  }

  function ensureGeneratorRange() {
    const freq = $('#freq');
    if (!freq || $('#calisthenicsFrequencyRange')) return;
    const wrap = document.createElement('div');
    wrap.id = 'calisthenicsFrequencyRange';
    wrap.className = 'bl-fitness-frequency-range';
    wrap.innerHTML = `<label class="bl-routine-group-setting-toggle"><input type="checkbox" id="applyCalisthenicsFrequencyRange"><span>Apply a range</span></label><div class="bl-fitness-frequency-range-fields" id="calisthenicsFrequencyRangeFields" hidden><label class="field-stack"><span>Minimum times each week</span><input id="calisthenicsFrequencyMinimum" type="number" min="1" max="7" value="1"></label><label class="field-stack"><span>Maximum times each week</span><input id="calisthenicsFrequencyMaximum" type="number" min="1" max="7" value="3"></label></div><p class="note">The maximum is used to place available workout dates; completing any number within the range satisfies the weekly routine target.</p>`;
    freq.closest('.field-stack')?.insertAdjacentElement('afterend', wrap);
    const selected = fitnessPlans().find((plan) => Number(plan.planId) === Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.()));
    const range = selected?.planJson?.frequencyRange;
    if (range?.enabled) {
      $('#applyCalisthenicsFrequencyRange').checked = true;
      $('#calisthenicsFrequencyRangeFields').hidden = false;
      $('#calisthenicsFrequencyMinimum').value = String(range.minimum || 1);
      $('#calisthenicsFrequencyMaximum').value = String(range.maximum || 3);
    }
  }

  function currentRange() {
    const enabled = Boolean($('#applyCalisthenicsFrequencyRange')?.checked);
    let minimum = Math.max(1, Math.min(7, Number($('#calisthenicsFrequencyMinimum')?.value || 1)));
    let maximum = Math.max(1, Math.min(7, Number($('#calisthenicsFrequencyMaximum')?.value || 3)));
    if (minimum > maximum) [minimum, maximum] = [maximum, minimum];
    return { enabled, minimum, maximum };
  }

  function wrapPlanFetch() {
    if (global.__BASELINE_ROUTINE_GROUP_SETTINGS_FETCH__) return;
    global.__BASELINE_ROUTINE_GROUP_SETTINGS_FETCH__ = true;
    const previous = global.fetch?.bind(global);
    if (!previous) return;
    global.fetch = async function(input, init = {}) {
      try {
        const url = new URL(input instanceof Request ? input.url : String(input), global.location.href);
        if ((url.pathname.endsWith('/save_plan.php') || url.pathname.endsWith('/plan_update.php')) && typeof init.body === 'string') {
          const body = JSON.parse(init.body);
          if (body?.planJson && typeof body.planJson === 'object') {
            const range = currentRange();
            body.planJson.frequencyRange = range;
            if (range.enabled) body.planJson.frequency = `${range.maximum}x`;
            init = Object.assign({}, init, { body:JSON.stringify(body) });
          }
        }
      } catch (_error) {}
      return previous(input, init);
    };
  }

  async function saveFitnessPlanSettings(planId) {
    const group = fitnessGroups().find((entry) => entry.planId === Number(planId));
    if (!group) return;
    const panel = $(`[data-bl-fitness-plan-settings="${planId}"]`);
    const json = JSON.parse(JSON.stringify(group.plan?.planJson || {}));
    const time = panel?.querySelector('[data-bl-fitness-plan-field="timeOfDay"]')?.value || 'anytime';
    const count = Math.max(1, Math.min(7, Number(panel?.querySelector('[data-bl-fitness-plan-field="weeklyCount"]')?.value || 3)));
    const enabled = Boolean(panel?.querySelector('[data-bl-fitness-plan-field="rangeEnabled"]')?.checked);
    let minimum = Math.max(1, Math.min(7, Number(panel?.querySelector('[data-bl-fitness-plan-field="rangeMinimum"]')?.value || count)));
    let maximum = Math.max(1, Math.min(7, Number(panel?.querySelector('[data-bl-fitness-plan-field="rangeMaximum"]')?.value || count)));
    if (minimum > maximum) [minimum, maximum] = [maximum, minimum];
    json.timeOfDay = time;
    json.frequencyRange = { enabled, minimum, maximum };
    json.frequency = `${enabled ? maximum : count}x`;
    const button = $(`[data-bl-save-fitness-plan-settings="${planId}"]`);
    if (button) { button.disabled = true; button.textContent = 'Saving…'; }
    try {
      const response = await fetch('/systems/baseline-fitness/api/plan_update.php', { method:'POST', credentials:'same-origin', headers:{ 'Content-Type':'application/json', Accept:'application/json' }, body:JSON.stringify({ planId:Number(planId), planJson:json, planText:`${group.label} updated`, reschedule:true }) });
      if (!response.ok) throw new Error('save_failed');
      await global.BASELINE_fitnessPlans?.refresh?.();
      if (button) button.textContent = 'Saved';
    } catch (_error) {
      if (button) button.textContent = 'Save failed';
    } finally {
      if (button) global.setTimeout(() => { button.disabled = false; button.textContent = 'Save Group Settings'; }, 1000);
    }
  }

  function applyFitnessSectionSetting(section, field, value) {
    $(`[data-fitness-routine-panel="${section}"]`)?.querySelectorAll(`[data-activity-field="${field}"]`).forEach((control) => {
      control.value = value;
      control.dispatchEvent(new Event('change', { bubbles:true }));
    });
  }

  function ensureFitnessSummaryFilter() {
    const target = $('#fitnessExerciseSummary');
    if (!target) return;
    let wrap = $('#fitnessSummaryGroupFilterWrap');
    if (!wrap) { wrap = document.createElement('label'); wrap.id = 'fitnessSummaryGroupFilterWrap'; wrap.className = 'bl-routine-summary-filter'; wrap.innerHTML = '<span>Show routine group</span><select id="fitnessSummaryGroupFilter"></select>'; target.insertAdjacentElement('beforebegin', wrap); }
    const groups = fitnessGroups();
    const select = $('#fitnessSummaryGroupFilter');
    select.innerHTML = `<option value="all">All routine groups</option>${groups.map((group) => `<option value="${esc(group.key)}">${fitnessGroupNumber(group.key)}. ${esc(group.label)}</option>`).join('')}`;
    if (!groups.some((group) => group.key === state.fitnessSummary) && state.fitnessSummary !== 'all') state.fitnessSummary = 'all';
    select.value = state.fitnessSummary;
  }

  function decorateFitnessSummary() {
    ensureFitnessSummaryFilter();
    const target = $('#fitnessExerciseSummary');
    if (!target) return;
    $$('.fitness-exercise-summary-item', target).forEach((card) => card.querySelector('.routine-summary-title > span')?.remove());
    const selected = state.fitnessSummary;
    $$('.fitness-summary-group', target).forEach((section) => {
      const title = section.querySelector('h3')?.textContent?.toLocaleLowerCase('en-GB') || '';
      let key = title.includes('calisthenics') ? `plan:${Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0)}` : 'activity-groups';
      section.dataset.blFitnessSummaryGroup = key;
      section.hidden = selected !== 'all' && selected.startsWith('plan:') ? key !== selected : false;
      if (title.includes('calisthenics')) {
        const number = fitnessGroupNumber(key);
        const heading = section.querySelector('h3');
        if (number && heading && !section.querySelector(':scope > .bl-routine-group-number')) heading.insertAdjacentHTML('beforebegin', `<span class="bl-routine-group-number">${number}</span>`);
      }
    });
    $$('.fitness-exercise-summary-item', target).forEach((card) => {
      const badge = card.querySelector('.badge')?.textContent?.trim();
      const key = badge === 'Cardio' ? 'section:cardio' : badge === 'Other Fitness Activity' ? 'section:other' : badge === 'Sports' ? 'section:sports' : '';
      if (selected === 'all' || selected.startsWith('plan:')) return;
      card.hidden = key !== selected;
    });
  }

  function fitnessMarkers(date) {
    const groups = fitnessGroups();
    const routine = fitnessRoutineState();
    const markers = [];
    const planEntries = global.BASELINE_fitnessPlans?.getPlansForDate?.(date) || [];
    const seenPlans = new Set();
    planEntries.forEach((entry) => {
      const key = `plan:${Number(entry.planId)}`;
      if (seenPlans.has(key)) return;
      seenPlans.add(key);
      const group = groups.find((item) => item.key === key);
      if (group) markers.push({ number:fitnessGroupNumber(key), title:group.label, target:key });
    });
    const entries = routine.logs?.[date] || {};
    const seenSections = new Set();
    Object.entries(entries).filter(([,entry]) => entry?.completed).forEach(([id]) => {
      const activity = (routine.activities || []).find((item) => item.id === id);
      if (!activity) return;
      const key = `section:${activity.section}`;
      if (seenSections.has(key)) return;
      seenSections.add(key);
      const group = groups.find((item) => item.key === key);
      if (group) markers.push({ number:fitnessGroupNumber(key), title:group.label, target:key });
    });
    return markers;
  }

  function decorateFitnessCalendar() {
    $$('.fitness-calendar-card [data-calendar-date]').forEach((day) => {
      day.querySelector(':scope > .bl-routine-calendar-markers')?.remove();
      const markers = fitnessMarkers(day.dataset.calendarDate);
      if (!markers.length) return;
      day.insertAdjacentHTML('beforeend', `<span class="bl-routine-calendar-markers">${markers.map((marker) => `<button type="button" class="bl-routine-calendar-marker" data-bl-fitness-summary-target="${esc(marker.target)}" title="${esc(marker.title)}">${marker.number}</button>`).join('')}</span>`);
    });
  }

  function openFitnessSummary(target) {
    if (target?.startsWith('plan:')) {
      const planId = Number(target.split(':')[1]);
      const current = Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0);
      if (planId && planId !== current) {
        try {
          global.localStorage?.setItem(`__bl_fitness_selected_plan_v1__::${owner()}`, String(planId));
          saveSettings({ pendingFitnessSummary:target });
          global.sessionStorage?.setItem('__bl_fitness_routine_view_v2__', 'calisthenics');
          global.location.assign('/baseline-fitness/my-routine');
          return;
        } catch (_error) {}
      }
    }
    state.fitnessSummary = target || 'all';
    $('[data-fitness-routine-view="summary"]')?.click();
    global.setTimeout(() => { decorateFitnessSummary(); $('#fitnessSummaryGroupFilter')?.scrollIntoView({ behavior:'smooth', block:'center' }); }, 80);
  }

  function applySkincare() {
    routineSettingsControl('skin');
    decorateSkinPlan();
    decorateSkinSummary();
    decorateSkinCalendar();
  }

  function applyFitness() {
    routineSettingsControl('fitness');
    ensureGeneratorRange();
    decorateFitnessPlanManager();
    ['cardio','other','sports'].forEach(ensureFitnessSectionSettings);
    decorateFitnessSummary();
    decorateFitnessCalendar();
    const pending = settings().pendingFitnessSummary;
    if (pending && pending.startsWith('plan:') && Number(pending.split(':')[1]) === Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0)) {
      saveSettings({ pendingFitnessSummary:'' });
      global.setTimeout(() => openFitnessSummary(pending), 60);
    }
  }

  document.addEventListener('click', (event) => {
    const settingsToggle = event.target.closest('[data-bl-routine-log-settings-toggle]');
    if (settingsToggle) {
      const panel = $(`[data-bl-routine-log-settings="${settingsToggle.dataset.blRoutineLogSettingsToggle}"]`);
      if (panel) { panel.hidden = !panel.hidden; settingsToggle.setAttribute('aria-expanded', panel.hidden ? 'false' : 'true'); }
      return;
    }
    const skinToggle = event.target.closest('[data-bl-skin-group-settings-toggle]');
    if (skinToggle) { const id = skinToggle.dataset.blSkinGroupSettingsToggle; state.openSkin.has(id) ? state.openSkin.delete(id) : state.openSkin.add(id); schedule(); return; }
    const skinMove = event.target.closest('[data-bl-skin-group-move]');
    if (skinMove) {
      const data = readSkinGroups(); const index = data.groups.findIndex((group) => group.id === skinMove.dataset.groupId); const next = skinMove.dataset.blSkinGroupMove === 'up' ? index - 1 : index + 1;
      if (index >= 0 && next >= 0 && next < data.groups.length) { [data.groups[index],data.groups[next]] = [data.groups[next],data.groups[index]]; saveSkinGroups(data).then(() => global.location.reload()); }
      return;
    }
    const marker = event.target.closest('[data-bl-summary-target]');
    if (marker) { event.preventDefault(); event.stopPropagation(); openSkinSummary(marker.dataset.blSummaryTarget, marker.dataset.blSummaryItem || ''); return; }
    const fitnessMarker = event.target.closest('[data-bl-fitness-summary-target]');
    if (fitnessMarker) { event.preventDefault(); event.stopPropagation(); openFitnessSummary(fitnessMarker.dataset.blFitnessSummaryTarget); return; }
    const fitnessToggle = event.target.closest('[data-bl-fitness-section-settings-toggle]');
    if (fitnessToggle) { const key = `section:${fitnessToggle.dataset.blFitnessSectionSettingsToggle}`; state.openFitness.has(key) ? state.openFitness.delete(key) : state.openFitness.add(key); schedule(); return; }
    const planToggle = event.target.closest('[data-bl-fitness-plan-settings-toggle]');
    if (planToggle) { const key = planToggle.dataset.groupKey; state.openFitness.has(key) ? state.openFitness.delete(key) : state.openFitness.add(key); schedule(); return; }
    const fitnessMove = event.target.closest('[data-bl-fitness-group-move]');
    if (fitnessMove) { moveFitnessGroup(fitnessMove.dataset.groupKey, fitnessMove.dataset.blFitnessGroupMove); return; }
    const openPlan = event.target.closest('[data-bl-open-plan]');
    if (openPlan) { global.BASELINE_fitnessPlans?.openPlan?.(Number(openPlan.dataset.blOpenPlan)); return; }
    const savePlan = event.target.closest('[data-bl-save-fitness-plan-settings]');
    if (savePlan) { saveFitnessPlanSettings(savePlan.dataset.blSaveFitnessPlanSettings); return; }
    const create = event.target.closest('#createCalisthenicsPlan');
    if (create && isFitness) {
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation();
      try { global.localStorage?.setItem(`__bl_fitness_creating_plan_v1__::${owner()}`, '1'); global.localStorage?.removeItem(`__bl_fitness_selected_plan_v1__::${owner()}`); global.sessionStorage?.setItem('__bl_fitness_routine_view_v2__', 'calisthenics'); } catch (_error) {}
      global.location.assign('/baseline-fitness/my-routine?new-plan=1');
    }
  }, true);

  document.addEventListener('change', (event) => {
    const start = event.target.closest('[data-bl-routine-start-day]');
    if (start) {
      saveSettings({ startDay:start.value });
      if (isFitness) global.BASELINE_fitnessRoutine?.render?.();
      else $('[data-skincare-calendar-view][aria-selected="true"]')?.click();
      schedule();
      return;
    }
    if (event.target?.id === 'skinRoutineSummaryFilter') { state.skinSummary = event.target.value; decorateSkinSummary(); return; }
    if (event.target?.id === 'fitnessSummaryGroupFilter') {
      const value = event.target.value;
      if (value.startsWith('plan:')) openFitnessSummary(value); else { state.fitnessSummary = value; decorateFitnessSummary(); }
      return;
    }
    const skinField = event.target.closest('[data-bl-skin-group-field]');
    if (skinField) {
      const selector = `[data-group-field="${CSS.escape(skinField.dataset.blSkinGroupField)}"][data-group-id="${CSS.escape(skinField.dataset.groupId)}"]`;
      const base = $(selector);
      if (base) { if (skinField.type === 'checkbox') base.checked = skinField.checked; else base.value = skinField.value; base.dispatchEvent(new Event('change', { bubbles:true })); }
      return;
    }
    const skinDay = event.target.closest('[data-bl-skin-group-day]');
    if (skinDay) { const base = $(`[data-group-day="${CSS.escape(skinDay.dataset.blSkinGroupDay)}"][data-group-id="${CSS.escape(skinDay.dataset.groupId)}"]`); if (base) { base.checked = skinDay.checked; base.dispatchEvent(new Event('change', { bubbles:true })); } return; }
    const sectionField = event.target.closest('[data-bl-fitness-section-field]');
    if (sectionField?.value) { applyFitnessSectionSetting(sectionField.dataset.section, sectionField.dataset.blFitnessSectionField, sectionField.value); return; }
    const rangeToggle = event.target.closest('#applyCalisthenicsFrequencyRange');
    if (rangeToggle) { $('#calisthenicsFrequencyRangeFields').hidden = !rangeToggle.checked; return; }
    const planRangeToggle = event.target.closest('[data-bl-fitness-plan-field="rangeEnabled"]');
    if (planRangeToggle) { const fields = $(`[data-bl-plan-range-fields="${CSS.escape(planRangeToggle.dataset.planId)}"]`); if (fields) fields.hidden = !planRangeToggle.checked; }
  }, true);

  function boot() {
    wrapPlanFetch();
    const root = isSkin ? $('#routine') : $('#my-plan');
    if (!root) return;
    state.observer = new MutationObserver(schedule);
    state.observer.observe(root, { childList:true, subtree:true });
    document.addEventListener('baseline:routine-settings-changed', schedule);
    document.addEventListener('baseline:fitness-plans-updated', schedule);
    global.setTimeout(schedule, 0);
    global.addEventListener('pagehide', () => state.observer?.disconnect(), { once:true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true }); else boot();
})(typeof window !== 'undefined' ? window : globalThis);

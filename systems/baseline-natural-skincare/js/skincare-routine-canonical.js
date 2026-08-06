/* Baseline Natural Skincare — canonical grouped Routine Summary, Log and Public Routine. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_CANONICAL__) return;
  global.__BASELINE_SKINCARE_ROUTINE_CANONICAL__ = true;

  const CORE = global.BASELINE_SKINCARE_ROUTINE;
  const MODEL = global.BASELINE_SKINCARE_ROUTINE_MODEL;
  const UI = global.BASELINE_RoutineSystem;
  if (!CORE || !MODEL) return;

  const GROUP_API = '/systems/baseline-natural-skincare/api/routine_groups.php';
  const ROUTINE_API = '/systems/baseline-natural-skincare/api/routine_state.php';
  const GROUP_PREFIX = '__bl_skincare_routine_groups_v3__::';
  const DAYS = MODEL.DAYS || ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const state = {
    owner:'guest',
    authed:false,
    groups:[],
    assignments:{},
    saveTimer:0,
    calendarView:'month',
    calendarAnchor:new Date(),
    publicRoutine:null,
    refreshing:false
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[character]));

  function normaliseOwner(value) {
    return String(value || '').trim().toLocaleLowerCase('en-GB') || 'guest';
  }

  function authSnapshot() {
    try { return global.BASELINE_auth?.get?.() || null; } catch (_error) { return null; }
  }

  function syncOwner() {
    const snapshot = authSnapshot();
    state.authed = Boolean(snapshot?.authed);
    state.owner = state.authed ? normaliseOwner(snapshot.name || snapshot.user?.name) : 'guest';
  }

  function groupKey(owner = state.owner) {
    return `${GROUP_PREFIX}${normaliseOwner(owner)}`;
  }

  function normaliseFrequency(raw) {
    const value = MODEL.normaliseFrequency(raw || {});
    return {
      mode:['daily','days','weekly','as-needed'].includes(value.mode) ? value.mode : 'daily',
      days:DAYS.filter((day) => value.days?.includes(day)),
      timesPerWeek:Math.max(1, Math.min(14, Math.round(Number(value.timesPerWeek) || 3)))
    };
  }

  function normaliseGroups(raw) {
    const seen = new Set();
    return (Array.isArray(raw) ? raw : []).slice(0, 30).map((entry, index) => {
      const title = String(entry?.title || '').trim().slice(0, 80);
      let id = String(entry?.id || `routine-group-${index + 1}`).replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 80);
      if (!title || !id) return null;
      if (seen.has(id)) id = `${id}-${index + 1}`;
      seen.add(id);
      return {
        id,
        title,
        applyTime:Boolean(entry.applyTime),
        timeOfDay:MODEL.TIMES.some((item) => item.value === entry.timeOfDay) ? entry.timeOfDay : 'anytime',
        applyFrequency:Boolean(entry.applyFrequency),
        frequency:normaliseFrequency(entry.frequency)
      };
    }).filter(Boolean);
  }

  function normaliseAssignments(raw, groups = state.groups) {
    const valid = new Set(groups.map((group) => group.id));
    const output = {};
    Object.entries(raw && typeof raw === 'object' ? raw : {}).forEach(([itemId, groupId]) => {
      if (itemId && valid.has(String(groupId))) output[String(itemId)] = String(groupId);
    });
    return output;
  }

  function readGroupsLocal(owner = state.owner) {
    try {
      const raw = global.localStorage?.getItem(groupKey(owner));
      const parsed = raw ? JSON.parse(raw) : {};
      const groups = normaliseGroups(parsed?.groups);
      return { groups, assignments:normaliseAssignments(parsed?.assignments, groups) };
    } catch (_error) {
      return { groups:[], assignments:{} };
    }
  }

  function writeGroupsLocal() {
    try {
      global.localStorage?.setItem(groupKey(), JSON.stringify({
        groups:state.groups,
        assignments:state.assignments,
        updatedAt:new Date().toISOString()
      }));
    } catch (_error) {}
  }

  async function jsonRequest(url, options = {}) {
    try {
      const response = await fetch(url, {
        method:options.method || 'GET',
        credentials:'same-origin',
        headers:Object.assign({ Accept:'application/json' }, options.body ? { 'Content-Type':'application/json' } : {}),
        body:options.body ? JSON.stringify(options.body) : undefined
      });
      const data = await response.json().catch(() => null);
      return data && typeof data === 'object' ? data : { ok:false, error:`http_${response.status}` };
    } catch (_error) {
      return { ok:false, error:'network_error' };
    }
  }

  async function saveGroupsNow() {
    clearTimeout(state.saveTimer);
    state.saveTimer = 0;
    writeGroupsLocal();
    if (state.authed) {
      await jsonRequest(GROUP_API, {
        method:'POST',
        body:{ groups:state.groups, assignments:state.assignments }
      });
    }
  }

  function scheduleGroupSave() {
    writeGroupsLocal();
    clearTimeout(state.saveTimer);
    state.saveTimer = global.setTimeout(saveGroupsNow, 400);
  }

  async function loadGroups() {
    syncOwner();
    const local = readGroupsLocal();
    state.groups = local.groups;
    state.assignments = local.assignments;
    if (state.authed) {
      const remote = await jsonRequest(GROUP_API);
      if (remote?.ok && remote.hasGroups) {
        state.groups = normaliseGroups(remote.groups);
        state.assignments = normaliseAssignments(remote.assignments, state.groups);
        writeGroupsLocal();
      }
    }
    renderAll();
  }

  function routineState() {
    const snapshot = CORE.getState?.() || {};
    return {
      visibility:snapshot.visibility === 'public' ? 'public' : 'private',
      items:MODEL.normaliseRoutine(snapshot.routine || snapshot.items),
      logs:MODEL.normaliseLogs(snapshot.logs)
    };
  }

  function groupById(id) {
    return state.groups.find((group) => group.id === id) || null;
  }

  function effectiveItem(item, groups = state.groups, assignments = state.assignments) {
    const group = groups.find((entry) => entry.id === assignments[item.id]);
    if (!group) return item;
    const copy = Object.assign({}, item);
    if (group.applyTime) copy.timeOfDay = group.timeOfDay;
    if (group.applyFrequency) copy.frequency = normaliseFrequency(group.frequency);
    return copy;
  }

  function productText(item) {
    return item.productSelection === 'custom'
      ? (item.customProductName || item.productName || '')
      : (item.productName || '');
  }

  function frequencyText(value) {
    const frequency = normaliseFrequency(value);
    if (frequency.mode === 'daily') return 'Every day';
    if (frequency.mode === 'days') return frequency.days.length ? frequency.days.join(', ') : 'Specific days not selected';
    if (frequency.mode === 'weekly') return `${frequency.timesPerWeek}× each week`;
    return 'As needed';
  }

  function timeLabel(value) {
    return MODEL.timeLabel?.(value) || MODEL.TIMES.find((entry) => entry.value === value)?.label || 'Any time';
  }

  function stableHtml(target, signature, html) {
    if (!target) return;
    if (target.dataset.canonicalSignature === signature) return;
    target.dataset.canonicalSignature = signature;
    target.innerHTML = html;
  }

  function canonicalTarget(originalId, canonicalId, className) {
    const original = document.getElementById(originalId);
    if (!original) return null;
    original.hidden = true;
    original.setAttribute('aria-hidden','true');
    let target = document.getElementById(canonicalId);
    if (!target) {
      target = document.createElement('div');
      target.id = canonicalId;
      target.className = className;
      original.insertAdjacentElement('afterend', target);
    }
    return target;
  }

  function ensureShell() {
    const root = $('#routine');
    if (!root) return;
    root.classList.add('bl-routine-root','bl-routine-canonical');
    $$('.routine-card', root).forEach((card) => card.classList.add('bl-routine-card'));

    canonicalTarget('routineSummary', 'canonicalRoutineSummary', 'bl-canonical-fitness-summary');
    canonicalTarget('routineLogItems', 'canonicalRoutineLogItems', 'bl-canonical-plan-shell');
    canonicalTarget('publicRoutineResult', 'canonicalPublicRoutineResult', 'bl-canonical-public-result');

    const logPanel = $('[data-routine-panel="log"]', root);
    const logCard = logPanel?.querySelector('.routine-card');
    const head = logCard?.querySelector('.section-head-actions') || logCard?.firstElementChild;
    if (head) {
      head.classList.add('bl-canonical-log-head');
      let button = head.querySelector('[data-canonical-settings-toggle]');
      if (!button) {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'action secondary bl-canonical-settings-button';
        button.dataset.canonicalSettingsToggle = 'skin';
        button.setAttribute('aria-expanded','false');
        button.textContent = 'Settings';
        head.appendChild(button);
      }
      let panel = logCard.querySelector('[data-canonical-settings-panel="skin"]');
      if (!panel) {
        panel = document.createElement('section');
        panel.className = 'bl-canonical-settings';
        panel.dataset.canonicalSettingsPanel = 'skin';
        panel.hidden = true;
        panel.innerHTML = `<label class="field-stack"><span>Calendar week starts on</span><select data-canonical-week-start>${DAYS.map((day) => `<option value="${day}">${day}</option>`).join('')}</select></label>`;
        head.insertAdjacentElement('afterend', panel);
      }
      const start = UI?.readSettings?.()?.startDay || 'Monday';
      const select = panel.querySelector('[data-canonical-week-start]');
      if (select) select.value = start;
    }

    let calendar = logPanel?.querySelector('[data-canonical-skincare-calendar]');
    if (logCard && !calendar) {
      calendar = document.createElement('section');
      calendar.className = 'card routine-card bl-routine-card';
      calendar.dataset.canonicalSkincareCalendar = 'true';
      calendar.innerHTML = `<div class="section-head-actions"><div><h2>Skincare Calendar</h2><p class="note">Completed actions are shown without changing the Routine Log layout.</p></div><div class="actions-inline"><button type="button" class="action secondary" data-canonical-calendar-view="week">Week</button><button type="button" class="action secondary" data-canonical-calendar-view="month">Month</button><button type="button" class="action secondary" data-canonical-calendar-move="previous">←</button><strong data-canonical-calendar-label></strong><button type="button" class="action secondary" data-canonical-calendar-today>Today</button><button type="button" class="action secondary" data-canonical-calendar-move="next">→</button></div></div><div data-canonical-calendar-grid></div>`;
      logCard.insertAdjacentElement('afterend', calendar);
    }

    const planCard = $('[data-routine-panel="plan"] .routine-card', root);
    const addRow = planCard?.querySelector('.routine-add-row');
    if (planCard && addRow && !planCard.querySelector('[data-canonical-group-manager]')) {
      const manager = document.createElement('section');
      manager.className = 'routine-group-manager';
      manager.dataset.canonicalGroupManager = 'true';
      addRow.insertAdjacentElement('beforebegin', manager);
    }

    const publicCard = $('[data-routine-panel="public"] .routine-card', root);
    if (publicCard) {
      publicCard.classList.add('bl-canonical-public-card');
      const titleBlock = Array.from(publicCard.children).find((child) => child.querySelector?.('h2'));
      const visibility = publicCard.querySelector('#routineVisibility')?.closest('label,div');
      if (titleBlock) titleBlock.classList.add('bl-canonical-public-title');
      if (titleBlock && visibility) {
        visibility.classList.add('bl-canonical-public-visibility');
        if (visibility.parentElement !== titleBlock) titleBlock.appendChild(visibility);
      }
      const controls = publicCard.querySelector('.routine-public-select');
      if (controls) controls.classList.add('bl-canonical-public-controls');
    }
  }

  function groupSchedule(group) {
    const details = [];
    if (group.applyTime) details.push(timeLabel(group.timeOfDay));
    if (group.applyFrequency) details.push(frequencyText(group.frequency));
    return details.join(' · ');
  }

  function groupOptions(selected = '') {
    return `<option value="">No routine group</option>${state.groups.map((group) => `<option value="${esc(group.id)}"${group.id === selected ? ' selected' : ''}>${esc(group.title)}</option>`).join('')}`;
  }

  function selectOptions(values, selected) {
    return values.map((entry) => `<option value="${esc(entry.value)}"${entry.value === selected ? ' selected' : ''}>${esc(entry.label)}</option>`).join('');
  }

  function renderGroupManager() {
    const manager = $('[data-canonical-group-manager]');
    if (!manager) return;
    const routine = routineState();
    const groupRows = state.groups.map((group, index) => `
      <article class="bl-canonical-summary-card" data-canonical-group="${esc(group.id)}">
        <div class="section-head-actions"><div class="bl-canonical-heading"><span class="bl-canonical-number">${index + 1}</span><input type="text" maxlength="80" value="${esc(group.title)}" data-canonical-group-title="${esc(group.id)}" aria-label="Routine group name"></div><button type="button" class="action secondary" data-canonical-remove-group="${esc(group.id)}">Remove group</button></div>
        <div class="row row-2">
          <label class="field-stack"><span><input type="checkbox" data-canonical-group-apply-time="${esc(group.id)}"${group.applyTime ? ' checked' : ''}> Use one time for this group</span><select data-canonical-group-time="${esc(group.id)}"${group.applyTime ? '' : ' disabled'}>${selectOptions(MODEL.TIMES, group.timeOfDay)}</select></label>
          <label class="field-stack"><span><input type="checkbox" data-canonical-group-apply-frequency="${esc(group.id)}"${group.applyFrequency ? ' checked' : ''}> Use one frequency for this group</span><select data-canonical-group-frequency="${esc(group.id)}"${group.applyFrequency ? '' : ' disabled'}>${selectOptions(MODEL.FREQUENCIES, group.frequency.mode)}</select></label>
        </div>
        ${group.applyFrequency && group.frequency.mode === 'weekly' ? `<label class="field-stack"><span>Times each week</span><input type="number" min="1" max="14" value="${group.frequency.timesPerWeek}" data-canonical-group-weekly="${esc(group.id)}"></label>` : ''}
        ${group.applyFrequency && group.frequency.mode === 'days' ? `<fieldset class="routine-days"><legend>Days</legend>${DAYS.map((day) => `<label><input type="checkbox" data-canonical-group-day="${esc(group.id)}" value="${day}"${group.frequency.days.includes(day) ? ' checked' : ''}><span>${day.slice(0,3)}</span></label>`).join('')}</fieldset>` : ''}
      </article>`).join('');
    const assignments = routine.items.length
      ? routine.items.map((item) => `<label class="field-stack"><span>${esc(item.title)}</span><select data-canonical-item-group="${esc(item.id)}">${groupOptions(state.assignments[item.id] || '')}</select></label>`).join('')
      : '<div class="routine-empty">Add routine actions before assigning them to groups.</div>';
    const signature = JSON.stringify({ groups:state.groups, assignments:state.assignments, items:routine.items.map((item) => [item.id,item.title]) });
    stableHtml(manager, signature, `
      <div class="section-head-actions"><div><h3>Routine Groups</h3><p class="note">A group owns one number, can share time and frequency, and appears together in Log, Summary and Public Routines.</p></div></div>
      <div class="routine-group-create"><input type="text" maxlength="80" placeholder="Name a routine group…" data-canonical-new-group><button type="button" class="action" data-canonical-create-group>Create group</button></div>
      <div class="grid">${groupRows || '<div class="routine-empty">No routine groups have been created.</div>'}</div>
      <div class="divider"></div><h3>Assign routine steps</h3><div class="row row-2">${assignments}</div>`);
  }

  function groupedSections(items, groups = state.groups, assignments = state.assignments) {
    const sections = [];
    const used = new Set();
    groups.forEach((group, index) => {
      const groupItems = items.filter((item) => assignments[item.id] === group.id);
      if (!groupItems.length) return;
      groupItems.forEach((item) => used.add(item.id));
      sections.push({ group, number:index + 1, items:groupItems });
    });
    const ungrouped = items.filter((item) => !used.has(item.id));
    if (ungrouped.length) sections.push({ group:null, number:sections.length + 1, items:ungrouped });
    return sections;
  }

  function summaryCard(item, groups = state.groups, assignments = state.assignments) {
    const effective = effectiveItem(item, groups, assignments);
    const group = groups.find((entry) => entry.id === assignments[item.id]);
    const rows = [
      ['Routine group', group?.title || 'Ungrouped'],
      ['Time of day', timeLabel(effective.timeOfDay)],
      ['Frequency', frequencyText(effective.frequency)],
      ['Product / recipe', productText(item) || 'Not selected']
    ];
    return `<article class="bl-canonical-summary-card"><h4>${esc(item.title)}</h4><dl>${rows.map(([label,value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl><p>${esc(MODEL.benefitText(item, 'comprehensive'))}</p>${item.notes ? `<p><strong>Your notes:</strong> ${esc(item.notes)}</p>` : ''}</article>`;
  }

  function renderSummary() {
    const target = $('#canonicalRoutineSummary');
    if (!target) return;
    const routine = routineState();
    if (!routine.items.length) {
      stableHtml(target, 'empty', '<div class="routine-empty">No routine plan exists yet. Add your first action in Routine Plan.</div>');
      return;
    }
    const sections = groupedSections(routine.items);
    const signature = JSON.stringify({ items:routine.items, groups:state.groups, assignments:state.assignments });
    stableHtml(target, signature, sections.map((section) => {
      const title = section.group?.title || 'Ungrouped routine actions';
      const schedule = section.group ? groupSchedule(section.group) : '';
      return `<section class="bl-canonical-summary-group"><div class="bl-canonical-group-head"><div class="bl-canonical-heading"><span class="bl-canonical-number">${section.number}</span><h3>${esc(title)}</h3></div>${schedule ? `<span>${esc(schedule)}</span>` : ''}</div>${section.items.map((item) => summaryCard(item)).join('')}</section>`;
    }).join(''));
  }

  function ensureLogDate(logs, date) {
    return logs[date] && typeof logs[date] === 'object' ? logs[date] : {};
  }

  function renderLog() {
    const target = $('#canonicalRoutineLogItems');
    const progress = $('#routineLogProgress');
    const input = $('#routineLogDate');
    if (!target || !input) return;
    const routine = routineState();
    const date = UI?.clampLogDate?.(input.value) || input.value;
    const due = routine.items.map((item) => {
      const effective = effectiveItem(item);
      return { item, effective, status:MODEL.dueStatus(effective, date, routine.logs) };
    }).filter((entry) => entry.status.due);
    const entries = ensureLogDate(routine.logs, date);
    const completed = due.filter(({ item }) => entries[item.id]?.completed).length;
    if (progress) progress.textContent = `${completed}/${due.length} completed`;
    if (!due.length) {
      stableHtml(target, `empty:${date}`, '<div class="routine-empty">No routine actions are scheduled for this date.</div>');
      return;
    }
    const sections = groupedSections(due.map((entry) => entry.item));
    const byId = new Map(due.map((entry) => [entry.item.id, entry]));
    const signature = JSON.stringify({ date, due:due.map(({item,status}) => [item.id,status.detail,entries[item.id]]), groups:state.groups, assignments:state.assignments });
    stableHtml(target, signature, sections.map((section) => {
      const title = section.group?.title || 'Ungrouped routine actions';
      const groupEntries = section.items.map((item) => entries[item.id] || { completed:false,note:'' });
      const checked = groupEntries.filter((entry) => entry.completed).length;
      const all = checked === section.items.length;
      const mixed = checked > 0 && !all;
      return `<section class="routine-log-group bl-canonical-summary-group"><div class="bl-canonical-group-head"><div class="bl-canonical-heading"><span class="bl-canonical-number">${section.number}</span><h3>${esc(title)}</h3></div><label class="bl-canonical-group-complete"><input type="checkbox" data-canonical-complete-group="${section.number}" data-canonical-group-items="${esc(section.items.map((item) => item.id).join('|'))}"${all ? ' checked' : ''}${mixed ? ' data-indeterminate="true"' : ''}><span>Complete group</span></label></div>${section.items.map((item) => {
        const entry = entries[item.id] || { completed:false,note:'' };
        const detail = byId.get(item.id);
        return `<article class="routine-log-item${entry.completed ? ' complete' : ''}"><label class="routine-log-check"><input type="checkbox" data-canonical-log-complete="${esc(item.id)}"${entry.completed ? ' checked' : ''}><span><strong>${esc(item.title)}</strong><small>${esc(timeLabel(detail.effective.timeOfDay))} · ${esc(detail.status.detail)}</small></span></label><input class="routine-log-note" type="text" maxlength="500" placeholder="Optional note" value="${esc(entry.note || '')}" data-canonical-log-note="${esc(item.id)}"></article>`;
      }).join('')}</section>`;
    }).join(''));
    $$('[data-indeterminate="true"]', target).forEach((box) => { box.indeterminate = true; });
  }

  function completedForDate(routine, date) {
    const entries = routine.logs[date] || {};
    const names = new Map(routine.items.map((item) => [item.id, item.title]));
    return Object.entries(entries).filter(([,entry]) => entry?.completed).map(([id]) => names.get(id)).filter(Boolean);
  }

  function renderCalendar() {
    const card = $('[data-canonical-skincare-calendar]');
    const grid = card?.querySelector('[data-canonical-calendar-grid]');
    const label = card?.querySelector('[data-canonical-calendar-label]');
    if (!grid || !label) return;
    const routine = routineState();
    const selected = $('#routineLogDate')?.value || UI?.todayIso?.();
    const anchor = new Date(state.calendarAnchor);
    if (state.calendarView === 'week') {
      const dates = UI?.weekDates?.(anchor) || [];
      const bounds = UI?.weekBounds?.(anchor);
      label.textContent = bounds ? `${bounds.start.toLocaleDateString('en-GB',{day:'numeric',month:'short'})} – ${bounds.end.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}` : '';
      grid.className = 'bl-canonical-week';
      stableHtml(grid, JSON.stringify({ view:'week', selected, logs:routine.logs, anchor:anchor.toISOString() }), dates.map((date) => {
        const iso = UI.isoDate(date);
        const completed = completedForDate(routine, iso);
        return `<button type="button" class="bl-canonical-day" data-canonical-calendar-date="${iso}"${UI.isFutureDate(iso) ? ' disabled' : ''}><strong>${esc(date.toLocaleDateString('en-GB',{weekday:'short',day:'numeric'}))}</strong>${completed.length ? completed.map((name) => `<span>${esc(name)}</span>`).join('') : '<span>No completed actions</span>'}</button>`;
      }).join(''));
    } else {
      const month = new Date(anchor.getFullYear(), anchor.getMonth(), 1);
      label.textContent = month.toLocaleDateString('en-GB',{month:'long',year:'numeric'});
      const dates = UI?.monthDates?.(month) || [];
      grid.className = 'routine-calendar-grid month-view';
      stableHtml(grid, JSON.stringify({ view:'month', selected, logs:routine.logs, month:month.toISOString() }), dates.map((date) => {
        const iso = UI.isoDate(date);
        const count = completedForDate(routine, iso).length;
        return `<button type="button" class="routine-calendar-day${count ? ' has-routine' : ''}${iso === selected ? ' selected' : ''}${date.getMonth() !== month.getMonth() ? ' outside-month' : ''}" data-canonical-calendar-date="${iso}"${UI.isFutureDate(iso) ? ' disabled' : ''}><span class="routine-calendar-number">${date.getDate()}</span>${count ? `<span class="routine-calendar-count">${count}</span>` : ''}</button>`;
      }).join(''));
    }
    $$('[data-canonical-calendar-view]', card).forEach((button) => {
      button.setAttribute('aria-pressed', button.dataset.canonicalCalendarView === state.calendarView ? 'true' : 'false');
    });
  }

  function plannedWeek(routine, groups, assignments) {
    const byDay = new Map(DAYS.map((day) => [day, []]));
    const flexible = [];
    routine.forEach((item) => {
      const effective = effectiveItem(item, groups, assignments);
      const frequency = normaliseFrequency(effective.frequency);
      if (frequency.mode === 'daily') DAYS.forEach((day) => byDay.get(day).push(item.title));
      else if (frequency.mode === 'days') frequency.days.forEach((day) => byDay.get(day)?.push(item.title));
      else flexible.push(`${item.title} — ${frequencyText(frequency)}`);
    });
    return `<section class="bl-canonical-public-group"><h3>Planned calendar</h3><div class="bl-canonical-week">${DAYS.map((day) => `<div class="bl-canonical-day"><strong>${day}</strong>${byDay.get(day).length ? byDay.get(day).map((name) => `<span>${esc(name)}</span>`).join('') : '<span>No fixed steps</span>'}</div>`).join('')}</div>${flexible.length ? `<div class="bl-canonical-flexible"><strong>Flexible schedule</strong>${flexible.map((entry) => `<span>${esc(entry)}</span>`).join('')}</div>` : ''}</section>`;
  }

  function renderPublicRoutine(data) {
    const target = $('#canonicalPublicRoutineResult');
    if (!target) return;
    if (!data?.ok || !data.publicRoutine) {
      stableHtml(target, `error:${data?.error || 'unknown'}`, `<div class="routine-empty">${esc(data?.error === 'routine_private' ? 'That routine is private.' : 'The public routine could not be loaded.')}</div>`);
      return;
    }
    const routine = MODEL.normaliseRoutine(data.publicRoutine.routine);
    const groups = normaliseGroups(data.publicRoutine.groups);
    const assignments = normaliseAssignments(data.publicRoutine.assignments, groups);
    const sections = groupedSections(routine, groups, assignments);
    const html = `<div class="public-routine-head"><h3>${esc(data.publicRoutine.owner)}’s routine</h3><span class="routine-public-badge">Public</span></div>${sections.map((section) => `<section class="bl-canonical-public-group"><div class="bl-canonical-group-head"><div class="bl-canonical-heading"><span class="bl-canonical-number">${section.number}</span><h3>${esc(section.group?.title || 'Ungrouped routine actions')}</h3></div>${section.group && groupSchedule(section.group) ? `<span>${esc(groupSchedule(section.group))}</span>` : ''}</div>${section.items.map((item) => {
      const effective = effectiveItem(item, groups, assignments);
      return `<article class="bl-canonical-public-item"><strong>${esc(item.title)}</strong><span>${esc(timeLabel(effective.timeOfDay))} · ${esc(frequencyText(effective.frequency))}</span><p>${esc(MODEL.benefitText(item, 'comprehensive'))}</p></article>`;
    }).join('')}</section>`).join('')}${plannedWeek(routine, groups, assignments)}`;
    stableHtml(target, JSON.stringify(data.publicRoutine), html);
  }

  async function findPublicRoutine() {
    const name = String($('#publicRoutineName')?.value || '').trim();
    if (!name) return;
    const target = $('#canonicalPublicRoutineResult');
    if (target) target.innerHTML = '<div class="routine-empty">Loading public routine…</div>';
    const url = new URL(ROUTINE_API, global.location.origin);
    url.searchParams.set('name', name);
    renderPublicRoutine(await jsonRequest(url));
  }

  function hiddenLogControl(selector) {
    return $(`#routineLogItems ${selector}`);
  }

  function setCanonicalLog(id, completed) {
    const base = hiddenLogControl(`[data-log-complete="${CSS.escape(id)}"]`);
    if (!base || base.checked === completed) return;
    base.checked = completed;
    base.dispatchEvent(new Event('change', { bubbles:true }));
  }

  function setCanonicalNote(id, note) {
    const base = hiddenLogControl(`[data-log-note="${CSS.escape(id)}"]`);
    if (!base) return;
    base.value = note;
    base.dispatchEvent(new Event('input', { bubbles:true }));
  }

  function createGroup() {
    const input = $('[data-canonical-new-group]');
    const title = String(input?.value || '').trim().slice(0,80);
    if (!title || state.groups.some((group) => group.title.localeCompare(title,'en-GB',{sensitivity:'base'}) === 0)) {
      input?.focus();
      return;
    }
    const id = global.crypto?.randomUUID ? `routine-group-${global.crypto.randomUUID()}` : `routine-group-${Date.now()}`;
    state.groups.push({ id, title, applyTime:false, timeOfDay:'anytime', applyFrequency:false, frequency:normaliseFrequency({mode:'daily'}) });
    if (input) input.value = '';
    scheduleGroupSave();
    renderAll();
  }

  function removeGroup(id) {
    state.groups = state.groups.filter((group) => group.id !== id);
    Object.keys(state.assignments).forEach((itemId) => { if (state.assignments[itemId] === id) delete state.assignments[itemId]; });
    scheduleGroupSave();
    renderAll();
  }

  function updateGroup(id, patch) {
    const group = groupById(id);
    if (!group) return;
    Object.assign(group, patch);
    group.frequency = normaliseFrequency(group.frequency);
    scheduleGroupSave();
    renderAll();
  }

  function renderAll() {
    if (state.refreshing) return;
    state.refreshing = true;
    try {
      ensureShell();
      renderGroupManager();
      renderSummary();
      renderLog();
      renderCalendar();
    } finally {
      state.refreshing = false;
    }
  }

  function bindEvents() {
    const root = $('#routine');
    if (!root || root.dataset.canonicalBound === 'true') return;
    root.dataset.canonicalBound = 'true';

    root.addEventListener('click', (event) => {
      if (event.target.closest('[data-canonical-create-group]')) { createGroup(); return; }
      const remove = event.target.closest('[data-canonical-remove-group]');
      if (remove) { removeGroup(remove.dataset.canonicalRemoveGroup); return; }
      const settings = event.target.closest('[data-canonical-settings-toggle]');
      if (settings) {
        const panel = root.querySelector(`[data-canonical-settings-panel="${settings.dataset.canonicalSettingsToggle}"]`);
        if (panel) {
          panel.hidden = !panel.hidden;
          settings.setAttribute('aria-expanded', panel.hidden ? 'false' : 'true');
        }
        return;
      }
      const view = event.target.closest('[data-canonical-calendar-view]');
      if (view) { state.calendarView = view.dataset.canonicalCalendarView === 'week' ? 'week' : 'month'; renderCalendar(); return; }
      const move = event.target.closest('[data-canonical-calendar-move]');
      if (move) {
        const direction = move.dataset.canonicalCalendarMove === 'next' ? 1 : -1;
        if (state.calendarView === 'week') state.calendarAnchor.setDate(state.calendarAnchor.getDate() + (7 * direction));
        else state.calendarAnchor.setMonth(state.calendarAnchor.getMonth() + direction, 1);
        renderCalendar();
        return;
      }
      if (event.target.closest('[data-canonical-calendar-today]')) { state.calendarAnchor = new Date(); renderCalendar(); return; }
      const date = event.target.closest('[data-canonical-calendar-date]');
      if (date) {
        const input = $('#routineLogDate');
        if (input) {
          input.value = date.dataset.canonicalCalendarDate;
          input.dispatchEvent(new Event('change', { bubbles:true }));
          state.calendarAnchor = UI?.localDate?.(input.value) || new Date(input.value);
          renderAll();
        }
        return;
      }
      if (event.target.closest('#findPublicRoutineBtn')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        findPublicRoutine();
      }
    }, true);

    root.addEventListener('change', (event) => {
      const itemGroup = event.target.closest('[data-canonical-item-group]');
      if (itemGroup) {
        if (itemGroup.value && groupById(itemGroup.value)) state.assignments[itemGroup.dataset.canonicalItemGroup] = itemGroup.value;
        else delete state.assignments[itemGroup.dataset.canonicalItemGroup];
        scheduleGroupSave();
        renderAll();
        return;
      }
      const complete = event.target.closest('[data-canonical-log-complete]');
      if (complete) { setCanonicalLog(complete.dataset.canonicalLogComplete, complete.checked); queueMicrotask(renderAll); return; }
      const groupComplete = event.target.closest('[data-canonical-complete-group]');
      if (groupComplete) {
        String(groupComplete.dataset.canonicalGroupItems || '').split('|').filter(Boolean).forEach((id) => setCanonicalLog(id, groupComplete.checked));
        queueMicrotask(renderAll);
        return;
      }
      const title = event.target.closest('[data-canonical-group-title]');
      if (title) { updateGroup(title.dataset.canonicalGroupTitle, { title:String(title.value || '').trim().slice(0,80) || groupById(title.dataset.canonicalGroupTitle)?.title }); return; }
      const applyTime = event.target.closest('[data-canonical-group-apply-time]');
      if (applyTime) { updateGroup(applyTime.dataset.canonicalGroupApplyTime, { applyTime:applyTime.checked }); return; }
      const time = event.target.closest('[data-canonical-group-time]');
      if (time) { updateGroup(time.dataset.canonicalGroupTime, { timeOfDay:time.value }); return; }
      const applyFrequency = event.target.closest('[data-canonical-group-apply-frequency]');
      if (applyFrequency) { updateGroup(applyFrequency.dataset.canonicalGroupApplyFrequency, { applyFrequency:applyFrequency.checked }); return; }
      const frequency = event.target.closest('[data-canonical-group-frequency]');
      if (frequency) {
        const group = groupById(frequency.dataset.canonicalGroupFrequency);
        if (group) { group.frequency.mode = frequency.value; updateGroup(group.id, { frequency:group.frequency }); }
        return;
      }
      const weekly = event.target.closest('[data-canonical-group-weekly]');
      if (weekly) {
        const group = groupById(weekly.dataset.canonicalGroupWeekly);
        if (group) { group.frequency.timesPerWeek = Math.max(1,Math.min(14,Math.round(Number(weekly.value)||1))); updateGroup(group.id,{frequency:group.frequency}); }
        return;
      }
      const day = event.target.closest('[data-canonical-group-day]');
      if (day) {
        const group = groupById(day.dataset.canonicalGroupDay);
        if (group) {
          group.frequency.days = DAYS.filter((entry) => entry === day.value ? day.checked : group.frequency.days.includes(entry));
          updateGroup(group.id,{frequency:group.frequency});
        }
        return;
      }
      const weekStart = event.target.closest('[data-canonical-week-start]');
      if (weekStart) { UI?.writeSettings?.({ startDay:weekStart.value }); renderCalendar(); return; }
      if (event.target?.id === 'publicRoutineName') {
        event.stopImmediatePropagation();
        if (event.target.value) findPublicRoutine();
        return;
      }
      if (event.target?.id === 'routineLogDate') queueMicrotask(renderAll);
      if (event.target.closest('#routineItems [data-field],#routineItems [data-routine-day]')) queueMicrotask(renderAll);
    }, true);

    root.addEventListener('input', (event) => {
      const note = event.target.closest('[data-canonical-log-note]');
      if (note) { setCanonicalNote(note.dataset.canonicalLogNote, note.value); return; }
      if (event.target.closest('#routineItems [data-field]')) queueMicrotask(renderAll);
    });

    root.addEventListener('click', (event) => {
      if (event.target.closest('#routineItems,[data-remove-request],[data-remove-confirm],[data-move],#addRoutineActionBtn')) queueMicrotask(renderAll);
    });

    document.addEventListener('baseline:routine-settings-changed', renderCalendar);
  }

  function connectAuth() {
    const auth = global.BASELINE_auth;
    if (!auth || typeof auth.get !== 'function') return;
    if (typeof auth.onChange === 'function') auth.onChange(() => global.setTimeout(loadGroups, 0));
  }

  function boot() {
    if (!$('#routine')) return;
    syncOwner();
    ensureShell();
    bindEvents();
    loadGroups();
    connectAuth();
    renderAll();
    global.setTimeout(renderAll, 500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

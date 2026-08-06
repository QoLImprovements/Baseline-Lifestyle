/* Baseline Lifestyle — authoritative grouped Public Routine presentation and Fitness group sync. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_PUBLIC_ROUTINE_GROUPS_V1__) return;
  global.__BASELINE_PUBLIC_ROUTINE_GROUPS_V1__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[character]));
  const UI = global.BASELINE_RoutineSystem;
  const SKIN_MODEL = global.BASELINE_SKINCARE_ROUTINE_MODEL;
  const GROUP_API = '/systems/baseline-fitness/api/routine_groups.php';
  const FITNESS_PUBLIC_API = '/systems/baseline-fitness/api/public_routine_grouped.php';
  let syncingGroups = false;
  let groupSaveTimer = 0;
  let serverGroupSignature = '';

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
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
      return { response, data:data && typeof data === 'object' ? data : { ok:false,error:`http_${response.status}` } };
    } catch (_error) {
      return { response:null, data:{ ok:false,error:'network_error' } };
    }
  }

  function normaliseGroups(raw) {
    const seen = new Set();
    return (Array.isArray(raw) ? raw : []).map((group) => ({
      id:String(group?.id || '').trim(),
      title:String(group?.title || '').trim(),
      applyFrequency:Boolean(group?.applyFrequency),
      frequency:group?.frequency && typeof group.frequency === 'object' ? group.frequency : null,
      applyTime:Boolean(group?.applyTime),
      timeOfDay:String(group?.timeOfDay || 'anytime')
    })).filter((group) => group.id && group.title && !seen.has(group.id) && seen.add(group.id));
  }

  function normaliseAssignments(raw, groups) {
    const valid = new Set(groups.map((group) => group.id));
    const output = {};
    Object.entries(raw && typeof raw === 'object' ? raw : {}).forEach(([key, groupId]) => {
      if (valid.has(String(groupId))) output[String(key)] = String(groupId);
    });
    return output;
  }

  function groupStateFromSettings(settings = UI?.readSettings?.(owner()) || {}) {
    const groups = normaliseGroups(settings.fitnessRoutineGroups).map((group) => ({ id:group.id, title:group.title }));
    return { groups, assignments:normaliseAssignments(settings.fitnessRoutineAssignments, groups) };
  }

  function groupSignature(state) {
    return JSON.stringify({ groups:state.groups, assignments:state.assignments });
  }

  async function pushFitnessGroups(state) {
    if (app !== 'fitness' || owner() === 'guest') return;
    const signature = groupSignature(state);
    if (signature === serverGroupSignature) return;
    const { data } = await jsonRequest(GROUP_API, { method:'POST', body:state });
    if (data?.ok) serverGroupSignature = groupSignature({
      groups:normaliseGroups(data.groups).map((group) => ({ id:group.id, title:group.title })),
      assignments:normaliseAssignments(data.assignments, normaliseGroups(data.groups))
    });
  }

  function scheduleFitnessGroupPush(settings) {
    if (app !== 'fitness' || syncingGroups) return;
    const state = groupStateFromSettings(settings);
    clearTimeout(groupSaveTimer);
    groupSaveTimer = global.setTimeout(() => pushFitnessGroups(state), 250);
  }

  async function reconcileFitnessGroups() {
    if (app !== 'fitness' || owner() === 'guest' || !UI?.readSettings || !UI?.writeSettings) return;
    const local = groupStateFromSettings();
    const { data } = await jsonRequest(GROUP_API);
    if (!data?.ok) return;
    if (data.hasState) {
      const groups = normaliseGroups(data.groups).map((group) => ({ id:group.id, title:group.title }));
      const assignments = normaliseAssignments(data.assignments, groups);
      serverGroupSignature = groupSignature({ groups, assignments });
      if (groupSignature(local) !== serverGroupSignature) {
        syncingGroups = true;
        try { UI.writeSettings({ fitnessRoutineGroups:groups, fitnessRoutineAssignments:assignments }, owner()); }
        finally { syncingGroups = false; }
      }
    } else if (local.groups.length || Object.keys(local.assignments).length) {
      await pushFitnessGroups(local);
    } else {
      serverGroupSignature = groupSignature(local);
    }
  }

  function frequencyText(value) {
    const frequency = value && typeof value === 'object' ? value : {};
    if (frequency.mode === 'daily') return 'Every day';
    if (frequency.mode === 'days') return Array.isArray(frequency.days) && frequency.days.length ? frequency.days.join(', ') : 'Specific days';
    if (frequency.mode === 'weekly') return `${Math.max(1, Number(frequency.timesPerWeek || 1))}× each week`;
    if (frequency.mode === 'monthly') return `${Math.max(1, Number(frequency.timesPerMonth || 1))}× each month`;
    return 'As needed';
  }

  function skinItemHtml(item, group = null) {
    const effective = Object.assign({}, item);
    if (group?.applyFrequency && group.frequency) effective.frequency = group.frequency;
    if (group?.applyTime) effective.timeOfDay = group.timeOfDay;
    const benefit = SKIN_MODEL?.benefitText?.(effective) || String(effective.benefit || '');
    const frequency = SKIN_MODEL?.frequencyText?.(effective.frequency) || frequencyText(effective.frequency);
    return `<article class="bl-v4-public-item"><h4>${esc(effective.title || 'Routine action')}</h4><ul><li>${esc(frequency)}</li>${benefit ? `<li>${esc(benefit)}</li>` : ''}</ul></article>`;
  }

  function renderSkinPublic(data) {
    const target = document.getElementById('publicRoutineResult');
    if (!target) return;
    if (!data?.ok || !data.publicRoutine) {
      target.innerHTML = `<div class="routine-empty">${esc(data?.error === 'routine_private' ? 'That routine is private.' : data?.error === 'routine_not_found' ? 'No public routine was found for that profile.' : 'The public routine could not be loaded.')}</div>`;
      return;
    }
    const publicRoutine = data.publicRoutine;
    const routine = SKIN_MODEL?.normaliseRoutine?.(publicRoutine.routine) || (Array.isArray(publicRoutine.routine) ? publicRoutine.routine : []);
    const groups = normaliseGroups(publicRoutine.groups);
    const assignments = normaliseAssignments(publicRoutine.assignments, groups);
    const sections = [];
    const assigned = new Set();

    groups.forEach((group, index) => {
      const items = routine.filter((item) => assignments[String(item.id)] === group.id);
      items.forEach((item) => assigned.add(String(item.id)));
      if (items.length) sections.push(`<section class="bl-v4-public-group" data-public-routine-group="${esc(group.id)}"><h3>${index + 1}. ${esc(group.title)}</h3>${items.map((item) => skinItemHtml(item, group)).join('')}</section>`);
    });

    const ungrouped = routine.filter((item) => !assigned.has(String(item.id)));
    if (ungrouped.length) {
      if (groups.length) {
        sections.push(`<section class="bl-v4-public-group" data-public-routine-group="ungrouped"><h3>${groups.length + 1}. Ungrouped routine actions</h3>${ungrouped.map((item) => skinItemHtml(item)).join('')}</section>`);
      } else if (SKIN_MODEL?.summaryGroups) {
        const byTime = SKIN_MODEL.summaryGroups(ungrouped);
        [['morning','Morning routine'],['evening','Evening routine'],['anytime','Flexible / any-time actions']].forEach(([key,label]) => {
          if (byTime[key]?.length) sections.push(`<section class="bl-v4-public-group"><h3>${esc(label)}</h3>${byTime[key].map((item) => skinItemHtml(item)).join('')}</section>`);
        });
      } else {
        sections.push(`<section class="bl-v4-public-group"><h3>Routine</h3>${ungrouped.map((item) => skinItemHtml(item)).join('')}</section>`);
      }
    }
    target.innerHTML = `<div class="public-routine-head"><h3>${esc(publicRoutine.owner)}’s routine</h3><span class="routine-public-badge">Public</span></div>${sections.join('') || '<p>This public routine does not currently contain any actions.</p>'}`;
  }

  function fitnessPlanHtml(plan) {
    const name = String(plan?.planJson?.name || 'Calisthenics Plan');
    const items = Array.isArray(plan?.planJson?.items) ? plan.planJson.items : [];
    return `<article class="bl-v4-public-item"><h4>${esc(name)}</h4>${items.length ? `<ul>${items.map((item) => {
      const details = [];
      if (Number(item.sets) > 0) details.push(`${Number(item.sets)} sets`);
      if (Number(item.baseline) > 0) details.push(`Baseline: ${Number(item.baseline)}`);
      return `<li><strong>${esc(item.exercise || 'Exercise')}</strong>${details.length ? ` — ${esc(details.join(', '))}` : ''}</li>`;
    }).join('')}</ul>` : '<p>No exercises are listed.</p>'}</article>`;
  }

  function fitnessActivityHtml(activity) {
    const detail = [frequencyText(activity?.frequency), String(activity?.notes || '').trim()].filter(Boolean);
    return `<article class="bl-v4-public-item"><h4>${esc(activity?.name || 'Fitness activity')}</h4>${detail.length ? `<ul>${detail.map((point) => `<li>${esc(point)}</li>`).join('')}</ul>` : ''}</article>`;
  }

  function renderFitnessEntity(entity) {
    return entity.type === 'plan' ? fitnessPlanHtml(entity.value) : fitnessActivityHtml(entity.value);
  }

  function renderFitnessPublic(data) {
    const target = document.getElementById('fitnessPublicRoutineResult');
    if (!target) return;
    if (!data?.ok || !data.publicRoutine) {
      target.innerHTML = `<p>${esc(data?.error === 'routine_private' ? 'That routine is private.' : 'The public routine could not be loaded.')}</p>`;
      return;
    }
    const publicRoutine = data.publicRoutine;
    const plans = Array.isArray(publicRoutine.plans) ? publicRoutine.plans : [];
    const activities = Array.isArray(publicRoutine.activities) ? publicRoutine.activities : [];
    const entities = plans.map((plan) => ({ key:`plan:${Number(plan.planId)}`, type:'plan', value:plan }))
      .concat(activities.map((activity) => ({ key:`activity:${String(activity.id)}`, type:'activity', value:activity })));
    const groups = normaliseGroups(publicRoutine.groups).map((group) => ({ id:group.id, title:group.title }));
    const assignments = normaliseAssignments(publicRoutine.assignments, groups);
    const assigned = new Set();
    const sections = [];

    groups.forEach((group, index) => {
      const members = entities.filter((entity) => assignments[entity.key] === group.id);
      members.forEach((entity) => assigned.add(entity.key));
      if (members.length) sections.push(`<section class="bl-v4-public-group" data-public-routine-group="${esc(group.id)}"><h3>${index + 1}. ${esc(group.title)}</h3>${members.map(renderFitnessEntity).join('')}</section>`);
    });

    const ungrouped = entities.filter((entity) => !assigned.has(entity.key));
    if (ungrouped.length) {
      const heading = groups.length ? `${groups.length + 1}. Ungrouped routine items` : 'Routine';
      sections.push(`<section class="bl-v4-public-group" data-public-routine-group="ungrouped"><h3>${esc(heading)}</h3>${ungrouped.map(renderFitnessEntity).join('')}</section>`);
    }
    target.innerHTML = `<h3>${esc(publicRoutine.owner)}’s Routine</h3>${sections.join('') || '<p>This public routine does not currently contain plans or activities.</p>'}`;
  }

  async function loadSkinPublic() {
    const field = document.getElementById('publicRoutineName');
    const name = String(field?.value || '').trim();
    if (!name) { field?.focus(); return; }
    const target = document.getElementById('publicRoutineResult');
    if (target) target.innerHTML = '<div class="routine-empty">Loading public routine…</div>';
    const { data } = await jsonRequest(`/systems/baseline-natural-skincare/api/routine_state.php?name=${encodeURIComponent(name)}`);
    renderSkinPublic(data);
  }

  async function loadFitnessPublic() {
    const field = document.getElementById('fitnessPublicRoutineName');
    const name = String(field?.value || '').trim();
    if (!name) { field?.focus(); return; }
    const target = document.getElementById('fitnessPublicRoutineResult');
    if (target) target.innerHTML = '<p>Loading public routine…</p>';
    const { data } = await jsonRequest(`${FITNESS_PUBLIC_API}?name=${encodeURIComponent(name)}`);
    renderFitnessPublic(data);
  }

  function handleClick(event) {
    if (app === 'skin' && event.target?.closest?.('#findPublicRoutineBtn')) {
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation(); loadSkinPublic(); return;
    }
    if (app === 'fitness' && event.target?.closest?.('#fitnessViewPublicRoutine')) {
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation(); loadFitnessPublic();
    }
  }

  function handleChange(event) {
    if (app === 'skin' && event.target?.id === 'publicRoutineName' && event.target.value) {
      event.stopPropagation(); event.stopImmediatePropagation(); loadSkinPublic();
    }
  }

  global.addEventListener('click', handleClick, true);
  global.addEventListener('change', handleChange, true);
  if (app === 'fitness') {
    document.addEventListener('baseline:routine-settings-changed', (event) => scheduleFitnessGroupPush(event.detail?.settings));
    reconcileFitnessGroups();
    try { global.BASELINE_auth?.onChange?.(() => reconcileFitnessGroups()); } catch (_error) {}
  }
})(typeof window !== 'undefined' ? window : globalThis);

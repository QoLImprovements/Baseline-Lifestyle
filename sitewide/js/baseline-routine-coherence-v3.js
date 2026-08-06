/* Baseline Lifestyle — one sitewide My Routine coherence layer. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_COHERENCE_V3__) return;
  global.__BASELINE_ROUTINE_COHERENCE_V3__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[character]));
  const state = {
    frame:0,
    applying:false,
    observer:null,
    fitnessVisibility:'private',
    fitnessPublicLoaded:false,
    captionTimer:0,
    captionMarker:null,
    longPressed:false
  };

  function owner() {
    try {
      const auth = global.BASELINE_auth?.get?.();
      return String(auth?.authed ? (auth.name || auth.user?.name || '') : 'guest').trim().toLocaleLowerCase('en-GB') || 'guest';
    } catch (_error) { return 'guest'; }
  }

  function injectStylesheet() {
    if ($('#baselineRoutineCoherenceV3Css')) return;
    const link = document.createElement('link');
    link.id = 'baselineRoutineCoherenceV3Css';
    link.rel = 'stylesheet';
    link.href = '/sitewide/css/baseline-routine-coherence-v3.css?v=SITEWIDE_ROUTINE_COHERENCE_20260806_3';
    document.head.append(link);
  }

  function nativeSelect(select) {
    if (!select) return null;
    select.dataset.nativeSelect = 'true';
    select.classList.add('bl-routine-native-select');
    const wrapper = select.parentElement?.classList?.contains('bl-select') ? select.parentElement : null;
    if (wrapper) {
      wrapper.parentNode?.insertBefore(select, wrapper);
      wrapper.remove();
    }
    return select;
  }

  function removeDuplicateIds(id) {
    const nodes = $$(`[id="${CSS.escape(id)}"]`);
    nodes.slice(1).forEach((node) => {
      const wrapper = node.closest('.bl-select');
      (wrapper || node).remove();
    });
    return nativeSelect(nodes[0]);
  }

  function removeObsoleteFooter() {
    const footer = $('footer.footer');
    if (!footer) return;
    const text = footer.textContent || '';
    if (/Baseline (?:Natural Skincare|Food Approach)\s*-\s*Updated/i.test(text)) footer.remove();
  }

  function readJson(key, fallback) {
    try {
      const raw = global.localStorage?.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) { return fallback; }
  }

  function readSkinRoutine() {
    const value = readJson(`__bl_skincare_routine_v1__::${owner()}`, {});
    return {
      visibility:value?.visibility === 'public' ? 'public' : 'private',
      items:Array.isArray(value?.items) ? value.items : Array.isArray(value?.routine) ? value.routine : [],
      logs:value?.logs && typeof value.logs === 'object' ? value.logs : {}
    };
  }

  function readSkinGroups() {
    const value = readJson(`__bl_skincare_routine_groups_v3__::${owner()}`, {});
    return {
      groups:Array.isArray(value?.groups) ? value.groups : [],
      assignments:value?.assignments && typeof value.assignments === 'object' ? value.assignments : {}
    };
  }

  function routineSettings() {
    try { return global.BASELINE_RoutineSystem?.readSettings?.(owner()) || {}; }
    catch (_error) { return {}; }
  }

  function cleanSelectControls() {
    ['routineVisibility','publicRoutineName','skinRoutineSummaryFilter','fitnessSummaryGroupFilter','fitnessRoutineVisibility','fitnessPublicRoutineName']
      .forEach(removeDuplicateIds);
    $$('.routine-visibility-control select,.bl-routine-summary-filter select,.routine-public-select select,.bl-routine-public-controls select')
      .forEach(nativeSelect);
  }

  function summaryToolbar(system) {
    const target = system === 'skin' ? $('#routineSummary') : $('#fitnessExerciseSummary');
    if (!target) return null;
    const panel = target.closest(system === 'skin' ? '[data-routine-panel="summary"]' : '[data-fitness-routine-panel="summary"]');
    if (!panel) return null;
    let toolbar = panel.querySelector(':scope .bl-routine-summary-toolbar');
    if (!toolbar) {
      toolbar = document.createElement('div');
      toolbar.className = 'bl-routine-summary-toolbar';
      target.insertAdjacentElement('beforebegin', toolbar);
    }
    return toolbar;
  }

  function normalizeSkinSummaryControls() {
    const toolbar = summaryToolbar('skin');
    if (!toolbar) return;
    const filters = $$('#skinRoutineSummaryFilterWrap');
    filters.slice(1).forEach((node) => node.remove());
    const filter = filters[0];
    if (filter) {
      filter.classList.add('bl-routine-summary-filter');
      toolbar.append(filter);
      nativeSelect($('#skinRoutineSummaryFilter', filter));
    }

    const controls = $$('.routine-visibility-control');
    controls.slice(1).forEach((node) => node.remove());
    const visibility = controls[0];
    if (visibility) {
      visibility.classList.add('bl-routine-visibility-control');
      toolbar.append(visibility);
      nativeSelect($('#routineVisibility', visibility));
      let note = visibility.querySelector('.bl-routine-visibility-note');
      if (!note) {
        note = document.createElement('p');
        note.className = 'bl-routine-visibility-note';
        note.textContent = 'Public shares the routine plan and benefit summaries only. Completion records remain private.';
        visibility.append(note);
      }
    }
  }

  function normalizeSkinPublicRoutines() {
    const panel = $('[data-routine-panel="public"]');
    if (!panel) return;
    const card = panel.querySelector('.routine-card');
    if (!card) return;
    card.classList.add('bl-routine-public-card');
    const control = card.querySelector('.routine-public-select');
    if (control) {
      control.classList.add('bl-routine-public-controls');
      nativeSelect($('#publicRoutineName', control));
      const select = $('#publicRoutineName', control);
      const button = $('#findPublicRoutineBtn', control);
      if (select && button) button.disabled = !select.options.length || select.disabled;
    }
    const result = $('#publicRoutineResult', card);
    if (result) result.classList.add('bl-routine-public-result');
  }

  function groupHeading(header, number, label) {
    if (!header || !number) return;
    header.querySelectorAll(':scope .bl-routine-group-number').forEach((node) => node.remove());
    const heading = header.querySelector('h3,strong');
    if (!heading) return;
    let wrap = heading.closest('.bl-routine-group-heading');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'bl-routine-group-heading';
      heading.parentNode?.insertBefore(wrap, heading);
      wrap.append(heading);
    }
    wrap.insertAdjacentHTML('afterbegin', `<span class="bl-routine-group-number" aria-label="Routine group ${number}${label ? `: ${esc(label)}` : ''}">${number}</span>`);
  }

  function numberSkinGroups() {
    const data = readSkinGroups();
    const groupById = new Map(data.groups.map((group, index) => [String(group.id), { group, number:index + 1 }]));
    $$('.routine-plan-group[data-plan-group]').forEach((section) => {
      const record = groupById.get(String(section.dataset.planGroup || ''));
      if (!record) return;
      groupHeading(section.querySelector(':scope > .routine-plan-group-head'), record.number, record.group.title);
      section.querySelectorAll('.routine-item .routine-order').forEach((badge) => { badge.hidden = true; });
    });

    const ungroupedPlan = $('.routine-plan-group-ungrouped');
    if (ungroupedPlan) {
      $$('.routine-item', ungroupedPlan).forEach((item, index) => {
        const badge = item.querySelector('.routine-order');
        if (badge) {
          badge.hidden = false;
          badge.textContent = String(data.groups.length + index + 1);
        }
      });
    }

    const byTitle = new Map(data.groups.map((group, index) => [String(group.title || '').trim().toLocaleLowerCase('en-GB'), { group, number:index + 1 }]));
    $$('#routineSummary .routine-summary-group').forEach((section) => {
      const title = section.querySelector('h3')?.textContent?.trim() || '';
      const record = byTitle.get(title.toLocaleLowerCase('en-GB'));
      if (record) {
        groupHeading(section.querySelector('.routine-summary-group-head') || section, record.number, record.group.title);
        section.querySelectorAll('.routine-summary-title>span').forEach((badge) => badge.remove());
      } else if (/ungrouped/i.test(title)) {
        $$('.routine-summary-item', section).forEach((item, index) => {
          const titleWrap = item.querySelector('.routine-summary-title');
          if (!titleWrap) return;
          titleWrap.querySelector(':scope > span')?.remove();
          titleWrap.insertAdjacentHTML('afterbegin', `<span class="bl-routine-group-number">${data.groups.length + index + 1}</span>`);
        });
      }
    });
  }

  function completed(entry) {
    return entry === true || Boolean(entry?.completed);
  }

  function skinMarkers(date) {
    const routine = readSkinRoutine();
    const data = readSkinGroups();
    const entries = routine.logs?.[date] || {};
    const ungrouped = routine.items.filter((item) => !data.assignments[item.id]);
    const seen = new Set();
    const output = [];
    Object.entries(entries).filter(([, entry]) => completed(entry)).forEach(([itemId]) => {
      const item = routine.items.find((candidate) => String(candidate.id) === String(itemId));
      if (!item) return;
      const groupId = data.assignments[itemId];
      if (groupId) {
        if (seen.has(groupId)) return;
        seen.add(groupId);
        const index = data.groups.findIndex((group) => String(group.id) === String(groupId));
        if (index >= 0) output.push({ number:index + 1, caption:data.groups[index].title, target:groupId, item:'' });
        return;
      }
      const index = ungrouped.findIndex((candidate) => String(candidate.id) === String(itemId));
      if (index >= 0) output.push({ number:data.groups.length + index + 1, caption:item.title, target:'ungrouped', item:itemId });
    });
    return output.sort((left, right) => left.number - right.number);
  }

  function fitnessGroups() {
    let plans = [];
    let routine = { activities:[] };
    try { plans = global.BASELINE_fitnessPlans?.getPlans?.() || []; } catch (_error) {}
    try { routine = global.BASELINE_fitnessRoutine?.getState?.() || routine; } catch (_error) {}
    const groups = plans.map((plan, index) => ({
      key:`plan:${Number(plan.planId)}`,
      number:0,
      label:String(plan?.planJson?.name || plan?.name || `Calisthenics Plan ${index + 1}`),
      type:'plan'
    }));
    [['cardio','Cardio'],['other','Other Fitness Activity'],['sports','Sports']].forEach(([section, label]) => {
      if ((routine.activities || []).some((item) => item.section === section)) groups.push({ key:`section:${section}`, number:0, label, type:'section' });
    });
    const order = Array.isArray(routineSettings().fitnessGroupOrder) ? routineSettings().fitnessGroupOrder : [];
    groups.sort((left, right) => {
      const li = order.indexOf(left.key), ri = order.indexOf(right.key);
      if (li < 0 && ri < 0) return 0;
      if (li < 0) return 1;
      if (ri < 0) return -1;
      return li - ri;
    });
    groups.forEach((group, index) => { group.number = index + 1; });
    return groups;
  }

  function fitnessMarkers(date) {
    const groups = fitnessGroups();
    let routine = { activities:[], logs:{} };
    try { routine = global.BASELINE_fitnessRoutine?.getState?.() || routine; } catch (_error) {}
    const output = [];
    const seen = new Set();
    try {
      (global.BASELINE_fitnessPlans?.getPlansForDate?.(date) || []).forEach((entry) => {
        const key = `plan:${Number(entry.planId)}`;
        if (seen.has(key)) return;
        seen.add(key);
        const group = groups.find((candidate) => candidate.key === key);
        if (group) output.push({ number:group.number, caption:group.label, target:key });
      });
    } catch (_error) {}
    Object.entries(routine.logs?.[date] || {}).filter(([, entry]) => completed(entry)).forEach(([itemId]) => {
      const activity = (routine.activities || []).find((candidate) => String(candidate.id) === String(itemId));
      if (!activity) return;
      const key = `section:${activity.section}`;
      if (seen.has(key)) return;
      seen.add(key);
      const group = groups.find((candidate) => candidate.key === key);
      if (group) output.push({ number:group.number, caption:group.label, target:key });
    });
    return output.sort((left, right) => left.number - right.number);
  }

  function ensureCalendarCell(day) {
    if (!day?.parentNode) return null;
    if (day.parentElement?.classList?.contains('bl-routine-calendar-cell')) return day.parentElement;
    const cell = document.createElement('div');
    cell.className = 'bl-routine-calendar-cell';
    day.parentNode.insertBefore(cell, day);
    cell.append(day);
    return cell;
  }

  function renderCalendarMarkers(system) {
    const selector = system === 'skin' ? '.routine-calendar-card [data-calendar-date]' : '.fitness-calendar-card [data-calendar-date]';
    $$(selector).forEach((day) => {
      day.querySelector(':scope > .bl-routine-calendar-markers')?.remove();
      if (system === 'skin') day.querySelector(':scope > .routine-calendar-count')?.remove();
      const cell = ensureCalendarCell(day);
      if (!cell) return;
      cell.querySelector(':scope > .bl-routine-calendar-markers')?.remove();
      const markers = system === 'skin' ? skinMarkers(day.dataset.calendarDate) : fitnessMarkers(day.dataset.calendarDate);
      if (!markers.length) return;
      const wrap = document.createElement('span');
      wrap.className = 'bl-routine-calendar-markers';
      markers.forEach((marker) => {
        const button = document.createElement('span');
        button.className = 'bl-routine-calendar-marker';
        button.setAttribute('role', 'button');
        button.tabIndex = 0;
        button.textContent = String(marker.number);
        button.dataset.caption = marker.caption;
        button.dataset.routineCoherenceSystem = system;
        button.dataset.routineCoherenceTarget = marker.target;
        if (marker.item) button.dataset.routineCoherenceItem = marker.item;
        button.setAttribute('aria-label', `${marker.caption}. Open in Routine Summary.`);
        wrap.append(button);
      });
      cell.append(wrap);
    });
  }

  function openSkinSummary(target, itemId) {
    $('[data-routine-view="summary"]')?.click();
    global.setTimeout(() => {
      const select = nativeSelect($('#skinRoutineSummaryFilter'));
      if (select && [...select.options].some((option) => option.value === target)) {
        select.value = target;
        select.dispatchEvent(new Event('change', { bubbles:true }));
      }
      const destination = itemId
        ? $(`#routineSummary [data-bl-summary-item="${CSS.escape(itemId)}"]`)
        : $(`#routineSummary [data-bl-summary-group="${CSS.escape(target)}"]`);
      (destination || $('#routineSummary'))?.scrollIntoView({ behavior:'smooth', block:'start' });
    }, 100);
  }

  function openFitnessSummary(target) {
    $('[data-fitness-routine-view="summary"]')?.click();
    global.setTimeout(() => {
      const select = nativeSelect($('#fitnessSummaryGroupFilter'));
      if (select && [...select.options].some((option) => option.value === target)) {
        select.value = target;
        select.dispatchEvent(new Event('change', { bubbles:true }));
      }
      $('#fitnessExerciseSummary')?.scrollIntoView({ behavior:'smooth', block:'start' });
    }, 100);
  }

  function beginCaption(marker, event) {
    clearTimeout(state.captionTimer);
    state.captionMarker?.classList.remove('is-caption-open');
    state.captionMarker = marker;
    state.longPressed = false;
    state.captionTimer = global.setTimeout(() => {
      state.longPressed = true;
      marker.classList.add('is-caption-open');
      try { global.navigator?.vibrate?.(20); } catch (_error) {}
    }, 550);
    if (event.pointerType === 'touch') marker.setPointerCapture?.(event.pointerId);
  }

  function endCaption(marker, event) {
    clearTimeout(state.captionTimer);
    if (state.longPressed) {
      event.preventDefault();
      global.setTimeout(() => marker.classList.remove('is-caption-open'), 1800);
    }
  }

  function muscleProfile(exercise) {
    const family = String(exercise?.family || '').toLocaleLowerCase('en-GB');
    const movement = String(exercise?.movementCategory || '').toLocaleLowerCase('en-GB');
    const name = String(exercise?.name || 'This exercise');
    if (family.includes('push-up')) return {
      muscles:['Pectoralis major — drives the arms away from the body during the press.','Triceps — extend the elbows to finish each repetition.','Anterior deltoids — guide and stabilise the shoulder through the pressing arc.','Serratus anterior and trunk muscles — keep the shoulder blades controlled and the body moving as one unit.'],
      daily:['Pushing open a heavy door or moving an object away from you.','Getting up from the floor using the hands.','Supporting body weight through the arms during household or sporting tasks.']
    };
    if (family.includes('squat')) return {
      muscles:['Quadriceps — straighten the knees as you stand.','Gluteus maximus — extends the hips and supplies much of the upward drive.','Adductors — assist hip extension and control the thighs through depth.','Calves and trunk muscles — stabilise the ankles, pelvis and torso.'],
      daily:['Standing up from a chair, bed or low seat.','Climbing stairs and rising from a crouch.','Lifting objects from a low position while keeping the body controlled.']
    };
    if (family.includes('lunge')) return {
      muscles:['Quadriceps and gluteus maximus — lower and raise the body over the working leg.','Gluteus medius — steadies the pelvis and knee in a split stance.','Hamstrings and adductors — control hip position and deceleration.','Calves and foot muscles — maintain balance as weight shifts.'],
      daily:['Stepping up, down or over obstacles.','Recovering balance after a long or unexpected step.','Walking uphill, climbing stairs and kneeling to the floor.']
    };
    if (family.includes('plank') && !family.includes('side') && !family.includes('reverse')) return {
      muscles:['Rectus abdominis and deep abdominal wall — resist the lower back arching.','Obliques — prevent unwanted rotation and side-bending.','Serratus anterior and shoulders — keep the upper body firmly supported.','Glutes and quadriceps — lock the pelvis and legs into the body line.'],
      daily:['Keeping the trunk stable while carrying shopping or lifting.','Maintaining posture while pushing, pulling or reaching.','Transferring force between the upper and lower body in running and sport.']
    };
    if (family.includes('side-plank')) return {
      muscles:['Obliques and quadratus lumborum — hold the trunk against sideways collapse.','Gluteus medius and minimus — keep the pelvis lifted and level.','Shoulder stabilisers — support the upper body over one arm.','Adductors — help organise the legs and pelvis as a single line.'],
      daily:['Carrying a bag on one side without leaning.','Staying balanced when reaching sideways or changing direction.','Controlling the pelvis during walking, running and single-leg tasks.']
    };
    if (family.includes('reverse-plank') || movement.includes('posterior')) return {
      muscles:['Gluteus maximus — keeps the hips extended.','Hamstrings — assist hip extension and hold the back of the legs active.','Spinal extensors — maintain a long, supported trunk.','Posterior shoulders and triceps — support the body behind the torso.'],
      daily:['Maintaining an upright posture rather than folding forward.','Rising, climbing and walking with stronger hip extension.','Balancing pressing work with strength across the back of the body.']
    };
    if (family.includes('bridge') || family.includes('hinge')) return {
      muscles:['Gluteus maximus — produces hip extension.','Hamstrings — assist the glutes and control the return.','Adductors — contribute to hip extension and pelvic control.','Deep trunk muscles — keep the spine organised while the hips move.'],
      daily:['Standing from a bent position and climbing stairs.','Picking objects up by moving through the hips.','Supporting walking, running and cycling with stronger hip drive.']
    };
    if (family.includes('row') || family.includes('pull-up')) return {
      muscles:['Latissimus dorsi — draws the upper arms toward the body.','Rhomboids and middle trapezius — retract and control the shoulder blades.','Biceps and brachialis — bend the elbows during the pull.','Rear deltoids, forearms and grip muscles — stabilise the shoulders and hold the support.'],
      daily:['Pulling a door, trolley or object toward you.','Carrying bags with more stable shoulders and grip.','Maintaining upper-back posture during desk work and lifting.']
    };
    return {
      muscles:[`${name} trains the prime movers of the ${exercise?.movementCategory || 'movement'} pattern.`,`Supporting muscles around the joints keep the movement aligned and controlled.`,`The trunk links the working limbs so force is transferred without unnecessary movement.`],
      daily:['Improves control in comparable pushing, pulling, lifting or stabilising tasks.','Builds repeatable strength for sport and ordinary movement.','Supports confidence when the body must create or resist force.']
    };
  }

  function activityProfile(definition, activity) {
    const group = String(definition?.group || activity?.section || '').toLocaleLowerCase('en-GB');
    if (group.includes('running') || group.includes('walking')) return {
      muscles:['Glutes and quadriceps — propel and support each step.','Hamstrings and calves — control the stride and return energy through push-off.','Hip stabilisers and trunk — keep the pelvis and torso steady as weight transfers from leg to leg.'],
      daily:['Longer and more comfortable walking.','Climbing stairs and hills with less fatigue.','Sustaining errands, travel and active work for longer.']
    };
    if (group.includes('cycling')) return {
      muscles:['Quadriceps and glutes — create most of the downstroke force.','Hamstrings and calves — smooth the pedal cycle.','Trunk and hip stabilisers — hold an efficient position over the bicycle.'],
      daily:['Longer journeys with stronger leg endurance.','Repeated stair climbing and uphill walking.','Sustained lower-body work with controlled impact.']
    };
    if (group.includes('yoga') || group.includes('mindful')) return {
      muscles:['Deep trunk and spinal stabilisers — organise posture and controlled transitions.','Hip and shoulder stabilisers — maintain joint position through changing ranges.','Leg and arm muscles — create active support rather than relying only on passive flexibility.'],
      daily:['Reaching, bending and turning with greater control.','Moving between the floor and standing more comfortably.','Maintaining balance and posture during slow or awkward tasks.']
    };
    if (group.includes('martial')) return {
      muscles:['Hips and legs — generate stance, movement and striking or grappling drive.','Trunk — transfers force and resists rotation.','Shoulders, back and arms — control guards, strikes, frames and grips.'],
      daily:['Faster changes of direction and balance recovery.','Coordinating the whole body during demanding movement.','Sustaining short bursts of effort without losing technique.']
    };
    if (activity?.section === 'sports') return {
      muscles:['The prime movers depend on the sport, while the legs and trunk usually create the base for movement.','Joint stabilisers repeatedly organise balance, acceleration and deceleration.','Grip, shoulder and arm muscles contribute according to the implement, ball or opponent demands.'],
      daily:['Quicker reactions and more confident changes of direction.','Better balance during unpredictable movement.','Improved work capacity for active leisure and physical tasks.']
    };
    return {
      muscles:['Large working muscles create the movement while smaller stabilisers preserve alignment.','The cardiovascular system supplies repeated effort.','The trunk coordinates force between the upper and lower body.'],
      daily:['Sustaining physical tasks with less fatigue.','Moving with greater coordination and confidence.','Recovering more effectively between repeated efforts.']
    };
  }

  function enhanceFitnessSummaries() {
    const target = $('#fitnessExerciseSummary');
    if (!target) return;
    let routine = { activities:[] };
    try { routine = global.BASELINE_fitnessRoutine?.getState?.() || routine; } catch (_error) {}
    const activities = new Map((routine.activities || []).map((activity) => [String(activity.name || '').trim(), activity]));
    const exercises = Array.isArray(global.BASELINE_FITNESS_DEBUG?.EXERCISES) ? global.BASELINE_FITNESS_DEBUG.EXERCISES : [];
    $$('.fitness-exercise-summary-item', target).forEach((card) => {
      const title = card.querySelector('.routine-summary-title strong')?.textContent?.trim() || '';
      const exercise = exercises.find((candidate) => candidate.name === title);
      const activity = activities.get(title);
      const definition = activity ? global.BASELINE_FITNESS_ACTIVITY_CATALOGUE?.ACTIVITY_BY_ID?.get?.(String(activity.activityId || '')) : null;
      const profile = exercise ? muscleProfile(exercise) : activityProfile(definition, activity);
      const sections = $$('.bl-routine-summary-section', card);
      const roleSection = sections[1] || sections[0];
      if (!roleSection || roleSection.dataset.comprehensiveMuscles === 'true') return;
      roleSection.dataset.comprehensiveMuscles = 'true';
      const existing = roleSection.innerHTML;
      const movementExplanation = exercise
        ? `<h4>Why this movement is worth mastering</h4><p>${esc(exercise.goodFor || 'It builds strength and control through a movement pattern that carries into sport and ordinary life.')}</p><h4>How the muscles work together</h4><p>${esc(exercise.how || 'Move with deliberate control so the prime movers create force while the supporting muscles preserve alignment.')}</p>`
        : `<h4>Why this activity earns its place</h4><p>This activity develops a combination of capacity, coordination and repeatable movement skill. Its value grows as technique remains clear while duration or workload gradually increases.</p>`;
      roleSection.innerHTML = `${movementExplanation}<h4>Muscles worked — and what each contributes</h4><ul class="bl-routine-muscle-list">${profile.muscles.map((item) => `<li>${esc(item)}</li>`).join('')}</ul><h4>Everyday movement this supports</h4><ul class="bl-routine-daily-life-list">${profile.daily.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>${existing}`;
    });
  }

  function fitnessStorage() {
    return readJson(`__bl_fitness_routine_v2__::${owner()}`, { activities:[], logs:{}, visibility:'private' });
  }

  function writeFitnessVisibility(value) {
    const data = fitnessStorage();
    data.visibility = value === 'public' ? 'public' : 'private';
    try { global.localStorage?.setItem(`__bl_fitness_routine_v2__::${owner()}`, JSON.stringify(data)); } catch (_error) {}
  }

  async function fetchFitnessState() {
    try {
      const response = await fetch('/systems/baseline-fitness/api/routine_state.php', { credentials:'same-origin', headers:{ Accept:'application/json' } });
      const data = await response.json();
      if (response.ok && data?.ok) {
        state.fitnessVisibility = data.visibility === 'public' ? 'public' : 'private';
        writeFitnessVisibility(state.fitnessVisibility);
      } else state.fitnessVisibility = fitnessStorage().visibility === 'public' ? 'public' : 'private';
    } catch (_error) {
      state.fitnessVisibility = fitnessStorage().visibility === 'public' ? 'public' : 'private';
    }
    const select = nativeSelect($('#fitnessRoutineVisibility'));
    if (select) select.value = state.fitnessVisibility;
  }

  async function saveFitnessVisibility(value) {
    const visibility = value === 'public' ? 'public' : 'private';
    let routine = { activities:[], logs:{} };
    try { routine = global.BASELINE_fitnessRoutine?.getState?.() || routine; } catch (_error) {}
    state.fitnessVisibility = visibility;
    writeFitnessVisibility(visibility);
    const status = $('#fitnessRoutineVisibilityStatus');
    if (status) status.textContent = 'Saving visibility…';
    try {
      const response = await fetch('/systems/baseline-fitness/api/routine_state.php', {
        method:'POST', credentials:'same-origin', headers:{ 'Content-Type':'application/json', Accept:'application/json' },
        body:JSON.stringify({ visibility, activities:routine.activities || [], logs:routine.logs || {} })
      });
      const data = await response.json();
      if (!response.ok || !data?.ok) throw new Error('save_failed');
      if (status) status.textContent = visibility === 'public' ? 'Routine saved and public.' : 'Routine saved privately.';
    } catch (_error) {
      if (status) status.textContent = 'Saved on this device; account sync could not complete.';
    }
  }

  function ensureFitnessVisibility() {
    const toolbar = summaryToolbar('fitness');
    if (!toolbar) return;
    let control = $('#fitnessRoutineVisibilityControl');
    if (!control) {
      control = document.createElement('label');
      control.id = 'fitnessRoutineVisibilityControl';
      control.className = 'bl-routine-visibility-control';
      control.innerHTML = `<span>Routine Visibility</span><select id="fitnessRoutineVisibility" data-native-select="true"><option value="private">Private</option><option value="public">Public</option></select><p class="bl-routine-visibility-note">Public shares your routine plans and exercise summaries only. Completion records remain private.</p><span id="fitnessRoutineVisibilityStatus" class="status" aria-live="polite"></span>`;
      toolbar.append(control);
      fetchFitnessState();
    }
    nativeSelect($('#fitnessRoutineVisibility', control));
    const filter = $('#fitnessSummaryGroupFilterWrap');
    if (filter) toolbar.insertBefore(filter, control);
  }

  function ensureFitnessPublicRoutines() {
    const shell = $('.fitness-routine-shell');
    const nav = $('.fitness-routine-subtabs', shell);
    const summaryPanel = $('[data-fitness-routine-panel="summary"]', shell);
    if (!shell || !nav || !summaryPanel) return;
    let tab = $('[data-fitness-routine-view="public"]', nav);
    if (!tab) {
      tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'tab fitness-routine-subtab bl-routine-tab';
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', 'false');
      tab.dataset.fitnessRoutineView = 'public';
      tab.textContent = 'Public Routines';
      nav.append(tab);
    }
    let panel = $('[data-fitness-routine-panel="public"]', shell);
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'fitness-routine-panel bl-routine-panel';
      panel.dataset.fitnessRoutinePanel = 'public';
      panel.hidden = true;
      panel.innerHTML = `<div class="card fitness-routine-card bl-routine-card bl-routine-public-card"><div><h2>Public Routines</h2><p class="note">Choose a public profile. Its routine plans and exercise summaries are shown; completion logs remain private.</p></div><div class="bl-routine-public-controls"><label class="field-stack"><span>Public profile</span><select id="fitnessPublicRoutineName" data-native-select="true"><option value="">Loading public routines…</option></select></label><button type="button" class="action secondary" id="fitnessViewPublicRoutine">View Routine</button></div><div id="fitnessPublicRoutineResult" class="bl-routine-public-result" aria-live="polite"></div></div>`;
      summaryPanel.insertAdjacentElement('afterend', panel);
    }
    nativeSelect($('#fitnessPublicRoutineName', panel));
  }

  function showFitnessPublicPanel() {
    ensureFitnessPublicRoutines();
    const root = $('#my-plan');
    $$('.fitness-routine-subtab', root).forEach((button) => button.setAttribute('aria-selected', button.dataset.fitnessRoutineView === 'public' ? 'true' : 'false'));
    $$('.fitness-routine-panel', root).forEach((panel) => {
      const active = panel.dataset.fitnessRoutinePanel === 'public';
      panel.hidden = !active;
      panel.classList.toggle('active', active);
    });
    try { global.sessionStorage?.setItem('__bl_fitness_routine_view_v2__', 'public'); } catch (_error) {}
    loadFitnessPublicProfiles();
  }

  async function loadFitnessPublicProfiles() {
    const select = nativeSelect($('#fitnessPublicRoutineName'));
    if (!select || (state.fitnessPublicLoaded && select.options.length > 1)) return;
    try {
      const response = await fetch('/systems/baseline-fitness/api/routine_state.php?list=public', { credentials:'same-origin', headers:{ Accept:'application/json' } });
      const data = await response.json();
      const profiles = response.ok && Array.isArray(data?.profiles) ? data.profiles : [];
      select.innerHTML = `<option value="">${profiles.length ? 'Choose a public profile…' : 'No public routines available'}</option>${profiles.map((name) => `<option value="${esc(name)}">${esc(name)}</option>`).join('')}`;
      select.disabled = !profiles.length;
      state.fitnessPublicLoaded = true;
      const button = $('#fitnessViewPublicRoutine');
      if (button) button.disabled = !profiles.length;
    } catch (_error) {
      select.innerHTML = '<option value="">Public routines could not be loaded</option>';
      select.disabled = true;
    }
  }

  function publicExerciseRole(item) {
    const name = String(item?.exercise || item?.name || 'Exercise');
    const exercise = (global.BASELINE_FITNESS_DEBUG?.EXERCISES || []).find((candidate) => candidate.name === name);
    return exercise?.goodFor || 'Builds repeatable strength, control and work capacity through the selected movement pattern.';
  }

  async function viewFitnessPublicRoutine() {
    const select = $('#fitnessPublicRoutineName');
    const name = String(select?.value || '').trim();
    if (!name) { select?.focus(); return; }
    const target = $('#fitnessPublicRoutineResult');
    if (target) target.innerHTML = '<div class="fitness-routine-empty">Loading public routine…</div>';
    try {
      const response = await fetch(`/systems/baseline-fitness/api/routine_state.php?name=${encodeURIComponent(name)}`, { credentials:'same-origin', headers:{ Accept:'application/json' } });
      const data = await response.json();
      if (!response.ok || !data?.ok || !data.publicRoutine) throw new Error(data?.error || 'load_failed');
      const publicRoutine = data.publicRoutine;
      const plans = Array.isArray(publicRoutine.plans) ? publicRoutine.plans : [];
      const activities = Array.isArray(publicRoutine.activities) ? publicRoutine.activities : [];
      const planHtml = plans.map((plan, index) => {
        const json = plan.planJson || {};
        const items = Array.isArray(json.items) ? json.items : [];
        return `<section class="bl-routine-public-group"><h3>${index + 1}. ${esc(json.name || `Calisthenics Plan ${index + 1}`)}</h3>${items.map((item) => `<article class="bl-routine-public-item"><h4>${esc(item.exercise || item.name || 'Exercise')}</h4><p>${esc(publicExerciseRole(item))}</p><p><strong>Plan structure:</strong> ${esc(item.sets ? `${item.sets} sets` : 'Progressive exercise plan')}${item.baseline ? ` · Baseline ${esc(item.baseline)}` : ''}</p></article>`).join('') || '<p>No exercises are listed in this plan.</p>'}</section>`;
      }).join('');
      const activityHtml = activities.length ? `<section class="bl-routine-public-group"><h3>${plans.length + 1}. Other Fitness Activities</h3>${activities.map((activity) => `<article class="bl-routine-public-item"><h4>${esc(activity.name)}</h4><p>${esc(activity.notes || 'A scheduled activity within this public fitness routine.')}</p></article>`).join('')}</section>` : '';
      target.innerHTML = `<div class="public-routine-head"><h3>${esc(publicRoutine.owner)}’s routine</h3><span class="routine-public-badge">Public</span></div>${planHtml}${activityHtml || (!planHtml ? '<div class="fitness-routine-empty">This public routine does not currently contain any plans or activities.</div>' : '')}`;
    } catch (_error) {
      if (target) target.innerHTML = '<div class="fitness-routine-empty">The public routine could not be loaded.</div>';
    }
  }

  function fixCreatePlanButton() {
    const button = $('#createCalisthenicsPlan');
    if (button) button.textContent = 'Create Another Plan';
  }

  function createAnotherPlan() {
    const keyOwner = owner();
    try {
      global.localStorage?.setItem(`__bl_fitness_creating_plan_v1__::${keyOwner}`, '1');
      global.localStorage?.removeItem(`__bl_fitness_selected_plan_v1__::${keyOwner}`);
      global.sessionStorage?.setItem('__bl_fitness_routine_view_v2__', 'calisthenics');
    } catch (_error) {}
    const url = new URL('/baseline-fitness/my-routine', global.location.origin);
    url.searchParams.set('new-plan', String(Date.now()));
    global.location.replace(url.toString());
  }

  function apply() {
    state.frame = 0;
    if (state.applying) return;
    state.applying = true;
    state.observer?.disconnect();
    try {
      injectStylesheet();
      removeObsoleteFooter();
      cleanSelectControls();
      if (app === 'skin') {
        normalizeSkinSummaryControls();
        normalizeSkinPublicRoutines();
        numberSkinGroups();
        renderCalendarMarkers('skin');
      } else {
        ensureFitnessVisibility();
        ensureFitnessPublicRoutines();
        enhanceFitnessSummaries();
        renderCalendarMarkers('fitness');
        fixCreatePlanButton();
      }
    } finally {
      state.applying = false;
      const root = app === 'skin' ? $('#routine') : $('#my-plan');
      if (root && state.observer) state.observer.observe(root, { childList:true, subtree:true });
    }
  }

  function schedule() {
    if (state.frame) return;
    state.frame = global.requestAnimationFrame(apply);
  }

  document.addEventListener('pointerdown', (event) => {
    const marker = event.target.closest?.('.bl-routine-calendar-marker[data-routine-coherence-target]');
    if (marker) beginCaption(marker, event);
  }, true);
  document.addEventListener('pointerup', (event) => {
    const marker = event.target.closest?.('.bl-routine-calendar-marker[data-routine-coherence-target]');
    if (marker) endCaption(marker, event);
  }, true);
  document.addEventListener('pointercancel', (event) => {
    const marker = event.target.closest?.('.bl-routine-calendar-marker[data-routine-coherence-target]');
    if (marker) { clearTimeout(state.captionTimer); marker.classList.remove('is-caption-open'); }
  }, true);

  document.addEventListener('click', (event) => {
    const marker = event.target.closest?.('.bl-routine-calendar-marker[data-routine-coherence-target]');
    if (marker) {
      event.preventDefault();
      event.stopPropagation();
      if (state.longPressed) { state.longPressed = false; return; }
      const system = marker.dataset.routineCoherenceSystem;
      if (system === 'skin') openSkinSummary(marker.dataset.routineCoherenceTarget, marker.dataset.routineCoherenceItem || '');
      else openFitnessSummary(marker.dataset.routineCoherenceTarget);
      return;
    }
    if (app === 'fitness' && event.target.closest?.('[data-fitness-routine-view="public"]')) {
      event.preventDefault();
      event.stopPropagation();
      showFitnessPublicPanel();
      return;
    }
    if (app === 'fitness' && event.target.closest?.('#fitnessViewPublicRoutine')) {
      viewFitnessPublicRoutine();
      return;
    }
    if (app === 'fitness' && event.target.closest?.('#createCalisthenicsPlan')) {
      event.preventDefault();
      event.stopPropagation();
      if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
      createAnotherPlan();
    }
  }, true);

  document.addEventListener('keydown', (event) => {
    const marker = event.target.closest?.('.bl-routine-calendar-marker[data-routine-coherence-target]');
    if (marker && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      marker.click();
    }
  }, true);

  document.addEventListener('change', (event) => {
    if (event.target?.id === 'fitnessRoutineVisibility') saveFitnessVisibility(event.target.value);
    if (event.target?.id === 'fitnessPublicRoutineName') {
      const button = $('#fitnessViewPublicRoutine');
      if (button) button.disabled = !event.target.value;
    }
    if (event.target?.id === 'publicRoutineName') {
      const button = $('#findPublicRoutineBtn');
      if (button) button.disabled = !event.target.value;
    }
  }, true);

  function boot() {
    injectStylesheet();
    const root = app === 'skin' ? $('#routine') : $('#my-plan');
    if (!root) return;
    state.observer = new MutationObserver(schedule);
    state.observer.observe(root, { childList:true, subtree:true });
    document.addEventListener('baseline:routine-settings-changed', schedule);
    document.addEventListener('baseline:fitness-plans-updated', schedule);
    global.setTimeout(schedule, 0);
    global.setTimeout(schedule, 250);
    global.setTimeout(schedule, 900);
    global.addEventListener('pagehide', () => state.observer?.disconnect(), { once:true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

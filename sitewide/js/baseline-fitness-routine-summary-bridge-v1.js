/* Baseline Lifestyle — stable, exercise-specific Fitness Routine Summary enhancement. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_SUMMARY_BRIDGE_V1__) return;
  global.__BASELINE_FITNESS_ROUTINE_SUMMARY_BRIDGE_V1__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (app !== 'fitness') return;

  let observer = null;
  let frame = 0;
  let applying = false;
  let settleTimer = 0;
  let newPlanTimer = 0;

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
    }[character]));
  }

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function readJson(key, fallback) {
    try {
      const raw = global.localStorage?.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) {
      return fallback;
    }
  }

  function routineState() {
    try {
      const value = global.BASELINE_fitnessRoutine?.getState?.();
      if (value) return { activities:Array.isArray(value.activities) ? value.activities : [], logs:value.logs || {} };
    } catch (_error) {}
    const value = readJson(`__bl_fitness_routine_v2__::${owner()}`, {});
    return { activities:Array.isArray(value?.activities) ? value.activities : [], logs:value?.logs || {} };
  }

  function plans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }

  function selectedPlanId() {
    try { return Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0); }
    catch (_error) { return 0; }
  }

  function groupState() {
    let settings = {};
    try { settings = global.BASELINE_RoutineSystem?.readSettings?.(owner()) || {}; }
    catch (_error) {}
    const groups = Array.isArray(settings.fitnessRoutineGroups)
      ? settings.fitnessRoutineGroups.filter((group) => group && group.id && group.title).map((group) => ({ id:String(group.id), title:String(group.title) }))
      : [];
    const valid = new Set(groups.map((group) => group.id));
    const assignments = {};
    Object.entries(settings.fitnessRoutineAssignments && typeof settings.fitnessRoutineAssignments === 'object' ? settings.fitnessRoutineAssignments : {}).forEach(([key, value]) => {
      if (valid.has(String(value))) assignments[String(key)] = String(value);
    });
    document.querySelectorAll('[data-v4-entity-group]').forEach((select) => {
      const key = String(select.dataset.v4EntityGroup || '');
      const value = String(select.value || '');
      if (key && valid.has(value)) assignments[key] = value;
      else if (key && !value) delete assignments[key];
    });
    return { groups, assignments };
  }

  function entities() {
    const planEntities = plans().map((plan, index) => ({
      key:`plan:${Number(plan.planId)}`,
      label:String(plan?.planJson?.name || plan?.name || `Calisthenics Plan ${index + 1}`),
      section:'calisthenics'
    }));
    const activityEntities = routineState().activities.map((activity) => ({
      key:`activity:${activity.id}`,
      label:String(activity.name || 'Fitness activity'),
      section:String(activity.section || 'other')
    }));
    return planEntities.concat(activityEntities);
  }

  function entityNumber(key, data = groupState(), allEntities = entities()) {
    const groupId = data.assignments[key];
    if (groupId) {
      const index = data.groups.findIndex((group) => group.id === String(groupId));
      if (index >= 0) return index + 1;
    }
    const ungrouped = allEntities.filter((entity) => !data.assignments[entity.key]);
    const index = ungrouped.findIndex((entity) => entity.key === key);
    return index >= 0 ? data.groups.length + index + 1 : 0;
  }

  function ensureNumber(titleWrap, number, label) {
    if (!titleWrap) return;
    titleWrap.querySelectorAll(':scope > span:not(.bl-v4-number)').forEach((node) => node.remove());
    let node = titleWrap.querySelector(':scope > .bl-v4-number');
    if (!number) {
      node?.remove();
      return;
    }
    if (!node) {
      node = document.createElement('span');
      node.className = 'bl-v4-number';
      titleWrap.insertAdjacentElement('afterbegin', node);
    }
    if (node.textContent !== String(number)) node.textContent = String(number);
    node.setAttribute('aria-label', `${number}. ${label}`);
  }

  function splitPoints(text) {
    const clean = String(text || '').replace(/\s+/g, ' ').trim();
    if (!clean) return [];
    const points = clean.split(/(?<=[.!?])\s+(?=[A-Z0-9])|;\s+/).map((point) => point.trim()).filter(Boolean);
    return points.length ? points : [clean];
  }

  function bulletise(role) {
    role.querySelectorAll('p:not(.routine-summary-notes)').forEach((paragraph) => {
      if (paragraph.closest('.bl-v4-exercise-comprehensive')) return;
      const points = splitPoints(paragraph.textContent);
      if (!points.length) return;
      const list = document.createElement('ul');
      list.className = 'bl-v4-summary-list';
      points.forEach((point) => {
        const item = document.createElement('li');
        item.textContent = point;
        list.append(item);
      });
      paragraph.replaceWith(list);
    });
  }

  function movementProfile(name, family, movement, activitySection) {
    const value = `${name} ${family} ${movement}`.toLocaleLowerCase('en-GB');
    if (value.includes('push-up')) return {
      muscles:['Chest drives the body away from the floor.','Triceps straighten the elbows.','Front shoulders guide the pressing movement.','Serratus, abdominals and glutes keep the shoulder blades and body line stable.'],
      daily:['Pushing open a heavy door.','Rising from the floor using the hands.','Supporting body weight through the arms.'],
      cues:['Keep the ribs and pelvis connected so the trunk moves as one unit.','Let the shoulder blades move naturally rather than forcing them together.','Stop the set when body position or elbow control begins to break down.']
    };
    if (value.includes('squat')) return {
      muscles:['Quadriceps straighten the knees.','Glutes extend the hips and provide upward drive.','Adductors control the thighs and assist hip extension.','Calves and trunk muscles stabilise the ankles, pelvis and torso.'],
      daily:['Standing from a chair or low seat.','Climbing stairs.','Lifting an object from a low position.'],
      cues:['Keep pressure through the whole foot.','Allow the knees to track in line with the toes.','Use the deepest range that preserves balance and trunk control.']
    };
    if (value.includes('lunge')) return {
      muscles:['Quadriceps and glutes lower and raise the body over the working leg.','Gluteus medius steadies the pelvis and knee.','Hamstrings and adductors control the hip.','Calves and foot muscles maintain balance.'],
      daily:['Stepping over obstacles.','Recovering balance after a long step.','Walking uphill, climbing stairs and kneeling.'],
      cues:['Keep the front foot planted and the knee tracking over it.','Lower under control rather than dropping onto the back knee.','Keep the pelvis level as the working leg produces force.']
    };
    if (value.includes('side plank')) return {
      muscles:['Obliques and quadratus lumborum resist sideways collapse.','Gluteus medius keeps the pelvis lifted.','Shoulder stabilisers support the upper body.','Adductors organise the legs and pelvis.'],
      daily:['Carrying a bag on one side without leaning.','Reaching sideways while staying balanced.','Controlling the pelvis during walking and running.'],
      cues:['Stack the ribs over the pelvis.','Keep the supporting shoulder away from the ear.','End the hold when the hips rotate or drop.']
    };
    if (value.includes('plank')) return {
      muscles:['Deep abdominals resist lower-back arching.','Obliques prevent unwanted rotation.','Shoulders and serratus support the upper body.','Glutes and quadriceps hold the pelvis and legs in line.'],
      daily:['Keeping the trunk stable while carrying shopping.','Maintaining posture while pushing, pulling or reaching.','Transferring force between the upper and lower body.'],
      cues:['Brace without holding the breath.','Keep the pelvis between excessive arching and tucking.','Finish when the straight body line can no longer be maintained.']
    };
    if (value.includes('row') || value.includes('pull-up') || value.includes('chin-up') || value.includes('hang')) return {
      muscles:['Latissimus dorsi draws the upper arms towards the body.','Rhomboids and middle trapezius control the shoulder blades.','Biceps and brachialis bend the elbows where the movement requires it.','Rear shoulders, forearms and grip muscles stabilise the pull.'],
      daily:['Pulling a door or object towards you.','Carrying bags with steadier shoulders and grip.','Maintaining upper-back posture during lifting.'],
      cues:['Begin from controlled shoulders rather than a loose shrug.','Keep the ribs organised instead of leaning back to shorten the pull.','Use a grip and range that remain pain-free.']
    };
    if (value.includes('bridge') || value.includes('hinge') || value.includes('nordic')) return {
      muscles:['Glutes extend the hips.','Hamstrings control hip extension and knee flexion demands.','Spinal erectors and deep trunk muscles maintain the torso position.','Adductors and foot muscles stabilise the lower body.'],
      daily:['Standing up and lifting from the hips.','Climbing hills and accelerating during sport.','Protecting the back by sharing load through the hips.'],
      cues:['Create movement from the hips rather than the lower back.','Keep the feet stable and the knees controlled.','Use a range that preserves tension through the intended muscles.']
    };
    if (value.includes('running') || activitySection === 'cardio') return {
      muscles:['Glutes and quadriceps propel and support each step.','Hamstrings and calves control the stride and push-off.','Hip stabilisers and trunk muscles keep the pelvis and torso steady.'],
      daily:['Walking farther with less fatigue.','Climbing stairs and hills.','Sustaining active work and errands for longer.'],
      cues:['Build duration and pace gradually.','Keep the stride controlled rather than reaching excessively forward.','Use breathing and perceived effort to regulate intensity.']
    };
    if (value.includes('yoga')) return {
      muscles:['Deep trunk muscles organise posture and controlled transitions.','Hip and shoulder stabilisers maintain joint position.','Leg and arm muscles create active support through each pose.'],
      daily:['Reaching, bending and turning with control.','Moving between the floor and standing.','Maintaining balance during slow or awkward tasks.'],
      cues:['Use active control rather than forcing passive range.','Keep breathing steady through transitions.','Reduce the range when joint position becomes unstable.']
    };
    return {
      muscles:['Prime movers create the main action.','Joint stabilisers preserve alignment.','The trunk transfers force between the working limbs.'],
      daily:['Performing comparable pushing, pulling, lifting or stabilising tasks.','Moving with greater control during sport and ordinary activity.','Sustaining repeated physical effort.'],
      cues:['Use a controlled range.','Keep the working joints aligned.','Stop when technique changes materially.']
    };
  }

  function lateralityText(value) {
    if (value === 'per-side') return 'Repetitions are shared across left and right sides, so both sides should receive comparable work.';
    if (value === 'separate-left-right') return 'Left and right sides are recorded independently so one side does not hide a difference in capacity.';
    return 'The movement is performed bilaterally, with both sides contributing to the same repetition or hold.';
  }

  function progressionText(exercise) {
    if (!exercise) return '';
    if (String(exercise.progressionType || '').includes('timed')) {
      return 'Progress is measured as a technically sound hold. The useful endpoint is loss of position, not simply enduring a longer time with altered form.';
    }
    if (exercise.progressionType === 'leg-reps') {
      return 'This lower-body repetition pattern uses the leg-exercise progression rule, increasing the planned work only after a successful session.';
    }
    return 'This repetition exercise uses linear progression, increasing planned repetitions after successful sessions while failed work repeats at the same level.';
  }

  function exerciseSignature(exercise, activity) {
    if (exercise) return [exercise.name, exercise.goodFor, exercise.how, exercise.family, exercise.movementCategory, exercise.variationLevel, exercise.laterality, exercise.progressionType].join('|');
    return [activity?.name || '', activity?.notes || '', activity?.section || ''].join('|');
  }

  function comprehensiveHtml(title, exercise, activity) {
    const profile = movementProfile(title, exercise?.family || '', exercise?.movementCategory || '', activity?.section || '');
    const purpose = exercise?.goodFor || activity?.notes || 'This activity contributes to the wider balance, capacity and consistency of the routine.';
    const method = exercise?.how || 'Use a controlled technique appropriate to the activity and record the completed work accurately.';
    const context = exercise
      ? `${exercise.variationLevel || 'Standard'} ${String(exercise.movementCategory || 'movement').toLocaleLowerCase('en-GB')} variation from the ${exercise.family || 'exercise'} family. It is measured in ${exercise.unit || 'completed work'}.`
      : `${String(activity?.section || 'fitness').replace(/-/g, ' ')} activity included in the wider routine.`;
    const progression = exercise ? progressionText(exercise) : 'Use the chosen frequency, duration and result fields to build the activity gradually and consistently.';
    const laterality = exercise ? lateralityText(exercise.laterality) : '';

    return `<div class="bl-v4-exercise-comprehensive" data-v4-exercise-signature="${escapeHtml(exerciseSignature(exercise, activity))}">
      <h4>What this exercise develops</h4>
      <ul class="bl-v4-summary-list"><li>${escapeHtml(purpose)}</li><li>${escapeHtml(context)}</li>${laterality ? `<li>${escapeHtml(laterality)}</li>` : ''}</ul>
      <h4>How to perform it</h4>
      <ul class="bl-v4-summary-list"><li>${escapeHtml(method)}</li>${profile.cues.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>
      <h4>Progression and measurement</h4>
      <ul class="bl-v4-summary-list"><li>${escapeHtml(progression)}</li><li>Record the achieved amount rather than the intended amount when they differ, so the next session is based on what was actually completed.</li></ul>
      <h4>Muscles worked — and how they contribute</h4>
      <ul class="bl-v4-muscle-list">${profile.muscles.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>
      <h4>Everyday activities this supports</h4>
      <ul class="bl-v4-daily-list">${profile.daily.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>
    </div>`;
  }

  function exerciseDefinitions() {
    const debug = global.BASELINE_FITNESS_DEBUG?.EXERCISES;
    if (Array.isArray(debug)) return debug;
    const catalogue = global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES;
    return Array.isArray(catalogue) ? catalogue : [];
  }

  function decorateCard(card, routine, definitions, data, allEntities) {
    const title = card.querySelector('.routine-summary-title strong')?.textContent?.trim() || '';
    if (!title) return;
    const badge = card.querySelector('.badge')?.textContent?.trim() || '';
    const exercise = definitions.find((item) => item.name === title);
    const activity = routine.activities.find((item) => String(item.name || '').trim() === title);
    const key = badge === 'Calisthenics' ? `plan:${selectedPlanId()}` : activity ? `activity:${activity.id}` : '';

    if (key) {
      card.dataset.v4Entity = key;
      ensureNumber(card.querySelector('.routine-summary-title'), entityNumber(key, data, allEntities), title);
    }

    const sections = Array.from(card.querySelectorAll('.bl-routine-summary-section'));
    const role = sections[1] || sections[0];
    if (!role) return;
    bulletise(role);

    const signature = exerciseSignature(exercise, activity);
    const current = role.querySelector('.bl-v4-exercise-comprehensive');
    if (!current || current.dataset.v4ExerciseSignature !== signature) {
      current?.remove();
      role.insertAdjacentHTML('beforeend', comprehensiveHtml(title, exercise, activity));
    }
    role.dataset.v4Comprehensive = 'true';
  }

  function setVisible(node, visible) {
    node.hidden = !visible;
    if (visible) node.style.removeProperty('display');
    else node.style.setProperty('display', 'none', 'important');
  }

  function applySelectedFilter(target, data) {
    const select = document.getElementById('fitnessSummaryGroupFilter');
    if (!select || !target) return;
    const value = String(select.value || 'all');
    target.querySelectorAll('.fitness-summary-group').forEach((section) => {
      let visible = 0;
      section.querySelectorAll('.fitness-exercise-summary-item').forEach((card) => {
        const key = String(card.dataset.v4Entity || '');
        let show = value === 'all';
        if (value.startsWith('group:')) show = String(data.assignments[key] || '') === value.slice(6);
        if (value.startsWith('entity:')) show = key === value.slice(7);
        setVisible(card, show);
        if (show) visible += 1;
      });
      setVisible(section, visible > 0);
    });
  }

  function decorateNow() {
    frame = 0;
    if (applying) return;
    const target = document.getElementById('fitnessExerciseSummary');
    if (!target) return;
    applying = true;
    observer?.disconnect();
    try {
      const routine = routineState();
      const definitions = exerciseDefinitions();
      const data = groupState();
      const allEntities = entities();
      target.querySelectorAll('.fitness-exercise-summary-item').forEach((card) => decorateCard(card, routine, definitions, data, allEntities));
      applySelectedFilter(target, data);
    } finally {
      applying = false;
      if (observer && target.isConnected) observer.observe(target, { childList:true, subtree:true });
    }
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(decorateNow);
  }

  function attachObserver() {
    const target = document.getElementById('fitnessExerciseSummary');
    if (!target || observer) return;
    observer = new MutationObserver(schedule);
    observer.observe(target, { childList:true, subtree:true });
  }

  function refreshAfterRender() {
    attachObserver();
    schedule();
    global.clearTimeout(settleTimer);
    settleTimer = global.setTimeout(() => {
      attachObserver();
      schedule();
    }, 180);
  }

  function clearPlanCaches() {
    try {
      const keys = [];
      for (let index = 0; index < global.localStorage.length; index += 1) {
        const key = global.localStorage.key(index) || '';
        if (key.startsWith('__bl_fitness_plan_cache_v1__::')) keys.push(key);
      }
      keys.forEach((key) => global.localStorage.removeItem(key));
    } catch (_error) {}
  }

  function scheduleAnotherPlan() {
    const currentOwner = owner();
    try {
      global.localStorage?.setItem(`__bl_fitness_creating_plan_v1__::${currentOwner}`, '1');
      global.localStorage?.removeItem(`__bl_fitness_selected_plan_v1__::${currentOwner}`);
      global.sessionStorage?.setItem('__bl_fitness_routine_view_v2__', 'plan');
      global.sessionStorage?.setItem('__bl_fitness_plan_view_v4__', 'calisthenics');
      global.sessionStorage?.setItem('__bl_fitness_new_plan_requested_v1__', String(Date.now()));
    } catch (_error) {}
    clearPlanCaches();
    global.clearTimeout(newPlanTimer);
    newPlanTimer = global.setTimeout(() => {
      const url = new URL('/baseline-fitness/my-routine', global.location.origin);
      url.searchParams.set('new-plan', String(Date.now()));
      global.location.assign(url.toString());
    }, 0);
  }

  function handleCreateAnotherPlan(event) {
    if (!event.target?.closest?.('#createCalisthenicsPlan')) return false;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    scheduleAnotherPlan();
    return true;
  }

  global.addEventListener('pointerdown', handleCreateAnotherPlan, true);
  global.addEventListener('click', (event) => {
    if (handleCreateAnotherPlan(event)) return;
    if (event.target?.closest?.('[data-fitness-routine-view="summary"],#my-plan')) refreshAfterRender();
  }, true);
  global.addEventListener('change', (event) => {
    if (event.target?.id === 'fitnessSummaryGroupFilter') {
      schedule();
      global.setTimeout(schedule, 0);
      return;
    }
    if (event.target?.closest?.('#my-plan')) refreshAfterRender();
  }, true);
  document.addEventListener('baseline:routine-settings-changed', refreshAfterRender);
  document.addEventListener('baseline:fitness-plans-updated', refreshAfterRender);
  document.addEventListener('baseline:fitness-workout-updated', refreshAfterRender);
  global.addEventListener('pageshow', refreshAfterRender);
  refreshAfterRender();
  global.addEventListener('pagehide', () => {
    observer?.disconnect();
    global.clearTimeout(settleTimer);
    global.clearTimeout(newPlanTimer);
    if (frame) global.cancelAnimationFrame(frame);
  }, { once:true });
})(typeof window !== 'undefined' ? window : globalThis);

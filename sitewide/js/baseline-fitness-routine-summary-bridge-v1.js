/* Baseline Lifestyle — keep Fitness Routine Summary enhancements stable after owner renders. */
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
  let timers = [];

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
    const assignments = settings.fitnessRoutineAssignments && typeof settings.fitnessRoutineAssignments === 'object'
      ? settings.fitnessRoutineAssignments
      : {};
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

  function numberNode(number, label) {
    const node = document.createElement('span');
    node.className = 'bl-v4-number';
    node.textContent = String(number);
    node.setAttribute('aria-label', `${number}. ${label}`);
    return node;
  }

  function splitPoints(text) {
    const clean = String(text || '').replace(/\s+/g, ' ').trim();
    if (!clean) return [];
    const points = clean.split(/(?<=[.!?])\s+(?=[A-Z0-9])|;\s+/).map((point) => point.trim()).filter(Boolean);
    return points.length ? points : [clean];
  }

  function bulletise(role) {
    role.querySelectorAll('p:not(.routine-summary-notes)').forEach((paragraph) => {
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

  function profile(name, family, movement, activitySection) {
    const value = `${name} ${family} ${movement}`.toLocaleLowerCase('en-GB');
    if (value.includes('push-up')) return {
      muscles:['Chest drives the body away from the floor.','Triceps straighten the elbows.','Front shoulders guide the pressing movement.','Serratus, abdominals and glutes keep the shoulder blades and body line stable.'],
      daily:['Pushing open a heavy door.','Rising from the floor using the hands.','Supporting body weight through the arms.']
    };
    if (value.includes('squat')) return {
      muscles:['Quadriceps straighten the knees.','Glutes extend the hips and provide upward drive.','Adductors control the thighs and assist hip extension.','Calves and trunk muscles stabilise the ankles, pelvis and torso.'],
      daily:['Standing from a chair or low seat.','Climbing stairs.','Lifting an object from a low position.']
    };
    if (value.includes('lunge')) return {
      muscles:['Quadriceps and glutes lower and raise the body over the working leg.','Gluteus medius steadies the pelvis and knee.','Hamstrings and adductors control the hip.','Calves and foot muscles maintain balance.'],
      daily:['Stepping over obstacles.','Recovering balance after a long step.','Walking uphill, climbing stairs and kneeling.']
    };
    if (value.includes('side plank')) return {
      muscles:['Obliques and quadratus lumborum resist sideways collapse.','Gluteus medius keeps the pelvis lifted.','Shoulder stabilisers support the upper body.','Adductors organise the legs and pelvis.'],
      daily:['Carrying a bag on one side without leaning.','Reaching sideways while staying balanced.','Controlling the pelvis during walking and running.']
    };
    if (value.includes('plank')) return {
      muscles:['Deep abdominals resist lower-back arching.','Obliques prevent unwanted rotation.','Shoulders and serratus support the upper body.','Glutes and quadriceps hold the pelvis and legs in line.'],
      daily:['Keeping the trunk stable while carrying shopping.','Maintaining posture while pushing, pulling or reaching.','Transferring force between the upper and lower body.']
    };
    if (value.includes('row') || value.includes('pull-up')) return {
      muscles:['Latissimus dorsi draws the upper arms towards the body.','Rhomboids and middle trapezius control the shoulder blades.','Biceps and brachialis bend the elbows.','Rear shoulders, forearms and grip muscles stabilise the pull.'],
      daily:['Pulling a door or object towards you.','Carrying bags with steadier shoulders and grip.','Maintaining upper-back posture during lifting.']
    };
    if (value.includes('running') || activitySection === 'cardio') return {
      muscles:['Glutes and quadriceps propel and support each step.','Hamstrings and calves control the stride and push-off.','Hip stabilisers and trunk muscles keep the pelvis and torso steady.'],
      daily:['Walking farther with less fatigue.','Climbing stairs and hills.','Sustaining active work and errands for longer.']
    };
    if (value.includes('yoga')) return {
      muscles:['Deep trunk muscles organise posture and controlled transitions.','Hip and shoulder stabilisers maintain joint position.','Leg and arm muscles create active support through each pose.'],
      daily:['Reaching, bending and turning with control.','Moving between the floor and standing.','Maintaining balance during slow or awkward tasks.']
    };
    return {
      muscles:['Prime movers create the main action.','Joint stabilisers preserve alignment.','The trunk transfers force between the working limbs.'],
      daily:['Performing comparable pushing, pulling, lifting or stabilising tasks.','Moving with greater control during sport and ordinary activity.','Sustaining repeated physical effort.']
    };
  }

  function decorateCard(card, routine, exerciseDefinitions, data, allEntities) {
    const title = card.querySelector('.routine-summary-title strong')?.textContent?.trim() || '';
    if (!title) return;
    const badge = card.querySelector('.badge')?.textContent?.trim() || '';
    const exercise = exerciseDefinitions.find((item) => item.name === title);
    const activity = routine.activities.find((item) => String(item.name || '').trim() === title);
    const key = badge === 'Calisthenics' ? `plan:${selectedPlanId()}` : activity ? `activity:${activity.id}` : '';

    if (key) {
      card.dataset.v4Entity = key;
      const titleWrap = card.querySelector('.routine-summary-title');
      if (titleWrap) {
        titleWrap.querySelectorAll(':scope > span').forEach((node) => node.remove());
        const number = entityNumber(key, data, allEntities);
        if (number) titleWrap.insertAdjacentElement('afterbegin', numberNode(number, title));
      }
    }

    const sections = Array.from(card.querySelectorAll('.bl-routine-summary-section'));
    const role = sections[1] || sections[0];
    if (!role) return;
    bulletise(role);

    const details = profile(title, exercise?.family || '', exercise?.movementCategory || '', activity?.section || '');
    if (!role.querySelector('.bl-v4-muscle-list')) {
      role.insertAdjacentHTML('beforeend', `<h4 data-v4-summary-heading="muscles">Muscles worked — and how they contribute</h4><ul class="bl-v4-muscle-list">${details.muscles.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>`);
    }
    if (!role.querySelector('.bl-v4-daily-list')) {
      role.insertAdjacentHTML('beforeend', `<h4 data-v4-summary-heading="daily">Everyday activities this supports</h4><ul class="bl-v4-daily-list">${details.daily.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>`);
    }
    role.dataset.v4Comprehensive = 'true';
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
      const definitions = Array.isArray(global.BASELINE_FITNESS_DEBUG?.EXERCISES) ? global.BASELINE_FITNESS_DEBUG.EXERCISES : [];
      const data = groupState();
      const allEntities = entities();
      target.querySelectorAll('.fitness-exercise-summary-item').forEach((card) => decorateCard(card, routine, definitions, data, allEntities));
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
    timers.forEach((timer) => global.clearTimeout(timer));
    timers = [0,60,160,360,800,1600].map((delay) => global.setTimeout(() => {
      attachObserver();
      schedule();
    }, delay));
  }

  global.addEventListener('click', (event) => {
    if (event.target?.closest?.('#my-plan')) refreshAfterRender();
  }, true);
  global.addEventListener('change', (event) => {
    if (event.target?.closest?.('#my-plan')) refreshAfterRender();
  }, true);
  document.addEventListener('baseline:routine-settings-changed', refreshAfterRender);
  document.addEventListener('baseline:fitness-plans-updated', refreshAfterRender);
  document.addEventListener('baseline:fitness-workout-updated', refreshAfterRender);
  global.addEventListener('pageshow', refreshAfterRender);
  refreshAfterRender();
  global.addEventListener('pagehide', () => {
    observer?.disconnect();
    timers.forEach((timer) => global.clearTimeout(timer));
    if (frame) global.cancelAnimationFrame(frame);
  }, { once:true });
})(typeof window !== 'undefined' ? window : globalThis);

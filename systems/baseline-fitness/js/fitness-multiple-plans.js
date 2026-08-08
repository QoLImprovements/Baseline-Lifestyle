/* Baseline Fitness — multiple-plan controller and catalogue expansion.

   OWNERSHIP CONTRACT
   ------------------
   This module owns saved Calisthenics plan selection/creation, plan naming and
   the extended catalogue data. It does NOT own exercise-picker rendering,
   progression fields or generator layout; fitness-generator-progression-v1.js
   is the single owner of those controls.

   The authentication runtime is an earlier deferred dependency, so this module
   attaches once rather than polling the page for several seconds.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_MULTIPLE_PLANS_V4__) return;
  global.__BASELINE_FITNESS_MULTIPLE_PLANS_V4__ = true;

  const API_ROOT = '/systems/baseline-fitness/api';
  const SELECTED_PREFIX = '__bl_fitness_selected_plan_v1__::';
  const CREATE_PREFIX = '__bl_fitness_creating_plan_v1__::';
  const PLAN_CACHE_PREFIX = '__bl_fitness_plan_cache_v1__::';
  const VIEW_KEY = '__bl_fitness_routine_view_v2__';
  const PLAN_VIEW_KEY = '__bl_fitness_plan_view_v4__';
  const nativeFetch = typeof global.fetch === 'function' ? global.fetch.bind(global) : null;
  let plans = [];
  let owner = 'guest';

  const $ = (selector, root = document) => root.querySelector(selector);

  function normaliseOwner(value) {
    return String(value || '').trim().toLocaleLowerCase('en-GB') || 'guest';
  }
  function authOwner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      return snapshot?.authed ? normaliseOwner(snapshot.name || snapshot.user?.name) : 'guest';
    } catch (_error) { return owner; }
  }
  function selectedKey() { return `${SELECTED_PREFIX}${normaliseOwner(owner)}`; }
  function createKey() { return `${CREATE_PREFIX}${normaliseOwner(owner)}`; }
  function selectedPlanId() {
    try { return Math.max(0, Number(global.localStorage?.getItem(selectedKey())) || 0); }
    catch (_error) { return 0; }
  }
  function setSelectedPlanId(value) {
    const id = Math.max(0, Number(value) || 0);
    try {
      if (id) global.localStorage?.setItem(selectedKey(), String(id));
      else global.localStorage?.removeItem(selectedKey());
    } catch (_error) {}
  }
  function isCreatingPlan() {
    try { return global.localStorage?.getItem(createKey()) === '1'; }
    catch (_error) { return false; }
  }
  function setCreatingPlan(value) {
    try {
      if (value) global.localStorage?.setItem(createKey(), '1');
      else global.localStorage?.removeItem(createKey());
    } catch (_error) {}
  }
  function clearPlanCaches() {
    try {
      const keys = [];
      for (let index = 0; index < global.localStorage.length; index += 1) {
        const key = global.localStorage.key(index) || '';
        if (key.startsWith(PLAN_CACHE_PREFIX)) keys.push(key);
      }
      keys.forEach((key) => global.localStorage.removeItem(key));
    } catch (_error) {}
  }

  function expandCatalogue() {
    const base = global.BASELINE_FITNESS_EXERCISE_CATALOGUE;
    if (!base || base.__comprehensiveExpansionV3) return;
    const newFamilies = [
      ['shoulder-pressing','Shoulder Pressing & Handstands'],
      ['dips','Dips'],
      ['calves-lower-leg','Calves & Lower Leg'],
      ['hamstrings','Hamstrings'],
      ['adductors','Adductors'],
      ['locomotion','Crawling & Locomotion'],
      ['conditioning','Bodyweight Conditioning'],
      ['mobility-strength','Mobility Strength'],
      ['dynamic-core','Dynamic Core & Climbers'],
      ['scapular-control','Scapular Control'],
      ['glute-accessory','Glute & Hip Accessory']
    ];
    const existingFamilyKeys = new Set(base.FAMILIES.map((family) => family.key));
    const families = base.FAMILIES.concat(newFamilies.filter(([key]) => !existingFamilyKeys.has(key)).map(([key,label]) => Object.freeze({ key,label })));
    const familyMap = new Map(families.map((family) => [family.key,family]));
    const TYPES = base.TYPES;

    function add(name, unit, type, baseline, familyKey, section, movement, laterality = 'bilateral', level = 'Standard', goodFor = '', how = '') {
      const family = familyMap.get(familyKey);
      return Object.freeze({
        name, unit, progressionType:type, base:baseline, familyKey,
        family:family?.label || familyKey,
        section, movementCategory:movement, laterality, variationLevel:level,
        category:section === 'Upper Body' ? 'upper' : section === 'Lower Body' ? 'lower' : section === 'Posterior Chain' ? 'posterior' : section === 'Full Body' ? 'full' : 'core',
        goodFor:goodFor || `${movement} strength and control.`,
        how:how || 'Use a controlled range and keep the working joints aligned.'
      });
    }

    const additions = [
      add('Side Lunges','reps',TYPES.LEG,8,'lunges','Lower Body','Lunge','per-side','Standard','Frontal-plane leg strength, inner-thigh mobility and hip control.','Step directly to the side, sit into the stepping hip, keep the other leg longer and return under control.'),
      add('Cossack Squats','reps',TYPES.LEG,6,'squats','Lower Body','Squat','per-side','Advanced'),
      add('Split Squats','reps',TYPES.LEG,10,'squats','Lower Body','Squat','per-side'),
      add('Rear-Foot-Elevated Split Squats','reps',TYPES.LEG,8,'squats','Lower Body','Squat','per-side','Advanced'),
      add('Shrimp Squat Progression','reps',TYPES.LEG,4,'squats','Lower Body','Squat','per-side','Advanced'),
      add('Sissy Squat Progression','reps',TYPES.LEG,6,'squats','Lower Body','Knee-Dominant Squat','bilateral','Advanced'),
      add('Wall Sit','seconds',TYPES.TIMED,30,'squats','Lower Body','Isometric Squat','bilateral'),
      add('Single-Leg Wall Sit','seconds',TYPES.TIMED,15,'squats','Lower Body','Isometric Squat','separate-left-right','Advanced'),
      add('Step-Ups','reps',TYPES.LEG,10,'squats','Lower Body','Step','per-side'),
      add('Lateral Step-Ups','reps',TYPES.LEG,8,'squats','Lower Body','Step','per-side','Advanced'),
      add('Step-Downs','reps',TYPES.LEG,8,'squats','Lower Body','Step','per-side','Advanced'),
      add('Skater Squats','reps',TYPES.LEG,5,'squats','Lower Body','Squat','per-side','Advanced'),
      add('Pike Push-Ups','reps',TYPES.STANDARD,6,'shoulder-pressing','Upper Body','Vertical Push','bilateral'),
      add('Elevated Pike Push-Ups','reps',TYPES.STANDARD,5,'shoulder-pressing','Upper Body','Vertical Push','bilateral','Advanced'),
      add('Wall Handstand Hold','seconds',TYPES.TIMED,20,'shoulder-pressing','Upper Body','Vertical Push','bilateral','Advanced'),
      add('Chest-to-Wall Handstand Hold','seconds',TYPES.TIMED,15,'shoulder-pressing','Upper Body','Vertical Push','bilateral','Advanced'),
      add('Wall Handstand Shoulder Taps','reps',TYPES.STANDARD,4,'shoulder-pressing','Upper Body','Vertical Push','per-side','Specialist'),
      add('Handstand Push-Up Negative','reps',TYPES.STANDARD,3,'shoulder-pressing','Upper Body','Vertical Push','bilateral','Specialist'),
      add('Wall Handstand Push-Ups','reps',TYPES.STANDARD,2,'shoulder-pressing','Upper Body','Vertical Push','bilateral','Specialist'),
      add('Scapular Push-Ups','reps',TYPES.STANDARD,12,'push-ups','Upper Body','Scapular Push','bilateral'),
      add('Pseudo Planche Push-Ups','reps',TYPES.STANDARD,4,'push-ups','Upper Body','Push','bilateral','Specialist'),
      add('Hindu Push-Ups','reps',TYPES.STANDARD,6,'push-ups','Upper Body','Push','bilateral','Advanced'),
      add('Dive-Bomber Push-Ups','reps',TYPES.STANDARD,5,'push-ups','Upper Body','Push','bilateral','Advanced'),
      add('Explosive Push-Ups','reps',TYPES.STANDARD,5,'push-ups','Upper Body','Power Push','bilateral','Advanced'),
      add('Clap Push-Ups','reps',TYPES.STANDARD,3,'push-ups','Upper Body','Power Push','bilateral','Specialist'),
      add('Bench Dips','reps',TYPES.STANDARD,8,'dips','Upper Body','Dip','bilateral','Regression'),
      add('Assisted Parallel-Bar Dips','reps',TYPES.STANDARD,5,'dips','Upper Body','Dip','bilateral','Regression'),
      add('Parallel-Bar Dips','reps',TYPES.STANDARD,5,'dips','Upper Body','Dip','bilateral','Advanced'),
      add('Straight-Bar Dips','reps',TYPES.STANDARD,3,'dips','Upper Body','Dip','bilateral','Specialist'),
      add('Australian Pull-Ups','reps',TYPES.STANDARD,8,'pulling-rows','Upper Body','Horizontal Pull','bilateral'),
      add('Feet-Elevated Inverted Rows','reps',TYPES.STANDARD,6,'pulling-rows','Upper Body','Horizontal Pull','bilateral','Advanced'),
      add('Archer Inverted Rows','reps',TYPES.STANDARD,4,'pulling-rows','Upper Body','Horizontal Pull','per-side','Advanced'),
      add('Towel Door Rows','reps',TYPES.STANDARD,8,'pulling-rows','Upper Body','Horizontal Pull','bilateral'),
      add('Dead Hang','seconds',TYPES.TIMED,20,'pulling-pull-ups','Upper Body','Vertical Pull','bilateral'),
      add('Flexed-Arm Hang','seconds',TYPES.TIMED,10,'pulling-pull-ups','Upper Body','Vertical Pull','bilateral','Advanced'),
      add('Neutral-Grip Pull-Ups','reps',TYPES.STANDARD,3,'pulling-pull-ups','Upper Body','Vertical Pull','bilateral','Advanced'),
      add('Wide-Grip Pull-Ups','reps',TYPES.STANDARD,2,'pulling-pull-ups','Upper Body','Vertical Pull','bilateral','Advanced'),
      add('Commando Pull-Ups','reps',TYPES.STANDARD,3,'pulling-pull-ups','Upper Body','Vertical Pull','per-side','Advanced'),
      add('Archer Pull-Ups','reps',TYPES.STANDARD,2,'pulling-pull-ups','Upper Body','Vertical Pull','per-side','Specialist'),
      add('Glute Bridge Hold','seconds',TYPES.TIMED,30,'hip-glute-glute-bridges','Posterior Chain','Hip Extension','bilateral'),
      add('Feet-Elevated Glute Bridge','reps',TYPES.LEG,12,'hip-glute-glute-bridges','Posterior Chain','Hip Extension','bilateral','Advanced'),
      add('Hip Thrust','reps',TYPES.LEG,12,'hip-glute-glute-bridges','Posterior Chain','Hip Extension','bilateral'),
      add('Single-Leg Hip Thrust','reps',TYPES.LEG,8,'hip-glute-glute-bridges','Posterior Chain','Hip Extension','per-side','Advanced'),
      add('Frog Pumps','reps',TYPES.LEG,20,'hip-glute-glute-bridges','Posterior Chain','Hip Extension','bilateral'),
      add('Hamstring Walkouts','reps',TYPES.LEG,8,'hamstrings','Posterior Chain','Knee Flexion','bilateral'),
      add('Sliding Hamstring Curls','reps',TYPES.LEG,8,'hamstrings','Posterior Chain','Knee Flexion','bilateral','Advanced'),
      add('Single-Leg Sliding Hamstring Curls','reps',TYPES.LEG,5,'hamstrings','Posterior Chain','Knee Flexion','per-side','Specialist'),
      add('Assisted Nordic Curls','reps',TYPES.LEG,4,'hamstrings','Posterior Chain','Knee Flexion','bilateral','Advanced'),
      add('Nordic Curl Negatives','reps',TYPES.LEG,3,'hamstrings','Posterior Chain','Knee Flexion','bilateral','Advanced'),
      add('Bodyweight Romanian Deadlift','reps',TYPES.LEG,12,'hip-glute-hip-hinges','Posterior Chain','Hip Hinge','bilateral'),
      add('Single-Leg Romanian Deadlift','reps',TYPES.LEG,8,'hip-glute-hip-hinges','Posterior Chain','Hip Hinge','per-side','Advanced'),
      add('Reverse Hyperextension','reps',TYPES.LEG,12,'hip-glute-hip-hinges','Posterior Chain','Hip Extension','bilateral'),
      add('Standing Calf Raises','reps',TYPES.LEG,20,'calves-lower-leg','Lower Body','Plantar Flexion','bilateral'),
      add('Single-Leg Calf Raises','reps',TYPES.LEG,12,'calves-lower-leg','Lower Body','Plantar Flexion','per-side','Advanced'),
      add('Bent-Knee Calf Raises','reps',TYPES.LEG,15,'calves-lower-leg','Lower Body','Plantar Flexion','bilateral'),
      add('Tibialis Raises','reps',TYPES.LEG,20,'calves-lower-leg','Lower Body','Dorsiflexion','bilateral'),
      add('Heel Walks','seconds',TYPES.TIMED,30,'calves-lower-leg','Lower Body','Dorsiflexion','bilateral'),
      add('Copenhagen Plank - Short Lever','seconds',TYPES.TIMED,15,'adductors','Core','Adduction','separate-left-right','Advanced'),
      add('Copenhagen Plank - Long Lever','seconds',TYPES.TIMED,8,'adductors','Core','Adduction','separate-left-right','Specialist'),
      add('Side-Lying Hip Adduction','reps',TYPES.LEG,12,'adductors','Lower Body','Adduction','per-side'),
      add('Adductor Slide-Outs','reps',TYPES.LEG,8,'adductors','Lower Body','Adduction','per-side','Advanced'),
      add('Bear Crawl','seconds',TYPES.TIMED,30,'locomotion','Full Body','Crawl','bilateral'),
      add('Backward Bear Crawl','seconds',TYPES.TIMED,20,'locomotion','Full Body','Crawl','bilateral','Advanced'),
      add('Lateral Bear Crawl','seconds',TYPES.TIMED,20,'locomotion','Full Body','Crawl','bilateral','Advanced'),
      add('Crab Walk','seconds',TYPES.TIMED,30,'locomotion','Full Body','Crawl','bilateral'),
      add('Duck Walk','seconds',TYPES.TIMED,20,'locomotion','Lower Body','Locomotion','bilateral','Advanced'),
      add('Inchworms','reps',TYPES.STANDARD,8,'locomotion','Full Body','Locomotion','bilateral'),
      add('Burpees','reps',TYPES.STANDARD,8,'conditioning','Full Body','Conditioning','bilateral'),
      add('Squat Thrusts','reps',TYPES.STANDARD,12,'conditioning','Full Body','Conditioning','bilateral'),
      add('High Knees','seconds',TYPES.TIMED,30,'conditioning','Full Body','Conditioning','bilateral'),
      add('Jumping Jacks','reps',TYPES.STANDARD,30,'conditioning','Full Body','Conditioning','bilateral'),
      add('Skater Jumps','reps',TYPES.LEG,10,'conditioning','Full Body','Lateral Power','per-side','Advanced'),
      add('Broad Jumps','reps',TYPES.LEG,5,'conditioning','Lower Body','Horizontal Power','bilateral','Advanced'),
      add('Tuck Jumps','reps',TYPES.LEG,6,'conditioning','Lower Body','Vertical Power','bilateral','Advanced'),
      add('Plank Jacks','reps',TYPES.STANDARD,20,'conditioning','Full Body','Conditioning','bilateral'),
      add('Dead Bug Hold','seconds',TYPES.TIMED,20,'other-core','Core','Anterior Core','bilateral'),
      add('Reverse Crunches','reps',TYPES.STANDARD,12,'other-core','Core','Anterior Core','bilateral'),
      add('Bicycle Crunches','reps',TYPES.STANDARD,12,'other-core','Core','Rotation','per-side'),
      add('V-Ups','reps',TYPES.STANDARD,8,'other-core','Core','Anterior Core','bilateral','Advanced'),
      add('Flutter Kicks','seconds',TYPES.TIMED,30,'other-core','Core','Anterior Core','bilateral'),
      add('Hanging Knee Raises','reps',TYPES.STANDARD,8,'other-core','Core','Anterior Core','bilateral','Advanced'),
      add('Hanging Leg Raises','reps',TYPES.STANDARD,5,'other-core','Core','Anterior Core','bilateral','Specialist'),
      add('L-Sit Tuck Hold','seconds',TYPES.TIMED,10,'other-core','Core','Compression','bilateral','Advanced'),
      add('L-Sit Hold','seconds',TYPES.TIMED,8,'other-core','Core','Compression','bilateral','Specialist'),
      add('Shoulder CARs','reps',TYPES.STANDARD,5,'mobility-strength','Upper Body','Mobility','per-side'),
      add('Hip CARs','reps',TYPES.LEG,5,'mobility-strength','Lower Body','Mobility','per-side'),
      add('Deep Squat Hold','seconds',TYPES.TIMED,30,'mobility-strength','Lower Body','Mobility','bilateral'),
      add('90/90 Hip Switches','reps',TYPES.LEG,8,'mobility-strength','Lower Body','Mobility','per-side'),
      add('Jefferson Curl - Bodyweight','reps',TYPES.STANDARD,8,'mobility-strength','Posterior Chain','Mobility','bilateral','Advanced'),
      add('Cross-Body Mountain Climbers','reps',TYPES.STANDARD,20,'dynamic-core','Full Body','Cross-Body Core','per-side','Standard','Dynamic trunk rotation, hip flexion and shoulder-supported conditioning.','From a high plank, drive one knee toward the opposite elbow without letting the hips twist excessively.'),
      add('Mountain Climbers','reps',TYPES.STANDARD,20,'dynamic-core','Full Body','Core Conditioning','per-side'),
      add('Slow Mountain Climbers','reps',TYPES.STANDARD,12,'dynamic-core','Core','Anterior Core','per-side'),
      add('Spider Mountain Climbers','reps',TYPES.STANDARD,10,'dynamic-core','Core','Lateral Core','per-side','Advanced'),
      add('Plank Knee-to-Elbow','reps',TYPES.STANDARD,10,'dynamic-core','Core','Cross-Body Core','per-side'),
      add('Bear Plank Shoulder Taps','reps',TYPES.STANDARD,10,'dynamic-core','Full Body','Anti-Rotation','per-side','Advanced'),
      add('Plank Shoulder Taps','reps',TYPES.STANDARD,12,'dynamic-core','Core','Anti-Rotation','per-side'),
      add('Bird Dogs','reps',TYPES.STANDARD,10,'dynamic-core','Core','Anti-Rotation','per-side'),
      add('Dead Bugs','reps',TYPES.STANDARD,10,'dynamic-core','Core','Anterior Core','per-side'),
      add('Hollow Body Hold','seconds',TYPES.TIMED,20,'dynamic-core','Core','Anterior Core','bilateral'),
      add('Hollow Rocks','reps',TYPES.STANDARD,10,'dynamic-core','Core','Anterior Core','bilateral','Advanced'),
      add('Superman Hold','seconds',TYPES.TIMED,20,'dynamic-core','Posterior Chain','Posterior Core','bilateral'),
      add('Superman Raises','reps',TYPES.STANDARD,12,'dynamic-core','Posterior Chain','Posterior Core','bilateral'),
      add('Lateral Lunge with Rotational Reach','reps',TYPES.LEG,8,'lunges','Lower Body','Lateral Lunge + Rotation','per-side','Standard','Lateral leg strength with controlled trunk rotation and reach.','Step into a lateral lunge, rotate and reach toward the working side, then return to standing under control.'),
      add('Reverse Lunge to Knee Drive','reps',TYPES.LEG,8,'lunges','Lower Body','Lunge + Balance','per-side'),
      add('Curtsy Lunges','reps',TYPES.LEG,8,'lunges','Lower Body','Diagonal Lunge','per-side'),
      add('Diagonal Lunges','reps',TYPES.LEG,8,'lunges','Lower Body','Diagonal Lunge','per-side'),
      add('Lateral Lunge to Balance','reps',TYPES.LEG,8,'lunges','Lower Body','Lateral Lunge + Balance','per-side','Advanced'),
      add('Lunge with Torso Rotation','reps',TYPES.LEG,8,'lunges','Lower Body','Lunge + Rotation','per-side'),
      add('Tempo Squats','reps',TYPES.LEG,10,'squats','Lower Body','Squat','bilateral','Advanced'),
      add('Squat to Calf Raise','reps',TYPES.LEG,12,'squats','Lower Body','Squat + Plantar Flexion','bilateral'),
      add('Single-Leg Sit-to-Stand','reps',TYPES.LEG,5,'squats','Lower Body','Single-Leg Squat','per-side','Advanced'),
      add('Single-Leg Box Squats','reps',TYPES.LEG,5,'squats','Lower Body','Single-Leg Squat','per-side','Advanced'),
      add('Glute Bridge March','reps',TYPES.LEG,10,'glute-accessory','Posterior Chain','Hip Extension + Anti-Rotation','per-side'),
      add('Donkey Kicks','reps',TYPES.LEG,12,'glute-accessory','Posterior Chain','Hip Extension','per-side'),
      add('Fire Hydrants','reps',TYPES.LEG,12,'glute-accessory','Lower Body','Hip Abduction','per-side'),
      add('Side-Lying Leg Raises','reps',TYPES.LEG,15,'glute-accessory','Lower Body','Hip Abduction','per-side'),
      add('Standing Hip Abduction','reps',TYPES.LEG,15,'glute-accessory','Lower Body','Hip Abduction','per-side'),
      add('Scapular Pull-Ups','reps',TYPES.STANDARD,8,'scapular-control','Upper Body','Scapular Pull','bilateral'),
      add('Scapular Wall Slides','reps',TYPES.STANDARD,10,'scapular-control','Upper Body','Scapular Control','bilateral'),
      add('Prone Y Raises','reps',TYPES.STANDARD,10,'scapular-control','Upper Body','Scapular Control','bilateral'),
      add('Prone T Raises','reps',TYPES.STANDARD,10,'scapular-control','Upper Body','Scapular Control','bilateral'),
      add('Prone W Raises','reps',TYPES.STANDARD,10,'scapular-control','Upper Body','Scapular Control','bilateral'),
      add('Assisted Chin-Ups','reps',TYPES.STANDARD,5,'pulling-pull-ups','Upper Body','Vertical Pull','bilateral','Regression'),
      add('Chin-Ups','reps',TYPES.STANDARD,4,'pulling-pull-ups','Upper Body','Vertical Pull','bilateral','Advanced'),
      add('Negative Pull-Ups','reps',TYPES.STANDARD,4,'pulling-pull-ups','Upper Body','Vertical Pull','bilateral','Advanced'),
      add('Bodyweight Triceps Extensions','reps',TYPES.STANDARD,8,'push-ups','Upper Body','Elbow Extension','bilateral','Advanced'),
      add('Pike Shoulder Taps','reps',TYPES.STANDARD,8,'shoulder-pressing','Upper Body','Vertical Push + Stability','per-side','Advanced'),
      add('Wall Walks','reps',TYPES.STANDARD,3,'shoulder-pressing','Full Body','Vertical Push + Locomotion','bilateral','Specialist'),
      add('Calf Pogo Hops','reps',TYPES.LEG,20,'calves-lower-leg','Lower Body','Elastic Plantar Flexion','bilateral','Advanced'),
      add('Single-Leg Pogo Hops','reps',TYPES.LEG,12,'calves-lower-leg','Lower Body','Elastic Plantar Flexion','per-side','Specialist')
    ];

    const names = new Set(base.EXERCISES.map((exercise) => exercise.name.toLocaleLowerCase('en-GB')));
    const exercises = base.EXERCISES.concat(additions.filter((exercise) => {
      const key = exercise.name.toLocaleLowerCase('en-GB');
      if (names.has(key)) return false;
      names.add(key);
      return true;
    }));
    global.BASELINE_FITNESS_EXERCISE_CATALOGUE = Object.freeze(Object.assign({}, base, {
      __comprehensiveExpansion:true,
      __comprehensiveExpansionV3:true,
      FAMILIES:Object.freeze(families),
      FAMILY_BY_KEY:familyMap,
      FAMILY_ORDER:Object.freeze(families.map((family) => family.label)),
      EXERCISES:Object.freeze(exercises)
    }));
  }

  expandCatalogue();

  function planName(plan, index = 0) {
    const name = String(plan?.planJson?.name || plan?.name || '').trim();
    return name || `Calisthenics Plan ${index + 1}`;
  }
  function selectedPlan() {
    const id = selectedPlanId();
    return plans.find((plan) => Number(plan.planId) === id) || plans[0] || null;
  }
  function responseJson(payload, status = 200) {
    return new Response(JSON.stringify(payload), { status, headers:{ 'Content-Type':'application/json','Cache-Control':'no-store' } });
  }
  function urlFor(input) {
    try { return new URL(input instanceof Request ? input.url : String(input), global.location.href); }
    catch (_error) { return null; }
  }
  function withUrl(input, url) {
    return input instanceof Request ? new Request(url.toString(), input) : url.toString();
  }
  function enhancePlanJson(raw) {
    const plan = raw && typeof raw === 'object' ? Object.assign({}, raw) : {};
    plan.name = String($('#calisthenicsPlanName')?.value || plan.name || 'Calisthenics Plan').trim().slice(0,100) || 'Calisthenics Plan';
    return plan;
  }
  async function enhancedWrite(input, init, url) {
    const nextInit = Object.assign({}, init || {});
    if (typeof nextInit.body === 'string') {
      try {
        const body = JSON.parse(nextInit.body);
        if (body && typeof body === 'object') {
          body.planJson = enhancePlanJson(body.planJson);
          nextInit.body = JSON.stringify(body);
        }
      } catch (_error) {}
    }
    const response = await nativeFetch(input, nextInit);
    if (response.ok) {
      const data = await response.clone().json().catch(() => null);
      if (url.pathname.endsWith('/save_plan.php') && Number(data?.planId) > 0) setSelectedPlanId(data.planId);
      setCreatingPlan(false);
      clearPlanCaches();
      global.setTimeout(refreshPlans,50);
    }
    return response;
  }

  if (nativeFetch) {
    global.fetch = async function(input, init = {}) {
      const url = urlFor(input);
      if (!url) return nativeFetch(input,init);
      if (url.pathname.endsWith('/get_plan.php') && !url.searchParams.has('name')) {
        if (isCreatingPlan()) return responseJson({ ok:true,hasPlan:false,has_plan:false,creatingPlan:true });
        const selected = selectedPlanId();
        if (selected) url.searchParams.set('planId',String(selected));
        let response = await nativeFetch(withUrl(input,url),init);
        if (selected && response.status === 404) {
          setSelectedPlanId(0);
          clearPlanCaches();
          url.searchParams.delete('planId');
          response = await nativeFetch(withUrl(input,url),init);
        }
        return response;
      }
      if (url.pathname.endsWith('/save_plan.php') || url.pathname.endsWith('/plan_update.php')) return enhancedWrite(input,init,url);
      if (url.pathname.endsWith('/delete_plan.php')) {
        const response = await nativeFetch(input,init);
        if (response.ok) {
          setSelectedPlanId(0);
          setCreatingPlan(false);
          clearPlanCaches();
          global.setTimeout(refreshPlans,50);
        }
        return response;
      }
      return nativeFetch(input,init);
    };
  }

  function ensurePlanName() {
    const list = $('#exerciseList');
    if (!list) return;
    let input = $('#calisthenicsPlanName');
    if (!input) {
      const label = document.createElement('label');
      label.className = 'field-stack calisthenics-plan-name-field';
      label.innerHTML = '<span>Plan name</span><input id="calisthenicsPlanName" class="field-input-fixed" type="text" maxlength="100" placeholder="For example: Lower Body, Upper Body or Badminton Preparation">';
      list.insertAdjacentElement('beforebegin',label);
      input = label.querySelector('input');
    }
    if (document.activeElement !== input) {
      const plan = selectedPlan();
      const id = String(plan?.planId || 'new');
      if (input.dataset.planId !== id) {
        input.value = isCreatingPlan() ? '' : planName(plan,Math.max(0,plans.indexOf(plan)));
        input.dataset.planId = id;
      }
    }
  }

  function ensureManager() {
    const panel = $('[data-fitness-routine-panel="calisthenics"]') || $('#my-plan');
    if (!panel) return;
    let manager = $('#calisthenicsPlanManager',panel);
    if (!manager) {
      manager = document.createElement('section');
      manager.id = 'calisthenicsPlanManager';
      manager.className = 'card fitness-calisthenics-plan-manager';
      manager.innerHTML = '<div class="section-head-actions"><div><h2>Calisthenics Plans</h2></div><button type="button" class="action secondary" id="createCalisthenicsPlan">Create Another Plan</button></div><label class="field-stack"><span>Open plan</span><select id="calisthenicsPlanSelect"></select></label>';
      panel.prepend(manager);
    }
    const select = manager.querySelector('#calisthenicsPlanSelect');
    const data = plans.map((plan,index) => ({
      value:String(Number(plan.planId)),
      label:`${planName(plan,index)} — ${Number(plan.progress?.done || 0)}/${Number(plan.progress?.total || plan.planJson?.sessions || 0)} sessions`
    }));
    const signature = JSON.stringify(data);
    if (select.dataset.signature !== signature) {
      select.dataset.signature = signature;
      select.innerHTML = `<option value="">${data.length ? 'Choose a plan…' : 'No saved plans yet'}</option>${data.map((entry) => `<option value="${entry.value}">${entry.label}</option>`).join('')}`;
    }
    select.disabled = !data.length;
    select.value = data.some((entry) => entry.value === String(selectedPlanId())) ? String(selectedPlanId()) : '';
  }

  function decorateSavedPlan() {
    const plan = selectedPlan();
    const wrap = $('#myPlanSavedWrap');
    const target = $('#myPlanOut');
    if (!plan || !wrap || !target) return;
    const shell = wrap.querySelector(':scope>.card') || wrap.querySelector('.card');
    if (!shell) return;
    const generated = target.querySelector(':scope>.card');
    const generatedHead = generated?.querySelector('.my-plan-saved-head');
    const generatedActions = generatedHead?.querySelector('.saved-plan-actions');
    const generatedMeta = generatedHead?.querySelector('.session-plan-meta');

    let head = shell.querySelector(':scope>.calisthenics-saved-plan-head');
    if (!head) {
      head = document.createElement('div');
      head.className = 'calisthenics-saved-plan-head';
      shell.prepend(head);
    }
    head.querySelector(':scope>.saved-plan-actions')?.remove();
    let title = head.querySelector('h2');
    if (!title) { title = document.createElement('h2');head.prepend(title); }
    title.textContent = planName(plan,plans.indexOf(plan));
    if (generatedActions) head.appendChild(generatedActions);

    let summary = shell.querySelector(':scope>.calisthenics-saved-plan-summary');
    if (!summary) {
      summary = document.createElement('div');
      summary.className = 'calisthenics-saved-plan-summary session-plan-meta';
      head.insertAdjacentElement('afterend',summary);
    }
    if (generatedMeta) summary.replaceChildren(...Array.from(generatedMeta.children));

    const originalTitle = Array.from(shell.children).find((node) => node.tagName === 'H2' && node !== title);
    originalTitle?.remove();
    const intro = Array.from(shell.children).find((node) => node.matches?.('p.note'));
    intro?.remove();
    generated?.remove();
  }

  function patchInterface() {
    ensureManager();
    ensurePlanName();
    decorateSavedPlan();
    const groupSelect = $('#exGroup');
    if (groupSelect) {
      const families = global.BASELINE_FITNESS_EXERCISE_CATALOGUE.FAMILIES;
      const selected = groupSelect.value;
      const signature = families.map((family) => family.label).join('|');
      if (groupSelect.dataset.catalogueSignature !== signature) {
        groupSelect.dataset.catalogueSignature = signature;
        groupSelect.innerHTML = '<option value="all">All groups</option>' + families.map((family) => `<option value="${family.label}">${family.label}</option>`).join('');
        groupSelect.value = Array.from(groupSelect.options).some((option) => option.value === selected) ? selected : 'all';
      }
    }
  }

  function createPlan() {
    setCreatingPlan(true);
    setSelectedPlanId(0);
    clearPlanCaches();
    try {
      global.sessionStorage?.setItem(VIEW_KEY,'plan');
      global.sessionStorage?.setItem(PLAN_VIEW_KEY,'calisthenics');
    } catch (_error) {}
    const url = new URL('/baseline-fitness/my-routine',global.location.origin);
    url.searchParams.set('new-plan',String(Date.now()));
    global.location.assign(url.toString());
  }
  function openPlan(planId) {
    const id = Math.max(0,Number(planId)||0);
    if (!id) return;
    setCreatingPlan(false);
    setSelectedPlanId(id);
    clearPlanCaches();
    try {
      global.sessionStorage?.setItem(VIEW_KEY,'plan');
      global.sessionStorage?.setItem(PLAN_VIEW_KEY,'calisthenics');
    } catch (_error) {}
    const url = new URL(global.location.href);
    url.pathname = '/baseline-fitness/my-routine';
    url.searchParams.set('routine-view','plan');
    url.searchParams.set('routine-plan','calisthenics');
    url.searchParams.delete('new-plan');
    global.location.assign(url.toString());
  }

  function completedDate(session) {
    const raw = Number(session?.completed_at);
    if (!raw) return '';
    const date = new Date(raw * 1000);
    const pad = (number) => String(number).padStart(2,'0');
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`;
  }
  function todayIso() {
    return global.BASELINE_RoutineSystem?.todayIso?.() || new Date().toISOString().slice(0,10);
  }
  function getPlansForDate(date) {
    const target = String(date || todayIso());
    if (target > todayIso()) return [];
    const output = [];
    plans.forEach((plan,index) => {
      const sessions = Array.isArray(plan.sessions) ? plan.sessions : [];
      sessions.filter((session) => session.status === 'done' && completedDate(session) === target).forEach((session) => {
        output.push({ planId:Number(plan.planId),planName:planName(plan,index),sessionIndex:Number(session.session_index),detail:'Completed on this date',status:'done' });
      });
      if (target === todayIso()) {
        const next = sessions.find((session) => session.status !== 'done');
        if (next && String(next.scheduled_date || '') <= target) {
          output.push({ planId:Number(plan.planId),planName:planName(plan,index),sessionIndex:Number(next.session_index),detail:String(next.scheduled_date || '') < target ? 'Overdue and available today' : 'Due today',status:'due' });
        }
      }
    });
    return output;
  }
  function getPlans() { return JSON.parse(JSON.stringify(plans)); }

  async function refreshPlans() {
    owner = authOwner();
    if (owner === 'guest' || !nativeFetch) {
      plans = [];
      patchInterface();
      document.dispatchEvent(new CustomEvent('baseline:fitness-plans-updated',{ detail:{ plans:[] } }));
      return [];
    }
    try {
      const response = await nativeFetch(`${API_ROOT}/list_plans.php`,{ credentials:'same-origin',headers:{ Accept:'application/json' } });
      const data = await response.json();
      plans = response.ok && Array.isArray(data?.plans) ? data.plans : [];
    } catch (_error) { plans = []; }
    if (!isCreatingPlan()) {
      const selected = selectedPlanId();
      if (selected && !plans.some((plan) => Number(plan.planId) === selected)) setSelectedPlanId(0);
      if (!selectedPlanId() && plans[0]) setSelectedPlanId(plans[0].planId);
    }
    patchInterface();
    document.dispatchEvent(new CustomEvent('baseline:fitness-plans-updated',{ detail:{ plans:getPlans() } }));
    return getPlans();
  }

  function bind() {
    document.addEventListener('click',(event) => {
      if (event.target.closest('#createCalisthenicsPlan')) createPlan();
    });
    document.addEventListener('change',(event) => {
      const select = event.target.closest('#calisthenicsPlanSelect');
      if (select?.value) openPlan(select.value);
    },true);
    document.addEventListener('baseline:fitness-workout-updated',decorateSavedPlan);
  }

  function attachAuth() {
    const auth = global.BASELINE_auth;
    if (!auth || typeof auth.get !== 'function') {
      owner = 'guest';
      refreshPlans();
      return;
    }
    owner = authOwner();
    refreshPlans();
    if (typeof auth.onChange === 'function') auth.onChange(() => { owner = authOwner();refreshPlans(); });
  }

  function boot() {
    patchInterface();
    bind();
    attachAuth();
  }

  global.BASELINE_fitnessPlans = Object.freeze({
    refresh:refreshPlans,
    getPlans,
    getSelectedPlanId:selectedPlanId,
    getPlansForDate,
    openPlan,
    createPlan
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

/* Baseline Fitness — multiple-plan controller and catalogue expansion.

   OWNERSHIP CONTRACT
   ------------------
   This module owns saved Calisthenics plan selection/creation, plan naming,
   one plan-save interception and the extended catalogue data. Generator and
   live-policy modules expose pure augmentPlanJson functions; this controller
   calls them here so there is only one save wrapper.

   Exercise picker rendering, progression fields and generator layout belong to
   fitness-generator-progression-v1.js. Authentication is attached once.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_MULTIPLE_PLANS_V5__) return;
  global.__BASELINE_FITNESS_MULTIPLE_PLANS_V5__ = true;

  const API_ROOT = '/systems/baseline-fitness/api';
  const nativeFetch = typeof global.fetch === 'function' ? global.fetch.bind(global) : null;
  let plans = [];
  let owner = 'guest';
  let selectedPlanMemory=0;
  function routeRequestsNewPlan() {
    try { return new URL(global.location.href).searchParams.get('new-plan')==='1'; }
    catch (_error) { return false; }
  }
  let creatingPlan=routeRequestsNewPlan();

  const $ = (selector, root = document) => root.querySelector(selector);

  function normaliseOwner(value) { return String(value || '').trim().toLocaleLowerCase('en-GB') || 'guest'; }
  function authOwner() {
    try { const snapshot=global.BASELINE_auth?.get?.();return snapshot?.authed?normaliseOwner(snapshot.name || snapshot.user?.name):'guest'; }
    catch (_error) { return owner; }
  }
  function savedDataAuthority(){return global.BASELINE_FITNESS_SAVED_DATA || null;}
  function selectedPlanId() {
    const serverId=Math.max(0,Number(savedDataAuthority()?.getSelectedPlanId?.())||0);
    if(serverId) selectedPlanMemory=serverId;
    return Math.max(0,Number(selectedPlanMemory)||0);
  }
  async function setSelectedPlanId(value) {
    const id=Math.max(0,Number(value)||0);
    selectedPlanMemory=id;
    if(owner!=='guest' && typeof savedDataAuthority()?.saveSelectedPlanId==='function'){
      const result=await savedDataAuthority().saveSelectedPlanId(id);
      return Boolean(result?.ok);
    }
    return owner==='guest';
  }
  function isCreatingPlan() { return creatingPlan; }
  function setCreatingPlan(value) { creatingPlan=Boolean(value); }

  function expandCatalogue() {
    const base = global.BASELINE_FITNESS_EXERCISE_CATALOGUE;
    if (!base || base.__comprehensiveExpansionV3) return;
    const newFamilies = [
      ['shoulder-pressing','Shoulder Pressing & Handstands'],['dips','Dips'],['calves-lower-leg','Calves & Lower Leg'],['hamstrings','Hamstrings'],['adductors','Adductors'],['locomotion','Crawling & Locomotion'],['conditioning','Bodyweight Conditioning'],['mobility-strength','Mobility Strength'],['dynamic-core','Dynamic Core & Climbers'],['scapular-control','Scapular Control'],['glute-accessory','Glute & Hip Accessory']
    ];
    const existingFamilyKeys=new Set(base.FAMILIES.map((family) => family.key));
    const families=base.FAMILIES.concat(newFamilies.filter(([key]) => !existingFamilyKeys.has(key)).map(([key,label]) => Object.freeze({ key,label })));
    const familyMap=new Map(families.map((family) => [family.key,family]));
    const TYPES=base.TYPES;

    function add(name,unit,type,baseline,familyKey,section,movement,laterality='bilateral',level='Standard',goodFor='',how='') {
      const family=familyMap.get(familyKey);
      return Object.freeze({ name,unit,progressionType:type,base:baseline,familyKey,family:family?.label || familyKey,section,movementCategory:movement,laterality,variationLevel:level,category:section==='Upper Body'?'upper':section==='Lower Body'?'lower':section==='Posterior Chain'?'posterior':section==='Full Body'?'full':'core',goodFor:goodFor || `${movement} strength and control.`,how:how || 'Use a controlled range and keep the working joints aligned.' });
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

    const names=new Set(base.EXERCISES.map((exercise) => exercise.name.toLocaleLowerCase('en-GB')));
    const exercises=base.EXERCISES.concat(additions.filter((exercise) => { const key=exercise.name.toLocaleLowerCase('en-GB');if (names.has(key)) return false;names.add(key);return true; }));
    global.BASELINE_FITNESS_EXERCISE_CATALOGUE=Object.freeze(Object.assign({},base,{ __comprehensiveExpansion:true,__comprehensiveExpansionV3:true,FAMILIES:Object.freeze(families),FAMILY_BY_KEY:familyMap,FAMILY_ORDER:Object.freeze(families.map((family) => family.label)),EXERCISES:Object.freeze(exercises) }));
  }

  expandCatalogue();

  function planName(plan,index=0) { const name=String(plan?.planJson?.name || plan?.name || '').trim();return name || `Calisthenics Plan ${index+1}`; }
  function selectedPlan() { const id=selectedPlanId();return plans.find((plan) => Number(plan.planId)===id) || plans[0] || null; }
  function responseJson(payload,status=200) { return new Response(JSON.stringify(payload),{ status,headers:{ 'Content-Type':'application/json','Cache-Control':'no-store' } }); }
  function urlFor(input) { try { return new URL(input instanceof Request?input.url:String(input),global.location.href); }catch (_error) { return null; } }
  function withUrl(input,url) { return input instanceof Request?new Request(url.toString(),input):url.toString(); }
  function planNameForWrite(raw,planId=0) {
    const id=Math.max(0,Number(planId)||0);
    const input=$('#calisthenicsPlanName');
    const target=id?plans.find((plan)=>Number(plan?.planId)===id):null;
    const stored=String(target?.planJson?.name || target?.name || raw?.name || '').trim();
    const boundId=String(input?.dataset?.planId || '');
    const original=String(input?.dataset?.originalName || '').trim();
    const inputIsTrusted=id>0
      ? boundId===String(id) && original===stored
      : boundId==='new';
    const edited=inputIsTrusted?String(input?.value || '').trim():'';
    return (edited || stored || 'Calisthenics Plan').slice(0,100);
  }
  function enhancePlanJson(raw,planId=0) {
    let plan=raw && typeof raw==='object'?Object.assign({},raw):{};
    const progression=global.BASELINE_FITNESS_EXERCISE_PROGRESSION?.augmentPlanJson;
    const livePolicy=global.BASELINE_FITNESS_LIVE_POLICY?.augmentPlanJson;
    if (typeof progression==='function') plan=progression(plan) || plan;
    if (typeof livePolicy==='function') plan=livePolicy(plan) || plan;
    plan.name=planNameForWrite(plan,planId);
    return plan;
  }
  async function enhancedWrite(input,init,url) {
    const nextInit=Object.assign({},init || {});
    if (typeof nextInit.body==='string') {
      try {
        const body=JSON.parse(nextInit.body);
        if (body && typeof body==='object') {
          const targetPlanId=url.pathname.endsWith('/plan_update.php')?Math.max(0,Number(body.planId)||0):0;
          body.planJson=enhancePlanJson(body.planJson,targetPlanId);
          nextInit.body=JSON.stringify(body);
        }
      }catch (_error) {}
    }
    const response=await nativeFetch(input,nextInit);
    if (response.ok) {
      const data=await response.clone().json().catch(() => null);
      if(url.pathname.endsWith('/save_plan.php') && Number(data?.planId)>0) await setSelectedPlanId(data.planId);
      setCreatingPlan(false);
      await refreshPlans();
    }
    return response;
  }

  if (nativeFetch) {
    global.fetch=async function(input,init={}) {
      const url=urlFor(input);if (!url) return nativeFetch(input,init);
      if (url.pathname.endsWith('/get_plan.php') && !url.searchParams.has('name')) {
        if (isCreatingPlan()) return responseJson({ok:true,hasPlan:false,has_plan:false,creatingPlan:true});
        const selected=selectedPlanId();
        if(selected)url.searchParams.set('planId',String(selected));
        let response=await nativeFetch(withUrl(input,url),init);
        if(selected&&response.status===404){
          await setSelectedPlanId(0);
          url.searchParams.delete('planId');
          response=await nativeFetch(withUrl(input,url),init);
        }
        return response;
      }
      if (url.pathname.endsWith('/save_plan.php') || url.pathname.endsWith('/plan_update.php')) return enhancedWrite(input,init,url);
      if(url.pathname.endsWith('/delete_plan.php')){
        const response=await nativeFetch(input,init);
        if(response.ok){await setSelectedPlanId(0);setCreatingPlan(false);await refreshPlans();}
        return response;
      }
      return nativeFetch(input,init);
    };
  }

  function ensurePlanName() {
    const list=$('#exerciseList');if (!list) return;let input=$('#calisthenicsPlanName');
    if (!input) { const label=document.createElement('label');label.className='field-stack calisthenics-plan-name-field';label.innerHTML='<span>Plan name</span><input id="calisthenicsPlanName" class="field-input-fixed" type="text" maxlength="100" placeholder="For example: Lower Body, Upper Body or Badminton Preparation">';list.insertAdjacentElement('beforebegin',label);input=label.querySelector('input'); }
    if (document.activeElement!==input) {
      const plan=selectedPlan();
      const id=String(plan?.planId || 'new');
      const stored=isCreatingPlan()?'':planName(plan,Math.max(0,plans.indexOf(plan)));
      if (input.dataset.planId!==id || input.dataset.originalName!==stored) {
        input.value=stored;
        input.dataset.planId=id;
        input.dataset.originalName=stored;
      }
    }
  }

  function ensureManager() {
    const panel=$('[data-fitness-routine-panel="calisthenics"]') || $('#my-plan');if (!panel) return;let manager=$('#calisthenicsPlanManager',panel);
    if (!manager) { manager=document.createElement('section');manager.id='calisthenicsPlanManager';manager.className='card fitness-calisthenics-plan-manager';manager.innerHTML='<div class="section-head-actions"><div><h2>Calisthenics Plans</h2></div><button type="button" class="action secondary" id="createCalisthenicsPlan">Create Another Plan</button></div><label class="field-stack"><span>Open plan</span><select id="calisthenicsPlanSelect"></select></label>';panel.prepend(manager); }
    const select=manager.querySelector('#calisthenicsPlanSelect');const data=plans.map((plan,index) => ({ value:String(Number(plan.planId)),label:`${planName(plan,index)} — ${Number(plan.progress?.done || 0)}/${Number(plan.progress?.total || plan.planJson?.sessions || 0)} sessions` }));const signature=JSON.stringify(data);
    if (select.dataset.signature!==signature) { select.dataset.signature=signature;select.innerHTML=`<option value="">${data.length?'Choose a plan…':'No saved plans yet'}</option>${data.map((entry) => `<option value="${entry.value}">${entry.label}</option>`).join('')}`; }
    select.disabled=!data.length;select.value=data.some((entry) => entry.value===String(selectedPlanId()))?String(selectedPlanId()):'';
  }

  function prettyDate(value) {
    const text=String(value || '');if (!text) return 'Not specified';const date=new Date(`${text.slice(0,10)}T12:00:00`);return Number.isNaN(date.getTime())?text:date.toLocaleDateString('en-GB',{ weekday:'short',month:'short',day:'2-digit',year:'numeric' });
  }
  function frequencyText(plan) {
    const value=plan?.planJson || {};
    if (value.scheduleMode==='specific-days') { const days=Array.isArray(value.days)?value.days.filter(Boolean):[];return days.length?days.join(', '):'Specific weekdays'; }
    const min=Math.max(1,Math.min(6,Number(value.frequencyMin || String(value.frequency || '1x').replace(/\D/g,'')) || 1));const max=Math.max(0,Math.min(7,Number(value.frequencyRangeMax || 0)));return max>min?`${min}–${max} days each week`:`${min} day${min===1?'':'s'} each week`;
  }
  function displayExerciseName(value) {
    const name=String(value || '').replace(/\s+\(L\/R\)$/i,'').trim();const definition=(global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || []).find((item) => String(item.name || '').localeCompare(name,'en-GB',{ sensitivity:'base' })===0);return definition?.unit==='seconds' && definition?.laterality==='separate-left-right'?`${name} (L/R)`:name;
  }
  function decorateExerciseNames(root=document) {
    root.querySelectorAll?.('.plan-exercise-row>b').forEach((node) => { const display=displayExerciseName(node.textContent);if (display) node.textContent=display; });
  }
  function decorateSavedPlan() {
    const plan=selectedPlan();const wrap=$('#myPlanSavedWrap');const target=$('#myPlanOut');if (!plan || !wrap || !target) return;const shell=wrap.querySelector(':scope>.card') || wrap.querySelector('.card');if (!shell) return;
    const generated=target.querySelector(':scope>.card');const generatedHead=generated?.querySelector('.my-plan-saved-head');const generatedActions=generatedHead?.querySelector('.saved-plan-actions');
    let head=shell.querySelector(':scope>.calisthenics-saved-plan-head');if (!head) { head=document.createElement('div');head.className='calisthenics-saved-plan-head';shell.prepend(head); }
    const existingActions=head.querySelector(':scope>.saved-plan-actions');let title=head.querySelector('h2');if (!title) { title=document.createElement('h2');head.prepend(title); }title.textContent=planName(plan,plans.indexOf(plan));
    if (generatedActions && generatedActions!==existingActions) { existingActions?.remove();head.appendChild(generatedActions); }
    let summary=shell.querySelector(':scope>.calisthenics-saved-plan-summary');if (!summary) { summary=document.createElement('div');summary.className='calisthenics-saved-plan-summary session-plan-meta';head.insertAdjacentElement('afterend',summary); }
    const total=Number(plan.progress?.total || plan.planJson?.sessions || (plan.sessions || []).length || 0);const done=Number(plan.progress?.done || (plan.sessions || []).filter((session) => session.status==='done').length || 0);
    const startBadge=plan.planJson?.scheduleMode==='specific-days'?`<span class="badge">Schedule begins: ${prettyDate(plan.planJson?.startDate || plan.planJson?.start_date)}</span>`:'';
    summary.innerHTML=`${startBadge}<span class="badge">Frequency: ${frequencyText(plan)}</span><span class="badge">Sessions: ${total}</span><span class="badge">Progress: ${done}/${total}</span>`;
    Array.from(shell.children).find((node) => node.tagName==='H2' && node!==title)?.remove();Array.from(shell.children).find((node) => node.matches?.('p.note'))?.remove();generated?.remove();decorateExerciseNames(shell);
  }

  function patchInterface() {
    ensureManager();ensurePlanName();decorateSavedPlan();decorateExerciseNames(document);
    const groupSelect=$('#exGroup');if (groupSelect) { const families=global.BASELINE_FITNESS_EXERCISE_CATALOGUE.FAMILIES;const selected=groupSelect.value;const signature=families.map((family) => family.label).join('|');if (groupSelect.dataset.catalogueSignature!==signature) { groupSelect.dataset.catalogueSignature=signature;groupSelect.innerHTML='<option value="all">All groups</option>'+families.map((family) => `<option value="${family.label}">${family.label}</option>`).join('');groupSelect.value=Array.from(groupSelect.options).some((option) => option.value===selected)?selected:'all'; } }
  }

  function createPlan() {
    setCreatingPlan(true);
    document.documentElement.setAttribute('data-initial-fitness-tab','my-plan');
    document.documentElement.setAttribute('data-initial-routine-view','plan');
    document.documentElement.setAttribute('data-initial-routine-plan','calisthenics');
    const url=new URL('/baseline-fitness/my-routine/plan',global.location.origin);
    url.searchParams.set('new-plan','1');
    global.location.assign(url.toString());
  }
  async function openPlan(planId) {
    const id=Math.max(0,Number(planId)||0);if(!id)return;
    setCreatingPlan(false);
    const saved=await setSelectedPlanId(id);
    if(owner!=='guest'&&!saved)return;
    document.documentElement.setAttribute('data-initial-fitness-tab','my-plan');
    document.documentElement.setAttribute('data-initial-routine-view','plan');
    document.documentElement.setAttribute('data-initial-routine-plan','calisthenics');
    try{global.BASELINE_fitnessRoutineStructure?.activateTopView?.('plan',false);}catch(_error){}
    global.location.assign(new URL('/baseline-fitness/my-routine/plan',global.location.origin).toString());
  }

  function completedDate(session) {
    const raw=session?.completed_at ?? session?.completedAt ?? '';if (!raw) return '';
    if (typeof raw==='number' || /^\d+$/.test(String(raw))) { const number=Number(raw),date=new Date(number>9999999999?number:number*1000);return Number.isNaN(date.getTime())?'':date.toLocaleDateString('sv-SE'); }
    const text=String(raw);if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0,10);const parsed=new Date(text);return Number.isNaN(parsed.getTime())?'':parsed.toLocaleDateString('sv-SE');
  }
  function todayIso() { return global.BASELINE_RoutineSystem?.todayIso?.() || new Date().toISOString().slice(0,10); }
  function localDate(value) { const match=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));return match?new Date(Number(match[1]),Number(match[2])-1,Number(match[3])):new Date(); }
  function weekBounds(value) { const date=localDate(value),startIndex=global.BASELINE_RoutineSystem?.startDayIndex?.() ?? 1,offset=((date.getDay()-startIndex)+7)%7,start=new Date(date);start.setDate(start.getDate()-offset);const end=new Date(start);end.setDate(end.getDate()+6);const iso=(item)=>item.toLocaleDateString('sv-SE');return { start:iso(start),end:iso(end) }; }
  function weeklyGoal(plan,date,index=0) {
    const value=plan?.planJson || {},minimum=Math.max(1,Math.min(7,Number(value.frequencyMin || String(value.frequency || '1x').replace(/\D/g,'')) || 1));
    const rawMaximum=Math.max(0,Math.min(7,Number(value.frequencyRangeMax || 0))),maximum=rawMaximum>=minimum?rawMaximum:minimum,bounds=weekBounds(date);
    const count=(Array.isArray(plan?.sessions)?plan.sessions:[]).filter((session)=>String(session?.status || '')==='done' && completedDate(session)>=bounds.start && completedDate(session)<=bounds.end).length;
    return { planId:Number(plan?.planId),planName:planName(plan,index),minimum,maximum,count,goalMet:count>=minimum,extra:Math.max(0,count-minimum),remaining:Math.max(0,minimum-count),available:count<maximum };
  }
  function weeklyGoalDetail(goal) {
    if (!goal.goalMet) return `Weekly goal: ${goal.count}/${goal.minimum} · ${goal.remaining} remaining`;
    if (goal.count>=goal.maximum) return `Weekly goal met · ${goal.extra} extra · range complete (${goal.count}/${goal.maximum})`;
    return `Weekly goal met · ${goal.extra} extra · up to ${goal.maximum-goal.count} more this week`;
  }
  function getWeeklyGoalsForDate(date) { const target=String(date || todayIso());return plans.map((plan,index)=>weeklyGoal(plan,target,index)); }
  function getPlansForDate(date) {
    const target=String(date || todayIso());if (target>todayIso()) return [];const output=[];
    plans.forEach((plan,index) => {
      const sessions=Array.isArray(plan.sessions)?plan.sessions:[],goal=weeklyGoal(plan,target,index);
      sessions.filter((session) => session.status==='done' && completedDate(session)===target).forEach((session) => { output.push({ planId:Number(plan.planId),planName:planName(plan,index),sessionIndex:Number(session.session_index),detail:`Completed on this date · ${weeklyGoalDetail(goal)}`,status:'done',weeklyGoal:goal }); });
      if (target===todayIso()) { const next=sessions.find((session) => session.status!=='done'),flexible=plan.planJson?.scheduleMode!=='specific-days';if (next && (flexible?goal.available:String(next.scheduled_date || '')<=target)) output.push({ planId:Number(plan.planId),planName:planName(plan,index),sessionIndex:Number(next.session_index),detail:flexible?weeklyGoalDetail(goal):(String(next.scheduled_date || '')<target?'Overdue and available today':'Due today'),status:'due',weeklyGoal:goal }); }
    });
    return output;
  }
  function getPlans() { return JSON.parse(JSON.stringify(plans)); }

  async function refreshPlans() {
    owner=authOwner();if (owner==='guest' || !nativeFetch) { plans=[];patchInterface();document.dispatchEvent(new CustomEvent('baseline:fitness-plans-updated',{ detail:{ plans:[] } }));return []; }
    try { const response=await nativeFetch(`${API_ROOT}/list_plans.php`,{ credentials:'same-origin',headers:{ Accept:'application/json' } });const data=await response.json();plans=response.ok && Array.isArray(data?.plans)?data.plans:[]; }catch (_error) { plans=[]; }
    if(!isCreatingPlan()){
      const selected=selectedPlanId();
      if(selected&&!plans.some((plan)=>Number(plan.planId)===selected))await setSelectedPlanId(0);
      if(!selectedPlanId()&&plans[0])await setSelectedPlanId(plans[0].planId);
    }
    patchInterface();document.dispatchEvent(new CustomEvent('baseline:fitness-plans-updated',{ detail:{ plans:getPlans() } }));return getPlans();
  }

  function bind() {
    document.addEventListener('click',(event) => { if (event.target.closest('#createCalisthenicsPlan')) createPlan(); });
    document.addEventListener('change',(event) => { const select=event.target.closest('#calisthenicsPlanSelect');if (select?.value) openPlan(select.value); },true);
    document.addEventListener('baseline:fitness-workout-updated',decorateSavedPlan);
  }
  function attachAuth() {
    const auth=global.BASELINE_auth;if (!auth || typeof auth.get!=='function') { owner='guest';refreshPlans();return; }owner=authOwner();refreshPlans();if (typeof auth.onChange==='function') auth.onChange(() => { owner=authOwner();refreshPlans(); });
  }
  function boot() {
    patchInterface();bind();attachAuth();
    document.addEventListener('baseline:fitness-saved-data-updated',()=>{selectedPlanMemory=Math.max(0,Number(savedDataAuthority()?.getSelectedPlanId?.())||selectedPlanMemory);refreshPlans();});
  }

  global.BASELINE_fitnessPlans=Object.freeze({ refresh:refreshPlans,getPlans,getSelectedPlanId:selectedPlanId,getPlansForDate,getWeeklyGoalsForDate,openPlan,createPlan });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);

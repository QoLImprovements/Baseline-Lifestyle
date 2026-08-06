/* Baseline Fitness — additional maintained calisthenics catalogue entries. */
(function (global) {
  'use strict';
  const base = global.BASELINE_FITNESS_EXERCISE_CATALOGUE;
  if (!base || base.__baselineCatalogueExtraV1) return;

  const TYPES = base.TYPES;
  const extraFamilies = [
    ['dynamic-core','Dynamic Core & Climbers'],
    ['scapular-control','Scapular Control'],
    ['glute-accessory','Glute & Hip Accessory']
  ];
  const familyKeys = new Set((base.FAMILIES || []).map((family) => family.key));
  const families = (base.FAMILIES || []).concat(
    extraFamilies.filter(([key]) => !familyKeys.has(key)).map(([key,label]) => Object.freeze({ key,label }))
  );
  const familyMap = new Map(families.map((family) => [family.key,family]));

  function add(name, unit, progressionType, baseValue, familyKey, section, movementCategory, laterality = 'bilateral', variationLevel = 'Standard', goodFor = '', how = '') {
    const family = familyMap.get(familyKey);
    return Object.freeze({
      name,
      unit,
      progressionType,
      base:baseValue,
      familyKey,
      family:family?.label || familyKey,
      section,
      movementCategory,
      laterality,
      variationLevel,
      category:section === 'Upper Body' ? 'upper' : section === 'Lower Body' ? 'lower' : section === 'Posterior Chain' ? 'posterior' : section === 'Full Body' ? 'full' : 'core',
      goodFor:goodFor || `${movementCategory} strength and control.`,
      how:how || 'Use a controlled range and keep the working joints aligned.'
    });
  }

  const extras = [
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

  const names = new Set((base.EXERCISES || []).map((exercise) => String(exercise.name).toLocaleLowerCase('en-GB')));
  const exercises = (base.EXERCISES || []).concat(extras.filter((exercise) => {
    const key = exercise.name.toLocaleLowerCase('en-GB');
    if (names.has(key)) return false;
    names.add(key);
    return true;
  }));

  global.BASELINE_FITNESS_EXERCISE_CATALOGUE = Object.freeze(Object.assign({}, base, {
    __baselineCatalogueExtraV1:true,
    FAMILIES:Object.freeze(families),
    FAMILY_BY_KEY:familyMap,
    FAMILY_ORDER:Object.freeze(families.map((family) => family.label)),
    EXERCISES:Object.freeze(exercises)
  }));
})(typeof window !== 'undefined' ? window : globalThis);

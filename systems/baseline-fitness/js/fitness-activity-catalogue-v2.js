/* Baseline Fitness — expanded activity catalogue and activity-specific tracking fields. */
(function (global) {
  'use strict';

  const base = global.BASELINE_FITNESS_ACTIVITY_CATALOGUE;
  if (!base) return;

  const additions = [
    ['other','Yoga','yoga-various','Yoga (Various)','minutes'],
    ['other','Yoga','iyengar-yoga','Iyengar Yoga','minutes'],
    ['other','Yoga','kundalini-yoga','Kundalini Yoga','minutes'],
    ['other','Yoga','aerial-yoga','Aerial Yoga','minutes'],
    ['other','Yoga','acro-yoga','AcroYoga','minutes'],
    ['other','Yoga','yoga-nidra','Yoga Nidra','minutes'],
    ['other','Yoga','rocket-yoga','Rocket Yoga','minutes'],
    ['other','Yoga','sivananda-yoga','Sivananda Yoga','minutes'],
    ['other','Yoga','jivamukti-yoga','Jivamukti Yoga','minutes'],
    ['other','Yoga','prenatal-yoga','Prenatal Yoga','minutes'],
    ['other','Yoga','postnatal-yoga','Postnatal Yoga','minutes'],
    ['other','Mindful Movement','clinical-pilates','Clinical Pilates','minutes'],
    ['other','Mindful Movement','tower-pilates','Tower Pilates','minutes'],
    ['other','Martial Arts','savate','Savate','minutes'],
    ['other','Martial Arts','sambo','Sambo','minutes'],
    ['other','Martial Arts','jeet-kune-do','Jeet Kune Do','minutes'],
    ['other','Martial Arts','kendo','Kendo','minutes'],
    ['other','Martial Arts','kung-fu','Kung Fu','minutes'],
    ['other','Climbing','via-ferrata','Via Ferrata','minutes'],
    ['other','Climbing','rope-climbing','Rope Climbing','minutes'],
    ['other','Strength & Weight Training','circuit-training','Circuit Training','minutes'],
    ['other','Strength & Weight Training','suspension-training','Suspension Training','minutes'],
    ['other','Strength & Weight Training','sandbag-training','Sandbag Training','minutes'],
    ['other','Strength & Weight Training','weighted-calisthenics','Weighted Calisthenics','minutes'],
    ['other','Movement Skills','aerial-silks','Aerial Silks','minutes'],
    ['other','Movement Skills','aerial-hoop','Aerial Hoop','minutes'],
    ['other','Movement Skills','handstand-practice','Handstand Practice','minutes'],
    ['cardio','Walking','stair-walking','Stair Walking','minutes'],
    ['cardio','Running','stair-running','Stair Running','minutes'],
    ['cardio','Mixed Cardio','dance-aerobics','Dance Aerobics','minutes'],
    ['cardio','Mixed Cardio','mini-trampoline-cardio','Mini-Trampoline Cardio','minutes'],
    ['sports','Racket & Paddle Sports','beach-tennis','Beach Tennis','minutes'],
    ['sports','Racket & Paddle Sports','soft-tennis','Soft Tennis','minutes'],
    ['sports','Team Ball Sports','korfball','Korfball','minutes'],
    ['sports','Team Ball Sports','flag-football','Flag Football','minutes'],
    ['sports','Other Sports','sepaktakraw','Sepak Takraw','minutes'],
    ['sports','Other Sports','kabaddi','Kabaddi','minutes'],
    ['sports','Water Sports','dragon-boat','Dragon Boat Racing','minutes'],
    ['sports','Winter Sports','snowshoeing','Snowshoeing','minutes']
  ];

  const metric = (key, label, unit, options = {}) => Object.freeze({
    key,
    label,
    unit: unit || '',
    type: options.type || 'number',
    step: options.step || (options.type === 'text' || options.type === 'select' ? '' : '0.1'),
    min: options.min == null ? 0 : options.min,
    placeholder: options.placeholder || '',
    plan: options.plan !== false,
    options: Array.isArray(options.options) ? options.options.slice() : []
  });

  const profiles = Object.freeze({
    duration: [
      metric('durationMinutes','Duration','minutes',{step:'1',placeholder:'e.g. 45'})
    ],
    running: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('distanceKm','Distance','km'),
      metric('averagePace','Average pace','min/km',{type:'text',placeholder:'e.g. 5:45'}),
      metric('averageSpeedKph','Average speed','km/h'),
      metric('elevationGainM','Elevation gain','m',{step:'1'}),
      metric('averageHeartRate','Average heart rate','bpm',{step:'1',plan:false})
    ],
    walking: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('distanceKm','Distance','km'),
      metric('averageSpeedKph','Average speed','km/h'),
      metric('steps','Steps','steps',{step:'1'}),
      metric('elevationGainM','Elevation gain','m',{step:'1'}),
      metric('carriedLoadKg','Carried load','kg')
    ],
    cycling: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('distanceKm','Distance','km'),
      metric('averageSpeedKph','Average speed','km/h'),
      metric('elevationGainM','Elevation gain','m',{step:'1'}),
      metric('averageCadence','Average cadence','rpm',{step:'1'}),
      metric('averageHeartRate','Average heart rate','bpm',{step:'1',plan:false})
    ],
    swimming: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('distanceMetres','Distance','m',{step:'1'}),
      metric('lengths','Lengths','lengths',{step:'1'}),
      metric('averagePace100m','Average pace','per 100 m',{type:'text',placeholder:'e.g. 2:05'}),
      metric('stroke','Stroke','',{type:'text',placeholder:'e.g. front crawl'})
    ],
    cardioMachine: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('distanceKm','Distance','km'),
      metric('averagePowerWatts','Average power','watts',{step:'1'}),
      metric('cadence','Cadence / stroke rate','per minute',{step:'1'}),
      metric('level','Resistance / level','',{type:'text',placeholder:'machine setting'}),
      metric('averageHeartRate','Average heart rate','bpm',{step:'1',plan:false})
    ],
    intervals: [
      metric('durationMinutes','Total duration','minutes',{step:'1'}),
      metric('rounds','Rounds','rounds',{step:'1'}),
      metric('workSeconds','Work interval','seconds',{step:'1'}),
      metric('restSeconds','Rest interval','seconds',{step:'1'}),
      metric('distanceKm','Total distance','km')
    ],
    yoga: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('intensity','Intensity','',{type:'select',options:['Gentle','Moderate','Strong']}),
      metric('focus','Session focus','',{type:'text',placeholder:'e.g. hips, balance, breath'}),
      metric('classOrHome','Setting','',{type:'select',options:['Home practice','Class','One-to-one session']})
    ],
    mindful: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('intensity','Intensity','',{type:'select',options:['Gentle','Moderate','Strong']}),
      metric('focus','Session focus','',{type:'text',placeholder:'e.g. mobility, control, breathing'})
    ],
    martial: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('rounds','Rounds','rounds',{step:'1'}),
      metric('roundLengthMinutes','Round length','minutes'),
      metric('sparringMinutes','Sparring time','minutes',{step:'1'}),
      metric('focus','Training focus','',{type:'text',placeholder:'e.g. technique, pads, sparring'})
    ],
    climbing: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('routesOrProblems','Routes / problems','count',{step:'1'}),
      metric('highestGrade','Highest grade','',{type:'text',placeholder:'e.g. V4, 6b'}),
      metric('attempts','Attempts','count',{step:'1'}),
      metric('verticalMetres','Vertical metres','m',{step:'1'})
    ],
    strength: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('exercises','Exercises','count',{step:'1'}),
      metric('workingSets','Working sets','sets',{step:'1'}),
      metric('totalRepetitions','Total repetitions','reps',{step:'1'}),
      metric('trainingFocus','Training focus','',{type:'text',placeholder:'e.g. lower body, pull, full body'})
    ],
    mobility: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('focus','Body area / focus','',{type:'text',placeholder:'e.g. shoulders, hips, ankles'}),
      metric('intensity','Intensity','',{type:'select',options:['Gentle','Moderate','Strong']})
    ],
    racket: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('gamesPlayed','Games played','games',{step:'1'}),
      metric('setsPlayed','Sets played','sets',{step:'1'}),
      metric('result','Score / result','',{type:'text',placeholder:'e.g. 21–18, 18–21, 21–15'}),
      metric('opponent','Opponent / partner','',{type:'text',plan:false})
    ],
    teamSport: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('result','Score / result','',{type:'text'}),
      metric('position','Position / role','',{type:'text'}),
      metric('trainingOrMatch','Session type','',{type:'select',options:['Training','Match','Friendly','Tournament']})
    ],
    batBall: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('inningsOrOvers','Innings / overs','',{type:'text'}),
      metric('result','Score / result','',{type:'text'}),
      metric('role','Role','',{type:'text',placeholder:'e.g. batting, bowling, fielding'})
    ],
    precision: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('roundsOrGames','Rounds / games','count',{step:'1'}),
      metric('score','Score','',{type:'text'}),
      metric('distance','Playing distance','',{type:'text'})
    ],
    golf: [
      metric('holes','Holes','holes',{step:'1'}),
      metric('score','Score','strokes',{step:'1'}),
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('walkingDistanceKm','Walking distance','km')
    ],
    waterSport: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('distanceKm','Distance','km'),
      metric('conditions','Conditions','',{type:'text',placeholder:'e.g. calm, choppy, wind force'}),
      metric('averageSpeedKph','Average speed','km/h')
    ],
    winterSport: [
      metric('durationMinutes','Duration','minutes',{step:'1'}),
      metric('distanceKm','Distance','km'),
      metric('runs','Runs','runs',{step:'1'}),
      metric('verticalMetres','Vertical metres','m',{step:'1'})
    ]
  });

  function profileName(activity) {
    const id = activity.id;
    const group = activity.group;
    if (group === 'Running' || /running|jogging|parkrun|sprint/.test(id)) return /interval|sprint|fartlek/.test(id) ? 'intervals' : 'running';
    if (group === 'Walking') return 'walking';
    if (group === 'Cycling') return 'cycling';
    if (group === 'Swimming & Water Cardio') return 'swimming';
    if (group === 'Cardio Machines') return 'cardioMachine';
    if (activity.section === 'cardio') return 'duration';
    if (group === 'Yoga') return 'yoga';
    if (group === 'Mindful Movement') return 'mindful';
    if (group === 'Martial Arts') return 'martial';
    if (group === 'Climbing') return 'climbing';
    if (group === 'Strength & Weight Training') return 'strength';
    if (group === 'Mobility & Flexibility' || group === 'Movement Skills') return 'mobility';
    if (group === 'Racket & Paddle Sports') return 'racket';
    if (group === 'Team Ball Sports' || group === 'Contact & Field Sports' || group === 'Hockey') return 'teamSport';
    if (group === 'Bat & Ball Sports') return 'batBall';
    if (id === 'golf' || id === 'disc-golf') return 'golf';
    if (group === 'Target & Precision Sports' || group === 'Cue Sports') return 'precision';
    if (group === 'Water Sports') return 'waterSport';
    if (group === 'Winter Sports') return 'winterSport';
    return 'duration';
  }

  const existingIds = new Set(base.ACTIVITIES.map((item) => item.id));
  const extra = additions
    .filter((row) => !existingIds.has(row[2]))
    .map(([section, group, id, name, measure]) => ({ section, group, id, name, measure }));

  const activities = Object.freeze(base.ACTIVITIES.concat(extra).map((activity) => {
    const profile = profileName(activity);
    return Object.freeze(Object.assign({}, activity, {
      metricProfile: profile,
      metrics: Object.freeze((profiles[profile] || profiles.duration).slice())
    }));
  }));
  const byId = new Map(activities.map((activity) => [activity.id, activity]));

  function groupsFor(section) {
    return Array.from(new Set(activities.filter((activity) => activity.section === section).map((activity) => activity.group)));
  }

  function search(section, query = '') {
    const words = String(query || '').trim().toLocaleLowerCase('en-GB').split(/\s+/).filter(Boolean);
    return activities.filter((activity) => activity.section === section && (!words.length || words.every((word) => `${activity.name} ${activity.group}`.toLocaleLowerCase('en-GB').includes(word))));
  }

  global.BASELINE_FITNESS_ACTIVITY_CATALOGUE = Object.freeze({
    SECTIONS: base.SECTIONS,
    ACTIVITIES: activities,
    ACTIVITY_BY_ID: byId,
    groupsFor,
    search,
    profiles
  });

  if (typeof module !== 'undefined' && module.exports) module.exports = global.BASELINE_FITNESS_ACTIVITY_CATALOGUE;
})(typeof window !== 'undefined' ? window : globalThis);

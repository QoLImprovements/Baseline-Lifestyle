(function(){
  'use strict';

  const overview = function(config){ return Object.freeze(config); };

  const games = Object.freeze([
    Object.freeze({
      id:'pairs', runtimeId:'pairs', route:'pairs', profileApp:'pairs', core:true, group:'core', name:'Pairs',
      overview:overview({ order:3, group:'Core Games', art:'/systems/baseline-recreation/games/overview-art/pairs.svg?v=G01_INDIGO_CIRCUIT_20260801_1', note:'Memory matching with tiered boards, skill gating, and account-bound Bank rewards.', brainBenefit:'Visual memory, pattern recall, short-term memory, and calm concentration.' })
    }),
    Object.freeze({
      id:'detect-the-word', runtimeId:'detectword', route:'detect-the-word', profileApp:'detectword', core:true, group:'core', name:'Detect The Word',
      overview:overview({ order:1, group:'Core Games', art:'/systems/baseline-recreation/games/overview-art/detect-the-word.svg?v=G01_INDIGO_CIRCUIT_20260801_1', note:'Wordle-style feedback, 3–7 letter tiers, and button or in-game letter keypad submission.', brainBenefit:'Language deduction, spelling, pattern narrowing, and verbal working memory.' })
    }),
    Object.freeze({
      id:'make-the-number', runtimeId:'make24', route:'make-the-number', profileApp:'make24', core:true, group:'core', name:'Make The Number', legacyIds:Object.freeze(['make24']),
      overview:overview({ order:2, group:'Core Games', art:'/systems/baseline-recreation/games/overview-art/make-the-number.svg?v=G01_INDIGO_CIRCUIT_20260801_1', note:'Variable target-number puzzles with tiered number sets, hints, rerolls, and in-game number/operator keypad input.', brainBenefit:'Number flexibility, working memory, multi-step problem solving, and planning.' })
    }),
    Object.freeze({
      id:'track-the-coin', runtimeId:'trackcoin', route:'track-the-coin', profileApp:'trackcoin', core:true, group:'core', name:'Track the Coin',
      overview:overview({ order:5, group:'Core Games', art:'/systems/baseline-recreation/games/overview-art/track-the-coin.svg?v=G01_INDIGO_CIRCUIT_20260801_1', note:'Working-memory shuffle tracking with tiers, streak bonuses, and pace progression.', brainBenefit:'Visual tracking, sustained attention, working memory, and focus under movement.' })
    }),
    Object.freeze({
      id:'rule-shift', runtimeId:'ruleshift', route:'rule-shift', profileApp:'ruleshift', core:true, group:'core', name:'Rule Shift',
      overview:overview({ order:4, group:'Core Games', art:'/systems/baseline-recreation/games/overview-art/rule-shift.svg?v=G01_INDIGO_CIRCUIT_20260801_1', note:'Timed rule-switching challenge for flexible attention, impulse control, and deliberate choices.', brainBenefit:'Mental flexibility, impulse control, working memory, and attention switching.' })
    }),
    Object.freeze({ id:'block-grid', runtimeId:'block-grid', route:'block-grid', profileApp:'blockgrid', core:false, group:'puzzle', name:'Block Grid' }),
    Object.freeze({ id:'colour-sort', runtimeId:'colour-sort', route:'colour-sort', profileApp:'coloursort', core:false, group:'puzzle', name:'Colour Sort' }),
    Object.freeze({
      id:'baseline-realm', runtimeId:'ninja', route:'baseline-realm', profileApp:'ninja', core:true, group:'realm', name:'Baseline Realm', legacyIds:Object.freeze(['ninja']),
      overview:overview({ order:8, group:'Testing', featured:true, art:'/systems/baseline-recreation/games/overview-art/baseline-realm.svg?v=G01_INDIGO_CIRCUIT_20260801_1', note:'Experimental Basecamp/RPG layer with Ninja Training, exploration, and settlement systems.', brainBenefit:'Long-term planning, reward tracking, routine engagement, and strategic progression.' })
    }),
    Object.freeze({
      id:'darts-focused', runtimeId:'darts-focused', route:'darts-focused', profileApp:'dartsfocused', core:false, group:'focused', name:'Darts Focused',
      overview:overview({ order:6, group:'Testing', featured:true, art:'/systems/baseline-recreation/games/darts-focused/art/realistic-dartboard.svg?v=G01_INDIGO_CIRCUIT_20260801_1', note:'10 distinct games played entirely on the website, each with selectable tiers, experience and mastery linked to Baseline Realm.', brainBenefit:'Darts-specific calculation, selective attention, visual memory, pressure control, strategic flexibility and recovery after mistakes.' })
    }),
    Object.freeze({
      id:'badminton-focused', runtimeId:'badminton-focused', route:'badminton-focused', profileApp:'badmintonfocused', core:false, group:'focused', name:'Badminton Focused',
      overview:overview({ order:7, group:'Testing', featured:true, art:'/systems/baseline-recreation/games/badminton-focused/art/badminton-focused-overview.svg?v=G01_INDIGO_CIRCUIT_20260801_1', note:'15 website-based perceptual, attention and decision-training games grounded in the mental demands of real badminton.', brainBenefit:'Shuttle tracking, anticipation, reaction control, tactical judgement, court awareness, recovery and performance under pressure.' })
    })
  ]);

  const persistenceOnlyApps = Object.freeze([
    'weightcoherence',
    'unheardsignal',
    'tearswithoutwitness',
    'pantherjigsaw',
    'bearjigsaw',
    'foxjigsaw',
    'elephantsjigsaw',
    'crossnumber',
    'meridiangrove'
  ]);

  const persistentApps = Object.freeze([
    ...games.map(function(game){ return game.profileApp; }).filter(Boolean),
    ...persistenceOnlyApps
  ].filter(function(app,index,list){ return list.indexOf(app)===index; }));

  const byCanonical = Object.create(null);
  const byRuntime = Object.create(null);
  const byRoute = Object.create(null);

  games.forEach(function(game){
    byCanonical[game.id] = game;
    byRuntime[game.runtimeId] = game;
    byRoute[game.route] = game;
    (game.legacyIds || []).forEach(function(alias){ byRuntime[alias] = game; });
  });

  function resolve(value){
    const key = String(value || '').trim();
    return byCanonical[key] || byRuntime[key] || byRoute[key] || null;
  }

  function canonicalId(value){
    const game = resolve(value);
    return game ? game.id : '';
  }

  function runtimeId(value){
    const game = resolve(value);
    return game ? game.runtimeId : '';
  }

  function route(value){
    const game = resolve(value);
    return game ? game.route : '';
  }

  function coreGames(){
    return games.filter(function(game){ return game.core; });
  }

  function overviewGames(){
    return games
      .filter(function(game){ return game.overview; })
      .slice()
      .sort(function(left,right){ return left.overview.order - right.overview.order; });
  }

  function storageApps(){
    return persistentApps.slice();
  }

  function isPersistentApp(value){
    return persistentApps.includes(String(value || '').trim());
  }

  const api = Object.freeze({
    version:1,
    games:games,
    resolve:resolve,
    canonicalId:canonicalId,
    runtimeId:runtimeId,
    route:route,
    coreGames:coreGames,
    overviewGames:overviewGames,
    persistentApps:storageApps,
    isPersistentApp:isPersistentApp
  });

  window.BASELINE_GAMES_REGISTRY = api;
  document.documentElement.setAttribute('data-baseline-games-registry','1');
})();

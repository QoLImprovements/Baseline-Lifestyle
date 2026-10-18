(function(){
  'use strict';

  const games = Object.freeze([
    Object.freeze({ id:'pairs', runtimeId:'pairs', route:'pairs', profileApp:'pairs', core:true, group:'core', name:'Pairs' }),
    Object.freeze({ id:'detect-the-word', runtimeId:'detectword', route:'detect-the-word', profileApp:'detectword', core:true, group:'core', name:'Detect The Word' }),
    Object.freeze({ id:'make-the-number', runtimeId:'make24', route:'make-the-number', profileApp:'make24', core:true, group:'core', name:'Make The Number', legacyIds:Object.freeze(['make24']) }),
    Object.freeze({ id:'track-the-coin', runtimeId:'trackcoin', route:'track-the-coin', profileApp:'trackcoin', core:true, group:'core', name:'Track the Coin' }),
    Object.freeze({ id:'rule-shift', runtimeId:'ruleshift', route:'rule-shift', profileApp:'ruleshift', core:true, group:'core', name:'Rule Shift' }),
    Object.freeze({ id:'block-grid', runtimeId:'block-grid', route:'block-grid', profileApp:'blockgrid', core:false, group:'puzzle', name:'Block Grid' }),
    Object.freeze({ id:'colour-sort', runtimeId:'colour-sort', route:'colour-sort', profileApp:'coloursort', core:false, group:'puzzle', name:'Colour Sort' }),
    Object.freeze({ id:'baseline-realm', runtimeId:'ninja', route:'baseline-realm', profileApp:'ninja', core:true, group:'realm', name:'Baseline Realm', legacyIds:Object.freeze(['ninja']) }),
    Object.freeze({ id:'darts-focused', runtimeId:'darts-focused', route:'darts-focused', profileApp:'dartsfocused', core:false, group:'focused', name:'Darts Focused' }),
    Object.freeze({ id:'badminton-focused', runtimeId:'badminton-focused', route:'badminton-focused', profileApp:'badmintonfocused', core:false, group:'focused', name:'Badminton Focused' })
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
    persistentApps:storageApps,
    isPersistentApp:isPersistentApp
  });

  window.BASELINE_GAMES_HUB_GAME_REGISTRY = api;
  document.documentElement.setAttribute('data-baseline-games-registry','1');
})();

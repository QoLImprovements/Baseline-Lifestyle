import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const configPath=new URL('../systems/baseline-games-hub/js/games-core-config.js',import.meta.url);
const progressionPath=new URL('../systems/baseline-games-hub/js/games-progression.js',import.meta.url);
const profileRulesPath=new URL('../systems/baseline-games-hub/js/games-profile-rules.js',import.meta.url);
const corePath=new URL('../systems/baseline-games-hub/js/baseline-games-hub-core.js',import.meta.url);
const htmlPath=new URL('../systems/baseline-games-hub/baseline-games-hub.html',import.meta.url);

function evaluateWordGuess(guess,secret){
  const result=Array.from({length:guess.length},(_,idx)=>({letter:guess[idx],state:'absent'}));
  const secretPool=secret.split('');
  guess.split('').forEach((char,idx)=>{
    if(secret[idx]===char){
      result[idx].state='correct';
      secretPool[idx]=null;
    }
  });
  guess.split('').forEach((char,idx)=>{
    if(result[idx].state==='correct')return;
    const poolIndex=secretPool.indexOf(char);
    if(poolIndex>=0){
      result[idx].state='present';
      secretPool[poolIndex]=null;
    }
  });
  return result;
}

function loadRules(){
  const sandbox={window:{}};
  vm.runInNewContext(fs.readFileSync(configPath,'utf8'),sandbox,{filename:'games-core-config.js'});
  vm.runInNewContext(fs.readFileSync(progressionPath,'utf8'),sandbox,{filename:'games-progression.js'});
  vm.runInNewContext(fs.readFileSync(profileRulesPath,'utf8'),sandbox,{filename:'games-profile-rules.js'});
  const factory=sandbox.window.BASELINE_GAMES_HUB_PROFILE_RULES;
  return {
    factory,
    rules:factory.create({
      config:sandbox.window.BASELINE_GAMES_HUB_CORE_CONFIG,
      progression:sandbox.window.BASELINE_GAMES_HUB_PROGRESSION,
      evaluateWordGuess,
      normaliseTrackCoinSpeedPercent:value=>Math.max(100,Math.round(Number(value||100))),
      trackCoinBaseSpeedPercent:100
    })
  };
}

test('Core Games profile authority preserves canonical default profile shapes',()=>{
  const {factory,rules}=loadRules();
  assert.equal(factory.version,1);
  assert.deepEqual(
    JSON.parse(JSON.stringify(rules.defaultPairsProfile())),
    {
      app:'pairs',bank:0,xp:0,level:1,skillPoints:1,boardsCleared:0,gamesPlayed:0,currentStreak:0,bestStreak:0,cleanWinStreak:0,
      skills:{insight:0,flow:0,banker:0,recall:0,tempo:0},selectedTier:'starter',cardTheme:'woodland',activeRound:null
    }
  );
  assert.equal(rules.defaultMake24Profile().selectedTier,'starter');
  assert.equal(rules.defaultWordProfile().selectedTier,'tier3');
  assert.equal(rules.defaultRuleShiftProfile().selectedTier,'starter');
  assert.equal(rules.defaultTrackCoinProfile().trackCoinSpeedPercent,100);
});

test('Core Games profile authority repairs locked tiers themes and skills',()=>{
  const {rules}=loadRules();
  const pairs=rules.normalisePairsProfile({
    level:1,
    selectedTier:'vault',
    cardTheme:'night',
    skills:{insight:4},
    xp:0
  });
  assert.equal(pairs.selectedTier,'starter');
  assert.equal(pairs.cardTheme,'woodland');
  assert.equal(pairs.skills.insight,0);
  assert.equal(pairs.skillPoints,1);

  const make24=rules.normaliseMake24Profile({level:1,selectedTier:'crown',skills:{clarity:4}});
  assert.equal(make24.selectedTier,'starter');
  assert.equal(make24.skills.clarity,0);

  const ruleShift=rules.normaliseRuleShiftProfile({level:1,selectedTier:'pressure',skills:{adapt:4}});
  assert.equal(ruleShift.selectedTier,'starter');
  assert.equal(ruleShift.skills.adapt,0);
});

test('Detect The Word profile authority restores a valid saved round and recomputes evaluation',()=>{
  const {rules}=loadRules();
  const word=rules.normaliseWordProfile({
    level:4,
    selectedTier:'tier4',
    activeRound:{
      tierId:'tier4',
      secret:'able',
      guesses:[{word:'bale',evaluation:[{state:'wrong'}]}],
      maxGuesses:7,
      draftGuess:'ab'
    }
  });

  assert.equal(word.activeRound.tierId,'tier4');
  assert.equal(word.activeRound.secret,'able');
  assert.equal(word.activeRound.draftGuess,'ab');
  assert.deepEqual(
    JSON.parse(JSON.stringify(word.activeRound.guesses[0].evaluation.map(item=>item.state))),
    ['present','present','correct','correct']
  );
});

test('Track Coin profile authority preserves speed floor and unlocked-tier repair',()=>{
  const {rules}=loadRules();
  const profile=rules.normaliseTrackCoinProfile({
    level:1,
    selectedTier:'tier5',
    trackCoinSpeedPercent:40,
    bestTrackCoinSpeedPercent:50
  });
  assert.equal(profile.trackCoinSpeedPercent,100);
  assert.equal(profile.bestTrackCoinSpeedPercent,100);
  assert.equal(profile.highestUnlockedTier,'tier1');
  assert.equal(profile.selectedTier,'tier1');
  assert.equal(profile.currentTier,'tier1');
});

test('Games Hub core delegates Core Games profile rules and keeps Realm compatibility separate',()=>{
  const core=fs.readFileSync(corePath,'utf8');
  for(const name of [
    'defaultPairsProfile','defaultMake24Profile','defaultWordProfile','defaultRuleShiftProfile','defaultTrackCoinProfile',
    'normalisePairsProfile','normaliseMake24Profile','normaliseWordProfile','normaliseRuleShiftProfile','normaliseTrackCoinProfile',
    'highestUnlockedTrackCoinTier'
  ]){
    assert.doesNotMatch(core,new RegExp('function '+name+'\\s*\\('),name+' must not be redefined in core');
  }
  assert.match(core,/const CORE_PROFILE_RULES_FACTORY = window\.BASELINE_GAMES_HUB_PROFILE_RULES \|\| null/);
  assert.match(core,/games_profile_rules_authority_missing/);
  assert.match(core,/function fallbackNinjaProfile\(/);
  assert.match(core,/function normaliseFallbackNinjaProfile\(/);
  assert.match(core,/function normaliseNinjaProfile\(/);
});

test('Core Games profile authority is loaded before core and stays pure',()=>{
  const source=fs.readFileSync(profileRulesPath,'utf8');
  const html=fs.readFileSync(htmlPath,'utf8');

  assert.doesNotMatch(source,/document\.|fetch\(|XMLHttpRequest|localStorage|sessionStorage|indexedDB|BaselineGameStorage/);
  assert.doesNotMatch(source,/addEventListener|createElement|innerHTML|classList|history\./);

  const configIndex=html.indexOf('/systems/baseline-games-hub/js/games-core-config.js');
  const rulesIndex=html.indexOf('/systems/baseline-games-hub/js/games-profile-rules.js?v=GAMES_PROFILE_RULES_AUTHORITY_20261021_1');
  const coreIndex=html.indexOf('/systems/baseline-games-hub/js/baseline-games-hub-core.js');
  assert.ok(configIndex>=0 && rulesIndex>configIndex && coreIndex>rulesIndex);
});

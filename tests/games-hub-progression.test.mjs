import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const progressionPath = new URL('../systems/baseline-games-hub/js/games-progression.js', import.meta.url);
const corePath = new URL('../systems/baseline-games-hub/js/baseline-games-hub-core.js', import.meta.url);
const htmlPath = new URL('../systems/baseline-games-hub/baseline-games-hub.html', import.meta.url);

function loadProgression(){
  const sandbox={ window:{} };
  vm.runInNewContext(fs.readFileSync(progressionPath,'utf8'),sandbox,{filename:'games-progression.js'});
  return sandbox.window.BASELINE_GAMES_HUB_PROGRESSION;
}

test('Games Hub progression authority preserves the canonical XP curve',()=>{
  const progression=loadProgression();
  assert.ok(progression);
  assert.equal(progression.version,1);
  assert.equal(progression.xpNeededForLevel(1),60);
  assert.equal(progression.xpNeededForLevel(2),99);
  assert.equal(progression.xpNeededForLevel(3),146);

  const snapshot=progression.progressionSnapshot({level:1,xp:30});
  assert.equal(snapshot.level,1);
  assert.equal(snapshot.xp,30);
  assert.equal(snapshot.needed,60);
  assert.equal(snapshot.pct,50);
  assert.equal(snapshot.remaining,30);
});

test('Games Hub progression authority preserves multi-level XP rollover',()=>{
  const progression=loadProgression();
  const profile={level:1,xp:160,skillPoints:1};
  assert.equal(progression.applyLevelCurve(profile),2);
  assert.equal(profile.level,3);
  assert.equal(profile.xp,1);
  assert.equal(profile.skillPoints,3);
});

test('Games Hub progression authority preserves locked-skill refund and reconciliation',()=>{
  const progression=loadProgression();
  const defs=[
    {id:'locked',max:4,unlockLevel:5},
    {id:'open',max:5,unlockLevel:1}
  ];
  const profile={level:2,skillPoints:1,skills:{locked:3,open:7}};

  progression.refundLockedSkills(profile,defs);
  assert.equal(profile.skills.locked,0);
  assert.equal(profile.skills.open,5);
  assert.equal(profile.skillPoints,4);

  assert.equal(progression.spentSkillPoints(profile,defs),5);
  assert.equal(progression.earnedSkillPoints(profile),2);
  progression.reconcileSkillPoints(profile,defs);
  assert.equal(profile.skillPoints,0);
});

test('Games Hub core delegates pure progression rules to one loaded authority',()=>{
  const core=fs.readFileSync(corePath,'utf8');
  const html=fs.readFileSync(htmlPath,'utf8');

  assert.match(core,/const PROGRESSION_RULES = window\.BASELINE_GAMES_HUB_PROGRESSION \|\| null/);
  assert.match(core,/games_progression_authority_missing/);

  for(const name of [
    'xpNeededForLevel',
    'progressionSnapshot',
    'applyLevelCurve',
    'refundLockedSkills',
    'spentSkillPoints',
    'earnedSkillPoints',
    'reconcileSkillPoints'
  ]){
    assert.doesNotMatch(core,new RegExp('function '+name+'\\s*\\('),name+' must not be redefined in core');
  }

  const registryIndex=html.indexOf('/systems/baseline-games-hub/js/games-registry.js');
  const progressionIndex=html.indexOf('/systems/baseline-games-hub/js/games-progression.js?v=GAMES_PROGRESSION_AUTHORITY_20261021_1');
  const coreIndex=html.indexOf('/systems/baseline-games-hub/js/baseline-games-hub-core.js');
  assert.ok(registryIndex>=0 && progressionIndex>registryIndex && coreIndex>progressionIndex);
});

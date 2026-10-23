import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const configPath = new URL('../systems/baseline-recreation/js/games-core-config.js', import.meta.url);
const corePath = new URL('../systems/baseline-recreation/js/baseline-recreation-core.js', import.meta.url);
const htmlPath = new URL('../systems/baseline-recreation/baseline-recreation.html', import.meta.url);

function loadConfig(){
  const sandbox={window:{}};
  vm.runInNewContext(fs.readFileSync(configPath,'utf8'),sandbox,{filename:'games-core-config.js'});
  return sandbox.window.BASELINE_GAMES_CORE_CONFIG;
}

test('Core Games configuration authority preserves canonical tier and content sets',()=>{
  const config=loadConfig();
  assert.ok(config);
  assert.equal(config.version,1);

  assert.equal(config.PAIRS_FACES.length,24);
  assert.deepEqual(Array.from(config.PAIRS_TIERS,tier=>tier.id),['starter','field','forge','bastion','citadel','vault']);
  assert.deepEqual(Array.from(config.MAKE24_TIERS,tier=>tier.id),['starter','field','forge','citadel','crown']);
  assert.deepEqual(Array.from(config.WORD_TIERS,tier=>tier.letters),[3,4,5,6,7]);
  assert.deepEqual(
    Object.fromEntries(Object.entries(config.WORD_BANK).map(([length,words])=>[length,words.length])),
    {'3':174,'4':133,'5':83,'6':68,'7':62}
  );
  assert.deepEqual(Array.from(config.TRACKCOIN_TIERS,tier=>tier.id),['tier1','tier2','tier3','tier4','tier5']);
  assert.deepEqual(Array.from(config.RULESHIFT_TIERS,tier=>tier.id),['starter','switch','opposite','mixed','pressure']);
  assert.equal(config.RULESHIFT_COLOURS.length,8);
  assert.equal(config.RULESHIFT_SHAPES.length,8);
  assert.equal(config.RULESHIFT_SIZES.length,2);
});

test('Core Games configuration preserves representative unlock and reward rules',()=>{
  const config=loadConfig();
  const vault=config.PAIRS_TIERS.find(tier=>tier.id==='vault');
  const crown=config.MAKE24_TIERS.find(tier=>tier.id==='crown');
  const pressure=config.RULESHIFT_TIERS.find(tier=>tier.id==='pressure');
  const tier5=config.TRACKCOIN_TIERS.find(tier=>tier.id==='tier5');

  assert.equal(vault.unlockLevel,46);
  assert.equal(vault.pairs,18);
  assert.equal(vault.xpReward,104);
  assert.equal(crown.unlockLevel,36);
  assert.equal(crown.maxNumber,13);
  assert.equal(pressure.unlockLevel,26);
  assert.equal(pressure.rounds,16);
  assert.equal(tier5.containers,6);
  assert.equal(tier5.multiplier,2);
});

test('Recreation core delegates static configuration instead of redefining it',()=>{
  const core=fs.readFileSync(corePath,'utf8');
  const names=[
    'PAIRS_FACES','PAIRS_CARD_THEMES','PAIRS_TIERS','PAIRS_SKILLS',
    'MAKE24_TIERS','MAKE24_SKILLS','WORD_TIERS','WORD_SKILLS','WORD_BANK',
    'TRACKCOIN_TIERS','TRACKCOIN_STREAK_BONUS','TRACKCOIN_SKILLS',
    'RULESHIFT_COLOURS','RULESHIFT_SHAPES','RULESHIFT_SIZES','RULESHIFT_TIERS','RULESHIFT_SKILLS'
  ];

  assert.match(core,/const CORE_GAME_CONFIG = window\.BASELINE_GAMES_CORE_CONFIG \|\| null/);
  assert.match(core,/games_core_config_authority_missing/);
  for(const name of names){
    assert.match(core,new RegExp('const '+name+' = CORE_GAME_CONFIG\\.'+name+';'));
    assert.doesNotMatch(core,new RegExp('const '+name+' = (?:Object\\.freeze\\(|\\[|\\{)'));
  }
});

test('Core Games configuration authority is loaded before the controller and stays pure',()=>{
  const source=fs.readFileSync(configPath,'utf8');
  const html=fs.readFileSync(htmlPath,'utf8');

  assert.doesNotMatch(source,/document\.|fetch\(|XMLHttpRequest|localStorage|sessionStorage|indexedDB|BaselineGameStorage/);
  assert.doesNotMatch(source,/addEventListener|createElement|innerHTML|classList/);

  const progressionIndex=html.indexOf('/systems/baseline-recreation/js/games-progression.js');
  const configIndex=html.indexOf('/systems/baseline-recreation/js/games-core-config.js?v=RECREATION_COHERENCE_20261023_2');
  const coreIndex=html.indexOf('/systems/baseline-recreation/js/baseline-recreation-core.js');
  assert.ok(progressionIndex>=0 && configIndex>progressionIndex && coreIndex>configIndex);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const enginePath=new URL('../systems/baseline-recreation/js/pairs-engine.js',import.meta.url);
const corePath=new URL('../systems/baseline-recreation/js/baseline-recreation-core.js',import.meta.url);
const htmlPath=new URL('../systems/baseline-recreation/baseline-recreation.html',import.meta.url);

function loadEngine(){
  const sandbox={window:{}};
  vm.runInNewContext(fs.readFileSync(enginePath,'utf8'),sandbox,{filename:'pairs-engine.js'});
  return sandbox.window.BASELINE_PAIRS_ENGINE;
}

test('Pairs engine exposes one pure calculation authority',()=>{
  const engine=loadEngine();
  assert.equal(engine.version,1);
  assert.equal(typeof engine.buildDeck,'function');
  assert.equal(typeof engine.boardLayout,'function');
  assert.equal(typeof engine.mismatchDelay,'function');
  assert.equal(typeof engine.calculateRewards,'function');
});

test('Pairs deck creation preserves physical-card selection state',()=>{
  const engine=loadEngine();
  const deck=engine.buildDeck({
    tier:{pairs:2},
    faces:['A','B','C'],
    shuffle:(items)=>items.slice()
  });
  assert.deepEqual(
    JSON.parse(JSON.stringify(deck)),
    [
      {id:'a-0',face:'A',open:false,matched:false,wasKnown:false,selections:0},
      {id:'b-0',face:'A',open:false,matched:false,wasKnown:false,selections:0},
      {id:'a-1',face:'B',open:false,matched:false,wasKnown:false,selections:0},
      {id:'b-1',face:'B',open:false,matched:false,wasKnown:false,selections:0}
    ]
  );
});

test('Pairs layout and tempo calculations preserve existing geometry and clamps',()=>{
  const engine=loadEngine();
  assert.deepEqual(
    JSON.parse(JSON.stringify(engine.boardLayout({cols:4,pairs:6}))),
    {desktopCols:4,mobileCols:4,phoneCols:3,boardMax:630}
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(engine.boardLayout({cols:6,pairs:18}))),
    {desktopCols:6,mobileCols:4,phoneCols:3,boardMax:650}
  );
  assert.equal(engine.mismatchDelay(0),650);
  assert.equal(engine.mismatchDelay(4),290);
  assert.equal(engine.mismatchDelay(10),260);
});

test('Pairs reward calculation preserves skill and streak multipliers',()=>{
  const engine=loadEngine();
  const rewards=engine.calculateRewards({
    tier:{bankReward:10,xpReward:20},
    profile:{cleanWinStreak:2,currentStreak:4,skills:{banker:2,flow:1}},
    hadFailure:false,
    cleanBonusPctForStreak:(streak)=>streak===3?10:0,
    streakBonusPctForStreak:(streak)=>streak===5?20:0
  });
  assert.deepEqual(
    JSON.parse(JSON.stringify(rewards)),
    {bank:16,xp:29,cleanPct:10,streakPct:20,nextClean:3,nextStreak:5}
  );
});

test('Recreation core delegates Pairs pure logic to the engine authority',()=>{
  const core=fs.readFileSync(corePath,'utf8');
  const source=fs.readFileSync(enginePath,'utf8');
  const html=fs.readFileSync(htmlPath,'utf8');

  assert.match(core,/const PAIRS_ENGINE = window\.BASELINE_PAIRS_ENGINE \|\| null/);
  assert.match(core,/pairs_engine_authority_missing/);
  assert.match(core,/PAIRS_ENGINE\.buildDeck\(\{tier:tier,faces:PAIRS_FACES,shuffle:shuffle\}\)/);
  assert.match(core,/PAIRS_ENGINE\.boardLayout\(tier\)/);
  assert.match(core,/PAIRS_ENGINE\.mismatchDelay\(profiles\.pairs\.skills\.tempo \|\| 0\)/);
  assert.match(core,/PAIRS_ENGINE\.calculateRewards\(\{/);

  assert.doesNotMatch(source,/document\.|fetch\(|XMLHttpRequest|localStorage|sessionStorage|indexedDB/);
  assert.doesNotMatch(source,/addEventListener|createElement|innerHTML|classList|history\./);

  const configIndex=html.indexOf('/systems/baseline-recreation/js/games-core-config.js');
  const engineIndex=html.indexOf('/systems/baseline-recreation/js/pairs-engine.js?v=PAIRS_ENGINE_AUTHORITY_20261022_1');
  const coreIndex=html.indexOf('/systems/baseline-recreation/js/baseline-recreation-core.js?v=RECREATION_CORE_20261022_1');
  assert.ok(configIndex>=0 && engineIndex>configIndex && coreIndex>engineIndex);
});

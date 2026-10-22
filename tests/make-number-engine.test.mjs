import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const configPath=new URL('../systems/baseline-recreation/js/games-core-config.js',import.meta.url);
const enginePath=new URL('../systems/baseline-recreation/js/make-number-engine.js',import.meta.url);
const corePath=new URL('../systems/baseline-recreation/js/baseline-recreation-core.js',import.meta.url);
const htmlPath=new URL('../systems/baseline-recreation/baseline-recreation.html',import.meta.url);

function loadEngine(){
  const sandbox={window:{}};
  vm.runInNewContext(fs.readFileSync(configPath,'utf8'),sandbox,{filename:'games-core-config.js'});
  vm.runInNewContext(fs.readFileSync(enginePath,'utf8'),sandbox,{filename:'make-number-engine.js'});
  const factory=sandbox.window.BASELINE_MAKE_NUMBER_ENGINE;
  return {
    factory,
    engine:factory.create({tiers:sandbox.window.BASELINE_GAMES_CORE_CONFIG.MAKE24_TIERS}),
    tiers:sandbox.window.BASELINE_GAMES_CORE_CONFIG.MAKE24_TIERS
  };
}

test('Make The Number engine builds a complete deterministic generated bank for every tier',()=>{
  const {factory,engine,tiers}=loadEngine();
  assert.equal(factory.version,1);
  for(const tier of tiers){
    const first=engine.buildMakeNumberPuzzleBank(tier);
    const second=engine.buildMakeNumberPuzzleBank(tier);
    assert.equal(first.length,100,tier.id);
    assert.equal(second.length,100,tier.id);
    assert.equal(JSON.stringify(first),JSON.stringify(second),tier.id+' bank must remain deterministic');
  }
});

test('Make The Number seeded puzzle selection is stable and avoids immediate repeat',()=>{
  const {engine,tiers}=loadEngine();
  const tier=tiers.find(item=>item.id==='forge');
  const first=engine.buildMake24Puzzle(tier,'forge:42',null);
  const repeat=engine.buildMake24Puzzle(tier,'forge:42',null);
  assert.deepEqual(JSON.parse(JSON.stringify(repeat)),JSON.parse(JSON.stringify(first)));

  const next=engine.buildMake24Puzzle(tier,'forge:42',first);
  assert.notEqual(engine.make24PuzzleSignature(next),engine.make24PuzzleSignature(first));
});

test('Make The Number engine preserves solver hint and number-multiset rules',()=>{
  const {engine}=loadEngine();
  const solutions=engine.allMakeNumberSolutions([1,3,4,6],24);
  assert.ok(solutions.length>0);
  assert.match(engine.make24HintFromSolution(solutions[0],0),/^Guide:/);
  assert.equal(engine.sameNumberMultiset([1,2,2,4],[2,4,2,1]),true);
  assert.equal(engine.sameNumberMultiset([1,2,2,4],[1,2,3,4]),false);
});

test('dead Make The Number legacy table and scoring gates are retired',()=>{
  const core=fs.readFileSync(corePath,'utf8');
  const engine=fs.readFileSync(enginePath,'utf8');
  for(const source of [core,engine]){
    assert.doesNotMatch(source,/MAKE_NUMBER_PUZZLES/);
    assert.doesNotMatch(source,/scoreMake24Solution/);
    assert.doesNotMatch(source,/make24AcceptsDifficulty/);
  }
});

test('Recreation core delegates Make The Number deterministic logic to one pure engine',()=>{
  const core=fs.readFileSync(corePath,'utf8');
  const source=fs.readFileSync(enginePath,'utf8');
  const html=fs.readFileSync(htmlPath,'utf8');

  assert.match(core,/const MAKE_NUMBER_ENGINE_FACTORY = window\.BASELINE_MAKE_NUMBER_ENGINE \|\| null/);
  assert.match(core,/make_number_engine_authority_missing/);
  assert.match(core,/MAKE_NUMBER_ENGINE\.buildMake24Puzzle\(tier,seed,make24State\)/);
  assert.doesNotMatch(core,/function allMakeNumberSolutions\(/);
  assert.doesNotMatch(core,/function make24HintFromSolution\(/);
  assert.doesNotMatch(core,/function makeNumberSeededRandom\(/);
  assert.doesNotMatch(core,/function buildMakeNumberPuzzleBank\(/);
  assert.doesNotMatch(core,/function sameNumberMultiset\(/);

  assert.doesNotMatch(source,/document\.|fetch\(|XMLHttpRequest|localStorage|sessionStorage|indexedDB|BaselineGameStorage/);
  assert.doesNotMatch(source,/addEventListener|createElement|innerHTML|classList|history\.|Math\.random/);

  const profileIndex=html.indexOf('/systems/baseline-recreation/js/games-profile-rules.js');
  const engineIndex=html.indexOf('/systems/baseline-recreation/js/make-number-engine.js?v=MAKE_NUMBER_ENGINE_AUTHORITY_20261021_1');
  const coreIndex=html.indexOf('/systems/baseline-recreation/js/baseline-recreation-core.js');
  assert.ok(profileIndex>=0 && engineIndex>profileIndex && coreIndex>engineIndex);
});

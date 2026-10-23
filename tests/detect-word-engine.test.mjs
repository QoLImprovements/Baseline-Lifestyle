import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const configPath=new URL('../systems/baseline-recreation/js/games-core-config.js',import.meta.url);
const enginePath=new URL('../systems/baseline-recreation/js/detect-word-engine.js',import.meta.url);
const corePath=new URL('../systems/baseline-recreation/js/baseline-recreation-core.js',import.meta.url);
const htmlPath=new URL('../systems/baseline-recreation/baseline-recreation.html',import.meta.url);

function loadEngine(random=()=>0){
  const sandbox={window:{},Math};
  vm.runInNewContext(fs.readFileSync(configPath,'utf8'),sandbox,{filename:'games-core-config.js'});
  vm.runInNewContext(fs.readFileSync(enginePath,'utf8'),sandbox,{filename:'detect-word-engine.js'});
  const factory=sandbox.window.BASELINE_DETECT_WORD_ENGINE;
  return {
    factory,
    engine:factory.create({
      wordBank:sandbox.window.BASELINE_GAMES_CORE_CONFIG.WORD_BANK,
      random
    }),
    wordBank:sandbox.window.BASELINE_GAMES_CORE_CONFIG.WORD_BANK
  };
}

test('Detect The Word engine exposes one isolated authority',()=>{
  const {factory,engine}=loadEngine();
  assert.equal(factory.version,1);
  assert.equal(typeof engine.chooseRandomWord,'function');
  assert.equal(typeof engine.evaluateWordGuess,'function');
  assert.equal(typeof engine.computeWordRewardMultiplier,'function');
  assert.equal(typeof engine.letterKnowledge,'function');
});

test('Detect The Word evaluation handles duplicate letters without over-crediting',()=>{
  const {engine}=loadEngine();
  assert.deepEqual(
    JSON.parse(JSON.stringify(engine.evaluateWordGuess('allee','apple'))),
    [
      {letter:'a',state:'correct'},
      {letter:'l',state:'present'},
      {letter:'l',state:'absent'},
      {letter:'e',state:'absent'},
      {letter:'e',state:'correct'}
    ]
  );
});

test('Detect The Word word selection avoids recent repeats before recycling',()=>{
  const sandbox={window:{}};
  vm.runInNewContext(fs.readFileSync(enginePath,'utf8'),sandbox,{filename:'detect-word-engine.js'});
  const engine=sandbox.window.BASELINE_DETECT_WORD_ENGINE.create({
    wordBank:{3:['cat','dog','pig']},
    random:()=>0
  });
  assert.deepEqual(
    [engine.chooseRandomWord(3),engine.chooseRandomWord(3),engine.chooseRandomWord(3),engine.chooseRandomWord(3)],
    ['cat','dog','pig','cat']
  );
});

test('Detect The Word reward and keypad knowledge rules are preserved',()=>{
  const {engine}=loadEngine();
  assert.equal(engine.computeWordRewardMultiplier({skills:{focus:2},currentStreak:10}),1.4);
  const knowledge=engine.letterKnowledge([
    {evaluation:[
      {letter:'a',state:'absent'},
      {letter:'b',state:'present'},
      {letter:'c',state:'correct'}
    ]},
    {evaluation:[
      {letter:'a',state:'correct'},
      {letter:'b',state:'absent'}
    ]}
  ]);
  assert.equal(knowledge.a,'correct');
  assert.equal(knowledge.b,'present');
  assert.equal(knowledge.c,'correct');
});

test('Recreation core delegates Detect The Word engine logic to one authority',()=>{
  const core=fs.readFileSync(corePath,'utf8');
  const source=fs.readFileSync(enginePath,'utf8');
  const html=fs.readFileSync(htmlPath,'utf8');

  assert.match(core,/const DETECT_WORD_ENGINE_FACTORY = window\.BASELINE_DETECT_WORD_ENGINE \|\| null/);
  assert.match(core,/detect_word_engine_authority_missing/);
  assert.match(core,/DETECT_WORD_ENGINE_FACTORY\.create\(\{wordBank:WORD_BANK\}\)/);
  assert.match(core,/DETECT_WORD_ENGINE\.letterKnowledge/);

  assert.doesNotMatch(core,/function chooseRandomWord\(/);
  assert.doesNotMatch(core,/function evaluateWordGuess\(/);
  assert.doesNotMatch(core,/function computeWordRewardMultiplier\(/);
  assert.doesNotMatch(core,/const wordRecentByLength/);

  assert.doesNotMatch(source,/document\.|fetch\(|XMLHttpRequest|localStorage|sessionStorage|indexedDB|BaselineGameStorage/);
  assert.doesNotMatch(source,/addEventListener|createElement|innerHTML|classList|history\./);

  const configIndex=html.indexOf('/systems/baseline-recreation/js/games-core-config.js');
  const engineIndex=html.indexOf('/systems/baseline-recreation/js/detect-word-engine.js?v=DETECT_WORD_ENGINE_AUTHORITY_20261021_1');
  const coreIndex=html.indexOf('/systems/baseline-recreation/js/baseline-recreation-core.js?v=');
  assert.ok(configIndex>=0 && engineIndex>configIndex && coreIndex>engineIndex);
});

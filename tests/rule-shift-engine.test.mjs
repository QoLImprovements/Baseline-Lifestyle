import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const configPath=new URL('../systems/baseline-games-hub/js/games-core-config.js',import.meta.url);
const enginePath=new URL('../systems/baseline-games-hub/js/rule-shift-engine.js',import.meta.url);
const corePath=new URL('../systems/baseline-games-hub/js/baseline-games-hub-core.js',import.meta.url);
const htmlPath=new URL('../systems/baseline-games-hub/baseline-games-hub.html',import.meta.url);

function loadEngine(random=()=>0.25){
  const sandbox={window:{},Math};
  vm.runInNewContext(fs.readFileSync(configPath,'utf8'),sandbox,{filename:'games-core-config.js'});
  vm.runInNewContext(fs.readFileSync(enginePath,'utf8'),sandbox,{filename:'rule-shift-engine.js'});
  const config=sandbox.window.BASELINE_GAMES_HUB_CORE_CONFIG;
  const factory=sandbox.window.BASELINE_RULE_SHIFT_ENGINE;
  return {
    config,
    factory,
    engine:factory.create({
      colours:config.RULESHIFT_COLOURS,
      shapes:config.RULESHIFT_SHAPES,
      sizes:config.RULESHIFT_SIZES,
      random
    })
  };
}

test('Rule Shift engine exposes one pure rules authority',()=>{
  const {factory,engine}=loadEngine();
  assert.equal(factory.version,1);
  for(const name of ['name','buildRule','matches','mismatchFeedback','timeLimitMs','buildOptions']){
    assert.equal(typeof engine[name],'function',name);
  }
});

test('Rule Shift matching semantics cover every canonical rule family',()=>{
  const {engine}=loadEngine();
  const option={colour:'red',shape:'circle',size:'small'};
  const cases=[
    [{type:'colour',colour:'red'},true],
    [{type:'colour',colour:'blue'},false],
    [{type:'shape',shape:'circle'},true],
    [{type:'size',size:'small'},true],
    [{type:'notColour',colour:'blue'},true],
    [{type:'notColour',colour:'red'},false],
    [{type:'notShape',shape:'square'},true],
    [{type:'colourShape',colour:'red',shape:'circle'},true],
    [{type:'colourSize',colour:'red',size:'small'},true],
    [{type:'shapeSize',shape:'circle',size:'small'},true]
  ];
  for(const [rule,expected] of cases) assert.equal(engine.matches(rule,option),expected,rule.type);
});

test('Rule Shift option builder keeps exactly one valid answer',()=>{
  const {config,engine}=loadEngine(()=>0.31);
  const tier=config.RULESHIFT_TIERS.find(item=>item.id==='mixed');
  const rule={type:'colourShape',colour:'red',shape:'circle',size:'large'};
  const options=engine.buildOptions(tier,rule);
  assert.equal(options.length,tier.optionCount);
  assert.equal(options.filter(option=>engine.matches(rule,option)).length,1);
  assert.equal(new Set(options.map(option=>option.id)).size,options.length);
});

test('Rule Shift generated rules respect configured tier sizes and provide readable prompts',()=>{
  const {config,engine}=loadEngine(()=>0);
  const starter=config.RULESHIFT_TIERS.find(item=>item.id==='starter');
  const rule=engine.buildRule(starter,null);
  assert.ok(starter.rules.includes(rule.type));
  assert.equal(rule.size,'large');
  assert.ok(rule.label.length>0);
  assert.ok(rule.brief.length>0);
});

test('Rule Shift feedback and timing rules remain stable',()=>{
  const {engine}=loadEngine();
  assert.equal(
    engine.mismatchFeedback(
      {type:'colourShape',colour:'red',shape:'circle',size:'large'},
      {colour:'blue',shape:'circle',size:'large'}
    ),
    'Colour did not match; shape matched.'
  );
  assert.equal(engine.timeLimitMs({timeLimitMs:5000}),5000);
  assert.equal(engine.timeLimitMs({timeLimitMs:1000}),3000);
  assert.equal(engine.timeLimitMs({}),5000);
});

test('Games Hub core delegates Rule Shift pure logic to the engine authority',()=>{
  const core=fs.readFileSync(corePath,'utf8');
  const source=fs.readFileSync(enginePath,'utf8');
  const html=fs.readFileSync(htmlPath,'utf8');

  assert.match(core,/const RULE_SHIFT_ENGINE_FACTORY = window\.BASELINE_RULE_SHIFT_ENGINE \|\| null/);
  assert.match(core,/rule_shift_engine_authority_missing/);
  assert.match(core,/const buildRuleShiftRule = RULE_SHIFT_ENGINE\.buildRule/);
  assert.match(core,/const ruleShiftMatches = RULE_SHIFT_ENGINE\.matches/);
  assert.match(core,/const ruleShiftMismatchFeedback = RULE_SHIFT_ENGINE\.mismatchFeedback/);
  assert.match(core,/const ruleShiftTimeLimitMs = RULE_SHIFT_ENGINE\.timeLimitMs/);
  assert.match(core,/const buildRuleShiftOptions = RULE_SHIFT_ENGINE\.buildOptions/);

  for(const name of [
    'ruleShiftName','ruleShiftAllOptions','buildRuleShiftRule','ruleShiftMatches',
    'ruleShiftMismatchFeedback','ruleShiftTimeLimitMs','buildRuleShiftOptions'
  ]){
    assert.doesNotMatch(core,new RegExp('function '+name+'\\s*\\('),name+' must not be redefined in core');
  }

  assert.doesNotMatch(source,/document\.|fetch\(|XMLHttpRequest|localStorage|sessionStorage|indexedDB|BaselineGameStorage/);
  assert.doesNotMatch(source,/addEventListener|createElement|innerHTML|classList|history\.|setTimeout|setInterval/);

  const configIndex=html.indexOf('/systems/baseline-games-hub/js/games-core-config.js');
  const engineIndex=html.indexOf('/systems/baseline-games-hub/js/rule-shift-engine.js?v=RULE_SHIFT_ENGINE_AUTHORITY_20261021_1');
  const coreIndex=html.indexOf('/systems/baseline-games-hub/js/baseline-games-hub-core.js?v=RULE_SHIFT_ENGINE_AUTHORITY_20261021_1');
  assert.ok(configIndex>=0&&engineIndex>configIndex&&coreIndex>engineIndex);
});

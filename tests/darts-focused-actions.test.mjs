import test from 'node:test';
import assert from 'node:assert/strict';

import { createDartsDrillActions } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-actions.js';

function harness(){
  const states={};
  const profile={custom:{pressureLevel:1}};
  const records=[];
  const timers=[];
  const renders=[];
  const newRounds=[];
  const auto=[];
  let selected='checkout-pressure';
  let now=1000;

  function resetState(id){
    if(id==='target-lock')states[id]={phase:'ready',target:'T20',feedback:''};
    else if(id==='hold-picture')states[id]={phase:'ready',target:'D16',options:[],feedback:''};
    else if(id==='distraction-resistance')states[id]={phase:'ready',mission:{correct:'T20'},feedback:''};
    else if(id==='pressure-ladder')states[id]={phase:'ready',feedback:''};
    else if(id==='sequence-recall')states[id]={phase:'ready',sequence:[],showIndex:0,input:[],feedback:''};
    return states[id];
  }

  function stateFor(id){
    return states[id]||(states[id]={feedback:''});
  }

  const actions=createDartsDrillActions({
    getProfile:()=>profile,
    getSelected:()=>selected,
    stateFor,
    resetState,
    tierId:()=>1,
    shuffledScenario:()=>({score:100,darts:2,correct:'T20 → D20',options:['T20 → D20']}),
    shuffle:items=>[...items],
    buildSequence:()=>['T20','D16','S19'],
    sequenceDelayForTier:()=>100,
    clearGameTimers:()=>{},
    clearAutoTimer:()=>{},
    scheduleGame:(fn,ms)=>{const timer={fn,ms};timers.push(timer);return timer;},
    renderSelectedGame:()=>renders.push(true),
    record:(gameId,correct,responseMs)=>records.push({gameId,correct,responseMs}),
    elapsedFrom:()=>750,
    autoAdvance:(fn)=>auto.push(fn),
    requestNewRound:id=>newRounds.push(id),
    nowMs:()=>now
  });

  return {
    actions,states,profile,records,timers,renders,newRounds,auto,
    setSelected:id=>{selected=id;},
    setNow:value=>{now=value;}
  };
}

test('Darts action authority accepts an alternative legal checkout route',()=>{
  const h=harness();
  h.states['checkout-pressure']={
    scenario:{score:81,darts:2,correct:'T19 → D12',options:['T19 → D12','T15 → D18'],explanation:'Preferred route.'},
    feedback:''
  };

  h.actions.answerStandard('checkout-pressure','T15 → D18');

  assert.equal(h.records[0].correct,true);
  assert.match(h.states['checkout-pressure'].feedback.text,/also a legal checkout/);
});

test('Darts target-lock action moves from show to recall through managed scheduling',()=>{
  const h=harness();
  h.actions.startTargetLock();
  const state=h.states['target-lock'];
  assert.equal(state.phase,'show');
  assert.equal(h.timers[0].ms,2600);

  h.timers[0].fn();
  assert.equal(state.phase,'recall');
});

test('Darts Pressure Ladder timeout moves pressure level down and records failure',()=>{
  const h=harness();
  h.profile.custom.pressureLevel=2;
  h.actions.startPressure();
  const state=h.states['pressure-ladder'];
  assert.equal(state.level,2);
  assert.equal(state.seconds,16);

  state.timer.fn();

  assert.equal(h.profile.custom.pressureLevel,1);
  assert.deepEqual(h.records[0],{gameId:'pressure-ladder',correct:false,responseMs:16000});
  assert.match(state.feedback.text,/ladder moved down one level/);
});

test('Darts routine action records exact ordered-sequence correctness',()=>{
  const h=harness();
  h.states['routine-builder']={
    scenario:{correct:['A','B','C']},
    order:['A','B','C'],
    feedback:''
  };
  h.actions.submitRoutine();
  assert.equal(h.records[0].correct,true);
  assert.equal(h.states['routine-builder'].feedback.correct,true);
});

test('Darts sequence action records recalled target order',()=>{
  const h=harness();
  h.states['sequence-recall']={
    phase:'recall',
    sequence:['T20','D16'],
    input:[],
    feedback:''
  };
  h.actions.sequenceClick('T20');
  h.actions.sequenceClick('D16');

  assert.equal(h.records[0].gameId,'sequence-recall');
  assert.equal(h.records[0].correct,true);
  assert.equal(h.states['sequence-recall'].feedback.correct,true);
});

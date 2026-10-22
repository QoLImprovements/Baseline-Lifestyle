import test from 'node:test';
import assert from 'node:assert/strict';

import { createDefaultDartsProfile } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-engine.mjs';
import { createDartsDecisionActions } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-decision-actions.js';

function harness(){
  const profile=createDefaultDartsProfile();
  const states={};
  const records=[];
  const timers=[];
  const auto=[];
  const renders=[];
  const lastQuestions={};
  let now=1000;

  function resetState(id){
    states[id]={phase:'categories',category:'',queue:[],index:0,score:0,question:null,options:[],selected:[],confidence:50,paceStage:'',paceResults:{},feedback:''};
    return states[id];
  }
  function stateFor(id){return states[id]||(resetState(id));}

  const actions=createDartsDecisionActions({
    getProfile:()=>profile,
    getTier:()=>1,
    stateFor,
    resetState,
    shuffle:items=>[...items],
    clearGameTimers:()=>{},
    clearAutoTimer:()=>{},
    scheduleGame:(fn,ms)=>{const timer={fn,ms};timers.push(timer);return timer;},
    renderSelectedGame:()=>renders.push(true),
    record:(gameId,correct,responseMs,confidence,category)=>records.push({gameId,correct,responseMs,confidence,category}),
    elapsedFrom:()=>800,
    autoAdvance:(fn,ms)=>auto.push({fn,ms}),
    saveProfile:()=>{},
    setLastQuestion:(category,key)=>{lastQuestions[category]=key;},
    nowMs:()=>now
  });

  return {actions,profile,states,records,timers,auto,renders,lastQuestions,setNow:value=>{now=value;}};
}

test('Decision Training category start builds a Foundation series and remembers question history',()=>{
  const h=harness();
  h.actions.startDecisionCategory('mental-reset');
  const state=h.states['decision-training'];

  assert.equal(state.category,'mental-reset');
  assert.equal(state.queue.length,6);
  assert.equal(state.index,0);
  assert.equal(state.phase,'question');
  assert.ok(h.profile.custom.decisionQuestionHistory['mental-reset'].length>=6);
  assert.equal(h.lastQuestions['mental-reset'],state.question.key);
});

test('Decision Training choice answer records correctness and advances score',()=>{
  const h=harness();
  h.actions.startDecisionCategory('mental-reset');
  const state=h.states['decision-training'];
  const correct=state.question.correct;

  h.actions.answerDecisionChoice(correct);

  assert.equal(h.records[0].gameId,'decision-training');
  assert.equal(h.records[0].correct,true);
  assert.equal(h.records[0].category,'mental-reset');
  assert.equal(state.score,1);
  assert.equal(state.feedback.correct,true);
});

test('Decision Training relevant-information compares selected facts as a set',()=>{
  const h=harness();
  h.states['decision-training']={
    phase:'question',
    category:'relevant-information',
    selected:['darts','score'],
    question:{correct:['score','darts'],explanation:'Keep relevant facts.'},
    score:0,
    feedback:''
  };

  h.actions.submitDecisionFacts();

  assert.equal(h.records[0].correct,true);
  assert.equal(h.states['decision-training'].score,1);
});

test('Decision Training calm pace timeout records the timed result then enters between-state',()=>{
  const h=harness();
  h.states['decision-training']={
    phase:'question',
    category:'pace-control',
    paceStage:'calm',
    question:{calm:{correct:'A',options:['A','B']},rushed:{correct:'A',options:['A','B']}},
    paceResults:{},
    queue:[{}],
    index:0,
    score:0,
    feedback:''
  };

  h.actions.schedulePaceTimeout(h.states['decision-training'],'calm');
  assert.equal(h.timers[0].ms,20000);
  h.timers[0].fn();

  assert.deepEqual(h.states['decision-training'].paceResults.calm,{correct:false,ms:20000});
  assert.equal(h.states['decision-training'].phase,'pace-between');
});

test('Decision Training rushed completion records combined pace comparison',()=>{
  const h=harness();
  h.states['decision-training']={
    phase:'question',
    category:'pace-control',
    paceStage:'rushed',
    question:{calm:{correct:'A',options:['A','B']},rushed:{correct:'A',options:['A','B']}},
    paceResults:{calm:{correct:true,ms:3000}},
    queue:[{}],
    index:0,
    score:0,
    feedback:''
  };

  h.actions.finishPaceAnswer(true,false);

  assert.equal(h.records[0].category,'pace-control');
  assert.equal(h.records[0].correct,true);
  assert.equal(h.states['decision-training'].score,1);
  assert.equal(h.profile.custom.calmComparisons.length,1);
  assert.equal(h.states['decision-training'].phase,'pace-result');
});

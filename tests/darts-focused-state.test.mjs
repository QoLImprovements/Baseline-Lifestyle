import test from 'node:test';
import assert from 'node:assert/strict';

import { createDartsStateFactory } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-state.js';

function factory(){
  return createDartsStateFactory({
    getTier:()=>1,
    shuffledScenario:(pool,key)=>({key,keyName:key,score:100,darts:2,correct:'T20 → D20',facts:{},options:[]}),
    pickScenario:()=>({title:'Routine',correct:['A','B','C']}),
    shuffle:items=>[...items],
    randomItem:items=>items[0],
    nowMs:()=>1234
  });
}

test('Darts state factory preserves canonical ready-state shapes',()=>{
  const createState=factory().createState;

  assert.deepEqual(createState('target-lock'),{phase:'ready',target:'S20',feedback:''});
  assert.deepEqual(createState('hold-picture'),{phase:'ready',target:'S20',options:[],feedback:''});
  assert.deepEqual(createState('pressure-ladder'),{phase:'ready',scenario:null,feedback:''});
  assert.deepEqual(createState('sequence-recall'),{phase:'ready',sequence:[],showIndex:0,input:[],feedback:''});
});

test('Darts checkout and recovery states begin with scenario and response timing',()=>{
  const createState=factory().createState;
  const checkout=createState('checkout-pressure');
  const recovery=createState('route-recovery');

  assert.equal(checkout.startedAt,1234);
  assert.equal(checkout.scenario.keyName,'checkout');
  assert.equal(recovery.startedAt,1234);
  assert.equal(recovery.scenario.keyName,'recovery');
});

test('Darts routine state preserves scenario order as a shuffled working copy',()=>{
  const state=factory().createState('routine-builder');
  assert.equal(state.startedAt,1234);
  assert.deepEqual(state.order,['A','B','C']);
  assert.notEqual(state.order,state.scenario.correct);
});

test('Darts Decision Training starts on the category-selection phase',()=>{
  const state=factory().createState('decision-training');
  assert.equal(state.phase,'categories');
  assert.deepEqual(state.queue,[]);
  assert.equal(state.confidence,50);
  assert.deepEqual(state.paceResults,{});
});

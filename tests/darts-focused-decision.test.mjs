import test from 'node:test';
import assert from 'node:assert/strict';

import { createDefaultDartsProfile } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-engine.mjs';
import {
  decisionCategoryMeta,
  decisionSeriesSizeForTier,
  decisionPoolForTier,
  decisionAccuracyForProfile,
  paceSecondsForTier,
  renderDecisionTrainingView
} from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-decision.js';

test('Decision Training tier helpers preserve current series sizes and pace windows',()=>{
  assert.equal(decisionSeriesSizeForTier(1),6);
  assert.equal(decisionSeriesSizeForTier(2),8);
  assert.equal(decisionSeriesSizeForTier(3),10);
  assert.equal(paceSecondsForTier('calm',1),20);
  assert.equal(paceSecondsForTier('calm',3),12);
  assert.equal(paceSecondsForTier('rushed',1),10);
  assert.equal(paceSecondsForTier('rushed',3),6);
});

test('Decision Training category metadata and pools remain valid across tiers',()=>{
  assert.equal(decisionCategoryMeta('mental-reset').name,'Mental Reset');
  assert.ok(decisionPoolForTier('mental-reset',1).length>0);
  assert.ok(decisionPoolForTier('mental-reset',3).length>=decisionPoolForTier('mental-reset',1).length);
});

test('Decision Training accuracy derives from persisted category progress',()=>{
  const profile=createDefaultDartsProfile();
  profile.custom.decisionCategoryProgress['mental-reset']={attempts:4,correct:3};
  assert.equal(decisionAccuracyForProfile(profile,'mental-reset'),75);
});

test('Decision Training category view renders all six category buttons',()=>{
  const profile=createDefaultDartsProfile();
  const html=renderDecisionTrainingView({phase:'categories'},{profile,tier:2});
  for(const id of ['mental-reset','evidence-reading','relevant-information','impulse-control','confidence-calibration','pace-control']){
    assert.match(html,new RegExp('data-decision-category="'+id+'"'));
  }
});

test('Decision Training pace view uses managed remaining time for the countdown',()=>{
  const profile=createDefaultDartsProfile();
  const state={
    phase:'question',
    category:'pace-control',
    index:0,
    queue:[{}],
    question:{
      calm:{prompt:'Calm?',options:['A','B'],correct:'A'},
      rushed:{prompt:'Fast?',options:['A','B'],correct:'A'}
    },
    options:['A','B'],
    paceStage:'calm',
    paceTimer:{id:'timer'},
    paceResults:{},
    feedback:''
  };
  const html=renderDecisionTrainingView(state,{
    profile,
    tier:1,
    remainingMsForTimer:()=>5000
  });
  assert.match(html,/--pressure-seconds:5s/);
  assert.match(html,/--pressure-start-scale:0\.25/);
});

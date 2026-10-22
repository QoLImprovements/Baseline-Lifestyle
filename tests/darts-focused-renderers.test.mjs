import test from 'node:test';
import assert from 'node:assert/strict';

import { createDefaultDartsProfile } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-engine.mjs';
import { createDartsRenderers } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-renderers.js';

function build(){
  const profile=createDefaultDartsProfile();
  const renderers=createDartsRenderers({
    getProfile:()=>profile,
    tierId:()=>1,
    nextButton:(label='Next round')=>'<button data-next>'+label+'</button>',
    managedTimerRemaining:()=>5000,
    sequenceLengthForTier:()=>3,
    renderDecisionTraining:()=>'<div data-decision-view>Decision</div>'
  });
  return {profile,renderers};
}

test('Darts renderer authority exposes all ten canonical game renderers',()=>{
  const {renderers}=build();
  assert.deepEqual(Object.keys(renderers).sort(),[
    'board-geography','checkout-pressure','decision-training','distraction-resistance',
    'hold-picture','pressure-ladder','route-recovery','routine-builder','sequence-recall','target-lock'
  ].sort());
});

test('checkout renderer keeps selectable routes and feedback controls',()=>{
  const {renderers}=build();
  const html=renderers['checkout-pressure']({
    scenario:{score:100,darts:2,opponent:40,options:['T20 → D20','T16 → D26']},
    feedback:''
  });
  assert.match(html,/Choose the legal checkout route/);
  assert.match(html,/data-darts-answer="checkout-pressure"/);
  assert.match(html,/T20 → D20/);
});

test('pressure renderer derives visible countdown from managed timer remaining time',()=>{
  const {profile,renderers}=build();
  profile.custom.pressureLevel=2;
  const html=renderers['pressure-ladder']({
    phase:'question',
    level:2,
    seconds:16,
    timer:{id:'timer'},
    scenario:{score:100,darts:2,opponent:40,options:['T20 → D20']},
    feedback:''
  });
  assert.match(html,/--pressure-seconds:5s/);
  assert.match(html,/--pressure-start-scale:0\.3125/);
});

test('Decision Training renderer delegates to its specialist authority',()=>{
  const {renderers}=build();
  assert.match(renderers['decision-training']({phase:'categories'}),/data-decision-view/);
});

test('sequence renderer preserves current three-target Foundation instruction',()=>{
  const {renderers}=build();
  const html=renderers['sequence-recall']({phase:'ready',feedback:''});
  assert.match(html,/Remember a 3-target plan/);
  assert.match(html,/data-start-sequence/);
});

import test from 'node:test';
import assert from 'node:assert/strict';

import {
  poolForTier,
  pickScenarioWithHistory,
  shuffledScenarioOptions,
  targetsForTier,
  sequenceLengthForTier,
  sequenceDelayForTier,
  buildTargetSequence,
  createGeographyPrompt
} from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-rounds.js';
import { CHECKOUT_SCENARIOS } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-content.js';

test('Darts round pools respect tier ceilings',()=>{
  const tier1=poolForTier(CHECKOUT_SCENARIOS,1);
  const tier3=poolForTier(CHECKOUT_SCENARIOS,3);
  assert.ok(tier1.length>0);
  assert.ok(tier3.length>=tier1.length);
  assert.ok(tier1.every(item=>item.tier<=1));
});

test('Darts recent-history selection avoids recent scenarios when alternatives exist',()=>{
  const pool=CHECKOUT_SCENARIOS.filter(item=>item.tier===1).slice(0,4);
  const first=pool[0].key;
  const result=pickScenarioWithHistory(pool,1,[first]);
  assert.notEqual(result.scenario.key,first);
  assert.equal(result.history.at(-1),result.scenario.key);
  assert.ok(result.history.length<=4);
});

test('Darts shuffled scenario options preserve the selectable answer set',()=>{
  const scenario=CHECKOUT_SCENARIOS[0];
  const shuffled=shuffledScenarioOptions(scenario,()=>0);
  assert.deepEqual([...shuffled.options].sort(),[...scenario.options].sort());
  assert.equal(shuffled.correct,scenario.correct);
});

test('Darts sequence rules preserve tier length and adjacent-target separation',()=>{
  assert.equal(sequenceLengthForTier(1),3);
  assert.equal(sequenceLengthForTier(2),4);
  assert.equal(sequenceLengthForTier(3),5);
  assert.equal(sequenceDelayForTier(1),1150);
  assert.equal(sequenceDelayForTier(3),720);

  for(const tier of [1,2,3]){
    const sequence=buildTargetSequence(tier);
    assert.equal(sequence.length,sequenceLengthForTier(tier));
    for(let i=1;i<sequence.length;i++)assert.notEqual(sequence[i],sequence[i-1]);
    assert.ok(sequence.every(target=>targetsForTier(tier).includes(target)));
  }
});

test('Darts geography prompts preserve Foundation relationship limits',()=>{
  for(let i=0;i<20;i++){
    const prompt=createGeographyPrompt(1);
    assert.ok(['clockwise','anticlockwise'].includes(prompt.relationship));
    assert.ok(Number.isInteger(prompt.answer));
  }
});

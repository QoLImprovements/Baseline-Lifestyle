import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require=createRequire(import.meta.url);
const fitness=require('../systems/baseline-fitness/js/baseline-fitness-app.js');

test('saved Straight Sets remain equal in future sessions',()=>{
  const plan=fitness.normalisePlan({
    startDate:'2026-08-19',frequency:'3x',sessions:18,
    items:[
      { exercise:'Reverse Lunges',baseline:110,sets:3,progressionType:fitness.TYPES.LEG,progressionMode:'straight-sets',repIncrease:3 },
      { exercise:'Side Lunges',baseline:110,sets:3,progressionType:fitness.TYPES.LEG,progressionMode:'straight-sets',repIncrease:3 },
      { exercise:'Cross-Body Mountain Climbers',baseline:20,sets:3,progressionType:fitness.TYPES.STANDARD,progressionMode:'straight-sets',repIncrease:1 },
      { exercise:'Reverse Elbow Plank',baseline:133,progressionType:fitness.TYPES.TIMED,progressionMode:'timed-hold' }
    ]
  });

  assert.equal(plan.items[0].progressionMode,'straight-sets');
  assert.equal(plan.items[0].repIncrease,3,'per-set increase is not doubled for per-side exercises');

  const first=fitness.workForSession(plan.items,1);
  assert.deepEqual(first[0].values,[88,88,88]);
  assert.deepEqual(first[1].values,[88,88,88]);
  assert.deepEqual(first[2].values,[16,16,16]);
  assert.equal(first[3].hold,133);

  const second=fitness.workForSession(plan.items,2);
  assert.deepEqual(second[0].values,[91,91,91]);
  assert.deepEqual(second[1].values,[91,91,91]);
  assert.deepEqual(second[2].values,[17,17,17]);
  assert.equal(second[3].hold,135);
});

test('legacy plans keep the established non-equal set distribution',()=>{
  assert.deepEqual(fitness.setValues(20,3),[15,14,16]);
  assert.deepEqual(fitness.workForSession([{ exercise:'Knee Pushups',baseline:20,sets:3 }],1)[0].values,[15,14,16]);
});

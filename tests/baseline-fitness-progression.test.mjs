import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT?path.resolve(process.env.BASELINE_REPO_ROOT):path.resolve(here,'..');
const require=createRequire(import.meta.url);
const fitness=require(path.join(root,'systems/baseline-fitness/js/baseline-fitness-app.js'));
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');

test('Session 1 preserves the agreed unequal baseline percentages',()=>{
  assert.deepEqual(fitness.setValues(20,3),[15,14,16]);
  assert.notEqual(new Set(fitness.setValues(20,3)).size,1);
});

test('standard rep exercises progress every set by one from Session 1',()=>{
  assert.deepEqual(fitness.progressedSetValues(10,3,1,fitness.TYPES.STANDARD),[8,7,9]);
  assert.deepEqual(fitness.progressedSetValues(10,3,2,fitness.TYPES.STANDARD),[9,8,10]);
  assert.deepEqual(fitness.progressedSetValues(10,3,3,fitness.TYPES.STANDARD),[10,9,11]);
});

test('leg-reps add three repetitions to every set',()=>{
  const expected=[[15,14,16],[18,17,19],[21,20,22],[24,23,25]];
  assert.deepEqual(expected.map((_,index)=>fitness.progressedSetValues(20,3,index+1,fitness.TYPES.LEG)),expected);
  assert.deepEqual(fitness.progressedSetValues(20,3,4,fitness.TYPES.LEG),expected[3]);
});

test('exercise definitions own progression behavior',()=>{
  const squat=fitness.work([{exercise:'Squats',baseline:20,sets:3}],4)[0];
  const pushUps=fitness.work([{exercise:'Push-Ups',baseline:20,sets:3}],4)[0];
  assert.equal(squat.progressionType,fitness.TYPES.LEG);
  assert.deepEqual(squat.values,[24,23,25]);
  assert.equal(pushUps.progressionType,fitness.TYPES.STANDARD);
  assert.deepEqual(pushUps.values,[18,17,19]);
});

test('timed holds retain the current seconds progression guide',()=>{
  const plank=fitness.work([{exercise:'Plank',baseline:20}],4)[0];
  assert.equal(plank.unit,'seconds');
  assert.equal(plank.progressionType,fitness.TYPES.TIMED);
  assert.equal(plank.hold,29);
  assert.equal('values' in plank,false);
});

test('older saved plans acquire progressionType from exercise data',()=>{
  const migrated=fitness.normalisePlan({version:4,sessions:4,items:[
    {exercise:'Squats',baseline:20,sets:3},
    {exercise:'Push-Ups',baseline:10,sets:3},
    {exercise:'Plank',baseline:20}
  ]});
  assert.deepEqual(migrated.items.map(item=>item.progressionType),[
    fitness.TYPES.LEG,fitness.TYPES.STANDARD,fitness.TYPES.TIMED
  ]);
});

test('Fitness uses one canonical application file',()=>{
  const html=read('systems/baseline-fitness/baseline-fitness.html');
  assert.equal(fs.existsSync(path.join(root,'systems/baseline-fitness/js/baseline-fitness-runtime-v3.js')),false);
  assert.equal(fs.existsSync(path.join(root,'systems/baseline-fitness/js/.htaccess')),false);
  assert.equal((html.match(/\/systems\/baseline-fitness\/js\/baseline-fitness-app\.js/g)||[]).length,1);
});


test('Workout Routine uses optional per-exercise captions instead of the old summary panel',()=>{
  const html=read('systems/baseline-fitness/baseline-fitness.html');
  const app=read('systems/baseline-fitness/js/baseline-fitness-app.js');
  assert.doesNotMatch(html,/id="exerciseDetails"/);
  assert.match(app,/exercise-info-button/);
  assert.match(app,/Good for:/);
  assert.match(app,/BASELINE_info\?\.refresh/);
  assert.match(app,/aria-expanded/);
});

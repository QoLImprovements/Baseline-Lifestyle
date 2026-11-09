import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const fitness=require('../systems/baseline-fitness/js/baseline-fitness-app.js');
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const html=read('systems/baseline-fitness/baseline-fitness.html');
const app=read('systems/baseline-fitness/js/baseline-fitness-app.js');
const workspace=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
const summary=read('systems/baseline-fitness/js/fitness-routine-summary-v2.js');
const bridge=read('systems/baseline-fitness/js/fitness-saved-data-bridge.js');
const state=read('systems/baseline-fitness/api/fitness_state.php');
test('main Fitness tab says My Workout without breaking saved URLs',()=>{
  assert.match(html,/data-target="my-plan">My Workout<\/button>/);
  assert.match(workspace,/topTab\.textContent = 'My Workout'/);
  assert.match(html,/my-routine\\\/plan/);
});
test('exercise ordering separates straight and alternating sets',()=>{
  const a={item:{name:'Knee Push-Ups',laterality:'bilateral'},unit:'reps',values:[5,6]};
  const b={item:{name:'Squats',laterality:'bilateral'},unit:'reps',values:[10,11]};
  assert.deepEqual(fitness.executionSteps([a,b]).map(x=>x.exercise),['Knee Push-Ups','Squats','Knee Push-Ups','Squats']);
  assert.deepEqual(fitness.executionSteps([a,b],'straight').map(x=>x.exercise),['Knee Push-Ups','Knee Push-Ups','Squats','Squats']);
  assert.match(html,/id="executionOrder"/);
});
test('working targets are independent from maximum baselines',()=>{
  const item={exercise:'Knee Push-Ups',baseline:20,sets:3,progressionMode:'straight-sets',repIncrease:1,workingPercent:70};
  const def=fitness.EXERCISES.find(x=>x.name===item.exercise);
  assert.deepEqual(fitness.planSetValues(item,def,1),[14,14,14]);
  assert.deepEqual(fitness.planSetValues({...item,workingPercent:80},def,1),[16,16,16]);
  const hold=fitness.workForSession([{exercise:'Elbow Plank',baseline:40,workingPercent:50}],1)[0];
  assert.equal(hold?.hold,20);
});
test('timed results use achieved duration rather than forced success',()=>{
  assert.match(app,/Number\(achieved\) >= Number\(step\.target\) \? 'success' : 'failed'/);
  assert.match(app,/Below target/);
});
test('workout calendar includes calisthenics and distinct activity statuses',()=>{
  assert.match(workspace,/getPlansForDate\?\.\(date\)/);
  assert.match(workspace,/partial','skipped','rescheduled/);
  assert.match(read('systems/baseline-fitness/api/routine_state.php'),/'status'=>!empty\(\$raw\['completed'\]\)/);
});
test('Body Trends uses real server-backed dated snapshots',()=>{
  assert.match(html,/data-body-view="trends">Body Trends/);
  assert.match(read('.htaccess'),/my-body\/\(profile\|trends\|services\)/);
  assert.match(bridge,/getBodyHistory/);
  assert.match(state,/'bodyHistory'=>array_values/);
  assert.match(state,/\$history\[\] = \['date'=>\$date,'profile'=>\$profile\]/);
});
test('summary and achievements integrate all activity categories',()=>{
  assert.match(summary,/weeklyTrainingOverview/);
  assert.match(summary,/completedPlans=plans\(\)/);
  assert.match(app,/Two activity categories/);
  assert.match(app,/getBodyHistory\?\.\(\)/);
});
test('library offers exercise technique and starts a plan',()=>{
  assert.match(app,/item\.family===group/);
  assert.match(app,/data-fitness-library-use/);
  assert.match(app,/Common error:/);
});

test('recovery, maintenance and reassessment are optional explicit plan rules',()=>{
  const empty=fitness.normaliseTrainingLoad({});
  assert.equal(empty.deloadEvery,0);
  assert.equal(empty.maintenanceEvery,0);
  assert.equal(empty.reassessEvery,0);
  const config={deloadEvery:4,deloadPercent:70,maintenanceEvery:6,reassessEvery:8};
  assert.equal(fitness.isRecoverySession(config,4),true);
  assert.equal(fitness.isRecoverySession(config,5),false);
  assert.equal(fitness.isMaintenanceSession(config,6),true);
  assert.equal(fitness.isBaselineCheckIn(config,8),true);
  assert.equal(fitness.applyTrainingLoad(20,config,4),14);
  assert.equal(fitness.applyTrainingLoad(20,config,3),20);
  assert.equal(fitness.normaliseTrainingLoad({deloadEvery:4,deloadPercent:5}).deloadPercent,70);
  const def=fitness.EXERCISES.find(x=>x.name==='Knee Push-Ups');
  const item={exercise:'Knee Push-Ups',baseline:20,sets:3,progressionMode:'straight-sets',workingPercent:80,repIncrease:1};
  assert.deepEqual(fitness.planSetValues(item,def,4),[19,19,19]);
  assert.deepEqual(fitness.planSetValues(item,def,4,config),[13,13,13]);
  assert.deepEqual(fitness.planSetValues(item,def,3,config),[18,18,18]);
  assert.match(read('systems/baseline-fitness/js/fitness-live-policy-v1.js'),/outcome\.maintenance===true\?0:/);
  assert.match(read('systems/baseline-fitness/api/fitness_state.php'),/\$record\['maintenance'\] = !empty\(\$raw\['maintenance'\]\)/);
});

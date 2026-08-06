import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Calisthenics multi-plan controls are searchable, scoped and include the expanded catalogue', () => {
  const plans = read('systems/baseline-fitness/js/fitness-multiple-plans.js');
  assert.match(plans, /input\.type = 'search'/);
  assert.match(plans, /calisthenicsExerciseOptions/);
  assert.match(plans, /function matchExercise/);
  assert.match(plans, /Choose an exercise from the list/);
  assert.match(plans, /add\('Side Lunges'/);
  assert.match(plans, /add\('Cossack Squats'/);
  assert.match(plans, /add\('Split Squats'/);
  assert.match(plans, /function createPlan/);
  assert.match(plans, /function openPlan/);
  assert.match(plans, /listObserver\.observe\(list,\{ childList:true \}\)/);
  assert.doesNotMatch(plans, /observe\(document\.documentElement/);
});

test('Fitness My Routine loader is deterministic and does not restore the discarded canonical system', () => {
  const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  assert.doesNotMatch(loader, /setInterval/);
  assert.doesNotMatch(loader, /fitness-routine-canonical|baseline-routine-canonical-v1/);
  assert.match(loader, /baseline-fitness-plan-control-authority-v1\.js/);
  assert.match(loader, /baseline-public-routine-groups-v1\.js/);
  assert.match(loader, /loadWithoutMutationObserver\('\/sitewide\/js\/baseline-routine-coherence-v4\.js/);
  assert.ok(loader.indexOf('baseline-fitness-plan-control-authority-v1.js') < loader.indexOf('baseline-routine-coherence-v4.js'));
  assert.ok(loader.indexOf('baseline-public-routine-groups-v1.js') < loader.indexOf('baseline-routine-coherence-v4.js'));
});

test('multi-plan create and saved-plan dropdown have one capture-level runtime owner', () => {
  const authority = read('sitewide/js/baseline-fitness-plan-control-authority-v1.js');
  assert.match(authority, /#createCalisthenicsPlan/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.createPlan/);
  assert.match(authority, /calisthenicsPlanSelect/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.openPlan/);
  assert.match(authority, /stopImmediatePropagation/);
});

test('public routine viewer preserves saved custom groups and does not add a public calendar', () => {
  const controller = read('sitewide/js/baseline-public-routine-groups-v1.js');
  assert.match(controller, /public_routine_grouped\.php/);
  assert.match(controller, /data-public-routine-group/);
  assert.match(controller, /publicRoutine\.groups/);
  assert.match(controller, /publicRoutine\.assignments/);
  assert.match(controller, /Ungrouped routine actions/);
  assert.match(controller, /Ungrouped routine items/);
  assert.doesNotMatch(controller, /weeklyCalendar|publicCalendar|Public Routine Calendar/);
});

test('public group APIs persist Fitness grouping and never expose completion logs', () => {
  const schema = read('systems/baseline-fitness/api/schema.php');
  const groups = read('systems/baseline-fitness/api/routine_groups.php');
  const publicFitness = read('systems/baseline-fitness/api/public_routine_grouped.php');
  const skin = read('systems/baseline-natural-skincare/api/routine_state.php');
  assert.match(schema, /CREATE TABLE IF NOT EXISTS fitness_routine_groups/);
  assert.match(groups, /groups_json/);
  assert.match(groups, /assignments_json/);
  assert.match(publicFitness, /fitness_routine_groups/);
  assert.match(publicFitness, /'groups'=>\$groups/);
  assert.match(publicFitness, /'assignments'=>\$assignments/);
  assert.doesNotMatch(publicFitness, /logs_json|completedAt|completion log/i);
  assert.match(skin, /'groups'=>\$groups/);
  assert.match(skin, /'assignments'=>\$assignments/);
});

test('live stability no longer owns routine rendering or broad routine repair observers', () => {
  const bootstrap = read('sitewide/js/baseline-live-stability.js');
  const groupCompletion = read('sitewide/js/baseline-routine-group-completion-v1.js');
  assert.doesNotMatch(bootstrap, /installRoutineInterfaceRepairs|routineLogItems|fitnessRoutineLogItems/);
  assert.match(bootstrap, /baseline-live-stability-core-v3\.js/);
  assert.match(bootstrap, /baseline-unified-favorites-v1\.js/);
  assert.match(bootstrap, /baseline-detect-word-feedback-v1\.js/);
  assert.match(groupCompletion, /observer\.observe\(target, \{ childList:true, subtree:true \}\)/);
  assert.doesNotMatch(groupCompletion, /observe\(document\.documentElement|observe\(document\.body/);
});

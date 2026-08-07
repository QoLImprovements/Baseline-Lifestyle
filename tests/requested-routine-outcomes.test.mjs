import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Calisthenics catalogue remains comprehensive and contains the requested movements', () => {
  const plans = read('systems/baseline-fitness/js/fitness-multiple-plans.js');
  assert.match(plans, /input\.type = 'search'/);
  assert.match(plans, /calisthenicsExerciseOptions/);
  assert.match(plans, /add\('Side Lunges'/);
  assert.match(plans, /add\('Cross-Body Mountain Climbers'/);
  assert.match(plans, /add\('Lateral Lunge with Rotational Reach'/);
  assert.match(plans, /Dynamic Core & Climbers/);
  assert.match(plans, /function createPlan/);
  assert.match(plans, /function openPlan/);
  assert.match(plans, /listObserver\.observe\(list,\{ childList:true \}\)/);
  assert.doesNotMatch(plans, /observe\(document\.documentElement/);
});

test('Skincare and Fitness load one shared final My Routine authority without superseded repair layers', () => {
  const skincare = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
  const fitness = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  for (const loader of [skincare, fitness]) {
    assert.match(loader, /baseline-routine-authority-v7\.js/);
    assert.match(loader, /baseline-public-routine-groups-v1\.js/);
    assert.doesNotMatch(loader, /baseline-routine-live-authority-v1\.js/);
    assert.doesNotMatch(loader, /baseline-routine-coherence-events-v4\.js/);
    assert.doesNotMatch(loader, /baseline-routine-coherence-v4\.js/);
  }
  assert.doesNotMatch(skincare, /baseline-skincare-routine-state-bridge-v1\.js/);
  assert.doesNotMatch(fitness, /baseline-fitness-routine-summary-bridge-v1\.js/);
  assert.match(skincare, /data-skincare-routine-booting/);
  assert.match(fitness, /data-fitness-routine-booting/);
});

test('multi-plan create and saved-plan dropdown retain one capture-level controller', () => {
  const authority = read('sitewide/js/baseline-fitness-plan-control-authority-v1.js');
  const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  assert.match(authority, /#createCalisthenicsPlan/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.createPlan/);
  assert.match(authority, /calisthenicsPlanSelect/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.openPlan/);
  assert.match(authority, /stopImmediatePropagation/);
  assert.ok(loader.indexOf('baseline-fitness-plan-control-authority-v1.js') < loader.indexOf('baseline-routine-authority-v7.js'));
});

test('Public Routines share User Log Summary and Plan views with saved grouping and week completion', () => {
  const viewer = read('sitewide/js/baseline-public-routine-groups-v1.js');
  assert.match(viewer, /public_routine_v2\.php/);
  assert.match(viewer, /User's Log/);
  assert.match(viewer, /User's Routine Summary/);
  assert.match(viewer, /User's Plan/);
  assert.match(viewer, /bl-public-v2-calendar/);
  assert.match(viewer, /normaliseGroups\(data\.groups\)/);
  assert.match(viewer, /normaliseAssignments\(data\.assignments/);
  assert.match(viewer, /Ungrouped routine actions/);
  assert.match(viewer, /Ungrouped routine items/);
  assert.match(viewer, /remaining/);
  assert.doesNotMatch(viewer, /localStorage\.setItem\([^\n]*publicRoutine/i);
});

test('shared Routine authority keeps numbering stable, filters both systems and preserves Skincare group order', () => {
  const authority = read('sitewide/js/baseline-routine-authority-v7.js');
  assert.match(authority, /counter-reset:blPlanNumber/);
  assert.match(authority, /counter-reset:blLogNumber/);
  assert.match(authority, /routine-plan-group-ungrouped/);
  assert.match(authority, /function applySkinSummaryFilter/);
  assert.match(authority, /function applyFitnessSummaryFilter/);
  assert.match(authority, /const desired = data\.groups\.map/);
  assert.match(authority, /value\.startsWith\('entity:'\)/);
  assert.match(authority, /function handleGroupedMove/);
  assert.match(authority, /data-v7-group-complete/);
  assert.doesNotMatch(authority, /setInterval/);
});

test('Calisthenics generator keeps concise aligned controls and explicit progression rules', () => {
  const progression = read('systems/baseline-fitness/js/fitness-generator-progression-v1.js');
  const layout = read('systems/baseline-fitness/css/fitness-multiple-plans.css');
  assert.match(progression, /LINEAR:'linear-fixed'/);
  assert.match(progression, /Linear — fixed set progression/);
  assert.match(progression, /Straight Sets — equal reps/);
  assert.match(progression, /definition\.familyKey === 'lunges'/);
  assert.match(progression, /Rep Increase Per Session/);
  assert.match(progression, /finalSet = Math\.max\(1, Math\.round\(max \* 0\.80\)\)/);
  assert.match(progression, /3:\[-1,-2,0\]/);
  assert.match(progression, /function progressedTargets/);
  assert.match(progression, /ex-details-card/);
  assert.match(progression, /ex-picker-group/);
  assert.match(progression, /data-exercise-name/);
  assert.doesNotMatch(progression, /percentage-based sets/);
  assert.doesNotMatch(progression, /commonly called straight sets or sets across/);
  assert.match(layout, /grid-template-areas/);
  assert.match(layout, /ex-details-card/);
  assert.match(layout, /ex-picker-menu/);
  assert.match(layout, /ex-picker-group-head/);
});

test('exercise picker is opaque foreground UI and validation cannot trap normal navigation', () => {
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  assert.match(policy, /z-index:100002!important/);
  assert.match(policy, /background:#10090c!important/);
  assert.match(policy, /pointer-events:auto!important/);
  assert.match(policy, /ex-picker-inline-status/);
  assert.match(policy, /Select an exercise from the results/);
  assert.match(policy, /event\.target\.setCustomValidity\(''\)/);
  assert.match(policy, /#cancelEditPlanBtn/);
  assert.doesNotMatch(policy, /reportValidity/);
});

test('weekly frequency range is optional and weekly-count plans do not create UI due-day suggestions', () => {
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  assert.match(policy, /Range<\/label>/);
  assert.match(policy, /Not Selected/);
  assert.match(policy, /value<=7/);
  assert.match(policy, /frequencyRangeMax/);
  assert.match(policy, /flexibleWeekly = true/);
  assert.match(policy, /next\.access\.can = true/);
  assert.match(policy, /Current workout available within your weekly frequency/);
  assert.match(policy, /getPlansForDate\(date\)/);
  assert.match(policy, /entry\?\.status !== 'due'/);
  assert.match(policy, /specific-days/);
});

test('specific-day workouts can be deliberately started early while weekly-count workouts need no unlock', () => {
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  assert.match(policy, /Start Early\?/);
  assert.match(policy, /data-start-early="yes"/);
  assert.match(policy, /data-start-early="no"/);
  assert.match(policy, /startEarlyRequired/);
  assert.match(policy, /flexibleWeekly/);
  assert.match(policy, /next\.startEarlyRequired = false/);
});

test('the same exercise shares progression across multiple Calisthenics plans', () => {
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  assert.match(policy, /function plansContaining/);
  assert.match(policy, /function completedSharedSessions/);
  assert.match(policy, /function applySharedProgression/);
  assert.match(policy, /completedSharedSessions\(exercise\)\+1/);
  assert.match(policy, /progressedTargets/);
  assert.match(policy, /holdTarget/);
});

test('Skincare exposes the full maintained product catalogue by brand in Routine Plan', () => {
  const authority = read('sitewide/js/baseline-routine-authority-v7.js');
  const library = read('systems/baseline-natural-skincare/js/skincare-product-library.js');
  assert.match(authority, /const products = Array\.isArray\(library\?\.PRODUCTS\)/);
  assert.match(authority, /const byBrand = new Map/);
  assert.match(authority, /<optgroup label=/);
  assert.match(library, /product\('boots-glycerin-rosewater'/);
  assert.match(library, /product\('cerave-hydrating-cleanser'/);
  assert.match(library, /product\('currentbody-multilight'/);
});

test('public APIs expose completion state required for public week logs without log notes', () => {
  const fitness = read('systems/baseline-fitness/api/public_routine_v2.php');
  const skincare = read('systems/baseline-natural-skincare/api/public_routine_v2.php');
  for (const api of [fitness, skincare]) {
    assert.match(api, /'logs'=>\$logs/);
    assert.match(api, /'completed'=>!empty/);
    assert.match(api, /'completedAt'=>\$completedAt/);
    assert.match(api, /'groups'=>\$groups/);
    assert.match(api, /'assignments'=>\$assignments/);
  }
  const fitnessLogFunction = fitness.slice(fitness.indexOf('function bl_public_fitness_v2_logs'), fitness.indexOf('function bl_public_fitness_v2_plan_json'));
  const skinLogFunction = skincare.slice(skincare.indexOf('function bl_public_skin_logs'), skincare.indexOf('function bl_public_skin_groups'));
  assert.doesNotMatch(fitnessLogFunction, /'note'=>/);
  assert.doesNotMatch(skinLogFunction, /'note'=>/);
});

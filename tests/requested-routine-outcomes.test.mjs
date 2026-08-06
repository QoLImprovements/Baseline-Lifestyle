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

test('Fitness My Routine loader uses the shared live authority and omits the competing summary bridge', () => {
  const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  assert.doesNotMatch(loader, /setInterval/);
  assert.doesNotMatch(loader, /fitness-routine-canonical|baseline-routine-canonical-v1/);
  assert.doesNotMatch(loader, /baseline-fitness-routine-summary-bridge-v1\.js/);
  assert.match(loader, /baseline-fitness-plan-control-authority-v1\.js/);
  assert.match(loader, /baseline-public-routine-groups-v1\.js/);
  assert.match(loader, /baseline-routine-live-authority-v1\.js/);
  assert.match(loader, /fitness-generator-progression-v1\.js/);
  assert.match(loader, /loadWithoutMutationObserver\('\/sitewide\/js\/baseline-routine-coherence-v4\.js/);
  assert.ok(loader.indexOf('baseline-fitness-plan-control-authority-v1.js') < loader.indexOf('baseline-routine-coherence-v4.js'));
  assert.ok(loader.indexOf('baseline-public-routine-groups-v1.js') < loader.indexOf('baseline-routine-coherence-v4.js'));
});

test('Skincare and Fitness use the same final My Routine authority', () => {
  const skincare = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
  const fitness = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  assert.match(skincare, /baseline-routine-live-authority-v1\.js/);
  assert.match(fitness, /baseline-routine-live-authority-v1\.js/);
  assert.match(skincare, /SITEWIDE_ROUTINE_COHERENCE_EVENTS_20260806_5/);
  assert.match(fitness, /SITEWIDE_ROUTINE_COHERENCE_EVENTS_20260806_5/);
});

test('multi-plan create and saved-plan dropdown have one capture-level runtime owner', () => {
  const authority = read('sitewide/js/baseline-fitness-plan-control-authority-v1.js');
  const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  assert.match(authority, /#createCalisthenicsPlan/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.createPlan/);
  assert.match(authority, /calisthenicsPlanSelect/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.openPlan/);
  assert.match(authority, /stopImmediatePropagation/);
  assert.doesNotMatch(loader, /baseline-fitness-routine-summary-bridge-v1\.js/);
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

test('summary filtering is final-authority controlled and Skincare follows saved group order', () => {
  const authority = read('sitewide/js/baseline-routine-live-authority-v1.js');
  const css = read('sitewide/css/baseline-routine-live-authority-v1.css');
  assert.match(authority, /function applySkinSummaryFilter/);
  assert.match(authority, /function applyFitnessSummaryFilter/);
  assert.match(authority, /const desired = data\.groups\.map/);
  assert.match(authority, /const sameOrder =/);
  assert.match(authority, /value\.startsWith\('entity:'\)/);
  assert.match(authority, /dataset\.blLiveFilterHidden/);
  assert.match(css, /#routineSummary \[data-bl-live-filter-hidden=\"true\"\]/);
  assert.match(css, /#fitnessExerciseSummary \[data-bl-live-filter-hidden=\"true\"\]/);
});

test('Calisthenics generator exposes explicit defaults including straight sets for lunges', () => {
  const progression = read('systems/baseline-fitness/js/fitness-generator-progression-v1.js');
  const layout = read('systems/baseline-fitness/css/fitness-multiple-plans.css');
  assert.match(progression, /STRAIGHT:'straight-sets'/);
  assert.match(progression, /Linear — percentage-based sets/);
  assert.match(progression, /Straight Sets — equal reps/);
  assert.match(progression, /definition\.familyKey === 'lunges'/);
  assert.match(progression, /Rep Increase Per Session/);
  assert.match(progression, /100, 100, 100 → 110, 110, 110/);
  assert.match(progression, /progressionMode/);
  assert.match(progression, /__baselineStraightSetsFinalAuthority/);
  assert.match(layout, /grid-template-areas/);
  assert.match(layout, /ex-field-progression-mode/);
  assert.match(layout, /#startDate/);
});

test('Skincare exposes the full maintained product catalogue by brand in Routine Plan', () => {
  const authority = read('sitewide/js/baseline-routine-live-authority-v1.js');
  const library = read('systems/baseline-natural-skincare/js/skincare-product-library.js');
  assert.match(authority, /const products = Array\.isArray\(library\?\.PRODUCTS\)/);
  assert.match(authority, /const byBrand = new Map/);
  assert.match(authority, /<optgroup label=\"\$\{esc\(brand\)\}\">/);
  assert.match(library, /product\('boots-glycerin-rosewater'/);
  assert.match(library, /product\('cerave-hydrating-cleanser'/);
  assert.match(library, /product\('currentbody-multilight'/);
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

test('live stability no longer owns routine rendering and group completion observes only log replacement', () => {
  const bootstrap = read('sitewide/js/baseline-live-stability.js');
  const groupCompletion = read('sitewide/js/baseline-routine-group-completion-v1.js');
  const events = read('sitewide/js/baseline-routine-coherence-events-v4.js');
  assert.doesNotMatch(bootstrap, /installRoutineInterfaceRepairs|routineLogItems|fitnessRoutineLogItems/);
  assert.match(bootstrap, /baseline-live-stability-core-v3\.js/);
  assert.match(bootstrap, /baseline-unified-favorites-v1\.js/);
  assert.match(bootstrap, /baseline-detect-word-feedback-v1\.js/);
  assert.match(groupCompletion, /observer\.observe\(target, \{ childList:true, subtree:false \}\)/);
  assert.doesNotMatch(groupCompletion, /observe\(document\.documentElement|observe\(document\.body/);
  assert.doesNotMatch(events, /decorateSkinLogNumbers|decorateFitnessLogNumbers|startAnotherPlan/);
});

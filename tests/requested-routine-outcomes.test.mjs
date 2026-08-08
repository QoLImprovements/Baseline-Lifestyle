import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const stability = read('sitewide/js/baseline-routine-stability-v11.js');
const stabilityCss = read('sitewide/css/baseline-routine-stability-v11.css');

test('Calisthenics catalogue remains comprehensive and contains requested movements', () => {
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

test('Skincare and Fitness share one final stable My Routine layer without superseded render authorities', () => {
  const skincare = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
  const fitness = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  for (const loader of [skincare, fitness]) {
    assert.match(loader, /baseline-routine-stability-v11\.js/);
    assert.match(loader, /baseline-public-routine-groups-v1\.js/);
    assert.doesNotMatch(loader, /baseline-routine-authority-v7\.js/);
    assert.doesNotMatch(loader, /baseline-routine-experience-v9\.js/);
    assert.doesNotMatch(loader, /baseline-routine-experience-v10\.js/);
    assert.doesNotMatch(loader, /baseline-routine-live-authority-v1\.js/);
    assert.doesNotMatch(loader, /baseline-routine-coherence-events-v4\.js/);
  }
  assert.match(skincare, /waitForBaseRoutine/);
  assert.match(fitness, /fitness-routine-coherence-v1\.js/);
  assert.match(fitness, /fitness-theme-guard-v1\.js/);
});

test('multi-plan create and saved-plan dropdown retain one capture-level controller before final stability decoration', () => {
  const authority = read('sitewide/js/baseline-fitness-plan-control-authority-v1.js');
  const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  assert.match(authority, /#createCalisthenicsPlan/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.createPlan/);
  assert.match(authority, /calisthenicsPlanSelect/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.openPlan/);
  assert.match(authority, /stopImmediatePropagation/);
  assert.ok(loader.indexOf('baseline-fitness-plan-control-authority-v1.js') < loader.indexOf('baseline-routine-stability-v11.js'));
});

test('Public Routines expose User Log Summary and actual Plan using saved grouping', () => {
  const viewer = read('sitewide/js/baseline-public-routine-groups-v1.js');
  assert.match(viewer, /public_routine_v2\.php/);
  assert.match(viewer, /User's Log/);
  assert.match(viewer, /User's Routine Summary/);
  assert.match(viewer, /User's Plan/);
  assert.match(viewer, /bl-public-v3-calendar/);
  assert.match(viewer, /function skinSummaryHtml/);
  assert.match(viewer, /function fitnessSummaryHtml/);
  assert.match(viewer, /function fitnessPlanHtml/);
  assert.match(viewer, /Purpose:/);
  assert.match(viewer, /Technique:/);
  assert.match(viewer, /Baseline \$\{Number\(item\.baseline/);
  assert.doesNotMatch(viewer, /localStorage\.setItem\([^\n]*publicRoutine/i);
});

test('shared stability layer keeps summary filters, completion markers and group completion non-destructive', () => {
  assert.match(stability, /function ensureSkinSummaryFilter/);
  assert.match(stability, /fitnessSummaryGroupFilter/);
  assert.match(stability, /data-v11-group-complete/);
  assert.match(stability, /data-calendar-summary-filter/);
  assert.match(stability, /Open Routine Summary:/);
  assert.match(stability, /Individual Routine Steps/);
  assert.doesNotMatch(stability, /setInterval/);
  assert.doesNotMatch(stability, /card\.hidden\s*=\s*true/);
});

test('refresh preserves the requested Fitness Routine and nested Plan view', () => {
  const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  const structure = read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
  assert.match(loader, /queryMain/);
  assert.match(loader, /queryPlan/);
  assert.match(loader, /restoreRequestedView/);
  assert.match(structure, /function restoreRemembered/);
  assert.match(structure, /__bl_fitness_routine_view_v2__/);
  assert.match(structure, /__bl_fitness_plan_view_v4__/);
});

test('Calisthenics generator keeps progression semantics and reorder controls without a presentation renderer moving fields', () => {
  const progression = read('systems/baseline-fitness/js/fitness-generator-progression-v1.js');
  const coherence = read('systems/baseline-fitness/js/fitness-plan-generator-coherence-v4.js');
  assert.match(progression, /LINEAR:'linear-fixed'/);
  assert.match(progression, /Linear — fixed set progression/);
  assert.match(progression, /Straight Sets — equal reps/);
  assert.match(progression, /definition\.familyKey === 'lunges'/);
  assert.match(progression, /Rep Increase Per Session/);
  assert.match(progression, /finalSet = Math\.max\(1, Math\.round\(max \* 0\.80\)\)/);
  assert.match(progression, /3:\[-1,-2,0\]/);
  assert.match(progression, /function progressedTargets/);
  assert.match(progression, /ex-details-card/);
  assert.match(progression, /data-exercise-name/);
  assert.match(coherence, /Max Baseline/);
  assert.match(coherence, /data-exercise-move/);
  assert.doesNotMatch(stability, /normaliseExerciseCards/);
  assert.doesNotMatch(progression, /percentage-based sets/);
});

test('exercise and activity pickers remain opaque foreground UI and do not trap navigation', () => {
  const fitnessCss = read('systems/baseline-fitness/css/fitness-routine-sitewide-v3.css');
  const theme = read('systems/baseline-fitness/js/fitness-theme-guard-v1.js');
  assert.match(fitnessCss, /z-index:2147482000!important/);
  assert.match(fitnessCss, /background:var\(--card-bg\)!important/);
  assert.match(fitnessCss, /pointer-events:auto!important/);
  assert.match(theme, /var\(--card-bg\)/);
  assert.doesNotMatch(stability, /pointerdown[\s\S]*stopImmediatePropagation/);
});

test('weekly frequency range is optional and weekly-count plans stay available without invented dates', () => {
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  assert.match(policy, /Range<\/label>/);
  assert.match(policy, /Not Selected/);
  assert.match(policy, /value<=7/);
  assert.match(policy, /frequencyRangeMax/);
  assert.match(policy, /flexibleWeekly = true/);
  assert.match(policy, /next\.access\.can = true/);
  assert.match(policy, /Current workout available within your weekly frequency/);
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

test('the same exercise shares progression across multiple Calisthenics plans from one owner', () => {
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  const coherence = read('systems/baseline-fitness/js/fitness-routine-coherence-v1.js');
  assert.match(policy, /function plansContaining/);
  assert.match(policy, /function completedSharedSessions/);
  assert.match(policy, /function applySharedProgression/);
  assert.match(policy, /completedSharedSessions\(exercise\)\+1/);
  assert.match(policy, /progressedTargets/);
  assert.match(policy, /holdTarget/);
  assert.doesNotMatch(coherence, /applyCrossPlanProgression|completedSessionsForExercise/);
});

test('Fitness Routine Summary remains comprehensive rather than a shallow list', () => {
  const coherence = read('systems/baseline-fitness/js/fitness-routine-coherence-v1.js');
  assert.match(coherence, /function enrichSummary/);
  assert.match(coherence, /Benefits \/ purpose:/);
  assert.match(coherence, /Technique:/);
  assert.match(coherence, /Relevant session measures/);
  assert.match(coherence, /Progression:/);
  assert.match(coherence, /Energy demand/);
  assert.match(coherence, /Primary muscle involvement/);
});

test('Routine Logs stay compact while checked entries remain on their original date for correction', () => {
  const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
  assert.match(skinLoader, /__baselineKeepCompletedDateV1/);
  assert.match(skinLoader, /entries\[item\.id\]\?\.completed/);
  assert.match(stability, /function restoreFitnessCompletedRows/);
  assert.match(stability, /Completed on this date/);
  assert.match(stability, /data-v11-log-details/);
  assert.doesNotMatch(stability, /Completed exercises \/ routines/);
  assert.doesNotMatch(stability, /createElement\('details'\)/);
});

test('calendar completion numbers are captioned and clickable into Routine Summary', () => {
  assert.match(stability, /data-calendar-summary-filter/);
  assert.match(stability, /Open Routine Summary:/);
  assert.match(stability, /fitnessSummaryGroupFilter/);
  assert.match(stability, /skinRoutineSummaryFilter/);
  assert.match(stabilityCss, /\.bl-v11-calendar-marker/);
});

test('Skincare retains its maintained product catalogue and routine product picker', () => {
  const loader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
  const library = read('systems/baseline-natural-skincare/js/skincare-product-library.js');
  assert.match(loader, /Baseline Skincare Recipes/);
  assert.match(loader, /UK Product Library/);
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

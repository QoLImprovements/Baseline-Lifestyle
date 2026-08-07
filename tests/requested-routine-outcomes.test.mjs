import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

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

test('Skincare and Fitness share one final My Routine authority without superseded repair layers', () => {
  const skincare = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
  const fitness = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  for (const loader of [skincare, fitness]) {
    assert.match(loader, /baseline-routine-authority-v7\.js/);
    assert.match(loader, /baseline-public-routine-groups-v1\.js/);
    assert.doesNotMatch(loader, /baseline-routine-live-authority-v1\.js/);
    assert.doesNotMatch(loader, /baseline-routine-coherence-events-v4\.js/);
    assert.doesNotMatch(loader, /baseline-routine-coherence-v4\.js/);
  }
  assert.match(skincare, /waitForBaseRoutine/);
  assert.match(fitness, /fitness-routine-coherence-v1\.js/);
  assert.match(fitness, /fitness-theme-guard-v1\.js/);
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
  assert.match(viewer, /Ungrouped routine actions/);
  assert.match(viewer, /Ungrouped routine items/);
  assert.doesNotMatch(viewer, /localStorage\.setItem\([^\n]*publicRoutine/i);
});

test('shared Routine authority keeps numbering stable and filters both systems', () => {
  const authority = read('sitewide/js/baseline-routine-authority-v7.js');
  assert.match(authority, /counter-reset:blPlanNumber/);
  assert.match(authority, /counter-reset:blLogNumber/);
  assert.match(authority, /routine-plan-group-ungrouped/);
  assert.match(authority, /function applySkinSummaryFilter/);
  assert.match(authority, /function applyFitnessSummaryFilter/);
  assert.match(authority, /function groupedMoveDistance/);
  assert.match(authority, /data-v8-group-complete/);
  assert.match(authority, /function removeDuplicateControls/);
  assert.doesNotMatch(authority, /setInterval/);
});

test('refresh preserves the exact My Routine view instead of forcing Routine Plan', () => {
  const authority = read('sitewide/js/baseline-routine-authority-v7.js');
  const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  assert.match(authority, /function persistView/);
  assert.match(authority, /routine-view/);
  assert.match(authority, /routine-plan/);
  assert.match(authority, /searchParams\.delete\('new-plan'\)/);
  assert.match(loader, /queryMain/);
  assert.match(loader, /queryPlan/);
  assert.match(loader, /restoreRequestedView/);
});

test('Calisthenics generator uses fixed semantic columns, full-width details and reorder controls', () => {
  const progression = read('systems/baseline-fitness/js/fitness-generator-progression-v1.js');
  const authority = read('sitewide/js/baseline-routine-authority-v7.js');
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
  assert.match(authority, /GENERATOR GRID CONTRACT/);
  assert.match(authority, /grid-template-areas:"exercise mode baseline sets increase actions"/);
  assert.match(authority, /data-exercise-move/);
  assert.doesNotMatch(progression, /percentage-based sets/);
  assert.doesNotMatch(progression, /commonly called straight sets or sets across/);
});

test('exercise and activity pickers are opaque foreground UI and do not trap navigation', () => {
  const authority = read('sitewide/js/baseline-routine-authority-v7.js');
  const theme = read('systems/baseline-fitness/js/fitness-theme-guard-v1.js');
  assert.match(authority, /PICKER\/DROPDOWN CONTRACT/);
  assert.match(authority, /z-index:2147483000/);
  assert.match(authority, /pointer-events:auto!important/);
  assert.match(authority, /cleanExerciseValidation/);
  assert.match(authority, /setCustomValidity\(''\)/);
  assert.match(theme, /var\(--card-bg\)/);
  assert.match(theme, /z-index:2147483600/);
  assert.doesNotMatch(theme, /#10090c|#2b1017|#45151d/);
});

test('weekly frequency range is optional and weekly-count plans stay available without invented dates', () => {
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  const authority = read('sitewide/js/baseline-routine-authority-v7.js');
  assert.match(policy, /Range<\/label>/);
  assert.match(policy, /Not Selected/);
  assert.match(policy, /value<=7/);
  assert.match(policy, /frequencyRangeMax/);
  assert.match(policy, /flexibleWeekly = true/);
  assert.match(policy, /next\.access\.can = true/);
  assert.match(policy, /Current workout available within your weekly frequency/);
  assert.match(authority, /Available this week/);
  assert.match(authority, /plan\?\.planJson\?\.scheduleMode==='specific-days'/);
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

test('Fitness Routine Summary becomes comprehensive rather than a shallow list', () => {
  const coherence = read('systems/baseline-fitness/js/fitness-routine-coherence-v1.js');
  assert.match(coherence, /function enrichSummary/);
  assert.match(coherence, /Purpose:/);
  assert.match(coherence, /Technique:/);
  assert.match(coherence, /Relevant session measures/);
  assert.match(coherence, /Progression:/);
});

test('Routine Logs start compact and completed exercises/routines have a collapsed disclosure', () => {
  const authority = read('sitewide/js/baseline-routine-authority-v7.js');
  assert.match(authority, /bl-log-details-collapsed/);
  assert.match(authority, /Completed exercises \/ routines/);
  assert.match(authority, /<details/);
  assert.match(authority, /data-completed-proxy/);
});

test('calendar completion numbers are clickable captions into Routine Summary', () => {
  const authority = read('sitewide/js/baseline-routine-authority-v7.js');
  assert.match(authority, /data-calendar-summary-filter/);
  assert.match(authority, /Open Routine Summary:/);
  assert.match(authority, /fitnessSummaryGroupFilter/);
  assert.match(authority, /skinRoutineSummaryFilter/);
});

test('Skincare exposes the full maintained product catalogue by brand in Routine Plan', () => {
  const authority = read('sitewide/js/baseline-routine-authority-v7.js');
  const library = read('systems/baseline-natural-skincare/js/skincare-product-library.js');
  assert.match(authority, /const products=Array\.isArray\(library\?\.PRODUCTS\)/);
  assert.match(authority, /const byBrand=new Map/);
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
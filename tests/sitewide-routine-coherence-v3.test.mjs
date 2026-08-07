import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const skincare = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitness = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const shared = read('sitewide/js/baseline-routine-authority-v7.js');
const publicViewer = read('sitewide/js/baseline-public-routine-groups-v1.js');
const coherence = read('systems/baseline-fitness/js/fitness-routine-coherence-v1.js');
const themeGuard = read('systems/baseline-fitness/js/fitness-theme-guard-v1.js');

test('Skincare and Fitness load one shared stable My Routine authority', () => {
  for (const loader of [skincare, fitness]) {
    assert.match(loader, /baseline-routine-authority-v7\.js/);
    assert.match(loader, /baseline-public-routine-groups-v1\.js/);
    assert.doesNotMatch(loader, /baseline-routine-coherence-v4\.js|baseline-routine-coherence-events-v4\.js|baseline-routine-live-authority-v1\.js/);
  }
  assert.doesNotMatch(skincare, /baseline-skincare-routine-state-bridge-v1\.js/);
  assert.doesNotMatch(fitness, /fitness-routine-canonical|baseline-routine-canonical-v1|baseline-fitness-routine-summary-bridge-v1\.js/);
});

test('deterministic loaders hide intermediate views and document ownership boundaries', () => {
  assert.match(skincare, /data-skincare-routine-booting/);
  assert.match(skincare, /waitForBaseRoutine/);
  assert.match(skincare, /OWNERSHIP CONTRACT/);
  assert.match(fitness, /data-fitness-routine-booting/);
  assert.match(fitness, /restoreRequestedView/);
  assert.match(fitness, /OWNERSHIP CONTRACT/);
  assert.match(fitness, /fitness-routine-coherence-v1\.js/);
  assert.match(fitness, /fitness-theme-guard-v1\.js/);
});

test('Create Another Plan and Open Plan retain one capture-level controller before presentation authority', () => {
  const multiplePlans = read('systems/baseline-fitness/js/fitness-multiple-plans.js');
  const authority = read('sitewide/js/baseline-fitness-plan-control-authority-v1.js');
  const chain = fitness.slice(fitness.indexOf("load('/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js"));
  assert.match(multiplePlans, />Create Another Plan<\/button>/);
  assert.match(authority, /#createCalisthenicsPlan/);
  assert.match(authority, /calisthenicsPlanSelect/);
  assert.match(authority, /stopImmediatePropagation/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.openPlan/);
  assert.ok(chain.indexOf('baseline-fitness-plan-control-authority-v1.js') < chain.indexOf('baseline-routine-authority-v7.js'));
});

test('shared authority owns view persistence, stable numbering and non-destructive decoration', () => {
  assert.match(shared, /SITEWIDE CONTRACT/);
  assert.match(shared, /counter-reset:blPlanNumber/);
  assert.match(shared, /counter-reset:blLogNumber/);
  assert.match(shared, /routine-plan-group-ungrouped/);
  assert.match(shared, /function persistView/);
  assert.match(shared, /routine-view/);
  assert.match(shared, /url\.searchParams\.delete\('new-plan'\)/);
  assert.match(shared, /function groupedMoveDistance/);
  assert.match(shared, /data-v8-group-complete/);
  assert.match(shared, /One observer only/);
  assert.doesNotMatch(shared, /setInterval/);
  assert.doesNotMatch(shared, /observe\(document\.documentElement|observe\(document\.body/);
});

test('Routine Summary filtering is shared and duplicate Skincare controls are removed', () => {
  assert.match(shared, /skinRoutineSummaryFilter/);
  assert.match(shared, /fitnessSummaryGroupFilter/);
  assert.match(shared, /function applySkinSummaryFilter/);
  assert.match(shared, /function applyFitnessSummaryFilter/);
  assert.match(shared, /function removeDuplicateControls/);
  assert.match(shared, /Individual routine items/);
  assert.match(shared, /value\.startsWith\('entity:'\)/);
});

test('Public Routine viewer mirrors Log Summary and Plan using public completion data', () => {
  const fitnessApi = read('systems/baseline-fitness/api/public_routine_v2.php');
  const skinApi = read('systems/baseline-natural-skincare/api/public_routine_v2.php');
  assert.match(publicViewer, /PUBLIC ROUTINE CONTRACT/);
  assert.match(publicViewer, /User's Log/);
  assert.match(publicViewer, /User's Routine Summary/);
  assert.match(publicViewer, /User's Plan/);
  assert.match(publicViewer, /bl-public-v3-calendar/);
  assert.match(publicViewer, /skinBenefit/);
  assert.match(publicViewer, /fitnessSummaryHtml/);
  assert.match(publicViewer, /fitnessPlanHtml/);
  assert.match(fitnessApi, /'logs'=>\$logs/);
  assert.match(fitnessApi, /'sessions'=>\$sessions/);
  assert.match(skinApi, /'logs'=>\$logs/);
  assert.match(skinApi, /'groups'=>\$groups/);
});

test('Fitness coherence adapter enriches Summary but does not duplicate cross-plan progression', () => {
  assert.match(coherence, /enrichSummary/);
  assert.match(coherence, /refreshRoutineLog/);
  assert.match(coherence, /DO NOT DUPLICATE RUNTIME PROGRESSION HERE/);
  assert.doesNotMatch(coherence, /applyCrossPlanProgression|completedSessionsForExercise|wrapWorkout/);
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  assert.match(policy, /function applySharedProgression/);
  assert.match(policy, /function completedSharedSessions/);
});

test('Fitness generator has a documented fixed layout and opaque theme-owned picker', () => {
  assert.match(shared, /GENERATOR GRID CONTRACT/);
  assert.match(shared, /grid-template-areas:"exercise mode baseline sets increase actions"/);
  assert.match(shared, /data-exercise-move/);
  assert.match(themeGuard, /FUTURE EDIT RULE/);
  assert.match(themeGuard, /var\(--card-bg\)/);
  assert.match(themeGuard, /z-index:2147483600/);
  assert.doesNotMatch(themeGuard, /#45151d|#2b1017|#10090c/);
});

test('weekly-count Fitness remains frequency based while specific-day sessions may start early', () => {
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  assert.match(policy, /Range<\/label>/);
  assert.match(policy, /Not Selected/);
  assert.match(policy, /frequencyRangeMax/);
  assert.match(policy, /Current workout available within your weekly frequency/);
  assert.match(policy, /Start Early\?/);
  assert.match(shared, /Available this week/);
  assert.match(shared, /scheduleMode==='specific-days'/);
});

test('new coherence files remain valid JavaScript', () => {
  for (const path of [
    'sitewide/js/baseline-public-routine-groups-v1.js',
    'sitewide/js/baseline-routine-authority-v7.js',
    'systems/baseline-fitness/js/fitness-routine-coherence-v1.js',
    'systems/baseline-fitness/js/fitness-theme-guard-v1.js',
    'systems/baseline-fitness/js/fitness-routine-workspace.js',
    'systems/baseline-natural-skincare/js/skincare-routine-enhancements.js'
  ]) {
    const file = new URL(`../${path}`, import.meta.url);
    const checked = spawnSync(process.execPath, ['--check', file.pathname], { encoding:'utf8' });
    assert.equal(checked.status, 0, `${path}: ${checked.stderr || checked.stdout}`);
  }
});
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const skincare = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitness = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const shared = read('sitewide/js/baseline-routine-stability-v11.js');
const sharedCss = read('sitewide/css/baseline-routine-stability-v11.css');
const publicViewer = read('sitewide/js/baseline-public-routine-groups-v1.js');
const coherence = read('systems/baseline-fitness/js/fitness-routine-coherence-v1.js');
const themeGuard = read('systems/baseline-fitness/js/fitness-theme-guard-v1.js');

test('Skincare and Fitness load one shared stable My Routine final layer', () => {
  for (const loader of [skincare, fitness]) {
    assert.match(loader, /baseline-routine-stability-v11\.js/);
    assert.match(loader, /baseline-public-routine-groups-v1\.js/);
    assert.doesNotMatch(loader, /baseline-routine-authority-v7\.js|baseline-routine-experience-v9\.js|baseline-routine-experience-v10\.js/);
    assert.doesNotMatch(loader, /baseline-routine-coherence-v4\.js|baseline-routine-coherence-events-v4\.js|baseline-routine-live-authority-v1\.js/);
  }
  assert.doesNotMatch(skincare, /baseline-skincare-routine-state-bridge-v1\.js/);
  assert.doesNotMatch(fitness, /fitness-routine-canonical|baseline-routine-canonical-v1|baseline-fitness-routine-summary-bridge-v1\.js/);
});

test('deterministic loaders show one loading surface and fetch dependencies without a serial waterfall', () => {
  assert.match(skincare, /data-skincare-routine-booting/);
  assert.match(skincare, /waitForBaseRoutine/);
  assert.match(skincare, /PERFORMANCE \/ OWNERSHIP CONTRACT/);
  assert.match(fitness, /data-fitness-routine-booting/);
  assert.match(fitness, /restoreRequestedView/);
  assert.match(fitness, /PERFORMANCE \/ OWNERSHIP CONTRACT/);
  for (const loader of [skincare,fitness]) {
    assert.match(loader, /function loadOrderedParallel/);
    assert.match(loader, /script\.async = false/);
    assert.match(loader, /Promise\.all\(pending\)/);
    assert.match(loader, /Loading My Routine…/);
    assert.doesNotMatch(loader, /releaseBootShieldWhenStable/);
  }
});

test('Create Another Plan and Open Plan retain one capture-level controller before stability decoration', () => {
  const multiplePlans = read('systems/baseline-fitness/js/fitness-multiple-plans.js');
  const authority = read('sitewide/js/baseline-fitness-plan-control-authority-v1.js');
  assert.match(multiplePlans, />Create Another Plan<\/button>/);
  assert.match(authority, /#createCalisthenicsPlan/);
  assert.match(authority, /calisthenicsPlanSelect/);
  assert.match(authority, /stopImmediatePropagation/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.openPlan/);
  assert.ok(fitness.indexOf('baseline-fitness-plan-control-authority-v1.js') < fitness.indexOf('baseline-routine-stability-v11.js'));
});

test('shared stability layer owns bounded decoration without moving renderer-owned controls', () => {
  assert.match(shared, /must not re-parent renderer-owned/);
  assert.match(shared, /function ensureSkinSummaryFilter/);
  assert.match(shared, /function restoreFitnessCompletedRows/);
  assert.match(shared, /data-v11-group-complete/);
  assert.match(shared, /data-calendar-summary-filter/);
  assert.doesNotMatch(shared, /ensureSelectShell|normaliseExerciseCards/);
  assert.doesNotMatch(shared, /setInterval/);
  assert.doesNotMatch(shared, /observe\(document\.documentElement|observe\(document\.body/);
  assert.doesNotMatch(shared, /scrollTop\s*=|document\.body\.style\.overflow/);
});

test('Routine Summary filtering is stable and uses sitewide terminology', () => {
  assert.match(shared, /skinRoutineSummaryFilter/);
  assert.match(shared, /fitnessSummaryGroupFilter/);
  assert.match(shared, /function applySkinSummaryFilter/);
  assert.match(shared, /Individual Routine Steps/);
  assert.match(shared, /All Routine Steps/);
  assert.match(sharedCss, /\.bl-routine-summary-filter/);
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
  assert.match(shared, /moveVisibilityControl/);
  assert.match(sharedCss, /\.bl-v11-public-visibility/);
  assert.match(fitnessApi, /'logs'=>\$logs/);
  assert.match(fitnessApi, /'sessions'=>\$sessions/);
  assert.match(skinApi, /'logs'=>\$logs/);
  assert.match(skinApi, /'groups'=>\$groups/);
});

test('Fitness coherence adapter enriches Summary without duplicating progression or later group renders', () => {
  assert.match(coherence, /enrichSummary/);
  assert.match(coherence, /initialLogRefresh/);
  assert.match(coherence, /DO NOT DUPLICATE RUNTIME PROGRESSION OR RENDERERS HERE/);
  assert.doesNotMatch(coherence, /applyCrossPlanProgression|completedSessionsForExercise|wrapWorkout/);
  assert.doesNotMatch(coherence, /baseline:routine-settings-changed[^\n]+refreshRoutineLog/);
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  assert.match(policy, /function applySharedProgression/);
  assert.match(policy, /function completedSharedSessions/);
});

test('Fitness generator keeps opaque theme-owned pickers and final stability does not rebuild its field grid', () => {
  assert.match(themeGuard, /FUTURE EDIT RULE/);
  assert.match(themeGuard, /var\(--card-bg\)/);
  assert.match(themeGuard, /z-index:2147483600/);
  assert.doesNotMatch(themeGuard, /#45151d|#2b1017|#10090c/);
  assert.doesNotMatch(shared, /normaliseExerciseCards|bl-v10-exercise-columns/);
});

test('weekly-count Fitness remains frequency based while specific-day sessions may start early', () => {
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  assert.match(policy, /Range<\/label>/);
  assert.match(policy, /Not Selected/);
  assert.match(policy, /frequencyRangeMax/);
  assert.match(policy, /Current workout available within your weekly frequency/);
  assert.match(policy, /Start Early\?/);
});

test('new coherence files remain valid JavaScript', () => {
  for (const path of [
    'sitewide/js/baseline-public-routine-groups-v1.js',
    'sitewide/js/baseline-routine-stability-v11.js',
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

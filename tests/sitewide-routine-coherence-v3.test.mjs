import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const skin = read('systems/baseline-natural-skincare/js/skincare-routine-canonical.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const fitness = read('systems/baseline-fitness/js/fitness-routine-canonical.js');
const fitnessPlans = read('systems/baseline-fitness/js/fitness-multiple-plans.js');
const fitnessVisibility = read('systems/baseline-fitness/js/fitness-routine-visibility.js');
const sharedCss = read('sitewide/css/baseline-routine-canonical-v1.css');
const live = read('sitewide/js/baseline-live-stability.js');

test('Skincare and Fitness load one explicit canonical presentation each', () => {
  assert.match(skinLoader, /skincare-routine-canonical\.js/);
  assert.match(fitnessLoader, /fitness-routine-canonical\.js/);
  assert.match(skinLoader, /baseline-routine-canonical-v1\.css/);
  assert.match(fitnessLoader, /baseline-routine-canonical-v1\.css/);
  assert.doesNotMatch(skinLoader, /baseline-routine-coherence-v4|routine-coherence-events|skincare-routine-sitewide-v4/);
  assert.doesNotMatch(fitnessLoader, /baseline-routine-coherence-v4|routine-coherence-events|fitness-routine-sitewide-v3/);
  assert.doesNotMatch(live, /installRoutineInterfaceRepairs/);
});

test('canonical renderers are event-driven and do not repaint from observer or interval loops', () => {
  [skin, fitness].forEach((source) => {
    assert.match(source, /function stableHtml/);
    assert.doesNotMatch(source, /MutationObserver/);
    assert.doesNotMatch(source, /setInterval/);
  });
  assert.match(skin, /queueMicrotask\(renderAll\)/);
  assert.match(fitness, /baseline:fitness-plans-updated/);
});

test('both systems expose the same top-level Routine contract', () => {
  assert.match(skin, /canonicalRoutineSummary/);
  assert.match(skin, /canonicalRoutineLogItems/);
  assert.match(skin, /canonicalPublicRoutineResult/);
  assert.match(fitness, /\['log','Routine Log'\]/);
  assert.match(fitness, /\['summary','Routine Summary'\]/);
  assert.match(fitness, /\['plan','Routine Plan'\]/);
  assert.match(fitness, /\['public','Public Routines'\]/);
  assert.match(sharedCss, /\.bl-canonical-summary-group/);
  assert.match(sharedCss, /\.bl-canonical-public-card/);
});

test('Skincare groups own collective numbers and group completion controls', () => {
  assert.match(skin, /bl-canonical-number/);
  assert.match(skin, /data-canonical-complete-group/);
  assert.match(skin, /Complete group/);
  assert.match(skin, /data-canonical-group-items/);
  assert.match(skin, /setCanonicalLog/);
  assert.doesNotMatch(skin, /data-release-number/);
});

test('Settings and visibility live in their canonical cards rather than overlays', () => {
  assert.match(skin, /data-canonical-settings-toggle/);
  assert.match(skin, /data-canonical-settings-panel/);
  assert.match(sharedCss, /\.bl-canonical-settings-button\{position:static!important/);
  assert.match(fitnessVisibility, /My Routine Visibility/);
  assert.match(sharedCss, /\.bl-canonical-public-visibility/);
});

test('public routines show structured categories and planned calendars while logs stay private', () => {
  const skinApi = read('systems/baseline-natural-skincare/api/routine_state.php');
  const fitnessApi = read('systems/baseline-fitness/api/routine_state.php');
  assert.match(skin, /publicRoutine\.groups/);
  assert.match(skin, /publicRoutine\.assignments/);
  assert.match(skin, /function plannedWeek/);
  assert.match(fitness, /function weeklyCalendar/);
  assert.match(fitness, /publicPlanCard/);
  assert.match(skinApi, /'groups'=>\$groups/);
  assert.match(skinApi, /'assignments'=>\$assignments/);
  assert.match(fitnessApi, /'plans'=>bl_fitness_public_plans/);
  const skinPublic = skinApi.slice(skinApi.indexOf('function bl_skincare_public_payload'), skinApi.indexOf("try{\n  $db = bl_skincare_db()"));
  const fitnessPublic = fitnessApi.slice(fitnessApi.indexOf('function bl_fitness_public_payload'), fitnessApi.indexOf("try{\n  $db = bl_fitness_db()"));
  assert.doesNotMatch(skinPublic, /'logs'/);
  assert.doesNotMatch(fitnessPublic, /'logs'/);
});

test('Create Another Plan and Open Plan remain explicit functional handlers', () => {
  assert.match(fitnessPlans, />Create Another Plan<\/button>/);
  assert.match(fitnessPlans, /function createPlan\(/);
  assert.match(fitnessPlans, /function openPlan\(/);
  assert.match(fitnessPlans, /#calisthenicsPlanSelect/);
  assert.match(fitnessPlans, /BASELINE_fitnessPlans/);
});

test('canonical calendars use one shared stable card language', () => {
  assert.match(skin, /data-canonical-calendar-view="week"/);
  assert.match(skin, /data-canonical-calendar-view="month"/);
  assert.match(fitness, /Planned calendar/);
  assert.match(sharedCss, /\.bl-canonical-week/);
  assert.match(sharedCss, /\.bl-canonical-day/);
  assert.match(sharedCss, /\.bl-canonical-flexible/);
});

test('Obsolete dated Skincare and Food footers remain removed', () => {
  const apiClient = read('sitewide/js/baseline-api.js');
  assert.match(apiClient, /Natural Skincare\|Food Approach/);
  assert.match(apiClient, /footer\.remove\(\)/);
});

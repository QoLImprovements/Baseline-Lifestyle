import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
require('../systems/baseline-fitness/js/fitness-activity-catalogue.js');
const catalogue = require('../systems/baseline-fitness/js/fitness-activity-catalogue-v2.js');
const loader = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js', import.meta.url), 'utf8');
const workspace = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js', import.meta.url), 'utf8');
const canonical = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-canonical.js', import.meta.url), 'utf8');
const visibility = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-visibility.js', import.meta.url), 'utf8');
const plans = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-multiple-plans.js', import.meta.url), 'utf8');
const canonicalCss = fs.readFileSync(new URL('../sitewide/css/baseline-routine-canonical-v1.css', import.meta.url), 'utf8');
const generatorCss = fs.readFileSync(new URL('../systems/baseline-fitness/css/fitness-multiple-plans.css', import.meta.url), 'utf8');
const shared = fs.readFileSync(new URL('../sitewide/js/baseline-routine-system.js', import.meta.url), 'utf8');
const html = fs.readFileSync(new URL('../systems/baseline-fitness/baseline-fitness.html', import.meta.url), 'utf8');
const api = fs.readFileSync(new URL('../systems/baseline-fitness/api/routine_state.php', import.meta.url), 'utf8');
const schema = fs.readFileSync(new URL('../systems/baseline-fitness/api/schema.php', import.meta.url), 'utf8');
const htaccess = fs.readFileSync(new URL('../.htaccess', import.meta.url), 'utf8');

test('Fitness main navigation remains My Routine with refresh-safe routing', () => {
  assert.match(html, /data-target="my-plan">My Routine<\/button>/);
  assert.match(html, /my-routine\|my-plan/);
  assert.match(htaccess, /baseline-fitness\/my-routine/);
  assert.match(loader, /CANONICAL_PATH = '\/baseline-fitness\/my-routine'/);
});

test('one canonical top-level interface owns Log, Summary, Plan and Public Routines', () => {
  assert.match(canonical, /\['log','Routine Log'\]/);
  assert.match(canonical, /\['summary','Routine Summary'\]/);
  assert.match(canonical, /\['plan','Routine Plan'\]/);
  assert.match(canonical, /\['public','Public Routines'\]/);
  assert.match(canonical, /data-canonical-fitness-view/);
  assert.match(canonical, /data-canonical-fitness-panel/);
  assert.match(canonical, /PLAN_VIEWS = Object\.freeze\(\['calisthenics','cardio','other','sports'\]\)/);
  assert.doesNotMatch(loader, /fitness-routine-sitewide-v3|baseline-routine-coherence-v4|routine-coherence-events|summary-bridge/);
  assert.doesNotMatch(canonical, /MutationObserver|setInterval/);
});

test('catalogue provides expanded searchable cardio, activity and sports lists', () => {
  assert.deepEqual(catalogue.SECTIONS.map((item) => item.label), ['Cardio','Other Fitness Activity','Sports']);
  assert.ok(catalogue.ACTIVITIES.length >= 180, `expected at least 180 activities, got ${catalogue.ACTIVITIES.length}`);
  const ids = new Set(catalogue.ACTIVITIES.map((item) => item.id));
  [
    'road-running','road-cycling','pool-swimming','rowing-erg','hatha-yoga','aerial-yoga','tai-chi',
    'mma','bouldering','weight-training','badminton','association-football','tennis','squash','cricket'
  ].forEach((id) => assert.ok(ids.has(id), `${id} should exist`));
  assert.ok(catalogue.search('other','yoga').some((item) => item.id === 'aerial-yoga'));
});

test('activities retain relevant optional metrics rather than one generic amount', () => {
  const running = catalogue.ACTIVITY_BY_ID.get('road-running');
  const yoga = catalogue.ACTIVITY_BY_ID.get('hatha-yoga');
  const badminton = catalogue.ACTIVITY_BY_ID.get('badminton');
  assert.deepEqual(running.metrics.slice(0, 4).map((item) => item.key), ['durationMinutes','distanceKm','averagePace','averageSpeedKph']);
  assert.ok(yoga.metrics.some((item) => item.key === 'focus'));
  assert.ok(yoga.metrics.some((item) => item.key === 'intensity'));
  assert.ok(badminton.metrics.some((item) => item.key === 'result'));
  assert.match(workspace, /data-target-metric/);
  assert.match(workspace, /data-log-metric/);
});

test('activity pickers remain searchable and keyboard navigable', () => {
  assert.match(workspace, /role="combobox"/);
  assert.match(workspace, /event\.key === 'ArrowDown'/);
  assert.match(workspace, /event\.key === 'ArrowUp'/);
  assert.match(workspace, /setPickerIndex/);
  assert.match(workspace, /resolveTypedActivity/);
});

test('Routine Log retains week and month calendars while Summary uses one planned calendar', () => {
  assert.match(workspace, /data-calendar-view="week"/);
  assert.match(workspace, /data-calendar-view="month"/);
  assert.match(canonical, /function weeklyCalendar/);
  assert.match(canonical, /Planned calendar/);
  assert.match(canonicalCss, /\.bl-canonical-week/);
  assert.match(shared, /function weekDates/);
});

test('canonical Summary presents calisthenics and other fitness categories exactly once', () => {
  assert.match(canonical, /function summaryPlanCard/);
  assert.match(canonical, /function summaryActivityCard/);
  assert.match(canonical, /\['cardio','Cardio'\]/);
  assert.match(canonical, /\['other','Other Fitness Activity'\]/);
  assert.match(canonical, /\['sports','Sports'\]/);
  assert.match(canonical, /function stableHtml/);
  assert.match(canonical, /if \(!target \|\| target\.dataset\.canonicalSignature === signature\) return/);
});

test('text and numeric activity fields save without replacing activity lists per character', () => {
  const inputHandler = workspace.slice(workspace.indexOf("root.addEventListener('input'"), workspace.indexOf("root.addEventListener('change'"));
  assert.match(inputHandler, /updateActivityField\(field\)/);
  assert.match(inputHandler, /updateTargetMetric\(targetMetric\)/);
  assert.doesNotMatch(inputHandler, /renderActivityList/);
  assert.doesNotMatch(inputHandler, /renderAll/);
});

test('Fitness activity state persists activity-specific target and result metrics', () => {
  assert.match(schema, /bl_apply_schema_migration\(\$db, 'fitness', 2/);
  assert.match(api, /function bl_fitness_metric_values/);
  assert.match(api, /'targetMetrics'=>bl_fitness_metric_values/);
  assert.match(api, /'metrics'=>bl_fitness_metric_values/);
});

test('Fitness visibility remains in the canonical Public panel and saves independently', () => {
  assert.match(visibility, /My Routine Visibility/);
  assert.match(visibility, /routine_visibility\.php/);
  assert.doesNotMatch(visibility, /MutationObserver|setInterval/);
});

test('Fitness entry point loads base state owners before the canonical presentation', () => {
  const catalogueIndex = loader.indexOf('fitness-activity-catalogue-v2.js');
  const sharedIndex = loader.indexOf('baseline-routine-system.js');
  const workspaceIndex = loader.indexOf('fitness-routine-workspace-v2.js');
  const canonicalIndex = loader.indexOf('fitness-routine-canonical.js');
  const visibilityIndex = loader.indexOf('fitness-routine-visibility.js');
  assert.ok(catalogueIndex >= 0 && sharedIndex > catalogueIndex && workspaceIndex > sharedIndex && canonicalIndex > workspaceIndex && visibilityIndex > canonicalIndex);
  assert.match(loader, /baseline-routine-canonical-v1\.css/);
  assert.match(shared, /SITEWIDE_MY_ROUTINE_SYSTEM_20260806_2/);
});

test('Calisthenics generator is searchable and has one responsive aligned grid', () => {
  assert.match(plans, /type = 'search'/);
  assert.match(plans, /calisthenicsExerciseOptions/);
  assert.match(generatorCss, /grid-template-columns:minmax\(340px,2\.15fr\)/);
  assert.match(generatorCss, /align-items:end!important/);
  assert.match(generatorCss, /\.ex-select-source\[hidden\]/);
});

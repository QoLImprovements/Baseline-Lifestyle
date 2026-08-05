import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
require('../systems/baseline-fitness/js/fitness-activity-catalogue.js');
const catalogue = require('../systems/baseline-fitness/js/fitness-activity-catalogue-v2.js');
const workspaceLoader = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js', import.meta.url), 'utf8');
const workspace = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js', import.meta.url), 'utf8');
const coherent = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-sitewide-v3.js', import.meta.url), 'utf8');
const cssEntry = fs.readFileSync(new URL('../systems/baseline-fitness/css/fitness-routine-workspace.css', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../systems/baseline-fitness/css/fitness-routine-sitewide-v3.css', import.meta.url), 'utf8');
const shared = fs.readFileSync(new URL('../sitewide/js/baseline-routine-system.js', import.meta.url), 'utf8');
const html = fs.readFileSync(new URL('../systems/baseline-fitness/baseline-fitness.html', import.meta.url), 'utf8');
const api = fs.readFileSync(new URL('../systems/baseline-fitness/api/routine_state.php', import.meta.url), 'utf8');
const schema = fs.readFileSync(new URL('../systems/baseline-fitness/api/schema.php', import.meta.url), 'utf8');
const htaccess = fs.readFileSync(new URL('../.htaccess', import.meta.url), 'utf8');

test('Fitness main navigation remains My Routine with refresh-safe routing', () => {
  assert.match(html, /data-target="my-plan">My Routine<\/button>/);
  assert.match(html, /my-routine\|my-plan/);
  assert.match(htaccess, /baseline-fitness\/my-routine/);
});

test('Exercise Summary is inserted directly between Routine Log and Calisthenics', () => {
  assert.match(coherent, /textContent = 'Exercise Summary'/);
  assert.match(coherent, /logButton\?\.insertAdjacentElement\('afterend', button\)/);
  assert.match(coherent, /data\.fitnessRoutinePanel = 'summary'|dataset\.fitnessRoutinePanel = 'summary'/);
  assert.match(coherent, /data-fitness-routine-panel=\\?"summary/);
  assert.match(coherent, /activateSummary/);
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

test('activity pickers remain searchable, keyboard navigable and fully opaque', () => {
  assert.match(workspace, /role="combobox"/);
  assert.match(workspace, /event\.key === 'ArrowDown'/);
  assert.match(workspace, /event\.key === 'ArrowUp'/);
  assert.match(workspace, /setPickerIndex/);
  assert.match(css, /z-index:10000!important/);
  assert.match(css, /background:#120a0e!important/);
  assert.match(css, /opacity:1!important/);
});

test('Fitness Week calendar uses one full-width row for every day', () => {
  assert.match(workspace, /data-calendar-view="week"/);
  assert.match(workspace, /data-calendar-view="month"/);
  assert.match(coherent, /makeWeekRows/);
  assert.match(coherent, /UI\.weekRow/);
  assert.match(coherent, /bl-routine-week-list/);
  assert.match(shared, /grid-template-columns:minmax\(185px/);
});

test('activity, log and generated session details are collapsed and expandable', () => {
  assert.match(coherent, /decorateActivityCards/);
  assert.match(coherent, /decorateLogCards/);
  assert.match(coherent, /decorateSessionCards/);
  assert.match(coherent, /Show session details/);
  assert.match(coherent, /Session details/);
  assert.match(coherent, /Edit details/);
  assert.match(coherent, /data\.sitewideDisclosure = 'true'/);
});

test('every current-plan exercise receives a comprehensive structured summary', () => {
  assert.match(coherent, /plannedExerciseNames/);
  assert.match(coherent, /global\.BASELINE_FITNESS_DEBUG\?\.EXERCISES/);
  assert.match(coherent, /Exercise family/);
  assert.match(coherent, /Movement category/);
  assert.match(coherent, /Variation level/);
  assert.match(coherent, /Progression rule/);
  assert.match(coherent, /Benefits and practical role/);
  assert.match(coherent, /How to perform it/);
  assert.match(coherent, /activitySummaryCard/);
});

test('text and numeric fields save without activity-list replacement per character', () => {
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

test('Fitness entry point loads catalogue, shared system, workspace and coherence layer in order', () => {
  const catalogueIndex = workspaceLoader.indexOf('fitness-activity-catalogue-v2.js');
  const sharedIndex = workspaceLoader.indexOf('baseline-routine-system.js');
  const workspaceIndex = workspaceLoader.indexOf('fitness-routine-workspace-v2.js');
  const coherentIndex = workspaceLoader.indexOf('fitness-routine-sitewide-v3.js');
  assert.ok(catalogueIndex >= 0 && sharedIndex > catalogueIndex && workspaceIndex > sharedIndex && coherentIndex > workspaceIndex);
  assert.match(cssEntry, /baseline-routine-system\.css/);
  assert.match(cssEntry, /fitness-routine-sitewide-v3\.css/);
});

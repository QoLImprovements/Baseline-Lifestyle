import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
require('../systems/baseline-fitness/js/fitness-activity-catalogue.js');
const catalogue = require('../systems/baseline-fitness/js/fitness-activity-catalogue-v2.js');
const workspaceLoader = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js', import.meta.url), 'utf8');
const workspace = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js', import.meta.url), 'utf8');
const cssEntry = fs.readFileSync(new URL('../systems/baseline-fitness/css/fitness-routine-workspace.css', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../systems/baseline-fitness/css/fitness-routine-workspace-v2.css', import.meta.url), 'utf8');
const html = fs.readFileSync(new URL('../systems/baseline-fitness/baseline-fitness.html', import.meta.url), 'utf8');
const api = fs.readFileSync(new URL('../systems/baseline-fitness/api/routine_state.php', import.meta.url), 'utf8');
const schema = fs.readFileSync(new URL('../systems/baseline-fitness/api/schema.php', import.meta.url), 'utf8');
const htaccess = fs.readFileSync(new URL('../.htaccess', import.meta.url), 'utf8');

test('Fitness main navigation is renamed to My Routine with refresh-safe route support', () => {
  assert.match(html, /data-target="my-plan">My Routine<\/button>/);
  assert.match(html, /my-routine\|my-plan/);
  assert.match(htaccess, /baseline-fitness\/my-routine/);
});

test('My Routine uses the requested five ordered site-style tabs', () => {
  assert.match(workspace, /\['log','Routine Log'\],\['calisthenics','Calisthenics'\],\['cardio','Cardio'\],\['other','Other Fitness Activity'\],\['sports','Sports'\]/);
  assert.match(workspace, /class="tab fitness-routine-subtab"/);
  assert.match(workspace, /data-fitness-routine-panel="log"/);
  assert.match(workspace, /data-fitness-routine-panel="calisthenics"/);
  assert.match(workspace, /original\.forEach\(\(node\) => calisthenics\.append\(node\)\)/);
});

test('catalogue provides expanded searchable cardio, other activity and sports lists', () => {
  assert.deepEqual(catalogue.SECTIONS.map((item) => item.label), ['Cardio','Other Fitness Activity','Sports']);
  assert.ok(catalogue.ACTIVITIES.length >= 180, `expected at least 180 activities, got ${catalogue.ACTIVITIES.length}`);
  const ids = new Set(catalogue.ACTIVITIES.map((item) => item.id));
  [
    'road-running','road-cycling','pool-swimming','rowing-erg','hatha-yoga','aerial-yoga','tai-chi',
    'mma','bouldering','weight-training','badminton','association-football','tennis','squash','cricket'
  ].forEach((id) => assert.ok(ids.has(id), `${id} should exist`));
  assert.ok(catalogue.search('cardio','cycling').length >= 8);
  assert.ok(catalogue.search('other','yoga').some((item) => item.id === 'aerial-yoga'));
  assert.ok(catalogue.search('sports','racket').length >= 7);
});

test('activities define relevant optional metrics rather than one generic amount', () => {
  const running = catalogue.ACTIVITY_BY_ID.get('road-running');
  const yoga = catalogue.ACTIVITY_BY_ID.get('hatha-yoga');
  const badminton = catalogue.ACTIVITY_BY_ID.get('badminton');
  assert.deepEqual(running.metrics.slice(0, 4).map((item) => item.key), ['durationMinutes','distanceKm','averagePace','averageSpeedKph']);
  assert.ok(yoga.metrics.some((item) => item.key === 'focus'));
  assert.ok(yoga.metrics.some((item) => item.key === 'intensity'));
  assert.ok(badminton.metrics.some((item) => item.key === 'result'));
  assert.ok(badminton.metrics.some((item) => item.key === 'gamesPlayed'));
  assert.match(workspace, /Relevant for/);
  assert.match(workspace, /data-target-metric/);
  assert.match(workspace, /data-log-metric/);
});

test('activity pickers are searchable, keyboard navigable and fully opaque foreground menus', () => {
  assert.match(workspace, /role="combobox"/);
  assert.match(workspace, /fitness-activity-group-label/);
  assert.match(workspace, /event\.key === 'ArrowDown'/);
  assert.match(workspace, /event\.key === 'ArrowUp'/);
  assert.match(workspace, /setPickerIndex/);
  assert.match(css, /z-index:9999/);
  assert.match(css, /background-color:#120a0e!important/);
  assert.match(css, /backdrop-filter:none!important/);
  assert.match(css, /opacity:1!important/);
});

test('Routine Log is aligned and includes week and month calendar views', () => {
  assert.match(workspace, /data-calendar-view="week"/);
  assert.match(workspace, /data-calendar-view="month"/);
  assert.match(workspace, /Fitness Calendar/);
  assert.match(workspace, /View workout/);
  assert.doesNotMatch(workspace, /Open Calisthenics/);
  assert.match(workspace, /fitness-log-completion/);
  assert.match(css, /\.fitness-routine-log-item\{display:grid;gap:14px/);
  assert.match(css, /\.fitness-calendar-grid\{display:grid;grid-template-columns:repeat\(7/);
});

test('text and numeric inputs save without rebuilding the activity list on each character', () => {
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
  assert.match(api, /fitness_routine_state/);
});

test('Fitness routine entry points load the repaired catalogue and workspace', () => {
  assert.match(cssEntry, /fitness-routine-workspace-v2\.css/);
  assert.match(workspaceLoader, /fitness-activity-catalogue-v2\.js/);
  assert.match(workspaceLoader, /fitness-routine-workspace-v2\.js/);
  assert.doesNotMatch(workspaceLoader, /fitness-routine-workspace-core\.js/);
});

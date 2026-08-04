import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const catalogue = require('../systems/baseline-fitness/js/fitness-activity-catalogue.js');
const workspace = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../systems/baseline-fitness/css/fitness-routine-workspace.css', import.meta.url), 'utf8');
const html = fs.readFileSync(new URL('../systems/baseline-fitness/baseline-fitness.html', import.meta.url), 'utf8');
const api = fs.readFileSync(new URL('../systems/baseline-fitness/api/routine_state.php', import.meta.url), 'utf8');
const schema = fs.readFileSync(new URL('../systems/baseline-fitness/api/schema.php', import.meta.url), 'utf8');
const htaccess = fs.readFileSync(new URL('../.htaccess', import.meta.url), 'utf8');

test('Fitness main navigation is renamed to My Routine with refresh-safe route support', () => {
  assert.match(html, /data-target="my-plan">My Routine<\/button>/);
  assert.match(html, /my-routine\|my-plan/);
  assert.match(htaccess, /baseline-fitness\/my-routine/);
});

test('My Routine uses the requested five ordered subtabs', () => {
  assert.match(workspace, /\['log','Routine Log'\],\['calisthenics','Calisthenics'\],\['cardio','Cardio'\],\['other','Other Fitness Activity'\],\['sports','Sports'\]/);
  assert.match(workspace, /data-fitness-routine-panel="log"/);
  assert.match(workspace, /data-fitness-routine-panel="calisthenics"/);
  assert.match(workspace, /original\.forEach\(\(node\)=>calisthenics\.append\(node\)\)/);
});

test('catalogue provides comprehensive searchable cardio, other activity and sports lists', () => {
  assert.deepEqual(catalogue.SECTIONS.map((item) => item.label), ['Cardio','Other Fitness Activity','Sports']);
  assert.ok(catalogue.ACTIVITIES.length >= 150, `expected at least 150 activities, got ${catalogue.ACTIVITIES.length}`);
  const ids = new Set(catalogue.ACTIVITIES.map((item) => item.id));
  [
    'road-running','road-cycling','pool-swimming','rowing-erg','hatha-yoga','tai-chi',
    'mma','bouldering','weight-training','badminton','association-football','tennis','squash','cricket'
  ].forEach((id) => assert.ok(ids.has(id), `${id} should exist`));
  assert.ok(catalogue.search('cardio','cycling').length >= 8);
  assert.ok(catalogue.search('other','martial arts').length >= 10);
  assert.ok(catalogue.search('sports','racket').length >= 7);
});

test('activity pickers are searchable grouped opaque menus', () => {
  assert.match(workspace, /role="combobox"/);
  assert.match(workspace, /fitness-activity-group-label/);
  assert.match(workspace, /CATALOGUE\.search\(section,query\)/);
  assert.match(workspace, /toLocaleLowerCase\('en-GB'\)/);
  assert.match(css, /\.fitness-activity-menu\{[^}]*background:#170d11/);
  assert.match(css, /z-index:2000/);
});

test('routine log groups calisthenics, cardio, other activity and sports', () => {
  assert.match(workspace, /<h3>Calisthenics<\/h3>/);
  assert.match(workspace, /\['cardio','Cardio'\],\['other','Other Fitness Activity'\],\['sports','Sports'\]/);
  assert.match(workspace, /data-fitness-log-complete/);
  assert.match(workspace, /data-fitness-log-actual/);
  assert.match(workspace, /data-fitness-log-note/);
});

test('Fitness activity state is account-backed with schema migration two', () => {
  assert.match(schema, /bl_apply_schema_migration\(\$db, 'fitness', 2/);
  assert.match(schema, /CREATE TABLE IF NOT EXISTS fitness_routine_state/);
  assert.match(api, /bl_fitness_routine_activities/);
  assert.match(api, /array_slice\(\$value, 0, 150\)/);
  assert.match(api, /'cardio','other','sports'/);
  assert.match(api, /fitness_routine_state/);
});

test('Fitness routine assets load after the existing calisthenics runtime', () => {
  const app = html.indexOf('baseline-fitness-app.js');
  const voice = html.indexOf('baseline-fitness-voice.js');
  const catalogueIndex = html.indexOf('fitness-activity-catalogue.js');
  const workspaceIndex = html.indexOf('fitness-routine-workspace.js');
  assert.ok(app >= 0 && voice > app && catalogueIndex > voice && workspaceIndex > catalogueIndex);
  assert.match(html, /fitness-routine-workspace\.css/);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
require('../systems/baseline-fitness/js/fitness-activity-catalogue.js');
const catalogue = require('../systems/baseline-fitness/js/fitness-activity-catalogue-v2.js');
const workspaceLoader = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js', import.meta.url), 'utf8');
const workspace = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js', import.meta.url), 'utf8');
const structure = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-structure-v4.js', import.meta.url), 'utf8');
const policy = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-live-policy-v1.js', import.meta.url), 'utf8');
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
  assert.match(workspaceLoader, /restoreRequestedView/);
});

test('Fitness My Routine has four top-level views and four nested Routine Plan types', () => {
  assert.match(structure, /TOP_VIEWS = Object\.freeze\(\['log','summary','plan','public'\]\)/);
  assert.match(structure, /PLAN_VIEWS = Object\.freeze\(\['calisthenics','cardio','other','sports'\]\)/);
  assert.match(structure, /ensureTopButton\(nav,'log','Routine Log'\)/);
  assert.match(structure, /ensureTopButton\(nav,'summary','Routine Summary'\)/);
  assert.match(structure, /ensureTopButton\(nav,'plan','Routine Plan'\)/);
  assert.match(structure, /ensureTopButton\(nav,'public','Public Routines'\)/);
  assert.match(structure, /data-fitness-plan-view/);
  assert.match(structure, /fitness-routine-plan-panel/);
});

test('Routine view and nested Plan view are independently remembered across refresh', () => {
  assert.match(structure, /__bl_fitness_routine_view_v2__/);
  assert.match(structure, /__bl_fitness_plan_view_v4__/);
  assert.match(structure, /function restoreRemembered/);
  assert.match(structure, /sessionStorage\?\.setItem\(VIEW_KEY/);
  assert.match(structure, /sessionStorage\?\.setItem\(PLAN_VIEW_KEY/);
});

test('catalogue provides expanded searchable cardio, activity and sports lists', () => {
  assert.deepEqual(catalogue.SECTIONS.map((item) => item.label), ['Cardio','Other Fitness Activity','Sports']);
  assert.ok(catalogue.ACTIVITIES.length >= 180, `expected at least 180 activities, got ${catalogue.ACTIVITIES.length}`);
  const ids = new Set(catalogue.ACTIVITIES.map((item) => item.id));
  ['road-running','road-cycling','pool-swimming','rowing-erg','hatha-yoga','aerial-yoga','tai-chi','mma','bouldering','weight-training','badminton','association-football','tennis','squash','cricket']
    .forEach((id) => assert.ok(ids.has(id), `${id} should exist`));
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

test('Routine Summary groups plan and activity entities in saved group order', () => {
  assert.match(structure, /function groupedEntities/);
  assert.match(structure, /fitnessRoutineGroups/);
  assert.match(structure, /fitnessRoutineAssignments/);
  assert.match(structure, /fitnessSummaryGroupFilter/);
  assert.match(structure, /data-v4-entity/);
  assert.match(structure, /Ungrouped routine items/);
});

test('Public Routines panel is native to the Fitness structure and exposes shared viewer hooks', () => {
  assert.match(structure, /fitnessRoutineVisibility/);
  assert.match(structure, /fitnessPublicRoutineName/);
  assert.match(structure, /fitnessViewPublicRoutine/);
  assert.match(structure, /fitnessPublicRoutineResult/);
  assert.match(structure, /\?list=public/);
  assert.match(structure, /saveVisibility/);
});

test('weekly-count frequency and start access are governed by the flexible scheduling policy', () => {
  assert.match(policy, /frequencyRangeMax/);
  assert.match(policy, /flexibleWeekly/);
  assert.match(policy, /Current workout available within your weekly frequency/);
  assert.match(policy, /Start Early\?/);
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

test('Fitness entry point loads catalogue, shared data workspace, one structure adapter, shared authority and policy in order', () => {
  const chain = workspaceLoader.slice(workspaceLoader.indexOf("load('/systems/baseline-fitness/js/fitness-activity-catalogue-v2.js"));
  const catalogueIndex = chain.indexOf('fitness-activity-catalogue-v2.js');
  const sharedIndex = chain.indexOf('baseline-routine-system.js');
  const workspaceIndex = chain.indexOf('fitness-routine-workspace-v2.js');
  const structureIndex = chain.indexOf('fitness-routine-structure-v4.js');
  const authorityIndex = chain.indexOf('baseline-routine-authority-v7.js');
  const policyIndex = chain.indexOf('fitness-live-policy-v1.js');
  assert.ok(catalogueIndex >= 0 && sharedIndex > catalogueIndex && workspaceIndex > sharedIndex && structureIndex > workspaceIndex && authorityIndex > structureIndex && policyIndex > authorityIndex);
  assert.doesNotMatch(workspaceLoader, /fitness-routine-sitewide-v3\.js/);
  assert.match(shared, /SITEWIDE_MY_ROUTINE_SYSTEM_20260806_2/);
});
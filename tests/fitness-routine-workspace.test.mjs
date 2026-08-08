import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
require('../systems/baseline-fitness/js/fitness-activity-catalogue.js');
const catalogue = require('../systems/baseline-fitness/js/fitness-activity-catalogue-v2.js');
const loader = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js', import.meta.url),'utf8');
const workspace = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js', import.meta.url),'utf8');
const structure = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-structure-v4.js', import.meta.url),'utf8');
const policy = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-live-policy-v1.js', import.meta.url),'utf8');
const shared = fs.readFileSync(new URL('../sitewide/js/baseline-routine-coherence-v12.js', import.meta.url),'utf8');
const sharedCss = fs.readFileSync(new URL('../sitewide/css/baseline-routine-coherence-v12.css', import.meta.url),'utf8');
const publicViewer = fs.readFileSync(new URL('../sitewide/js/baseline-public-routine-viewonly-v4.js', import.meta.url),'utf8');

test('Fitness loader keeps route restoration but has no artificial loading screen', () => {
  assert.match(loader,/restoreRequestedView/);
  assert.match(loader,/loadOrderedParallel/);
  assert.match(loader,/baseline-routine-coherence-v12\.js/);
  assert.doesNotMatch(loader,/Loading My Routine|BootShield|routine-booting|baseline-routine-stability-v11/);
});

test('activity catalogue and existing data owner remain intact', () => {
  assert.ok(catalogue.ACTIVITIES.length >= 180);
  for (const id of ['road-running','road-cycling','pool-swimming','hatha-yoga','mma','badminton']) assert.ok(catalogue.ACTIVITY_BY_ID.has(id));
  assert.match(workspace,/data-fitness-log-complete/);
  assert.match(workspace,/updateLog\(complete\.dataset\.fitnessLogComplete/);
});

test('checking and unchecking are the Routine Log calendar add/remove mechanism', () => {
  assert.match(workspace,/entry\.completed = Boolean\(value\)/);
  assert.match(workspace,/renderLog\(\);\s*renderCalendar\(\)/);
  assert.match(shared,/preserveFitnessCompleted/);
  assert.doesNotMatch(shared,/data-v11-remove|data-v12-remove|textContent\s*=\s*['\"]Remove['\"]/);
});

test('Fitness Summary retains its one filter and shared terminology', () => {
  assert.match(structure,/fitnessSummaryGroupFilter/);
  assert.match(shared,/fitnessSummaryGroupFilter/);
  assert.match(shared,/All Routine Steps/);
  assert.match(shared,/Individual Routine Steps/);
});

test('Days Per Week range stays valid and is displayed as compact min dash max', () => {
  assert.match(policy,/value <= minimum \? ' disabled'/);
  assert.match(policy,/Not Selected/);
  assert.match(shared,/Days Per Week/);
  assert.match(sharedCss,/\.bl-frequency-range-dash/);
});

test('Public Fitness routine is the same owner-facing structure in View Only form', () => {
  assert.match(publicViewer,/fitness-routine-log-item/);
  assert.match(publicViewer,/fitness-exercise-summary-item/);
  assert.match(publicViewer,/routine-plan-group/);
  assert.match(publicViewer,/View Only/);
  assert.match(publicViewer,/type=\"checkbox\" disabled/);
});

test('Week and Month controls cannot collapse below their labels', () => {
  assert.match(sharedCss,/min-width:184px/);
  assert.match(sharedCss,/repeat\(2,minmax\(88px,1fr\)\)/);
});

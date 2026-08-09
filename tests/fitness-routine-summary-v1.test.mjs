import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const url = path => new URL(`../${path}`, import.meta.url);
const read = path => readFileSync(url(path), 'utf8');

const loaderPath = 'systems/baseline-fitness/js/fitness-routine-workspace.js';
const summaryPath = 'systems/baseline-fitness/js/fitness-routine-summary-v1.js';
const loader = read(loaderPath);
const summary = read(summaryPath);

test('Fitness loader has one ordered Routine Summary coherence owner', () => {
  assert.match(loader,/fitness-routine-structure-v4\.js/);
  assert.match(loader,/fitness-routine-summary-v1\.js/);
  assert.ok(loader.indexOf('fitness-routine-structure-v4.js') < loader.indexOf('fitness-routine-summary-v1.js'));
  assert.ok(loader.indexOf('fitness-routine-summary-v1.js') < loader.indexOf('baseline-routine-coherence-v12.js'));
});

test('Routine Summary uses explicit hierarchy identifiers', () => {
  assert.match(summary,/badge:`C\$\{index\+1\}`/);
  assert.match(summary,/badge:`A\$\{index\+1\}`/);
  assert.match(summary,/E\$\{index\+1\}/);
  assert.match(summary,/G\$\{index\+1\}/);
  assert.match(summary,/Routine Group ·/);
});

test('Routine Summary reapplies saved group assignments to plans and activities', () => {
  assert.match(summary,/fitnessRoutineAssignments/);
  assert.match(summary,/data\.assignments\[entity\.key\]===group\.id/);
  assert.match(summary,/activityCard\(entity\)/);
  assert.match(summary,/Individual Routine Steps/);
});

test('Routine Summary filter actively overrides forced grid display', () => {
  assert.match(summary,/fitnessSummaryGroupFilter/);
  assert.match(summary,/forceVisible/);
  assert.match(summary,/style\.setProperty\('display','none','important'\)/);
  assert.match(summary,/value\.startsWith\('group:'\)/);
  assert.match(summary,/value\.startsWith\('entity:'\)/);
});

test('Routine Summary owner parses', () => {
  const checked = spawnSync(process.execPath,['--check',url(summaryPath).pathname],{ encoding:'utf8' });
  assert.equal(checked.status,0,checked.stderr || checked.stdout);
});

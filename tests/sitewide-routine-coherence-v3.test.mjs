import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const shared = read('sitewide/js/baseline-routine-coherence-v12.js');
const publicViewer = read('sitewide/js/baseline-public-routine-viewonly-v4.js');
const css = read('sitewide/css/baseline-routine-coherence-v12.css');
const fitnessCss = read('systems/baseline-fitness/css/fitness-routine-workspace-v2.css');

test('Skincare and Fitness finish on the same shared My Routine behaviour', () => {
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.match(loader,/baseline-routine-coherence-v12\.js/);
    assert.match(loader,/baseline-public-routine-viewonly-v4\.js/);
    assert.doesNotMatch(loader,/baseline-routine-stability-v11|baseline-routine-experience-v10|baseline-routine-authority-v7|fitness-theme-guard-v1/);
  }
});

test('shared code documents the non-divergence invariants', () => {
  for (const phrase of ['My Routine is one product','Skincare\'s comprehensive Routine Summary','Public Routines are read-only My Routine views','Calendar markers are group/plan identities','System palettes own colour']) assert.ok(shared.includes(phrase));
  assert.match(publicViewer,/Viewing another user is not a second product/);
});

test('Public Routine uses owner-facing class families and never injects a foreign visual system', () => {
  for (const phrase of ['routine-log-item','fitness-routine-log-item','routine-summary-item','fitness-exercise-summary-item','routine-plan-group','routine-calendar','fitness-calendar']) assert.ok(publicViewer.includes(phrase));
  assert.doesNotMatch(publicViewer,/injectStyles|createElement\(['\"]style['\"]\)|bl-public-v3/);
});

test('shared CSS owns geometry while system CSS owns palette', () => {
  assert.match(css,/SITEWIDE VISUAL CONTRACT/);
  assert.doesNotMatch(css,/--bl-routine-(?:surface|surface-strong|border|text|accent)\s*:/);
  assert.doesNotMatch(css,/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/);
  assert.match(fitnessCss,/Do not add hard-coded pink\/red\/black\/white UI colours here/);
});

test('public completion controls are visible but read-only', () => {
  assert.match(publicViewer,/type=\"checkbox\" disabled/);
  assert.match(publicViewer,/data-public-indeterminate/);
  assert.doesNotMatch(publicViewer,/updateLog\(|removeActivity\(/);
});

test('active shared files remain valid JavaScript', () => {
  for (const path of [
    'sitewide/js/baseline-routine-coherence-v12.js',
    'sitewide/js/baseline-public-routine-viewonly-v4.js',
    'systems/baseline-natural-skincare/js/skincare-routine-enhancements.js',
    'systems/baseline-fitness/js/fitness-routine-workspace.js'
  ]) {
    const file = new URL(`../${path}`, import.meta.url);
    const checked = spawnSync(process.execPath,['--check',file.pathname],{ encoding:'utf8' });
    assert.equal(checked.status,0,`${path}: ${checked.stderr || checked.stdout}`);
  }
});

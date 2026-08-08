import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const stability = read('sitewide/js/baseline-routine-stability-v11.js');
const stabilityCss = read('sitewide/css/baseline-routine-stability-v11.css');
const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const publicViewer = read('sitewide/js/baseline-public-routine-groups-v1.js');
const fitnessCoherence = read('systems/baseline-fitness/js/fitness-routine-coherence-v1.js');

test('v11 is the only final shared My Routine interaction layer', () => {
  assert.doesNotThrow(() => new Function(stability));
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.ok(loader.includes('baseline-routine-stability-v11.js'));
    assert.ok(loader.includes('baseline-routine-stability-v11.css'));
    assert.doesNotMatch(loader,/baseline-routine-authority-v7\.js/);
    assert.doesNotMatch(loader,/baseline-routine-experience-v9\.js/);
    assert.doesNotMatch(loader,/baseline-routine-experience-v10\.js/);
  }
});

test('loader dependencies fetch in parallel while preserving script execution order', () => {
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.ok(loader.includes('function loadOrderedParallel'));
    assert.ok(loader.includes('script.async = false'));
    assert.ok(loader.includes('return Promise.all(pending)'));
    assert.doesNotMatch(loader,/\.then\(\(\)\s*=>\s*load\('/);
    assert.doesNotMatch(loader,/releaseBootShieldWhenStable/);
    assert.ok(loader.includes('Loading My Routine…'));
  }
});

test('shared stability layer never wraps or reparents native routine controls', () => {
  assert.doesNotMatch(stability,/function ensureSelectShell/);
  assert.doesNotMatch(stability,/normaliseExerciseCards/);
  assert.doesNotMatch(stability,/replaceChildren\(.*exercise/i);
  assert.doesNotMatch(stability,/appendChild\(field\)/);
  assert.doesNotMatch(stability,/stopImmediatePropagation/);
  assert.ok(stability.includes('must not re-parent renderer-owned'));
});

test('completed log entries remain correctable instead of being hidden in a proxy disclosure', () => {
  assert.ok(skinLoader.includes('__baselineKeepCompletedDateV1'));
  assert.ok(skinLoader.includes('entries[item.id]?.completed'));
  assert.ok(stability.includes('restoreFitnessCompletedRows'));
  assert.ok(stability.includes('Completed on this date'));
  assert.doesNotMatch(stability,/bl-completed-routines-list/);
  assert.doesNotMatch(stability,/card\.hidden\s*=\s*true/);
});

test('Skincare group completion and calendar Summary filtering stay available', () => {
  for (const phrase of ['ensureSkinGroupCheckboxes','data-v11-group-complete','ensureSkinSummaryFilter','data-calendar-summary-filter','openSummaryMarker']) {
    assert.ok(stability.includes(phrase));
  }
  assert.ok(stabilityCss.includes('.bl-routine-group-complete input'));
  assert.ok(stabilityCss.includes('.bl-v11-calendar-marker'));
});

test('calendar Week/Month control and public visibility use bounded responsive layouts', () => {
  assert.ok(stabilityCss.includes('width:max-content!important'));
  assert.ok(stabilityCss.includes('min-width:74px!important'));
  assert.ok(stabilityCss.includes('.bl-v11-public-visibility'));
  assert.ok(stability.includes('My Routine Visibility'));
});

test('Routine Log Details and Remove controls stay together on the right', () => {
  assert.ok(stability.includes('decorateFitnessLog'));
  assert.ok(stability.includes('data-v11-log-details'));
  assert.ok(stability.includes('data-v11-remove-fitness'));
  assert.ok(stability.includes('data-v11-remove-skin'));
  assert.ok(stabilityCss.includes('.bl-v11-log-actions'));
  assert.ok(stabilityCss.includes('justify-content:flex-end!important'));
});

test('native select arrows are not replaced by a generated shell chevron', () => {
  assert.ok(stabilityCss.includes('Native selects remain native'));
  assert.doesNotMatch(stabilityCss,/\.bl-routine-select-shell::after/);
  assert.doesNotMatch(stability,/document\.createElement\(['"]span['"]\).*bl-routine-select-shell/);
});

test('Public Routine viewer remains the shared read-only three-view implementation', () => {
  assert.ok(publicViewer.includes("User's Log"));
  assert.ok(publicViewer.includes("User's Routine Summary"));
  assert.ok(publicViewer.includes("User's Plan"));
  assert.ok(publicViewer.includes('function renderWeekCalendar'));
  assert.ok(publicViewer.includes('function handleClick'));
  assert.ok(stabilityCss.includes('.bl-public-v3-calendar'));
});

test('Fitness Summary still keeps the Skincare-shaped comprehensive detail shell', () => {
  for (const phrase of ['Routine details','Benefits and practical role','bl-routine-summary-grid','routine-summary-title']) {
    assert.ok(fitnessCoherence.includes(phrase));
  }
  assert.ok(stabilityCss.includes('.bl-routine-summary-grid,.routine-summary-grid,.fitness-summary-detail-grid,.bl-public-v3-detail-grid'));
});

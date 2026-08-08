import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const coherence = read('sitewide/js/baseline-routine-coherence-v12.js');
const css = read('sitewide/css/baseline-routine-coherence-v12.css');
const publicViewer = read('sitewide/js/baseline-public-routine-viewonly-v4.js');
const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const skinCss = read('systems/baseline-natural-skincare/css/skincare-routine-enhancements.css');
const fitnessCss = read('systems/baseline-fitness/css/fitness-routine-workspace.css');

test('v12 is the sole active shared My Routine coherence layer', () => {
  assert.doesNotThrow(() => new Function(coherence));
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.match(loader,/baseline-routine-coherence-v12\.js/);
    assert.match(loader,/baseline-public-routine-viewonly-v4\.js/);
    assert.doesNotMatch(loader,/baseline-routine-stability-v11|baseline-routine-experience-v10|baseline-routine-experience-v9|baseline-routine-authority-v7|fitness-theme-guard-v1/);
  }
  assert.match(skinCss,/baseline-routine-coherence-v12\.css/);
  assert.match(fitnessCss,/baseline-routine-coherence-v12\.css/);
  assert.doesNotMatch(skinCss,/baseline-routine-live-authority|baseline-routine-system\.css|skincare-routine\.css/);
  assert.doesNotMatch(fitnessCss,/baseline-routine-live-authority|baseline-routine-system\.css|fitness-multiple-plans\.css/);
});

test('My Routine never hides behind an artificial loading screen', () => {
  for (const loader of [skinLoader,fitnessLoader]) assert.doesNotMatch(loader,/Loading My Routine|BootShield|routine-booting|visibility:hidden/);
  assert.match(coherence,/never hides the page behind a loading screen/);
});

test('calendar markers are number-only controls with hover metadata and Summary linking', () => {
  assert.match(coherence,/class=\"bl-routine-calendar-marker\"/);
  assert.match(coherence,/title=\"\$\{esc\(marker\.label\)\}\"/);
  assert.match(coherence,/data-routine-summary-target/);
  assert.match(coherence,/openSummary/);
  assert.match(css,/\.bl-routine-calendar-marker\{/);
  assert.doesNotMatch(css,/\.bl-routine-calendar-marker>span/);
});

test('Week and Month buttons reserve enough width for their labels', () => {
  assert.match(css,/grid-template-columns:repeat\(2,minmax\(88px,1fr\)\)/);
  assert.match(css,/min-width:184px/);
  assert.match(css,/white-space:nowrap/);
  assert.match(css,/justify-content:center/);
});

test('Routine Plan alignment is shared sitewide', () => {
  assert.match(css,/\.routine-plan-group-head/);
  assert.match(css,/\.fitness-routine-group-bar/);
  assert.match(css,/align-items:center!important/);
  assert.match(css,/justify-content:space-between!important/);
});

test('Routine Log uses reversible completion instead of added Remove buttons', () => {
  assert.match(skinLoader,/Completed on this date/);
  assert.match(coherence,/preserveFitnessCompleted/);
  assert.doesNotMatch(coherence,/data-v11-remove|data-v12-remove|>Remove<|textContent\s*=\s*['\"]Remove['\"]/);
});

test('one shared dropdown rule is centred opaque and system-themed', () => {
  assert.match(css,/select:not\(\.routine-action-native\)/);
  assert.match(css,/calc\(50% - 2px\)/);
  assert.match(css,/background-color:var\(--bl-routine-menu/);
  assert.match(coherence,/removeDuplicateControls/);
  assert.doesNotMatch(css,/--bl-routine-surface:/);
});

test('shared coherence never takes ownership of page scrolling', () => {
  assert.doesNotMatch(coherence,/scrollTop\s*=|document\.body\.style\.overflow|scrollTo\(/);
  assert.doesNotMatch(css,/overflow-y\s*:\s*hidden|position\s*:\s*fixed[^}]*#(?:routine|my-plan)/s);
});

test('Public Routine is owner My Routine in read-only form', () => {
  assert.doesNotThrow(() => new Function(publicViewer));
  assert.match(publicViewer,/same Routine Log, Routine Summary, Routine Plan, calendar/);
  for (const phrase of ['routine-log-item','fitness-routine-log-item','routine-summary-item','fitness-exercise-summary-item','routine-plan-group','routine-calendar','fitness-calendar']) assert.ok(publicViewer.includes(phrase));
  assert.match(publicViewer,/disabled/);
  assert.match(publicViewer,/View Only/);
  assert.doesNotMatch(publicViewer,/injectStyles|createElement\(['\"]style['\"]\)|bl-public-v3|Loading public routine/);
});

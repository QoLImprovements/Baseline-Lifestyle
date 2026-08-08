// Validation branch only: execute the current main-branch My Routine structural suite.
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

test('v12 is the active bounded sitewide My Routine coherence layer', () => {
  assert.doesNotThrow(() => new Function(coherence));
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.match(loader,/baseline-routine-coherence-v12\.js/);
    assert.match(loader,/baseline-public-routine-viewonly-v4\.js/);
    assert.doesNotMatch(loader,/baseline-routine-stability-v11\.js|baseline-routine-experience-v10\.js|baseline-routine-experience-v9\.js|baseline-routine-authority-v7\.js/);
  }
  assert.match(skinCss,/baseline-routine-coherence-v12\.css/);
  assert.match(fitnessCss,/baseline-routine-coherence-v12\.css/);
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
  assert.doesNotMatch(coherence,/class=\"bl-v11-calendar-marker\"/);
  assert.match(css,/\.bl-routine-calendar-marker\{/);
});

test('Routine Log uses reversible completion instead of added Remove buttons', () => {
  assert.match(skinLoader,/Completed on this date/);
  assert.match(coherence,/preserveFitnessCompleted/);
  assert.doesNotMatch(coherence,/data-v11-remove|data-v12-remove|>Remove<|textContent\s*=\s*['\"]Remove['\"]/);
});

test('one shared dropdown rule is centred, opaque and system-themed', () => {
  assert.match(css,/select:not\(\.routine-action-native\)/);
  assert.match(css,/calc\(50% - 2px\)/);
  assert.match(css,/background-color:var\(--bl-routine-menu/);
  assert.match(coherence,/removeDuplicateControls/);
  assert.doesNotMatch(css,/--bl-routine-surface:/);
});

test('Public Routine is My Routine in read-only form rather than a separately styled mini interface', () => {
  assert.doesNotThrow(() => new Function(publicViewer));
  assert.match(publicViewer,/same Routine Log, Routine Summary, Routine Plan, calendar/);
  assert.match(publicViewer,/routine-log-item/);
  assert.match(publicViewer,/routine-summary-item/);
  assert.match(publicViewer,/routine-plan-group/);
  assert.match(publicViewer,/disabled/);
  assert.match(publicViewer,/View Only/);
  assert.doesNotMatch(publicViewer,/injectStyles|Loading public routine/);
});

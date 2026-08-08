import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const url = path => new URL(`../${path}`, import.meta.url);
const read = path => readFileSync(url(path), 'utf8');
const coherence = read('sitewide/js/baseline-routine-coherence-v12.js');
const css = read('sitewide/css/baseline-routine-coherence-v12.css');
const baseCss = read('sitewide/css/baseline-routine-system.css');
const publicViewer = read('sitewide/js/baseline-public-routine-viewonly-v4.js');
const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const skinEntryCss = read('systems/baseline-natural-skincare/css/skincare-routine-workspace-v2.css');
const skinLegacyEntryCss = read('systems/baseline-natural-skincare/css/skincare-routine-enhancements.css');
const fitnessEntryCss = read('systems/baseline-fitness/css/fitness-routine-workspace.css');
const fitnessSystemCss = read('systems/baseline-fitness/css/fitness-routine-sitewide-v3.css');
const livePolicy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');

test('v12 is the sole active shared My Routine coherence layer', () => {
  assert.doesNotThrow(() => new Function(coherence));
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.match(loader,/baseline-routine-coherence-v12\.js/);
    assert.match(loader,/baseline-public-routine-viewonly-v4\.js/);
    assert.doesNotMatch(loader,/baseline-routine-stability-v11|baseline-routine-experience-v10|baseline-routine-experience-v9|baseline-routine-authority-v7|fitness-theme-guard-v1/);
  }
  assert.match(skinEntryCss,/skincare-routine-sitewide-v4\.css[\s\S]*baseline-routine-coherence-v12\.css/);
  assert.match(fitnessEntryCss,/fitness-routine-sitewide-v3\.css[\s\S]*baseline-routine-coherence-v12\.css/);
  assert.doesNotMatch(skinLegacyEntryCss,/@import/);
  assert.doesNotMatch(fitnessEntryCss,/baseline-routine-live-authority|baseline-routine-system\.css|fitness-multiple-plans\.css/);
});

test('retired My Routine authorities and bridges are physically absent', () => {
  const retired = [
    'sitewide/js/baseline-routine-authority-v7.js',
    'sitewide/js/baseline-routine-experience-v9.js',
    'sitewide/js/baseline-routine-experience-v10.js',
    'sitewide/css/baseline-routine-experience-v9.css',
    'sitewide/css/baseline-routine-experience-v10.css',
    'sitewide/js/baseline-routine-coherence-v4.js',
    'sitewide/css/baseline-routine-coherence-v4.css',
    'sitewide/js/baseline-routine-coherence-events-v4.js',
    'sitewide/js/baseline-routine-live-authority-v1.js',
    'sitewide/css/baseline-routine-live-authority-v1.css',
    'sitewide/js/baseline-skincare-routine-state-bridge-v1.js',
    'sitewide/js/baseline-fitness-routine-summary-bridge-v1.js',
    'sitewide/js/baseline-public-routine-groups-v1.js',
    'systems/baseline-fitness/js/fitness-routine-sitewide-v3.js',
    'systems/baseline-fitness/js/fitness-theme-guard-v1.js'
  ];
  retired.forEach(path => assert.equal(existsSync(url(path)),false,`${path} should stay deleted`));
});

test('My Routine never uses an artificial loading screen', () => {
  for (const loader of [skinLoader,fitnessLoader]) assert.doesNotMatch(loader,/Loading My Routine|BootShield|routine-booting|visibility:hidden/);
  assert.match(coherence,/No loading screen/);
});

test('calendar markers are number-only controls with hover metadata and Summary linking', () => {
  assert.match(coherence,/class=\"bl-routine-calendar-marker\"/);
  assert.match(coherence,/title=\"\$\{esc\(marker\.label\)\}\"/);
  assert.match(coherence,/data-routine-summary-target/);
  assert.match(coherence,/openSummary/);
  assert.match(coherence,/removeLegacyCalendarPayload/);
  assert.match(css,/\.bl-routine-calendar-marker\{/);
  assert.doesNotMatch(css,/\.bl-routine-calendar-marker>span/);
  assert.doesNotMatch(css,/routine-calendar-count|bl-routine-day-count|bl-routine-day-details/);
});

test('Week and Month buttons reserve enough width for their labels', () => {
  assert.match(css,/grid-template-columns:repeat\(2,minmax\(96px,1fr\)\)/);
  assert.match(css,/width:204px/);
  assert.match(css,/white-space:nowrap/);
  assert.match(css,/justify-content:center/);
});

test('Routine Plan alignment is shared sitewide', () => {
  assert.match(css,/\.routine-plan-group-head/);
  assert.match(css,/\.fitness-routine-group-bar/);
  assert.match(css,/align-items:center!important/);
  assert.match(css,/justify-content:space-between!important/);
});

test('Routine Log completion is reversible without shared Remove buttons', () => {
  assert.match(skinLoader,/Completed on this date/);
  assert.match(coherence,/preserveFitnessCompleted/);
  assert.match(coherence,/setFitnessPlanCompletion/);
  assert.doesNotMatch(coherence,/data-v11-remove|data-v12-remove|>Remove<|textContent\s*=\s*['\"]Remove['\"]/);
});

test('one shared dropdown rule is centred opaque and uses system palette tokens', () => {
  assert.match(css,/select:not\(\.routine-action-native\)/);
  assert.match(css,/calc\(50% - 2px\)/);
  assert.match(css,/background-color:var\(--bl-routine-menu/);
  assert.match(coherence,/dedupeCanonicalControls/);
  assert.doesNotMatch(css,/--bl-routine-surface:/);
});

test('shared code does not take ownership of page scrolling or obsolete compatibility skins', () => {
  assert.doesNotMatch(coherence,/scrollTop\s*=|document\.body\.style\.overflow|scrollTo\(/);
  assert.doesNotMatch(css,/scroll-behavior|overflow-y\s*:\s*hidden/);
  assert.doesNotMatch(baseCss,/baseline-routine-experience-v10|#exerciseList|\.bl-homebar|\.bl-scroll|\.bl-routine-calendar-marker/);
});

test('Fitness visual policy lives in CSS rather than runtime style injection', () => {
  assert.match(fitnessSystemCss,/fitness-start-early-overlay/);
  assert.match(fitnessSystemCss,/ex-picker-menu/);
  assert.doesNotMatch(fitnessLoader,/fitness-theme-guard-v1/);
  assert.doesNotMatch(livePolicy,/function injectStyles|createElement\(['\"]style['\"]\)|baselineFitnessLivePolicyStyle/);
  assert.doesNotMatch(livePolicy,/\[80,220,500,1000,1800\]/);
});

test('Public Routine is owner My Routine in read-only form', () => {
  assert.doesNotThrow(() => new Function(publicViewer));
  assert.match(publicViewer,/same Routine Log, Routine Summary, Routine Plan, calendar/);
  for (const phrase of ['routine-log-item','fitness-routine-log-item','routine-summary-item','fitness-exercise-summary-item','routine-plan-group','routine-calendar','fitness-calendar']) assert.ok(publicViewer.includes(phrase));
  assert.match(publicViewer,/disabled/);
  assert.match(publicViewer,/View Only/);
  assert.doesNotMatch(publicViewer,/injectStyles|createElement\(['\"]style['\"]\)|bl-public-v3|Loading public routine/);
});

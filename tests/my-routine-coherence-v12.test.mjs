import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const url = path => new URL(`../${path}`, import.meta.url);
const read = path => readFileSync(url(path), 'utf8');
const coherence = read('sitewide/js/baseline-routine-coherence-v12.js');
const css = read('sitewide/css/baseline-routine-coherence-v12.css');
const baseJs = read('sitewide/js/baseline-routine-system.js');
const baseCss = read('sitewide/css/baseline-routine-system.css');
const publicViewer = read('sitewide/js/baseline-public-routine-viewonly-v4.js');
const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const skinEntryCss = read('systems/baseline-natural-skincare/css/skincare-routine-workspace-v2.css');
const skinLegacyEntryCss = read('systems/baseline-natural-skincare/css/skincare-routine-enhancements.css');
const fitnessEntryCss = read('systems/baseline-fitness/css/fitness-routine-workspace.css');
const fitnessSystemCss = read('systems/baseline-fitness/css/fitness-routine-sitewide-v3.css');
const groups = read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
const generator = read('systems/baseline-fitness/js/fitness-generator-progression-v1.js');
const timed = read('systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js');
const livePolicy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
const structure = read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
const schedule = read('systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js');

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

test('retired authorities bridges repair layers and dead helpers are physically absent', () => {
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
    'sitewide/js/baseline-fitness-plan-control-authority-v1.js',
    'sitewide/js/baseline-public-routine-groups-v1.js',
    'systems/baseline-fitness/js/fitness-routine-sitewide-v3.js',
    'systems/baseline-fitness/js/fitness-theme-guard-v1.js',
    'systems/baseline-fitness/js/fitness-routine-coherence-v1.js',
    'systems/baseline-fitness/js/fitness-routine-groups-v1.js',
    'systems/baseline-fitness/js/fitness-plan-generator-coherence-v4.js'
  ];
  retired.forEach(path => assert.equal(existsSync(url(path)),false,`${path} should stay deleted`));
});

test('shared base produces structure once rather than subordinate completion UI', () => {
  assert.doesNotThrow(() => new Function(baseJs));
  assert.doesNotMatch(baseJs,/bl-routine-day-count|bl-routine-day-details|Completed exercises \/ routines/);
  assert.doesNotMatch(baseCss,/baseline-routine-experience-v10|#exerciseList|\.bl-homebar|\.bl-scroll|\.bl-routine-calendar-marker/);
});

test('My Routine never uses an artificial loading screen or boot polling loop', () => {
  for (const loader of [skinLoader,fitnessLoader]) assert.doesNotMatch(loader,/Loading My Routine|BootShield|routine-booting|visibility:hidden|waitForBaseRoutine|MAX_WAIT_MS/);
  assert.match(coherence,/No loading screen/);
  assert.doesNotMatch(skinLoader,/setTimeout\(check|Date\.now\(\)-started/);
});

test('Fitness loader declares one ordered ownership chain', () => {
  const ordered = [
    'fitness-activity-catalogue-v2.js',
    'fitness-exercise-family-filter.js',
    'baseline-routine-system.js',
    'fitness-routine-workspace-v2.js',
    'fitness-calisthenics-schedule-controls.js',
    'fitness-routine-groups-v2.js',
    'fitness-generator-progression-v1.js',
    'fitness-timed-hold-targets-v2.js',
    'fitness-live-policy-v1.js',
    'fitness-routine-structure-v4.js',
    'baseline-public-routine-viewonly-v4.js',
    'baseline-routine-coherence-v12.js'
  ];
  ordered.reduce((previous,name) => {
    const index=fitnessLoader.indexOf(name);
    assert.ok(index>previous,`${name} should load after its dependency owner`);
    return index;
  },-1);
  assert.doesNotMatch(fitnessLoader,/fitness-plan-generator-coherence|fitness-routine-coherence-v1|baseline-fitness-plan-control-authority|fitness-theme-guard-v1/);
});

test('Fitness group owner has no style injection or boot retry array', () => {
  assert.doesNotThrow(() => new Function(groups));
  assert.doesNotMatch(groups,/createElement\(['\"]style['\"]\)|injectStyles|\[100,300,700\]|setTimeout\(ensure/);
  assert.match(groups,/MutationObserver/);
  assert.match(groups,/subtree:false/);
});

test('generator progression is correct at source and does not wrap the live workout', () => {
  assert.doesNotThrow(() => new Function(generator));
  assert.match(generator,/const working=Math\.max\(1,Math\.round\(max\*0\.80\)\)/);
  assert.match(generator,/Equal working sets start at 80% of Max Baseline/);
  assert.match(generator,/Max Baseline/);
  assert.match(generator,/baseline:Math\.max/);
  assert.match(generator,/sets:setCount/);
  assert.doesNotMatch(generator,/BASELINE_fitnessWorkout|\[0,100,300,700,1500,3000\]|setTimeout\(ensureRuntimeWrappers/);
});

test('live wrapper hierarchy is progression then timed specialization then final live policy', () => {
  assert.ok(fitnessLoader.indexOf('fitness-generator-progression-v1.js') < fitnessLoader.indexOf('fitness-timed-hold-targets-v2.js'));
  assert.ok(fitnessLoader.indexOf('fitness-timed-hold-targets-v2.js') < fitnessLoader.indexOf('fitness-live-policy-v1.js'));
  assert.match(timed,/timed/);
  assert.match(livePolicy,/FINAL|shared-progression policy|shared progression/i);
  assert.match(livePolicy,/BASELINE_fitnessWorkout/);
});

test('Start Date has one generator owner while schedule helper owns only schedule mode', () => {
  assert.match(generator,/function preserveStartDate/);
  assert.doesNotMatch(schedule,/startDate|Start Date|start\.disabled|start\.value/);
  assert.match(schedule,/scheduleMode/);
  assert.match(schedule,/specificDayControls/);
});

test('Fitness Summary is rendered comprehensively by its structure owner, not a later repair module', () => {
  assert.doesNotThrow(() => new Function(structure));
  for (const phrase of ['Routine details','Benefits and practical role','Energy demand','Primary muscle involvement','Relevant session measures','Technique:','Progression:']) assert.ok(structure.includes(phrase));
  assert.match(structure,/Individual Routine Steps/);
  assert.doesNotMatch(structure,/injectStyles|setTimeout\(boot|setTimeout\(\(\) => \{ wrapRoutineApi/);
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

test('shared code does not take ownership of page scrolling', () => {
  assert.doesNotMatch(coherence,/scrollTop\s*=|document\.body\.style\.overflow|scrollTo\(/);
  assert.doesNotMatch(css,/scroll-behavior|overflow-y\s*:\s*hidden/);
});

test('Fitness visual policy lives in CSS rather than runtime style injection', () => {
  assert.match(fitnessSystemCss,/fitness-start-early-overlay/);
  assert.match(fitnessSystemCss,/ex-picker-menu/);
  assert.match(fitnessSystemCss,/bl-fitness-log-group/);
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

import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const url = path => new URL(`../${path}`, import.meta.url);
const read = path => readFileSync(url(path), 'utf8');

const coherence = read('sitewide/js/baseline-routine-coherence-v12.js');
const css = read('sitewide/css/baseline-routine-coherence-v12.css');
const publicViewer = read('sitewide/js/baseline-public-routine-viewonly-v4.js');
const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const skinGroups = read('systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js');
const skinCss = read('systems/baseline-natural-skincare/css/skincare-routine-sitewide-v4.css');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const fitnessGroups = read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
const generator = read('systems/baseline-fitness/js/fitness-generator-progression-v1.js');
const livePolicy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
const multiplePlans = read('systems/baseline-fitness/js/fitness-multiple-plans.js');
const structure = read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
const schedule = read('systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js');
const fitnessCss = read('systems/baseline-fitness/css/fitness-routine-sitewide-v3.css');
const generatorCss = read('systems/baseline-fitness/css/fitness-multiple-plans.css');

test('one active shared My Routine coherence layer remains', () => {
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.match(loader,/baseline-routine-coherence-v12\.js/);
    assert.match(loader,/baseline-public-routine-viewonly-v4\.js/);
    assert.doesNotMatch(loader,/baseline-routine-stability-v11|baseline-routine-experience-v10|baseline-routine-experience-v9|baseline-routine-authority-v7|fitness-theme-guard-v1/);
  }
  assert.match(skinLoader,/skincare-routine-sitewide-v5\.js/);
  assert.match(fitnessLoader,/fitness-routine-groups-v2\.js/);
});

test('retired repair layers are physically absent', () => {
  [
    'sitewide/js/baseline-routine-authority-v7.js',
    'sitewide/js/baseline-routine-experience-v9.js',
    'sitewide/js/baseline-routine-experience-v10.js',
    'sitewide/js/baseline-routine-coherence-v4.js',
    'sitewide/js/baseline-routine-coherence-events-v4.js',
    'sitewide/js/baseline-routine-live-authority-v1.js',
    'sitewide/js/baseline-skincare-routine-state-bridge-v1.js',
    'sitewide/js/baseline-fitness-routine-summary-bridge-v1.js',
    'sitewide/js/baseline-public-routine-groups-v1.js',
    'systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js',
    'systems/baseline-fitness/js/fitness-routine-sitewide-v3.js',
    'systems/baseline-fitness/js/fitness-theme-guard-v1.js',
    'systems/baseline-fitness/js/fitness-routine-coherence-v1.js',
    'systems/baseline-fitness/js/fitness-routine-groups-v1.js',
    'systems/baseline-fitness/js/fitness-plan-generator-coherence-v4.js',
    'systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js'
  ].forEach(path => assert.equal(existsSync(url(path)),false,`${path} should stay deleted`));
});

test('My Routine never uses a loading screen polling loop or runtime style authority', () => {
  for (const source of [skinLoader,fitnessLoader,skinGroups,fitnessGroups,generator,livePolicy,coherence]) {
    assert.doesNotMatch(source,/Loading My Routine|BootShield|routine-booting|waitForBaseRoutine|createElement\(['\"]style['\"]\)|injectStyles/);
  }
  assert.doesNotMatch(skinLoader,/setTimeout\(check|Date\.now\(\)-started/);
});

test('refresh state persists view Summary filter and Log Date', () => {
  assert.match(coherence,/routine-filter/);
  assert.match(coherence,/routine-date/);
  assert.match(coherence,/persistSummaryFilter/);
  assert.match(coherence,/preferredSummaryFilter/);
  assert.match(coherence,/restoreLogDate/);
  assert.match(skinLoader,/baseline-routine-coherence-v12/);
  assert.match(fitnessLoader,/restoreRequestedView/);
});

test('calendar markers are number-only with hover captions and Summary navigation', () => {
  assert.match(coherence,/data-caption=\"\$\{esc\(marker\.label\)\}\"/);
  assert.match(coherence,/data-routine-summary-target/);
  assert.match(coherence,/openSummary/);
  assert.match(css,/content:attr\(data-caption\)/);
  assert.match(css,/\.bl-routine-calendar-marker::after/);
  assert.doesNotMatch(css,/\.bl-routine-calendar-marker>span/);
});

test('Skincare group creation has one manager and settings live on the group row', () => {
  assert.match(skinGroups,/Create Routine Group/);
  assert.match(skinGroups,/Configure its time and frequency from Settings on the group itself/);
  assert.match(skinGroups,/data-plan-group-settings/);
  assert.match(skinGroups,/Set time for this group/);
  assert.match(skinGroups,/Set “How often” for this group/);
  assert.ok(skinGroups.indexOf('data-plan-group-settings') < skinGroups.indexOf('data-plan-group-collapse'));
  assert.doesNotMatch(skinGroups,/routine-group-list/);
  assert.match(css,/grid-template-columns:minmax\(0,1fr\) minmax\(92px,auto\) auto/);
  assert.match(skinCss,/\.routine-plan-group-settings-grid/);
});

test('Fitness Summary uses the comprehensive Skincare-shaped sitewide shell', () => {
  for (const phrase of ['Routine details','Benefits and practical role','Energy demand','Primary muscle involvement','Relevant session measures','Technique:','Progression:']) assert.ok(structure.includes(phrase));
  assert.match(structure,/routine-summary-item bl-routine-summary-card/);
  assert.match(structure,/bl-routine-summary-grid/);
  assert.match(coherence,/normaliseFitnessSummaryStructure/);
});

test('both systems use Log Date and Fitness date icons are legible', () => {
  assert.match(coherence,/span\.textContent='Log Date'/);
  assert.match(coherence,/aria-label','Log Date/);
  assert.match(css,/\.bl-routine-log-date/);
  assert.match(fitnessCss,/calendar-picker-indicator/);
  assert.match(fitnessCss,/filter:invert\(1\) brightness\(2\)/);
});

test('completed Calisthenics Log entries have explicit reversible removal', () => {
  assert.match(coherence,/Remove Entry/);
  assert.match(coherence,/data-fitness-remove-entry-confirm/);
  assert.match(coherence,/update_session\.php/);
  assert.match(coherence,/action:'set_status',status:'planned'/);
  assert.match(css,/\.bl-fitness-remove-confirm/);
});

test('generator schedule and plan length are two-column conditional controls', () => {
  assert.match(generatorCss,/\.bl-generator-settings-grid/);
  assert.match(generatorCss,/grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(generator,/Number Of Days/);
  assert.match(generator,/Specify Weekdays/);
  assert.match(generator,/Array\.from\(\{ length:6 \}/);
  assert.match(livePolicy,/\(Not Specified\)/);
  assert.match(livePolicy,/option value=.*disabled/);
  assert.match(generator,/Achieved Rep\/Hold Goal/);
  assert.match(generator,/Goal Amount \(seconds hold\)/);
  assert.match(generator,/Goal Amount \(reps\)/);
  assert.match(generator,/syncScheduleMode/);
  assert.match(generator,/syncLengthMode/);
  assert.doesNotMatch(schedule,/startDate|Plan Length|goalAmount|goalExercise/);
});

test('generator Details owns progression and muscle focus without duplicate Type', () => {
  assert.match(generator,/Workout\/Muscle Focus/);
  assert.match(generator,/removeDuplicateTypeField/);
  assert.match(generator,/label==='Type'/);
  assert.match(generator,/Progression Type/);
  assert.match(generator,/displayName/);
  assert.match(generator,/\(L\/R\)/);
  assert.match(multiplePlans,/displayExerciseName/);
});

test('one plan-save wrapper applies generator and live scheduling augmentation', () => {
  assert.match(multiplePlans,/global\.fetch=async function/);
  assert.match(multiplePlans,/BASELINE_FITNESS_EXERCISE_PROGRESSION\?\.augmentPlanJson/);
  assert.match(multiplePlans,/BASELINE_FITNESS_LIVE_POLICY\?\.augmentPlanJson/);
  assert.doesNotMatch(generator,/global\.fetch\s*=/);
  assert.doesNotMatch(livePolicy,/global\.fetch\s*=/);
});

test('timed outcome uses actual versus target and failed exercises repeat progression independently', () => {
  assert.match(livePolicy,/const status=actual>=target\?'success':'failed'/);
  assert.match(livePolicy,/failedCompletedSessions/);
  assert.match(livePolicy,/completedSharedSessions\(exercise\)-failedCompletedSessions\(exercise\)/);
  assert.match(livePolicy,/sessionExerciseOutcomes/);
  assert.match(livePolicy,/indexes\.every/);
  assert.match(livePolicy,/storeSessionOutcomes\(before\)/);
  assert.match(livePolicy,/const finish=event\.target\?\.closest\?\.\('#finishWorkout'\)/);
  assert.match(livePolicy,/stopImmediatePropagation\(\)/);
});

test('saved Calisthenics presentation is one card with title actions and summary', () => {
  assert.match(multiplePlans,/calisthenics-saved-plan-head/);
  assert.match(multiplePlans,/calisthenics-saved-plan-summary/);
  assert.match(multiplePlans,/generated\?\.remove\(\)/);
  assert.match(generatorCss,/Saved plan is one card/);
  assert.match(generatorCss,/\.saved-plan-actions/);
});

test('Public Routine remains owner-facing View Only markup', () => {
  assert.doesNotThrow(() => new Function(publicViewer));
  assert.match(publicViewer,/same Routine Log, Routine Summary, Routine Plan, calendar/);
  for (const phrase of ['routine-log-item','fitness-routine-log-item','routine-summary-item','fitness-exercise-summary-item','routine-plan-group','routine-calendar','fitness-calendar']) assert.ok(publicViewer.includes(phrase));
  assert.match(publicViewer,/disabled/);
  assert.doesNotMatch(publicViewer,/injectStyles|createElement\(['\"]style['\"]\)|bl-public-v3|Loading public routine/);
});

test('changed JavaScript parses', () => {
  [
    'sitewide/js/baseline-routine-coherence-v12.js',
    'sitewide/js/baseline-public-routine-viewonly-v4.js',
    'systems/baseline-natural-skincare/js/skincare-routine-enhancements.js',
    'systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js',
    'systems/baseline-fitness/js/fitness-routine-workspace.js',
    'systems/baseline-fitness/js/fitness-routine-groups-v2.js',
    'systems/baseline-fitness/js/fitness-generator-progression-v1.js',
    'systems/baseline-fitness/js/fitness-live-policy-v1.js',
    'systems/baseline-fitness/js/fitness-multiple-plans.js',
    'systems/baseline-fitness/js/fitness-routine-structure-v4.js'
  ].forEach(path => {
    const checked=spawnSync(process.execPath,['--check',url(path).pathname],{ encoding:'utf8' });
    assert.equal(checked.status,0,`${path}: ${checked.stderr || checked.stdout}`);
  });
});

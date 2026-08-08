import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const experience = read('sitewide/js/baseline-routine-experience-v9.js');
const experienceCss = read('sitewide/css/baseline-routine-experience-v9.css');
const experienceV10 = read('sitewide/js/baseline-routine-experience-v10.js');
const experienceCssV10 = read('sitewide/css/baseline-routine-experience-v10.css');
const fitnessCoherence = read('systems/baseline-fitness/js/fitness-routine-coherence-v1.js');
const generator = read('systems/baseline-fitness/js/fitness-plan-generator-coherence-v4.js');
const schedule = read('systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js');

test('Skincare and Fitness load one shared My Routine authority chain and wait for v10 before reveal', () => {
  for (const loader of [skinLoader, fitnessLoader]) {
    const authority = loader.indexOf('baseline-routine-authority-v7.js');
    const v9 = loader.indexOf('baseline-routine-experience-v9.js');
    const v10 = loader.indexOf('baseline-routine-experience-v10.js');
    assert.ok(authority >= 0 && v9 > authority && v10 > v9);
    assert.match(loader, /BASELINE_RoutineExperienceV10Ready/);
  }
  assert.doesNotMatch(skinLoader, /skincare-routine-interactions-v1\.js/);
  assert.match(experience, /NEVER owns routine data/);
  assert.doesNotMatch(experience, /function enrichFitnessSummary/);
  assert.match(experienceV10, /SITEWIDE CONTRACT — DO NOT ADD SYSTEM-SPECIFIC COPIES/);
  assert.match(experienceCssV10, /SITEWIDE MY ROUTINE INVARIANTS — DO NOT DRIFT/);
});

test('v10 shared runtime is syntactically valid JavaScript', () => {
  assert.doesNotThrow(() => new Function(experienceV10));
});

test('both systems hold first paint until a materially quiet My Routine DOM', () => {
  assert.match(skinLoader, /releaseBootShieldWhenStable/);
  assert.match(skinLoader, /new MutationObserver\(settle\)/);
  assert.match(skinLoader, /setTimeout\(done,180\)/);
  assert.match(skinLoader, /setTimeout\(done,1400\)/);
  assert.match(fitnessLoader, /releaseBootShieldWhenStable/);
  assert.match(fitnessLoader, /new MutationObserver\(settle\)/);
  assert.match(fitnessLoader, /setTimeout\(done,180\)/);
  assert.match(fitnessLoader, /setTimeout\(done,1500\)/);
});

test('calendar presentation keeps captioned Summary markers and v10 deduplicates each routine entity per date', () => {
  assert.match(experience, /routine-calendar-count/);
  assert.match(experience, /#fitnessCalendarGrid \.fitness-calendar-day>b/);
  assert.match(experience, /bl-calendar-marker-caption/);
  assert.match(experience, /data-calendar-summary-filter/);
  assert.match(experience, /openSummaryForMarker/);
  assert.match(experienceV10, /function dedupeCalendarMarkers/);
  assert.match(experienceV10, /marker\.dataset\.calendarSummaryFilter/);
  assert.match(experienceV10, /function ensureMarkerCaptions/);
  assert.match(experienceCssV10, /\.bl-calendar-marker-caption/);
});

test('Routine Summary retains the established searchable control but v10 owns a readable common scale and shared geometry', () => {
  assert.match(experience, /function ensureSearchableSelect/);
  assert.match(experience, /role=\"combobox\"/);
  assert.match(experience, /dedupeSummaryControls/);
  assert.match(experienceCss, /bl-search-select-source/);
  assert.match(experienceCssV10, /--bl-routine-font-size:18px/);
  assert.match(experienceCssV10, /\.routine-summary-grid,.fitness-summary-detail-grid,.bl-routine-summary-grid,.bl-public-v3-detail-grid/);
  assert.match(experienceCssV10, /grid-template-columns:minmax\(260px,.8fr\) minmax\(0,1.4fr\)/);
  assert.doesNotMatch(experienceCssV10, /font-size:(?:14|15|16)px/);
});

test('all My Routine dropdowns use one opaque top-layer palette-aware contract with a centred CSS chevron', () => {
  assert.match(experienceV10, /function normaliseDropdowns/);
  assert.match(experienceV10, /function ensureSelectShell/);
  assert.match(experienceCssV10, /z-index:2147483000!important/);
  assert.match(experienceCssV10, /opacity:1!important/);
  assert.match(experienceCssV10, /background:var\(--bl-routine-menu\)!important/);
  assert.match(experienceCssV10, /pointer-events:auto!important/);
  assert.match(experienceCssV10, /border-right:2px solid currentColor/);
  assert.match(experienceCssV10, /top:50%/);
});

test('sitewide terminology uses Individual Routine Steps instead of user-facing Ungrouped/items labels', () => {
  assert.match(experienceV10, /Individual Routine Steps/);
  assert.match(experienceV10, /All Routine Steps/);
  assert.match(experienceV10, /optgroup/);
});

test('Skincare has a group completion checkbox and a fallback for broken group expansion', () => {
  assert.match(experienceV10, /function ensureSkinGroupCheckboxes/);
  assert.match(experienceV10, /data-v10-group-complete/);
  assert.match(experienceV10, /box\.indeterminate/);
  assert.match(experienceV10, /function makeCollapseFallback/);
  assert.match(experienceV10, /data-plan-group-collapse/);
  assert.match(experienceV10, /data-group-collapse/);
  assert.match(experienceCssV10, /\.bl-routine-group-complete input/);
});

test('Public Routine presentation is shared, interactive and mapped to the same read-only Routine structure', () => {
  assert.match(experience, /normalisePublic/);
  assert.match(experience, /dedupePublicProfileControls/);
  assert.match(experienceV10, /function normalisePublicViewer/);
  assert.match(experienceV10, /bl-routine-summary-card/);
  assert.match(experienceV10, /bl-routine-summary-grid/);
  assert.match(experienceV10, /tab\.style\.pointerEvents='auto'/);
  assert.match(experienceV10, /function normaliseVisibility/);
  assert.match(experienceV10, /My Routine Visibility/);
  assert.match(experienceCssV10, /\.bl-public-v3-calendar/);
  assert.match(experienceCssV10, /\.bl-public-visibility-slot/);
});

test('Fitness Summary content stays comprehensive while v10 supplies the Skincare-shaped layout', () => {
  assert.match(fitnessCoherence, /Activity profile/);
  assert.match(fitnessCoherence, /Energy demand/);
  assert.match(fitnessCoherence, /Primary muscle involvement/);
  assert.match(fitnessCoherence, /Benefits and training role/);
  assert.match(fitnessCoherence, /exerciseMuscles/);
  assert.match(fitnessCoherence, /exerciseDemand/);
  assert.match(fitnessCoherence, /Relevant session measures/);
  assert.match(fitnessCoherence, /Technique:/);
  assert.match(fitnessCoherence, /Progression:/);
  assert.match(fitnessCoherence, /bl-routine-summary-grid/);
  assert.doesNotMatch(experienceV10, /function activityProfile|function exerciseMuscles|function exerciseDemand/);
});

test('Fitness saved plan naming and helper copy are normalised without another plan renderer', () => {
  assert.match(experienceV10, /\.replace\(\/Saved plan/);
  assert.match(experienceV10, /Workout Date:/);
  assert.match(experienceV10, /Session\\s\+\(\\d\+\)/);
  assert.match(experienceV10, /outer\.textContent=name/);
  assert.match(experienceCssV10, /my-plan-saved-head/);
  assert.match(experienceCssV10, /background:transparent!important/);
  assert.match(experienceV10, /The current workout is shown first\. Completed workouts and upcoming workouts are separated into their own tabs\./);
});

test('Fitness exercise cards are a centred exercise header above controls and Details columns with system-token colours', () => {
  assert.match(experienceV10, /function normaliseExerciseCards/);
  assert.match(experienceV10, /bl-v10-exercise-columns/);
  assert.match(experienceV10, /bl-v10-exercise-controls/);
  assert.match(experienceV10, /bl-v10-exercise-details/);
  assert.match(experienceV10, /select\.hidden=false/);
  assert.match(experienceCssV10, /grid-template-areas:"exercise-header" "exercise-columns"/);
  assert.match(experienceCssV10, /grid-template-columns:minmax\(0,1fr\) minmax\(0,1fr\)/);
  assert.match(experienceCssV10, /\.ex-search-input,/);
  assert.match(experienceCssV10, /color:var\(--bl-routine-muted\)!important/);
  assert.doesNotMatch(experienceCssV10, /#(?:ff69b4|ffc0cb|db7093|ff1493)/i);
});

test('Fitness generator treats baseline as Max Baseline and keeps Straight Sets equal', () => {
  assert.match(generator, /label\.textContent='Max Baseline'/);
  assert.match(generator, /Math\.round\(\(Math\.max\(1,Number\(baseline\)\|\|1\)\)\*0\.80\)/);
  assert.match(generator, /Array\(sets\(count\)\)\.fill\(working\)/);
  assert.match(generator, /straightTargets/);
  assert.match(generator, /copy\.progressionMode=value\.progressionMode/);
  assert.match(generator, /copy\.repIncrease=value\.repIncrease/);
  assert.match(generator, /copy\.baseline=value\.baseline/);
  assert.match(generator, /copy\.sets=value\.sets/);
  assert.match(generator, /straightInitialTargets:initialStraight/);
});

test('Days Per Week is a constrained min-max range and Start Date stays editable', () => {
  assert.match(experienceV10, /Days Per Week/);
  assert.match(experienceV10, /Not Selected/);
  assert.match(experienceV10, /min\+index\+1/);
  assert.match(experienceV10, /bl-frequency-range-dash/);
  assert.match(experienceCssV10, /grid-template-columns:minmax\(100px,1fr\) auto minmax\(120px,1fr\)/);
  assert.match(generator, /start\.removeAttribute\('min'\)/);
  assert.match(schedule, /start\.disabled = false/);
  assert.match(schedule, /start\.removeAttribute\('min'\)/);
  assert.doesNotMatch(schedule, /start\.min\s*=\s*today/);
});

test('Routine Log date is sitewide Date, future dates are blocked and accidental activities can be removed', () => {
  assert.match(experienceV10, /#fitnessRoutineLogDate/);
  assert.match(experienceV10, /#routineLogDate/);
  assert.match(experienceV10, /input\.max=today/);
  assert.match(experienceV10, /span\.textContent='Date'/);
  assert.match(experienceV10, /showPicker/);
  assert.match(experienceV10, /function addLogRemovalControls/);
  assert.match(experienceV10, /data-v10-remove-activity/);
  assert.match(experienceV10, /data-v10-remove-skin-step/);
  assert.match(experienceV10, /data-activity-remove-request/);
  assert.match(experienceV10, /data-remove-request/);
});

test('requested self-explanatory helper copy is removed in one sitewide pass', () => {
  for (const text of [
    'Record calisthenics and other planned fitness activity for the selected date.',
    'Search the grouped catalogue, add an activity, then set its schedule and the details relevant to that activity.',
    'Keep separate plans for muscle groups, sports preparation or training days.',
    'The current workout is shown first. Completed workouts and upcoming workouts are separated into their own tabs.',
    'Current workout available within your weekly frequency.',
    'Type to find an action or open the grouped dropdown, then set its time, frequency, benefit summary and personal notes.'
  ]) assert.ok(experienceV10.includes(text));
  assert.match(experienceV10, /if \(COPY_TO_REMOVE\.has\(text\)\) node\.remove\(\)/);
});

test('single-option Fitness controls remain values rather than fake dropdown choices', () => {
  assert.match(experience, /function singleOptionSelects/);
  assert.match(experience, /options\.length!==1/);
  assert.match(experience, /bl-single-option-field/);
  assert.match(experienceCss, /\.bl-single-option-field select\{display:none!important\}/);
  assert.match(experienceCss, /\.bl-single-option-value/);
});

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
    assert.ok(loader.includes('BASELINE_RoutineExperienceV10Ready'));
  }
  assert.doesNotMatch(skinLoader, /skincare-routine-interactions-v1\.js/);
  assert.match(experience, /NEVER owns routine data/);
  assert.doesNotMatch(experience, /function enrichFitnessSummary/);
  assert.ok(experienceV10.includes('SITEWIDE CONTRACT — DO NOT ADD SYSTEM-SPECIFIC COPIES'));
  assert.ok(experienceCssV10.includes('SITEWIDE MY ROUTINE INVARIANTS — DO NOT DRIFT'));
});

test('v10 shared runtime is syntactically valid JavaScript', () => {
  assert.doesNotThrow(() => new Function(experienceV10));
});

test('both systems hold first paint until a materially quiet My Routine DOM', () => {
  for (const loader of [skinLoader, fitnessLoader]) {
    assert.ok(loader.includes('releaseBootShieldWhenStable'));
    assert.ok(loader.includes('new MutationObserver(settle)'));
    assert.ok(loader.includes('setTimeout(done,180)'));
  }
  assert.ok(skinLoader.includes('setTimeout(done,1400)'));
  assert.ok(fitnessLoader.includes('setTimeout(done,1500)'));
});

test('calendar presentation keeps captioned Summary markers and deduplicates each routine entity per date', () => {
  assert.match(experience, /routine-calendar-count/);
  assert.match(experience, /#fitnessCalendarGrid \.fitness-calendar-day>b/);
  assert.ok(experience.includes('openSummaryForMarker'));
  assert.ok(experienceV10.includes('function dedupeCalendarMarkers'));
  assert.ok(experienceV10.includes('marker.dataset.calendarSummaryFilter'));
  assert.ok(experienceV10.includes('function ensureMarkerCaptions'));
  assert.ok(experienceCssV10.includes('.bl-calendar-marker-caption'));
});

test('Routine Summary keeps the searchable control but uses one readable common scale and shared geometry', () => {
  assert.ok(experience.includes('function ensureSearchableSelect'));
  assert.ok(experience.includes('role="combobox"'));
  assert.ok(experience.includes('dedupeSummaryControls'));
  assert.ok(experienceCss.includes('bl-search-select-source'));
  assert.ok(experienceCssV10.includes('--bl-routine-font-size:18px'));
  assert.ok(experienceCssV10.includes('.routine-summary-grid,.fitness-summary-detail-grid,.bl-routine-summary-grid,.bl-public-v3-detail-grid'));
  assert.ok(experienceCssV10.includes('grid-template-columns:minmax(260px,.8fr) minmax(0,1.4fr)'));
  assert.doesNotMatch(experienceCssV10, /font-size:(?:14|15|16)px/);
  assert.doesNotMatch(experienceCss, /font-size:(?:13|14|15|16)px/);
});

test('all My Routine dropdowns use one opaque top-layer palette-aware contract with a centred CSS chevron', () => {
  assert.ok(experienceV10.includes('function normaliseDropdowns'));
  assert.ok(experienceV10.includes('function ensureSelectShell'));
  assert.ok(experienceCssV10.includes('z-index:2147483000!important'));
  assert.ok(experienceCssV10.includes('opacity:1!important'));
  assert.ok(experienceCssV10.includes('background:var(--bl-routine-menu)!important'));
  assert.ok(experienceCssV10.includes('pointer-events:auto!important'));
  assert.ok(experienceCssV10.includes('border-right:2px solid currentColor'));
  assert.ok(experienceCssV10.includes('top:50%'));
});

test('sitewide terminology exposes Individual Routine Steps rather than Ungrouped/items labels', () => {
  assert.ok(experienceV10.includes('Individual Routine Steps'));
  assert.ok(experienceV10.includes('All Routine Steps'));
  assert.ok(experienceV10.includes("$$('optgroup',root)"));
});

test('Skincare has group completion and a fallback for broken group expansion', () => {
  assert.ok(experienceV10.includes('function ensureSkinGroupCheckboxes'));
  assert.ok(experienceV10.includes('data-v10-group-complete'));
  assert.ok(experienceV10.includes('box.indeterminate'));
  assert.ok(experienceV10.includes('function makeCollapseFallback'));
  assert.ok(experienceV10.includes('[data-plan-group-collapse]'));
  assert.ok(experienceV10.includes('[data-group-collapse]'));
  assert.ok(experienceCssV10.includes('.bl-routine-group-complete input'));
});

test('Public Routine presentation is shared, interactive and mapped to the same read-only Routine structure', () => {
  assert.ok(experience.includes('normalisePublic'));
  assert.ok(experience.includes('dedupePublicProfileControls'));
  assert.ok(experienceV10.includes('function normalisePublicViewer'));
  assert.ok(experienceV10.includes('bl-routine-summary-card'));
  assert.ok(experienceV10.includes('bl-routine-summary-grid'));
  assert.ok(experienceV10.includes("tab.style.pointerEvents='auto'"));
  assert.ok(experienceV10.includes('function normaliseVisibility'));
  assert.ok(experienceV10.includes('My Routine Visibility'));
  assert.ok(experienceCssV10.includes('.bl-public-v3-calendar'));
  assert.ok(experienceCssV10.includes('.bl-public-visibility-slot'));
});

test('Fitness Summary content stays comprehensive while v10 supplies the Skincare-shaped layout', () => {
  for (const phrase of ['Activity profile','Energy demand','Primary muscle involvement','Benefits and training role','exerciseMuscles','exerciseDemand','Relevant session measures','Technique:','Progression:','bl-routine-summary-grid']) {
    assert.ok(fitnessCoherence.includes(phrase));
  }
  assert.doesNotMatch(experienceV10, /function activityProfile|function exerciseMuscles|function exerciseDemand/);
});

test('Fitness saved plan naming and helper copy are normalised without another plan renderer', () => {
  assert.ok(experienceV10.includes("replace(/Saved plan"));
  assert.ok(experienceV10.includes('Workout Date:'));
  assert.ok(experienceV10.includes('Session\\s+(\\d+)'));
  assert.ok(experienceV10.includes('outer.textContent=name'));
  assert.ok(experienceCssV10.includes('my-plan-saved-head'));
  assert.ok(experienceCssV10.includes('background:transparent!important'));
  assert.ok(experienceV10.includes('The current workout is shown first. Completed workouts and upcoming workouts are separated into their own tabs.'));
});

test('Fitness exercise cards are a centred exercise header above controls and Details columns using system tokens', () => {
  for (const phrase of ['function normaliseExerciseCards','bl-v10-exercise-columns','bl-v10-exercise-controls','bl-v10-exercise-details','select.hidden=false']) assert.ok(experienceV10.includes(phrase));
  assert.ok(experienceCssV10.includes('grid-template-areas:"exercise-header" "exercise-columns"'));
  assert.ok(experienceCssV10.includes('grid-template-columns:minmax(0,1fr) minmax(0,1fr)'));
  assert.ok(experienceCssV10.includes('.ex-search-input,'));
  assert.ok(experienceCssV10.includes('color:var(--bl-routine-muted)!important'));
  assert.doesNotMatch(experienceCssV10, /#(?:ff69b4|ffc0cb|db7093|ff1493)/i);
});

test('Fitness generator still treats baseline as Max Baseline and keeps Straight Sets equal', () => {
  assert.match(generator, /label\.textContent='Max Baseline'/);
  assert.match(generator, /Math\.round\(\(Math\.max\(1,Number\(baseline\)\|\|1\)\)\*0\.80\)/);
  assert.match(generator, /Array\(sets\(count\)\)\.fill\(working\)/);
  for (const phrase of ['straightTargets','copy.progressionMode=value.progressionMode','copy.repIncrease=value.repIncrease','copy.baseline=value.baseline','copy.sets=value.sets','straightInitialTargets:initialStraight']) assert.ok(generator.includes(phrase));
});

test('Days Per Week is a constrained min-max range and Start Date stays editable', () => {
  for (const phrase of ['Days Per Week','Not Selected','min+index+1','bl-frequency-range-dash']) assert.ok(experienceV10.includes(phrase));
  assert.ok(experienceCssV10.includes('grid-template-columns:minmax(100px,1fr) auto minmax(120px,1fr)'));
  assert.ok(generator.includes("start.removeAttribute('min')"));
  assert.ok(schedule.includes('start.disabled = false'));
  assert.ok(schedule.includes("start.removeAttribute('min')"));
  assert.doesNotMatch(schedule, /start\.min\s*=\s*today/);
});

test('Routine Log date is sitewide Date, future dates are blocked and accidental activities can be removed', () => {
  for (const phrase of ['#fitnessRoutineLogDate','#routineLogDate','input.max=today',"span.textContent='Date'",'showPicker','function addLogRemovalControls','data-v10-remove-activity','data-v10-remove-skin-step','data-activity-remove-request','data-remove-request']) assert.ok(experienceV10.includes(phrase));
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
  assert.ok(experienceV10.includes('if (COPY_TO_REMOVE.has(text)) node.remove()'));
});

test('single-option Fitness controls remain values rather than fake dropdown choices', () => {
  assert.ok(experience.includes('function singleOptionSelects'));
  assert.ok(experience.includes('options.length!==1'));
  assert.ok(experience.includes('bl-single-option-field'));
  assert.ok(experienceCss.includes('.bl-single-option-field select{display:none!important}'));
  assert.ok(experienceCss.includes('.bl-single-option-value'));
});

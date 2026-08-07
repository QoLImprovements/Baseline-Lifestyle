import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const experience = read('sitewide/js/baseline-routine-experience-v9.js');
const experienceCss = read('sitewide/css/baseline-routine-experience-v9.css');
const fitnessCoherence = read('systems/baseline-fitness/js/fitness-routine-coherence-v1.js');
const generator = read('systems/baseline-fitness/js/fitness-plan-generator-coherence-v4.js');
const schedule = read('systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js');

test('Skincare and Fitness load the same reusable My Routine experience after shared authorities', () => {
  for (const loader of [skinLoader, fitnessLoader]) {
    const authority = loader.indexOf('baseline-routine-authority-v7.js');
    const experienceIndex = loader.indexOf('baseline-routine-experience-v9.js');
    assert.ok(authority >= 0 && experienceIndex > authority);
  }
  assert.doesNotMatch(skinLoader, /skincare-routine-interactions-v1\.js/);
  assert.match(experience, /NEVER owns routine data/);
  assert.doesNotMatch(experience, /function enrichFitnessSummary/);
});

test('calendar presentation removes obsolete aggregate badges but keeps functional captioned Summary markers', () => {
  assert.match(experience, /routine-calendar-count/);
  assert.match(experience, /#fitnessCalendarGrid \.fitness-calendar-day>b/);
  assert.match(experience, /bl-calendar-marker-caption/);
  assert.match(experience, /data-calendar-summary-filter/);
  assert.match(experience, /openSummaryForMarker/);
  assert.match(experienceCss, /\.routine-calendar-count/);
  assert.match(experienceCss, /\.fitness-calendar-day>b/);
  assert.match(experienceCss, /bl-routine-calendar-toggle/);
  assert.match(experienceCss, /aria-selected="true"/);
});

test('Routine Summary uses one searchable control and site-readable typography', () => {
  assert.match(experience, /function ensureSearchableSelect/);
  assert.match(experience, /role=\"combobox\"/);
  assert.match(experience, /Type or choose a routine group or task/);
  assert.match(experience, /dedupeSummaryControls/);
  assert.match(experienceCss, /font-size:16px/);
  assert.match(experienceCss, /bl-search-select-source/);
  assert.match(experienceCss, /bl-search-select-menu/);
});

test('Skincare product selection exposes every Baseline recipe under the requested category', () => {
  assert.match(skinLoader, /#recipes \.recipe-page,#recipes \[data-recipe-slug\]/);
  assert.doesNotMatch(skinLoader, /\.recipe-page\[id\]/);
  assert.match(skinLoader, /Baseline Skincare Recipes/);
  assert.match(skinLoader, /function normaliseRecipeOptions/);
  assert.match(skinLoader, /recipeProducts:allRecipes/);
  assert.match(skinLoader, /group\.replaceChildren/);
});

test('Skincare boot shield waits for a quiet stable My Routine DOM instead of revealing intermediate layouts', () => {
  assert.match(skinLoader, /releaseBootShieldWhenStable/);
  assert.match(skinLoader, /new MutationObserver\(settle\)/);
  assert.match(skinLoader, /setTimeout\(done,90\)/);
  assert.match(skinLoader, /setTimeout\(done,500\)/);
});

test('shared plan presentation protects alignment, reorder visibility and one coherent Fitness plan card', () => {
  assert.match(experience, /normaliseSkinPlanOrder/);
  assert.match(experience, /skinRoutineOrder/);
  assert.match(experience, /bl-routine-group-meta/);
  assert.match(experience, /cleanFitnessPlanShell/);
  assert.match(experience, /mergeCalisthenicsPlanCards/);
  assert.match(experience, /collapseFitnessGroupEditors/);
  assert.match(experienceCss, /grid-template-columns:minmax\(0,1fr\) auto auto/);
  assert.match(experienceCss, /#routine \.routine-item-head \.routine-order\{display:none!important\}/);
  assert.match(experienceCss, /bl-routine-plan-shell-card/);
  assert.match(experienceCss, /bl-routine-group-editor>summary/);
});

test('Public Routine presentation is shared, left aligned, compact and view-only shaped', () => {
  assert.match(experience, /normalisePublic/);
  assert.match(experience, /normaliseVisibility/);
  assert.match(experience, /dedupePublicProfileControls/);
  assert.match(experienceCss, /\.bl-public-v3-head\{/);
  assert.match(experienceCss, /justify-items:start!important/);
  assert.match(experienceCss, /\.bl-public-v3-tabs/);
  assert.match(experienceCss, /justify-content:flex-start!important/);
  assert.match(experienceCss, /bl-routine-compact-action/);
  assert.match(experienceCss, /bl-public-visibility-slot/);
});

test('Fitness Summary content is comprehensive while the shared experience owns only its layout', () => {
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
  assert.doesNotMatch(experience, /activityProfile|exerciseMuscles|exerciseDemand/);
});

test('Fitness generator treats baseline as Max Baseline and keeps Straight Sets equal', () => {
  assert.match(generator, /label\.textContent='Max Baseline'/);
  assert.match(generator, /Math\.round\(\(Math\.max\(1,Number\(baseline\)\|\|1\)\)\*0\.80\)/);
  assert.match(generator, /Array\(sets\(count\)\)\.fill\(working\)/);
  assert.match(generator, /straightTargets/);
  assert.match(generator, /progressionMode:value\.progressionMode/);
  assert.match(generator, /copy\.progressionMode=value\.progressionMode/);
  assert.match(generator, /copy\.repIncrease=value\.repIncrease/);
  assert.match(generator, /copy\.baseline=value\.baseline/);
  assert.match(generator, /copy\.sets=value\.sets/);
  assert.match(generator, /straightInitialTargets:initialStraight/);
});

test('Fitness generator form shows relevant fields, units inside controls and keeps start date editable', () => {
  assert.match(generator, /bl-input-with-unit/);
  assert.match(generator, /def\.unit==='seconds'\?'seconds':'reps'/);
  assert.match(generator, /bl-generator-settings-grid/);
  assert.match(generator, /bl-generator-mode-hidden/);
  assert.match(generator, /goalExercise\.disabled=!goal/);
  assert.match(generator, /goalAmount\.disabled=!goal/);
  assert.match(generator, /start\.removeAttribute\('min'\)/);
  assert.match(schedule, /start\.disabled = false/);
  assert.match(schedule, /start\.removeAttribute\('min'\)/);
  assert.doesNotMatch(schedule, /start\.min\s*=\s*today/);
  assert.match(experienceCss, /bl-field-unit/);
  assert.match(experienceCss, /bl-frequency-range-dash/);
  assert.match(experienceCss, /grid-template-columns:minmax\(150px,240px\) auto minmax\(120px,190px\)/);
});

test('single-option Fitness controls are rendered as values rather than fake dropdown choices', () => {
  assert.match(experience, /function singleOptionSelects/);
  assert.match(experience, /options\.length!==1/);
  assert.match(experience, /bl-single-option-field/);
  assert.match(experienceCss, /\.bl-single-option-field select\{display:none!important\}/);
  assert.match(experienceCss, /\.bl-single-option-value/);
});

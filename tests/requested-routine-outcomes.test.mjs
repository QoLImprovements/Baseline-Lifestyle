import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const coherence = read('sitewide/js/baseline-routine-coherence-v12.js');
const css = read('sitewide/css/baseline-routine-coherence-v12.css');
const publicViewer = read('sitewide/js/baseline-public-routine-viewonly-v4.js');
const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const exerciseCss = read('systems/baseline-fitness/css/fitness-multiple-plans.css');

test('calendar entries are circle numbers only and captions are hover/accessibility metadata', () => {
  assert.match(coherence,/title=\"\$\{esc\(marker\.label\)\}\"/);
  assert.match(coherence,/aria-label=\"Open Routine Summary:/);
  assert.match(publicViewer,/title=\"\$\{esc\(marker\.label\)\}\"/);
  assert.match(publicViewer,/data-public-summary-target/);
  assert.doesNotMatch(css,/\.bl-routine-calendar-marker>span/);
});

test('calendar marker clicks select the matching Routine Summary filter', () => {
  assert.match(coherence,/data-routine-summary-target/);
  assert.match(coherence,/select\.value\s*=\s*target/);
  assert.match(coherence,/skinRoutineSummaryFilter/);
  assert.match(coherence,/fitnessSummaryGroupFilter/);
  assert.match(publicViewer,/summaryFilter=String\(marker\.dataset\.publicSummaryTarget/);
});

test('Fitness Calisthenics markers are plan/group based and deduplicated', () => {
  assert.match(coherence,/key:`plan:\$\{Number\(plan\.planId\)\}`/);
  assert.match(coherence,/const seen\s*=\s*new Set\(\)/);
  assert.match(publicViewer,/key:`plan:\$\{Number\(plan\.planId\)\}`/);
  assert.doesNotMatch(coherence,/plan\.planJson\?\.items.*markers/s);
});

test('Routine Log completion is reversible on the viewed date with no extra Remove control', () => {
  assert.match(skinLoader,/Completed on this date/);
  assert.match(coherence,/preserveFitnessCompleted/);
  assert.match(coherence,/data-fitness-log-complete/);
  assert.doesNotMatch(coherence,/data-v11-remove|data-v12-remove|Remove\?<\/span>/);
});

test('sitewide terminology and compact Fitness frequency range follow the requested language', () => {
  assert.match(coherence,/Individual Routine Steps/);
  assert.match(coherence,/All Routine Steps/);
  assert.match(coherence,/Days Per Week/);
  assert.match(coherence,/Workout Date:/);
  assert.match(css,/\.bl-frequency-range-dash/);
  assert.match(css,/minmax\(88px,130px\)/);
  assert.match(css,/field-stack:has\(#frequencyRangeMax\)>span\{display:none!important\}/);
});

test('every My Routine dropdown uses one shared shape and centred chevron geometry', () => {
  assert.match(css,/border-radius:14px!important/);
  assert.match(css,/min-height:50px!important/);
  assert.match(css,/grid-template-columns:minmax\(0,1fr\) 50px!important/);
  assert.match(css,/calc\(50% - 2px\)/);
});

test('Calisthenics exercise cards use the requested centred header plus left controls and right Details', () => {
  assert.match(exerciseCss,/grid-template-areas:[\s\S]*"exercise exercise"[\s\S]*"progression details"[\s\S]*"baseline details"[\s\S]*"sets details"/);
  assert.match(exerciseCss,/\.ex-field-exercise[\s\S]*justify-self:center!important/);
  assert.match(exerciseCss,/\.ex-details-card::before[\s\S]*content:"Details"/);
  assert.match(exerciseCss,/Do not restore the old horizontal/);
  assert.doesNotMatch(exerciseCss,/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/);
});

test('Public Routines expose Log Summary Plan and calendar as View Only My Routine', () => {
  for (const phrase of ["User's Log","User's Routine Summary","User's Plan",'View Only','calendarHtml','routine-summary-item','routine-plan-group']) assert.ok(publicViewer.includes(phrase));
  assert.match(publicViewer,/type=\"checkbox\" disabled/);
  assert.doesNotMatch(publicViewer,/injectStyles|bl-public-v3/);
});

test('visibility and dropdown styling inherit the active system rather than inventing a palette', () => {
  assert.match(coherence,/My Routine Visibility/);
  assert.match(css,/\.bl-routine-visibility-control/);
  assert.match(css,/var\(--bl-routine-menu,var\(--card-bg/);
  assert.doesNotMatch(css,/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const v10 = read('sitewide/js/baseline-routine-experience-v10.js');
const v10Css = read('sitewide/css/baseline-routine-experience-v10.css');
const v9Css = read('sitewide/css/baseline-routine-experience-v9.css');
const routineBaseCss = read('sitewide/css/baseline-routine-system.css');
const skinWorkspaceCss = read('systems/baseline-natural-skincare/css/skincare-routine.css');
const skinAdapterCss = read('systems/baseline-natural-skincare/css/skincare-routine-sitewide-v4.css');
const fitnessWorkspaceCss = read('systems/baseline-fitness/css/fitness-routine-workspace-v2.css');
const fitnessAdapterCss = read('systems/baseline-fitness/css/fitness-routine-sitewide-v3.css');
const fitnessPlansCss = read('systems/baseline-fitness/css/fitness-multiple-plans.css');
const fitnessCoherence = read('systems/baseline-fitness/js/fitness-routine-coherence-v1.js');
const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const publicViewer = read('sitewide/js/baseline-public-routine-groups-v1.js');

const routineCss = [routineBaseCss,v9Css,v10Css,skinWorkspaceCss,skinAdapterCss,fitnessWorkspaceCss,fitnessAdapterCss,fitnessPlansCss].join('\n');

test('My Routine v10 and the Fitness Summary adapter parse and use one final authority chain', () => {
  assert.doesNotThrow(() => new Function(v10));
  assert.doesNotThrow(() => new Function(fitnessCoherence));
  assert.ok(v10.includes('SITEWIDE CONTRACT — DO NOT ADD SYSTEM-SPECIFIC COPIES'));
  assert.ok(fitnessCoherence.includes('Skincare is the visual/structural template for Routine Summary sitewide.'));
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.ok(loader.indexOf('baseline-routine-experience-v10.js') > loader.indexOf('baseline-routine-experience-v9.js'));
    assert.ok(loader.includes('BASELINE_RoutineExperienceV10Ready'));
  }
});

test('My Routine has no legacy tiny 12–16px type in active shared, Skincare or Fitness routine styles', () => {
  assert.doesNotMatch(routineCss,/font-size\s*:\s*(?:12|13|14|15|16)px/i);
  assert.ok(v10Css.includes('--bl-routine-font-size:18px'));
  assert.ok(routineBaseCss.includes('font-size:18px'));
  assert.ok(skinWorkspaceCss.includes('common minimum is'));
  assert.ok(skinAdapterCss.includes('sitewide 18px My Routine minimum'));
});

test('Fitness My Routine does not reintroduce the former outsider pink UI colours', () => {
  assert.doesNotMatch([fitnessWorkspaceCss,fitnessAdapterCss,fitnessPlansCss].join('\n'),/#(?:f0b5bf|ffbdc7|d83b52|b11226|741629|35131c|120a0e)\b/i);
  assert.ok(fitnessAdapterCss.includes('--bl-routine-accent:var(--accent)'));
  assert.ok(fitnessWorkspaceCss.includes('background-color:var(--card-bg)!important'));
  assert.ok(fitnessPlansCss.includes('color:var(--muted)!important'));
});

test('all routine dropdown surfaces are opaque, top-layer and use one CSS chevron', () => {
  for (const phrase of ['z-index:2147483000!important','opacity:1!important','background:var(--bl-routine-menu)!important','pointer-events:auto!important','border-right:2px solid currentColor','top:50%']) assert.ok(v10Css.includes(phrase));
  assert.ok(v10.includes('function normaliseDropdowns'));
});

test('Skincare group completion, calendar Summary filtering and Fitness marker dedupe are guarded', () => {
  for (const phrase of ['function ensureSkinGroupCheckboxes','data-v10-group-complete','function dedupeCalendarMarkers','data-calendar-summary-filter','function ensureMarkerCaptions']) assert.ok(v10.includes(phrase));
});

test('Routine Summary and Public Routine use the same shared card/detail geometry', () => {
  assert.ok(v10Css.includes('.routine-summary-grid,.fitness-summary-detail-grid,.bl-routine-summary-grid,.bl-public-v3-detail-grid'));
  assert.ok(v10Css.includes('.routine-summary-item,.fitness-exercise-summary-item,.bl-routine-summary-card,.bl-public-v3-item'));
  assert.ok(fitnessCoherence.includes('routine-summary-title'));
  assert.ok(fitnessCoherence.includes('<h4>Routine details</h4>'));
  assert.ok(fitnessCoherence.includes('<h4>Benefits and practical role</h4>'));
  assert.ok(fitnessCoherence.includes("card.querySelector(':scope>.fitness-summary-meta')?.remove()"));
  assert.ok(fitnessCoherence.includes("card.querySelector(':scope>.fitness-summary-exercises')?.remove()"));
  assert.ok(v10.includes('function normalisePublicViewer'));
  assert.ok(publicViewer.includes("User's Log"));
  assert.ok(publicViewer.includes("User's Routine Summary"));
  assert.ok(publicViewer.includes("User's Plan"));
  assert.ok(publicViewer.includes('function renderWeekCalendar'));
  assert.ok(publicViewer.includes('function handleClick'));
});

test('requested Fitness generator and Routine Log wording/behaviour are protected', () => {
  for (const phrase of ['Days Per Week','Not Selected','min+index+1','Workout Date:','showPicker','input.max=today',"span.textContent='Date'",'function addLogRemovalControls','Session\\s+(\\d+)']) assert.ok(v10.includes(phrase));
  assert.ok(v10Css.includes('grid-template-areas:"exercise-header" "exercise-columns"'));
  assert.ok(v10Css.includes('bl-v10-exercise-details'));
});

test('obsolete helper copy is explicitly removed before My Routine is revealed', () => {
  for (const text of [
    'Record calisthenics and other planned fitness activity for the selected date.',
    'Search the grouped catalogue, add an activity, then set its schedule and the details relevant to that activity.',
    'Keep separate plans for muscle groups, sports preparation or training days.',
    'The current workout is shown first. Completed workouts and upcoming workouts are separated into their own tabs.',
    'Current workout available within your weekly frequency.',
    'Type to find an action or open the grouped dropdown, then set its time, frequency, benefit summary and personal notes.'
  ]) assert.ok(v10.includes(text));
  assert.ok(v10.includes('if (COPY_TO_REMOVE.has(text)) node.remove()'));
});

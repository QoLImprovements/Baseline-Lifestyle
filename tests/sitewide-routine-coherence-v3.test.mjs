import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Skincare and Fitness load one shared stable My Routine layer', () => {
  const skincare = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
  const fitness = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  const shared = '/sitewide/js/baseline-routine-coherence-v4.js';
  const events = '/sitewide/js/baseline-routine-coherence-events-v4.js';

  assert.match(skincare, new RegExp(shared.replaceAll('/', '\\/')));
  assert.match(fitness, new RegExp(shared.replaceAll('/', '\\/')));
  assert.match(skincare, new RegExp(events.replaceAll('/', '\\/')));
  assert.match(fitness, new RegExp(events.replaceAll('/', '\\/')));
  assert.match(skincare, /loadWithoutMutationObserver/);
  assert.match(fitness, /loadWithoutMutationObserver/);
  assert.doesNotMatch(skincare, /baseline-routine-coherence-v3\.js/);
  assert.doesNotMatch(fitness, /baseline-routine-coherence-v3\.js/);
  assert.doesNotMatch(fitness, /fitness-routine-canonical|baseline-routine-canonical-v1/);
});

test('Fitness has a nested Routine Plan layer with shared cross-section groups', () => {
  const shared = read('sitewide/js/baseline-routine-coherence-v4.js');

  assert.match(shared, /Routine Plan/);
  assert.match(shared, /data-fitness-plan-view/);
  assert.match(shared, /Other Fitness Activities/);
  assert.match(shared, /Create Routine Group/);
  assert.match(shared, /fitnessRoutineGroups/);
  assert.match(shared, /fitnessRoutineAssignments/);
  assert.match(shared, /data-v4-entity-group/);
});

test('Create Another Plan and Open Plan have one authoritative handler before coherence fallbacks', () => {
  const multiplePlans = read('systems/baseline-fitness/js/fitness-multiple-plans.js');
  const authority = read('sitewide/js/baseline-fitness-plan-control-authority-v1.js');
  const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');

  assert.match(multiplePlans, />Create Another Plan<\/button>/);
  assert.doesNotMatch(multiplePlans, />Create another plan<\/button>/);
  assert.match(multiplePlans, /url\.searchParams\.set\('new-plan',\s*String\(Date\.now\(\)\)\)/);
  assert.match(authority, /#createCalisthenicsPlan/);
  assert.match(authority, /calisthenicsPlanSelect/);
  assert.match(authority, /stopImmediatePropagation/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.openPlan/);
  assert.ok(loader.indexOf('baseline-fitness-plan-control-authority-v1.js') < loader.indexOf('baseline-routine-coherence-v4.js'));
});

test('Calendar numbers use one aligned layer with a real hover and long-press caption portal', () => {
  const js = read('sitewide/js/baseline-routine-coherence-v4.js');
  const css = read('sitewide/css/baseline-routine-coherence-v4.css');

  assert.match(js, /bl-v4-calendar-cell/);
  assert.match(js, /bl-v4-calendar-tooltip/);
  assert.match(js, /pointerover/);
  assert.match(js, /pointerdown/);
  assert.match(js, /550/);
  assert.match(js, /openSummaryTarget/);
  assert.match(js, /querySelectorAll\(':scope > b/);
  assert.match(css, /\.bl-v4-calendar-marker\{/);
  assert.match(css, /justify-content:center/);
  assert.match(css, /position:fixed/);
  assert.match(css, /#8f1828/);
});

test('Routine summaries use readable system text and content-preserving bullet lists', () => {
  const js = read('sitewide/js/baseline-routine-coherence-v4.js');
  const css = read('sitewide/css/baseline-routine-coherence-v4.css');

  assert.match(js, /bulletiseSummary/);
  assert.match(js, /Muscles worked — and how they contribute/);
  assert.match(js, /Everyday activities this supports/);
  assert.match(css, /font-size:1\.125rem/);
  assert.match(css, /\.bl-v4-summary-list/);
  assert.match(css, /font-size:inherit!important/);
});

test('Visibility is compact and Routine Group filtering is wired in both systems', () => {
  const shared = read('sitewide/js/baseline-routine-coherence-v4.js');
  const css = read('sitewide/css/baseline-routine-coherence-v4.css');

  assert.match(shared, /My Routine Visibility/);
  assert.match(shared, /skinRoutineSummaryFilter/);
  assert.match(shared, /fitnessSummaryGroupFilter/);
  assert.match(shared, /applySkinSummaryFilter/);
  assert.match(shared, /applyFitnessSummaryFilter/);
  assert.match(css, /max-width:140px/);
  assert.match(css, /routine-visibility-control/);
});

test('Group numbers attach to Skincare groups and Fitness activities rather than category headings', () => {
  const shared = read('sitewide/js/baseline-routine-coherence-v4.js');

  assert.match(shared, /decorateSkinNumbers/);
  assert.match(shared, /routine-plan-group\[data-plan-group\]/);
  assert.match(shared, /routine-plan-group-ungrouped/);
  assert.match(shared, /decorateFitnessEntityNumbers/);
  assert.match(shared, /fitness-activity-item-head>div:first-child/);
  assert.doesNotMatch(shared, /fitness-routine-group-bar[\s\S]{0,120}bl-v4-number/);
});

test('Settings, Public Routines and completion display follow the coherent contract', () => {
  const shared = read('sitewide/js/baseline-routine-coherence-v4.js');
  const css = read('sitewide/css/baseline-routine-coherence-v4.css');
  const fitnessApi = read('systems/baseline-fitness/api/routine_state.php');
  const fitnessSchema = read('systems/baseline-fitness/api/schema.php');
  const groupedPublic = read('sitewide/js/baseline-public-routine-groups-v1.js');

  assert.match(shared, /data-v4-settings-toggle/);
  assert.match(shared, /data-v4-settings-panel/);
  assert.match(shared, /Public Routines/);
  assert.match(shared, /fitnessPublicRoutineName/);
  assert.match(css, /#completedWorkoutOut \.session-card>\.top>\.badge/);
  assert.match(fitnessApi, /requestedList/);
  assert.match(fitnessApi, /publicRoutine/);
  assert.match(fitnessApi, /'plans'=>bl_fitness_public_plans/);
  assert.match(fitnessSchema, /visibility TEXT NOT NULL DEFAULT/);
  assert.match(groupedPublic, /publicRoutine\.groups/);
  assert.match(groupedPublic, /publicRoutine\.assignments/);

  const publicPayload = fitnessApi.slice(
    fitnessApi.indexOf('function bl_fitness_public_payload'),
    fitnessApi.indexOf("try{\n  $db = bl_fitness_db()")
  );
  assert.doesNotMatch(publicPayload, /'logs'/);
});

test('Obsolete dated Skincare and Food footers remain removed', () => {
  const apiClient = read('sitewide/js/baseline-api.js');
  assert.match(apiClient, /Natural Skincare\|Food Approach/);
  assert.match(apiClient, /footer\.remove\(\)/);
});

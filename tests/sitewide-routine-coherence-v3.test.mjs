import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Skincare and Fitness load one shared My Routine coherence layer', () => {
  const skincare = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
  const fitness = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  const shared = '/sitewide/js/baseline-routine-coherence-v3.js';

  assert.match(skincare, new RegExp(shared.replaceAll('/', '\\/')));
  assert.match(fitness, new RegExp(shared.replaceAll('/', '\\/')));
  assert.ok(fitness.indexOf(`load('${shared}`) < fitness.indexOf('return loadStableRoutineGroupSettings()'));
  assert.ok(skincare.indexOf(`load('${shared}`) < skincare.indexOf('.then(loadStableRoutineGroupSettings)'));
});

test('Create Another Plan has canonical wording and forces a fresh route', () => {
  const multiplePlans = read('systems/baseline-fitness/js/fitness-multiple-plans.js');
  const coherence = read('sitewide/js/baseline-routine-coherence-v3.js');

  assert.match(multiplePlans, />Create Another Plan<\/button>/);
  assert.doesNotMatch(multiplePlans, />Create another plan<\/button>/);
  assert.match(multiplePlans, /url\.searchParams\.set\('new-plan', String\(Date\.now\(\)\)\)/);
  assert.match(coherence, /#createCalisthenicsPlan/);
  assert.match(coherence, /stopImmediatePropagation/);
});

test('Calendar markers are separate aligned controls with captions and long press', () => {
  const js = read('sitewide/js/baseline-routine-coherence-v3.js');
  const css = read('sitewide/css/baseline-routine-coherence-v3.css');

  assert.match(js, /bl-routine-calendar-cell/);
  assert.match(js, /createElement\('span'\)/);
  assert.match(js, /dataset\.caption/);
  assert.match(js, /pointerdown/);
  assert.match(js, /550/);
  assert.match(js, /openSkinSummary/);
  assert.match(js, /openFitnessSummary/);
  assert.match(css, /\.bl-routine-calendar-marker\{/);
  assert.match(css, /justify-content:center/);
  assert.match(css, /content:attr\(data-caption\)/);
});

test('Routine summaries use normal type and include muscle and everyday movement detail', () => {
  const js = read('sitewide/js/baseline-routine-coherence-v3.js');
  const css = read('sitewide/css/baseline-routine-coherence-v3.css');

  assert.match(js, /Muscles worked — and what each contributes/);
  assert.match(js, /Everyday movement this supports/);
  assert.match(js, /Why this movement is worth mastering/);
  assert.match(css, /#fitnessExerciseSummary[\s\S]*font-size:1rem/);
  assert.match(css, /font-size:inherit!important/);
});

test('Visibility and Public Routines are present in both systems without public logs', () => {
  const shared = read('sitewide/js/baseline-routine-coherence-v3.js');
  const fitnessApi = read('systems/baseline-fitness/api/routine_state.php');
  const fitnessSchema = read('systems/baseline-fitness/api/schema.php');

  assert.match(shared, /Routine Visibility/);
  assert.match(shared, /Public Routines/);
  assert.match(shared, /fitnessRoutineVisibility/);
  assert.match(shared, /fitnessPublicRoutineName/);
  assert.match(fitnessApi, /list=public|requestedList/);
  assert.match(fitnessApi, /publicRoutine/);
  assert.match(fitnessApi, /'plans'=>bl_fitness_public_plans/);
  assert.match(fitnessSchema, /visibility TEXT NOT NULL DEFAULT/);

  const publicPayload = fitnessApi.slice(
    fitnessApi.indexOf('function bl_fitness_public_payload'),
    fitnessApi.indexOf("try{\n  $db = bl_fitness_db()")
  );
  assert.doesNotMatch(publicPayload, /'logs'/);
});

test('Obsolete dated Skincare and Food footers are removed', () => {
  const apiClient = read('sitewide/js/baseline-api.js');
  assert.match(apiClient, /Natural Skincare\|Food Approach/);
  assert.match(apiClient, /footer\.remove\(\)/);
});

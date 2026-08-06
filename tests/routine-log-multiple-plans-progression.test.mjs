import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync(new URL('../sitewide/js/baseline-routine-system.js', import.meta.url), 'utf8');
const fitnessLog = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js', import.meta.url), 'utf8');
const fitnessCanonical = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-canonical.js', import.meta.url), 'utf8');
const skincareCore = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine.js', import.meta.url), 'utf8');
const skincareCanonical = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine-canonical.js', import.meta.url), 'utf8');
const plansRuntime = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-multiple-plans.js', import.meta.url), 'utf8');
const bridge = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-saved-data-bridge.js', import.meta.url), 'utf8');
const app = fs.readFileSync(new URL('../systems/baseline-fitness/js/baseline-fitness-app.js', import.meta.url), 'utf8');
const getPlan = fs.readFileSync(new URL('../systems/baseline-fitness/api/get_plan.php', import.meta.url), 'utf8');
const listPlans = fs.readFileSync(new URL('../systems/baseline-fitness/api/list_plans.php', import.meta.url), 'utf8');
const fitnessHtml = fs.readFileSync(new URL('../systems/baseline-fitness/baseline-fitness.html', import.meta.url), 'utf8');

test('sitewide Routine Logs own clamped activity-performed dates', () => {
  assert.match(shared, /function clampLogDate/);
  assert.match(shared, /configureLogDateInput/);
  assert.match(shared, /input\.max = todayIso\(\)/);
  assert.match(fitnessLog, /Activity performed date/);
  assert.match(skincareCore, /Activity performed date/);
  assert.match(skincareCanonical, /UI\?\.clampLogDate/);
});

test('changing a Log date reloads independently dated Fitness and Skincare entries', () => {
  assert.match(fitnessLog, /state\.selectedDate = clampLogDate\(event\.target\.value\)/);
  assert.match(fitnessLog, /renderLog\(\);[\s\S]*?renderCalendar\(\);/);
  assert.match(skincareCore, /state\.selectedDate = clampLogDate\(event\.currentTarget\.value\)/);
  assert.match(skincareCanonical, /event\.target\?\.id === 'routineLogDate'/);
  assert.match(skincareCanonical, /queueMicrotask\(renderAll\)/);
});

test('canonical Skincare log controls preserve the original dated persistence handlers', () => {
  assert.match(skincareCanonical, /data-canonical-log-complete/);
  assert.match(skincareCanonical, /data-canonical-log-note/);
  assert.match(skincareCanonical, /function setCanonicalLog/);
  assert.match(skincareCanonical, /function setCanonicalNote/);
  assert.match(skincareCanonical, /#routineLogItems \$\{selector\}/);
  assert.match(skincareCanonical, /dispatchEvent\(new Event\('change'/);
  assert.match(skincareCanonical, /dispatchEvent\(new Event\('input'/);
});

test('future Routine Log dates cannot be selected or written', () => {
  assert.match(fitnessLog, /future-date/);
  assert.match(fitnessLog, /if \(isFutureDate\(logDate\)\) return/);
  assert.match(skincareCore, /if \(isFutureDate\(logDate\)\) return/);
  assert.match(skincareCanonical, /UI\.isFutureDate\(iso\)/);
});

test('multiple calisthenics plans can be listed, selected and created independently', () => {
  assert.match(listPlans, /'plans'=>\$plans/);
  assert.match(getPlan, /\$requestedPlanId/);
  assert.match(plansRuntime, /Create Another Plan/);
  assert.match(plansRuntime, /list_plans\.php/);
  assert.match(plansRuntime, /getPlansForDate/);
  assert.match(plansRuntime, /function openPlan/);
  assert.match(plansRuntime, /function createPlan/);
  assert.match(fitnessHtml, /fitness-multiple-plans\.js/);
  assert.ok(fitnessHtml.indexOf('fitness-multiple-plans.js') < fitnessHtml.indexOf('baseline-fitness-app.js'));
});

test('each rep exercise stores a configurable session increase with coherent per-side totals', () => {
  assert.match(app, /item\.repIncrease/);
  assert.match(plansRuntime, /Total rep increase each session \(both sides\)/);
  assert.match(plansRuntime, /10 means 5 additional repetitions on each side/);
  assert.match(bridge, /function totalRepIncrease/);
  assert.match(bridge, /function perSetRepIncrease/);
  assert.match(bridge, /source\.repIncrease/);
});

test('exercise selection is typeable, validated against the catalogue and includes Side Lunges', () => {
  assert.match(plansRuntime, /type = 'search'/);
  assert.match(plansRuntime, /setAttribute\('list','calisthenicsExerciseOptions'\)/);
  assert.match(plansRuntime, /function matchExercise/);
  assert.match(plansRuntime, /Choose an exercise from the list/);
  assert.match(plansRuntime, /add\('Side Lunges'/);
});

test('one canonical Fitness Summary reads the current plans without visual competition', () => {
  assert.match(fitnessCanonical, /function renderSummary/);
  assert.match(fitnessCanonical, /plansState\(\)/);
  assert.match(fitnessCanonical, /function stableHtml/);
  assert.doesNotMatch(fitnessCanonical, /MutationObserver|setInterval/);
});

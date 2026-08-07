import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync(new URL('../sitewide/js/baseline-routine-system.js', import.meta.url), 'utf8');
const fitnessLog = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js', import.meta.url), 'utf8');
const skincare = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine.js', import.meta.url), 'utf8');
const skincareSitewide = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js', import.meta.url), 'utf8');
const plansRuntime = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-multiple-plans.js', import.meta.url), 'utf8');
const progression = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-generator-progression-v1.js', import.meta.url), 'utf8');
const policy = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-live-policy-v1.js', import.meta.url), 'utf8');
const bridge = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-saved-data-bridge.js', import.meta.url), 'utf8');
const app = fs.readFileSync(new URL('../systems/baseline-fitness/js/baseline-fitness-app.js', import.meta.url), 'utf8');
const getPlan = fs.readFileSync(new URL('../systems/baseline-fitness/api/get_plan.php', import.meta.url), 'utf8');
const listPlans = fs.readFileSync(new URL('../systems/baseline-fitness/api/list_plans.php', import.meta.url), 'utf8');
const fitnessHtml = fs.readFileSync(new URL('../systems/baseline-fitness/baseline-fitness.html', import.meta.url), 'utf8');

test('sitewide Routine Log owns a clamped activity-performed date', () => {
  assert.match(shared, /function clampLogDate/);
  assert.match(shared, /configureLogDateInput/);
  assert.match(shared, /input\.max = todayIso\(\)/);
  assert.match(fitnessLog, /Activity performed date/);
  assert.match(skincare, /Activity performed date/);
});

test('changing Log Date reloads the independently dated Fitness and Skincare entries', () => {
  assert.match(fitnessLog, /state\.selectedDate = clampLogDate\(event\.target\.value\)/);
  assert.match(skincare, /state\.selectedDate = clampLogDate\(event\.currentTarget\.value\)/);
  assert.match(fitnessLog, /event\.target\.value = state\.selectedDate;[\s\S]*?renderLog\(\);[\s\S]*?renderCalendar\(\);/);
  assert.match(skincare, /event\.currentTarget\.value = state\.selectedDate;[\s\S]*?renderLog\(\);/);
});

test('log controls remain explicitly bound to the selected historical date', () => {
  assert.match(fitnessLog, /data-fitness-log-date/);
  assert.match(fitnessLog, /logDate = state\.selectedDate/);
  assert.match(skincare, /data-log-date/);
  assert.match(skincare, /updateLogCompletion\(itemId, completed, logDate/);
  assert.match(skincareSitewide, /logItem\(item, status, entry, selectedDate\)/);
});

test('future Routine Log dates cannot be selected or written', () => {
  assert.match(fitnessLog, /future-date/);
  assert.match(fitnessLog, /if \(isFutureDate\(logDate\)\) return/);
  assert.match(skincare, /if \(isFutureDate\(logDate\)\) return/);
  assert.match(skincareSitewide, /disabled aria-disabled/);
});

test('multiple calisthenics plans can be listed, selected and created independently', () => {
  assert.match(listPlans, /'plans'=>\$plans/);
  assert.match(getPlan, /\$requestedPlanId/);
  assert.match(plansRuntime, /Create Another Plan/);
  assert.match(plansRuntime, /list_plans\.php/);
  assert.match(plansRuntime, /getPlansForDate/);
  assert.match(fitnessHtml, /fitness-multiple-plans\.js/);
  assert.ok(fitnessHtml.indexOf('fitness-multiple-plans.js') < fitnessHtml.indexOf('baseline-fitness-app.js'));
});

test('rep exercises expose a concise configurable per-session increase', () => {
  assert.match(app, /item\.repIncrease/);
  assert.match(progression, /Rep Increase Per Session/);
  assert.match(progression, /function repIncreaseForRow/);
  assert.match(progression, /function progressedTargets/);
  assert.match(progression, /definition\?\.progressionType.*leg-reps.*3/s);
  assert.match(bridge, /function totalRepIncrease/);
  assert.match(bridge, /function perSetRepIncrease/);
  assert.match(bridge, /source\.repIncrease/);
});

test('the same exercise advances from completed sessions across all plans that contain it', () => {
  assert.match(policy, /function plansContaining/);
  assert.match(policy, /function completedSharedSessions/);
  assert.match(policy, /completedSharedSessions\(exercise\)\+1/);
  assert.match(policy, /function applySharedProgression/);
  assert.match(policy, /progressedTargets/);
  assert.match(policy, /holdTarget/);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require=createRequire(import.meta.url);
require('../systems/baseline-fitness/js/fitness-activity-catalogue.js');
const catalogue=require('../systems/baseline-fitness/js/fitness-activity-catalogue-v2.js');
const html=fs.readFileSync(new URL('../systems/baseline-fitness/baseline-fitness.html',import.meta.url),'utf8');
const workspace=fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js',import.meta.url),'utf8');
const structure=fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-structure-v4.js',import.meta.url),'utf8');
const summary=fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-summary-v2.js',import.meta.url),'utf8');
const routineLog=fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-log-v1.js',import.meta.url),'utf8');
const policy=fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-live-policy-v1.js',import.meta.url),'utf8');
const shared=fs.readFileSync(new URL('../sitewide/js/baseline-routine-coherence-v12.js',import.meta.url),'utf8');
const sharedCss=fs.readFileSync(new URL('../sitewide/css/baseline-routine-coherence-v12.css',import.meta.url),'utf8');
const workspaceCss=fs.readFileSync(new URL('../systems/baseline-fitness/css/fitness-routine-workspace.css',import.meta.url),'utf8');
const publicViewer=fs.readFileSync(new URL('../sitewide/js/baseline-public-routine-viewonly-v4.js',import.meta.url),'utf8');
const updateSession=fs.readFileSync(new URL('../systems/baseline-fitness/api/update_session.php',import.meta.url),'utf8');

test('Fitness resolves the exact My Routine route before first paint with one canonical route owner',() => {
  assert.match(html,/id="baseline-fitness-first-paint"/);
  assert.match(html,/data-initial-routine-view/);
  assert.match(html,/my-routine\\\/plan/);
  assert.equal(fs.existsSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js',import.meta.url)),false);
  assert.match(structure,/function routeFromPath\(\)/);
  assert.match(structure,/ROUTE_BASE='\/baseline-fitness\/my-routine'/);
  assert.doesNotMatch(workspace,/loadScript|loadOrdered|createElement\(['"]script['"]\)|Loading My Routine|BootShield|localStorage|sessionStorage/);
});

test('Fitness creates final structure synchronously, then paints account data only after resolved auth',() => {
  assert.match(structure,/global\.BASELINE_fitnessRoutineStructure=Object\.freeze/);
  assert.match(workspace,/global\.BASELINE_fitnessRoutineStructure\?\.boot\?\.\(\)/);
  assert.match(workspace,/function renderStableState\(\)/);
  assert.match(workspace,/async function loadForAuth\(snapshot\)/);
  assert.match(workspace,/if\(!snapshot\?\.ready\) return/);
  assert.match(workspace,/const response = await request\(\)/);
  assert.match(workspace,/state\.activities = normaliseActivities\(response\.data\?\.activities\)/);
  assert.match(workspace,/state\.logs = normaliseLogs\(response\.data\?\.logs\)/);
  assert.doesNotMatch(workspace,/localStorage|sessionStorage|attempts\s*<\s*80|setTimeout\(connect,\s*100\)/);
  const boot=workspace.match(/function boot\(\) \{[\s\S]*?\n  \}/)?.[0] || '';
  assert.ok(boot,'Fitness boot function should exist');
  assert.match(boot,/makeWorkspace\(\)/);
  assert.match(boot,/attachAuth\(\)/);
});

test('activity catalogue and base activity data owner remain intact',() => {
  assert.ok(catalogue.ACTIVITIES.length>=180);
  for (const id of ['road-running','road-cycling','pool-swimming','hatha-yoga','mma','badminton']) assert.ok(catalogue.ACTIVITY_BY_ID.has(id));
  assert.match(workspace,/data-fitness-log-complete/);
  assert.match(workspace,/updateLog\(complete\.dataset\.fitnessLogComplete/);
});

test('non-Calisthenics activity completion remains reversible and Remove Entry clears recorded log values',() => {
  assert.match(workspace,/entry\.completed = Boolean\(value\)/);
  assert.match(workspace,/renderLog\(\);\s*renderCalendar\(\)/);
  assert.match(shared,/preserveFitnessCompleted/);
  assert.match(routineLog,/function meaningfulActivityEntry\(/);
  assert.match(routineLog,/data-fitness-activity-log-remove-request/);
  assert.match(routineLog,/function clearActivityLogEntry\(/);
  assert.match(routineLog,/field\.dispatchEvent\(new Event\('input'/);
  assert.match(routineLog,/checkbox\.dispatchEvent\(new Event\('change'/);
});

test('completed Calisthenics Remove Entry bypasses stale root-capture conflicts and remains reversible',() => {
  assert.match(routineLog,/__BASELINE_FITNESS_ROUTINE_LOG_V3__/);
  assert.match(routineLog,/IMPORTANT COMPATIBILITY RULE/);
  assert.match(routineLog,/document\.addEventListener\('pointerdown',interceptRemovePointer,true\)/);
  assert.match(routineLog,/document\.addEventListener\('click',interceptRemoveClick,true\)/);
  assert.match(routineLog,/event\.stopImmediatePropagation\(\)/);
  assert.match(routineLog,/id='fitnessLogRemoveEntryModal'|id="fitnessLogRemoveEntryModal"|overlay\.id='fitnessLogRemoveEntryModal'/);
  assert.match(routineLog,/data-fitness-log-modal-confirm/);
  assert.match(routineLog,/action:'set_status',status:'planned'/);
  assert.match(routineLog,/await global\.BASELINE_fitnessPlans\?\.refresh\?\.\(\)/);
  assert.doesNotMatch(shared,/data-fitness-log-modal-confirm/);
  assert.match(updateSession,/\$action === 'set_status'/);
  assert.match(updateSession,/in_array\(\$status, \['planned','rescheduled','done'\]/);
  assert.match(updateSession,/completed_at=NULL/);
});

test('Remove Entry buttons are preserved across patches instead of being destroyed every frame',() => {
  assert.match(routineLog,/let button=actions\.querySelector\('\[data-fitness-log-remove-request\]'\)/);
  assert.match(routineLog,/if \(!button\) \{/);
  assert.doesNotMatch(routineLog,/querySelectorAll\('\[data-fitness-log-remove-request\][^\n]*forEach\(\(node\)=>node\.remove\(\)\)/);
});

test('Routine Log is parser-authored exactly once instead of force-loaded by a compatibility loader',() => {
  assert.equal((html.match(/fitness-routine-log-v1\.js/g)||[]).length,1);
  assert.match(html,/data-fitness-routine-log-v1="true"/);
  assert.equal(fs.existsSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js',import.meta.url)),false);
});

test('Fitness activity picker does not expose the brighter border as an isolated white rule',() => {
  assert.match(workspaceCss,/fitness-activity-combobox>input/);
  assert.match(workspaceCss,/border-color:var\(--border\)!important/);
  assert.match(workspaceCss,/fitness-activity-add::before/);
  assert.match(workspaceCss,/content:none!important/);
  assert.doesNotMatch(routineLog,/createElement\(['"]style['"]\)/);
});

test('Fitness Summary uses one shell/filter and one comprehensive content owner',() => {
  assert.match(structure,/fitnessSummaryGroupFilter/);
  assert.match(structure,/function ensureSingleSummaryFilter\(panel\)/);
  assert.match(summary,/single Fitness owner/);
  assert.match(summary,/function ensureSingleFilter\(\)/);
  assert.match(summary,/Benefits and practical role/);
  assert.match(summary,/bl-routine-summary-grid/);
  assert.doesNotMatch(structure,/function renderSummary\s*\(/);
  assert.doesNotMatch(shared,/function fitnessSummaryFilter\s*\(/);
});

test('Number Of Days range stays valid and compact',() => {
  assert.match(policy,/\(Not Specified\)/);
  assert.match(policy,/value<=minimum\?' disabled':''/);
  assert.match(policy,/bl-frequency-range-dash/);
  assert.match(sharedCss,/\.bl-frequency-range-dash/);
});

test('live policy owns behaviour not a runtime visual layer',() => {
  assert.doesNotMatch(policy,/createElement\(['\"]style['\"]\)|function injectStyles|baselineFitnessLivePolicyStyle|setInterval/);
  assert.doesNotMatch(policy,/global\.fetch\s*=/);
  assert.match(workspaceCss,/fitness-start-early-overlay/);
  assert.match(workspaceCss,/ex-picker-menu/);
});

test('Public Fitness routine remains owner-facing View Only structure',() => {
  assert.match(publicViewer,/fitness-routine-log-item/);
  assert.match(publicViewer,/fitness-exercise-summary-item/);
  assert.match(publicViewer,/routine-plan-group/);
  assert.match(publicViewer,/View Only/);
  assert.match(publicViewer,/type=\"checkbox\" disabled/);
});

test('Week and Month controls cannot collapse below their labels',() => {
  assert.match(sharedCss,/width:204px/);
  assert.match(sharedCss,/repeat\(2,minmax\(96px,1fr\)\)/);
});

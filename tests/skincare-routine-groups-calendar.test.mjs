import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root=resolve(import.meta.dirname,'..');
const html=readFileSync(resolve(root,'systems/baseline-natural-skincare/baseline-natural-skincare.html'),'utf8');
const recipeBootstrap=readFileSync(resolve(root,'systems/baseline-natural-skincare/js/skincare-routine-enhancements.js'),'utf8');
const routine=readFileSync(resolve(root,'systems/baseline-natural-skincare/js/skincare-routine.js'),'utf8');
const sitewide=readFileSync(resolve(root,'systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js'),'utf8');
const coherence=readFileSync(resolve(root,'sitewide/js/baseline-routine-coherence-v12.js'),'utf8');
const css=readFileSync(resolve(root,'systems/baseline-natural-skincare/css/skincare-routine-sitewide-v4.css'),'utf8');
const catalogue=readFileSync(resolve(root,'systems/baseline-natural-skincare/js/skincare-routine-catalogue-v2.js'),'utf8');
const schema=readFileSync(resolve(root,'systems/baseline-natural-skincare/api/schema.php'),'utf8');
const endpoint=readFileSync(resolve(root,'systems/baseline-natural-skincare/api/routine_groups.php'),'utf8');

test('Skincare identifies the exact My Routine panel before body paint',() => {
  assert.match(html,/id="baseline-skincare-first-paint"/);
  assert.match(html,/data-initial-routine-view/);
  assert.match(html,/id="baseline-skincare-initial-panel"/);
  assert.match(html,/data-routine-panel="summary"/);
  assert.match(html,/data-routine-panel="plan"/);
  assert.match(html,/data-routine-panel="public"/);
  assert.match(routine,/function loadLocalState\(\)/);
  assert.match(routine,/function loadRemoteState\(\)/);
  assert.ok(routine.indexOf('loadLocalState();')<routine.indexOf('await loadRemoteState()'));
});

test('Skincare keeps one canonical group/calendar owner and recipe code waits for it',() => {
  assert.match(sitewide,/canonical My Routine group\/calendar adapter v5/);
  assert.match(sitewide,/global\.__BASELINE_SKINCARE_ROUTINE_SITEWIDE_V5__ = true/);
  assert.match(sitewide,/UI\.observe\(root,patch\)/);
  assert.doesNotMatch(sitewide,/skincare-recipe-|sitewide-v5-core|new MutationObserver|setInterval|Loading My Routine/);

  assert.match(recipeBootstrap,/__BASELINE_SKINCARE_ROUTINE_SITEWIDE_V5__/);
  assert.match(recipeBootstrap,/global\.BASELINE_RoutineSystem/);
  assert.match(recipeBootstrap,/skincare-recipe-navigation-20260906\.js/);
  assert.doesNotMatch(recipeBootstrap,/skincare-routine-sitewide-v5\.js|skincare-routine-sitewide-v5-core/);
});

test('My Routine subtabs remain canonical and separate from recipe subtabs',() => {
  for (const [view,label] of [['log','Routine Log'],['summary','Routine Summary'],['plan','Routine Plan'],['public','Public Routines']]) {
    assert.match(html,new RegExp(`data-routine-view="${view}"[^>]*>${label}<\\/button>`));
  }
  assert.doesNotMatch(recipeBootstrap,/routine-subtab|data-routine-view|data-routine-panel/);
});

test('Routine Summary remains the comprehensive shared template with session-side filtering',() => {
  assert.match(html,/data-routine-view="summary"[^>]*>Routine Summary<\/button>/);
  assert.match(sitewide,/Benefits and practical role/);
  assert.match(sitewide,/Routine details/);
  assert.match(sitewide,/MODEL\.benefitText\(item,'comprehensive'\)/);
  assert.match(sitewide,/bl-routine-summary-grid/);
  assert.match(coherence,/skinSummaryFilter/);
  assert.match(coherence,/SUMMARY_STORAGE_KEY/);
  assert.match(coherence,/persistSummaryFilter/);
  assert.doesNotMatch(coherence,/searchParams\.set\(['\"]routine-filter/);
});

test('group creation is separate from group Settings and settings own schedule directly',() => {
  assert.match(sitewide,/Create Routine Group/);
  assert.match(sitewide,/Configure its time and frequency from Settings on the group itself/);
  assert.match(sitewide,/data-plan-group-settings/);
  assert.match(sitewide,/Group time/);
  assert.match(sitewide,/Group frequency/);
  assert.doesNotMatch(sitewide,/Set time for this group|Set “How often” for this group|data-group-field="applyTime"|data-group-field="applyFrequency"/);
  assert.doesNotMatch(sitewide,/routine-group-list/);
  assert.match(css,/routine-plan-group-settings/);
});

test('Routine Plan group header is title count Settings then collapse control',() => {
  assert.match(sitewide,/routine-group-count/);
  assert.ok(sitewide.indexOf('data-plan-group-settings') < sitewide.indexOf('data-plan-group-collapse'));
  assert.match(sitewide,/Settings/);
  assert.match(sitewide,/Expand group/);
});

test('calendar includes Week Month and shared marker navigation',() => {
  assert.match(sitewide,/data-skincare-calendar-view="week"/);
  assert.match(sitewide,/data-skincare-calendar-view="month"/);
  assert.match(sitewide,/UI\.weekRow/);
  assert.match(sitewide,/UI\.monthDates/);
  assert.match(coherence,/data-caption/);
  assert.match(coherence,/data-routine-summary-target/);
});

test('users can create remove assign and configure routine groups',() => {
  assert.match(sitewide,/function createGroup\(/);
  assert.match(sitewide,/function updateGroup\(/);
  assert.match(sitewide,/field==='frequencyMode'/);
  assert.match(sitewide,/field==='timeOfDay'/);
  assert.match(sitewide,/function removeGroup\(/);
  assert.match(sitewide,/function assignItem\(/);
  assert.match(sitewide,/data-routine-group-select/);
  assert.match(endpoint,/skincare_routine_groups/);
  assert.match(schema,/CREATE TABLE IF NOT EXISTS skincare_routine_groups/);
});

test('Oil-Based Cleansing Shower remains available with UK terminology',() => {
  assert.match(catalogue,/Oil-Based Cleansing Shower/);
  assert.match(catalogue,/without relying on conventional body wash or shampoo/);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root=resolve(import.meta.dirname,'..');
const html=readFileSync(resolve(root,'systems/baseline-natural-skincare/baseline-natural-skincare.html'),'utf8');
const loader=readFileSync(resolve(root,'systems/baseline-natural-skincare/js/skincare-routine-enhancements.js'),'utf8');
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

test('My Routine static workspace shell is authored exactly once in HTML',() => {
  for (const id of [
    'routineSubtabs','routineLogDate','routineLogProgress','routineLogItems','routineCalendarLabel',
    'routineCalendarWeekdays','routineCalendarGrid','routineVisibility','routineSummary',
    'routineGroupName','createRoutineGroup','routineActionSearch','routineActionMenu',
    'routineActionSelect','addRoutineAction','routineItems','publicRoutineName',
    'findPublicRoutineBtn','publicRoutineResult'
  ]) {
    assert.equal((html.match(new RegExp('id="' + id + '"','g')) || []).length,1,id+' must exist exactly once in initial HTML');
  }
  assert.match(html,/class="routine-group-manager bl-routine-group-manager"/);
  assert.doesNotMatch(routine,/ensureShell\s*\(/);
  assert.doesNotMatch(sitewide,/createElement\(['"](?:section|nav)['"]\).*routine-group-manager/);
});

test('Skincare has one canonical calendar renderer and no dynamic bootstrap fallback',() => {
  assert.match(loader,/canonical My Routine bootstrap v35/);
  assert.doesNotMatch(loader,/skincare-recipe-bootstrap-20260906\.js|loadOrdered\(|loadScript\(|createElement\(['"]script['"]\)/);
  assert.match(sitewide,/function renderCalendar\(\)/);
  assert.match(sitewide,/UI\.observe\(root,patch\)/);
  assert.doesNotMatch(sitewide,/skincare-recipe-|sitewide-v5-core|new MutationObserver|setInterval|Loading My Routine/);
  assert.doesNotMatch(routine,/function renderCalendar\(|function calendarButton\(|calendarView|calendarAnchor|data-calendar-view|data-calendar-move|data-calendar-today/);
});

test('My Routine subtabs retain their own canonical labels',() => {
  for (const [view,label] of [['log','Routine Log'],['summary','Routine Summary'],['plan','Routine Plan'],['public','Public Routines']]) {
    assert.match(html,new RegExp(`data-routine-view="${view}"[^>]*>${label}<\\/button>`));
  }
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
  assert.doesNotMatch(coherence,/searchParams\.set\(['"]routine-filter/);
});

test('group creation shell is static and group Settings own schedule directly',() => {
  assert.match(html,/Create Routine Group/);
  assert.match(html,/Configure its time and frequency from Settings on the group itself/);
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

test('calendar shell is static and canonical controller supplies Week Month behaviour',() => {
  assert.match(html,/data-skincare-calendar-view="week"/);
  assert.match(html,/data-skincare-calendar-view="month"/);
  assert.match(html,/id="routineCalendarWeekdays"[^>]*><span>Mon<\/span><span>Tue<\/span><span>Wed<\/span><span>Thu<\/span><span>Fri<\/span><span>Sat<\/span><span>Sun<\/span>/);
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

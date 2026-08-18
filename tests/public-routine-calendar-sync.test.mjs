import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const publicViewer=read('sitewide/js/baseline-public-routine-viewonly-v4.js');
const fitnessCss=read('systems/baseline-fitness/css/fitness-routine-workspace-v2.css');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const html=read('systems/baseline-fitness/baseline-fitness.html');

test('Public calendar marker has exactly one shared caption source',()=>{
  assert.match(publicViewer,/data-caption=\"\$\{esc\(marker\.label\)\}\"/);
  assert.doesNotMatch(publicViewer,/data-public-summary-target=\"\$\{esc\(marker\.target\)\}\" title=/);
  assert.match(publicViewer,/never add a native title tooltip as a second competing caption/);
});

test('Public Fitness Calendar reuses owner Routine Log calendar control classes',()=>{
  for (const token of [
    'section-head-actions fitness-calendar-head',
    'fitness-calendar-controls',
    'fitness-calendar-view-tabs',
    'field-stack fitness-calendar-log-date',
    'actions-inline fitness-calendar-navigation',
    'class=\"tiny-btn\" data-public-calendar-move=\"previous\"',
    'class=\"tiny-btn\" data-public-calendar-today',
    'class=\"tiny-btn\" data-public-calendar-move=\"next\"',
    'fitness-calendar-grid ${calendarView===\'month\'?\'month-view\':\'week-view\'}'
  ]) assert.ok(publicViewer.includes(token),`missing ${token}`);
  assert.match(publicViewer,/data-public-log-date max=\"\$\{todayIso\(\)\}\" value=\"\$\{selectedDate\}\" aria-label=\"Date\"/);
});

test('owner and Public Fitness calendars share the same two-row geometry with one-line navigation',()=>{
  assert.match(fitnessCss,/grid-template-areas:\"views date\" \"nav nav\"/);
  assert.match(fitnessCss,/\.fitness-calendar-navigation\{[\s\S]*display:flex!important;[\s\S]*align-items:center!important;[\s\S]*gap:10px!important/);
  assert.match(fitnessCss,/\.fitness-calendar-grid\.week-view/);
});

test('Fitness entry points cache-bust the synchronized Public Routine viewer',()=>{
  assert.match(loader,/baseline-public-routine-viewonly-v4\.js\?v=BASELINE_PUBLIC_ROUTINE_VIEWONLY_20260818_1/);
  assert.match(html,/baseline-public-routine-viewonly-v4\.js\?v=BASELINE_PUBLIC_ROUTINE_VIEWONLY_20260818_1/);
  assert.match(html,/fitness-routine-workspace\.js\?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260818_5/);
});

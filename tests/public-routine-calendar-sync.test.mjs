import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const publicViewer=read('sitewide/js/baseline-public-routine-viewonly-v4.js');
const publicApi=read('systems/baseline-fitness/api/public_routine_v2.php');
const fitnessCss=read('systems/baseline-fitness/css/fitness-routine-workspace.css');
const html=read('systems/baseline-fitness/baseline-fitness.html');

test('Public calendar marker has exactly one shared caption source',()=>{
  assert.match(publicViewer,/data-caption=\"\$\{esc\(marker\.label\)\}\"/);
  assert.doesNotMatch(publicViewer,/data-public-summary-target=\"\$\{esc\(marker\.target\)\}\" title=/);
  assert.match(publicViewer,/never add a native title\s+tooltip as a second competing caption/);
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

test('Public Fitness calendar reads routine and Calisthenics data directly from Saved Data',()=>{
  assert.match(publicApi,/require_once __DIR__ \. '\/fitness_resource\.php'/);
  assert.match(publicApi,/read-only projection of Saved Data/);
  assert.match(publicApi,/bl_saved_user_resource_path\(\$userId, 'fitness-routine'\)/);
  assert.match(publicApi,/bl_resource_file_read\(bl_public_fitness_v2_routine_path\(\$userId\)/);
  assert.match(publicApi,/bl_fitness_account_by_name\(\$name\)/);
  assert.match(publicApi,/bl_fitness_resource_read\(\$userId\)/);
  assert.match(publicApi,/bl_public_fitness_v2_resource_plans\(\$fitness\['data'\]\)/);
  assert.match(publicApi,/\$rawCompleted = \$session\['completedAt'\] \?\? \$session\['completed_at'\]/);
  assert.doesNotMatch(publicApi,/\$mode = bl_resource_authority\(\)/);
  assert.doesNotMatch(publicApi,/bl_public_fitness_v2_sqlite_plans/);
  assert.doesNotMatch(publicApi,/fitness_routine_state|fitness_routine_groups|SELECT .* FROM plans/s);
});

test('Public Fitness saved-data plans preserve every completed session date for marker generation',()=>{
  assert.match(publicApi,/foreach\(array_slice\(is_array\(\$record\['sessions'\]/);
  assert.match(publicApi,/if\(\$status === 'done'\)/);
  assert.match(publicApi,/strtotime\(\$rawCompleted\) !== false/);
  assert.match(publicApi,/'completedAt'=>\$completedAt/);
  assert.match(publicApi,/usort\(\$sessions/);
});

test('Fitness entry points cache-bust the synchronized Public Routine viewer',()=>{
  assert.match(html,/baseline-public-routine-viewonly-v4\.js\?v=SITEWIDE_PUBLIC_ROUTINE_VIEWONLY_JS_20261021_1/);
  assert.doesNotMatch(html,/fitness-routine-workspace\.js/);
  assert.match(html,/fitness-routine-workspace-v2\.js/);
});

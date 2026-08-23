import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

const app=read('systems/baseline-fitness/js/baseline-fitness-app.js');
const plans=read('systems/baseline-fitness/js/fitness-multiple-plans.js');
const workspace=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
const codes=read('systems/baseline-fitness/js/fitness-routine-codes-v1.js');
const updateSession=read('systems/baseline-fitness/api/update_session.php');
const routineState=read('systems/baseline-fitness/api/routine_state.php');
const publicRoutine=read('systems/baseline-fitness/api/public_routine_v2.php');
const page=read('systems/baseline-fitness/baseline-fitness.html');

test('Current and Completed Calisthenics sessions own editable completion dates',()=>{
  assert.match(app,/id="currentWorkoutCompletionDate" type="date"/);
  assert.match(app,/data-session-completion-date="\$\{index\}"/);
  assert.match(app,/data-save-session-completion-date="\$\{index\}"/);
  assert.match(app,/action:'set_completion_date', completionDate/);
  assert.match(app,/action: 'toggle_done', completionDate/);
  assert.match(updateSession,/\$action === 'set_completion_date'/);
  assert.match(updateSession,/completion_requires_done/);
  assert.match(updateSession,/\$completionDate > gmdate\('Y-m-d'\)/);
});

test('flexible weekly Calisthenics plans do not display a misleading start date',()=>{
  assert.match(app,/plan\.scheduleMode === 'specific-days' \? `<span class="badge">Schedule begins:/);
  assert.match(plans,/plan\.planJson\?\.scheduleMode==='specific-days'\?`<span class="badge">Schedule begins:/);
  assert.doesNotMatch(plans,/summary\.innerHTML=`<span class="badge">Start:/);
});

test('Routine Activities support a minimum and maximum weekly frequency',()=>{
  assert.match(workspace,/timesPerWeekMin/);
  assert.match(workspace,/timesPerWeekMax/);
  assert.match(workspace,/Minimum times each week/);
  assert.match(workspace,/Maximum times each week/);
  assert.match(workspace,/Weekly goals met:/);
  assert.match(workspace,/extra completion/);
  for (const source of [routineState,publicRoutine]) {
    assert.match(source,/timesPerWeekMin/);
    assert.match(source,/timesPerWeekMax/);
  }
});

test('completion-date changes feed the existing daily Group marker compositor',()=>{
  assert.match(app,/await global\.BASELINE_fitnessPlans\?\.refresh\?\.\(\)/);
  assert.match(plans,/baseline:fitness-plans-updated/);
  assert.match(codes,/members\.every\(\(member\) => completed\.has\(member\.key\)\)/);
  assert.match(codes,/code:groupCode\(groupId,groups\)/);
});

test('updated browser cache contracts and JavaScript parse cleanly',()=>{
  assert.match(page,/baseline-fitness-app\.js\?v=SAVED_DATA_REVISION_CLIENT_20260823_1/);
  assert.match(page,/fitness-routine-workspace-v2\.js\?v=BASELINE_FITNESS_COMPACT_LOG_20260822_1/);
  for (const path of [
    'systems/baseline-fitness/js/baseline-fitness-app.js',
    'systems/baseline-fitness/js/fitness-multiple-plans.js',
    'systems/baseline-fitness/js/fitness-routine-workspace-v2.js',
    'systems/baseline-fitness/js/fitness-routine-summary-v2.js',
    'systems/baseline-fitness/js/fitness-live-policy-v1.js',
    'sitewide/js/baseline-public-routine-viewonly-v4.js'
  ]) {
    const checked=spawnSync(process.execPath,['--check',url(path).pathname],{ encoding:'utf8' });
    assert.equal(checked.status,0,checked.stderr || checked.stdout);
  }
});

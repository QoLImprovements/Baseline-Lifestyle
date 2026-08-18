import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

const multiplePlans=read('systems/baseline-fitness/js/fitness-multiple-plans.js');
const app=read('systems/baseline-fitness/js/baseline-fitness-app.js');

test('saved Calisthenics plan keeps its live Edit Plan and Delete Plan action bar',()=>{
  assert.match(app,/id=\"editOptionsBtn\">Edit Plan<\/button>/);
  assert.match(app,/id=\"deletePlanBtn\">Delete Plan<\/button>/);
  assert.match(app,/\$\('#editOptionsBtn'\)\?\.addEventListener\('click'/);
  assert.match(app,/\$\('#deletePlanBtn'\)\?\.addEventListener\('click', openDeletePlanModal\)/);

  assert.match(multiplePlans,/const existingActions=head\.querySelector\(':scope>\.saved-plan-actions'\)/);
  assert.match(multiplePlans,/if \(generatedActions && generatedActions!==existingActions\) \{ existingActions\?\.remove\(\);head\.appendChild\(generatedActions\); \}/);
  assert.doesNotMatch(multiplePlans,/head\.querySelector\(':scope>\.saved-plan-actions'\)\?\.remove\(\);let title=/);
});

test('Delete Plan retains confirmation before deleting the selected plan',()=>{
  assert.match(app,/function openDeletePlanModal\(\)/);
  assert.match(app,/deletePlanConfirmInput/);
  assert.match(app,/String\(event\.currentTarget\.value \|\| ''\)\.trim\(\) !== 'DELETE'/);
  assert.match(app,/delete_plan\.php/);
  assert.match(app,/body: \{ planId: current\.planId \}/);
});

test('Calisthenics multiple-plan controller still parses',()=>{
  const checked=spawnSync(process.execPath,['--check',url('systems/baseline-fitness/js/fitness-multiple-plans.js').pathname],{ encoding:'utf8' });
  assert.equal(checked.status,0,checked.stderr || checked.stdout);
});

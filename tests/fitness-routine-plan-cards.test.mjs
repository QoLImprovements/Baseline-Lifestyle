import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync,readFileSync } from 'node:fs';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');
const structure=read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
const workspace=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
const css=read('systems/baseline-fitness/css/fitness-routine-workspace.css');

test('Routine Plan is one page with four native disclosure cards',()=>{
  assert.match(structure,/ROUTINE PLAN CONTRACT — DO NOT REINTRODUCE SUBTABS/);
  for(const label of ['Calisthenics','Cardio','Other Fitness Activity','Sports']) assert.ok(structure.includes(label));
  assert.match(structure,/document\.createElement\('details'\)/);
  assert.match(structure,/data-fitness-plan-card/);
  assert.doesNotMatch(structure,/button\.dataset\.fitnessPlanView/);
});

test('workspace creates the final Plan shell directly',()=>{
  assert.match(workspace,/data-fitness-routine-view="plan"/);
  assert.match(workspace,/data-fitness-plan-card=/);
  assert.match(workspace,/data-fitness-routine-panel=/);
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-routine-workspace.js')),false);
});

test('canonical Plan route has no category suffix',()=>{
  assert.match(structure,/ROUTE_BASE='\/baseline-fitness\/my-routine'/);
  assert.match(structure,/cleanPath/);
  assert.doesNotMatch(workspace,/location\.assign/);
});

test('one canonical Fitness Routine stylesheet owns native details styling',()=>{
  assert.match(css,/\.fitness-routine-plan-panels/);
  assert.match(css,/\.fitness-routine-plan-card>summary/);
  assert.match(css,/\.fitness-routine-plan-card\[open\]>summary::after/);
  assert.match(css,/\.fitness-routine-plan-card:not\(\[open\]\)>\.fitness-routine-plan-card-body\{display:none!important\}/);
});

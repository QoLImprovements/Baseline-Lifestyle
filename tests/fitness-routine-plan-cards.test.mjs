import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const structure=read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
const collapse=read('systems/baseline-fitness/js/fitness-routine-plan-collapse-v1.js');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const css=read('systems/baseline-fitness/css/fitness-routine-workspace-v2.css');
const deletion=read('systems/baseline-fitness/js/fitness-plan-delete-continuity-v1.js');

test('Routine Plan is one page with four collapsible category cards and no nested subtabs',()=>{
  assert.doesNotThrow(()=>new Function(structure));
  assert.match(structure,/ROUTINE PLAN CONTRACT — DO NOT REINTRODUCE SUBTABS/);
  for (const label of ['Calisthenics','Cardio','Other Fitness Activity','Sports']) assert.ok(structure.includes(label));
  assert.match(structure,/document\.createElement\('details'\)/);
  assert.match(structure,/data-fitness-plan-card/);
  assert.match(structure,/fitness-routine-plan-card-body/);
  assert.match(structure,/panel\.querySelectorAll\('\.fitness-routine-plan-tabs,\[data-fitness-plan-view\]'\)/);
  assert.doesNotMatch(structure,/button\.dataset\.fitnessPlanView/);
});

test('all four category panels stay mounted while disclosure interaction remains native',()=>{
  assert.match(structure,/child\.hidden=false/);
  assert.match(structure,/child\.classList\.add\('active'\)/);
  assert.doesNotMatch(structure,/child\.hidden=activePlanView!==view/);
  assert.match(structure,/\.fitness-routine-plan-card>summary/);
  assert.match(collapse,/card\.open=false/);
  assert.match(collapse,/current visit remains a normal native/);
});

test('the canonical Fitness Routine Plan route has no category suffix',()=>{
  assert.match(structure,/if \(view==='plan'\) return `\$\{ROUTE_BASE\}\/plan`/);
  assert.match(loader,/if\(route\?\.view==='plan'\) return `\$\{ROUTE_BASE\}\/plan`/);
  assert.match(deletion,/global\.location\.assign\('\/baseline-fitness\/my-routine\/plan'\)/);
});

test('Fitness card styling uses native details and the existing Fitness/My Routine palette',()=>{
  assert.match(css,/\.fitness-routine-plan-panels/);
  assert.match(css,/\.fitness-routine-plan-card>summary/);
  assert.match(css,/\.fitness-routine-plan-card\[open\]>summary::after/);
  assert.match(css,/\.fitness-routine-plan-card:not\(\[open\]\)>\.fitness-routine-plan-card-body\{display:none!important\}/);
  assert.match(css,/var\(--bl-routine-border,var\(--border,currentColor\)\)/);
  assert.match(css,/var\(--bl-routine-surface-strong,var\(--card-bg/);
});

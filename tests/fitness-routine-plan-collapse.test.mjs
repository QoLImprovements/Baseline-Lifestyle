import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync,readFileSync } from 'node:fs';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

const structure=read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
const groups=read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
const css=read('systems/baseline-fitness/css/fitness-routine-workspace.css');
const html=read('systems/baseline-fitness/baseline-fitness.html');

test('retired collapse correction layer remains absent',()=>{
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-routine-plan-collapse-v1.js')),false);
  assert.equal(existsSync(url('systems/baseline-fitness/css/fitness-routine-plan-collapse-v1.css')),false);
  assert.doesNotMatch(html,/fitness-routine-plan-collapse-v1/);
});

test('canonical Routine structure owns category-card reveal directly',()=>{
  assert.match(structure,/details\[data-fitness-plan-card="\$\{next\}"\]/);
  assert.match(structure,/if \(card\) card\.open=true/);
  assert.match(structure,/document\.createElement\('details'\)/);
});

test('Routine Groups are created collapsed without an after-paint correction',()=>{
  assert.match(groups,/card\.open = false/);
  assert.doesNotMatch(groups,/card\.open = true/);
});

test('canonical Routine stylesheet owns native details presentation',()=>{
  assert.match(css,/\.fitness-routine-plan-card>summary/);
  assert.match(css,/\.fitness-routine-plan-card\[open\]>summary::after/);
  assert.match(css,/\.fitness-routine-plan-card:not\(\[open\]\)>\.fitness-routine-plan-card-body\{display:none!important\}/);
});

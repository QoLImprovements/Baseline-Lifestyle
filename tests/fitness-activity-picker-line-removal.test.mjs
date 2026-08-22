import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const workspaceCss=fs.readFileSync('systems/baseline-fitness/css/fitness-routine-workspace-v2.css','utf8');
const workspaceJs=fs.readFileSync('systems/baseline-fitness/js/fitness-routine-workspace-v2.js','utf8');
const page=fs.readFileSync('systems/baseline-fitness/baseline-fitness.html','utf8');

test('expanded Fitness activity sections remove their full-width header divider without removing picker borders',()=>{
  assert.match(workspaceJs,/\['cardio','other','sports'\]\.forEach\(buildActivityPanel\)/);
  assert.match(workspaceJs,/class="fitness-activity-combobox"/);
  assert.match(workspaceCss,/\.fitness-routine-plan-card\[open\]>summary\{[^}]*border-bottom:0!important/);
  assert.doesNotMatch(workspaceCss,/\.fitness-routine-plan-card\[open\]>summary\{[^}]*border-bottom:1px/);
  assert.match(workspaceCss,/#my-plan \.fitness-activity-combobox>input\{[^}]*border-right:0/);
  assert.match(workspaceCss,/#my-plan \.fitness-activity-combobox>\[data-activity-toggle\]\{[^}]*border-left:0/);
  assert.doesNotMatch(workspaceCss,/\.fitness-activity-combobox[^}]*border-top:0/);
  assert.match(page,/fitness-routine-workspace\.css\?v=BASELINE_FITNESS_SECTION_DIVIDER_REMOVAL_20260822_1/);
});

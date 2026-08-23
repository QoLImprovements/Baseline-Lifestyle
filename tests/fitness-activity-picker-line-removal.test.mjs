import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const workspaceCss=fs.readFileSync('systems/baseline-fitness/css/fitness-routine-workspace-v2.css','utf8');
const workspaceJs=fs.readFileSync('systems/baseline-fitness/js/fitness-routine-workspace-v2.js','utf8');
const page=fs.readFileSync('systems/baseline-fitness/baseline-fitness.html','utf8');

test('Fitness activity sections remove only the row decoration and preserve legitimate borders',()=>{
  assert.match(workspaceJs,/\['cardio','other','sports'\]\.forEach\(buildActivityPanel\)/);
  assert.match(workspaceJs,/class="fitness-activity-combobox"/);
  assert.match(workspaceCss,/\.fitness-routine-plan-card\[open\]>summary\{[^}]*border-bottom:1px solid/);
  assert.match(workspaceCss,/#my-plan \.fitness-activity-combobox>input\{[^}]*border-right:0/);
  assert.match(workspaceCss,/#my-plan \.fitness-activity-combobox>\[data-activity-toggle\]\{[^}]*border-left:0/);
  assert.doesNotMatch(workspaceCss,/\.fitness-activity-combobox[^}]*border-top:0/);
  assert.match(workspaceCss,/#my-plan \.fitness-activity-add\{[^}]*border-top:0!important;[^}]*box-shadow:none!important;[^}]*background-image:none!important/);
  assert.match(workspaceCss,/\.fitness-activity-add::before,[\s\S]*\.fitness-activity-add::after,[\s\S]*\.fitness-activity-combobox::before,[\s\S]*\.fitness-activity-combobox::after\{[^}]*content:none!important;[^}]*display:none!important/);
  assert.match(page,/fitness-routine-workspace\.css\?v=SAVED_DATA_REVISION_CLIENT_20260823_1/);
});

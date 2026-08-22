import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const workspaceCss=fs.readFileSync('systems/baseline-fitness/css/fitness-routine-workspace-v2.css','utf8');
const workspaceJs=fs.readFileSync('systems/baseline-fitness/js/fitness-routine-workspace-v2.js','utf8');
const page=fs.readFileSync('systems/baseline-fitness/baseline-fitness.html','utf8');

test('shared Fitness activity picker has no full-width top line in every activity section',()=>{
  assert.match(workspaceJs,/\['cardio','other','sports'\]\.forEach\(buildActivityPanel\)/);
  assert.match(workspaceJs,/class="fitness-activity-combobox"/);
  assert.match(workspaceCss,/html\[data-app="fitness"\] body\[data-app="fitness"\] #my-plan \.fitness-activity-combobox>input\{[^}]*border-top:0!important/);
  assert.match(workspaceCss,/html\[data-app="fitness"\] body\[data-app="fitness"\] #my-plan \.fitness-activity-combobox>\[data-activity-toggle\]\{[^}]*border-top:0!important/);
  assert.match(page,/fitness-routine-workspace\.css\?v=BASELINE_FITNESS_PICKER_LINE_REMOVAL_20260822_1/);
});

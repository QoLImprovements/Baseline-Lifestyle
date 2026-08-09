import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

const summary=read('systems/baseline-fitness/js/fitness-routine-summary-v2.js');
const css=read('systems/baseline-fitness/css/fitness-routine-summary-v2.css');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const cssEntry=read('systems/baseline-fitness/css/fitness-routine-workspace.css');

test('v2 is the only loaded Fitness Routine Summary owner',()=>{
  assert.match(loader,/fitness-routine-summary-v2\.js/);
  assert.doesNotMatch(loader,/fitness-routine-summary-v1\.js/);
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-routine-summary-v1.js')),false);
});

test('Fitness Summary uses requested badge taxonomy',()=>{
  for (const badge of ['`C${index+1}`','`H${++holdIndex}`','`R${++repIndex}`','`S${++sportIndex}`','`O${++otherIndex}`','`A${++cardioIndex}`']) {
    assert.ok(summary.includes(badge),`missing ${badge}`);
  }
});

test('exercise cards use Category and never Movement as the summary field',()=>{
  assert.match(summary,/label:'Category',value:exerciseCategory/);
  assert.doesNotMatch(summary,/label:'Movement'/);
  assert.match(summary,/Pushups/);
});

test('every exercise summary is a two-column comprehensive card',()=>{
  assert.match(summary,/fitness-summary-exercise-card bl-routine-summary-card/);
  assert.match(summary,/Benefits \/ purpose:/);
  assert.match(summary,/Technique:/);
  assert.match(summary,/Progression:/);
  assert.match(css,/#fitnessExerciseSummary \.bl-routine-summary-grid/);
  assert.match(css,/grid-template-columns:minmax\(260px,\.78fr\) minmax\(0,1\.22fr\)!important/);
});

test('unassigned Fitness Summary headings use user-facing categories',()=>{
  for (const heading of ['Calisthenics','Cardio','Sports','Other Fitness Activities']) assert.ok(summary.includes(`categorySection('${heading}'`));
  assert.doesNotMatch(summary,/Individual Routine Steps/);
  assert.doesNotMatch(summary,/not assigned to a Routine Group/);
  assert.doesNotMatch(summary,/Routine Group ·/);
});

test('dropdown places Routine Groups before categorised plans exercises and activities',()=>{
  const routineGroups=summary.indexOf('<optgroup label="Routine Groups">');
  const calisthenics=summary.indexOf('<optgroup label="Calisthenics">');
  const cardio=summary.indexOf('<optgroup label="Cardio">');
  const sports=summary.indexOf('<optgroup label="Sports">');
  const other=summary.indexOf('<optgroup label="Other Fitness Activities">');
  assert.ok(routineGroups>=0 && routineGroups<calisthenics && calisthenics<cardio && cardio<sports && sports<other);
  assert.match(summary,/data-filter-key/);
  assert.match(summary,/exercise\.filterKey/);
});

test('exercise filter keeps its parent plan compatible with shared entity filtering',()=>{
  assert.match(summary,/filterOption\(`entity:\$\{plan\.key\}`,exercise\.filterKey/);
  assert.match(summary,/exerciseParent=`plan:\$\{parts\[1\]/);
  assert.match(summary,/stopImmediatePropagation\(\)/);
});

test('Summary v2 stylesheet is in the Fitness CSS chain',()=>{
  assert.match(cssEntry,/fitness-routine-summary-v2\.css/);
});

test('Summary v2 JavaScript parses',()=>{
  const checked=spawnSync(process.execPath,['--check',url('systems/baseline-fitness/js/fitness-routine-summary-v2.js').pathname],{ encoding:'utf8' });
  assert.equal(checked.status,0,checked.stderr || checked.stdout);
});

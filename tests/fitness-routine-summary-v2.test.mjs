import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

const summary=read('systems/baseline-fitness/js/fitness-routine-summary-v2.js');
const structure=read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
const css=read('systems/baseline-fitness/css/fitness-routine-summary-v2.css');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const cssEntry=read('systems/baseline-fitness/css/fitness-routine-workspace.css');

test('v2 is the sole Fitness Routine Summary content/filter owner',()=>{
  assert.match(loader,/fitness-routine-summary-v2\.js/);
  assert.doesNotMatch(loader,/fitness-routine-summary-v1\.js/);
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-routine-summary-v1.js')),false);
  assert.doesNotMatch(structure,/function renderSummary\s*\(/);
  assert.doesNotMatch(structure,/function renderSummaryFilter\s*\(/);
  assert.match(structure,/BASELINE_fitnessRoutineSummary\?\.render/);
});

test('Fitness Summary uses requested badge taxonomy',()=>{
  for (const badge of ['`C${index+1}`','`H${++holdIndex}`','`R${++repIndex}`','`S${++sportIndex}`','`O${++otherIndex}`','`A${++cardioIndex}`']) {
    assert.ok(summary.includes(badge),`missing ${badge}`);
  }
});

test('exercise cards use Category and every card stays two-column comprehensive',()=>{
  assert.match(summary,/label:'Category',value:exerciseCategory/);
  assert.doesNotMatch(summary,/label:'Movement'/);
  assert.match(summary,/Pushups/);
  assert.match(summary,/fitness-summary-exercise-card bl-routine-summary-card/);
  assert.match(summary,/Benefits \/ purpose:/);
  assert.match(summary,/Technique:/);
  assert.match(summary,/Progression:/);
  assert.match(css,/#fitnessExerciseSummary \.bl-routine-summary-grid/);
  assert.match(css,/grid-template-columns:minmax\(260px,\.78fr\) minmax\(0,1\.22fr\)!important/);
});

test('user-facing Summary headings do not expose implementation terminology',()=>{
  for (const heading of ['Calisthenics','Cardio','Sports','Other Fitness Activities']) assert.ok(summary.includes(`categorySection('${heading}'`));
  assert.doesNotMatch(summary,/Individual Routine Steps/);
  assert.doesNotMatch(summary,/not assigned to a Routine Group/);
  assert.doesNotMatch(summary,/Routine Group ·/);
});

test('dropdown distinguishes My Routine first and then contains complete catalogues',()=>{
  const mine=summary.indexOf('My Routine — Routine Groups');
  const mineCalisthenics=summary.indexOf('My Routine — Calisthenics');
  const exerciseLibrary=summary.indexOf('Exercise Library — ${esc(category)}');
  const activityLibrary=summary.indexOf('Activity Library — ${esc(activitySectionTitle(section))}');
  assert.ok(mine>=0 && mine<mineCalisthenics && mineCalisthenics<exerciseLibrary && exerciseLibrary<activityLibrary);
  assert.match(summary,/BASELINE_FITNESS_EXERCISE_CATALOGUE\?\.EXERCISES/);
  assert.match(summary,/BASELINE_FITNESS_ACTIVITY_CATALOGUE\?\.ACTIVITIES/);
  assert.match(summary,/sort\(\(a,b\)=>alpha\(a\.category,b\.category\) \|\| alpha\(a\.name,b\.name\)\)/);
  assert.match(summary,/groupLibrary\(data\.activityLibrary/);
  assert.doesNotMatch(summary,/ownedExercise|ownedActivity|notInRoutine|excludeOwned/);
});

test('library items already used by My Routine are not excluded from the database list',()=>{
  assert.match(summary,/function exerciseLibrary\(\)/);
  assert.match(summary,/function activityLibrary\(\)/);
  assert.doesNotMatch(summary,/exerciseLibrary\(\)[\s\S]{0,700}routineState\(/);
  assert.doesNotMatch(summary,/activityLibrary\(\)[\s\S]{0,700}routineState\(/);
});

test('one canonical Summary select survives duplicate wrappers and refresh',()=>{
  assert.match(summary,/function ensureSingleFilter\(\)/);
  assert.match(summary,/matches\.slice\(1\)/);
  assert.match(summary,/dataSummaryFilterOwner|summaryFilterOwner|summary-filter-owner|dataset\.summaryFilterOwner/);
  assert.match(structure,/function ensureSingleSummaryFilter\(panel\)/);
  assert.match(structure,/selects\.slice\(1\)/);
});

test('exercise and library filters have functional Summary previews',()=>{
  assert.match(summary,/filterOption\(`entity:\$\{plan\.key\}`,exercise\.filterKey/);
  assert.match(summary,/exerciseParent=`plan:\$\{parts\[1\]/);
  assert.match(summary,/library-exercise:/);
  assert.match(summary,/library-activity:/);
  assert.match(summary,/renderLibraryPreview/);
  assert.match(summary,/libraryExercisePreview/);
  assert.match(summary,/libraryActivityPreview/);
  assert.doesNotMatch(summary,/stopImmediatePropagation\(\)/);
});

test('Summary filter persists its exact URL state for clean refresh',()=>{
  assert.match(summary,/searchParams\.set\('routine-view','summary'\)/);
  assert.match(summary,/searchParams\.set\('routine-filter',next\)/);
  assert.match(summary,/sessionStorage\?\.setItem\(FILTER_STORAGE_KEY,next\)/);
});

test('Summary v2 stylesheet is in the Fitness CSS chain',()=>{
  assert.match(cssEntry,/fitness-routine-summary-v2\.css/);
  assert.match(cssEntry,/BASELINE_ROUTINE_COHERENCE_20260809_10/);
});

test('Fitness Summary and structure JavaScript parse',()=>{
  for (const path of ['systems/baseline-fitness/js/fitness-routine-summary-v2.js','systems/baseline-fitness/js/fitness-routine-structure-v4.js']) {
    const checked=spawnSync(process.execPath,['--check',url(path).pathname],{ encoding:'utf8' });
    assert.equal(checked.status,0,`${path}: ${checked.stderr || checked.stdout}`);
  }
});

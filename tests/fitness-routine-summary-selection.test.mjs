import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source=readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-summary-v2.js',import.meta.url),'utf8');

test('Fitness Summary dropdown treats Groups and Calisthenic Plans as whole selectable units',()=>{
  assert.match(source,/<optgroup label=\"Groups\">/);
  assert.match(source,/<optgroup label=\"Calisthenic Plans\">/);
  assert.match(source,/const planOptions=data\.plans/);
  assert.match(source,/map\(\(plan\)=>filterOption\(`entity:\$\{plan\.key\}`/);
  assert.doesNotMatch(source,/plan\.exercises[^;]*filterOption/);
  assert.doesNotMatch(source,/exercise\.filterKey/);
});

test('selecting a Calisthenics plan keeps its complete exercise Summary inside the plan',()=>{
  assert.match(source,/entity\.exercises\.map\(exerciseCard\)/);
  assert.match(source,/fitness-plan-summary-card/);
  assert.doesNotMatch(source,/function applyExerciseFilter/);
  assert.doesNotMatch(source,/filter\.startsWith\(['\"]exercise:/);
});

test('Sports receive a comprehensive two-column activity Summary',()=>{
  assert.match(source,/section==='sports'/);
  assert.match(source,/racket:\{/);
  assert.match(source,/teamSport:\{/);
  assert.match(source,/batBall:\{/);
  assert.match(source,/precision:\{/);
  assert.match(source,/waterSport:\{/);
  assert.match(source,/winterSport:\{/);
  assert.match(source,/Workout \/ skill focus/);
  assert.match(source,/Muscle involvement/);
  assert.match(source,/Benefits and practical role/);
});

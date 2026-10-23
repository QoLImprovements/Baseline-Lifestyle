import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LEVELS, initialBottles, pourAmount, applyPour, isSolved, validateLevel, findSolution, isBottleComplete
} from '../systems/baseline-recreation/games/colour-sort/js/colour-sort-engine.mjs';

test('every authored colour-sort level has exactly four units of each colour', () => {
  assert.equal(LEVELS.length, 60);
  for (const level of LEVELS) assert.equal(validateLevel(level), true, `level ${level.id}`);
});

test('pour rules move only the exposed contiguous colour', () => {
  const bottles = [[0,1,1], [1], []];
  assert.equal(pourAmount(bottles, 0, 1), 2);
  const result = applyPour(bottles, 0, 1);
  assert.deepEqual(result.bottles, [[0], [1,1,1], []]);
  assert.deepEqual(bottles, [[0,1,1], [1], []]);
});

test('different exposed colours cannot be poured together', () => {
  const bottles = [[0,1], [2], []];
  assert.equal(pourAmount(bottles, 0, 1), 0);
  assert.equal(applyPour(bottles, 0, 1), null);
});

test('completed bottles and solved boards are recognised', () => {
  assert.equal(isBottleComplete([2,2,2,2]), true);
  assert.equal(isSolved([[0,0,0,0],[1,1,1,1],[],[]]), true);
  assert.equal(isSolved([[0,0,1,1],[1,1,0,0],[],[]]), false);
});

test('all authored levels have a legal solution', () => {
  for (const level of LEVELS) {
    const result = findSolution(initialBottles(level.id), { maxNodes:250000 });
    assert.ok(result.solution, `level ${level.id} should solve; searched ${result.nodes} nodes`);
    assert.ok(result.solution.length > 0, `level ${level.id} should require moves`);
  }
});

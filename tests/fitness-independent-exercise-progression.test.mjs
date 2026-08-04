import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const progression = require('../systems/baseline-fitness/js/fitness-saved-data-bridge.js');

test('a failed exercise repeats while successful exercises continue', () => {
  const history = { failuresBySession: { 6: ['Knee Push-Ups'] } };

  assert.equal(progression.effectiveSession('Knee Push-Ups', 7, history), 6);
  assert.equal(progression.effectiveSession('Squats', 7, history), 7);
});

test('repeated failures keep only that exercise at the same progression session', () => {
  const history = {
    failuresBySession: {
      6: ['Knee Push-Ups'],
      7: ['Knee Push-Ups']
    }
  };

  assert.equal(progression.effectiveSession('Knee Push-Ups', 8, history), 6);
  assert.equal(progression.effectiveSession('Squats', 8, history), 8);
});

test('the Session 6 squat anchor and uniform progression remain intact', () => {
  const squats = {
    exercise: 'Squats',
    baseline: 40,
    sets: 3,
    progressionType: 'leg-reps'
  };

  assert.deepEqual(progression.targetsForExercise(squats, 6), [44, 41, 47]);
  assert.deepEqual(progression.targetsForExercise(squats, 7), [47, 44, 50]);
  assert.deepEqual(progression.targetsForExercise(squats, 8), [50, 47, 53]);
});

test('one failed set marks the exercise for repetition without affecting classmates', () => {
  const results = {
    0: { status: 'success', exercise: 'Knee Push-Ups' },
    1: { status: 'success', exercise: 'Squats' },
    2: { status: 'failed', exercise: 'Knee Push-Ups' },
    3: { status: 'success', exercise: 'Squats' }
  };

  assert.deepEqual(progression.failedExercises(results), ['Knee Push-Ups']);
});

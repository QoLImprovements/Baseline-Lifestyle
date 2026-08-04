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

test('every leg-rep set follows uniform plus-three linear progression', () => {
  const legExercise = {
    exercise: 'Squats',
    baseline: 30,
    sets: 3,
    progressionType: progression.TYPES.LEG
  };

  assert.deepEqual(progression.progressionIncrements(progression.TYPES.LEG, 3), [3, 3, 3]);
  assert.deepEqual(progression.targetsForExercise(legExercise, 1), [23, 21, 24]);
  assert.deepEqual(progression.targetsForExercise(legExercise, 2), [26, 24, 27]);
  assert.deepEqual(progression.targetsForExercise(legExercise, 3), [29, 27, 30]);
});

test('push-up and standard-rep sets follow uniform plus-one linear progression', () => {
  const pushUps = {
    exercise: 'Knee Push-Ups',
    baseline: 50,
    sets: 3,
    progressionType: progression.TYPES.STANDARD
  };

  assert.deepEqual(progression.progressionIncrements(progression.TYPES.STANDARD, 3), [1, 1, 1]);
  assert.deepEqual(progression.targetsForExercise(pushUps, 1), [38, 35, 40]);
  assert.deepEqual(progression.targetsForExercise(pushUps, 2), [39, 36, 41]);
  assert.deepEqual(progression.targetsForExercise(pushUps, 3), [40, 37, 42]);
});

test('the current Session 6 squat anchor continues with plus three per set', () => {
  const squats = {
    exercise: 'Squats',
    baseline: 40,
    sets: 3,
    progressionType: progression.TYPES.LEG
  };

  assert.deepEqual(progression.targetsForExercise(squats, 6), [44, 41, 47]);
  assert.deepEqual(progression.targetsForExercise(squats, 7), [47, 44, 50]);
  assert.deepEqual(progression.targetsForExercise(squats, 8), [50, 47, 53]);
});

test('one failed set marks the whole exercise for repetition without affecting others', () => {
  const results = {
    0: { status: 'success', exercise: 'Knee Push-Ups' },
    1: { status: 'success', exercise: 'Squats' },
    2: { status: 'failed', exercise: 'Knee Push-Ups' },
    3: { status: 'success', exercise: 'Squats' }
  };

  assert.deepEqual(progression.failedExercises(results), ['Knee Push-Ups']);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const catalogue = require('../systems/baseline-fitness/js/fitness-exercise-catalogue.js');
const app = require('../systems/baseline-fitness/js/baseline-fitness-app.js');
const progression = require('../systems/baseline-fitness/js/fitness-saved-data-bridge.js');

const names = new Set(catalogue.EXERCISES.map((item) => item.name));
const byName = (name) => catalogue.EXERCISES.find((item) => item.name === name);

test('the grouped catalogue contains all twelve exercise families and seventy-five exercises', () => {
  assert.equal(catalogue.FAMILIES.length, 12);
  assert.equal(catalogue.EXERCISES.length, 75);
  assert.equal(names.size, catalogue.EXERCISES.length);
  assert.deepEqual(catalogue.FAMILIES.map((family) => family.label), [
    'Push-Ups',
    'Squats',
    'Planks',
    'Side Planks',
    'Reverse Planks',
    'Lunges',
    'Hip & Glute — Glute Bridges',
    'Hip & Glute — Hip Hinges',
    'Hip & Glute — Hip Abduction',
    'Pulling — Rows',
    'Pulling — Pull-Ups',
    'Other Core'
  ]);
});

test('all requested later additions are available', () => {
  [
    'Wall Push-Ups', 'One-Arm Push-Ups', 'Assisted Pistol Squats', 'Pistol Squats',
    'Long-Lever Elbow Plank', 'Star Side Elbow Plank', 'Reverse Elbow Plank',
    'Jumping Lunges', 'Single-Leg Glute Bridge', 'Nordic Curl Progression',
    'Standing Hip Abduction', 'Inverted Row', 'Supported Hang', 'Active Hang',
    'Negative Pull-Up', 'Pull-Up', 'Chin-Up', 'Hollow-Body Hold', 'Superman Hold'
  ].forEach((name) => assert.ok(names.has(name), `${name} should be in the catalogue`));
});

test('the exercise selector is grouped with native optgroups', () => {
  const options = app.exerciseOptions('Squats');
  assert.match(options, /<optgroup label="Push-Ups">/);
  assert.match(options, /<optgroup label="Squats">/);
  assert.match(options, /<optgroup label="Pulling — Pull-Ups">/);
  assert.match(options, /value="Squats" selected/);
});

test('progression type is explicit and independent from dropdown family', () => {
  assert.equal(byName('Knee Push-Ups').progressionType, catalogue.TYPES.STANDARD);
  assert.equal(byName('Doorframe Row').progressionType, catalogue.TYPES.STANDARD);
  assert.equal(byName('Squats').progressionType, catalogue.TYPES.LEG);
  assert.equal(byName('Glute Bridge').progressionType, catalogue.TYPES.LEG);
  assert.equal(byName('Elbow Plank').progressionType, catalogue.TYPES.TIMED);
  assert.equal(byName('Active Hang').progressionType, catalogue.TYPES.TIMED);
});

test('standard and leg exercises use uniform linear set increments', () => {
  assert.deepEqual(app.progressionIncrements(catalogue.TYPES.STANDARD, 3), [1, 1, 1]);
  assert.deepEqual(app.progressionIncrements(catalogue.TYPES.LEG, 3), [3, 3, 3]);
});

test('timed guides add three seconds then two seconds from ninety seconds', () => {
  assert.equal(app.holdIncrement(89), 3);
  assert.equal(app.holdIncrement(90), 2);
  assert.equal(app.holdValue(87, 1), 87);
  assert.equal(app.holdValue(87, 2), 90);
  assert.equal(app.holdValue(87, 3), 92);
  assert.equal(progression.timedGuideFromAchievement(91), 93);
});

test('separate left and right holds become independent workout steps', () => {
  const work = app.workForSession([{ exercise: 'Elbow Side Plank', baseline: 30, progressionType: catalogue.TYPES.TIMED }], 1);
  const steps = app.executionSteps(work);
  assert.equal(steps.length, 2);
  assert.equal(steps[0].name, 'Elbow Side Plank Left');
  assert.equal(steps[1].name, 'Elbow Side Plank Right');
  assert.notEqual(steps[0].exerciseKey, steps[1].exerciseKey);
  assert.match(steps[0].label, /Hold to technical burnout/);
});

test('left and right timed achievements progress independently', () => {
  const history = progression.recordTimedResults(null, 6, {
    0: { isTimed: true, unit: 'seconds', exerciseKey: 'Elbow Side Plank::left', achieved: 91 },
    1: { isTimed: true, unit: 'seconds', exerciseKey: 'Elbow Side Plank::right', achieved: 86 }
  });
  assert.equal(progression.latestTimedAchievement('Elbow Side Plank::left', 7, history), 91);
  assert.equal(progression.latestTimedAchievement('Elbow Side Plank::right', 7, history), 86);
  assert.equal(progression.timedGuideFromAchievement(91), 93);
  assert.equal(progression.timedGuideFromAchievement(86), 89);
});

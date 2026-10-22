import assert from 'node:assert/strict';
import test from 'node:test';
import { completeRun, createDefaultCalorieEscapeState } from '../systems/baseline-recreation/games/baseline-realm/calorie-escape/js/calorie-escape-engine.js';

test('Calorie Escape completion reduces Caloric Experience', () => {
  const state = createDefaultCalorieEscapeState();
  const before = state.caloricExperienceRemaining;
  const outcome = completeRun(state, {
    levelId: 'city-1', score: 5200, distance: 4200, pressure: 36,
    hits: 1, broken: 8, avoided: 22, collected: 4, bestCombo: 17,
    materials: { grain: 3 }, duration: 48
  });
  assert.ok(outcome.state.caloricExperienceRemaining < before || outcome.result.levelsGained > 0);
  assert.ok(outcome.state.unlockedLevels.includes('city-2'));
});

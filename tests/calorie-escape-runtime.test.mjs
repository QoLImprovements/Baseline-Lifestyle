import assert from 'node:assert/strict';
import test from 'node:test';
import { calorieEscapeModules } from '../systems/baseline-games-hub/games/baseline-realm/calorie-escape/js/calorie-escape-game.js';

test('Calorie Escape runtime graph loads',()=>{
 assert.equal(typeof calorieEscapeModules.setup,'function');
 assert.equal(typeof calorieEscapeModules.draw,'function');
 assert.equal(typeof calorieEscapeModules.update,'function');
});

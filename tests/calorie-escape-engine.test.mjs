import assert from 'node:assert/strict';
import test from 'node:test';
import { LEVELS, OBSTACLE_TYPES, ZONES } from '../systems/baseline-games-hub/games/baseline-realm/calorie-escape/data/calorie-escape-data.js';
import { calorieEscapeModules } from '../systems/baseline-games-hub/games/baseline-realm/calorie-escape/js/calorie-escape-game.js';

test('Calorie Escape zones',()=>{
 assert.equal(ZONES.length,4);
 assert.equal(ZONES[0].name,'City');
 assert.equal(ZONES[0].pursuer,'Chef Brasa');
});

import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { calorieEscapeModules } from '../systems/baseline-recreation/games/baseline-realm/calorie-escape/js/calorie-escape-game.js';
import { controls } from '../systems/baseline-recreation/games/baseline-realm/calorie-escape/js/controls.js';

const scene=fs.readFileSync('systems/baseline-recreation/games/baseline-realm/calorie-escape/js/calorie-escape-scene.js','utf8');
const shell=fs.readFileSync('systems/baseline-recreation/games/baseline-realm/calorie-escape/js/game-shell.js','utf8');
const css=fs.readFileSync('systems/baseline-recreation/games/baseline-realm/calorie-escape/css/calorie-escape.css','utf8');

test('Calorie Escape runtime graph loads',()=>{
 assert.equal(typeof calorieEscapeModules.setup,'function');
 assert.equal(typeof calorieEscapeModules.draw,'function');
 assert.equal(typeof calorieEscapeModules.update,'function');
});

test('Calorie Escape controls change live run state',()=>{
 const game=Object.assign({
   run:{active:true,modifiers:{attackDuration:.42,jumpImpulse:420,jumpHoldMs:180,slideDuration:.55}},
   paused:false,
   state:{settings:{slideEnabled:true}},
   player:{lane:0,visualLane:0,jumpY:0,jumpVelocity:0,jumpHeld:false,jumpHeldMs:0,sliding:0,attacking:0,invulnerable:0,lean:0},
   sound:{ensure(){},action(){}}
 },controls);
 game.control('right',true);
 assert.equal(game.player.lane,1);
 game.control('attack',true);
 assert.equal(game.player.attacking,.42);
 game.control('slide',true);
 assert.equal(game.player.sliding,.55);
 assert.equal(game.player.attacking,0);
 game.control('jump',true);
 assert.equal(game.player.jumpVelocity,0,'slide correctly prevents jumping until it clears');
 game.player.sliding=0;
 game.control('jump',true);
 assert.equal(game.player.jumpVelocity,420);
});

test('Calorie Escape has one canonical presentation authority',()=>{
 assert.match(scene,/css\/calorie-escape\.css/);
 assert.doesNotMatch(scene,/css\/a\.css/);
 assert.match(scene,/removeAttribute\('data-calorie-escape-live'\)/);
 assert.doesNotMatch(shell,/embeddedStyle/);
 assert.match(css,/Canonical Calorie Escape presentation/);
 assert.match(css,/\.ce-touch-controls button\{[^}]*pointer-events:auto/);
 assert.match(css,/\.ce-header/);
 assert.match(css,/\.ce-result-card/);
});

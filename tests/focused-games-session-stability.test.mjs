import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const dartsPath = new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused.js', import.meta.url);
const dartsTimingPath = new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused-timing.js', import.meta.url);
const badmintonPath = new URL('../systems/baseline-recreation/games/badminton-focused/js/badminton-focused.js', import.meta.url);
const badmintonTimingPath = new URL('../systems/baseline-recreation/games/badminton-focused/js/badminton-focused-timing.js', import.meta.url);
const sharedTimingPath = new URL('../systems/baseline-recreation/js/focused-game-timing.js', import.meta.url);
const darts = fs.readFileSync(dartsPath,'utf8');
const dartsTiming = fs.readFileSync(dartsTimingPath,'utf8');
const badminton = fs.readFileSync(badmintonPath,'utf8');
const badmintonTiming = fs.readFileSync(badmintonTimingPath,'utf8');
const sharedTiming = fs.readFileSync(sharedTimingPath,'utf8');

test('Darts delayed callbacks are scoped to the active selected game session', () => {
  assert.match(darts,/createDartsTimerManager/);
  assert.match(dartsTiming,/createFocusedGameTimerManager/);
  assert.match(sharedTiming,/let sessionToken=0/);
  assert.match(sharedTiming,/sessionToken\+=1/);
  assert.match(sharedTiming,/token:sessionToken/);
  assert.match(sharedTiming,/gameId:getGameId\(\)/);
  assert.match(sharedTiming,/timer\.token!==sessionToken\|\|timer\.gameId!==getGameId\(\)/);
});

test('Badminton remembers the selected sub-game across reloads', () => {
  assert.match(badminton,/ui\.selected=GAMES\.some\(g=>g\.id===profile\.selectedGame\)\?profile\.selectedGame:GAMES\[0\]\.id/);
  assert.match(badminton,/profile\.selectedGame=ui\.selected/);
  assert.match(badminton,/ui\.selected=sel\.getAttribute\('data-badminton-game'\);resetState\(\);saveProfile\(\)/);
});

test('Badminton delayed and auto-next callbacks cannot cross selected-game sessions', () => {
  assert.match(badminton,/createBadmintonTimerManager/);
  assert.match(badmintonTiming,/createFocusedGameTimerManager/);
  assert.match(sharedTiming,/let sessionToken=0/);
  assert.match(sharedTiming,/sessionToken\+=1/);
  assert.match(sharedTiming,/token:sessionToken/);
  assert.match(sharedTiming,/gameId:getGameId\(\)/);
  assert.match(sharedTiming,/timer\.token!==sessionToken\|\|timer\.gameId!==getGameId\(\)/);
});


test('Ninja Training invalidates delayed shuriken hits when leaving the training scene', () => {
  const ninja = fs.readFileSync(new URL('../systems/baseline-recreation/games/baseline-realm/ninja-training/js/ninja-training-runtime.js', import.meta.url),'utf8');
  assert.match(ninja,/let ninjaShurikenVolleyToken = 0/);
  assert.match(ninja,/const volleyToken = \+\+ninjaShurikenVolleyToken/);
  assert.match(ninja,/volleyToken !== ninjaShurikenVolleyToken \|\| realmView !== 'training'/);
  assert.match(ninja,/if\(realmView === 'training' && nextView !== 'training'\)/);
  assert.match(ninja,/ninjaShurikenVolleyToken \+= 1/);
  assert.match(ninja,/ninjaShurikenVolleyActive = false/);
});

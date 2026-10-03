import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const dartsPath = new URL('../systems/baseline-games-hub/games/darts-focused/js/darts-focused.js', import.meta.url);
const badmintonPath = new URL('../systems/baseline-games-hub/games/badminton-focused/js/badminton-focused.js', import.meta.url);
const badmintonTimingPath = new URL('../systems/baseline-games-hub/games/badminton-focused/js/badminton-focused-timing.js', import.meta.url);
const darts = fs.readFileSync(dartsPath,'utf8');
const badminton = fs.readFileSync(badmintonPath,'utf8');
const badmintonTiming = fs.readFileSync(badmintonTimingPath,'utf8');

test('Darts delayed callbacks are scoped to the active selected game session', () => {
  assert.match(darts,/sessionToken:0/);
  assert.match(darts,/ui\.sessionToken \+= 1/);
  assert.match(darts,/const sessionToken = ui\.sessionToken/);
  assert.match(darts,/const gameId = ui\.selected/);
  assert.match(darts,/sessionToken !== ui\.sessionToken \|\| gameId !== ui\.selected/);
});

test('Badminton remembers the selected sub-game across reloads', () => {
  assert.match(badminton,/ui\.selected=GAMES\.some\(g=>g\.id===profile\.selectedGame\)\?profile\.selectedGame:GAMES\[0\]\.id/);
  assert.match(badminton,/profile\.selectedGame=ui\.selected/);
  assert.match(badminton,/ui\.selected=sel\.getAttribute\('data-badminton-game'\);resetState\(\);saveProfile\(\)/);
});

test('Badminton delayed and auto-next callbacks cannot cross selected-game sessions', () => {
  assert.match(badminton,/createBadmintonTimerManager/);
  assert.match(badmintonTiming,/let sessionToken=0/);
  assert.match(badmintonTiming,/sessionToken\+=1/);
  assert.match(badmintonTiming,/timer\.token!==sessionToken\|\|timer\.gameId!==getGameId\(\)/);
});


test('Ninja Training invalidates delayed shuriken hits when leaving the training scene', () => {
  const ninja = fs.readFileSync(new URL('../systems/baseline-games-hub/games/baseline-realm/ninja-training/js/ninja-training-runtime.js', import.meta.url),'utf8');
  assert.match(ninja,/let ninjaShurikenVolleyToken = 0/);
  assert.match(ninja,/const volleyToken = \+\+ninjaShurikenVolleyToken/);
  assert.match(ninja,/volleyToken !== ninjaShurikenVolleyToken \|\| realmView !== 'training'/);
  assert.match(ninja,/if\(realmView === 'training' && nextView !== 'training'\)/);
  assert.match(ninja,/ninjaShurikenVolleyToken \+= 1/);
  assert.match(ninja,/ninjaShurikenVolleyActive = false/);
});

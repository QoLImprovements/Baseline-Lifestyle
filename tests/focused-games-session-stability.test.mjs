import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const dartsPath = new URL('../systems/baseline-games-hub/games/darts-focused/js/darts-focused.js', import.meta.url);
const badmintonPath = new URL('../systems/baseline-games-hub/games/badminton-focused/js/badminton-focused.js', import.meta.url);
const darts = fs.readFileSync(dartsPath,'utf8');
const badminton = fs.readFileSync(badmintonPath,'utf8');

test('Darts delayed callbacks are scoped to the active selected game session', () => {
  assert.match(darts,/sessionToken:0/);
  assert.match(darts,/ui\.sessionToken \+= 1/);
  assert.match(darts,/const sessionToken = ui\.sessionToken/);
  assert.match(darts,/const gameId = ui\.selected/);
  assert.match(darts,/sessionToken !== ui\.sessionToken \|\| gameId !== ui\.selected/);
});

test('Badminton remembers the selected sub-game across reloads', () => {
  assert.match(badminton,/selectedGame:GAMES\[0\]\.id/);
  assert.match(badminton,/ui\.selected=GAMES\.some\(g=>g\.id===profile\.selectedGame\)\?profile\.selectedGame:GAMES\[0\]\.id/);
  assert.match(badminton,/profile\.selectedGame=ui\.selected/);
  assert.match(badminton,/ui\.selected=sel\.getAttribute\('data-badminton-game'\);resetState\(\);saveProfile\(\)/);
});

test('Badminton delayed and auto-next callbacks cannot cross selected-game sessions', () => {
  assert.match(badminton,/sessionToken:0/);
  assert.match(badminton,/ui\.sessionToken\+=1/);
  assert.match(badminton,/token!==ui\.sessionToken\|\|id!==ui\.selected/);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  emptyBoard, canPlace, resolvePlacement, createTray, shapeById, SHAPES, boundsForShape,
  legalPlacements, validBoard, runLevel
} from '../systems/baseline-recreation/games/block-grid/js/block-grid-engine.mjs';

test('block grid places pieces without mutating the source board', () => {
  const board = emptyBoard();
  const result = resolvePlacement(board, 'square2', 2, 3, 0);
  assert.ok(result);
  assert.equal(board[2][3], 0);
  assert.equal(result.board[2][3], 1);
  assert.equal(result.board[3][4], 1);
});

test('block grid clears a completed row', () => {
  const board = emptyBoard();
  for (let col = 0; col < 6; col += 1) board[7][col] = 1;
  const result = resolvePlacement(board, 'domino-h', 7, 6, 0);
  assert.ok(result);
  assert.equal(result.linesCleared, 1);
  assert.deepEqual(result.board[7], Array(8).fill(0));
  assert.equal(result.combo, 1);
});

test('block grid clears simultaneous row and column', () => {
  const board = emptyBoard();
  for (let col = 0; col < 7; col += 1) board[7][col] = 1;
  for (let row = 0; row < 7; row += 1) board[row][7] = 1;
  const result = resolvePlacement(board, {id:'single-test',cells:[[0,0]]}, 7, 7, 2);
  assert.ok(result);
  assert.equal(result.linesCleared, 2);
  assert.equal(result.combo, 3);
  assert.ok(result.board.every(row => row[7] === 0));
  assert.deepEqual(result.board[7], Array(8).fill(0));
});

test('tray generation guarantees a fitting piece when the mode still has one', () => {
  const board = emptyBoard();
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) board[row][col] = 1;
  }
  board[0][0] = 0;
  board[0][1] = 0;
  const tray = createTray(board, 'relaxed', () => 0.99);
  assert.equal(tray.length, 3);
  assert.ok(tray.some(id => legalPlacements(board, shapeById(id)).length > 0));
});

test('board validation and level progression are stable', () => {
  assert.equal(validBoard(emptyBoard()), true);
  assert.equal(runLevel(0), 1);
  assert.equal(runLevel(10), 2);
  assert.equal(canPlace(emptyBoard(), 'line5-h', 0, 4), false);
});


test('every shape rejects anchors that would overhang the board', () => {
  const board = emptyBoard();
  for (const piece of SHAPES) {
    const bounds = boundsForShape(piece);
    assert.equal(canPlace(board, piece, board.length - bounds.rows + 1, 0), false, `${piece.id} bottom overhang`);
    assert.equal(canPlace(board, piece, 0, board.length - bounds.cols + 1), false, `${piece.id} right overhang`);
    assert.equal(canPlace(board, piece, -1, 0), false, `${piece.id} top overhang`);
    assert.equal(canPlace(board, piece, 0, -1), false, `${piece.id} left overhang`);
  }
});

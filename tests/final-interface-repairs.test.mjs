import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const stabilityPath = new URL('../sitewide/js/baseline-live-stability.js', import.meta.url);
const gamesCorePath = new URL('../systems/baseline-games-hub/js/baseline-games-hub-core.js', import.meta.url);
const source = readFileSync(stabilityPath, 'utf8');
const gamesCore = readFileSync(gamesCorePath, 'utf8');

test('the final sitewide repair runtime remains valid JavaScript', () => {
  const checked = spawnSync(process.execPath, ['--check', stabilityPath.pathname], { encoding: 'utf8' });
  assert.equal(checked.status, 0, checked.stderr || checked.stdout);
});

test('grouped Routine Logs keep one collective number and provide a group checkbox', () => {
  assert.match(source, /data-final-group-number/);
  assert.match(source, /data-final-group-complete/);
  assert.match(source, /Complete group/);
  assert.match(source, /setSkinGroupCompletion/);
  assert.match(source, /routine-log-item \.routine-log-check > span > \.bl-v4-number/);
});

test('Public Routines and Routine Log settings receive stable compact layout repairs', () => {
  assert.match(source, /bl-final-public-title-row/);
  assert.match(source, /grid-column:2!important;grid-row:1 \/ span 2!important/);
  assert.match(source, /\.bl-v4-settings-button\{position:static!important/);
  assert.match(source, /data-v4-settings-panel/);
});

test('Account exposes one Favorites dropdown with Food and Natural Skincare categories', () => {
  assert.match(source, /id=\"bl-favorites-select\"/);
  assert.match(source, /<label for=\"bl-favorites-select\">Favorites<\/label>/);
  assert.match(source, /document\.createElement\('optgroup'\)/);
  assert.match(source, /label:'Food'/);
  assert.match(source, /label:'Natural Skincare'/);
});

test('Detect The Word tiles and key share explicit semantic feedback colours', () => {
  assert.match(source, /letter-cell\.correct,.word-feedback-dot--correct/);
  assert.match(source, /letter-cell\.present,.word-feedback-dot--present/);
  assert.match(source, /letter-cell\.absent,.word-feedback-dot--absent/);
  assert.match(source, /Correct place/);
  assert.match(source, /In word, different place/);
  assert.match(source, /Not in word/);
  assert.match(gamesCore, /result\[idx\]\.state = 'correct'/);
  assert.match(gamesCore, /result\[idx\]\.state = 'present'/);
  assert.match(gamesCore, /secretPool\[poolIndex\] = null/);
});

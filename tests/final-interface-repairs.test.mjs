import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const read=path => readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const modules=[
  'sitewide/js/baseline-live-stability.js',
  'sitewide/js/baseline-unified-favorites-v1.js',
  'sitewide/js/baseline-detect-word-feedback-v1.js'
];
const favorites=read('sitewide/js/baseline-unified-favorites-v1.js');
const detectWord=read('sitewide/js/baseline-detect-word-feedback-v1.js');
const gamesCore=read('systems/baseline-games-hub/js/baseline-games-hub-core.js');

test('remaining isolated final interface modules are valid JavaScript',() => {
  for (const path of modules) {
    const file=new URL(`../${path}`,import.meta.url);
    const checked=spawnSync(process.execPath,['--check',file.pathname],{ encoding:'utf8' });
    assert.equal(checked.status,0,`${path}: ${checked.stderr || checked.stdout}`);
  }
});

test('Account exposes one Favorites dropdown with Food and Natural Skincare categories',() => {
  assert.match(favorites,/id=\"bl-favorites-select\"/);
  assert.match(favorites,/<label for=\"bl-favorites-select\">Favorites<\/label>/);
  assert.match(favorites,/document\.createElement\('optgroup'\)/);
  assert.match(favorites,/label:'Food'/);
  assert.match(favorites,/label:'Natural Skincare'/);
  assert.doesNotMatch(favorites,/document\.documentElement[\s\S]*MutationObserver/);
});

test('Detect The Word tiles and key share explicit semantic feedback colours',() => {
  assert.match(detectWord,/letter-cell\.correct,.word-feedback-dot--correct/);
  assert.match(detectWord,/letter-cell\.present,.word-feedback-dot--present/);
  assert.match(detectWord,/letter-cell\.absent,.word-feedback-dot--absent/);
  assert.match(detectWord,/Correct place/);
  assert.match(detectWord,/In word, different place/);
  assert.match(detectWord,/Not in word/);
  assert.match(gamesCore,/result\[idx\]\.state = 'correct'/);
  assert.match(gamesCore,/result\[idx\]\.state = 'present'/);
  assert.match(gamesCore,/secretPool\[poolIndex\] = null/);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const read=path => readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const modules=[
  'systems/baseline-games-hub/js/baseline-games-hub-core.js'
];
const shared=read('sitewide/js/baseline-shared.js');
const gamesCore=read('systems/baseline-games-hub/js/baseline-games-hub-core.js');
const favoritesStart=shared.indexOf('// One Account Favorites control');
const favoritesEnd=shared.indexOf('// Expose a helper for other features',favoritesStart);
const favorites=shared.slice(favoritesStart,favoritesEnd);

test('remaining isolated final interface modules are valid JavaScript',() => {
  for (const path of modules) {
    const file=new URL(`../${path}`,import.meta.url);
    const checked=spawnSync(process.execPath,['--check',file.pathname],{ encoding:'utf8' });
    assert.equal(checked.status,0,`${path}: ${checked.stderr || checked.stdout}`);
  }
});

test('Account exposes one live Favorites dropdown with Food and Personal Care categories',() => {
  assert.ok(favoritesStart>=0 && favoritesEnd>favoritesStart);
  assert.match(shared,/id=\"bl-favorites-select\"/);
  assert.match(shared,/<label for=\"bl-favorites-select\">Favorites<\/label>/);
  assert.match(favorites,/document\.createElement\('optgroup'\)/);
  assert.match(favorites,/label:'Food'/);
  assert.match(favorites,/label:'Personal Care'/);
  assert.doesNotMatch(shared,/bl-favs-food-select|bl-favs-skin-select/);
  assert.doesNotMatch(favorites,/MutationObserver/);
  assert.equal(existsSync(new URL('../sitewide/js/baseline-unified-favorites-v1.js',import.meta.url)),false);
});

test('Detect The Word semantic result states are owned by Games Hub core',() => {
  assert.match(gamesCore,/result\[idx\]\.state = 'correct'/);
  assert.match(gamesCore,/result\[idx\]\.state = 'present'/);
  assert.match(gamesCore,/secretPool\[poolIndex\] = null/);
  assert.doesNotMatch(gamesCore,/baseline-detect-word-feedback-v1/);
});

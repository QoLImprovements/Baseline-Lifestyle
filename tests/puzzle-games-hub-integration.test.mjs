import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const read = relative => fs.readFileSync(relative, 'utf8');

test('puzzle games are registered and loaded as isolated Games Hub modules', () => {
  const registry = read('systems/baseline-games-hub/js/games-registry.js');
  const html = read('systems/baseline-games-hub/baseline-games-hub.html');
  const htaccess = read('.htaccess');
  assert.match(registry, /id:'block-grid'[\s\S]*?profileApp:'blockgrid'/);
  assert.match(registry, /id:'colour-sort'[\s\S]*?profileApp:'coloursort'/);
  assert.match(html, /games\/block-grid\/js\/block-grid\.js/);
  assert.match(html, /games\/colour-sort\/js\/colour-sort\.js/);
  assert.match(html, /rule-shift\|block-grid\|colour-sort\|darts-focused/);
  assert.match(htaccess, /rule-shift\|block-grid\|colour-sort\|darts-focused/);
  assert.doesNotMatch(read('systems/baseline-games-hub/games/block-grid/js/block-grid.js'), /baseline-realm|ninjaPanel/);
  assert.doesNotMatch(read('systems/baseline-games-hub/games/colour-sort/js/colour-sort.js'), /baseline-realm|ninjaPanel/);
});

test('puzzle games use the Games Hub server storage authority with dedicated saved-data resources', () => {
  const guard = read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
  const api = read('systems/baseline-games-hub/api/games_data.php');
  const saved = read('sitewide/api/saved_data.php');
  for (const app of ['blockgrid','coloursort']) {
    assert.ok(guard.includes(`'${app}'`));
    assert.ok(api.includes(`'${app}'`));
  }
  assert.match(saved, /'blockgrid'\s*=>\s*'block-grid\.json'/);
  assert.match(saved, /'coloursort'\s*=>\s*'colour-sort\.json'/);
});

test('production puzzle modules do not create a competing browser persistence layer', () => {
  for (const path of [
    'systems/baseline-games-hub/js/puzzle-game-support.mjs',
    'systems/baseline-games-hub/games/block-grid/js/block-grid.js',
    'systems/baseline-games-hub/games/colour-sort/js/colour-sort.js'
  ]) {
    assert.doesNotMatch(read(path), /\b(?:localStorage|sessionStorage|indexedDB)\b/);
  }
});

test('current Weight of Coherence puzzle uses the same server save authority', () => {
  const source = read('systems/baseline-games-hub/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');
  const guard = read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
  const api = read('systems/baseline-games-hub/api/games_data.php');
  const saved = read('sitewide/api/saved_data.php');
  assert.match(source, /APP = 'weightcoherence'/);
  assert.match(source, /BaselineGameStorage/);
  assert.doesNotMatch(source, /\b(?:localStorage|sessionStorage|indexedDB)\b/);
  assert.ok(guard.includes("'weightcoherence'"));
  assert.ok(api.includes("'weightcoherence'"));
  assert.match(saved, /'weightcoherence'\s*=>\s*'weight-of-coherence\.json'/);
});

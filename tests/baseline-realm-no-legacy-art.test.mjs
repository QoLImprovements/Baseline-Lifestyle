import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const hub = path.join(root, 'systems/baseline-recreation');
const realm = path.join(hub, 'games/baseline-realm');
const textExtensions = new Set(['.html', '.css', '.js', '.mjs', '.md', '.json', '.php']);

function walk(entry, files = []) {
  const stat = fs.statSync(entry);
  if (stat.isDirectory()) {
    if (path.basename(entry) === 'tests') return files;
    for (const name of fs.readdirSync(entry)) walk(path.join(entry, name), files);
  } else if (textExtensions.has(path.extname(entry))) {
    files.push(entry);
  }
  return files;
}

test('removed Realm art and runtime authorities stay absent', () => {
  assert.equal(fs.existsSync(path.join(realm, 'game-art')), false);
  assert.equal(fs.existsSync(path.join(realm, 'ninja-training/js/legacy-ninja-runtime.js')), false);
  assert.equal(fs.existsSync(path.join(realm, 'ninja-training/js/ninja-training-runtime.js')), true);
});

test('all active Recreation sources contain no removed Realm art references', () => {
  const forbidden = [
    '/game-art/',
    'ninja-bg-loop',
    'realm-training-loop',
    'realm-training-scene-v3',
    'baseline-ninja-runner.svg',
    'baseline-ninja-enemy-scout.svg',
    'baseline-ninja-enemy-bandit.svg',
    'baseline-ninja-enemy-oni.svg',
    'baseline-realm-runner-v2',
    'baseline-realm-enemy-scout-v2',
    'baseline-realm-enemy-bandit-v2',
    'baseline-realm-enemy-oni-v2',
    'ninjaRunnerSprite',
    'ninjaEnemySprite'
  ];

  for (const file of walk(hub)) {
    const source = fs.readFileSync(file, 'utf8');
    for (const token of forbidden) {
      assert.equal(source.includes(token), false, `${token} remains in ${path.relative(root, file)}`);
    }
  }
});

test('current Realm art authorities exist in their owning modules', () => {
  const currentAssets = [
    'basecamp/art/basecamp-settlement.svg',
    'ninja-training/assets/forest-distant.svg',
    'ninja-training/assets/forest-middle.svg',
    'ninja-training/assets/forest-foreground.svg',
    'ninja-training/assets/alder-veil-run.svg',
    'ninja-training/assets/alder-veil-dash.svg',
    'ninja-training/assets/alder-veil-throw.svg',
    'ninja-training/assets/mossblade-pursuer.svg',
    'ninja-training/assets/gloam-rope-raider.svg',
    'ninja-training/assets/hollow-crown-warden.svg',
    'exploration/art/meridian-grove-sprites.svg'
  ];

  for (const asset of currentAssets) {
    assert.equal(fs.existsSync(path.join(realm, asset)), true, `${asset} is missing`);
  }
});

test('completed modules are exposed as complete rather than previews', async () => {
  const calorieEscape = await import('../systems/baseline-recreation/games/baseline-realm/calorie-escape/data/calorie-escape-data.js');
  assert.deepEqual(calorieEscape.ZONES.map((zone) => zone.status), ['playable', 'playable', 'playable', 'playable']);
  assert.equal(calorieEscape.LEVELS.length, 12);

  const calorieSource = fs.readFileSync(path.join(realm, 'calorie-escape/js/calorie-escape-game.js'), 'utf8');
  const tacticalSource = fs.readFileSync(path.join(realm, 'tactical-operations/js/tactical-operations-scene.js'), 'utf8');
  const explorationReadme = fs.readFileSync(path.join(realm, 'exploration/README.md'), 'utf8');

  assert.doesNotMatch(calorieSource, /future zone preview|playable vertical slice|module-e\.js/i);
  assert.doesNotMatch(tacticalSource, /TACTICAL_OPERATIONS_VERTICAL_SLICE/i);
  assert.doesNotMatch(explorationReadme, /vertical slice/i);
});

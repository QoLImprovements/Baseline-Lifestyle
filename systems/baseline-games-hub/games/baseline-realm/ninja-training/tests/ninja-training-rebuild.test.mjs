import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relativePath) => readFile(path.join(root, relativePath), 'utf8');

const assets = Object.freeze({
  'assets/forest-distant.svg': ['2048', '720'],
  'assets/forest-middle.svg': ['2048', '720'],
  'assets/forest-foreground.svg': ['2048', '720'],
  'assets/alder-veil-run.svg': ['1280', '160'],
  'assets/alder-veil-dash.svg': ['1280', '160'],
  'assets/alder-veil-throw.svg': ['960', '160'],
  'assets/mossblade-pursuer.svg': ['960', '160'],
  'assets/gloam-rope-raider.svg': ['960', '160'],
  'assets/hollow-crown-warden.svg': ['1200', '200']
});

test('the rebuild remains isolated to presentation', async () => {
  const scene = await read('js/ninja-training-scene.js');
  assert.match(scene, /runtime\?\.setView\('training'\)/);
  assert.doesNotMatch(scene, /ninjaEnemyMaxHp|ninjaEnemyReward|ninjaUpgradeCost|advanceNinja/);
  assert.match(scene, /MutationObserver/);
  assert.match(scene, /data-enemy-kind/);
  assert.doesNotMatch(scene, /ninjaEnemySprite|game-art\//);
  assert.match(scene, /IntersectionObserver/);
  assert.match(scene, /document\.visibilityState/);
});

test('enemy presentation does not rewrite its observed attribute unconditionally', async () => {
  const scene = await read('js/ninja-training-scene.js');
  assert.match(scene, /if \(enemy\.dataset\.enemyKind !== kind\) enemy\.dataset\.enemyKind = kind;/);
  assert.doesNotMatch(scene, /^\s{4}enemy\.dataset\.enemyKind = kind;$/m);
});

test('the dense forest uses three independently paced repeatable layers', async () => {
  const css = await read('css/ninja-training-rebuild.css');
  assert.match(css, /forest-distant\.svg/);
  assert.match(css, /forest-middle\.svg/);
  assert.match(css, /forest-foreground\.svg/);
  assert.match(css, /background-repeat:repeat-x!important/);
  assert.match(css, /-2048px/);
});

test('current Ninja authority keeps parallax live and player actions explicit', async () => {
  const scene = await read('js/ninja-training-scene.js');
  const authority = await read('css/ninja-training-final-authority.css');
  assert.doesNotMatch(scene, /scheduleIdleAttack/);
  assert.match(scene, /target\.id === 'ninjaManualStrikeBtn'/);
  assert.match(scene, /target\.id === 'ninjaShurikenBtn'/);
  assert.ok((authority.match(/background-repeat:repeat-x!important/g) || []).length >= 3);
  assert.ok((authority.match(/background-size:auto 100%!important/g) || []).length >= 3);
  assert.doesNotMatch(authority, /ninja-forest-layer[\s\S]{0,180}animation:none!important/);
});

test('visible runtime sprites switch to dash, throw and enemy-variant artwork', async () => {
  const authority = await read('css/ninja-training-final-authority.css');
  assert.match(authority, /is-dash-cut \.ninja-runtime-sprite--runner/);
  assert.match(authority, /alder-veil-dash\.svg/);
  assert.match(authority, /is-throwing \.ninja-runtime-sprite--runner/);
  assert.match(authority, /alder-veil-throw\.svg/);
  assert.match(authority, /ninja-scene__enemy\[data-enemy-kind="raider"\] \.ninja-runtime-sprite--enemy/);
  assert.match(authority, /ninja-scene__enemy\[data-enemy-kind="boss"\] \.ninja-runtime-sprite--enemy/);
  assert.doesNotMatch(authority, /\.ninja-runtime-sprite--enemy\[data-enemy-kind=/);
});

test('combat presentation includes run, idle, dash, throw, hit and defeat states', async () => {
  const css = await read('css/ninja-training-rebuild.css');
  for (const state of ['is-idle-attacking', 'is-dash-cut', 'is-throwing', 'is-hit', 'is-heavy-hit', 'is-defeated']) {
    assert.match(css, new RegExp(state));
  }
  assert.match(css, /ninjaSlashArc/);
  assert.match(css, /ninjaOriginalShuriken/);
});

test('responsive, fullscreen and reduced-motion rules are present', async () => {
  const css = await read('css/ninja-training-rebuild.css');
  assert.match(css, /orientation:landscape/);
  assert.match(css, /:fullscreen/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /100svh/);
});

test('all documented sprite and forest assets have the expected dimensions', async () => {
  for (const [asset, [width, height]] of Object.entries(assets)) {
    const svg = await read(asset);
    assert.match(svg, new RegExp(`width="${width}"`), asset);
    assert.match(svg, new RegExp(`height="${height}"`), asset);
    assert.match(svg, /viewBox=/, asset);
  }
});

test('documentation records frame rates, performance controls and obsolete assets', async () => {
  const documentation = await read('README.md');
  assert.match(documentation, /Sprite-sheet specification/);
  assert.match(documentation, /Performance controls/);
  assert.match(documentation, /current art authority/i);
  assert.doesNotMatch(documentation, /game-art\//);
  assert.match(documentation, /Shuriken projectile: 840 ms/);
  assert.match(documentation, /prefers-reduced-motion/);
});

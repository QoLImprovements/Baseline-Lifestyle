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

test('Ninja scene owns presentation lifecycle but not progression mechanics', async () => {
  const scene = await read('js/ninja-training-scene.js');
  assert.match(scene, /runtime\?\.setView\('training'\)/);
  assert.doesNotMatch(scene, /ninjaEnemyMaxHp|ninjaEnemyReward|ninjaUpgradeCost|advanceNinja/);
  assert.match(scene, /MutationObserver/);
  assert.match(scene, /IntersectionObserver/);
  assert.match(scene, /document\.visibilityState/);
  assert.match(scene, /realmNinjaPresentation/);
  assert.doesNotMatch(scene, /ensureStylesheet|ninja-training-rebuild\.css|ninjaTrainingRebuild/);
});

test('one Ninja stylesheet owns all forest and actor presentation', async () => {
  const css = await read('css/ninja-training.css');
  for (const asset of ['forest-distant.svg','forest-middle.svg','forest-foreground.svg','alder-veil-run.svg','mossblade-pursuer.svg']) {
    assert.match(css, new RegExp(asset.replace('.', '\\.')));
  }
  assert.ok((css.match(/background-repeat:repeat-x!important/g) || []).length >= 1);
  assert.match(css, /-2048px/);
  assert.match(css, /\.ninja-runtime-sprite--runner/);
  assert.match(css, /\.ninja-runtime-sprite--enemy/);
  assert.doesNotMatch(css, /\.tactical-|\.ce-|is-external-realm-view|is-tactical-operations-view|is-calorie-escape-view/);
});

test('visible actors use runtime sprites for run, dash, throw and enemy variants', async () => {
  const css = await read('css/ninja-training.css');
  assert.match(css, /is-dash-cut \.ninja-runtime-sprite--runner/);
  assert.match(css, /alder-veil-dash\.svg/);
  assert.match(css, /is-throwing \.ninja-runtime-sprite--runner/);
  assert.match(css, /alder-veil-throw\.svg/);
  assert.match(css, /ninja-scene__enemy\[data-enemy-kind="raider"\] \.ninja-runtime-sprite--enemy/);
  assert.match(css, /ninja-scene__enemy\[data-enemy-kind="boss"\] \.ninja-runtime-sprite--enemy/);
  assert.doesNotMatch(css, /ninja-scene__runner::before|ninja-scene__enemy::before/);
});

test('combat presentation includes action, hit, defeat and projectile feedback', async () => {
  const css = await read('css/ninja-training.css');
  for (const state of ['is-idle-attacking','is-dash-cut','is-throwing','is-hit','is-heavy-hit','is-defeated','is-entering']) {
    assert.match(css, new RegExp(state));
  }
  assert.match(css, /ninjaSlashArc/);
  assert.match(css, /ninjaOriginalShuriken/);
  assert.match(css, /#ninjaShurikenBtn:disabled/);
  assert.match(css, /--cooldown-progress/);
});

test('Ninja does not own shared frame or mobile viewport geometry', async () => {
  const css = await read('css/ninja-training.css');
  assert.doesNotMatch(css, /#realmSceneFrame:fullscreen|#realmSceneFrame:-webkit-full-screen|100svh|position:fixed!important/);
  assert.match(css, /@media \(max-width:960px\) and \(orientation:landscape\)/);
  assert.match(css, /prefers-reduced-motion:reduce/);
});

test('presentation ignores combat mutations while another Realm scene owns the stage', async () => {
  const scene = await read('js/ninja-training-scene.js');
  assert.match(scene,/let active = false/);
  assert.match(scene,/function presentationIsVisible\(\)/);
  assert.match(scene,/function onAction\(event\) \{\s*if \(!presentationIsVisible\(\)\) return;/);
  assert.match(scene,/function onKeydown\(event\) \{\s*if \(!presentationIsVisible\(\)\) return;/);
  assert.match(scene,/runtime\?\.setView\('training'\);\s*presentation\.resume\(\);/);
});

test('all documented sprite and forest assets have the expected dimensions', async () => {
  for (const [asset, [width, height]] of Object.entries(assets)) {
    const svg = await read(asset);
    assert.match(svg, new RegExp(`width="${width}"`), asset);
    assert.match(svg, new RegExp(`height="${height}"`), asset);
    assert.match(svg, /viewBox=/, asset);
  }
});

test('documentation records sprite timing and performance controls', async () => {
  const documentation = await read('README.md');
  assert.match(documentation, /Sprite-sheet specification/);
  assert.match(documentation, /Performance controls/);
  assert.match(documentation, /Shuriken projectile: 840 ms/);
  assert.match(documentation, /prefers-reduced-motion/);
});

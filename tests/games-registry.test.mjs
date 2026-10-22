import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const registryPath = new URL('../systems/baseline-recreation/js/games-registry.js', import.meta.url);
const corePath = new URL('../systems/baseline-recreation/js/baseline-recreation-core.js', import.meta.url);
const loaderPath = new URL('../systems/baseline-recreation/js/baseline-recreation-loader.js', import.meta.url);
const realmEntryPath = new URL('../systems/baseline-recreation/games/baseline-realm/shared/js/realm-entry.js', import.meta.url);
const modalPath = new URL('../systems/baseline-recreation/js/games-help-modal.js', import.meta.url);
const pagePath = new URL('../systems/baseline-recreation/baseline-recreation.html', import.meta.url);

function loadRegistry() {
  const attributes = new Map();
  const sandbox = {
    window: {},
    document: {
      documentElement: {
        setAttribute(name, value) { attributes.set(name, value); }
      }
    }
  };
  vm.runInNewContext(fs.readFileSync(registryPath, 'utf8'), sandbox, { filename:'games-registry.js' });
  return { registry:sandbox.window.BASELINE_GAMES_REGISTRY, attributes };
}

test('Recreation registry exposes canonical identities with legacy compatibility aliases', () => {
  const { registry, attributes } = loadRegistry();
  assert.ok(registry);
  assert.equal(registry.version, 1);
  assert.equal(registry.games.length, 10);
  assert.equal(attributes.get('data-baseline-games-registry'), '1');

  assert.equal(registry.canonicalId('make24'), 'make-the-number');
  assert.equal(registry.runtimeId('make-the-number'), 'make24');
  assert.equal(registry.route('make24'), 'make-the-number');

  assert.equal(registry.canonicalId('ninja'), 'baseline-realm');
  assert.equal(registry.runtimeId('baseline-realm'), 'ninja');
  assert.equal(registry.route('ninja'), 'baseline-realm');

  assert.equal(registry.canonicalId('darts-focused'), 'darts-focused');
  assert.equal(registry.canonicalId('badminton-focused'), 'badminton-focused');
  assert.equal(registry.canonicalId('block-grid'), 'block-grid');
  assert.equal(registry.canonicalId('colour-sort'), 'colour-sort');
  assert.equal(registry.resolve('block-grid').profileApp, 'blockgrid');
  assert.equal(registry.resolve('colour-sort').profileApp, 'coloursort');
  assert.equal(registry.resolve('block-grid').group, 'extension');
  assert.equal(registry.resolve('colour-sort').group, 'extension');

  const core = registry.coreGames();
  assert.deepEqual(
    Array.from(core, game => game.runtimeId),
    ['pairs','detectword','make24','trackcoin','ruleshift','ninja']
  );

  const overview = registry.overviewGames();
  assert.deepEqual(
    Array.from(overview, game => game.runtimeId),
    ['detectword','make24','pairs','ruleshift','trackcoin','darts-focused','badminton-focused','ninja']
  );
  for (const game of overview) {
    assert.equal(typeof game.overview.group, 'string');
    assert.match(game.overview.art, /RECREATION_BURGUNDY_ROSE_COPPER_20261022_1/);
    assert.ok(game.overview.note.length > 20);
    assert.ok(game.overview.brainBenefit.length > 20);
  }
  assert.equal(registry.resolve('darts-focused').overview.group, 'Testing');
  assert.equal(registry.resolve('baseline-realm').overview.featured, true);
});

test('Recreation help modal has one presentation authority loaded before core', () => {
  const core = fs.readFileSync(corePath, 'utf8');
  const page = fs.readFileSync(pagePath, 'utf8');
  const sandbox = { window:{}, document:{} };
  vm.runInNewContext(fs.readFileSync(modalPath, 'utf8'), sandbox, { filename:'games-help-modal.js' });
  const modal = sandbox.window.BaselineGamesHelpModal;

  assert.ok(modal);
  assert.equal(modal.version, 1);
  assert.equal(modal.contentFor('pairs').title, 'Pairs');
  assert.match(modal.contentFor('ninja').how, /Ninja Training/);

  assert.match(core, /GAMES_HELP_MODAL = window\.BaselineGamesHelpModal/);
  assert.match(core, /games_help_modal_authority_missing/);
  assert.doesNotMatch(core, /GAME_HELP_CONTENT|function gameHelpContent|function ensureGamesHubModal|function openGamesHubModal|function closeGamesHubModal/);

  const modalIndex = page.indexOf('/systems/baseline-recreation/js/games-help-modal.js');
  const coreIndex = page.indexOf('/systems/baseline-recreation/js/baseline-recreation-core.js');
  assert.ok(modalIndex >= 0 && coreIndex > modalIndex, 'modal authority must load before Recreation core');
});

test('Recreation core and Realm coordinate readiness through an explicit event', () => {
  const core = fs.readFileSync(corePath, 'utf8');
  const loader = fs.readFileSync(loaderPath, 'utf8');
  const realmEntry = fs.readFileSync(realmEntryPath, 'utf8');

  assert.match(core, /baseline:recreation:core-ready/);
  assert.match(loader, /addEventListener\('baseline:recreation:core-ready'/);
  assert.match(realmEntry, /addEventListener\?\.\('baseline:recreation:core-ready'/);

  const waitCoreStart = loader.indexOf('function waitCore()');
  const waitCoreEnd = loader.indexOf('\nfunction stable(', waitCoreStart);
  const waitCore = loader.slice(waitCoreStart, waitCoreEnd);
  assert.doesNotMatch(waitCore, /setInterval\s*\(/);

  const configureStart = realmEntry.lastIndexOf('if (!configureFromAvailableCore())');
  const configureTail = realmEntry.slice(configureStart);
  assert.doesNotMatch(configureTail, /setInterval\?\.\(/);
});


test('focused-game overview rows have one DOM renderer authority', () => {
  const core = fs.readFileSync(corePath, 'utf8');
  const loader = fs.readFileSync(loaderPath, 'utf8');

  assert.match(core, /function renderGamesList\(\)/);
  assert.match(core, /data-open-darts-focused/);
  assert.match(core, /data-open-badminton-focused/);

  assert.doesNotMatch(loader, /function dartsMarkup\(\)/);
  assert.doesNotMatch(loader, /function badmintonMarkup\(\)/);
  assert.doesNotMatch(loader, /function addDarts\(\)/);
  assert.doesNotMatch(loader, /function addBadminton\(\)/);
  assert.doesNotMatch(loader, /MutationObserver/);
  assert.doesNotMatch(loader, /insertAdjacentHTML/);
  assert.match(loader, /function ensureFocusedGameStyles\(\)/);
});


test('Recreation core is the sole focused-game overview click controller', () => {
  const core = fs.readFileSync(corePath, 'utf8');
  const loader = fs.readFileSync(loaderPath, 'utf8');

  assert.match(core, /event\.target\.closest\('\[data-open-darts-focused\]'\)/);
  assert.match(core, /requestDartsFocusedOpen\(\)/);
  assert.match(core, /event\.target\.closest\('\[data-open-badminton-focused\]'\)/);
  assert.match(core, /requestBadmintonFocusedOpen\(\)/);

  const clickStart = loader.indexOf("document.addEventListener('click',event=>{");
  const clickEnd = loader.indexOf("\n\nwindow.addEventListener('baseline:realm:load'", clickStart);
  const clickBlock = loader.slice(clickStart, clickEnd);
  assert.ok(clickStart >= 0 && clickEnd > clickStart);
  assert.doesNotMatch(clickBlock, /data-open-darts-focused|data-open-badminton-focused/);

  const pointerStart = loader.indexOf("document.addEventListener('pointerdown',event=>{");
  const pointerEnd = loader.indexOf("\n\nasync function handleRealmFallbackControl", pointerStart);
  const pointerBlock = loader.slice(pointerStart, pointerEnd);
  assert.match(pointerBlock, /loadDarts\(\)/);
  assert.match(pointerBlock, /loadBadminton\(\)/);
});


test('Recreation core consumes overview metadata rather than redeclaring it', () => {
  const core = fs.readFileSync(corePath, 'utf8');
  const start = core.indexOf('function gameMeta()');
  const end = core.indexOf('function renderGamesList()', start);
  const meta = core.slice(start, end);

  assert.match(core, /GAME_REGISTRY\.overviewGames/);
  assert.match(meta, /REGISTERED_OVERVIEW_GAMES\.map/);
  assert.doesNotMatch(meta, /overview-art\/|realistic-dartboard\.svg|badminton-focused-overview\.svg/);
  assert.doesNotMatch(meta, /Wordle-style feedback|Experimental Basecamp\/RPG|10 distinct games played entirely on the website/);
});

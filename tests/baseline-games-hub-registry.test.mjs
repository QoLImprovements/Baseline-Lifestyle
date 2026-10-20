import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const registryPath = new URL('../systems/baseline-games-hub/js/games-registry.js', import.meta.url);
const corePath = new URL('../systems/baseline-games-hub/js/baseline-games-hub-core.js', import.meta.url);
const loaderPath = new URL('../systems/baseline-games-hub/js/baseline-games-hub-v14.js', import.meta.url);
const realmEntryPath = new URL('../systems/baseline-games-hub/games/baseline-realm/shared/js/realm-entry.js', import.meta.url);

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
  return { registry:sandbox.window.BASELINE_GAMES_HUB_GAME_REGISTRY, attributes };
}

test('Games Hub registry exposes canonical identities with legacy compatibility aliases', () => {
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
  assert.equal(registry.resolve('block-grid').group, 'puzzle');
  assert.equal(registry.resolve('colour-sort').group, 'puzzle');

  const core = registry.coreGames();
  assert.deepEqual(
    Array.from(core, game => game.runtimeId),
    ['pairs','detectword','make24','trackcoin','ruleshift','ninja']
  );
});

test('Games Hub core and Realm coordinate readiness through an explicit event', () => {
  const core = fs.readFileSync(corePath, 'utf8');
  const loader = fs.readFileSync(loaderPath, 'utf8');
  const realmEntry = fs.readFileSync(realmEntryPath, 'utf8');

  assert.match(core, /baseline:games-hub:core-ready/);
  assert.match(loader, /addEventListener\('baseline:games-hub:core-ready'/);
  assert.match(realmEntry, /addEventListener\?\.\('baseline:games-hub:core-ready'/);

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

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const registryPath = new URL('../systems/baseline-games-hub/js/games-registry.js', import.meta.url);
const corePath = new URL('../systems/baseline-games-hub/js/baseline-games-hub-core.js', import.meta.url);
const overviewPath = new URL('../systems/baseline-games-hub/js/games-overview.js', import.meta.url);
const hubPath = new URL('../systems/baseline-games-hub/baseline-games-hub.html', import.meta.url);
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
  return { registry:sandbox.window.BASELINE_GAMES_HUB_GAME_REGISTRY, attributes, sandbox };
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

  const overview = registry.overviewGames();
  assert.deepEqual(
    Array.from(overview, game => game.runtimeId),
    ['detectword','make24','pairs','ruleshift','trackcoin','darts-focused','badminton-focused','ninja']
  );
  for (const game of overview) {
    assert.equal(typeof game.overview.group, 'string');
    assert.match(game.overview.art, /G01_INDIGO_CIRCUIT_20260801_1/);
    assert.ok(game.overview.note.length > 20);
    assert.ok(game.overview.brainBenefit.length > 20);
  }
  assert.equal(registry.resolve('darts-focused').overview.group, 'Testing');
  assert.equal(registry.resolve('baseline-realm').overview.featured, true);
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


test('focused-game overview rows have one dedicated DOM renderer authority', () => {
  const core = fs.readFileSync(corePath, 'utf8');
  const overview = fs.readFileSync(overviewPath, 'utf8');
  const loader = fs.readFileSync(loaderPath, 'utf8');

  assert.match(core, /function renderGamesList\(\)/);
  assert.match(core, /OVERVIEW_VIEW\.render\(/);
  assert.doesNotMatch(core, /function gameMeta\(\)|games-list-group" role="presentation"/);

  assert.match(overview, /function focusedRow\(meta\)/);
  assert.match(overview, /data-open-' \+ escapeHtml\(meta\.externalModule\)/);
  assert.doesNotMatch(loader, /function dartsMarkup\(\)/);
  assert.doesNotMatch(loader, /function badmintonMarkup\(\)/);
  assert.doesNotMatch(loader, /function addDarts\(\)/);
  assert.doesNotMatch(loader, /function addBadminton\(\)/);
  assert.doesNotMatch(loader, /MutationObserver/);
  assert.doesNotMatch(loader, /insertAdjacentHTML/);
  assert.match(loader, /function ensureFocusedGameStyles\(\)/);
});


test('Games Hub core is the sole focused-game overview click controller', () => {
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


test('Games overview view consumes registry metadata rather than redeclaring it', () => {
  const core = fs.readFileSync(corePath, 'utf8');
  const overview = fs.readFileSync(overviewPath, 'utf8');

  assert.match(core, /const OVERVIEW_VIEW = window\.BASELINE_GAMES_HUB_OVERVIEW_VIEW \|\| null/);
  assert.doesNotMatch(core, /REGISTERED_OVERVIEW_GAMES|function gameMeta\(\)/);
  assert.match(overview, /GAME_REGISTRY\.overviewGames\(\)/);
  assert.doesNotMatch(overview, /overview-art\/|realistic-dartboard\.svg|badminton-focused-overview\.svg/);
  assert.doesNotMatch(overview, /Wordle-style feedback|Experimental Basecamp\/RPG|10 distinct games played entirely on the website/);
});


test('Games overview authority renders registry entries and loads before core', () => {
  const { sandbox } = loadRegistry();
  vm.runInNewContext(fs.readFileSync(overviewPath, 'utf8'), sandbox, { filename:'games-overview.js' });
  const view = sandbox.window.BASELINE_GAMES_HUB_OVERVIEW_VIEW;
  assert.ok(view);
  assert.equal(view.version, 1);

  const html = view.render({
    selectedGame:'pairs',
    progressFor(game){ return 'Progress ' + game.runtimeId; }
  });
  assert.match(html,/data-open-darts-focused/);
  assert.match(html,/data-open-badminton-focused/);
  assert.match(html,/data-game-card="pairs"[^>]*class|game-row-wrap is-selected|game-row-wrap game-row-wrap--featured is-selected/);
  assert.match(html,/Progress darts-focused/);
  assert.match(html,/Progress badminton-focused/);
  assert.match(html,/Core Games/);
  assert.match(html,/Testing/);

  const hub = fs.readFileSync(hubPath, 'utf8');
  const registryIndex = hub.indexOf('/systems/baseline-games-hub/js/games-registry.js');
  const overviewIndex = hub.indexOf('/systems/baseline-games-hub/js/games-overview.js?v=GAMES_OVERVIEW_JS_20261021_1');
  const coreIndex = hub.indexOf('/systems/baseline-games-hub/js/baseline-games-hub-core.js?v=GAMES_HUB_CORE_JS_20261021_1');
  assert.ok(registryIndex >= 0 && overviewIndex > registryIndex && coreIndex > overviewIndex);
});

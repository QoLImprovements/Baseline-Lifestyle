import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

import { RealmAccessibilityService } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-accessibility-service.js';
import { RealmAssetLoader } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-asset-loader.js';
import { RealmAudioService } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-audio-service.js';
import { RealmGamepadProvider } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-gamepad-provider.js';
import { RealmInventoryService } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-inventory-service.js';
import { createDefaultRealmSave, REALM_SAVE_VERSION } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-model.js';
import { RealmPerformanceMonitor } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-performance.js';
import { RealmSaveAdapter, realmSaveKeys } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-save-adapter.js';
import { RealmStateService } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-state-service.js';
import { RealmWorkshopService } from '../systems/baseline-recreation/games/baseline-realm/workshop/js/workshop-service.js';

const lazyScenesSource = fs.readFileSync(
  new URL('../systems/baseline-recreation/games/baseline-realm/shared/js/realm-lazy-scenes.js', import.meta.url),
  'utf8'
);
const inputBindingsSource = fs.readFileSync(
  new URL('../systems/baseline-recreation/games/baseline-realm/shared/js/realm-input-bindings.js', import.meta.url),
  'utf8'
);
const realmEntrySource = fs.readFileSync(
  new URL('../systems/baseline-recreation/games/baseline-realm/shared/js/realm-entry.js', import.meta.url),
  'utf8'
);

function createStorage() {
  const values = new Map();
  return {
    values,
    getItem: (key) => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: (key) => values.delete(key)
  };
}

function createHarness() {
  let state = createDefaultRealmSave();
  const inventoryService = new RealmInventoryService({
    getSave: () => state,
    setSave: (next) => { state = next; },
    instanceIdFactory: (id, index) => `${id}#integration-${index}`,
    now: () => 1000
  });
  const workshopService = new RealmWorkshopService({ inventoryService, now: () => 2000 });
  const stateService = new RealmStateService({
    getSave: () => state,
    setSave: (next) => { state = next; },
    inventoryService,
    workshopService
  });
  return { getState: () => state, inventoryService, workshopService, stateService };
}

test('external games own their keyboard and controller input without standard Realm shortcut collisions', () => {
  assert.match(inputBindingsSource,/data-baseline-realm-external-scene/);
  assert.match(inputBindingsSource,/\['calorie-escape','tactical-operations'\]\.includes\(sceneRouter\.getCurrentSceneId\(\)\)/);
  assert.match(inputBindingsSource,/const standardActive = \(\) => active\(\) && !externalSceneActive\(\)/);
  assert.match(inputBindingsSource,/bindKeyboard\('realm-primary',[\s\S]*when: standardActive/);
  assert.match(inputBindingsSource,/const standardOnly = \(handler\)/);
  assert.match(inputBindingsSource,/realm:input:realm-primary', standardOnly/);
  assert.match(inputBindingsSource,/sceneRouter\.getCurrentSceneId\(\) === 'basecamp'/);
});

test('external Realm scenes do not impersonate Basecamp and standard scenes restore the persistent shell', () => {
  assert.doesNotMatch(lazyScenesSource,/getRuntime\(\)\?\.setView\?\.\('basecamp'\)/);
  assert.match(lazyScenesSource,/function restorePersistentSceneView\(\)/);
  assert.match(lazyScenesSource,/setHidden\('#ninjaScene, \.realm-command-banner, \.realm-action-dock',false\)/);
  assert.match(lazyScenesSource,/destination scene's runtime\.setView\(\) is the sole visibility authority/);
});

test('Realm v3 shares wallet, all inventory buckets, roster and party data', () => {
  const harness = createHarness();
  assert.equal(REALM_SAVE_VERSION, 3);
  assert.deepEqual(Object.keys(harness.getState().realm.inventory), ['materials', 'items', 'equipment', 'food', 'potions', 'tools']);
  assert.equal(harness.stateService.adjustWallet({ coins: 50, spirit: 7 }).ok, true);
  assert.equal(harness.stateService.adjustWallet({ coins: -60 }).code, 'INSUFFICIENT_WALLET');
  harness.inventoryService.add('tools', 'field_hammer', 2);
  harness.stateService.registerCharacters([
    { id: 'sera', name: 'Sera', level: 3, maxHp: 60, hp: 60 },
    { id: 'orin', name: 'Orin', level: 2, maxHp: 44, hp: 44 }
  ]);
  harness.stateService.setParty(['sera'], ['orin']);
  const state = harness.getState().realm;
  assert.deepEqual(state.wallet, { coins: 50, spirit: 7 });
  assert.equal(state.inventory.tools.field_hammer, 2);
  assert.deepEqual(state.party.active, ['sera']);
  assert.deepEqual(state.party.reserve, ['orin']);
});

test('cross-module consumable use and equipment transfer are atomic', () => {
  const harness = createHarness();
  harness.stateService.registerCharacters([{ id: 'sera', name: 'Sera', equipment: {} }]);
  const seeded = harness.inventoryService.read();
  seeded.realm.inventory.materials.healing_herb = 2;
  seeded.realm.inventory.materials.clear_water = 1;
  harness.inventoryService.commit(seeded, { type: 'seed' });
  assert.equal(harness.workshopService.craft('alchemy_healing_tonic', 1).ok, true);
  assert.equal(harness.stateService.useItem('healing_tonic', 'tactical-operations').ok, true);
  assert.equal(harness.getState().realm.workshop.activeEffects[0].moduleId, 'tactical-operations');

  harness.inventoryService.add('equipment', 'field_knife', 1, { name: 'Field Knife', slot: 'weapon' });
  const instanceId = Object.keys(harness.getState().realm.inventory.equipment)[0];
  assert.equal(harness.stateService.transferEquipment({ characterId: 'sera', instanceId, slot: 'weapon' }).ok, true);
  assert.equal(harness.getState().realm.party.characters.sera.equipment.weapon.id, instanceId);
  assert.equal(harness.getState().realm.inventory.equipment[instanceId], undefined);
  assert.equal(harness.stateService.transferEquipment({ characterId: 'sera', instanceId, slot: 'weapon', direction: 'unequip' }).ok, true);
  assert.equal(harness.getState().realm.inventory.equipment[instanceId].id, instanceId);
});

test('journal and backup recover incomplete or corrupted Realm saves', () => {
  const storage = createStorage();
  let now = 100;
  const adapter = new RealmSaveAdapter({ storage, now: () => now++ });
  const first = createDefaultRealmSave();
  first.realm.wallet.coins = 12;
  adapter.saveGuest(first);
  const second = createDefaultRealmSave();
  second.realm.wallet.coins = 25;
  adapter.saveGuest(second);
  storage.setItem(realmSaveKeys.realmV3, '{broken');
  const recovered = adapter.loadGuest();
  assert.equal(recovered.realm.wallet.coins, 12);
  assert.equal(adapter.lastRecovery.source, 'backup');
  assert.equal(adapter.lastRecovery.recovered, true);
  assert.equal(recovered.realm.recovery.count, 1);
});

test('asset preload reports progress and continues after optional failure', async () => {
  const progress = [];
  const loader = new RealmAssetLoader({
    fetchImpl: async (url) => ({ ok: !url.endsWith('missing.txt'), status: 404, text: async () => `asset:${url}` }),
    imageFactory: () => ({ set src(value) { queueMicrotask(() => this.onload?.(value)); } })
  });
  const report = await loader.preload([
    { type: 'text', path: '/systems/baseline-recreation/games/baseline-realm/shared/data/ok.txt' },
    { type: 'text', path: '/systems/baseline-recreation/games/baseline-realm/shared/data/missing.txt' },
    { type: 'image', path: '/systems/baseline-recreation/games/baseline-realm/game-art/test.svg' }
  ], { onProgress: (detail) => progress.push(detail), continueOnError: true });
  assert.equal(report.loaded, 2);
  assert.equal(report.failed, 1);
  assert.equal(progress.at(-1).progress, 1);
});

test('keyboard-equivalent controller actions emit once on press edges', () => {
  let buttons = [{ pressed: true, value: 1 }, ...Array.from({ length: 9 }, () => ({ pressed: false, value: 0 }))];
  const navigatorImpl = { getGamepads: () => [{ index: 0, buttons, axes: [0, 0] }] };
  const provider = new RealmGamepadProvider({ navigatorImpl, requestFrame: () => 1, cancelFrame: () => {} });
  const actions = [];
  const unsubscribe = provider.subscribe((action) => actions.push(action));
  provider.poll();
  buttons = buttons.map(() => ({ pressed: false, value: 0 }));
  provider.poll();
  assert.deepEqual(actions, ['realm-primary']);
  unsubscribe();
});

test('audio, reduced motion and performance budgets expose deterministic shared controls', () => {
  let audioSettings = { audio: { master: 1, music: 0.8, effects: 1, muted: false } };
  const media = { dataset: {}, muted: false, volume: 0 };
  const root = { documentElement: { setAttribute() {} }, querySelectorAll: () => [media] };
  const audio = new RealmAudioService({ root, getSettings: () => audioSettings, setSettings: (next) => { audioSettings.audio = next; } });
  audio.scan();
  audio.setMaster(0.5);
  audio.setMuted(true);
  assert.equal(media.volume, 0.5);
  assert.equal(media.muted, true);

  const attributes = {};
  let preference = { accessibility: { reducedMotion: 'system' } };
  const accessibility = new RealmAccessibilityService({
    root: { documentElement: { setAttribute: (key, value) => { attributes[key] = value; } } },
    getSettings: () => preference,
    setSettings: (value) => { preference.accessibility.reducedMotion = value; },
    matchMediaImpl: () => ({ matches: true, addEventListener() {}, addListener() {} })
  });
  assert.equal(accessibility.start(), true);
  assert.equal(attributes['data-realm-reduced-motion'], 'true');

  let tick = 0;
  const performanceImpl = { now: () => tick, getEntriesByType: () => [{ transferSize: 1000 }] };
  const monitor = new RealmPerformanceMonitor({ performanceImpl, root: { innerWidth: 1280, matchMedia: () => ({ matches: false }) } });
  tick = 50;
  assert.equal(monitor.measureInteraction('test', 0).passed, true);
  assert.equal(monitor.report().passed, true);
});


test('legacy Ninja profile is normalised before the combat runtime is created', () => {
  const normaliseIndex = realmEntrySource.indexOf("syncProfileRealm(activeProfile(), { mirrorGuest:false })");
  const runtimeIndex = realmEntrySource.indexOf('runtime = createNinjaTrainingRuntime({');
  assert.ok(normaliseIndex >= 0, 'Realm entry must normalise the Recreation Ninja profile');
  assert.ok(runtimeIndex > normaliseIndex, 'profile normalisation must happen before Ninja runtime creation');
});

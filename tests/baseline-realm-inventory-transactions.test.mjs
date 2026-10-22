import assert from 'node:assert/strict';
import test from 'node:test';

import { createDefaultRealmSave } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-model.js';
import { RealmInventoryService } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-inventory-service.js';
import { REALM_MATERIAL_BY_ID } from '../systems/baseline-recreation/games/baseline-realm/shared/data/realm-materials.js';
import { MATERIALS as EXPLORATION_MATERIALS } from '../systems/baseline-recreation/games/baseline-realm/exploration/data/meridian-grove.js';
import {
  WORKSHOP_CATEGORIES,
  WORKSHOP_RECIPES
} from '../systems/baseline-recreation/games/baseline-realm/workshop/data/workshop-catalog.js';
import { RealmWorkshopService } from '../systems/baseline-recreation/games/baseline-realm/workshop/js/workshop-service.js';

function createHarness({ equipmentId = (id, index) => `${id}#test-${index}`, now = () => 1000 } = {}) {
  let state = createDefaultRealmSave();
  let commits = 0;
  const inventoryService = new RealmInventoryService({
    getSave: () => state,
    setSave: (save) => {
      commits += 1;
      state = save;
    },
    instanceIdFactory: equipmentId,
    now
  });
  const workshopService = new RealmWorkshopService({ inventoryService, now });
  return {
    inventoryService,
    workshopService,
    getState: () => state,
    getCommits: () => commits
  };
}

function seedMaterials(harness, values) {
  const save = harness.inventoryService.read();
  Object.assign(save.realm.inventory.materials, values);
  harness.inventoryService.commit(save, { type: 'test-seed' });
}

test('crafting a quantity consumes exact multiples and produces unique equipment instances in one commit', () => {
  const harness = createHarness();
  seedMaterials(harness, { iron_ore: 10, hard_wood: 5, leather_strip: 5 });
  const commitsBeforeCraft = harness.getCommits();

  const result = harness.workshopService.craft('blacksmith_field_knife', 2);

  assert.equal(result.ok, true);
  assert.equal(result.outputQuantity, 2);
  assert.equal(harness.getCommits(), commitsBeforeCraft + 1, 'craft is committed once');
  const inventory = harness.getState().realm.inventory;
  assert.equal(inventory.materials.iron_ore, 6);
  assert.equal(inventory.materials.hard_wood, 3);
  assert.equal(inventory.materials.leather_strip, 3);
  assert.deepEqual(Object.keys(inventory.equipment).sort(), ['field_knife#test-1', 'field_knife#test-2']);
  assert.equal(inventory.equipment['field_knife#test-1'].itemId, 'field_knife');
  assert.equal(harness.getState().realm.workshop.crafted.blacksmith_field_knife, 2);
});

test('insufficient crafting materials do not remove, add, or commit anything', () => {
  const harness = createHarness();
  seedMaterials(harness, { iron_ore: 1, hard_wood: 1, leather_strip: 1 });
  const before = JSON.stringify(harness.getState());
  const commitsBeforeCraft = harness.getCommits();

  const result = harness.workshopService.craft('blacksmith_field_knife', 1);

  assert.equal(result.ok, false);
  assert.equal(result.code, 'INSUFFICIENT_INVENTORY');
  assert.equal(JSON.stringify(harness.getState()), before);
  assert.equal(harness.getCommits(), commitsBeforeCraft);
});

test('a failed transaction mutator cannot destroy consumed materials', () => {
  const harness = createHarness();
  seedMaterials(harness, { iron_ore: 4 });
  const before = JSON.stringify(harness.getState());
  const commitsBefore = harness.getCommits();

  assert.throws(() => harness.inventoryService.transact({
    consume: [{ bucket: 'materials', id: 'iron_ore', amount: 3 }],
    produce: [{ bucket: 'items', id: 'repair_kit', amount: 1 }],
    mutate: () => { throw new Error('stop transaction'); }
  }), /stop transaction/);

  assert.equal(JSON.stringify(harness.getState()), before);
  assert.equal(harness.getCommits(), commitsBefore);
});

test('using a crafted consumable removes exactly one and records its connected-module effect atomically', () => {
  const harness = createHarness({ now: () => 5000 });
  seedMaterials(harness, { healing_herb: 4, clear_water: 2 });
  const crafted = harness.workshopService.craft('alchemy_healing_tonic', 2);
  assert.equal(crafted.ok, true);
  assert.equal(harness.getState().realm.inventory.potions.healing_tonic, 2);
  const commitsBeforeUse = harness.getCommits();

  const used = harness.workshopService.useItem('healing_tonic', 'exploration');

  assert.equal(used.ok, true);
  assert.equal(harness.getCommits(), commitsBeforeUse + 1);
  assert.equal(harness.getState().realm.inventory.potions.healing_tonic, 1);
  const effects = harness.getState().realm.workshop.activeEffects;
  assert.equal(effects.length, 1);
  assert.equal(effects[0].itemId, 'healing_tonic');
  assert.equal(effects[0].moduleId, 'exploration');
  assert.equal(effects[0].effects.healing, 20);
});

test('duplicate equipment instance identifiers abort the transaction without duplication or loss', () => {
  const harness = createHarness({ equipmentId: () => 'field_knife#same' });
  seedMaterials(harness, { iron_ore: 10, hard_wood: 5, leather_strip: 5 });
  const before = JSON.stringify(harness.getState());
  const commitsBefore = harness.getCommits();

  assert.throws(() => harness.workshopService.craft('blacksmith_field_knife', 2), /Duplicate Realm equipment instance id/);

  assert.equal(JSON.stringify(harness.getState()), before);
  assert.equal(harness.getCommits(), commitsBefore);
});

test('Workshop recipes and live Exploration rewards reference the shared material catalog', () => {
  const recipeMaterialIds = WORKSHOP_RECIPES.flatMap((recipe) => recipe.ingredients.map((ingredient) => ingredient.id));
  const explorationMaterialIds = Object.values(EXPLORATION_MATERIALS).map((material) => material.sharedId).filter(Boolean);
  [...recipeMaterialIds, ...explorationMaterialIds].forEach((materialId) => {
    assert.ok(REALM_MATERIAL_BY_ID[materialId], `unknown shared material id: ${materialId}`);
  });
  assert.ok(explorationMaterialIds.length > 0);
});

test('Workshop exposes all required recipe stations', () => {
  assert.deepEqual(
    WORKSHOP_CATEGORIES.map((category) => category.id),
    ['blacksmith', 'armourer', 'tailoring', 'alchemy', 'cooking', 'tools']
  );
  WORKSHOP_CATEGORIES.forEach((category) => {
    assert.ok(WORKSHOP_RECIPES.some((recipe) => recipe.category === category.id), `${category.id} has recipes`);
  });
});

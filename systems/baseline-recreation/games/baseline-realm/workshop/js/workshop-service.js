import {
  STARTER_RECIPE_IDS,
  WORKSHOP_ITEM_BY_ID,
  WORKSHOP_RECIPE_BY_ID,
  WORKSHOP_RECIPES
} from '../data/workshop-catalog.js';

function cleanQuantity(value) {
  const quantity = Math.round(Number(value));
  return Number.isFinite(quantity) ? Math.max(1, Math.min(99, quantity)) : 1;
}

function ensureWorkshopState(save) {
  const workshop = save.realm.workshop || (save.realm.workshop = {});
  const discovered = new Set(Array.isArray(workshop.discovered) ? workshop.discovered : []);
  STARTER_RECIPE_IDS.forEach((id) => discovered.add(id));
  workshop.discovered = [...discovered].filter((id) => WORKSHOP_RECIPE_BY_ID[id]);
  workshop.crafted = workshop.crafted && typeof workshop.crafted === 'object' ? workshop.crafted : {};
  workshop.activeEffects = Array.isArray(workshop.activeEffects) ? workshop.activeEffects : [];
  return workshop;
}

function itemUsableBy(item, moduleId) {
  const targets = Array.isArray(item?.usableBy) ? item.usableBy : [];
  return targets.includes(moduleId) || targets.includes('realm');
}

function addEffects(target, effects = {}) {
  Object.entries(effects).forEach(([key, value]) => {
    const number = Number(value);
    if (Number.isFinite(number)) target[key] = Number(target[key] || 0) + number;
  });
  return target;
}

export class RealmWorkshopService {
  constructor({ inventoryService, eventBus, now = () => Date.now() } = {}) {
    if (!inventoryService) throw new TypeError('RealmWorkshopService requires a shared inventory service.');
    this.inventoryService = inventoryService;
    this.eventBus = eventBus;
    this.now = now;
  }

  read() {
    const save = this.inventoryService.read();
    ensureWorkshopState(save);
    return save;
  }

  recipe(id) {
    return WORKSHOP_RECIPE_BY_ID[String(id || '')] || null;
  }

  isDiscovered(recipeOrId, save = this.read()) {
    const recipe = typeof recipeOrId === 'string' ? this.recipe(recipeOrId) : recipeOrId;
    if (!recipe) return false;
    const workshop = ensureWorkshopState(save);
    return workshop.discovered.includes(recipe.id);
  }

  stationLevel(recipe, save = this.read()) {
    if (!recipe) return 0;
    return Math.max(1, Number(save.realm.workshop?.[recipe.stationLevelKey] || 1));
  }

  canDiscover(recipeOrId, save = this.read()) {
    const recipe = typeof recipeOrId === 'string' ? this.recipe(recipeOrId) : recipeOrId;
    if (!recipe || this.isDiscovered(recipe, save)) return false;
    return this.stationLevel(recipe, save) >= recipe.discoverAt;
  }

  discoverRecipe(id) {
    const recipe = this.recipe(id);
    if (!recipe) return { ok: false, code: 'UNKNOWN_RECIPE' };
    const save = this.read();
    if (this.isDiscovered(recipe, save)) return { ok: true, alreadyDiscovered: true, save };
    if (!this.canDiscover(recipe, save)) {
      return {
        ok: false,
        code: 'STATION_LEVEL_REQUIRED',
        required: recipe.discoverAt,
        current: this.stationLevel(recipe, save)
      };
    }
    const workshop = ensureWorkshopState(save);
    workshop.discovered.push(recipe.id);
    const committed = this.inventoryService.commit(save, { type: 'workshop-discovery', recipeId: recipe.id });
    this.eventBus?.emit('realm:workshop:recipe-discovered', { recipeId: recipe.id });
    return { ok: true, save: committed, recipe };
  }

  requirements(recipeOrId, quantity = 1, save = this.read()) {
    const recipe = typeof recipeOrId === 'string' ? this.recipe(recipeOrId) : recipeOrId;
    if (!recipe) return [];
    const amount = cleanQuantity(quantity);
    return recipe.ingredients.map((ingredient) => {
      const required = ingredient.quantity * amount;
      const available = Math.max(0, Number(save.realm.inventory.materials[ingredient.id] || 0));
      return { ...ingredient, required, available, met: available >= required };
    });
  }

  canCraft(recipeOrId, quantity = 1, save = this.read()) {
    const recipe = typeof recipeOrId === 'string' ? this.recipe(recipeOrId) : recipeOrId;
    if (!recipe) return false;
    if (!this.isDiscovered(recipe, save)) return false;
    if (this.stationLevel(recipe, save) < recipe.discoverAt) return false;
    return this.requirements(recipe, quantity, save).every((entry) => entry.met);
  }

  craft(recipeId, quantity = 1) {
    const recipe = this.recipe(recipeId);
    const amount = cleanQuantity(quantity);
    if (!recipe) return { ok: false, code: 'UNKNOWN_RECIPE' };
    const save = this.read();
    if (!this.isDiscovered(recipe, save)) return { ok: false, code: 'RECIPE_NOT_DISCOVERED' };
    if (this.stationLevel(recipe, save) < recipe.discoverAt) {
      return { ok: false, code: 'STATION_LEVEL_REQUIRED', required: recipe.discoverAt };
    }

    const item = WORKSHOP_ITEM_BY_ID[recipe.output.itemId];
    if (!item) return { ok: false, code: 'UNKNOWN_OUTPUT' };

    const consume = recipe.ingredients.map((ingredient) => ({
      bucket: 'materials',
      id: ingredient.id,
      amount: ingredient.quantity * amount
    }));
    const outputQuantity = recipe.output.quantity * amount;
    const produce = [{
      bucket: recipe.output.bucket,
      id: recipe.output.itemId,
      amount: outputQuantity,
      record: recipe.output.bucket === 'equipment' ? {
        name: item.name,
        slot: item.slot,
        effects: { ...item.effects },
        usableBy: [...item.usableBy],
        craftedAt: this.now()
      } : null
    }];

    const result = this.inventoryService.transact({
      consume,
      produce,
      mutate: (draft) => {
        const workshop = ensureWorkshopState(draft);
        workshop.crafted[recipe.id] = Math.max(0, Number(workshop.crafted[recipe.id] || 0)) + amount;
      }
    }, {
      type: 'workshop-craft',
      recipeId: recipe.id,
      quantity: amount,
      outputId: recipe.output.itemId,
      outputQuantity
    });

    if (!result.ok) return result;
    this.eventBus?.emit('realm:item:crafted', {
      recipeId: recipe.id,
      quantity: amount,
      outputId: recipe.output.itemId,
      outputQuantity,
      usableBy: item.usableBy
    });
    return { ...result, recipe, item, quantity: amount, outputQuantity };
  }

  useItem(itemId, moduleId = 'realm') {
    const item = WORKSHOP_ITEM_BY_ID[String(itemId || '')];
    if (!item) return { ok: false, code: 'UNKNOWN_ITEM' };
    if (!item.consumable) return { ok: false, code: 'ITEM_NOT_CONSUMABLE' };
    if (!itemUsableBy(item, moduleId)) return { ok: false, code: 'ITEM_NOT_USABLE_BY_MODULE', moduleId };

    const usedAt = this.now();
    const result = this.inventoryService.transact({
      consume: [{ bucket: item.bucket, id: item.id, amount: 1 }],
      mutate: (draft) => {
        const workshop = ensureWorkshopState(draft);
        const effect = {
          id: `${item.id}:${usedAt}`,
          itemId: item.id,
          moduleId,
          effects: { ...item.effects },
          usedAt,
          expiresAt: item.durationMs ? usedAt + item.durationMs : usedAt
        };
        workshop.activeEffects.push(effect);
      }
    }, { type: 'workshop-use-item', itemId: item.id, moduleId });

    if (!result.ok) return result;
    this.eventBus?.emit('realm:item:used', { itemId: item.id, moduleId, effects: item.effects });
    return { ...result, item, effects: { ...item.effects } };
  }

  resolveEffects(moduleId = 'realm', save = this.read()) {
    const now = this.now();
    const effects = {};
    const equipment = save.realm.inventory.equipment || {};
    Object.values(equipment).forEach((record) => {
      const item = WORKSHOP_ITEM_BY_ID[record?.itemId || record?.definitionId];
      if (itemUsableBy(item, moduleId)) addEffects(effects, item.effects);
    });
    const workshop = ensureWorkshopState(save);
    workshop.activeEffects
      .filter((effect) => effect && effect.moduleId === moduleId && Number(effect.expiresAt || 0) >= now)
      .forEach((effect) => addEffects(effects, effect.effects));
    return effects;
  }

  craftedInventory(save = this.read()) {
    const inventory = save.realm.inventory;
    return Object.values(WORKSHOP_ITEM_BY_ID).map((item) => ({
      ...item,
      quantity: item.bucket === 'equipment'
        ? Object.values(inventory.equipment || {}).filter((record) => (record?.itemId || record?.definitionId) === item.id).length
        : Math.max(0, Number(inventory[item.bucket]?.[item.id] || 0))
    })).filter((item) => item.quantity > 0);
  }

  recipesByCategory(category) {
    return WORKSHOP_RECIPES.filter((recipe) => recipe.category === category);
  }
}

export const workshopServiceInternals = Object.freeze({ cleanQuantity, ensureWorkshopState, addEffects, itemUsableBy });

import { REALM_MATERIALS, REALM_MATERIAL_BY_ID, REALM_MATERIAL_IDS as M } from '../../shared/data/realm-materials.js';

export const WORKSHOP_CATEGORIES = Object.freeze([
  { id: 'blacksmith', name: 'Blacksmith', description: 'Weapons and forged field arms.' },
  { id: 'armourer', name: 'Armourer', description: 'Protective armour and guards.' },
  { id: 'tailoring', name: 'Tailoring', description: 'Cloth, light equipment, and travel gear.' },
  { id: 'alchemy', name: 'Alchemy', description: 'Potions, powders, and status items.' },
  { id: 'cooking', name: 'Cooking', description: 'Food with temporary Realm effects.' },
  { id: 'tools', name: 'Tools', description: 'Utility tools for maps, repairs, and gathering.' }
]);

export const WORKSHOP_ITEMS = Object.freeze([
  { id: 'field_knife', name: 'Field Knife', bucket: 'equipment', slot: 'weapon', usableBy: ['ninja-training', 'exploration', 'tactical-operations'], effects: { attack: 2 }, description: 'A dependable short blade for route work.' },
  { id: 'scout_blade', name: 'Scout Blade', bucket: 'equipment', slot: 'weapon', usableBy: ['ninja-training', 'exploration', 'tactical-operations'], effects: { attack: 5, encounterSpeed: 0.03 }, description: 'A balanced weapon for quick encounters.' },
  { id: 'moonsteel_sabre', name: 'Moonsteel Sabre', bucket: 'equipment', slot: 'weapon', usableBy: ['ninja-training', 'exploration', 'tactical-operations'], effects: { attack: 11, bossDamage: 0.08 }, description: 'A rare sabre that bites into boss armour.' },
  { id: 'hide_vest', name: 'Hide Vest', bucket: 'equipment', slot: 'armour', usableBy: ['exploration', 'calorie-escape', 'tactical-operations'], effects: { defence: 3 }, description: 'Light protection that does not hinder movement.' },
  { id: 'iron_guard', name: 'Iron Guard', bucket: 'equipment', slot: 'armour', usableBy: ['exploration', 'tactical-operations'], effects: { defence: 7, staggerResist: 0.05 }, description: 'Layered iron protection for dangerous routes.' },
  { id: 'wardplate', name: 'Wardplate', bucket: 'equipment', slot: 'armour', usableBy: ['exploration', 'tactical-operations'], effects: { defence: 13, statusResist: 0.1 }, description: 'Relic-bound plate built for elite operations.' },
  { id: 'travel_wraps', name: 'Travel Wraps', bucket: 'equipment', slot: 'light', usableBy: ['exploration', 'calorie-escape'], effects: { movement: 0.04 }, description: 'Breathable wraps for long movement sessions.' },
  { id: 'shadow_cloak', name: 'Shadow Cloak', bucket: 'equipment', slot: 'light', usableBy: ['exploration', 'tactical-operations'], effects: { evade: 0.06, encounterSpeed: 0.04 }, description: 'Quiet cloth that helps the party control engagement distance.' },
  { id: 'scout_pack', name: 'Scout Pack', bucket: 'equipment', slot: 'utility', usableBy: ['exploration', 'basecamp'], effects: { lootCapacity: 2 }, description: 'A fitted pack that carries additional route materials.' },
  { id: 'healing_tonic', name: 'Healing Tonic', bucket: 'potions', consumable: true, usableBy: ['ninja-training', 'exploration', 'tactical-operations'], effects: { healing: 20 }, durationMs: 0, description: 'Restores health or recovery capacity in connected modules.' },
  { id: 'focus_draught', name: 'Focus Draught', bucket: 'potions', consumable: true, usableBy: ['ninja-training', 'tactical-operations'], effects: { attack: 4, focus: 0.08 }, durationMs: 600000, description: 'Temporarily sharpens attack and focus.' },
  { id: 'smoke_powder', name: 'Smoke Powder', bucket: 'items', consumable: true, usableBy: ['exploration', 'tactical-operations'], effects: { escapeChance: 0.25, evade: 0.08 }, durationMs: 300000, description: 'A status utility that improves escape and evasion.' },
  { id: 'trail_stew', name: 'Trail Stew', bucket: 'food', consumable: true, usableBy: ['exploration', 'calorie-escape'], effects: { stamina: 8 }, durationMs: 900000, description: 'A filling meal that supports sustained travel.' },
  { id: 'ember_bread', name: 'Ember Bread', bucket: 'food', consumable: true, usableBy: ['ninja-training', 'exploration'], effects: { attack: 2, stamina: 4 }, durationMs: 600000, description: 'Warm bread with a short attack and stamina effect.' },
  { id: 'victory_feast', name: 'Victory Feast', bucket: 'food', consumable: true, usableBy: ['ninja-training', 'exploration', 'tactical-operations', 'party-preparation'], effects: { attack: 5, defence: 5, stamina: 10 }, durationMs: 1200000, description: 'A party meal prepared for a difficult operation.' },
  { id: 'field_pick', name: 'Field Pick', bucket: 'tools', usableBy: ['exploration', 'basecamp'], effects: { oreYield: 1 }, description: 'A durable pick that improves ore gathering.' },
  { id: 'repair_kit', name: 'Repair Kit', bucket: 'tools', consumable: true, usableBy: ['exploration', 'tactical-operations'], effects: { repair: 1 }, durationMs: 0, description: 'Repairs damaged field equipment.' },
  { id: 'mapmakers_compass', name: "Mapmaker's Compass", bucket: 'tools', usableBy: ['exploration', 'party-preparation'], effects: { mapInsight: 0.1 }, description: 'A precise compass that improves map discovery.' }
]);

export const WORKSHOP_ITEM_BY_ID = Object.freeze(Object.fromEntries(
  WORKSHOP_ITEMS.map((item) => [item.id, item])
));

const recipe = (id, category, name, stationLevelKey, discoverAt, ingredients, output, description) => Object.freeze({
  id,
  category,
  name,
  stationLevelKey,
  discoverAt,
  ingredients: Object.freeze(ingredients.map((entry) => Object.freeze(entry))),
  output: Object.freeze(output),
  description
});

export const WORKSHOP_RECIPES = Object.freeze([
  recipe('blacksmith_field_knife', 'blacksmith', 'Field Knife', 'crafting', 1, [{ id: M.IRON_ORE, quantity: 2 }, { id: M.HARD_WOOD, quantity: 1 }, { id: M.LEATHER_STRIP, quantity: 1 }], { bucket: 'equipment', itemId: 'field_knife', quantity: 1 }, 'A practical starter weapon.'),
  recipe('blacksmith_scout_blade', 'blacksmith', 'Scout Blade', 'crafting', 2, [{ id: M.IRON_ORE, quantity: 5 }, { id: M.HARD_WOOD, quantity: 2 }, { id: M.LEATHER_STRIP, quantity: 2 }], { bucket: 'equipment', itemId: 'scout_blade', quantity: 1 }, 'A balanced weapon for connected combat modules.'),
  recipe('blacksmith_moonsteel_sabre', 'blacksmith', 'Moonsteel Sabre', 'crafting', 4, [{ id: M.MOONSTEEL_SHARD, quantity: 4 }, { id: M.IRON_ORE, quantity: 6 }, { id: M.RELIC_DUST, quantity: 2 }], { bucket: 'equipment', itemId: 'moonsteel_sabre', quantity: 1 }, 'A boss-focused advanced weapon.'),
  recipe('armourer_hide_vest', 'armourer', 'Hide Vest', 'crafting', 1, [{ id: M.HIDE, quantity: 3 }, { id: M.LEATHER_STRIP, quantity: 2 }, { id: M.LINEN, quantity: 1 }], { bucket: 'equipment', itemId: 'hide_vest', quantity: 1 }, 'Light armour for travel and escape modules.'),
  recipe('armourer_iron_guard', 'armourer', 'Iron Guard', 'crafting', 2, [{ id: M.IRON_ORE, quantity: 7 }, { id: M.HIDE, quantity: 2 }, { id: M.LEATHER_STRIP, quantity: 3 }], { bucket: 'equipment', itemId: 'iron_guard', quantity: 1 }, 'Reliable protection for difficult encounters.'),
  recipe('armourer_wardplate', 'armourer', 'Wardplate', 'crafting', 4, [{ id: M.MOONSTEEL_SHARD, quantity: 3 }, { id: M.IRON_ORE, quantity: 9 }, { id: M.RELIC_DUST, quantity: 4 }], { bucket: 'equipment', itemId: 'wardplate', quantity: 1 }, 'Heavy armour with status resistance.'),
  recipe('tailoring_travel_wraps', 'tailoring', 'Travel Wraps', 'tailoring', 1, [{ id: M.LINEN, quantity: 3 }, { id: M.LEATHER_STRIP, quantity: 1 }], { bucket: 'equipment', itemId: 'travel_wraps', quantity: 1 }, 'Light equipment for sustained movement.'),
  recipe('tailoring_shadow_cloak', 'tailoring', 'Shadow Cloak', 'tailoring', 3, [{ id: M.SILK_THREAD, quantity: 5 }, { id: M.LINEN, quantity: 4 }, { id: M.RELIC_DUST, quantity: 1 }], { bucket: 'equipment', itemId: 'shadow_cloak', quantity: 1 }, 'Advanced cloth equipment for evasion.'),
  recipe('tailoring_scout_pack', 'tailoring', 'Scout Pack', 'tailoring', 2, [{ id: M.LINEN, quantity: 4 }, { id: M.HIDE, quantity: 2 }, { id: M.LEATHER_STRIP, quantity: 3 }], { bucket: 'equipment', itemId: 'scout_pack', quantity: 1 }, 'A utility pack that expands material capacity.'),
  recipe('alchemy_healing_tonic', 'alchemy', 'Healing Tonic', 'alchemy', 1, [{ id: M.HEALING_HERB, quantity: 2 }, { id: M.CLEAR_WATER, quantity: 1 }], { bucket: 'potions', itemId: 'healing_tonic', quantity: 1 }, 'A basic restorative potion.'),
  recipe('alchemy_focus_draught', 'alchemy', 'Focus Draught', 'alchemy', 2, [{ id: M.EMBER_ROOT, quantity: 2 }, { id: M.CLEAR_WATER, quantity: 1 }, { id: M.RELIC_DUST, quantity: 1 }], { bucket: 'potions', itemId: 'focus_draught', quantity: 1 }, 'A temporary combat focus effect.'),
  recipe('alchemy_smoke_powder', 'alchemy', 'Smoke Powder', 'alchemy', 2, [{ id: M.CHARCOAL, quantity: 3 }, { id: M.EMBER_ROOT, quantity: 1 }, { id: M.RELIC_DUST, quantity: 1 }], { bucket: 'items', itemId: 'smoke_powder', quantity: 2 }, 'A tactical status item for escape and evasion.'),
  recipe('cooking_trail_stew', 'cooking', 'Trail Stew', 'cooking', 1, [{ id: M.WILD_MEAT, quantity: 2 }, { id: M.EMBER_ROOT, quantity: 1 }, { id: M.CLEAR_WATER, quantity: 1 }], { bucket: 'food', itemId: 'trail_stew', quantity: 1 }, 'A substantial route meal.'),
  recipe('cooking_ember_bread', 'cooking', 'Ember Bread', 'cooking', 2, [{ id: M.GRAIN, quantity: 3 }, { id: M.EMBER_ROOT, quantity: 1 }, { id: M.CHARCOAL, quantity: 1 }], { bucket: 'food', itemId: 'ember_bread', quantity: 2 }, 'A compact food with temporary effects.'),
  recipe('cooking_victory_feast', 'cooking', 'Victory Feast', 'cooking', 4, [{ id: M.WILD_MEAT, quantity: 5 }, { id: M.GRAIN, quantity: 4 }, { id: M.EMBER_ROOT, quantity: 2 }, { id: M.HEALING_HERB, quantity: 2 }], { bucket: 'food', itemId: 'victory_feast', quantity: 1 }, 'A strong party preparation meal.'),
  recipe('tools_field_pick', 'tools', 'Field Pick', 'crafting', 1, [{ id: M.IRON_ORE, quantity: 3 }, { id: M.HARD_WOOD, quantity: 2 }], { bucket: 'tools', itemId: 'field_pick', quantity: 1 }, 'A reusable gathering tool.'),
  recipe('tools_repair_kit', 'tools', 'Repair Kit', 'crafting', 2, [{ id: M.IRON_ORE, quantity: 2 }, { id: M.LEATHER_STRIP, quantity: 2 }, { id: M.LINEN, quantity: 2 }], { bucket: 'tools', itemId: 'repair_kit', quantity: 1 }, 'A consumable field utility item.'),
  recipe('tools_mapmakers_compass', 'tools', "Mapmaker's Compass", 'crafting', 3, [{ id: M.IRON_ORE, quantity: 4 }, { id: M.MAP_FRAGMENT, quantity: 3 }, { id: M.RELIC_DUST, quantity: 1 }], { bucket: 'tools', itemId: 'mapmakers_compass', quantity: 1 }, 'A reusable exploration and party preparation tool.')
]);

export const WORKSHOP_RECIPE_BY_ID = Object.freeze(Object.fromEntries(
  WORKSHOP_RECIPES.map((entry) => [entry.id, entry])
));

export const STARTER_RECIPE_IDS = Object.freeze(
  WORKSHOP_RECIPES.filter((entry) => entry.discoverAt <= 1).map((entry) => entry.id)
);

export { REALM_MATERIALS, REALM_MATERIAL_BY_ID };

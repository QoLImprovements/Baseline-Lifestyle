import { REALM_MATERIAL_IDS as M } from './realm-materials.js';

export const REALM_ENEMY_DROPS = Object.freeze({
  'Forest Scout': Object.freeze([
    { materialId: M.IRON_ORE, min: 1, max: 2, chance: 0.55 },
    { materialId: M.LEATHER_STRIP, min: 1, max: 2, chance: 0.45 },
    { materialId: M.HEALING_HERB, min: 1, max: 1, chance: 0.25 }
  ]),
  'Rogue Swordsman': Object.freeze([
    { materialId: M.IRON_ORE, min: 1, max: 3, chance: 0.7 },
    { materialId: M.LINEN, min: 1, max: 2, chance: 0.35 }
  ]),
  'Bog Wisp': Object.freeze([
    { materialId: M.CLEAR_WATER, min: 1, max: 2, chance: 0.65 },
    { materialId: M.RELIC_DUST, min: 1, max: 1, chance: 0.18 }
  ]),
  'Masked Marauder': Object.freeze([
    { materialId: M.HIDE, min: 1, max: 2, chance: 0.55 },
    { materialId: M.CHARCOAL, min: 1, max: 2, chance: 0.45 }
  ]),
  'Ruins Stalker': Object.freeze([
    { materialId: M.MAP_FRAGMENT, min: 1, max: 1, chance: 0.5 },
    { materialId: M.SILK_THREAD, min: 1, max: 2, chance: 0.3 }
  ]),
  'Gate Warden': Object.freeze([
    { materialId: M.MOONSTEEL_SHARD, min: 1, max: 2, chance: 1 },
    { materialId: M.RELIC_DUST, min: 1, max: 2, chance: 1 }
  ]),
  'Beast King': Object.freeze([
    { materialId: M.HIDE, min: 3, max: 5, chance: 1 },
    { materialId: M.WILD_MEAT, min: 2, max: 4, chance: 1 }
  ]),
  'Ruin Colossus': Object.freeze([
    { materialId: M.IRON_ORE, min: 4, max: 7, chance: 1 },
    { materialId: M.MOONSTEEL_SHARD, min: 1, max: 3, chance: 0.8 }
  ]),
  'Forest Tyrant': Object.freeze([
    { materialId: M.HARD_WOOD, min: 4, max: 7, chance: 1 },
    { materialId: M.EMBER_ROOT, min: 2, max: 3, chance: 0.75 }
  ])
});

export const REALM_MAP_DROPS = Object.freeze({
  forest: Object.freeze([
    { materialId: M.HARD_WOOD, min: 1, max: 3, chance: 0.65 },
    { materialId: M.HEALING_HERB, min: 1, max: 2, chance: 0.6 },
    { materialId: M.WILD_MEAT, min: 1, max: 2, chance: 0.35 }
  ]),
  ruins: Object.freeze([
    { materialId: M.IRON_ORE, min: 1, max: 4, chance: 0.7 },
    { materialId: M.MAP_FRAGMENT, min: 1, max: 2, chance: 0.5 },
    { materialId: M.RELIC_DUST, min: 1, max: 1, chance: 0.25 }
  ]),
  marsh: Object.freeze([
    { materialId: M.CLEAR_WATER, min: 1, max: 3, chance: 0.75 },
    { materialId: M.EMBER_ROOT, min: 1, max: 2, chance: 0.55 },
    { materialId: M.LINEN, min: 1, max: 2, chance: 0.3 }
  ]),
  highlands: Object.freeze([
    { materialId: M.MOONSTEEL_SHARD, min: 1, max: 2, chance: 0.3 },
    { materialId: M.HIDE, min: 1, max: 3, chance: 0.55 },
    { materialId: M.SILK_THREAD, min: 1, max: 2, chance: 0.4 }
  ])
});

export function allRealmDropMaterialIds() {
  return [...Object.values(REALM_ENEMY_DROPS), ...Object.values(REALM_MAP_DROPS)]
    .flat()
    .map((drop) => drop.materialId);
}

export const REALM_MATERIALS = Object.freeze([
  { id: 'iron_ore', name: 'Iron Ore', description: 'Common forge metal from scouts, ruins, and rocky map nodes.' },
  { id: 'moonsteel_shard', name: 'Moonsteel Shard', description: 'Rare metal recovered from bosses and deep routes.' },
  { id: 'hard_wood', name: 'Hard Wood', description: 'Dense timber used for weapon grips, tools, and camp structures.' },
  { id: 'leather_strip', name: 'Leather Strip', description: 'Tough binding material from beasts and merchant packs.' },
  { id: 'hide', name: 'Cured Hide', description: 'Protective hide for armour and travel equipment.' },
  { id: 'linen', name: 'Linen', description: 'Light cloth for wraps, packs, and field clothing.' },
  { id: 'silk_thread', name: 'Silk Thread', description: 'Fine thread used in advanced tailoring.' },
  { id: 'healing_herb', name: 'Healing Herb', description: 'A restorative herb found on forest and camp nodes.' },
  { id: 'ember_root', name: 'Ember Root', description: 'A warming root used in alchemy and cooking.' },
  { id: 'clear_water', name: 'Clear Water', description: 'Clean water collected from safe map springs.' },
  { id: 'grain', name: 'Grain', description: 'A staple ingredient supplied by merchants and settlement stores.' },
  { id: 'wild_meat', name: 'Wild Meat', description: 'Fresh route provision used for substantial meals.' },
  { id: 'charcoal', name: 'Charcoal', description: 'Fuel and reactive powder produced at Basecamp.' },
  { id: 'map_fragment', name: 'Map Fragment', description: 'Survey material recovered from chests and route leaders.' },
  { id: 'relic_dust', name: 'Relic Dust', description: 'Arcane residue from bosses and ancient map sites.' }
]);

export const REALM_MATERIAL_BY_ID = Object.freeze(Object.fromEntries(
  REALM_MATERIALS.map((material) => [material.id, material])
));

export const REALM_MATERIAL_IDS = Object.freeze(Object.fromEntries(
  REALM_MATERIALS.map((material) => [material.id.toUpperCase(), material.id])
));

export function isRealmMaterialId(id) {
  return Object.prototype.hasOwnProperty.call(REALM_MATERIAL_BY_ID, String(id || ''));
}

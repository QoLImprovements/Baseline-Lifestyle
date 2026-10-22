export const SAVE_KEY = 'baseline.realm.exploration.jrpg.v1';
export const SAVE_VERSION = 1;
export const ZONE_ID = 'meridian-grove';

export const STORY = Object.freeze({
  title: 'The Meridian Grove',
  opening: 'Rowan Vale arrives alone at the Meridian Gate, carrying the worn waystone token that first drew him beyond Basecamp. Three markers on the old sun-road have gone silent. This first expedition is deliberately small: wake the nearest stone, learn the grove’s signs, and return safely with whatever the road reveals.',
  midpoint: 'The Rainroot Hollow is not diseased. Something beneath it is teaching the roots to remember fear.',
  finale: 'At the Crown of Echoes, the Hollow Hart wears the stolen Heartseed like a second heart. The company must break the binding without breaking the grove.',
  ending: 'The Heartseed answers Rowan’s waystone token and opens a living road back to Basecamp, carrying new materials, recipes, and the promise that future companions can follow.'
});

export const TILE_LEGEND = Object.freeze({
  '.': { id: 'path', name: 'Old road', passable: true, encounter: true },
  'g': { id: 'grass', name: 'Grove floor', passable: true, encounter: true },
  'b': { id: 'brush', name: 'Tall brush', passable: true, encounter: true, meter: 1.35 },
  '#': { id: 'stone', name: 'Standing stone', passable: false },
  '~': { id: 'water', name: 'Rainroot water', passable: false },
  '|': { id: 'bridge', name: 'Root bridge', passable: true, encounter: false },
  'C': { id: 'treasure', name: 'Treasure', passable: true, poi: 'treasure' },
  'R': { id: 'resource', name: 'Resource node', passable: true, poi: 'resource' },
  'E': { id: 'event', name: 'Story event', passable: true, poi: 'event' },
  'H': { id: 'rest', name: 'Rest point', passable: true, poi: 'rest' },
  'L': { id: 'elite', name: 'Elite', passable: true, poi: 'elite' },
  'X': { id: 'exit', name: 'Stage exit', passable: true, poi: 'exit' },
  'B': { id: 'boss', name: 'Boss', passable: true, poi: 'boss' }
});

export const ABILITIES = Object.freeze({
  'sundering-arc': { id: 'sundering-arc', name: 'Sundering Arc', kind: 'ability', cost: 8, power: 1.45, element: 'slash', target: 'enemy', status: { id: 'exposed', turns: 2, chance: 0.65 }, description: 'A committed blade arc that can expose armour.' },
  'hold-the-line': { id: 'hold-the-line', name: 'Hold the Line', kind: 'ability', cost: 10, power: 0, element: 'none', target: 'party', status: { id: 'guard', turns: 2, chance: 1 }, description: 'Brace the whole party against the next wave of damage.' },
  'ember-thread': { id: 'ember-thread', name: 'Ember Thread', kind: 'magic', cost: 9, power: 1.5, element: 'fire', target: 'enemy', status: { id: 'burn', turns: 3, chance: 0.55 }, description: 'A precise fire spell that may ignite the target.' },
  'frost-sigil': { id: 'frost-sigil', name: 'Frost Sigil', kind: 'magic', cost: 11, power: 1.35, element: 'ice', target: 'enemy', status: { id: 'slow', turns: 3, chance: 0.55 }, description: 'A cold seal that may slow the target’s ATB speed.' },
  'mend-light': { id: 'mend-light', name: 'Mend Light', kind: 'magic', cost: 10, power: 1.6, element: 'light', target: 'ally', healing: true, description: 'Restore one ally with gathered lantern-light.' },
  'verdant-guard': { id: 'verdant-guard', name: 'Verdant Guard', kind: 'ability', cost: 8, power: 0.9, element: 'earth', target: 'enemy', status: { id: 'guard', turns: 2, chance: 1, self: true }, description: 'Strike and root into a guarded stance.' },
  'bloom-salve': { id: 'bloom-salve', name: 'Bloom Salve', kind: 'magic', cost: 12, power: 1.25, element: 'nature', target: 'party', healing: true, description: 'Restore the active party with living sap.' },
  'pinion-shot': { id: 'pinion-shot', name: 'Pinion Shot', kind: 'ability', cost: 7, power: 1.4, element: 'pierce', target: 'enemy', status: { id: 'slow', turns: 2, chance: 0.45 }, description: 'A weighted arrow that can check an enemy’s momentum.' },
  'storm-vial': { id: 'storm-vial', name: 'Storm Vial', kind: 'magic', cost: 10, power: 1.55, element: 'lightning', target: 'enemy', status: { id: 'shocked', turns: 2, chance: 0.45 }, description: 'Break a charged vial over the target.' }
});

export const EQUIPMENT = Object.freeze({
  'vale-sabre': { id: 'vale-sabre', name: 'Vale Sabre', slot: 'weapon', attack: 5, magic: 0, defence: 0, speed: 1, description: 'A broad travelling sabre with a half-basket guard.' },
  'lantern-rod': { id: 'lantern-rod', name: 'Lantern Rod', slot: 'weapon', attack: 1, magic: 6, defence: 0, speed: 0, description: 'A brass focus rod built around a captive glowseed.' },
  'root-lance': { id: 'root-lance', name: 'Root Lance', slot: 'weapon', attack: 4, magic: 2, defence: 1, speed: -1, description: 'A living spear that tightens when danger nears.' },
  'rainsong-bow': { id: 'rainsong-bow', name: 'Rainsong Bow', slot: 'weapon', attack: 4, magic: 1, defence: 0, speed: 2, description: 'A recurved bow strung with braided rain-silk.' },
  'roadwarden-coat': { id: 'roadwarden-coat', name: 'Roadwarden Coat', slot: 'armour', attack: 0, magic: 0, defence: 5, speed: 0, description: 'Layered travel armour made for long routes.' },
  'emberweave-robe': { id: 'emberweave-robe', name: 'Emberweave Robe', slot: 'armour', attack: 0, magic: 3, defence: 2, speed: 1, description: 'A heat-proof robe stitched with copper filament.' },
  'mossplate-vest': { id: 'mossplate-vest', name: 'Mossplate Vest', slot: 'armour', attack: 0, magic: 0, defence: 6, speed: -1, description: 'Flexible plates cultivated over patient months.' },
  'weathercloak': { id: 'weathercloak', name: 'Weathercloak', slot: 'armour', attack: 0, magic: 1, defence: 3, speed: 2, description: 'A light cloak that sheds rain and clinging spores.' },
  'sunsteel-edge': { id: 'sunsteel-edge', name: 'Sunsteel Edge', slot: 'weapon', attack: 8, magic: 1, defence: 0, speed: 1, description: 'Blacksmithing reward forged from sunsteel filings.' },
  'rainroot-mantle': { id: 'rainroot-mantle', name: 'Rainroot Mantle', slot: 'armour', attack: 0, magic: 3, defence: 7, speed: 0, description: 'Tailored rain-silk lined with alchemical barkcloth.' },
  'hartglass-charm': { id: 'hartglass-charm', name: 'Hartglass Charm', slot: 'accessory', attack: 2, magic: 2, defence: 2, speed: 2, description: 'A trading relic cut from harmless shed antler-glass.' },
  'waystone-token': { id: 'waystone-token', name: 'Waystone Token', slot: 'accessory', attack: 0, magic: 1, defence: 1, speed: 1, description: 'A small route token that steadies the bearer.' }
});

export const PARTY_BLUEPRINTS = Object.freeze([
  { id: 'rowan', name: 'Rowan Vale', role: 'Vanguard', level: 1, xp: 0, maxHp: 132, maxMp: 32, attack: 17, magic: 7, defence: 15, speed: 10, abilities: ['sundering-arc', 'hold-the-line'], equipment: { weapon: 'vale-sabre', armour: 'roadwarden-coat', accessory: 'waystone-token' } },
  { id: 'sable', name: 'Sable Quill', role: 'Lantern Arcanist', level: 1, xp: 0, maxHp: 88, maxMp: 58, attack: 7, magic: 19, defence: 8, speed: 12, abilities: ['ember-thread', 'frost-sigil', 'mend-light'], equipment: { weapon: 'lantern-rod', armour: 'emberweave-robe', accessory: null } },
  { id: 'ilyra', name: 'Ilyra Fen', role: 'Grove Warden', level: 1, xp: 0, maxHp: 118, maxMp: 45, attack: 13, magic: 13, defence: 16, speed: 8, abilities: ['verdant-guard', 'bloom-salve'], equipment: { weapon: 'root-lance', armour: 'mossplate-vest', accessory: null } },
  { id: 'corin', name: 'Corin Ash', role: 'Rainscout', level: 1, xp: 0, maxHp: 96, maxMp: 40, attack: 15, magic: 10, defence: 9, speed: 17, abilities: ['pinion-shot', 'storm-vial'], equipment: { weapon: 'rainsong-bow', armour: 'weathercloak', accessory: null } }
]);

export const INITIAL_PARTY_IDS = Object.freeze(['rowan']);

export const ITEMS = Object.freeze({
  'field-tonic': { id: 'field-tonic', name: 'Field Tonic', kind: 'item', target: 'ally', effect: 'heal', amount: 70, description: 'Alchemy: restore 70 HP.' },
  'lantern-draught': { id: 'lantern-draught', name: 'Lantern Draught', kind: 'item', target: 'ally', effect: 'mp', amount: 28, description: 'Alchemy: restore 28 MP.' },
  'bitterleaf-wrap': { id: 'bitterleaf-wrap', name: 'Bitterleaf Wrap', kind: 'item', target: 'ally', effect: 'cleanse', amount: 0, description: 'Tailoring and alchemy: remove harmful status effects.' },
  'trail-ration': { id: 'trail-ration', name: 'Trail Ration', kind: 'item', target: 'party', effect: 'heal', amount: 35, description: 'Cooking: restore 35 HP to the active party.' }
});

export const MATERIALS = Object.freeze({
  'sunsteel-filings': { id: 'sunsteel-filings', name: 'Sunsteel Filings', discipline: 'blacksmithing', sharedId: 'iron_ore', description: 'Heat-holding metal dust used for weapon edges.' },
  'mossplate-chip': { id: 'mossplate-chip', name: 'Mossplate Chip', discipline: 'armour', sharedId: 'hide', description: 'A flexible mineral scale for protective layers.' },
  'rain-silk': { id: 'rain-silk', name: 'Rain-silk', discipline: 'tailoring', sharedId: 'silk_thread', description: 'Strong fibre gathered from glasswing nests.' },
  'glowseed': { id: 'glowseed', name: 'Glowseed', discipline: 'alchemy', sharedId: 'healing_herb', description: 'A stable luminous seed used in restorative mixtures.' },
  'peppercap': { id: 'peppercap', name: 'Peppercap', discipline: 'cooking', sharedId: 'ember_root', description: 'A warming mushroom that keeps well on the road.' },
  'waystone-shard': { id: 'waystone-shard', name: 'Waystone Shard', discipline: 'quests', sharedId: 'map_fragment', description: 'A marked shard sought by Basecamp routekeepers.' },
  'hartglass': { id: 'hartglass', name: 'Hartglass', discipline: 'trading', sharedId: 'relic_dust', description: 'Shed antler-glass valued by travelling merchants.' },
  'bark-resin': { id: 'bark-resin', name: 'Bark Resin', discipline: 'alchemy', sharedId: 'clear_water', description: 'A binding resin for tonics and field salves.' }
});

export const ENEMIES = Object.freeze({
  'galesprout': { id: 'galesprout', name: 'Galesprout', art: 'enemy-galesprout', maxHp: 58, attack: 9, magic: 7, defence: 6, speed: 11, xp: 20, coins: 12, weaknesses: ['fire'], resistances: ['nature'], attacks: [{ name: 'Seed Dart', power: 0.9, element: 'pierce' }, { name: 'Pollen Haze', power: 0.65, element: 'nature', status: { id: 'slow', turns: 2, chance: 0.25 } }], drops: [{ id: 'glowseed', chance: 0.7, min: 1, max: 2 }, { id: 'peppercap', chance: 0.3, min: 1, max: 1 }] },
  'glasswing': { id: 'glasswing', name: 'Glasswing Moth', art: 'enemy-glasswing', maxHp: 50, attack: 8, magic: 10, defence: 5, speed: 14, xp: 22, coins: 11, weaknesses: ['pierce'], resistances: ['light'], attacks: [{ name: 'Prism Dust', power: 0.9, element: 'light' }, { name: 'Wing Static', power: 0.7, element: 'lightning', status: { id: 'shocked', turns: 2, chance: 0.22 } }], drops: [{ id: 'rain-silk', chance: 0.75, min: 1, max: 2 }, { id: 'glowseed', chance: 0.25, min: 1, max: 1 }] },
  'mudglass-crab': { id: 'mudglass-crab', name: 'Mudglass Crab', art: 'enemy-mudglass', maxHp: 112, attack: 16, magic: 5, defence: 16, speed: 7, xp: 25, coins: 16, weaknesses: ['lightning'], resistances: ['slash', 'earth'], attacks: [{ name: 'Glass Claw', power: 1.15, element: 'slash' }, { name: 'Mire Brace', power: 0.7, element: 'earth', status: { id: 'guard', turns: 2, chance: 1, self: true } }], drops: [{ id: 'mossplate-chip', chance: 0.65, min: 1, max: 2 }, { id: 'bark-resin', chance: 0.4, min: 1, max: 1 }] },
  'root-prowler': { id: 'root-prowler', name: 'Root Prowler', art: 'enemy-root-prowler', maxHp: 94, attack: 18, magic: 7, defence: 10, speed: 15, xp: 27, coins: 18, weaknesses: ['ice'], resistances: ['nature'], attacks: [{ name: 'Briar Pounce', power: 1.2, element: 'pierce' }, { name: 'Sap Venom', power: 0.85, element: 'nature', status: { id: 'poison', turns: 3, chance: 0.4 } }], drops: [{ id: 'bark-resin', chance: 0.75, min: 1, max: 2 }, { id: 'peppercap', chance: 0.35, min: 1, max: 2 }] },
  'mossbound-custodian': { id: 'mossbound-custodian', name: 'Mossbound Custodian', art: 'enemy-custodian', elite: true, maxHp: 460, attack: 24, magic: 15, defence: 21, speed: 10, xp: 120, coins: 90, weaknesses: ['lightning', 'fire'], resistances: ['slash', 'nature'], attacks: [{ name: 'Waystone Hammer', power: 1.35, element: 'earth' }, { name: 'Binding Moss', power: 0.8, element: 'nature', status: { id: 'slow', turns: 3, chance: 0.55 } }, { name: 'Custodian Ward', power: 0, element: 'none', status: { id: 'guard', turns: 2, chance: 1, self: true } }], drops: [{ id: 'waystone-shard', chance: 1, min: 2, max: 3 }, { id: 'sunsteel-filings', chance: 1, min: 2, max: 3 }, { id: 'mossplate-chip', chance: 1, min: 2, max: 2 }], equipmentDrop: 'sunsteel-edge' },
  'hollow-hart': { id: 'hollow-hart', name: 'The Hollow Hart', art: 'enemy-hollow-hart', boss: true, maxHp: 980, attack: 29, magic: 27, defence: 20, speed: 13, xp: 300, coins: 240, weaknesses: ['fire', 'lightning'], resistances: ['nature', 'earth'], statusResist: 0.5, attacks: [{ name: 'Antler Eclipse', power: 1.45, element: 'dark' }, { name: 'Rootquake', power: 1.05, element: 'earth', party: true }, { name: 'Heartseed Drain', power: 1.1, element: 'nature', drain: 0.45 }, { name: 'Crown of Stillness', power: 0.75, element: 'dark', status: { id: 'slow', turns: 3, chance: 0.6 } }], drops: [{ id: 'hartglass', chance: 1, min: 3, max: 4 }, { id: 'waystone-shard', chance: 1, min: 3, max: 3 }, { id: 'glowseed', chance: 1, min: 4, max: 5 }], equipmentDrop: 'hartglass-charm' }
});

export const ENCOUNTER_TABLES = Object.freeze({
  'sunlit-verge': [
    { weight: 5, enemies: ['galesprout'] },
    { weight: 4, enemies: ['glasswing'] },
    { weight: 1, enemies: ['galesprout', 'glasswing'] }
  ],
  'rainroot-hollow': [
    { weight: 4, enemies: ['mudglass-crab', 'glasswing'] },
    { weight: 3, enemies: ['root-prowler', 'galesprout'] },
    { weight: 2, enemies: ['root-prowler', 'mudglass-crab'] }
  ],
  'crown-of-echoes': [
    { weight: 4, enemies: ['root-prowler', 'root-prowler'] },
    { weight: 3, enemies: ['mudglass-crab', 'glasswing', 'galesprout'] },
    { weight: 2, enemies: ['root-prowler', 'mudglass-crab', 'glasswing'] }
  ]
});

const chunk = (...rows) => rows;

export const STAGES = Object.freeze([
  {
    id: 'sunlit-verge', name: 'Stage I — Sunlit Verge', subtitle: 'Wake the first waystone', story: STORY.opening,
    start: chunk(
      '##########', '#gggggggg#', '#g..g....#', '#g..#..R.#', '#g.....g.#', '#.........', '#.........', '#g....g..#', '#g.C..#..#', '#gggggggg#', '#gggggggg#', '##########'
    ),
    middles: [
      chunk('##########','#ggg#gggg#','#g..#...g#','#g..#...g#','#g..E...g#','..........','..........','#g..##..g#','#g...C..g#','#gggggggg#','#gggggggg#','##########'),
      chunk('##########','#gggggggg#','#g.####.g#','#g......g#','#g.R....g#','..........','..........','#g....#.g#','#g.C..#.g#','#gggggggg#','#gggggggg#','##########'),
      chunk('##########','#gggggggg#','#g..b...g#','#g..b.R.g#','#g..b...g#','..........','..........','#g..b...g#','#g.Cb...g#','#gggggggg#','#gggggggg#','##########')
    ],
    end: chunk('##########','#gggggggg#','#g...#..g#','#g...#..g#','#g.H....g#','........X#','.........#','#g.....gg#','#g..R..gg#','#gggggggg#','#gggggggg#','##########')
  },
  {
    id: 'rainroot-hollow', name: 'Stage II — Rainroot Hollow', subtitle: 'Break the custodian seal', story: STORY.midpoint,
    start: chunk('##########','#gggggggg#','#g.~~~~.g#','#g.|..|.g#','#g.|R.|.g#','...|..|...','...|..|...','#g.|..|.g#','#g.~~~~.g#','#gggggggg#','#gggggggg#','##########'),
    middles: [
      chunk('##########','#bbbbbbbb#','#b..#...b#','#b..#R..b#','#b......b#','..........','..........','#b..~~..b#','#b.C~~..b#','#bbbbbbbb#','#bbbbbbbb#','##########'),
      chunk('##########','#bbbbbbbb#','#b.~~~~.b#','#b.|..|.b#','#b.|E.|.b#','...|..|...','...|..|...','#b.|..|.b#','#b.~~~~.b#','#bbbbbbbb#','#bbbbbbbb#','##########'),
      chunk('##########','#bbbbbbbb#','#b...#..b#','#b.R.#..b#','#b...#..b#','..........','..........','#b..##..b#','#b.C....b#','#bbbbbbbb#','#bbbbbbbb#','##########')
    ],
    end: chunk('##########','#bbbbbbbb#','#b..###.b#','#b..L...b#','#b......b#','........X#','.........#','#b.H....b#','#b..R...b#','#bbbbbbbb#','#bbbbbbbb#','##########')
  },
  {
    id: 'crown-of-echoes', name: 'Stage III — Crown of Echoes', subtitle: 'Recover the Heartseed', story: STORY.finale,
    start: chunk('##########','#gggggggg#','#g.#..#.g#','#g.#R.#.g#','#g......g#','..........','..........','#g..##..g#','#g.E....g#','#gggggggg#','#gggggggg#','##########'),
    middles: [
      chunk('##########','#ggbbbbgg#','#g.b##b.g#','#g.b..b.g#','#g.bR.b.g#','..........','..........','#g.b..b.g#','#g.C..b.g#','#ggbbbbgg#','#gggggggg#','##########'),
      chunk('##########','#gggggggg#','#g.~~~~.g#','#g.|..|.g#','#g.|H.|.g#','...|..|...','...|..|...','#g.|..|.g#','#g.~~~~.g#','#gggggggg#','#gggggggg#','##########'),
      chunk('##########','#gggggggg#','#g..#...g#','#g.R#...g#','#g..#...g#','..........','..........','#g...#..g#','#g.C.#..g#','#gggggggg#','#gggggggg#','##########')
    ],
    end: chunk('##########','#gggggggg#','#g.####.g#','#g......g#','#g..B...g#','.........#','.........#','#g......g#','#g..R...g#','#gggggggg#','#gggggggg#','##########')
  }
]);

export const DISCIPLINES = Object.freeze(['blacksmithing', 'armour', 'tailoring', 'alchemy', 'cooking', 'quests', 'trading']);
export const BATTLE_COMMANDS = Object.freeze(['Attack', 'Ability', 'Magic', 'Item', 'Defend', 'Escape']);
export const ART_URL = '/systems/baseline-recreation/games/baseline-realm/exploration/art/meridian-grove-sprites.svg';

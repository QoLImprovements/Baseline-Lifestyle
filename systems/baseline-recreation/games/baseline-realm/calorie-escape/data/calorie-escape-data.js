export const CALORIE_ESCAPE_MODULE_ID = 'calorie-escape';
export const CALORIE_ESCAPE_SAVE_VERSION = 1;
export const CALORIE_ESCAPE_BUILD = 'CALORIE_ESCAPE_FOUR_ZONE_COMPLETE_20260628';

export const ZONES = Object.freeze([
  { id:'city', name:'City', pursuer:'Chef Brasa', status:'playable', description:'Market lanes, delivery hazards, steam vents, and breakable snack cargo.', palette:['#101a2c','#315070','#f0b45d'], levels:['city-1','city-2','city-3'] },
  { id:'desert', name:'Desert', pursuer:'Dusthorn Stampede', status:'playable', description:'Dust roads, herd pressure, sandstone gates, and heat-haze lane shifts.', palette:['#492e20','#b86a37','#f2cf7d'], levels:['desert-1','desert-2','desert-3'] },
  { id:'forest', name:'Forest', pursuer:'Bramble Bear', status:'playable', description:'Root tunnels, fallen logs, close woodland sightlines, and supply clearings.', palette:['#14281d','#3f7044','#c2d17c'], levels:['forest-1','forest-2','forest-3'] },
  { id:'snow-mountain', name:'Snow Mountain', pursuer:'Whitefall Avalanche', status:'playable', description:'Downhill ice channels, snow barriers, frozen cargo, and collapsing slopes.', palette:['#17243b','#5b86a5','#e8f5f7'], levels:['snow-1','snow-2','snow-3'] }
]);

export const LEVELS = Object.freeze([
  { id:'city-1', zoneId:'city', order:1, name:'Market Wake-Up', subtitle:'Learn the lanes and obstacle language.', duration:48, baseSpeed:.185, speedRamp:.22, pressureRate:.56, spawnInterval:1.28, patternTier:1, completionCe:220, masteryTarget:4200, objective:{id:'break-crates',label:'Break 6 snack crates',target:6} },
  { id:'city-2', zoneId:'city', order:2, name:'Rush-Hour Crossing', subtitle:'Traffic combines jump, slide, attack, and lane choice.', duration:55, baseSpeed:.205, speedRamp:.32, pressureRate:.72, spawnInterval:1.08, patternTier:2, completionCe:275, masteryTarget:6200, objective:{id:'clean-section',label:'Finish with no more than 1 hit',target:1} },
  { id:'city-3', zoneId:'city', order:3, name:'Midnight Delivery', subtitle:'Dense combinations and Chef Brasa’s final market sprint.', duration:62, baseSpeed:.225, speedRamp:.42, pressureRate:.9, spawnInterval:.94, patternTier:3, completionCe:340, masteryTarget:8200, objective:{id:'pressure-control',label:'Finish below 55 pursuit pressure',target:55} },
  { id:'desert-1', zoneId:'desert', order:1, name:'Sunscar Road', subtitle:'Read wide dust lanes while the stampede gathers.', duration:52, baseSpeed:.2, speedRamp:.28, pressureRate:.64, spawnInterval:1.18, patternTier:1, completionCe:250, masteryTarget:5200, objective:{id:'clean-section',label:'Finish with no more than 2 hits',target:2} },
  { id:'desert-2', zoneId:'desert', order:2, name:'Herdline Switchbacks', subtitle:'Alternating barriers force deliberate lane control.', duration:58, baseSpeed:.22, speedRamp:.38, pressureRate:.8, spawnInterval:1, patternTier:2, completionCe:310, masteryTarget:7200, objective:{id:'break-crates',label:'Break 8 cargo crates',target:8} },
  { id:'desert-3', zoneId:'desert', order:3, name:'Red Mesa Breakout', subtitle:'Cross the mesa before the full herd closes the road.', duration:66, baseSpeed:.24, speedRamp:.48, pressureRate:.98, spawnInterval:.88, patternTier:3, completionCe:380, masteryTarget:9400, objective:{id:'pressure-control',label:'Finish below 50 pursuit pressure',target:50} },
  { id:'forest-1', zoneId:'forest', order:1, name:'Fernshadow Entry', subtitle:'Roots and low branches introduce the woodland route.', duration:54, baseSpeed:.205, speedRamp:.3, pressureRate:.68, spawnInterval:1.15, patternTier:1, completionCe:270, masteryTarget:5600, objective:{id:'break-crates',label:'Break 7 supply crates',target:7} },
  { id:'forest-2', zoneId:'forest', order:2, name:'Fallen-Log Run', subtitle:'Close sightlines compress jump and slide decisions.', duration:61, baseSpeed:.228, speedRamp:.4, pressureRate:.84, spawnInterval:.98, patternTier:2, completionCe:335, masteryTarget:7800, objective:{id:'clean-section',label:'Finish with no more than 1 hit',target:1} },
  { id:'forest-3', zoneId:'forest', order:3, name:'Brambleheart Pursuit', subtitle:'The bear charges through a dense final woodland sequence.', duration:68, baseSpeed:.248, speedRamp:.52, pressureRate:1, spawnInterval:.84, patternTier:3, completionCe:410, masteryTarget:10100, objective:{id:'pressure-control',label:'Finish below 48 pursuit pressure',target:48} },
  { id:'snow-1', zoneId:'snow-mountain', order:1, name:'Blue-Ice Descent', subtitle:'Learn the long downhill sightline and frozen hazards.', duration:56, baseSpeed:.215, speedRamp:.34, pressureRate:.72, spawnInterval:1.1, patternTier:1, completionCe:290, masteryTarget:6000, objective:{id:'clean-section',label:'Finish with no more than 2 hits',target:2} },
  { id:'snow-2', zoneId:'snow-mountain', order:2, name:'Whiteout Channels', subtitle:'Visibility narrows as ice lanes switch beneath the runner.', duration:63, baseSpeed:.238, speedRamp:.44, pressureRate:.88, spawnInterval:.93, patternTier:2, completionCe:360, masteryTarget:8400, objective:{id:'break-crates',label:'Break 9 frozen cargo crates',target:9} },
  { id:'snow-3', zoneId:'snow-mountain', order:3, name:'Avalanche Crown', subtitle:'Outrun the collapsing summit through the hardest route.', duration:72, baseSpeed:.26, speedRamp:.58, pressureRate:1.06, spawnInterval:.8, patternTier:3, completionCe:450, masteryTarget:11000, objective:{id:'pressure-control',label:'Finish below 45 pursuit pressure',target:45} }
]);

export const LEVEL_BY_ID = Object.freeze(Object.fromEntries(LEVELS.map((level) => [level.id, level])));
export const ZONE_BY_ID = Object.freeze(Object.fromEntries(ZONES.map((zone) => [zone.id, zone])));

export const OBSTACLE_TYPES = Object.freeze({
  'snack-crate': {
    id: 'snack-crate', name: 'Snack Crate', category: 'breakable', response: 'attack-or-jump',
    score: 190, pressureHit: 17, material: 'grain', materialChance: 0.48,
    visual: { fill: '#db7042', edge: '#ffe0a4', mark: 'CRACK' }
  },
  'soda-stack': {
    id: 'soda-stack', name: 'Soda Stack', category: 'breakable', response: 'attack-or-dodge',
    score: 230, pressureHit: 19, material: 'charcoal', materialChance: 0.36,
    visual: { fill: '#c94d55', edge: '#ffd3b5', mark: 'BURST' }
  },
  'market-barrier': {
    id: 'market-barrier', name: 'Market Barrier', category: 'unbreakable', response: 'jump-or-dodge',
    score: 120, pressureHit: 22,
    visual: { fill: '#34404c', edge: '#f2c14f', mark: 'STEEL' }
  },
  'delivery-cart': {
    id: 'delivery-cart', name: 'Delivery Cart', category: 'unbreakable', response: 'dodge',
    score: 140, pressureHit: 25,
    visual: { fill: '#3f4b5d', edge: '#ffcf62', mark: 'BLOCK' }
  },
  'steam-pipe': {
    id: 'steam-pipe', name: 'Low Steam Pipe', category: 'unbreakable', response: 'slide-or-dodge',
    score: 150, pressureHit: 21,
    visual: { fill: '#63707a', edge: '#f6d06f', mark: 'DUCK' }
  },
  pothole: {
    id: 'pothole', name: 'Pothole', category: 'unbreakable', response: 'jump-or-dodge',
    score: 110, pressureHit: 18,
    visual: { fill: '#12161d', edge: '#f0c45b', mark: 'JUMP' }
  },
  'supply-token': {
    id: 'supply-token', name: 'Workshop Supply', category: 'collectible', response: 'collect',
    score: 160, pressureHit: 0,
    materialPool: ['linen', 'leather_strip', 'clear_water', 'grain'],
    visual: { fill: '#72c9a1', edge: '#e9fff0', mark: 'SUPPLY' }
  }
});

export const PATTERN_LIBRARY = Object.freeze({
  1: Object.freeze([
    [{ lane: -1, type: 'snack-crate' }],
    [{ lane: 0, type: 'market-barrier' }],
    [{ lane: 1, type: 'pothole' }],
    [{ lane: -1, type: 'supply-token' }, { lane: 1, type: 'snack-crate' }],
    [{ lane: -1, type: 'market-barrier' }, { lane: 1, type: 'snack-crate' }]
  ]),
  2: Object.freeze([
    [{ lane: -1, type: 'delivery-cart' }, { lane: 0, type: 'snack-crate' }],
    [{ lane: 0, type: 'steam-pipe' }, { lane: 1, type: 'pothole' }],
    [{ lane: -1, type: 'soda-stack' }, { lane: 1, type: 'delivery-cart' }],
    [{ lane: -1, type: 'supply-token' }, { lane: 0, type: 'market-barrier' }, { lane: 1, type: 'snack-crate' }],
    [{ lane: -1, type: 'pothole' }, { lane: 0, type: 'steam-pipe' }]
  ]),
  3: Object.freeze([
    [{ lane: -1, type: 'delivery-cart' }, { lane: 0, type: 'soda-stack' }, { lane: 1, type: 'market-barrier' }],
    [{ lane: -1, type: 'steam-pipe' }, { lane: 0, type: 'pothole' }, { lane: 1, type: 'snack-crate' }],
    [{ lane: -1, type: 'soda-stack' }, { lane: 0, type: 'delivery-cart' }, { lane: 1, type: 'supply-token' }],
    [{ lane: -1, type: 'market-barrier' }, { lane: 0, type: 'snack-crate' }, { lane: 1, type: 'steam-pipe' }],
    [{ lane: -1, type: 'pothole' }, { lane: 0, type: 'soda-stack' }, { lane: 1, type: 'delivery-cart' }]
  ])
});

export const ABILITIES = Object.freeze([
  { id: 'quick-step', name: 'Quick Step', description: 'Faster lane changes and a wider clean-dodge window.', maxRank: 3, unlockLevel: 2 },
  { id: 'power-strike', name: 'Power Strike', description: 'Longer attack reach and a larger pressure reduction when cargo breaks.', maxRank: 3, unlockLevel: 2 },
  { id: 'air-control', name: 'Air Control', description: 'Higher variable jumps and more control while airborne.', maxRank: 3, unlockLevel: 3 },
  { id: 'low-profile', name: 'Low Profile', description: 'Longer slides and quicker recovery from overhead hazards.', maxRank: 3, unlockLevel: 4 }
]);

export const ABILITY_BY_ID = Object.freeze(Object.fromEntries(ABILITIES.map((ability) => [ability.id, ability])));

export const MATERIAL_NAMES = Object.freeze({
  grain: 'Grain',
  charcoal: 'Charcoal',
  linen: 'Linen',
  leather_strip: 'Leather Strip',
  clear_water: 'Clear Water'
});

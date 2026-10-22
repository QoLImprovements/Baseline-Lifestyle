export const REALM_SAVE_VERSION = 3;

const NINJA_UPGRADE_KEYS = Object.freeze(['blade', 'drills', 'treasury', 'meditation', 'breaker']);
const SPIRIT_SHOP_KEYS = Object.freeze(['focus', 'fortune', 'vigor', 'ember', 'tents', 'mark']);
const INVENTORY_BUCKETS = Object.freeze(['materials', 'items', 'equipment', 'food', 'potions', 'tools']);

function plainObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

function clone(value) {
  if (typeof structuredClone === 'function') return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function nonNegativeInteger(value, fallback = 0) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(0, Math.round(number));
}

function positiveInteger(value, fallback = 1) {
  return Math.max(1, nonNegativeInteger(value, fallback));
}

function nonNegativeNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, number) : fallback;
}

function clampUnit(value, fallback = 1) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.min(1, number)) : fallback;
}

function normaliseCountMap(value) {
  const output = {};
  Object.entries(plainObject(value)).forEach(([key, count]) => {
    const cleanKey = String(key || '').trim();
    if (!cleanKey) return;
    output[cleanKey] = nonNegativeInteger(count);
  });
  return output;
}

function normaliseRecordMap(value) {
  const output = {};
  Object.entries(plainObject(value)).forEach(([key, item]) => {
    const cleanKey = String(key || '').trim();
    if (!cleanKey || !item || typeof item !== 'object') return;
    output[cleanKey] = clone(item);
  });
  return output;
}

function normaliseStringList(value) {
  return [...new Set((Array.isArray(value) ? value : []).map((entry) => String(entry || '').trim()).filter(Boolean))];
}

export function createDefaultInventory() {
  return {
    materials: {},
    items: {},
    equipment: {},
    food: {},
    potions: {},
    tools: {}
  };
}

export function normaliseInventory(value) {
  const input = plainObject(value);
  const output = createDefaultInventory();
  INVENTORY_BUCKETS.forEach((bucket) => {
    output[bucket] = bucket === 'equipment'
      ? normaliseRecordMap(input[bucket])
      : normaliseCountMap(input[bucket]);
  });
  return output;
}

export function createDefaultPartyState() {
  return { active: [], reserve: [], characters: {} };
}

export function normalisePartyState(value) {
  const input = plainObject(value);
  const characters = normaliseRecordMap(input.characters);
  const known = new Set(Object.keys(characters));
  const active = normaliseStringList(input.active).filter((id) => known.has(id)).slice(0, 4);
  const activeSet = new Set(active);
  const reserve = normaliseStringList(input.reserve).filter((id) => known.has(id) && !activeSet.has(id));
  Object.keys(characters).forEach((id) => {
    const character = plainObject(characters[id]);
    characters[id] = {
      ...clone(character),
      id,
      level: positiveInteger(character.level),
      xp: nonNegativeInteger(character.xp),
      hp: nonNegativeNumber(character.hp, nonNegativeNumber(character.maxHp, 1)),
      maxHp: Math.max(1, nonNegativeNumber(character.maxHp, 1)),
      equipment: normaliseRecordMap(character.equipment)
    };
  });
  const listed = new Set([...active, ...reserve]);
  Object.keys(characters).forEach((id) => {
    if (!listed.has(id)) reserve.push(id);
  });
  return { ...clone(input), active, reserve, characters };
}

export function createDefaultSettings() {
  return {
    audio: { master: 1, music: 0.8, effects: 1, muted: false },
    accessibility: { reducedMotion: 'system' },
    controls: { controllerEnabled: true }
  };
}

export function normaliseSettings(value) {
  const input = plainObject(value);
  const audio = plainObject(input.audio);
  const accessibility = plainObject(input.accessibility);
  const controls = plainObject(input.controls);
  const reducedMotion = ['system', 'reduce', 'no-preference'].includes(accessibility.reducedMotion)
    ? accessibility.reducedMotion
    : 'system';
  return {
    ...clone(input),
    audio: {
      ...clone(audio),
      master: clampUnit(audio.master, 1),
      music: clampUnit(audio.music, 0.8),
      effects: clampUnit(audio.effects, 1),
      muted: Boolean(audio.muted)
    },
    accessibility: { ...clone(accessibility), reducedMotion },
    controls: { ...clone(controls), controllerEnabled: controls.controllerEnabled !== false }
  };
}

export function createDefaultWorkshopState() {
  return { crafting: 1, tailoring: 1, cooking: 1, alchemy: 1 };
}

export function normaliseWorkshopState(value) {
  const input = plainObject(value);
  return {
    ...clone(input),
    crafting: positiveInteger(input.crafting),
    tailoring: positiveInteger(input.tailoring),
    cooking: positiveInteger(input.cooking),
    alchemy: positiveInteger(input.alchemy)
  };
}

// Compatibility schema only: older Realm saves stored the retired Advance/Resolve
// Exploration loop here. Meridian Grove owns all live Exploration gameplay now;
// keep these fields solely so existing saves can be normalised without data loss.
export function createDefaultExplorationState() {
  return {
    map: 1,
    step: 0,
    maxSteps: 6,
    event: 'idle',
    enemyHp: 0,
    enemyMaxHp: 0,
    enemyName: '',
    routeLog: 'Step forward from Basecamp to begin the route.',
    loot: 0,
    relics: 0,
    mapsCleared: 0,
    merchantVisits: 0,
    chestsFound: 0
  };
}

export function normaliseExplorationState(value) {
  const base = createDefaultExplorationState();
  const input = { ...base, ...plainObject(value) };
  const allowedEvents = new Set(['idle', 'encounter', 'boss', 'chest', 'merchant', 'rest']);
  return {
    ...clone(input),
    map: positiveInteger(input.map),
    step: nonNegativeInteger(input.step),
    maxSteps: Math.max(4, nonNegativeInteger(input.maxSteps, 6)),
    event: allowedEvents.has(input.event) ? input.event : 'idle',
    enemyHp: nonNegativeNumber(input.enemyHp),
    enemyMaxHp: nonNegativeNumber(input.enemyMaxHp),
    enemyName: String(input.enemyName || ''),
    routeLog: String(input.routeLog || base.routeLog),
    loot: nonNegativeInteger(input.loot),
    relics: nonNegativeInteger(input.relics),
    mapsCleared: nonNegativeInteger(input.mapsCleared),
    merchantVisits: nonNegativeInteger(input.merchantVisits),
    chestsFound: nonNegativeInteger(input.chestsFound)
  };
}

function normaliseUpgradeMap(value, keys) {
  const input = plainObject(value);
  const output = { ...clone(input) };
  keys.forEach((key) => {
    output[key] = nonNegativeInteger(input[key]);
  });
  return output;
}

export function createDefaultNinjaTrainingState() {
  return {
    level: 1,
    xp: 0,
    stage: 1,
    enemyHp: 0,
    highestStage: 1,
    totalKills: 0,
    currentStreak: 0,
    bestStreak: 0,
    cleanWinStreak: 0,
    bossesDefeated: 0,
    totalCoinsEarned: 0,
    prestigeCount: 0,
    prestigeEarnedTotal: 0,
    upgrades: { blade: 0, drills: 0, treasury: 0, meditation: 0, breaker: 0 },
    spiritShop: { focus: 0, fortune: 0, vigor: 0, ember: 0, tents: 0, mark: 0 },
    lastSeenAt: 0,
    bonusCache: {},
    offlineSummary: ''
  };
}

export function normaliseNinjaTrainingState(value) {
  const base = createDefaultNinjaTrainingState();
  const input = { ...base, ...plainObject(value) };
  const stage = positiveInteger(input.stage);
  return {
    ...clone(input),
    level: positiveInteger(input.level),
    xp: nonNegativeInteger(input.xp),
    stage,
    enemyHp: nonNegativeNumber(input.enemyHp),
    highestStage: Math.max(stage, positiveInteger(input.highestStage, stage)),
    totalKills: nonNegativeInteger(input.totalKills),
    currentStreak: nonNegativeInteger(input.currentStreak),
    bestStreak: nonNegativeInteger(input.bestStreak),
    cleanWinStreak: nonNegativeInteger(input.cleanWinStreak),
    bossesDefeated: nonNegativeInteger(input.bossesDefeated),
    totalCoinsEarned: nonNegativeInteger(input.totalCoinsEarned),
    prestigeCount: nonNegativeInteger(input.prestigeCount),
    prestigeEarnedTotal: nonNegativeInteger(input.prestigeEarnedTotal),
    upgrades: normaliseUpgradeMap(input.upgrades, NINJA_UPGRADE_KEYS),
    spiritShop: normaliseUpgradeMap(input.spiritShop, SPIRIT_SHOP_KEYS),
    lastSeenAt: nonNegativeInteger(input.lastSeenAt),
    bonusCache: clone(plainObject(input.bonusCache)),
    offlineSummary: String(input.offlineSummary || '')
  };
}

export function createDefaultRealmSave() {
  return {
    realm: {
      version: REALM_SAVE_VERSION,
      revision: 0,
      savedAt: 0,
      wallet: { coins: 0, spirit: 0 },
      inventory: createDefaultInventory(),
      party: createDefaultPartyState(),
      settings: createDefaultSettings(),
      recovery: { count: 0, lastSource: 'default', lastRecoveredAt: 0 },
      basecamp: {},
      ninjaTraining: createDefaultNinjaTrainingState(),
      exploration: createDefaultExplorationState(),
      workshop: createDefaultWorkshopState(),
      calorieEscape: {},
      tacticalOperations: {}
    }
  };
}

export function normaliseRealmSave(value) {
  const source = plainObject(value);
  const realmInput = plainObject(source.realm || source);
  const base = createDefaultRealmSave().realm;
  const walletInput = plainObject(realmInput.wallet);
  const recoveryInput = plainObject(realmInput.recovery);
  return {
    realm: {
      ...clone(realmInput),
      version: REALM_SAVE_VERSION,
      revision: nonNegativeInteger(realmInput.revision),
      savedAt: nonNegativeInteger(realmInput.savedAt),
      wallet: {
        ...clone(walletInput),
        coins: nonNegativeInteger(walletInput.coins),
        spirit: nonNegativeInteger(walletInput.spirit)
      },
      inventory: normaliseInventory(realmInput.inventory),
      party: normalisePartyState(realmInput.party),
      settings: normaliseSettings(realmInput.settings),
      recovery: {
        ...clone(recoveryInput),
        count: nonNegativeInteger(recoveryInput.count),
        lastSource: String(recoveryInput.lastSource || 'normalised'),
        lastRecoveredAt: nonNegativeInteger(recoveryInput.lastRecoveredAt)
      },
      basecamp: clone(plainObject(realmInput.basecamp || base.basecamp)),
      ninjaTraining: normaliseNinjaTrainingState(realmInput.ninjaTraining),
      exploration: normaliseExplorationState(realmInput.exploration),
      workshop: normaliseWorkshopState(realmInput.workshop),
      calorieEscape: clone(plainObject(realmInput.calorieEscape || base.calorieEscape)),
      tacticalOperations: clone(plainObject(realmInput.tacticalOperations || base.tacticalOperations))
    }
  };
}

export const realmModelInternals = Object.freeze({
  plainObject,
  clone,
  nonNegativeInteger,
  positiveInteger,
  nonNegativeNumber,
  clampUnit,
  normaliseStringList
});

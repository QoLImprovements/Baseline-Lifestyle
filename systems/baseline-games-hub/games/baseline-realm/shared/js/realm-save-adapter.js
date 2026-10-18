import {
  createDefaultRealmSave,
  normaliseExplorationState,
  normaliseNinjaTrainingState,
  normaliseRealmSave,
  normaliseWorkshopState,
  realmModelInternals
} from './realm-model.js';

const { clone, plainObject } = realmModelInternals;
// This module is the single sanctioned compatibility boundary for pre-Realm
// Ninja saves. Legacy fields are migrated/persisted here, never executed as
// parallel gameplay systems.
const LEGACY_APP = 'ninja';
const LEGACY_REALM_STORAGE_KEY = '__bl_games_guest_profiles_v1__';
const V2_REALM_STORAGE_KEY = '__bl_baseline_realm_v2__';
const V3_REALM_STORAGE_KEY = '__bl_baseline_realm_v3__';
const V3_BACKUP_STORAGE_KEY = '__bl_baseline_realm_v3_backup__';
const V3_JOURNAL_STORAGE_KEY = '__bl_baseline_realm_v3_journal__';
const ENVELOPE_VERSION = 1;

const MOVED_LEGACY_KEYS = new Set([
  'app', 'coins', 'spirit', 'workshop', 'exploration', 'realm',
  'level', 'xp', 'stage', 'enemyHp', 'highestStage', 'totalKills',
  'currentStreak', 'bestStreak', 'cleanWinStreak', 'bossesDefeated',
  'totalCoinsEarned', 'prestigeCount', 'prestigeEarnedTotal', 'upgrades',
  'spiritShop', 'lastSeenAt', 'bonusCache', 'offlineSummary'
]);

const NINJA_TRAINING_KEYS = Object.freeze([
  'level', 'xp', 'stage', 'enemyHp', 'highestStage', 'totalKills',
  'currentStreak', 'bestStreak', 'cleanWinStreak', 'bossesDefeated',
  'totalCoinsEarned', 'prestigeCount', 'prestigeEarnedTotal', 'upgrades',
  'spiritShop', 'lastSeenAt', 'bonusCache', 'offlineSummary'
]);

function hasOwn(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function legacyTrainingInput(source, existing) {
  const input = clone(plainObject(existing));
  NINJA_TRAINING_KEYS.forEach((key) => {
    if (hasOwn(source, key)) input[key] = clone(source[key]);
  });
  return input;
}

function legacyExtras(profile) {
  const extras = {};
  Object.entries(plainObject(profile)).forEach(([key, value]) => {
    if (!MOVED_LEGACY_KEYS.has(key)) extras[key] = clone(value);
  });
  return extras;
}

function stableStringify(value) {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

export function realmSaveChecksum(value) {
  const text = stableStringify(value);
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function createEnvelope(save, now = Date.now()) {
  const payload = normaliseRealmSave(save);
  return {
    envelopeVersion: ENVELOPE_VERSION,
    savedAt: Math.max(0, Math.round(Number(now) || 0)),
    checksum: realmSaveChecksum(payload),
    payload
  };
}

function parseEnvelope(raw) {
  if (!raw) throw new Error('EMPTY_SAVE');
  const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
  if (parsed?.envelopeVersion === ENVELOPE_VERSION && parsed.payload) {
    const payload = normaliseRealmSave(parsed.payload);
    if (realmSaveChecksum(payload) !== parsed.checksum) throw new Error('CHECKSUM_MISMATCH');
    return payload;
  }
  return normaliseRealmSave(parsed);
}

function markRecovery(save, source, now = Date.now()) {
  const normalised = normaliseRealmSave(save);
  normalised.realm.recovery.count += 1;
  normalised.realm.recovery.lastSource = source;
  normalised.realm.recovery.lastRecoveredAt = Math.max(0, Math.round(Number(now) || 0));
  return normalised;
}

function safeRemove(storage, key) {
  if (typeof storage?.removeItem === 'function') storage.removeItem(key);
  else if (typeof storage?.setItem === 'function') storage.setItem(key, '');
}

export function migrateLegacyNinjaProfile(profile) {
  const source = plainObject(profile);
  const save = source.realm
    ? normaliseRealmSave({ realm: source.realm })
    : createDefaultRealmSave();
  const sourceCoins = Number(hasOwn(source, 'coins') ? source.coins : save.realm.wallet.coins);
  const sourceSpirit = Number(hasOwn(source, 'spirit') ? source.spirit : save.realm.wallet.spirit);
  save.realm.wallet.coins = Number.isFinite(sourceCoins) ? Math.max(0, Math.round(sourceCoins)) : 0;
  save.realm.wallet.spirit = Number.isFinite(sourceSpirit) ? Math.max(0, Math.round(sourceSpirit)) : 0;
  save.realm.ninjaTraining = normaliseNinjaTrainingState(legacyTrainingInput(source, save.realm.ninjaTraining));
  save.realm.workshop = normaliseWorkshopState(hasOwn(source, 'workshop') ? source.workshop : save.realm.workshop);
  save.realm.exploration = normaliseExplorationState(hasOwn(source, 'exploration') ? source.exploration : save.realm.exploration);
  save.realm.legacy = {
    app: LEGACY_APP,
    extras: legacyExtras(source)
  };
  return normaliseRealmSave(save);
}

export function legacyProfileFromRealmSave(value, template = {}) {
  const save = normaliseRealmSave(value);
  const realm = save.realm;
  const training = realm.ninjaTraining;
  const legacy = plainObject(realm.legacy);
  const extras = plainObject(legacy.extras);
  return {
    ...clone(extras),
    ...clone(plainObject(template)),
    app: LEGACY_APP,
    coins: realm.wallet.coins,
    spirit: realm.wallet.spirit,
    level: training.level,
    xp: training.xp,
    stage: training.stage,
    enemyHp: training.enemyHp,
    highestStage: training.highestStage,
    totalKills: training.totalKills,
    currentStreak: training.currentStreak,
    bestStreak: training.bestStreak,
    cleanWinStreak: training.cleanWinStreak,
    bossesDefeated: training.bossesDefeated,
    totalCoinsEarned: training.totalCoinsEarned,
    prestigeCount: training.prestigeCount,
    prestigeEarnedTotal: training.prestigeEarnedTotal,
    upgrades: clone(training.upgrades),
    spiritShop: clone(training.spiritShop),
    lastSeenAt: training.lastSeenAt,
    bonusCache: clone(training.bonusCache),
    offlineSummary: training.offlineSummary,
    workshop: clone(realm.workshop),
    exploration: clone(realm.exploration),
    realm: clone(realm)
  };
}

export function normaliseLegacyNinjaProfile(profile) {
  return legacyProfileFromRealmSave(migrateLegacyNinjaProfile(profile), profile);
}

export function createDefaultLegacyNinjaProfile() {
  return legacyProfileFromRealmSave(createDefaultRealmSave());
}

export class RealmSaveAdapter {
  constructor({ storage = null, accountApi = null, now = () => Date.now() } = {}) {
    this.storage = storage;
    this.accountApi = accountApi;
    this.now = now;
    this.lastRecovery = { source: 'none', recovered: false, errors: [] };
  }

  fromLegacyProfile(profile) {
    return migrateLegacyNinjaProfile(profile);
  }

  toLegacyProfile(save, template) {
    return legacyProfileFromRealmSave(save, template);
  }

  tryCandidate(key, source, errors) {
    const raw = this.storage?.getItem?.(key);
    if (!raw) return null;
    try {
      return { save: parseEnvelope(raw), source };
    } catch (error) {
      errors.push({ source, code: error?.message || 'INVALID_SAVE' });
      return null;
    }
  }

  loadGuest() {
    if (!this.storage) return createDefaultRealmSave();
    const errors = [];
    const candidates = [
      [V3_REALM_STORAGE_KEY, 'primary'],
      [V3_JOURNAL_STORAGE_KEY, 'journal'],
      [V3_BACKUP_STORAGE_KEY, 'backup'],
      [V2_REALM_STORAGE_KEY, 'v2']
    ];
    for (const [key, source] of candidates) {
      const candidate = this.tryCandidate(key, source, errors);
      if (!candidate) continue;
      const recovered = source !== 'primary';
      const save = recovered ? markRecovery(candidate.save, source, this.now()) : candidate.save;
      this.lastRecovery = { source, recovered, errors };
      if (recovered) this.saveGuest(save);
      return save;
    }
    try {
      const legacyRaw = this.storage.getItem(LEGACY_REALM_STORAGE_KEY);
      const profiles = legacyRaw ? JSON.parse(legacyRaw) : {};
      const save = migrateLegacyNinjaProfile(profiles && profiles[LEGACY_APP]);
      this.lastRecovery = { source: legacyRaw ? 'legacy' : 'default', recovered: Boolean(legacyRaw), errors };
      if (legacyRaw) this.saveGuest(markRecovery(save, 'legacy', this.now()));
      return save;
    } catch (error) {
      errors.push({ source: 'legacy', code: error?.message || 'INVALID_LEGACY_SAVE' });
      this.lastRecovery = { source: 'default', recovered: true, errors };
      return markRecovery(createDefaultRealmSave(), 'default', this.now());
    }
  }

  saveGuest(save) {
    const normalised = normaliseRealmSave(save);
    normalised.realm.revision += 1;
    normalised.realm.savedAt = Math.max(0, Math.round(Number(this.now()) || 0));
    if (!this.storage) return normalised;
    const envelope = JSON.stringify(createEnvelope(normalised, normalised.realm.savedAt));
    const previous = this.storage.getItem(V3_REALM_STORAGE_KEY);
    this.storage.setItem(V3_JOURNAL_STORAGE_KEY, envelope);
    if (previous) this.storage.setItem(V3_BACKUP_STORAGE_KEY, previous);
    this.storage.setItem(V3_REALM_STORAGE_KEY, envelope);
    const legacyRaw = this.storage.getItem(LEGACY_REALM_STORAGE_KEY);
    let profiles = {};
    try { profiles = legacyRaw ? JSON.parse(legacyRaw) : {}; } catch (_) { profiles = {}; }
    profiles[LEGACY_APP] = legacyProfileFromRealmSave(normalised, profiles[LEGACY_APP]);
    this.storage.setItem(LEGACY_REALM_STORAGE_KEY, JSON.stringify(profiles));
    safeRemove(this.storage, V3_JOURNAL_STORAGE_KEY);
    return normalised;
  }

  async loadAccount() {
    if (!this.accountApi || typeof this.accountApi.load !== 'function') return this.loadGuest();
    try {
      const profile = await this.accountApi.load(LEGACY_APP);
      this.lastRecovery = { source: 'account', recovered: false, errors: [] };
      return migrateLegacyNinjaProfile(profile);
    } catch (error) {
      const save = this.loadGuest();
      this.lastRecovery.errors.push({ source: 'account', code: error?.message || 'ACCOUNT_LOAD_FAILED' });
      return save;
    }
  }

  async saveAccount(save, template) {
    const normalised = this.saveGuest(save);
    const profile = legacyProfileFromRealmSave(normalised, template);
    if (!this.accountApi || typeof this.accountApi.save !== 'function') return profile;
    return this.accountApi.save(LEGACY_APP, profile);
  }
}

export const realmSaveKeys = Object.freeze({
  legacyGuestProfiles: LEGACY_REALM_STORAGE_KEY,
  realmV2: V2_REALM_STORAGE_KEY,
  realmV3: V3_REALM_STORAGE_KEY,
  realmV3Backup: V3_BACKUP_STORAGE_KEY,
  realmV3Journal: V3_JOURNAL_STORAGE_KEY
});

export const realmSaveInternals = Object.freeze({ stableStringify, createEnvelope, parseEnvelope, markRecovery });

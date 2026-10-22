import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createDefaultLegacyNinjaProfile,
  legacyProfileFromRealmSave,
  migrateLegacyNinjaProfile,
  normaliseLegacyNinjaProfile,
  RealmSaveAdapter,
  realmSaveKeys
} from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-save-adapter.js';
import { REALM_SAVE_VERSION } from '../systems/baseline-recreation/games/baseline-realm/shared/js/realm-model.js';

const legacyProfile = {
  app: 'ninja',
  coins: 987654,
  xp: 345,
  level: 18,
  stage: 73,
  enemyHp: 123.5,
  highestStage: 91,
  totalKills: 4321,
  currentStreak: 14,
  bestStreak: 37,
  cleanWinStreak: 9,
  bossesDefeated: 22,
  totalCoinsEarned: 7654321,
  prestigeCount: 4,
  spirit: 29,
  prestigeEarnedTotal: 41,
  upgrades: { blade: 8, drills: 7, treasury: 6, meditation: 5, breaker: 4 },
  spiritShop: { focus: 3, fortune: 2, vigor: 4, ember: 1, tents: 2, mark: 5 },
  lastSeenAt: 1781971200000,
  bonusCache: { attackMult: 1.42, unlockedTraits: ['preserved'] },
  offlineSummary: 'Existing offline result.',
  workshop: { crafting: 6, tailoring: 5, cooking: 4, alchemy: 3, futureStation: 9 },
  exploration: {
    map: 7, step: 4, maxSteps: 8, event: 'boss', enemyHp: 88, enemyMaxHp: 200,
    enemyName: 'Gate Warden', routeLog: 'Boss active.', loot: 12, relics: 5,
    mapsCleared: 6, merchantVisits: 9, chestsFound: 11, futureRouteFlag: true
  },
  lifetimeCriticalHits: 313,
  futureServerField: { nested: ['must', 'survive'] }
};

const protectedFields = [
  'level', 'xp', 'stage', 'enemyHp', 'highestStage', 'totalKills',
  'currentStreak', 'bestStreak', 'cleanWinStreak', 'bossesDefeated',
  'totalCoinsEarned', 'prestigeCount', 'spirit', 'prestigeEarnedTotal',
  'lastSeenAt', 'offlineSummary'
];

test('legacy Ninja progress migrates to current Realm without losing required progress', () => {
  const save = migrateLegacyNinjaProfile(legacyProfile);
  assert.equal(save.realm.version, REALM_SAVE_VERSION);
  assert.deepEqual(save.realm.wallet, { coins: legacyProfile.coins, spirit: legacyProfile.spirit });
  protectedFields.filter((field) => field !== 'spirit').forEach((field) => {
    assert.equal(save.realm.ninjaTraining[field], legacyProfile[field], field);
  });
  assert.deepEqual(save.realm.ninjaTraining.upgrades, legacyProfile.upgrades);
  assert.deepEqual(save.realm.ninjaTraining.spiritShop, legacyProfile.spiritShop);
  assert.equal(save.realm.workshop.futureStation, 9);
  assert.equal(save.realm.exploration.futureRouteFlag, true);
  assert.equal('futureServerField' in save.realm.ninjaTraining, false);
});

test('Realm round-trip reproduces the account-facing legacy profile', () => {
  const roundTrip = legacyProfileFromRealmSave(migrateLegacyNinjaProfile(legacyProfile));
  protectedFields.forEach((field) => assert.deepEqual(roundTrip[field], legacyProfile[field], field));
  assert.deepEqual(roundTrip.upgrades, legacyProfile.upgrades);
  assert.deepEqual(roundTrip.spiritShop, legacyProfile.spiritShop);
  assert.deepEqual(roundTrip.workshop, legacyProfile.workshop);
  assert.deepEqual(roundTrip.exploration, legacyProfile.exploration);
  assert.equal(roundTrip.lifetimeCriticalHits, 313);
  assert.deepEqual(roundTrip.futureServerField, legacyProfile.futureServerField);
  assert.equal(roundTrip.realm.version, REALM_SAVE_VERSION);
});

test('normalisation clamps invalid values but never lowers highest stage below current stage', () => {
  const normalised = normaliseLegacyNinjaProfile({
    app: 'ninja', level: -5, xp: -1, stage: 40, highestStage: 2,
    coins: -8, spirit: -3, currentStreak: -2, upgrades: { blade: -7 }
  });
  assert.equal(normalised.level, 1);
  assert.equal(normalised.xp, 0);
  assert.equal(normalised.stage, 40);
  assert.equal(normalised.highestStage, 40);
  assert.equal(normalised.coins, 0);
  assert.equal(normalised.spirit, 0);
  assert.equal(normalised.currentStreak, 0);
  assert.equal(normalised.upgrades.blade, 0);
});

test('default profile remains compatible with games_profile.php app=ninja', () => {
  const profile = createDefaultLegacyNinjaProfile();
  assert.equal(profile.app, 'ninja');
  assert.equal(profile.level, 1);
  assert.equal(profile.stage, 1);
  assert.equal(profile.highestStage, 1);
  assert.equal(profile.realm.version, REALM_SAVE_VERSION);
});

test('guest adapter writes a checksummed Realm envelope and the legacy guest profile key', () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: (key) => values.delete(key)
  };
  const adapter = new RealmSaveAdapter({ storage, now: () => 1000 });
  adapter.saveGuest(migrateLegacyNinjaProfile(legacyProfile));
  const envelope = JSON.parse(values.get(realmSaveKeys.realmV3));
  const legacy = JSON.parse(values.get(realmSaveKeys.legacyGuestProfiles)).ninja;
  assert.equal(envelope.payload.realm.version, REALM_SAVE_VERSION);
  assert.match(envelope.checksum, /^[0-9a-f]{8}$/);
  assert.equal(legacy.highestStage, 91);
  assert.equal(legacy.lifetimeCriticalHits, 313);
  assert.equal(values.has(realmSaveKeys.realmV3Journal), false);
});

test('legacy sync preserves current Realm inventory and connected module state', () => {
  const first = migrateLegacyNinjaProfile(legacyProfile);
  first.realm.inventory.materials.iron = 12;
  first.realm.inventory.tools.field_pick = 1;
  first.realm.calorieEscape = { interfaceVersion: 1 };
  const synced = migrateLegacyNinjaProfile(legacyProfileFromRealmSave(first));
  assert.equal(synced.realm.inventory.materials.iron, 12);
  assert.equal(synced.realm.inventory.tools.field_pick, 1);
  assert.deepEqual(synced.realm.calorieEscape, { interfaceVersion: 1 });
});

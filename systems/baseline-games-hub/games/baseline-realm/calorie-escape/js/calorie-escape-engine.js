import {
  ABILITIES,
  ABILITY_BY_ID,
  CALORIE_ESCAPE_SAVE_VERSION,
  LEVELS,
  LEVEL_BY_ID,
  OBSTACLE_TYPES,
  PATTERN_LIBRARY
} from '../data/calorie-escape-data.js';

const clone = (value) => JSON.parse(JSON.stringify(value));
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export function hashSeed(input) {
  let hash = 2166136261;
  const text = String(input ?? 'calorie-escape');
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function mulberry32(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6D2B79F5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

export function caloricTargetForLevel(level) {
  return 760 + Math.max(0, Number(level || 1) - 1) * 190;
}

export function createDefaultCalorieEscapeState() {
  const target = caloricTargetForLevel(1);
  return {
    version: CALORIE_ESCAPE_SAVE_VERSION,
    progressionLevel: 1,
    caloricExperienceTarget: target,
    caloricExperienceRemaining: target,
    skillPoints: 0,
    abilities: Object.fromEntries(ABILITIES.map((ability) => [ability.id, 0])),
    unlockedLevels: ['city-1'],
    completedLevels: {},
    bestScores: {},
    mastery: {},
    objectives: {},
    rankings: {},
    lifetime: {
      runs: 0,
      completions: 0,
      distance: 0,
      caloriesBurned: 0,
      cratesBroken: 0,
      materialsCollected: 0,
      hits: 0
    },
    settings: { sound: true, reducedMotion: false, slideEnabled: true },
    selectedZoneId: 'city',
    selectedLevelId: 'city-1',
    lastRun: null,
    updatedAt: Date.now()
  };
}

function cleanMap(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? { ...value } : {};
}

export function normaliseCalorieEscapeState(raw) {
  const fallback = createDefaultCalorieEscapeState();
  if (!raw || Number(raw.version) !== CALORIE_ESCAPE_SAVE_VERSION) return fallback;
  const state = { ...fallback, ...clone(raw) };
  state.progressionLevel = Math.max(1, Math.round(Number(state.progressionLevel || 1)));
  state.caloricExperienceTarget = Math.max(1, Math.round(Number(state.caloricExperienceTarget || caloricTargetForLevel(state.progressionLevel))));
  state.caloricExperienceRemaining = clamp(Math.round(Number(state.caloricExperienceRemaining ?? state.caloricExperienceTarget)), 0, state.caloricExperienceTarget);
  state.skillPoints = Math.max(0, Math.round(Number(state.skillPoints || 0)));
  state.abilities = { ...fallback.abilities, ...cleanMap(state.abilities) };
  ABILITIES.forEach((ability) => {
    state.abilities[ability.id] = clamp(Math.round(Number(state.abilities[ability.id] || 0)), 0, ability.maxRank);
  });
  state.unlockedLevels = Array.from(new Set(Array.isArray(state.unlockedLevels) ? state.unlockedLevels.filter((id) => LEVEL_BY_ID[id]) : ['city-1']));
  if (!state.unlockedLevels.includes('city-1')) state.unlockedLevels.unshift('city-1');
  state.completedLevels = cleanMap(state.completedLevels);
  state.bestScores = cleanMap(state.bestScores);
  state.mastery = cleanMap(state.mastery);
  state.objectives = cleanMap(state.objectives);
  state.rankings = cleanMap(state.rankings);
  Object.keys(state.rankings).forEach((levelId) => {
    state.rankings[levelId] = Array.isArray(state.rankings[levelId])
      ? state.rankings[levelId].map((score) => Math.max(0, Math.round(Number(score || 0)))).sort((a, b) => b - a).slice(0, 5)
      : [];
  });
  state.lifetime = { ...fallback.lifetime, ...cleanMap(state.lifetime) };
  Object.keys(state.lifetime).forEach((key) => {
    state.lifetime[key] = Math.max(0, Math.round(Number(state.lifetime[key] || 0)));
  });
  state.settings = { ...fallback.settings, ...cleanMap(state.settings) };
  state.selectedLevelId = LEVEL_BY_ID[state.selectedLevelId] ? state.selectedLevelId : 'city-1';
  state.selectedZoneId = LEVEL_BY_ID[state.selectedLevelId]?.zoneId || 'city';
  state.updatedAt = Math.max(0, Number(state.updatedAt || Date.now()));
  return state;
}

export function resolveRunModifiers(workshopEffects = {}, abilityRanks = {}) {
  const quickStep = clamp(Number(abilityRanks['quick-step'] || 0), 0, 3);
  const powerStrike = clamp(Number(abilityRanks['power-strike'] || 0), 0, 3);
  const airControl = clamp(Number(abilityRanks['air-control'] || 0), 0, 3);
  const lowProfile = clamp(Number(abilityRanks['low-profile'] || 0), 0, 3);
  return {
    laneSpeed: 7.2 + quickStep * 0.9 + Math.max(0, Number(workshopEffects.movement || 0)) * 12,
    attackDuration: 0.25 + powerStrike * 0.045,
    attackReach: 0.145 + powerStrike * 0.018,
    breakPressureRelief: 1.4 + powerStrike * 0.65,
    jumpImpulse: 455 + airControl * 34,
    jumpHoldMs: 135 + airControl * 34,
    slideDuration: 0.52 + lowProfile * 0.09,
    defence: Math.max(0, Number(workshopEffects.defence || 0)),
    stamina: Math.max(0, Number(workshopEffects.stamina || 0)),
    pressureCapacity: 100 + Math.max(0, Number(workshopEffects.stamina || 0)) * 1.25
  };
}

export function buildSpawnTimeline(levelOrId, seed = Date.now()) {
  const level = typeof levelOrId === 'string' ? LEVEL_BY_ID[levelOrId] : levelOrId;
  if (!level) throw new Error('Unknown Calorie Escape level.');
  const random = mulberry32(hashSeed(`${seed}:${level.id}`));
  const library = PATTERN_LIBRARY[level.patternTier] || PATTERN_LIBRARY[1];
  const timeline = [];
  let time = 3.2;
  let patternIndex = 0;
  while (time < level.duration - 2.4) {
    const pattern = library[Math.floor(random() * library.length)];
    const lateralBias = random() < 0.5 ? -1 : 1;
    pattern.forEach((entry, entryIndex) => {
      let lane = entry.lane;
      if (patternIndex % 4 === 3 && entryIndex === 0) lane = lateralBias;
      timeline.push({
        id: `${level.id}-${patternIndex}-${entryIndex}`,
        spawnAt: Number((time + entryIndex * 0.035).toFixed(3)),
        lane,
        type: entry.type,
        depth: 1.08,
        resolved: false,
        collected: false,
        hit: false
      });
    });
    if (patternIndex % 3 === 2) {
      const lane = [-1, 0, 1][Math.floor(random() * 3)];
      timeline.push({
        id: `${level.id}-${patternIndex}-bonus`,
        spawnAt: Number((time + level.spawnInterval * 0.52).toFixed(3)),
        lane,
        type: 'supply-token',
        depth: 1.08,
        resolved: false,
        collected: false,
        hit: false
      });
    }
    const jitter = (random() - 0.5) * 0.18;
    time += Math.max(0.68, level.spawnInterval + jitter - patternIndex * 0.0025);
    patternIndex += 1;
  }
  return timeline.sort((a, b) => a.spawnAt - b.spawnAt);
}

export function createRunSnapshot(state, levelId, workshopEffects = {}, seed = Date.now()) {
  const level = LEVEL_BY_ID[levelId];
  if (!level) throw new Error(`Unknown Calorie Escape level: ${levelId}`);
  if (!state.unlockedLevels.includes(levelId)) throw new Error(`Calorie Escape level is locked: ${levelId}`);
  const modifiers = resolveRunModifiers(workshopEffects, state.abilities);
  return {
    id: `run-${Date.now()}-${hashSeed(seed).toString(36)}`,
    levelId,
    zoneId: level.zoneId,
    seed: hashSeed(`${seed}:${Date.now()}`),
    time: 0,
    distance: 0,
    score: 0,
    combo: 0,
    bestCombo: 0,
    pressure: Math.max(8, 24 - modifiers.stamina * 0.5),
    pressureCapacity: modifiers.pressureCapacity,
    hits: 0,
    broken: 0,
    avoided: 0,
    collected: 0,
    materials: {},
    spawned: 0,
    active: true,
    completed: false,
    failed: false,
    objectiveProgress: 0,
    timeline: buildSpawnTimeline(level, seed),
    nextSpawnIndex: 0,
    modifiers
  };
}

function rankForScore(score, level) {
  const ratio = Number(score || 0) / Math.max(1, level.masteryTarget);
  if (ratio >= 1.45) return 'S';
  if (ratio >= 1.1) return 'A';
  if (ratio >= 0.78) return 'B';
  return 'C';
}

function objectiveCompleted(level, summary) {
  if (level.objective.id === 'break-crates') return summary.broken >= level.objective.target;
  if (level.objective.id === 'clean-section') return summary.hits <= level.objective.target;
  if (level.objective.id === 'pressure-control') return summary.pressure <= level.objective.target;
  return false;
}

function insertRanking(rankings, score) {
  return [...(Array.isArray(rankings) ? rankings : []), Math.max(0, Math.round(score))]
    .sort((a, b) => b - a)
    .slice(0, 5);
}

function applyCaloricExperience(state, amount) {
  let remainingBurn = Math.max(0, Math.round(amount));
  let levelsGained = 0;
  while (remainingBurn > 0) {
    if (remainingBurn < state.caloricExperienceRemaining) {
      state.caloricExperienceRemaining -= remainingBurn;
      remainingBurn = 0;
    } else {
      remainingBurn -= state.caloricExperienceRemaining;
      state.progressionLevel += 1;
      levelsGained += 1;
      state.skillPoints += 1;
      state.caloricExperienceTarget = caloricTargetForLevel(state.progressionLevel);
      state.caloricExperienceRemaining = state.caloricExperienceTarget;
    }
  }
  return levelsGained;
}

export function completeRun(stateInput, summaryInput) {
  const state = normaliseCalorieEscapeState(stateInput);
  const summary = { ...summaryInput };
  const level = LEVEL_BY_ID[summary.levelId];
  if (!level) throw new Error('Cannot complete an unknown Calorie Escape level.');
  const objective = objectiveCompleted(level, summary);
  const rank = rankForScore(summary.score, level);
  const masteryGain = Math.max(1, Math.round(summary.score / 80) + (objective ? 35 : 0));
  const caloricBurn = Math.max(level.completionCe, Math.round(level.completionCe + summary.score / 95 + (objective ? 70 : 0)));
  const levelsGained = applyCaloricExperience(state, caloricBurn);

  state.lifetime.runs += 1;
  state.lifetime.completions += 1;
  state.lifetime.distance += Math.round(summary.distance || 0);
  state.lifetime.caloriesBurned += caloricBurn;
  state.lifetime.cratesBroken += Math.round(summary.broken || 0);
  state.lifetime.materialsCollected += Object.values(summary.materials || {}).reduce((sum, amount) => sum + Number(amount || 0), 0);
  state.lifetime.hits += Math.round(summary.hits || 0);
  state.completedLevels[level.id] = Math.max(1, Number(state.completedLevels[level.id] || 0) + 1);
  state.bestScores[level.id] = Math.max(Number(state.bestScores[level.id] || 0), Math.round(summary.score || 0));
  state.mastery[level.id] = Math.max(0, Number(state.mastery[level.id] || 0)) + masteryGain;
  state.rankings[level.id] = insertRanking(state.rankings[level.id], summary.score);
  if (objective) state.objectives[level.id] = true;

  const levelIndex = LEVELS.findIndex((candidate) => candidate.id === level.id);
  const nextLevel = levelIndex >= 0 ? LEVELS[levelIndex + 1] : null;
  if (nextLevel && !state.unlockedLevels.includes(nextLevel.id)) state.unlockedLevels.push(nextLevel.id);
  state.selectedLevelId = nextLevel?.id && state.unlockedLevels.includes(nextLevel.id) ? nextLevel.id : level.id;
  state.selectedZoneId = LEVEL_BY_ID[state.selectedLevelId]?.zoneId || level.zoneId;
  state.lastRun = {
    ...clone(summary), completed: true, failed: false, objectiveCompleted: objective, rank,
    masteryGain, caloricBurn, levelsGained, finishedAt: Date.now()
  };
  state.updatedAt = Date.now();
  return { state, result: clone(state.lastRun) };
}

export function failRun(stateInput, summaryInput) {
  const state = normaliseCalorieEscapeState(stateInput);
  const summary = { ...summaryInput };
  const consolationMastery = Math.max(1, Math.round(Number(summary.score || 0) / 180));
  state.lifetime.runs += 1;
  state.lifetime.distance += Math.round(summary.distance || 0);
  state.lifetime.cratesBroken += Math.round(summary.broken || 0);
  state.lifetime.materialsCollected += Object.values(summary.materials || {}).reduce((sum, amount) => sum + Number(amount || 0), 0);
  state.lifetime.hits += Math.round(summary.hits || 0);
  state.mastery[summary.levelId] = Math.max(0, Number(state.mastery[summary.levelId] || 0)) + consolationMastery;
  state.rankings[summary.levelId] = insertRanking(state.rankings[summary.levelId], summary.score);
  state.lastRun = {
    ...clone(summary), completed: false, failed: true, objectiveCompleted: false, rank: '—',
    masteryGain: consolationMastery, caloricBurn: 0, levelsGained: 0, finishedAt: Date.now()
  };
  state.updatedAt = Date.now();
  return { state, result: clone(state.lastRun) };
}

export function trainAbility(stateInput, abilityId) {
  const state = normaliseCalorieEscapeState(stateInput);
  const ability = ABILITY_BY_ID[abilityId];
  if (!ability) return { ok: false, code: 'UNKNOWN_ABILITY', state };
  if (state.progressionLevel < ability.unlockLevel) return { ok: false, code: 'LEVEL_REQUIRED', required: ability.unlockLevel, state };
  if (state.skillPoints <= 0) return { ok: false, code: 'NO_SKILL_POINTS', state };
  const current = Number(state.abilities[ability.id] || 0);
  if (current >= ability.maxRank) return { ok: false, code: 'MAX_RANK', state };
  state.abilities[ability.id] = current + 1;
  state.skillPoints -= 1;
  state.updatedAt = Date.now();
  return { ok: true, ability, rank: state.abilities[ability.id], state };
}

export function materialRewardsFromRun(run) {
  const rewards = [];
  Object.entries(run?.materials || {}).forEach(([id, amount]) => {
    const quantity = Math.max(0, Math.round(Number(amount || 0)));
    if (quantity > 0) rewards.push({ bucket: 'materials', id, amount: quantity });
  });
  return rewards;
}

export function obstacleDefinition(id) {
  return OBSTACLE_TYPES[id] || null;
}

export const calorieEscapeEngineInternals = Object.freeze({ clone, clamp, objectiveCompleted, rankForScore, insertRanking, applyCaloricExperience });

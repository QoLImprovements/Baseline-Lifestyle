export const DARTBOARD_ORDER = Object.freeze([20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5]);

// These are the distinct games currently presented to the player. The former
// quiz-style selectors are migrated into Decision Training so they share one
// category-based question system rather than repeating the same interaction.
export const GAME_IDS = Object.freeze([
  'checkout-pressure','route-recovery','target-lock','hold-picture','distraction-resistance',
  'pressure-ladder','board-geography','routine-builder','sequence-recall','decision-training'
]);

export const LEGACY_QUESTION_GAME_IDS = Object.freeze([
  'three-dart-reset','error-pattern','relevant-information','impulse-control',
  'confidence-calibration','calm-v-rushed'
]);

export function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, Number(value) || 0));
}

export function normaliseTargetCode(value) {
  const raw = String(value ?? '').trim().toUpperCase().replace(/\s+/g, '');
  if (raw === 'BULL' || raw === 'DB' || raw === 'D25' || raw === '50') return 'BULL';
  if (raw === '25' || raw === 'OB' || raw === 'S25') return '25';
  if (raw === 'MISS' || raw === '0') return 'MISS';
  const match = raw.match(/^([SDT])?(20|1[0-9]|[1-9])$/);
  if (!match) return null;
  return `${match[1] || 'S'}${Number(match[2])}`;
}

export function scoreTarget(value) {
  const code = normaliseTargetCode(value);
  if (!code || code === 'MISS') return 0;
  if (code === 'BULL') return 50;
  if (code === '25') return 25;
  const multiplier = code[0] === 'T' ? 3 : code[0] === 'D' ? 2 : 1;
  return multiplier * Number(code.slice(1));
}

export function isDoubleTarget(value) {
  const code = normaliseTargetCode(value);
  return code === 'BULL' || Boolean(code && code.startsWith('D'));
}

export function segmentIndex(segment) {
  return DARTBOARD_ORDER.indexOf(Number(segment));
}

export function clockwiseNeighbour(segment) {
  const index = segmentIndex(segment);
  return index < 0 ? null : DARTBOARD_ORDER[(index + 1) % DARTBOARD_ORDER.length];
}

export function anticlockwiseNeighbour(segment) {
  const index = segmentIndex(segment);
  return index < 0 ? null : DARTBOARD_ORDER[(index + DARTBOARD_ORDER.length - 1) % DARTBOARD_ORDER.length];
}

export function oppositeSegment(segment) {
  const index = segmentIndex(segment);
  return index < 0 ? null : DARTBOARD_ORDER[(index + 10) % DARTBOARD_ORDER.length];
}

export function parseRouteText(value) {
  const parts = Array.isArray(value)
    ? value
    : String(value ?? '').split(/\s*(?:→|->|>|,|\/|then)\s*/i).filter((part) => String(part).trim());
  return parts.map(normaliseTargetCode);
}

export function validateRouteText(startScore, routeText, darts = 3) {
  const route = parseRouteText(routeText);
  const maxDarts = clamp(Math.trunc(darts),1,3);
  if (!route.length) return { valid:false, remaining:Math.trunc(Number(startScore)), reason:'The route contains no targets.', route:[] };
  if (route.some((code) => !code)) return { valid:false, remaining:Math.trunc(Number(startScore)), reason:'The route contains an unrecognised target.', route };
  if (route.length > maxDarts) return { valid:false, remaining:Math.trunc(Number(startScore)), reason:`Only ${maxDarts} dart${maxDarts === 1 ? '' : 's'} are available.`, route };
  return validateRoute(startScore,route);
}

export function validateRoute(startScore, route) {
  const score = Math.trunc(Number(startScore));
  const codes = Array.isArray(route) ? route.map(normaliseTargetCode) : [];
  if (!Number.isFinite(score) || score < 2 || score > 170) return { valid:false, remaining:score, reason:'Choose a score from 2 to 170.' };
  if (!codes.length || codes.some((code) => !code)) return { valid:false, remaining:score, reason:'The route contains an unrecognised target.' };
  let remaining = score;
  for (let index = 0; index < codes.length; index += 1) {
    const code = codes[index];
    remaining -= scoreTarget(code);
    const final = index === codes.length - 1;
    if (remaining < 0 || remaining === 1 || (remaining === 0 && (!final || !isDoubleTarget(code)))) {
      return { valid:false, remaining:score, reason:'That route busts or does not finish on a double.' };
    }
    if (remaining === 0) return { valid:true, remaining:0, reason:'Valid checkout route.', route:codes.slice(0,index + 1) };
  }
  return { valid:false, remaining, reason:`${remaining} remains.` };
}

const THROW_CODES = Object.freeze([
  ...DARTBOARD_ORDER.map((n) => `T${n}`),
  ...DARTBOARD_ORDER.map((n) => `D${n}`),
  ...DARTBOARD_ORDER.map((n) => `S${n}`),
  'BULL','25'
]);

export function findCheckoutRoutes(score, darts = 3, limit = 16) {
  const target = Math.trunc(Number(score));
  const maxDarts = clamp(Math.trunc(darts), 1, 3);
  if (target < 2 || target > 170) return [];
  const routes = [];
  function search(remaining, route) {
    if (routes.length >= limit || route.length >= maxDarts) return;
    for (const code of THROW_CODES) {
      const next = remaining - scoreTarget(code);
      if (next < 0 || next === 1) continue;
      const nextRoute = [...route, code];
      if (next === 0) {
        if (isDoubleTarget(code)) routes.push(nextRoute);
        continue;
      }
      search(next, nextRoute);
      if (routes.length >= limit) break;
    }
  }
  search(target, []);
  return routes.sort((a,b) => {
    const trebleA = a.filter((code) => code.startsWith('T')).length;
    const trebleB = b.filter((code) => code.startsWith('T')).length;
    return a.length - b.length || trebleA - trebleB || a.join('').localeCompare(b.join(''));
  });
}

export function remainingAfterHit(startScore, actualHit) {
  const score = Math.trunc(Number(startScore));
  const hit = normaliseTargetCode(actualHit);
  if (!hit) return { bust:true, remaining:score, scored:0 };
  const scored = scoreTarget(hit);
  const remaining = score - scored;
  return {
    bust:remaining < 2 && remaining !== 0,
    remaining:remaining < 0 || remaining === 1 ? score : remaining,
    scored
  };
}

export function arraysEqual(left, right) {
  return Array.isArray(left) && Array.isArray(right) && left.length === right.length && left.every((value,index) => value === right[index]);
}

export function sameSet(left, right) {
  const a = [...new Set(left || [])].sort();
  const b = [...new Set(right || [])].sort();
  return arraysEqual(a,b);
}

export function confidenceCalibrationError(correct, confidence) {
  const certainty = clamp(confidence, 0, 100);
  return Math.abs((correct ? 100 : 0) - certainty);
}

function emptyStats() {
  return {
    attempts:0,
    correct:0,
    currentStreak:0,
    bestStreak:0,
    cleanWinStreak:0,
    level:1,
    xp:0,
    totalXpEarned:0,
    totalMs:0,
    confidenceTotal:0,
    confidenceCount:0,
    calibrationErrorTotal:0
  };
}

export function dartsXpNeededForLevel(level) {
  const safe = Math.max(1, Math.trunc(Number(level) || 1));
  return 60 + ((safe - 1) * 35) + ((safe - 1) * (safe - 1) * 4);
}

export function dartsGameXpNeededForLevel(level) {
  const safe = Math.max(1, Math.trunc(Number(level) || 1));
  return 30 + ((safe - 1) * 18) + ((safe - 1) * (safe - 1) * 2);
}

function applyLevelGain(target, neededForLevel) {
  let levels = 0;
  while (target.xp >= neededForLevel(target.level)) {
    target.xp -= neededForLevel(target.level);
    target.level += 1;
    levels += 1;
  }
  return levels;
}

function defaultTierMap() {
  return Object.fromEntries(GAME_IDS.map((id) => [id,1]));
}

function defaultAutoNextMap() {
  return Object.fromEntries(GAME_IDS.map((id) => [id,false]));
}

function defaultDecisionProgress() {
  return Object.fromEntries(['mental-reset','evidence-reading','relevant-information','impulse-control','confidence-calibration','pace-control'].map((id) => [id,{ attempts:0, correct:0 }]));
}

function defaultDecisionHistory() {
  return Object.fromEntries(['mental-reset','evidence-reading','relevant-information','impulse-control','confidence-calibration','pace-control'].map((id) => [id,[]]));
}

export function createDefaultDartsProfile() {
  const stats = Object.fromEntries(GAME_IDS.map((id) => [id, emptyStats()]));
  return {
    version:3,
    app:'dartsfocused',
    selectedGame:GAME_IDS[0],
    level:1,
    xp:0,
    skillPoints:1,
    bank:0,
    cleanWinStreak:0,
    bestStreak:0,
    totalXpEarned:0,
    totalBankEarned:0,
    totalRounds:0,
    lastPlayedAt:0,
    stats,
    custom:{
      pressureLevel:1,
      selectedTiers:defaultTierMap(),
      autoNext:defaultAutoNextMap(),
      decisionCategoryProgress:defaultDecisionProgress(),
      decisionQuestionHistory:defaultDecisionHistory(),
      calmComparisons:[]
    }
  };
}

function cleanStats(value) {
  const source = value && typeof value === 'object' ? value : {};
  return {
    attempts:Math.max(0,Math.trunc(Number(source.attempts) || 0)),
    correct:Math.max(0,Math.trunc(Number(source.correct) || 0)),
    currentStreak:Math.max(0,Math.trunc(Number(source.currentStreak) || 0)),
    bestStreak:Math.max(0,Math.trunc(Number(source.bestStreak) || 0)),
    cleanWinStreak:Math.max(0,Math.trunc(Number(source.cleanWinStreak ?? source.currentStreak) || 0)),
    level:Math.max(1,Math.trunc(Number(source.level) || 1)),
    xp:Math.max(0,Math.trunc(Number(source.xp) || 0)),
    totalXpEarned:Math.max(0,Math.trunc(Number(source.totalXpEarned) || 0)),
    totalMs:Math.max(0,Math.trunc(Number(source.totalMs) || 0)),
    confidenceTotal:Math.max(0,Number(source.confidenceTotal) || 0),
    confidenceCount:Math.max(0,Math.trunc(Number(source.confidenceCount) || 0)),
    calibrationErrorTotal:Math.max(0,Number(source.calibrationErrorTotal) || 0)
  };
}

function mergeStats(items) {
  const cleaned = items.map(cleanStats);
  if (!cleaned.length) return emptyStats();
  return cleaned.reduce((out,item) => {
    out.attempts += item.attempts;
    out.correct += item.correct;
    out.currentStreak = Math.max(out.currentStreak,item.currentStreak);
    out.bestStreak = Math.max(out.bestStreak,item.bestStreak);
    out.cleanWinStreak = Math.max(out.cleanWinStreak,item.cleanWinStreak);
    out.level = Math.max(out.level,item.level);
    out.xp += item.xp;
    out.totalXpEarned += item.totalXpEarned;
    out.totalMs += item.totalMs;
    out.confidenceTotal += item.confidenceTotal;
    out.confidenceCount += item.confidenceCount;
    out.calibrationErrorTotal += item.calibrationErrorTotal;
    return out;
  },emptyStats());
}

function cleanDecisionHistory(value) {
  const defaults = defaultDecisionHistory();
  const source = value && typeof value === 'object' ? value : {};
  Object.keys(defaults).forEach((id) => {
    defaults[id] = Array.isArray(source[id])
      ? source[id].map((key) => String(key)).filter(Boolean).slice(-120)
      : [];
  });
  return defaults;
}

function cleanDecisionProgress(value) {
  const defaults = defaultDecisionProgress();
  const source = value && typeof value === 'object' ? value : {};
  Object.keys(defaults).forEach((id) => {
    defaults[id] = {
      attempts:Math.max(0,Math.trunc(Number(source[id]?.attempts) || 0)),
      correct:Math.max(0,Math.trunc(Number(source[id]?.correct) || 0))
    };
  });
  return defaults;
}

export function normaliseDartsProfile(value) {
  const base = createDefaultDartsProfile();
  const source = value && typeof value === 'object' ? value : {};
  const stats = {};
  for (const id of GAME_IDS) {
    if (id === 'decision-training') {
      const legacy = LEGACY_QUESTION_GAME_IDS.map((legacyId) => source.stats?.[legacyId]).filter(Boolean);
      const current = source.stats?.[id];
      stats[id] = mergeStats([current,...legacy].filter(Boolean));
    } else {
      stats[id] = cleanStats(source.stats?.[id]);
    }
  }
  const migratedSelected = LEGACY_QUESTION_GAME_IDS.includes(source.selectedGame) ? 'decision-training' : source.selectedGame;
  const selectedGame = GAME_IDS.includes(migratedSelected) ? migratedSelected : base.selectedGame;
  const selectedTiers = defaultTierMap();
  const autoNext = defaultAutoNextMap();
  GAME_IDS.forEach((id) => {
    selectedTiers[id] = clamp(Math.trunc(source.custom?.selectedTiers?.[id] || 1),1,3);
    autoNext[id] = Boolean(source.custom?.autoNext?.[id]);
  });
  return {
    version:3,
    app:'dartsfocused',
    selectedGame,
    level:Math.max(1,Math.trunc(Number(source.level) || 1)),
    xp:Math.max(0,Math.trunc(Number(source.xp) || 0)),
    skillPoints:Math.max(0,Math.trunc(Number(source.skillPoints) || 1)),
    bank:Math.max(0,Math.trunc(Number(source.bank) || 0)),
    cleanWinStreak:Math.max(0,Math.trunc(Number(source.cleanWinStreak) || 0)),
    bestStreak:Math.max(0,Math.trunc(Number(source.bestStreak) || 0)),
    totalXpEarned:Math.max(0,Math.trunc(Number(source.totalXpEarned) || 0)),
    totalBankEarned:Math.max(0,Math.trunc(Number(source.totalBankEarned) || 0)),
    totalRounds:Math.max(0,Math.trunc(Number(source.totalRounds) || 0)),
    lastPlayedAt:Math.max(0,Math.trunc(Number(source.lastPlayedAt) || 0)),
    stats,
    custom:{
      pressureLevel:clamp(Math.trunc(source.custom?.pressureLevel || 1),1,5),
      selectedTiers,
      autoNext,
      decisionCategoryProgress:cleanDecisionProgress(source.custom?.decisionCategoryProgress),
      decisionQuestionHistory:cleanDecisionHistory(source.custom?.decisionQuestionHistory),
      calmComparisons:Array.isArray(source.custom?.calmComparisons) ? source.custom.calmComparisons.slice(-30) : []
    }
  };
}

export function recordResult(profileValue, gameId, { correct, responseMs = 0, confidence = null, tier = 1, category = '' } = {}) {
  const profile = normaliseDartsProfile(profileValue);
  if (!GAME_IDS.includes(gameId)) return profile;
  const succeeded = Boolean(correct);
  const stats = profile.stats[gameId];
  stats.attempts += 1;
  stats.correct += succeeded ? 1 : 0;
  stats.currentStreak = succeeded ? stats.currentStreak + 1 : 0;
  stats.cleanWinStreak = succeeded ? stats.cleanWinStreak + 1 : 0;
  stats.bestStreak = Math.max(stats.bestStreak, stats.currentStreak);
  stats.totalMs += Math.max(0,Math.trunc(Number(responseMs) || 0));
  if (confidence !== null && Number.isFinite(Number(confidence))) {
    const certainty = clamp(confidence,0,100);
    stats.confidenceTotal += certainty;
    stats.confidenceCount += 1;
    stats.calibrationErrorTotal += confidenceCalibrationError(succeeded,certainty);
  }
  if (gameId === 'decision-training' && profile.custom.decisionCategoryProgress[category]) {
    profile.custom.decisionCategoryProgress[category].attempts += 1;
    profile.custom.decisionCategoryProgress[category].correct += succeeded ? 1 : 0;
  }

  profile.cleanWinStreak = succeeded ? profile.cleanWinStreak + 1 : 0;
  profile.bestStreak = Math.max(profile.bestStreak, profile.cleanWinStreak);
  const tierMultiplier = 1 + ((clamp(tier,1,3) - 1) * 0.22);
  const cleanBonus = Math.min(0.24, profile.cleanWinStreak * 0.04);
  const speedBonus = responseMs > 0 && responseMs <= 3000 ? 2 : responseMs > 0 && responseMs <= 6000 ? 1 : 0;
  const streakBonus = Math.min(6, Math.floor(stats.currentStreak / 2));
  const baseXp = succeeded ? 8 : 2;
  const xpGain = Math.max(1, Math.round((baseXp + speedBonus + streakBonus) * tierMultiplier * (1 + cleanBonus)));
  const gameXpGain = Math.max(1, Math.round((succeeded ? 7 : 2) * tierMultiplier * (1 + Math.min(0.20, stats.cleanWinStreak * 0.03))));
  const bankGain = succeeded ? Math.max(1, Math.round((2 + Math.floor(stats.level / 3)) * tierMultiplier * (1 + cleanBonus))) : 0;

  profile.xp += xpGain;
  profile.totalXpEarned += xpGain;
  stats.xp += gameXpGain;
  stats.totalXpEarned += gameXpGain;
  profile.bank += bankGain;
  profile.totalBankEarned += bankGain;
  profile.skillPoints += applyLevelGain(profile, dartsXpNeededForLevel);
  applyLevelGain(stats, dartsGameXpNeededForLevel);
  profile.totalRounds += 1;
  profile.lastPlayedAt = Date.now();
  return profile;
}

export function accuracyFor(stats) {
  return stats?.attempts ? Math.round((stats.correct / stats.attempts) * 100) : 0;
}

export function averageResponseMs(stats) {
  return stats?.attempts ? Math.round(stats.totalMs / stats.attempts) : 0;
}

export function calibrationScore(stats) {
  if (!stats?.confidenceCount) return null;
  return Math.round(100 - stats.calibrationErrorTotal / stats.confidenceCount);
}

export function realmContributionForDarts(profileValue) {
  const profile = normaliseDartsProfile(profileValue);
  const levels = Object.fromEntries(GAME_IDS.map((id) => [id, profile.stats[id].level]));
  const aboveOne = (id) => Math.max(0, levels[id] - 1);
  const contribution = {
    level:profile.level,
    attackMult:1,
    critChance:0,
    offlineGainMult:1,
    upgradeCostMult:1,
    bossDamageMult:1,
    passiveEfficiencyMult:1,
    enemyRevealChance:0,
    clueDropChance:0,
    coinGainMult:1,
    manualDamageMult:1,
    shurikenDamageMult:1,
    linkedLevels:profile.level + GAME_IDS.reduce((sum,id) => sum + aboveOne(id), 0),
    unlockedTraits:[]
  };

  contribution.bossDamageMult += Math.min(.07, aboveOne('checkout-pressure') * .007);
  contribution.upgradeCostMult -= Math.min(.05, aboveOne('route-recovery') * .005);
  contribution.critChance += Math.min(.05, aboveOne('target-lock') * .005);
  contribution.enemyRevealChance += Math.min(.07, aboveOne('hold-picture') * .007);
  contribution.passiveEfficiencyMult += Math.min(.06, aboveOne('distraction-resistance') * .006);
  contribution.attackMult += Math.min(.06, aboveOne('pressure-ladder') * .006);
  contribution.clueDropChance += Math.min(.06, aboveOne('board-geography') * .006);
  contribution.offlineGainMult += Math.min(.06, aboveOne('routine-builder') * .006);
  contribution.shurikenDamageMult += Math.min(.09, aboveOne('sequence-recall') * .009);
  contribution.coinGainMult += Math.min(.06, aboveOne('decision-training') * .006);
  contribution.manualDamageMult += Math.min(.05, aboveOne('decision-training') * .005);
  contribution.critChance += Math.min(.025, aboveOne('decision-training') * .0025);

  if (profile.level >= 5) contribution.unlockedTraits.push('Darts Focused: Match Composure (+2% attack and coin gain)');
  if (profile.level >= 5) { contribution.attackMult += .02; contribution.coinGainMult += .02; }
  if (profile.level >= 10) contribution.unlockedTraits.push('Darts Focused: Route Discipline (+3% boss and manual damage)');
  if (profile.level >= 10) { contribution.bossDamageMult += .03; contribution.manualDamageMult += .03; }
  if (profile.level >= 20) contribution.unlockedTraits.push('Darts Focused: Pressure Mastery (+4% shuriken and passive efficiency)');
  if (profile.level >= 20) { contribution.shurikenDamageMult += .04; contribution.passiveEfficiencyMult += .04; }

  contribution.attackMult = clamp(contribution.attackMult,1,1.14);
  contribution.critChance = clamp(contribution.critChance,0,.11);
  contribution.offlineGainMult = clamp(contribution.offlineGainMult,1,1.12);
  contribution.upgradeCostMult = clamp(contribution.upgradeCostMult,.90,1);
  contribution.bossDamageMult = clamp(contribution.bossDamageMult,1,1.13);
  contribution.passiveEfficiencyMult = clamp(contribution.passiveEfficiencyMult,1,1.12);
  contribution.enemyRevealChance = clamp(contribution.enemyRevealChance,0,.12);
  contribution.clueDropChance = clamp(contribution.clueDropChance,0,.10);
  contribution.coinGainMult = clamp(contribution.coinGainMult,1,1.13);
  contribution.manualDamageMult = clamp(contribution.manualDamageMult,1,1.13);
  contribution.shurikenDamageMult = clamp(contribution.shurikenDamageMult,1,1.13);
  return contribution;
}

export function seededPick(items, random = Math.random) {
  if (!Array.isArray(items) || !items.length) return null;
  return items[Math.floor(clamp(random(),0,.999999) * items.length)];
}

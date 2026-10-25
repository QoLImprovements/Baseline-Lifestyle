(function(global){
  'use strict';

  if(global.BASELINE_GAMES_PROFILE_RULES) return;

  function create(options={}){
    const config=options.config || {};
    const progression=options.progression || {};
    const evaluateWordGuess=options.evaluateWordGuess;
    const trackCoinNormaliseSpeedPercent=options.normaliseTrackCoinSpeedPercent;
    const TRACKCOIN_BASE_SPEED_PERCENT=Math.max(1,Math.round(Number(options.trackCoinBaseSpeedPercent||100)));

    if(typeof evaluateWordGuess!=='function') throw new Error('games_profile_word_evaluator_missing');
    if(typeof trackCoinNormaliseSpeedPercent!=='function') throw new Error('games_profile_trackcoin_speed_normaliser_missing');

    const {
      PAIRS_CARD_THEMES,PAIRS_TIERS,PAIRS_SKILLS,
      MAKE24_TIERS,MAKE24_SKILLS,
      WORD_TIERS,WORD_SKILLS,
      RULESHIFT_TIERS,RULESHIFT_SKILLS,
      TRACKCOIN_TIERS,TRACKCOIN_SKILLS
    }=config;
    const {refundLockedSkills,applyLevelCurve,reconcileSkillPoints}=progression;

    if(typeof refundLockedSkills!=='function'||typeof applyLevelCurve!=='function'||typeof reconcileSkillPoints!=='function'){
      throw new Error('games_profile_progression_authority_missing');
    }

  function defaultPairsProfile(){
    return {
      app:'pairs', bank:0, xp:0, level:1, skillPoints:1, boardsCleared:0, gamesPlayed:0, currentStreak:0, bestStreak:0, cleanWinStreak:0, lastRoundXp:0,
      skills:{ insight:0, flow:0, banker:0, recall:0, tempo:0 }, selectedTier:'starter', cardTheme:'woodland', activeRound:null
    };
  }

  function defaultMake24Profile(){
    return {
      app:'make24', bank:0, xp:0, level:1, skillPoints:1, puzzlesSolved:0, gamesPlayed:0, cleanWinStreak:0, lastRoundXp:0, roundSeedCounter:0,
      skills:{ clarity:0, flow:0, banker:0, reserve:0, precision:0 }, selectedTier:'starter', activeRound:null
    };
  }

  function defaultWordProfile(){
    return {
      app:'detectword', bank:0, xp:0, level:1, skillPoints:1, wordsSolved:0, gamesPlayed:0, currentStreak:0, bestStreak:0, cleanWinStreak:0, lastRoundXp:0, activeRound:null,
      skills:{ flow:0, banker:0, reserve:0, focus:0 }, selectedTier:'tier3'
    };
  }

  function defaultRuleShiftProfile(){
    return {
      app:'ruleshift', bank:0, xp:0, level:1, skillPoints:1,
      gamesPlayed:0, correctAnswers:0, wrongAnswers:0, currentStreak:0, bestStreak:0, cleanWinStreak:0, lastRoundXp:0,
      selectedTier:'starter', skills:{ focus:0, banker:0, recovery:0, adapt:0 }, activeRound:null
    };
  }

  function defaultTrackCoinProfile(){
    return {
      app:'trackcoin',
      xp:0, level:1, coins:0, selectedTier:'tier1', currentTier:'tier1', highestUnlockedTier:'tier1',
      bestStreak:0, currentStreak:0, totalCorrect:0, totalRounds:0, totalXpEarned:0, totalCoinsEarned:0, cleanWinStreak:0, lastRoundXp:0,
      trackCoinSpeedPercent:TRACKCOIN_BASE_SPEED_PERCENT, bestTrackCoinSpeedPercent:TRACKCOIN_BASE_SPEED_PERCENT,
      bestAccuracy:0, perfectMiniSet:0, totalMiniSetsCleared:0, skillPoints:1,
      skills:{ read:0, banker:0, flow:0, discipline:0, steal:0 }, activeRound:null
    };
  }

  function normalisePairsProfile(data){
    const base = defaultPairsProfile();
    const merged = Object.assign({}, base, data || {});
    merged.bank = Math.max(0, Math.round(Number(merged.bank || 0)));
    merged.xp = Math.max(0, Math.round(Number(merged.xp || 0)));
    merged.level = Math.max(1, Math.round(Number(merged.level || 1)));
    merged.skillPoints = Math.max(0, Math.round(Number(merged.skillPoints || 0)));
    merged.boardsCleared = Math.max(0, Math.round(Number(merged.boardsCleared || 0)));
    merged.gamesPlayed = Math.max(0, Math.round(Number(merged.gamesPlayed || 0)));
    merged.currentStreak = Math.max(0, Math.round(Number(merged.currentStreak || 0)));
    merged.bestStreak = Math.max(0, Math.round(Number(merged.bestStreak || 0)));
    merged.cleanWinStreak = Math.max(0, Math.round(Number(merged.cleanWinStreak || 0)));
    merged.lastRoundXp = Math.max(0, Math.round(Number(merged.lastRoundXp || 0)));
    const availablePairThemes = PAIRS_CARD_THEMES.filter(theme => merged.level >= theme.unlockLevel);
    if(!availablePairThemes.some(theme => theme.id === merged.cardTheme)) merged.cardTheme = availablePairThemes[0]?.id || 'woodland';
    merged.skills = Object.assign({}, base.skills, merged.skills || {});
    refundLockedSkills(merged, PAIRS_SKILLS);
    applyLevelCurve(merged);
    reconcileSkillPoints(merged, PAIRS_SKILLS);
    const unlocked = PAIRS_TIERS.filter(t => merged.level >= t.unlockLevel);
    if(!unlocked.some(t => t.id === merged.selectedTier)) merged.selectedTier = unlocked.slice(-1)[0].id;
    return merged;
  }

  function normaliseMake24Profile(data){
    const base = defaultMake24Profile();
    const merged = Object.assign({}, base, data || {});
    merged.bank = Math.max(0, Math.round(Number(merged.bank || 0)));
    merged.xp = Math.max(0, Math.round(Number(merged.xp || 0)));
    merged.level = Math.max(1, Math.round(Number(merged.level || 1)));
    merged.skillPoints = Math.max(0, Math.round(Number(merged.skillPoints || 0)));
    merged.puzzlesSolved = Math.max(0, Math.round(Number(merged.puzzlesSolved || 0)));
    merged.gamesPlayed = Math.max(0, Math.round(Number(merged.gamesPlayed || 0)));
    merged.cleanWinStreak = Math.max(0, Math.round(Number(merged.cleanWinStreak || 0)));
    merged.lastRoundXp = Math.max(0, Math.round(Number(merged.lastRoundXp || 0)));
    merged.roundSeedCounter = Math.max(0, Math.round(Number(merged.roundSeedCounter || 0)));
    merged.skills = Object.assign({}, base.skills, merged.skills || {});
    refundLockedSkills(merged, MAKE24_SKILLS);
    applyLevelCurve(merged);
    reconcileSkillPoints(merged, MAKE24_SKILLS);
    const unlocked = MAKE24_TIERS.filter(t => merged.level >= t.unlockLevel);
    if(!unlocked.some(t => t.id === merged.selectedTier)) merged.selectedTier = unlocked.slice(-1)[0].id;
    return merged;
  }

  function normaliseWordProfile(data){
    const base = defaultWordProfile();
    const merged = Object.assign({}, base, data || {});
    merged.bank = Math.max(0, Math.round(Number(merged.bank || 0)));
    merged.xp = Math.max(0, Math.round(Number(merged.xp || 0)));
    merged.level = Math.max(1, Math.round(Number(merged.level || 1)));
    merged.skillPoints = Math.max(0, Math.round(Number(merged.skillPoints || 0)));
    merged.wordsSolved = Math.max(0, Math.round(Number(merged.wordsSolved || 0)));
    merged.gamesPlayed = Math.max(0, Math.round(Number(merged.gamesPlayed || 0)));
    merged.cleanWinStreak = Math.max(0, Math.round(Number(merged.cleanWinStreak || 0)));
    merged.lastRoundXp = Math.max(0, Math.round(Number(merged.lastRoundXp || 0)));
    merged.currentStreak = Math.max(0, Math.round(Number(merged.currentStreak || 0)));
    merged.bestStreak = Math.max(0, Math.round(Number(merged.bestStreak || 0)));
    if(merged.activeRound && typeof merged.activeRound === 'object'){
      const secret = String(merged.activeRound.secret || '').toLowerCase();
      const tierId = String(merged.activeRound.tierId || merged.selectedTier || '');
      const tier = WORD_TIERS.find(item => item.id === tierId);
      if(tier && /^[a-z]+$/.test(secret) && secret.length === tier.letters){
        const guesses = Array.isArray(merged.activeRound.guesses) ? merged.activeRound.guesses.slice(0, 12).map(function(entry){
          const word = String(entry && entry.word || '').toLowerCase();
          return /^[a-z]+$/.test(word) && word.length === tier.letters ? { word:word, evaluation:evaluateWordGuess(word, secret) } : null;
        }).filter(Boolean) : [];
        merged.activeRound = {
          tierId:tier.id,
          secret:secret,
          guesses:guesses,
          maxGuesses:Math.max(1, Math.min(12, Math.round(Number(merged.activeRound.maxGuesses || (6 + (merged.skills?.reserve || 0)))))),
          roundBank:Math.round(Number(merged.activeRound.roundBank || 0)),
          draftGuess:String(merged.activeRound.draftGuess || '').slice(0, tier.letters),
          lastMessage:String(merged.activeRound.lastMessage || ('Round restored. Submit a ' + tier.letters + '-letter guess.')).slice(0, 240),
          hadFailure:Boolean(merged.activeRound.hadFailure)
        };
      }else merged.activeRound = null;
    }else merged.activeRound = null;
    merged.skills = Object.assign({}, base.skills, merged.skills || {});
    try{ delete merged.skills.lexicon; }catch(_e){}
    refundLockedSkills(merged, WORD_SKILLS);
    applyLevelCurve(merged);
    reconcileSkillPoints(merged, WORD_SKILLS);
    const unlocked = WORD_TIERS.filter(t => merged.level >= t.unlockLevel);
    if(!unlocked.some(t => t.id === merged.selectedTier)) merged.selectedTier = unlocked.slice(-1)[0].id;
    return merged;
  }

  function normaliseRuleShiftProfile(data){
    const base = defaultRuleShiftProfile();
    const merged = Object.assign({}, base, data || {});
    merged.bank = Math.max(0, Math.round(Number(merged.bank || 0)));
    merged.xp = Math.max(0, Math.round(Number(merged.xp || 0)));
    merged.level = Math.max(1, Math.round(Number(merged.level || 1)));
    merged.skillPoints = Math.max(0, Math.round(Number(merged.skillPoints || 0)));
    merged.gamesPlayed = Math.max(0, Math.round(Number(merged.gamesPlayed || 0)));
    merged.correctAnswers = Math.max(0, Math.round(Number(merged.correctAnswers || 0)));
    merged.wrongAnswers = Math.max(0, Math.round(Number(merged.wrongAnswers || 0)));
    merged.currentStreak = Math.max(0, Math.round(Number(merged.currentStreak || 0)));
    merged.bestStreak = Math.max(0, Math.round(Number(merged.bestStreak || 0)));
    merged.cleanWinStreak = Math.max(0, Math.round(Number(merged.cleanWinStreak || 0)));
    merged.lastRoundXp = Math.max(0, Math.round(Number(merged.lastRoundXp || 0)));
    merged.skills = Object.assign({}, base.skills, merged.skills || {});
    refundLockedSkills(merged, RULESHIFT_SKILLS);
    applyLevelCurve(merged);
    reconcileSkillPoints(merged, RULESHIFT_SKILLS);
    const unlocked = RULESHIFT_TIERS.filter(t => merged.level >= t.unlockLevel);
    if(!unlocked.some(t => t.id === merged.selectedTier)) merged.selectedTier = unlocked.slice(-1)[0].id;
    return merged;
  }

  function highestUnlockedTrackCoinTier(profile){
    return TRACKCOIN_TIERS.reduce((acc, tier)=> profile.level >= tier.unlockLevel ? tier.id : acc, 'tier1');
  }

  function normaliseTrackCoinProfile(data){
    const base = defaultTrackCoinProfile();
    const merged = Object.assign({}, base, data || {});
    merged.xp = Math.max(0, Math.round(Number(merged.xp || 0)));
    merged.level = Math.max(1, Math.round(Number(merged.level || 1)));
    merged.coins = Math.max(0, Math.round(Number(merged.coins || 0)));
    merged.skillPoints = Math.max(0, Math.round(Number(merged.skillPoints || 0)));
    merged.currentStreak = Math.max(0, Math.round(Number(merged.currentStreak || 0)));
    merged.bestStreak = Math.max(0, Math.round(Number(merged.bestStreak || 0)));
    merged.totalCorrect = Math.max(0, Math.round(Number(merged.totalCorrect || 0)));
    merged.totalRounds = Math.max(0, Math.round(Number(merged.totalRounds || 0)));
    merged.totalXpEarned = Math.max(0, Math.round(Number(merged.totalXpEarned || 0)));
    merged.totalCoinsEarned = Math.max(0, Math.round(Number(merged.totalCoinsEarned || 0)));
    merged.cleanWinStreak = Math.max(0, Math.round(Number(merged.cleanWinStreak || 0)));
    merged.lastRoundXp = Math.max(0, Math.round(Number(merged.lastRoundXp || 0)));
    merged.trackCoinSpeedPercent = trackCoinNormaliseSpeedPercent(merged.trackCoinSpeedPercent || TRACKCOIN_BASE_SPEED_PERCENT);
    merged.bestTrackCoinSpeedPercent = Math.max(TRACKCOIN_BASE_SPEED_PERCENT, trackCoinNormaliseSpeedPercent(merged.bestTrackCoinSpeedPercent || merged.trackCoinSpeedPercent || TRACKCOIN_BASE_SPEED_PERCENT));
    merged.bestAccuracy = Math.max(0, Number(merged.bestAccuracy || 0));
    merged.perfectMiniSet = Math.max(0, Math.round(Number(merged.perfectMiniSet || 0)));
    merged.totalMiniSetsCleared = Math.max(0, Math.round(Number(merged.totalMiniSetsCleared || 0)));
    merged.skills = Object.assign({}, base.skills, merged.skills || {});
    refundLockedSkills(merged, TRACKCOIN_SKILLS);
    applyLevelCurve(merged);
    reconcileSkillPoints(merged, TRACKCOIN_SKILLS);
    merged.highestUnlockedTier = highestUnlockedTrackCoinTier(merged);
    const selectedTier = TRACKCOIN_TIERS.find(t => t.id === merged.selectedTier && merged.level >= t.unlockLevel);
    merged.selectedTier = selectedTier ? selectedTier.id : merged.highestUnlockedTier;
    merged.currentTier = merged.selectedTier;
    return merged;
  }

    return Object.freeze({
      defaultPairsProfile:defaultPairsProfile,
      defaultMake24Profile:defaultMake24Profile,
      defaultWordProfile:defaultWordProfile,
      defaultRuleShiftProfile:defaultRuleShiftProfile,
      defaultTrackCoinProfile:defaultTrackCoinProfile,
      normalisePairsProfile:normalisePairsProfile,
      normaliseMake24Profile:normaliseMake24Profile,
      normaliseWordProfile:normaliseWordProfile,
      normaliseRuleShiftProfile:normaliseRuleShiftProfile,
      normaliseTrackCoinProfile:normaliseTrackCoinProfile,
      highestUnlockedTrackCoinTier:highestUnlockedTrackCoinTier
    });
  }

  global.BASELINE_GAMES_PROFILE_RULES=Object.freeze({version:1,create:create});
})(window);

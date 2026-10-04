(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const createInitialState = options.createInitialState;
    const formatPersonName = options.formatPersonName;
    const clampRating = options.clampRating;
    const normalizeKnownLoginName = options.normalizeKnownLoginName;
    const inferStoredPlayerMatchCount = options.inferStoredPlayerMatchCount;
    const ensureRuleAdminShape = options.ensureRuleAdminShape;

    function hydrate(parsed){
      const base = createInitialState();
      parsed = parsed && typeof parsed === 'object' ? parsed : {};
      const storedMatches = Array.isArray(parsed.matches) ? parsed.matches : [];
      const storedPlayers = Array.isArray(parsed.players) ? parsed.players : [];
      const normalizedPlayers = storedPlayers.map(function(player){
        return Object.assign({}, player, {
          name: formatPersonName(player && player.name),
          rating: clampRating(player && (player.playerRating != null ? player.playerRating : player.rating)),
          playerRating: clampRating(player && (player.playerRating != null ? player.playerRating : player.rating)),
          loginUsername: normalizeKnownLoginName(player && (player.loginUsername || player.login || player.username || '')),
          loginUserId: String(player && (player.loginUserId || player.linkedUserId || player.userId || player.uid || '') || '').trim(),
          loginEmail: String(player && (player.loginEmail || player.email || '') || '').trim(),
          badmintonSessionsAdmin: !!(player && (player.badmintonSessionsAdmin || player.isBadmintonAdmin || player.badmintonAdmin)),
          matchCount: Number.isFinite(Number(player && player.matchCount))
            ? Number(player.matchCount)
            : inferStoredPlayerMatchCount(player, storedMatches),
          doublesDaySinglesOptOut: !!(player && player.doublesDaySinglesOptOut),
          doublesDaySoloOptOut: !!(player && player.doublesDaySoloOptOut)
        });
      });

      return {
        version: parsed.version || base.version,
        sessionStartedAt: parsed.sessionStartedAt || base.sessionStartedAt,
        localUpdatedAt: Number(parsed.localUpdatedAt || 0) || base.localUpdatedAt,
        players: normalizedPlayers,
        pairRatings: parsed.pairRatings && typeof parsed.pairRatings === 'object' ? parsed.pairRatings : {},
        oneVsTwoRatings: parsed.oneVsTwoRatings && typeof parsed.oneVsTwoRatings === 'object' ? parsed.oneVsTwoRatings : {},
        approvedAdminUsernames: Array.isArray(parsed.approvedAdminUsernames) ? parsed.approvedAdminUsernames : [],
        matches: storedMatches,
        matchupMemory: parsed.matchupMemory && typeof parsed.matchupMemory === 'object' ? parsed.matchupMemory : {},
        pairSummary: parsed.pairSummary && typeof parsed.pairSummary === 'object' ? parsed.pairSummary : {},
        hardshipRecords: parsed.hardshipRecords && typeof parsed.hardshipRecords === 'object'
          ? parsed.hardshipRecords
          : (parsed.plan && parsed.plan.activeHardships && typeof parsed.plan.activeHardships === 'object'
            ? parsed.plan.activeHardships
            : {}),
        ruleAdmin: ensureRuleAdminShape(parsed.ruleAdmin),
        plan: Object.assign({}, base.plan, parsed.plan || {}, {
          attendance: Number(parsed.plan && parsed.plan.attendance || 0),
          attendingPlayerIds: Array.isArray(parsed.plan && parsed.plan.attendingPlayerIds)
            ? parsed.plan.attendingPlayerIds
            : [],
          courtCount: Math.max(1, Math.min(8, Math.round(Number(parsed.plan && parsed.plan.courtCount || base.plan.courtCount || 4) || 4))),
          sitOutCounts: parsed.plan && typeof parsed.plan.sitOutCounts === 'object' && parsed.plan.sitOutCounts
            ? parsed.plan.sitOutCounts
            : {},
          lastSitOutPlayerIds: Array.isArray(parsed.plan && parsed.plan.lastSitOutPlayerIds)
            ? parsed.plan.lastSitOutPlayerIds
            : [],
          currentSitOutPlayerIds: Array.isArray(parsed.plan && parsed.plan.currentSitOutPlayerIds)
            ? parsed.plan.currentSitOutPlayerIds
            : [],
          currentCircumstantialSitOutPlayerIds: Array.isArray(parsed.plan && parsed.plan.currentCircumstantialSitOutPlayerIds)
            ? parsed.plan.currentCircumstantialSitOutPlayerIds
            : (Array.isArray(parsed.plan && parsed.plan.currentSitOutPlayerIds) ? parsed.plan.currentSitOutPlayerIds : []),
          currentOptionalSitOutPlayerIds: Array.isArray(parsed.plan && parsed.plan.currentOptionalSitOutPlayerIds)
            ? parsed.plan.currentOptionalSitOutPlayerIds
            : [],
          sessionPlayCounts: parsed.plan && parsed.plan.sessionPlayCounts && typeof parsed.plan.sessionPlayCounts === 'object'
            ? parsed.plan.sessionPlayCounts
            : {},
          sessionPairCounts: parsed.plan && parsed.plan.sessionPairCounts && typeof parsed.plan.sessionPairCounts === 'object'
            ? parsed.plan.sessionPairCounts
            : {},
          sessionOpponentCounts: parsed.plan && parsed.plan.sessionOpponentCounts && typeof parsed.plan.sessionOpponentCounts === 'object'
            ? parsed.plan.sessionOpponentCounts
            : {},
          sessionSolo2v1Counts: parsed.plan && parsed.plan.sessionSolo2v1Counts && typeof parsed.plan.sessionSolo2v1Counts === 'object'
            ? parsed.plan.sessionSolo2v1Counts
            : {},
          generationIndex: Math.max(0, Math.round(Number(parsed.plan && parsed.plan.generationIndex || 0) || 0)),
          currentSavedCourtKeys: Array.isArray(parsed.plan && parsed.plan.currentSavedCourtKeys)
            ? parsed.plan.currentSavedCourtKeys
            : [],
          currentSetReadyForNext: !!(parsed.plan && parsed.plan.currentSetReadyForNext),
          finished: Array.isArray(parsed.plan && parsed.plan.finished) ? parsed.plan.finished : [],
          activeHardships: parsed.plan && parsed.plan.activeHardships && typeof parsed.plan.activeHardships === 'object'
            ? parsed.plan.activeHardships
            : {},
          specialFourPlayerIndex: Math.max(0, Math.round(Number(parsed.plan && parsed.plan.specialFourPlayerIndex || 0) || 0)),
          twoPlayerFlipIndex: Math.max(0, Math.round(Number(parsed.plan && parsed.plan.twoPlayerFlipIndex || 0) || 0)),
          currentGenerationToken: String(parsed.plan && parsed.plan.currentGenerationToken || ''),
          blankCurrentScoreInputs: !!(parsed.plan && parsed.plan.blankCurrentScoreInputs)
        })
      };
    }

    return Object.freeze({ hydrate:hydrate });
  }

  global.BASELINE_BADMINTON_STATE_HYDRATION = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);

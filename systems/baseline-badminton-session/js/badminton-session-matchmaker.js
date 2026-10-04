(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const getState = options.getState;
    const getSessionPlayCount = options.getSessionPlayCount;
    const getSitOutCount = options.getSitOutCount;
    const advanceSpecialFourPlayerIndex = options.advanceSpecialFourPlayerIndex;
    const isSpecialFourPlayerLadder = options.isSpecialFourPlayerLadder;
    const getPairIdFromPlayers = options.getPairIdFromPlayers;
    const getOpponentMemoryKey = options.getOpponentMemoryKey;
    const getLayoutPriorityValue = options.getLayoutPriorityValue;
    const enumerateLayouts = options.enumerateLayouts;
    const makeCourtRespectingOptOuts = options.makeCourtRespectingOptOuts;
    const buildMatchupKey = options.buildMatchupKey;
    const scoreCandidate = options.scoreCandidate;
    const makeCourt = options.makeCourt;
    const getDoublesDayCounts = options.getDoublesDayCounts;
    const normaliseCourtLimit = options.normaliseCourtLimit;
    const resetUnsubmittedCourtScoreDraft = options.resetUnsubmittedCourtScoreDraft;
    const syncCurrentSitOutUnion = options.syncCurrentSitOutUnion;
    const orderCourtsByLadder = options.orderCourtsByLadder;
    const evaluateCourtRestrictions = options.evaluateCourtRestrictions;
    const getSideRatingForCourt = options.getSideRatingForCourt;
    const attachVariableBasePlayers = options.attachVariableBasePlayers;


  function stableGenerationHash(value){
    const text = String(value || '');
    let hash = 2166136261;
    for(let i = 0; i < text.length; i += 1){
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }


  function orderPlayersForGeneration(players, salt){
    const generation = Math.max(0, Math.round(Number(getState().plan.generationIndex || 0)));
    const key = String(generation) + '::' + String(salt || 0);
    return (players || []).slice().sort(function(a, b){
      const playDiff = getSessionPlayCount(a.id) - getSessionPlayCount(b.id);
      if(playDiff) return playDiff;
      const hashDiff = stableGenerationHash(key + '::' + a.id) - stableGenerationHash(key + '::' + b.id);
      if(hashDiff) return hashDiff;
      return String(a.id).localeCompare(String(b.id));
    });
  }


  function chooseSitOutPlayers(attendingPlayers, benchCount){
    if(benchCount <= 0) return [];
    const protectedIds = new Set(Array.isArray(getState().plan.lastSitOutPlayerIds) ? getState().plan.lastSitOutPlayerIds : []);
    const compare = function(a, b){
      const aCount = getSitOutCount(a.id);
      const bCount = getSitOutCount(b.id);
      if(aCount !== bCount) return aCount - bCount;
      const playDiff = getSessionPlayCount(b.id) - getSessionPlayCount(a.id);
      if(playDiff) return playDiff;
      return String(a.id).localeCompare(String(b.id));
    };
    const fresh = attendingPlayers.filter(player => !protectedIds.has(player.id)).sort(compare);
    const protectedPool = attendingPlayers.filter(player => protectedIds.has(player.id)).sort(compare);
    return fresh.concat(protectedPool).slice(0, benchCount);
  }


  function buildSpecialFourPlayerSequence(attendingPlayers, sequenceIndex){
    const players = attendingPlayers.slice(0, 4);
    const doublesBatches = [
      [{ kind:'doubles', side1:{ kind:'doubles', players:[players[0], players[1]] }, side2:{ kind:'doubles', players:[players[2], players[3]] } }],
      [{ kind:'doubles', side1:{ kind:'doubles', players:[players[0], players[2]] }, side2:{ kind:'doubles', players:[players[1], players[3]] } }],
      [{ kind:'doubles', side1:{ kind:'doubles', players:[players[0], players[3]] }, side2:{ kind:'doubles', players:[players[1], players[2]] } }],
      [{ kind:'doubles', side1:{ kind:'doubles', players:[players[2], players[3]] }, side2:{ kind:'doubles', players:[players[0], players[1]] } }]
    ];
    const singlesBatches = [
      [
        { kind:'singles', side1:{ kind:'singles', players:[players[0]] }, side2:{ kind:'singles', players:[players[1]] } },
        { kind:'singles', side1:{ kind:'singles', players:[players[2]] }, side2:{ kind:'singles', players:[players[3]] } }
      ],
      [
        { kind:'singles', side1:{ kind:'singles', players:[players[0]] }, side2:{ kind:'singles', players:[players[2]] } },
        { kind:'singles', side1:{ kind:'singles', players:[players[1]] }, side2:{ kind:'singles', players:[players[3]] } }
      ],
      [
        { kind:'singles', side1:{ kind:'singles', players:[players[0]] }, side2:{ kind:'singles', players:[players[3]] } },
        { kind:'singles', side1:{ kind:'singles', players:[players[1]] }, side2:{ kind:'singles', players:[players[2]] } }
      ]
    ];
    const batches = doublesBatches.concat(singlesBatches);
    return batches[((sequenceIndex % batches.length) + batches.length) % batches.length].map(court => JSON.parse(JSON.stringify(court)));
  }


  function prepareSpecialFourPlayerIndexForManualGenerate(attendingPlayers, format){
    if(isSpecialFourPlayerLadder(attendingPlayers, format)){
      if(Array.isArray(getState().plan.current) && getState().plan.current.length){
        advanceSpecialFourPlayerIndex(attendingPlayers, format);
      }else{
        getState().plan.specialFourPlayerIndex = ((Math.round(Number(getState().plan.specialFourPlayerIndex || 0)) || 0) % 4 + 4) % 4;
      }
      return;
    }
    getState().plan.specialFourPlayerIndex = 0;
  }


  function getCourtRotationPenalty(court){
    let penalty = 0;
    [court.side1, court.side2].forEach(function(side){
      const players = side && Array.isArray(side.players) ? side.players : [];
      if(players.length === 2){
        const pairId = getPairIdFromPlayers(players);
        penalty += Number(getState().plan.sessionPairCounts && getState().plan.sessionPairCounts[pairId] || 0) * 18;
      }
    });
    const side1Players = court.side1 && court.side1.players ? court.side1.players : [];
    const side2Players = court.side2 && court.side2.players ? court.side2.players : [];
    side1Players.forEach(function(a){
      side2Players.forEach(function(b){
        const key = getOpponentMemoryKey(a.id, b.id);
        penalty += Number(getState().plan.sessionOpponentCounts && getState().plan.sessionOpponentCounts[key] || 0) * 4;
      });
    });
    if(court.kind === '2v1'){
      const solo = side1Players.length === 1 ? side1Players[0] : (side2Players.length === 1 ? side2Players[0] : null);
      if(solo) penalty += Number(getState().plan.sessionSolo2v1Counts && getState().plan.sessionSolo2v1Counts[solo.id] || 0) * 14;
    }
    return penalty;
  }


  function choosePreferredLayout(layouts, format){
    if(!layouts.length) return null;
    const top = layouts[0];
    const targetPriority = getLayoutPriorityValue(top, format);
    const candidates = layouts.filter(layout =>
      layout.used === top.used &&
      layout.courts === top.courts &&
      getLayoutPriorityValue(layout, format) === targetPriority
    );
    return candidates.slice().sort(function(a, b){
      return JSON.stringify(a).localeCompare(JSON.stringify(b));
    })[0] || top;
  }


  function buildCandidate(attendingPlayers, format, usedSet, maxCourts, attemptIndex){
    const layouts = enumerateLayouts(attendingPlayers.length, format, maxCourts);
    const layout = choosePreferredLayout(layouts, format) || layouts[0];
    if(!layout) return { courts: [], score: -Infinity, sitOutPlayers: [] };
    const benchPlayers = chooseSitOutPlayers(attendingPlayers, Math.max(0, attendingPlayers.length - layout.used));
    const sitOutIds = new Set(benchPlayers.map(player => player.id));
    const selected = orderPlayersForGeneration(attendingPlayers.filter(player => !sitOutIds.has(player.id)), attemptIndex || 0);
    const order = format === 'doubles'
      ? [
        ...Array(layout.doubles).fill('doubles'),
        ...Array(layout.twoVsOne).fill('2v1'),
        ...Array(layout.singles).fill('singles')
      ]
      : [
        ...Array(layout.singles).fill('singles'),
        ...Array(layout.twoVsOne).fill('2v1'),
        ...Array(layout.doubles).fill('doubles')
      ];
    const courts = [];
    let cursor = 0;
    order.forEach(kind => {
      const size = kind === 'doubles' ? 4 : (kind === 'singles' ? 2 : 3);
      const group = selected.slice(cursor, cursor + size);
      cursor += size;
      if(group.length !== size) return;
      const court = makeCourtRespectingOptOuts(kind, group, format);
      if(court){
        const signature = buildMatchupKey(court);
        if(signature && courts.some(existingCourt => buildMatchupKey(existingCourt) === signature)) return;
        courts.push(court);
      }
    });
    return { courts, score: scoreCandidate(courts, usedSet), sitOutPlayers: benchPlayers };
  }


  function generateNovelCourtSet(attendingPlayers, format, usedSet, maxCourts){
    let best = null;
    for(let i = 0; i < 250; i += 1){
      const candidate = buildCandidate(attendingPlayers, format, usedSet, maxCourts, i);
      if(!best || candidate.score > best.score) best = candidate;
    }
    if(best && best.courts.every(court => usedSet.has(buildMatchupKey(court))) && usedSet.size){
      usedSet.clear();
      return generateNovelCourtSet(attendingPlayers, format, usedSet, maxCourts);
    }
    return best ? best : { courts: [], score: -Infinity, sitOutPlayers: [] };
  }


  function buildSinglesDayCourtSet(attendingPlayers, courtLimit){
    const singlesCount = Math.min(courtLimit, Math.floor(attendingPlayers.length / 2));
    const usedCount = singlesCount * 2;
    const sitOutPlayers = chooseSitOutPlayers(attendingPlayers, Math.max(0, attendingPlayers.length - usedCount));
    const sitOutIds = new Set(sitOutPlayers.map(function(player){ return player.id; }));
    const selected = orderPlayersForGeneration(attendingPlayers.filter(function(player){ return !sitOutIds.has(player.id); }), 'singles');
    const courts = [];
    for(let i = 0; i < singlesCount; i += 1){
      const group = selected.slice(i * 2, i * 2 + 2);
      if(group.length === 2) courts.push(makeCourt('singles', group));
    }
    return { courts:courts, sitOutPlayers:sitOutPlayers };
  }


  function buildDoublesDayCourtSet(attendingPlayers, courtLimit){
    const counts = getDoublesDayCounts(attendingPlayers.length, courtLimit);
    const sitOutPlayers = chooseSitOutPlayers(attendingPlayers, Math.max(0, attendingPlayers.length - counts.used));
    const sitOutIds = new Set(sitOutPlayers.map(function(player){ return player.id; }));
    const selected = orderPlayersForGeneration(attendingPlayers.filter(function(player){ return !sitOutIds.has(player.id); }), 'doubles');
    const courts = [];
    let cursor = 0;
    for(let i = 0; i < counts.doubles; i += 1){
      const group = selected.slice(cursor, cursor + 4);
      cursor += 4;
      if(group.length === 4) courts.push(makeCourtRespectingOptOuts('doubles', group, 'doubles') || makeCourt('doubles', group));
    }
    if(counts.twoVsOne){
      const group = selected.slice(cursor, cursor + 3);
      cursor += 3;
      if(group.length === 3){
        const court = makeCourtRespectingOptOuts('2v1', group, 'doubles');
        if(court) courts.push(court);
        else sitOutPlayers.push.apply(sitOutPlayers, group);
      }
    }
    if(counts.singles){
      const group = selected.slice(cursor, cursor + 2);
      cursor += 2;
      if(group.length === 2){
        const court = makeCourtRespectingOptOuts('singles', group, 'doubles');
        if(court) courts.push(court);
        else sitOutPlayers.push.apply(sitOutPlayers, group);
      }
    }
    return { courts:courts.slice(0, courtLimit), sitOutPlayers:sitOutPlayers };
  }


  function buildCurrentCourtSet(attendingPlayers, format, usedSet, maxCourts){
    const courtLimit = normaliseCourtLimit(maxCourts, 1);
    const normalizedFormat = format === 'singles' ? 'singles' : 'doubles';
    let result;
    if(attendingPlayers.length === 2){
      result = { courts: [makeCourt('singles', attendingPlayers.slice(0, 2))], sitOutPlayers: [] };
    }else if(normalizedFormat === 'singles'){
      result = buildSinglesDayCourtSet(attendingPlayers, courtLimit);
    }else if(isSpecialFourPlayerLadder(attendingPlayers, normalizedFormat)){
      result = { courts: buildSpecialFourPlayerSequence(attendingPlayers, getState().plan.specialFourPlayerIndex || 0).slice(0, courtLimit), sitOutPlayers: [] };
    }else{
      result = generateNovelCourtSet(attendingPlayers, normalizedFormat, usedSet, courtLimit);
      if(!result || !Array.isArray(result.courts) || !result.courts.length){
        result = buildDoublesDayCourtSet(attendingPlayers, courtLimit);
      }
    }
    const courts = (result.courts || []).filter(Boolean).slice(0, courtLimit);
    courts.forEach(function(court){
      const signature = buildMatchupKey(court);
      const gap = Math.round(Math.abs(getSideRatingForCourt(court, court.side1) - getSideRatingForCourt(court, court.side2)) * 10) / 10;
      const rotationPenalty = getCourtRotationPenalty(court);
      const reasons = [];
      reasons.push(usedSet.has(signature) ? 'This matchup has appeared before, but higher-priority court and fairness constraints selected it again.' : 'This is a new matchup within the current rotation memory.');
      reasons.push('Rating gap: ' + gap.toFixed(1) + '.');
      if(rotationPenalty > 0) reasons.push('Recent partner/opponent repetition was considered and penalised during selection.');
      else reasons.push('No recent partner/opponent repetition penalty applied.');
      court.matchupReason = reasons.join(' ');
      usedSet.add(signature);
    });
    getState().plan.currentCircumstantialSitOutPlayerIds = Array.from(new Set((result.sitOutPlayers || []).map(function(player){ return player && player.id; }).filter(Boolean)));
    getState().plan.currentOptionalSitOutPlayerIds = [];
    syncCurrentSitOutUnion();
    // Only circumstantial sit-outs participate in automatic fairness balancing.
    // A player choosing to sit out from a court must not earn rotation credit or
    // cause somebody else to be prioritised for a future forced sit-out.
    getState().plan.lastSitOutPlayerIds = getState().plan.currentCircumstantialSitOutPlayerIds.slice();
    getState().plan.currentCircumstantialSitOutPlayerIds.forEach(playerId => { getState().plan.sitOutCounts[playerId] = Number(getState().plan.sitOutCounts[playerId] || 0) + 1; });
    const rebuiltCourts = courts.map((court, index) => attachVariableBasePlayers(resetUnsubmittedCourtScoreDraft(evaluateCourtRestrictions(Object.assign({ courtNumber:index + 1 }, JSON.parse(JSON.stringify(court)))))));
    return orderCourtsByLadder(rebuiltCourts);
  }


  function updateRotationMemoryFromCourt(court){
    if(!getState().plan.sessionPairCounts || typeof getState().plan.sessionPairCounts !== 'object') getState().plan.sessionPairCounts = {};
    if(!getState().plan.sessionOpponentCounts || typeof getState().plan.sessionOpponentCounts !== 'object') getState().plan.sessionOpponentCounts = {};
    if(!getState().plan.sessionSolo2v1Counts || typeof getState().plan.sessionSolo2v1Counts !== 'object') getState().plan.sessionSolo2v1Counts = {};
    [court.side1, court.side2].forEach(function(side){
      const players = side && Array.isArray(side.players) ? side.players : [];
      if(players.length === 2){
        const pairId = getPairIdFromPlayers(players);
        if(pairId) getState().plan.sessionPairCounts[pairId] = Number(getState().plan.sessionPairCounts[pairId] || 0) + 1;
      }
    });
    const side1Players = court.side1 && court.side1.players ? court.side1.players : [];
    const side2Players = court.side2 && court.side2.players ? court.side2.players : [];
    side1Players.forEach(function(a){
      side2Players.forEach(function(b){
        const key = getOpponentMemoryKey(a.id, b.id);
        if(key) getState().plan.sessionOpponentCounts[key] = Number(getState().plan.sessionOpponentCounts[key] || 0) + 1;
      });
    });
    if(court.kind === '2v1'){
      const solo = side1Players.length === 1 ? side1Players[0] : (side2Players.length === 1 ? side2Players[0] : null);
      if(solo) getState().plan.sessionSolo2v1Counts[solo.id] = Number(getState().plan.sessionSolo2v1Counts[solo.id] || 0) + 1;
    }
  }

    return Object.freeze({
      stableGenerationHash:stableGenerationHash,
      orderPlayersForGeneration:orderPlayersForGeneration,
      chooseSitOutPlayers:chooseSitOutPlayers,
      buildSpecialFourPlayerSequence:buildSpecialFourPlayerSequence,
      prepareSpecialFourPlayerIndexForManualGenerate:prepareSpecialFourPlayerIndexForManualGenerate,
      getCourtRotationPenalty:getCourtRotationPenalty,
      choosePreferredLayout:choosePreferredLayout,
      buildCandidate:buildCandidate,
      generateNovelCourtSet:generateNovelCourtSet,
      buildSinglesDayCourtSet:buildSinglesDayCourtSet,
      buildDoublesDayCourtSet:buildDoublesDayCourtSet,
      buildCurrentCourtSet:buildCurrentCourtSet,
      updateRotationMemoryFromCourt:updateRotationMemoryFromCourt
    });
  }

  global.BASELINE_BADMINTON_MATCHMAKER = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);

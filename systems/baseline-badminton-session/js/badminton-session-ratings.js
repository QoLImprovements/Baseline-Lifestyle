(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const getState = options.getState;
    const getPlayer = options.getPlayer;
    const average = options.average;
    const clampRating = options.clampRating;
    const START_RATING = Number(options.startRating || 25);
    const MAX_RATING_GAP = Number(options.maxRatingGap || 5);
    const HEAVY_RATING_LOSS_BELOW = Number(options.heavyRatingLossBelow || 12);

    function state(){
      const current = typeof getState === 'function' ? getState() : null;
      if(!current || typeof current !== 'object') throw new Error('Badminton rating engine requires session state.');
      return current;
    }

    function getPlayerRatingId(player){
      return String(player && (player.id || player.playerId) || '').trim();
    }

    function getPlayerRating(player){
      return clampRating(player && (player.playerRating != null ? player.playerRating : player.rating));
    }

    function setPlayerRating(player, value){
      const live = player && typeof getPlayer === 'function' ? getPlayer(player.id) : null;
      if(live){
        live.playerRating = clampRating(value);
        live.rating = live.playerRating;
      }
    }

    function getPlayerByNameForRatingMigration(name){
      const needle = String(name || '').trim().toLowerCase();
      if(!needle) return null;
      return (state().players || []).find(function(player){
        return String(player && player.name || '').trim().toLowerCase() === needle;
      }) || null;
    }

    function getPairIdFromPlayers(players){
      const ids = (players || []).map(getPlayerRatingId).filter(Boolean).sort();
      return ids.length === 2 ? ('pair:' + ids.join('::')) : '';
    }

    function normalizePairRatingKeys(){
      const current = state();
      if(!current.pairRatings || typeof current.pairRatings !== 'object') current.pairRatings = {};
      const normalized = {};
      Object.keys(current.pairRatings).forEach(function(key){
        const value = clampRating(current.pairRatings[key]);
        if(String(key).startsWith('pair:')){
          normalized[String(key)] = value;
          return;
        }
        const parts = String(key || '').split(/\s*(?:\/|\+)\s*/).map(function(part){ return part.trim(); }).filter(Boolean);
        if(parts.length !== 2) return;
        const players = parts.map(getPlayerByNameForRatingMigration).filter(Boolean);
        const pairId = getPairIdFromPlayers(players);
        if(pairId && !Object.prototype.hasOwnProperty.call(normalized, pairId)) normalized[pairId] = value;
      });
      current.pairRatings = normalized;
    }

    function normalizeOneVsTwoRatingKeys(){
      const current = state();
      if(!current.oneVsTwoRatings || typeof current.oneVsTwoRatings !== 'object') current.oneVsTwoRatings = {};
      const normalized = {};
      Object.keys(current.oneVsTwoRatings).forEach(function(key){
        const value = clampRating(current.oneVsTwoRatings[key]);
        const directPlayer = typeof getPlayer === 'function' ? getPlayer(String(key)) : null;
        if(directPlayer){
          normalized[getPlayerRatingId(directPlayer)] = value;
          return;
        }
        const legacyPlayer = getPlayerByNameForRatingMigration(key);
        if(legacyPlayer){
          const playerId = getPlayerRatingId(legacyPlayer);
          if(playerId && !Object.prototype.hasOwnProperty.call(normalized, playerId)) normalized[playerId] = value;
        }
      });
      current.oneVsTwoRatings = normalized;
    }

    function ensureRatingStores(){
      const current = state();
      if(!current.pairRatings || typeof current.pairRatings !== 'object') current.pairRatings = {};
      normalizePairRatingKeys();
      if(!current.oneVsTwoRatings || typeof current.oneVsTwoRatings !== 'object') current.oneVsTwoRatings = {};
      normalizeOneVsTwoRatingKeys();
      (current.players || []).forEach(function(player){
        player.playerRating = getPlayerRating(player);
        player.rating = player.playerRating;
        const playerId = getPlayerRatingId(player);
        if(playerId && !Object.prototype.hasOwnProperty.call(current.oneVsTwoRatings, playerId)) current.oneVsTwoRatings[playerId] = player.playerRating;
      });
      const players = current.players || [];
      for(let i = 0; i < players.length; i += 1){
        for(let j = i + 1; j < players.length; j += 1){
          const pairId = getPairIdFromPlayers([players[i], players[j]]);
          if(pairId && !Object.prototype.hasOwnProperty.call(current.pairRatings, pairId)){
            current.pairRatings[pairId] = clampRating((getPlayerRating(players[i]) + getPlayerRating(players[j])) / 2);
          }
        }
      }
    }

    function setPairRatingForPlayers(players, value){
      const pairId = getPairIdFromPlayers(players);
      if(pairId) state().pairRatings[pairId] = clampRating(value);
    }

    function getPairRatingForPlayers(players){
      const current = state();
      const pairId = getPairIdFromPlayers(players);
      if(pairId && Object.prototype.hasOwnProperty.call(current.pairRatings || {}, pairId)) return clampRating(current.pairRatings[pairId]);
      const ratings = (players || []).map(getPlayerRating);
      return ratings.length ? clampRating(average(ratings)) : START_RATING;
    }

    function setOneVsTwoRatingForPlayer(player, value){
      const playerId = getPlayerRatingId(player);
      if(playerId) state().oneVsTwoRatings[playerId] = clampRating(value);
    }

    function getOneVsTwoRatingForPlayer(player){
      const current = state();
      const playerId = getPlayerRatingId(player);
      if(playerId && Object.prototype.hasOwnProperty.call(current.oneVsTwoRatings || {}, playerId)) return clampRating(current.oneVsTwoRatings[playerId]);
      return getPlayerRating(player);
    }

    function getSideRatingForCourt(court, side){
      const players = side && Array.isArray(side.players) ? side.players : [];
      if(court && court.kind === 'doubles' && players.length === 2) return getPairRatingForPlayers(players);
      if(court && court.kind === '2v1'){
        if(players.length === 1) return getOneVsTwoRatingForPlayer(players[0]);
        if(players.length === 2) return getPairRatingForPlayers(players);
      }
      return Math.round(average(players.map(getPlayerRating)) * 10) / 10;
    }

    function getCourtSideRatingEntity(court, side){
      const players = side && Array.isArray(side.players) ? side.players : [];
      if(court && court.kind === 'doubles' && players.length === 2){
        return { type:'pair', label:'Pair Rating', value:getPairRatingForPlayers(players), players:players };
      }
      if(court && court.kind === '2v1'){
        if(players.length === 1) return { type:'oneVsTwo', label:'1v2 Rating', value:getOneVsTwoRatingForPlayer(players[0]), players:players };
        if(players.length === 2) return { type:'pair', label:'Pair Rating', value:getPairRatingForPlayers(players), players:players };
      }
      if(players.length === 1) return { type:'player', label:'Player Rating', value:getPlayerRating(players[0]), players:players };
      return { type:'players', label:'Player Rating', value:Math.round(average(players.map(getPlayerRating)) * 10) / 10, players:players };
    }

    function setCourtSideRatingEntity(court, side, value){
      const entity = getCourtSideRatingEntity(court, side);
      const players = entity.players || [];
      const target = clampRating(value);
      if(entity.type === 'pair'){
        setPairRatingForPlayers(players, target);
      }else if(entity.type === 'oneVsTwo'){
        setOneVsTwoRatingForPlayer(players[0], target);
      }else if(entity.type === 'player'){
        setPlayerRating(players[0], target);
      }else{
        players.forEach(function(player){ setPlayerRating(player, target); });
      }
      return target;
    }

    function getHighestRatingForEntityType(type){
      const current = state();
      ensureRatingStores();
      const normalized = String(type || 'player');
      if(normalized === 'pair'){
        const values = Object.values(current.pairRatings || {}).map(clampRating).filter(Number.isFinite);
        return values.length ? Math.max.apply(null, values) : START_RATING;
      }
      if(normalized === 'oneVsTwo'){
        const values = Object.values(current.oneVsTwoRatings || {}).map(clampRating).filter(Number.isFinite);
        return values.length ? Math.max.apply(null, values) : START_RATING;
      }
      const playerValues = (current.players || []).map(getPlayerRating).filter(Number.isFinite);
      return playerValues.length ? Math.max.apply(null, playerValues) : START_RATING;
    }

    function entityIsHighestInItsRatingType(entity){
      if(!entity) return false;
      const highest = getHighestRatingForEntityType(entity.type);
      return Number(entity.value || 0) >= highest - 0.0001;
    }

    function applyTopWinIncreaseForCourt(court, winnerSide, loserEntity, score1, score2){
      const winnerEntity = getCourtSideRatingEntity(court, winnerSide);
      if(!entityIsHighestInItsRatingType(loserEntity)) return 0;
      const bonus = Math.min(Number(score1), Number(score2)) < HEAVY_RATING_LOSS_BELOW ? 1 : 0.5;
      const ownTop = getHighestRatingForEntityType(winnerEntity.type);
      const target = clampRating(Math.max(ownTop, Number(loserEntity.value || ownTop)) + bonus);
      const before = Number(winnerEntity.value || START_RATING);
      if(target <= before) return 0;
      setCourtSideRatingEntity(court, winnerSide, target);
      return Math.round((target - before) * 10) / 10;
    }

    function applyDeltaToSideWithOpponentGapCap(court, side, opponentRating, delta){
      const entity = getCourtSideRatingEntity(court, side);
      const before = Number(entity.value || START_RATING);
      const requested = before + Number(delta || 0);
      const floor = Number(opponentRating || START_RATING) - MAX_RATING_GAP;
      const target = clampRating(Math.max(requested, floor));
      if(target >= before) return 0;
      setCourtSideRatingEntity(court, side, target);
      return Math.round((target - before) * 10) / 10;
    }

    function getRatingLossDelta(score1, score2){
      const losingScore = Math.min(Number(score1), Number(score2));
      return losingScore < HEAVY_RATING_LOSS_BELOW ? -1 : -0.5;
    }

    function formatRatingDelta(delta){
      const n = Math.round(Number(delta || 0) * 10) / 10;
      if(!n) return 'held';
      return (n > 0 ? '+' : '') + n.toFixed(1);
    }

    function refreshCourtSideRatings(court){
      if(!court) return court;
      court.side1Rating = getSideRatingForCourt(court, court.side1);
      court.side2Rating = getSideRatingForCourt(court, court.side2);
      court.diff = Math.round(Math.abs(court.side1Rating - court.side2Rating) * 10) / 10;
      court.strongerSide = court.diff < 0.1 ? null : (court.side1Rating > court.side2Rating ? 1 : 2);
      court.weakerSide = court.strongerSide ? (court.strongerSide === 1 ? 2 : 1) : null;
      return court;
    }

    function applyRatingChanges(court, score1, score2){
      const winnerSideNumber = score1 > score2 ? 1 : 2;
      const loserSideNumber = winnerSideNumber === 1 ? 2 : 1;
      const winnerSide = winnerSideNumber === 1 ? court.side1 : court.side2;
      const loserSide = loserSideNumber === 1 ? court.side1 : court.side2;
      const winnerEntity = getCourtSideRatingEntity(court, winnerSide);
      const loserEntity = getCourtSideRatingEntity(court, loserSide);
      const winnerLabel = winnerEntity.label;
      const loserLabel = loserEntity.label;
      const lossDelta = getRatingLossDelta(score1, score2);
      const winnerWasLowerRated = Number(winnerEntity.value || 0) < Number(loserEntity.value || 0) - 0.0001;

      let winnerDelta = 0;
      if(winnerWasLowerRated){
        winnerDelta = applyTopWinIncreaseForCourt(court, winnerSide, loserEntity, score1, score2);
      }

      const loserDelta = applyDeltaToSideWithOpponentGapCap(court, loserSide, winnerEntity.value, lossDelta);
      ensureRatingStores();
      refreshCourtSideRatings(court);

      const winnerText = winnerDelta
        ? (winnerLabel + ' ' + formatRatingDelta(winnerDelta) + ' for beating the current top-rated entity')
        : ('Winners held ' + winnerLabel);
      const loserText = loserDelta
        ? (loserLabel + ' ' + formatRatingDelta(loserDelta))
        : ('Losers held at ' + String(MAX_RATING_GAP) + '-point limit');
      return { summaryText: winnerText + ' · ' + loserText };
    }

    return Object.freeze({
      getPlayerRatingId,
      getPlayerRating,
      setPlayerRating,
      normalizePairRatingKeys,
      normalizeOneVsTwoRatingKeys,
      ensureRatingStores,
      getPairIdFromPlayers,
      setPairRatingForPlayers,
      getPairRatingForPlayers,
      setOneVsTwoRatingForPlayer,
      getOneVsTwoRatingForPlayer,
      getSideRatingForCourt,
      getCourtSideRatingEntity,
      setCourtSideRatingEntity,
      getHighestRatingForEntityType,
      entityIsHighestInItsRatingType,
      applyTopWinIncreaseForCourt,
      applyDeltaToSideWithOpponentGapCap,
      getRatingLossDelta,
      formatRatingDelta,
      applyRatingChanges,
      refreshCourtSideRatings
    });
  }

  global.BASELINE_BADMINTON_RATINGS = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);

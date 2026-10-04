(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const getState = options.getState;
    const getRefs = options.getRefs;
    const ensureRatingStores = options.ensureRatingStores;
    const getPlayerRating = options.getPlayerRating;
    const getOneVsTwoRatingForPlayer = options.getOneVsTwoRatingForPlayer;
    const clampRating = options.clampRating;
    const escapeHtml = options.escapeHtml;
    const isModeratorPlayer = options.isModeratorPlayer;
    const getPairLabelFromId = options.getPairLabelFromId;
    const renderAdminStar = options.renderAdminStar;
    const formatDateTime = options.formatDateTime;
    const getHardshipLabel = options.getHardshipLabel;
    const moderatorCanonicalLogin = String(options.moderatorCanonicalLogin || '');

    function state(){
      const current = getState();
      if(!current || typeof current !== 'object') throw new Error('Badminton reporting renderer requires session state.');
      return current;
    }

    function refs(){
      return getRefs() || {};
    }

    function renderStandings(){
      ensureRatingStores();
      const current = state();
      const currentRefs = refs();
      const playerRows = current.players.slice().sort(function(a, b){
        return getPlayerRating(b) - getPlayerRating(a) || a.name.localeCompare(b.name);
      }).map(function(player, index){
        return '<tr><td class="small-cell">' + escapeHtml(String(index + 1)) + '</td><td>' + escapeHtml(isModeratorPlayer(player) ? 'Peter Bates-Wilkinson' : player.name) + renderAdminStar(player) + '</td><td class="small-cell">' + escapeHtml(String(getPlayerRating(player))) + '</td><td>' + escapeHtml(isModeratorPlayer(player) ? moderatorCanonicalLogin : (player.loginUsername || '—')) + '</td></tr>';
      }).join('');
      const pairRows = Object.entries(current.pairRatings || {}).sort(function(a,b){
        return Number(b[1]) - Number(a[1]) || getPairLabelFromId(a[0]).localeCompare(getPairLabelFromId(b[0]));
      }).map(function(entry, index){
        return '<tr><td class="small-cell">' + escapeHtml(String(index + 1)) + '</td><td>' + escapeHtml(getPairLabelFromId(entry[0])) + '</td><td class="small-cell">' + escapeHtml(clampRating(entry[1]).toFixed(1)) + '</td></tr>';
      }).join('');
      const oneVsTwoRows = current.players.slice().sort(function(a,b){
        return getOneVsTwoRatingForPlayer(b) - getOneVsTwoRatingForPlayer(a) || a.name.localeCompare(b.name);
      }).map(function(player, index){
        return '<tr><td class="small-cell">' + escapeHtml(String(index + 1)) + '</td><td>' + escapeHtml(isModeratorPlayer(player) ? 'Peter Bates-Wilkinson' : player.name) + renderAdminStar(player) + '</td><td class="small-cell">' + escapeHtml(getOneVsTwoRatingForPlayer(player).toFixed(1)) + '</td></tr>';
      }).join('');
      if(!currentRefs.standingsWrap) return;
      currentRefs.standingsWrap.innerHTML =
        '<h3>Player Rating</h3><p class="note">Singles only.</p><div class="table-wrap"><table><thead><tr><th>#</th><th>Player</th><th>Player Rating</th><th>Linked login</th></tr></thead><tbody>' + (playerRows || '<tr><td colspan="4">No players yet.</td></tr>') + '</tbody></table></div>' +
        '<hr class="rule"/><h3>Pair Rating</h3><p class="note">Doubles pairs and the pair side of 2v1 games.</p><div class="table-wrap"><table><thead><tr><th>#</th><th>Pair</th><th>Pair Rating</th></tr></thead><tbody>' + (pairRows || '<tr><td colspan="3">No pair ratings yet.</td></tr>') + '</tbody></table></div>' +
        '<hr class="rule"/><h3>1v2 Rating</h3><p class="note">Solo player rating for 1v2 games only.</p><div class="table-wrap"><table><thead><tr><th>#</th><th>Player</th><th>1v2 Rating</th></tr></thead><tbody>' + (oneVsTwoRows || '<tr><td colspan="3">No 1v2 ratings yet.</td></tr>') + '</tbody></table></div>';
    }

    function renderMatchHistory(){
      const current = state();
      const currentRefs = refs();
      if(currentRefs.heroMatchCount) currentRefs.heroMatchCount.textContent = String(current.matches.length);
      if(!currentRefs.matchHistoryWrap) return;
      if(!current.matches.length){
        currentRefs.matchHistoryWrap.innerHTML = '<div class="empty-state">No games have been recorded yet in this session.</div>';
        return;
      }
      const closest = current.matches.slice().sort(function(a, b){
        return Math.abs(Number(a.score1 || 0) - Number(a.score2 || 0)) - Math.abs(Number(b.score1 || 0) - Number(b.score2 || 0));
      })[0] || null;
      const pairIds = new Set();
      current.matches.forEach(function(match){
        if(match.side1PairId) pairIds.add(match.side1PairId);
        if(match.side2PairId) pairIds.add(match.side2PairId);
      });
      const hardshipCount = current.matches.filter(function(match){ return !!match.hardshipRegistered; }).length;
      const summary = '<div class="metric-strip">' +
        '<span class="metric-chip"><strong>' + escapeHtml(String(current.matches.length)) + '</strong> Games</span>' +
        '<span class="metric-chip"><strong>' + escapeHtml(String(pairIds.size)) + '</strong> Pairs used</span>' +
        '<span class="metric-chip"><strong>' + escapeHtml(String(hardshipCount)) + '</strong> Hardship changes</span>' +
        (closest ? '<span class="metric-chip"><strong>' + escapeHtml(String(closest.score1) + '-' + String(closest.score2)) + '</strong> Closest score</span>' : '') +
      '</div>';
      const rows = current.matches.map(function(match){
        const rules = ['<div class="note">Target area: ' + escapeHtml(match.targetAreaText || 'Full court') + '</div>'];
        if(match.shotRestrictionText) rules.push('<div class="note">Restricted Shots: ' + escapeHtml(match.shotRestrictionText) + '</div>');
        return '<tr><td>' + escapeHtml(formatDateTime(match.createdAt)) + '</td><td><strong>' + escapeHtml('Court ' + match.courtNumber + ' · ' + (match.kind === '2v1' ? '2 vs 1' : match.kind)) + '</strong><div class="note">' + escapeHtml(match.side1Label + ' vs ' + match.side2Label) + '</div></td><td class="small-cell">' + escapeHtml(String(match.score1)) + ' - ' + escapeHtml(String(match.score2)) + '</td><td>' + escapeHtml(match.winnerLabel) + '</td><td>' + rules.join('') + '</td><td>' + escapeHtml(match.hardshipRegistered ? getHardshipLabel(match.hardshipRegistered) : '—') + '</td><td class="small-cell">' + escapeHtml(match.ratingContext.summaryText || '') + '</td></tr>';
      }).join('');
      currentRefs.matchHistoryWrap.innerHTML = summary + '<table><thead><tr><th>Date / time</th><th>Court</th><th>Score</th><th>Winner</th><th>Altered rules</th><th>Hardship Adjustment</th><th>Rating shift</th></tr></thead><tbody>' + rows + '</tbody></table>';
    }

    function renderFinishedBatch(batch, index){
      const rows = (batch.courts || []).map(function(court){
        if(court.noGame){
          return '<tr>' +
            '<td><strong>' + escapeHtml('Court ' + court.courtNumber + ' · No Game') + '</strong><div class="note">' + escapeHtml((court.side1Label || '') + ' vs ' + (court.side2Label || '')) + '</div></td>' +
            '<td>No game</td>' +
            '<td>No Game</td>' +
            '<td><div class="note">Court was confirmed inactive.</div></td>' +
            '<td></td>' +
            '<td>No rating change</td>' +
          '</tr>';
        }
        const rules = ['<div class="note">Target area: ' + escapeHtml(court.targetAreaText || 'Full court') + '</div>'];
        if(court.shotRestrictionText) rules.push('<div class="note">Restricted Shots: ' + escapeHtml(court.shotRestrictionText) + '</div>');
        return '<tr>' +
          '<td><strong>' + escapeHtml('Court ' + court.courtNumber + ' · ' + (court.kind === '2v1' ? '2 vs 1' : court.kind)) + '</strong><div class="note">' + escapeHtml(court.side1Label + ' vs ' + court.side2Label) + '</div></td>' +
          '<td>' + escapeHtml(String(court.score1)) + ' - ' + escapeHtml(String(court.score2)) + '</td>' +
          '<td>' + escapeHtml(court.winnerLabel) + '</td>' +
          '<td>' + rules.join('') + '</td>' +
          '<td>' + escapeHtml(getHardshipLabel(court.hardshipRegistered)) + '</td>' +
          '<td>' + escapeHtml(court.ratingSummary) + '</td>' +
        '</tr>';
      }).join('');
      const activePairs = Number(batch.activePairs || 0);
      const circumstantialSitOuts = Array.isArray(batch.circumstantialSitOutPlayerIds) ? batch.circumstantialSitOutPlayerIds.length : 0;
      const optionalSitOuts = Array.isArray(batch.optionalSitOutPlayerIds) ? batch.optionalSitOutPlayerIds.length : 0;
      return '<div class="finished-batch">' +
        '<div class="finished-batch-head"><div><div class="finished-batch-title">Finished Set ' + escapeHtml(String(index + 1)) + '</div><div class="note">Generated ' + escapeHtml(formatDateTime(batch.generatedAt)) + ' · Completed ' + escapeHtml(formatDateTime(batch.completedAt)) + '</div></div><div class="metric-strip"><span class="metric-chip"><strong>' + escapeHtml(String((batch.courts || []).length)) + '</strong> Courts</span><span class="metric-chip"><strong>' + escapeHtml(batch.format === 'singles' ? 'Singles' : 'Doubles') + '</strong> Format</span><span class="metric-chip"><strong>' + escapeHtml(String(activePairs)) + '</strong> Active pairs</span><span class="metric-chip"><strong>' + escapeHtml(String(circumstantialSitOuts)) + '</strong> Circumstantial sit-outs</span><span class="metric-chip"><strong>' + escapeHtml(String(optionalSitOuts)) + '</strong> Optional sit-outs</span></div></div>' +
        '<div class="table-wrap"><table class="finished-summary-table"><colgroup><col style="width:28%"/><col style="width:12%"/><col style="width:18%"/><col style="width:20%"/><col style="width:12%"/><col style="width:10%"/></colgroup><thead><tr><th>Court</th><th>Score</th><th>Winner</th><th>Altered rules</th><th>Hardship Adjustment</th><th>Rating shift</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '</div>';
    }

    function renderFinishedGames(){
      const current = state();
      const currentRefs = refs();
      if(!currentRefs.finishedGamesWrap) return;
      if(!current.plan.finished.length){
        currentRefs.finishedGamesWrap.innerHTML = '<div class="empty-state">No finished game batches yet.</div>';
        return;
      }
      currentRefs.finishedGamesWrap.innerHTML = '<div class="finished-details"><div class="finished-details-body">' + current.plan.finished.map(renderFinishedBatch).join('') + '</div></div>';
    }

    return Object.freeze({
      renderStandings:renderStandings,
      renderMatchHistory:renderMatchHistory,
      renderFinishedBatch:renderFinishedBatch,
      renderFinishedGames:renderFinishedGames
    });
  }

  global.BASELINE_BADMINTON_REPORTING = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);

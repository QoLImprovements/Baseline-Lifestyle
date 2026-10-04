(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const getState = options.getState;
    const getRefs = options.getRefs;
    const normalizeAttendingPlayerIds = options.normalizeAttendingPlayerIds;
    const currentUserIsManager = options.currentUserIsManager;
    const escapeHtml = options.escapeHtml;
    const syncCurrentSitOutUnion = options.syncCurrentSitOutUnion;
    const getSitOutNames = options.getSitOutNames;
    const getCourtVariableBasePlayers = options.getCourtVariableBasePlayers;
    const getCourtVariableSitOutIds = options.getCourtVariableSitOutIds;
    const getCourtSitOutLimit = options.getCourtSitOutLimit;
    const courtMarkedNoGame = options.courtMarkedNoGame;
    const normalisePendingHardship = options.normalisePendingHardship;
    const courtSaved = options.courtSaved;
    const currentUserCanScoreCourt = options.currentUserCanScoreCourt;
    const renderCourtSummary = options.renderCourtSummary;
    const renderRuleGuidance = options.renderRuleGuidance;
    const renderCourtDiagram = options.renderCourtDiagram;
    const renderBoundaryMask = options.renderBoundaryMask;
    const renderCourtShotRestrictionOverlay = options.renderCourtShotRestrictionOverlay;
    const renderHardshipHelp = options.renderHardshipHelp;
    const renderScoreHeading = options.renderScoreHeading;
    const createCourtScoreInputName = options.createCourtScoreInputName;
    const renderHardshipControl = options.renderHardshipControl;
    const getCourtSaveKey = options.getCourtSaveKey;

    function state(){
      const current = getState();
      if(!current || typeof current !== 'object') throw new Error('Badminton court-card renderer requires session state.');
      return current;
    }

    function refs(){
      return getRefs() || {};
    }

    function renderAttendanceSelector(){
      const currentRefs = refs();
      const current = state();
      if(!currentRefs.attendanceSelectorWrap) return;
      normalizeAttendingPlayerIds();
      if(!current.players.length){
        currentRefs.attendanceSelectorWrap.innerHTML = '<div class="empty-state">Add players first, then mark who has attended today.</div>';
      }else{
        const selected = new Set(current.plan.attendingPlayerIds);
        const disabled = currentUserIsManager() ? '' : ' disabled';
        currentRefs.attendanceSelectorWrap.innerHTML = current.players.slice().sort(function(a, b){ return a.name.localeCompare(b.name); }).map(function(player){
          return '<label class="attendance-pill"><input type="checkbox" data-attendance-player="' + escapeHtml(player.id) + '"' + (selected.has(player.id) ? ' checked' : '') + disabled + '/><span>' + escapeHtml(player.name) + '</span></label>';
        }).join('') + (currentUserIsManager() ? '' : '<div class="readonly-note">Attendance editing is limited to the moderator and approved admins.</div>');
      }
      if(currentRefs.attendanceCountLabel){
        const count = current.plan.attendingPlayerIds.length;
        currentRefs.attendanceCountLabel.textContent = count + ' player' + (count === 1 ? '' : 's') + ' attended today';
      }
    }

    function renderCurrentSitOutInfo(){
      const currentRefs = refs();
      const current = state();
      if(!currentRefs.currentSitOutWrap) return;
      syncCurrentSitOutUnion();
      const circumstantialNames = getSitOutNames(current.plan.currentCircumstantialSitOutPlayerIds);
      const optionalNames = getSitOutNames(current.plan.currentOptionalSitOutPlayerIds);
      const rows = [];
      if(circumstantialNames.length) rows.push('<strong>Circumstantial sit-out</strong><br/>' + escapeHtml(circumstantialNames.join(' · ')));
      if(optionalNames.length) rows.push('<strong>Optional sit-out</strong><br/>' + escapeHtml(optionalNames.join(' · ')));
      currentRefs.currentSitOutWrap.innerHTML = rows.length ? ('<div class="status-box">' + rows.join('<br/><br/>') + '</div>') : '';
    }

    function renderCourtVariableEditor(court, index){
      const basePlayers = getCourtVariableBasePlayers(court);
      if(!basePlayers.length) return '';
      const selected = new Set(getCourtVariableSitOutIds(court));
      const limit = getCourtSitOutLimit(court);
      const disabled = limit <= 0 ? ' disabled' : '';
      const checkboxes = basePlayers.map(function(player){
        return '<label class="court-sitout-pill"><input type="checkbox" data-court-sitout-player="' + escapeHtml(String(index)) + '" value="' + escapeHtml(player.id) + '"' + (selected.has(player.id) ? ' checked' : '') + disabled + '/><span>' + escapeHtml(player.name) + '</span></label>';
      }).join('');
      const sitOutNote = limit > 0
        ? ('Choose up to ' + String(limit) + ' player' + (limit === 1 ? '' : 's') + ' to sit out from this court only.')
        : 'Singles cannot sit a player out. Use No Game if this court should not happen.';
      return '<details class="court-variable-editor"><summary>Edit Variables</summary>' +
        '<div class="court-variable-body">' +
          '<div class="court-variable-section"><strong>Sitting out</strong><div class="note">' + escapeHtml(sitOutNote) + '</div><div class="court-sitout-grid">' + checkboxes + '</div></div>' +
          '<div class="court-variable-section court-no-game-section">' +
            '<label class="court-no-game-range-label"><input class="court-no-game-range" type="range" min="0" max="100" step="1" value="0" data-court-no-game-slider="' + escapeHtml(String(index)) + '" aria-label="Move the slider right to register No Game"/><span>No Game</span></label>' +
            '<div class="note">Move the slider right to register \'No Game\'</div>' +
          '</div>' +
        '</div>' +
      '</details>';
    }

    function renderCourtCard(court, phase, index){
      const current = state();
      const noGame = courtMarkedNoGame(court);
      const score1 = court.score1 == null ? '' : String(court.score1);
      const score2 = court.score2 == null ? '' : String(court.score2);
      if(!noGame) normalisePendingHardship(court);
      const saved = phase === 'current' && (courtSaved(court, index) || noGame);
      const canScore = !saved && currentUserCanScoreCourt(court);
      const disabled = canScore ? '' : ' disabled';
      const lockNote = canScore || saved ? '' : '<div class="hardship-note">Score entry is limited to players on this court, the moderator, or an approved admin.</div>';
      const cardClass = 'court-card' + (saved ? ' is-saved' : '') + (noGame ? ' is-no-game' : '');
      let body = renderCourtSummary(court);
      if(canScore) body += renderCourtVariableEditor(court, index);
      if(noGame){
        body += '<div class="status-box"><strong>No Game</strong><br/>This court has been confirmed as inactive. It will not require score submission.</div>';
      }else{
        body += renderRuleGuidance(court) +
          '<div class="court-visual-row"><div class="court-frame">' + renderCourtDiagram(court) + renderBoundaryMask(court) + renderCourtShotRestrictionOverlay(court) + renderHardshipHelp(court) + '</div></div>' +
          '<div class="court-meta">' +
            '<div class="score-grid">' +
              '<label class="score-side">' + renderScoreHeading(court, court.side1) + '<input data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-score-side="1" name="' + escapeHtml(createCourtScoreInputName(court, index, 1)) + '" id="' + escapeHtml(createCourtScoreInputName(court, index, 1)) + '" type="text" maxlength="2" pattern="[0-9]*" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" data-generation-token="' + escapeHtml(String(current.plan.currentGenerationToken || '')) + '" value="' + escapeHtml(score1) + '"' + disabled + '/></label>' +
              '<label class="score-side">' + renderScoreHeading(court, court.side2) + '<input data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-score-side="2" name="' + escapeHtml(createCourtScoreInputName(court, index, 2)) + '" id="' + escapeHtml(createCourtScoreInputName(court, index, 2)) + '" type="text" maxlength="2" pattern="[0-9]*" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" data-generation-token="' + escapeHtml(String(current.plan.currentGenerationToken || '')) + '" value="' + escapeHtml(score2) + '"' + disabled + '/></label>' +
            '</div>' + lockNote + (canScore ? renderHardshipControl(court, phase, index) : (saved ? '<div class="status-box"><strong>Submitted</strong><br/>This court result is locked.</div>' : '')) +
          '</div>';
      }
      return '<div class="' + cardClass + '" data-current-court-index="' + escapeHtml(String(index)) + '" data-court-save-key="' + escapeHtml(getCourtSaveKey(court, index)) + '" data-court-saved="' + (saved ? 'true' : 'false') + '" aria-disabled="' + (saved ? 'true' : 'false') + '">' + body + '</div>';
    }

    return Object.freeze({
      renderAttendanceSelector:renderAttendanceSelector,
      renderCurrentSitOutInfo:renderCurrentSitOutInfo,
      renderCourtVariableEditor:renderCourtVariableEditor,
      renderCourtCard:renderCourtCard
    });
  }

  global.BASELINE_BADMINTON_COURT_CARDS = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);

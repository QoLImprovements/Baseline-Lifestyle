(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const getState = options.getState;
    const getRefs = options.getRefs;
    const getPageIsLeaving = options.getPageIsLeaving;
    const cssEscape = options.cssEscape;
    const courtSaved = options.courtSaved;
    const refreshCourtInputUi = options.refreshCourtInputUi;
    const requestNoGameConfirmation = options.requestNoGameConfirmation;
    const handleNoGameDialogAction = options.handleNoGameDialogAction;
    const generateNextSetFromCompletedCurrent = options.generateNextSetFromCompletedCurrent;
    const syncCourtScoresFromInputs = options.syncCourtScoresFromInputs;
    const currentUserCanScoreCourt = options.currentUserCanScoreCourt;
    const handleSaveCourtButton = options.handleSaveCourtButton;
    const markLocalChange = options.markLocalChange;
    const queueServerSave = options.queueServerSave;
    const currentUserIsManager = options.currentUserIsManager;
    const resetUnsubmittedCourtScoreDraft = options.resetUnsubmittedCourtScoreDraft;
    const syncCurrentSitOutUnion = options.syncCurrentSitOutUnion;
    const buildMatchupKey = options.buildMatchupKey;
    const evaluateCourtRestrictions = options.evaluateCourtRestrictions;
    const setPlanAlert = options.setPlanAlert;
    const getCourtSaveKey = options.getCourtSaveKey;
    const getCourtVariableBasePlayerIds = options.getCourtVariableBasePlayerIds;
    const getCourtSitOutLimit = options.getCourtSitOutLimit;
    const makeBestCourtFromVariablePlayers = options.makeBestCourtFromVariablePlayers;
    const courtMarkedNoGame = options.courtMarkedNoGame;
    const syncAllCurrentCourtDraftsFromInputs = options.syncAllCurrentCourtDraftsFromInputs;
    const refreshCurrentCourtCard = options.refreshCurrentCourtCard;
    const capCurrentCourtsToCourtLimit = options.capCurrentCourtsToCourtLimit;
    const enforceCurrentScoreInputsFromState = options.enforceCurrentScoreInputsFromState;
    const scheduleHardBlankCurrentScoreInputs = options.scheduleHardBlankCurrentScoreInputs;
    const refreshCurrentCourtRestrictionsFromMemory = options.refreshCurrentCourtRestrictionsFromMemory;
    const uid = options.uid;
    const protectLocalCurrentState = options.protectLocalCurrentState;
    const saveSessionData = options.saveSessionData;
    const syncPlanSettingsFromInputs = options.syncPlanSettingsFromInputs;
    const getAttendingPlayers = options.getAttendingPlayers;
    const clearGeneratedCourtDrafts = options.clearGeneratedCourtDrafts;
    const isSpecialFourPlayerLadder = options.isSpecialFourPlayerLadder;
    const ensureCurrentCourtSaveKeys = options.ensureCurrentCourtSaveKeys;
    const renderAll = options.renderAll;
    const advanceSpecialFourPlayerIndex = options.advanceSpecialFourPlayerIndex;
    const ensureGeneratedCurrentSet = options.ensureGeneratedCurrentSet;
    const getTeamLabel = options.getTeamLabel;
    const renderAttendanceSelector = options.renderAttendanceSelector;
    const renderCourtCard = options.renderCourtCard;
    const renderCurrentSitOutInfo = options.renderCurrentSitOutInfo;
    const renderFinishedGames = options.renderFinishedGames;
    const prepareSpecialFourPlayerIndexForManualGenerate = options.prepareSpecialFourPlayerIndexForManualGenerate;
    const buildCurrentCourtSet = options.buildCurrentCourtSet;
    const getShotRestrictionText = options.getShotRestrictionText;
    const getPlayer = options.getPlayer;
    const abortServerLoad = options.abortServerLoad;

    function state(){
      const current = getState();
      if(!current || typeof current !== 'object') throw new Error('Badminton game-plan module requires session state.');
      return current;
    }

    function refs(){ return getRefs() || {}; }


  const GAMEPLAN_SUBVIEWS = ['plan','attendance','finished'];

  function gamePlanSubtabFromLocation(){
    if(!/^\/baseline-badminton-session\/game-plan\/?$/i.test(String(location.pathname || ''))) return 'plan';
    try{
      const requested = new URLSearchParams(location.search || '').get('gameplan-view') || '';
      return GAMEPLAN_SUBVIEWS.includes(requested) ? requested : 'plan';
    }catch(_e){ return 'plan'; }
  }

  function gamePlanSubviewUrl(view){
    const next = GAMEPLAN_SUBVIEWS.includes(view) ? view : 'plan';
    const url = new URL(location.href);
    url.pathname = '/baseline-badminton-session/game-plan';
    if(next === 'plan') url.searchParams.delete('gameplan-view');
    else url.searchParams.set('gameplan-view', next);
    url.hash = '';
    return url.pathname + url.search;
  }

  function activateGamePlanSubtab(target, historyMode){
    const normalized = GAMEPLAN_SUBVIEWS.includes(String(target || '')) ? String(target) : 'plan';
    document.querySelectorAll('.gameplan-subtab').forEach(function(tab){
      tab.setAttribute('aria-selected', String(tab.getAttribute('data-gameplan-tab') === normalized));
    });
    document.querySelectorAll('[data-gameplan-panel]').forEach(function(panel){
      panel.classList.toggle('active', panel.getAttribute('data-gameplan-panel') === normalized);
    });
    if(historyMode && /^\/baseline-badminton-session\/game-plan\/?$/i.test(String(location.pathname || ''))){
      try{
        const nextUrl = gamePlanSubviewUrl(normalized);
        const currentUrl = location.pathname + location.search;
        if(nextUrl !== currentUrl){
          if(historyMode === 'push') history.pushState({ baselineBadmintonGamePlanView:normalized }, '', nextUrl);
          else history.replaceState({ baselineBadmintonGamePlanView:normalized }, '', nextUrl);
        }
      }catch(_e){}
    }
  }

  function wireGamePlanSubtabs(){
    document.querySelectorAll('.gameplan-subtab').forEach(function(button){
      button.addEventListener('click', function(){
        activateGamePlanSubtab(button.getAttribute('data-gameplan-tab'), 'push');
      });
    });
    document.querySelectorAll('.tab[data-target="gameplan"]').forEach(function(button){
      button.addEventListener('click', function(){
        activateGamePlanSubtab('plan');
      });
    });
    if(!window.__BASELINE_BADMINTON_GAMEPLAN_HISTORY_BOUND__){
      window.__BASELINE_BADMINTON_GAMEPLAN_HISTORY_BOUND__ = true;
      window.addEventListener('popstate', function(){
        if(/^\/baseline-badminton-session\/game-plan\/?$/i.test(String(location.pathname || ''))){
          activateGamePlanSubtab(gamePlanSubtabFromLocation());
        }
      });
    }
  }

    function bindPlanActions(){
    if(refs().currentGamesGrid.dataset.bound === 'true') return;
    refs().currentGamesGrid.dataset.bound = 'true';

    const commitHardshipChoice = function(target){
      const option = target && target.closest ? target.closest('[data-hardship-option]') : null;
      if(!option) return;
      const index = Number(option.getAttribute('data-index'));
      const court = state().plan.current[index];
      if(!court || courtSaved(court, index) || !currentUserCanScoreCourt(court)) return;
      const selectedValue = String(option.value || '').trim();
      if(selectedValue !== 'movement' && selectedValue !== 'shots') return;
      court.pendingHardship = selectedValue;
      const idx = cssEscape(String(index));
      const wrap = refs().currentGamesGrid.querySelector('[data-hardship-wrap="' + idx + '"]');
      if(wrap) wrap.setAttribute('data-selected-hardship', selectedValue);
      const store = refs().currentGamesGrid.querySelector('[data-index="' + idx + '"][data-hardship-store="true"]');
      if(store) store.value = selectedValue;
      const button = refs().currentGamesGrid.querySelector('[data-save-court="' + idx + '"]');
      if(button) button.setAttribute('data-hardship-value', selectedValue);
      markLocalChange();
      queueServerSave();
    };

    const handleScoreEdit = function(event){
      const input = event.target.closest('[data-score-side]');
      if(!input) return;
      const index = Number(input.getAttribute('data-index'));
      const court = state().plan.current[index];
      if(!court || courtSaved(court, index) || !currentUserCanScoreCourt(court)) return;
      syncCourtScoresFromInputs(index);
      refreshCourtInputUi(index);
      markLocalChange();
      queueServerSave();
    };

    refs().currentGamesGrid.addEventListener('input', handleScoreEdit);
    refs().currentGamesGrid.addEventListener('change', handleScoreEdit);
    refs().currentGamesGrid.addEventListener('input', function(event){ commitHardshipChoice(event.target); }, true);
    refs().currentGamesGrid.addEventListener('change', function(event){ commitHardshipChoice(event.target); }, true);
    refs().currentGamesGrid.addEventListener('click', function(event){ commitHardshipChoice(event.target); }, true);

    refs().currentGamesGrid.addEventListener('change', function(event){
      const sitout = event.target.closest('[data-court-sitout-player]');
      if(sitout){
        const index = Number(sitout.getAttribute('data-court-sitout-player'));
        if(Number.isNaN(index)) return;
        applyCourtSitOutSelection(index);
        return;
      }
      const noGame = event.target.closest('[data-court-no-game-slider]');
      if(noGame){
        const index = Number(noGame.getAttribute('data-court-no-game-slider'));
        if(Number.isNaN(index)) return;
        if(Number(noGame.value || 0) >= 95){
          requestNoGameConfirmation(index, noGame);
        }
      }
    });

    refs().currentGamesGrid.addEventListener('click', function(event){
      const next = event.target.closest('[data-generate-next-set]');
      if(next){
        event.preventDefault();
        event.stopPropagation();
        generateNextSetFromCompletedCurrent();
        return;
      }
      const modalAction = event.target.closest('[data-no-game-action]');
      if(modalAction){
        event.preventDefault();
        event.stopPropagation();
        handleNoGameDialogAction(modalAction);
        return;
      }
      const button = event.target.closest('[data-save-court]');
      if(!button) return;
      handleSaveCourtButton(button, event);
    });
  }


  function applyCourtSitOutSelection(index){
    if(!currentUserIsManager()) return;
    const court = state().plan.current[index];
    if(!court || courtSaved(court, index) || courtMarkedNoGame(court)) return;
    syncAllCurrentCourtDraftsFromInputs();
    const originalKind = String(court.variableOriginalKind || court.kind || '');
    const limit = getCourtSitOutLimit(court);
    const selector = '[data-court-sitout-player="' + cssEscape(String(index)) + '"]';
    let selectedIds = Array.from(refs().currentGamesGrid.querySelectorAll(selector + ':checked')).map(function(input){ return String(input.value || '').trim(); }).filter(Boolean);
    if(selectedIds.length > limit){
      selectedIds = selectedIds.slice(0, limit);
      refs().currentGamesGrid.querySelectorAll(selector).forEach(function(input){ input.checked = selectedIds.includes(String(input.value || '').trim()); });
      setPlanAlert('Only ' + String(limit) + ' player' + (limit === 1 ? '' : 's') + ' can sit out from this court type.');
    }
    const baseIds = getCourtVariableBasePlayerIds(court);
    const selectedSet = new Set(selectedIds);
    const remainingPlayers = baseIds.filter(function(id){ return !selectedSet.has(id); }).map(getPlayer).filter(Boolean);
    const nextCourt = makeBestCourtFromVariablePlayers(remainingPlayers, originalKind || court.kind);
    if(!nextCourt){
      setPlanAlert('That court cannot stay playable after those sit-outs. Use No Game instead.');
      return;
    }
    const oldKey = getCourtSaveKey(court, index);
    const rebuilt = resetUnsubmittedCourtScoreDraft(evaluateCourtRestrictions(Object.assign({ courtNumber:Number(index) + 1 }, JSON.parse(JSON.stringify(nextCourt)))));
    rebuilt.variableBasePlayerIds = baseIds.slice();
    rebuilt.variableOriginalKind = originalKind || court.kind;
    rebuilt.variableSitOutIds = selectedIds.slice();
    rebuilt.currentCourtKey = ['current-set', String(state().plan.generatedAt || 'unstarted'), 'slot', String(Number(index) + 1), 'edit', Date.now().toString(36), buildMatchupKey(rebuilt)].join('::');
    state().plan.current[index] = rebuilt;
    const optionalSet = new Set(Array.isArray(state().plan.currentOptionalSitOutPlayerIds) ? state().plan.currentOptionalSitOutPlayerIds : []);
    baseIds.forEach(function(id){ optionalSet.delete(id); });
    selectedIds.forEach(function(id){ optionalSet.add(id); });
    state().plan.currentOptionalSitOutPlayerIds = Array.from(optionalSet);
    syncCurrentSitOutUnion();
    // Deliberately do not alter lastSitOutPlayerIds or sitOutCounts here:
    // these are player-selected optional sit-outs, not circumstantial rotation events.
    state().plan.currentSavedCourtKeys = (state().plan.currentSavedCourtKeys || []).filter(function(key){ return key !== oldKey; });
    state().plan.currentSavedSignatures = (state().plan.currentSavedSignatures || []).filter(function(signature){ return signature !== (court.signature || buildMatchupKey(court)); });
    state().plan.currentSetReadyForNext = false;
    markLocalChange();
    queueServerSave();
    refreshCurrentCourtCard(index);
    renderCurrentSitOutInfo();
    setPlanAlert('Court ' + String(Number(index) + 1) + ' variables updated. Other current courts were left unchanged.');
  }


  function renderGamePlan(){
    if(getPageIsLeaving()) return;
    normalizeAttendingPlayerIds();
    capCurrentCourtsToCourtLimit();
    const manager = currentUserIsManager();
    refs().planFormatSelect.value = state().plan.format || 'doubles';
    refs().planDurationSelect.value = String(state().plan.durationMinutes || 60);
    refs().planCourtCountInput.value = String(state().plan.courtCount || 4);
    if(refs().gamePlanSetupCard) refs().gamePlanSetupCard.hidden = false;
    if(refs().generatePlanBtn){
      refs().generatePlanBtn.hidden = false;
      refs().generatePlanBtn.disabled = !manager;
      refs().generatePlanBtn.title = manager ? '' : 'Only the moderator or an approved Badminton Sessions admin can generate a new game plan.';
    }
    [refs().planFormatSelect, refs().planDurationSelect, refs().planCourtCountInput].forEach(function(input){ if(input) input.disabled = !manager; });
    renderAttendanceSelector();
    refreshCurrentCourtRestrictionsFromMemory();
    const currentCourtCount = state().plan.current.length;
    refs().currentGamesGrid.setAttribute('data-court-count', String(currentCourtCount));
    refs().currentGamesGrid.classList.toggle('has-current-courts', currentCourtCount > 0);
    refs().currentGamesGrid.classList.toggle('has-single-current-court', currentCourtCount === 1);
    refs().currentGamesGrid.innerHTML = currentCourtCount
      ? state().plan.current.map((court, index) => renderCourtCard(court, 'current', index)).join('')
      : '<div class="empty-state">No current games generated yet. A moderator or approved admin can create the next plan from the Game Plan Generator.</div>';
    if(state().plan.blankCurrentScoreInputs){
      scheduleHardBlankCurrentScoreInputs(refs().currentGamesGrid);
      state().plan.blankCurrentScoreInputs = false;
    }else{
      enforceCurrentScoreInputsFromState(refs().currentGamesGrid);
    }
    renderCurrentSitOutInfo();
    renderFinishedGames();
    bindPlanActions();
    syncGamePlanSubtabVisibility();
  }


  function syncGamePlanSubtabVisibility(){
    if(/^\/baseline-badminton-session\/game-plan\/?$/i.test(String(location.pathname || ''))){
      activateGamePlanSubtab(gamePlanSubtabFromLocation());
      return;
    }
    const active = document.querySelector('.gameplan-subtab[aria-selected="true"]');
    activateGamePlanSubtab(active ? active.getAttribute('data-gameplan-tab') : 'plan');
  }


  function generateGamePlan(){
    if(!currentUserIsManager()) return;
    normalizeAttendingPlayerIds();
    syncPlanSettingsFromInputs();
    const attendingPlayers = getAttendingPlayers();
    state().plan.attendance = attendingPlayers.length;
    if(attendingPlayers.length < 2){
      setPlanAlert(attendingPlayers.length === 0
        ? 'No attendees are selected. Mark the players who are here before generating the game plan.'
        : 'At least two attendees are needed to generate a game plan.');
      state().plan.current = [];
      state().plan.currentSavedSignatures = [];
      state().plan.currentSavedCourtKeys = [];
      state().plan.currentSetReadyForNext = false;
      state().plan.currentSitOutPlayerIds = [];
      state().plan.currentCircumstantialSitOutPlayerIds = [];
      state().plan.currentOptionalSitOutPlayerIds = [];
      saveSessionData({ immediate:true, verify:true });
      renderAll();
      return;
    }
    protectLocalCurrentState(5000);
    try{ if(typeof abortServerLoad === 'function') abortServerLoad(); }catch(_e){}
    const usedSet = new Set((state().plan.usedCourtSignatures || []).slice());
    state().plan.current = [];
    state().plan.currentSavedSignatures = [];
    state().plan.currentSavedCourtKeys = [];
    state().plan.currentSetReadyForNext = false;
    state().plan.generatedAt = new Date().toISOString();
    state().plan.currentGenerationToken = uid('current-set');
    state().plan.blankCurrentScoreInputs = true;
    state().plan.generationIndex = Math.max(0, Math.round(Number(state().plan.generationIndex || 0))) + 1;
    prepareSpecialFourPlayerIndexForManualGenerate(attendingPlayers, state().plan.format);
    if(attendingPlayers.length === 2){
      state().plan.twoPlayerFlipIndex = Math.max(0, Math.round(Number(state().plan.twoPlayerFlipIndex || 0) || 0)) + 1;
    }else{
      state().plan.twoPlayerFlipIndex = 0;
    }
    state().plan.current = buildCurrentCourtSet(attendingPlayers, state().plan.format, usedSet, state().plan.courtCount).slice(0, state().plan.courtCount);
    refreshCurrentCourtRestrictionsFromMemory();
    clearGeneratedCourtDrafts();
    state().plan.generatedAt = state().plan.generatedAt || new Date().toISOString();
    state().plan.usedCourtSignatures = Array.from(usedSet).slice(-400);
    state().plan.currentSavedSignatures = [];
    state().plan.currentSavedCourtKeys = [];
    state().plan.currentSetReadyForNext = false;
    ensureCurrentCourtSaveKeys(false);
    setPlanAlert(attendingPlayers.length === 2
      ? 'Game plan generated. With two players, repeated singles alternate Side 1 and Side 2 each game for fairness.'
      : (isSpecialFourPlayerLadder(attendingPlayers, state().plan.format)
        ? 'Game plan generated. The four-player doubles ladder now rotates cleanly instead of resetting to the first pairing.'
        : 'Game plan generated with the selected session format: Singles Day uses singles; Doubles Day prioritises doubles, then 2v1, then singles. Courts are ordered as a clean strongest-to-lowest ladder.'));
    saveSessionData();
    renderAll();
  }


  function rollFinishedGamesForward(){
    state().plan.finished = [createFinishedBatchFromCurrent()].concat(state().plan.finished || []).slice(0, 20);
    const attendingPlayers = getAttendingPlayers();
    if(attendingPlayers.length < 2){
      state().plan.current = [];
      state().plan.currentSavedSignatures = [];
      state().plan.currentSavedCourtKeys = [];
      state().plan.currentSetReadyForNext = false;
      state().plan.currentSitOutPlayerIds = [];
      state().plan.generatedAt = '';
      return;
    }
    syncPlanSettingsFromInputs();
    const usedSet = new Set((state().plan.usedCourtSignatures || []).slice());
    state().plan.current = [];
    state().plan.currentSavedSignatures = [];
    state().plan.currentSavedCourtKeys = [];
    state().plan.currentSetReadyForNext = false;
    state().plan.generatedAt = new Date().toISOString();
    state().plan.currentGenerationToken = uid('current-set');
    state().plan.blankCurrentScoreInputs = true;
    state().plan.generationIndex = Math.max(0, Math.round(Number(state().plan.generationIndex || 0))) + 1;
    advanceSpecialFourPlayerIndex(attendingPlayers, state().plan.format || 'doubles');
    if(attendingPlayers.length === 2){
      state().plan.twoPlayerFlipIndex = Math.max(0, Math.round(Number(state().plan.twoPlayerFlipIndex || 0) || 0)) + 1;
    }else{
      state().plan.twoPlayerFlipIndex = 0;
    }
    state().plan.current = ensureGeneratedCurrentSet(attendingPlayers, usedSet);
    refreshCurrentCourtRestrictionsFromMemory();
    clearGeneratedCourtDrafts();
    state().plan.generatedAt = state().plan.generatedAt || new Date().toISOString();
    state().plan.usedCourtSignatures = Array.from(usedSet).slice(-400);
    state().plan.currentSavedSignatures = [];
    state().plan.currentSavedCourtKeys = [];
    state().plan.currentSetReadyForNext = false;
    ensureCurrentCourtSaveKeys(false);
  }


  function createFinishedBatchFromCurrent(){
    return {
      id: uid('finished-batch'),
      generatedAt: state().plan.generatedAt,
      completedAt: new Date().toISOString(),
      attendance: state().plan.attendance,
      format: state().plan.format,
      durationMinutes: state().plan.durationMinutes,
      activePairs: state().plan.current.filter(court => !courtMarkedNoGame(court) && court.kind === 'doubles').length,
      circumstantialSitOutPlayerIds: (state().plan.currentCircumstantialSitOutPlayerIds || []).slice(),
      optionalSitOutPlayerIds: (state().plan.currentOptionalSitOutPlayerIds || []).slice(),
      courts: state().plan.current.map(court => ({
        courtNumber: court.courtNumber,
        kind: court.kind,
        noGame: courtMarkedNoGame(court),
        side1Label: getTeamLabel(court.side1),
        side2Label: getTeamLabel(court.side2),
        score1: court.score1,
        score2: court.score2,
        winnerLabel: court.savedWinnerLabel || '',
        targetAreaText: court.targetAreaText || 'Full court',
        shotRestrictionText: getShotRestrictionText(court.shotRestrictionStage, court.shotRestrictions),
        hardshipRegistered: court.savedHardship || '',
        ratingSummary: court.savedRatingSummary || ''
      }))
    };
  }


  function normalizeAttendingPlayerIds(options){
    const opts = options || {};
    const existingIds = new Set(state().players.map(player => player.id));
    let ids = Array.isArray(state().plan.attendingPlayerIds) ? state().plan.attendingPlayerIds.filter(id => existingIds.has(id)) : [];
    if(opts.allowAttendanceFallback !== false && !ids.length && Number(state().plan.attendance || 0) > 0){
      ids = state().players.slice(0, Math.min(state().players.length, Number(state().plan.attendance || 0))).map(player => player.id);
    }
    state().plan.attendingPlayerIds = Array.from(new Set(ids));
    state().plan.attendance = state().plan.attendingPlayerIds.length;
    if(!state().plan.sitOutCounts || typeof state().plan.sitOutCounts !== 'object') state().plan.sitOutCounts = {};
    state().plan.lastSitOutPlayerIds = Array.isArray(state().plan.lastSitOutPlayerIds) ? state().plan.lastSitOutPlayerIds.filter(id => existingIds.has(id)) : [];
    state().plan.currentSitOutPlayerIds = Array.isArray(state().plan.currentSitOutPlayerIds) ? state().plan.currentSitOutPlayerIds.filter(id => existingIds.has(id)) : [];
    Object.keys(state().plan.sitOutCounts).forEach(id => { if(!existingIds.has(id)) delete state().plan.sitOutCounts[id]; });
    state().players.forEach(player => {
      if(!Object.prototype.hasOwnProperty.call(state().plan.sitOutCounts, player.id)) state().plan.sitOutCounts[player.id] = 0;
    });
  }

    return Object.freeze({
      wireGamePlanSubtabs:wireGamePlanSubtabs,
      bindPlanActions:bindPlanActions,
      applyCourtSitOutSelection:applyCourtSitOutSelection,
      renderGamePlan:renderGamePlan,
      syncGamePlanSubtabVisibility:syncGamePlanSubtabVisibility,
      generateGamePlan:generateGamePlan,
      rollFinishedGamesForward:rollFinishedGamesForward,
      createFinishedBatchFromCurrent:createFinishedBatchFromCurrent,
      normalizeAttendingPlayerIds:normalizeAttendingPlayerIds
    });
  }

  global.BASELINE_BADMINTON_GAME_PLAN = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);

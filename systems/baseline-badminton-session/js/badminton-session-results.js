(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const getState = options.getState;
    const getRefs = options.getRefs;
    const safeNumber = options.safeNumber;
    const escapeHtml = options.escapeHtml;
    const cssEscape = options.cssEscape;
    const buildMatchupKey = options.buildMatchupKey;
    const evaluateCourtRestrictions = options.evaluateCourtRestrictions;
    const getCourtSaveKey = options.getCourtSaveKey;
    const protectLocalCurrentState = options.protectLocalCurrentState;
    const saveSessionData = options.saveSessionData;
    const currentUserIsManager = options.currentUserIsManager;
    const clearGeneratedCourtDrafts = options.clearGeneratedCourtDrafts;
    const setPlanAlert = options.setPlanAlert;
    const allCurrentCourtsSaved = options.allCurrentCourtsSaved;
    const courtMarkedNoGame = options.courtMarkedNoGame;
    const rollFinishedGamesForward = options.rollFinishedGamesForward;
    const syncAllCurrentCourtDraftsFromInputs = options.syncAllCurrentCourtDraftsFromInputs;
    const refreshCurrentCourtCard = options.refreshCurrentCourtCard;
    const renderAll = options.renderAll;
    const getDominantHardshipEntryForCourt = options.getDominantHardshipEntryForCourt;
    const getDominantIncreaseOptionsForSide = options.getDominantIncreaseOptionsForSide;
    const getDominantReduceOptionsForSide = options.getDominantReduceOptionsForSide;
    const hardshipValueFromVisibleText = options.hardshipValueFromVisibleText;
    const renderCurrentSitOutInfo = options.renderCurrentSitOutInfo;
    const inputMatchesGeneration = options.inputMatchesGeneration;
    const createInitialState = options.createInitialState;
    const maxScore = Number(options.maxScore || 30);

    function state(){
      const current = getState();
      if(!current || typeof current !== 'object') throw new Error('Badminton result workflow requires session state.');
      return current;
    }

    function refs(){ return getRefs() || {}; }


  function canSaveCourtNow(court){
    if(!court || court.score1 == null || court.score2 == null) return false;
    const score1 = Math.max(0, Math.min(maxScore, Math.round(safeNumber(court.score1, 0))));
    const score2 = Math.max(0, Math.min(maxScore, Math.round(safeNumber(court.score2, 0))));
    return validateScores(score1, score2) === '';
  }

  // BASELINE-BADMINTON-HARDSHIP-DOMINANT-RADIO-REIMPLEMENTATION-20260608
  // The hardship control is deliberately no longer a dropdown. The visible choice is
  // now a real radio input, so Save Results cannot miss a not-yet-committed select value.
    function renderHardshipControl(court, phase, index){
    const context = getHardshipResultContext(court);
    const options = context.options || [];
    const selectedValue = String(court && court.pendingHardship || '').trim();
    const stateKey = getHardshipControlStateKey(court);
    const wrapOpen = '<div class="hardship-control" data-hardship-wrap="' + escapeHtml(String(index)) + '" data-hardship-state-key="' + escapeHtml(stateKey) + '" data-selected-hardship="' + escapeHtml(selectedValue) + '">';
    const saveButton = '<button class="action hardship-save" data-save-court="' + escapeHtml(String(index)) + '" data-save-signature="' + escapeHtml(String(court.signature || '')) + '" data-hardship-save-button="true" data-hardship-value="' + escapeHtml(selectedValue) + '" type="button" onclick="return global.BASELINE_saveCourtResultButton ? global.BASELINE_saveCourtResultButton(event,this) : false;">Save Results</button>';

    if(!canSaveCourtNow(court)){
      if(court) court.pendingHardship = '';
      return wrapOpen + '<div class="hardship-row"><div class="hardship-field"><div class="hardship-note">Enter a valid score to see whether a hardship adjustment is needed.</div><input type="hidden" data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-hardship-store="true" value=""/></div>' + saveButton + '</div></div>';
    }

    if(!options.length){
      let text = 'No hardship adjustment is triggered by this score.';
      if(context.active && context.action === 'increase') text = 'No further hardship options available.';
      if(context.active && context.action === 'reduce') text = 'No further hardship restoration options available.';
      if(!context.active && context.valid && Number(context.losingScore) > 15) text = 'No hardship initiation is triggered by this score.';
      return wrapOpen + '<div class="hardship-row"><div class="hardship-field"><div class="hardship-note">' + escapeHtml(text) + '</div><input type="hidden" data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-hardship-store="true" value="' + escapeHtml(selectedValue) + '"/></div>' + saveButton + '</div></div>';
    }

    let selected = options.some(function(option){ return option.value === selectedValue; }) ? selectedValue : '';
    if(options.length === 1 && !selected) selected = options[0].value;
    if(selected && court) court.pendingHardship = selected;

    const noteText = context.action === 'reduce'
      ? 'Hardship is active. Choose what to restore for the next game.'
      : (context.action === 'initiate'
        ? 'This result activates the first hardship for the winner in the next game.'
        : 'Hardship is active. Choose what to make harder for the next game.');

    const radioName = 'hardship-' + escapeHtml(String(index)) + '-' + escapeHtml(String(stateKey).replace(/[^a-zA-Z0-9_-]/g, '-'));
    const optionMarkup = options.map(function(option){
      const checked = selected === option.value ? ' checked' : '';
      return '<label class="hardship-radio-option">' +
        '<input type="radio" data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-hardship="true" data-hardship-option="true" name="' + radioName + '" value="' + escapeHtml(option.value) + '"' + checked + '/>' +
        '<span>' + escapeHtml(option.label) + '</span>' +
      '</label>';
    }).join('');

    return wrapOpen +
      '<div class="hardship-row"><div class="hardship-field"><div class="hardship-label">Hardship Adjustment</div>' +
      '<div class="hardship-radio-group" role="radiogroup" aria-label="Hardship Adjustment">' + optionMarkup + '</div>' +
      '<input type="hidden" data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-hardship-store="true" value="' + escapeHtml(selected) + '"/>' +
      '<div class="hardship-note">' + escapeHtml(noteText) + '</div></div>' + saveButton + '</div></div>';
  }


  function syncCourtScoresFromInputs(index){
    const court = state().plan.current[index];
    if(!court || !refs().currentGamesGrid) return;
    const score1Input = refs().currentGamesGrid.querySelector('[data-index="' + cssEscape(String(index)) + '"][data-score-side="1"]');
    const score2Input = refs().currentGamesGrid.querySelector('[data-index="' + cssEscape(String(index)) + '"][data-score-side="2"]');
    const generationToken = String(state().plan.currentGenerationToken || '');
    const inputMatchesGeneration = function(input){
      if(!input) return false;
      const inputToken = String(input.getAttribute('data-generation-token') || '');
      return !generationToken || !inputToken || inputToken === generationToken;
    };
    if(score1Input && inputMatchesGeneration(score1Input)){
      const raw1 = sanitizeScoreInput(score1Input);
      court.score1 = raw1 === '' ? null : Math.max(0, Math.min(maxScore, Math.round(safeNumber(raw1, 0))));
    }
    if(score2Input && inputMatchesGeneration(score2Input)){
      const raw2 = sanitizeScoreInput(score2Input);
      court.score2 = raw2 === '' ? null : Math.max(0, Math.min(maxScore, Math.round(safeNumber(raw2, 0))));
    }
    normalisePendingHardship(court);
  }

    function syncCourtHardshipFromInput(index){
    const court = state().plan.current[index];
    if(!court || !refs().currentGamesGrid) return '';
    const idx = cssEscape(String(index));
    let selected = '';

    const checked = refs().currentGamesGrid.querySelector('[data-index="' + idx + '"][data-hardship-option="true"]:checked');
    if(checked) selected = String(checked.value || '').trim();

    if(!selected){
      const store = refs().currentGamesGrid.querySelector('[data-index="' + idx + '"][data-hardship-store="true"]');
      if(store) selected = String(store.value || '').trim();
    }

    if(!selected){
      const button = refs().currentGamesGrid.querySelector('[data-save-court="' + idx + '"]');
      if(button) selected = String(button.getAttribute('data-hardship-value') || '').trim();
    }

    if(!selected){
      const wrap = refs().currentGamesGrid.querySelector('[data-hardship-wrap="' + idx + '"]');
      if(wrap) selected = String(wrap.getAttribute('data-selected-hardship') || '').trim();
    }

    if(!selected){
      const visible = refs().currentGamesGrid.querySelector('[data-hardship-wrap="' + idx + '"] .hardship-radio-group');
      const text = visible ? visible.textContent || '' : '';
      selected = hardshipValueFromVisibleText(text);
    }

    if(selected === 'movement' || selected === 'shots'){
      court.pendingHardship = selected;
      const store = refs().currentGamesGrid.querySelector('[data-index="' + idx + '"][data-hardship-store="true"]');
      if(store) store.value = selected;
      const button = refs().currentGamesGrid.querySelector('[data-save-court="' + idx + '"]');
      if(button) button.setAttribute('data-hardship-value', selected);
      const wrap = refs().currentGamesGrid.querySelector('[data-hardship-wrap="' + idx + '"]');
      if(wrap) wrap.setAttribute('data-selected-hardship', selected);
      return selected;
    }

    return String(court.pendingHardship || '').trim();
  }


  function markCourtSaved(court, index){
    ensureCurrentCourtSaveKeys();
    const key = getCourtSaveKey(court, index);
    if(key) state().plan.currentSavedCourtKeys = Array.from(new Set([...(state().plan.currentSavedCourtKeys || []), key]));
    const signature = court && (court.signature || buildMatchupKey(court));
    if(signature) state().plan.currentSavedSignatures = Array.from(new Set([...(state().plan.currentSavedSignatures || []), signature]));
  }











    function getHardshipResultContext(court){
    const empty = { valid:false, active:false, action:'none', adjustmentSideNumber:null, options:[], losingScore:null, ratingHold:false };
    if(!court || court.score1 == null || court.score2 == null) return empty;
    const score1 = Math.max(0, Math.min(maxScore, Math.round(safeNumber(court.score1, 0))));
    const score2 = Math.max(0, Math.min(maxScore, Math.round(safeNumber(court.score2, 0))));
    if(validateScores(score1, score2) !== '') return empty;

    const winnerSideNumber = score1 > score2 ? 1 : 2;
    const losingScore = Math.min(score1, score2);
    const evaluated = evaluateCourtRestrictions(Object.assign({}, JSON.parse(JSON.stringify(court)), { score1:score1, score2:score2 }));
    const activeEntry = getDominantHardshipEntryForCourt(evaluated);

    if(activeEntry && activeEntry.sideNumber){
      const action = winnerSideNumber === activeEntry.sideNumber ? 'increase' : 'reduce';
      return {
        valid:true,
        active:true,
        action,
        adjustmentSideNumber:activeEntry.sideNumber,
        winnerSideNumber,
        losingScore,
        ratingHold: action === 'reduce',
        options: action === 'increase'
          ? getDominantIncreaseOptionsForSide(evaluated, activeEntry.sideNumber)
          : getDominantReduceOptionsForSide(evaluated, activeEntry.sideNumber)
      };
    }

    if(losingScore <= 15){
      return {
        valid:true,
        active:false,
        action:'initiate',
        adjustmentSideNumber:winnerSideNumber,
        winnerSideNumber,
        losingScore,
        ratingHold:false,
        options:getDominantIncreaseOptionsForSide(evaluated, winnerSideNumber)
      };
    }

    return Object.assign({}, empty, { valid:true, losingScore, winnerSideNumber });
  }


  function hardBlankCurrentScoreInputs(root){
    if(!root || !state() || !state().plan || !Array.isArray(state().plan.current)) return;
    state().plan.current.forEach(function(court, index){
      if(!court || courtSaved(court, index) || courtMarkedNoGame(court)) return;
      court.score1 = null;
      court.score2 = null;
      court.pendingHardship = '';
      [1, 2].forEach(function(sideNumber){
        const selector = '[data-index="' + cssEscape(String(index)) + '"][data-score-side="' + String(sideNumber) + '"]';
        const input = root.querySelector(selector);
        if(!input) return;
        input.value = '';
        input.defaultValue = '';
        input.setAttribute('value', '');
        input.setAttribute('autocomplete', 'off');
      });
      const store = root.querySelector('[data-index="' + cssEscape(String(index)) + '"][data-hardship-store="true"]');
      if(store){
        store.value = '';
        store.defaultValue = '';
        store.setAttribute('value', '');
      }
      root.querySelectorAll('[data-index="' + cssEscape(String(index)) + '"][data-hardship-option="true"]').forEach(function(input){
        input.checked = false;
        input.defaultChecked = false;
      });
      const wrap = root.querySelector('[data-hardship-wrap="' + cssEscape(String(index)) + '"]');
      if(wrap) wrap.outerHTML = renderHardshipControl(court, 'current', index);
    });
  }


  function confirmNoGameForCourt(index){
    if(!currentUserIsManager()) return;
    const court = state().plan.current[index];
    if(!court || courtSaved(court, index) || courtMarkedNoGame(court)) return;
    syncAllCurrentCourtDraftsFromInputs();
    court.noGame = true;
    court.status = 'no-game';
    court.score1 = null;
    court.score2 = null;
    court.pendingHardship = '';
    court.savedWinnerLabel = 'No Game';
    court.savedHardship = '';
    court.savedRatingSummary = 'No rating change';
    markCourtSaved(court, index);
    const completedCurrentSet = allCurrentCourtsSaved();
    if(completedCurrentSet){
      rollFinishedGamesForward();
      clearGeneratedCourtDrafts();
      setPlanAlert('Court marked No Game. The current set is complete and the next set was generated.');
      protectLocalCurrentState(3500);
      saveSessionData();
      renderAll();
      scheduleHardBlankCurrentScoreInputs(refs().currentGamesGrid);
      return;
    }
    state().plan.currentSetReadyForNext = false;
    protectLocalCurrentState(3500);
    saveSessionData();
    refreshCurrentCourtCard(index);
    renderCurrentSitOutInfo();
    setPlanAlert('Court ' + String(Number(index) + 1) + ' marked as No Game. Waiting for the remaining current court results.');
  }


  function requestNoGameConfirmation(index, input){
    if(!currentUserIsManager()) return;
    const court = state().plan.current[index];
    if(!court || courtSaved(court, index) || courtMarkedNoGame(court)) return;
    document.querySelectorAll('[data-no-game-dialog="true"]').forEach(function(node){ node.remove(); });
    document.body.insertAdjacentHTML('beforeend', renderNoGameDialog(index));
    const dialog = document.body.querySelector('[data-no-game-dialog="true"][data-no-game-index="' + cssEscape(String(index)) + '"]');
    if(dialog){
      dialog.querySelectorAll('[data-no-game-action]').forEach(function(button){
        button.addEventListener('click', function(event){
          try{ event.preventDefault(); }catch(_e){}
          try{ event.stopPropagation(); }catch(_e){}
          handleNoGameDialogAction(button);
        });
      });
    }
    if(input) input.value = '0';
  }


  function handleNoGameDialogAction(button){
    const dialog = button && button.closest ? button.closest('[data-no-game-dialog="true"]') : null;
    if(!dialog) return;
    const index = Number(dialog.getAttribute('data-no-game-index'));
    const action = String(button.getAttribute('data-no-game-action') || '');
    dialog.remove();
    if(action === 'yes') confirmNoGameForCourt(index);
  }

  try{
    document.addEventListener('click', function(event){
      const button = event && event.target && event.target.closest ? event.target.closest('[data-no-game-action]') : null;
      if(!button) return;
      try{ event.preventDefault(); }catch(_e){}
      try{ event.stopPropagation(); }catch(_e){}
      handleNoGameDialogAction(button);
    }, true);
  }catch(_e){}


  function validateScores(score1, score2){
    if(!Number.isInteger(score1) || !Number.isInteger(score2)) return 'Scores must be whole numbers.';
    if(score1 < 0 || score2 < 0) return 'Scores must be zero or higher.';
    if(score1 > maxScore || score2 > maxScore) return 'Do not enter a number above 30.';
    if(score1 === score2) return 'A saved result needs a winner.';
    const winner = Math.max(score1, score2);
    const loser = Math.min(score1, score2);
    if(winner < 21) return 'Winner must reach at least 21.';
    if(winner < maxScore && winner - loser < 2) return 'Winner must lead by 2 unless the score reaches 30.';
    if(winner === maxScore && loser > 29) return 'Official maximum is 30/29.';
    return '';
  }


  function enforceCurrentScoreInputsFromState(root){
    if(!root || !state() || !state().plan || !Array.isArray(state().plan.current)) return;
    state().plan.current.forEach(function(court, index){
      if(!court || courtMarkedNoGame(court)) return;
      [1, 2].forEach(function(sideNumber){
        const input = root.querySelector('[data-index="' + cssEscape(String(index)) + '"][data-score-side="' + String(sideNumber) + '"]');
        if(!input) return;
        const stored = sideNumber === 1 ? court.score1 : court.score2;
        const expected = stored == null ? '' : String(stored);
        if(input.value !== expected) input.value = expected;
        input.defaultValue = expected;
      });
    });
  }


  function renderNoGameDialog(index){
    return '<div class="no-game-dialog" data-no-game-dialog="true" data-no-game-index="' + escapeHtml(String(index)) + '" role="dialog" aria-modal="true" aria-label="Confirm No Game">' +
      '<div class="no-game-dialog-card">' +
        '<strong>Confirm “No Game”</strong>' +
        '<div class="note">This will lock this court as No Game. It will not require scores and it will not erase other courts.</div>' +
        '<div class="row"><button class="action" type="button" data-no-game-action="yes">Yes</button><button class="action secondary" type="button" data-no-game-action="no">No</button></div>' +
      '</div>' +
    '</div>';
  }


  function ensureCurrentCourtSaveKeys(force){
    if(!state().plan) state().plan = createInitialState().plan;
    if(!Array.isArray(state().plan.current)) state().plan.current = [];
    if(!Array.isArray(state().plan.currentSavedCourtKeys)) state().plan.currentSavedCourtKeys = [];
    state().plan.current.forEach(function(court, index){
      if(!court || typeof court !== 'object') return;
      if(force || !court.currentCourtKey){
        court.currentCourtKey = getCourtSaveKey(court, index);
      }
    });
  }


  function courtSaved(courtOrSignature, index){
    if(courtOrSignature && typeof courtOrSignature === 'object'){
      const key = getCourtSaveKey(courtOrSignature, index);
      return !!(key && Array.isArray(state().plan.currentSavedCourtKeys) && state().plan.currentSavedCourtKeys.includes(key));
    }
    const signature = String(courtOrSignature || '');
    return !!(signature && Array.isArray(state().plan.currentSavedSignatures) && state().plan.currentSavedSignatures.includes(signature));
  }


  function getHardshipControlStateKey(court){
    const context = getHardshipResultContext(court);
    return [context.action || 'none', context.active ? 'active' : 'inactive', String(context.adjustmentSideNumber || ''), (context.options || []).map(function(option){ return option.value; }).join('|'), String(court && court.pendingHardship || ''), String(court && court.score1 != null ? court.score1 : ''), String(court && court.score2 != null ? court.score2 : '')].join('::');
  }


  function scheduleHardBlankCurrentScoreInputs(root){
    const target = root || refs().currentGamesGrid;
    hardBlankCurrentScoreInputs(target);
    try{ global.requestAnimationFrame(function(){ hardBlankCurrentScoreInputs(target); }); }catch(_e){}
    [25, 120, 300].forEach(function(ms){
      try{ global.setTimeout(function(){ hardBlankCurrentScoreInputs(target); }, ms); }catch(_e){}
    });
  }


  function normalisePendingHardship(court){
    const context = getHardshipResultContext(court);
    const options = (context.options || []).map(item => item.value);
    if(!options.length){ court.pendingHardship = ''; return; }
    if(!options.includes(court.pendingHardship || '')) court.pendingHardship = options.length === 1 ? options[0] : '';
  }


  function sanitizeScoreInput(input){
    if(!input) return '';
    const original = String(input.value || '');
    let cleaned = original.replace(/\D/g, '').slice(0, 2);
    if(cleaned !== '' && Number(cleaned) > maxScore) cleaned = String(maxScore);
    if(cleaned !== original) input.value = cleaned;
    return cleaned;
  }

    return Object.freeze({
      canSaveCourtNow:canSaveCourtNow,
      renderHardshipControl:renderHardshipControl,
      syncCourtScoresFromInputs:syncCourtScoresFromInputs,
      syncCourtHardshipFromInput:syncCourtHardshipFromInput,
      markCourtSaved:markCourtSaved,
      getHardshipResultContext:getHardshipResultContext,
      hardBlankCurrentScoreInputs:hardBlankCurrentScoreInputs,
      confirmNoGameForCourt:confirmNoGameForCourt,
      requestNoGameConfirmation:requestNoGameConfirmation,
      handleNoGameDialogAction:handleNoGameDialogAction,
      validateScores:validateScores,
      enforceCurrentScoreInputsFromState:enforceCurrentScoreInputsFromState,
      renderNoGameDialog:renderNoGameDialog,
      ensureCurrentCourtSaveKeys:ensureCurrentCourtSaveKeys,
      courtSaved:courtSaved,
      getHardshipControlStateKey:getHardshipControlStateKey,
      scheduleHardBlankCurrentScoreInputs:scheduleHardBlankCurrentScoreInputs,
      normalisePendingHardship:normalisePendingHardship,
      sanitizeScoreInput:sanitizeScoreInput
    });
  }

  global.BASELINE_BADMINTON_RESULTS = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);

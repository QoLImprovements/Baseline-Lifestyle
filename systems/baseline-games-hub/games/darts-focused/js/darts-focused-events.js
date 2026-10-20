export function createDartsEventHandlers({
  byId,
  getSelected,
  setSelected,
  stateFor,
  resetState,
  clearGameTimers,
  clearAutoTimer,
  renderSelectedGame,
  openHowToPlay,
  closeInfo,
  closePanel,
  changeTier,
  toggleAutoNext,
  toggleFullscreen,
  newRound,
  answerDecisionChoice,
  answerStandard,
  startTargetLock,
  startHoldPicture,
  startDistraction,
  startPressure,
  submitRoutine,
  moveRoutine,
  startSequence,
  startDecisionCategory,
  submitDecisionFacts,
  advanceDecision,
  returnDecisionCategories,
  startRushedPace,
  answerTarget,
  answerGeography,
  sequenceClick
}){
  function handleClick(event){
    const target=event.target instanceof Element?event.target:null;
    if(!target)return;

    const how=target.closest('[data-darts-how]');
    if(how){
      event.preventDefault();
      event.stopImmediatePropagation();
      openHowToPlay(how.getAttribute('data-darts-how'));
      return;
    }
    if(target.closest('[data-close-games-modal]')){closeInfo();return;}
    if(target.closest('[data-close-darts-focused]')){
      event.preventDefault();
      event.stopImmediatePropagation();
      closePanel();
      return;
    }
    if(byId('dartsFocusedPanel')?.classList.contains('is-active')&&(target.closest('[data-select-game]')||target.closest('.tab[data-target]'))){
      closePanel({restoreOverview:false});
    }

    const selector=target.closest('[data-darts-game]');
    if(selector){
      clearGameTimers();
      clearAutoTimer();
      const id=selector.getAttribute('data-darts-game');
      setSelected(id);
      resetState(id);
      renderSelectedGame();
      byId('dartsGameSurface')?.focus({preventScroll:true});
      return;
    }

    const tier=target.closest('[data-darts-tier]');
    if(tier){changeTier(tier.getAttribute('data-darts-tier'));return;}
    if(target.closest('#dartsAutoNextBtn')){toggleAutoNext();return;}
    if(target.closest('#dartsFullscreenBtn')){toggleFullscreen();return;}

    const next=target.closest('[data-darts-new-round]');
    if(next){newRound(next.getAttribute('data-darts-new-round'));return;}

    const answer=target.closest('[data-darts-answer]');
    if(answer){
      const id=answer.getAttribute('data-darts-answer');
      if(id==='decision-training')answerDecisionChoice(answer.getAttribute('data-value'));
      else answerStandard(id,answer.getAttribute('data-value'));
      return;
    }

    if(target.closest('[data-start-target-lock]')){startTargetLock();return;}
    if(target.closest('[data-start-hold-picture]')){startHoldPicture();return;}
    if(target.closest('[data-start-distraction]')){startDistraction();return;}
    if(target.closest('[data-start-pressure]')){startPressure();return;}
    if(target.closest('[data-submit-routine]')){submitRoutine();return;}

    const move=target.closest('[data-routine-move]');
    if(move){
      moveRoutine(move.getAttribute('data-routine-move'),Number(move.getAttribute('data-index')));
      return;
    }

    if(target.closest('[data-start-sequence]')){startSequence();return;}
    if(target.closest('[data-clear-sequence]')){
      stateFor('sequence-recall').input=[];
      renderSelectedGame();
      return;
    }

    const category=target.closest('[data-decision-category]');
    if(category){startDecisionCategory(category.getAttribute('data-decision-category'));return;}
    if(target.closest('[data-decision-submit-facts]')){submitDecisionFacts();return;}
    if(target.closest('[data-decision-advance]')){advanceDecision();return;}
    if(target.closest('[data-decision-return]')){returnDecisionCategories();return;}
    if(target.closest('[data-decision-pace-rushed]')){startRushedPace();return;}

    const boardTarget=target.closest('[data-board-target]');
    if(boardTarget){
      const code=boardTarget.getAttribute('data-board-target');
      const selected=getSelected();
      if(selected==='target-lock')answerTarget(code);
      else if(selected==='board-geography')answerGeography(boardTarget.getAttribute('data-board-segment'));
      else if(selected==='sequence-recall')sequenceClick(code);
    }
  }

  function handleChange(event){
    const target=event.target;
    if(!(target instanceof HTMLInputElement))return;

    if(target.matches('[data-confidence-slider]')){
      const state=stateFor('decision-training');
      state.confidence=Number(target.value);
      const value=byId('confidenceValue');
      if(value)value.textContent=`${state.confidence}%`;
    }

    if(target.matches('[data-decision-fact]')){
      const state=stateFor('decision-training');
      const id=target.getAttribute('data-decision-fact');
      state.selected=target.checked
        ? [...new Set([...state.selected,id])]
        : state.selected.filter((item)=>item!==id);
    }
  }

  function handleKeydown(event){
    if(!byId('dartsFocusedPanel')?.classList.contains('is-active'))return;
    if(event.key==='Escape'&&document.fullscreenElement===byId('dartsGameCard'))return;
    if(event.key==='Escape'){closePanel();return;}

    const board=event.target.closest?.('[data-board-target]');
    if(board&&(event.key==='Enter'||event.key===' ')){
      event.preventDefault();
      board.click();
      return;
    }

    const selector=event.target.closest?.('[data-darts-game]');
    if(!selector||!['ArrowDown','ArrowUp','ArrowLeft','ArrowRight'].includes(event.key))return;
    event.preventDefault();
    const buttons=[...document.querySelectorAll('[data-darts-game]')];
    const index=buttons.indexOf(selector);
    const delta=event.key==='ArrowDown'||event.key==='ArrowRight'?1:-1;
    buttons[(index+delta+buttons.length)%buttons.length]?.focus();
  }

  return Object.freeze({handleClick,handleChange,handleKeydown});
}

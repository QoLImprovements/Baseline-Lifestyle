import { createFocusedGameTimerManager } from '../../../js/focused-game-timing.js';

export function createBadmintonTimerManager(options={}){
  const timing=createFocusedGameTimerManager({
    ...options,
    cancelAutoWhenDisabled:false
  });

  return Object.freeze({
    clear:timing.clearAll,
    later:timing.scheduleGame,
    scheduleAuto:timing.scheduleAuto,
    remaining:timing.remaining,
    handleVisibilityChange:timing.handleVisibilityChange,
    getSessionToken:timing.getSessionToken
  });
}

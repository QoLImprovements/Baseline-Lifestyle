import { createFocusedGameTimerManager } from '../../../js/focused-game-timing.js';

export function createDartsTimerManager(options={}){
  return createFocusedGameTimerManager({
    ...options,
    cancelAutoWhenDisabled:true
  });
}

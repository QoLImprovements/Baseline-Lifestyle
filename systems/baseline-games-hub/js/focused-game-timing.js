export function createFocusedGameTimerManager({
  getGameId,
  shouldAutoNext,
  onHiddenDuration=()=>{},
  onVisibleResume=()=>{},
  getVisibilityState=()=>document.visibilityState,
  wallNow=()=>Date.now(),
  perfNow=()=>performance.now(),
  setTimer=(fn,ms)=>setTimeout(fn,ms),
  clearTimer=id=>clearTimeout(id),
  cancelAutoWhenDisabled=true
}={}){
  let sessionToken=0;
  const gameTimers=new Set();
  let autoTimer=null;
  let visibilityPausedAt=null;

  function cancel(timer){
    if(!timer)return;
    if(timer.timeoutId)clearTimer(timer.timeoutId);
    timer.timeoutId=0;
  }

  function remaining(timer){
    if(!timer||timer.cancelled)return 0;
    if(!timer.timeoutId)return Math.max(0,timer.remaining);
    return Math.max(0,timer.remaining-Math.max(0,wallNow()-timer.startedAt));
  }

  function arm(timer){
    if(!timer||timer.cancelled||timer.timeoutId||getVisibilityState()==='hidden')return;
    timer.startedAt=wallNow();
    timer.timeoutId=setTimer(()=>{
      timer.timeoutId=0;
      if(timer.cancelled)return;
      timer.remaining=0;
      if(timer.kind==='auto')autoTimer=null;
      else gameTimers.delete(timer);
      if(timer.token!==sessionToken||timer.gameId!==getGameId())return;
      timer.fn();
    },Math.max(0,timer.remaining));
  }

  function create(fn,ms,kind='game'){
    const timer={
      fn,
      remaining:Math.max(0,Number(ms)||0),
      startedAt:0,
      timeoutId:0,
      token:sessionToken,
      gameId:getGameId(),
      kind,
      cancelled:false
    };
    arm(timer);
    return timer;
  }

  function pause(timer){
    if(!timer||timer.cancelled||!timer.timeoutId)return;
    timer.remaining=remaining(timer);
    cancel(timer);
  }

  function resume(timer){
    if(!timer||timer.cancelled||timer.token!==sessionToken||timer.gameId!==getGameId())return;
    arm(timer);
  }

  function clearGame(){
    sessionToken+=1;
    gameTimers.forEach(timer=>{timer.cancelled=true;cancel(timer);});
    gameTimers.clear();
  }

  function clearAuto(){
    if(!autoTimer)return;
    autoTimer.cancelled=true;
    cancel(autoTimer);
    autoTimer=null;
  }

  function clearAll(){
    clearGame();
    clearAuto();
  }

  function scheduleGame(fn,ms){
    const timer=create(fn,ms,'game');
    gameTimers.add(timer);
    return timer;
  }

  function scheduleAuto(fn,ms=1900){
    if(cancelAutoWhenDisabled)clearAuto();
    if(!shouldAutoNext())return null;
    if(!cancelAutoWhenDisabled)clearAuto();
    autoTimer=create(fn,ms,'auto');
    return autoTimer;
  }

  function handleVisibilityChange(){
    if(getVisibilityState()==='hidden'){
      if(visibilityPausedAt===null)visibilityPausedAt=perfNow();
      gameTimers.forEach(pause);
      pause(autoTimer);
      return;
    }
    if(visibilityPausedAt!==null){
      const hiddenFor=Math.max(0,perfNow()-visibilityPausedAt);
      visibilityPausedAt=null;
      onHiddenDuration(hiddenFor);
    }
    gameTimers.forEach(resume);
    resume(autoTimer);
    onVisibleResume();
  }

  return Object.freeze({
    clearGame,
    clearAuto,
    clearAll,
    scheduleGame,
    scheduleAuto,
    remaining,
    handleVisibilityChange,
    getSessionToken:()=>sessionToken
  });
}

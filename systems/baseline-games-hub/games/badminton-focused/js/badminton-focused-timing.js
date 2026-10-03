export function createBadmintonTimerManager({
  getGameId,
  shouldAutoNext,
  onHiddenDuration=()=>{},
  onVisibleResume=()=>{},
  getVisibilityState=()=>document.visibilityState,
  wallNow=()=>Date.now(),
  perfNow=()=>performance.now(),
  setTimer=(fn,ms)=>setTimeout(fn,ms),
  clearTimer=id=>clearTimeout(id)
}={}){
  let sessionToken=0;
  let timers=[];
  let autoTimer=null;
  let visibilityPausedAt=null;

  function cancel(timer){
    if(!timer)return;
    if(timer.timeoutId)clearTimer(timer.timeoutId);
    timer.timeoutId=0;
  }

  function arm(timer){
    if(!timer||timer.cancelled||timer.timeoutId||getVisibilityState()==='hidden')return;
    timer.startedAt=wallNow();
    timer.timeoutId=setTimer(()=>{
      timer.timeoutId=0;
      if(timer.cancelled)return;
      timer.remaining=0;
      if(timer.kind==='auto')autoTimer=null;
      else timers=timers.filter(item=>item!==timer);
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

  function remaining(timer){
    if(!timer||timer.cancelled)return 0;
    if(!timer.timeoutId)return Math.max(0,timer.remaining);
    return Math.max(0,timer.remaining-Math.max(0,wallNow()-timer.startedAt));
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

  function clear(){
    sessionToken+=1;
    timers.forEach(timer=>{timer.cancelled=true;cancel(timer);});
    timers=[];
    if(autoTimer){
      autoTimer.cancelled=true;
      cancel(autoTimer);
      autoTimer=null;
    }
  }

  function later(fn,ms){
    const timer=create(fn,ms,'game');
    timers.push(timer);
    return timer;
  }

  function scheduleAuto(fn,ms=1900){
    if(!shouldAutoNext())return null;
    if(autoTimer){
      autoTimer.cancelled=true;
      cancel(autoTimer);
    }
    autoTimer=create(fn,ms,'auto');
    return autoTimer;
  }

  function handleVisibilityChange(){
    if(getVisibilityState()==='hidden'){
      if(visibilityPausedAt===null)visibilityPausedAt=perfNow();
      timers.forEach(pause);
      pause(autoTimer);
      return;
    }
    if(visibilityPausedAt!==null){
      const hiddenFor=Math.max(0,perfNow()-visibilityPausedAt);
      visibilityPausedAt=null;
      onHiddenDuration(hiddenFor);
    }
    timers.forEach(resume);
    resume(autoTimer);
    onVisibleResume();
  }

  return Object.freeze({
    clear,
    later,
    scheduleAuto,
    remaining,
    handleVisibilityChange,
    getSessionToken:()=>sessionToken
  });
}

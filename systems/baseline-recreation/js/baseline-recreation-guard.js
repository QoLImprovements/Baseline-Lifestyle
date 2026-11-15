(function(global){
  'use strict';

  const BUILD='RECREATION_MANUAL_SAVE_RECOVERY_20261115_2';
  const DATA_API='/systems/baseline-recreation/api/games_data.php';
  const registryApps=global.BASELINE_GAMES_REGISTRY?.persistentApps?.() || [];
  const ALL_APPS=Object.freeze(registryApps.length ? registryApps.slice() : ['pairs','detectword','make24','trackcoin','ruleshift','ninja','crossnumber','blockgrid','coloursort','weightcoherence','unheardsignal','tearswithoutwitness','movedalong','moonbearswitness','pantherjigsaw','bearjigsaw','foxjigsaw','elephantsjigsaw','dartsfocused','meridiangrove','badmintonfocused','hubsettings']);
  const pending=Object.create(null);
  const timers=Object.create(null);
  const writeChains=Object.create(null);
  const unsaved=Object.create(null);
  let retryPromise=null;
  let recoveryTimer=0;
  let retryDelayMs=750;
  function cancelRecovery(){
    if(recoveryTimer)global.clearTimeout(recoveryTimer);
    recoveryTimer=0;
  }
  function scheduleRecovery(){
    if(recoveryTimer || state.status==='conflict' || (state.status==='signed-out' && !global.BASELINE_auth?.get?.().authed))return;
    // A transient HTTP/network failure must not permanently disable account saving.
    const delay=retryDelayMs;
    retryDelayMs=Math.min(30000,Math.round(retryDelayMs*1.8));
    recoveryTimer=global.setTimeout(()=>{
      recoveryTimer=0;
      if(state.status==='conflict'||(state.status==='signed-out'&&!global.BASELINE_auth?.get?.().authed))return;
      if(!state.authenticated){
        if(bootstrap()&&unsavedCount())retryFailedSaves();
      }else if(unsavedCount()){
        retryFailedSaves();
      }
    },delay);
  }
  const state={authenticated:false,accountId:'',canSave:false,ready:false,status:'loading',lastError:'',profiles:{},revisions:{}};

  function clone(value){
    try{return value&&typeof value==='object'?JSON.parse(JSON.stringify(value)):null;}
    catch(_error){return null;}
  }
  function parse(raw){try{return raw?JSON.parse(raw):null;}catch(_error){return null;}}
  function validApp(app){return ALL_APPS.includes(String(app||''));}
  function revisionFor(app){
    const value=Number(state.revisions[app]);
    return Number.isInteger(value)&&value>=0?value:0;
  }
  function rememberRevisions(revisions){
    state.revisions={};
    if(!revisions||typeof revisions!=='object')return;
    Object.entries(revisions).forEach(([app,value])=>{
      const revision=Number(value);
      if(validApp(app)&&Number.isInteger(revision)&&revision>=0)state.revisions[app]=revision;
    });
  }
  function emitStorageState(){
    try{
      document.dispatchEvent(new CustomEvent('baseline:game-storage',{detail:{
        status:state.status,authenticated:state.authenticated,canPlay:true,canSave:state.canSave,error:state.lastError
      }}));
    }catch(_error){}
  }
  function setState(status,error,authenticated,canSave){
    state.status=String(status||'unavailable');
    state.lastError=String(error||'');
    state.authenticated=Boolean(authenticated);
    state.canSave=Boolean(canSave);
    state.ready=true;
    emitStorageState();
  }
  function syncRequest(method,url,payload){
    let status=0;
    try{
      const xhr=new XMLHttpRequest();
      xhr.open(method,url,false);
      xhr.withCredentials=true;
      xhr.setRequestHeader('Accept','application/json');
      if(payload!==undefined)xhr.setRequestHeader('Content-Type','application/json');
      xhr.send(payload===undefined?null:JSON.stringify(payload));
      status=xhr.status;
      const data=parse(xhr.responseText)||{};
      if(status<200||status>=300||!data.ok)return{ok:false,status,error:String(data.error||('http_'+status)),data};
      return{ok:true,status,data};
    }catch(error){
      return{ok:false,status,error:String(error&&error.message||error||'server_unavailable'),data:{}};
    }
  }
  function bootstrap(){
    Object.keys(pending).forEach(app=>{delete pending[app];global.clearTimeout(timers[app]);});
    const result=syncRequest('GET',DATA_API+'?bootstrap=1');
    if(!result.ok){
      // Preserve unsaved edits in this tab if a transient auth/bootstrap request fails.
      // Never quietly throw away a profile after a network error.
      if(!Object.keys(unsaved).length){state.profiles={};rememberRevisions({});}
      setState(result.status===401?'signed-out':'unavailable',result.error,false,false);
      if(result.status!==401 || global.BASELINE_auth?.get?.().authed)scheduleRecovery();
      return false;
    }
    const nextAccount=String(result.data.accountId||'');
    const previousAccount=state.accountId;
    const priorRevisions={...state.revisions};
    // An account switch must never replay another account's unsaved edits.
    if(previousAccount && previousAccount!==nextAccount){
      Object.keys(unsaved).forEach(app=>delete unsaved[app]);
    }
    state.accountId=nextAccount;
    state.profiles={};
    Object.entries(result.data.profiles&&typeof result.data.profiles==='object'?result.data.profiles:{}).forEach(([app,profile])=>{
      if(validApp(app)&&profile&&typeof profile==='object')state.profiles[app]=clone(profile)||{};
    });
    rememberRevisions(result.data.revisions);
    if(previousAccount && previousAccount===nextAccount && Object.keys(unsaved).length){
      const conflict=Object.keys(unsaved).some(app=>revisionFor(app)!==(Number(priorRevisions[app])||0));
      // Retain local edits after reconnect, but do not silently overwrite a newer save.
      Object.keys(unsaved).forEach(app=>{state.profiles[app]=clone(unsaved[app])||{};});
      if(conflict){
        cancelRecovery();
        setState('conflict','revision_conflict',true,false);
        return false;
      }
      setState('unavailable','unsaved_changes',true,false);
      scheduleRecovery();
      return false;
    }
    retryDelayMs=750;
    cancelRecovery();
    setState('ready','',true,true);
    return true;
  }
  function getProfile(app){
    const key=String(app||'');
    return validApp(key)?clone(state.profiles[key]):null;
  }
  function setTemporaryProfile(app,profile){
    const key=String(app||'');
    if(!validApp(key)||!profile||typeof profile!=='object')return false;
    state.profiles[key]=clone(profile)||{};
    return true;
  }
  function postProfileNow(app,profile,keepalive){
    const key=String(app||'');
    if(!state.canSave||!validApp(key)||!profile||typeof profile!=='object')return Promise.resolve(false);
    const snapshot=clone(profile)||{};
    return fetch(DATA_API,{
      method:'POST',credentials:'same-origin',keepalive:!!keepalive,
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({action:'save',app:key,profile:snapshot,expectedRevision:revisionFor(key)})
    }).then(response=>response.json().catch(()=>({})).then(data=>{
      if(response.status===401){
        // An expired login cannot be fixed by repeatedly posting the same draft.
        // Keep the unsaved account draft in this tab until the same account logs in.
        state.lastError='signed_out';
        state.status='signed-out';
        state.authenticated=false;
        state.canSave=false;
        cancelRecovery();
        emitStorageState();
        return false;
      }
      if(response.status===409&&data.error==='revision_conflict'){
        state.lastError='revision_conflict';
        state.status='conflict';
        state.canSave=false;
        cancelRecovery();
        document.documentElement.setAttribute('data-games-server-save-error','revision_conflict');
        emitStorageState();
        return false;
      }
      if(!response.ok||!data.ok)throw new Error(data.error||('http_'+response.status));
      const revision=Number(data.revision);
      if(Number.isInteger(revision)&&revision>=0)state.revisions[key]=revision;
      // A later local edit must not be rolled back by an older server ACK.
      const current=unsaved[key];
      const acknowledged=!current || JSON.stringify(current)===JSON.stringify(snapshot);
      if(acknowledged){delete unsaved[key];state.profiles[key]=clone(data.profile||snapshot)||{};}
      state.lastError='';
      state.status='ready';
      retryDelayMs=750;
      cancelRecovery();
      document.documentElement.removeAttribute('data-games-server-save-error');
      emitStorageState();
      return true;
    })).catch(error=>{
      state.lastError=String(error&&error.message||error||'save_failed');
      state.status='unavailable';
      state.canSave=false;
      document.documentElement.setAttribute('data-games-server-save-error',state.lastError);
      emitStorageState();
      scheduleRecovery();
      return false;
    });
  }
  function postProfile(app,profile,keepalive){
    const key=String(app||'');
    if(!state.canSave||!validApp(key)||!profile||typeof profile!=='object')return Promise.resolve(false);
    const snapshot=clone(profile)||{};
    const previous=writeChains[key]||Promise.resolve(true);
    const write=previous.catch(()=>false).then(()=>postProfileNow(key,snapshot,keepalive));
    const tracked=write.finally(()=>{ if(writeChains[key]===tracked) delete writeChains[key]; });
    writeChains[key]=tracked;
    return tracked;
  }
  function queueProfile(app,profile){
    const key=String(app||'');
    if(!validApp(key)||!profile||typeof profile!=='object')return false;
    setTemporaryProfile(key,profile);
    if(!state.canSave){
      if(state.accountId || global.BASELINE_auth?.get?.().authed)unsaved[key]=clone(profile)||{};
      scheduleRecovery();
      return false;
    }
    pending[key]=clone(profile)||{};
    unsaved[key]=clone(profile)||{};
    global.clearTimeout(timers[key]);
    timers[key]=global.setTimeout(()=>{
      const latest=pending[key];
      delete pending[key];
      if(latest)postProfile(key,latest,false);
    },160);
    return true;
  }
  function saveProfile(app,profile,{immediate=false,keepalive=false}={}){
    const key=String(app||'');
    if(!validApp(key)||!profile||typeof profile!=='object')return Promise.resolve(false);
    setTemporaryProfile(key,profile);
    if(!state.canSave && global.BASELINE_auth?.get?.().authed && state.status!=='conflict')bootstrap();
    if(!state.canSave){
      // Signed-in edits remain recoverable for this tab even after a failed POST.
      if(state.accountId)unsaved[key]=clone(profile)||{};
      scheduleRecovery();
      return Promise.resolve(false);
    }
    if(immediate){
      unsaved[key]=clone(profile)||{};
      global.clearTimeout(timers[key]);
      delete pending[key];
      return postProfile(key,profile,keepalive);
    }
    queueProfile(key,profile);
    return Promise.resolve(true);
  }
  function saveNow(app){
    const key=String(app||'');
    const profile=getProfile(key);
    if(!validApp(key)||!profile)return Promise.resolve(false);
    return saveProfile(key,profile,{immediate:true});
  }
  function recoverConnection(){
    if(state.status==='conflict')return Promise.resolve(false);
    if(!state.authenticated && !bootstrap())return Promise.resolve(false);
    return unsavedCount()?retryFailedSaves():Promise.resolve(state.canSave);
  }
  function unsavedCount(){return Object.keys(unsaved).length;}
  function retryFailedSaves(){
    if(retryPromise)return retryPromise;
    // Never replay a revision conflict: that could overwrite changes from another tab.
    // Signed-out/unauthenticated sessions require login, not speculative writes.
    if(state.status==='conflict' || !state.authenticated || !unsavedCount())return Promise.resolve(false);
    cancelRecovery();
    state.canSave=true;
    state.status='retrying';
    state.lastError='';
    emitStorageState();
    retryPromise=(async()=>{
      // Edits made while a retry is in flight must also be acknowledged.
      // This bounded drain prevents an older successful response from
      // leaving a newer unsaved snapshot stranded indefinitely.
      for(let pass=0;pass<6;pass++){
        const apps=Object.keys(unsaved);
        if(!apps.length)return true;
        for(const key of apps){
          if(!state.canSave)return false;
          const snapshot=clone(unsaved[key]);
          if(!snapshot)continue;
          const ok=await postProfile(key,snapshot,false);
          if(!ok)return false;
        }
      }
      // Continuous gameplay may still create newer drafts; restore the
      // ordinary debounced saver rather than silently marking these saved.
      if(state.canSave)Object.keys(unsaved).forEach(app=>queueProfile(app,unsaved[app]));
      return false;
    })().finally(()=>{
      retryPromise=null;
      if(state.status==='unavailable'&&unsavedCount())scheduleRecovery();
    });
    return retryPromise;
  }
  function flushPending(){
    if(!state.canSave)return;
    Object.keys(pending).forEach(app=>{
      const profile=pending[app];
      delete pending[app];
      global.clearTimeout(timers[app]);
      if(profile)postProfile(app,profile,true);
    });
  }

  bootstrap();
  global.addEventListener('pagehide',flushPending);
  global.addEventListener('online',()=>{
    if(state.status==='unavailable' || (state.authenticated&&unsavedCount())){
      cancelRecovery();
      if(state.authenticated)retryFailedSaves();
      else if(bootstrap()&&unsavedCount())retryFailedSaves();
    }
  });
  global.addEventListener('pageshow',()=>{
    if(state.status==='unavailable'||(state.status==='signed-out'&&global.BASELINE_auth?.get?.().authed))scheduleRecovery();
    else if(state.canSave&&unsavedCount())retryFailedSaves();
  });
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flushPending();});
  document.addEventListener('baseline:auth',event=>{
    const authed=Boolean(event.detail?.authed);
    // Refreshing account name/provider metadata is not a new login.
    // Rebootstrapping on those events used to discard debounced saves.
    if(state.ready && state.authenticated===authed){
      if(authed&&!state.canSave&&state.status!=='conflict'){
        if(state.accountId)retryFailedSaves();
        else if(bootstrap()&&unsavedCount())retryFailedSaves();
      }
      return;
    }
    if(bootstrap()&&unsavedCount())retryFailedSaves();
  });
  document.documentElement.setAttribute('data-baseline-recreation-storage',BUILD);

  global.BaselineGameStorage=Object.freeze({
    build:BUILD,
    isAuthenticated:()=>state.authenticated,
    canBrowse:()=>true,
    canPlay:()=>true,
    canSave:()=>state.canSave,
    isReady:()=>state.ready,
    getStatus:()=>state.status,
    getLastError:()=>state.lastError,
    getUnsavedCount:unsavedCount,
    getUnsavedApps:()=>Object.keys(unsaved),
    retryFailedSaves,
    recoverConnection,
    getProfile,
    setTemporaryProfile,
    saveProfile,
    saveNow,
    flush:flushPending
  });
})(window);

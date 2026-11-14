(function(global){
  'use strict';

  const BUILD='RECREATION_SAVE_RECOVERY_20261114_1';
  const DATA_API='/systems/baseline-recreation/api/games_data.php';
  const registryApps=global.BASELINE_GAMES_REGISTRY?.persistentApps?.() || [];
  const ALL_APPS=Object.freeze(registryApps.length ? registryApps.slice() : ['pairs','detectword','make24','trackcoin','ruleshift','ninja','crossnumber','blockgrid','coloursort','weightcoherence','unheardsignal','tearswithoutwitness','movedalong','moonbearswitness','pantherjigsaw','bearjigsaw','foxjigsaw','elephantsjigsaw','dartsfocused','meridiangrove','badmintonfocused','hubsettings']);
  const pending=Object.create(null);
  const timers=Object.create(null);
  const writeChains=Object.create(null);
  const unsaved=Object.create(null);
  let retryPromise=null;
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
        setState('conflict','revision_conflict',true,false);
        return false;
      }
      setState('unavailable','unsaved_changes',true,false);
      return false; // User can retry these verified-revision changes explicitly.
    }
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
      if(response.status===409&&data.error==='revision_conflict'){
        state.lastError='revision_conflict';
        state.status='conflict';
        state.canSave=false;
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
      document.documentElement.removeAttribute('data-games-server-save-error');
      emitStorageState();
      return true;
    })).catch(error=>{
      state.lastError=String(error&&error.message||error||'save_failed');
      state.status='unavailable';
      state.canSave=false;
      document.documentElement.setAttribute('data-games-server-save-error',state.lastError);
      emitStorageState();
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
    if(!state.canSave)return false;
    pending[key]=clone(profile)||{};
    unsaved[key]=clone(profile)||{};
    global.clearTimeout(timers[key]);
    emitStorageState();
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
    if(!state.canSave){
      // Signed-in edits remain recoverable for this tab even after a failed POST.
      if(state.accountId)unsaved[key]=clone(profile)||{};
      emitStorageState();
      return Promise.resolve(false);
    }
    if(immediate){
      unsaved[key]=clone(profile)||{};
      emitStorageState();
      global.clearTimeout(timers[key]);
      delete pending[key];
      return postProfile(key,profile,keepalive);
    }
    queueProfile(key,profile);
    return Promise.resolve(true);
  }
  function unsavedCount(){return Object.keys(unsaved).length;}
  function retryFailedSaves(){
    if(retryPromise)return retryPromise;
    // Never replay a revision conflict: that could overwrite changes from another tab.
    // Signed-out/unauthenticated sessions require login, not speculative writes.
    if(state.status==='conflict' || !state.authenticated || !unsavedCount())return Promise.resolve(false);
    state.canSave=true;
    state.status='retrying';
    state.lastError='';
    emitStorageState();
    retryPromise=(async()=>{
      for(const key of Object.keys(unsaved)){
        if(!state.canSave)return false;
        const snapshot=clone(unsaved[key]);
        if(!snapshot)continue;
        const ok=await postProfile(key,snapshot,false);
        if(!ok)return false;
      }
      return state.canSave;
    })().finally(()=>{retryPromise=null;});
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
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flushPending();});
  document.addEventListener('baseline:auth',()=>bootstrap());
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
    retryFailedSaves,
    getProfile,
    setTemporaryProfile,
    saveProfile,
    flush:flushPending
  });
})(window);

(function(global){
  'use strict';

  const BUILD='GAMES_HUB_STORAGE_20260913_1';
  const DATA_API='/systems/baseline-games-hub/api/games_data.php';
  const CORE_APPS=['pairs','detectword','make24','trackcoin','ruleshift','ninja'];
  const ALL_APPS=[...CORE_APPS,'dartsfocused','meridiangrove','badmintonfocused'];
  const KEYS=Object.freeze({
    guestProfiles:'__bl_games_guest_profiles_v1__',
    trackCoin:'__bl_trackcoin_v1__',
    autoNext:'__bl_games_auto_next_v1__',
    darts:'__bl_darts_focused_v1__',
    meridian:'baseline.realm.exploration.jrpg.v1',
    badminton:'__bl_badminton_focused_v1__',
    legacyOwner:'__bl_games_legacy_profiles_owner_v1__',
    realmV2:'__bl_baseline_realm_v2__',
    realmV3:'__bl_baseline_realm_v3__',
    realmBackup:'__bl_baseline_realm_v3_backup__',
    realmJournal:'__bl_baseline_realm_v3_journal__'
  });
  const MANAGED_KEYS=new Set([
    KEYS.guestProfiles,KEYS.trackCoin,KEYS.darts,KEYS.meridian,KEYS.badminton,
    KEYS.realmV2,KEYS.realmV3,KEYS.realmBackup,KEYS.realmJournal
  ]);
  const DIRECT_APP=Object.freeze({
    [KEYS.trackCoin]:'trackcoin',
    [KEYS.darts]:'dartsfocused',
    [KEYS.meridian]:'meridiangrove',
    [KEYS.badminton]:'badmintonfocused'
  });
  const memory=new Map();
  const pending=Object.create(null);
  const timers=Object.create(null);
  const state={authenticated:false,canSave:false,ready:false,status:'loading',lastError:'',profiles:{},revisions:{}};
  const local=(()=>{try{return global.localStorage;}catch(_error){return null;}})();
  const storageProto=global.Storage&&global.Storage.prototype;
  const nativeGet=storageProto&&storageProto.getItem;
  const nativeSet=storageProto&&storageProto.setItem;
  const nativeRemove=storageProto&&storageProto.removeItem;

  function copy(value){return value&&typeof value==='object'&&!Array.isArray(value)?Object.assign({},value):{};}
  function parse(raw){try{return raw?JSON.parse(raw):null;}catch(_error){return null;}}
  function own(object,key){return Object.prototype.hasOwnProperty.call(object,key);}
  function serialise(value){try{return JSON.stringify(value);}catch(_error){return '{}';}}
  function nativeRead(key){try{return local&&nativeGet?nativeGet.call(local,key):null;}catch(_error){return null;}}
  function nativeDelete(key){try{if(local&&nativeRemove)nativeRemove.call(local,key);}catch(_error){}}
  function emitStorageState(){
    try{document.dispatchEvent(new CustomEvent('baseline:game-storage',{detail:{status:state.status,authenticated:state.authenticated,canPlay:true,canSave:state.canSave,error:state.lastError}}));}catch(_error){}
  }
  function setState(status,error,authenticated,canSave){
    state.status=status;
    state.lastError=error||'';
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
      if(status<200||status>=300||!data.ok)throw new Error(data.error||('http_'+status));
      return{ok:true,status,data};
    }catch(error){
      return{ok:false,status,error:String(error&&error.message||error||'server_unavailable')};
    }
  }
  function legacyNinjaFromRealm(raw){
    const envelope=parse(raw),save=envelope&&envelope.payload?envelope.payload:envelope,realm=save&&save.realm;
    if(!realm||typeof realm!=='object')return null;
    return Object.assign({app:'ninja',coins:Number(realm.wallet?.coins||0),spirit:Number(realm.wallet?.spirit||0),realm},copy(realm.ninjaTraining));
  }
  function collectLegacyProfiles(){
    const profiles={},aggregate=parse(nativeRead(KEYS.guestProfiles));
    if(aggregate&&typeof aggregate==='object')CORE_APPS.forEach(app=>{if(aggregate[app]&&typeof aggregate[app]==='object')profiles[app]=aggregate[app];});
    const track=parse(nativeRead(KEYS.trackCoin));if(track&&typeof track==='object'&&!profiles.trackcoin)profiles.trackcoin=track;
    if(!profiles.ninja){const realm=legacyNinjaFromRealm(nativeRead(KEYS.realmV3))||legacyNinjaFromRealm(nativeRead(KEYS.realmV2));if(realm)profiles.ninja=realm;}
    const darts=parse(nativeRead(KEYS.darts));if(darts&&typeof darts==='object')profiles.dartsfocused=darts;
    const meridian=parse(nativeRead(KEYS.meridian));if(meridian&&typeof meridian==='object')profiles.meridiangrove=meridian;
    const badminton=parse(nativeRead(KEYS.badminton));if(badminton&&typeof badminton==='object')profiles.badmintonfocused=badminton;
    return profiles;
  }
  function prepareMemory(profiles){
    memory.clear();
    const aggregate={};
    CORE_APPS.forEach(app=>{if(profiles[app]&&typeof profiles[app]==='object')aggregate[app]=profiles[app];});
    memory.set(KEYS.guestProfiles,serialise(aggregate));
    if(profiles.trackcoin)memory.set(KEYS.trackCoin,serialise(profiles.trackcoin));
    if(profiles.dartsfocused)memory.set(KEYS.darts,serialise(profiles.dartsfocused));
    if(profiles.meridiangrove)memory.set(KEYS.meridian,serialise(profiles.meridiangrove));
    if(profiles.badmintonfocused)memory.set(KEYS.badminton,serialise(profiles.badmintonfocused));
  }
  function revisionFor(app){const value=Number(state.revisions[app]);return Number.isInteger(value)&&value>=0?value:0;}
  function rememberRevisions(revisions){
    if(!revisions||typeof revisions!=='object')return;
    Object.entries(revisions).forEach(([app,value])=>{const revision=Number(value);if(ALL_APPS.includes(app)&&Number.isInteger(revision)&&revision>=0)state.revisions[app]=revision;});
  }
  function bootstrap(){
    const guestProfiles=collectLegacyProfiles();
    prepareMemory(guestProfiles);
    const result=syncRequest('GET',DATA_API+'?bootstrap=1');
    if(!result.ok){
      state.profiles={};
      setState(result.status===401?'signed-out':'unavailable',result.error,false,false);
      return;
    }
    nativeDelete(KEYS.legacyOwner);
    const profiles=copy(result.data.profiles);
    state.revisions={};
    rememberRevisions(result.data.revisions);
    state.profiles=profiles;
    prepareMemory(profiles);
    setState('ready','',true,true);
  }
  function postProfile(app,profile,keepalive){
    if(!state.canSave||!ALL_APPS.includes(app)||!profile||typeof profile!=='object')return Promise.resolve(false);
    return fetch(DATA_API,{method:'POST',credentials:'same-origin',keepalive:!!keepalive,headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({action:'save',app,profile,expectedRevision:revisionFor(app)})})
      .then(response=>response.json().catch(()=>({})).then(data=>{
        if(response.status===409&&data.error==='revision_conflict'){
          state.lastError='revision_conflict';state.status='conflict';state.canSave=false;
          document.documentElement.setAttribute('data-games-server-save-error','revision_conflict');
          emitStorageState();
          return false;
        }
        if(!response.ok||!data.ok)throw new Error(data.error||'save_failed');
        const revision=Number(data.revision);if(Number.isInteger(revision)&&revision>=0)state.revisions[app]=revision;
        state.lastError='';state.profiles[app]=data.profile||profile;
        document.documentElement.removeAttribute('data-games-server-save-error');
        emitStorageState();
        return true;
      }))
      .catch(error=>{
        state.lastError=String(error&&error.message||error||'save_failed');
        state.status='unavailable';
        state.canSave=false;
        document.documentElement.setAttribute('data-games-server-save-error',state.lastError);
        emitStorageState();
        return false;
      });
  }
  function queueProfile(app,profile){
    if(!state.canSave||!ALL_APPS.includes(app)||!profile||typeof profile!=='object')return;
    pending[app]=profile;
    global.clearTimeout(timers[app]);
    timers[app]=global.setTimeout(()=>{
      const latest=pending[app];delete pending[app];
      postProfile(app,latest,false).then(ok=>{if(!ok&&latest&&state.canSave){pending[app]=latest;timers[app]=global.setTimeout(()=>queueProfile(app,pending[app]),1800);}});
    },160);
  }
  function profilesFromAggregate(raw,previousRaw){
    const next=parse(raw),previous=parse(previousRaw)||{};
    if(!next||typeof next!=='object')return;
    CORE_APPS.forEach(app=>{if(next[app]&&typeof next[app]==='object'&&serialise(next[app])!==serialise(previous[app]))queueProfile(app,next[app]);});
  }
  function installStorageAuthority(){
    if(!storageProto||!nativeGet||!nativeSet||!nativeRemove){setState('unavailable','storage_api_unavailable',false,false);return;}
    storageProto.getItem=function(key){const name=String(key);if(this===local&&MANAGED_KEYS.has(name))return memory.has(name)?memory.get(name):null;return nativeGet.call(this,key);};
    storageProto.setItem=function(key,value){
      const name=String(key);if(this!==local||!MANAGED_KEYS.has(name))return nativeSet.call(this,key,value);
      const text=String(value),previous=memory.get(name)||null;memory.set(name,text);
      if(!state.canSave)return;
      if(name===KEYS.guestProfiles){profilesFromAggregate(text,previous);return;}
      const app=DIRECT_APP[name],profile=parse(text);if(app&&profile&&typeof profile==='object')queueProfile(app,profile);
    };
    storageProto.removeItem=function(key){const name=String(key);if(this===local&&MANAGED_KEYS.has(name)){memory.delete(name);return;}return nativeRemove.call(this,key);};
  }
  function flushPending(){
    if(!state.canSave)return;
    Object.keys(pending).forEach(app=>{const profile=pending[app];delete pending[app];global.clearTimeout(timers[app]);postProfile(app,profile,true);});
  }

  bootstrap();
  installStorageAuthority();
  global.addEventListener('pagehide',flushPending);
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flushPending();});
  document.addEventListener('baseline:auth',()=>{
    global.setTimeout(()=>{
      bootstrap();
      emitStorageState();
    },0);
  });
  document.documentElement.setAttribute('data-baseline-games-hub-storage',BUILD);
  global.BaselineGameStorage=Object.freeze({
    build:BUILD,
    isAuthenticated:()=>state.authenticated,
    canBrowse:()=>true,
    canPlay:()=>true,
    canSave:()=>state.canSave,
    isReady:()=>state.ready,
    getStatus:()=>state.status,
    getLastError:()=>state.lastError,
    flush:flushPending
  });
})(window);
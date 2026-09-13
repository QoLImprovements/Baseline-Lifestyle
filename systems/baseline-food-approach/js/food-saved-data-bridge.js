(function(global){
  'use strict';

  const BUILD='FOOD_SAVED_DATA_BRIDGE_20260913_1';
  const STORAGE_KEY='__baseline_food_diet_log_v1__';
  const CONFLICT_BACKUP_KEY='__baseline_food_diet_log_v1_conflict_backup__';
  const API='/systems/baseline-food-approach/api/food_data.php';
  const local=(()=>{try{return global.localStorage;}catch(_error){return null;}})();
  const storageProto=global.Storage&&global.Storage.prototype;
  const nativeGet=storageProto&&storageProto.getItem;
  const nativeSet=storageProto&&storageProto.setItem;
  const nativeRemove=storageProto&&storageProto.removeItem;
  const state={authenticated:false,ready:false,canSave:false,status:'loading',revision:0,memory:null,importCandidate:null,lastError:'',installed:false,pending:null,timer:0,inFlight:false};

  function defaultDocument(){return{schemaVersion:1,logs:{},notes:{},recipes:[],health:{}};}
  function parse(raw){try{const value=raw?JSON.parse(raw):null;return value&&typeof value==='object'&&!Array.isArray(value)?value:null;}catch(_error){return null;}}
  function normaliseDocument(value){
    const source=value&&typeof value==='object'&&!Array.isArray(value)?value:{};
    return{
      schemaVersion:1,
      logs:source.logs&&typeof source.logs==='object'&&!Array.isArray(source.logs)?source.logs:{},
      notes:source.notes&&typeof source.notes==='object'&&!Array.isArray(source.notes)?source.notes:{},
      recipes:Array.isArray(source.recipes)?source.recipes:[],
      health:source.health&&typeof source.health==='object'&&!Array.isArray(source.health)?source.health:{}
    };
  }
  function serialise(value){try{return JSON.stringify(normaliseDocument(value));}catch(_error){return JSON.stringify(defaultDocument());}}
  function nativeRead(key){try{return local&&nativeGet?nativeGet.call(local,key):null;}catch(_error){return null;}}
  function nativeWrite(key,value){try{if(local&&nativeSet)nativeSet.call(local,key,String(value));}catch(_error){}}
  function nativeDelete(key){try{if(local&&nativeRemove)nativeRemove.call(local,key);}catch(_error){}}
  function emit(){
    try{document.dispatchEvent(new CustomEvent('baseline:food-saved-data',{detail:{status:state.status,authenticated:state.authenticated,canSave:state.canSave,revision:state.revision,hasImportCandidate:Boolean(state.importCandidate),error:state.lastError}}));}catch(_error){}
  }
  function setState(status,error,authenticated,canSave){state.status=status;state.lastError=error||'';state.authenticated=Boolean(authenticated);state.canSave=Boolean(canSave);state.ready=true;emit();}
  function syncRequest(method,payload){
    let status=0;
    try{
      const xhr=new XMLHttpRequest();
      xhr.open(method,API,false);
      xhr.withCredentials=true;
      xhr.setRequestHeader('Accept','application/json');
      if(payload!==undefined)xhr.setRequestHeader('Content-Type','application/json');
      xhr.send(payload===undefined?null:JSON.stringify(payload));
      status=xhr.status;
      const data=parse(xhr.responseText)||{};
      if(status<200||status>=300||!data.ok)throw new Error(data.error||('http_'+status));
      return{ok:true,status,data};
    }catch(error){return{ok:false,status,error:String(error&&error.message||error||'server_unavailable')};}
  }
  function serverPayload(documentValue,expectedRevision,action='save'){
    return{action,document:normaliseDocument(documentValue),expectedRevision:Number(expectedRevision)||0};
  }
  function backupConflict(documentValue){
    nativeWrite(CONFLICT_BACKUP_KEY,JSON.stringify({savedAt:new Date().toISOString(),revision:state.revision,document:normaliseDocument(documentValue)}));
  }
  function installAuthority(){
    if(state.installed||!storageProto||!nativeGet||!nativeSet||!nativeRemove)return;
    state.installed=true;
    storageProto.getItem=function(key){
      const name=String(key);
      if(this===local&&name===STORAGE_KEY&&state.authenticated)return state.memory;
      return nativeGet.call(this,key);
    };
    storageProto.setItem=function(key,value){
      const name=String(key);
      if(this!==local||name!==STORAGE_KEY||!state.authenticated)return nativeSet.call(this,key,value);
      const documentValue=parse(String(value));
      if(!documentValue)return;
      state.memory=serialise(documentValue);
      queueSave(documentValue);
    };
    storageProto.removeItem=function(key){
      const name=String(key);
      if(this!==local||name!==STORAGE_KEY||!state.authenticated)return nativeRemove.call(this,key);
      const empty=defaultDocument();
      state.memory=serialise(empty);
      queueSave(empty);
    };
  }
  function queueSave(documentValue){
    if(!state.canSave)return;
    state.pending=normaliseDocument(documentValue);
    global.clearTimeout(state.timer);
    state.timer=global.setTimeout(drain,140);
  }
  async function drain(){
    if(state.inFlight||!state.pending||!state.canSave)return;
    const documentValue=state.pending;
    state.pending=null;
    state.inFlight=true;
    try{
      const response=await fetch(API,{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(serverPayload(documentValue,state.revision))});
      const data=await response.json().catch(()=>({}));
      if(response.status===409&&data.error==='revision_conflict'){
        backupConflict(documentValue);
        state.canSave=false;
        state.status='conflict';
        state.lastError='revision_conflict';
        document.documentElement.setAttribute('data-food-server-save-error','revision_conflict');
        emit();
        return;
      }
      if(!response.ok||!data.ok)throw new Error(data.error||'save_failed');
      state.revision=Number(data.revision)||state.revision;
      state.memory=serialise(data.document||documentValue);
      state.lastError='';
      document.documentElement.removeAttribute('data-food-server-save-error');
      emit();
    }catch(error){
      backupConflict(documentValue);
      state.canSave=false;
      state.status='unavailable';
      state.lastError=String(error&&error.message||error||'save_failed');
      document.documentElement.setAttribute('data-food-server-save-error',state.lastError);
      emit();
    }finally{
      state.inFlight=false;
      if(state.pending&&state.canSave)drain();
    }
  }
  function equivalent(a,b){return serialise(a)===serialise(b);}
  function renderMigrationChoice(){
    const existing=document.getElementById('foodSavedDataMigrationReview');
    if(!state.importCandidate){existing?.remove();return;}
    const host=document.getElementById('dietLogApp');
    if(!host||existing)return;
    const panel=document.createElement('div');
    panel.id='foodSavedDataMigrationReview';
    panel.setAttribute('data-food-migration-review','true');
    panel.innerHTML='<strong>Browser Diet Log data is available.</strong><p class="note">Your account already has Diet Log data, so the browser copy was not imported automatically. Choose which copy to keep.</p><div class="actions"><button type="button" data-food-import-browser>Import browser Diet Log</button><button type="button" data-food-keep-account>Keep account Diet Log</button></div>';
    panel.querySelector('[data-food-import-browser]')?.addEventListener('click',()=>{
      if(!global.confirm||global.confirm('Replace the current account Diet Log with the preserved browser copy?'))importBrowserData();
    });
    panel.querySelector('[data-food-keep-account]')?.addEventListener('click',()=>{
      if(!global.confirm||global.confirm('Keep the account Diet Log and remove the old browser copy from this device?')){
        nativeDelete(STORAGE_KEY);
        state.importCandidate=null;
        renderMigrationChoice();
        emit();
      }
    });
    host.before(panel);
  }
  function importBrowserData(){
    if(!state.importCandidate||!state.canSave)return false;
    const result=syncRequest('POST',serverPayload(state.importCandidate,state.revision,'save'));
    if(!result.ok){
      state.lastError=result.error||'migration_failed';
      if(result.status===409){state.status='conflict';state.canSave=false;backupConflict(state.importCandidate);}
      emit();
      return false;
    }
    state.revision=Number(result.data.revision)||state.revision;
    state.memory=serialise(result.data.document||state.importCandidate);
    state.importCandidate=null;
    nativeDelete(STORAGE_KEY);
    renderMigrationChoice();
    emit();
    global.location?.reload?.();
    return true;
  }
  function bootstrap(){
    const browserRaw=nativeRead(STORAGE_KEY);
    const browserDocument=parse(browserRaw);
    const result=syncRequest('GET');
    if(!result.ok){
      if(result.status===401){setState('signed-out','',false,false);return;}
      setState('unavailable',result.error,false,false);return;
    }
    state.authenticated=true;
    state.revision=Number(result.data.revision)||0;
    const serverDocument=normaliseDocument(result.data.document||defaultDocument());
    if(!result.data.found&&browserDocument){
      const migrated=syncRequest('POST',serverPayload(browserDocument,0,'import_missing'));
      if(migrated.ok){
        state.revision=Number(migrated.data.revision)||1;
        state.memory=serialise(migrated.data.document||browserDocument);
        nativeDelete(STORAGE_KEY);
        state.importCandidate=null;
        installAuthority();
        setState('ready','',true,true);
        return;
      }
      if(migrated.status!==409){setState('migration-failed',migrated.error,true,false);return;}
      const refreshed=syncRequest('GET');
      if(!refreshed.ok){setState('migration-failed',refreshed.error,true,false);return;}
      state.revision=Number(refreshed.data.revision)||0;
      state.memory=serialise(refreshed.data.document||defaultDocument());
      state.importCandidate=normaliseDocument(browserDocument);
    }else{
      state.memory=serialise(serverDocument);
      if(browserDocument){
        if(equivalent(browserDocument,serverDocument))nativeDelete(STORAGE_KEY);
        else state.importCandidate=normaliseDocument(browserDocument);
      }else state.importCandidate=null;
    }
    installAuthority();
    setState('ready','',true,true);
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',renderMigrationChoice,{once:true});else renderMigrationChoice();
  }
  function flushPending(){
    if(!state.pending||!state.canSave)return;
    const documentValue=state.pending;
    state.pending=null;
    try{fetch(API,{method:'POST',credentials:'same-origin',keepalive:true,headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(serverPayload(documentValue,state.revision))});}catch(_error){}
  }

  bootstrap();
  global.addEventListener('pagehide',flushPending);
  document.addEventListener('baseline:auth',()=>global.setTimeout(bootstrap,0));
  document.addEventListener('baseline:food-saved-data',renderMigrationChoice);
  document.documentElement.setAttribute('data-food-saved-data-bridge',BUILD);
  global.BaselineFoodSavedData=Object.freeze({
    build:BUILD,
    isAuthenticated:()=>state.authenticated,
    canSave:()=>state.canSave,
    getStatus:()=>state.status,
    getRevision:()=>state.revision,
    hasImportCandidate:()=>Boolean(state.importCandidate),
    importBrowserData,
    flush:flushPending
  });
})(window);

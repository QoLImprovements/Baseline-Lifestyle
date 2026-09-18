(function(global){
  'use strict';

  const BUILD='FOOD_SAVED_DATA_BRIDGE_20260915_1';
  const STORAGE_KEY='__baseline_food_diet_log_v1__';
  const LEGACY_OWNER_KEY='__baseline_food_diet_log_v1_owner__';
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
  function authSnapshot(){try{return global.BASELINE_auth?.get?.()||null;}catch(_error){return null;}}
  function sessionAuthenticated(){return Boolean(authSnapshot()?.authed);}
  function accountOwner(){const snapshot=authSnapshot();return String(snapshot?.name||snapshot?.user?.name||'').trim().toLocaleLowerCase('en-GB');}
  function legacyOwner(){return String(nativeRead(LEGACY_OWNER_KEY)||'').trim().toLocaleLowerCase('en-GB');}
  function claimLegacyOwner(){
    const current=accountOwner();
    if(!current)return'';
    const existing=legacyOwner();
    if(existing)return existing;
    nativeWrite(LEGACY_OWNER_KEY,current);
    return current;
  }
  function clearLegacySource(){nativeDelete(STORAGE_KEY);nativeDelete(LEGACY_OWNER_KEY);}
  function emit(){
    try{document.dispatchEvent(new CustomEvent('baseline:food-saved-data',{detail:{status:state.status,authenticated:state.authenticated,canSave:state.canSave,revision:state.revision,hasImportCandidate:Boolean(state.importCandidate),error:state.lastError}}));}catch(_error){}
  }
  function renderBridgeUi(){renderMigrationChoice();renderAuthorityStatus();}
  function requestRender(){
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',renderBridgeUi,{once:true});
    else renderBridgeUi();
  }
  function setState(status,error,authenticated,canSave){state.status=status;state.lastError=error||'';state.authenticated=Boolean(authenticated);state.canSave=Boolean(canSave);state.ready=true;emit();requestRender();}
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
  function blockWrite(){
    document.documentElement.setAttribute('data-food-server-save-error',state.lastError||'save_blocked');
    emit();
    requestRender();
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
      if(!state.canSave){blockWrite();return;}
      const documentValue=parse(String(value));
      if(!documentValue)return;
      state.memory=serialise(documentValue);
      queueSave(documentValue);
    };
    storageProto.removeItem=function(key){
      const name=String(key);
      if(this!==local||name!==STORAGE_KEY||!state.authenticated)return nativeRemove.call(this,key);
      if(!state.canSave){blockWrite();return;}
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
        requestRender();
        return;
      }
      if(!response.ok||!data.ok)throw new Error(data.error||'save_failed');
      state.revision=Number(data.revision)||state.revision;
      state.memory=serialise(data.document||documentValue);
      state.lastError='';
      document.documentElement.removeAttribute('data-food-server-save-error');
      emit();
      requestRender();
    }catch(error){
      backupConflict(documentValue);
      state.canSave=false;
      state.status='unavailable';
      state.lastError=String(error&&error.message||error||'save_failed');
      document.documentElement.setAttribute('data-food-server-save-error',state.lastError);
      emit();
      requestRender();
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
    panel.innerHTML='<strong>Browser Diet Log data is available.</strong><p class="note">Saved Data is authoritative for this signed-in account. The browser copy was preserved and was not imported automatically. Choose which copy to keep.</p><div class="actions"><button type="button" data-food-import-browser>Import browser Diet Log</button><button type="button" data-food-keep-account>Keep account Diet Log</button></div>';
    panel.querySelector('[data-food-import-browser]')?.addEventListener('click',()=>{
      if(!global.confirm||global.confirm('Replace the current account Diet Log with the preserved browser copy?'))importBrowserData();
    });
    panel.querySelector('[data-food-keep-account]')?.addEventListener('click',()=>{
      if(!global.confirm||global.confirm('Keep the account Diet Log and remove the old browser copy from this device?')){
        clearLegacySource();
        state.importCandidate=null;
        renderMigrationChoice();
        emit();
      }
    });
    host.before(panel);
  }
  function renderAuthorityStatus(){
    const existing=document.getElementById('foodSavedDataAuthorityStatus');
    const blocked=state.authenticated&&!state.canSave&&state.status!=='loading';
    if(!blocked){existing?.remove();return;}
    const host=document.getElementById('dietLogApp');
    if(!host||existing)return;
    const panel=document.createElement('div');
    panel.id='foodSavedDataAuthorityStatus';
    panel.setAttribute('data-food-save-blocked','true');
    const reason=state.status==='conflict'?'The account Diet Log changed elsewhere.':'The authoritative account Diet Log could not be saved or loaded.';
    panel.innerHTML='<strong>Diet Log saving has stopped.</strong><p class="note">'+reason+' Reload the account copy before making more changes.</p><div class="actions"><button type="button" data-food-reload-account>Reload account Diet Log</button></div>';
    panel.querySelector('[data-food-reload-account]')?.addEventListener('click',()=>{
      state.pending=null;
      global.clearTimeout(state.timer);
      bootstrap();
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
      requestRender();
      return false;
    }
    state.revision=Number(result.data.revision)||state.revision;
    state.memory=serialise(result.data.document||state.importCandidate);
    state.importCandidate=null;
    clearLegacySource();
    document.documentElement.removeAttribute('data-food-server-save-error');
    setState('ready','',true,true);
    global.location?.reload?.();
    return true;
  }
  function bootstrap(){
    const browserRaw=nativeRead(STORAGE_KEY);
    const browserDocument=parse(browserRaw);
    const candidateOwner=browserDocument?claimLegacyOwner():'';
    const result=syncRequest('GET');
    if(!result.ok){
      if(result.status===401){setState('signed-out','',false,false);return;}
      if(sessionAuthenticated()){
        installAuthority();
        setState('unavailable',result.error,true,false);
        return;
      }
      setState('unavailable',result.error,false,false);
      return;
    }
    state.authenticated=true;
    state.revision=Number(result.data.revision)||0;
    const serverDocument=normaliseDocument(result.data.document||defaultDocument());
    state.memory=serialise(serverDocument);
    if(browserDocument&&candidateOwner&&candidateOwner===accountOwner()){
      if(equivalent(browserDocument,serverDocument)){
        clearLegacySource();
        state.importCandidate=null;
      }else{
        state.importCandidate=normaliseDocument(browserDocument);
      }
    }else state.importCandidate=null;
    installAuthority();
    document.documentElement.removeAttribute('data-food-server-save-error');
    setState('ready','',true,true);
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
  document.addEventListener('baseline:food-saved-data',renderBridgeUi);
  document.documentElement.setAttribute('data-food-saved-data-bridge',BUILD);
  global.BaselineFoodSavedData=Object.freeze({
    build:BUILD,
    isAuthenticated:()=>state.authenticated,
    canSave:()=>state.canSave,
    getStatus:()=>state.status,
    getRevision:()=>state.revision,
    hasImportCandidate:()=>Boolean(state.importCandidate),
    importBrowserData,
    reloadAccountData:bootstrap,
    flush:flushPending
  });
})(window);
(function(global){
  'use strict';
  if(!global.document || global.__BASELINE_SKINCARE_SAVED_DATA_BRIDGE__) return;
  global.__BASELINE_SKINCARE_SAVED_DATA_BRIDGE__='SKINCARE_SAVED_DATA_BRIDGE_20260913_1';

  const document=global.document;
  const ROUTINE_API='/systems/baseline-natural-skincare/api/routine_state.php';
  const GROUP_API='/systems/baseline-natural-skincare/api/routine_groups.php';
  const DATA_API='/systems/baseline-natural-skincare/api/skincare_data.php';
  const ROUTINE_PREFIX='__bl_skincare_routine_v1__::';
  const GROUP_PREFIX='__bl_skincare_routine_groups_v2__::';
  const LEGACY_GROUP_PREFIX='__bl_skincare_routine_groups_v1__::';
  const SLIDER_PREFIX='__baseline_slider_state__::';
  const BACKUP_PREFIX='__bl_skincare_saved_data_conflict_backup__::';
  const local=(()=>{try{return global.localStorage;}catch(_error){return null;}})();
  const storageProto=global.Storage&&global.Storage.prototype;
  const nativeGet=storageProto&&storageProto.getItem;
  const nativeSet=storageProto&&storageProto.setItem;
  const nativeRemove=storageProto&&storageProto.removeItem;
  const nativeFetch=typeof global.fetch==='function'?global.fetch.bind(global):null;
  const virtual=new Map();
  const state={authenticated:false,owner:'guest',revision:0,source:'sqlite',ready:false,canSave:false,status:'loading',error:'',installedStorage:false,installedFetch:false};

  function parse(raw){try{const value=raw?JSON.parse(raw):null;return value&&typeof value==='object'&&!Array.isArray(value)?value:null;}catch(_error){return null;}}
  function ownerFromAuth(){
    try{
      const snapshot=global.BASELINE_auth?.get?.();
      if(snapshot?.authed) return String(snapshot.name||snapshot.user?.name||'user').trim().toLocaleLowerCase('en-GB')||'user';
    }catch(_error){}
    return 'guest';
  }
  function routineKey(){return ROUTINE_PREFIX+state.owner;}
  function groupKey(){return GROUP_PREFIX+state.owner;}
  function legacyGroupKey(){return LEGACY_GROUP_PREFIX+state.owner;}
  function sliderPrefix(){return SLIDER_PREFIX+state.owner+'::';}
  function nativeRead(key){try{return local&&nativeGet?nativeGet.call(local,key):null;}catch(_error){return null;}}
  function nativeWrite(key,value){try{if(local&&nativeSet)nativeSet.call(local,key,String(value));}catch(_error){}}
  function nativeDelete(key){try{if(local&&nativeRemove)nativeRemove.call(local,key);}catch(_error){}}
  function equivalent(left,right){try{return JSON.stringify(left)===JSON.stringify(right);}catch(_error){return false;}}
  function meaningfulRoutine(value){return Boolean(value&&(Array.isArray(value.routine||value.items)&&(value.routine||value.items).length||value.logs&&Object.keys(value.logs).length));}
  function meaningfulGroups(value){return Boolean(value&&(Array.isArray(value.groups)&&value.groups.length||value.assignments&&Object.keys(value.assignments).length));}
  function emit(){
    try{document.dispatchEvent(new CustomEvent('baseline:skincare-saved-data',{detail:{status:state.status,revision:state.revision,source:state.source,canSave:state.canSave,error:state.error}}));}catch(_error){}
  }
  function backup(kind,value){
    if(!value) return;
    nativeWrite(BACKUP_PREFIX+state.owner+'::'+kind,JSON.stringify({savedAt:new Date().toISOString(),revision:state.revision,value}));
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
      return{ok:status>=200&&status<300&&Boolean(data.ok),status,data};
    }catch(error){return{ok:false,status,data:{error:String(error&&error.message||error||'server_unavailable')}};}
  }
  function remember(result){
    const revision=Number(result?.data?.revision);
    if(Number.isInteger(revision)&&revision>=0) state.revision=revision;
    if(typeof result?.data?.source==='string') state.source=result.data.source;
  }
  function serverRoutine(value){return{routine:Array.isArray(value?.routine)?value.routine:[],logs:value?.logs&&typeof value.logs==='object'?value.logs:{},visibility:value?.visibility==='public'?'public':'private',updatedAt:value?.updatedAt||null};}
  function serverGroups(value){return{groups:Array.isArray(value?.groups)?value.groups:[],assignments:value?.assignments&&typeof value.assignments==='object'?value.assignments:{},updatedAt:value?.updatedAt||null};}

  function bootstrapRoutine(){
    let result=syncRequest('GET',ROUTINE_API);
    if(!result.ok) return result;
    remember(result);
    const physical=parse(nativeRead(routineKey()));
    const server=serverRoutine(result.data);
    if(!result.data.hasRoutine&&meaningfulRoutine(physical)){
      const candidate={routine:Array.isArray(physical.routine||physical.items)?(physical.routine||physical.items):[],logs:physical.logs||{},visibility:physical.visibility==='public'?'public':'private',expectedRevision:state.revision};
      const imported=syncRequest('POST',ROUTINE_API,candidate);
      if(imported.ok){result=imported;remember(imported);nativeDelete(routineKey());}
      else if(imported.status===409){backup('routine',physical);state.canSave=false;state.status='conflict';state.error=imported.data.error||'revision_conflict';}
    }else if(result.data.hasRoutine&&physical){
      const normalPhysical=serverRoutine(physical);
      if(equivalent(normalPhysical,server)) nativeDelete(routineKey()); else backup('routine',physical);
    }
    virtual.set(routineKey(),JSON.stringify(serverRoutine(result.data)));
    return result;
  }

  function bootstrapGroups(){
    let result=syncRequest('GET',GROUP_API);
    if(!result.ok) return result;
    remember(result);
    const physical=parse(nativeRead(groupKey())||nativeRead(legacyGroupKey()));
    const server=serverGroups(result.data);
    if(!result.data.hasGroups&&meaningfulGroups(physical)&&state.canSave){
      const imported=syncRequest('POST',GROUP_API,{groups:Array.isArray(physical.groups)?physical.groups:[],assignments:physical.assignments||{},expectedRevision:state.revision});
      if(imported.ok){result=imported;remember(imported);nativeDelete(groupKey());nativeDelete(legacyGroupKey());}
      else if(imported.status===409){backup('groups',physical);state.canSave=false;state.status='conflict';state.error=imported.data.error||'revision_conflict';}
    }else if(result.data.hasGroups&&physical){
      const normalPhysical=serverGroups(physical);
      if(equivalent(normalPhysical,server)){nativeDelete(groupKey());nativeDelete(legacyGroupKey());}else backup('groups',physical);
    }
    virtual.set(groupKey(),JSON.stringify(serverGroups(result.data)));
    virtual.set(legacyGroupKey(),JSON.stringify(serverGroups(result.data)));
    return result;
  }

  function localSliderEntries(){
    const prefix=sliderPrefix();
    const output={};
    const keys=[];
    try{
      if(!local) return{output,keys};
      for(let index=0;index<local.length;index+=1){
        const key=local.key(index);
        if(!key||!key.startsWith(prefix)) continue;
        const parsed=parse(nativeRead(key));
        if(!parsed) continue;
        const id=key.slice(prefix.length);
        if(!id) continue;
        output[id]=parsed;keys.push(key);
      }
    }catch(_error){}
    return{output,keys};
  }
  function installServerSliders(sliders){
    Object.entries(sliders||{}).forEach(([id,values])=>virtual.set(sliderPrefix()+id,JSON.stringify(values||{})));
  }
  function bootstrapSliders(){
    let result=syncRequest('GET',DATA_API);
    if(!result.ok) return result;
    remember(result);
    const server=result.data.sliders&&typeof result.data.sliders==='object'?result.data.sliders:{};
    installServerSliders(server);
    const localEntries=localSliderEntries();
    if(!Object.keys(localEntries.output).length) return result;
    if(state.source==='sqlite'){
      backup('sliders-pending-cutover',localEntries.output);
      return result;
    }
    const imported=syncRequest('POST',DATA_API,{action:'merge_sliders',sliders:localEntries.output,expectedRevision:state.revision});
    if(imported.ok){
      remember(imported);installServerSliders(imported.data.sliders||{});localEntries.keys.forEach(nativeDelete);return imported;
    }
    backup('sliders',localEntries.output);
    if(imported.status===409){state.canSave=false;state.status='conflict';state.error=imported.data.error||'revision_conflict';}
    return result;
  }

  function interceptedKey(key){
    const name=String(key);
    if(!state.authenticated) return false;
    return name===routineKey()||name===groupKey()||name===legacyGroupKey()||name.startsWith(sliderPrefix());
  }
  function installStorage(){
    if(state.installedStorage||!storageProto||!nativeGet||!nativeSet||!nativeRemove) return;
    state.installedStorage=true;
    storageProto.getItem=function(key){
      if(this===local&&interceptedKey(key)) return virtual.has(String(key))?virtual.get(String(key)):null;
      return nativeGet.call(this,key);
    };
    storageProto.setItem=function(key,value){
      if(this===local&&interceptedKey(key)){virtual.set(String(key),String(value));return;}
      return nativeSet.call(this,key,value);
    };
    storageProto.removeItem=function(key){
      if(this===local&&interceptedKey(key)){virtual.delete(String(key));return;}
      return nativeRemove.call(this,key);
    };
  }

  function apiKind(url){
    try{const path=new URL(String(url),global.location.href).pathname;return path===ROUTINE_API?'routine':path===GROUP_API?'groups':path===DATA_API?'data':'';}catch(_error){return'';}
  }
  function installFetch(){
    if(state.installedFetch||!nativeFetch) return;
    state.installedFetch=true;
    global.fetch=function(input,init){
      const kind=apiKind(typeof input==='string'?input:input?.url||'');
      if(!kind||!state.authenticated) return nativeFetch(input,init);
      const next=Object.assign({},init||{});
      const method=String(next.method||(typeof input!=='string'&&input?.method)||'GET').toUpperCase();
      let submitted=null;
      if(method==='POST'){
        try{
          submitted=parse(next.body)||{};
          if(!Object.prototype.hasOwnProperty.call(submitted,'expectedRevision')) submitted.expectedRevision=state.revision;
          next.body=JSON.stringify(submitted);
          next.headers=Object.assign({},next.headers||{},{'Content-Type':'application/json'});
        }catch(_error){}
      }
      return nativeFetch(input,next).then(async response=>{
        try{
          const data=await response.clone().json();
          const revision=Number(data?.revision);
          if(Number.isInteger(revision)&&revision>=0) state.revision=revision;
          if(response.status===409){
            if(submitted) backup(kind+'-mutation',submitted);
            state.canSave=false;state.status='conflict';state.error=data?.error||'revision_conflict';emit();
          }
        }catch(_error){}
        return response;
      });
    };
  }

  function bootstrap(){
    state.owner=ownerFromAuth();
    const routine=syncRequest('GET',ROUTINE_API);
    if(!routine.ok){
      state.ready=true;state.authenticated=false;state.canSave=false;state.status=routine.status===401?'signed-out':'unavailable';state.error=routine.data?.error||'';emit();return;
    }
    state.authenticated=true;state.canSave=true;remember(routine);
    /* Re-run through the migration-aware functions now that authentication and revision are known. */
    bootstrapRoutine();
    if(state.canSave) bootstrapGroups();
    if(state.canSave) bootstrapSliders();
    installStorage();installFetch();
    state.ready=true;
    if(state.status!=='conflict') state.status='ready';
    emit();
  }

  installStorage();installFetch();
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bootstrap,{once:true});else bootstrap();
  document.addEventListener('baseline:auth',()=>global.setTimeout(bootstrap,0));
  global.BaselineSkincareSavedData=Object.freeze({
    getRevision:()=>state.revision,
    getStatus:()=>state.status,
    canSave:()=>state.canSave,
    source:()=>state.source,
  });
})(window);

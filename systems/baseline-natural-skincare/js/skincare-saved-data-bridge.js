(function(global){
  'use strict';
  if(!global.document || global.__BASELINE_SKINCARE_SAVED_DATA_BRIDGE__) return;
  global.__BASELINE_SKINCARE_SAVED_DATA_BRIDGE__='SKINCARE_SAVED_DATA_BRIDGE_20260915_1';

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
  const state={
    authenticated:false,
    owner:'guest',
    revision:0,
    source:'sqlite',
    ready:false,
    canSave:false,
    status:'loading',
    error:'',
    installedStorage:false,
    installedFetch:false
  };

  function parse(raw){try{const value=raw?JSON.parse(raw):null;return value&&typeof value==='object'&&!Array.isArray(value)?value:null;}catch(_error){return null;}}
  function authSnapshot(){try{return global.BASELINE_auth?.get?.()||null;}catch(_error){return null;}}
  function sessionAuthenticated(){return Boolean(authSnapshot()?.authed);}
  function ownerFromAuth(){
    const snapshot=authSnapshot();
    if(snapshot?.authed) return String(snapshot.name||snapshot.user?.name||'user').trim().toLocaleLowerCase('en-GB')||'user';
    return 'guest';
  }
  function routineKey(){return ROUTINE_PREFIX+state.owner;}
  function groupKey(){return GROUP_PREFIX+state.owner;}
  function legacyGroupKey(){return LEGACY_GROUP_PREFIX+state.owner;}
  function sliderPrefix(){return SLIDER_PREFIX+state.owner+'::';}
  function nativeRead(key){try{return local&&nativeGet?nativeGet.call(local,key):null;}catch(_error){return null;}}
  function nativeWrite(key,value){try{if(local&&nativeSet)nativeSet.call(local,key,String(value));}catch(_error){}}
  function nativeDelete(key){try{if(local&&nativeRemove)nativeRemove.call(local,key);}catch(_error){}}
  function retireAuthenticatedPhysicalCopies(){
    if(!sessionAuthenticated()||!local) return;
    nativeDelete(routineKey());
    nativeDelete(groupKey());
    nativeDelete(legacyGroupKey());
    const prefix=sliderPrefix();
    const keys=[];
    try{
      for(let index=0;index<local.length;index+=1){
        const key=local.key(index);
        if(key&&key.startsWith(prefix)) keys.push(key);
      }
    }catch(_error){}
    keys.forEach(nativeDelete);
  }

  function bridgeHost(){return document.getElementById('routine')||document.getElementById('recipes')||document.querySelector('main');}
  function emit(){
    try{document.dispatchEvent(new CustomEvent('baseline:skincare-saved-data',{detail:{status:state.status,revision:state.revision,source:state.source,canSave:state.canSave,error:state.error}}));}catch(_error){}
  }
  function backup(kind,value){
    if(!value) return;
    nativeWrite(BACKUP_PREFIX+state.owner+'::'+kind,JSON.stringify({savedAt:new Date().toISOString(),revision:state.revision,value}));
  }
  function requestRender(){
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',renderBridgeUi,{once:true});
    else renderBridgeUi();
  }
  function setState(status,error,canSave){
    state.status=status;
    state.error=error||'';
    state.canSave=Boolean(canSave);
    state.ready=true;
    emit();
    requestRender();
  }
  function blockSaving(status,error,kind,value){
    if(kind&&value) backup(kind,value);
    setState(status||'unavailable',error||'save_failed',false);
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

  function bootstrapRoutine(initialResult){
    const result=initialResult||syncRequest('GET',ROUTINE_API);
    if(!result.ok) return result;
    remember(result);
    const server=serverRoutine(result.data);
    nativeDelete(routineKey());
    virtual.set(routineKey(),JSON.stringify(server));
    return result;
  }

  function bootstrapGroups(){
    const result=syncRequest('GET',GROUP_API);
    if(!result.ok) return result;
    remember(result);
    const server=serverGroups(result.data);
    nativeDelete(groupKey());
    nativeDelete(legacyGroupKey());
    virtual.set(groupKey(),JSON.stringify(server));
    virtual.set(legacyGroupKey(),JSON.stringify(server));
    return result;
  }

  function clearVirtualSliders(){
    const prefix=sliderPrefix();
    Array.from(virtual.keys()).forEach(key=>{if(key.startsWith(prefix)) virtual.delete(key);});
  }
  function installServerSliders(sliders){
    clearVirtualSliders();
    Object.entries(sliders||{}).forEach(([id,values])=>virtual.set(sliderPrefix()+id,JSON.stringify(values||{})));
  }
  function sliderSnapshot(){
    const prefix=sliderPrefix();
    const output={};
    virtual.forEach((raw,key)=>{
      if(!key.startsWith(prefix)) return;
      const value=parse(raw);
      if(value) output[key.slice(prefix.length)]=value;
    });
    return output;
  }
  function bootstrapSliders(){
    const result=syncRequest('GET',DATA_API);
    if(!result.ok) return result;
    remember(result);
    const server=result.data.sliders&&typeof result.data.sliders==='object'?result.data.sliders:{};
    retireAuthenticatedPhysicalCopies();
    installServerSliders(server);
    return result;
  }

  function failBootstrap(result,label){
    state.status='unavailable';
    state.error=result?.data?.error||label||'load_failed';
    state.canSave=false;
    state.ready=true;
    emit();
    requestRender();
    return result;
  }

  function saveSliderDocument(nextSliders,kind){
    if(!state.canSave) throw new Error('skincare_save_blocked');
    if(state.source==='sqlite'){
      state.error='saved_data_cutover_required';
      emit();
      requestRender();
      throw new Error('saved_data_cutover_required');
    }
    const submitted={action:'replace_sliders',sliders:nextSliders,expectedRevision:state.revision};
    const result=syncRequest('POST',DATA_API,submitted);
    if(!result.ok){
      const error=result.data?.error||'slider_save_failed';
      blockSaving(result.status===409?'conflict':'unavailable',error,kind||'slider-mutation',submitted);
      throw new Error(error);
    }
    remember(result);
    installServerSliders(result.data.sliders||nextSliders);
    state.status='ready';
    state.error='';
    emit();
    requestRender();
    return true;
  }
  function saveSliderEntry(key,value){
    const name=String(key);
    const prefix=sliderPrefix();
    const id=name.slice(prefix.length);
    const parsed=parse(String(value));
    if(!id||!parsed) throw new Error('invalid_slider_state');
    const next=sliderSnapshot();
    next[id]=parsed;
    return saveSliderDocument(next,'slider-mutation');
  }
  function removeSliderEntry(key){
    const name=String(key);
    const prefix=sliderPrefix();
    const id=name.slice(prefix.length);
    if(!id) return;
    const next=sliderSnapshot();
    delete next[id];
    saveSliderDocument(next,'slider-removal');
  }

  function interceptedKey(key){
    const name=String(key);
    if(!state.authenticated) return false;
    return name===routineKey()||name===groupKey()||name===legacyGroupKey()||name.startsWith(sliderPrefix());
  }
  function blockedWrite(){
    state.error=state.error||'save_blocked';
    emit();
    requestRender();
    throw new Error(state.error);
  }
  function installStorage(){
    if(state.installedStorage||!storageProto||!nativeGet||!nativeSet||!nativeRemove) return;
    state.installedStorage=true;
    storageProto.getItem=function(key){
      if(this===local&&interceptedKey(key)) return virtual.has(String(key))?virtual.get(String(key)):null;
      return nativeGet.call(this,key);
    };
    storageProto.setItem=function(key,value){
      const name=String(key);
      if(this!==local||!interceptedKey(name)) return nativeSet.call(this,key,value);
      if(!state.canSave) return blockedWrite();
      if(name.startsWith(sliderPrefix())){saveSliderEntry(name,value);return;}
      virtual.set(name,String(value));
    };
    storageProto.removeItem=function(key){
      const name=String(key);
      if(this!==local||!interceptedKey(name)) return nativeRemove.call(this,key);
      if(!state.canSave) return blockedWrite();
      if(name.startsWith(sliderPrefix())){removeSliderEntry(name);return;}
      virtual.delete(name);
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
        if(!state.canSave) return Promise.reject(new Error(state.error||'skincare_save_blocked'));
        try{
          submitted=parse(next.body)||{};
          if(!Object.prototype.hasOwnProperty.call(submitted,'expectedRevision')) submitted.expectedRevision=state.revision;
          next.body=JSON.stringify(submitted);
          next.headers=Object.assign({},next.headers||{},{'Content-Type':'application/json'});
        }catch(_error){}
      }
      return nativeFetch(input,next).then(async response=>{
        let data=null;
        try{data=await response.clone().json();}catch(_error){}
        const revision=Number(data?.revision);
        if(Number.isInteger(revision)&&revision>=0) state.revision=revision;
        if(typeof data?.source==='string') state.source=data.source;
        if(method==='POST'&&(!response.ok||!data?.ok)){
          const error=data?.error||('http_'+response.status);
          if(submitted) backup(kind+'-mutation',submitted);
          blockSaving(response.status===409?'conflict':'unavailable',error);
        }
        return response;
      }).catch(error=>{
        if(method==='POST'&&state.canSave){
          if(submitted) backup(kind+'-mutation',submitted);
          blockSaving('unavailable',String(error&&error.message||error||'network_error'));
        }
        throw error;
      });
    };
  }

  function renderAuthorityStatus(){
    const existing=document.getElementById('skincareSavedDataAuthorityStatus');
    const blocked=state.authenticated&&!state.canSave&&state.status!=='loading';
    if(!blocked){
      existing?.remove();
      return;
    }
    const host=bridgeHost();
    if(!host) return;
    const panel=existing||document.createElement('div');
    panel.id='skincareSavedDataAuthorityStatus';
    panel.className='card';
    panel.setAttribute('data-skincare-save-blocked','true');
    const reason=state.status==='conflict'?'The account Skincare resource changed elsewhere.':'The authoritative account Skincare resource could not be loaded or saved.';
    panel.innerHTML='<strong>Skincare saving has stopped.</strong><p class="note">'+reason+' Reload authoritative account data before making more persistent changes.</p>';
    const button=document.createElement('button');
    button.type='button';
    button.textContent='Reload account Skincare data';
    button.addEventListener('click',bootstrap);
    panel.appendChild(button);
    if(!existing) host.before(panel);
  }
  function renderBridgeUi(){renderAuthorityStatus();}

  function bootstrap(){
    state.owner=ownerFromAuth();
    state.source='sqlite';
    state.ready=false;
    state.status='loading';
    state.error='';
    const authenticated=sessionAuthenticated();
    if(authenticated) retireAuthenticatedPhysicalCopies();
    const routine=syncRequest('GET',ROUTINE_API);
    if(!routine.ok){
      if(routine.status===401&&!authenticated){
        state.authenticated=false;
        setState('signed-out','',false);
        return;
      }
      if(authenticated){
        state.authenticated=true;
        installStorage();
        installFetch();
        failBootstrap(routine,'skincare_load_failed');
        return;
      }
      state.authenticated=false;
      setState('unavailable',routine.data?.error||'skincare_load_failed',false);
      return;
    }

    state.authenticated=true;
    state.canSave=true;
    remember(routine);
    installStorage();
    installFetch();

    const routineResult=bootstrapRoutine(routine);
    if(!routineResult.ok){failBootstrap(routineResult,'routine_load_failed');return;}
    const groupsResult=bootstrapGroups();
    if(!groupsResult.ok){failBootstrap(groupsResult,'groups_load_failed');return;}
    const slidersResult=bootstrapSliders();
    if(!slidersResult.ok){failBootstrap(slidersResult,'sliders_load_failed');return;}

    state.ready=true;
    state.status='ready';
    state.error='';
    state.canSave=true;
    emit();
    requestRender();
  }

  installStorage();
  installFetch();
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bootstrap,{once:true});else bootstrap();
  document.addEventListener('baseline:auth',()=>global.setTimeout(bootstrap,0));
  global.BaselineSkincareSavedData=Object.freeze({
    getRevision:()=>state.revision,
    getStatus:()=>state.status,
    canSave:()=>state.canSave,
    source:()=>state.source,
    reloadAccountData:bootstrap
  });
})(window);

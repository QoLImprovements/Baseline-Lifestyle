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
    installedFetch:false,
    imports:{routine:null,groups:null,sliders:null}
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
  function equivalent(left,right){try{return JSON.stringify(left)===JSON.stringify(right);}catch(_error){return false;}}
  function meaningfulRoutine(value){return Boolean(value&&(Array.isArray(value.routine||value.items)&&(value.routine||value.items).length||value.logs&&Object.keys(value.logs).length));}
  function meaningfulGroups(value){return Boolean(value&&(Array.isArray(value.groups)&&value.groups.length||value.assignments&&Object.keys(value.assignments).length));}
  function hasImports(){return Boolean(state.imports.routine||state.imports.groups||state.imports.sliders);}
  function bridgeHost(){return document.getElementById('routine')||document.getElementById('recipes')||document.querySelector('main');}
  function emit(){
    try{document.dispatchEvent(new CustomEvent('baseline:skincare-saved-data',{detail:{status:state.status,revision:state.revision,source:state.source,canSave:state.canSave,error:state.error,hasImportCandidate:hasImports()}}));}catch(_error){}
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
    const physical=parse(nativeRead(routineKey()));
    const server=serverRoutine(result.data);
    state.imports.routine=null;
    if(physical){
      const localRoutine=serverRoutine(physical);
      if(equivalent(localRoutine,server)){
        nativeDelete(routineKey());
      }else if(meaningfulRoutine(physical)){
        state.imports.routine={routine:localRoutine.routine,logs:localRoutine.logs,visibility:localRoutine.visibility};
      }else{
        nativeDelete(routineKey());
      }
    }
    virtual.set(routineKey(),JSON.stringify(server));
    return result;
  }

  function bootstrapGroups(){
    const result=syncRequest('GET',GROUP_API);
    if(!result.ok) return result;
    remember(result);
    const physical=parse(nativeRead(groupKey())||nativeRead(legacyGroupKey()));
    const server=serverGroups(result.data);
    state.imports.groups=null;
    if(physical){
      const localGroups=serverGroups(physical);
      if(equivalent(localGroups,server)){
        nativeDelete(groupKey());
        nativeDelete(legacyGroupKey());
      }else if(meaningfulGroups(physical)){
        state.imports.groups={groups:localGroups.groups,assignments:localGroups.assignments};
      }else{
        nativeDelete(groupKey());
        nativeDelete(legacyGroupKey());
      }
    }
    virtual.set(groupKey(),JSON.stringify(server));
    virtual.set(legacyGroupKey(),JSON.stringify(server));
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
        output[id]=parsed;
        keys.push(key);
      }
    }catch(_error){}
    return{output,keys};
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
    installServerSliders(server);
    const localEntries=localSliderEntries();
    state.imports.sliders=null;
    if(Object.keys(localEntries.output).length){
      if(equivalent(localEntries.output,server)){
        localEntries.keys.forEach(nativeDelete);
      }else{
        state.imports.sliders={sliders:localEntries.output,keys:localEntries.keys.slice()};
      }
    }
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

  function keepAccount(kind){
    if(kind==='routine') nativeDelete(routineKey());
    else if(kind==='groups'){
      nativeDelete(groupKey());
      nativeDelete(legacyGroupKey());
    }else if(kind==='sliders'){
      const candidate=state.imports.sliders;
      (candidate?.keys||[]).forEach(nativeDelete);
    }else return false;
    state.imports[kind]=null;
    emit();
    requestRender();
    return true;
  }
  function importCandidate(kind){
    if(!state.canSave) return false;
    const candidate=state.imports[kind];
    if(!candidate) return false;
    let result=null;
    if(kind==='routine'){
      result=syncRequest('POST',ROUTINE_API,{routine:candidate.routine,logs:candidate.logs,visibility:candidate.visibility,expectedRevision:state.revision});
    }else if(kind==='groups'){
      result=syncRequest('POST',GROUP_API,{groups:candidate.groups,assignments:candidate.assignments,expectedRevision:state.revision});
    }else if(kind==='sliders'){
      if(state.source==='sqlite'){
        state.error='saved_data_cutover_required';
        emit();
        requestRender();
        return false;
      }
      result=syncRequest('POST',DATA_API,{action:'merge_sliders',sliders:candidate.sliders,expectedRevision:state.revision});
    }else return false;
    if(!result.ok){
      const error=result.data?.error||'legacy_import_failed';
      blockSaving(result.status===409?'conflict':'unavailable',error,'legacy-'+kind,candidate);
      return false;
    }
    remember(result);
    keepAccount(kind);
    bootstrap();
    return true;
  }

  function renderMigrationReview(){
    const existing=document.getElementById('skincareSavedDataMigrationReview');
    if(!state.authenticated||!hasImports()){
      existing?.remove();
      return;
    }
    const host=bridgeHost();
    if(!host) return;
    const panel=existing||document.createElement('div');
    panel.id='skincareSavedDataMigrationReview';
    panel.className='card';
    panel.setAttribute('data-skincare-migration-review','true');
    panel.innerHTML='<strong>Browser Skincare data is available.</strong><p class="note">Account data is authoritative. Browser copies were preserved and were not imported automatically.</p>';
    const labels={routine:'Routine and log',groups:'Routine groups',sliders:'Saved slider positions'};
    Object.keys(labels).forEach(kind=>{
      if(!state.imports[kind]) return;
      const row=document.createElement('div');
      row.className='actions';
      const label=document.createElement('span');
      label.textContent=labels[kind];
      const importButton=document.createElement('button');
      importButton.type='button';
      importButton.textContent=kind==='sliders'&&state.source==='sqlite'?'Import available after Saved Data cutover':'Import browser copy';
      if(kind==='sliders'&&state.source==='sqlite') importButton.disabled=true;
      importButton.addEventListener('click',()=>{
        if(!global.confirm||global.confirm('Import the preserved browser '+labels[kind].toLowerCase()+' into the account copy?')) importCandidate(kind);
      });
      const keepButton=document.createElement('button');
      keepButton.type='button';
      keepButton.textContent='Keep account copy';
      keepButton.addEventListener('click',()=>{
        if(!global.confirm||global.confirm('Keep the authoritative account copy and remove this old browser copy?')) keepAccount(kind);
      });
      row.append(label,importButton,keepButton);
      panel.appendChild(row);
    });
    if(!existing) host.before(panel);
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
  function renderBridgeUi(){renderMigrationReview();renderAuthorityStatus();}

  function bootstrap(){
    state.owner=ownerFromAuth();
    state.source='sqlite';
    state.ready=false;
    state.status='loading';
    state.error='';
    state.imports={routine:null,groups:null,sliders:null};
    const authenticated=sessionAuthenticated();
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
    hasImportCandidate:()=>hasImports(),
    importLegacy:importCandidate,
    keepAccount,
    reloadAccountData:bootstrap
  });
})(window);

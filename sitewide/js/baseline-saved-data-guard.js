/* Baseline Lifestyle — server-only Saved Data browser boundary. */
(function(scope){
  'use strict';
  if(!scope.document || scope.__BASELINE_SAVED_DATA_GUARD__) return;
  scope.__BASELINE_SAVED_DATA_GUARD__=true;

  const api=scope.BASELINE_api;
  if(!api) return;
  const document=scope.document;
  const revisions=api.revisions;
  const blocked=new Map();
  const sessionValues=new Map();
  const saveTimers=new Map();
  const nativeFetch=typeof scope.fetch==='function'?scope.fetch.bind(scope):null;
  const storagePrototype=scope.Storage?.prototype;
  const nativeGet=storagePrototype?.getItem;
  const nativeSet=storagePrototype?.setItem;
  const nativeRemove=storagePrototype?.removeItem;
  const nativeKey=storagePrototype?.key;

  const SITEWIDE_ROUTINE_PREFIX='__bl_sitewide_routine_settings_v1__::';
  const SLIDER_PREFIX='__baseline_slider_state__::';
  const CACHE_PREFIX='__bl_saved_data_server_cache_v1__::';
  const CACHE_ACCOUNT='__bl_saved_data_server_cache_account_v1__';
  const RELOAD_PREFIX='__bl_saved_data_hydration_reload_v1__::';
  const FOOD_KEY='__baseline_food_diet_log_v1__';
  const VOICE_KEY='__baseline_voice_settings_v1__';
  const BADMINTON_FOCUSED_KEY='__bl_badminton_focused_v1__';
  const guardedPrefixes=Object.freeze([
    '__bl_fitness_routine_v1__::',
    '__bl_fitness_routine_v2__::',
    '__bl_skincare_routine_v1__::',
    '__bl_skincare_routine_groups_v1__::',
    '__bl_skincare_routine_groups_v2__::',
    '__bl_skincare_routine_groups_v3__::',
    SLIDER_PREFIX
  ]);
  const guardedExact=new Set([VOICE_KEY,FOOD_KEY,BADMINTON_FOCUSED_KEY]);
  let authSnapshot={authed:false,name:''};
  let authAttached=false;

  const ownerName=value=>String(value||'').trim().toLocaleLowerCase('en-GB')||'guest';
  const currentOwner=()=>authSnapshot.authed?ownerName(authSnapshot.name):'guest';
  const parseObject=raw=>{
    try{
      const value=raw?JSON.parse(String(raw)):{};
      return value&&typeof value==='object'&&!Array.isArray(value)?value:{};
    }catch(_error){ return {}; }
  };
  const localGet=key=>{ try{return nativeGet?.call(scope.localStorage,String(key))??null;}catch(_error){return null;} };
  const localSet=(key,value)=>{ try{nativeSet?.call(scope.localStorage,String(key),String(value));return true;}catch(_error){return false;} };
  const localRemove=key=>{ try{nativeRemove?.call(scope.localStorage,String(key));return true;}catch(_error){return false;} };
  const sessionGet=key=>{ try{return nativeGet?.call(scope.sessionStorage,String(key))??null;}catch(_error){return null;} };
  const sessionSet=(key,value)=>{ try{nativeSet?.call(scope.sessionStorage,String(key),String(value));return true;}catch(_error){return false;} };
  const sessionRemove=key=>{ try{nativeRemove?.call(scope.sessionStorage,String(key));return true;}catch(_error){return false;} };

  function isGuardedKey(key){
    const value=String(key||'');
    return guardedExact.has(value)||guardedPrefixes.some(prefix=>value.startsWith(prefix));
  }
  function isSitewideRoutineKey(key){ return String(key||'').startsWith(SITEWIDE_ROUTINE_PREFIX); }
  function cacheKey(key,owner=currentOwner()){
    return `${CACHE_PREFIX}${ownerName(owner)}::${encodeURIComponent(String(key))}`;
  }
  function readServerCache(key){
    const account=sessionGet(CACHE_ACCOUNT);
    if(!account||account==='guest') return null;
    return sessionGet(cacheKey(key,account));
  }
  function writeServerCache(key,value,owner=currentOwner()){
    const account=ownerName(owner);
    if(account==='guest') return;
    sessionSet(CACHE_ACCOUNT,account);
    sessionSet(cacheKey(key,account),String(value));
  }
  function clearServerCaches(){
    const account=sessionGet(CACHE_ACCOUNT);
    if(account&&nativeKey){
      const remove=[];
      try{
        for(let index=0;index<scope.sessionStorage.length;index++){
          const key=nativeKey.call(scope.sessionStorage,index);
          if(key&&String(key).startsWith(`${CACHE_PREFIX}${account}::`)) remove.push(String(key));
        }
      }catch(_error){}
      remove.forEach(sessionRemove);
    }
    sessionRemove(CACHE_ACCOUNT);
  }
  function runtimeValue(key){
    const name=String(key);
    return sessionValues.has(name)?sessionValues.get(name):readServerCache(name);
  }
  function sitewideValue(key){
    const persistent=parseObject(localGet(key));
    delete persistent.fitnessRoutineGroups;
    delete persistent.fitnessRoutineAssignments;
    return JSON.stringify(Object.assign({},persistent,parseObject(runtimeValue(key)||'')));
  }
  function emitWrite(key,value){
    try{ document.dispatchEvent(new scope.CustomEvent('baseline:guarded-storage-write',{detail:{key:String(key),value:String(value??'')}})); }catch(_error){}
  }
  function writeSitewideValue(key,value){
    const next=parseObject(value);
    const transient={};
    if(Object.hasOwn(next,'fitnessRoutineGroups')) transient.fitnessRoutineGroups=next.fitnessRoutineGroups;
    if(Object.hasOwn(next,'fitnessRoutineAssignments')) transient.fitnessRoutineAssignments=next.fitnessRoutineAssignments;
    sessionValues.set(String(key),JSON.stringify(transient));

    // Persist only non-Saved-Data device/runtime settings. Keep any old group
    // payload untouched in native storage so it can only be reached by Import.
    const persistent=parseObject(localGet(key));
    Object.entries(next).forEach(([name,entry])=>{
      if(name==='fitnessRoutineGroups'||name==='fitnessRoutineAssignments') return;
      persistent[name]=entry;
    });
    localSet(key,JSON.stringify(persistent));
    emitWrite(key,sitewideValue(key));
  }

  function sliderInfo(key){
    const name=String(key||'');
    if(!name.startsWith(SLIDER_PREFIX)) return null;
    const tail=name.slice(SLIDER_PREFIX.length);
    const split=tail.indexOf('::');
    return split>0?{owner:ownerName(tail.slice(0,split)),saveId:tail.slice(split+2)}:null;
  }
  function browserOwnedKey(key){
    const name=String(key||'');
    if(name===FOOD_KEY) return {resource:'food',kind:'food'};
    if(name===BADMINTON_FOCUSED_KEY) return {resource:'games:badmintonfocused',kind:'badmintonfocused'};
    const slider=sliderInfo(name);
    return slider?{resource:'skincare',kind:'slider',slider}:null;
  }

  if(storagePrototype&&nativeGet&&nativeSet&&nativeRemove){
    storagePrototype.getItem=function(key){
      if(this!==scope.localStorage) return nativeGet.call(this,key);
      const name=String(key);
      if(isSitewideRoutineKey(name)) return sitewideValue(name);
      if(isGuardedKey(name)) return runtimeValue(name);
      return nativeGet.call(this,name);
    };
    storagePrototype.setItem=function(key,value){
      if(this!==scope.localStorage) return nativeSet.call(this,key,value);
      const name=String(key);
      if(isSitewideRoutineKey(name)) return writeSitewideValue(name,value);
      if(isGuardedKey(name)){
        sessionValues.set(name,String(value));
        emitWrite(name,value);
        if(authSnapshot.authed&&browserOwnedKey(name)) scheduleBrowserSave(name);
        return;
      }
      return nativeSet.call(this,name,String(value));
    };
    storagePrototype.removeItem=function(key){
      if(this!==scope.localStorage) return nativeRemove.call(this,key);
      const name=String(key);
      if(isSitewideRoutineKey(name)){ sessionValues.delete(name);return; }
      if(isGuardedKey(name)){
        sessionValues.delete(name);
        emitWrite(name,'');
        if(authSnapshot.authed&&browserOwnedKey(name)) scheduleBrowserSave(name);
        return;
      }
      return nativeRemove.call(this,name);
    };
  }

  function endpointResource(url){
    let pathname='';
    try{ pathname=new URL(String(url||''),scope.location?.href||'https://baseline.invalid/').pathname; }
    catch(_error){ pathname=String(url||'').split('?')[0]; }
    return ({
      '/sitewide/api/voice_settings.php':'voice',
      '/systems/baseline-fitness/api/routine_state.php':'fitness-routine',
      '/systems/baseline-fitness/api/routine_groups.php':'fitness-routine',
      '/systems/baseline-natural-skincare/api/routine_state.php':'skincare',
      '/systems/baseline-natural-skincare/api/routine_groups.php':'skincare',
      '/systems/baseline-natural-skincare/api/recipe_settings.php':'skincare',
      '/systems/baseline-food-approach/api/diet_log.php':'food'
    })[pathname]||'';
  }
  function errorMessage(resource,error){
    if(error==='revision_conflict') return 'This saved data changed elsewhere. Saving has stopped. Reload the latest server data before editing again.';
    if(error==='server_has_data') return 'The server already contains saved data. The browser copy was not imported or overwritten.';
    return `Saving ${resource||'data'} failed. Saving has stopped; this change was not stored as an account save.`;
  }
  function showFailure(resource,error){
    const key=String(resource||'saved-data');
    blocked.set(key,String(error||'save_failed'));
    document.documentElement.setAttribute('data-saved-data-save-blocked',key);
    let banner=document.getElementById('baselineSavedDataFailure');
    if(!banner){
      banner=document.createElement('div');
      banner.id='baselineSavedDataFailure';
      banner.setAttribute('role','alert');
      banner.style.cssText='position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483647;padding:14px 16px;border:2px solid currentColor;border-radius:10px;background:Canvas;color:CanvasText;box-shadow:0 8px 30px rgba(0,0,0,.35);font:600 14px/1.4 system-ui,sans-serif;display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap';
      const message=document.createElement('span');
      message.dataset.savedDataFailureMessage='true';
      const reload=document.createElement('button');
      reload.type='button';reload.textContent='Reload latest server data';
      reload.style.cssText='font:inherit;padding:8px 12px;cursor:pointer';
      reload.addEventListener('click',()=>scope.location?.reload?.());
      banner.append(message,reload);
      (document.body||document.documentElement).appendChild(banner);
    }
    const message=banner.querySelector('[data-saved-data-failure-message]');
    if(message) message.textContent=errorMessage(key,error);
  }
  function blockedResponse(resource){
    const body=JSON.stringify({ok:false,error:'save_blocked',resource:String(resource||'')});
    return typeof scope.Response==='function'
      ?new scope.Response(body,{status:409,headers:{'Content-Type':'application/json'}})
      :{ok:false,status:409,text:async()=>body,json:async()=>JSON.parse(body),clone(){return this;},headers:{get:()=> 'application/json'}};
  }

  async function guardedFetch(input,init){
    if(!nativeFetch) throw new Error('fetch_unavailable');
    const url=(typeof input==='string'||(typeof URL!=='undefined'&&input instanceof URL))?String(input):String(input?.url||'');
    const resource=endpointResource(url);
    if(!resource) return nativeFetch(input,init);
    const options=Object.assign({},init||{});
    const method=String(options.method||input?.method||'GET').toUpperCase();
    if(method!=='GET'&&method!=='HEAD'){
      if(blocked.has(resource)) return blockedResponse(resource);
      try{
        const body=typeof options.body==='string'?JSON.parse(options.body):null;
        if(body&&typeof body==='object'&&!Array.isArray(body)) options.body=JSON.stringify(revisions?.withExpected?.(resource,body)||Object.assign({expectedRevision:0},body));
      }catch(_error){}
    }
    let response;
    try{ response=await nativeFetch(input,options); }
    catch(error){ if(method!=='GET'&&method!=='HEAD') showFailure(resource,'network_error');throw error; }
    let payload=null;
    try{ payload=await response.clone().json(); }catch(_error){}
    revisions?.remember?.(resource,payload);
    if(method!=='GET'&&method!=='HEAD'&&(!response.ok||!payload?.ok)) showFailure(resource,payload?.error||`http_${response.status}`);
    return response;
  }
  if(nativeFetch) scope.fetch=guardedFetch;

  async function request(resource,url,options={}){
    if(!nativeFetch) return {ok:false,status:0,data:{ok:false,error:'network_error'}};
    const method=String(options.method||'GET').toUpperCase();
    if(method!=='GET'&&blocked.has(resource)) return {ok:false,status:409,data:{ok:false,error:'save_blocked'}};
    const init={method,credentials:'same-origin',headers:{Accept:'application/json'}};
    if(options.body!==undefined){
      init.headers['Content-Type']='application/json';
      init.body=JSON.stringify(revisions?.withExpected?.(resource,options.body)||Object.assign({expectedRevision:0},options.body));
    }
    let response;
    try{ response=await nativeFetch(url,init); }
    catch(_error){ if(method!=='GET') showFailure(resource,'network_error');return {ok:false,status:0,data:{ok:false,error:'network_error'}}; }
    const data=await response.json().catch(()=>null);
    revisions?.remember?.(resource,data);
    if(method!=='GET'&&(!response.ok||!data?.ok)) showFailure(resource,data?.error||`http_${response.status}`);
    return {ok:Boolean(response.ok&&data?.ok),status:response.status,data:data||{ok:false,error:'invalid_response'}};
  }

  function sliderSettings(){
    const result={};
    const prefix=`${SLIDER_PREFIX}${currentOwner()}::`;
    const keys=new Set([...sessionValues.keys()].filter(key=>key.startsWith(prefix)));
    const account=sessionGet(CACHE_ACCOUNT);
    if(account===currentOwner()&&nativeKey){
      try{
        for(let index=0;index<scope.sessionStorage.length;index++){
          const stored=nativeKey.call(scope.sessionStorage,index);
          if(!stored||!String(stored).startsWith(`${CACHE_PREFIX}${account}::`)) continue;
          const original=decodeURIComponent(String(stored).slice(`${CACHE_PREFIX}${account}::`.length));
          if(original.startsWith(prefix)) keys.add(original);
        }
      }catch(_error){}
    }
    keys.forEach(key=>{ const info=sliderInfo(key);if(info?.saveId) result[info.saveId]=parseObject(runtimeValue(key)); });
    return result;
  }
  function scheduleBrowserSave(key){
    const config=browserOwnedKey(key);
    if(!config||!authSnapshot.authed||blocked.has(config.resource)) return;
    const timerKey=config.kind==='slider'?'skincare:recipe-settings':config.resource;
    if(saveTimers.has(timerKey)) scope.clearTimeout(saveTimers.get(timerKey));
    saveTimers.set(timerKey,scope.setTimeout(()=>{
      saveTimers.delete(timerKey);
      saveBrowserKey(key).catch(()=>showFailure(config.resource,'save_failed'));
    },350));
  }
  async function saveBrowserKey(key){
    const config=browserOwnedKey(key);
    if(!config||!authSnapshot.authed) return false;
    if(config.kind==='food'){
      const response=await request('food','/systems/baseline-food-approach/api/diet_log.php',{method:'POST',body:{store:parseObject(runtimeValue(FOOD_KEY))}});
      if(response.ok) writeServerCache(FOOD_KEY,JSON.stringify(response.data.store||{}));
      return response.ok;
    }
    if(config.kind==='badmintonfocused'){
      const response=await request('games:badmintonfocused','/systems/baseline-games-hub/api/games_data.php',{method:'POST',body:{action:'save',app:'badmintonfocused',profile:parseObject(runtimeValue(BADMINTON_FOCUSED_KEY))}});
      if(response.ok) writeServerCache(BADMINTON_FOCUSED_KEY,JSON.stringify(response.data.profile||{}));
      return response.ok;
    }
    const response=await request('skincare','/systems/baseline-natural-skincare/api/recipe_settings.php',{method:'POST',body:{settings:sliderSettings()}});
    if(response.ok){
      Object.entries(response.data.settings||{}).forEach(([saveId,value])=>writeServerCache(`${SLIDER_PREFIX}${currentOwner()}::${saveId}`,JSON.stringify(value||{})));
    }
    return response.ok;
  }

  function pageUses(resource){
    const app=document.documentElement?.dataset?.app||document.body?.dataset?.app||'';
    return (resource==='food'&&app==='food')||(resource==='skincare'&&app==='skin')||(resource==='games:badmintonfocused'&&app==='games');
  }
  function reloadHydrated(resource,revision,hasData){
    if(!hasData||!pageUses(resource)||!scope.location?.reload) return;
    const key=`${RELOAD_PREFIX}${currentOwner()}::${resource}`;
    const value=String(Number.isInteger(Number(revision))?Number(revision):0);
    if(sessionGet(key)===value) return;
    sessionSet(key,value);
    scope.setTimeout(()=>scope.location.reload(),0);
  }
  function applySliderDom(settings){
    if(!settings||typeof settings!=='object') return;
    document.querySelectorAll('[data-slider-save-id]').forEach(controller=>{
      const values=settings[String(controller.getAttribute('data-slider-save-id')||'')];
      if(!values||typeof values!=='object') return;
      controller.querySelectorAll('.glide-slider').forEach(slider=>{
        if(!Object.hasOwn(values,slider.id)) return;
        const next=String(values[slider.id]);
        if(slider.value===next) return;
        slider.value=next;
        try{ slider.dispatchEvent(new Event('input',{bubbles:true})); }catch(_error){}
      });
    });
  }
  async function hydrateBrowserOwned(){
    if(!authSnapshot.authed||api.isFile) return;
    const owner=currentOwner();
    const food=await request('food','/systems/baseline-food-approach/api/diet_log.php');
    if(food.ok){
      const serial=JSON.stringify(food.data.store||{});sessionValues.set(FOOD_KEY,serial);writeServerCache(FOOD_KEY,serial,owner);
      reloadHydrated('food',food.data.revision,Boolean(food.data.hasData));
    }
    const skincare=await request('skincare','/systems/baseline-natural-skincare/api/recipe_settings.php');
    if(skincare.ok){
      Object.entries(skincare.data.settings||{}).forEach(([saveId,value])=>{
        const key=`${SLIDER_PREFIX}${owner}::${saveId}`;const serial=JSON.stringify(value||{});sessionValues.set(key,serial);writeServerCache(key,serial,owner);
      });
      applySliderDom(skincare.data.settings||{});
      reloadHydrated('skincare',skincare.data.revision,Boolean(skincare.data.hasData));
    }
    const badminton=await request('games:badmintonfocused','/systems/baseline-games-hub/api/games_data.php?app=badmintonfocused');
    if(badminton.ok){
      const serial=JSON.stringify(badminton.data.profile||{});sessionValues.set(BADMINTON_FOCUSED_KEY,serial);writeServerCache(BADMINTON_FOCUSED_KEY,serial,owner);
      reloadHydrated('games:badmintonfocused',badminton.data.revision,Boolean(badminton.data.found));
    }
    ensureImportPanel();
  }

  function legacyKeys(){
    const keys=[];
    if(!nativeKey) return keys;
    try{ for(let index=0;index<scope.localStorage.length;index++){ const key=nativeKey.call(scope.localStorage,index);if(key)keys.push(String(key)); } }catch(_error){}
    return keys;
  }
  function candidates(){
    if(!authSnapshot.authed) return [];
    const owner=currentOwner();const keys=legacyKeys();const has=key=>localGet(key)!==null;const result=[];
    if(has(VOICE_KEY)) result.push({id:'voice',label:'Import old Voice settings'});
    if(has(FOOD_KEY)) result.push({id:'food',label:'Import old Food Diet Log'});
    if(has(BADMINTON_FOCUSED_KEY)) result.push({id:'badmintonfocused',label:'Import old Badminton Focused progress'});
    if(keys.some(key=>key.startsWith(`${SLIDER_PREFIX}${owner}::`))) result.push({id:'skincare-sliders',label:'Import old Skincare recipe settings'});
    if(has(`__bl_skincare_routine_v1__::${owner}`)) result.push({id:'skincare-routine',label:'Import old Skincare Routine'});
    if(['v3','v2','v1'].some(version=>has(`__bl_skincare_routine_groups_${version}__::${owner}`))) result.push({id:'skincare-groups',label:'Import old Skincare Routine Groups'});
    if(has(`__bl_fitness_routine_v2__::${owner}`)||has(`__bl_fitness_routine_v1__::${owner}`)) result.push({id:'fitness-routine',label:'Import old Fitness Routine'});
    const sitewide=parseObject(localGet(`${SITEWIDE_ROUTINE_PREFIX}${owner}`));
    if(Array.isArray(sitewide.fitnessRoutineGroups)&&sitewide.fitnessRoutineGroups.length) result.push({id:'fitness-groups',label:'Import old Fitness Routine Groups'});
    return result;
  }
  function ensureImportPanel(){
    const list=candidates();let panel=document.getElementById('baselineLegacyImportPanel');
    if(!authSnapshot.authed||!list.length){ panel?.remove();return; }
    if(!panel){
      panel=document.createElement('aside');panel.id='baselineLegacyImportPanel';
      panel.style.cssText='position:fixed;right:16px;bottom:16px;z-index:2147483646;width:min(430px,calc(100vw - 32px));padding:14px;border:1px solid currentColor;border-radius:10px;background:Canvas;color:CanvasText;box-shadow:0 8px 30px rgba(0,0,0,.3);font:500 14px/1.4 system-ui,sans-serif';
      panel.innerHTML='<strong>Old browser saves available</strong><p style="margin:6px 0 10px">Nothing is imported automatically. Choose only the data you want copied to your account.</p><div data-import-actions style="display:flex;flex-wrap:wrap;gap:8px"></div><div id="baselineLegacyImportStatus" role="status" style="margin-top:8px"></div>';
      (document.body||document.documentElement).appendChild(panel);
    }
    const actions=panel.querySelector('[data-import-actions]');const signature=list.map(item=>item.id).join('|');
    if(!actions||actions.dataset.signature===signature) return;
    actions.dataset.signature=signature;actions.replaceChildren();
    list.forEach(item=>{ const button=document.createElement('button');button.type='button';button.textContent=item.label;button.dataset.legacyImport=item.id;button.style.cssText='font:inherit;padding:7px 10px;cursor:pointer';actions.appendChild(button); });
  }
  function importStatus(text,error=false){
    const target=document.getElementById('baselineLegacyImportStatus');
    if(target){ target.textContent=String(text||'');target.dataset.kind=error?'error':'success'; }
  }
  async function plainJson(url,options={}){
    const response=await scope.fetch(url,Object.assign({credentials:'same-origin',headers:{Accept:'application/json'}},options));
    const data=await response.json().catch(()=>null);
    return {ok:Boolean(response.ok&&data?.ok),status:response.status,data:data||{}};
  }
  const removeLegacy=keys=>keys.forEach(localRemove);

  async function importLegacy(id){
    const owner=currentOwner();
    if(id==='voice'){
      const current=await plainJson('/sitewide/api/voice_settings.php');
      if(!current.ok||current.data.found) throw new Error('server_has_data');
      const saved=await plainJson('/sitewide/api/voice_settings.php',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({settings:parseObject(localGet(VOICE_KEY)),expectedRevision:Number(current.data.revision||0)})});
      if(!saved.ok) throw new Error(saved.data.error||'import_failed');removeLegacy([VOICE_KEY]);return;
    }
    if(id==='food'){
      const current=await plainJson('/systems/baseline-food-approach/api/diet_log.php');
      if(!current.ok||current.data.hasData) throw new Error('server_has_data');
      const saved=await plainJson('/systems/baseline-food-approach/api/diet_log.php',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({store:parseObject(localGet(FOOD_KEY)),expectedRevision:Number(current.data.revision||0)})});
      if(!saved.ok) throw new Error(saved.data.error||'import_failed');removeLegacy([FOOD_KEY]);return;
    }
    if(id==='badmintonfocused'){
      const current=await request('games:badmintonfocused','/systems/baseline-games-hub/api/games_data.php?app=badmintonfocused');
      if(!current.ok||current.data.found) throw new Error('server_has_data');
      const saved=await request('games:badmintonfocused','/systems/baseline-games-hub/api/games_data.php',{method:'POST',body:{action:'save',app:'badmintonfocused',profile:parseObject(localGet(BADMINTON_FOCUSED_KEY))}});
      if(!saved.ok) throw new Error(saved.data.error||'import_failed');removeLegacy([BADMINTON_FOCUSED_KEY]);return;
    }
    if(id==='skincare-sliders'){
      const prefix=`${SLIDER_PREFIX}${owner}::`;const incoming={};const keys=[];
      legacyKeys().filter(key=>key.startsWith(prefix)).forEach(key=>{const saveId=key.slice(prefix.length);if(saveId){incoming[saveId]=parseObject(localGet(key));keys.push(key);}});
      const current=await plainJson('/systems/baseline-natural-skincare/api/recipe_settings.php');
      if(!current.ok) throw new Error('import_failed');
      const existing=current.data.settings||{};
      if(Object.keys(incoming).some(key=>Object.hasOwn(existing,key))) throw new Error('server_has_data');
      const saved=await plainJson('/systems/baseline-natural-skincare/api/recipe_settings.php',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({settings:Object.assign({},existing,incoming),expectedRevision:Number(current.data.revision||0)})});
      if(!saved.ok) throw new Error(saved.data.error||'import_failed');removeLegacy(keys);return;
    }
    if(id==='skincare-routine'){
      const key=`__bl_skincare_routine_v1__::${owner}`;const local=parseObject(localGet(key));const current=await plainJson('/systems/baseline-natural-skincare/api/routine_state.php');
      if(!current.ok||current.data.hasRoutine) throw new Error('server_has_data');
      const saved=await plainJson('/systems/baseline-natural-skincare/api/routine_state.php',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({routine:local.routine||local.items||[],logs:local.logs||{},visibility:local.visibility||'private',expectedRevision:Number(current.data.revision||0)})});
      if(!saved.ok) throw new Error(saved.data.error||'import_failed');removeLegacy([key]);return;
    }
    if(id==='skincare-groups'){
      const keys=['v3','v2','v1'].map(version=>`__bl_skincare_routine_groups_${version}__::${owner}`).filter(key=>localGet(key)!==null);const local=parseObject(localGet(keys[0]));const current=await plainJson('/systems/baseline-natural-skincare/api/routine_groups.php');
      if(!current.ok||(current.data.groups||[]).length||Object.keys(current.data.assignments||{}).length) throw new Error('server_has_data');
      const saved=await plainJson('/systems/baseline-natural-skincare/api/routine_groups.php',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({groups:local.groups||[],assignments:local.assignments||{},expectedRevision:Number(current.data.revision||0)})});
      if(!saved.ok) throw new Error(saved.data.error||'import_failed');removeLegacy(keys);return;
    }
    if(id==='fitness-routine'){
      const keys=[`__bl_fitness_routine_v2__::${owner}`,`__bl_fitness_routine_v1__::${owner}`].filter(key=>localGet(key)!==null);const local=parseObject(localGet(keys[0]));const current=await plainJson('/systems/baseline-fitness/api/routine_state.php');
      if(!current.ok||current.data.hasRoutine) throw new Error('server_has_data');
      const saved=await plainJson('/systems/baseline-fitness/api/routine_state.php',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({activities:local.activities||[],logs:local.logs||{},expectedRevision:Number(current.data.revision||0)})});
      if(!saved.ok) throw new Error(saved.data.error||'import_failed');removeLegacy(keys);return;
    }
    if(id==='fitness-groups'){
      const key=`${SITEWIDE_ROUTINE_PREFIX}${owner}`;const local=parseObject(localGet(key));const current=await plainJson('/systems/baseline-fitness/api/routine_groups.php');
      if(!current.ok||(current.data.groups||[]).length||Object.keys(current.data.assignments||{}).length) throw new Error('server_has_data');
      const saved=await plainJson('/systems/baseline-fitness/api/routine_groups.php',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({groups:local.fitnessRoutineGroups||[],assignments:local.fitnessRoutineAssignments||{},expectedRevision:Number(current.data.revision||0)})});
      if(!saved.ok) throw new Error(saved.data.error||'import_failed');delete local.fitnessRoutineGroups;delete local.fitnessRoutineAssignments;localSet(key,JSON.stringify(local));return;
    }
    throw new Error('unknown_import');
  }

  document.addEventListener('click',async event=>{
    const button=event.target?.closest?.('[data-legacy-import]');if(!button) return;
    event.preventDefault();button.disabled=true;importStatus('Importing…');
    try{
      await importLegacy(String(button.dataset.legacyImport||''));
      importStatus('Imported to your account. The old browser copy has been retired.');ensureImportPanel();scope.setTimeout(()=>scope.location?.reload?.(),120);
    }catch(error){
      const code=String(error?.message||'import_failed');
      importStatus(code==='server_has_data'?'Server data already exists, so the browser copy was not imported.':'Import failed. No server data was overwritten.',true);
    }finally{button.disabled=false;}
  });

  function voiceCopyGuard(){
    const fix=()=>{
      const status=document.getElementById('bl-voice-status');
      if(status&&/saved on this device/i.test(status.textContent||'')){
        status.textContent='Account save failed. This change was not saved to your account.';status.dataset.kind='error';
      }
    };
    if(typeof MutationObserver!=='undefined') new MutationObserver(fix).observe(document.documentElement,{childList:true,subtree:true,characterData:true});
    fix();
  }
  function applyAuth(snapshot){
    const next={authed:Boolean(snapshot?.authed),name:String(snapshot?.name||snapshot?.user?.name||'').trim()};
    const changed=next.authed!==authSnapshot.authed||ownerName(next.name)!==ownerName(authSnapshot.name);authSnapshot=next;
    if(!next.authed){ sessionValues.delete(FOOD_KEY);sessionValues.delete(BADMINTON_FOCUSED_KEY);clearServerCaches();ensureImportPanel();return; }
    if(changed) hydrateBrowserOwned().catch(()=>{});else ensureImportPanel();
  }
  function attachAuth(){
    if(authAttached) return true;
    const auth=scope.BASELINE_auth;if(!auth?.get) return false;authAttached=true;
    try{applyAuth(auth.get());auth.onChange?.(applyAuth);}catch(_error){}
    document.addEventListener('baseline:auth',event=>applyAuth(event.detail));return true;
  }

  const savedData=Object.freeze({
    legacyValue:key=>localGet(key),
    removeLegacy:key=>localRemove(key),
    sessionValue:key=>runtimeValue(String(key)),
    setSessionValue:(key,value)=>{sessionValues.set(String(key),String(value));emitWrite(key,value);},
    isGuardedKey,
    isBlocked:resource=>blocked.has(String(resource||'')),
    block:showFailure,
    refreshImports:ensureImportPanel
  });
  api.savedData=savedData;
  scope.BASELINE_SavedDataGuard=savedData;

  voiceCopyGuard();attachAuth();ensureImportPanel();
  scope.setTimeout(attachAuth,0);scope.setTimeout(attachAuth,100);scope.setTimeout(attachAuth,500);
})(window);


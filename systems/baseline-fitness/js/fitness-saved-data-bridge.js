/* Baseline Fitness — explicit server-owned Saved Data authority.

   Body profile, active-workout and progression history live in fitness.json.
   This module keeps only a page-memory copy of the last accepted server state.
   It never mirrors account data into browser storage and never promotes browser
   data into the account.
*/
(function(global){
  'use strict';
  if(!global||global.__BASELINE_FITNESS_SAVED_DATA_AUTHORITY__)return;
  global.__BASELINE_FITNESS_SAVED_DATA_AUTHORITY__=true;

  const API='/systems/baseline-fitness/api/fitness_state.php';
  const timers=new Map();
  let enabled=false;
  let savedDataDisabled=false;
  let revision=0;
  let authName='';
  let syncing=false;
  let saveBlocked=false;
  let lastError='';
  let profile=null;
  let activeWorkout=null;
  let progressionHistory={outcomes:[],failures:[]};
  let selectedPlanId=0;

  function clone(value){
    try{return value&&typeof value==='object'?JSON.parse(JSON.stringify(value)):value;}
    catch(_error){return null;}
  }
  function normalise(value){return String(value||'').trim().toLocaleLowerCase('en-GB');}
  function revisionClient(){return global.BASELINE_api?.revisions||null;}
  function rememberRevision(data){
    const remembered=revisionClient()?.remember?.('fitness',data);
    const candidate=Number.isInteger(Number(remembered))?Number(remembered):Number(data?.revision);
    if(Number.isInteger(candidate)&&candidate>=0)revision=candidate;
  }
  function revisionedBody(body){
    return revisionClient()?.withExpected?.('fitness',body)||Object.assign({},body,{expectedRevision:revision});
  }
  function emit(source='server'){
    try{
      document.dispatchEvent(new CustomEvent('baseline:fitness-saved-data-updated',{detail:{
        source,
        revision,
        enabled,
        saveBlocked,
        profile:clone(profile),
        activeWorkout:clone(activeWorkout),
        progressionHistory:clone(progressionHistory),
        selectedPlanId
      }}));
    }catch(_error){}
    try{document.dispatchEvent(new CustomEvent('baseline:fitness-progression-history-updated'));}catch(_error){}
  }
  function renderAuthorityStatus(){
    const existing=document.getElementById('fitnessSavedDataAuthorityStatus');
    if(!saveBlocked){existing?.remove();return;}
    const host=document.querySelector('main')||document.body;
    if(!host)return;
    const panel=existing||document.createElement('div');
    panel.id='fitnessSavedDataAuthorityStatus';
    panel.className='card';
    panel.setAttribute('data-fitness-save-blocked','true');
    panel.innerHTML='<strong>Fitness saving has stopped.</strong><p class="note">The authoritative account Fitness data could not be safely saved. Reload the account copy before making more persistent changes.</p>';
    const button=document.createElement('button');
    button.type='button';
    button.textContent='Reload account Fitness data';
    button.addEventListener('click',()=>reload());
    panel.appendChild(button);
    if(!existing)host.prepend(panel);
  }
  function blockSaving(error){
    saveBlocked=true;
    lastError=String(error||'save_failed');
    document.documentElement.setAttribute('data-fitness-server-save-error',lastError);
    renderAuthorityStatus();
    emit('save-error');
  }
  async function request(options={}){
    try{
      const response=await fetch(API,{
        method:options.method||'GET',
        credentials:'same-origin',
        headers:Object.assign({Accept:'application/json'},options.body?{'Content-Type':'application/json'}:{}),
        body:options.body?JSON.stringify(options.body):undefined
      });
      let data=null;
      try{data=await response.json();}catch(_error){data=null;}
      if(response.status===409&&data?.error==='saved_data_not_enabled')return{ok:false,disabled:true,error:'saved_data_not_enabled'};
      return data&&typeof data==='object'?data:{ok:false,error:`http_${response.status}`};
    }catch(error){
      return{ok:false,error:String(error?.message||error||'network_error')};
    }
  }
  function applyServer(data,source='server'){
    if(!data?.ok)return false;
    rememberRevision(data);
    profile=data.profile&&typeof data.profile==='object'?clone(data.profile):null;
    activeWorkout=data.activeWorkout&&typeof data.activeWorkout==='object'?clone(data.activeWorkout):null;
    const history=data.progressionHistory&&typeof data.progressionHistory==='object'?data.progressionHistory:{};
    progressionHistory={
      outcomes:Array.isArray(history.outcomes)?clone(history.outcomes):[],
      failures:Array.isArray(history.failures)?clone(history.failures):[]
    };
    selectedPlanId=Math.max(0,Number(data.selectedPlanId)||0);
    saveBlocked=false;
    lastError='';
    document.documentElement.removeAttribute('data-fitness-server-save-error');
    renderAuthorityStatus();
    emit(source);
    return true;
  }
  async function reload(){
    const data=await request();
    if(data.disabled){
      enabled=false;
      savedDataDisabled=true;
      profile=null;
      activeWorkout=null;
      progressionHistory={outcomes:[],failures:[]};
      selectedPlanId=0;
      emit('disabled');
      return data;
    }
    savedDataDisabled=false;
    enabled=Boolean(data.ok);
    if(enabled)applyServer(data,'reload');
    else blockSaving(data?.error||'fitness_load_failed');
    return data;
  }
  async function post(body){
    if(!enabled||syncing||saveBlocked)return null;
    syncing=true;
    try{
      const data=await request({method:'POST',body:revisionedBody(body)});
      if(data?.ok){applyServer(data,'save');return data;}
      blockSaving(data?.error||'save_failed');
      return data;
    }finally{
      syncing=false;
    }
  }
  function queue(name,body,delay=180){
    if(!enabled||saveBlocked)return false;
    global.clearTimeout(timers.get(name));
    timers.set(name,global.setTimeout(()=>{
      timers.delete(name);
      post(body);
    },delay));
    return true;
  }
  function getProfile(){return clone(profile);}
  function getActiveWorkout(){return clone(activeWorkout);}
  function getProgressionHistory(){return clone(progressionHistory);}
  function getSelectedPlanId(){return selectedPlanId;}
  function saveProfile(value){
    profile=value&&typeof value==='object'?clone(value):null;
    emit('profile-memory');
    return queue('profile',{action:'save_profile',profile:profile||{}},220);
  }
  function saveActiveWorkout(value){
    activeWorkout=value&&typeof value==='object'?clone(value):null;
    emit('active-workout-memory');
    if(!activeWorkout)return clearActiveWorkout();
    return queue('active-workout',{action:'save_active_workout',activeWorkout},120);
  }
  function clearActiveWorkout(){
    activeWorkout=null;
    emit('active-workout-memory');
    return queue('active-workout',{action:'clear_active_workout'},0);
  }
  async function saveSelectedPlanId(value){
    const next=Math.max(0,Number(value)||0);
    selectedPlanId=next;
    emit('selected-plan-memory');
    return post({action:'save_selected_plan',selectedPlanId:next});
  }
  async function saveProgressionHistory(value){
    const history=value&&typeof value==='object'?value:{};
    progressionHistory={
      outcomes:Array.isArray(history.outcomes)?clone(history.outcomes):[],
      failures:Array.isArray(history.failures)?clone(history.failures):[]
    };
    emit('progression-memory');
    return post({action:'save_progression_history',progressionHistory});
  }
  async function syncForAuth(snapshot){
    const nextName=snapshot?.authed?String(snapshot.name||snapshot.user?.name||'').trim():'';
    if(!nextName){
      timers.forEach((timer)=>global.clearTimeout(timer));
      timers.clear();
      enabled=false;
      savedDataDisabled=false;
      authName='';
      revision=0;
      profile=null;
      activeWorkout=null;
      progressionHistory={outcomes:[],failures:[]};
      selectedPlanId=0;
      saveBlocked=false;
      lastError='';
      renderAuthorityStatus();
      emit('signed-out');
      return;
    }
    if(normalise(nextName)!==normalise(authName)){
      timers.forEach((timer)=>global.clearTimeout(timer));
      timers.clear();
      revision=0;
      profile=null;
      activeWorkout=null;
      progressionHistory={outcomes:[],failures:[]};
      selectedPlanId=0;
      saveBlocked=false;
      lastError='';
    }
    authName=nextName;
    await reload();
  }
  function attachAuth(){
    const auth=global.BASELINE_auth;
    if(auth&&typeof auth.get==='function'){
      syncForAuth(auth.get());
      if(typeof auth.onChange==='function')auth.onChange(syncForAuth);
      return;
    }
    document.addEventListener('baseline:auth',(event)=>syncForAuth(event.detail||global.BASELINE_auth?.get?.()),{once:false});
  }

  global.BASELINE_FITNESS_SAVED_DATA=Object.freeze({
    reload,
    syncForAuth,
    getProfile,
    getActiveWorkout,
    getProgressionHistory,
    getSelectedPlanId,
    saveProfile,
    saveActiveWorkout,
    clearActiveWorkout,
    saveSelectedPlanId,
    saveProgressionHistory,
    get enabled(){return enabled;},
    get savedDataDisabled(){return savedDataDisabled;},
    get revision(){return revision;},
    get saveBlocked(){return saveBlocked;},
    get lastError(){return lastError;}
  });

  attachAuth();
  global.addEventListener?.('pagehide',()=>timers.forEach((timer)=>global.clearTimeout(timer)),{once:true});
})(typeof window!=='undefined'?window:globalThis);

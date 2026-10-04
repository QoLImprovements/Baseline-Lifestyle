(function(global){
  'use strict';

  const BUILD='FOOD_DATA_SERVICE_20261004_1';
  const API='/systems/baseline-food-approach/api/food_data.php';
  const state={
    document:defaultDocument(),
    revision:0,
    status:'loading',
    canSave:false,
    ready:false,
    pending:null,
    inFlight:false,
    timer:0,
    lastError:''
  };

  function defaultDocument(){
    return {schemaVersion:1,logs:{},notes:{},recipes:[],health:{}};
  }

  function normalise(value){
    const source=value&&typeof value==='object'&&!Array.isArray(value)?value:{};
    return {
      schemaVersion:1,
      logs:source.logs&&typeof source.logs==='object'&&!Array.isArray(source.logs)?source.logs:{},
      notes:source.notes&&typeof source.notes==='object'&&!Array.isArray(source.notes)?source.notes:{},
      recipes:Array.isArray(source.recipes)?source.recipes:[],
      health:source.health&&typeof source.health==='object'&&!Array.isArray(source.health)?source.health:{}
    };
  }

  function clone(value){
    try{return JSON.parse(JSON.stringify(value));}
    catch(_error){return defaultDocument();}
  }

  function emit(){
    try{
      document.dispatchEvent(new CustomEvent('baseline:food-data',{
        detail:{
          status:state.status,
          canSave:state.canSave,
          revision:state.revision,
          error:state.lastError
        }
      }));
    }catch(_error){}
  }

  function setStatus(status,error){
    state.status=status;
    state.lastError=error||'';
    state.ready=true;
    if(state.lastError) document.documentElement.setAttribute('data-food-server-save-error',state.lastError);
    else document.documentElement.removeAttribute('data-food-server-save-error');
    emit();
  }

  async function request(method,payload,keepalive){
    const options={
      method,
      credentials:'same-origin',
      headers:{'Accept':'application/json'},
      keepalive:Boolean(keepalive)
    };
    if(payload!==undefined){
      options.headers['Content-Type']='application/json';
      options.body=JSON.stringify(payload);
    }
    const response=await fetch(API,options);
    const data=await response.json().catch(()=>({}));
    return {response,data};
  }

  async function load(){
    global.clearTimeout(state.timer);
    state.pending=null;
    state.canSave=false;
    state.status='loading';
    state.lastError='';
    emit();
    try{
      const {response,data}=await request('GET');
      if(response.status===401){
        state.document=defaultDocument();
        state.revision=0;
        state.canSave=false;
        setStatus('signed-out','');
        return clone(state.document);
      }
      if(!response.ok||!data.ok) throw new Error(data.error||('http_'+response.status));
      state.document=normalise(data.document);
      state.revision=Number(data.revision)||0;
      state.canSave=true;
      setStatus('ready','');
      return clone(state.document);
    }catch(error){
      state.document=defaultDocument();
      state.revision=0;
      state.canSave=false;
      setStatus('unavailable',String(error&&error.message||error||'server_unavailable'));
      return clone(state.document);
    }
  }

  function payload(documentValue){
    return {
      action:'save',
      document:normalise(documentValue),
      expectedRevision:state.revision
    };
  }

  function scheduleSave(){
    if(!state.canSave) return;
    global.clearTimeout(state.timer);
    state.timer=global.setTimeout(drain,140);
  }

  async function drain(){
    if(state.inFlight||!state.pending||!state.canSave) return;
    const documentValue=state.pending;
    state.pending=null;
    state.inFlight=true;
    try{
      const {response,data}=await request('POST',payload(documentValue));
      if(response.status===409&&data.error==='revision_conflict'){
        state.canSave=false;
        setStatus('conflict','revision_conflict');
        return;
      }
      if(!response.ok||!data.ok) throw new Error(data.error||'save_failed');
      state.document=normalise(data.document||documentValue);
      state.revision=Number(data.revision)||state.revision;
      setStatus('ready','');
    }catch(error){
      state.canSave=false;
      setStatus('unavailable',String(error&&error.message||error||'save_failed'));
    }finally{
      state.inFlight=false;
      if(state.pending&&state.canSave) drain();
    }
  }

  function read(){
    return clone(state.document);
  }

  function write(documentValue){
    state.document=normalise(documentValue);
    if(!state.canSave){
      emit();
      return false;
    }
    state.pending=clone(state.document);
    scheduleSave();
    return true;
  }

  function flush(){
    if(!state.pending||!state.canSave) return;
    const documentValue=state.pending;
    state.pending=null;
    try{
      fetch(API,{
        method:'POST',
        credentials:'same-origin',
        keepalive:true,
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify(payload(documentValue))
      });
    }catch(_error){}
  }

  let readyPromise=load();
  global.addEventListener('pagehide',flush);
  document.addEventListener('baseline:auth',()=>{ readyPromise=load(); });
  document.documentElement.setAttribute('data-food-data-service',BUILD);

  global.BaselineFoodData=Object.freeze({
    build:BUILD,
    read,
    write,
    reload:()=>{ readyPromise=load(); return readyPromise; },
    whenReady:()=>readyPromise,
    canSave:()=>state.canSave,
    getStatus:()=>state.status,
    getRevision:()=>state.revision,
    getLastError:()=>state.lastError,
    flush
  });
  global.BASELINE_FOOD_DATA_READY=readyPromise;
})(window);

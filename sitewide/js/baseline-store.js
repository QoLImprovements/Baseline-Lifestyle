(function(scope){
  'use strict';

  /* Compatibility API for old callers. This is deliberately memory-only.
     Persistent user data belongs to Baseline server APIs, never the browser. */
  const values = new Map();
  const keys = Object.freeze({
    users:'__bl_local_users_v1__',
    session:'__bl_local_session_v1__',
    fitnessPlan:'__bl_fitness_plan_v1__',
    voiceSettings:'__baseline_voice_settings_v1__',
  });

  function clone(value){
    if(value == null) return value;
    try{ return JSON.parse(JSON.stringify(value)); }catch(_e){ return value; }
  }
  function read(key,fallback){
    return values.has(String(key)) ? clone(values.get(String(key))) : fallback;
  }
  function write(key,value){
    values.set(String(key),clone(value));
    return value;
  }
  function del(key){
    values.delete(String(key));
  }
  function clear(){
    values.clear();
  }
  function userKey(prefix,username){
    return String(prefix || '') + '::' + String(username || '').trim().toLowerCase();
  }

  scope.BASELINE_store = Object.freeze({
    isFile:!!(scope.BASELINE_api ? scope.BASELINE_api.isFile : (scope.location && scope.location.protocol === 'file:')),
    persistent:false,
    read,write,del,clear,userKey,keys
  });
})(window);

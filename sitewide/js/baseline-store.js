(function(scope){
  'use strict';

  const keys = {
    users:'__bl_local_users_v1__',
    session:'__bl_local_session_v1__',
    fitnessPlan:'__bl_fitness_plan_v1__',
    voiceSettings:'__baseline_voice_settings_v1__',
  };

  function read(key, fallback){
    try{
      const raw = scope.localStorage.getItem(key);
      if(!raw) return fallback;
      return JSON.parse(raw);
    }catch(_e){
      return fallback;
    }
  }

  function write(key, value){
    try{
      scope.localStorage.setItem(key, JSON.stringify(value));
    }catch(_e){}
  }

  function del(key){
    try{
      scope.localStorage.removeItem(key);
    }catch(_e){}
  }

  function userKey(prefix, username){
    const normalized = String(username || '').trim().toLowerCase();
    return prefix + '::' + normalized;
  }

  scope.BASELINE_store = {
    isFile:!!(scope.BASELINE_api ? scope.BASELINE_api.isFile : (scope.location && scope.location.protocol === 'file:')),
    read,
    write,
    del,
    userKey,
    keys,
  };
})(window);

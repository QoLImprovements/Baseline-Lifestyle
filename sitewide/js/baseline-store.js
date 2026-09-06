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

/* Skincare-only recipe UX modules. Kept out of the shared bundle and loaded only on the skincare app. */
(function(scope){
  'use strict';
  try{
    if(!scope.document || scope.document.documentElement.getAttribute('data-app') !== 'skin') return;
    const modules=[
      ['/systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js?v=SKINCARE_RECIPE_UX_20260906_1','data-skincare-recipe-ux-20260906'],
      ['/systems/baseline-natural-skincare/js/skincare-recipe-entry-guard-20260906.js?v=SKINCARE_RECIPE_ENTRY_GUARD_20260906_1','data-skincare-recipe-entry-guard-20260906'],
      ['/systems/baseline-natural-skincare/js/skincare-recipe-navigation-20260906.js?v=SKINCARE_RECIPE_NAV_20260906_1','data-skincare-recipe-navigation-20260906'],
      ['/systems/baseline-natural-skincare/js/skincare-slider-cleanup-20260906.js?v=SKINCARE_SLIDER_CLEANUP_20260906_1','data-skincare-slider-cleanup-20260906']
    ];
    modules.forEach(function(entry){
      if(scope.document.querySelector('script['+entry[1]+']')) return;
      const script=scope.document.createElement('script');
      script.src=entry[0];
      script.async=false;
      script.setAttribute(entry[1],'true');
      scope.document.head.appendChild(script);
    });
  }catch(_e){}
})(window);

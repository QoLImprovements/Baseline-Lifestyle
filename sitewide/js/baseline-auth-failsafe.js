/* Baseline Lifestyle — single-owner sitewide API compatibility.
   This preserves the shared auth state machine and only repairs local servers
   that do not apply the root /api rewrite. */
(function(){
  'use strict';

  const BUILD='SITEWIDE_AUTH_SINGLE_OWNER_20260713_5';
  const originalFetch=window.fetch.bind(window);
  const sitewideEndpoints=new Set([
    'login.php','me.php','logout.php','auth_providers.php','register.php',
    'forgot_password.php','password_reset.php','favourites.php','binaural.php'
  ]);

  // The live Fitness site previously stored complete server responses under a
  // version-one cache key. A malformed or very large value is parsed
  // synchronously when My Plan opens and can exhaust the renderer before the
  // network request begins. Local previews do not contain that production
  // storage, which is why the failure did not reproduce there. Remove only the
  // obsolete Fitness plan-response cache; account/session data is untouched.
  function clearObsoleteFitnessPlanCache(){
    try{
      const body=document.body;
      if(!body || !body.dataset || body.dataset.app!=='fitness') return;
      const prefixes=['__bl_fitness_plan_cache_v1__','__baseline_fitness_plan_cache_v1__'];
      const removals=[];
      const count=Math.min(Number(window.localStorage && window.localStorage.length)||0,500);
      for(let index=0;index<count;index+=1){
        const key=window.localStorage.key(index)||'';
        if(prefixes.some(prefix=>key.indexOf(prefix)===0)) removals.push(key);
      }
      removals.forEach(key=>window.localStorage.removeItem(key));
      document.documentElement.setAttribute('data-baseline-fitness-legacy-cache-cleared',String(removals.length));
    }catch(_error){}
  }

  function requestUrl(input){
    try{
      const raw=typeof input==='string'||input instanceof URL?String(input):String(input&&input.url||'');
      return new URL(raw,document.baseURI||window.location.href);
    }catch(_error){return null;}
  }

  function fallbackUrl(url){
    if(!url||url.origin!==window.location.origin)return '';
    let match=url.pathname.match(/^\/api\/([^/]+)$/i);
    if(!match)match=url.pathname.match(/^\/systems\/baseline-fitness\/api\/([^/]+)$/i);
    if(!match||!sitewideEndpoints.has(match[1].toLowerCase()))return '';
    return '/sitewide/api/'+match[1]+url.search;
  }

  function needsFallback(response){
    if(!response)return true;
    if(response.status===404||response.status===405||response.status>=500)return true;
    if(response.ok){
      const type=String(response.headers.get('content-type')||'').toLowerCase();
      if(type&&type.indexOf('json')===-1)return true;
    }
    return false;
  }

  clearObsoleteFitnessPlanCache();

  window.fetch=async function(input,init){
    const url=requestUrl(input);
    const alternate=fallbackUrl(url);
    if(!alternate)return originalFetch(input,init);

    try{
      const response=await originalFetch(input,init);
      if(!needsFallback(response))return response;
    }catch(_error){}

    return originalFetch(alternate,init);
  };

  document.documentElement.setAttribute('data-baseline-auth-authority',BUILD);
  const duplicate=document.getElementById('bl-auth-failsafe-flyout');
  if(duplicate)duplicate.remove();
})();

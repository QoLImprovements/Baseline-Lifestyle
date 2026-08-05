/* Baseline Lifestyle — single-owner sitewide API and form compatibility. */
(function(){
  'use strict';

  const BUILD='SITEWIDE_AUTH_AND_FORM_INTERACTIONS_20260805_1';
  const originalFetch=window.fetch.bind(window);
  const sitewideEndpoints=new Set([
    'login.php','me.php','logout.php','auth_providers.php','register.php',
    'forgot_password.php','password_reset.php','favourites.php','binaural.php'
  ]);

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

  function ensureFormInteractionAssets(){
    if(!document.querySelector('link[data-baseline-form-interactions]')){
      const link=document.createElement('link');
      link.rel='stylesheet';
      link.href='/sitewide/css/baseline-form-interactions.css?v=SITEWIDE_FORM_INTERACTIONS_20260805_1';
      link.dataset.baselineFormInteractions='true';
      document.head.appendChild(link);
    }
    if(!document.querySelector('script[data-baseline-form-interactions]')){
      const script=document.createElement('script');
      script.src='/sitewide/js/baseline-form-interactions.js?v=SITEWIDE_FORM_INTERACTIONS_20260805_1';
      script.defer=true;
      script.dataset.baselineFormInteractions='true';
      document.head.appendChild(script);
    }
  }

  function repairAuthForms(root=document){
    const actions={
      login:'#bl-auth-login',
      signup:'#bl-auth-signup',
      recover:'#bl-auth-recover',
      reset:'#bl-auth-reset-submit'
    };
    root.querySelectorAll?.('#bl-auth-flyout .bl-auth-form[data-auth-view]').forEach(form=>{
      const button=document.querySelector(actions[form.dataset.authView]||'');
      if(button)button.type='submit';
    });
  }

  clearObsoleteFitnessPlanCache();
  ensureFormInteractionAssets();
  repairAuthForms();
  const formObserver=new MutationObserver(records=>{
    if(records.some(record=>Array.from(record.addedNodes||[]).some(node=>node.nodeType===1)))repairAuthForms();
  });
  try{formObserver.observe(document.documentElement,{childList:true,subtree:true});}catch(_error){}
  window.addEventListener('pagehide',()=>formObserver.disconnect(),{once:true});

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

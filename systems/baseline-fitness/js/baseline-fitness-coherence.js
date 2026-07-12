/* Baseline Fitness — delivery stability, plan-view guard and compact exercise rows. */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_COHERENCE_20260712_3';
  if(global.__BASELINE_FITNESS_COHERENCE__) return;
  global.__BASELINE_FITNESS_COHERENCE__=true;
  document.documentElement.setAttribute('data-baseline-fitness-coherence',BUILD);

  const SESSION_KEY='__bl_local_session_v1__';
  const PLAN_CACHE_PREFIX='__bl_fitness_plan_cache_v1__::';
  const originalFetch=typeof global.fetch==='function'?global.fetch.bind(global):null;

  function readJson(key){
    try{
      const raw=global.localStorage?.getItem(key);
      return raw?JSON.parse(raw):null;
    }catch(_error){ return null; }
  }

  function localSession(){
    const value=readJson(SESSION_KEY);
    if(!value||!String(value.name||'').trim()) return null;
    return {name:String(value.name||'').trim(),email:String(value.email||'').trim()};
  }

  function cachedPlan(){
    const session=localSession();
    if(!session) return null;
    const key=PLAN_CACHE_PREFIX+session.name.toLowerCase();
    const cached=readJson(key);
    if(!cached?.planJson) return null;
    return cached;
  }

  function requestUrl(input){
    try{
      const raw=typeof input==='string'||input instanceof URL?String(input):String(input?.url||'');
      return new URL(raw,document.baseURI||location.href);
    }catch(_error){ return null; }
  }

  function requestMethod(input,init){
    return String(init?.method||input?.method||'GET').toUpperCase();
  }

  function jsonResponse(payload){
    return new Response(JSON.stringify(payload),{
      status:200,
      headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}
    });
  }

  function planFallback(){
    const cached=cachedPlan();
    if(!cached) return null;
    return {
      ok:true,
      hasPlan:true,
      planId:cached.planId||0,
      planJson:cached.planJson,
      sessions:Array.isArray(cached.sessions)?cached.sessions:[],
      progress:cached.progress||null,
      source:'local-plan-cache'
    };
  }

  function authFallback(){
    const session=localSession();
    if(!session) return null;
    return {ok:true,authed:true,name:session.name,email:session.email,source:'local-session-cache'};
  }

  if(originalFetch){
    global.fetch=async function(input,init){
      const url=requestUrl(input);
      const method=requestMethod(input,init);
      const path=String(url?.pathname||'').toLowerCase();
      const ownPlan=method==='GET'&&/\/(?:systems\/baseline-fitness\/api|sitewide\/api|api)\/get_plan\.php$/.test(path)&&!url?.searchParams?.has('name');
      const ownAuth=method==='GET'&&/\/(?:sitewide\/api|api)\/me\.php$/.test(path);
      if(!ownPlan&&!ownAuth) return originalFetch(input,init);

      try{
        const response=await originalFetch(input,init);
        let data=null;
        try{ data=await response.clone().json(); }catch(_error){}

        if(response.ok&&data?.ok===true){
          // A cached user/plan remains the stable visible state while a parallel
          // auth refresh briefly reports logged-out/no-plan. Explicit logout and
          // deletion remove these cache keys first, so genuine user actions still win.
          if(ownAuth&&data.authed===false&&localSession()){
            const fallback=authFallback();
            if(fallback) return jsonResponse(fallback);
          }
          if(ownPlan&&data.hasPlan===false&&cachedPlan()){
            const fallback=planFallback();
            if(fallback) return jsonResponse(fallback);
          }
          return response;
        }

        const fallback=ownPlan?planFallback():authFallback();
        return fallback?jsonResponse(fallback):response;
      }catch(error){
        const fallback=ownPlan?planFallback():authFallback();
        if(fallback) return jsonResponse(fallback);
        throw error;
      }
    };
  }

  function compactCurrentSteps(){
    const root=document.querySelector('#currentWorkoutOut');
    if(!root) return;
    const context=global.BASELINE_fitnessWorkout?.getCurrentContext?.();
    const steps=Array.isArray(context?.steps)?context.steps:[];
    root.querySelectorAll('.current-step').forEach((row,index)=>{
      const step=steps[index];
      if(!step) return;
      const heading=row.querySelector('.current-step-head > div:first-child');
      const nameNode=heading?.querySelector('b');
      const label=`${step.name} - (${Math.round(Number(step.target)||0)})`;
      if(nameNode){
        nameNode.classList.add('current-step-label');
        if(nameNode.textContent!==label) nameNode.textContent=label;
      }
      const duplicate=row.querySelector('.current-step-text');
      if(duplicate) duplicate.hidden=true;

      const status=row.querySelector('.step-status');
      const achieved=row.querySelector('.step-subnote');
      if(status&&achieved){
        const number=(achieved.textContent.match(/-?\d+/)||[])[0];
        if(number!=null){
          const base=status.dataset.baseLabel||status.textContent.trim();
          status.dataset.baseLabel=base;
          const next=`${base} · Achieved ${number}`;
          if(status.textContent!==next) status.textContent=next;
          achieved.hidden=true;
        }
      }
    });
  }

  function compactPlanExercises(){
    document.querySelectorAll('.session-subcard').forEach(card=>{
      if(card.dataset.compactExercise==='true') return;
      const name=String(card.querySelector('b')?.textContent||'').trim();
      const details=String(card.textContent||'').replace(name,'').trim();
      let amount='';
      const hold=details.match(/hold\s+(\d+)\s+seconds?/i);
      const reps=details.match(/sets\s*\(\d+\)\s*:\s*([\d\s/]+)\s*reps?/i);
      if(hold) amount=hold[1];
      else if(reps) amount=(reps[1].match(/\d+/g)||[]).join(' / ');
      if(!name||!amount) return;
      card.dataset.compactExercise='true';
      card.classList.add('plan-exercise-row');
      card.textContent=`${name} - (${amount})`;
    });
  }

  function enforceSavedPlanView(){
    const cached=cachedPlan();
    if(!cached?.planJson) return;
    const generator=document.querySelector('#myPlanGeneratorWrap');
    const saved=document.querySelector('#myPlanSavedWrap');
    const cancel=document.querySelector('#cancelEditPlanBtn');
    const editing=Boolean(cancel&&!cancel.hidden);
    if(editing) return;
    if(generator) generator.hidden=true;
    if(saved) saved.hidden=false;
  }

  let scheduled=false;
  function applyCoherence(){
    scheduled=false;
    compactCurrentSteps();
    compactPlanExercises();
    enforceSavedPlanView();
  }
  function scheduleCoherence(){
    if(scheduled) return;
    scheduled=true;
    if(typeof global.requestAnimationFrame==='function') global.requestAnimationFrame(applyCoherence);
    else global.setTimeout(applyCoherence,0);
  }

  function init(){
    applyCoherence();
    new MutationObserver(scheduleCoherence).observe(document.body,{childList:true,subtree:true});
    document.addEventListener('baseline:fitness-workout-updated',scheduleCoherence);
    document.addEventListener('baseline:auth',scheduleCoherence);
    document.addEventListener('click',event=>{
      const id=event.target?.closest?.('button')?.id||'';
      if(id==='endVoiceWorkoutBtn'||id==='cancelEditPlanBtn'){
        setTimeout(scheduleCoherence,0);
        setTimeout(scheduleCoherence,80);
        setTimeout(scheduleCoherence,300);
      }
    },true);
  }

  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init,{once:true}):init();
})(window);

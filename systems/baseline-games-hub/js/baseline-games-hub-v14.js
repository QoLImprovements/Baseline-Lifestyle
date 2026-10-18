const BUILD='GAMES_HUB_BADMINTON_INITIAL_20260707_1';
const LEGACY_BUILD='GAMES_HUB_DARTS_ACCESS_20260706_1';
const REALM_BUILD='REALM_DIRECT_WORKSHOP_ROUTE_20261019_1';
const REALM='/systems/baseline-games-hub/games/baseline-realm/shared/js/realm-entry.js?v='+REALM_BUILD;
const DARTS='/systems/baseline-games-hub/games/darts-focused/js/darts-focused.js?v=DARTS_REBUILD_20260707_4';
const DARTS_CSS='/systems/baseline-games-hub/games/darts-focused/css/darts-focused.css?v=DARTS_REBUILD_20260707_4';
const BADMINTON='/systems/baseline-games-hub/games/badminton-focused/js/badminton-focused.js?v=BADMINTON_FOCUSED_REFINED_20260707_2';
const BADMINTON_CSS='/systems/baseline-games-hub/games/badminton-focused/css/badminton-focused.css?v=BADMINTON_FOCUSED_REFINED_20260707_2';

let realmPromise=null;
let dartsPromise=null;
let badmintonPromise=null;
let dartsObserver=null;

document.documentElement.dataset.baselineGamesHubLoader=BUILD;

function ready(){
  return Boolean(window.BASELINE_GAMES_HUB_CORE_READY&&window.BASELINE_GAMES_HUB_CORE_DEPENDENCIES);
}

function waitCore(){
  if(ready())return Promise.resolve(window.BASELINE_GAMES_HUB_CORE_DEPENDENCIES);
  return new Promise((resolve,reject)=>{
    let settled=false;
    const finish=(callback,value)=>{
      if(settled)return;
      settled=true;
      window.removeEventListener('baseline:games-hub:core-ready',onReady);
      window.clearTimeout(timeout);
      callback(value);
    };
    const onReady=()=>{
      if(ready())finish(resolve,window.BASELINE_GAMES_HUB_CORE_DEPENDENCIES);
    };
    const timeout=window.setTimeout(()=>finish(reject,new Error('Games Hub core unavailable')),6000);
    window.addEventListener('baseline:games-hub:core-ready',onReady,{once:true});
    Promise.resolve().then(onReady);
  });
}

function real(host){
  return Boolean(host&&!host.__gamesHubGuard&&typeof host.configure==='function'&&typeof host.render==='function');
}

function clearRealmFailure(){
  document.getElementById('baselineRealmLoaderFailure')?.remove();
  document.documentElement.removeAttribute('data-baseline-realm-loading');
  document.documentElement.removeAttribute('data-baseline-realm-unavailable');
}

function showRealmFailure(error){
  document.documentElement.removeAttribute('data-baseline-realm-loading');
  document.documentElement.dataset.baselineRealmUnavailable=REALM_BUILD;
  const shell=document.querySelector('#ninjaPanel .realm-shell-card')||document.getElementById('ninjaPanel');
  if(!shell||document.getElementById('baselineRealmLoaderFailure'))return;
  const panel=document.createElement('section');
  panel.id='baselineRealmLoaderFailure';
  panel.className='empty-box realm-loader-failure';
  panel.setAttribute('role','alert');
  panel.innerHTML='<strong>Baseline Realm could not start.</strong><span class="inline-note">The game files did not finish initialising. Retry without leaving the Games page.</span><button class="action" data-realm-loader-retry type="button">Retry Baseline Realm</button>';
  shell.prepend(panel);
  console.error('[Baseline Games Hub] Realm load failed.',error);
}

/* Compatibility loader only. realm-entry.js is the sole Realm bootstrap,
   scene-navigation and presentation authority. This wrapper merely waits for
   the canonical host so Games Hub callers can keep using BaselineRealmLoader. */
async function resolveRealmHost(){
  const existing=window.BaselineRealmHost;
  if(real(existing)) return existing;
  const module=await import(REALM);
  const host=module.BaselineRealmHost||window.BaselineRealmHost;
  if(!real(host)) throw new Error('Canonical Realm host missing');
  return host;
}
async function loadRealm(options){
  const opts=options||{};
  if(opts.retry){
    realmPromise=null;
    clearRealmFailure();
  }
  document.documentElement.dataset.baselineRealmLoading=REALM_BUILD;
  if(!realmPromise){
    realmPromise=(async()=>{
      const dependencies=await waitCore();
      const host=await resolveRealmHost();
      if(typeof host.isConfigured==='function'&&!host.isConfigured()) host.configure(dependencies);
      if(typeof host.isConfigured==='function'&&!host.isConfigured()) throw new Error('Canonical Realm host did not configure');
      if(typeof host.whenSceneReady==='function') await host.whenSceneReady();
      clearRealmFailure();
      delete window.BASELINE_REALM_LOAD_ERROR;
      document.documentElement.dataset.baselineRealmRuntimeActive=host.build||REALM_BUILD;
      return host;
    })().catch(error=>{
      realmPromise=null;
      window.BASELINE_REALM_LOAD_ERROR=error;
      showRealmFailure(error);
      throw error;
    });
  }
  return realmPromise;
}

function addDartsCss(){
  if(document.querySelector('link[data-darts-focused-style]'))return;
  const link=document.createElement('link');
  link.rel='stylesheet';
  link.href=DARTS_CSS;
  link.dataset.dartsFocusedStyle='DARTS_REBUILD_20260707_4';
  document.head.appendChild(link);
}

function dartsMarkup(){
  return '<div class="games-list-group darts-task-group" data-darts-entry><span>Darts Focused Games</span></div>'+
    '<div class="game-row-wrap game-row-wrap--featured darts-focused-overview-row" data-game-card="darts-focused" data-darts-entry>'+
      '<button class="game-row darts-overview-row" data-open-darts-focused type="button">'+
        '<img class="game-card-art darts-overview-art" src="/systems/baseline-games-hub/games/darts-focused/art/realistic-dartboard.svg" alt="">'+
        '<div class="game-row-copy"><h3>Darts Focused</h3><p>10 distinct website games with selectable tiers for calculation, attention, board knowledge, working memory and decision control.</p></div>'+
        '<div class="game-row-meta"><strong>10 games</strong><span class="inline-note">Open games</span></div>'+
      '</button>'+
      '<button class="game-row-info-button bl-info-button" data-bl-info-button data-bl-info-title="What this develops" data-bl-info-text="Darts-specific calculation, selective attention, visual memory, pressure control, strategic flexibility and recovery after mistakes." type="button" aria-label="What Darts Focused develops" aria-expanded="false"><span aria-hidden="true">i</span></button>'+
    '</div>';
}

function addDarts(){
  addDartsCss();
  const list=document.getElementById('gamesList');
  if(!list||list.querySelector('[data-open-darts-focused]'))return;
  const testingHeading=[...list.querySelectorAll('.games-list-group')].find(node=>node.textContent.trim()==='Testing');
  if(testingHeading)testingHeading.insertAdjacentHTML('afterend',dartsMarkup().replace('<div class="games-list-group darts-task-group" data-darts-entry><span>Darts Focused Games</span></div>',''));
  else list.insertAdjacentHTML('beforeend',dartsMarkup());
}

function watchDarts(){
  addDarts();
  addBadminton();
  const list=document.getElementById('gamesList');
  if(!list||dartsObserver)return;
  let queued=false;
  dartsObserver=new MutationObserver(()=>{
    if(queued)return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;addDarts();addBadminton();});
  });
  dartsObserver.observe(list,{childList:true});
}


function addBadmintonCss(){
  if(document.querySelector('link[data-badminton-focused-style]'))return;
  const link=document.createElement('link');
  link.rel='stylesheet';
  link.href=BADMINTON_CSS;
  link.dataset.badmintonFocusedStyle=BUILD;
  document.head.appendChild(link);
}
function badmintonProfile(){
  try{
    if(window.BadmintonFocusedGames&&typeof window.BadmintonFocusedGames.getProfile==='function')return window.BadmintonFocusedGames.getProfile();
    return window.BaselineGameStorage?.getProfile?.('badmintonfocused') || null;
  }catch(_error){return null;}
}
function badmintonMarkup(){
  const profile=badmintonProfile();
  const level=Math.max(1,Number(profile&&profile.level||1));
  return '<div class="games-list-group badminton-task-group" data-badminton-entry><span>Badminton Focused Games</span></div>'+
    '<div class="game-row-wrap game-row-wrap--featured badminton-focused-overview-row" data-game-card="badminton-focused" data-badminton-entry>'+
      '<button class="game-row badminton-overview-row" data-open-badminton-focused type="button">'+
        '<img class="game-card-art badminton-overview-art" src="/systems/baseline-games-hub/games/badminton-focused/art/badminton-focused-overview.svg" alt="">'+
        '<div class="game-row-copy"><h3>Badminton Focused</h3><p>15 website-based perceptual, attention and decision-training games grounded in the mental demands of real badminton.</p></div>'+
        '<div class="game-row-meta"><strong>Level '+level+' · 15 games</strong><span class="inline-note">Open games</span></div>'+
      '</button>'+
      '<button class="game-row-info-button bl-info-button" data-bl-info-button data-bl-info-title="What this develops" data-bl-info-text="Shuttle tracking, anticipation, reaction control, tactical judgement, court awareness, recovery and performance under pressure." type="button" aria-label="What Badminton Focused develops" aria-expanded="false"><span aria-hidden="true">i</span></button>'+
    '</div>';
}
function addBadminton(){
  addBadmintonCss();
  const list=document.getElementById('gamesList');
  if(!list||list.querySelector('[data-open-badminton-focused]'))return;
  const testingHeading=[...list.querySelectorAll('.games-list-group')].find(node=>node.textContent.trim()==='Testing');
  if(testingHeading)testingHeading.insertAdjacentHTML('afterend',badmintonMarkup().replace('<div class="games-list-group badminton-task-group" data-badminton-entry><span>Badminton Focused Games</span></div>',''));
  else list.insertAdjacentHTML('beforeend',badmintonMarkup());
}
async function loadBadminton(options){
  const opts=options||{};
  if(opts.retry)badmintonPromise=null;
  if(window.BadmintonFocusedGames)return window.BadmintonFocusedGames;
  if(!badmintonPromise){
    badmintonPromise=import(opts.retry?(BADMINTON+'&retry='+Date.now()):BADMINTON).then(()=>{
      if(!window.BadmintonFocusedGames)throw new Error('Badminton Focused did not initialise');
      return window.BadmintonFocusedGames;
    }).catch(error=>{badmintonPromise=null;console.error('[Baseline Games Hub] Badminton Focused load failed.',error);throw error;});
  }
  return badmintonPromise;
}
async function openBadminton(options){
  const api=await loadBadminton(options);
  return api.open(options||{});
}

function clearDartsFailure(){ document.getElementById('dartsFocusedLoaderFailure')?.remove(); }
function showDartsFailure(error){
  clearDartsFailure();
  const overview=document.getElementById('gamesOverviewCard');
  if(!overview)return;
  const panel=document.createElement('section');
  panel.id='dartsFocusedLoaderFailure';
  panel.className='empty-box darts-loader-failure';
  panel.setAttribute('role','alert');
  panel.innerHTML='<strong>Darts Focused could not open.</strong><span class="inline-note">The game module did not finish initialising.</span><button class="action" data-darts-loader-retry type="button">Retry Darts Focused</button>';
  overview.insertAdjacentElement('afterend',panel);
  console.error('[Baseline Games Hub] Darts Focused load failed.',error);
}
async function waitForDartsGlobal(milliseconds=900){
  const started=Date.now();
  while(Date.now()-started<milliseconds){
    if(window.DartsFocusedGames)return window.DartsFocusedGames;
    await new Promise(resolve=>setTimeout(resolve,25));
  }
  return null;
}
async function loadDarts(options){
  const opts=options||{};
  if(opts.retry){dartsPromise=null;clearDartsFailure();}
  if(window.DartsFocusedGames)return window.DartsFocusedGames;
  if(!dartsPromise){
    dartsPromise=(async()=>{
      const preloaded=await waitForDartsGlobal();
      if(preloaded)return preloaded;
      await import(opts.retry ? (DARTS+'&retry='+Date.now()) : DARTS);
      const api=window.DartsFocusedGames;
      if(!api)throw new Error('Darts Focused did not initialise');
      return api;
    })().catch(error=>{dartsPromise=null;showDartsFailure(error);throw error;});
  }
  return dartsPromise;
}
async function openDarts(options){
  const api=await loadDarts(options);
  const panel=api.open(options||{});
  window.setTimeout(()=>{
    if(!document.getElementById('dartsFocusedPanel')?.classList.contains('is-active')) showDartsFailure(new Error('Darts Focused panel did not activate'));
  },80);
  return panel;
}

document.addEventListener('pointerdown',event=>{
  if(!event.target.closest)return;
  if(event.target.closest('[data-select-game="ninja"]'))loadRealm().catch(()=>{});
  if(event.target.closest('[data-open-darts-focused]'))loadDarts().catch(()=>{});
  if(event.target.closest('[data-open-badminton-focused]'))loadBadminton().catch(()=>{});
},true);

async function handleRealmFallbackControl(control){
  const host=await loadRealm();
  if(control.matches('#ninjaManualStrikeBtn')){host.strike?.();return;}
  if(control.matches('#ninjaShurikenBtn')){host.shuriken?.();return;}
  if(control.matches('#realmFullscreenBtn, #realmFullscreenToolbarBtn')){host.toggleFullscreen?.();return;}
  if(control.hasAttribute('data-realm-drawer')){host.handleDrawer?.(control.getAttribute('data-realm-drawer')||'toggle');return;}
  if(control.hasAttribute('data-realm-tab')){host.openDrawerTab?.(control.getAttribute('data-realm-tab')||'upgrades');return;}
  if(control.hasAttribute('data-realm-explore-action')){host.handleExploration?.(control.getAttribute('data-realm-explore-action')||'advance');return;}
  if(control.hasAttribute('data-realm-open-tab')){
    const tab=control.getAttribute('data-realm-open-tab')||'settlement';
    await host.sceneRouter.navigate('basecamp');
    host.openDrawerTab?.(tab);
    return;
  }
  if(control.hasAttribute('data-realm-view')){
    const view=control.getAttribute('data-realm-view')||'training';
    const scene=view==='training'?'ninja-training':view;
    const category=control.getAttribute('data-workshop-category')||'';
    await host.sceneRouter.navigate(scene,category?{category}:undefined);
  }
}

document.addEventListener('click',event=>{
  const retry=event.target.closest&&event.target.closest('[data-realm-loader-retry]');
  if(retry){event.preventDefault();loadRealm({retry:true}).catch(()=>{});return;}
  const dartsRetry=event.target.closest&&event.target.closest('[data-darts-loader-retry]');
  if(dartsRetry){event.preventDefault();openDarts({retry:true}).catch(()=>{});return;}

  const fallbackControl=event.target.closest&&event.target.closest('#ninjaManualStrikeBtn,#ninjaShurikenBtn,#realmFullscreenBtn,#realmFullscreenToolbarBtn,[data-realm-drawer],[data-realm-tab],[data-realm-explore-action],[data-realm-open-tab],[data-realm-view]');
  if(fallbackControl&&!event.__baselineRealmHandled){
    const control=fallbackControl;
    window.setTimeout(()=>{
      if(!event.__baselineRealmHandled) handleRealmFallbackControl(control).catch(error=>showRealmFailure(error));
    },0);
    return;
  }
  const realm=event.target.closest&&event.target.closest('[data-select-game="ninja"]');
  const open=event.target.closest&&event.target.closest('[data-open-darts-focused]');
  const openBad=event.target.closest&&event.target.closest('[data-open-badminton-focused]');
  if(realm)loadRealm().catch(error=>console.error(error));
  if(openBad){event.preventDefault();openBadminton().catch(error=>console.error(error));return;}
  if(!open)return;
  event.preventDefault();
  openDarts().catch(error=>console.error(error));
},true);

window.addEventListener('baseline:realm:load',()=>loadRealm().catch(()=>{}));

function wantsDarts(){
  if(/\/darts-focused\/?$/.test(location.pathname))return true;
  const hash=String(location.hash||'').replace(/^#/,'');
  const params=new URLSearchParams(hash);
  return params.get('game')==='darts-focused'||hash==='darts-focused';
}

function focusedOverviewRoute(){
  return /^\/baseline-games-hub\/games-hub(?:\/games-list)?\/?$/i.test(String(location.pathname||''));
}

function openDartsFromRoute(){
  if(!wantsDarts()){
    if(window.DartsFocusedGames&&document.getElementById('dartsFocusedPanel')?.classList.contains('is-active')){
      window.DartsFocusedGames.close({restoreOverview:focusedOverviewRoute(),historyMode:'none'});
    }
    return Promise.resolve(null);
  }
  const clean=/\/darts-focused\/?$/i.test(String(location.pathname||''))&&!location.hash;
  return openDarts({historyMode:clean?'none':'replace'}).catch(error=>{console.error(error);return null;});
}


function wantsBadminton(){
  if(/\/badminton-focused\/?$/.test(location.pathname))return true;
  const hash=String(location.hash||'').replace(/^#/,'');
  const params=new URLSearchParams(hash);
  return params.get('game')==='badminton-focused'||hash==='badminton-focused';
}
function openBadmintonFromRoute(){
  if(!wantsBadminton()){
    if(window.BadmintonFocusedGames&&document.getElementById('badmintonFocusedPanel')?.classList.contains('is-active')){
      window.BadmintonFocusedGames.close({restoreOverview:focusedOverviewRoute(),historyMode:'none'});
    }
    return Promise.resolve(null);
  }
  const clean=/\/badminton-focused\/?$/i.test(String(location.pathname||''))&&!location.hash;
  return openBadminton({historyMode:clean?'none':'replace'}).catch(error=>{console.error(error);return null;});
}

function wantsRealm(){
  const path=String(location.pathname||'');
  if(/\/baseline-realm\/?$/.test(path))return true;
  const hash=String(location.hash||'').replace(/^#/,'');
  const params=new URLSearchParams(hash);
  return params.get('game')==='ninja'||hash==='ninja';
}

function openRealmFromRoute(){
  if(!wantsRealm())return Promise.resolve(null);
  const button=document.querySelector('[data-select-game="ninja"]');
  const panel=document.getElementById('ninjaPanel');
  if(button&&!(panel&&panel.classList.contains('is-active')))button.click();
  return loadRealm().catch(error=>{console.error(error);return null;});
}

function init(){
  waitCore().then(async()=>{
    watchDarts();
    try{
      await Promise.resolve(window.BASELINE_GAMES_HUB_INITIAL_RENDER_READY);
    }catch(error){
      console.warn('[Baseline Games Hub] Initial profile hydration was incomplete.',error);
    }
    await Promise.allSettled([
      openDartsFromRoute(),
      openBadmintonFromRoute(),
      openRealmFromRoute()
    ]);
  }).catch(error=>{
    console.error(error);
  });
}

function syncFocusedRoutes(){
  openDartsFromRoute();
  openBadmintonFromRoute();
  openRealmFromRoute();
}
window.addEventListener('hashchange',syncFocusedRoutes);
window.addEventListener('popstate',syncFocusedRoutes);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
else init();

window.BaselineRealmLoader={build:BUILD,load:loadRealm,retry:()=>loadRealm({retry:true})};
window.DartsFocusedLoader={build:BUILD,load:loadDarts,open:openDarts,retry:()=>openDarts({retry:true})};
window.BadmintonFocusedLoader={build:BUILD,load:loadBadminton,open:openBadminton,retry:()=>openBadminton({retry:true})};

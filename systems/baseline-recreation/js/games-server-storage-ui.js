const BUILD='GAMES_SAVE_ACTION_20261115_2';
// 2026-07-10: refined save-state icon, custom caption tooltip, and lighter shared popup styling.

function storageState(){
  const authority=globalThis.BaselineGameStorage;
  return{
    authenticated:Boolean(authority?.isAuthenticated?.()),
    canPlay:authority?.canPlay?.()!==false,
    canSave:Boolean(authority?.canSave?.()),
    ready:Boolean(authority?.isReady?.()),
    status:String(authority?.getStatus?.()||'loading'),
    error:String(authority?.getLastError?.()||''),
    unsavedCount:Math.max(0,Number(authority?.getUnsavedCount?.()||0))
  };
}
function accountCard(){return document.getElementById('authStateNote')?.closest('.card')||null;}
function accountCopy(state){
  if(state.canSave)return state.unsavedCount>0?{
    html:'<strong>Saving game progress…</strong><span class="inline-note">Unsaved changes are queued for your account. Keep this page open until the save completes.</span>',
    description:'Your changes are awaiting confirmation from the server.'
  }:{
    html:'<strong>Account saving is available.</strong><span class="inline-note">Game and puzzle progress is stored on the server and linked to your Baseline Lifestyle login.</span>',
    description:'Progress is saved server-side to your Baseline Lifestyle account.'
  };
  if(state.status==='conflict')return{
    html:'<strong>Saving paused: another version exists.</strong><span class="inline-note">Unsaved progress is still in this tab. Do not refresh or close it before resolving the save conflict.</span>',
    description:'Your server data has changed in another tab or session. The site will not overwrite it automatically.'
  };
  if(state.authenticated && state.unsavedCount>0)return{
    html:'<strong>Account saving failed.</strong><span class="inline-note">Your latest changes remain in this open tab but are not yet stored on the server.</span> <button type="button" class="action secondary" data-games-retry-save>Retry saving</button>',
    description:'The site retries automatically after connection failures. You can also retry now; wait for server confirmation before refreshing.'
  };
  if(!state.authenticated && state.unsavedCount>0)return{
    html:'<strong>Account connection interrupted.</strong><span class="inline-note">Unsaved progress is still in this open tab. Sign back into the same account without closing this page.</span>',
    description:'Pending changes are not on the server yet. Signing back in will check the saved revision before a retry.'
  };
  if(state.status==='signed-out')return{
    html:'<strong>Temporary play is active.</strong><span class="inline-note">Games and puzzles remain playable. Sign in to save progress to your Baseline Lifestyle account.</span>',
    description:'You can play without signing in. Progress from this temporary session is not saved or written to account data.'
  };
  return{
    html:'<strong>Temporary play is active; saving is unavailable.</strong><span class="inline-note">Games and puzzles remain playable while the save service is unavailable.</span>',
    description:'Temporary progress is kept only for this page session and does not overwrite account data.'
  };
}
function enforceAccountCopy(){
  const note=document.getElementById('authStateNote');if(!note)return;
  const expected=accountCopy(storageState());
  if(note.innerHTML!==expected.html)note.innerHTML=expected.html;
  const description=accountCard()?.querySelector('.header-row .note');
  if(description&&description.textContent!==expected.description)description.textContent=expected.description;
}
function saveStatusLabel(state){
  if(state.canSave && state.unsavedCount>0)return 'Saving in progress: '+state.unsavedCount+' game profile(s) await server confirmation. Select to send pending changes now.';
  if(state.canSave)return 'Account saving available. Click to save the current game now; confirmation is required from the server.';
  if(state.status==='conflict')return 'Save conflict. Unsaved progress is held in this tab; do not refresh.';
  if(state.authenticated && state.unsavedCount>0)return 'Save failed. Unsaved progress remains in this tab. Click this icon to retry saving.';
  if(state.status==='signed-out' && state.unsavedCount>0)return 'Account session interrupted. Unsaved changes are still in this open tab; sign back into the same account.';
  if(state.status==='signed-out')return 'Sign in to save progress to your Baseline Lifestyle account.';
  return 'Server saving is currently unavailable. Progress from this page session is temporary.';
}
function saveIconSvg(saved){
  const cross=saved?'':'<path class="game-save-icon__cross" d="M6.8 6.8l10.4 10.4M17.2 6.8L6.8 17.2"/>';
  return '<svg class="game-save-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path class="game-save-icon__disc-shell" d="M5 3.5h11.2l2.8 2.8v14.2H5z"/>' +
    '<path class="game-save-icon__disc-shutter" d="M7.8 4.8h7.6v5.4H7.8z"/>' +
    '<path class="game-save-icon__disc-label" d="M7.7 13.2h8.6v6H7.7z"/>' +
    '<circle class="game-save-icon__hub" cx="12" cy="16.25" r="1.45"/>' +
    '<path class="game-save-icon__notch" d="M16.2 3.5v3.1H19"/>' +
    cross +
  '</svg>';
}
function saveIconMarkup(state, realm=false){
  const saved=Boolean(state.canSave && state.unsavedCount===0);
  const label=saveStatusLabel(state);
  const cls=realm?'realm-save-status':'game-save-status';
  return '<button class="'+cls+(saved?' is-saving':' is-unsaved')+'" type="button" aria-label="'+label+'" data-save-status-icon data-save-tooltip="'+label+'">'+saveIconSvg(saved)+'</button>';
}
function ensureSaveTooltip(){
  let tip=document.getElementById('gamesSaveStatusTooltip');
  if(tip) return tip;
  tip=document.createElement('div');
  tip.id='gamesSaveStatusTooltip';
  tip.className='games-save-tooltip';
  tip.hidden=true;
  tip.setAttribute('role','tooltip');
  document.body.appendChild(tip);
  return tip;
}
function positionSaveTooltip(target, tip){
  const rect=target.getBoundingClientRect();
  tip.hidden=false;
  tip.classList.remove('is-below');
  const margin=14;
  const width=tip.offsetWidth;
  const height=tip.offsetHeight;
  const viewportWidth=document.documentElement.clientWidth;
  const viewportHeight=document.documentElement.clientHeight;
  let left=Math.min(Math.max(rect.left + rect.width/2 - width*0.72, margin), viewportWidth - width - margin);
  let top=rect.top - height - 16;
  let below=false;
  if(top < margin){
    top=rect.bottom + 16;
    below=true;
    tip.classList.add('is-below');
  }
  if(top + height > viewportHeight - margin){
    top=Math.max(margin, viewportHeight - height - margin);
  }
  const arrowLeft=Math.min(Math.max(rect.left + rect.width/2 - left, 30), width - 30);
  tip.style.left=Math.round(left)+'px';
  tip.style.top=Math.round(top)+'px';
  tip.style.setProperty('--games-save-tooltip-arrow-left', Math.round(arrowLeft)+'px');
  tip.dataset.position=below?'below':'above';
}
let activeSaveTooltipTarget=null;
function showSaveTooltip(target){
  if(!target) return;
  const tip=ensureSaveTooltip();
  const text=target.getAttribute('data-save-tooltip')||target.getAttribute('aria-label')||'';
  if(!text) return;
  activeSaveTooltipTarget=target;
  tip.textContent=text;
  positionSaveTooltip(target, tip);
}
function hideSaveTooltip(){
  activeSaveTooltipTarget=null;
  const tip=document.getElementById('gamesSaveStatusTooltip');
  if(tip) tip.hidden=true;
}
function refreshActiveSaveTooltip(){
  if(!activeSaveTooltipTarget) return;
  const tip=document.getElementById('gamesSaveStatusTooltip');
  if(!tip || tip.hidden) return;
  if(!document.body.contains(activeSaveTooltipTarget)){ hideSaveTooltip(); return; }
  tip.textContent=activeSaveTooltipTarget.getAttribute('data-save-tooltip')||activeSaveTooltipTarget.getAttribute('aria-label')||'';
  positionSaveTooltip(activeSaveTooltipTarget, tip);
}
function placeSaveIcon(container,state,{realm=false,position='afterbegin'}={}){
  if(!container) return;
  const expectedState=state.canSave?(state.unsavedCount?'saving':'saved'):'unsaved';
  const icon=container.querySelector('[data-save-status-icon]');
  if(!icon) container.insertAdjacentHTML(position,saveIconMarkup(state,realm));
  else if(icon.dataset.saveState!==expectedState) icon.outerHTML=saveIconMarkup(state,realm);
  const current=container.querySelector('[data-save-status-icon]');
  if(current){
    current.dataset.saveState=expectedState;
    const label=saveStatusLabel(state);
    current.setAttribute('aria-label',label);
    current.setAttribute('data-save-tooltip',label);
  }
}
function placeSaveIcons(){
  const state=storageState();
  document.getElementById('gamesServerLoginNotice')?.remove();
  document.querySelectorAll('.game-panel .link-actions').forEach(actions=>placeSaveIcon(actions,state));
  placeSaveIcon(document.querySelector('#jigsawPlayerCard > .puzzle-library-toolbar'),state,{position:'beforeend'});
  placeSaveIcon(document.querySelector('#crossnumberPanel > .puzzle-library-toolbar'),state,{position:'beforeend'});
  placeSaveIcon(document.querySelector('#realmTrainingBar .realm-route-meta'),state,{realm:true,position:'beforeend'});
  refreshActiveSaveTooltip();
}
function showSaveNotice(){document.getElementById('gamesServerLoginNotice')?.remove();placeSaveIcons();}
function update(){const state=storageState();enforceAccountCopy();showSaveNotice();document.documentElement.toggleAttribute('data-games-save-unavailable',!state.canSave);}
function installSaveTooltipEvents(){
  document.addEventListener('mouseover',event=>{
    const button=event.target instanceof Element ? event.target.closest('[data-save-status-icon]') : null;
    if(button) showSaveTooltip(button);
  });
  document.addEventListener('mouseout',event=>{
    const button=event.target instanceof Element ? event.target.closest('[data-save-status-icon]') : null;
    if(!button) return;
    const next=event.relatedTarget;
    if(next instanceof Node && button.contains(next)) return;
    hideSaveTooltip();
  });
  document.addEventListener('focusin',event=>{
    const button=event.target instanceof Element ? event.target.closest('[data-save-status-icon]') : null;
    if(button) showSaveTooltip(button);
  });
  document.addEventListener('focusout',event=>{
    const button=event.target instanceof Element ? event.target.closest('[data-save-status-icon]') : null;
    if(!button) return;
    const next=event.relatedTarget;
    if(next instanceof Node && button.contains(next)) return;
    hideSaveTooltip();
  });
  document.addEventListener('click',event=>{
    const retry=event.target instanceof Element ? event.target.closest('[data-games-retry-save]') : null;
    if(retry){
      event.preventDefault();
      if(retry.disabled)return;
      retry.disabled=true;
      retry.textContent='Retrying…';
      Promise.resolve(globalThis.BaselineGameStorage?.retryFailedSaves?.()).catch(()=>false).finally(update);
      return;
    }
    const button=event.target instanceof Element ? event.target.closest('[data-save-status-icon]') : null;
    if(button){
      event.preventDefault();
      const state=storageState();
      if(globalThis.BASELINE_auth?.get?.().authed && !state.canSave && state.status!=='conflict'){
        Promise.resolve(globalThis.BaselineGameStorage?.retryFailedSaves?.()).catch(()=>false).finally(update);
        return;
      }
      if(state.canSave && state.unsavedCount>0){
        globalThis.BaselineGameStorage?.flush?.();
        showSaveTooltip(button);
        return;
      }
      if(state.authenticated && state.canSave){
        const route=decodeURIComponent(String(location.hash||'').replace(/^#\\/?/,'').split(/[/?]/).filter(Boolean).pop()||'');
        const game=globalThis.BASELINE_GAMES_REGISTRY?.resolve?.(route);
        const app=game?.profileApp || (route==='crossnumber'?'crossnumber':'');
        if(app){
          button.disabled=true;
          Promise.resolve(globalThis.BaselineGameStorage?.saveNow?.(app)).then(ok=>{
            if(ok){button.setAttribute('data-save-tooltip','Save confirmed by server.');}
          }).catch(()=>false).finally(()=>{button.disabled=false;update();});
        }
      }
      showSaveTooltip(button);
      return;
    }
    const tip=document.getElementById('gamesSaveStatusTooltip');
    if(tip && !(event.target instanceof Node && tip.contains(event.target))) hideSaveTooltip();
  });
  window.addEventListener('scroll',refreshActiveSaveTooltip,{passive:true});
  window.addEventListener('resize',refreshActiveSaveTooltip,{passive:true});
}
function install(){
  update();
  installSaveTooltipEvents();
  document.addEventListener('baseline:game-storage',update);
  const observer=new MutationObserver(()=>placeSaveIcons());
  [document.getElementById('games'),document.getElementById('puzzles')].filter(Boolean).forEach(root=>observer.observe(root,{childList:true,subtree:true}));
  document.documentElement.setAttribute('data-games-server-storage-ui',BUILD);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
export{storageState,accountCopy,enforceAccountCopy,showSaveNotice};
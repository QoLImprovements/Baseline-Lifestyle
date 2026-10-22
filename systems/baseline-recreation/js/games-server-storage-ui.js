const BUILD='GAMES_SERVER_STORAGE_UI_20261018_1';
// 2026-07-10: refined save-state icon, custom caption tooltip, and lighter shared popup styling.

function storageState(){
  const authority=globalThis.BaselineGameStorage;
  return{
    authenticated:Boolean(authority?.isAuthenticated?.()),
    canPlay:authority?.canPlay?.()!==false,
    canSave:Boolean(authority?.canSave?.()),
    ready:Boolean(authority?.isReady?.()),
    status:String(authority?.getStatus?.()||'loading'),
    error:String(authority?.getLastError?.()||'')
  };
}
function accountCard(){return document.getElementById('authStateNote')?.closest('.card')||null;}
function accountCopy(state){
  if(state.canSave)return{
    html:'<strong>Account save is active.</strong><span class="inline-note">Game and puzzle progress is stored on the server and linked to your Baseline Lifestyle login.</span>',
    description:'Your game and puzzle data follows your Baseline Lifestyle account and is loaded from the server.'
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
  if(state.canSave) return 'Progress is saved server-side to your Baseline Lifestyle account.';
  if(state.status==='signed-out') return 'Sign in to save progress to your Baseline Lifestyle account.';
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
  const saved=Boolean(state.canSave);
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
  const expectedState=state.canSave?'saving':'unsaved';
  const icon=container.querySelector('[data-save-status-icon]');
  if(!icon) container.insertAdjacentHTML(position,saveIconMarkup(state,realm));
  else if(icon.dataset.saveState!==expectedState) icon.outerHTML=saveIconMarkup(state,realm);
  const current=container.querySelector('[data-save-status-icon]');
  if(current) current.dataset.saveState=expectedState;
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
    const button=event.target instanceof Element ? event.target.closest('[data-save-status-icon]') : null;
    if(button){
      event.preventDefault();
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
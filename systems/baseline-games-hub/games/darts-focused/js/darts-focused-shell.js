import { escapeHtml, panelHtml as buildPanelHtml } from './darts-focused-ui.js';

export function createDartsShell({
  build,
  styleUrl,
  games,
  getSelected,
  progressLabel,
  renderSelectedGame,
  renderProgressSummary,
  clearGameTimers,
  clearAutoTimer
}){
  const byId=(id)=>document.getElementById(id);

  function ensureStylesheet(){
    if(document.querySelector('link[data-darts-focused-style]'))return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href=styleUrl;
    link.dataset.dartsFocusedStyle=build;
    document.head.appendChild(link);
  }

  function ensureExistingModal(){
    let modal=byId('gamesHubInfoModal');
    if(modal)return modal;
    modal=document.createElement('div');
    modal.id='gamesHubInfoModal';
    modal.className='games-modal';
    modal.hidden=true;
    modal.innerHTML='<div class="games-modal__backdrop" data-close-games-modal="1"></div><section class="games-modal__panel" role="dialog" aria-modal="true" aria-labelledby="gamesModalTitle"><button class="games-modal__close" data-close-games-modal="1" type="button" aria-label="Close">×</button><h3 id="gamesModalTitle"></h3><div class="games-modal__body" id="gamesModalBody"></div></section>';
    document.body.appendChild(modal);
    return modal;
  }

  function openHowToPlay(id){
    const game=id==='darts-focused'
      ? {name:'Darts Focused',how:'Open Darts Focused, choose one of the distinct games, select an unlocked difficulty tier, and use the on-screen board or controls. Auto-Next and Full Screen are available for every game.'}
      : games.find((item)=>item.id===id);
    if(!game)return;
    const modal=ensureExistingModal();
    byId('gamesModalTitle').textContent=`${game.name} — How To Play`;
    byId('gamesModalBody').innerHTML=`<p>${escapeHtml(game.how)}</p>`;
    modal.hidden=false;
    document.body.classList.add('games-modal-open');
    modal.querySelector('.games-modal__close')?.focus({preventScroll:true});
  }

  function closeInfo(){
    const modal=byId('gamesHubInfoModal');
    if(modal)modal.hidden=true;
    document.body.classList.remove('games-modal-open');
  }


  function panelHtml(){
    return buildPanelHtml({games,selectedId:getSelected(),progressLabel});
  }

  function ensurePanel(){
    let panel=byId('dartsFocusedPanel');
    if(panel)return panel;
    const overview=byId('gamesOverviewCard');
    if(!byId('games')||!overview)return null;
    overview.insertAdjacentHTML('afterend',panelHtml());
    panel=byId('dartsFocusedPanel');
    renderSelectedGame();
    renderProgressSummary();
    return panel;
  }

  const DARTS_ROUTE='/baseline-games-hub/games-hub/darts-focused';
  const GAMES_OVERVIEW_ROUTE='/baseline-games-hub/games-hub/games-list';

  function writeFocusedRoute(nextUrl,historyMode,state){
    if(historyMode==='none') return;
    try{
      const currentUrl=location.pathname+location.search+location.hash;
      if(currentUrl===nextUrl) return;
      const method=historyMode==='replace'?'replaceState':'pushState';
      history[method](state||{},'',nextUrl);
    }catch(_error){}
  }

  function openPanel({historyMode='push'}={}){
    const panel=ensurePanel();
    const gamesSection=byId('games');
    if(!panel||!gamesSection)throw new Error('Darts Focused panel could not be mounted.');
    document.querySelectorAll('.section').forEach((section)=>section.classList.toggle('active',section===gamesSection));
    document.querySelectorAll('.tab[data-target]').forEach((tab)=>tab.setAttribute('aria-selected',String(tab.getAttribute('data-target')==='games')));
    document.querySelectorAll('#games .game-panel').forEach((item)=>{
      item.classList.remove('is-active');
      item.hidden=true;
      item.setAttribute('aria-hidden','true');
    });
    gamesSection.classList.add('has-active-game');
    panel.classList.add('is-active');
    panel.hidden=false;
    panel.removeAttribute('aria-hidden');
    byId('gamesOverviewCard')?.setAttribute('aria-hidden','true');
    renderSelectedGame();
    renderProgressSummary();
    writeFocusedRoute(DARTS_ROUTE,historyMode,{dartsFocused:true});
    byId('dartsFocusedTitle')?.focus({preventScroll:true});
    document.documentElement.setAttribute('data-darts-focused-open',build);
    return panel;
  }

  function closePanel({restoreOverview=true,historyMode='push'}={}){
    clearGameTimers();
    clearAutoTimer();
    const closing=byId('dartsFocusedPanel');
    closing?.classList.remove('is-active');
    if(closing){
      closing.hidden=true;
      closing.setAttribute('aria-hidden','true');
    }
    document.documentElement.removeAttribute('data-darts-focused-open');
    if(document.fullscreenElement===byId('dartsGameCard'))document.exitFullscreen?.().catch(()=>{});
    if(restoreOverview){
      byId('games')?.classList.remove('has-active-game');
      byId('gamesOverviewCard')?.removeAttribute('aria-hidden');
      writeFocusedRoute(GAMES_OVERVIEW_ROUTE,historyMode,{baselineGames:true});
      document.querySelector('[data-open-darts-focused]')?.focus({preventScroll:true});
    }
  }

  function toggleFullscreen(){
    const card=byId('dartsGameCard');
    if(!card)return;
    if(document.fullscreenElement)document.exitFullscreen?.().catch(()=>{});
    else card.requestFullscreen?.().catch(()=>{});
  }

  return Object.freeze({
    ensureStylesheet,
    ensureExistingModal,
    openHowToPlay,
    closeInfo,
    ensurePanel,
    openPanel,
    closePanel,
    toggleFullscreen
  });
}

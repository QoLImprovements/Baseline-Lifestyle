(function(){
  'use strict';

  const ROOT_ID = 'weightCoherencePuzzle';
  function recreationCssValue(name,fallback){
    try{
      const value=globalThis.getComputedStyle?.(document.documentElement)?.getPropertyValue(name)?.trim();
      return value || fallback;
    }catch(_error){ return fallback; }
  }
  function recreationRgba(name,fallback,alpha){
    return 'rgba(' + recreationCssValue(name,fallback) + ',' + alpha + ')';
  }
  const BOARD_BASE = recreationCssValue('--recreation-panel','#6E2C44');
  const GUIDE_OPACITY = 0.50;
  const ZOOM_MIN = 2;
  const PIECE_ZOOM_DEFAULT = 2;
  const PIECE_ZOOM_MAX = 10;
  const ZOOM_STEP = 1;
  const registry = window.BaselinePuzzlesRegistry;
  const FALLBACK_PUZZLE = Object.freeze({
    id:'weight-of-coherence',
    title:'The Weight of Coherence',
    app:'weightcoherence',
    image:'/systems/baseline-recreation/puzzles/the-weight-of-coherence/art/the-weight-of-coherence.png?v=WEIGHT_OF_COHERENCE_FULL_20261016_2',
    width:1122,
    height:1402,
    alt:'The Weight of Coherence — a symbolic person holding an unfinished structure amid green, red and blue light.',
    description:'The unfinished structure is not complete, yet it must still be carried forward. Its strength depends on different parts remaining in relationship rather than pulling apart. The weight lies in sustaining that integrity while continuing to build.'
  });
  function initialPuzzleFromRoute(){
    if(!registry) return null;
    try{
      const libraryId=String(window.BaselinePuzzlesLibrary?.getJigsaw?.()||'').trim();
      const params=new URLSearchParams(window.location.search||'');
      const routeId=String(params.get('jigsaw')||'').trim();
      const id=libraryId||routeId;
      return id ? (registry.findJigsaw?.(id)||null) : null;
    }catch(_error){
      return null;
    }
  }

  let activePuzzle = initialPuzzleFromRoute() || registry?.findJigsaw?.('weight-of-coherence') || FALLBACK_PUZZLE;
  let BOARD_WIDTH = Number(activePuzzle.width) || 1122;
  let BOARD_HEIGHT = Number(activePuzzle.height) || 1402;
  let APP = activePuzzle.app || 'weightcoherence';
  const DIFFICULTIES = Object.freeze({
    50: Object.freeze({ pieces:50, cols:5, rows:10, trayPageSize:20 }),
    100: Object.freeze({ pieces:100, cols:10, rows:10, trayPageSize:24 }),
    500: Object.freeze({ pieces:500, cols:20, rows:25, trayPageSize:30 }),
    1000: Object.freeze({ pieces:1000, cols:25, rows:40, trayPageSize:32 })
  });
  const JIGSAW_XP_REWARDS = Object.freeze({ 50:30, 100:70, 500:400, 1000:900 });
  const JIGSAW_PROFILE_APPS = Object.freeze([
    'weightcoherence','unheardsignal','tearswithoutwitness','movedalong','pantherjigsaw','bearjigsaw','foxjigsaw','elephantsjigsaw'
  ]);

  const root = document.getElementById(ROOT_ID);
  if(!root) return;

  function escapeHtml(value){
    return String(value??'').replace(/[&<>"']/g,function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }

  const refs = {
    difficultyButtons:Array.from(root.querySelectorAll('[data-jigsaw-difficulty]')),
    start:document.getElementById('weightCoherenceStartBtn'),
    introArt:document.getElementById('weightCoherenceArt'),
    title:document.getElementById('weightCoherenceTitle'),
    description:document.getElementById('weightCoherenceDescription'),
    workspace:document.getElementById('weightCoherenceWorkspace'),
    rotateNotice:document.getElementById('weightCoherenceRotateNotice'),
    boardShell:root.querySelector('.weight-coherence-board-shell'),
    boardWrap:root.querySelector('.weight-coherence-board-wrap'),
    trayShell:root.querySelector('.weight-coherence-tray-shell'),
    playerCard:root.closest('.puzzle-library-card'),
    board:document.getElementById('weightCoherenceBoard'),
    status:document.getElementById('weightCoherenceStatus'),
    placed:document.getElementById('weightCoherencePlaced'),
    timer:document.getElementById('weightCoherenceTimer'),
    difficultyLabel:document.getElementById('weightCoherenceDifficultyLabel'),
    zoomOut:document.getElementById('weightCoherenceZoomOutBtn'),
    zoomToggle:document.getElementById('weightCoherenceZoomBtn'),
    zoomValue:document.getElementById('weightCoherenceZoomValue'),
    zoomIn:document.getElementById('weightCoherenceZoomInBtn'),
    help:document.getElementById('weightCoherenceHelpBtn'),
    helpDialog:document.getElementById('weightCoherenceHelpDialog'),
    preview:document.getElementById('weightCoherencePreviewBtn'),
    view:document.getElementById('weightCoherenceViewBtn'),
    shuffle:document.getElementById('weightCoherenceShuffleBtn'),
    fullscreen:document.getElementById('weightCoherenceFullscreenBtn'),
    reset:document.getElementById('weightCoherenceResetBtn'),
    selectionLabel:document.getElementById('weightCoherenceSelectionLabel'),
    settingsDialog:document.getElementById('weightCoherenceSettingsDialog'),
    setupSettings:document.getElementById('weightCoherenceSetupSettingsBtn'),
    toolbarSettings:document.getElementById('weightCoherenceToolbarSettingsBtn'),
    sortTrays:Array.from(root.querySelectorAll('[data-jigsaw-sort-tray]')),
    sortCounts:Array.from(root.querySelectorAll('[data-sort-count]')),
    tray:document.getElementById('weightCoherenceTray'),
    trayMeta:document.getElementById('weightCoherenceTrayMeta'),
    prev:document.getElementById('weightCoherencePrevBtn'),
    next:document.getElementById('weightCoherenceNextBtn'),
    completion:document.getElementById('weightCoherenceCompletion'),
    tabRow:document.getElementById('weightCoherenceTabRow'),
    tabButtons:Array.from(root.querySelectorAll('[data-jigsaw-panel]')),
    liveXp:document.getElementById('weightCoherenceLiveXp'),
    progressPanel:document.getElementById('weightCoherenceProgressPanel'),
    progress:document.getElementById('weightCoherenceProgress')
  };

  const ctx = refs.board.getContext('2d');
  const placedCanvas = document.createElement('canvas');
  placedCanvas.width = BOARD_WIDTH;
  placedCanvas.height = BOARD_HEIGHT;
  const placedCtx = placedCanvas.getContext('2d');
  const image = new Image();
  image.decoding = 'async';

  let selectedDifficulty = 100;
  let state = null;
  let progression = null;
  let timerHandle = 0;
  let selectedPieceId = null;
  let returnHighlightPieceId = null;
  let dragState = null;
  let suppressTrayClickUntil = 0;
  let imageReady = false;
  let trayRenderToken = 0;
  let lastTrayRenderKey = '';
  let sortRenderToken = 0;
  let lastSortRenderKey = '';
  let viewOn = false;
  let zoomLevel = PIECE_ZOOM_DEFAULT;
  let zoomScale = 1;
  let zoomTarget = null;
  let lastZoomTarget = null;
  let lastZoomPoint = null;
  let boardLens = null;
  let boardLensActive = false;
  let pieceOverlay = null;
  let zoomKeyHeld = false;
  let pseudoFullscreen = false;
  let suppressBoardClickUntil = 0;
  let activeJigsawPanel = (function(){
    try{
      const params=new URLSearchParams(window.location.search||'');
      return params.get('jigsaw-panel')==='progress' ? 'progress' : 'game';
    }catch(_error){ return 'game'; }
  })();
  const pinchPointers = new Map();
  let pinchState = null;
  let pinchResetTimer = 0;
  let fullscreenLayoutTimer = 0;

  image.addEventListener('load', function(){
    imageReady = true;
    rebuildPlacedCanvas();
    drawBoard();
    renderTray();
    const storage=gameStorage();
    const storageReady=!storage || typeof storage.isReady!=='function' || storage.isReady();
    if(!state && storageReady) beginPuzzle();
  });

  function jigsawXpNeeded(level){
    const value=Math.max(1,Math.round(Number(level)||1));
    return 60+((value-1)*35)+((value-1)*(value-1)*4);
  }

  function defaultJigsawProgress(){
    return {
      level:1,
      xp:0,
      totalXpEarned:0,
      completions:0,
      totalPiecesCompleted:0,
      bestTimes:{},
      realmPassivePct:0,
      lastXpAward:0
    };
  }

  function normaliseJigsawProgress(value){
    const source=value&&typeof value==='object'?value:{};
    const bestTimes=source.bestTimes&&typeof source.bestTimes==='object'?source.bestTimes:{};
    const out=defaultJigsawProgress();
    out.level=Math.max(1,Math.round(Number(source.level)||1));
    out.xp=Math.max(0,Math.round(Number(source.xp)||0));
    out.totalXpEarned=Math.max(0,Math.round(Number(source.totalXpEarned)||0));
    out.completions=Math.max(0,Math.round(Number(source.completions)||0));
    out.totalPiecesCompleted=Math.max(0,Math.round(Number(source.totalPiecesCompleted)||0));
    out.bestTimes={};
    Object.keys(bestTimes).forEach(function(key){
      const seconds=Math.max(0,Math.round(Number(bestTimes[key])||0));
      if(seconds) out.bestTimes[String(key)]=seconds;
    });
    out.lastXpAward=Math.max(0,Math.round(Number(source.lastXpAward)||0));
    out.realmPassivePct=jigsawRealmPassivePct(out);
    return out;
  }

  function jigsawRealmPassivePct(progress){
    const p=progress||defaultJigsawProgress();
    const raw=(Math.max(0,Number(p.level||1)-1)*0.18)+(Math.min(40,Math.max(0,Number(p.completions||0)))*0.04);
    return Math.min(5,Math.round(raw*10)/10);
  }

  function currentJigsawReward(){
    const difficulty=state?state.difficulty:selectedDifficulty;
    return Math.max(1,Number(JIGSAW_XP_REWARDS[difficulty]||30));
  }

  function loadJigsawProgress(){
    const stored=gameStorage()?.getProfile?.(APP);
    progression=normaliseJigsawProgress(stored&&stored.progression ? stored.progression : stored);
    return progression;
  }

  function awardJigsawXp(amount){
    if(!progression) progression=defaultJigsawProgress();
    let gain=Math.max(0,Math.round(Number(amount)||0));
    progression.totalXpEarned+=gain;
    progression.xp+=gain;
    let levels=0;
    while(progression.xp>=jigsawXpNeeded(progression.level)){
      progression.xp-=jigsawXpNeeded(progression.level);
      progression.level+=1;
      levels+=1;
    }
    progression.realmPassivePct=jigsawRealmPassivePct(progression);
    progression.lastXpAward=gain;
    return levels;
  }

  function jigsawRealmContribution(){
    const storage=gameStorage();
    let combinedScore=0;
    let totalCompletions=0;
    let highestLevel=1;
    JIGSAW_PROFILE_APPS.forEach(function(app){
      let source=null;
      try{ source=storage?.getProfile?.(app); }catch(_error){}
      const activeSource=app===APP&&progression?progression:(source&&source.progression?source.progression:source);
      const p=normaliseJigsawProgress(activeSource);
      highestLevel=Math.max(highestLevel,p.level);
      totalCompletions+=p.completions;
      combinedScore+=(Math.max(0,p.level-1)*0.08)+(Math.min(20,p.completions)*0.02);
    });
    const pct=Math.min(5,Math.round(combinedScore*10)/10);
    const traits=[];
    if(totalCompletions>=10) traits.push('Jigsaws: Patient Assembly');
    if(totalCompletions>=30) traits.push('Jigsaws: Sustained Reconstruction');
    return {
      level:highestLevel,
      completions:totalCompletions,
      passiveEfficiencyMult:1+(pct/100),
      passivePct:pct,
      unlockedTraits:traits
    };
  }

  function notifyJigsawProgress(){
    const detail={
      app:APP,
      puzzleId:String(activePuzzle&&activePuzzle.id||''),
      profile:progression?JSON.parse(JSON.stringify(progression)):defaultJigsawProgress(),
      contribution:jigsawRealmContribution()
    };
    try{document.dispatchEvent(new CustomEvent('baseline:jigsaw-progress',{detail:detail}));}catch(_error){}
    try{globalThis.BaselineRealmHost?.resolveBonuses?.();}catch(_error){}
  }

  function allJigsawProgress(){
    const storage=gameStorage();
    const items=(registry?.jigsaws||[]).map(function(item){
      let source=null;
      try{ source=storage?.getProfile?.(item.app); }catch(_error){}
      const current=item.app===APP&&progression ? progression : (source&&source.progression?source.progression:source);
      const profile=normaliseJigsawProgress(current);
      return {
        id:String(item.id||''),
        app:String(item.app||''),
        title:String(item.title||'Jigsaw'),
        profile:profile
      };
    });
    return {
      items:items,
      completed:items.filter(function(item){return item.profile.completions>0;}),
      totalCompletions:items.reduce(function(sum,item){return sum+item.profile.completions;},0),
      totalXpEarned:items.reduce(function(sum,item){return sum+item.profile.totalXpEarned;},0),
      totalPiecesCompleted:items.reduce(function(sum,item){return sum+item.profile.totalPiecesCompleted;},0)
    };
  }

  function renderJigsawLiveXp(){
    if(!refs.liveXp) return;
    if(!progression) progression=defaultJigsawProgress();
    const needed=jigsawXpNeeded(progression.level);
    const pct=Math.min(100,(progression.xp/Math.max(1,needed))*100);
    refs.liveXp.innerHTML=
      '<strong>Player Rank '+progression.level+'</strong>' +
      '<div class="game-live-xp__bar" role="progressbar" aria-valuemin="0" aria-valuemax="'+needed+'" aria-valuenow="'+progression.xp+'" aria-label="'+escapeHtml(activePuzzle.title||'Jigsaw')+' experience"><span style="width:'+pct+'%"></span></div>' +
      '<span>'+progression.xp+' / '+needed+' XP</span>';
  }

  function renderJigsawProgress(){
    if(!refs.progress) return;
    if(!progression) progression=defaultJigsawProgress();
    progression.realmPassivePct=jigsawRealmPassivePct(progression);

    const needed=jigsawXpNeeded(progression.level);
    const pct=Math.min(100,(progression.xp/Math.max(1,needed))*100);
    const remaining=Math.max(0,needed-progression.xp);
    const difficulty=state?state.difficulty:selectedDifficulty;
    const best=progression.bestTimes[String(difficulty)];
    const aggregate=allJigsawProgress();
    const completedHtml=aggregate.completed.length
      ? aggregate.completed.map(function(item){
          const count=item.profile.completions;
          return '<div class="jigsaw-completed-row"><span class="jigsaw-completed-tick" aria-hidden="true">✓</span><span>'+escapeHtml(item.title)+'</span>'+(count>1?'<strong>'+count+'</strong>':'')+'</div>';
        }).join('')
      : '<div class="jigsaw-completed-empty">No Jigsaw has been completed yet.</div>';

    refs.progress.innerHTML=
      '<section class="coherent-progress-overview">' +
        '<div class="coherent-progress-heading"><div><span class="coherent-progress-kicker">'+escapeHtml(activePuzzle.title||'Jigsaw')+'</span><strong>Player Rank '+progression.level+'</strong></div><div class="coherent-progress-next">'+remaining+' XP to Player Rank '+(progression.level+1)+'</div></div>' +
        '<div class="coherent-progress-xp-meta"><span>'+progression.xp+' / '+needed+' XP</span><span>'+Math.round(pct)+'%</span></div>' +
        '<div class="coherent-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="'+needed+'" aria-valuenow="'+progression.xp+'"><span style="width:'+pct+'%"></span></div>' +
      '</section>' +
      '<div class="coherent-progress-grid">' +
        '<div class="coherent-progress-stat"><span>This artwork completed</span><strong>'+progression.completions+'</strong></div>' +
        '<div class="coherent-progress-stat"><span>Total Jigsaw completions</span><strong>'+aggregate.totalCompletions+'</strong></div>' +
        '<div class="coherent-progress-stat"><span>Total Jigsaw XP earned</span><strong>'+aggregate.totalXpEarned.toLocaleString('en-GB')+'</strong></div>' +
        '<div class="coherent-progress-stat"><span>Total pieces completed</span><strong>'+aggregate.totalPiecesCompleted.toLocaleString('en-GB')+'</strong></div>' +
        '<div class="coherent-progress-stat"><span>'+difficulty.toLocaleString('en-GB')+'-piece completion reward</span><strong>+'+currentJigsawReward()+' XP</strong></div>' +
        '<div class="coherent-progress-stat"><span>Best '+difficulty.toLocaleString('en-GB')+'-piece time</span><strong>'+(best?formatTime(best):'—')+'</strong></div>' +
        '<div class="coherent-progress-stat"><span>Combined Jigsaw Realm passive</span><strong>+'+jigsawRealmContribution().passivePct.toFixed(1)+'%</strong></div>' +
      '</div>' +
      '<details class="jigsaw-completed-details">' +
        '<summary><span>Completed Jigsaws</span><span class="jigsaw-completed-summary-count">'+aggregate.completed.length+' / '+aggregate.items.length+'</span></summary>' +
        '<div class="jigsaw-completed-list">'+completedHtml+'</div>' +
      '</details>' +
      '<p class="jigsaw-progress-note">Jigsaws progress through completion XP only. Piece count changes difficulty; it does not unlock a tier or a Jigsaw skill tree.</p>';

    renderJigsawLiveXp();
  }

  function writeJigsawPanelRoute(){
    try{
      const url=new URL(window.location.href);
      if(activeJigsawPanel==='progress') url.searchParams.set('jigsaw-panel','progress');
      else url.searchParams.delete('jigsaw-panel');
      const next=url.pathname+(url.searchParams.toString()?'?'+url.searchParams.toString():'')+url.hash;
      window.history.replaceState(Object.assign({},window.history.state||{},{jigsawPanel:activeJigsawPanel}),'',next);
    }catch(_error){}
  }

  function setJigsawPanel(panel,writeRoute){
    const next=panel==='progress'?'progress':'game';
    activeJigsawPanel=next;
    root.classList.toggle('is-progress-panel',next==='progress');
    if(refs.progressPanel) refs.progressPanel.hidden=next!=='progress';
    if(refs.liveXp) refs.liveXp.hidden=next!=='game';
    refs.tabButtons.forEach(function(button){
      const active=button.getAttribute('data-jigsaw-panel')===next;
      button.classList.toggle('is-active',active);
      button.setAttribute('aria-expanded',String(active));
    });
    if(next==='progress'){
      closeSettings();
      if(refs.helpDialog?.open) refs.helpDialog.close();
      renderJigsawProgress();
    }else{
      renderJigsawLiveXp();
    }
    if(writeRoute) writeJigsawPanelRoute();
  }

  globalThis.BaselineJigsawProgress=Object.freeze({
    getProfile:function(){return progression?JSON.parse(JSON.stringify(progression)):defaultJigsawProgress();},
    getRealmContribution:function(){return jigsawRealmContribution();},
    getActiveApp:function(){return APP;}
  });

  function syncPuzzlePresentation(){
    BOARD_WIDTH=Math.max(1,Number(activePuzzle.width)||1122);
    BOARD_HEIGHT=Math.max(1,Number(activePuzzle.height)||1402);
    APP=String(activePuzzle.app||'weightcoherence');
    root.dataset.jigsawId=String(activePuzzle.id||'');
    const artworkOrientation=BOARD_WIDTH>BOARD_HEIGHT?'landscape':'portrait';
    root.dataset.jigsawOrientation=artworkOrientation;
    refs.workspace.classList.toggle('is-artwork-landscape',artworkOrientation==='landscape');
    refs.workspace.classList.toggle('is-artwork-portrait',artworkOrientation==='portrait');
    root.style.setProperty('--weight-coherence-aspect',BOARD_WIDTH+' / '+BOARD_HEIGHT);
    if(refs.introArt){
      refs.introArt.src=activePuzzle.image;
      refs.introArt.alt=activePuzzle.alt||activePuzzle.title||'Jigsaw artwork';
    }
    if(refs.title) refs.title.textContent=activePuzzle.title||'Jigsaw';
    if(refs.description) refs.description.textContent=activePuzzle.description||'';
    refs.board.setAttribute('aria-label',(activePuzzle.title||'Selected artwork')+' jigsaw board');
    if(refs.board.width!==BOARD_WIDTH) refs.board.width=BOARD_WIDTH;
    if(refs.board.height!==BOARD_HEIGHT) refs.board.height=BOARD_HEIGHT;
    if(placedCanvas.width!==BOARD_WIDTH) placedCanvas.width=BOARD_WIDTH;
    if(placedCanvas.height!==BOARD_HEIGHT) placedCanvas.height=BOARD_HEIGHT;
  }

  setJigsawPanel(activeJigsawPanel,false);

  function configurePuzzle(puzzle, saveCurrent){
    if(!puzzle || !puzzle.image || !puzzle.app) return false;
    if(saveCurrent && state) saveState();
    window.clearInterval(timerHandle);
    activePuzzle=puzzle;
    imageReady=false;
    syncPuzzlePresentation();
    loadJigsawProgress();
    resetToUnstoredState();
    image.src=activePuzzle.image;
    if(!restoreState()) renderTray();
    renderJigsawProgress();
    setJigsawPanel(activeJigsawPanel,false);
    notifyJigsawProgress();
    scheduleFullscreenBoardFit();
    return true;
  }

  function difficultyConfig(value){
    const config=DIFFICULTIES[Number(value)] || DIFFICULTIES[100];
    if(BOARD_WIDTH>BOARD_HEIGHT && config.cols!==config.rows){
      return { pieces:config.pieces, cols:config.rows, rows:config.cols, trayPageSize:config.trayPageSize };
    }
    return config;
  }

  function mobileLike(){
    try{
      return window.innerWidth <= 760 || !!window.matchMedia?.('(pointer: coarse)').matches;
    }catch(_error){
      return window.innerWidth <= 760;
    }
  }

  function desktopFullscreenTrayCapacity(config){
    if(!refs.trayShell || !refs.tray || mobileLike() || !fullscreenActive()) return config.trayPageSize;
    const shellRect=refs.trayShell.getBoundingClientRect();
    const head=refs.trayMeta?.closest?.('.weight-coherence-tray-head');
    const headHeight=head ? head.getBoundingClientRect().height : 0;
    const shellStyle=window.getComputedStyle(refs.trayShell);
    const paddingTop=parseFloat(shellStyle.paddingTop||'0')||0;
    const paddingBottom=parseFloat(shellStyle.paddingBottom||'0')||0;
    const gap=parseFloat(shellStyle.rowGap||shellStyle.gap||'0')||0;
    const available=Math.max(0,shellRect.height-paddingTop-paddingBottom-headHeight-gap);
    if(available<120) return Math.min(config.trayPageSize,18);
    const columns=3;
    const rowHeight=72;
    const rowGap=8;
    const rows=Math.max(1,Math.floor((available+rowGap)/(rowHeight+rowGap)));
    return Math.max(columns,Math.min(config.trayPageSize,rows*columns));
  }

  function trayPageSize(config){
    if(mobileLike()) return Math.min(config.trayPageSize, 8);
    if(fullscreenActive()) return desktopFullscreenTrayCapacity(config);
    return config.trayPageSize;
  }

  function formatTime(totalSeconds){
    const seconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return h > 0
      ? String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0')
      : String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  }

  function seededNoise(a,b,c){
    let x = ((a + 1) * 73856093) ^ ((b + 1) * 19349663) ^ ((c + 1) * 83492791);
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    return (x >>> 0) / 4294967295;
  }

  function internalEdge(row,col,axis){
    return seededNoise(row,col,axis === 'v' ? 1 : 2) >= 0.5 ? 1 : -1;
  }

  function pieceEdges(row,col,config){
    return {
      top: row === 0 ? 0 : -internalEdge(row - 1, col, 'h'),
      right: col === config.cols - 1 ? 0 : internalEdge(row, col, 'v'),
      bottom: row === config.rows - 1 ? 0 : internalEdge(row, col, 'h'),
      left: col === 0 ? 0 : -internalEdge(row, col - 1, 'v')
    };
  }

  function pieceGeometry(id, config){
    const row = Math.floor(id / config.cols);
    const col = id % config.cols;
    const w = BOARD_WIDTH / config.cols;
    const h = BOARD_HEIGHT / config.rows;
    const tab = Math.min(w,h) * 0.22;
    return { id:id, row:row, col:col, x:col*w, y:row*h, w:w, h:h, tab:tab, edges:pieceEdges(row,col,config) };
  }

  function tracePiecePath(target, g){
    const w=g.w, h=g.h, t=g.tab, e=g.edges;
    target.beginPath();
    target.moveTo(0,0);

    target.lineTo(w*0.34,0);
    if(e.top){
      target.bezierCurveTo(w*0.39,0,w*0.40,-e.top*t,w*0.50,-e.top*t);
      target.bezierCurveTo(w*0.60,-e.top*t,w*0.61,0,w*0.66,0);
    }
    target.lineTo(w,0);

    target.lineTo(w,h*0.34);
    if(e.right){
      target.bezierCurveTo(w,h*0.39,w+e.right*t,h*0.40,w+e.right*t,h*0.50);
      target.bezierCurveTo(w+e.right*t,h*0.60,w,h*0.61,w,h*0.66);
    }
    target.lineTo(w,h);

    target.lineTo(w*0.66,h);
    if(e.bottom){
      target.bezierCurveTo(w*0.61,h,w*0.60,h+e.bottom*t,w*0.50,h+e.bottom*t);
      target.bezierCurveTo(w*0.40,h+e.bottom*t,w*0.39,h,w*0.34,h);
    }
    target.lineTo(0,h);

    target.lineTo(0,h*0.66);
    if(e.left){
      target.bezierCurveTo(0,h*0.61,-e.left*t,h*0.60,-e.left*t,h*0.50);
      target.bezierCurveTo(-e.left*t,h*0.40,0,h*0.39,0,h*0.34);
    }
    target.lineTo(0,0);
    target.closePath();
  }

  function drawArtworkRegion(targetCtx,g,padding){
    if(!imageReady || !image.naturalWidth || !image.naturalHeight) return;
    const pad=Math.max(0,Number(padding)||0);
    const left=Math.max(0,g.x-pad);
    const top=Math.max(0,g.y-pad);
    const right=Math.min(BOARD_WIDTH,g.x+g.w+pad);
    const bottom=Math.min(BOARD_HEIGHT,g.y+g.h+pad);
    const width=Math.max(1,right-left);
    const height=Math.max(1,bottom-top);
    const sx=image.naturalWidth/BOARD_WIDTH;
    const sy=image.naturalHeight/BOARD_HEIGHT;
    targetCtx.drawImage(
      image,
      left*sx,top*sy,width*sx,height*sy,
      left-g.x,top-g.y,width,height
    );
  }

  function drawPieceToBoard(targetCtx, id){
    if(!state || !imageReady) return;
    const config = difficultyConfig(state.difficulty);
    const g = pieceGeometry(id, config);
    targetCtx.save();
    targetCtx.translate(g.x,g.y);
    tracePiecePath(targetCtx,g);
    targetCtx.clip();
    drawArtworkRegion(targetCtx,g,g.tab+2);
    targetCtx.restore();

    targetCtx.save();
    targetCtx.translate(g.x,g.y);
    tracePiecePath(targetCtx,g);
    targetCtx.strokeStyle=recreationRgba('--recreation-burgundy-rgb','58,16,34',.48);
    targetCtx.lineWidth=Math.max(0.7,Math.min(1.5,g.tab*0.15));
    targetCtx.stroke();
    targetCtx.restore();
  }

  function rebuildPlacedCanvas(){
    placedCtx.clearRect(0,0,BOARD_WIDTH,BOARD_HEIGHT);
    if(!state || !imageReady) return;
    state.placed.forEach(function(id){ drawPieceToBoard(placedCtx,id); });
  }

  function drawBoard(){
    ctx.clearRect(0,0,BOARD_WIDTH,BOARD_HEIGHT);

    if(imageReady && viewOn){
      ctx.fillStyle='#FFFFFF';
      ctx.fillRect(0,0,BOARD_WIDTH,BOARD_HEIGHT);
      ctx.drawImage(image,0,0,BOARD_WIDTH,BOARD_HEIGHT);
      return;
    }

    const guideOn=!!(state && state.preview);
    ctx.fillStyle=guideOn?'#FFFFFF':BOARD_BASE;
    ctx.fillRect(0,0,BOARD_WIDTH,BOARD_HEIGHT);

    if(imageReady && guideOn){
      ctx.save();
      ctx.globalAlpha=GUIDE_OPACITY;
      ctx.drawImage(image,0,0,BOARD_WIDTH,BOARD_HEIGHT);
      ctx.restore();
    }

    if(state){
      const config=difficultyConfig(state.difficulty);
      ctx.save();
      ctx.strokeStyle=guideOn?recreationRgba('--recreation-burgundy-rgb','58,16,34',.18):recreationRgba('--recreation-ink-rgb','255,244,239',.10);
      ctx.lineWidth=0.65;
      const cw=BOARD_WIDTH/config.cols, ch=BOARD_HEIGHT/config.rows;
      for(let c=1;c<config.cols;c++){ ctx.beginPath(); ctx.moveTo(c*cw,0); ctx.lineTo(c*cw,BOARD_HEIGHT); ctx.stroke(); }
      for(let r=1;r<config.rows;r++){ ctx.beginPath(); ctx.moveTo(0,r*ch); ctx.lineTo(BOARD_WIDTH,r*ch); ctx.stroke(); }
      ctx.restore();
    }

    ctx.drawImage(placedCanvas,0,0,BOARD_WIDTH,BOARD_HEIGHT);
  }

  function createPieceCanvas(id){
    if(!state || !imageReady) return document.createElement('canvas');
    const config=difficultyConfig(state.difficulty);
    const g=pieceGeometry(id,config);
    const margin=g.tab+2;
    const baseMax=Math.max(g.w+margin*2,g.h+margin*2);
    const targetMax=mobileLike()?72:86;
    const scale=Math.max(0.65,Math.min(3.2,targetMax/baseMax));
    const canvas=document.createElement('canvas');
    canvas.width=Math.max(24,Math.ceil((g.w+margin*2)*scale));
    canvas.height=Math.max(24,Math.ceil((g.h+margin*2)*scale));
    const c=canvas.getContext('2d');
    c.save();
    c.scale(scale,scale);
    c.translate(margin,margin);
    tracePiecePath(c,g);
    c.clip();
    drawArtworkRegion(c,g,margin);
    c.restore();

    c.save();
    c.scale(scale,scale);
    c.translate(margin,margin);
    tracePiecePath(c,g);
    c.strokeStyle=recreationRgba('--recreation-ink-rgb','255,244,239',.72);
    c.lineWidth=Math.max(0.8,1.2/scale);
    c.stroke();
    c.restore();
    canvas.className='weight-coherence-piece-canvas';
    return canvas;
  }

  function shuffledIds(count){
    const ids=Array.from({length:count},(_,i)=>i);
    for(let i=ids.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      const temp=ids[i]; ids[i]=ids[j]; ids[j]=temp;
    }
    return ids;
  }

  function sortedPieceSet(){
    const result=new Set();
    if(!state || !Array.isArray(state.sortBins)) return result;
    state.sortBins.forEach(function(bin){
      if(Array.isArray(bin)) bin.forEach(function(id){ result.add(id); });
    });
    return result;
  }

  function normalizeSortBins(raw,count,placed){
    const bins=[[],[],[],[]];
    const seen=new Set(placed || []);
    if(!Array.isArray(raw)) return bins;
    raw.slice(0,4).forEach(function(bin,index){
      if(!Array.isArray(bin)) return;
      bin.forEach(function(value){
        const id=Number(value);
        if(!Number.isInteger(id) || id<0 || id>=count || seen.has(id)) return;
        seen.add(id);
        bins[index].push(id);
      });
    });
    return bins;
  }

  function unplacedIds(){
    if(!state) return [];
    const parked=sortedPieceSet();
    return state.order.filter(function(id){ return !state.placed.has(id) && !parked.has(id); });
  }

  function syncSelectedPieceClasses(){
    root.querySelectorAll('[data-piece-id]').forEach(function(button){
      const id=Number(button.dataset.pieceId);
      button.classList.toggle('is-selected',id===selectedPieceId);
      button.classList.toggle('is-return-highlight',id===returnHighlightPieceId);
      button.setAttribute('aria-disabled',String(viewOn));
    });
  }

  function sortRenderKey(){
    if(!state || !state.started || !imageReady) return 'empty:' + String(!!state) + ':' + String(imageReady);
    return String(activePuzzle.id||'') + ':' + state.difficulty + ':' + state.sortBins.map(function(bin){ return bin.join(','); }).join('|');
  }

  function renderSortTrays(force){
    if(!refs.sortTrays.length) return;
    const key=sortRenderKey();
    if(!force && key===lastSortRenderKey){
      syncSelectedPieceClasses();
      return;
    }
    lastSortRenderKey=key;
    ++sortRenderToken;
    refs.sortTrays.forEach(function(tray,index){
      const fragment=document.createDocumentFragment();
      const ids=state && Array.isArray(state.sortBins?.[index]) ? state.sortBins[index] : [];
      const count=refs.sortCounts.find(function(node){ return Number(node.dataset.sortCount)===index; });
      if(count) count.textContent=String(ids.length);
      if(state && state.started && imageReady){
        ids.forEach(function(id){
          if(state.placed.has(id)) return;
          const btn=document.createElement('button');
          btn.type='button';
          btn.className='weight-coherence-piece';
          btn.dataset.pieceId=String(id);
          btn.dataset.pieceSource='sort-' + index;
          btn.setAttribute('aria-label','Jigsaw piece ' + (id+1) + ' in Sort ' + (index+1));
          if(selectedPieceId===id) btn.classList.add('is-selected');
          if(returnHighlightPieceId===id) btn.classList.add('is-return-highlight');
          btn.setAttribute('aria-disabled',String(viewOn));
          btn.appendChild(createPieceCanvas(id));
          fragment.appendChild(btn);
        });
      }
      tray.replaceChildren(fragment);
    });
  }

  function stabilisePieceFocus(){
    const active=document.activeElement;
    if(!active || !active.closest || !active.closest('[data-piece-id]') || !root.contains(active)) return;
    try{
      refs.board.focus({preventScroll:true});
    }catch(_error){
      if(typeof active.blur==='function') active.blur();
    }
  }

  function renderTray(){
    if(!refs.tray) return;
    stabilisePieceFocus();
    if(zoomTarget && zoomTarget!==refs.boardWrap) resetZoom();
    renderSortTrays();
    if(!state || !state.started){
      lastTrayRenderKey='';
      refs.tray.replaceChildren();
      refs.trayMeta.textContent='Choose a piece count and start the puzzle.';
      refs.prev.disabled=true;
      refs.next.disabled=true;
      return;
    }
    if(!imageReady){
      lastTrayRenderKey='';
      refs.tray.replaceChildren();
      refs.trayMeta.textContent='Loading artwork…';
      return;
    }
    const config=difficultyConfig(state.difficulty);
    const pageSize=trayPageSize(config);
    const ids=unplacedIds();
    const pageCount=Math.max(1,Math.ceil(ids.length/pageSize));
    state.page=Math.max(0,Math.min(state.page,pageCount-1));
    const start=state.page*pageSize;
    const pageIds=ids.slice(start,start+pageSize);
    const parkedCount=state.sortBins.reduce(function(total,bin){ return total + bin.length; },0);
    const totalRemaining=Math.max(0,state.difficulty-state.placed.size);
    refs.trayMeta.textContent=ids.length
      ? 'Main tray ' + (state.page+1) + ' of ' + pageCount + ' · ' + ids.length.toLocaleString('en-GB') + ' unsorted · ' + parkedCount.toLocaleString('en-GB') + ' parked'
      : (totalRemaining ? 'Main tray empty · ' + parkedCount.toLocaleString('en-GB') + ' parked' : 'All pieces placed');
    refs.prev.disabled=state.page<=0;
    refs.next.disabled=state.page>=pageCount-1;

    const trayKey=[
      String(activePuzzle.id||''),
      state.difficulty,
      state.page,
      pageSize,
      mobileLike()?'mobile':'desktop',
      pageIds.join(',')
    ].join('|');
    if(trayKey===lastTrayRenderKey){
      syncSelectedPieceClasses();
      return;
    }
    lastTrayRenderKey=trayKey;
    ++trayRenderToken;
    const fragment=document.createDocumentFragment();
    pageIds.forEach(function(id){
      const btn=document.createElement('button');
      btn.type='button';
      btn.className='weight-coherence-piece';
      btn.dataset.pieceId=String(id);
      btn.setAttribute('aria-label','Jigsaw piece ' + (id+1));
      if(selectedPieceId===id) btn.classList.add('is-selected');
      if(returnHighlightPieceId===id) btn.classList.add('is-return-highlight');
      btn.setAttribute('aria-disabled',String(viewOn));
      btn.appendChild(createPieceCanvas(id));
      fragment.appendChild(btn);
    });
    refs.tray.replaceChildren(fragment);
  }

  function setStatus(message,tone){
    refs.status.textContent=message || '';
    refs.status.dataset.tone=tone || '';
  }

  function elapsedSeconds(){
    if(!state) return 0;
    if(!state.started || state.completed) return state.elapsed || 0;
    return (state.elapsed || 0) + Math.max(0,Math.floor((Date.now()-state.startedAt)/1000));
  }

  function updateStats(){
    if(!state){
      refs.placed.textContent='0 / ' + selectedDifficulty;
      refs.timer.textContent='00:00';
      refs.difficultyLabel.textContent=selectedDifficulty + ' pieces';
      return;
    }
    refs.placed.textContent=state.placed.size.toLocaleString('en-GB') + ' / ' + state.difficulty.toLocaleString('en-GB');
    refs.timer.textContent=formatTime(elapsedSeconds());
    refs.difficultyLabel.textContent=state.difficulty.toLocaleString('en-GB') + ' pieces';
  }

  function startTimer(){
    window.clearInterval(timerHandle);
    timerHandle=window.setInterval(function(){ updateStats(); },1000);
  }

  function serialiseState(){
    if(!state) return null;
    return {
      version:3,
      difficulty:state.difficulty,
      placed:Array.from(state.placed),
      order:state.order.slice(),
      sortBins:state.sortBins.map(function(bin){ return bin.slice(); }),
      page:state.page,
      preview:state.preview,
      started:state.started,
      completed:state.completed,
      elapsed:elapsedSeconds(),
      progression:progression?JSON.parse(JSON.stringify(progression)):defaultJigsawProgress(),
      savedAt:Date.now()
    };
  }

  function gameStorage(){
    const storage=window.BaselineGameStorage;
    return storage&&typeof storage.getProfile==='function'?storage:null;
  }

  function recreationSettingsProfile(){
    try{
      const profile=gameStorage()?.getProfile?.('hubsettings');
      return profile&&typeof profile==='object' ? profile : {};
    }catch(_error){ return {}; }
  }
  function storedJigsawZoom(){
    const profile=recreationSettingsProfile();
    return Math.max(PIECE_ZOOM_DEFAULT,Math.min(PIECE_ZOOM_MAX,Number(profile.jigsawZoom)||PIECE_ZOOM_DEFAULT));
  }
  function hydrateJigsawZoom(){
    zoomLevel=storedJigsawZoom();
    syncZoomControls();
  }
  function saveJigsawZoom(){
    const storage=gameStorage();
    if(!storage) return false;
    const profile=Object.assign({},recreationSettingsProfile(),{jigsawZoom:zoomLevel});
    try{ storage.setTemporaryProfile?.('hubsettings',profile); }catch(_error){}
    try{ storage.saveProfile?.('hubsettings',profile,{immediate:true,keepalive:false}); }catch(_error){}
    return true;
  }

  function saveState(){
    const payload=serialiseState();
    const storage=gameStorage();
    if(!payload||!storage) return false;
    storage.setTemporaryProfile?.(APP,payload);
    storage.saveProfile?.(APP,payload,{immediate:true,keepalive:true});
    return true;
  }

  function restoreState(){
    try{
      const parsed=gameStorage()?.getProfile?.(APP);
      if(!parsed||typeof parsed!=='object') return false;
      progression=normaliseJigsawProgress(parsed.progression||parsed);
      const config=difficultyConfig(parsed.difficulty);
      const count=config.pieces;
      const placed=new Set((Array.isArray(parsed.placed)?parsed.placed:[]).map(Number).filter(function(id){ return Number.isInteger(id)&&id>=0&&id<count; }));
      const order=Array.isArray(parsed.order) && parsed.order.length===count ? parsed.order.map(Number) : shuffledIds(count);
      const sortBins=normalizeSortBins(parsed.sortBins,count,placed);
      state={
        difficulty:count,
        placed:placed,
        order:order,
        sortBins:sortBins,
        page:Math.max(0,Number(parsed.page)||0),
        preview:!!parsed.preview,
        started:parsed.started!==false,
        completed:!!parsed.completed || placed.size===count,
        elapsed:Math.max(0,Number(parsed.elapsed)||0),
        startedAt:Date.now()
      };
      selectedDifficulty=count;
      refs.workspace.hidden=false;
      syncDifficultyButtons();
      refs.preview.setAttribute('aria-pressed',String(state.preview));
      syncGuideButton();
      if(refs.reset) refs.reset.disabled=false;
      setStatus(state.completed?'Puzzle complete.':'Saved puzzle resumed.',state.completed?'success':'');
      renderCompletion();
      rebuildPlacedCanvas();
      drawBoard();
      renderTray();
      updateStats();
      renderJigsawProgress();
      notifyJigsawProgress();
      startTimer();
      return true;
    }catch(_error){ return false; }
  }

  function resetToUnstoredState(){
    resetZoom();
    viewOn=false;
    syncViewButton();
    syncViewInteractionState();
    state=null;
    selectedPieceId=null;
    returnHighlightPieceId=null;
    dragState=null;
    selectedDifficulty=100;
    refs.workspace.hidden=false;
    refs.completion.hidden=true;
    refs.preview.setAttribute('aria-pressed','false');
    syncGuideButton();
    if(refs.reset) refs.reset.disabled=true;
    syncDifficultyButtons();
    updateStats();
    placedCtx.clearRect(0,0,BOARD_WIDTH,BOARD_HEIGHT);
    drawBoard();
    renderTray();
    setStatus('Choose a piece count. A new jigsaw starts automatically and saved progress resumes automatically.','');
    renderJigsawProgress();
  }

  function syncDifficultyButtons(){
    refs.difficultyButtons.forEach(function(button){
      const active=Number(button.dataset.jigsawDifficulty)===selectedDifficulty;
      button.classList.toggle('is-active',active);
      button.setAttribute('aria-checked',String(active));
    });
    if(refs.selectionLabel) refs.selectionLabel.textContent=selectedDifficulty.toLocaleString('en-GB') + ' pieces selected';
  }

  function beginPuzzle(){
    root.classList.add('is-restarting');
    resetZoom();
    viewOn=false;
    syncViewButton();
    const config=difficultyConfig(selectedDifficulty);
    state={
      difficulty:config.pieces,
      placed:new Set(),
      order:shuffledIds(config.pieces),
      sortBins:[[],[],[],[]],
      page:0,
      preview:false,
      started:true,
      completed:false,
      elapsed:0,
      startedAt:Date.now()
    };
    selectedPieceId=null;
    returnHighlightPieceId=null;
    lastTrayRenderKey='';
    lastSortRenderKey='';
    refs.workspace.hidden=false;
    refs.preview.setAttribute('aria-pressed','false');
    syncViewInteractionState();
    syncGuideButton();
    refs.completion.hidden=true;
    if(refs.reset) refs.reset.disabled=false;
    placedCtx.clearRect(0,0,BOARD_WIDTH,BOARD_HEIGHT);
    setStatus('Puzzle started. Drag pieces onto the board or park them in the four sorting trays.','');
    drawBoard();
    renderTray();
    updateStats();
    renderJigsawProgress();
    saveState();
    startTimer();
    window.requestAnimationFrame(function(){
      window.requestAnimationFrame(function(){ root.classList.remove('is-restarting'); });
    });
  }

  function renderCompletion(){
    if(!state || !state.completed){ refs.completion.hidden=true; return; }
    refs.completion.hidden=false;
    const reward=progression&&progression.lastXpAward?progression.lastXpAward:0;
    refs.completion.innerHTML='<button type="button" class="weight-coherence-completion-close" aria-label="Close completion message">&times;</button><strong>' + (activePuzzle.title||'Jigsaw') + ' complete</strong><span>' + state.difficulty.toLocaleString('en-GB') + ' pieces · ' + formatTime(state.elapsed) + (reward?' · +'+reward+' XP':'') + '</span>';
  }

  refs.completion.addEventListener('click',function(event){
    const closeButton=event.target.closest('.weight-coherence-completion-close');
    if(!closeButton) return;
    refs.completion.hidden=true;
  });

  function completePuzzle(){
    if(!state || state.completed) return;
    state.elapsed=elapsedSeconds();
    state.startedAt=Date.now();
    state.completed=true;
    selectedPieceId=null;
    window.clearInterval(timerHandle);

    if(!progression) progression=defaultJigsawProgress();
    const reward=currentJigsawReward();
    progression.completions+=1;
    progression.totalPiecesCompleted+=state.difficulty;
    const bestKey=String(state.difficulty);
    const priorBest=Math.max(0,Number(progression.bestTimes[bestKey]||0));
    if(!priorBest||state.elapsed<priorBest) progression.bestTimes[bestKey]=Math.max(1,Math.round(state.elapsed));
    const levels=awardJigsawXp(reward);

    setStatus('Completed. Every piece is in place. +'+reward+' XP'+(levels?' · Player Rank up +'+levels:'')+'.','success');
    renderCompletion();
    renderTray();
    updateStats();
    renderJigsawProgress();
    saveState();
    notifyJigsawProgress();
  }

  function removePieceFromSortBins(id){
    if(!state || !Array.isArray(state.sortBins)) return false;
    let removed=false;
    state.sortBins.forEach(function(bin){
      const index=bin.indexOf(id);
      if(index>=0){
        bin.splice(index,1);
        removed=true;
      }
    });
    return removed;
  }

  function movePieceToSortBin(id,binIndex){
    if(!state || state.completed || state.placed.has(id)) return;
    const index=Math.max(0,Math.min(3,Number(binIndex)||0));
    if(returnHighlightPieceId===id) returnHighlightPieceId=null;
    removePieceFromSortBins(id);
    state.sortBins[index].push(id);
    selectedPieceId=null;
    renderTray();
    saveState();
    setStatus('Piece parked in Sort ' + (index+1) + '.','');
  }

  function movePieceToMainTray(id){
    if(!state || state.completed || state.placed.has(id)) return;
    if(returnHighlightPieceId===id) returnHighlightPieceId=null;
    const removed=removePieceFromSortBins(id);
    if(!removed) return;
    state.order=[id].concat(state.order.filter(function(value){ return value!==id; }));
    state.page=0;
    selectedPieceId=null;
    renderTray();
    saveState();
    setStatus('Piece returned to the main tray.','');
  }

  function placePiece(id){
    if(!state || state.completed || state.placed.has(id)) return;
    if(returnHighlightPieceId===id) returnHighlightPieceId=null;
    removePieceFromSortBins(id);
    state.placed.add(id);
    drawPieceToBoard(placedCtx,id);
    selectedPieceId=null;
    drawBoard();
    renderTray();
    updateStats();
    setStatus('Piece placed.','success');
    if(state.placed.size>=state.difficulty) completePuzzle();
    else saveState();
  }

  function boardPointFromClient(clientX,clientY){
    const rect=refs.board.getBoundingClientRect();
    if(clientX<rect.left||clientX>rect.right||clientY<rect.top||clientY>rect.bottom) return null;
    return {
      x:(clientX-rect.left)*(BOARD_WIDTH/rect.width),
      y:(clientY-rect.top)*(BOARD_HEIGHT/rect.height)
    };
  }

  function pageScrollRoot(){
    const shell=document.querySelector('.bl-scroll');
    if(shell) return shell;
    return document.scrollingElement || document.documentElement || document.body || null;
  }

  function pageScrollSnapshot(){
    if(fullscreenActive()) return null;
    const scrollRoot=pageScrollRoot();
    const shell=scrollRoot && scrollRoot.classList?.contains('bl-scroll') ? scrollRoot : null;
    return {
      root:scrollRoot,
      rootX:shell ? Number(shell.scrollLeft)||0 : 0,
      rootY:shell ? Number(shell.scrollTop)||0 : 0,
      windowX:Number(window.scrollX ?? window.pageXOffset) || 0,
      windowY:Number(window.scrollY ?? window.pageYOffset) || 0
    };
  }

  function restorePageScroll(snapshot){
    if(!snapshot || fullscreenActive()) return;
    const restore=function(){
      if(fullscreenActive()) return;
      const scrollRoot=snapshot.root && snapshot.root.isConnected ? snapshot.root : pageScrollRoot();
      const isShell=!!(scrollRoot && scrollRoot.classList?.contains('bl-scroll'));
      if(isShell){
        const currentX=Number(scrollRoot.scrollLeft)||0;
        const currentY=Number(scrollRoot.scrollTop)||0;
        if(Math.abs(currentX-snapshot.rootX)>1 || Math.abs(currentY-snapshot.rootY)>1){
          if(typeof scrollRoot.scrollTo==='function') scrollRoot.scrollTo({left:snapshot.rootX,top:snapshot.rootY,behavior:'auto'});
          else{
            scrollRoot.scrollLeft=snapshot.rootX;
            scrollRoot.scrollTop=snapshot.rootY;
          }
        }
        return;
      }
      const currentX=Number(window.scrollX ?? window.pageXOffset) || 0;
      const currentY=Number(window.scrollY ?? window.pageYOffset) || 0;
      if(Math.abs(currentX-snapshot.windowX)>1 || Math.abs(currentY-snapshot.windowY)>1){
        window.scrollTo({left:snapshot.windowX,top:snapshot.windowY,behavior:'auto'});
      }
    };
    restore();
    window.setTimeout(restore,0);
    window.setTimeout(restore,60);
    window.setTimeout(restore,180);
    window.requestAnimationFrame(function(){
      restore();
      window.requestAnimationFrame(restore);
    });
  }

  let interactionScrollSnapshot=null;

  function isTextSelectionTarget(event){
    const target=event?.target;
    if(!target || typeof target.closest!=='function') return false;
    const copy=target.closest('.weight-coherence-copy');
    return !!(copy && root.contains(copy));
  }

  function isInteractionScrollTarget(event){
    const target=event?.target;
    if(!target || typeof target.closest!=='function' || isTextSelectionTarget(event)) return false;
    const interactive=target.closest('button,[role="button"],[data-piece-id],#weightCoherenceBoard,[data-jigsaw-sort-tray]');
    return !!(interactive && root.contains(interactive));
  }

  function captureInteractionScroll(event){
    if(isTextSelectionTarget(event)){
      interactionScrollSnapshot=null;
      return;
    }
    if(fullscreenActive() || !isInteractionScrollTarget(event)) return;
    interactionScrollSnapshot=pageScrollSnapshot();
    const snapshot=interactionScrollSnapshot;
    const control=event?.target?.closest?.('button,[role="button"]');
    if(control && root.contains(control) && typeof control.focus==='function'){
      try{ control.focus({preventScroll:true}); }catch(_error){}
    }
    if(snapshot) restorePageScroll(snapshot);
  }

  function settleInteractionScroll(event){
    if(isTextSelectionTarget(event)){
      interactionScrollSnapshot=null;
      return;
    }
    if(!interactionScrollSnapshot || fullscreenActive()) return;
    const snapshot=interactionScrollSnapshot;
    interactionScrollSnapshot=null;
    restorePageScroll(snapshot);
  }

  function attemptPlacement(id,clientX,clientY){
    if(!state || !Number.isInteger(id)) return false;
    const scrollSnapshot=pageScrollSnapshot();
    if(viewOn){
      setStatus('View is on. Press V to return to the puzzle before placing pieces.','warning');
      restorePageScroll(scrollSnapshot);
      return false;
    }
    if(state.preview){
      setStatus('Hide the guide [G] before placing a piece.','warning');
      restorePageScroll(scrollSnapshot);
      return false;
    }
    const point=boardPointFromClient(clientX,clientY);
    if(!point){
      setStatus('Move the piece onto the puzzle board.','warning');
      restorePageScroll(scrollSnapshot);
      return false;
    }
    const config=difficultyConfig(state.difficulty);
    const g=pieceGeometry(id,config);
    const centerX=g.x+g.w/2, centerY=g.y+g.h/2;
    const dx=Math.abs(point.x-centerX), dy=Math.abs(point.y-centerY);
    const snapX=Math.max(g.w*0.62,18), snapY=Math.max(g.h*0.62,18);
    if(dx<=snapX && dy<=snapY){
      placePiece(id);
      restorePageScroll(scrollSnapshot);
      return true;
    }
    returnHighlightPieceId=id;
    selectedPieceId=null;
    syncSelectedPieceClasses();
    setStatus('That piece belongs elsewhere. Its tray piece is highlighted so you can find it again.','warning');
    root.classList.remove('is-wrong-drop');
    void root.offsetWidth;
    root.classList.add('is-wrong-drop');
    restorePageScroll(scrollSnapshot);
    return false;
  }

  function makeDragGhost(pieceButton,event){
    const source=pieceButton.querySelector('canvas');
    const ghost=document.createElement('canvas');
    ghost.width=source.width;
    ghost.height=source.height;
    ghost.getContext('2d').drawImage(source,0,0);
    ghost.className='weight-coherence-drag-ghost';
    const rect=source.getBoundingClientRect();
    ghost.style.width=Math.max(44,rect.width)+'px';
    ghost.style.height=Math.max(44,rect.height)+'px';
    const fullscreenHost=document.fullscreenElement;
    const ghostHost=fullscreenHost && (fullscreenHost===refs.workspace || fullscreenHost.contains(refs.workspace))
      ? fullscreenHost
      : (pseudoFullscreen ? refs.workspace : document.body);
    ghostHost.appendChild(ghost);
    moveDragGhost(ghost,event.clientX,event.clientY);
    return ghost;
  }

  function moveDragGhost(ghost,x,y){
    ghost.style.left=x+'px';
    ghost.style.top=y+'px';
  }

  function endDrag(event){
    if(!dragState) return;
    const drag=dragState;
    dragState=null;
    window.removeEventListener('pointermove',onDragMove,true);
    window.removeEventListener('pointerup',endDrag,true);
    window.removeEventListener('pointercancel',cancelDrag,true);
    if(drag.ghost && drag.ghost.parentNode) drag.ghost.parentNode.removeChild(drag.ghost);
    if(drag.moved){
      suppressTrayClickUntil=Date.now()+250;
      stabilisePieceFocus();
      if(event && event.cancelable) event.preventDefault();
    }
    if(!event || !drag.moved) return;

    const target=document.elementFromPoint(event.clientX,event.clientY);
    const sortTarget=target?.closest?.('[data-jigsaw-sort-tray]');
    if(sortTarget && root.contains(sortTarget)){
      movePieceToSortBin(drag.id,Number(sortTarget.dataset.jigsawSortTray));
      return;
    }
    const mainTrayTarget=target?.closest?.('#weightCoherenceTray');
    if(mainTrayTarget && root.contains(mainTrayTarget)){
      movePieceToMainTray(drag.id);
      return;
    }
    attemptPlacement(drag.id,event.clientX,event.clientY);
  }

  function cancelDrag(){
    if(!dragState) return;
    const drag=dragState;
    dragState=null;
    window.removeEventListener('pointermove',onDragMove,true);
    window.removeEventListener('pointerup',endDrag,true);
    window.removeEventListener('pointercancel',cancelDrag,true);
    if(drag.ghost && drag.ghost.parentNode) drag.ghost.parentNode.removeChild(drag.ghost);
  }

  function onDragMove(event){
    if(!dragState) return;
    const dx=event.clientX-dragState.startX, dy=event.clientY-dragState.startY;
    if(!dragState.moved && Math.hypot(dx,dy)>5){
      dragState.moved=true;
      interactionScrollSnapshot=null;
      dragState.ghost=makeDragGhost(dragState.button,event);
    }
    if(dragState.ghost) moveDragGhost(dragState.ghost,event.clientX,event.clientY);
    if(dragState.moved) event.preventDefault();
  }

  refs.difficultyButtons.forEach(function(button){
    button.addEventListener('click',function(){
      const nextDifficulty=Number(button.dataset.jigsawDifficulty)||100;
      if(state && state.started && !state.completed && state.difficulty!==nextDifficulty){
        const replace=window.confirm('Start a new ' + nextDifficulty.toLocaleString('en-GB') + '-piece puzzle? Current progress will be cleared.');
        if(!replace) return;
      }
      selectedDifficulty=nextDifficulty;
      syncDifficultyButtons();
      updateStats();
      renderJigsawProgress();
      if(imageReady && (!state || state.difficulty!==selectedDifficulty || state.completed)) beginPuzzle();
    });
  });

  if(refs.start) refs.start.addEventListener('click',function(){
    if(state && state.started && !state.completed){
      const replace=window.confirm('Start a new ' + selectedDifficulty.toLocaleString('en-GB') + '-piece puzzle? Current progress will be cleared.');
      if(!replace) return;
    }
    beginPuzzle();
  });

  function syncGuideButton(){
    if(!refs.preview) return;
    const guideOn=!!(state && state.preview);
    refs.preview.setAttribute('aria-pressed',String(guideOn));
    refs.preview.setAttribute('aria-label',guideOn?'Hide guide (G)':'Show guide (G)');
    refs.preview.title=guideOn?'Hide guide · G':'Show guide · G';
  }

  function toggleGuide(){
    if(!state) return;
    state.preview=!state.preview;
    syncGuideButton();
    drawBoard();
    setStatus(state.preview?'Guide shown at 50% opacity. Press G again to return to the puzzle.':'Guide hidden. Continue placing pieces.','');
    saveState();
  }

  function syncViewButton(){
    if(!refs.view) return;
    refs.view.setAttribute('aria-pressed',String(viewOn));
    refs.view.setAttribute('aria-label',viewOn?'Disable full artwork view (V)':'View full artwork (V)');
    refs.view.title=viewOn?'Disable full artwork view · V':'View full artwork · V';
  }

  function syncViewInteractionState(){
    root.classList.toggle('is-viewing-artwork',viewOn);
    syncSelectedPieceClasses();
  }

  function toggleFullView(){
    if(!state || !imageReady) return;
    const next=!viewOn;
    if(next){
      const hadDrag=!!dragState;
      cancelDrag();
      selectedPieceId=null;
      if(hadDrag) suppressTrayClickUntil=Date.now()+350;
    }
    viewOn=next;
    syncViewButton();
    syncViewInteractionState();
    drawBoard();
    setStatus(viewOn
      ? 'View on: full-colour artwork shown. Piece movement is paused; zoom remains available. Press V to return.'
      : 'View off. Continue placing pieces.','');
  }

  function zoomableTargetFromNode(node){
    if(!node) return null;
    const piece=node.closest?.('[data-piece-id]');
    if(piece && root.contains(piece)) return piece;
    if(node===refs.board || refs.boardWrap?.contains?.(node)) return refs.boardWrap;
    return null;
  }

  function pointInsideBoard(clientX,clientY){
    if(!refs.boardWrap || !Number.isFinite(clientX) || !Number.isFinite(clientY)) return false;
    const rect=refs.boardWrap.getBoundingClientRect();
    return clientX>=rect.left && clientX<=rect.right && clientY>=rect.top && clientY<=rect.bottom;
  }

  function rememberZoomTarget(event){
    const target=zoomableTargetFromNode(event&&event.target);
    if(target){
      lastZoomTarget=target;
      if(Number.isFinite(event.clientX) && Number.isFinite(event.clientY)){
        lastZoomPoint={x:event.clientX,y:event.clientY};
      }
    }else if(boardLensActive && Number.isFinite(event?.clientX) && Number.isFinite(event?.clientY) && pointInsideBoard(event.clientX,event.clientY)){
      lastZoomTarget=refs.boardWrap;
      lastZoomPoint={x:event.clientX,y:event.clientY};
    }
    if(boardLensActive && Number.isFinite(event?.clientX) && Number.isFinite(event?.clientY)){
      updateBoardLens(event.clientX,event.clientY);
    }
  }

  function resolveZoomTarget(){
    if(lastZoomTarget && lastZoomTarget.isConnected) return lastZoomTarget;
    const focused=zoomableTargetFromNode(document.activeElement);
    if(focused) return focused;
    return refs.boardWrap;
  }

  function clearZoomTargetStyles(target){
    if(!target) return;
    target.classList?.remove('is-zoom-target');
  }

  function ensureBoardLens(){
    if(boardLens && boardLens.isConnected) return boardLens;
    boardLens=document.createElement('canvas');
    boardLens.className='weight-coherence-board-lens';
    boardLens.setAttribute('aria-hidden','true');
    boardLens.hidden=true;
    refs.workspace.appendChild(boardLens);
    return boardLens;
  }

  function ensurePieceOverlay(){
    if(pieceOverlay && pieceOverlay.isConnected) return pieceOverlay;
    pieceOverlay=document.createElement('canvas');
    pieceOverlay.className='weight-coherence-piece-overlay';
    pieceOverlay.setAttribute('aria-hidden','true');
    pieceOverlay.hidden=true;
    refs.workspace.appendChild(pieceOverlay);
    return pieceOverlay;
  }

  function positionPieceOverlay(overlay,sourceRect,width,height){
    const viewport=viewportSize();
    const margin=10;
    const sourceCenterX=sourceRect.left+(sourceRect.width/2);
    const sourceCenterY=sourceRect.top+(sourceRect.height/2);
    const maxLeft=Math.max(margin,viewport.width-width-margin);
    const maxTop=Math.max(margin,viewport.height-height-margin);
    const left=Math.max(margin,Math.min(maxLeft,sourceCenterX-(width/2)));
    const top=Math.max(margin,Math.min(maxTop,sourceCenterY-(height/2)));
    overlay.style.left=left+'px';
    overlay.style.top=top+'px';
  }

  function updatePieceOverlay(target){
    if(!target || target!==zoomTarget || zoomScale<=ZOOM_MIN || !state || !imageReady) return;
    const source=target.querySelector?.('.weight-coherence-piece-canvas');
    const id=Number(target.dataset.pieceId);
    if(!source || !Number.isInteger(id)) return;
    const sourceRect=source.getBoundingClientRect();
    if(sourceRect.width<=0 || sourceRect.height<=0) return;

    const viewport=viewportSize();
    const edgeMargin=20;
    const requestedWidth=sourceRect.width*zoomScale;
    const requestedHeight=sourceRect.height*zoomScale;
    const fitScale=Math.min(
      1,
      Math.max(0.1,(viewport.width-edgeMargin)/Math.max(1,requestedWidth)),
      Math.max(0.1,(viewport.height-edgeMargin)/Math.max(1,requestedHeight))
    );
    const displayWidth=Math.max(sourceRect.width,requestedWidth*fitScale);
    const displayHeight=Math.max(sourceRect.height,requestedHeight*fitScale);
    const overlay=ensurePieceOverlay();
    const dpr=Math.max(1,Math.min(2,Number(window.devicePixelRatio)||1));
    overlay.width=Math.max(1,Math.round(displayWidth*dpr));
    overlay.height=Math.max(1,Math.round(displayHeight*dpr));
    overlay.style.width=displayWidth+'px';
    overlay.style.height=displayHeight+'px';
    positionPieceOverlay(overlay,sourceRect,displayWidth,displayHeight);

    const config=difficultyConfig(state.difficulty);
    const g=pieceGeometry(id,config);
    const pieceMargin=g.tab+2;
    const logicalWidth=g.w+(pieceMargin*2);
    const renderScale=overlay.width/Math.max(1,logicalWidth);
    const overlayCtx=overlay.getContext('2d');
    overlayCtx.setTransform(1,0,0,1,0,0);
    overlayCtx.clearRect(0,0,overlay.width,overlay.height);

    overlayCtx.save();
    overlayCtx.scale(renderScale,renderScale);
    overlayCtx.translate(pieceMargin,pieceMargin);
    tracePiecePath(overlayCtx,g);
    overlayCtx.clip();
    drawArtworkRegion(overlayCtx,g,pieceMargin);
    overlayCtx.restore();

    overlayCtx.save();
    overlayCtx.scale(renderScale,renderScale);
    overlayCtx.translate(pieceMargin,pieceMargin);
    tracePiecePath(overlayCtx,g);
    overlayCtx.strokeStyle=recreationRgba('--recreation-ink-rgb','255,244,239',.86);
    overlayCtx.lineWidth=Math.max(0.8,1.2/renderScale);
    overlayCtx.stroke();
    overlayCtx.restore();
    overlay.hidden=false;
  }

  function boardLensPoint(){
    if(lastZoomTarget===refs.boardWrap && lastZoomPoint && pointInsideBoard(lastZoomPoint.x,lastZoomPoint.y)){
      return lastZoomPoint;
    }
    const rect=refs.boardWrap.getBoundingClientRect();
    return {x:rect.left+(rect.width/2),y:rect.top+(rect.height/2)};
  }

  function updateBoardLens(clientX,clientY){
    if(!boardLensActive || !refs.boardWrap) return;
    const lens=ensureBoardLens();
    if(!pointInsideBoard(clientX,clientY)){
      lens.hidden=true;
      return;
    }
    lens.hidden=false;
    const boardRect=refs.boardWrap.getBoundingClientRect();
    const viewport=viewportSize();
    const diameter=Math.max(150,Math.min(230,Math.min(viewport.width,viewport.height)*0.26));
    const dpr=Math.max(1,Math.min(2,Number(window.devicePixelRatio)||1));
    const pixelSize=Math.max(1,Math.round(diameter*dpr));
    if(lens.width!==pixelSize) lens.width=pixelSize;
    if(lens.height!==pixelSize) lens.height=pixelSize;
    lens.style.width=diameter+'px';
    lens.style.height=diameter+'px';

    const left=Math.max(6,Math.min(viewport.width-diameter-6,clientX-(diameter/2)));
    const top=Math.max(6,Math.min(viewport.height-diameter-6,clientY-(diameter/2)));
    lens.style.left=left+'px';
    lens.style.top=top+'px';

    const boardX=(clientX-boardRect.left)*(BOARD_WIDTH/Math.max(1,boardRect.width));
    const boardY=(clientY-boardRect.top)*(BOARD_HEIGHT/Math.max(1,boardRect.height));
    const sourceWidth=(diameter/zoomLevel)*(BOARD_WIDTH/Math.max(1,boardRect.width));
    const sourceHeight=(diameter/zoomLevel)*(BOARD_HEIGHT/Math.max(1,boardRect.height));
    const sourceX=Math.max(0,Math.min(BOARD_WIDTH-sourceWidth,boardX-(sourceWidth/2)));
    const sourceY=Math.max(0,Math.min(BOARD_HEIGHT-sourceHeight,boardY-(sourceHeight/2)));

    const lensCtx=lens.getContext('2d');
    lensCtx.setTransform(dpr,0,0,dpr,0,0);
    lensCtx.clearRect(0,0,diameter,diameter);
    lensCtx.imageSmoothingEnabled=true;
    lensCtx.imageSmoothingQuality='high';
    lensCtx.drawImage(
      refs.board,
      sourceX,sourceY,Math.min(sourceWidth,BOARD_WIDTH),Math.min(sourceHeight,BOARD_HEIGHT),
      0,0,diameter,diameter
    );
  }

  function beginBoardLens(){
    if(!state || !imageReady || !refs.boardWrap) return false;
    resetPieceZoom();
    boardLensActive=true;
    root.classList.add('is-board-lens-active');
    const point=boardLensPoint();
    updateBoardLens(point.x,point.y);
    syncZoomControls();
    setStatus('Magnifier ' + Math.round(zoomLevel*100) + '%. Keep Z held and move over the jigsaw; use − and + to adjust.','');
    return true;
  }

  function endBoardLens(){
    if(!boardLensActive) return;
    boardLensActive=false;
    root.classList.remove('is-board-lens-active');
    if(boardLens) boardLens.hidden=true;
    syncZoomControls();
  }

  function applyPieceZoom(target,scale){
    if(!target || target===refs.boardWrap) return;
    const pieceCanvas=target.querySelector?.('.weight-coherence-piece-canvas');
    if(!pieceCanvas) return;
    const nextScale=Math.max(PIECE_ZOOM_DEFAULT,Math.min(PIECE_ZOOM_MAX,Number(scale)||PIECE_ZOOM_DEFAULT));
    if(zoomTarget && zoomTarget!==target) clearZoomTargetStyles(zoomTarget);
    zoomTarget=target;
    zoomScale=nextScale;
    zoomLevel=nextScale;
    zoomTarget.classList.add('is-zoom-target');
    root.classList.add('is-zoom-active');
    updatePieceOverlay(target);
    syncZoomControls();
  }

  function resetPieceZoom(){
    clearZoomTargetStyles(zoomTarget);
    zoomTarget=null;
    zoomScale=1;
    if(pieceOverlay) pieceOverlay.hidden=true;
    root.classList.remove('is-zoom-active','is-zooming-piece');
    if(refs.playerCard) refs.playerCard.classList.remove('is-jigsaw-zooming');
    syncZoomControls();
  }

  function resetZoom(){
    resetPieceZoom();
    endBoardLens();
    syncZoomControls();
  }

  function togglePieceZoom(target){
    const piece=target && target!==refs.boardWrap ? target : null;
    if(!piece) return false;
    endBoardLens();
    if(zoomTarget===piece){
      resetPieceZoom();
      setStatus('Piece zoom reset to 200%.','');
      return true;
    }
    applyPieceZoom(piece,zoomLevel);
    setStatus('Whole-piece zoom ' + Math.round(zoomLevel*100) + '%. The entire jigsaw piece is shown above the workspace; use − and + to adjust, or press Z again to close.','');
    return true;
  }

  function syncZoomControls(){
    const pieceActive=!!zoomTarget;
    const active=pieceActive || boardLensActive;
    const percent=Math.round(zoomLevel*100);
    if(refs.zoomToggle){
      refs.zoomToggle.dataset.active=String(active);
      refs.zoomToggle.setAttribute('aria-label','Zoom hotkey Z. Current magnification ' + percent + ' percent.');
      refs.zoomToggle.title='Z zoom';
      if(refs.zoomValue) refs.zoomValue.textContent=percent + '%';
    }
    if(refs.zoomOut){
      refs.zoomOut.disabled=false;
      refs.zoomOut.setAttribute('aria-label','Decrease inspection zoom');
      refs.zoomOut.title='Decrease inspection zoom';
    }
    if(refs.zoomIn){
      refs.zoomIn.disabled=false;
      refs.zoomIn.setAttribute('aria-label','Increase inspection zoom');
      refs.zoomIn.title='Increase inspection zoom';
    }
  }

  function adjustZoom(direction){
    const amount=Number(direction)||0;
    if(!amount) return;
    const next=Math.max(PIECE_ZOOM_DEFAULT,Math.min(PIECE_ZOOM_MAX,zoomLevel+(amount*ZOOM_STEP)));
    if(next===zoomLevel){
      setStatus(zoomLevel<=PIECE_ZOOM_DEFAULT
        ? 'Zoom is already at the 200% minimum.'
        : 'Zoom is already at the 1000% maximum.','');
      syncZoomControls();
      return;
    }
    zoomLevel=next;
    saveJigsawZoom();
    if(boardLensActive){
      const point=boardLensPoint();
      updateBoardLens(point.x,point.y);
      setStatus('Magnifier ' + Math.round(zoomLevel*100) + '%. Keep Z held to inspect.','');
    }else if(zoomTarget && zoomTarget.isConnected){
      applyPieceZoom(zoomTarget,zoomLevel);
      setStatus('Whole-piece zoom ' + Math.round(zoomLevel*100) + '%. The tray card remains fixed.','');
    }else{
      setStatus('Zoom level set to ' + Math.round(zoomLevel*100) + '%. Hover a piece and press Z, or hold Z over the jigsaw.','');
    }
    syncZoomControls();
  }

  function shuffleTray(){
    if(!state || state.completed) return;
    const remaining=unplacedIds();
    const shuffled=shuffledIds(remaining.length).map(function(index){ return remaining[index]; });
    const parked=sortedPieceSet();
    const parkedIds=state.order.filter(function(id){ return parked.has(id); });
    const placedTail=state.order.filter(function(id){ return state.placed.has(id); });
    state.order=shuffled.concat(parkedIds,placedTail);
    state.page=0;
    selectedPieceId=null;
    renderTray();
    saveState();
    setStatus('Remaining pieces shuffled.','');
  }

  function fullscreenActive(){
    return !!(pseudoFullscreen || document.fullscreenElement===refs.workspace);
  }

  function viewportSize(){
    const viewport=window.visualViewport;
    return {
      width:Math.max(1,Number(viewport&&viewport.width)||window.innerWidth||1),
      height:Math.max(1,Number(viewport&&viewport.height)||window.innerHeight||1)
    };
  }

  function mobileLandscape(){
    const size=viewportSize();
    return size.width>size.height;
  }

  function syncMobileFullscreenOrientation(){
    if(!refs.workspace) return;
    const mobilePseudo=!!(pseudoFullscreen && mobileLike());
    const landscape=mobilePseudo && mobileLandscape();
    const portrait=mobilePseudo && !landscape;
    refs.workspace.classList.toggle('is-mobile-fullscreen-landscape',landscape);
    refs.workspace.classList.toggle('is-mobile-fullscreen-portrait',portrait);
    if(refs.rotateNotice) refs.rotateNotice.hidden=!portrait;
  }

  function syncFullscreenBoardFit(){
    if(!refs.workspace || !refs.boardShell) return;
    if(!fullscreenActive()){
      refs.workspace.style.removeProperty('--weight-coherence-fullscreen-board-width');
      return;
    }
    const shellRect=refs.boardShell.getBoundingClientRect();
    const statusHeight=refs.status ? refs.status.getBoundingClientRect().height : 0;
    const shellStyle=window.getComputedStyle(refs.boardShell);
    const gap=parseFloat(shellStyle.rowGap || shellStyle.gap || '0') || 0;
    const availableHeight=Math.max(0,shellRect.height-statusHeight-gap-6);
    const availableWidth=Math.max(0,shellRect.width-6);
    const width=Math.floor(Math.min(availableWidth,availableHeight*(BOARD_WIDTH/BOARD_HEIGHT)));
    if(width>0) refs.workspace.style.setProperty('--weight-coherence-fullscreen-board-width',width+'px');
  }

  function settleFullscreenLayout(){
    syncFullscreenBoardFit();
    if(fullscreenActive()) renderTray();
  }

  function scheduleFullscreenBoardFit(){
    window.requestAnimationFrame(function(){
      window.requestAnimationFrame(settleFullscreenLayout);
    });
    window.clearTimeout(fullscreenLayoutTimer);
    fullscreenLayoutTimer=window.setTimeout(settleFullscreenLayout,180);
  }

  function setPseudoFullscreen(active){
    pseudoFullscreen=!!active;
    refs.workspace.classList.toggle('is-pseudo-fullscreen',pseudoFullscreen);
    document.documentElement.classList.toggle('weight-coherence-pseudo-fullscreen',pseudoFullscreen);
    document.body.classList.toggle('weight-coherence-pseudo-fullscreen',pseudoFullscreen);
    syncMobileFullscreenOrientation();
    renderTray();
    syncFullscreenButton();
  }

  function syncFullscreenButton(){
    if(!refs.fullscreen) return;
    const active=fullscreenActive();
    refs.fullscreen.setAttribute('aria-pressed',String(active));
    refs.fullscreen.setAttribute('aria-label',active?'Exit full screen (F)':'Enter full screen (F)');
    refs.fullscreen.title=active?'Exit full screen · F':'Full screen · F';
    scheduleFullscreenBoardFit();
  }

  function toggleFullscreen(){
    if(!refs.workspace) return;
    if(zoomScale>ZOOM_MIN || boardLensActive) resetZoom();
    if(pseudoFullscreen){
      setPseudoFullscreen(false);
      return;
    }
    if(document.fullscreenElement===refs.workspace){
      if(document.exitFullscreen) document.exitFullscreen().catch(function(){});
      return;
    }
    if(mobileLike()){
      setPseudoFullscreen(true);
      return;
    }
    if(refs.workspace.requestFullscreen){
      refs.workspace.requestFullscreen().then(function(){
        syncFullscreenButton();
        scheduleFullscreenBoardFit();
      }).catch(function(){
        setPseudoFullscreen(true);
        setStatus('Browser full screen was unavailable, so the puzzle opened in a full-viewport mode.','');
      });
      return;
    }
    setPseudoFullscreen(true);
  }

  function pinchDistance(points){
    return Math.hypot(points[0].x-points[1].x,points[0].y-points[1].y);
  }

  function pinchMidpoint(points){
    return {x:(points[0].x+points[1].x)/2,y:(points[0].y+points[1].y)/2};
  }

  function beginInspectionPinch(){
    if(!refs.boardWrap || pinchPointers.size<2 || !mobileLike()) return;
    const points=Array.from(pinchPointers.values()).slice(0,2);
    const distance=pinchDistance(points);
    if(distance<8) return;
    cancelDrag();
    window.clearTimeout(pinchResetTimer);
    const rect=refs.boardWrap.getBoundingClientRect();
    pinchState={startDistance:distance,rect:rect};
    root.classList.add('is-inspecting');
    if(refs.playerCard) refs.playerCard.classList.add('is-jigsaw-inspecting');
    suppressBoardClickUntil=Date.now()+400;
  }

  function updateInspectionPinch(event){
    if(!pinchState || pinchPointers.size<2 || !refs.boardWrap) return;
    const points=Array.from(pinchPointers.values()).slice(0,2);
    const distance=pinchDistance(points);
    const midpoint=pinchMidpoint(points);
    const scale=Math.max(1,Math.min(2.75,distance/pinchState.startDistance));
    const rect=pinchState.rect;
    const originX=Math.max(0,Math.min(100,((midpoint.x-rect.left)/Math.max(1,rect.width))*100));
    const originY=Math.max(0,Math.min(100,((midpoint.y-rect.top)/Math.max(1,rect.height))*100));
    refs.boardWrap.style.transformOrigin=originX+'% '+originY+'%';
    refs.boardWrap.style.transform='scale('+scale.toFixed(3)+')';
    if(event && event.cancelable) event.preventDefault();
  }

  function resetInspectionZoom(){
    if(!pinchState || !refs.boardWrap) return;
    pinchState=null;
    suppressBoardClickUntil=Date.now()+350;
    refs.boardWrap.style.transition='transform .18s ease';
    refs.boardWrap.style.transform='scale(1)';
    window.clearTimeout(pinchResetTimer);
    pinchResetTimer=window.setTimeout(function(){
      root.classList.remove('is-inspecting');
      if(refs.playerCard) refs.playerCard.classList.remove('is-jigsaw-inspecting');
      refs.boardWrap.style.removeProperty('transition');
      refs.boardWrap.style.removeProperty('transform');
      refs.boardWrap.style.removeProperty('transform-origin');
    },190);
  }

  function onPinchPointerDown(event){
    if(!mobileLike() || event.pointerType!=='touch' || !refs.boardWrap || !refs.boardWrap.contains(event.target)) return;
    pinchPointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
    if(pinchPointers.size===2) beginInspectionPinch();
  }

  function onPinchPointerMove(event){
    if(!pinchPointers.has(event.pointerId)) return;
    pinchPointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
    if(pinchPointers.size>=2){
      if(!pinchState) beginInspectionPinch();
      updateInspectionPinch(event);
    }
  }

  function onPinchPointerEnd(event){
    if(!pinchPointers.has(event.pointerId)) return;
    pinchPointers.delete(event.pointerId);
    if(pinchState && pinchPointers.size<2) resetInspectionZoom();
  }

  function puzzleHotkeysActive(){
    const section=root.closest('.section');
    const dialogOpen=!!(refs.settingsDialog?.open || refs.helpDialog?.open);
    return !!state && !refs.workspace.hidden && !dialogOpen && (!section || section.classList.contains('active'));
  }

  function editableTarget(target){
    if(!target || !target.closest) return false;
    return !!target.closest('input, textarea, select, [contenteditable="true"]');
  }

  function syncSettingsExpanded(open){
    [refs.setupSettings,refs.toolbarSettings].forEach(function(button){
      if(button) button.setAttribute('aria-expanded',String(!!open));
    });
  }

  function openSettings(){
    if(!refs.settingsDialog) return;
    try{
      if(typeof refs.settingsDialog.showModal==='function' && !refs.settingsDialog.open) refs.settingsDialog.showModal();
      else refs.settingsDialog.setAttribute('open','');
      syncSettingsExpanded(true);
    }catch(_error){
      refs.settingsDialog.setAttribute('open','');
      syncSettingsExpanded(true);
    }
  }

  function closeSettings(){
    if(!refs.settingsDialog) return;
    try{
      if(typeof refs.settingsDialog.close==='function' && refs.settingsDialog.open) refs.settingsDialog.close();
      else refs.settingsDialog.removeAttribute('open');
    }catch(_error){
      refs.settingsDialog.removeAttribute('open');
    }
    syncSettingsExpanded(false);
  }

  function syncHelpExpanded(open){
    if(refs.help) refs.help.setAttribute('aria-expanded',String(!!open));
  }

  function openHelp(){
    if(!refs.helpDialog) return;
    try{
      if(typeof refs.helpDialog.showModal==='function' && !refs.helpDialog.open) refs.helpDialog.showModal();
      else refs.helpDialog.setAttribute('open','');
      syncHelpExpanded(true);
    }catch(_error){
      refs.helpDialog.setAttribute('open','');
      syncHelpExpanded(true);
    }
  }

  root.addEventListener('pointerdown',captureInteractionScroll,true);
  root.addEventListener('mousedown',function(event){
    if(!interactionScrollSnapshot) captureInteractionScroll(event);
  },true);
  root.addEventListener('keydown',function(event){
    if(!event || (event.key!=='Enter' && event.key!==' ')) return;
    captureInteractionScroll(event);
  },true);
  root.addEventListener('click',function(event){
    settleInteractionScroll(event);
  },true);
  window.addEventListener('pointerup',function(event){
    settleInteractionScroll(event);
  },true);
  window.addEventListener('pointercancel',function(event){
    settleInteractionScroll(event);
  },true);

  refs.tabButtons.forEach(function(button){
    button.addEventListener('click',function(event){
      event.preventDefault();
      const snapshot=pageScrollSnapshot();
      setJigsawPanel(button.getAttribute('data-jigsaw-panel'),true);
      if(snapshot) restorePageScroll(snapshot);
    });
  });

  refs.preview.addEventListener('click',toggleGuide);
  if(refs.view) refs.view.addEventListener('click',toggleFullView);
  if(refs.zoomOut) refs.zoomOut.addEventListener('click',function(){ adjustZoom(-1); });
  if(refs.zoomIn) refs.zoomIn.addEventListener('click',function(){ adjustZoom(1); });
  if(refs.help) refs.help.addEventListener('click',openHelp);
  refs.shuffle.addEventListener('click',shuffleTray);
  if(refs.fullscreen) refs.fullscreen.addEventListener('click',toggleFullscreen);
  if(refs.setupSettings) refs.setupSettings.addEventListener('click',openSettings);
  if(refs.toolbarSettings) refs.toolbarSettings.addEventListener('click',openSettings);
  if(refs.settingsDialog){
    refs.settingsDialog.addEventListener('close',function(){ syncSettingsExpanded(false); });
    refs.settingsDialog.addEventListener('cancel',function(){ syncSettingsExpanded(false); });
  }
  if(refs.helpDialog){
    refs.helpDialog.addEventListener('close',function(){ syncHelpExpanded(false); });
    refs.helpDialog.addEventListener('cancel',function(){ syncHelpExpanded(false); });
  }

  refs.reset.addEventListener('click',function(){
    if(!state){ beginPuzzle(); return; }
    const restart=window.confirm('Restart ' + (activePuzzle.title||'this jigsaw') + ' at ' + selectedDifficulty + ' pieces? Current progress will be cleared.');
    if(restart){
      beginPuzzle();
      closeSettings();
    }
  });

  function previousTray(){
    if(!state || refs.prev.disabled) return;
    state.page=Math.max(0,state.page-1);
    renderTray();
    saveState();
  }

  function nextTray(){
    if(!state || refs.next.disabled) return;
    state.page+=1;
    renderTray();
    saveState();
  }

  refs.prev.addEventListener('click',previousTray);
  refs.next.addEventListener('click',nextTray);

  root.addEventListener('pointerover',rememberZoomTarget,{passive:true});
  root.addEventListener('pointermove',rememberZoomTarget,{passive:true});
  root.addEventListener('focusin',function(event){
    const target=zoomableTargetFromNode(event.target);
    if(target){
      lastZoomTarget=target;
      lastZoomPoint=null;
    }
  });

  root.addEventListener('pointerdown',function(event){
    const button=event.target.closest?.('[data-piece-id]');
    if(!button || button.disabled || !state || state.completed) return;
    if(viewOn){
      event.preventDefault();
      setStatus('View is on. Press V to return before moving pieces; zoom remains available.','');
      return;
    }
    const id=Number(button.dataset.pieceId);
    if(!Number.isInteger(id)) return;
    if(returnHighlightPieceId===id){
      returnHighlightPieceId=null;
      syncSelectedPieceClasses();
    }
    dragState={ id:id, button:button, startX:event.clientX, startY:event.clientY, moved:false, ghost:null };
    window.addEventListener('pointermove',onDragMove,true);
    window.addEventListener('pointerup',endDrag,true);
    window.addEventListener('pointercancel',cancelDrag,true);
  });

  root.addEventListener('click',function(event){
    const button=event.target.closest?.('[data-piece-id]');
    if(!button || button.disabled || !state || state.completed) return;
    if(viewOn){
      event.preventDefault();
      return;
    }
    if(Date.now()<suppressTrayClickUntil) return;
    const id=Number(button.dataset.pieceId);
    selectedPieceId=selectedPieceId===id?null:id;
    setStatus(selectedPieceId===null?'Piece selection cleared.':'Piece ' + (id+1) + ' selected. Click its position on the board.','');
    syncSelectedPieceClasses();
  });

  refs.board.addEventListener('click',function(event){
    if(Date.now()<suppressBoardClickUntil || pinchState || viewOn) return;
    if(selectedPieceId===null || !state || state.completed) return;
    attemptPlacement(selectedPieceId,event.clientX,event.clientY);
  });

  if(refs.boardWrap){
    refs.boardWrap.addEventListener('pointerdown',onPinchPointerDown,{passive:true});
    window.addEventListener('pointermove',onPinchPointerMove,{passive:false});
    window.addEventListener('pointerup',onPinchPointerEnd,true);
    window.addEventListener('pointercancel',onPinchPointerEnd,true);
  }

  window.addEventListener('popstate',function(){
    try{
      const params=new URLSearchParams(window.location.search||'');
      setJigsawPanel(params.get('jigsaw-panel')==='progress'?'progress':'game',false);
    }catch(_error){}
  });

  document.addEventListener('keydown',function(event){
    if(!event || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey || editableTarget(event.target) || !puzzleHotkeysActive()) return;
    const key=String(event.key||'').toLowerCase();
    if(key==='g'){
      event.preventDefault();
      toggleGuide();
      return;
    }
    if(key==='v'){
      event.preventDefault();
      if(!event.repeat) toggleFullView();
      return;
    }
    if(key==='z'){
      event.preventDefault();
      if(event.repeat) return;
      const target=resolveZoomTarget();
      if(target===refs.boardWrap){
        zoomKeyHeld=true;
        beginBoardLens();
      }else{
        togglePieceZoom(target);
      }
      return;
    }
    if(key==='s'){
      event.preventDefault();
      shuffleTray();
      return;
    }
    if(key==='f'){
      event.preventDefault();
      toggleFullscreen();
      return;
    }
    if(key==='arrowleft'){
      event.preventDefault();
      previousTray();
      return;
    }
    if(key==='arrowright'){
      event.preventDefault();
      nextTray();
    }
  });
  document.addEventListener('keyup',function(event){
    if(!event) return;
    const key=String(event.key||'').toLowerCase();
    if(key!=='z' || !zoomKeyHeld) return;
    event.preventDefault();
    zoomKeyHeld=false;
    endBoardLens();
  });
  window.addEventListener('blur',function(){
    zoomKeyHeld=false;
    endBoardLens();
  });
  document.addEventListener('visibilitychange',function(){
    if(document.hidden){
      zoomKeyHeld=false;
      endBoardLens();
    }
  });
  document.addEventListener('fullscreenchange',function(){
    syncMobileFullscreenOrientation();
    syncFullscreenButton();
    scheduleFullscreenBoardFit();
  });
  window.addEventListener('resize',function(){
    syncMobileFullscreenOrientation();
    scheduleFullscreenBoardFit();
  });
  window.addEventListener('orientationchange',function(){
    syncMobileFullscreenOrientation();
    scheduleFullscreenBoardFit();
  });
  if(window.visualViewport){
    window.visualViewport.addEventListener('resize',function(){
      syncMobileFullscreenOrientation();
      scheduleFullscreenBoardFit();
    },{passive:true});
  }
  document.addEventListener('visibilitychange',function(){ if(document.hidden) saveState(); });
  window.addEventListener('pagehide',function(){ saveState(); },{passive:true});
  let storageAuthenticated=!!gameStorage()?.isAuthenticated?.();
  document.addEventListener('baseline:game-storage',function(event){
    const authenticated=!!event.detail?.authenticated;
    const authChanged=authenticated!==storageAuthenticated;
    storageAuthenticated=authenticated;
    hydrateJigsawZoom();
    const untouched=!state || (state.placed && state.placed.size===0 && (state.elapsed||0)<8);
    if(authChanged || untouched){
      if(!restoreState() && !state && imageReady) beginPuzzle();
    }
  });

  document.addEventListener('baseline:jigsaw-select',function(event){
    const puzzle=event.detail&&event.detail.puzzle;
    const openPanel=event.detail&&event.detail.openPanel;
    if(openPanel==='game') setJigsawPanel('game',false);
    if(puzzle && puzzle.id!==activePuzzle.id){
      configurePuzzle(puzzle,true);
      return;
    }
    if(puzzle){
      syncPuzzlePresentation();
      renderJigsawProgress();
      if(imageReady && state){
        rebuildPlacedCanvas();
        drawBoard();
      }
    }
  });

  hydrateJigsawZoom();
  configurePuzzle(activePuzzle,false);

  try{ document.documentElement.setAttribute('data-weight-of-coherence-jigsaw','1'); }catch(_error){}
})();

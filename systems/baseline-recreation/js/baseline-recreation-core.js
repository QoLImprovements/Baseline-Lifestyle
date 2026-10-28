(function(){
  'use strict';

const BASELINE_RECREATION_BUILD = 'RECREATION_FULLSCREEN_WINDOW_TABS_20261025_1';
  try{
    window.BASELINE_RECREATION_BUILD = BASELINE_RECREATION_BUILD;
    document.documentElement.setAttribute('data-baseline-recreation-js', BASELINE_RECREATION_BUILD);
  }catch(_buildMarkerError){}

  const API_PATH = '/systems/baseline-recreation/api/games_profile.php';
  const GAME_REGISTRY = window.BASELINE_GAMES_REGISTRY || null;
  const REGISTERED_CORE_GAMES = GAME_REGISTRY && typeof GAME_REGISTRY.coreGames === 'function' ? GAME_REGISTRY.coreGames() : [];
  const REGISTERED_OVERVIEW_GAMES = GAME_REGISTRY && typeof GAME_REGISTRY.overviewGames === 'function' ? GAME_REGISTRY.overviewGames() : [];
  const GAMES_HELP_MODAL = window.BaselineGamesHelpModal || null;
  if(!GAMES_HELP_MODAL || typeof GAMES_HELP_MODAL.open !== 'function' || typeof GAMES_HELP_MODAL.close !== 'function') throw new Error('games_help_modal_authority_missing');
  const PROGRESSION_RULES = window.BASELINE_GAMES_PROGRESSION || null;
  if(!PROGRESSION_RULES) throw new Error('games_progression_authority_missing');
  const xpNeededForLevel = PROGRESSION_RULES.xpNeededForLevel;
  const progressionSnapshot = PROGRESSION_RULES.progressionSnapshot;
  const applyLevelCurve = PROGRESSION_RULES.applyLevelCurve;
  const refundLockedSkills = PROGRESSION_RULES.refundLockedSkills;
  const reconcileSkillPoints = PROGRESSION_RULES.reconcileSkillPoints;
  const GAME_APPS = REGISTERED_CORE_GAMES.length ? REGISTERED_CORE_GAMES.map(function(game){ return game.profileApp; }).filter(Boolean) : ['detectword', 'make24', 'ninja', 'pairs', 'trackcoin', 'ruleshift'];
  const AUTO_NEXT_GAMES = ['pairs', 'detectword', 'make24', 'trackcoin', 'ruleshift', 'blockgrid', 'coloursort', 'crossnumber'];
  const AUTO_NEXT_DELAYS = Object.freeze({ pairs:900, detectword:900, make24:900, trackcoin:1500, ruleshift:900, blockgrid:1200, coloursort:1200, crossnumber:1200 });
  const SITEWIDE_START_HOTKEY_LABEL = 'Alt+N';
  const SITEWIDE_AUTONEXT_HOTKEY_LABEL = 'Alt+A';
  const SITEWIDE_KEYBOARD_HOTKEY_LABEL = 'Alt+K';
  const SITEWIDE_FULLSCREEN_HOTKEY_LABEL = 'Alt+F';
  const TRACKCOIN_BASE_SPEED_PERCENT = 100;
  const TRACKCOIN_START_SPEED_SCALE = 0.60;
  const TRACKCOIN_SPEED_STEP_PERCENT = 10;
  const TRACKCOIN_FIRST_MILESTONE_PERCENT = 200;
  const TRACKCOIN_MILESTONE_STEP_PERCENT = 50;
  const TRACKCOIN_MIN_MOVES = 6;
  const TRACKCOIN_SHUFFLE_MIN_MS = 6000;
  const TRACKCOIN_SHUFFLE_MAX_MS = 8000;

  const CORE_GAME_CONFIG = window.BASELINE_GAMES_CORE_CONFIG || null;
  if(!CORE_GAME_CONFIG) throw new Error('games_core_config_authority_missing');
  const PAIRS_ENGINE = window.BASELINE_PAIRS_ENGINE || null;
  if(!PAIRS_ENGINE || typeof PAIRS_ENGINE.buildDeck !== 'function' || typeof PAIRS_ENGINE.boardLayout !== 'function' || typeof PAIRS_ENGINE.mismatchDelay !== 'function' || typeof PAIRS_ENGINE.calculateRewards !== 'function') throw new Error('pairs_engine_authority_missing');
  const PAIRS_FACES = CORE_GAME_CONFIG.PAIRS_FACES;
  const PAIRS_CARD_THEMES = CORE_GAME_CONFIG.PAIRS_CARD_THEMES;
  const PAIRS_TIERS = CORE_GAME_CONFIG.PAIRS_TIERS;
  const PAIRS_SKILLS = CORE_GAME_CONFIG.PAIRS_SKILLS;
  const MAKE24_TIERS = CORE_GAME_CONFIG.MAKE24_TIERS;
  const MAKE24_SKILLS = CORE_GAME_CONFIG.MAKE24_SKILLS;
  const WORD_TIERS = CORE_GAME_CONFIG.WORD_TIERS;
  const WORD_SKILLS = CORE_GAME_CONFIG.WORD_SKILLS;
  const WORD_BANK = CORE_GAME_CONFIG.WORD_BANK;
  const DETECT_WORD_ENGINE_FACTORY = window.BASELINE_DETECT_WORD_ENGINE || null;
  if(!DETECT_WORD_ENGINE_FACTORY || typeof DETECT_WORD_ENGINE_FACTORY.create !== 'function') throw new Error('detect_word_engine_authority_missing');
  const DETECT_WORD_ENGINE = DETECT_WORD_ENGINE_FACTORY.create({wordBank:WORD_BANK});
  const chooseRandomWord = DETECT_WORD_ENGINE.chooseRandomWord;
  const evaluateWordGuess = DETECT_WORD_ENGINE.evaluateWordGuess;
  const computeWordRewardMultiplier = DETECT_WORD_ENGINE.computeWordRewardMultiplier;
  const TRACKCOIN_TIERS = CORE_GAME_CONFIG.TRACKCOIN_TIERS;
  const TRACKCOIN_STREAK_BONUS = CORE_GAME_CONFIG.TRACKCOIN_STREAK_BONUS;
  const TRACKCOIN_SKILLS = CORE_GAME_CONFIG.TRACKCOIN_SKILLS;
  const RULESHIFT_COLOURS = CORE_GAME_CONFIG.RULESHIFT_COLOURS;
  const RULESHIFT_SHAPES = CORE_GAME_CONFIG.RULESHIFT_SHAPES;
  const RULESHIFT_SIZES = CORE_GAME_CONFIG.RULESHIFT_SIZES;
  const RULESHIFT_TIERS = CORE_GAME_CONFIG.RULESHIFT_TIERS;
  const RULESHIFT_SKILLS = CORE_GAME_CONFIG.RULESHIFT_SKILLS;

  const refs = {};
  const guestProfiles = Object.create(null);
  const profiles = Object.create(null);

  function readGuestProfile(app){
    const value=guestProfiles[app];
    return value&&typeof value==='object'?JSON.parse(JSON.stringify(value)):null;
  }

  function writeGuestProfile(app,profile){
    if(!app||!profile||typeof profile!=='object') return;
    guestProfiles[app]=JSON.parse(JSON.stringify(profile));
  }
  const saveTimers = Object.create(null);
  let authState = { authed:false, name:'', email:'' };
  let selectedGame = '';
  let currentTab = 'system';
  let pairsBoardState = null;
  let pairsRoundToken = 0;
  let pairsIdleMessage = 'Choose a board tier and press New Game when you are ready.';
  let make24State = null;
  let make24IdleMessage = 'Choose a number tier and press New Game when you are ready.';
  let wordState = null;
  let wordIdleMessage = 'Choose a letter tier and press New Game when you are ready.';
  let ruleShiftState = null;
  let ruleShiftTimer = 0;
  let ruleShiftIdleMessage = 'Choose a rule tier and press New Game when you are ready.';
  let trackCoinState = null;
  let trackCoinRoundToken = 0;
  let trackCoinAnimationFrame = 0;
  let trackCoinShuffleTimer = 0;
  let trackCoinOpenPanel = 'trackCoinGamePanel';
  let ruleShiftOpenPanel = 'ruleShiftGameCard';
  let pairsOpenPanel = 'pairsGameCard';
  let wordOpenPanel = 'wordGameCard';
  let make24OpenPanel = 'make24GameCard';
  let ninjaOpenPanel = 'ninjaGameCard';
  const openSummaryIds = new Set();
  let suspendHashSync = false;
  let autoNextSettings = readAutoNextSettings();
  const autoNextTimers = Object.create(null);
  const autoNextRegistrations = Object.create(null);
  let desktopKeypadOpenGame = '';
  let coreNewGamePointerId = '';
  let coreNewGamePointerAt = 0;
  const GAME_IDS = REGISTERED_CORE_GAMES.length ? REGISTERED_CORE_GAMES.map(function(game){ return game.runtimeId; }) : ['pairs','detectword','make24','trackcoin','ruleshift','ninja'];

  const GAME_ID_TO_ROUTE_SLUG = Object.freeze((function(){
    if(!REGISTERED_CORE_GAMES.length) return {
      pairs:'pairs', detectword:'detect-the-word', make24:'make-the-number',
      trackcoin:'track-the-coin', ruleshift:'rule-shift', ninja:'baseline-realm'
    };
    return REGISTERED_CORE_GAMES.reduce(function(map, game){ map[game.runtimeId] = game.route; return map; }, {});
  })());
  const GAME_ROUTE_SLUG_TO_ID = Object.freeze((function(){
    if(!REGISTERED_CORE_GAMES.length) return {
      pairs:'pairs', 'detect-the-word':'detectword', make24:'make24', 'make-the-number':'make24',
      'track-the-coin':'trackcoin', 'rule-shift':'ruleshift', 'baseline-realm':'ninja'
    };
    return REGISTERED_CORE_GAMES.reduce(function(map, game){
      map[game.route] = game.runtimeId;
      map[game.runtimeId] = game.runtimeId;
      (game.legacyIds || []).forEach(function(alias){ map[alias] = game.runtimeId; });
      return map;
    }, {});
  })());

  const GAME_PANEL_MAP = Object.freeze({
    pairs:{ panels:['pairsGameCard','pairsSkillCard','pairsTierCard','pairsProgressCard'], defaultPanel:'pairsGameCard', get:function(){ return pairsOpenPanel; }, set:function(value){ pairsOpenPanel = value; } },
    detectword:{ panels:['wordGameCard','wordSkillCard','wordTierCard','wordProgressCard'], defaultPanel:'wordGameCard', get:function(){ return wordOpenPanel; }, set:function(value){ wordOpenPanel = value; } },
    make24:{ panels:['make24GameCard','make24SkillCard','make24TierCard','make24ProgressCard'], defaultPanel:'make24GameCard', get:function(){ return make24OpenPanel; }, set:function(value){ make24OpenPanel = value; } },
    trackcoin:{ panels:['trackCoinGamePanel','trackCoinSkillPanel','trackCoinTierPanel','trackCoinProgressPanel'], defaultPanel:'trackCoinGamePanel', get:function(){ return trackCoinOpenPanel; }, set:function(value){ trackCoinOpenPanel = value; } },
    ruleshift:{ panels:['ruleShiftGameCard','ruleShiftSkillCard','ruleShiftTierCard','ruleShiftProgressCard'], defaultPanel:'ruleShiftGameCard', get:function(){ return ruleShiftOpenPanel; }, set:function(value){ ruleShiftOpenPanel = value; } },
    ninja:{ panels:['ninjaGameCard'], defaultPanel:'ninjaGameCard', get:function(){ return ninjaOpenPanel; }, set:function(value){ ninjaOpenPanel = value; } }
  });

  function q(sel, root=document){ return root.querySelector(sel); }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  function isMobileGameViewport(){
    if(typeof window === 'undefined') return false;
    try{
      const width = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0);
      const height = Math.max(window.innerHeight || 0, document.documentElement.clientHeight || 0);
      const coarse = !!(window.matchMedia && window.matchMedia('(pointer:coarse)').matches);
      const touchPoints = Number((window.navigator && window.navigator.maxTouchPoints) || 0);
      return width <= 820 || ((coarse || touchPoints > 0) && Math.min(width,height) <= 820 && Math.max(width,height) <= 1100);
    }catch(_error){
      return Math.min(window.innerWidth || 0, window.innerHeight || 0) <= 820;
    }
  }

  function isTouchOnlyGameDevice(){
    if(typeof window === 'undefined') return false;
    try{
      const coarse = !!(window.matchMedia && window.matchMedia('(pointer:coarse)').matches);
      const fine = !!(window.matchMedia && window.matchMedia('(pointer:fine)').matches);
      const hover = !!(window.matchMedia && window.matchMedia('(hover:hover)').matches);
      const touchPoints = Number((window.navigator && window.navigator.maxTouchPoints) || 0);
      return (coarse || touchPoints > 0) && !fine && !hover;
    }catch(_error){
      return false;
    }
  }

  function roundIsTerminal(gameId){
    if(gameId === 'pairs') return Boolean(pairsBoardState && pairsBoardState.completed);
    if(gameId === 'make24') return Boolean(make24State && make24State.completed);
    if(gameId === 'detectword'){
      if(!wordState) return false;
      return wordState.guesses.some(function(entry){ return entry.word === wordState.secret; }) || wordState.guesses.length >= wordState.maxGuesses;
    }
    if(gameId === 'trackcoin') return Boolean(trackCoinState && trackCoinState.resolved);
    if(gameId === 'ruleshift') return Boolean(ruleShiftState && ruleShiftState.finished);
    return false;
  }
  function setHotkeyCaption(button, hotkey){
    if(!button) return;
    button.removeAttribute('data-hotkey-caption');
    const shortcut=String(hotkey||'').trim();
    const titleBase=String(button.getAttribute('title')||'').split(/\s+[—·]\s+/)[0].trim();
    const label=String(button.getAttribute('aria-label')||titleBase||button.textContent||'').trim();
    const tooltip=[label,shortcut].filter(Boolean).join(' · ');
    if(tooltip){
      button.setAttribute('data-tooltip',tooltip);
      button.setAttribute('title',tooltip);
    }else{
      button.removeAttribute('data-tooltip');
    }
  }
  function startButtonLabel(_gameId){ return 'New Game'; }
  function autoNextButtonLabel(gameId){
    return 'Auto New Game: ' + (autoNextEnabled(gameId) ? 'On' : 'Off');
  }
  function keypadButtonLabel(open){ return open ? 'Close keypad' : 'Open keypad'; }
  function hotkeyActionLabel(label, _hotkey){ return label; }
  function countedHotkeyActionLabel(label, _hotkey, count){ return label + ' (' + count + ')'; }
  function keyboardIconMarkup(open){
    const label=keypadButtonLabel(open);
    return '<svg class="game-shell-action__svg" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M6 9h1m2 0h1m2 0h1m2 0h1m2 0h1M6 12h1m2 0h1m2 0h1m2 0h1m2 0h1M7 15h10"></path></svg><span class="sr-only">'+label+'</span>';
  }
  function fullscreenIconMarkup(label){
    return '<svg class="game-shell-action__svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"></path></svg><span class="sr-only">'+label+'</span>';
  }
  function compactGlyphMarkup(glyph,label){
    return '<span class="game-control-letter" aria-hidden="true">'+glyph+'</span><span class="sr-only">'+label+'</span>';
  }
  function setCompactActionButton(button,glyph,label,hotkey,count){
    if(!button) return;
    const suffix=Number.isFinite(Number(count)) ? ' ('+Math.max(0,Math.round(Number(count)))+')' : '';
    const fullLabel=label+suffix;
    button.classList.add('game-control-icon');
    button.setAttribute('aria-label',fullLabel);
    button.innerHTML=compactGlyphMarkup(glyph,fullLabel);
    const shortcut=String(hotkey||'').trim();
    button.title=[fullLabel,shortcut].filter(Boolean).join(' · ');
    if(shortcut) setHotkeyCaption(button,shortcut);
    else button.setAttribute('data-tooltip',fullLabel);
  }
  function alignGameTooltip(button){
    if(!button || !button.matches || !button.matches('[data-tooltip]')) return;
    const rect=button.getBoundingClientRect();
    const width=Math.max(1,window.innerWidth||document.documentElement.clientWidth||1);
    if(rect.right > width-120) button.setAttribute('data-tooltip-align','right');
    else if(rect.left < 120) button.setAttribute('data-tooltip-align','left');
    else button.removeAttribute('data-tooltip-align');
  }
  function mobileSubmitButtonHtml(){
    return isMobileGameViewport() ? '' : '<div class="game-input-submit-row"><button class="action ghost submit-game-toggle" type="submit">Submit</button></div>';
  }
  function resyncHeaderAfterMobileGameExit(){
    try{
      if(typeof window.BASELINE_syncHomebarHeight === 'function') window.BASELINE_syncHomebarHeight();
    }catch(_e){}
    try{
      document.dispatchEvent(new Event('baseline:homebar-resync'));
    }catch(_e){}
    const scroller = q('.bl-scroll');
    if(scroller){
      try{
        scroller.style.removeProperty('top');
        scroller.style.removeProperty('overflow');
      }catch(_e){}
    }
    try{ document.documentElement.offsetHeight; }catch(_e){}
  }

  function focusGameInput(id){
    if(typeof window === 'undefined') return;
    window.setTimeout(function(){
      const input = document.getElementById(id);
      if(!input || input.disabled) return;
      if(isMobileGameViewport()){
        try{ input.setAttribute('inputmode', 'none'); input.setAttribute('readonly', 'readonly'); input.blur(); }catch(_error){}
        return;
      }
      try{ input.removeAttribute('readonly'); input.removeAttribute('inputmode'); }catch(_error){}
      input.focus({ preventScroll:true });
      if(typeof input.select === 'function') input.select();
    }, 0);
  }

  function defaultGameCardId(gameId){
    return gameId === 'pairs' ? 'pairsGameCard'
      : gameId === 'detectword' ? 'wordGameCard'
      : gameId === 'make24' ? 'make24GameCard'
      : gameId === 'trackcoin' ? 'trackCoinGamePanel'
      : gameId === 'ruleshift' ? 'ruleShiftGameCard'
      : gameId === 'ninja' ? 'ninjaGameCard'
      : '';
  }
  function defaultGamePanelId(gameId){
    return gameId === 'pairs' ? 'pairsPanel'
      : gameId === 'detectword' ? 'detectwordPanel'
      : gameId === 'make24' ? 'make24Panel'
      : gameId === 'trackcoin' ? 'trackcoinPanel'
      : gameId === 'ruleshift' ? 'ruleshiftPanel'
      : gameId === 'ninja' ? 'ninjaPanel'
      : '';
  }
  function defaultGameSurfaceId(gameId){
    return gameId === 'pairs' ? 'pairsBoard'
      : gameId === 'detectword' ? 'wordBoard'
      : gameId === 'make24' ? 'make24Board'
      : gameId === 'trackcoin' ? 'trackCoinScene'
      : gameId === 'ruleshift' ? 'ruleShiftBoard'
      : gameId === 'ninja' ? 'realmSceneFrame'
      : '';
  }
  function openGameCardPanel(gameId){
    if(gameId === 'pairs') setPairsPanel('pairsGameCard');
    else if(gameId === 'detectword') setWordPanel('wordGameCard');
    else if(gameId === 'make24') setMake24Panel('make24GameCard');
    else if(gameId === 'trackcoin') setTrackCoinPanel('trackCoinGamePanel');
    else if(gameId === 'ruleshift') setRuleShiftPanel('ruleShiftGameCard');
    else if(gameId === 'ninja') setNinjaPanel('ninjaGameCard');
  }
  function markGameNode(id, attr, value, extraClass){
    const el = document.getElementById(id);
    if(!el) return null;
    el.setAttribute(attr, value);
    if(extraClass) el.classList.add(extraClass);
    return el;
  }
  function ensureGamePlayContract(){
    if(typeof document === 'undefined') return;

    // Sitewide game contract:
    // - New Game is a one-press explicit reset/start action;
    // - Pairs opens idle, while games with resumable active rounds restore them;
    // - every authenticated game profile saves through the account API;
    // - the game card is always the game window / mobile root;
    // - the board/scene is only the play surface;
    // - controls, Round Status, New Game, and Auto-Next stay inside the same root;
    // - New Game uses Alt+N and Auto-Next uses Alt+A so typing games do not clash.
    ['pairs','detectword','make24','trackcoin','ruleshift','ninja'].forEach(function(gameId){
      markGameNode(defaultGamePanelId(gameId), 'data-game-panel', gameId, 'game-panel-shell');
      markGameNode(defaultGameCardId(gameId), 'data-game-card', gameId, 'game-card-shell');
      const card = gameCardElement(gameId);
      if(card){ card.setAttribute('data-game-play-root', gameId); card.classList.add('game-play-root'); }
    });

    const pairsWindow = refs.pairsBoard && refs.pairsBoard.closest('.board-wrap');
    if(pairsWindow){ pairsWindow.removeAttribute('data-game-play-root'); pairsWindow.setAttribute('data-game-play-window','pairs'); pairsWindow.classList.remove('game-play-root'); pairsWindow.classList.add('game-play-window'); }
    if(refs.pairsBoard){ refs.pairsBoard.setAttribute('data-game-play-surface','pairs'); refs.pairsBoard.classList.add('game-play-surface'); }

    const wordWindow = refs.wordBoard && refs.wordBoard.closest('.board-wrap');
    if(wordWindow){ wordWindow.removeAttribute('data-game-play-root'); wordWindow.setAttribute('data-game-play-window','detectword'); wordWindow.classList.remove('game-play-root'); wordWindow.classList.add('game-play-window'); }
    if(refs.wordBoard){ refs.wordBoard.setAttribute('data-game-play-surface','detectword'); refs.wordBoard.classList.add('game-play-surface'); }

    const makeWindow = refs.make24Board && refs.make24Board.closest('.board-wrap');
    if(makeWindow){ makeWindow.removeAttribute('data-game-play-root'); makeWindow.setAttribute('data-game-play-window','make24'); makeWindow.classList.remove('game-play-root'); makeWindow.classList.add('game-play-window'); }
    if(refs.make24Board){ refs.make24Board.setAttribute('data-game-play-surface','make24'); refs.make24Board.classList.add('game-play-surface'); }

    const trackRoot = refs.trackCoinBoard || document.getElementById('trackCoinBoard');
    if(trackRoot){ trackRoot.removeAttribute('data-game-play-root'); trackRoot.setAttribute('data-game-play-surface','trackcoin'); trackRoot.classList.remove('game-play-root'); trackRoot.classList.add('game-play-surface'); }
    const trackScene = document.getElementById('trackCoinScene') || q('.trackcoin-scene', trackRoot || document);
    if(trackScene){ trackScene.id = 'trackCoinScene'; trackScene.setAttribute('data-game-play-surface','trackcoin-scene'); trackScene.classList.add('game-play-surface'); }

    const ruleShiftBoard = document.getElementById('ruleShiftBoard');
    if(ruleShiftBoard){ ruleShiftBoard.setAttribute('data-game-play-surface','ruleshift'); ruleShiftBoard.classList.add('game-play-surface'); }

    const realmFrame = document.getElementById('realmSceneFrame') || document.getElementById('realmWindow');
    if(realmFrame){ realmFrame.setAttribute('data-game-play-root','ninja'); realmFrame.setAttribute('data-game-play-surface','ninja'); realmFrame.classList.add('game-play-root','game-play-surface'); }

    qsa('[data-action^="start-"]').forEach(function(btn){
      btn.classList.add('start-new-game-toggle', 'ghost');
    });
    qsa('#wordGuessForm button[type="submit"], #make24ExpressionForm button[type="submit"]').forEach(function(btn){
      btn.classList.add('submit-game-toggle', 'ghost');
    });
    qsa('[data-auto-next-toggle]').forEach(function(btn){
      btn.classList.add('auto-next-toggle', 'ghost');
    });
  }
  function gamePanelElement(gameId){ return document.getElementById(defaultGamePanelId(gameId)); }
  function gameCardElement(gameId){ return document.getElementById(defaultGameCardId(gameId)); }
  function gamePlayRootElement(gameId){
    ensureGamePlayContract();
    return gameCardElement(gameId) || q('[data-game-play-root="' + gameId + '"]') || gamePanelElement(gameId);
  }
  function gamePlaySurfaceElement(gameId){
    ensureGamePlayContract();
    return q('[data-game-play-surface="' + gameId + '"]') || gamePlayRootElement(gameId);
  }
  function mobileGameRootElement(gameId){
    ensureGamePlayContract();
    return gamePanelElement(gameId) || gamePlayRootElement(gameId);
  }
  function scrollToElementInPageScroller(element){
    if(!element || typeof window === 'undefined') return;
    window.setTimeout(function(){
      const root = q('.bl-scroll');
      try{
        const rect = element.getBoundingClientRect();
        const viewportTop = root ? root.getBoundingClientRect().top : 0;
        const viewportBottom = root ? root.getBoundingClientRect().bottom : (window.innerHeight || document.documentElement.clientHeight || 0);
        const usableTop = viewportTop + 12;
        const usableBottom = viewportBottom - 12;
        const visibleEnough = rect.top >= usableTop && rect.top < usableBottom && Math.min(rect.bottom, usableBottom) - Math.max(rect.top, usableTop) >= Math.min(180, rect.height || 180);
        if(visibleEnough) return;
        if(root){
          const y = rect.top - root.getBoundingClientRect().top + root.scrollTop - 10;
          root.scrollTo({ top: Math.max(0, y), left:0, behavior:'auto' });
        }else{
          const y = rect.top + window.pageYOffset - 10;
          window.scrollTo({ top:Math.max(0, y), left:0, behavior:'auto' });
        }
      }catch(_error){
        try{ element.scrollIntoView({ block:'nearest', inline:'nearest', behavior:'auto' }); }catch(_error2){}
      }
    }, 0);
  }
  function syncMobileInputMode(gameId){
    const mobile = isMobileGameViewport() || (document.body && document.body.classList.contains('bl-mobile-game-mode'));
    const ids = gameId === 'make24' ? ['make24ExpressionInput'] : gameId === 'detectword' ? ['wordGuessInput'] : [];
    ids.forEach(function(id){
      const input = document.getElementById(id);
      if(!input) return;
      if(mobile){
        input.setAttribute('readonly', 'readonly');
        input.setAttribute('inputmode', 'none');
        input.setAttribute('autocomplete', 'off');
        try{ input.blur(); }catch(_error){}
      }else{
        input.removeAttribute('readonly');
        input.removeAttribute('inputmode');
      }
    });
  }
  function syncAllMobileInputModes(){ ['detectword','make24'].forEach(syncMobileInputMode); }
  function keypadButton(gameId, key, label, extra){
    return '<button class="mobile-game-key' + (extra ? ' ' + extra : '') + '" data-mobile-game-key="' + gameId + ':' + key + '" type="button">' + label + '</button>';
  }
  function injectMobileGameControls(gameId){
    ensureGamePlayContract();
    if(gameId === 'detectword' && refs.wordBoard && document.getElementById('wordGuessInput') && !q('.mobile-game-keypad[data-keypad="detectword"]', refs.wordBoard)){
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(function(letter){ return keypadButton('detectword', letter.toLowerCase(), letter, 'mobile-game-key--letter'); }).join('');
      refs.wordBoard.insertAdjacentHTML('beforeend', '<div class="mobile-game-keypad mobile-word-keypad" data-keypad="detectword" aria-label="Word input keyboard">' + letters + keypadButton('detectword','backspace','⌫','mobile-game-key--utility') + keypadButton('detectword','clear','Clear','mobile-game-key--utility') + keypadButton('detectword','submit','Submit','mobile-game-key--submit') + '</div>');
    }
    if(gameId === 'make24' && isMobileGameViewport()){
      const duplicateKeypad = refs.make24Board ? q('.mobile-game-keypad[data-keypad="make24"]', refs.make24Board) : null;
      if(duplicateKeypad) duplicateKeypad.remove();
      return;
    }
    if(gameId === 'make24' && refs.make24Board && document.getElementById('make24ExpressionInput') && !q('.mobile-game-keypad[data-keypad="make24"]', refs.make24Board)){
      const keys = ['7','8','9','(','4','5','6',')','1','2','3','+','0','-','*','/'];
      const symbols = { '*':'×', '/':'÷', '-':'−' };
      const keysHtml = keys.map(function(key){ return keypadButton('make24', key, symbols[key] || key, /[0-9]/.test(key) ? 'mobile-game-key--number' : 'mobile-game-key--operator'); }).join('');
      refs.make24Board.insertAdjacentHTML('beforeend', '<div class="mobile-game-keypad mobile-make24-keypad" data-keypad="make24" aria-label="Number expression keypad">' + keysHtml + keypadButton('make24','backspace','⌫','mobile-game-key--utility') + keypadButton('make24','clear','Clear','mobile-game-key--utility') + keypadButton('make24','submit','Submit','mobile-game-key--submit') + '</div>');
    }
  }
  function wordLetterKnowledge(){
    return DETECT_WORD_ENGINE.letterKnowledge(wordState && Array.isArray(wordState.guesses) ? wordState.guesses : []);
  }
  function syncWordKeypadKnowledge(){
    const knowledge = wordLetterKnowledge();
    qsa('.mobile-word-keypad .mobile-game-key--letter').forEach(function(button){
      const raw = button.getAttribute('data-mobile-game-key') || '';
      const letter = raw.split(':')[1] || '';
      button.classList.remove('is-word-correct','is-word-present','is-word-absent');
      if(knowledge[letter]) button.classList.add('is-word-' + knowledge[letter]);
    });
  }
  function injectAllMobileGameControls(){ injectMobileGameControls('detectword'); injectMobileGameControls('make24'); }
  function isDesktopKeypadGame(gameId){ return gameId === 'detectword' || gameId === 'make24'; }
  function syncDesktopKeypadState(){
    if(typeof document === 'undefined') return;
    const mobileViewport = isMobileGameViewport();
    ['detectword','make24'].forEach(function(gameId){
      const root = gameCardElement(gameId) || q('[data-game-play-root="' + gameId + '"]');
      const mobileRoot = q('.is-mobile-game-root[data-mobile-game-root="' + gameId + '"]');
      const open = !mobileViewport && desktopKeypadOpenGame === gameId;
      const shownByMobileRoot = !!(mobileRoot || (root && root.classList && root.classList.contains('is-mobile-game-root')));
      if(root){
        root.classList.toggle('desktop-keypad-open', open);
        root.classList.toggle('keypad-open', open || shownByMobileRoot);
      }
      qsa('[data-desktop-keypad-toggle="' + gameId + '"]').forEach(function(btn){
        btn.hidden = mobileViewport;
        btn.setAttribute('aria-hidden', String(mobileViewport));
        btn.setAttribute('aria-pressed', String(open));
        btn.setAttribute('aria-label', keypadButtonLabel(open));
        btn.title = keypadButtonLabel(open) + ' — ' + SITEWIDE_KEYBOARD_HOTKEY_LABEL;
        btn.classList.add('game-shell-action','game-shell-action--icon','game-shell-action--keyboard');
        btn.innerHTML = keyboardIconMarkup(open);
        setHotkeyCaption(btn, SITEWIDE_KEYBOARD_HOTKEY_LABEL);
      });
      qsa('.mobile-game-keypad[data-keypad="' + gameId + '"]').forEach(function(keypad){
        keypad.setAttribute('aria-hidden', String(!(open || shownByMobileRoot)));
      });
    });
  }
  function toggleDesktopKeypad(gameId){
    const id = normaliseGameId(gameId);
    if(!isDesktopKeypadGame(id)) return false;
    ensureGamePlayContract();
    injectMobileGameControls(id);
    syncMobileInputMode(id);
    if(isMobileGameViewport()){
      ensureMobileGameMode(id);
      return true;
    }
    desktopKeypadOpenGame = desktopKeypadOpenGame === id ? '' : id;
    syncDesktopKeypadState();
    focusGamePlaySurface(id, { scroll:false, mobileMode:false, preserveView:true });
    return true;
  }
  function setupGamePlayContractObserver(){
    const host = document.getElementById('games');
    if(!host || typeof MutationObserver === 'undefined') return;
    let pending = false;
    const observer = new MutationObserver(function(){
      if(pending) return;
      pending = true;
      window.requestAnimationFrame(function(){
        pending = false;
        ensureGamePlayContract();
        injectAllMobileGameControls();
        syncAllMobileInputModes();
        syncDesktopKeypadState();
      });
    });
    observer.observe(host, { childList:true, subtree:true });
  }
  function exitMobileGameMode(){
    if(typeof document === 'undefined' || !document.body) return;
    function finishMobileExit(){
      try{
        document.querySelectorAll('.recreation-mobile-pseudo-fullscreen').forEach(function(el){
          el.classList.remove('recreation-mobile-pseudo-fullscreen');
          el.removeAttribute('data-fullscreen-window-view');
        });
        document.body.classList.remove('recreation-mobile-pseudo-fullscreen-active');
        syncFullscreenWindowTabs();
        document.body.classList.remove('bl-mobile-game-mode');
        document.body.removeAttribute('data-mobile-game');
        qsa('.is-mobile-game-root').forEach(function(el){
          el.classList.remove('is-mobile-game-root');
          try{ el.removeAttribute('data-mobile-game-root'); }catch(_attrError){}
        });
        desktopKeypadOpenGame = '';
        syncDesktopKeypadState();
        const scroller = q('.bl-scroll');
        if(scroller){
          scroller.style.removeProperty('top');
          scroller.style.removeProperty('overflow');
        }
        document.documentElement.style.removeProperty('overflow');
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('touch-action');
        resyncHeaderAfterMobileGameExit();
        window.setTimeout(resyncHeaderAfterMobileGameExit, 0);
        window.setTimeout(resyncHeaderAfterMobileGameExit, 80);
      }catch(_cleanupError){}
    }
    finishMobileExit();
    try{
      if(document.fullscreenElement && document.fullscreenElement.classList && document.fullscreenElement.classList.contains('game-play-root')){
        const exitPromise = document.exitFullscreen();
        if(exitPromise && typeof exitPromise.finally === 'function') exitPromise.finally(finishMobileExit);
        else window.setTimeout(finishMobileExit, 120);
      }
    }catch(_error){ window.setTimeout(finishMobileExit, 120); }
  }

  function requestNativeMobileFullscreen(root){
    if(!root || !isMobileGameViewport() || typeof document === 'undefined') return;
    try{
      if(!document.fullscreenEnabled || document.fullscreenElement || typeof root.requestFullscreen !== 'function') return;
      if(window.navigator && window.navigator.userActivation && !window.navigator.userActivation.isActive) return;
      root.requestFullscreen().catch(function(){});
    }catch(_error){}
  }

  function ensureMobileGameMode(gameId, options){
    if(!isMobileGameViewport()) return;
    const id = normaliseGameId(gameId);
    if(!id) return;
    const modeOptions = options || {};
    ensureGamePlayContract();
    const root = mobileGameRootElement(id);
    if(!root) return;
    qsa('.is-mobile-game-root').forEach(function(el){
      if(el !== root){
        el.classList.remove('is-mobile-game-root');
        try{ el.removeAttribute('data-mobile-game-root'); }catch(_attrError){}
      }
    });
    document.body.classList.add('bl-mobile-game-mode');
    document.body.setAttribute('data-mobile-game', id);
    root.classList.add('is-mobile-game-root');
    root.setAttribute('data-mobile-game-root', id);
    if(id !== 'ninja' && !q(':scope > .mobile-game-exit', root)){
      root.insertAdjacentHTML('afterbegin', '<button class="mobile-game-exit" data-exit-mobile-game-mode type="button" aria-label="Back to Games Overview">Back To Games Overview</button>');
    }
    if(id === 'ninja'){
      const genericExit=q(':scope > .mobile-game-exit',root);
      if(genericExit) genericExit.remove();
    }
    injectMobileGameControls(id);
    desktopKeypadOpenGame = '';
    syncMobileInputMode(id);
    syncDesktopKeypadState();
    // Mobile uses the in-page game view only. Native fullscreen is deliberately disabled
    // because it causes browser chrome/layout instability on touch devices.
  }
  function focusGamePlaySurface(gameId, opts){
    const id = normaliseGameId(gameId);
    if(!id) return;
    const options = opts || {};
    ensureGamePlayContract();
    if(currentTab !== 'games' || selectedGame !== id) selectGame(id);
    openGameCardPanel(id);
    ensureGamePlayContract();
    if(options.mobileMode !== false) ensureMobileGameMode(id);
    const target = gamePlaySurfaceElement(id) || gamePlayRootElement(id);
    if(!target) return;
    try{ if(target.tabIndex < 0) target.tabIndex = -1; target.focus({ preventScroll:true }); }catch(_error){}
    if(document.body && document.body.classList.contains('bl-mobile-game-mode')) return;
    if(options.scroll !== false && !options.preserveView) scrollToElementInPageScroller(target);
  }
  function gameEntryTargetElement(gameId){
    const id = normaliseGameId(gameId);
    if(!id) return null;
    ensureGamePlayContract();
    const panel = gamePanelElement(id);
    if(panel) return q('.game-header', panel) || panel;
    return gamePlayRootElement(id);
  }
  function focusGameEntry(gameId, opts){
    const id = normaliseGameId(gameId);
    if(!id) return;
    const options = opts || {};
    ensureGamePlayContract();
    if(currentTab !== 'games' || selectedGame !== id) selectGame(id);
    openGameCardPanel(id);
    ensureGamePlayContract();
    if(options.mobileMode !== false) ensureMobileGameMode(id);
    const focusTarget = gamePanelElement(id) || gamePlayRootElement(id);
    const scrollTarget = gameEntryTargetElement(id) || focusTarget;
    if(focusTarget){
      try{ if(focusTarget.tabIndex < 0) focusTarget.tabIndex = -1; focusTarget.focus({ preventScroll:true }); }catch(_error){}
    }
    if(document.body && document.body.classList.contains('bl-mobile-game-mode')){
      const root = mobileGameRootElement(id);
      try{ if(root && typeof root.scrollTo === 'function') root.scrollTo({ top:0, left:0, behavior:'auto' }); }catch(_scrollError){}
      return;
    }
    if(scrollTarget && options.scroll !== false && !options.preserveView) scrollToElementInPageScroller(scrollTarget);
  }
  function scrollGameCardIntoView(gameId){ focusGameEntry(gameId, { scroll:true, mobileMode:false }); }
  function focusGameCard(gameId){ focusGameEntry(gameId, { scroll:true, mobileMode:true }); }
  function readAutoNextSettings(){
    return { pairs:false, detectword:false, make24:false, trackcoin:false, ruleshift:false, blockgrid:false, coloursort:false, crossnumber:false };
  }
  function writeAutoNextSettings(){
    return autoNextSettings;
  }
  function autoNextEnabled(gameId){ return AUTO_NEXT_GAMES.includes(gameId) && !!autoNextSettings[gameId]; }
  function clearAutoNextTimer(gameId){
    if(!gameId || !autoNextTimers[gameId]) return;
    window.clearTimeout(autoNextTimers[gameId]);
    autoNextTimers[gameId] = 0;
  }

  function resetGameRoundToIdle(gameId){
    const id = normaliseGameId(gameId);
    if(!id) return;
    const profile=profiles[id];
    const clearSavedRound=function(){
      if(!profile || profile.activeRound==null) return;
      profile.activeRound=null;
      scheduleSave(id);
    };
    if(id === 'pairs'){
      clearAutoNextTimer('pairs');
      pairsBoardState = null;
      pairsIdleMessage = 'Choose a board tier and press New Game when you are ready.';
      clearSavedRound();
      return;
    }
    if(id === 'detectword'){
      clearAutoNextTimer('detectword');
      wordState = null;
      wordIdleMessage = 'Choose a letter tier and press New Game when you are ready.';
      clearSavedRound();
      return;
    }
    if(id === 'make24'){
      clearAutoNextTimer('make24');
      make24State = null;
      make24IdleMessage = 'Choose a number tier and press New Game when you are ready.';
      clearSavedRound();
      return;
    }
    if(id === 'trackcoin'){
      clearAutoNextTimer('trackcoin');
      cancelTrackCoinAnimation();
      trackCoinState = null;
      clearSavedRound();
      return;
    }
    if(id === 'ruleshift'){
      clearAutoNextTimer('ruleshift');
      clearRuleShiftTimer();
      ruleShiftState = null;
      ruleShiftIdleMessage = 'Choose a rule tier and press New Game when you are ready.';
      clearSavedRound();
    }
  }
  function autoNextTerminalReady(gameId){
    const registration=autoNextRegistrations[gameId];
    if(!registration || typeof registration.isTerminal!=='function') return false;
    try{return !!registration.isTerminal();}catch(_error){return false;}
  }
  function registerAutoNextGame(gameId,starter,isTerminal,delayMs){
    const id=String(gameId||'').trim().toLowerCase();
    if(!AUTO_NEXT_GAMES.includes(id) || typeof starter!=='function') return false;
    autoNextRegistrations[id]={
      starter:starter,
      isTerminal:typeof isTerminal==='function'?isTerminal:null,
      delayMs:Number(delayMs||AUTO_NEXT_DELAYS[id]||900)
    };
    if(autoNextEnabled(id) && autoNextTerminalReady(id)) scheduleRegisteredAutoNext(id);
    return true;
  }
  function scheduleRegisteredAutoNext(gameId,delayMs){
    const registration=autoNextRegistrations[gameId];
    if(!registration) return false;
    scheduleAutoNext(gameId,registration.starter,delayMs||registration.delayMs);
    return true;
  }
  function completeAutoNext(gameId,delayMs){
    if(!autoNextEnabled(gameId)) return false;
    return scheduleRegisteredAutoNext(gameId,delayMs);
  }
  function toggleAutoNext(gameId){
    if(!AUTO_NEXT_GAMES.includes(gameId)) return;
    autoNextSettings[gameId] = !autoNextSettings[gameId];
    if(!autoNextSettings[gameId]) clearAutoNextTimer(gameId);
    else if(autoNextTerminalReady(gameId)) scheduleRegisteredAutoNext(gameId);
    writeAutoNextSettings();
    renderAutoNextControls();
  }
  function realmHostMethod(method){
    const host = window.BaselineRealmHost;
    return host && typeof host[method] === 'function' ? host[method].bind(host) : null;
  }
  function syncRealmFullscreenControls(){
    const method = realmHostMethod('syncFullscreenControls');
    return method ? method() : undefined;
  }
  function syncGameButtonLabels(){
    [
      [refs.newPairsBoardBtn,'pairs'],
      [refs.newWordRoundBtn,'detectword'],
      [refs.newTrackCoinRoundBtn,'trackcoin'],
      [refs.newRuleShiftBtn,'ruleshift'],
      [refs.newMake24Btn,'make24']
    ].forEach(function(entry){
      const btn=entry[0];
      if(!btn) return;
      btn.classList.add('game-shell-action','game-shell-action--icon');
      setCompactActionButton(btn,'＋','New Game',SITEWIDE_START_HOTKEY_LABEL);
    });
    qsa('[data-desktop-keypad-toggle]').forEach(function(btn){
      const id = btn.getAttribute('data-desktop-keypad-toggle') || '';
      const root = gamePlayRootElement(id);
      const open = !!(root && root.classList.contains('desktop-keypad-open'));
      btn.setAttribute('aria-label',keypadButtonLabel(open));
      btn.title=keypadButtonLabel(open)+' — '+SITEWIDE_KEYBOARD_HOTKEY_LABEL;
      btn.innerHTML=keyboardIconMarkup(open);
      setHotkeyCaption(btn,SITEWIDE_KEYBOARD_HOTKEY_LABEL);
    });
    qsa('[data-game-fullscreen]').forEach(function(btn){
      const id=btn.getAttribute('data-game-fullscreen')||'';
      if(id==='ninja') return;
      const root=gamePlayRootElement(id);
      const active=!!(root && (document.fullscreenElement===root || root.classList.contains('recreation-mobile-pseudo-fullscreen')));
      const label=active?'Exit full screen':'Full screen';
      btn.setAttribute('aria-label',label);
      btn.title=label+' — '+SITEWIDE_FULLSCREEN_HOTKEY_LABEL;
      btn.innerHTML=fullscreenIconMarkup(label);
      setHotkeyCaption(btn,SITEWIDE_FULLSCREEN_HOTKEY_LABEL);
    });
    syncRealmFullscreenControls();
  }
  function renderAutoNextControls(){
    qsa('[data-auto-next-toggle]').forEach(function(btn){
      const gameId = btn.getAttribute('data-auto-next-toggle') || '';
      const enabled = autoNextEnabled(gameId);
      const label='Auto New Game: '+(enabled?'On':'Off');
      btn.setAttribute('aria-pressed', String(enabled));
      btn.setAttribute('aria-label',label);
      btn.classList.toggle('is-active', enabled);
      btn.classList.add('game-control-icon','game-shell-action','game-shell-action--icon');
      btn.innerHTML=compactGlyphMarkup('A',label);
      btn.title=label+' · '+SITEWIDE_AUTONEXT_HOTKEY_LABEL;
      setHotkeyCaption(btn, SITEWIDE_AUTONEXT_HOTKEY_LABEL);
    });
  }
  function scheduleAutoNext(gameId, starter, delayMs){
    if(!autoNextEnabled(gameId) || typeof starter !== 'function') return false;
    clearAutoNextTimer(gameId);
    const wait = Number(delayMs || AUTO_NEXT_DELAYS[gameId] || 900);
    autoNextTimers[gameId] = window.setTimeout(function(){
      autoNextTimers[gameId] = 0;
      if(!autoNextEnabled(gameId)) return;
      const active=activeGameIdForHotkeys();
      if(active && active!==gameId) return;
      if(autoNextRegistrations[gameId]?.isTerminal && !autoNextTerminalReady(gameId)) return;
      focusGamePlaySurface(gameId, { scroll:false, mobileMode:true });
      window.setTimeout(function(){
        if(!autoNextEnabled(gameId)) return;
        starter();
        focusGamePlaySurface(gameId, { scroll:false, mobileMode:true });
      }, 80);
    }, wait);
    return true;
  }
  function publishAutoNextApi(){
    registerAutoNextGame('pairs',startPairsBoard,function(){return !!(pairsBoardState&&pairsBoardState.completed);});
    registerAutoNextGame('detectword',startWordRound,function(){
      if(!wordState) return false;
      const guesses=Array.isArray(wordState.guesses)?wordState.guesses:[];
      return guesses.some(function(entry){return entry&&entry.word===wordState.secret;}) || guesses.length>=Number(wordState.maxGuesses||0);
    });
    registerAutoNextGame('make24',startMake24Puzzle,function(){return !!(make24State&&make24State.completed);});
    registerAutoNextGame('trackcoin',function(){startTrackCoinRound({startWindowMs:3000});},function(){return !!(trackCoinState&&trackCoinState.resolved&&!trackCoinState.reviewActive);},AUTO_NEXT_DELAYS.trackcoin);
    registerAutoNextGame('ruleshift',startRuleShiftRound,function(){return !!(ruleShiftState&&ruleShiftState.finished);});
    window.BaselineGamesAutoNext = Object.freeze({
      games:AUTO_NEXT_GAMES.slice(),
      enabled:autoNextEnabled,
      toggle:toggleAutoNext,
      clear:clearAutoNextTimer,
      schedule:scheduleAutoNext,
      register:registerAutoNextGame,
      complete:completeAutoNext,
      sync:renderAutoNextControls,
      label:autoNextButtonLabel
    });
  }
  function getGamePanelConfig(gameId){ return GAME_PANEL_MAP[gameId] || null; }
  function normaliseGameId(gameId){
    const value = String(gameId || '').trim().toLowerCase();
    if(GAME_IDS.includes(value)) return value;
    return GAME_ROUTE_SLUG_TO_ID[value] || '';
  }
  function activeGameIdForHotkeys(){
    const selected = normaliseGameId(selectedGame);
    if(selected) return selected;
    try{
      const hash = String(window.location.hash || '').replace(/^#/, '');
      if(hash){
        if(GAME_IDS.includes(hash)) return hash;
        const params = new URLSearchParams(hash);
        const fromHash = normaliseGameId(params.get('game') || '');
        if(fromHash) return fromHash;
      }
    }catch(_error){}
    const crossnumberPanel = document.getElementById('crossnumberPanel');
    if(crossnumberPanel && !crossnumberPanel.hidden) return 'crossnumber';
    const activePanel = q('.game-panel.is-active');
    if(activePanel){
      return activePanel.id === 'pairsPanel' ? 'pairs'
        : activePanel.id === 'detectwordPanel' ? 'detectword'
        : activePanel.id === 'make24Panel' ? 'make24'
        : activePanel.id === 'trackcoinPanel' ? 'trackcoin'
        : activePanel.id === 'ruleshiftPanel' ? 'ruleshift'
        : activePanel.id === 'blockGridPanel' ? 'blockgrid'
        : activePanel.id === 'colourSortPanel' ? 'coloursort'
        : activePanel.id === 'ninjaPanel' ? 'ninja'
        : '';
    }
    return '';
  }
  function startActiveGameFromHotkey(gameId){
    const id = normaliseGameId(gameId);
    if(id === 'pairs'){ startPairsBoard(); return true; }
    if(id === 'detectword'){ startWordRound(); return true; }
    if(id === 'make24'){ startMake24Puzzle(); return true; }
    if(id === 'trackcoin'){ startTrackCoinRound(); return true; }
    if(id === 'ruleshift'){ startRuleShiftRound(); return true; }
    return false;
  }
  function toggleAutoNextForActiveGame(gameId){
    const raw = String(gameId || '').trim().toLowerCase();
    const id = AUTO_NEXT_GAMES.includes(raw) ? raw : normaliseGameId(raw);
    if(!AUTO_NEXT_GAMES.includes(id)) return false;
    toggleAutoNext(id);
    return true;
  }
  function normalisePanelId(gameId, panelId){ const config = getGamePanelConfig(gameId); if(!config) return ''; const value = String(panelId || ''); return config.panels.includes(value) ? value : config.defaultPanel; }
  function currentPanelIdForGame(gameId){ const config = getGamePanelConfig(gameId); return config ? normalisePanelId(gameId, config.get()) : ''; }

  function recreationBaseRoute(){ return '/baseline-recreation'; }
  function externalGameRouteSlugFromLocation(){
    try{
      const path=String(window.location.pathname||'').toLowerCase().replace(/\/+$/,'');
      const prefix='/baseline-recreation/games/';
      if(path.indexOf(prefix)!==0) return '';
      const routeSlug=String(path.slice(prefix.length).split('/')[0]||'').trim();
      return EXTERNAL_GAME_ROUTE_SLUGS.has(routeSlug) ? routeSlug : '';
    }catch(_error){ return ''; }
  }
  function recreationCleanRouteForState(){
    const base = recreationBaseRoute();
    let route = base + '/system';
    const params = new URLSearchParams();
    let currentParams = null;
    try{ currentParams = new URLSearchParams(window.location.search || ''); }catch(_error){ currentParams = new URLSearchParams(); }

    const externalGameExtension = String(document.documentElement.getAttribute('data-game-extension-open') || '').trim() || externalGameRouteSlugFromLocation();
    const dartsFocusedOpen = document.documentElement.hasAttribute('data-darts-focused-open');
    const badmintonFocusedOpen = document.documentElement.hasAttribute('data-badminton-focused-open');

    if(currentTab === 'concepts'){
      const currentPath=String(window.location.pathname||'').replace(/\/+$/,'');
      route = /^\/baseline-recreation\/concepts(?:\/.*)?$/i.test(currentPath) ? currentPath : (base + '/concepts');
    }else if(currentTab === 'puzzles'){
      const currentPath=String(window.location.pathname||'').replace(/\/+$/,'');
      route = /^\/baseline-recreation\/puzzles(?:\/.*)?$/i.test(currentPath) ? currentPath : (base + '/puzzles');
      const jigsawPanel=String(currentParams.get('jigsaw-panel')||'').trim();
      if(jigsawPanel) params.set('jigsaw-panel',jigsawPanel);
    }else if(currentTab === 'games'){
      if(externalGameExtension){
        route = base + '/games/' + externalGameExtension;
        const view = String(currentParams.get('view') || '').trim();
        if(view) params.set('view', view);
      }else if(dartsFocusedOpen){
        route = base + '/games/darts-focused';
      }else if(badmintonFocusedOpen){
        route = base + '/games/badminton-focused';
      }else if(!selectedGame) route = base + '/games';
      else{
        route = base + '/games/' + (GAME_ID_TO_ROUTE_SLUG[selectedGame] || selectedGame);
        const config = getGamePanelConfig(selectedGame);
        const panelId = currentPanelIdForGame(selectedGame);
        if(config && panelId && panelId !== config.defaultPanel) params.set('panel', panelId);
        if(selectedGame === 'ninja'){
          const scene = String(currentParams.get('scene') || '').trim();
          if(['ninja-training','exploration','workshop','calorie-escape','tactical-operations'].includes(scene)) params.set('scene', scene);
        }
      }
    }

    const query = params.toString();
    return query ? (route + '?' + query) : route;
  }
  const EXTERNAL_GAME_ROUTE_SLUGS = new Set(['block-grid','colour-sort','darts-focused','badminton-focused']);
  function recreationStateFromCleanPath(){
    try{
      const path = String(window.location.pathname || '').toLowerCase().replace(/\/+$/,'');
      const base = '/baseline-recreation';
      if(path === base || path === base + '/system') return { tab:'system', game:'', panel:'' };
      if(path === base + '/concepts' || path.indexOf(base + '/concepts/') === 0) return { tab:'concepts', game:'', panel:'' };
      if(path === base + '/puzzles' || path.indexOf(base + '/puzzles/') === 0) return { tab:'puzzles', game:'', panel:'' };
      if(path === base + '/games') return { tab:'games', game:'', panel:'' };
      if(path.indexOf(base + '/games/') !== 0) return null;
      const rest = path.slice((base + '/games/').length).replace(/^\/+/, '');
      const routeSlug = String(rest.split('/')[0] || '').toLowerCase();
      if(EXTERNAL_GAME_ROUTE_SLUGS.has(routeSlug)) return { tab:'games', game:'', panel:'', externalGame:routeSlug };
      const game = normaliseGameId(routeSlug);
      let requestedPanel = '';
      try{ requestedPanel = new URLSearchParams(window.location.search || '').get('panel') || ''; }catch(_error){}
      return game ? { tab:'games', game:game, panel:normalisePanelId(game, requestedPanel) } : { tab:'games', game:'', panel:'' };
    }catch(_error){ return null; }
  }
  function legacyRecreationStateFromHash(){
    const raw = String(window.location.hash || '').replace(/^#/, '');
    if(!raw) return null;
    if(GAME_IDS.includes(raw)) return { tab:'games', game:raw, panel:normalisePanelId(raw, '') };
    try{
      const params = new URLSearchParams(raw);
      const requestedTab = String(params.get('tab') || '').toLowerCase();
      const game = params.has('game') ? normaliseGameId(params.get('game') || '') : '';
      const panel = game ? normalisePanelId(game, params.get('panel') || '') : '';
      return { tab:requestedTab === 'concepts' ? 'concepts' : (requestedTab === 'puzzles' ? 'puzzles' : ((requestedTab === 'games' || game) ? 'games' : 'system')), game:game, panel:panel };
    }catch(_error){ return null; }
  }

  function buildHashState(){
    const params = new URLSearchParams();
    params.set('tab', currentTab === 'concepts' ? 'concepts' : (currentTab === 'puzzles' ? 'puzzles' : (currentTab === 'games' ? 'games' : 'system')));
    if(currentTab === 'games' && selectedGame){
      params.set('game', selectedGame);
      const panelId = currentPanelIdForGame(selectedGame);
      if(panelId) params.set('panel', panelId);
    }
    return params.toString();
  }
  function syncHashState(mode){
    if(suspendHashSync || typeof window === 'undefined') return;
    const nextUrl = recreationCleanRouteForState();
    const currentUrl = window.location.pathname + window.location.search;
    if(currentUrl === nextUrl && !(window.location.hash || '')) return;
    const shouldPush = mode === 'push' && window.history && typeof window.history.pushState === 'function';
    if(shouldPush) window.history.pushState({ baselineRecreation:true }, '', nextUrl);
    else if(window.history && typeof window.history.replaceState === 'function') window.history.replaceState({ baselineRecreation:true }, '', nextUrl);
    else window.location.hash = '#' + buildHashState();
  }
  function applyHashState(){
    if(typeof window === 'undefined') return;
    const cleanState = recreationStateFromCleanPath();
    const legacyState = cleanState || legacyRecreationStateFromHash();
    if(legacyState){
      currentTab = legacyState.tab === 'concepts' ? 'concepts' : (legacyState.tab === 'puzzles' ? 'puzzles' : (legacyState.tab === 'games' ? 'games' : 'system'));
      selectedGame = currentTab === 'games' ? normaliseGameId(legacyState.game || '') : '';
      if(selectedGame){
        const config = getGamePanelConfig(selectedGame);
        if(config) config.set(legacyState.panel || normalisePanelId(selectedGame, ''));
      }
      return legacyState;
    }
    currentTab = 'system';
    selectedGame = '';
    return { tab:'system', game:'', panel:'' };
  }
  function restoreFromHashState(options){
    const opts=options||{};
    suspendHashSync = true;
    const restoredState=applyHashState();
    activateTab(currentTab);
    const routedGame=selectedGame;
    if(opts.useStored===true && routedGame==='pairs'){
      pairsBoardState=null;
      pairsIdleMessage='Choose a board tier and press New Game when you are ready.';
    }
    if(!restoredState?.externalGame) selectGame(routedGame);
    suspendHashSync = false;
    if(window.location.hash) syncHashState('replace');
    safeRenderAll();
  }
  function pushRecreationGameEntry(){
    if(typeof window === 'undefined' || !window.history || !selectedGame) return;
    if(typeof window.history.pushState !== 'function') return;
    const nextUrl = recreationCleanRouteForState();
    const currentUrl = window.location.pathname + window.location.search + window.location.hash;
    if(currentUrl === nextUrl) return;
    try{
      window.history.pushState({ baselineRecreation:true, baselineRecreationGameEntry:true, game:selectedGame, panel:currentPanelIdForGame(selectedGame) || '' }, '', nextUrl);
    }catch(_error){ syncHashState('push'); }
  }
  function ensureRecreationBackEntry(){ return; }
  function escapeHtml(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }
  function clamp(value, min, max){ return Math.max(min, Math.min(max, value)); }
  function sum(arr){ return arr.reduce((a,b)=>a+b,0); }
  function formatInt(value){ return Math.round(Number(value || 0)).toLocaleString('en-GB'); }
  function formatCompact(value){ const n=Number(value||0), a=Math.abs(n); if(a>=1e12)return (n/1e12).toFixed(a>=1e13?0:1).replace(/\.0$/,'')+'T'; if(a>=1e9)return (n/1e9).toFixed(a>=1e10?0:1).replace(/\.0$/,'')+'B'; if(a>=1e6)return (n/1e6).toFixed(a>=1e7?0:1).replace(/\.0$/,'')+'M'; if(a>=1e3)return (n/1e3).toFixed(a>=1e4?0:1).replace(/\.0$/,'')+'K'; return formatInt(n); }
  const GAME_TEMPLATE_CONTRACT = Object.freeze({
    profileFields:['level','xp','skillPoints','cleanWinStreak'],
    runFields:['lastMessage','hadFailure','roundBank'],
    statusPattern:['level','xp','tier','streak','cleanStreak','cleanBonus'],
    cleanStreak:{ label:'Clean Streak Bonus', perStepPct:5, maxPct:100 },
    rewardRule:'Clean completions increase the clean streak. Failed or wrong rounds reset it. Every game must show one Clean Streak Bonus value in its status/progress output.'
  });
  function cleanWinBonusPct(streak){
    const clean = GAME_TEMPLATE_CONTRACT.cleanStreak;
    return Math.min(clean.maxPct, Math.max(0, Math.round(Number(streak || 0)) * clean.perStepPct));
  }
  function cleanBonusStatusText(profile){
    const streak = Math.max(0, Math.round(Number(profile && profile.cleanWinStreak || 0)));
    return 'Clean Streak Bonus +' + cleanWinBonusPct(streak) + '%';
  }
  function cleanBonusRewardText(streak){
    const pct = cleanWinBonusPct(streak);
    return pct ? ' · Clean Streak Bonus +' + pct + '%' : '';
  }
  function previousRoundSectionHtml(profile,extraRows){
    const previousXp=Math.max(0,Math.round(Number(profile&&profile.lastRoundXp||0)));
    const rows=[['Exp',previousXp+' XP']].concat(Array.isArray(extraRows)?extraRows:[]);
    return '<section class="round-status-previous" aria-label="Previous Round">'
      + '<div class="round-status-previous-heading">Previous Round</div>'
      + '<div class="round-status-previous-grid">'
      + rows.map(function(row){
          const label=Array.isArray(row)?row[0]:'';
          const value=Array.isArray(row)?row[1]:'';
          return '<div><span>'+escapeHtml(label||'')+'</span><strong>'+escapeHtml(value==null?'—':String(value))+'</strong></div>';
        }).join('')
      + '</div></section>';
  }
  function coherentRoundStatusHtml(label,message,profile,tierName,_previousLabel,previousRows){
    const source=String(message||'').trim();
    const rankMatch=source.match(/(?:Player Rank(?: up)?|Rank)\s*\+(\d+)/i);
    const cleaned=source
      .replace(/\s*[·.]?\s*Clean Streak Bonus \+\d+%/ig,'')
      .replace(/\s*·?\s*\+\d+\s*XP/ig,'')
      .replace(/\s*[·.]?\s*(?:Player Rank(?: up)?|Rank)\s*\+\d+/ig,'')
      .replace(/\s+\./g,'.')
      .replace(/\s*·\s*$/,'')
      .trim();
    const cleanStreak=Math.max(0,Math.round(Number(profile&&profile.cleanWinStreak||0)));
    const winningStreak=Math.max(0,Math.round(Number(profile&&profile.currentStreak!==undefined?profile.currentStreak:cleanStreak)));
    const rankUp=rankMatch ? '<div class="round-status-rankup">Ranked Up! Player Rank '+Math.max(1,Math.round(Number(profile&&profile.level||1)))+'</div>' : '';
    return '<div class="round-status-heading">'+escapeHtml(label||'Round Status')+'</div>'
      + (cleaned?'<div class="round-status-outcome">'+escapeHtml(cleaned)+'</div>':'')
      + rankUp
      + previousRoundSectionHtml(profile,previousRows)
      + '<div class="round-status-metrics">'
      + '<div><span>Current Tier</span><strong>'+escapeHtml(tierName||'—')+'</strong></div>'
      + '<div><span>Winning Streak</span><strong>'+winningStreak+'</strong></div>'
      + '<div><span>Clean Streak Bonus</span><strong>'+cleanWinBonusPct(cleanStreak)+'%</strong></div>'
      + '</div>';
  }

  const FULLSCREEN_WINDOW_TABS=Object.freeze({
    pairs:{root:'pairsGameCard',tabs:[['game','Game'],['skills','Skills','pairsSkillCard'],['tiers','Tiers','pairsTierCard'],['progress','Progress','pairsProgressCard']]},
    detectword:{root:'wordGameCard',tabs:[['game','Game'],['skills','Skills','wordSkillCard'],['tiers','Tiers','wordTierCard'],['progress','Progress','wordProgressCard']]},
    make24:{root:'make24GameCard',tabs:[['game','Game'],['skills','Skills','make24SkillCard'],['tiers','Tiers','make24TierCard'],['progress','Progress','make24ProgressCard']]},
    trackcoin:{root:'trackCoinGamePanel',tabs:[['game','Game'],['skills','Skills','trackCoinSkillPanel'],['tiers','Tiers','trackCoinTierPanel'],['progress','Progress','trackCoinProgressPanel']]},
    ruleshift:{root:'ruleShiftGameCard',tabs:[['game','Game'],['skills','Skills','ruleShiftSkillCard'],['tiers','Tiers','ruleShiftTierCard'],['progress','Progress','ruleShiftProgressCard']]},
    blockgrid:{root:'blockGridGameCard',tabs:[['game','Game'],['skills','Skills','blockGridSkillsCard'],['tiers','Tiers','blockGridModesCard'],['progress','Progress','blockGridProgressCard']]},
    coloursort:{root:'colourSortGameCard',tabs:[['game','Game'],['tiers','Tiers','colourSortLevelsCard'],['progress','Progress','colourSortProgressCard']]},
    crossnumber:{root:'crossnumberGamePanel',tabs:[['game','Game'],['skills','Skills','crossnumberSkillPanel'],['tiers','Tiers','crossnumberTierPanel'],['progress','Progress','crossnumberProgressPanel']]}
  });
  function fullscreenWindowConfig(gameId){
    const id=normaliseGameId(gameId)||String(gameId||'').trim().toLowerCase();
    return {id:id,config:FULLSCREEN_WINDOW_TABS[id]||null};
  }
  function cloneFullscreenPanelHtml(sourceId){
    const source=document.getElementById(sourceId);
    if(!source) return '<div class="fullscreen-window-empty">This section is not available.</div>';
    const clone=source.cloneNode(true);
    clone.removeAttribute('id');
    clone.removeAttribute('hidden');
    clone.querySelectorAll('[id]').forEach(function(node){node.removeAttribute('id');});
    clone.querySelectorAll('[aria-controls],[aria-labelledby],[for]').forEach(function(node){
      node.removeAttribute('aria-controls');
      node.removeAttribute('aria-labelledby');
      node.removeAttribute('for');
    });
    return clone.innerHTML;
  }
  function fullscreenGameIdFromElement(element){
    if(!element) return '';
    const found=Object.entries(FULLSCREEN_WINDOW_TABS).find(function(entry){
      return entry[1].root===element.id;
    });
    return found?found[0]:'';
  }
  function setFullscreenWindowView(gameId,view){
    const pair=fullscreenWindowConfig(gameId);
    const id=pair.id,config=pair.config;
    if(!config) return;
    const root=document.getElementById(config.root);
    if(!root||activeRecreationFullscreenRoot()!==root) return;
    const available=config.tabs.map(function(tab){return tab[0];});
    const next=available.includes(view)?view:'game';
    root.setAttribute('data-fullscreen-window-view',next);
    root.style.setProperty('--fullscreen-tab-count',String(Math.max(1,config.tabs.length)));
    root.querySelectorAll(':scope > .game-fullscreen-window-tabs [data-fullscreen-window-tab]').forEach(function(button){
      const selected=button.getAttribute('data-fullscreen-window-tab')===next;
      button.classList.toggle('is-active',selected);
      button.setAttribute('aria-selected',String(selected));
      button.tabIndex=selected?0:-1;
    });
    const pane=root.querySelector(':scope > .game-fullscreen-window-tabs > .game-fullscreen-window-pane');
    if(!pane) return;
    if(next==='game'){
      pane.hidden=true;
      pane.innerHTML='';
      return;
    }
    const entry=config.tabs.find(function(tab){return tab[0]===next;});
    pane.hidden=false;
    pane.innerHTML=entry&&entry[2]?cloneFullscreenPanelHtml(entry[2]):'<div class="fullscreen-window-empty">This section is not available.</div>';
  }
  function syncFullscreenWindowTabs(preferredGameId){
    const fullscreen=activeRecreationFullscreenRoot();
    qsa('.game-fullscreen-window-tabs').forEach(function(shell){
      if(!fullscreen||!fullscreen.contains(shell)) shell.remove();
    });
    if(!fullscreen) return;
    const inferred=fullscreenGameIdFromElement(fullscreen);
    const pair=fullscreenWindowConfig(preferredGameId||inferred);
    const id=pair.id,config=pair.config;
    if(!config||fullscreen.id!==config.root) return;
    let shell=fullscreen.querySelector(':scope > .game-fullscreen-window-tabs');
    const current=fullscreen.getAttribute('data-fullscreen-window-view')||'game';
    if(!shell){
      shell=document.createElement('div');
      shell.className='game-fullscreen-window-tabs';
      shell.setAttribute('data-fullscreen-window-tabs',id);
      fullscreen.appendChild(shell);
    }
    shell.innerHTML='<div class="game-fullscreen-window-tabbar" role="tablist" aria-label="Game sections">'
      + config.tabs.map(function(tab){
          return '<button type="button" role="tab" data-fullscreen-window-tab="'+tab[0]+'">'+tab[1]+'</button>';
        }).join('')
      + '</div>'
      + (fullscreen.classList.contains('recreation-mobile-pseudo-fullscreen') ? '<button type="button" class="action ghost recreation-mobile-fullscreen-close" data-game-fullscreen="'+id+'" aria-label="Exit full screen">Exit Full Screen</button>' : '')
      + '<section class="game-fullscreen-window-pane" aria-live="polite"></section>';
    setFullscreenWindowView(id,current);
  }
  window.BaselineRoundStatusTabs=Object.freeze({
    previousRoundHtml:previousRoundSectionHtml
  });
  window.BaselineFullscreenTabs=Object.freeze({
    sync:syncFullscreenWindowTabs,
    setView:setFullscreenWindowView
  });
  function shuffle(list){
    const copy = list.slice();
    for(let i = copy.length - 1; i > 0; i -= 1){
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i]; copy[i] = copy[j]; copy[j] = tmp;
    }
    return copy;
  }
  function coherentProgressHtml(profile,title,stats){
    const p=progressionSnapshot(profile);
    const statHtml=(stats||[]).map(function(item){
      return '<div class="coherent-progress-stat"><span>' + escapeHtml(item[0]) + '</span><strong>' + escapeHtml(item[1]) + '</strong></div>';
    }).join('');
    return '<section class="coherent-progress-overview">' +
      '<div class="coherent-progress-heading"><div><span class="coherent-progress-kicker">' + escapeHtml(title||'Progress') + '</span><strong>Player Rank ' + p.level + '</strong></div><div class="coherent-progress-next">' + p.remaining + ' XP to Player Rank ' + (p.level+1) + '</div></div>' +
      '<div class="coherent-progress-xp-meta"><span>' + p.xp + ' / ' + p.needed + ' XP</span><span>' + Math.round(p.pct) + '%</span></div>' +
      '<div class="coherent-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + p.needed + '" aria-valuenow="' + p.xp + '" aria-label="' + escapeHtml(title||'Game') + ' experience"><span style="width:' + p.pct + '%"></span></div>' +
    '</section>' +
    '<div class="coherent-progress-grid">' + statHtml + '</div>';
  }

  function renderCompactGameXp(gameId,profile){
    const root=q('[data-game-play-root="' + gameId + '"]');
    if(!root||!profile) return;
    const p=progressionSnapshot(profile);
    let node=root.querySelector('[data-live-xp="' + gameId + '"]');
    if(!node){
      node=document.createElement('div');
      node.className='game-live-xp';
      node.setAttribute('data-live-xp',gameId);
      const toolbar=root.querySelector('.game-toolbar');
      if(toolbar&&toolbar.nextSibling) root.insertBefore(node,toolbar.nextSibling);
      else if(toolbar) toolbar.insertAdjacentElement('afterend',node);
      else root.prepend(node);
    }
    node.innerHTML='<strong>Player Rank ' + p.level + '</strong><div class="game-live-xp__bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + p.needed + '" aria-valuenow="' + p.xp + '"><span style="width:' + p.pct + '%"></span></div><span>' + p.xp + ' / ' + p.needed + ' XP</span>';
  }
  function getAuth(){
    try{
      const storage=serverStorageAuthority();
      if(storage && typeof storage.isReady==='function' && storage.isReady() && typeof storage.isAuthenticated==='function'){
        return { authed:!!storage.isAuthenticated(), name:'', email:'' };
      }
    }catch(_e){}
    try{
      if(window.BASELINE_auth && typeof window.BASELINE_auth.get === 'function'){
        const auth = window.BASELINE_auth.get() || {};
        return { authed:!!auth.authed, name:String(auth.name || ''), email:String(auth.email || '') };
      }
    }catch(_e){}
    return { authed:false, name:'', email:'' };
  }
  function serverStorageAuthority(){
    const authority=window.BaselineGameStorage;
    return authority&&typeof authority.canPlay==='function'?authority:null;
  }
  async function apiJson(url, options){
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timeoutId = controller ? window.setTimeout(function(){ try{ controller.abort(); }catch(_e){} }, 2600) : 0;
    try{
      const response = await fetch(url, Object.assign({ credentials:'same-origin' }, options || {}, controller ? { signal:controller.signal } : {}));
      const data = await response.json().catch(() => ({}));
      if(!response.ok || !data.ok) throw new Error((data && data.error) || 'request_failed');
      return data;
    }finally{
      if(timeoutId) window.clearTimeout(timeoutId);
    }
  }

  const CORE_PROFILE_RULES_FACTORY = window.BASELINE_GAMES_PROFILE_RULES || null;
  if(!CORE_PROFILE_RULES_FACTORY || typeof CORE_PROFILE_RULES_FACTORY.create !== 'function') throw new Error('games_profile_rules_authority_missing');
  const CORE_PROFILE_RULES = CORE_PROFILE_RULES_FACTORY.create({
    config:CORE_GAME_CONFIG,
    progression:PROGRESSION_RULES,
    evaluateWordGuess:evaluateWordGuess,
    normaliseTrackCoinSpeedPercent:trackCoinNormaliseSpeedPercent,
    trackCoinBaseSpeedPercent:TRACKCOIN_BASE_SPEED_PERCENT
  });
  const defaultPairsProfile = CORE_PROFILE_RULES.defaultPairsProfile;
  const defaultMake24Profile = CORE_PROFILE_RULES.defaultMake24Profile;
  const defaultWordProfile = CORE_PROFILE_RULES.defaultWordProfile;
  const defaultRuleShiftProfile = CORE_PROFILE_RULES.defaultRuleShiftProfile;
  const defaultTrackCoinProfile = CORE_PROFILE_RULES.defaultTrackCoinProfile;
  const normalisePairsProfile = CORE_PROFILE_RULES.normalisePairsProfile;
  const normaliseMake24Profile = CORE_PROFILE_RULES.normaliseMake24Profile;
  const normaliseWordProfile = CORE_PROFILE_RULES.normaliseWordProfile;
  const normaliseRuleShiftProfile = CORE_PROFILE_RULES.normaliseRuleShiftProfile;
  const normaliseTrackCoinProfile = CORE_PROFILE_RULES.normaliseTrackCoinProfile;
  const highestUnlockedTrackCoinTier = CORE_PROFILE_RULES.highestUnlockedTrackCoinTier;
  if(typeof highestUnlockedTrackCoinTier !== 'function') throw new Error('games_profile_trackcoin_unlock_authority_missing');







  function fallbackNinjaProfile(){
    return {
      app:'ninja', coins:0, xp:0, level:1, stage:1, enemyHp:0, highestStage:1, totalKills:0, currentStreak:0, bestStreak:0, cleanWinStreak:0, bossesDefeated:0, totalCoinsEarned:0,
      prestigeCount:0, spirit:0, upgrades:{ blade:0, drills:0, treasury:0, meditation:0, breaker:0 }, spiritShop:{ focus:0, fortune:0, vigor:0, ember:0, tents:0, mark:0 },
      workshop:{ crafting:1, tailoring:1, cooking:1, alchemy:1 },
      exploration:{ map:1, step:0, maxSteps:6, event:'idle', enemyHp:0, enemyMaxHp:0, enemyName:'', routeLog:'Step forward from Basecamp to begin the route.', loot:0, relics:0, mapsCleared:0, merchantVisits:0, chestsFound:0 },
      lastSeenAt:0, bonusCache:{ unlockedTraits:[] }, offlineSummary:'', prestigeEarnedTotal:0
    };
  }
  function defaultNinjaProfile(){
    const method = realmHostMethod('defaultLegacyProfile');
    return method ? method() : fallbackNinjaProfile();
  }



  function reconcileAllSkillProfiles(){
    if(profiles.pairs) reconcileSkillPoints(profiles.pairs, PAIRS_SKILLS);
    if(profiles.make24) reconcileSkillPoints(profiles.make24, MAKE24_SKILLS);
    if(profiles.detectword) reconcileSkillPoints(profiles.detectword, WORD_SKILLS);
    if(profiles.trackcoin) reconcileSkillPoints(profiles.trackcoin, TRACKCOIN_SKILLS);
    if(profiles.ruleshift) reconcileSkillPoints(profiles.ruleshift, RULESHIFT_SKILLS);
  }







  function readTrackCoinStorage(){
    return normaliseTrackCoinProfile(readGuestProfile('trackcoin') || defaultTrackCoinProfile());
  }
  function writeTrackCoinStorage(profile){
    writeGuestProfile('trackcoin',normaliseTrackCoinProfile(profile));
  }



  function normaliseFallbackNinjaProfile(data){
    const source = data && typeof data === 'object' ? data : {};
    const realm = source.realm && typeof source.realm === 'object' ? source.realm : {};
    const wallet = realm.wallet && typeof realm.wallet === 'object' ? realm.wallet : {};
    const training = realm.ninjaTraining && typeof realm.ninjaTraining === 'object' ? realm.ninjaTraining : {};
    const base = fallbackNinjaProfile();
    const merged = Object.assign({}, base, source);
    const numberValue = function(primary, nested, fallback){ const value = primary !== undefined ? primary : (nested !== undefined ? nested : fallback); const number = Number(value); return Number.isFinite(number) ? number : fallback; };
    merged.coins = Math.max(0, Math.round(numberValue(source.coins, wallet.coins, 0)));
    merged.spirit = Math.max(0, Math.round(numberValue(source.spirit, wallet.spirit, 0)));
    merged.xp = Math.max(0, Math.round(numberValue(source.xp, training.xp, 0)));
    merged.level = Math.max(1, Math.round(numberValue(source.level, training.level, 1)));
    merged.stage = Math.max(1, Math.round(numberValue(source.stage, training.stage, 1)));
    merged.enemyHp = Math.max(0, numberValue(source.enemyHp, training.enemyHp, 0));
    merged.highestStage = Math.max(merged.stage, Math.round(numberValue(source.highestStage, training.highestStage, merged.stage)));
    ['totalKills','currentStreak','bestStreak','cleanWinStreak','bossesDefeated','totalCoinsEarned','prestigeCount','prestigeEarnedTotal','lastSeenAt'].forEach(function(key){ merged[key] = Math.max(0, Math.round(numberValue(source[key], training[key], base[key] || 0))); });
    merged.offlineSummary = String(source.offlineSummary !== undefined ? source.offlineSummary : (training.offlineSummary || ''));
    merged.upgrades = Object.assign({}, base.upgrades, training.upgrades || {}, source.upgrades || {});
    Object.keys(base.upgrades).forEach(function(key){ merged.upgrades[key] = Math.max(0, Math.round(Number(merged.upgrades[key] || 0))); });
    merged.spiritShop = Object.assign({}, base.spiritShop, training.spiritShop || {}, source.spiritShop || {});
    Object.keys(base.spiritShop).forEach(function(key){ merged.spiritShop[key] = Math.max(0, Math.round(Number(merged.spiritShop[key] || 0))); });
    merged.workshop = Object.assign({}, base.workshop, realm.workshop || {}, source.workshop || {});
    Object.keys(base.workshop).forEach(function(key){ merged.workshop[key] = Math.max(1, Math.round(Number(merged.workshop[key] || 1))); });
    merged.exploration = Object.assign({}, base.exploration, realm.exploration || {}, source.exploration || {});
    merged.bonusCache = Object.assign({ unlockedTraits:[] }, training.bonusCache || {}, source.bonusCache || {});
    if(!Array.isArray(merged.bonusCache.unlockedTraits)) merged.bonusCache.unlockedTraits = [];
    if(source.realm && typeof source.realm === 'object') merged.realm = source.realm;
    return merged;
  }
  function normaliseNinjaProfile(data){
    const method = realmHostMethod('normaliseLegacyProfile');
    return method ? method(data) : normaliseFallbackNinjaProfile(data);
  }
  function normaliseProfile(app, data){
    if(app === 'pairs') return normalisePairsProfile(data);
    if(app === 'make24') return normaliseMake24Profile(data);
    if(app === 'detectword') return normaliseWordProfile(data);
    if(app === 'trackcoin') return normaliseTrackCoinProfile(data);
    if(app === 'ruleshift') return normaliseRuleShiftProfile(data);
    return normaliseNinjaProfile(data);
  }
  function defaultProfileForApp(app){
    return normaliseProfile(app, app === 'pairs' ? defaultPairsProfile() : app === 'make24' ? defaultMake24Profile() : app === 'detectword' ? defaultWordProfile() : app === 'trackcoin' ? defaultTrackCoinProfile() : app === 'ruleshift' ? defaultRuleShiftProfile() : defaultNinjaProfile());
  }

  async function loadProfile(app){
    const authority=serverStorageAuthority();
    const serverProfile=authority?.getProfile?.(app);
    const temporary=readGuestProfile(app);
    const fallback=app==='trackcoin'?readTrackCoinStorage():(temporary || defaultProfileForApp(app));
    profiles[app]=normaliseProfile(app,serverProfile || fallback || defaultProfileForApp(app));
    // During an in-page auth/storage re-hydration, retain the current active
    // round instead of replacing it with an older account snapshot. Hard
    // reload durability is handled by immediate active-round server writes.
    if(temporary && typeof temporary==='object' && Object.prototype.hasOwnProperty.call(temporary,'activeRound')){
      profiles[app].activeRound=temporary.activeRound;
    }
    writeGuestProfile(app,profiles[app]);
  }

  function safeRenderAll(){
    try{ renderAll(); }catch(error){ try{ console.error('baseline-recreation render failure', error); }catch(_e){} }
  }

  async function hydrateProfiles(){
    authState = getAuth();
    await Promise.allSettled(GAME_APPS.map(loadProfile));
    pairsBoardState = null;
    make24State = null;
    wordState = null;
    trackCoinState = null;
    ruleShiftState = null;
    restoreSavedCoreRounds();
    resolveNinjaBonuses();
    applyOfflineNinjaProgress();
  }
  async function loadAllProfiles(){
    await hydrateProfiles();
    renderAuthState();
    safeRenderAll();
  }

  function authStateKey(value){
    const source=value||{};
    return source.authed?'1':'0';
  }

  let lastAuthStateKey='';
  let authChangeUnsubscribe=null;
  function bindAuthStateChanges(){
    if(authChangeUnsubscribe || !window.BASELINE_auth || typeof window.BASELINE_auth.onChange!=='function') return;
    authChangeUnsubscribe=window.BASELINE_auth.onChange(function(next){
      const nextKey=authStateKey(next);
      if(nextKey===lastAuthStateKey) return;
      lastAuthStateKey=nextKey;
      loadAllProfiles().catch(function(error){
        try{ console.error('[Baseline Recreation] Auth-state profile reload failed.',error); }catch(_e){}
      });
    });
  }

  function syncAuthHeaderLabel(){
    try{
      const button=document.getElementById('bl-auth-toggle');
      if(!button) return;
      const label='Account';
      const labelNode=button.querySelector('.bl-btn-label');
      if(labelNode) labelNode.textContent=label;
      button.setAttribute('aria-label',label);
    }catch(_e){}
  }

  function resolveInitialAuth(){
    authState=getAuth();
    lastAuthStateKey=authStateKey(authState);
    syncAuthHeaderLabel();
  }
  function scheduleSave(app){
    const profile=profiles[app];
    if(!profile) return;
    writeGuestProfile(app,profile);
    if(app==='trackcoin') writeTrackCoinStorage(profile);
    const authority=serverStorageAuthority();
    if(authority?.saveProfile){
      const hasActiveRound=profile.activeRound!==null && profile.activeRound!==undefined;
      authority.saveProfile(app,profile,{immediate:hasActiveRound,keepalive:hasActiveRound});
      return;
    }
    if(!authState.authed || location.protocol==='file:') return;
    window.clearTimeout(saveTimers[app]);
    saveTimers[app]=window.setTimeout(async function(){
      try{
        const payload=window.BASELINE_api?.revisions?.withExpected?.(`games:${app}`,{app,profile}) || {app,profile,expectedRevision:0};
        const data=await apiJson(API_PATH,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        window.BASELINE_api?.revisions?.remember?.(`games:${app}`,data);
        if(data?.profile) writeGuestProfile(app,data.profile);
      }catch(_e){}
    },180);
  }

  function dartsFocusedProfile(){
    try{
      if(window.DartsFocusedGames && typeof window.DartsFocusedGames.getProfile === 'function') return window.DartsFocusedGames.getProfile();
      return serverStorageAuthority()?.getProfile?.('dartsfocused') || null;
    }catch(_error){ return null; }
  }
  function badmintonFocusedProfile(){
    try{
      if(window.BadmintonFocusedGames && typeof window.BadmintonFocusedGames.getProfile === 'function') return window.BadmintonFocusedGames.getProfile();
      return serverStorageAuthority()?.getProfile?.('badmintonfocused') || null;
    }catch(_error){ return null; }
  }
  function crossnumberProfile(){
    try{
      if(window.BaselineCrossnumber && typeof window.BaselineCrossnumber.getProfile === 'function') return window.BaselineCrossnumber.getProfile();
      return serverStorageAuthority()?.getProfile?.('crossnumber') || null;
    }catch(_error){ return null; }
  }
  function totalBank(){
    const darts = dartsFocusedProfile();
    const badminton = badmintonFocusedProfile();
    const crossnumber = crossnumberProfile();
    return (profiles.pairs ? profiles.pairs.bank : 0) + (profiles.make24 ? profiles.make24.bank : 0) + (profiles.detectword ? profiles.detectword.bank : 0) + (profiles.trackcoin ? profiles.trackcoin.coins : 0) + (profiles.ruleshift ? profiles.ruleshift.bank : 0) + Math.max(0, Number(darts && darts.bank || 0)) + Math.max(0, Number(badminton && badminton.bank || 0)) + Math.max(0, Number(crossnumber && crossnumber.bank || 0));
  }
  function renderAuthState(){
    if(!refs.authStateNote) return;
    if(authState.authed){
      refs.authStateNote.innerHTML = '<strong>Account save is active.</strong><span class="inline-note">Registered Recreation game and puzzle progress saves to ' + escapeHtml(authState.name || 'your account') + ', including Jigsaws and Baseline Realm.</span>';
    }else{
      refs.authStateNote.innerHTML = '<strong>Temporary play is active.</strong><span class="inline-note">You can play while signed out, but progress is not saved. Sign in to save game progress to your account.</span>';
    }
  }

  function profileOrDefault(app){
    return profiles[app] || defaultProfileForApp(app);
  }
  function overviewProgress(game){
    const id=String(game && game.runtimeId || '');
    if(id==='darts-focused'){
      const darts=dartsFocusedProfile();
      return 'Player Rank ' + Math.max(1,Number(darts && darts.level || 1)) + ' · 10 games';
    }
    if(id==='badminton-focused'){
      const badminton=badmintonFocusedProfile();
      return 'Player Rank ' + Math.max(1,Number(badminton && badminton.level || 1)) + ' · 15 games';
    }
    const profile=profileOrDefault(game && game.profileApp || id);
    if(id==='detectword') return 'Player Rank ' + profile.level + ' · ' + profile.wordsSolved + ' solved';
    if(id==='make24') return 'Player Rank ' + profile.level + ' · ' + profile.puzzlesSolved + ' solved';
    if(id==='pairs') return 'Player Rank ' + profile.level + ' · ' + profile.boardsCleared + ' cleared';
    if(id==='ruleshift') return 'Player Rank ' + profile.level + ' · Best streak ' + profile.bestStreak;
    if(id==='trackcoin') return 'Player Rank ' + profile.level + ' · Best streak ' + profile.bestStreak;
    if(id==='ninja') return 'Player Rank ' + profile.level + ' · Stage ' + profile.stage;
    return 'Ready';
  }
  function gameMeta(){
    return REGISTERED_OVERVIEW_GAMES.map(function(game){
      const overview=game.overview || {};
      return {
        id:game.runtimeId,
        group:overview.group || 'Games',
        name:game.name,
        art:overview.art || '',
        note:overview.note || '',
        brainBenefit:overview.brainBenefit || '',
        featured:Boolean(overview.featured),
        externalModule:game.group === 'focused' ? game.runtimeId : '',
        progress:function(){ return overviewProgress(game); }
      };
    });
  }
  function renderGamesList(){
    let currentGroup = '';
    refs.gamesList.innerHTML = gameMeta().map(meta => {
      const group = meta.group || 'Games';
      const heading = group !== currentGroup ? (currentGroup = group, '<div class="games-list-group" role="presentation"><span>' + escapeHtml(group) + '</span></div>') : '';
      const featured = !!meta.featured;
      if(meta.externalModule === 'darts-focused'){
        return heading + '<div class="game-row-wrap game-row-wrap--featured darts-focused-overview-row" data-game-card="darts-focused">' +
          '<button class="game-row darts-overview-row" data-open-darts-focused type="button">' +
            '<img class="game-card-art darts-overview-art" src="' + escapeHtml(meta.art) + '" alt="">' +
            '<div class="game-row-copy"><h3>' + escapeHtml(meta.name) + '</h3><p>' + escapeHtml(meta.note) + '</p></div>' +
            '<div class="game-row-meta"><strong>' + escapeHtml(meta.progress()) + '</strong><span class="inline-note">Open games</span></div>' +
          '</button>' +
          '<button class="game-row-info-button bl-info-button" data-bl-info-button data-bl-info-title="What this develops" data-bl-info-text="' + escapeHtml(meta.brainBenefit || '') + '" type="button" aria-label="What Darts Focused develops" aria-expanded="false"><span aria-hidden="true">i</span></button>' +
        '</div>';
      }
      if(meta.externalModule === 'badminton-focused'){
        return heading + '<div class="game-row-wrap game-row-wrap--featured badminton-focused-overview-row" data-game-card="badminton-focused">' +
          '<button class="game-row badminton-overview-row" data-open-badminton-focused type="button">' +
            '<img class="game-card-art badminton-overview-art" src="' + escapeHtml(meta.art) + '" alt="">' +
            '<div class="game-row-copy"><h3>' + escapeHtml(meta.name) + '</h3><p>' + escapeHtml(meta.note) + '</p></div>' +
            '<div class="game-row-meta"><strong>' + escapeHtml(meta.progress()) + '</strong><span class="inline-note">Open games</span></div>' +
          '</button>' +
          '<button class="game-row-info-button bl-info-button" data-bl-info-button data-bl-info-title="What this develops" data-bl-info-text="' + escapeHtml(meta.brainBenefit || '') + '" type="button" aria-label="What Badminton Focused develops" aria-expanded="false"><span aria-hidden="true">i</span></button>' +
        '</div>';
      }
      return heading + '<div class="game-row-wrap' + (featured ? ' game-row-wrap--featured' : '') + (selectedGame === meta.id ? ' is-selected' : '') + '" data-game-card="' + meta.id + '">' +
        '<button class="game-row" data-select-game="' + meta.id + '" type="button">' +
          '<img class="game-card-art" src="' + escapeHtml(meta.art || '') + '" alt="">' +
          '<div class="game-row-copy"><h3>' + escapeHtml(meta.name) + '</h3><p>' + escapeHtml(meta.note) + '</p></div>' +
          '<div class="game-row-meta"><strong>' + escapeHtml(meta.progress()) + '</strong><span class="inline-note">Open game</span></div>' +
        '</button>' +
        '<button class="game-row-info-button bl-info-button" data-bl-info-button data-bl-info-title="What this develops" data-bl-info-text="' + escapeHtml(meta.brainBenefit || '') + '" type="button" aria-label="What ' + escapeHtml(meta.name) + ' develops" aria-expanded="false"><span aria-hidden="true">i</span></button>' +
      '</div>';
    }).join('');
  }
  function requestDartsFocusedOpen(attempt){
    const tries = Number(attempt || 0);
    if(window.DartsFocusedGames && typeof window.DartsFocusedGames.open === 'function'){
      window.DartsFocusedGames.open();
      return;
    }
    if(window.DartsFocusedLoader && typeof window.DartsFocusedLoader.load === 'function'){
      window.DartsFocusedLoader.load().then(function(api){ if(api && typeof api.open === 'function') api.open(); }).catch(function(error){ console.error('[Recreation] Darts Focused could not open.', error); });
      return;
    }
    if(tries < 20) window.setTimeout(function(){ requestDartsFocusedOpen(tries + 1); }, 50);
  }
  function requestBadmintonFocusedOpen(attempt){
    const tries = Number(attempt || 0);
    if(window.BadmintonFocusedGames && typeof window.BadmintonFocusedGames.open === 'function'){
      window.BadmintonFocusedGames.open();
      return;
    }
    if(window.BadmintonFocusedLoader && typeof window.BadmintonFocusedLoader.load === 'function'){
      window.BadmintonFocusedLoader.load().then(function(api){ if(api && typeof api.open === 'function') api.open(); }).catch(function(error){ console.error('[Recreation] Badminton Focused could not open.', error); });
      return;
    }
    if(tries < 20) window.setTimeout(function(){ requestBadmintonFocusedOpen(tries + 1); }, 50);
  }
  function requestBaselineRealmLoad(attempt){
    const tries = Number(attempt || 0);
    if(window.BaselineRealmLoader && typeof window.BaselineRealmLoader.load === 'function'){
      window.BaselineRealmLoader.load().catch(function(error){ console.error('[Recreation] Baseline Realm could not start.', error); });
      return;
    }
    try{ window.dispatchEvent(new CustomEvent('baseline:realm:load')); }catch(_error){}
    if(tries < 20) window.setTimeout(function(){ requestBaselineRealmLoad(tries + 1); }, 50);
  }

  function selectGame(gameId, options){
    const opts = options || {};
    const previousGame = selectedGame;
    selectedGame = normaliseGameId(gameId);
    if(window.BaselineGamesMusic && typeof window.BaselineGamesMusic.selectGame === 'function') window.BaselineGamesMusic.selectGame(selectedGame);
    if(!isMobileGameViewport() && selectedGame !== previousGame){
      if(selectedGame === 'detectword') desktopKeypadOpenGame = '';
      else if(desktopKeypadOpenGame === 'detectword') desktopKeypadOpenGame = '';
    }
    // Pairs is deliberately non-resumable. Other core games keep their
    // account-backed active round when the player leaves and returns.
    if(selectedGame === 'pairs' && selectedGame !== previousGame && opts.resetRound !== false){
      resetGameRoundToIdle('pairs');
    }
    if(!selectedGame) exitMobileGameMode();
    const panels = {
      pairs: refs.pairsPanel,
      detectword: refs.detectwordPanel,
      make24: refs.make24Panel,
      trackcoin: refs.trackcoinPanel,
      ruleshift: refs.ruleshiftPanel,
      ninja: refs.ninjaPanel
    };
    Object.keys(panels).forEach(function(key){ if(panels[key]){ const active=key === selectedGame; panels[key].classList.toggle('is-active', active); panels[key].hidden=!active; panels[key].setAttribute('aria-hidden',String(!active)); } });
    document.querySelectorAll('#games .game-panel').forEach(function(panel){ if(!Object.values(panels).includes(panel) && panel.classList.contains('is-active')){ panel.classList.remove('is-active'); panel.hidden=true; panel.setAttribute('aria-hidden','true'); } });
    const gamesSection = document.getElementById('games');
    if(gamesSection) gamesSection.classList.toggle('has-active-game', !!selectedGame);
    if(selectedGame === 'pairs') setPairsPanel(normalisePanelId('pairs', pairsOpenPanel));
    if(selectedGame === 'detectword') setWordPanel(normalisePanelId('detectword', wordOpenPanel));
    if(selectedGame === 'make24') setMake24Panel(normalisePanelId('make24', make24OpenPanel));
    if(selectedGame === 'trackcoin') setTrackCoinPanel(normalisePanelId('trackcoin', trackCoinOpenPanel));
    if(selectedGame === 'ruleshift'){
      setRuleShiftPanel(normalisePanelId('ruleshift', ruleShiftOpenPanel));
      if(ruleShiftState && !ruleShiftState.finished){
        if(Number.isFinite(ruleShiftState.pausedRemainingMs)) resumeRuleShiftTimer();
        else if(!ruleShiftTimer) startRuleShiftTimer();
      }
    }
    if(selectedGame === 'ninja'){ setNinjaPanel(normalisePanelId('ninja', ninjaOpenPanel)); requestBaselineRealmLoad(); }
    if(selectedGame || currentTab === 'games') activateTab('games', { sync:false });
    renderGamesList();
    if(!suspendHashSync){
      const historyMode = opts.historyMode || (opts.pushHistory ? 'push' : 'replace');
      if(selectedGame && historyMode === 'push') pushRecreationGameEntry();
      else syncHashState(historyMode);
    }
    /* Do not auto-scroll when selecting Recreation tabs or game rows. Explicit callers such as auto-next can still request focus/scroll. */
  }

  function setExclusivePanel(openId, panelIds, buttonAttr, readyButtonValue){
    panelIds.forEach(function(id){
      const panel = document.getElementById(id);
      if(panel){
        const isOpen = id === openId;
        panel.hidden = !isOpen;
        panel.setAttribute('aria-hidden', String(!isOpen));
        panel.classList.toggle('is-active-panel', isOpen);
      }
    });
    qsa('[' + buttonAttr + ']').forEach(function(btn){
      const active = btn.getAttribute(buttonAttr) === openId;
      btn.setAttribute('aria-expanded', String(active));
      btn.classList.toggle('is-active', active);
      if(readyButtonValue && btn.getAttribute(buttonAttr) === readyButtonValue.id){
        btn.classList.toggle('is-ready', !active && !!readyButtonValue.ready);
      }else{
        btn.classList.remove('is-ready');
      }
    });
  }

  function setPairsPanel(panelId, historyMode){
    pairsOpenPanel = normalisePanelId('pairs', panelId || 'pairsGameCard');
    setExclusivePanel(pairsOpenPanel, ['pairsGameCard','pairsSkillCard','pairsTierCard','pairsProgressCard'], 'data-pairs-panel', { id:'pairsSkillCard', ready: profiles.pairs && profiles.pairs.skillPoints > 0 });
    syncHashState(historyMode);
  }

  function setWordPanel(panelId, historyMode){
    wordOpenPanel = normalisePanelId('detectword', panelId || 'wordGameCard');
    setExclusivePanel(wordOpenPanel, ['wordGameCard','wordSkillCard','wordTierCard','wordProgressCard'], 'data-word-panel', { id:'wordSkillCard', ready: profiles.detectword && profiles.detectword.skillPoints > 0 });
    syncHashState(historyMode);
  }

  function setMake24Panel(panelId, historyMode){
    make24OpenPanel = normalisePanelId('make24', panelId || 'make24GameCard');
    setExclusivePanel(make24OpenPanel, ['make24GameCard','make24SkillCard','make24TierCard','make24ProgressCard'], 'data-make24-panel', { id:'make24SkillCard', ready: profiles.make24 && profiles.make24.skillPoints > 0 });
    syncHashState(historyMode);
  }

  function setTrackCoinPanel(panelId, historyMode){
    trackCoinOpenPanel = normalisePanelId('trackcoin', panelId || 'trackCoinGamePanel');
    setExclusivePanel(trackCoinOpenPanel, ['trackCoinGamePanel','trackCoinSkillPanel','trackCoinTierPanel','trackCoinProgressPanel'], 'data-trackcoin-panel', { id:'trackCoinSkillPanel', ready: profiles.trackcoin && profiles.trackcoin.skillPoints > 0 });
    syncHashState(historyMode);
  }


  function setRuleShiftPanel(panelId, historyMode){
    ruleShiftOpenPanel = normalisePanelId('ruleshift', panelId || 'ruleShiftGameCard');
    setExclusivePanel(ruleShiftOpenPanel, ['ruleShiftGameCard','ruleShiftSkillCard','ruleShiftTierCard','ruleShiftProgressCard'], 'data-ruleshift-panel', { id:'ruleShiftSkillCard', ready: profiles.ruleshift && profiles.ruleshift.skillPoints > 0 });
    syncHashState(historyMode);
  }

  function setNinjaPanel(panelId, historyMode){
    ninjaOpenPanel = normalisePanelId('ninja', panelId || 'ninjaGameCard');
    setExclusivePanel(ninjaOpenPanel, ['ninjaGameCard','ninjaUpgradesCard','ninjaBonusesCard','ninjaPrestigeCard'], 'data-ninja-panel');
    syncHashState(historyMode);
  }

  function renderCrossnumberSummary(){
    const profile = crossnumberProfile();
    if(!profile) return '';
    const tierId = String(profile.selectedTier || 'starter');
    const tiers = (window.BaselineCrossnumber && Array.isArray(window.BaselineCrossnumber.tiers)) ? window.BaselineCrossnumber.tiers : [];
    const tier = tiers.find(function(item){ return item.id === tierId; });
    const tierName = tier ? tier.name : tierId.charAt(0).toUpperCase() + tierId.slice(1);
    const skills = profile.skills || {};
    const needed = xpNeededForLevel(Math.max(1, Number(profile.level || 1)));
    return '<details class="game-summary-details" data-summary="crossnumber"><summary><span>Cross Number</span><span class="inline-note">Player Rank ' + Math.max(1,Number(profile.level||1)) + '</span></summary><div class="game-summary-body">'
      + '<div class="game-summary-row"><span>Tier: ' + escapeHtml(tierName) + '</span><span>Puzzles solved: ' + Math.max(0,Number(profile.puzzlesSolved||0)) + '</span></div>'
      + '<div class="game-summary-row"><span>XP: ' + Math.max(0,Number(profile.xp||0)) + ' / ' + needed + '</span><span>Bank Coins: ' + Math.max(0,Number(profile.bank||0)) + '</span></div>'
      + '<div class="game-summary-row"><span>Best streak: ' + Math.max(0,Number(profile.bestStreak||0)) + '</span><span>Clean streak: ' + Math.max(0,Number(profile.cleanWinStreak||0)) + '</span></div>'
      + '<div class="game-summary-row game-summary-row--stack"><span>Skills</span><span>Insight ' + (skills.insight||0) + ' · Flow ' + (skills.flow||0) + ' · Banker ' + (skills.banker||0) + ' · Precision ' + (skills.precision||0) + ' · Structure ' + (skills.structure||0) + '</span><span>Unspent skill points: ' + Math.max(0,Number(profile.skillPoints||0)) + '</span></div>'
      + '</div></details>';
  }

  function renderSystemSummary(){
    const existing = refs.gamesSummaryWrap ? Array.from(refs.gamesSummaryWrap.querySelectorAll('details[open][data-summary]')).map(function(el){ return el.getAttribute('data-summary'); }) : [];
    openSummaryIds.clear(); existing.forEach(function(id){ openSummaryIds.add(id); });
    refs.bankSummary.innerHTML = '<strong>Bank Coins</strong><span class="bank-value">' + formatInt(totalBank()) + '</span><span class="inline-note">Core games, Cross Number, Darts Focused and Badminton Focused feed the shared Recreation Bank Coins. Baseline Realm uses its own connected campaign coin economy.</span>';
    refs.gamesSummaryWrap.innerHTML = [renderDetectWordSummary(), renderMake24Summary(), renderPairsSummary(), renderTrackCoinSummary(), renderRuleShiftSummary(), renderCrossnumberSummary(), renderNinjaSummary()].join('');
    Array.from(refs.gamesSummaryWrap.querySelectorAll('details[data-summary]')).forEach(function(el){ el.open = openSummaryIds.has(el.getAttribute('data-summary')); });
  }

  function levelUpFromGain(profile, xpGain){
    let leveled = 0;
    profile.xp += xpGain;
    while(profile.xp >= xpNeededForLevel(profile.level)){
      profile.xp -= xpNeededForLevel(profile.level);
      profile.level += 1;
      profile.skillPoints += 1;
      leveled += 1;
    }
    return leveled;
  }

  function currentPairsTier(){
    const profile = profiles.pairs || defaultPairsProfile();
    return PAIRS_TIERS.find(t => t.id === profile.selectedTier) || PAIRS_TIERS[0];
  }
  function nextPairsTierToUnlock(){
    const profile = profiles.pairs || defaultPairsProfile();
    return PAIRS_TIERS.find(t => profile.level < t.unlockLevel) || null;
  }
  function buildPairsDeck(tier){
    return PAIRS_ENGINE.buildDeck({tier:tier,faces:PAIRS_FACES,shuffle:shuffle});
  }

  function pairsBoardLayout(tier){
    return PAIRS_ENGINE.boardLayout(tier);
  }

  function applyPairsBoardLayout(tier){
    if(!refs.pairsBoard) return;
    const layout=pairsBoardLayout(tier);
    refs.pairsBoard.style.removeProperty('grid-template-columns');
    refs.pairsBoard.style.setProperty('--pairs-cols-desktop',String(layout.desktopCols));
    refs.pairsBoard.style.setProperty('--pairs-cols-mobile',String(layout.mobileCols));
    refs.pairsBoard.style.setProperty('--pairs-cols-phone',String(layout.phoneCols));
    const pairCount=Math.max(1,Number(tier&&tier.pairs)||1);
    const cardCount=pairCount*2;
    const desktopRows=Math.ceil(cardCount/Math.max(1,layout.desktopCols));
    const mobileRows=Math.ceil(cardCount/Math.max(1,layout.mobileCols));
    const phoneRows=Math.ceil(cardCount/Math.max(1,layout.phoneCols));
    refs.pairsBoard.style.setProperty('--pairs-rows-desktop',String(desktopRows));
    refs.pairsBoard.style.setProperty('--pairs-rows-mobile',String(mobileRows));
    refs.pairsBoard.style.setProperty('--pairs-rows-phone',String(phoneRows));
    refs.pairsBoard.style.setProperty('--pairs-board-max',layout.boardMax+'px');
    refs.pairsBoard.style.setProperty('--pairs-fit-height',Math.min(720,(desktopRows*128)+((desktopRows-1)*10))+'px');
  }
  function startPairsBoard(){
    clearAutoNextTimer('pairs');
    const tier = currentPairsTier();
    const roundToken = ++pairsRoundToken;
    profiles.pairs.gamesPlayed += 1;
    pairsBoardState = {
      roundToken:roundToken,
      cards: buildPairsDeck(tier), selected: [], matchedPairs:0, moves:0, roundBank:0, flipLock:false,
      hintsLeft: profiles.pairs.skills.insight || 0, hadFailure:false, hintBusy:false, lastMessage:'Board opened. Match all pairs.'
    };
    persistPairsRound();
    applyPairsTempoPreview();
    renderAll();
  }
  function pairsMismatchDelay(){
    return PAIRS_ENGINE.mismatchDelay(profiles.pairs.skills.tempo || 0);
  }
  function applyPairsTempoPreview(){
    if(!pairsBoardState) return;
    const reduction = Math.max(0, 650 - pairsMismatchDelay());
    pairsBoardState.lastMessage = reduction > 0
      ? ('Board opened. Match all pairs. Tempo shortens mismatch recovery by ' + reduction + ' ms.')
      : 'Board opened. Match all pairs.';
  }
  function calculatePairsRewards(){
    return PAIRS_ENGINE.calculateRewards({
      tier:currentPairsTier(),
      profile:profiles.pairs,
      hadFailure:Boolean(pairsBoardState && pairsBoardState.hadFailure),
      cleanBonusPctForStreak:cleanWinBonusPct
    });
  }
  function completePairsBoard(){
    const rewards = calculatePairsRewards();
    const profile = profiles.pairs;
    profile.bank += rewards.bank;
    profile.boardsCleared += 1;
    profile.currentStreak = rewards.nextStreak;
    profile.bestStreak = Math.max(profile.bestStreak, profile.currentStreak);
    profile.cleanWinStreak = rewards.nextClean;
    profile.lastRoundXp = rewards.xp;
    const levels = levelUpFromGain(profile, rewards.xp);
    pairsBoardState.lastMessage = 'Board cleared. +' + rewards.bank + ' Bank Coins · +' + rewards.xp + ' XP' + (rewards.cleanPct ? ' · Clean Streak Bonus +' + rewards.cleanPct + '%' : '') + (levels ? ' · Player Rank +' + levels : '') + '.';
    pairsBoardState.roundBank += rewards.bank;
    pairsBoardState.completed = true;
    persistPairsRound();
    renderAll();
    completeAutoNext('pairs');
  }
  function handlePairsMismatch(selectedCards){
    const roundToken = pairsBoardState && pairsBoardState.roundToken;
    const cleanBreak = selectedCards.some(card => card.wasKnown);
    const penaltyEligible = selectedCards.every(card => card.wasKnown);
    let penalty = 0;
    if(penaltyEligible){
      penalty = Math.max(0, currentPairsTier().penalty - (profiles.pairs.skills.recall || 0));
      profiles.pairs.bank = Math.max(0, profiles.pairs.bank - penalty);
      pairsBoardState.roundBank -= penalty;
    }
    pairsBoardState.hadFailure = true;
    profiles.pairs.cleanWinStreak = 0;
    profiles.pairs.currentStreak = 0;
    if(penaltyEligible && penalty > 0){
      pairsBoardState.lastMessage = 'Repeated miss. -' + penalty + ' Bank Coins. Continue the board.';
    }else if(cleanBreak){
      pairsBoardState.lastMessage = 'A previously selected card was chosen again in a miss. Continue the board.';
    }else{
      pairsBoardState.lastMessage = 'Mismatch. Continue the board; this round is no longer clean.';
    }
    persistPairsRound();
    window.setTimeout(function(){
      if(!pairsBoardState || pairsBoardState.roundToken !== roundToken) return;
      selectedCards.forEach(card => { card.open = false; });
      pairsBoardState.selected = [];
      pairsBoardState.flipLock = false;
      renderAll();
    }, pairsMismatchDelay());
  }
  function handlePairsCardFlip(cardId){
    if(!pairsBoardState || pairsBoardState.flipLock) return;
    const card = pairsBoardState.cards.find(item => item.id === cardId);
    if(!card || card.open || card.matched) return;
    card.wasKnown = Number(card.selections || 0) >= 1;
    card.selections = Number(card.selections || 0) + 1;
    card.open = true;
    pairsBoardState.selected.push(card);
    persistPairsRound();
    renderPairsBoard();
    if(pairsBoardState.selected.length < 2) return;
    pairsBoardState.moves += 1;
    const [a, b] = pairsBoardState.selected;
    if(a.face === b.face){
      a.matched = true;
      b.matched = true;
      pairsBoardState.selected = [];
      pairsBoardState.matchedPairs += 1;
      pairsBoardState.lastMessage = 'Pair matched cleanly.';
      if(pairsBoardState.matchedPairs >= currentPairsTier().pairs){ completePairsBoard(); return; }
      persistPairsRound();
      renderAll();
      return;
    }
    pairsBoardState.flipLock = true;
    handlePairsMismatch([a, b]);
  }
  function usePairsHint(){
    if(!pairsBoardState || pairsBoardState.hintsLeft <= 0 || pairsBoardState.flipLock || pairsBoardState.hintBusy) return;
    const roundToken = pairsBoardState.roundToken;
    const hiddenCards = pairsBoardState.cards.filter(card => !card.matched && !card.open);
    if(!hiddenCards.length) return;
    const card = hiddenCards[Math.floor(Math.random() * hiddenCards.length)];
    pairsBoardState.hintsLeft -= 1;
    pairsBoardState.hintBusy = true;
    card.open = true;
    pairsBoardState.lastMessage = 'Hint used. One unmatched card was flashed briefly.';
    persistPairsRound();
    renderAll();
    window.setTimeout(function(){
      if(!pairsBoardState || pairsBoardState.roundToken !== roundToken) return;
      if(!card.matched && !pairsBoardState.selected.includes(card)) card.open = false;
      pairsBoardState.hintBusy = false;
      persistPairsRound();
      renderPairsBoard();
      refs.pairsRoundSummary.innerHTML = coherentRoundStatusHtml('Round Status',pairsBoardState.lastMessage,profiles.pairs,currentPairsTier().name);
}, 860 + ((profiles.pairs.skills.insight || 0) * 120));
  }
  function spendPairsSkill(skillId){
    const profile = profiles.pairs;
    reconcileSkillPoints(profile, PAIRS_SKILLS);
    const skill = PAIRS_SKILLS.find(item => item.id === skillId);
    if(!skill || profile.skillPoints <= 0 || profile.level < skill.unlockLevel || (profile.skills[skillId] || 0) >= skill.max) return;
    profile.skills[skillId] += 1;
    reconcileSkillPoints(profile, PAIRS_SKILLS);
    scheduleSave('pairs');
    resolveNinjaBonuses();
    renderAll();
  }
  function renderPairsProgress(){
    const profile = profiles.pairs;
    const needed = xpNeededForLevel(profile.level);
    refs.pairsXpFill.style.width = clamp((profile.xp / needed) * 100, 0, 100) + '%';
    if(refs.pairsLevelHeading) refs.pairsLevelHeading.textContent = 'Player Rank - ' + profile.level;
    refs.pairsXpMeta.textContent = profile.xp + ' / ' + needed + ' XP';
    refs.pairsSkillPointsValue.textContent = String(profile.skillPoints);
    refs.pairsBoardsClearedValue.textContent = String(profile.boardsCleared);
    refs.pairsGamesPlayedValue.textContent = String(profile.gamesPlayed);
    if(refs.pairsTierValue) refs.pairsTierValue.textContent = currentPairsTier().name;
    if(refs.pairsStreakValue) refs.pairsStreakValue.textContent = String(profile.currentStreak);
    if(refs.pairsCleanStreakValue) refs.pairsCleanStreakValue.textContent = String(profile.cleanWinStreak);
    if(refs.pairsCleanBonusValue) refs.pairsCleanBonusValue.textContent = '+' + cleanWinBonusPct(profile.cleanWinStreak) + '%';
    if(refs.pairsStats){
      refs.pairsStats.innerHTML = coherentProgressHtml(profile,'Pairs',[
        ['Boards cleared',profile.boardsCleared],
        ['Games started',profile.gamesPlayed],
        ['Best streak',profile.bestStreak],
        ['Current streak',profile.currentStreak],
        ['Clean streak',profile.cleanWinStreak],
        ['Bank Coins earned',profile.bank],
        ['Current tier',currentPairsTier().name],
        ['Unlocked tiers',PAIRS_TIERS.filter(t => profile.level >= t.unlockLevel).length + ' / ' + PAIRS_TIERS.length]
      ]);
    }
    renderCompactGameXp('pairs',profile);
    const ready = profile.skillPoints > 0;
    if(refs.pairsSkillAlertBtn){ refs.pairsSkillAlertBtn.disabled = !ready; refs.pairsSkillAlertBtn.classList.toggle('is-ready', ready); }
    setPairsPanel(pairsOpenPanel || 'pairsGameCard');
  }
  function renderPairsTierList(){
    const profile = profiles.pairs;
    const tiersHtml = PAIRS_TIERS.map(tier => {
      const locked = profile.level < tier.unlockLevel;
      const active = profile.selectedTier === tier.id;
      const detail = locked ? ('Unlock ' + tier.unlockLevel) : ('+' + tier.bankReward + ' Bank Coins / +' + tier.xpReward + ' XP');
      return '<button class="tier-btn' + (active ? ' active' : '') + '" data-pairs-tier="' + tier.id + '" type="button"' + (locked ? ' disabled' : '') + '><span>' + tier.name + ' · ' + tier.pairs + ' pairs</span><span>' + detail + '</span></button>';
    }).join('');
    const themesHtml = PAIRS_CARD_THEMES.map(function(theme){
      const locked = profile.level < theme.unlockLevel;
      const active = profile.cardTheme === theme.id;
      return '<button class="action ghost' + (active ? ' is-active' : '') + '" data-pairs-theme="' + theme.id + '" type="button"' + (locked ? ' disabled' : '') + ' aria-pressed="' + active + '">' + escapeHtml(theme.name) + (locked ? ' · L' + theme.unlockLevel : '') + '</button>';
    }).join('');
    refs.pairsTierSelectList.innerHTML = tiersHtml + '<div class="pairs-theme-picker" aria-label="Pairs card-back theme">' + themesHtml + '</div>';
  }
  function renderPairsSkillTree(){
    const profile = profiles.pairs;
    refs.pairsSkillTreeGrid.innerHTML = PAIRS_SKILLS.map(skill => {
      const level = profile.skills[skill.id] || 0;
      const locked = profile.level < skill.unlockLevel;
      const maxed = level >= skill.max;
      const canSpend = profile.skillPoints > 0 && !locked && !maxed;
      const buttonLabel = locked ? ('Unlocks at Player Rank ' + skill.unlockLevel) : (maxed ? 'Maxed' : (level > 0 ? 'Upgrade skill' : 'Add skill'));
      return '<article class="skill-item"><div class="skill-meta"><h4>' + skill.name + '</h4><span>Rank ' + level + ' / ' + skill.max + '</span></div><p>' + skill.description + '</p><p class="inline-note">Requires Player Rank ' + skill.unlockLevel + '.</p><button class="action' + (canSpend ? '' : ' secondary') + '" data-pairs-skill="' + skill.id + '" type="button"' + (canSpend ? '' : ' disabled') + '>' + buttonLabel + '</button></article>';
    }).join('');
    refs.pairsSkillSummary.innerHTML = '<strong>Skill upgrades</strong><span class="inline-note">Insight ' + profile.skills.insight + ' · Flow +' + (profile.skills.flow * 8) + '% XP · Banker +' + (profile.skills.banker * 10) + '% Bank Coins · Recall -' + profile.skills.recall + ' repeat loss · Tempo -' + (profile.skills.tempo * 90) + ' ms recovery</span><span class="inline-note">Clean Streak Bonus +' + cleanWinBonusPct(profile.cleanWinStreak) + '%</span>';
  }
  function renderPairsBoard(){
    const tier = currentPairsTier();
    if(refs.pairsBoard){
      refs.pairsBoard.classList.toggle('is-pairs-idle', !pairsBoardState);
      refs.pairsBoard.setAttribute('data-pairs-theme', profiles.pairs.cardTheme || 'woodland');
    }
    refs.pairsTierNameValue.textContent = tier.name;
    if(!pairsBoardState){
      refs.pairsMovesValue.textContent = '0';
      refs.pairsMatchedValue.textContent = '0 / ' + tier.pairs;
      refs.pairsRoundBankValue.textContent = '0';
      refs.pairsHintBtn.disabled = true;
      setCompactActionButton(refs.pairsHintBtn,'?','Hint','H',0);
      applyPairsBoardLayout(tier);
      refs.pairsBoard.innerHTML = '<div class="empty-box"><strong>Pairs is ready.</strong><span class="inline-note">' + escapeHtml(pairsIdleMessage) + '</span></div>';
      refs.pairsRoundSummary.innerHTML = coherentRoundStatusHtml('Round Status','No board is active yet.',profiles.pairs,currentPairsTier().name);
return;
    }
    refs.pairsMovesValue.textContent = String(pairsBoardState.moves);
    refs.pairsMatchedValue.textContent = String(pairsBoardState.matchedPairs) + ' / ' + tier.pairs;
    refs.pairsRoundBankValue.textContent = String(pairsBoardState.roundBank);
    refs.pairsHintBtn.disabled = pairsBoardState.completed || pairsBoardState.hintsLeft <= 0 || pairsBoardState.flipLock || !!pairsBoardState.hintBusy;
    setCompactActionButton(refs.pairsHintBtn,'?','Hint','H',pairsBoardState.hintsLeft);
    applyPairsBoardLayout(tier);
    const cardsHtml = pairsBoardState.cards.map(card => '<button class="memory-card' + ((card.open || card.matched) ? ' is-open' : '') + (card.matched ? ' is-matched' : '') + '" data-card="' + card.id + '" type="button" aria-pressed="' + String(Boolean(card.open || card.matched)) + '"' + ((card.matched || pairsBoardState.completed || pairsBoardState.flipLock || card.open) ? ' disabled' : '') + '><span class="memory-card-face memory-card-back" aria-hidden="' + String(Boolean(card.open || card.matched)) + '"></span><span class="memory-card-face memory-card-front" aria-hidden="' + String(!card.open && !card.matched) + '">' + card.face + '</span></button>').join('');
    const resultHtml = pairsBoardState.completed
      ? '<div class="pairs-result-card"><strong>Board cleared</strong><div class="inline-note">' + pairsBoardState.moves + ' moves · ' + tier.pairs + ' pairs · Round Bank Coins ' + pairsBoardState.roundBank + '</div></div>'
      : '';
    refs.pairsBoard.innerHTML = cardsHtml + resultHtml;
    refs.pairsRoundSummary.innerHTML = coherentRoundStatusHtml('Round Status',pairsBoardState.lastMessage,profiles.pairs,currentPairsTier().name);
}
  function renderPairsSummary(){
    const profile = profiles.pairs;
    const needed = xpNeededForLevel(profile.level);
    const pct = clamp((profile.xp / needed) * 100, 0, 100);
    const current = currentPairsTier();
    const next = nextPairsTierToUnlock();
    const nextText = next ? ('Next unlock: ' + next.name + ' at Player Rank ' + next.unlockLevel + '.') : 'All Pairs board tiers are unlocked.';
    const skillText = 'Insight ' + profile.skills.insight + ' · Flow ' + profile.skills.flow + ' · Banker ' + profile.skills.banker + ' · Recall ' + profile.skills.recall + ' · Tempo -' + (profile.skills.tempo * 90) + ' ms';
    return '<details class="game-summary-details" data-summary="pairs"><summary><span>Pairs</span><span class="inline-note">Player Rank ' + profile.level + '</span></summary><div class="game-summary-body"><div class="game-summary-progress"><div class="xp-meta"><strong>Experience</strong><span class="inline-note">' + profile.xp + ' / ' + needed + ' XP</span></div><div class="xp-bar"><div class="xp-fill" style="width:' + pct + '%"></div></div></div><div class="game-summary-row"><span>Boards cleared: ' + profile.boardsCleared + '</span><span>Runs played: ' + profile.gamesPlayed + '</span></div><div class="game-summary-row"><span>Bank Coins from Pairs: ' + profile.bank + '</span><span>Current tier: ' + current.name + '</span></div><div class="game-summary-row"><span>Current streak: ' + profile.currentStreak + '</span><span>Best streak: ' + profile.bestStreak + '</span></div><div class="game-summary-row"><span>Clean Streak Bonus: +' + cleanWinBonusPct(profile.cleanWinStreak) + '%</span><span>Clean streak: ' + profile.cleanWinStreak + '</span></div><div class="game-summary-row"><span>' + nextText + '</span><span>' + current.pairs + ' pairs on current tier</span></div><div class="game-summary-row game-summary-row--stack"><span>Skills</span><span>' + skillText + '</span><span>Best streak: ' + profile.bestStreak + ' · unspent skill points: ' + profile.skillPoints + '</span></div></div></details>';
  }

  function currentMake24Tier(){
    const profile = profiles.make24 || defaultMake24Profile();
    return MAKE24_TIERS.find(t => t.id === profile.selectedTier) || MAKE24_TIERS[0];
  }
  function nextMake24TierToUnlock(){
    return MAKE24_TIERS.find(t => profiles.make24.level < t.unlockLevel) || null;
  }
  const MAKE_NUMBER_ENGINE_FACTORY = window.BASELINE_MAKE_NUMBER_ENGINE || null;
  if(!MAKE_NUMBER_ENGINE_FACTORY || typeof MAKE_NUMBER_ENGINE_FACTORY.create !== 'function') throw new Error('make_number_engine_authority_missing');
  const MAKE_NUMBER_ENGINE = MAKE_NUMBER_ENGINE_FACTORY.create({tiers:MAKE24_TIERS});
  const allMakeNumberSolutions = MAKE_NUMBER_ENGINE.allMakeNumberSolutions;
  const make24HintFromSolution = MAKE_NUMBER_ENGINE.make24HintFromSolution;
  const sameNumberMultiset = MAKE_NUMBER_ENGINE.sameNumberMultiset;
  function buildMake24Puzzle(tier,seed){
    return MAKE_NUMBER_ENGINE.buildMake24Puzzle(tier,seed,make24State);
  }














  function nextMake24Seed(tier){
    const profile = profiles.make24 || defaultMake24Profile();
    profile.roundSeedCounter = Math.max(0, Math.round(Number(profile.roundSeedCounter || 0))) + 1;
    return String(tier.id) + ':' + profile.roundSeedCounter;
  }








  function startMake24Puzzle(){
    clearAutoNextTimer('make24');
    const tier = currentMake24Tier();
    const seed = nextMake24Seed(tier);
    const puzzle = buildMake24Puzzle(tier, seed);
    profiles.make24.gamesPlayed += 1;
    make24State = {
      seed:seed,
      target:puzzle.target,
      numbers:puzzle.numbers,
      solutions:puzzle.solutions,
      hintsLeft:profiles.make24.skills.clarity || 0,
      rerollsLeft:profiles.make24.skills.reserve || 0,
      mistakes:0,
      hadFailure:false,
      roundBank:0,
      draftExpression:'',
      lastMessage:'Puzzle ready. Use all shown numbers exactly once to make ' + puzzle.target + '.',
      revealSolution:'',
      hintsUsed:0,
      completed:false
    };
    persistMake24Round();
    renderAll();
  }


  function submitMake24Expression(event){
    event.preventDefault();
    if(!make24State || make24State.completed) return;
    const input = (event && event.target && event.target.querySelector) ? event.target.querySelector('#make24ExpressionInput') : refs.make24ExpressionInput;
    if(!input) return;
    let raw = String(input.value || '').trim();
    make24State.draftExpression = String(input.value || '');
    if(!raw) return;
    raw = raw.replace(/[×xX]/g, '*').replace(/[÷]/g, '/');
    if(!/^[\d\s()+\-*/]+$/.test(raw)){
      make24State.lastMessage = 'Only whole shown numbers, brackets, and + - × ÷ are allowed.';
      persistMake24Round();
      renderMake24Board();
      focusGameInput('make24ExpressionInput');
      return;
    }
    const usedNumbers = (raw.match(/\d+/g) || []).map(Number);
    if(usedNumbers.length !== 4 || !sameNumberMultiset(usedNumbers, make24State.numbers)){
      make24State.lastMessage = 'Use each shown number exactly once. Concatenation is not allowed.';
      persistMake24Round();
      renderMake24Board();
      focusGameInput('make24ExpressionInput');
      return;
    }
    let value = NaN;
    try{ value = Function('"use strict"; return (' + raw + ');')(); }catch(_e){ value = NaN; }
    if(Number.isFinite(value) && Math.abs(value - (make24State.target || 24)) < 1e-6){
      const tier = currentMake24Tier();
      const cleanWin = !make24State.hadFailure;
      const nextClean = cleanWin ? profiles.make24.cleanWinStreak + 1 : 0;
      const cleanPct = cleanWin ? cleanWinBonusPct(nextClean) / 100 : 0;
      const bankGain = Math.round(tier.bankReward * (1 + (profiles.make24.skills.banker || 0) * 0.10) * (1 + cleanPct));
      const xpGain = Math.round(tier.xpReward * (1 + (profiles.make24.skills.flow || 0) * 0.08) * (1 + cleanPct));
      profiles.make24.bank += bankGain;
      profiles.make24.puzzlesSolved += 1;
      profiles.make24.cleanWinStreak = nextClean;
      profiles.make24.lastRoundXp = xpGain;
      const levels = levelUpFromGain(profiles.make24, xpGain);
      make24State.roundBank += bankGain;
      make24State.lastMessage = 'Solved. +' + bankGain + ' Bank Coins · +' + xpGain + ' XP' + (cleanWin && nextClean ? ' · Clean Streak Bonus +' + cleanWinBonusPct(nextClean) + '%' : '') + (levels ? ' · Player Rank +' + levels : '') + '.';
      make24State.revealSolution = '';
      make24State.draftExpression = '';
      make24State.completed = true;
      persistMake24Round();
      resolveNinjaBonuses();
      renderAll();
      completeAutoNext('make24');
      return;
    }
    make24State.mistakes += 1;
    make24State.hadFailure = true;
    profiles.make24.cleanWinStreak = 0;
    const penalty = Math.max(0, currentMake24Tier().penalty - (profiles.make24.skills.precision || 0));
    if(make24State.mistakes > 1 && penalty > 0){
      profiles.make24.bank = Math.max(0, profiles.make24.bank - penalty);
      make24State.roundBank -= penalty;
      make24State.lastMessage = 'Not ' + (make24State.target || 24) + '. -' + penalty + ' Bank Coins after repeated mistakes.';
    }else{
      make24State.lastMessage = 'Not ' + (make24State.target || 24) + ' yet. No Bank Coins deduction on the first miss.';
    }
    persistMake24Round();
    renderAll();
    focusGameInput('make24ExpressionInput');
  }
  function useMake24Hint(){
    if(!make24State || make24State.completed || make24State.hintsLeft <= 0) return;
    make24State.hintsLeft -= 1;
    const hintIndex = Math.max(0, Number(make24State.hintsUsed || 0));
    make24State.hintsUsed = hintIndex + 1;
    make24State.revealSolution = make24HintFromSolution(make24State.solutions[0] || '', hintIndex);
    make24State.lastMessage = 'Guide used. You received a light tactical prompt only.';
    persistMake24Round();
    renderMake24Board();
  }
  function rerollMake24Puzzle(){
    if(!make24State || make24State.completed || make24State.rerollsLeft <= 0) return;
    make24State.rerollsLeft -= 1;
    const tier = currentMake24Tier();
    const seed = nextMake24Seed(tier);
    const puzzle = buildMake24Puzzle(tier, seed);
    make24State.seed = seed;
    make24State.target = puzzle.target;
    make24State.numbers = puzzle.numbers;
    make24State.solutions = puzzle.solutions;
    make24State.revealSolution = '';
    make24State.draftExpression = '';
    make24State.hintsUsed = 0;
    make24State.mistakes = 0;
    make24State.lastMessage = 'Numbers rerolled. Make ' + puzzle.target + ' with the new set.';
    persistMake24Round();
    renderAll();
  }
  function spendMake24Skill(skillId){
    const profile = profiles.make24;
    reconcileSkillPoints(profile, MAKE24_SKILLS);
    const skill = MAKE24_SKILLS.find(item => item.id === skillId);
    if(!skill || profile.skillPoints <= 0 || profile.level < skill.unlockLevel || (profile.skills[skillId] || 0) >= skill.max) return;
    profile.skills[skillId] += 1;
    reconcileSkillPoints(profile, MAKE24_SKILLS);
    scheduleSave('make24');
    resolveNinjaBonuses();
    renderAll();
  }
  function renderMake24Progress(){
    const profile = profiles.make24;
    const needed = xpNeededForLevel(profile.level);
    refs.make24XpFill.style.width = clamp((profile.xp / needed) * 100, 0, 100) + '%';
    if(refs.make24LevelHeading) refs.make24LevelHeading.textContent = 'Player Rank - ' + profile.level;
    refs.make24XpMeta.textContent = profile.xp + ' / ' + needed + ' XP';
    refs.make24SkillPointsValue.textContent = String(profile.skillPoints);
    refs.make24SolvedValue.textContent = String(profile.puzzlesSolved);
    refs.make24GamesPlayedValue.textContent = String(profile.gamesPlayed);
    if(refs.make24TierValue) refs.make24TierValue.textContent = currentMake24Tier().name;
    if(refs.make24CleanStreakValue) refs.make24CleanStreakValue.textContent = String(profile.cleanWinStreak);
    if(refs.make24CleanBonusValue) refs.make24CleanBonusValue.textContent = '+' + cleanWinBonusPct(profile.cleanWinStreak) + '%';
    if(refs.make24Stats){
      refs.make24Stats.innerHTML = coherentProgressHtml(profile,'Make The Number',[
        ['Puzzles solved',profile.puzzlesSolved],
        ['Runs started',profile.gamesPlayed],
        ['Clean streak',profile.cleanWinStreak],
        ['Bank Coins earned',profile.bank],
        ['Current tier',currentMake24Tier().name],
        ['Unlocked tiers',MAKE24_TIERS.filter(t => profile.level >= t.unlockLevel).length + ' / ' + MAKE24_TIERS.length],
        ['Guide level',profile.skills.clarity],
        ['Reserve level',profile.skills.reserve]
      ]);
    }
    renderCompactGameXp('make24',profile);
    const ready = profile.skillPoints > 0;
    if(refs.make24SkillAlertBtn){ refs.make24SkillAlertBtn.disabled = !ready; refs.make24SkillAlertBtn.classList.toggle('is-ready', ready); }
    setMake24Panel(make24OpenPanel || 'make24GameCard');
  }
  function renderMake24TierList(){
    const profile = profiles.make24;
    refs.make24TierSelectList.innerHTML = MAKE24_TIERS.map(tier => {
      const locked = profile.level < tier.unlockLevel;
      const active = profile.selectedTier === tier.id;
      const detail = locked ? ('Unlock ' + tier.unlockLevel) : ('1–' + tier.maxNumber + ' · +' + tier.bankReward + ' Bank Coins');
      return '<button class="tier-btn' + (active ? ' active' : '') + '" data-make24-tier="' + tier.id + '" type="button"' + (locked ? ' disabled' : '') + '><span>' + tier.name + '</span><span>' + detail + '</span></button>';
    }).join('');
  }
  function renderMake24SkillTree(){
    const profile = profiles.make24;
    refs.make24SkillTreeGrid.innerHTML = MAKE24_SKILLS.map(skill => {
      const level = profile.skills[skill.id] || 0;
      const locked = profile.level < skill.unlockLevel;
      const maxed = level >= skill.max;
      const canSpend = profile.skillPoints > 0 && !locked && !maxed;
      const buttonLabel = locked ? ('Unlocks at Player Rank ' + skill.unlockLevel) : (maxed ? 'Maxed' : (level > 0 ? 'Upgrade skill' : 'Add skill'));
      return '<article class="skill-item"><div class="skill-meta"><h4>' + skill.name + '</h4><span>Rank ' + level + ' / ' + skill.max + '</span></div><p>' + skill.description + '</p><p class="inline-note">Requires Player Rank ' + skill.unlockLevel + '.</p><button class="action' + (canSpend ? '' : ' secondary') + '" data-make24-skill="' + skill.id + '" type="button"' + (canSpend ? '' : ' disabled') + '>' + buttonLabel + '</button></article>';
    }).join('');
    refs.make24SkillSummary.innerHTML = '<strong>Skill upgrades</strong><span class="inline-note">Clarity ' + profile.skills.clarity + ' guide use(s) · Flow +' + (profile.skills.flow * 8) + '% XP · Banker +' + (profile.skills.banker * 10) + '% Bank Coins · Reserve ' + profile.skills.reserve + ' reroll(s) · Precision -' + profile.skills.precision + ' repeat loss</span>';
  }
  function make24ExpressionNumberUsage(expression){
    const usage=Object.create(null);
    (String(expression||'').match(/\d+/g)||[]).forEach(function(raw){
      const key=String(Number(raw));
      usage[key]=(usage[key]||0)+1;
    });
    return usage;
  }
  function make24AvailableNumberCount(number){
    if(!make24State) return 0;
    return (make24State.numbers||[]).filter(function(value){return Number(value)===Number(number);}).length;
  }
  function make24BuilderStatus(){
    if(!make24State) return '';
    const raw=String(make24State.draftExpression||'').trim();
    if(!raw) return 'Choose a number to begin.';
    const opens=(raw.match(/\(/g)||[]).length;
    const closes=(raw.match(/\)/g)||[]).length;
    const last=raw.slice(-1);
    const used=(raw.match(/\d+/g)||[]).length;
    if(/[+\-*/(]$/.test(last)) return 'Choose a number' + (last==='(' ? ' inside the bracket.' : '.');
    if(used<4) return 'Add an operator, then use the remaining number' + (4-used===1?'':'s') + '.';
    if(opens>closes) return 'Close the remaining bracket' + (opens-closes===1?'':'s') + ', then submit.';
    return 'Expression ready to submit.';
  }
  function syncMake24BuilderUi(){
    if(!make24State) return;
    const input=refs.make24ExpressionInput || document.getElementById('make24ExpressionInput');
    if(input && input.value!==String(make24State.draftExpression||'')) input.value=String(make24State.draftExpression||'');
    const usage=make24ExpressionNumberUsage(make24State.draftExpression||'');
    qsa('[data-make24-number-key]',refs.make24Board||document).forEach(function(button){
      const key=button.getAttribute('data-make24-number-key')||'';
      const occurrence=Math.max(0,Number(button.getAttribute('data-make24-number-occurrence')||0));
      const used=occurrence<(usage[key]||0);
      button.classList.toggle('is-used',used);
      button.disabled=used||Boolean(make24State.completed);
    });
    const note=q('.make-number-builder-note',refs.make24Board||document);
    if(note) note.textContent=make24BuilderStatus();
  }
  function keepMake24InputFocused(){
    if(isMobileGameViewport()) return;
    const input=refs.make24ExpressionInput || document.getElementById('make24ExpressionInput');
    if(!input || input.disabled) return;
    try{
      input.focus({preventScroll:true});
      const end=String(input.value||'').length;
      if(typeof input.setSelectionRange==='function') input.setSelectionRange(end,end);
    }catch(_error){}
  }
  function appendMake24BuilderToken(token){
    if(!make24State||make24State.completed) return;
    let raw=String(make24State.draftExpression||'').trim();
    const value=String(token||'');
    const isNumber=/^\d+$/.test(value);
    const isOperator=/^[+\-*/]$/.test(value);
    const last=raw.slice(-1);
    if(isNumber){
      const usage=make24ExpressionNumberUsage(raw);
      const key=String(Number(value));
      if((usage[key]||0)>=make24AvailableNumberCount(value)) return;
      if(raw && (/\d$/.test(last)||last===')')) return;
      raw+=value;
    }else if(value==='('){
      if(raw && (/\d$/.test(last)||last===')')) return;
      raw+='(';
    }else if(value===')'){
      const opens=(raw.match(/\(/g)||[]).length;
      const closes=(raw.match(/\)/g)||[]).length;
      if(opens<=closes||(!/\d$/.test(last)&&last!==')')) return;
      raw+=')';
    }else if(isOperator){
      if(!raw||(!/\d$/.test(last)&&last!==')')) return;
      raw+=value;
    }else return;
    make24State.draftExpression=raw;
    persistMake24Round();
    syncMake24BuilderUi();
    keepMake24InputFocused();
  }
  function editMake24Builder(action){
    if(!make24State||make24State.completed) return;
    let raw=String(make24State.draftExpression||'').trimEnd();
    if(action==='clear') raw='';
    else if(action==='undo'){
      if(/\d$/.test(raw)) raw=raw.replace(/\d+$/,'');
      else raw=raw.slice(0,-1);
    }
    make24State.draftExpression=raw;
    persistMake24Round();
    syncMake24BuilderUi();
    keepMake24InputFocused();
  }

  function renderMake24Board(){
    const tier = currentMake24Tier();
    refs.make24TierNameValue.textContent = tier.name;
    if(refs.make24TargetValue) refs.make24TargetValue.textContent = make24State ? String(make24State.target || 24) : '—';
    if(!make24State){
      refs.make24MistakesValue.textContent = '0';
      refs.make24RoundBankValue.textContent = '0';
      if(refs.make24HintBtn) refs.make24HintBtn.disabled = true;
      if(refs.make24RerollBtn) refs.make24RerollBtn.disabled = true;
      refs.make24Board.innerHTML = '<div class="empty-box"><strong>Make The Number is ready.</strong><span class="inline-note">' + escapeHtml(make24IdleMessage) + '</span></div>';
      refs.make24RoundSummary.innerHTML = coherentRoundStatusHtml('Round Status','No puzzle is active yet.',profiles.make24,currentMake24Tier().name);
return;
    }
    refs.make24MistakesValue.textContent = String(make24State.mistakes);
    refs.make24RoundBankValue.textContent = String(make24State.roundBank);
    const make24HintsLeft = make24State.hintsLeft || 0;
    const make24RerollsLeft = make24State.rerollsLeft || 0;
    if(refs.make24HintBtn){ refs.make24HintBtn.disabled = make24HintsLeft <= 0; setCompactActionButton(refs.make24HintBtn,'?','Guide','H',make24HintsLeft); }
    if(refs.make24RerollBtn){ refs.make24RerollBtn.disabled = make24RerollsLeft <= 0; setCompactActionButton(refs.make24RerollBtn,'↻','Reroll','J',make24RerollsLeft); }
    const closed = !!make24State.completed;
    const usage=make24ExpressionNumberUsage(make24State.draftExpression||'');
    const occurrence=Object.create(null);
    const numberButtons=(make24State.numbers||[]).map(function(num){
      const key=String(Number(num));
      const index=occurrence[key]||0;
      occurrence[key]=index+1;
      const used=index<(usage[key]||0);
      return '<button class="number-chip' + (used?' is-used':'') + '" data-make24-token="' + escapeHtml(String(num)) + '" data-make24-number-key="' + escapeHtml(key) + '" data-make24-number-occurrence="' + index + '" type="button"' + (used||closed?' disabled':'') + ' aria-label="Use number ' + escapeHtml(String(num)) + '">' + escapeHtml(String(num)) + '</button>';
    }).join('');
    const builder = closed ? '' :
      '<form id="make24ExpressionForm" class="stack make-number-composer">' +
        '<div class="game-input-skill-row game-specific-actions"><button class="action ghost game-control-icon" id="make24BoardHintBtn" type="button" data-tooltip="Guide (' + make24HintsLeft + ') · H" title="Guide (' + make24HintsLeft + ') · H" aria-label="Guide (' + make24HintsLeft + ')"' + (make24HintsLeft<=0?' disabled':'') + '><span aria-hidden="true">?</span><span class="sr-only">Guide</span></button><button class="action ghost game-control-icon" id="make24BoardRerollBtn" type="button" data-tooltip="Reroll (' + make24RerollsLeft + ') · J" title="Reroll (' + make24RerollsLeft + ') · J" aria-label="Reroll (' + make24RerollsLeft + ')"' + (make24RerollsLeft<=0?' disabled':'') + '><span aria-hidden="true">↻</span><span class="sr-only">Reroll</span></button></div>' +
        '<div class="make-target-action-row"><input id="make24ExpressionInput" class="text-input" autocomplete="off" value="' + escapeHtml(make24State.draftExpression||'') + '" placeholder="Build or type an expression" aria-label="Number expression" /></div>' +
        '<div class="make-number-operators" aria-label="Expression controls">' +
          ['+','-','*','/','(',')'].map(function(token){ const label=token==='*'?'×':token==='/'?'÷':token; return '<button class="action ghost" data-make24-token="' + token + '" type="button" aria-label="Add ' + escapeHtml(label) + '">' + escapeHtml(label) + '</button>'; }).join('') +
        '</div>' +
        '<div class="make-number-builder-note" aria-live="polite">' + escapeHtml(make24BuilderStatus()) + '</div>' +
        '<div class="make-number-edit-row game-specific-actions"><button class="action ghost game-control-icon" data-make24-edit="undo" type="button" data-tooltip="Undo input" title="Undo input" aria-label="Undo input"><span aria-hidden="true">↶</span><span class="sr-only">Undo input</span></button><button class="action ghost game-control-icon" data-make24-edit="clear" type="button" data-tooltip="Clear expression" title="Clear expression" aria-label="Clear expression"><span aria-hidden="true">×</span><span class="sr-only">Clear expression</span></button><button class="action primary submit-game-toggle game-control-icon" type="submit" data-tooltip="Submit · Enter" title="Submit · Enter" aria-label="Submit"><span aria-hidden="true">✓</span><span class="sr-only">Submit</span></button></div>' +
      '</form>';
    refs.make24Board.innerHTML = '<div class="formula-box"><div class="make-number-target"><span>Target</span><strong>' + escapeHtml(String(make24State.target||24)) + '</strong></div><div class="numbers-strip">' + numberButtons + '</div>' + builder + (make24State.revealSolution?'<div class="solution-box">' + escapeHtml(make24State.revealSolution) + '</div>':'') + '</div>';
    refs.make24ExpressionInput=document.getElementById('make24ExpressionInput');
    refs.make24RoundSummary.innerHTML=coherentRoundStatusHtml('Round Status',make24State.lastMessage,profiles.make24,currentMake24Tier().name);
injectMobileGameControls('make24');
    syncMobileInputMode('make24');
    syncDesktopKeypadState();
  }
  function renderMake24Summary(){
    const profile = profiles.make24;
    const needed = xpNeededForLevel(profile.level);
    const pct = clamp((profile.xp / needed) * 100, 0, 100);
    const current = currentMake24Tier();
    const next = nextMake24TierToUnlock();
    const nextText = next ? ('Next unlock: ' + next.name + ' at Player Rank ' + next.unlockLevel + '.') : 'All Make The Number tiers are unlocked.';
    return '<details class="game-summary-details" data-summary="make24"><summary><span>Make The Number</span><span class="inline-note">Player Rank ' + profile.level + '</span></summary><div class="game-summary-body"><div class="game-summary-progress"><div class="xp-meta"><strong>Experience</strong><span class="inline-note">' + profile.xp + ' / ' + needed + ' XP</span></div><div class="xp-bar"><div class="xp-fill" style="width:' + pct + '%"></div></div></div><div class="game-summary-row"><span>Puzzles solved: ' + profile.puzzlesSolved + '</span><span>Runs played: ' + profile.gamesPlayed + '</span></div><div class="game-summary-row"><span>Bank Coins from Make The Number: ' + profile.bank + '</span><span>Current tier: ' + current.name + '</span></div><div class="game-summary-row"><span>Clean Streak Bonus: +' + cleanWinBonusPct(profile.cleanWinStreak) + '%</span><span>Clean streak: ' + profile.cleanWinStreak + '</span></div><div class="game-summary-row"><span>' + nextText + '</span><span>Numbers up to ' + current.maxNumber + '</span></div><div class="game-summary-row game-summary-row--stack"><span>Skills</span><span>Clarity ' + profile.skills.clarity + ' · Flow ' + profile.skills.flow + ' · Banker ' + profile.skills.banker + ' · Reserve ' + profile.skills.reserve + ' · Precision ' + profile.skills.precision + '</span><span>Unspent skill points: ' + profile.skillPoints + '</span></div></div></details>';
  }

  function currentWordTier(){
    return WORD_TIERS.find(t => t.id === profiles.detectword.selectedTier) || WORD_TIERS[0];
  }
  function nextWordTierToUnlock(){ return WORD_TIERS.find(t => profiles.detectword.level < t.unlockLevel) || null; }
  function persistPairsRound(){
    if(!profiles.pairs) return;
    // Pairs deliberately opens idle. Keep progression, tier and rewards
    // server-side, but do not persist a half-played board between openings.
    profiles.pairs.activeRound = null;
    scheduleSave('pairs');
  }

  function savedMake24RoundSnapshot(){
    if(!make24State || !profiles.make24) return null;
    return {
      tierId:currentMake24Tier().id,
      seed:Number(make24State.seed||0),
      target:Number(make24State.target||24),
      numbers:(make24State.numbers||[]).map(Number).slice(0,4),
      hintsLeft:Math.max(0,Number(make24State.hintsLeft||0)),
      rerollsLeft:Math.max(0,Number(make24State.rerollsLeft||0)),
      mistakes:Math.max(0,Number(make24State.mistakes||0)),
      hadFailure:Boolean(make24State.hadFailure),
      roundBank:Number(make24State.roundBank||0),
      draftExpression:String(make24State.draftExpression||'').slice(0,120),
      lastMessage:String(make24State.lastMessage||'').slice(0,260),
      revealSolution:String(make24State.revealSolution||'').slice(0,260),
      hintsUsed:Math.max(0,Number(make24State.hintsUsed||0)),
      completed:Boolean(make24State.completed)
    };
  }
  function persistMake24Round(){
    if(!profiles.make24) return;
    profiles.make24.activeRound=savedMake24RoundSnapshot();
    scheduleSave('make24');
  }
  function restoreSavedMake24Round(){
    const saved=profiles.make24&&profiles.make24.activeRound;
    if(!saved||typeof saved!=='object') return false;
    const tier=MAKE24_TIERS.find(function(item){return item.id===saved.tierId;});
    const numbers=Array.isArray(saved.numbers)?saved.numbers.map(Number).filter(Number.isFinite).slice(0,4):[];
    const target=Number(saved.target||24);
    if(!tier||profiles.make24.level<tier.unlockLevel||numbers.length!==4||!Number.isFinite(target)) return false;
    profiles.make24.selectedTier=tier.id;
    make24State={
      seed:Number(saved.seed||0),
      target:target,
      numbers:numbers,
      solutions:allMakeNumberSolutions(numbers,target),
      hintsLeft:Math.max(0,Math.round(Number(saved.hintsLeft||0))),
      rerollsLeft:Math.max(0,Math.round(Number(saved.rerollsLeft||0))),
      mistakes:Math.max(0,Math.round(Number(saved.mistakes||0))),
      hadFailure:Boolean(saved.hadFailure),
      roundBank:Number(saved.roundBank||0),
      draftExpression:String(saved.draftExpression||'').slice(0,120),
      lastMessage:String(saved.lastMessage||'Puzzle restored. Continue building the expression.').slice(0,260),
      revealSolution:String(saved.revealSolution||'').slice(0,260),
      hintsUsed:Math.max(0,Math.round(Number(saved.hintsUsed||0))),
      completed:Boolean(saved.completed)
    };
    return true;
  }

  function savedTrackCoinRoundSnapshot(){
    if(!trackCoinState||!profiles.trackcoin) return null;
    return {
      tierId:currentTrackCoinTier().id,
      phase:String(trackCoinState.phase||'show'),
      coinCupId:String(trackCoinState.coinCupId||''),
      pickedCupId:String(trackCoinState.pickedCupId||''),
      sequence:(trackCoinState.sequence||[]).map(function(step){
        return {duration:Number(step.duration||0),pattern:String(step.pattern||'cross'),order:Array.isArray(step.order)?step.order.slice():[]};
      }),
      cups:(trackCoinState.cups||[]).map(function(cup){return {id:cup.id,left:Number(cup.left),top:Number(cup.top),tilt:Number(cup.tilt||0)};}),
      baseTop:Number(trackCoinState.baseTop||68),
      totalDuration:Number(trackCoinState.totalDuration||0),
      speedPercent:Number(trackCoinState.speedPercent||TRACKCOIN_BASE_SPEED_PERCENT),
      speedMultiplier:Number(trackCoinState.speedMultiplier||1),
      movementSpeedMultiplier:Number(trackCoinState.movementSpeedMultiplier||1),
      targetDuration:Number(trackCoinState.targetDuration||0),
      resolved:Boolean(trackCoinState.resolved),
      lastResult:String(trackCoinState.lastResult||''),
      message:String(trackCoinState.message||'').slice(0,320)
    };
  }
  function persistTrackCoinRound(){
    if(!profiles.trackcoin) return;
    profiles.trackcoin.activeRound=savedTrackCoinRoundSnapshot();
    scheduleSave('trackcoin');
  }
  function restoreSavedTrackCoinRound(){
    const saved=profiles.trackcoin&&profiles.trackcoin.activeRound;
    if(!saved||typeof saved!=='object') return false;
    const tier=TRACKCOIN_TIERS.find(function(item){return item.id===saved.tierId;});
    if(!tier||profiles.trackcoin.level<tier.unlockLevel) return false;
    const count=tier.containers;
    const positions=trackCoinCupPositions(count);
    const ids=Array.from({length:count},function(_value,index){return 'cup'+index;});
    const validSequence=Array.isArray(saved.sequence)&&saved.sequence.length?saved.sequence.map(function(step){
      const order=Array.isArray(step&&step.order)&&step.order.length===count?step.order.map(String):[];
      return {duration:Math.max(80,Number(step&&step.duration||500)),pattern:String(step&&step.pattern||'cross'),order:order};
    }):[];
    if(!validSequence.length||!ids.includes(String(saved.coinCupId||''))) return false;

    // Repair older snapshots that did not store destination orders.
    let simulatedIds=ids.slice();
    validSequence.forEach(function(step){
      if(step.order.length!==count||step.order.some(function(id){return !ids.includes(id);})){
        step.order=trackCoinGenerateOrder(simulatedIds.map(function(id){return {id:id};}));
      }
      simulatedIds=step.order.slice();
    });

    profiles.trackcoin.selectedTier=tier.id;
    profiles.trackcoin.currentTier=tier.id;
    const resolved=Boolean(saved.resolved);
    const savedPhase=String(saved.phase||'show');
    const pickReady=!resolved&&savedPhase==='pick';
    let cups=ids.map(function(id,index){return {id:id,left:positions[index],top:Number(saved.baseTop||68),tilt:0};});
    if((resolved||pickReady)&&Array.isArray(saved.cups)&&saved.cups.length===count){
      const byId=Object.fromEntries(saved.cups.map(function(cup){return [String(cup.id||''),cup];}));
      cups=cups.map(function(cup){
        const source=byId[cup.id];
        return source?{id:cup.id,left:Number(source.left),top:Number(source.top),tilt:Number(source.tilt||0)}:cup;
      });
      cups.sort(function(a,b){return Number(a.left)-Number(b.left);});
    }
    trackCoinState={
      roundToken:++trackCoinRoundToken,
      tierId:tier.id,
      phase:resolved?'review':(pickReady?'pick':'show'),
      cups:cups,
      coinCupId:String(saved.coinCupId),
      pickedCupId:String(saved.pickedCupId||''),
      sequence:validSequence,
      pickLocked:!pickReady,
      resolved:resolved,
      lastResult:String(saved.lastResult||''),
      revealAll:resolved,
      restoredWaiting:!resolved&&!pickReady,
      reviewActive:false,
      baseTop:Number(saved.baseTop||68),
      totalDuration:Number(saved.totalDuration||0),
      speedPercent:Number(saved.speedPercent||TRACKCOIN_BASE_SPEED_PERCENT),
      speedMultiplier:Number(saved.speedMultiplier||1),
      movementSpeedMultiplier:Number(saved.movementSpeedMultiplier||1),
      targetDuration:Number(saved.targetDuration||0),
      message:resolved?'Round restored. The original result is shown.':(pickReady?'Shuffle restored. Choose the cup holding the coin.':'Round restored. Lock onto the visible coin, then resume the same saved shuffle.')
    };
    return true;
  }

  function savedRuleShiftRoundSnapshot(){
    if(!ruleShiftState||!profiles.ruleshift) return null;
    return {
      tierId:currentRuleShiftTier().id,
      round:Number(ruleShiftState.round||0),
      maxRounds:Number(ruleShiftState.maxRounds||0),
      roundBank:Number(ruleShiftState.roundBank||0),
      mistakes:Number(ruleShiftState.mistakes||0),
      hadFailure:Boolean(ruleShiftState.hadFailure),
      currentRule:ruleShiftState.currentRule?Object.assign({},ruleShiftState.currentRule):null,
      options:Array.isArray(ruleShiftState.options)?ruleShiftState.options.map(function(option){return Object.assign({},option);}):[],
      finished:Boolean(ruleShiftState.finished),
      failed:Boolean(ruleShiftState.failed),
      lastMessage:String(ruleShiftState.lastMessage||'').slice(0,320),
      lastWasRuleChange:Boolean(ruleShiftState.lastWasRuleChange),
      remainingMs:ruleShiftState.finished?0:ruleShiftRemainingMs()
    };
  }
  function persistRuleShiftRound(){
    if(!profiles.ruleshift) return;
    profiles.ruleshift.activeRound=savedRuleShiftRoundSnapshot();
    scheduleSave('ruleshift');
  }
  function restoreSavedRuleShiftRound(){
    const saved=profiles.ruleshift&&profiles.ruleshift.activeRound;
    if(!saved||typeof saved!=='object') return false;
    const tier=RULESHIFT_TIERS.find(function(item){return item.id===saved.tierId;});
    const validTypes=['colour','shape','size','notColour','notShape','colourShape','colourSize','shapeSize'];
    const rule=saved.currentRule&&typeof saved.currentRule==='object'?Object.assign({},saved.currentRule):null;
    if(rule && rule.shape==='pill') rule.shape='oval';
    if(rule && (rule.colour==='teal'||rule.colour==='lime')) rule.colour='white';
    const options=Array.isArray(saved.options)?saved.options.map(function(option){
      if(!option||typeof option!=='object') return null;
      const next=Object.assign({},option);
      if(next.shape==='pill') next.shape='oval';
      if(next.colour==='teal'||next.colour==='lime') next.colour='white';
      return next;
    }).filter(function(option){
      return option&&RULESHIFT_COLOURS.some(function(item){return item.id===option.colour;})&&RULESHIFT_SHAPES.some(function(item){return item.id===option.shape;})&&RULESHIFT_SIZES.some(function(item){return item.id===option.size;});
    }):[];
    if(!tier||profiles.ruleshift.level<tier.unlockLevel||!rule||!validTypes.includes(rule.type)||!options.length) return false;
    profiles.ruleshift.selectedTier=tier.id;
    const finished=Boolean(saved.finished);
    ruleShiftState={
      round:Math.max(1,Math.round(Number(saved.round||1))),
      maxRounds:Math.max(1,Math.round(Number(saved.maxRounds||tier.rounds))),
      roundBank:Number(saved.roundBank||0),
      mistakes:Math.max(0,Math.round(Number(saved.mistakes||0))),
      hadFailure:Boolean(saved.hadFailure),
      currentRule:rule,
      options:options,
      finished:finished,
      failed:Boolean(saved.failed),
      lastMessage:String(saved.lastMessage||'Run restored. Re-read the active rule before choosing.').slice(0,320),
      lastWasRuleChange:Boolean(saved.lastWasRuleChange),
      deadlineAt:0,
      pausedRemainingMs:finished?null:clamp(Number(saved.remainingMs||ruleShiftTimeLimitMs(tier)),1000,ruleShiftTimeLimitMs(tier)),
      resolvingTimeout:false
    };
    return true;
  }

  function savedWordRoundSnapshot(){
    if(!wordState || !profiles.detectword) return null;
    const tier = WORD_TIERS.find(item => item.id === wordState.tierId) || currentWordTier();
    if(!tier || !wordState.secret) return null;
    return {
      tierId:tier.id,
      secret:String(wordState.secret || ''),
      guesses:(wordState.guesses || []).map(entry => ({ word:entry.word })),
      maxGuesses:wordState.maxGuesses,
      roundBank:wordState.roundBank,
      draftGuess:String(wordState.draftGuess || '').slice(0, tier.letters),
      lastMessage:String(wordState.lastMessage || ''),
      hadFailure:Boolean(wordState.hadFailure)
    };
  }
  function persistWordRound(){
    if(!profiles.detectword) return;
    profiles.detectword.activeRound = savedWordRoundSnapshot();
    scheduleSave('detectword');
  }
  function restoreSavedWordRound(){
    const saved = profiles.detectword && profiles.detectword.activeRound;
    if(!saved || typeof saved !== 'object') return false;
    const tier = WORD_TIERS.find(item => item.id === saved.tierId);
    if(!tier || profiles.detectword.level < tier.unlockLevel) return false;
    profiles.detectword.selectedTier = tier.id;
    wordState = {
      tierId:tier.id,
      secret:saved.secret,
      guesses:(saved.guesses || []).map(entry => ({ word:entry.word, evaluation:evaluateWordGuess(entry.word, saved.secret) })),
      maxGuesses:saved.maxGuesses,
      roundBank:saved.roundBank,
      draftGuess:saved.draftGuess || '',
      lastMessage:saved.lastMessage || ('Round restored. Submit a ' + tier.letters + '-letter guess.'),
      hadFailure:Boolean(saved.hadFailure)
    };
    return true;
  }
  function restoreSavedCoreRounds(){
    clearAutoNextTimer('pairs');
    clearAutoNextTimer('detectword');
    clearAutoNextTimer('make24');
    clearAutoNextTimer('trackcoin');
    clearAutoNextTimer('ruleshift');
    cancelTrackCoinAnimation();
    clearRuleShiftTimer();

    // Pairs deliberately opens idle. Its progression persists, but a partially
    // played memory board never returns when the activity is opened.
    pairsBoardState=null;
    pairsIdleMessage='Choose a board tier and press New Game when you are ready.';
    if(profiles.pairs && profiles.pairs.activeRound!=null){
      profiles.pairs.activeRound=null;
      scheduleSave('pairs');
    }

    // These games are resumable. Their active round is account-backed and is
    // restored after hydration; New Game remains an explicit one-press reset.
    wordState=null;
    make24State=null;
    trackCoinState=null;
    ruleShiftState=null;
    const wordRestored=restoreSavedWordRound();
    const makeRestored=restoreSavedMake24Round();
    const trackRestored=restoreSavedTrackCoinRound();
    const ruleRestored=restoreSavedRuleShiftRound();
    if(!wordRestored) wordIdleMessage='Choose a letter tier and press New Game when you are ready.';
    if(!makeRestored) make24IdleMessage='Choose a number tier and press New Game when you are ready.';
    if(!trackRestored) trackCoinState=null;
    if(!ruleRestored) ruleShiftIdleMessage='Choose a rule tier and press New Game when you are ready.';
  }

  function startWordRound(){
    clearAutoNextTimer('detectword');
    const tier = currentWordTier();
    const secret = chooseRandomWord(tier.letters);
    profiles.detectword.gamesPlayed += 1;
    wordState = {
      tierId:tier.id,
      secret,
      guesses:[],
      maxGuesses: 6 + (profiles.detectword.skills.reserve || 0),
      roundBank:0,
      draftGuess:'',
      lastMessage:'Round ready. Submit a ' + tier.letters + '-letter guess.',
      hadFailure:false
    };
    persistWordRound();
    renderAll();
  }
  function submitWordGuess(event){
    event.preventDefault();
    if(!wordState) return;
    const input = (event && event.target && event.target.querySelector) ? event.target.querySelector('#wordGuessInput') : refs.wordGuessInput;
    if(!input) return;
    const tier = currentWordTier();
    const guess = String(input.value || '').trim().toLowerCase();
    wordState.draftGuess = String(input.value || '');
    if(guess.length !== tier.letters){ wordState.lastMessage = 'Enter a ' + tier.letters + '-letter word.'; persistWordRound(); renderWordBoard(); focusGameInput('wordGuessInput'); return; }
    if(!/^[a-z]+$/.test(guess)){ wordState.lastMessage = 'Use letters only.'; persistWordRound(); renderWordBoard(); focusGameInput('wordGuessInput'); return; }
    if(wordState.guesses.some(entry => entry.word === guess)){ wordState.lastMessage = 'That guess was already used in this round.'; persistWordRound(); renderWordBoard(); focusGameInput('wordGuessInput'); return; }
    const evaluation = evaluateWordGuess(guess, wordState.secret);
    wordState.guesses.push({ word:guess, evaluation });
    wordState.draftGuess = '';
    if(guess === wordState.secret){
      const profile = profiles.detectword;
      profile.wordsSolved += 1;
      profile.currentStreak += 1;
      // Detect the Word counts consecutive completed wins. Intermediate
      // guesses do not break the clean streak; only an actual game-over does.
      const nextClean = profile.cleanWinStreak + 1;
      profile.cleanWinStreak = nextClean;
      profile.bestStreak = Math.max(profile.bestStreak, profile.currentStreak);
      const rewardMult = computeWordRewardMultiplier(profile) * (1 + (cleanWinBonusPct(nextClean) / 100));
      const bankGain = Math.round(tier.bankReward * (1 + (profile.skills.banker || 0) * 0.10) * rewardMult);
      const xpGain = Math.round(tier.xpReward * (1 + (profile.skills.flow || 0) * 0.08) * rewardMult);
      profile.bank += bankGain;
      profile.lastRoundXp = xpGain;
      profile.lastRoundWord = String(wordState.secret || '').toUpperCase();
      const levels = levelUpFromGain(profile, xpGain);
      wordState.roundBank += bankGain;
      wordState.lastMessage = 'Solved. +' + bankGain + ' Bank Coins · +' + xpGain + ' XP' + cleanBonusRewardText(nextClean) + (levels ? ' · Player Rank +' + levels : '') + '.';
      profiles.detectword.activeRound = null;
      scheduleSave('detectword');
      resolveNinjaBonuses();
      renderAll();
      completeAutoNext('detectword');
      return;
    }
    if(wordState.guesses.length >= wordState.maxGuesses){
      wordState.hadFailure = true;
      profiles.detectword.currentStreak = 0;
      profiles.detectword.cleanWinStreak = 0;
      profiles.detectword.lastRoundXp = 0;
      profiles.detectword.lastRoundWord = String(wordState.secret || '').toUpperCase();
      wordState.lastMessage = 'Round ended. Word was ' + wordState.secret.toUpperCase() + '.';
      profiles.detectword.activeRound = null;
      scheduleSave('detectword');
      renderAll();
      completeAutoNext('detectword');
      return;
    }
    wordState.lastMessage = 'Guess logged. Keep reading the pattern.';
    persistWordRound();
    renderAll();
    focusGameInput('wordGuessInput');
  }
  function spendWordSkill(skillId){
    const profile = profiles.detectword;
    reconcileSkillPoints(profile, WORD_SKILLS);
    const skill = WORD_SKILLS.find(item => item.id === skillId);
    if(!skill || profile.skillPoints <= 0 || profile.level < skill.unlockLevel || (profile.skills[skillId] || 0) >= skill.max) return;
    profile.skills[skillId] += 1;
    reconcileSkillPoints(profile, WORD_SKILLS);
    scheduleSave('detectword');
    resolveNinjaBonuses();
    renderAll();
  }
  function renderWordProgress(){
    const profile = profiles.detectword;
    const needed = xpNeededForLevel(profile.level);
    refs.wordXpFill.style.width = clamp((profile.xp / needed) * 100, 0, 100) + '%';
    if(refs.wordLevelHeading) refs.wordLevelHeading.textContent = 'Player Rank - ' + profile.level;
    refs.wordXpMeta.textContent = profile.xp + ' / ' + needed + ' XP';
    refs.wordSkillPointsValue.textContent = String(profile.skillPoints);
    refs.wordSolvedValue.textContent = String(profile.wordsSolved);
    refs.wordStreakValue.textContent = String(profile.currentStreak);
    if(refs.wordTierValue) refs.wordTierValue.textContent = currentWordTier().name;
    if(refs.wordBestStreakValue) refs.wordBestStreakValue.textContent = String(profile.bestStreak);
    if(refs.wordCleanStreakValue) refs.wordCleanStreakValue.textContent = String(profile.cleanWinStreak);
    if(refs.wordCleanBonusValue) refs.wordCleanBonusValue.textContent = '+' + cleanWinBonusPct(profile.cleanWinStreak) + '%';
    if(refs.wordStats){
      refs.wordStats.innerHTML = coherentProgressHtml(profile,'Detect The Word',[
        ['Words solved',profile.wordsSolved],
        ['Best streak',profile.bestStreak],
        ['Current streak',profile.currentStreak],
        ['Clean streak',profile.cleanWinStreak],
        ['Bank Coins earned',profile.bank],
        ['Current tier',currentWordTier().name],
        ['Unlocked tiers',WORD_TIERS.filter(t => profile.level >= t.unlockLevel).length + ' / ' + WORD_TIERS.length],
        ['Focus level',profile.skills.focus]
      ]);
    }
    renderCompactGameXp('detectword',profile);
    const ready = profile.skillPoints > 0;
    if(refs.wordSkillAlertBtn){ refs.wordSkillAlertBtn.disabled = !ready; refs.wordSkillAlertBtn.classList.toggle('is-ready', ready); }
    setWordPanel(wordOpenPanel || 'wordGameCard');
  }
  function renderWordTierList(){
    const profile = profiles.detectword;
    refs.wordTierSelectList.innerHTML = WORD_TIERS.map(tier => {
      const locked = profile.level < tier.unlockLevel;
      const active = profile.selectedTier === tier.id;
      const detail = locked ? ('Unlock ' + tier.unlockLevel) : ('+' + tier.bankReward + ' Bank Coins / +' + tier.xpReward + ' XP');
      return '<button class="tier-btn' + (active ? ' active' : '') + '" data-word-tier="' + tier.id + '" type="button"' + (locked ? ' disabled' : '') + '><span>' + tier.name + '</span><span>' + detail + '</span></button>';
    }).join('');
  }
  function renderWordSkillTree(){
    const profile = profiles.detectword;
    refs.wordSkillTreeGrid.innerHTML = WORD_SKILLS.map(skill => {
      const level = profile.skills[skill.id] || 0;
      const locked = profile.level < skill.unlockLevel;
      const maxed = level >= skill.max;
      const canSpend = profile.skillPoints > 0 && !locked && !maxed;
      const buttonLabel = locked ? ('Unlocks at Player Rank ' + skill.unlockLevel) : (maxed ? 'Maxed' : (level > 0 ? 'Upgrade skill' : 'Add skill'));
      return '<article class="skill-item"><div class="skill-meta"><h4>' + skill.name + '</h4><span>Rank ' + level + ' / ' + skill.max + '</span></div><p>' + skill.description + '</p><p class="inline-note">Requires Player Rank ' + skill.unlockLevel + '.</p><button class="action' + (canSpend ? '' : ' secondary') + '" data-word-skill="' + skill.id + '" type="button"' + (canSpend ? '' : ' disabled') + '>' + buttonLabel + '</button></article>';
    }).join('');
    refs.wordSkillSummary.innerHTML = '<strong>Skill upgrades</strong><span class="inline-note">Flow +' + (profile.skills.flow * 8) + '% XP · Banker +' + (profile.skills.banker * 10) + '% Bank Coins · Reserve +' + profile.skills.reserve + ' guesses · Focus streak scaler ' + profile.skills.focus + '</span>';
  }
  function wordFeedbackLegendHtml(){
    return '<div class="word-feedback-legend" aria-label="Letter feedback legend"><span><i class="word-feedback-dot word-feedback-dot--correct" aria-hidden="true"></i>Correct place</span><span><i class="word-feedback-dot word-feedback-dot--present" aria-hidden="true"></i>In word, different place</span><span><i class="word-feedback-dot word-feedback-dot--absent" aria-hidden="true"></i>Not in word</span></div>';
  }
  function renderWordBoard(){
    const tier = currentWordTier();
    refs.wordTierNameValue.textContent = tier.name;
    if(!wordState){
      refs.wordGuessesValue.textContent = '0 / 6';
      refs.wordRoundBankValue.textContent = '0';
      refs.wordBoard.innerHTML = '<div class="empty-box"><strong>Detect The Word is idle.</strong><span class="inline-note">' + escapeHtml(wordIdleMessage) + '</span></div>';
      refs.wordRoundSummary.innerHTML = coherentRoundStatusHtml('Round Status','No word round is active yet.',profiles.detectword,currentWordTier().name,undefined,[['Previous Word',profiles.detectword.lastRoundWord||'—']]);
return;
    }
    refs.wordGuessesValue.textContent = wordState.guesses.length + ' / ' + wordState.maxGuesses;
    refs.wordRoundBankValue.textContent = String(wordState.roundBank);
    const rows = [];
    for(let i = 0; i < wordState.maxGuesses; i += 1){
      const guess = wordState.guesses[i];
      const cells = [];
      if(guess){
        guess.evaluation.forEach(entry => cells.push('<div class="letter-cell ' + entry.state + '">' + entry.letter.toUpperCase() + '</div>'));
      }else{
        for(let j = 0; j < tier.letters; j += 1){ cells.push('<div class="letter-cell">&nbsp;</div>'); }
      }
      rows.push('<div class="word-row" style="--letters:' + tier.letters + '">' + cells.join('') + '</div>');
    }
    const solved = wordState.guesses.some(entry => entry.word === wordState.secret);
    const ended = solved || wordState.guesses.length >= wordState.maxGuesses;
    const legendHtml = wordFeedbackLegendHtml();
    const resultHtml = solved
      ? '<div class="solution-box word-result-box"><strong>Word solved: ' + escapeHtml(wordState.secret.toUpperCase()) + '</strong><span class="inline-note">Round complete.</span></div>'
      : '<div class="solution-box word-result-box"><strong>Word was ' + escapeHtml(wordState.secret.toUpperCase()) + '</strong><span class="inline-note">Round complete.</span></div>';
    refs.wordBoard.innerHTML = '<div class="word-box word-box--active"><div class="word-grid">' + rows.join('') + '</div>' + legendHtml + (!ended ? '<form id="wordGuessForm" class="stack word-entry-stack"><div class="word-form-row"><input id="wordGuessInput" class="text-input" autocomplete="off" maxlength="' + tier.letters + '" value="' + escapeHtml(wordState.draftGuess || '') + '" placeholder="Enter a ' + tier.letters + '-letter word"/></div>' + mobileSubmitButtonHtml() + '</form>' : resultHtml) + '</div>';
    refs.wordGuessInput = document.getElementById('wordGuessInput');
    injectMobileGameControls('detectword');
    syncWordKeypadKnowledge();
    syncDesktopKeypadState();
    refs.wordRoundSummary.innerHTML = coherentRoundStatusHtml('Round Status',wordState.lastMessage,profiles.detectword,currentWordTier().name,undefined,[['Previous Word',profiles.detectword.lastRoundWord||'—']]);
if(refs.wordGuessInput && !ended) focusGameInput('wordGuessInput');
  }

  function renderDetectWordSummary(){
    const profile = profiles.detectword;
    const needed = xpNeededForLevel(profile.level);
    const pct = clamp((profile.xp / needed) * 100, 0, 100);
    const current = currentWordTier();
    const next = nextWordTierToUnlock();
    const nextText = next ? ('Next unlock: ' + next.name + ' at Player Rank ' + next.unlockLevel + '.') : 'All Detect The Word tiers are unlocked.';
    return '<details class="game-summary-details" data-summary="detectword"><summary><span>Detect The Word</span><span class="inline-note">Player Rank ' + profile.level + '</span></summary><div class="game-summary-body"><div class="game-summary-progress"><div class="xp-meta"><strong>Experience</strong><span class="inline-note">' + profile.xp + ' / ' + needed + ' XP</span></div><div class="xp-bar"><div class="xp-fill" style="width:' + pct + '%"></div></div></div><div class="game-summary-row"><span>Words solved: ' + profile.wordsSolved + '</span><span>Best streak: ' + profile.bestStreak + '</span></div><div class="game-summary-row"><span>Bank Coins from Detect The Word: ' + profile.bank + '</span><span>Current tier: ' + current.name + '</span></div><div class="game-summary-row"><span>Clean Streak Bonus: +' + cleanWinBonusPct(profile.cleanWinStreak) + '%</span><span>Clean streak: ' + profile.cleanWinStreak + '</span></div><div class="game-summary-row"><span>' + nextText + '</span><span>Runs played: ' + profile.gamesPlayed + '</span></div><div class="game-summary-row game-summary-row--stack"><span>Skills</span><span>Flow ' + profile.skills.flow + ' · Banker ' + profile.skills.banker + ' · Reserve ' + profile.skills.reserve + ' · Focus ' + profile.skills.focus + '</span><span>Unspent skill points: ' + profile.skillPoints + '</span></div></div></details>';
  }

  function resolveNinjaBonuses(){ const method = realmHostMethod('resolveBonuses'); return method ? method() : {}; }
  function applyOfflineNinjaProgress(){ const method = realmHostMethod('applyOfflineProgress'); return method ? method() : undefined; }
  function startNinjaLoop(){ const method = realmHostMethod('startLoop'); return method ? method() : undefined; }


  function toggleRealmFullscreen(){ const method = realmHostMethod('toggleFullscreen'); return method ? method() : undefined; }
  function renderNinja(){ const method = realmHostMethod('render'); return method ? method() : undefined; }
  function renderNinjaSummary(){
    const method = realmHostMethod('renderSummary');
    if(method){
      const summary = method();
      if(summary) return summary;
    }
    const profile = profiles.ninja || fallbackNinjaProfile();
    const traits = profile.bonusCache && Array.isArray(profile.bonusCache.unlockedTraits) ? profile.bonusCache.unlockedTraits : [];
    return '<details class="game-summary-details" data-summary="ninja"><summary><span>Baseline Realm</span><span class="inline-note">Stage ' + profile.stage + '</span></summary><div class="game-summary-body"><div class="game-summary-row"><span>Highest stage: ' + profile.highestStage + '</span><span>Spirit: ' + profile.spirit + '</span></div><div class="game-summary-row"><span>Total coins earned: ' + formatInt(profile.totalCoinsEarned) + '</span><span>Bosses defeated: ' + profile.bossesDefeated + '</span></div><div class="game-summary-row"><span>Clean Streak Bonus: +' + cleanWinBonusPct(profile.cleanWinStreak) + '%</span><span>Clean streak: ' + profile.cleanWinStreak + '</span></div><div class="game-summary-row game-summary-row--stack"><span>Resolved bonus traits</span><span>' + escapeHtml(traits.join(' · ') || 'Baseline Realm loads when selected.') + '</span></div></div></details>';
  }


  function cancelTrackCoinAnimation(){
    if(trackCoinAnimationFrame){ window.cancelAnimationFrame(trackCoinAnimationFrame); trackCoinAnimationFrame = 0; }
    if(trackCoinShuffleTimer){ window.clearTimeout(trackCoinShuffleTimer); trackCoinShuffleTimer = 0; }
  }

  function currentTrackCoinTier(){
    return TRACKCOIN_TIERS.find(t => t.id === profiles.trackcoin.selectedTier) || TRACKCOIN_TIERS[0];
  }
  function trackCoinUnlockedTier(){
    const id = highestUnlockedTrackCoinTier(profiles.trackcoin);
    return TRACKCOIN_TIERS.find(t => t.id === id) || TRACKCOIN_TIERS[0];
  }
  function trackCoinStreakBonusPct(streak){
    const match = TRACKCOIN_STREAK_BONUS.find(item => streak >= item.streak);
    return match ? match.pct : 0;
  }
  function trackCoinAccuracy(profile){
    return profile.totalRounds > 0 ? (profile.totalCorrect / Math.max(1, profile.totalRounds)) : 0;
  }
  function trackCoinRpgUnlocked(profile){
    return profile.level >= 10 || profile.bestStreak >= 20 || (profile.totalRounds >= 20 && trackCoinAccuracy(profile) >= 0.85) || (profile.level >= 6 && (TRACKCOIN_TIERS.findIndex(t => t.id === profile.highestUnlockedTier) >= 2));
  }
  function trackCoinCupPositions(count){
    const total = Math.max(1, Number(count || 1));
    if(total === 1) return [50];
    const mobile = isMobileGameViewport();
    // Keep the full cup group centred on mobile and prevent edge clipping.
    // This calculation is symmetric around 50%, so Track The Coin never drifts left/right.
    const spacing = mobile
      ? (total <= 3 ? 22 : total <= 4 ? 18.5 : total <= 5 ? 15.5 : 12.8)
      : (total <= 3 ? 25 : total <= 4 ? 22 : total <= 5 ? 18 : 15);
    const totalSpread = Math.min(mobile ? 66 : 72, spacing * (total - 1));
    const step = totalSpread / Math.max(1, total - 1);
    const start = 50 - (totalSpread / 2);
    return Array.from({ length:total }, (_, index) => +(start + (step * index)).toFixed(2));
  }

  function trackCoinNormaliseSpeedPercent(value){
    const n = Math.round(Number(value || TRACKCOIN_BASE_SPEED_PERCENT));
    return Math.max(TRACKCOIN_BASE_SPEED_PERCENT, n);
  }
  function trackCoinCurrentSpeedPercent(profile){
    return trackCoinNormaliseSpeedPercent(profile && profile.trackCoinSpeedPercent);
  }
  function trackCoinSpeedMultiplier(profile){
    return trackCoinCurrentSpeedPercent(profile) / TRACKCOIN_BASE_SPEED_PERCENT;
  }
  function trackCoinMovementSpeedMultiplier(profile){
    return Math.max(0.01, trackCoinSpeedMultiplier(profile) * TRACKCOIN_START_SPEED_SCALE);
  }
  function trackCoinPreviousMilestone(speedPercent){
    const speed = trackCoinNormaliseSpeedPercent(speedPercent);
    if(speed < TRACKCOIN_FIRST_MILESTONE_PERCENT) return TRACKCOIN_BASE_SPEED_PERCENT;
    return Math.floor(speed / TRACKCOIN_MILESTONE_STEP_PERCENT) * TRACKCOIN_MILESTONE_STEP_PERCENT;
  }
  function trackCoinFailureFallbackSpeed(speedPercent){
    const speed = trackCoinNormaliseSpeedPercent(speedPercent);
    const milestone = trackCoinPreviousMilestone(speed);
    if(milestone >= TRACKCOIN_FIRST_MILESTONE_PERCENT && speed > milestone) return milestone;
    return TRACKCOIN_BASE_SPEED_PERCENT;
  }
  function trackCoinNextSpeedAfterCorrect(speedPercent){
    return trackCoinNormaliseSpeedPercent(speedPercent) + TRACKCOIN_SPEED_STEP_PERCENT;
  }
  function trackCoinSpeedStatusText(profile){
    const speed = trackCoinCurrentSpeedPercent(profile);
    const milestone = trackCoinPreviousMilestone(speed);
    const protectedText = speed > milestone && milestone >= TRACKCOIN_FIRST_MILESTONE_PERCENT
      ? ' · milestone fallback ' + milestone + '%'
      : (speed >= TRACKCOIN_FIRST_MILESTONE_PERCENT && speed % TRACKCOIN_MILESTONE_STEP_PERCENT === 0 ? ' · milestone reached' : '');
    return 'Cup speed ' + speed + '%' + protectedText;
  }
  function buildTrackCoinRound(){
    const tier = currentTrackCoinTier();
    const profile = profiles.trackcoin || defaultTrackCoinProfile();
    const count = tier.containers;
    const positions = trackCoinCupPositions(count);
    const baseTop = isMobileGameViewport() ? (count >= 5 ? 90 : 100) : (count >= 5 ? 64 : 68);
    const cups = Array.from({ length:count }, (_, index) => ({ id:'cup' + index, left:positions[index], top:baseTop, tilt:0 }));
    const coinCupId = cups[Math.floor(Math.random() * count)].id;
    const speedPercent = trackCoinCurrentSpeedPercent(profile);
    const speedMultiplier = trackCoinSpeedMultiplier(profile);
    const movementSpeedMultiplier = trackCoinMovementSpeedMultiplier(profile);
    const baseStepDuration = Number(tier.speed || 740);
    const speedStepDuration = Math.max(90, Math.round(baseStepDuration / movementSpeedMultiplier));
    const targetDuration = TRACKCOIN_SHUFFLE_MIN_MS + Math.floor(Math.random() * ((TRACKCOIN_SHUFFLE_MAX_MS - TRACKCOIN_SHUFFLE_MIN_MS) + 1));
    const minimumTierSteps = Math.max(TRACKCOIN_MIN_MOVES, (tier.minSwaps || 1) + count);
    const stepsCount = Math.max(minimumTierSteps, Math.ceil(targetDuration / speedStepDuration));
    const stepDuration = Math.max(1, Math.round(targetDuration / stepsCount));
    const tierIndex=Math.max(0,TRACKCOIN_TIERS.findIndex(function(item){return item.id===tier.id;}));
    const simplePatterns=['cross','rise','drop','diagonal'];
    const intermediatePatterns=simplePatterns.concat(['zigzag','sweep']);
    const advancedPatterns=intermediatePatterns.concat(['orbit','spiral','feint']);
    const patterns=tierIndex<=1?simplePatterns:(tierIndex<=3?intermediatePatterns:advancedPatterns);
    const sequence = Array.from({ length:stepsCount }, () => ({ duration:stepDuration, pattern:patterns[Math.floor(Math.random() * patterns.length)] }));

    // Store each destination order up-front so replay and restored rounds use
    // the exact same route rather than generating a different shuffle.
    let simulatedIds=cups.map(function(cup){return cup.id;});
    sequence.forEach(function(step){
      const proxy=simulatedIds.map(function(id){return {id:id};});
      step.order=trackCoinGenerateOrder(proxy);
      simulatedIds=step.order.slice();
    });
    const totalDuration = stepDuration * stepsCount;
    return {
      tierId:tier.id, phase:'show', cups, coinCupId, sequence, pickLocked:true, resolved:false,
      message:'Watch the coin before it is covered, then track every cup through a 6–8 second shuffle. ' + trackCoinSpeedStatusText(profile) + '.', revealAll:false, baseTop, totalDuration, speedPercent, speedMultiplier, movementSpeedMultiplier, targetDuration
    };
  }
  function trackCoinGenerateOrder(cups){
    const current = cups.map(cup => cup.id);
    if(current.length < 2) return current.slice();
    let order = shuffle(current);
    let attempts = 0;
    while(attempts < 24){
      const everyCupMoves = order.every((id, index) => id !== current[index]);
      const longJump = current.length < 3 || order.some((id, index) => Math.abs(current.indexOf(id) - index) >= 2);
      if(everyCupMoves && longJump) return order;
      order = shuffle(current);
      attempts += 1;
    }
    // A non-zero rotation is a guaranteed derangement: no cup pauses in place
    // while the next shuffle segment begins.
    const offset = 1 + Math.floor(Math.random() * Math.max(1,current.length - 1));
    return current.slice(offset).concat(current.slice(0, offset));
  }
  function trackCoinMidTop(pattern, baseTop, slotIndex, count, direction){
    const centered = slotIndex - ((count - 1) / 2);
    if(pattern === 'rise') return baseTop - 46 - (Math.abs(centered) * 4);
    if(pattern === 'drop') return baseTop + 34 + (Math.abs(centered) * 3);
    if(pattern === 'diagonal') return baseTop + (centered * 16 * direction);
    if(pattern === 'orbit') return baseTop - 18 + (Math.sin((slotIndex + 1) * 1.35) * 32);
    if(pattern === 'zigzag') return baseTop - 28 + ((slotIndex % 2 === 0 ? -1 : 1) * 28);
    if(pattern === 'sweep') return baseTop - 10 + (direction * 34) - (Math.abs(centered) * 5);
    if(pattern === 'spiral') return baseTop - 36 + Math.sin((slotIndex + 1) * 1.8) * 40;
    if(pattern === 'feint') return baseTop - 14 + ((slotIndex % 2 === 0 ? -1 : 1) * 34);
    return baseTop - 30 + ((slotIndex % 2 === 0 ? -1 : 1) * 16);
  }
  function trackCoinFinalTop(pattern, baseTop, slotIndex){
    if(pattern === 'orbit') return baseTop + (Math.cos((slotIndex + 1) * 1.2) * 10);
    if(pattern === 'diagonal') return baseTop + ((slotIndex % 2 === 0 ? -1 : 1) * 8);
    if(pattern === 'zigzag') return baseTop + ((slotIndex % 2 === 0 ? -1 : 1) * 10);
    if(pattern === 'sweep') return baseTop + ((slotIndex % 3) - 1) * 6;
    if(pattern === 'spiral') return baseTop + Math.cos((slotIndex + 1) * 1.4) * 12;
    return baseTop + ((slotIndex % 3) - 1) * 4;
  }
  function syncTrackCoinMotionDom(){
    if(!trackCoinState || !refs.trackCoinBoard) return;
    const lane = q('.trackcoin-lane', refs.trackCoinBoard);
    if(!lane) return;
    const cupNodes = qsa('.trackcoin-cup[data-trackcoin-cup-id]', lane);
    if(!cupNodes.length) return;
    const byId = Object.create(null);
    cupNodes.forEach(function(node){
      const id = node.getAttribute('data-trackcoin-cup-id') || '';
      if(id) byId[id] = node;
    });
    trackCoinState.cups.forEach(function(cup, index){
      const node = byId[cup.id] || cupNodes[index];
      if(!node) return;
      node.style.left = cup.left + '%';
      node.style.top = cup.top + 'px';
      node.style.setProperty('--cup-tilt', cup.tilt + 'deg');
    });
  }

  function startTrackCoinRound(options){
    clearAutoNextTimer('trackcoin');
    cancelTrackCoinAnimation();
    const roundToken = ++trackCoinRoundToken;
    const profile = profiles.trackcoin;
    profile.selectedTier = currentTrackCoinTier().id;
    profile.currentTier = profile.selectedTier;
    trackCoinState = buildTrackCoinRound();
    trackCoinState.roundToken = roundToken;
    const startWindowMs = options && Number(options.startWindowMs) ? Number(options.startWindowMs) : 1100;
    if(startWindowMs >= 3000){
      trackCoinState.message = 'Auto-next started. You have a 3 second start window: lock onto the visible coin before the cup drops. ' + trackCoinSpeedStatusText(profile) + '.';
    }
    persistTrackCoinRound();
    renderTrackCoin();
    trackCoinShuffleTimer = window.setTimeout(function(){
      if(!trackCoinState || trackCoinState.roundToken !== roundToken) return;
      trackCoinState.phase = 'cover';
      trackCoinState.message = 'The coin is covered. Hold the starting position, then follow the full shuffle. ' + trackCoinSpeedStatusText(profile) + '.';
      persistTrackCoinRound();
      renderTrackCoin();
      trackCoinShuffleTimer = window.setTimeout(function(){
        if(!trackCoinState || trackCoinState.roundToken !== roundToken) return;
        trackCoinState.phase = 'hide';
        trackCoinState.message = 'Shuffle started. Follow every cup movement. ' + trackCoinSpeedStatusText(profile) + '.';
        persistTrackCoinRound();
        renderTrackCoin();
        runTrackCoinShuffle(0, roundToken);
      }, 700);
    }, startWindowMs);
  }
  function runTrackCoinShuffle(_stepIndex, roundToken, onComplete){
    if(!trackCoinState || trackCoinState.roundToken !== roundToken || trackCoinState.phase !== 'hide') return;
    cancelTrackCoinAnimation();
    const cups=trackCoinState.cups;
    const positions=trackCoinCupPositions(cups.length);
    const byId=Object.create(null);
    cups.forEach(function(cup){ byId[cup.id]={left:cup.left,top:cup.top,tilt:cup.tilt}; });
    const plans=[];
    let cursor=0;
    trackCoinState.sequence.forEach(function(step){
      const order=Array.isArray(step.order)&&step.order.length===cups.length ? step.order.slice() : trackCoinGenerateOrder(cups);
      step.order=order.slice();
      const targetIndex=Object.fromEntries(order.map(function(id,index){return [id,index];}));
      const duration=Math.max(120,Number(step.duration)||600);
      const transitions={};
      cups.forEach(function(cup,currentIndex){
        const start=Object.assign({},byId[cup.id]);
        const destIndex=targetIndex[cup.id];
        const destLeft=positions[destIndex];
        const direction=destLeft>=start.left?1:-1;
        const target={
          left:destLeft,
          top:trackCoinState.baseTop,
          tilt:(destIndex%2===0?-1:1)*(step.pattern==='cross'?3:2)
        };
        transitions[cup.id]={
          start:start,
          target:target,
          arc:trackCoinMidTop(step.pattern,trackCoinState.baseTop,destIndex,cups.length,direction)-((start.top+target.top)/2)
        };
        byId[cup.id]=target;
      });
      plans.push({startAt:cursor,endAt:cursor+duration,duration:duration,transitions:transitions});
      cursor+=duration;
    });
    const total=Math.max(1,cursor);
    const started=performance.now();
    function finish(){
      cups.sort(function(a,b){return a.left-b.left;});
      trackCoinAnimationFrame=0;
      syncTrackCoinMotionDom();
      if(typeof onComplete==='function'){ onComplete(); return; }
      if(!trackCoinState || trackCoinState.roundToken!==roundToken) return;
      trackCoinState.phase='pick';
      trackCoinState.pickLocked=false;
      trackCoinState.message='Select the cup holding the coin.';
      persistTrackCoinRound();
      renderTrackCoin();
    }
    function frame(now){
      if(!trackCoinState || trackCoinState.roundToken!==roundToken || trackCoinState.phase!=='hide') return;
      const elapsed=Math.min(total,Math.max(0,now-started));
      let planIndex=plans.length-1;
      for(let i=0;i<plans.length;i+=1){ if(elapsed<=plans[i].endAt){planIndex=i;break;} }
      const plan=plans[planIndex];
      const t=clamp((elapsed-plan.startAt)/plan.duration,0,1);
      const t2=t*t,t3=t2*t;
      const h00=(2*t3)-(3*t2)+1;
      const h10=t3-(2*t2)+t;
      const h01=(-2*t3)+(3*t2);
      const h11=t3-t2;
      cups.forEach(function(cup){
        const motion=plan.transitions[cup.id];
        if(!motion) return;
        const start=motion.start,target=motion.target;
        const prevMotion=planIndex>0 ? plans[planIndex-1].transitions[cup.id] : null;
        const nextMotion=planIndex<plans.length-1 ? plans[planIndex+1].transitions[cup.id] : null;
        const prevPoint=prevMotion ? prevMotion.start : start;
        const nextPoint=nextMotion ? nextMotion.target : target;
        const m0Left=(target.left-prevPoint.left)/2;
        const m1Left=(nextPoint.left-start.left)/2;
        const m0Top=(target.top-prevPoint.top)/2;
        const m1Top=(nextPoint.top-start.top)/2;
        cup.left=+(h00*start.left+h10*m0Left+h01*target.left+h11*m1Left).toFixed(2);
        const baseTop=(h00*start.top)+(h10*m0Top)+(h01*target.top)+(h11*m1Top);
        const flowProgress=clamp(elapsed/total,0,1);
        const cupIndex=Math.max(0,Number(String(cup.id).replace(/\D+/g,''))||0);
        const flowEnvelope=Math.sin(Math.PI*flowProgress);
        const flowWave=Math.sin((flowProgress*Math.PI*(4+plans.length*.32))+(cupIndex*1.65));
        const flowAmplitude=Math.min(42,14+(Math.abs(motion.arc)*.35));
        cup.top=+(baseTop+(flowEnvelope*flowWave*flowAmplitude)).toFixed(2);
        cup.tilt=+(start.tilt+((target.tilt-start.tilt)*t)+(flowWave*1.2)).toFixed(2);
      });
      syncTrackCoinMotionDom();
      if(elapsed<total) trackCoinAnimationFrame=window.requestAnimationFrame(frame);
      else finish();
    }
    trackCoinAnimationFrame=window.requestAnimationFrame(frame);
  }
  function grantTrackCoinRewards(correct){
    const profile = profiles.trackcoin;
    const tier = currentTrackCoinTier();
    const roundSpeed = trackCoinState && trackCoinState.speedPercent ? trackCoinState.speedPercent : trackCoinCurrentSpeedPercent(profile);
    const previousSpeed = trackCoinCurrentSpeedPercent(profile);
    const cleanPct = cleanWinBonusPct(correct ? (profile.cleanWinStreak + 1) : 0);
    const flowPct = Math.max(0,Number(profile.skills.flow || 0)) * 5;
    const baseXp = tier.xpReward * tier.multiplier;
    const baseCoins = tier.coinReward * tier.multiplier;
    let xpGain = correct ? Math.round(baseXp * (1 + (cleanPct / 100) + (flowPct / 100) + ((profile.skills.read || 0) * 0.06))) : Math.round(baseXp * (0.35 + ((profile.skills.discipline || 0) * 0.05)));
    let coinGain = correct ? Math.round(baseCoins * (1 + (cleanPct / 100) + ((profile.skills.banker || 0) * 0.10))) : Math.round(baseCoins * (0.25 + ((profile.skills.discipline || 0) * 0.05)));
    if(correct){
      profile.currentStreak += 1;
      profile.cleanWinStreak += 1;
      profile.totalCorrect += 1;
      profile.bestStreak = Math.max(profile.bestStreak, profile.currentStreak);
      profile.trackCoinSpeedPercent = trackCoinNextSpeedAfterCorrect(roundSpeed);
      profile.bestTrackCoinSpeedPercent = Math.max(trackCoinNormaliseSpeedPercent(profile.bestTrackCoinSpeedPercent), profile.trackCoinSpeedPercent);
      if(profile.currentStreak % 4 === 0){
        xpGain += Math.round(tier.perfectBonusXp * tier.multiplier);
        coinGain += Math.round(tier.perfectBonusCoins * tier.multiplier);
        profile.totalMiniSetsCleared += 1;
      }
    }else{
      profile.currentStreak = 0;
      profile.cleanWinStreak = 0;
      profile.trackCoinSpeedPercent = trackCoinFailureFallbackSpeed(roundSpeed);
    }
    profile.totalRounds += 1;
    profile.totalXpEarned += xpGain;
    profile.totalCoinsEarned += coinGain;
    profile.lastRoundXp = xpGain;
    profile.coins += coinGain;
    const levelUps = levelUpFromGain(profile, xpGain);
    profile.highestUnlockedTier = highestUnlockedTrackCoinTier(profile);
    if(TRACKCOIN_TIERS.findIndex(t => t.id === profile.selectedTier) > TRACKCOIN_TIERS.findIndex(t => t.id === profile.highestUnlockedTier)){
      profile.selectedTier = profile.highestUnlockedTier;
    }
    profile.currentTier = profile.selectedTier;
    profile.bestAccuracy = Math.max(profile.bestAccuracy, trackCoinAccuracy(profile));
    scheduleSave('trackcoin');
    return { xpGain, coinGain, levelUps, cleanPct, previousSpeed, roundSpeed, nextSpeed:trackCoinCurrentSpeedPercent(profile) };
  }
  function chooseTrackCoinCup(choiceRaw){
    // Pick phase is the single interaction authority. A separate pickLocked
    // guard could become stale while the rendered cup was visibly selectable,
    // causing taps/clicks to flash but be ignored.
    if(!trackCoinState || trackCoinState.phase!=='pick' || trackCoinState.resolved) return false;
    trackCoinState.pickLocked = true;
    cancelTrackCoinAnimation();
    const choice=String(choiceRaw==null?'':choiceRaw);
    let pickedCup=trackCoinState.cups.find(function(cup){ return cup.id===choice; });
    if(!pickedCup){
      const choiceIndex=Number(choiceRaw);
      if(Number.isNaN(choiceIndex)){ trackCoinState.pickLocked=false; return false; }
      pickedCup=trackCoinState.cups[choiceIndex];
    }
    if(!pickedCup){ trackCoinState.pickLocked=false; return false; }
    trackCoinState.resolved = true;
    trackCoinState.phase = 'review';
    trackCoinState.revealAll = true;
    trackCoinState.pickedCupId = pickedCup.id;
    const correct = pickedCup.id === trackCoinState.coinCupId;
    trackCoinState.lastResult = correct ? 'correct' : 'missed';
    const reward = grantTrackCoinRewards(correct);
    trackCoinState.message = correct
      ? 'Correct. The coin was under the cup you chose. Cup speed rises from ' + reward.roundSpeed + '% to ' + reward.nextSpeed + '%. +' + reward.coinGain + ' Bank Coins · +' + reward.xpGain + ' XP' + (reward.cleanPct ? ' · Clean Streak Bonus +' + reward.cleanPct + '%' : '') + (reward.levelUps ? ' · Player Rank +' + reward.levelUps : '') + '.'
      : 'Missed. The coin has been revealed under the correct cup. Cup speed falls from ' + reward.roundSpeed + '% to ' + reward.nextSpeed + '%. Streak reset. +' + reward.coinGain + ' Bank Coins · +' + reward.xpGain + ' XP.';
    persistTrackCoinRound();
    resolveNinjaBonuses();
    renderAll();
    completeAutoNext('trackcoin');
    return true;
  }
  function resumeRestoredTrackCoinRound(){
    if(!trackCoinState||!trackCoinState.restoredWaiting||trackCoinState.resolved) return;
    clearAutoNextTimer('trackcoin');
    cancelTrackCoinAnimation();
    const roundToken=++trackCoinRoundToken;
    trackCoinState.roundToken=roundToken;
    trackCoinState.restoredWaiting=false;
    trackCoinState.phase='cover';
    trackCoinState.message='The coin is covered. Resume tracking the saved route.';
    persistTrackCoinRound();
    renderTrackCoin();
    trackCoinShuffleTimer=window.setTimeout(function(){
      if(!trackCoinState||trackCoinState.roundToken!==roundToken)return;
      trackCoinState.phase='hide';
      trackCoinState.message='Saved shuffle resumed. Follow every cup movement.';
      persistTrackCoinRound();
      renderTrackCoin();
      runTrackCoinShuffle(0,roundToken);
    },650);
  }

  function replayTrackCoinShuffle(){
    if(!trackCoinState || !trackCoinState.resolved || trackCoinState.reviewActive) return;
    clearAutoNextTimer('trackcoin');
    cancelTrackCoinAnimation();
    const roundToken = ++trackCoinRoundToken;
    trackCoinState.roundToken = roundToken;
    trackCoinState.reviewActive = true;
    trackCoinState.revealAll = false;
    trackCoinState.phase = 'show';
    trackCoinState.pickLocked = true;
    const positions = trackCoinCupPositions(trackCoinState.cups.length);
    trackCoinState.cups.sort(function(a, b){
      return Number(String(a.id).replace(/\D+/g, '')) - Number(String(b.id).replace(/\D+/g, ''));
    });
    trackCoinState.cups.forEach(function(cup, index){
      cup.left = positions[index];
      cup.top = trackCoinState.baseTop;
      cup.tilt = 0;
    });
    trackCoinState.message = 'Reviewing the same shuffle. No additional reward or progression is awarded.';
    renderTrackCoin();
    trackCoinShuffleTimer = window.setTimeout(function(){
      if(!trackCoinState || trackCoinState.roundToken !== roundToken) return;
      trackCoinState.phase = 'cover';
      trackCoinState.message = 'Review: the coin is covered. Follow the same shuffle again.';
      renderTrackCoin();
      trackCoinShuffleTimer = window.setTimeout(function(){
        if(!trackCoinState || trackCoinState.roundToken !== roundToken) return;
        trackCoinState.phase = 'hide';
        trackCoinState.message = 'Review: replaying the exact previous shuffle.';
        renderTrackCoin();
        runTrackCoinShuffle(0, roundToken, function(){
          if(!trackCoinState || trackCoinState.roundToken !== roundToken) return;
          trackCoinState.reviewActive = false;
          trackCoinState.phase = 'review';
          trackCoinState.revealAll = true;
          trackCoinState.message = 'Review complete. The same correct cup and your original selection are shown again. No reward was awarded.';
          renderTrackCoin();
          completeAutoNext('trackcoin');
        });
      }, 700);
    }, 1100);
  }
  function bindTrackCoinCupChoices(){
    if(!refs.trackCoinBoard) return;
    qsa('.trackcoin-cup[data-trackcoin-pick]',refs.trackCoinBoard).forEach(function(cup){
      const commitChoice=function(event){
        if(!cup.classList.contains('is-selectable')) return;
        if(!trackCoinState || trackCoinState.phase!=='pick' || trackCoinState.resolved) return;
        if(event){ event.preventDefault(); event.stopPropagation(); }
        chooseTrackCoinCup(cup.getAttribute('data-trackcoin-pick'));
      };
      cup.addEventListener('pointerdown',commitChoice);
      // Keep a standard click fallback for assistive technology and synthetic
      // activation. The state guard above makes this idempotent after pointerdown.
      cup.addEventListener('click',commitChoice);
      cup.addEventListener('keydown',function(event){
        if(event.key!=='Enter' && event.key!==' ') return;
        commitChoice(event);
      });
    });
  }

  function renderTrackCoinTierList(){
    const profile = profiles.trackcoin;
    refs.trackCoinTierSelectList.innerHTML = TRACKCOIN_TIERS.map(tier => {
      const locked = profile.level < tier.unlockLevel;
      const active = profile.selectedTier === tier.id;
      return '<button class="tier-btn' + (active ? ' active' : '') + '" data-trackcoin-tier="' + tier.id + '" type="button"' + (locked ? ' disabled' : '') + '><span>' + tier.name + '</span><span>' + (locked ? ('Unlock ' + tier.unlockLevel) : ('×' + tier.multiplier.toFixed(2))) + '</span></button>';
    }).join('');
  }
  function spendTrackCoinSkill(skillId){
    const profile = profiles.trackcoin;
    reconcileSkillPoints(profile, TRACKCOIN_SKILLS);
    const skill = TRACKCOIN_SKILLS.find(item => item.id === skillId);
    if(!skill || profile.skillPoints <= 0 || profile.level < skill.unlockLevel || (profile.skills[skillId] || 0) >= skill.max) return;
    profile.skills[skillId] += 1;
    reconcileSkillPoints(profile, TRACKCOIN_SKILLS);
    scheduleSave('trackcoin');
    resolveNinjaBonuses();
    renderAll();
  }
  function renderTrackCoinSkillTree(){
    if(!refs.trackCoinSkillTreeGrid || !refs.trackCoinSkillSummary) return;
    const profile = profiles.trackcoin;
    refs.trackCoinSkillTreeGrid.innerHTML = TRACKCOIN_SKILLS.map(skill => {
      const level = profile.skills[skill.id] || 0;
      const locked = profile.level < skill.unlockLevel;
      const maxed = level >= skill.max;
      const canSpend = profile.skillPoints > 0 && !locked && !maxed;
      const buttonLabel = locked ? ('Unlocks at Player Rank ' + skill.unlockLevel) : (maxed ? 'Maxed' : (level > 0 ? 'Upgrade skill' : 'Add skill'));
      return '<article class="skill-item"><div class="skill-meta"><h4>' + skill.name + '</h4><span>Rank ' + level + ' / ' + skill.max + '</span></div><p>' + skill.description + '</p><p class="inline-note">Requires Player Rank ' + skill.unlockLevel + '.</p><button class="action' + (canSpend ? '' : ' secondary') + '" data-trackcoin-skill="' + skill.id + '" type="button"' + (canSpend ? '' : ' disabled') + '>' + buttonLabel + '</button></article>';
    }).join('');
    refs.trackCoinSkillSummary.innerHTML = '<strong>Skill upgrades</strong><span class="inline-note">Read ' + profile.skills.read + ' · Banker ' + profile.skills.banker + ' · Flow ' + profile.skills.flow + ' · Discipline ' + profile.skills.discipline + ' · Pace Control -' + (profile.skills.steal * 4) + '%</span><span class="inline-note">Unspent skill points: ' + profile.skillPoints + '</span>';
  }
  function renderTrackCoin(){
    if(!refs.trackCoinBoard || !refs.trackCoinTierSelectList || !refs.trackCoinXpFill || !refs.trackCoinXpMeta || !refs.trackCoinLevelHeading || !refs.trackCoinCoinsValue || !refs.trackCoinTierValue || !refs.trackCoinUnlockedTierValue || !refs.trackCoinStreakValue || !refs.trackCoinStats || !refs.trackCoinRpgState || !refs.trackCoinSkillPointsValue) return;
    const profile = profiles.trackcoin;
    const tier = currentTrackCoinTier();
    const needed = xpNeededForLevel(profile.level);
    refs.trackCoinXpFill.style.width = clamp((profile.xp / needed) * 100, 0, 100) + '%';
    refs.trackCoinLevelHeading.textContent = 'Player Rank - ' + profile.level;
    refs.trackCoinXpMeta.textContent = profile.xp + ' / ' + needed + ' XP';
    refs.trackCoinSkillPointsValue.textContent = String(profile.skillPoints || 0);
    refs.trackCoinCoinsValue.textContent = formatInt(profile.coins);
    refs.trackCoinTierValue.textContent = tier.name;
    refs.trackCoinUnlockedTierValue.textContent = (TRACKCOIN_TIERS.find(t => t.id === profile.highestUnlockedTier) || TRACKCOIN_TIERS[0]).name;
    refs.trackCoinStreakValue.textContent = String(profile.currentStreak);
    if(refs.trackCoinCleanStreakValue) refs.trackCoinCleanStreakValue.textContent = String(profile.cleanWinStreak);
    if(refs.trackCoinCleanBonusValue) refs.trackCoinCleanBonusValue.textContent = '+' + cleanWinBonusPct(profile.cleanWinStreak) + '%';
    renderTrackCoinTierList();
    renderTrackCoinSkillTree();
    const accuracyPct = Math.round(trackCoinAccuracy(profile) * 100);
    refs.trackCoinStats.innerHTML = coherentProgressHtml(profile,'Track the Coin',[
      ['Best streak',profile.bestStreak],
      ['Current streak',profile.currentStreak],
      ['Total correct',profile.totalCorrect],
      ['Rounds played',profile.totalRounds],
      ['Accuracy',accuracyPct + '%'],
      ['Cup speed',trackCoinCurrentSpeedPercent(profile) + '%'],
      ['Best cup speed',trackCoinNormaliseSpeedPercent(profile.bestTrackCoinSpeedPercent || TRACKCOIN_BASE_SPEED_PERCENT) + '%'],
      ['Total XP earned',profile.totalXpEarned],
      ['Total Bank Coins earned',profile.totalCoinsEarned]
    ]);
    renderCompactGameXp('trackcoin',profile);
    refs.trackCoinRpgState.textContent = trackCoinRpgUnlocked(profile)
      ? 'Pace unlock threshold reached for RPG integration.'
      : 'Reach Player Rank 10, maintain high accuracy, or push a major streak to unlock Pace Control.';
    setTrackCoinPanel(trackCoinOpenPanel || 'trackCoinGamePanel');

    const replayButton = document.getElementById('replayTrackCoinShuffleBtn');
    if(replayButton){
      replayButton.hidden = !(trackCoinState && trackCoinState.resolved);
      replayButton.disabled = !!(trackCoinState && trackCoinState.reviewActive);
      setCompactActionButton(replayButton,'↻',trackCoinState && trackCoinState.reviewActive ? 'Replaying shuffle' : 'Replay last shuffle','Alt+P');
    }
    const trackCoinResultClass = trackCoinState && trackCoinState.resolved && !trackCoinState.reviewActive ? (' trackcoin-status-result--' + (trackCoinState.lastResult || 'resolved')) : '';
    const trackCoinStatusMessage = trackCoinState ? trackCoinState.message : 'No round active yet. Press New Game when you are ready.';
    const trackCoinSummary = document.getElementById('trackCoinSummary');
    if(trackCoinSummary){
      trackCoinSummary.className = 'summary-box round-status-card trackcoin-game-status' + trackCoinResultClass;
      trackCoinSummary.innerHTML = coherentRoundStatusHtml('Round Status',trackCoinStatusMessage,profile,currentTrackCoinTier().name);
}

    if(!trackCoinState){
      refs.trackCoinBoard.innerHTML = '<div class="empty-box trackcoin-idle-card"><strong>Track the Coin is idle.</strong><span class="inline-note">Choose a tier and press New Game when you are ready.</span><span class="inline-note">The coin will be shown first, then covered, then shuffled. ' + escapeHtml(trackCoinSpeedStatusText(profile)) + '.</span><span class="inline-note">Use the New Game control at the bottom-right of the game window.</span></div>';
      ensureGamePlayContract();
      return;
    }
    const tierSpeed = Math.max(1, Math.round(trackCoinState.totalDuration / Math.max(1, trackCoinState.sequence.length)));
    const showCoinNow = trackCoinState.phase === 'show' || trackCoinState.revealAll;
    const coinCup = showCoinNow ? trackCoinState.cups.find(cup => cup.id === trackCoinState.coinCupId) : null;
    const coinHtml = coinCup ? '<div class="trackcoin-item-token" aria-hidden="true" style="left:' + coinCup.left + '%;top:' + (coinCup.top + 72) + 'px"></div>' : '';
    const positions = trackCoinState.cups.map((cup, idx) => {
      const selectable = trackCoinState.phase === 'pick' && !trackCoinState.pickLocked;
      const isCorrect = trackCoinState.revealAll && cup.id === trackCoinState.coinCupId;
      const isPicked = trackCoinState.revealAll && cup.id === trackCoinState.pickedCupId;
      const cupClass = 'trackcoin-cup' + ((((trackCoinState.phase === 'show' || trackCoinState.revealAll) && cup.id === trackCoinState.coinCupId) ? ' is-lifted' : '')) + (selectable ? ' is-selectable' : '') + (isCorrect ? ' is-correct' : '') + (isPicked ? ' is-picked' : '') + (trackCoinState.revealAll && cup.id !== trackCoinState.coinCupId ? ' is-wrong' : '');
      return '<button class="' + cupClass + '" data-trackcoin-pick="' + escapeHtml(cup.id) + '" data-trackcoin-cup-id="' + escapeHtml(cup.id) + '" type="button" aria-label="Track coin choice ' + (idx + 1) + '" aria-disabled="' + String(!selectable) + '" tabindex="' + (selectable ? '0' : '-1') + '" style="left:' + cup.left + '%;top:' + cup.top + 'px;--cup-speed:' + tierSpeed + 'ms;--cup-tilt:' + cup.tilt + 'deg"></button>';
    }).join('');
    const phaseClass=' is-phase-' + escapeHtml(trackCoinState.phase || 'show');
    const resumeHtml=trackCoinState.restoredWaiting
      ? '<div class="trackcoin-resume-card"><strong>Saved round ready</strong><span class="inline-note">The same coin and exact saved shuffle are waiting.</span><button class="action primary" data-action="resume-trackcoin" type="button">Resume Shuffle</button></div>'
      : '';
    const pickPrompt=trackCoinState.phase==='pick'&&!trackCoinState.resolved ? '<div class="trackcoin-pick-prompt">Choose the cup</div>' : '';
    refs.trackCoinBoard.innerHTML = '<div id="trackCoinScene" class="trackcoin-scene' + phaseClass + (trackCoinState.phase === 'hide' ? ' is-busy' : '') + (trackCoinState.resolved ? ' is-resolved' : '') + '"><div class="trackcoin-status"><strong>' + escapeHtml(tier.name) + '</strong><span class="inline-note">Containers ' + tier.containers + ' · ' + escapeHtml(trackCoinSpeedStatusText(profile)) + '</span></div>' + resumeHtml + '<div class="trackcoin-lane" data-cups="' + tier.containers + '">' + pickPrompt + coinHtml + positions + '</div></div>';
    bindTrackCoinCupChoices();
    ensureGamePlayContract();
  }
  function renderTrackCoinSummary(){
    const profile = profiles.trackcoin;
    const needed = xpNeededForLevel(profile.level);
    const pct = clamp((profile.xp / needed) * 100, 0, 100);
    const current = currentTrackCoinTier();
    return '<details class="game-summary-details" data-summary="trackcoin"><summary><span>Track the Coin</span><span class="inline-note">Player Rank ' + profile.level + '</span></summary><div class="game-summary-body"><div class="game-summary-progress"><div class="xp-meta"><strong>Experience</strong><span class="inline-note">' + profile.xp + ' / ' + needed + ' XP</span></div><div class="xp-bar"><div class="xp-fill" style="width:' + pct + '%"></div></div></div><div class="game-summary-row"><span>Current tier: ' + current.name + '</span><span>Bank Coins: ' + profile.coins + '</span></div><div class="game-summary-row"><span>Cup speed: ' + trackCoinCurrentSpeedPercent(profile) + '%</span><span>Best speed: ' + trackCoinNormaliseSpeedPercent(profile.bestTrackCoinSpeedPercent || TRACKCOIN_BASE_SPEED_PERCENT) + '%</span></div><div class="game-summary-row"><span>Clean Streak Bonus: +' + cleanWinBonusPct(profile.cleanWinStreak) + '%</span><span>Clean streak: ' + profile.cleanWinStreak + '</span></div><div class="game-summary-row"><span>Best streak: ' + profile.bestStreak + '</span><span>Accuracy: ' + Math.round(trackCoinAccuracy(profile) * 100) + '%</span></div><div class="game-summary-row"><span>Total correct: ' + profile.totalCorrect + '</span><span>Rounds played: ' + profile.totalRounds + '</span></div><div class="game-summary-row game-summary-row--stack"><span>Skills</span><span>Read ' + profile.skills.read + ' · Banker ' + profile.skills.banker + ' · Flow ' + profile.skills.flow + ' · Discipline ' + profile.skills.discipline + ' · Pace Control -' + (profile.skills.steal * 4) + '%</span><span>Unspent skill points: ' + profile.skillPoints + '</span></div></div></details>';
  }



  function currentRuleShiftTier(){
    const profile = profiles.ruleshift || defaultRuleShiftProfile();
    return RULESHIFT_TIERS.find(t => t.id === profile.selectedTier) || RULESHIFT_TIERS[0];
  }
  function nextRuleShiftTierToUnlock(){
    const profile = profiles.ruleshift || defaultRuleShiftProfile();
    return RULESHIFT_TIERS.find(t => profile.level < t.unlockLevel) || null;
  }
  function ruleShiftName(list, id){
    const found = list.find(function(item){ return item.id === id; });
    return found ? found.name : String(id || '');
  }
  function ruleShiftAllOptions(){
    const options = [];
    RULESHIFT_COLOURS.forEach(function(colour){
      RULESHIFT_SHAPES.forEach(function(shape){
        RULESHIFT_SIZES.forEach(function(size){
          options.push({ id: colour.id + '-' + shape.id + '-' + size.id, colour: colour.id, shape: shape.id, size: size.id });
        });
      });
    });
    return options;
  }
  function buildRuleShiftRule(tier, previousRule){
    const rules = tier.rules && tier.rules.length ? tier.rules : ['colour','shape'];
    let type = rules[Math.floor(Math.random() * rules.length)];
    if(previousRule && rules.length > 1){
      const tierId=String(tier&&tier.id||'');
      const delayedSwitchChance=tierId==='pressure'?0.28:(tierId==='mixed'?0.20:0);
      const repeatFamily=Math.random()<delayedSwitchChance && rules.includes(previousRule.type);
      if(repeatFamily){
        type=previousRule.type;
      }else{
        let guard = 0;
        while(type === previousRule.type && guard < 8){
          type = rules[Math.floor(Math.random() * rules.length)];
          guard += 1;
        }
      }
    }

    const colour = RULESHIFT_COLOURS[Math.floor(Math.random() * RULESHIFT_COLOURS.length)];
    const shape = RULESHIFT_SHAPES[Math.floor(Math.random() * RULESHIFT_SHAPES.length)];
    const configuredSizeIds = Array.isArray(tier && tier.sizes) ? tier.sizes : [];
    const availableSizes = RULESHIFT_SIZES.filter(function(item){ return !configuredSizeIds.length || configuredSizeIds.includes(item.id); });
    const sizePool = availableSizes.length ? availableSizes : RULESHIFT_SIZES;
    const size = sizePool[Math.floor(Math.random() * sizePool.length)];

    let label = '';
    let brief = '';

    if(type === 'colour'){ label = 'Choose ' + colour.name + '.'; brief = 'Colour'; }
    else if(type === 'shape'){ label = 'Choose a ' + shape.name + '.'; brief = 'Shape'; }
    else if(type === 'colourShape'){ label = 'Choose the ' + colour.name + ' ' + shape.name + '.'; brief = 'Colour + shape'; }
    else if(type === 'size'){ label = 'Choose a ' + size.name + ' object.'; brief = 'Size'; }
    else if(type === 'colourSize'){ label = 'Choose a ' + size.name + ' ' + colour.name + ' object.'; brief = 'Colour + size'; }
    else if(type === 'shapeSize'){ label = 'Choose a ' + size.name + ' ' + shape.name + '.'; brief = 'Shape + size'; }
    else if(type === 'notColour'){ label = 'Avoid ' + colour.name + '.'; brief = 'Exclude colour'; }
    else if(type === 'notShape'){ label = 'Avoid ' + shape.name + 's.'; brief = 'Exclude shape'; }
    else{ label = 'Choose ' + colour.name + '.'; brief = 'Colour'; type = 'colour'; }

    return { type:type, colour:colour.id, shape:shape.id, size:size.id, label:label, brief:brief };
  }
  function ruleShiftMatches(rule, option){
    if(!rule || !option) return false;
    if(rule.type === 'colour') return option.colour === rule.colour;
    if(rule.type === 'shape') return option.shape === rule.shape;
    if(rule.type === 'size') return option.size === rule.size;
    if(rule.type === 'notColour') return option.colour !== rule.colour;
    if(rule.type === 'notShape') return option.shape !== rule.shape;
    if(rule.type === 'colourShape') return option.colour === rule.colour && option.shape === rule.shape;
    if(rule.type === 'colourSize') return option.colour === rule.colour && option.size === rule.size;
    if(rule.type === 'shapeSize') return option.shape === rule.shape && option.size === rule.size;
    return false;
  }

  function ruleShiftMismatchFeedback(rule, option){
    if(!rule || !option) return 'The selected card did not satisfy the active rule.';
    const colourMatch = option.colour === rule.colour;
    const shapeMatch = option.shape === rule.shape;
    const sizeMatch = option.size === rule.size;
    const colourName = ruleShiftName(RULESHIFT_COLOURS, option.colour);
    const shapeName = ruleShiftName(RULESHIFT_SHAPES, option.shape);
    const sizeName = ruleShiftName(RULESHIFT_SIZES, option.size);
    if(rule.type === 'colour') return colourMatch ? 'Colour matched.' : 'You chose ' + colourName + '; the rule required ' + ruleShiftName(RULESHIFT_COLOURS, rule.colour) + '.';
    if(rule.type === 'shape') return shapeMatch ? 'Shape matched.' : 'You chose ' + shapeName + '; the rule required ' + ruleShiftName(RULESHIFT_SHAPES, rule.shape) + '.';
    if(rule.type === 'size') return sizeMatch ? 'Size matched.' : 'You chose ' + sizeName + '; the rule required ' + ruleShiftName(RULESHIFT_SIZES, rule.size) + '.';
    if(rule.type === 'notColour') return !colourMatch ? 'Colour correctly avoided the excluded colour.' : 'The selected colour was the one the rule excluded.';
    if(rule.type === 'notShape') return !shapeMatch ? 'Shape correctly avoided the excluded shape.' : 'The selected shape was the one the rule excluded.';
    if(rule.type === 'colourShape') return 'Colour ' + (colourMatch ? 'matched' : 'did not match') + '; shape ' + (shapeMatch ? 'matched' : 'did not match') + '.';
    if(rule.type === 'colourSize') return 'Colour ' + (colourMatch ? 'matched' : 'did not match') + '; size ' + (sizeMatch ? 'matched' : 'did not match') + '.';
    if(rule.type === 'shapeSize') return 'Shape ' + (shapeMatch ? 'matched' : 'did not match') + '; size ' + (sizeMatch ? 'matched' : 'did not match') + '.';
    return 'The selected card did not satisfy the active rule.';
  }

  function ruleShiftTimeLimitMs(tier){
    return Math.max(3000, Number(tier && tier.timeLimitMs) || 5000);
  }
  function clearRuleShiftTimer(){
    if(ruleShiftTimer){
      window.clearInterval(ruleShiftTimer);
      ruleShiftTimer = 0;
    }
  }
  function ruleShiftRemainingMs(){
    if(!ruleShiftState) return 0;
    if(Number.isFinite(ruleShiftState.pausedRemainingMs)) return Math.max(0, ruleShiftState.pausedRemainingMs);
    if(!ruleShiftState.deadlineAt) return 0;
    return Math.max(0, ruleShiftState.deadlineAt - Date.now());
  }
  function pauseRuleShiftTimer(){
    if(!ruleShiftState || ruleShiftState.finished || Number.isFinite(ruleShiftState.pausedRemainingMs)) return;
    ruleShiftState.pausedRemainingMs = ruleShiftRemainingMs();
    clearRuleShiftTimer();
    persistRuleShiftRound();
    syncRuleShiftTimer();
  }
  function resumeRuleShiftTimer(){
    if(!ruleShiftState || ruleShiftState.finished || !Number.isFinite(ruleShiftState.pausedRemainingMs)) return;
    const remaining = Math.max(0, ruleShiftState.pausedRemainingMs);
    ruleShiftState.pausedRemainingMs = null;
    ruleShiftState.deadlineAt = Date.now() + remaining;
    startRuleShiftTimer();
  }
  function syncRuleShiftVisibility(){
    if(document.visibilityState === 'hidden') pauseRuleShiftTimer();
    else resumeRuleShiftTimer();
  }
  function ruleShiftTimerText(ms){
    return (Math.max(0, Math.ceil(ms / 1000))).toString() + 's';
  }
  function syncRuleShiftTimer(){
    if(!ruleShiftState || ruleShiftState.finished){
      clearRuleShiftTimer();
      return;
    }
    const tier = currentRuleShiftTier();
    const total = ruleShiftTimeLimitMs(tier);
    const left = ruleShiftRemainingMs();
    const value = document.getElementById('ruleShiftTimerValue');
    const fill = document.getElementById('ruleShiftTimerFill');
    if(value) value.textContent = ruleShiftTimerText(left);
    if(fill) fill.style.width = clamp((left / Math.max(1, total)) * 100, 0, 100) + '%';
    if(left <= 0) handleRuleShiftTimeout();
  }
  function startRuleShiftTimer(){
    clearRuleShiftTimer();
    syncRuleShiftTimer();
    ruleShiftTimer = window.setInterval(syncRuleShiftTimer, 120);
  }
  function handleRuleShiftTimeout(){
    if(!ruleShiftState || ruleShiftState.finished || ruleShiftState.resolvingTimeout) return;
    ruleShiftState.resolvingTimeout = true;
    clearRuleShiftTimer();
    const profile = profiles.ruleshift;
    profile.wrongAnswers += 1;
    failRuleShiftRun('Time ran out. No reward awarded.');
    ruleShiftState.resolvingTimeout = false;
  }

  function buildRuleShiftOptions(tier, rule){
    const count=clamp(Number(tier&&tier.optionCount)||8,6,12);
    const colourIds=RULESHIFT_COLOURS.map(function(item){return item.id;});
    const shapeIds=RULESHIFT_SHAPES.map(function(item){return item.id;});
    const configured=Array.isArray(tier&&tier.sizes)?tier.sizes:[];
    const sizeIds=RULESHIFT_SIZES.map(function(item){return item.id;}).filter(function(id){return !configured.length||configured.includes(id);});
    if(!sizeIds.length) sizeIds.push('large');

    const pool=[];
    colourIds.forEach(function(colour){
      shapeIds.forEach(function(shape){
        sizeIds.forEach(function(size){
          pool.push({id:colour+'-'+shape+'-'+size,colour:colour,shape:shape,size:size});
        });
      });
    });

    const matching=shuffle(pool.filter(function(option){return ruleShiftMatches(rule,option);}));
    const nonMatching=shuffle(pool.filter(function(option){return !ruleShiftMatches(rule,option);}));
    if(!matching.length) return shuffle(pool).slice(0,count);

    // Keep the cognitive task unambiguous: exactly one selectable answer is valid.
    const target=matching[0];
    const distractors=nonMatching.slice(0,Math.max(0,count-1));

    // Prefer distractors that share at least one visible descriptor with the target.
    distractors.sort(function(a,b){
      const score=function(option){
        return Number(option.colour===target.colour)+Number(option.shape===target.shape)+Number(option.size===target.size);
      };
      return score(b)-score(a);
    });
    return shuffle([target].concat(distractors)).slice(0,count);
  }
  function startRuleShiftRound(){
    clearAutoNextTimer('ruleshift');
    clearRuleShiftTimer();
    const tier = currentRuleShiftTier();
    profiles.ruleshift.gamesPlayed += 1;
    ruleShiftState = {
      round:0,
      maxRounds:tier.rounds,
      roundBank:0,
      mistakes:0,
      hadFailure:false,
      currentRule:null,
      options:[],
      finished:false,
      lastMessage:'Run started. Read the rule before choosing.',
      lastWasRuleChange:false,
      deadlineAt:0,
      pausedRemainingMs:null,
      resolvingTimeout:false
    };
    advanceRuleShiftRound(true);
    persistRuleShiftRound();
    renderAll();
    startRuleShiftTimer();
  }
  function advanceRuleShiftRound(isStart, overrideMessage){
    if(!ruleShiftState || ruleShiftState.finished) return;
    const tier = currentRuleShiftTier();
    ruleShiftState.round += 1;
    const previousRule = ruleShiftState.currentRule;
    const rule = buildRuleShiftRule(tier, previousRule);
    ruleShiftState.currentRule = rule;
    ruleShiftState.options = buildRuleShiftOptions(tier, rule);
    ruleShiftState.pausedRemainingMs = null;
    ruleShiftState.deadlineAt = Date.now() + ruleShiftTimeLimitMs(tier);
    ruleShiftState.lastWasRuleChange = !!(previousRule && previousRule.type !== rule.type);
    if(overrideMessage){
      ruleShiftState.lastMessage = overrideMessage;
    }else if(isStart){
      ruleShiftState.lastMessage = 'Run active. Choose carefully — one wrong answer fails the run.';
    }else{
      ruleShiftState.lastMessage = ruleShiftState.lastWasRuleChange ? 'Correct. Rule changed — check it before choosing.' : 'Correct. Same rule family — keep focus.';
    }
    persistRuleShiftRound();
  }
  function failRuleShiftRun(message){
    if(!ruleShiftState || ruleShiftState.finished) return;
    clearRuleShiftTimer();
    const profile = profiles.ruleshift;
    profile.currentStreak = 0;
    profile.cleanWinStreak = 0;
    profile.lastRoundXp = 0;
    ruleShiftState.mistakes += 1;
    ruleShiftState.hadFailure = true;
    ruleShiftState.failed = true;
    ruleShiftState.finished = true;
    ruleShiftState.roundBank = 0;
    ruleShiftState.lastMessage = message || 'Run failed — no reward awarded.';
    persistRuleShiftRound();
    renderAll();
    completeAutoNext('ruleshift');
  }

  function completeRuleShiftRun(){
    if(!ruleShiftState || ruleShiftState.finished) return;
    clearRuleShiftTimer();
    const profile = profiles.ruleshift;
    const tier = currentRuleShiftTier();
    const xpMult = 1 + ((profile.skills.focus || 0) * 0.08);
    const bankMult = 1 + ((profile.skills.banker || 0) * 0.10);
    const nextClean = profile.cleanWinStreak + 1;
    const cleanBonus = cleanWinBonusPct(nextClean);
    const xpGain = Math.max(1, Math.round((tier.xpReward + ruleShiftState.roundBank) * xpMult * (1 + cleanBonus / 100)));
    const bankGain = Math.max(0, Math.round((tier.bankReward + ruleShiftState.roundBank) * bankMult * (1 + cleanBonus / 100)));
    const leveled = levelUpFromGain(profile, xpGain);
    profile.bank += bankGain;
    profile.cleanWinStreak = nextClean;
    profile.lastRoundXp = xpGain;
    ruleShiftState.finished = true;
    ruleShiftState.lastMessage = 'Run complete. +' + bankGain + ' Bank Coins · +' + xpGain + ' XP' + cleanBonusRewardText(nextClean) + (leveled ? ' · Player Rank +' + leveled : '') + '.';
    persistRuleShiftRound();
    resolveNinjaBonuses();
    renderAll();
    completeAutoNext('ruleshift');
  }
  function useRuleShiftHint(){
    if(!ruleShiftState || ruleShiftState.finished || !ruleShiftState.currentRule) return;
    const rule=ruleShiftState.currentRule;
    const valid=(ruleShiftState.options||[]).filter(function(option){ return ruleShiftMatches(rule,option); });
    if(valid.length!==1){
      ruleShiftState.lastMessage='Hint unavailable for this board. Re-read the current rule.';
      persistRuleShiftRound(); renderAll(); return;
    }
    const target=valid[0];
    const distractors=(ruleShiftState.options||[]).filter(function(option){ return option.id!==target.id; });
    const descriptors=[
      {key:'colour',value:ruleShiftName(RULESHIFT_COLOURS,target.colour)},
      {key:'shape',value:ruleShiftName(RULESHIFT_SHAPES,target.shape)},
      {key:'size',value:ruleShiftName(RULESHIFT_SIZES,target.size)}
    ];
    descriptors.forEach(function(item){
      item.eliminated=distractors.filter(function(option){ return String(option[item.key])!==String(target[item.key]); }).length;
    });
    descriptors.sort(function(a,b){ return b.eliminated-a.eliminated; });
    const first=descriptors[0],second=descriptors[1];
    const targetLabel=[ruleShiftName(RULESHIFT_COLOURS,target.colour),ruleShiftName(RULESHIFT_SIZES,target.size),ruleShiftName(RULESHIFT_SHAPES,target.shape)].filter(Boolean).join(' ');
    ruleShiftState.lastMessage='Hint: the current rule is “'+rule.label+'”. Eliminate by '+first.key+' first — keep '+first.value+'. Then check '+second.key+' — '+second.value+'. The surviving target is '+targetLabel+'.';
    persistRuleShiftRound();
    renderAll();
  }

  function chooseRuleShiftOption(optionId){
    if(!ruleShiftState || ruleShiftState.finished || !ruleShiftState.currentRule) return;
    clearRuleShiftTimer();
    const profile = profiles.ruleshift;
    const tier = currentRuleShiftTier();
    const option = (ruleShiftState.options || []).find(function(item){ return item.id === optionId; });
    if(!option) return;
    const correct = ruleShiftMatches(ruleShiftState.currentRule, option);
    if(correct){
      profile.correctAnswers += 1;
      profile.currentStreak += 1;
      profile.bestStreak = Math.max(profile.bestStreak, profile.currentStreak);
      const adaptBonus = ruleShiftState.lastWasRuleChange ? (profile.skills.adapt || 0) : 0;
      ruleShiftState.roundBank += 2 + adaptBonus;
      if(ruleShiftState.round >= ruleShiftState.maxRounds){
        completeRuleShiftRun();
      }else{
        advanceRuleShiftRound(false);
        persistRuleShiftRound();
        renderAll();
        startRuleShiftTimer();
      }
      return;
    }
    profile.wrongAnswers += 1;
    const mismatchFeedback = ruleShiftMismatchFeedback(ruleShiftState.currentRule, option);
    failRuleShiftRun('Incorrect choice. ' + mismatchFeedback + ' No reward awarded.');
  }
  function spendRuleShiftSkill(skillId){
    const profile = profiles.ruleshift;
    reconcileSkillPoints(profile, RULESHIFT_SKILLS);
    const skill = RULESHIFT_SKILLS.find(function(item){ return item.id === skillId; });
    if(!skill || profile.skillPoints <= 0 || profile.level < skill.unlockLevel || (profile.skills[skillId] || 0) >= skill.max) return;
    profile.skills[skillId] += 1;
    reconcileSkillPoints(profile, RULESHIFT_SKILLS);
    scheduleSave('ruleshift');
    renderAll();
  }
  function renderRuleShiftProgress(){
    const profile = profiles.ruleshift;
    const needed = xpNeededForLevel(profile.level);
    const pct = clamp((profile.xp / needed) * 100, 0, 100);
    if(refs.ruleShiftLevelHeading) refs.ruleShiftLevelHeading.textContent = 'Player Rank - ' + profile.level;
    if(refs.ruleShiftXpMeta) refs.ruleShiftXpMeta.textContent = profile.xp + ' / ' + needed + ' XP';
    if(refs.ruleShiftXpFill) refs.ruleShiftXpFill.style.width = pct + '%';
    if(refs.ruleShiftSkillPointsValue) refs.ruleShiftSkillPointsValue.textContent = profile.skillPoints;
    if(refs.ruleShiftBankValue) refs.ruleShiftBankValue.textContent = formatInt(profile.bank);
    if(refs.ruleShiftTierValue) refs.ruleShiftTierValue.textContent = currentRuleShiftTier().name;
    if(refs.ruleShiftStreakValue) refs.ruleShiftStreakValue.textContent = profile.currentStreak;
    if(refs.ruleShiftBestStreakValue) refs.ruleShiftBestStreakValue.textContent = profile.bestStreak;
    if(refs.ruleShiftCleanStreakValue) refs.ruleShiftCleanStreakValue.textContent = profile.cleanWinStreak;
    if(refs.ruleShiftCleanBonusValue) refs.ruleShiftCleanBonusValue.textContent = '+' + cleanWinBonusPct(profile.cleanWinStreak) + '%';
    renderCompactGameXp('ruleshift',profile);
  }
  function renderRuleShiftTierList(){
    if(!refs.ruleShiftTierSelectList) return;
    const profile = profiles.ruleshift;
    refs.ruleShiftTierSelectList.innerHTML = RULESHIFT_TIERS.map(function(tier){
      const locked = profile.level < tier.unlockLevel;
      const active = profile.selectedTier === tier.id;
      const detail = locked ? ('Unlock ' + tier.unlockLevel) : (tier.optionCount + ' choices · ' + tier.rounds + ' rounds · ' + Math.round(ruleShiftTimeLimitMs(tier) / 1000) + 's timer · +' + tier.bankReward + ' Bank Coins / +' + tier.xpReward + ' XP');
      return '<button class="tier-btn' + (active ? ' active' : '') + '" data-ruleshift-tier="' + tier.id + '" type="button"' + (locked ? ' disabled' : '') + '><span>' + escapeHtml(tier.name) + '</span><span>' + escapeHtml(detail) + '</span></button>';
    }).join('');
  }
  function renderRuleShiftSkillTree(){
    if(!refs.ruleShiftSkillTreeGrid || !refs.ruleShiftSkillSummary) return;
    const profile = profiles.ruleshift;
    refs.ruleShiftSkillTreeGrid.innerHTML = RULESHIFT_SKILLS.map(function(skill){
      const level = profile.skills[skill.id] || 0;
      const locked = profile.level < skill.unlockLevel;
      const maxed = level >= skill.max;
      const canSpend = profile.skillPoints > 0 && !locked && !maxed;
      const buttonLabel = locked ? ('Unlocks at Player Rank ' + skill.unlockLevel) : (maxed ? 'Maxed' : (level > 0 ? 'Upgrade skill' : 'Add skill'));
      return '<article class="skill-item"><div class="skill-meta"><h4>' + escapeHtml(skill.name) + '</h4><span>Rank ' + level + ' / ' + skill.max + '</span></div><p>' + escapeHtml(skill.description) + '</p><p class="inline-note">Requires Player Rank ' + skill.unlockLevel + '.</p><button class="action' + (canSpend ? '' : ' secondary') + '" data-ruleshift-skill="' + skill.id + '" type="button"' + (canSpend ? '' : ' disabled') + '>' + buttonLabel + '</button></article>';
    }).join('');
    refs.ruleShiftSkillSummary.innerHTML = '<strong>Skill upgrades</strong><span class="inline-note">Focus ' + profile.skills.focus + ' · Banker ' + profile.skills.banker + ' · Recovery ' + profile.skills.recovery + ' · Adapt ' + profile.skills.adapt + '</span><span class="inline-note">' + cleanBonusStatusText(profile) + '</span><span class="inline-note">Unspent skill points: ' + profile.skillPoints + '</span>';
  }
  function renderRuleShiftBoard(){
    if(!refs.ruleShiftBoard || !refs.ruleShiftRoundSummary) return;
    const profile = profiles.ruleshift;
    const tier = currentRuleShiftTier();
    if(refs.ruleShiftTierNameValue) refs.ruleShiftTierNameValue.textContent = tier.name;
    if(refs.ruleShiftRoundValue) refs.ruleShiftRoundValue.textContent = ruleShiftState ? (ruleShiftState.round + ' / ' + ruleShiftState.maxRounds) : '0 / ' + tier.rounds;
    if(refs.ruleShiftMistakesValue) refs.ruleShiftMistakesValue.textContent = ruleShiftState ? ruleShiftState.mistakes : 0;
    if(refs.ruleShiftRoundBankValue) refs.ruleShiftRoundBankValue.textContent = ruleShiftState ? ruleShiftState.roundBank : 0;
    if(!ruleShiftState){
      refs.ruleShiftBoard.innerHTML = '<div class="empty-box ruleshift-idle-card"><strong>Rule Shift is idle.</strong><span class="inline-note">' + escapeHtml(ruleShiftIdleMessage) + '</span><span class="inline-note">The target shape is always present. Start when ready.</span></div>';
      refs.ruleShiftRoundSummary.innerHTML = coherentRoundStatusHtml('Round Status','No Rule Shift run is active yet.',profiles.ruleshift,currentRuleShiftTier().name);
return;
    }
    refs.ruleShiftRoundSummary.innerHTML = coherentRoundStatusHtml('Round Status',ruleShiftState.lastMessage,profiles.ruleshift,currentRuleShiftTier().name);
if(ruleShiftState.finished){
      const finishedTitle = ruleShiftState.failed ? 'Run failed.' : 'Run complete.';
      const finishedPrompt = ruleShiftState.failed ? 'Incorrect answers end the run. Press New Game to try again.' : 'Press New Game to begin another switching run.';
      refs.ruleShiftBoard.innerHTML = '<div class="ruleshift-complete-card' + (ruleShiftState.failed ? ' ruleshift-failed-card' : '') + '"><strong>' + finishedTitle + '</strong><span class="inline-note">' + finishedPrompt + '</span></div>';
      return;
    }
    const rule = ruleShiftState.currentRule;
    const remaining = ruleShiftRemainingMs();
    const timePct = clamp((remaining / Math.max(1, ruleShiftTimeLimitMs(tier))) * 100, 0, 100);
    const cards = (ruleShiftState.options || []).map(function(option){
      const label = ruleShiftName(RULESHIFT_COLOURS, option.colour) + ' ' + ruleShiftName(RULESHIFT_SIZES, option.size) + ' ' + ruleShiftName(RULESHIFT_SHAPES, option.shape);
      return '<button class="ruleshift-token ruleshift-colour--' + escapeHtml(option.colour) + ' ruleshift-size--' + escapeHtml(option.size) + '" data-ruleshift-pick="' + escapeHtml(option.id) + '" type="button" aria-label="' + escapeHtml(label) + '"><span class="ruleshift-shape ruleshift-shape--' + escapeHtml(option.shape) + '" aria-hidden="true"></span></button>';
    }).join('');
    refs.ruleShiftBoard.innerHTML =
      '<div class="ruleshift-rule-card' + (ruleShiftState.lastWasRuleChange ? ' is-rule-change' : '') + '" data-rule-type="' + escapeHtml(rule.type) + '">' +
        '<div class="ruleshift-rule-head"><span class="ruleshift-rule-kicker">' + escapeHtml(rule.brief) + '</span><span class="ruleshift-round-count">Round ' + ruleShiftState.round + ' of ' + ruleShiftState.maxRounds + '</span></div>' +
        '<strong>' + escapeHtml(rule.label) + '</strong>' +
        '<div class="ruleshift-timer" aria-label="Rule Shift timer"><span>Time</span><strong id="ruleShiftTimerValue">' + ruleShiftTimerText(remaining) + '</strong><div class="ruleshift-timer-bar"><div class="ruleshift-timer-fill" id="ruleShiftTimerFill" style="width:' + timePct + '%"></div></div></div>' +
      '</div>' +
      '<div class="ruleshift-choice-card"><div class="ruleshift-options-grid">' + cards + '</div></div>';
    syncRuleShiftTimer();
  }
  function renderRuleShiftStats(){
    if(!refs.ruleShiftStats) return;
    const profile = profiles.ruleshift;
    const total = profile.correctAnswers + profile.wrongAnswers;
    const accuracy = total ? Math.round((profile.correctAnswers / total) * 100) : 0;
    refs.ruleShiftStats.innerHTML = coherentProgressHtml(profile,'Rule Shift',[
      ['Runs played',profile.gamesPlayed],
      ['Correct choices',profile.correctAnswers],
      ['Wrong choices',profile.wrongAnswers],
      ['Accuracy',accuracy + '%'],
      ['Best streak',profile.bestStreak],
      ['Current streak',profile.currentStreak],
      ['Clean streak',profile.cleanWinStreak],
      ['Bank Coins earned',profile.bank],
      ['Current tier',currentRuleShiftTier().name]
    ]);
    renderCompactGameXp('ruleshift',profile);
  }
  function renderRuleShift(){
    if(!profiles.ruleshift) return;
    renderRuleShiftProgress();
    renderRuleShiftTierList();
    renderRuleShiftSkillTree();
    renderRuleShiftBoard();
    renderRuleShiftStats();
  }
  function renderRuleShiftSummary(){
    const profile = profiles.ruleshift || defaultRuleShiftProfile();
    const needed = xpNeededForLevel(profile.level);
    const pct = clamp((profile.xp / needed) * 100, 0, 100);
    const current = currentRuleShiftTier();
    const next = nextRuleShiftTierToUnlock();
    const total = profile.correctAnswers + profile.wrongAnswers;
    const accuracy = total ? Math.round((profile.correctAnswers / total) * 100) : 0;
    const nextText = next ? ('Next unlock: ' + next.name + ' at Player Rank ' + next.unlockLevel + '.') : 'All Rule Shift tiers are unlocked.';
    return '<details class="game-summary-details" data-summary="ruleshift"><summary><span>Rule Shift</span><span class="inline-note">Player Rank ' + profile.level + '</span></summary><div class="game-summary-body"><div class="game-summary-progress"><div class="xp-meta"><strong>Experience</strong><span class="inline-note">' + profile.xp + ' / ' + needed + ' XP</span></div><div class="xp-bar"><div class="xp-fill" style="width:' + pct + '%"></div></div></div><div class="game-summary-row"><span>Bank Coins from Rule Shift: ' + profile.bank + '</span><span>Current tier: ' + current.name + '</span></div><div class="game-summary-row"><span>Correct choices: ' + profile.correctAnswers + '</span><span>Accuracy: ' + accuracy + '%</span></div><div class="game-summary-row"><span>Best streak: ' + profile.bestStreak + '</span><span>Runs played: ' + profile.gamesPlayed + '</span></div><div class="game-summary-row"><span>' + nextText + '</span><span>Clean streak: ' + profile.cleanWinStreak + '</span></div><div class="game-summary-row game-summary-row--stack"><span>Skills</span><span>Focus ' + profile.skills.focus + ' · Banker ' + profile.skills.banker + ' · Recovery ' + profile.skills.recovery + ' · Adapt ' + profile.skills.adapt + '</span><span>Unspent skill points: ' + profile.skillPoints + '</span></div></div></details>';
  }


  function renderAll(){
    if(!profiles.pairs || !profiles.make24 || !profiles.detectword || !profiles.trackcoin || !profiles.ruleshift || !profiles.ninja) return;
    reconcileAllSkillProfiles();
    renderGamesList();
    syncHashState();
    renderPairsProgress();
    renderPairsTierList();
    renderPairsSkillTree();
    renderPairsBoard();
    renderWordProgress();
    renderWordTierList();
    renderWordSkillTree();
    renderWordBoard();
    renderMake24Progress();
    renderMake24TierList();
    renderMake24SkillTree();
    renderMake24Board();
    renderTrackCoinSkillTree();
    renderTrackCoin();
    renderRuleShift();
    renderNinja();
    ensureGamePlayContract();
    injectAllMobileGameControls();
    syncAllMobileInputModes();
    syncDesktopKeypadState();
    renderSystemSummary();
    syncGameButtonLabels();
    renderAutoNextControls();
    syncFullscreenWindowTabs();
  }

  function activateTab(target, options){
    const opts = options || {};
    currentTab = target === 'concepts' ? 'concepts' : (target === 'puzzles' ? 'puzzles' : (target === 'games' ? 'games' : 'system'));
    if(currentTab === 'system' && window.BaselineGamesMusic && typeof window.BaselineGamesMusic.selectGame === 'function') window.BaselineGamesMusic.selectGame('');
    qsa('.tab').forEach(tab => tab.setAttribute('aria-selected', String(tab.getAttribute('data-target') === currentTab)));
    qsa('.section').forEach(section => section.classList.toggle('active', section.id === currentTab));
    if(opts.sync !== false) syncHashState(opts.historyMode);
  }
  function wireTabs(){
    qsa('.tab').forEach(button => {
      button.addEventListener('click', function(event){
        if(event){
          event.preventDefault();
          event.stopPropagation();
          if(typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
        }
        const target = button.getAttribute('data-target');
        if(target === 'games'){
          selectedGame = '';
          activateTab('games', { historyMode:'push' });
          selectGame('', { historyMode:'replace' });
          return;
        }
        if(target === 'puzzles'){
          selectedGame = '';
          if(window.BaselinePuzzlesLibrary && typeof window.BaselinePuzzlesLibrary.showOverview === 'function'){
            window.BaselinePuzzlesLibrary.showOverview();
          }
          activateTab('puzzles', { historyMode:'push' });
          return;
        }
        if(target === 'concepts'){
          selectedGame = '';
          if(window.BaselineConcepts && typeof window.BaselineConcepts.showOverview === 'function'){
            window.BaselineConcepts.showOverview({ historyMode:'push', focus:false });
            activateTab('concepts', { sync:false });
          }else{
            activateTab('concepts', { historyMode:'push' });
          }
          return;
        }
        activateTab(target, { historyMode:'push' });
      }, true);
    });
  }

function activeRecreationFullscreenRoot(){
    return document.fullscreenElement || document.querySelector('.recreation-mobile-pseudo-fullscreen');
  }
function toggleGameFullscreen(gameId){
    const id=normaliseGameId(gameId);
    if(!id) return;
    if(id==='ninja'){ toggleRealmFullscreen(); return; }
    ensureGamePlayContract();
    const target=gamePlayRootElement(id)||gamePlaySurfaceElement(id);
    if(!target) return;
    if(target.classList.contains('recreation-mobile-pseudo-fullscreen')){
      target.classList.remove('recreation-mobile-pseudo-fullscreen');
      document.body.classList.remove('recreation-mobile-pseudo-fullscreen-active');
      target.removeAttribute('data-fullscreen-window-view');
      syncFullscreenWindowTabs(id);
      syncGameButtonLabels();
      return;
    }
    if(document.fullscreenElement){
      document.exitFullscreen?.().catch(function(){});
      return;
    }
    if(isTouchOnlyGameDevice() || !document.fullscreenEnabled || !target.requestFullscreen){
      document.querySelectorAll('.recreation-mobile-pseudo-fullscreen').forEach(function(el){
        el.classList.remove('recreation-mobile-pseudo-fullscreen');
      });
      target.classList.add('recreation-mobile-pseudo-fullscreen');
      document.body.classList.add('recreation-mobile-pseudo-fullscreen-active');
      target.setAttribute('data-fullscreen-window-view','game');
      syncFullscreenWindowTabs(id);
      syncGameButtonLabels();
      return;
    }
    target.requestFullscreen().then(function(){ syncDesktopKeypadState(); }).catch(function(){});
  }
  function ensureGameFullscreenButtons(){
    const ids = ['pairs','detectword','make24','trackcoin','ruleshift','ninja'];
    ids.forEach(function(id){
      const panel = document.getElementById(id + 'Panel');
      if(!panel) return;
      const header = panel.querySelector('.game-header');
      if(!header) return;
      let actions = header.querySelector('.link-actions');
      if(!actions){
        actions = document.createElement('div');
        actions.className = 'link-actions';
        header.appendChild(actions);
      }

      if(!actions.querySelector('[data-select-game=""]')){
        const backBtn = document.createElement('button');
        backBtn.className = 'action secondary';
        backBtn.type = 'button';
        backBtn.setAttribute('data-select-game', '');
        backBtn.textContent = 'Back To Games Overview';
        actions.appendChild(backBtn);
      }

      if(!actions.querySelector('[data-game-info-modal="' + id + '"]')){
        const infoBtn = document.createElement('button');
        infoBtn.className = 'action secondary game-info-toggle';
        infoBtn.type = 'button';
        infoBtn.setAttribute('data-game-info-modal', id);
        infoBtn.setAttribute('aria-label', 'Brain benefit');
        infoBtn.title = 'Brain benefit';
        infoBtn.textContent = 'ⓘ';
        actions.insertBefore(infoBtn, actions.firstChild);
      }

      if(!actions.querySelector('[data-game-howto-modal="' + id + '"]')){
        const howBtn = document.createElement('button');
        howBtn.className = 'action secondary game-howto-toggle';
        howBtn.type = 'button';
        howBtn.setAttribute('data-game-howto-modal', id);
        howBtn.textContent = 'How To Play';
        const full = actions.querySelector('[data-game-fullscreen="' + id + '"]');
        const back = actions.querySelector('[data-select-game=""]');
        actions.insertBefore(howBtn, full || back || null);
      }

      const gameRoot = gameCardElement(id) || panel.querySelector('[data-game-play-root="' + id + '"]');
      const windowActions = gameRoot ? gameRoot.querySelector('.game-window-actions') : null;
      const specificActions = gameRoot ? gameRoot.querySelector('.game-specific-actions') : null;
      qsa('[data-game-fullscreen="' + id + '"]', panel).forEach(function(existingBtn){
        if(id === 'ninja') existingBtn.remove();
      });
      if(id !== 'ninja' && !panel.querySelector('[data-game-fullscreen="' + id + '"]')){
        const btn = document.createElement('button');
        btn.className = 'action ghost game-fullscreen-toggle';
        btn.type = 'button';
        btn.setAttribute('data-game-fullscreen', id);
        btn.textContent = 'Full Screen';
        (windowActions || actions).appendChild(btn);
      }

      const infoBtn = actions.querySelector('[data-game-info-modal="' + id + '"]');
      const howBtn = actions.querySelector('[data-game-howto-modal="' + id + '"]');
      const fullBtn = panel.querySelector('[data-game-fullscreen="' + id + '"]');
      const backBtn = actions.querySelector('[data-select-game=""]');

      if(id !== 'ninja'){
        actions.classList.add('game-shell-actions');
        actions.setAttribute('data-nonrealm-game-toolbar', id);
        if(infoBtn){
          infoBtn.classList.add('game-shell-action','game-shell-action--icon','game-shell-action--info');
          infoBtn.setAttribute('aria-label','Brain benefit');
          infoBtn.innerHTML = '<span class="game-shell-action__icon" aria-hidden="true">i</span>';
        }
        if(howBtn){
          howBtn.classList.add('game-shell-action','game-shell-action--how');
          howBtn.setAttribute('aria-label','How to play');
          howBtn.innerHTML = '<span class="game-shell-action__icon" aria-hidden="true">?</span><span class="game-shell-action__label">How to Play</span>';
        }
        if(fullBtn){
          fullBtn.classList.add('game-shell-action','game-shell-action--icon','game-shell-action--full');
          fullBtn.setAttribute('aria-label','Full screen');
          fullBtn.title='Full screen — '+SITEWIDE_FULLSCREEN_HOTKEY_LABEL;
          fullBtn.innerHTML=fullscreenIconMarkup('Full screen');
          setHotkeyCaption(fullBtn,SITEWIDE_FULLSCREEN_HOTKEY_LABEL);
        }
        if(backBtn){
          backBtn.classList.add('game-shell-action','game-shell-action--back');
          backBtn.setAttribute('aria-label','Back to Games Overview');
          backBtn.innerHTML = '<span class="game-shell-action__icon" aria-hidden="true">←</span><span class="game-shell-action__label">Games</span>';
        }
      }

      if(infoBtn) infoBtn.style.order = '1';
      if(howBtn) howBtn.style.order = '2';
      if(fullBtn) fullBtn.style.order = '3';
      if(backBtn) backBtn.style.order = '5';

      if(fullBtn && windowActions && fullBtn.parentElement!==windowActions) windowActions.appendChild(fullBtn);
      if(isDesktopKeypadGame(id) && gameRoot){
        let keyboardBtn = gameRoot.querySelector('[data-desktop-keypad-toggle="' + id + '"]');
        let keypadHost = specificActions;
        if(!keypadHost){
          keypadHost = document.createElement('div');
          keypadHost.className = 'game-specific-actions';
          keypadHost.setAttribute('aria-label', id === 'detectword' ? 'Detect The Word game controls' : 'Make The Number game controls');
          if(windowActions) windowActions.before(keypadHost);
          else gameRoot.appendChild(keypadHost);
        }
        if(!keyboardBtn){
          keyboardBtn = document.createElement('button');
          keyboardBtn.className = 'action ghost desktop-keypad-toggle';
          keyboardBtn.type = 'button';
          keyboardBtn.setAttribute('data-desktop-keypad-toggle', id);
          keyboardBtn.setAttribute('aria-pressed', 'false');
          keyboardBtn.setAttribute('aria-label', keypadButtonLabel(false));
          keyboardBtn.title=keypadButtonLabel(false)+' — '+SITEWIDE_KEYBOARD_HOTKEY_LABEL;
          keyboardBtn.classList.add('game-shell-action','game-shell-action--icon','game-shell-action--keyboard');
          keyboardBtn.innerHTML = keyboardIconMarkup(false);
          setHotkeyCaption(keyboardBtn,SITEWIDE_KEYBOARD_HOTKEY_LABEL);
        }
        if(keyboardBtn.parentElement!==keypadHost) keypadHost.appendChild(keyboardBtn);
      }
    });
    syncDesktopKeypadState();
  }

  document.addEventListener('baseline:game-extension-open', function(){
    // An extension owns the Games surface now. Clear only the core selection;
    // the extension shell remains responsible for its panel and route.
    selectedGame='';
    desktopKeypadOpenGame='';
    syncDesktopKeypadState();
    if(refs.gamesList) renderGamesList();
  });
  document.addEventListener('baseline:crossnumber-progress', function(){
    try{ renderSystemSummary(); }catch(_error){}
  });
  document.addEventListener('baseline:game-storage', function(){
    try{ renderSystemSummary(); }catch(_error){}
  });

  function cacheRefs(){
    [
      'authStateNote','bankSummary','gamesSummaryWrap','gamesList',
      'pairsPanel','pairsLevelHeading','pairsXpMeta','pairsXpFill','pairsSkillAlertBtn','pairsSkillTree','pairsSkillTreeGrid','pairsSkillPointsValue','pairsBoardsClearedValue','pairsGamesPlayedValue','pairsTierValue','pairsStreakValue','pairsCleanStreakValue','pairsCleanBonusValue','pairsTierNameValue','pairsMovesValue','pairsMatchedValue','pairsRoundBankValue','pairsHintBtn','pairsRoundSummary','pairsBoard','pairsTierSelectList','pairsSkillSummary','pairsStats','newPairsBoardBtn',
      'detectwordPanel','wordLevelHeading','wordXpMeta','wordXpFill','wordSkillAlertBtn','wordSkillTree','wordSkillTreeGrid','wordSkillPointsValue','wordSolvedValue','wordStreakValue','wordTierValue','wordBestStreakValue','wordCleanStreakValue','wordCleanBonusValue','wordTierNameValue','wordGuessesValue','wordRoundBankValue','wordRoundSummary','wordBoard','wordTierSelectList','wordSkillSummary','wordStats','newWordRoundBtn',
      'make24Panel','make24LevelHeading','make24XpMeta','make24XpFill','make24SkillAlertBtn','make24SkillTree','make24SkillTreeGrid','make24SkillPointsValue','make24SolvedValue','make24GamesPlayedValue','make24TierValue','make24CleanStreakValue','make24CleanBonusValue','make24TierNameValue','make24TargetValue','make24MistakesValue','make24RoundBankValue','make24HintBtn','make24RerollBtn','make24RoundSummary','make24Board','make24TierSelectList','make24SkillSummary','make24Stats','newMake24Btn',
      'trackcoinPanel','newTrackCoinRoundBtn','trackCoinXpMeta','trackCoinXpFill','trackCoinLevelHeading','trackCoinSkillPointsValue','trackCoinCoinsValue','trackCoinTierValue','trackCoinUnlockedTierValue','trackCoinStreakValue','trackCoinStreakBonusValue','trackCoinCleanStreakValue','trackCoinCleanBonusValue','trackCoinBoard','trackCoinTierSelectList','trackCoinStats','trackCoinRpgState','trackCoinSkillTreeGrid','trackCoinSkillSummary','trackCoinGameToggleBtn','trackCoinSkillToggleBtn','trackCoinTierToggleBtn','trackCoinProgressToggleBtn',
      'ruleshiftPanel','newRuleShiftBtn','ruleShiftXpMeta','ruleShiftXpFill','ruleShiftLevelHeading','ruleShiftSkillPointsValue','ruleShiftBankValue','ruleShiftTierValue','ruleShiftStreakValue','ruleShiftBestStreakValue','ruleShiftCleanStreakValue','ruleShiftCleanBonusValue','ruleShiftTierNameValue','ruleShiftRoundValue','ruleShiftMistakesValue','ruleShiftRoundBankValue','ruleShiftRoundSummary','ruleShiftBoard','ruleShiftTierSelectList','ruleShiftSkillTreeGrid','ruleShiftSkillSummary','ruleShiftStats',
      'ninjaPanel','ninjaXpMeta','ninjaXpFill','ninjaLevelValue','ninjaStageValue','ninjaCoinsValue','ninjaDpsValue','ninjaOfflineRateValue','ninjaSpiritValue','ninjaCleanStreakValue','ninjaCleanBonusValue','ninjaOfflineMessage','ninjaSceneHpValue','ninjaManualStrikeBtn','ninjaBonusRefreshBtn','ninjaEnemyLabel','ninjaEnemyTypeValue','ninjaBossesValue','ninjaHighestStageValue','ninjaEnemyHpFill','ninjaCombatSummary','ninjaUpgradesList','ninjaBonusesList','ninjaTraitsList','ninjaPrestigeSummary','ninjaPrestigeBtn','ninjaRunnerWrap','ninjaEnemyWrap','ninjaHitFlash'
    ].forEach(id => { refs[id] = document.getElementById(id); });
  }
  function updateInputValueWithoutKeyboard(input, nextValue){
    if(!input) return;
    input.value = String(nextValue || '');
    try{ input.dispatchEvent(new Event('input', { bubbles:true })); }catch(_error){}
  }
  function handleMobileGameKey(gameId, key){
    const id = normaliseGameId(gameId);
    const input = id === 'make24' ? document.getElementById('make24ExpressionInput') : id === 'detectword' ? document.getElementById('wordGuessInput') : null;
    if(!input) return;
    syncMobileInputMode(id);
    const raw = String(key || '');
    if(raw === 'submit'){
      const form = input.closest('form');
      if(form) form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit', { cancelable:true, bubbles:true }));
      focusGamePlaySurface(id, { scroll:false, mobileMode:false, preserveView:true });
      return;
    }
    if(raw === 'clear'){
      updateInputValueWithoutKeyboard(input, '');
      return;
    }
    if(raw === 'backspace'){
      updateInputValueWithoutKeyboard(input, String(input.value || '').slice(0, -1));
      return;
    }
    let append = raw;
    if(id === 'detectword'){
      append = append.replace(/[^a-z]/g, '');
      const max = Number(input.getAttribute('maxlength') || currentWordTier().letters || 7);
      updateInputValueWithoutKeyboard(input, (String(input.value || '') + append).slice(0, max).toLowerCase());
      return;
    }
    if(id === 'make24'){
      append = append === 'x' ? '*' : append;
      append = append.replace(/[^0-9+\-*/().]/g, '');
      updateInputValueWithoutKeyboard(input, String(input.value || '') + append);
    }
  }

  function startCoreGameFromButton(start){
    if(!start) return false;
    if(start.id==='newPairsBoardBtn'){ startPairsBoard(); focusGamePlaySurface('pairs',{scroll:false,mobileMode:true}); return true; }
    if(start.id==='newWordRoundBtn'){ startWordRound(); focusGamePlaySurface('detectword',{scroll:false,mobileMode:true}); return true; }
    if(start.id==='newMake24Btn'){ startMake24Puzzle(); focusGamePlaySurface('make24',{scroll:false,mobileMode:true}); return true; }
    if(start.id==='newTrackCoinRoundBtn'){ startTrackCoinRound(); focusGamePlaySurface('trackcoin',{scroll:false,mobileMode:true}); return true; }
    if(start.id==='newRuleShiftBtn'){ startRuleShiftRound(); focusGamePlaySurface('ruleshift',{scroll:false,mobileMode:true}); return true; }
    return false;
  }

  function bindEvents(){
    document.addEventListener('pointerover',function(event){
      const button=event.target instanceof Element ? event.target.closest('[data-tooltip]') : null;
      if(button) alignGameTooltip(button);
    },true);
    document.addEventListener('focusin',function(event){
      const button=event.target instanceof Element ? event.target.closest('[data-tooltip]') : null;
      if(button) alignGameTooltip(button);
    },true);
    // Pointer activation owns New Game so an already-focused game surface can
    // never consume the first press. The following click is suppressed; a
    // keyboard-generated click still works normally.
    document.addEventListener('pointerdown', function(event){
      if(event.pointerType==='mouse' && event.button!==0) return;
      const target=event.target instanceof Element ? event.target : null;
      const start=target?.closest('#newPairsBoardBtn,#newWordRoundBtn,#newMake24Btn,#newTrackCoinRoundBtn,#newRuleShiftBtn');
      if(!start) return;
      event.preventDefault();
      event.stopPropagation();
      if(typeof event.stopImmediatePropagation==='function') event.stopImmediatePropagation();
      coreNewGamePointerId=start.id;
      coreNewGamePointerAt=performance.now();
      startCoreGameFromButton(start);
    }, true);
    document.addEventListener('click', function(event){
      const target=event.target instanceof Element ? event.target : null;
      const start=target?.closest('#newPairsBoardBtn,#newWordRoundBtn,#newMake24Btn,#newTrackCoinRoundBtn,#newRuleShiftBtn');
      if(!start) return;
      event.preventDefault();
      event.stopPropagation();
      if(typeof event.stopImmediatePropagation==='function') event.stopImmediatePropagation();
      if(start.id===coreNewGamePointerId && performance.now()-coreNewGamePointerAt<800) return;
      startCoreGameFromButton(start);
    }, true);
    document.addEventListener('click', function(event){
      const modalClose = event.target.closest('[data-close-games-modal]');
      if(modalClose){ GAMES_HELP_MODAL.close(); return; }
      const infoModal = event.target.closest('[data-game-info-modal]');
      if(infoModal){ if(event){ event.preventDefault(); event.stopPropagation(); } GAMES_HELP_MODAL.open(infoModal.getAttribute('data-game-info-modal') || '', 'brain'); return; }
      const howToModal = event.target.closest('[data-game-howto-modal]');
      if(howToModal){ if(event){ event.preventDefault(); event.stopPropagation(); } GAMES_HELP_MODAL.open(howToModal.getAttribute('data-game-howto-modal') || '', 'how'); return; }
      const openDartsFocused = event.target.closest('[data-open-darts-focused]');
      if(openDartsFocused){ if(event){ event.preventDefault(); event.stopPropagation(); if(typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation(); } requestDartsFocusedOpen(); return; }
      const openBadmintonFocused = event.target.closest('[data-open-badminton-focused]');
      if(openBadmintonFocused){ if(event){ event.preventDefault(); event.stopPropagation(); if(typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation(); } requestBadmintonFocusedOpen(); return; }
      const fullscreenWindowTab=event.target.closest('[data-fullscreen-window-tab]');
      if(fullscreenWindowTab){
        const fullscreen=activeRecreationFullscreenRoot();
        const gameId=fullscreenGameIdFromElement(fullscreen);
        if(gameId) setFullscreenWindowView(gameId,fullscreenWindowTab.getAttribute('data-fullscreen-window-tab')||'game');
        return;
      }
      const autoNextToggle = event.target.closest('[data-auto-next-toggle]');
      if(autoNextToggle){ toggleAutoNext(autoNextToggle.getAttribute('data-auto-next-toggle') || ''); return; }
      const gameFullscreen = event.target.closest('[data-game-fullscreen]'); if(gameFullscreen){ toggleGameFullscreen(gameFullscreen.getAttribute('data-game-fullscreen') || ''); return; }
      const desktopKeypadToggle = event.target.closest('[data-desktop-keypad-toggle]'); if(desktopKeypadToggle){ toggleDesktopKeypad(desktopKeypadToggle.getAttribute('data-desktop-keypad-toggle') || ''); return; }
      const select = event.target.closest('[data-select-game]');
      if(select){
        const nextGame = select.getAttribute('data-select-game') || '';
        if(!nextGame) exitMobileGameMode();
        selectGame(nextGame, { historyMode:'push' });
        if(nextGame) focusGameEntry(nextGame, { scroll:true, mobileMode:true });
        return;
      }
      const exitMobileModeBtn = event.target.closest('[data-exit-mobile-game-mode]');
      if(exitMobileModeBtn){
        exitMobileGameMode();
        selectGame('', { historyMode:'push' });
        window.setTimeout(function(){
          const games = document.getElementById('games');
          const scroller = q('.bl-scroll');
          try{
            if(scroller) scroller.scrollTo({ top:0, left:0, behavior:'auto' });
            else window.scrollTo({ top:0, left:0, behavior:'auto' });
            if(games && typeof games.focus === 'function') games.focus({ preventScroll:true });
          }catch(_scrollError){}
        }, 80);
        return;
      }
      const mobileKeyBtn = event.target.closest('[data-mobile-game-key]');
      if(mobileKeyBtn){
        const raw = String(mobileKeyBtn.getAttribute('data-mobile-game-key') || '');
        const idx = raw.indexOf(':');
        if(idx > 0) handleMobileGameKey(raw.slice(0, idx), raw.slice(idx + 1));
        return;
      }
      const pairTheme = event.target.closest('[data-pairs-theme]');
      if(pairTheme){
        const theme=PAIRS_CARD_THEMES.find(function(item){return item.id===pairTheme.getAttribute('data-pairs-theme');});
        if(theme&&profiles.pairs.level>=theme.unlockLevel){ profiles.pairs.cardTheme=theme.id; scheduleSave('pairs'); renderAll(); }
        return;
      }
      const pairTier = event.target.closest('[data-pairs-tier]');
      if(pairTier){
        const tier = PAIRS_TIERS.find(item => item.id === pairTier.getAttribute('data-pairs-tier'));
        if(tier && profiles.pairs.level >= tier.unlockLevel){ profiles.pairs.selectedTier = tier.id; profiles.pairs.activeRound = null; pairsBoardState = null; pairsIdleMessage = tier.name + ' selected. Press New Game when ready.'; scheduleSave('pairs'); renderAll(); }
        return;
      }
      const wordTier = event.target.closest('[data-word-tier]');
      if(wordTier){
        const tier = WORD_TIERS.find(item => item.id === wordTier.getAttribute('data-word-tier'));
        if(tier && profiles.detectword.level >= tier.unlockLevel){ profiles.detectword.selectedTier = tier.id; profiles.detectword.activeRound = null; wordState = null; wordIdleMessage = tier.name + ' selected. Press New Game when ready.'; scheduleSave('detectword'); renderAll(); }
        return;
      }
      const make24Tier = event.target.closest('[data-make24-tier]');
      const trackCoinTier = event.target.closest('[data-trackcoin-tier]');
      if(trackCoinTier){ const tier = TRACKCOIN_TIERS.find(item => item.id === trackCoinTier.getAttribute('data-trackcoin-tier')); if(tier && profiles.trackcoin.level >= tier.unlockLevel){ profiles.trackcoin.selectedTier = tier.id; profiles.trackcoin.currentTier = tier.id; profiles.trackcoin.activeRound = null; cancelTrackCoinAnimation(); trackCoinState = null; scheduleSave('trackcoin'); renderAll(); } return; }
      if(make24Tier){
        const tier = MAKE24_TIERS.find(item => item.id === make24Tier.getAttribute('data-make24-tier'));
        if(tier && profiles.make24.level >= tier.unlockLevel){ profiles.make24.selectedTier = tier.id; profiles.make24.activeRound = null; make24State = null; make24IdleMessage = tier.name + ' selected. Press New Game when ready.'; scheduleSave('make24'); renderAll(); }
        return;
      }
      const pairSkill = event.target.closest('[data-pairs-skill]'); if(pairSkill){ spendPairsSkill(pairSkill.getAttribute('data-pairs-skill')); return; }
      const pairPanelBtn = event.target.closest('[data-pairs-panel]'); if(pairPanelBtn){ setPairsPanel(pairPanelBtn.getAttribute('data-pairs-panel'), 'push'); return; }
      const wordSkill = event.target.closest('[data-word-skill]'); if(wordSkill){ spendWordSkill(wordSkill.getAttribute('data-word-skill')); return; }
      const wordPanelBtn = event.target.closest('[data-word-panel]'); if(wordPanelBtn){ setWordPanel(wordPanelBtn.getAttribute('data-word-panel'), 'push'); return; }
      const make24Skill = event.target.closest('[data-make24-skill]'); if(make24Skill){ spendMake24Skill(make24Skill.getAttribute('data-make24-skill')); return; }
      const make24PanelBtn = event.target.closest('[data-make24-panel]'); if(make24PanelBtn){ setMake24Panel(make24PanelBtn.getAttribute('data-make24-panel'), 'push'); return; }
      const trackCoinSkill = event.target.closest('[data-trackcoin-skill]'); if(trackCoinSkill){ spendTrackCoinSkill(trackCoinSkill.getAttribute('data-trackcoin-skill')); return; }
      const trackCoinPanelBtn = event.target.closest('[data-trackcoin-panel]'); if(trackCoinPanelBtn){ setTrackCoinPanel(trackCoinPanelBtn.getAttribute('data-trackcoin-panel'), 'push'); return; }
      const ruleShiftTier = event.target.closest('[data-ruleshift-tier]'); if(ruleShiftTier){ const tier = RULESHIFT_TIERS.find(item => item.id === ruleShiftTier.getAttribute('data-ruleshift-tier')); if(tier && profiles.ruleshift.level >= tier.unlockLevel){ profiles.ruleshift.selectedTier = tier.id; profiles.ruleshift.activeRound = null; clearRuleShiftTimer(); ruleShiftState = null; ruleShiftIdleMessage = tier.name + ' selected. Press New Game when ready.'; scheduleSave('ruleshift'); renderAll(); } return; }
      const ruleShiftSkill = event.target.closest('[data-ruleshift-skill]'); if(ruleShiftSkill){ spendRuleShiftSkill(ruleShiftSkill.getAttribute('data-ruleshift-skill')); return; }
      const ruleShiftPanelBtn = event.target.closest('[data-ruleshift-panel]'); if(ruleShiftPanelBtn){ setRuleShiftPanel(ruleShiftPanelBtn.getAttribute('data-ruleshift-panel'), 'push'); return; }
      const ninjaPanelBtn = event.target.closest('[data-ninja-panel]'); if(ninjaPanelBtn){ setNinjaPanel(ninjaPanelBtn.getAttribute('data-ninja-panel'), 'push'); return; }
      const panelToggle = event.target.closest('[data-toggle-panel]'); if(panelToggle){ const id = panelToggle.getAttribute('data-toggle-panel'); const target = document.getElementById(id); if(target){ const hidden = !!target.hidden; target.hidden = !hidden; panelToggle.setAttribute('aria-expanded', String(hidden)); } return; }
      const explicitWordSubmit=event.target.closest('#wordGuessForm [type="submit"]');
      if(explicitWordSubmit){
        event.preventDefault();
        submitWordGuess({preventDefault:function(){},target:explicitWordSubmit.closest('form')});
        return;
      }
      const explicitMakeSubmit=event.target.closest('#make24ExpressionForm [type="submit"]');
      if(explicitMakeSubmit){
        event.preventDefault();
        submitMake24Expression({preventDefault:function(){},target:explicitMakeSubmit.closest('form')});
        return;
      }
      const make24TokenBtn=event.target.closest('[data-make24-token]');
      if(make24TokenBtn){ appendMake24BuilderToken(make24TokenBtn.getAttribute('data-make24-token')||''); return; }
      const make24EditBtn=event.target.closest('[data-make24-edit]');
      if(make24EditBtn){ editMake24Builder(make24EditBtn.getAttribute('data-make24-edit')||''); return; }
            const make24BoardHintBtn = event.target.closest('#make24BoardHintBtn'); if(make24BoardHintBtn){ useMake24Hint(); return; }
      const make24BoardRerollBtn = event.target.closest('#make24BoardRerollBtn'); if(make24BoardRerollBtn){ rerollMake24Puzzle(); return; }
      const trackCoinResume = event.target.closest('[data-action="resume-trackcoin"]'); if(trackCoinResume){ if(event){ event.preventDefault(); event.stopPropagation(); } resumeRestoredTrackCoinRound(); return; }
            const trackCoinReplay = event.target.closest('[data-action="replay-trackcoin"], #replayTrackCoinShuffleBtn'); if(trackCoinReplay){ if(event){ event.preventDefault(); event.stopPropagation(); } replayTrackCoinShuffle(); return; }
      const ruleShiftPick = event.target.closest('[data-ruleshift-pick]'); if(ruleShiftPick){ chooseRuleShiftOption(ruleShiftPick.getAttribute('data-ruleshift-pick')); return; }

    });
    document.addEventListener('pointerdown',function(event){
      const button=event.target instanceof Element ? event.target.closest('#make24GameCard [data-make24-token],#make24GameCard [data-make24-edit]') : null;
      if(!button) return;
      event.preventDefault();
      window.requestAnimationFrame(keepMake24InputFocused);
    },true);
    document.addEventListener('input', function(event){
      const target = event.target;
      if(!target || !target.id) return;
      if(target.id === 'wordGuessInput' && wordState){ wordState.draftGuess = String(target.value || ''); persistWordRound(); }
      if(target.id === 'make24ExpressionInput' && make24State){ make24State.draftExpression = String(target.value || ''); persistMake24Round(); syncMake24BuilderUi(); }
    });
    document.addEventListener('keydown', function(event){
      const input = event.target;
      const targetId = input && input.id ? input.id : '';
      if(event.key === 'Enter' && !event.shiftKey && !event.isComposing && (targetId === 'wordGuessInput' || targetId === 'make24ExpressionInput')){
        const form = input.closest('form');
        if(form){
          event.preventDefault();
          form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit', { cancelable:true, bubbles:true }));
        }
        return;
      }
      if(event.defaultPrevented || event.ctrlKey || event.metaKey || event.isComposing) return;
      const typing = !!(input && (input.matches('input, textarea, select') || input.isContentEditable));
      const key = String(event.key || '').toLowerCase();
      if(!key) return;
      const hotkeyGame = activeGameIdForHotkeys();

      if(event.altKey && key === 'n'){
        if(startActiveGameFromHotkey(hotkeyGame)){
          event.preventDefault();
          focusGamePlaySurface(hotkeyGame, { scroll:false, mobileMode:true });
          return;
        }
      }
      if(event.altKey && key === 'a'){
        event.preventDefault();
        toggleAutoNextForActiveGame(hotkeyGame);
        return;
      }
      if(event.altKey && key === 'k'){
        event.preventDefault();
        toggleDesktopKeypad(hotkeyGame);
        return;
      }
      if(event.altKey && key === 'f'){
        const id=normaliseGameId(hotkeyGame);
        if(['pairs','detectword','make24','trackcoin','ruleshift'].includes(id)){
          event.preventDefault();
          toggleGameFullscreen(id);
        }
        return;
      }
      if(event.altKey && key === 'p' && hotkeyGame === 'trackcoin'){
        event.preventDefault();
        replayTrackCoinShuffle();
        return;
      }
      if(event.altKey) return;

      if(hotkeyGame === 'pairs' && !typing){
        if(key === 'h'){ event.preventDefault(); usePairsHint(); return; }
      }
      if(hotkeyGame === 'make24'){
        if(!typing && key === 'h'){ event.preventDefault(); useMake24Hint(); return; }
        if(!typing && key === 'j'){ event.preventDefault(); rerollMake24Puzzle(); return; }
      }
    });
    document.addEventListener('submit', function(event){
      const make24Form = event.target.closest('#make24ExpressionForm');
      if(make24Form){ submitMake24Expression(event); return; }
      const wordForm = event.target.closest('#wordGuessForm');
      if(wordForm){ submitWordGuess(event); return; }
    });
    if(refs.newPairsBoardBtn) setCompactActionButton(refs.newPairsBoardBtn,'＋','New Game',SITEWIDE_START_HOTKEY_LABEL);
    if(refs.pairsBoard){
      refs.pairsBoard.addEventListener('click',function(event){
        const pairCard=event.target.closest('button.memory-card[data-card]');
        if(!pairCard || !refs.pairsBoard.contains(pairCard)) return;
        event.preventDefault();
        event.stopPropagation();
        handlePairsCardFlip(pairCard.getAttribute('data-card'));
      });
    }
    if(refs.pairsHintBtn){ setCompactActionButton(refs.pairsHintBtn,'?','Hint','H'); refs.pairsHintBtn.addEventListener('click', usePairsHint); }
    if(refs.pairsSkillAlertBtn) refs.pairsSkillAlertBtn.addEventListener('click', function(){ if(profiles.pairs.skillPoints > 0) setPairsPanel('pairsSkillCard', 'push'); });
    if(refs.newWordRoundBtn) setCompactActionButton(refs.newWordRoundBtn,'＋','New Game',SITEWIDE_START_HOTKEY_LABEL);
    if(refs.newTrackCoinRoundBtn) setCompactActionButton(refs.newTrackCoinRoundBtn,'＋','New Game',SITEWIDE_START_HOTKEY_LABEL);
    if(refs.newRuleShiftBtn) setCompactActionButton(refs.newRuleShiftBtn,'＋','New Game',SITEWIDE_START_HOTKEY_LABEL);
    if(refs.wordSkillAlertBtn) refs.wordSkillAlertBtn.addEventListener('click', function(){ if(profiles.detectword.skillPoints > 0) setWordPanel('wordSkillCard', 'push'); });
    if(refs.newMake24Btn) setCompactActionButton(refs.newMake24Btn,'＋','New Game',SITEWIDE_START_HOTKEY_LABEL);
    if(refs.make24HintBtn){ setCompactActionButton(refs.make24HintBtn,'?','Guide','H'); refs.make24HintBtn.addEventListener('click', useMake24Hint); }
    if(refs.make24RerollBtn){ setCompactActionButton(refs.make24RerollBtn,'↻','Reroll','J'); refs.make24RerollBtn.addEventListener('click', rerollMake24Puzzle); }
    if(refs.make24SkillAlertBtn) refs.make24SkillAlertBtn.addEventListener('click', function(){ if(profiles.make24.skillPoints > 0) setMake24Panel('make24SkillCard', 'push'); });
    if(refs.gamesSummaryWrap) refs.gamesSummaryWrap.addEventListener('toggle', function(event){ const details = event.target.closest('details[data-summary]'); if(!details) return; const id = details.getAttribute('data-summary'); if(details.open) openSummaryIds.add(id); else openSummaryIds.delete(id); }, true);
  }
  function markCoreReady(coreDependencies){
    window.BASELINE_RECREATION_CORE_READY = true;
    document.documentElement.setAttribute('data-baseline-recreation-core', 'ready');
    try{
      window.dispatchEvent(new CustomEvent('baseline:recreation:core-ready', { detail:{ dependencies:coreDependencies } }));
    }catch(_coreReadyEventError){}
  }

  async function initialiseStableRecreation(coreDependencies){
    let stable=true;
    try{
      resolveInitialAuth();
      await hydrateProfiles();
      restoreFromHashState({ useStored:true });
      ensureRecreationBackEntry();
      renderAuthState();
      safeRenderAll();
      startNinjaLoop();
      bindAuthStateChanges();
    }catch(error){
      stable=false;
      try{ console.error('[Baseline Recreation] Stable startup failed.',error); }catch(_e){}
      // loadProfile already falls back to server-backed memory/default profiles.
      // Render once from whatever authoritative state is available rather than
      // exposing a sequence of temporary states.
      try{
        authState=getAuth();
        renderAuthState();
        safeRenderAll();
      }catch(_e){}
    }
    markCoreReady(coreDependencies);
    return stable;
  }

  function init(){
    cacheRefs();
    publishAutoNextApi();
    const coreDependencies = {
      profiles:profiles, refs:refs, q:q, qsa:qsa, clamp:clamp, sum:sum, formatInt:formatInt, formatCompact:formatCompact,
      escapeHtml:escapeHtml, hotkeyActionLabel:hotkeyActionLabel, cleanWinBonusPct:cleanWinBonusPct, xpNeededForLevel:xpNeededForLevel, applyLevelCurve:applyLevelCurve,
      scheduleSave:scheduleSave, renderAll:renderAll, renderSystemSummary:renderSystemSummary, renderGamesList:renderGamesList,
      syncHashState:syncHashState, isMobileGameViewport:isMobileGameViewport, profileOrDefault:profileOrDefault
    };
    window.BASELINE_RECREATION_CORE_DEPENDENCIES = coreDependencies;
    if(window.BaselineRealmHost && typeof window.BaselineRealmHost.configure === 'function'){
      try{ window.BaselineRealmHost.configure(coreDependencies); }
      catch(error){ console.error('[Baseline Recreation] Realm configuration failed; Recreation controls remain active.', error); }
    }
    ensureGamePlayContract();
    setupGamePlayContractObserver();
    ensureGameFullscreenButtons();
    wireTabs();
    bindEvents();
    if(typeof window !== 'undefined'){
      window.addEventListener('hashchange', function(){ restoreFromHashState({ useStored:false }); });
      window.addEventListener('popstate', function(){ restoreFromHashState({ useStored:false }); });
      document.addEventListener('fullscreenchange', function(){
        const fullscreen=activeRecreationFullscreenRoot();
        const gameId=fullscreenGameIdFromElement(fullscreen);
        if(fullscreen&&gameId) fullscreen.setAttribute('data-fullscreen-window-view','game');
        syncFullscreenWindowTabs(gameId);
        syncDesktopKeypadState();
        syncGameButtonLabels();
        renderAutoNextControls();
      });
      document.addEventListener('keydown', function(event){ if(event && event.key === 'Escape') GAMES_HELP_MODAL.close(); });
      window.addEventListener('resize', function(){ ensureGameFullscreenButtons(); syncGameButtonLabels(); renderAutoNextControls(); if(wordState) renderWordBoard(); if(make24State) renderMake24Board(); }, { passive:true });
      window.addEventListener('resize', function(){ syncAllMobileInputModes(); if(selectedGame) ensureGamePlayContract(); syncDesktopKeypadState(); });
      window.addEventListener('orientationchange', function(){ syncAllMobileInputModes(); syncDesktopKeypadState(); if(selectedGame) focusGamePlaySurface(selectedGame, { scroll:false, mobileMode:!isDesktopKeypadGame(selectedGame) }); });
      document.addEventListener('visibilitychange', syncRuleShiftVisibility);
      try{ document.documentElement.setAttribute('data-baseline-games-resize-mobile-input-sync','1'); }catch(_e){}
    }
    const initialRenderReady=initialiseStableRecreation(coreDependencies);
    window.BASELINE_RECREATION_INITIAL_RENDER_READY=initialRenderReady;
  }
  init();
})();

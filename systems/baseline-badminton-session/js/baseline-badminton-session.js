(function(){
  'use strict';

  // BASELINE-BADMINTON-HARDSHIP-ACTIVE-RULE-ENFORCEMENT-20260608
  // Active hardship memory must control instruction text and SVG restriction rendering.
  // 20260609 rebuild: one dominant hardship path controls save, instruction, and SVG before ratings can change.

  const APP_VERSION = '4.2';
  const START_RATING = 25;
  const MAX_RATING = 50;
  const MIN_RATING = 0;
  const MAX_SCORE = 30;
  const MAX_RATING_GAP = 5;
  const HEAVY_RATING_LOSS_BELOW = 12;
  const DEFAULT_APPROVED_ADMIN_USERNAMES = [];
  const API_STATE_URL = '/systems/baseline-badminton-session/api/badminton_session.php';
  const LOGIN_OPTIONS_URL = '/systems/baseline-badminton-session/api/badminton_logins.php';
  const SITE_MODERATOR_CANONICAL_LOGIN = 'Peter Bates-Wilkinson';
  const SITE_MODERATOR_ALIASES = ['bateswilkinson@gmail.com','peterbw','peter bates-wilkinson','peter bates wilkinson','peter bates-wilkinson'];
  window.__BASELINE_BADMINTON_CANONICAL_SAVED_DATA__ = true;
  const sessionCore = window.BASELINE_BADMINTON_SESSION_CORE;
  const serverClient = window.BASELINE_BADMINTON_SERVER;
  if(!sessionCore) throw new Error('Badminton Session core failed to load.');
  if(!serverClient) throw new Error('Badminton Session server module failed to load.');
  const DOUBLES_ZONES = sessionCore.DOUBLES_ZONES;
  const SINGLES_ZONES = sessionCore.SINGLES_ZONES;
  const PRESET_ZONE_MAP = sessionCore.PRESET_ZONE_MAP;

  const refs = {};
  let state = createInitialState();
  let loginOptions = [];

  const ratingModule = window.BASELINE_BADMINTON_RATINGS;
  if(!ratingModule) throw new Error('Badminton Session rating engine failed to load.');
  const ratingEngine = ratingModule.create({
    getState:function(){ return state; },
    getPlayer:function(id){ return getPlayer(id); },
    average:function(values){ return average(values); },
    clampRating:function(value){ return clampRating(value); },
    startRating:START_RATING,
    maxRatingGap:MAX_RATING_GAP,
    heavyRatingLossBelow:HEAVY_RATING_LOSS_BELOW
  });
  const getPlayerRatingId = ratingEngine.getPlayerRatingId;
  const getPlayerRating = ratingEngine.getPlayerRating;
  const setPlayerRating = ratingEngine.setPlayerRating;
  const normalizePairRatingKeys = ratingEngine.normalizePairRatingKeys;
  const normalizeOneVsTwoRatingKeys = ratingEngine.normalizeOneVsTwoRatingKeys;
  const ensureRatingStores = ratingEngine.ensureRatingStores;
  const getPairIdFromPlayers = ratingEngine.getPairIdFromPlayers;
  const setPairRatingForPlayers = ratingEngine.setPairRatingForPlayers;
  const getPairRatingForPlayers = ratingEngine.getPairRatingForPlayers;
  const setOneVsTwoRatingForPlayer = ratingEngine.setOneVsTwoRatingForPlayer;
  const getOneVsTwoRatingForPlayer = ratingEngine.getOneVsTwoRatingForPlayer;
  const getSideRatingForCourt = ratingEngine.getSideRatingForCourt;
  const getCourtSideRatingEntity = ratingEngine.getCourtSideRatingEntity;
  const setCourtSideRatingEntity = ratingEngine.setCourtSideRatingEntity;
  const getHighestRatingForEntityType = ratingEngine.getHighestRatingForEntityType;
  const entityIsHighestInItsRatingType = ratingEngine.entityIsHighestInItsRatingType;
  const applyTopWinIncreaseForCourt = ratingEngine.applyTopWinIncreaseForCourt;
  const applyDeltaToSideWithOpponentGapCap = ratingEngine.applyDeltaToSideWithOpponentGapCap;
  const getRatingLossDelta = ratingEngine.getRatingLossDelta;
  const formatRatingDelta = ratingEngine.formatRatingDelta;
  const applyRatingChanges = ratingEngine.applyRatingChanges;
  const refreshCourtSideRatings = ratingEngine.refreshCourtSideRatings;

  const courtRendererModule = window.BASELINE_BADMINTON_COURT_RENDERER;
  if(!courtRendererModule) throw new Error('Badminton Session court renderer failed to load.');
  const courtRenderer = courtRendererModule.create({
    escapeHtml:function(value){ return escapeHtml(value); },
    uid:function(prefix){ return uid(prefix); },
    getCourtGeometry:function(){ return getCourtGeometry(); },
    getZoneMode:function(court){ return getZoneMode(court); },
    getTopCourtZones:function(mode){ return getTopCourtZones(mode); },
    mirrorRect:function(side, rect){ return mirrorRect(side, rect); },
    getZoneDisplayOrder:function(mode){ return getZoneDisplayOrder(mode); },
    getOppositeSideNumber:function(sideNumber){ return getOppositeSideNumber(sideNumber); },
    sanitizeZones:function(zones, mode){ return sanitizeZones(zones, mode); },
    getPresetFromZones:function(zones, mode){ return getPresetFromZones(zones, mode); },
    getDominantHardshipEntryForCourt:function(court){ return getDominantHardshipEntryForCourt(court); },
    normaliseShotRestrictions:function(restrictions, stage){ return normaliseShotRestrictions(restrictions, stage); },
    getTeamLabel:function(side){ return getTeamLabel(side); },
    getSideByNumber:function(court, sideNumber){ return getSideByNumber(court, sideNumber); },
    getTargetAreaTextFromPreset:function(preset, mode){ return getTargetAreaTextFromPreset(preset, mode); },
    getShotRestrictionText:function(stage, restrictions){ return getShotRestrictionText(stage, restrictions); },
    getShotRestrictionHtml:function(stage, restrictions){ return getShotRestrictionHtml(stage, restrictions); }
  });
  const getZoneRectsForSide = courtRenderer.getZoneRectsForSide;
  const getActiveShotRestrictionsForCourt = courtRenderer.getActiveShotRestrictionsForCourt;
  const renderCourtShotRestrictionIcon = courtRenderer.renderCourtShotRestrictionIcon;
  const renderCourtShotRestrictionOverlay = courtRenderer.renderCourtShotRestrictionOverlay;
  const getHardshipHelpText = courtRenderer.getHardshipHelpText;
  const renderHardshipHelp = courtRenderer.renderHardshipHelp;
  const renderRuleGuidance = courtRenderer.renderRuleGuidance;
  const renderCourtDiagram = courtRenderer.renderCourtDiagram;
  const renderBoundaryMask = courtRenderer.renderBoundaryMask;

  function createInitialState(){
    return {
      version: APP_VERSION,
      sessionStartedAt: new Date().toISOString(),
      localUpdatedAt: Date.now(),
      players: [],
      pairRatings: {},
      oneVsTwoRatings: {},
      approvedAdminUsernames: [],
      matches: [],
      matchupMemory: {},
      pairSummary: {},
      hardshipRecords: {},
      ruleAdmin: {
        globalRules: {},
        matchupOverrides: {}
      },
      plan: {
        attendance: 0,
        attendingPlayerIds: [],
        courtCount: 4,
        sitOutCounts: {},
        lastSitOutPlayerIds: [],
        currentSitOutPlayerIds: [],
        currentCircumstantialSitOutPlayerIds: [],
        currentOptionalSitOutPlayerIds: [],
        sessionPlayCounts: {},
        sessionPairCounts: {},
        sessionOpponentCounts: {},
        sessionSolo2v1Counts: {},
        generationIndex: 0,
        format: 'doubles',
        durationMinutes: 60,
        current: [],
        generatedAt: '',
        usedCourtSignatures: [],
        currentSavedSignatures: [],
        currentSavedCourtKeys: [],
        currentSetReadyForNext: false,
        finished: [],
        activeHardships: {},
        specialFourPlayerIndex: 0,
        twoPlayerFlipIndex: 0,
        currentGenerationToken: '',
        blankCurrentScoreInputs: false
      }
    };
  }

  function uid(prefix){
    return String(prefix || 'id') + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  }

  function safeNumber(value, fallback){
    const n = Number(value);
    return Number.isFinite(n) ? n : Number(fallback || 0);
  }

  function clampRating(value){
    const n = Number(value);
    if(!Number.isFinite(n)) return START_RATING;
    return Math.max(MIN_RATING, Math.min(MAX_RATING, Math.round(n * 10) / 10));
  }

  function escapeHtml(value){
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatPersonName(value){
    return String(value || '')
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .filter(Boolean)
      .map(part => part.toLowerCase().replace(/(^|[-'’])([a-z])/g, function(_match, prefix, letter){
        return prefix + letter.toUpperCase();
      }))
      .join(' ');
  }

  function normalizePlayerNames(){
    (state.players || []).forEach(player => {
      player.name = formatPersonName(player.name);
    });
  }

  function cssEscape(value){
    const text = String(value || '');
    if(window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(text);
    return text.replace(/(["\\])/g, '\\$1');
  }

  function shuffle(array){
    const copy = array.slice();
    for(let i = copy.length - 1; i > 0; i -= 1){
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  let serverSaveTimer = null;
  let serverSaveInFlight = false;
  let serverSavePromise = null;
  let serverSaveAbortController = null;
  let serverLoadAbortController = null;
  let pageIsLeaving = false;
  let lastServerAuth = null;
  let serverRevision = 0;
  let serverSaveConflict = false;
  let serverSaveBlocked = false;
  let suppressServerHydrationUntil = 0;

  function protectLocalCurrentState(ms){
    suppressServerHydrationUntil = Math.max(suppressServerHydrationUntil, Date.now() + Math.max(0, Number(ms || 2500)));
  }

  function serverHydrationSuppressed(){
    return Date.now() < suppressServerHydrationUntil;
  }

  function markPageLeaving(event){
    try{
      const href = event && event.detail && event.detail.href ? String(event.detail.href) : '';
      if(href){
        const target = new URL(href, window.location.href);
        const here = new URL(window.location.href);
        if(target.pathname === here.pathname && target.search === here.search){ return; }
      }
    }catch(_e){}
    pageIsLeaving = true;
    if(serverSaveTimer){
      window.clearTimeout(serverSaveTimer);
      serverSaveTimer = null;
    }
    try{
      // A server-authoritative save already in flight is intentionally NOT
      // aborted on refresh/navigation. keepalive lets it finish.
      if(serverLoadAbortController && typeof serverLoadAbortController.abort === 'function') serverLoadAbortController.abort();
    }catch(_e){}
  }

  try{ window.addEventListener('pagehide', markPageLeaving, { capture:true }); }catch(_e){}
  try{ window.addEventListener('beforeunload', markPageLeaving, { capture:true }); }catch(_e){}
  try{ window.addEventListener('baseline:page-leaving', markPageLeaving, { capture:true }); }catch(_e){}
  try{ document.addEventListener('baseline:site-navigate', markPageLeaving, { capture:true }); }catch(_e){}
  try{
    window.addEventListener('pageshow', function(event){
      // If the browser restores the page from bfcache, pagehide has already
      // marked the app as leaving. Re-enable the page safely instead of leaving
      // it in a permanently aborted state.
      if(event && event.persisted){
        pageIsLeaving = false;
        try{ renderAll(false); }catch(_e){}
        try{ hydrateSessionFromServer(); }catch(_e){}
      }
    }, { capture:true });
  }catch(_e){}

  function markLocalChange(){
    state.localUpdatedAt = Date.now();
  }


  function updateServerAuth(auth){
    if(auth && typeof auth === 'object'){
      lastServerAuth = auth;
      window.BASELINE_BADMINTON_AUTH = auth;
    }
  }

  function setPersistenceStatus(message, level){
    const text = String(message || '').trim();
    window.__BASELINE_BADMINTON_SERVER_STATUS__ = text;
    const node = refs && refs.persistenceStatus;
    if(node){
      node.hidden = !text;
      node.className = 'badminton-persistence-status' + (level ? (' is-' + level) : '');
      node.textContent = text;
    }
  }

  function announceServerSaveConflict(message, level){
    const text = message || 'Badminton changed elsewhere. Nothing was overwritten; reload before making further changes.';
    setPersistenceStatus(text, level || 'warning');
    try{ console.warn('[Baseline Badminton]', text); }catch(_e){}
  }

  function clearPersistenceStatus(){
    setPersistenceStatus('', '');
  }

  function serverPayload(candidate){
    return { state:candidate,expectedRevision:Number.isInteger(serverRevision)&&serverRevision>=0?serverRevision:0 };
  }

  function postServerState(options){
    options = options && typeof options === 'object' ? options : {};
    if(pageIsLeaving || serverSaveConflict || serverSaveBlocked || !API_STATE_URL || !window.fetch){
      return Promise.resolve(false);
    }
    if(serverSaveInFlight && serverSavePromise){
      return serverSavePromise.then(function(saved){
        return saved ? postServerState(options) : false;
      });
    }

    serverSaveInFlight = true;
    serverSaveAbortController = window.AbortController ? new AbortController() : null;
    const requestLocalUpdatedAt = Number(state && state.localUpdatedAt || 0) || 0;

    serverSavePromise = serverClient.save(API_STATE_URL, serverPayload(state), serverSaveAbortController && serverSaveAbortController.signal)
      .then(function(data){
        updateServerAuth(data && data.auth);
        if(data && data.error==='revision_conflict'){
          serverSaveConflict=true;
          serverSaveBlocked=true;
          announceServerSaveConflict('Badminton changed on the server before this save completed. Saving has stopped; reload the authoritative Badminton state before making further changes.', 'error');
          return false;
        }
        if(!data || !data.ok){
          serverSaveBlocked=true;
          announceServerSaveConflict('Badminton was not saved to the shared server. Saving has stopped; reload the authoritative Badminton state before making further changes.', 'error');
          return false;
        }
        const revision=Number(data.revision);
        if(Number.isInteger(revision)&&revision>=0) serverRevision=revision;
        if(!options.verify) return true;
        return serverClient.load(API_STATE_URL).then(function(verified){
          if(!verified || !verified.ok || !verified.state){
            serverSaveBlocked=true;
            announceServerSaveConflict('Badminton save could not be verified from the authoritative server. Reload before making further changes.', 'error');
            return false;
          }
          const expected = sessionCore.hardshipSnapshot(state.hardshipRecords);
          const actual = sessionCore.hardshipSnapshot(verified.state.hardshipRecords);
          if(expected !== actual){
            serverSaveBlocked=true;
            announceServerSaveConflict('Badminton hardship data did not survive the server round-trip. Saving has stopped to prevent data loss.', 'error');
            return false;
          }
          const verifiedRevision=Number(verified.revision);
          if(Number.isInteger(verifiedRevision)&&verifiedRevision>=0) serverRevision=verifiedRevision;
          state=hydrateLoadedState(verified.state);
          return true;
        });
      })
      .then(function(saved){
        if(saved){
          serverSaveBlocked=false;
          clearPersistenceStatus();
        }
        return saved;
      })
      .catch(function(_error){
        if(pageIsLeaving) return false;
        serverSaveBlocked=true;
        announceServerSaveConflict('Badminton was not saved to the shared server. Saving has stopped; reload the authoritative Badminton state before making further changes.', 'error');
        return false;
      })
      .finally(function(){
        serverSaveInFlight = false;
        serverSaveAbortController = null;
        serverSavePromise = null;
      });

    return serverSavePromise.then(function(saved){
      const latestStateUpdatedAt = Number(state && state.localUpdatedAt || 0) || 0;
      if(saved && !pageIsLeaving && !serverSaveConflict && !serverSaveBlocked && latestStateUpdatedAt > requestLocalUpdatedAt){
        return postServerState(options);
      }
      return saved;
    });
  }

  function queueServerSave(options){
    options = options && typeof options === 'object' ? options : {};
    if(pageIsLeaving || serverSaveConflict || serverSaveBlocked || !API_STATE_URL || !window.fetch){
      return Promise.resolve(false);
    }
    if(serverSaveTimer){
      window.clearTimeout(serverSaveTimer);
      serverSaveTimer = null;
    }
    if(options.immediate) return postServerState(options);
    return new Promise(function(resolve){
      serverSaveTimer = window.setTimeout(function(){
        serverSaveTimer = null;
        postServerState(options).then(resolve);
      }, 180);
    });
  }

  function saveSessionData(options){
    markLocalChange();
    migrateKnownModeratorPlayer();
    ensureRatingStores();
    return queueServerSave(options);
  }

  function ensureRuleAdminShape(ruleAdmin){
    return Object.assign({ globalRules:{}, matchupOverrides:{} }, ruleAdmin || {}, {
      globalRules: ruleAdmin && typeof ruleAdmin.globalRules === 'object' && ruleAdmin.globalRules ? ruleAdmin.globalRules : {},
      matchupOverrides: ruleAdmin && typeof ruleAdmin.matchupOverrides === 'object' && ruleAdmin.matchupOverrides ? ruleAdmin.matchupOverrides : {}
    });
  }

  function hydrateLoadedState(parsed){
    const base = createInitialState();
    parsed = parsed && typeof parsed === 'object' ? parsed : {};
    const storedMatches = Array.isArray(parsed.matches) ? parsed.matches : [];
    const storedPlayers = Array.isArray(parsed.players) ? parsed.players : [];
    const normalizedPlayers = storedPlayers.map(player => Object.assign({}, player, {
      name: formatPersonName(player && player.name),
      rating: clampRating(player && (player.playerRating != null ? player.playerRating : player.rating)),
      playerRating: clampRating(player && (player.playerRating != null ? player.playerRating : player.rating)),
      loginUsername: normalizeKnownLoginName(player && (player.loginUsername || player.login || player.username || '')),
      loginEmail: String(player && (player.loginEmail || player.email || '') || '').trim(),
      badmintonSessionsAdmin: !!(player && (player.badmintonSessionsAdmin || player.isBadmintonAdmin || player.badmintonAdmin)),
      matchCount: Number.isFinite(Number(player && player.matchCount)) ? Number(player.matchCount) : inferStoredPlayerMatchCount(player, storedMatches),
      doublesDaySinglesOptOut: !!(player && player.doublesDaySinglesOptOut),
      doublesDaySoloOptOut: !!(player && player.doublesDaySoloOptOut)
    }));
    const hydrated = {
      version: parsed.version || base.version,
      sessionStartedAt: parsed.sessionStartedAt || base.sessionStartedAt,
      localUpdatedAt: Number(parsed.localUpdatedAt || 0) || base.localUpdatedAt,
      players: normalizedPlayers,
      pairRatings: parsed.pairRatings && typeof parsed.pairRatings === 'object' ? parsed.pairRatings : {},
      oneVsTwoRatings: parsed.oneVsTwoRatings && typeof parsed.oneVsTwoRatings === 'object' ? parsed.oneVsTwoRatings : {},
      approvedAdminUsernames: Array.isArray(parsed.approvedAdminUsernames) ? parsed.approvedAdminUsernames : [],
      matches: storedMatches,
      matchupMemory: parsed.matchupMemory && typeof parsed.matchupMemory === 'object' ? parsed.matchupMemory : {},
      pairSummary: parsed.pairSummary && typeof parsed.pairSummary === 'object' ? parsed.pairSummary : {},
      hardshipRecords: parsed.hardshipRecords && typeof parsed.hardshipRecords === 'object'
        ? parsed.hardshipRecords
        : (parsed.plan && parsed.plan.activeHardships && typeof parsed.plan.activeHardships === 'object' ? parsed.plan.activeHardships : {}),
      ruleAdmin: ensureRuleAdminShape(parsed.ruleAdmin),
      plan: Object.assign({}, base.plan, parsed.plan || {}, {
        attendance: Number(parsed.plan && parsed.plan.attendance || 0),
        attendingPlayerIds: Array.isArray(parsed.plan && parsed.plan.attendingPlayerIds) ? parsed.plan.attendingPlayerIds : [],
        courtCount: Math.max(1, Math.min(8, Math.round(Number(parsed.plan && parsed.plan.courtCount || base.plan.courtCount || 4) || 4))),
        sitOutCounts: parsed.plan && typeof parsed.plan.sitOutCounts === 'object' && parsed.plan.sitOutCounts ? parsed.plan.sitOutCounts : {},
        lastSitOutPlayerIds: Array.isArray(parsed.plan && parsed.plan.lastSitOutPlayerIds) ? parsed.plan.lastSitOutPlayerIds : [],
        currentSitOutPlayerIds: Array.isArray(parsed.plan && parsed.plan.currentSitOutPlayerIds) ? parsed.plan.currentSitOutPlayerIds : [],
        currentCircumstantialSitOutPlayerIds: Array.isArray(parsed.plan && parsed.plan.currentCircumstantialSitOutPlayerIds)
          ? parsed.plan.currentCircumstantialSitOutPlayerIds
          : (Array.isArray(parsed.plan && parsed.plan.currentSitOutPlayerIds) ? parsed.plan.currentSitOutPlayerIds : []),
        currentOptionalSitOutPlayerIds: Array.isArray(parsed.plan && parsed.plan.currentOptionalSitOutPlayerIds) ? parsed.plan.currentOptionalSitOutPlayerIds : [],
        sessionPlayCounts: parsed.plan && parsed.plan.sessionPlayCounts && typeof parsed.plan.sessionPlayCounts === 'object' ? parsed.plan.sessionPlayCounts : {},
        sessionPairCounts: parsed.plan && parsed.plan.sessionPairCounts && typeof parsed.plan.sessionPairCounts === 'object' ? parsed.plan.sessionPairCounts : {},
        sessionOpponentCounts: parsed.plan && parsed.plan.sessionOpponentCounts && typeof parsed.plan.sessionOpponentCounts === 'object' ? parsed.plan.sessionOpponentCounts : {},
        sessionSolo2v1Counts: parsed.plan && parsed.plan.sessionSolo2v1Counts && typeof parsed.plan.sessionSolo2v1Counts === 'object' ? parsed.plan.sessionSolo2v1Counts : {},
        generationIndex: Math.max(0, Math.round(Number(parsed.plan && parsed.plan.generationIndex || 0) || 0)),
        currentSavedCourtKeys: Array.isArray(parsed.plan && parsed.plan.currentSavedCourtKeys) ? parsed.plan.currentSavedCourtKeys : [],
        currentSetReadyForNext: !!(parsed.plan && parsed.plan.currentSetReadyForNext),
        finished: Array.isArray(parsed.plan && parsed.plan.finished) ? parsed.plan.finished : [],
        activeHardships: parsed.plan && parsed.plan.activeHardships && typeof parsed.plan.activeHardships === 'object' ? parsed.plan.activeHardships : {},
        specialFourPlayerIndex: Math.max(0, Math.round(Number(parsed.plan && parsed.plan.specialFourPlayerIndex || 0) || 0)),
        twoPlayerFlipIndex: Math.max(0, Math.round(Number(parsed.plan && parsed.plan.twoPlayerFlipIndex || 0) || 0)),
        currentGenerationToken: String(parsed.plan && parsed.plan.currentGenerationToken || ''),
        blankCurrentScoreInputs: !!(parsed.plan && parsed.plan.blankCurrentScoreInputs)
      })
    };
    state = hydrated;
    state.plan.activeHardships = state.hardshipRecords;
    migrateKnownModeratorPlayer();
    ensureRatingStores();
    return state;
  }

  function hydrateSessionFromServer(){
    if(pageIsLeaving || serverHydrationSuppressed() || !API_STATE_URL || !window.fetch) return;
    try{
      if(serverLoadAbortController && typeof serverLoadAbortController.abort === 'function') serverLoadAbortController.abort();
    }catch(_e){}
    serverLoadAbortController = window.AbortController ? new AbortController() : null;
    serverClient.load(API_STATE_URL, serverLoadAbortController && serverLoadAbortController.signal)
      .then(function(data){
        if(pageIsLeaving || serverHydrationSuppressed()) return;
        if(!data || !data.ok){
          serverSaveBlocked=true;
          announceServerSaveConflict('The authoritative shared Badminton state could not be loaded. Saving is blocked until it is reloaded successfully.', 'error');
          return;
        }
        updateServerAuth(data.auth);
        serverSaveBlocked=false;
        const revision=Number(data.revision);
        const hasAuthoritativeRevision=Object.prototype.hasOwnProperty.call(data,'revision')&&Number.isInteger(revision)&&revision>=0;
        if(hasAuthoritativeRevision) serverRevision=revision;
        serverSaveConflict=false;
        state=hydrateLoadedState(data.state && typeof data.state === 'object' ? data.state : createInitialState());
        clearPersistenceStatus();
        renderAll(false);
      })
      .catch(function(_error){
        serverSaveBlocked=true;
        announceServerSaveConflict('The authoritative shared Badminton state could not be loaded. Saving is blocked until it is reloaded successfully.', 'error');
      })
      .finally(function(){
        serverLoadAbortController = null;
      });
  }

  function normalizeLoginName(value){
    return String(value || '').trim().toLowerCase();
  }

  function normalizeKnownLoginName(value){
    const normalized = normalizeLoginName(value);
    return SITE_MODERATOR_ALIASES.includes(normalized) ? SITE_MODERATOR_CANONICAL_LOGIN : String(value || '').trim();
  }

  function getSitewideAuth(){
    try{
      if(window.BASELINE_auth && typeof window.BASELINE_auth.get === 'function'){
        return window.BASELINE_auth.get() || {};
      }
    }catch(_e){}
    return {};
  }

  function getSitewideUser(){
    const auth = getSitewideAuth();
    return String(auth.name || '').trim();
  }

  function getAuthTokens(){
    const auth = getSitewideAuth();
    const tokens = [];
    [auth.name, auth.email, auth.login, auth.username, auth.displayName].forEach(function(value){
      const normalized = normalizeLoginName(value);
      if(normalized) tokens.push(normalized);
    });
    return Array.from(new Set(tokens));
  }

  function isKnownModeratorToken(value){
    return SITE_MODERATOR_ALIASES.includes(normalizeLoginName(value));
  }

  function currentUserIsModerator(){
    const auth = getSitewideAuth();
    if(lastServerAuth && (lastServerAuth.is_developer || lastServerAuth.is_badminton_admin)) return true;
    return !!(auth && auth.authed !== false && getAuthTokens().some(isKnownModeratorToken));
  }

  function getApprovedAdminUsernames(){
    const names = new Set(DEFAULT_APPROVED_ADMIN_USERNAMES.map(normalizeLoginName).filter(Boolean));
    try{
      const extra = window.BASELINE_APPROVED_ADMIN_USERNAMES;
      if(Array.isArray(extra)) extra.forEach(function(name){ const value = normalizeLoginName(name); if(value) names.add(value); });
    }catch(_e){}
    try{
      const fromState = state && Array.isArray(state.approvedAdminUsernames) ? state.approvedAdminUsernames : [];
      fromState.forEach(function(name){ const value = normalizeLoginName(name); if(value) names.add(value); });
    }catch(_e){}
    SITE_MODERATOR_ALIASES.forEach(function(name){ names.add(name); });
    return Array.from(names);
  }

  function playerLoginTokens(player){
    const tokens = [];
    if(!player) return tokens;
    [player.loginUsername, player.loginEmail, player.email, player.username, player.login].forEach(function(value){
      const normalized = normalizeLoginName(value);
      if(normalized) tokens.push(normalized);
      if(SITE_MODERATOR_ALIASES.includes(normalized)) tokens.push(SITE_MODERATOR_CANONICAL_LOGIN.toLowerCase());
    });
    return Array.from(new Set(tokens));
  }

  function isModeratorPlayer(player){
    if(!player) return false;
    if(playerLoginTokens(player).some(isKnownModeratorToken)) return true;
    const name = normalizeLoginName(player.name);
    return name === 'peter bates-wilkinson' || name === 'peter bates wilkinson' || name === 'peterbw';
  }

  function isPlayerAdmin(player){
    return !!(player && (player.badmintonSessionsAdmin || player.isBadmintonAdmin || player.badmintonAdmin || isModeratorPlayer(player)));
  }

  function currentUserMatchesPlayer(player){
    const authTokens = getAuthTokens();
    if(!authTokens.length || !player) return false;
    const tokens = playerLoginTokens(player);
    return tokens.some(function(token){ return authTokens.includes(token) || (isKnownModeratorToken(token) && authTokens.some(isKnownModeratorToken)); });
  }

  function currentUserIsManager(){
    const auth = getSitewideAuth();
    if(!auth || auth.authed === false) return false;
    if(currentUserIsModerator()) return true;
    const authTokens = getAuthTokens();
    if(!authTokens.length) return false;
    return (state.players || []).some(function(player){
      return isPlayerAdmin(player) && currentUserMatchesPlayer(player);
    });
  }

  function currentUserCanEditPlayerPrefs(_player){
    return currentUserIsManager();
  }

  function normalizePlayerPreferenceFlags(){
    (state.players || []).forEach(player => {
      player.doublesDaySinglesOptOut = !!player.doublesDaySinglesOptOut;
      player.doublesDaySoloOptOut = !!player.doublesDaySoloOptOut;
    });
  }

  function playerOptsOutOfDoublesDaySingles(player){
    return !!(player && player.doublesDaySinglesOptOut);
  }

  function playerOptsOutOfDoublesDaySolo(player){
    return !!(player && player.doublesDaySoloOptOut);
  }

  function sideHasDoublesDaySinglesOptOut(side){
    return !!(side && Array.isArray(side.players) && side.players.some(playerOptsOutOfDoublesDaySingles));
  }

  function getSoloPlayerFromTwoVsOneCourt(court){
    if(!court || court.kind !== '2v1') return null;
    const side1Players = court.side1 && Array.isArray(court.side1.players) ? court.side1.players : [];
    const side2Players = court.side2 && Array.isArray(court.side2.players) ? court.side2.players : [];
    if(side1Players.length === 1) return side1Players[0];
    if(side2Players.length === 1) return side2Players[0];
    return null;
  }

  function courtAllowedByDoublesDayOptOuts(court, format){
    if(format !== 'doubles' || !court) return true;
    if(court.kind === 'singles'){
      return !sideHasDoublesDaySinglesOptOut(court.side1) && !sideHasDoublesDaySinglesOptOut(court.side2);
    }
    if(court.kind === '2v1'){
      return !playerOptsOutOfDoublesDaySolo(getSoloPlayerFromTwoVsOneCourt(court));
    }
    return true;
  }

  function makeCourtRespectingOptOuts(kind, group, format){
    if(format !== 'doubles') return makeCourt(kind, group);

    if(kind === 'singles' && group.some(playerOptsOutOfDoublesDaySingles)){
      return null;
    }

    if(kind === '2v1'){
      const sorted = group.slice().sort((a, b) => getPlayerRating(b) - getPlayerRating(a) || a.name.localeCompare(b.name));
      const solo = sorted.find(player => !playerOptsOutOfDoublesDaySolo(player));
      if(!solo) return null;
      const pair = sorted.filter(player => player.id !== solo.id).slice(0, 2);
      if(pair.length !== 2) return null;
      return {
        kind:'2v1',
        side1:{ kind:'pair', players:pair },
        side2:{ kind:'single', players:[solo] }
      };
    }

    return makeCourt(kind, group);
  }

  function applyDoublesDayOptOutsToCourts(courts, format, maxCourts){
    const limit = Math.max(1, Math.min(8, Math.round(Number(maxCourts || 1))));
    return (courts || []).filter(court => courtAllowedByDoublesDayOptOuts(court, format)).slice(0, limit);
  }

  function addLoginOption(map, value, label, email, id){
    const raw = String(value || '').trim();
    if(!raw) return;
    const key = normalizeLoginName(raw);
    if(!key || map[key]) return;
    map[key] = {
      value: raw,
      label: String(label || raw).trim() || raw,
      email: String(email || '').trim(),
      id: id || ''
    };
  }

  function buildLoginOptions(){
    const map = {};
    addLoginOption(map, SITE_MODERATOR_CANONICAL_LOGIN, 'Peter Bates-Wilkinson', 'Bateswilkinson@gmail.com', 'moderator');
    loginOptions.forEach(function(item){
      if(!item) return;
      addLoginOption(map, item.value || item.name || item.email, item.label || item.name || item.email, item.email || '', item.id || item.userId || '');
    });
    (state.players || []).forEach(function(player){
      addLoginOption(map, player.loginUsername, player.loginUsername, player.loginEmail || player.email || '', player.loginUserId || player.userId || '');
    });
    const auth = getSitewideAuth();
    if(auth && auth.authed !== false){
      addLoginOption(map, auth.name || auth.email, auth.name || auth.email, auth.email || '', auth.id || '');
    }
    return Object.values(map).sort(function(a, b){ return a.label.localeCompare(b.label); });
  }

  function loadLoginOptions(){
    if(!LOGIN_OPTIONS_URL || !window.fetch || !currentUserIsManager()) return;
    fetch(LOGIN_OPTIONS_URL, { method:'GET', credentials:'same-origin' })
      .then(function(response){ return response.json().catch(function(){ return null; }); })
      .then(function(data){
        if(!data || !data.ok || !Array.isArray(data.users)) return;
        loginOptions = data.users.map(function(user){
          const name = String(user.name || '').trim();
          const email = String(user.email || '').trim();
          return {
            id: user.id || '',
            value: normalizeKnownLoginName(name || email),
            label: name && email ? (name + ' · ' + email) : (name || email),
            email: email
          };
        });
        renderPlayers();
        bindRosterActions();
      })
      .catch(function(_error){});
  }

  function renderLoginSelect(player){
    const current = normalizeKnownLoginName(isModeratorPlayer(player) ? SITE_MODERATOR_CANONICAL_LOGIN : (player.loginUsername || ''));
    const options = buildLoginOptions();
    const hasCurrent = current && !options.some(function(option){ return normalizeLoginName(option.value) === normalizeLoginName(current); });
    if(hasCurrent){
      options.unshift({ value:current, label:current, email:'', id:'' });
    }
    const optionMarkup = ['<option value="">No linked login</option>'].concat(options.map(function(option){
      const selected = normalizeLoginName(option.value) === normalizeLoginName(current) ? ' selected' : '';
      return '<option value="' + escapeHtml(option.value) + '"' + selected + '>' + escapeHtml(option.label) + '</option>';
    })).join('');
    return '<select class="player-login-input login-select" data-player-login="' + escapeHtml(player.id) + '">' + optionMarkup + '</select>';
  }

  function renderPlayerPreferenceControls(player){
    const canEdit = currentUserCanEditPlayerPrefs(player);
    const disabled = canEdit ? '' : ' disabled';
    const playerName = escapeHtml(player.name || 'player');
    return '<div class="player-pref-stack" aria-label="Doubles-day preferences for ' + playerName + '">' +
      '<label class="player-pref-toggle"><span><span class="player-pref-label">No singles</span><span class="player-pref-hint">Doubles-day fallback only</span></span><input type="checkbox" data-player-pref="singles" data-player-id="' + escapeHtml(player.id) + '"' + (player.doublesDaySinglesOptOut ? ' checked' : '') + disabled + '/></label>' +
      '<label class="player-pref-toggle"><span><span class="player-pref-label">No 2v1 solo</span><span class="player-pref-hint">Do not make this player the 1</span></span><input type="checkbox" data-player-pref="solo" data-player-id="' + escapeHtml(player.id) + '"' + (player.doublesDaySoloOptOut ? ' checked' : '') + disabled + '/></label>' +
    '</div>';
  }

  function normaliseCourtLimit(value, fallback){
    return Math.max(1, Math.min(8, Math.round(safeNumber(value, fallback || 1))));
  }

  function capCurrentCourtsToCourtLimit(){
    const limit = normaliseCourtLimit(state.plan.courtCount, 1);
    state.plan.courtCount = limit;
    if(!Array.isArray(state.plan.current)) state.plan.current = [];
    if(state.plan.current.length > limit){
      state.plan.current = state.plan.current.slice(0, limit).map((court, index) => Object.assign({}, court, { courtNumber:index + 1 }));
      ensureCurrentCourtSaveKeys();
      pruneCurrentSavedCourtKeys();
    }
  }

  function syncPlanSettingsFromInputs(){
    if(refs.planFormatSelect) state.plan.format = refs.planFormatSelect.value;
    if(refs.planDurationSelect) state.plan.durationMinutes = Math.max(60, Math.min(120, Math.round(safeNumber(refs.planDurationSelect.value, 60))));
    if(refs.planCourtCountInput) state.plan.courtCount = normaliseCourtLimit(refs.planCourtCountInput.value, state.plan.courtCount || 4);
    capCurrentCourtsToCourtLimit();
  }

  function getPlayer(playerId){
    return state.players.find(item => item.id === playerId) || null;
  }

  function normalizeAttendingPlayerIds(options){
    const opts = options || {};
    const existingIds = new Set(state.players.map(player => player.id));
    let ids = Array.isArray(state.plan.attendingPlayerIds) ? state.plan.attendingPlayerIds.filter(id => existingIds.has(id)) : [];
    if(opts.allowAttendanceFallback !== false && !ids.length && Number(state.plan.attendance || 0) > 0){
      ids = state.players.slice(0, Math.min(state.players.length, Number(state.plan.attendance || 0))).map(player => player.id);
    }
    state.plan.attendingPlayerIds = Array.from(new Set(ids));
    state.plan.attendance = state.plan.attendingPlayerIds.length;
    if(!state.plan.sitOutCounts || typeof state.plan.sitOutCounts !== 'object') state.plan.sitOutCounts = {};
    state.plan.lastSitOutPlayerIds = Array.isArray(state.plan.lastSitOutPlayerIds) ? state.plan.lastSitOutPlayerIds.filter(id => existingIds.has(id)) : [];
    state.plan.currentSitOutPlayerIds = Array.isArray(state.plan.currentSitOutPlayerIds) ? state.plan.currentSitOutPlayerIds.filter(id => existingIds.has(id)) : [];
    Object.keys(state.plan.sitOutCounts).forEach(id => { if(!existingIds.has(id)) delete state.plan.sitOutCounts[id]; });
    state.players.forEach(player => {
      if(!Object.prototype.hasOwnProperty.call(state.plan.sitOutCounts, player.id)) state.plan.sitOutCounts[player.id] = 0;
    });
  }

  function getAttendingPlayers(){
    normalizeAttendingPlayerIds();
    const selected = new Set(state.plan.attendingPlayerIds);
    return state.players.filter(player => selected.has(player.id));
  }

  function hasValidCourtShape(court){
    return !!(court && court.side1 && court.side2 && Array.isArray(court.side1.players) && Array.isArray(court.side2.players) && court.side1.players.length && court.side2.players.length);
  }

  function resetUnsubmittedCourtScoreDraft(court){
    if(!court || typeof court !== 'object') return court;
    court.score1 = null;
    court.score2 = null;
    court.pendingHardship = '';
    court.noGame = false;
    court.status = '';
    delete court.savedWinnerLabel;
    delete court.savedHardship;
    delete court.savedRatingSummary;
    return court;
  }

  function resetUnsubmittedCurrentCourtScoreDrafts(){
    if(!state || !state.plan || !Array.isArray(state.plan.current)) return;
    ensureCurrentCourtSaveKeys();
    state.plan.current.forEach(function(court, index){
      if(!courtSaved(court, index)) resetUnsubmittedCourtScoreDraft(court);
    });
  }

  function createCourtScoreInputName(court, index, sideNumber){
    const generation = String(state && state.plan && state.plan.currentGenerationToken || 'gen').replace(/[^a-zA-Z0-9_-]+/g, '_');
    const key = String(getCourtSaveKey(court, index) || uid('court-score')).replace(/[^a-zA-Z0-9_-]+/g, '_');
    return 'badminton_score_' + generation + '_' + key + '_side_' + String(sideNumber);
  }

  function enforceCurrentScoreInputsFromState(root){
    if(!root || !state || !state.plan || !Array.isArray(state.plan.current)) return;
    state.plan.current.forEach(function(court, index){
      if(!court || courtMarkedNoGame(court)) return;
      [1, 2].forEach(function(sideNumber){
        const input = root.querySelector('[data-index="' + cssEscape(String(index)) + '"][data-score-side="' + String(sideNumber) + '"]');
        if(!input) return;
        const stored = sideNumber === 1 ? court.score1 : court.score2;
        const expected = stored == null ? '' : String(stored);
        if(input.value !== expected) input.value = expected;
        input.defaultValue = expected;
      });
    });
  }

  function freshCurrentGenerationToken(){
    const token = uid('current-set');
    state.plan.currentGenerationToken = token;
    state.plan.blankCurrentScoreInputs = true;
    return token;
  }

  function clearGeneratedCourtDrafts(){
    if(!state || !state.plan || !Array.isArray(state.plan.current)) return;
    const token = String(state.plan.currentGenerationToken || freshCurrentGenerationToken());
    state.plan.current.forEach(function(court, index){
      if(!court) return;
      resetUnsubmittedCourtScoreDraft(court);
      // A generated court must have a new instance key even when the same two
      // players meet again. This prevents browser/autofill/old DOM score values
      // from attaching themselves to the new game.
      court.currentCourtKey = [token, 'slot', String(index + 1), uid('court')].join('::');
    });
    state.plan.currentSavedSignatures = [];
    state.plan.currentSavedCourtKeys = [];
    state.plan.currentSetReadyForNext = false;
    state.plan.blankCurrentScoreInputs = true;
  }

  function hardBlankCurrentScoreInputs(root){
    if(!root || !state || !state.plan || !Array.isArray(state.plan.current)) return;
    state.plan.current.forEach(function(court, index){
      if(!court || courtSaved(court, index) || courtMarkedNoGame(court)) return;
      court.score1 = null;
      court.score2 = null;
      court.pendingHardship = '';
      [1, 2].forEach(function(sideNumber){
        const selector = '[data-index="' + cssEscape(String(index)) + '"][data-score-side="' + String(sideNumber) + '"]';
        const input = root.querySelector(selector);
        if(!input) return;
        input.value = '';
        input.defaultValue = '';
        input.setAttribute('value', '');
        input.setAttribute('autocomplete', 'off');
      });
      const store = root.querySelector('[data-index="' + cssEscape(String(index)) + '"][data-hardship-store="true"]');
      if(store){
        store.value = '';
        store.defaultValue = '';
        store.setAttribute('value', '');
      }
      root.querySelectorAll('[data-index="' + cssEscape(String(index)) + '"][data-hardship-option="true"]').forEach(function(input){
        input.checked = false;
        input.defaultChecked = false;
      });
      const wrap = root.querySelector('[data-hardship-wrap="' + cssEscape(String(index)) + '"]');
      if(wrap) wrap.outerHTML = renderHardshipControl(court, 'current', index);
    });
  }

  function scheduleHardBlankCurrentScoreInputs(root){
    const target = root || refs.currentGamesGrid;
    hardBlankCurrentScoreInputs(target);
    try{ window.requestAnimationFrame(function(){ hardBlankCurrentScoreInputs(target); }); }catch(_e){}
    [25, 120, 300].forEach(function(ms){
      try{ window.setTimeout(function(){ hardBlankCurrentScoreInputs(target); }, ms); }catch(_e){}
    });
  }

  function normalizeLoadedCurrentCourts(){
    if(!Array.isArray(state.plan.current)){
      state.plan.current = [];
      state.plan.currentSavedSignatures = [];
      state.plan.currentSavedCourtKeys = [];
      return;
    }

    // This function used to wipe every unsaved court draft on every render.
    // That made Court 2 lose typed scores when Court 1 was submitted.
    // Normalisation must preserve live score/hardship drafts; new generated courts
    // are already cleared at generation time.
    const normalized = [];
    state.plan.current.forEach((court, index) => {
      if(!hasValidCourtShape(court)) return;
      const source = Object.assign({}, court, { courtNumber:index + 1 });
      const preserved = {
        currentCourtKey:source.currentCourtKey || '',
        score1:source.score1,
        score2:source.score2,
        pendingHardship:source.pendingHardship || '',
        savedWinnerLabel:source.savedWinnerLabel,
        savedHardship:source.savedHardship,
        savedRatingSummary:source.savedRatingSummary,
        variableBasePlayerIds:Array.isArray(source.variableBasePlayerIds) ? source.variableBasePlayerIds.slice() : [],
        variableSitOutIds:Array.isArray(source.variableSitOutIds) ? source.variableSitOutIds.slice() : [],
        noGame:!!source.noGame,
        status:source.status || ''
      };
      const rebuilt = evaluateCourtRestrictions(source);
      if(rebuilt && rebuilt.signature){
        Object.assign(rebuilt, preserved);
        normalized.push(rebuilt);
      }
    });
    state.plan.current = normalized.slice(0, normaliseCourtLimit(state.plan.courtCount, 4)).map((court, index) => Object.assign({}, court, { courtNumber:index + 1 }));
    ensureCurrentCourtSaveKeys();
    pruneCurrentSavedCourtKeys();
  }

  function refreshCurrentCourtRestrictionsFromMemory(){
    if(!state || !state.plan || !Array.isArray(state.plan.current)) return;
    state.plan.current = state.plan.current.map(function(court, index){
      if(!hasValidCourtShape(court)) return court;
      const saved = courtSaved(court, index);
      const preserved = {
        currentCourtKey:court.currentCourtKey || '',
        score1:court.score1,
        score2:court.score2,
        pendingHardship:court.pendingHardship || '',
        savedWinnerLabel:court.savedWinnerLabel,
        savedHardship:court.savedHardship,
        savedRatingSummary:court.savedRatingSummary,
        variableBasePlayerIds:Array.isArray(court.variableBasePlayerIds) ? court.variableBasePlayerIds.slice() : [],
        variableSitOutIds:Array.isArray(court.variableSitOutIds) ? court.variableSitOutIds.slice() : [],
        noGame:!!court.noGame,
        status:court.status || ''
      };
      const rebuilt = evaluateCourtRestrictions(Object.assign({}, JSON.parse(JSON.stringify(court)), { courtNumber:index + 1, currentCourtKey:court.currentCourtKey || '' }));
      if(saved){
        rebuilt.currentCourtKey = preserved.currentCourtKey;
        rebuilt.score1 = preserved.score1;
        rebuilt.score2 = preserved.score2;
        rebuilt.pendingHardship = preserved.pendingHardship;
        rebuilt.savedWinnerLabel = preserved.savedWinnerLabel;
        rebuilt.savedHardship = preserved.savedHardship;
        rebuilt.savedRatingSummary = preserved.savedRatingSummary;
      }else{
        rebuilt.score1 = preserved.score1;
        rebuilt.score2 = preserved.score2;
        rebuilt.pendingHardship = preserved.pendingHardship;
        if(!preserved.noGame) normalisePendingHardship(rebuilt);
      }
      rebuilt.variableBasePlayerIds = preserved.variableBasePlayerIds || [];
      rebuilt.variableSitOutIds = preserved.variableSitOutIds || [];
      rebuilt.noGame = !!preserved.noGame;
      rebuilt.status = preserved.status || '';
      return rebuilt;
    });
  }

  function renderAttendanceSelector(){
    if(!refs.attendanceSelectorWrap) return;
    normalizeAttendingPlayerIds();
    if(!state.players.length){
      refs.attendanceSelectorWrap.innerHTML = '<div class="empty-state">Add players first, then mark who has attended today.</div>';
    }else{
      const selected = new Set(state.plan.attendingPlayerIds);
      const disabled = currentUserIsManager() ? '' : ' disabled';
      refs.attendanceSelectorWrap.innerHTML = state.players.slice().sort((a, b) => a.name.localeCompare(b.name)).map(player =>
        '<label class="attendance-pill"><input type="checkbox" data-attendance-player="' + escapeHtml(player.id) + '"' + (selected.has(player.id) ? ' checked' : '') + disabled + '/><span>' + escapeHtml(player.name) + '</span></label>'
      ).join('') + (currentUserIsManager() ? '' : '<div class="readonly-note">Attendance editing is limited to the moderator and approved admins.</div>');
    }
    if(refs.attendanceCountLabel){
      const count = state.plan.attendingPlayerIds.length;
      refs.attendanceCountLabel.textContent = count + ' player' + (count === 1 ? '' : 's') + ' attended today';
    }
  }

  function getSitOutNames(ids){
    return (ids || []).map(function(id){
      const player = getPlayer(id);
      return player ? player.name : '';
    }).filter(Boolean);
  }

  function syncCurrentSitOutUnion(){
    const circumstantial = Array.isArray(state.plan.currentCircumstantialSitOutPlayerIds) ? state.plan.currentCircumstantialSitOutPlayerIds : [];
    const optional = Array.isArray(state.plan.currentOptionalSitOutPlayerIds) ? state.plan.currentOptionalSitOutPlayerIds : [];
    state.plan.currentSitOutPlayerIds = Array.from(new Set(circumstantial.concat(optional)));
  }

  function renderCurrentSitOutInfo(){
    if(!refs.currentSitOutWrap) return;
    syncCurrentSitOutUnion();
    const circumstantialNames = getSitOutNames(state.plan.currentCircumstantialSitOutPlayerIds);
    const optionalNames = getSitOutNames(state.plan.currentOptionalSitOutPlayerIds);
    const rows = [];
    if(circumstantialNames.length) rows.push('<strong>Circumstantial sit-out</strong><br/>' + escapeHtml(circumstantialNames.join(' · ')));
    if(optionalNames.length) rows.push('<strong>Optional sit-out</strong><br/>' + escapeHtml(optionalNames.join(' · ')));
    refs.currentSitOutWrap.innerHTML = rows.length ? ('<div class="status-box">' + rows.join('<br/><br/>') + '</div>') : '';
  }

  function getSitOutCount(playerId){
    return Number(state.plan.sitOutCounts && state.plan.sitOutCounts[playerId] || 0);
  }

  function getSessionPlayCount(playerId){
    return Number(state.plan.sessionPlayCounts && state.plan.sessionPlayCounts[playerId] || 0);
  }

  function stableGenerationHash(value){
    const text = String(value || '');
    let hash = 2166136261;
    for(let i = 0; i < text.length; i += 1){
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function orderPlayersForGeneration(players, salt){
    const generation = Math.max(0, Math.round(Number(state.plan.generationIndex || 0)));
    const key = String(generation) + '::' + String(salt || 0);
    return (players || []).slice().sort(function(a, b){
      const playDiff = getSessionPlayCount(a.id) - getSessionPlayCount(b.id);
      if(playDiff) return playDiff;
      const hashDiff = stableGenerationHash(key + '::' + a.id) - stableGenerationHash(key + '::' + b.id);
      if(hashDiff) return hashDiff;
      return String(a.id).localeCompare(String(b.id));
    });
  }

  function chooseSitOutPlayers(attendingPlayers, benchCount){
    if(benchCount <= 0) return [];
    const protectedIds = new Set(Array.isArray(state.plan.lastSitOutPlayerIds) ? state.plan.lastSitOutPlayerIds : []);
    const compare = function(a, b){
      const aCount = getSitOutCount(a.id);
      const bCount = getSitOutCount(b.id);
      if(aCount !== bCount) return aCount - bCount;
      const playDiff = getSessionPlayCount(b.id) - getSessionPlayCount(a.id);
      if(playDiff) return playDiff;
      return String(a.id).localeCompare(String(b.id));
    };
    const fresh = attendingPlayers.filter(player => !protectedIds.has(player.id)).sort(compare);
    const protectedPool = attendingPlayers.filter(player => protectedIds.has(player.id)).sort(compare);
    return fresh.concat(protectedPool).slice(0, benchCount);
  }
  function splitTeamLabel(label){
    return String(label || '').split('/').map(part => part.trim()).filter(Boolean);
  }

  function inferStoredPlayerMatchCount(player, matches){
    const name = String(player && player.name || '').trim().toLowerCase();
    if(!name) return 0;
    return (matches || []).reduce((count, match) => {
      const names = splitTeamLabel(match && match.side1Label).concat(splitTeamLabel(match && match.side2Label)).map(item => item.toLowerCase());
      return count + (names.includes(name) ? 1 : 0);
    }, 0);
  }

  function hasPlayerPlayed(playerId){
    const player = getPlayer(playerId);
    return !!player && Number(player.matchCount || 0) > 0;
  }

  function getFirstTimePlayerNames(court){
    return Array.from(new Set(((court.side1 && court.side1.players) || []).concat((court.side2 && court.side2.players) || [])
      .filter(player => !hasPlayerPlayed(player.id))
      .map(player => player.name)));
  }

  function courtHasFirstTimePlayer(court){
    return getFirstTimePlayerNames(court).length > 0;
  }

  function average(values){
    if(!values.length) return START_RATING;
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  function getPairNamesFromPlayers(players){
    return (players || []).map(function(player){ return String(player && player.name || '').trim(); }).filter(Boolean).sort(function(a,b){ return a.localeCompare(b); });
  }

  function getLegacyPairKeysFromPlayers(players){
    const names = getPairNamesFromPlayers(players);
    if(names.length !== 2) return [];
    return [names.join(' / '), names.join(' + ')];
  }

  function getPairLabelFromId(pairId){
    const ids = String(pairId || '').replace(/^pair:/, '').split('::').filter(Boolean);
    if(ids.length !== 2) return String(pairId || '');
    const names = ids.map(function(id){
      const player = getPlayer(id);
      return player ? player.name : id;
    });
    return names.join(' / ');
  }

  function migrateKnownModeratorPlayer(){
    (state.players || []).forEach(function(player){
      if(!player) return;
      const login = normalizeLoginName(player.loginUsername || player.loginEmail || player.email || '');
      const name = normalizeLoginName(player.name || '');
      if(SITE_MODERATOR_ALIASES.includes(login) || SITE_MODERATOR_ALIASES.includes(name) || name === 'peter bates-wilkinson' || name === 'peter bates wilkinson'){
        player.name = 'Peter Bates-Wilkinson';
        player.loginUsername = SITE_MODERATOR_CANONICAL_LOGIN;
        player.badmintonSessionsAdmin = true;
      }else if(player.loginUsername){
        player.loginUsername = normalizeKnownLoginName(player.loginUsername);
      }
    });
  }

  function sideAverage(side){
    return Math.round(average((side.players || []).map(getPlayerRating)) * 10) / 10;
  }

  // BASELINE-BADMINTON-GAME-PLAN-LADDER-FIX-20260607
  // Current games should read as a clean ladder: strongest court first, then downwards.
  // This keeps the generated plan visually ordered without changing the public tab/URL system.
  function getCourtLadderRating(court){
    const side1 = court && court.side1 ? getSideRatingForCourt(court, court.side1) : START_RATING;
    const side2 = court && court.side2 ? getSideRatingForCourt(court, court.side2) : START_RATING;
    return Math.round(((Number(side1) || START_RATING) + (Number(side2) || START_RATING)) * 5) / 10;
  }

  function getCourtKindPriority(court){
    const kind = String(court && court.kind || '').toLowerCase();
    if(kind === 'doubles') return 3;
    if(kind === '2v1') return 2;
    if(kind === 'singles') return 1;
    return 0;
  }

  function orderCourtsByLadder(courts){
    return (courts || []).slice().sort(function(a, b){
      const ratingDiff = getCourtLadderRating(b) - getCourtLadderRating(a);
      if(Math.abs(ratingDiff) > 0.0001) return ratingDiff;
      const kindDiff = getCourtKindPriority(b) - getCourtKindPriority(a);
      if(kindDiff) return kindDiff;
      const gapDiff = Math.abs(Number(a && a.diff || 0)) - Math.abs(Number(b && b.diff || 0));
      if(Math.abs(gapDiff) > 0.0001) return gapDiff;
      return String(buildMatchupKey(a)).localeCompare(String(buildMatchupKey(b)));
    }).map(function(court, index){
      const copy = Object.assign({}, court);
      copy.courtNumber = index + 1;
      copy.ladderRank = index + 1;
      return copy;
    });
  }

  function getSideRatingLabel(court, side){
    const players = side && Array.isArray(side.players) ? side.players : [];
    if(court && court.kind === 'doubles' && players.length === 2) return 'Pair Rating';
    if(court && court.kind === '2v1' && players.length === 1) return '1v2 Rating';
    if(court && court.kind === '2v1' && players.length === 2) return 'Pair Rating';
    return 'Player Rating';
  }

  function getTeamLabel(side){
    if(!side) return 'Unknown side';
    return (side.players || []).map(player => player.name).join(' / ');
  }

  // BASELINE-BADMINTON-HARDSHIP-NAME-ANCHOR-FIX-20260608
  // Hardship rules must follow the player by stable name first. Ratings are name-based,
  // so hardship storage must not silently fail when ids are missing or volatile.
  function normaliseRuleIdentity(value){
    return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
  }

  function getPlayerStableRuleKey(player){
    return sessionCore.stablePlayerId(player);
  }

  function getTeamIds(side){
    return (side && side.players ? side.players : []).map(getPlayerStableRuleKey).filter(Boolean).slice().sort();
  }

  function getPairSummaryKey(side){
    return getPairIdFromPlayers(side && side.players ? side.players : []);
  }

  function buildMatchupKey(court){
    const a = getTeamIds(court.side1).join('+');
    const b = getTeamIds(court.side2).join('+');
    return [court.kind, a, b].sort().join('::');
  }

  function buildSpecificMatchupKey(strongIds, weakIds){
    const kind = strongIds.length === 1 && weakIds.length === 1 ? 'singles' : (strongIds.length === 2 && weakIds.length === 2 ? 'doubles' : '2v1');
    const a = strongIds.slice().sort().join('+');
    const b = weakIds.slice().sort().join('+');
    return [kind, a, b].sort().join('::');
  }

  function getSideRuleKey(side){
    return getTeamIds(side).join('::');
  }

  function getSideRuleLabelFromKey(key){
    return String(key || '').split('::').filter(Boolean).map(id => {
      const player = getPlayer(id);
      return player ? player.name : id;
    }).join(' / ');
  }

  function getRuleAdminState(){
    state.ruleAdmin = ensureRuleAdminShape(state.ruleAdmin);
    return state.ruleAdmin;
  }

  function getGlobalRule(side){
    const admin = getRuleAdminState();
    const rules = admin.globalRules || {};
    const sideKey = getSideRuleKey(side);
    if(sideKey && rules[sideKey]) return rules[sideKey];
    const ids = getTeamIds(side);
    for(let index = 0; index < ids.length; index += 1){
      const playerRule = rules[ids[index]];
      if(playerRule) return playerRule;
    }
    return null;
  }

  function getMatchupOverride(signature){
    const admin = getRuleAdminState();
    const overrides = admin.matchupOverrides || {};
    return overrides[String(signature || '')] || null;
  }

  function getZoneMode(court){
    const explicitMode = String(court && (court.restrictionMode || court.mode) || '').trim();
    if(explicitMode === 'singles' || explicitMode === 'doubles') return explicitMode;
    return court && court.kind === 'singles' ? 'singles' : 'doubles';
  }

  function getCourtGeometry(){
    const outer = { left:8, right:92, top:17.74, bottom:202.26 };
    const centreX = 50;
    const netY = 110;
    const singles = { left:14.33, right:85.67 };
    const doublesLongTop = 28.21;
    const doublesLongBottom = 191.79;
    const shortServiceTop = 82.74;
    const shortServiceBottom = 137.26;
    return { outer, centreX, netY, singles, doublesLongTop, doublesLongBottom, shortServiceTop, shortServiceBottom };
  }

  function rect(x, y, w, h){ return { x, y, w, h }; }

  function mirrorRect(side, zoneRect){
    if(side === 1) return zoneRect;
    return { x: zoneRect.x, y: 220 - zoneRect.y - zoneRect.h, w: zoneRect.w, h: zoneRect.h };
  }

  function getTopCourtZones(mode){
    const g = getCourtGeometry();
    if(mode === 'singles'){
      return {
        L1: rect(g.singles.left, g.outer.top, g.centreX - g.singles.left, g.doublesLongTop - g.outer.top),
        L2: rect(g.centreX, g.outer.top, g.singles.right - g.centreX, g.doublesLongTop - g.outer.top),
        M1: rect(g.singles.left, g.doublesLongTop, g.centreX - g.singles.left, g.shortServiceTop - g.doublesLongTop),
        M2: rect(g.centreX, g.doublesLongTop, g.singles.right - g.centreX, g.shortServiceTop - g.doublesLongTop),
        S1: rect(g.outer.left, g.doublesLongTop, g.singles.left - g.outer.left, g.shortServiceTop - g.doublesLongTop),
        S2: rect(g.singles.right, g.doublesLongTop, g.outer.right - g.singles.right, g.shortServiceTop - g.doublesLongTop),
        F1: rect(g.singles.left, g.shortServiceTop, g.singles.right - g.singles.left, g.netY - g.shortServiceTop)
      };
    }
    return {
      C1: rect(g.outer.left, g.outer.top, g.singles.left - g.outer.left, g.doublesLongTop - g.outer.top),
      L1: rect(g.singles.left, g.outer.top, g.centreX - g.singles.left, g.doublesLongTop - g.outer.top),
      L2: rect(g.centreX, g.outer.top, g.singles.right - g.centreX, g.doublesLongTop - g.outer.top),
      C2: rect(g.singles.right, g.outer.top, g.outer.right - g.singles.right, g.doublesLongTop - g.outer.top),
      S1: rect(g.outer.left, g.doublesLongTop, g.singles.left - g.outer.left, g.shortServiceTop - g.doublesLongTop),
      M1: rect(g.singles.left, g.doublesLongTop, g.centreX - g.singles.left, g.shortServiceTop - g.doublesLongTop),
      M2: rect(g.centreX, g.doublesLongTop, g.singles.right - g.centreX, g.shortServiceTop - g.doublesLongTop),
      S2: rect(g.singles.right, g.doublesLongTop, g.outer.right - g.singles.right, g.shortServiceTop - g.doublesLongTop),
      FS1: rect(g.outer.left, g.shortServiceTop, g.singles.left - g.outer.left, g.netY - g.shortServiceTop),
      F1: rect(g.singles.left, g.shortServiceTop, g.singles.right - g.singles.left, g.netY - g.shortServiceTop),
      FS2: rect(g.singles.right, g.shortServiceTop, g.outer.right - g.singles.right, g.netY - g.shortServiceTop)
    };
  }

  function getZoneDisplayOrder(mode){
    return mode === 'singles' ? ['L1','L2','M1','M2','S1','S2','F1'] : DOUBLES_ZONES;
  }

  function getAllowedZones(mode){
    return mode === 'singles' ? SINGLES_ZONES : DOUBLES_ZONES;
  }

  function sanitizeZones(zones, mode){
    const allowed = getAllowedZones(mode);
    const seen = new Set();
    (zones || []).forEach(zone => {
      if(allowed.includes(zone)) seen.add(zone);
    });
    return allowed.filter(zone => seen.has(zone));
  }

  function zoneSetKey(zones, mode){
    return sanitizeZones(zones || [], mode).join('|');
  }

  function zonesMatch(a, b, mode){
    return zoneSetKey(a || [], mode) === zoneSetKey(b || [], mode);
  }

  function getPresetOrder(mode){
    // Ordered from least restricted to most restricted.
    // The final movement ceiling is M1/M2; no tighter target area exists.
    return mode === 'singles'
      ? ['full-court','m1l1m2l2','m1m2f1','m1m2','m1l1-or-m2l2','m1f1-or-m2f1','m1s1-or-m2s2','m1-or-m2']
      : ['full-court','f1m1m2l1l2','m1s1m2s2f1fs1fs2','m1m2f1','serve-m-s','m1m2','serve-m'];
  }

  function recommendPresetFromGap(gap, mode){
    if(mode === 'singles'){
      if(gap <= 0) return 'full-court';
      if(gap < 4) return 'm1l1m2l2';
      if(gap < 8) return 'm1m2f1';
      if(gap < 12) return 'm1m2';
      if(gap < 16) return 'm1l1-or-m2l2';
      if(gap < 20) return 'm1f1-or-m2f1';
      if(gap < 24) return 'm1s1-or-m2s2';
      return 'm1-or-m2';
    }
    if(gap >= 18) return 'serve-m';
    if(gap >= 15) return 'm1m2';
    if(gap >= 12) return 'serve-m-s';
    if(gap >= 9) return 'm1m2f1';
    if(gap >= 6) return 'm1s1m2s2f1fs1fs2';
    if(gap >= 3) return 'f1m1m2l1l2';
    return 'full-court';
  }

  function tightenPreset(preset, steps, mode){
    const order = getPresetOrder(mode);
    let index = Math.max(0, order.indexOf(preset || 'full-court'));
    let remaining = Math.max(0, Math.round(Number(steps || 0)));
    while(remaining > 0 && index < order.length - 1){
      index += 1;
      remaining -= 1;
    }
    return order[index] || 'full-court';
  }

  function loosenPreset(preset, steps, mode){
    const order = getPresetOrder(mode);
    let index = Math.max(0, order.indexOf(preset || 'full-court'));
    let remaining = Math.max(0, Math.round(Number(steps || 0)));
    while(remaining > 0 && index > 0){
      index -= 1;
      remaining -= 1;
    }
    return order[index] || 'full-court';
  }

  function getTargetAreaTextFromPreset(preset, mode){
    if(mode === 'singles'){
      if(preset === 'full-court') return 'Full singles court';
      if(preset === 'm1l1m2l2') return 'M1 + M2 + L1 + L2';
      if(preset === 'm1m2f1') return 'M1 + M2 + F1';
      if(preset === 'm1m2') return 'M1 + M2';
      if(preset === 'm1l1-or-m2l2') return 'M1 + L1 or M2 + L2';
      if(preset === 'm1f1-or-m2f1') return 'M1 + F1 or M2 + F1';
      if(preset === 'm1s1-or-m2s2') return 'M1/S1 or M2/S2';
      if(preset === 'm1-or-m2') return 'M1 or M2';
    }else{
      if(preset === 'full-court') return 'Full doubles court';
      if(preset === 'f1m1m2l1l2') return 'F1 + M1 + M2 + L1 + L2';
      if(preset === 'm1s1m2s2f1fs1fs2') return 'M1 + S1 + M2 + S2 + F1 + FS1 + FS2';
      if(preset === 'm1m2f1') return 'M1 + M2 + F1';
      if(preset === 'serve-m-s') return 'M1 + S1 or M2 + S2';
      if(preset === 'm1m2') return 'M1 + M2';
      if(preset === 'serve-m') return 'M1 or M2';
    }
    return '';
  }

  function getTargetAreaTextFromZones(zones, mode){
    const cleaned = sanitizeZones(zones || [], mode);
    if(!cleaned.length || cleaned.length >= getAllowedZones(mode).length) return mode === 'singles' ? 'Full singles court' : 'Full court';
    if(zonesMatch(cleaned, ['M1','M2'], mode)) return mode === 'singles' ? 'M1 or M2' : 'M1 or M2';
    if(zonesMatch(cleaned, ['M1','S1','M2','S2'], mode)) return mode === 'singles' ? 'M1/S1 or M2/S2' : 'M1 + S1 or M2 + S2';
    if(zonesMatch(cleaned, ['M1','M2','F1'], mode)) return 'M1 + M2 + F1';
    if(zonesMatch(cleaned, ['L1','L2','M1','M2'], mode)) return 'M1 + M2 + L1 + L2';
    return cleaned.join(' + ');
  }

  function normaliseShotRestrictions(restrictions, stage){
    const allowed = ['no-smashes', 'no-downward-shots'];
    const cleaned = Array.isArray(restrictions)
      ? restrictions.map(function(value){ return String(value || '').trim(); }).filter(function(value, index, list){
          return allowed.includes(value) && list.indexOf(value) === index;
        })
      : [];
    if(cleaned.length) return cleaned;
    return Number(stage || 0) > 0 ? allowed.slice() : [];
  }

  function getShotRestrictionText(stage, restrictions){
    const active = normaliseShotRestrictions(restrictions, stage);
    if(!active.length) return '';
    if(active.length === 1) return active[0] === 'no-smashes' ? 'No Smashes' : 'No Downward Shots';
    return 'No Smashes or No Downward Shots';
  }

  function getShotRestrictionHtml(stage, restrictions){
    const active = normaliseShotRestrictions(restrictions, stage);
    if(!active.length) return '';
    const labels = active.map(function(value){
      const label = value === 'no-smashes' ? 'No Smashes' : 'No Downward Shots';
      return '<strong>' + escapeHtml(label) + '</strong>';
    });
    return labels.length === 1 ? labels[0] : labels.join(' or ');
  }

  function getLossSeverity(score){
    const n = Number(score);
    if(!Number.isFinite(n)) return 0;
    if(n <= 4) return 3;
    if(n <= 9) return 2;
    if(n <= 15) return 1;
    return 0;
  }

  function getLossSeverityLabel(score){
    const sev = getLossSeverity(score);
    if(sev === 3) return 'Major';
    if(sev === 2) return 'Medium';
    if(sev === 1) return 'Minor';
    return '';
  }

  function getHardshipLabel(value){
    const raw = String(value || '').trim();
    if(!raw) return '—';
    if(raw === 'movement') return 'Reduce Target Area';
    if(raw === 'shots') return 'Remove Shot Options';
    if(raw === 'reducedMovement') return 'Expand Target Area';
    if(raw === 'reducedShots') return 'Restore Shot Options';
    return raw;
  }

  // BASELINE-BADMINTON-HARDSHIP-FINAL-ENFORCEMENT-20260608
  // The visible hardship choice must always become the saved rule. This helper
  // reads both native values and custom-select visible labels so the save path
  // cannot be bypassed by dropdown enhancement.
  function hardshipValueFromVisibleText(text){
    const value = String(text || '').trim().toLowerCase();
    if(!value || value === 'choose adjustment') return '';
    if(value.includes('reduce target area') || value.includes('expand target area')) return 'movement';
    if(value.includes('remove shot options') || value.includes('restore shot options')) return 'shots';
    return '';
  }

  function getDefaultRestrictionMemory(){
    return {
      hardships:[],
      hardshipCounts:{ movement:0, shots:0 },
      singlesMaxLossCount:0,
      expandStrongerCourt:false,
      expandStrongerCourtCount:0,
      shotReliefCount:0,
      singlesPreset:'',
      targetPreset:'',
      shotStage:0
    };
  }

  function getRestrictionMemory(signature){
    const memory = state.matchupMemory[signature];
    return memory && typeof memory === 'object'
      ? memory
      : getDefaultRestrictionMemory();
  }

  function ensureRestrictionMemory(signature){
    if(!signature) return getDefaultRestrictionMemory();
    if(!state.matchupMemory[signature]){
      state.matchupMemory[signature] = getDefaultRestrictionMemory();
    }
    const defaults = getDefaultRestrictionMemory();
    const memory = Object.assign(defaults, state.matchupMemory[signature]);
    if(!memory.hardshipCounts || typeof memory.hardshipCounts !== 'object'){
      memory.hardshipCounts = { movement:0, shots:0, movementAndShots:0 };
    }
    if(!Array.isArray(memory.hardships)) memory.hardships = [];
    if(Number(memory.hardshipCounts.movementAndShots || 0) > 0){
      memory.hardshipCounts.movement = Number(memory.hardshipCounts.movement || 0) + Number(memory.hardshipCounts.movementAndShots || 0);
      memory.hardshipCounts.movementAndShots = 0;
    }
    memory.hardshipCounts.movement = Math.max(0, Math.round(Number(memory.hardshipCounts.movement || 0)));
    memory.hardshipCounts.shots = Math.max(0, Math.round(Number(memory.hardshipCounts.shots || 0)));
    memory.singlesMaxLossCount = 0;
    memory.expandStrongerCourt = false;
    memory.expandStrongerCourtCount = Math.max(0, Math.round(Number(memory.expandStrongerCourtCount || 0)));
    memory.shotReliefCount = Math.max(0, Math.round(Number(memory.shotReliefCount || 0)));
    if(typeof memory.singlesPreset !== 'string') memory.singlesPreset = '';
    if(typeof memory.targetPreset !== 'string' || !memory.targetPreset) memory.targetPreset = memory.singlesPreset || '';
    memory.shotStage = Math.max(0, Math.round(Number(memory.shotStage != null ? memory.shotStage : Math.max(0, Number(memory.hardshipCounts.shots || 0) - Number(memory.shotReliefCount || 0)))));
    state.matchupMemory[signature] = memory;
    return memory;
  }

  function getMemoryMovementSteps(memory){
    const counts = memory && memory.hardshipCounts ? memory.hardshipCounts : {};
    return Math.max(0, Math.round(Number(counts.movement || 0)));
  }

  function getMemoryShotStage(memory){
    return Math.max(0, Math.round(Number(memory && memory.shotStage || 0)));
  }

  function getPresetFromZones(zones, mode){
    const cleaned = sanitizeZones(zones || [], mode);
    if(!cleaned.length || cleaned.length >= getAllowedZones(mode).length) return 'full-court';
    const keys = Object.keys(PRESET_ZONE_MAP);
    for(let index = 0; index < keys.length; index += 1){
      const key = keys[index];
      if(zonesMatch(cleaned, PRESET_ZONE_MAP[key] || [], mode)) return key;
    }
    return '';
  }

  function expandCustomTargetZones(zones, steps, mode){
    let current = sanitizeZones(zones || [], mode);
    const allowed = getAllowedZones(mode);
    let remaining = Math.max(0, Math.round(Number(steps || 0)));
    while(remaining > 0 && current.length && current.length < allowed.length){
      const set = new Set(current);
      const candidate = allowed.find(zone => !set.has(zone));
      if(!candidate) break;
      set.add(candidate);
      current = allowed.filter(zone => set.has(zone));
      remaining -= 1;
    }
    return current.length >= allowed.length ? [] : current;
  }

  function contractCustomTargetZones(zones, steps, mode){
    let current = sanitizeZones(zones || [], mode);
    const allowed = getAllowedZones(mode);
    if(!current.length) current = allowed.slice();
    let remaining = Math.max(0, Math.round(Number(steps || 0)));
    while(remaining > 0 && current.length > 1){
      current = current.slice(0, -1);
      remaining -= 1;
    }
    return current.length >= allowed.length ? [] : current;
  }

  function applyMovementPressureToZones(zones, steps, mode){
    let current = sanitizeZones(zones || [], mode);
    let remaining = Math.max(0, Math.round(Number(steps || 0)));
    while(remaining > 0){
      const preset = getPresetFromZones(current, mode);
      if(preset){
        const nextPreset = tightenPreset(preset, 1, mode);
        if(nextPreset === preset) return current;
        current = sanitizeZones(PRESET_ZONE_MAP[nextPreset] || [], mode);
      }else{
        current = contractCustomTargetZones(current, 1, mode);
      }
      remaining -= 1;
    }
    return current;
  }

  function applyMovementReliefToZones(zones, steps, mode){
    let current = sanitizeZones(zones || [], mode);
    let remaining = Math.max(0, Math.round(Number(steps || 0)));
    while(remaining > 0 && current.length){
      const preset = getPresetFromZones(current, mode);
      if(preset){
        const reducedPreset = loosenPreset(preset, 1, mode);
        if(reducedPreset === preset) return current;
        current = sanitizeZones(PRESET_ZONE_MAP[reducedPreset] || [], mode);
      }else{
        current = expandCustomTargetZones(current, 1, mode);
      }
      remaining -= 1;
    }
    return current;
  }

  function getMovementRestrictionStatus(court){
    const mode = getZoneMode(court);
    let activeZones = sanitizeZones((court && court.appliedZones) || [], mode);
    const presetOrder = getPresetOrder(mode);
    let explicitPreset = String(court && court.targetPreset || '').trim();

    // BASELINE-BADMINTON-HARDSHIP-SUBMISSION-FIX-20260608
    // The explicit preset is dominant. Several presets intentionally share zone masks,
    // so inferring only from zones can make a maxed restriction look reducible/addable again.
    if(!presetOrder.includes(explicitPreset)) explicitPreset = '';
    if(explicitPreset && explicitPreset !== 'full-court'){
      activeZones = sanitizeZones(PRESET_ZONE_MAP[explicitPreset] || [], mode);
    }

    const inferredPreset = getPresetFromZones(activeZones, mode);
    const currentPreset = explicitPreset || inferredPreset;
    if(!activeZones.length && (!currentPreset || currentPreset === 'full-court')){
      const nextPreset = tightenPreset('full-court', 1, mode);
      return {
        currentPreset:'full-court',
        canAdd: nextPreset !== 'full-court',
        canReduce:false,
        reducedPreset:'full-court',
        hasRestriction:false,
        isCustom:false
      };
    }
    if(currentPreset){
      const nextPreset = tightenPreset(currentPreset, 1, mode);
      const reducedPreset = loosenPreset(currentPreset, 1, mode);
      return {
        currentPreset,
        canAdd: nextPreset !== currentPreset,
        canReduce: reducedPreset !== currentPreset,
        reducedPreset,
        hasRestriction: currentPreset !== 'full-court',
        isCustom:false
      };
    }
    return {
      currentPreset:'custom',
      canAdd: activeZones.length > 1,
      canReduce: activeZones.length < getAllowedZones(mode).length,
      reducedPreset:'custom',
      hasRestriction:true,
      isCustom:true
    };
  }

  

  function getSideByNumber(court, sideNumber){
    if(!court) return null;
    return Number(sideNumber) === 1 ? court.side1 : court.side2;
  }

  function idsMatch(a, b){
    const left = (a || []).slice().sort().join('::');
    const right = (b || []).slice().sort().join('::');
    return !!left && left === right;
  }

  function getSideNumberForIds(court, ids){
    if(idsMatch(getTeamIds(court && court.side1), ids)) return 1;
    if(idsMatch(getTeamIds(court && court.side2), ids)) return 2;
    return null;
  }

  function getOppositeSideNumber(sideNumber){
    return Number(sideNumber) === 1 ? 2 : 1;
  }

  function getRestrictionZoneMode(court, restrictedSideNumber){
    if(!court || court.kind === 'singles') return 'singles';
    if(court.kind === 'doubles') return 'doubles';
    if(court.kind === '2v1'){
      const restrictedSide = getSideByNumber(court, restrictedSideNumber);
      const restrictedCount = restrictedSide && Array.isArray(restrictedSide.players) ? restrictedSide.players.length : 2;
      return restrictedCount === 1 ? 'singles' : 'doubles';
    }
    return 'doubles';
  }

  function getRestrictionSideNumberFromMemory(court, memory){
    if(!court || !memory) return null;
    if(Array.isArray(memory.adjustedSideIds) && memory.adjustedSideIds.length){
      const sideNumber = getSideNumberForIds(court, memory.adjustedSideIds);
      if(sideNumber) return sideNumber;
    }
    const legacyActive = !!(memory.targetPreset && memory.targetPreset !== 'full-court') || Number(memory.shotStage || 0) > 0;
    return legacyActive ? court.strongerSide : null;
  }

  // BASELINE-BADMINTON-HARDSHIP-CONTEXT-MEMORY-20260609
  // Hardships are remembered server-side, but only by exact competitive context:
  // game type + restricted side + opponent side.
  // They must not attach broadly to a player or pair outside that context.
  function getSideRestrictionKeyFromIds(ids){
    return sessionCore.getStableSideKey(ids);
  }

  function getSideRestrictionKey(side){
    return getSideRestrictionKeyFromIds(getTeamIds(side));
  }

  function getExactHardshipContextKey(court, sideNumber){
    if(!court || !sideNumber) return '';
    const restrictedSide = getSideByNumber(court, sideNumber);
    const opponentSide = getSideByNumber(court, getOppositeSideNumber(sideNumber));
    return sessionCore.getHardshipContextKey(
      court.kind,
      getTeamIds(restrictedSide),
      getTeamIds(opponentSide)
    );
  }


  // BASELINE-BADMINTON-DOMINANT-HARDSHIP-LEDGER-20260608
  // This is the single live source of truth for score-selected hardships.
  // Matchup memory is still mirrored for history/backwards compatibility, but
  // instructions and SVG restrictions read this ledger first.
  function getActiveHardshipLedger(){
    if(!state || typeof state !== 'object') state = createInitialState();
    if(!state.plan) state.plan = createInitialState().plan;
    if(!state.hardshipRecords || typeof state.hardshipRecords !== 'object'){
      state.hardshipRecords = state.plan.activeHardships && typeof state.plan.activeHardships === 'object'
        ? state.plan.activeHardships
        : {};
    }
    Object.keys(state.hardshipRecords).forEach(function(key){
      if(String(key).indexOf('hardship::') !== 0) delete state.hardshipRecords[key];
    });
    // Legacy mirror only. Persistent hardship ownership is top-level.
    state.plan.activeHardships = state.hardshipRecords;
    return state.hardshipRecords;
  }

  function normaliseHardshipRule(rule, side, sideNumber, court){
    rule = rule && typeof rule === 'object' ? rule : {};
    const ids = Array.isArray(rule.adjustedSideIds) && rule.adjustedSideIds.length ? rule.adjustedSideIds.slice() : getTeamIds(side);
    const mode = rule.mode && ['singles','doubles'].includes(rule.mode) ? rule.mode : (sideNumber ? getRestrictionZoneMode(court || {}, sideNumber) : 'doubles');
    let targetPreset = String(rule.targetPreset || '').trim();
    if(!getPresetOrder(mode).includes(targetPreset)) targetPreset = '';
    const shotStage = Math.min(1, Math.max(0, Math.round(Number(rule.shotStage || 0))));
    return {
      adjustedSideIds: ids.slice().sort(),
      adjustedSideNumber: Number(rule.adjustedSideNumber || sideNumber || 0) || null,
      mode,
      targetPreset: targetPreset || '',
      shotStage,
      shotRestrictions: normaliseShotRestrictions(rule.shotRestrictions, shotStage),
      updatedAt: Number(rule.updatedAt || 0) || Date.now()
    };
  }

  function hardshipRuleIsActive(rule){
    return !!(rule && ((rule.targetPreset && rule.targetPreset !== 'full-court') || Number(rule.shotStage || 0) > 0));
  }

  function getHardshipRuleForSide(court, sideNumber){
    return getDominantHardshipRuleForSide(court, sideNumber);
  }

  function getActiveHardshipRuleEntryForCourt(court){
    if(!court) return null;
    const entries = [1, 2].map(function(sideNumber){ return getHardshipRuleForSide(court, sideNumber); }).filter(Boolean);
    if(!entries.length) return null;
    entries.sort(function(a, b){
      const strongDiff = (b.sideNumber === court.strongerSide ? 1 : 0) - (a.sideNumber === court.strongerSide ? 1 : 0);
      if(strongDiff) return strongDiff;
      const shotDiff = Number(b.rule.shotStage || 0) - Number(a.rule.shotStage || 0);
      if(shotDiff) return shotDiff;
      const moveDiff = getPresetOrder(b.rule.mode).indexOf(b.rule.targetPreset || 'full-court') - getPresetOrder(a.rule.mode).indexOf(a.rule.targetPreset || 'full-court');
      if(moveDiff) return moveDiff;
      return String(b.rule.updatedAt || 0).localeCompare(String(a.rule.updatedAt || 0));
    });
    const entry = entries[0];
    return {
      key: entry.key,
      sideNumber: entry.sideNumber,
      memory: {
        hardships: [],
        hardshipCounts: { movement: entry.rule.targetPreset && entry.rule.targetPreset !== 'full-court' ? Math.max(1, getPresetOrder(entry.rule.mode).indexOf(entry.rule.targetPreset)) : 0, shots: entry.rule.shotStage ? 1 : 0 },
        singlesMaxLossCount: 0,
        expandStrongerCourt: false,
        expandStrongerCourtCount: 0,
        shotReliefCount: 0,
        singlesPreset: entry.rule.mode === 'singles' ? (entry.rule.targetPreset || '') : '',
        targetPreset: entry.rule.targetPreset || '',
        shotStage: entry.rule.shotStage || 0,
        adjustedSideIds: entry.rule.adjustedSideIds.slice(),
        adjustedSideNumber: entry.sideNumber,
        mode: entry.rule.mode
      }
    };
  }

  function writeHardshipRuleForSide(court, sideNumber, patch){
    const current = getDominantHardshipRuleForSide(court, sideNumber);
    const currentRule = current && current.rule ? current.rule : {};
    const nextPreset = patch && Object.prototype.hasOwnProperty.call(patch, 'targetPreset')
      ? patch.targetPreset
      : (currentRule.targetPreset || 'full-court');
    const nextShotStage = patch && Object.prototype.hasOwnProperty.call(patch, 'shotStage')
      ? patch.shotStage
      : Number(currentRule.shotStage || 0);
    return setDominantHardshipRuleForSide(court, sideNumber, nextPreset, nextShotStage);
  }

  function increaseHardshipRuleForSide(court, sideNumber, hardshipType){
    return increaseDominantHardshipForSide(court, sideNumber, hardshipType);
  }

  function reduceHardshipRuleForSide(court, sideNumber, hardshipType){
    return reduceDominantHardshipForSide(court, sideNumber, hardshipType);
  }

  function memoryShapeFromActiveRule(court, sideNumber){
    const active = getHardshipRuleForSide(court, sideNumber);
    if(active && hardshipRuleIsActive(active.rule)){
      return {
        hardships: [],
        hardshipCounts: {
          movement: active.rule.targetPreset && active.rule.targetPreset !== 'full-court' ? Math.max(1, getPresetOrder(active.rule.mode).indexOf(active.rule.targetPreset)) : 0,
          shots: active.rule.shotStage ? 1 : 0
        },
        singlesMaxLossCount: 0,
        expandStrongerCourt: false,
        expandStrongerCourtCount: 0,
        shotReliefCount: 0,
        singlesPreset: active.rule.mode === 'singles' ? (active.rule.targetPreset || '') : '',
        targetPreset: active.rule.targetPreset || '',
        shotStage: active.rule.shotStage || 0,
        adjustedSideIds: active.rule.adjustedSideIds.slice(),
        adjustedSideNumber: sideNumber,
        mode: active.rule.mode
      };
    }
    return Object.assign(getDefaultRestrictionMemory(), {
      adjustedSideIds: getTeamIds(getSideByNumber(court, sideNumber)),
      adjustedSideNumber: sideNumber
    });
  }

  function syncSelectedHardshipRuleToMemory(court, signature, sideNumber){
    if(!court || !sideNumber) return;
    const snapshot = memoryShapeFromActiveRule(court, sideNumber);
    snapshot.memoryScope = 'exact-competitive-context';
    if(signature) copyRestrictionMemoryState(ensureRestrictionMemory(signature), snapshot);
  }

  // BASELINE-BADMINTON-HARDSHIP-SAVE-INTENT-FIX-20260608
    function getHardshipSaveIntent(court, score1, score2, hardship){
    const selected = String(hardship || '').trim();
    const context = getHardshipResultContext(Object.assign({}, JSON.parse(JSON.stringify(court || {})), { score1:score1, score2:score2 }));
    const options = Array.isArray(context.options) ? context.options : [];
    const action = context.action || 'none';
    const triggered = !!(context.valid && action !== 'none');
    const requiresSelection = triggered && options.length > 0;
    const selectedIsAvailable = !!selected && options.some(function(option){ return option.value === selected; });
    return {
      triggered,
      active:!!context.active,
      action,
      sideNumber:context.adjustmentSideNumber || null,
      winnerSideNumber:context.winnerSideNumber || (score1 > score2 ? 1 : 2),
      losingScore:context.losingScore != null ? context.losingScore : Math.min(score1, score2),
      hardship:selected,
      options,
      requiresSelection,
      selectedIsAvailable,
      ratingHold:!!context.ratingHold
    };
  }

    function applyHardshipSaveIntent(court, signature, intent){
    if(!intent || !intent.triggered || !intent.sideNumber) return false;
    if(!intent.requiresSelection) return true;
    const hardship = String(intent.hardship || '').trim();
    if(hardship !== 'movement' && hardship !== 'shots') return false;
    if(intent.options && intent.options.length && !intent.options.some(function(option){ return option.value === hardship; })) return false;

    let rule = null;
    if(intent.action === 'reduce'){
      rule = reduceDominantHardshipForSide(court, intent.sideNumber, hardship);
      syncDominantRuleToMemory(court, signature || buildMatchupKey(court), intent.sideNumber);
      return true;
    }

    rule = increaseDominantHardshipForSide(court, intent.sideNumber, hardship);
    syncDominantRuleToMemory(court, signature || buildMatchupKey(court), intent.sideNumber);
    return !!rule;
  }

  function restrictionMemoryHasActiveRule(memory){
    return !!(memory && (
      (typeof memory.targetPreset === 'string' && memory.targetPreset && memory.targetPreset !== 'full-court') ||
      Number(memory.shotStage || 0) > 0
    ));
  }

  function getActiveSideRestrictionForCourt(court){
    if(!court) return null;
    const candidates = [1, 2].map(function(sideNumber){
      const side = getSideByNumber(court, sideNumber);
      const key = getSideRestrictionKey(side);
      if(!key) return null;
      const memory = getRestrictionMemory(key);
      return restrictionMemoryHasActiveRule(memory) ? { key:key, memory:memory, sideNumber:sideNumber } : null;
    }).filter(Boolean);
    if(!candidates.length) return null;
    candidates.sort(function(a, b){
      const strongDiff = (b.sideNumber === court.strongerSide ? 1 : 0) - (a.sideNumber === court.strongerSide ? 1 : 0);
      if(strongDiff) return strongDiff;
      const shotDiff = Number(b.memory.shotStage || 0) - Number(a.memory.shotStage || 0);
      if(shotDiff) return shotDiff;
      return getMemoryMovementSteps(b.memory) - getMemoryMovementSteps(a.memory);
    });
    return candidates[0];
  }

  // BASELINE-BADMINTON-DOMINANT-HARDSHIP-RULE-20260608
  // One dominant hardship rule: active hardship memory beats passive court generation,
  // duplicated zone inference, and admin/default rule fallbacks.
  function getExactRestrictionEntryForCourt(court, memory, signature){
    if(!court || !restrictionMemoryHasActiveRule(memory)) return null;
    let sideNumber = getRestrictionSideNumberFromMemory(court, memory);
    if(!sideNumber && Array.isArray(memory.adjustedSideIds) && memory.adjustedSideIds.length){
      sideNumber = getSideNumberForIds(court, memory.adjustedSideIds);
    }
    if(!sideNumber && Number(memory.adjustedSideNumber || 0)) sideNumber = Number(memory.adjustedSideNumber);
    if(!sideNumber) sideNumber = court.strongerSide || 1;
    return { key:signature || '', memory:memory, sideNumber:sideNumber, exact:true };
  }

  function getDominantRestrictionEntryForCourt(court, signature, memory){
    const exact = getExactRestrictionEntryForCourt(court, memory, signature);
    return exact || null;
  }

  function syncDominantRestrictionMemoryForCourt(court, signature, dominantEntry){
    if(!court || !signature || !dominantEntry || !dominantEntry.memory || !restrictionMemoryHasActiveRule(dominantEntry.memory)) return dominantEntry ? dominantEntry.memory : null;
    const side = getSideByNumber(court, dominantEntry.sideNumber);
    const ids = getTeamIds(side);
    const sideKey = getSideRestrictionKeyFromIds(ids);
    if(!sideKey) return dominantEntry.memory;
    const sourceSnapshot = cloneRestrictionMemoryState(dominantEntry.memory);
    sourceSnapshot.adjustedSideIds = ids.slice();
    sourceSnapshot.adjustedSideNumber = dominantEntry.sideNumber;

    const exactTarget = ensureRestrictionMemory(signature);
    sourceSnapshot.memoryScope = 'exact-competitive-context';
    copyRestrictionMemoryState(exactTarget, sourceSnapshot);

    return exactTarget;
  }

  function copyRestrictionMemoryState(target, source){
    if(!target || !source) return target;
    target.hardshipCounts = Object.assign({ movement:0, shots:0 }, source.hardshipCounts || {});
    target.hardships = Array.isArray(source.hardships) ? source.hardships.slice(0, 24) : [];
    target.singlesMaxLossCount = Math.max(0, Math.round(Number(source.singlesMaxLossCount || 0)));
    target.expandStrongerCourt = false;
    target.expandStrongerCourtCount = Math.max(0, Math.round(Number(source.expandStrongerCourtCount || 0)));
    target.shotReliefCount = Math.max(0, Math.round(Number(source.shotReliefCount || 0)));
    target.singlesPreset = typeof source.singlesPreset === 'string' ? source.singlesPreset : '';
    target.targetPreset = typeof source.targetPreset === 'string' ? source.targetPreset : '';
    target.shotStage = Math.max(0, Math.round(Number(source.shotStage || 0)));
    target.adjustedSideIds = Array.isArray(source.adjustedSideIds) ? source.adjustedSideIds.slice() : [];
    target.adjustedSideNumber = source.adjustedSideNumber || null;
    target.memoryScope = typeof source.memoryScope === 'string' ? source.memoryScope : '';
    return target;
  }

  function cloneRestrictionMemoryState(source){
    return copyRestrictionMemoryState(getDefaultRestrictionMemory(), source || {});
  }

  function getMovementRestrictionStatusForSide(court, sideNumber){
    const mode = getRestrictionZoneMode(court, sideNumber);
    const useCurrent = Number(court && court.restrictedSide) === Number(sideNumber);
    let targetPreset = useCurrent ? ((court && court.targetPreset) || '') : 'full-court';
    let appliedZones = useCurrent ? ((court && court.appliedZones) || []) : [];
    if(!useCurrent){
      const side = getSideByNumber(court, sideNumber);
      const activeRule = getHardshipRuleForSide(court, sideNumber);
      if(activeRule && hardshipRuleIsActive(activeRule.rule)){
        targetPreset = String(activeRule.rule.targetPreset || 'full-court');
        if(!getPresetOrder(mode).includes(targetPreset)) targetPreset = 'full-court';
        appliedZones = sanitizeZones(PRESET_ZONE_MAP[targetPreset] || [], mode);
      }
    }
    return getMovementRestrictionStatus(Object.assign({}, court || {}, {
      restrictionMode: mode,
      appliedZones: appliedZones,
      targetPreset: targetPreset
    }));
  }

  function getReducedHardshipOptions(court){
    if(!court || court.score1 == null || court.score2 == null || !isOfficialCompleteBadmintonScore(Number(court.score1), Number(court.score2))) return [];
    const options = [];
    const movement = getMovementRestrictionStatus(court);
    if(movement.canReduce) options.push({ value:'movement', label:'Reduce Hardship: Expand Target Area' });
    if(Number(court && court.shotRestrictionStage || 0) > 0) options.push({ value:'shots', label:'Reduce Hardship: Restore Shot Options' });
    return options;
  }

  function applyHardshipToRestrictionMemory(memory, hardshipType, adjustedIds, adjustedSideNumber, resultScore, court, sourceMemory){
    if(!memory || !hardshipType) return;
    const source = sourceMemory || memory;
    const severity = getLossSeverity(resultScore) || 1;
    const mode = adjustedSideNumber ? getRestrictionZoneMode(court, adjustedSideNumber) : getZoneMode(court || { kind:'doubles' });
    memory.adjustedSideIds = (adjustedIds || []).slice();
    memory.adjustedSideNumber = adjustedSideNumber || memory.adjustedSideNumber || null;
    memory.hardshipCounts = Object.assign({ movement:0, shots:0 }, source.hardshipCounts || {});
    if(hardshipType === 'movement'){
      let currentPreset = String(source.targetPreset || (court && Number(court.restrictedSide) === Number(adjustedSideNumber) ? court.targetPreset : '') || 'full-court');
      if(!getPresetOrder(mode).includes(currentPreset)) currentPreset = 'full-court';
      const nextPreset = tightenPreset(currentPreset, 1, mode);
      memory.targetPreset = nextPreset;
      if(mode === 'singles') memory.singlesPreset = memory.targetPreset;
      memory.hardshipCounts.movement = Math.max(0, Math.round(Number(memory.hardshipCounts.movement || 0))) + (nextPreset === currentPreset ? 0 : 1);
      memory.expandStrongerCourtCount = 0;
      memory.expandStrongerCourt = false;
    }else{
      memory.targetPreset = typeof source.targetPreset === 'string' ? source.targetPreset : (memory.targetPreset || '');
      memory.singlesPreset = typeof source.singlesPreset === 'string' ? source.singlesPreset : (memory.singlesPreset || '');
    }
    if(hardshipType === 'shots'){
      memory.shotStage = 1;
      memory.hardshipCounts.shots = 1;
      memory.shotReliefCount = 0;
    }else{
      memory.shotStage = Math.max(0, Math.round(Number(source.shotStage || 0)));
      memory.shotReliefCount = Math.max(0, Math.round(Number(source.shotReliefCount || 0)));
    }

    const history = Array.isArray(source.hardships) ? source.hardships.slice() : [];
    memory.hardships = [{
      type: hardshipType,
      adjustedSideIds: (adjustedIds || []).slice(),
      adjustedSideNumber: adjustedSideNumber,
      resultScore,
      severity,
      severityLabel: getLossSeverityLabel(resultScore),
      createdAt: new Date().toISOString()
    }].concat(history).slice(0, 24);
  }

  function registerHardship(signature, hardshipType, adjustedSideIds, resultScore, court){
    if(!hardshipType) return;
    const memory = ensureRestrictionMemory(signature);
    const adjustedIds = (adjustedSideIds || []).slice();
    const adjustedSideNumber = court ? getSideNumberForIds(court, adjustedIds) : null;
    const activeRule = adjustedSideNumber ? increaseHardshipRuleForSide(court, adjustedSideNumber, hardshipType) : null;
    const sourceSnapshot = activeRule ? Object.assign(cloneRestrictionMemoryState(memory), {
      targetPreset: activeRule.targetPreset || '',
      singlesPreset: activeRule.mode === 'singles' ? (activeRule.targetPreset || '') : '',
      shotStage: activeRule.shotStage || 0,
      adjustedSideIds: activeRule.adjustedSideIds.slice(),
      adjustedSideNumber: adjustedSideNumber,
      memoryScope:'exact-competitive-context'
    }) : cloneRestrictionMemoryState(memory);

    sourceSnapshot.memoryScope = 'exact-competitive-context';
    applyHardshipToRestrictionMemory(memory, hardshipType, adjustedIds, adjustedSideNumber, resultScore, court, sourceSnapshot);
    memory.memoryScope = 'exact-competitive-context';
  }

  function applyRestrictionReductionToMemory(memory, court, adjustedSideNumber, reducedType, sourceMemory){
    if(!memory) return;
    const source = sourceMemory || memory;
    const movement = adjustedSideNumber ? getMovementRestrictionStatusForSide(court, adjustedSideNumber) : getMovementRestrictionStatus(court);
    const movementActive = !!(movement && movement.hasRestriction);
    const shotsActive = Number(source.shotStage || court && court.shotRestrictionStage || 0) > 0;
    let type = reducedType;
    if(type !== 'movement' && type !== 'shots'){
      if(movementActive && movement.canReduce) type = 'movement';
      else if(shotsActive) type = 'shots';
      else type = '';
    }
    memory.hardshipCounts = Object.assign({ movement:0, shots:0 }, source.hardshipCounts || {});
    memory.hardships = Array.isArray(source.hardships) ? source.hardships.slice(0, 24) : [];
    memory.adjustedSideIds = Array.isArray(source.adjustedSideIds) ? source.adjustedSideIds.slice() : [];
    memory.adjustedSideNumber = source.adjustedSideNumber || adjustedSideNumber || null;

    if(type === 'movement' && movement.canReduce){
      const mode = adjustedSideNumber ? getRestrictionZoneMode(court, adjustedSideNumber) : getZoneMode(court);
      let currentPreset = String(source.targetPreset || (court && court.targetPreset) || movement.currentPreset || getPresetFromZones((court && court.appliedZones) || [], mode) || 'full-court');
      if(!getPresetOrder(mode).includes(currentPreset)) currentPreset = 'full-court';
      memory.targetPreset = loosenPreset(currentPreset, 1, mode);
      if(mode === 'singles') memory.singlesPreset = memory.targetPreset;
      memory.hardshipCounts.movement = Math.max(0, Math.round(Number(memory.hardshipCounts.movement || 0)) - 1);
      memory.expandStrongerCourtCount = 0;
      memory.expandStrongerCourt = false;
    }else{
      memory.targetPreset = typeof source.targetPreset === 'string' ? source.targetPreset : (memory.targetPreset || '');
      memory.singlesPreset = typeof source.singlesPreset === 'string' ? source.singlesPreset : (memory.singlesPreset || '');
    }

    if(type === 'shots' && shotsActive){
      memory.shotStage = Math.max(0, Math.round(Number(source.shotStage || 0)) - 1);
      memory.hardshipCounts.shots = Math.max(0, Math.round(Number(memory.hardshipCounts.shots || 0)) - 1);
      memory.shotReliefCount = Math.max(0, Math.round(Number(source.shotReliefCount || 0))) + 1;
    }else{
      memory.shotStage = Math.max(0, Math.round(Number(source.shotStage || 0)));
      memory.shotReliefCount = Math.max(0, Math.round(Number(source.shotReliefCount || 0)));
    }

    if(Math.max(0, Math.round(Number(memory.shotStage || 0))) <= 0 && (!memory.targetPreset || memory.targetPreset === 'full-court')){
      memory.adjustedSideIds = [];
      memory.adjustedSideNumber = null;
    }
  }

  function reduceRestrictionAfterBoundaryWin(signature, court, reducedType){
    const memory = ensureRestrictionMemory(signature);
    const adjustedSideNumber = getRestrictionSideNumberFromMemory(court, memory) || Number(court && court.restrictedSide || 0) || null;
    const reducedRule = adjustedSideNumber ? reduceHardshipRuleForSide(court, adjustedSideNumber, reducedType) : null;
    const sourceSnapshot = reducedRule ? Object.assign(cloneRestrictionMemoryState(memory), {
      targetPreset: reducedRule.targetPreset || '',
      singlesPreset: reducedRule.mode === 'singles' ? (reducedRule.targetPreset || '') : '',
      shotStage: reducedRule.shotStage || 0,
      adjustedSideIds: reducedRule.adjustedSideIds.slice(),
      adjustedSideNumber: adjustedSideNumber,
      memoryScope:'exact-competitive-context'
    }) : memory;

    applyRestrictionReductionToMemory(memory, court, adjustedSideNumber, reducedType, sourceSnapshot);
    memory.memoryScope = 'exact-competitive-context';
  }

  function evaluateCourtRestrictionsBase(court){
    ensureRatingStores();
    const side1Rating = getSideRatingForCourt(court, court.side1);
    const side2Rating = getSideRatingForCourt(court, court.side2);
    const diff = Math.round(Math.abs(side1Rating - side2Rating) * 10) / 10;
    const strongerSide = diff < 0.1 ? null : (side1Rating > side2Rating ? 1 : 2);
    const weakerSide = strongerSide ? (strongerSide === 1 ? 2 : 1) : null;
    const signature = buildMatchupKey(court);
    const memory = ensureRestrictionMemory(signature);
    const activeHardshipEntry = getActiveHardshipRuleEntryForCourt(court);
    const dominantEntry = activeHardshipEntry || getDominantRestrictionEntryForCourt(court, signature, memory);
    const effectiveMemory = dominantEntry ? syncDominantRestrictionMemoryForCourt(court, signature, dominantEntry) : memory;
    const memoryHasMovement = !!(effectiveMemory && effectiveMemory.targetPreset && effectiveMemory.targetPreset !== 'full-court');
    const memoryHasShots = Number(effectiveMemory && effectiveMemory.shotStage || 0) > 0;
    const activeHardshipMemory = memoryHasMovement || memoryHasShots || !!(dominantEntry && restrictionMemoryHasActiveRule(dominantEntry.memory));
    const discoveryGame = courtHasFirstTimePlayer(court) && !activeHardshipMemory;
    const firstTimePlayerNames = discoveryGame ? getFirstTimePlayerNames(court) : [];
    let restrictedSide = (dominantEntry && dominantEntry.sideNumber) || getRestrictionSideNumberFromMemory(court, effectiveMemory) || (memoryHasMovement || memoryHasShots ? strongerSide : null);
    let mode = restrictedSide ? getRestrictionZoneMode(court, restrictedSide) : (court.kind === 'singles' ? 'singles' : 'doubles');
    let appliedZones = [];
    let targetPreset = 'full-court';
    let shotRestrictionStage = 0;

    if(!discoveryGame){
      if(restrictedSide && (memoryHasMovement || memoryHasShots)){
        mode = getRestrictionZoneMode(court, restrictedSide);
        targetPreset = String(effectiveMemory.targetPreset || 'full-court');
        if(!getPresetOrder(mode).includes(targetPreset)) targetPreset = 'full-court';
        appliedZones = sanitizeZones(PRESET_ZONE_MAP[targetPreset] || [], mode);
        shotRestrictionStage = Math.min(1, Math.max(0, Math.round(Number(effectiveMemory.shotStage || 0))));
      }else{
        const side1Rule = getGlobalRule(court.side1);
        const side2Rule = getGlobalRule(court.side2);
        const globalRule = side1Rule || side2Rule;
        const matchupRule = getMatchupOverride(signature);
        const activeRule = matchupRule && ((Array.isArray(matchupRule.targetZones) && matchupRule.targetZones.length) || Number(matchupRule.shotRestrictionStage || 0) > 0)
          ? matchupRule
          : (globalRule && ((Array.isArray(globalRule.targetZones) && globalRule.targetZones.length) || Number(globalRule.shotRestrictionStage || 0) > 0) ? globalRule : null);
        if(activeRule){
          restrictedSide = restrictedSide || strongerSide;
          mode = restrictedSide ? getRestrictionZoneMode(court, restrictedSide) : mode;
          appliedZones = sanitizeZones(activeRule.targetZones || [], mode);
          targetPreset = getPresetFromZones(appliedZones, mode) || (appliedZones.length ? 'custom' : 'full-court');
          shotRestrictionStage = Math.min(1, Math.max(0, Math.round(Number(activeRule.shotRestrictionStage || 0))));
        }
      }
    }

    const targetSide = restrictedSide ? getOppositeSideNumber(restrictedSide) : null;
    return Object.assign({}, court, {
      signature,
      side1Rating,
      side2Rating,
      diff,
      strongerSide,
      weakerSide,
      restrictedSide,
      restrictionTargetSide: targetSide,
      adjustedSideIds: restrictedSide ? getTeamIds(getSideByNumber(court, restrictedSide)) : [],
      expandedStrongerCourt:false,
      mode,
      restrictionMode: mode,
      discoveryGame,
      firstTimePlayerNames,
      appliedZones,
      shotRestrictionStage,
      boundaryActive: !!restrictedSide && !discoveryGame && appliedZones.length > 0,
      alteredRulesActive: !!restrictedSide && !discoveryGame && (appliedZones.length > 0 || shotRestrictionStage > 0),
      targetPreset,
      targetAreaText: discoveryGame ? (mode === 'singles' ? 'Full singles court' : 'Full court') : (getTargetAreaTextFromPreset(targetPreset, mode) || getTargetAreaTextFromZones(appliedZones, mode))
    });
  }


  // BASELINE-BADMINTON-DOMINANT-HARDSHIP-REBUILD-20260609
  // Single dominant hardship path. Score-selected hardship must become a rule
  // before ratings are allowed to change.
  function getDominantHardshipLedger(){
    return getActiveHardshipLedger();
  }

  function getDominantHardshipKeyForSide(court, sideNumber, side){
    return getExactHardshipContextKey(court, sideNumber);
  }

  function getDominantHardshipRuleForSide(court, sideNumber){
    const side = getSideByNumber(court, sideNumber);
    const key = getDominantHardshipKeyForSide(court, sideNumber, side);
    if(!key) return null;
    const ledger = getDominantHardshipLedger();
    const raw = ledger[key];
    if(!raw || typeof raw !== 'object') return null;
    const mode = getRestrictionZoneMode(court, sideNumber);
    const order = getPresetOrder(mode);
    let targetPreset = String(raw.targetPreset || '').trim();
    if(!order.includes(targetPreset)) targetPreset = 'full-court';
    const shotRestrictions = normaliseShotRestrictions(raw.shotRestrictions, raw.shotStage);
    const shotStage = shotRestrictions.length ? 1 : 0;
    const movementStep = Math.max(0, order.indexOf(targetPreset));
    if(movementStep <= 0 && shotStage <= 0) return null;
    const rule = {
      targetPreset: movementStep > 0 ? targetPreset : 'full-court',
      shotStage,
      shotRestrictions,
      mode,
      adjustedSideIds: getTeamIds(side),
      adjustedSideNumber: Number(sideNumber),
      memoryScope:'exact-competitive-context',
      updatedAt: Number(raw.updatedAt || 0) || Date.now()
    };
    ledger[key] = rule;
    return { key, sideNumber:Number(sideNumber), side, rule };
  }

  function getDominantHardshipEntryForCourt(court){
    if(!court) return null;
    const entries = [1, 2].map(function(sideNumber){
      return getDominantHardshipRuleForSide(court, sideNumber);
    }).filter(Boolean);
    if(!entries.length) return null;
    entries.sort(function(a, b){
      const strongDiff = (b.sideNumber === court.strongerSide ? 1 : 0) - (a.sideNumber === court.strongerSide ? 1 : 0);
      if(strongDiff) return strongDiff;
      const shotDiff = Number(b.rule.shotStage || 0) - Number(a.rule.shotStage || 0);
      if(shotDiff) return shotDiff;
      const moveDiff = getPresetOrder(b.rule.mode).indexOf(b.rule.targetPreset || 'full-court') - getPresetOrder(a.rule.mode).indexOf(a.rule.targetPreset || 'full-court');
      if(moveDiff) return moveDiff;
      return Number(b.rule.updatedAt || 0) - Number(a.rule.updatedAt || 0);
    });
    return entries[0];
  }

  function setDominantHardshipRuleForSide(court, sideNumber, targetPreset, shotStage, shotRestrictions){
    const side = getSideByNumber(court, sideNumber);
    const key = getDominantHardshipKeyForSide(court, sideNumber, side);
    if(!key) return null;
    const mode = getRestrictionZoneMode(court, sideNumber);
    const order = getPresetOrder(mode);
    let preset = String(targetPreset || 'full-court').trim();
    if(!order.includes(preset)) preset = 'full-court';
    const activeShotRestrictions = normaliseShotRestrictions(shotRestrictions, shotStage);
    const shots = activeShotRestrictions.length ? 1 : 0;
    const movementStep = Math.max(0, order.indexOf(preset));
    const ledger = getDominantHardshipLedger();
    if(movementStep <= 0 && shots <= 0){
      // Keep a timestamped inactive record so a refresh cannot resurrect an
      // older server-side hardship after the local rule was deliberately cleared.
      ledger[key] = {
        adjustedSideIds: getTeamIds(side),
        adjustedSideNumber: Number(sideNumber),
        mode,
        targetPreset:'full-court',
        shotStage:0,
        shotRestrictions:[],
        memoryScope:'exact-competitive-context',
        cleared:true,
        updatedAt:Date.now()
      };
      return null;
    }
    const rule = {
      adjustedSideIds: getTeamIds(side),
      adjustedSideNumber: Number(sideNumber),
      mode,
      targetPreset: movementStep > 0 ? preset : 'full-court',
      shotStage: shots,
      shotRestrictions: activeShotRestrictions,
      memoryScope:'exact-competitive-context',
      updatedAt: Date.now()
    };
    ledger[key] = rule;
    return rule;
  }

  function increaseDominantHardshipForSide(court, sideNumber, hardshipType){
    const mode = getRestrictionZoneMode(court, sideNumber);
    const current = getDominantHardshipRuleForSide(court, sideNumber);
    const currentPreset = current && current.rule && current.rule.targetPreset ? current.rule.targetPreset : 'full-court';
    const currentShots = current && current.rule ? Number(current.rule.shotStage || 0) : 0;
    let nextPreset = currentPreset;
    let nextShots = currentShots;
    if(hardshipType === 'movement') nextPreset = tightenPreset(currentPreset, 1, mode);
    if(hardshipType === 'shots') nextShots = 1;
    return setDominantHardshipRuleForSide(
      court,
      sideNumber,
      nextPreset,
      nextShots,
      hardshipType === 'shots'
        ? ['no-smashes', 'no-downward-shots']
        : (current && current.rule ? current.rule.shotRestrictions : [])
    );
  }

  function reduceDominantHardshipForSide(court, sideNumber, hardshipType){
    const mode = getRestrictionZoneMode(court, sideNumber);
    const current = getDominantHardshipRuleForSide(court, sideNumber);
    const currentPreset = current && current.rule && current.rule.targetPreset ? current.rule.targetPreset : 'full-court';
    const currentShots = current && current.rule ? Number(current.rule.shotStage || 0) : 0;
    let nextPreset = currentPreset;
    let nextShots = currentShots;
    if(hardshipType === 'movement') nextPreset = loosenPreset(currentPreset, 1, mode);
    if(hardshipType === 'shots') nextShots = 0;
    return setDominantHardshipRuleForSide(
      court,
      sideNumber,
      nextPreset,
      nextShots,
      hardshipType === 'shots' ? [] : (current && current.rule ? current.rule.shotRestrictions : [])
    );
  }

  function getDominantMovementStepForSide(court, sideNumber){
    const current = getDominantHardshipRuleForSide(court, sideNumber);
    if(!current || !current.rule) return 0;
    return Math.max(0, getPresetOrder(current.rule.mode).indexOf(current.rule.targetPreset || 'full-court'));
  }

  function getDominantShotStageForSide(court, sideNumber){
    const current = getDominantHardshipRuleForSide(court, sideNumber);
    return current && current.rule ? Math.min(1, Math.max(0, Math.round(Number(current.rule.shotStage || 0)))) : 0;
  }

  function getDominantIncreaseOptionsForSide(court, sideNumber){
    const options = [];
    if(!sideNumber) return options;
    const mode = getRestrictionZoneMode(court, sideNumber);
    const movementStep = getDominantMovementStepForSide(court, sideNumber);
    if(movementStep < getPresetOrder(mode).length - 1) options.push({ value:'movement', label:'Reduce Target Area' });
    if(getDominantShotStageForSide(court, sideNumber) < 1) options.push({ value:'shots', label:'Remove Shot Options' });
    return options;
  }

  function getDominantReduceOptionsForSide(court, sideNumber){
    const options = [];
    if(!sideNumber) return options;
    if(getDominantMovementStepForSide(court, sideNumber) > 0) options.push({ value:'movement', label:'Expand Target Area' });
    if(getDominantShotStageForSide(court, sideNumber) > 0) options.push({ value:'shots', label:'Restore Shot Options' });
    return options;
  }

  function applyDominantRuleToCourt(court, entry){
    if(!court || !entry || !entry.rule) return court;
    const mode = entry.rule.mode || getRestrictionZoneMode(court, entry.sideNumber);
    const preset = entry.rule.targetPreset && entry.rule.targetPreset !== 'full-court' ? entry.rule.targetPreset : 'full-court';
    const shotRestrictions = normaliseShotRestrictions(entry.rule.shotRestrictions, entry.rule.shotStage);
    const shotStage = shotRestrictions.length ? 1 : 0;
    const appliedZones = preset !== 'full-court' ? sanitizeZones(PRESET_ZONE_MAP[preset] || [], mode) : [];
    court.restrictedSide = Number(entry.sideNumber);
    court.restrictionTargetSide = getOppositeSideNumber(entry.sideNumber);
    court.restrictionMode = mode;
    court.mode = mode;
    court.targetPreset = preset;
    court.appliedZones = appliedZones;
    court.targetAreaText = getTargetAreaTextFromPreset(preset, mode) || getTargetAreaTextFromZones(appliedZones, mode);
    court.shotRestrictionStage = shotStage;
    court.shotRestrictions = shotRestrictions;
    court.boundaryActive = appliedZones.length > 0;
    court.alteredRulesActive = court.boundaryActive || shotStage > 0;
    court.discoveryGame = false;
    return court;
  }

  function syncDominantRuleToMemory(court, signature, sideNumber){
    const entry = getDominantHardshipRuleForSide(court, sideNumber);
    const side = getSideByNumber(court, sideNumber);
    const memory = Object.assign(getDefaultRestrictionMemory(), {
      hardshipCounts: {
        movement: entry && entry.rule && entry.rule.targetPreset !== 'full-court' ? Math.max(1, getPresetOrder(entry.rule.mode).indexOf(entry.rule.targetPreset)) : 0,
        shots: entry && entry.rule && entry.rule.shotStage ? 1 : 0
      },
      singlesPreset: entry && entry.rule && entry.rule.mode === 'singles' ? (entry.rule.targetPreset || '') : '',
      targetPreset: entry && entry.rule ? (entry.rule.targetPreset || '') : '',
      shotStage: entry && entry.rule ? Math.min(1, Math.max(0, Math.round(Number(entry.rule.shotStage || 0)))) : 0,
      adjustedSideIds: getTeamIds(side),
      adjustedSideNumber: Number(sideNumber),
      mode: entry && entry.rule ? entry.rule.mode : getRestrictionZoneMode(court, sideNumber),
      memoryScope:'exact-competitive-context'
    });
    if(signature) copyRestrictionMemoryState(ensureRestrictionMemory(signature), memory);
  }

  function evaluateCourtRestrictions(court){
    const evaluated = evaluateCourtRestrictionsBase(court);
    const entry = getDominantHardshipEntryForCourt(evaluated);
    return entry ? applyDominantRuleToCourt(evaluated, entry) : evaluated;
  }


  function setPlanAlert(message){
    refs.planAlert.innerHTML = message ? ('<div class="status-box"><strong>' + escapeHtml(message) + '</strong></div>') : '';
  }

  function formatDateTime(iso){
    const d = new Date(iso);
    if(Number.isNaN(d.getTime())) return String(iso || '');
    return d.toLocaleString(undefined, { year:'numeric', month:'short', day:'2-digit', hour:'2-digit', minute:'2-digit' });
  }

  function getAttendingPlayersForCount(count){
    const attending = getAttendingPlayers();
    if(attending.length) return attending.slice(0, Math.min(Math.max(0, count), attending.length));
    const available = state.players.slice().sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    return available.slice(0, Math.min(Math.max(0, count), available.length));
  }

  function chooseDoublesSides(group){
    const pairings = [
      [[group[0], group[1]], [group[2], group[3]]],
      [[group[0], group[2]], [group[1], group[3]]],
      [[group[0], group[3]], [group[1], group[2]]]
    ];
    pairings.sort((a, b) => {
      const diffA = Math.abs(average(a[0].map(getPlayerRating)) - average(a[1].map(getPlayerRating)));
      const diffB = Math.abs(average(b[0].map(getPlayerRating)) - average(b[1].map(getPlayerRating)));
      return diffA - diffB;
    });
    return pairings[0];
  }

  function makeCourt(kind, players){
    if(kind === 'singles'){
      return { kind:'singles', side1:{ kind:'singles', players:[players[0]] }, side2:{ kind:'singles', players:[players[1]] } };
    }
    if(kind === 'doubles'){
      const pairing = chooseDoublesSides(players);
      return { kind:'doubles', side1:{ kind:'doubles', players:pairing[0] }, side2:{ kind:'doubles', players:pairing[1] } };
    }
    const sorted = players.slice().sort((a, b) => getPlayerRating(b) - getPlayerRating(a) || a.name.localeCompare(b.name));
    return {
      kind:'2v1',
      side1:{ kind:'pair', players:[sorted[1], sorted[2]] },
      side2:{ kind:'single', players:[sorted[0]] }
    };
  }


  function buildSpecialFourPlayerSequence(attendingPlayers, sequenceIndex){
    const players = attendingPlayers.slice(0, 4);
    const doublesBatches = [
      [{ kind:'doubles', side1:{ kind:'doubles', players:[players[0], players[1]] }, side2:{ kind:'doubles', players:[players[2], players[3]] } }],
      [{ kind:'doubles', side1:{ kind:'doubles', players:[players[0], players[2]] }, side2:{ kind:'doubles', players:[players[1], players[3]] } }],
      [{ kind:'doubles', side1:{ kind:'doubles', players:[players[0], players[3]] }, side2:{ kind:'doubles', players:[players[1], players[2]] } }],
      [{ kind:'doubles', side1:{ kind:'doubles', players:[players[2], players[3]] }, side2:{ kind:'doubles', players:[players[0], players[1]] } }]
    ];
    const singlesBatches = [
      [
        { kind:'singles', side1:{ kind:'singles', players:[players[0]] }, side2:{ kind:'singles', players:[players[1]] } },
        { kind:'singles', side1:{ kind:'singles', players:[players[2]] }, side2:{ kind:'singles', players:[players[3]] } }
      ],
      [
        { kind:'singles', side1:{ kind:'singles', players:[players[0]] }, side2:{ kind:'singles', players:[players[2]] } },
        { kind:'singles', side1:{ kind:'singles', players:[players[1]] }, side2:{ kind:'singles', players:[players[3]] } }
      ],
      [
        { kind:'singles', side1:{ kind:'singles', players:[players[0]] }, side2:{ kind:'singles', players:[players[3]] } },
        { kind:'singles', side1:{ kind:'singles', players:[players[1]] }, side2:{ kind:'singles', players:[players[2]] } }
      ]
    ];
    const batches = doublesBatches.concat(singlesBatches);
    return batches[((sequenceIndex % batches.length) + batches.length) % batches.length].map(court => JSON.parse(JSON.stringify(court)));
  }

  function advanceSpecialFourPlayerIndex(attendingPlayers, format){
    if(format === 'doubles' && attendingPlayers.length === 4){
      state.plan.specialFourPlayerIndex = ((state.plan.specialFourPlayerIndex || 0) + 1) % 4;
      return;
    }
    state.plan.specialFourPlayerIndex = 0;
  }

  function isSpecialFourPlayerLadder(attendingPlayers, format){
    return format === 'doubles' && Array.isArray(attendingPlayers) && attendingPlayers.length === 4;
  }

  function prepareSpecialFourPlayerIndexForManualGenerate(attendingPlayers, format){
    if(isSpecialFourPlayerLadder(attendingPlayers, format)){
      if(Array.isArray(state.plan.current) && state.plan.current.length){
        advanceSpecialFourPlayerIndex(attendingPlayers, format);
      }else{
        state.plan.specialFourPlayerIndex = ((Math.round(Number(state.plan.specialFourPlayerIndex || 0)) || 0) % 4 + 4) % 4;
      }
      return;
    }
    state.plan.specialFourPlayerIndex = 0;
  }

  function applyTwoPlayerSideRotation(courts, attendingPlayers){
    if(attendingPlayers.length !== 2 || courts.length !== 1) return courts;
    const court = courts[0];
    if(!court || court.kind !== 'singles' || !court.side1 || !court.side2) return courts;
    const rotationIndex = Math.max(0, Math.round(Number(state.plan.twoPlayerFlipIndex || 0) || 0));
    if(rotationIndex % 2 === 0) return courts;
    return courts.map(function(item){
      const clone = JSON.parse(JSON.stringify(item));
      const tmpSide = clone.side1;
      clone.side1 = clone.side2;
      clone.side2 = tmpSide;
      const tmpRating = clone.side1Rating;
      clone.side1Rating = clone.side2Rating;
      clone.side2Rating = tmpRating;
      if(clone.strongerSide === 1) clone.strongerSide = 2;
      else if(clone.strongerSide === 2) clone.strongerSide = 1;
      if(clone.weakerSide === 1) clone.weakerSide = 2;
      else if(clone.weakerSide === 2) clone.weakerSide = 1;
      return clone;
    });
  }

  function enumerateLayouts(playerCount, format, maxCourts){
    const layouts = [];
    const courtLimit = Math.max(1, Number(maxCourts || 1));
    for(let doubles = 0; doubles <= courtLimit; doubles += 1){
      for(let singles = 0; singles <= courtLimit; singles += 1){
        for(let twoVsOne = 0; twoVsOne <= courtLimit; twoVsOne += 1){
          const courts = doubles + singles + twoVsOne;
          const used = doubles * 4 + singles * 2 + twoVsOne * 3;
          if(!courts || courts > courtLimit) continue;
          if(used > playerCount) continue;
          const bench = playerCount - used;
          layouts.push({ doubles, singles, twoVsOne, courts, used, bench });
        }
      }
    }
    layouts.sort((a, b) => {
      // Never bench people just to satisfy a format preference when courts can
      // use them. Format priority is applied after minimum sit-outs.
      const benchDiff = a.bench - b.bench;
      if(benchDiff) return benchDiff;
      const util = b.used - a.used;
      if(util) return util;
      if(format === 'doubles'){
        const doublesDiff = b.doubles - a.doubles;
        if(doublesDiff) return doublesDiff;
        const twoVsOneDiff = b.twoVsOne - a.twoVsOne;
        if(twoVsOneDiff) return twoVsOneDiff;
        const singlesDiff = b.singles - a.singles;
        if(singlesDiff) return singlesDiff;
      }else{
        const singlesDiff = b.singles - a.singles;
        if(singlesDiff) return singlesDiff;
        const twoVsOneDiff = b.twoVsOne - a.twoVsOne;
        if(twoVsOneDiff) return twoVsOneDiff;
        const doublesDiff = a.doubles - b.doubles;
        if(doublesDiff) return doublesDiff;
      }
      return b.courts - a.courts;
    });
    return layouts.slice(0, 16);
  }

  function getOpponentMemoryKey(playerAId, playerBId){
    const ids = [String(playerAId || ''), String(playerBId || '')].filter(Boolean).sort();
    return ids.length === 2 ? ids.join('::') : '';
  }

  function getCourtRotationPenalty(court){
    let penalty = 0;
    [court.side1, court.side2].forEach(function(side){
      const players = side && Array.isArray(side.players) ? side.players : [];
      if(players.length === 2){
        const pairId = getPairIdFromPlayers(players);
        penalty += Number(state.plan.sessionPairCounts && state.plan.sessionPairCounts[pairId] || 0) * 18;
      }
    });
    const side1Players = court.side1 && court.side1.players ? court.side1.players : [];
    const side2Players = court.side2 && court.side2.players ? court.side2.players : [];
    side1Players.forEach(function(a){
      side2Players.forEach(function(b){
        const key = getOpponentMemoryKey(a.id, b.id);
        penalty += Number(state.plan.sessionOpponentCounts && state.plan.sessionOpponentCounts[key] || 0) * 4;
      });
    });
    if(court.kind === '2v1'){
      const solo = side1Players.length === 1 ? side1Players[0] : (side2Players.length === 1 ? side2Players[0] : null);
      if(solo) penalty += Number(state.plan.sessionSolo2v1Counts && state.plan.sessionSolo2v1Counts[solo.id] || 0) * 14;
    }
    return penalty;
  }

  function scoreCandidate(courts, usedSet){
    let score = 0;
    const seen = new Set();
    courts.forEach(court => {
      const signature = buildMatchupKey(court);
      const gap = Math.abs(getSideRatingForCourt(court, court.side1) - getSideRatingForCourt(court, court.side2));
      if(!usedSet.has(signature)) score += 100;
      if(seen.has(signature)) score -= 240;
      seen.add(signature);
      score -= gap * 3;
      score -= getCourtRotationPenalty(court);
    });
    score += courts.length * 12;
    return score;
  }

  function getLayoutPriorityValue(layout, format){
    if(!layout) return -1;
    return format === 'doubles'
      ? (layout.doubles * 1000) + (layout.used * 100) + (layout.twoVsOne * 10) + layout.singles
      : (layout.singles * 1000) + (layout.used * 100) + (layout.twoVsOne * 10) - layout.doubles;
  }

  function choosePreferredLayout(layouts, format){
    if(!layouts.length) return null;
    const top = layouts[0];
    const targetPriority = getLayoutPriorityValue(top, format);
    const candidates = layouts.filter(layout =>
      layout.used === top.used &&
      layout.courts === top.courts &&
      getLayoutPriorityValue(layout, format) === targetPriority
    );
    return candidates.slice().sort(function(a, b){
      return JSON.stringify(a).localeCompare(JSON.stringify(b));
    })[0] || top;
  }

  function buildCandidate(attendingPlayers, format, usedSet, maxCourts, attemptIndex){
    const layouts = enumerateLayouts(attendingPlayers.length, format, maxCourts);
    const layout = choosePreferredLayout(layouts, format) || layouts[0];
    if(!layout) return { courts: [], score: -Infinity, sitOutPlayers: [] };
    const benchPlayers = chooseSitOutPlayers(attendingPlayers, Math.max(0, attendingPlayers.length - layout.used));
    const sitOutIds = new Set(benchPlayers.map(player => player.id));
    const selected = orderPlayersForGeneration(attendingPlayers.filter(player => !sitOutIds.has(player.id)), attemptIndex || 0);
    const order = format === 'doubles'
      ? [
        ...Array(layout.doubles).fill('doubles'),
        ...Array(layout.twoVsOne).fill('2v1'),
        ...Array(layout.singles).fill('singles')
      ]
      : [
        ...Array(layout.singles).fill('singles'),
        ...Array(layout.twoVsOne).fill('2v1'),
        ...Array(layout.doubles).fill('doubles')
      ];
    const courts = [];
    let cursor = 0;
    order.forEach(kind => {
      const size = kind === 'doubles' ? 4 : (kind === 'singles' ? 2 : 3);
      const group = selected.slice(cursor, cursor + size);
      cursor += size;
      if(group.length !== size) return;
      const court = makeCourtRespectingOptOuts(kind, group, format);
      if(court){
        const signature = buildMatchupKey(court);
        if(signature && courts.some(existingCourt => buildMatchupKey(existingCourt) === signature)) return;
        courts.push(court);
      }
    });
    return { courts, score: scoreCandidate(courts, usedSet), sitOutPlayers: benchPlayers };
  }

  function generateNovelCourtSet(attendingPlayers, format, usedSet, maxCourts){
    let best = null;
    for(let i = 0; i < 250; i += 1){
      const candidate = buildCandidate(attendingPlayers, format, usedSet, maxCourts, i);
      if(!best || candidate.score > best.score) best = candidate;
    }
    if(best && best.courts.every(court => usedSet.has(buildMatchupKey(court))) && usedSet.size){
      usedSet.clear();
      return generateNovelCourtSet(attendingPlayers, format, usedSet, maxCourts);
    }
    return best ? best : { courts: [], score: -Infinity, sitOutPlayers: [] };
  }

  function buildSinglesDayCourtSet(attendingPlayers, courtLimit){
    const singlesCount = Math.min(courtLimit, Math.floor(attendingPlayers.length / 2));
    const usedCount = singlesCount * 2;
    const sitOutPlayers = chooseSitOutPlayers(attendingPlayers, Math.max(0, attendingPlayers.length - usedCount));
    const sitOutIds = new Set(sitOutPlayers.map(function(player){ return player.id; }));
    const selected = orderPlayersForGeneration(attendingPlayers.filter(function(player){ return !sitOutIds.has(player.id); }), 'singles');
    const courts = [];
    for(let i = 0; i < singlesCount; i += 1){
      const group = selected.slice(i * 2, i * 2 + 2);
      if(group.length === 2) courts.push(makeCourt('singles', group));
    }
    return { courts:courts, sitOutPlayers:sitOutPlayers };
  }

  function getDoublesDayCounts(playerCount, courtLimit){
    if(playerCount === 4) return { doubles:1, twoVsOne:0, singles:0, used:4 };
    let doubles = Math.min(courtLimit, Math.floor(playerCount / 4));
    let used = doubles * 4;
    let courtsUsed = doubles;
    const remaining = playerCount - used;
    let twoVsOne = 0;
    let singles = 0;
    if(courtsUsed < courtLimit){
      if(remaining >= 3){ twoVsOne = 1; used += 3; courtsUsed += 1; }
      else if(remaining >= 2){ singles = 1; used += 2; courtsUsed += 1; }
    }
    return { doubles:doubles, twoVsOne:twoVsOne, singles:singles, used:used };
  }

  function buildDoublesDayCourtSet(attendingPlayers, courtLimit){
    const counts = getDoublesDayCounts(attendingPlayers.length, courtLimit);
    const sitOutPlayers = chooseSitOutPlayers(attendingPlayers, Math.max(0, attendingPlayers.length - counts.used));
    const sitOutIds = new Set(sitOutPlayers.map(function(player){ return player.id; }));
    const selected = orderPlayersForGeneration(attendingPlayers.filter(function(player){ return !sitOutIds.has(player.id); }), 'doubles');
    const courts = [];
    let cursor = 0;
    for(let i = 0; i < counts.doubles; i += 1){
      const group = selected.slice(cursor, cursor + 4);
      cursor += 4;
      if(group.length === 4) courts.push(makeCourtRespectingOptOuts('doubles', group, 'doubles') || makeCourt('doubles', group));
    }
    if(counts.twoVsOne){
      const group = selected.slice(cursor, cursor + 3);
      cursor += 3;
      if(group.length === 3){
        const court = makeCourtRespectingOptOuts('2v1', group, 'doubles');
        if(court) courts.push(court);
        else sitOutPlayers.push.apply(sitOutPlayers, group);
      }
    }
    if(counts.singles){
      const group = selected.slice(cursor, cursor + 2);
      cursor += 2;
      if(group.length === 2){
        const court = makeCourtRespectingOptOuts('singles', group, 'doubles');
        if(court) courts.push(court);
        else sitOutPlayers.push.apply(sitOutPlayers, group);
      }
    }
    return { courts:courts.slice(0, courtLimit), sitOutPlayers:sitOutPlayers };
  }

  function attachVariableBasePlayers(court){
    if(!court) return court;
    court.variableBasePlayerIds = getCourtPlayers(court).map(function(player){ return player && player.id; }).filter(Boolean);
    court.variableOriginalKind = court.kind || '';
    court.variableSitOutIds = [];
    court.noGame = false;
    court.status = '';
    return court;
  }

  function buildCurrentCourtSet(attendingPlayers, format, usedSet, maxCourts){
    const courtLimit = normaliseCourtLimit(maxCourts, 1);
    const normalizedFormat = format === 'singles' ? 'singles' : 'doubles';
    let result;
    if(attendingPlayers.length === 2){
      result = { courts: [makeCourt('singles', attendingPlayers.slice(0, 2))], sitOutPlayers: [] };
    }else if(normalizedFormat === 'singles'){
      result = buildSinglesDayCourtSet(attendingPlayers, courtLimit);
    }else if(isSpecialFourPlayerLadder(attendingPlayers, normalizedFormat)){
      result = { courts: buildSpecialFourPlayerSequence(attendingPlayers, state.plan.specialFourPlayerIndex || 0).slice(0, courtLimit), sitOutPlayers: [] };
    }else{
      result = generateNovelCourtSet(attendingPlayers, normalizedFormat, usedSet, courtLimit);
      if(!result || !Array.isArray(result.courts) || !result.courts.length){
        result = buildDoublesDayCourtSet(attendingPlayers, courtLimit);
      }
    }
    const courts = (result.courts || []).filter(Boolean).slice(0, courtLimit);
    courts.forEach(function(court){
      const signature = buildMatchupKey(court);
      const gap = Math.round(Math.abs(getSideRatingForCourt(court, court.side1) - getSideRatingForCourt(court, court.side2)) * 10) / 10;
      const rotationPenalty = getCourtRotationPenalty(court);
      const reasons = [];
      reasons.push(usedSet.has(signature) ? 'This matchup has appeared before, but higher-priority court and fairness constraints selected it again.' : 'This is a new matchup within the current rotation memory.');
      reasons.push('Rating gap: ' + gap.toFixed(1) + '.');
      if(rotationPenalty > 0) reasons.push('Recent partner/opponent repetition was considered and penalised during selection.');
      else reasons.push('No recent partner/opponent repetition penalty applied.');
      court.matchupReason = reasons.join(' ');
      usedSet.add(signature);
    });
    state.plan.currentCircumstantialSitOutPlayerIds = Array.from(new Set((result.sitOutPlayers || []).map(function(player){ return player && player.id; }).filter(Boolean)));
    state.plan.currentOptionalSitOutPlayerIds = [];
    syncCurrentSitOutUnion();
    // Only circumstantial sit-outs participate in automatic fairness balancing.
    // A player choosing to sit out from a court must not earn rotation credit or
    // cause somebody else to be prioritised for a future forced sit-out.
    state.plan.lastSitOutPlayerIds = state.plan.currentCircumstantialSitOutPlayerIds.slice();
    state.plan.currentCircumstantialSitOutPlayerIds.forEach(playerId => { state.plan.sitOutCounts[playerId] = Number(state.plan.sitOutCounts[playerId] || 0) + 1; });
    const rebuiltCourts = courts.map((court, index) => attachVariableBasePlayers(resetUnsubmittedCourtScoreDraft(evaluateCourtRestrictions(Object.assign({ courtNumber:index + 1 }, JSON.parse(JSON.stringify(court)))))));
    return orderCourtsByLadder(rebuiltCourts);
  }

  function generateGamePlan(){
    if(!currentUserIsManager()) return;
    normalizeAttendingPlayerIds();
    syncPlanSettingsFromInputs();
    const attendingPlayers = getAttendingPlayers();
    state.plan.attendance = attendingPlayers.length;
    if(attendingPlayers.length < 2){
      setPlanAlert(attendingPlayers.length === 0
        ? 'No attendees are selected. Mark the players who are here before generating the game plan.'
        : 'At least two attendees are needed to generate a game plan.');
      state.plan.current = [];
      state.plan.currentSavedSignatures = [];
      state.plan.currentSavedCourtKeys = [];
      state.plan.currentSetReadyForNext = false;
      state.plan.currentSitOutPlayerIds = [];
      state.plan.currentCircumstantialSitOutPlayerIds = [];
      state.plan.currentOptionalSitOutPlayerIds = [];
      saveSessionData({ immediate:true, verify:true });
      renderAll();
      return;
    }
    protectLocalCurrentState(5000);
    try{ if(serverLoadAbortController && typeof serverLoadAbortController.abort === 'function') serverLoadAbortController.abort(); serverLoadAbortController = null; }catch(_e){}
    const usedSet = new Set((state.plan.usedCourtSignatures || []).slice());
    state.plan.current = [];
    state.plan.currentSavedSignatures = [];
    state.plan.currentSavedCourtKeys = [];
    state.plan.currentSetReadyForNext = false;
    state.plan.generatedAt = new Date().toISOString();
    state.plan.currentGenerationToken = uid('current-set');
    state.plan.blankCurrentScoreInputs = true;
    state.plan.generationIndex = Math.max(0, Math.round(Number(state.plan.generationIndex || 0))) + 1;
    prepareSpecialFourPlayerIndexForManualGenerate(attendingPlayers, state.plan.format);
    if(attendingPlayers.length === 2){
      state.plan.twoPlayerFlipIndex = Math.max(0, Math.round(Number(state.plan.twoPlayerFlipIndex || 0) || 0)) + 1;
    }else{
      state.plan.twoPlayerFlipIndex = 0;
    }
    state.plan.current = buildCurrentCourtSet(attendingPlayers, state.plan.format, usedSet, state.plan.courtCount).slice(0, state.plan.courtCount);
    refreshCurrentCourtRestrictionsFromMemory();
    clearGeneratedCourtDrafts();
    state.plan.generatedAt = state.plan.generatedAt || new Date().toISOString();
    state.plan.usedCourtSignatures = Array.from(usedSet).slice(-400);
    state.plan.currentSavedSignatures = [];
    state.plan.currentSavedCourtKeys = [];
    state.plan.currentSetReadyForNext = false;
    ensureCurrentCourtSaveKeys(false);
    setPlanAlert(attendingPlayers.length === 2
      ? 'Game plan generated. With two players, repeated singles alternate Side 1 and Side 2 each game for fairness.'
      : (isSpecialFourPlayerLadder(attendingPlayers, state.plan.format)
        ? 'Game plan generated. The four-player doubles ladder now rotates cleanly instead of resetting to the first pairing.'
        : 'Game plan generated with the selected session format: Singles Day uses singles; Doubles Day prioritises doubles, then 2v1, then singles. Courts are ordered as a clean strongest-to-lowest ladder.'));
    saveSessionData();
    renderAll();
  }

  function renderPlayerPill(player){
    return '<span class="player-pill">' + escapeHtml(player.name) + ' · ' + escapeHtml(getPlayerRating(player).toFixed(1)) + '</span>';
  }

  function getCourtSaveKey(court, index){
    if(!court || typeof court !== 'object') return '';
    if(court.currentCourtKey) return String(court.currentCourtKey);
    const signature = String(court.signature || buildMatchupKey(court) || 'court');
    const generated = String(state && state.plan && state.plan.generatedAt || 'unstarted');
    const slot = Number.isFinite(Number(index)) ? String(Number(index) + 1) : String(court.courtNumber || '0');
    return ['current-set', generated, 'slot', slot, signature].join('::');
  }

  function ensureCurrentCourtSaveKeys(force){
    if(!state.plan) state.plan = createInitialState().plan;
    if(!Array.isArray(state.plan.current)) state.plan.current = [];
    if(!Array.isArray(state.plan.currentSavedCourtKeys)) state.plan.currentSavedCourtKeys = [];
    state.plan.current.forEach(function(court, index){
      if(!court || typeof court !== 'object') return;
      if(force || !court.currentCourtKey){
        court.currentCourtKey = getCourtSaveKey(court, index);
      }
    });
  }

  function pruneCurrentSavedCourtKeys(){
    ensureCurrentCourtSaveKeys();
    const activeKeys = new Set(state.plan.current.map(function(court, index){ return getCourtSaveKey(court, index); }).filter(Boolean));
    state.plan.currentSavedCourtKeys = (state.plan.currentSavedCourtKeys || []).filter(function(key){ return activeKeys.has(key); });
    const activeSignatures = new Set(state.plan.current.map(function(court){ return court.signature || buildMatchupKey(court); }).filter(Boolean));
    state.plan.currentSavedSignatures = (state.plan.currentSavedSignatures || []).filter(function(signature){ return activeSignatures.has(signature); });
  }

  function courtSaved(courtOrSignature, index){
    if(courtOrSignature && typeof courtOrSignature === 'object'){
      const key = getCourtSaveKey(courtOrSignature, index);
      return !!(key && Array.isArray(state.plan.currentSavedCourtKeys) && state.plan.currentSavedCourtKeys.includes(key));
    }
    const signature = String(courtOrSignature || '');
    return !!(signature && Array.isArray(state.plan.currentSavedSignatures) && state.plan.currentSavedSignatures.includes(signature));
  }

  function markCourtSaved(court, index){
    ensureCurrentCourtSaveKeys();
    const key = getCourtSaveKey(court, index);
    if(key) state.plan.currentSavedCourtKeys = Array.from(new Set([...(state.plan.currentSavedCourtKeys || []), key]));
    const signature = court && (court.signature || buildMatchupKey(court));
    if(signature) state.plan.currentSavedSignatures = Array.from(new Set([...(state.plan.currentSavedSignatures || []), signature]));
  }

  function getCourtLosingScore(court){
    if(court.score1 == null || court.score2 == null) return null;
    return Math.min(Number(court.score1), Number(court.score2));
  }

  function getCurrentWinnerSideNumber(court){
    if(court.score1 == null || court.score2 == null || Number(court.score1) === Number(court.score2)) return null;
    return Number(court.score1) > Number(court.score2) ? 1 : 2;
  }

  function getShotRestrictionStageForSide(court, sideNumber){
    const dominantRule = getDominantHardshipRuleForSide(court, sideNumber);
    if(dominantRule && dominantRule.rule) return Math.min(1, Math.max(0, Math.round(Number(dominantRule.rule.shotStage || 0))));
    const activeRule = getHardshipRuleForSide(court, sideNumber);
    if(activeRule && hardshipRuleIsActive(activeRule.rule)) return Math.min(1, Math.max(0, Math.round(Number(activeRule.rule.shotStage || 0))));
    if(Number(court && court.restrictedSide || 0) === Number(sideNumber)) return Math.min(1, Math.max(0, Math.round(Number(court && court.shotRestrictionStage || 0))));
    return 0;
  }

  function getIncreaseHardshipOptionsForSide(court, sideNumber){
    return getDominantIncreaseOptionsForSide(court, sideNumber);
  }

  function getReduceHardshipOptionsForSide(court, sideNumber){
    return getDominantReduceOptionsForSide(court, sideNumber);
  }

    function getHardshipResultContext(court){
    const empty = { valid:false, active:false, action:'none', adjustmentSideNumber:null, options:[], losingScore:null, ratingHold:false };
    if(!court || court.score1 == null || court.score2 == null) return empty;
    const score1 = Math.max(0, Math.min(MAX_SCORE, Math.round(safeNumber(court.score1, 0))));
    const score2 = Math.max(0, Math.min(MAX_SCORE, Math.round(safeNumber(court.score2, 0))));
    if(validateScores(score1, score2) !== '') return empty;

    const winnerSideNumber = score1 > score2 ? 1 : 2;
    const losingScore = Math.min(score1, score2);
    const evaluated = evaluateCourtRestrictions(Object.assign({}, JSON.parse(JSON.stringify(court)), { score1:score1, score2:score2 }));
    const activeEntry = getDominantHardshipEntryForCourt(evaluated);

    if(activeEntry && activeEntry.sideNumber){
      const action = winnerSideNumber === activeEntry.sideNumber ? 'increase' : 'reduce';
      return {
        valid:true,
        active:true,
        action,
        adjustmentSideNumber:activeEntry.sideNumber,
        winnerSideNumber,
        losingScore,
        ratingHold: action === 'reduce',
        options: action === 'increase'
          ? getDominantIncreaseOptionsForSide(evaluated, activeEntry.sideNumber)
          : getDominantReduceOptionsForSide(evaluated, activeEntry.sideNumber)
      };
    }

    if(losingScore <= 15){
      return {
        valid:true,
        active:false,
        action:'initiate',
        adjustmentSideNumber:winnerSideNumber,
        winnerSideNumber,
        losingScore,
        ratingHold:false,
        options:getDominantIncreaseOptionsForSide(evaluated, winnerSideNumber)
      };
    }

    return Object.assign({}, empty, { valid:true, losingScore, winnerSideNumber });
  }

  function normalisePendingHardship(court){
    const context = getHardshipResultContext(court);
    const options = (context.options || []).map(item => item.value);
    if(!options.length){ court.pendingHardship = ''; return; }
    if(!options.includes(court.pendingHardship || '')) court.pendingHardship = options.length === 1 ? options[0] : '';
  }

  function getHardshipControlStateKey(court){
    const context = getHardshipResultContext(court);
    return [context.action || 'none', context.active ? 'active' : 'inactive', String(context.adjustmentSideNumber || ''), (context.options || []).map(function(option){ return option.value; }).join('|'), String(court && court.pendingHardship || ''), String(court && court.score1 != null ? court.score1 : ''), String(court && court.score2 != null ? court.score2 : '')].join('::');
  }

  function canSaveCourtNow(court){
    if(!court || court.score1 == null || court.score2 == null) return false;
    const score1 = Math.max(0, Math.min(MAX_SCORE, Math.round(safeNumber(court.score1, 0))));
    const score2 = Math.max(0, Math.min(MAX_SCORE, Math.round(safeNumber(court.score2, 0))));
    return validateScores(score1, score2) === '';
  }

  // BASELINE-BADMINTON-HARDSHIP-DOMINANT-RADIO-REIMPLEMENTATION-20260608
  // The hardship control is deliberately no longer a dropdown. The visible choice is
  // now a real radio input, so Save Results cannot miss a not-yet-committed select value.
    function renderHardshipControl(court, phase, index){
    const context = getHardshipResultContext(court);
    const options = context.options || [];
    const selectedValue = String(court && court.pendingHardship || '').trim();
    const stateKey = getHardshipControlStateKey(court);
    const wrapOpen = '<div class="hardship-control" data-hardship-wrap="' + escapeHtml(String(index)) + '" data-hardship-state-key="' + escapeHtml(stateKey) + '" data-selected-hardship="' + escapeHtml(selectedValue) + '">';
    const saveButton = '<button class="action hardship-save" data-save-court="' + escapeHtml(String(index)) + '" data-save-signature="' + escapeHtml(String(court.signature || '')) + '" data-hardship-save-button="true" data-hardship-value="' + escapeHtml(selectedValue) + '" type="button" onclick="return window.BASELINE_saveCourtResultButton ? window.BASELINE_saveCourtResultButton(event,this) : false;">Save Results</button>';

    if(!canSaveCourtNow(court)){
      if(court) court.pendingHardship = '';
      return wrapOpen + '<div class="hardship-row"><div class="hardship-field"><div class="hardship-note">Enter a valid score to see whether a hardship adjustment is needed.</div><input type="hidden" data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-hardship-store="true" value=""/></div>' + saveButton + '</div></div>';
    }

    if(!options.length){
      let text = 'No hardship adjustment is triggered by this score.';
      if(context.active && context.action === 'increase') text = 'No further hardship options available.';
      if(context.active && context.action === 'reduce') text = 'No further hardship restoration options available.';
      if(!context.active && context.valid && Number(context.losingScore) > 15) text = 'No hardship initiation is triggered by this score.';
      return wrapOpen + '<div class="hardship-row"><div class="hardship-field"><div class="hardship-note">' + escapeHtml(text) + '</div><input type="hidden" data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-hardship-store="true" value="' + escapeHtml(selectedValue) + '"/></div>' + saveButton + '</div></div>';
    }

    let selected = options.some(function(option){ return option.value === selectedValue; }) ? selectedValue : '';
    if(options.length === 1 && !selected) selected = options[0].value;
    if(selected && court) court.pendingHardship = selected;

    const noteText = context.action === 'reduce'
      ? 'Hardship is active. Choose what to restore for the next game.'
      : (context.action === 'initiate'
        ? 'This result activates the first hardship for the winner in the next game.'
        : 'Hardship is active. Choose what to make harder for the next game.');

    const radioName = 'hardship-' + escapeHtml(String(index)) + '-' + escapeHtml(String(stateKey).replace(/[^a-zA-Z0-9_-]/g, '-'));
    const optionMarkup = options.map(function(option){
      const checked = selected === option.value ? ' checked' : '';
      return '<label class="hardship-radio-option">' +
        '<input type="radio" data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-hardship="true" data-hardship-option="true" name="' + radioName + '" value="' + escapeHtml(option.value) + '"' + checked + '/>' +
        '<span>' + escapeHtml(option.label) + '</span>' +
      '</label>';
    }).join('');

    return wrapOpen +
      '<div class="hardship-row"><div class="hardship-field"><div class="hardship-label">Hardship Adjustment</div>' +
      '<div class="hardship-radio-group" role="radiogroup" aria-label="Hardship Adjustment">' + optionMarkup + '</div>' +
      '<input type="hidden" data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-hardship-store="true" value="' + escapeHtml(selected) + '"/>' +
      '<div class="hardship-note">' + escapeHtml(noteText) + '</div></div>' + saveButton + '</div></div>';
  }

  function stabilizeHardshipSelects(root){
    if(!root) return;
    try{ if(window.BASELINE_enhanceAllSelects){ window.BASELINE_enhanceAllSelects(root); } }catch(_e){}
    try{
      root.querySelectorAll('.hardship-field .bl-select, .hardship-field select[data-hardship]').forEach(el => { el.style.width = '100%'; el.style.minWidth = '0'; el.style.maxWidth = '480px'; });
      root.querySelectorAll('.hardship-field .bl-select-btn, .hardship-field select[data-hardship]').forEach(el => { el.style.height = '52px'; el.style.minHeight = '52px'; el.style.maxHeight = '52px'; el.style.lineHeight = '1.2'; });
    }catch(_e){}
  }

  function refreshCourtInputUi(index){
    const court = state.plan.current[index];
    if(!court || !refs.currentGamesGrid) return;
    const wrap = refs.currentGamesGrid.querySelector('[data-hardship-wrap="' + cssEscape(String(index)) + '"]');
    if(wrap){
      const nextKey = getHardshipControlStateKey(court);
      if(wrap.getAttribute('data-hardship-state-key') === nextKey) return;
      wrap.outerHTML = renderHardshipControl(court, 'current', index);
      const freshWrap = refs.currentGamesGrid.querySelector('[data-hardship-wrap="' + cssEscape(String(index)) + '"]');
      stabilizeHardshipSelects(freshWrap || refs.currentGamesGrid);
    }
  }

  function abbreviatePlayerName(name){
    const parts = String(name || '').trim().replace(/\s+/g, ' ').split(' ').filter(Boolean);
    if(!parts.length) return 'Player';
    if(parts.length === 1) return parts[0];
    const first = parts[0];
    const surnameInitial = parts[1] ? parts[1].charAt(0).toUpperCase() : '';
    return surnameInitial ? (first + ' ' + surnameInitial) : first;
  }

  function getShortTeamLines(side){
    return (side && Array.isArray(side.players) ? side.players : []).map(function(player){ return abbreviatePlayerName(player.name); });
  }

  function getShortTeamLabel(side){
    return getShortTeamLines(side).join(' & ');
  }

  function getDisplayLengthForTeamLine(value){
    return String(value || '').replace(/\s+/g, '').length;
  }

  function getShortTeamDisplayLines(side){
    const lines = getShortTeamLines(side).filter(Boolean);
    if(lines.length !== 2) return lines.length ? lines : ['Team'];
    const first = lines[0];
    const second = lines[1];
    if(getDisplayLengthForTeamLine(first) <= getDisplayLengthForTeamLine(second)){
      return [first + ' &', second];
    }
    return [first, '& ' + second];
  }

  function renderShortTeamNameLines(side){
    return getShortTeamDisplayLines(side).map(function(line){
      return '<span class="team-name-line">' + escapeHtml(line) + '</span>';
    }).join('');
  }

  function formatCourtRating(value){
    const n = Number(value);
    return Number.isFinite(n) ? n.toFixed(1) : START_RATING.toFixed(1);
  }

  function renderCourtSummary(court){
    const kind = court.kind === '2v1' ? '2V1' : String(court.kind || 'game').toUpperCase();
    function sideMarkup(side, rating, extraClass){
      const full = getTeamLabel(side);
      return '<div class="court-vs-side ' + extraClass + '" title="' + escapeHtml(full) + '">' +
        '<div class="court-vs-team">' + renderShortTeamNameLines(side) + '</div>' +
        '<div class="court-vs-rating">(' + escapeHtml(formatCourtRating(rating)) + ')</div>' +
      '</div>';
    }
    return '<div class="court-summary">' +
      '<div class="court-summary-title">Court ' + escapeHtml(String(court.courtNumber)) + ' - ' + escapeHtml(kind) + '</div>' +
      '<div class="court-vs-grid">' + sideMarkup(court.side1, court.side1Rating, 'court-vs-side--left') + '<div class="court-vs-separator">VS</div>' + sideMarkup(court.side2, court.side2Rating, 'court-vs-side--right') + '</div>' +
    '</div>';
  }

  function renderScoreHeading(court, side){
    const full = getTeamLabel(side);
    const rating = getSideRatingForCourt(court, side);
    return '<h4 class="score-side-title" title="' + escapeHtml(full) + '">' +
      '<span class="score-side-team">' + renderShortTeamNameLines(side) + '</span>' +
      '<span class="score-side-rating">(' + escapeHtml(formatCourtRating(rating)) + ')</span>' +
      '<span class="score-side-label">Score</span>' +
    '</h4>';
  }

  function getCourtVariableBasePlayerIds(court){
    if(!court) return [];
    const stored = Array.isArray(court.variableBasePlayerIds) ? court.variableBasePlayerIds.filter(Boolean) : [];
    if(stored.length) return Array.from(new Set(stored));
    const ids = getCourtPlayers(court).map(function(player){ return player && player.id; }).filter(Boolean);
    court.variableBasePlayerIds = Array.from(new Set(ids));
    return court.variableBasePlayerIds.slice();
  }

  function getCourtVariableBasePlayers(court){
    return getCourtVariableBasePlayerIds(court).map(getPlayer).filter(Boolean);
  }

  function getCourtVariableSitOutIds(court){
    return Array.isArray(court && court.variableSitOutIds) ? court.variableSitOutIds.filter(Boolean) : [];
  }

  function getCourtSitOutLimit(court){
    const originalKind = String(court && (court.variableOriginalKind || court.kind) || '');
    if(!originalKind || originalKind === 'singles') return 0;
    if(originalKind === '2v1') return 1;
    if(originalKind === 'doubles') return 2;
    return 0;
  }

  function renderCourtVariableEditor(court, index){
    const basePlayers = getCourtVariableBasePlayers(court);
    if(!basePlayers.length) return '';
    const selected = new Set(getCourtVariableSitOutIds(court));
    const limit = getCourtSitOutLimit(court);
    const disabled = limit <= 0 ? ' disabled' : '';
    const checkboxes = basePlayers.map(function(player){
      return '<label class="court-sitout-pill"><input type="checkbox" data-court-sitout-player="' + escapeHtml(String(index)) + '" value="' + escapeHtml(player.id) + '"' + (selected.has(player.id) ? ' checked' : '') + disabled + '/><span>' + escapeHtml(player.name) + '</span></label>';
    }).join('');
    const sitOutNote = limit > 0
      ? ('Choose up to ' + String(limit) + ' player' + (limit === 1 ? '' : 's') + ' to sit out from this court only.')
      : 'Singles cannot sit a player out. Use No Game if this court should not happen.';
    return '<details class="court-variable-editor"><summary>Edit variables</summary>' +
      '<div class="court-variable-body">' +
        '<div class="court-variable-section"><strong>Sitting out</strong><div class="note">' + escapeHtml(sitOutNote) + '</div><div class="court-sitout-grid">' + checkboxes + '</div></div>' +
        '<div class="court-variable-section court-no-game-section">' +
          '<label class="court-no-game-range-label"><input class="court-no-game-range" type="range" min="0" max="100" step="1" value="0" data-court-no-game-slider="' + escapeHtml(String(index)) + '" aria-label="Move the slider right to register No Game"/><span>No Game</span></label>' +
          '<div class="note">Move the slider right to register \'No Game\'</div>' +
        '</div>' +
      '</div>' +
    '</details>';
  }

  function makeBestCourtFromVariablePlayers(players, existingKind){
    const group = (players || []).filter(Boolean);
    if(group.length >= 4 && existingKind === 'doubles') return makeCourt('doubles', group.slice(0, 4));
    if(group.length === 3) return makeCourt('2v1', group.slice(0, 3));
    if(group.length === 2) return makeCourt('singles', group.slice(0, 2));
    if(group.length >= 4) return makeCourt('doubles', group.slice(0, 4));
    return null;
  }

  function applyCourtSitOutSelection(index){
    if(!currentUserIsManager()) return;
    const court = state.plan.current[index];
    if(!court || courtSaved(court, index) || courtMarkedNoGame(court)) return;
    syncAllCurrentCourtDraftsFromInputs();
    const originalKind = String(court.variableOriginalKind || court.kind || '');
    const limit = getCourtSitOutLimit(court);
    const selector = '[data-court-sitout-player="' + cssEscape(String(index)) + '"]';
    let selectedIds = Array.from(refs.currentGamesGrid.querySelectorAll(selector + ':checked')).map(function(input){ return String(input.value || '').trim(); }).filter(Boolean);
    if(selectedIds.length > limit){
      selectedIds = selectedIds.slice(0, limit);
      refs.currentGamesGrid.querySelectorAll(selector).forEach(function(input){ input.checked = selectedIds.includes(String(input.value || '').trim()); });
      setPlanAlert('Only ' + String(limit) + ' player' + (limit === 1 ? '' : 's') + ' can sit out from this court type.');
    }
    const baseIds = getCourtVariableBasePlayerIds(court);
    const selectedSet = new Set(selectedIds);
    const remainingPlayers = baseIds.filter(function(id){ return !selectedSet.has(id); }).map(getPlayer).filter(Boolean);
    const nextCourt = makeBestCourtFromVariablePlayers(remainingPlayers, originalKind || court.kind);
    if(!nextCourt){
      setPlanAlert('That court cannot stay playable after those sit-outs. Use No Game instead.');
      return;
    }
    const oldKey = getCourtSaveKey(court, index);
    const rebuilt = resetUnsubmittedCourtScoreDraft(evaluateCourtRestrictions(Object.assign({ courtNumber:Number(index) + 1 }, JSON.parse(JSON.stringify(nextCourt)))));
    rebuilt.variableBasePlayerIds = baseIds.slice();
    rebuilt.variableOriginalKind = originalKind || court.kind;
    rebuilt.variableSitOutIds = selectedIds.slice();
    rebuilt.currentCourtKey = ['current-set', String(state.plan.generatedAt || 'unstarted'), 'slot', String(Number(index) + 1), 'edit', Date.now().toString(36), buildMatchupKey(rebuilt)].join('::');
    state.plan.current[index] = rebuilt;
    const optionalSet = new Set(Array.isArray(state.plan.currentOptionalSitOutPlayerIds) ? state.plan.currentOptionalSitOutPlayerIds : []);
    baseIds.forEach(function(id){ optionalSet.delete(id); });
    selectedIds.forEach(function(id){ optionalSet.add(id); });
    state.plan.currentOptionalSitOutPlayerIds = Array.from(optionalSet);
    syncCurrentSitOutUnion();
    // Deliberately do not alter lastSitOutPlayerIds or sitOutCounts here:
    // these are player-selected optional sit-outs, not circumstantial rotation events.
    state.plan.currentSavedCourtKeys = (state.plan.currentSavedCourtKeys || []).filter(function(key){ return key !== oldKey; });
    state.plan.currentSavedSignatures = (state.plan.currentSavedSignatures || []).filter(function(signature){ return signature !== (court.signature || buildMatchupKey(court)); });
    state.plan.currentSetReadyForNext = false;
    markLocalChange();
    queueServerSave();
    refreshCurrentCourtCard(index);
    renderCurrentSitOutInfo();
    setPlanAlert('Court ' + String(Number(index) + 1) + ' variables updated. Other current courts were left unchanged.');
  }

  function renderNoGameDialog(index){
    return '<div class="no-game-dialog" data-no-game-dialog="true" data-no-game-index="' + escapeHtml(String(index)) + '" role="dialog" aria-modal="true" aria-label="Confirm No Game">' +
      '<div class="no-game-dialog-card">' +
        '<strong>Confirm “No Game”</strong>' +
        '<div class="note">This will lock this court as No Game. It will not require scores and it will not erase other courts.</div>' +
        '<div class="row"><button class="action" type="button" data-no-game-action="yes">Yes</button><button class="action secondary" type="button" data-no-game-action="no">No</button></div>' +
      '</div>' +
    '</div>';
  }

  function requestNoGameConfirmation(index, input){
    if(!currentUserIsManager()) return;
    const court = state.plan.current[index];
    if(!court || courtSaved(court, index) || courtMarkedNoGame(court)) return;
    document.querySelectorAll('[data-no-game-dialog="true"]').forEach(function(node){ node.remove(); });
    document.body.insertAdjacentHTML('beforeend', renderNoGameDialog(index));
    const dialog = document.body.querySelector('[data-no-game-dialog="true"][data-no-game-index="' + cssEscape(String(index)) + '"]');
    if(dialog){
      dialog.querySelectorAll('[data-no-game-action]').forEach(function(button){
        button.addEventListener('click', function(event){
          try{ event.preventDefault(); }catch(_e){}
          try{ event.stopPropagation(); }catch(_e){}
          handleNoGameDialogAction(button);
        });
      });
    }
    if(input) input.value = '0';
  }

  function handleNoGameDialogAction(button){
    const dialog = button && button.closest ? button.closest('[data-no-game-dialog="true"]') : null;
    if(!dialog) return;
    const index = Number(dialog.getAttribute('data-no-game-index'));
    const action = String(button.getAttribute('data-no-game-action') || '');
    dialog.remove();
    if(action === 'yes') confirmNoGameForCourt(index);
  }

  try{
    document.addEventListener('click', function(event){
      const button = event && event.target && event.target.closest ? event.target.closest('[data-no-game-action]') : null;
      if(!button) return;
      try{ event.preventDefault(); }catch(_e){}
      try{ event.stopPropagation(); }catch(_e){}
      handleNoGameDialogAction(button);
    }, true);
  }catch(_e){}

  function confirmNoGameForCourt(index){
    if(!currentUserIsManager()) return;
    const court = state.plan.current[index];
    if(!court || courtSaved(court, index) || courtMarkedNoGame(court)) return;
    syncAllCurrentCourtDraftsFromInputs();
    court.noGame = true;
    court.status = 'no-game';
    court.score1 = null;
    court.score2 = null;
    court.pendingHardship = '';
    court.savedWinnerLabel = 'No Game';
    court.savedHardship = '';
    court.savedRatingSummary = 'No rating change';
    markCourtSaved(court, index);
    const completedCurrentSet = allCurrentCourtsSaved();
    if(completedCurrentSet){
      rollFinishedGamesForward();
      clearGeneratedCourtDrafts();
      setPlanAlert('Court marked No Game. The current set is complete and the next set was generated.');
      protectLocalCurrentState(3500);
      saveSessionData();
      renderAll();
      scheduleHardBlankCurrentScoreInputs(refs.currentGamesGrid);
      return;
    }
    state.plan.currentSetReadyForNext = false;
    protectLocalCurrentState(3500);
    saveSessionData();
    refreshCurrentCourtCard(index);
    renderCurrentSitOutInfo();
    setPlanAlert('Court ' + String(Number(index) + 1) + ' marked as No Game. Waiting for the remaining current court results.');
  }

  function renderCourtCard(court, phase, index){
    const noGame = courtMarkedNoGame(court);
    const score1 = court.score1 == null ? '' : String(court.score1);
    const score2 = court.score2 == null ? '' : String(court.score2);
    if(!noGame) normalisePendingHardship(court);
    const saved = phase === 'current' && (courtSaved(court, index) || noGame);
    const canScore = !saved && currentUserCanScoreCourt(court);
    const disabled = canScore ? '' : ' disabled';
    const lockNote = canScore || saved ? '' : '<div class="hardship-note">Score entry is limited to players on this court, the moderator, or an approved admin.</div>';
    const cardClass = 'court-card' + (saved ? ' is-saved' : '') + (noGame ? ' is-no-game' : '');
    let body = renderCourtSummary(court);
    if(canScore) body += renderCourtVariableEditor(court, index);
    if(noGame){
      body += '<div class="status-box"><strong>No Game</strong><br/>This court has been confirmed as inactive. It will not require score submission.</div>';
    }else{
      body += renderRuleGuidance(court) +
        '<div class="court-visual-row"><div class="court-frame">' + renderCourtDiagram(court) + renderBoundaryMask(court) + renderCourtShotRestrictionOverlay(court) + renderHardshipHelp(court) + '</div></div>' +
        '<div class="court-meta">' +
          '<div class="score-grid">' +
            '<label class="score-side">' + renderScoreHeading(court, court.side1) + '<input data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-score-side="1" name="' + escapeHtml(createCourtScoreInputName(court, index, 1)) + '" id="' + escapeHtml(createCourtScoreInputName(court, index, 1)) + '" type="text" maxlength="2" pattern="[0-9]*" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" data-generation-token="' + escapeHtml(String(state.plan.currentGenerationToken || '')) + '" value="' + escapeHtml(score1) + '"' + disabled + '/></label>' +
            '<label class="score-side">' + renderScoreHeading(court, court.side2) + '<input data-phase="' + escapeHtml(phase) + '" data-index="' + escapeHtml(String(index)) + '" data-score-side="2" name="' + escapeHtml(createCourtScoreInputName(court, index, 2)) + '" id="' + escapeHtml(createCourtScoreInputName(court, index, 2)) + '" type="text" maxlength="2" pattern="[0-9]*" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" data-generation-token="' + escapeHtml(String(state.plan.currentGenerationToken || '')) + '" value="' + escapeHtml(score2) + '"' + disabled + '/></label>' +
          '</div>' + lockNote + (canScore ? renderHardshipControl(court, phase, index) : (saved ? '<div class="status-box"><strong>Submitted</strong><br/>This court result is locked.</div>' : '')) +
        '</div>';
    }
    return '<div class="' + cardClass + '" data-current-court-index="' + escapeHtml(String(index)) + '" data-court-save-key="' + escapeHtml(getCourtSaveKey(court, index)) + '" data-court-saved="' + (saved ? 'true' : 'false') + '" aria-disabled="' + (saved ? 'true' : 'false') + '">' + body + '</div>';
  }

  function sanitizeScoreInput(input){
    if(!input) return '';
    const original = String(input.value || '');
    let cleaned = original.replace(/\D/g, '').slice(0, 2);
    if(cleaned !== '' && Number(cleaned) > MAX_SCORE) cleaned = String(MAX_SCORE);
    if(cleaned !== original) input.value = cleaned;
    return cleaned;
  }

  function isOfficialCompleteBadmintonScore(score1, score2){
    return validateScores(score1, score2) === '';
  }

  function validateScores(score1, score2){
    if(!Number.isInteger(score1) || !Number.isInteger(score2)) return 'Scores must be whole numbers.';
    if(score1 < 0 || score2 < 0) return 'Scores must be zero or higher.';
    if(score1 > MAX_SCORE || score2 > MAX_SCORE) return 'Do not enter a number above 30.';
    if(score1 === score2) return 'A saved result needs a winner.';
    const winner = Math.max(score1, score2);
    const loser = Math.min(score1, score2);
    if(winner < 21) return 'Winner must reach at least 21.';
    if(winner < MAX_SCORE && winner - loser < 2) return 'Winner must lead by 2 unless the score reaches 30.';
    if(winner === MAX_SCORE && loser > 29) return 'Official maximum is 30/29.';
    return '';
  }

  function applyDeltaToSideForCourt(court, side, delta){
    const entity = getCourtSideRatingEntity(court, side);
    return setCourtSideRatingEntity(court, side, entity.value + delta) - entity.value;
  }

  function applyTargetAverageToSideForCourt(court, side, targetAverage){
    const entity = getCourtSideRatingEntity(court, side);
    const before = entity.value;
    const target = setCourtSideRatingEntity(court, side, targetAverage);
    return Math.round((target - before) * 10) / 10;
  }

  function incrementCourtPlayerMatchCounts(court){
    const seen = new Set();
    if(!state.plan.sessionPlayCounts || typeof state.plan.sessionPlayCounts !== 'object') state.plan.sessionPlayCounts = {};
    ((court.side1 && court.side1.players) || []).concat((court.side2 && court.side2.players) || []).forEach(player => {
      if(!player || seen.has(player.id)) return;
      seen.add(player.id);
      const live = getPlayer(player.id);
      if(live) live.matchCount = Number(live.matchCount || 0) + 1;
      state.plan.sessionPlayCounts[player.id] = Number(state.plan.sessionPlayCounts[player.id] || 0) + 1;
    });
  }

  function updateRotationMemoryFromCourt(court){
    if(!state.plan.sessionPairCounts || typeof state.plan.sessionPairCounts !== 'object') state.plan.sessionPairCounts = {};
    if(!state.plan.sessionOpponentCounts || typeof state.plan.sessionOpponentCounts !== 'object') state.plan.sessionOpponentCounts = {};
    if(!state.plan.sessionSolo2v1Counts || typeof state.plan.sessionSolo2v1Counts !== 'object') state.plan.sessionSolo2v1Counts = {};
    [court.side1, court.side2].forEach(function(side){
      const players = side && Array.isArray(side.players) ? side.players : [];
      if(players.length === 2){
        const pairId = getPairIdFromPlayers(players);
        if(pairId) state.plan.sessionPairCounts[pairId] = Number(state.plan.sessionPairCounts[pairId] || 0) + 1;
      }
    });
    const side1Players = court.side1 && court.side1.players ? court.side1.players : [];
    const side2Players = court.side2 && court.side2.players ? court.side2.players : [];
    side1Players.forEach(function(a){
      side2Players.forEach(function(b){
        const key = getOpponentMemoryKey(a.id, b.id);
        if(key) state.plan.sessionOpponentCounts[key] = Number(state.plan.sessionOpponentCounts[key] || 0) + 1;
      });
    });
    if(court.kind === '2v1'){
      const solo = side1Players.length === 1 ? side1Players[0] : (side2Players.length === 1 ? side2Players[0] : null);
      if(solo) state.plan.sessionSolo2v1Counts[solo.id] = Number(state.plan.sessionSolo2v1Counts[solo.id] || 0) + 1;
    }
  }

  function updatePairSummaryFromCourt(court, winnerSideNumber){
    [1, 2].forEach(function(sideNumber){
      const side = sideNumber === 1 ? court.side1 : court.side2;
      if((side.players || []).length < 2) return;
      const key = getPairSummaryKey(side);
      if(!key) return;
      if(!state.pairSummary[key]){
        state.pairSummary[key] = { pairId:key, ids:(side.players || []).map(function(player){ return player.id; }).filter(Boolean).sort(), label:getTeamLabel(side), count:0, wins:0, losses:0, lastSeenAt:'' };
      }
      const summary = state.pairSummary[key];
      summary.pairId = key;
      summary.ids = (side.players || []).map(function(player){ return player.id; }).filter(Boolean).sort();
      summary.label = getTeamLabel(side);
      summary.count = Number(summary.count || 0) + 1;
      summary.wins = Number(summary.wins || 0) + (Number(winnerSideNumber) === sideNumber ? 1 : 0);
      summary.losses = Number(summary.losses || 0) + (Number(winnerSideNumber) !== sideNumber ? 1 : 0);
      summary.lastSeenAt = new Date().toISOString();
    });
  }

  function createFinishedBatchFromCurrent(){
    return {
      id: uid('finished-batch'),
      generatedAt: state.plan.generatedAt,
      completedAt: new Date().toISOString(),
      attendance: state.plan.attendance,
      format: state.plan.format,
      durationMinutes: state.plan.durationMinutes,
      activePairs: state.plan.current.filter(court => !courtMarkedNoGame(court) && court.kind === 'doubles').length,
      circumstantialSitOutPlayerIds: (state.plan.currentCircumstantialSitOutPlayerIds || []).slice(),
      optionalSitOutPlayerIds: (state.plan.currentOptionalSitOutPlayerIds || []).slice(),
      courts: state.plan.current.map(court => ({
        courtNumber: court.courtNumber,
        kind: court.kind,
        noGame: courtMarkedNoGame(court),
        side1Label: getTeamLabel(court.side1),
        side2Label: getTeamLabel(court.side2),
        score1: court.score1,
        score2: court.score2,
        winnerLabel: court.savedWinnerLabel || '',
        targetAreaText: court.targetAreaText || 'Full court',
        shotRestrictionText: getShotRestrictionText(court.shotRestrictionStage, court.shotRestrictions),
        hardshipRegistered: court.savedHardship || '',
        ratingSummary: court.savedRatingSummary || ''
      }))
    };
  }

  function allCurrentCourtsSaved(){
    ensureCurrentCourtSaveKeys();
    return !!state.plan.current.length && state.plan.current.every(function(court, index){ return courtSaved(court, index) || courtMarkedNoGame(court); });
  }

  function currentSetReadyForNext(){
    return !!(state && state.plan && state.plan.currentSetReadyForNext && state.plan.current && state.plan.current.length && allCurrentCourtsSaved());
  }

  function courtMarkedNoGame(court){
    return !!(court && (court.noGame || court.status === 'no-game'));
  }

  function getActiveCurrentCourtCount(){
    return (state.plan.current || []).filter(function(court){ return !courtMarkedNoGame(court); }).length;
  }

  function renderNextSetAction(){
    return '';
  }

  function ensureGeneratedCurrentSet(attendingPlayers, usedSet){
    const format = state.plan.format || 'doubles';
    const courtLimit = normaliseCourtLimit(state.plan.courtCount || 4, 1);
    let courts = buildCurrentCourtSet(attendingPlayers, format, usedSet, courtLimit).slice(0, courtLimit);
    if(attendingPlayers.length >= 2 && !courts.length){
      courts = format === 'singles'
        ? buildSinglesDayCourtSet(attendingPlayers, courtLimit).courts
        : buildDoublesDayCourtSet(attendingPlayers, courtLimit).courts;
      courts = (courts || []).filter(Boolean).slice(0, courtLimit).map((court, index) =>
        attachVariableBasePlayers(resetUnsubmittedCourtScoreDraft(
          evaluateCourtRestrictions(Object.assign({ courtNumber:index + 1 }, JSON.parse(JSON.stringify(court))))
        ))
      );
      courts = orderCourtsByLadder(courts);
    }
    return courts;
  }

  function rollFinishedGamesForward(){
    state.plan.finished = [createFinishedBatchFromCurrent()].concat(state.plan.finished || []).slice(0, 20);
    const attendingPlayers = getAttendingPlayers();
    if(attendingPlayers.length < 2){
      state.plan.current = [];
      state.plan.currentSavedSignatures = [];
      state.plan.currentSavedCourtKeys = [];
      state.plan.currentSetReadyForNext = false;
      state.plan.currentSitOutPlayerIds = [];
      state.plan.generatedAt = '';
      return;
    }
    syncPlanSettingsFromInputs();
    const usedSet = new Set((state.plan.usedCourtSignatures || []).slice());
    state.plan.current = [];
    state.plan.currentSavedSignatures = [];
    state.plan.currentSavedCourtKeys = [];
    state.plan.currentSetReadyForNext = false;
    state.plan.generatedAt = new Date().toISOString();
    state.plan.currentGenerationToken = uid('current-set');
    state.plan.blankCurrentScoreInputs = true;
    state.plan.generationIndex = Math.max(0, Math.round(Number(state.plan.generationIndex || 0))) + 1;
    advanceSpecialFourPlayerIndex(attendingPlayers, state.plan.format || 'doubles');
    if(attendingPlayers.length === 2){
      state.plan.twoPlayerFlipIndex = Math.max(0, Math.round(Number(state.plan.twoPlayerFlipIndex || 0) || 0)) + 1;
    }else{
      state.plan.twoPlayerFlipIndex = 0;
    }
    state.plan.current = ensureGeneratedCurrentSet(attendingPlayers, usedSet);
    refreshCurrentCourtRestrictionsFromMemory();
    clearGeneratedCourtDrafts();
    state.plan.generatedAt = state.plan.generatedAt || new Date().toISOString();
    state.plan.usedCourtSignatures = Array.from(usedSet).slice(-400);
    state.plan.currentSavedSignatures = [];
    state.plan.currentSavedCourtKeys = [];
    state.plan.currentSetReadyForNext = false;
    ensureCurrentCourtSaveKeys(false);
  }

  function generateNextSetFromCompletedCurrent(){
    if(!currentUserIsManager()) return;
    if(!currentSetReadyForNext()){
      setPlanAlert('The current set is not complete yet. Save all active courts or confirm No Game first.');
      return;
    }
    rollFinishedGamesForward();
    clearGeneratedCourtDrafts();
    setPlanAlert('Finished games were moved into Finished Games and the next current set was generated.');
    saveSessionData();
    renderAll();
    scheduleHardBlankCurrentScoreInputs(refs.currentGamesGrid);
  }

  function syncAllCurrentCourtDraftsFromInputs(){
    if(!refs.currentGamesGrid || !state || !state.plan || !Array.isArray(state.plan.current)) return;
    state.plan.current.forEach(function(court, index){
      if(!court || courtSaved(court, index)) return;
      syncCourtScoresFromInputs(index);
      syncCourtHardshipFromInput(index);
    });
  }

  function syncCourtScoresFromInputs(index){
    const court = state.plan.current[index];
    if(!court || !refs.currentGamesGrid) return;
    const score1Input = refs.currentGamesGrid.querySelector('[data-index="' + cssEscape(String(index)) + '"][data-score-side="1"]');
    const score2Input = refs.currentGamesGrid.querySelector('[data-index="' + cssEscape(String(index)) + '"][data-score-side="2"]');
    const generationToken = String(state.plan.currentGenerationToken || '');
    const inputMatchesGeneration = function(input){
      if(!input) return false;
      const inputToken = String(input.getAttribute('data-generation-token') || '');
      return !generationToken || !inputToken || inputToken === generationToken;
    };
    if(score1Input && inputMatchesGeneration(score1Input)){
      const raw1 = sanitizeScoreInput(score1Input);
      court.score1 = raw1 === '' ? null : Math.max(0, Math.min(MAX_SCORE, Math.round(safeNumber(raw1, 0))));
    }
    if(score2Input && inputMatchesGeneration(score2Input)){
      const raw2 = sanitizeScoreInput(score2Input);
      court.score2 = raw2 === '' ? null : Math.max(0, Math.min(MAX_SCORE, Math.round(safeNumber(raw2, 0))));
    }
    normalisePendingHardship(court);
  }

    function syncCourtHardshipFromInput(index){
    const court = state.plan.current[index];
    if(!court || !refs.currentGamesGrid) return '';
    const idx = cssEscape(String(index));
    let selected = '';

    const checked = refs.currentGamesGrid.querySelector('[data-index="' + idx + '"][data-hardship-option="true"]:checked');
    if(checked) selected = String(checked.value || '').trim();

    if(!selected){
      const store = refs.currentGamesGrid.querySelector('[data-index="' + idx + '"][data-hardship-store="true"]');
      if(store) selected = String(store.value || '').trim();
    }

    if(!selected){
      const button = refs.currentGamesGrid.querySelector('[data-save-court="' + idx + '"]');
      if(button) selected = String(button.getAttribute('data-hardship-value') || '').trim();
    }

    if(!selected){
      const wrap = refs.currentGamesGrid.querySelector('[data-hardship-wrap="' + idx + '"]');
      if(wrap) selected = String(wrap.getAttribute('data-selected-hardship') || '').trim();
    }

    if(!selected){
      const visible = refs.currentGamesGrid.querySelector('[data-hardship-wrap="' + idx + '"] .hardship-radio-group');
      const text = visible ? visible.textContent || '' : '';
      selected = hardshipValueFromVisibleText(text);
    }

    if(selected === 'movement' || selected === 'shots'){
      court.pendingHardship = selected;
      const store = refs.currentGamesGrid.querySelector('[data-index="' + idx + '"][data-hardship-store="true"]');
      if(store) store.value = selected;
      const button = refs.currentGamesGrid.querySelector('[data-save-court="' + idx + '"]');
      if(button) button.setAttribute('data-hardship-value', selected);
      const wrap = refs.currentGamesGrid.querySelector('[data-hardship-wrap="' + idx + '"]');
      if(wrap) wrap.setAttribute('data-selected-hardship', selected);
      return selected;
    }

    return String(court.pendingHardship || '').trim();
  }

  function getCourtPlayers(court){
    return ((court && court.side1 && court.side1.players) || []).concat((court && court.side2 && court.side2.players) || []);
  }

  function currentUserCanScoreCourt(court){
    if(currentUserIsManager()) return true;
    return getCourtPlayers(court).some(currentUserMatchesPlayer);
  }

  function refreshCurrentCourtCard(index){
    if(!refs.currentGamesGrid || !Array.isArray(state.plan.current)) return;
    const court = state.plan.current[index];
    if(!court) return;
    const selector = '[data-current-court-index="' + cssEscape(String(index)) + '"]';
    const existing = refs.currentGamesGrid.querySelector(selector);
    if(existing){
      existing.outerHTML = renderCourtCard(court, 'current', index);
      const fresh = refs.currentGamesGrid.querySelector(selector);
      enforceCurrentScoreInputsFromState(fresh || refs.currentGamesGrid);
      stabilizeHardshipSelects(fresh || refs.currentGamesGrid);
    }
  }

    async function saveCourtResult(index){
    const court = state.plan.current[index];
    if(!court){
      setPlanAlert('Save Results could not find this court. Regenerate the game plan and try again.');
      return;
    }
    if(!currentUserCanScoreCourt(court)){
      setPlanAlert('Save Results is limited to players on this court, the moderator, or an approved admin.');
      window.alert('Save Results is limited to players on this court, the moderator, or an approved admin.');
      return;
    }

    syncAllCurrentCourtDraftsFromInputs();
    syncCourtScoresFromInputs(index);
    const selectedHardshipFromDom = syncCourtHardshipFromInput(index);

    try{
      if(serverLoadAbortController && typeof serverLoadAbortController.abort === 'function') serverLoadAbortController.abort();
      serverLoadAbortController = null;
    }catch(_e){}

    const signature = court.signature || buildMatchupKey(court);
    if(courtSaved(court, index)){
      setPlanAlert('This court result has already been saved.');
      return;
    }
    if(court.score1 == null || court.score2 == null){
      window.alert('Enter both scores before saving a result.');
      return;
    }

    const score1 = Math.max(0, Math.min(MAX_SCORE, Math.round(safeNumber(court.score1, 0))));
    const score2 = Math.max(0, Math.min(MAX_SCORE, Math.round(safeNumber(court.score2, 0))));
    const scoreError = validateScores(score1, score2);
    if(scoreError){
      window.alert(scoreError);
      return;
    }

    court.score1 = score1;
    court.score2 = score2;
    let hardship = String(syncCourtHardshipFromInput(index) || selectedHardshipFromDom || court.pendingHardship || '').trim();
    if(hardship !== 'movement' && hardship !== 'shots') hardship = '';

    const hardshipIntent = getHardshipSaveIntent(court, score1, score2, hardship);
    if(hardshipIntent.requiresSelection && !hardship){
      setPlanAlert('Select Hardship Adjustment before saving this result. Ratings were not changed.');
      window.alert('Select Hardship Adjustment before saving this result. Ratings were not changed.');
      return;
    }

    const hardshipApplied = applyHardshipSaveIntent(court, signature, hardshipIntent);
    if(hardshipIntent.requiresSelection && !hardshipApplied){
      setPlanAlert('Hardship Adjustment could not be registered. Ratings were not changed.');
      window.alert('Hardship Adjustment could not be registered. Ratings were not changed.');
      return;
    }

    const evaluatedNow = evaluateCourtRestrictions(Object.assign({}, JSON.parse(JSON.stringify(court)), { score1:score1, score2:score2 }));
    Object.assign(court, evaluatedNow, { score1:score1, score2:score2, pendingHardship:hardship });

    if(hardshipIntent.requiresSelection && hardship){
      const verifiedEntry = getDominantHardshipEntryForCourt(court);
      if(hardshipIntent.action !== 'reduce' && !verifiedEntry){
        setPlanAlert('Hardship Adjustment failed verification. Ratings were not changed.');
        window.alert('Hardship Adjustment failed verification. Ratings were not changed.');
        return;
      }
    }

    markLocalChange();

    const winnerSideNumber = score1 > score2 ? 1 : 2;
    const winnerSide = winnerSideNumber === 1 ? court.side1 : court.side2;
    const ratingContext = hardshipIntent.ratingHold
      ? { summaryText:'Ratings unchanged - hardship side lost while an alteration was active; hardship is reduced instead.' }
      : applyRatingChanges(court, score1, score2);

    incrementCourtPlayerMatchCounts(court);
    updateRotationMemoryFromCourt(court);
    updatePairSummaryFromCourt(court, winnerSideNumber);
    court.savedWinnerLabel = getTeamLabel(winnerSide);
    court.savedHardship = hardshipIntent.requiresSelection ? (hardshipIntent.action === 'reduce' ? (hardship === 'movement' ? 'reducedMovement' : (hardship === 'shots' ? 'reducedShots' : '')) : hardship) : '';
    court.savedRatingSummary = ratingContext.summaryText;

    state.matches.unshift({
      id: uid('match'),
      createdAt: new Date().toISOString(),
      courtNumber: court.courtNumber,
      kind: court.kind,
      side1Label: getTeamLabel(court.side1),
      side2Label: getTeamLabel(court.side2),
      side1PlayerIds: (court.side1.players || []).map(function(player){ return player.id; }).filter(Boolean),
      side2PlayerIds: (court.side2.players || []).map(function(player){ return player.id; }).filter(Boolean),
      side1PairId: getPairIdFromPlayers(court.side1.players || []),
      side2PairId: getPairIdFromPlayers(court.side2.players || []),
      score1,
      score2,
      winnerLabel: getTeamLabel(winnerSide),
      targetAreaText: court.targetAreaText || 'Full court',
      shotRestrictionText: getShotRestrictionText(court.shotRestrictionStage),
      hardshipRegistered: court.savedHardship || '',
      ratingContext
    });

    markCourtSaved(court, index);
    const completedCurrentSet = allCurrentCourtsSaved();

    if(completedCurrentSet){
      rollFinishedGamesForward();
      clearGeneratedCourtDrafts();
      protectLocalCurrentState(5000);
      const serverSaved = await saveSessionData({ immediate:true, verify:true });
      if(!serverSaved){
        setPlanAlert('This result was not confirmed by the server. Reloading the authoritative Badminton state.');
        suppressServerHydrationUntil = 0;
        hydrateSessionFromServer();
        return;
      }
      setPlanAlert('All current games were submitted and confirmed by the server. Finished games were saved and the next set was generated.');
      renderAll();
      scheduleHardBlankCurrentScoreInputs(refs.currentGamesGrid);
      return;
    }

    state.plan.currentSetReadyForNext = false;
    protectLocalCurrentState(5000);
    const serverSaved = await saveSessionData({ immediate:true, verify:true });
    if(!serverSaved){
      setPlanAlert('This result was not confirmed by the server. Reloading the authoritative Badminton state.');
      suppressServerHydrationUntil = 0;
      hydrateSessionFromServer();
      return;
    }
    setPlanAlert('Court ' + String(index + 1) + ' saved on the server. Waiting for the remaining current court results.');
    refreshCurrentCourtCard(index);
    renderMatchHistory();
    renderStandings();
  }
  window.__baselineSaveCourtResult = saveCourtResult;
  window.__baselineBadmintonHardshipDebug = function(){
    let domHardships = [];
    try{
      domHardships = Array.from(document.querySelectorAll('[data-hardship="true"], [data-hardship-store="true"], [data-save-court]')).map(function(node){
        return {
          tag:node.tagName,
          index:node.getAttribute('data-index') || node.getAttribute('data-save-court') || '',
          checked:!!node.checked,
          value:node.value || node.getAttribute('value') || '',
          dataValue:node.getAttribute('data-hardship-value') || node.getAttribute('data-selected-hardship') || ''
        };
      });
    }catch(_e){}
    return {
      activeHardships: JSON.parse(JSON.stringify(getDominantHardshipLedger())),
      matchupMemory: JSON.parse(JSON.stringify(state.matchupMemory || {})),
      current: JSON.parse(JSON.stringify(state.plan && state.plan.current || [])),
      domHardships: domHardships
    };
  };

  let lastSaveCourtButtonActivation = { key:'', at:0 };

  function normaliseSaveCourtEvent(event){
    if(!event) return;
    try{ event.preventDefault(); }catch(_e){}
    try{ event.stopPropagation(); }catch(_e){}
    try{ if(typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation(); }catch(_e){}
  }

  function handleSaveCourtButton(button, event){
    normaliseSaveCourtEvent(event);
    if(!button || button.disabled) return false;
    const index = Number(button.getAttribute('data-save-court'));
    if(Number.isNaN(index)) return false;
    const signature = String(button.getAttribute('data-save-signature') || '');
    const key = String(index) + '::' + signature;
    const now = Date.now();
    if(lastSaveCourtButtonActivation.key === key && now - lastSaveCourtButtonActivation.at < 600) return false;
    lastSaveCourtButtonActivation = { key, at:now };
    Promise.resolve(saveCourtResult(index)).catch(function(error){
      console.error('Save Results failed', error);
      const message = error && error.message ? error.message : String(error || 'unknown error');
      try{ setPlanAlert('Save Results failed: ' + message); }catch(_e){}
      window.alert('Save Results failed: ' + message);
    });
    return false;
  }

  window.BASELINE_saveCourtResultButton = function(event, button){
    return handleSaveCourtButton(button, event);
  };

  function renderFinishedBatch(batch, index){
    const rows = (batch.courts || []).map(court => {
      if(court.noGame){
        return '<tr>' +
          '<td><strong>' + escapeHtml('Court ' + court.courtNumber + ' · No Game') + '</strong><div class="note">' + escapeHtml((court.side1Label || '') + ' vs ' + (court.side2Label || '')) + '</div></td>' +
          '<td>No game</td>' +
          '<td>No Game</td>' +
          '<td><div class="note">Court was confirmed inactive.</div></td>' +
          '<td></td>' +
          '<td>No rating change</td>' +
        '</tr>';
      }
      const rules = ['<div class="note">Target area: ' + escapeHtml(court.targetAreaText || 'Full court') + '</div>'];
      if(court.shotRestrictionText) rules.push('<div class="note">Restricted Shots: ' + escapeHtml(court.shotRestrictionText) + '</div>');
      return '<tr>' +
        '<td><strong>' + escapeHtml('Court ' + court.courtNumber + ' · ' + (court.kind === '2v1' ? '2 vs 1' : court.kind)) + '</strong><div class="note">' + escapeHtml(court.side1Label + ' vs ' + court.side2Label) + '</div></td>' +
        '<td>' + escapeHtml(String(court.score1)) + ' - ' + escapeHtml(String(court.score2)) + '</td>' +
        '<td>' + escapeHtml(court.winnerLabel) + '</td>' +
        '<td>' + rules.join('') + '</td>' +
        '<td>' + escapeHtml(getHardshipLabel(court.hardshipRegistered)) + '</td>' +
        '<td>' + escapeHtml(court.ratingSummary) + '</td>' +
      '</tr>';
    }).join('');
    const activePairs = Number(batch.activePairs || 0);
    const circumstantialSitOuts = Array.isArray(batch.circumstantialSitOutPlayerIds) ? batch.circumstantialSitOutPlayerIds.length : 0;
    const optionalSitOuts = Array.isArray(batch.optionalSitOutPlayerIds) ? batch.optionalSitOutPlayerIds.length : 0;
    return '<div class="finished-batch">' +
      '<div class="finished-batch-head"><div><div class="finished-batch-title">Finished Set ' + escapeHtml(String(index + 1)) + '</div><div class="note">Generated ' + escapeHtml(formatDateTime(batch.generatedAt)) + ' · Completed ' + escapeHtml(formatDateTime(batch.completedAt)) + '</div></div><div class="metric-strip"><span class="metric-chip"><strong>' + escapeHtml(String((batch.courts || []).length)) + '</strong> Courts</span><span class="metric-chip"><strong>' + escapeHtml(batch.format === 'singles' ? 'Singles' : 'Doubles') + '</strong> Format</span><span class="metric-chip"><strong>' + escapeHtml(String(activePairs)) + '</strong> Active pairs</span><span class="metric-chip"><strong>' + escapeHtml(String(circumstantialSitOuts)) + '</strong> Circumstantial sit-outs</span><span class="metric-chip"><strong>' + escapeHtml(String(optionalSitOuts)) + '</strong> Optional sit-outs</span></div></div>' +
      '<div class="table-wrap"><table class="finished-summary-table"><colgroup><col style="width:28%"/><col style="width:12%"/><col style="width:18%"/><col style="width:20%"/><col style="width:12%"/><col style="width:10%"/></colgroup><thead><tr><th>Court</th><th>Score</th><th>Winner</th><th>Altered rules</th><th>Hardship Adjustment</th><th>Rating shift</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
    '</div>';
  }

  function renderFinishedGames(){
    if(!state.plan.finished.length){
      refs.finishedGamesWrap.innerHTML = '<div class="empty-state">No finished game batches yet.</div>';
      return;
    }
    refs.finishedGamesWrap.innerHTML = '<div class="finished-details"><div class="finished-details-body">' + state.plan.finished.map(renderFinishedBatch).join('') + '</div></div>';
  }

  function renderGamePlan(){
    if(pageIsLeaving) return;
    normalizeAttendingPlayerIds();
    capCurrentCourtsToCourtLimit();
    const manager = currentUserIsManager();
    refs.planFormatSelect.value = state.plan.format || 'doubles';
    refs.planDurationSelect.value = String(state.plan.durationMinutes || 60);
    refs.planCourtCountInput.value = String(state.plan.courtCount || 4);
    if(refs.gamePlanSetupCard) refs.gamePlanSetupCard.hidden = false;
    if(refs.generatePlanBtn){
      refs.generatePlanBtn.hidden = false;
      refs.generatePlanBtn.disabled = !manager;
      refs.generatePlanBtn.title = manager ? '' : 'Only the moderator or an approved Badminton Sessions admin can generate a new game plan.';
    }
    [refs.planFormatSelect, refs.planDurationSelect, refs.planCourtCountInput].forEach(function(input){ if(input) input.disabled = !manager; });
    renderAttendanceSelector();
    refreshCurrentCourtRestrictionsFromMemory();
    const currentCourtCount = state.plan.current.length;
    refs.currentGamesGrid.setAttribute('data-court-count', String(currentCourtCount));
    refs.currentGamesGrid.classList.toggle('has-current-courts', currentCourtCount > 0);
    refs.currentGamesGrid.classList.toggle('has-single-current-court', currentCourtCount === 1);
    refs.currentGamesGrid.innerHTML = currentCourtCount
      ? state.plan.current.map((court, index) => renderCourtCard(court, 'current', index)).join('')
      : '<div class="empty-state">No current games generated yet. A moderator or approved admin can create the next plan from the Game Plan Generator.</div>';
    if(state.plan.blankCurrentScoreInputs){
      scheduleHardBlankCurrentScoreInputs(refs.currentGamesGrid);
      state.plan.blankCurrentScoreInputs = false;
    }else{
      enforceCurrentScoreInputsFromState(refs.currentGamesGrid);
    }
    renderCurrentSitOutInfo();
    renderFinishedGames();
    bindPlanActions();
    syncGamePlanSubtabVisibility();
  }

  function syncGamePlanSubtabVisibility(){
    const active = document.querySelector('.gameplan-subtab[aria-selected="true"]');
    const target = active ? active.getAttribute('data-gameplan-tab') : 'plan';
    document.querySelectorAll('[data-gameplan-panel]').forEach(function(panel){
      panel.classList.toggle('active', panel.getAttribute('data-gameplan-panel') === target);
    });
  }

  function wireGamePlanSubtabs(){
    document.querySelectorAll('.gameplan-subtab').forEach(function(button){
      button.addEventListener('click', function(){
        const target = button.getAttribute('data-gameplan-tab');
        document.querySelectorAll('.gameplan-subtab').forEach(function(tab){ tab.setAttribute('aria-selected', String(tab === button)); });
        document.querySelectorAll('[data-gameplan-panel]').forEach(function(panel){ panel.classList.toggle('active', panel.getAttribute('data-gameplan-panel') === target); });
      });
    });
  }

    function bindPlanActions(){
    if(refs.currentGamesGrid.dataset.bound === 'true') return;
    refs.currentGamesGrid.dataset.bound = 'true';

    const commitHardshipChoice = function(target){
      const option = target && target.closest ? target.closest('[data-hardship-option]') : null;
      if(!option) return;
      const index = Number(option.getAttribute('data-index'));
      const court = state.plan.current[index];
      if(!court || courtSaved(court, index) || !currentUserCanScoreCourt(court)) return;
      const selectedValue = String(option.value || '').trim();
      if(selectedValue !== 'movement' && selectedValue !== 'shots') return;
      court.pendingHardship = selectedValue;
      const idx = cssEscape(String(index));
      const wrap = refs.currentGamesGrid.querySelector('[data-hardship-wrap="' + idx + '"]');
      if(wrap) wrap.setAttribute('data-selected-hardship', selectedValue);
      const store = refs.currentGamesGrid.querySelector('[data-index="' + idx + '"][data-hardship-store="true"]');
      if(store) store.value = selectedValue;
      const button = refs.currentGamesGrid.querySelector('[data-save-court="' + idx + '"]');
      if(button) button.setAttribute('data-hardship-value', selectedValue);
    };

    const handleScoreEdit = function(event){
      const input = event.target.closest('[data-score-side]');
      if(!input) return;
      const index = Number(input.getAttribute('data-index'));
      const court = state.plan.current[index];
      if(!court || courtSaved(court, index) || !currentUserCanScoreCourt(court)) return;
      syncCourtScoresFromInputs(index);
      refreshCourtInputUi(index);
    };

    refs.currentGamesGrid.addEventListener('input', handleScoreEdit);
    refs.currentGamesGrid.addEventListener('change', handleScoreEdit);
    refs.currentGamesGrid.addEventListener('input', function(event){ commitHardshipChoice(event.target); }, true);
    refs.currentGamesGrid.addEventListener('change', function(event){ commitHardshipChoice(event.target); }, true);
    refs.currentGamesGrid.addEventListener('click', function(event){ commitHardshipChoice(event.target); }, true);

    refs.currentGamesGrid.addEventListener('change', function(event){
      const sitout = event.target.closest('[data-court-sitout-player]');
      if(sitout){
        const index = Number(sitout.getAttribute('data-court-sitout-player'));
        if(Number.isNaN(index)) return;
        applyCourtSitOutSelection(index);
        return;
      }
      const noGame = event.target.closest('[data-court-no-game-slider]');
      if(noGame){
        const index = Number(noGame.getAttribute('data-court-no-game-slider'));
        if(Number.isNaN(index)) return;
        if(Number(noGame.value || 0) >= 95){
          requestNoGameConfirmation(index, noGame);
        }
      }
    });

    refs.currentGamesGrid.addEventListener('click', function(event){
      const next = event.target.closest('[data-generate-next-set]');
      if(next){
        event.preventDefault();
        event.stopPropagation();
        generateNextSetFromCompletedCurrent();
        return;
      }
      const modalAction = event.target.closest('[data-no-game-action]');
      if(modalAction){
        event.preventDefault();
        event.stopPropagation();
        handleNoGameDialogAction(modalAction);
        return;
      }
      const button = event.target.closest('[data-save-court]');
      if(!button) return;
      handleSaveCourtButton(button, event);
    });
  }

  function addPlayer(){
    if(!currentUserIsManager()){
      window.alert('Only the site developer or approved admins can add players.');
      return;
    }
    const name = formatPersonName(refs.playerNameInput.value);
    if(!name){
      window.alert('Enter a player name first.');
      return;
    }
    state.players.push({ id: uid('player'), name, rating: START_RATING, playerRating: START_RATING, loginUsername:'', loginEmail:'', badmintonSessionsAdmin:false, matchCount:0, doublesDaySinglesOptOut:false, doublesDaySoloOptOut:false, createdAt:new Date().toISOString() });
    refs.playerNameInput.value = '';
    saveSessionData();
    renderAll();
  }

  function renderAdminStar(player){
    if(isModeratorPlayer(player)) return '<span class="admin-star admin-star--developer" title="Moderator">★</span>';
    if(isPlayerAdmin(player)) return '<span class="admin-star admin-star--admin" title="Badminton Sessions admin">★</span>';
    return '';
  }

  function renderAdminStarToggle(player){
    if(!currentUserIsManager() || isModeratorPlayer(player)) return renderAdminStar(player);
    return '<label class="admin-star-toggle" title="Toggle Badminton Sessions admin"><input data-player-admin="' + escapeHtml(player.id) + '" type="checkbox"' + (isPlayerAdmin(player) ? ' checked' : '') + '/><span class="admin-star admin-star--admin" aria-hidden="true">★</span><span class="hidden">Badminton Sessions admin</span></label>';
  }

  function normalizePairSummaryKeys(){
    if(!state.pairSummary || typeof state.pairSummary !== 'object') state.pairSummary = {};
    const normalized = {};
    Object.keys(state.pairSummary).forEach(function(key){
      const summary = state.pairSummary[key] && typeof state.pairSummary[key] === 'object' ? state.pairSummary[key] : {};
      let pairId = String(summary.pairId || '');
      if(!pairId || !pairId.startsWith('pair:')){
        const names = String(summary.label || '').split('/').map(function(name){ return name.trim(); }).filter(Boolean);
        if(names.length === 2){
          const players = names.map(getPlayerByNameForRatingMigration).filter(Boolean);
          pairId = getPairIdFromPlayers(players);
        }
      }
      if(!pairId) return;
      const existing = normalized[pairId] || { pairId:pairId, ids:[], label:getPairLabelFromId(pairId), count:0, wins:0, losses:0, lastSeenAt:'' };
      existing.ids = Array.isArray(summary.ids) && summary.ids.every(function(id){ return !!getPlayer(id); })
        ? summary.ids.slice().sort()
        : String(pairId).replace(/^pair:/, '').split('::').filter(Boolean);
      existing.label = getPairLabelFromId(pairId);
      existing.count += Number(summary.count || 0);
      existing.wins += Number(summary.wins || 0);
      existing.losses += Number(summary.losses || 0);
      if(String(summary.lastSeenAt || '') > String(existing.lastSeenAt || '')) existing.lastSeenAt = summary.lastSeenAt;
      normalized[pairId] = existing;
    });
    state.pairSummary = normalized;
  }

  function renderPlayers(){
    const wrap = refs.playersTableWrap;
    const manager = currentUserIsManager();
    migrateKnownModeratorPlayer();
    normalizePlayerPreferenceFlags();
    ensureRatingStores();
    normalizePairSummaryKeys();
    if(!state.players.length){
      wrap.innerHTML = manager ? '<div class="empty-state">Add players to begin building the session.</div>' : '<div class="empty-state">No players have been added yet.</div>';
      return;
    }
    const rows = state.players.slice().sort((a, b) => getPlayerRating(b) - getPlayerRating(a) || a.name.localeCompare(b.name)).map(player => {
      const displayName = isModeratorPlayer(player) ? 'Peter Bates-Wilkinson' : player.name;
      const ratingCell = manager
        ? ('<td class="small-cell"><input data-player-rating="' + escapeHtml(player.id) + '" type="number" min="0" max="50" step="0.5" value="' + escapeHtml(String(getPlayerRating(player))) + '"/></td>')
        : ('<td class="small-cell">' + escapeHtml(String(getPlayerRating(player))) + '</td>');
      const loginCell = manager
        ? ('<td>' + renderLoginSelect(player) + '</td>')
        : ('<td>' + escapeHtml(isModeratorPlayer(player) ? SITE_MODERATOR_CANONICAL_LOGIN : (player.loginUsername || '—')) + '</td>');
      const prefCell = '<td>' + renderPlayerPreferenceControls(player) + '</td>';
      return '<tr><td><strong>' + escapeHtml(displayName) + '</strong>' + renderAdminStarToggle(player) + '</td>' + ratingCell + loginCell + prefCell + (manager ? '<td class="small-cell player-actions"><div class="player-action-row"><button class="action tight secondary" type="button" data-player-save="' + escapeHtml(player.id) + '">Save</button>' + (isModeratorPlayer(player) ? '' : '<button class="action tight danger" type="button" data-player-remove="' + escapeHtml(player.id) + '">Remove</button>') + '</div></td>' : '') + '</tr>';
    }).join('');
    const head = manager
      ? '<thead><tr><th>Player Name</th><th>Player Rating</th><th>Linked login</th><th>Doubles-day preferences</th><th class="player-actions-head">Actions</th></tr></thead>'
      : '<thead><tr><th>Player Name</th><th>Player Rating</th><th>Linked login</th><th>Doubles-day preferences</th></tr></thead>';
    const pairRows = Object.entries(state.pairRatings || {}).sort(function(a, b){
      return Number(b[1]) - Number(a[1]) || getPairLabelFromId(a[0]).localeCompare(getPairLabelFromId(b[0]));
    }).map(function(entry){
      const summary = state.pairSummary && state.pairSummary[entry[0]] ? state.pairSummary[entry[0]] : {};
      const games = Number(summary.count || 0);
      const wins = Number(summary.wins || 0);
      const losses = Number(summary.losses || 0);
      const last = summary.lastSeenAt ? formatDateTime(summary.lastSeenAt) : 'Not yet played';
      return '<tr><td><strong>' + escapeHtml(getPairLabelFromId(entry[0])) + '</strong></td><td class="small-cell">' + escapeHtml(clampRating(entry[1]).toFixed(1)) + '</td><td class="small-cell">' + escapeHtml(String(games)) + '</td><td class="small-cell">' + escapeHtml(String(wins) + '-' + String(losses)) + '</td><td>' + escapeHtml(last) + '</td></tr>';
    }).join('');
    wrap.innerHTML = '<table>' + head + '<tbody>' + rows + '</tbody></table>' +
      '<hr class="rule"/><h3>Pairs</h3><p class="note">Each partnership has one canonical Pair ID, regardless of player order.</p>' +
      '<div class="table-wrap"><table><thead><tr><th>Pair</th><th>Pair Rating</th><th>Games together</th><th>W-L</th><th>Last played</th></tr></thead><tbody>' +
      (pairRows || '<tr><td colspan="5">No pair ratings yet.</td></tr>') + '</tbody></table></div>';
  }

  function bindRosterActions(){
    refs.playersTableWrap.querySelectorAll('[data-player-admin]').forEach(input => {
      input.addEventListener('change', function(){
        const player = getPlayer(input.getAttribute('data-player-admin'));
        if(!player || !currentUserIsManager() || isModeratorPlayer(player)) return renderAll();
        if(input.checked && !String(player.loginUsername || '').trim()){
          input.checked = false;
          window.alert('Link a login before making this player an admin.');
          return;
        }
        player.badmintonSessionsAdmin = !!input.checked;
        saveSessionData();
        renderAll();
      });
    });
    refs.playersTableWrap.querySelectorAll('[data-player-pref]').forEach(input => {
      input.addEventListener('change', function(){
        const player = getPlayer(input.getAttribute('data-player-id'));
        if(!player || !currentUserCanEditPlayerPrefs(player)){
          renderAll();
          return;
        }
        if(input.getAttribute('data-player-pref') === 'singles'){
          player.doublesDaySinglesOptOut = !!input.checked;
        }
        if(input.getAttribute('data-player-pref') === 'solo'){
          player.doublesDaySoloOptOut = !!input.checked;
        }
        saveSessionData();
        renderAll();
      });
    });
    refs.playersTableWrap.querySelectorAll('[data-player-save]').forEach(button => {
      button.addEventListener('click', function(){
        const playerId = button.getAttribute('data-player-save');
        const player = getPlayer(playerId);
        if(!player) return;
        if(!currentUserIsManager()) return;
        const ratingInput = refs.playersTableWrap.querySelector('[data-player-rating="' + cssEscape(playerId) + '"]');
        const loginInput = refs.playersTableWrap.querySelector('[data-player-login="' + cssEscape(playerId) + '"]');
        const adminInput = refs.playersTableWrap.querySelector('[data-player-admin="' + cssEscape(playerId) + '"]');
        setPlayerRating(player, ratingInput ? ratingInput.value : getPlayerRating(player));
        player.loginUsername = normalizeKnownLoginName(loginInput ? loginInput.value : player.loginUsername || '');
        if(isModeratorPlayer(player)){
          player.name = 'Peter Bates-Wilkinson';
          player.loginUsername = SITE_MODERATOR_CANONICAL_LOGIN;
          player.badmintonSessionsAdmin = true;
        }else if(adminInput){
          player.badmintonSessionsAdmin = !!adminInput.checked && !!String(player.loginUsername || '').trim();
        }
        saveSessionData();
        renderAll();
      });
    });
    refs.playersTableWrap.querySelectorAll('[data-player-remove]').forEach(button => {
      button.addEventListener('click', function(){
        if(!currentUserIsManager()) return;
        const playerId = button.getAttribute('data-player-remove');
        const existing = getPlayer(playerId);
        if(isModeratorPlayer(existing)) return;
        state.players = state.players.filter(player => player.id !== playerId);
        state.plan.attendingPlayerIds = (state.plan.attendingPlayerIds || []).filter(id => id !== playerId);
        state.plan.lastSitOutPlayerIds = (state.plan.lastSitOutPlayerIds || []).filter(id => id !== playerId);
        state.plan.currentSitOutPlayerIds = (state.plan.currentSitOutPlayerIds || []).filter(id => id !== playerId);
        if(state.plan.sitOutCounts && Object.prototype.hasOwnProperty.call(state.plan.sitOutCounts, playerId)) delete state.plan.sitOutCounts[playerId];
        saveSessionData();
        renderAll();
      });
    });
  }

  function formatCourtKindLabel(kind){
    if(kind === '2v1') return '2 vs 1';
    return kind ? (kind.charAt(0).toUpperCase() + kind.slice(1)) : 'Game';
  }

  function getPairHandlingBatchSummary(courts){
    const counts = { doubles:0, twoVsOne:0, singles:0 };
    (courts || []).forEach(court => {
      if(court.kind === 'doubles') counts.doubles += 1;
      else if(court.kind === '2v1') counts.twoVsOne += 1;
      else if(court.kind === 'singles') counts.singles += 1;
    });
    const parts = [];
    if(counts.doubles) parts.push(String(counts.doubles) + ' doubles');
    if(counts.twoVsOne) parts.push(String(counts.twoVsOne) + ' 2 vs 1');
    if(counts.singles) parts.push(String(counts.singles) + ' singles');
    return parts.length ? parts.join(' · ') : 'No courts';
  }

  function renderPairHandlingBatch(title, metaLine, courts){
    if(!courts || !courts.length) return '';
    const rows = courts.map(court => {
      const side1Label = court.side1Label || getTeamLabel(court.side1);
      const side2Label = court.side2Label || getTeamLabel(court.side2);
      return '<div class="pair-summary-item">' +
        '<strong>' + escapeHtml('Court ' + court.courtNumber + ' · ' + formatCourtKindLabel(court.kind)) + '</strong>' +
        '<div class="note">Side 1: ' + escapeHtml(side1Label) + '</div>' +
        '<div class="note">Side 2: ' + escapeHtml(side2Label) + '</div>' +
      '</div>';
    }).join('');
    return '<details class="finished-details"><summary><span>' + escapeHtml(title) + '</span><span>' + escapeHtml(getPairHandlingBatchSummary(courts)) + '</span></summary><div class="finished-details-body">' +
      (metaLine ? '<div class="note">' + escapeHtml(metaLine) + '</div>' : '') +
      rows +
    '</div></details>';
  }

  function renderPairSummary(){
    const wrap = refs.pairSummaryWrap;
    if(!wrap) return;
    const sections = [];
    if(state.plan.current.length){
      sections.push(renderPairHandlingBatch(
        'Current generated set',
        state.plan.generatedAt ? ('Generated ' + formatDateTime(state.plan.generatedAt)) : '',
        state.plan.current
      ));
    }
    (state.plan.finished || []).forEach((batch, index) => {
      sections.push(renderPairHandlingBatch(
        'Finished set ' + String(index + 1),
        'Generated ' + formatDateTime(batch.generatedAt) + ' · Completed ' + formatDateTime(batch.completedAt),
        batch.courts || []
      ));
    });
    const items = Object.values(state.pairSummary || {}).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
    if(items.length){
      const recurring = items.slice(0, 12).map(item => '<div class="pair-summary-item"><strong>' + escapeHtml(item.label) + '</strong><div class="note">Seen ' + escapeHtml(String(item.count)) + ' time(s) · Last seen ' + escapeHtml(formatDateTime(item.lastSeenAt)) + '</div></div>').join('');
      sections.push('<details class="finished-details"><summary><span>Recurring system pairs</span><span>' + escapeHtml(String(Math.min(items.length, 12))) + '</span></summary><div class="finished-details-body">' + recurring + '</div></details>');
    }
    wrap.innerHTML = sections.length ? sections.join('') : '<div class="empty-state">No generated pair handling summaries yet.</div>';
  }

  function getZoneChecklistMarkup(prefix, selected){
    return '<div class="rule-zone-grid">' + DOUBLES_ZONES.map(zone => '<label class="rule-zone-pill"><input type="checkbox" data-zone-checkbox="' + escapeHtml(prefix) + '" value="' + escapeHtml(zone) + '"' + (selected.includes(zone) ? ' checked' : '') + '/><span>' + escapeHtml(zone) + '</span></label>').join('') + '</div>';
  }

  function getCheckedZones(prefix){
    return Array.from(refs.ruleAdminWrap.querySelectorAll('[data-zone-checkbox="' + cssEscape(prefix) + '"]:checked')).map(input => input.value);
  }

  function getShotSelectMarkup(id, value){
    const normalized = String(value || '0');
    return '<select id="' + id + '">' +
      '<option value="0"' + (normalized === '0' ? ' selected' : '') + '>No shot restriction</option>' +
      '<option value="1"' + (normalized === '1' ? ' selected' : '') + '>No Smashes or Downward Shots</option>' +
    '</select>';
  }

  function renderRuleAdmin(){
    if(!refs.ruleAdminWrap) return;
    if(!currentUserIsManager()){
      refs.ruleAdminWrap.innerHTML = '<div class="empty-state">Developer-only altered rule controls.</div>';
      return;
    }
    const playerOptions = state.players.slice().sort((a, b) => a.name.localeCompare(b.name)).map(player => '<option value="' + escapeHtml(player.id) + '">' + escapeHtml(player.name) + '</option>').join('');
    const globalItems = Object.entries(state.ruleAdmin.globalRules || {}).map(([key, rule]) => '<div class="rule-admin-item"><div class="rule-admin-item-head"><div><strong>' + escapeHtml(rule.label || getSideRuleLabelFromKey(key)) + '</strong><div class="note">Global rule</div></div><button class="action tight danger" type="button" data-remove-global-rule="' + escapeHtml(key) + '">Remove</button></div><div class="note">Target area: ' + escapeHtml(getTargetAreaTextFromZones(rule.targetZones || [], rule.mode || 'doubles')) + '</div>' + (rule.shotRestrictionStage ? '<div class="note">Restricted Shots: ' + escapeHtml(getShotRestrictionText(rule.shotRestrictionStage)) + '</div>' : '') + '</div>').join('');
    const matchupItems = Object.entries(state.ruleAdmin.matchupOverrides || {}).map(([key, rule]) => '<div class="rule-admin-item"><div class="rule-admin-item-head"><div><strong>' + escapeHtml(rule.label || key) + '</strong><div class="note">Specific matchup rule</div></div><button class="action tight danger" type="button" data-remove-matchup-rule="' + escapeHtml(key) + '">Remove</button></div><div class="note">Target area: ' + escapeHtml(getTargetAreaTextFromZones(rule.targetZones || [], rule.mode || 'doubles')) + '</div>' + (rule.shotRestrictionStage ? '<div class="note">Restricted Shots: ' + escapeHtml(getShotRestrictionText(rule.shotRestrictionStage)) + '</div>' : '') + '</div>').join('');
    refs.ruleAdminWrap.innerHTML = '<div class="rule-admin-grid">' +
      '<div class="rule-admin-card"><h3>Global Player / Pair Rule</h3><div class="select-note">Choose a player or exact pair, then choose the target boxes and shot limits to use for that player or pair when altered rules are applied.</div><label>Player 1<select id="globalRulePlayer1"><option value="">Select player</option>' + playerOptions + '</select></label><label>Player 2 (optional for a pair)<select id="globalRulePlayer2"><option value="">Single player only</option>' + playerOptions + '</select></label><label>Target boxes</label>' + getZoneChecklistMarkup('globalZones', []) + '<label>Restricted shots' + getShotSelectMarkup('globalRuleShotStage', '0') + '</label><button class="action" type="button" id="saveGlobalRuleBtn">Save Global Rule</button><div class="rule-admin-list">' + (globalItems || '<div class="empty-state">No global rules saved.</div>') + '</div></div>' +
      '<div class="rule-admin-card"><h3>Specific Matchup Rule</h3><div class="select-note">Set an exact side-vs-side rule, whether or not rating is the reason for it.</div><div class="grid-two"><label>Side 1 · Player 1<select id="matchStrong1"><option value="">Select player</option>' + playerOptions + '</select></label><label>Side 1 · Player 2 (optional)<select id="matchStrong2"><option value="">None</option>' + playerOptions + '</select></label><label>Side 2 · Player 1<select id="matchWeak1"><option value="">Select player</option>' + playerOptions + '</select></label><label>Side 2 · Player 2 (optional)<select id="matchWeak2"><option value="">None</option>' + playerOptions + '</select></label></div><label>Target boxes</label>' + getZoneChecklistMarkup('matchZones', []) + '<label>Restricted shots' + getShotSelectMarkup('matchRuleShotStage', '0') + '</label><button class="action" type="button" id="saveMatchupRuleBtn">Save Matchup Rule</button><div class="rule-admin-list">' + (matchupItems || '<div class="empty-state">No exact matchup rules saved.</div>') + '</div></div>' +
    '</div>';
  }

  function buildMatchupRulePayload(){
    const strong1 = refs.ruleAdminWrap.querySelector('#matchStrong1').value;
    const strong2 = refs.ruleAdminWrap.querySelector('#matchStrong2').value;
    const weak1 = refs.ruleAdminWrap.querySelector('#matchWeak1').value;
    const weak2 = refs.ruleAdminWrap.querySelector('#matchWeak2').value;
    const strongIds = [strong1, strong2].filter(Boolean);
    const weakIds = [weak1, weak2].filter(Boolean);
    if(!strongIds.length || !weakIds.length) return null;
    if(new Set(strongIds.concat(weakIds)).size !== strongIds.length + weakIds.length) return null;
    const mode = strongIds.length === 1 && weakIds.length === 1 ? 'singles' : 'doubles';
    const targetZones = sanitizeZones(getCheckedZones('matchZones'), mode);
    return {
      key: buildSpecificMatchupKey(strongIds, weakIds),
      label: strongIds.map(id => (getPlayer(id) || {}).name || id).join(' / ') + ' vs ' + weakIds.map(id => (getPlayer(id) || {}).name || id).join(' / '),
      mode,
      targetZones,
      shotRestrictionStage: Number(refs.ruleAdminWrap.querySelector('#matchRuleShotStage').value || 0)
    };
  }

  function bindRuleAdminActions(){
    if(!refs.ruleAdminWrap || !currentUserIsManager()) return;
    const saveGlobalBtn = refs.ruleAdminWrap.querySelector('#saveGlobalRuleBtn');
    if(saveGlobalBtn){
      saveGlobalBtn.addEventListener('click', function(){
        const p1 = refs.ruleAdminWrap.querySelector('#globalRulePlayer1').value;
        const p2 = refs.ruleAdminWrap.querySelector('#globalRulePlayer2').value;
        if(!p1){ window.alert('Select at least one player.'); return; }
        if(p2 && p1 === p2){ window.alert('Choose a different second player or leave it blank.'); return; }
        const ids = [p1, p2].filter(Boolean).sort();
        const mode = ids.length === 1 ? 'singles' : 'doubles';
        const targetZones = sanitizeZones(getCheckedZones('globalZones'), mode);
        if(!targetZones.length){ window.alert('Choose at least one target box.'); return; }
        state.ruleAdmin.globalRules[ids.join('::')] = {
          label: ids.map(id => (getPlayer(id) || {}).name || id).join(' / '),
          mode,
          targetZones,
          shotRestrictionStage: Number(refs.ruleAdminWrap.querySelector('#globalRuleShotStage').value || 0)
        };
        saveSessionData();
        renderAll();
      });
    }
    const saveMatchBtn = refs.ruleAdminWrap.querySelector('#saveMatchupRuleBtn');
    if(saveMatchBtn){
      saveMatchBtn.addEventListener('click', function(){
        const payload = buildMatchupRulePayload();
        if(!payload){ window.alert('Choose two valid sides without reusing the same player.'); return; }
        if(!payload.targetZones.length){ window.alert('Choose at least one target box.'); return; }
        state.ruleAdmin.matchupOverrides[payload.key] = payload;
        saveSessionData();
        renderAll();
      });
    }
    refs.ruleAdminWrap.querySelectorAll('[data-remove-global-rule]').forEach(button => {
      button.addEventListener('click', function(){
        delete state.ruleAdmin.globalRules[button.getAttribute('data-remove-global-rule')];
        saveSessionData();
        renderAll();
      });
    });
    refs.ruleAdminWrap.querySelectorAll('[data-remove-matchup-rule]').forEach(button => {
      button.addEventListener('click', function(){
        delete state.ruleAdmin.matchupOverrides[button.getAttribute('data-remove-matchup-rule')];
        saveSessionData();
        renderAll();
      });
    });
  }

  function renderStandings(){
    ensureRatingStores();
    const playerRows = state.players.slice().sort((a, b) => getPlayerRating(b) - getPlayerRating(a) || a.name.localeCompare(b.name)).map((player, index) => '<tr><td class="small-cell">' + escapeHtml(String(index + 1)) + '</td><td>' + escapeHtml(isModeratorPlayer(player) ? 'Peter Bates-Wilkinson' : player.name) + renderAdminStar(player) + '</td><td class="small-cell">' + escapeHtml(String(getPlayerRating(player))) + '</td><td>' + escapeHtml(isModeratorPlayer(player) ? SITE_MODERATOR_CANONICAL_LOGIN : (player.loginUsername || '—')) + '</td></tr>').join('');
    const pairRows = Object.entries(state.pairRatings || {}).sort((a,b) => Number(b[1]) - Number(a[1]) || getPairLabelFromId(a[0]).localeCompare(getPairLabelFromId(b[0]))).map((entry, index) => '<tr><td class="small-cell">' + escapeHtml(String(index + 1)) + '</td><td>' + escapeHtml(getPairLabelFromId(entry[0])) + '</td><td class="small-cell">' + escapeHtml(clampRating(entry[1]).toFixed(1)) + '</td></tr>').join('');
    const oneVsTwoRows = state.players.slice().sort((a,b) => getOneVsTwoRatingForPlayer(b) - getOneVsTwoRatingForPlayer(a) || a.name.localeCompare(b.name)).map((player, index) => '<tr><td class="small-cell">' + escapeHtml(String(index + 1)) + '</td><td>' + escapeHtml(isModeratorPlayer(player) ? 'Peter Bates-Wilkinson' : player.name) + renderAdminStar(player) + '</td><td class="small-cell">' + escapeHtml(getOneVsTwoRatingForPlayer(player).toFixed(1)) + '</td></tr>').join('');
    refs.standingsWrap.innerHTML =
      '<h3>Player Rating</h3><p class="note">Singles only.</p><div class="table-wrap"><table><thead><tr><th>#</th><th>Player</th><th>Player Rating</th><th>Linked login</th></tr></thead><tbody>' + (playerRows || '<tr><td colspan="4">No players yet.</td></tr>') + '</tbody></table></div>' +
      '<hr class="rule"/><h3>Pair Rating</h3><p class="note">Doubles pairs and the pair side of 2v1 games.</p><div class="table-wrap"><table><thead><tr><th>#</th><th>Pair</th><th>Pair Rating</th></tr></thead><tbody>' + (pairRows || '<tr><td colspan="3">No pair ratings yet.</td></tr>') + '</tbody></table></div>' +
      '<hr class="rule"/><h3>1v2 Rating</h3><p class="note">Solo player rating for 1v2 games only.</p><div class="table-wrap"><table><thead><tr><th>#</th><th>Player</th><th>1v2 Rating</th></tr></thead><tbody>' + (oneVsTwoRows || '<tr><td colspan="3">No 1v2 ratings yet.</td></tr>') + '</tbody></table></div>';
  }

  function renderMatchHistory(){
    if(refs.heroMatchCount) refs.heroMatchCount.textContent = String(state.matches.length);
    if(!state.matches.length){
      refs.matchHistoryWrap.innerHTML = '<div class="empty-state">No games have been recorded yet in this session.</div>';
      return;
    }
    const closest = state.matches.slice().sort(function(a, b){
      return Math.abs(Number(a.score1 || 0) - Number(a.score2 || 0)) - Math.abs(Number(b.score1 || 0) - Number(b.score2 || 0));
    })[0] || null;
    const pairIds = new Set();
    state.matches.forEach(function(match){
      if(match.side1PairId) pairIds.add(match.side1PairId);
      if(match.side2PairId) pairIds.add(match.side2PairId);
    });
    const hardshipCount = state.matches.filter(function(match){ return !!match.hardshipRegistered; }).length;
    const summary = '<div class="metric-strip">' +
      '<span class="metric-chip"><strong>' + escapeHtml(String(state.matches.length)) + '</strong> Games</span>' +
      '<span class="metric-chip"><strong>' + escapeHtml(String(pairIds.size)) + '</strong> Pairs used</span>' +
      '<span class="metric-chip"><strong>' + escapeHtml(String(hardshipCount)) + '</strong> Hardship changes</span>' +
      (closest ? '<span class="metric-chip"><strong>' + escapeHtml(String(closest.score1) + '-' + String(closest.score2)) + '</strong> Closest score</span>' : '') +
    '</div>';
    const rows = state.matches.map(match => {
      const rules = ['<div class="note">Target area: ' + escapeHtml(match.targetAreaText || 'Full court') + '</div>'];
      if(match.shotRestrictionText) rules.push('<div class="note">Restricted Shots: ' + escapeHtml(match.shotRestrictionText) + '</div>');
      return '<tr><td>' + escapeHtml(formatDateTime(match.createdAt)) + '</td><td><strong>' + escapeHtml('Court ' + match.courtNumber + ' · ' + (match.kind === '2v1' ? '2 vs 1' : match.kind)) + '</strong><div class="note">' + escapeHtml(match.side1Label + ' vs ' + match.side2Label) + '</div></td><td class="small-cell">' + escapeHtml(String(match.score1)) + ' - ' + escapeHtml(String(match.score2)) + '</td><td>' + escapeHtml(match.winnerLabel) + '</td><td>' + rules.join('') + '</td><td>' + escapeHtml(match.hardshipRegistered ? getHardshipLabel(match.hardshipRegistered) : '—') + '</td><td class="small-cell">' + escapeHtml(match.ratingContext.summaryText || '') + '</td></tr>';
    }).join('');
    refs.matchHistoryWrap.innerHTML = summary + '<table><thead><tr><th>Date / time</th><th>Court</th><th>Score</th><th>Winner</th><th>Altered rules</th><th>Hardship Adjustment</th><th>Rating shift</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  function syncAuthState(){
    const manager = currentUserIsManager();
    if(refs.playerAdminControls) refs.playerAdminControls.hidden = !manager;
    if(refs.playerAdminNotice) refs.playerAdminNotice.hidden = manager;
    if(refs.ruleAdminCard) refs.ruleAdminCard.hidden = !manager;
    if(refs.gamePlanSetupCard) refs.gamePlanSetupCard.hidden = false;
    if(refs.generatePlanBtn){
      refs.generatePlanBtn.hidden = false;
      refs.generatePlanBtn.disabled = !manager;
      refs.generatePlanBtn.title = manager ? '' : 'Only the moderator or an approved Badminton Sessions admin can generate a new game plan.';
    }
    if(refs.attendanceSelectAllBtn) refs.attendanceSelectAllBtn.hidden = !manager;
    if(refs.attendanceClearBtn) refs.attendanceClearBtn.hidden = !manager;
  }

  function wireTabs(){
    // baseline-shared.js owns History API tab routing when present. Avoid double-binding
    // this page's top-level tabs, because duplicate handlers can desynchronise URL state
    // from the visible section during cross-page navigation.
    if(typeof window.BASELINE_selectTab === 'function') return;
    document.querySelectorAll('.tab').forEach(button => {
      button.addEventListener('click', function(){
        const target = button.getAttribute('data-target');
        document.querySelectorAll('.tab').forEach(tab => tab.setAttribute('aria-selected', String(tab === button)));
        document.querySelectorAll('.section').forEach(section => section.classList.toggle('active', section.id === target));
      });
    });
  }

  function cacheRefs(){
    ['heroPlayerCount','heroPairCount','heroMatchCount','attendanceCountLabel','attendanceSelectorWrap','attendanceSelectAllBtn','attendanceClearBtn','planCourtCountInput','planFormatSelect','planDurationSelect','generatePlanBtn','planAlert','persistenceStatus','gamePlanSetupCard','attendanceCard','currentGamesCard','currentGamesGrid','currentSitOutWrap','finishedGamesWrap','standingsWrap','playerAdminControls','playerAdminNotice','playerNameInput','addPlayerBtn','playersTableWrap','ruleAdminCard','ruleAdminWrap','matchHistoryWrap'].forEach(id => { refs[id] = document.getElementById(id); });
  }

  function wireStaticActions(){
    refs.addPlayerBtn.addEventListener('click', addPlayer);
    refs.generatePlanBtn.addEventListener('click', function(event){
      event.preventDefault();
      event.stopPropagation();
      if(currentUserIsManager()) generateGamePlan();
    });
    [refs.planFormatSelect, refs.planDurationSelect, refs.planCourtCountInput].forEach(input => {
      if(!input) return;
      input.addEventListener('change', function(){
        syncPlanSettingsFromInputs();
        saveSessionData();
        renderAll();
      });
      if(input === refs.planCourtCountInput){
        input.addEventListener('input', function(){
          syncPlanSettingsFromInputs();
          saveSessionData();
          renderAll();
        });
      }
    });
    if(refs.attendanceSelectorWrap){
      refs.attendanceSelectorWrap.addEventListener('change', function(event){
        const input = event.target.closest('[data-attendance-player]');
        if(!input) return;
        if(!currentUserIsManager()) return renderAttendanceSelector();
        const playerId = input.getAttribute('data-attendance-player');
        const selected = new Set(Array.isArray(state.plan.attendingPlayerIds) ? state.plan.attendingPlayerIds : []);
        if(input.checked) selected.add(playerId);
        else selected.delete(playerId);
        state.plan.attendingPlayerIds = Array.from(selected);
        normalizeAttendingPlayerIds({ allowAttendanceFallback:false });
        saveSessionData();
        renderAttendanceSelector();
      });
    }
    if(refs.attendanceSelectAllBtn){
      refs.attendanceSelectAllBtn.addEventListener('click', function(){
        if(!currentUserIsManager()) return;
        state.plan.attendingPlayerIds = state.players.map(player => player.id);
        normalizeAttendingPlayerIds();
        saveSessionData();
        renderAttendanceSelector();
      });
    }
    if(refs.attendanceClearBtn){
      refs.attendanceClearBtn.addEventListener('click', function(){
        if(!currentUserIsManager()) return;
        state.plan.attendingPlayerIds = [];
        state.plan.attendance = 0;
        state.plan.currentSitOutPlayerIds = [];
        normalizeAttendingPlayerIds({ allowAttendanceFallback:false });
        state.plan.attendance = 0;
        saveSessionData();
        renderAttendanceSelector();
        renderGamePlan();
      });
    }
  }

  function refreshDynamicSelects(){
    try{
      if(window.BASELINE_enhanceAllSelects){
        window.BASELINE_enhanceAllSelects(document);
      }
      if(window.BASELINE_refreshEnhancedSelect){
        [refs.planFormatSelect, refs.planDurationSelect].forEach(function(select){ if(select) window.BASELINE_refreshEnhancedSelect(select); });
      }
    }catch(_e){}
  }

  function renderAll(_persist){
    if(pageIsLeaving) return;
    try{
    syncAllCurrentCourtDraftsFromInputs();
    syncAuthState();
    normalizePlayerNames();
    normalizePlayerPreferenceFlags();
    normalizeAttendingPlayerIds();
    normalizeLoadedCurrentCourts();
    renderPlayers();
    renderRuleAdmin();
    renderStandings();
    renderGamePlan();
    renderMatchHistory();
    bindRosterActions();
    bindRuleAdminActions();
    if(refs.heroPlayerCount) refs.heroPlayerCount.textContent = String(state.players.length);
    if(refs.heroPairCount) refs.heroPairCount.textContent = String(state.plan.current.filter(court => court.kind === 'doubles').length);
    refreshDynamicSelects();
    }catch(error){
      console.error('[Baseline Badminton] render failed', error);
      try{
        if(refs.planAlert) refs.planAlert.innerHTML = '<div class="empty-state">The badminton view could not finish rendering. Refresh the page or clear stale local session data.</div>';
      }catch(_e){}
    }
  }

  function init(){
    cacheRefs();
    state = createInitialState();
    wireTabs();
    wireGamePlanSubtabs();
    wireStaticActions();
    let authRefreshTimer = null;
    const handleAuthChanged = function(){
      if(pageIsLeaving) return;
      if(authRefreshTimer) return;
      authRefreshTimer = window.setTimeout(function(){
        authRefreshTimer = null;
        renderAll();
        loadLoginOptions();
      }, 0);
    };
    if(window.BASELINE_auth && typeof window.BASELINE_auth.onChange === 'function'){
      window.BASELINE_auth.onChange(handleAuthChanged);
    }
    document.addEventListener('baseline:auth', handleAuthChanged);
    renderAll();
    loadLoginOptions();
    hydrateSessionFromServer();
  }

  init();
})();

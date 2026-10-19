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
  const SITE_MODERATOR_CANONICAL_LOGIN = 'PeterBW';
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

  const restrictionModule = window.BASELINE_BADMINTON_RESTRICTIONS;
  if(!restrictionModule) throw new Error('Badminton Session restriction model failed to load.');
  const restrictionModel = restrictionModule.create({
    getCourtGeometry:function(){ return getCourtGeometry(); },
    rect:function(x,y,w,h){ return rect(x,y,w,h); },
    escapeHtml:function(value){ return escapeHtml(value); },
    doublesZones:DOUBLES_ZONES,
    singlesZones:SINGLES_ZONES,
    presetZoneMap:PRESET_ZONE_MAP
  });
  const getZoneMode = restrictionModel.getZoneMode;
  const getTopCourtZones = restrictionModel.getTopCourtZones;
  const getZoneDisplayOrder = restrictionModel.getZoneDisplayOrder;
  const getAllowedZones = restrictionModel.getAllowedZones;
  const sanitizeZones = restrictionModel.sanitizeZones;
  const zoneSetKey = restrictionModel.zoneSetKey;
  const zonesMatch = restrictionModel.zonesMatch;
  const getPresetOrder = restrictionModel.getPresetOrder;
  const recommendPresetFromGap = restrictionModel.recommendPresetFromGap;
  const tightenPreset = restrictionModel.tightenPreset;
  const loosenPreset = restrictionModel.loosenPreset;
  const getTargetAreaTextFromPreset = restrictionModel.getTargetAreaTextFromPreset;
  const getTargetAreaTextFromZones = restrictionModel.getTargetAreaTextFromZones;
  const normaliseShotRestrictions = restrictionModel.normaliseShotRestrictions;
  const getShotRestrictionText = restrictionModel.getShotRestrictionText;
  const getShotRestrictionHtml = restrictionModel.getShotRestrictionHtml;
  const getHardshipLabel = restrictionModel.getHardshipLabel;
  const hardshipValueFromVisibleText = restrictionModel.hardshipValueFromVisibleText;

  const hardshipModule = window.BASELINE_BADMINTON_HARDSHIPS;
  if(!hardshipModule) throw new Error('Badminton Session hardship ledger failed to load.');
  const hardshipEngine = hardshipModule.create({
    sessionCore:sessionCore,
    getState:function(){ return state; },
    setState:function(next){ state = next; },
    createInitialState:function(){ return createInitialState(); },
    getTeamIds:function(side){ return getTeamIds(side); },
    getSideByNumber:function(court, sideNumber){ return getSideByNumber(court, sideNumber); },
    getOppositeSideNumber:function(sideNumber){ return getOppositeSideNumber(sideNumber); },
    getRestrictionZoneMode:function(court, sideNumber){ return getRestrictionZoneMode(court, sideNumber); },
    getRestrictionSideNumberFromMemory:function(c,m){return getRestrictionSideNumberFromMemory(c,m);},
    getPresetOrder:function(mode){ return getPresetOrder(mode); },
    normaliseShotRestrictions:function(restrictions, stage){ return normaliseShotRestrictions(restrictions, stage); },
    tightenPreset:function(preset, steps, mode){ return tightenPreset(preset, steps, mode); },
    loosenPreset:function(preset, steps, mode){ return loosenPreset(preset, steps, mode); },
    sanitizeZones:function(zones, mode){ return sanitizeZones(zones, mode); },
    presetZoneMap:PRESET_ZONE_MAP,
    getTargetAreaTextFromPreset:function(preset, mode){ return getTargetAreaTextFromPreset(preset, mode); },
    getTargetAreaTextFromZones:function(zones, mode){ return getTargetAreaTextFromZones(zones, mode); }
  });
  const getSideRestrictionKeyFromIds = hardshipEngine.getSideRestrictionKeyFromIds;
  const getSideRestrictionKey = hardshipEngine.getSideRestrictionKey;
  const getExactHardshipContextKey = hardshipEngine.getExactHardshipContextKey;
  const getActiveHardshipLedger = hardshipEngine.getActiveHardshipLedger;
  const normaliseHardshipRule = hardshipEngine.normaliseHardshipRule;
  const hardshipRuleIsActive = hardshipEngine.hardshipRuleIsActive;
  const getActiveHardshipRuleEntryForCourt = hardshipEngine.getActiveHardshipRuleEntryForCourt;
  const writeHardshipRuleForSide = hardshipEngine.writeHardshipRuleForSide;
  const getDominantHardshipLedger = hardshipEngine.getDominantHardshipLedger;
  const getDominantHardshipKeyForSide = hardshipEngine.getDominantHardshipKeyForSide;
  const getDominantHardshipRuleForSide = hardshipEngine.getDominantHardshipRuleForSide;
  const promoteLegacyMatchupMemoryForCourt=hardshipEngine.promoteLegacyMatchupMemoryForCourt;
  const getDominantHardshipEntryForCourt = hardshipEngine.getDominantHardshipEntryForCourt;
  const setDominantHardshipRuleForSide = hardshipEngine.setDominantHardshipRuleForSide;
  const increaseDominantHardshipForSide = hardshipEngine.increaseDominantHardshipForSide;
  const reduceDominantHardshipForSide = hardshipEngine.reduceDominantHardshipForSide;
  const getDominantMovementStepForSide = hardshipEngine.getDominantMovementStepForSide;
  const getDominantShotStageForSide = hardshipEngine.getDominantShotStageForSide;
  const getDominantIncreaseOptionsForSide = hardshipEngine.getDominantIncreaseOptionsForSide;
  const getDominantReduceOptionsForSide = hardshipEngine.getDominantReduceOptionsForSide;
  const applyDominantRuleToCourt = hardshipEngine.applyDominantRuleToCourt;

  const ruleAdminModule = window.BASELINE_BADMINTON_RULE_ADMIN;
  if(!ruleAdminModule) throw new Error('Badminton Session rule admin failed to load.');
  const ruleAdminEngine = ruleAdminModule.create({
    getState:function(){ return state; },
    getRefs:function(){ return refs; },
    currentUserIsManager:function(){ return currentUserIsManager(); },
    escapeHtml:function(value){ return escapeHtml(value); },
    getSideRuleKey:function(side){ return getSideRuleKey(side); },
    getTeamIds:function(side){ return getTeamIds(side); },
    getSideRuleLabelFromKey:function(key){ return getSideRuleLabelFromKey(key); },
    getTargetAreaTextFromZones:function(zones, mode){ return getTargetAreaTextFromZones(zones, mode); },
    getShotRestrictionText:function(stage, restrictions){ return getShotRestrictionText(stage, restrictions); },
    getZoneChecklistMarkup:function(name, selected){ return getZoneChecklistMarkup(name, selected); },
    getShotSelectMarkup:function(name, value){ return getShotSelectMarkup(name, value); },
    getPlayer:function(id){ return getPlayer(id); },
    sanitizeZones:function(zones, mode){ return sanitizeZones(zones, mode); },
    getCheckedZones:function(name){ return getCheckedZones(name); },
    buildSpecificMatchupKey:function(strongIds, weakIds){ return buildSpecificMatchupKey(strongIds, weakIds); },
    saveSessionData:function(options){ return saveSessionData(options); },
    renderAll:function(){ return renderAll(); }
  });
  const ensureRuleAdminShape = ruleAdminEngine.ensureRuleAdminShape;
  const getRuleAdminState = ruleAdminEngine.getRuleAdminState;
  const getGlobalRule = ruleAdminEngine.getGlobalRule;
  const getMatchupOverride = ruleAdminEngine.getMatchupOverride;
  const renderRuleAdmin = ruleAdminEngine.renderRuleAdmin;
  const buildMatchupRulePayload = ruleAdminEngine.buildMatchupRulePayload;
  const bindRuleAdminActions = ruleAdminEngine.bindRuleAdminActions;

  const rosterModule = window.BASELINE_BADMINTON_ROSTER;
  if(!rosterModule) throw new Error('Badminton Session roster module failed to load.');
  const rosterEngine = rosterModule.create({
    getState:function(){ return state; },
    getRefs:function(){ return refs; },
    clampRating:function(value){ return clampRating(value); },
    escapeHtml:function(value){ return escapeHtml(value); },
    isModeratorPlayer:function(player){ return isModeratorPlayer(player); },
    currentUserIsManager:function(){ return currentUserIsManager(); },
    normalizePlayerPreferenceFlags:function(){ return normalizePlayerPreferenceFlags(); },
    formatDateTime:function(value){ return formatDateTime(value); },
    ensureRatingStores:function(){ return ensureRatingStores(); },
    getPlayerRating:function(player){ return getPlayerRating(player); },
    cssEscape:function(value){ return cssEscape(value); },
    saveSessionData:function(options){ return saveSessionData(options); },
    normalizeKnownLoginName:function(value){ return normalizeKnownLoginName(value); },
    currentUserCanEditPlayerPrefs:function(player){ return currentUserCanEditPlayerPrefs(player); },
    getPlayer:function(id){ return getPlayer(id); },
    renderAll:function(){ return renderAll(); },
    setPlayerRating:function(player, value){ return setPlayerRating(player, value); },
    normalizeLoginName:function(value){ return normalizeLoginName(value); },
    getPairIdFromPlayers:function(players){ return getPairIdFromPlayers(players); },
    getPairSummaryKey:function(side){ return getPairSummaryKey(side); },
    getTeamLabel:function(side){ return getTeamLabel(side); },
    getSitewideAuth:function(){ return getSitewideAuth(); },
    addLoginOption:function(map, value, label, email, id){ return addLoginOption(map, value, label, email, id); },
    isPlayerAdmin:function(player){ return isPlayerAdmin(player); },
    uid:function(prefix){ return uid(prefix); },
    formatPersonName:function(value){ return formatPersonName(value); },
    startRating:START_RATING,
    moderatorCanonicalLogin:SITE_MODERATOR_CANONICAL_LOGIN,
    moderatorAliases:SITE_MODERATOR_ALIASES,
    loginOptionsUrl:LOGIN_OPTIONS_URL
  });
  const renderPlayers = rosterEngine.renderPlayers;
  const bindRosterActions = rosterEngine.bindRosterActions;
  const renderPlayerPreferenceControls = rosterEngine.renderPlayerPreferenceControls;
  const normalizePairSummaryKeys = rosterEngine.normalizePairSummaryKeys;
  const updatePairSummaryFromCourt = rosterEngine.updatePairSummaryFromCourt;
  const migrateKnownModeratorPlayer = rosterEngine.migrateKnownModeratorPlayer;
  const renderLoginSelect = rosterEngine.renderLoginSelect;
  const buildLoginOptions = rosterEngine.buildLoginOptions;
  const loadLoginOptions = rosterEngine.loadLoginOptions;
  const addPlayer = rosterEngine.addPlayer;
  const renderAdminStarToggle = rosterEngine.renderAdminStarToggle;
  const playerLoginTokens = rosterEngine.playerLoginTokens;
  const getPairLabelFromId = rosterEngine.getPairLabelFromId;
  const renderAdminStar = rosterEngine.renderAdminStar;

  const reportingModule = window.BASELINE_BADMINTON_REPORTING;
  if(!reportingModule) throw new Error('Badminton Session reporting renderer failed to load.');
  const reportingRenderer = reportingModule.create({
    getState:function(){ return state; },
    getRefs:function(){ return refs; },
    ensureRatingStores:function(){ return ensureRatingStores(); },
    getPlayerRating:function(player){ return getPlayerRating(player); },
    getOneVsTwoRatingForPlayer:function(player){ return getOneVsTwoRatingForPlayer(player); },
    clampRating:function(value){ return clampRating(value); },
    escapeHtml:function(value){ return escapeHtml(value); },
    isModeratorPlayer:function(player){ return isModeratorPlayer(player); },
    getPairLabelFromId:function(pairId){ return getPairLabelFromId(pairId); },
    renderAdminStar:function(player){ return renderAdminStar(player); },
    formatDateTime:function(value){ return formatDateTime(value); },
    getHardshipLabel:function(value){ return getHardshipLabel(value); },
    moderatorCanonicalLogin:SITE_MODERATOR_CANONICAL_LOGIN
  });
  const renderStandings = reportingRenderer.renderStandings;
  const renderMatchHistory = reportingRenderer.renderMatchHistory;
  const renderFinishedBatch = reportingRenderer.renderFinishedBatch;
  const renderFinishedGames = reportingRenderer.renderFinishedGames;

  const courtCardsModule = window.BASELINE_BADMINTON_COURT_CARDS;
  if(!courtCardsModule) throw new Error('Badminton Session court-card renderer failed to load.');
  const courtCardRenderer = courtCardsModule.create({
    getState:function(){ return state; },
    getRefs:function(){ return refs; },
    normalizeAttendingPlayerIds:function(){ return normalizeAttendingPlayerIds(); },
    currentUserIsManager:function(){ return currentUserIsManager(); },
    escapeHtml:function(value){ return escapeHtml(value); },
    syncCurrentSitOutUnion:function(){ return syncCurrentSitOutUnion(); },
    getSitOutNames:function(ids){ return getSitOutNames(ids); },
    getCourtVariableBasePlayers:function(court){ return getCourtVariableBasePlayers(court); },
    getCourtVariableSitOutIds:function(court){ return getCourtVariableSitOutIds(court); },
    getCourtSitOutLimit:function(court){ return getCourtSitOutLimit(court); },
    courtMarkedNoGame:function(court){ return courtMarkedNoGame(court); },
    normalisePendingHardship:function(court){ return normalisePendingHardship(court); },
    courtSaved:function(court, index){ return courtSaved(court, index); },
    currentUserCanScoreCourt:function(court){ return currentUserCanScoreCourt(court); },
    renderCourtSummary:function(court){ return renderCourtSummary(court); },
    renderRuleGuidance:function(court){ return renderRuleGuidance(court); },
    renderCourtDiagram:function(court){ return renderCourtDiagram(court); },
    renderBoundaryMask:function(court){ return renderBoundaryMask(court); },
    renderCourtShotRestrictionOverlay:function(court){ return renderCourtShotRestrictionOverlay(court); },
    renderHardshipHelp:function(court){ return renderHardshipHelp(court); },
    renderHardshipControl:function(court, phase, index){ return renderHardshipControl(court, phase, index); },
    renderScoreHeading:function(court, side){ return renderScoreHeading(court, side); },
    createCourtScoreInputName:function(court, index, side){ return createCourtScoreInputName(court, index, side); },
    getCourtSaveKey:function(court, index){ return getCourtSaveKey(court, index); }
  });
  const renderAttendanceSelector = courtCardRenderer.renderAttendanceSelector;
  const renderCurrentSitOutInfo = courtCardRenderer.renderCurrentSitOutInfo;
  const renderCourtVariableEditor = courtCardRenderer.renderCourtVariableEditor;
  const renderCourtCard = courtCardRenderer.renderCourtCard;

  const gamePlanModule = window.BASELINE_BADMINTON_GAME_PLAN;
  if(!gamePlanModule) throw new Error('Badminton Session game-plan module failed to load.');
  const gamePlanEngine = gamePlanModule.create({
    getState:function(){ return state; },
    getRefs:function(){ return refs; },
    getPageIsLeaving:function(){ return pageIsLeaving; },
    cssEscape:function(value){ return cssEscape(value); },
    courtSaved:function(court, index){ return courtSaved(court, index); },
    refreshCourtInputUi:function(index){ return refreshCourtInputUi(index); },
    requestNoGameConfirmation:function(index, input){ return requestNoGameConfirmation(index, input); },
    handleNoGameDialogAction:function(action){ return handleNoGameDialogAction(action); },
    generateNextSetFromCompletedCurrent:function(){ return generateNextSetFromCompletedCurrent(); },
    syncCourtScoresFromInputs:function(index){ return syncCourtScoresFromInputs(index); },
    currentUserCanScoreCourt:function(court){ return currentUserCanScoreCourt(court); },
    handleSaveCourtButton:function(button, event){ return handleSaveCourtButton(button, event); },
    markLocalChange:function(){ return markLocalChange(); },
    queueServerSave:function(options){ return queueServerSave(options); },
    currentUserIsManager:function(){ return currentUserIsManager(); },
    resetUnsubmittedCourtScoreDraft:function(court){ return resetUnsubmittedCourtScoreDraft(court); },
    syncCurrentSitOutUnion:function(){ return syncCurrentSitOutUnion(); },
    buildMatchupKey:function(court){ return buildMatchupKey(court); },
    evaluateCourtRestrictions:function(court){ return evaluateCourtRestrictions(court); },
    setPlanAlert:function(message, kind){ return setPlanAlert(message, kind); },
    getCourtSaveKey:function(court, index){ return getCourtSaveKey(court, index); },
    getCourtVariableBasePlayerIds:function(court){ return getCourtVariableBasePlayerIds(court); },
    getCourtSitOutLimit:function(court){ return getCourtSitOutLimit(court); },
    makeBestCourtFromVariablePlayers:function(players, format, court){ return makeBestCourtFromVariablePlayers(players, format, court); },
    courtMarkedNoGame:function(court){ return courtMarkedNoGame(court); },
    syncAllCurrentCourtDraftsFromInputs:function(){ return syncAllCurrentCourtDraftsFromInputs(); },
    refreshCurrentCourtCard:function(index){ return refreshCurrentCourtCard(index); },
    capCurrentCourtsToCourtLimit:function(){ return capCurrentCourtsToCourtLimit(); },
    enforceCurrentScoreInputsFromState:function(root){ return enforceCurrentScoreInputsFromState(root); },
    scheduleHardBlankCurrentScoreInputs:function(root){ return scheduleHardBlankCurrentScoreInputs(root); },
    refreshCurrentCourtRestrictionsFromMemory:function(){ return refreshCurrentCourtRestrictionsFromMemory(); },
    uid:function(prefix){ return uid(prefix); },
    protectLocalCurrentState:function(ms){ return protectLocalCurrentState(ms); },
    saveSessionData:function(options){ return saveSessionData(options); },
    syncPlanSettingsFromInputs:function(){ return syncPlanSettingsFromInputs(); },
    getAttendingPlayers:function(){ return getAttendingPlayers(); },
    clearGeneratedCourtDrafts:function(){ return clearGeneratedCourtDrafts(); },
    isSpecialFourPlayerLadder:function(players, format){ return isSpecialFourPlayerLadder(players, format); },
    ensureCurrentCourtSaveKeys:function(force){ return ensureCurrentCourtSaveKeys(force); },
    renderAll:function(){ return renderAll(); },
    advanceSpecialFourPlayerIndex:function(players, format){ return advanceSpecialFourPlayerIndex(players, format); },
    ensureGeneratedCurrentSet:function(players, usedSet){ return ensureGeneratedCurrentSet(players, usedSet); },
    getTeamLabel:function(side){ return getTeamLabel(side); },
    renderAttendanceSelector:function(){ return renderAttendanceSelector(); },
    renderCourtCard:function(court, phase, index){ return renderCourtCard(court, phase, index); },
    renderCurrentSitOutInfo:function(){ return renderCurrentSitOutInfo(); },
    renderFinishedGames:function(){ return renderFinishedGames(); },
    prepareSpecialFourPlayerIndexForManualGenerate:function(players, format){ return prepareSpecialFourPlayerIndexForManualGenerate(players, format); },
    buildCurrentCourtSet:function(players, format, usedSet, maxCourts){ return buildCurrentCourtSet(players, format, usedSet, maxCourts); },
    getShotRestrictionText:function(stage, restrictions){ return getShotRestrictionText(stage, restrictions); },
    getPlayer:function(id){ return getPlayer(id); },
    abortServerLoad:function(){
      try{
        if(serverLoadAbortController && typeof serverLoadAbortController.abort === 'function') serverLoadAbortController.abort();
      }catch(_e){}
      serverLoadAbortController = null;
    }
  });
  const wireGamePlanSubtabs = gamePlanEngine.wireGamePlanSubtabs;
  const bindPlanActions = gamePlanEngine.bindPlanActions;
  const applyCourtSitOutSelection = gamePlanEngine.applyCourtSitOutSelection;
  const renderGamePlan = gamePlanEngine.renderGamePlan;
  const syncGamePlanSubtabVisibility = gamePlanEngine.syncGamePlanSubtabVisibility;
  const generateGamePlan = gamePlanEngine.generateGamePlan;
  const rollFinishedGamesForward = gamePlanEngine.rollFinishedGamesForward;
  const createFinishedBatchFromCurrent = gamePlanEngine.createFinishedBatchFromCurrent;
  const normalizeAttendingPlayerIds = gamePlanEngine.normalizeAttendingPlayerIds;

  const resultsModule = window.BASELINE_BADMINTON_RESULTS;
  if(!resultsModule) throw new Error('Badminton Session result workflow failed to load.');
  const resultsEngine = resultsModule.create({
    getState:function(){ return state; },
    getRefs:function(){ return refs; },
    safeNumber:function(value, fallback){ return safeNumber(value, fallback); },
    escapeHtml:function(value){ return escapeHtml(value); },
    cssEscape:function(value){ return cssEscape(value); },
    buildMatchupKey:function(court){ return buildMatchupKey(court); },
    evaluateCourtRestrictions:function(court){ return evaluateCourtRestrictions(court); },
    getCourtSaveKey:function(court, index){ return getCourtSaveKey(court, index); },
    protectLocalCurrentState:function(){ return protectLocalCurrentState(); },
    saveSessionData:function(options){ return saveSessionData(options); },
    currentUserIsManager:function(){ return currentUserIsManager(); },
    clearGeneratedCourtDrafts:function(){ return clearGeneratedCourtDrafts(); },
    setPlanAlert:function(message, kind){ return setPlanAlert(message, kind); },
    allCurrentCourtsSaved:function(){ return allCurrentCourtsSaved(); },
    courtMarkedNoGame:function(court){ return courtMarkedNoGame(court); },
    rollFinishedGamesForward:function(){ return rollFinishedGamesForward(); },
    syncAllCurrentCourtDraftsFromInputs:function(){ return syncAllCurrentCourtDraftsFromInputs(); },
    refreshCurrentCourtCard:function(index){ return refreshCurrentCourtCard(index); },
    renderAll:function(){ return renderAll(); },
    getDominantHardshipEntryForCourt:function(court){ return getDominantHardshipEntryForCourt(court); },
    getDominantIncreaseOptionsForSide:function(court, sideNumber){ return getDominantIncreaseOptionsForSide(court, sideNumber); },
    getDominantReduceOptionsForSide:function(court, sideNumber){ return getDominantReduceOptionsForSide(court, sideNumber); },
    hardshipValueFromVisibleText:function(value){ return hardshipValueFromVisibleText(value); },
    renderCurrentSitOutInfo:function(){ return renderCurrentSitOutInfo(); },
    renderHardshipControl:function(court, phase, index){ return renderHardshipControl(court, phase, index); },
    createInitialState:function(){ return createInitialState(); },
    maxScore:MAX_SCORE
  });
  const canSaveCourtNow = resultsEngine.canSaveCourtNow;
  const renderHardshipControl = resultsEngine.renderHardshipControl;
  const syncCourtScoresFromInputs = resultsEngine.syncCourtScoresFromInputs;
  const syncCourtHardshipFromInput = resultsEngine.syncCourtHardshipFromInput;
  const markCourtSaved = resultsEngine.markCourtSaved;
  const getHardshipResultContext = resultsEngine.getHardshipResultContext;
  const hardBlankCurrentScoreInputs = resultsEngine.hardBlankCurrentScoreInputs;
  const confirmNoGameForCourt = resultsEngine.confirmNoGameForCourt;
  const requestNoGameConfirmation = resultsEngine.requestNoGameConfirmation;
  const handleNoGameDialogAction = resultsEngine.handleNoGameDialogAction;
  const validateScores = resultsEngine.validateScores;
  const enforceCurrentScoreInputsFromState = resultsEngine.enforceCurrentScoreInputsFromState;
  const renderNoGameDialog = resultsEngine.renderNoGameDialog;
  const ensureCurrentCourtSaveKeys = resultsEngine.ensureCurrentCourtSaveKeys;
  const courtSaved = resultsEngine.courtSaved;
  const getHardshipControlStateKey = resultsEngine.getHardshipControlStateKey;
  const scheduleHardBlankCurrentScoreInputs = resultsEngine.scheduleHardBlankCurrentScoreInputs;
  const normalisePendingHardship = resultsEngine.normalisePendingHardship;
  const sanitizeScoreInput = resultsEngine.sanitizeScoreInput;

  const stateHydrationModule = window.BASELINE_BADMINTON_STATE_HYDRATION;
  if(!stateHydrationModule) throw new Error('Badminton Session state hydration model failed to load.');
  const stateHydrator = stateHydrationModule.create({
    createInitialState:function(){ return createInitialState(); },
    formatPersonName:function(value){ return formatPersonName(value); },
    clampRating:function(value){ return clampRating(value); },
    normalizeKnownLoginName:function(value){ return normalizeKnownLoginName(value); },
    inferStoredPlayerMatchCount:function(player, matches){ return inferStoredPlayerMatchCount(player, matches); },
    ensureRuleAdminShape:function(ruleAdmin){ return ensureRuleAdminShape(ruleAdmin); }
  });

  const matchmakerModule = window.BASELINE_BADMINTON_MATCHMAKER;
  if(!matchmakerModule) throw new Error('Badminton Session matchmaker failed to load.');
  const matchmaker = matchmakerModule.create({
    getState:function(){ return state; },
    getSessionPlayCount:function(playerId){ return getSessionPlayCount(playerId); },
    getSitOutCount:function(playerId){ return getSitOutCount(playerId); },
    advanceSpecialFourPlayerIndex:function(players, format){ return advanceSpecialFourPlayerIndex(players, format); },
    isSpecialFourPlayerLadder:function(players, format){ return isSpecialFourPlayerLadder(players, format); },
    getPairIdFromPlayers:function(players){ return getPairIdFromPlayers(players); },
    getOpponentMemoryKey:function(a, b){ return getOpponentMemoryKey(a, b); },
    getLayoutPriorityValue:function(layout, format){ return getLayoutPriorityValue(layout, format); },
    enumerateLayouts:function(count, format, maxCourts){ return enumerateLayouts(count, format, maxCourts); },
    makeCourtRespectingOptOuts:function(kind, group, format){ return makeCourtRespectingOptOuts(kind, group, format); },
    buildMatchupKey:function(court){ return buildMatchupKey(court); },
    scoreCandidate:function(courts, usedSet){ return scoreCandidate(courts, usedSet); },
    makeCourt:function(kind, group){ return makeCourt(kind, group); },
    getDoublesDayCounts:function(count, courtLimit){ return getDoublesDayCounts(count, courtLimit); },
    normaliseCourtLimit:function(value, fallback){ return normaliseCourtLimit(value, fallback); },
    resetUnsubmittedCourtScoreDraft:function(court){ return resetUnsubmittedCourtScoreDraft(court); },
    syncCurrentSitOutUnion:function(){ return syncCurrentSitOutUnion(); },
    orderCourtsByLadder:function(courts){ return orderCourtsByLadder(courts); },
    evaluateCourtRestrictions:function(court){ return evaluateCourtRestrictions(court); },
    getSideRatingForCourt:function(court, side){ return getSideRatingForCourt(court, side); },
    attachVariableBasePlayers:function(court){ return attachVariableBasePlayers(court); }
  });
  const stableGenerationHash = matchmaker.stableGenerationHash;
  const orderPlayersForGeneration = matchmaker.orderPlayersForGeneration;
  const chooseSitOutPlayers = matchmaker.chooseSitOutPlayers;
  const buildSpecialFourPlayerSequence = matchmaker.buildSpecialFourPlayerSequence;
  const prepareSpecialFourPlayerIndexForManualGenerate = matchmaker.prepareSpecialFourPlayerIndexForManualGenerate;
  const getCourtRotationPenalty = matchmaker.getCourtRotationPenalty;
  const choosePreferredLayout = matchmaker.choosePreferredLayout;
  const buildCandidate = matchmaker.buildCandidate;
  const generateNovelCourtSet = matchmaker.generateNovelCourtSet;
  const buildSinglesDayCourtSet = matchmaker.buildSinglesDayCourtSet;
  const buildDoublesDayCourtSet = matchmaker.buildDoublesDayCourtSet;
  const buildCurrentCourtSet = matchmaker.buildCurrentCourtSet;
  const updateRotationMemoryFromCourt = matchmaker.updateRotationMemoryFromCourt;

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
    state.localUpdatedAt=Math.max(Date.now(),(Number(state && state.localUpdatedAt || 0)||0)+1);
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
    const requestState=JSON.parse(JSON.stringify(state));

    serverSavePromise = serverClient.save(API_STATE_URL, serverPayload(requestState), serverSaveAbortController && serverSaveAbortController.signal)
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
          const expected = sessionCore.hardshipSnapshot(requestState.hardshipRecords);
          const actual = sessionCore.hardshipSnapshot(verified.state.hardshipRecords);
          if(expected !== actual){
            serverSaveBlocked=true;
            announceServerSaveConflict('Badminton hardship data did not survive the server round-trip. Saving has stopped to prevent data loss.', 'error');
            return false;
          }
          const verifiedRevision=Number(verified.revision);
          if(Number.isInteger(verifiedRevision)&&verifiedRevision>=0) serverRevision=verifiedRevision;

          if((Number(state&&state.localUpdatedAt||0)||0)<=requestLocalUpdatedAt) state=hydrateLoadedState(verified.state);
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

  function hydrateLoadedState(parsed){
    state = stateHydrator.hydrate(parsed);
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



  function getAuthTokens(){
    const auth = getSitewideAuth();
    const serverUser = lastServerAuth && lastServerAuth.user && typeof lastServerAuth.user === 'object'
      ? lastServerAuth.user
      : {};
    const tokens = [];
    const add = function(value){
      const normalized = normalizeLoginName(value);
      if(normalized) tokens.push(normalized);
    };
    [auth.name, auth.email, auth.login, auth.username, auth.displayName, serverUser.name, serverUser.email].forEach(add);
    const serverUserId = Number(serverUser.id || 0);
    if(serverUserId > 0) tokens.push('uid:' + String(serverUserId));
    return Array.from(new Set(tokens));
  }

  function isKnownModeratorToken(value){
    return SITE_MODERATOR_ALIASES.includes(normalizeLoginName(value));
  }

  function serverAuthIsLoggedIn(){
    return !!(lastServerAuth && lastServerAuth.logged_in && lastServerAuth.user && Number(lastServerAuth.user.id || 0) > 0);
  }

  function currentUserIsModerator(){
    if(serverAuthIsLoggedIn() && (lastServerAuth.is_developer || lastServerAuth.is_badminton_admin)) return true;
    const auth = getSitewideAuth();
    return !!(auth && auth.authed === true && getAuthTokens().some(isKnownModeratorToken));
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
    return tokens.some(function(token){
      return authTokens.includes(token) || (isKnownModeratorToken(token) && authTokens.some(isKnownModeratorToken));
    });
  }

  function currentUserIsManager(){
    // The Badminton API is authoritative for moderator/admin status. Do not let
    // the independently refreshed sitewide auth client temporarily override it.
    if(currentUserIsModerator()) return true;
    const auth = getSitewideAuth();
    if(!serverAuthIsLoggedIn() && (!auth || auth.authed !== true)) return false;
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



  function createCourtScoreInputName(court, index, sideNumber){
    const generation = String(state && state.plan && state.plan.currentGenerationToken || 'gen').replace(/[^a-zA-Z0-9_-]+/g, '_');
    const key = String(getCourtSaveKey(court, index) || uid('court-score')).replace(/[^a-zA-Z0-9_-]+/g, '_');
    return 'badminton_score_' + generation + '_' + key + '_side_' + String(sideNumber);
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

  function getSitOutCount(playerId){
    return Number(state.plan.sitOutCounts && state.plan.sitOutCounts[playerId] || 0);
  }

  function getSessionPlayCount(playerId){
    return Number(state.plan.sessionPlayCounts && state.plan.sessionPlayCounts[playerId] || 0);
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



  function getTeamLabel(side){
    if(!side) return 'Unknown side';
    return (side.players || []).map(player => player.name).join(' / ');
  }

  // BASELINE-BADMINTON-HARDSHIP-NAME-ANCHOR-FIX-20260608
  // Hardship rules must follow the player by stable name first. Ratings are name-based,
  // so hardship storage must not silently fail when ids are missing or volatile.


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













  function evaluateCourtRestrictionsBase(court){
    ensureRatingStores();
    const side1Rating = getSideRatingForCourt(court, court.side1);
    const side2Rating = getSideRatingForCourt(court, court.side2);
    const diff = Math.round(Math.abs(side1Rating - side2Rating) * 10) / 10;
    const strongerSide = diff < 0.1 ? null : (side1Rating > side2Rating ? 1 : 2);
    const weakerSide = strongerSide ? (strongerSide === 1 ? 2 : 1) : null;
    const signature = buildMatchupKey(court);
    const memory = ensureRestrictionMemory(signature);
    promoteLegacyMatchupMemoryForCourt(court,memory);
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

  function attachVariableBasePlayers(court){
    if(!court) return court;
    court.variableBasePlayerIds = getCourtPlayers(court).map(function(player){ return player && player.id; }).filter(Boolean);
    court.variableOriginalKind = court.kind || '';
    court.variableSitOutIds = [];
    court.noGame = false;
    court.status = '';
    return court;
  }

  function getCourtSaveKey(court, index){
    if(!court || typeof court !== 'object') return '';
    if(court.currentCourtKey) return String(court.currentCourtKey);
    const signature = String(court.signature || buildMatchupKey(court) || 'court');
    const generated = String(state && state.plan && state.plan.generatedAt || 'unstarted');
    const slot = Number.isFinite(Number(index)) ? String(Number(index) + 1) : String(court.courtNumber || '0');
    return ['current-set', generated, 'slot', slot, signature].join('::');
  }

  function pruneCurrentSavedCourtKeys(){
    ensureCurrentCourtSaveKeys();
    const activeKeys = new Set(state.plan.current.map(function(court, index){ return getCourtSaveKey(court, index); }).filter(Boolean));
    state.plan.currentSavedCourtKeys = (state.plan.currentSavedCourtKeys || []).filter(function(key){ return activeKeys.has(key); });
    const activeSignatures = new Set(state.plan.current.map(function(court){ return court.signature || buildMatchupKey(court); }).filter(Boolean));
    state.plan.currentSavedSignatures = (state.plan.currentSavedSignatures || []).filter(function(signature){ return activeSignatures.has(signature); });
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

  function makeBestCourtFromVariablePlayers(players, existingKind){
    const group = (players || []).filter(Boolean);
    if(group.length >= 4 && existingKind === 'doubles') return makeCourt('doubles', group.slice(0, 4));
    if(group.length === 3) return makeCourt('2v1', group.slice(0, 3));
    if(group.length === 2) return makeCourt('singles', group.slice(0, 2));
    if(group.length >= 4) return makeCourt('doubles', group.slice(0, 4));
    return null;
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

  function getCourtPlayers(court){
    return ((court && court.side1 && court.side1.players) || []).concat((court && court.side2 && court.side2.players) || []);
  }

  function currentUserCanScoreCourt(court){
    if(currentUserIsManager()) return true;
    return getCourtPlayers(court).some(function(courtPlayer){
      const canonicalPlayer = courtPlayer && courtPlayer.id ? getPlayer(courtPlayer.id) : null;
      return currentUserMatchesPlayer(canonicalPlayer || courtPlayer);
    });
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

    const hardshipContextKey=hardshipIntent.sideNumber?getDominantHardshipKeyForSide(court,hardshipIntent.sideNumber):'';
    const hardshipRuleAfter=hardshipContextKey&&state.hardshipRecords&&state.hardshipRecords[hardshipContextKey]?JSON.parse(JSON.stringify(state.hardshipRecords[hardshipContextKey])):null;

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
      hardshipContextKey: hardshipContextKey || '',
      hardshipRuleAfter: hardshipRuleAfter,
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
    let renderStage = 'starting';
    try{
      renderStage = 'score draft sync'; syncAllCurrentCourtDraftsFromInputs();
      renderStage = 'auth state'; syncAuthState();
      renderStage = 'player names'; normalizePlayerNames();
      renderStage = 'player preferences'; normalizePlayerPreferenceFlags();
      renderStage = 'attendance'; normalizeAttendingPlayerIds();
      renderStage = 'current courts'; normalizeLoadedCurrentCourts();
      renderStage = 'players and pairs'; renderPlayers();
      renderStage = 'rule admin'; renderRuleAdmin();
      renderStage = 'standings'; renderStandings();
      renderStage = 'game plan'; renderGamePlan();
      renderStage = 'match history'; renderMatchHistory();
      renderStage = 'roster actions'; bindRosterActions();
      renderStage = 'rule actions'; bindRuleAdminActions();
      if(refs.heroPlayerCount) refs.heroPlayerCount.textContent = String(state.players.length);
      if(refs.heroPairCount) refs.heroPairCount.textContent = String(state.plan.current.filter(court => court.kind === 'doubles').length);
      renderStage = 'enhanced selects'; refreshDynamicSelects();
    }catch(error){
      console.error('[Baseline Badminton] render failed during ' + renderStage, error);
      try{
        if(refs.planAlert){
          const detail = error && error.message ? ': ' + String(error.message) : '';
          refs.planAlert.innerHTML = '<div class="empty-state">Badminton could not finish rendering during ' + escapeHtml(renderStage) + escapeHtml(detail) + '.</div>';
        }
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

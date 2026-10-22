import {
  GAME_IDS,
  accuracyFor,
  averageResponseMs,
  createDefaultDartsProfile,
  recordResult,
  realmContributionForDarts,
  seededPick
} from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';
import {
  GAMES,
  TIER_DEFINITIONS
} from './darts-focused-content.js';
import { createDartsTimerManager } from './darts-focused-timing.js';
import { loadDartsProfile, persistDartsProfile } from './darts-focused-storage.js';
import {
  nextButton as buildNextButton
} from './darts-focused-ui.js';
import {
  decisionCategoryMeta as getDecisionCategoryMeta,
  decisionSeriesSizeForTier,
  decisionPoolForTier,
  decisionAccuracyForProfile,
  paceSecondsForTier,
  renderDecisionTrainingView
} from './darts-focused-decision.js';
import {
  poolForTier as roundPoolForTier,
  pickScenarioWithHistory,
  shuffledScenarioOptions,
  targetsForTier,
  sequenceLengthForTier as roundSequenceLength,
  sequenceDelayForTier as roundSequenceDelay,
  buildTargetSequence
} from './darts-focused-rounds.js';
import { createDartsRenderers } from './darts-focused-renderers.js';
import {
  refreshDartsSelectors,
  syncDartsOverviewProgress,
  dartsProgressSummaryHtml,
  renderDartsTierControls,
  syncDartsActiveControls
} from './darts-focused-progress.js';
import { createDartsDrillActions } from './darts-focused-actions.js';
import { createDartsDecisionActions } from './darts-focused-decision-actions.js';
import { createDartsStateFactory } from './darts-focused-state.js';
import { createDartsShell } from './darts-focused-shell.js';
import { createDartsEventHandlers } from './darts-focused-events.js';

const BUILD = 'DARTS_REBUILD_20260707_4';
const STYLE_URL = `/systems/baseline-recreation/games/darts-focused/css/darts-focused.css?v=${BUILD}`;

const ui = {
  selected:'checkout-pressure',
  states:{},
  lastScenario:{},
  lastDecisionQuestion:{},
  fullscreen:false
};
let profile = loadDartsProfile();
ui.selected = GAME_IDS.includes(profile.selectedGame) ? profile.selectedGame : GAME_IDS[0];

function byId(id) { return document.getElementById(id); }
function selectedMeta() { return GAMES.find((game) => game.id === ui.selected) || GAMES[0]; }
function nowMs() { return typeof performance !== 'undefined' ? performance.now() : Date.now(); }
function elapsedFrom(state) { return Math.max(0,Math.round(nowMs() - (state.startedAt || nowMs()))); }
function randomItem(items) { return seededPick(items) || items[0]; }
function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index],copy[swap]] = [copy[swap],copy[index]];
  }
  return copy;
}
function saveProfile() {
  profile.selectedGame = ui.selected;
  profile.lastPlayedAt = profile.lastPlayedAt || Date.now();
  const {serialised} = persistDartsProfile(profile);
  try { document.dispatchEvent(new CustomEvent('baseline:darts-progress', { detail:{ profile:JSON.parse(serialised) } })); } catch (_) {}
  renderProgressSummary();
}
const timing = createDartsTimerManager({
  getGameId:()=>ui.selected,
  shouldAutoNext:()=>autoNextEnabled(),
  onHiddenDuration:hiddenFor=>{
    const active = ui.states[ui.selected];
    if(active && Number.isFinite(active.startedAt)) active.startedAt += hiddenFor;
  },
  onVisibleResume:()=>{
    if(byId('dartsFocusedPanel')?.classList.contains('is-active')) renderSelectedGame();
  }
});
function clearGameTimers() { timing.clearGame(); }
function clearAutoTimer() { timing.clearAuto(); }
function scheduleGame(callback, delay) { return timing.scheduleGame(callback,delay); }
function managedTimerRemaining(timer) { return timing.remaining(timer); }
function syncDartsVisibility() { timing.handleVisibilityChange(); }
const stateFactory=createDartsStateFactory({
  getTier:(id)=>tierId(id),
  shuffledScenario,
  pickScenario,
  shuffle,
  randomItem,
  nowMs
});
function stateFor(id = ui.selected) {
  if (!ui.states[id]) ui.states[id] = stateFactory.createState(id);
  return ui.states[id];
}
function resetState(id = ui.selected) { ui.states[id] = stateFactory.createState(id); return ui.states[id]; }
function tierId(id = ui.selected) { return Math.max(1,Math.min(3,Number(profile.custom.selectedTiers?.[id] || 1))); }
function tierMeta(id = ui.selected) { return TIER_DEFINITIONS[tierId(id) - 1]; }
function gameLevel(id = ui.selected) { return profile.stats[id]?.level || 1; }
function tierIsUnlocked(id,value) { return gameLevel(id) >= TIER_DEFINITIONS[value - 1].unlockLevel; }
function autoNextEnabled(id = ui.selected) { return Boolean(profile.custom.autoNext?.[id]); }
function poolForTier(pool,id = ui.selected) {
  return roundPoolForTier(pool,tierId(id));
}
function pickScenario(pool,key,id = ui.selected) {
  const result=pickScenarioWithHistory(pool,tierId(id),ui.lastScenario[key]);
  ui.lastScenario[key]=result.history;
  return result.scenario;
}
function shuffledScenario(pool,key,id = ui.selected) {
  return shuffledScenarioOptions(pickScenario(pool,key,id));
}
function targetsForCurrentTier() { return targetsForTier(tierId()); }
function sequenceLengthForTier() { return roundSequenceLength(tierId('sequence-recall')); }
function sequenceDelayForTier() { return roundSequenceDelay(tierId('sequence-recall')); }
function buildSequence() { return buildTargetSequence(tierId('sequence-recall')); }

function record(gameId, correct, responseMs = 0, confidence = null, category = '') {
  profile = recordResult(profile, gameId, { correct, responseMs, confidence, tier:tierId(gameId), category });
  saveProfile();
}
function progressLabel(id) {
  const stats = profile.stats[id];
  const tier = TIER_DEFINITIONS[tierId(id) - 1].name;
  if (!stats?.attempts) return `Level ${stats?.level || 1} · ${tier} · Ready`;
  return `Level ${stats.level} · ${tier} · ${accuracyFor(stats)}% · ${stats.attempts} rounds`;
}
function formatTime(ms) { return ms ? `${(ms / 1000).toFixed(1)}s` : '—'; }
function nextButton(label = 'Next round') { return buildNextButton(ui.selected,label); }
function autoAdvance(callback, delay = 1900) {
  return timing.scheduleAuto(callback,delay);
}

const {
  ensureStylesheet,
  openHowToPlay,
  closeInfo,
  ensurePanel,
  openPanel,
  closePanel,
  toggleFullscreen
}=createDartsShell({
  build:BUILD,
  styleUrl:STYLE_URL,
  games:GAMES,
  getSelected:()=>ui.selected,
  progressLabel,
  renderSelectedGame,
  renderProgressSummary,
  clearGameTimers,
  clearAutoTimer
});

function refreshSelectors() {
  refreshDartsSelectors({selectedId:ui.selected,progressLabel});
}
function syncOverviewProgress() {
  syncDartsOverviewProgress({level:profile.level,gameCount:GAME_IDS.length});
}
function renderProgressSummary() {
  const root=byId('dartsProgressSummary');
  if(root)root.innerHTML=dartsProgressSummaryHtml(profile,GAME_IDS);
  syncOverviewProgress();
  refreshSelectors();
}
function renderTierControls() {
  renderDartsTierControls({
    list:byId('dartsTierList'),
    description:byId('dartsTierDescription'),
    tierDefinitions:TIER_DEFINITIONS,
    selectedTier:tierId(),
    gameLevel:gameLevel()
  });
}
function syncActiveControls() {
  syncDartsActiveControls({
    info:byId('dartsActiveInfoBtn'),
    how:byId('dartsActiveHowBtn'),
    auto:byId('dartsAutoNextBtn'),
    fullscreen:byId('dartsFullscreenBtn'),
    meta:selectedMeta(),
    autoNext:autoNextEnabled(),
    fullscreenActive:document.fullscreenElement===byId('dartsGameCard')
  });
}
function syncFullscreenButton() {
  syncDartsActiveControls({
    info:null,how:null,auto:null,fullscreen:byId('dartsFullscreenBtn'),
    meta:selectedMeta(),
    autoNext:autoNextEnabled(),
    fullscreenActive:document.fullscreenElement===byId('dartsGameCard')
  });
}
function renderSelectedGame() {
  const surface = byId('dartsGameSurface');
  const title = byId('dartsActiveTitle');
  const status = byId('dartsActiveStatus');
  if (!surface || !title || !status) return;
  const meta = selectedMeta();
  profile.selectedGame = ui.selected;
  title.textContent = meta.name;
  const stats = profile.stats[meta.id];
  status.textContent = stats.attempts ? `${accuracyFor(stats)}% accuracy · average ${formatTime(averageResponseMs(stats))} · ${tierMeta().name}` : `Ready to begin · ${tierMeta().name}`;
  const renderer = RENDERERS[meta.id];
  surface.innerHTML = renderer ? renderer(stateFor(meta.id)) : '<p>Game unavailable.</p>';
  renderTierControls();
  syncActiveControls();
  refreshSelectors();
  saveProfile();
}

const RENDERERS = createDartsRenderers({
  getProfile:()=>profile,
  tierId,
  nextButton,
  managedTimerRemaining,
  sequenceLengthForTier,
  renderDecisionTraining
});

function decisionCategoryMeta(id) { return getDecisionCategoryMeta(id); }
function decisionSeriesSize() { return decisionSeriesSizeForTier(tierId('decision-training')); }
function decisionPool(category) { return decisionPoolForTier(category,tierId('decision-training')); }
function decisionAccuracy(category) { return decisionAccuracyForProfile(profile,category); }
function paceSeconds(stage) { return paceSecondsForTier(stage,tierId('decision-training')); }
function renderDecisionTraining(state) {
  return renderDecisionTrainingView(state,{
    profile,
    tier:tierId('decision-training'),
    remainingMsForTimer:managedTimerRemaining,
    formatTime
  });
}

const {
  answerStandard,
  startTargetLock,
  startHoldPicture,
  startDistraction,
  answerTarget,
  answerGeography,
  startPressure,
  moveRoutine,
  submitRoutine,
  startSequence,
  advanceSequence,
  sequenceClick
}=createDartsDrillActions({
  getProfile:()=>profile,
  getSelected:()=>ui.selected,
  stateFor,
  resetState,
  tierId,
  shuffledScenario,
  shuffle,
  buildSequence,
  sequenceDelayForTier,
  clearGameTimers,
  clearAutoTimer,
  scheduleGame,
  renderSelectedGame,
  record,
  elapsedFrom,
  autoAdvance,
  requestNewRound:(id)=>newRound(id),
  nowMs
});

const {
  startDecisionCategory,
  prepareDecisionQuestion,
  returnDecisionCategories,
  advanceDecision,
  answerDecisionChoice,
  submitDecisionFacts,
  currentPaceQuestion,
  schedulePaceTimeout,
  finishPaceAnswer,
  startRushedPace
}=createDartsDecisionActions({
  getProfile:()=>profile,
  getTier:()=>tierId('decision-training'),
  stateFor,
  resetState,
  shuffle,
  clearGameTimers,
  clearAutoTimer,
  scheduleGame,
  renderSelectedGame,
  record,
  elapsedFrom,
  autoAdvance,
  saveProfile,
  setLastQuestion:(category,key)=>{ui.lastDecisionQuestion[category]=key;},
  nowMs
});

function newRound(id) {
  clearGameTimers(); clearAutoTimer();
  if (id === 'decision-training') { returnDecisionCategories(); return; }
  resetState(id);
  renderSelectedGame();
}
function changeTier(value) {
  const tier = Number(value);
  if (!TIER_DEFINITIONS[tier - 1] || !tierIsUnlocked(ui.selected,tier)) return;
  clearGameTimers(); clearAutoTimer();
  profile.custom.selectedTiers[ui.selected] = tier;
  resetState(ui.selected);
  saveProfile();
  renderSelectedGame();
}
function toggleAutoNext() {
  profile.custom.autoNext[ui.selected] = !autoNextEnabled();
  clearAutoTimer();
  saveProfile();
  syncActiveControls();
}

const {
  handleClick,
  handleChange,
  handleKeydown
}=createDartsEventHandlers({
  byId,
  getSelected:()=>ui.selected,
  setSelected:(id)=>{ui.selected=id;},
  stateFor,
  resetState,
  clearGameTimers,
  clearAutoTimer,
  renderSelectedGame,
  openHowToPlay,
  closeInfo,
  closePanel,
  changeTier,
  toggleAutoNext,
  toggleFullscreen,
  newRound,
  answerDecisionChoice,
  answerStandard,
  startTargetLock,
  startHoldPicture,
  startDistraction,
  startPressure,
  submitRoutine,
  moveRoutine,
  startSequence,
  startDecisionCategory,
  submitDecisionFacts,
  advanceDecision,
  returnDecisionCategories,
  startRushedPace,
  answerTarget,
  answerGeography,
  sequenceClick
});

function init() {
  ensureStylesheet(); ensurePanel();
  document.addEventListener('click',handleClick,true);
  document.addEventListener('visibilitychange',syncDartsVisibility);
  document.addEventListener('change',handleChange,true);
  document.addEventListener('input',handleChange,true);
  document.addEventListener('keydown',handleKeydown,true);
  document.addEventListener('fullscreenchange',syncFullscreenButton);
  window.addEventListener('beforeunload',() => { clearGameTimers(); clearAutoTimer(); });
  document.documentElement.setAttribute('data-darts-focused-runtime',BUILD);
  renderProgressSummary();
  globalThis.DartsFocusedGames = Object.freeze({
    build:BUILD,
    open:openPanel,
    close:closePanel,
    getProfile:() => JSON.parse(JSON.stringify(profile)),
    getRealmContribution:() => realmContributionForDarts(profile),
    reset:() => { profile = createDefaultDartsProfile(); ui.states = {}; saveProfile(); renderSelectedGame(); }
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true});
else init();

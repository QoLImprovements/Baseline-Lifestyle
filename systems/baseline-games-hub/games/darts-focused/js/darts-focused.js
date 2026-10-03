import {
  GAME_IDS,
  accuracyFor,
  averageResponseMs,
  createDefaultDartsProfile,
  recordResult,
  sameSet,
  seededPick
} from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';
import {
  GAMES,
  TIER_DEFINITIONS,
  CHECKOUT_SCENARIOS,
  RECOVERY_SCENARIOS,
  TARGETS_BY_TIER,
  DISTRACTION_MISSIONS,
  ROUTINE_SCENARIOS
} from './darts-focused-content.js';
import { createDartsTimerManager } from './darts-focused-timing.js';
import { loadDartsProfile, persistDartsProfile } from './darts-focused-storage.js';
import {
  escapeHtml,
  nextButton as buildNextButton,
  overviewEntryHtml,
  panelHtml as buildPanelHtml
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
  buildTargetSequence,
  createGeographyPrompt
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

const BUILD = 'DARTS_REBUILD_20260707_4';
const STYLE_URL = `/systems/baseline-games-hub/games/darts-focused/css/darts-focused.css?v=${BUILD}`;

const ui = {
  selected:'checkout-pressure',
  states:{},
  listObserver:null,
  overviewSyncQueued:false,
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
function stateFor(id = ui.selected) {
  if (!ui.states[id]) ui.states[id] = createState(id);
  return ui.states[id];
}
function resetState(id = ui.selected) { ui.states[id] = createState(id); return ui.states[id]; }
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
function createState(id) {
  if (id === 'checkout-pressure') return { scenario:shuffledScenario(CHECKOUT_SCENARIOS,'checkout'), startedAt:nowMs(), feedback:'' };
  if (id === 'route-recovery') return { scenario:shuffledScenario(RECOVERY_SCENARIOS,'recovery'), startedAt:nowMs(), feedback:'' };
  if (id === 'target-lock') return { phase:'ready', target:randomItem(TARGETS_BY_TIER[tierId(id)]), feedback:'' };
  if (id === 'hold-picture') return { phase:'ready', target:randomItem(TARGETS_BY_TIER[tierId(id)]), options:[], feedback:'' };
  if (id === 'distraction-resistance') return { phase:'ready', mission:shuffledScenario(DISTRACTION_MISSIONS,'distraction'), feedback:'' };
  if (id === 'pressure-ladder') return { phase:'ready', scenario:null, feedback:'' };
  if (id === 'board-geography') return newGeographyState();
  if (id === 'routine-builder') {
    const scenario = pickScenario(ROUTINE_SCENARIOS,'routine',id);
    return { scenario, order:shuffle(scenario.correct), startedAt:nowMs(), feedback:'' };
  }
  if (id === 'sequence-recall') return { phase:'ready', sequence:[], showIndex:0, input:[], feedback:'' };
  if (id === 'decision-training') return { phase:'categories', category:'', queue:[], index:0, score:0, question:null, options:[], selected:[], confidence:50, paceStage:'', paceResults:{}, feedback:'' };
  return {};
}
function newGeographyState() {
  return { ...createGeographyPrompt(tierId('board-geography')), startedAt:nowMs(), feedback:'' };
}
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

function ensureStylesheet() {
  if (document.querySelector('link[data-darts-focused-style]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet'; link.href = STYLE_URL; link.dataset.dartsFocusedStyle = BUILD;
  document.head.appendChild(link);
}
function ensureExistingModal() {
  let modal = byId('gamesHubInfoModal');
  if (modal) return modal;
  modal = document.createElement('div');
  modal.id = 'gamesHubInfoModal'; modal.className = 'games-modal'; modal.hidden = true;
  modal.innerHTML = '<div class="games-modal__backdrop" data-close-games-modal="1"></div><section class="games-modal__panel" role="dialog" aria-modal="true" aria-labelledby="gamesModalTitle"><button class="games-modal__close" data-close-games-modal="1" type="button" aria-label="Close">×</button><h3 id="gamesModalTitle"></h3><div class="games-modal__body" id="gamesModalBody"></div></section>';
  document.body.appendChild(modal);
  return modal;
}
function openHowToPlay(id) {
  const game = id === 'darts-focused'
    ? { name:'Darts Focused', how:'Open Darts Focused, choose one of the distinct games, select an unlocked difficulty tier, and use the on-screen board or controls. Auto-Next and Full Screen are available for every game.' }
    : GAMES.find((item) => item.id === id);
  if (!game) return;
  const modal = ensureExistingModal();
  byId('gamesModalTitle').textContent = `${game.name} — How To Play`;
  byId('gamesModalBody').innerHTML = `<p>${escapeHtml(game.how)}</p>`;
  modal.hidden = false;
  document.body.classList.add('games-modal-open');
  modal.querySelector('.games-modal__close')?.focus({ preventScroll:true });
}
function closeInfo() {
  const modal = byId('gamesHubInfoModal');
  if (modal) modal.hidden = true;
  document.body.classList.remove('games-modal-open');
}

function ensureOverviewEntry() {
  const list = byId('gamesList');
  if (!list || list.querySelector('[data-open-darts-focused]')) return;
  const testingHeading = [...list.querySelectorAll('.games-list-group')].find((node) => node.textContent.trim() === 'Testing');
  if (testingHeading) testingHeading.insertAdjacentHTML('beforebegin', overviewEntryHtml());
  else list.insertAdjacentHTML('beforeend', overviewEntryHtml());
}
function queueOverviewSync() {
  if (ui.overviewSyncQueued) return;
  ui.overviewSyncQueued = true;
  requestAnimationFrame(() => { ui.overviewSyncQueued = false; ensureOverviewEntry(); });
}
function panelHtml() { return buildPanelHtml({games:GAMES,selectedId:ui.selected,progressLabel}); }
function ensurePanel() {
  let panel = byId('dartsFocusedPanel');
  if (panel) return panel;
  const overview = byId('gamesOverviewCard');
  if (!byId('games') || !overview) return null;
  overview.insertAdjacentHTML('afterend', panelHtml());
  panel = byId('dartsFocusedPanel');
  renderSelectedGame();
  renderProgressSummary();
  return panel;
}
function openPanel() {
  const panel = ensurePanel();
  const games = byId('games');
  if (!panel || !games) throw new Error('Darts Focused panel could not be mounted.');
  document.querySelectorAll('.section').forEach((section) => section.classList.toggle('active', section === games));
  document.querySelectorAll('.tab[data-target]').forEach((tab) => tab.setAttribute('aria-selected', String(tab.getAttribute('data-target') === 'games')));
  document.querySelectorAll('#games .game-panel').forEach((item) => { item.classList.remove('is-active'); item.hidden=true; item.setAttribute('aria-hidden','true'); });
  games.classList.add('has-active-game');
  panel.classList.add('is-active');
  panel.hidden = false;
  panel.removeAttribute('aria-hidden');
  byId('gamesOverviewCard')?.setAttribute('aria-hidden','true');
  renderSelectedGame();
  renderProgressSummary();
  try { history.replaceState({ dartsFocused:true }, '', '#tab=games&game=darts-focused'); } catch (_) {}
  byId('dartsFocusedTitle')?.focus({ preventScroll:true });
  document.documentElement.setAttribute('data-darts-focused-open',BUILD);
  return panel;
}
function closePanel({ restoreOverview = true } = {}) {
  clearGameTimers(); clearAutoTimer();
  const closing=byId('dartsFocusedPanel'); closing?.classList.remove('is-active'); if(closing){closing.hidden=true;closing.setAttribute('aria-hidden','true');}
  document.documentElement.removeAttribute('data-darts-focused-open');
  if (document.fullscreenElement === byId('dartsGameCard')) document.exitFullscreen?.().catch(() => {});
  if (restoreOverview) {
    byId('games')?.classList.remove('has-active-game');
    byId('gamesOverviewCard')?.removeAttribute('aria-hidden');
    try { history.replaceState({},'', '#tab=games'); } catch (_) {}
    document.querySelector('[data-open-darts-focused]')?.focus({ preventScroll:true });
  }
}
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
function toggleFullscreen() {
  const card = byId('dartsGameCard');
  if (!card) return;
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  else card.requestFullscreen?.().catch(() => {});
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
  profile,
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

function startDecisionCategory(categoryId) {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('decision-training');
  const category = decisionCategoryMeta(categoryId);
  if (!category) return;
  const pool = decisionPool(categoryId);
  const wanted = Math.min(decisionSeriesSize(),pool.length);
  const historyMap = profile.custom.decisionQuestionHistory || (profile.custom.decisionQuestionHistory = {});
  const history = Array.isArray(historyMap[categoryId]) ? historyMap[categoryId] : [];
  const historySet = new Set(history);
  const unseen = shuffle(pool.filter((question) => !historySet.has(question.key)));
  const queue = unseen.slice(0,wanted);
  if (queue.length < wanted) {
    const recent = new Set(history.slice(-wanted));
    const refill = shuffle(pool.filter((question) => !queue.some((picked) => picked.key === question.key) && !recent.has(question.key)));
    queue.push(...refill.slice(0,wanted - queue.length));
  }
  if (queue.length < wanted) {
    const fallback = shuffle(pool.filter((question) => !queue.some((picked) => picked.key === question.key)));
    queue.push(...fallback.slice(0,wanted - queue.length));
  }
  state.category = categoryId;
  state.queue = queue;
  historyMap[categoryId] = [...history,...queue.map((question) => question.key)].slice(-Math.max(pool.length * 2,40));
  saveProfile();
  state.index = 0;
  state.score = 0;
  prepareDecisionQuestion(state);
}
function prepareDecisionQuestion(state) {
  clearGameTimers(); clearAutoTimer();
  if (state.index >= state.queue.length) {
    state.phase = 'series-complete';
    renderSelectedGame();
    autoAdvance(() => returnDecisionCategories(),2300);
    return;
  }
  state.question = state.queue[state.index];
  ui.lastDecisionQuestion[state.category] = state.question.key;
  state.options = shuffle(state.category === 'pace-control' ? state.question.calm.options : (state.question.options || []));
  state.selected = [];
  state.confidence = 50;
  state.feedback = '';
  state.startedAt = nowMs();
  state.paceResults = {};
  if (state.category === 'pace-control') {
    state.paceStage = 'calm';
    state.phase = 'question';
    renderSelectedGame();
    schedulePaceTimeout(state,'calm');
    return;
  }
  state.phase = 'question';
  renderSelectedGame();
}
function returnDecisionCategories() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('decision-training');
  state.phase = 'categories';
  renderSelectedGame();
}
function advanceDecision() {
  const state = stateFor('decision-training');
  clearGameTimers(); clearAutoTimer();
  if (state.phase === 'pace-between') { startRushedPace(); return; }
  if (state.phase === 'series-complete') { returnDecisionCategories(); return; }
  state.index += 1;
  prepareDecisionQuestion(state);
}
function answerDecisionChoice(value) {
  const state = stateFor('decision-training');
  if (state.phase !== 'question' || state.feedback) return;
  if (state.category === 'pace-control') { finishPaceAnswer(value === currentPaceQuestion(state).correct,false); return; }
  const q = state.question;
  const correct = value === q.correct;
  const confidence = state.category === 'confidence-calibration' ? state.confidence : null;
  record('decision-training',correct,elapsedFrom(state),confidence,state.category);
  if (correct) state.score += 1;
  state.feedback = {
    correct,
    title:correct ? 'Correct decision' : 'Recalculate',
    text:state.category === 'confidence-calibration' ? `Correct answer: ${q.correct}. Confidence was ${state.confidence}%.` : q.explanation
  };
  renderSelectedGame();
  autoAdvance(advanceDecision);
}
function submitDecisionFacts() {
  const state = stateFor('decision-training');
  if (state.category !== 'relevant-information' || state.feedback) return;
  const correct = sameSet(state.selected,state.question.correct);
  record('decision-training',correct,elapsedFrom(state),null,state.category);
  if (correct) state.score += 1;
  state.feedback = { correct, title:correct ? 'Relevant facts isolated' : 'Noise remained in the decision', text:state.question.explanation };
  renderSelectedGame();
  autoAdvance(advanceDecision);
}
function currentPaceQuestion(state) { return state.paceStage === 'rushed' ? state.question.rushed : state.question.calm; }
function schedulePaceTimeout(state,stage) {
  const seconds = paceSeconds(stage);
  state.paceTimer = scheduleGame(() => {
    if (state.category !== 'pace-control' || state.phase !== 'question' || state.paceStage !== stage) return;
    finishPaceAnswer(false,true);
  },seconds * 1000);
}
function finishPaceAnswer(correct,timedOut) {
  const state = stateFor('decision-training');
  if (state.category !== 'pace-control' || state.phase !== 'question') return;
  clearGameTimers();
  const stage = state.paceStage;
  const result = { correct:Boolean(correct), ms:timedOut ? paceSeconds(stage) * 1000 : elapsedFrom(state) };
  state.paceResults[stage] = result;
  if (stage === 'calm') {
    state.phase = 'pace-between';
    renderSelectedGame();
    autoAdvance(startRushedPace,1900);
    return;
  }
  const combinedCorrect = Boolean(state.paceResults.calm?.correct && result.correct);
  const averageMs = Math.round(((state.paceResults.calm?.ms || 0) + result.ms) / 2);
  record('decision-training',combinedCorrect,averageMs,null,'pace-control');
  if (combinedCorrect) state.score += 1;
  profile.custom.calmComparisons.push({calm:state.paceResults.calm,rushed:result});
  profile.custom.calmComparisons = profile.custom.calmComparisons.slice(-30);
  saveProfile();
  state.phase = 'pace-result';
  renderSelectedGame();
  autoAdvance(advanceDecision,2300);
}
function startRushedPace() {
  const state = stateFor('decision-training');
  if (state.category !== 'pace-control') return;
  clearGameTimers(); clearAutoTimer();
  state.paceStage = 'rushed';
  state.options = shuffle(state.question.rushed.options);
  state.startedAt = nowMs();
  state.phase = 'question';
  renderSelectedGame();
  schedulePaceTimeout(state,'rushed');
}

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

function handleClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const how = target.closest('[data-darts-how]');
  if (how) { event.preventDefault(); event.stopImmediatePropagation(); openHowToPlay(how.getAttribute('data-darts-how')); return; }
  if (target.closest('[data-close-games-modal]')) { closeInfo(); return; }
  if (target.closest('[data-open-darts-focused]')) { event.preventDefault(); event.stopImmediatePropagation(); openPanel(); return; }
  if (target.closest('[data-close-darts-focused]')) { event.preventDefault(); event.stopImmediatePropagation(); closePanel(); return; }
  if (byId('dartsFocusedPanel')?.classList.contains('is-active') && (target.closest('[data-select-game]') || target.closest('.tab[data-target]'))) closePanel({restoreOverview:false});
  const selector = target.closest('[data-darts-game]');
  if (selector) {
    clearGameTimers(); clearAutoTimer();
    ui.selected = selector.getAttribute('data-darts-game');
    resetState(ui.selected);
    renderSelectedGame();
    byId('dartsGameSurface')?.focus({preventScroll:true});
    return;
  }
  const tier = target.closest('[data-darts-tier]');
  if (tier) { changeTier(tier.getAttribute('data-darts-tier')); return; }
  if (target.closest('#dartsAutoNextBtn')) { toggleAutoNext(); return; }
  if (target.closest('#dartsFullscreenBtn')) { toggleFullscreen(); return; }
  const next = target.closest('[data-darts-new-round]');
  if (next) { newRound(next.getAttribute('data-darts-new-round')); return; }
  const answer = target.closest('[data-darts-answer]');
  if (answer) {
    const id = answer.getAttribute('data-darts-answer');
    if (id === 'decision-training') answerDecisionChoice(answer.getAttribute('data-value'));
    else answerStandard(id,answer.getAttribute('data-value'));
    return;
  }
  if (target.closest('[data-start-target-lock]')) { startTargetLock(); return; }
  if (target.closest('[data-start-hold-picture]')) { startHoldPicture(); return; }
  if (target.closest('[data-start-distraction]')) { startDistraction(); return; }
  if (target.closest('[data-start-pressure]')) { startPressure(); return; }
  if (target.closest('[data-submit-routine]')) { submitRoutine(); return; }
  const move = target.closest('[data-routine-move]');
  if (move) { moveRoutine(move.getAttribute('data-routine-move'),Number(move.getAttribute('data-index'))); return; }
  if (target.closest('[data-start-sequence]')) { startSequence(); return; }
  if (target.closest('[data-clear-sequence]')) { stateFor('sequence-recall').input = []; renderSelectedGame(); return; }
  const category = target.closest('[data-decision-category]');
  if (category) { startDecisionCategory(category.getAttribute('data-decision-category')); return; }
  if (target.closest('[data-decision-submit-facts]')) { submitDecisionFacts(); return; }
  if (target.closest('[data-decision-advance]')) { advanceDecision(); return; }
  if (target.closest('[data-decision-return]')) { returnDecisionCategories(); return; }
  if (target.closest('[data-decision-pace-rushed]')) { startRushedPace(); return; }
  const boardTarget = target.closest('[data-board-target]');
  if (boardTarget) {
    const code = boardTarget.getAttribute('data-board-target');
    if (ui.selected === 'target-lock') answerTarget(code);
    else if (ui.selected === 'board-geography') answerGeography(boardTarget.getAttribute('data-board-segment'));
    else if (ui.selected === 'sequence-recall') sequenceClick(code);
  }
}
function handleChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  if (target.matches('[data-confidence-slider]')) {
    const state = stateFor('decision-training'); state.confidence = Number(target.value);
    const value = byId('confidenceValue'); if (value) value.textContent = `${state.confidence}%`;
  }
  if (target.matches('[data-decision-fact]')) {
    const state = stateFor('decision-training');
    const id = target.getAttribute('data-decision-fact');
    state.selected = target.checked ? [...new Set([...state.selected,id])] : state.selected.filter((item) => item !== id);
  }
}
function handleKeydown(event) {
  if (!byId('dartsFocusedPanel')?.classList.contains('is-active')) return;
  if (event.key === 'Escape' && document.fullscreenElement === byId('dartsGameCard')) return;
  if (event.key === 'Escape') { closePanel(); return; }
  const board = event.target.closest?.('[data-board-target]');
  if (board && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); board.click(); return; }
  const selector = event.target.closest?.('[data-darts-game]');
  if (!selector || !['ArrowDown','ArrowUp','ArrowLeft','ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  const buttons = [...document.querySelectorAll('[data-darts-game]')];
  const index = buttons.indexOf(selector);
  const delta = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
  buttons[(index + delta + buttons.length) % buttons.length]?.focus();
}
function installObserver() {
  const list = byId('gamesList');
  if (!list || ui.listObserver) return;
  ui.listObserver = new MutationObserver(queueOverviewSync);
  ui.listObserver.observe(list,{childList:true});
}
function init() {
  ensureStylesheet(); ensurePanel(); ensureOverviewEntry(); installObserver();
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

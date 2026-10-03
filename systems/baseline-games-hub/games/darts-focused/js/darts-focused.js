import {
  DARTBOARD_ORDER,
  GAME_IDS,
  accuracyFor,
  anticlockwiseNeighbour,
  arraysEqual,
  averageResponseMs,
  calibrationScore,
  clockwiseNeighbour,
  createDefaultDartsProfile,
  dartsXpNeededForLevel,
  normaliseTargetCode,
  oppositeSegment,
  recordResult,
  realmContributionForDarts,
  remainingAfterHit,
  sameSet,
  seededPick,
  validateRouteText
} from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';
import {
  GAMES,
  TIER_DEFINITIONS,
  CHECKOUT_SCENARIOS,
  RECOVERY_SCENARIOS,
  TARGETS_BY_TIER,
  DISTRACTION_MISSIONS,
  ROUTINE_SCENARIOS,
  DECISION_CATEGORIES,
  MENTAL_RESET_QUESTIONS,
  EVIDENCE_QUESTIONS,
  RELEVANCE_QUESTIONS,
  IMPULSE_QUESTIONS,
  CONFIDENCE_QUESTIONS,
  PACE_QUESTIONS,
  DECISION_QUESTION_POOLS
} from './darts-focused-content.js';
import { createDartsTimerManager } from './darts-focused-timing.js';
import { loadDartsProfile, persistDartsProfile } from './darts-focused-storage.js';
import { boardSvg, scenarioHeader, routeRecoveryHeader } from './darts-focused-board.js';
import {
  DARTS_ART_URL as ART_URL,
  escapeHtml,
  feedbackHtml,
  choiceButtons,
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
  const level = tierId(id);
  const filtered = pool.filter((item) => Number(item.tier || 1) <= level);
  return filtered.length ? filtered : pool;
}
function pickScenario(pool,key,id = ui.selected) {
  const available = poolForTier(pool,id);
  const stored = ui.lastScenario[key];
  const history = Array.isArray(stored) ? stored : (stored ? [stored] : []);
  const avoidCount = Math.min(3,Math.max(0,available.length - 1));
  const recent = new Set(history.slice(-avoidCount));
  const choices = available.length > 1 ? available.filter((item) => !recent.has(item.key)) : available;
  const picked = randomItem(choices.length ? choices : available);
  if (picked?.key) ui.lastScenario[key] = [...history,picked.key].slice(-4);
  return picked;
}
function shuffledScenario(pool,key,id = ui.selected) {
  const source = pickScenario(pool,key,id);
  return source ? { ...source, options:Array.isArray(source.options) ? shuffle(source.options) : source.options } : null;
}
function targetsForCurrentTier() { return TARGETS_BY_TIER[tierId()] || TARGETS_BY_TIER[1]; }
function sequenceLengthForTier() { return [3,4,5][tierId('sequence-recall') - 1]; }
function sequenceDelayForTier() { return [1150,900,720][tierId('sequence-recall') - 1]; }
function buildSequence() {
  const pool = TARGETS_BY_TIER[tierId('sequence-recall')] || TARGETS_BY_TIER[1];
  const length = sequenceLengthForTier();
  const sequence = [];
  while (sequence.length < length) {
    const options = pool.filter((item) => item !== sequence[sequence.length - 1]);
    sequence.push(randomItem(options));
  }
  return sequence;
}
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
  const segment = randomItem(DARTBOARD_ORDER);
  const relationships = tierId('board-geography') === 1 ? ['clockwise','anticlockwise'] : ['clockwise','anticlockwise','opposite'];
  const relationship = randomItem(relationships);
  const answer = relationship === 'clockwise' ? clockwiseNeighbour(segment) : relationship === 'anticlockwise' ? anticlockwiseNeighbour(segment) : oppositeSegment(segment);
  return { segment, relationship, answer, startedAt:nowMs(), feedback:'' };
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
  document.querySelectorAll('[data-darts-game]').forEach((button) => {
    const selected = button.getAttribute('data-darts-game') === ui.selected;
    button.classList.toggle('is-selected',selected);
    button.setAttribute('aria-selected',String(selected));
    const small = button.querySelector('small');
    if (small) small.textContent = progressLabel(button.getAttribute('data-darts-game'));
  });
}
function syncOverviewProgress() {
  document.querySelectorAll('[data-game-card="darts-focused"] .game-row-meta strong, .darts-focused-overview-row .game-row-meta strong').forEach((node) => {
    node.textContent = `Level ${profile.level} · ${GAME_IDS.length} games`;
  });
}
function renderProgressSummary() {
  const root = byId('dartsProgressSummary');
  const attempted = GAME_IDS.filter((id) => profile.stats[id].attempts > 0).length;
  const totalCorrect = GAME_IDS.reduce((sum,id) => sum + profile.stats[id].correct,0);
  const totalAttempts = GAME_IDS.reduce((sum,id) => sum + profile.stats[id].attempts,0);
  const overall = totalAttempts ? Math.round(totalCorrect / totalAttempts * 100) : 0;
  const confidence = calibrationScore(profile.stats['decision-training']);
  const realm = realmContributionForDarts(profile);
  const needed = dartsXpNeededForLevel(profile.level);
  const xpPct = Math.max(0,Math.min(100,(profile.xp / Math.max(1,needed)) * 100));
  if (root) root.innerHTML =
    '<div class="darts-xp-block"><div class="xp-meta"><strong>Level ' + profile.level + '</strong><span class="inline-note">Experience ' + profile.xp + ' / ' + needed + '</span></div><div class="xp-bar"><div class="xp-fill" style="width:' + xpPct.toFixed(2) + '%"></div></div></div>' +
    '<div class="stat-pills trackcoin-stat-pills">' +
      `<div class="stat-pill">Darts Bank <span>${profile.bank}</span></div>` +
      `<div class="stat-pill">Skill Points <span>${profile.skillPoints}</span></div>` +
      `<div class="stat-pill">Clean Streak <span>${profile.cleanWinStreak}</span></div>` +
      `<div class="stat-pill">Games Attempted <span>${attempted} / ${GAME_IDS.length}</span></div>` +
      `<div class="stat-pill">On-screen Rounds <span>${profile.totalRounds}</span></div>` +
      `<div class="stat-pill">Overall Accuracy <span>${overall}%</span></div>` +
      `<div class="stat-pill">Pressure Level <span>${profile.custom.pressureLevel} / 5</span></div>` +
      `<div class="stat-pill">Decision Calibration <span>${confidence === null ? 'Not measured' : `${confidence}%`}</span></div>` +
      `<div class="stat-pill">Realm Links <span>${GAME_IDS.length} / ${GAME_IDS.length}</span></div>` +
      `<div class="stat-pill">Realm Dash <span>×${realm.manualDamageMult.toFixed(2)}</span></div>` +
      `<div class="stat-pill">Realm Shuriken <span>×${realm.shurikenDamageMult.toFixed(2)}</span></div>` +
    '</div>';
  syncOverviewProgress();
  refreshSelectors();
}
function renderTierControls() {
  const list = byId('dartsTierList');
  const description = byId('dartsTierDescription');
  if (!list || !description) return;
  const selected = tierId();
  const level = gameLevel();
  list.innerHTML = TIER_DEFINITIONS.map((tier) => {
    const unlocked = level >= tier.unlockLevel;
    return `<button class="darts-tier-button${selected === tier.id ? ' is-active' : ''}" data-darts-tier="${tier.id}" type="button" ${unlocked ? '' : 'disabled'}><strong>${tier.name}</strong><span>${unlocked ? `Tier ${tier.id}` : `Unlocks at level ${tier.unlockLevel}`}</span></button>`;
  }).join('');
  description.textContent = TIER_DEFINITIONS[selected - 1].description;
}
function syncActiveControls() {
  const info = byId('dartsActiveInfoBtn');
  const meta = selectedMeta();
  if (info) {
    info.setAttribute('data-bl-info-title',meta.name);
    info.setAttribute('data-bl-info-text',meta.intention);
    info.setAttribute('aria-label',`What ${meta.name} develops`);
  }
  byId('dartsActiveHowBtn')?.setAttribute('data-darts-how',meta.id);
  const auto = byId('dartsAutoNextBtn');
  if (auto) {
    const enabled = autoNextEnabled();
    auto.setAttribute('aria-pressed',String(enabled));
    auto.textContent = `Auto-Next: ${enabled ? 'On' : 'Off'}`;
  }
  syncFullscreenButton();
}
function syncFullscreenButton() {
  const button = byId('dartsFullscreenBtn');
  if (!button) return;
  const active = document.fullscreenElement === byId('dartsGameCard');
  button.setAttribute('aria-pressed',String(active));
  button.textContent = active ? 'Exit Full Screen' : 'Full Screen';
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

const RENDERERS = {
  'checkout-pressure':(state) => {
    const s = state.scenario;
    return `<div class="darts-game-stack">${scenarioHeader('Imagined match state',[['Require',s.score],['Darts',s.darts],['Opponent',s.opponent]])}<h4>Choose the legal checkout route.</h4>${choiceButtons(s.options,'checkout-pressure',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton() : '<p class="darts-coaching-note">Accuracy remains the priority. Every target code shown is physically possible on a standard board.</p>'}</div>`;
  },
  'route-recovery':(state) => {
    const s = state.scenario;
    return `<div class="darts-game-stack">${routeRecoveryHeader(s)}<div class="darts-calculation-note"><strong>Read the ring before subtracting.</strong><span>${escapeHtml(s.actual)} scores ${remainingAfterHit(s.start,s.actual).scored}; therefore ${s.start} − ${remainingAfterHit(s.start,s.actual).scored} = ${remainingAfterHit(s.start,s.actual).remaining} remaining.</span></div><h4>Choose the valid revised route.</h4>${choiceButtons(s.options,'route-recovery',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton() : ''}</div>`;
  },
  'target-lock':(state) => {
    if (state.phase === 'ready') return `<div class="darts-visual-intro"><div class="darts-visual-intro__art"><img src="${ART_URL}" alt="Realistic dartboard"></div><div><span class="darts-eyebrow">Visual precision</span><h4>Lock onto one exact scoring area.</h4><p>The ring and number will be highlighted. Hold the location, ignore the themed interference, then click the exact area.</p><button class="action primary" data-start-target-lock type="button">Start target lock</button></div></div>`;
    if (state.phase === 'show') return `<div class="darts-training-stage"><div class="darts-stage-copy"><span class="darts-eyebrow">Hold this target</span><strong>${state.target}</strong><p>Keep the number and scoring ring together as one visual address.</p></div><div class="darts-board-frame"><div class="darts-interference"><span>Score</span><span>Opponent</span><span>Noise</span></div>${boardSvg({highlight:state.target,label:`Highlighted target ${state.target}`})}</div></div>`;
    return `<div class="darts-game-stack"><div class="darts-task-heading"><span class="darts-eyebrow">Recall phase</span><h4>${state.feedback ? 'Target result' : 'Click the exact target you held in mind.'}</h4></div><div class="darts-board-frame darts-board-frame--interactive">${boardSvg({interactive:!state.feedback,label:'Interactive realistic dartboard'})}</div>${feedbackHtml(state)}${state.feedback ? nextButton('New target') : ''}</div>`;
  },
  'hold-picture':(state) => {
    if (state.phase === 'ready') return `<div class="darts-visual-intro"><div class="darts-visual-intro__art darts-visual-intro__art--memory"><img src="${ART_URL}" alt="Realistic dartboard"></div><div><span class="darts-eyebrow">Board memory</span><h4>Build and retain a board picture.</h4><p>The target appears briefly. The board then becomes a soft silhouette rather than a black obstruction.</p><button class="action primary" data-start-hold-picture type="button">Show target</button></div></div>`;
    if (state.phase === 'show') return `<div class="darts-training-stage"><div class="darts-stage-copy"><span class="darts-eyebrow">Picture phase</span><strong>${state.target}</strong><p>Notice ring, number and position.</p></div><div class="darts-board-frame">${boardSvg({highlight:state.target,label:`Remember ${state.target}`})}</div></div>`;
    return `<div class="darts-game-stack"><div class="darts-memory-veil"><img src="${ART_URL}" alt="Veiled dartboard memory"><div><span>Picture held</span><strong>Recall the exact target</strong></div></div><h4>Which target was highlighted?</h4>${choiceButtons(state.options,'hold-picture',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton('Show another target') : ''}</div>`;
  },
  'distraction-resistance':(state) => {
    const m = state.mission;
    if (state.phase === 'ready') return `<div class="darts-centred-game"><h4>Retain the instruction, not the noise.</h4><p>You will study relevant match information while unrelated notices move around it.</p><button class="action primary" data-start-distraction type="button">Start memory phase</button></div>`;
    if (state.phase === 'show') return `<div class="darts-memory-arena"><div class="darts-memory-card">${scenarioHeader('Instruction to retain',[['Score',m.facts.score],['Primary',m.facts.primary],['Fallback',m.facts.fallback],['Reset word',m.facts.reset]])}</div><span class="distractor d1">Crowd noise</span><span class="distractor d2">New message</span><span class="distractor d3">Previous miss</span><span class="distractor d4">Hurry up</span></div>`;
    return `<div class="darts-game-stack"><h4>${escapeHtml(m.question)}</h4>${choiceButtons(m.options,'distraction-resistance',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton('New instruction') : ''}</div>`;
  },
  'pressure-ladder':(state) => {
    const level = state.phase === 'ready' ? profile.custom.pressureLevel : (state.level || profile.custom.pressureLevel);
    const baseTimes = tierId('pressure-ladder') === 1 ? [18,16,14,12,10] : tierId('pressure-ladder') === 2 ? [16,14,12,10,8] : [14,12,10,8,6];
    if (state.phase === 'ready') return `<div class="darts-game-stack"><div class="darts-pressure-track">${[1,2,3,4,5].map((n) => `<span class="${n === level ? 'is-current' : n < level ? 'is-complete' : ''}">${n}</span>`).join('')}</div><h4>Pressure level ${level}</h4><p>You will have ${baseTimes[level - 1]} seconds to choose a legal route. Accuracy moves you upward; an error moves you down.</p><button class="action primary" data-start-pressure type="button">Begin level ${level}</button>${feedbackHtml(state)}</div>`;
    const s = state.scenario;
    const totalMs = state.seconds * 1000;
    const remainingMs = state.timer ? managedTimerRemaining(state.timer) : totalMs;
    const startScale = Math.max(0,Math.min(1,remainingMs / Math.max(1,totalMs)));
    return `<div class="darts-game-stack"><div class="darts-pressure-bar" style="--pressure-seconds:${Math.max(.001,remainingMs/1000)}s;--pressure-start-scale:${startScale}"><span></span></div>${scenarioHeader(`Pressure level ${level}`,[['Require',s.score],['Darts',s.darts],['Opponent',s.opponent],['Time',`${state.seconds}s`]])}<h4>Choose now, without abandoning calculation.</h4>${choiceButtons(s.options,'pressure-ladder',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton('Return to ladder') : ''}</div>`;
  },
  'board-geography':(state) => {
    const relation = state.relationship === 'clockwise' ? 'clockwise neighbour' : state.relationship === 'anticlockwise' ? 'anticlockwise neighbour' : 'number directly opposite';
    return `<div class="darts-game-stack"><h4>Click the ${relation} of <strong>${state.segment}</strong>.</h4><div class="darts-board-frame darts-board-frame--interactive">${boardSvg({interactive:!state.feedback,label:'Interactive realistic dartboard for board geography'})}</div>${feedbackHtml(state)}${state.feedback ? nextButton('New relationship') : '<p class="darts-coaching-note">Use the physical number order shown on the board.</p>'}</div>`;
  },
  'routine-builder':(state) => `<div class="darts-game-stack"><div class="darts-situation-card"><span class="darts-eyebrow">Routine objective</span><h4>${escapeHtml(state.scenario.title)}</h4></div><p>Put these steps into a stable order for this specific situation.</p><ol class="darts-routine-list">${state.order.map((step,index) => `<li><span>${escapeHtml(step)}</span><div><button type="button" data-routine-move="up" data-index="${index}" aria-label="Move ${escapeHtml(step)} up">↑</button><button type="button" data-routine-move="down" data-index="${index}" aria-label="Move ${escapeHtml(step)} down">↓</button></div></li>`).join('')}</ol><button class="action primary" data-submit-routine type="button" ${state.feedback ? 'disabled' : ''}>Test this sequence</button>${feedbackHtml(state)}${state.feedback ? nextButton('New routine situation') : ''}</div>`,
  'sequence-recall':(state) => {
    if (state.phase === 'ready') return `<div class="darts-visual-intro"><div class="darts-visual-intro__art"><img src="${ART_URL}" alt="Realistic dartboard"></div><div><span class="darts-eyebrow">Ordered memory</span><h4>Remember a ${sequenceLengthForTier()}-target plan.</h4><p>Each target is shown with a large code and a clear sequence number. Reproduce the same order by clicking the board.</p><button class="action primary" data-start-sequence type="button">Show sequence</button></div></div>`;
    if (state.phase === 'show') return `<div class="darts-training-stage"><div class="darts-stage-copy"><span class="darts-eyebrow">Target ${state.showIndex + 1} of ${state.sequence.length}</span><strong>${state.sequence[state.showIndex]}</strong><p>Remember this as position ${state.showIndex + 1}.</p></div><div class="darts-board-frame">${boardSvg({highlight:state.sequence[state.showIndex],label:`Sequence target ${state.sequence[state.showIndex]}`})}</div><div class="darts-sequence-dots">${state.sequence.map((_,index) => `<span class="${index === state.showIndex ? 'is-current' : index < state.showIndex ? 'is-seen' : ''}">${index + 1}</span>`).join('')}</div></div>`;
    return `<div class="darts-game-stack"><div class="darts-task-heading"><span class="darts-eyebrow">Your turn</span><h4>Reproduce the sequence.</h4></div><p class="darts-sequence-readout">${state.input.length ? state.input.map(escapeHtml).join(' → ') : 'Click the first target on the board'}</p><div class="darts-board-frame darts-board-frame--interactive">${boardSvg({interactive:!state.feedback,label:'Interactive realistic dartboard for sequence recall'})}</div>${feedbackHtml(state)}${state.feedback ? nextButton('New sequence') : '<button class="action secondary" data-clear-sequence type="button">Clear selection</button>'}</div>`;
  },
  'decision-training':(state) => renderDecisionTraining(state)
};

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

function answerStandard(gameId,value) {
  const state = stateFor(gameId);
  if (state.feedback) return;
  let correct = false;
  let explanation = '';
  if (gameId === 'checkout-pressure' || gameId === 'route-recovery') {
    const scenario = state.scenario;
    const checkoutScore = gameId === 'route-recovery'
      ? remainingAfterHit(scenario.start,scenario.actual).remaining
      : scenario.score;
    const dartsAvailable = gameId === 'route-recovery' ? scenario.dartsLeft : scenario.darts;
    const routeResult = validateRouteText(checkoutScore,value,dartsAvailable);
    correct = routeResult.valid && routeResult.remaining === 0;
    explanation = correct && value !== scenario.correct
      ? `${value} is also a legal checkout from ${checkoutScore} in ${dartsAvailable} dart${dartsAvailable === 1 ? '' : 's'}. The listed route was ${scenario.correct}.`
      : scenario.explanation;
  } else if (gameId === 'hold-picture') {
    correct = value === state.target;
    explanation = `The highlighted target was ${state.target}.`;
  } else if (gameId === 'distraction-resistance') {
    correct = value === state.mission.correct;
    explanation = `The retained answer was ${state.mission.correct}.`;
  } else if (gameId === 'pressure-ladder') {
    const routeResult = validateRouteText(state.scenario.score,value,state.scenario.darts);
    correct = routeResult.valid && routeResult.remaining === 0;
    explanation = correct && value !== state.scenario.correct
      ? `${value} is also a legal checkout from ${state.scenario.score}. The listed route was ${state.scenario.correct}.`
      : state.scenario.explanation;
    profile.custom.pressureLevel = Math.max(1,Math.min(5,profile.custom.pressureLevel + (correct ? 1 : -1)));
    explanation += ` The next pressure level is ${profile.custom.pressureLevel}.`;
  }
  clearGameTimers();
  record(gameId,correct,elapsedFrom(state));
  state.feedback = { correct, title:correct ? 'Correct decision' : 'Recalculate', text:explanation };
  renderSelectedGame();
  autoAdvance(() => newRound(gameId));
}
function startTargetLock() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('target-lock');
  state.phase = 'show'; state.startedAt = nowMs();
  renderSelectedGame();
  const delay = [2600,2000,1450][tierId('target-lock') - 1];
  scheduleGame(() => { state.phase = 'recall'; state.startedAt = nowMs(); renderSelectedGame(); },delay);
}
function startHoldPicture() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('hold-picture');
  state.phase = 'show';
  const pool = TARGETS_BY_TIER[tierId('hold-picture')];
  const optionCount = [3,4,5][tierId('hold-picture') - 1];
  state.options = shuffle([state.target,...shuffle(pool.filter((item) => item !== state.target)).slice(0,optionCount - 1)]);
  renderSelectedGame();
  const delay = [3200,2400,1750][tierId('hold-picture') - 1];
  scheduleGame(() => { state.phase = 'recall'; state.startedAt = nowMs(); renderSelectedGame(); },delay);
}
function startDistraction() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('distraction-resistance');
  state.phase = 'show';
  renderSelectedGame();
  const delay = [6000,4800,3800][tierId('distraction-resistance') - 1];
  scheduleGame(() => { state.phase = 'question'; state.startedAt = nowMs(); renderSelectedGame(); },delay);
}
function answerTarget(code) {
  const state = stateFor('target-lock');
  if (ui.selected !== 'target-lock' || state.phase !== 'recall' || state.feedback) return;
  const selected = normaliseTargetCode(code);
  const correct = selected === state.target;
  record('target-lock',correct,elapsedFrom(state));
  state.feedback = { correct, title:correct ? 'Target retained' : 'Target shifted', text:`The target was ${state.target}; you selected ${selected || code}.` };
  renderSelectedGame();
  autoAdvance(() => newRound('target-lock'));
}
function answerGeography(segment) {
  const state = stateFor('board-geography');
  if (state.feedback) return;
  const correct = Number(segment) === Number(state.answer);
  record('board-geography',correct,elapsedFrom(state));
  state.feedback = { correct, title:correct ? 'Board relationship correct' : 'Different position', text:`The ${state.relationship} answer from ${state.segment} is ${state.answer}.` };
  renderSelectedGame();
  autoAdvance(() => newRound('board-geography'));
}
function startPressure() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('pressure-ladder');
  state.phase = 'question';
  state.level = profile.custom.pressureLevel;
  state.scenario = shuffledScenario(CHECKOUT_SCENARIOS,'pressure','pressure-ladder');
  const times = tierId('pressure-ladder') === 1 ? [18,16,14,12,10] : tierId('pressure-ladder') === 2 ? [16,14,12,10,8] : [14,12,10,8,6];
  state.seconds = times[state.level - 1];
  state.startedAt = nowMs();
  renderSelectedGame();
  state.timer = scheduleGame(() => {
    if (state.phase !== 'question' || state.feedback) return;
    profile.custom.pressureLevel = Math.max(1,profile.custom.pressureLevel - 1);
    record('pressure-ladder',false,state.seconds * 1000);
    state.feedback = { correct:false, title:'Time elapsed', text:`The legal route was ${state.scenario.correct}. The ladder moved down one level.` };
    renderSelectedGame();
    autoAdvance(() => newRound('pressure-ladder'));
  },state.seconds * 1000);
}
function moveRoutine(direction,index) {
  const state = stateFor('routine-builder');
  if (state.feedback) return;
  const next = direction === 'up' ? index - 1 : index + 1;
  if (next < 0 || next >= state.order.length) return;
  [state.order[index],state.order[next]] = [state.order[next],state.order[index]];
  renderSelectedGame();
}
function submitRoutine() {
  const state = stateFor('routine-builder');
  if (state.feedback) return;
  const correct = arraysEqual(state.order,state.scenario.correct);
  record('routine-builder',correct,elapsedFrom(state));
  state.feedback = {
    correct,
    title:correct ? 'Routine is stable' : 'Sequence needs adjustment',
    text:correct ? 'The sequence matches this situation.' : `A stable order is: ${state.scenario.correct.join(' → ')}.`
  };
  renderSelectedGame();
  autoAdvance(() => newRound('routine-builder'));
}
function startSequence() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('sequence-recall');
  state.sequence = buildSequence();
  state.phase = 'show'; state.showIndex = 0;
  renderSelectedGame();
  scheduleGame(advanceSequence,sequenceDelayForTier());
}
function advanceSequence() {
  const state = stateFor('sequence-recall');
  if (state.phase !== 'show') return;
  state.showIndex += 1;
  if (state.showIndex >= state.sequence.length) {
    state.phase = 'recall'; state.input = []; state.startedAt = nowMs(); renderSelectedGame(); return;
  }
  renderSelectedGame();
  scheduleGame(advanceSequence,sequenceDelayForTier());
}
function sequenceClick(code) {
  const state = stateFor('sequence-recall');
  if (state.phase !== 'recall' || state.feedback) return;
  const selected = normaliseTargetCode(code);
  if (!selected) return;
  state.input.push(selected);
  if (state.input.length >= state.sequence.length) {
    const correct = arraysEqual(state.input,state.sequence);
    record('sequence-recall',correct,elapsedFrom(state));
    state.feedback = { correct, title:correct ? 'Sequence preserved' : 'Order changed', text:`Shown: ${state.sequence.join(' → ')}. Entered: ${state.input.join(' → ')}.` };
  }
  renderSelectedGame();
  if (state.feedback) autoAdvance(() => newRound('sequence-recall'));
}

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

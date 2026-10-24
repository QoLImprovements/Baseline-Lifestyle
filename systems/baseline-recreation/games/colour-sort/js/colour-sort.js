import {
  BOTTLE_CAPACITY,
  COLOURS,
  LEVELS,
  applyPour,
  canPour,
  hintMove,
  initialBottles,
  isBottleComplete,
  isSolved,
  levelById,
  levelColours,
  topRunLength
} from './colour-sort-engine.mjs?v=GAMES_REVIEW_20261023_1';
import {
  awardXp,
  clone,
  createGameExtensionShell,
  escapeHtml,
  loadStoredProfile,
  saveStoredProfile,
  xpNeededForLevel
} from '../../../js/game-extension-support.mjs?v=RECREATION_COHERENCE_20261023_2';

const BUILD = 'COLOUR_SORT_RECREATION_FULLSCREEN_20261024_1';
const APP = 'coloursort';
const COLOUR_SORT_TIERS = Object.freeze([
  { id:'starter', name:'Starter', from:1, to:12 },
  { id:'flow', name:'Flow', from:13, to:24 },
  { id:'strategy', name:'Strategy', from:25, to:36 },
  { id:'advanced', name:'Advanced', from:37, to:48 },
  { id:'expert', name:'Expert', from:49, to:60 }
]);
function tierForLevel(levelId){
  const value=Math.max(1,Math.min(LEVELS.length,Number(levelId)||1));
  return COLOUR_SORT_TIERS.find(tier=>value>=tier.from&&value<=tier.to)||COLOUR_SORT_TIERS[0];
}
function mechanicsForLevel(levelId){
  const level=levelById(levelId);
  const id=Math.max(1,Math.min(LEVELS.length,Number(levelId)||1));
  const coverBuried=id>=25;
  const lockMoves=id>=49?2:(id>=37?1:0);
  let lockedBottle=-1;
  if(lockMoves){
    for(let index=level.bottles.length-1;index>=0;index-=1){
      if(level.bottles[index].length===0){ lockedBottle=index; break; }
    }
  }
  return {
    coverBuried,
    lockMoves,
    lockedBottle,
    label:id>=49?'Covered layers · one spare locked for 2 moves':id>=37?'Covered layers · one spare locked for 1 move':id>=25?'Covered buried layers':'Standard open bottles'
  };
}
function lockedBottleIndices(active){
  if(!active) return [];
  const mechanics=mechanicsForLevel(active.level);
  if(mechanics.lockedBottle<0 || active.moves>=mechanics.lockMoves) return [];
  return [mechanics.lockedBottle];
}
function isBottleLocked(active,index){
  return lockedBottleIndices(active).includes(Number(index));
}
const DEFAULT_PROFILE = Object.freeze({
  app:APP,
  level:1,
  xp:0,
  gamesPlayed:0,
  highestUnlocked:1,
  completedLevels:[],
  bestMoves:{},
  selectedLevel:1,
  selectedTier:'starter',
  recentLevels:[],
  activePuzzle:null
});

let profile = null;
let selectedBottle = -1;
let undoStack = [];
let hint = null;
let statusMessage = '';
let storageAuth = null;
let newGamePointerAt = 0;
let isAnimating = false;
let levelEntranceMotion = false;
let bottleDragState = null;
let suppressBottleClick = false;
let invalidBottle = -1;
let invalidTimer = 0;

function number(value, minimum = 0) {
  return Math.max(minimum, Math.floor(Number(value) || 0));
}

function clampLevel(value) {
  return Math.max(1, Math.min(LEVELS.length, number(value, 1)));
}

function sameInventory(bottles, levelId) {
  const expected = initialBottles(levelId).flat().slice().sort((a, b) => a - b).join(',');
  const actual = Array.isArray(bottles) ? bottles.flat().slice().sort((a, b) => a - b).join(',') : '';
  return expected === actual;
}

function validPuzzle(value) {
  if (!value || typeof value !== 'object') return null;
  const level = clampLevel(value.level);
  const source = value.bottles;
  const expectedCount = levelById(level).bottles.length;
  if (!Array.isArray(source) || source.length !== expectedCount || !source.every(bottle => Array.isArray(bottle) && bottle.length <= BOTTLE_CAPACITY && bottle.every(colour => COLOURS[colour]))) return null;
  if (!sameInventory(source, level)) return null;
  return {
    level,
    bottles:source.map(bottle => bottle.slice()),
    moves:number(value.moves),
    settled:Boolean(value.settled)
  };
}

function normaliseProfile(value) {
  const source = value && typeof value === 'object' ? value : {};
  const completed = [...new Set((Array.isArray(source.completedLevels) ? source.completedLevels : []).map(clampLevel))].sort((a, b) => a - b);
  const furthest = completed.length ? Math.min(LEVELS.length, Math.max(...completed) + 1) : 1;
  const highestUnlocked = Math.max(1, Math.min(LEVELS.length, Math.max(number(source.highestUnlocked, 1), furthest)));
  const bestMoves = {};
  if (source.bestMoves && typeof source.bestMoves === 'object') {
    Object.entries(source.bestMoves).forEach(([key, value]) => {
      const level = clampLevel(key);
      const moves = number(value);
      if (moves > 0) bestMoves[level] = moves;
    });
  }
  const selectedLevel = clampLevel(source.selectedLevel);
  const requestedTier=String(source.selectedTier||tierForLevel(selectedLevel).id);
  const selectedTier=COLOUR_SORT_TIERS.some(tier=>tier.id===requestedTier)?requestedTier:'starter';
  const recentLevels=(Array.isArray(source.recentLevels)?source.recentLevels:[])
    .map(clampLevel).filter((value,index,list)=>list.indexOf(value)===index).slice(-5);
  return {
    app:APP,
    level:Math.max(1, number(source.level, 1)),
    xp:number(source.xp),
    gamesPlayed:number(source.gamesPlayed),
    highestUnlocked,
    completedLevels:completed,
    bestMoves,
    selectedLevel,
    selectedTier,
    recentLevels,
    activePuzzle:validPuzzle(source.activePuzzle)
  };
}

function puzzle() {
  return profile?.activePuzzle || null;
}

function autoNextApi() {
  const api = globalThis.BaselineGamesAutoNext;
  return api && typeof api.enabled === 'function' ? api : null;
}

function syncAutoNextControl() {
  try { autoNextApi()?.sync?.(); } catch (_) {}
}

function persist() {
  saveStoredProfile(APP, profile);
  shell.refreshOverview();
}

function startLevel(levelId, { persistChange = true } = {}) {
  try { autoNextApi()?.clear?.(APP); } catch (_) {}
  const level = clampLevel(levelId);
  profile.selectedLevel = level;
  profile.selectedTier = tierForLevel(level).id;
  profile.activePuzzle = { level, bottles:initialBottles(level), moves:0, settled:false };
  selectedBottle = -1;
  undoStack = [];
  hint = null;
  statusMessage = 'Select a bottle, then select a valid destination.';
  levelEntranceMotion = true;
  if (persistChange) persist();
  render();
}
function tierById(id){
  return COLOUR_SORT_TIERS.find(tier=>tier.id===String(id||''))||COLOUR_SORT_TIERS[0];
}
function randomLevelForTier(tierId){
  const tier=tierById(tierId);
  const all=LEVELS.filter(level=>level.id>=tier.from&&level.id<=tier.to).map(level=>level.id);
  const recent=new Set(Array.isArray(profile.recentLevels)?profile.recentLevels:[]);
  const available=all.filter(id=>!recent.has(id));
  const pool=available.length?available:all;
  return pool[Math.floor(Math.random()*pool.length)]||tier.from;
}
function startTierGame(tierId=profile.selectedTier){
  const tier=tierById(tierId);
  profile.selectedTier=tier.id;
  const level=randomLevelForTier(tier.id);
  profile.recentLevels=(Array.isArray(profile.recentLevels)?profile.recentLevels:[]).concat(level).slice(-5);
  startLevel(level);
}
function selectTier(tierId){
  const tier=tierById(tierId);
  profile.selectedTier=tier.id;
  profile.activePuzzle=null;
  selectedBottle=-1;
  undoStack=[];
  hint=null;
  statusMessage='';
  persist();
  render();
  setTab('game');
}

function colourMeta(id) {
  return COLOURS[id] || { id, name:'Colour', symbol:'?' };
}

function bottleLabel(bottle, index) {
  if (!bottle.length) return `Bottle ${index + 1}, empty`;
  const exposed = colourMeta(bottle[bottle.length - 1]);
  return `Bottle ${index + 1}, ${bottle.length} of ${BOTTLE_CAPACITY} units, top colour ${exposed.name}`;
}

function segmentHtml(colour, covered = false) {
  if(covered){
    return '<span class="colour-sort-segment is-covered" data-covered="true" title="Covered layer"><span aria-hidden="true">?</span><span class="sr-only">Covered layer</span></span>';
  }
  const meta = colourMeta(colour);
  return `<span class="colour-sort-segment" data-colour="${meta.id}" title="${escapeHtml(meta.name)}"><span aria-hidden="true">${escapeHtml(meta.symbol)}</span><span class="sr-only">${escapeHtml(meta.name)}</span></span>`;
}

function bottleHtml(bottle, index) {
  const active = puzzle();
  const complete = isBottleComplete(bottle);
  const mechanics=active?mechanicsForLevel(active.level):mechanicsForLevel(profile?.selectedLevel||1);
  const locked=Boolean(active&&isBottleLocked(active,index));
  const selected = selectedBottle === index;
  const hintedFrom = hint?.from === index;
  const hintedTo = hint?.to === index;
  const validTarget = selectedBottle >= 0 && selectedBottle !== index && Boolean(active && !locked && !isBottleLocked(active,selectedBottle) && canPour(active.bottles, selectedBottle, index));
  const exposedStart=Math.max(0,bottle.length-topRunLength(bottle));
  const layers=bottle.map((colour,layerIndex)=>{
    const covered=mechanics.coverBuried && !complete && layerIndex < exposedStart;
    return segmentHtml(colour,covered);
  }).join('');
  const label=locked
    ? bottleLabel(bottle,index) + ', temporarily locked'
    : bottleLabel(bottle,index);
  return `<button class="colour-sort-bottle${complete ? ' is-complete' : ''}${locked ? ' is-locked' : ''}${selected ? ' is-selected' : ''}${hintedFrom ? ' is-hint-from' : ''}${hintedTo ? ' is-hint-to' : ''}${validTarget ? ' is-valid-target' : ''}${invalidBottle === index ? ' is-invalid-target' : ''}${levelEntranceMotion ? ' is-entering' : ''}" style="--bottle-index:${index}" data-colour-bottle="${index}" type="button" aria-pressed="${selected}" aria-label="${escapeHtml(label)}" ${isAnimating || locked ? 'disabled' : ''}>
    <span class="colour-sort-glass" aria-hidden="true"><span class="colour-sort-stack">${layers}</span></span>
    <span class="colour-sort-bottle-number">${index + 1}</span>
    ${locked ? '<span class="colour-sort-lock-badge" aria-hidden="true">LOCKED</span>' : ''}
  </button>`;
}

function statusHtml() {
  const active = puzzle();
  if (!active) return '<strong>Ready.</strong><span class="inline-note">Choose a difficulty tier, then press New Game.</span>';
  if (isSolved(active.bottles)) {
    const best = profile.bestMoves[active.level] || active.moves;
    return `<strong>${escapeHtml(tierForLevel(active.level).name)} game sorted in ${active.moves} moves.</strong><span class="inline-note">Best for this layout: ${best} move${best === 1 ? '' : 's'}. Press New Game for another unpredictable layout in this tier.</span>`;
  }
  if (hint) return `<strong>Hint: pour bottle ${hint.from + 1} into bottle ${hint.to + 1}.</strong><span class="inline-note">Hints follow a verified solution path and respect temporary bottle locks.</span>`;
  if (selectedBottle >= 0) return `<strong>Bottle ${selectedBottle + 1} selected.</strong><span class="inline-note">Choose an empty unlocked bottle or one whose exposed colour matches.</span>`;
  const mechanics=mechanicsForLevel(active.level);
  const locks=lockedBottleIndices(active);
  const mechanicText=locks.length
    ? `Bottle ${locks[0]+1} unlocks after ${mechanics.lockMoves-active.moves} more successful move${mechanics.lockMoves-active.moves===1?'':'s'}.`
    : (mechanics.coverBuried ? 'Covered layers reveal only when they reach the top.' : 'Only the contiguous exposed colour can pour.');
  return `<strong>${escapeHtml(statusMessage || 'Select a bottle, then a destination.')}</strong><span class="inline-note">${escapeHtml(mechanicText)}</span>`;
}

function renderGameInfo() {
  const root = document.getElementById('colourSortGameInfo');
  if (!root || !profile) return;
  const needed = xpNeededForLevel(profile.level);
  const pct = Math.min(100, profile.xp / needed * 100);
  root.innerHTML = `
    <div class="progress-shell progress-shell--trackcoin">
      <div class="xp-row">
        <div>
          <div class="trackcoin-level-title">Player Rank ${profile.level}</div>
          <div class="xp-bar"><div class="xp-fill" style="width:${pct}%"></div></div>
          <div class="trackcoin-xp-meta-row"><span class="inline-note">${profile.xp} / ${needed} XP</span></div>
        </div>
      </div>
      <div class="stat-pills trackcoin-stat-pills">
        <div class="stat-pill">Difficulty Tier <span>${escapeHtml(tierById(profile.selectedTier).name)}</span></div>
        <div class="stat-pill">Completed Games <span>${profile.gamesPlayed}</span></div>
        <div class="stat-pill">Unique Layouts Solved <span>${profile.completedLevels.length}</span></div>
        <div class="stat-pill">Recorded Bests <span>${Object.keys(profile.bestMoves).length}</span></div>
      </div>
    </div>
    <div class="summary-box"><strong>Match the exposed colour.</strong><span class="inline-note">Select a source bottle and then an empty bottle or a bottle with the same colour on top. The largest contiguous exposed run pours automatically, up to the destination capacity. Sort every colour to complete the game.</span></div>`;
}

function renderGame() {
  const root = document.getElementById('colourSortGameCard');
  if (!root) return;
  const active = puzzle();
  if (!active) {
    root.innerHTML = `<div class="colour-sort-empty"><p>${escapeHtml(tierById(profile.selectedTier).name)} Tier selected. Press New Game when ready.</p><div class="game-window-actions game-common-actions"><button class="action ghost start-new-game-toggle game-control-icon game-shell-action game-shell-action--icon" data-colour-action="new" data-tooltip="New Game · Alt+N" title="New Game · Alt+N" aria-label="New Game" type="button"><span aria-hidden="true">＋</span><span class="sr-only">New Game</span></button><button class="action ghost auto-next-toggle game-control-icon game-shell-action game-shell-action--icon" data-auto-next-toggle="${APP}" type="button" aria-pressed="false" aria-label="Auto-next off"><span aria-hidden="true">A</span><span class="sr-only">Auto-next</span></button><button class="action ghost game-shell-action game-shell-action--icon game-fullscreen-toggle" data-colour-action="fullscreen" data-tooltip="Full screen · Alt+F" type="button" aria-label="Full screen" title="Full screen — Alt+F"><svg class="game-shell-action__svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"></path></svg><span class="sr-only">Full screen</span></button></div></div>`;
    syncAutoNextControl();
    return;
  }
  const solved = isSolved(active.bottles);
  const mechanics=mechanicsForLevel(active.level);
  const colours = levelColours(levelById(active.level)).length;
  const sorted = active.bottles.filter(bottle => isBottleComplete(bottle)).length;
  const sortedPercent = colours ? Math.min(100, Math.round(sorted / colours * 100)) : 0;
  root.innerHTML = `
    <div class="colour-sort-active-header">
      <div class="stat-pills">
        <div class="stat-pill">Tier <span>${escapeHtml(tierForLevel(active.level).name)}</span></div>
        <div class="stat-pill">Game <span>${profile.gamesPlayed + (solved?0:1)}</span></div>
        <div class="stat-pill">Sorted <span>${sorted} / ${colours}</span></div>
        <div class="stat-pill">Moves <span>${active.moves}</span></div>
        <div class="stat-pill">Best <span>${profile.bestMoves[active.level] || '—'}</span></div>
      </div>
    </div>
    <div class="game-live-xp" data-live-xp="coloursort"><strong>Player Rank ${profile.level}</strong><div class="game-live-xp__bar"><span style="width:${Math.min(100, profile.xp / xpNeededForLevel(profile.level) * 100)}%"></span></div><span>${profile.xp} / ${xpNeededForLevel(profile.level)} XP</span></div>
    <div class="summary-box round-status-card" aria-live="polite">${statusHtml()}</div>
    <div class="colour-sort-progress-head"><div><strong>Game Progress</strong><span>Drag a bottle onto a valid destination, or tap source then destination.</span></div><strong>${sorted} / ${colours}</strong></div>
    <div class="colour-sort-progress-meter" aria-label="${sorted} of ${colours} colours sorted"><span style="width:${sortedPercent}%"></span></div>
    ${mechanics.coverBuried || mechanics.lockMoves ? `<div class="colour-sort-mechanic-note"><strong>${escapeHtml(tierForLevel(active.level).name)} mechanic</strong><span>${escapeHtml(mechanics.label)}</span></div>` : ''}
    <div class="colour-sort-board${isAnimating ? ' is-animating-pour' : ''}${solved ? ' is-level-complete' : ''}" role="group" aria-label="Colour Sort bottles">
      ${solved ? `<div class="colour-sort-complete-banner" aria-hidden="true"><strong>GAME COMPLETE</strong><span>${active.moves} moves</span></div>` : ''}
      ${active.bottles.map(bottleHtml).join('')}
    </div>
    <div class="game-specific-actions colour-sort-quiet-actions" aria-label="Colour Sort puzzle actions">
      <button class="action ghost game-control-icon" data-colour-action="undo" data-tooltip="Undo · Alt+U" title="Undo · Alt+U" aria-label="Undo" type="button" ${!undoStack.length || solved || isAnimating ? 'disabled' : ''}><span aria-hidden="true">↶</span><span class="sr-only">Undo</span></button>
      <button class="action ghost game-control-icon" data-colour-action="hint" data-tooltip="Hint · Alt+H" title="Hint · Alt+H" aria-label="Hint" type="button" ${solved || isAnimating ? 'disabled' : ''}><span aria-hidden="true">?</span><span class="sr-only">Hint</span></button>
      <button class="action ghost game-control-icon" data-colour-action="restart" data-tooltip="Restart · Alt+R" title="Restart · Alt+R" aria-label="Restart" type="button" ${isAnimating ? 'disabled' : ''}><span aria-hidden="true">R</span><span class="sr-only">Restart</span></button>
    </div>
    <div class="game-window-actions game-common-actions">
      <button class="action ghost start-new-game-toggle game-control-icon game-shell-action game-shell-action--icon" data-colour-action="new" data-tooltip="New Game · Alt+N" title="New Game · Alt+N" aria-label="New Game" type="button"><span aria-hidden="true">＋</span><span class="sr-only">New Game</span></button>
      <button class="action ghost auto-next-toggle game-control-icon game-shell-action game-shell-action--icon" data-auto-next-toggle="${APP}" type="button" aria-pressed="false" aria-label="Auto-next off"><span aria-hidden="true">A</span><span class="sr-only">Auto-next</span></button>
      <button class="action ghost game-shell-action game-shell-action--icon game-fullscreen-toggle" data-colour-action="fullscreen" data-tooltip="Full screen · Alt+F" type="button" aria-label="Full screen" title="Full screen — Alt+F"><svg class="game-shell-action__svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"></path></svg><span class="sr-only">Full screen</span></button>
    </div>`;
  levelEntranceMotion = false;
  syncAutoNextControl();
}

function tierDescription(tier){
  const mechanic=mechanicsForLevel(tier.from);
  return tier.id==='starter'
    ? 'Open bottles and foundational sorting.'
    : tier.id==='flow'
      ? 'More colours and tighter planning.'
      : tier.id==='strategy'
        ? 'Covered buried layers add memory and sequencing.'
        : tier.id==='advanced'
          ? 'Covered layers plus a temporarily locked spare bottle.'
          : 'Highest colour count with longer opening locks and dense planning.';
}
function renderLevels() {
  const root = document.getElementById('colourSortLevelsCard');
  if (!root) return;
  root.innerHTML = '<div class="colour-sort-tier-list">' + COLOUR_SORT_TIERS.map(tier => `
    <button class="colour-sort-tier-choice${profile.selectedTier===tier.id?' is-active':''}" data-colour-tier="${tier.id}" type="button" aria-pressed="${profile.selectedTier===tier.id}">
      <strong>${escapeHtml(tier.name)} Tier</strong>
      <span>${escapeHtml(tierDescription(tier))}</span>
      <small>New Game draws from a varied solver-checked layout pool.</small>
    </button>`).join('') + '</div><div class="summary-box"><strong>Difficulty tiers, not levels</strong><span class="inline-note">Each tier contains many layouts. New Game selects within the tier while avoiding your most recent layouts, so progression is not a predictable numbered sequence.</span></div>';
}

function renderProgress() {
  const root = document.getElementById('colourSortProgressCard');
  if (!root) return;
  const needed = xpNeededForLevel(profile.level);
  const pct = Math.min(100, profile.xp / needed * 100);
  const remaining = Math.max(0, needed - profile.xp);
  root.innerHTML = `
    <section class="coherent-progress-overview">
      <div class="coherent-progress-heading"><div><span class="coherent-progress-kicker">Colour Sort</span><strong>Player Rank ${profile.level}</strong></div><div class="coherent-progress-next">${remaining} XP to Player Rank ${profile.level + 1}</div></div>
      <div class="coherent-progress-xp-meta"><span>${profile.xp} / ${needed} XP</span><span>${Math.round(pct)}%</span></div>
      <div class="coherent-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${needed}" aria-valuenow="${profile.xp}"><span style="width:${pct}%"></span></div>
    </section>
    <div class="coherent-progress-grid">
      <div class="coherent-progress-stat"><span>Unique layouts solved</span><strong>${profile.completedLevels.length}</strong></div>
      <div class="coherent-progress-stat"><span>Completed runs</span><strong>${profile.gamesPlayed}</strong></div>
      <div class="coherent-progress-stat"><span>Difficulty tier</span><strong>${escapeHtml(tierById(profile.selectedTier).name)}</strong></div>
      <div class="coherent-progress-stat"><span>Recorded bests</span><strong>${Object.keys(profile.bestMoves).length}</strong></div>
      <div class="coherent-progress-stat"><span>Recent layout memory</span><strong>${profile.recentLevels.length} games</strong></div>
    </div>`;
}

const COLOUR_TABS = Object.freeze(['game','tiers','progress']);

function colourTabFromLocation() {
  if (!/^\/baseline-recreation\/games\/colour-sort\/?$/i.test(String(location.pathname || ''))) return 'game';
  try {
    const requested = String(new URLSearchParams(location.search || '').get('view') || '').toLowerCase();
    return requested==='levels' ? 'tiers' : (COLOUR_TABS.includes(requested) ? requested : 'game');
  } catch (_) { return 'game'; }
}

function colourTabUrl(name) {
  const next = COLOUR_TABS.includes(name) ? name : 'game';
  const url = new URL(location.href);
  url.pathname = '/baseline-recreation/games/colour-sort';
  if (next === 'game') url.searchParams.delete('view');
  else url.searchParams.set('view', next);
  url.hash = '';
  return url.pathname + url.search;
}

function setTab(name, historyMode = 'none') {
  const next = COLOUR_TABS.includes(name) ? name : 'game';
  document.querySelectorAll('[data-colour-tab]').forEach(button => button.classList.toggle('is-active', button.dataset.colourTab === next));
  const cards={game:'colourSortGameCard',tiers:'colourSortLevelsCard',progress:'colourSortProgressCard'};
  Object.entries(cards).forEach(([key,id])=>{ const card=document.getElementById(id); if(card) card.hidden=key!==next; });
  if (historyMode !== 'none' && /^\/baseline-recreation\/games\/colour-sort\/?$/i.test(String(location.pathname || ''))) {
    try {
      const nextUrl = colourTabUrl(next);
      const currentUrl = location.pathname + location.search + location.hash;
      if (currentUrl !== nextUrl) {
        const method = historyMode === 'replace' ? 'replaceState' : 'pushState';
        history[method]({ recreationGame:'colour-sort', view:next }, '', nextUrl);
      }
    } catch (_) {}
  }
}

function render() {
  renderGameInfo();
  renderGame();
  renderLevels();
  renderProgress();
  shell.refreshOverview();
}

function clearBottleDragTargets() {
  document.querySelectorAll('#colourSortGameCard .colour-sort-bottle').forEach(bottle => {
    bottle.classList.remove('is-drag-origin', 'is-drag-valid', 'is-drag-invalid', 'is-valid-target');
  });
}

function ghostTransform(x, y, rotation = 0, scale = 1.035) {
  return `translate3d(${x}px,${y}px,0) translate(-50%,-50%) rotate(${rotation}deg) scale(${scale})`;
}

function setBottleGhostPosition(ghost, x, y, rotation = 0, scale = 1.035) {
  if (!ghost) return;
  ghost.style.transform = ghostTransform(x, y, rotation, scale);
  ghost.dataset.motionX = String(x);
  ghost.dataset.motionY = String(y);
}

function createBottleDragGhost(source) {
  const rect = source.getBoundingClientRect();
  const layer = document.createElement('div');
  const ghostBottle = source.cloneNode(true);
  layer.className = 'colour-sort-panel colour-sort-drag-ghost';
  layer.setAttribute('aria-hidden', 'true');
  ghostBottle.className = 'colour-sort-bottle';
  ghostBottle.removeAttribute('data-colour-bottle');
  ghostBottle.removeAttribute('aria-pressed');
  ghostBottle.disabled = true;
  ghostBottle.style.width = rect.width + 'px';
  layer.appendChild(ghostBottle);
  // A body-level clone is not painted while the game card owns the browser
  // fullscreen top layer. Keep the moving bottle inside that fullscreen subtree.
  const fullscreenHost = document.fullscreenElement;
  const host = fullscreenHost && fullscreenHost.contains(source) ? fullscreenHost : document.body;
  host.appendChild(layer);
  setBottleGhostPosition(layer, rect.left + rect.width / 2, rect.top + rect.height / 2, 0, 1);
  return layer;
}

function bottleAtPointer(clientX, clientY) {
  const element = document.elementFromPoint(clientX, clientY);
  let bottle = element instanceof Element ? element.closest('#colourSortGameCard [data-colour-bottle]') : null;

  // Fingers obscure the exact drop point. On coarse pointers, accept a nearby
  // bottle when the release lands just outside its visual glass.
  if (!bottle && window.matchMedia?.('(pointer:coarse)').matches) {
    let best = null;
    let bestDistance = Infinity;
    document.querySelectorAll('#colourSortGameCard [data-colour-bottle]').forEach(candidate => {
      const rect = candidate.getBoundingClientRect();
      const dx = Math.max(rect.left - clientX, 0, clientX - rect.right);
      const dy = Math.max(rect.top - clientY, 0, clientY - rect.bottom);
      const distance = Math.hypot(dx, dy);
      if (distance < bestDistance) { best = candidate; bestDistance = distance; }
    });
    if (bestDistance <= 34) bottle = best;
  }

  if (!bottle) return null;
  const index = Number(bottle.dataset.colourBottle);
  return Number.isInteger(index) ? { element:bottle, index } : null;
}

function updateBottleDragTarget(state, target, active) {
  const nextIndex = target?.index ?? -1;
  const valid = Boolean(target && target.index !== state.from && !isBottleLocked(active,state.from) && !isBottleLocked(active,target.index) && canPour(active.bottles, state.from, target.index));
  if (state.target === nextIndex && state.targetValid === valid) return;

  state.targetElement?.classList.remove('is-drag-valid', 'is-drag-invalid');
  state.target = nextIndex;
  state.targetValid = valid;
  state.targetElement = target?.element || null;

  if (!target || target.index === state.from) return;
  target.element.classList.add(valid ? 'is-drag-valid' : 'is-drag-invalid');
}

function queueBottleGhostPosition(state, clientX, clientY) {
  state.pointerX = clientX;
  state.pointerY = clientY;
  if (state.raf) return;
  state.raf = requestAnimationFrame(() => {
    state.raf = 0;
    if (!state.ghost?.isConnected) return;

    let x = state.pointerX - state.grabOffsetX;
    let y = state.pointerY - state.grabOffsetY;

    if (state.targetValid && state.targetElement?.isConnected) {
      const rect = state.targetElement.getBoundingClientRect();
      const targetX = rect.left + rect.width / 2;
      const targetY = rect.top + rect.height * .46;
      x += (targetX - x) * .09;
      y += (targetY - y) * .07;
    }

    state.visualX = x;
    state.visualY = y;
    setBottleGhostPosition(state.ghost, x, y);
  });
}

function markInvalidBottle(index) {
  window.clearTimeout(invalidTimer);
  invalidBottle = Number.isInteger(index) ? index : -1;
  renderGame();
  invalidTimer = window.setTimeout(() => {
    invalidBottle = -1;
    renderGame();
  }, 260);
}

function releaseDragClasses(state) {
  state?.targetElement?.classList.remove('is-drag-valid', 'is-drag-invalid');
  clearBottleDragTargets();
  document.documentElement.classList.remove('is-dragging-colour-sort-bottle');
}

function cleanupBottleDrag({ removeGhost = true } = {}) {
  const state = bottleDragState;
  if (state?.raf) cancelAnimationFrame(state.raf);
  releaseDragClasses(state);
  if (removeGhost && state?.ghost?.isConnected) state.ghost.remove();
  bottleDragState = null;
}

function handleBottlePointerDown(event) {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  const rawTarget=event.target instanceof Element ? event.target : null;
  const newGame=rawTarget?.closest('#colourSortGameCard [data-colour-action="new"]');
  if(newGame){
    event.preventDefault();
    event.stopPropagation();
    if(typeof event.stopImmediatePropagation==='function') event.stopImmediatePropagation();
    newGamePointerAt=performance.now();
    startTierGame(profile.selectedTier);
    return;
  }
  if (isAnimating || bottleDragState) return;
  const button = rawTarget ? rawTarget.closest('#colourSortGameCard [data-colour-bottle]') : null;
  const active = puzzle();
  if (!button || !active || isSolved(active.bottles)) return;
  const from = Number(button.dataset.colourBottle);
  if (!Number.isInteger(from) || !active.bottles[from]?.length || isBottleLocked(active,from)) return;

  const rect = button.getBoundingClientRect();
  bottleDragState = {
    pointerId:event.pointerId,
    from,
    sourceElement:button,
    startX:event.clientX,
    startY:event.clientY,
    grabOffsetX:event.clientX - (rect.left + rect.width / 2),
    grabOffsetY:event.clientY - (rect.top + rect.height / 2),
    pointerX:event.clientX,
    pointerY:event.clientY,
    visualX:rect.left + rect.width / 2,
    visualY:rect.top + rect.height / 2,
    moved:false,
    ghost:null,
    target:-1,
    targetValid:false,
    targetElement:null,
    raf:0
  };
  button.setPointerCapture?.(event.pointerId);
}

function handleBottlePointerMove(event) {
  const state = bottleDragState;
  if (!state || state.pointerId !== event.pointerId) return;
  if (Math.hypot(event.clientX - state.startX, event.clientY - state.startY) > 6) state.moved = true;
  if (!state.moved) return;
  event.preventDefault();

  const active = puzzle();
  if (!active) return;
  if (!state.ghost) {
    state.ghost = createBottleDragGhost(state.sourceElement);
    state.sourceElement.classList.add('is-drag-origin');
    selectedBottle = -1;
    hint = null;
    document.documentElement.classList.add('is-dragging-colour-sort-bottle');
  }

  const target = bottleAtPointer(event.clientX, event.clientY);
  updateBottleDragTarget(state, target, active);
  queueBottleGhostPosition(state, event.clientX, event.clientY);
}

function reducedMotionPreferred() {
  return Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
}

async function animateDraggedBottleHome(state) {
  if (!state?.ghost?.isConnected) return;
  const source = state.sourceElement;
  const sourceRect = source?.getBoundingClientRect();
  if (!sourceRect || reducedMotionPreferred() || typeof state.ghost.animate !== 'function') return;

  if (state.raf) {
    cancelAnimationFrame(state.raf);
    state.raf = 0;
  }
  const startX = Number.isFinite(state.visualX) ? state.visualX : state.pointerX - state.grabOffsetX;
  const startY = Number.isFinite(state.visualY) ? state.visualY : state.pointerY - state.grabOffsetY;
  const homeX = sourceRect.left + sourceRect.width / 2;
  const homeY = sourceRect.top + sourceRect.height / 2;
  const animation = state.ghost.animate([
    { transform:ghostTransform(startX, startY, 0, 1.035) },
    { transform:ghostTransform(homeX, homeY, 0, 1) }
  ], { duration:145, easing:'cubic-bezier(.22,.8,.25,1)', fill:'forwards' });
  try { await animation.finished; } catch (_) {}
}

async function rejectBottleDrag(state, targetIndex) {
  await animateDraggedBottleHome(state);
  if (state.ghost?.isConnected) state.ghost.remove();
  state.sourceElement?.classList.remove('is-drag-origin');
  releaseDragClasses(state);
  if (bottleDragState === state) bottleDragState = null;
  statusMessage = Number.isInteger(targetIndex) && targetIndex >= 0 && targetIndex !== state.from
    ? 'That bottle cannot receive this colour.'
    : 'Drop onto another bottle to pour.';
  markInvalidBottle(targetIndex);
}

function handleBottlePointerUp(event) {
  const state = bottleDragState;
  if (!state || state.pointerId !== event.pointerId) return;
  const target = state.moved ? bottleAtPointer(event.clientX, event.clientY) : null;
  const active = puzzle();
  const valid = Boolean(active && target && target.index !== state.from && !isBottleLocked(active,state.from) && !isBottleLocked(active,target.index) && canPour(active.bottles, state.from, target.index));

  if (!state.moved) {
    cleanupBottleDrag();
    return;
  }

  suppressBottleClick = true;
  if (state.raf) {
    cancelAnimationFrame(state.raf);
    state.raf = 0;
  }
  if (!Number.isFinite(state.visualX)) state.visualX = event.clientX - state.grabOffsetX;
  if (!Number.isFinite(state.visualY)) state.visualY = event.clientY - state.grabOffsetY;

  if (valid) {
    releaseDragClasses(state);
    bottleDragState = null;
    void performPour(state.from, target.index, {
      dragVisual:{
        ghost:state.ghost,
        sourceElement:state.sourceElement,
        startX:state.visualX,
        startY:state.visualY
      }
    });
    return;
  }

  void rejectBottleDrag(state, target?.index ?? -1);
}

function handleBottlePointerCancel() {
  const state = bottleDragState;
  if (!state) return;
  if (!state.moved) {
    cleanupBottleDrag();
    return;
  }
  suppressBottleClick = true;
  void rejectBottleDrag(state, -1);
}

function createPourStream(board, startX, startY, endX, endY, colour) {
  const boardRect = board.getBoundingClientRect();
  const dx = endX - startX;
  const dy = endY - startY;
  const stream = document.createElement('span');
  stream.className = 'colour-sort-pour-stream';
  stream.dataset.colour = String(colour);
  stream.setAttribute('aria-hidden', 'true');
  stream.style.left = (startX - boardRect.left) + 'px';
  stream.style.top = (startY - boardRect.top) + 'px';
  stream.style.width = Math.max(14, Math.hypot(dx, dy)) + 'px';
  stream.style.transform = `rotate(${Math.atan2(dy, dx)}rad) scaleX(.05)`;
  board.appendChild(stream);
  return stream;
}

async function animatePour(from, to, result, { dragVisual = null } = {}) {
  const board = document.querySelector('#colourSortGameCard .colour-sort-board');
  const source = board?.querySelector(`[data-colour-bottle="${from}"]`);
  const target = board?.querySelector(`[data-colour-bottle="${to}"]`);
  if (!board || !source || !target) {
    dragVisual?.ghost?.remove();
    return;
  }

  const sourceRect = source.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  if (reducedMotionPreferred() || typeof source.animate !== 'function') {
    dragVisual?.ghost?.remove();
    source.classList.remove('is-drag-origin');
    return;
  }

  const visual = dragVisual?.ghost?.isConnected ? dragVisual.ghost : createBottleDragGhost(source);
  const startX = dragVisual?.startX ?? (sourceRect.left + sourceRect.width / 2);
  const startY = dragVisual?.startY ?? (sourceRect.top + sourceRect.height / 2);
  const sourceX = sourceRect.left + sourceRect.width / 2;
  const sourceY = sourceRect.top + sourceRect.height / 2;
  const targetX = targetRect.left + targetRect.width / 2;
  const side = sourceX <= targetX ? -1 : 1;
  const angle = side < 0 ? 47 : -47;
  const visualRect = visual.getBoundingClientRect();
  const bottleHeight = Math.max(sourceRect.height, visualRect.height || sourceRect.height);
  const radians = angle * Math.PI / 180;
  const mouthOffsetX = Math.sin(radians) * bottleHeight * .39;
  const mouthOffsetY = -Math.cos(radians) * bottleHeight * .39;
  const mouthX = targetX;
  const mouthY = targetRect.top + 13;
  const pourX = mouthX - mouthOffsetX;
  const pourY = mouthY - mouthOffsetY;
  const duration = dragVisual ? 455 : 500;
  const stream = createPourStream(board, mouthX, mouthY, targetX, targetRect.top + 34, result.colour);

  source.classList.remove('is-selected', 'is-drag-origin');
  source.classList.add('is-motion-source');
  target.classList.add('is-motion-target');
  board.classList.add('is-animating-pour');

  const visualAnimation = visual.animate([
    { transform:ghostTransform(startX, startY, 0, dragVisual ? 1.035 : 1), offset:0 },
    { transform:ghostTransform(pourX, pourY, 0, 1.02), offset:.23 },
    { transform:ghostTransform(pourX, pourY, angle, 1.02), offset:.36 },
    { transform:ghostTransform(pourX, pourY, angle, 1.02), offset:.64 },
    { transform:ghostTransform(pourX, pourY, 0, 1.01), offset:.73 },
    { transform:ghostTransform(sourceX, sourceY, 0, 1), offset:1 }
  ], { duration, easing:'cubic-bezier(.22,.72,.2,1)', fill:'forwards' });

  const targetAnimation = target.animate([
    { transform:'translateY(0) scale(1)', offset:0 },
    { transform:'translateY(-2px) scale(1.025)', offset:.42 },
    { transform:'translateY(-2px) scale(1.025)', offset:.65 },
    { transform:'translateY(0) scale(1)', offset:1 }
  ], { duration, easing:'ease-out' });

  const streamBaseTransform = `rotate(${Math.atan2((targetRect.top + 34) - mouthY, targetX - mouthX)}rad)`;
  const streamAnimation = stream.animate([
    { opacity:0, transform:streamBaseTransform + ' scaleX(.05)', offset:0 },
    { opacity:0, transform:streamBaseTransform + ' scaleX(.05)', offset:.32 },
    { opacity:.96, transform:streamBaseTransform + ' scaleX(1)', offset:.41 },
    { opacity:.96, transform:streamBaseTransform + ' scaleX(1)', offset:.62 },
    { opacity:0, transform:streamBaseTransform + ' scaleX(.18)', offset:.7 },
    { opacity:0, transform:streamBaseTransform + ' scaleX(.05)', offset:1 }
  ], { duration, easing:'ease-in-out', fill:'forwards' });

  try {
    await Promise.all([visualAnimation.finished, targetAnimation.finished, streamAnimation.finished]);
  } catch (_) {
    // Closing the game can cancel Web Animations; the logical move can still complete.
  } finally {
    stream.remove();
    visual.remove();
    source.classList.remove('is-motion-source', 'is-drag-origin');
    target.classList.remove('is-motion-target');
    board.classList.remove('is-animating-pour');
  }
}

async function performPour(from, to, { dragVisual = null } = {}) {
  const active = puzzle();
  if (!active || isAnimating || isBottleLocked(active,from) || isBottleLocked(active,to) || !canPour(active.bottles, from, to)) {
    dragVisual?.ghost?.remove();
    dragVisual?.sourceElement?.classList.remove('is-drag-origin');
    return false;
  }
  const result = applyPour(active.bottles, from, to);
  if (!result) {
    dragVisual?.ghost?.remove();
    dragVisual?.sourceElement?.classList.remove('is-drag-origin');
    return false;
  }

  undoStack.push({ bottles:active.bottles.map(bottle => bottle.slice()), moves:active.moves });
  isAnimating = true;
  hint = null;
  selectedBottle = -1;
  await animatePour(from, to, result, { dragVisual });

  active.bottles = result.bottles;
  active.moves += 1;
  active.settled = false;
  statusMessage = `${result.amount} ${colourMeta(result.colour).name} unit${result.amount === 1 ? '' : 's'} poured.`;
  isAnimating = false;
  settleSolvedPuzzle();
  persist();
  render();
  return true;
}

function settleSolvedPuzzle() {
  const active = puzzle();
  if (!active || active.settled || !isSolved(active.bottles)) return;
  active.settled = true;
  profile.gamesPlayed += 1;
  const previousBest = number(profile.bestMoves[active.level]);
  if (!previousBest || active.moves < previousBest) profile.bestMoves[active.level] = active.moves;
  const firstCompletion = !profile.completedLevels.includes(active.level);
  if (firstCompletion) {
    profile.completedLevels.push(active.level);
    profile.completedLevels.sort((a, b) => a - b);
  }
  const colourCount = levelColours(levelById(active.level)).length;
  awardXp(profile, firstCompletion ? 34 + colourCount * 8 + Math.max(0, 30 - active.moves) : 10 + colourCount);
  undoStack = [];
  const completedTier=tierForLevel(active.level).id;
  try { autoNextApi()?.schedule?.(APP, () => startTierGame(completedTier)); } catch (_) {}
}

function selectBottle(index) {
  const active = puzzle();
  if (!active || isAnimating || isSolved(active.bottles) || !active.bottles[index]) return;
  hint = null;
  if(isBottleLocked(active,index)){
    const mechanics=mechanicsForLevel(active.level);
    statusMessage=`Bottle ${index+1} is locked for ${Math.max(1,mechanics.lockMoves-active.moves)} more successful move${mechanics.lockMoves-active.moves===1?'':'s'}.`;
    selectedBottle=-1;
    renderGame();
    return;
  }
  if (selectedBottle < 0) {
    if (!active.bottles[index].length) {
      statusMessage = 'Choose a bottle that contains colour first.';
      renderGame();
      return;
    }
    selectedBottle = index;
    renderGame();
    return;
  }
  if (selectedBottle === index) {
    selectedBottle = -1;
    statusMessage = 'Selection cleared.';
    renderGame();
    return;
  }
  if (!canPour(active.bottles, selectedBottle, index)) {
    if (active.bottles[index].length) {
      selectedBottle = index;
      statusMessage = `That pour is blocked; bottle ${index + 1} is selected instead.`;
    } else {
      statusMessage = 'That pour is not legal.';
    }
    renderGame();
    return;
  }
  const from = selectedBottle;
  void performPour(from, index);
}

function undo() {
  const active = puzzle();
  if (!active || isAnimating || !undoStack.length || isSolved(active.bottles)) return;
  const previous = undoStack.pop();
  active.bottles = previous.bottles;
  active.moves = previous.moves;
  active.settled = false;
  selectedBottle = -1;
  hint = null;
  statusMessage = 'Last pour undone.';
  persist();
  render();
}

function showHint() {
  const active = puzzle();
  if (!active || isAnimating || isSolved(active.bottles)) return;
  statusMessage = 'Finding a legal route…';
  renderGame();
  requestAnimationFrame(() => {
    const mechanics=mechanicsForLevel(active.level);
    hint = hintMove(active.bottles, {
      maxNodes:750000,
      blockedIndices:lockedBottleIndices(active),
      blockedMoves:Math.max(0,mechanics.lockMoves-active.moves)
    });
    statusMessage = hint ? `Solution step: bottle ${hint.from + 1} → ${hint.to + 1}.` : 'No verified solution step was found from this position. Undo a recent move and try Hint again.';
    renderGame();
  });
}

function toggleFullscreen() {
  const card = document.getElementById('colourSortGameCard');
  if (!card) return;
  if (document.fullscreenElement === card) document.exitFullscreen?.().catch(() => {});
  else card.requestFullscreen?.().catch(() => {});
}

function handleClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  if (!target || !document.getElementById('colourSortPanel')?.classList.contains('is-active')) return;
  const action = target.closest('[data-colour-action]')?.getAttribute('data-colour-action');
  if(action){
    suppressBottleClick=false;
    event.preventDefault();
    if (action === 'new' || action === 'start') {
      if(performance.now()-newGamePointerAt>=700) startTierGame(profile.selectedTier);
    }
    if (action === 'undo') undo();
    if (action === 'hint') showHint();
    if (action === 'restart') startLevel(puzzle()?.level || randomLevelForTier(profile.selectedTier));
    if (action === 'fullscreen') toggleFullscreen();
    return;
  }
  if (suppressBottleClick) {
    suppressBottleClick = false;
    event.preventDefault();
    return;
  }
  if (isAnimating) {
    event.preventDefault();
    return;
  }
  const bottle = target.closest('[data-colour-bottle]');
  if (bottle) { selectBottle(Number(bottle.dataset.colourBottle)); return; }
  const tier = target.closest('[data-colour-tier]')?.getAttribute('data-colour-tier');
  if (tier) { selectTier(tier); return; }
  const tab = target.closest('[data-colour-tab]')?.getAttribute('data-colour-tab');
  if (tab) { setTab(tab, 'push'); return; }
}

function handleKeydown(event) {
  if (!document.getElementById('colourSortPanel')?.classList.contains('is-active')) return;
  const key=String(event.key||'').toLowerCase();
  if(event.altKey && !event.ctrlKey && !event.metaKey && !event.isComposing){
    if(key==='n'){ event.preventDefault(); startTierGame(profile.selectedTier); return; }
    if(key==='u'){ event.preventDefault(); undo(); return; }
    if(key==='h'){ event.preventDefault(); showHint(); return; }
    if(key==='r'){ event.preventDefault(); startLevel(puzzle()?.level || randomLevelForTier(profile.selectedTier)); return; }
    if(key==='f'){ event.preventDefault(); toggleFullscreen(); return; }
  }
  if (event.key === 'Escape' && document.fullscreenElement === document.getElementById('colourSortGameCard')) return;
  if (event.key === 'Escape') shell.close();
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') { event.preventDefault(); undo(); }
}

function panelHtml() {
  return `<section class="card game-panel colour-sort-panel" id="colourSortPanel" aria-labelledby="colourSortTitle" hidden aria-hidden="true">
    <div class="game-shell">
      <div class="game-header">
        <div><h2 id="colourSortTitle" tabindex="-1">Colour Sort</h2><p class="note">Move exposed colour runs between bottles until every filled bottle contains one colour only.</p></div>
        <div class="link-actions game-shell-actions" data-nonrealm-game-toolbar="colour-sort">
          <button class="action secondary game-shell-action game-shell-action--icon" data-bl-info-button data-bl-info-title="What this develops" data-bl-info-text="Sequencing, planning, state tracking, inhibition and multi-step problem solving." type="button" aria-label="What Colour Sort develops"><span class="game-shell-action__icon" aria-hidden="true">i</span></button>
          <button class="action secondary game-shell-action" data-bl-info-button data-bl-info-title="How To Play" data-bl-info-text="Move the exposed run of one colour into an empty unlocked bottle or onto the same exposed colour. Later tiers add covered buried layers and temporary spare-bottle locks. Sort every filled bottle into a single colour. Drag bottles or tap a source and then a destination. Undo, Hint and Restart stay available below the board." type="button"><span class="game-shell-action__icon" aria-hidden="true">?</span><span class="game-shell-action__label">How to Play</span></button>
                    <button class="action secondary game-shell-action" data-close-game-extension="colour-sort" type="button"><span class="game-shell-action__icon" aria-hidden="true">←</span><span class="game-shell-action__label">Games</span></button>
        </div>
      </div>
      <details class="game-info-details" data-game-info="coloursort"><summary><span>Game Info</span><span class="inline-note">Player Rank / XP / stats</span></summary>
        <div id="colourSortGameInfo"></div>
      </details>
      <div class="game-toggle-row">
        <button class="action ghost game-toggle-btn is-active" data-colour-tab="game" type="button">Game</button>
        <button class="action ghost game-toggle-btn" data-colour-tab="tiers" type="button">Tiers</button>
        <button class="action ghost game-toggle-btn" data-colour-tab="progress" type="button">Progress</button>
      </div>
      <div class="game-panel-stack">
        <section class="card game-card game-play-root" id="colourSortGameCard" data-game-play-root="colour-sort"></section>
        <section class="card game-card" id="colourSortLevelsCard" hidden></section>
        <section class="card game-card" id="colourSortProgressCard" hidden></section>
      </div>
    </div>
  </section>`;
}

const shell = createGameExtensionShell({
  id:'colour-sort',
  panelId:'colourSortPanel',
  name:'Colour Sort',
  order:20,
  art:'/systems/baseline-recreation/games/colour-sort/art/colour-sort-overview.svg?v=RECREATION_BURGUNDY_BURNT_COPPER_20261022_2',
  styleUrl:'/systems/baseline-recreation/games/colour-sort/css/colour-sort.css?v=RECREATION_FULLSCREEN_20261024_1',
  note:'Pour matching exposed colours between bottles until every filled bottle contains a single colour.',
  benefit:'Sequencing, planning, state tracking, inhibition and multi-step problem solving.',
  progressText:() => profile ? `${tierById(profile.selectedTier).name} Tier · ${profile.gamesPlayed} games` : 'Ready',
  panelHtml,
  onOpen:() => { globalThis.BaselineGamesMusic?.selectGame?.('colour-sort'); render(); setTab(colourTabFromLocation(), 'none'); },
  onClose:() => { globalThis.BaselineGamesMusic?.selectGame?.(''); cleanupBottleDrag(); selectedBottle = -1; hint = null; }
});

function init() {
  profile = loadStoredProfile(APP, DEFAULT_PROFILE, normaliseProfile);
  storageAuth = Boolean(globalThis.BaselineGameStorage?.isAuthenticated?.());
  shell.init();
  document.addEventListener('click', handleClick);
  document.addEventListener('pointerdown', handleBottlePointerDown);
  document.addEventListener('pointermove', handleBottlePointerMove, { passive:false });
  document.addEventListener('pointerup', handleBottlePointerUp);
  document.addEventListener('pointercancel', handleBottlePointerCancel);
  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('fullscreenchange', renderGame);
  document.addEventListener('baseline:game-storage', event => {
    const authenticated = Boolean(event.detail?.authenticated);
    if (authenticated === storageAuth) return;
    storageAuth = authenticated;
    profile = loadStoredProfile(APP, DEFAULT_PROFILE, normaliseProfile);
    selectedBottle = -1;
    undoStack = [];
    hint = null;
    render();
  });
  document.documentElement.dataset.colourSortRuntime = BUILD;
  globalThis.BaselineColourSort = Object.freeze({
    build:BUILD,
    open:shell.open,
    close:shell.close,
    getProfile:() => clone(profile),
    reset:() => { profile = normaliseProfile(DEFAULT_PROFILE); startTierGame('starter'); }
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
else init();

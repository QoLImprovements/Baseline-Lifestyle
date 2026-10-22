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
  levelColours
} from './colour-sort-engine.mjs?v=PUZZLE_GAMES_20261016_1';
import {
  awardXp,
  clone,
  createGameExtensionShell,
  escapeHtml,
  loadStoredProfile,
  saveStoredProfile,
  xpNeededForLevel
} from '../../../js/game-extension-support.mjs?v=GAME_EXTENSIONS_RECREATION_20261022_1';

const BUILD = 'COLOUR_SORT_AUTO_NEXT_COHERENCE_20261018_1';
const APP = 'coloursort';
const DEFAULT_PROFILE = Object.freeze({
  app:APP,
  level:1,
  xp:0,
  gamesPlayed:0,
  highestUnlocked:1,
  completedLevels:[],
  bestMoves:{},
  selectedLevel:1,
  activePuzzle:null
});

let profile = null;
let selectedBottle = -1;
let undoStack = [];
let hint = null;
let statusMessage = '';
let storageAuth = null;
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
  const selectedLevel = Math.min(highestUnlocked, clampLevel(source.selectedLevel));
  return {
    app:APP,
    level:Math.max(1, number(source.level, 1)),
    xp:number(source.xp),
    gamesPlayed:number(source.gamesPlayed),
    highestUnlocked,
    completedLevels:completed,
    bestMoves,
    selectedLevel,
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
  const level = Math.min(profile.highestUnlocked, clampLevel(levelId));
  profile.selectedLevel = level;
  profile.activePuzzle = { level, bottles:initialBottles(level), moves:0, settled:false };
  selectedBottle = -1;
  undoStack = [];
  hint = null;
  statusMessage = 'Select a bottle, then select a valid destination.';
  levelEntranceMotion = true;
  if (persistChange) persist();
  render();
}

function selectLevel(levelId) {
  const level = clampLevel(levelId);
  if (level > profile.highestUnlocked) return;
  profile.selectedLevel = level;
  profile.activePuzzle = null;
  selectedBottle = -1;
  undoStack = [];
  hint = null;
  statusMessage = '';
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

function segmentHtml(colour) {
  const meta = colourMeta(colour);
  return `<span class="colour-sort-segment" data-colour="${meta.id}" title="${escapeHtml(meta.name)}"><span aria-hidden="true">${escapeHtml(meta.symbol)}</span><span class="sr-only">${escapeHtml(meta.name)}</span></span>`;
}

function bottleHtml(bottle, index) {
  const active = puzzle();
  const complete = isBottleComplete(bottle);
  const selected = selectedBottle === index;
  const hintedFrom = hint?.from === index;
  const hintedTo = hint?.to === index;
  const validTarget = selectedBottle >= 0 && selectedBottle !== index && Boolean(active && canPour(active.bottles, selectedBottle, index));
  return `<button class="colour-sort-bottle${complete ? ' is-complete' : ''}${selected ? ' is-selected' : ''}${hintedFrom ? ' is-hint-from' : ''}${hintedTo ? ' is-hint-to' : ''}${validTarget ? ' is-valid-target' : ''}${invalidBottle === index ? ' is-invalid-target' : ''}${levelEntranceMotion ? ' is-entering' : ''}" style="--bottle-index:${index}" data-colour-bottle="${index}" type="button" aria-pressed="${selected}" aria-label="${escapeHtml(bottleLabel(bottle, index))}" ${isAnimating ? 'disabled' : ''}>
    <span class="colour-sort-glass" aria-hidden="true"><span class="colour-sort-stack">${bottle.map(segmentHtml).join('')}</span></span>
    <span class="colour-sort-bottle-number">${index + 1}</span>
  </button>`;
}

function statusHtml() {
  const active = puzzle();
  if (!active) return '<strong>Ready.</strong><span class="inline-note">Choose a level to begin.</span>';
  if (isSolved(active.bottles)) {
    const best = profile.bestMoves[active.level] || active.moves;
    return `<strong>Level ${active.level} sorted in ${active.moves} moves.</strong><span class="inline-note">Best: ${best} move${best === 1 ? '' : 's'}. ${active.level < LEVELS.length ? 'The next level is available.' : 'All current levels are complete.'}</span>`;
  }
  if (hint) return `<strong>Hint: pour bottle ${hint.from + 1} into bottle ${hint.to + 1}.</strong><span class="inline-note">Hints show a legal step from a solver; they do not make the move for you.</span>`;
  if (selectedBottle >= 0) return `<strong>Bottle ${selectedBottle + 1} selected.</strong><span class="inline-note">Choose an empty bottle or one whose exposed colour matches.</span>`;
  return `<strong>${escapeHtml(statusMessage || 'Select a bottle, then a destination.')}</strong><span class="inline-note">Only the contiguous exposed colour can pour.</span>`;
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
          <div class="trackcoin-level-title">Level - ${profile.level}</div>
          <div class="xp-bar"><div class="xp-fill" style="width:${pct}%"></div></div>
          <div class="trackcoin-xp-meta-row"><span class="inline-note">${profile.xp} / ${needed} XP</span></div>
        </div>
      </div>
      <div class="stat-pills trackcoin-stat-pills">
        <div class="stat-pill">Puzzles Completed <span>${profile.completedLevels.length} / ${LEVELS.length}</span></div>
        <div class="stat-pill">Completed Runs <span>${profile.gamesPlayed}</span></div>
        <div class="stat-pill">Highest Unlocked <span>${profile.highestUnlocked}</span></div>
        <div class="stat-pill">Recorded Bests <span>${Object.keys(profile.bestMoves).length}</span></div>
      </div>
    </div>
    <div class="summary-box"><strong>Match the exposed colour.</strong><span class="inline-note">Select a source bottle and then an empty bottle or a bottle with the same colour on top. The largest contiguous exposed run pours automatically, up to the destination capacity. Sort every colour to complete the level.</span></div>`;
}

function renderGame() {
  const root = document.getElementById('colourSortGameCard');
  if (!root) return;
  const active = puzzle();
  if (!active) {
    root.innerHTML = `<div class="colour-sort-empty"><p>Level ${profile.selectedLevel} selected. Press Start New Game when ready.</p><div class="game-window-actions"><button class="action primary start-new-game-toggle" data-colour-action="start" type="button">Start New Game</button><button class="action ghost auto-next-toggle" data-auto-next-toggle="${APP}" type="button" aria-pressed="false">Auto-Next Game: Off</button></div></div>`;
    syncAutoNextControl();
    return;
  }
  const solved = isSolved(active.bottles);
  const colours = levelColours(levelById(active.level)).length;
  const sorted = active.bottles.filter(bottle => isBottleComplete(bottle)).length;
  const sortedPercent = colours ? Math.min(100, Math.round(sorted / colours * 100)) : 0;
  root.innerHTML = `
    <div class="colour-sort-active-header">
      <div class="stat-pills">
        <div class="stat-pill">Puzzle <span>${active.level} / ${LEVELS.length}</span></div>
        <div class="stat-pill">Sorted <span>${sorted} / ${colours}</span></div>
        <div class="stat-pill">Moves <span>${active.moves}</span></div>
        <div class="stat-pill">Best <span>${profile.bestMoves[active.level] || '—'}</span></div>
      </div>
    </div>
    <div class="game-live-xp" data-live-xp="coloursort"><strong>Level ${profile.level}</strong><div class="game-live-xp__bar"><span style="width:${Math.min(100, profile.xp / xpNeededForLevel(profile.level) * 100)}%"></span></div><span>${profile.xp} / ${xpNeededForLevel(profile.level)} XP</span></div>
    <div class="summary-box round-status-card" aria-live="polite">${statusHtml()}</div>
    <div class="colour-sort-progress-head"><div><strong>Level Progress</strong><span>Drag a bottle onto a valid destination, or tap source then destination.</span></div><strong>${sorted} / ${colours}</strong></div>
    <div class="colour-sort-progress-meter" aria-label="${sorted} of ${colours} colours sorted"><span style="width:${sortedPercent}%"></span></div>
    <div class="colour-sort-board${isAnimating ? ' is-animating-pour' : ''}${solved ? ' is-level-complete' : ''}" role="group" aria-label="Colour Sort bottles">
      ${solved ? `<div class="colour-sort-complete-banner" aria-hidden="true"><strong>LEVEL ${active.level} COMPLETE</strong><span>${active.moves} moves</span></div>` : ''}
      ${active.bottles.map(bottleHtml).join('')}
    </div>
    <div class="game-window-actions colour-sort-quiet-actions">
      <button class="action ghost" data-colour-action="undo" type="button" ${!undoStack.length || solved || isAnimating ? 'disabled' : ''}>Undo</button>
      <button class="action ghost" data-colour-action="hint" type="button" ${solved || isAnimating ? 'disabled' : ''}>Hint</button>
      <button class="action ghost" data-colour-action="restart" type="button" ${isAnimating ? 'disabled' : ''}>Restart</button>
      <button class="action ghost auto-next-toggle" data-auto-next-toggle="${APP}" type="button" aria-pressed="false">Auto-Next Game: Off</button>
      ${solved && active.level < LEVELS.length ? `<button class="action primary" data-colour-action="next" type="button">Next Level</button>` : ''}
    </div>`;
  levelEntranceMotion = false;
  syncAutoNextControl();
}

function levelButton(level) {
  const unlocked = level.id <= profile.highestUnlocked;
  const complete = profile.completedLevels.includes(level.id);
  const selected = profile.selectedLevel === level.id;
  const colourCount = levelColours(level).length;
  return `<button class="colour-sort-level${selected ? ' is-active' : ''}${complete ? ' is-complete' : ''}" data-colour-level="${level.id}" type="button" ${unlocked ? '' : 'disabled'} aria-pressed="${selected}">
    <span><strong>Level ${level.id}</strong><small>${colourCount} colours · ${level.bottles.length} bottles</small></span>
    <span>${complete ? `✓ ${profile.bestMoves[level.id] || ''}` : unlocked ? 'Open' : 'Locked'}</span>
  </button>`;
}

function renderLevels() {
  const root = document.getElementById('colourSortLevelsCard');
  if (!root) return;
  root.innerHTML = `<div class="colour-sort-level-list">${LEVELS.map(levelButton).join('')}</div>
    <div class="summary-box"><strong>Progression</strong><span class="inline-note">Completing a level unlocks the next one. Every included starting layout is checked against the same legal-pour rules used by the game.</span></div>`;
}

function renderProgress() {
  const root = document.getElementById('colourSortProgressCard');
  if (!root) return;
  const needed = xpNeededForLevel(profile.level);
  const pct = Math.min(100, profile.xp / needed * 100);
  const remaining = Math.max(0, needed - profile.xp);
  root.innerHTML = `
    <section class="coherent-progress-overview">
      <div class="coherent-progress-heading"><div><span class="coherent-progress-kicker">Colour Sort</span><strong>Level ${profile.level}</strong></div><div class="coherent-progress-next">${remaining} XP to Level ${profile.level + 1}</div></div>
      <div class="coherent-progress-xp-meta"><span>${profile.xp} / ${needed} XP</span><span>${Math.round(pct)}%</span></div>
      <div class="coherent-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${needed}" aria-valuenow="${profile.xp}"><span style="width:${pct}%"></span></div>
    </section>
    <div class="coherent-progress-grid">
      <div class="coherent-progress-stat"><span>Puzzles completed</span><strong>${profile.completedLevels.length} / ${LEVELS.length}</strong></div>
      <div class="coherent-progress-stat"><span>Completed runs</span><strong>${profile.gamesPlayed}</strong></div>
      <div class="coherent-progress-stat"><span>Highest unlocked</span><strong>${profile.highestUnlocked}</strong></div>
      <div class="coherent-progress-stat"><span>Recorded bests</span><strong>${Object.keys(profile.bestMoves).length}</strong></div>
      <div class="coherent-progress-stat"><span>Selected level</span><strong>${profile.selectedLevel}</strong></div>
    </div>`;
}

const COLOUR_TABS = Object.freeze(['game','levels','progress']);

function colourTabFromLocation() {
  if (!/^\/baseline-recreation\/games\/colour-sort\/?$/i.test(String(location.pathname || ''))) return 'game';
  try {
    const requested = String(new URLSearchParams(location.search || '').get('view') || '').toLowerCase();
    return COLOUR_TABS.includes(requested) ? requested : 'game';
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
  for (const id of ['Game','Levels','Progress']) {
    const card = document.getElementById(`colourSort${id}Card`);
    if (card) card.hidden = id.toLowerCase() !== next;
  }
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
  document.body.appendChild(layer);
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
  const valid = Boolean(target && target.index !== state.from && canPour(active.bottles, state.from, target.index));
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
  if (isAnimating || bottleDragState || (event.pointerType === 'mouse' && event.button !== 0)) return;
  const button = event.target instanceof Element ? event.target.closest('#colourSortGameCard [data-colour-bottle]') : null;
  const active = puzzle();
  if (!button || !active || isSolved(active.bottles)) return;
  const from = Number(button.dataset.colourBottle);
  if (!Number.isInteger(from) || !active.bottles[from]?.length) return;

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
  const valid = Boolean(active && target && target.index !== state.from && canPour(active.bottles, state.from, target.index));

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
  if (!active || isAnimating || !canPour(active.bottles, from, to)) {
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
    profile.highestUnlocked = Math.min(LEVELS.length, Math.max(profile.highestUnlocked, active.level + 1));
  }
  const colourCount = levelColours(levelById(active.level)).length;
  awardXp(profile, firstCompletion ? 34 + colourCount * 8 + Math.max(0, 30 - active.moves) : 10 + colourCount);
  undoStack = [];
  const nextLevel = active.level < LEVELS.length ? Math.min(profile.highestUnlocked, active.level + 1) : active.level;
  try { autoNextApi()?.schedule?.(APP, () => startLevel(nextLevel)); } catch (_) {}
}

function selectBottle(index) {
  const active = puzzle();
  if (!active || isAnimating || isSolved(active.bottles) || !active.bottles[index]) return;
  hint = null;
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
    hint = hintMove(active.bottles, { maxNodes:180000 });
    statusMessage = hint ? `Try bottle ${hint.from + 1} → ${hint.to + 1}.` : 'No hint was found for this position.';
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
  const level = target.closest('[data-colour-level]')?.getAttribute('data-colour-level');
  if (level) { selectLevel(Number(level)); return; }
  const tab = target.closest('[data-colour-tab]')?.getAttribute('data-colour-tab');
  if (tab) { setTab(tab, 'push'); return; }
  const action = target.closest('[data-colour-action]')?.getAttribute('data-colour-action');
  if (action === 'start') startLevel(profile.selectedLevel);
  if (action === 'undo') undo();
  if (action === 'hint') showHint();
  if (action === 'restart') startLevel(puzzle()?.level || profile.selectedLevel);
  if (action === 'next') startLevel(Math.min(LEVELS.length, (puzzle()?.level || 1) + 1));
  if (action === 'fullscreen') toggleFullscreen();
}

function handleKeydown(event) {
  if (!document.getElementById('colourSortPanel')?.classList.contains('is-active')) return;
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
          <button class="action secondary game-shell-action" data-bl-info-button data-bl-info-title="How To Play" data-bl-info-text="Move the exposed run of one colour into an empty bottle or onto the same exposed colour. Sort every filled bottle into a single colour. Drag bottles or tap a source and then a destination. Undo, Hint and Restart stay available below the board." type="button"><span class="game-shell-action__icon" aria-hidden="true">?</span><span class="game-shell-action__label">How to Play</span></button>
          <button class="action secondary game-shell-action" data-colour-action="fullscreen" type="button"><span class="game-shell-action__icon" aria-hidden="true">⛶</span><span class="game-shell-action__label">Full Screen</span></button>
          <button class="action secondary game-shell-action" data-close-game-extension="colour-sort" type="button"><span class="game-shell-action__icon" aria-hidden="true">←</span><span class="game-shell-action__label">Games</span></button>
        </div>
      </div>
      <details class="game-info-details" data-game-info="coloursort"><summary><span>Game Info</span><span class="inline-note">Level / XP / stats</span></summary>
        <div id="colourSortGameInfo"></div>
      </details>
      <div class="game-toggle-row">
        <button class="action ghost game-toggle-btn is-active" data-colour-tab="game" type="button">Game</button>
        <button class="action ghost game-toggle-btn" data-colour-tab="levels" type="button">Levels</button>
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
  styleUrl:'/systems/baseline-recreation/games/colour-sort/css/colour-sort.css?v=RECREATION_BURGUNDY_BURNT_COPPER_20261022_2',
  note:'Pour matching exposed colours between bottles until every filled bottle contains a single colour.',
  benefit:'Sequencing, planning, state tracking, inhibition and multi-step problem solving.',
  progressText:() => profile ? `Level ${profile.level} · ${profile.completedLevels.length}/${LEVELS.length} puzzles` : 'Ready',
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
    reset:() => { profile = normaliseProfile(DEFAULT_PROFILE); startLevel(1); }
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
else init();

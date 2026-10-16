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
  createPuzzleHubShell,
  escapeHtml,
  loadStoredProfile,
  saveStoredProfile,
  xpNeededForLevel
} from '../../../js/puzzle-game-support.mjs?v=PUZZLE_GAMES_20261016_1';

const BUILD = 'COLOUR_SORT_DRAG_DEPTH_20261017_2';
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

function persist() {
  saveStoredProfile(APP, profile);
  shell.refreshOverview();
}

function startLevel(levelId, { persistChange = true } = {}) {
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

function ensurePuzzle() {
  if (!profile.activePuzzle || profile.activePuzzle.level > profile.highestUnlocked) startLevel(profile.selectedLevel);
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

function renderGame() {
  const root = document.getElementById('colourSortGameCard');
  if (!root) return;
  const active = puzzle();
  if (!active) {
    root.innerHTML = `<div class="colour-sort-empty"><p>Sort each colour into its own bottle.</p><button class="action primary" data-colour-action="start" type="button">Start Level 1</button></div>`;
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
      <button class="action secondary" data-colour-action="fullscreen" type="button">${document.fullscreenElement === root ? 'Exit Full Screen' : 'Full Screen'}</button>
    </div>
    <div class="summary-box round-status-card" aria-live="polite">${statusHtml()}</div>
    <div class="colour-sort-progress-head"><div><strong>Level Progress</strong><span>Drag a bottle onto a valid destination, or tap source then destination.</span></div><strong>${sorted} / ${colours}</strong></div>
    <div class="colour-sort-progress-meter" aria-label="${sorted} of ${colours} colours sorted"><span style="width:${sortedPercent}%"></span></div>
    <div class="colour-sort-board${isAnimating ? ' is-animating-pour' : ''}${solved ? ' is-level-complete' : ''}" role="group" aria-label="Colour Sort bottles">
      ${solved ? `<div class="colour-sort-complete-banner" aria-hidden="true"><strong>LEVEL ${active.level} COMPLETE</strong><span>${active.moves} moves</span></div>` : ''}
      ${active.bottles.map(bottleHtml).join('')}
    </div>
    <div class="game-window-actions">
      <button class="action ghost" data-colour-action="undo" type="button" ${!undoStack.length || solved || isAnimating ? 'disabled' : ''}>Undo</button>
      <button class="action ghost" data-colour-action="hint" type="button" ${solved || isAnimating ? 'disabled' : ''}>Hint</button>
      <button class="action ghost" data-colour-action="restart" type="button" ${isAnimating ? 'disabled' : ''}>Restart</button>
      ${solved && active.level < LEVELS.length ? `<button class="action primary" data-colour-action="next" type="button">Next Level</button>` : ''}
    </div>`;
  levelEntranceMotion = false;
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
  root.innerHTML = `
    <div class="progress-shell"><div class="xp-row"><div><strong>Colour Sort Level ${profile.level}</strong><div class="xp-bar"><div class="xp-fill" style="width:${pct}%"></div></div><span class="inline-note">${profile.xp} / ${needed} XP</span></div></div></div>
    <div class="colour-sort-progress-stats">
      <div class="trackcoin-stat-card"><strong>${profile.completedLevels.length} / ${LEVELS.length}</strong><span>Puzzles completed</span></div>
      <div class="trackcoin-stat-card"><strong>${profile.gamesPlayed}</strong><span>Completed runs</span></div>
      <div class="trackcoin-stat-card"><strong>${profile.highestUnlocked}</strong><span>Highest unlocked</span></div>
      <div class="trackcoin-stat-card"><strong>${Object.keys(profile.bestMoves).length}</strong><span>Recorded bests</span></div>
    </div>`;
}

function setTab(name) {
  document.querySelectorAll('[data-colour-tab]').forEach(button => button.classList.toggle('is-active', button.dataset.colourTab === name));
  for (const id of ['Game','Levels','Progress']) {
    const card = document.getElementById(`colourSort${id}Card`);
    if (card) card.hidden = id.toLowerCase() !== name;
  }
}

function render() {
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
  return layer;
}

function positionBottleDragGhost(ghost, clientX, clientY) {
  if (!ghost) return;
  ghost.style.left = clientX + 'px';
  ghost.style.top = clientY + 'px';
}

function bottleAtPointer(clientX, clientY) {
  const element = document.elementFromPoint(clientX, clientY);
  const bottle = element instanceof Element ? element.closest('#colourSortGameCard [data-colour-bottle]') : null;
  if (!bottle) return null;
  const index = Number(bottle.dataset.colourBottle);
  return Number.isInteger(index) ? { element:bottle, index } : null;
}

function markInvalidBottle(index) {
  window.clearTimeout(invalidTimer);
  invalidBottle = Number.isInteger(index) ? index : -1;
  renderGame();
  invalidTimer = window.setTimeout(() => {
    invalidBottle = -1;
    renderGame();
  }, 360);
}

function cleanupBottleDrag() {
  clearBottleDragTargets();
  if (bottleDragState?.ghost?.isConnected) bottleDragState.ghost.remove();
  bottleDragState = null;
  document.documentElement.classList.remove('is-dragging-colour-sort-bottle');
}

function handleBottlePointerDown(event) {
  if (isAnimating || (event.pointerType === 'mouse' && event.button !== 0)) return;
  const button = event.target instanceof Element ? event.target.closest('#colourSortGameCard [data-colour-bottle]') : null;
  const active = puzzle();
  if (!button || !active || isSolved(active.bottles)) return;
  const from = Number(button.dataset.colourBottle);
  if (!Number.isInteger(from) || !active.bottles[from]?.length) return;
  bottleDragState = {
    pointerId:event.pointerId,
    from,
    startX:event.clientX,
    startY:event.clientY,
    moved:false,
    ghost:null,
    target:-1
  };
  button.setPointerCapture?.(event.pointerId);
}

function handleBottlePointerMove(event) {
  if (!bottleDragState || bottleDragState.pointerId !== event.pointerId) return;
  if (Math.hypot(event.clientX - bottleDragState.startX, event.clientY - bottleDragState.startY) > 7) bottleDragState.moved = true;
  if (!bottleDragState.moved) return;
  event.preventDefault();

  const active = puzzle();
  if (!active) return;
  if (!bottleDragState.ghost) {
    const source = document.querySelector(`#colourSortGameCard [data-colour-bottle="${bottleDragState.from}"]`);
    if (!source) return;
    bottleDragState.ghost = createBottleDragGhost(source);
    source.classList.add('is-drag-origin');
    selectedBottle = -1;
    hint = null;
    document.documentElement.classList.add('is-dragging-colour-sort-bottle');
  }

  positionBottleDragGhost(bottleDragState.ghost, event.clientX, event.clientY);
  clearBottleDragTargets();
  const source = document.querySelector(`#colourSortGameCard [data-colour-bottle="${bottleDragState.from}"]`);
  source?.classList.add('is-drag-origin');

  const target = bottleAtPointer(event.clientX, event.clientY);
  bottleDragState.target = target?.index ?? -1;
  if (!target || target.index === bottleDragState.from) return;
  target.element.classList.add(canPour(active.bottles, bottleDragState.from, target.index) ? 'is-drag-valid' : 'is-drag-invalid');
}

function handleBottlePointerUp(event) {
  if (!bottleDragState || bottleDragState.pointerId !== event.pointerId) return;
  const state = bottleDragState;
  const target = state.moved ? bottleAtPointer(event.clientX, event.clientY) : null;
  const active = puzzle();
  const valid = Boolean(active && target && target.index !== state.from && canPour(active.bottles, state.from, target.index));
  cleanupBottleDrag();

  if (!state.moved) return;
  suppressBottleClick = true;
  if (valid) {
    void performPour(state.from, target.index);
    return;
  }
  statusMessage = target && target.index !== state.from ? 'That bottle cannot receive this colour.' : 'Drop onto another bottle to pour.';
  markInvalidBottle(target?.index ?? -1);
}

function handleBottlePointerCancel() {
  if (!bottleDragState) return;
  cleanupBottleDrag();
}

function reducedMotionPreferred() {
  return Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
}

function createPourStream(board, sourceRect, targetRect, colour, moveX, moveY) {
  const boardRect = board.getBoundingClientRect();
  const startX = (sourceRect.left + sourceRect.width / 2 - boardRect.left) + (moveX * 0.7);
  const startY = (sourceRect.top + 24 - boardRect.top) + (moveY * 0.7) - 26;
  const endX = targetRect.left + targetRect.width / 2 - boardRect.left;
  const endY = targetRect.top + 28 - boardRect.top;
  const dx = endX - startX;
  const dy = endY - startY;
  const stream = document.createElement('span');
  stream.className = 'colour-sort-pour-stream';
  stream.dataset.colour = String(colour);
  stream.setAttribute('aria-hidden', 'true');
  stream.style.left = startX + 'px';
  stream.style.top = startY + 'px';
  stream.style.width = Math.max(18, Math.hypot(dx, dy)) + 'px';
  stream.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
  board.appendChild(stream);
  return stream;
}

async function animatePour(from, to, result) {
  if (reducedMotionPreferred()) return;
  const board = document.querySelector('#colourSortGameCard .colour-sort-board');
  const source = board?.querySelector(`[data-colour-bottle="${from}"]`);
  const target = board?.querySelector(`[data-colour-bottle="${to}"]`);
  if (!board || !source || !target || typeof source.animate !== 'function') return;

  const sourceRect = source.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const moveX = targetRect.left - sourceRect.left;
  const moveY = targetRect.top - sourceRect.top;
  const direction = moveX >= 0 ? 1 : -1;
  const travelX = moveX * 0.7;
  const travelY = (moveY * 0.7) - 26;
  const stream = createPourStream(board, sourceRect, targetRect, result.colour, moveX, moveY);

  board.classList.add('is-animating-pour');
  source.classList.remove('is-selected');
  source.classList.add('is-motion-source');
  target.classList.add('is-motion-target');

  const sourceAnimation = source.animate([
    { transform:'translateY(-12px) rotate(0deg)', offset:0 },
    { transform:`translate(${travelX}px,${travelY}px) rotate(0deg)`, offset:.34 },
    { transform:`translate(${travelX}px,${travelY}px) rotate(${direction * 54}deg)`, offset:.52 },
    { transform:`translate(${travelX}px,${travelY}px) rotate(${direction * 54}deg)`, offset:.76 },
    { transform:`translate(${travelX}px,${travelY}px) rotate(0deg)`, offset:.86 },
    { transform:'translate(0,0) rotate(0deg)', offset:1 }
  ], { duration:620, easing:'cubic-bezier(.2,.7,.2,1)' });

  const targetAnimation = target.animate([
    { transform:'translateY(0) scale(1)' },
    { transform:'translateY(-2px) scale(1.03)', offset:.55 },
    { transform:'translateY(0) scale(1)' }
  ], { duration:620, easing:'ease-out' });

  const streamAnimation = stream.animate([
    { opacity:0, transform:stream.style.transform + ' scaleX(.05)', transformOrigin:'0 50%' },
    { opacity:.95, transform:stream.style.transform + ' scaleX(1)', transformOrigin:'0 50%', offset:.32 },
    { opacity:.95, transform:stream.style.transform + ' scaleX(1)', transformOrigin:'0 50%', offset:.72 },
    { opacity:0, transform:stream.style.transform + ' scaleX(.2)', transformOrigin:'0 50%' }
  ], { duration:620, easing:'ease-in-out' });

  try {
    await Promise.all([sourceAnimation.finished, targetAnimation.finished, streamAnimation.finished]);
  } catch (_) {
    // The game can be closed while an animation is running; the state change still completes safely.
  } finally {
    stream.remove();
    source.classList.remove('is-motion-source');
    target.classList.remove('is-motion-target');
    board.classList.remove('is-animating-pour');
  }
}

async function performPour(from, to) {
  const active = puzzle();
  if (!active || isAnimating || !canPour(active.bottles, from, to)) return false;
  const result = applyPour(active.bottles, from, to);
  if (!result) return false;

  undoStack.push({ bottles:active.bottles.map(bottle => bottle.slice()), moves:active.moves });
  isAnimating = true;
  hint = null;
  selectedBottle = -1;
  await animatePour(from, to, result);

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
  if (isAnimating) {
    event.preventDefault();
    return;
  }
  if (suppressBottleClick) {
    suppressBottleClick = false;
    event.preventDefault();
    return;
  }
  const bottle = target.closest('[data-colour-bottle]');
  if (bottle) { selectBottle(Number(bottle.dataset.colourBottle)); return; }
  const level = target.closest('[data-colour-level]')?.getAttribute('data-colour-level');
  if (level) { startLevel(Number(level)); setTab('game'); return; }
  const tab = target.closest('[data-colour-tab]')?.getAttribute('data-colour-tab');
  if (tab) { setTab(tab); return; }
  const action = target.closest('[data-colour-action]')?.getAttribute('data-colour-action');
  if (action === 'start') startLevel(1);
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
        <div class="link-actions"><button class="action secondary" data-close-puzzle-game="colour-sort" type="button">Back To Games Overview</button></div>
      </div>
      <details class="game-info-details"><summary><span>How To Play</span><span class="inline-note">Valid pours, hints and level progression</span></summary>
        <div class="summary-box"><strong>Match the exposed colour.</strong><span class="inline-note">Select a source bottle and then an empty bottle or a bottle with the same colour on top. The largest contiguous exposed run pours automatically, up to the destination capacity. Sort every colour to complete the level.</span></div>
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

const shell = createPuzzleHubShell({
  id:'colour-sort',
  panelId:'colourSortPanel',
  name:'Colour Sort',
  order:20,
  art:'/systems/baseline-games-hub/games/colour-sort/art/colour-sort-overview.svg?v=PUZZLE_GAMES_20261016_1',
  styleUrl:'/systems/baseline-games-hub/games/colour-sort/css/colour-sort.css?v=PUZZLE_GAMES_DRAG_DEPTH_20261017_2',
  note:'Pour matching exposed colours between bottles until every filled bottle contains a single colour.',
  benefit:'Sequencing, planning, state tracking, inhibition and multi-step problem solving.',
  progressText:() => profile ? `Level ${profile.level} · ${profile.completedLevels.length}/${LEVELS.length} puzzles` : 'Ready',
  panelHtml,
  onOpen:() => { ensurePuzzle(); render(); },
  onClose:() => { cleanupBottleDrag(); selectedBottle = -1; hint = null; }
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

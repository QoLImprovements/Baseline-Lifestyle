import {
  MODES,
  boundsForShape,
  canPlace,
  createTray,
  emptyBoard,
  hasAnyPlacement,
  resolvePlacement,
  runLevelProgress,
  shapeById,
  validBoard
} from './block-grid-engine.mjs?v=PUZZLE_GAMES_20261016_1';
import {
  awardXp,
  clone,
  createPuzzleHubShell,
  escapeHtml,
  loadStoredProfile,
  saveStoredProfile,
  xpNeededForLevel
} from '../../../js/puzzle-game-support.mjs?v=PUZZLE_GAMES_20261016_1';

const BUILD = 'BLOCK_GRID_MOTION_20261017_1';
const APP = 'blockgrid';
const DEFAULT_PROFILE = Object.freeze({
  app:APP,
  level:1,
  xp:0,
  bestScore:0,
  gamesPlayed:0,
  totalLines:0,
  totalPieces:0,
  selectedMode:'classic',
  activeRun:null
});

let profile = null;
let selectedPiece = -1;
let previewAnchor = null;
let statusMessage = '';
let dragState = null;
let suppressClick = false;
let storageAuth = null;
let boardMotion = { placed:new Set(), clearRows:new Set(), clearCols:new Set(), invalid:false };

function number(value, minimum = 0) {
  return Math.max(minimum, Math.floor(Number(value) || 0));
}

function validTray(value) {
  return Array.isArray(value) && value.length <= 3 && value.every(id => Boolean(shapeById(id)));
}

function normaliseRun(value) {
  if (!value || typeof value !== 'object' || !validBoard(value.board) || !validTray(value.tray)) return null;
  const run = {
    board:value.board.map(row => row.slice()),
    tray:value.tray.slice(),
    score:number(value.score),
    combo:number(value.combo),
    lines:number(value.lines),
    pieces:number(value.pieces),
    gameOver:Boolean(value.gameOver)
  };
  if (!run.gameOver && run.tray.length === 0) run.tray = createTray(run.board, profile?.selectedMode || 'classic');
  if (!run.gameOver && run.tray.length && !hasAnyPlacement(run.board, run.tray)) run.gameOver = true;
  return run;
}

function normaliseProfile(value) {
  const source = value && typeof value === 'object' ? value : {};
  const mode = MODES[source.selectedMode] ? source.selectedMode : 'classic';
  const next = {
    app:APP,
    level:Math.max(1, number(source.level, 1)),
    xp:number(source.xp),
    bestScore:number(source.bestScore),
    gamesPlayed:number(source.gamesPlayed),
    totalLines:number(source.totalLines),
    totalPieces:number(source.totalPieces),
    selectedMode:mode,
    activeRun:null
  };
  profile = next;
  next.activeRun = normaliseRun(source.activeRun);
  return next;
}

function run() {
  return profile?.activeRun || null;
}

function createRun() {
  const board = emptyBoard();
  return { board, tray:createTray(board, profile.selectedMode), score:0, combo:0, lines:0, pieces:0, gameOver:false };
}

function persist() {
  if (!profile) return;
  saveStoredProfile(APP, profile);
  shell.refreshOverview();
}

function startNewGame() {
  profile.activeRun = createRun();
  profile.gamesPlayed += 1;
  selectedPiece = -1;
  previewAnchor = null;
  statusMessage = 'Choose a piece, then place it on the board.';
  persist();
  render();
}

function ensureRun() {
  if (!profile.activeRun) startNewGame();
}

function currentMode() {
  return MODES[profile.selectedMode] || MODES.classic;
}

function pieceMiniHtml(id) {
  const piece = shapeById(id);
  if (!piece) return '';
  const bounds = boundsForShape(piece);
  const occupied = new Set(piece.cells.map(([row, col]) => `${row}:${col}`));
  let cells = '';
  for (let row = 0; row < bounds.rows; row += 1) {
    for (let col = 0; col < bounds.cols; col += 1) {
      cells += `<span class="block-grid-piece-cell${occupied.has(`${row}:${col}`) ? ' is-filled' : ''}" aria-hidden="true"></span>`;
    }
  }
  return `<span class="block-grid-piece-shape" style="--piece-rows:${bounds.rows};--piece-cols:${bounds.cols}">${cells}</span>`;
}

function trayHtml() {
  const active = run();
  if (!active) return '';
  if (!active.tray.length) return '<span class="inline-note">No pieces remain.</span>';
  return active.tray.map((id, index) => {
    const selected = index === selectedPiece;
    const fits = !active.gameOver && hasAnyPlacement(active.board, [id]);
    return `<button class="block-grid-piece${selected ? ' is-selected' : ''}${fits ? '' : ' is-blocked'}" data-block-piece="${index}" type="button" aria-pressed="${selected}" ${active.gameOver ? 'disabled' : ''}>
      ${pieceMiniHtml(id)}
      <span class="sr-only">Piece ${index + 1}${fits ? '' : ', no legal placement'}</span>
    </button>`;
  }).join('');
}

function previewCells(active) {
  const set = new Map();
  if (selectedPiece < 0 || !previewAnchor || active.gameOver) return set;
  const id = active.tray[selectedPiece];
  const piece = shapeById(id);
  if (!piece) return set;
  const valid = canPlace(active.board, piece, previewAnchor.row, previewAnchor.col);
  piece.cells.forEach(([dr, dc]) => {
    const row = previewAnchor.row + dr;
    const col = previewAnchor.col + dc;
    if (row >= 0 && col >= 0 && row < active.board.length && col < active.board.length) set.set(`${row}:${col}`, valid);
  });
  return set;
}

function boardHtml() {
  const active = run();
  if (!active) return '';
  const previews = previewCells(active);
  return active.board.map((row, rowIndex) => row.map((filled, colIndex) => {
    const key = `${rowIndex}:${colIndex}`;
    const preview = previews.has(key) ? (previews.get(key) ? ' is-preview-valid' : ' is-preview-invalid') : '';
    const lineMotion = boardMotion.clearRows.has(rowIndex) || boardMotion.clearCols.has(colIndex);
    const placedMotion = boardMotion.placed.has(key) && !lineMotion;
    return `<button class="block-grid-cell${filled ? ' is-filled' : ''}${preview}${lineMotion ? ' is-line-cleared' : ''}${placedMotion ? ' is-just-placed' : ''}" data-block-cell="${rowIndex}:${colIndex}" type="button" aria-label="Row ${rowIndex + 1}, column ${colIndex + 1}${filled ? ', occupied' : ', empty'}" ${active.gameOver ? 'disabled' : ''}></button>`;
  }).join('')).join('');
}

function statusHtml() {
  const active = run();
  if (!active) return '<strong>Ready.</strong><span class="inline-note">Start a new game to receive your first three pieces.</span>';
  if (active.gameOver) return `<strong>Run complete — ${active.score} points.</strong><span class="inline-note">No remaining piece fits the board. Start a new game when ready.</span>`;
  const selected = selectedPiece >= 0 ? `Piece ${selectedPiece + 1} selected. ` : '';
  const combo = active.combo > 1 ? ` Combo ×${active.combo}.` : '';
  return `<strong>${escapeHtml(selected + (statusMessage || 'Keep space available for the next tray.'))}</strong><span class="inline-note">Complete full rows or columns to clear them.${escapeHtml(combo)}</span>`;
}

function renderGame() {
  const root = document.getElementById('blockGridGameCard');
  if (!root) return;
  const active = run();
  if (!active) {
    root.innerHTML = `<div class="block-grid-empty"><p>Place shapes on an 8 × 8 board and clear complete rows or columns.</p><button class="action primary" data-block-action="new" type="button">Start New Game</button></div>`;
    return;
  }
  const progress = runLevelProgress(active.lines);
  root.innerHTML = `
    <div class="block-grid-active-header">
      <div class="stat-pills">
        <div class="stat-pill">Mode <span>${escapeHtml(currentMode().name)}</span></div>
        <div class="stat-pill">Score <span>${active.score}</span></div>
        <div class="stat-pill">Lines <span>${active.lines}</span></div>
        <div class="stat-pill">Run Level <span>${progress.level}</span></div>
        <div class="stat-pill">Combo <span>${active.combo ? `×${active.combo}` : '—'}</span></div>
      </div>
      <button class="action secondary" data-block-action="fullscreen" type="button">${document.fullscreenElement === root ? 'Exit Full Screen' : 'Full Screen'}</button>
    </div>
    <div class="summary-box round-status-card" id="blockGridStatus" aria-live="polite">${statusHtml()}</div>
    <div class="block-grid-level-meter" aria-label="Run level progress"><span style="width:${progress.current / progress.target * 100}%"></span></div>
    <div class="block-grid-board${boardMotion.invalid ? ' is-invalid-drop' : ''}" data-block-board role="grid" aria-label="Block Grid board">${boardHtml()}</div>
    <div class="block-grid-tray" aria-label="Available pieces">${trayHtml()}</div>
    <div class="game-window-actions">
      <button class="action ghost" data-block-action="new" type="button">New Game</button>
    </div>`;
  resetBoardMotion();
}

function renderModes() {
  const root = document.getElementById('blockGridModesCard');
  if (!root) return;
  root.innerHTML = `<div class="block-grid-mode-list">${Object.values(MODES).map(mode => `
    <button class="block-grid-mode${profile.selectedMode === mode.id ? ' is-active' : ''}" data-block-mode="${mode.id}" type="button" aria-pressed="${profile.selectedMode === mode.id}">
      <strong>${escapeHtml(mode.name)}</strong><span>${escapeHtml(mode.description)}</span>
    </button>`).join('')}</div>
    <div class="summary-box"><strong>Shape behaviour</strong><span class="inline-note">Pieces keep their supplied orientation. Planning comes from placement and space management rather than rotating pieces.</span></div>`;
}

function renderProgress() {
  const root = document.getElementById('blockGridProgressCard');
  if (!root) return;
  const needed = xpNeededForLevel(profile.level);
  const pct = Math.min(100, profile.xp / needed * 100);
  root.innerHTML = `
    <div class="progress-shell">
      <div class="xp-row"><div><strong>Block Grid Level ${profile.level}</strong><div class="xp-bar"><div class="xp-fill" style="width:${pct}%"></div></div><span class="inline-note">${profile.xp} / ${needed} XP</span></div></div>
    </div>
    <div class="block-grid-progress-stats">
      <div class="trackcoin-stat-card"><strong>${profile.bestScore}</strong><span>Best score</span></div>
      <div class="trackcoin-stat-card"><strong>${profile.gamesPlayed}</strong><span>Games started</span></div>
      <div class="trackcoin-stat-card"><strong>${profile.totalLines}</strong><span>Lines cleared</span></div>
      <div class="trackcoin-stat-card"><strong>${profile.totalPieces}</strong><span>Pieces placed</span></div>
    </div>`;
}

function setTab(name) {
  document.querySelectorAll('[data-block-tab]').forEach(button => button.classList.toggle('is-active', button.dataset.blockTab === name));
  for (const id of ['Game','Modes','Progress']) {
    const card = document.getElementById(`blockGrid${id}Card`);
    if (card) card.hidden = id.toLowerCase() !== name;
  }
}

function render() {
  renderGame();
  renderModes();
  renderProgress();
  shell.refreshOverview();
}

function resetBoardMotion() {
  boardMotion = { placed:new Set(), clearRows:new Set(), clearCols:new Set(), invalid:false };
}

function shapeContainedAnchor(board, piece, row, col) {
  if (!board || !piece || !Number.isInteger(row) || !Number.isInteger(col)) return null;
  const bounds = boundsForShape(piece);
  if (row < 0 || col < 0 || row + bounds.rows > board.length || col + bounds.cols > board.length) return null;
  return { row, col };
}

function clampAnchorInsideBoard(board, piece, row, col) {
  if (!board || !piece) return null;
  const bounds = boundsForShape(piece);
  const maxRow = Math.max(0, board.length - bounds.rows);
  const maxCol = Math.max(0, board.length - bounds.cols);
  return {
    row:Math.max(0, Math.min(maxRow, Math.floor(Number(row) || 0))),
    col:Math.max(0, Math.min(maxCol, Math.floor(Number(col) || 0)))
  };
}

function boardAnchorFromPointer(clientX, clientY) {
  const active = run();
  const board = document.querySelector('#blockGridGameCard [data-block-board]');
  const piece = active && selectedPiece >= 0 ? shapeById(active.tray[selectedPiece]) : null;
  if (!active || !board || !piece) return null;
  const boardRect = board.getBoundingClientRect();
  if (clientX < boardRect.left || clientX > boardRect.right || clientY < boardRect.top || clientY > boardRect.bottom) return null;

  const cells = [...board.querySelectorAll('[data-block-cell]')];
  if (!cells.length) return null;
  let nearest = null;
  let nearestDistance = Infinity;
  for (const cell of cells) {
    const rect = cell.getBoundingClientRect();
    const dx = clientX - (rect.left + rect.width / 2);
    const dy = clientY - (rect.top + rect.height / 2);
    const distance = (dx * dx) + (dy * dy);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearest = cell;
    }
  }
  const coords = cellCoordinates(nearest);
  return coords ? clampAnchorInsideBoard(active.board, piece, coords.row, coords.col) : null;
}

function createDragGhost(pieceId) {
  const ghost = document.createElement('div');
  ghost.className = 'block-grid-drag-ghost';
  ghost.setAttribute('aria-hidden', 'true');
  ghost.innerHTML = pieceMiniHtml(pieceId);
  document.body.appendChild(ghost);
  return ghost;
}

function positionDragGhost(ghost, clientX, clientY, anchor) {
  if (!ghost) return;
  const board = document.querySelector('#blockGridGameCard [data-block-board]');
  const cell = anchor ? board?.querySelector(`[data-block-cell="${anchor.row}:${anchor.col}"]`) : null;
  if (cell) {
    const rect = cell.getBoundingClientRect();
    const adjacent = board.querySelector(`[data-block-cell="${anchor.row}:${Math.min(7, anchor.col + 1)}"]`);
    const adjacentRect = adjacent?.getBoundingClientRect();
    const gap = adjacentRect && anchor.col < 7 ? Math.max(0, adjacentRect.left - rect.right) : 4;
    ghost.style.setProperty('--drag-cell', rect.width + 'px');
    ghost.style.setProperty('--drag-gap', gap + 'px');
    ghost.style.left = rect.left + 'px';
    ghost.style.top = rect.top + 'px';
    ghost.classList.add('is-over-board');
    return;
  }
  ghost.classList.remove('is-over-board');
  ghost.style.left = clientX + 'px';
  ghost.style.top = clientY + 'px';
}

function destroyDragGhost() {
  if (dragState?.ghost?.isConnected) dragState.ghost.remove();
  document.documentElement.classList.remove('is-dragging-block-grid-piece');
}

function choosePiece(index) {
  const active = run();
  if (!active || active.gameOver || !active.tray[index]) return;
  selectedPiece = selectedPiece === index ? -1 : index;
  previewAnchor = null;
  statusMessage = selectedPiece >= 0 ? 'Choose an empty board cell as the piece anchor.' : 'Choose a piece, then place it on the board.';
  renderGame();
}

function placeSelected(row, col) {
  const active = run();
  if (!active || active.gameOver || selectedPiece < 0) return false;
  const pieceId = active.tray[selectedPiece];
  const piece = shapeById(pieceId);
  const contained = shapeContainedAnchor(active.board, piece, row, col);
  if (!contained) {
    boardMotion.invalid = true;
    statusMessage = 'Keep the entire piece inside the board.';
    previewAnchor = null;
    renderGame();
    return false;
  }
  const result = resolvePlacement(active.board, pieceId, contained.row, contained.col, active.combo);
  if (!result) {
    boardMotion.invalid = true;
    statusMessage = 'That piece overlaps blocks already on the board.';
    previewAnchor = { row:contained.row, col:contained.col };
    renderGame();
    return false;
  }
  boardMotion.placed = new Set(result.placed.map(([placedRow, placedCol]) => `${placedRow}:${placedCol}`));
  boardMotion.clearRows = new Set(result.rowsCleared);
  boardMotion.clearCols = new Set(result.colsCleared);
  active.board = result.board;
  active.score += result.scoreDelta;
  active.combo = result.combo;
  active.lines += result.linesCleared;
  active.pieces += 1;
  active.tray.splice(selectedPiece, 1);
  profile.totalPieces += 1;
  profile.totalLines += result.linesCleared;
  awardXp(profile, Math.max(1, Math.ceil(result.scoreDelta / 5) + result.linesCleared * 2));
  profile.bestScore = Math.max(profile.bestScore, active.score);
  if (!active.tray.length) active.tray = createTray(active.board, profile.selectedMode);
  active.gameOver = !hasAnyPlacement(active.board, active.tray);
  selectedPiece = -1;
  previewAnchor = null;
  statusMessage = result.linesCleared
    ? `${result.linesCleared} line${result.linesCleared === 1 ? '' : 's'} cleared for ${result.scoreDelta} points.`
    : `${shapeById(pieceId)?.cells.length || 0} cells placed for ${result.scoreDelta} points.`;
  persist();
  render();
  return true;
}

function changeMode(mode) {
  if (!MODES[mode] || profile.selectedMode === mode) return;
  profile.selectedMode = mode;
  profile.activeRun = createRun();
  profile.gamesPlayed += 1;
  selectedPiece = -1;
  previewAnchor = null;
  statusMessage = `${MODES[mode].name} mode started.`;
  persist();
  render();
  setTab('game');
}

function toggleFullscreen() {
  const card = document.getElementById('blockGridGameCard');
  if (!card) return;
  if (document.fullscreenElement === card) document.exitFullscreen?.().catch(() => {});
  else card.requestFullscreen?.().catch(() => {});
}

function cellCoordinates(target) {
  const raw = target?.getAttribute('data-block-cell') || '';
  const [row, col] = raw.split(':').map(Number);
  return Number.isInteger(row) && Number.isInteger(col) ? { row, col } : null;
}

function handleClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  if (!target || !document.getElementById('blockGridPanel')?.classList.contains('is-active')) return;
  if (suppressClick) { suppressClick = false; event.preventDefault(); return; }
  const piece = target.closest('[data-block-piece]');
  if (piece) { choosePiece(Number(piece.dataset.blockPiece)); return; }
  const cell = target.closest('[data-block-cell]');
  if (cell) {
    const coords = cellCoordinates(cell);
    if (coords) placeSelected(coords.row, coords.col);
    return;
  }
  const action = target.closest('[data-block-action]')?.getAttribute('data-block-action');
  if (action === 'new') startNewGame();
  if (action === 'fullscreen') toggleFullscreen();
  const mode = target.closest('[data-block-mode]')?.getAttribute('data-block-mode');
  if (mode) changeMode(mode);
  const tab = target.closest('[data-block-tab]')?.getAttribute('data-block-tab');
  if (tab) setTab(tab);
}

function handlePointerDown(event) {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  const piece = event.target instanceof Element ? event.target.closest('[data-block-piece]') : null;
  if (!piece || !document.getElementById('blockGridPanel')?.classList.contains('is-active')) return;
  const index = Number(piece.dataset.blockPiece);
  if (!run()?.tray[index]) return;
  selectedPiece = index;
  dragState = { pointerId:event.pointerId, index, startX:event.clientX, startY:event.clientY, moved:false, ghost:null };
  piece.setPointerCapture?.(event.pointerId);
  piece.classList.add('is-selected');
}

function paintPreview() {
  const active = run();
  document.querySelectorAll('#blockGridGameCard .block-grid-cell').forEach(cell => cell.classList.remove('is-preview-valid', 'is-preview-invalid'));
  if (!active || selectedPiece < 0 || !previewAnchor) return;
  const piece = shapeById(active.tray[selectedPiece]);
  if (!piece) return;
  const valid = canPlace(active.board, piece, previewAnchor.row, previewAnchor.col);
  piece.cells.forEach(([dr, dc]) => {
    const row = previewAnchor.row + dr;
    const col = previewAnchor.col + dc;
    const cell = document.querySelector(`#blockGridGameCard [data-block-cell=\"${row}:${col}\"]`);
    cell?.classList.add(valid ? 'is-preview-valid' : 'is-preview-invalid');
  });
}

function handlePointerMove(event) {
  if (!dragState || dragState.pointerId !== event.pointerId) return;
  if (Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY) > 7) dragState.moved = true;
  if (!dragState.moved) return;
  if (!dragState.ghost) {
    const pieceId = run()?.tray[dragState.index];
    if (pieceId) dragState.ghost = createDragGhost(pieceId);
    document.documentElement.classList.add('is-dragging-block-grid-piece');
  }
  event.preventDefault();
  const anchor = boardAnchorFromPointer(event.clientX, event.clientY);
  positionDragGhost(dragState.ghost, event.clientX, event.clientY, anchor);
  if ((!anchor && previewAnchor) || (anchor && (!previewAnchor || previewAnchor.row !== anchor.row || previewAnchor.col !== anchor.col))) {
    previewAnchor = anchor;
    paintPreview();
  }
}

function handlePointerUp(event) {
  if (!dragState || dragState.pointerId !== event.pointerId) return;
  const moved = dragState.moved;
  const anchor = moved ? boardAnchorFromPointer(event.clientX, event.clientY) : null;
  destroyDragGhost();
  dragState = null;
  if (moved) {
    suppressClick = true;
    if (anchor) placeSelected(anchor.row, anchor.col);
    else {
      previewAnchor = null;
      statusMessage = 'Drop the whole piece inside the board.';
      renderGame();
    }
  }
}

function handleKeydown(event) {
  if (!document.getElementById('blockGridPanel')?.classList.contains('is-active')) return;
  if (event.key === 'Escape' && document.fullscreenElement === document.getElementById('blockGridGameCard')) return;
  if (event.key === 'Escape') shell.close();
}

function panelHtml() {
  return `<section class="card game-panel block-grid-panel" id="blockGridPanel" aria-labelledby="blockGridTitle" hidden aria-hidden="true">
    <div class="game-shell">
      <div class="game-header">
        <div><h2 id="blockGridTitle" tabindex="-1">Block Grid</h2><p class="note">Place the supplied shapes, clear complete rows or columns, and protect enough open space for the next tray.</p></div>
        <div class="link-actions"><button class="action secondary" data-close-puzzle-game="block-grid" type="button">Back To Games Overview</button></div>
      </div>
      <details class="game-info-details"><summary><span>How To Play</span><span class="inline-note">Placement, clearing and scoring</span></summary>
        <div class="summary-box"><strong>Place without rotating.</strong><span class="inline-note">Choose or drag one of the three supplied pieces onto the 8 × 8 board. Complete a full row or column to clear it. Multiple lines and consecutive clears increase the score. The run ends when none of the available pieces can fit.</span></div>
      </details>
      <div class="game-toggle-row">
        <button class="action ghost game-toggle-btn is-active" data-block-tab="game" type="button">Game</button>
        <button class="action ghost game-toggle-btn" data-block-tab="modes" type="button">Modes</button>
        <button class="action ghost game-toggle-btn" data-block-tab="progress" type="button">Progress</button>
      </div>
      <div class="game-panel-stack">
        <section class="card game-card game-play-root" id="blockGridGameCard" data-game-play-root="block-grid"></section>
        <section class="card game-card" id="blockGridModesCard" hidden></section>
        <section class="card game-card" id="blockGridProgressCard" hidden></section>
      </div>
    </div>
  </section>`;
}

const shell = createPuzzleHubShell({
  id:'block-grid',
  panelId:'blockGridPanel',
  name:'Block Grid',
  order:10,
  art:'/systems/baseline-games-hub/games/block-grid/art/block-grid-overview.svg?v=PUZZLE_GAMES_20261016_1',
  styleUrl:'/systems/baseline-games-hub/games/block-grid/css/block-grid.css?v=PUZZLE_GAMES_MOTION_20261017_1',
  note:'Place geometric pieces on an 8 × 8 board, clear complete lines, and manage the space left for each new tray.',
  benefit:'Spatial planning, visual organisation, prospective reasoning and flexible space management.',
  progressText:() => profile ? `Level ${profile.level} · Best ${profile.bestScore}` : 'Ready',
  panelHtml,
  onOpen:() => { ensureRun(); render(); },
  onClose:() => { destroyDragGhost(); previewAnchor = null; dragState = null; }
});

function init() {
  profile = loadStoredProfile(APP, DEFAULT_PROFILE, normaliseProfile);
  storageAuth = Boolean(globalThis.BaselineGameStorage?.isAuthenticated?.());
  shell.init();
  document.addEventListener('click', handleClick);
  document.addEventListener('pointerdown', handlePointerDown);
  document.addEventListener('pointermove', handlePointerMove);
  document.addEventListener('pointerup', handlePointerUp);
  document.addEventListener('pointercancel', () => { destroyDragGhost(); dragState = null; previewAnchor = null; paintPreview(); });
  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('fullscreenchange', renderGame);
  document.addEventListener('baseline:game-storage', event => {
    const authenticated = Boolean(event.detail?.authenticated);
    if (authenticated === storageAuth) return;
    storageAuth = authenticated;
    profile = loadStoredProfile(APP, DEFAULT_PROFILE, normaliseProfile);
    selectedPiece = -1;
    previewAnchor = null;
    render();
  });
  document.documentElement.dataset.blockGridRuntime = BUILD;
  globalThis.BaselineBlockGrid = Object.freeze({
    build:BUILD,
    open:shell.open,
    close:shell.close,
    getProfile:() => clone(profile),
    reset:() => { profile = normaliseProfile(DEFAULT_PROFILE); startNewGame(); }
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
else init();

import {
  MODES,
  boundsForShape,
  canPlace,
  createTray,
  emptyBoard,
  hasAnyPlacement,
  resolvePlacement,
  shapeById,
  validBoard
} from './block-grid-engine.mjs?v=PUZZLE_GAMES_20261016_1';
import {
  awardXp,
  clone,
  createGameExtensionShell,
  escapeHtml,
  loadStoredProfile,
  saveStoredProfile,
  xpNeededForLevel
} from '../../../js/game-extension-support.mjs?v=RECREATION_COHERENCE_20261023_2';

const BUILD = 'BLOCK_GRID_MOBILE_PLAYABILITY_20261024_1';
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
let specialDragState = null;
let suppressClick = false;
let storageAuth = null;
let specialMode = '';
let newGamePointerAt = 0;
let boardMotion = { placed:new Set(), clearRows:new Set(), clearCols:new Set(), invalid:false, scoreDelta:0, lines:0, combo:0, newTray:false, perfectClear:false };

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
    skillCharge:Math.max(0,Math.min(100,number(value.skillCharge))),
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

function autoNextApi() {
  const api = globalThis.BaselineGamesAutoNext;
  return api && typeof api.enabled === 'function' ? api : null;
}

function syncAutoNextControl() {
  try { autoNextApi()?.sync?.(); } catch (_) {}
}

function createRun() {
  const board = emptyBoard();
  return { board, tray:createTray(board, profile.selectedMode), score:0, combo:0, lines:0, pieces:0, skillCharge:0, gameOver:false };
}

function persist() {
  if (!profile) return;
  saveStoredProfile(APP, profile);
  shell.refreshOverview();
}

function startNewGame() {
  try { autoNextApi()?.clear?.(APP); } catch (_) {}
  profile.activeRun = createRun();
  profile.gamesPlayed += 1;
  selectedPiece = -1;
  previewAnchor = null;
  statusMessage = 'Choose a piece, then place it on the board.';
  specialMode = '';
  boardMotion.newTray = true;
  persist();
  render();
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
    return `<button class="block-grid-piece${selected ? ' is-selected' : ''}${fits ? '' : ' is-blocked'}${boardMotion.newTray ? ' is-tray-arrival' : ''}" style="--piece-index:${index}" data-block-piece="${index}" type="button" aria-pressed="${selected}" ${active.gameOver ? 'disabled' : ''}>
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

function boardOccupancy(active) {
  const filled = active.board.reduce((total, row) => total + row.filter(Boolean).length, 0);
  const total = active.board.length * active.board.length;
  return total ? filled / total : 0;
}

function nearCompleteCells(active) {
  const cells = new Set();
  const size = active.board.length;
  for (let row = 0; row < size; row += 1) {
    const filled = active.board[row].reduce((count, cell) => count + (cell ? 1 : 0), 0);
    if (filled === size - 1) {
      const col = active.board[row].findIndex(cell => !cell);
      if (col >= 0) cells.add(`${row}:${col}`);
    }
  }
  for (let col = 0; col < size; col += 1) {
    let filled = 0;
    let emptyRow = -1;
    for (let row = 0; row < size; row += 1) {
      if (active.board[row][col]) filled += 1;
      else emptyRow = row;
    }
    if (filled === size - 1 && emptyRow >= 0) cells.add(`${emptyRow}:${col}`);
  }
  return cells;
}

function boardFeedbackHtml() {
  if (!boardMotion.scoreDelta && !boardMotion.lines) return '';
  const clearLabel = boardMotion.perfectClear ? 'PERFECT CLEAR' : boardMotion.lines >= 3 ? 'MEGA CLEAR' : boardMotion.lines === 2 ? 'DOUBLE CLEAR' : boardMotion.lines === 1 ? 'LINE CLEAR' : '';
  return `<div class="block-grid-feedback" aria-hidden="true">
    <strong>+${boardMotion.scoreDelta}</strong>
    ${clearLabel ? `<span>${clearLabel}</span>` : ''}
    ${boardMotion.combo > 1 ? `<em>Combo ×${boardMotion.combo}</em>` : ''}
  </div>`;
}

function boardHtml() {
  const active = run();
  if (!active) return '';
  const previews = previewCells(active);
  const nearComplete = nearCompleteCells(active);
  return active.board.map((row, rowIndex) => row.map((filled, colIndex) => {
    const key = `${rowIndex}:${colIndex}`;
    const preview = previews.has(key) ? (previews.get(key) ? ' is-preview-valid' : ' is-preview-invalid') : '';
    const lineMotion = boardMotion.clearRows.has(rowIndex) || boardMotion.clearCols.has(colIndex);
    const placedMotion = boardMotion.placed.has(key) && !lineMotion;
    const opportunity = !filled && nearComplete.has(key);
    return `<button class="block-grid-cell${filled ? ' is-filled' : ''}${preview}${lineMotion ? ' is-line-cleared' : ''}${placedMotion ? ' is-just-placed' : ''}${opportunity ? ' is-line-opportunity' : ''}" data-block-cell="${rowIndex}:${colIndex}" type="button" aria-label="Row ${rowIndex + 1}, column ${colIndex + 1}${filled ? ', occupied' : ', empty'}" ${active.gameOver ? 'disabled' : ''}></button>`;
  }).join('')).join('');
}

function statusHtml() {
  const active = run();
  const streak = active ? Math.max(0, number(active.combo)) : 0;
  const cleanStreakBonus = Math.min(100, streak * 5);
  const outcome = !active
    ? 'Start a new game to receive your first three pieces.'
    : active.gameOver
      ? `Run complete — ${active.score} points. No remaining piece fits the board.`
      : (selectedPiece >= 0 ? `Piece ${selectedPiece + 1} selected. ` : '') + (statusMessage || 'Keep space available for the next tray.');
  return '<div class="round-status-heading">Round Status</div>'
    + '<div class="round-status-outcome">'+escapeHtml(outcome)+'</div>'
    + '<div class="round-status-metrics">'
    + '<div><span>Current Tier</span><strong>'+escapeHtml(currentMode().name)+'</strong></div>'
    + '<div><span>Winning Streak</span><strong>'+streak+'</strong></div>'
    + '<div><span>Clean Streak Bonus</span><strong>'+cleanStreakBonus+'%</strong></div>'
    + '</div>';
}

function renderGameInfo() {
  const root = document.getElementById('blockGridGameInfo');
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
        <div class="stat-pill">Best Score <span>${profile.bestScore}</span></div>
        <div class="stat-pill">Games Started <span>${profile.gamesPlayed}</span></div>
        <div class="stat-pill">Lines Cleared <span>${profile.totalLines}</span></div>
        <div class="stat-pill">Pieces Placed <span>${profile.totalPieces}</span></div>
      </div>
    </div>
    <div class="summary-box"><strong>Place without rotating.</strong><span class="inline-note">Choose or drag one of the three supplied pieces onto the 8 × 8 board. Complete a full row or column to clear it. Multiple lines and consecutive clears increase the score. The run ends when none of the available pieces can fit.</span></div>`;
}

function renderGame() {
  const root = document.getElementById('blockGridGameCard');
  if (!root) return;
  const active = run();
  if (!active) {
    root.innerHTML = `<div class="block-grid-empty"><p>${escapeHtml(currentMode().name)} Tier selected. Press New Game when ready.</p><div class="game-window-actions game-common-actions"><button class="action ghost start-new-game-toggle game-control-icon game-shell-action game-shell-action--icon" data-block-action="new" data-tooltip="New Game · Alt+N" title="New Game · Alt+N" aria-label="New Game" type="button"><span aria-hidden="true">＋</span><span class="sr-only">New Game</span></button><button class="action ghost auto-next-toggle game-control-icon game-shell-action game-shell-action--icon" data-auto-next-toggle="${APP}" type="button" aria-pressed="false" aria-label="Auto-next off"><span aria-hidden="true">A</span><span class="sr-only">Auto-next</span></button><button class="action ghost game-shell-action game-shell-action--icon game-fullscreen-toggle" data-block-action="fullscreen" data-tooltip="Full screen · Alt+F" type="button" aria-label="Full screen" title="Full screen — Alt+F"><svg class="game-shell-action__svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"></path></svg><span class="sr-only">Full screen</span></button></div></div>`;
    syncAutoNextControl();
    return;
  }
  const occupancy = boardOccupancy(active);
  const openPercent = Math.max(0, Math.round((1 - occupancy) * 100));
  root.innerHTML = `
    <div class="block-grid-active-header block-grid-score-window">
      <div class="stat-pills">
        <div class="stat-pill">Score <span>${active.score}</span></div>
        <div class="stat-pill">Lines <span>${active.lines}</span></div>
        <div class="stat-pill">Combo <span>${active.combo ? `×${active.combo}` : '—'}</span></div>
        <div class="stat-pill">Open Space <span>${openPercent}%</span></div>
      </div>
    </div>
    <div class="game-live-xp" data-live-xp="blockgrid"><strong>Player Rank ${profile.level}</strong><div class="game-live-xp__bar"><span style="width:${Math.min(100, profile.xp / xpNeededForLevel(profile.level) * 100)}%"></span></div><span>${profile.xp} / ${xpNeededForLevel(profile.level)} XP</span></div>
    <div class="summary-box round-status-card" id="blockGridStatus" aria-live="polite">${statusHtml()}</div>
    <div class="block-grid-run-objective">
      <div><strong>${escapeHtml(currentMode().name)} Tier</strong><span>Difficulty tier · random pieces every game</span></div>
      <span>${active.lines} lines cleared</span>
    </div>
    <div class="block-grid-skill">
      <div class="block-grid-skill-head"><strong>Special</strong><span>${Math.round(active.skillCharge || 0)}%</span></div>
      <div class="block-grid-skill-meter" role="progressbar" aria-label="Special skill charge" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(active.skillCharge || 0)}"><span style="width:${Math.min(100,active.skillCharge || 0)}%"></span></div>
      <div class="block-grid-skill-actions">
        <button class="action ghost game-control-icon" data-block-action="blast" type="button" data-tooltip="Clear 4 × 4 · Bomb" title="Clear 4 × 4 · Bomb" aria-label="Clear 4 by 4" ${(active.skillCharge || 0) < 100 ? 'disabled' : ''}><span aria-hidden="true">💣</span><span class="sr-only">Clear 4 × 4</span></button>
        <button class="action ghost game-control-icon" data-block-action="rows" type="button" data-tooltip="Clear 2 Rows · Plow" title="Clear 2 Rows · Plow" aria-label="Clear 2 rows" ${(active.skillCharge || 0) < 100 ? 'disabled' : ''}><span aria-hidden="true">🚜</span><span class="sr-only">Clear 2 Rows</span></button>
      </div>
    </div>
    <div class="block-grid-play-cluster">
      <div class="block-grid-board-stage">
        <div class="block-grid-board${boardMotion.invalid ? ' is-invalid-drop' : ''}${occupancy >= .72 ? ' is-danger' : occupancy >= .55 ? ' is-crowded' : ''}" data-block-board role="grid" aria-label="Block Grid board">${boardHtml()}</div>
        ${boardFeedbackHtml()}
      </div>
      <div class="block-grid-tray-wrap">
        <div class="block-grid-tray-heading"><strong>Available Pieces · ${escapeHtml(currentMode().name)} Tier</strong><span>Drag a shape, or tap it then tap a board cell</span></div>
        <div class="block-grid-tray${boardMotion.newTray ? ' is-new-tray' : ''}" aria-label="Available pieces">${trayHtml()}</div>
      </div>
    </div>
    <div class="game-window-actions game-common-actions">
      <button class="action ghost start-new-game-toggle game-control-icon game-shell-action game-shell-action--icon" data-block-action="new" data-tooltip="New Game · Alt+N" title="New Game · Alt+N" aria-label="New Game" type="button"><span aria-hidden="true">＋</span><span class="sr-only">New Game</span></button>
        <button class="action ghost auto-next-toggle game-control-icon game-shell-action game-shell-action--icon" data-auto-next-toggle="${APP}" type="button" aria-pressed="false" aria-label="Auto-next off"><span aria-hidden="true">A</span><span class="sr-only">Auto-next</span></button>
        <button class="action ghost game-shell-action game-shell-action--icon game-fullscreen-toggle" data-block-action="fullscreen" data-tooltip="Full screen · Alt+F" type="button" aria-label="Full screen" title="Full screen — Alt+F"><svg class="game-shell-action__svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"></path></svg><span class="sr-only">Full screen</span></button>
    </div>`;
  resetBoardMotion();
  syncAutoNextControl();
}

function renderModes() {
  const root = document.getElementById('blockGridModesCard');
  if (!root) return;
  root.innerHTML = `<div class="block-grid-mode-list">${Object.values(MODES).map(mode => `
    <button class="block-grid-mode${profile.selectedMode === mode.id ? ' is-active' : ''}" data-block-mode="${mode.id}" type="button" aria-pressed="${profile.selectedMode === mode.id}">
      <strong>${escapeHtml(mode.name)} Tier</strong><span>${escapeHtml(mode.description)}</span>
    </button>`).join('')}</div>
    <div class="summary-box"><strong>Difficulty tiers</strong><span class="inline-note">Each tier produces many unpredictable games from random piece trays. Difficulty comes from the tier rules, not a fixed sequence of levels.</span></div>`;
}

function renderProgress() {
  const root = document.getElementById('blockGridProgressCard');
  if (!root) return;
  const needed = xpNeededForLevel(profile.level);
  const pct = Math.min(100, profile.xp / needed * 100);
  const remaining = Math.max(0, needed - profile.xp);
  root.innerHTML = `
    <section class="coherent-progress-overview">
      <div class="coherent-progress-heading"><div><span class="coherent-progress-kicker">Block Grid</span><strong>Player Rank ${profile.level}</strong></div><div class="coherent-progress-next">${remaining} XP to Player Rank ${profile.level + 1}</div></div>
      <div class="coherent-progress-xp-meta"><span>${profile.xp} / ${needed} XP</span><span>${Math.round(pct)}%</span></div>
      <div class="coherent-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${needed}" aria-valuenow="${profile.xp}"><span style="width:${pct}%"></span></div>
    </section>
    <div class="coherent-progress-grid">
      <div class="coherent-progress-stat"><span>Best score</span><strong>${profile.bestScore}</strong></div>
      <div class="coherent-progress-stat"><span>Games started</span><strong>${profile.gamesPlayed}</strong></div>
      <div class="coherent-progress-stat"><span>Lines cleared</span><strong>${profile.totalLines}</strong></div>
      <div class="coherent-progress-stat"><span>Pieces placed</span><strong>${profile.totalPieces}</strong></div>
      <div class="coherent-progress-stat"><span>Current tier</span><strong>${escapeHtml(currentMode().name)}</strong></div>
    </div>`;
}

const BLOCK_TABS = Object.freeze(['game','modes','progress']);

function blockTabFromLocation() {
  if (!/^\/baseline-recreation\/games\/block-grid\/?$/i.test(String(location.pathname || ''))) return 'game';
  try {
    const requested = String(new URLSearchParams(location.search || '').get('view') || '').toLowerCase();
    return BLOCK_TABS.includes(requested) ? requested : 'game';
  } catch (_) { return 'game'; }
}

function blockTabUrl(name) {
  const next = BLOCK_TABS.includes(name) ? name : 'game';
  const url = new URL(location.href);
  url.pathname = '/baseline-recreation/games/block-grid';
  if (next === 'game') url.searchParams.delete('view');
  else url.searchParams.set('view', next);
  url.hash = '';
  return url.pathname + url.search;
}

function setTab(name, historyMode = 'none') {
  const next = BLOCK_TABS.includes(name) ? name : 'game';
  document.querySelectorAll('[data-block-tab]').forEach(button => button.classList.toggle('is-active', button.dataset.blockTab === next));
  for (const id of ['Game','Modes','Progress']) {
    const card = document.getElementById(`blockGrid${id}Card`);
    if (card) card.hidden = id.toLowerCase() !== next;
  }
  if (historyMode !== 'none' && /^\/baseline-recreation\/games\/block-grid\/?$/i.test(String(location.pathname || ''))) {
    try {
      const nextUrl = blockTabUrl(next);
      const currentUrl = location.pathname + location.search + location.hash;
      if (currentUrl !== nextUrl) {
        const method = historyMode === 'replace' ? 'replaceState' : 'pushState';
        history[method]({ recreationGame:'block-grid', view:next }, '', nextUrl);
      }
    } catch (_) {}
  }
}

function render() {
  renderGameInfo();
  renderGame();
  renderModes();
  renderProgress();
  shell.refreshOverview();
}

function resetBoardMotion() {
  boardMotion = { placed:new Set(), clearRows:new Set(), clearCols:new Set(), invalid:false, scoreDelta:0, lines:0, combo:0, newTray:false, perfectClear:false };
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

function boardAnchorFromPointer(clientX, clientY, grip = dragState) {
  const active = run();
  const board = document.querySelector('#blockGridGameCard [data-block-board]');
  const piece = active && selectedPiece >= 0 ? shapeById(active.tray[selectedPiece]) : null;
  if (!active || !board || !piece) return null;
  const boardRect = board.getBoundingClientRect();
  const coarse = Boolean(window.matchMedia?.('(pointer:coarse)').matches);
  const tolerance = coarse ? 26 : 10;
  if (clientX < boardRect.left - tolerance || clientX > boardRect.right + tolerance || clientY < boardRect.top - tolerance || clientY > boardRect.bottom + tolerance) return null;

  const first = board.querySelector('[data-block-cell="0:0"]');
  const right = board.querySelector('[data-block-cell="0:1"]');
  const down = board.querySelector('[data-block-cell="1:0"]');
  if (!first) return null;
  const firstRect = first.getBoundingClientRect();
  const rightRect = right?.getBoundingClientRect();
  const downRect = down?.getBoundingClientRect();
  const pitchX = rightRect ? rightRect.left - firstRect.left : firstRect.width;
  const pitchY = downRect ? downRect.top - firstRect.top : firstRect.height;
  if (!(pitchX > 0) || !(pitchY > 0)) return null;

  const bounds = boundsForShape(piece);
  const grabCol = Math.max(0, Math.min(bounds.cols - 1, Number(grip?.grabCol) || 0));
  const grabRow = Math.max(0, Math.min(bounds.rows - 1, Number(grip?.grabRow) || 0));
  const rawOffsetX = Number(grip?.grabOffsetX);
  const rawOffsetY = Number(grip?.grabOffsetY);
  const offsetX = Number.isFinite(rawOffsetX) ? Math.max(0, Math.min(1, rawOffsetX)) : .5;
  const offsetY = Number.isFinite(rawOffsetY) ? Math.max(0, Math.min(1, rawOffsetY)) : .5;

  // Project the exact point being held back onto the board grid. The cell under
  // the pointer is not automatically the piece anchor: the grabbed cell/point
  // must remain under the pointer all the way through the drop.
  const heldX = (grabCol * pitchX) + (firstRect.width * offsetX);
  const heldY = (grabRow * pitchY) + (firstRect.height * offsetY);
  const pieceLeft = clientX - heldX;
  const pieceTop = clientY - heldY;
  const col = Math.round((pieceLeft - firstRect.left) / pitchX);
  const row = Math.round((pieceTop - firstRect.top) / pitchY);

  if (row < 0 || col < 0 || row + bounds.rows > active.board.length || col + bounds.cols > active.board.length) return null;
  return { row, col };
}

function createDragGhost(pieceId) {
  const ghost = document.createElement('div');
  ghost.className = 'block-grid-drag-ghost';
  ghost.setAttribute('aria-hidden', 'true');
  ghost.innerHTML = pieceMiniHtml(pieceId);
  const card=document.getElementById('blockGridGameCard');
  const fullscreenHost=document.fullscreenElement;
  const host=fullscreenHost && card && fullscreenHost===card ? fullscreenHost : document.body;
  host.appendChild(ghost);
  return ghost;
}

function distanceToRect(clientX, clientY, rect) {
  const dx = clientX < rect.left ? rect.left - clientX : (clientX > rect.right ? clientX - rect.right : 0);
  const dy = clientY < rect.top ? rect.top - clientY : (clientY > rect.bottom ? clientY - rect.bottom : 0);
  return Math.hypot(dx, dy);
}

function positionDragGhost(ghost, clientX, clientY, anchor, grip = dragState) {
  if (!ghost) return;
  const active=run();
  const piece=active && grip ? shapeById(active.tray[grip.index]) : null;
  const bounds=piece ? boundsForShape(piece) : {rows:1,cols:1};
  const board = document.querySelector('#blockGridGameCard [data-block-board]');
  const sourceCell=Math.max(1,Number(grip?.sourceCellSize)||18);
  const sourceGap=Math.max(0,Number(grip?.sourceGap)||3);
  let cellSize=sourceCell;
  let gap=sourceGap;
  let blend=0;

  const first=board?.querySelector('[data-block-cell="0:0"]');
  const right=board?.querySelector('[data-block-cell="0:1"]');
  if(board && first){
    const boardRect=board.getBoundingClientRect();
    const firstRect=first.getBoundingClientRect();
    const rightRect=right?.getBoundingClientRect();
    const boardCell=Math.max(1,firstRect.width);
    const boardGap=rightRect ? Math.max(0,rightRect.left-firstRect.right) : sourceGap;
    const distance=distanceToRect(clientX,clientY,boardRect);
    // Morph continuously during the final approach rather than jumping when
    // the pointer crosses from the tray/card region into the board.
    blend=anchor ? 1 : Math.max(0,Math.min(1,1-(distance/120)));
    cellSize=sourceCell+((boardCell-sourceCell)*blend);
    gap=sourceGap+((boardGap-sourceGap)*blend);
  }

  ghost.style.setProperty('--drag-cell',cellSize.toFixed(2)+'px');
  ghost.style.setProperty('--drag-gap',gap.toFixed(2)+'px');
  ghost.classList.toggle('is-over-board',blend>.55);

  const grabCol=Math.max(0,Math.min(bounds.cols-1,Number(grip?.grabCol)||0));
  const grabRow=Math.max(0,Math.min(bounds.rows-1,Number(grip?.grabRow)||0));
  const rawOffsetX=Number(grip?.grabOffsetX),rawOffsetY=Number(grip?.grabOffsetY);
  const grabOffsetX=Number.isFinite(rawOffsetX)?Math.max(0,Math.min(1,rawOffsetX)):.5;
  const grabOffsetY=Number.isFinite(rawOffsetY)?Math.max(0,Math.min(1,rawOffsetY)):.5;
  const grabbedX=(grabCol*(cellSize+gap))+(cellSize*grabOffsetX);
  const grabbedY=(grabRow*(cellSize+gap))+(cellSize*grabOffsetY);
  ghost.style.left=(clientX-grabbedX)+'px';
  ghost.style.top=(clientY-grabbedY)+'px';
}
function destroyDragGhost() {
  if (dragState?.ghost?.isConnected) dragState.ghost.remove();
  document.documentElement.classList.remove('is-dragging-block-grid-piece');
}

function boardCellFromPointer(clientX, clientY) {
  const board=document.querySelector('#blockGridGameCard [data-block-board]');
  if(!board) return null;
  const first=board.querySelector('[data-block-cell="0:0"]');
  const right=board.querySelector('[data-block-cell="0:1"]');
  const down=board.querySelector('[data-block-cell="1:0"]');
  if(!first) return null;
  const boardRect=board.getBoundingClientRect();
  if(clientX<boardRect.left||clientX>boardRect.right||clientY<boardRect.top||clientY>boardRect.bottom) return null;
  const firstRect=first.getBoundingClientRect();
  const rightRect=right?.getBoundingClientRect();
  const downRect=down?.getBoundingClientRect();
  const pitchX=rightRect?rightRect.left-firstRect.left:firstRect.width;
  const pitchY=downRect?downRect.top-firstRect.top:firstRect.height;
  if(!(pitchX>0)||!(pitchY>0)) return null;
  const col=Math.max(0,Math.min(7,Math.floor((clientX-firstRect.left+(pitchX/2))/pitchX)));
  const row=Math.max(0,Math.min(7,Math.floor((clientY-firstRect.top+(pitchY/2))/pitchY)));
  return {row,col};
}

function clearSpecialPreview() {
  document.querySelectorAll('#blockGridGameCard .block-grid-cell.is-special-preview').forEach(cell=>cell.classList.remove('is-special-preview'));
}

function specialRowsFor(row) {
  const base=Math.max(0,Math.min(7,Number(row)||0));
  return base>=7?[6,7]:[base,base+1];
}

function paintSpecialPreview(type, coords) {
  clearSpecialPreview();
  if(!coords) return;
  const cells=[];
  if(type==='blast'){
    const startRow=Math.max(0,Math.min(4,coords.row-1));
    const startCol=Math.max(0,Math.min(4,coords.col-1));
    for(let row=startRow;row<startRow+4;row+=1){
      for(let col=startCol;col<startCol+4;col+=1) cells.push([row,col]);
    }
  }else if(type==='rows'){
    specialRowsFor(coords.row).forEach(row=>{
      for(let col=0;col<8;col+=1) cells.push([row,col]);
    });
  }
  cells.forEach(([row,col])=>document.querySelector(`#blockGridGameCard [data-block-cell="${row}:${col}"]`)?.classList.add('is-special-preview'));
}

function createSpecialDragGhost(type) {
  const ghost=document.createElement('div');
  ghost.className='block-grid-special-drag-ghost';
  ghost.setAttribute('aria-hidden','true');
  ghost.textContent=type==='blast'?'💣':'🚜';
  (document.fullscreenElement===document.getElementById('blockGridGameCard')?document.fullscreenElement:document.body).appendChild(ghost);
  document.documentElement.classList.add('is-dragging-block-grid-special');
  return ghost;
}

function positionSpecialDragGhost(ghost,clientX,clientY) {
  if(!ghost) return;
  ghost.style.left=(clientX+12)+'px';
  ghost.style.top=(clientY-12)+'px';
}

function destroySpecialDrag() {
  if(specialDragState?.ghost?.isConnected) specialDragState.ghost.remove();
  specialDragState=null;
  clearSpecialPreview();
  document.documentElement.classList.remove('is-dragging-block-grid-special');
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
  const perfectClear = result.linesCleared > 0 && result.board.every(boardRow => boardRow.every(cell => cell === 0));
  const perfectBonus = perfectClear ? 100 : 0;
  const awardedScore = result.scoreDelta + perfectBonus;
  boardMotion.scoreDelta = awardedScore;
  boardMotion.lines = result.linesCleared;
  boardMotion.combo = result.combo;
  boardMotion.perfectClear = perfectClear;
  active.board = result.board;
  active.score += awardedScore;
  active.combo = result.combo;
  active.lines += result.linesCleared;
  active.pieces += 1;
  active.skillCharge = Math.min(100, (active.skillCharge || 0) + 8 + (result.linesCleared * 18) + (perfectClear ? 30 : 0));
  active.tray.splice(selectedPiece, 1);
  profile.totalPieces += 1;
  profile.totalLines += result.linesCleared;
  awardXp(profile, Math.max(1, Math.ceil(awardedScore / 5) + result.linesCleared * 2));
  profile.bestScore = Math.max(profile.bestScore, active.score);
  if (!active.tray.length) {
    active.tray = createTray(active.board, profile.selectedMode);
    boardMotion.newTray = true;
  }
  active.gameOver = !hasAnyPlacement(active.board, active.tray);
  selectedPiece = -1;
  previewAnchor = null;
  statusMessage = perfectClear
    ? `Perfect clear — ${awardedScore} points including a 100-point bonus.`
    : result.linesCleared
      ? `${result.linesCleared} line${result.linesCleared === 1 ? '' : 's'} cleared for ${awardedScore} points.`
      : `${shapeById(pieceId)?.cells.length || 0} cells placed for ${awardedScore} points.`;
  persist();
  render();
  if (active.gameOver) {
    try { autoNextApi()?.schedule?.(APP, startNewGame); } catch (_) {}
  }
  return true;
}

function consumeSpecialCharge(active) {
  clearSpecialPreview();
  active.skillCharge = 0;
  active.combo = 0;
  active.gameOver = !hasAnyPlacement(active.board, active.tray);
  specialMode = '';
  selectedPiece = -1;
  previewAnchor = null;
  persist();
  render();
}
function clearSpecialBlast(row, col) {
  const active = run();
  if (!active || (active.skillCharge || 0) < 100) return false;
  const startRow=Math.max(0,Math.min(active.board.length-4,row-1));
  const startCol=Math.max(0,Math.min(active.board.length-4,col-1));
  let cleared=0;
  for(let r=startRow;r<startRow+4;r+=1){
    for(let c=startCol;c<startCol+4;c+=1){
      if(active.board[r][c]){ active.board[r][c]=0; cleared+=1; }
    }
  }
  if(!cleared){ statusMessage='Choose a 4 × 4 area containing blocks.'; render(); return false; }
  statusMessage='Special used — cleared a 4 × 4 area.';
  consumeSpecialCharge(active);
  return true;
}
function clearSpecialRows(row) {
  const active=run();
  if(!active || (active.skillCharge || 0)<100) return false;
  let indices;
  if(Number.isFinite(Number(row))) indices=specialRowsFor(Number(row));
  else{
    indices=active.board.map((boardRow,index)=>({index,count:boardRow.filter(Boolean).length}))
      .filter(item=>item.count>0).sort((a,b)=>b.count-a.count || a.index-b.index).slice(0,2).map(item=>item.index);
  }
  const occupied=indices.filter(index=>active.board[index].some(Boolean));
  if(!occupied.length){ statusMessage='Choose two rows containing blocks.'; render(); return false; }
  indices.forEach(index=>{ active.board[index]=active.board[index].map(()=>0); });
  statusMessage='Special used — cleared ' + indices.length + ' rows.';
  consumeSpecialCharge(active);
  return true;
}
function changeMode(mode) {
  if (!MODES[mode] || profile.selectedMode === mode) return;
  profile.selectedMode = mode;
  profile.activeRun = null;
  selectedPiece = -1;
  previewAnchor = null;
  statusMessage = '';
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
  const action = target.closest('[data-block-action]')?.getAttribute('data-block-action');
  if (action) {
    event.preventDefault();
    if (action === 'new') {
    if(performance.now()-newGamePointerAt<700){ event.preventDefault(); return; }
    startNewGame();
  }
    if (action === 'blast' || action === 'rows') { if((run()?.skillCharge || 0)>=100){ specialMode=action; selectedPiece=-1; previewAnchor=null; statusMessage=action==='blast'?'Special ready: drag the bomb over a 4 × 4 area, or tap its centre.':'Special ready: drag the plough over the two rows to clear, or tap either row.'; render(); } }
    if (action === 'fullscreen') toggleFullscreen();
    return;
  }
  const piece = target.closest('[data-block-piece]');
  if (piece) { choosePiece(Number(piece.dataset.blockPiece)); return; }
  const cell = target.closest('[data-block-cell]');
  if (cell) {
    const coords = cellCoordinates(cell);
    if (coords && specialMode === 'blast') clearSpecialBlast(coords.row, coords.col);
    else if (coords && specialMode === 'rows') clearSpecialRows(coords.row);
    else if (coords) placeSelected(coords.row, coords.col);
    return;
  }
  const mode = target.closest('[data-block-mode]')?.getAttribute('data-block-mode');
  if (mode) changeMode(mode);
  const tab = target.closest('[data-block-tab]')?.getAttribute('data-block-tab');
  if (tab) setTab(tab, 'push');
}

function handlePointerDown(event) {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  const rawTarget=event.target instanceof Element ? event.target : null;
  const newGame=rawTarget?.closest('[data-block-action="new"]');
  if(newGame){
    event.preventDefault();
    event.stopPropagation();
    if(typeof event.stopImmediatePropagation==='function') event.stopImmediatePropagation();
    newGamePointerAt=performance.now();
    startNewGame();
    return;
  }
  const specialButton=rawTarget?.closest('[data-block-action="blast"],[data-block-action="rows"]');
  if(specialButton && document.getElementById('blockGridPanel')?.classList.contains('is-active') && (run()?.skillCharge||0)>=100){
    const type=specialButton.getAttribute('data-block-action');
    event.preventDefault();
    specialMode=type;
    selectedPiece=-1;
    previewAnchor=null;
    const ghost=createSpecialDragGhost(type);
    specialDragState={pointerId:event.pointerId,type,ghost};
    specialButton.setPointerCapture?.(event.pointerId);
    positionSpecialDragGhost(ghost,event.clientX,event.clientY);
    paintSpecialPreview(type,boardCellFromPointer(event.clientX,event.clientY));
    return;
  }
  const piece = rawTarget ? rawTarget.closest('[data-block-piece]') : null;
  if (!piece || !document.getElementById('blockGridPanel')?.classList.contains('is-active')) return;
  const index = Number(piece.dataset.blockPiece);
  if (!run()?.tray[index]) return;
  selectedPiece = index;
  const pieceId=run()?.tray[index];
  const shape=pieceId ? shapeById(pieceId) : null;
  const bounds=shape ? boundsForShape(shape) : {rows:1,cols:1};
  const shapeNode=piece.querySelector('.block-grid-piece-shape');
  const allCells=shapeNode ? [...shapeNode.querySelectorAll('.block-grid-piece-cell')] : [];
  let grabRow=0,grabCol=0,grabOffsetX=.5,grabOffsetY=.5,nearestDistance=Infinity;
  allCells.forEach((cell,cellIndex)=>{
    if(!cell.classList.contains('is-filled')) return;
    const rect=cell.getBoundingClientRect();
    const dx=event.clientX-(rect.left+rect.width/2);
    const dy=event.clientY-(rect.top+rect.height/2);
    const distance=(dx*dx)+(dy*dy);
    if(distance<nearestDistance){
      nearestDistance=distance;
      grabRow=Math.floor(cellIndex/Math.max(1,bounds.cols));
      grabCol=cellIndex%Math.max(1,bounds.cols);
      grabOffsetX=Math.max(0,Math.min(1,(event.clientX-rect.left)/Math.max(1,rect.width)));
      grabOffsetY=Math.max(0,Math.min(1,(event.clientY-rect.top)/Math.max(1,rect.height)));
    }
  });
  const sourceCellNode=allCells.find((cell,cellIndex)=>Math.floor(cellIndex/Math.max(1,bounds.cols))===grabRow && cellIndex%Math.max(1,bounds.cols)===grabCol) || allCells.find(cell=>cell.classList.contains('is-filled'));
  const sourceRect=sourceCellNode?.getBoundingClientRect();
  const sourceShapeStyle=shapeNode?window.getComputedStyle(shapeNode):null;
  const sourceCellSize=Math.max(1,sourceRect?.width||18);
  const sourceGap=Math.max(0,parseFloat(sourceShapeStyle?.columnGap||sourceShapeStyle?.gap||'3')||0);
  const ghost=createDragGhost(pieceId);
  dragState = { pointerId:event.pointerId, index, startX:event.clientX, startY:event.clientY, grabRow, grabCol, grabOffsetX, grabOffsetY, sourceCellSize, sourceGap, moved:false, ghost };
  document.documentElement.classList.add('is-dragging-block-grid-piece');
  positionDragGhost(ghost,event.clientX,event.clientY,null,dragState);
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
  if(specialDragState && specialDragState.pointerId===event.pointerId){
    event.preventDefault();
    positionSpecialDragGhost(specialDragState.ghost,event.clientX,event.clientY);
    paintSpecialPreview(specialDragState.type,boardCellFromPointer(event.clientX,event.clientY));
    return;
  }
  if (!dragState || dragState.pointerId !== event.pointerId) return;
  if (Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY) > 7) dragState.moved = true;
  if (!dragState.moved) return;
  event.preventDefault();
  const anchor = boardAnchorFromPointer(event.clientX, event.clientY, dragState);
  positionDragGhost(dragState.ghost, event.clientX, event.clientY, anchor, dragState);
  if ((!anchor && previewAnchor) || (anchor && (!previewAnchor || previewAnchor.row !== anchor.row || previewAnchor.col !== anchor.col))) {
    previewAnchor = anchor;
    paintPreview();
  }
}

function handlePointerUp(event) {
  if(specialDragState && specialDragState.pointerId===event.pointerId){
    event.preventDefault();
    const type=specialDragState.type;
    const coords=boardCellFromPointer(event.clientX,event.clientY);
    destroySpecialDrag();
    suppressClick=true;
    if(coords){
      if(type==='blast') clearSpecialBlast(coords.row,coords.col);
      else clearSpecialRows(coords.row);
    }else{
      statusMessage=type==='blast'?'Drop the bomb over the board to clear a 4 × 4 area.':'Drop the plough over the board to clear two rows.';
      renderGame();
    }
    return;
  }
  if (!dragState || dragState.pointerId !== event.pointerId) return;
  const moved = dragState.moved;
  const anchor = moved ? boardAnchorFromPointer(event.clientX, event.clientY, dragState) : null;
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
  const key=String(event.key||'').toLowerCase();
  if(event.altKey && !event.ctrlKey && !event.metaKey && !event.isComposing){
    if(key==='n'){ event.preventDefault(); startNewGame(); return; }
    if(key==='f'){ event.preventDefault(); toggleFullscreen(); return; }
  }
  if (event.key === 'Escape' && document.fullscreenElement === document.getElementById('blockGridGameCard')) return;
  if (event.key === 'Escape') shell.close();
}

function panelHtml() {
  return `<section class="card game-panel block-grid-panel" id="blockGridPanel" aria-labelledby="blockGridTitle" hidden aria-hidden="true">
    <div class="game-shell">
      <div class="game-header">
        <div><h2 id="blockGridTitle" tabindex="-1">Block Grid</h2><p class="note">Place the supplied shapes, clear complete rows or columns, and protect enough open space for the next tray.</p></div>
        <div class="link-actions game-shell-actions" data-nonrealm-game-toolbar="block-grid">
          <button class="action secondary game-shell-action game-shell-action--icon" data-bl-info-button data-bl-info-title="What this develops" data-bl-info-text="Spatial planning, visual organisation, prospective reasoning and flexible space management." type="button" aria-label="What Block Grid develops"><span class="game-shell-action__icon" aria-hidden="true">i</span></button>
          <button class="action secondary game-shell-action" data-bl-info-button data-bl-info-title="How To Play" data-bl-info-text="Choose one of the three supplied pieces and place it on the 8 × 8 board. Complete an entire row or column to clear it. The run ends when none of the available pieces can fit. Dragging and tap-then-place are both supported." type="button"><span class="game-shell-action__icon" aria-hidden="true">?</span><span class="game-shell-action__label">How to Play</span></button>
          <button class="action secondary game-shell-action" data-close-game-extension="block-grid" type="button"><span class="game-shell-action__icon" aria-hidden="true">←</span><span class="game-shell-action__label">Games</span></button>
        </div>
      </div>
      <details class="game-info-details" data-game-info="blockgrid"><summary><span>Game Info</span><span class="inline-note">Player Rank / XP / stats</span></summary>
        <div id="blockGridGameInfo"></div>
      </details>
      <div class="game-toggle-row">
        <button class="action ghost game-toggle-btn is-active" data-block-tab="game" type="button">Game</button>
        <button class="action ghost game-toggle-btn" data-block-tab="modes" type="button">Tiers</button>
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

const shell = createGameExtensionShell({
  id:'block-grid',
  panelId:'blockGridPanel',
  name:'Block Grid',
  order:10,
  art:'/systems/baseline-recreation/games/block-grid/art/block-grid-overview.svg?v=RECREATION_BURGUNDY_BURNT_COPPER_20261022_2',
  styleUrl:'/systems/baseline-recreation/games/block-grid/css/block-grid.css?v=RECREATION_COHERENCE_20261024_1',
  note:'Place geometric pieces on an 8 × 8 board, clear complete lines, and manage the space left for each new tray.',
  benefit:'Spatial planning, visual organisation, prospective reasoning and flexible space management.',
  progressText:() => profile ? `${currentMode().name} Tier · Best ${profile.bestScore}` : 'Ready',
  panelHtml,
  onOpen:() => { globalThis.BaselineGamesMusic?.selectGame?.('block-grid'); render(); setTab(blockTabFromLocation(), 'none'); },
  onClose:() => { globalThis.BaselineGamesMusic?.selectGame?.(''); destroyDragGhost(); destroySpecialDrag(); previewAnchor = null; dragState = null; }
});

function init() {
  profile = loadStoredProfile(APP, DEFAULT_PROFILE, normaliseProfile);
  storageAuth = Boolean(globalThis.BaselineGameStorage?.isAuthenticated?.());
  shell.init();
  document.addEventListener('click', handleClick);
  document.addEventListener('pointerdown', handlePointerDown);
  document.addEventListener('pointermove', handlePointerMove);
  document.addEventListener('pointerup', handlePointerUp);
  document.addEventListener('dragstart', event => { if(event.target instanceof Element && event.target.closest('#blockGridPanel')) event.preventDefault(); });
  document.addEventListener('pointercancel', () => { destroyDragGhost(); dragState = null; destroySpecialDrag(); previewAnchor = null; paintPreview(); });
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

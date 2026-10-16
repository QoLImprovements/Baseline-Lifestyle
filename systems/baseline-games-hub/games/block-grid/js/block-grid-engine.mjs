export const BOARD_SIZE = 8;

function shape(id, cells, tier = 'classic') {
  return Object.freeze({ id, cells:Object.freeze(cells.map(([row, col]) => Object.freeze([row, col]))), tier });
}

export const SHAPES = Object.freeze([
  shape('domino-h', [[0,0],[0,1]], 'relaxed'),
  shape('domino-v', [[0,0],[1,0]], 'relaxed'),
  shape('line3-h', [[0,0],[0,1],[0,2]], 'relaxed'),
  shape('line3-v', [[0,0],[1,0],[2,0]], 'relaxed'),
  shape('corner3-a', [[0,0],[1,0],[1,1]], 'relaxed'),
  shape('corner3-b', [[0,0],[0,1],[1,0]], 'relaxed'),
  shape('corner3-c', [[0,0],[0,1],[1,1]], 'relaxed'),
  shape('corner3-d', [[0,1],[1,0],[1,1]], 'relaxed'),
  shape('square2', [[0,0],[0,1],[1,0],[1,1]], 'relaxed'),
  shape('line4-h', [[0,0],[0,1],[0,2],[0,3]]),
  shape('line4-v', [[0,0],[1,0],[2,0],[3,0]]),
  shape('tee4-up', [[0,0],[0,1],[0,2],[1,1]]),
  shape('tee4-down', [[0,1],[1,0],[1,1],[1,2]]),
  shape('ell4-a', [[0,0],[1,0],[2,0],[2,1]]),
  shape('ell4-b', [[0,0],[0,1],[0,2],[1,0]]),
  shape('ell4-c', [[0,0],[0,1],[1,1],[2,1]]),
  shape('ell4-d', [[0,2],[1,0],[1,1],[1,2]]),
  shape('zig4-h', [[0,1],[0,2],[1,0],[1,1]]),
  shape('zag4-h', [[0,0],[0,1],[1,1],[1,2]]),
  shape('line5-h', [[0,0],[0,1],[0,2],[0,3],[0,4]], 'challenge'),
  shape('line5-v', [[0,0],[1,0],[2,0],[3,0],[4,0]], 'challenge'),
  shape('plus5', [[0,1],[1,0],[1,1],[1,2],[2,1]], 'challenge'),
  shape('tee5', [[0,0],[0,1],[0,2],[1,1],[2,1]], 'challenge'),
  shape('ell5', [[0,0],[1,0],[2,0],[3,0],[3,1]], 'challenge'),
  shape('square3', [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]], 'challenge')
]);

const SHAPE_MAP = new Map(SHAPES.map(item => [item.id, item]));

export const MODES = Object.freeze({
  relaxed:Object.freeze({ id:'relaxed', name:'Relaxed', description:'Smaller pieces and a gentler shape pool.' }),
  classic:Object.freeze({ id:'classic', name:'Classic', description:'Balanced shapes with the full everyday piece set.' }),
  challenge:Object.freeze({ id:'challenge', name:'Challenge', description:'Adds long, dense and awkward shapes that demand more planning.' })
});

export function shapeById(id) {
  return SHAPE_MAP.get(String(id || '')) || null;
}

export function shapePool(mode = 'classic') {
  const key = MODES[mode] ? mode : 'classic';
  if (key === 'relaxed') return SHAPES.filter(item => item.tier === 'relaxed');
  if (key === 'classic') return SHAPES.filter(item => item.tier !== 'challenge');
  return [...SHAPES];
}

export function emptyBoard(size = BOARD_SIZE) {
  const length = Math.max(4, Math.floor(Number(size) || BOARD_SIZE));
  return Array.from({ length }, () => Array(length).fill(0));
}

export function cloneBoard(board) {
  return board.map(row => row.slice());
}

export function validBoard(board, size = BOARD_SIZE) {
  return Array.isArray(board) && board.length === size && board.every(row =>
    Array.isArray(row) && row.length === size && row.every(cell => cell === 0 || cell === 1)
  );
}

export function boundsForShape(piece) {
  const shapeValue = typeof piece === 'string' ? shapeById(piece) : piece;
  if (!shapeValue) return { rows:0, cols:0 };
  return shapeValue.cells.reduce((bounds, [row, col]) => ({
    rows:Math.max(bounds.rows, row + 1),
    cols:Math.max(bounds.cols, col + 1)
  }), { rows:0, cols:0 });
}

export function canPlace(board, piece, row, col) {
  const shapeValue = typeof piece === 'string' ? shapeById(piece) : piece;
  if (!shapeValue || !Array.isArray(board)) return false;
  const baseRow = Math.floor(Number(row));
  const baseCol = Math.floor(Number(col));
  if (!Number.isInteger(baseRow) || !Number.isInteger(baseCol)) return false;
  return shapeValue.cells.every(([dr, dc]) => {
    const targetRow = baseRow + dr;
    const targetCol = baseCol + dc;
    return targetRow >= 0 && targetCol >= 0 && targetRow < board.length && targetCol < board.length && board[targetRow][targetCol] === 0;
  });
}

export function placeShape(board, piece, row, col) {
  const shapeValue = typeof piece === 'string' ? shapeById(piece) : piece;
  if (!canPlace(board, shapeValue, row, col)) return null;
  const next = cloneBoard(board);
  const placed = [];
  shapeValue.cells.forEach(([dr, dc]) => {
    const targetRow = row + dr;
    const targetCol = col + dc;
    next[targetRow][targetCol] = 1;
    placed.push([targetRow, targetCol]);
  });
  return { board:next, placed };
}

export function completedLines(board) {
  const rows = [];
  const cols = [];
  for (let row = 0; row < board.length; row += 1) {
    if (board[row].every(Boolean)) rows.push(row);
  }
  for (let col = 0; col < board.length; col += 1) {
    let full = true;
    for (let row = 0; row < board.length; row += 1) {
      if (!board[row][col]) { full = false; break; }
    }
    if (full) cols.push(col);
  }
  return { rows, cols };
}

export function clearCompletedLines(board, lines = completedLines(board)) {
  const next = cloneBoard(board);
  lines.rows.forEach(row => {
    for (let col = 0; col < next.length; col += 1) next[row][col] = 0;
  });
  lines.cols.forEach(col => {
    for (let row = 0; row < next.length; row += 1) next[row][col] = 0;
  });
  return next;
}

export function resolvePlacement(board, piece, row, col, combo = 0) {
  const shapeValue = typeof piece === 'string' ? shapeById(piece) : piece;
  const placement = placeShape(board, shapeValue, row, col);
  if (!placement) return null;
  const lines = completedLines(placement.board);
  const lineCount = lines.rows.length + lines.cols.length;
  const nextCombo = lineCount > 0 ? Math.max(1, Math.floor(Number(combo) || 0) + 1) : 0;
  const placementPoints = shapeValue.cells.length * 2;
  const clearPoints = lineCount * 25;
  const comboPoints = lineCount > 0 ? (nextCombo - 1) * 10 * lineCount : 0;
  return {
    board:clearCompletedLines(placement.board, lines),
    placed:placement.placed,
    rowsCleared:lines.rows,
    colsCleared:lines.cols,
    linesCleared:lineCount,
    combo:nextCombo,
    scoreDelta:placementPoints + clearPoints + comboPoints
  };
}

export function legalPlacements(board, piece) {
  const shapeValue = typeof piece === 'string' ? shapeById(piece) : piece;
  if (!shapeValue) return [];
  const bounds = boundsForShape(shapeValue);
  const placements = [];
  for (let row = 0; row <= board.length - bounds.rows; row += 1) {
    for (let col = 0; col <= board.length - bounds.cols; col += 1) {
      if (canPlace(board, shapeValue, row, col)) placements.push([row, col]);
    }
  }
  return placements;
}

export function hasAnyPlacement(board, pieces) {
  return pieces.some(piece => legalPlacements(board, piece).length > 0);
}

function randomPick(items, random) {
  if (!items.length) return null;
  const index = Math.min(items.length - 1, Math.floor(Math.max(0, Math.min(0.999999, random())) * items.length));
  return items[index];
}

export function createTray(board, mode = 'classic', random = Math.random) {
  const pool = shapePool(mode);
  const tray = Array.from({ length:3 }, () => randomPick(pool, random)?.id).filter(Boolean);
  if (hasAnyPlacement(board, tray)) return tray;
  const fitting = pool.filter(piece => legalPlacements(board, piece).length > 0);
  if (fitting.length) tray[0] = randomPick(fitting, random).id;
  return tray;
}

export function runLevel(linesCleared) {
  return 1 + Math.floor(Math.max(0, Number(linesCleared) || 0) / 10);
}

export function runLevelProgress(linesCleared) {
  const value = Math.max(0, Math.floor(Number(linesCleared) || 0));
  return { current:value % 10, target:10, level:runLevel(value) };
}

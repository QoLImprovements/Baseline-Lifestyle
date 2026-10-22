export const BOTTLE_CAPACITY = 4;

export const COLOURS = Object.freeze([
  Object.freeze({ id:0, name:'Amber', symbol:'◆' }),
  Object.freeze({ id:1, name:'Teal', symbol:'●' }),
  Object.freeze({ id:2, name:'Coral', symbol:'▲' }),
  Object.freeze({ id:3, name:'Violet', symbol:'■' }),
  Object.freeze({ id:4, name:'Blue', symbol:'✦' }),
  Object.freeze({ id:5, name:'Green', symbol:'⬟' }),
  Object.freeze({ id:6, name:'Rose', symbol:'✚' }),
  Object.freeze({ id:7, name:'Gold', symbol:'⬢' })
]);

function level(id, bottles) {
  return Object.freeze({ id, bottles:Object.freeze(bottles.map(bottle => Object.freeze([...bottle]))) });
}

// Bottle arrays are stored bottom-to-top; the final entry is the exposed colour.
export const LEVELS = Object.freeze([
  level(1, [[1,2,1,0],[0,2,0,1],[2,0,2,1],[],[]]),
  level(2, [[2,0,0,2],[2,0,1,2],[1,1,0,1],[],[]]),
  level(3, [[0,0,1,2],[2,1,2,2],[1,1,0,0],[],[]]),
  level(4, [[0,1,2,0],[1,0,2,2],[0,2,1,1],[],[]]),
  level(5, [[2,0,1,1],[0,0,0,2],[2,1,2,1],[],[]]),
  level(6, [[1,2,0,1],[2,1,2,2],[0,1,0,0],[],[]]),
  level(7, [[0,0,2,3],[2,2,0,1],[1,0,3,2],[3,3,1,1],[],[]]),
  level(8, [[3,2,3,3],[0,1,0,3],[2,2,1,1],[1,0,0,2],[],[]]),
  level(9, [[1,3,2,0],[3,3,2,2],[3,1,0,2],[0,0,1,1],[],[]]),
  level(10, [[0,0,0,1],[1,2,3,3],[1,3,2,2],[0,3,1,2],[],[]]),
  level(11, [[2,3,1,2],[1,3,0,1],[0,0,3,1],[0,2,3,2],[],[]]),
  level(12, [[3,2,3,3],[0,1,1,0],[0,1,2,1],[3,0,2,2],[],[]]),
  level(13, [[1,2,1,2],[1,3,3,0],[0,0,0,3],[2,1,3,2],[],[]]),
  level(14, [[2,2,3,2],[0,0,1,0],[0,2,1,3],[1,1,3,3],[],[]]),
  level(15, [[3,1,0,0],[0,1,2,1],[0,2,3,2],[3,2,3,1],[],[]]),
  level(16, [[2,2,1,1],[0,0,3,3],[0,3,0,1],[2,3,1,2],[],[]]),
  level(17, [[2,1,0,4],[3,1,0,4],[1,2,2,4],[0,3,1,4],[0,3,2,3],[],[]]),
  level(18, [[2,2,2,1],[1,4,3,0],[3,4,0,3],[0,1,4,2],[0,4,1,3],[],[]]),
  level(19, [[4,0,3,1],[1,3,2,4],[0,3,0,3],[1,2,1,4],[0,2,2,4],[],[]]),
  level(20, [[3,3,1,3],[0,0,2,4],[0,4,0,2],[2,1,3,1],[4,2,1,4],[],[]]),
  level(21, [[3,2,0,3],[0,0,2,3],[1,4,3,2],[4,1,0,1],[1,4,2,4],[],[]]),
  level(22, [[1,0,1,0],[3,2,4,3],[1,3,3,2],[4,2,0,4],[0,4,1,2],[],[]]),
  level(23, [[1,1,3,3],[2,4,2,0],[0,3,1,2],[0,4,4,1],[3,2,0,4],[],[]]),
  level(24, [[0,1,2,3],[1,0,4,3],[3,2,0,3],[1,1,2,2],[0,4,4,4],[],[]]),
  level(25, [[2,1,1,1],[4,3,0,0],[0,1,2,3],[2,4,3,4],[4,0,3,2],[],[]]),
  level(26, [[0,4,4,0],[2,1,3,1],[2,4,3,3],[2,0,3,0],[4,1,1,2],[],[]]),
  level(27, [[4,3,3,0],[0,2,2,4],[2,1,2,3],[4,0,3,4],[1,0,1,1],[],[]]),
  level(28, [[0,0,4,1],[3,4,2,3],[1,1,2,4],[0,0,3,2],[2,4,1,3],[],[]]),
  level(29, [[4,3,2,2],[5,0,1,4],[2,2,5,5],[4,3,5,0],[1,3,1,4],[0,3,0,1],[],[]]),
  level(30, [[5,4,3,4],[5,2,1,5],[2,4,0,2],[0,1,1,3],[5,3,0,4],[3,2,0,1],[],[]]),
  level(31, [[5,3,4,5],[1,5,2,1],[2,5,0,2],[0,2,1,4],[0,3,3,0],[1,4,3,4],[],[]]),
  level(32, [[4,4,0,5],[3,1,1,4],[5,5,5,2],[2,3,2,1],[0,1,3,2],[0,3,0,4],[],[]]),
  level(33, [[3,0,1,4],[0,5,0,2],[2,3,4,5],[3,2,1,4],[0,1,4,5],[2,5,1,3],[],[]]),
  level(34, [[2,4,0,1],[2,3,5,1],[2,3,4,0],[2,5,3,0],[4,5,0,1],[1,4,3,5],[],[]]),
  level(35, [[3,4,3,0],[4,5,5,2],[1,2,0,2],[2,3,1,3],[5,1,4,5],[0,4,0,1],[],[]]),
  level(36, [[4,0,0,2],[1,5,4,5],[3,5,5,2],[0,4,2,1],[4,3,1,2],[3,1,3,0],[],[]]),
  level(37, [[0,1,2,4],[3,2,3,0],[0,4,1,3],[1,0,5,2],[2,5,5,4],[3,1,5,4],[],[]]),
  level(38, [[3,2,0,5],[0,4,2,2],[0,2,3,1],[4,3,5,4],[1,1,3,4],[5,1,0,5],[],[]]),
  level(39, [[3,2,3,0],[1,3,4,5],[1,4,1,0],[2,1,0,2],[5,3,2,4],[5,5,4,0],[],[]]),
  level(40, [[4,3,1,1],[2,2,2,5],[1,3,3,0],[0,4,4,4],[5,2,5,0],[0,1,3,5],[],[]]),
  level(41, [[5,0,2,6],[4,3,4,6],[5,4,5,2],[3,6,4,0],[2,3,2,5],[0,1,1,0],[6,1,3,1],[],[]]),
  level(42, [[4,3,6,2],[0,3,5,5],[5,4,2,3],[0,1,5,1],[0,4,6,6],[2,1,6,4],[1,2,0,3],[],[]]),
  level(43, [[1,0,2,3],[3,3,6,5],[6,5,4,2],[5,5,1,4],[3,6,2,4],[1,4,0,6],[0,2,1,0],[],[]]),
  level(44, [[5,6,3,3],[4,4,4,5],[6,0,3,5],[0,0,0,2],[1,3,6,2],[1,6,5,1],[1,2,2,4],[],[]]),
  level(45, [[4,2,5,2],[1,0,3,5],[6,1,1,6],[6,0,3,1],[3,5,4,0],[0,2,4,4],[5,2,6,3],[],[]]),
  level(46, [[3,0,6,1],[0,3,6,2],[1,0,4,0],[4,1,3,4],[6,5,2,1],[6,5,4,5],[5,2,2,3],[],[]]),
  level(47, [[3,1,5,1],[4,2,4,0],[4,0,6,4],[5,5,3,3],[6,1,1,2],[0,6,5,0],[6,2,2,3],[],[]]),
  level(48, [[2,4,2,1],[3,0,1,2],[2,6,3,0],[3,1,6,5],[0,4,5,4],[5,4,0,1],[3,5,6,6],[],[]]),
  level(49, [[1,4,5,3],[6,0,0,5],[6,0,1,3],[3,2,2,4],[5,0,6,3],[6,2,2,1],[4,5,1,4],[],[]]),
  level(50, [[4,6,0,1],[3,3,1,2],[0,2,4,1],[4,6,2,6],[0,3,5,0],[1,4,5,6],[5,3,5,2],[],[]]),
  level(51, [[7,4,5,4],[3,1,2,3],[0,4,7,4],[0,7,0,2],[1,3,5,7],[5,6,1,1],[3,0,6,6],[6,5,2,2],[],[]]),
  level(52, [[1,1,7,2],[3,6,4,5],[1,1,0,0],[6,6,2,3],[5,4,4,7],[7,3,2,7],[6,5,3,4],[0,0,2,5],[],[]]),
  level(53, [[5,6,1,3],[3,6,4,6],[7,2,7,3],[0,1,4,6],[5,3,5,1],[4,7,1,4],[0,7,0,2],[2,2,5,0],[],[]]),
  level(54, [[0,2,6,4],[6,0,6,0],[5,4,3,0],[1,3,7,2],[7,2,1,2],[3,5,3,6],[1,7,4,5],[1,7,5,4],[],[]]),
  level(55, [[7,4,3,0],[1,4,2,6],[2,1,6,7],[0,1,6,3],[5,1,0,4],[7,5,5,2],[4,0,7,5],[3,6,3,2],[],[]]),
  level(56, [[0,6,6,1],[3,0,2,2],[2,3,7,5],[5,1,6,7],[4,6,0,2],[4,4,7,1],[1,5,0,5],[4,3,7,3],[],[]]),
  level(57, [[6,6,1,0],[3,4,7,6],[2,5,0,7],[1,5,3,1],[3,0,1,3],[2,4,4,7],[7,5,5,0],[2,6,2,4],[],[]]),
  level(58, [[2,7,5,0],[2,1,7,4],[2,0,4,2],[3,6,6,3],[5,3,0,5],[0,6,7,6],[4,7,4,3],[1,5,1,1],[],[]]),
  level(59, [[5,3,1,7],[4,3,6,3],[6,2,2,5],[5,4,6,7],[1,7,0,4],[6,1,7,1],[0,0,0,5],[2,3,4,2],[],[]]),
  level(60, [[3,1,6,7],[6,1,4,5],[5,0,0,1],[0,2,2,5],[0,2,7,2],[3,4,3,7],[4,1,6,7],[5,6,4,3],[],[]])
]);

export function cloneBottles(bottles) {
  return bottles.map(bottle => bottle.slice());
}

export function levelById(id) {
  const number = Math.max(1, Math.min(LEVELS.length, Math.floor(Number(id) || 1)));
  return LEVELS[number - 1];
}

export function levelColours(levelValue) {
  const values = new Set(levelValue.bottles.flat());
  return [...values].sort((a, b) => a - b);
}

export function initialBottles(levelId) {
  return cloneBottles(levelById(levelId).bottles);
}

export function topColour(bottle) {
  return bottle.length ? bottle[bottle.length - 1] : null;
}

export function topRunLength(bottle) {
  if (!bottle.length) return 0;
  const colour = topColour(bottle);
  let length = 0;
  for (let index = bottle.length - 1; index >= 0 && bottle[index] === colour; index -= 1) length += 1;
  return length;
}

export function isBottleComplete(bottle, capacity = BOTTLE_CAPACITY) {
  return bottle.length === capacity && bottle.every(colour => colour === bottle[0]);
}

export function isSolved(bottles, capacity = BOTTLE_CAPACITY) {
  return bottles.every(bottle => bottle.length === 0 || isBottleComplete(bottle, capacity));
}

export function pourAmount(bottles, from, to, capacity = BOTTLE_CAPACITY) {
  const source = bottles[from];
  const target = bottles[to];
  if (!source || !target || from === to || source.length === 0 || target.length >= capacity) return 0;
  const colour = topColour(source);
  if (target.length && topColour(target) !== colour) return 0;
  return Math.min(topRunLength(source), capacity - target.length);
}

export function canPour(bottles, from, to, capacity = BOTTLE_CAPACITY) {
  return pourAmount(bottles, from, to, capacity) > 0;
}

export function applyPour(bottles, from, to, capacity = BOTTLE_CAPACITY) {
  const amount = pourAmount(bottles, from, to, capacity);
  if (!amount) return null;
  const next = cloneBottles(bottles);
  const colour = topColour(next[from]);
  const moved = next[from].splice(next[from].length - amount, amount);
  next[to].push(...moved);
  return { bottles:next, amount, colour, from, to };
}

export function legalMoves(bottles, capacity = BOTTLE_CAPACITY) {
  const moves = [];
  for (let from = 0; from < bottles.length; from += 1) {
    const source = bottles[from];
    if (!source.length) continue;
    let usedEmpty = false;
    for (let to = 0; to < bottles.length; to += 1) {
      if (from === to) continue;
      const target = bottles[to];
      const amount = pourAmount(bottles, from, to, capacity);
      if (!amount) continue;
      if (!target.length) {
        if (usedEmpty) continue;
        usedEmpty = true;
        if (isBottleComplete(source, capacity)) continue;
      }
      moves.push({ from, to, amount, colour:topColour(source) });
    }
  }
  return moves;
}

function stateKey(bottles) {
  return bottles.map(bottle => bottle.join('')).join('|');
}

function moveScore(bottles, move, capacity) {
  const next = applyPour(bottles, move.from, move.to, capacity)?.bottles;
  if (!next) return -Infinity;
  let score = 0;
  if (isBottleComplete(next[move.to], capacity)) score += 50;
  if (bottles[move.to].length) score += 12;
  else score -= 3;
  if (next[move.from].length === 0) score += 4;
  return score;
}

export function findSolution(bottles, { capacity = BOTTLE_CAPACITY, maxNodes = 120000 } = {}) {
  const start = cloneBottles(bottles);
  const visited = new Set();
  const path = [];
  let nodes = 0;

  function search(state) {
    nodes += 1;
    if (nodes > maxNodes) return null;
    if (isSolved(state, capacity)) return path.slice();
    const key = stateKey(state);
    if (visited.has(key)) return null;
    visited.add(key);

    const moves = legalMoves(state, capacity)
      .sort((a, b) => moveScore(state, b, capacity) - moveScore(state, a, capacity));
    for (const move of moves) {
      const result = applyPour(state, move.from, move.to, capacity);
      if (!result) continue;
      path.push(move);
      const solution = search(result.bottles);
      if (solution) return solution;
      path.pop();
    }
    return null;
  }

  const solution = search(start);
  return { solution, nodes, exhausted:nodes > maxNodes };
}

export function hintMove(bottles, options = {}) {
  const solved = findSolution(bottles, options);
  return solved.solution?.[0] || null;
}

export function validateLevel(levelValue, capacity = BOTTLE_CAPACITY) {
  const colours = levelColours(levelValue);
  const counts = new Map(colours.map(colour => [colour, 0]));
  for (const bottle of levelValue.bottles) {
    if (bottle.length > capacity) return false;
    for (const colour of bottle) {
      if (!COLOURS[colour]) return false;
      counts.set(colour, (counts.get(colour) || 0) + 1);
    }
  }
  return colours.length > 0 && colours.every(colour => counts.get(colour) === capacity);
}

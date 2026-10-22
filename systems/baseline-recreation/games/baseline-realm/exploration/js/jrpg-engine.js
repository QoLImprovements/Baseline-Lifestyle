import {
  ABILITIES,
  ENCOUNTER_TABLES,
  ENEMIES,
  EQUIPMENT,
  ITEMS,
  INITIAL_PARTY_IDS,
  MATERIALS,
  PARTY_BLUEPRINTS,
  SAVE_VERSION,
  STAGES,
  TILE_LEGEND,
  ZONE_ID
} from '../data/meridian-grove.js';

const deepClone = (value) => JSON.parse(JSON.stringify(value));
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export function hashSeed(input) {
  let hash = 2166136261;
  const text = String(input ?? 'meridian');
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function mulberry32(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6D2B79F5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeRouteSeed() {
  const cryptoValue = globalThis.crypto?.getRandomValues ? globalThis.crypto.getRandomValues(new Uint32Array(1))[0] : Date.now();
  return hashSeed(`${cryptoValue}:${Date.now()}:${Math.random()}`);
}

function makePartyMember(blueprint) {
  return {
    ...deepClone(blueprint),
    hp: blueprint.maxHp,
    mp: blueprint.maxMp,
    atb: 0,
    defending: false,
    statuses: []
  };
}

export function createInitialState(seed = makeRouteSeed()) {
  const state = {
    version: SAVE_VERSION,
    zoneId: ZONE_ID,
    routeSeed: seed >>> 0,
    stageIndex: 0,
    map: null,
    player: { x: 1, y: 5, facing: 'right', steps: 0 },
    encounterMeter: 0,
    encounterThreshold: 100,
    party: PARTY_BLUEPRINTS.filter((blueprint) => INITIAL_PARTY_IDS.includes(blueprint.id)).map(makePartyMember),
    inventory: {
      coins: 45,
      items: { 'field-tonic': 3, 'lantern-draught': 2, 'bitterleaf-wrap': 2, 'trail-ration': 1 },
      materials: {},
      equipment: { 'waystone-token': 1 },
      keyItems: {}
    },
    settings: { battleMode: 'wait', music: true, reducedMotion: false },
    flags: {
      introSeen: false,
      midpointSeen: false,
      finaleSeen: false,
      eliteDefeated: false,
      bossDefeated: false,
      endingSeen: false
    },
    routeLog: ['The Lantern Company reaches the Meridian Gate.'],
    battle: null,
    lastSaveAt: Date.now(),
    totalBattles: 0,
    totalSteps: 0,
    zoneComplete: false
  };
  state.map = generateStageMap(state.stageIndex, state.routeSeed);
  state.player = { ...state.map.start, facing: 'right', steps: 0 };
  return state;
}

export function normaliseState(raw) {
  if (!raw || raw.version !== SAVE_VERSION || raw.zoneId !== ZONE_ID) return createInitialState();
  const fallback = createInitialState(Number(raw.routeSeed) || makeRouteSeed());
  const state = { ...fallback, ...deepClone(raw) };
  state.settings = { ...fallback.settings, ...(raw.settings || {}) };
  state.flags = { ...fallback.flags, ...(raw.flags || {}) };
  state.inventory = {
    coins: Math.max(0, Number(raw.inventory?.coins || 0)),
    items: { ...fallback.inventory.items, ...(raw.inventory?.items || {}) },
    materials: { ...(raw.inventory?.materials || {}) },
    equipment: { ...fallback.inventory.equipment, ...(raw.inventory?.equipment || {}) },
    keyItems: { ...(raw.inventory?.keyItems || {}) }
  };
  const savedParty = Array.isArray(raw.party) ? raw.party : [];
  state.party = INITIAL_PARTY_IDS.map((id) => PARTY_BLUEPRINTS.find((blueprint) => blueprint.id === id)).filter(Boolean).map((blueprint) => {
    const saved = savedParty.find((entry) => entry?.id === blueprint.id) || {};
    const member = { ...makePartyMember(blueprint), ...saved };
    member.equipment = { ...blueprint.equipment, ...(saved.equipment || {}) };
    member.abilities = Array.from(new Set([...(blueprint.abilities || []), ...(saved.abilities || [])]));
    member.statuses = Array.isArray(saved.statuses) ? saved.statuses : [];
    member.maxHp = Math.max(1, Number(member.maxHp || blueprint.maxHp));
    member.maxMp = Math.max(0, Number(member.maxMp || blueprint.maxMp));
    member.hp = clamp(Number(member.hp ?? member.maxHp), 0, member.maxHp);
    member.mp = clamp(Number(member.mp ?? member.maxMp), 0, member.maxMp);
    member.level = Math.max(1, Number(member.level || 1));
    member.xp = Math.max(0, Number(member.xp || 0));
    member.atb = clamp(Number(member.atb || 0), 0, 100);
    return member;
  });
  state.stageIndex = clamp(Number(state.stageIndex || 0), 0, STAGES.length - 1);
  if (!state.map?.tiles || state.map.stageId !== STAGES[state.stageIndex].id) {
    state.map = generateStageMap(state.stageIndex, state.routeSeed, state.map?.claimed || {});
  }
  state.player = {
    x: clamp(Number(state.player?.x ?? state.map.start.x), 0, state.map.width - 1),
    y: clamp(Number(state.player?.y ?? state.map.start.y), 0, state.map.height - 1),
    facing: state.player?.facing || 'right',
    steps: Math.max(0, Number(state.player?.steps || 0))
  };
  state.encounterMeter = clamp(Number(state.encounterMeter || 0), 0, state.encounterThreshold || 100);
  state.routeLog = Array.isArray(state.routeLog) ? state.routeLog.slice(-30) : fallback.routeLog;
  state.battle = normaliseBattle(state.battle);
  return state;
}

function normaliseBattle(battle) {
  if (!battle || !Array.isArray(battle.enemies)) return null;
  return {
    id: String(battle.id || `battle-${Date.now()}`),
    kind: battle.kind || 'random',
    stageIndex: Number(battle.stageIndex || 0),
    enemies: battle.enemies.map((enemy) => ({
      ...enemy,
      hp: Math.max(0, Number(enemy.hp || 0)),
      maxHp: Math.max(1, Number(enemy.maxHp || 1)),
      atb: clamp(Number(enemy.atb || 0), 0, 100),
      statuses: Array.isArray(enemy.statuses) ? enemy.statuses : []
    })),
    readyQueue: Array.isArray(battle.readyQueue) ? battle.readyQueue : [],
    activeActorIndex: Number.isInteger(battle.activeActorIndex) ? battle.activeActorIndex : null,
    log: Array.isArray(battle.log) ? battle.log.slice(-14) : [],
    escaped: false,
    victory: false,
    rewards: battle.rewards || null,
    startedAt: Number(battle.startedAt || Date.now())
  };
}

function chooseMiddle(stage, random, exclude = -1) {
  if (stage.middles.length === 1) return 0;
  let index = Math.floor(random() * stage.middles.length);
  if (index === exclude) index = (index + 1) % stage.middles.length;
  return index;
}

export function generateStageMap(stageIndex, routeSeed, claimed = {}) {
  const stage = STAGES[stageIndex];
  const random = mulberry32(hashSeed(`${routeSeed}:${stage.id}`));
  const firstMiddle = chooseMiddle(stage, random);
  const secondMiddle = chooseMiddle(stage, random, firstMiddle);
  const chunks = [stage.start, stage.middles[firstMiddle], stage.middles[secondMiddle], stage.end];
  const height = chunks[0].length;
  const width = chunks.reduce((sum, item) => sum + item[0].length, 0);
  const tiles = Array.from({ length: height }, (_, y) => chunks.map((item) => item[y]).join('').split(''));
  const start = { x: 1, y: 5 };
  return {
    stageId: stage.id,
    width,
    height,
    tiles,
    start,
    chunkOrder: ['start', firstMiddle, secondMiddle, 'end'],
    claimed: { ...claimed },
    revealed: {}
  };
}

export function tileAt(state, x, y) {
  const symbol = state.map?.tiles?.[y]?.[x];
  return symbol ? { symbol, ...TILE_LEGEND[symbol] } : null;
}

export function poiKey(state, x = state.player.x, y = state.player.y) {
  return `${state.stageIndex}:${x}:${y}`;
}

export function canMove(state, dx, dy) {
  if (state.battle || state.zoneComplete) return false;
  const x = state.player.x + dx;
  const y = state.player.y + dy;
  const tile = tileAt(state, x, y);
  return Boolean(tile?.passable);
}

export function movePlayer(state, dx, dy, random = Math.random) {
  if (!canMove(state, dx, dy)) return { moved: false, reason: 'blocked' };
  state.player.x += dx;
  state.player.y += dy;
  state.player.steps += 1;
  state.totalSteps += 1;
  if (dx < 0) state.player.facing = 'left';
  if (dx > 0) state.player.facing = 'right';
  if (dy < 0) state.player.facing = 'up';
  if (dy > 0) state.player.facing = 'down';
  const tile = tileAt(state, state.player.x, state.player.y);
  const key = poiKey(state);
  const unclaimedPoi = tile?.poi && !state.map.claimed[key];
  if (!unclaimedPoi && tile?.encounter !== false) {
    const meterGain = Math.round((8 + random() * 9) * Number(tile?.meter || 1));
    state.encounterMeter = clamp(state.encounterMeter + meterGain, 0, state.encounterThreshold);
  }
  return {
    moved: true,
    tile,
    poi: unclaimedPoi ? tile.poi : null,
    encounterReady: !unclaimedPoi && state.encounterMeter >= state.encounterThreshold
  };
}

export function markPoiClaimed(state, key = poiKey(state)) {
  state.map.claimed[key] = true;
}

function weightedChoice(table, random) {
  const total = table.reduce((sum, entry) => sum + entry.weight, 0);
  let roll = random() * total;
  for (const entry of table) {
    roll -= entry.weight;
    if (roll <= 0) return entry;
  }
  return table[table.length - 1];
}

export function chooseRandomEncounter(state, random = Math.random) {
  const stageId = STAGES[state.stageIndex].id;
  return weightedChoice(ENCOUNTER_TABLES[stageId], random).enemies;
}

function scaleEnemy(template, stageIndex, kind, partySize = 4) {
  const soloScale = partySize === 1 ? (kind === 'boss' ? 0.46 : kind === 'elite' ? 0.54 : 0.78) : 1;
  const scale = (1 + (stageIndex * 0.22) + (kind === 'random' ? 0 : 0.06)) * soloScale;
  return {
    ...deepClone(template),
    instanceId: `${template.id}-${Math.random().toString(36).slice(2, 8)}`,
    maxHp: Math.round(template.maxHp * scale),
    hp: Math.round(template.maxHp * scale),
    attack: Math.round(template.attack * scale),
    magic: Math.round(template.magic * scale),
    defence: Math.round(template.defence * scale),
    speed: Math.max(4, Math.round(template.speed * (1 + stageIndex * 0.05))),
    atb: Math.random() * 24,
    statuses: []
  };
}

export function startBattle(state, enemyIds, kind = 'random') {
  const enemies = enemyIds.map((id) => scaleEnemy(ENEMIES[id], state.stageIndex, kind, state.party.length));
  const openingActorIndex = state.party.findIndex((member) => member.hp > 0);
  state.party.forEach((member, index) => {
    member.atb = index === openingActorIndex ? 100 : Math.random() * 18;
    member.defending = false;
  });
  state.battle = {
    id: `battle-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    kind,
    stageIndex: state.stageIndex,
    enemies,
    readyQueue: [],
    activeActorIndex: openingActorIndex >= 0 ? openingActorIndex : null,
    log: [`${enemies.map((enemy) => enemy.name).join(' and ')} block the route.`],
    escaped: false,
    victory: false,
    rewards: null,
    startedAt: Date.now()
  };
  state.totalBattles += 1;
  state.encounterMeter = 12;
  return state.battle;
}

export function derivedStats(member) {
  const stats = {
    maxHp: Number(member.maxHp || 1),
    maxMp: Number(member.maxMp || 0),
    attack: Number(member.attack || 1),
    magic: Number(member.magic || 1),
    defence: Number(member.defence || 1),
    speed: Number(member.speed || 1)
  };
  Object.values(member.equipment || {}).forEach((equipmentId) => {
    const item = EQUIPMENT[equipmentId];
    if (!item) return;
    stats.attack += Number(item.attack || 0);
    stats.magic += Number(item.magic || 0);
    stats.defence += Number(item.defence || 0);
    stats.speed += Number(item.speed || 0);
  });
  return stats;
}

export function xpForNextLevel(level) {
  return 55 + (Math.max(1, level) - 1) * 42;
}

export function applyExperience(member, amount) {
  const messages = [];
  member.xp += Math.max(0, Math.round(amount));
  while (member.xp >= xpForNextLevel(member.level)) {
    member.xp -= xpForNextLevel(member.level);
    member.level += 1;
    member.maxHp += 9;
    member.maxMp += 4;
    member.attack += 2;
    member.magic += 2;
    member.defence += 2;
    if (member.level % 2 === 0) member.speed += 1;
    member.hp = member.maxHp;
    member.mp = member.maxMp;
    messages.push(`${member.name} reached level ${member.level}.`);
  }
  return messages;
}

export function statusById(entity, id) {
  return entity.statuses?.find((status) => status.id === id) || null;
}

export function addStatus(entity, effect, random = Math.random, resistance = 0) {
  if (!effect?.id || random() > Number(effect.chance ?? 1) * (1 - resistance)) return false;
  const existing = statusById(entity, effect.id);
  if (existing) existing.turns = Math.max(existing.turns, effect.turns || 1);
  else entity.statuses.push({ id: effect.id, turns: effect.turns || 1 });
  return true;
}

function statusMultiplier(entity, id, fallback = 1) {
  return statusById(entity, id) ? fallback : 1;
}

export function elementalMultiplier(target, element) {
  if (!element || element === 'none') return 1;
  if (target.weaknesses?.includes(element)) return 1.5;
  if (target.resistances?.includes(element)) return 0.55;
  return 1;
}

export function computeDamage(attacker, target, { power = 1, element = 'none', magic = false } = {}, random = Math.random) {
  const attackerStats = attacker.role ? derivedStats(attacker) : attacker;
  const attackValue = magic ? attackerStats.magic : attackerStats.attack;
  const defenceValue = target.role ? derivedStats(target).defence : target.defence;
  const variance = 0.9 + random() * 0.2;
  const exposed = statusById(target, 'exposed') ? 0.72 : 1;
  const guard = statusById(target, 'guard') || target.defending ? 0.52 : 1;
  const shocked = statusById(attacker, 'shocked') ? 0.88 : 1;
  const raw = Math.max(1, ((attackValue * 2.1 * power) - (defenceValue * 0.82 * exposed)) * variance * shocked);
  return Math.max(1, Math.round(raw * elementalMultiplier(target, element) * guard));
}

export function computeHealing(caster, power = 1) {
  const stats = derivedStats(caster);
  return Math.max(1, Math.round((18 + stats.magic * 2.2) * power));
}

export function livingParty(state) {
  return state.party.map((member, index) => ({ member, index })).filter(({ member }) => member.hp > 0);
}

export function livingEnemies(state) {
  return state.battle?.enemies.map((enemy, index) => ({ enemy, index })).filter(({ enemy }) => enemy.hp > 0) || [];
}

export function battleIsOver(state) {
  if (!state.battle) return true;
  return livingEnemies(state).length === 0 || livingParty(state).length === 0 || state.battle.escaped;
}

export function tickStatuses(entity, log, label = entity.name) {
  if (!Array.isArray(entity.statuses)) entity.statuses = [];
  const poison = statusById(entity, 'poison');
  const burn = statusById(entity, 'burn');
  if (poison && entity.hp > 0) {
    const damage = Math.max(2, Math.round((entity.maxHp || entity.hp) * 0.06));
    entity.hp = Math.max(0, entity.hp - damage);
    log.push(`${label} suffers ${damage} poison damage.`);
  }
  if (burn && entity.hp > 0) {
    const damage = Math.max(2, Math.round((entity.maxHp || entity.hp) * 0.05));
    entity.hp = Math.max(0, entity.hp - damage);
    log.push(`${label} suffers ${damage} burn damage.`);
  }
  entity.statuses = entity.statuses
    .map((status) => ({ ...status, turns: status.turns - 1 }))
    .filter((status) => status.turns > 0);
  entity.defending = false;
}

export function atbRate(entity) {
  const speed = entity.role ? derivedStats(entity).speed : entity.speed;
  const slow = statusMultiplier(entity, 'slow', 0.58);
  return Math.max(3, speed * slow);
}

export function tickAtb(state, deltaSeconds, pauseForWaitMode = false) {
  if (!state.battle || state.battle.victory || state.battle.escaped) return [];
  if (Number.isInteger(state.battle.activeActorIndex) && state.party[state.battle.activeActorIndex]?.hp <= 0) state.battle.activeActorIndex = null;
  if (pauseForWaitMode) return [];
  const readyEnemies = [];
  state.party.forEach((member, index) => {
    if (member.hp <= 0 || state.battle.readyQueue.includes(index) || state.battle.activeActorIndex === index) return;
    member.atb = clamp(member.atb + atbRate(member) * deltaSeconds * 4.2, 0, 100);
    if (member.atb >= 100) state.battle.readyQueue.push(index);
  });
  state.battle.enemies.forEach((enemy, index) => {
    if (enemy.hp <= 0) return;
    enemy.atb = clamp(enemy.atb + atbRate(enemy) * deltaSeconds * 4, 0, 100);
    if (enemy.atb >= 100) {
      enemy.atb = 0;
      readyEnemies.push(index);
    }
  });
  if (state.battle.activeActorIndex === null && state.battle.readyQueue.length) {
    state.battle.activeActorIndex = state.battle.readyQueue.shift();
  }
  return readyEnemies;
}

function commandResult(log, extra = {}) {
  return { ok: true, log, ...extra };
}

export function executePartyCommand(state, actorIndex, command, payload = {}, random = Math.random) {
  const battle = state.battle;
  const actor = state.party[actorIndex];
  if (!battle || !actor || actor.hp <= 0) return { ok: false, reason: 'Actor unavailable.' };
  const log = [];
  const complete = () => {
    actor.atb = 0;
    battle.activeActorIndex = null;
    tickStatuses(actor, log, actor.name);
    battle.log.push(...log);
    battle.log = battle.log.slice(-14);
    return commandResult(log);
  };

  if (command === 'attack') {
    const target = battle.enemies[payload.targetIndex];
    if (!target || target.hp <= 0) return { ok: false, reason: 'Target unavailable.' };
    const damage = computeDamage(actor, target, { power: 1, element: payload.element || 'slash' }, random);
    target.hp = Math.max(0, target.hp - damage);
    log.push(`${actor.name} attacks ${target.name} for ${damage}.`);
    return complete();
  }

  if (command === 'ability' || command === 'magic') {
    const ability = ABILITIES[payload.abilityId];
    if (!ability || ability.kind !== command) return { ok: false, reason: 'Ability unavailable.' };
    if (actor.mp < ability.cost) return { ok: false, reason: 'Not enough MP.' };
    actor.mp -= ability.cost;
    if (ability.target === 'enemy') {
      const target = battle.enemies[payload.targetIndex];
      if (!target || target.hp <= 0) return { ok: false, reason: 'Target unavailable.' };
      const damage = computeDamage(actor, target, { power: ability.power, element: ability.element, magic: command === 'magic' }, random);
      target.hp = Math.max(0, target.hp - damage);
      log.push(`${actor.name} uses ${ability.name}; ${target.name} takes ${damage}.`);
      const statusTarget = ability.status?.self ? actor : target;
      if (ability.status && addStatus(statusTarget, ability.status, random, target.statusResist || 0)) log.push(`${statusTarget.name} gains ${ability.status.id}.`);
    } else if (ability.target === 'ally') {
      const target = state.party[payload.targetIndex];
      if (!target || target.hp <= 0) return { ok: false, reason: 'Target unavailable.' };
      const amount = computeHealing(actor, ability.power);
      target.hp = clamp(target.hp + amount, 0, target.maxHp);
      log.push(`${actor.name} uses ${ability.name}; ${target.name} recovers ${amount} HP.`);
    } else if (ability.target === 'party') {
      if (ability.healing) {
        const amount = computeHealing(actor, ability.power);
        livingParty(state).forEach(({ member }) => { member.hp = clamp(member.hp + amount, 0, member.maxHp); });
        log.push(`${actor.name} uses ${ability.name}; the party recovers ${amount} HP.`);
      } else if (ability.status) {
        livingParty(state).forEach(({ member }) => addStatus(member, ability.status, () => 0, 0));
        log.push(`${actor.name} uses ${ability.name}; the party gains ${ability.status.id}.`);
      }
    }
    return complete();
  }

  if (command === 'item') {
    const item = ITEMS[payload.itemId];
    const count = Number(state.inventory.items[payload.itemId] || 0);
    if (!item || count <= 0) return { ok: false, reason: 'Item unavailable.' };
    state.inventory.items[payload.itemId] = count - 1;
    const targets = item.target === 'party' ? livingParty(state).map(({ member }) => member) : [state.party[payload.targetIndex]].filter(Boolean);
    targets.forEach((target) => {
      if (item.effect === 'heal') target.hp = clamp(target.hp + item.amount, 0, target.maxHp);
      if (item.effect === 'mp') target.mp = clamp(target.mp + item.amount, 0, target.maxMp);
      if (item.effect === 'cleanse') target.statuses = target.statuses.filter((status) => ['guard'].includes(status.id));
    });
    log.push(`${actor.name} uses ${item.name}.`);
    return complete();
  }

  if (command === 'defend') {
    addStatus(actor, { id: 'guard', turns: 2, chance: 1 }, () => 0);
    actor.defending = true;
    log.push(`${actor.name} defends.`);
    return complete();
  }

  if (command === 'escape') {
    if (battle.kind === 'boss' || battle.kind === 'elite') return { ok: false, reason: 'Escape is sealed in this battle.' };
    const chance = clamp(0.55 + (derivedStats(actor).speed / 100), 0.55, 0.86);
    if (random() <= chance) {
      battle.escaped = true;
      log.push(`${actor.name} opens a retreat path.`);
    } else {
      log.push(`${actor.name} cannot find a safe route out.`);
    }
    return complete();
  }

  return { ok: false, reason: 'Unknown command.' };
}

export function executeEnemyTurn(state, enemyIndex, random = Math.random) {
  const battle = state.battle;
  const enemy = battle?.enemies?.[enemyIndex];
  if (!enemy || enemy.hp <= 0) return [];
  const log = [];
  const action = enemy.attacks[Math.floor(random() * enemy.attacks.length)];
  if (action.status?.self) {
    addStatus(enemy, action.status, () => 0, 0);
    log.push(`${enemy.name} uses ${action.name} and gains ${action.status.id}.`);
  } else {
    const targets = action.party ? livingParty(state).map(({ member }) => member) : [livingParty(state)[Math.floor(random() * livingParty(state).length)]?.member].filter(Boolean);
    targets.forEach((target) => {
      const damage = computeDamage(enemy, target, { power: action.power, element: action.element, magic: enemy.magic > enemy.attack }, random);
      target.hp = Math.max(0, target.hp - damage);
      log.push(`${enemy.name} uses ${action.name}; ${target.name} takes ${damage}.`);
      if (action.status && addStatus(target, action.status, random, 0)) log.push(`${target.name} gains ${action.status.id}.`);
      if (action.drain) {
        const healing = Math.round(damage * action.drain);
        enemy.hp = clamp(enemy.hp + healing, 0, enemy.maxHp);
        log.push(`${enemy.name} restores ${healing} HP.`);
      }
    });
  }
  tickStatuses(enemy, log, enemy.name);
  battle.log.push(...log);
  battle.log = battle.log.slice(-14);
  return log;
}

function rollDrops(enemy, random) {
  const drops = [];
  (enemy.drops || []).forEach((drop) => {
    if (random() <= drop.chance) {
      const quantity = drop.min + Math.floor(random() * ((drop.max - drop.min) + 1));
      drops.push({ id: drop.id, quantity });
    }
  });
  return drops;
}

export function resolveVictory(state, random = Math.random) {
  const battle = state.battle;
  if (!battle || livingEnemies(state).length) return null;
  const rewards = { xp: 0, coins: 0, materials: {}, equipment: [] };
  battle.enemies.forEach((enemy) => {
    rewards.xp += Math.round(enemy.xp * (1 + state.stageIndex * 0.12));
    rewards.coins += Math.round(enemy.coins * (1 + state.stageIndex * 0.1));
    rollDrops(enemy, random).forEach((drop) => {
      rewards.materials[drop.id] = (rewards.materials[drop.id] || 0) + drop.quantity;
    });
    if (enemy.equipmentDrop && (enemy.elite || enemy.boss || random() < 0.12)) rewards.equipment.push(enemy.equipmentDrop);
  });
  state.inventory.coins += rewards.coins;
  Object.entries(rewards.materials).forEach(([id, quantity]) => {
    state.inventory.materials[id] = (state.inventory.materials[id] || 0) + quantity;
  });
  rewards.equipment.forEach((id) => {
    state.inventory.equipment[id] = (state.inventory.equipment[id] || 0) + 1;
  });
  const levelMessages = [];
  state.party.forEach((member) => levelMessages.push(...applyExperience(member, rewards.xp)));
  battle.victory = true;
  battle.rewards = rewards;
  battle.log.push(`Victory: ${rewards.xp} XP each and ${rewards.coins} coins.`, ...levelMessages);
  return rewards;
}

export function finishBattle(state) {
  const kind = state.battle?.kind;
  const escaped = state.battle?.escaped;
  if (!escaped && kind === 'elite') state.flags.eliteDefeated = true;
  if (!escaped && kind === 'boss') {
    state.flags.bossDefeated = true;
    state.zoneComplete = true;
  }
  state.party.forEach((member) => {
    member.atb = 0;
    member.defending = false;
    member.statuses = member.statuses.filter((status) => status.id === 'guard' && status.turns > 0);
  });
  state.battle = null;
}

export function applyTreasure(state, random = Math.random) {
  const stage = state.stageIndex;
  const table = [
    { kind: 'item', id: 'field-tonic', quantity: 1 + Math.floor(random() * 2) },
    { kind: 'item', id: 'lantern-draught', quantity: 1 },
    { kind: 'material', id: stage === 0 ? 'sunsteel-filings' : stage === 1 ? 'rain-silk' : 'hartglass', quantity: 1 },
    { kind: 'coins', id: 'coins', quantity: 35 + stage * 25 }
  ];
  const reward = table[Math.floor(random() * table.length)];
  if (reward.kind === 'item') state.inventory.items[reward.id] = (state.inventory.items[reward.id] || 0) + reward.quantity;
  if (reward.kind === 'material') state.inventory.materials[reward.id] = (state.inventory.materials[reward.id] || 0) + reward.quantity;
  if (reward.kind === 'coins') state.inventory.coins += reward.quantity;
  return reward;
}

export function gatherResource(state, random = Math.random) {
  const stagePools = [
    ['glowseed', 'peppercap', 'sunsteel-filings'],
    ['rain-silk', 'bark-resin', 'mossplate-chip'],
    ['waystone-shard', 'hartglass', 'glowseed']
  ];
  const pool = stagePools[state.stageIndex];
  const id = pool[Math.floor(random() * pool.length)];
  const quantity = 1 + Math.floor(random() * 2);
  state.inventory.materials[id] = (state.inventory.materials[id] || 0) + quantity;
  return { id, quantity };
}

export function restParty(state) {
  state.party.forEach((member) => {
    member.hp = clamp(member.hp + Math.round(member.maxHp * 0.55), 0, member.maxHp);
    member.mp = clamp(member.mp + Math.round(member.maxMp * 0.45), 0, member.maxMp);
    member.statuses = [];
  });
  state.encounterMeter = Math.max(0, state.encounterMeter - 35);
}

export function advanceStage(state) {
  if (state.stageIndex >= STAGES.length - 1) return false;
  state.stageIndex += 1;
  state.map = generateStageMap(state.stageIndex, state.routeSeed);
  state.player = { ...state.map.start, facing: 'right', steps: 0 };
  state.encounterMeter = 0;
  state.party.forEach((member) => {
    member.hp = clamp(member.hp + Math.round(member.maxHp * 0.25), 0, member.maxHp);
    member.mp = clamp(member.mp + Math.round(member.maxMp * 0.2), 0, member.maxMp);
  });
  return true;
}

export function equipItem(state, partyIndex, equipmentId) {
  const member = state.party[partyIndex];
  const item = EQUIPMENT[equipmentId];
  if (!member || !item || Number(state.inventory.equipment[equipmentId] || 0) <= 0) return false;
  const previous = member.equipment[item.slot];
  if (previous) state.inventory.equipment[previous] = (state.inventory.equipment[previous] || 0) + 1;
  state.inventory.equipment[equipmentId] -= 1;
  member.equipment[item.slot] = equipmentId;
  return true;
}

export function unequipItem(state, partyIndex, slot) {
  const member = state.party[partyIndex];
  const previous = member?.equipment?.[slot];
  if (!member || !previous) return false;
  state.inventory.equipment[previous] = (state.inventory.equipment[previous] || 0) + 1;
  member.equipment[slot] = null;
  return true;
}

export function reorderParty(state, fromIndex, toIndex) {
  if (fromIndex === toIndex || !state.party[fromIndex] || !state.party[toIndex]) return false;
  const [member] = state.party.splice(fromIndex, 1);
  state.party.splice(toIndex, 0, member);
  return true;
}

export function itemLabel(id) {
  return ITEMS[id]?.name || MATERIALS[id]?.name || EQUIPMENT[id]?.name || id;
}

export function materialDiscipline(id) {
  return MATERIALS[id]?.discipline || 'trading';
}

export function routeStage(state) {
  return STAGES[state.stageIndex];
}

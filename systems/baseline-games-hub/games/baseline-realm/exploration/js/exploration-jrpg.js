import {
  ABILITIES,
  ART_URL,
  BATTLE_COMMANDS,
  DISCIPLINES,
  ENEMIES,
  EQUIPMENT,
  ITEMS,
  MATERIALS,
  STAGES,
  STORY,
  TILE_LEGEND
} from '../data/meridian-grove.js';
import {
  advanceStage,
  applyTreasure,
  battleIsOver,
  chooseRandomEncounter,
  createInitialState,
  derivedStats,
  equipItem,
  executeEnemyTurn,
  executePartyCommand,
  finishBattle,
  gatherResource,
  itemLabel,
  livingEnemies,
  livingParty,
  markPoiClaimed,
  materialDiscipline,
  movePlayer,
  normaliseState,
  poiKey,
  reorderParty,
  resolveVictory,
  restParty,
  routeStage,
  startBattle,
  tickAtb,
  unequipItem,
  xpForNextLevel
} from './jrpg-engine.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const percent = (value, max) => `${clamp(max ? (value / max) * 100 : 0, 0, 100)}%`;
const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
const titleCase = (value) => String(value || '').replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
const heroArt = (id) => `hero-${id}`;
const statusLabel = (status) => `${titleCase(status.id)} ${status.turns}`;

class GroveMusic {
  constructor() {
    this.context = null;
    this.master = null;
    this.timer = null;
    this.enabled = true;
    this.active = true;
    this.step = 0;
    this.motif = [293.66, 349.23, 440, 523.25, 440, 392, 329.63, 261.63, 293.66, 392, 466.16, 440];
    this.bass = [146.83, 130.81, 174.61, 196];
    this.harmony = [220, 261.63, 293.66, 246.94];
  }

  ensure() {
    if (!this.enabled || this.context) return;
    const AudioContext = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!AudioContext) return;
    this.context = new AudioContext();
    this.master = this.context.createGain();
    this.master.gain.value = 0.05;
    this.master.connect(this.context.destination);
    this.playPhrase();
    this.timer = globalThis.setInterval(() => this.playPhrase(), 6800);
  }

  note(frequency, when, duration, type = 'triangle', volume = 0.12) {
    if (!this.context || !this.master) return;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, when);
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(volume, when + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    oscillator.connect(gain);
    gain.connect(this.master);
    oscillator.start(when);
    oscillator.stop(when + duration + 0.05);
  }

  playPhrase() {
    if (!this.context || !this.active || !this.enabled) return;
    if (this.context.state === 'suspended') this.context.resume().catch(() => {});
    const start = this.context.currentTime + 0.08;
    const turn = this.step % 3;
    this.motif.forEach((frequency, index) => {
      const lifted = turn === 1 && index > 7 ? frequency * 1.12246 : frequency;
      this.note(lifted, start + index * 0.48, 0.4, index % 3 === 0 ? 'sine' : 'triangle', 0.095);
    });
    this.bass.forEach((frequency, index) => this.note(frequency, start + index * 1.44, 1.25, 'sine', 0.072));
    this.harmony.forEach((frequency, index) => {
      const when = start + index * 1.44;
      this.note(frequency, when, 1.28, 'triangle', 0.026);
      this.note(frequency * 1.5, when + 0.04, 1.18, 'sine', 0.018);
    });
    this.step += 1;
  }

  setEnabled(enabled) {
    this.enabled = Boolean(enabled);
    if (this.enabled) this.ensure();
    if (this.master) this.master.gain.setTargetAtTime(this.enabled && this.active ? 0.05 : 0.0001, this.context.currentTime, 0.08);
  }

  setActive(active) {
    this.active = Boolean(active);
    if (!this.context) return;
    if (this.master) this.master.gain.setTargetAtTime(this.active && this.enabled ? 0.05 : 0.0001, this.context.currentTime, 0.06);
    if (this.active && this.enabled) this.context.resume().catch(() => {});
    else this.context.suspend().catch(() => {});
  }

  destroy() {
    if (this.timer) globalThis.clearInterval(this.timer);
    this.context?.close().catch(() => {});
    this.context = null;
    this.master = null;
  }
}

function portrait(symbol, label, className = '') {
  return `<svg class="jrpg-portrait ${className}" viewBox="0 0 100 100" role="img" aria-label="${escapeHtml(label)}"><use href="${ART_URL}#${symbol}"></use></svg>`;
}

function meter(label, value, max, className = '') {
  return `<div class="jrpg-meter ${className}" data-meter="${escapeHtml(className || label.toLowerCase())}" aria-label="${escapeHtml(label)} ${Math.round(value)} of ${Math.round(max)}"><span style="width:${percent(value, max)}"></span><b>${Math.round(value)} / ${Math.round(max)}</b></div>`;
}

export class MeridianGroveGame {
  constructor({ root, onSave, inventoryService } = {}) {
    this.root = root;
    this.onSave = onSave || (() => {});
    this.inventoryService = inventoryService || null;
    this.state = this.load();
    this.music = new GroveMusic();
    this.music.setEnabled(this.state.settings.music);
    this.mounted = false;
    this.lastFrame = performance.now();
    this.lastBattleRender = 0;
    this.lastBattleActorIndex = null;
    this.frame = 0;
    this.moveLockUntil = 0;
    this.gamepadLockUntil = 0;
    this.modal = null;
    this.battleMenu = { screen: 'commands', selection: null };
    this.boundKeydown = (event) => this.handleKeydown(event);
    this.boundPointer = (event) => this.handlePointer(event);
    this.boundChange = (event) => this.handleChange(event);
    this.boundVisibility = () => {
      this.save('visibility');
      this.syncAudioActivity();
    };
    this.boundRealmVisibility = () => this.syncAudioActivity();
    this.panelObserver = null;
  }

  load() {
    try {
      const profile=globalThis.BaselineGameStorage?.getProfile?.('meridiangrove');
      return normaliseState(profile || null);
    } catch (error) {
      console.warn('Meridian Grove account state could not be loaded.', error);
      return createInitialState();
    }
  }

  save(reason = 'autosave') {
    this.state.lastSaveAt = Date.now();
    try {
      globalThis.BaselineGameStorage?.setTemporaryProfile?.('meridiangrove',this.state);
      globalThis.BaselineGameStorage?.saveProfile?.('meridiangrove',this.state);
      this.onSave(this.state, reason);
      this.updateSaveStatus(reason);
    } catch (error) {
      console.warn('Meridian Grove account save could not be queued.', error);
      this.updateSaveStatus('save-error');
    }
  }

  syncMaterialsToRealm(materials, source = 'exploration') {
    if (!this.inventoryService || !materials) return;
    const produce = Object.entries(materials)
      .map(([id, amount]) => ({ bucket: 'materials', id: MATERIALS[id]?.sharedId, amount: Math.max(0, Math.round(Number(amount || 0))) }))
      .filter((operation) => operation.id && operation.amount > 0);
    if (!produce.length) return;
    try {
      this.inventoryService.transact(
        { produce },
        { type: 'exploration-drop', zone: 'meridian-grove', source }
      );
    } catch (error) {
      console.warn('Meridian Grove materials could not be copied to the shared Realm inventory.', error);
    }
  }

  syncMaterialToRealm(id, amount, source) {
    this.syncMaterialsToRealm({ [id]: amount }, source);
  }

  mount() {
    if (!this.root || this.mounted) return;
    this.mounted = true;
    this.root.classList.add('jrpg-mounted');
    document.getElementById('realmSceneFrame')?.classList.add('is-exploration-jrpg');
    this.root.innerHTML = this.shellTemplate();
    this.root.addEventListener('click', this.boundPointer);
    this.root.addEventListener('change', this.boundChange);
    globalThis.addEventListener('keydown', this.boundKeydown, true);
    document.addEventListener('visibilitychange', this.boundVisibility);
    globalThis.addEventListener('baseline:realm:visibility', this.boundRealmVisibility);
    const realmPanel = document.getElementById('ninjaPanel');
    if (realmPanel && typeof MutationObserver !== 'undefined') {
      this.panelObserver = new MutationObserver(() => this.syncAudioActivity());
      this.panelObserver.observe(realmPanel, { attributes: true, attributeFilter: ['class', 'hidden'] });
    }
    this.renderAll();
    if (!this.state.flags.introSeen) {
      this.openStory('The Meridian Gate', STORY.opening, 'Enter the grove', () => {
        this.state.flags.introSeen = true;
        this.log('The first waystone waits beyond the Sunlit Verge.');
        this.save('story');
      });
    } else if (this.state.battle) {
      this.openBattle();
    }
    this.frame = requestAnimationFrame((time) => this.loop(time));
  }

  destroy() {
    if (!this.mounted) return;
    this.save('unmount');
    this.mounted = false;
    cancelAnimationFrame(this.frame);
    this.root.removeEventListener('click', this.boundPointer);
    this.root.removeEventListener('change', this.boundChange);
    globalThis.removeEventListener('keydown', this.boundKeydown, true);
    document.removeEventListener('visibilitychange', this.boundVisibility);
    globalThis.removeEventListener('baseline:realm:visibility', this.boundRealmVisibility);
    this.panelObserver?.disconnect();
    this.music.destroy();
  }

  syncAudioActivity() {
    const panel = document.getElementById('ninjaPanel');
    const panelActive = Boolean(panel?.classList.contains('is-active') && !panel.hidden);
    this.music.setActive(panelActive && document.visibilityState !== 'hidden' && this.isActive());
  }

  isActive() {
    const frame = document.getElementById('realmSceneFrame');
    return this.mounted && !this.root.hidden && frame?.classList.contains('is-exploration-view');
  }

  shellTemplate() {
    return `
      <div class="jrpg-game" data-zone="meridian-grove">
        <header class="jrpg-topbar">
          <div class="jrpg-zone-title">
            <span class="jrpg-kicker">Baseline Realm · Exploration</span>
            <h3 id="jrpgStageTitle"></h3>
            <p id="jrpgObjective"></p>
          </div>
          <div class="jrpg-top-actions" aria-label="Exploration menu">
            <button type="button" data-jrpg-panel="party">Party</button>
            <button type="button" data-jrpg-panel="inventory">Inventory</button>
            <button type="button" data-jrpg-panel="settings">Settings</button>
            <button type="button" data-jrpg-action="save">Save</button>
            <button type="button" data-jrpg-action="fullscreen">Full screen</button>
            <button type="button" data-jrpg-action="return-basecamp">Return to Basecamp</button>
            <button type="button" data-jrpg-action="abandon">Abandon Route</button>
          </div>
        </header>
        <div class="jrpg-layout">
          <section class="jrpg-map-card" aria-label="Meridian Grove map">
            <div class="jrpg-map-viewport" id="jrpgMapViewport">
              <div class="jrpg-map-world" id="jrpgMapWorld"></div>
              <div class="jrpg-map-vignette"></div>
              <div class="jrpg-location-plaque"><strong id="jrpgLocationName"></strong><span id="jrpgLocationDetail"></span></div>
            </div>
            <div class="jrpg-map-footer">
              <div class="jrpg-encounter-block">
                <div class="jrpg-footer-label"><span>Encounter pressure</span><b id="jrpgEncounterText"></b></div>
                <div class="jrpg-encounter-meter"><span id="jrpgEncounterFill"></span></div>
              </div>
              <div class="jrpg-touch-controls" aria-label="Touch movement controls">
                <button type="button" data-move="0,-1" aria-label="Move up">▲</button>
                <button type="button" data-move="-1,0" aria-label="Move left">◀</button>
                <button type="button" data-move="0,1" aria-label="Move down">▼</button>
                <button type="button" data-move="1,0" aria-label="Move right">▶</button>
              </div>
              <div class="jrpg-control-note">Move: WASD / arrows · Touch pad · Gamepad D-pad or left stick</div>
            </div>
          </section>
          <aside class="jrpg-side-hud">
            <section class="jrpg-party-strip" id="jrpgPartyStrip" aria-label="Active party"></section>
            <section class="jrpg-route-card">
              <div class="jrpg-section-head"><h4>Route log</h4><span id="jrpgSaveStatus">Autosave ready</span></div>
              <ol id="jrpgRouteLog"></ol>
            </section>
            <section class="jrpg-resource-ribbon" id="jrpgResourceRibbon"></section>
          </aside>
        </div>
        <section class="jrpg-battle-layer" id="jrpgBattleLayer" hidden aria-live="polite"></section>
        <section class="jrpg-modal-layer" id="jrpgModalLayer" hidden></section>
      </div>`;
  }

  renderAll() {
    this.renderHeader();
    this.renderMap();
    this.renderPartyStrip();
    this.renderRouteLog();
    this.renderResourceRibbon();
    this.renderEncounterMeter();
    const returnButton = this.root.querySelector('[data-jrpg-action="return-basecamp"]');
    if (returnButton) {
      returnButton.disabled = false;
      returnButton.title = this.state.battle ? 'Withdraw from this encounter and return to Basecamp.' : 'Return to Basecamp.';
    }
    const abandonButton = this.root.querySelector('[data-jrpg-action="abandon"]');
    if (abandonButton) {
      abandonButton.disabled = Boolean(this.state.battle);
      abandonButton.title = this.state.battle ? 'Return to Basecamp first if you want to abandon the route.' : '';
    }
    if (this.state.battle) this.renderBattle();
  }

  renderHeader() {
    const stage = routeStage(this.state);
    this.text('jrpgStageTitle', stage.name);
    const objective = this.state.zoneComplete
      ? 'Zone complete — the Heartseed road now returns to Basecamp.'
      : this.state.stageIndex === 0
        ? 'Reach the eastern waystone and gather supplies.'
        : this.state.stageIndex === 1
          ? this.state.flags.eliteDefeated ? 'The seal is broken. Reach the hollow exit.' : 'Find and defeat the Mossbound Custodian.'
          : 'Cross the Crown of Echoes and confront the Hollow Hart.';
    this.text('jrpgObjective', objective);
  }

  renderMap() {
    const world = this.byId('jrpgMapWorld');
    if (!world) return;
    const map = this.state.map;
    const tileSize = 32;
    world.style.setProperty('--map-cols', map.width);
    world.style.setProperty('--map-rows', map.height);
    world.style.setProperty('--tile-size', `${tileSize}px`);
    const lead = this.state.party[0];
    const tiles = [];
    for (let y = 0; y < map.height; y += 1) {
      for (let x = 0; x < map.width; x += 1) {
        const symbol = map.tiles[y][x];
        const tile = TILE_LEGEND[symbol] || TILE_LEGEND.g;
        const claimed = Boolean(map.claimed[`${this.state.stageIndex}:${x}:${y}`]);
        tiles.push(`<span class="jrpg-tile tile-${tile.id}${claimed ? ' is-claimed' : ''}" data-x="${x}" data-y="${y}" data-symbol="${escapeHtml(symbol)}" aria-label="${escapeHtml(tile.name)}"></span>`);
      }
    }
    const followers = this.state.party.slice(1).map((member, index) => {
      const offsets = [{ x: -12, y: 10 }, { x: -20, y: -4 }, { x: -9, y: -15 }][index];
      return `<span class="jrpg-map-follower" style="left:calc(${this.state.player.x * tileSize}px + ${offsets.x}px);top:calc(${this.state.player.y * tileSize}px + ${offsets.y}px)">${portrait(heroArt(member.id), member.name)}</span>`;
    }).join('');
    const player = `<span class="jrpg-map-player facing-${this.state.player.facing}" style="left:${this.state.player.x * tileSize}px;top:${this.state.player.y * tileSize}px">${portrait(heroArt(lead.id), lead.name)}</span>`;
    world.innerHTML = tiles.join('') + followers + player;
    const viewport = this.byId('jrpgMapViewport');
    const viewportWidth = viewport?.clientWidth || 760;
    const viewportHeight = viewport?.clientHeight || 410;
    const focusX = this.state.player.x * tileSize + tileSize / 2;
    const focusY = this.state.player.y * tileSize + tileSize / 2;
    const offsetX = clamp((viewportWidth / 2) - focusX, viewportWidth - map.width * tileSize - 12, 12);
    const offsetY = clamp((viewportHeight / 2) - focusY, viewportHeight - map.height * tileSize - 12, 12);
    world.style.transform = `translate(${Math.round(offsetX)}px, ${Math.round(offsetY)}px)`;
    const tile = TILE_LEGEND[map.tiles[this.state.player.y][this.state.player.x]];
    this.text('jrpgLocationName', tile?.name || routeStage(this.state).name);
    this.text('jrpgLocationDetail', `Step ${this.state.totalSteps} · Route seed ${this.state.routeSeed.toString(16).toUpperCase()}`);
  }

  renderPartyStrip() {
    const container = this.byId('jrpgPartyStrip');
    if (!container) return;
    container.innerHTML = this.state.party.map((member, index) => {
      const stats = derivedStats(member);
      const statuses = member.statuses.length ? member.statuses.map(statusLabel).join(' · ') : 'Clear';
      return `<article class="jrpg-party-mini${member.hp <= 0 ? ' is-ko' : ''}">
        ${portrait(heroArt(member.id), member.name)}
        <div class="jrpg-party-mini__copy"><div><strong>${index + 1}. ${escapeHtml(member.name)}</strong><span>Lv ${member.level} · ${escapeHtml(member.role)}</span></div>
        ${meter('HP', member.hp, member.maxHp, 'hp')}${meter('MP', member.mp, member.maxMp, 'mp')}
        <small>${escapeHtml(statuses)} · ATK ${stats.attack} · DEF ${stats.defence} · SPD ${stats.speed}</small></div>
      </article>`;
    }).join('');
  }

  renderRouteLog() {
    const log = this.byId('jrpgRouteLog');
    if (!log) return;
    log.innerHTML = this.state.routeLog.slice(-6).reverse().map((entry) => `<li>${escapeHtml(entry)}</li>`).join('');
  }

  renderResourceRibbon() {
    const element = this.byId('jrpgResourceRibbon');
    if (!element) return;
    const materials = Object.values(this.state.inventory.materials).reduce((sum, quantity) => sum + Number(quantity || 0), 0);
    const items = Object.values(this.state.inventory.items).reduce((sum, quantity) => sum + Number(quantity || 0), 0);
    element.innerHTML = `<span><b>${Math.round(this.state.inventory.coins)}</b> coins</span><span><b>${materials}</b> materials</span><span><b>${items}</b> supplies</span><span><b>${this.state.totalBattles}</b> battles</span>`;
  }

  renderEncounterMeter() {
    const value = this.state.encounterMeter;
    const threshold = this.state.encounterThreshold;
    const fill = this.byId('jrpgEncounterFill');
    if (fill) fill.style.width = percent(value, threshold);
    this.text('jrpgEncounterText', `${Math.round(value)} / ${threshold}`);
  }

  renderBattle() {
    const layer = this.byId('jrpgBattleLayer');
    const battle = this.state.battle;
    if (!layer || !battle) return;
    layer.hidden = false;
    const actorIndex = battle.activeActorIndex;
    const actor = Number.isInteger(actorIndex) ? this.state.party[actorIndex] : null;
    const partyDown = livingParty(this.state).length === 0;
    const enemiesDown = livingEnemies(this.state).length === 0;
    const result = partyDown || battle.escaped || battle.victory || enemiesDown;
    layer.innerHTML = `<div class="jrpg-battle-scene battle-${battle.kind}">
      <header class="jrpg-battle-head"><div><span class="jrpg-kicker">${escapeHtml(routeStage(this.state).name)}</span><h3>${battle.kind === 'boss' ? 'Boss Battle' : battle.kind === 'elite' ? 'Elite Encounter' : 'Field Encounter'}</h3></div>
      <div class="jrpg-battle-head-actions"><div class="jrpg-battle-mode"><button type="button" data-battle-mode="active" class="${this.state.settings.battleMode === 'active' ? 'is-active' : ''}">Active</button><button type="button" data-battle-mode="wait" class="${this.state.settings.battleMode === 'wait' ? 'is-active' : ''}">Wait</button></div><button type="button" data-battle-basecamp class="jrpg-battle-basecamp">Basecamp</button></div></header>
      <div class="jrpg-battlefield">
        <div class="jrpg-enemy-line">${battle.enemies.map((enemy, index) => this.enemyBattleCard(enemy, index)).join('')}</div>
        <div class="jrpg-party-line">${this.state.party.map((member, index) => this.partyBattleCard(member, index, actorIndex)).join('')}</div>
      </div>
      <div class="jrpg-battle-console">
        <div class="jrpg-battle-log"><ol>${battle.log.slice(-7).reverse().map((entry) => `<li>${escapeHtml(entry)}</li>`).join('')}</ol></div>
        <div class="jrpg-command-window">${result ? this.battleResultTemplate(partyDown) : this.commandTemplate(actor, actorIndex)}</div>
      </div>
    </div>`;
  }

  enemyBattleCard(enemy, index) {
    const statuses = enemy.statuses.length ? enemy.statuses.map(statusLabel).join(' · ') : 'No status';
    return `<article class="jrpg-enemy-card${enemy.hp <= 0 ? ' is-defeated' : ''}" data-enemy-index="${index}">
      ${portrait(enemy.art, enemy.name, 'jrpg-enemy-portrait')}
      <div class="jrpg-enemy-card__copy"><strong>${escapeHtml(enemy.name)}</strong>${meter('Enemy HP', enemy.hp, enemy.maxHp, 'hp')}${meter('Enemy ATB', enemy.atb, 100, 'atb')}
      <small>Weak: ${escapeHtml((enemy.weaknesses || []).join(', ') || 'none')} · Resist: ${escapeHtml((enemy.resistances || []).join(', ') || 'none')}</small><small>${escapeHtml(statuses)}</small></div>
    </article>`;
  }

  partyBattleCard(member, index, activeActorIndex) {
    return `<article class="jrpg-battle-party-card${member.hp <= 0 ? ' is-ko' : ''}${activeActorIndex === index ? ' is-commanding' : ''}" data-party-index="${index}">
      ${portrait(heroArt(member.id), member.name)}<div><strong>${escapeHtml(member.name)}</strong><span>Lv ${member.level} · ${escapeHtml(member.role)}</span>${meter('HP', member.hp, member.maxHp, 'hp')}${meter('MP', member.mp, member.maxMp, 'mp')}${meter('ATB', member.atb, 100, 'atb')}<small>${member.statuses.length ? escapeHtml(member.statuses.map(statusLabel).join(' · ')) : 'Ready'}</small></div>
    </article>`;
  }

  refreshBattleMeter(card, className, label, value, max) {
    const meterNode = card?.querySelector(`.jrpg-meter.${className}`);
    if (!meterNode) return;
    const fill = meterNode.querySelector(':scope>span');
    const valueNode = meterNode.querySelector(':scope>b');
    if (fill) fill.style.width = percent(value, max);
    if (valueNode) valueNode.textContent = `${Math.round(value)} / ${Math.round(max)}`;
    meterNode.setAttribute('aria-label', `${label} ${Math.round(value)} of ${Math.round(max)}`);
  }

  refreshBattleState() {
    const battle = this.state.battle;
    if (!battle) return;
    battle.enemies.forEach((enemy, index) => {
      const card = this.root.querySelector(`.jrpg-enemy-card[data-enemy-index="${index}"]`);
      if (!card) return;
      card.classList.toggle('is-defeated', enemy.hp <= 0);
      this.refreshBattleMeter(card, 'hp', 'Enemy HP', enemy.hp, enemy.maxHp);
      this.refreshBattleMeter(card, 'atb', 'Enemy ATB', enemy.atb, 100);
    });
    this.state.party.forEach((member, index) => {
      const card = this.root.querySelector(`.jrpg-battle-party-card[data-party-index="${index}"]`);
      if (!card) return;
      card.classList.toggle('is-ko', member.hp <= 0);
      card.classList.toggle('is-commanding', battle.activeActorIndex === index);
      this.refreshBattleMeter(card, 'hp', 'HP', member.hp, member.maxHp);
      this.refreshBattleMeter(card, 'mp', 'MP', member.mp, member.maxMp);
      this.refreshBattleMeter(card, 'atb', 'ATB', member.atb, 100);
    });
    const log = this.root.querySelector('.jrpg-battle-log>ol');
    if (log) log.innerHTML = battle.log.slice(-7).reverse().map((entry) => `<li>${escapeHtml(entry)}</li>`).join('');
  }

  commandTemplate(actor, actorIndex) {
    if (!actor) return '<div class="jrpg-command-wait"><strong>ATB running</strong><span>Commands appear when a party gauge is full.</span></div>';
    if (this.battleMenu.screen === 'commands') {
      const hasAbility = actor.abilities.some((id) => ABILITIES[id]?.kind === 'ability');
      const hasMagic = actor.abilities.some((id) => ABILITIES[id]?.kind === 'magic');
      return `<div class="jrpg-command-title"><strong>${escapeHtml(actor.name)}</strong><span>Choose a command</span></div><div class="jrpg-command-grid">${BATTLE_COMMANDS.map((label) => {
        const unavailable = (label === 'Ability' && !hasAbility) || (label === 'Magic' && !hasMagic);
        const reason = label === 'Ability' ? 'No ability learned' : label === 'Magic' ? 'No magic learned' : '';
        return `<button type="button" data-battle-command="${label.toLowerCase()}" ${unavailable ? `disabled aria-disabled="true" title="${reason}"` : ''}>${label}</button>`;
      }).join('')}</div>`;
    }
    if (this.battleMenu.screen === 'abilities' || this.battleMenu.screen === 'magic') {
      const kind = this.battleMenu.screen === 'abilities' ? 'ability' : 'magic';
      const abilities = actor.abilities.map((id) => ABILITIES[id]).filter((ability) => ability?.kind === kind);
      return `<div class="jrpg-command-title"><button type="button" data-battle-back>←</button><strong>${kind === 'ability' ? 'Abilities' : 'Magic'}</strong><span>${actor.mp} MP</span></div><div class="jrpg-skill-list">${abilities.map((ability) => `<button type="button" data-battle-skill="${ability.id}" ${actor.mp < ability.cost ? 'disabled' : ''}><strong>${escapeHtml(ability.name)}</strong><span>${ability.cost} MP · ${escapeHtml(ability.description)}</span></button>`).join('') || '<p>No techniques available.</p>'}</div>`;
    }
    if (this.battleMenu.screen === 'items') {
      return `<div class="jrpg-command-title"><button type="button" data-battle-back>←</button><strong>Items</strong><span>Shared supply bag</span></div><div class="jrpg-skill-list">${Object.entries(this.state.inventory.items).filter(([id, quantity]) => quantity > 0 && ITEMS[id]).map(([id, quantity]) => `<button type="button" data-battle-item="${id}"><strong>${escapeHtml(ITEMS[id].name)} ×${quantity}</strong><span>${escapeHtml(ITEMS[id].description)}</span></button>`).join('') || '<p>No battle items remain.</p>'}</div>`;
    }
    if (this.battleMenu.screen === 'targets') return this.targetTemplate(actorIndex);
    return '';
  }

  targetTemplate(actorIndex) {
    const selection = this.battleMenu.selection || {};
    const type = selection.target || 'enemy';
    const targets = type === 'enemy'
      ? livingEnemies(this.state).map(({ enemy, index }) => ({ index, name: enemy.name, hp: enemy.hp, maxHp: enemy.maxHp }))
      : livingParty(this.state).map(({ member, index }) => ({ index, name: member.name, hp: member.hp, maxHp: member.maxHp }));
    if (type === 'party') {
      return `<div class="jrpg-command-title"><button type="button" data-battle-back>←</button><strong>All allies</strong><span>No target selection required</span></div><button type="button" class="jrpg-confirm-wide" data-battle-target="party">Confirm</button>`;
    }
    return `<div class="jrpg-command-title"><button type="button" data-battle-back>←</button><strong>Select ${type === 'enemy' ? 'enemy' : 'ally'}</strong><span>${escapeHtml(this.state.party[actorIndex]?.name || '')}</span></div><div class="jrpg-target-list">${targets.map((target) => `<button type="button" data-battle-target="${target.index}"><strong>${escapeHtml(target.name)}</strong><span>${Math.round(target.hp)} / ${Math.round(target.maxHp)} HP</span></button>`).join('')}</div>`;
  }

  battleResultTemplate(partyDown) {
    const battle = this.state.battle;
    if (partyDown) return `<div class="jrpg-battle-result"><h4>The company is routed</h4><p>The party will recover at the stage entrance. No gathered materials are lost.</p><button type="button" data-battle-finish="defeat">Recover at entrance</button></div>`;
    if (battle.escaped) return `<div class="jrpg-battle-result"><h4>Retreat complete</h4><p>The encounter pressure falls, but the route remains unsettled.</p><button type="button" data-battle-finish="escape">Return to map</button></div>`;
    const rewards = battle.rewards || { xp: 0, coins: 0, materials: {}, equipment: [] };
    return `<div class="jrpg-battle-result"><h4>${battle.kind === 'boss' ? 'The Heartseed is released' : battle.kind === 'elite' ? 'The seal breaks' : 'Victory'}</h4>
      <p>${rewards.xp} XP each · ${rewards.coins} coins</p>
      <div class="jrpg-drop-list">${Object.entries(rewards.materials).map(([id, quantity]) => `<span>${escapeHtml(itemLabel(id))} ×${quantity}</span>`).join('')}${rewards.equipment.map((id) => `<span>${escapeHtml(itemLabel(id))}</span>`).join('') || '<span>No additional drops</span>'}</div>
      <button type="button" data-battle-finish="victory">Continue</button></div>`;
  }

  openBattle() {
    this.battleMenu = { screen: 'commands', selection: null };
    this.renderBattle();
    this.save('battle-start');
  }

  startEncounter(enemyIds, kind = 'random') {
    startBattle(this.state, enemyIds, kind);
    this.log(kind === 'boss' ? 'The Hollow Hart descends from the echo-crown.' : kind === 'elite' ? 'The Mossbound Custodian wakes beside the sealed waystone.' : 'Movement in the brush becomes an encounter.');
    this.openBattle();
  }

  loop(time) {
    if (!this.mounted) return;
    const delta = Math.min(0.12, Math.max(0, (time - this.lastFrame) / 1000));
    this.lastFrame = time;
    if (this.isActive()) {
      this.pollGamepad(time);
      if (this.state.battle && !this.state.battle.victory && !this.state.battle.escaped && livingParty(this.state).length) {
        const pause = this.state.settings.battleMode === 'wait' && Number.isInteger(this.state.battle.activeActorIndex);
        const readyEnemies = tickAtb(this.state, delta, pause);
        readyEnemies.forEach((enemyIndex) => executeEnemyTurn(this.state, enemyIndex));
        if (livingEnemies(this.state).length === 0 && !this.state.battle.victory) {
          const rewards = resolveVictory(this.state);
          this.syncMaterialsToRealm(rewards?.materials, this.state.battle?.kind || 'battle');
          this.save('battle-victory');
        }
        if (readyEnemies.length) this.save('enemy-turn');
        const actorChanged = this.lastBattleActorIndex !== this.state.battle.activeActorIndex;
        const battleResolved = this.state.battle.victory || this.state.battle.escaped || livingParty(this.state).length === 0;
        if (actorChanged || battleResolved) {
          this.lastBattleActorIndex = this.state.battle.activeActorIndex;
          this.lastBattleRender = time;
          this.renderBattle();
        } else {
          // Enemy turns and ATB ticks update the existing cards/log in place.
          // Active-mode enemy actions must not erase a player's open command
          // or target-selection screen.
          this.refreshBattleState();
        }
      }
    }
    this.frame = requestAnimationFrame((next) => this.loop(next));
  }

  handleKeydown(event) {
    if (!this.isActive()) return;
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) return;
    const key = event.key.toLowerCase();
    const movement = {
      arrowup: [0, -1], w: [0, -1],
      arrowdown: [0, 1], s: [0, 1],
      arrowleft: [-1, 0], a: [-1, 0],
      arrowright: [1, 0], d: [1, 0]
    }[key];
    if (movement && !this.modal && !this.state.battle) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.tryMove(...movement);
      return;
    }
    if (['d', 'e', 's'].includes(key) && (this.state.battle || this.modal)) {
      event.stopImmediatePropagation();
    }
    if (key === 'p') { event.preventDefault(); event.stopImmediatePropagation(); this.openPanel('party'); }
    if (key === 'i') { event.preventDefault(); event.stopImmediatePropagation(); this.openPanel('inventory'); }
    if (key === 'o') { event.preventDefault(); event.stopImmediatePropagation(); this.openPanel('settings'); }
    if (key === 'escape' && this.modal) { event.preventDefault(); this.closeModal(); }
    if (key === 'b') {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (this.state.battle) this.returnToBasecampFromBattle();
      else if (!this.modal) this.leaveExploration(false);
    }
  }

  handlePointer(event) {
    const button = event.target.closest('button');
    if (!button || button.disabled) return;
    this.music.ensure();
    if (button.dataset.move) {
      const [dx, dy] = button.dataset.move.split(',').map(Number);
      this.tryMove(dx, dy);
      return;
    }
    if (button.dataset.jrpgPanel) this.openPanel(button.dataset.jrpgPanel);
    if (button.dataset.jrpgAction === 'save') { this.save('manual'); this.toast('Exploration saved.'); }
    if (button.dataset.jrpgAction === 'fullscreen') document.getElementById('realmFullscreenBtn')?.click();
    if (button.dataset.jrpgAction === 'return-basecamp') this.leaveExploration(false);
    if (button.dataset.jrpgAction === 'abandon') {
      this.openChoice('Abandon this route?', 'Rowan will return safely to Basecamp. Current map position and route progress will reset; shared items and completed rewards remain.', [{ label: 'Abandon route', action: 'abandon-exploration' }, { label: 'Keep exploring', action: 'close' }]);
    }
    if (button.dataset.modalClose !== undefined) this.closeModal();
    if (button.dataset.modalAction) this.runModalAction(button.dataset.modalAction);
    if (button.dataset.partyMove) {
      const [from, to] = button.dataset.partyMove.split(',').map(Number);
      if (reorderParty(this.state, from, to)) { this.save('party-order'); this.openPanel('party'); this.renderAll(); }
    }
    if (button.dataset.unequip) {
      const [partyIndex, slot] = button.dataset.unequip.split(',');
      if (unequipItem(this.state, Number(partyIndex), slot)) { this.save('unequip'); this.openPanel('party'); this.renderAll(); }
    }
    if (button.dataset.battleBasecamp !== undefined) {
      this.returnToBasecampFromBattle();
      return;
    }
    if (button.dataset.battleMode) {
      this.state.settings.battleMode = button.dataset.battleMode;
      this.save('battle-mode');
      this.renderBattle();
    }
    if (button.dataset.battleCommand) this.chooseBattleCommand(button.dataset.battleCommand);
    if (button.dataset.battleBack !== undefined) { this.battleMenu = { screen: 'commands', selection: null }; this.renderBattle(); }
    if (button.dataset.battleSkill) this.chooseSkill(button.dataset.battleSkill);
    if (button.dataset.battleItem) this.chooseItem(button.dataset.battleItem);
    if (button.dataset.battleTarget !== undefined) this.executeSelectedCommand(button.dataset.battleTarget);
    if (button.dataset.battleFinish) this.finishBattleFlow(button.dataset.battleFinish);
  }

  handleChange(event) {
    const select = event.target.closest('select');
    if (!select) return;
    if (select.dataset.equipSelect) {
      const [partyIndex] = select.dataset.equipSelect.split(',');
      if (select.value && equipItem(this.state, Number(partyIndex), select.value)) {
        this.save('equip');
        this.openPanel('party');
        this.renderAll();
      }
    }
    if (select.dataset.setting === 'battle-mode') {
      this.state.settings.battleMode = select.value;
      this.save('settings');
    }
    if (select.dataset.setting === 'music') {
      this.state.settings.music = select.value === 'on';
      this.music.setEnabled(this.state.settings.music);
      this.save('settings');
    }
  }

  tryMove(dx, dy) {
    const now = performance.now();
    if (now < this.moveLockUntil || this.modal || this.state.battle) return;
    this.moveLockUntil = now + 92;
    this.music.ensure();
    const result = movePlayer(this.state, dx, dy);
    if (!result.moved) {
      this.root.querySelector('.jrpg-map-viewport')?.classList.add('is-bumped');
      setTimeout(() => this.root.querySelector('.jrpg-map-viewport')?.classList.remove('is-bumped'), 140);
      return;
    }
    if (result.poi) this.handlePoi(result.poi);
    else if (result.encounterReady) this.startEncounter(chooseRandomEncounter(this.state), 'random');
    this.save('map-step');
    this.renderAll();
  }

  handlePoi(type) {
    const key = poiKey(this.state);
    if (type === 'treasure') {
      this.openChoice('Wayfarer Cache', 'A brass-threaded cache rests under the old stones.', [{ label: 'Open cache', action: 'treasure' }, { label: 'Leave it', action: 'close' }]);
    }
    if (type === 'resource') {
      const reward = gatherResource(this.state);
      markPoiClaimed(this.state, key);
      this.syncMaterialToRealm(reward.id, reward.quantity, 'resource-node');
      this.log(`Gathered ${reward.quantity} ${itemLabel(reward.id)} for ${materialDiscipline(reward.id)} and copied it to the shared stores.`);
      this.toast(`${itemLabel(reward.id)} ×${reward.quantity}`);
    }
    if (type === 'event') {
      const text = this.state.stageIndex === 0
        ? 'A cracked waystone answers Rowan’s token with one clear name and three unlit marks—places future companions may yet claim.'
        : this.state.stageIndex === 1
          ? 'The roots repeat the Custodian’s order: protect the Heartseed from every hand, including those trying to save it.'
          : 'The echo-crown answers Sable’s lantern with a second, impossible pulse beneath the hill.';
      this.openChoice('Waystone Echo', text, [{ label: 'Record the echo', action: 'event' }]);
    }
    if (type === 'rest') this.openChoice('Rainroot Rest', 'A ring of warm stones can restore HP, MP, and clear harmful status effects.', [{ label: 'Make camp', action: 'rest' }, { label: 'Continue', action: 'close' }]);
    if (type === 'elite') {
      if (this.state.flags.eliteDefeated) {
        markPoiClaimed(this.state, key);
        this.log('The Custodian seal remains open.');
      } else {
        this.openChoice('Mossbound Custodian', 'A waystone giant rises from its kneeling vigil. Lightning and fire can crack its layered ward.', [{ label: 'Challenge the elite', action: 'elite' }, { label: 'Withdraw', action: 'close' }]);
      }
    }
    if (type === 'exit') {
      if (this.state.stageIndex === 1 && !this.state.flags.eliteDefeated) {
        this.openStory('The hollow seal holds', 'The eastern route will not open while the Mossbound Custodian remains active.', 'Return to the hollow');
      } else {
        this.openChoice('Waystone Exit', `Leave ${routeStage(this.state).name} and enter the next stage?`, [{ label: 'Continue route', action: 'exit' }, { label: 'Stay', action: 'close' }]);
      }
    }
    if (type === 'boss') {
      if (this.state.flags.bossDefeated) {
        markPoiClaimed(this.state, key);
        this.openStory('A living road', STORY.ending, 'Return to the grove');
      } else {
        this.openChoice('The Hollow Hart', 'The stolen Heartseed beats behind a crown of black antler-glass. This battle cannot be escaped.', [{ label: 'Confront the boss', action: 'boss' }, { label: 'Prepare first', action: 'close' }]);
      }
    }
  }

  runModalAction(action) {
    const key = poiKey(this.state);
    if (action === 'close') { this.closeModal(); return; }
    if (action === 'abandon-exploration') {
      this.state = createInitialState();
      this.state.flags.introSeen = true;
      this.save('route-abandoned');
      this.leaveExploration(false);
      return;
    }
    if (action === 'confirm-reset') {
      this.openChoice('Start a new route?', 'This replaces the current Meridian Grove save with a newly assembled route. Character and route progress in this slice will reset.', [{ label: 'Start new route', action: 'new-route' }, { label: 'Keep current route', action: 'close' }]);
      return;
    }
    if (action === 'treasure') {
      const reward = applyTreasure(this.state);
      markPoiClaimed(this.state, key);
      if (reward.kind === 'material') this.syncMaterialToRealm(reward.id, reward.quantity, 'treasure-cache');
      this.log(`Cache opened: ${itemLabel(reward.id)} ×${reward.quantity}.`);
      this.closeModal();
    }
    if (action === 'event') {
      markPoiClaimed(this.state, key);
      this.state.inventory.keyItems['waystone-record'] = (this.state.inventory.keyItems['waystone-record'] || 0) + 1;
      this.log('A waystone echo is added to the Basecamp quest ledger.');
      this.closeModal();
    }
    if (action === 'rest') {
      restParty(this.state);
      markPoiClaimed(this.state, key);
      this.log('The company rests. HP and MP recover; harmful status effects clear.');
      this.closeModal();
    }
    if (action === 'exit') {
      markPoiClaimed(this.state, key);
      if (advanceStage(this.state)) {
        const stage = routeStage(this.state);
        this.log(`Entered ${stage.name}.`);
        if (this.state.stageIndex === 1 && !this.state.flags.midpointSeen) {
          this.state.flags.midpointSeen = true;
          this.closeModal();
          this.openStory(stage.name, STORY.midpoint, 'Enter the hollow');
        } else if (this.state.stageIndex === 2 && !this.state.flags.finaleSeen) {
          this.state.flags.finaleSeen = true;
          this.closeModal();
          this.openStory(stage.name, STORY.finale, 'Climb to the crown');
        } else this.closeModal();
      }
    }
    if (action === 'elite') {
      this.closeModal();
      this.startEncounter(['mossbound-custodian'], 'elite');
    }
    if (action === 'boss') {
      this.closeModal();
      this.startEncounter(['hollow-hart'], 'boss');
    }
    if (action === 'new-route') {
      this.state = createInitialState();
      this.closeModal();
      this.renderAll();
      this.save('new-route');
      this.openStory('A new Meridian route', STORY.opening, 'Enter the grove', () => { this.state.flags.introSeen = true; this.save('story'); });
    }
    this.save(`modal-${action}`);
    this.renderAll();
  }

  returnToBasecampFromBattle() {
    if (this.state.battle) {
      finishBattle(this.state);
      this.state.encounterMeter = Math.max(0, this.state.encounterMeter - 20);
      this.log('The party withdraws from the encounter and returns to Basecamp.');
    }
    this.save('battle-return-basecamp');
    this.music.setActive(false);
    Promise.resolve(this.onExit?.()).catch((error) => console.error('Unable to return to Basecamp.', error));
  }

  leaveExploration(abandon = false) {
    if (this.state.battle) {
      this.returnToBasecampFromBattle();
      return;
    }
    if (abandon) this.state = createInitialState();
    this.save(abandon ? 'route-abandoned' : 'return-basecamp');
    this.music.setActive(false);
    Promise.resolve(this.onExit?.()).catch((error) => console.error('Unable to return to Basecamp.', error));
  }

  chooseBattleCommand(command) {
    const actorIndex = this.state.battle?.activeActorIndex;
    if (!Number.isInteger(actorIndex)) return;
    if (command === 'attack') {
      this.battleMenu = { screen: 'targets', selection: { command: 'attack', target: 'enemy' } };
    } else if (command === 'ability') {
      this.battleMenu = { screen: 'abilities', selection: null };
    } else if (command === 'magic') {
      this.battleMenu = { screen: 'magic', selection: null };
    } else if (command === 'item') {
      this.battleMenu = { screen: 'items', selection: null };
    } else if (command === 'defend' || command === 'escape') {
      const result = executePartyCommand(this.state, actorIndex, command);
      if (!result.ok) this.state.battle.log.push(result.reason);
      this.battleMenu = { screen: 'commands', selection: null };
      this.afterPartyAction();
    }
    this.renderBattle();
  }

  chooseSkill(abilityId) {
    const ability = ABILITIES[abilityId];
    if (!ability) return;
    this.battleMenu = { screen: 'targets', selection: { command: ability.kind, abilityId, target: ability.target } };
    this.renderBattle();
  }

  chooseItem(itemId) {
    const item = ITEMS[itemId];
    if (!item) return;
    this.battleMenu = { screen: 'targets', selection: { command: 'item', itemId, target: item.target } };
    this.renderBattle();
  }

  executeSelectedCommand(targetValue) {
    const actorIndex = this.state.battle?.activeActorIndex;
    const selection = this.battleMenu.selection;
    if (!Number.isInteger(actorIndex) || !selection) return;
    const payload = { ...selection };
    if (targetValue !== 'party') payload.targetIndex = Number(targetValue);
    const result = executePartyCommand(this.state, actorIndex, selection.command, payload);
    if (!result.ok) {
      this.state.battle.log.push(result.reason);
    } else {
      this.battleMenu = { screen: 'commands', selection: null };
    }
    this.afterPartyAction();
  }

  afterPartyAction() {
    if (livingEnemies(this.state).length === 0 && !this.state.battle.victory) {
      const rewards = resolveVictory(this.state);
      this.syncMaterialsToRealm(rewards?.materials, this.state.battle?.kind || 'battle');
    }
    this.save('party-turn');
    this.renderBattle();
    this.renderPartyStrip();
    this.renderResourceRibbon();
  }

  finishBattleFlow(outcome) {
    const kind = this.state.battle?.kind;
    if (outcome === 'defeat') {
      finishBattle(this.state);
      this.state.party.forEach((member) => {
        member.hp = Math.max(1, Math.round(member.maxHp * 0.55));
        member.mp = Math.round(member.maxMp * 0.45);
        member.statuses = [];
      });
      this.state.player = { ...this.state.map.start, facing: 'right', steps: 0 };
      this.state.encounterMeter = 0;
      this.log('The company regroups at the stage entrance.');
    } else {
      finishBattle(this.state);
      if (kind === 'elite' && outcome === 'victory') {
        markPoiClaimed(this.state);
        this.log('The Custodian seal opens. Sunsteel and waystone fragments return to the shared stores.');
      }
      if (kind === 'boss' && outcome === 'victory') {
        markPoiClaimed(this.state);
        this.state.flags.endingSeen = true;
        this.log('The Hollow Hart falls and the Meridian road opens.');
        this.openStory('The Heartseed Road', STORY.ending, 'Explore the restored crown');
      }
      if (outcome === 'escape') this.log('The party retreats and regains its formation.');
    }
    const layer = this.byId('jrpgBattleLayer');
    if (layer) layer.hidden = true;
    this.save(`battle-${outcome}`);
    this.renderAll();
  }

  openPanel(panel) {
    if (this.state.battle) return;
    if (panel === 'party') this.openModal('Party Management', this.partyPanelTemplate(), { wide: true });
    if (panel === 'inventory') this.openModal('Shared Inventory', this.inventoryPanelTemplate(), { wide: true });
    if (panel === 'settings') this.openModal('Exploration Settings', this.settingsPanelTemplate());
  }

  partyPanelTemplate() {
    const equipmentOptions = (slot) => Object.entries(this.state.inventory.equipment)
      .filter(([id, quantity]) => quantity > 0 && EQUIPMENT[id]?.slot === slot)
      .map(([id, quantity]) => `<option value="${id}">${escapeHtml(EQUIPMENT[id].name)} ×${quantity}</option>`).join('');
    return `<div class="jrpg-party-manage">${this.state.party.map((member, index) => {
      const stats = derivedStats(member);
      return `<article class="jrpg-manage-card">${portrait(heroArt(member.id), member.name)}<div class="jrpg-manage-copy"><div class="jrpg-manage-title"><div><h4>${index + 1}. ${escapeHtml(member.name)}</h4><span>Lv ${member.level} ${escapeHtml(member.role)} · XP ${member.xp}/${xpForNextLevel(member.level)}</span></div><div><button type="button" data-party-move="${index},${Math.max(0, index - 1)}" ${index === 0 ? 'disabled' : ''}>↑</button><button type="button" data-party-move="${index},${Math.min(3, index + 1)}" ${index === 3 ? 'disabled' : ''}>↓</button></div></div>
      <div class="jrpg-stat-grid"><span>HP <b>${member.hp}/${member.maxHp}</b></span><span>MP <b>${member.mp}/${member.maxMp}</b></span><span>ATK <b>${stats.attack}</b></span><span>MAG <b>${stats.magic}</b></span><span>DEF <b>${stats.defence}</b></span><span>SPD <b>${stats.speed}</b></span></div>
      <div class="jrpg-equipment-grid">${['weapon', 'armour', 'accessory'].map((slot) => {
        const equippedId = member.equipment[slot];
        return `<label><span>${titleCase(slot)}</span><strong>${escapeHtml(equippedId ? EQUIPMENT[equippedId]?.name : 'Empty')}</strong><div><select data-equip-select="${index},${slot}"><option value="">Equip from inventory…</option>${equipmentOptions(slot)}</select>${equippedId ? `<button type="button" data-unequip="${index},${slot}">Unequip</button>` : ''}</div></label>`;
      }).join('')}</div>
      <div class="jrpg-ability-chips">${member.abilities.map((id) => `<span><b>${escapeHtml(ABILITIES[id].name)}</b>${escapeHtml(ABILITIES[id].description)}</span>`).join('')}</div></div></article>`;
    }).join('')}</div>`;
  }

  inventoryPanelTemplate() {
    const itemRows = Object.entries(this.state.inventory.items).map(([id, quantity]) => `<article><strong>${escapeHtml(ITEMS[id]?.name || id)} ×${quantity}</strong><span>${escapeHtml(ITEMS[id]?.description || '')}</span></article>`).join('');
    const disciplineRows = DISCIPLINES.map((discipline) => {
      const rows = Object.entries(this.state.inventory.materials).filter(([id, quantity]) => quantity > 0 && MATERIALS[id]?.discipline === discipline);
      return `<section class="jrpg-inventory-discipline"><h4>${titleCase(discipline)}</h4>${rows.length ? rows.map(([id, quantity]) => `<article><strong>${escapeHtml(MATERIALS[id].name)} ×${quantity}</strong><span>${escapeHtml(MATERIALS[id].description)}</span></article>`).join('') : '<p>Nothing gathered yet.</p>'}</section>`;
    }).join('');
    const equipmentRows = Object.entries(this.state.inventory.equipment).filter(([, quantity]) => quantity > 0).map(([id, quantity]) => `<article><strong>${escapeHtml(EQUIPMENT[id]?.name || id)} ×${quantity}</strong><span>${escapeHtml(EQUIPMENT[id]?.description || '')}</span></article>`).join('') || '<p>No unequipped gear.</p>';
    return `<div class="jrpg-inventory-summary"><span><b>${this.state.inventory.coins}</b> coins</span><span><b>${Object.values(this.state.inventory.keyItems).reduce((sum, amount) => sum + amount, 0)}</b> quest records</span></div><div class="jrpg-inventory-columns"><section><h3>Battle supplies</h3>${itemRows}</section><section><h3>Equipment</h3>${equipmentRows}</section></div><h3>Crafting and trade materials</h3><p class="jrpg-shared-inventory-note">Every gathered material is retained in this expedition record and also converted into the existing shared Realm material catalogue for Blacksmith, Armourer, Tailoring, Alchemy, Cooking, Tools/quests, and Basecamp merchant trading.</p><div class="jrpg-discipline-grid">${disciplineRows}</div>`;
  }

  settingsPanelTemplate() {
    return `<div class="jrpg-settings-grid">
      <label><span>ATB battle setting</span><select data-setting="battle-mode"><option value="wait" ${this.state.settings.battleMode === 'wait' ? 'selected' : ''}>Wait — gauges pause while choosing</option><option value="active" ${this.state.settings.battleMode === 'active' ? 'selected' : ''}>Active — gauges continue while choosing</option></select></label>
      <label><span>Meridian Grove music</span><select data-setting="music"><option value="on" ${this.state.settings.music ? 'selected' : ''}>On — original synthesized motif</option><option value="off" ${!this.state.settings.music ? 'selected' : ''}>Off</option></select></label>
      <div class="jrpg-settings-note"><strong>Controls</strong><p>Keyboard: arrows or WASD. Touch: on-screen direction pad. Controller: Gamepad API D-pad and left stick. Battle commands are menu-driven for pointer, touch, and keyboard focus.</p></div>
      <button type="button" class="jrpg-danger-btn" data-modal-action="confirm-reset">Start a new procedural route</button>
    </div>`;
  }

  openChoice(title, body, actions) {
    const buttons = actions.map((action) => `<button type="button" data-modal-action="${action.action}" class="${action.action === 'close' ? 'secondary' : ''}">${escapeHtml(action.label)}</button>`).join('');
    this.openModal(title, `<p>${escapeHtml(body)}</p><div class="jrpg-modal-actions">${buttons}</div>`);
  }

  openStory(title, body, buttonLabel, onClose) {
    this.openModal(title, `<div class="jrpg-story-panel"><span class="jrpg-kicker">Original Meridian Grove story</span><p>${escapeHtml(body)}</p></div><div class="jrpg-modal-actions"><button type="button" data-modal-close>${escapeHtml(buttonLabel || 'Continue')}</button></div>`, { onClose });
  }

  openModal(title, body, options = {}) {
    const layer = this.byId('jrpgModalLayer');
    if (!layer) return;
    this.modal = { title, onClose: options.onClose || null };
    layer.hidden = false;
    layer.innerHTML = `<div class="jrpg-modal-backdrop" data-modal-close></div><article class="jrpg-modal${options.wide ? ' is-wide' : ''}" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}"><header><h3>${escapeHtml(title)}</h3><button type="button" data-modal-close aria-label="Close">×</button></header><div class="jrpg-modal-body">${body}</div></article>`;
  }

  closeModal() {
    const callback = this.modal?.onClose;
    this.modal = null;
    const layer = this.byId('jrpgModalLayer');
    if (layer) { layer.hidden = true; layer.innerHTML = ''; }
    if (callback) callback();
  }

  toast(message) {
    const viewport = this.byId('jrpgMapViewport');
    if (!viewport) return;
    viewport.querySelector('.jrpg-toast')?.remove();
    const toast = document.createElement('div');
    toast.className = 'jrpg-toast';
    toast.textContent = message;
    viewport.append(toast);
    setTimeout(() => toast.remove(), 2200);
  }

  log(message) {
    this.state.routeLog.push(message);
    this.state.routeLog = this.state.routeLog.slice(-30);
  }

  updateSaveStatus(reason) {
    const element = this.byId('jrpgSaveStatus');
    if (!element) return;
    if (reason === 'save-error') element.textContent = 'Save unavailable';
    else element.textContent = `Saved ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }

  pollGamepad(time) {
    if (!navigator.getGamepads || time < this.gamepadLockUntil || this.modal || this.state.battle) return;
    const gamepad = Array.from(navigator.getGamepads()).find(Boolean);
    if (!gamepad) return;
    const axisX = gamepad.axes[0] || 0;
    const axisY = gamepad.axes[1] || 0;
    const left = gamepad.buttons[14]?.pressed || axisX < -0.55;
    const right = gamepad.buttons[15]?.pressed || axisX > 0.55;
    const up = gamepad.buttons[12]?.pressed || axisY < -0.55;
    const down = gamepad.buttons[13]?.pressed || axisY > 0.55;
    if (left || right || up || down) {
      this.gamepadLockUntil = time + 165;
      if (Math.abs(axisX) > Math.abs(axisY)) this.tryMove(left ? -1 : 1, 0);
      else if (up || down) this.tryMove(0, up ? -1 : 1);
    }
  }

  byId(id) { return this.root.querySelector(`#${id}`); }
  text(id, value) { const element = this.byId(id); if (element) element.textContent = value; }
}

export function mountMeridianGrove(options) {
  const game = new MeridianGroveGame(options);
  game.mount();
  return game;
}

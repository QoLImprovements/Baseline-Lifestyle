import { LEVEL_BY_ID, ZONE_BY_ID } from '../data/calorie-escape-data.js';
import { createRunSnapshot, mulberry32, trainAbility } from './calorie-escape-engine.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export const controls = {
  bind() {
    this.root.addEventListener('click', (event) => {
      const action = event.target.closest('[data-ce-action]')?.dataset.ceAction;
      if (action) this.action(action);
      const zoneId = event.target.closest('[data-ce-zone]')?.dataset.ceZone;
      if (zoneId) this.selectZone(zoneId);
      const levelId = event.target.closest('[data-ce-level]')?.dataset.ceLevel;
      if (levelId) this.select(levelId);
      const abilityId = event.target.closest('[data-ce-ability]')?.dataset.ceAbility;
      if (abilityId) this.train(abilityId);
    });
    this.root.querySelectorAll('[data-ce-control]').forEach((button) => {
      const control = button.dataset.ceControl;
      button.addEventListener('pointerdown', (event) => { event.preventDefault(); this.control(control, true); });
      button.addEventListener('pointerup', (event) => { event.preventDefault(); this.control(control, false); });
      button.addEventListener('pointercancel', () => this.control(control, false));
    });
    document.addEventListener('keydown', this.keyDown, true);
    document.addEventListener('keyup', this.keyUp, true);
    document.addEventListener('visibilitychange', this.visibility);
    window.addEventListener('resize', this.resize, { passive: true });
  },

  onKey(event, down) {
    const key = String(event.key || '').toLowerCase();
    const claimed = ['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'a', 'd', 'w', 's', 'j', 'x', ' ', 'escape', 'p', 'b'];
    if (!claimed.includes(key)) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    if (!down) {
      if (['arrowup', 'w', ' '].includes(key)) this.control('jump', false);
      if (['arrowdown', 's'].includes(key)) this.control('slide', false);
      return;
    }
    if (key === 'b') return this.onExit();
    if (key === 'p' || key === 'escape') return this.run?.active ? this.setPause() : this.showMenu();
    if (event.repeat && !['a', 'd', 'arrowleft', 'arrowright'].includes(key)) return;
    if (['a', 'arrowleft'].includes(key)) this.control('left', true);
    if (['d', 'arrowright'].includes(key)) this.control('right', true);
    if (['w', 'arrowup', ' '].includes(key)) this.control('jump', true);
    if (['j', 'x'].includes(key)) this.control('attack', true);
    if (['s', 'arrowdown'].includes(key)) this.control('slide', true);
  },

  control(control, on) {
    if (!this.run?.active || this.paused) return;
    this.sound.ensure();
    if (control === 'left' && on) this.move(-1);
    if (control === 'right' && on) this.move(1);
    if (control === 'jump') { this.player.jumpHeld = on; if (on) this.jump(); }
    if (control === 'attack' && on) this.attack();
    if (control === 'slide') {
      if (on) this.slide();
      else this.player.sliding = Math.min(this.player.sliding, 0.12);
    }
  },

  move(direction) {
    const lane = clamp(this.player.lane + direction, -1, 1);
    if (lane !== this.player.lane) { this.player.lane = lane; this.player.lean = direction; }
  },

  jump() {
    if (this.player.jumpY > 4 || this.player.sliding > 0.05) return;
    this.player.jumpVelocity = this.run.modifiers.jumpImpulse;
    this.player.jumpHeldMs = 0;
    this.player.sliding = 0;
    this.sound.action('jump');
  },

  attack() {
    if (this.player.sliding > 0.08) return;
    this.player.attacking = this.run.modifiers.attackDuration;
    this.sound.action('attack');
  },

  slide() {
    if (!this.state.settings.slideEnabled || this.player.jumpY > 8) return;
    this.player.sliding = this.run.modifiers.slideDuration;
    this.player.attacking = 0;
    this.sound.action('slide');
  },

  setPause(force) {
    this.paused = typeof force === 'boolean' ? force : !this.paused;
    this.q('#cePause').hidden = !this.paused;
    this.last = performance.now();
  },

  action(action) {
    if (action === 'start') this.start(this.state.selectedLevelId);
    else if (action === 'retry') this.start(this.state.lastRun?.levelId || this.state.selectedLevelId);
    else if (action === 'next') this.start(this.state.selectedLevelId);
    else if (action === 'menu') this.showMenu();
    else if (action === 'basecamp') this.onExit();
    else if (action === 'use-stew') {
      const result = this.useFood('trail_stew');
      this.notice(result?.ok ? 'Trail Stew active: extra stamina.' : 'No Trail Stew in the shared Workshop.');
      this.renderMenu();
    } else if (action === 'sound') {
      this.state.settings.sound = !this.state.settings.sound;
      this.sound.enabled = this.state.settings.sound;
      this.save('sound-setting');
    }
  },

  selectZone(zoneId) {
    const zone = ZONE_BY_ID[zoneId];
    if (!zone) return;
    const firstUnlocked = zone.levels.find((levelId) => this.state.unlockedLevels.includes(levelId));
    if (!firstUnlocked) return;
    this.state.selectedZoneId = zoneId;
    if (!zone.levels.includes(this.state.selectedLevelId) || !this.state.unlockedLevels.includes(this.state.selectedLevelId)) this.state.selectedLevelId = firstUnlocked;
    this.save('zone-selected');
    this.renderMenu();
  },

  select(levelId) {
    if (!this.state.unlockedLevels.includes(levelId)) return;
    this.state.selectedLevelId = levelId;
    this.state.selectedZoneId = LEVEL_BY_ID[levelId]?.zoneId || this.state.selectedZoneId;
    this.save('level-selected');
    this.renderMenu();
  },

  train(abilityId) {
    const result = trainAbility(this.state, abilityId);
    this.state = result.state;
    if (!result.ok) return this.notice(result.code === 'LEVEL_REQUIRED' ? `Unlocks at level ${result.required}.` : 'Ability point required.');
    this.save('ability-trained');
    this.renderMenu();
  },

  start(levelId) {
    if (!this.state.unlockedLevels.includes(levelId)) return;
    this.level = LEVEL_BY_ID[levelId];
    this.run = createRunSnapshot(this.state, levelId, this.resolveEffects() || {}, Date.now());
    this.random = mulberry32(this.run.seed);
    this.obstacles = [];
    this.player = this.newPlayer();
    this.paused = false;
    this.q('#ceMenu').hidden = true;
    this.q('#ceResult').hidden = true;
    this.q('#ceRun').hidden = false;
    this.q('#cePause').hidden = true;
    this.text('ceRunLevel', this.level.name);
    this.text('ceObjectiveText', this.level.objective.label);
    this.last = performance.now();
    this.hud();
  },

  showMenu() {
    this.run = null;
    this.obstacles = [];
    this.q('#ceRun').hidden = true;
    this.q('#ceResult').hidden = true;
    this.q('#ceMenu').hidden = false;
    this.renderMenu();
  },

  frame(time) {
    if (this.dead) return;
    const dt = this.last ? clamp((time - this.last) / 1000, 0, 0.05) : 0;
    this.last = time;
    this.gamepad();
    if (this.run?.active && !this.paused) this.update(dt);
    this.draw();
    this.raf = requestAnimationFrame((next) => this.frame(next));
  },

  gamepad() {
    if (!this.run?.active || this.paused || !globalThis.navigator?.getGamepads) return;
    const pad = Array.from(globalThis.navigator.getGamepads()).find(Boolean);
    if (!pad) return;
    const horizontal = Number(pad.axes?.[0] || 0);
    const now = performance.now();
    if (horizontal < -0.55 && now - (this.pad.left || 0) > 260) { this.move(-1); this.pad.left = now; }
    if (horizontal > 0.55 && now - (this.pad.right || 0) > 260) { this.move(1); this.pad.right = now; }
    [['jump', 0], ['slide', 1], ['attack', 2]].forEach(([action, index]) => {
      const pressed = Boolean(pad.buttons?.[index]?.pressed);
      if (pressed && !this.pad[action]) this.control(action, true);
      if (!pressed && this.pad[action]) this.control(action, false);
      this.pad[action] = pressed;
    });
  }
};

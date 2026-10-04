import { CALORIE_ESCAPE_BUILD } from '../data/calorie-escape-data.js';
import { normaliseCalorieEscapeState } from './calorie-escape-engine.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const lerp = (a, b, t) => a + (b - a) * t;
const quietSound = (enabled) => ({ enabled, ensure() {}, beat() {}, action() {} });
export const gameShell = {
  setup({ root, loadState, persistState, resolveEffects, getInventorySummary, useFood, onExit } = {}) {
    if (!root) throw new TypeError('Calorie Escape requires a root element.');
    this.root = root;
    this.loadState = loadState || (() => null);
    this.persistState = persistState || (() => null);
    this.resolveEffects = resolveEffects || (() => ({}));
    this.getInventorySummary = getInventorySummary || (() => ({ food: {}, equipment: [] }));
    this.useFood = useFood || (() => ({ ok: false }));
    this.onExit = onExit || (() => {});
    this.state = normaliseCalorieEscapeState(this.loadState());
    this.run = null;
    this.level = null;
    this.random = Math.random;
    this.obstacles = [];
    this.player = this.newPlayer();
    this.sound = quietSound(this.state.settings.sound);
    this.pad = {};
    this.last = 0;
    this.raf = 0;
    this.paused = false;
    this.dead = false;
    this.shake = 0;
    this.flash = 0;
    this.toast = 0;
    this.keyDown = (event) => this.onKey(event, true);
    this.keyUp = (event) => this.onKey(event, false);
    this.visibility = () => { if (document.hidden && this.run?.active) this.setPause(true); };
    this.resize = () => this.resizeCanvas();
    return this;
  },

  newPlayer() {
    return { lane: 0, visualLane: 0, jumpY: 0, jumpVelocity: 0, jumpHeld: false, jumpHeldMs: 0, sliding: 0, attacking: 0, invulnerable: 0, lean: 0 };
  },

  mount() {
    this.root.classList.add('calorie-escape-mounted');
    this.root.dataset.calorieEscapeBuild = CALORIE_ESCAPE_BUILD;
    this.root.innerHTML = this.template();
    this.canvas = this.q('#calorieEscapeCanvas');
    this.context = this.canvas?.getContext?.('2d') || null;
    this.bind();
    this.resizeCanvas();
    this.renderMenu();
    this.raf = requestAnimationFrame((time) => this.frame(time));
    return this;
  },

  resizeCanvas() {
    if (!this.canvas) return;
    const ratio = Math.min(2, Math.max(1, globalThis.devicePixelRatio || 1));
    this.canvas.width = 960 * ratio;
    this.canvas.height = 540 * ratio;
    this.context?.setTransform?.(ratio, 0, 0, ratio, 0, 0);
  },

  save(reason) {
    this.state.updatedAt = Date.now();
    this.persistState(this.state, reason, []);
  },

  destroy() {
    if (this.dead) return;
    this.dead = true;
    cancelAnimationFrame(this.raf);
    document.removeEventListener('keydown', this.keyDown, true);
    document.removeEventListener('keyup', this.keyUp, true);
    document.removeEventListener('visibilitychange', this.visibility);
    window.removeEventListener('resize', this.resize);
    this.save('scene-exit');
    this.root.innerHTML = '';
  },

  runnerVisual(ctx) {
    const player = this.player;
    const x = 480 + player.visualLane * 220;
    const y = 452 - player.jumpY;
    const phase = (this.run?.time || 0) * 13;
    const stride = player.jumpY > 6 ? 0 : Math.sin(phase) * 15;
    const bob = player.jumpY > 6 ? 0 : Math.abs(Math.sin(phase * .5)) * 3;
    const attack = player.attacking > 0;

    ctx.save();
    ctx.translate(x, y - bob);
    if (player.sliding > 0.05) {
      ctx.translate(0, 18);
      ctx.rotate(-0.18);
      ctx.scale(1.18, 0.72);
    }
    if (player.invulnerable > 0 && Math.floor(player.invulnerable * 16) % 2 === 0) ctx.globalAlpha = 0.42;

    // Grounding shadow.
    ctx.save();
    ctx.translate(0, 7);
    ctx.scale(1, .34);
    ctx.fillStyle = 'rgba(0,0,0,.34)';
    ctx.beginPath();
    ctx.arc(0, 0, 55, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Scarf trails backwards with speed.
    ctx.strokeStyle = '#a83f3f';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-18, -72);
    ctx.quadraticCurveTo(-48 - Math.abs(stride), -64, -72 - Math.abs(stride), -49);
    ctx.stroke();

    // Legs.
    ctx.strokeStyle = '#172126';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(-12, -19);
    ctx.lineTo(-22 - stride * .55, 23);
    ctx.moveTo(12, -19);
    ctx.lineTo(25 + stride * .55, 23);
    ctx.stroke();

    // Torso and hood.
    const torso = ctx.createLinearGradient(0, -95, 0, -18);
    torso.addColorStop(0, '#31424b');
    torso.addColorStop(1, '#172229');
    ctx.fillStyle = torso;
    ctx.strokeStyle = '#d4aa5f';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(-34, -90, 68, 76, 20);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#111b21';
    ctx.beginPath();
    ctx.arc(0, -101, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d4aa5f';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Face slit.
    ctx.fillStyle = '#d9bd91';
    ctx.beginPath();
    ctx.roundRect(-16, -106, 32, 10, 5);
    ctx.fill();

    // Arms: stronger forward reach during attack.
    ctx.strokeStyle = '#223039';
    ctx.lineWidth = 13;
    ctx.beginPath();
    ctx.moveTo(-25, -68);
    ctx.lineTo(-43 + stride * .3, -34);
    ctx.moveTo(25, -68);
    ctx.lineTo(attack ? 63 : 42 - stride * .3, attack ? -52 : -30);
    ctx.stroke();

    // Waist sash.
    ctx.fillStyle = '#a83f3f';
    ctx.fillRect(-35, -31, 70, 10);

    if (attack) {
      ctx.strokeStyle = '#fff0b4';
      ctx.lineWidth = 7;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(42, -53, 58, -0.78, 0.58);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(255,240,180,.28)';
      ctx.lineWidth = 15;
      ctx.beginPath();
      ctx.arc(42, -53, 72, -0.7, 0.46);
      ctx.stroke();
    }
    ctx.restore();
  },

  pressureVisual(ctx) {
    const ratio = clamp(this.run.pressure / this.run.pressureCapacity, 0, 1);
    const y = lerp(118, 292, ratio);
    const scale = lerp(0.42, 0.92, ratio);
    const phase = (this.run?.time || 0) * 7;
    const zone = this.currentZone?.() || { id: 'city', pursuer: 'Chef Brasa' };
    const looks = {
      city: { body:'#eee4d1', edge:'#7a342c', accent:'#c34e3f', label:'CHEF BRASA' },
      desert: { body:'#8f5734', edge:'#f0c576', accent:'#50301f', label:'DUST HERD' },
      forest: { body:'#365f40', edge:'#d5d08a', accent:'#1e3a29', label:'BRAMBLE BEAR' },
      'snow-mountain': { body:'#dcecf0', edge:'#466b82', accent:'#8eb9c8', label:'WHITEFALL' }
    };
    const look = looks[zone.id] || looks.city;

    ctx.save();
    ctx.translate(480 + Math.sin(phase) * 4, y);
    ctx.scale(scale, scale);

    // Shadow and body.
    ctx.fillStyle = 'rgba(0,0,0,.28)';
    ctx.beginPath();
    ctx.ellipse(0, 45, 76, 19, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = look.body;
    ctx.strokeStyle = look.edge;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.roundRect(-48, -70, 96, 112, 34);
    ctx.fill();
    ctx.stroke();

    // Head.
    ctx.beginPath();
    ctx.arc(0, -86, 31, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Zone-specific silhouette details.
    ctx.fillStyle = look.accent;
    if (zone.id === 'city') {
      ctx.beginPath();
      ctx.arc(-20, -113, 18, Math.PI, 0);
      ctx.arc(0, -121, 21, Math.PI, 0);
      ctx.arc(20, -113, 18, Math.PI, 0);
      ctx.fill();
      ctx.fillRect(-34, -113, 68, 12);
    } else if (zone.id === 'desert') {
      ctx.beginPath();
      ctx.moveTo(-22, -104); ctx.lineTo(-55, -128); ctx.lineTo(-37, -89);
      ctx.moveTo(22, -104); ctx.lineTo(55, -128); ctx.lineTo(37, -89);
      ctx.fill();
    } else if (zone.id === 'forest') {
      ctx.beginPath();
      ctx.arc(-24, -108, 13, 0, Math.PI * 2);
      ctx.arc(24, -108, 13, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(-36, -99); ctx.lineTo(0, -133); ctx.lineTo(36, -99);
      ctx.closePath();
      ctx.fill();
    }

    // Eyes and pressure expression.
    ctx.fillStyle = look.edge;
    ctx.beginPath();
    ctx.arc(-10, -88, 4 + ratio * 2, 0, Math.PI * 2);
    ctx.arc(10, -88, 4 + ratio * 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = look.edge;
    ctx.font = '900 12px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(look.label, 0, 17);
    ctx.restore();
  }
};

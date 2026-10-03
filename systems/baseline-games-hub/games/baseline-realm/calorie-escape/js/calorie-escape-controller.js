import { CALORIE_ESCAPE_BUILD } from '../data/calorie-escape-data.js';
import { normaliseCalorieEscapeState } from './calorie-escape-engine.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const lerp = (a, b, t) => a + (b - a) * t;
const quietSound = (enabled) => ({ enabled, ensure() {}, beat() {}, action() {} });
const embeddedStyle = `<style>.calorie-escape-screen{position:absolute;inset:0;z-index:80;overflow:hidden;background:#08111c;color:#f7edd8}.ce-game{position:absolute;inset:0;display:grid;grid-template-rows:auto 1fr;background:#102237}.ce-header{display:flex;justify-content:space-between;padding:12px;background:#0d1d2d}.ce-body{position:relative}.ce-menu,.ce-run,.ce-result{position:absolute;inset:0}.ce-menu[hidden],.ce-run[hidden],.ce-result[hidden]{display:none!important}.ce-stage-shell canvas{width:100%;height:100%}</style>`;

export const controllerMethods = {
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
    this.root.innerHTML = embeddedStyle + this.template();
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
    ctx.save();
    ctx.translate(x, y);
    if (player.sliding > 0.05) ctx.scale(1.2, 0.58);
    if (player.invulnerable > 0 && Math.floor(player.invulnerable * 16) % 2 === 0) ctx.globalAlpha = 0.45;
    ctx.fillStyle = '#172538';
    ctx.strokeStyle = '#f0c46d';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.roundRect(-52, -88, 104, 124, 44);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#d34e52';
    ctx.fillRect(-52, -10, 104, 13);
    ctx.fillStyle = '#f5e1ba';
    ctx.font = '900 34px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('N', 0, -37);
    if (player.attacking > 0) {
      ctx.strokeStyle = '#fff0b4';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(45, -34);
      ctx.lineTo(92, -56);
      ctx.stroke();
    }
    ctx.restore();
  },

  pressureVisual(ctx) {
    const ratio = clamp(this.run.pressure / this.run.pressureCapacity, 0, 1);
    const y = lerp(125, 285, ratio);
    const scale = lerp(0.48, 0.9, ratio);
    const zone = this.currentZone?.() || { id: 'city', pursuer: 'Chef Brasa' };
    const looks = {
      city: { fill:'#f3eee2', edge:'#6a3029', mark:'CHEF', sub:'BRASA' },
      desert: { fill:'#8f5734', edge:'#f0c576', mark:'DUST', sub:'HERD' },
      forest: { fill:'#3f6848', edge:'#d5d08a', mark:'BRAMBLE', sub:'BEAR' },
      'snow-mountain': { fill:'#dcecf0', edge:'#466b82', mark:'WHITEFALL', sub:'SNOW' }
    };
    const look = looks[zone.id] || looks.city;
    ctx.save();
    ctx.translate(480, y);
    ctx.scale(scale, scale);
    ctx.fillStyle = look.fill;
    ctx.strokeStyle = look.edge;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.roundRect(-62, -84, 124, 136, 48);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = look.edge;
    ctx.font = '900 16px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(look.mark, 0, -20);
    ctx.font = '900 11px system-ui';
    ctx.fillText(look.sub, 0, 3);
    ctx.restore();
  }
};

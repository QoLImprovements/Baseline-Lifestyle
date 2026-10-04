import { ZONE_BY_ID } from '../data/calorie-escape-data.js';

const LOGICAL_WIDTH = 960;
const LOGICAL_HEIGHT = 540;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const lerp = (a, b, t) => a + (b - a) * t;

function road(ctx, { horizon = 142, road = '#222a2f', line = '#d7bd73', shoulder = '#25333a' } = {}) {
  ctx.fillStyle = shoulder;
  ctx.fillRect(0, horizon, LOGICAL_WIDTH, LOGICAL_HEIGHT - horizon);
  ctx.fillStyle = road;
  ctx.beginPath();
  ctx.moveTo(375, horizon);
  ctx.lineTo(585, horizon);
  ctx.lineTo(930, LOGICAL_HEIGHT);
  ctx.lineTo(30, LOGICAL_HEIGHT);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = line;
  ctx.lineWidth = 4;
  [-1, 0, 1].forEach((lane) => {
    ctx.beginPath();
    ctx.moveTo(480 + lane * 52, horizon);
    ctx.lineTo(480 + lane * 218, LOGICAL_HEIGHT);
    ctx.stroke();
  });
  ctx.strokeStyle = 'rgba(255,255,255,.2)';
  ctx.lineWidth = 2;
  for (let index = 0; index < 9; index += 1) {
    const t = index / 9;
    const y = lerp(horizon + 10, LOGICAL_HEIGHT, t * t);
    const half = lerp(110, 450, t * t);
    ctx.beginPath();
    ctx.moveTo(480 - half, y);
    ctx.lineTo(480 + half, y);
    ctx.stroke();
  }
}

export const worldRenderer = {
  draw() {
    if (!this.context || !this.canvas) return;
    const ctx = this.context;
    ctx.save();
    ctx.clearRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
    const shakeX = this.shake > 0 ? (this.random() - 0.5) * 10 * this.shake : 0;
    const shakeY = this.shake > 0 ? (this.random() - 0.5) * 6 * this.shake : 0;
    ctx.translate(shakeX, shakeY);
    this.drawZone(ctx);
    if (this.run) {
      this.pressureVisual(ctx);
      this.activeObstacles.slice().sort((a, b) => b.depth - a.depth).forEach((obstacle) => this.drawObstacle(ctx, obstacle));
      this.runnerVisual(ctx);
      this.drawSpeedLines(ctx);
    } else {
      this.drawMenuScene(ctx);
    }
    if (this.flash > 0) {
      ctx.fillStyle = `rgba(255,88,64,${this.flash * 0.18})`;
      ctx.fillRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
    }
    ctx.restore();
  },

  currentZone() {
    const zoneId = this.level?.zoneId || this.state?.selectedZoneId || 'city';
    return ZONE_BY_ID[zoneId] || ZONE_BY_ID.city;
  },

  drawZone(ctx) {
    const zone = this.currentZone();
    if (zone.id === 'desert') return this.drawDesert(ctx);
    if (zone.id === 'forest') return this.drawForest(ctx);
    if (zone.id === 'snow-mountain') return this.drawSnowMountain(ctx);
    return this.drawCity(ctx);
  },

  drawCity(ctx) {
    const sky = ctx.createLinearGradient(0, 0, 0, LOGICAL_HEIGHT);
    sky.addColorStop(0, '#101a2d'); sky.addColorStop(.38, '#315475'); sky.addColorStop(.62, '#d38b55'); sky.addColorStop(1, '#26353d');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
    ctx.fillStyle = 'rgba(255,210,126,.52)'; ctx.beginPath(); ctx.arc(720, 86, 42, 0, Math.PI * 2); ctx.fill();
    const skyline = [[0,116,185],[92,78,223],[170,126,175],[285,92,210],[380,142,160],[496,85,218],[585,125,180],[690,72,228],[774,118,182],[876,84,216]];
    skyline.forEach(([x, width, height], index) => {
      const y = 210 - height * .45; ctx.fillStyle = index % 2 ? '#1b2937' : '#223445'; ctx.fillRect(x, y, width, height);
      ctx.fillStyle = 'rgba(255,213,125,.48)';
      for (let wx = x + 14; wx < x + width - 10; wx += 22) for (let wy = y + 18; wy < y + height - 16; wy += 26) if ((wx + wy + index) % 3) ctx.fillRect(wx, wy, 7, 9);
    });
    road(ctx, { road:'#222a2f', line:'#d7bd73', shoulder:'#26353d' });
  },

  drawDesert(ctx) {
    const sky = ctx.createLinearGradient(0, 0, 0, LOGICAL_HEIGHT); sky.addColorStop(0,'#512f28'); sky.addColorStop(.5,'#c26d3e'); sky.addColorStop(1,'#f1c875');
    ctx.fillStyle=sky; ctx.fillRect(0,0,LOGICAL_WIDTH,LOGICAL_HEIGHT);
    ctx.fillStyle='rgba(255,231,159,.75)'; ctx.beginPath(); ctx.arc(735,82,48,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#8b4d31';
    [[0,245,150],[210,205,230],[545,225,180],[765,190,250]].forEach(([x,y,w],i)=>{ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+w*.25,y-50-i*8);ctx.lineTo(x+w*.72,y-30);ctx.lineTo(x+w,y);ctx.closePath();ctx.fill();});
    road(ctx,{horizon:148,road:'#a65f38',line:'#f4d788',shoulder:'#c67a45'});
    ctx.fillStyle='rgba(255,222,152,.15)'; for(let i=0;i<18;i++)ctx.fillRect((i*83)%960,115+(i%4)*27,120,3);
  },

  drawForest(ctx) {
    const sky=ctx.createLinearGradient(0,0,0,LOGICAL_HEIGHT);sky.addColorStop(0,'#19372e');sky.addColorStop(.48,'#3d7150');sky.addColorStop(1,'#17291e');ctx.fillStyle=sky;ctx.fillRect(0,0,LOGICAL_WIDTH,LOGICAL_HEIGHT);
    for(let i=0;i<14;i++){const x=i*76-25;const h=180+(i%4)*32;ctx.fillStyle=i%2?'#203a29':'#162c20';ctx.fillRect(x,70,28,h);ctx.fillStyle=i%2?'#315f3c':'#284f35';ctx.beginPath();ctx.arc(x+14,72,58+(i%3)*8,0,Math.PI*2);ctx.fill();}
    ctx.fillStyle='rgba(210,233,175,.18)';ctx.beginPath();ctx.ellipse(480,110,260,68,0,0,Math.PI*2);ctx.fill();
    road(ctx,{horizon:150,road:'#554631',line:'#b7c876',shoulder:'#284b33'});
  },

  drawSnowMountain(ctx) {
    const sky=ctx.createLinearGradient(0,0,0,LOGICAL_HEIGHT);sky.addColorStop(0,'#17243b');sky.addColorStop(.55,'#77a4bd');sky.addColorStop(1,'#eaf6f7');ctx.fillStyle=sky;ctx.fillRect(0,0,LOGICAL_WIDTH,LOGICAL_HEIGHT);
    ctx.fillStyle='#dcecf0';ctx.beginPath();ctx.moveTo(0,250);ctx.lineTo(180,80);ctx.lineTo(340,250);ctx.lineTo(510,55);ctx.lineTo(720,250);ctx.lineTo(835,120);ctx.lineTo(960,250);ctx.closePath();ctx.fill();
    ctx.fillStyle='#91b1c1';ctx.beginPath();ctx.moveTo(120,190);ctx.lineTo(180,80);ctx.lineTo(245,188);ctx.lineTo(510,55);ctx.lineTo(622,185);ctx.lineTo(835,120);ctx.lineTo(900,205);ctx.closePath();ctx.fill();
    road(ctx,{horizon:150,road:'#8aabb9',line:'#eefbff',shoulder:'#d7e9ed'});
    ctx.strokeStyle='rgba(255,255,255,.58)';ctx.lineWidth=3;for(let i=0;i<25;i++){ctx.beginPath();ctx.moveTo((i*53)%960,(i*71)%330);ctx.lineTo(((i*53)%960)+18,((i*71)%330)+9);ctx.stroke();}
  },

  projection(lane, depth) {
    const t = clamp(1 - depth, 0, 1.18);
    const perspective = t * t;
    return { x: 480 + lane * lerp(54, 220, perspective), y: lerp(146, 466, perspective), scale: lerp(0.22, 1.38, perspective) };
  },

  drawSpeedLines(ctx) {
    if (!this.run || this.state.settings.reducedMotion) return;
    const intensity = clamp((this.level.baseSpeed + this.run.time / this.level.duration * this.level.speedRamp) * 2, .2, 1);
    ctx.strokeStyle = `rgba(244,230,191,${.12 * intensity})`; ctx.lineWidth = 2;
    for (let index = 0; index < 18; index += 1) {
      const seed = (index * 73 + Math.floor(this.run.time * 38)) % 997;
      const x = (seed * 17) % LOGICAL_WIDTH; const y = 160 + ((seed * 11) % 350); const length = 14 + intensity * 28;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (x < 480 ? -length : length), y + length * .65); ctx.stroke();
    }
  },

  drawMenuScene(ctx) {
    ctx.fillStyle = 'rgba(8,14,24,.40)'; ctx.fillRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
    ctx.save(); ctx.translate(480, 405); ctx.scale(.78, .78);
    const temporaryRun = this.run; this.run = { pressure:24, pressureCapacity:100 };
    this.pressureVisual(ctx); this.player = this.player || this.newPlayer(); this.runnerVisual(ctx); this.run = temporaryRun; ctx.restore();
  }
};

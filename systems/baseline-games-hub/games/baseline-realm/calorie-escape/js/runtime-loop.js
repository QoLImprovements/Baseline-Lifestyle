import { MATERIAL_NAMES } from '../data/calorie-escape-data.js';
import { completeRun, failRun, materialRewardsFromRun, obstacleDefinition } from './calorie-escape-engine.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export const runtimeLoop = {
  update(dt) {
    const run = this.run;
    const level = this.level;
    const player = this.player;
    run.time += dt;
    run.distance += dt * (110 + level.baseSpeed * 440);
    const progress = clamp(run.time / level.duration, 0, 1);
    const speed = level.baseSpeed * (1 + level.speedRamp * progress);
    run.pressure += level.pressureRate * dt * (1 + progress * 0.55);
    this.sound.beat(dt, run.pressure / run.pressureCapacity * 100);
    while (run.nextSpawnIndex < run.timeline.length && run.timeline[run.nextSpawnIndex].spawnAt <= run.time) {
      this.obstacles.push({ ...run.timeline[run.nextSpawnIndex], depth: 1.08, pulse: this.random() * Math.PI * 2 });
      run.nextSpawnIndex += 1;
      run.spawned += 1;
    }
    player.visualLane += (player.lane - player.visualLane) * clamp(dt * run.modifiers.laneSpeed, 0, 1);
    player.lean += (0 - player.lean) * clamp(dt * 8, 0, 1);
    if (player.jumpY > 0 || player.jumpVelocity > 0) {
      player.jumpHeldMs += player.jumpHeld ? dt * 1000 : 1000;
      const held = player.jumpHeld && player.jumpHeldMs <= run.modifiers.jumpHoldMs;
      player.jumpVelocity -= 1260 * (held ? 0.54 : 1) * dt;
      player.jumpY += player.jumpVelocity * dt;
      if (player.jumpY <= 0) { player.jumpY = 0; player.jumpVelocity = 0; player.jumpHeldMs = 0; }
    }
    player.sliding = Math.max(0, player.sliding - dt);
    player.attacking = Math.max(0, player.attacking - dt);
    player.invulnerable = Math.max(0, player.invulnerable - dt);
    this.shake = Math.max(0, this.shake - dt * 12);
    this.flash = Math.max(0, this.flash - dt * 3.4);
    this.toast = Math.max(0, this.toast - dt);
    if (this.toast <= 0) this.q('#ceRunToast').hidden = true;
    this.obstacles.forEach((obstacle) => {
      obstacle.depth -= speed * dt;
      obstacle.pulse += dt * 4;
      if (!obstacle.resolved && obstacle.depth <= 0.15) this.resolveObstacle(obstacle);
    });
    this.obstacles = this.obstacles.filter((obstacle) => obstacle.depth > -0.18 && !obstacle.remove);
    if (run.pressure >= run.pressureCapacity) return this.finish(false);
    if (run.time >= level.duration) return this.finish(true);
    this.hud();
  },

  resolveObstacle(obstacle) {
    const definition = obstacleDefinition(obstacle.type);
    if (!definition) { obstacle.resolved = true; return; }
    if (Math.abs(obstacle.lane - this.player.visualLane) >= 0.42) { obstacle.resolved = true; this.avoid(definition); return; }
    if (definition.category === 'collectible') {
      obstacle.resolved = obstacle.remove = true;
      const material = definition.materialPool[Math.floor(this.random() * definition.materialPool.length)];
      this.run.materials[material] = (this.run.materials[material] || 0) + 1;
      this.run.collected += 1;
      this.run.score += definition.score;
      this.run.combo += 1;
      this.run.pressure = Math.max(0, this.run.pressure - 2.2);
      this.sound.action('collect');
      this.notice(`${MATERIAL_NAMES[material]} recovered`);
      return;
    }
    const jumping = this.player.jumpY > (obstacle.type === 'market-barrier' || obstacle.type === 'pothole' ? 54 : 70);
    const sliding = this.player.sliding > 0.08;
    const attacking = this.player.attacking > 0 && obstacle.depth <= this.run.modifiers.attackReach;
    if (definition.category === 'breakable') {
      if (attacking) {
        obstacle.resolved = obstacle.remove = true;
        this.run.broken += 1;
        this.run.score += definition.score * (1 + this.run.combo * 0.06);
        this.run.combo += 1;
        this.run.pressure = Math.max(0, this.run.pressure - this.run.modifiers.breakPressureRelief);
        if (definition.material && this.random() <= definition.materialChance) this.run.materials[definition.material] = (this.run.materials[definition.material] || 0) + 1;
        this.sound.action('break');
        this.notice('Cargo broken · pressure reduced');
        return;
      }
      if (jumping) { obstacle.resolved = true; this.avoid(definition); return; }
      this.hit(obstacle, definition);
      return;
    }
    if ((definition.response.includes('jump') && jumping) || (definition.response.includes('slide') && sliding)) { obstacle.resolved = true; this.avoid(definition); return; }
    if (attacking) { this.run.pressure += 4; this.notice('Steel hazard · cannot be broken'); }
    this.hit(obstacle, definition);
  },

  avoid(definition) {
    this.run.avoided += 1;
    this.run.combo += 1;
    this.run.bestCombo = Math.max(this.run.bestCombo, this.run.combo);
    this.run.score += definition.score * (1 + this.run.combo * 0.035);
    this.run.pressure = Math.max(0, this.run.pressure - 0.8);
  },

  hit(obstacle, definition) {
    obstacle.resolved = obstacle.hit = true;
    if (this.player.invulnerable > 0) return;
    this.run.pressure += definition.pressureHit * (1 - clamp(this.run.modifiers.defence * 0.025, 0, 0.4));
    this.run.hits += 1;
    this.run.combo = 0;
    this.run.score = Math.max(0, this.run.score - 120);
    this.player.invulnerable = 0.82;
    this.shake = this.flash = 1;
    this.sound.action('hit');
    this.notice(`${definition.name} hit · Chef Brasa closes in`);
  },

  finish(completed) {
    if (!this.run?.active) return;
    this.run.active = false;
    const summary = {
      levelId: this.level.id,
      score: Math.round(this.run.score),
      distance: Math.round(this.run.distance),
      pressure: Math.round(this.run.pressure),
      hits: this.run.hits,
      broken: this.run.broken,
      avoided: this.run.avoided,
      collected: this.run.collected,
      bestCombo: this.run.bestCombo,
      materials: { ...this.run.materials },
      duration: Number(this.run.time.toFixed(2))
    };
    const outcome = completed ? completeRun(this.state, summary) : failRun(this.state, summary);
    this.state = outcome.state;
    this.persistState(this.state, completed ? 'calorie-escape-complete' : 'calorie-escape-failed', materialRewardsFromRun(summary));
    this.sound.action(completed ? 'complete' : 'hit');
    this.result(outcome.result);
  }
};

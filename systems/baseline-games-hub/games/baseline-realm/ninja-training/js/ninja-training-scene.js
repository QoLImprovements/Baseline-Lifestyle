const BUILD = 'REALM_CANONICAL_COMPLETE_20261018_1';

const ENEMY_PRESENTATION = Object.freeze({
  scout: Object.freeze({ name: 'Mossblade Pursuer', route: 'Cedar-Root Passage' }),
  raider: Object.freeze({ name: 'Gloam-Rope Raider', route: 'Lantern-Moss Run' }),
  boss: Object.freeze({ name: 'Hollow-Crown Warden', route: 'Warden’s Deepwood' })
});

function createSynthAudio() {
  let context = null;
  let output = null;

  function audioContext() {
    if (context) return context;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    context = new AudioContextClass();
    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -22;
    compressor.knee.value = 18;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.004;
    compressor.release.value = 0.16;
    output = context.createGain();
    output.gain.value = 0.72;
    output.connect(compressor).connect(context.destination);
    return context;
  }

  function tone({ frequency = 220, endFrequency = frequency, duration = 0.08, gain = 0.035, type = 'triangle', delay = 0 }) {
    const ctx = audioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    const start = ctx.currentTime + delay;
    const oscillator = ctx.createOscillator();
    const volume = ctx.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), start + duration);
    volume.gain.setValueAtTime(0.0001, start);
    volume.gain.exponentialRampToValueAtTime(gain, start + 0.008);
    volume.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(volume).connect(output || ctx.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  }

  function noise({ duration = 0.06, gain = 0.025, delay = 0 }) {
    const ctx = audioContext();
    if (!ctx) return;
    const length = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < length; index += 1) {
      const envelope = 1 - (index / length);
      data[index] = (Math.random() * 2 - 1) * envelope;
    }
    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const volume = ctx.createGain();
    filter.type = 'bandpass';
    filter.frequency.value = 1500;
    filter.Q.value = 0.7;
    volume.gain.value = gain;
    source.buffer = buffer;
    source.connect(filter).connect(volume).connect(output || ctx.destination);
    source.start(ctx.currentTime + delay);
  }

  return Object.freeze({
    dash() {
      noise({ duration: 0.11, gain: 0.035 });
      tone({ frequency: 310, endFrequency: 92, duration: 0.13, gain: 0.04, type: 'sawtooth' });
      tone({ frequency: 620, endFrequency: 185, duration: 0.09, gain: 0.018, type: 'triangle', delay: 0.012 });
      tone({ frequency: 84, endFrequency: 52, duration: 0.16, gain: 0.035, type: 'sine', delay: 0.075 });
    },
    shuriken() {
      tone({ frequency: 980, endFrequency: 390, duration: 0.07, gain: 0.025, type: 'square' });
      noise({ duration: 0.045, gain: 0.018, delay: 0.025 });
      tone({ frequency: 1450, endFrequency: 720, duration: 0.055, gain: 0.012, type: 'sine', delay: 0.018 });
    },
    hit() {
      tone({ frequency: 125, endFrequency: 62, duration: 0.09, gain: 0.045, type: 'triangle' });
      noise({ duration: 0.055, gain: 0.03 });
      tone({ frequency: 76, endFrequency: 42, duration: 0.14, gain: 0.038, type: 'sine', delay: 0.015 });
    },
    defeat() {
      tone({ frequency: 160, endFrequency: 55, duration: 0.24, gain: 0.04, type: 'sine' });
      tone({ frequency: 235, endFrequency: 78, duration: 0.18, gain: 0.025, type: 'triangle', delay: 0.035 });
    }
  });
}

function parseStage(text) {
  const match = String(text || '').match(/Stage\s+(\d+)/i);
  return match ? Number(match[1]) : 0;
}

function mountNinjaPresentation() {
  const scene = document.getElementById('ninjaScene');
  const frame = document.getElementById('realmSceneFrame');
  const runner = document.getElementById('ninjaRunnerWrap');
  const enemy = document.getElementById('ninjaEnemyWrap');
  const shurikenLayer = document.getElementById('ninjaShurikenLayer');
  const hitFlash = document.getElementById('ninjaHitFlash');
  const hpValue = document.getElementById('ninjaSceneHpValue');
  const runState = document.getElementById('ninjaRunStateValue');
  const enemyLabel = document.getElementById('ninjaEnemyLabel');
  const enemyType = document.getElementById('ninjaEnemyTypeValue');
  const stageName = document.getElementById('ninjaSceneStageName');

  if (!scene || !frame || !runner || !enemy) return Object.freeze({ resume() {}, pause() {} });
  if (!runner.querySelector('.ninja-runtime-sprite--runner')) {
    const sprite = document.createElement('span');
    sprite.className = 'ninja-runtime-sprite ninja-runtime-sprite--runner';
    sprite.setAttribute('aria-hidden', 'true');
    runner.appendChild(sprite);
  }
  if (!enemy.querySelector('.ninja-runtime-sprite--enemy')) {
    const sprite = document.createElement('span');
    sprite.className = 'ninja-runtime-sprite ninja-runtime-sprite--enemy';
    sprite.setAttribute('aria-hidden', 'true');
    enemy.appendChild(sprite);
  }
  if (!enemy.dataset.enemyKind) enemy.dataset.enemyKind = 'scout';
  if (scene.dataset.realmNinjaPresentation === BUILD) return Object.freeze({ resume() {}, pause() {} });

  scene.dataset.realmNinjaPresentation = BUILD;

  function ensureRuntimeSprite(host, className) {
    let sprite = host.querySelector('.ninja-runtime-sprite');
    if (!sprite) {
      sprite = document.createElement('span');
      sprite.className = `ninja-runtime-sprite ${className}`;
      sprite.setAttribute('aria-hidden', 'true');
      host.appendChild(sprite);
    }
    return sprite;
  }
  const runnerSprite = ensureRuntimeSprite(runner, 'ninja-runtime-sprite--runner');
  const enemySprite = ensureRuntimeSprite(enemy, 'ninja-runtime-sprite--enemy');
  scene.classList.add('has-runtime-sprites');

  const existingLayers = scene.querySelectorAll('.ninja-scene__layer');
  existingLayers[0]?.classList.add('ninja-forest-layer', 'ninja-forest-layer--distant');
  existingLayers[1]?.classList.add('ninja-forest-layer', 'ninja-forest-layer--middle');

  if (!scene.querySelector('.ninja-forest-layer--foreground')) {
    const foreground = document.createElement('div');
    foreground.className = 'ninja-forest-layer ninja-forest-layer--foreground';
    foreground.setAttribute('aria-hidden', 'true');
    scene.insertBefore(foreground, hitFlash || shurikenLayer || null);
  }

  const lane = scene.querySelector('.ninja-scene__lane');
  lane?.classList.add('ninja-forest-ground');
  runner.setAttribute('role', 'img');
  runner.setAttribute('aria-label', 'Alder Veil, the player runner');
  enemy.setAttribute('role', 'img');

  const synth = createSynthAudio();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = false;
  let intersecting = true;
  let actionTimer = 0;
  let hitTimer = 0;
  let defeatTimer = 0;
  let lastHp = Number.NaN;
  let lastStage = parseStage(runState?.textContent);

  function clearTimer(timer) {
    if (timer) window.clearTimeout(timer);
  }

  function setReducedMotion() {
    scene.classList.toggle('is-reduced-motion', reducedMotion.matches);
  }

  function syncEnemyPresentation() {
    const kind = ['scout', 'raider', 'boss'].includes(enemy.dataset.enemyKind) ? enemy.dataset.enemyKind : 'scout';
    const presentation = ENEMY_PRESENTATION[kind];
    if (enemy.dataset.enemyKind !== kind) enemy.dataset.enemyKind = kind;
    enemySprite.dataset.enemyKind = kind;
    if (enemy.getAttribute('aria-label') !== presentation.name) enemy.setAttribute('aria-label', presentation.name);
    scene.classList.toggle('is-boss', kind === 'boss');
    if (enemyLabel && enemyLabel.textContent !== presentation.name) enemyLabel.textContent = presentation.name;
    if (enemyType && enemyType.textContent !== presentation.name) enemyType.textContent = presentation.name;
    if (stageName && stageName.textContent !== presentation.route) stageName.textContent = presentation.route;
  }

  function playEnemyEntry() {
    enemy.classList.remove('is-entering');
    void enemy.offsetWidth;
    enemy.classList.add('is-entering');
    window.setTimeout(() => enemy.classList.remove('is-entering'), reducedMotion.matches ? 80 : 1320);
  }

  function showHit({ audio = false, strong = false } = {}) {
    clearTimer(hitTimer);
    enemy.classList.remove('is-hit', 'is-heavy-hit');
    void enemy.offsetWidth;
    enemy.classList.add(strong ? 'is-heavy-hit' : 'is-hit');
    hitFlash?.classList.add('is-live');
    if (audio) synth.hit();
    hitTimer = window.setTimeout(() => {
      enemy.classList.remove('is-hit', 'is-heavy-hit');
      hitFlash?.classList.remove('is-live');
    }, reducedMotion.matches ? 130 : 310);
  }

  function showDefeat() {
    clearTimer(defeatTimer);
    enemy.classList.remove('is-defeated');
    void enemy.offsetWidth;
    enemy.classList.add('is-defeated');
    synth.defeat();
    defeatTimer = window.setTimeout(() => enemy.classList.remove('is-defeated'), reducedMotion.matches ? 180 : 720);
  }

  function playRunnerAction(action, { audio = true } = {}) {
    clearTimer(actionTimer);
    runner.classList.remove('is-dash-cut', 'is-idle-attacking', 'is-throwing');
    scene.classList.remove('is-dash-hit-frame');
    void runner.offsetWidth;

    if (action === 'dash') {
      runner.classList.add('is-dash-cut');
      if (audio) synth.dash();
      window.setTimeout(() => {
        scene.classList.add('is-dash-hit-frame');
        showHit({ audio: true, strong: true });
      }, reducedMotion.matches ? 35 : 335);
      actionTimer = window.setTimeout(() => {
        runner.classList.remove('is-dash-cut');
        scene.classList.remove('is-dash-hit-frame');
      }, reducedMotion.matches ? 180 : 980);
      return;
    }

    if (action === 'throw') {
      runner.classList.add('is-throwing');
      if (audio) synth.shuriken();
      actionTimer = window.setTimeout(() => runner.classList.remove('is-throwing'), reducedMotion.matches ? 160 : 820);
      return;
    }

    runner.classList.add('is-idle-attacking');
    window.setTimeout(() => showHit({ audio: false }), reducedMotion.matches ? 40 : 270);
    actionTimer = window.setTimeout(() => runner.classList.remove('is-idle-attacking'), reducedMotion.matches ? 150 : 520);
  }

  function presentationIsVisible() {
    return active && intersecting && document.visibilityState === 'visible' && frame.classList.contains('is-training-view');
  }

  function onAction(event) {
    if (!presentationIsVisible()) return;
    const target = event.target instanceof Element ? event.target.closest('button') : null;
    if (!target) return;
    if (target.id === 'ninjaManualStrikeBtn') playRunnerAction('dash');
    if (target.id === 'ninjaShurikenBtn' && !target.disabled) playRunnerAction('throw');
  }

  function onKeydown(event) {
    if (!presentationIsVisible()) return;
    if (event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
    const key = event.key.toLowerCase();
    if (key === 'd') playRunnerAction('dash');
    if (key === 's' && !document.getElementById('ninjaShurikenBtn')?.disabled) playRunnerAction('throw');
  }

  const stateObserver = new MutationObserver(() => {
    syncEnemyPresentation();
    const nextStage = parseStage(runState?.textContent);
    const hpParts = String(hpValue?.textContent || '').split('/');
    const nextHp = Number(String(hpParts[0] || '').replace(/[^0-9.]/g, ''));
    if (presentationIsVisible()) {
      if (nextStage && lastStage && nextStage > lastStage) {
        showDefeat();
        window.setTimeout(playEnemyEntry, reducedMotion.matches ? 90 : 520);
      }
      if (Number.isFinite(nextHp) && Number.isFinite(lastHp) && nextHp < lastHp && nextStage === lastStage) showHit();
    }
    if (nextStage) lastStage = nextStage;
    if (Number.isFinite(nextHp)) lastHp = nextHp;
  });

  stateObserver.observe(enemy, { attributes: true, attributeFilter: ['data-enemy-kind'] });
  if (hpValue) stateObserver.observe(hpValue, { childList: true, characterData: true, subtree: true });
  if (runState) stateObserver.observe(runState, { childList: true, characterData: true, subtree: true });

  const projectileObserver = shurikenLayer ? new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node instanceof HTMLElement && node.classList.contains('ninja-shuriken-projectile')) {
        node.dataset.originalProjectile = 'true';
        synth.shuriken();
      }
    }));
  }) : null;
  if (projectileObserver && shurikenLayer) projectileObserver.observe(shurikenLayer, { childList: true });

  const intersectionObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    intersecting = entries.some((entry) => entry.isIntersecting);
    scene.classList.toggle('is-paused', !intersecting);
  }, { threshold: 0.05 }) : null;
  intersectionObserver?.observe(frame);

  document.addEventListener('click', onAction, true);
  document.addEventListener('keydown', onKeydown, true);
  reducedMotion.addEventListener?.('change', setReducedMotion);
  setReducedMotion();
  syncEnemyPresentation();

  return Object.freeze({
    resume() {
      const wasActive = active;
      active = true;
      scene.classList.remove('is-paused');
      syncEnemyPresentation();
      if (!wasActive && presentationIsVisible()) playEnemyEntry();
    },
    pause() {
      active = false;
      scene.classList.add('is-paused');
    }
  });
}

export function createNinjaTrainingScene({ runtime }) {
  const presentation = mountNinjaPresentation();
  return {
    id: 'ninja-training',
    async enter() {
      runtime?.setView('training');
      presentation.resume();
    },
    async exit() {
      presentation.pause();
    }
  };
}

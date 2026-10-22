const BUTTON_ACTIONS = Object.freeze({
  0: 'realm-primary',
  1: 'realm-menu',
  2: 'realm-shuriken',
  3: 'realm-basecamp',
  4: 'realm-training',
  5: 'realm-exploration',
  8: 'realm-audio-mute',
  9: 'realm-fullscreen'
});

export class RealmGamepadProvider {
  constructor({ navigatorImpl = globalThis.navigator, requestFrame = globalThis.requestAnimationFrame?.bind(globalThis), cancelFrame = globalThis.cancelAnimationFrame?.bind(globalThis), threshold = 0.55 } = {}) {
    this.navigator = navigatorImpl;
    this.requestFrame = requestFrame || ((callback) => setTimeout(callback, 16));
    this.cancelFrame = cancelFrame || clearTimeout;
    this.threshold = threshold;
    this.listeners = new Set();
    this.previous = new Map();
    this.frame = null;
    this.running = false;
  }

  subscribe(listener) {
    if (typeof listener !== 'function') throw new TypeError('Gamepad listener must be a function.');
    this.listeners.add(listener);
    if (!this.running) this.start();
    return () => {
      this.listeners.delete(listener);
      if (!this.listeners.size) this.stop();
    };
  }

  emit(action, payload = {}) {
    this.listeners.forEach((listener) => listener(action, payload));
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.poll();
  }

  stop() {
    this.running = false;
    if (this.frame !== null) this.cancelFrame(this.frame);
    this.frame = null;
    this.previous.clear();
  }

  pressed(button) {
    return Boolean(button?.pressed || Number(button?.value || 0) >= this.threshold);
  }

  poll = () => {
    if (!this.running) return;
    const pads = Array.from(this.navigator?.getGamepads?.() || []).filter(Boolean);
    for (const pad of pads) {
      const before = this.previous.get(pad.index) || [];
      const next = pad.buttons.map((button) => this.pressed(button));
      Object.entries(BUTTON_ACTIONS).forEach(([index, action]) => {
        const buttonIndex = Number(index);
        if (next[buttonIndex] && !before[buttonIndex]) this.emit(action, { gamepadIndex: pad.index, button: buttonIndex });
      });
      const horizontal = Number(pad.axes?.[0] || 0);
      const vertical = Number(pad.axes?.[1] || 0);
      const axisState = `${horizontal <= -this.threshold ? 'left' : horizontal >= this.threshold ? 'right' : ''}:${vertical <= -this.threshold ? 'up' : vertical >= this.threshold ? 'down' : ''}`;
      if (before.axisState !== axisState && axisState !== ':') this.emit('realm-direction', { axisState, horizontal, vertical, gamepadIndex: pad.index });
      next.axisState = axisState;
      this.previous.set(pad.index, next);
    }
    this.frame = this.requestFrame(this.poll);
  };
}

export const realmGamepadBindings = BUTTON_ACTIONS;

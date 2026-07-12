export class RealmAccessibilityService {
  constructor({ getSettings, setSettings, eventBus, root = globalThis.document, matchMediaImpl = globalThis.matchMedia?.bind(globalThis) } = {}) {
    this.getSettings = typeof getSettings === 'function' ? getSettings : () => ({});
    this.setSettings = typeof setSettings === 'function' ? setSettings : () => {};
    this.eventBus = eventBus;
    this.root = root;
    this.matchMediaImpl = matchMediaImpl;
    this.media = null;
    this.boundChange = () => this.apply();
  }

  preference() {
    const value = this.getSettings()?.accessibility?.reducedMotion || this.getSettings()?.reducedMotion || 'system';
    return ['system', 'reduce', 'no-preference'].includes(value) ? value : 'system';
  }

  reduced() {
    const preference = this.preference();
    if (preference === 'reduce') return true;
    if (preference === 'no-preference') return false;
    return Boolean(this.media?.matches);
  }

  start() {
    this.media = this.matchMediaImpl?.('(prefers-reduced-motion: reduce)') || null;
    this.media?.addEventListener?.('change', this.boundChange);
    this.media?.addListener?.(this.boundChange);
    return this.apply();
  }

  stop() {
    this.media?.removeEventListener?.('change', this.boundChange);
    this.media?.removeListener?.(this.boundChange);
  }

  setPreference(value) {
    const preference = ['system', 'reduce', 'no-preference'].includes(value) ? value : 'system';
    this.setSettings(preference);
    return this.apply();
  }

  apply() {
    const reduced = this.reduced();
    this.root?.documentElement?.setAttribute('data-realm-reduced-motion', reduced ? 'true' : 'false');
    this.eventBus?.emit('realm:accessibility:changed', { reducedMotion: reduced, preference: this.preference() });
    return reduced;
  }
}

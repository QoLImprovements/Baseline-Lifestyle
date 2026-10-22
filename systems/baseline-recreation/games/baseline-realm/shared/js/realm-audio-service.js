function clamp(value, fallback = 1) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.min(1, number)) : fallback;
}

export class RealmAudioService {
  constructor({ getSettings, setSettings, eventBus, root = globalThis.document } = {}) {
    this.getSettings = typeof getSettings === 'function' ? getSettings : () => ({});
    this.setSettings = typeof setSettings === 'function' ? setSettings : () => {};
    this.eventBus = eventBus;
    this.root = root;
    this.media = new Map();
    this.unsubscribeMute = this.eventBus?.on?.('realm:input:realm-audio-mute', () => this.toggleMuted()) || null;
  }

  settings() {
    const source = this.getSettings()?.audio || this.getSettings() || {};
    return {
      master: clamp(source.master, 1),
      music: clamp(source.music, 0.8),
      effects: clamp(source.effects, 1),
      muted: Boolean(source.muted)
    };
  }

  register(element, channel = 'effects') {
    if (!element) return () => {};
    this.media.set(element, channel === 'music' ? 'music' : 'effects');
    this.applyElement(element);
    return () => this.media.delete(element);
  }

  scan() {
    this.root?.querySelectorAll?.('audio, video[data-realm-audio]')?.forEach((element) => {
      const channel = element.dataset.realmAudio === 'music' ? 'music' : 'effects';
      this.register(element, channel);
    });
    return this.media.size;
  }

  applyElement(element) {
    const channel = this.media.get(element) || 'effects';
    const settings = this.settings();
    element.muted = settings.muted;
    element.volume = clamp(settings.master * settings[channel], 1);
  }

  apply() {
    this.media.forEach((_, element) => this.applyElement(element));
    const settings = this.settings();
    this.root?.documentElement?.setAttribute('data-realm-muted', settings.muted ? 'true' : 'false');
    this.eventBus?.emit('realm:audio:changed', settings);
    return settings;
  }

  update(patch = {}) {
    const current = this.settings();
    const next = {
      master: clamp(patch.master, current.master),
      music: clamp(patch.music, current.music),
      effects: clamp(patch.effects, current.effects),
      muted: patch.muted === undefined ? current.muted : Boolean(patch.muted)
    };
    this.setSettings(next);
    return this.apply();
  }

  setMaster(value) {
    return this.update({ master: value });
  }

  setMuted(value) {
    return this.update({ muted: value });
  }

  toggleMuted() {
    return this.setMuted(!this.settings().muted);
  }

  pauseAll() {
    this.media.forEach((_, element) => {
      if (!element.paused) element.dataset.realmResumeAfterPause = 'true';
      try { element.pause?.(); } catch (_error) {}
    });
    this.eventBus?.emit('realm:audio:paused', { count: this.media.size });
  }

  resumeAll() {
    this.media.forEach((_, element) => {
      if (element.dataset.realmResumeAfterPause !== 'true') return;
      delete element.dataset.realmResumeAfterPause;
      const playback = element.play?.();
      playback?.catch?.(() => {});
    });
    this.eventBus?.emit('realm:audio:resumed', { count: this.media.size });
  }

  destroy() {
    this.unsubscribeMute?.();
    this.media.clear();
  }
}

export const realmAudioInternals = Object.freeze({ clamp });

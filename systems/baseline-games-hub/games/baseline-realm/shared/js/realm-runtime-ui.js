const STYLE_PATH = '/systems/baseline-games-hub/games/baseline-realm/shared/css/realm-integration.css';

function ensureStyles(root) {
  if (!root?.head || root.querySelector(`link[href="${STYLE_PATH}"]`)) return;
  const link = root.createElement('link');
  link.rel = 'stylesheet';
  link.href = STYLE_PATH;
  link.dataset.realmIntegrationStyles = 'true';
  root.head.append(link);
}

export class RealmRuntimeUi {
  constructor({ root = globalThis.document, eventBus } = {}) {
    this.root = root;
    this.eventBus = eventBus;
    this.frame = null;
    this.loading = null;
    this.progress = null;
    this.status = null;
    this.controls = null;
  }

  mount() {
    ensureStyles(this.root);
    this.frame = this.root?.getElementById?.('realmSceneFrame');
    if (!this.frame) return false;
    this.loading = this.root.getElementById('realmLoadingScreen');
    if (!this.loading) {
      this.loading = this.root.createElement('div');
      this.loading.id = 'realmLoadingScreen';
      this.loading.className = 'realm-loading-screen';
      this.loading.setAttribute('role', 'status');
      this.loading.setAttribute('aria-live', 'polite');
      this.loading.innerHTML = '<div class="realm-loading-card"><strong>Preparing Baseline Realm</strong><progress max="100" value="0"></progress><span>Loading shared systems…</span></div>';
      this.frame.append(this.loading);
    }
    this.progress = this.loading.querySelector('progress');
    this.status = this.loading.querySelector('span');
    this.controls = this.root.getElementById('realmAudioControls');
    if (!this.controls) {
      this.controls = this.root.createElement('div');
      this.controls.id = 'realmAudioControls';
      this.controls.className = 'realm-audio-controls';
      this.controls.setAttribute('aria-label', 'Realm audio controls');
      this.controls.innerHTML = '<button type="button" data-realm-audio-mute aria-pressed="false">Sound on</button><label>Volume <input data-realm-audio-volume type="range" min="0" max="1" step="0.05" value="1"></label>';
      this.frame.append(this.controls);
    }
    return true;
  }

  showLoading(label = 'Loading shared systems…') {
    if (!this.loading && !this.mount()) return;
    this.loading.hidden = false;
    this.loading.dataset.state = 'loading';
    if (this.status) this.status.textContent = label;
  }

  setProgress(detail = {}) {
    if (!this.loading && !this.mount()) return;
    const progress = Math.max(0, Math.min(1, Number(detail.progress || 0)));
    if (this.progress) this.progress.value = Math.round(progress * 100);
    if (this.status) this.status.textContent = detail.status === 'failed'
      ? `Continuing after an asset failed: ${detail.entry?.path || 'unknown asset'}`
      : `Loading ${detail.loaded + detail.failed} of ${detail.total} assets…`;
    this.eventBus?.emit('realm:loading:progress', detail);
  }

  finishLoading(report = {}) {
    if (!this.loading && !this.mount()) return;
    this.loading.dataset.state = report.failed ? 'partial' : 'ready';
    if (this.progress) this.progress.value = 100;
    if (this.status) this.status.textContent = report.failed ? 'Realm ready; optional assets will retry when needed.' : 'Realm ready.';
    this.root?.documentElement?.setAttribute('data-realm-assets-ready', report.failed ? 'partial' : 'complete');
    setTimeout(() => { if (this.loading) this.loading.hidden = true; }, 120);
  }

  bindAudio(audioService) {
    if (!this.controls && !this.mount()) return () => {};
    const mute = this.controls.querySelector('[data-realm-audio-mute]');
    const volume = this.controls.querySelector('[data-realm-audio-volume]');
    const sync = () => {
      const settings = audioService.settings();
      mute.textContent = settings.muted ? 'Sound off' : 'Sound on';
      mute.setAttribute('aria-pressed', settings.muted ? 'true' : 'false');
      volume.value = String(settings.master);
    };
    const onMute = () => { audioService.toggleMuted(); sync(); };
    const onVolume = () => { audioService.setMaster(volume.value); sync(); };
    mute.addEventListener('click', onMute);
    volume.addEventListener('input', onVolume);
    sync();
    return () => {
      mute.removeEventListener('click', onMute);
      volume.removeEventListener('input', onVolume);
    };
  }
}

export const realmRuntimeUiInternals = Object.freeze({ ensureStyles, STYLE_PATH });

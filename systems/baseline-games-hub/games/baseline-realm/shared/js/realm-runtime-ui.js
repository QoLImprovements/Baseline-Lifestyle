const STYLE_PATH = '/systems/baseline-games-hub/games/baseline-realm/shared/css/realm-integration.css?v=REALM_BASECAMP_HUD_SETTINGS_20261016_1';

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
    this.settingsPanel = null;
    this.settingsButton = null;
    this.coinValue = null;
    this.settingsBound = false;
    this.coinUnsubscribe = null;
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
    this.settingsButton = this.root.getElementById('realmSettingsBtn');
    this.coinValue = this.root.getElementById('realmCoinsValue');

    this.settingsPanel = this.root.getElementById('realmSettingsPanel');
    if (!this.settingsPanel) {
      this.settingsPanel = this.root.createElement('div');
      this.settingsPanel.id = 'realmSettingsPanel';
      this.settingsPanel.className = 'realm-settings-overlay';
      this.settingsPanel.hidden = true;
      this.settingsPanel.innerHTML = '<section class="realm-settings-dialog" role="dialog" aria-modal="true" aria-labelledby="realmSettingsTitle"><header><div><small>Baseline Realm</small><h4 id="realmSettingsTitle">Settings</h4></div><button class="realm-settings-close" type="button" data-realm-settings-close aria-label="Close settings">×</button></header><div class="realm-settings-list"><section class="realm-setting-row"><div><strong>Sound</strong><small>Enable or mute Realm audio.</small></div><button type="button" data-realm-audio-mute aria-pressed="false">On</button></section><label class="realm-setting-row realm-setting-row--slider"><span><strong>Volume</strong><small>Adjust the overall Realm audio level.</small></span><input data-realm-audio-volume type="range" min="0" max="1" step="0.05" value="1" aria-label="Realm volume"></label></div></section>';
      this.frame.append(this.settingsPanel);
    }

    this.bindSettingsPanel();
    if (!this.coinUnsubscribe && this.eventBus?.on) {
      this.coinUnsubscribe = this.eventBus.on('realm:state:changed', (event) => {
        this.setCoinBalance(event?.detail?.save?.realm?.wallet?.coins);
      });
    }
    return true;
  }

  bindSettingsPanel() {
    if (this.settingsBound || !this.settingsPanel || !this.settingsButton) return;
    const closeButton = this.settingsPanel.querySelector('[data-realm-settings-close]');
    const open = () => {
      this.settingsPanel.hidden = false;
      this.settingsButton.setAttribute('aria-expanded', 'true');
      closeButton?.focus?.();
    };
    const close = () => {
      this.settingsPanel.hidden = true;
      this.settingsButton.setAttribute('aria-expanded', 'false');
      this.settingsButton.focus?.();
    };
    const onBackdrop = (event) => {
      if (event.target === this.settingsPanel) close();
    };
    const onKeydown = (event) => {
      if (event.key === 'Escape' && !this.settingsPanel.hidden) close();
    };
    this.settingsButton.addEventListener('click', open);
    closeButton?.addEventListener('click', close);
    this.settingsPanel.addEventListener('click', onBackdrop);
    this.root.addEventListener('keydown', onKeydown);
    this.settingsBound = true;
  }

  setCoinBalance(value) {
    if (!this.coinValue) this.coinValue = this.root?.getElementById?.('realmCoinsValue');
    const coins = Math.max(0, Math.round(Number(value || 0)));
    if (this.coinValue) this.coinValue.textContent = coins.toLocaleString('en-GB');
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
    if (!this.settingsPanel && !this.mount()) return () => {};
    const mute = this.settingsPanel.querySelector('[data-realm-audio-mute]');
    const volume = this.settingsPanel.querySelector('[data-realm-audio-volume]');
    if (!mute || !volume) return () => {};

    const sync = () => {
      const settings = audioService.settings();
      mute.textContent = settings.muted ? 'Off' : 'On';
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

function humanise(id) {
  return String(id || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
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
    this.inventoryPanel = null;
    this.inventoryButton = null;
    this.inventoryService = null;
    this.coinValue = null;
    this.overlayBound = false;
    this.coinUnsubscribe = null;
    this.inventoryUnsubscribe = null;
  }

  mount() {
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
    this.inventoryButton = this.root.getElementById('realmInventoryBtn');
    this.coinValue = this.root.getElementById('realmCoinsValue');

    this.settingsPanel = this.root.getElementById('realmSettingsPanel');
    if (!this.settingsPanel) {
      this.settingsPanel = this.root.createElement('div');
      this.settingsPanel.id = 'realmSettingsPanel';
      this.settingsPanel.className = 'realm-settings-overlay';
      this.settingsPanel.hidden = true;
      this.settingsPanel.innerHTML = '<section class="realm-settings-dialog" role="dialog" aria-modal="true" aria-labelledby="realmSettingsTitle"><header><div><small>Baseline Realm</small><h4 id="realmSettingsTitle">Settings</h4></div><button class="realm-settings-close" type="button" data-realm-settings-close aria-label="Close settings">×</button></header><div class="realm-settings-list"><section class="realm-setting-row"><div><strong>Sound</strong><small>Enable or mute Realm audio.</small></div><button type="button" data-realm-audio-mute aria-pressed="false">On</button></section><section class="realm-setting-row"><div><strong>Music</strong><small>Play or mute the three-minute Baseline Realm theme.</small></div><button type="button" data-games-music-toggle aria-pressed="true">On</button></section><label class="realm-setting-row realm-setting-row--slider"><span><strong>Volume</strong><small>Adjust the overall Realm audio level.</small></span><input data-realm-audio-volume type="range" min="0" max="1" step="0.05" value="1" aria-label="Realm volume"></label></div></section>';
      this.frame.append(this.settingsPanel);
    }

    this.inventoryPanel = this.root.getElementById('realmInventoryPanel');
    if (!this.inventoryPanel) {
      this.inventoryPanel = this.root.createElement('div');
      this.inventoryPanel.id = 'realmInventoryPanel';
      this.inventoryPanel.className = 'realm-inventory-overlay';
      this.inventoryPanel.hidden = true;
      this.inventoryPanel.innerHTML = '<section class="realm-inventory-dialog" role="dialog" aria-modal="true" aria-labelledby="realmInventoryTitle"><header><h4 id="realmInventoryTitle">Inventory</h4><button class="realm-inventory-close" type="button" data-realm-inventory-close aria-label="Close inventory">×</button></header><div class="realm-inventory-body" data-realm-inventory-body><p class="realm-inventory-empty">Inventory is loading…</p></div></section>';
      this.frame.append(this.inventoryPanel);
    }

    this.bindOverlays();
    if (!this.coinUnsubscribe && this.eventBus?.on) {
      this.coinUnsubscribe = this.eventBus.on('realm:state:changed', (event) => {
        this.setCoinBalance(event?.detail?.save?.realm?.wallet?.coins);
      });
    }
    return true;
  }

  bindOverlays() {
    if (this.overlayBound || !this.settingsPanel || !this.inventoryPanel) return;
    const settingsClose = this.settingsPanel.querySelector('[data-realm-settings-close]');
    const inventoryClose = this.inventoryPanel.querySelector('[data-realm-inventory-close]');

    const closeSettings = (restore = false) => {
      this.settingsPanel.hidden = true;
      this.settingsButton?.setAttribute('aria-expanded', 'false');
      if (restore) this.settingsButton?.focus?.();
    };
    const closeInventory = (restore = false) => {
      this.inventoryPanel.hidden = true;
      this.inventoryButton?.setAttribute('aria-expanded', 'false');
      if (restore) this.inventoryButton?.focus?.();
    };
    const openSettings = () => {
      closeInventory(false);
      this.settingsPanel.hidden = false;
      this.settingsButton?.setAttribute('aria-expanded', 'true');
      settingsClose?.focus?.();
    };
    const openInventory = () => {
      closeSettings(false);
      this.renderInventory();
      this.inventoryPanel.hidden = false;
      this.inventoryButton?.setAttribute('aria-expanded', 'true');
      inventoryClose?.focus?.();
    };

    this.settingsButton?.addEventListener('click', openSettings);
    this.inventoryButton?.addEventListener('click', openInventory);
    settingsClose?.addEventListener('click', () => closeSettings(true));
    inventoryClose?.addEventListener('click', () => closeInventory(true));
    this.settingsPanel.addEventListener('click', (event) => {
      if (event.target === this.settingsPanel) closeSettings(true);
    });
    this.inventoryPanel.addEventListener('click', (event) => {
      if (event.target === this.inventoryPanel) closeInventory(true);
    });
    this.root.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      if (!this.settingsPanel.hidden) {
        event.preventDefault();
        closeSettings(true);
      } else if (!this.inventoryPanel.hidden) {
        event.preventDefault();
        closeInventory(true);
      }
    });
    this.overlayBound = true;
  }

  bindInventory(inventoryService) {
    this.inventoryService = inventoryService || null;
    this.renderInventory();
    const save = this.inventoryService?.read?.();
    this.setCoinBalance(save?.realm?.wallet?.coins);
    this.inventoryUnsubscribe?.();
    this.inventoryUnsubscribe = this.eventBus?.on?.('realm:inventory:changed', () => {
      this.renderInventory();
      const next = this.inventoryService?.read?.();
      this.setCoinBalance(next?.realm?.wallet?.coins);
    }) || null;
    return () => {
      this.inventoryUnsubscribe?.();
      this.inventoryUnsubscribe = null;
    };
  }

  inventoryGroupMarkup(label, entries) {
    if (!entries.length) return '';
    return `<section class="realm-inventory-group"><h5>${label}</h5><div class="realm-inventory-grid">${entries.map((entry) => `<div class="realm-inventory-item"><span>${entry.name}</span><strong>${entry.quantity}</strong></div>`).join('')}</div></section>`;
  }

  renderInventory() {
    const body = this.inventoryPanel?.querySelector?.('[data-realm-inventory-body]');
    if (!body || !this.inventoryService) return;
    const save = this.inventoryService.read();
    const inventory = save.realm.inventory || {};
    const countEntries = (bucket) => Object.entries(inventory[bucket] || {})
      .filter(([, amount]) => Number(amount) > 0)
      .map(([id, amount]) => ({ name: humanise(id), quantity: Math.max(0, Math.round(Number(amount) || 0)) }));
    const equipment = Object.values(inventory.equipment || {}).map((record) => ({
      name: String(record?.name || humanise(record?.itemId || record?.definitionId || 'Equipment')),
      quantity: 1
    }));
    const groups = [
      this.inventoryGroupMarkup('Materials', countEntries('materials')),
      this.inventoryGroupMarkup('Items', countEntries('items')),
      this.inventoryGroupMarkup('Food', countEntries('food')),
      this.inventoryGroupMarkup('Potions', countEntries('potions')),
      this.inventoryGroupMarkup('Tools', countEntries('tools')),
      this.inventoryGroupMarkup('Equipment', equipment)
    ].filter(Boolean);
    body.innerHTML = groups.length ? groups.join('') : '<p class="realm-inventory-empty">No Realm items are currently stored.</p>';
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

export const realmRuntimeUiInternals = Object.freeze({ humanise });

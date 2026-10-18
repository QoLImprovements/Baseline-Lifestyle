const MERCHANT_OFFERS = Object.freeze([
  { id: 'healing_herb', name: 'Healing Herb', bucket: 'materials', buy: 10, sell: 5 },
  { id: 'clear_water', name: 'Clear Water', bucket: 'materials', buy: 8, sell: 4 },
  { id: 'grain', name: 'Grain', bucket: 'materials', buy: 12, sell: 6 },
  { id: 'linen', name: 'Linen', bucket: 'materials', buy: 14, sell: 7 },
  { id: 'leather_strip', name: 'Leather Strip', bucket: 'materials', buy: 16, sell: 8 }
]);

const BUCKET_LABELS = Object.freeze({
  materials: 'Materials', items: 'Items', equipment: 'Equipment', food: 'Food', potions: 'Potions', tools: 'Tools'
});

const SERVICE_TITLES = Object.freeze({
  storage: 'Storage',
  merchant: 'Merchant Post',
  rest: 'Campfire & Rest',
  party: 'Party Preparation'
});

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function titleCase(value) {
  return String(value || '').replace(/[_-]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function itemEntries(bucket, value) {
  if (bucket === 'equipment') return Object.values(value || {}).map((record) => ({ id: record.id, name: record.name || titleCase(record.itemId || record.definitionId || record.id), count: 1, record }));
  return Object.entries(value || {}).filter(([, count]) => Number(count) > 0).map(([id, count]) => ({ id, name: titleCase(id), count: Number(count) }));
}

export class BasecampController {
  constructor({ runtime, inventoryService, stateService, eventBus } = {}) {
    this.runtime = runtime;
    this.inventoryService = inventoryService;
    this.stateService = stateService;
    this.eventBus = eventBus;
    this.mode = 'storage';
    this.selectedCharacterId = '';
    this.mounted = false;
    this.onClick = (event) => this.handleClick(event);
    this.unsubscribe = null;
  }

  mount() {
    if (this.mounted) return;
    this.mounted = true;
    document.addEventListener('click', this.onClick, true);
    this.unsubscribe = this.eventBus?.on?.('realm:state:changed', () => this.render());
    this.render();
  }

  destroy() {
    if (!this.mounted) return;
    this.mounted = false;
    document.removeEventListener('click', this.onClick, true);
    this.unsubscribe?.();
  }

  open(mode, tab) {
    this.mode = mode;
    this.runtime?.openDrawerTab?.(tab);
    queueMicrotask(() => {
      this.prepareFocusedMenu();
      this.render();
    });
  }

  prepareFocusedMenu() {
    const drawer = document.getElementById('realmPanelDrawer');
    const title = document.getElementById('realmDrawerTitle');
    const note = document.getElementById('realmDrawerNote');
    if (drawer) drawer.dataset.basecampService = this.mode;
    if (title) title.textContent = SERVICE_TITLES[this.mode] || 'Basecamp';
    if (note) { note.hidden = true; note.textContent = ''; }
  }

  handleClick(event) {
    const close = event.target.closest?.('[data-realm-drawer="close"]');
    if (close) {
      document.getElementById('realmPanelDrawer')?.removeAttribute('data-basecamp-service');
      return;
    }
    const landmark = event.target.closest?.('[data-basecamp-landmark]');
    if (landmark) {
      const id = landmark.dataset.basecampLandmark;
      if (id === 'storage') this.open('storage', 'settlement');
      if (id === 'merchant') this.open('merchant', 'stores');
      if (id === 'campfire-rest') this.open('rest', 'settlement');
      if (id === 'party-preparation') this.open('party', 'expeditions');
      return;
    }
    const action = event.target.closest?.('[data-basecamp-action]');
    if (!action) return;
    const kind = action.dataset.basecampAction;
    if (kind === 'buy') this.trade(action.dataset.itemId, 'buy');
    if (kind === 'sell') this.trade(action.dataset.itemId, 'sell');
    if (kind === 'rest') this.restParty();
    if (kind === 'select-character') { this.selectedCharacterId = action.dataset.characterId || ''; this.renderParty(); }
    if (kind === 'toggle-party') this.toggleParty(action.dataset.characterId || '');
    if (kind === 'equip') this.equip(action.dataset.instanceId || '');
    if (kind === 'unequip') this.unequip(action.dataset.slot || '');
  }

  trade(itemId, direction) {
    const offer = MERCHANT_OFFERS.find((entry) => entry.id === itemId);
    if (!offer || !this.inventoryService) return;
    const current = this.inventoryService.read();
    if (direction === 'buy' && current.realm.wallet.coins < offer.buy) {
      this.notice('More Coins are required for that purchase.');
      return;
    }
    const result = direction === 'buy'
      ? this.inventoryService.transact({
          produce: [{ bucket: offer.bucket, id: offer.id, amount: 1 }],
          mutate: (save) => { save.realm.wallet.coins -= offer.buy; }
        }, { type: 'merchant-buy', itemId })
      : this.inventoryService.transact({
          consume: [{ bucket: offer.bucket, id: offer.id, amount: 1 }],
          mutate: (save) => { save.realm.wallet.coins += offer.sell; }
        }, { type: 'merchant-sell', itemId });
    if (!result?.ok) this.notice(result?.code || 'Trade could not be completed.');
    this.renderMerchant();
  }

  restParty() {
    if (!this.stateService) return;
    const save = this.stateService.read();
    Object.values(save.realm.party.characters).forEach((character) => { character.hp = character.maxHp; });
    save.realm.basecamp.lastRestAt = Date.now();
    this.stateService.commit(save, { type: 'basecamp-rest' });
    this.notice('The active roster is fully restored.');
    this.renderRest();
  }

  selectedCharacter(save) {
    const characters = save.realm.party.characters;
    if (!characters[this.selectedCharacterId]) this.selectedCharacterId = save.realm.party.active[0] || Object.keys(characters)[0] || '';
    return characters[this.selectedCharacterId] || null;
  }

  toggleParty(characterId) {
    const save = this.stateService.read();
    const active = [...save.realm.party.active];
    const reserve = [...save.realm.party.reserve];
    if (active.includes(characterId)) {
      if (active.length <= 1) return this.notice('At least one active character is required.');
      this.stateService.setParty(active.filter((id) => id !== characterId), [...reserve, characterId]);
    } else {
      if (active.length >= 4) return this.notice('The active party already has four characters.');
      this.stateService.setParty([...active, characterId], reserve.filter((id) => id !== characterId));
    }
    this.renderParty();
  }

  equip(instanceId) {
    const save = this.stateService.read();
    const character = this.selectedCharacter(save);
    const record = save.realm.inventory.equipment[instanceId];
    if (!character || !record) return;
    const slot = record.slot || 'utility';
    const result = this.stateService.transferEquipment({ characterId: character.id, instanceId, slot });
    if (!result.ok) this.notice(result.code);
    this.renderParty();
  }

  unequip(slot) {
    const save = this.stateService.read();
    const character = this.selectedCharacter(save);
    if (!character) return;
    const result = this.stateService.transferEquipment({ characterId: character.id, slot, direction: 'unequip' });
    if (!result.ok) this.notice(result.code);
    this.renderParty();
  }

  notice(message) {
    const note = document.getElementById('realmDrawerNote');
    if (!note) return;
    note.hidden = false;
    note.textContent = String(message || '');
  }

  render() {
    if (!this.mounted || this.runtime?.getView?.() !== 'basecamp') return;
    const drawer = document.getElementById('realmPanelDrawer');
    if (!drawer?.hidden) this.prepareFocusedMenu();
    if (this.mode === 'merchant') this.renderMerchant();
    else if (this.mode === 'rest') this.renderRest();
    else if (this.mode === 'party') this.renderParty();
    else this.renderStorage();
  }

  renderStorage() {
    const pane = document.getElementById('realmDrawerSettlement');
    if (!pane || !this.inventoryService) return;
    const save = this.inventoryService.read();
    pane.innerHTML = `<div class="basecamp-service"><header><span>Storehouse</span><strong>Shared Realm inventory</strong><small>Every connected module reads and writes these same buckets.</small></header>${Object.entries(save.realm.inventory).map(([bucket, values]) => {
      const entries = itemEntries(bucket, values);
      return `<section><h5>${BUCKET_LABELS[bucket]}</h5><div class="basecamp-item-grid">${entries.length ? entries.map((item) => `<article><strong>${escapeHtml(item.name)}</strong><span>${item.count}</span></article>`).join('') : '<p>Empty</p>'}</div></section>`;
    }).join('')}</div>`;
  }

  renderMerchant() {
    const pane = document.getElementById('realmDrawerStores');
    if (!pane || !this.inventoryService) return;
    const save = this.inventoryService.read();
    pane.innerHTML = `<div class="basecamp-service"><header><span>Merchant Post</span><strong>Buy and sell supplies</strong><small>Purchases and sales commit through one checked Realm transaction.</small></header><div class="basecamp-trade-list">${MERCHANT_OFFERS.map((offer) => {
      const count = Number(save.realm.inventory[offer.bucket][offer.id] || 0);
      return `<article><div><strong>${offer.name}</strong><small>Owned ${count}</small></div><button data-basecamp-action="buy" data-item-id="${offer.id}" ${save.realm.wallet.coins < offer.buy ? 'disabled' : ''}>Buy ${offer.buy}</button><button data-basecamp-action="sell" data-item-id="${offer.id}" ${count < 1 ? 'disabled' : ''}>Sell ${offer.sell}</button></article>`;
    }).join('')}</div></div>`;
  }

  renderRest() {
    const pane = document.getElementById('realmDrawerSettlement');
    if (!pane || !this.stateService) return;
    const save = this.stateService.read();
    const members = Object.values(save.realm.party.characters);
    pane.innerHTML = `<div class="basecamp-service"><header><span>Campfire & Rest</span><strong>Roster recovery</strong><small>Rest restores every registered character to maximum HP.</small></header><div class="basecamp-item-grid">${members.map((member) => `<article><strong>${escapeHtml(member.name || member.id)}</strong><span>${Math.round(member.hp)} / ${Math.round(member.maxHp)} HP</span></article>`).join('') || '<p>No characters registered.</p>'}</div><button class="action" data-basecamp-action="rest" ${members.length ? '' : 'disabled'}>Rest the roster</button></div>`;
  }

  renderParty() {
    const pane = document.getElementById('realmDrawerExpeditions');
    if (!pane || !this.stateService) return;
    const save = this.stateService.read();
    const character = this.selectedCharacter(save);
    const active = new Set(save.realm.party.active);
    const stash = Object.values(save.realm.inventory.equipment);
    pane.innerHTML = `<div class="basecamp-service"><header><span>Party Preparation</span><strong>${save.realm.party.active.length} / 4 active</strong><small>Select a character, set active/reserve status, and transfer shared equipment.</small></header><div class="basecamp-roster">${Object.values(save.realm.party.characters).map((member) => `<button class="${member.id === character?.id ? 'is-selected' : ''}" data-basecamp-action="select-character" data-character-id="${member.id}"><strong>${escapeHtml(member.name || member.id)}</strong><span>${active.has(member.id) ? 'Active' : 'Reserve'} · Level ${member.level}</span></button>`).join('')}</div>${character ? `<section><h5>${escapeHtml(character.name || character.id)}</h5><button data-basecamp-action="toggle-party" data-character-id="${character.id}">${active.has(character.id) ? 'Move to reserve' : 'Add to active party'}</button><h5>Equipped</h5><div class="basecamp-item-grid">${Object.entries(character.equipment || {}).map(([slot, record]) => `<article><strong>${escapeHtml(record.name || titleCase(record.itemId || record.id))}</strong><button data-basecamp-action="unequip" data-slot="${slot}">Unequip ${titleCase(slot)}</button></article>`).join('') || '<p>No shared equipment equipped.</p>'}</div><h5>Stash equipment</h5><div class="basecamp-item-grid">${stash.map((record) => `<article><strong>${escapeHtml(record.name || titleCase(record.itemId || record.id))}</strong><button data-basecamp-action="equip" data-instance-id="${record.id}">Equip ${titleCase(record.slot || 'utility')}</button></article>`).join('') || '<p>No equipment in the stash.</p>'}</div></section>` : '<p>No character selected.</p>'}</div>`;
  }
}

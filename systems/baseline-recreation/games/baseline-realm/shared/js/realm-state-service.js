import { normaliseRealmSave } from './realm-model.js';

function cleanId(value) {
  return String(value || '').trim();
}

function uniqueIds(values) {
  return [...new Set((Array.isArray(values) ? values : []).map(cleanId).filter(Boolean))];
}

export class RealmStateService {
  constructor({ getSave, setSave, eventBus, inventoryService, workshopService } = {}) {
    if (typeof getSave !== 'function' || typeof setSave !== 'function') {
      throw new TypeError('RealmStateService requires getSave and setSave functions.');
    }
    this.getSave = getSave;
    this.setSave = setSave;
    this.eventBus = eventBus;
    this.inventoryService = inventoryService;
    this.workshopService = workshopService;
  }

  read() {
    return normaliseRealmSave(this.getSave());
  }

  commit(save, reason) {
    const normalised = normaliseRealmSave(save);
    this.setSave(normalised);
    this.eventBus?.emit('realm:state:changed', { reason, save: normalised });
    return normalised;
  }

  wallet() {
    return { ...this.read().realm.wallet };
  }

  adjustWallet(delta = {}) {
    if (this.inventoryService?.adjustWallet) return this.inventoryService.adjustWallet(delta);
    const save = this.read();
    const coins = Math.round(Number(delta.coins || 0));
    const spirit = Math.round(Number(delta.spirit || 0));
    if (save.realm.wallet.coins + coins < 0 || save.realm.wallet.spirit + spirit < 0) {
      return { ok: false, code: 'INSUFFICIENT_WALLET', wallet: { ...save.realm.wallet }, save };
    }
    save.realm.wallet.coins += coins;
    save.realm.wallet.spirit += spirit;
    const committed = this.commit(save, { type: 'wallet', coins, spirit });
    return { ok: true, wallet: committed.realm.wallet, save: committed };
  }

  registerCharacters(characters = []) {
    const save = this.read();
    const roster = save.realm.party.characters;
    for (const character of Array.isArray(characters) ? characters : []) {
      const id = cleanId(character?.id);
      if (!id) continue;
      roster[id] = { ...roster[id], ...character, id };
    }
    const known = Object.keys(roster);
    const active = uniqueIds(save.realm.party.active).filter((id) => known.includes(id)).slice(0, 4);
    const listed = new Set([...active, ...save.realm.party.reserve]);
    save.realm.party.active = active;
    save.realm.party.reserve = uniqueIds([...save.realm.party.reserve, ...known.filter((id) => !listed.has(id))])
      .filter((id) => known.includes(id) && !active.includes(id));
    return this.commit(save, { type: 'party-register', characterIds: known });
  }

  setParty(active = [], reserve = []) {
    const save = this.read();
    const known = new Set(Object.keys(save.realm.party.characters));
    const nextActive = uniqueIds(active).filter((id) => known.has(id)).slice(0, 4);
    const activeSet = new Set(nextActive);
    const nextReserve = uniqueIds(reserve).filter((id) => known.has(id) && !activeSet.has(id));
    for (const id of known) if (!activeSet.has(id) && !nextReserve.includes(id)) nextReserve.push(id);
    save.realm.party.active = nextActive;
    save.realm.party.reserve = nextReserve;
    return this.commit(save, { type: 'party-set', active: nextActive, reserve: nextReserve });
  }

  transferEquipment({ characterId, instanceId, slot, direction = 'equip' } = {}) {
    const save = this.read();
    const character = save.realm.party.characters[cleanId(characterId)];
    if (!character) return { ok: false, code: 'UNKNOWN_CHARACTER', save };
    character.equipment = character.equipment && typeof character.equipment === 'object' ? character.equipment : {};
    const equipment = save.realm.inventory.equipment;
    const targetSlot = cleanId(slot);
    if (!targetSlot) return { ok: false, code: 'SLOT_REQUIRED', save };

    if (direction === 'unequip') {
      const record = character.equipment[targetSlot];
      if (!record) return { ok: false, code: 'SLOT_EMPTY', save };
      const id = cleanId(record.id || instanceId);
      if (!id || equipment[id]) return { ok: false, code: 'EQUIPMENT_ID_CONFLICT', save };
      equipment[id] = { ...record, id };
      delete character.equipment[targetSlot];
      return { ok: true, save: this.commit(save, { type: 'equipment-unequip', characterId, instanceId: id, slot: targetSlot }) };
    }

    const id = cleanId(instanceId);
    const record = equipment[id];
    if (!record) return { ok: false, code: 'EQUIPMENT_NOT_IN_STASH', save };
    const previous = character.equipment[targetSlot];
    if (previous) {
      const previousId = cleanId(previous.id);
      if (!previousId || equipment[previousId]) return { ok: false, code: 'EQUIPMENT_ID_CONFLICT', save };
      equipment[previousId] = { ...previous, id: previousId };
    }
    character.equipment[targetSlot] = { ...record, id };
    delete equipment[id];
    return { ok: true, save: this.commit(save, { type: 'equipment-equip', characterId, instanceId: id, slot: targetSlot }) };
  }

  useItem(itemId, moduleId = 'realm') {
    if (!this.workshopService?.useItem) return { ok: false, code: 'ITEM_SERVICE_UNAVAILABLE' };
    return this.workshopService.useItem(itemId, moduleId);
  }

  moduleSnapshot(moduleId = 'realm') {
    const save = this.read();
    return {
      version: save.realm.version,
      wallet: { ...save.realm.wallet },
      inventory: save.realm.inventory,
      party: save.realm.party,
      effects: this.workshopService?.resolveEffects?.(moduleId, save) || {},
      module: save.realm[moduleId] || {}
    };
  }
}

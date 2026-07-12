import { normaliseRealmSave } from './realm-model.js';

const COUNT_BUCKETS = new Set(['materials', 'items', 'food', 'potions', 'tools']);
const ALL_BUCKETS = new Set([...COUNT_BUCKETS, 'equipment']);

function positiveAmount(value, fallback = 1) {
  const number = Math.round(Number(value));
  return Number.isFinite(number) && number > 0 ? number : fallback;
}

function normaliseOperations(operations = []) {
  if (!Array.isArray(operations)) throw new TypeError('Inventory operations must be an array.');
  return operations.map((operation) => {
    const bucket = String(operation?.bucket || '');
    const id = String(operation?.id || '').trim();
    if (!id) throw new TypeError('Inventory operations require an item id.');
    return {
      bucket,
      id,
      amount: positiveAmount(operation?.amount),
      record: operation?.record && typeof operation.record === 'object' ? { ...operation.record } : null
    };
  });
}

export class RealmInventoryService {
  constructor({ getSave, setSave, eventBus, instanceIdFactory, now = () => Date.now() } = {}) {
    if (typeof getSave !== 'function' || typeof setSave !== 'function') {
      throw new TypeError('RealmInventoryService requires getSave and setSave functions.');
    }
    this.getSave = getSave;
    this.setSave = setSave;
    this.eventBus = eventBus;
    this.instanceIdFactory = typeof instanceIdFactory === 'function' ? instanceIdFactory : null;
    this.now = now;
    this.instanceCounter = 0;
  }

  read() {
    return normaliseRealmSave(this.getSave());
  }

  commit(save, reason) {
    const normalised = normaliseRealmSave(save);
    this.setSave(normalised);
    this.eventBus?.emit('realm:inventory:changed', { reason, inventory: normalised.realm.inventory });
    this.eventBus?.emit('realm:state:changed', { reason, save: normalised });
    return normalised;
  }

  equipmentKeys(inventory, id) {
    return Object.entries(inventory || {})
      .filter(([key, record]) => key === id || record?.itemId === id || record?.definitionId === id)
      .map(([key]) => key);
  }

  quantity(bucket, id) {
    this.assertBucket(bucket);
    const inventory = this.read().realm.inventory[bucket];
    if (bucket === 'equipment') return this.equipmentKeys(inventory, id).length;
    return Math.max(0, Number(inventory[id] || 0));
  }

  nextEquipmentInstanceId(id) {
    this.instanceCounter += 1;
    if (this.instanceIdFactory) return String(this.instanceIdFactory(id, this.instanceCounter));
    return `${id}#${this.now().toString(36)}-${this.instanceCounter.toString(36)}`;
  }

  transact({ consume = [], produce = [], mutate = null } = {}, reason = { type: 'transaction' }) {
    const consumed = normaliseOperations(consume);
    const produced = normaliseOperations(produce);
    [...consumed, ...produced].forEach((operation) => this.assertBucket(operation.bucket));

    const save = this.read();
    const inventory = save.realm.inventory;

    for (const operation of consumed) {
      const available = operation.bucket === 'equipment'
        ? this.equipmentKeys(inventory.equipment, operation.id).length
        : Math.max(0, Number(inventory[operation.bucket][operation.id] || 0));
      if (available < operation.amount) {
        return {
          ok: false,
          code: 'INSUFFICIENT_INVENTORY',
          bucket: operation.bucket,
          id: operation.id,
          required: operation.amount,
          available,
          save
        };
      }
    }

    for (const operation of consumed) {
      const bucket = inventory[operation.bucket];
      if (operation.bucket === 'equipment') {
        this.equipmentKeys(bucket, operation.id).slice(0, operation.amount).forEach((key) => delete bucket[key]);
      } else {
        const next = Number(bucket[operation.id] || 0) - operation.amount;
        if (next > 0) bucket[operation.id] = next;
        else delete bucket[operation.id];
      }
    }

    for (const operation of produced) {
      const bucket = inventory[operation.bucket];
      if (operation.bucket === 'equipment') {
        for (let index = 0; index < operation.amount; index += 1) {
          const instanceId = this.nextEquipmentInstanceId(operation.id);
          if (bucket[instanceId]) throw new Error(`Duplicate Realm equipment instance id: ${instanceId}`);
          bucket[instanceId] = {
            ...(operation.record || {}),
            id: instanceId,
            itemId: operation.id,
            definitionId: operation.id
          };
        }
      } else {
        bucket[operation.id] = Math.max(0, Number(bucket[operation.id] || 0)) + operation.amount;
      }
    }

    if (mutate !== null) {
      if (typeof mutate !== 'function') throw new TypeError('Inventory transaction mutate must be a function.');
      mutate(save);
    }

    const committed = this.commit(save, reason);
    return { ok: true, save: committed, consumed, produced };
  }

  add(bucket, id, amount = 1, record = null) {
    return this.transact({ produce: [{ bucket, id, amount, record }] }, { type: 'add', bucket, id, amount }).save;
  }

  remove(bucket, id, amount = 1) {
    return this.transact({ consume: [{ bucket, id, amount }] }, { type: 'remove', bucket, id, amount });
  }

  spendMaterial(id, amount = 1) {
    return this.transact(
      { consume: [{ bucket: 'materials', id, amount }] },
      { type: 'spend-material', id, amount }
    ).ok;
  }

  adjustWallet({ coins = 0, spirit = 0 } = {}) {
    const save = this.read();
    const wallet = save.realm.wallet;
    const coinDelta = Math.round(Number(coins || 0));
    const spiritDelta = Math.round(Number(spirit || 0));
    if (wallet.coins + coinDelta < 0 || wallet.spirit + spiritDelta < 0) {
      return { ok: false, code: 'INSUFFICIENT_WALLET', wallet: { ...wallet }, save };
    }
    wallet.coins += coinDelta;
    wallet.spirit += spiritDelta;
    const committed = this.commit(save, { type: 'wallet', coins: coinDelta, spirit: spiritDelta });
    this.eventBus?.emit('realm:wallet:changed', { wallet: committed.realm.wallet, coins: coinDelta, spirit: spiritDelta });
    return { ok: true, wallet: committed.realm.wallet, save: committed };
  }

  assertBucket(bucket) {
    if (!ALL_BUCKETS.has(bucket)) throw new Error(`Unknown Realm inventory bucket: ${bucket}`);
  }
}

export const realmInventoryBuckets = Object.freeze([...ALL_BUCKETS]);

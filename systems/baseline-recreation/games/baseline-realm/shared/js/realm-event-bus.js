export class RealmEventBus {
  constructor() {
    this.listeners = new Map();
  }

  on(type, listener) {
    if (typeof listener !== 'function') throw new TypeError('Realm event listener must be a function.');
    const key = String(type || '').trim();
    if (!key) throw new TypeError('Realm event type is required.');
    const listeners = this.listeners.get(key) || new Set();
    listeners.add(listener);
    this.listeners.set(key, listeners);
    return () => this.off(key, listener);
  }

  once(type, listener) {
    const unsubscribe = this.on(type, (event) => {
      unsubscribe();
      listener(event);
    });
    return unsubscribe;
  }

  off(type, listener) {
    const listeners = this.listeners.get(String(type || ''));
    if (!listeners) return false;
    const removed = listeners.delete(listener);
    if (!listeners.size) this.listeners.delete(String(type || ''));
    return removed;
  }

  emit(type, detail = {}) {
    const key = String(type || '').trim();
    if (!key) return;
    const event = Object.freeze({ type: key, detail, timestamp: Date.now() });
    const listeners = [...(this.listeners.get(key) || []), ...(this.listeners.get('*') || [])];
    listeners.forEach((listener) => listener(event));
  }

  clear(type) {
    if (typeof type === 'undefined') this.listeners.clear();
    else this.listeners.delete(String(type));
  }
}

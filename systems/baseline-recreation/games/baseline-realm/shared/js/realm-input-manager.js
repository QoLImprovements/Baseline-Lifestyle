function normaliseKey(value) {
  return String(value || '').toLowerCase();
}

export class RealmInputManager {
  constructor({ eventBus, root = globalThis.document, contextMenuSelector = '#realmSceneFrame' } = {}) {
    this.eventBus = eventBus;
    this.root = root;
    this.contextMenuSelector = contextMenuSelector;
    this.keyboardBindings = new Map();
    this.pointerBindings = [];
    this.controllerProviders = new Set();
    this.started = false;
    this.boundKeydown = this.handleKeydown.bind(this);
    this.boundPointer = this.handlePointer.bind(this);
    this.boundContextMenu = this.handleContextMenu.bind(this);
  }

  bindKeyboard(action, keys, options = {}) {
    const definition = {
      action,
      keys: new Set((Array.isArray(keys) ? keys : [keys]).map(normaliseKey)),
      when: typeof options.when === 'function' ? options.when : () => true,
      preventDefault: options.preventDefault !== false,
      payload: options.payload
    };
    this.keyboardBindings.set(action, definition);
    return () => this.keyboardBindings.delete(action);
  }

  bindPointer(action, selector, options = {}) {
    const definition = {
      action,
      selector,
      when: typeof options.when === 'function' ? options.when : () => true,
      payload: typeof options.payload === 'function' ? options.payload : () => options.payload || {}
    };
    this.pointerBindings.push(definition);
    return () => {
      const index = this.pointerBindings.indexOf(definition);
      if (index >= 0) this.pointerBindings.splice(index, 1);
    };
  }

  registerControllerProvider(provider) {
    if (!provider || typeof provider.subscribe !== 'function') {
      throw new TypeError('Controller providers must expose subscribe(listener).');
    }
    this.controllerProviders.add(provider);
    const unsubscribe = provider.subscribe((action, payload = {}) => this.dispatch(action, 'controller', payload));
    return () => {
      this.controllerProviders.delete(provider);
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }

  dispatch(action, source, payload = {}, originalEvent = null) {
    this.eventBus?.emit('realm:input', { action, source, payload, originalEvent });
    this.eventBus?.emit(`realm:input:${action}`, { source, payload, originalEvent });
  }

  handleKeydown(event) {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey || event.isComposing) return;
    const target = event.target;
    const typing = !!(target && (target.matches?.('input, textarea, select') || target.isContentEditable));
    if (typing) return;
    const key = normaliseKey(event.key);
    for (const definition of this.keyboardBindings.values()) {
      if (!definition.keys.has(key) || !definition.when(event)) continue;
      if (definition.preventDefault) event.preventDefault();
      const payload = typeof definition.payload === 'function' ? definition.payload(event) : definition.payload || {};
      this.dispatch(definition.action, 'keyboard', payload, event);
      break;
    }
  }

  resolvePointerElement(event, selector) {
    const path = typeof event?.composedPath === 'function' ? event.composedPath() : [];
    for (const node of path) {
      if (node?.matches?.(selector)) return node;
    }
    return event?.target?.closest?.(selector) || null;
  }

  handlePointer(event) {
    for (const definition of this.pointerBindings) {
      const element = this.resolvePointerElement(event, definition.selector);
      if (!element || element.disabled || !definition.when(event, element)) continue;
      const source = event.detail === 0
        ? 'keyboard'
        : globalThis.matchMedia?.('(pointer: coarse)')?.matches
          ? 'touch'
          : 'mouse';
      try { event.__baselineRealmHandled = true; } catch (_error) {}
      this.dispatch(definition.action, source, definition.payload(element, event), event);
      break;
    }
  }

  handleContextMenu(event) {
    if (event.defaultPrevented || !this.contextMenuSelector) return;
    const realmSurface = event.target?.closest?.(this.contextMenuSelector);
    if (!realmSurface) return;

    // Suppress only the browser menu. The event continues to propagate so a
    // future Realm secondary-action binding can use the same right-click path.
    event.preventDefault();
  }

  start() {
    if (this.started || !this.root?.addEventListener) return;
    this.started = true;
    this.root.addEventListener('keydown', this.boundKeydown);
    // Native click is the common activation event for mouse, touch, keyboard,
    // switch controls and assistive technology. Capture prevents an unrelated
    // bubbling handler from suppressing Realm controls before delegation sees it.
    this.pointerEventName = 'click';
    this.pointerEventCapture = true;
    this.root.addEventListener(this.pointerEventName, this.boundPointer, this.pointerEventCapture);
    this.contextMenuEventCapture = true;
    this.root.addEventListener('contextmenu', this.boundContextMenu, this.contextMenuEventCapture);
  }

  stop() {
    if (!this.started || !this.root?.removeEventListener) return;
    this.started = false;
    this.root.removeEventListener('keydown', this.boundKeydown);
    this.root.removeEventListener(this.pointerEventName || 'click', this.boundPointer, this.pointerEventCapture || false);
    this.root.removeEventListener('contextmenu', this.boundContextMenu, this.contextMenuEventCapture || false);
  }
}

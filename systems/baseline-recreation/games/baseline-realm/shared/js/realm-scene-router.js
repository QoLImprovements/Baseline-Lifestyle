export class RealmSceneRouter {
  constructor({ eventBus } = {}) {
    this.eventBus = eventBus;
    this.scenes = new Map();
    this.current = null;
    this.context = null;
    this.navigation = Promise.resolve();
  }

  register(scene) {
    if (!scene || typeof scene.id !== 'string' || !scene.id.trim()) {
      throw new TypeError('Realm scenes require a stable id.');
    }
    if (typeof scene.enter !== 'function') throw new TypeError(`Realm scene "${scene.id}" requires enter().`);
    this.scenes.set(scene.id, scene);
    return this;
  }

  has(id) {
    return this.scenes.has(String(id || ''));
  }

  navigate(id, payload = {}) {
    const destination = String(id || '');
    const run = () => this.performNavigation(destination, payload);
    this.navigation = this.navigation.then(run, run);
    return this.navigation;
  }

  async performNavigation(id, payload = {}) {
    const next = this.scenes.get(id);
    if (!next) throw new Error(`Unknown Baseline Realm scene: ${id}`);
    const previous = this.current;
    const previousContext = this.context;

    if (previous && previous !== next && typeof previous.exit === 'function') {
      await previous.exit({ ...(previousContext || {}), next: next.id, payload });
    }

    this.eventBus?.emit('realm:scene:leaving', { from: previous?.id || null, to: next.id, payload });
    const context = { router: this, eventBus: this.eventBus, previous: previous?.id || null, payload };

    try {
      await next.enter(context);
      this.current = next;
      this.context = context;
      this.eventBus?.emit('realm:scene:entered', { from: previous?.id || null, to: next.id, payload });
      return next;
    } catch (error) {
      this.current = previous;
      this.context = previousContext;
      this.eventBus?.emit('realm:scene:failed', { from: previous?.id || null, to: next.id, payload, error });

      if (previous && previous !== next && typeof previous.enter === 'function') {
        try {
          await previous.enter({
            ...(previousContext || {}),
            router: this,
            eventBus: this.eventBus,
            previous: next.id,
            payload: { recovery: true, failedScene: next.id }
          });
          this.eventBus?.emit('realm:scene:recovered', { scene: previous.id, failedScene: next.id });
        } catch (recoveryError) {
          this.eventBus?.emit('realm:scene:recovery-failed', { scene: previous.id, failedScene: next.id, error: recoveryError });
        }
      }
      throw error;
    }
  }

  getCurrentSceneId() {
    return this.current?.id || null;
  }
}

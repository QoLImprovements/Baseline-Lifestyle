const REALM_ROOT = '/systems/baseline-recreation/games/baseline-realm/';

function assertRealmAssetPath(path) {
  const value = String(path || '');
  if (!value.startsWith(REALM_ROOT)) {
    throw new Error(`Baseline Realm assets must use an absolute path under ${REALM_ROOT}`);
  }
  return value;
}

export class RealmAssetLoader {
  constructor({ fetchImpl = globalThis.fetch, imageFactory = () => new Image() } = {}) {
    this.fetchImpl = fetchImpl;
    this.imageFactory = imageFactory;
    this.cache = new Map();
  }

  async loadText(path) {
    const url = assertRealmAssetPath(path);
    if (this.cache.has(url)) return this.cache.get(url);
    const promise = this.fetchImpl(url, { credentials: 'same-origin' }).then((response) => {
      if (!response.ok) throw new Error(`Realm asset request failed (${response.status}): ${url}`);
      return response.text();
    });
    this.cache.set(url, promise);
    return promise;
  }

  async loadJson(path) {
    return JSON.parse(await this.loadText(path));
  }

  loadImage(path) {
    const url = assertRealmAssetPath(path);
    if (this.cache.has(url)) return this.cache.get(url);
    const promise = new Promise((resolve, reject) => {
      const image = this.imageFactory();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Realm image failed to load: ${url}`));
      image.src = url;
    });
    this.cache.set(url, promise);
    return promise;
  }

  load(entry) {
    if (entry?.type === 'json') return this.loadJson(entry.path);
    if (entry?.type === 'image') return this.loadImage(entry.path);
    return this.loadText(entry?.path);
  }

  async preload(entries = [], { onProgress = null, continueOnError = true } = {}) {
    const assets = Array.isArray(entries) ? entries : [];
    const report = { total: assets.length, loaded: 0, failed: 0, errors: [] };
    const notify = (entry, status) => {
      if (typeof onProgress === 'function') onProgress({ ...report, entry, status, progress: report.total ? (report.loaded + report.failed) / report.total : 1 });
    };
    await Promise.all(assets.map(async (entry) => {
      try {
        await this.load(entry);
        report.loaded += 1;
        notify(entry, 'loaded');
      } catch (error) {
        report.failed += 1;
        report.errors.push({ path: entry?.path || '', message: error?.message || String(error) });
        this.cache.delete(entry?.path);
        notify(entry, 'failed');
        if (!continueOnError) throw error;
      }
    }));
    return report;
  }

  async preloadGroups(groups = {}, options = {}) {
    const reports = {};
    for (const [name, entries] of Object.entries(groups || {})) {
      reports[name] = await this.preload(entries, options);
    }
    return reports;
  }

  clear(path) {
    if (path) this.cache.delete(assertRealmAssetPath(path));
    else this.cache.clear();
  }
}

export { REALM_ROOT, assertRealmAssetPath };

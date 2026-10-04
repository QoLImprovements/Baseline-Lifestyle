import './realm-stage-1-shell.js?v=REALM_WOOD_AUTHORITY_20260802_1';
import { REALM_CRITICAL_PRELOAD, REALM_PRELOAD_GROUPS } from '../data/realm-preload-manifest.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { RealmAccessibilityService } from './realm-accessibility-service.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { RealmAssetLoader } from './realm-asset-loader.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { RealmAudioService } from './realm-audio-service.js?v=REALM_WOOD_AUTHORITY_20260802_1';
import { RealmEventBus } from './realm-event-bus.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { RealmGamepadProvider } from './realm-gamepad-provider.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { RealmInputManager } from './realm-input-manager.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { bindRealmInputs } from './realm-input-bindings.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { RealmInventoryService } from './realm-inventory-service.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { RealmPerformanceMonitor } from './realm-performance.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { RealmRuntimeUi } from './realm-runtime-ui.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { RealmSceneRouter } from './realm-scene-router.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { RealmStateService } from './realm-state-service.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { createRealmLazySceneAuthority } from './realm-lazy-scenes.js?v=REALM_AUTHORITY_SPLIT_20261004_1';
import {
  createDefaultLegacyNinjaProfile,
  legacyProfileFromRealmSave,
  migrateLegacyNinjaProfile,
  normaliseLegacyNinjaProfile,
  RealmSaveAdapter
} from './realm-save-adapter.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { createBasecampScene } from '../../basecamp/js/basecamp-scene.js?v=REALM_WOOD_AUTHORITY_20260802_1';
import { createNinjaTrainingScene } from '../../ninja-training/js/ninja-training-scene.js?v=REALM_WOOD_AUTHORITY_20260802_1';
import { createWorkshopScene } from '../../workshop/js/workshop-scene.js?v=REALM_WOOD_AUTHORITY_20260802_1';
import { RealmWorkshopService } from '../../workshop/js/workshop-service.js?v=REALM_DARTS_TACTICAL_REPAIR_20260707_2';
import { createNinjaTrainingRuntime } from '../../ninja-training/js/ninja-training-runtime.js?v=REALM_WOOD_AUTHORITY_20260802_1';

const BUILD = 'REALM_WOOD_AUTHORITY_20260802_1';
const STAGE_ONE_READY_BUILD = 'BASELINE_REALM_SHELL_INTERACTION_REPAIR_20260707_2';
const OPTIONAL_MODULE_URLS = Object.freeze({
  explorationScene: `../../exploration/js/exploration-scene.js?v=${BUILD}`,
  explorationRoster: `../../exploration/data/meridian-grove.js?v=${BUILD}`,
  calorieEscapeScene: `../../calorie-escape/js/calorie-escape-scene.js?v=${BUILD}`,
  tacticalScene: `../../tactical-operations/js/tactical-operations-scene.js?v=${BUILD}`,
  tacticalRoster: `../../tactical-operations/js/tactical-operations-engine.mjs?v=${BUILD}`
});
const EXTERNAL_SCENE_IDS = Object.freeze(['calorie-escape', 'tactical-operations']);

const eventBus = new RealmEventBus();
const assetLoader = new RealmAssetLoader();
const inputManager = new RealmInputManager({ eventBus });
const sceneRouter = new RealmSceneRouter({ eventBus });
const gamepadProvider = new RealmGamepadProvider();
const saveAdapter = new RealmSaveAdapter();
const runtimeUi = new RealmRuntimeUi({ eventBus });
const performanceMonitor = new RealmPerformanceMonitor({ eventBus });

let runtime = null;
let core = null;
let inventoryService = null;
let workshopService = null;
let stateService = null;
let audioService = null;
let accessibilityService = null;
let assetsReady = Promise.resolve({ total: 0, loaded: 0, failed: 0, errors: [] });
let rosterReady = Promise.resolve([]);
let explorationRosterIds = [];
let configured = false;

function activeProfile() {
  return core?.profiles?.ninja || null;
}

function syncProfileRealm(profile = activeProfile(), { mirrorGuest = true } = {}) {
  if (!profile) return null;
  const save = migrateLegacyNinjaProfile(profile);
  const legacy = legacyProfileFromRealmSave(save, profile);
  Object.keys(profile).forEach((key) => {
    if (!(key in legacy)) delete profile[key];
  });
  Object.assign(profile, legacy);
  if (mirrorGuest) saveAdapter.saveGuest(save);
  return save;
}

function setRealmSave(save, reason = { type: 'realm-save' }) {
  const profile = activeProfile();
  if (!profile) return null;
  const persisted = saveAdapter.saveGuest(save);
  Object.assign(profile, legacyProfileFromRealmSave(persisted, profile));
  core.scheduleSave('ninja');
  eventBus.emit('realm:save:committed', { reason, revision: persisted.realm.revision, savedAt: persisted.realm.savedAt });
  return persisted;
}

function updateSettings(mutator, reason) {
  const save = migrateLegacyNinjaProfile(activeProfile());
  mutator(save.realm.settings);
  return setRealmSave(save, reason);
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));
}

const { createLazyScene, prepareExternalSceneView, restorePersistentSceneView } = createRealmLazySceneAuthority({
  eventBus,
  getRuntime:()=>runtime,
  externalSceneIds:EXTERNAL_SCENE_IDS,
  escapeHtml
});

async function registerConnectedRoster() {
  const [explorationResult, tacticalResult] = await Promise.allSettled([
    import(`${OPTIONAL_MODULE_URLS.explorationRoster}&roster=1`),
    import(`${OPTIONAL_MODULE_URLS.tacticalRoster}&roster=1`)
  ]);
  const connectedRoster = [];

  if (explorationResult.status === 'fulfilled') {
    const partyBlueprints = Array.isArray(explorationResult.value.PARTY_BLUEPRINTS)
      ? explorationResult.value.PARTY_BLUEPRINTS
      : [];
    explorationRosterIds = partyBlueprints.map((character) => character.id);
    connectedRoster.push(...partyBlueprints.map((character) => ({
      ...character,
      hp: Math.max(1, Number(character.maxHp || 1)),
      maxHp: Math.max(1, Number(character.maxHp || 1)),
      equipment: {},
      moduleEquipment: { exploration: { ...(character.equipment || {}) } },
      sources: ['exploration']
    })));
  } else {
    eventBus.emit('realm:roster:module-unavailable', { moduleId: 'exploration', error: explorationResult.reason });
    console.warn('[Baseline Realm] Exploration roster was unavailable; Realm startup continued.', explorationResult.reason);
  }

  if (tacticalResult.status === 'fulfilled') {
    const jobs = tacticalResult.value.JOBS || {};
    const roster = Array.isArray(tacticalResult.value.ROSTER) ? tacticalResult.value.ROSTER : [];
    connectedRoster.push(...roster.map((character) => {
      const job = jobs[character.job] || {};
      const maxHp = Math.max(1, Number(job.baseHp || 1) + Math.max(1, Number(character.level || 1)) * 4);
      return {
        ...character,
        role: job.name || character.job,
        hp: maxHp,
        maxHp,
        equipment: {},
        moduleEquipment: { 'tactical-operations': { ...(character.equipment || {}) } },
        sources: ['tactical-operations']
      };
    }));
  } else {
    eventBus.emit('realm:roster:module-unavailable', { moduleId: 'tactical-operations', error: tacticalResult.reason });
    console.warn('[Baseline Realm] Tactical Operations roster was unavailable; Realm startup continued.', tacticalResult.reason);
  }

  if (!connectedRoster.length) return [];
  const party = stateService.read().realm.party;
  const missing = connectedRoster.filter((character) => !party.characters[character.id]);
  if (missing.length) stateService.registerCharacters(missing);
  const current = stateService.read().realm.party;
  if (!current.active.length) {
    const preferred = explorationRosterIds.length ? explorationRosterIds : connectedRoster.map((character) => character.id);
    // Exploration begins as Rowan's journey. Other connected characters stay
    // registered as reserves so later recruitment can expand the party.
    const active = preferred.slice(0, 1);
    const reserve = Object.keys(current.characters).filter((id) => !active.includes(id));
    stateService.setParty(active, reserve);
  }
  eventBus.emit('realm:roster:connected', { count: connectedRoster.length });
  return connectedRoster;
}

function registerScenes() {
  const sceneRuntime = Object.freeze({
    ...runtime,
    setView(view) {
      if (EXTERNAL_SCENE_IDS.includes(view)) {
        prepareExternalSceneView(view);
      } else {
        restorePersistentSceneView();
        runtime?.setView?.(view);
      }
    }
  });
  const shared = { runtime: sceneRuntime, inventoryService, workshopService, stateService, eventBus };
  const scenes = [
    createBasecampScene(shared),
    createNinjaTrainingScene(shared),
    createLazyScene({
      id: 'exploration',
      label: 'Exploration',
      shared,
      load: async (attempt, dependencies) => {
        const module = await import(`${OPTIONAL_MODULE_URLS.explorationScene}&attempt=${attempt}`);
        return module.createExplorationScene(dependencies);
      }
    }),
    createWorkshopScene(shared),
    createLazyScene({
      id: 'calorie-escape',
      label: 'Calorie Escape',
      shared,
      load: async (attempt, dependencies) => {
        const module = await import(`${OPTIONAL_MODULE_URLS.calorieEscapeScene}&attempt=${attempt}`);
        return module.createCalorieEscapeScene(dependencies);
      }
    }),
    createLazyScene({
      id: 'tactical-operations',
      label: 'Tactical Operations',
      shared,
      load: async (attempt, dependencies) => {
        const module = await import(`${OPTIONAL_MODULE_URLS.tacticalScene}&attempt=${attempt}`);
        return module.createTacticalOperationsScene(dependencies);
      }
    })
  ];
  scenes.forEach((scene) => sceneRouter.register(scene));
}

function bindRealmVisibility() {
  const panel = document.getElementById('ninjaPanel');
  if (!panel || panel.dataset.realmVisibilityBound) return;
  panel.dataset.realmVisibilityBound = BUILD;
  const publish = (forced) => {
    const active = typeof forced === 'boolean'
      ? forced
      : panel.classList.contains('is-active') && !panel.hidden && document.visibilityState !== 'hidden';
    const detail = { active, scene: sceneRouter.getCurrentSceneId(), build: BUILD };
    eventBus.emit('realm:visibility', detail);
    globalThis.dispatchEvent?.(new CustomEvent('baseline:realm:visibility', { detail }));
    if (!active) audioService?.pauseAll?.();
    else audioService?.resumeAll?.();
  };
  new MutationObserver(() => publish()).observe(panel, { attributes: true, attributeFilter: ['class', 'hidden'] });
  document.addEventListener('visibilitychange', () => publish());
  globalThis.addEventListener?.('baseline:page-leaving', () => publish(false));
  publish();
}

function isolateCoreDependencies(dependencies) {
  if (!dependencies || dependencies.__realmIsolatedCore) return dependencies;
  const isolated = { ...dependencies, __realmIsolatedCore: BUILD };
  isolated.renderGamesList = () => {};
  isolated.syncHashState = () => {};
  let lastSummaryAt = 0;
  isolated.renderHubSummary = () => {
    const now = Date.now();
    if (now - lastSummaryAt < 5000) return;
    lastSummaryAt = now;
    try { dependencies.renderHubSummary?.(); } catch (_error) {}
  };
  return isolated;
}

function configure(dependencies) {
  if (configured) return assetsReady;
  configured = true;
  core = isolateCoreDependencies(dependencies);
  dependencies = core;
  runtimeUi.mount();
  runtimeUi.showLoading();
  const saveProfile = (app) => {
    if (app === 'ninja') syncProfileRealm(activeProfile(), { mirrorGuest: true });
    dependencies.scheduleSave(app);
  };
  runtime = createNinjaTrainingRuntime({
    ...dependencies,
    scheduleSave: saveProfile,
    eventBus,
    inputManager,
    sceneRouter,
    assetLoader
  });
  inventoryService = new RealmInventoryService({
    eventBus,
    getSave: () => migrateLegacyNinjaProfile(activeProfile()),
    setSave: (save) => setRealmSave(save, { type: 'inventory-service' })
  });
  workshopService = new RealmWorkshopService({ inventoryService, eventBus });
  stateService = new RealmStateService({
    eventBus,
    inventoryService,
    workshopService,
    getSave: () => migrateLegacyNinjaProfile(activeProfile()),
    setSave: (save) => setRealmSave(save, { type: 'state-service' })
  });
  rosterReady = registerConnectedRoster().catch((error) => {
    eventBus.emit('realm:roster:load-failed', { error });
    console.error('[Baseline Realm] Connected roster registration failed; Realm startup continued.', error);
    return [];
  });
  audioService = new RealmAudioService({
    eventBus,
    getSettings: () => stateService.read().realm.settings,
    setSettings: (audio) => updateSettings((settings) => { settings.audio = { ...settings.audio, ...audio }; }, { type: 'audio-settings' })
  });
  accessibilityService = new RealmAccessibilityService({
    eventBus,
    getSettings: () => stateService.read().realm.settings,
    setSettings: (reducedMotion) => updateSettings((settings) => { settings.accessibility.reducedMotion = reducedMotion; }, { type: 'accessibility-settings' })
  });
  registerScenes();
  sceneRouter.navigate('basecamp', { initial: true }).catch((error) => {
    console.error('[Baseline Realm] Initial Basecamp navigation failed.', error);
  });
  bindRealmInputs({ runtime, inputManager, eventBus, sceneRouter });
  inputManager.registerControllerProvider(gamepadProvider);
  inputManager.start();
  runtimeUi.bindAudio(audioService);
  audioService.scan();
  audioService.apply();
  bindRealmVisibility();
  accessibilityService.start();
  document.documentElement.setAttribute('data-baseline-realm-stage-one', STAGE_ONE_READY_BUILD);
  document.documentElement.setAttribute('data-baseline-realm-stage-two', BUILD);
  document.documentElement.setAttribute('data-baseline-realm-integration', BUILD);

  assetsReady = assetLoader.preload(REALM_CRITICAL_PRELOAD, {
    continueOnError: true,
    onProgress: (detail) => runtimeUi.setProgress(detail)
  }).then((report) => {
    runtimeUi.finishLoading(report);
    eventBus.emit('realm:assets:critical-ready', report);
    const optionalGroups = Object.fromEntries(
      Object.entries(REALM_PRELOAD_GROUPS).filter(([name]) => !['shared', 'basecamp', 'ninjaTraining'].includes(name))
    );
    assetLoader.preloadGroups(optionalGroups, { continueOnError: true })
      .then((reports) => eventBus.emit('realm:assets:optional-ready', reports))
      .catch((error) => eventBus.emit('realm:assets:optional-failed', { error }));
    eventBus.emit('realm:ready', { build: BUILD, assets: report });
    return report;
  }).catch((error) => {
    runtimeUi.finishLoading({ total: 0, loaded: 0, failed: 1, errors: [error] });
    eventBus.emit('realm:assets:critical-failed', { error });
    throw error;
  });
  return assetsReady;
}

const host = Object.freeze({
  build: BUILD,
  eventBus,
  inputManager,
  sceneRouter,
  assetLoader,
  saveAdapter,
  performanceMonitor,
  configure,
  defaultLegacyProfile: createDefaultLegacyNinjaProfile,
  normaliseLegacyProfile: normaliseLegacyNinjaProfile,
  syncProfileRealm,
  getInventoryService: () => inventoryService,
  getWorkshopService: () => workshopService,
  getStateService: () => stateService,
  getAudioService: () => audioService,
  getAccessibilityService: () => accessibilityService,
  whenAssetsReady: () => assetsReady,
  whenRosterReady: () => rosterReady,
  performanceReport: () => performanceMonitor.report(),
  resolveInventoryEffects: (moduleId) => workshopService?.resolveEffects(moduleId) || {},
  resolveBonuses: () => runtime?.resolveBonuses() || {},
  applyOfflineProgress: () => runtime?.applyOfflineProgress(),
  startLoop: () => runtime?.startLoop(),
  render: () => runtime?.render(),
  renderSummary: () => runtime?.renderSummary() || '',
  syncFullscreenControls: () => runtime?.syncFullscreenControls(),
  toggleFullscreen: () => runtime?.toggleFullscreen(),
  strike: () => runtime?.strike(),
  shuriken: () => runtime?.shuriken(),
  setView: (view) => runtime?.setView(view),
  handleDrawer: (action) => runtime?.handleDrawer(action),
  openDrawerTab: (tab) => runtime?.openDrawerTab(tab),
  handleExploration: (action) => runtime?.handleExploration(action),
  isConfigured: () => configured,
  isRunning: () => Boolean(runtime && stateService)
});

globalThis.BaselineRealmHost = host;

function configureFromAvailableCore() {
  const dependencies = globalThis.BASELINE_GAMES_HUB_CORE_DEPENDENCIES;
  if (!dependencies || configured) return false;
  try {
    configure(dependencies);
    globalThis.dispatchEvent?.(new CustomEvent('baseline:realm:host-ready', { detail:{ build:BUILD } }));
    return true;
  } catch (error) {
    console.error('[Baseline Realm] Deferred host configuration failed.', error);
    return false;
  }
}

if (!configureFromAvailableCore()) {
  const onCoreReady = () => {
    if (configureFromAvailableCore()) globalThis.removeEventListener?.('baseline:games-hub:core-ready', onCoreReady);
  };
  globalThis.addEventListener?.('baseline:games-hub:core-ready', onCoreReady, { once: true });
  Promise.resolve().then(onCoreReady);
}

export { host as BaselineRealmHost };

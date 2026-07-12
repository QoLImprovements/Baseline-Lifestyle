export function bindRealmInputs({ runtime, inputManager, eventBus, sceneRouter }) {
  const active = () => !!document.getElementById('ninjaPanel')?.classList.contains('is-active');
  const jrpgActive = () => runtime.getView() === 'exploration' && !!document.getElementById('realmSceneFrame')?.classList.contains('is-exploration-jrpg');
  const payload = (event) => event.detail?.payload || {};
  const navigate = (view) => {
    const scene = view === 'training' ? 'ninja-training' : view;
    if (sceneRouter.has(scene)) sceneRouter.navigate(scene).catch((error) => console.error('Realm scene navigation failed.', error));
  };
  const moveFocus = (axisState = '') => {
    const frame = document.getElementById('realmSceneFrame');
    const controls = [...(frame?.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])') || [])]
      .filter((element) => element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden');
    if (!controls.length) return;
    const current = controls.indexOf(document.activeElement);
    const backwards = axisState.includes('left') || axisState.includes('up');
    const next = current < 0 ? 0 : (current + (backwards ? -1 : 1) + controls.length) % controls.length;
    controls[next].focus({ preventScroll: true });
  };

  inputManager.bindPointer('ninja-buy-mode', '[data-ninja-buy-mode]', { payload: (element) => ({ id: element.dataset.ninjaBuyMode || '' }) });
  inputManager.bindPointer('ninja-upgrade', '[data-ninja-upgrade]', { payload: (element) => ({ id: element.dataset.ninjaUpgrade || '' }) });
  inputManager.bindPointer('ninja-spirit-upgrade', '[data-ninja-spirit-upgrade]', { payload: (element) => ({ id: element.dataset.ninjaSpiritUpgrade || '' }) });
  inputManager.bindPointer('realm-view', '[data-realm-view]', { payload: (element) => ({ view: element.dataset.realmView || 'training' }) });
  inputManager.bindPointer('realm-drawer', '[data-realm-drawer]', { payload: (element) => ({ action: element.dataset.realmDrawer || '' }) });
  inputManager.bindPointer('realm-tab', '[data-realm-tab]', { payload: (element) => ({ tab: element.dataset.realmTab || '' }) });
  inputManager.bindPointer('realm-open-tab', '[data-realm-open-tab]', {
    payload: (element) => ({
      tab: element.dataset.realmOpenTab || '',
      category: element.dataset.workshopCategory || ''
    })
  });
  inputManager.bindPointer('realm-explore', '[data-realm-explore-action]', { payload: (element) => ({ action: element.dataset.realmExploreAction || '' }) });
  inputManager.bindPointer('realm-workshop-upgrade', '[data-realm-workshop-upgrade]', { payload: (element) => ({ id: element.dataset.realmWorkshopUpgrade || '' }) });
  inputManager.bindPointer('ninja-strike', '#ninjaManualStrikeBtn');
  inputManager.bindPointer('ninja-shuriken', '#ninjaShurikenBtn');
  inputManager.bindPointer('ninja-prestige', '#ninjaPrestigeBtn');
  inputManager.bindPointer('realm-fullscreen', '#realmFullscreenBtn, #realmFullscreenToolbarBtn');

  inputManager.bindKeyboard('realm-primary', ['d', 'enter', ' '], { when: active });
  inputManager.bindKeyboard('realm-basecamp', 'b', { when: active });
  inputManager.bindKeyboard('realm-training', 'n', { when: active });
  inputManager.bindKeyboard('realm-exploration', 'e', { when: active });
  inputManager.bindKeyboard('realm-menu', ['m', 'escape'], { when: active });
  inputManager.bindKeyboard('realm-shuriken', 's', { when: active });
  inputManager.bindKeyboard('realm-fullscreen', 'f', { when: active });
  inputManager.bindKeyboard('realm-audio-mute', 'v', { when: active });
  inputManager.bindKeyboard('realm-direction', ['arrowleft', 'arrowright', 'arrowup', 'arrowdown'], {
    when: active,
    payload: (event) => ({ axisState: event.key.replace('Arrow', '').toLowerCase() })
  });
  inputManager.bindKeyboard('realm-upgrade-hotkey', ['1', '2', '3', '4', '5'], { when: active, payload: (event) => ({ key: event.key }) });

  const subscriptions = [
    eventBus.on('realm:input:ninja-buy-mode', (event) => runtime.cycleBuyMode(payload(event).id)),
    eventBus.on('realm:input:ninja-upgrade', (event) => runtime.buyUpgrade(payload(event).id)),
    eventBus.on('realm:input:ninja-spirit-upgrade', (event) => runtime.buySpiritUpgrade(payload(event).id)),
    eventBus.on('realm:input:realm-view', (event) => navigate(payload(event).view)),
    eventBus.on('realm:input:realm-drawer', (event) => runtime.handleDrawer(payload(event).action)),
    eventBus.on('realm:input:realm-tab', (event) => runtime.openDrawerTab(payload(event).tab)),
    eventBus.on('realm:input:realm-open-tab', (event) => {
      const detail = payload(event);
      if (detail.tab === 'workshop') sceneRouter.navigate('workshop', { category: detail.category || 'blacksmith' });
      else { navigate('basecamp'); runtime.openDrawerTab(detail.tab || 'settlement'); }
    }),
    eventBus.on('realm:input:realm-explore', (event) => runtime.handleExploration(payload(event).action)),
    eventBus.on('realm:input:realm-workshop-upgrade', (event) => runtime.buyWorkshopUpgrade(payload(event).id)),
    eventBus.on('realm:input:ninja-strike', () => runtime.strike()),
    eventBus.on('realm:input:ninja-shuriken', () => runtime.shuriken()),
    eventBus.on('realm:input:ninja-prestige', () => runtime.prestige()),
    eventBus.on('realm:input:realm-fullscreen', () => runtime.toggleFullscreen()),
    eventBus.on('realm:input:realm-direction', (event) => moveFocus(payload(event).axisState)),
    eventBus.on('realm:input:realm-primary', () => {
      if (document.activeElement?.matches?.('#realmSceneFrame button, #realmSceneFrame [href], #realmSceneFrame input')) {
        document.activeElement.click();
        return;
      }
      if (jrpgActive()) return;
      if (runtime.getView() === 'exploration') runtime.handleExploration('resolve');
      else runtime.strike();
    }),
    eventBus.on('realm:input:realm-basecamp', () => navigate(runtime.getView() === 'basecamp' ? 'training' : 'basecamp')),
    eventBus.on('realm:input:realm-training', () => navigate('training')),
    eventBus.on('realm:input:realm-exploration', () => {
      if (jrpgActive()) return;
      if (runtime.getView() === 'basecamp') navigate('exploration');
      else runtime.handleExploration('advance');
    }),
    eventBus.on('realm:input:realm-menu', () => {
      if (!jrpgActive()) runtime.handleDrawer('toggle');
    }),
    eventBus.on('realm:input:realm-shuriken', () => runtime.getView() === 'training' && runtime.shuriken()),
    eventBus.on('realm:input:realm-upgrade-hotkey', (event) => runtime.buyUpgradeByHotkey(payload(event).key))
  ];

  return () => subscriptions.forEach((unsubscribe) => unsubscribe());
}

export function bindRealmInputs({ runtime, inputManager, eventBus, sceneRouter }) {
  const active = () => !!document.getElementById('ninjaPanel')?.classList.contains('is-active');
  const externalSceneActive = () => Boolean(
    document.documentElement.getAttribute('data-baseline-realm-external-scene')
    || ['calorie-escape','tactical-operations'].includes(sceneRouter.getCurrentSceneId())
  );
  const persistentActive = () => active() && !externalSceneActive();
  const jrpgActive = () => runtime.getView() === 'exploration' && !!document.getElementById('realmSceneFrame')?.classList.contains('is-exploration-jrpg');
  const standardActive = () => persistentActive() && !jrpgActive();
  const payload = (event) => event.detail?.payload || {};
  const navigate = (view, scenePayload = {}) => {
    const scene = view === 'training' ? 'ninja-training' : view;
    if (sceneRouter.has(scene)) sceneRouter.navigate(scene, scenePayload).catch((error) => console.error('Realm scene navigation failed.', error));
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
  inputManager.bindPointer('realm-view', '[data-realm-view]', {
    payload: (element) => ({
      view: element.dataset.realmView || 'training',
      category: element.dataset.workshopCategory || ''
    })
  });
  inputManager.bindPointer('realm-drawer', '[data-realm-drawer]', { payload: (element) => ({ action: element.dataset.realmDrawer || '' }) });
  inputManager.bindPointer('realm-tab', '[data-realm-tab]', { payload: (element) => ({ tab: element.dataset.realmTab || '' }) });
  inputManager.bindPointer('realm-open-tab', '[data-realm-open-tab]', {
    payload: (element) => ({
      tab: element.dataset.realmOpenTab || '',
      category: element.dataset.workshopCategory || ''
    })
  });
  inputManager.bindPointer('realm-workshop-upgrade', '[data-realm-workshop-upgrade]', { payload: (element) => ({ id: element.dataset.realmWorkshopUpgrade || '' }) });
  inputManager.bindPointer('ninja-strike', '#ninjaManualStrikeBtn');
  inputManager.bindPointer('ninja-shuriken', '#ninjaShurikenBtn');
  inputManager.bindPointer('ninja-prestige', '#ninjaPrestigeBtn');
  inputManager.bindPointer('realm-fullscreen', '#realmFullscreenBtn, #realmFullscreenToolbarBtn');

  inputManager.bindKeyboard('realm-primary', ['d', 'enter', ' '], { when: standardActive });
  inputManager.bindKeyboard('realm-basecamp', 'b', { when: standardActive });
  inputManager.bindKeyboard('realm-training', 'n', { when: standardActive });
  inputManager.bindKeyboard('realm-exploration', 'e', { when: standardActive });
  inputManager.bindKeyboard('realm-menu', 'm', { when: standardActive });
  inputManager.bindKeyboard('realm-shuriken', 's', { when: standardActive });
  inputManager.bindKeyboard('realm-fullscreen', 'f', { when: persistentActive });
  inputManager.bindKeyboard('realm-audio-mute', 'v', { when: standardActive });
  inputManager.bindKeyboard('realm-direction', ['arrowleft', 'arrowright', 'arrowup', 'arrowdown'], {
    when: standardActive,
    payload: (event) => ({ axisState: event.key.replace('Arrow', '').toLowerCase() })
  });
  inputManager.bindKeyboard('realm-upgrade-hotkey', ['1', '2', '3', '4', '5'], { when: standardActive, payload: (event) => ({ key: event.key }) });

  const standardOnly = (handler) => (event) => {
    if (!standardActive()) return;
    handler(event);
  };

  const subscriptions = [
    eventBus.on('realm:input:ninja-buy-mode', (event) => runtime.cycleBuyMode(payload(event).id)),
    eventBus.on('realm:input:ninja-upgrade', (event) => runtime.buyUpgrade(payload(event).id)),
    eventBus.on('realm:input:ninja-spirit-upgrade', (event) => runtime.buySpiritUpgrade(payload(event).id)),
    eventBus.on('realm:input:realm-view', (event) => {
      const detail = payload(event);
      navigate(detail.view, detail.category ? { category:detail.category } : {});
    }),
    eventBus.on('realm:input:realm-drawer', (event) => runtime.handleDrawer(payload(event).action)),
    eventBus.on('realm:input:realm-tab', (event) => runtime.openDrawerTab(payload(event).tab)),
    eventBus.on('realm:input:realm-open-tab', (event) => {
      const detail = payload(event);
      navigate('basecamp');
      runtime.openDrawerTab(detail.tab || 'settlement');
    }),
    eventBus.on('realm:input:realm-workshop-upgrade', (event) => runtime.buyWorkshopUpgrade(payload(event).id)),
    eventBus.on('realm:input:ninja-strike', () => runtime.strike()),
    eventBus.on('realm:input:ninja-shuriken', () => runtime.shuriken()),
    eventBus.on('realm:input:ninja-prestige', () => runtime.prestige()),
    eventBus.on('realm:input:realm-fullscreen', (event) => { if (persistentActive()) runtime.toggleFullscreen(); }),
    eventBus.on('realm:input:realm-direction', standardOnly((event) => moveFocus(payload(event).axisState))),
    eventBus.on('realm:input:realm-primary', standardOnly(() => {
      if (document.activeElement?.matches?.('#realmSceneFrame button, #realmSceneFrame [href], #realmSceneFrame input')) {
        document.activeElement.click();
        return;
      }
      if (runtime.getView() === 'training') runtime.strike();
    })),
    eventBus.on('realm:input:realm-basecamp', standardOnly(() => navigate('basecamp'))),
    eventBus.on('realm:input:realm-training', standardOnly(() => navigate('training'))),
    eventBus.on('realm:input:realm-exploration', standardOnly(() => {
      if (runtime.getView() === 'basecamp') navigate('exploration');
    })),
    eventBus.on('realm:input:realm-menu', standardOnly(() => {
      if (!jrpgActive() && runtime.getView() !== 'workshop') runtime.handleDrawer('toggle');
    })),
    eventBus.on('realm:input:realm-shuriken', standardOnly(() => runtime.getView() === 'training' && runtime.shuriken())),
    eventBus.on('realm:input:realm-upgrade-hotkey', standardOnly((event) => runtime.buyUpgradeByHotkey(payload(event).key)))
  ];

  return () => subscriptions.forEach((unsubscribe) => unsubscribe());
}

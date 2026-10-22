import { mountMeridianGrove } from './exploration-jrpg-state-integrity.js?v=REALM_CANONICAL_COMPLETE_20261018_1';

const BUILD = 'REALM_CANONICAL_COMPLETE_20261018_1';

export function createExplorationScene({ runtime }) {
  let game = null;
  return {
    id: 'exploration',
    async enter({ router }) {
      runtime?.setView('exploration');
      const root = document.getElementById('realmExplorationScreen');
      if (!root) throw new Error('The Baseline Realm exploration screen is unavailable.');
      game?.destroy();
      game = mountMeridianGrove({
        root,
        inventoryService: globalThis.BaselineRealmHost?.getInventoryService?.() || null,
        onExit: () => router.navigate('basecamp')
      });
      root.setAttribute('data-meridian-grove-mounted', BUILD);
      document.documentElement.setAttribute('data-meridian-grove-live', BUILD);
    },
    async exit() {
      game?.save('scene-exit');
      game?.destroy();
      game = null;
      document.getElementById('realmSceneFrame')?.classList.remove('is-exploration-jrpg');
    }
  };
}

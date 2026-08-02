import { mountMeridianGrove } from './exploration-jrpg-state-integrity.js?v=REALM_WOOD_AUTHORITY_20260802_1';

const STYLE_ID = 'baseline-realm-exploration-jrpg-style';
const STYLE_URL = '/systems/baseline-games-hub/games/baseline-realm/exploration/css/exploration-jrpg.css?v=REALM_WOOD_AUTHORITY_20260802_1';
const BUILD = 'REALM_WOOD_AUTHORITY_20260802_1';

function ensureStylesheet() {
  let link = document.getElementById(STYLE_ID) || document.querySelector('link[data-current-realm-style="realm-exploration-current"]');
  if (!link) {
    link = document.createElement('link');
    link.id = STYLE_ID;
    link.rel = 'stylesheet';
    document.head.append(link);
  }
  if (!link.id) link.id = STYLE_ID;
  if (link.getAttribute('href') !== STYLE_URL) link.href = STYLE_URL;
}

export function createExplorationScene({ runtime }) {
  let game = null;
  return {
    id: 'exploration',
    async enter({ router }) {
      runtime?.setView('exploration');
      ensureStylesheet();
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

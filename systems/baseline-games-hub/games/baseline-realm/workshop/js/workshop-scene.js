import { createWorkshopController } from './workshop-ui.js';

export function createWorkshopScene({ runtime, workshopService, eventBus }) {
  const controller = createWorkshopController({ runtime, workshopService, eventBus });
  return {
    id: 'workshop',
    async enter({ payload = {} } = {}) {
      runtime?.setView('basecamp');
      runtime?.openDrawerTab('workshop');
      const drawer = document.getElementById('realmPanelDrawer');
      if (drawer) drawer.dataset.basecampService = 'workshop';
      const title = document.getElementById('realmDrawerTitle');
      if (title) title.textContent = payload.category === 'cooking' ? 'Cooking' : 'Workshop';
      controller.enter(payload.category || 'blacksmith');
    },
    async exit() {
      document.getElementById('realmPanelDrawer')?.removeAttribute('data-basecamp-service');
    },
    render() {
      controller.render();
    },
    destroy() {
      controller.destroy();
    }
  };
}

import { createWorkshopController } from './workshop-ui.js?v=REALM_BASECAMP_FUNCTIONAL_20261018_2';

export function createWorkshopScene({ runtime, workshopService, eventBus }) {
  const controller = createWorkshopController({ runtime, workshopService, eventBus });

  return {
    id: 'workshop',
    async enter({ payload = {} } = {}) {
      const category = payload.category || 'blacksmith';
      const cookingRoom = category === 'cooking';
      runtime?.setView('workshop');

      const title = document.getElementById('realmWorkshopTitle');
      const subtitle = document.getElementById('realmWorkshopSubtitle');
      if (title) title.textContent = cookingRoom ? 'Cooking' : 'Workshop';
      if (subtitle) subtitle.textContent = cookingRoom
        ? 'Prepare meals and route support'
        : 'Forge, tailor, brew and build';

      controller.enter(category, { scope: cookingRoom ? 'cooking' : 'workshop' });
    },

    async exit() {
      controller.leave();
    },

    render() {
      controller.render();
    },

    destroy() {
      controller.destroy();
    }
  };
}

import { createWorkshopController } from './workshop-ui.js';

export function createWorkshopScene({ runtime, workshopService, eventBus }) {
  const controller = createWorkshopController({ runtime, workshopService, eventBus });
  return {
    id: 'workshop',
    async enter({ payload = {} } = {}) {
      runtime?.setView('basecamp');
      runtime?.openDrawerTab('workshop');
      controller.enter(payload.category || 'blacksmith');
    },
    render() {
      controller.render();
    },
    destroy() {
      controller.destroy();
    }
  };
}

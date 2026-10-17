import { BasecampController } from './basecamp-controller.js?v=REALM_AUTHORITY_WORKSHOP_ROOM_20261017_1';

export function createBasecampScene({ runtime, inventoryService, stateService, eventBus }) {
  const controller = new BasecampController({ runtime, inventoryService, stateService, eventBus });
  return {
    id: 'basecamp',
    async enter() {
      runtime?.setView('basecamp');
      controller.mount();
      controller.render();
    },
    async exit() {
      // The controller remains mounted so landmark and drawer actions retain state.
    }
  };
}

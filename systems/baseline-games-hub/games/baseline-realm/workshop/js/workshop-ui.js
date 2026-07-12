import {
  REALM_MATERIALS,
  REALM_MATERIAL_BY_ID,
  WORKSHOP_CATEGORIES,
  WORKSHOP_ITEM_BY_ID
} from '../data/workshop-catalog.js';

const ICONS = '/systems/baseline-games-hub/games/baseline-realm/shared/icons/realm-icons.svg';
const STYLES = '/systems/baseline-games-hub/games/baseline-realm/workshop/css/workshop.css?v=BASECAMP_WORKSHOP_20260627';
const CATEGORY_ICONS = Object.freeze({
  blacksmith: 'workshop',
  armourer: 'armour',
  tailoring: 'tailoring',
  alchemy: 'alchemy',
  cooking: 'cooking',
  tools: 'tools'
});

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function icon(name, label) {
  return `<svg class="realm-symbol" role="img" aria-label="${escapeHtml(label)}"><title>${escapeHtml(label)}</title><use href="${ICONS}#icon-${name}"></use></svg>`;
}

function ensureStylesheet() {
  if (document.querySelector('link[data-realm-workshop-style]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = STYLES;
  link.dataset.realmWorkshopStyle = 'true';
  document.head.appendChild(link);
}

function effectSummary(effects = {}) {
  const labels = {
    attack: 'Attack', defence: 'Defence', healing: 'Healing', stamina: 'Stamina', focus: 'Focus',
    evade: 'Evade', escapeChance: 'Escape', encounterSpeed: 'Encounter speed', bossDamage: 'Boss damage',
    staggerResist: 'Stagger resist', statusResist: 'Status resist', movement: 'Movement', lootCapacity: 'Loot capacity',
    oreYield: 'Ore yield', repair: 'Repair', mapInsight: 'Map insight'
  };
  const entries = Object.entries(effects);
  if (!entries.length) return 'No direct effect';
  return entries.map(([key, value]) => {
    const number = Number(value);
    const shown = Math.abs(number) < 1 && number !== 0 ? `${Math.round(number * 100)}%` : `${number}`;
    return `${labels[key] || key}: +${shown}`;
  }).join(' · ');
}

export function createWorkshopController({ runtime, workshopService, eventBus } = {}) {
  if (!workshopService) throw new TypeError('Workshop UI requires RealmWorkshopService.');

  let category = 'blacksmith';
  let selectedRecipeId = '';
  let quantity = 1;
  let pendingCraft = null;
  let message = '';
  let pane = null;
  let observer = null;
  let mounted = false;

  const categoryExists = (id) => WORKSHOP_CATEGORIES.some((entry) => entry.id === id);

  function currentRecipes() {
    return workshopService.recipesByCategory(category);
  }

  function currentRecipe() {
    const recipes = currentRecipes();
    const selected = recipes.find((recipe) => recipe.id === selectedRecipeId);
    return selected || recipes[0] || null;
  }

  function materialMarkup(save) {
    const counts = save.realm.inventory.materials;
    return REALM_MATERIALS.map((material) => `
      <div class="workshop-material" data-material-id="${material.id}">
        <strong>${escapeHtml(material.name)}</strong>
        <span aria-label="${escapeHtml(material.name)} quantity">${Math.max(0, Number(counts[material.id] || 0))}</span>
      </div>`).join('');
  }

  function categoryMarkup() {
    return WORKSHOP_CATEGORIES.map((entry) => {
      const active = entry.id === category;
      return `<button class="workshop-category${active ? ' is-active' : ''}" role="tab" aria-selected="${active}" data-workshop-category="${entry.id}" type="button">
        ${icon(CATEGORY_ICONS[entry.id], `${entry.name} symbol`)}
        <span><strong>${escapeHtml(entry.name)}</strong><small>${escapeHtml(entry.description)}</small></span>
      </button>`;
    }).join('');
  }

  function recipeListMarkup(save) {
    return currentRecipes().map((recipe) => {
      const discovered = workshopService.isDiscovered(recipe, save);
      const level = workshopService.stationLevel(recipe, save);
      const selected = currentRecipe()?.id === recipe.id;
      return `<button class="workshop-recipe-row${selected ? ' is-selected' : ''}" data-workshop-recipe="${recipe.id}" type="button" aria-pressed="${selected}">
        <span><strong>${escapeHtml(recipe.name)}</strong><small>${escapeHtml(recipe.description)}</small></span>
        <span class="workshop-recipe-state ${discovered ? 'is-discovered' : 'is-locked'}">${discovered ? 'Discovered' : `Station ${level} / ${recipe.discoverAt}`}</span>
      </button>`;
    }).join('');
  }

  function requirementsMarkup(recipe, save) {
    return workshopService.requirements(recipe, quantity, save).map((entry) => {
      const material = REALM_MATERIAL_BY_ID[entry.id];
      return `<li class="${entry.met ? 'is-met' : 'is-missing'}">
        <span>${escapeHtml(material?.name || entry.id)}</span>
        <strong>${entry.available} / ${entry.required}</strong>
      </li>`;
    }).join('');
  }

  function recipeDetailMarkup(recipe, save) {
    if (!recipe) return '<div class="workshop-empty">No recipes are available in this station.</div>';
    const item = WORKSHOP_ITEM_BY_ID[recipe.output.itemId];
    const discovered = workshopService.isDiscovered(recipe, save);
    const canDiscover = workshopService.canDiscover(recipe, save);
    const canCraft = workshopService.canCraft(recipe, quantity, save);
    const outputQuantity = recipe.output.quantity * quantity;
    const stationLevel = workshopService.stationLevel(recipe, save);

    return `<article class="workshop-detail" aria-labelledby="workshopRecipeHeading">
      <header>
        <div>
          <span class="workshop-eyebrow">${escapeHtml(category)}</span>
          <h5 id="workshopRecipeHeading">${escapeHtml(recipe.name)}</h5>
          <p>${escapeHtml(recipe.description)}</p>
        </div>
        <span class="workshop-level">Level ${stationLevel} · needs ${recipe.discoverAt}</span>
      </header>
      <div class="workshop-detail-grid">
        <section>
          <h6>Requirements</h6>
          <ul class="workshop-requirements">${requirementsMarkup(recipe, save)}</ul>
        </section>
        <section class="workshop-output">
          <h6>Output preview</h6>
          <strong>${outputQuantity} × ${escapeHtml(item?.name || recipe.output.itemId)}</strong>
          <span>${escapeHtml(item?.description || '')}</span>
          <span>${escapeHtml(effectSummary(item?.effects))}</span>
          <small>Usable by: ${escapeHtml((item?.usableBy || []).join(', '))}</small>
        </section>
      </div>
      <div class="workshop-craft-controls">
        <label>Quantity <input data-workshop-quantity type="number" min="1" max="99" value="${quantity}" inputmode="numeric"></label>
        ${discovered
          ? `<button class="action" data-workshop-craft="${recipe.id}" type="button"${canCraft ? '' : ' disabled'}>Review Craft</button>`
          : `<button class="action" data-workshop-discover="${recipe.id}" type="button"${canDiscover ? '' : ' disabled'}>${canDiscover ? 'Discover Recipe' : `Requires station level ${recipe.discoverAt}`}</button>`}
      </div>
    </article>`;
  }

  function craftedItemsMarkup(save) {
    const items = workshopService.craftedInventory(save);
    if (!items.length) return '<p class="workshop-empty">No crafted items yet.</p>';
    return items.map((item) => `<article class="workshop-crafted-item">
      <div>
        <strong>${escapeHtml(item.name)} × ${item.quantity}</strong>
        <span>${escapeHtml(effectSummary(item.effects))}</span>
        <small>${escapeHtml(item.usableBy.join(', '))}</small>
      </div>
      ${item.consumable ? `<button class="action secondary" data-workshop-use="${item.id}" data-workshop-module="${escapeHtml(item.usableBy[0] || 'realm')}" type="button">Use</button>` : '<span class="workshop-connected">Connected</span>'}
    </article>`).join('');
  }

  function confirmationMarkup() {
    if (!pendingCraft) return '';
    const recipe = workshopService.recipe(pendingCraft.recipeId);
    const item = recipe && WORKSHOP_ITEM_BY_ID[recipe.output.itemId];
    if (!recipe || !item) return '';
    return `<div class="workshop-confirm-backdrop" role="presentation">
      <section class="workshop-confirm" role="dialog" aria-modal="true" aria-labelledby="workshopConfirmTitle">
        <span class="workshop-eyebrow">Crafting confirmation</span>
        <h5 id="workshopConfirmTitle">Craft ${pendingCraft.quantity} × ${escapeHtml(recipe.name)}?</h5>
        <p>This consumes the listed materials once and adds ${recipe.output.quantity * pendingCraft.quantity} × ${escapeHtml(item.name)} to the shared Realm inventory.</p>
        <div class="workshop-confirm-actions">
          <button class="action secondary" data-workshop-cancel type="button">Cancel</button>
          <button class="action" data-workshop-confirm type="button">Confirm Craft</button>
        </div>
      </section>
    </div>`;
  }

  function render() {
    if (!pane || pane.hidden) return;
    const save = workshopService.read();
    const recipe = currentRecipe();
    selectedRecipeId = recipe?.id || '';
    pane.dataset.workshopOwned = 'true';
    pane.innerHTML = `<div class="realm-workshop" data-workshop-root>
      <header class="workshop-header">
        <div>
          <span class="workshop-eyebrow">Shared Realm crafting</span>
          <h4>Workshop</h4>
          <p>Forge, tailor, brew, cook, and build from one material inventory.</p>
        </div>
        <button class="action secondary" data-realm-view="basecamp" type="button">Return to Basecamp</button>
      </header>
      ${message ? `<div class="workshop-message" role="status">${escapeHtml(message)}</div>` : ''}
      <section class="workshop-materials" aria-labelledby="workshopMaterialsHeading">
        <div class="workshop-section-heading"><h5 id="workshopMaterialsHeading">Shared materials</h5><span>Enemy, map, storage, and merchant drops use these IDs.</span></div>
        <div class="workshop-material-grid">${materialMarkup(save)}</div>
      </section>
      <div class="workshop-layout">
        <nav class="workshop-categories" role="tablist" aria-label="Workshop stations">${categoryMarkup()}</nav>
        <section class="workshop-recipes" aria-label="Recipes">${recipeListMarkup(save)}</section>
        ${recipeDetailMarkup(recipe, save)}
      </div>
      <section class="workshop-crafted" aria-labelledby="workshopCraftedHeading">
        <div class="workshop-section-heading"><h5 id="workshopCraftedHeading">Connected Realm items</h5><span>Equipment contributes module effects; consumables can be used from here.</span></div>
        <div class="workshop-crafted-list">${craftedItemsMarkup(save)}</div>
      </section>
      ${confirmationMarkup()}
    </div>`;
  }

  function onClick(event) {
    const target = event.target.closest('button');
    if (!target || !pane?.contains(target)) return;
    if (target.dataset.workshopCategory) {
      category = target.dataset.workshopCategory;
      selectedRecipeId = '';
      pendingCraft = null;
      render();
      return;
    }
    if (target.dataset.workshopRecipe) {
      selectedRecipeId = target.dataset.workshopRecipe;
      pendingCraft = null;
      render();
      return;
    }
    if (target.dataset.workshopDiscover) {
      const result = workshopService.discoverRecipe(target.dataset.workshopDiscover);
      message = result.ok ? `${result.recipe?.name || 'Recipe'} discovered.` : 'That recipe cannot be discovered yet.';
      render();
      return;
    }
    if (target.dataset.workshopCraft) {
      pendingCraft = { recipeId: target.dataset.workshopCraft, quantity };
      render();
      return;
    }
    if (target.hasAttribute('data-workshop-cancel')) {
      pendingCraft = null;
      render();
      return;
    }
    if (target.hasAttribute('data-workshop-confirm') && pendingCraft) {
      const result = workshopService.craft(pendingCraft.recipeId, pendingCraft.quantity);
      message = result.ok
        ? `Crafted ${result.outputQuantity} × ${result.item.name}.`
        : result.code === 'INSUFFICIENT_INVENTORY' ? 'Craft cancelled: materials changed before confirmation.' : 'Crafting could not be completed.';
      pendingCraft = null;
      render();
      return;
    }
    if (target.dataset.workshopUse) {
      const result = workshopService.useItem(target.dataset.workshopUse, target.dataset.workshopModule || 'realm');
      message = result.ok ? `${result.item.name} used for ${target.dataset.workshopModule}.` : 'That item could not be used.';
      render();
    }
  }

  function onInput(event) {
    if (!event.target.matches('[data-workshop-quantity]')) return;
    quantity = Math.max(1, Math.min(99, Math.round(Number(event.target.value) || 1)));
    pendingCraft = null;
    render();
  }

  function connectPane() {
    const nextPane = document.getElementById('realmDrawerWorkshop');
    if (!nextPane || pane === nextPane) return !!pane;
    pane = nextPane;
    pane.addEventListener('click', onClick);
    pane.addEventListener('change', onInput);
    observer?.disconnect();
    observer = new MutationObserver(() => {
      if (mounted && pane && !pane.hidden && !pane.querySelector('[data-workshop-root]')) queueMicrotask(render);
    });
    observer.observe(pane, { childList: true });
    return true;
  }

  function enter(requestedCategory = '') {
    ensureStylesheet();
    mounted = true;
    if (categoryExists(requestedCategory)) category = requestedCategory;
    selectedRecipeId = '';
    quantity = 1;
    pendingCraft = null;
    message = '';
    if (connectPane()) render();
  }

  const unsubscribe = eventBus?.on('realm:inventory:changed', () => {
    if (mounted && pane && !pane.hidden) render();
  });

  return {
    enter,
    render,
    destroy() {
      mounted = false;
      observer?.disconnect();
      unsubscribe?.();
    },
    getCategory: () => category
  };
}

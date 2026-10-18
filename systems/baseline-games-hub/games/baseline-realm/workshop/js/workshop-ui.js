import {
  REALM_MATERIAL_BY_ID,
  WORKSHOP_CATEGORIES,
  WORKSHOP_ITEM_BY_ID
} from '../data/workshop-catalog.js';

const ICONS = '/systems/baseline-games-hub/games/baseline-realm/shared/icons/realm-icons.svg?v=REALM_CANONICAL_COMPLETE_20261018_1';
const STYLES = '/systems/baseline-games-hub/games/baseline-realm/workshop/css/workshop.css?v=REALM_CANONICAL_COMPLETE_20261018_1';

const CATEGORY_ICONS = Object.freeze({
  blacksmith: 'workshop',
  armourer: 'armour',
  tailoring: 'tailoring',
  alchemy: 'alchemy',
  cooking: 'cooking',
  tools: 'tools'
});

const CHALLENGE_COPY = Object.freeze({
  blacksmith: { verb: 'Strike', cue: 'Hit the timing window while the metal is ready.' },
  armourer: { verb: 'Set', cue: 'Set the plate when the alignment enters the marked zone.' },
  tailoring: { verb: 'Stitch', cue: 'Commit the stitch while the guide passes through the target.' },
  alchemy: { verb: 'Stabilise', cue: 'Stabilise the mixture inside the safe reaction range.' },
  cooking: { verb: 'Serve', cue: 'Finish the dish while the heat is in the ideal range.' },
  tools: { verb: 'Fit', cue: 'Lock the component into place inside the target window.' }
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
  return '<svg class="realm-symbol" role="img" aria-label="' + escapeHtml(label) + '"><title>' + escapeHtml(label) + '</title><use href="' + ICONS + '#icon-' + name + '"></use></svg>';
}

function ensureStylesheet() {
  if (document.querySelector('link[data-realm-workshop-style]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = STYLES;
  link.dataset.realmWorkshopStyle = 'true';
  document.head.appendChild(link);
}

function categoryById(id) {
  return WORKSHOP_CATEGORIES.find((entry) => entry.id === id) || null;
}

function stationName(id) {
  return categoryById(id)?.name || 'Workshop';
}

function challengeTarget(category) {
  const positions = { blacksmith: 44, armourer: 58, tailoring: 36, alchemy: 62, cooking: 52, tools: 47 };
  return positions[category] || 50;
}

function challengeQuality(distance, targetWidth, trackWidth) {
  const halfTarget = Math.max(1, targetWidth / 2);
  if (distance <= halfTarget) return { label: 'Exceptional', score: 4 };
  if (distance <= halfTarget + trackWidth * 0.045) return { label: 'Excellent', score: 3 };
  if (distance <= halfTarget + trackWidth * 0.105) return { label: 'Fine', score: 2 };
  return { label: 'Standard', score: 1 };
}

export function createWorkshopController({ runtime, workshopService, eventBus } = {}) {
  if (!workshopService) throw new TypeError('Workshop UI requires RealmWorkshopService.');

  let category = 'blacksmith';
  let scope = 'workshop';
  let selectedRecipeId = '';
  let quantity = 1;
  let challenge = null;
  let message = '';
  let screen = null;
  let mounted = false;

  const categoryExists = (id) => WORKSHOP_CATEGORIES.some((entry) => entry.id === id);

  function availableCategories() {
    return scope === 'cooking'
      ? WORKSHOP_CATEGORIES.filter((entry) => entry.id === 'cooking')
      : WORKSHOP_CATEGORIES.filter((entry) => entry.id !== 'cooking');
  }

  function currentRecipes() {
    return workshopService.recipesByCategory(category);
  }

  function currentRecipe() {
    const recipes = currentRecipes();
    return recipes.find((recipe) => recipe.id === selectedRecipeId) || recipes[0] || null;
  }

  function relevantMaterials(save) {
    const ids = new Set();
    currentRecipes().forEach((recipe) => recipe.ingredients.forEach((ingredient) => ids.add(ingredient.id)));
    return [...ids].map((id) => ({
      id,
      name: REALM_MATERIAL_BY_ID[id]?.name || id,
      quantity: Math.max(0, Number(save.realm.inventory.materials[id] || 0))
    }));
  }

  function stationMarkup() {
    return availableCategories().map((entry) => {
      const active = entry.id === category;
      return '<button class="workshop-station workshop-station--' + entry.id + (active ? ' is-active' : '') + '" data-workshop-category="' + entry.id + '" type="button" aria-pressed="' + active + '">'
        + '<span class="workshop-station__icon">' + icon(CATEGORY_ICONS[entry.id], entry.name + ' station') + '</span>'
        + '<span class="workshop-station__copy"><strong>' + escapeHtml(entry.name) + '</strong><small>' + escapeHtml(entry.description) + '</small></span>'
        + '</button>';
    }).join('');
  }

  function materialMarkup(save) {
    const materials = relevantMaterials(save);
    if (!materials.length) return '<span class="workshop-material-empty">No materials required yet.</span>';
    return materials.map((material) =>
      '<span class="workshop-material"><span>' + escapeHtml(material.name) + '</span><strong>' + material.quantity + '</strong></span>'
    ).join('');
  }

  function recipeListMarkup(save) {
    const recipes = currentRecipes();
    if (!recipes.length) return '<p class="workshop-empty">No recipes are available at this station.</p>';
    return recipes.map((recipe) => {
      const discovered = workshopService.isDiscovered(recipe, save);
      const level = workshopService.stationLevel(recipe, save);
      const selected = currentRecipe()?.id === recipe.id;
      return '<button class="workshop-recipe-row' + (selected ? ' is-selected' : '') + '" data-workshop-recipe="' + recipe.id + '" type="button" aria-pressed="' + selected + '">'
        + '<span><strong>' + escapeHtml(recipe.name) + '</strong><small>' + escapeHtml(recipe.description) + '</small></span>'
        + '<span class="workshop-recipe-state ' + (discovered ? 'is-discovered' : 'is-locked') + '">' + (discovered ? 'Ready' : 'Level ' + level + ' / ' + recipe.discoverAt) + '</span>'
        + '</button>';
    }).join('');
  }

  function requirementsMarkup(recipe, save) {
    return workshopService.requirements(recipe, quantity, save).map((entry) => {
      const material = REALM_MATERIAL_BY_ID[entry.id];
      return '<li class="' + (entry.met ? 'is-met' : 'is-missing') + '"><span>' + escapeHtml(material?.name || entry.id) + '</span><strong>' + entry.available + ' / ' + entry.required + '</strong></li>';
    }).join('');
  }

  function challengeMarkup(recipe) {
    if (!challenge || challenge.recipeId !== recipe?.id) return '';
    const copy = CHALLENGE_COPY[category] || CHALLENGE_COPY.blacksmith;
    if (challenge.result) {
      return '<section class="workshop-skill-result" aria-live="polite">'
        + '<div><span class="workshop-eyebrow">' + escapeHtml(copy.verb) + ' timing</span><strong>' + escapeHtml(challenge.result.label) + '</strong><small>The craft can now be completed.</small></div>'
        + '<button class="action" data-workshop-confirm type="button">Complete Craft</button>'
        + '</section>';
    }
    return '<section class="workshop-skill-check" aria-label="' + escapeHtml(stationName(category)) + ' timing challenge">'
      + '<div class="workshop-skill-copy"><span class="workshop-eyebrow">Active skill</span><strong>' + escapeHtml(copy.cue) + '</strong></div>'
      + '<div class="workshop-timing-track" data-workshop-timing-track>'
      + '<span class="workshop-timing-target" data-workshop-timing-target style="--target:' + challenge.target + '%"></span>'
      + '<span class="workshop-timing-needle" data-workshop-timing-needle></span>'
      + '</div>'
      + '<button class="action workshop-timing-button" data-workshop-hit type="button">' + escapeHtml(copy.verb) + '</button>'
      + '</section>';
  }

  function recipeDetailMarkup(recipe, save) {
    if (!recipe) return '<div class="workshop-empty">Choose a station to begin.</div>';
    const item = WORKSHOP_ITEM_BY_ID[recipe.output.itemId];
    const discovered = workshopService.isDiscovered(recipe, save);
    const canDiscover = workshopService.canDiscover(recipe, save);
    const canCraft = workshopService.canCraft(recipe, quantity, save);
    const stationLevel = workshopService.stationLevel(recipe, save);
    const challenged = challenge?.recipeId === recipe.id;

    return '<article class="workshop-detail">'
      + '<header><div><span class="workshop-eyebrow">' + escapeHtml(stationName(category)) + '</span><h5>' + escapeHtml(recipe.name) + '</h5><p>' + escapeHtml(recipe.description) + '</p></div><span class="workshop-level">Level ' + stationLevel + '</span></header>'
      + '<div class="workshop-detail-grid">'
      + '<section><h6>Materials</h6><ul class="workshop-requirements">' + requirementsMarkup(recipe, save) + '</ul></section>'
      + '<section class="workshop-output"><h6>Output</h6><strong>' + (recipe.output.quantity * quantity) + ' × ' + escapeHtml(item?.name || recipe.output.itemId) + '</strong><span>' + escapeHtml(item?.description || '') + '</span></section>'
      + '</div>'
      + challengeMarkup(recipe)
      + (!challenged
        ? '<div class="workshop-craft-controls"><label>Quantity <input data-workshop-quantity type="number" min="1" max="99" value="' + quantity + '" inputmode="numeric"></label>'
          + (discovered
            ? '<button class="action" data-workshop-start="' + recipe.id + '" type="button"' + (canCraft ? '' : ' disabled') + '>Start Craft</button>'
            : '<button class="action" data-workshop-discover="' + recipe.id + '" type="button"' + (canDiscover ? '' : ' disabled') + '>' + (canDiscover ? 'Discover Recipe' : 'Requires level ' + recipe.discoverAt) + '</button>')
          + '</div>'
        : '')
      + '</article>';
  }

  function render() {
    if (!screen || !mounted || screen.hidden) return;
    const save = workshopService.read();
    const recipe = currentRecipe();
    selectedRecipeId = recipe?.id || '';

    const roomTitle = scope === 'cooking' ? 'Cooking' : 'Workshop';
    const roomNote = scope === 'cooking'
      ? 'Use the hearth and preparation bench to make food for the route.'
      : 'Move between workstations and perform the craft at the station itself.';

    screen.innerHTML = '<div class="realm-workshop" data-workshop-root data-workshop-scope="' + scope + '">'
      + '<div class="workshop-room-scene">'
      + '<div class="workshop-room-beam workshop-room-beam--left" aria-hidden="true"></div><div class="workshop-room-beam workshop-room-beam--right" aria-hidden="true"></div>'
      + '<header class="workshop-room-header"><div><span class="workshop-eyebrow">Basecamp interior</span><h4>' + roomTitle + '</h4><p>' + roomNote + '</p></div><button class="action secondary" data-realm-view="basecamp" type="button">Return to Basecamp</button></header>'
      + (message ? '<div class="workshop-message" role="status">' + escapeHtml(message) + '</div>' : '')
      + '<nav class="workshop-stations" aria-label="' + roomTitle + ' workstations">' + stationMarkup() + '</nav>'
      + '<section class="workshop-workbench">'
      + '<div class="workshop-workbench__head"><div><span class="workshop-eyebrow">Workstation</span><h5>' + escapeHtml(stationName(category)) + '</h5></div><div class="workshop-material-rail" aria-label="Relevant shared materials">' + materialMarkup(save) + '</div></div>'
      + '<div class="workshop-workbench__body"><div class="workshop-recipes" aria-label="Recipes">' + recipeListMarkup(save) + '</div>' + recipeDetailMarkup(recipe, save) + '</div>'
      + '</section>'
      + '</div>'
      + '</div>';
  }

  function startChallenge(recipeId) {
    const recipe = workshopService.recipe(recipeId);
    const save = workshopService.read();
    if (!recipe || !workshopService.canCraft(recipe, quantity, save)) {
      message = 'The required materials are not available.';
      render();
      return;
    }
    challenge = { recipeId, quantity, target: challengeTarget(category), result: null };
    if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      challenge.result = { label: 'Standard', score: 1 };
    }
    render();
    queueMicrotask(() => screen?.querySelector('[data-workshop-hit], [data-workshop-confirm]')?.focus?.());
  }

  function resolveChallenge() {
    if (!challenge || challenge.result) return;
    const track = screen?.querySelector('[data-workshop-timing-track]');
    const target = screen?.querySelector('[data-workshop-timing-target]');
    const needle = screen?.querySelector('[data-workshop-timing-needle]');
    if (!track || !target || !needle) return;
    const trackRect = track.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const needleRect = needle.getBoundingClientRect();
    const targetCenter = targetRect.left + targetRect.width / 2;
    const needleCenter = needleRect.left + needleRect.width / 2;
    challenge.result = challengeQuality(Math.abs(targetCenter - needleCenter), targetRect.width, trackRect.width);
    render();
    queueMicrotask(() => screen?.querySelector('[data-workshop-confirm]')?.focus?.());
  }

  function completeCraft() {
    if (!challenge?.result) return;
    const result = workshopService.craft(challenge.recipeId, challenge.quantity);
    const quality = challenge.result.label;
    message = result.ok
      ? 'Crafted ' + result.outputQuantity + ' × ' + result.item.name + ' · ' + quality + ' timing.'
      : result.code === 'INSUFFICIENT_INVENTORY'
        ? 'Craft cancelled: the materials changed before completion.'
        : 'Crafting could not be completed.';
    challenge = null;
    render();
  }

  function onClick(event) {
    const target = event.target.closest('button');
    if (!target || !screen?.contains(target)) return;

    if (target.dataset.workshopCategory) {
      category = target.dataset.workshopCategory;
      selectedRecipeId = '';
      quantity = 1;
      challenge = null;
      message = '';
      render();
      return;
    }
    if (target.dataset.workshopRecipe) {
      selectedRecipeId = target.dataset.workshopRecipe;
      challenge = null;
      render();
      return;
    }
    if (target.dataset.workshopDiscover) {
      const result = workshopService.discoverRecipe(target.dataset.workshopDiscover);
      message = result.ok ? (result.recipe?.name || 'Recipe') + ' discovered.' : 'That recipe cannot be discovered yet.';
      render();
      return;
    }
    if (target.dataset.workshopStart) {
      startChallenge(target.dataset.workshopStart);
      return;
    }
    if (target.hasAttribute('data-workshop-hit')) {
      resolveChallenge();
      return;
    }
    if (target.hasAttribute('data-workshop-confirm')) {
      completeCraft();
    }
  }

  function onInput(event) {
    if (!event.target.matches('[data-workshop-quantity]')) return;
    quantity = Math.max(1, Math.min(99, Math.round(Number(event.target.value) || 1)));
    challenge = null;
    render();
  }

  function connectScreen() {
    const next = document.getElementById('realmWorkshopScreen');
    if (!next) return false;
    if (screen !== next) {
      screen?.removeEventListener('click', onClick);
      screen?.removeEventListener('change', onInput);
      screen = next;
      screen.addEventListener('click', onClick);
      screen.addEventListener('change', onInput);
    }
    return true;
  }

  function enter(requestedCategory = '', options = {}) {
    ensureStylesheet();
    mounted = true;
    scope = options.scope === 'cooking' ? 'cooking' : 'workshop';
    const allowed = scope === 'cooking'
      ? ['cooking']
      : availableCategories().map((entry) => entry.id);
    category = allowed.includes(requestedCategory) ? requestedCategory : allowed[0] || 'blacksmith';
    selectedRecipeId = '';
    quantity = 1;
    challenge = null;
    message = '';
    if (connectScreen()) {
      screen.hidden = false;
      render();
    }
  }

  function leave() {
    mounted = false;
    challenge = null;
    if (screen) screen.hidden = true;
  }

  const unsubscribe = eventBus?.on('realm:inventory:changed', () => {
    if (mounted && screen && !screen.hidden) render();
  });

  return {
    enter,
    leave,
    render,
    destroy() {
      leave();
      screen?.removeEventListener('click', onClick);
      screen?.removeEventListener('change', onInput);
      unsubscribe?.();
    },
    getCategory: () => category,
    getScope: () => scope
  };
}

export const workshopUiInternals = Object.freeze({
  challengeQuality,
  challengeTarget,
  categoryById
});

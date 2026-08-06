/* Baseline Lifestyle — Account Favorites dropdown only. No routine-page observer or renderer. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_UNIFIED_FAVORITES_V1__) return;
  global.__BASELINE_UNIFIED_FAVORITES_V1__ = true;

  let sourceObserver = null;
  let installed = false;

  function usableOptions(select) {
    return Array.from(select?.options || []).filter((option) => String(option.value || '').trim() && !option.disabled);
  }

  function rebuild(unified, food, skin) {
    const records = [
      { label:'Food', prefix:'food', source:food },
      { label:'Natural Skincare', prefix:'skincare', source:skin }
    ].map((group) => ({
      label:group.label,
      prefix:group.prefix,
      options:usableOptions(group.source).map((option) => ({ value:String(option.value), label:String(option.textContent || option.value) }))
    }));
    const signature = JSON.stringify(records);
    if (unified.dataset.favoritesSignature === signature) return;
    unified.dataset.favoritesSignature = signature;
    const available = records.reduce((total, group) => total + group.options.length, 0);
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = available ? 'Choose a favorite…' : 'No favorites saved';
    unified.replaceChildren(placeholder);
    records.forEach((group) => {
      if (!group.options.length) return;
      const optgroup = document.createElement('optgroup');
      optgroup.label = group.label;
      group.options.forEach((record) => {
        const option = document.createElement('option');
        option.value = `${group.prefix}:${record.value}`;
        option.textContent = record.label;
        optgroup.appendChild(option);
      });
      unified.appendChild(optgroup);
    });
    unified.disabled = !available;
  }

  function install() {
    if (installed) return true;
    const links = document.getElementById('bl-fav-links');
    const food = document.getElementById('bl-favs-food-select');
    const skin = document.getElementById('bl-favs-skin-select');
    if (!links || !food || !skin) return false;

    let field = links.querySelector('[data-bl-unified-favorites="true"]');
    if (!field) {
      field = document.createElement('div');
      field.className = 'bl-auth-fieldgroup';
      field.dataset.blUnifiedFavorites = 'true';
      field.innerHTML = '<label for="bl-favorites-select">Favorites</label><select id="bl-favorites-select" aria-label="Favorites"></select>';
      links.insertBefore(field, links.querySelector('.bl-auth-fitness-link-wrap') || links.firstChild);
    }
    [food, skin].forEach((select) => {
      const sourceField = select.closest('.bl-auth-fieldgroup');
      if (sourceField && sourceField !== field) {
        sourceField.hidden = true;
        sourceField.setAttribute('aria-hidden', 'true');
      }
    });
    const unified = field.querySelector('#bl-favorites-select');
    if (!unified) return false;
    if (unified.dataset.favoritesBound !== 'true') {
      unified.dataset.favoritesBound = 'true';
      unified.addEventListener('change', () => {
        const value = String(unified.value || '');
        const divider = value.indexOf(':');
        if (divider < 1) return;
        const category = value.slice(0, divider);
        const id = value.slice(divider + 1);
        const source = category === 'food' ? food : category === 'skincare' ? skin : null;
        if (source && id) {
          source.value = id;
          source.dispatchEvent(new Event('change', { bubbles:true }));
        }
        unified.value = '';
      });
    }
    rebuild(unified, food, skin);
    sourceObserver?.disconnect();
    sourceObserver = new MutationObserver(() => rebuild(unified, food, skin));
    [food, skin].forEach((select) => sourceObserver.observe(select, { childList:true, subtree:true, attributes:true, attributeFilter:['disabled'] }));
    installed = true;
    return true;
  }

  [0,100,350,900,1800].forEach((delay) => global.setTimeout(install, delay));
  try { global.BASELINE_auth?.onChange?.(() => { installed = false; global.setTimeout(install, 0); }); } catch (_error) {}
})(typeof window !== 'undefined' ? window : globalThis);

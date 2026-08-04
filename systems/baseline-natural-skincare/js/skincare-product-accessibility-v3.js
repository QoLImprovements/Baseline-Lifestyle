/* Baseline Natural Skincare — make Product / Recipe selection visible and directly accessible. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_PRODUCT_ACCESS_V3__) return;
  global.__BASELINE_SKINCARE_PRODUCT_ACCESS_V3__ = true;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  let frame = 0;

  function injectStyle() {
    if ($('#skincareProductAccessV3Style')) return;
    const style = document.createElement('style');
    style.id = 'skincareProductAccessV3Style';
    style.textContent = `
      #routine .routine-product-preview-button{
        appearance:none;border:1px solid var(--skin-peach);border-radius:999px;
        background:linear-gradient(180deg,var(--skin-cream),var(--skin-milk));
        color:var(--ink);font:inherit;font-size:16px;font-weight:850;
        min-height:34px;padding:6px 11px;cursor:pointer
      }
      #routine .routine-product-preview-button:hover,
      #routine .routine-product-preview-button:focus-visible{
        background:var(--skin-wash);outline:2px solid var(--skin-deep);outline-offset:2px
      }
      #routine .routine-product-field{display:grid!important;visibility:visible!important;opacity:1!important}
    `;
    document.head.appendChild(style);
  }

  function selectedProductText(article) {
    const select = article.querySelector('[data-field="productSelection"]');
    if (!select) return 'Product / Recipe: Choose…';
    const text = String(select.selectedOptions?.[0]?.textContent || '').trim();
    return text && text !== 'No product selected'
      ? `Product / Recipe: ${text}`
      : 'Product / Recipe: Choose…';
  }

  function patchArticle(article) {
    const itemId = article.dataset.routineItem;
    if (!itemId) return;
    let preview = article.querySelector(':scope > .routine-step-preview');
    if (!preview) {
      preview = document.createElement('div');
      preview.className = 'routine-step-preview';
      article.querySelector('.routine-item-head')?.insertAdjacentElement('afterend', preview);
    }
    let button = preview.querySelector('[data-open-product-step]');
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'routine-product-preview-button';
      button.dataset.openProductStep = itemId;
      preview.appendChild(button);
    }
    button.textContent = selectedProductText(article);
    button.setAttribute('aria-label', `${button.textContent}. Open product selection.`);
  }

  function patch() {
    frame = 0;
    $$('.routine-item[data-routine-item]').forEach(patchArticle);
  }

  function schedulePatch() {
    if (frame) return;
    frame = global.requestAnimationFrame(patch);
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-open-product-step]');
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    const article = button.closest('.routine-item[data-routine-item]');
    const toggle = article?.querySelector('[data-routine-step-edit]');
    if (article?.classList.contains('routine-step-collapsed')) toggle?.click();
    global.setTimeout(() => article?.querySelector('[data-field="productSelection"]')?.focus(), 40);
  }, true);

  document.addEventListener('change', (event) => {
    if (event.target.closest('[data-field="productSelection"]')) schedulePatch();
  });

  function boot() {
    const root = $('#routine');
    if (!root) return;
    injectStyle();
    const observer = new MutationObserver(schedulePatch);
    observer.observe(root, { childList:true, subtree:true });
    global.addEventListener?.('pagehide', () => observer.disconnect(), { once:true });
    schedulePatch();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

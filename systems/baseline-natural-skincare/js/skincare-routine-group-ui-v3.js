/* Baseline Personal Care — group-first plan controls and structured summaries. */
(function (global) {
  'use strict';

  if (!global.document || global.__BASELINE_SKINCARE_GROUP_UI_V3__) return;
  global.__BASELINE_SKINCARE_GROUP_UI_V3__ = true;

  const initialisedGroups = new Set();
  const expandedSteps = new Set();
  let frame = 0;
  let patching = false;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[character]));
  }

  function directChildParagraph(item) {
    return Array.from(item.children).find((child) => child.tagName === 'P' && !child.classList.contains('routine-summary-notes')) || null;
  }

  function comprehensivePoints(text) {
    const clean = String(text || '').replace(/\s+/g, ' ').trim();
    if (!clean) return [];
    let points = clean.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [clean];
    points = points.map((point) => point.trim()).filter(Boolean);
    if (points.length === 1 && clean.includes(';')) {
      points = clean.split(';').map((point) => point.trim()).filter(Boolean);
    }
    return points.slice(0, 10);
  }

  function patchManager() {
    const manager = $('.routine-group-manager');
    if (!manager) return;
    const heading = manager.querySelector('.routine-group-manager-head h3');
    const note = manager.querySelector('.routine-group-manager-head .note');
    if (heading) heading.textContent = 'Create Routine Group';
    if (note) note.textContent = 'Create the group here. Expand the group below to rename it, set its shared schedule, remove it, or edit the routine steps it contains.';
  }

  function sourceGroupRow(groupId) {
    return $$('#routineGroupList [data-routine-group]').find((row) => row.dataset.routineGroup === groupId) || null;
  }

  function cloneGroupEditor(groupId) {
    const source = sourceGroupRow(groupId);
    if (!source) return null;
    const editor = source.cloneNode(true);
    editor.className = 'routine-group-editor';
    editor.removeAttribute('data-routine-group');
    editor.dataset.groupEditor = groupId;
    editor.querySelector('[data-group-collapse]')?.remove();
    const settings = editor.querySelector('.routine-group-settings');
    if (settings) settings.hidden = false;
    return editor;
  }

  function selectedText(article, selector) {
    const select = article.querySelector(selector);
    if (!select) return '';
    return String(select.selectedOptions?.[0]?.textContent || '').trim();
  }

  function stepPreview(article) {
    const values = [
      selectedText(article, '[data-routine-group-select]'),
      selectedText(article, '[data-field="timeOfDay"]'),
      selectedText(article, '[data-field="frequencyMode"]'),
      selectedText(article, '[data-field="shavingMethod"]'),
      selectedText(article, '[data-field="productSelection"]')
    ].filter((value) => value && value !== 'No routine group' && value !== 'No product selected');
    return values.length ? values : ['Open to edit schedule, method, product and notes'];
  }

  function patchStep(article) {
    const itemId = article.dataset.routineItem;
    if (!itemId) return;
    const actions = article.querySelector('.routine-item-actions');
    if (!actions) return;

    let toggle = actions.querySelector('[data-routine-step-edit]');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'routine-mini routine-step-edit-toggle';
      toggle.dataset.routineStepEdit = itemId;
      actions.prepend(toggle);
    }

    let preview = article.querySelector(':scope > .routine-step-preview');
    if (!preview) {
      preview = document.createElement('div');
      preview.className = 'routine-step-preview';
      article.querySelector('.routine-item-head')?.insertAdjacentElement('afterend', preview);
    }
    preview.innerHTML = stepPreview(article).map((value) => `<span>${escapeHtml(value)}</span>`).join('');

    const expanded = expandedSteps.has(itemId);
    article.classList.toggle('routine-step-collapsed', !expanded);
    toggle.textContent = expanded ? 'Close step' : 'Edit step';
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    toggle.setAttribute('aria-label', `${expanded ? 'Close' : 'Edit'} ${article.querySelector('.routine-item-head strong')?.textContent || 'routine step'}`);
  }

  function patchPlanGroups() {
    $$('.routine-plan-group[data-plan-group]').forEach((section) => {
      const groupId = section.dataset.planGroup;
      const button = section.querySelector('[data-plan-group-collapse]');
      if (!groupId || !button) return;

      if (!initialisedGroups.has(groupId)) {
        initialisedGroups.add(groupId);
        if (button.getAttribute('aria-expanded') === 'true') {
          button.click();
          return;
        }
      }

      const body = section.querySelector('.routine-plan-group-body');
      if (!body || body.hidden) return;

      if (!body.querySelector(`[data-group-editor="${groupId}"]`)) {
        const editor = cloneGroupEditor(groupId);
        if (editor) body.prepend(editor);
      }
      $$('.routine-item[data-routine-item]', body).forEach(patchStep);
    });

    const ungrouped = $('.routine-plan-group-ungrouped .routine-plan-group-body');
    if (ungrouped) $$('.routine-item[data-routine-item]', ungrouped).forEach(patchStep);
  }

  function patchSummaryItem(item) {
    if (item.dataset.summaryStructured === 'true') return;
    const paragraph = directChildParagraph(item);
    if (!paragraph) return;
    const points = comprehensivePoints(paragraph.textContent);
    if (!points.length) return;

    const meta = item.querySelector('.routine-summary-meta');
    const metaValues = meta ? $$('span', meta).map((span) => span.textContent.trim()).filter(Boolean) : [];
    const labels = ['Time of day', 'Frequency', 'Method', 'Product / recipe'];

    const columns = document.createElement('div');
    columns.className = 'routine-summary-columns';
    columns.innerHTML = `<section class="routine-summary-overview"><h4>Routine details</h4><ul class="routine-summary-detail-list">${metaValues.length ? metaValues.map((value, index) => `<li><strong>${escapeHtml(labels[index] || 'Detail')}:</strong> ${escapeHtml(value)}</li>`).join('') : '<li>Individual schedule and product details are available in Routine Plan.</li>'}</ul></section><section class="routine-summary-benefits-list"><h4>Benefits and practical role</h4><ul>${points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul></section>`;

    paragraph.replaceWith(columns);
    item.dataset.summaryStructured = 'true';
  }

  function patchSummaries() {
    $$('.routine-summary-item-comprehensive').forEach(patchSummaryItem);
  }

  function patch() {
    frame = 0;
    if (patching) return;
    patching = true;
    try {
      patchManager();
      patchPlanGroups();
      patchSummaries();
    } finally {
      patching = false;
    }
  }

  function schedulePatch() {
    if (frame || patching) return;
    frame = global.requestAnimationFrame(patch);
  }

  function bindEvents() {
    document.addEventListener('click', (event) => {
      const toggle = event.target.closest('[data-routine-step-edit]');
      if (!toggle) return;
      event.preventDefault();
      event.stopPropagation();
      const itemId = toggle.dataset.routineStepEdit;
      if (expandedSteps.has(itemId)) expandedSteps.delete(itemId);
      else expandedSteps.add(itemId);
      const article = toggle.closest('.routine-item[data-routine-item]');
      if (article) patchStep(article);
    }, true);
  }

  function boot() {
    const root = $('#routine');
    if (!root) return;
    bindEvents();
    const observer = new MutationObserver(schedulePatch);
    observer.observe(root, { childList:true, subtree:true });
    global.addEventListener?.('pagehide', () => observer.disconnect(), { once:true });
    schedulePatch();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);

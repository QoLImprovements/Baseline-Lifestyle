from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
JS_PATH = ROOT / 'sitewide/js/baseline-shared.js'
CSS_PATH = ROOT / 'sitewide/css/baseline-recipes.css'

js = JS_PATH.read_text(encoding='utf-8')
css = CSS_PATH.read_text(encoding='utf-8')

# Build marker.
js = js.replace(
    'const BASELINE_SHARED_BUILD = "SITEWIDE_SKINCARE_RECIPE_SECTION_SAFE_20260824_5";',
    'const BASELINE_SHARED_BUILD = "SITEWIDE_UNIVERSAL_RECIPE_TEMPLATE_20260824_1";'
)

# The shared recipe engine must also initialise true standalone recipe documents.
selector_pattern = re.compile(
    r"    let recipes = \[\];\n"
    r"    if\(onlyId\)\{\n"
    r".*?"
    r"    if\(!recipes\.length\) return;\n",
    re.S,
)
selector_replacement = """    const recipeScope = q('#recipes');
    const recipeSelectorBase = recipeScope
      ? '#recipes .recipe.card.recipe-page'
      : '.recipe.card.recipe-page';

    let recipes = [];
    if(onlyId){
      try{
        recipes = qsa(recipeSelectorBase + '[id="' + CSS.escape(String(onlyId)) + '"]');
      }catch(_e){
        recipes = qsa(recipeSelectorBase + '[id]');
      }
    }else{
      recipes = qsa(recipeSelectorBase + '[id]');
    }
    if(!recipes.length) return;
"""
js, count = selector_pattern.subn(selector_replacement, js, count=1)
if count != 1:
    raise SystemExit(f'Expected to replace recipe selector once, replaced {count}')

# Standalone Skincare recipe cards use h1; embedded cards use h3.
js = js.replace("      const h3 = q('h3', recipeEl);", "      const h3 = q('h3,h2,h1', recipeEl);", 1)

start_marker = '    function setupRecipeCompactOptions(recipeEl){'
end_marker = '    recipes.forEach(recipeEl=>{'
start = js.find(start_marker)
end = js.find(end_marker, start)
if start < 0 or end < 0:
    raise SystemExit('Could not locate compact recipe option block')

new_block = r'''    function setupRecipeCompactOptions(recipeEl){
      if(!recipeEl || (recipeEl.dataset && recipeEl.dataset.compactOptionsReady === '1')) return;
      const controls = q('.recipe-controls', recipeEl);
      const printSummary = q('.print-summary', recipeEl);
      const titleRow = q('.recipe-title-row', recipeEl) || q('h3,h2,h1', recipeEl);
      if(!titleRow || !controls || !printSummary) return;

      const strip = document.createElement('div');
      strip.className = 'recipe-option-strip recipe-standard-controls print-hide';
      ['pointerdown','mousedown','touchstart','click'].forEach(function(evtName){
        strip.addEventListener(evtName, function(e){ e.stopPropagation(); });
      });

      const variantSwitcher = q('.variant-switcher', recipeEl);
      let variantSelect = null;
      if(variantSwitcher){
        variantSwitcher.classList.add('recipe-native-variant-switcher', 'print-hide');
        const field = document.createElement('div');
        field.className = 'recipe-variant-field';
        variantSelect = document.createElement('select');
        variantSelect.className = 'recipe-variant-select';
        variantSelect.setAttribute('aria-label', 'Select Variant');
        const placeholderOpt = document.createElement('option');
        placeholderOpt.value = '';
        placeholderOpt.textContent = 'Select Variant';
        placeholderOpt.selected = true;
        placeholderOpt.disabled = true;
        placeholderOpt.hidden = true;
        variantSelect.appendChild(placeholderOpt);
        qsa('.variant-tab', variantSwitcher).forEach(btn=>{
          const opt = document.createElement('option');
          opt.value = btn.getAttribute('data-variant') || btn.textContent.trim();
          opt.textContent = btn.textContent.trim();
          variantSelect.appendChild(opt);
        });
        field.appendChild(variantSelect);
        strip.appendChild(field);

        variantSelect.addEventListener('change', (event)=>{
          try{ if(event) event.stopPropagation(); }catch(_e){}
          if(!variantSelect.value) return;
          const btn = q('.variant-tab[data-variant="' + CSS.escape(variantSelect.value) + '"]', variantSwitcher);
          if(btn){
            btn.click();
            const chosenValue = variantSelect.value;
            window.setTimeout(()=>{
              if(chosenValue) variantSelect.value = chosenValue;
              if(typeof recipeEl.__baselineUpdatePrintSummary === 'function') recipeEl.__baselineUpdatePrintSummary();
              try{ if(typeof recipeEl.__baselineApplyScaling === 'function') recipeEl.__baselineApplyScaling(); }catch(_e){}
            }, 0);
          }
        });
      }

      // Recipe-defining choices remain in the default recipe view. They are not
      // utility adjustments: changing oat type or thickness can materially change
      // the recipe the user is making.
      const formulaRows = qsa(':scope > .recipe-control-row--oat, :scope > .recipe-control-row--thickness', controls);
      if(formulaRows.length){
        const formulaControls = document.createElement('div');
        formulaControls.className = 'recipe-formula-controls';
        formulaRows.forEach(row=> formulaControls.appendChild(row));
        strip.appendChild(formulaControls);
      }

      const adjustmentsBtn = document.createElement('button');
      adjustmentsBtn.type = 'button';
      adjustmentsBtn.className = 'recipe-adjustments-toggle print-hide';
      adjustmentsBtn.setAttribute('aria-expanded', 'false');
      adjustmentsBtn.textContent = 'Adjustments';

      const editBody = document.createElement('div');
      editBody.className = 'recipe-edit-options recipe-adjustments-panel print-hide';
      editBody.hidden = true;
      try{
        recipeEl.classList.remove('recipe-options-open');
        recipeEl.classList.remove('recipe-adjustments-open');
      }catch(_e){}

      titleRow.insertAdjacentElement('afterend', printSummary);
      printSummary.insertAdjacentElement('afterend', strip);
      strip.insertAdjacentElement('afterend', editBody);
      controls.classList.add('recipe-edit-controls');
      editBody.appendChild(controls);

      adjustmentsBtn.addEventListener('click', ()=>{
        const open = !recipeEl.classList.contains('recipe-adjustments-open');
        recipeEl.classList.toggle('recipe-adjustments-open', open);
        // Retain the legacy class only as a compatibility hook for the existing
        // control CSS. Recipe-specific controls are independently forced visible
        // by the universal template contract.
        recipeEl.classList.toggle('recipe-options-open', open);
        editBody.hidden = !open;
        adjustmentsBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      qsa('.variant-tab', recipeEl).forEach(btn=>{
        btn.addEventListener('click', ()=>{
          window.setTimeout(()=>{
            if(variantSelect){
              const v = btn.getAttribute('data-variant') || btn.textContent.trim();
              if(v) variantSelect.value = v;
            }
            if(typeof recipeEl.__baselineUpdatePrintSummary === 'function') recipeEl.__baselineUpdatePrintSummary();
          }, 0);
        });
      });

      qsa('input[type="range"]', recipeEl).forEach(slider=>{
        slider.addEventListener('input', ()=>{ if(typeof recipeEl.__baselineUpdatePrintSummary === 'function') recipeEl.__baselineUpdatePrintSummary(); });
        slider.addEventListener('change', ()=>{ if(typeof recipeEl.__baselineUpdatePrintSummary === 'function') recipeEl.__baselineUpdatePrintSummary(); });
      });

      try{ recipeEl.__baselineAdjustmentsButton = adjustmentsBtn; }catch(_e){}
      if(recipeEl.dataset) recipeEl.dataset.compactOptionsReady = '1';
    }

    function setupRecipeUniversalTemplate(recipeEl){
      if(!recipeEl || (recipeEl.dataset && recipeEl.dataset.universalTemplateReady === '1')) return;
      const titleRow = q('.recipe-title-row', recipeEl) || q('h3,h2,h1', recipeEl);
      const strip = q('.recipe-option-strip', recipeEl);
      const editBody = q('.recipe-edit-options', recipeEl);
      if(!titleRow || !strip || !editBody) return;

      recipeEl.classList.add('recipe-universal-template');

      const metaRow = document.createElement('div');
      metaRow.className = 'recipe-meta-row';
      const metaSummary = document.createElement('div');
      metaSummary.className = 'recipe-meta-summary';
      metaRow.appendChild(metaSummary);

      function normaliseMetaValue(value){
        return String(value || '').replace(/\s+/g, ' ').replace(/^[\s:–—-]+|[\s.;]+$/g, '').trim();
      }
      function addMeta(label, value, className){
        value = normaliseMetaValue(value);
        if(!value) return;
        const item = document.createElement('span');
        item.className = 'recipe-meta-item' + (className ? (' ' + className) : '');
        const key = document.createElement('span');
        key.className = 'recipe-meta-key';
        key.textContent = label + ':';
        const val = document.createElement('span');
        val.className = 'recipe-meta-value';
        val.textContent = value;
        item.append(key, document.createTextNode(' '), val);
        metaSummary.appendChild(item);
      }
      function firstMatch(re, text){
        const match = String(text || '').match(re);
        return match && match[1] ? normaliseMetaValue(match[1]) : '';
      }

      const recipeText = String(recipeEl.textContent || '').replace(/\s+/g, ' ');
      let yieldValue = firstMatch(/\bYield\s*:\s*([^.;]+)/i, recipeText);
      if(!yieldValue){
        yieldValue = firstMatch(/\bTotal\s*[–—:-]\s*([0-9]+(?:\.[0-9]+)?\s*(?:g|kg|ml|l)\b)/i, recipeText);
      }
      if(!yieldValue){
        yieldValue = firstMatch(/\b([0-9]+(?:\.[0-9]+)?\s*(?:g|ml)\s+(?:master\s+)?(?:batch|blend|balm))\b/i, recipeText)
          .replace(/\s+(?:master\s+)?(?:batch|blend|balm)$/i, '');
      }
      const equipmentValue = firstMatch(/\bEquipment\s*:\s*([^.;]+)/i, recipeText);
      const allergensValue = firstMatch(/\bAllergens?\s*:\s*([^.;]+)/i, recipeText);
      const categoryValue = (recipeEl.dataset && recipeEl.dataset.category) ? recipeEl.dataset.category : '';

      addMeta('Yield', yieldValue);
      addMeta('Equipment', equipmentValue);
      addMeta('Allergens', allergensValue);
      addMeta('Category', categoryValue, /^testing$/i.test(categoryValue) ? 'recipe-meta-status' : '');

      const adjustmentsBtn = recipeEl.__baselineAdjustmentsButton || q('.recipe-adjustments-toggle', recipeEl);
      if(adjustmentsBtn) metaRow.appendChild(adjustmentsBtn);

      const tabs = document.createElement('div');
      tabs.className = 'recipe-subtabs print-hide';
      tabs.setAttribute('role', 'tablist');
      tabs.setAttribute('aria-label', 'Recipe views');
      const tabDefs = [
        ['standard', 'Standard View'],
        ['details', 'Details'],
        ['guidance', 'Guidance'],
        ['show-all', 'Show All']
      ];
      tabDefs.forEach(([id, label])=>{
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'recipe-subtab';
        button.dataset.recipeSubtab = id;
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', id === 'standard' ? 'true' : 'false');
        button.textContent = label;
        tabs.appendChild(button);
      });

      // Canonical order: title -> metadata/Adjustments -> adjustments panel ->
      // subtabs -> the selected view content. There is intentionally no visible
      // "Standard View" heading inside the content.
      titleRow.insertAdjacentElement('afterend', metaRow);
      metaRow.insertAdjacentElement('afterend', editBody);
      editBody.insertAdjacentElement('afterend', tabs);
      tabs.insertAdjacentElement('afterend', strip);

      function headingGroup(text){
        const t = String(text || '').replace(/\(\s*view\s*\)/ig, '').replace(/\s+/g, ' ').trim().toLowerCase();
        if(!t) return '';
        if(/(?:^|\s)ingredients? roles?\b|^meta\b|^formula\b|technical|breakdown/.test(t)) return 'details';
        if(/^ingredients?\b/.test(t) || /^method\b/.test(t)) return 'standard';
        if(/storage|\buse\b|serving|body\s*&\s*sensory|comedogenic|safety|preservation|^notes?\b/.test(t)) return 'guidance';
        return '';
      }

      function markContainer(container){
        if(!container) return;
        const children = Array.from(container.children || []);
        let current = '';
        let seenRecognisedHeading = false;
        children.forEach((child, index)=>{
          if(child === metaRow || child === editBody || child === tabs || child === strip || child.classList.contains('recipe-actions') || child.classList.contains('recipe-title-row') || child.classList.contains('print-summary')){
            return;
          }
          if(child.classList.contains('variant-panel')){
            markContainer(child);
            return;
          }
          if(/^H[1-4]$/i.test(child.tagName || '')){
            const group = headingGroup(child.textContent || '');
            if(group){
              current = group;
              seenRecognisedHeading = true;
              child.dataset.recipeViewGroup = group;
            }else if(container.classList && container.classList.contains('variant-panel') && !seenRecognisedHeading){
              // Variant name heading belongs with the make-the-recipe view.
              current = 'standard';
              child.dataset.recipeViewGroup = 'standard';
            }else{
              current = '';
            }
            return;
          }
          if(current){
            child.dataset.recipeViewGroup = current;
          }else if(container.classList && container.classList.contains('variant-panel') && !seenRecognisedHeading){
            child.dataset.recipeViewGroup = 'standard';
          }
        });
      }

      markContainer(recipeEl);
      qsa('.variant-panel', recipeEl).forEach(markContainer);

      // Recipe-specific controls are part of Standard View, never hidden behind
      // the Adjustments utility panel.
      strip.dataset.recipeViewGroup = 'standard';
      qsa('.glide-controller', recipeEl).forEach(el=>{ el.dataset.recipeViewGroup = 'standard'; });

      // Existing status/meta prose is deeper information once the compact metadata
      // row represents it. This prevents the Testing sentence and ad-hoc Meta prose
      // from cluttering Standard View.
      qsa(':scope > p.note', recipeEl).forEach(note=>{
        const text = String(note.textContent || '');
        if(/formulation currently being tested/i.test(text) || /\b(?:Yield|Equipment|Allergens?)\s*:/i.test(text) || /Barrier-first.*Vegan/i.test(text)){
          note.dataset.recipeViewGroup = 'details';
        }
      });
      qsa('p', recipeEl).forEach(p=>{
        if(/^\s*Total\s*[–—:-]/i.test(String(p.textContent || ''))){
          p.dataset.recipeViewGroup = 'details';
        }
      });

      // The ingredient-library link is supporting information, not part of the
      // minimal make-the-recipe view. Keep it available in Details and Show All.
      qsa('.recipe-info-view-link, .info-link', recipeEl).forEach(link=>{
        link.dataset.recipeViewGroup = 'details';
      });

      function normalizeEmphasis(){
        qsa('ol > li > strong:first-child', recipeEl).forEach(strong=>{
          const value = String(strong.textContent || '').trim();
          if(!value) return;
          if(/^[0-9¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/.test(value)) return;
          strong.classList.add('recipe-method-action');
          const next = strong.nextSibling;
          if(next && next.nodeType === Node.TEXT_NODE && /^\s*:/.test(next.nodeValue || '') && !/:$/.test(value)){
            strong.textContent = value + ':';
            next.nodeValue = String(next.nodeValue || '').replace(/^\s*:\s*/, ' ');
          }
        });
        qsa('.ing-subhead > strong', recipeEl).forEach(strong=> strong.classList.add('recipe-subgroup-label'));
        qsa('[data-recipe-view-group="details"] li > strong:first-child', recipeEl).forEach(strong=> strong.classList.add('recipe-detail-label'));
        qsa('[data-recipe-view-group="guidance"] li > strong:first-child, [data-recipe-view-group="guidance"] p > strong:first-child', recipeEl).forEach(strong=> strong.classList.add('recipe-guidance-label'));
      }
      normalizeEmphasis();

      function setView(view){
        const next = ['standard','details','guidance','show-all'].includes(view) ? view : 'standard';
        recipeEl.dataset.recipeView = next;
        qsa('.recipe-subtab', tabs).forEach(button=>{
          button.setAttribute('aria-selected', button.dataset.recipeSubtab === next ? 'true' : 'false');
        });
        qsa('[data-recipe-view-group]', recipeEl).forEach(el=>{
          const group = el.dataset.recipeViewGroup || '';
          const visible = next === 'show-all' || group === next;
          el.classList.toggle('recipe-view-hidden', !visible);
        });
        // Utility adjustments remain independent of the selected information tab.
        editBody.classList.remove('recipe-view-hidden');
        metaRow.classList.remove('recipe-view-hidden');
        tabs.classList.remove('recipe-view-hidden');
      }

      qsa('.recipe-subtab', tabs).forEach(button=>{
        button.addEventListener('click', event=>{
          event.preventDefault();
          event.stopPropagation();
          setView(button.dataset.recipeSubtab || 'standard');
        });
      });

      // Default every newly opened recipe to Standard View.
      setView('standard');
      try{ recipeEl.__baselineSetRecipeView = setView; }catch(_e){}
      if(recipeEl.dataset) recipeEl.dataset.universalTemplateReady = '1';
    }

'''
js = js[:start] + new_block + js[end:]

# Add universal setup to every recipe after controls/compact option preparation.
old_loop = """      buildControls(recipeEl);\n      setupRecipeCompactOptions(recipeEl);\n\n      // Ensure method \"Amounts:\" pills exist immediately on first render."""
new_loop = """      buildControls(recipeEl);\n      setupRecipeCompactOptions(recipeEl);\n      setupRecipeUniversalTemplate(recipeEl);\n\n      // Ensure method \"Amounts:\" pills exist immediately on first render."""
if old_loop not in js:
    raise SystemExit('Could not locate recipe setup loop')
js = js.replace(old_loop, new_loop, 1)

# Universal template CSS is deliberately system-colour agnostic. It inherits the
# Food or Skincare variables already defined by that system.
css_marker = '/* BASELINE-UNIVERSAL-RECIPE-TEMPLATE-20260824 */'
if css_marker not in css:
    css += r'''

/* BASELINE-UNIVERSAL-RECIPE-TEMPLATE-20260824
   One recipe information architecture across Food + Natural Skincare.
   Geometry/behaviour are shared; every surface inherits the active system theme. */
body[data-app] .recipe-universal-template .recipe-view-hidden{
  display:none !important;
}

body[data-app] .recipe-universal-template > .recipe-title-row > h1,
body[data-app] .recipe-universal-template > .recipe-title-row > h2,
body[data-app] .recipe-universal-template > .recipe-title-row > h3{
  cursor:default !important;
}

body[data-app] .recipe-universal-template .recipe-meta-row{
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:12px !important;
  flex-wrap:wrap !important;
  width:100% !important;
  margin:6px 0 12px !important;
  font-size:16px !important;
  line-height:1.35 !important;
  color:var(--muted, var(--ink)) !important;
}
body[data-app] .recipe-universal-template .recipe-meta-summary{
  display:flex !important;
  align-items:center !important;
  flex-wrap:wrap !important;
  gap:0 !important;
  min-width:0 !important;
  flex:1 1 auto !important;
}
body[data-app] .recipe-universal-template .recipe-meta-item{
  display:inline-flex !important;
  align-items:baseline !important;
  white-space:normal !important;
}
body[data-app] .recipe-universal-template .recipe-meta-item + .recipe-meta-item::before{
  content:'•' !important;
  display:inline-block !important;
  margin:0 .55em !important;
  color:currentColor !important;
  opacity:.68 !important;
}
body[data-app] .recipe-universal-template .recipe-meta-key{
  font-weight:780 !important;
  color:var(--ink) !important;
}
body[data-app] .recipe-universal-template .recipe-meta-status .recipe-meta-value{
  font-weight:800 !important;
  color:var(--accent-2, var(--ink)) !important;
}

/* Adjustments is intentionally text-scale, not a large control pill. */
html body[data-app] .recipe-universal-template .recipe-adjustments-toggle{
  appearance:none !important;
  -webkit-appearance:none !important;
  display:inline-flex !important;
  align-items:center !important;
  gap:.35em !important;
  flex:0 0 auto !important;
  width:auto !important;
  min-width:0 !important;
  min-height:0 !important;
  height:auto !important;
  margin:0 0 0 auto !important;
  padding:0 !important;
  border:0 !important;
  border-radius:0 !important;
  background:transparent !important;
  background-image:none !important;
  color:var(--accent-2, var(--ink)) !important;
  -webkit-text-fill-color:currentColor !important;
  font:inherit !important;
  font-size:1em !important;
  font-weight:800 !important;
  line-height:inherit !important;
  box-shadow:none !important;
  text-decoration:underline !important;
  text-decoration-thickness:1px !important;
  text-underline-offset:3px !important;
  cursor:pointer !important;
}
html body[data-app] .recipe-universal-template .recipe-adjustments-toggle::after{
  content:'▾' !important;
  display:inline-block !important;
  text-decoration:none !important;
  transition:transform .16s ease !important;
}
html body[data-app] .recipe-universal-template .recipe-adjustments-toggle[aria-expanded="true"]::after{
  transform:rotate(180deg) !important;
}

body[data-app] .recipe-universal-template .recipe-adjustments-panel[hidden]{
  display:none !important;
}
body[data-app] .recipe-universal-template.recipe-adjustments-open .recipe-adjustments-panel{
  display:block !important;
  width:100% !important;
  margin:0 0 14px !important;
  padding:12px 0 4px !important;
  border-top:1px solid color-mix(in srgb, var(--border, rgba(0,0,0,.18)) 72%, transparent) !important;
  background:transparent !important;
  box-shadow:none !important;
}
body[data-app] .recipe-universal-template .recipe-adjustments-panel > .recipe-controls{
  display:grid !important;
}

/* Subtabs use the active system palette rather than defining Food/Skincare colours here. */
body[data-app] .recipe-universal-template .recipe-subtabs{
  display:flex !important;
  align-items:center !important;
  flex-wrap:wrap !important;
  gap:8px !important;
  width:100% !important;
  margin:8px 0 16px !important;
  padding:0 0 10px !important;
  border-bottom:1px solid color-mix(in srgb, var(--border, rgba(0,0,0,.18)) 78%, transparent) !important;
}
html body[data-app] .recipe-universal-template .recipe-subtab{
  appearance:none !important;
  -webkit-appearance:none !important;
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  min-height:36px !important;
  margin:0 !important;
  padding:7px 12px !important;
  border-radius:999px !important;
  border:1px solid var(--showall-border, var(--border, rgba(0,0,0,.18))) !important;
  background:var(--showall-bg, var(--accent-soft, rgba(255,255,255,.18))) !important;
  color:var(--accent-2, var(--ink)) !important;
  -webkit-text-fill-color:currentColor !important;
  font:inherit !important;
  font-size:15px !important;
  font-weight:780 !important;
  line-height:1.1 !important;
  box-shadow:none !important;
  cursor:pointer !important;
}
html body[data-app] .recipe-universal-template .recipe-subtab[aria-selected="true"]{
  background:var(--accent-soft, var(--showall-bg)) !important;
  border-color:var(--accent, var(--showall-border, var(--border))) !important;
  color:var(--ink) !important;
  font-weight:900 !important;
  box-shadow:0 8px 18px -16px rgba(35,23,19,.42) !important;
}

/* Variant + recipe-defining choices live in Standard View. */
body[data-app] .recipe-universal-template .recipe-option-strip{
  display:flex !important;
  align-items:center !important;
  gap:12px !important;
  flex-wrap:wrap !important;
  margin:0 0 14px !important;
}
body[data-app] .recipe-universal-template .recipe-option-strip:empty{
  display:none !important;
}
body[data-app] .recipe-universal-template .recipe-formula-controls{
  display:flex !important;
  align-items:center !important;
  flex-wrap:wrap !important;
  gap:10px 14px !important;
}
body[data-app] .recipe-universal-template .recipe-formula-controls .recipe-control-row{
  display:flex !important;
  align-items:center !important;
  gap:8px !important;
  width:auto !important;
  margin:0 !important;
}
body[data-app] .recipe-universal-template .recipe-formula-controls .recipe-control-row > .label{
  margin:0 !important;
  white-space:nowrap !important;
}
body[data-app] .recipe-universal-template .recipe-formula-controls .bl-select,
body[data-app] .recipe-universal-template .recipe-formula-controls select,
body[data-app] .recipe-universal-template .recipe-formula-controls .oat-toggle{
  width:auto !important;
  max-width:100% !important;
}

/* The native variant buttons remain the event authority, but the compact selector is the visible UI. */
body[data-app] .recipe-universal-template .recipe-native-variant-switcher,
body[data-app] .recipe-universal-template .variant-heading{
  display:none !important;
}

/* Recipe-specific sliders are never hidden by the Adjustments utility panel. */
html body[data-app] .recipe-universal-template .glide-controller,
html body[data-app] #recipes .recipe-universal-template:not(.recipe-options-open) .glide-controller{
  display:grid !important;
}
body[data-app] .recipe-universal-template[data-recipe-view="details"] .glide-controller,
body[data-app] .recipe-universal-template[data-recipe-view="guidance"] .glide-controller{
  display:none !important;
}

/* Remove ad-hoc emphasis from recipe prose. Bold is reserved for semantic labels. */
body[data-app] .recipe-universal-template [data-recipe-view-group] strong{
  font-weight:inherit !important;
}
body[data-app] .recipe-universal-template .recipe-subgroup-label,
body[data-app] .recipe-universal-template .recipe-method-action,
body[data-app] .recipe-universal-template .recipe-detail-label,
body[data-app] .recipe-universal-template .recipe-guidance-label{
  font-weight:850 !important;
}

/* Standalone Food Phase-4B pages use the same card template; remove the development-only duplicate title/note. */
body[data-app="food"] .phase4b-recipe-shell > .phase4b-recipe-note,
body[data-app="food"] .phase4b-recipe-shell > .phase4b-recipe-top > h1{
  display:none !important;
}

@media (max-width:720px){
  body[data-app] .recipe-universal-template .recipe-meta-row{
    align-items:flex-start !important;
  }
  html body[data-app] .recipe-universal-template .recipe-adjustments-toggle{
    margin-left:0 !important;
  }
  body[data-app] .recipe-universal-template .recipe-subtabs{
    display:grid !important;
    grid-template-columns:repeat(2, minmax(0, 1fr)) !important;
  }
  html body[data-app] .recipe-universal-template .recipe-subtab{
    width:100% !important;
  }
  body[data-app] .recipe-universal-template .recipe-formula-controls,
  body[data-app] .recipe-universal-template .recipe-formula-controls .recipe-control-row{
    width:100% !important;
    align-items:stretch !important;
  }
  body[data-app] .recipe-universal-template .recipe-formula-controls .recipe-control-row{
    flex-direction:column !important;
  }
}

@media print{
  body[data-app] .recipe-universal-template .recipe-subtabs,
  body[data-app] .recipe-universal-template .recipe-adjustments-toggle,
  body[data-app] .recipe-universal-template .recipe-adjustments-panel,
  body[data-app] .recipe-universal-template .recipe-option-strip,
  body[data-app] .recipe-universal-template .glide-controller{
    display:none !important;
  }
  body[data-app] .recipe-universal-template [data-recipe-view-group]{
    display:block !important;
  }
}
'''

JS_PATH.write_text(js, encoding='utf-8')
CSS_PATH.write_text(css, encoding='utf-8')
print('Applied universal recipe template patch')

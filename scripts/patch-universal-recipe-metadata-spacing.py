from pathlib import Path

js_path = Path('sitewide/js/baseline-shared.js')
css_path = Path('sitewide/css/baseline-recipes.css')
js = js_path.read_text(encoding='utf-8')

js = js.replace('SITEWIDE_UNIVERSAL_RECIPE_TEMPLATE_20260824_2', 'SITEWIDE_UNIVERSAL_RECIPE_TEMPLATE_20260824_3', 1)

old = """        metaSummary.appendChild(item);\n      }"""
new = """        metaSummary.appendChild(item);\n        return val;\n      }"""
if old not in js:
    raise SystemExit('addMeta return anchor not found')
js = js.replace(old, new, 1)

old = """      if(!yieldValue){\n        yieldValue = firstMatch(/\\b([0-9]+(?:\\.[0-9]+)?\\s*(?:g|ml)\\s+(?:master\\s+)?(?:batch|blend|balm))\\b/i, recipeText)\n          .replace(/\\s+(?:master\\s+)?(?:batch|blend|balm)$/i, '');\n      }\n      const equipmentValue"""
new = """      if(!yieldValue){\n        yieldValue = firstMatch(/\\b([0-9]+(?:\\.[0-9]+)?\\s*(?:g|ml)\\s+(?:master\\s+)?(?:batch|blend|balm))\\b/i, recipeText)\n          .replace(/\\s+(?:master\\s+)?(?:batch|blend|balm)$/i, '');\n      }\n      if(!yieldValue){\n        const serves = firstMatch(/\\b(?:Serves|Makes)\\s*:?\\s*([^.;]+)/i, recipeText);\n        if(serves) yieldValue = serves;\n      }\n      if(!yieldValue) yieldValue = '1 recipe batch';\n      const equipmentValue"""
if old not in js:
    raise SystemExit('yield fallback anchor not found')
js = js.replace(old, new, 1)

old = """      addMeta('Yield', yieldValue);\n      addMeta('Equipment', equipmentValue);\n      addMeta('Allergens', allergensValue);\n      addMeta('Category', categoryValue, /^testing$/i.test(categoryValue) ? 'recipe-meta-status' : '');\n\n      const adjustmentsBtn = recipeEl.__baselineAdjustmentsButton || q('.recipe-adjustments-toggle', recipeEl);\n      if(adjustmentsBtn) metaRow.appendChild(adjustmentsBtn);\n\n      const tabs"""
new = """      const yieldMetaValue = addMeta('Yield', yieldValue);\n      const batchMetaValue = addMeta('Batch', '1×');\n      addMeta('Equipment', equipmentValue);\n      addMeta('Allergens', allergensValue);\n      addMeta('Category', categoryValue, /^testing$/i.test(categoryValue) ? 'recipe-meta-status' : '');\n      if(yieldMetaValue) yieldMetaValue.classList.add('recipe-yield-meta-value');\n      if(batchMetaValue) batchMetaValue.classList.add('recipe-batch-meta-value');\n\n      const adjustmentsBtn = recipeEl.__baselineAdjustmentsButton || q('.recipe-adjustments-toggle', recipeEl);\n      const adjustmentsRow = document.createElement('div');\n      adjustmentsRow.className = 'recipe-adjustments-row print-hide';\n      if(adjustmentsBtn) adjustmentsRow.appendChild(adjustmentsBtn);\n\n      const legacyPrintSummary = q('.print-summary', recipeEl);\n      if(legacyPrintSummary) legacyPrintSummary.classList.add('recipe-legacy-print-summary');\n\n      const tabs"""
if old not in js:
    raise SystemExit('metadata/adjustments anchor not found')
js = js.replace(old, new, 1)

old = """      // Canonical order: title -> metadata/Adjustments -> adjustments panel ->\n      // subtabs -> the selected view content. There is intentionally no visible\n      // \"Standard View\" heading inside the content.\n      titleRow.insertAdjacentElement('afterend', metaRow);\n      metaRow.insertAdjacentElement('afterend', editBody);\n      editBody.insertAdjacentElement('afterend', tabs);\n      tabs.insertAdjacentElement('afterend', strip);\n\n      function headingGroup(text){"""
new = """      // Canonical order: title -> information line -> Adjustments -> adjustments panel ->\n      // subtabs -> the selected view content. There is intentionally no visible\n      // \"Standard View\" heading inside the content.\n      titleRow.insertAdjacentElement('afterend', metaRow);\n      metaRow.insertAdjacentElement('afterend', adjustmentsRow);\n      adjustmentsRow.insertAdjacentElement('afterend', editBody);\n      editBody.insertAdjacentElement('afterend', tabs);\n      tabs.insertAdjacentElement('afterend', strip);\n\n      const batchInput = q('input.multiplier-input', recipeEl);\n      const baseYieldMatch = String(yieldValue || '').match(/^([0-9]+(?:\\.[0-9]+)?)\\s*(g|kg|ml|l)\\b/i);\n      function tidyNumber(value){\n        const rounded = Math.round(Number(value) * 100) / 100;\n        return Number.isInteger(rounded) ? String(rounded) : String(rounded);\n      }\n      function syncUniversalRecipeMeta(){\n        let batch = batchInput ? parseFloat(batchInput.value || '1') : 1;\n        if(!Number.isFinite(batch) || batch <= 0) batch = 1;\n        if(batchMetaValue) batchMetaValue.textContent = tidyNumber(batch) + '×';\n        if(yieldMetaValue && baseYieldMatch){\n          yieldMetaValue.textContent = tidyNumber(parseFloat(baseYieldMatch[1]) * batch) + ' ' + baseYieldMatch[2];\n        }else if(yieldMetaValue && /^1 recipe batch$/i.test(String(yieldValue || ''))){\n          yieldMetaValue.textContent = tidyNumber(batch) + ' recipe ' + (batch === 1 ? 'batch' : 'batches');\n        }\n      }\n      if(batchInput){\n        batchInput.addEventListener('input', syncUniversalRecipeMeta);\n        batchInput.addEventListener('change', syncUniversalRecipeMeta);\n      }\n      syncUniversalRecipeMeta();\n      try{ recipeEl.__baselineSyncUniversalRecipeMeta = syncUniversalRecipeMeta; }catch(_e){}\n\n      function headingGroup(text){"""
if old not in js:
    raise SystemExit('canonical layout anchor not found')
js = js.replace(old, new, 1)

old = """      strip.dataset.recipeViewGroup = 'standard';\n      qsa('.glide-controller', recipeEl).forEach(el=>{ el.dataset.recipeViewGroup = 'standard'; });\n\n      // Existing status/meta prose"""
new = """      strip.dataset.recipeViewGroup = 'standard';\n      qsa('.glide-controller', recipeEl).forEach(controller=>{\n        controller.dataset.recipeViewGroup = 'standard';\n        const previous = controller.previousElementSibling;\n        if(previous && previous.matches && previous.matches('p')){\n          previous.classList.add('recipe-slider-intro-legacy');\n        }\n        if(!q(':scope > .recipe-slider-instruction', controller)){\n          const instruction = document.createElement('p');\n          instruction.className = 'recipe-slider-instruction';\n          instruction.textContent = 'Adjust slider to preference.';\n          controller.insertBefore(instruction, controller.firstChild);\n        }\n      });\n\n      // Existing status/meta prose"""
if old not in js:
    raise SystemExit('slider standard view anchor not found')
js = js.replace(old, new, 1)

old = """        editBody.classList.remove('recipe-view-hidden');\n        metaRow.classList.remove('recipe-view-hidden');\n        tabs.classList.remove('recipe-view-hidden');"""
new = """        editBody.classList.remove('recipe-view-hidden');\n        metaRow.classList.remove('recipe-view-hidden');\n        adjustmentsRow.classList.remove('recipe-view-hidden');\n        tabs.classList.remove('recipe-view-hidden');"""
if old not in js:
    raise SystemExit('view utility anchor not found')
js = js.replace(old, new, 1)

js_path.write_text(js, encoding='utf-8')

css = css_path.read_text(encoding='utf-8')
marker = 'BASELINE-UNIVERSAL-RECIPE-SPACING-20260824'
if marker not in css:
    css += '''\n\n/* BASELINE-UNIVERSAL-RECIPE-SPACING-20260824
   One geometry rhythm for all recipes. Colours remain owned by the active system. */
body[data-app] .recipe-universal-template > .recipe-title-row{
  margin:8px 0 10px !important;
  padding:8px 0 6px !important;
}
body[data-app] .recipe-universal-template .recipe-meta-row{
  margin:0 0 4px !important;
  padding:0 !important;
  gap:8px 12px !important;
}
body[data-app] .recipe-universal-template .recipe-adjustments-row{
  display:flex !important;
  align-items:center !important;
  justify-content:flex-end !important;
  width:100% !important;
  margin:0 0 12px !important;
  padding:0 !important;
  background:transparent !important;
  background-image:none !important;
  border:0 !important;
  box-shadow:none !important;
}
html body[data-app] #recipes .recipe-universal-template .recipe-adjustments-row > .recipe-adjustments-toggle,
html body[data-app] .recipe-universal-template .recipe-adjustments-row > .recipe-adjustments-toggle{
  margin:0 !important;
  background:transparent !important;
  background-color:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
}
body[data-app] .recipe-universal-template .recipe-adjustments-panel{
  margin:0 0 12px !important;
}
body[data-app] .recipe-universal-template .recipe-subtabs{
  margin:0 0 16px !important;
}
body[data-app] .recipe-universal-template .recipe-option-strip{
  margin:0 0 18px !important;
}
body[data-app] .recipe-universal-template > h4[data-recipe-view-group],
body[data-app] .recipe-universal-template .variant-panel > h4[data-recipe-view-group]{
  margin:18px 0 8px !important;
}
body[data-app] .recipe-universal-template > ul[data-recipe-view-group],
body[data-app] .recipe-universal-template > ol[data-recipe-view-group],
body[data-app] .recipe-universal-template .variant-panel > ul[data-recipe-view-group],
body[data-app] .recipe-universal-template .variant-panel > ol[data-recipe-view-group]{
  margin-top:0 !important;
  margin-bottom:18px !important;
}
body[data-app] .recipe-universal-template .recipe-legacy-print-summary{
  display:none !important;
}
body[data-app] .recipe-universal-template .recipe-slider-intro-legacy{
  display:none !important;
}
body[data-app] .recipe-universal-template .recipe-slider-instruction{
  margin:0 0 9px !important;
  padding:0 !important;
  font-size:inherit !important;
  line-height:1.4 !important;
  color:var(--muted, var(--ink)) !important;
}
body[data-app] .recipe-universal-template .glide-controller{
  margin-top:0 !important;
  margin-bottom:18px !important;
}
@media (max-width:720px){
  body[data-app] .recipe-universal-template .recipe-adjustments-row{
    justify-content:flex-start !important;
  }
}\n'''

css_path.write_text(css, encoding='utf-8')
print('Patched universal recipe metadata, slider guidance and spacing')

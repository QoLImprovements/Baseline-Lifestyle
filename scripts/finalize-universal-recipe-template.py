from pathlib import Path

# One-shot branch finalizer. Removed before merge.
path = Path('sitewide/js/baseline-shared.js')
s = path.read_text(encoding='utf-8')

needle = """        qsa('.variant-tab', variantSwitcher).forEach(btn=>{\n          const opt = document.createElement('option');\n          opt.value = btn.getAttribute('data-variant') || btn.textContent.trim();\n          opt.textContent = btn.textContent.trim();\n          variantSelect.appendChild(opt);\n        });\n        field.appendChild(variantSelect);"""
replacement = """        qsa('.variant-tab', variantSwitcher).forEach(btn=>{\n          const opt = document.createElement('option');\n          opt.value = btn.getAttribute('data-variant') || btn.textContent.trim();\n          opt.textContent = btn.textContent.trim();\n          variantSelect.appendChild(opt);\n        });\n        const activeVariant = q('.variant-tab[aria-selected=\"true\"]', variantSwitcher);\n        if(activeVariant){\n          const initialVariant = activeVariant.getAttribute('data-variant') || activeVariant.textContent.trim();\n          if(initialVariant) variantSelect.value = initialVariant;\n        }\n        field.appendChild(variantSelect);"""
if needle not in s:
    raise SystemExit('variant selector insertion point not found')
s = s.replace(needle, replacement, 1)

needle2 = """      || !!recipePathStateFromLocation()\n      || !!(cleanContentRoute && cleanContentRoute.kind === 'tab' && ['recipes','ingredients','support'].includes(cleanContentRoute.tabId));"""
replacement2 = """      || !!recipePathStateFromLocation()\n      || !!(cleanContentRoute && cleanContentRoute.kind === 'tab' && ['recipes','ingredients','support'].includes(cleanContentRoute.tabId))\n      || !!q('.recipe.card.recipe-page');"""
if needle2 not in s:
    raise SystemExit('content UI initialization insertion point not found')
s = s.replace(needle2, replacement2, 1)

path.write_text(s, encoding='utf-8')
print('Finalized universal recipe template runtime')

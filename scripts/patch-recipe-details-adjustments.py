from pathlib import Path

js_path = Path('sitewide/js/baseline-shared.js')
css_path = Path('sitewide/css/baseline-recipes.css')

js = js_path.read_text(encoding='utf-8')
old_build = 'SITEWIDE_UNIVERSAL_RECIPE_TEMPLATE_20260824_1'
new_build = 'SITEWIDE_UNIVERSAL_RECIPE_TEMPLATE_20260824_2'
if old_build in js:
    js = js.replace(old_build, new_build, 1)
elif new_build not in js:
    raise SystemExit('Shared build marker not found')

old_visibility = "          const visible = next === 'show-all' || group === next;"
new_visibility = "          const visible = group !== 'details' && (next === 'show-all' || group === next);"
if old_visibility in js:
    js = js.replace(old_visibility, new_visibility, 1)
elif new_visibility not in js:
    raise SystemExit('Recipe view visibility line not found')

js_path.write_text(js, encoding='utf-8')

css = css_path.read_text(encoding='utf-8')
marker = 'BASELINE-RECIPE-DETAILS-PLACEHOLDER-20260824'
if marker not in css:
    css += '''\n\n/* BASELINE-RECIPE-DETAILS-PLACEHOLDER-20260824
   Details stays available as a future-editing subtab, but intentionally renders no
   recipe content. Adjustments is a text action, not a coloured button surface. */
body[data-app] .recipe-universal-template [data-recipe-view-group="details"]{
  display:none !important;
}
html body[data-app] #recipes .recipe-universal-template .recipe-meta-row > .recipe-adjustments-toggle,
html body[data-app] .recipe-universal-template .recipe-meta-row > .recipe-adjustments-toggle{
  background:transparent !important;
  background-color:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
}\n'''
css_path.write_text(css, encoding='utf-8')
print('Patched empty Details and plain Adjustments')

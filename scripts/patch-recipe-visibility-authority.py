from pathlib import Path

path = Path('sitewide/css/baseline-recipes.css')
css = path.read_text(encoding='utf-8')
marker = 'BASELINE-UNIVERSAL-RECIPE-VISIBILITY-AUTHORITY-20260824'
if marker not in css:
    css += '''\n\n/* BASELINE-UNIVERSAL-RECIPE-VISIBILITY-AUTHORITY-20260824
   Final shared visibility authority. Older recipe-specific display rules must not
   resurrect content deliberately removed by the universal template. */
html body[data-app] #recipes .recipe-page.recipe-universal-template [data-recipe-view-group="details"],
html body[data-app] .recipe-page.recipe-universal-template [data-recipe-view-group="details"]{
  display:none !important;
}
html body[data-app] #recipes .recipe-page.recipe-universal-template .recipe-legacy-print-summary,
html body[data-app] .recipe-page.recipe-universal-template .recipe-legacy-print-summary{
  display:none !important;
}
html body[data-app] #recipes .recipe-page.recipe-universal-template p.recipe-slider-intro-legacy,
html body[data-app] .recipe-page.recipe-universal-template p.recipe-slider-intro-legacy{
  display:none !important;
}\n'''
path.write_text(css, encoding='utf-8')
print('Added final universal recipe visibility authority')

from pathlib import Path

# One-shot branch repair; removed before merge.
path = Path('sitewide/css/baseline-recipes.css')
css = path.read_text(encoding='utf-8')
old = '''html body[data-app] .recipe-universal-template .glide-controller,
html body[data-app] #recipes .recipe-universal-template:not(.recipe-options-open) .glide-controller{
  display:grid !important;
}
body[data-app] .recipe-universal-template[data-recipe-view="details"] .glide-controller,
body[data-app] .recipe-universal-template[data-recipe-view="guidance"] .glide-controller{
  display:none !important;
}'''
new = '''html body[data-app] .recipe-universal-template .glide-controller:not(.recipe-view-hidden),
html body[data-app] #recipes .recipe-universal-template:not(.recipe-options-open) .glide-controller:not(.recipe-view-hidden){
  display:grid !important;
}
html body[data-app] .recipe-universal-template .glide-controller.recipe-view-hidden,
html body[data-app] #recipes .recipe-universal-template .glide-controller.recipe-view-hidden{
  display:none !important;
}'''
if old not in css:
    raise SystemExit('Expected universal glide-controller rule not found')
css = css.replace(old, new, 1)
path.write_text(css, encoding='utf-8')
print('Fixed universal recipe view glide visibility')

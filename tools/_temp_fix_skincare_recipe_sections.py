from pathlib import Path

html_path = Path('systems/baseline-natural-skincare/baseline-natural-skincare.html')
shared_path = Path('sitewide/js/baseline-shared.js')

html = html_path.read_text(encoding='utf-8')
for slug in [
    'testing-shaving-gel',
    'testing-natural-tooth-brightening-powder',
    'testing-microcurrent-conductive-gel',
]:
    old = f'<div class="recipe card recipe-page" data-recipe-slug="{slug}"'
    new = f'<div class="recipe card recipe-page" data-category="Testing" data-recipe-slug="{slug}"'
    if html.count(old) != 1:
        raise SystemExit(f'expected exactly one Testing recipe opening for {slug}')
    html = html.replace(old, new, 1)
html_path.write_text(html, encoding='utf-8')

shared = shared_path.read_text(encoding='utf-8')
shared = shared.replace(
    'const BASELINE_SHARED_BUILD = "SITEWIDE_SKINCARE_REFRESH_SAFE_20260824_4";',
    'const BASELINE_SHARED_BUILD = "SITEWIDE_SKINCARE_RECIPE_SECTION_SAFE_20260824_5";',
    1,
)

old_select = """    function selectTab(id, opts={}){
      if(!id || !sectionsById.has(id)) return;
      clearPendingNavScroll();

      tabs.forEach(t=>{
"""
new_select = """    function selectTab(id, opts={}){
      if(!id || !sectionsById.has(id)) return;
      clearPendingNavScroll();

      // Skincare's first-paint routine markers are bootstrap-only. Once the
      // user leaves My Routine they must not keep forcing #routine visible.
      try{
        if(document.body && document.body.dataset && document.body.dataset.app === 'skin' && id !== 'routine'){
          document.documentElement.removeAttribute('data-initial-skincare-tab');
          document.documentElement.removeAttribute('data-initial-routine-view');
        }
      }catch(_e){}

      tabs.forEach(t=>{
"""
if old_select not in shared:
    raise SystemExit('shared selectTab insertion point not found')
shared = shared.replace(old_select, new_select, 1)

old_side = """        cats.forEach(cat => {
          const h4 = document.createElement('h4');
          h4.textContent = cat;
          sideNav.appendChild(h4);

          const ul = document.createElement('ul');
"""
new_side = """        cats.forEach(cat => {
          // The default recipe collection already has the primary Recipes
          // heading. Only named sub-categories need another heading.
          if(cat !== 'Recipes'){
            const h4 = document.createElement('h4');
            h4.textContent = cat;
            sideNav.appendChild(h4);
          }

          const ul = document.createElement('ul');
"""
if old_side not in shared:
    raise SystemExit('side-nav category renderer not found')
shared = shared.replace(old_side, new_side, 1)

old_landing = """        cats.forEach(cat => {
          const h4 = document.createElement('h4');
          h4.textContent = cat;
          landingCard.appendChild(h4);

          const ul = document.createElement('ul');
"""
new_landing = """        cats.forEach(cat => {
          if(cat !== 'Recipes'){
            const h4 = document.createElement('h4');
            h4.textContent = cat;
            landingCard.appendChild(h4);
          }

          const ul = document.createElement('ul');
"""
if old_landing not in shared:
    raise SystemExit('landing category renderer not found')
shared = shared.replace(old_landing, new_landing, 1)

old_link = """            a.textContent = item.title;
            a.className = 'recipe-open';
            li.appendChild(a);
"""
new_link = """            a.textContent = item.title;
            a.className = 'recipe-open';
            a.dataset.recipeId = item.id;
            li.appendChild(a);
"""
if shared.count(old_link) != 2:
    raise SystemExit(f'expected two category link renderers, found {shared.count(old_link)}')
shared = shared.replace(old_link, new_link, 2)

shared_path.write_text(shared, encoding='utf-8')

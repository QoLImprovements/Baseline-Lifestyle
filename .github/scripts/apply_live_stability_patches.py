from __future__ import annotations

from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[2]
BUILD = "BASELINE_LIVE_STABILITY_20260803_1"


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def write(path: str, content: str) -> None:
    (ROOT / path).write_text(content, encoding="utf-8")


def replace_once(content: str, old: str, new: str, label: str) -> str:
    if old not in content:
        if new in content:
            return content
        raise RuntimeError(f"Patch anchor missing: {label}")
    return content.replace(old, new, 1)


def patch_protected_access() -> None:
    path = "sitewide/js/baseline-protected-access.js"
    content = read(path)
    content = content.replace("BASELINE_PROTECTED_ACCESS_20260801_3", "BASELINE_PROTECTED_ACCESS_20260803_1")

    old_existing = """    if(existing){
      /* Static pages can carry an older cache key. Keep the same shared file
         identity, update it to this build, and place only the universal
         transition authority after system themes so fields cannot leak in. */
      if(existing.getAttribute('href') !== href) existing.setAttribute('href',href);
      if(moveToEnd) document.head.appendChild(existing);
      return existing;
    }"""
    new_existing = """    if(existing){
      /* Preserve the head-loaded stylesheet in place. Moving or replacing it
         during first paint caused the protected-key icon to flash white. */
      return existing;
    }"""
    content = replace_once(content, old_existing, new_existing, "protected stylesheet stability")

    old_styles = """    addStylesheet('/sitewide/css/baseline-ui-fixes.css?v=' + BUILD, 'data-baseline-ui-fixes');
    addStylesheet('/sitewide/css/baseline-protected-access.css?v=' + BUILD, 'data-protected-access-style', true);"""
    new_styles = """    addStylesheet('/sitewide/css/baseline-ui-fixes.css?v=' + BUILD, 'data-baseline-ui-fixes');
    addStylesheet('/sitewide/css/baseline-live-stability.css?v=' + BUILD, 'data-baseline-live-stability-style');
    addStylesheet('/sitewide/css/baseline-protected-access.css?v=' + BUILD, 'data-protected-access-style', true);"""
    content = replace_once(content, old_styles, new_styles, "live stability stylesheet loader")

    insertion_anchor = "\n  function ordinarySectionMenu(){"
    loader = """

  function loadLiveStability(){
    if(document.querySelector('script[data-baseline-live-stability-script]')) return;
    const script = document.createElement('script');
    script.src = '/sitewide/js/baseline-live-stability.js?v=' + BUILD;
    script.async = false;
    script.setAttribute('data-baseline-live-stability-script','true');
    document.head.appendChild(script);
  }
"""
    if "function loadLiveStability()" not in content:
        content = replace_once(content, insertion_anchor, loader + insertion_anchor, "live stability script loader")

    content = replace_once(
        content,
        "  function initialise(){\n    addStylesheets();",
        "  function initialise(){\n    addStylesheets();\n    loadLiveStability();",
        "load stability during protected access init",
    )
    content = replace_once(
        content,
        "  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',initialise,{once:true});\n  else initialise();",
        "  if(document.body) initialise();\n  else document.addEventListener('DOMContentLoaded',initialise,{once:true});",
        "early protected access init",
    )
    write(path, content)


def patch_shared_loader() -> None:
    path = "sitewide/js/baseline-shared.js"
    content = read(path)
    marker = "BASELINE-LIVE-STABILITY-LOADER-20260803"
    if marker in content:
        return
    loader = f"""

/* {marker} */
(function(){{
  'use strict';
  const build = '{BUILD}';
  if(!document.querySelector('link[data-baseline-live-stability-style]')){{
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/sitewide/css/baseline-live-stability.css?v=' + build;
    link.setAttribute('data-baseline-live-stability-style','true');
    document.head.appendChild(link);
  }}
  if(!document.querySelector('script[data-baseline-live-stability-script]')){{
    const script = document.createElement('script');
    script.src = '/sitewide/js/baseline-live-stability.js?v=' + build;
    script.async = false;
    script.setAttribute('data-baseline-live-stability-script','true');
    document.head.appendChild(script);
  }}
}})();
"""
    write(path, content.rstrip() + loader)


def patch_key_css() -> None:
    path = "sitewide/css/baseline-protected-key-placement.css"
    content = read(path)
    marker = "BASELINE-LIVE-KEY-FIRST-PAINT-20260803"
    if marker in content:
        return
    additions = f"""

/* {marker}: stable geometry before deferred JavaScript starts. */
html body[data-app] .bl-homebar-inner{{
  display:flex!important;
  align-items:center!important;
  gap:10px!important;
}}
html body[data-app] .bl-homebar-inner > .bl-pages-dd{{order:1!important;flex:0 1 auto!important;min-width:0!important;margin:0!important;}}
html body[data-app] .bl-homebar-inner > .bl-protected-key{{order:2!important;margin:0!important;align-self:center!important;}}
html body[data-app] .bl-homebar-inner > .bl-homebar-spacer{{order:3!important;flex:1 1 auto!important;min-width:8px!important;}}
html body[data-app] .bl-homebar-inner > .bl-homebar-right{{order:4!important;margin-left:auto!important;display:flex!important;align-items:center!important;justify-content:flex-end!important;gap:10px!important;flex:0 0 auto!important;}}
html body[data-app] .bl-protected-key svg{{fill:none!important;stroke:currentColor!important;stroke-width:1.9!important;stroke-linecap:round!important;stroke-linejoin:round!important;}}
html body[data-app="charity-shop"] .bl-homebar-right,
html body[data-app="charity-shop"] #bl-beats-toggle,
html body[data-app="charity-shop"] #bl-auth-toggle{{visibility:visible!important;opacity:1!important;pointer-events:auto!important;}}
"""
    write(path, content.rstrip() + additions + "\n")


def patch_recipe_routes() -> None:
    path = ".htaccess"
    content = read(path)
    old = """  RewriteRule ^baseline-food-approach/recipes/([^/]+)/?$ systems/baseline-food-approach/recipes/$1.html [L,QSA]
  RewriteRule ^baseline-natural-skincare/recipes/([^/]+)/?$ systems/baseline-natural-skincare/recipes/$1.html [L,QSA]"""
    new = """  # Keep the clean recipe URL, but serve the complete parent application shell.
  # The parent router opens the matching data-recipe-slug and preserves the banner,
  # tabs, favourites, batch controls and account/binaural controls on refresh.
  RewriteRule ^baseline-food-approach/recipes/([^/]+)/?$ systems/baseline-food-approach/baseline-food-approach.html [L,QSA]
  RewriteRule ^baseline-natural-skincare/recipes/([^/]+)/?$ systems/baseline-natural-skincare/baseline-natural-skincare.html [L,QSA]"""
    content = replace_once(content, old, new, "canonical recipe parent shell routes")
    write(path, content)


def patch_package_and_tests() -> None:
    package_path = ROOT / "package.json"
    package = json.loads(package_path.read_text(encoding="utf-8"))
    structure = package["scripts"]["test:structure"]
    test_path = "tests/live-stability-contract.test.mjs"
    if test_path not in structure:
        package["scripts"]["test:structure"] = structure + " " + test_path
    package_path.write_text(json.dumps(package, indent=2) + "\n", encoding="utf-8")

    test = r'''import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('live stability runtime covers the reported refresh and persistence faults', () => {
  const js = read('sitewide/js/baseline-live-stability.js');
  assert.match(js, /__baseline_pending_recipe_route_v1__/);
  assert.match(js, /__baseline_fitness_body_view_v1__/);
  assert.match(js, /data-baseline-games-stable/);
  assert.match(js, /spokenResponses === false/);
  assert.match(js, /expectedRevision/);
  assert.match(js, /Badminton could not save to the server/);
  assert.match(js, /location\.assign\('\/home\/1'\)/);
});

test('shared and protected runtimes load stability without reordering first-paint CSS', () => {
  const shared = read('sitewide/js/baseline-shared.js');
  const protectedAccess = read('sitewide/js/baseline-protected-access.js');
  assert.match(shared, /BASELINE-LIVE-STABILITY-LOADER-20260803/);
  assert.match(shared, /baseline-live-stability\.js/);
  assert.match(protectedAccess, /baseline-live-stability\.css/);
  assert.match(protectedAccess, /loadLiveStability/);
  assert.doesNotMatch(protectedAccess, /appendChild\(existing\)/);
  assert.match(protectedAccess, /if\(document\.body\) initialise\(\)/);
});

test('clean recipe detail routes serve the complete parent applications', () => {
  const htaccess = read('.htaccess');
  assert.match(htaccess, /baseline-food-approach\/recipes\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-food-approach\/baseline-food-approach\.html/);
  assert.match(htaccess, /baseline-natural-skincare\/recipes\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-natural-skincare\/baseline-natural-skincare\.html/);
  assert.doesNotMatch(htaccess, /baseline-food-approach\/recipes\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-food-approach\/recipes\/\$1\.html/);
});

test('protected key and Charity banner controls have stable first-paint geometry', () => {
  const css = read('sitewide/css/baseline-protected-key-placement.css');
  assert.match(css, /BASELINE-LIVE-KEY-FIRST-PAINT-20260803/);
  assert.match(css, /> \.bl-protected-key\{order:2/);
  assert.match(css, /data-app="charity-shop"/);
  assert.match(css, /#bl-beats-toggle/);
  assert.match(css, /#bl-auth-toggle/);
});
'''
    write(test_path, test)


def cleanup_helpers() -> None:
    for relative in (
        ".github/workflows/apply-live-stability-patches.yml",
        ".github/scripts/apply_live_stability_patches.py",
    ):
        path = ROOT / relative
        if path.exists():
            path.unlink()


def main() -> None:
    patch_protected_access()
    patch_shared_loader()
    patch_key_css()
    patch_recipe_routes()
    patch_package_and_tests()
    cleanup_helpers()


if __name__ == "__main__":
    main()

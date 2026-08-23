from pathlib import Path

branch_tabs = Path('sitewide/js/baseline-tabs.js')
tabs = branch_tabs.read_text(encoding='utf-8')
old = '''    if(!exists) return;\n\n    for(var t=0;t<tabs.length;t++){\n'''
new = '''    if(!exists) return;\n\n    // Skincare's first-paint route markers only bootstrap My Routine. Once a\n    // different top-level tab is selected, remove them so CSS cannot keep\n    // #routine visible alongside the newly selected section.\n    try{\n      if(document.body && document.body.dataset && document.body.dataset.app === "skin" && id !== "routine"){\n        document.documentElement.removeAttribute("data-initial-skincare-tab");\n        document.documentElement.removeAttribute("data-initial-routine-view");\n      }\n    }catch(_e){}\n\n    for(var t=0;t<tabs.length;t++){\n'''
if tabs.count(old) != 1:
    raise SystemExit(f'expected one canonical selectTab insertion point, found {tabs.count(old)}')
tabs = tabs.replace(old, new, 1)
branch_tabs.write_text(tabs, encoding='utf-8')

html_path = Path('systems/baseline-natural-skincare/baseline-natural-skincare.html')
html = html_path.read_text(encoding='utf-8')
old_shared = '/sitewide/js/baseline-shared.js?v=SAVED_DATA_REVISION_CLIENT_20260823_1'
new_shared = '/sitewide/js/baseline-shared.js?v=SKINCARE_RECIPE_SECTION_SAFE_20260824_5'
old_tabs = '/sitewide/js/baseline-tabs.js?v=SKINCARE_ROUTINE_REFRESH_SAFE_20260804_2'
new_tabs = '/sitewide/js/baseline-tabs.js?v=SKINCARE_RECIPE_SECTION_SAFE_20260824_1'
if html.count(old_shared) != 1:
    raise SystemExit(f'expected one Skincare shared runtime tag, found {html.count(old_shared)}')
if html.count(old_tabs) != 1:
    raise SystemExit(f'expected one Skincare tabs runtime tag, found {html.count(old_tabs)}')
html = html.replace(old_shared, new_shared, 1)
html = html.replace(old_tabs, new_tabs, 1)
html_path.write_text(html, encoding='utf-8')

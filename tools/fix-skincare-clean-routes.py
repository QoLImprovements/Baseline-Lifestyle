from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
shared_path = ROOT / 'sitewide/js/baseline-shared.js'
tabs_path = ROOT / 'sitewide/js/baseline-tabs.js'


def replace_once(text, old, new, label):
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'{label}: expected one match, found {count}')
    return text.replace(old, new, 1)

shared = shared_path.read_text(encoding='utf-8')
shared = replace_once(
    shared,
    "'baseline-natural-skincare.html': { base:'/systems/baseline-natural-skincare/baseline-natural-skincare.html', hashTabs:true, defaultTab:'system', tabs:{ system:'system', recipes:'recipes', ingredients:'ingredient-library', support:'skin-support-system', routine:'my-routine' } },",
    "'baseline-natural-skincare.html': { base:'/baseline-natural-skincare', defaultTab:'system', tabs:{ system:'system', recipes:'recipes', ingredients:'ingredient-library', support:'skin-support-system', routine:'my-routine' } },",
    'shared Skincare route config',
)
shared = replace_once(
    shared,
    "'baseline-natural-skincare.html':'/systems/baseline-natural-skincare/baseline-natural-skincare.html#tab=system',",
    "'baseline-natural-skincare.html':'/baseline-natural-skincare/system',",
    'shared Skincare page link',
)
shared = replace_once(
    shared,
    "return '/systems/baseline-natural-skincare/baseline-natural-skincare.html#tab=' + encodeURIComponent(tabId);",
    "return '/baseline-natural-skincare/' + String(skincareRoute[1] || 'system').toLowerCase();",
    'shared Skincare clean-route normalization',
)
shared_path.write_text(shared, encoding='utf-8')

tabs = tabs_path.read_text(encoding='utf-8')
tabs = replace_once(
    tabs,
    '"baseline-natural-skincare.html": { base:"/systems/baseline-natural-skincare/baseline-natural-skincare.html", hashTabs:true, tabs:{ system:"system", recipes:"recipes", ingredients:"ingredient-library", support:"skin-support-system", routine:"my-routine" } },',
    '"baseline-natural-skincare.html": { base:"/baseline-natural-skincare", tabs:{ system:"system", recipes:"recipes", ingredients:"ingredient-library", support:"skin-support-system", routine:"my-routine" } },',
    'fallback Skincare route config',
)
tabs_path.write_text(tabs, encoding='utf-8')

for path in (shared_path, tabs_path):
    text = path.read_text(encoding='utf-8')
    if '/systems/baseline-natural-skincare/baseline-natural-skincare.html#tab=' in text:
        raise SystemExit(f'physical Skincare hash route remains in {path}')

print('Skincare public clean-route correction applied.')

from pathlib import Path

# One-shot branch patch: clean recipe overview routes must boot before interaction.
path = Path('sitewide/js/baseline-shared.js')
text = path.read_text(encoding='utf-8')
old_build = 'const BASELINE_SHARED_BUILD = "SITEWIDE_SKINCARE_REFRESH_SAFE_20260804_2";'
new_build = 'const BASELINE_SHARED_BUILD = "SITEWIDE_SKINCARE_REFRESH_SAFE_20260824_3";'
if old_build not in text:
    raise SystemExit('shared build marker not found')
text = text.replace(old_build, new_build, 1)

old = """    const contentViewHash = String(location.hash || '');
    const needsImmediateContentUi = /^(#recipe=|#r\\d+$|#tab=recipes|#tab=ingredients|#ingredients$|#recipes$|#support$|#support=|#support-|#ing-)/i.test(contentViewHash) || !!recipePathStateFromLocation();
"""
new = """    const contentViewHash = String(location.hash || '');
    const cleanContentRoute = cleanRouteStateFromPath();
    const needsImmediateContentUi = /^(#recipe=|#r\\d+$|#tab=recipes|#tab=ingredients|#ingredients$|#recipes$|#support$|#support=|#support-|#ing-)/i.test(contentViewHash)
      || !!recipePathStateFromLocation()
      || !!(cleanContentRoute && cleanContentRoute.kind === 'tab' && ['recipes','ingredients','support'].includes(cleanContentRoute.tabId));
"""
if old not in text:
    raise SystemExit('content UI boot block not found')
text = text.replace(old, new, 1)
path.write_text(text, encoding='utf-8')

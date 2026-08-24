from pathlib import Path

replacements = {
    "Shaving Gel Recipe": "Shaving Gel",
    "Natural Tooth-Brightening Powder Recipe": "Natural Tooth-Brightening Powder",
    "Microcurrent Conductive Gel Recipe – 40 g": "Microcurrent Conductive Gel",
}

paths = [
    Path("systems/baseline-natural-skincare/baseline-natural-skincare.html"),
    Path("tests/skincare-testing-recipes-browser.spec.js"),
    Path("tests/skincare-testing-recipes.test.mjs"),
]

for path in paths:
    text = path.read_text(encoding="utf-8")
    original = text
    for old, new in replacements.items():
        text = text.replace(old, new)
    if text == original:
        raise SystemExit(f"No title replacements made in {path}")
    path.write_text(text, encoding="utf-8")

html = paths[0].read_text(encoding="utf-8")
for forbidden in replacements:
    if forbidden in html:
        raise SystemExit(f"Old title still present: {forbidden}")
for required in replacements.values():
    if f"<h3>{required}</h3>" not in html:
        raise SystemExit(f"Expected recipe title missing: {required}")
print("Testing recipe titles normalised")

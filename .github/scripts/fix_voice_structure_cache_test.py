from pathlib import Path

root = Path(__file__).resolve().parents[2]
path = root / 'tests/site-structure-integrity.test.mjs'
text = path.read_text(encoding='utf-8')
old = "/sitewide/js/baseline-voice.js?v=BASELINE_VOICE_RESPONSIVE_20260720_1"
new = "/sitewide/js/baseline-voice.js?v=BASELINE_VOICE_FITNESS_SETTINGS_20260803_1"
if old not in text:
    if new not in text:
        raise RuntimeError('Voice cache contract anchor missing')
else:
    text = text.replace(old, new, 1)
path.write_text(text, encoding='utf-8')
for relative in (
    '.github/scripts/fix_voice_structure_cache_test.py',
    '.github/workflows/fix-voice-structure-cache-test.yml',
):
    target = root / relative
    if target.exists():
        target.unlink()

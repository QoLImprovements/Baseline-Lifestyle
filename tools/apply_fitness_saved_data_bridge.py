from pathlib import Path

path = Path('systems/baseline-fitness/baseline-fitness.html')
text = path.read_text(encoding='utf-8')
app = '<script defer="defer" src="/systems/baseline-fitness/js/baseline-fitness-app.js?v=BASELINE_FITNESS_SINGLE_RUNTIME_20260713_1"></script>'
bridge = '<script defer="defer" src="/systems/baseline-fitness/js/fitness-saved-data-bridge.js?v=BASELINE_FITNESS_SAVED_DATA_20260802_1"></script>'
if bridge not in text:
    if app not in text:
        raise SystemExit('Fitness application script marker not found')
    text = text.replace(app, bridge + app, 1)
path.write_text(text, encoding='utf-8')

from pathlib import Path
import json

root = Path(__file__).resolve().parents[2]
path = root / 'sitewide/migration/browser_storage_map.json'
data = json.loads(path.read_text(encoding='utf-8'))
rules = data.setdefault('rules', [])
ids = {rule.get('id') for rule in rules}
new_rules = [
    {
        'id': 'pending-recipe-route',
        'inventoryPatterns': ['__baseline_pending_recipe_route_v1__'],
        'knownKeys': ['__baseline_pending_recipe_route_v1__'],
        'classification': 'session-navigation-state',
        'decision': 'expire-with-session',
        'target': None,
        'cutoverRule': 'This temporary route handoff exists only while replacing a standalone recipe shell with the complete parent application. Never migrate it to Saved Data.',
    },
    {
        'id': 'fitness-body-view',
        'inventoryPatterns': ['__baseline_fitness_body_view_v1__'],
        'knownKeys': ['__baseline_fitness_body_view_v1__'],
        'classification': 'session-ui-state',
        'decision': 'expire-with-session',
        'target': None,
        'cutoverRule': 'This remembers only the selected My Body subtab for the current browser session and is not Fitness account data.',
    },
]
for rule in new_rules:
    if rule['id'] not in ids:
        rules.append(rule)
path.write_text(json.dumps(data, indent=2) + '\n', encoding='utf-8')
for relative in ('.github/scripts/apply_storage_map_fix.py', '.github/workflows/apply-storage-map-fix.yml'):
    target = root / relative
    if target.exists():
        target.unlink()

#!/usr/bin/env python3
from pathlib import Path
import json

root = Path(__file__).resolve().parents[1]
path = root / 'sitewide/migration/browser_storage_map.json'
data = json.loads(path.read_text())
rules = data.get('rules', [])

active = next(rule for rule in rules if rule.get('id') == 'fitness-active-workout')
for pattern in ['[expression] nextKey', '[expression] stepKey(context.planId']:
    if pattern not in active['inventoryPatterns']:
        active['inventoryPatterns'].append(pattern)

bridge_id = 'fitness-bridge-plan-lookups'
if not any(rule.get('id') == bridge_id for rule in rules):
    insert_at = next((index for index, rule in enumerate(rules) if rule.get('id') == 'fitness-plan-cache'), len(rules))
    rules.insert(insert_at, {
        'id': bridge_id,
        'inventoryPatterns': ['{dynamic}{dynamic}'],
        'knownKeys': [
            '__bl_fitness_plan_cache_v1__::{normalised-user}',
            '__bl_fitness_plan_v1__::{normalised-user}'
        ],
        'classification': 'fitness-bridge-lookup-expressions',
        'decision': 'no-independent-migration',
        'target': None,
        'cutoverRule': 'These dynamic bridge lookups read the already-reviewed Fitness server cache and file-protocol fallback keys. They create no additional browser resource and inherit the separate cache and fallback decisions.'
    })

data['rules'] = rules
path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + '\n')

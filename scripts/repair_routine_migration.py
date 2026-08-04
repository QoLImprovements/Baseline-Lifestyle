#!/usr/bin/env python3
from pathlib import Path
import re

path = Path(__file__).with_name('apply_routine_systems_overhaul.py')
text = path.read_text()
replacement = r'''update_item = r''' + "'''" + r'''  function updateItem(control) {
    const id = control.dataset.id;
    const field = control.dataset.field;
    const value = control.value;
    const item = itemById(id);
    if (!item) return;
    if (field === 'title') item.title = String(value || '').trim().slice(0, 100) || MODEL.ACTION_BY_ID.get(item.actionId)?.title || 'Self-Care Action';
    if (field === 'notes') item.notes = String(value || '').slice(0, 1200);
    if (field === 'benefitMode') item.benefitMode = MODEL.BENEFIT_MODES.some((mode) => mode.value === value) ? value : 'comprehensive';
    if (field === 'timeOfDay') item.timeOfDay = MODEL.TIMES.some((time) => time.value === value) ? value : 'anytime';
    if (field === 'frequencyMode') item.frequency.mode = MODEL.FREQUENCIES.some((frequency) => frequency.value === value) ? value : 'daily';
    if (field === 'timesPerWeek') item.frequency.timesPerWeek = Math.max(1, Math.min(14, Math.round(Number(value) || 1)));
    if (field === 'shavingMethod') item.shavingMethod = MODEL.SHAVING_METHODS?.some((method) => method.value === value) ? value : '';
    if (field === 'productSelection') {
      item.productSelection = String(value || '').slice(0, 180);
      const details = PRODUCTS?.selectionDetails(item.productSelection, item.actionId) || { name: '' };
      item.productName = details.name || '';
      if (item.productSelection !== 'custom') item.customProductName = '';
    }
    if (field === 'customProductName') {
      item.customProductName = String(value || '').slice(0, 180);
      if (item.productSelection === 'custom') item.productName = item.customProductName;
    }
    state.items = MODEL.normaliseRoutine(state.items);
    scheduleSave();
    renderAll();
  }''' + "'''" + r'''
skin_js = replace_once(
    skin_js,
    r"  function updateItem\(control\) \{[\s\S]*?\n  \}\n\n  function updateDay",
    update_item + "\n\n  function updateDay",
    'update skincare item fields',
)
'''
pattern = r"update_item = r'''[\s\S]*?'update skincare item fields',\n\)\n"
text, count = re.subn(pattern, lambda _match: replacement, text, count=1)
if count != 1:
    raise SystemExit(f'could not repair updateItem migration block: {count}')
path.write_text(text)

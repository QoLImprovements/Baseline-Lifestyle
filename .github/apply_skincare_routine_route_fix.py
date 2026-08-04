#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f'{label}: expected one match, found {count}')
    return text.replace(old, new, 1)


htaccess_path = ROOT / '.htaccess'
htaccess = htaccess_path.read_text()
htaccess = replace_once(
    htaccess,
    'RewriteRule ^baseline-natural-skincare/(system|recipes|ingredient-library|skin-support-system)/?$ systems/baseline-natural-skincare/baseline-natural-skincare.html [L,QSA]',
    'RewriteRule ^baseline-natural-skincare/(system|recipes|ingredient-library|skin-support-system|my-routine)/?$ systems/baseline-natural-skincare/baseline-natural-skincare.html [L,QSA]',
    'skincare clean route list'
)
htaccess_path.write_text(htaccess)

routine_path = ROOT / 'systems/baseline-natural-skincare/js/skincare-routine.js'
routine = routine_path.read_text()
old_function = '''  function actionOptions(selected = '') {
    const groups = [];
    MODEL.ACTIONS.forEach((item) => {
      let group = groups.find((entry) => entry.name === item.group);
      if (!group) { group = { name: item.group, items: [] }; groups.push(group); }
      group.items.push(item);
    });
    return groups.map((group) => `<optgroup label="${escapeHtml(group.name)}">${group.items.map((item) => `<option value="${escapeHtml(item.id)}"${item.id === selected ? ' selected' : ''}>${escapeHtml(item.title)}</option>`).join('')}</optgroup>`).join('');
  }'''
new_function = '''  function actionOptions(selected = '') {
    const groupNames = Array.isArray(MODEL.GROUPS) && MODEL.GROUPS.length
      ? MODEL.GROUPS
      : Array.from(new Set(MODEL.ACTIONS.map((item) => item.group)));
    return groupNames.map((groupName) => {
      const items = MODEL.ACTIONS.filter((item) => item.group === groupName);
      if (!items.length) return '';
      return `<optgroup label="${escapeHtml(groupName)}">${items.map((item) => `<option value="${escapeHtml(item.id)}"${item.id === selected ? ' selected' : ''}>${escapeHtml(item.title)}</option>`).join('')}</optgroup>`;
    }).join('');
  }'''
routine = replace_once(routine, old_function, new_function, 'ordered action optgroups')
routine = routine.replace('Select a self-care action…', 'Choose a category and self-care action…')
routine_path.write_text(routine)

html_path = ROOT / 'systems/baseline-natural-skincare/baseline-natural-skincare.html'
html = html_path.read_text()
html = html.replace('Select a self-care action…', 'Choose a category and self-care action…')
html = replace_once(
    html,
    'skincare-routine-model.js?v=SKINCARE_MY_ROUTINE_20260804_1',
    'skincare-routine-model.js?v=SKINCARE_MY_ROUTINE_20260804_2',
    'routine model cache key'
)
html = replace_once(
    html,
    'skincare-routine.js?v=SKINCARE_MY_ROUTINE_20260804_1',
    'skincare-routine.js?v=SKINCARE_MY_ROUTINE_20260804_2',
    'routine UI cache key'
)
html_path.write_text(html)

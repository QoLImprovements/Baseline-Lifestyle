#!/usr/bin/env python3
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]


def replace_once(text, pattern, replacement, label, flags=re.S):
    updated, count = re.subn(pattern, lambda _match: replacement, text, count=1, flags=flags)
    if count != 1:
        raise RuntimeError(f"{label}: expected one replacement, found {count}")
    return updated


# -----------------------------------------------------------------------------
# Skincare routine UI: comprehensive descriptions, shaving methods and products.
# -----------------------------------------------------------------------------
skin_js_path = ROOT / 'systems/baseline-natural-skincare/js/skincare-routine.js'
skin_js = skin_js_path.read_text()
skin_js = skin_js.replace(
    "  const MODEL = global.BASELINE_SKINCARE_ROUTINE_MODEL;\n",
    "  const MODEL = global.BASELINE_SKINCARE_ROUTINE_MODEL;\n  const PRODUCTS = global.BASELINE_SKINCARE_PRODUCT_LIBRARY;\n",
    1,
)

render_items = r'''  function renderRoutineItems() {
    const target = $('#routineItems');
    if (!target) return;
    if (!state.items.length) {
      target.innerHTML = '<div class="routine-empty">No actions have been added yet. Type or choose an option above to begin your routine.</div>';
      return;
    }
    target.innerHTML = state.items.map((item, index) => {
      const definition = MODEL.ACTION_BY_ID.get(item.actionId);
      const methodField = MODEL.supportsShavingMethod?.(item.actionId)
        ? `<label class="routine-field routine-shaving-method-field"><span>Shaving method</span><select data-id="${escapeHtml(item.id)}" data-field="shavingMethod">${selectOptions(MODEL.SHAVING_METHODS, item.shavingMethod)}</select></label>`
        : '';
      const productOptions = PRODUCTS?.optionsHtml(item.actionId, item.productSelection) || '<option value="">No product selected</option>';
      const customProduct = item.productSelection === 'custom'
        ? `<label class="routine-field routine-field-wide routine-custom-product-field"><span>Custom product</span><input type="text" maxlength="180" value="${escapeHtml(item.customProductName || '')}" placeholder="Brand and product name" data-id="${escapeHtml(item.id)}" data-field="customProductName"></label>`
        : '';
      return `<article class="routine-item" data-routine-item="${escapeHtml(item.id)}">
      <div class="routine-item-head">
        <div><span class="routine-order">${index + 1}</span><strong>${escapeHtml(item.title)}</strong></div>
        <div class="routine-item-actions">${removalControls(item, index)}</div>
      </div>
      <div class="routine-item-grid">
        <label class="routine-field"><span>Action name</span><input type="text" maxlength="100" value="${escapeHtml(item.title)}" data-id="${escapeHtml(item.id)}" data-field="title"></label>
        <label class="routine-field"><span>Time of day</span><select data-id="${escapeHtml(item.id)}" data-field="timeOfDay">${selectOptions(MODEL.TIMES, item.timeOfDay)}</select></label>
        ${methodField}
        <label class="routine-field routine-product-field"><span>Product / recipe used</span><select data-id="${escapeHtml(item.id)}" data-field="productSelection">${productOptions}</select></label>
        ${customProduct}
        <label class="routine-field"><span>Benefit summary</span><select data-id="${escapeHtml(item.id)}" data-field="benefitMode">${selectOptions(MODEL.BENEFIT_MODES, item.benefitMode)}</select></label>
        <label class="routine-field"><span>How often</span><select data-id="${escapeHtml(item.id)}" data-field="frequencyMode">${selectOptions(MODEL.FREQUENCIES, item.frequency.mode)}</select></label>
        ${weeklyControl(item)}
        <div class="routine-field routine-field-wide routine-benefit-field"><span>Benefits</span><p>${escapeHtml(MODEL.benefitText(item, item.benefitMode))}</p></div>
        <label class="routine-field routine-field-wide"><span>Personal notes</span><textarea rows="3" maxlength="1200" placeholder="Products, technique, order details or reminders" data-id="${escapeHtml(item.id)}" data-field="notes">${escapeHtml(item.notes)}</textarea></label>
      </div>
      ${dayControls(item)}
    </article>`;
    }).join('');
  }

  function summaryItem'''
skin_js = replace_once(
    skin_js,
    r"  function renderRoutineItems\(\) \{[\s\S]*?\n  \}\n\n  function summaryItem",
    render_items,
    'render skincare routine items',
)

skin_js = skin_js.replace("benefitMode: 'brief',", "benefitMode: 'comprehensive',", 1)
skin_js = skin_js.replace("notes: ''\n    }, state.items.length));", "notes: '',\n      shavingMethod: action.id === 'electric-shave' ? 'electric-foil' : 'wet-cartridge',\n      productSelection: '',\n      productName: '',\n      customProductName: '',\n      useGroupFrequency: false,\n      useGroupTime: false\n    }, state.items.length));", 1)

update_item = r'''  function updateItem(id, field, value) {
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
  }'''
skin_js = replace_once(
    skin_js,
    r"  function updateItem\(id, field, value\) \{[\s\S]*?\n  \}\n\n  function updateDay",
    update_item + "\n\n  function updateDay",
    'update skincare item fields',
)

skin_js_path.write_text(skin_js)


# -----------------------------------------------------------------------------
# Skincare page asset order and cache keys.
# -----------------------------------------------------------------------------
skin_html_path = ROOT / 'systems/baseline-natural-skincare/baseline-natural-skincare.html'
skin_html = skin_html_path.read_text()
old_css = '<link href="/systems/baseline-natural-skincare/css/skincare-routine-enhancements.css?v=SKINCARE_ROUTINE_CALENDAR_GROUPS_20260804_2" rel="stylesheet"/>'
new_css = old_css + '\n<link href="/systems/baseline-natural-skincare/css/skincare-routine-workspace-v2.css?v=SKINCARE_ROUTINE_WORKSPACE_V2_20260804_1" rel="stylesheet"/>'
if 'skincare-routine-workspace-v2.css' not in skin_html:
    if old_css not in skin_html:
        raise RuntimeError('skincare enhancement CSS anchor missing')
    skin_html = skin_html.replace(old_css, new_css, 1)

old_scripts = '''<script src="/systems/baseline-natural-skincare/js/skincare-routine-model.js?v=SKINCARE_ROUTINE_WORKSPACE_20260804_1"></script>
<script src="/systems/baseline-natural-skincare/js/skincare-routine-comprehensive-benefits.js?v=SKINCARE_ROUTINE_COMPREHENSIVE_20260804_1"></script>
<script src="/systems/baseline-natural-skincare/js/skincare-routine-enhancements.js?v=SKINCARE_ROUTINE_CALENDAR_GROUPS_20260804_2"></script>
<script src="/systems/baseline-natural-skincare/js/skincare-routine.js?v=SKINCARE_ROUTINE_WORKSPACE_20260804_1"></script>'''
new_scripts = '''<script src="/systems/baseline-natural-skincare/js/skincare-routine-model.js?v=SKINCARE_ROUTINE_WORKSPACE_20260804_1"></script>
<script src="/systems/baseline-natural-skincare/js/skincare-routine-comprehensive-benefits.js?v=SKINCARE_ROUTINE_COMPREHENSIVE_20260804_1"></script>
<script src="/systems/baseline-natural-skincare/js/skincare-routine-catalogue-v2.js?v=SKINCARE_ROUTINE_CATALOGUE_V2_20260804_1"></script>
<script src="/systems/baseline-natural-skincare/js/skincare-product-library.js?v=SKINCARE_PRODUCT_LIBRARY_UK_20260804_1"></script>
<script src="/systems/baseline-natural-skincare/js/skincare-routine-enhancements.js?v=SKINCARE_ROUTINE_GROUP_SCHEDULES_20260804_1"></script>
<script src="/systems/baseline-natural-skincare/js/skincare-routine.js?v=SKINCARE_ROUTINE_PRODUCTS_20260804_1"></script>'''
if 'skincare-routine-catalogue-v2.js' not in skin_html:
    if old_scripts not in skin_html:
        raise RuntimeError('skincare script anchor missing')
    skin_html = skin_html.replace(old_scripts, new_scripts, 1)
skin_html_path.write_text(skin_html)


# -----------------------------------------------------------------------------
# Fitness My Routine page assets and clean route.
# -----------------------------------------------------------------------------
fitness_html_path = ROOT / 'systems/baseline-fitness/baseline-fitness.html'
fitness_html = fitness_html_path.read_text()
fitness_html = fitness_html.replace(
    r'/(system|my-plan|my-body|library|exercise-library|workout-routine|achievements)',
    r'/(system|my-routine|my-plan|my-body|library|exercise-library|workout-routine|achievements)',
    1,
)
fitness_html = fitness_html.replace(
    '{"exercise-library":"library","workout-routine":"my-plan"}',
    '{"exercise-library":"library","workout-routine":"my-plan","my-routine":"my-plan"}',
    1,
)
fitness_html = fitness_html.replace('data-target="my-plan">My Plan</button>', 'data-target="my-plan">My Routine</button>', 1)
fitness_html = fitness_html.replace('<div class="card"><h2>My Plan</h2>', '<div class="card"><h2>Calisthenics</h2>', 1)
fitness_css_anchor = '<link rel="stylesheet" href="/systems/baseline-fitness/css/baseline-fitness-structure.css?v=BASELINE_FITNESS_STRUCTURE_20260713_1">'
fitness_css_asset = fitness_css_anchor + '<link rel="stylesheet" href="/systems/baseline-fitness/css/fitness-routine-workspace.css?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260804_1">'
if 'fitness-routine-workspace.css' not in fitness_html:
    if fitness_css_anchor not in fitness_html:
        raise RuntimeError('fitness CSS anchor missing')
    fitness_html = fitness_html.replace(fitness_css_anchor, fitness_css_asset, 1)
fitness_script_anchor = '<script defer="defer" src="/systems/baseline-fitness/js/baseline-fitness-voice.js?v=BASELINE_FITNESS_VOICE_BURNOUT_HOLDS_20260804_1"></script>'
fitness_script_assets = fitness_script_anchor + '<script defer="defer" src="/systems/baseline-fitness/js/fitness-activity-catalogue.js?v=BASELINE_FITNESS_ACTIVITY_CATALOGUE_20260804_1"></script><script defer="defer" src="/systems/baseline-fitness/js/fitness-routine-workspace.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260804_1"></script>'
if 'fitness-activity-catalogue.js' not in fitness_html:
    if fitness_script_anchor not in fitness_html:
        raise RuntimeError('fitness script anchor missing')
    fitness_html = fitness_html.replace(fitness_script_anchor, fitness_script_assets, 1)
fitness_html_path.write_text(fitness_html)


# -----------------------------------------------------------------------------
# Clean-route compatibility.
# -----------------------------------------------------------------------------
htaccess_path = ROOT / '.htaccess'
htaccess = htaccess_path.read_text()
if 'BASELINE-FITNESS-MY-ROUTINE-20260804' not in htaccess:
    htaccess += '''

# BASELINE-FITNESS-MY-ROUTINE-20260804
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteRule ^baseline-fitness/my-routine/?$ systems/baseline-fitness/baseline-fitness.html [L,QSA]
</IfModule>
'''
htaccess_path.write_text(htaccess)

for relative in ['sitewide/js/baseline-shared.js', 'sitewide/js/baseline-tabs.js']:
    path = ROOT / relative
    text = path.read_text()
    text = text.replace('"my-plan":"my-plan"', '"my-plan":"my-plan","my-routine":"my-plan"')
    text = text.replace("'my-plan':'my-plan'", "'my-plan':'my-plan','my-routine':'my-plan'")
    text = text.replace('my-plan:"my-plan"', 'my-plan:"my-plan",my-routine:"my-plan"')
    path.write_text(text)


# -----------------------------------------------------------------------------
# Test registration.
# -----------------------------------------------------------------------------
package_path = ROOT / 'package.json'
package = json.loads(package_path.read_text())
structure = package['scripts']['test:structure']
for test_file in [
    'tests/skincare-routine-overhaul.test.mjs',
    'tests/fitness-routine-workspace.test.mjs',
]:
    if test_file not in structure:
        structure += ' ' + test_file
package['scripts']['test:structure'] = structure
package_path.write_text(json.dumps(package, indent=2) + '\n')

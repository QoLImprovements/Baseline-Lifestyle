# Integration is applied and verified through the temporary base-branch workflow.
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
html_path = ROOT / 'systems/baseline-natural-skincare/baseline-natural-skincare.html'
html = html_path.read_text()
model_tag = '<script src="/systems/baseline-natural-skincare/js/skincare-routine-model.js?v=SKINCARE_ROUTINE_WORKSPACE_20260804_1"></script>'
comprehensive_tag = '<script src="/systems/baseline-natural-skincare/js/skincare-routine-comprehensive-benefits.js?v=SKINCARE_ROUTINE_COMPREHENSIVE_20260804_1"></script>'
if comprehensive_tag not in html:
    if model_tag not in html:
        raise SystemExit('Routine model script tag was not found.')
    html = html.replace(model_tag, model_tag + '\n' + comprehensive_tag, 1)
html_path.write_text(html)

test_path = ROOT / 'tests/skincare-my-routine.test.mjs'
test = test_path.read_text()
test = test.replace(
    "const model = require('../systems/baseline-natural-skincare/js/skincare-routine-model.js');",
    "const model = require('../systems/baseline-natural-skincare/js/skincare-routine-comprehensive-benefits.js');"
)
test_path.write_text(test)

enhancement_test_path = ROOT / 'tests/skincare-routine-groups-calendar.test.mjs'
enhancement_test = enhancement_test_path.read_text()
old_order = """  const modelIndex = html.indexOf('skincare-routine-model.js');
  const enhancementIndex = html.indexOf('skincare-routine-enhancements.js');
  const interfaceIndex = html.indexOf('skincare-routine.js');
  assert.ok(modelIndex >= 0);
  assert.ok(enhancementIndex > modelIndex);
  assert.ok(interfaceIndex > enhancementIndex);"""
new_order = """  const modelIndex = html.indexOf('skincare-routine-model.js');
  const comprehensiveIndex = html.indexOf('skincare-routine-comprehensive-benefits.js');
  const enhancementIndex = html.indexOf('skincare-routine-enhancements.js');
  const interfaceIndex = html.indexOf('skincare-routine.js');
  assert.ok(modelIndex >= 0);
  assert.ok(comprehensiveIndex > modelIndex);
  assert.ok(enhancementIndex > comprehensiveIndex);
  assert.ok(interfaceIndex > enhancementIndex);"""
if old_order in enhancement_test:
    enhancement_test = enhancement_test.replace(old_order, new_order, 1)
elif 'const comprehensiveIndex' not in enhancement_test:
    raise SystemExit('Routine asset-order test could not be updated.')
enhancement_test_path.write_text(enhancement_test)

new_test_path = ROOT / 'tests/skincare-comprehensive-benefits.test.mjs'
new_test_path.write_text("""import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const model = require('../systems/baseline-natural-skincare/js/skincare-routine-comprehensive-benefits.js');
const html = fs.readFileSync(new URL('../systems/baseline-natural-skincare/baseline-natural-skincare.html', import.meta.url), 'utf8');

test('the action-specific comprehensive model loads before the routine interface', () => {
  const baseIndex = html.indexOf('skincare-routine-model.js');
  const comprehensiveIndex = html.indexOf('skincare-routine-comprehensive-benefits.js');
  const enhancementIndex = html.indexOf('skincare-routine-enhancements.js');
  assert.ok(baseIndex >= 0);
  assert.ok(comprehensiveIndex > baseIndex);
  assert.ok(enhancementIndex > comprehensiveIndex);
  assert.match(html, /skincare-routine-comprehensive-benefits\\.js\\?v=SKINCARE_ROUTINE_COMPREHENSIVE_20260804_1/);
});

test('every catalogue action has a genuinely substantial action-specific comprehensive description', () => {
  assert.equal(Object.keys(model.COMPREHENSIVE_BENEFITS).length, model.ACTIONS.length);
  for (const action of model.ACTIONS) {
    const text = action.benefitComprehensive;
    const words = text.trim().split(/\\s+/).length;
    const sentences = text.split(/[.!?](?:\\s|$)/).filter((part) => part.trim()).length;
    assert.ok(words >= 45, `${action.id} has only ${words} words`);
    assert.ok(sentences >= 3, `${action.id} has only ${sentences} sentences`);
    assert.notEqual(text, action.benefitBrief, `${action.id} repeats the brief description`);
  }
});

test('Anhydrous Oil Cleanse explains mechanism, practical use, removal and limitations', () => {
  const text = model.ACTION_BY_ID.get('oil-cleanse').benefitComprehensive;
  assert.match(text, /dissolve and lift sebum, sunscreen, makeup/);
  assert.match(text, /evening cleanse, a first cleanse or an oil-based body-cleansing method/);
  assert.match(text, /excessive hot-cloth rubbing can irritate/);
  assert.ok(text.split(/\\s+/).length >= 80);
});

test('normalised comprehensive routine items receive the expanded description', () => {
  const item = model.normaliseItem({ actionId: 'oil-cleanse', benefitMode: 'comprehensive' });
  assert.equal(item.benefit, model.ACTION_BY_ID.get('oil-cleanse').benefitComprehensive);
  assert.ok(item.benefit.length > item.title.length * 5);
});
""")

package_path = ROOT / 'package.json'
package = package_path.read_text()
needle = 'tests/skincare-routine-groups-calendar.test.mjs'
addition = 'tests/skincare-comprehensive-benefits.test.mjs'
if addition not in package:
    if needle not in package:
        raise SystemExit('Skincare routine test anchor was not found in package.json.')
    package = package.replace(needle, needle + ' ' + addition, 1)
package_path.write_text(package)

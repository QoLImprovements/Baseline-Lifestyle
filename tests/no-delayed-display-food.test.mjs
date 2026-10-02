import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync('systems/baseline-food-approach/baseline-food-approach.html', 'utf8');
const runtime = readFileSync('systems/baseline-food-approach/js/baseline-diet-log.js', 'utf8');

test('Diet Log static shell is authored in initial HTML', () => {
  for (const id of [
    'dietLogApp','dietLogDate','dietViewBtnFood','dietViewBtnRecipes','dietViewBtnBreakdown','dietViewBtnHealth',
    'dietLogSearch','dietLogCategory','dietLogFoodGrid','dietLogSelected','dietLogEntries','dietLogTotals',
    'dietLogNotes','dietHealthWeight','dietHealthSummary'
  ]) {
    assert.equal((html.match(new RegExp('id="' + id + '"', 'g')) || []).length, 1, id + ' must exist exactly once in initial HTML');
  }
  assert.match(html, /id="dietLogApp"[\s\S]*class="diet-log-app"/);
  assert.match(html, /<h3>Daily Log<\/h3>/);
  assert.match(html, /<h3>Food Library<\/h3>/);
  assert.match(html, /<h3>Health Settings<\/h3>/);
});

test('Diet Log runtime enhances the static shell instead of manufacturing it', () => {
  assert.match(runtime, /function bindAppMarkup\(root\)/);
  assert.match(runtime, /root\.querySelector\('\.diet-log-app'\)/);
  assert.equal(runtime.includes('root.innerHTML = ' + String.fromCharCode(96)), false);
  assert.match(runtime, /populateCategoryOptions\(\)/);
  assert.match(runtime, /renderFoodGrid\(\)/);
  assert.match(runtime, /renderHealth\(\)/);
});

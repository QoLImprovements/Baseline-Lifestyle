import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const theme = read('sitewide/css/baseline-themes.css');
const foodCss = read('systems/baseline-food-approach/css/baseline-food-approach.css');
const dietCss = read('systems/baseline-food-approach/css/baseline-diet-log.css');
const recipeDir = path.join(root, 'systems/baseline-food-approach/recipes');

test('Food surfaces have one theme authority', () => {
  for (const token of [
    '--food-surface-card',
    '--food-surface-panel',
    '--food-surface-control',
    '--food-surface-subtle',
    '--food-surface-selected',
    '--food-surface-border'
  ]) {
    assert.ok(theme.includes(token + ':'), token + ' must be defined by the Food theme');
  }

  assert.match(foodCss, /\.card\s*\{[\s\S]*?background:var\(--food-surface-card\)/);
  assert.match(dietCss, /\.diet-log-panel\s*\{[\s\S]*?background:var\(--food-surface-panel\)/);
  assert.doesNotMatch(dietCss, /background:rgba\(255,255,255,/);
});

test('standalone Food recipes do not load Diet Log runtime or migration copy', () => {
  const files = fs.readdirSync(recipeDir).filter((name) => name.endsWith('.html'));
  assert.ok(files.length > 0);

  for (const name of files) {
    const html = read(path.join('systems/baseline-food-approach/recipes', name));
    assert.doesNotMatch(html, /baseline-diet-log\.css/);
    assert.doesNotMatch(html, /baseline-diet-log\.js/);
    assert.doesNotMatch(html, /baseline-diet-food-library\.js/);
    assert.doesNotMatch(html, /Phase 4B/);
  }
});

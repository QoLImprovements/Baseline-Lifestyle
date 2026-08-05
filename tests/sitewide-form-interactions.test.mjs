import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const interactions = fs.readFileSync(new URL('../sitewide/js/baseline-form-interactions.js', import.meta.url), 'utf8');
const interactionCss = fs.readFileSync(new URL('../sitewide/css/baseline-form-interactions.css', import.meta.url), 'utf8');
const failsafe = fs.readFileSync(new URL('../sitewide/js/baseline-auth-failsafe.js', import.meta.url), 'utf8');
const skincareCss = fs.readFileSync(new URL('../systems/baseline-natural-skincare/css/skincare-routine-interaction-repair.css', import.meta.url), 'utf8');
const skincareEntryCss = fs.readFileSync(new URL('../systems/baseline-natural-skincare/css/skincare-routine-workspace-v2.css', import.meta.url), 'utf8');
const skincareRoutine = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine.js', import.meta.url), 'utf8');

test('shared combobox interactions support reopen and keyboard navigation', () => {
  assert.match(interactions, /input\[role="combobox"\]/);
  assert.match(interactions, /function openCombobox/);
  assert.match(interactions, /event\.key === 'ArrowDown'/);
  assert.match(interactions, /event\.key === 'ArrowUp'/);
  assert.match(interactions, /event\.key === 'Home'/);
  assert.match(interactions, /event\.key === 'End'/);
  assert.match(interactions, /options\[index\]\.click\(\)/);
});

test('Enter submits the visible sitewide account form', () => {
  assert.match(interactions, /#bl-auth-flyout \.bl-auth-form:not\(\[hidden\]\) input/);
  assert.match(interactions, /submitVisibleAuthForm/);
  assert.match(interactions, /#bl-auth-login/);
  assert.match(failsafe, /button\.type='submit'/);
});

test('Skincare typing no longer triggers input-time full-card replacement', () => {
  assert.match(interactions, /#routineItems \[data-field="title"\]/);
  assert.match(interactions, /#routineItems \[data-field="notes"\]/);
  assert.match(interactions, /event\.stopImmediatePropagation\(\)/);
  assert.match(skincareRoutine, /addEventListener\('change'/);
});

test('Skincare picker and controls are foreground, opaque and clickable', () => {
  assert.match(skincareEntryCss, /skincare-routine-interaction-repair\.css/);
  assert.match(skincareCss, /z-index:9999!important/);
  assert.match(skincareCss, /background-color:var\(--skin-cream\)!important/);
  assert.match(skincareCss, /backdrop-filter:none!important/);
  assert.match(skincareCss, /pointer-events:auto!important/);
  assert.match(skincareCss, /appearance:auto!important/);
});

test('shared interaction CSS does not permit translucent listboxes', () => {
  assert.match(interactionCss, /\[role="listbox"\]:not\(\[hidden\]\)/);
  assert.match(interactionCss, /opacity:1!important/);
  assert.match(interactionCss, /backdrop-filter:none!important/);
});

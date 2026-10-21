import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const routineCss=fs.readFileSync(new URL('../sitewide/css/baseline-routine-system.css',import.meta.url),'utf8');
const coherenceCss=fs.readFileSync(new URL('../sitewide/css/baseline-routine-coherence-v12.css',import.meta.url),'utf8');
const shared=fs.readFileSync(new URL('../sitewide/js/baseline-shared.js',import.meta.url),'utf8');
const skincareCss=fs.readFileSync(new URL('../systems/baseline-natural-skincare/css/skincare-routine-sitewide-v4.css',import.meta.url),'utf8');
const skincareEntryCss=fs.readFileSync(new URL('../systems/baseline-natural-skincare/css/skincare-routine-workspace-v2.css',import.meta.url),'utf8');
const skincareRoutine=fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine.js',import.meta.url),'utf8');
const fitnessWorkspace=fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js',import.meta.url),'utf8');

test('Personal Care and Fitness combobox owners provide keyboard navigation directly',() => {
  assert.match(skincareRoutine,/function actionPickerOptions\(\)/);
  assert.match(skincareRoutine,/function focusActionPickerOption\(index\)/);
  for(const key of ['ArrowDown','ArrowUp','Home','End','Enter','Escape']){
    assert.match(skincareRoutine,new RegExp(`event\\.key===['"]${key}['"]`),`Personal Care ${key}`);
    assert.match(fitnessWorkspace,new RegExp(`event\\.key\\s*===\\s*['"]${key}['"]`),`Fitness ${key}`);
  }
  assert.match(skincareRoutine,/option\.click\(\)/);
  assert.match(fitnessWorkspace,/options\[index\]\.click\(\)/);
});

test('sitewide account forms own Enter submission without a repair or auth-failsafe layer',() => {
  assert.equal(fs.existsSync(new URL('../sitewide/js/baseline-form-interactions.js',import.meta.url)),false);
  assert.equal(fs.existsSync(new URL('../sitewide/js/baseline-auth-failsafe.js',import.meta.url)),false);
  assert.match(shared,/loginForm\.addEventListener\('submit'/);
  assert.match(shared,/signupForm\.addEventListener\('submit'/);
  assert.match(shared,/recoverForm\.addEventListener\('submit'/);
  assert.match(shared,/resetForm\.addEventListener\('submit'/);
});

test('Personal Care typing updates fields in place and rerenders only on change',() => {
  assert.match(skincareRoutine,/root\.addEventListener\('input',[\s\S]*event\.target\.matches\('\[data-field\]'\)\) updateItemField\(event\.target\)/);
  assert.match(skincareRoutine,/root\.addEventListener\('change',[\s\S]*updateItemField\(event\.target\);renderPlan\(\)/);
  assert.doesNotMatch(skincareRoutine,/stopImmediatePropagation\(\)/);
});

test('Personal Care picker remains foreground opaque clickable and system-themed',() => {
  assert.match(skincareEntryCss,/skincare-routine-sitewide-v4\.css/);
  assert.match(skincareEntryCss,/baseline-routine-coherence-v12\.css/);
  assert.match(coherenceCss,/z-index:2147483000!important/);
  assert.match(coherenceCss,/pointer-events:auto!important/);
  assert.match(skincareCss,/background-color:var\(--skin-cream\)!important/);
  assert.match(routineCss,/appearance:auto!important/);
});

test('loaded routine CSS owns opaque listboxes without a repair stylesheet',() => {
  assert.equal(fs.existsSync(new URL('../sitewide/css/baseline-form-interactions.css',import.meta.url)),false);
  assert.match(routineCss,/\.bl-routine-root \[role="listbox"\][\s\S]*opacity:1!important/);
  assert.match(routineCss,/\.bl-routine-root \[role="listbox"\][\s\S]*pointer-events:auto!important/);
  assert.match(routineCss,/\.bl-routine-root \[role="listbox"\][\s\S]*backdrop-filter:none!important/);
  assert.match(coherenceCss,/\.routine-action-menu,[\s\S]*\.fitness-activity-menu[\s\S]*opacity:1!important/);
});

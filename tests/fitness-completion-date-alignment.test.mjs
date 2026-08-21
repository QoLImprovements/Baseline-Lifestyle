import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const css=read('systems/baseline-fitness/css/baseline-fitness.css');
const page=read('systems/baseline-fitness/baseline-fitness.html');

test('completion-date neighbours align to the date input rather than the labelled field stack',()=>{
  assert.match(css,/\.actions-inline\{[^}]*align-items:center/);
  assert.match(css,/\.session-completion-date-editor\{\s*align-items:flex-end;/);
  assert.match(css,/\.session-completion-date-editor > \.compact-action,[\s\S]*?min-height:48px;/);
  assert.match(css,/\.session-completion-date-editor > \.note,[\s\S]*?display:flex;\s*align-items:center;\s*margin:0;/);
});

test('the completion-date alignment stylesheet is served with a fresh cache key',()=>{
  assert.match(page,/baseline-fitness\.css\?v=BASELINE_FITNESS_COMPLETION_DATE_ALIGNMENT_20260821_1/);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const url = path => new URL(`../${path}`, import.meta.url);
const read = path => readFileSync(url(path), 'utf8');

const groups = read('systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js');
const coherence = read('sitewide/js/baseline-routine-coherence-v12.js');
const css = read('systems/baseline-natural-skincare/css/skincare-routine-sitewide-v4.css');

test('group schedule enable controls use themed 1/0 text fields, not native checkboxes', () => {
  assert.match(groups,/type=\"text\" inputmode=\"numeric\" pattern=\"\[01\]\" maxlength=\"1\" value=\"\$\{group\.applyTime\?'1':'0'\}\" data-group-field=\"applyTime\"/);
  assert.match(groups,/type=\"text\" inputmode=\"numeric\" pattern=\"\[01\]\" maxlength=\"1\" value=\"\$\{group\.applyFrequency\?'1':'0'\}\" data-group-field=\"applyFrequency\"/);
  assert.doesNotMatch(groups,/type=\"checkbox\" data-group-field=\"(?:applyTime|applyFrequency)\"/);
  assert.match(groups,/groupSettingEnabled\(value\)/);
  assert.match(css,/\.routine-group-setting>span\{font-weight:400\}/);
});

test('new groups default their group schedule controls to 1', () => {
  assert.match(groups,/applyTime:true,applyFrequency:true,frequency:\{ mode:'daily',days:\[\],timesPerWeek:1 \}/);
});

test('a grouped routine step cannot expose its own time, frequency, days or weekly count', () => {
  assert.match(groups,/if \(frequencyField\) frequencyField\.hidden=Boolean\(group\)/);
  assert.match(groups,/if \(timeField\) timeField\.hidden=Boolean\(group\)/);
  assert.match(groups,/if \(days\) days\.hidden=Boolean\(group\) \|\| itemFrequency\.mode!=='days'/);
  assert.match(groups,/if \(weekly\) weekly\.hidden=Boolean\(group\) \|\| itemFrequency\.mode!=='weekly'/);
  assert.match(groups,/const directWeekly=article\.querySelector\(':scope>\.routine-weekly'\);if \(directWeekly\) body\.append\(directWeekly\)/);
  assert.match(css,/:is\(\.routine-field,\.routine-days,\.routine-weekly\)\[hidden\]\{display:none!important\}/);
});

test('Skincare Summary has one canonical selector with requested option order', () => {
  assert.match(coherence,/removeDuplicateSkinSummarySelectors/);
  assert.match(coherence,/if \(select===keep\) return/);
  const groupsAt=coherence.indexOf('optgroup label="Routine Groups"');
  const individualAt=coherence.indexOf('optgroup label="Individual Routine Steps"');
  const catalogueAt=coherence.indexOf('optgroup label="All Routine Steps Not In My Routine"');
  assert.ok(groupsAt>=0 && individualAt>groupsAt && catalogueAt>individualAt);
});

test('Skincare Summary group filtering uses stable group IDs and catalogue excludes owned actions', () => {
  assert.match(groups,/data-summary-group=\"\$\{esc\(group\.id\)\}\"/);
  assert.match(groups,/data-summary-group=\"individual\"/);
  assert.match(coherence,/const stableId=String\(section\.dataset\.summaryGroup \|\| ''\)/);
  assert.match(coherence,/visible=stableId===value\.slice\(6\)/);
  assert.match(coherence,/!ownedActionIds\.has\(String\(action\.id\)\)/);
  assert.match(coherence,/Not in My Routine/);
});

test('catalogue Summary preview is stable and ignored by the shared mutation observer', () => {
  assert.match(coherence,/preview\.dataset\.signature===signature/);
  assert.match(coherence,/target\.closest\?\.\('\.bl-routine-summary-catalogue'\)/);
});

test('changed Skincare JavaScript parses', () => {
  for (const path of [
    'systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js',
    'sitewide/js/baseline-routine-coherence-v12.js'
  ]) {
    const checked=spawnSync(process.execPath,['--check',url(path).pathname],{ encoding:'utf8' });
    assert.equal(checked.status,0,`${path}: ${checked.stderr || checked.stdout}`);
  }
});

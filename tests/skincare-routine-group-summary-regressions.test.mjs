import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const url = path => new URL(`../${path}`, import.meta.url);
const read = path => readFileSync(url(path), 'utf8');

const groups = read('systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js');
const coherence = read('sitewide/js/baseline-routine-coherence-v12.js');
const css = read('systems/baseline-natural-skincare/css/skincare-routine-sitewide-v4.css');

test('group settings expose only direct time and frequency schedule controls', () => {
  assert.match(groups,/<span>Group time<\/span><select data-group-field=\"timeOfDay\"/);
  assert.match(groups,/<span>Group frequency<\/span><select data-group-field=\"frequencyMode\"/);
  assert.doesNotMatch(groups,/Set time for this group|Set “How often” for this group|data-group-title|groupSettingEnabled|applyTime|applyFrequency/);
});

test('group schedule is always the effective schedule for grouped routine steps', () => {
  assert.match(groups,/copy\.frequency=MODEL\.normaliseFrequency\(group\.frequency\)/);
  assert.match(groups,/copy\.timeOfDay=group\.timeOfDay/);
  assert.match(groups,/if \(group\.frequency\.mode!=='days'\) return ''/);
  assert.match(groups,/if \(group\.frequency\.mode!=='weekly'\) return ''/);
  assert.match(groups,/frequency:\{ mode:'daily',days:\[\],timesPerWeek:1 \}/);
});

test('a grouped routine step cannot expose its own time, frequency, days or weekly count', () => {
  assert.match(groups,/if \(frequencyField\) frequencyField\.hidden=Boolean\(group\)/);
  assert.match(groups,/if \(timeField\) timeField\.hidden=Boolean\(group\)/);
  assert.match(groups,/if \(days\) days\.hidden=Boolean\(group\) \|\| itemFrequency\.mode!=='days'/);
  assert.match(groups,/if \(weekly\) weekly\.hidden=Boolean\(group\) \|\| itemFrequency\.mode!=='weekly'/);
  assert.match(groups,/const directWeekly=article\.querySelector\(':scope>\.routine-weekly'\);if \(directWeekly\) body\.append\(directWeekly\)/);
  assert.match(css,/:is\(\.routine-field,\.routine-days,\.routine-weekly\)\[hidden\]\{display:none!important\}/);
});

test('expanded group settings stay compact', () => {
  assert.match(css,/\.routine-plan-group-settings\{display:grid;gap:10px;padding:11px 14px 12px/);
  assert.match(css,/\.routine-plan-group-settings-grid\{display:grid;grid-template-columns:repeat\(2,minmax\(0,1fr\)\);gap:10px/);
  assert.doesNotMatch(css,/\.routine-group-setting/);
});

test('Skincare Summary has one canonical selector with requested option order', () => {
  assert.match(coherence,/removeDuplicateSkinSummarySelectors/);
  assert.match(coherence,/if \(select===keep\) return/);
  const groupsAt=coherence.indexOf('optgroup label="Routine Groups"');
  const individualAt=coherence.indexOf('optgroup label="Individual Routine Steps"');
  const catalogueAt=coherence.indexOf('optgroup label="All Routine Steps Not In My Routine"');
  assert.ok(groupsAt>=0 && individualAt>groupsAt && catalogueAt>individualAt);
});

test('Skincare Summary group filtering uses stable group IDs and hidden groups are actually removed from layout', () => {
  assert.match(groups,/data-summary-group=\"\$\{esc\(group\.id\)\}\"/);
  assert.match(groups,/data-summary-group=\"individual\"/);
  assert.match(coherence,/const stableId=String\(section\.dataset\.summaryGroup \|\| ''\)/);
  assert.match(coherence,/visible=stableId===value\.slice\(6\)/);
  assert.match(css,/\.routine-summary-group\[hidden\]\{display:none!important\}/);
});

test('Skincare Summary catalogue excludes owned actions', () => {
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

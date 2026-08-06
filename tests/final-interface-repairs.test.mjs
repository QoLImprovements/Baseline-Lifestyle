import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const modules = [
  'sitewide/js/baseline-live-stability.js',
  'sitewide/js/baseline-unified-favorites-v1.js',
  'sitewide/js/baseline-detect-word-feedback-v1.js',
  'sitewide/js/baseline-routine-group-completion-v1.js',
  'sitewide/js/baseline-public-routine-groups-v1.js',
  'sitewide/js/baseline-fitness-plan-control-authority-v1.js',
  'sitewide/js/baseline-routine-coherence-events-v4.js',
  'sitewide/js/baseline-routine-live-authority-v1.js',
  'systems/baseline-fitness/js/fitness-generator-progression-v1.js'
];
const groupCompletion = read('sitewide/js/baseline-routine-group-completion-v1.js');
const coherenceEvents = read('sitewide/js/baseline-routine-coherence-events-v4.js');
const liveAuthority = read('sitewide/js/baseline-routine-live-authority-v1.js');
const liveCss = read('sitewide/css/baseline-routine-live-authority-v1.css');
const coherenceCss = read('sitewide/css/baseline-routine-coherence-v4.css');
const favorites = read('sitewide/js/baseline-unified-favorites-v1.js');
const detectWord = read('sitewide/js/baseline-detect-word-feedback-v1.js');
const gamesCore = read('systems/baseline-games-hub/js/baseline-games-hub-core.js');

test('the isolated final repair modules remain valid JavaScript', () => {
  for (const path of modules) {
    const file = new URL(`../${path}`, import.meta.url);
    const checked = spawnSync(process.execPath, ['--check', file.pathname], { encoding:'utf8' });
    assert.equal(checked.status, 0, `${path}: ${checked.stderr || checked.stdout}`);
  }
});

test('grouped Routine Logs have stable group-owned numbering and checkbox-only group completion', () => {
  assert.match(groupCompletion, /data-final-group-complete/);
  assert.match(groupCompletion, /function setGroup/);
  assert.match(groupCompletion, /observer\.observe\(target, \{ childList:true, subtree:false \}\)/);
  assert.doesNotMatch(groupCompletion, /<span>Complete group<\/span>/);
  assert.doesNotMatch(groupCompletion, /bl-v4-number|data-final-group-number/);
  assert.match(liveCss, /counter-reset:bl-live-routine-number/);
  assert.match(liveCss, /\.routine-log-item \.bl-v4-number/);
  assert.match(liveCss, /display:none!important/);
});

test('the compatibility event bridge no longer performs a second My Routine render/repair pass', () => {
  assert.match(coherenceEvents, /SITEWIDE_ROUTINE_EVENTS_20260806_5/);
  assert.doesNotMatch(coherenceEvents, /decorateSkinLogNumbers/);
  assert.doesNotMatch(coherenceEvents, /decorateFitnessLogNumbers/);
  assert.doesNotMatch(coherenceEvents, /startAnotherPlan|createAnotherPlan/);
  assert.doesNotMatch(coherenceEvents, /global\.addEventListener\('input'/);
  assert.match(liveAuthority, /final sitewide authority/);
  assert.match(liveAuthority, /applySkinSummaryFilter/);
  assert.match(liveAuthority, /applyFitnessSummaryFilter/);
});

test('Public Routines and Routine Settings keep compact coherent layout', () => {
  assert.match(coherenceCss, /\.bl-v4-public-card\{/);
  assert.match(coherenceCss, /\.bl-v4-public-controls\{/);
  assert.match(coherenceCss, /\.bl-v4-settings-button\{/);
  assert.match(coherenceCss, /\.bl-v4-settings-panel\{/);
  assert.match(liveCss, /\.bl-live-public-head\{/);
  assert.match(liveCss, /justify-content:space-between/);
});

test('Skincare searchable controls stay inside the Skincare palette', () => {
  assert.match(liveCss, /#routineActionSearch::-webkit-search-cancel-button/);
  assert.match(liveCss, /-webkit-appearance:none!important/);
  assert.match(liveCss, /#routineActionToggle/);
  assert.match(liveCss, /var\(--bl-routine-accent\)/);
});

test('Account exposes one Favorites dropdown with Food and Natural Skincare categories', () => {
  assert.match(favorites, /id=\"bl-favorites-select\"/);
  assert.match(favorites, /<label for=\"bl-favorites-select\">Favorites<\/label>/);
  assert.match(favorites, /document\.createElement\('optgroup'\)/);
  assert.match(favorites, /label:'Food'/);
  assert.match(favorites, /label:'Natural Skincare'/);
  assert.doesNotMatch(favorites, /document\.documentElement[\s\S]*MutationObserver/);
});

test('Detect The Word tiles and key share explicit semantic feedback colours', () => {
  assert.match(detectWord, /letter-cell\.correct,.word-feedback-dot--correct/);
  assert.match(detectWord, /letter-cell\.present,.word-feedback-dot--present/);
  assert.match(detectWord, /letter-cell\.absent,.word-feedback-dot--absent/);
  assert.match(detectWord, /Correct place/);
  assert.match(detectWord, /In word, different place/);
  assert.match(detectWord, /Not in word/);
  assert.match(gamesCore, /result\[idx\]\.state = 'correct'/);
  assert.match(gamesCore, /result\[idx\]\.state = 'present'/);
  assert.match(gamesCore, /secretPool\[poolIndex\] = null/);
});

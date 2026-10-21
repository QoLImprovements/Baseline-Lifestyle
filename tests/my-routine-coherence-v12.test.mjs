import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync,readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

const htaccess=read('.htaccess');
const coherence=read('sitewide/js/baseline-routine-coherence-v12.js');
const coherenceCss=read('sitewide/css/baseline-routine-coherence-v12.css');
const publicViewer=read('sitewide/js/baseline-public-routine-viewonly-v4.js');
const skinHtml=read('systems/baseline-natural-skincare/baseline-natural-skincare.html');
const skinRoutine=read('systems/baseline-natural-skincare/js/skincare-routine.js');
const skinLoader=read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const skinGroups=read('systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js');
const skinCss=read('systems/baseline-natural-skincare/css/skincare-routine-sitewide-v4.css');
const skinEntryCss=read('systems/baseline-natural-skincare/css/skincare-routine-workspace-v2.css');
const skinBaseCss=read('systems/baseline-natural-skincare/css/baseline-natural-skincare.css');
const fitnessHtml=read('systems/baseline-fitness/baseline-fitness.html');
const fitnessWorkspace=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
const fitnessRoutineLog=read('systems/baseline-fitness/js/fitness-routine-log-v1.js');
const fitnessGroups=read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
const fitnessSummary=read('systems/baseline-fitness/js/fitness-routine-summary-v2.js');
const generator=read('systems/baseline-fitness/js/fitness-generator-progression-v1.js');
const livePolicy=read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
const multiplePlans=read('systems/baseline-fitness/js/fitness-multiple-plans.js');
const structure=read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
const fitnessEntryCss=read('systems/baseline-fitness/css/fitness-routine-workspace.css');
const workspaceCss=fitnessEntryCss;
const generatorCss=read('systems/baseline-fitness/css/fitness-multiple-plans.css');

test('one active shared My Routine coherence layer remains',()=>{
  assert.match(skinHtml,/baseline-routine-coherence-v12\.js/);
  assert.match(skinHtml,/baseline-public-routine-viewonly-v4\.js/);
  assert.match(skinHtml,/skincare-routine-sitewide-v5\.js/);
  assert.doesNotMatch(skinLoader,/loadOrdered\(|loadScript\(|createElement\(['"]script['"]\)/);
  assert.doesNotMatch(skinLoader,/baseline-routine-coherence-v12\.js|baseline-public-routine-viewonly-v4\.js|baseline-routine-stability-v11|baseline-routine-experience-v10|baseline-routine-experience-v9|baseline-routine-authority-v7|fitness-theme-guard-v1/);

  assert.match(fitnessHtml,/baseline-routine-coherence-v12\.js/);
  assert.match(fitnessHtml,/baseline-public-routine-viewonly-v4\.js/);
  assert.match(fitnessHtml,/fitness-routine-groups-v2\.js/);
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-routine-workspace.js')),false);
  assert.doesNotMatch(fitnessWorkspace,/loadScript\(|createElement\(['"]script['"]\)|localStorage|sessionStorage|baseline-routine-stability-v11|baseline-routine-experience-v10|baseline-routine-experience-v9|baseline-routine-authority-v7|fitness-theme-guard-v1/);
});

test('first-paint route identity is in the head while system CSS owns visibility',()=>{
  assert.match(fitnessHtml,/id="baseline-fitness-first-paint"/);
  assert.match(fitnessHtml,/data-initial-fitness-tab','my-plan'/);
  assert.match(fitnessHtml,/data-initial-routine-view/);
  assert.match(fitnessHtml,/data-initial-routine-plan/);
  assert.doesNotMatch(fitnessHtml,/id="baseline-fitness-first-paint-style"/);
  assert.match(fitnessEntryCss,/#my-plan:not\(\[data-routine-workspace-v2="true"\]\)>\.grid\{display:none!important\}/);
  assert.match(fitnessEntryCss,/html\[data-initial-fitness-tab="my-plan"\] #system\{display:none!important\}/);

  assert.match(skinHtml,/id="baseline-skincare-route-state"/);
  assert.match(skinHtml,/data-initial-skincare-tab/);
  assert.match(skinHtml,/data-initial-routine-view/);
  assert.match(skinHtml,/id="baseline-skincare-initial-panel"/);
  assert.doesNotMatch(skinHtml,/createElement\(["']style["']\)|baseline-skincare-first-paint-style/);
  assert.match(skinBaseCss,/html\[data-initial-section\] body\[data-app="skin"\] main\.wrap > \.section/);
  assert.match(skinBaseCss,/data-initial-section="routine"/);
  assert.match(skinEntryCss,/data-initial-routine-view="summary"/);
});

test('static My Routine owners load in a first-paint-safe order instead of a late network waterfall',()=>{
  const fitnessSystem=fitnessHtml.indexOf('/sitewide/js/baseline-routine-system.js');
  const fitnessSummaryIndex=fitnessHtml.indexOf('/systems/baseline-fitness/js/fitness-routine-summary-v2.js');
  const structureIndex=fitnessHtml.indexOf('/systems/baseline-fitness/js/fitness-routine-structure-v4.js');
  const baseIndex=fitnessHtml.indexOf('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
  const logIndex=fitnessHtml.indexOf('/systems/baseline-fitness/js/fitness-routine-log-v1.js');
  const sharedIndex=fitnessHtml.indexOf('/sitewide/js/baseline-routine-coherence-v12.js');
  assert.ok(fitnessSystem>=0 && fitnessSystem<fitnessSummaryIndex && fitnessSummaryIndex<structureIndex && structureIndex<baseIndex && baseIndex<logIndex && logIndex<sharedIndex);
  assert.match(fitnessHtml,/data-fitness-routine-structure-v6="true" data-loaded="true"/);
  assert.match(fitnessHtml,/data-fitness-routine-workspace-v2="true" data-loaded="true"/);

  const skinSystem=skinHtml.lastIndexOf('/sitewide/js/baseline-routine-system.js');
  const skinBase=skinHtml.lastIndexOf('/systems/baseline-natural-skincare/js/skincare-routine.js');
  const skinGroup=skinHtml.lastIndexOf('/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js');
  const skinShared=skinHtml.lastIndexOf('/sitewide/js/baseline-routine-coherence-v12.js');
  assert.ok(skinSystem>=0 && skinSystem<skinBase && skinBase<skinGroup && skinGroup<skinShared);
  assert.match(skinHtml,/data-skincare-routine-sitewide-v5="true" data-loaded="true"/);
  assert.match(skinHtml,/data-baseline-routine-coherence-v12="true" data-loaded="true"/);
});

test('retired repair layers and duplicate controllers remain physically absent',()=>{
  [
    'sitewide/js/baseline-routine-authority-v7.js','sitewide/js/baseline-routine-experience-v9.js','sitewide/js/baseline-routine-experience-v10.js',
    'sitewide/js/baseline-routine-coherence-v4.js','sitewide/js/baseline-routine-coherence-events-v1.js','sitewide/js/baseline-routine-coherence-events-v4.js','sitewide/js/baseline-routine-live-authority-v1.js',
    'sitewide/js/baseline-skincare-routine-state-bridge-v1.js','sitewide/js/baseline-fitness-routine-summary-bridge-v1.js','sitewide/js/baseline-public-routine-groups-v1.js',
    'systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js','systems/baseline-fitness/js/fitness-routine-sitewide-v3.js',
    'systems/baseline-fitness/js/fitness-theme-guard-v1.js','systems/baseline-fitness/js/fitness-routine-coherence-v1.js','systems/baseline-fitness/js/fitness-routine-groups-v1.js',
    'systems/baseline-fitness/js/fitness-plan-generator-coherence-v4.js','systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js','systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js',
    'systems/baseline-fitness/js/fitness-routine-summary-v1.js'
  ].forEach(path=>assert.equal(existsSync(url(path)),false,`${path} should stay deleted`));
});

test('My Routine never uses a loading screen or runtime style authority',()=>{
  for (const source of [skinLoader,skinRoutine,skinGroups,fitnessWorkspace,fitnessRoutineLog,fitnessGroups,fitnessSummary,generator,livePolicy,coherence]) {
    assert.doesNotMatch(source,/Loading My Routine|BootShield|routine-booting|waitForBaseRoutine|createElement\(['\"]style['\"]\)|injectStyles/);
  }
});

test('Apache serves every clean My Routine page without exposing implementation state',()=>{
  for (const route of [
    'baseline-fitness/my-routine/(log|summary|public)',
    'baseline-fitness/my-routine/plan/(calisthenics|cardio|other|sports)',
    'baseline-natural-skincare/my-routine/(log|summary|plan|public)'
  ]) assert.ok(htaccess.includes(route),`missing clean route ${route}`);
  assert.match(htaccess,/baseline-fitness\/my-routine\/\?\$ systems\/baseline-fitness\/baseline-fitness\.html/);
  assert.doesNotMatch(htaccess,/baseline-fitness\/my-routine\/\?\$ \/baseline-fitness\/my-routine\/log \[R=/);
});

test('Skincare uses account-backed routine state with revision-protected saves',()=>{
  assert.match(skinRoutine,/ROUTE_BASE='\/baseline-natural-skincare\/my-routine'/);
  assert.match(skinRoutine,/function routeViewFromLocation\(\)/);
  assert.match(skinRoutine,/function loadRemoteState\(\)/);
  assert.match(skinRoutine,/url\.pathname=cleanViewPath\(next\)/);
  assert.doesNotMatch(skinRoutine,/localStorage|sessionStorage|loadLocalState|readLocal|writeLocal/);
  assert.match(skinRoutine,/expectedRevision:state\.revision/);
  assert.match(skinRoutine,/revision_conflict/);
  assert.match(skinRoutine,/if \(result\?\.render && locationTargetsRoutine\(\)\) renderAll\(\)/);
  assert.match(skinRoutine,/addEventListener\('popstate',restoreRoute\)/);
  assert.doesNotMatch(skinGroups,/localStorage|sessionStorage|readLegacyGroupAssignments|writeGroupLocal/);
  assert.match(skinGroups,/BASELINE_SKINCARE_ROUTINE_GROUPS=Object\.freeze/);
  assert.match(skinGroups,/function syncFromCanonical\(\)/);
  assert.match(skinGroups,/UI\.observe\(root,renderCanonical\)/);
  assert.doesNotMatch(skinGroups,/function loadForAuth\(|attachAuth\(\)/);
  assert.doesNotMatch(coherence,/localStorage/);
  assert.match(coherence,/BASELINE_SKINCARE_ROUTINE_GROUPS\?\.getState/);
  assert.match(skinGroups,/expectedRevision:state\.revision/);
});

test('Fitness builds its final structure synchronously before routine data paints',()=>{
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-routine-workspace.js')),false);
  assert.match(structure,/function routeFromPath\(\)/);
  assert.match(structure,/global\.BASELINE_fitnessRoutineStructure=Object\.freeze/);
  assert.match(fitnessWorkspace,/data-fitness-routine-view="summary"/);
  assert.match(fitnessWorkspace,/data-fitness-routine-view="plan"/);
  assert.match(fitnessWorkspace,/data-fitness-routine-view="public"/);
  assert.match(fitnessWorkspace,/section\.replaceChildren\(shell\);\s*section\.dataset\.routineWorkspaceV2 = 'true';/s);
  assert.match(fitnessWorkspace,/global\.BASELINE_fitnessRoutineStructure\?\.boot\?\.\(\)/);
  assert.match(fitnessWorkspace,/function renderStableState\(\)/);
  assert.match(fitnessWorkspace,/async function loadForAuth\(snapshot\)/);
  assert.match(fitnessWorkspace,/const response = await request\(\)/);
  assert.match(fitnessWorkspace,/state\.activities = normaliseActivities\(response\.data\?\.activities\)/);
  assert.match(fitnessWorkspace,/state\.logs = normaliseLogs\(response\.data\?\.logs\)/);
  assert.doesNotMatch(fitnessWorkspace,/localStorage|sessionStorage|attempts\s*<\s*80|setTimeout\(connect,\s*100\)/);
  assert.match(structure,/ROUTE_BASE='\/baseline-fitness\/my-routine'/);
  assert.match(structure,/url\.pathname=cleanPath\(\)/);
});

test('public My Routine URLs contain page identity only; transient UI state is page-memory only',()=>{
  for (const source of [skinRoutine,fitnessSummary,coherence]) {
    assert.doesNotMatch(source,/searchParams\.set\(['"]routine-(?:view|plan|filter|date)/);
    assert.doesNotMatch(source,/localStorage|sessionStorage/);
  }
  assert.match(fitnessSummary,/let activeFilter='all'/);
  assert.match(coherence,/let transientSummaryFilter = 'all'/);
  assert.match(coherence,/let transientLogDate = ''/);
  assert.doesNotMatch(coherence,/function setUrlValues\(/);
  assert.doesNotMatch(coherence,/function urlValue\(/);
});
test('enhanced My Routine select can paint only one dropdown control',()=>{
  assert.match(coherenceCss,/\.bl-select\[data-bl-enhanced="1"\]>select/);
  assert.match(coherenceCss,/opacity:0!important/);
  assert.match(coherenceCss,/pointer-events:none!important/);
});

test('Skincare Summary dropdown is one canonical control with My Routine first and complete library second',()=>{
  assert.match(coherence,/removeDuplicateSkinSummarySelectors/);
  assert.match(coherence,/skinLibraryGroups/);
  assert.match(coherence,/My Routine — Routine Groups/);
  assert.match(coherence,/My Routine — Routine Steps/);
  assert.match(coherence,/Routine Library — \$\{esc\(group\.category\)\}/);
  assert.match(coherence,/skinCatalogueActions\(\)\.filter\(\(action\) => action\?\.id\)/);
  assert.doesNotMatch(coherence,/ownedActionIds/);
  assert.match(coherence,/sort\(\(a,b\) => a\[0\]\.localeCompare/);
});

test('Fitness Summary has only one content/filter owner',()=>{
  assert.match(fitnessSummary,/single Fitness owner/);
  assert.match(fitnessSummary,/function ensureSingleFilter\(\)/);
  assert.match(structure,/function ensureSingleSummaryFilter\(panel\)/);
  assert.doesNotMatch(structure,/function renderSummary\s*\(/);
  assert.doesNotMatch(structure,/function renderSummaryFilter\s*\(/);
  assert.doesNotMatch(coherence,/function fitnessSummaryFilter\s*\(/);
  assert.doesNotMatch(coherence,/function applyFitnessSummary\s*\(/);
});

test('calendar markers use routine codes with detailed hover captions and Summary navigation',()=>{
  assert.match(coherence,/marker\.code \|\| marker\.number/);
  assert.match(coherence,/data-caption=\"\$\{esc\(marker\.caption \|\| marker\.label\)\}\"/);
  assert.match(coherence,/fitnessPlanCaption/);
  assert.match(coherence,/fitnessActivityCaption/);
  assert.match(coherence,/data-routine-summary-target/);
  assert.match(coherence,/openSummary/);
  assert.match(coherenceCss,/content:attr\(data-caption\)/);
  assert.match(coherenceCss,/\.bl-routine-calendar-marker::after/);
});

test('Skincare groups own time and frequency directly and start collapsed',()=>{
  assert.match(skinHtml,/Create Routine Group/);
  assert.match(skinHtml,/class="routine-group-manager bl-routine-group-manager"/);
  assert.match(skinGroups,/data-plan-group-settings/);
  assert.match(skinGroups,/Group time/);
  assert.match(skinGroups,/Group frequency/);
  assert.match(skinGroups,/id,title,collapsed:source\.collapsed!==false/);
  assert.doesNotMatch(skinGroups,/Set time for this group|Set “How often” for this group|data-group-field=\"applyTime\"|data-group-field=\"applyFrequency\"|data-group-title/);
  assert.match(skinCss,/\.routine-plan-group-settings-grid/);
});

test('Fitness Routine Log owns collapsible activity details and reversible removal',()=>{
  assert.match(fitnessRoutineLog,/fitness-log-details-panel/);
  assert.match(fitnessRoutineLog,/data-fitness-log-details-toggle/);
  assert.match(fitnessRoutineLog,/Close details/);
  assert.match(fitnessRoutineLog,/Remove Entry/);
  assert.match(fitnessRoutineLog,/data-fitness-log-remove-confirm/);
  assert.match(fitnessRoutineLog,/update_session\.php/);
  assert.match(fitnessRoutineLog,/action:'set_status',status:'planned'/);
  assert.match(workspaceCss,/\.fitness-log-details-panel\[hidden\]\{display:none!important\}/);
});

test('Fitness Calendar has synchronized second Log Date and spaced control rows',()=>{
  assert.match(fitnessRoutineLog,/fitnessCalendarLogDate/);
  assert.match(workspaceCss,/grid-template-areas:\"views date\" \"nav nav\"/);
  assert.match(workspaceCss,/row-gap:14px!important/);
});

test('shared coherence removes duplicate Fitness generator IDs before presentation',()=>{
  for (const id of ['scheduleMode','freq','frequencyRangeMax','lengthMode','sessions','goalExercise','goalAmount']) assert.ok(coherence.includes(`['${id}','#myPlanGeneratorWrap']`),`missing generator dedupe for ${id}`);
});

test('generator owns schedule choice and two-column conditional plan length',()=>{
  assert.match(generatorCss,/\.bl-generator-settings-grid/);
  assert.match(generatorCss,/grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(generator,/Number Of Days/);
  assert.match(generator,/Specify Weekdays/);
  assert.match(generator,/Achieved Rep\/Hold Goal/);
  assert.match(generator,/syncScheduleMode/);
  assert.match(generator,/syncLengthMode/);
});

test('generator Details owns progression and muscle focus without duplicate Type',()=>{
  assert.match(generator,/Workout\/Muscle Focus/);
  assert.match(generator,/removeDuplicateTypeField/);
  assert.match(generator,/Progression Type/);
  assert.match(multiplePlans,/displayExerciseName/);
});

test('Public Routine remains owner-facing View Only markup',()=>{
  assert.doesNotThrow(()=>new Function(publicViewer));
  assert.match(publicViewer,/same Routine Log, Routine Summary, Routine Plan, calendar/);
  assert.match(publicViewer,/disabled/);
  assert.doesNotMatch(publicViewer,/injectStyles|createElement\(['\"]style['\"]\)|bl-public-v3|Loading public routine/);
});

test('changed JavaScript parses',()=>{
  [
    'sitewide/js/baseline-routine-coherence-v12.js','sitewide/js/baseline-public-routine-viewonly-v4.js',
    'systems/baseline-natural-skincare/js/skincare-routine.js','systems/baseline-natural-skincare/js/skincare-routine-enhancements.js','systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js',
    'systems/baseline-fitness/js/fitness-routine-workspace-v2.js','systems/baseline-fitness/js/fitness-routine-log-v1.js','systems/baseline-fitness/js/fitness-routine-groups-v2.js',
    'systems/baseline-fitness/js/fitness-generator-progression-v1.js','systems/baseline-fitness/js/fitness-live-policy-v1.js','systems/baseline-fitness/js/fitness-multiple-plans.js','systems/baseline-fitness/js/fitness-routine-structure-v4.js','systems/baseline-fitness/js/fitness-routine-summary-v2.js'
  ].forEach(path=>{
    const checked=spawnSync(process.execPath,['--check',url(path).pathname],{ encoding:'utf8' });
    assert.equal(checked.status,0,`${path}: ${checked.stderr || checked.stdout}`);
  });
});

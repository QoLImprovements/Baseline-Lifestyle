import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const paths = Object.freeze({
  stability:new URL('../sitewide/js/baseline-live-stability.js', import.meta.url),
  skincareLoader:new URL('../systems/baseline-natural-skincare/js/skincare-routine-enhancements.js', import.meta.url),
  skincareCanonical:new URL('../systems/baseline-natural-skincare/js/skincare-routine-canonical.js', import.meta.url),
  skincareApi:new URL('../systems/baseline-natural-skincare/api/routine_state.php', import.meta.url),
  fitnessLoader:new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js', import.meta.url),
  fitnessCanonical:new URL('../systems/baseline-fitness/js/fitness-routine-canonical.js', import.meta.url),
  fitnessPlans:new URL('../systems/baseline-fitness/js/fitness-multiple-plans.js', import.meta.url),
  fitnessFamilyFilter:new URL('../systems/baseline-fitness/js/fitness-exercise-family-filter.js', import.meta.url),
  fitnessVisibility:new URL('../systems/baseline-fitness/js/fitness-routine-visibility.js', import.meta.url),
  fitnessVisibilityApi:new URL('../systems/baseline-fitness/api/routine_visibility.php', import.meta.url),
  fitnessCss:new URL('../systems/baseline-fitness/css/fitness-multiple-plans.css', import.meta.url)
});

const source = Object.fromEntries(Object.entries(paths).map(([key,path]) => [key,readFileSync(path,'utf8')]));

test('canonical Routine JavaScript remains syntactically valid', () => {
  ['stability','skincareLoader','skincareCanonical','fitnessLoader','fitnessCanonical','fitnessPlans','fitnessFamilyFilter','fitnessVisibility'].forEach((key) => {
    const checked = spawnSync(process.execPath,['--check',paths[key].pathname],{ encoding:'utf8' });
    assert.equal(checked.status,0,`${key}: ${checked.stderr || checked.stdout}`);
  });
});

test('Skincare uses one event-driven canonical renderer without observer or timer repaint loops', () => {
  assert.doesNotMatch(source.stability,/installRoutineInterfaceRepairs/);
  assert.doesNotMatch(source.skincareLoader,/MutationObserver/);
  assert.doesNotMatch(source.skincareLoader,/routine-sitewide-v4|routine-coherence-v4|routine-coherence-events|summary-bridge/);
  assert.match(source.skincareLoader,/skincare-routine-canonical\.js/);
  assert.doesNotMatch(source.skincareCanonical,/MutationObserver/);
  assert.doesNotMatch(source.skincareCanonical,/setInterval/);
  assert.match(source.skincareCanonical,/function stableHtml/);
  assert.match(source.skincareCanonical,/data-canonical-complete-group/);
  assert.match(source.skincareCanonical,/bl-canonical-number/);
  assert.match(source.skincareCanonical,/queueMicrotask\(renderAll\)/);
});

test('Skincare Public Routines expose user groups and a planned calendar', () => {
  assert.match(source.skincareCanonical,/publicRoutine\.groups/);
  assert.match(source.skincareCanonical,/publicRoutine\.assignments/);
  assert.match(source.skincareCanonical,/function plannedWeek/);
  assert.match(source.skincareCanonical,/Planned calendar/);
  assert.match(source.skincareApi,/'groups'=>\$groups/);
  assert.match(source.skincareApi,/'assignments'=>\$assignments/);
  assert.match(source.skincareApi,/skincare_routine_groups/);
});

test('Fitness loads one canonical Routine Summary rather than competing coherence layers', () => {
  assert.doesNotMatch(source.fitnessLoader,/MutationObserver/);
  assert.doesNotMatch(source.fitnessLoader,/setInterval/);
  assert.doesNotMatch(source.fitnessLoader,/fitness-routine-sitewide-v3|baseline-routine-coherence-v4|routine-coherence-events|summary-bridge/);
  assert.match(source.fitnessLoader,/fitness-routine-canonical\.js/);
  assert.doesNotMatch(source.fitnessCanonical,/MutationObserver/);
  assert.doesNotMatch(source.fitnessCanonical,/setInterval/);
  assert.match(source.fitnessCanonical,/Routine Summary/);
  assert.match(source.fitnessCanonical,/data-canonical-fitness-view/);
  assert.match(source.fitnessCanonical,/function stableHtml/);
  assert.match(source.fitnessCanonical,/function weeklyCalendar/);
  assert.match(source.fitnessVisibility,/My Routine Visibility/);
  assert.doesNotMatch(source.fitnessVisibility,/MutationObserver|setInterval/);
});

test('Calisthenics exercise selection is searchable and the catalogue includes Side Lunges plus broad bodyweight families', () => {
  assert.match(source.fitnessPlans,/add\('Side Lunges'/);
  assert.match(source.fitnessPlans,/ex-search-input/);
  assert.match(source.fitnessPlans,/calisthenicsExerciseOptions/);
  assert.match(source.fitnessPlans,/type = 'search'/);
  assert.match(source.fitnessPlans,/listObserver\.observe\(list,\{ childList:true \}\)/);
  assert.doesNotMatch(source.fitnessPlans,/observe\(document\.documentElement/);
  [
    'Pike Push-Ups',
    'Parallel-Bar Dips',
    'Sliding Hamstring Curls',
    'Tibialis Raises',
    'Copenhagen Plank - Short Lever',
    'Bear Crawl',
    'Burpees',
    'L-Sit Hold',
    '90/90 Hip Switches'
  ].forEach((exercise) => assert.match(source.fitnessPlans,new RegExp(exercise.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'))));
  assert.match(source.fitnessFamilyFilter,/family\.key/);
});

test('Calisthenics generator has one aligned responsive grid and hides only the native source select', () => {
  assert.match(source.fitnessCss,/grid-template-columns:minmax\(340px,2\.15fr\)/);
  assert.match(source.fitnessCss,/align-items:end!important/);
  assert.match(source.fitnessCss,/\.ex-search-input/);
  assert.match(source.fitnessCss,/\.ex-select-source\[hidden\]\{display:none!important\}/);
  assert.match(source.fitnessCss,/@media \(max-width:900px\)/);
  assert.match(source.fitnessCss,/@media \(max-width:650px\)/);
});

test('Routine API changes remain valid PHP', () => {
  [paths.skincareApi,paths.fitnessVisibilityApi].forEach((path) => {
    const checked = spawnSync('php',['-l',path.pathname],{ encoding:'utf8' });
    assert.equal(checked.status,0,checked.stderr || checked.stdout);
  });
  assert.match(source.fitnessVisibility,/routine_visibility\.php/);
});

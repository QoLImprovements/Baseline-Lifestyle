import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

const plans=read('systems/baseline-fitness/js/fitness-multiple-plans.js');
const page=read('systems/baseline-fitness/baseline-fitness.html');
const fitnessState=read('systems/baseline-fitness/api/fitness_state.php');
const getPlan=read('systems/baseline-fitness/api/get_plan.php');

test('Calisthenics plan selection has one controller and one clean Routine Plan route',()=>{
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-plan-selection-continuity-v1.js')),false);
  assert.doesNotMatch(page,/fitness-plan-selection-continuity-v1\.js/);
  assert.match(plans,/async function openPlan\(planId\)/);
  assert.match(plans,/saveSelectedPlanId/);
  assert.match(plans,/\/baseline-fitness\/my-routine\/plan/);
  assert.match(plans,/activateTopView\?\.\('plan',true\)/);
  assert.doesNotMatch(plans,/localStorage|sessionStorage|fitnessPlanSelectionContinuity/);
});

test('selected plan identity is account-backed before in-place loading',()=>{
  assert.match(fitnessState,/'save_selected_plan'/);
  assert.match(fitnessState,/'selectedPlanId'/);
  assert.match(plans,/const saved=await setSelectedPlanId\(id\)/);
  assert.match(plans,/if\(owner!=='guest'&&!saved\)return/);
  assert.match(plans,/await global\.BASELINE_fitnessWorkout\?\.reloadSelectedPlan\?\.\(\)/);
});

test('plan-card disclosure is owned by the canonical Routine structure',()=>{
  const structure=read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-routine-plan-collapse-v1.js')),false);
  assert.doesNotMatch(page,/fitness-routine-plan-collapse-v1\.js/);
  assert.match(structure,/details\[data-fitness-plan-card="\$\{next\}"\]/);
  assert.match(structure,/if \(card\) card\.open=true/);
});

test('Create Another Plan uses an explicit clean-route create request, not browser persistence',()=>{
  assert.match(plans,/url\.searchParams\.set\('new-plan','1'\)/);
  assert.match(plans,/setCreatingPlan\(true\)/);
  assert.doesNotMatch(plans,/Date\.now\(\).*new-plan/);
});


test('plan-name writes are bound to the selected plan identity',()=>{
  assert.match(plans,/function planNameForWrite\(raw,planId=0\)/);
  assert.match(plans,/boundId===String\(id\) && original===stored/);
  assert.match(plans,/targetPlanId=url\.pathname\.endsWith\('\/plan_update\.php'\)/);
  assert.match(plans,/input\.dataset\.originalName=stored/);
});


test('selected-plan persistence refreshes and retries after a Saved Data revision conflict',()=>{
  const bridge=read('systems/baseline-fitness/js/fitness-saved-data-bridge.js');
  assert.match(bridge,/if\(result\?\.error==='revision_conflict'\)/);
  assert.match(bridge,/const refreshed=await reload\(\)/);
  assert.match(bridge,/result=await post\(\{action:'save_selected_plan',selectedPlanId:next\}\)/);
});


test('selected plan is resolved by the Saved Data server, not a client fetch interceptor',()=>{
  assert.match(getPlan,/\$selectedPlanId = max\(0, \(int\)\(\$resource\['data'\]\['selectedPlanId'\] \?\? 0\)\)/);
  assert.match(getPlan,/\$effectivePlanId = \$requestedPlanId > 0 \? \$requestedPlanId : \$selectedPlanId/);
  assert.doesNotMatch(plans,/pathname\.endsWith\('\/get_plan\.php'\)/);
  assert.doesNotMatch(plans,/url\.searchParams\.set\('planId'/);
});


test('Fitness plans are physically isolated and dropdown order is alphabetical',()=>{
  const resource=read('systems/baseline-fitness/api/fitness_resource.php');
  const listPlans=read('systems/baseline-fitness/api/list_plans.php');
  const recovery=read('sitewide/migration/build_sqlite_rollback_copy.php');
  const health=read('sitewide/migration/verify_saved_data_live_health.php');

  assert.match(resource,/function bl_fitness_plans_directory\(int \$uid\)/);
  assert.match(resource,/'Fitness',\s*'Plans'/);
  assert.match(resource,/sprintf\('%06d\.json', \$planId\)/);
  assert.match(resource,/bl_fitness_plan_files_sync\(\$uid, \$plans\)/);
  assert.match(listPlans,/strnatcasecmp\(\(string\)\(\$left\['name'\]/);
  assert.match(recovery,/function bl_rollback_fitness_plans/);
  assert.match(recovery,/'\/Fitness\/Plans'/);
  assert.match(health,/Fitness\/Plans\/\[0-9\]\{6\}/);
});


test('Fitness runtime loads plans only from per-plan files after migration',()=>{
  const resource=read('systems/baseline-fitness/api/fitness_resource.php');
  assert.match(resource,/\$resource\['data'\]\['plans'\] = bl_fitness_plan_files_read\(\$uid\);/);
  assert.doesNotMatch(resource,/if\(\(\$resource\['data'\]\['plans'\] \?\? \[\]\) === \[\]\)/);
});


test('Fitness startup never writes or renders an invented default plan',()=>{
  const listPlans=read('systems/baseline-fitness/api/list_plans.php');
  assert.match(listPlans,/'selectedPlanId'=>\$selectedPlanId/);
  assert.doesNotMatch(plans,/if\(!selectedPlanId\(\)&&plans\[0\]\)await setSelectedPlanId/);
  assert.doesNotMatch(plans,/selectedPlan\(\).*\|\| plans\[0\]/);
  assert.match(plans,/selectedPlanMemory=Math\.max\(0,Number\(data\?\.selectedPlanId\)\|\|0\)/);
});


test('Fitness first paint stays neutral until authoritative plan state resolves',()=>{
  const app=read('systems/baseline-fitness/js/baseline-fitness-app.js');
  assert.match(app,/let planStateResolved/);
  assert.match(app,/const showSaved = planStateResolved && hasPlan && generatorMode === 'view'/);
  assert.match(app,/const showGenerator = planStateResolved && !showSaved/);
  assert.match(plans,/let plansResolved = false/);
  assert.match(plans,/Loading plans…/);
  assert.match(plans,/select\.disabled=!plansResolved \|\| !data\.length/);
});


test('Fitness My Routine has one route and visibility owner',()=>{
  const workspace=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
  const structure=read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');

  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-routine-workspace.js')),false);
  assert.doesNotMatch(page,/fitness-routine-workspace\.js/);
  assert.match(structure,/canonical My Routine structure adapter/);
  assert.doesNotMatch(workspace,/\$\$\('\.fitness-routine-panel'\).*panel\.hidden/);
  assert.match(workspace,/BASELINE_fitnessRoutineStructure\.activateTopView/);
});

test('Fitness plan deletion has one canonical path',()=>{
  const app=read('systems/baseline-fitness/js/baseline-fitness-app.js');
  const deleteApi=read('systems/baseline-fitness/api/delete_plan.php');

  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-plan-delete-continuity-v1.js')),false);
  assert.doesNotMatch(page,/fitness-plan-delete-continuity-v1\.js/);
  assert.doesNotMatch(plans,/pathname\.endsWith\('\/delete_plan\.php'\)/);
  assert.match(app,/await global\.BASELINE_fitnessPlans\?\.refresh\?\.\(\)/);
  assert.match(deleteApi,/'selectedPlanId'=>max\(0,/);
});

test('Fitness workspace builds the canonical shell directly and reveals it atomically',()=>{
  const workspace=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
  assert.match(workspace,/data-fitness-routine-view="summary"/);
  assert.match(workspace,/data-fitness-routine-view="plan"/);
  assert.match(workspace,/data-fitness-routine-view="public"/);
  assert.match(workspace,/section\.replaceChildren\(shell\);\s*section\.dataset\.routineWorkspaceV2 = 'true';/s);
});

test('Fitness Routine CSS has one Fitness-owned entry point',()=>{
  const routineCss=read('systems/baseline-fitness/css/fitness-routine-workspace.css');
  const obsolete=[
    'fitness-routine-workspace-v2.css',
    'fitness-routine-sitewide-v3.css',
    'fitness-routine-plan-collapse-v1.css',
    'fitness-routine-groups-collapsible-v1.css',
    'fitness-routine-summary-v2.css'
  ];
  for(const name of obsolete){
    assert.equal(existsSync(url('systems/baseline-fitness/css/'+name)),false);
    assert.equal(routineCss.includes(name),false);
  }
  assert.match(page,/baseline-routine-coherence-v12\.css/);
  assert.doesNotMatch(routineCss,/@import url\('\/systems\/baseline-fitness\/css\//);
});

test('dead Fitness compatibility assets stay deleted',()=>{
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-exercise-picker-safety-v1.js')),false);
});


test('switching saved Fitness plans is in-place, not a page navigation',()=>{
  const app=read('systems/baseline-fitness/js/baseline-fitness-app.js');
  assert.match(app,/reloadSelectedPlan: \(\) => ensurePlanLoaded\(true\)/);
  assert.match(plans,/await global\.BASELINE_fitnessWorkout\?\.reloadSelectedPlan\?\.\(\)/);
  assert.doesNotMatch(plans,/openPlan[\s\S]{0,700}location\.assign/);
});

test('Routine Groups are born collapsed rather than corrected after paint',()=>{
  const groups=read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
  assert.match(groups,/card\.open = false/);
  assert.doesNotMatch(groups,/card\.open = true/);
});


test('Fitness single-authority assets use a fresh shared cache key',()=>{
  for(const asset of ['baseline-fitness.css','fitness-routine-workspace.css','fitness-multiple-plans.js','baseline-fitness-app.js','fitness-routine-structure-v4.js','fitness-routine-workspace-v2.js','fitness-routine-groups-v2.js']){
    assert.ok(page.includes(asset+'?v=FITNESS_SINGLE_AUTHORITY_20261016_1'),asset+' should use the current Fitness cache key');
  }
});

test('canonical Routine structure alone owns top Routine tab clicks',()=>{
  const workspace=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
  assert.doesNotMatch(workspace,/closest\('\[data-fitness-routine-view\],\[data-open-fitness-view\]'\)/);
  assert.match(workspace,/closest\('\[data-open-fitness-view\]'\)/);
});

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root=process.cwd();
const read=(file)=>fs.readFileSync(path.join(root,file),'utf8');

test('all page-like nested views have canonical URL and browser-history ownership',()=>{
  const shared=read('sitewide/js/baseline-shared.js');
  const fitness=read('systems/baseline-fitness/js/baseline-fitness-app.js');
  const fitnessRoutine=read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
  const skincareRoutine=read('systems/baseline-natural-skincare/js/skincare-routine.js');
  const massage=read('systems/baseline-massage/baseline-massage.html');
  const badminton=read('systems/baseline-badminton-session/js/badminton-session-game-plan.js');
  const games=read('systems/baseline-games-hub/js/baseline-games-hub-core.js');
  const puzzles=read('systems/baseline-games-hub/puzzles/shared/js/puzzles-library.js');
  const realm=read('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-entry.js');

  assert.match(fitness,/PLAN_ROUTE_RE/);
  assert.match(fitness,/history\.pushState\(\{ fitnessTab:'my-plan', planView:activePlanSubtab \}/);
  assert.match(shared,/baseline-fitness\\\/my-plan/);

  assert.match(fitnessRoutine,/historyMode==='push'\) global\.history\.pushState/);
  assert.match(skincareRoutine,/mode==='push'\) global\.history\.pushState/);

  assert.match(massage,/planner-mode/);
  assert.match(massage,/activatePlannerMode\(btn\.dataset\.plannerMode, 'push'\)/);
  assert.match(massage,/addEventListener\('popstate'/);

  assert.match(badminton,/gameplan-view/);
  assert.match(badminton,/activateGamePlanSubtab\(button\.getAttribute\('data-gameplan-tab'\), 'push'\)/);
  assert.match(badminton,/addEventListener\('popstate'/);

  assert.match(games,/params\.set\('panel', panelId\)/);
  assert.match(games,/setPairsPanel\(pairPanelBtn\.getAttribute\('data-pairs-panel'\), 'push'\)/);
  assert.match(games,/requestedPanel = new URLSearchParams/);

  assert.match(puzzles,/params\.set\('jigsaw',jigsaw\)/);
  assert.match(puzzles,/showView\('jigsaws',\{historyMode:'push'\}\)/);
  assert.match(puzzles,/addEventListener\('popstate'/);

  assert.match(realm,/ROUTABLE_SCENES/);
  assert.match(realm,/writeRealmSceneRoute/);
  assert.match(realm,/addEventListener\?\.\('popstate'/);

  assert.match(shared,/syncVariantRoute\('push'\)/);
  assert.match(shared,/historyMode:'push'/);
});

test('server routes directly refresh every clean nested Fitness plan URL',()=>{
  const htaccess=read('.htaccess');
  assert.match(htaccess,/baseline-fitness\/my-plan\/\(completed\|future\)/);
});

test('route restoration uses replace while user navigation uses push',()=>{
  const skincare=read('systems/baseline-natural-skincare/js/skincare-routine.js');
  const fitnessRoutine=read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
  assert.match(skincare,/writeViewRoute\(next,'push'\)/);
  assert.match(skincare,/writeViewRoute\(state\.activeView,'replace'\)/);
  assert.match(fitnessRoutine,/historyMode='replace'/);
  assert.match(fitnessRoutine,/historyMode:'push'/);
});

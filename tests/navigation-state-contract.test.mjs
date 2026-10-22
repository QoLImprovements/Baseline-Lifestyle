import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root=process.cwd();
const read=(file)=>fs.readFileSync(path.join(root,file),'utf8');

test('page-like nested navigation is URL-owned and refresh-restorable',()=>{
  const shared=read('sitewide/js/baseline-shared.js');
  const diet=read('systems/baseline-food-approach/js/baseline-diet-log.js');
  const massage=read('systems/baseline-massage/baseline-massage.html');
  const fitness=read('systems/baseline-fitness/js/baseline-fitness-app.js');
  const fitnessRoutine=read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
  const fitnessWorkspace=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
  const skincareRoutine=read('systems/baseline-natural-skincare/js/skincare-routine.js');
  const skincareWorkspace=read('systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js');
  const badminton=read('systems/baseline-badminton-session/js/badminton-session-game-plan.js');
  const games=read('systems/baseline-recreation/js/baseline-recreation-core.js');
  const puzzles=read('systems/baseline-recreation/puzzles/shared/js/puzzles-library.js');
  const jigsawEngine=read('systems/baseline-recreation/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');
  const gameExtensionSupport=read('systems/baseline-recreation/js/game-extension-support.mjs');
  const blockGrid=read('systems/baseline-recreation/games/block-grid/js/block-grid.js');
  const colourSort=read('systems/baseline-recreation/games/colour-sort/js/colour-sort.js');
  const darts=read('systems/baseline-recreation/games/darts-focused/js/darts-focused-shell.js');
  const badmintonFocused=read('systems/baseline-recreation/games/badminton-focused/js/badminton-focused.js');
  const gamesLoader=read('systems/baseline-recreation/js/baseline-recreation-loader.js');
  const realm=read('systems/baseline-recreation/games/baseline-realm/shared/js/realm-entry.js');
  const workshop=read('systems/baseline-recreation/games/baseline-realm/workshop/js/workshop-ui.js');
  const psychology=read('systems/baseline-psychology/js/baseline-psychology.js');

  assert.match(diet,/URLSearchParams\(window\.location\.search/);
  assert.match(diet,/url\.searchParams\.set\("view",state\.activeView\)/);
  assert.match(diet,/url\.searchParams\.set\("date",state\.date\)/);
  assert.match(diet,/addEventListener\("popstate",restoreRouteState\)/);

  assert.match(massage,/library-category/);
  assert.match(massage,/planner-mode/);
  assert.match(massage,/addEventListener\('popstate',restoreMassageNestedRoute\)/);

  assert.match(fitness,/PLAN_ROUTE_RE/);
  assert.match(fitness,/planRoutePath/);
  assert.match(fitnessRoutine,/historyMode==='push'/);
  assert.match(skincareRoutine,/mode==='push'/);

  assert.match(fitnessWorkspace,/calendar-view/);
  assert.match(fitnessWorkspace,/calendar-anchor/);
  assert.match(fitnessWorkspace,/writeCalendarRoute\('push'\)/);
  assert.match(skincareWorkspace,/calendar-view/);
  assert.match(skincareWorkspace,/calendar-anchor/);
  assert.match(skincareWorkspace,/writeCalendarRoute\('push'\)/);

  assert.match(badminton,/gameplan-view/);
  assert.match(badminton,/activateGamePlanSubtab\(button\.getAttribute\('data-gameplan-tab'\), 'push'\)/);

  assert.match(games,/params\.set\('panel', panelId\)/);
  assert.match(games,/requestedPanel = new URLSearchParams/);
  assert.match(games,/setPairsPanel\(pairPanelBtn\.getAttribute\('data-pairs-panel'\), 'push'\)/);

  assert.match(puzzles,/params\.get\('puzzle'\)/);
  assert.match(puzzles,/params\.get\('jigsaw'\)/);
  assert.match(puzzles,/getJigsaw:function\(\)/);
  assert.match(puzzles,/addEventListener\('popstate'/);
  assert.match(jigsawEngine,/function initialPuzzleFromRoute/);
  assert.match(jigsawEngine,/params\.get\('jigsaw'\)/);
  assert.match(jigsawEngine,/BaselinePuzzlesLibrary/);

  assert.match(gameExtensionSupport,/historyMode = 'push'/);
  assert.match(gameExtensionSupport,/`\/baseline-recreation\/games\/\$\{config\.id\}`/);
  assert.match(blockGrid,/blockTabFromLocation/);
  assert.match(blockGrid,/setTab\(tab, 'push'\)/);
  assert.match(colourSort,/colourTabFromLocation/);
  assert.match(colourSort,/setTab\(tab, 'push'\)/);

  assert.match(darts,/DARTS_ROUTE='\/baseline-recreation\/games\/darts-focused'/);
  assert.match(badmintonFocused,/BADMINTON_ROUTE='\/baseline-recreation\/games\/badminton-focused'/);
  assert.match(gamesLoader,/addEventListener\('popstate',syncFocusedRoutes\)/);

  assert.match(realm,/ROUTABLE_SCENES/);
  assert.match(realm,/writeRealmSceneRoute/);
  assert.match(workshop,/workshop-category/);
  assert.match(workshop,/workshop-recipe/);
  assert.match(workshop,/addEventListener\?\.\('popstate', restoreWorkshopRoute\)/);

  assert.match(psychology,/psych-view/);
  assert.match(psychology,/addEventListener\('popstate'/);

  assert.match(shared,/routePageFile === 'baseline-food-approach\.html'/);
  assert.match(shared,/routeParams\.has\('library-category'\)/);
  assert.match(shared,/syncVariantRoute\('push'\)/);
});

test('sitewide cross-page navigation is native and has no duplicate custom redirect stack',()=>{
  const shared=read('sitewide/js/baseline-shared.js');
  assert.equal((shared.match(/function normalisePageHref\(/g)||[]).length,1);
  assert.doesNotMatch(shared,/function navigatePageHref\(/);
  assert.doesNotMatch(shared,/function navigateToSiteHref\(/);
  assert.doesNotMatch(shared,/function navigateSiteHref\(/);
  assert.doesNotMatch(shared,/function resolvedSiteHref\(/);
  assert.doesNotMatch(shared,/function siteTargetFile\(/);
  assert.match(shared,/Let the browser perform normal cross-page navigation/);
});

test('server routes directly refresh canonical nested paths',()=>{
  const htaccess=read('.htaccess');
  assert.match(htaccess,/baseline-fitness\/my-plan\/\(completed\|future\)/);
  assert.match(htaccess,/block-grid\|colour-sort\|darts-focused\|badminton-focused\|baseline-realm/);
});

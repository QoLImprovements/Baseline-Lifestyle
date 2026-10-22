import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const get=(p)=>fs.readFileSync(path.join(root,p),'utf8');

test('Baseline Recreation owns the canonical physical and public system identity',()=>{
  assert.equal(fs.existsSync(path.join(root,'systems/baseline-games-hub')),false);
  assert.equal(fs.existsSync(path.join(root,'systems/baseline-recreation/baseline-recreation.html')),true);
  const html=get('systems/baseline-recreation/baseline-recreation.html');
  assert.match(html,/Baseline Recreation/);
  assert.match(html,/data-app="recreation"/);
  assert.match(html,/data-page="baseline-recreation"/);
  assert.match(html,/data-target="system">System</);
  assert.match(html,/data-target="games">Games</);
  assert.match(html,/data-target="puzzles">Puzzles</);
  assert.match(html,/id="system"/);
  assert.doesNotMatch(html,/Baseline Games Hub|games-hub-theme|data-target="hub"/);
});

test('canonical Recreation routing separates System Games and Puzzles',()=>{
  const core=get('systems/baseline-recreation/js/baseline-recreation-core.js');
  assert.match(core,/return '\/baseline-recreation'/);
  assert.match(core,/base \+ '\/system'/);
  assert.match(core,/base \+ '\/games'/);
  assert.match(core,/base \+ '\/puzzles'/);
  assert.match(core,/currentTab = 'system'/);
  assert.doesNotMatch(core,/gamesHubBaseRoute|currentTab = 'hub'|BASELINE_GAMES_HUB/);
  const puzzles=get('systems/baseline-recreation/puzzles/shared/js/puzzles-library.js');
  assert.match(puzzles,/\/baseline-recreation\/puzzles/);
  assert.match(puzzles,/pathname\+='\/jigsaws'/);
  assert.match(puzzles,/pathname\+='\/crossnumber'/);
});

test('legacy Games Hub URLs remain redirects only',()=>{
  const ht=get('.htaccess');
  assert.match(ht,/baseline-games-hub\/games-hub\/games-list\/\?\$ \/baseline-recreation\/games \[R=301/);
  assert.match(ht,/baseline-games-hub\/games-hub\/puzzles\/\?\$ \/baseline-recreation\/puzzles \[R=301/);
  assert.match(ht,/baseline-games-hub\(\?:\/games-hub\)\?\/\?\$ \/baseline-recreation\/system \[R=301/);
  assert.match(ht,/baseline-recreation\/\(system\|games\|puzzles\)\/\?\$ systems\/baseline-recreation\/baseline-recreation\.html/);
  assert.match(ht,/baseline-recreation\/games\/\(pairs\|detect-the-word/);
  assert.match(ht,/baseline-recreation\/puzzles\/jigsaws\/\[\^\/\]\+\/\?\$/);
});

test('Recreation palette is Burgundy Rose Copper with one hue authority',()=>{
  const themes=get('sitewide/css/baseline-themes.css');
  const recreation=get('systems/baseline-recreation/css/recreation-theme.css');
  const structural=get('systems/baseline-recreation/css/baseline-recreation.css');
  assert.match(themes,/--recreation-mirror:linear-gradient\(90deg,#3A1022 0%,#8B3F5B 25%,#A85D3B 50%,#8B3F5B 75%,#3A1022 100%\)/);
  assert.match(recreation,/Canonical hue values live in sitewide\/css\/baseline-themes\.css/);
  for(const retired of ['#080D22','#1E2759','#4656A6','#526BC2','#8CA7FF','#1A244D','#153d44','#cc694b','#e99455','#f4c56c']){
    assert.equal(recreation.toLowerCase().includes(retired.toLowerCase()),false,retired+' remains in Recreation theme');
    assert.equal(structural.toLowerCase().includes(retired.toLowerCase()),false,retired+' remains in structural Recreation CSS');
  }
});

test('Recreation overview artwork contains no retired Indigo Circuit palette',()=>{
  const assets=[
    'systems/baseline-recreation/games/overview-art/pairs.svg',
    'systems/baseline-recreation/games/overview-art/detect-the-word.svg',
    'systems/baseline-recreation/games/overview-art/make-the-number.svg',
    'systems/baseline-recreation/games/overview-art/track-the-coin.svg',
    'systems/baseline-recreation/games/overview-art/rule-shift.svg',
    'systems/baseline-recreation/games/overview-art/baseline-realm.svg',
    'systems/baseline-recreation/games/darts-focused/art/realistic-dartboard.svg',
    'systems/baseline-recreation/games/badminton-focused/art/badminton-focused-overview.svg'
  ];
  const retired=/#080D22|#1E2759|#4656A6|#526BC2|#8CA7FF|#1A244D|#2A3672|#F2F5FF|#D5DEF7|#AFC0ED/i;
  for(const asset of assets) assert.doesNotMatch(get(asset),retired,asset);
  const registry=get('systems/baseline-recreation/js/games-registry.js');
  assert.doesNotMatch(registry,/G01_INDIGO_CIRCUIT/);
  assert.match(registry,/RECREATION_BURGUNDY_ROSE_COPPER_20261022_1/);
});
test('top-level identifiers are Recreation while genuine game authorities stay Games',()=>{
  const core=get('systems/baseline-recreation/js/baseline-recreation-core.js');
  const registry=get('systems/baseline-recreation/js/games-registry.js');
  const config=get('systems/baseline-recreation/js/games-core-config.js');
  assert.match(core,/BASELINE_RECREATION_BUILD/);
  assert.match(core,/BASELINE_GAMES_REGISTRY/);
  assert.match(registry,/BASELINE_GAMES_REGISTRY/);
  assert.match(config,/BASELINE_GAMES_CORE_CONFIG/);
  assert.doesNotMatch(core,/data-baseline-games-hub|BASELINE_GAMES_HUB/);
});

test('obsolete Games Hub view persistence is deletion-only compatibility state',()=>{
  const map=JSON.parse(get('sitewide/migration/browser_storage_map.json'));
  const item=map.rules.find((entry)=>entry.id==='legacy-games-hub-view');
  assert.ok(item);
  assert.deepEqual(item.knownKeys,['baselineGamesHubView']);
  assert.equal(item.decision,'delete-on-load');
  const core=get('systems/baseline-recreation/js/baseline-recreation-core.js');
  const migration=get('systems/baseline-recreation/js/recreation-legacy-state-migration.js');
  assert.doesNotMatch(core,/localStorage|sessionStorage|baselineGamesHubView/);
  assert.match(migration,/removeItem\(key\)/);
  assert.match(migration,/baselineGamesHubView/);
});

test('active Recreation runtime contains no stale Games Hub container identity',()=>{
  const runtimeExt=new Set(['.html','.css','.js','.mjs','.cjs','.php']);
  const allowed=new Set([
    path.join(root,'systems/baseline-recreation/js/recreation-legacy-state-migration.js')
  ]);
  const failures=[];
  function walk(dir){
    for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
      const full=path.join(dir,entry.name);
      if(entry.isDirectory()) walk(full);
      else if(runtimeExt.has(path.extname(full).toLowerCase()) && !allowed.has(full)){
        const source=fs.readFileSync(full,'utf8');
        if(/Baseline Games Hub|Games Hub|BASELINE_GAMES_HUB|GAMES_HUB_|gamesHub[A-Z]|data-baseline-games-hub|baseline-games-hub/i.test(source)){
          failures.push(path.relative(root,full));
        }
      }
    }
  }
  walk(path.join(root,'systems/baseline-recreation'));
  for(const p of ['index.html','sitewide/js/baseline-shared.js','sitewide/page-shell.php','sitewide/css/baseline-themes.css']){
    const source=get(p);
    if(/Baseline Games Hub|Games Hub|BASELINE_GAMES_HUB|GAMES_HUB_|gamesHub[A-Z]|data-baseline-games-hub|\/baseline-games-hub\//i.test(source)){
      failures.push(p);
    }
  }
  assert.deepEqual(failures,[]);
});

import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const oldRoot=path.join(root,'systems','baseline-games-hub');
const newRoot=path.join(root,'systems','baseline-recreation');
if(!fs.existsSync(oldRoot)) throw new Error('Old Recreation source folder missing');
if(fs.existsSync(newRoot)) throw new Error('New Recreation folder already exists');
fs.renameSync(oldRoot,newRoot);

function move(a,b){
  const from=path.join(root,a),to=path.join(root,b);
  if(!fs.existsSync(from)) return;
  fs.mkdirSync(path.dirname(to),{recursive:true});
  fs.renameSync(from,to);
}
const renames=[
['systems/baseline-recreation/baseline-games-hub.html','systems/baseline-recreation/baseline-recreation.html'],
['systems/baseline-recreation/css/baseline-games-hub.css','systems/baseline-recreation/css/baseline-recreation.css'],
['systems/baseline-recreation/css/games-hub-theme.css','systems/baseline-recreation/css/recreation-theme.css'],
['systems/baseline-recreation/js/baseline-games-hub-core.js','systems/baseline-recreation/js/baseline-recreation-core.js'],
['systems/baseline-recreation/js/baseline-games-hub-guard.js','systems/baseline-recreation/js/baseline-recreation-guard.js'],
['systems/baseline-recreation/js/baseline-games-hub-v14.js','systems/baseline-recreation/js/baseline-recreation-loader.js'],
['systems/baseline-recreation/js/baseline-games-hub.js','systems/baseline-recreation/js/baseline-recreation.js'],
['systems/baseline-recreation/js/games-hub-modal.js','systems/baseline-recreation/js/games-help-modal.js'],
['systems/baseline-recreation/rules/games-system-rules.md','systems/baseline-recreation/rules/recreation-system-rules.md'],
['tests/baseline-games-hub-core-controls.spec.js','tests/baseline-recreation-core-controls.spec.js'],
['tests/baseline-games-hub-independent-core.spec.js','tests/baseline-recreation-independent-core.spec.js'],
['tests/baseline-games-hub-loader-cache.test.mjs','tests/baseline-recreation-loader-cache.test.mjs'],
['tests/baseline-games-hub-meridian-canonical.spec.js','tests/baseline-recreation-meridian-canonical.spec.js'],
['tests/baseline-games-hub-registry.test.mjs','tests/games-registry.test.mjs'],
['tests/baseline-games-hub-round-stability.test.mjs','tests/games-round-stability.test.mjs'],
['tests/baseline-games-hub-startup-resilience.spec.js','tests/baseline-recreation-startup-resilience.spec.js'],
['tests/games-hub-core-config.test.mjs','tests/games-core-config.test.mjs'],
['tests/games-hub-profile-rules.test.mjs','tests/games-profile-rules.test.mjs'],
['tests/games-hub-progression.test.mjs','tests/games-progression.test.mjs'],
['tests/games-hub-remaining-improvements.test.mjs','tests/recreation-remaining-improvements.test.mjs'],
['tests/games-theme.test.mjs','tests/recreation-theme.test.mjs'],
['tests/puzzle-games-hub-integration.test.mjs','tests/puzzle-recreation-integration.test.mjs']
];
for(const pair of renames) move(pair[0],pair[1]);

const fileNames=[
['baseline-games-hub.html','baseline-recreation.html'],
['baseline-games-hub.css','baseline-recreation.css'],
['games-hub-theme.css','recreation-theme.css'],
['baseline-games-hub-core.js','baseline-recreation-core.js'],
['baseline-games-hub-guard.js','baseline-recreation-guard.js'],
['baseline-games-hub-v14.js','baseline-recreation-loader.js'],
['baseline-games-hub.js','baseline-recreation.js'],
['games-hub-modal.js','games-help-modal.js'],
['games-system-rules.md','recreation-system-rules.md'],
['baseline-games-hub-core-controls.spec.js','baseline-recreation-core-controls.spec.js'],
['baseline-games-hub-independent-core.spec.js','baseline-recreation-independent-core.spec.js'],
['baseline-games-hub-loader-cache.test.mjs','baseline-recreation-loader-cache.test.mjs'],
['baseline-games-hub-meridian-canonical.spec.js','baseline-recreation-meridian-canonical.spec.js'],
['baseline-games-hub-registry.test.mjs','games-registry.test.mjs'],
['baseline-games-hub-round-stability.test.mjs','games-round-stability.test.mjs'],
['baseline-games-hub-startup-resilience.spec.js','baseline-recreation-startup-resilience.spec.js'],
['games-hub-core-config.test.mjs','games-core-config.test.mjs'],
['games-hub-profile-rules.test.mjs','games-profile-rules.test.mjs'],
['games-hub-progression.test.mjs','games-progression.test.mjs'],
['games-hub-remaining-improvements.test.mjs','recreation-remaining-improvements.test.mjs'],
['games-theme.test.mjs','recreation-theme.test.mjs'],
['puzzle-games-hub-integration.test.mjs','puzzle-recreation-integration.test.mjs']
];
const ids=[
['BASELINE_GAMES_HUB_GAME_REGISTRY','BASELINE_GAMES_REGISTRY'],
['BASELINE_GAMES_HUB_CORE_CONFIG','BASELINE_GAMES_CORE_CONFIG'],
['BASELINE_GAMES_HUB_PROFILE_RULES','BASELINE_GAMES_PROFILE_RULES'],
['BASELINE_GAMES_HUB_PROGRESSION','BASELINE_GAMES_PROGRESSION'],
['BASELINE_GAMES_HUB_CORE_READY','BASELINE_RECREATION_CORE_READY'],
['BASELINE_GAMES_HUB_CORE_DEPENDENCIES','BASELINE_RECREATION_CORE_DEPENDENCIES'],
['BASELINE_GAMES_HUB_INITIAL_RENDER_READY','BASELINE_RECREATION_INITIAL_RENDER_READY'],
['BASELINE_GAMES_HUB_BUILD','BASELINE_RECREATION_BUILD'],
['BaselineGamesHubModal','BaselineGamesHelpModal'],
['GAMES_HUB_MODAL','GAMES_HELP_MODAL'],
['baseline:games-hub:core-ready','baseline:recreation:core-ready'],
['data-baseline-games-hub-','data-baseline-recreation-'],
['data-games-hub-theme','data-recreation-theme'],
['baselineGamesHubLoader','baselineRecreationLoader'],
['gamesHubBaseRoute','recreationBaseRoute'],
['gamesHubCleanRouteForState','recreationCleanRouteForState'],
['gamesHubStateFromCleanPath','recreationStateFromCleanPath'],
['legacyGamesHubStateFromHash','legacyRecreationStateFromHash'],
['pushGamesHubGameEntry','pushRecreationGameEntry'],
['ensureGamesHubBackEntry','ensureRecreationBackEntry'],
['gamesHubInfoModal','gamesHelpInfoModal']
];
const gameSlugs=['pairs','detect-the-word','make-the-number','track-the-coin','rule-shift','block-grid','colour-sort','darts-focused','badminton-focused','baseline-realm'];

function walk(dir,out=[]){
 for(const e of fs.readdirSync(dir,{withFileTypes:true})){
  if(e.name==='.git'||e.name==='node_modules') continue;
  const f=path.join(dir,e.name);
  if(e.isDirectory()) walk(f,out); else out.push(f);
 }
 return out;
}
function textFile(f){
 const b=path.basename(f);
 return b==='.htaccess'||b==='package.json'||b==='package-lock.json'||/\.(html?|css|js|mjs|cjs|php|json|md|txt|ya?ml|xml|svg)$/i.test(f);
}
function ra(s,a,b){ return s.split(a).join(b); }

for(const f of walk(root).filter(textFile)){
 const rel=path.relative(root,f).replace(/\\/g,'/');
 if(rel==='.htaccess') continue;
 let c=fs.readFileSync(f,'utf8');
 for(const slug of gameSlugs) c=ra(c,'/baseline-games-hub/games-hub/'+slug,'/baseline-recreation/games/'+slug);
 c=ra(c,'/baseline-games-hub/games-hub/games-list','/baseline-recreation/games');
 c=ra(c,'/baseline-games-hub/games-hub/puzzles','/baseline-recreation/puzzles');
 c=ra(c,'/baseline-games-hub/games-hub','/baseline-recreation/system');
 for(const p of fileNames) c=ra(c,p[0],p[1]);
 c=ra(c,'systems/baseline-games-hub','systems/baseline-recreation');
 c=ra(c,'baseline-games-hub','baseline-recreation');
 for(const p of ids) c=ra(c,p[0],p[1]);
 c=ra(c,'Baseline Games Hub','Baseline Recreation');
 c=ra(c,'Games Hub','Recreation');
 c=ra(c,'data-app="games"','data-app="recreation"');
 c=ra(c,"data-app='games'","data-app='recreation'");
 c=ra(c,'[data-app="games"]','[data-app="recreation"]');
 c=ra(c,"[data-app='games']","[data-app='recreation']");
 c=ra(c,'data-target="hub"','data-target="system"');
 c=ra(c,"data-target='hub'","data-target='system'");
 c=ra(c,'id="hub"','id="system"');
 c=ra(c,"id='hub'","id='system'");
 c=ra(c,'#tab=hub','#tab=system');
 c=ra(c,'hub-summary-grid','system-summary-grid');
 fs.writeFileSync(f,c);
}

console.log('Bulk Baseline Recreation migration complete');

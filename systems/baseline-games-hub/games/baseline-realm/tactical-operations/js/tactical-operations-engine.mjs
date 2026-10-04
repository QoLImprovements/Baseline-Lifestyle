export const TACTICAL_SAVE_VERSION = 2;
export const TACTICAL_MISSION_ID = 'watchtower-break';
export const MISSION_TYPES = Object.freeze(['elimination','defence','escape','rescue','capture','survival','boss']);
export const MISSION_ORDER = Object.freeze(['watchtower-break','cinderline-sweep','hearthwall-hold','quarry-extraction','lantern-rescue','fogbound-vigil','hollow-crown-siege']);

export const JOBS = Object.freeze({
  warder:{id:'warder',name:'Warder',move:3,jump:1,baseHp:62,baseAtk:12,speed:8,learned:['Guard Line'],reaction:'Brace',support:'Shield Bearing',movement:'Measured Climb'},
  emberwright:{id:'emberwright',name:'Emberwright',move:3,jump:1,baseHp:45,baseAtk:15,speed:7,learned:['Cinder Field'],reaction:'Heat Veil',support:'Workshop Catalysts',movement:'Ash Step'},
  pathfinder:{id:'pathfinder',name:'Pathfinder',move:4,jump:2,baseHp:48,baseAtk:11,speed:10,learned:['Mark Lane'],reaction:'Sidestep',support:'High Ground Reading',movement:'Vault'},
  fieldmender:{id:'fieldmender',name:'Fieldmender',move:3,jump:1,baseHp:42,baseAtk:8,speed:9,learned:['Mend Pulse'],reaction:'First Aid',support:'Supply Counting',movement:'Calm Steps'},
  ruinblade:{id:'ruinblade',name:'Ruin Blade',move:3,jump:1,baseHp:38,baseAtk:10,speed:7,learned:['Jagged Cut'],reaction:'Spite Guard',support:'Pack Tactics',movement:'Scramble'},
  crownwarden:{id:'crownwarden',name:'Crown Warden',move:3,jump:2,baseHp:92,baseAtk:18,speed:9,learned:['Crownfall','Root Break'],reaction:'Hollow Guard',support:'Warden Presence',movement:'Deepwood Stride'}
});

export const ROSTER = Object.freeze([
  {id:'sera',name:'Sera Vale',job:'warder',jobLevel:2,level:3,xp:20,equipment:{weapon:'watch-pike',armour:'field-coat'}},
  {id:'orin',name:'Orin Flint',job:'emberwright',jobLevel:2,level:3,xp:10,equipment:{weapon:'spark-focus',armour:'travel-wrap'}},
  {id:'mara',name:'Mara Reed',job:'pathfinder',jobLevel:2,level:3,xp:45,equipment:{weapon:'range-bow',armour:'scout-cloak'}},
  {id:'teo',name:'Teo Lark',job:'fieldmender',jobLevel:1,level:2,xp:70,equipment:{weapon:'hearth-staff',armour:'linen-guard'}},
  {id:'bryn',name:'Bryn Ash',job:'warder',jobLevel:1,level:2,xp:35,equipment:{weapon:'short-spear',armour:'patched-mail'}},
  {id:'nyx',name:'Nyx Hollow',job:'pathfinder',jobLevel:1,level:2,xp:5,equipment:{weapon:'hook-knife',armour:'dark-cloak'}}
]);

export const WORKSHOP_LOADOUT = Object.freeze({
  equipment:[
    {id:'watch-pike',name:'Watch Pike',slot:'weapon',power:4},{id:'spark-focus',name:'Spark Focus',slot:'weapon',power:5},
    {id:'range-bow',name:'Range Bow',slot:'weapon',power:3,rangeBonus:1},{id:'hearth-staff',name:'Hearth Staff',slot:'weapon',power:2,mendBonus:7},
    {id:'field-coat',name:'Field Coat',slot:'armour',hp:8},{id:'scout-cloak',name:'Scout Cloak',slot:'armour',hp:4,speed:1}
  ],
  consumables:[{id:'tonic',name:'Workshop Tonic',amount:3,effect:'Restore 22 HP'},{id:'sight-flare',name:'Sight Flare',amount:2,effect:'Reveal line of sight lanes'}]
});

const P = Object.freeze([{id:'sera',x:1,y:6,facing:'NE'},{id:'orin',x:0,y:5,facing:'NE'},{id:'mara',x:2,y:6,facing:'NE'},{id:'teo',x:1,y:7,facing:'NE'},{id:'bryn',x:0,y:7,facing:'NE'},{id:'nyx',x:2,y:7,facing:'NE'}]);
const enemy=(id,name,job,level,x,y)=>({id,name,job,level,x,y,facing:'SW'});
const mission=(d)=>Object.freeze({width:8,height:8,roundLimit:0,targetRounds:0,failOnAnyPlayerDown:false,obstacles:[],zones:[],captureTile:{x:6,y:1},deployments:{player:P,enemy:[]},reward:{coins:75,materials:{},items:{}},...d});

export const MISSION_DEFINITIONS = Object.freeze({
  'watchtower-break':mission({id:'watchtower-break',name:'Watchtower Break',type:'capture',objectiveLabel:'Signal tile',objective:'Capture the signal tile at the upper watchtower.',defeat:'The full party is defeated before the signal is secured.',terrain:['00112223','0011#223','01112233','011#2233','00111223','00#11122','00011112','00001112'],obstacles:[{x:4,y:1,type:'wall'},{x:3,y:3,type:'pillar'},{x:2,y:5,type:'rubble'}],zones:[{x:5,y:2,radius:1,type:'ember',turns:3,label:'Cinder status zone'}],deployments:{player:P,enemy:[enemy('glaive-a','Glaive Poacher','ruinblade',2,5,1),enemy('glaive-b','Ridge Cutter','ruinblade',2,6,3),enemy('snare-c','Snare Lookout','pathfinder',2,4,4)]},reward:{coins:75,materials:{ridge_stone:2},items:{signal_map:1}}}),
  'cinderline-sweep':mission({id:'cinderline-sweep',name:'Cinderline Sweep',type:'elimination',objectiveLabel:'Hostile camp',objective:'Eliminate the raider line controlling the ash road.',defeat:'The deployed party is eliminated.',captureTile:{x:6,y:2},terrain:['00011122','00111222','0111#223','01112233','0011#223','00011222','00001112','00000111'],obstacles:[{x:4,y:2,type:'burnt-cart'},{x:4,y:4,type:'wall'}],zones:[{x:5,y:3,radius:1,type:'ember',turns:4,label:'Ash flare'}],deployments:{player:P,enemy:[enemy('cinder-a','Cinder Blade','ruinblade',3,5,2),enemy('cinder-b','Ash Hook','pathfinder',3,6,3),enemy('cinder-c','Road Breaker','warder',3,5,5),enemy('cinder-d','Coal Runner','ruinblade',2,7,4)]},reward:{coins:90,materials:{charcoal:3,iron_ore:1},items:{}}}),
  'hearthwall-hold':mission({id:'hearthwall-hold',name:'Hearthwall Hold',type:'defence',objectiveLabel:'Hearth beacon',objective:'Keep the hearth beacon uncontested through round 5.',defeat:'The party is eliminated or an enemy occupies the beacon.',targetRounds:5,captureTile:{x:3,y:3},terrain:['00111100','01122110','11233211','11233211','11233211','01122110','00111100','00011000'],obstacles:[{x:2,y:3,type:'barricade'},{x:4,y:3,type:'barricade'}],deployments:{player:P,enemy:[enemy('hold-a','Hearth Rusher','ruinblade',3,7,0),enemy('hold-b','Hearth Rusher','ruinblade',3,7,3),enemy('hold-c','Ridge Archer','pathfinder',3,6,6)]},reward:{coins:105,materials:{hard_wood:3,linen:2},items:{hearth_seal:1}}}),
  'quarry-extraction':mission({id:'quarry-extraction',name:'Quarry Extraction',type:'escape',objectiveLabel:'Extraction point',objective:'Move any surviving party member to the far extraction tile.',defeat:'The party is eliminated before extraction.',roundLimit:8,captureTile:{x:7,y:0},terrain:['00112345','0011#345','01122345','0112#334','00112234','00#11223','00011122','00001112'],obstacles:[{x:4,y:1,type:'crane'},{x:4,y:3,type:'cut'},{x:2,y:5,type:'rubble'}],deployments:{player:P,enemy:[enemy('quarry-a','Quarry Guard','warder',4,5,2),enemy('quarry-b','Stone Bow','pathfinder',4,6,4),enemy('quarry-c','Cut Runner','ruinblade',3,4,5)]},reward:{coins:120,materials:{iron_ore:3,ridge_stone:3},items:{}}}),
  'lantern-rescue':mission({id:'lantern-rescue',name:'Lantern Rescue',type:'rescue',objectiveLabel:'Rescue lantern',objective:'Reach the trapped scout’s lantern before round 7.',defeat:'The party is eliminated or the rescue window closes.',roundLimit:7,captureTile:{x:6,y:1},terrain:['00122233','0112#233','01122233','0011#223','00111223','00011122','00001112','00000111'],obstacles:[{x:4,y:1,type:'collapsed-tree'},{x:4,y:3,type:'root-wall'}],zones:[{x:6,y:1,radius:1,type:'lantern',turns:99,label:'Rescue signal'}],deployments:{player:P,enemy:[enemy('rescue-a','Lantern Snare','pathfinder',4,5,1),enemy('rescue-b','Root Blade','ruinblade',4,6,3),enemy('rescue-c','Moss Guard','warder',4,4,4)]},reward:{coins:135,materials:{healing_herb:4,leather_strip:2},items:{scout_lantern:1}}}),
  'fogbound-vigil':mission({id:'fogbound-vigil',name:'Fogbound Vigil',type:'survival',objectiveLabel:'Vigil circle',objective:'Remain operational through round 6 while the fog pressure advances.',defeat:'The full party is eliminated.',targetRounds:6,captureTile:{x:3,y:3},terrain:['01111110','11222211','12233221','12344321','12344321','12233221','11222211','01111110'],obstacles:[{x:2,y:2,type:'fog-stone'},{x:5,y:2,type:'fog-stone'},{x:2,y:5,type:'fog-stone'},{x:5,y:5,type:'fog-stone'}],zones:[{x:3,y:3,radius:2,type:'fog',turns:99,label:'Vigil boundary'}],deployments:{player:P,enemy:[enemy('fog-a','Fog Stalker','ruinblade',5,7,0),enemy('fog-b','Fog Stalker','ruinblade',5,7,7),enemy('fog-c','Mist Archer','pathfinder',5,5,0),enemy('fog-d','Mist Archer','pathfinder',5,5,7)]},reward:{coins:150,materials:{clear_water:4,ember_root:2},items:{vigil_charm:1}}}),
  'hollow-crown-siege':mission({id:'hollow-crown-siege',name:'Hollow-Crown Siege',type:'boss',objectiveLabel:'Warden dais',objective:'Defeat the Hollow-Crown Warden and break the siege.',defeat:'The full party is eliminated before the Warden falls.',captureTile:{x:6,y:1},bossId:'hollow-crown',terrain:['00123456','0112#456','01233456','0123#456','00123345','00112234','00011223','00001112'],obstacles:[{x:4,y:1,type:'crown-root'},{x:4,y:3,type:'crown-root'},{x:6,y:4,type:'stone'}],zones:[{x:6,y:1,radius:2,type:'crown',turns:99,label:'Warden pressure'}],deployments:{player:P,enemy:[enemy('hollow-crown','Hollow-Crown Warden','crownwarden',6,6,1),enemy('crown-a','Crown Rootblade','ruinblade',5,5,3),enemy('crown-b','Crown Lookout','pathfinder',5,7,4)]},reward:{coins:225,materials:{iron_ore:4,hard_wood:4,healing_herb:4},items:{hollow_crown_emblem:1}}})
});

export const tileKey=(x,y)=>`${x},${y}`;
export const activeUnit=(state)=>state.units.find((u)=>u.id===state.activeUnitId)||null;
export const unitAt=(state,x,y)=>state.units.find((u)=>u.hp>0&&u.x===x&&u.y===y)||null;
export const manhattan=(a,b)=>Math.abs(a.x-b.x)+Math.abs(a.y-b.y);
export const facingToVector=(f)=>({NE:[1,-1],SE:[1,1],SW:[-1,1],NW:[-1,-1]})[f]||[0,1];
export const areaTiles=(center,radius=1)=>{const out=[];for(let y=center.y-radius;y<=center.y+radius;y++)for(let x=center.x-radius;x<=center.x+radius;x++)if(Math.abs(center.x-x)+Math.abs(center.y-y)<=radius)out.push({x,y});return out;};

export function createMissionDefinition(id=TACTICAL_MISSION_ID){return JSON.parse(JSON.stringify(MISSION_DEFINITIONS[id]||MISSION_DEFINITIONS[TACTICAL_MISSION_ID]));}
export function getHeight(m,x,y){const row=m.terrain[y];return !row||x<0||x>=m.width||row[x]==='#'?null:Number(row[x]);}
export function isBlocked(m,x,y){return getHeight(m,x,y)===null||m.obstacles.some((o)=>o.x===x&&o.y===y);}

export function makeUnit(seed,faction){
  const job=JOBS[seed.job]||JOBS.warder, weapon=WORKSHOP_LOADOUT.equipment.find((i)=>i.id===seed.equipment?.weapon), armour=WORKSHOP_LOADOUT.equipment.find((i)=>i.id===seed.equipment?.armour), level=Math.max(1,Number(seed.level||1)), hp=job.baseHp+level*4+Number(armour?.hp||0);
  return {...seed,faction,job:job.id,jobName:job.name,jobLevel:Math.max(1,Number(seed.jobLevel||1)),level,xp:Math.max(0,Number(seed.xp||0)),hp,maxHp:hp,atk:job.baseAtk+Number(weapon?.power||0),speed:job.speed+Number(armour?.speed||0),move:job.move,jump:job.jump,attackRange:1+Number(weapon?.rangeBonus||0),learned:[...job.learned],reaction:job.reaction,support:job.support,movement:job.movement,acted:false};
}

const normalise=(value,fallback)=>{const list=Array.isArray(value)?value.filter((id)=>MISSION_ORDER.includes(id)):[];return [...new Set(list.length?list:fallback)];};
const available=(saved,requested)=>{const unlocked=normalise(saved?.unlockedMissions,[TACTICAL_MISSION_ID]), candidate=requested||saved?.selectedMissionId||saved?.missionId||TACTICAL_MISSION_ID;return unlocked.includes(candidate)?candidate:unlocked.at(-1)||TACTICAL_MISSION_ID;};

export function createInitialState({selectedIds=['sera','orin','mara','teo'],saved=null,missionId=null}={}){
  const selectedMission=createMissionDefinition(available(saved,missionId)), picked=ROSTER.filter((u)=>selectedIds.includes(u.id)).slice(0,6), party=picked.length>=4?picked:ROSTER.slice(0,4);
  const units=[...party.map((seed,index)=>makeUnit({...seed,...(selectedMission.deployments.player.find((d)=>d.id===seed.id)||selectedMission.deployments.player[index]||selectedMission.deployments.player[0])},'player')),...selectedMission.deployments.enemy.map((seed)=>makeUnit(seed,'enemy'))];
  const state={version:TACTICAL_SAVE_VERSION,missionId:selectedMission.id,selectedMissionId:selectedMission.id,mission:selectedMission,roster:ROSTER.map((u)=>({...u})),workshop:JSON.parse(JSON.stringify(WORKSHOP_LOADOUT)),units,activeUnitId:null,selectedUnitId:units.find((u)=>u.faction==='player')?.id||null,phase:'playing',log:[`Mission opened: ${selectedMission.name}.`],round:1,turn:0,missionTypes:[...MISSION_TYPES],completedMissions:normalise(saved?.completedMissions,[]),unlockedMissions:normalise(saved?.unlockedMissions,[TACTICAL_MISSION_ID]),rewardedMissions:normalise(saved?.rewardedMissions,[]),campaignComplete:Boolean(saved?.campaignComplete)};
  if(saved){const old=new Map((saved.units||[]).map((u)=>[u.id,u]));state.units.forEach((u)=>{const p=old.get(u.id);if(p&&u.faction==='player'){u.xp=Math.max(u.xp,Number(p.xp||0));u.level=Math.max(u.level,Number(p.level||u.level));u.jobLevel=Math.max(u.jobLevel,Number(p.jobLevel||u.jobLevel));}});if(saved.workshop?.consumables)state.workshop.consumables=saved.workshop.consumables;state.campaignComplete=Boolean(saved.campaignComplete||state.completedMissions.includes(MISSION_ORDER.at(-1)));state.log.unshift('Tactical Operations campaign progress loaded.');}
  seedTimeline(state);return state;
}

export function serialiseState(state){return {version:TACTICAL_SAVE_VERSION,missionId:state.missionId,selectedMissionId:state.missionId,phase:state.phase,round:state.round,units:state.units.filter((u)=>u.faction==='player').map(({id,level,xp,jobLevel})=>({id,level,xp,jobLevel})),workshop:state.workshop,completedMissions:[...state.completedMissions],unlockedMissions:[...state.unlockedMissions],rewardedMissions:[...state.rewardedMissions],campaignComplete:Boolean(state.campaignComplete),completedAt:state.phase==='victory'?Date.now():0};}
export function nextMissionId(state){const i=MISSION_ORDER.indexOf(state.missionId);return i>=0?MISSION_ORDER[i+1]||null:null;}
function completeMission(state,reason){if(!state.completedMissions.includes(state.missionId))state.completedMissions.push(state.missionId);const next=nextMissionId(state);if(next&&!state.unlockedMissions.includes(next))state.unlockedMissions.push(next);state.campaignComplete=!next;state.phase='victory';state.log.unshift(`Victory: ${reason}`);return true;}
export function seedTimeline(state){state.timeline=state.units.filter((u)=>u.hp>0).sort((a,b)=>b.speed-a.speed||a.id.localeCompare(b.id)).map((u)=>u.id);state.activeUnitId=state.timeline[0]||null;state.selectedUnitId=state.activeUnitId;return state.timeline;}

export function movementRange(state,unitId=state.activeUnitId){
  const unit=state.units.find((u)=>u.id===unitId);if(!unit||unit.hp<=0)return[];const seen=new Map([[tileKey(unit.x,unit.y),{x:unit.x,y:unit.y,cost:0}]]),queue=[{x:unit.x,y:unit.y,cost:0,h:getHeight(state.mission,unit.x,unit.y)}];
  while(queue.length){const cur=queue.shift();for(const[dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=cur.x+dx,y=cur.y+dy,h=getHeight(state.mission,x,y);if(h===null||state.mission.obstacles.some((o)=>o.x===x&&o.y===y)||unitAt(state,x,y)&&!(x===unit.x&&y===unit.y))continue;const climb=Math.abs(h-cur.h),cost=cur.cost+1+Math.max(0,climb-1),key=tileKey(x,y);if(climb>unit.jump||cost>unit.move||seen.has(key)&&seen.get(key).cost<=cost)continue;seen.set(key,{x,y,cost});queue.push({x,y,cost,h});}}
  return[...seen.values()].filter((t)=>t.x!==unit.x||t.y!==unit.y);
}

export function hasLineOfSight(state,from,to){if(!from||!to||isBlocked(state.mission,to.x,to.y))return false;const dx=to.x-from.x,dy=to.y-from.y,steps=Math.max(Math.abs(dx),Math.abs(dy));if(steps<=1)return true;const a=getHeight(state.mission,from.x,from.y)||0,b=getHeight(state.mission,to.x,to.y)||0;for(let i=1;i<steps;i++){const x=Math.round(from.x+dx*i/steps),y=Math.round(from.y+dy*i/steps);if(isBlocked(state.mission,x,y))return false;const h=getHeight(state.mission,x,y)||0;if(h>a+(b-a)*i/steps+1)return false;}return true;}
export function attackRange(state,unitId=state.activeUnitId){const u=state.units.find((x)=>x.id===unitId);if(!u)return[];const out=[];for(let y=0;y<state.mission.height;y++)for(let x=0;x<state.mission.width;x++){const h=getHeight(state.mission,x,y);if(h===null)continue;const d=manhattan(u,{x,y}),delta=Math.abs(h-getHeight(state.mission,u.x,u.y)),extra=u.job==='pathfinder'?1:0;if(d<=u.attackRange+extra&&delta<=2&&hasLineOfSight(state,u,{x,y}))out.push({x,y,distance:d});}return out;}
export function positionalModifier(a,d){const[fx,fy]=facingToVector(d.facing),behind=a.x===d.x-fx&&a.y===d.y-fy,flank=Math.abs(a.x-d.x)===Math.abs(fy)||Math.abs(a.y-d.y)===Math.abs(fx);return behind?{label:'Back advantage',bonus:8}:flank?{label:'Flank pressure',bonus:4}:{label:'Guarded angle',bonus:0};}

export function moveUnit(state,id,x,y){if(state.phase!=='playing')return false;const u=state.units.find((v)=>v.id===id);if(!u||u.id!==state.activeUnitId||u.faction!=='player'||!movementRange(state,id).some((t)=>t.x===x&&t.y===y))return false;const dx=x-u.x,dy=y-u.y;u.x=x;u.y=y;u.facing=Math.abs(dx)>=Math.abs(dy)?dx>=0?'NE':'SW':dy>=0?'SE':'NW';state.log.unshift(`${u.name} moved to ${x+1},${y+1} at height ${getHeight(state.mission,x,y)}.`);checkVictory(state);checkDefeat(state);return true;}
function levelUps(u,state){while(u.xp>=100){u.xp-=100;u.level++;if(u.level%2===0)u.jobLevel++;u.maxHp+=4;u.hp=u.maxHp;u.atk+=2;state.log.unshift(`${u.name} reached level ${u.level}.`);}}
export function basicAttack(state,attackerId,targetId){if(state.phase!=='playing')return false;const a=state.units.find((u)=>u.id===attackerId),t=state.units.find((u)=>u.id===targetId);if(!a||!t||a.hp<=0||t.hp<=0||a.faction===t.faction||!attackRange(state,attackerId).some((p)=>p.x===t.x&&p.y===t.y))return false;const pos=positionalModifier(a,t),height=Math.max(0,(getHeight(state.mission,a.x,a.y)||0)-(getHeight(state.mission,t.x,t.y)||0))*2,damage=Math.max(4,a.atk+pos.bonus+height);t.hp=Math.max(0,t.hp-damage);a.xp+=t.hp<=0?45:18;state.log.unshift(`${a.name} hit ${t.name} for ${damage}. ${pos.label}${height?', high-ground bonus':''}.`);levelUps(a,state);checkVictory(state);checkDefeat(state);return true;}
export function useAreaAbility(state,id,x,y){if(state.phase!=='playing')return false;const a=state.units.find((u)=>u.id===id);if(!a||!['emberwright','fieldmender'].includes(a.job)||manhattan(a,{x,y})>3||!hasLineOfSight(state,a,{x,y}))return false;const hit=areaTiles({x,y},1).map((p)=>unitAt(state,p.x,p.y)).filter((u)=>u&&(a.job==='fieldmender'?u.faction===a.faction:u.faction!==a.faction));if(a.job==='fieldmender'){hit.forEach((u)=>u.hp=Math.min(u.maxHp,u.hp+18));state.log.unshift(`${a.name} used Mend Pulse on ${hit.length} ally tile(s).`);}else{hit.forEach((u)=>{u.hp=Math.max(0,u.hp-15);a.xp+=u.hp<=0?35:12;});state.mission.zones.unshift({x,y,radius:1,type:'ember',turns:2,label:'Fresh cinder zone'});state.log.unshift(`${a.name} set a Cinder Field hitting ${hit.length} enemy unit(s).`);levelUps(a,state);}checkVictory(state);checkDefeat(state);return true;}

export function endTurn(state){if(state.phase!=='playing')return;state.turn++;const living=Math.max(1,state.units.filter((u)=>u.hp>0).length);if(state.turn%living===0){state.round++;state.mission.zones.forEach((z)=>{if(z.turns<99)z.turns--;});state.mission.zones=state.mission.zones.filter((z)=>z.turns>0);}checkVictory(state);checkDefeat(state);if(state.phase!=='playing')return;seedTimeline(state);state.activeUnitId=state.timeline[state.turn%Math.max(1,state.timeline.length)]||state.timeline[0]||null;state.selectedUnitId=state.activeUnitId;if(activeUnit(state)?.faction==='enemy')runEnemyTurn(state);}
export function chooseEnemyTarget(state,enemy=activeUnit(state)){if(!enemy)return null;return state.units.filter((u)=>u.faction==='player'&&u.hp>0).slice().sort((a,b)=>manhattan(enemy,a)-manhattan(enemy,b)||a.hp-b.hp||a.id.localeCompare(b.id))[0]||null;}
export function chooseEnemyMove(state,enemy,target){if(!enemy||!target)return null;return movementRange(state,enemy.id).slice().sort((a,b)=>manhattan(a,target)-manhattan(b,target)||a.cost-b.cost||a.y-b.y||a.x-b.x)[0]||null;}
export function enemyDecision(state,enemy=activeUnit(state)){const target=chooseEnemyTarget(state,enemy);if(!enemy||!target)return{targetId:null,action:'none',move:null};const canAttack=attackRange(state,enemy.id).some((p)=>p.x===target.x&&p.y===target.y);return canAttack?{targetId:target.id,action:'attack',move:null}:{targetId:target.id,action:'move',move:chooseEnemyMove(state,enemy,target)};}
export function runEnemyTurn(state){const e=activeUnit(state);if(!e||e.faction!=='enemy')return;const decision=enemyDecision(state,e),target=state.units.find((u)=>u.id===decision.targetId);if(!target)return checkDefeat(state);if(decision.action==='attack')basicAttack(state,e.id,target.id);else if(decision.move){e.x=decision.move.x;e.y=decision.move.y;e.facing='SW';state.log.unshift(`${e.name} advanced through the terrain.`);}checkVictory(state);checkDefeat(state);}
export function tacticalStateSnapshot(state){
  return {
    missionId:state.missionId,
    phase:state.phase,
    round:state.round,
    turn:state.turn,
    activeUnitId:state.activeUnitId,
    selectedUnitId:state.selectedUnitId,
    completedMissions:[...(state.completedMissions||[])],
    unlockedMissions:[...(state.unlockedMissions||[])],
    campaignComplete:Boolean(state.campaignComplete),
    zones:(state.mission?.zones||[]).map((zone)=>({...zone})),
    units:(state.units||[]).map((unit)=>({
      id:unit.id,
      faction:unit.faction,
      x:unit.x,
      y:unit.y,
      facing:unit.facing,
      hp:unit.hp,
      maxHp:unit.maxHp,
      level:unit.level,
      xp:unit.xp,
      jobLevel:unit.jobLevel,
      acted:Boolean(unit.acted)
    }))
  };
}

export function applyTacticalAction(state,action={}){
  const type=String(action.type||'');
  if(type==='move')return moveUnit(state,action.unitId,Number(action.x),Number(action.y));
  if(type==='attack')return basicAttack(state,action.attackerId,action.targetId);
  if(type==='area-ability')return useAreaAbility(state,action.unitId,Number(action.x),Number(action.y));
  if(type==='end-turn'){endTurn(state);return true;}
  if(type==='check-victory')return checkVictory(state);
  if(type==='check-defeat')return checkDefeat(state);
  return false;
}

export function simulateTacticalActions({selectedIds,saved=null,missionId=null,actions=[]}={}){
  const state=createInitialState({selectedIds,saved,missionId});
  const trace=[tacticalStateSnapshot(state)];
  const results=[];
  for(const action of actions){
    const applied=applyTacticalAction(state,action);
    results.push({action:JSON.parse(JSON.stringify(action)),applied:Boolean(applied)});
    trace.push(tacticalStateSnapshot(state));
  }
  return {state,results,trace,snapshot:tacticalStateSnapshot(state)};
}

export function checkVictory(state){if(state.phase!=='playing')return state.phase==='victory';const players=state.units.filter((u)=>u.faction==='player'&&u.hp>0),enemies=state.units.filter((u)=>u.faction==='enemy'),down=enemies.every((u)=>u.hp<=0),captured=players.some((u)=>u.x===state.mission.captureTile.x&&u.y===state.mission.captureTile.y),bossDown=state.mission.bossId?state.units.find((u)=>u.id===state.mission.bossId)?.hp<=0:false;if(state.mission.type==='elimination'&&down)return completeMission(state,'all hostile units eliminated.');if(['capture','escape','rescue'].includes(state.mission.type)&&captured)return completeMission(state,`${state.mission.objectiveLabel.toLowerCase()} secured.`);if(['defence','survival'].includes(state.mission.type)&&state.round>state.mission.targetRounds)return completeMission(state,`the party held through round ${state.mission.targetRounds}.`);if(state.mission.type==='boss'&&bossDown)return completeMission(state,'the Hollow-Crown Warden was defeated.');return false;}
export function checkDefeat(state){if(state.phase!=='playing')return state.phase==='defeat';const players=state.units.filter((u)=>u.faction==='player'),noPlayers=players.every((u)=>u.hp<=0),anyDown=players.some((u)=>u.hp<=0),enemyObjective=state.mission.type==='defence'&&state.units.some((u)=>u.faction==='enemy'&&u.hp>0&&u.x===state.mission.captureTile.x&&u.y===state.mission.captureTile.y),timedOut=state.mission.roundLimit>0&&state.round>state.mission.roundLimit;if(noPlayers||state.mission.failOnAnyPlayerDown&&anyDown||enemyObjective||timedOut){state.phase='defeat';state.log.unshift(`Defeat: ${state.mission.defeat}`);}return state.phase==='defeat';}

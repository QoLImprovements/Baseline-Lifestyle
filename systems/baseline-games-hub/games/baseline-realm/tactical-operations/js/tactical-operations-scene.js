import {
  createInitialState, serialiseState, movementRange, attackRange, moveUnit, basicAttack, useAreaAbility, endTurn,
  activeUnit, unitAt, getHeight, hasLineOfSight, positionalModifier, areaTiles, nextMissionId,
  MISSION_ORDER, MISSION_DEFINITIONS, TACTICAL_MISSION_ID
} from './tactical-operations-engine.mjs?v=TACTICAL_OPERATIONS_CAMPAIGN_COMPLETE_20260628';

const STYLE_ID='baseline-realm-tactical-operations-style';
const STYLE_URL='/systems/baseline-games-hub/games/baseline-realm/tactical-operations/css/tactical-operations.css?v=REALM_EXPLORATION_CHROME_20261019_1';
let temporarySave=null;
const clone=(value)=>{try{return value&&typeof value==='object'?JSON.parse(JSON.stringify(value)):null;}catch{return null;}};

function ensureStylesheet(){let link=document.getElementById(STYLE_ID);if(!link){link=document.createElement('link');link.id=STYLE_ID;link.rel='stylesheet';document.head.append(link);}if(link.getAttribute('href')!==STYLE_URL)link.href=STYLE_URL;}
function authSnapshot(){try{return globalThis.BASELINE_auth?.get?.()||null;}catch{return null;}}
function accountAuthenticated(){return Boolean(authSnapshot()?.authed);}
function readSave(inventoryService){
  const signedIn=accountAuthenticated();
  if(signedIn){
    let tactical=null;
    if(typeof inventoryService?.read==='function'){
      try{const value=inventoryService.read()?.realm?.tacticalOperations;tactical=value&&typeof value==='object'?value:null;}catch{}
    }
    return{saved:tactical,signedIn:true};
  }
  return{saved:clone(temporarySave),signedIn:false};
}
function addCount(bucket,id,amount){if(!bucket||!id||!Number.isFinite(Number(amount)))return;bucket[id]=Math.max(0,Number(bucket[id]||0))+Number(amount);}
function writeSave(state,inventoryService){
  const signedIn=accountAuthenticated();
  const shouldReward=state.phase==='victory'&&!state.rewardedMissions.includes(state.missionId);
  if(shouldReward)state.rewardedMissions.push(state.missionId);
  const data=serialiseState(state);
  if(!signedIn){
    temporarySave=clone(data);
    return{ok:true,data,rewardGranted:false};
  }
  if(signedIn&&typeof inventoryService?.transact!=='function')return{ok:false,error:'account_tactical_storage_unavailable',data,rewardGranted:false};
  try{
    const result=inventoryService?.transact?.({mutate(save){save.realm.tacticalOperations=data;if(!shouldReward)return;const reward=state.mission.reward||{};save.realm.wallet.coins=Math.max(0,Number(save.realm.wallet.coins||0))+Math.max(0,Number(reward.coins||0));save.realm.inventory.materials||={};save.realm.inventory.items||={};Object.entries(reward.materials||{}).forEach(([id,amount])=>addCount(save.realm.inventory.materials,id,amount));Object.entries(reward.items||{}).forEach(([id,amount])=>addCount(save.realm.inventory.items,id,amount));}},{type:'tactical-operations-save',missionId:state.missionId,phase:state.phase,rewardGranted:shouldReward});
    if(signedIn&&result?.ok!==true)return{ok:false,error:result?.code||'account_tactical_save_failed',data,rewardGranted:false};
  }catch(error){return{ok:false,error:String(error?.message||error||'account_tactical_save_failed'),data,rewardGranted:false};}
  return{ok:true,data,rewardGranted:shouldReward};
}
const esc=(value)=>String(value??'').replace(/[&<>"']/g,(ch)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

function mountTacticalOperations({root,onExit,inventoryService,eventBus}){
  const loaded=readSave(inventoryService);
  let state=createInitialState({saved:loaded.saved}),selectedAction='move',disposed=false;
  const focusFor=(value)=>{const unit=value.units.find((entry)=>entry.id===value.selectedUnitId)||value.units.find((entry)=>entry.faction==='player');return{x:unit?.x||0,y:unit?.y||0};};
  let focus=focusFor(state);
  root.classList.add('is-tactical-operations');
  root.innerHTML='<section class="tactical-shell" aria-label="Baseline Realm Tactical Operations"></section>';
  const shell=root.querySelector('.tactical-shell');

  function persist(){return writeSave(state,inventoryService);}
  function ranges(){const unit=activeUnit(state);return{move:new Set(movementRange(state).map((t)=>`${t.x},${t.y}`)),attack:new Set(attackRange(state).map((t)=>`${t.x},${t.y}`)),area:selectedAction==='ability'&&unit?new Set(areaTiles(focus,1).map((t)=>`${t.x},${t.y}`)):new Set()};}
  function statusCopy(){if(state.phase==='victory'){const next=nextMissionId(state);return next?`${state.mission.name} complete. ${MISSION_DEFINITIONS[next].name} is unlocked.`:'Campaign complete. Every Tactical Operations mission has been secured.';}if(state.phase==='defeat')return state.mission.defeat;const time=state.mission.roundLimit?` · Round limit ${state.mission.roundLimit}`:state.mission.targetRounds?` · Hold through round ${state.mission.targetRounds}`:'';return`${state.mission.type.toUpperCase()} · ${state.mission.objectiveLabel}${time}`;}

  function render(){
    if(disposed)return;
    const unit=activeUnit(state),selected=state.units.find((entry)=>entry.id===state.selectedUnitId)||unit,currentRanges=ranges(),timeline=state.timeline.map((id)=>state.units.find((entry)=>entry.id===id)).filter(Boolean),next=nextMissionId(state);
    shell.innerHTML=`
      <header class="tactical-header"><div><p class="tactical-kicker">Baseline Realm / Seven-mission tactics campaign</p><h3>Tactical Operations: ${esc(state.mission.name)}</h3><p>${esc(state.mission.objective)}</p></div><div class="tactical-header__actions"><button class="tactical-btn" data-action="save">Save</button><button class="tactical-btn" data-action="reset">Reset Mission</button><button class="tactical-btn tactical-btn--ghost" data-action="exit">Return to Basecamp</button></div></header>
      ${renderCampaign()}
      <div class="tactical-status tactical-status--${state.phase}"><strong>${state.phase==='playing'?`Round ${state.round}: ${esc(unit?.name||'No active unit')}`:state.phase.toUpperCase()}</strong><span>${esc(statusCopy())}</span>${state.phase==='victory'&&next?`<button class="tactical-btn" data-action="next-mission">Begin ${esc(MISSION_DEFINITIONS[next].name)}</button>`:''}</div>
      <div class="tactical-layout"><main class="tactical-board-wrap"><div class="tactical-grid" role="grid" aria-label="Isometric tactical grid for ${esc(state.mission.name)}">${renderTiles(currentRanges)}</div><div class="tactical-controls" aria-label="Action controls">${['move','attack','ability','wait'].map((action)=>`<button class="tactical-btn ${selectedAction===action?'is-active':''}" data-action-mode="${action}">${action}</button>`).join('')}<button class="tactical-btn" data-action="end-turn">End Turn</button></div></main><aside class="tactical-panel">${renderMissionBrief()}${renderTimeline(timeline)}${renderUnitCard(selected)}${renderWorkshop()}<div class="tactical-log">${state.log.slice(0,8).map((line)=>`<p>${esc(line)}</p>`).join('')}</div></aside></div>
      <p class="tactical-input-note">Input: click/tap tiles and buttons, keyboard arrows move focus, Enter confirms, 1–4 change actions, Space ends the turn, and B returns to Basecamp.</p>`;
  }

  function renderCampaign(){return`<nav class="tactical-campaign" aria-label="Tactical Operations campaign"><div class="tactical-campaign__heading"><strong>Campaign Route</strong><span>${state.completedMissions.length} / ${MISSION_ORDER.length} missions complete</span></div><div class="tactical-campaign__missions">${MISSION_ORDER.map((id,index)=>{const mission=MISSION_DEFINITIONS[id],unlocked=state.unlockedMissions.includes(id),complete=state.completedMissions.includes(id),current=state.missionId===id;return`<button class="tactical-mission-button${current?' is-current':''}${complete?' is-complete':''}${unlocked?'':' is-locked'}" data-mission-id="${id}" ${unlocked?'':'disabled'} aria-current="${current?'step':'false'}"><small>${index+1} · ${esc(mission.type)}</small><strong>${esc(mission.name)}</strong><span>${complete?'Complete':unlocked?'Available':'Locked'}</span></button>`;}).join('')}</div></nav>`;}

  function renderTiles(currentRanges){let html='';for(let y=0;y<state.mission.height;y++)for(let x=0;x<state.mission.width;x++){const height=getHeight(state.mission,x,y),occupant=unitAt(state,x,y),key=`${x},${y}`,blocked=height===null||state.mission.obstacles.some((o)=>o.x===x&&o.y===y),zone=state.mission.zones.find((z)=>areaTiles(z,z.radius).some((t)=>t.x===x&&t.y===y)),objective=state.mission.captureTile?.x===x&&state.mission.captureTile?.y===y,classes=['tactical-tile',blocked?'is-blocked':'',currentRanges.move.has(key)?'in-move':'',currentRanges.attack.has(key)?'in-attack':'',currentRanges.area.has(key)?'in-area':'',zone?'in-zone':'',objective?'is-objective':'',focus.x===x&&focus.y===y?'is-focused':'',occupant?`has-${occupant.faction}`:''].filter(Boolean).join(' '),los=activeUnit(state)&&height!==null?hasLineOfSight(state,activeUnit(state),{x,y}):false;html+=`<button class="${classes}" role="gridcell" style="--x:${x};--y:${y};--h:${height||0}" data-x="${x}" data-y="${y}" ${blocked?'aria-disabled="true"':''}><span class="tile-top"></span><span class="tile-height">${height===null?'X':`H${height}`}</span>${objective?'<span class="tile-objective">⚑</span>':''}${zone?'<span class="tile-zone">◆</span>':''}${occupant?`<span class="unit-token" title="${esc(occupant.name)}">${occupant.faction==='player'?'●':'◆'}<small>${esc(occupant.facing)}</small></span>`:''}${los?'<span class="tile-los">LOS</span>':''}</button>`;}return html;}

  function renderMissionBrief(){const reward=state.mission.reward||{},parts=[`${Number(reward.coins||0)} Coins`,...Object.entries(reward.materials||{}).map(([id,amount])=>`${amount} ${id.replaceAll('_',' ')}`),...Object.entries(reward.items||{}).map(([id,amount])=>`${amount} ${id.replaceAll('_',' ')}`)];return`<section class="tactical-card"><h4>Mission Brief</h4><p><strong>${esc(state.mission.type.toUpperCase())}</strong> · ${esc(state.mission.objectiveLabel)}</p><p>${esc(state.mission.objective)}</p><p><strong>Reward:</strong> ${parts.map(esc).join(' · ')}</p></section>`;}
  function renderTimeline(timeline){return`<section class="tactical-card"><h4>Turn Timeline</h4><div class="timeline">${timeline.map((entry,index)=>`<span class="${entry.id===state.activeUnitId?'is-now':''}">${index+1}. ${esc(entry.name)} <small>${entry.speed}</small></span>`).join('')}</div></section>`;}
  function renderUnitCard(unit){if(!unit)return'<section class="tactical-card"><h4>No unit selected</h4></section>';const target=state.units.find((entry)=>entry.faction!==unit.faction&&entry.hp>0),position=target?positionalModifier(unit,target).label:'No target';return`<section class="tactical-card"><h4>${esc(unit.name)}</h4><p><strong>${esc(unit.jobName)}</strong> Lv ${unit.level} / Job Lv ${unit.jobLevel}</p><div class="mini-meter"><span style="width:${Math.max(0,unit.hp/unit.maxHp*100)}%"></span></div><p>HP ${unit.hp}/${unit.maxHp} · XP ${unit.xp}/100 · Move ${unit.move} · Jump ${unit.jump} · Range ${unit.attackRange}</p><p>Learned: ${unit.learned.map(esc).join(', ')}</p><p>Reaction: ${esc(unit.reaction)} · Support: ${esc(unit.support)} · Movement: ${esc(unit.movement)}</p><p>Equipment: ${esc(Object.values(unit.equipment||{}).join(', '))}</p><p>Facing / position read: ${esc(unit.facing)} · ${esc(position)}</p></section>`;}
  function renderWorkshop(){return`<section class="tactical-card"><h4>Shared Workshop</h4><p>Equipment, consumables and mission rewards use the shared Realm inventory.</p><div class="chips">${state.workshop.consumables.map((item)=>`<span>${esc(item.name)} ×${item.amount}</span>`).join('')}</div></section>`;}

  function switchMission(missionId){if(!state.unlockedMissions.includes(missionId))return;persist();state=createInitialState({saved:serialiseState(state),missionId});selectedAction='move';focus=focusFor(state);persist();eventBus?.emit?.('realm:tactical:mission-changed',{missionId});render();}
  function handleTile(x,y){focus={x,y};const unit=activeUnit(state);if(!unit||unit.faction!=='player'||state.phase!=='playing'){const occupant=unitAt(state,x,y);if(occupant)state.selectedUnitId=occupant.id;render();return;}const occupant=unitAt(state,x,y);if(occupant)state.selectedUnitId=occupant.id;if(selectedAction==='move')moveUnit(state,unit.id,x,y);else if(selectedAction==='attack'&&occupant&&occupant.faction!==unit.faction)basicAttack(state,unit.id,occupant.id);else if(selectedAction==='ability')useAreaAbility(state,unit.id,x,y);else if(selectedAction==='wait')endTurn(state);if(state.phase!=='playing')persist();render();}
  async function handleCommand(action){
    if(action==='save'){const result=persist();state.log.unshift(result.ok?(result.rewardGranted?'Mission reward and campaign save written.':'Tactical Operations save written.'):'Tactical Operations was not saved to the account.');}if(action==='reset'){state=createInitialState({saved:serialiseState(state),missionId:state.missionId});selectedAction='move';focus=focusFor(state);state.log.unshift('Mission reset without clearing campaign progress.');}if(action==='next-mission'){const next=nextMissionId(state);if(next)return switchMission(next);}if(action==='exit'){persist();try{await onExit?.();}catch(error){console.error('[Baseline Realm] Return to Basecamp failed.',error);eventBus?.emit?.('realm:tactical:return-failed',{error});}return;}if(action==='end-turn')endTurn(state);if(state.phase!=='playing')persist();render();}
  function onClick(event){const target=event.target instanceof Element?event.target:null;if(!target)return;const control=target.closest('[data-mission-id],[data-x][data-y],[data-action-mode],[data-action]');if(!control||!root.contains(control))return;event.preventDefault();event.stopPropagation();const mission=control.closest('[data-mission-id]');if(mission){switchMission(mission.dataset.missionId);return;}const tile=control.closest('[data-x][data-y]');if(tile){handleTile(Number(tile.dataset.x),Number(tile.dataset.y));return;}const mode=control.closest('[data-action-mode]');if(mode){selectedAction=mode.dataset.actionMode;render();return;}const action=control.closest('[data-action]');if(action)void handleCommand(action.dataset.action);}
  function onKey(event){if(!root.contains(document.activeElement)&&document.activeElement!==document.body)return;const key=event.key.toLowerCase();if(key==='b'){event.preventDefault();void handleCommand('exit');return;}if(key==='arrowleft')focus.x=Math.max(0,focus.x-1);else if(key==='arrowright')focus.x=Math.min(state.mission.width-1,focus.x+1);else if(key==='arrowup')focus.y=Math.max(0,focus.y-1);else if(key==='arrowdown')focus.y=Math.min(state.mission.height-1,focus.y+1);else if(key==='enter')handleTile(focus.x,focus.y);else if(key===' ')handleCommand('end-turn');else if(['1','2','3','4'].includes(key))selectedAction=['move','attack','ability','wait'][Number(key)-1];else return;event.preventDefault();render();}

  root.addEventListener('click',onClick,true);window.addEventListener('keydown',onKey);eventBus?.emit?.('realm:tactical:mission-changed',{missionId:state.missionId});render();
  return{save:()=>persist(),getState:()=>state,destroy(){if(disposed)return;disposed=true;persist();root.removeEventListener('click',onClick,true);window.removeEventListener('keydown',onKey);root.classList.remove('is-tactical-operations');eventBus?.emit?.('realm:tactical:closed',{missionId:state.missionId,phase:state.phase});}};
}

export function createTacticalOperationsScene({runtime,inventoryService,eventBus}={}){let game=null,screen=null;return{id:'tactical-operations',async enter({router}){runtime?.setView?.('tactical-operations');ensureStylesheet();const frame=document.getElementById('realmSceneFrame')||document.getElementById('ninjaPanel')||document.body;game?.destroy();screen?.remove();screen=document.createElement('section');screen.id='tacticalOperationsScreen';screen.className='tactical-operations-screen is-tactical-operations';screen.setAttribute('aria-label','Tactical Operations');frame.classList.add('is-tactical-operations-view');frame.appendChild(screen);const returnToBasecamp=async()=>{await router.navigate('basecamp',{from:'tactical-operations'});};game=mountTacticalOperations({root:screen,inventoryService,eventBus,onExit:returnToBasecamp});document.documentElement.setAttribute('data-tactical-operations-live','TACTICAL_OPERATIONS_INTERACTION_REPAIR_20260707_2');eventBus?.emit?.('realm:tactical:opened',{missionId:game.getState()?.missionId||TACTICAL_MISSION_ID});},async exit(){game?.destroy();game=null;screen?.remove();screen=null;document.getElementById('realmSceneFrame')?.classList.remove('is-tactical-operations-view');document.documentElement.removeAttribute('data-tactical-operations-live');}};}
export{mountTacticalOperations};

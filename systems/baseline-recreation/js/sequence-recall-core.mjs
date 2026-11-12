import {
  awardXp, clone, createGameExtensionShell, escapeHtml,
  loadStoredProfile, saveStoredProfile, xpNeededForLevel
} from './game-extension-support.mjs?v=MOBILE_GAME_COHERENCE_20261103_1';

export const SEQUENCE_TIERS = Object.freeze([
  {id:'starter',name:'Starter',unlockLevel:1,length:3,grid:4,moveCount:4,pace:950,xp:24,bank:9},
  {id:'field',name:'Field',unlockLevel:4,length:5,grid:4,moveCount:6,pace:820,xp:38,bank:15},
  {id:'forge',name:'Forge',unlockLevel:9,length:7,grid:5,moveCount:8,pace:700,xp:56,bank:23},
  {id:'citadel',name:'Citadel',unlockLevel:16,length:9,grid:5,moveCount:10,pace:580,xp:78,bank:34}
]);
export const COMBAT_MOVES = Object.freeze([
  {id:'jab',name:'Jab',symbol:'🥊'},
  {id:'cross',name:'Cross',symbol:'🥊'},
  {id:'hook',name:'Hook',symbol:'↪'},
  {id:'block',name:'Block',symbol:'🛡️'},
  {id:'uppercut',name:'Uppercut',symbol:'↗'},
  {id:'slip',name:'Slip',symbol:'↙'},
  {id:'front-kick',name:'Front kick',symbol:'🦶'},
  {id:'round-kick',name:'Round kick',symbol:'🦶'},
  {id:'step',name:'Step',symbol:'👣'},
  {id:'guard',name:'Guard',symbol:'🛡️'}
]);
export const SEQUENCE_SKILLS = Object.freeze([
  {id:'focus',name:'Focus',max:5,unlockLevel:1,description:'+8% XP for each successful sequence per skill level.'},
  {id:'banker',name:'Banker',max:5,unlockLevel:1,description:'+10% Bank reward for each successful sequence per skill level.'},
  {id:'rehearsal',name:'Rehearsal',max:1,unlockLevel:3,description:'Replay the complete demonstration once per round, for a small reward reduction.'},
  {id:'recovery',name:'Recovery',max:3,unlockLevel:5,description:'Reduce the Bank penalty for an incorrect sequence.'}
]);

function shuffled(items, random) {
  const copy=items.slice();
  for(let i=copy.length-1;i>0;i--){
    const j=Math.max(0,Math.min(i,Math.floor(random()*(i+1))));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}
export function makePath(size, length, random=Math.random){
  if(!Number.isInteger(size)||size<2||!Number.isInteger(length)||length<1||length>size*size)throw new RangeError('Invalid path dimensions');
  const solve=(path,visited)=>{
    if(path.length===length)return path.slice();
    const here=path[path.length-1], row=Math.floor(here/size),col=here%size;
    const next=[[row-1,col],[row+1,col],[row,col-1],[row,col+1]]
      .filter(([r,c])=>r>=0&&r<size&&c>=0&&c<size)
      .map(([r,c])=>r*size+c).filter(id=>!visited.has(id));
    for(const cell of shuffled(next,random)){
      path.push(cell);visited.add(cell);
      const found=solve(path,visited);
      if(found)return found;
      visited.delete(cell);path.pop();
    }
    return null;
  };
  for(const first of shuffled(Array.from({length:size*size},(_,i)=>i),random)){
    const found=solve([first],new Set([first]));
    if(found)return found;
  }
  throw new Error('Unable to construct a path');
}
export function makeCombat(moveIds, length, random=Math.random){
  if(!Array.isArray(moveIds)||!moveIds.length||!Number.isInteger(length)||length<1)throw new RangeError('Invalid combat sequence');
  const result=[];
  for(let i=0;i<length;i++){
    const choices=moveIds.filter(move=>!(i>=2&&result[i-1]===move&&result[i-2]===move));
    const pool=choices.length?choices:moveIds;
    result.push(pool[Math.max(0,Math.min(pool.length-1,Math.floor(random()*pool.length)))]);
  }
  return result;
}
const safeNumber=(value,minimum=0)=>Math.max(minimum,Math.floor(Number(value)||0));
const tierById=(id)=>SEQUENCE_TIERS.find(t=>t.id===id)||SEQUENCE_TIERS[0];

export function mountSequenceGame(config){
  const {id,app,name,kind,note,benefit}=config;
  const panelId=id.replace(/-([a-z])/g,(_,letter)=>letter.toUpperCase())+'Panel';
  const defaultProfile={
    app,level:1,xp:0,bank:0,skillPoints:1,selectedTier:'starter',
    roundsPlayed:0,roundsWon:0,bestStreak:0,streak:0,cleanStreak:0,
    bestLength:0,totalCorrect:0,totalMistakes:0,lastXp:0,lastBank:0,
    skills:{focus:0,banker:0,rehearsal:0,recovery:0}
  };
  function normalise(value){
    const source=value&&typeof value==='object'?value:{};
    const next={...defaultProfile,...source,app};
    for(const key of ['xp','bank','skillPoints','roundsPlayed','roundsWon','bestStreak','streak','cleanStreak','bestLength','totalCorrect','totalMistakes','lastXp','lastBank'])next[key]=safeNumber(next[key]);
    next.level=safeNumber(next.level,1);
    next.skills=Object.fromEntries(SEQUENCE_SKILLS.map(skill=>[skill.id,Math.min(skill.max,safeNumber(source.skills?.[skill.id]))]));
    const valid=tierById(next.selectedTier);
    next.selectedTier=valid.unlockLevel<=next.level?valid.id:'starter';
    return next;
  }
  let profile=normalise(null);
  let round=null,tab='game',message='Choose a tier, then start a new round.';
  let previewTimers=[],previewToken=0,storageAuth=null;
  const $=(selector)=>document.getElementById(panelId)?.querySelector(selector);
  const tier=()=>tierById(profile.selectedTier);
  function cancelPreview(){
    previewToken++;
    previewTimers.forEach(timer=>clearTimeout(timer));
    previewTimers=[];
  }
  function persist(){
    saveStoredProfile(app,profile);
    shell.refreshOverview();
    document.dispatchEvent(new CustomEvent('baseline:game-storage',{detail:{app,sequenceGame:true}}));
  }
  function xpLabel(){
    const needed=xpNeededForLevel(profile.level);
    return 'Rank '+profile.level+' · '+profile.xp+'/'+needed+' XP';
  }
  function progressText(){return 'Player Rank '+profile.level+' · '+profile.roundsWon+' cleared';}
  function currentSequence(){
    const t=tier();
    return kind==='path'?makePath(t.grid,t.length):makeCombat(COMBAT_MOVES.slice(0,t.moveCount).map(move=>move.id),t.length);
  }
  function start(){
    cancelPreview();
    const t=tier();
    round={sequence:currentSequence(),index:0,phase:'preview',lit:null,wrong:null,replays:0,startedTier:t.id};
    profile.roundsPlayed++;
    message='Watch the sequence carefully. You will repeat it in the same order.';
    persist();
    preview();
  }
  function preview(){
    if(!round)return;
    cancelPreview();
    const token=previewToken;
    const t=tierById(round.startedTier);
    round.phase='preview';round.index=0;round.lit=null;round.wrong=null;
    message='Watch the sequence, then reproduce it from memory.';
    render();
    round.sequence.forEach((step,i)=>{
      previewTimers.push(setTimeout(()=>{
        if(token!==previewToken||!round)return;
        round.lit=step;
        renderGame();
      },i*t.pace));
      previewTimers.push(setTimeout(()=>{
        if(token!==previewToken||!round)return;
        round.lit=null;
        renderGame();
      },i*t.pace+Math.round(t.pace*.72)));
    });
    previewTimers.push(setTimeout(()=>{
      if(token!==previewToken||!round)return;
      round.phase='input';round.lit=null;
      message='Your turn: repeat '+round.sequence.length+' steps in the correct order.';
      render();
    },round.sequence.length*t.pace+200));
  }
  function replay(){
    if(!round||round.phase!=='input'||!profile.skills.rehearsal||round.replays>0)return;
    round.replays=1;
    preview();
  }
  function select(value){
    if(!round||round.phase!=='input')return;
    if(String(value)!==String(round.sequence[round.index])){
      round.wrong=value;profile.totalMistakes++;
      finish(false);
      return;
    }
    round.index++;
    profile.totalCorrect++;
    if(round.index===round.sequence.length){finish(true);return;}
    message='Correct. '+round.index+' of '+round.sequence.length+' steps recalled.';
    render();
  }
  function finish(won){
    if(!round||round.phase==='finished')return;
    cancelPreview();
    round.phase='finished';
    if(won){
      const t=tierById(round.startedTier);
      const rehearsalMultiplier=round.replays?0.9:1;
      const xp=Math.max(1,Math.round(t.xp*(1+profile.skills.focus*.08)*rehearsalMultiplier));
      const bank=Math.max(1,Math.round(t.bank*(1+profile.skills.banker*.1)*rehearsalMultiplier));
      const levelBefore=profile.level;
      awardXp(profile,xp);
      profile.skillPoints+=profile.level-levelBefore;
      profile.bank+=bank;profile.lastXp=xp;profile.lastBank=bank;
      profile.roundsWon++;profile.streak++;profile.cleanStreak++;
      profile.bestStreak=Math.max(profile.bestStreak,profile.streak);
      profile.bestLength=Math.max(profile.bestLength,round.sequence.length);
      message='Sequence complete · +'+xp+' XP · +'+bank+' Bank.'+(profile.level>levelBefore?' Rank increased!':'');
    }else{
      const penalty=Math.max(0,2-profile.skills.recovery);
      profile.bank=Math.max(0,profile.bank-penalty);
      profile.streak=0;profile.cleanStreak=0;
      profile.lastXp=0;profile.lastBank=0;
      message='Sequence interrupted at step '+(round.index+1)+'.'+(penalty?' Bank -'+penalty+'.':'')+' Review the sequence or start again.';
    }
    persist();render();
    try{globalThis.BaselineGamesAutoNext?.complete?.(app);}catch(_){}
  }
  function buySkill(skillId){
    const skill=SEQUENCE_SKILLS.find(entry=>entry.id===skillId);
    if(!skill||profile.skillPoints<1||profile.level<skill.unlockLevel||profile.skills[skill.id]>=skill.max)return;
    profile.skills[skill.id]++;profile.skillPoints--;
    persist();render();
  }
  function changeTier(nextId){
    const next=SEQUENCE_TIERS.find(item=>item.id===nextId);
    if(!next||next.unlockLevel>profile.level)return;
    cancelPreview();round=null;profile.selectedTier=next.id;
    message='Tier changed to '+next.name+'. Select New Game to begin.';
    persist();render();
  }
  function showTab(next){
    if(!['game','round','skills','tiers','progress'].includes(next))return;
    tab=next;
    const panel=document.getElementById(panelId);
    if(!panel)return;
    panel.querySelectorAll('[data-sequence-tab]').forEach(btn=>{
      btn.classList.toggle('is-active',btn.dataset.sequenceTab===tab);
      btn.setAttribute('aria-selected',String(btn.dataset.sequenceTab===tab));
    });
    panel.querySelectorAll('[data-sequence-view]').forEach(node=>{node.hidden=node.dataset.sequenceView!==tab;});
  }
  function moveButton(move,active){
    const lit=round?.lit===move.id;
    const wrong=round?.phase==='finished'&&round.wrong===move.id;
    return '<button type="button" class="sequence-move'+(lit?' is-lit':'')+(wrong?' is-wrong':'')+'" data-sequence-choice="'+escapeHtml(move.id)+'" '+(!active?'disabled':'')+' aria-label="'+escapeHtml(move.name)+'"><span aria-hidden="true">'+escapeHtml(move.symbol)+'</span><strong>'+escapeHtml(move.name)+'</strong></button>';
  }
  function gridHtml(t,active){
    const cells=Array.from({length:t.grid*t.grid},(_,i)=>{
      const lit=round?.lit===i,done=round?.phase==='input'&&round.sequence.slice(0,round.index).includes(i);
      const wrong=round?.phase==='finished'&&round.wrong===i;
      return '<button class="sequence-cell'+(lit?' is-lit':'')+(done?' is-done':'')+(wrong?' is-wrong':'')+'" type="button" data-sequence-choice="'+i+'" aria-label="Row '+(Math.floor(i/t.grid)+1)+', column '+(i%t.grid+1)+'" '+(!active?'disabled':'')+'><span aria-hidden="true">'+(lit?'●':done?'✓':'')+'</span></button>';
    }).join('');
    return '<div class="sequence-grid" style="--sequence-cols:'+t.grid+'" role="group" aria-label="Path recall grid">'+cells+'</div>';
  }
  function renderGame(){
    const el=$('[data-sequence-board]');if(!el)return;
    const active=round?.phase==='input',t=round?tierById(round.startedTier):tier();
    const board=kind==='path'?gridHtml(t,active):
      '<div class="sequence-moves" role="group" aria-label="Combat movement options">'+COMBAT_MOVES.slice(0,t.moveCount).map(move=>moveButton(move,active)).join('')+'</div>';
    const phase=round?(round.phase==='preview'?'Observe':round.phase==='input'?'Your turn':'Round finished'):'Ready';
    el.innerHTML='<div class="sequence-round-counter"><strong>'+escapeHtml(phase)+'</strong><span>'+(round?round.index+' / '+round.sequence.length+' recalled':t.length+' steps')+'</span></div>'+
      '<div class="sequence-status" role="status" aria-live="polite">'+escapeHtml(message)+'</div>'+board+
      (round&&round.phase==='input'&&profile.skills.rehearsal?
      '<button class="action ghost" data-sequence-replay type="button" '+(round.replays?'disabled':'')+'>↻ Replay demonstration'+(round.replays?' (used)':'')+'</button>':'')+
      (round&&round.phase==='finished'?'<p class="inline-note">Use New Game for a new sequence. The Round tab shows the completed demonstration.</p>':'');
  }
  function renderRound(){
    const el=$('[data-sequence-round]');if(!el)return;
    if(!round){el.innerHTML='<p class="inline-note">Start a round to see its results here.</p>';return;}
    let content='';
    if(round.phase==='finished'){
      content=kind==='path'
       ?'<div class="sequence-answer">'+round.sequence.map(n=>'R'+(Math.floor(n/tierById(round.startedTier).grid)+1)+' C'+(n%tierById(round.startedTier).grid+1)).map(escapeHtml).join(' → ')+'</div>'
       :'<div class="sequence-answer">'+round.sequence.map(id=>escapeHtml(COMBAT_MOVES.find(m=>m.id===id)?.name||id)).join(' → ')+'</div>';
    }else content='<p class="inline-note">The answer is revealed after the round is finished.</p>';
    el.innerHTML='<h3>Round</h3><p>'+round.index+' of '+round.sequence.length+' steps correct · '+escapeHtml(round.phase)+'</p>'+content+
      '<p class="inline-note">Last reward: +'+profile.lastXp+' XP · +'+profile.lastBank+' Bank</p>';
  }
  function renderSkills(){
    const el=$('[data-sequence-skills]');if(!el)return;
    el.innerHTML='<h3>Skills · '+profile.skillPoints+' points available</h3><div class="sequence-option-list">'+SEQUENCE_SKILLS.map(skill=>{
      const level=profile.skills[skill.id],locked=profile.level<skill.unlockLevel;
      return '<div class="sequence-option"><div><strong>'+escapeHtml(skill.name)+' · '+level+'/'+skill.max+'</strong><p>'+escapeHtml(skill.description)+'</p><span class="inline-note">Unlocks at Rank '+skill.unlockLevel+'</span></div>'+
        '<button type="button" class="action secondary" data-sequence-skill="'+skill.id+'" '+(locked||level>=skill.max||!profile.skillPoints?'disabled':'')+'>Upgrade</button></div>';
    }).join('')+'</div>';
  }
  function renderTiers(){
    const el=$('[data-sequence-tiers]');if(!el)return;
    el.innerHTML='<h3>Difficulty tiers</h3><div class="sequence-option-list">'+SEQUENCE_TIERS.map(t=>{
      const locked=t.unlockLevel>profile.level,selected=profile.selectedTier===t.id;
      return '<div class="sequence-option"><div><strong>'+escapeHtml(t.name)+'</strong><p>'+t.length+' steps · '+(kind==='path'?t.grid+' × '+t.grid+' grid':t.moveCount+' movements')+'</p><span class="inline-note">'+(locked?'Unlocks at Rank '+t.unlockLevel:'Unlocked')+'</span></div>'+
      '<button class="action '+(selected?'primary':'secondary')+'" type="button" data-sequence-tier="'+t.id+'" '+(locked||selected?'disabled':'')+'>'+(selected?'Selected':locked?'Locked':'Select')+'</button></div>';
    }).join('')+'</div>';
  }
  function renderProgress(){
    const el=$('[data-sequence-progress]');if(!el)return;
    const items=[['Player Rank',profile.level],['XP',profile.xp+' / '+xpNeededForLevel(profile.level)],['Bank',profile.bank],['Rounds played',profile.roundsPlayed],['Rounds completed',profile.roundsWon],['Best streak',profile.bestStreak],['Current streak',profile.streak],['Longest sequence',profile.bestLength],['Correct inputs',profile.totalCorrect],['Incorrect inputs',profile.totalMistakes]];
    el.innerHTML='<h3>Progress</h3><div class="sequence-stats">'+items.map(([label,value])=>'<div><span>'+escapeHtml(label)+'</span><strong>'+escapeHtml(value)+'</strong></div>').join('')+'</div>';
  }
  function render(){
    const p=document.getElementById(panelId);
    if(!p)return;
    const status=$('[data-sequence-profile]');
    if(status)status.textContent=xpLabel()+' · Bank '+profile.bank+' · Streak '+profile.streak;
    renderGame();renderRound();renderSkills();renderTiers();renderProgress();showTab(tab);
    globalThis.BaselineGamesMusic?.refreshControls?.();
    globalThis.BaselineFullscreenTabs?.sync?.(app);
    shell.refreshOverview();
  }
  function handleClick(event){
    const element=event.target instanceof Element?event.target:null;
    if(!element||!element.closest('#'+panelId))return;
    const button=element.closest('button');if(!button)return;
    if(button.matches('[data-sequence-start]')){start();return;}
    if(button.matches('[data-sequence-replay]')){replay();return;}
    if(button.matches('[data-sequence-choice]')){select(kind==='path'?Number(button.dataset.sequenceChoice):button.dataset.sequenceChoice);return;}
    if(button.matches('[data-sequence-tab]')){showTab(button.dataset.sequenceTab);return;}
    if(button.matches('[data-sequence-tier]')){changeTier(button.dataset.sequenceTier);return;}
    if(button.matches('[data-sequence-skill]')){buySkill(button.dataset.sequenceSkill);return;}
    if(button.matches('[data-sequence-fullscreen]')){
      const target=$('[data-sequence-view="game"]');
      if(document.fullscreenElement){document.exitFullscreen?.();}
      else target?.requestFullscreen?.().catch(()=>{});
    }
  }
  function panelHtml(){
    return '<section class="card game-panel sequence-game-panel" id="'+panelId+'" hidden aria-hidden="true" aria-labelledby="'+id+'Title">'+
      '<div class="game-shell"><div class="game-header"><div><h2 tabindex="-1" id="'+id+'Title">'+escapeHtml(name)+'</h2><p class="note">'+escapeHtml(note)+'</p></div>'+
      '<div class="link-actions game-shell-actions" data-nonrealm-game-toolbar="'+id+'">'+
      '<button class="action secondary game-shell-action" type="button" data-bl-info-button data-bl-info-title="How to Play" data-bl-info-text="'+escapeHtml(kind==='path'?'Watch adjacent tiles light up one at a time, then tap the identical route in order.':'Observe the movement cues in order, then tap the same movements in sequence. Mental recall only; no physical strikes are required.')+'"><span class="game-shell-action__icon" aria-hidden="true">?</span><span class="game-shell-action__label">How to Play</span></button>'+

      '<button class="action secondary game-shell-action" type="button" data-close-game-extension="'+id+'"><span class="game-shell-action__icon" aria-hidden="true">←</span><span class="game-shell-action__label">Games</span></button></div></div>'+
      '<p class="sequence-profile" data-sequence-profile aria-live="polite"></p>'+
      '<div class="game-toggle-row" role="tablist" aria-label="'+escapeHtml(name)+' views">'+
      ['game','round','skills','tiers','progress'].map(view=>'<button class="action ghost game-toggle-btn'+(view==='game'?' is-active':'')+'" type="button" data-sequence-tab="'+view+'" role="tab" aria-selected="'+(view==='game')+'">'+view.charAt(0).toUpperCase()+view.slice(1)+'</button>').join('')+'</div>'+
      '<div class="game-panel-stack"><section class="card game-card game-play-root" id="'+id.replace(/-([a-z])/g,(_,letter)=>letter.toUpperCase())+'GameCard" data-game-play-root="'+id+'" data-sequence-view="game"><div class="sequence-game-actions game-window-actions">'+
      '<button class="action ghost start-new-game-toggle game-shell-action" data-sequence-start type="button" title="New Game · Alt+N" aria-label="New Game"><span aria-hidden="true">＋</span><span class="sr-only">New Game</span></button>'+
      '<button class="action ghost auto-next-toggle game-shell-action" data-auto-next-toggle="'+app+'" aria-pressed="false" type="button" title="Auto New Game · Alt+A">A</button>'+
      '<button class="action ghost game-fullscreen-toggle game-shell-action" data-sequence-fullscreen type="button" title="Fullscreen · Alt+F" aria-label="Fullscreen">⛶</button></div><div data-sequence-board></div></section>'+
      '<section class="card game-card recreation-round-panel" data-sequence-view="round" hidden><div data-sequence-round></div></section>'+
      '<section class="card game-card" data-sequence-view="skills" hidden><div data-sequence-skills></div></section>'+
      '<section class="card game-card" data-sequence-view="tiers" hidden><div data-sequence-tiers></div></section>'+
      '<section class="card game-card" data-sequence-view="progress" hidden><div data-sequence-progress></div></section></div></div></section>';
  }
  const shell=createGameExtensionShell({
    id,panelId,name,order:config.order,art:config.art,note,benefit,
    styleUrl:'/systems/baseline-recreation/css/sequence-games.css?v=SEQUENCE_CORE_20261112_1',
    progressText,panelHtml,
    onOpen:()=>{globalThis.BaselineGamesMusic?.selectGame?.(id);render();},
    onClose:()=>{try{globalThis.BaselineGamesAutoNext?.clear?.(app);}catch(_){}cancelPreview();if(round&&round.phase==='preview'){round=null;message='Start a new round when ready.';}globalThis.BaselineGamesMusic?.selectGame?.('');}
  });
  function init(){
    profile=loadStoredProfile(app,defaultProfile,normalise);
    storageAuth=Boolean(globalThis.BaselineGameStorage?.isAuthenticated?.());
    shell.init();render();
    try{globalThis.BaselineGamesAutoNext?.sync?.();}catch(_){}
    document.addEventListener('click',handleClick);
    document.addEventListener('keydown',event=>{
      if(!document.getElementById(panelId)?.classList.contains('is-active')||event.ctrlKey||event.metaKey||!event.altKey||event.isComposing)return;
      const key=event.key.toLowerCase();
      if(key==='n'){event.preventDefault();start();}
      if(key==='f'){event.preventDefault();const el=$('[data-sequence-view="game"]');if(document.fullscreenElement)document.exitFullscreen?.();else el?.requestFullscreen?.().catch(()=>{});}
    });
    document.addEventListener('baseline:game-storage',event=>{
      if(event.detail?.sequenceGame)return;
      const authenticated=Boolean(globalThis.BaselineGameStorage?.isAuthenticated?.());
      if(authenticated===storageAuth)return;
      storageAuth=authenticated;cancelPreview();round=null;
      profile=loadStoredProfile(app,defaultProfile,normalise);render();
    });
    try{globalThis.BaselineGamesAutoNext?.register?.(app,start,()=>round?.phase==='finished');}catch(_){}
    globalThis['Baseline'+(kind==='path'?'PathRecall':'CombatSequence')]=Object.freeze({open:shell.open,close:shell.close,getProfile:()=>clone(profile)});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
}

(function(){
  'use strict';

  const APP='crossnumber';
  const BUILD='CROSS_NUMBER_RECREATION_COHERENCE_20261023_1';
  const root=document.getElementById('crossnumberGame');
  if(!root) return;
  const panel=root.closest('#crossnumberPanel');

  const TIERS=Object.freeze([
    Object.freeze({id:'starter',name:'Starter',unlockLevel:1,rows:3,cols:3,nodes:7,operators:['+','−'],fixed:3,minValue:2,maxValue:32,maxConstant:9,maxFactor:3,xpReward:18,bankReward:8,penalty:1}),
    Object.freeze({id:'field',name:'Field',unlockLevel:4,rows:3,cols:4,nodes:9,operators:['+','−'],fixed:3,minValue:2,maxValue:48,maxConstant:12,maxFactor:4,xpReward:26,bankReward:12,penalty:2}),
    Object.freeze({id:'forge',name:'Forge',unlockLevel:9,rows:4,cols:4,nodes:11,operators:['+','−','×','÷'],fixed:2,minValue:2,maxValue:64,maxConstant:16,maxFactor:5,xpReward:38,bankReward:18,penalty:3}),
    Object.freeze({id:'circuit',name:'Circuit',unlockLevel:16,rows:4,cols:5,nodes:13,operators:['+','−','×','÷'],fixed:2,minValue:2,maxValue:84,maxConstant:20,maxFactor:6,xpReward:54,bankReward:27,penalty:4}),
    Object.freeze({id:'citadel',name:'Citadel',unlockLevel:26,rows:5,cols:5,nodes:15,operators:['+','−','×','÷'],fixed:1,minValue:2,maxValue:108,maxConstant:24,maxFactor:7,xpReward:74,bankReward:39,penalty:5}),
    Object.freeze({id:'masterwork',name:'Masterwork',unlockLevel:40,rows:5,cols:6,nodes:17,operators:['+','−','×','÷'],fixed:1,minValue:2,maxValue:144,maxConstant:30,maxFactor:8,xpReward:98,bankReward:56,penalty:6})
  ]);

  const SKILLS=Object.freeze([
    Object.freeze({id:'insight',name:'Insight',max:4,unlockLevel:6,description:'Gain one additional hint use per puzzle per rank.'}),
    Object.freeze({id:'flow',name:'Flow',max:5,unlockLevel:1,description:'Gain +8% Cross Number XP per rank.'}),
    Object.freeze({id:'banker',name:'Banker',max:5,unlockLevel:1,description:'Gain +10% Bank reward per rank.'}),
    Object.freeze({id:'precision',name:'Precision',max:4,unlockLevel:1,description:'Reduce Bank loss from an invalid completed equation by 1 per rank.'}),
    Object.freeze({id:'structure',name:'Structure',max:4,unlockLevel:12,description:'Every two ranks add one starting anchor to future layouts and strengthen Cross Number\'s Baseline Realm link.'})
  ]);

  const DEFAULT_PROFILE=Object.freeze({
    app:APP,bank:0,xp:0,level:1,skillPoints:1,puzzlesSolved:0,gamesPlayed:0,currentStreak:0,bestStreak:0,
    cleanWinStreak:0,roundCounter:0,bestScore:0,selectedTier:'starter',recentLayouts:Object.freeze([]),
    skills:Object.freeze({insight:0,flow:0,banker:0,precision:0,structure:0}),activeRound:null
  });

  const refs={
    board:root.querySelector('[data-crossnumber-board]'),
    bank:root.querySelector('[data-crossnumber-bank]'),
    bankCount:root.querySelector('[data-crossnumber-bank-count]'),
    level:root.querySelector('[data-crossnumber-level]'),
    tier:root.querySelector('[data-crossnumber-tier-label]'),
    bankValue:root.querySelector('[data-crossnumber-bank-value]'),
    cleanStreak:root.querySelector('[data-crossnumber-clean-streak]'),
    cleanBonus:root.querySelector('[data-crossnumber-clean-bonus]'),
    xpMeta:root.querySelector('[data-crossnumber-xp-meta]'),
    xpFill:root.querySelector('[data-crossnumber-xp-fill]'),
    skillPoints:root.querySelector('[data-crossnumber-skill-points]'),
    tiers:root.querySelector('[data-crossnumber-tiers]'),
    skills:root.querySelector('[data-crossnumber-skills]'),
    realm:root.querySelector('[data-crossnumber-realm]'),
    stats:root.querySelector('[data-crossnumber-stats]'),
    mistakes:root.querySelector('[data-crossnumber-mistakes]'),
    timer:root.querySelector('[data-crossnumber-timer]'),
    score:root.querySelector('[data-crossnumber-score]'),
    seed:root.querySelector('[data-crossnumber-seed]'),
    hints:root.querySelector('[data-crossnumber-hints]'),
    status:root.querySelector('[data-crossnumber-status]'),
    complete:root.querySelector('[data-crossnumber-complete]'),
    completeTime:root.querySelector('[data-crossnumber-complete-time]'),
    completeScore:root.querySelector('[data-crossnumber-complete-score]'),
    completeReward:root.querySelector('[data-crossnumber-complete-reward]')
  };
  if(!refs.board||!refs.bank) return;

  const panelButtons=Array.from(root.querySelectorAll?.('button[data-crossnumber-panel]')||[]);
  const panelViews=Array.from(root.querySelectorAll?.('.crossnumber-panel-stack > [id]')||[]);
  const PANEL_ROUTES=Object.freeze({
    game:'crossnumberGamePanel',
    skills:'crossnumberSkillPanel',
    tiers:'crossnumberTierPanel',
    progress:'crossnumberProgressPanel'
  });
  let activePanel='crossnumberGamePanel';

  function autoNextApi(){
    const api=globalThis.BaselineGamesAutoNext;
    return api&&typeof api.enabled==='function'?api:null;
  }

  let profile=normaliseProfile(readStoredProfile()||DEFAULT_PROFILE);
  let round=null;
  let layout=null;
  let selectedTile='';
  let undoStack=[];
  let timerId=0;
  let dragTile='';
  let storageReloaded=false;
  let newGamePointerAt=0;

  function clone(value){
    try{return JSON.parse(JSON.stringify(value));}catch(_error){return null;}
  }
  function clamp(value,min,max){return Math.max(min,Math.min(max,value));}
  function int(value,fallback){
    const number=Math.round(Number(value));
    return Number.isFinite(number)?number:(fallback||0);
  }
  function escapeHtml(value){
    return String(value??'').replace(/[&<>"']/g,function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }
  function storageAuthority(){
    const storage=globalThis.BaselineGameStorage;
    return storage&&typeof storage.getProfile==='function'?storage:null;
  }
  function readStoredProfile(){
    try{
      const stored=storageAuthority()?.getProfile?.(APP);
      return stored&&typeof stored==='object'?stored:null;
    }catch(_error){return null;}
  }
  function saveProfile(options){
    options=options||{};
    profile.activeRound=round?serialiseRound(round):null;
    const storage=storageAuthority();
    try{
      storage?.setTemporaryProfile?.(APP,profile);
      storage?.saveProfile?.(APP,profile,{immediate:true,keepalive:false});
    }catch(_error){}
    if(options.progress){
      try{document.dispatchEvent(new CustomEvent('baseline:crossnumber-progress',{detail:{profile:clone(profile),contribution:getRealmContribution(profile)}}));}catch(_error){}
      try{globalThis.BaselineRealmHost?.resolveBonuses?.();}catch(_error){}
    }
  }

  function xpNeededForLevel(level){
    const value=Math.max(1,int(level,1));
    return 60+((value-1)*35)+((value-1)*(value-1)*4);
  }
  function cleanBonusPct(streak){
    return Math.min(24,Math.max(0,int(streak,0))*4);
  }
  function skillDefinition(id){return SKILLS.find(function(skill){return skill.id===id;})||null;}
  function tierDefinition(id){return TIERS.find(function(tier){return tier.id===id;})||TIERS[0];}
  function unlockedTiers(){
    return TIERS.filter(function(tier){return profile.level>=tier.unlockLevel;});
  }
  function spentSkillPoints(p){
    return SKILLS.reduce(function(sum,skill){return sum+Math.max(0,int(p.skills?.[skill.id],0));},0);
  }
  function normaliseProfile(input){
    const source=input&&typeof input==='object'?input:{};
    const out={
      app:APP,
      bank:Math.max(0,int(source.bank,0)),
      xp:Math.max(0,int(source.xp,0)),
      level:Math.max(1,int(source.level,1)),
      skillPoints:Math.max(0,int(source.skillPoints,1)),
      puzzlesSolved:Math.max(0,int(source.puzzlesSolved,0)),
      gamesPlayed:Math.max(0,int(source.gamesPlayed,0)),
      currentStreak:Math.max(0,int(source.currentStreak,0)),
      bestStreak:Math.max(0,int(source.bestStreak,0)),
      cleanWinStreak:Math.max(0,int(source.cleanWinStreak,0)),
      roundCounter:Math.max(0,int(source.roundCounter,0)),
      bestScore:Math.max(0,int(source.bestScore,0)),
      selectedTier:String(source.selectedTier||'starter'),
      recentLayouts:(Array.isArray(source.recentLayouts)?source.recentLayouts:[]).map(String).filter(Boolean).slice(-12),
      skills:Object.assign({insight:0,flow:0,banker:0,precision:0,structure:0},source.skills||{}),
      activeRound:source.activeRound&&typeof source.activeRound==='object'?clone(source.activeRound):null
    };
    SKILLS.forEach(function(skill){
      let value=clamp(int(out.skills[skill.id],0),0,skill.max);
      if(out.level<skill.unlockLevel) value=0;
      out.skills[skill.id]=value;
    });
    while(out.xp>=xpNeededForLevel(out.level)){
      out.xp-=xpNeededForLevel(out.level);
      out.level+=1;
    }
    out.skillPoints=Math.max(0,out.level-spentSkillPoints(out));
    const available=TIERS.filter(function(tier){return out.level>=tier.unlockLevel;});
    if(!available.some(function(tier){return tier.id===out.selectedTier;})) out.selectedTier=available[available.length-1].id;
    return out;
  }
  function awardXp(amount){
    let gained=Math.max(0,int(amount,0));
    profile.xp+=gained;
    let levels=0;
    while(profile.xp>=xpNeededForLevel(profile.level)){
      profile.xp-=xpNeededForLevel(profile.level);
      profile.level+=1;
      levels+=1;
    }
    profile.skillPoints=Math.max(0,profile.level-spentSkillPoints(profile));
    return levels;
  }

  function hashSeed(seed){
    let x=(Number(seed)>>>0)||0x6D2B79F5;
    x^=x>>>16;x=Math.imul(x,0x7feb352d);x^=x>>>15;x=Math.imul(x,0x846ca68b);x^=x>>>16;
    return x>>>0;
  }
  function rngFor(seed){
    let a=hashSeed(seed);
    return function(){
      a|=0;a=a+0x6D2B79F5|0;
      let t=Math.imul(a^a>>>15,1|a);
      t=t+Math.imul(t^t>>>7,61|t)^t;
      return ((t^t>>>14)>>>0)/4294967296;
    };
  }
  function randomInt(rng,min,max){
    return min+Math.floor(rng()*((max-min)+1));
  }
  function shuffled(list,rng){
    const copy=list.slice();
    for(let i=copy.length-1;i>0;i--){
      const j=Math.floor(rng()*(i+1));
      const temp=copy[i];copy[i]=copy[j];copy[j]=temp;
    }
    return copy;
  }
  function coordKey(r,c){return r+':'+c;}

  function chooseOperation(parentValue,tier,rng,existingValues){
    const operators=shuffled(tier.operators,rng);
    for(let pass=0;pass<4;pass++){
      for(const op of operators){
        for(let attempt=0;attempt<10;attempt++){
          let constant=0;
          let child=0;
          if(op==='+'){
            constant=randomInt(rng,2,tier.maxConstant);
            child=parentValue+constant;
          }else if(op==='−'){
            const upper=Math.min(tier.maxConstant,parentValue-tier.minValue);
            if(upper<2) continue;
            constant=randomInt(rng,2,upper);
            child=parentValue-constant;
          }else if(op==='×'){
            constant=randomInt(rng,2,tier.maxFactor);
            child=parentValue*constant;
          }else if(op==='÷'){
            const factors=[];
            for(let factor=2;factor<=tier.maxFactor;factor++){
              if(parentValue%factor===0&&parentValue/factor>=tier.minValue) factors.push(factor);
            }
            if(!factors.length) continue;
            constant=factors[Math.floor(rng()*factors.length)];
            child=parentValue/constant;
          }
          if(child<tier.minValue||child>tier.maxValue) continue;
          if(existingValues.has(child)&&attempt<7) continue;
          return {op:op,constant:constant,child:child};
        }
      }
    }
    let constant=randomInt(rng,2,Math.min(tier.maxConstant,8));
    let child=parentValue+constant;
    if(child>tier.maxValue){
      constant=Math.max(2,Math.min(parentValue-tier.minValue,constant));
      child=parentValue-constant;
      return {op:'−',constant:constant,child:child};
    }
    return {op:'+',constant:constant,child:child};
  }

  function generateShape(seed,tier){
    for(let restart=0;restart<24;restart++){
      const rng=rngFor(seed+(restart*7919));
      const start={r:randomInt(rng,0,tier.rows-1),c:randomInt(rng,0,tier.cols-1),id:'n0'};
      const nodes=[start];
      const used=new Set([coordKey(start.r,start.c)]);
      const growth=[];
      while(nodes.length<tier.nodes){
        const frontier=[];
        nodes.forEach(function(node){
          [[-1,0],[1,0],[0,-1],[0,1]].forEach(function(delta){
            const nr=node.r+delta[0],nc=node.c+delta[1];
            if(nr<0||nc<0||nr>=tier.rows||nc>=tier.cols||used.has(coordKey(nr,nc))) return;
            const degree=growth.filter(function(edge){return edge.parent===node.id||edge.child===node.id;}).length;
            const branchWeight=degree===1?1.5:degree===0?1.1:0.72;
            frontier.push({parent:node,r:nr,c:nc,weight:branchWeight});
          });
        });
        if(!frontier.length) break;
        const weighted=[];
        frontier.forEach(function(item){
          const repeats=Math.max(1,Math.round(item.weight*4));
          for(let i=0;i<repeats;i++) weighted.push(item);
        });
        const pick=weighted[Math.floor(rng()*weighted.length)];
        const child={r:pick.r,c:pick.c,id:'n'+nodes.length};
        nodes.push(child);
        used.add(coordKey(child.r,child.c));
        growth.push({parent:pick.parent.id,child:child.id});
      }
      if(nodes.length===tier.nodes) return {nodes:nodes,growth:growth,rng:rng};
    }
    throw new Error('Unable to generate Cross Number layout');
  }

  function normaliseLayoutCoordinates(nodes){
    const minR=Math.min.apply(null,nodes.map(function(node){return node.r;}));
    const minC=Math.min.apply(null,nodes.map(function(node){return node.c;}));
    return nodes.map(function(node){return Object.assign({},node,{r:node.r-minR,c:node.c-minC});});
  }

  function invertRelation(operation){
    if(operation==='+') return '−';
    if(operation==='−') return '+';
    if(operation==='×') return '÷';
    if(operation==='÷') return '×';
    return operation;
  }

  function generateLayout(seed,tierId){
    const tier=tierDefinition(tierId);
    const shape=generateShape(seed,tier);
    const nodes=normaliseLayoutCoordinates(shape.nodes);
    const byId=Object.fromEntries(nodes.map(function(node){return [node.id,node];}));
    const rng=shape.rng;
    const values=Object.create(null);
    const root=nodes.find(function(node){return node.id==='n0';})||nodes[0];
    values[root.id]=randomInt(rng,Math.max(tier.minValue,4),Math.min(tier.maxValue,18+(tier.unlockLevel>10?10:0)));
    const existingValues=new Set([values[root.id]]);
    const edgeRelations=[];

    shape.growth.forEach(function(raw){
      const parentValue=values[raw.parent];
      const relation=chooseOperation(parentValue,tier,rng,existingValues);
      values[raw.child]=relation.child;
      existingValues.add(relation.child);
      const parent=byId[raw.parent],child=byId[raw.child];
      const parentFirst=(parent.r===child.r)?parent.c<child.c:parent.r<child.r;
      if(parentFirst){
        edgeRelations.push({from:raw.parent,to:raw.child,op:relation.op,constant:relation.constant});
      }else{
        edgeRelations.push({from:raw.child,to:raw.parent,op:invertRelation(relation.op),constant:relation.constant});
      }
    });

    const maxR=Math.max.apply(null,nodes.map(function(node){return node.r;}));
    const maxC=Math.max.apply(null,nodes.map(function(node){return node.c;}));
    return {
      seed:seed,tierId:tier.id,nodes:nodes,edges:edgeRelations,values:values,
      rows:(maxR*4)+1,cols:(maxC*4)+1
    };
  }

  function layoutSignature(generated){
    return generated.edges.map(function(edge){
      return edge.op+':'+edge.constant+':'+generated.values[edge.from]+'>'+generated.values[edge.to];
    }).sort().join('|');
  }
  function signatureOverlap(a,b){
    const left=new Set(String(a||'').split('|').filter(Boolean));
    const right=new Set(String(b||'').split('|').filter(Boolean));
    if(!left.size||!right.size) return 0;
    let shared=0;
    left.forEach(function(item){ if(right.has(item)) shared+=1; });
    return shared/Math.max(1,Math.min(left.size,right.size));
  }
  function chooseDiverseLayout(tier){
    const recent=Array.isArray(profile.recentLayouts)?profile.recentLayouts:[];
    let best=null;
    for(let attempt=0;attempt<14;attempt+=1){
      const seed=hashSeed((Date.now()>>>0)^(profile.roundCounter*2654435761)^(tier.unlockLevel*977)^(attempt*2246822519));
      const candidate=generateLayout(seed,tier.id);
      const signature=layoutSignature(candidate);
      const worst=recent.reduce(function(max,old){return Math.max(max,signatureOverlap(signature,old));},0);
      if(!best||worst<best.worst) best={seed:seed,layout:candidate,signature:signature,worst:worst};
      if(worst<=0.18) break;
    }
    return best;
  }

  function fixedNodesForLayout(generated,tier,seed){
    const rng=rngFor(seed^0xA53C91);
    const extra=Math.floor(Math.max(0,int(profile.skills.structure,0))/2);
    const desired=Math.min(generated.nodes.length-2,tier.fixed+extra);
    const degrees=Object.create(null);
    generated.nodes.forEach(function(node){degrees[node.id]=0;});
    generated.edges.forEach(function(edge){degrees[edge.from]++;degrees[edge.to]++;});
    const candidates=generated.nodes.slice().sort(function(a,b){
      const degreeDelta=(degrees[b.id]||0)-(degrees[a.id]||0);
      if(degreeDelta) return degreeDelta;
      return rng()-.5;
    });
    const fixed=[];
    if(candidates[0]) fixed.push(candidates[0].id);
    while(fixed.length<desired){
      let best=null,bestDistance=-1;
      candidates.forEach(function(node){
        if(fixed.includes(node.id)) return;
        const nearest=Math.min.apply(null,fixed.map(function(id){
          const other=generated.nodes.find(function(candidate){return candidate.id===id;});
          return Math.abs(node.r-other.r)+Math.abs(node.c-other.c);
        }));
        if(nearest>bestDistance){bestDistance=nearest;best=node;}
      });
      if(!best) break;
      fixed.push(best.id);
    }
    return fixed;
  }

  function serialiseRound(value){
    if(!value) return null;
    return {
      seed:value.seed,tierId:value.tierId,fixedNodes:value.fixedNodes.slice(),assignments:Object.assign({},value.assignments),
      tileOrder:value.tileOrder.slice(),seconds:value.seconds,mistakes:value.mistakes,hintsUsed:value.hintsUsed,
      hadFailure:Boolean(value.hadFailure),startedAt:value.startedAt||0
    };
  }
  function restoreRound(data){
    if(!data||typeof data!=='object') return null;
    const tier=tierDefinition(data.tierId);
    if(profile.level<tier.unlockLevel) return null;
    try{
      const generated=generateLayout(Number(data.seed)>>>0,tier.id);
      return {
        seed:Number(data.seed)>>>0,tierId:tier.id,
        fixedNodes:Array.isArray(data.fixedNodes)?data.fixedNodes.filter(function(id){return generated.nodes.some(function(node){return node.id===id;});}):fixedNodesForLayout(generated,tier,Number(data.seed)>>>0),
        assignments:Object.assign(Object.create(null),data.assignments||{}),
        tileOrder:Array.isArray(data.tileOrder)?data.tileOrder.slice():[],
        seconds:Math.max(0,int(data.seconds,0)),mistakes:Math.max(0,int(data.mistakes,0)),hintsUsed:Math.max(0,int(data.hintsUsed,0)),
        hadFailure:Boolean(data.hadFailure),startedAt:Math.max(0,int(data.startedAt,0))
      };
    }catch(_error){return null;}
  }

  function currentTier(){return tierDefinition(round?.tierId||profile.selectedTier);}
  function tileIdForNode(nodeId){return 'tile-'+nodeId;}
  function tileOrigin(tileId){return String(tileId||'').replace(/^tile-/,'');}
  function tileValue(tileId){return layout?.values?.[tileOrigin(tileId)]??null;}
  function fixedSet(){return new Set(round?.fixedNodes||[]);}
  function assignedValue(nodeId){
    if(!layout||!round) return null;
    if(fixedSet().has(nodeId)) return layout.values[nodeId];
    const tileId=round.assignments[nodeId];
    return tileId?tileValue(tileId):null;
  }
  function edgeCorrect(edge){
    const left=assignedValue(edge.from),right=assignedValue(edge.to);
    if(left===null||right===null) return null;
    if(edge.op==='+') return left+edge.constant===right;
    if(edge.op==='−') return left-edge.constant===right;
    if(edge.op==='×') return left*edge.constant===right;
    if(edge.op==='÷') return edge.constant!==0&&left/edge.constant===right;
    return false;
  }
  function edgesForNode(nodeId){
    return layout.edges.filter(function(edge){return edge.from===nodeId||edge.to===nodeId;});
  }

  function createNewRound(options){
    options=options||{};
    try{autoNextApi()?.clear?.(APP);}catch(_error){}
    const tier=tierDefinition(options.tierId||profile.selectedTier);
    if(profile.level<tier.unlockLevel) return;
    profile.selectedTier=tier.id;
    profile.roundCounter+=1;
    profile.gamesPlayed+=1;
    const diverse=chooseDiverseLayout(tier);
    const seed=diverse.seed;
    layout=diverse.layout;
    profile.recentLayouts=(Array.isArray(profile.recentLayouts)?profile.recentLayouts:[]).concat(diverse.signature).slice(-12);
    const fixed=fixedNodesForLayout(layout,tier,seed);
    const movable=layout.nodes.filter(function(node){return !fixed.includes(node.id);});
    const rng=rngFor(seed^0xC0FFEE);
    round={
      seed:seed,tierId:tier.id,fixedNodes:fixed,assignments:Object.create(null),
      tileOrder:shuffled(movable.map(function(node){return tileIdForNode(node.id);}),rng),
      seconds:0,mistakes:0,hintsUsed:0,hadFailure:false,startedAt:Date.now()
    };
    selectedTile='';
    undoStack=[];
    if(refs.complete) refs.complete.setAttribute('aria-hidden','true');
    saveProfile();
    renderAll();
    setStatus('New '+tier.name+' layout generated. Place the number tiles so every equation balances.');
    startTimer();
  }

  function syncFullscreenControl(){
    const button=root.querySelector('[data-crossnumber-action="fullscreen"]');
    if(!button) return;
    const active=document.fullscreenElement===document.getElementById('crossnumberGamePanel');
    button.setAttribute('aria-pressed',String(active));
    button.textContent=active?'Exit Full Screen':'Full Screen';
  }
  function toggleFullscreen(){
    const gamePanel=document.getElementById('crossnumberGamePanel');
    if(!gamePanel||!document.fullscreenEnabled) return;
    if(document.fullscreenElement===gamePanel) document.exitFullscreen?.().catch(function(){});
    else if(!document.fullscreenElement) gamePanel.requestFullscreen?.().catch(function(){});
  }

  function restartRound(){
    if(!round||!layout) return;
    stopTimer();
    const tier=tierDefinition(round.tierId);
    const fixed=fixedNodesForLayout(layout,tier,round.seed);
    const movable=layout.nodes.filter(function(node){return !fixed.includes(node.id);});
    const rng=rngFor(round.seed^0xC0FFEE);
    round={
      seed:round.seed,tierId:round.tierId,fixedNodes:fixed,assignments:Object.create(null),
      tileOrder:shuffled(movable.map(function(node){return tileIdForNode(node.id);}),rng),
      seconds:0,mistakes:0,hintsUsed:0,hadFailure:false,startedAt:Date.now()
    };
    selectedTile='';
    undoStack=[];
    saveProfile();
    renderAll();
    setStatus('Layout restarted. Place the number tiles so every equation balances.');
    startTimer();
  }

  function nodeAt(id){return layout.nodes.find(function(node){return node.id===id;})||null;}
  function buildBoard(){
    if(!layout||!round) return;
    const map=new Map();
    const fixed=fixedSet();
    layout.nodes.forEach(function(node){
      map.set(coordKey(node.r*4,node.c*4),{type:'value',node:node});
    });
    layout.edges.forEach(function(edge){
      const from=nodeAt(edge.from),to=nodeAt(edge.to);
      const fr=from.r*4,fc=from.c*4,tr=to.r*4,tc=to.c*4;
      const dr=Math.sign(tr-fr),dc=Math.sign(tc-fc);
      map.set(coordKey(fr+dr,fc+dc),{type:'operator',text:edge.op});
      map.set(coordKey(fr+(dr*2),fc+(dc*2)),{type:'constant',text:String(edge.constant)});
      map.set(coordKey(fr+(dr*3),fc+(dc*3)),{type:'equals',text:'='});
    });
    refs.board.style.setProperty('--crossnumber-cols',String(layout.cols));
    refs.board.style.setProperty('--crossnumber-rows',String(layout.rows));
    refs.board.innerHTML='';
    for(let r=0;r<layout.rows;r++){
      for(let c=0;c<layout.cols;c++){
        const item=map.get(coordKey(r,c));
        if(!item){
          const spacer=document.createElement('div');
          spacer.className='crossnumber-space';
          spacer.setAttribute('aria-hidden','true');
          refs.board.appendChild(spacer);
          continue;
        }
        if(item.type==='value'){
          const node=item.node;
          const isFixed=fixed.has(node.id);
          const button=document.createElement('button');
          button.type='button';
          button.className='crossnumber-number-cell'+(isFixed?' is-fixed':'');
          button.dataset.node=node.id;
          if(!isFixed) button.dataset.dropzone='true';
          const value=assignedValue(node.id);
          button.textContent=value===null?'':String(value);
          button.setAttribute('aria-label',(isFixed?'Fixed number ':'Number position ')+String(value===null?'empty':value));
          if(round.assignments[node.id]) button.dataset.tile=round.assignments[node.id];
          refs.board.appendChild(button);
          continue;
        }
        const cell=document.createElement('div');
        cell.className='crossnumber-symbol-cell is-'+item.type;
        cell.textContent=item.text;
        refs.board.appendChild(cell);
      }
    }
    refreshEquationStates();
  }

  function allTiles(){
    return layout.nodes.filter(function(node){return !fixedSet().has(node.id);}).map(function(node){
      return {id:tileIdForNode(node.id),value:layout.values[node.id]};
    });
  }
  function availableTiles(){
    const used=new Set(Object.values(round.assignments));
    const lookup=new Map(allTiles().map(function(tile){return [tile.id,tile];}));
    const ordered=(round.tileOrder.length?round.tileOrder:allTiles().map(function(tile){return tile.id;}))
      .map(function(id){return lookup.get(id);}).filter(Boolean);
    return ordered.filter(function(tile){return !used.has(tile.id);});
  }
  function renderBank(){
    const tiles=availableTiles();
    refs.bank.innerHTML=tiles.map(function(tile){
      return '<button class="crossnumber-number-tile'+(selectedTile===tile.id?' is-selected':'')+'" type="button" draggable="true" data-tile-id="'+escapeHtml(tile.id)+'" aria-label="Number tile '+tile.value+'">'+tile.value+'</button>';
    }).join('');
    if(refs.bankCount) refs.bankCount.textContent=tiles.length+' remaining';
  }

  function snapshot(){
    if(!round) return;
    undoStack.push({assignments:Object.assign({},round.assignments),selectedTile:selectedTile,mistakes:round.mistakes,hadFailure:round.hadFailure});
    if(undoStack.length>40) undoStack.shift();
  }
  function undo(){
    const state=undoStack.pop();
    if(!state){setStatus('Nothing to undo.');return;}
    round.assignments=Object.assign(Object.create(null),state.assignments||{});
    selectedTile=state.selectedTile||'';
    round.mistakes=Math.max(0,int(state.mistakes,0));
    round.hadFailure=Boolean(state.hadFailure);
    buildBoard();renderBank();renderRoundHud();saveProfile();
    setStatus('Last move undone.');
  }

  function placeTile(nodeId,tileId,options){
    options=options||{};
    if(!round||!layout||fixedSet().has(nodeId)||tileValue(tileId)===null) return;
    if(!options.noSnapshot) snapshot();
    const sourceNode=Object.keys(round.assignments).find(function(id){return round.assignments[id]===tileId;})||'';
    const displaced=round.assignments[nodeId]||'';
    if(sourceNode&&sourceNode!==nodeId) delete round.assignments[sourceNode];
    if(displaced&&displaced!==tileId&&sourceNode&&sourceNode!==nodeId) round.assignments[sourceNode]=displaced;
    else if(displaced&&displaced!==tileId) delete round.assignments[nodeId];
    round.assignments[nodeId]=tileId;
    selectedTile='';
    buildBoard();renderBank();

    if(!options.silent){
      const completed=edgesForNode(nodeId).map(edgeCorrect).filter(function(state){return state!==null;});
      if(completed.some(function(state){return state===false;})){
        registerMistake(nodeId);
      }else if(completed.length){
        setStatus('Equation fits. Keep linking the remaining numbers.');
      }else setStatus('Tile placed.');
    }
    renderRoundHud();
    renderProgression();
    checkComplete();
    saveProfile();
  }

  function registerMistake(nodeId){
    const tier=currentTier();
    const penalty=Math.max(0,tier.penalty-Math.max(0,int(profile.skills.precision,0)));
    round.mistakes+=1;
    round.hadFailure=true;
    profile.currentStreak=0;
    if(penalty>0) profile.bank=Math.max(0,profile.bank-penalty);
    const cell=refs.board.querySelector('[data-node="'+nodeId+'"]');
    if(cell){
      cell.classList.add('is-wrong');
      window.setTimeout(function(){cell.classList.remove('is-wrong');},650);
    }
    setStatus('That placement breaks a completed equation.'+(penalty?' −'+penalty+' Bank.':' Precision prevented the Bank penalty.'));
    saveProfile({progress:true});
  }

  function refreshEquationStates(){
    if(!layout) return;
    layout.nodes.forEach(function(node){
      const cell=refs.board.querySelector('[data-node="'+node.id+'"]');
      if(!cell) return;
      cell.classList.remove('is-correct','has-conflict');
      const states=edgesForNode(node.id).map(edgeCorrect);
      if(states.some(function(state){return state===false;})) cell.classList.add('has-conflict');
      else if(states.length&&states.every(function(state){return state===true;})) cell.classList.add('is-correct');
    });
  }

  function hintsAllowed(){return 1+Math.max(0,int(profile.skills.insight,0));}
  function useHint(){
    if(!round||round.hintsUsed>=hintsAllowed()){setStatus('No hints remaining for this layout.');return;}
    const target=layout.nodes.find(function(node){
      if(fixedSet().has(node.id)) return false;
      return assignedValue(node.id)!==layout.values[node.id];
    });
    if(!target){checkComplete();return;}
    snapshot();
    const correctTile=tileIdForNode(target.id);
    const sourceNode=Object.keys(round.assignments).find(function(id){return round.assignments[id]===correctTile;});
    if(sourceNode) delete round.assignments[sourceNode];
    if(round.assignments[target.id]) delete round.assignments[target.id];
    round.assignments[target.id]=correctTile;
    round.hintsUsed+=1;
    const remainingHints=Math.max(0,hintsAllowed()-round.hintsUsed);
    selectedTile='';
    buildBoard();renderBank();renderRoundHud();checkComplete();saveProfile();
    if(round) setStatus('Hint placed one correct number. '+remainingHints+' hint'+(remainingHints===1?'':'s')+' remaining.');
  }

  function allSolved(){
    if(!round||!layout) return false;
    const movable=layout.nodes.filter(function(node){return !fixedSet().has(node.id);});
    if(movable.some(function(node){return !round.assignments[node.id];})) return false;
    return layout.edges.every(function(edge){return edgeCorrect(edge)===true;});
  }
  function scoreForRound(){
    if(!round) return 0;
    const tier=currentTier();
    const base=8000+(TIERS.indexOf(tier)*1800);
    const structureBonus=1+(Math.max(0,int(profile.skills.structure,0))*0.05);
    return Math.max(0,Math.round((base-(round.seconds*3)-(round.mistakes*240)-(round.hintsUsed*400))*structureBonus));
  }
  function calculateRewards(){
    const tier=currentTier();
    const nextClean=round.hadFailure?0:profile.cleanWinStreak+1;
    const cleanPct=cleanBonusPct(nextClean);
    const cleanMult=1+(cleanPct/100);
    const xpMult=(1+(Math.max(0,int(profile.skills.flow,0))*0.08))*cleanMult;
    const bankMult=(1+(Math.max(0,int(profile.skills.banker,0))*0.10))*cleanMult;
    return {xp:Math.round(tier.xpReward*xpMult),bank:Math.round(tier.bankReward*bankMult),nextClean:nextClean,cleanPct:cleanPct};
  }
  function checkComplete(){
    refreshEquationStates();
    if(!allSolved()) return;
    stopTimer();
    const rewards=calculateRewards();
    const score=scoreForRound();
    profile.puzzlesSolved+=1;
    profile.bank+=rewards.bank;
    profile.currentStreak+=1;
    profile.bestStreak=Math.max(profile.bestStreak,profile.currentStreak);
    profile.cleanWinStreak=rewards.nextClean;
    profile.bestScore=Math.max(profile.bestScore,score);
    const levels=awardXp(rewards.xp);
    const completedTime=round.seconds;
    round=null;
    selectedTile='';
    saveProfile({progress:true});
    renderProgression();
    if(refs.complete){
      refs.complete.setAttribute('aria-hidden','false');
      if(refs.completeTime) refs.completeTime.textContent=formatTime(completedTime);
      if(refs.completeScore) refs.completeScore.textContent=String(score);
      if(refs.completeReward) refs.completeReward.textContent='+'+rewards.bank+' Bank · +'+rewards.xp+' XP'+(rewards.cleanPct?' · clean bonus +'+rewards.cleanPct+'%':'')+(levels?' · +'+levels+' level'+(levels>1?'s':''):'');
    }
    setStatus('Every equation balances. Cross Number complete.');
    try{autoNextApi()?.schedule?.(APP,function(){createNewRound({tierId:profile.selectedTier});});}catch(_error){}
  }

  function spendSkill(id){
    const skill=skillDefinition(id);
    if(!skill||profile.skillPoints<=0||profile.level<skill.unlockLevel||profile.skills[id]>=skill.max) return;
    profile.skills[id]+=1;
    profile.skillPoints=Math.max(0,profile.level-spentSkillPoints(profile));
    saveProfile({progress:true});
    renderProgression();
    setStatus(skill.name+' increased to '+profile.skills[id]+'.'+(id==='structure'?' Extra anchors apply to the next layout.':''));
  }

  function selectTier(id){
    const tier=tierDefinition(id);
    if(profile.level<tier.unlockLevel){setStatus(tier.name+' unlocks at level '+tier.unlockLevel+'.');return;}
    profile.selectedTier=tier.id;
    saveProfile();
    createNewRound({tierId:tier.id});
    setCrossnumberPanel(PANEL_ROUTES.game,'push');
  }

  function sortBank(){
    if(!round) return;
    round.tileOrder=allTiles().slice().sort(function(a,b){return a.value-b.value||a.id.localeCompare(b.id);}).map(function(tile){return tile.id;});
    renderBank();saveProfile();
  }

  function panelFromLocation(){
    try{
      const key=String(new URLSearchParams(window.location.search||'').get('crosspanel')||'game').toLowerCase();
      return PANEL_ROUTES[key]||PANEL_ROUTES.game;
    }catch(_error){return PANEL_ROUTES.game;}
  }
  function panelRouteKey(targetId){
    return Object.keys(PANEL_ROUTES).find(function(key){return PANEL_ROUTES[key]===targetId;})||'game';
  }
  function writePanelRoute(targetId,mode){
    if(!mode||mode==='none') return;
    try{
      const url=new URL(window.location.href);
      const key=panelRouteKey(targetId);
      if(key==='game') url.searchParams.delete('crosspanel');
      else url.searchParams.set('crosspanel',key);
      const next=url.pathname+(url.searchParams.toString()?'?'+url.searchParams.toString():'')+url.hash;
      const method=mode==='replace'?'replaceState':'pushState';
      window.history[method]({baselineCrossnumber:true,panel:key},'',next);
    }catch(_error){}
  }
  function setCrossnumberPanel(targetId,historyMode){
    const valid=panelViews.some(function(view){return view.id===targetId;})?targetId:PANEL_ROUTES.game;
    activePanel=valid;
    panelViews.forEach(function(view){view.hidden=view.id!==valid;});
    panelButtons.forEach(function(button){
      const selected=button.dataset.crossnumberPanel===valid;
      button.classList.toggle('is-active',selected);
      button.setAttribute('aria-expanded',selected?'true':'false');
    });
    writePanelRoute(valid,historyMode);
    if(valid===PANEL_ROUTES.game) startTimer();
    else stopTimer();
  }

  function formatTime(value){
    const mins=Math.floor(Math.max(0,value)/60),secs=Math.max(0,value)%60;
    return String(mins).padStart(2,'0')+':'+String(secs).padStart(2,'0');
  }
  function startTimer(){
    if(timerId||!round||(panel&&panel.hidden)||activePanel!==PANEL_ROUTES.game) return;
    timerId=window.setInterval(function(){
      if(panel&&panel.hidden) return;
      if(!round) return;
      round.seconds+=1;
      renderRoundHud();
      if(round.seconds%5===0) saveProfile();
    },1000);
  }
  function stopTimer(){if(timerId){window.clearInterval(timerId);timerId=0;}}
  function setStatus(message){if(refs.status) refs.status.textContent=message;}

  function renderRoundHud(){
    if(refs.mistakes) refs.mistakes.textContent=String(round?.mistakes||0);
    if(refs.timer) refs.timer.textContent=formatTime(round?.seconds||0);
    if(refs.score) refs.score.textContent=String(round?scoreForRound():0);
    if(refs.seed) refs.seed.textContent=round?('#'+String(round.seed>>>0).slice(-6)):'—';
    if(refs.hints) refs.hints.textContent=round?(Math.max(0,hintsAllowed()-round.hintsUsed)+' / '+hintsAllowed()):String(hintsAllowed());
  }

  function renderTiers(){
    if(!refs.tiers) return;
    refs.tiers.innerHTML=TIERS.map(function(tier){
      const locked=profile.level<tier.unlockLevel;
      const selected=(round?.tierId||profile.selectedTier)===tier.id;
      return '<button class="crossnumber-tier-button'+(selected?' is-active':'')+'" type="button" data-crossnumber-tier="'+tier.id+'"'+(locked?' disabled':'')+'>'+
        '<strong>'+escapeHtml(tier.name)+'</strong>'+
        '<span>'+(locked?'Unlock L'+tier.unlockLevel:(tier.nodes+' numbers · '+tier.operators.join(' ')))+'</span>'+
      '</button>';
    }).join('');
  }

  function renderSkills(){
    if(!refs.skills) return;
    refs.skills.innerHTML=SKILLS.map(function(skill){
      const level=Math.max(0,int(profile.skills[skill.id],0));
      const locked=profile.level<skill.unlockLevel;
      const maxed=level>=skill.max;
      const canBuy=!locked&&!maxed&&profile.skillPoints>0;
      return '<article class="crossnumber-skill-card'+(locked?' is-locked':'')+'">'+
        '<div class="crossnumber-skill-head"><div><strong>'+escapeHtml(skill.name)+'</strong><span>Rank '+level+' / '+skill.max+(locked?' · unlock L'+skill.unlockLevel:'')+'</span></div>'+
        '<button class="action ghost" type="button" data-crossnumber-skill="'+skill.id+'"'+(canBuy?'':' disabled')+'>+</button></div>'+
        '<p>'+escapeHtml(skill.description)+'</p>'+
      '</article>';
    }).join('');
  }

  function getRealmContribution(source){
    const p=normaliseProfile(source||profile);
    const structure=Math.max(0,int(p.skills.structure,0));
    const boss=Math.min(.08,Math.min(.045,Math.max(0,p.level-1)*.0015)+(p.level>=10?.02:0)+(structure*.004));
    const clues=Math.min(.08,Math.min(.04,Math.max(0,p.level-1)*.0012)+(p.level>=5?.02:0)+(structure*.004));
    const costReduction=Math.min(.06,Math.min(.03,Math.max(0,p.level-1)*.0008)+(p.level>=20?.02:0)+(structure*.0025));
    const traits=[];
    if(p.level>=5) traits.push('Cross Number: Constraint Reading');
    if(p.level>=10) traits.push('Cross Number: Linked Planning');
    if(p.level>=20) traits.push('Cross Number: Resource Arithmetic');
    return {
      level:p.level,
      bossDamageMult:1+boss,
      clueDropChance:clues,
      upgradeCostMult:1-costReduction,
      unlockedTraits:traits
    };
  }

  function renderRealmContribution(){
    if(!refs.realm) return;
    const contribution=getRealmContribution(profile);
    refs.realm.innerHTML=
      '<div class="crossnumber-realm-title"><strong>Baseline Realm — Linked Reasoning</strong><span>Cross Number progression contributes bounded Realm bonuses.</span></div>'+
      '<div class="crossnumber-realm-grid">'+
        '<div><span>Boss damage</span><strong>+'+Math.round((contribution.bossDamageMult-1)*1000)/10+'%</strong></div>'+
        '<div><span>Clue discovery</span><strong>+'+Math.round(contribution.clueDropChance*1000)/10+'%</strong></div>'+
        '<div><span>Upgrade efficiency</span><strong>−'+Math.round((1-contribution.upgradeCostMult)*1000)/10+'%</strong></div>'+
      '</div>'+
      '<p>Milestones: Player Rank 5 Constraint Reading · Player Rank 10 Linked Planning · Player Rank 20 Resource Arithmetic. Cross Number helps Realm, but its contribution is capped so it never becomes mandatory.</p>';
  }

  function renderStats(){
    if(!refs.stats) return;
    const needed=xpNeededForLevel(profile.level);
    const pct=clamp((profile.xp/Math.max(1,needed))*100,0,100);
    const remaining=Math.max(0,needed-profile.xp);
    const next=TIERS.find(function(tier){return profile.level<tier.unlockLevel;});
    const stats=[
      ['Puzzles solved',profile.puzzlesSolved],
      ['Runs started',profile.gamesPlayed],
      ['Best streak',profile.bestStreak],
      ['Current streak',profile.currentStreak],
      ['Clean streak',profile.cleanWinStreak],
      ['Best score',profile.bestScore],
      ['Bank earned',profile.bank],
      ['Current tier',tierDefinition(profile.selectedTier).name],
      ['Next tier',next?(next.name+' · L'+next.unlockLevel):'All unlocked']
    ];
    refs.stats.innerHTML=
      '<section class="coherent-progress-overview">' +
        '<div class="coherent-progress-heading"><div><span class="coherent-progress-kicker">Cross Number</span><strong>Player Rank '+profile.level+'</strong></div><div class="coherent-progress-next">'+remaining+' XP to Player Rank '+(profile.level+1)+'</div></div>' +
        '<div class="coherent-progress-xp-meta"><span>'+profile.xp+' / '+needed+' XP</span><span>'+Math.round(pct)+'%</span></div>' +
        '<div class="coherent-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="'+needed+'" aria-valuenow="'+profile.xp+'"><span style="width:'+pct+'%"></span></div>' +
      '</section>' +
      '<div class="coherent-progress-grid">' +
        stats.map(function(item){return '<div class="coherent-progress-stat"><span>'+escapeHtml(item[0])+'</span><strong>'+escapeHtml(item[1])+'</strong></div>';}).join('') +
      '</div>';
  }

  function renderProgression(){
    profile=normaliseProfile(profile);
    const tier=tierDefinition(round?.tierId||profile.selectedTier);
    const needed=xpNeededForLevel(profile.level);
    if(refs.level) refs.level.textContent='Player Rank - '+profile.level;
    if(refs.tier) refs.tier.textContent=tier.name;
    if(refs.bankValue) refs.bankValue.textContent=String(profile.bank);
    if(refs.cleanStreak) refs.cleanStreak.textContent=String(profile.cleanWinStreak);
    if(refs.cleanBonus) refs.cleanBonus.textContent='+'+cleanBonusPct(profile.cleanWinStreak)+'%';
    if(refs.xpMeta) refs.xpMeta.textContent=profile.xp+' / '+needed+' XP';
    if(refs.xpFill) refs.xpFill.style.width=clamp((profile.xp/needed)*100,0,100)+'%';
    if(refs.skillPoints) refs.skillPoints.textContent=String(profile.skillPoints);
    const gamePanel=document.getElementById('crossnumberGamePanel');
    if(gamePanel){
      let live=gamePanel.querySelector('[data-live-xp="crossnumber"]');
      if(!live){
        live=document.createElement('div');
        live.className='game-live-xp';
        live.setAttribute('data-live-xp','crossnumber');
        const toolbar=gamePanel.querySelector('.crossnumber-round-toolbar');
        if(toolbar) toolbar.insertAdjacentElement('afterend',live);
        else gamePanel.prepend(live);
      }
      const pct=clamp((profile.xp/Math.max(1,needed))*100,0,100);
      live.innerHTML='<strong>Player Rank '+profile.level+'</strong><div class="game-live-xp__bar"><span style="width:'+pct+'%"></span></div><span>'+profile.xp+' / '+needed+' XP</span>';
    }

    renderTiers();renderSkills();renderRealmContribution();renderStats();
    try{autoNextApi()?.sync?.();}catch(_error){}
  }

  function fitCrossNumberBoard(){
    if(!refs.board || !layout) return;
    const scroll=refs.board.closest('.crossnumber-board-scroll');
    if(!scroll) return;
    const panel=document.getElementById('crossnumberGamePanel');
    const full=document.fullscreenElement===panel;
    const rect=scroll.getBoundingClientRect();
    const ratio=Math.max(.25,Number(layout.cols||1)/Math.max(1,Number(layout.rows||1)));
    const availableWidth=Math.max(220,rect.width-16);
    const viewportBottom=Math.max(260,(window.visualViewport?.height||window.innerHeight||800)-rect.top-(full?10:22));
    const availableHeight=full ? Math.max(220,rect.height-16) : Math.max(220,Math.min(viewportBottom,(window.visualViewport?.height||window.innerHeight||800)*0.72));
    const width=Math.max(220,Math.min(availableWidth,availableHeight*ratio,full?1200:820));
    refs.board.style.width=Math.floor(width)+'px';
    refs.board.style.maxWidth='none';
  }

  function renderAll(){
    if(!round){
      round=restoreRound(profile.activeRound);
      if(round) layout=generateLayout(round.seed,round.tierId);
    }
    if(!round){
      layout=null;
      refs.board.innerHTML='<div class="crossnumber-empty-board">Open Cross Number or choose New Game to generate a puzzle.</div>';
      refs.board.style.removeProperty('--crossnumber-cols');
      refs.board.style.removeProperty('--crossnumber-rows');
      refs.bank.innerHTML='';
      if(refs.bankCount) refs.bankCount.textContent='0 remaining';
      renderRoundHud();
      renderProgression();
      return;
    }
    if(!layout||layout.seed!==round.seed||layout.tierId!==round.tierId) layout=generateLayout(round.seed,round.tierId);
    buildBoard();renderBank();renderRoundHud();renderProgression();
    window.requestAnimationFrame(fitCrossNumberBoard);
  }

  refs.bank.addEventListener('click',function(event){
    const tile=event.target.closest('[data-tile-id]');
    if(!tile||!round) return;
    selectedTile=selectedTile===tile.dataset.tileId?'':tile.dataset.tileId;
    renderBank();
    if(selectedTile) setStatus('Number '+tileValue(selectedTile)+' selected. Choose an open equation cell.');
  });
  refs.bank.addEventListener('dragstart',function(event){
    const tile=event.target.closest('[data-tile-id]');
    if(!tile) return;
    dragTile=tile.dataset.tileId;
    event.dataTransfer.effectAllowed='move';
    try{event.dataTransfer.setData('text/plain',dragTile);}catch(_error){}
  });
  refs.board.addEventListener('dragover',function(event){
    if(event.target.closest('[data-dropzone="true"]')) event.preventDefault();
  });
  refs.board.addEventListener('drop',function(event){
    const cell=event.target.closest('[data-dropzone="true"]');
    if(!cell) return;
    event.preventDefault();
    const tileId=dragTile||event.dataTransfer.getData('text/plain');
    dragTile='';
    if(tileId) placeTile(cell.dataset.node,tileId);
  });
  refs.board.addEventListener('click',function(event){
    const cell=event.target.closest('[data-node]');
    if(!cell||cell.classList.contains('is-fixed')||!round) return;
    const nodeId=cell.dataset.node;
    startTimer();
    if(selectedTile){placeTile(nodeId,selectedTile);return;}
    if(round.assignments[nodeId]){
      snapshot();
      selectedTile=round.assignments[nodeId];
      delete round.assignments[nodeId];
      buildBoard();renderBank();renderRoundHud();saveProfile();
      setStatus('Tile picked up. Choose another equation cell.');
    }else setStatus('Select a number tile from the bank first.');
  });

  root.addEventListener('pointerdown',function(event){
    if(event.pointerType==='mouse' && event.button!==0) return;
    const button=event.target instanceof Element ? event.target.closest('[data-crossnumber-action="new"]') : null;
    if(!button) return;
    event.preventDefault();
    event.stopPropagation();
    if(typeof event.stopImmediatePropagation==='function') event.stopImmediatePropagation();
    newGamePointerAt=performance.now();
    createNewRound({tierId:profile.selectedTier});
  },true);

  root.addEventListener('click',function(event){
    const panelButton=event.target.closest('button[data-crossnumber-panel]');
    if(panelButton){setCrossnumberPanel(panelButton.dataset.crossnumberPanel,'push');return;}
    const tierButton=event.target.closest('[data-crossnumber-tier]');
    if(tierButton){selectTier(tierButton.dataset.crossnumberTier);return;}
    const skillButton=event.target.closest('[data-crossnumber-skill]');
    if(skillButton){spendSkill(skillButton.dataset.crossnumberSkill);return;}
    const action=event.target.closest('[data-crossnumber-action]');
    if(!action) return;
    const name=action.dataset.crossnumberAction;
    if(name==='hint') useHint();
    if(name==='undo') undo();
    if(name==='sort') sortBank();
    if(name==='restart') restartRound();
    if(name==='fullscreen') toggleFullscreen();
    if(name==='new' && performance.now()-newGamePointerAt>=700) createNewRound({tierId:profile.selectedTier});
  });

  document.addEventListener('baseline:crossnumber-open',function(){
    setCrossnumberPanel(panelFromLocation(),'none');
    if(!round) createNewRound({tierId:profile.selectedTier});
    else startTimer();
  });
  document.addEventListener('fullscreenchange',syncFullscreenControl);
  window.addEventListener('popstate',function(){
    if(panel&&panel.hidden) return;
    setCrossnumberPanel(panelFromLocation(),'none');
  });
  document.addEventListener('baseline:game-storage',function(){
    if(storageReloaded) return;
    const stored=storageAuthority()?.getProfile?.(APP);
    if(!stored||typeof stored!=='object') return;
    storageReloaded=true;
    stopTimer();
    profile=normaliseProfile(stored);
    round=restoreRound(profile.activeRound);
    layout=round?generateLayout(round.seed,round.tierId):null;
    selectedTile='';
    undoStack=[];
    renderAll();
    try{document.dispatchEvent(new CustomEvent('baseline:crossnumber-progress',{detail:{profile:clone(profile),contribution:getRealmContribution(profile)}}));}catch(_error){}
    startTimer();
  });

  const hadSavedRound=Boolean(profile.activeRound);
  profile=normaliseProfile(profile);
  round=restoreRound(profile.activeRound);
  layout=round?generateLayout(round.seed,round.tierId):null;
  renderAll();
  syncFullscreenControl();
  setCrossnumberPanel(panelFromLocation(),'none');
  if(hadSavedRound&&round) setStatus('Your saved Cross Number game has been restored.');
  else setStatus('Open Cross Number and press New Game when you are ready.');
  startTimer();

  globalThis.BaselineCrossnumber=Object.freeze({
    build:BUILD,
    getProfile:function(){return clone(profile);},
    getRealmContribution:function(){return getRealmContribution(profile);},
    tiers:TIERS,
    skills:SKILLS
  });
  document.documentElement.setAttribute('data-crossnumber-build',BUILD);
  try{document.dispatchEvent(new CustomEvent('baseline:crossnumber-progress',{detail:{profile:clone(profile),contribution:getRealmContribution(profile)}}));}catch(_error){}
  window.addEventListener('pagehide',function(){saveProfile();});
})();

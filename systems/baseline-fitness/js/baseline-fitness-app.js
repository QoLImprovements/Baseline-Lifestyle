/* Baseline Fitness: canonical plan generator and workout runner. */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_VOICE_WORKOUT_20260712_1';
  const API='/systems/baseline-fitness/api';
  const TYPES=Object.freeze({STANDARD:'standard-reps',LEG:'leg-reps',TIMED:'timed-hold'});
  const REP_SESSION_INCREMENT=1;
  const EX=[
    {name:'Knee Push-Ups',unit:'reps',progressionType:TYPES.STANDARD,base:10,family:'Push-Up',category:'upper',goodFor:'Chest, triceps and shoulder pressing strength with less load than a full push-up.',how:'Place hands under shoulders with knees down and keep a straight line from head to knees. Lower with control, then press back up.'},
    {name:'Push-Ups',unit:'reps',progressionType:TYPES.STANDARD,base:8,family:'Push-Up',category:'upper',goodFor:'Chest, triceps, shoulders and whole-body bracing.',how:'Keep a straight line from head to heels. Lower under control, keep the shoulders away from the ears, then press up.'},
    {name:'Squats',unit:'reps',progressionType:TYPES.LEG,base:12,family:'Squat',category:'lower',goodFor:'Leg strength, hip and knee control, and everyday sit-to-stand movement.',how:'Stand with feet around shoulder width. Sit down under control, keep knees tracking over toes, then stand tall.'},
    {name:'Elbow Plank',unit:'seconds',progressionType:TYPES.TIMED,base:20,family:'Plank',category:'core',goodFor:'Front-core endurance and trunk stability with less loading through the wrists.',how:'Place forearms down with elbows under shoulders. Keep the body straight, brace the trunk and breathe slowly.'},
    {name:'Plank',unit:'seconds',progressionType:TYPES.TIMED,base:20,family:'Plank',category:'core',goodFor:'Core endurance, shoulder stability and maintaining a controlled body line.',how:'Place hands under shoulders and keep the body straight. Brace gently without holding the breath.'},
    {name:'Elbow Side Plank',unit:'seconds',progressionType:TYPES.TIMED,base:15,family:'Side Plank',category:'core',goodFor:'Side-core endurance, hip stability and resistance to unwanted trunk rotation.',how:'Place the forearm under the shoulder, lift the hips and stack the pelvis. Hold the body line while breathing steadily.'}
  ];
  const BY=new Map(EX.map(item=>[item.name,item]));

  function clamp(value,min,max){ value=Number(value); return Number.isFinite(value) ? Math.max(min,Math.min(max,value)) : min; }
  function sets(value){ return Math.max(1,Math.min(5,Math.round(Number(value)||3))); }
  function exercise(name){ return BY.get(String(name||''))||EX[0]; }
  function progressionType(value,definition){ const type=String(value||''); return Object.values(TYPES).includes(type) ? type : definition.progressionType; }
  function normaliseItem(value){
    const source=value&&typeof value==='object'?value:{};
    const definition=exercise(source.exercise);
    const item={ exercise:definition.name, baseline:Math.round(clamp(source.baseline||definition.base,1,9999)), progressionType:progressionType(source.progressionType,definition) };
    if(definition.unit==='reps') item.sets=sets(source.sets||3);
    return item;
  }
  function normalisePlan(value){
    if(!value||typeof value!=='object'||!Array.isArray(value.items)) return null;
    const plan=Object.assign({},value,{version:6,items:value.items.map(normaliseItem)});
    plan.sessions=Math.round(clamp(plan.sessions||18,1,120));
    plan.lengthMode=plan.lengthMode==='goal'?'goal':'sessions';
    plan.frequency=['1x','2x','3x'].includes(plan.frequency)?plan.frequency:'3x';
    plan.days=Array.isArray(plan.days)?plan.days.filter(day=>['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].includes(day)).slice(0,Number(plan.frequency[0])):[];
    plan.timerStartDelay=Math.round(clamp(plan.timerStartDelay||5,1,10));
    return plan;
  }
  function setValues(baseline,count){
    const n=Math.max(1,Math.round(Number(baseline)||1)),c=sets(count);
    if(c===1) return [n];
    if(c===2) return [Math.max(1,Math.round(n*.75)),Math.max(1,Math.round(n*.85))];
    if(c===3){
      const first=Math.max(1,Math.round(n*.75));
      const second=Math.max(1,Math.round(n*.70));
      let third=Math.max(1,Math.round(n*.80));
      if(third<=Math.max(first,second)) third=Math.max(first,second)+1;
      return [first,second,third];
    }
    return (c===4?[.62,.70,.76,.84]:[.58,.64,.70,.76,.84]).map(ratio=>Math.max(1,Math.round(n*ratio)));
  }
  function progressionIncrements(type,count){
    const c=sets(count);
    if(type!==TYPES.LEG) return Array(c).fill(REP_SESSION_INCREMENT);
    if(c===1) return [2];
    if(c===2) return [2,3];
    return [2,...Array(c-2).fill(1),3];
  }
  function progressedSetValues(baseline,count,index,type=TYPES.STANDARD){
    const session=Math.max(1,Math.round(Number(index)||1));
    const increments=progressionIncrements(type,sets(count));
    return setValues(baseline,count).map((value,setIndex)=>value+((session-1)*increments[setIndex]));
  }
  function hold(base,index){
    let seconds=Math.max(1,Math.round(Number(base)||1));
    for(let session=2;session<=Math.max(1,Math.round(Number(index)||1));session++) seconds+=seconds<60?5:seconds<90?3:2;
    return seconds;
  }
  function work(list,index){
    return (list||[]).map(raw=>{
      const value=normaliseItem(raw),definition=exercise(value.exercise);
      return definition.unit==='seconds'
        ? {item:definition,unit:'seconds',hold:hold(value.baseline,index),progressionType:TYPES.TIMED}
        : {item:definition,unit:'reps',sets:value.sets,values:progressedSetValues(value.baseline,value.sets,index,value.progressionType),progressionType:value.progressionType};
    });
  }

  const pure=Object.freeze({BUILD,TYPES,EX,setValues,progressionIncrements,progressedSetValues,hold,work,normaliseItem,normalisePlan});
  if(typeof module!=='undefined'&&module.exports) module.exports=pure;
  if(typeof document==='undefined'){ global.BASELINE_FITNESS_DEBUG=pure; return; }
  if(global.__BASELINE_FITNESS_APP__) return;
  global.__BASELINE_FITNESS_APP__=true;

  const FILE=location.protocol==='file:';
  const $=(selector,root=document)=>root.querySelector(selector);
  const $$=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
  const STORE=(global.BASELINE_store&&typeof global.BASELINE_store.read==='function')?global.BASELINE_store:null;
  const PLAN='__bl_fitness_plan_v1__';
  const STEP='__bl_fitness_workout_progress_v2__';
  const PLAN_CACHE='__bl_fitness_plan_cache_v1__';
  let auth={authed:false,name:''};
  let current={planId:0,planJson:null,sessions:[],progress:null};
  let dirty=false,hydrating=false,hydratedId=null,loadVersion=0,authBound=false,captionSequence=0,myPlanMode='create';
  let timerState={interval:null};
  const workoutListeners=new Set();

  function esc(value){ return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
  function pad(value){ return String(value).padStart(2,'0'); }
  function today(){ const date=new Date(); return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`; }
  function parseDate(value){ const match=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value||'')); return match?new Date(+match[1],+match[2]-1,+match[3]):null; }
  function iso(date){ return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`; }
  function addDays(date,days){ const next=new Date(date); next.setDate(next.getDate()+days); return next; }
  function nice(value){ const date=parseDate(value); return date?date.toLocaleDateString(undefined,{weekday:'short',day:'2-digit',month:'short',year:'numeric'}):String(value||''); }
  function key(prefix,user){ return prefix+'::'+String(user||'').trim().toLowerCase(); }
  function planKey(){ return key(PLAN,auth.name); }
  function planCacheKey(){ return key(PLAN_CACHE,auth.name); }
  function stepKey(planId,index){ return key(STEP,`${planId||0}::${index||0}::${auth.name||''}`); }
  function read(storageKey,fallback){ try{return STORE?STORE.read(storageKey,fallback):(JSON.parse(localStorage.getItem(storageKey)||'null')??fallback);}catch(_error){return fallback;} }
  function write(storageKey,value){ try{return STORE?STORE.write(storageKey,value):localStorage.setItem(storageKey,JSON.stringify(value));}catch(_error){return undefined;} }
  function remove(storageKey){ try{return STORE?STORE.del(storageKey):localStorage.removeItem(storageKey);}catch(_error){return undefined;} }
  function mark(){ if(!hydrating) dirty=true; }
  function normaliseSelect(select){
    if(!select) return;
    select.setAttribute('data-native-select','true');
    const wrapper=select.parentElement?.classList?.contains('bl-select')?select.parentElement:null;
    if(wrapper?.parentNode){ wrapper.parentNode.insertBefore(select,wrapper); wrapper.remove(); }
  }
  async function get(path,params={}){ if(FILE) return {ok:false}; try{ const url=new URL(path,location.href); Object.entries(params).forEach(([name,value])=>url.searchParams.set(name,value)); return await (await fetch(url,{credentials:'same-origin'})).json(); }catch(_error){ return {ok:false}; } }
  async function post(path,body){ if(FILE) return {ok:false}; try{ return await (await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},credentials:'same-origin',body:JSON.stringify(body)})).json(); }catch(_error){ return {ok:false}; } }

  function options(selected){ return EX.map(item=>`<option value="${esc(item.name)}"${item.name===selected?' selected':''}>${esc(item.name)}</option>`).join(''); }
  function maxBaselineLabel(definition){ return `Max Baseline (${definition.unit==='seconds'?'Seconds':'Reps'})`; }
  function exerciseCaptionHtml(definition){ return `<strong>${esc(definition.name)}</strong><p><b>Good for:</b> ${esc(definition.goodFor)}</p><p><b>How:</b> ${esc(definition.how)}</p>`; }
  function updateExerciseCaption(row,definition){
    const button=$('.exercise-info-button',row),source=$('.exercise-caption-source',row);
    if(button){ button.setAttribute('aria-label',`Information about ${definition.name}`); button.setAttribute('data-bl-info-title',definition.name); }
    if(source) source.innerHTML=exerciseCaptionHtml(definition);
    global.BASELINE_info?.refresh?.();
  }
  function syncRow(row){
    const definition=exercise($('.ex-select',row)?.value),label=$('.baseline-label',row),kind=$('.sets-label',row),control=$('.ex-sets',row),base=$('.ex-baseline',row);
    row.dataset.progressionType=definition.progressionType;
    updateExerciseCaption(row,definition);
    if(label) label.textContent=maxBaselineLabel(definition);
    if(base&&(!base.value||+base.value<1)) base.value=definition.base;
    if(definition.unit==='seconds'){
      if(control&&!control.disabled) control.dataset.lastSets=control.value||'3';
      if(kind) kind.textContent='Type';
      if(control){ control.innerHTML='<option value="hold">Hold</option>'; control.disabled=true; }
    }else{
      if(kind) kind.textContent='Sets';
      if(control){ const selected=sets(control.dataset.lastSets||control.value||3); control.innerHTML=[1,2,3,4,5].map(number=>`<option value="${number}"${number===selected?' selected':''}>${number}</option>`).join(''); control.disabled=false; }
    }
  }
  function makeRow(name){
    const definition=exercise(name),row=document.createElement('div'),captionId=`exercise-caption-${++captionSequence}`;
    row.className='ex-row';
    row.innerHTML=`<div class="ex-exercise-block"><div class="field-stack ex-field-exercise"><label>Exercise</label><select class="ex-select field-select-fixed" data-native-select="true">${options(definition.name)}</select></div><div class="exercise-info-wrap bl-info-wrap"><button class="exercise-info-button bl-info-button" data-bl-info-button type="button" aria-label="Information about ${esc(definition.name)}" aria-expanded="false" aria-controls="${captionId}"><span aria-hidden="true">i</span></button><div class="exercise-caption exercise-caption-source bl-info-source" id="${captionId}"></div></div></div><div class="field-stack ex-field-baseline"><label class="baseline-label">${maxBaselineLabel(definition)}</label><input class="ex-baseline field-input-fixed" type="number" min="1" inputmode="numeric" value="${definition.base}"></div><div class="field-stack ex-field-sets"><label class="sets-label">Sets</label><select class="ex-sets field-select-fixed" data-native-select="true"><option>1</option><option>2</option><option selected>3</option><option>4</option><option>5</option></select></div><div class="ex-remove-wrap"><button class="action secondary ex-remove" type="button" aria-label="Remove exercise">×</button></div>`;
    syncRow(row);
    $('.ex-select',row).addEventListener('change',()=>{ mark(); syncRow(row); syncGoals(); });
    $('.ex-baseline',row).addEventListener('input',mark);
    $('.ex-sets',row).addEventListener('change',event=>{ mark(); event.currentTarget.dataset.lastSets=event.currentTarget.value; });
    $('.ex-remove',row).addEventListener('click',()=>{ mark(); row.remove(); if(!$('.ex-row')) $('#exerciseList').append(makeRow(EX[0].name)); syncGoals(); });
    return row;
  }
  function items(){ const seen=new Set(),out=[]; $$('.ex-row').forEach(row=>{ const definition=exercise($('.ex-select',row).value); if(seen.has(definition.name)) return; seen.add(definition.name); const value={exercise:definition.name,baseline:Math.round(clamp($('.ex-baseline',row).value||definition.base,1,9999)),progressionType:definition.progressionType}; if(definition.unit==='reps') value.sets=sets($('.ex-sets',row).value||$('.ex-sets',row).dataset.lastSets); out.push(value); }); return out; }
  function syncGoals(){ const select=$('#goalExercise'); if(!select) return; const old=select.value,names=$$('.ex-select').map(control=>control.value).filter((value,index,array)=>array.indexOf(value)===index); select.innerHTML=names.map(name=>`<option value="${esc(name)}">${esc(name)}</option>`).join(''); select.value=names.includes(old)?old:(names[0]||''); const label=$('#goalAmountLabel'); if(label) label.textContent=`Goal amount (${exercise(select.value).unit})`; }
  function mode(){ const goal=$('#lengthMode')?.value==='goal'; if($('#sessions')){ $('#sessions').disabled=goal; $('#sessions').style.opacity=goal?'.7':'1'; } if($('#goalHint')) $('#goalHint').style.display=goal?'':'none'; if($('#goalControlsRow')) $('#goalControlsRow').style.opacity=goal?'1':'.55'; if($('#goalExercise')) $('#goalExercise').disabled=!goal; if($('#goalAmount')) $('#goalAmount').disabled=!goal; if($('#goalExerciseLabel')) $('#goalExerciseLabel').className=goal?'':'muted'; if($('#goalAmountLabel')) $('#goalAmountLabel').className=goal?'':'muted'; syncGoals(); }
  function totalSessions(list){ if($('#lengthMode')?.value!=='goal') return Math.round(clamp($('#sessions')?.value||18,1,120)); const definition=exercise($('#goalExercise')?.value),target=clamp($('#goalAmount')?.value||definition.base,1,99999),source=normaliseItem(list.find(item=>item.exercise===definition.name)||{exercise:definition.name,baseline:definition.base}); for(let index=1;index<=120;index++){ if(definition.unit==='seconds'&&hold(source.baseline,index)>=target) return index; if(definition.unit==='reps'&&Math.max(...progressedSetValues(source.baseline,source.sets,index,source.progressionType))>=target) return index; } return 120; }
  function schedule(start,frequency,count,days=[]){ const selected=(days||[]).map(day=>['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].indexOf(day)).filter(day=>day>=0); const out=[]; let date=parseDate(start)||parseDate(today()); if(selected.length){ while(out.length<count){ if(selected.includes(date.getDay())) out.push(iso(date)); date=addDays(date,1); } return out; } const pattern=frequency==='1x'?[7]:frequency==='2x'?[3,4]:[2,2,3]; for(let index=0;index<count;index++){ out.push(iso(date)); date=addDays(date,pattern[index%pattern.length]); } return out; }
  function execution(list){ const reps=list.filter(item=>item.unit==='reps'),holds=list.filter(item=>item.unit==='seconds'),out=[],rounds=Math.max(0,...reps.map(item=>item.values.length)); for(let round=0;round<rounds;round++) reps.forEach(item=>{ if(item.values[round]!=null) out.push({name:item.item.name,display:`${item.values[round]} ${item.item.name}`,target:item.values[round],unit:'reps',isTimed:false}); }); holds.forEach(item=>out.push({name:item.item.name,display:`${item.hold} seconds`,target:item.hold,unit:'seconds',isTimed:true})); return out; }
  function planFromUI(){ const list=items(),lengthMode=$('#lengthMode')?.value||'sessions',existing=current.planJson||{}; const plan={version:6,startDate:$('#startDate')?.value||today(),frequency:$('#freq')?.value||'3x',sessions:totalSessions(list),lengthMode,items:list,days:Array.isArray(existing.days)?existing.days:[],timerStartDelay:Math.round(clamp(existing.timerStartDelay||5,1,10))}; if(lengthMode==='goal') plan.goal={exercise:$('#goalExercise')?.value||'',amount:Math.round(clamp($('#goalAmount')?.value||1,1,99999))}; return plan; }
  function rows(plan,previous=[]){ const map=new Map(previous.map(row=>[+row.session_index,row])),now=Math.floor(Date.now()/1000); return schedule(plan.startDate,plan.frequency,plan.sessions,plan.days).map((scheduledDate,index)=>{ const old=map.get(index+1)||{}; return {session_index:index+1,scheduled_date:scheduledDate,status:old.status||'planned',completed_at:old.completed_at||null,updated_at:now}; }); }
  function progress(list,plan){ let done=0,next=null; list.forEach(row=>{ if(row.status==='done') done++; else if(next===null) next=+row.session_index; }); if(next===null&&list.length) next=list.length+1; return {done,total:list.length,nextIndex:next,startDate:plan.startDate}; }
  function availability(row,index,planProgress){ const due=!row.scheduled_date||row.scheduled_date<=today(),done=row.status==='done',next=+planProgress?.nextIndex===index; return {due,done,next,can:due&&next&&!done}; }
  function planText(plan){ return ['Baseline Fitness Plan',`Start: ${plan.startDate} | Frequency: ${plan.frequency} Weekly | Sessions: ${plan.sessions}`,'',...plan.items.map(value=>`${value.exercise}: baseline ${value.baseline} ${exercise(value.exercise).unit}${value.sets?` | sets ${value.sets}`:''}`)].join('\n'); }
  function formatTimer(seconds){ const total=Math.max(0,Math.round(seconds||0)); return `${pad(Math.floor(total/60))}:${pad(total%60)}`; }
  function cleanupCurrentStepState(planId=current.planId){ if(STORE) return; const needle=`${STEP}::${String(planId||0).toLowerCase()}::`; for(let i=localStorage.length-1;i>=0;i--){ const storageKey=localStorage.key(i)||''; if(storageKey.includes(needle) && storageKey.includes(String(auth.name||'').trim().toLowerCase())) localStorage.removeItem(storageKey); } }
  function defaultStepState(){ return {completedSteps:0,started:false,results:{},pendingFailureStep:null}; }
  function state(index){ const source=read(stepKey(current.planId,index),defaultStepState())||defaultStepState(); return Object.assign(defaultStepState(),source,{results:source&&typeof source.results==='object'?source.results:{}}); }
  function setState(index,value){ write(stepKey(current.planId,index),Object.assign(defaultStepState(),value,{results:value&&typeof value.results==='object'?value.results:{}})); }
  function switchTopTab(target){ const button=$(`.tab[data-target="${target}"]`); if(button) button.click(); }
  function syncGeneratorButtons(){ const saveButton=$('#savePlanBtn'),cancelButton=$('#cancelEditPlanBtn'); if(saveButton) saveButton.textContent=current.planId&&myPlanMode==='edit'?'Save plan changes':'Save plan'; if(cancelButton) cancelButton.hidden=!(current.planId&&myPlanMode==='edit'); }
  function syncMyPlanShells(){ const generator=$('#myPlanGeneratorWrap'),saved=$('#myPlanSavedWrap'); const hasPlan=!!current.planJson; const showSaved=hasPlan&&myPlanMode==='view'; if(generator) generator.hidden=showSaved; if(saved) saved.hidden=!showSaved; syncGeneratorButtons(); }
  function resetGenerator(){ hydrating=true; try{ $('#startDate').value=today(); $('#freq').value='3x'; $('#lengthMode').value='sessions'; $('#sessions').value='18'; $('#goalAmount').value=''; const list=$('#exerciseList'); if(list){ list.innerHTML=''; list.append(makeRow(EX[0].name)); } mode(); syncGoals(); dirty=false; }finally{ hydrating=false; } }
  function renderPlan(target,rawPlan,sessionRows=null,planProgress=null){ const plan=normalisePlan(rawPlan); if(!target||!plan) return; const dates=schedule(plan.startDate,plan.frequency,plan.sessions,plan.days); let html=`<div class="card"><h2>Your plan preview</h2><div class="session-plan-meta"><span class="badge">Start: ${esc(nice(plan.startDate))}</span><span class="badge">Frequency: ${esc(plan.frequency)} Weekly</span><span class="badge">Sessions: ${plan.sessions}</span>${planProgress?`<span class="badge">Progress: ${planProgress.done}/${planProgress.total}</span>`:''}</div></div>`; for(let index=1;index<=plan.sessions;index++){ const row=sessionRows?.find(value=>+value.session_index===index)||{scheduled_date:dates[index-1],status:'planned'}; const session=work(plan.items,index); html+=`<div class="card session-card" data-session="${index}"><div class="top" style="display:flex;justify-content:space-between;gap:12px"><div><div class="title">Session ${index}</div><div class="muted">${esc(nice(row.scheduled_date))}</div></div><span class="badge">${row.status==='done'?'Done':'Planned'}</span></div><div class="divider"></div>${session.map(item=>`<div class="session-subcard"><b>${esc(item.item.name)}</b><div>${item.unit==='seconds'?`Hold <b>${item.hold}</b> seconds.`:`Sets (${item.sets}): ${item.values.map(value=>`<b>${value}</b>`).join(' / ')} reps.`}</div></div>`).join('')}</div>`; } target.innerHTML=html; }
  function savedPlanCard(){ const target=$('#myPlanOut'),plan=current.planJson; if(!target||!plan) return; const selectedDays=(plan.days||[]).map(esc).join(', ')||'Automatic spacing'; const delay=clamp(plan.timerStartDelay||5,1,10); target.innerHTML=`<div class="card"><div class="my-plan-saved-head"><div><h2 style="margin:0 0 12px">Saved plan</h2><div class="session-plan-meta"><span class="badge">Start: ${esc(nice(plan.startDate))}</span><span class="badge">Frequency: ${esc(plan.frequency)} Weekly</span><span class="badge">Sessions: ${plan.sessions}</span><span class="badge">Progress: ${current.progress?.done||0}/${current.progress?.total||plan.sessions}</span></div></div><div class="saved-plan-actions"><button class="compact-action compact-action--ghost" type="button" id="planOptionsBtn" aria-expanded="false">Options</button><button class="compact-action compact-action--ghost" type="button" id="editOptionsBtn">Edit Options</button><button class="compact-action compact-action--danger" type="button" id="deletePlanBtn">Delete Plan</button></div></div><div id="planOptionsPanel" class="plan-options-panel" hidden><b>Frequency</b><div class="options-frequency">${[1,2,3].map(n=>`<label class="option-choice"><input type="radio" name="savedFrequency" value="${n}x" ${plan.frequency===n+'x'?'checked':''}> ${n}x Weekly</label>`).join('')}</div><b>Set Days</b><p class="note" style="margin:6px 0 10px">Choose no more days than the selected frequency.</p><div class="day-picker">${['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(day=>`<label class="day-choice"><input type="checkbox" name="savedDay" value="${day}" ${(plan.days||[]).includes(day)?'checked':''}> ${day}</label>`).join('')}</div><div class="plan-options-meta"><div class="option-select-inline"><label for="timerDelaySelect" style="font-weight:850">Timer start delay</label><select id="timerDelaySelect" style="width:auto;min-width:120px">${Array.from({length:10},(_,i)=>i+1).map(n=>`<option value="${n}" ${n===delay?'selected':''}>${n} second${n===1?'':'s'}</option>`).join('')}</select></div><div class="actions-inline"><button class="compact-action compact-action--primary" type="button" id="savePlanOptionsBtn">Save options</button><span class="note" id="planOptionsStatus">Days: ${selectedDays} • Timer delay: ${delay} seconds</span></div></div></div></div>`;
    $('#planOptionsBtn')?.addEventListener('click',event=>{ const panel=$('#planOptionsPanel'),open=panel.hidden; panel.hidden=!open; event.currentTarget.setAttribute('aria-expanded',String(open)); });
    $('#editOptionsBtn')?.addEventListener('click',()=>{ myPlanMode='edit'; hydrate(current.planJson); syncMyPlanShells(); switchTopTab('my-plan'); });
    $('#deletePlanBtn')?.addEventListener('click',openDeletePlanModal);
    const enforce=()=>{ const limit=Number($('input[name="savedFrequency"]:checked')?.value?.[0]||3),checked=$$('input[name="savedDay"]:checked'); $$('input[name="savedDay"]').forEach(input=>{ const disabled=!input.checked&&checked.length>=limit; input.disabled=disabled; input.closest('label')?.classList.toggle('is-disabled',disabled); }); };
    $$('input[name="savedFrequency"]').forEach(input=>input.addEventListener('change',()=>{ const limit=Number(input.value[0]),checked=$$('input[name="savedDay"]:checked'); checked.slice(limit).forEach(box=>box.checked=false); enforce(); }));
    $$('input[name="savedDay"]').forEach(input=>input.addEventListener('change',enforce));
    enforce();
    $('#savePlanOptionsBtn')?.addEventListener('click',async()=>{ const frequency=$('input[name="savedFrequency"]:checked')?.value||plan.frequency; const days=$$('input[name="savedDay"]:checked').map(input=>input.value); const limit=Number(frequency[0]); const timerStartDelay=Math.round(clamp($('#timerDelaySelect')?.value||delay,1,10)); if(days.length>limit){ $('#planOptionsStatus').textContent=`Choose no more than ${limit} day${limit===1?'':'s'}.`; return; } const updated=Object.assign({},plan,{frequency,days,timerStartDelay}); await savePlanOptions(updated); });
  }
  async function savePlanOptions(plan){ const text=planText(plan); if(FILE){ const old=read(planKey(),null),sessionRows=rows(plan,old?.sessions||[]); write(planKey(),Object.assign({},old,{planJson:plan,planText:text,sessions:sessionRows,progress:progress(sessionRows,plan)})); hydratedId=null; myPlanMode='view'; await loadOwn(); return; } const response=await post(API+'/plan_update.php',{planId:current.planId||0,planText:text,planJson:plan,reschedule:true}); if(response?.ok){ hydratedId=null; myPlanMode='view'; await loadOwn(); } else if($('#planOptionsStatus')) $('#planOptionsStatus').textContent='Could not save options.'; }
  function renderSessionCard(row,index,plan,titleSuffix){ const session=work(plan.items,index); return `<div class="card session-card"><div class="top" style="display:flex;justify-content:space-between;gap:12px"><div><div class="title">Session ${index}${titleSuffix?` - ${titleSuffix}`:''}</div><div class="muted">${esc(nice(row.scheduled_date))}</div></div>${row.status==='done'?'<span class="badge">Done</span>':'<span class="badge">Planned</span>'}</div><div class="divider"></div>${session.map(item=>`<div class="session-subcard"><b>${esc(item.item.name)}</b><div>${item.unit==='seconds'?`Hold <b>${item.hold}</b> seconds.`:`Sets (${item.sets}): ${item.values.map(value=>`<b>${value}</b>`).join(' / ')} reps.`}</div></div>`).join('')}</div>`; }
  function completedWorkouts(){ const out=$('#completedWorkoutOut'); if(!out) return; const plan=current.planJson; if(!auth.authed||!plan){ out.textContent=auth.authed?'No saved plan yet.':'Log in and save a plan to see completed workouts.'; return; } const done=(current.sessions||[]).filter(row=>row.status==='done').sort((a,b)=>+b.session_index-+a.session_index); if(!done.length){ out.innerHTML='<div class="completed-empty">No completed workouts yet.</div>'; return; } out.innerHTML=done.map(row=>renderSessionCard(row,+row.session_index,plan,'Completed')).join(''); }
  function futureWorkouts(){ const out=$('#futureWorkoutOut'); if(!out) return; const plan=current.planJson; if(!auth.authed||!plan){ out.textContent=auth.authed?'No saved plan yet.':'Log in and save a plan to see future workouts.'; return; } const currentIndex=+current.progress?.nextIndex||0; const future=(current.sessions||[]).filter(row=>row.status!=='done' && +row.session_index!==currentIndex).sort((a,b)=>+a.session_index-+b.session_index); if(!future.length){ out.innerHTML='<div class="future-empty">No future workouts remain in this plan.</div>'; return; } out.innerHTML=future.map(row=>renderSessionCard(row,+row.session_index,plan,'Future')).join(''); }
  function openTimerModal(step){ const modal=$('#timerModal'),digits=$('#timerDigits'),message=$('#timerModalMessage'); if(!modal||!digits||!message) return; closeTimerModal(false); let phase='prep'; let remaining=Math.round(clamp(current.planJson?.timerStartDelay||5,1,10)); modal.hidden=false; const tick=()=>{ if(phase==='prep'){ message.textContent=`Get into position. Timer starts in ${remaining} second${remaining===1?'':'s'}.`; digits.textContent=formatTimer(remaining); if(remaining<=0){ phase='run'; remaining=Math.round(step.target||0); return; } remaining-=1; return; } message.textContent=`${step.name} • hold for the full time.`; digits.textContent=formatTimer(remaining); if(remaining<=0){ message.textContent='Timer complete.'; clearInterval(timerState.interval); timerState.interval=null; return; } remaining-=1; }; tick(); timerState.interval=setInterval(tick,1000); }
  function closeTimerModal(hide=true){ if(timerState.interval){ clearInterval(timerState.interval); timerState.interval=null; } if(hide && $('#timerModal')) $('#timerModal').hidden=true; }
  function recordStepResult(sessionIndex,stepIndex,status,achieved,inputMode='manual'){
    const saved=state(sessionIndex);
    saved.started=true;
    saved.results=Object.assign({},saved.results,{[stepIndex]:{
      status,
      achieved:Math.round(clamp(achieved||0,0,99999)),
      inputMode:String(inputMode||'manual')==='voice'?'voice':'manual'
    }});
    saved.completedSteps=Math.max(saved.completedSteps||0,stepIndex+1);
    saved.pendingFailureStep=null;
    setState(sessionIndex,saved);
    currentWorkout();
  }
  function setPendingFailure(sessionIndex,stepIndex){ const saved=state(sessionIndex); saved.started=true; saved.pendingFailureStep=stepIndex; setState(sessionIndex,saved); currentWorkout(); }
  function startWorkout(sessionIndex){ const saved=state(sessionIndex); saved.started=true; setState(sessionIndex,saved); currentWorkout(); }
  function renderCurrentStep(step,stepIndex,sessionIndex,saved,completed,access){
    const currentActive=stepIndex===completed;
    const stepResult=saved.results?.[stepIndex];
    const canAct=access.can&&saved.started&&currentActive;
    const statusHtml=stepResult?`<div class="step-status ${stepResult.status==='success'?'success':'failed'}">${stepResult.status==='success'?'✓ Succeeded':'✕ Failed'}</div>`:'';
    const achievedHtml=stepResult?`<div class="step-subnote">Achieved: ${esc(stepResult.achieved)} ${esc(step.unit)}</div>`:'';
    const timerButton=step.isTimed?`<button class="compact-action compact-action--ghost step-timer" type="button" data-step="${stepIndex}" ${canAct?'':'disabled'}>Start Timer</button>`:'';
    const failOpen=saved.pendingFailureStep===stepIndex;
    return `<div class="current-step ${stepIndex<completed?'done':currentActive?'active':''}"><div class="current-step-head"><div><b>${esc(step.name)}</b><div class="current-step-text">${esc(step.display)}</div>${achievedHtml}</div><div class="step-actions">${statusHtml}${timerButton}<button class="compact-action compact-action--success step-icon-btn step-success" type="button" data-step="${stepIndex}" aria-label="Succeeded" title="Succeeded" ${canAct?'':'disabled'}><span aria-hidden="true">✓</span></button><button class="compact-action compact-action--danger step-icon-btn step-fail-toggle" type="button" data-step="${stepIndex}" aria-label="Failed" title="Failed" ${canAct?'':'disabled'}><span aria-hidden="true">✕</span></button></div></div>${failOpen?`<div class="failure-entry"><label for="failedAmount${stepIndex}" class="note">Enter achieved ${esc(step.unit)}</label><input id="failedAmount${stepIndex}" class="failed-amount" data-step="${stepIndex}" type="number" min="0" inputmode="numeric" placeholder="${step.unit==='seconds'?'Seconds':'Reps'} achieved" /><button class="compact-action compact-action--danger step-fail-save" type="button" data-step="${stepIndex}">Save</button></div>`:''}</div>`;
  }

  function workoutContext(){
    const base={available:false,canStart:false,planId:current.planId||0,sessionIndex:0,stepIndex:0,step:null,steps:[],completedSteps:0,totalSteps:0,started:false,allComplete:false,planComplete:false};
    if(!auth.authed||!current.planJson||!current.sessions.length) return base;
    const sessionIndex=+current.progress?.nextIndex||0;
    const row=current.sessions.find(value=>+value.session_index===sessionIndex);
    if(!row) return Object.assign(base,{available:true,planComplete:true,allComplete:true});
    const access=availability(row,sessionIndex,current.progress);
    const steps=execution(work(current.planJson.items,sessionIndex));
    const saved=state(sessionIndex);
    const completedSteps=Math.round(clamp(saved.completedSteps||0,0,steps.length));
    return {
      available:true,
      canStart:Boolean(access.can),
      access,
      planId:current.planId||0,
      sessionIndex,
      scheduledDate:row.scheduled_date||'',
      stepIndex:completedSteps,
      step:steps[completedSteps]||null,
      steps:steps.map(step=>Object.assign({},step)),
      completedSteps,
      totalSteps:steps.length,
      started:Boolean(saved.started),
      results:Object.assign({},saved.results||{}),
      allComplete:Boolean(steps.length&&completedSteps>=steps.length),
      planComplete:false,
      timerStartDelay:Math.round(clamp(current.planJson?.timerStartDelay||5,1,10))
    };
  }

  function notifyWorkout(){
    const snapshot=workoutContext();
    workoutListeners.forEach(listener=>{ try{ listener(snapshot); }catch(_error){} });
    try{ document.dispatchEvent(new CustomEvent('baseline:fitness-workout-updated',{detail:snapshot})); }catch(_error){}
  }

  function startCurrentWorkout(inputMode='manual'){
    const context=workoutContext();
    if(!context.available||!context.canStart||context.planComplete) return context;
    startWorkout(context.sessionIndex);
    return workoutContext();
  }

  function succeedCurrentStep(inputMode='manual'){
    const context=workoutContext();
    if(!context.canStart||!context.started||!context.step) return context;
    recordStepResult(context.sessionIndex,context.stepIndex,'success',context.step.target,inputMode);
    return workoutContext();
  }

  function failCurrentStep(achieved,inputMode='manual'){
    const context=workoutContext();
    if(!context.canStart||!context.started||!context.step) return context;
    const amount=Math.round(clamp(achieved,0,99999));
    recordStepResult(context.sessionIndex,context.stepIndex,'failed',amount,inputMode);
    return workoutContext();
  }

  function resetCurrentWorkout(){
    const context=workoutContext();
    if(!context.available||!context.sessionIndex) return context;
    remove(stepKey(current.planId,context.sessionIndex));
    currentWorkout();
    return workoutContext();
  }

  async function finishCurrentWorkout(){
    const context=workoutContext();
    if(!context.canStart||!context.allComplete||!context.sessionIndex) return context;
    await toggle(context.sessionIndex);
    return workoutContext();
  }

  function currentWorkout(){
    const out=$('#currentWorkoutOut'),status=$('#myPlanStatus');
    if(!out) return;
    savedPlanCard();
    completedWorkouts();
    futureWorkouts();
    syncMyPlanShells();
    if(!auth.authed||!current.planJson||!current.sessions.length){
      out.textContent=auth.authed?'Save a plan to unlock your current workout view.':'Log in and save a plan to see your current workout.';
      notifyWorkout();
      return;
    }
    const context=workoutContext();
    if(context.planComplete){
      out.innerHTML='<div class="card"><h3 style="margin:0">Plan complete</h3><p class="note">All sessions in this plan have been completed.</p></div>';
      if(status) status.textContent='';
      notifyWorkout();
      return;
    }
    const {sessionIndex:index,access,steps,completedSteps:completed,started}=context;
    const row=current.sessions.find(value=>+value.session_index===index);
    const saved=state(index);
    if(status) status.textContent=access.can?'Current workout ready.':access.due?'Complete earlier sessions first.':`Next workout unlocks on ${nice(row.scheduled_date)}.`;
    out.innerHTML=`<div class="card session-card"><div class="section-head-actions"><div><h3 style="margin:0">Session ${index} - Current</h3><div class="session-plan-meta" style="margin-top:12px"><span class="badge">${esc(nice(row.scheduled_date))}</span><span class="badge">${completed}/${steps.length} steps done</span></div></div><div class="workout-start-actions"><button class="action secondary voice-workout-start" type="button" id="startVoiceWorkoutBtn" ${access.can?'':'disabled'}>Start (Voice Activated)</button><button class="action" type="button" id="startWorkoutBtn" ${access.can?'':'disabled'}>${started?'Continue Workout':'Start Workout'}</button></div></div><div class="session-step-list">${steps.map((step,stepIndex)=>renderCurrentStep(step,stepIndex,index,saved,completed,access)).join('')}</div><div class="actions-inline" style="margin-top:14px"><button class="compact-action compact-action--primary" id="finishWorkout" ${access.can&&completed===steps.length&&steps.length?'':'disabled'}>Finish workout</button><button class="compact-action compact-action--ghost" id="resetWorkout" ${access.can?'':'disabled'}>Reset workout steps</button></div></div>`;
    $('#startWorkoutBtn')?.addEventListener('click',()=>startCurrentWorkout('manual'));
    $$('.step-success',out).forEach(control=>control.addEventListener('click',()=>recordStepResult(index,+control.dataset.step,'success',steps[+control.dataset.step].target,'manual')));
    $$('.step-fail-toggle',out).forEach(control=>control.addEventListener('click',()=>setPendingFailure(index,+control.dataset.step)));
    $$('.step-fail-save',out).forEach(control=>control.addEventListener('click',()=>{
      const stepIndex=+control.dataset.step,field=$(`#failedAmount${stepIndex}`,out);
      if(!field||String(field.value).trim()===''){ field?.focus(); return; }
      recordStepResult(index,stepIndex,'failed',Math.round(clamp(field.value,0,99999)),'manual');
    }));
    $$('.step-timer',out).forEach(control=>control.addEventListener('click',()=>openTimerModal(steps[+control.dataset.step])));
    $('#resetWorkout',out)?.addEventListener('click',resetCurrentWorkout);
    $('#finishWorkout',out)?.addEventListener('click',finishCurrentWorkout);
    notifyWorkout();
  }
  function hydrate(rawPlan){ const plan=normalisePlan(rawPlan); if(!plan) return; hydrating=true; try{ $('#startDate').value=plan.startDate||today(); $('#freq').value=plan.frequency||'3x'; $('#lengthMode').value=plan.lengthMode||'sessions'; $('#sessions').value=plan.sessions||18; const list=$('#exerciseList'); list.innerHTML=''; plan.items.forEach(value=>{ const row=makeRow(value.exercise); $('.ex-baseline',row).value=value.baseline; if(value.sets){ $('.ex-sets',row).dataset.lastSets=value.sets; syncRow(row); if(!$('.ex-sets',row).disabled) $('.ex-sets',row).value=value.sets; } list.append(row); }); if(!$('.ex-row')) list.append(makeRow(EX[0].name)); mode(); if(plan.goal){ $('#goalExercise').value=plan.goal.exercise||$('#goalExercise').value; $('#goalAmount').value=plan.goal.amount||''; syncGoals(); } dirty=false; }finally{ hydrating=false; } }
  function applyAuthSnapshot(snapshot){ auth=snapshot?.authed?{authed:true,name:String(snapshot.name||snapshot.user?.name||'')}:{authed:false,name:''}; syncFitnessAccountButton(); }
  async function refreshAuth(){ try{ if(global.BASELINE_auth?.refresh){ const snapshot=await global.BASELINE_auth.refresh(); applyAuthSnapshot(snapshot||global.BASELINE_auth.get?.()); } else { const response=await get('/sitewide/api/me.php'); applyAuthSnapshot(response?.ok&&response.authed?{authed:true,name:String(response.name||response.user?.name||'')}:{authed:false}); } }catch(_error){ auth={authed:false,name:''}; syncFitnessAccountButton(); } }
  function showAnyCachedOwn(){
    if(FILE||typeof localStorage==='undefined')return false;
    let best=null,bestKey='';
    try{
      for(let i=0;i<localStorage.length;i++){
        const storageKey=localStorage.key(i)||'';
        if(!storageKey.startsWith(PLAN_CACHE+'::'))continue;
        const cached=read(storageKey,null);
        if(!cached?.planJson)continue;
        if(!best||Number(cached.cachedAt||0)>Number(best.cachedAt||0)){best=cached;bestKey=storageKey;}
      }
    }catch(_error){return false;}
    const plan=normalisePlan(best?.planJson);
    if(!plan)return false;
    const cachedName=bestKey.slice((PLAN_CACHE+'::').length);
    auth={authed:true,name:cachedName};
    current={planId:best.planId||0,planJson:plan,sessions:Array.isArray(best.sessions)?best.sessions:[],progress:best.progress||progress(Array.isArray(best.sessions)?best.sessions:[],plan)};
    myPlanMode='view';
    syncFitnessAccountButton();
    syncMyPlanShells();
    currentWorkout();
    return true;
  }
  function showCachedOwn(){
    if(FILE||!auth.authed)return false;
    const cached=read(planCacheKey(),null);
    const plan=normalisePlan(cached?.planJson);
    if(!plan)return false;
    current={planId:cached.planId||0,planJson:plan,sessions:Array.isArray(cached.sessions)?cached.sessions:[],progress:cached.progress||progress(Array.isArray(cached.sessions)?cached.sessions:[],plan)};
    if(myPlanMode!=='edit')myPlanMode='view';
    syncMyPlanShells();
    currentWorkout();
    return true;
  }
  function cacheOwn(saved){
    if(FILE||!auth.authed)return;
    if(saved?.planJson)write(planCacheKey(),{planId:saved.planId||0,planJson:saved.planJson,sessions:saved.sessions||[],progress:saved.progress||null,cachedAt:Date.now()});
    else remove(planCacheKey());
  }
  async function refreshAuthViews(){ showCachedOwn(); await loadOwn(); Promise.all([profiles(),achievements()]); }
  function openAuth(){ const status=$('#savePlanStatus'); try{ if(typeof global.BASELINE_openAuth==='function'){ global.BASELINE_openAuth(); return true; } }catch(_error){} const toggle=$('#bl-auth-toggle'); if(toggle){ toggle.click(); return true; } if(status) status.textContent='The account panel is still loading. Please try again.'; return false; }
  function syncFitnessAccountButton(){ const button=$('#fitnessAccountBtn'); if(button) button.textContent=auth.authed?'Account':'Log in / Sign up'; }
  function ensureFitnessAccountButton(){ if($('#fitnessAccountBtn')){ syncFitnessAccountButton(); return; } const refresh=$('#profileRefresh'),host=refresh?.parentElement; if(!host) return; const button=document.createElement('button'); button.type='button'; button.id='fitnessAccountBtn'; button.className='action'; button.addEventListener('click',openAuth); host.append(button); syncFitnessAccountButton(); }
  function bindAuth(){ if(authBound) return; authBound=true; document.addEventListener('baseline:auth',async event=>{ applyAuthSnapshot(event.detail||global.BASELINE_auth?.get?.()); await refreshAuthViews(); }); let attempts=0; const attach=()=>{ if(global.BASELINE_auth?.onChange){ global.BASELINE_auth.onChange(async snapshot=>{ applyAuthSnapshot(snapshot); await refreshAuthViews(); }); return; } if(++attempts<80) setTimeout(attach,50); }; attach(); }
  async function loadOwn(){ const version=++loadVersion; if(!auth.authed){ current={planId:0,planJson:null,sessions:[],progress:null}; hydratedId=null; myPlanMode='create'; syncMyPlanShells(); $('#myPlanOut').textContent='Log in and save a plan to see your schedule here.'; currentWorkout(); return; } let saved=null; if(FILE) saved=read(planKey(),null); else { const response=await get(API+'/get_plan.php'); if(version!==loadVersion) return; if(response?.ok&&response.hasPlan) saved={planId:response.planId,planJson:response.planJson,sessions:response.sessions,progress:response.progress}; cacheOwn(saved); } if(version!==loadVersion) return; const plan=normalisePlan(saved?.planJson); if(!plan){ current={planId:0,planJson:null,sessions:[],progress:null}; hydratedId=null; myPlanMode='create'; syncMyPlanShells(); resetGenerator(); $('#myPlanOut').textContent='No saved plan yet.'; currentWorkout(); return; } current={planId:saved.planId||0,planJson:plan,sessions:saved.sessions||[],progress:saved.progress||progress(saved.sessions||[],plan)}; if(myPlanMode!=='edit') myPlanMode='view'; syncMyPlanShells(); currentWorkout(); if(!dirty&&hydratedId!==current.planId){ const planToHydrate=plan,planIdToHydrate=current.planId; requestAnimationFrame(()=>{ if(current.planId===planIdToHydrate&&!dirty&&hydratedId!==planIdToHydrate){ hydrate(planToHydrate); hydratedId=planIdToHydrate; } }); } }
  async function save(update){ if(!auth.authed){ openAuth(); const status=$('#savePlanStatus'); if(status) status.textContent='Log in or sign up to save this plan.'; return; } const plan=planFromUI(),text=planText(plan); if(FILE){ const old=read(planKey(),null),sessionRows=rows(plan,update?old?.sessions:[]),planProgress=progress(sessionRows,plan),planId=update&&old?.planId?old.planId:Date.now(); write(planKey(),{planId,planJson:plan,planText:text,sessions:sessionRows,progress:planProgress}); dirty=false; hydratedId=null; myPlanMode='view'; if($('#savePlanStatus')) $('#savePlanStatus').textContent=update?'Plan updated.':'Saved.'; await loadOwn(); return; } const response=await post(API+(update?'/plan_update.php':'/save_plan.php'),update?{planId:current.planId||0,planText:text,planJson:plan,reschedule:true}:{planText:text,planJson:plan}); $('#savePlanStatus').textContent=response?.ok?(update?'Plan updated.':'Saved.'):(update?'Update failed.':'Save failed.'); if(response?.ok){ dirty=false; hydratedId=null; myPlanMode='view'; await loadOwn(); } }
  async function deletePlan(){ if(FILE){ remove(planKey()); cleanupCurrentStepState(current.planId); current={planId:0,planJson:null,sessions:[],progress:null}; hydratedId=null; myPlanMode='create'; resetGenerator(); syncMyPlanShells(); closeDeletePlanModal(); currentWorkout(); return true; } const response=await post(API+'/delete_plan.php',{planId:current.planId||0}); if(response?.ok){ remove(planCacheKey()); cleanupCurrentStepState(current.planId); current={planId:0,planJson:null,sessions:[],progress:null}; hydratedId=null; myPlanMode='create'; resetGenerator(); closeDeletePlanModal(); await loadOwn(); return true; } const status=$('#deletePlanStatus'); if(status) status.textContent='Could not delete the plan.'; return false; }
  function openDeletePlanModal(){ const modal=$('#deletePlanModal'),input=$('#deletePlanConfirmInput'),status=$('#deletePlanStatus'),button=$('#confirmDeletePlanBtn'); if(!modal) return; modal.hidden=false; if(input) input.value=''; if(status) status.textContent=''; if(button) button.disabled=true; if(input) input.focus(); }
  function closeDeletePlanModal(){ const modal=$('#deletePlanModal'); if(modal) modal.hidden=true; }
  async function toggle(index){
    if(FILE){
      const saved=read(planKey(),null),row=saved?.sessions?.find(value=>+value.session_index===index);
      if(!row) return false;
      row.status=row.status==='done'?'planned':'done';
      row.completed_at=row.status==='done'?Math.floor(Date.now()/1000):null;
      saved.progress=progress(saved.sessions,saved.planJson);
      write(planKey(),saved);
      remove(stepKey(current.planId,index));
      await loadOwn();
      return true;
    }
    const response=await post(API+'/update_session.php',{planId:current.planId||0,sessionIndex:index,action:'toggle_done'});
    if(response?.ok){
      current.sessions=response.sessions||[];
      current.progress=response.progress||null;
      remove(stepKey(current.planId,index));
      currentWorkout();
      return true;
    }
    return false;
  }
  async function profiles(){ const select=$('#profileSelect'); if(!select) return; let names=[]; if(FILE) names=(read('__bl_local_users_v1__',[])||[]).map(value=>value?.name).filter(Boolean); else { const response=await get(API+'/list_profiles.php'); names=response?.ok?(response.profiles||response.names||[]):[]; } const old=select.value; select.innerHTML='<option value="">Select profile…</option>'+names.map(name=>`<option value="${esc(name)}">${esc(name)}</option>`).join(''); if(names.includes(old)) select.value=old; }
  async function profilePlan(name){ const out=$('#profilePlanOut'); if(!out) return; if(!name){ out.textContent='Select a profile to view their latest saved plan.'; return; } let saved=FILE?read(key(PLAN,name),null):null; if(!FILE){ const response=await get(API+'/get_plan.php',{name}); if(response?.ok&&response.hasPlan) saved={planJson:response.planJson,sessions:response.sessions,progress:response.progress}; } const plan=normalisePlan(saved?.planJson); if(plan) renderPlan(out,plan,saved.sessions||[],saved.progress||null); else out.textContent='No saved plan for this profile yet.'; }
  async function achievements(){ const summary=$('#achSummary'),grid=$('#achGrid'); if(!summary||!grid) return; if(!auth.authed){ summary.textContent='Log in to track milestones.'; grid.innerHTML=''; return; } const done=current.progress?.done||0,total=current.progress?.total||0; summary.innerHTML=`<strong>Sessions done:</strong> ${done} • <strong>Plan progress:</strong> ${done}/${total}`; const definitions=[['First Session',done>=1],['10 Sessions',done>=10],['30 Sessions',done>=30],['Plan Completed',total>0&&done===total]]; grid.innerHTML=definitions.map(([name,on])=>`<div class="ach-card ${on?'unlocked':''}"><div class="ach-icon">${on?'✓':'○'}</div><div class="ach-meta"><div class="name">${name}</div><div class="prog">${on?'Unlocked':'Locked'}</div></div></div>`).join(''); }
  function library(){ const out=$('#exerciseLibrary'); if(!out) return; const query=($('#exSearch')?.value||'').toLowerCase(),group=$('#exGroup')?.value||'all'; out.innerHTML=EX.filter(item=>(group==='all'||item.category===group)&&(!query||(item.name+' '+item.family+' '+item.unit).toLowerCase().includes(query))).map(item=>`<div class="card exercise-card"><div class="title">${esc(item.name)}</div><div class="muted">${esc(item.family)} • ${esc(item.unit)}</div><div class="divider"></div><p>${esc(item.how)}</p></div>`).join(''); }
  const FITNESS_TABS=['system','my-plan','library','achievements'];
  function routedFitnessTab(){
    const match=location.pathname.match(/\/(system|my-plan|library|achievements)\/?$/);
    return match&&FITNESS_TABS.includes(match[1])?match[1]:'system';
  }
  function fitnessTabPath(target){
    const path=location.pathname.replace(/\/(system|my-plan|library|achievements)\/?$/,'');
    return `${path}/${target}`.replace(/\/{2,}/g,'/');
  }
  function activateFitnessTab(target,historyMode='none'){
    if(!FITNESS_TABS.includes(target)) target='system';
    document.documentElement.setAttribute('data-initial-fitness-tab',target);
    $$('.tab[data-target]').forEach(button=>{
      const active=button.dataset.target===target;
      button.setAttribute('aria-selected',String(active));
    });
    $$('.section').forEach(section=>section.classList.toggle('active',section.id===target));
    if(historyMode==='push' && routedFitnessTab()!==target) history.pushState({fitnessTab:target},'',fitnessTabPath(target));
    else if(historyMode==='replace' && routedFitnessTab()!==target) history.replaceState({fitnessTab:target},'',fitnessTabPath(target));
  }
  function bindFitnessTabs(){
    $$('.tab[data-target]').forEach(button=>button.addEventListener('click',event=>{
      event.preventDefault();
      activateFitnessTab(button.dataset.target,'push');
    }));
    global.addEventListener('popstate',()=>activateFitnessTab(routedFitnessTab(),'none'));
  }
  function setPlanSubtab(view){ $$('.my-plan-subtab').forEach(button=>{ const active=button.dataset.planView===view; button.classList.toggle('active',active); button.setAttribute('aria-selected',String(active)); }); if($('#currentWorkoutOut')) $('#currentWorkoutOut').hidden=view!=='current'; if($('#completedWorkoutOut')) $('#completedWorkoutOut').hidden=view!=='completed'; if($('#futureWorkoutOut')) $('#futureWorkoutOut').hidden=view!=='future'; if($('#myPlanStatus')) $('#myPlanStatus').hidden=view!=='current'; }
  function init(){ activateFitnessTab(routedFitnessTab(),'none'); bindFitnessTabs(); const timerModal=$('#timerModal'),deleteModal=$('#deletePlanModal'); if(timerModal) timerModal.hidden=true; if(deleteModal) deleteModal.hidden=true; document.documentElement.setAttribute('data-baseline-fitness-runtime',BUILD); $$('select').forEach(normaliseSelect); const list=$('#exerciseList'); if(list){ list.innerHTML=''; list.append(makeRow(EX[0].name)); } if($('#startDate')&&!$('#startDate').value) $('#startDate').value=today(); mode(); ensureFitnessAccountButton(); bindAuth(); const renderedCachedPlan=showAnyCachedOwn(); if(!renderedCachedPlan) syncMyPlanShells(); $('#addExerciseBtn')?.addEventListener('click',()=>{ mark(); const used=new Set(items().map(item=>item.exercise)),next=EX.find(item=>!used.has(item.name))||EX[0]; list.append(makeRow(next.name)); syncGoals(); }); $('#lengthMode')?.addEventListener('change',()=>{ mark(); mode(); }); $('#goalExercise')?.addEventListener('change',()=>{ mark(); syncGoals(); }); ['startDate','freq','sessions','goalAmount'].forEach(id=>{ const control=$('#'+id); control?.addEventListener('input',mark); control?.addEventListener('change',mark); }); $('#genBtn')?.addEventListener('click',()=>renderPlan($('#planOut'),planFromUI(),null,null)); $('#savePlanBtn')?.addEventListener('click',()=>save(!!current.planId)); $('#cancelEditPlanBtn')?.addEventListener('click',()=>{ myPlanMode='view'; syncMyPlanShells(); currentWorkout(); }); $('#profileRefresh')?.addEventListener('click',profiles); $('#profileSelect')?.addEventListener('change',event=>profilePlan(event.currentTarget.value)); $('#exSearch')?.addEventListener('input',library); $('#exGroup')?.addEventListener('change',library); $$('.my-plan-subtab').forEach(button=>button.addEventListener('click',()=>setPlanSubtab(button.dataset.planView))); $('#closeTimerModalBtn')?.addEventListener('click',()=>closeTimerModal()); $('#cancelDeletePlanBtn')?.addEventListener('click',closeDeletePlanModal); $('#deletePlanConfirmInput')?.addEventListener('input',event=>{ const button=$('#confirmDeletePlanBtn'); if(button) button.disabled=String(event.currentTarget.value||'').trim()!=='DELETE'; }); $('#confirmDeletePlanBtn')?.addEventListener('click',()=>deletePlan()); const cachedAuth=global.BASELINE_auth?.get?.(); if(cachedAuth?.authed){ applyAuthSnapshot(cachedAuth); refreshAuthViews(); refreshAuth(); }else{ refreshAuth().then(refreshAuthViews); } library(); setPlanSubtab('current'); }

  global.BASELINE_fitnessWorkout=Object.freeze({
    BUILD,
    getCurrentContext:workoutContext,
    startSession:startCurrentWorkout,
    succeedCurrentStep,
    failCurrentStep,
    finishSession:finishCurrentWorkout,
    resetSession:resetCurrentWorkout,
    onChange(listener){ workoutListeners.add(listener); return ()=>workoutListeners.delete(listener); }
  });
  global.BASELINE_FITNESS_DEBUG=pure;
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})(typeof window!=='undefined'?window:globalThis);

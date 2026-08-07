/* Baseline Lifestyle — ONE shared Public Routine viewer for Skincare + Fitness.

   PUBLIC ROUTINE CONTRACT — DO NOT CREATE A SECOND VIEWER
   ------------------------------------------------------
   The selected public profile is read-only. The three subtabs deliberately
   mirror the owner's My Routine structure:
     1. User's Log             -> this week's completion state + calendar
     2. User's Routine Summary -> comprehensive descriptions/details
     3. User's Plan            -> the actual saved plan structure and progress

   System colour comes only from theme tokens. This viewer never writes into
   the signed-in user's own log, date selection or routine data. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_PUBLIC_ROUTINE_GROUPS_V3__) return;
  global.__BASELINE_PUBLIC_ROUTINE_GROUPS_V3__=true;
  global.__BASELINE_PUBLIC_ROUTINE_GROUPS_V2__=true;
  global.__BASELINE_PUBLIC_ROUTINE_GROUPS_V1__=true;

  const document=global.document;
  const app=document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const UI=global.BASELINE_RoutineSystem;
  const GROUP_API='/systems/baseline-fitness/api/routine_groups.php';
  const PUBLIC_API=app==='skin' ? '/systems/baseline-natural-skincare/api/public_routine_v2.php' : '/systems/baseline-fitness/api/public_routine_v2.php';
  const VIEW_KEY=`__bl_public_routine_view_v3__::${app}`;
  let activeView='log';
  let currentData=null;
  let syncingGroups=false;
  let groupSaveTimer=0;
  let serverGroupSignature='';

  const $=(selector,root=document) => root?.querySelector?.(selector) || null;
  const $$=(selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc=(value) => String(value==null?'':value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));

  function owner() {
    try {
      const snapshot=global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  async function jsonRequest(url,options={}) {
    try {
      const response=await fetch(url,{ method:options.method || 'GET',credentials:'same-origin',headers:Object.assign({ Accept:'application/json' },options.body ? { 'Content-Type':'application/json' } : {}),body:options.body ? JSON.stringify(options.body) : undefined });
      const data=await response.json().catch(() => null);
      return { response,data:data && typeof data==='object' ? data : { ok:false,error:`http_${response.status}` } };
    } catch (_error) { return { response:null,data:{ ok:false,error:'network_error' } }; }
  }

  function injectStyles() {
    if ($('#baselinePublicRoutineV3Style')) return;
    const style=document.createElement('style');style.id='baselinePublicRoutineV3Style';
    style.textContent=`
      .bl-public-v3{display:grid;gap:12px;margin-top:14px}
      .bl-public-v3-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap}
      .bl-public-v3-head h3{margin:0}
      .bl-public-v3-tabs{display:flex;gap:7px;flex-wrap:wrap}
      .bl-public-v3-tab{border:1px solid var(--border-2);border-radius:999px;padding:9px 14px;background:var(--filter-bg);color:var(--ink);font:inherit;font-weight:850;cursor:pointer}
      .bl-public-v3-tab[aria-selected="true"]{box-shadow:0 0 0 2px var(--ring);background:var(--card-bg)}
      .bl-public-v3-panel{display:grid;gap:11px}
      .bl-public-v3-calendar{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:7px}
      .bl-public-v3-day{min-width:0;padding:9px;border:1px solid var(--border);border-radius:12px;background:var(--filter-bg)}
      .bl-public-v3-day strong{display:block;font-size:.82rem}.bl-public-v3-day span{display:block;margin-top:4px;font-size:.79rem;color:var(--muted)}
      .bl-public-v3-day.has-completion{box-shadow:inset 0 0 0 1px var(--border-2)}
      .bl-public-v3-groups{display:grid;gap:10px}
      .bl-public-v3-group{display:grid;gap:8px;padding:11px;border:1px solid var(--border);border-radius:16px;background:var(--card-bg)}
      .bl-public-v3-group>h4{margin:0;font-size:1.04rem}
      .bl-public-v3-item{display:grid;gap:7px;padding:10px 11px;border:1px solid var(--border);border-radius:12px;background:var(--filter-bg)}
      .bl-public-v3-item strong{font-weight:850}.bl-public-v3-meta{display:flex;gap:7px;flex-wrap:wrap;font-size:.82rem;color:var(--muted)}
      .bl-public-v3-meta>span{padding:3px 7px;border:1px solid var(--border);border-radius:999px}
      .bl-public-v3-progress{display:flex;align-items:center;gap:8px}
      .bl-public-v3-check{width:20px;height:20px;flex:0 0 20px;border:1px solid var(--border-2);border-radius:4px;display:grid;place-items:center;font-weight:900}
      .bl-public-v3-check.done::before{content:'✓'}
      .bl-public-v3-item.done{opacity:.72}
      .bl-public-v3-detail-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
      .bl-public-v3-detail{padding:9px;border:1px solid var(--border);border-radius:10px;background:var(--card-bg)}
      .bl-public-v3-detail h5{margin:0 0 5px;font-size:.86rem}.bl-public-v3-detail p{margin:0;color:var(--muted)}
      .bl-public-v3-exercises{display:grid;gap:7px}
      .bl-public-v3-exercise{display:grid;gap:6px;padding:9px;border:1px solid var(--border);border-radius:10px;background:var(--card-bg)}
      .bl-public-v3-sessions{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px}
      .bl-public-v3-session{padding:8px 9px;border-radius:10px;border:1px solid var(--border);background:var(--card-bg);font-size:.82rem}
      .bl-public-v3-session.done{opacity:.68}
      [data-routine-panel="public"] .routine-card,[data-fitness-routine-panel="public"] .fitness-routine-card{padding:18px!important}
      @media(max-width:760px){.bl-public-v3-calendar,.bl-public-v3-detail-grid{grid-template-columns:1fr}.bl-public-v3-day{display:flex;justify-content:space-between;gap:12px}.bl-public-v3-day span{margin-top:0}}
    `;
    document.head.appendChild(style);
  }

  function localDate(value) {
    if (value instanceof Date) return new Date(value.getFullYear(),value.getMonth(),value.getDate());
    const match=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    return match ? new Date(Number(match[1]),Number(match[2])-1,Number(match[3])) : new Date();
  }
  function isoDate(value) { const date=localDate(value);const pad=(number) => String(number).padStart(2,'0');return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`; }
  function weekDates(anchor=new Date()) {
    const date=localDate(anchor);const startIndex=Number(UI?.startDayIndex?.() ?? 1);const offset=((date.getDay()-startIndex)+7)%7;date.setDate(date.getDate()-offset);
    return Array.from({ length:7 },(_,index) => { const next=new Date(date);next.setDate(next.getDate()+index);return next; });
  }

  function frequencyText(value) {
    const frequency=value && typeof value==='object' ? value : {};
    if (frequency.mode==='daily') return 'Every day';
    if (frequency.mode==='days') return Array.isArray(frequency.days) && frequency.days.length ? frequency.days.join(', ') : 'Specific days';
    if (frequency.mode==='weekly') return `${Math.max(1,Number(frequency.timesPerWeek || 1))}× each week`;
    if (frequency.mode==='monthly') return `${Math.max(1,Number(frequency.timesPerMonth || 1))}× each month`;
    return 'As needed';
  }

  function planFrequencyText(plan) {
    const value=plan?.planJson || plan || {};
    if (value.scheduleMode==='specific-days') {
      const days=Array.isArray(value.days) ? value.days.filter(Boolean) : [];
      return days.length ? days.join(', ') : 'Specific weekdays';
    }
    const min=Math.max(1,Math.min(7,Number(value.frequencyMin || String(value.frequency || '1x').replace(/\D/g,'')) || 1));
    const max=Math.max(0,Math.min(7,Number(value.frequencyRangeMax || 0)));
    return max>min ? `${min}–${max} times each week` : `${min} time${min===1?'':'s'} each week`;
  }

  function normaliseGroups(raw) {
    const seen=new Set();
    return (Array.isArray(raw) ? raw : []).map((group) => ({ id:String(group?.id || '').trim(),title:String(group?.title || '').trim(),applyFrequency:Boolean(group?.applyFrequency),frequency:group?.frequency && typeof group.frequency==='object' ? group.frequency : null,applyTime:Boolean(group?.applyTime),timeOfDay:String(group?.timeOfDay || 'anytime') })).filter((group) => group.id && group.title && !seen.has(group.id) && seen.add(group.id));
  }
  function normaliseAssignments(raw,groups) {
    const valid=new Set(groups.map((group) => group.id));const output={};
    Object.entries(raw && typeof raw==='object' ? raw : {}).forEach(([key,groupId]) => { if (valid.has(String(groupId))) output[String(key)]=String(groupId); });
    return output;
  }

  function completionMap(data) {
    const map=new Map();const items=[...(data.routine || []),...(data.activities || [])];
    Object.entries(data?.logs && typeof data.logs==='object' ? data.logs : {}).forEach(([date,entries]) => {
      const names=[];
      Object.entries(entries && typeof entries==='object' ? entries : {}).forEach(([id,entry]) => {
        if (!entry?.completed) return;const item=items.find((candidate) => String(candidate?.id)===String(id));names.push(item?.title || item?.name || 'Completed routine item');
      });
      if (names.length) map.set(date,names);
    });
    (data.plans || []).forEach((plan) => (plan.sessions || []).forEach((session) => {
      if (session?.status!=='done' || !session.completedAt) return;
      const date=isoDate(new Date(session.completedAt));
      map.set(date,(map.get(date) || []).concat(`${plan.planJson?.name || 'Calisthenics'} · Session ${Number(session.sessionIndex || 0)}`));
    }));
    return map;
  }

  function renderWeekCalendar(data) {
    const completions=completionMap(data);
    return `<div class="bl-public-v3-calendar" aria-label="This week's routine activity">${weekDates().map((date) => {
      const iso=isoDate(date);const entries=completions.get(iso) || [];const label=date.toLocaleDateString('en-GB',{ weekday:'short',day:'numeric',month:'short' });
      return `<div class="bl-public-v3-day${entries.length?' has-completion':''}" title="${esc(entries.join(', '))}"><strong>${esc(label)}</strong><span>${entries.length ? `${entries.length} completed` : 'No completions'}</span></div>`;
    }).join('')}</div>`;
  }

  function effectiveSkinItem(item,group) {
    const copy=Object.assign({},item);if (group?.applyFrequency && group.frequency) copy.frequency=group.frequency;if (group?.applyTime) copy.timeOfDay=group.timeOfDay;return copy;
  }

  function skinSections(data) {
    const groups=normaliseGroups(data.groups);const assignments=normaliseAssignments(data.assignments,groups);const routine=Array.isArray(data.routine) ? data.routine : [];const assigned=new Set();const output=[];
    groups.forEach((group,index) => { const items=routine.filter((item) => assignments[String(item.id)]===group.id);items.forEach((item) => assigned.add(String(item.id)));if (items.length) output.push({ number:index+1,id:group.id,title:group.title,group,items }); });
    const ungrouped=routine.filter((item) => !assigned.has(String(item.id)));if (ungrouped.length) output.push({ number:groups.length+1,id:'ungrouped',title:'Ungrouped routine actions',group:null,items:ungrouped });return output;
  }

  function countSkinWeek(item,data,group=null) {
    const effective=effectiveSkinItem(item,group);const days=weekDates();const frequency=effective.frequency || {};const logs=data.logs || {};let target=0;let done=0;
    if (frequency.mode==='weekly') { target=Math.max(1,Number(frequency.timesPerWeek || 1));done=days.reduce((sum,date) => sum+(logs[isoDate(date)]?.[item.id]?.completed?1:0),0); }
    else if (frequency.mode==='daily') { target=7;done=days.reduce((sum,date) => sum+(logs[isoDate(date)]?.[item.id]?.completed?1:0),0); }
    else if (frequency.mode==='days') { const selected=Array.isArray(frequency.days)?frequency.days:[];const due=days.filter((date) => selected.includes(date.toLocaleDateString('en-GB',{ weekday:'long' })));target=due.length;done=due.reduce((sum,date) => sum+(logs[isoDate(date)]?.[item.id]?.completed?1:0),0); }
    else { done=days.reduce((sum,date) => sum+(logs[isoDate(date)]?.[item.id]?.completed?1:0),0);target=done; }
    return { done,target,remaining:Math.max(0,target-done) };
  }

  function skinBenefit(item) {
    try { return global.BASELINE_SKINCARE_ROUTINE_MODEL?.benefitText?.(item,'comprehensive') || item.benefit || ''; }
    catch (_error) { return item.benefit || ''; }
  }

  function skinLogHtml(data) {
    return `${renderWeekCalendar(data)}<div class="bl-public-v3-groups">${skinSections(data).map((section) => `<section class="bl-public-v3-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((item) => {
      const progress=countSkinWeek(item,data,section.group);const effective=effectiveSkinItem(item,section.group);const done=progress.target>0 && progress.done>=progress.target;
      return `<article class="bl-public-v3-item${done?' done':''}"><div class="bl-public-v3-progress"><span class="bl-public-v3-check${done?' done':''}" aria-hidden="true"></span><strong>${esc(item.title || 'Routine action')}</strong></div><div class="bl-public-v3-meta"><span>${esc(frequencyText(effective.frequency))}</span><span>${progress.done}/${progress.target} completed</span><span>${progress.remaining} left this week</span></div></article>`;
    }).join('')}</section>`).join('')}</div>`;
  }

  function skinSummaryHtml(data) {
    return `<div class="bl-public-v3-groups">${skinSections(data).map((section) => `<section class="bl-public-v3-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((item) => {
      const effective=effectiveSkinItem(item,section.group);const benefit=skinBenefit(item);const product=item.productName || item.customProductName || '';
      return `<article class="bl-public-v3-item"><strong>${esc(item.title || 'Routine action')}</strong><div class="bl-public-v3-detail-grid"><section class="bl-public-v3-detail"><h5>Routine details</h5><div class="bl-public-v3-meta"><span>${esc(effective.timeOfDay || 'Any time')}</span><span>${esc(frequencyText(effective.frequency))}</span>${product?`<span>${esc(product)}</span>`:''}</div>${item.notes?`<p>${esc(item.notes)}</p>`:''}</section><section class="bl-public-v3-detail"><h5>Benefits and practical role</h5><p>${esc(benefit || 'No description has been recorded.')}</p></section></div></article>`;
    }).join('')}</section>`).join('')}</div>`;
  }

  function skinPlanHtml(data) {
    return `<div class="bl-public-v3-groups">${skinSections(data).map((section) => `<section class="bl-public-v3-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((item,index) => {
      const effective=effectiveSkinItem(item,section.group);const product=item.productName || item.customProductName || '';
      return `<article class="bl-public-v3-item"><strong>${esc(item.title || `Routine action ${index+1}`)}</strong><div class="bl-public-v3-meta"><span>${esc(effective.timeOfDay || 'Any time')}</span><span>${esc(frequencyText(effective.frequency))}</span>${product?`<span>${esc(product)}</span>`:''}</div>${item.notes?`<div>${esc(item.notes)}</div>`:''}</article>`;
    }).join('')}</section>`).join('')}</div>`;
  }

  function fitnessEntities(data) {
    return (data.plans || []).map((plan) => ({ key:`plan:${Number(plan.planId)}`,type:'plan',value:plan })).concat((data.activities || []).map((activity) => ({ key:`activity:${String(activity.id)}`,type:'activity',value:activity })));
  }
  function fitnessSections(data) {
    const groups=normaliseGroups(data.groups);const assignments=normaliseAssignments(data.assignments,groups);const entities=fitnessEntities(data);const assigned=new Set();const output=[];
    groups.forEach((group,index) => { const items=entities.filter((entity) => assignments[entity.key]===group.id);items.forEach((entity) => assigned.add(entity.key));if (items.length) output.push({ number:index+1,id:group.id,title:group.title,items }); });
    const ungrouped=entities.filter((entity) => !assigned.has(entity.key));if (ungrouped.length) output.push({ number:groups.length+1,id:'ungrouped',title:'Ungrouped routine items',items:ungrouped });return output;
  }
  function fitnessEntityName(entity) { return entity.type==='plan' ? String(entity.value?.planJson?.name || 'Calisthenics Plan') : String(entity.value?.name || 'Fitness activity'); }

  function fitnessWeekProgress(entity,data) {
    const week=new Set(weekDates().map(isoDate));
    if (entity.type==='plan') {
      const completed=(entity.value.sessions || []).filter((session) => session.status==='done' && session.completedAt && week.has(isoDate(new Date(session.completedAt)))).length;
      const min=Math.max(1,Number(entity.value.planJson?.frequencyMin || String(entity.value.planJson?.frequency || '1x').replace(/\D/g,'')) || 1);const max=Math.max(0,Number(entity.value.planJson?.frequencyRangeMax || 0));
      return { done:completed,target:min,remaining:Math.max(0,min-completed),rangeMax:max>min?max:0 };
    }
    const frequency=entity.value.frequency || {};const logs=data.logs || {};let target=0;let done=0;
    if (frequency.mode==='weekly') { target=Math.max(1,Number(frequency.timesPerWeek || 1));done=Array.from(week).reduce((sum,date) => sum+(logs[date]?.[entity.value.id]?.completed?1:0),0); }
    else if (frequency.mode==='daily') { target=7;done=Array.from(week).reduce((sum,date) => sum+(logs[date]?.[entity.value.id]?.completed?1:0),0); }
    else if (frequency.mode==='days') { const selected=Array.isArray(frequency.days)?frequency.days:[];const due=weekDates().filter((date) => selected.includes(date.toLocaleDateString('en-GB',{ weekday:'long' })));target=due.length;done=due.reduce((sum,date) => sum+(logs[isoDate(date)]?.[entity.value.id]?.completed?1:0),0); }
    else { done=Array.from(week).reduce((sum,date) => sum+(logs[date]?.[entity.value.id]?.completed?1:0),0);target=done; }
    return { done,target,remaining:Math.max(0,target-done),rangeMax:0 };
  }

  function exerciseDefinition(name) {
    const target=String(name || '').trim();
    return (global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || []).find((exercise) => String(exercise.name || '').localeCompare(target,'en-GB',{ sensitivity:'base' })===0) || null;
  }
  function activityDefinition(id) { return global.BASELINE_FITNESS_ACTIVITY_CATALOGUE?.ACTIVITY_BY_ID?.get?.(String(id || '')) || null; }
  function progressionLabel(item,definition) {
    if (definition?.unit==='seconds' || item?.progressionMode==='timed-hold') return 'Timed hold';
    if (item?.progressionMode==='straight-sets') return `Straight sets · +${Number(item.repIncrease || 0)} per session`;
    return `Linear fixed progression · +${Number(item.repIncrease || 0)} per session`;
  }

  function fitnessLogHtml(data) {
    return `${renderWeekCalendar(data)}<div class="bl-public-v3-groups">${fitnessSections(data).map((section) => `<section class="bl-public-v3-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((entity) => {
      const progress=fitnessWeekProgress(entity,data);const frequency=entity.type==='plan' ? planFrequencyText(entity.value) : frequencyText(entity.value.frequency);const done=progress.target>0 && progress.done>=progress.target;const target=progress.rangeMax ? `${progress.done} completed · ${progress.remaining} left to minimum · maximum ${progress.rangeMax}` : `${progress.done}/${progress.target} completed · ${progress.remaining} left this week`;
      return `<article class="bl-public-v3-item${done?' done':''}"><div class="bl-public-v3-progress"><span class="bl-public-v3-check${done?' done':''}" aria-hidden="true"></span><strong>${esc(fitnessEntityName(entity))}</strong></div><div class="bl-public-v3-meta"><span>${esc(frequency)}</span><span>${esc(target)}</span></div></article>`;
    }).join('')}</section>`).join('')}</div>`;
  }

  function activitySummary(entity) {
    const activity=entity.value;const definition=activityDefinition(activity.activityId);const metrics=definition?.metrics || [];
    const metricNames=metrics.map((metric) => `${metric.label}${metric.unit?` (${metric.unit})`:''}`).join(', ');
    return `<article class="bl-public-v3-item"><strong>${esc(fitnessEntityName(entity))}</strong><div class="bl-public-v3-detail-grid"><section class="bl-public-v3-detail"><h5>Activity details</h5><div class="bl-public-v3-meta"><span>${esc(definition?.group || activity.section || 'Activity')}</span><span>${esc(frequencyText(activity.frequency))}</span><span>${esc(activity.timeOfDay || 'Any time')}</span></div>${activity.notes?`<p>${esc(activity.notes)}</p>`:''}</section><section class="bl-public-v3-detail"><h5>Tracking and practical role</h5><p>${esc(metricNames ? `Relevant measures: ${metricNames}.` : 'Track duration, quality and the details relevant to the activity.')}</p></section></div></article>`;
  }

  function planSummary(entity) {
    const plan=entity.value;const exercises=Array.isArray(plan.planJson?.items) ? plan.planJson.items : [];
    return `<article class="bl-public-v3-item"><strong>${esc(fitnessEntityName(entity))}</strong><div class="bl-public-v3-meta"><span>${esc(planFrequencyText(plan))}</span><span>${exercises.length} exercise${exercises.length===1?'':'s'}</span></div><div class="bl-public-v3-exercises">${exercises.map((item) => {
      const definition=exerciseDefinition(item.exercise);
      return `<section class="bl-public-v3-exercise"><strong>${esc(item.exercise || 'Exercise')}</strong><div class="bl-public-v3-meta"><span>${esc(definition?.family || 'Calisthenics')}</span><span>${esc(definition?.movementCategory || 'Bodyweight')}</span><span>${esc(progressionLabel(item,definition))}</span></div>${definition?.goodFor?`<div><b>Purpose:</b> ${esc(definition.goodFor)}</div>`:''}${definition?.how?`<div><b>Technique:</b> ${esc(definition.how)}</div>`:''}</section>`;
    }).join('')}</div></article>`;
  }

  function fitnessSummaryHtml(data) {
    return `<div class="bl-public-v3-groups">${fitnessSections(data).map((section) => `<section class="bl-public-v3-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((entity) => entity.type==='plan' ? planSummary(entity) : activitySummary(entity)).join('')}</section>`).join('')}</div>`;
  }

  function fitnessPlanHtml(data) {
    return `<div class="bl-public-v3-groups">${fitnessSections(data).map((section) => `<section class="bl-public-v3-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((entity) => {
      if (entity.type==='activity') {
        const activity=entity.value;const definition=activityDefinition(activity.activityId);
        return `<article class="bl-public-v3-item"><strong>${esc(fitnessEntityName(entity))}</strong><div class="bl-public-v3-meta"><span>${esc(definition?.group || activity.section || 'Activity')}</span><span>${esc(frequencyText(activity.frequency))}</span><span>${esc(activity.timeOfDay || 'Any time')}</span></div>${activity.notes?`<div>${esc(activity.notes)}</div>`:''}</article>`;
      }
      const plan=entity.value;const sessions=Array.isArray(plan.sessions)?plan.sessions:[];const done=sessions.filter((session) => session.status==='done').length;const items=Array.isArray(plan.planJson?.items)?plan.planJson.items:[];
      return `<article class="bl-public-v3-item"><strong>${esc(fitnessEntityName(entity))}</strong><div class="bl-public-v3-meta"><span>${esc(planFrequencyText(plan))}</span><span>${done}/${sessions.length} sessions completed</span><span>${Math.max(0,sessions.length-done)} remaining</span></div><div class="bl-public-v3-exercises">${items.map((item,index) => {
        const definition=exerciseDefinition(item.exercise);const unit=definition?.unit==='seconds'?'seconds':'reps';
        return `<section class="bl-public-v3-exercise"><strong>${index+1}. ${esc(item.exercise || 'Exercise')}</strong><div class="bl-public-v3-meta"><span>Baseline ${Number(item.baseline || 0)} ${unit}</span>${definition?.unit==='seconds'?'':`<span>${Number(item.sets || 1)} sets</span>`}<span>${esc(progressionLabel(item,definition))}</span></div></section>`;
      }).join('')}</div><div class="bl-public-v3-sessions">${sessions.map((session) => `<div class="bl-public-v3-session${session.status==='done'?' done':''}"><strong>Session ${Number(session.sessionIndex || 0)}</strong><div>${session.status==='done'?'✓ Completed':'Remaining'}${plan.planJson?.scheduleMode==='specific-days' && session.scheduledDate ? ` · ${esc(session.scheduledDate)}`:''}</div></div>`).join('')}</div></article>`;
    }).join('')}</section>`).join('')}</div>`;
  }

  function renderActiveView() {
    if (!currentData) return;
    const target=app==='skin' ? $('#publicRoutineResult') : $('#fitnessPublicRoutineResult');if (!target) return;
    const name=String(currentData.owner || 'User');
    const body=activeView==='summary' ? (app==='skin'?skinSummaryHtml(currentData):fitnessSummaryHtml(currentData)) : activeView==='plan' ? (app==='skin'?skinPlanHtml(currentData):fitnessPlanHtml(currentData)) : (app==='skin'?skinLogHtml(currentData):fitnessLogHtml(currentData));
    target.innerHTML=`<div class="bl-public-v3"><div class="bl-public-v3-head"><h3>${esc(name)}’s Routine</h3><div class="bl-public-v3-tabs" role="tablist" aria-label="Public routine views"><button type="button" class="bl-public-v3-tab bl-public-v2-tab" data-public-view="log" aria-selected="${activeView==='log'}">User's Log</button><button type="button" class="bl-public-v3-tab bl-public-v2-tab" data-public-view="summary" aria-selected="${activeView==='summary'}">User's Routine Summary</button><button type="button" class="bl-public-v3-tab bl-public-v2-tab" data-public-view="plan" aria-selected="${activeView==='plan'}">User's Plan</button></div></div><div class="bl-public-v3-panel">${body}</div></div>`;
  }

  function publicField() { return app==='skin' ? $('#publicRoutineName') : $('#fitnessPublicRoutineName'); }
  function publicTarget() { return app==='skin' ? $('#publicRoutineResult') : $('#fitnessPublicRoutineResult'); }

  async function loadPublic() {
    const field=publicField();const name=String(field?.value || '').trim();if (!name) { field?.focus();return; }
    const target=publicTarget();if (target) target.innerHTML='<div class="bl-public-v3"><p>Loading public routine…</p></div>';
    const { data }=await jsonRequest(`${PUBLIC_API}?name=${encodeURIComponent(name)}`);
    if (!data?.ok || !data.publicRoutine) { currentData=null;if (target) target.innerHTML=`<p>${esc(data?.error==='routine_private'?'That routine is private.':'The public routine could not be loaded.')}</p>`;return; }
    currentData=data.publicRoutine;
    try { const remembered=global.sessionStorage?.getItem(VIEW_KEY);activeView=['log','summary','plan'].includes(remembered)?remembered:'log'; } catch (_error) { activeView='log'; }
    renderActiveView();
  }

  function updatePublicIntro() {
    const panel=app==='skin' ? $('[data-routine-panel="public"]') : $('[data-fitness-routine-panel="public"]');if (!panel) return;
    const heading=Array.from(panel.querySelectorAll('h1,h2,h3')).find((node) => /Public Routines/i.test(node.textContent || ''));
    const intro=heading?.parentElement?.querySelector('p') || heading?.nextElementSibling;if (intro) intro.textContent="Choose a public profile to view their Log, Routine Summary and Plan.";
  }

  function handleClick(event) {
    const tab=event.target?.closest?.('[data-public-view]');
    if (tab) { event.preventDefault();event.stopPropagation();activeView=['log','summary','plan'].includes(tab.dataset.publicView)?tab.dataset.publicView:'log';try { global.sessionStorage?.setItem(VIEW_KEY,activeView); } catch (_error) {}renderActiveView();return; }
    if (app==='skin' && event.target?.closest?.('#findPublicRoutineBtn')) { event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();loadPublic();return; }
    if (app==='fitness' && event.target?.closest?.('#fitnessViewPublicRoutine')) { event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();loadPublic(); }
  }
  function handleChange(event) {
    if (event.target?.id===(app==='skin'?'publicRoutineName':'fitnessPublicRoutineName') && event.target.value) { event.stopPropagation();event.stopImmediatePropagation();loadPublic(); }
  }

  /* Fitness group persistence remains in the shared viewer because the owner's
     group assignments and what a public viewer sees must come from one saved
     server state. */
  function groupStateFromSettings(settings=UI?.readSettings?.(owner()) || {}) {
    const groups=normaliseGroups(settings.fitnessRoutineGroups).map((group) => ({ id:group.id,title:group.title }));
    return { groups,assignments:normaliseAssignments(settings.fitnessRoutineAssignments,groups) };
  }
  function groupSignature(state) { return JSON.stringify({ groups:state.groups,assignments:state.assignments }); }
  async function pushFitnessGroups(state) {
    if (app!=='fitness' || owner()==='guest') return;const signature=groupSignature(state);if (signature===serverGroupSignature) return;
    const { data }=await jsonRequest(GROUP_API,{ method:'POST',body:state });
    if (data?.ok) { const groups=normaliseGroups(data.groups).map((group) => ({ id:group.id,title:group.title }));serverGroupSignature=groupSignature({ groups,assignments:normaliseAssignments(data.assignments,groups) }); }
  }
  function scheduleFitnessGroupPush(settings) { if (app!=='fitness' || syncingGroups) return;const state=groupStateFromSettings(settings);clearTimeout(groupSaveTimer);groupSaveTimer=global.setTimeout(() => pushFitnessGroups(state),250); }
  async function reconcileFitnessGroups() {
    if (app!=='fitness' || owner()==='guest' || !UI?.readSettings || !UI?.writeSettings) return;
    const local=groupStateFromSettings();const { data }=await jsonRequest(GROUP_API);if (!data?.ok) return;
    if (data.hasState) {
      const groups=normaliseGroups(data.groups).map((group) => ({ id:group.id,title:group.title }));const assignments=normaliseAssignments(data.assignments,groups);serverGroupSignature=groupSignature({ groups,assignments });
      if (groupSignature(local)!==serverGroupSignature) { syncingGroups=true;try { UI.writeSettings({ fitnessRoutineGroups:groups,fitnessRoutineAssignments:assignments },owner()); } finally { syncingGroups=false; } }
    } else if (local.groups.length || Object.keys(local.assignments).length) await pushFitnessGroups(local);else serverGroupSignature=groupSignature(local);
  }

  function boot() {
    injectStyles();updatePublicIntro();document.addEventListener('click',handleClick,true);document.addEventListener('change',handleChange,true);
    if (app==='fitness') { document.addEventListener('baseline:routine-settings-changed',(event) => scheduleFitnessGroupPush(event.detail?.settings));reconcileFitnessGroups();try { global.BASELINE_auth?.onChange?.(() => reconcileFitnessGroups()); } catch (_error) {} }
    document.documentElement.setAttribute('data-baseline-public-routine-viewer','v3');
  }

  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);
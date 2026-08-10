/* Baseline Fitness — canonical Routine Summary owner v3.

   OWNERSHIP CONTRACT
   ------------------
   The structure adapter creates the Routine Summary shell. This module is the
   single Fitness owner for Summary contents, hierarchy, badges and filtering.

   Dropdown order is deliberately two-layered:
   1. My Routine — the signed-in user's groups, plans, exercises and activities.
   2. Complete libraries — every exercise/activity in the loaded catalogues,
      including entries already used by My Routine, alphabetised by sub-category.

   Summary hierarchy:
   - G1/G2… = saved Routine Groups;
   - C1/C2… = saved Calisthenics plans;
   - R1/R2… = repetition-based Calisthenics exercises;
   - H1/H2… = timed-hold Calisthenics exercises;
   - S1/S2… = Sports activities;
   - O1/O2… = Other Fitness Activities;
   - A1/A2… = Cardio activities.

   Every Summary card uses the same two-column comprehensive shell.
   The selected Summary filter is transient UI state and stays in sessionStorage;
   the clean page URL remains /baseline-fitness/my-routine/summary.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_SUMMARY_V3__) return;
  global.__BASELINE_FITNESS_ROUTINE_SUMMARY_V3__=true;

  const document=global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app)!=='fitness') return;
  const UI=global.BASELINE_RoutineSystem;
  if (!UI) return;

  const FILTER_STORAGE_KEY='__bl_fitness_routine_summary_filter_v12__';
  const $=(selector,root=document)=>root?.querySelector?.(selector)||null;
  const $$=(selector,root=document)=>Array.from(root?.querySelectorAll?.(selector)||[]);
  const esc=UI.escapeHtml || ((value)=>String(value==null?'':value));
  const cssEscape=(value)=>global.CSS?.escape?global.CSS.escape(String(value)):String(value).replace(/[^a-zA-Z0-9_-]/g,'\\$&');
  const alpha=(a,b)=>String(a || '').localeCompare(String(b || ''),'en-GB',{ sensitivity:'base' });
  let frame=0;
  let rendering=false;

  function owner() {
    try {
      const snapshot=global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }
  function routineState() {
    try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[],logs:{} }; }
    catch (_error) { return { activities:[],logs:{} }; }
  }
  function plans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }
  function groupData() {
    let value={};
    try { value=UI.readSettings?.(owner()) || {}; } catch (_error) {}
    const seen=new Set();
    const groups=(Array.isArray(value.fitnessRoutineGroups)?value.fitnessRoutineGroups:[])
      .map((group)=>({ id:String(group?.id || '').trim(),title:String(group?.title || '').trim() }))
      .filter((group)=>group.id && group.title && !seen.has(group.id) && seen.add(group.id));
    const valid=new Set(groups.map((group)=>group.id));
    const assignments={};
    Object.entries(value.fitnessRoutineAssignments && typeof value.fitnessRoutineAssignments==='object'?value.fitnessRoutineAssignments:{}).forEach(([key,groupId])=>{
      if (valid.has(String(groupId))) assignments[String(key)]=String(groupId);
    });
    return { groups,assignments };
  }
  function activityDefinition(id) {
    return global.BASELINE_FITNESS_ACTIVITY_CATALOGUE?.ACTIVITY_BY_ID?.get?.(String(id || '')) || null;
  }
  function exerciseDefinition(name) {
    const target=String(name || '').replace(/\s+(Left|Right)$/i,'').replace(/\s+\(L\/R\)$/i,'').trim();
    return (global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || []).find((exercise)=>String(exercise?.name || '').replace(/\s+\(L\/R\)$/i,'').localeCompare(target,'en-GB',{ sensitivity:'base' })===0) || null;
  }
  function summaryRows(rows) {
    return typeof UI.summaryRows==='function'
      ? UI.summaryRows(rows)
      : `<dl class="bl-routine-summary-rows">${rows.map((row)=>`<div><dt>${esc(row.label)}</dt><dd>${esc(row.value)}</dd></div>`).join('')}</dl>`;
  }
  function timeLabel(value) {
    const text=String(value || '').trim();
    if (!text || text==='anytime') return 'Any time';
    return text.charAt(0).toUpperCase()+text.slice(1);
  }
  function frequencyText(frequency) {
    const value=frequency && typeof frequency==='object'?frequency:{};
    if (value.mode==='daily') return 'Every day';
    if (value.mode==='days') return Array.isArray(value.days)&&value.days.length?value.days.join(', '):'Specific days';
    if (value.mode==='weekly') return `${Math.max(1,Number(value.timesPerWeek || 1))}× each week`;
    if (value.mode==='monthly') return `${Math.max(1,Number(value.timesPerMonth || 1))}× each month`;
    return 'As needed';
  }
  function planFrequencyText(plan) {
    const value=plan?.planJson || {};
    if (value.scheduleMode==='specific-days') {
      const days=Array.isArray(value.days)?value.days.filter(Boolean):[];
      return days.length?days.join(', '):'Specific weekdays';
    }
    const min=Math.max(1,Math.min(7,Number(value.frequencyMin || String(value.frequency || '1x').replace(/\D/g,'')) || 1));
    const max=Math.max(0,Math.min(7,Number(value.frequencyRangeMax || 0)));
    return max>min?`${min}–${max} days each week`:`${min} day${min===1?'':'s'} each week`;
  }
  function isHold(item,definition) {
    return definition?.unit==='seconds' || item?.progressionMode==='timed-hold';
  }
  function exerciseCategory(item,definition) {
    let value=String(definition?.family || definition?.category || definition?.movementCategory || '').trim();
    const name=String(item?.exercise || definition?.name || '').trim();
    if (!value) {
      if (/push[ -]?ups?/i.test(name)) value='Pushups';
      else if (/lunge/i.test(name)) value='Lunges';
      else if (/squat/i.test(name)) value='Squats';
      else if (/plank/i.test(name)) value='Planks';
      else if (/mountain climber/i.test(name)) value='Mountain Climbers';
      else if (/dip/i.test(name)) value='Dips';
      else if (/pull[ -]?up|chin[ -]?up/i.test(name)) value='Pullups';
      else value='Bodyweight';
    }
    return value.replace(/Push[ -]?Ups?/gi,'Pushups').replace(/Pull[ -]?Ups?/gi,'Pullups');
  }
  function progressionText(item,definition) {
    if (isHold(item,definition)) return 'Timed isometric progression: the hold target advances after successful sessions and is shared across plans containing the same exercise.';
    const increase=Number(item?.repIncrease || 0);
    if (item?.progressionMode==='straight-sets') return `Straight sets: equal working sets begin from the Max Baseline calculation; +${increase} rep${increase===1?'':'s'} is added to every set after a successful session.`;
    if (item?.progressionMode) return `Linear fixed progression: the working sets are calculated from Max Baseline with a deliberate within-session rise; +${increase} rep${increase===1?'':'s'} is added after a successful session.`;
    return 'Progression is configured when this exercise is added to a Calisthenics plan.';
  }
  function exerciseMuscles(definition) {
    const text=`${definition?.family || ''} ${definition?.movementCategory || ''} ${definition?.name || ''}`.toLocaleLowerCase('en-GB');
    if (/reverse plank|posterior core/.test(text)) return 'Glutes, hamstrings, spinal extensors and posterior shoulder stabilisers, with trunk bracing throughout.';
    if (/plank|core|climber|hollow|side/.test(text)) return 'Abdominals, obliques and deep trunk stabilisers, with shoulder and hip stabilisers according to the variation.';
    if (/lunge|squat|leg|cossack|step/.test(text)) return 'Quadriceps, glutes, hamstrings and adductors, with calves and trunk stabilisers supporting balance and control.';
    if (/push|dip|chest/.test(text)) return 'Chest, triceps and anterior shoulders, with the trunk maintaining body position.';
    if (/pull|row|chin|back/.test(text)) return 'Latissimus dorsi, upper back, biceps and grip, with trunk stabilisers resisting unwanted movement.';
    if (/calf/.test(text)) return 'Calves and ankle stabilisers, with the rest of the leg contributing to balance.';
    return 'Exercise-specific prime movers plus the trunk and joint stabilisers required to control the bodyweight movement.';
  }
  function exerciseDemand(item,definition) {
    if (isHold(item,definition)) return 'Predominantly anaerobic / isometric muscular endurance';
    const text=`${definition?.family || ''} ${definition?.movementCategory || ''}`.toLocaleLowerCase('en-GB');
    if (/climber|burpee|dynamic/.test(text)) return 'Mixed anaerobic muscular work with increasing aerobic demand at sustained pace';
    return 'Predominantly anaerobic resistance and muscular-endurance work';
  }
  function planBenefits(items) {
    const timed=items.some((item)=>isHold(item,exerciseDefinition(item.exercise)));
    const unilateral=items.some((item)=>/lunge|split|side/i.test(String(item.exercise || '')));
    const parts=['Builds progressive bodyweight strength and muscular endurance while preserving an exercise-by-exercise progression record.'];
    if (timed) parts.push('Timed holds add isometric strength-endurance and positional control.');
    if (unilateral) parts.push('Unilateral and lateral movements add balance, hip control and side-to-side strength exposure.');
    return parts.join(' ');
  }
  function planMuscleSummary(items) {
    const categories=Array.from(new Set(items.map((item)=>exerciseCategory(item,exerciseDefinition(item.exercise))).filter(Boolean)));
    return categories.length?`${categories.join(', ')}; the exercise cards below identify the principal muscle involvement.`:'Whole-body involvement depends on the exercises saved in this plan.';
  }
  function activityProfile(definition,activity={}) {
    const profile=String(definition?.metricProfile || 'duration');
    const category=String(definition?.group || activity.section || 'Fitness activity');
    const energyDemand=profile==='running'||profile==='walking'||profile==='cycling'||profile==='swimming'||profile==='cardioMachine'
      ? 'Predominantly aerobic / cardiorespiratory'
      : profile==='intervals'
        ? 'Mixed aerobic and anaerobic interval conditioning'
        : profile==='strength'||profile==='climbing'
          ? 'Resistance / predominantly anaerobic strength work'
          : profile==='martial'||profile==='racket'||profile==='teamSport'||profile==='batBall'
            ? 'Mixed aerobic and anaerobic skill-based activity'
            : profile==='yoga'||profile==='mindful'||profile==='mobility'
              ? 'Mobility, control, balance and low-to-moderate intensity conditioning'
              : 'General physical activity / conditioning';
    const muscles=profile==='running'||profile==='walking'
      ? 'Glutes, quadriceps, hamstrings, calves, hip stabilisers and trunk.'
      : profile==='cycling'
        ? 'Quadriceps, glutes, hamstrings and calves, with trunk stabilisers supporting posture.'
        : profile==='swimming'
          ? 'Shoulders, upper back, chest, arms and trunk, with hips and legs contributing according to stroke.'
          : profile==='racket'
            ? 'Legs and hips for court movement; trunk rotation; shoulder, forearm and grip for racket control.'
            : profile==='martial'
              ? 'Full body: legs and hips, trunk, shoulders, arms and grip according to the discipline.'
              : profile==='strength'||profile==='climbing'
                ? 'Exercise-dependent whole-body musculature, with substantial trunk, grip and joint-stabiliser involvement.'
                : profile==='yoga'||profile==='mindful'||profile==='mobility'
                  ? 'Trunk and postural stabilisers plus the muscles surrounding the joints trained through the selected positions.'
                  : 'Whole-body contribution varies with the selected activity.';
    const benefit=profile==='running'||profile==='walking'||profile==='cycling'||profile==='swimming'||profile==='cardioMachine'
      ? 'Builds cardiovascular capacity, repeatable endurance and local muscular endurance through sustained cyclical work.'
      : profile==='racket'
        ? 'Combines acceleration, deceleration and direction change with reaction speed, coordination and sport-specific skill.'
        : profile==='yoga'||profile==='mindful'||profile==='mobility'
          ? 'Develops usable range, positional control, balance and body awareness while providing lower-load movement practice.'
          : profile==='strength'||profile==='climbing'
            ? 'Builds force production, muscular endurance and movement control, with progression determined by the specific exercise or route demands.'
            : profile==='martial'||profile==='teamSport'||profile==='batBall'
              ? 'Combines conditioning with coordination, reaction, movement skill and repeated changes in intensity.'
              : 'Develops the physical capacities and movement skills specific to the activity while contributing to overall weekly training volume.';
    return { category,energyDemand,muscles,benefit };
  }
  function activitySection(activity={},definition={}) {
    const section=String(activity?.section || definition?.section || '').toLocaleLowerCase('en-GB');
    if (section==='sports' || section==='sport') return 'sports';
    if (section==='cardio') return 'cardio';
    return 'other';
  }
  function activitySectionTitle(section) {
    if (section==='sports') return 'Sports';
    if (section==='cardio') return 'Cardio';
    return 'Other Fitness Activities';
  }

  function exerciseLibrary() {
    const seen=new Set();
    const definitions=(global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || [])
      .filter((definition)=>definition?.name && !seen.has(String(definition.name).toLocaleLowerCase('en-GB')) && seen.add(String(definition.name).toLocaleLowerCase('en-GB')))
      .map((definition)=>({
        definition,
        name:String(definition.name),
        category:exerciseCategory({ exercise:definition.name },definition),
        hold:isHold({},definition)
      }))
      .sort((a,b)=>alpha(a.category,b.category) || alpha(a.name,b.name));
    return definitions.map((entry,index)=>Object.assign(entry,{ filterKey:`library-exercise:${index}` }));
  }
  function activityLibrary() {
    const seen=new Set();
    const definitions=(global.BASELINE_FITNESS_ACTIVITY_CATALOGUE?.ACTIVITIES || [])
      .filter((definition)=>definition?.id && definition?.name && !seen.has(String(definition.id)) && seen.add(String(definition.id)))
      .map((definition)=>({
        definition,
        id:String(definition.id),
        name:String(definition.name),
        section:activitySection({},definition),
        category:String(definition.group || 'Other').trim() || 'Other'
      }))
      .sort((a,b)=>alpha(activitySectionTitle(a.section),activitySectionTitle(b.section)) || alpha(a.category,b.category) || alpha(a.name,b.name));
    return definitions.map((entry,index)=>Object.assign(entry,{ filterKey:`library-activity:${index}` }));
  }

  function buildData() {
    let repIndex=0;let holdIndex=0;let sportIndex=0;let otherIndex=0;let cardioIndex=0;
    const planEntities=plans().map((plan,index)=>{
      const planId=Number(plan?.planId || 0);
      const items=Array.isArray(plan?.planJson?.items)?plan.planJson.items:[];
      const exercises=items.map((item,itemIndex)=>{
        const definition=exerciseDefinition(item.exercise);
        const hold=isHold(item,definition);
        return {
          key:`exercise:${planId}:${itemIndex}`,filterKey:`exercise:${planId}:${itemIndex}`,parentKey:`plan:${planId}`,planId,itemIndex,type:'exercise',section:'calisthenics',
          badge:hold?`H${++holdIndex}`:`R${++repIndex}`,
          label:String(item.exercise || definition?.name || `Exercise ${itemIndex+1}`),item,definition
        };
      });
      return {
        key:`plan:${planId}`,filterKey:`entity:plan:${planId}`,type:'plan',section:'calisthenics',badge:`C${index+1}`,
        label:String(plan?.planJson?.name || `Calisthenics Plan ${index+1}`),value:plan,exercises
      };
    });
    const routine=routineState();
    const activities=(Array.isArray(routine.activities)?routine.activities:[]).map((activity)=>{
      const definition=activityDefinition(activity.activityId);
      const section=activitySection(activity,definition);
      return {
        key:`activity:${String(activity.id)}`,filterKey:`entity:activity:${String(activity.id)}`,type:'activity',section,
        badge:section==='sports'?`S${++sportIndex}`:section==='other'?`O${++otherIndex}`:`A${++cardioIndex}`,
        label:String(activity.name || definition?.name || 'Fitness activity'),value:activity,definition
      };
    });
    return { entities:planEntities.concat(activities),plans:planEntities,activities,exerciseLibrary:exerciseLibrary(),activityLibrary:activityLibrary() };
  }

  function exerciseCard(exercise) {
    const definition=exercise.definition;const item=exercise.item;
    const benefits=String(definition?.goodFor || 'Builds the strength, endurance and movement control specific to this exercise.');
    const technique=String(definition?.how || 'Use controlled technique and maintain the intended body position throughout the set.');
    return `<article class="fitness-summary-exercise-card bl-routine-summary-card" data-summary-exercise="${esc(exercise.filterKey)}"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${esc(exercise.badge)}</span><strong>${esc(exercise.label)}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${summaryRows([
      { label:'Category',value:exerciseCategory(item,definition) },{ label:'Exercise demand',value:exerciseDemand(item,definition) },{ label:'Muscle involvement',value:exerciseMuscles(definition) }
    ])}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p><strong>Benefits / purpose:</strong> ${esc(benefits)}</p><p><strong>Technique:</strong> ${esc(technique)}</p><p><strong>Progression:</strong> ${esc(progressionText(item,definition))}</p></section></div></article>`;
  }
  function planCard(entity) {
    const plan=entity.value;
    const items=Array.isArray(plan?.planJson?.items)?plan.planJson.items:[];
    const sessions=Array.isArray(plan?.sessions)?plan.sessions:[];
    const date=String(plan?.planJson?.startDate || plan?.planJson?.start_date || '').trim();
    return `<article class="fitness-exercise-summary-item routine-summary-item bl-routine-summary-card fitness-plan-summary-card" data-v4-entity="${esc(entity.key)}"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${esc(entity.badge)}</span><strong>${esc(entity.label)}</strong></div></div><div class="bl-fitness-plan-overview bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${summaryRows([
      { label:'Category',value:'Calisthenics' },{ label:'Days per week',value:planFrequencyText(plan) },{ label:'Workout date',value:date || 'Not specified' },
      { label:'Progress',value:`${sessions.filter((session)=>session?.status==='done').length}/${sessions.length} sessions completed` },{ label:'Exercises',value:`${items.length} saved exercise${items.length===1?'':'s'}` },
      { label:'Energy demand',value:'Predominantly anaerobic strength and muscular endurance, with aerobic demand increasing as session density rises.' },{ label:'Muscle focus',value:planMuscleSummary(items) }
    ])}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(planBenefits(items))}</p></section></div>${entity.exercises.length?`<div class="bl-fitness-summary-exercise-details">${entity.exercises.map(exerciseCard).join('')}</div>`:''}</article>`;
  }
  function activityCard(entity) {
    const activity=entity.value;const definition=entity.definition || activityDefinition(activity.activityId);const profile=activityProfile(definition,activity);
    const metrics=(definition?.metrics || []).map((metric)=>`${metric.label}${metric.unit?` (${metric.unit})`:''}`).join(', ');
    return `<article class="fitness-exercise-summary-item routine-summary-item bl-routine-summary-card" data-v4-entity="${esc(entity.key)}"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${esc(entity.badge)}</span><strong>${esc(entity.label)}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${summaryRows([
      { label:'Category',value:profile.category },{ label:'Time of day',value:timeLabel(activity.timeOfDay) },{ label:'Frequency',value:frequencyText(activity.frequency) },{ label:'Energy demand',value:profile.energyDemand },{ label:'Primary muscle involvement',value:profile.muscles },{ label:'Relevant session measures',value:metrics || 'Duration, quality and activity-specific session details.' }
    ])}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(profile.benefit)}</p>${activity.notes?`<p><strong>Your notes:</strong> ${esc(activity.notes)}</p>`:''}</section></div></article>`;
  }
  function entityCard(entity) { return entity.type==='plan'?planCard(entity):activityCard(entity); }
  function groupHeader(group,index) { return `<div class="fitness-summary-group-head bl-routine-summary-head-row"><div class="routine-summary-title"><span>G${index+1}</span><strong>${esc(group.title)}</strong></div></div>`; }
  function categorySection(title,key,entities) {
    if (!entities.length) return '';
    return `<section class="fitness-summary-group fitness-summary-category routine-summary-group bl-routine-group" data-summary-group="category:${esc(key)}"><h3>${esc(title)}</h3>${entities.map(entityCard).join('')}</section>`;
  }

  function ensureSingleFilter() {
    const panel=$('[data-fitness-routine-panel="summary"]');
    const target=$('#fitnessExerciseSummary',panel);
    if (!panel || !target) return null;
    const matches=$$('#fitnessSummaryGroupFilter',panel);
    let keep=matches[0] || null;
    if (!keep) {
      const label=document.createElement('label');
      label.className='bl-routine-summary-filter';label.dataset.summaryFilterOwner='fitness';
      label.innerHTML='<span>Show</span><select id="fitnessSummaryGroupFilter" aria-label="Filter Routine Summary"></select>';
      target.before(label);keep=label.querySelector('select');
    }
    const keepContainer=keep.closest('.bl-select') || keep.closest('label');
    matches.slice(1).forEach((select)=>{
      const wrapper=select.closest('.bl-select') || select.closest('label,.bl-routine-summary-filter');
      if (wrapper && wrapper!==keepContainer && !wrapper.contains(keep)) wrapper.remove(); else select.remove();
    });
    $$('.bl-routine-summary-filter',panel).forEach((wrapper)=>{ if (!wrapper.contains(keep)) wrapper.remove(); });
    const label=keep.closest('label');
    if (label) {
      label.classList.add('bl-routine-summary-filter');label.dataset.summaryFilterOwner='fitness';
      let caption=label.querySelector(':scope>span');if (!caption) { caption=document.createElement('span');label.prepend(caption); }caption.textContent='Show';
    }
    return keep;
  }
  function refreshThemedSelect(select) {
    try { select?.__bl_select__?.buildMenu?.();select?.__bl_select__?.sync?.();select?.__bl_select__?.syncStyle?.(); } catch (_error) {}
  }

  function persistedFilter() {
    try { return String(global.sessionStorage?.getItem(FILTER_STORAGE_KEY) || 'all'); }
    catch (_error) { return 'all'; }
  }
  function persistFilter(value) {
    const next=String(value || 'all');
    try { global.sessionStorage?.setItem(FILTER_STORAGE_KEY,next); } catch (_error) {}
  }
  function filterOption(value,filterKey,badge,label) {
    return `<option value="${esc(value)}" data-filter-key="${esc(filterKey)}">${badge?`${esc(badge)} · `:''}${esc(label)}</option>`;
  }
  function groupLibrary(items,keySelector) {
    const map=new Map();
    items.forEach((item)=>{ const key=keySelector(item);if (!map.has(key)) map.set(key,[]);map.get(key).push(item); });
    return Array.from(map.entries()).sort((a,b)=>alpha(a[0],b[0]));
  }
  function renderFilter(data,grouping) {
    const select=ensureSingleFilter();if (!select) return;
    const currentOption=select.selectedOptions?.[0];
    const current=String(currentOption?.dataset.filterKey || persistedFilter() || 'all');

    const groupOptions=grouping.groups.map((group,index)=>filterOption(`group:${group.id}`,`group:${group.id}`,`G${index+1}`,group.title)).join('');
    const calisthenics=[];
    data.plans.forEach((plan)=>{
      calisthenics.push(filterOption(`entity:${plan.key}`,`entity:${plan.key}`,plan.badge,plan.label));
      plan.exercises.slice().sort((a,b)=>alpha(a.label,b.label)).forEach((exercise)=>calisthenics.push(filterOption(`entity:${plan.key}`,exercise.filterKey,exercise.badge,`${exercise.label} — ${plan.badge}`)));
    });
    const myActivities=(section)=>data.activities.filter((entity)=>entity.section===section).slice().sort((a,b)=>alpha(a.label,b.label)).map((entity)=>filterOption(`entity:${entity.key}`,`entity:${entity.key}`,entity.badge,entity.label)).join('');

    const libraryExerciseGroups=groupLibrary(data.exerciseLibrary,(entry)=>entry.category).map(([category,entries])=>
      `<optgroup label="Exercise Library — ${esc(category)}">${entries.slice().sort((a,b)=>alpha(a.name,b.name)).map((entry)=>filterOption(entry.filterKey,entry.filterKey,entry.hold?'H':'R',entry.name)).join('')}</optgroup>`
    ).join('');
    const libraryActivityGroups=['cardio','sports','other'].map((section)=>
      groupLibrary(data.activityLibrary.filter((entry)=>entry.section===section),(entry)=>entry.category).map(([category,entries])=>
        `<optgroup label="Activity Library — ${esc(activitySectionTitle(section))} — ${esc(category)}">${entries.slice().sort((a,b)=>alpha(a.name,b.name)).map((entry)=>filterOption(entry.filterKey,entry.filterKey,section==='sports'?'S':section==='other'?'O':'A',entry.name)).join('')}</optgroup>`
      ).join('')
    ).join('');

    select.innerHTML=`<option value="all" data-filter-key="all">All My Routine</option>${groupOptions?`<optgroup label="My Routine — Routine Groups">${groupOptions}</optgroup>`:''}${calisthenics.length?`<optgroup label="My Routine — Calisthenics">${calisthenics.join('')}</optgroup>`:''}${myActivities('cardio')?`<optgroup label="My Routine — Cardio">${myActivities('cardio')}</optgroup>`:''}${myActivities('sports')?`<optgroup label="My Routine — Sports">${myActivities('sports')}</optgroup>`:''}${myActivities('other')?`<optgroup label="My Routine — Other Fitness Activities">${myActivities('other')}</optgroup>`:''}${libraryExerciseGroups}${libraryActivityGroups}`;
    const desired=Array.from(select.options || []).find((option)=>String(option.dataset.filterKey || option.value)===current) || select.options[0];
    if (desired) desired.selected=true;
    refreshThemedSelect(select);
  }

  function libraryExercisePreview(entry) {
    if (!entry) return '';
    const definition=entry.definition;const badge=entry.hold?'H':'R';
    const benefits=String(definition?.goodFor || 'Builds the strength, endurance and movement control specific to this exercise.');
    const technique=String(definition?.how || 'Use controlled technique and maintain the intended body position throughout the set.');
    return `<section class="fitness-summary-group fitness-summary-library-preview routine-summary-group bl-routine-group" data-summary-group="library"><h3>${esc(entry.category)}</h3><article class="fitness-summary-exercise-card bl-routine-summary-card"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${badge}</span><strong>${esc(entry.name)}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${summaryRows([{ label:'Source',value:'Exercise Library' },{ label:'Category',value:entry.category },{ label:'Exercise demand',value:exerciseDemand({},definition) },{ label:'Muscle involvement',value:exerciseMuscles(definition) }])}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p><strong>Benefits / purpose:</strong> ${esc(benefits)}</p><p><strong>Technique:</strong> ${esc(technique)}</p><p><strong>Progression:</strong> ${esc(progressionText({},definition))}</p></section></div></article></section>`;
  }
  function libraryActivityPreview(entry) {
    if (!entry) return '';
    const definition=entry.definition;const profile=activityProfile(definition,{ section:entry.section });
    const metrics=(definition?.metrics || []).map((metric)=>`${metric.label}${metric.unit?` (${metric.unit})`:''}`).join(', ');
    const badge=entry.section==='sports'?'S':entry.section==='other'?'O':'A';
    return `<section class="fitness-summary-group fitness-summary-library-preview routine-summary-group bl-routine-group" data-summary-group="library"><h3>${esc(activitySectionTitle(entry.section))} — ${esc(entry.category)}</h3><article class="fitness-exercise-summary-item routine-summary-item bl-routine-summary-card"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${badge}</span><strong>${esc(entry.name)}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${summaryRows([{ label:'Source',value:'Activity Library' },{ label:'Category',value:entry.category },{ label:'Energy demand',value:profile.energyDemand },{ label:'Primary muscle involvement',value:profile.muscles },{ label:'Relevant session measures',value:metrics || 'Duration, quality and activity-specific session details.' }])}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(profile.benefit)}</p></section></div></article></section>`;
  }
  function renderLibraryPreview(filter,data,target) {
    target.querySelector(':scope>.fitness-summary-library-preview')?.remove();
    let html='';
    if (filter.startsWith('library-exercise:')) html=libraryExercisePreview(data.exerciseLibrary.find((entry)=>entry.filterKey===filter));
    if (filter.startsWith('library-activity:')) html=libraryActivityPreview(data.activityLibrary.find((entry)=>entry.filterKey===filter));
    if (html) target.insertAdjacentHTML('beforeend',html);
    return Boolean(html);
  }
  function forceVisible(node,visible) {
    if (!node) return;node.hidden=!visible;
    if (visible) node.style.removeProperty('display');else node.style.setProperty('display','none','important');
  }
  function selectedFilter() {
    const select=$('#fitnessSummaryGroupFilter');const option=select?.selectedOptions?.[0];
    return String(option?.dataset.filterKey || select?.value || 'all');
  }
  function applyExerciseFilter(planCard,exerciseKey) {
    if (!planCard) return;
    const active=Boolean(exerciseKey);planCard.dataset.exerciseFilterActive=active?'true':'false';
    forceVisible(planCard.querySelector(':scope>.bl-fitness-plan-overview'),!active);
    $$(':scope>.bl-fitness-summary-exercise-details>[data-summary-exercise]',planCard).forEach((card)=>forceVisible(card,!active || String(card.dataset.summaryExercise || '')===exerciseKey));
  }
  function applyFilter(data=buildData()) {
    const select=$('#fitnessSummaryGroupFilter');const target=$('#fitnessExerciseSummary');if (!select || !target) return;
    const filter=selectedFilter();
    const libraryActive=renderLibraryPreview(filter,data,target);
    const isExercise=filter.startsWith('exercise:');
    let exerciseParent='';if (isExercise) { const parts=filter.split(':');exerciseParent=`plan:${parts[1] || ''}`; }
    $$('.fitness-summary-group:not(.fitness-summary-library-preview)',target).forEach((section)=>{
      const groupId=String(section.dataset.summaryGroup || '');
      let sectionVisible=!libraryActive && filter==='all';
      if (!libraryActive && filter.startsWith('group:')) sectionVisible=groupId===filter.slice(6);
      if (!libraryActive && filter.startsWith('entity:')) sectionVisible=Boolean(section.querySelector(`[data-v4-entity="${cssEscape(filter.slice(7))}"]`));
      if (!libraryActive && isExercise) sectionVisible=Boolean(section.querySelector(`[data-v4-entity="${cssEscape(exerciseParent)}"]`));
      forceVisible(section,sectionVisible);
      $$(':scope>[data-v4-entity]',section).forEach((card)=>{
        const entityKey=String(card.dataset.v4Entity || '');let cardVisible=sectionVisible;
        if (filter.startsWith('entity:')) cardVisible=entityKey===filter.slice(7);
        if (isExercise) cardVisible=entityKey===exerciseParent;
        forceVisible(card,cardVisible);
        if (card.classList.contains('fitness-plan-summary-card')) applyExerciseFilter(card,isExercise && cardVisible?filter:'');
      });
    });
  }

  function renderSummary() {
    if (rendering) return;
    const target=$('#fitnessExerciseSummary');if (!target) return;
    rendering=true;
    try {
      const data=buildData();const grouping=groupData();const assigned=new Set();const sections=[];
      grouping.groups.forEach((group,index)=>{
        const members=data.entities.filter((entity)=>grouping.assignments[entity.key]===group.id);if (!members.length) return;
        members.forEach((entity)=>assigned.add(entity.key));
        sections.push(`<section class="fitness-summary-group routine-summary-group bl-routine-group" data-summary-group="${esc(group.id)}">${groupHeader(group,index)}${members.map(entityCard).join('')}</section>`);
      });
      const unassigned=data.entities.filter((entity)=>!assigned.has(entity.key));
      sections.push(categorySection('Calisthenics','calisthenics',unassigned.filter((entity)=>entity.section==='calisthenics')));
      sections.push(categorySection('Cardio','cardio',unassigned.filter((entity)=>entity.section==='cardio')));
      sections.push(categorySection('Sports','sports',unassigned.filter((entity)=>entity.section==='sports')));
      sections.push(categorySection('Other Fitness Activities','other',unassigned.filter((entity)=>entity.section==='other')));
      target.innerHTML=sections.filter(Boolean).join('') || '<div class="fitness-routine-empty">No fitness routines or activities are currently available to summarise.</div>';
      renderFilter(data,grouping);applyFilter(data);
    } finally { rendering=false; }
  }
  function schedule() { if (!frame) frame=global.requestAnimationFrame(()=>{ frame=0;renderSummary(); }); }
  function bind() {
    document.addEventListener('change',(event)=>{
      if (event.target?.id!=='fitnessSummaryGroupFilter') return;
      persistFilter(selectedFilter());applyFilter();
    },true);
    document.addEventListener('click',(event)=>{
      if (event.target?.closest?.('[data-fitness-routine-view="summary"]')) global.requestAnimationFrame(schedule);
    },true);
    ['baseline:fitness-plans-updated','baseline:routine-settings-changed','baseline:fitness-routine-updated','baseline:fitness-workout-updated'].forEach((name)=>document.addEventListener(name,schedule));
  }
  function boot() { bind();schedule(); }

  global.BASELINE_fitnessRoutineSummary=Object.freeze({ render:renderSummary,applyFilter,selectedFilter });
  global.addEventListener('pagehide',()=>{ if (frame) global.cancelAnimationFrame(frame); },{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);

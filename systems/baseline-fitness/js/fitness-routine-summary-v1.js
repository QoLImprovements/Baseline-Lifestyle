/* Baseline Fitness — Routine Summary coherence owner v1.

   OWNERSHIP CONTRACT
   ------------------
   The structure adapter creates the Summary shell and rich Calisthenics content.
   This module owns Fitness Summary hierarchy and filtering after that render:
   - G1/G2… identify Routine Groups;
   - C1/C2… identify saved Calisthenics plans globally;
   - A1/A2… identify non-calisthenics activities globally;
   - E1/E2… identify exercises nested inside a Calisthenics plan;
   - group assignments are reapplied to Summary cards so grouped activities are
     never stranded under Individual Routine Steps;
   - the Show dropdown enforces visibility even against display:grid!important.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_SUMMARY_V1__) return;
  global.__BASELINE_FITNESS_ROUTINE_SUMMARY_V1__ = true;

  const document = global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app) !== 'fitness') return;
  const UI = global.BASELINE_RoutineSystem;
  if (!UI) return;

  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = UI.escapeHtml || ((value) => String(value == null ? '' : value));
  let frame = 0;
  let patching = false;
  let logObserver = null;

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
      .map((group) => ({ id:String(group?.id || '').trim(),title:String(group?.title || '').trim() }))
      .filter((group) => group.id && group.title && !seen.has(group.id) && seen.add(group.id));
    const valid=new Set(groups.map((group) => group.id));
    const assignments={};
    Object.entries(value.fitnessRoutineAssignments && typeof value.fitnessRoutineAssignments==='object'?value.fitnessRoutineAssignments:{}).forEach(([key,groupId]) => {
      if (valid.has(String(groupId))) assignments[String(key)]=String(groupId);
    });
    return { groups,assignments };
  }
  function activityDefinition(id) {
    return global.BASELINE_FITNESS_ACTIVITY_CATALOGUE?.ACTIVITY_BY_ID?.get?.(String(id || '')) || null;
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
  function activityProfile(definition,activity) {
    const profile=String(definition?.metricProfile || 'duration');
    const activityType=String(definition?.group || activity.section || 'Fitness activity');
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
    return { activityType,energyDemand,muscles,benefit };
  }
  function entityData() {
    const planEntities=plans().map((plan,index) => ({
      key:`plan:${Number(plan.planId)}`,
      type:'plan',
      value:plan,
      label:String(plan?.planJson?.name || `Calisthenics Plan ${index+1}`),
      badge:`C${index+1}`
    }));
    const routine=routineState();
    const activities=Array.isArray(routine.activities)?routine.activities:[];
    const activityEntities=activities.map((activity,index) => ({
      key:`activity:${String(activity.id)}`,
      type:'activity',
      value:activity,
      label:String(activity.name || 'Fitness activity'),
      badge:`A${index+1}`
    }));
    return planEntities.concat(activityEntities);
  }

  function summaryRows(rows) {
    return typeof UI.summaryRows==='function' ? UI.summaryRows(rows) : `<dl>${rows.map((row) => `<div><dt>${esc(row.label)}</dt><dd>${esc(row.value)}</dd></div>`).join('')}</dl>`;
  }
  function activityCard(entity) {
    const activity=entity.value;
    const definition=activityDefinition(activity.activityId);
    const profile=activityProfile(definition,activity);
    const metrics=(definition?.metrics || []).map((metric) => `${metric.label}${metric.unit?` (${metric.unit})`:''}`).join(', ');
    const article=document.createElement('article');
    article.className='fitness-exercise-summary-item routine-summary-item bl-routine-summary-card';
    article.dataset.v4Entity=entity.key;
    article.innerHTML=`<div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${esc(entity.badge)}</span><strong>${esc(entity.label)}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${summaryRows([
      { label:'Routine type',value:profile.activityType },
      { label:'Time of day',value:timeLabel(activity.timeOfDay) },
      { label:'Frequency',value:frequencyText(activity.frequency) },
      { label:'Energy demand',value:profile.energyDemand },
      { label:'Primary muscle involvement',value:profile.muscles },
      { label:'Relevant session measures',value:metrics || 'Duration, quality and activity-specific session details.' }
    ])}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(profile.benefit)}</p>${activity.notes?`<p><strong>Your notes:</strong> ${esc(activity.notes)}</p>`:''}</section></div>`;
    return article;
  }

  function setEntityBadge(card,entity) {
    const badge=card.querySelector(':scope>.bl-routine-summary-head-row .routine-summary-title>span');
    if (badge) {
      badge.textContent=entity.badge;
      badge.setAttribute('aria-label',`${entity.badge}, ${entity.type==='plan'?'Calisthenics plan':'fitness activity'}: ${entity.label}`);
    }
  }
  function clarifyPlanExercises(card) {
    const details=card.querySelector(':scope>.bl-fitness-summary-exercise-details');
    if (!details) return;
    Array.from(details.children).forEach((section,index) => {
      if (!section.matches?.('.bl-routine-summary-section')) return;
      const first=section.firstElementChild;
      if (first?.classList?.contains('fitness-summary-exercise-heading')) {
        const badge=first.querySelector('.routine-summary-title>span');
        if (badge) badge.textContent=`E${index+1}`;
        return;
      }
      const strong=section.querySelector(':scope>strong');
      if (!strong) return;
      const name=String(strong.textContent || '').replace(/^\s*\d+\.?\s*/,'').trim() || `Exercise ${index+1}`;
      const heading=document.createElement('div');
      heading.className='fitness-summary-exercise-heading bl-routine-summary-head-row';
      heading.innerHTML=`<div class="routine-summary-title"><span>E${index+1}</span><strong>${esc(name)}</strong></div>`;
      strong.replaceWith(heading);
    });
  }

  function groupHeader(group,index,count) {
    const head=document.createElement('div');
    head.className='fitness-summary-group-head bl-routine-summary-head-row';
    head.innerHTML=`<div class="routine-summary-title"><span>G${index+1}</span><strong>${esc(group.title)}</strong></div><small>Routine Group · ${count} Routine Step${count===1?'':'s'}</small>`;
    return head;
  }
  function individualHeader(count) {
    const head=document.createElement('div');
    head.className='fitness-summary-group-head bl-routine-summary-head-row';
    head.innerHTML=`<div><h3>Individual Routine Steps</h3></div><small>${count} step${count===1?'':'s'} not assigned to a Routine Group</small>`;
    return head;
  }

  function organiseSummary() {
    if (patching) return;
    const target=$('#fitnessExerciseSummary');
    if (!target) return;
    patching=true;
    try {
      const entities=entityData();
      const data=groupData();
      const cards=new Map();
      $$('[data-v4-entity]',target).forEach((card) => cards.set(String(card.dataset.v4Entity || ''),card));
      entities.forEach((entity) => {
        let card=cards.get(entity.key);
        if (!card && entity.type==='activity') {
          card=activityCard(entity);
          cards.set(entity.key,card);
        }
        if (!card) return;
        setEntityBadge(card,entity);
        if (entity.type==='plan') clarifyPlanExercises(card);
      });

      const fragment=document.createDocumentFragment();
      const assigned=new Set();
      data.groups.forEach((group,index) => {
        const members=entities.filter((entity) => data.assignments[entity.key]===group.id && cards.has(entity.key));
        if (!members.length) return;
        const section=document.createElement('section');
        section.className='fitness-summary-group routine-summary-group bl-routine-group';
        section.dataset.summaryGroup=group.id;
        section.appendChild(groupHeader(group,index,members.length));
        members.forEach((entity) => {
          assigned.add(entity.key);
          const card=cards.get(entity.key);
          card.dataset.summaryMembership=`group:${group.id}`;
          section.appendChild(card);
        });
        fragment.appendChild(section);
      });

      const individual=entities.filter((entity) => !assigned.has(entity.key) && cards.has(entity.key));
      if (individual.length) {
        const section=document.createElement('section');
        section.className='fitness-summary-group routine-summary-group bl-routine-group';
        section.dataset.summaryGroup='individual';
        section.appendChild(individualHeader(individual.length));
        individual.forEach((entity) => {
          const card=cards.get(entity.key);
          card.dataset.summaryMembership='individual';
          section.appendChild(card);
        });
        fragment.appendChild(section);
      }

      if (fragment.childNodes.length) target.replaceChildren(fragment);
      else target.innerHTML='<div class="fitness-routine-empty">No Routine Steps are currently available to summarise.</div>';
      renderFilter(entities,data);
      applyFilter();
    } finally { patching=false; }
  }

  function renderFilter(entities,data) {
    const select=$('#fitnessSummaryGroupFilter');
    if (!select) return;
    const old=String(select.value || 'all');
    const groupOptions=data.groups.map((group,index) => `<option value="group:${esc(group.id)}">G${index+1} · ${esc(group.title)}</option>`).join('');
    const planOptions=entities.filter((entity) => entity.type==='plan').map((entity) => `<option value="entity:${esc(entity.key)}">${esc(entity.badge)} · ${esc(entity.label)}</option>`).join('');
    const activityOptions=entities.filter((entity) => entity.type==='activity').map((entity) => `<option value="entity:${esc(entity.key)}">${esc(entity.badge)} · ${esc(entity.label)}</option>`).join('');
    const html=`<option value="all">All Routine Steps</option>${groupOptions?`<optgroup label="Routine Groups">${groupOptions}</optgroup>`:''}${planOptions?`<optgroup label="Calisthenics Plans">${planOptions}</optgroup>`:''}${activityOptions?`<optgroup label="Fitness Activities">${activityOptions}</optgroup>`:''}`;
    if (select.innerHTML!==html) select.innerHTML=html;
    select.value=Array.from(select.options).some((option) => option.value===old)?old:'all';
  }

  function forceVisible(node,visible) {
    if (!node) return;
    node.hidden=!visible;
    if (visible) node.style.removeProperty('display');
    else node.style.setProperty('display','none','important');
  }
  function applyFilter() {
    const select=$('#fitnessSummaryGroupFilter');
    const target=$('#fitnessExerciseSummary');
    if (!select || !target) return;
    const value=String(select.value || 'all');
    $$('.fitness-summary-group',target).forEach((section) => {
      const groupId=String(section.dataset.summaryGroup || '');
      let visible=value==='all';
      if (value.startsWith('group:')) visible=groupId===value.slice(6);
      if (value.startsWith('entity:')) visible=Boolean(section.querySelector(`[data-v4-entity="${global.CSS?.escape?global.CSS.escape(value.slice(7)):value.slice(7)}"]`));
      forceVisible(section,visible);
      $$('[data-v4-entity]',section).forEach((card) => {
        const cardVisible=value.startsWith('entity:') ? String(card.dataset.v4Entity || '')===value.slice(7) : visible;
        forceVisible(card,cardVisible);
      });
    });
  }

  function schedule() {
    if (!frame) frame=global.requestAnimationFrame(() => { frame=0;organiseSummary(); });
  }
  function bind() {
    document.addEventListener('click',(event) => {
      if (event.target?.closest?.('[data-fitness-routine-view="summary"]')) global.requestAnimationFrame(schedule);
    },true);
    document.addEventListener('change',(event) => {
      if (event.target?.id==='fitnessSummaryGroupFilter') applyFilter();
    },true);
    [
      'baseline:fitness-summary-rendered',
      'baseline:fitness-plans-updated',
      'baseline:routine-settings-changed',
      'baseline:fitness-routine-updated',
      'baseline:fitness-workout-updated'
    ].forEach((name) => document.addEventListener(name,schedule));
  }
  function observeLog() {
    const log=$('#fitnessRoutineLogItems');
    if (!log || typeof MutationObserver==='undefined') return;
    logObserver=new MutationObserver(() => {
      const panel=$('[data-fitness-routine-panel="summary"]');
      if (panel && !panel.hidden) schedule();
    });
    logObserver.observe(log,{ childList:true,subtree:true });
  }
  function boot() {
    bind();
    observeLog();
    schedule();
  }

  global.addEventListener('pagehide',() => {
    if (frame) global.cancelAnimationFrame(frame);
    logObserver?.disconnect();
  },{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window!=='undefined'?window:globalThis);

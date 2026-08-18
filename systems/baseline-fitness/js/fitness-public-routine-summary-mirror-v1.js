/* Baseline Fitness — Public Routine Summary canonical mirror v1.

   PUBLIC SUMMARY INVARIANT
   ------------------------
   Public Routines -> User's Routine Summary is a VIEW-ONLY mirror of the
   owner's canonical Fitness Routine Summary, not a condensed second renderer.

   This adapter deliberately uses BASELINE_fitnessRoutineSummary.render as the
   card factory. It temporarily supplies the viewed public routine to that
   canonical renderer inside an isolated scratch panel, then re-groups the
   canonical cards using the viewed user's public Routine Groups. This means the
   public summary inherits the owner's current comprehensive plan/activity/
   exercise detail structure, typography classes and Fitness theme without
   maintaining a second summary-card implementation.

   Never replace this with a reduced "Routine type / Frequency / Progress"
   summary. Public authority is read-only; visual/content structure is shared.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_PUBLIC_SUMMARY_MIRROR_V1__) return;
  global.__BASELINE_FITNESS_PUBLIC_SUMMARY_MIRROR_V1__=true;

  const document=global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app)!=='fitness') return;

  const PUBLIC_API='/systems/baseline-fitness/api/public_routine_v2.php';
  const $=(selector,root=document)=>root?.querySelector?.(selector)||null;
  const $$=(selector,root=document)=>Array.from(root?.querySelectorAll?.(selector)||[]);
  const esc=(value)=>String(value==null?'':value).replace(/[&<>"']/g,(character)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  const alpha=(a,b)=>String(a||'').localeCompare(String(b||''),'en-GB',{ sensitivity:'base' });

  const cache=new Map();
  const pending=new Map();
  let frame=0;
  let observer=null;
  let patching=false;

  function host() { return $('#fitnessPublicRoutineResult'); }
  function profileField() { return $('#fitnessPublicRoutineName'); }
  function selectedProfile() { return String(profileField()?.value || '').trim(); }
  function summaryActive(root=host()) {
    return Boolean(root?.querySelector?.('[data-public-view="summary"][aria-selected="true"]'));
  }
  function summarySection(root=host()) {
    if (!root) return null;
    return Array.from(root.querySelectorAll('.bl-public-routine-viewonly-panel>section.card, .bl-public-routine-viewonly-panel section.card'))
      .find((section)=>String(section.querySelector('h1,h2,h3')?.textContent || '').trim()==='Routine Summary') || null;
  }

  async function requestPublic(name) {
    const key=String(name || '').trim().toLocaleLowerCase('en-GB');
    if (!key) return null;
    if (cache.has(key)) return cache.get(key);
    if (pending.has(key)) return pending.get(key);
    const task=(async()=>{
      try {
        const response=await fetch(`${PUBLIC_API}?name=${encodeURIComponent(name)}`,{ credentials:'same-origin',headers:{ Accept:'application/json' } });
        const data=await response.json().catch(()=>null);
        const routine=data?.ok && data.publicRoutine && typeof data.publicRoutine==='object' ? data.publicRoutine : null;
        if (routine) cache.set(key,routine);
        return routine;
      } catch (_error) { return null; }
      finally { pending.delete(key); }
    })();
    pending.set(key,task);
    return task;
  }

  function normaliseSection(activity) {
    const section=String(activity?.section || '').trim().toLocaleLowerCase('en-GB');
    if (section==='sports' || section==='sport') return 'sports';
    if (section==='cardio') return 'cardio';
    return 'other';
  }

  function entitiesFor(routine,cardMap) {
    const plans=(Array.isArray(routine?.plans)?routine.plans:[]).map((plan,index)=>{
      const key=`plan:${Number(plan?.planId || 0)}`;
      const card=cardMap.get(key) || null;
      return { key,type:'plan',section:'calisthenics',label:String(plan?.planJson?.name || plan?.name || `Calisthenics Plan ${index+1}`),badge:String(card?.querySelector('.routine-summary-title>span')?.textContent || `C${index+1}`),card };
    });
    let cardio=0;let sports=0;let other=0;
    const activities=(Array.isArray(routine?.activities)?routine.activities:[]).map((activity)=>{
      const section=normaliseSection(activity);
      const key=`activity:${String(activity?.id || '')}`;
      const card=cardMap.get(key) || null;
      const fallbackBadge=section==='sports'?`S${++sports}`:section==='other'?`O${++other}`:`A${++cardio}`;
      return { key,type:'activity',section,label:String(activity?.name || 'Fitness activity'),badge:String(card?.querySelector('.routine-summary-title>span')?.textContent || fallbackBadge),card };
    });
    return plans.concat(activities).filter((entity)=>entity.key && entity.card);
  }

  function publicGrouping(routine) {
    const seen=new Set();
    const groups=(Array.isArray(routine?.groups)?routine.groups:[])
      .map((group)=>({ id:String(group?.id || '').trim(),title:String(group?.title || '').trim() }))
      .filter((group)=>group.id && group.title && !seen.has(group.id) && seen.add(group.id));
    const valid=new Set(groups.map((group)=>group.id));
    const assignments={};
    Object.entries(routine?.assignments && typeof routine.assignments==='object'?routine.assignments:{}).forEach(([key,groupId])=>{
      if (valid.has(String(groupId))) assignments[String(key)]=String(groupId);
    });
    return { groups,assignments };
  }

  function restoreNode(node,{ id='',panel='' }={}) {
    if (!node) return;
    if (id) node.id=id; else node.removeAttribute('id');
    if (panel) node.dataset.fitnessRoutinePanel=panel;
  }

  function canonicalCards(routine) {
    const canonical=global.BASELINE_fitnessRoutineSummary;
    if (typeof canonical?.render!=='function') return new Map();

    const ownerPanel=document.querySelector('[data-fitness-routine-panel="summary"]');
    const ownerTarget=document.getElementById('fitnessExerciseSummary');
    const ownerFilter=document.getElementById('fitnessSummaryGroupFilter');
    const ownerPanelValue=ownerPanel?.dataset.fitnessRoutinePanel || '';
    const ownerTargetId=ownerTarget?.id || '';
    const ownerFilterId=ownerFilter?.id || '';
    const oldRoutine=global.BASELINE_fitnessRoutine;
    const oldPlans=global.BASELINE_fitnessPlans;
    const scratch=document.createElement('div');
    const cardMap=new Map();

    try {
      if (ownerPanel) ownerPanel.dataset.fitnessRoutinePanel='summary-owner-suspended';
      if (ownerTarget) ownerTarget.id='fitnessExerciseSummaryOwnerSuspended';
      if (ownerFilter) ownerFilter.id='fitnessSummaryGroupFilterOwnerSuspended';

      scratch.dataset.fitnessRoutinePanel='summary';
      scratch.setAttribute('aria-hidden','true');
      scratch.style.cssText='position:absolute!important;left:-100000px!important;top:-100000px!important;width:1200px!important;visibility:hidden!important;pointer-events:none!important;';
      scratch.innerHTML='<label class="bl-routine-summary-filter"><span>Show</span><select id="fitnessSummaryGroupFilter"></select></label><div id="fitnessExerciseSummary"></div>';
      document.body.appendChild(scratch);

      global.BASELINE_fitnessRoutine={ getState:()=>({ activities:Array.isArray(routine?.activities)?routine.activities:[],logs:routine?.logs && typeof routine.logs==='object'?routine.logs:{} }) };
      global.BASELINE_fitnessPlans={ getPlans:()=>Array.isArray(routine?.plans)?routine.plans:[] };

      canonical.render();
      $$('#fitnessExerciseSummary [data-v4-entity]',scratch).forEach((card)=>{
        const key=String(card.dataset.v4Entity || '');
        if (!key || cardMap.has(key)) return;
        const clone=card.cloneNode(true);
        clone.hidden=false;
        clone.removeAttribute('hidden');
        clone.style.removeProperty('display');
        clone.querySelectorAll('[hidden]').forEach((node)=>node.removeAttribute('hidden'));
        clone.querySelectorAll('[style]').forEach((node)=>{
          if (node.style?.display==='none') node.style.removeProperty('display');
        });
        cardMap.set(key,clone);
      });
    } catch (_error) {
      cardMap.clear();
    } finally {
      try { global.BASELINE_fitnessRoutine=oldRoutine; } catch (_error) {}
      try { global.BASELINE_fitnessPlans=oldPlans; } catch (_error) {}
      scratch.remove();
      restoreNode(ownerTarget,{ id:ownerTargetId });
      restoreNode(ownerFilter,{ id:ownerFilterId });
      if (ownerPanel) ownerPanel.dataset.fitnessRoutinePanel=ownerPanelValue || 'summary';
    }
    return cardMap;
  }

  function cardHtml(entity) {
    if (!entity?.card) return '';
    const clone=entity.card.cloneNode(true);
    clone.hidden=false;
    clone.removeAttribute('hidden');
    clone.style.removeProperty('display');
    return clone.outerHTML;
  }
  function groupHeader(group,index) {
    return `<div class="fitness-summary-group-head bl-routine-summary-head-row"><div class="routine-summary-title"><span>G${index+1}</span><strong>${esc(group.title)}</strong></div></div>`;
  }
  function groupSection(group,index,members) {
    if (!members.length) return '';
    return `<section class="fitness-summary-group routine-summary-group bl-routine-group" data-summary-group="${esc(group.id)}">${groupHeader(group,index)}${members.map(cardHtml).join('')}</section>`;
  }
  function categorySection(title,key,members) {
    if (!members.length) return '';
    return `<section class="fitness-summary-group fitness-summary-category routine-summary-group bl-routine-group" data-summary-group="category:${esc(key)}"><h3>${esc(title)}</h3>${members.map(cardHtml).join('')}</section>`;
  }

  function sectionsHtml(routine,entities,filter) {
    const grouping=publicGrouping(routine);
    const assigned=new Set();
    const grouped=grouping.groups.map((group,index)=>{
      const members=entities.filter((entity)=>grouping.assignments[entity.key]===group.id);
      members.forEach((entity)=>assigned.add(entity.key));
      return { group,index,members };
    }).filter((entry)=>entry.members.length);
    const unassigned=entities.filter((entity)=>!assigned.has(entity.key));

    if (filter.startsWith('group:')) {
      const id=filter.slice(6);
      const entry=grouped.find((candidate)=>candidate.group.id===id);
      return entry?groupSection(entry.group,entry.index,entry.members):'';
    }
    if (filter.startsWith('entity:')) {
      const key=filter.slice(7);
      const entity=entities.find((candidate)=>candidate.key===key);
      if (!entity) return '';
      const groupId=String(grouping.assignments[key] || '');
      if (groupId) {
        const index=grouping.groups.findIndex((group)=>group.id===groupId);
        const group=index>=0?grouping.groups[index]:null;
        return group?groupSection(group,index,[entity]):'';
      }
      const title=entity.section==='calisthenics'?'Calisthenics':entity.section==='cardio'?'Cardio':entity.section==='sports'?'Sports':'Other Fitness Activities';
      return categorySection(title,entity.section,[entity]);
    }

    const output=grouped.map((entry)=>groupSection(entry.group,entry.index,entry.members));
    output.push(categorySection('Calisthenics','calisthenics',unassigned.filter((entity)=>entity.section==='calisthenics')));
    output.push(categorySection('Cardio','cardio',unassigned.filter((entity)=>entity.section==='cardio')));
    output.push(categorySection('Sports','sports',unassigned.filter((entity)=>entity.section==='sports')));
    output.push(categorySection('Other Fitness Activities','other',unassigned.filter((entity)=>entity.section==='other')));
    return output.filter(Boolean).join('');
  }

  function option(value,badge,label,selected) {
    return `<option value="${esc(value)}"${selected===value?' selected':''}>${badge?`${esc(badge)} · `:''}${esc(label)}</option>`;
  }
  function optionsHtml(routine,entities,selected) {
    const grouping=publicGrouping(routine);
    const groups=grouping.groups.map((group,index)=>option(`group:${group.id}`,`G${index+1}`,group.title,selected)).join('');
    const plans=entities.filter((entity)=>entity.section==='calisthenics').slice().sort((a,b)=>alpha(a.label,b.label)).map((entity)=>option(`entity:${entity.key}`,entity.badge,entity.label,selected)).join('');
    const activities=(section)=>entities.filter((entity)=>entity.section===section).slice().sort((a,b)=>alpha(a.label,b.label)).map((entity)=>option(`entity:${entity.key}`,entity.badge,entity.label,selected)).join('');
    return `${option('all','',"All My Routine",selected)}${groups?`<optgroup label="Groups">${groups}</optgroup>`:''}${plans?`<optgroup label="Calisthenic Plans">${plans}</optgroup>`:''}${activities('cardio')?`<optgroup label="Cardio">${activities('cardio')}</optgroup>`:''}${activities('sports')?`<optgroup label="Sports">${activities('sports')}</optgroup>`:''}${activities('other')?`<optgroup label="Other Fitness Activities">${activities('other')}</optgroup>`:''}`;
  }

  function mirrorHtml(routine,filter,cardMap) {
    const entities=entitiesFor(routine,cardMap);
    const content=sectionsHtml(routine,entities,filter) || '<div class="fitness-routine-empty">No fitness routines or activities are currently available to summarise.</div>';
    return `<section class="card fitness-routine-card bl-routine-card" data-fitness-public-summary-mirror="true" data-public-summary-filter-value="${esc(filter)}"><div class="section-head-actions"><div><h2>Routine Summary</h2></div></div><div class="divider"></div><label class="bl-routine-summary-filter" data-summary-filter-owner="fitness-public"><span>Show</span><select data-public-summary-filter aria-label="Filter User's Routine Summary">${optionsHtml(routine,entities,filter)}</select></label><div class="fitness-routine-summary-list bl-routine-summary-list" aria-live="polite">${content}</div></section>`;
  }

  async function patch() {
    frame=0;
    if (patching) return;
    const root=host();
    if (!root || !summaryActive(root)) return;
    const section=summarySection(root);
    if (!section) return;
    const profile=selectedProfile() || String(root.querySelector('.bl-public-routine-viewonly>.bl-routine-entry-head h2')?.textContent || '').replace(/['’]s Routine\s*$/i,'').trim();
    if (!profile) return;
    const existingFilter=String(section.querySelector('[data-public-summary-filter]')?.value || section.dataset.publicSummaryFilterValue || 'all');
    const signature=`${profile.toLocaleLowerCase('en-GB')}::${existingFilter}`;
    if (section.dataset.fitnessPublicSummaryMirror==='true' && section.dataset.publicMirrorSignature===signature) return;

    patching=true;
    try {
      const routine=await requestPublic(profile);
      if (!routine || !summaryActive(root)) return;
      const liveSection=summarySection(root);
      if (!liveSection) return;
      const filter=String(liveSection.querySelector('[data-public-summary-filter]')?.value || existingFilter || 'all');
      const cards=canonicalCards(routine);
      if (!cards.size) return;
      const replacement=document.createElement('div');
      replacement.innerHTML=mirrorHtml(routine,filter,cards);
      const next=replacement.firstElementChild;
      if (!next) return;
      next.dataset.publicMirrorSignature=`${profile.toLocaleLowerCase('en-GB')}::${filter}`;
      liveSection.replaceWith(next);
    } finally {
      patching=false;
    }
  }

  function schedule() {
    if (!frame) frame=global.requestAnimationFrame(patch);
  }
  function relevantMutation(mutation) {
    const root=host();
    if (!root) return false;
    const target=mutation.target?.nodeType===1?mutation.target:mutation.target?.parentElement;
    return Boolean(target && (target===root || root.contains(target)));
  }
  function bind() {
    document.addEventListener('click',(event)=>{
      if (event.target?.closest?.('[data-public-view="summary"],#fitnessViewPublicRoutine,[data-public-summary-target]')) global.setTimeout(schedule,0);
    },true);
    document.addEventListener('change',(event)=>{
      if (event.target?.matches?.('#fitnessPublicRoutineName,[data-public-summary-filter]')) global.setTimeout(schedule,0);
    },true);
    ['baseline:fitness-routine-updated','baseline:fitness-plans-updated','baseline:routine-settings-changed'].forEach((name)=>document.addEventListener(name,()=>{ cache.clear();schedule(); }));

    const root=host();
    if (root && typeof MutationObserver!=='undefined') {
      observer=new MutationObserver((mutations)=>{ if (!patching && mutations.some(relevantMutation)) schedule(); });
      observer.observe(root,{ childList:true,subtree:true,attributes:true,attributeFilter:['aria-selected'] });
    }
    schedule();
  }

  global.addEventListener('pagehide',()=>observer?.disconnect(),{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',bind,{ once:true });
  else bind();
})(typeof window!=='undefined'?window:globalThis);

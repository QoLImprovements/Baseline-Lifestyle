/* Baseline Fitness — canonical Routine Activity and completion-marker codes v1.

   A Routine Group is represented by its G-code only when every assigned member
   has a completion on the date. Until then, completed members keep their own
   category codes so an unfinished Calisthenics plan cannot make the group look
   complete on the Routine Log calendar.
*/
(function (global) {
  'use strict';
  if (global.__BASELINE_FITNESS_ROUTINE_CODES_V1__) return;
  global.__BASELINE_FITNESS_ROUTINE_CODES_V1__=true;

  const PREFIX=Object.freeze({ calisthenics:'CL',cardio:'C',other:'O',sports:'S' });
  const SECTION_ORDER=Object.freeze(['calisthenics','cardio','other','sports']);

  function cleanSection(value) {
    const section=String(value || 'other');
    return SECTION_ORDER.includes(section)?section:'other';
  }

  function buildEntities(plansValue,activitiesValue) {
    const plans=Array.isArray(plansValue)?plansValue:[];
    const activities=Array.isArray(activitiesValue)?activitiesValue:[];
    const planEntities=plans.map((plan,index) => ({
      key:`plan:${Number(plan?.planId)}`,
      label:String(plan?.planJson?.name || plan?.name || `Calisthenics Plan ${index+1}`),
      section:'calisthenics',source:plan
    })).filter((entity) => entity.key!=='plan:0');
    const activityEntities=activities.map((activity) => ({
      key:`activity:${String(activity?.id || '')}`,
      label:String(activity?.name || 'Fitness activity'),
      section:cleanSection(activity?.section),source:activity
    })).filter((entity) => entity.key!=='activity:');
    return planEntities.concat(activityEntities);
  }

  function entityCode(keyValue,entitiesValue) {
    const key=String(keyValue || '');
    const entities=Array.isArray(entitiesValue)?entitiesValue:[];
    const entity=entities.find((candidate) => candidate.key===key);
    if (!entity) return '';
    const section=cleanSection(entity.section);
    const index=entities.filter((candidate) => cleanSection(candidate.section)===section).findIndex((candidate) => candidate.key===key);
    return index<0?'':`${PREFIX[section]}${index+1}`;
  }

  function groupCode(groupIdValue,groupsValue) {
    const groupId=String(groupIdValue || '');
    const groups=Array.isArray(groupsValue)?groupsValue:[];
    const index=groups.findIndex((group) => String(group?.id || '')===groupId);
    return index<0?'':`G${index+1}`;
  }

  function completionMarkers(optionsValue) {
    const options=optionsValue && typeof optionsValue==='object'?optionsValue:{};
    const entities=Array.isArray(options.entities)?options.entities:[];
    const groups=Array.isArray(options.groups)?options.groups:[];
    const assignments=options.assignments && typeof options.assignments==='object'?options.assignments:{};
    const completed=new Set((Array.isArray(options.completedKeys)?options.completedKeys:[]).map(String));
    const captions=options.captions && typeof options.captions==='object'?options.captions:{};
    const emittedGroups=new Set();
    const markers=[];

    entities.filter((entity) => completed.has(entity.key)).forEach((entity) => {
      const groupId=String(assignments[entity.key] || '');
      const members=groupId?entities.filter((candidate) => String(assignments[candidate.key] || '')===groupId):[];
      const wholeGroupComplete=members.length>1 && members.every((member) => completed.has(member.key));
      if (wholeGroupComplete) {
        if (emittedGroups.has(groupId)) return;
        emittedGroups.add(groupId);
        const group=groups.find((candidate) => String(candidate?.id || '')===groupId);
        const title=String(group?.title || 'Routine Group');
        const memberLines=members.map((member) => String(captions[member.key] || member.label || '')).filter(Boolean);
        markers.push({
          code:groupCode(groupId,groups),
          label:title,
          caption:[title].concat(memberLines).join('\n'),
          target:`group:${groupId}`
        });
        return;
      }
      markers.push({
        code:entityCode(entity.key,entities),
        label:entity.label,
        caption:String(captions[entity.key] || entity.label || 'Fitness activity'),
        target:`entity:${entity.key}`
      });
    });
    return markers.filter((marker) => marker.code);
  }

  function compactDuration(minutesValue) {
    const minutes=Math.max(0,Math.round(Number(minutesValue) || 0));
    if (!minutes) return '';
    const hours=Math.floor(minutes/60);
    const remainder=minutes%60;
    if (!hours) return `${remainder}m`;
    return `${hours}hr${hours===1?'':'s'}${remainder?` ${remainder}m`:''}`;
  }

  global.BASELINE_fitnessRoutineCodes=Object.freeze({ PREFIX,SECTION_ORDER,buildEntities,entityCode,groupCode,completionMarkers,compactDuration });
  if (typeof module!=='undefined' && module.exports) module.exports=global.BASELINE_fitnessRoutineCodes;
})(typeof window!=='undefined'?window:globalThis);

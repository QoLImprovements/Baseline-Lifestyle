/* Baseline Fitness — read-only unified workout records v1.
   Sources remain authoritative and independent: Calisthenics plans, Fitness Routine
   logs and linked Badminton Session matches. This adapter does not write or migrate data. */
(function(global){
  'use strict';
  if(global.__BASELINE_FITNESS_WORKOUT_RECORDS_V1__)return;
  global.__BASELINE_FITNESS_WORKOUT_RECORDS_V1__=true;
  const sections=new Set(['calisthenics','cardio','other','sports']);
  const iso=value=>{
    const raw=String(value??'');
    if(/^\d{4}-\d{2}-\d{2}/.test(raw))return raw.slice(0,10);
    if((typeof value==='number'||/^\d{10,13}$/.test(raw))&&Number.isFinite(Number(value))){
      const n=Number(value),date=new Date(n>9999999999?n:n*1000);
      return Number.isNaN(date.getTime())?'':date.toLocaleDateString('sv-SE');
    }
    return '';
  };
  function cleanStatus(raw){
    return raw?.completed===true||raw?.status==='done'?'done':['partial','skipped','rescheduled'].includes(raw?.status)?raw.status:'planned';
  }
  function getAll(){
    const rows=[];
    const plans=global.BASELINE_fitnessPlans?.getPlans?.()||[];
    plans.forEach((plan,index)=>{
      const planId=Math.max(0,Number(plan.planId)||0);
      const title=String(plan.planJson?.name||'Calisthenics Plan '+(index+1));
      (Array.isArray(plan.sessions)?plan.sessions:[]).forEach((session)=>{
        const n=Math.max(0,Number(session.sessionIndex??session.session_index)||0);
        if(!n)return;
        const status=cleanStatus(session);
        const date=iso(status==='done'?(session.completed_at??session.completedAt):(session.scheduled_date??session.scheduledDate));
        if(!date)return;
        rows.push({id:'calisthenics:'+planId+':'+n,source:'calisthenics',section:'calisthenics',name:title,planId,sessionIndex:n,date,status,durationMinutes:null});
      });
    });
    const routine=global.BASELINE_fitnessRoutine?.getState?.()||{activities:[],logs:{}};
    const activities=new Map((routine.activities||[]).map(a=>[String(a.id),a]));
    Object.entries(routine.logs||{}).forEach(([date,entries])=>{
      if(!/^\d{4}-\d{2}-\d{2}$/.test(date))return;
      Object.entries(entries||{}).forEach(([activityId,entry])=>{
        if(!entry||typeof entry!=='object')return;
        const item=activities.get(String(activityId));
        if(!item)return;
        const section=sections.has(item.section)?item.section:'other';
        const minutes=Number(entry.metrics?.durationMinutes);
        rows.push({id:'activity:'+activityId+':'+date,source:'fitness-routine',section,name:String(item.name||'Activity'),activityId,date,status:cleanStatus(entry),durationMinutes:Number.isFinite(minutes)&&minutes>0?minutes:null});
      });
    });
    (global.BASELINE_FITNESS_LINKED_BADMINTON?.getAll?.()||[]).forEach(entry=>{
      const date=iso(entry.date);if(!date)return;
      rows.push({id:'linked-badminton:'+date,source:'baseline-badminton-session',section:'sports',name:'Badminton',date,status:'done',durationMinutes:null,games:Math.max(0,Number(entry.games)||0)});
    });
    rows.sort((a,b)=>a.date.localeCompare(b.date)||a.id.localeCompare(b.id));
    return rows;
  }
  function onDate(date){const key=iso(date);return getAll().filter(record=>record.date===key);}
  function completedCount(date){return onDate(date).filter(record=>record.status==='done').length;}
  function completedBetween(start,end){
    const from=iso(start),through=iso(end);
    return getAll().filter(record=>record.status==='done'&&record.date>=from&&record.date<=through);
  }
  const api=Object.freeze({getAll,onDate,completedCount,completedBetween,cleanStatus,iso});
  global.BASELINE_FITNESS_WORKOUT_RECORDS=api;
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);

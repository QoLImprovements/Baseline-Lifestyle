/* Read-only link from the Badminton Session system to Fitness.
   Badminton remains authoritative; no club match or player data is copied to Fitness saved data.
   Only confirmed matches belonging to the signed-in player's linked identity are included. */
(function(global){
  'use strict';
  if(!global.document||global.__BASELINE_FITNESS_LINKED_BADMINTON__)return;
  global.__BASELINE_FITNESS_LINKED_BADMINTON__=true;
  let records=[],loadToken=0,owner='';
  const normalize=value=>String(value||'').trim().toLocaleLowerCase('en-GB');
  const emit=()=>{try{document.dispatchEvent(new CustomEvent('baseline:fitness-linked-badminton-updated'));}catch(_error){}};
  function manualRecorded(date){
    const routine=global.BASELINE_fitnessRoutine?.getState?.()||{};
    const names=new Set((routine.activities||[]).filter(item=>/badminton/i.test(String(item.activityId||'')+' '+String(item.name||''))).map(item=>String(item.id)));
    const entries=routine.logs?.[date]||{};
    return Array.from(names).some(id=>entries[id]?.completed);
  }
  function getForDate(date){
    if(manualRecorded(date))return null;
    const row=records.find(item=>item.date===date);
    return row?{...row}:null;
  }
  function getAll(){return records.filter(item=>!manualRecorded(item.date)).map(item=>({...item}));}
  async function load(snapshot){
    const token=++loadToken;
    const name=normalize(snapshot?.name||snapshot?.user?.name);
    owner=name;
    records=[];
    emit();
    if(!snapshot?.authed)return;
    try{
      const response=await fetch('/systems/baseline-badminton-session/api/badminton_session.php',{credentials:'same-origin',headers:{Accept:'application/json'}});
      if(!response.ok)return;
      const payload=await response.json();
      if(token!==loadToken||owner!==name||!payload?.ok)return;
      const state=payload.state||{};
      const user=snapshot.user||{};
      const id=String(user.id||snapshot.userId||'').trim();
      const email=normalize(user.email||snapshot.email);
      const aliases=new Set([name,normalize(user.username),normalize(user.loginUsername)].filter(Boolean));
      const ids=new Set((Array.isArray(state.players)?state.players:[]).filter(player=>{
        const linkedIds=[player.userId,player.uid,player.linkedUserId,player.loginUserId].map(x=>String(x||'').trim());
        const linkedNames=[player.loginUsername,player.loginName,player.linkedLogin,player.linkedLoginName,player.username,player.login].map(normalize);
        const linkedEmails=[player.loginEmail,player.linkedEmail,player.email].map(normalize);
        return (id&&linkedIds.includes(id))||linkedNames.some(x=>x&&aliases.has(x))||(email&&linkedEmails.includes(email));
      }).map(player=>String(player.id||player.playerId||'').trim()).filter(Boolean));
      if(!ids.size)return;
      const grouped=new Map();
      (Array.isArray(state.matches)?state.matches:[]).forEach(match=>{
        const team1=Array.isArray(match.side1PlayerIds)?match.side1PlayerIds:[];
        const team2=Array.isArray(match.side2PlayerIds)?match.side2PlayerIds:[];
        if(!team1.concat(team2).some(playerId=>ids.has(String(playerId))))return;
        const timestamp=Date.parse(String(match.createdAt||''));
        const date=Number.isFinite(timestamp)?new Date(timestamp).toLocaleDateString('sv-SE'):String(match.createdAt||'').slice(0,10);
        if(!/^\d{4}-\d{2}-\d{2}$/.test(date))return;
        const current=grouped.get(date)||{date,source:'baseline-badminton-session',games:0};
        current.games+=1;grouped.set(date,current);
      });
      records=Array.from(grouped.values()).sort((a,b)=>a.date.localeCompare(b.date));
      emit();
    }catch(_error){if(token===loadToken){records=[];emit();}}
  }
  global.BASELINE_FITNESS_LINKED_BADMINTON=Object.freeze({getForDate,getAll,reload:()=>load(global.BASELINE_auth?.get?.())});
  function boot(){
    const auth=global.BASELINE_auth;
    load(auth?.get?.());
    auth?.onChange?.(load);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})(typeof window!=='undefined'?window:globalThis);

/* Baseline Fitness — saved-plan deletion continuity.

   MULTIPLE-PLAN INVARIANT
   -----------------------
   Deleting ONE saved Calisthenics plan is a plan-selection transition when
   other saved plans still exist. It must NOT put the user into Plan Generator.

   Behaviour:
   - if another saved plan remains, select it and stay in the Calisthenics card
     on the single Routine Plan page;
   - prefer the plan that followed the deleted plan, otherwise the previous one;
   - only enter Plan Generator when the deleted plan was the LAST saved plan.

   This listener runs in capture phase so the legacy single-plan delete handler
   in baseline-fitness-app.js cannot clear current state and briefly/incorrectly
   reveal the generator before the multiple-plan controller chooses a survivor.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_PLAN_DELETE_CONTINUITY_V1__) return;
  global.__BASELINE_FITNESS_PLAN_DELETE_CONTINUITY_V1__=true;

  const document=global.document;
  const API='/systems/baseline-fitness/api/delete_plan.php';
  let deleting=false;

  const byId=(plans,id) => (plans || []).find((plan) => Number(plan?.planId)===Number(id)) || null;
  const planId=(plan) => Math.max(0,Number(plan?.planId) || 0);

  function chooseSurvivor(before,after,deletedId) {
    const survivingIds=new Set((after || []).map(planId).filter(Boolean));
    const deletedIndex=(before || []).findIndex((plan) => planId(plan)===Number(deletedId));

    if (deletedIndex>=0) {
      for (let index=deletedIndex+1;index<before.length;index+=1) {
        const id=planId(before[index]);
        if (id && survivingIds.has(id)) return id;
      }
      for (let index=deletedIndex-1;index>=0;index-=1) {
        const id=planId(before[index]);
        if (id && survivingIds.has(id)) return id;
      }
    }

    const controller=global.BASELINE_fitnessPlans;
    const selected=Math.max(0,Number(controller?.getSelectedPlanId?.()) || 0);
    if (selected && survivingIds.has(selected)) return selected;
    return planId(after?.[0]);
  }

  function setStatus(message) {
    const node=document.getElementById('deletePlanStatus');
    if (node) node.textContent=message || '';
  }

  function closeModal() {
    const modal=document.getElementById('deletePlanModal');
    if (modal) modal.hidden=true;
    const input=document.getElementById('deletePlanConfirmInput');
    if (input) input.value='';
  }

  async function deleteSelectedPlan(button) {
    if (deleting) return;
    const controller=global.BASELINE_fitnessPlans;
    const deletedId=Math.max(0,Number(controller?.getSelectedPlanId?.()) || 0);
    if (!controller || !deletedId) {
      setStatus('Could not identify the selected plan.');
      return;
    }

    const before=typeof controller.getPlans==='function' ? controller.getPlans() : [];
    deleting=true;
    button.disabled=true;
    document.documentElement.setAttribute('data-fitness-plan-deleting','true');
    setStatus('Deleting plan…');

    try {
      const response=await global.fetch(API,{
        method:'POST',
        credentials:'same-origin',
        headers:{ Accept:'application/json','Content-Type':'application/json' },
        body:JSON.stringify({ planId:deletedId })
      });
      let data={};
      try { data=await response.json(); } catch (_error) {}
      if (!response.ok || data?.ok===false) throw new Error(String(data?.error || `http_${response.status}`));

      const after=typeof controller.refresh==='function' ? await controller.refresh() : [];
      const survivors=Array.isArray(after) ? after.filter((plan) => planId(plan)!==deletedId) : [];
      closeModal();

      if (survivors.length) {
        const survivorId=chooseSurvivor(before,survivors,deletedId);
        if (survivorId && typeof controller.openPlan==='function') {
          setStatus('');
          controller.openPlan(survivorId);
          return;
        }
      }

      if (typeof controller.createPlan==='function') {
        setStatus('');
        controller.createPlan();
        return;
      }

      global.location.assign('/baseline-fitness/my-routine/plan');
    } catch (error) {
      setStatus('Could not delete the plan.');
      try { console.error('Calisthenics plan deletion failed.',error); } catch (_error) {}
      button.disabled=false;
    } finally {
      deleting=false;
      document.documentElement.removeAttribute('data-fitness-plan-deleting');
    }
  }

  document.addEventListener('click',(event) => {
    const button=event.target?.closest?.('#confirmDeletePlanBtn');
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    deleteSelectedPlan(button);
  },true);
})(typeof window!=='undefined'?window:globalThis);
from pathlib import Path
import re


def replace_once(path: Path, old: str, new: str, label: str) -> None:
    text = path.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{label}: expected one match, found {count}")
    path.write_text(text.replace(old, new, 1))


def sub_once(path: Path, pattern: str, replacement: str, label: str, flags: int = 0) -> None:
    text = path.read_text()
    new, count = re.subn(pattern, replacement, text, count=1, flags=flags)
    if count != 1:
        raise SystemExit(f"{label}: expected one regex match, found {count}")
    path.write_text(new)


# ---------------------------------------------------------------------------
# Fitness: the canonical top-level view key belongs only to the structure owner.
# ---------------------------------------------------------------------------
fitness_html = Path('systems/baseline-fitness/baseline-fitness.html')
replace_once(
    fitness_html,
    "sessionStorage.setItem('__bl_fitness_routine_view_v2__',v==='plan'?(plan||'calisthenics'):(v==='public'?'summary':v));",
    "sessionStorage.setItem('__bl_fitness_routine_view_v2__',v);",
    'Fitness head top-level view state',
)

fitness_loader = Path('systems/baseline-fitness/js/fitness-routine-workspace.js')
old_seed = '''  function seedBaseWorkspaceView() {
    if (!requested) return;
    try {
      /* The base workspace knows Log and Plan activity panels but not Public.
         For Summary/Public, seed "summary" so it synchronously hides its Log
         panel instead of painting a wrong page while structure is loading. */
      const baseView=requested.view==='plan'?requested.plan:(requested.view==='public'?'summary':requested.view);
      global.sessionStorage?.setItem(ROUTINE_VIEW_KEY,baseView);
      global.sessionStorage?.setItem(PLAN_VIEW_KEY,requested.plan || 'calisthenics');
    } catch (_error) {}
  }'''
new_seed = '''  function seedBaseWorkspaceView() {
    if (!requested) return;
    /* The final structure owns ROUTINE_VIEW_KEY. The base workspace receives
       its temporary renderer hint through the initial-route data attributes,
       never by overwriting the canonical top-level session state. */
    document.documentElement.setAttribute('data-initial-routine-view',requested.view || 'log');
    if (requested.view==='plan') document.documentElement.setAttribute('data-initial-routine-plan',requested.plan || 'calisthenics');
    try { global.sessionStorage?.setItem(PLAN_VIEW_KEY,requested.plan || 'calisthenics'); } catch (_error) {}
  }'''
replace_once(fitness_loader, old_seed, new_seed, 'Fitness loader canonical state ownership')

fitness_workspace = Path('systems/baseline-fitness/js/fitness-routine-workspace-v2.js')
replace_once(
    fitness_workspace,
    "  const VIEW_KEY = '__bl_fitness_routine_view_v2__';\n",
    "  const PLAN_VIEW_KEY = '__bl_fitness_plan_view_v4__';\n",
    'Fitness base workspace key',
)
old_initial = '''    const remembered = global.sessionStorage?.getItem(VIEW_KEY);
    activateView(VIEWS.includes(remembered) ? remembered : 'log');'''
new_initial = '''    const initialTop=String(document.documentElement.dataset.initialRoutineView || '');
    const initialPlan=String(document.documentElement.dataset.initialRoutinePlan || global.sessionStorage?.getItem(PLAN_VIEW_KEY) || 'calisthenics');
    const initialView=initialTop==='plan' && VIEWS.includes(initialPlan)
      ? initialPlan
      : (initialTop==='summary' || initialTop==='public' ? 'summary' : 'log');
    activateView(initialView,false);'''
replace_once(fitness_workspace, old_initial, new_initial, 'Fitness base initial renderer hint')

old_remember = '''    if (remember) {
      try { global.sessionStorage?.setItem(VIEW_KEY, next); } catch (_error) {}
    }
'''
replace_once(fitness_workspace, old_remember, '', 'Fitness base stops persisting canonical view')

old_tab = '''      const tab = event.target.closest('[data-fitness-routine-view],[data-open-fitness-view]');
      if (tab) {
        activateView(tab.dataset.fitnessRoutineView || tab.dataset.openFitnessView, true);
        return;
      }'''
new_tab = '''      const tab = event.target.closest('[data-fitness-routine-view],[data-open-fitness-view]');
      if (tab) {
        const next=String(tab.dataset.fitnessRoutineView || tab.dataset.openFitnessView || '');
        if (['calisthenics','cardio','other','sports'].includes(next) && global.BASELINE_fitnessRoutineStructure) {
          event.preventDefault();
          global.BASELINE_fitnessRoutineStructure.activateTopView('plan',true);
          global.BASELINE_fitnessRoutineStructure.activatePlanView(next,true);
        } else {
          activateView(next,false);
        }
        return;
      }'''
replace_once(fitness_workspace, old_tab, new_tab, 'Fitness base delegates Plan navigation')

# ---------------------------------------------------------------------------
# Skincare: checkbox completion updates the live row in place. Full grouped Log
# replacement is reserved for structural changes, not completion toggles.
# ---------------------------------------------------------------------------
skin = Path('systems/baseline-natural-skincare/js/skincare-routine.js')
old_render_log = '''  function renderLog() {
    state.selectedDate=MODEL.configureLogDateInput?.($('#routineLogDate'),state.selectedDate) || state.selectedDate;const target=$('#routineLogItems');const progress=$('#routineLogProgress');if (!target) return;
    const due=state.routine.filter((item)=>MODEL.dueStatus(item,state.selectedDate,state.logs).due);const entries=state.logs[state.selectedDate] || {};const completed=due.filter((item)=>entries[item.id]?.completed).length;if (progress) progress.textContent=`${completed}/${due.length} completed`;
    target.innerHTML=due.length?due.map((item)=>logItem(item,state.selectedDate)).join(''):'<div class="routine-empty">There is no routine to log yet. Create one in <button type="button" class="routine-text-button" data-open-routine-plan>Routine Plan</button>.</div>';emit('log');
  }'''
new_render_log = '''  function refreshLogProgress() {
    const progress=$('#routineLogProgress');if (!progress) return;
    const due=state.routine.filter((item)=>MODEL.dueStatus(item,state.selectedDate,state.logs).due);
    const entries=state.logs[state.selectedDate] || {};
    const completed=due.filter((item)=>entries[item.id]?.completed).length;
    progress.textContent=`${completed}/${due.length} completed`;
  }
  function renderLog() {
    state.selectedDate=MODEL.configureLogDateInput?.($('#routineLogDate'),state.selectedDate) || state.selectedDate;const target=$('#routineLogItems');if (!target) return;
    const due=state.routine.filter((item)=>MODEL.dueStatus(item,state.selectedDate,state.logs).due);
    refreshLogProgress();
    target.innerHTML=due.length?due.map((item)=>logItem(item,state.selectedDate)).join(''):'<div class="routine-empty">There is no routine to log yet. Create one in <button type="button" class="routine-text-button" data-open-routine-plan>Routine Plan</button>.</div>';emit('log');
  }
  function updateCompletionInPlace(control) {
    const itemId=String(control?.dataset.logComplete || '');
    const date=String(control?.dataset.logDate || state.selectedDate);
    if (!itemId) return;
    updateLog(itemId,date,{ completed:Boolean(control.checked) });
    control.closest('.routine-log-item')?.classList.toggle('complete',Boolean(control.checked));
    refreshLogProgress();
    emit('log');
  }'''
replace_once(skin, old_render_log, new_render_log, 'Skincare in-place Log completion')
replace_once(
    skin,
    "      if (event.target.matches('[data-log-complete]')) { updateLog(event.target.dataset.logComplete,event.target.dataset.logDate,{ completed:event.target.checked });renderLog();renderCalendar(); }",
    "      if (event.target.matches('[data-log-complete]')) { updateCompletionInPlace(event.target); }",
    'Skincare checkbox change handler',
)

skin_groups = Path('systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js')
old_change = "      if (event.target.closest('#routineItems [data-field],#routineLogItems [data-log-complete],#routineLogItems [data-log-note]')) global.setTimeout(schedulePatch,0);"
new_change = '''      if (event.target.closest('#routineLogItems [data-log-complete]')) {
        /* Completion is a data/value change, not a structural Log change. Keep
           the clicked checkbox node stable and refresh only calendar output. */
        global.setTimeout(renderCalendar,0);
        return;
      }
      if (event.target.closest('#routineItems [data-field],#routineLogItems [data-log-note]')) global.setTimeout(schedulePatch,0);'''
replace_once(skin_groups, old_change, new_change, 'Skincare grouped Log no replacement on completion')

# ---------------------------------------------------------------------------
# Fitness Details: switch the current node directly in capture phase and keep
# the Set as the source of truth if a later legitimate Log render occurs.
# ---------------------------------------------------------------------------
fitness_log = Path('systems/baseline-fitness/js/fitness-routine-log-v1.js')
old_details = '''      const details=event.target?.closest?.('[data-fitness-log-details-toggle]');
      if (details) {
        event.preventDefault();
        const key=detailsKey(details.dataset.fitnessLogDetailsToggle);
        if (expandedDetails.has(key)) expandedDetails.delete(key); else expandedDetails.add(key);
        patch();
        return;
      }'''
new_details = '''      const details=event.target?.closest?.('[data-fitness-log-details-toggle]');
      if (details) {
        event.preventDefault();
        event.stopPropagation();
        const itemId=String(details.dataset.fitnessLogDetailsToggle || '');
        const key=detailsKey(itemId);
        const open=!expandedDetails.has(key);
        if (open) expandedDetails.add(key); else expandedDetails.delete(key);
        const card=details.closest('.fitness-routine-log-item');
        const panel=card?.querySelector(':scope>.fitness-log-details-panel');
        if (panel) panel.hidden=!open;
        details.setAttribute('aria-expanded',open?'true':'false');
        details.textContent=open?'Close details':'Details';
        return;
      }'''
replace_once(fitness_log, old_details, new_details, 'Fitness direct details toggle')
replace_once(
    fitness_log,
    "    host.addEventListener('click',(event) => {",
    "    host.addEventListener('click',(event) => {",
    'Fitness click listener anchor',
)
# Add capture=true to the click listener closure only.
text = fitness_log.read_text()
needle = "      }\n    });\n\n    host.addEventListener('change',(event) => {"
replacement = "      }\n    },true);\n\n    host.addEventListener('change',(event) => {"
if text.count(needle) != 1:
    raise SystemExit(f'Fitness click capture: expected one match, found {text.count(needle)}')
fitness_log.write_text(text.replace(needle,replacement,1))

print('Stable My Routine interaction ownership cleanup applied.')

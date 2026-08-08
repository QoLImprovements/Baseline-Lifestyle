/* Baseline Fitness — canonical Calisthenics generator progression + picker v5.

   OWNERSHIP CONTRACT
   ------------------
   This is the single owner of generator progression semantics, exercise picker,
   exercise Details content and the two-column generator settings layout.
   It does not wrap fetch and does not patch the live workout. Save augmentation
   is exposed as a pure API for the plan controller to call once.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_GENERATOR_PROGRESSION_V5__) return;
  global.__BASELINE_FITNESS_GENERATOR_PROGRESSION_V5__ = true;

  const document = global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app) !== 'fitness') return;

  const MODES = Object.freeze({ LINEAR:'linear-fixed',STRAIGHT:'straight-sets',TIMED:'timed-hold' });
  const MODE_LABELS = Object.freeze({
    [MODES.LINEAR]:'Linear — fixed set progression',
    [MODES.STRAIGHT]:'Straight Sets — equal reps',
    [MODES.TIMED]:'Timed Hold'
  });
  const LEGACY_LINEAR = 'linear-percent';
  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  let listObserver = null;
  let frame = 0;
  let outsidePickerBound = false;

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  }
  function catalogue() { return global.BASELINE_FITNESS_EXERCISE_CATALOGUE || { EXERCISES:[],FAMILIES:[] }; }
  function canonicalName(value) { return String(value || '').replace(/\s+\(L\/R\)$/i,'').replace(/\s+(Left|Right)$/i,'').trim(); }
  function definitionFor(name) {
    const target=canonicalName(name);
    return (catalogue().EXERCISES || []).find((exercise) => canonicalName(exercise.name).localeCompare(target,'en-GB',{ sensitivity:'base' })===0) || null;
  }
  function displayName(definition) {
    const name=String(definition?.name || '');
    return definition?.unit==='seconds' && definition?.laterality==='separate-left-right' && !/\(L\/R\)$/i.test(name) ? `${name} (L/R)` : name;
  }
  function selectedPlan() {
    try {
      const plans=global.BASELINE_fitnessPlans?.getPlans?.() || [];
      const selected=Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0);
      return plans.find((plan) => Number(plan.planId)===selected) || plans[0] || null;
    } catch (_error) { return null; }
  }
  function savedItem(exerciseName) {
    const target=canonicalName(exerciseName);const items=selectedPlan()?.planJson?.items;
    if (!Array.isArray(items)) return null;
    return items.find((item) => canonicalName(item?.exercise).localeCompare(target,'en-GB',{ sensitivity:'base' })===0) || null;
  }

  function defaultMode(definition) {
    if (!definition) return MODES.LINEAR;
    if (definition.unit==='seconds' || String(definition.progressionType || '').includes('timed')) return MODES.TIMED;
    if (definition.familyKey==='lunges') return MODES.STRAIGHT;
    return MODES.LINEAR;
  }
  function validMode(value,definition) {
    const raw=String(value || '');
    if (defaultMode(definition)===MODES.TIMED) return MODES.TIMED;
    if (raw===LEGACY_LINEAR) return MODES.LINEAR;
    return [MODES.LINEAR,MODES.STRAIGHT].includes(raw)?raw:defaultMode(definition);
  }
  function defaultRepIncrease(definition) { return String(definition?.progressionType || '')==='leg-reps'?3:1; }
  function setCount(value) { return Math.max(1,Math.min(5,Math.round(Number(value) || 3))); }
  function linearOffsets(count) {
    const patterns={ 1:[0],2:[-1,0],3:[-1,-2,0],4:[-2,-3,-1,0],5:[-3,-4,-2,-1,0] };
    return patterns[setCount(count)];
  }
  function linearInitialTargets(baseline,count,increment) {
    const max=Math.max(1,Math.round(Number(baseline) || 1));const step=Math.max(0,Math.round(Number(increment) || 0));const finalSet=Math.max(1,Math.round(max*0.80));
    return linearOffsets(count).map((offset) => Math.max(1,finalSet+(offset*step)));
  }
  function straightInitialTargets(baseline,count) {
    const max=Math.max(1,Math.round(Number(baseline) || 1));const working=Math.max(1,Math.round(max*0.80));return Array(setCount(count)).fill(working);
  }
  function progressedTargets(item,definition,sessionIndex) {
    const source=item && typeof item==='object'?item:{};const session=Math.max(1,Math.round(Number(sessionIndex) || 1));const sets=setCount(source.sets || 3);
    const increase=Number.isFinite(Number(source.repIncrease)) && Number(source.repIncrease)>=0?Math.round(Number(source.repIncrease)):defaultRepIncrease(definition);
    const mode=validMode(source.progressionMode,definition);if (mode===MODES.TIMED) return [];
    const initial=mode===MODES.STRAIGHT?straightInitialTargets(source.baseline,sets):linearInitialTargets(source.baseline,sets,increase);
    return initial.map((value) => value+((session-1)*increase));
  }

  function publishProgressionApi() {
    const original=global.BASELINE_FITNESS_EXERCISE_PROGRESSION || {};
    if (original.__baselineGeneratorProgressionV5) return;
    global.BASELINE_FITNESS_EXERCISE_PROGRESSION=Object.freeze(Object.assign({},original,{
      __baselineGeneratorProgressionV5:true,MODES,linearInitialTargets,straightInitialTargets,progressedTargets,defaultRepIncrease,validMode,displayName,
      augmentPlanJson(planValue) {
        const plan=planValue && typeof planValue==='object'?Object.assign({},planValue):{};
        const values=generatorValues();
        if (Array.isArray(plan.items)) {
          plan.items=plan.items.map((item) => {
            const copy=item && typeof item==='object'?Object.assign({},item):item;
            const override=copy?values.get(canonicalName(copy.exercise)):null;
            if (copy && override) Object.assign(copy,override);
            return copy;
          });
        }
        return plan;
      }
    }));
  }

  function exerciseNameForRow(row) {
    return canonicalName(row?.querySelector?.('.ex-select')?.value || row?.querySelector?.('.ex-search-input')?.value || '');
  }
  function currentMode(row,definition=definitionFor(exerciseNameForRow(row))) {
    const control=row?.querySelector?.('.ex-progression-mode');
    return validMode(control?.value || row?.dataset?.progressionMode || savedItem(exerciseNameForRow(row))?.progressionMode,definition);
  }
  function repIncreaseForRow(row,definition=definitionFor(exerciseNameForRow(row))) {
    const control=row?.querySelector?.('.ex-rep-increase');const saved=Number(savedItem(exerciseNameForRow(row))?.repIncrease);const raw=Number(control?.value);
    if (Number.isFinite(raw) && raw>=0) return Math.round(raw);if (Number.isFinite(saved) && saved>=0) return Math.round(saved);return defaultRepIncrease(definition);
  }
  function modeOptions(mode,timed) {
    const values=timed?[MODES.TIMED]:[MODES.LINEAR,MODES.STRAIGHT];
    return values.map((value) => `<option value="${value}"${value===mode?' selected':''}>${MODE_LABELS[value]}</option>`).join('');
  }

  function ensureUnitField(row,definition) {
    const field=row?.querySelector?.('.ex-field-baseline');const input=field?.querySelector?.('.ex-baseline');if (!field || !input || !definition) return;
    const label=field.querySelector('.baseline-label,label,span');if (label) label.textContent='Max Baseline';
    let wrap=input.closest('.bl-input-with-unit');if (!wrap) { wrap=document.createElement('span');wrap.className='bl-input-with-unit';input.before(wrap);wrap.appendChild(input); }
    let unit=wrap.querySelector('.bl-field-unit');if (!unit) { unit=document.createElement('span');unit.className='bl-field-unit';wrap.appendChild(unit); }
    unit.textContent=definition.unit==='seconds'?'seconds':'reps';
  }
  function ensureRepField(row,definition) {
    const timed=defaultMode(definition)===MODES.TIMED;let field=row.querySelector('.ex-field-rep-increase');
    if (timed) { field?.remove();return null; }
    if (!field) {
      field=document.createElement('label');field.className='field-stack ex-field-rep-increase';field.innerHTML='<span class="rep-increase-label">Rep Increase Per Session</span><input class="ex-rep-increase field-input-fixed" type="number" min="0" max="1000" step="1" inputmode="numeric">';
      const sets=row.querySelector('.ex-field-sets');(sets || row.lastElementChild)?.insertAdjacentElement('afterend',field);
    }
    const input=field.querySelector('.ex-rep-increase');const exercise=exerciseNameForRow(row);const saved=Number(savedItem(exercise)?.repIncrease);
    if (input && input.dataset.progressionExercise!==exercise) { input.value=String(Number.isFinite(saved) && saved>=0?Math.round(saved):defaultRepIncrease(definition));input.dataset.progressionExercise=exercise; }
    return field;
  }
  function removeDuplicateTypeField(row) {
    Array.from(row?.querySelectorAll?.('.field-stack') || []).forEach((field) => {
      if (field.classList.contains('ex-field-progression-mode')) return;
      const label=String(field.querySelector(':scope>label,:scope>span')?.textContent || '').trim();
      if (label==='Type') field.remove();
    });
  }

  function detailText(row,definition,mode) {
    const baseline=Math.max(1,Math.round(Number(row.querySelector('.ex-baseline')?.value) || definition?.base || 1));const sets=setCount(row.querySelector('.ex-sets')?.value || 3);
    if (mode===MODES.TIMED) return { start:`${baseline} sec guide`,progression:baseline>=90?'Next guide +2 sec':'Next guide +3 sec',rule:'Record technical burnout' };
    const increase=repIncreaseForRow(row,definition);const targets=progressedTargets({ baseline,sets,repIncrease:increase,progressionMode:mode },definition,1);const suffix=definition?.laterality==='per-side'?' per side':'';
    return { start:`${targets.join(' / ')}${suffix}`,progression:`+${increase} to every set after success`,rule:mode===MODES.LINEAR?'Final starting set = 80% of Max Baseline':'Equal working sets start at 80% of Max Baseline' };
  }
  function muscleFocus(definition) {
    const family=String(definition?.familyKey || '').toLowerCase();const movement=String(definition?.movementCategory || '').toLowerCase();
    if (family==='side-planks' || /lateral core|adduction/.test(movement)) return 'Obliques, quadratus lumborum and deep abdominal stabilisers resist side-bending and rotation; the glute medius and hip stabilisers keep the pelvis stacked.';
    if (family==='planks' || /anterior core|anti-rotation|cross-body core/.test(movement)) return 'Rectus abdominis, transverse abdominis and obliques brace the trunk, with shoulder and hip stabilisers maintaining a rigid body line.';
    if (family==='reverse-planks' || /posterior core|hip extension|hip hinge/.test(movement)) return 'Glutes, hamstrings and spinal extensors drive and hold hip extension while the posterior shoulders and trunk stabilise the body.';
    if (/vertical push/.test(movement)) return 'Deltoids and triceps provide the main pressing force while upper-back and scapular stabilisers control the shoulder blades.';
    if (/push|dip|elbow extension/.test(movement)) return 'Chest, triceps and anterior shoulders provide the main pressing force while the trunk resists unwanted movement.';
    if (/pull/.test(movement) || family.includes('pulling')) return 'Latissimus dorsi, rhomboids, biceps and forearms create the pull while the scapular muscles and trunk stabilise the movement.';
    if (/squat|lunge|step/.test(movement) || family==='squats' || family==='lunges') return 'Quadriceps and glutes produce most of the force; hamstrings, adductors, calves and trunk stabilisers control the hips, knees and balance.';
    if (/plantar flexion|dorsiflexion/.test(movement)) return 'Calf or shin musculature controls the ankle while foot and lower-leg stabilisers support balance and force transfer.';
    if (/crawl|conditioning|locomotion/.test(movement)) return 'Whole-body work combining shoulders, trunk and legs; repeated movement increases cardiorespiratory demand as pace is sustained.';
    return String(definition?.goodFor || 'The prime movers named by the movement work with trunk and joint stabilisers to control the bodyweight exercise.');
  }
  function ensureDetailsCard(row,definition,mode) {
    let card=row.querySelector('.ex-details-card');if (!card) { card=document.createElement('div');card.className='ex-details-card';row.append(card); }
    const detail=detailText(row,definition,mode);const focus=muscleFocus(definition);const signature=[definition?.name,definition?.family,definition?.movementCategory,mode,detail.start,detail.progression,detail.rule,focus].join('|');
    if (card.dataset.signature===signature) return;card.dataset.signature=signature;
    card.innerHTML=`<span><b>Family</b>${esc(definition?.family || 'Calisthenics')}</span><span><b>Movement</b>${esc(definition?.movementCategory || 'Bodyweight')}</span><span><b>Starting sets</b>${esc(detail.start)}</span><span><b>Progression</b>${esc(detail.progression)}</span><span class="ex-details-rule"><b>Rule</b>${esc(detail.rule)}</span><span class="ex-details-focus"><b>Workout/Muscle Focus</b>${esc(focus)}</span>`;
  }

  function closePicker(field) {
    const menu=field?.querySelector?.('.ex-picker-menu');const button=field?.querySelector?.('.ex-picker-toggle');if (menu) menu.hidden=true;if (button) button.setAttribute('aria-expanded','false');
  }
  function renderPickerMenu(field,query='') {
    const menu=field.querySelector('.ex-picker-menu');if (!menu) return;const text=canonicalName(query).toLocaleLowerCase('en-GB');
    const exercises=(catalogue().EXERCISES || []).filter((exercise) => !text || [exercise.name,exercise.family,exercise.section,exercise.movementCategory].some((value) => String(value || '').toLocaleLowerCase('en-GB').includes(text)));
    const families=catalogue().FAMILIES || [];const known=new Set(families.map((family) => family.key));const orderedKeys=families.map((family) => family.key).concat(exercises.map((exercise) => exercise.familyKey).filter((key,index,array) => key && !known.has(key) && array.indexOf(key)===index));
    menu.innerHTML=orderedKeys.map((key) => {
      const items=exercises.filter((exercise) => exercise.familyKey===key);if (!items.length) return '';const family=families.find((entry) => entry.key===key);const label=family?.label || items[0]?.family || key;const section=items[0]?.section || '';
      return `<section class="ex-picker-group"><div class="ex-picker-group-head"><strong>${esc(label)}</strong>${section?`<span>${esc(section)}</span>`:''}</div>${items.map((exercise) => `<button type="button" class="ex-picker-option" role="option" data-exercise-name="${esc(exercise.name)}"><span>${esc(displayName(exercise))}</span><small>${esc(exercise.movementCategory || '')}</small></button>`).join('')}</section>`;
    }).join('') || '<div class="ex-picker-empty">No matching exercises.</div>';
  }
  function openPicker(field) {
    const menu=field?.querySelector?.('.ex-picker-menu');const input=field?.querySelector?.('.ex-search-input');const button=field?.querySelector?.('.ex-picker-toggle');if (!menu || !input) return;
    $$('.ex-field-exercise').forEach((other) => { if (other!==field) closePicker(other); });renderPickerMenu(field,input.value);menu.hidden=false;button?.setAttribute('aria-expanded','true');
  }
  function installPicker(row,definition) {
    const field=row.querySelector('.ex-field-exercise');const select=row.querySelector('.ex-select');if (!field || !select) return;
    row.querySelector('.exercise-info-wrap')?.remove();select.classList.add('ex-select-source');select.hidden=true;select.setAttribute('aria-hidden','true');select.tabIndex=-1;
    let input=field.querySelector('.ex-search-input');
    if (!input) { input=document.createElement('input');input.type='search';input.className='ex-search-input field-input-fixed';select.insertAdjacentElement('beforebegin',input); }
    input.removeAttribute('list');input.setAttribute('autocomplete','off');input.setAttribute('aria-autocomplete','list');input.setAttribute('aria-haspopup','listbox');input.placeholder='Search or choose an exercise…';
    if (document.activeElement!==input && definition) input.value=displayName(definition);
    if (field.dataset.groupedPicker==='true') return;field.dataset.groupedPicker='true';
    const control=document.createElement('div');control.className='ex-picker-control';input.before(control);control.appendChild(input);
    const toggle=document.createElement('button');toggle.type='button';toggle.className='ex-picker-toggle';toggle.setAttribute('aria-label','Show exercise categories');toggle.setAttribute('aria-expanded','false');control.appendChild(toggle);
    const menu=document.createElement('div');menu.className='ex-picker-menu';menu.setAttribute('role','listbox');menu.hidden=true;field.appendChild(menu);
    input.addEventListener('focus',() => openPicker(field));
    input.addEventListener('input',() => { renderPickerMenu(field,input.value);menu.hidden=false;toggle.setAttribute('aria-expanded','true'); });
    input.addEventListener('change',() => { const match=definitionFor(input.value);if (match) { select.value=match.name;select.dispatchEvent(new Event('change',{ bubbles:true }));input.value=displayName(match); } });
    input.addEventListener('keydown',(event) => { if (event.key==='Escape') { event.preventDefault();closePicker(field); }if (event.key==='ArrowDown') { event.preventDefault();openPicker(field);menu.querySelector('.ex-picker-option')?.focus(); } });
    toggle.addEventListener('click',() => { if (menu.hidden) openPicker(field);else closePicker(field); });
    menu.addEventListener('click',(event) => { const option=event.target.closest('.ex-picker-option[data-exercise-name]');if (!option) return;const name=String(option.dataset.exerciseName || '');const match=definitionFor(name);select.value=match?.name || name;select.dispatchEvent(new Event('change',{ bubbles:true }));input.value=displayName(match);closePicker(field);input.focus(); });
    menu.addEventListener('keydown',(event) => { const option=event.target.closest('.ex-picker-option');if (!option) return;const options=$$('.ex-picker-option',menu);const index=options.indexOf(option);if (event.key==='ArrowDown') { event.preventDefault();options[Math.min(options.length-1,index+1)]?.focus(); }else if (event.key==='ArrowUp') { event.preventDefault();if (index<=0) input.focus();else options[index-1]?.focus(); }else if (event.key==='Escape') { event.preventDefault();closePicker(field);input.focus(); } });
    renderPickerMenu(field,'');
    if (!outsidePickerBound) { outsidePickerBound=true;document.addEventListener('pointerdown',(event) => { if (event.target?.closest?.('.ex-field-exercise')) return;$$('.ex-field-exercise').forEach(closePicker); },true); }
  }

  function syncRow(row) {
    if (!row) return;removeDuplicateTypeField(row);const definition=definitionFor(exerciseNameForRow(row));if (!definition) return;
    const timed=defaultMode(definition)===MODES.TIMED;const previousExercise=row.dataset.progressionExercise || '';const saved=savedItem(definition.name);const storedMode=String(saved?.progressionMode || '');let mode=validMode(row.dataset.progressionMode || storedMode || defaultMode(definition),definition);
    if (previousExercise && previousExercise!==definition.name && !storedMode) mode=defaultMode(definition);
    let field=row.querySelector('.ex-field-progression-mode');if (!field) { field=document.createElement('label');field.className='field-stack ex-field-progression-mode';field.innerHTML='<span>Progression Type</span><select class="ex-progression-mode field-select-fixed" data-native-select="true"></select>';const baselineField=row.querySelector('.ex-field-baseline');(baselineField || row.firstElementChild)?.insertAdjacentElement(baselineField?'beforebegin':'afterend',field); }
    const progressionSelect=field.querySelector('.ex-progression-mode');mode=validMode(row.dataset.progressionMode || storedMode || mode,definition);const signature=`${timed}:${mode}`;
    if (progressionSelect && progressionSelect.dataset.modeSignature!==signature) { progressionSelect.dataset.modeSignature=signature;progressionSelect.innerHTML=modeOptions(mode,timed); }
    if (progressionSelect) { progressionSelect.disabled=timed;progressionSelect.value=mode; }
    field.classList.toggle('bl-generator-mode-hidden',timed);row.dataset.progressionMode=mode;row.dataset.progressionExercise=definition.name;
    ensureUnitField(row,definition);ensureRepField(row,definition);installPicker(row,definition);ensureDetailsCard(row,definition,mode);
  }
  function enhanceRows() { $$('#exerciseList .ex-row').forEach(syncRow); }

  function settingsFields() {
    const frequency=$('#freq')?.closest('.fitness-frequency-grid') || $('#freq')?.closest('.field-stack');
    return { start:$('#startDate')?.closest('.field-stack'),frequency,schedule:$('#scheduleMode')?.closest('.field-stack'),days:$('#specificDayControls'),length:$('#lengthMode')?.closest('.field-stack'),sessions:$('#sessions')?.closest('.field-stack'),goalExercise:$('#goalExercise')?.closest('.field-stack'),goalAmount:$('#goalAmount')?.closest('.field-stack') };
  }
  function setDirectLabel(field,text) {
    if (!field) return;const label=field.querySelector(':scope>label,:scope>span');if (label) label.textContent=text;
  }
  function syncSettingsLabels() {
    const schedule=$('#scheduleMode');
    if (schedule) {
      Array.from(schedule.options || []).forEach((option) => { if (option.value==='weekly-count') option.textContent='Number Of Days';if (option.value==='specific-days') option.textContent='Specify Weekdays'; });
      setDirectLabel(schedule.closest('.field-stack'),'Choose schedule by');
    }
    const frequency=$('#freq');
    if (frequency) {
      const current=Math.min(6,Math.max(1,Number(String(frequency.value || '1x').replace(/\D/g,'')) || 1));
      frequency.innerHTML=Array.from({ length:6 },(_,index) => `<option value="${index+1}x">${index+1}</option>`).join('');frequency.value=`${current}x`;frequency.setAttribute('aria-label','Number Of Days');
      const host=frequency.closest('.field-stack');setDirectLabel(host,'Number Of Days');
    }
    const length=$('#lengthMode');
    if (length) Array.from(length.options || []).forEach((option) => { if (option.value==='sessions') option.textContent='Total Sessions';if (option.value==='goal') option.textContent='Achieved Rep/Hold Goal'; });
    setDirectLabel(length?.closest('.field-stack'),'Plan Length');
    setDirectLabel($('#sessions')?.closest('.field-stack'),'Total Sessions');
    setDirectLabel($('#goalExercise')?.closest('.field-stack'),'Goal Exercise');
    const goalDef=definitionFor($('#goalExercise')?.value);setDirectLabel($('#goalAmount')?.closest('.field-stack'),goalDef?.unit==='seconds'?'Goal Amount (seconds hold)':'Goal Amount (reps)');
    setDirectLabel($('#startDate')?.closest('.field-stack'),'Start Date');
  }
  function ensureSettingsGrid() {
    const generator=$('#myPlanGeneratorWrap');if (!generator) return;const fields=settingsFields();if (!fields.start || !fields.length) return;
    let grid=$('.bl-generator-settings-grid',generator);if (!grid) { grid=document.createElement('section');grid.className='bl-generator-settings-grid';const divider=$('#addExerciseBtn',generator)?.nextElementSibling;if (divider) divider.insertAdjacentElement('afterend',grid);else $('#addExerciseBtn',generator)?.insertAdjacentElement('afterend',grid); }
    let scheduleColumn=grid.querySelector('[data-generator-settings-column="schedule"]');if (!scheduleColumn) { scheduleColumn=document.createElement('div');scheduleColumn.className='bl-generator-settings-column';scheduleColumn.dataset.generatorSettingsColumn='schedule';grid.appendChild(scheduleColumn); }
    let lengthColumn=grid.querySelector('[data-generator-settings-column="length"]');if (!lengthColumn) { lengthColumn=document.createElement('div');lengthColumn.className='bl-generator-settings-column';lengthColumn.dataset.generatorSettingsColumn='length';grid.appendChild(lengthColumn); }
    [fields.start,fields.schedule,fields.frequency,fields.days].filter(Boolean).forEach((field) => { if (field.parentElement!==scheduleColumn) scheduleColumn.appendChild(field); });
    [fields.length,fields.sessions,fields.goalExercise,fields.goalAmount].filter(Boolean).forEach((field) => { if (field.parentElement!==lengthColumn) lengthColumn.appendChild(field); });
    $$('#myPlanGeneratorWrap .row.row-2,#myPlanGeneratorWrap .calisthenics-schedule-row').forEach((row) => { if (!row.children.length) row.remove(); });
    const hint=$('#goalHint');if (hint) { hint.textContent='';hint.hidden=true; }
  }
  function syncScheduleMode() {
    const specific=String($('#scheduleMode')?.value || 'weekly-count')==='specific-days';const fields=settingsFields();
    if (fields.frequency) fields.frequency.hidden=specific;if (fields.days) fields.days.hidden=!specific;
    if ($('#freq')) $('#freq').disabled=specific;
  }
  function syncLengthMode() {
    const goal=String($('#lengthMode')?.value || 'sessions')==='goal';const fields=settingsFields();
    fields.sessions?.classList.toggle('bl-generator-mode-hidden',goal);fields.goalExercise?.classList.toggle('bl-generator-mode-hidden',!goal);fields.goalAmount?.classList.toggle('bl-generator-mode-hidden',!goal);
    if ($('#sessions')) $('#sessions').disabled=goal;if ($('#goalExercise')) $('#goalExercise').disabled=!goal;if ($('#goalAmount')) $('#goalAmount').disabled=!goal;
  }
  function preserveStartDate() {
    const start=$('#startDate');if (!start) return;start.disabled=false;start.readOnly=false;start.removeAttribute('aria-disabled');
    if (!start.value) { const date=new Date();const pad=(value) => String(value).padStart(2,'0');start.value=`${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`; }
    start.removeAttribute('min');
  }

  function generatorValues() {
    const output=new Map();$$('#exerciseList .ex-row').forEach((row) => { const name=exerciseNameForRow(row);if (!name) return;output.set(name,{ progressionMode:currentMode(row),repIncrease:repIncreaseForRow(row),baseline:Math.max(1,Math.round(Number(row.querySelector('.ex-baseline')?.value) || 1)),sets:setCount(row.querySelector('.ex-sets')?.value || 3) }); });return output;
  }
  function uiItem(exercise) {
    const row=$$('#exerciseList .ex-row').find((candidate) => exerciseNameForRow(candidate).localeCompare(canonicalName(exercise),'en-GB',{ sensitivity:'base' })===0);if (!row) return null;
    return { exercise:exerciseNameForRow(row),progressionMode:currentMode(row),baseline:Math.max(1,Math.round(Number(row.querySelector('.ex-baseline')?.value) || 1)),sets:setCount(row.querySelector('.ex-sets')?.value || 3),repIncrease:repIncreaseForRow(row) };
  }
  function sessionIndexFromCard(card) { const text=String(card?.querySelector?.('.title,h3,.session-title')?.textContent || card?.textContent || '');const match=text.match(/Session\s+(\d+)/i);return match?Math.max(1,Number(match[1])):1; }
  function patchRows(root,useUi) {
    Array.from(root?.querySelectorAll?.('.plan-exercise-row') || []).forEach((row) => { const exercise=canonicalName(row.firstElementChild?.textContent || '');const source=useUi?uiItem(exercise):savedItem(exercise);const definition=definitionFor(exercise);if (!source || !definition || validMode(source.progressionMode,definition)===MODES.TIMED) return;const targets=progressedTargets(source,definition,sessionIndexFromCard(row.closest('.session-card')));const details=Array.from(row.children).find((child) => child.tagName==='DIV');Array.from(details?.querySelectorAll?.('b') || []).forEach((node,index) => { node.textContent=String(targets[Math.min(index,targets.length-1)]); }); });
  }
  function patchPlanDisplays() { patchRows($('#planOut'),true);patchRows($('#myPlanSavedWrap'),false); }

  function patch() {
    enhanceRows();syncSettingsLabels();ensureSettingsGrid();syncScheduleMode();syncLengthMode();preserveStartDate();patchPlanDisplays();document.documentElement.setAttribute('data-baseline-fitness-progression-ui','BASELINE_FITNESS_GENERATOR_PROGRESSION_20260809_5');
  }
  function schedule() { if (frame) return;frame=global.requestAnimationFrame(() => { frame=0;patch(); }); }
  function boot() {
    publishProgressionApi();patch();const list=$('#exerciseList');
    if (list && typeof MutationObserver!=='undefined') { listObserver=new MutationObserver(schedule);listObserver.observe(list,{ childList:true,subtree:false }); }
    document.addEventListener('change',(event) => { if (event.target?.matches?.('#lengthMode,#scheduleMode,#freq,#goalExercise,#startDate') || event.target?.closest?.('#exerciseList')) schedule(); },true);
    document.addEventListener('input',(event) => { if (event.target?.closest?.('#exerciseList') || event.target?.id==='startDate') schedule(); },true);
    document.addEventListener('click',(event) => { if (event.target?.closest?.('#genBtn,#savePlanBtn,#editOptionsBtn,[data-open-calisthenics-plan]')) schedule(); },true);
    document.addEventListener('baseline:fitness-plans-updated',schedule);document.addEventListener('baseline:fitness-workout-updated',schedule);
  }
  global.addEventListener('pagehide',() => { listObserver?.disconnect();if (frame) global.cancelAnimationFrame(frame); },{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);

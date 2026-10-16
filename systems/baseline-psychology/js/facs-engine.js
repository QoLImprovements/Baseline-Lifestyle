(function(){
  'use strict';

  const DATA=window.BASELINE_FACS;
  if(!DATA) return;

  const state={
    active:new Map(),
    focused:null,
    query:'',
    family:'face',
    part:'all'
  };

  const $=id=>document.getElementById(id);
  const unitByCode=new Map(DATA.units.map(unit=>[unit.code,unit]));

  function displayCode(unit){
    if(!unit) return '';
    if(unit.code==='0') return 'Neutral';
    if(unit.kind==='Action Unit') return 'AU'+unit.code;
    if(unit.kind==='Action Descriptor') return 'AD'+unit.code;
    return unit.code;
  }

  function defaultEntry(unit){
    return {
      unit,
      intensity:unit.intensity?'C':null,
      side:unit.laterality?(unit.code==='46'?'left':'bilateral'):null
    };
  }

  function compactEntry(entry){
    if(!entry) return '';
    const suffix=entry.intensity||'';
    const prefix=entry.unit.kind==='Action Unit'?'AU':entry.unit.kind==='Action Descriptor'?'AD':'';
    if(entry.unit.laterality && entry.side && entry.side!=='bilateral'){
      return (entry.side==='left'?'L':'R')+prefix+entry.unit.code+suffix;
    }
    if(entry.unit.code==='0') return 'Neutral';
    return prefix+entry.unit.code+suffix;
  }

  function activeEntries(){
    return Array.from(state.active.values());
  }

  function button(label,value,current,className,onClick){
    const el=document.createElement('button');
    el.type='button';
    el.className=className+(value===current?' is-selected':'');
    el.textContent=label;
    el.setAttribute('aria-pressed',value===current?'true':'false');
    el.addEventListener('click',onClick);
    return el;
  }

  function renderBrowseFilters(){
    const familyHost=$('facsFamilyButtons');
    if(familyHost){
      familyHost.innerHTML='';
      DATA.families.forEach(item=>{
        familyHost.appendChild(button(item.label,item.id,state.family,'facs-filter-btn',()=>{
          state.family=item.id;
          state.part='all';
          renderBrowseFilters();
          renderLibrary();
        }));
      });
    }

    const partRow=$('facsFacePartRow');
    const partHost=$('facsRegionButtons');
    const showParts=state.family==='face' && !state.query.trim();
    if(partRow) partRow.hidden=!showParts;
    if(partHost){
      partHost.innerHTML='';
      DATA.faceParts.forEach(item=>{
        partHost.appendChild(button(item.label,item.id,state.part,'facs-filter-btn facs-region-btn',()=>{
          state.part=item.id;
          renderBrowseFilters();
          renderLibrary();
        }));
      });
    }
  }

  function matches(unit){
    const q=state.query.trim().toLowerCase();
    const hay=[
      unit.code,
      displayCode(unit),
      unit.name,
      unit.kind,
      unit.section,
      unit.region,
      unit.parts.join(' '),
      unit.muscles,
      unit.movement,
      unit.editionNote
    ].join(' ').toLowerCase();

    if(q) return hay.includes(q);
    if(state.family!=='all' && unit.family!==state.family) return false;
    if(state.family==='face' && state.part!=='all' && !unit.parts.includes(state.part)) return false;
    return true;
  }

  function renderLibrary(){
    const grid=$('facsUnitGrid');
    if(!grid) return;
    grid.innerHTML='';
    const filtered=DATA.units.filter(matches);

    filtered.forEach(unit=>{
      const active=state.active.has(unit.code);
      const focused=state.focused===unit.code;
      const item=document.createElement('button');
      item.type='button';
      item.className='facs-unit'+(active?' is-active':'')+(focused?' is-focused':'');
      item.setAttribute('aria-pressed',active?'true':'false');
      item.setAttribute('data-code',unit.code);

      const badges=[];
      if(unit.section) badges.push('<span class="facs-unit-badge">'+escapeHtml(unit.section)+'</span>');
      if(unit.kind) badges.push('<span class="facs-unit-badge">'+escapeHtml(unit.kind)+'</span>');
      if(unit.intensity) badges.push('<span class="facs-unit-badge">A–E</span>');
      if(unit.laterality) badges.push('<span class="facs-unit-badge">L/R</span>');
      if(unit.visualFidelity==='reference') badges.push('<span class="facs-unit-badge">Reference only</span>');
      else if(unit.visualFidelity==='approximate') badges.push('<span class="facs-unit-badge">3D approx.</span>');
      if(unit.visualFidelity==='reference') badges.push('<span class="facs-unit-badge">Reference only</span>');
      else if(unit.visualFidelity==='approximate') badges.push('<span class="facs-unit-badge">3D approx.</span>');

      item.innerHTML=
        '<span class="facs-unit-code">'+escapeHtml(displayCode(unit))+'</span>'+
        '<span class="facs-unit-name">'+escapeHtml(unit.name)+'</span>'+
        '<span class="facs-unit-region">'+escapeHtml(unit.region)+'</span>'+
        (badges.length?'<span class="facs-unit-badges">'+badges.join('')+'</span>':'');

      item.addEventListener('click',()=>toggleUnit(unit.code));
      grid.appendChild(item);
    });

    const count=$('facsResultCount');
    if(count){
      const mode=state.query.trim()?'search':'current filter';
      count.textContent=filtered.length+' results · '+mode;
    }
  }

  function renderActiveStrip(){
    const strip=$('facsActiveStrip');
    if(!strip) return;
    strip.innerHTML='';
    const entries=activeEntries();
    if(!entries.length){
      const empty=document.createElement('span');
      empty.className='facs-empty-state';
      empty.textContent='Neutral face — no active FACS codes.';
      strip.appendChild(empty);
      return;
    }
    entries.forEach(entry=>{
      const chip=document.createElement('button');
      chip.type='button';
      chip.className='facs-active-chip'+(state.focused===entry.unit.code?' is-focused':'');
      chip.textContent=compactEntry(entry)+' · '+entry.unit.name;
      chip.addEventListener('click',()=>{
        state.focused=entry.unit.code;
        renderAll();
      });
      strip.appendChild(chip);
    });
  }

  function renderFocus(){
    const entry=state.focused?state.active.get(state.focused):null;
    const focusCode=$('facsFocusCode');
    const title=$('facsFocusTitle');
    const movement=$('facsFocusMovement');
    const type=$('facsFocusType');
    const section=$('facsFocusSection');
    const region=$('facsFocusRegion');
    const muscle=$('facsFocusMuscle');
    const visual=$('facsFocusRenderer');
    const noteRow=$('facsFocusNoteRow');
    const note=$('facsFocusNote');
    const remove=$('facsRemoveFocused');

    if(!entry){
      if(focusCode) focusCode.textContent='No code selected';
      if(title) title.textContent='Choose an Action Unit or descriptor';
      if(movement) movement.textContent='Choose a face area below, then select a FACS code.';
      if(type) type.textContent='—';
      if(section) section.textContent='—';
      if(region) region.textContent='—';
      if(muscle) muscle.textContent='—';
      if(visual) visual.textContent='—';
      if(noteRow) noteRow.hidden=true;
      if(note) note.textContent='—';
      if(remove) remove.disabled=true;
      renderIntensity(null);
      renderSide(null);
      return;
    }

    if(focusCode) focusCode.textContent=compactEntry(entry);
    if(title) title.textContent=entry.unit.name;
    if(movement) movement.textContent=entry.unit.movement;
    if(type) type.textContent=entry.unit.kind||'FACS code';
    if(section) section.textContent=entry.unit.section||entry.unit.family;
    if(region) region.textContent=entry.unit.region;
    if(muscle) muscle.textContent=entry.unit.muscles;
    if(visual){
      if(entry.unit.visualFidelity==='direct') visual.textContent='Closest corresponding 3D morph / pose';
      else if(entry.unit.visualFidelity==='approximate') visual.textContent='Composite 3D approximation';
      else visual.textContent='Reference only — no faithful current morph';
    }
    if(noteRow) noteRow.hidden=!entry.unit.editionNote;
    if(note) note.textContent=entry.unit.editionNote||'—';
    if(remove) remove.disabled=false;
    renderIntensity(entry);
    renderSide(entry);
  }

  function renderIntensity(entry){
    const buttons=Array.from(document.querySelectorAll('#facsIntensityButtons [data-intensity]'));
    const status=$('facsIntensityStatus');
    const enabled=!!(entry && entry.unit.intensity);
    buttons.forEach(item=>{
      item.disabled=!enabled;
      item.setAttribute('aria-pressed',enabled && item.dataset.intensity===entry.intensity?'true':'false');
    });
    if(status){
      if(!entry) status.textContent='Select an intensity-scored code';
      else status.textContent=entry.unit.intensity?'A trace → E maximum':'No A–E intensity';
    }
  }

  function renderSide(entry){
    const buttons=Array.from(document.querySelectorAll('#facsSideButtons [data-side]'));
    const status=$('facsSideStatus');
    const enabled=!!(entry && entry.unit.laterality);
    buttons.forEach(item=>{
      item.disabled=!enabled;
      item.setAttribute('aria-pressed',enabled && item.dataset.side===entry.side?'true':'false');
    });
    if(status){
      if(!entry) status.textContent='Select a lateral movement';
      else status.textContent=entry.unit.laterality?'Left / both / right':'No side modifier';
    }
  }

  function renderCombination(){
    const entries=activeEntries();
    const combination=entries.length?entries.map(compactEntry).join(' + '):'Neutral';
    const combinationEl=$('facsCombination');
    const readout=$('facsCodeReadout');
    if(combinationEl) combinationEl.textContent=combination;
    if(readout) readout.textContent=combination;
    const desc=$('facsFaceDesc');
    if(desc){
      desc.textContent=entries.length
        ? 'Realistic 3D face visualising '+entries.map(entry=>compactEntry(entry)+' '+entry.unit.name).join(', ')+'.'
        : 'Neutral realistic 3D face with no active FACS codes.';
    }
  }

  function renderFace(){
    const renderer=window.BASELINE_FACS_RENDERER;
    if(renderer && typeof renderer.render==='function') renderer.render(activeEntries());
  }

  function renderAll(){
    renderBrowseFilters();
    renderLibrary();
    renderActiveStrip();
    renderFocus();
    renderCombination();
    renderFace();
  }

  function toggleUnit(code){
    const unit=unitByCode.get(code);
    if(!unit) return;
    if(code==='0'){
      clearAll();
      return;
    }
    if(state.active.has(code)){
      state.focused=code;
    }else{
      state.active.set(code,defaultEntry(unit));
      state.focused=code;
    }
    renderAll();
  }

  function removeFocused(){
    if(!state.focused) return;
    state.active.delete(state.focused);
    const entries=activeEntries();
    state.focused=entries.length?entries[entries.length-1].unit.code:null;
    renderAll();
  }

  function clearAll(){
    state.active.clear();
    state.focused=null;
    renderAll();
  }

  function setIntensity(code){
    if(!state.focused) return;
    const entry=state.active.get(state.focused);
    if(!entry || !entry.unit.intensity) return;
    if(!DATA.intensities.some(item=>item.code===code)) return;
    entry.intensity=code;
    renderAll();
  }

  function setSide(side){
    if(!state.focused) return;
    const entry=state.active.get(state.focused);
    if(!entry || !entry.unit.laterality) return;
    if(!['bilateral','left','right'].includes(side)) return;
    entry.side=side;
    renderAll();
  }

  function bind(){
    const search=$('facsSearch');
    if(search){
      search.addEventListener('input',()=>{
        state.query=search.value||'';
        renderBrowseFilters();
        renderLibrary();
      });
    }

    const clear=$('facsClearAll');
    if(clear) clear.addEventListener('click',clearAll);

    const remove=$('facsRemoveFocused');
    if(remove) remove.addEventListener('click',removeFocused);

    document.querySelectorAll('#facsIntensityButtons [data-intensity]').forEach(item=>{
      item.addEventListener('click',()=>setIntensity(item.dataset.intensity));
    });

    document.querySelectorAll('#facsSideButtons [data-side]').forEach(item=>{
      item.addEventListener('click',()=>setSide(item.dataset.side));
    });

    renderAll();
  }

  function escapeHtml(value){
    return String(value==null?'':value).replace(/[&<>"']/g,char=>({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[char]));
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',bind,{once:true});
  }else{
    bind();
  }
})();
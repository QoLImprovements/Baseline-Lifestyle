(function(){
  'use strict';

  const DATA=window.BASELINE_FACS;
  const RENDERER=window.BASELINE_FACS_RENDERER;
  if(!DATA) return;

  const state={
    active:new Map(),
    focused:null,
    query:'',
    category:'all'
  };

  const $=id=>document.getElementById(id);
  const unitByCode=new Map(DATA.units.map(unit=>[unit.code,unit]));

  function displayCode(unit){
    if(!unit) return '';
    return unit.category==='facial' ? 'AU'+unit.code : 'FACS '+unit.code;
  }

  function defaultEntry(unit){
    return {
      unit,
      intensity:unit.intensity?'C':null,
      side:unit.laterality?'bilateral':null
    };
  }

  function compactEntry(entry){
    if(!entry) return '';
    const isMain=entry.unit.category==='facial';
    const suffix=entry.intensity||'';
    if(entry.unit.laterality && entry.side && entry.side!=='bilateral'){
      return (entry.side==='left'?'L':'R')+entry.unit.code+suffix;
    }
    return (isMain?'AU':'FACS ')+entry.unit.code+suffix;
  }

  function activeEntries(){
    return Array.from(state.active.values());
  }

  function renderCategoryOptions(){
    const select=$('facsCategory');
    if(!select) return;
    select.innerHTML='';
    const all=document.createElement('option');
    all.value='all';
    all.textContent='All FACS codes';
    select.appendChild(all);
    DATA.categories.forEach(category=>{
      const option=document.createElement('option');
      option.value=category.id;
      option.textContent=category.label;
      select.appendChild(option);
    });
    select.value=state.category;
  }

  function matches(unit){
    if(state.category!=='all' && unit.category!==state.category) return false;
    const q=state.query.trim().toLowerCase();
    if(!q) return true;
    const hay=[
      unit.code,
      displayCode(unit),
      unit.name,
      unit.region,
      unit.muscles,
      unit.movement
    ].join(' ').toLowerCase();
    return hay.includes(q);
  }

  function renderLibrary(){
    const grid=$('facsUnitGrid');
    if(!grid) return;
    grid.innerHTML='';
    const filtered=DATA.units.filter(matches);
    filtered.forEach(unit=>{
      const active=state.active.has(unit.code);
      const focused=state.focused===unit.code;
      const button=document.createElement('button');
      button.type='button';
      button.className='facs-unit'+(active?' is-active':'')+(focused?' is-focused':'');
      button.setAttribute('aria-pressed',active?'true':'false');
      button.setAttribute('data-code',unit.code);

      const badges=[];
      if(unit.intensity) badges.push('<span class="facs-unit-badge">A–E</span>');
      if(unit.laterality) badges.push('<span class="facs-unit-badge">L/R</span>');
      if(unit.render) badges.push('<span class="facs-unit-badge">Visual</span>');

      button.innerHTML=
        '<span class="facs-unit-code">'+escapeHtml(displayCode(unit))+'</span>'+
        '<span class="facs-unit-name">'+escapeHtml(unit.name)+'</span>'+
        '<span class="facs-unit-region">'+escapeHtml(unit.region)+'</span>'+
        (badges.length?'<span class="facs-unit-badges">'+badges.join('')+'</span>':'');

      button.addEventListener('click',()=>toggleUnit(unit.code));
      grid.appendChild(button);
    });
    const count=$('facsResultCount');
    if(count) count.textContent=filtered.length+' of '+DATA.units.length;
  }

  function renderActiveStrip(){
    const strip=$('facsActiveStrip');
    if(!strip) return;
    strip.innerHTML='';
    const entries=activeEntries();
    if(!entries.length){
      const empty=document.createElement('span');
      empty.className='facs-empty-state';
      empty.textContent='No active codes — neutral face.';
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
    const region=$('facsFocusRegion');
    const muscle=$('facsFocusMuscle');
    const renderer=$('facsFocusRenderer');
    const remove=$('facsRemoveFocused');

    if(!entry){
      if(focusCode)focusCode.textContent='No code selected';
      if(title)title.textContent='Choose a FACS code';
      if(movement)movement.textContent='Select a code from the library to add it to the face and edit its settings.';
      if(region)region.textContent='—';
      if(muscle)muscle.textContent='—';
      if(renderer)renderer.textContent='—';
      if(remove)remove.disabled=true;
      renderIntensity(null);
      renderSide(null);
      return;
    }

    if(focusCode)focusCode.textContent=compactEntry(entry);
    if(title)title.textContent=entry.unit.name;
    if(movement)movement.textContent=entry.unit.movement;
    if(region)region.textContent=entry.unit.region;
    if(muscle)muscle.textContent=entry.unit.muscles;
    if(renderer)renderer.textContent=entry.unit.render?'Illustrated in movement model':'Reference only';
    if(remove)remove.disabled=false;
    renderIntensity(entry);
    renderSide(entry);
  }

  function renderIntensity(entry){
    const buttons=Array.from(document.querySelectorAll('#facsIntensityButtons [data-intensity]'));
    const status=$('facsIntensityStatus');
    const enabled=!!(entry && entry.unit.intensity);
    buttons.forEach(button=>{
      button.disabled=!enabled;
      button.setAttribute('aria-pressed',enabled && button.dataset.intensity===entry.intensity?'true':'false');
    });
    if(status){
      if(!entry) status.textContent='Select an intensity-scored AU';
      else status.textContent=entry.unit.intensity ? 'A trace → E maximum' : 'Not intensity-scored here';
    }
  }

  function renderSide(entry){
    const buttons=Array.from(document.querySelectorAll('#facsSideButtons [data-side]'));
    const status=$('facsSideStatus');
    const enabled=!!(entry && entry.unit.laterality);
    buttons.forEach(button=>{
      button.disabled=!enabled;
      button.setAttribute('aria-pressed',enabled && button.dataset.side===entry.side?'true':'false');
    });
    if(status){
      if(!entry) status.textContent='Select a lateral movement';
      else status.textContent=entry.unit.laterality ? 'Bilateral or unilateral' : 'No side setting';
    }
  }

  function renderCombination(){
    const entries=activeEntries();
    const combination=entries.length?entries.map(compactEntry).join(' + '):'Neutral';
    const combinationEl=$('facsCombination');
    const readout=$('facsCodeReadout');
    if(combinationEl)combinationEl.textContent=combination;
    if(readout)readout.textContent=combination;
    const desc=$('facsFaceDesc');
    if(desc){
      desc.textContent=entries.length
        ? 'Diagrammatic face showing '+entries.map(entry=>compactEntry(entry)+' '+entry.unit.name).join(', ')+'.'
        : 'Neutral diagrammatic face with no active FACS codes.';
    }
  }

  function renderFace(){
    if(RENDERER && typeof RENDERER.render==='function'){
      RENDERER.render(activeEntries());
    }
  }

  function renderAll(){
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
      if(state.focused===code){
        state.active.delete(code);
        state.focused=activeEntries().length?activeEntries()[activeEntries().length-1].unit.code:null;
      }else{
        state.focused=code;
      }
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
    renderCategoryOptions();

    const search=$('facsSearch');
    if(search){
      search.addEventListener('input',()=>{
        state.query=search.value||'';
        renderLibrary();
      });
    }

    const category=$('facsCategory');
    if(category){
      category.addEventListener('change',()=>{
        state.category=category.value||'all';
        renderLibrary();
      });
    }

    const clear=$('facsClearAll');
    if(clear) clear.addEventListener('click',clearAll);

    const remove=$('facsRemoveFocused');
    if(remove) remove.addEventListener('click',removeFocused);

    document.querySelectorAll('#facsIntensityButtons [data-intensity]').forEach(button=>{
      button.addEventListener('click',()=>setIntensity(button.dataset.intensity));
    });

    document.querySelectorAll('#facsSideButtons [data-side]').forEach(button=>{
      button.addEventListener('click',()=>setSide(button.dataset.side));
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
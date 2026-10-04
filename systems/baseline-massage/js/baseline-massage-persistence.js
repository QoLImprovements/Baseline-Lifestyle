(function(scope){
  'use strict';

  const document = scope.document;
  if(!document || document.documentElement?.dataset?.app !== 'massage') return;

  const api = scope.BASELINE_api;
  const endpoint = '/systems/baseline-massage/api/massage_data.php';
  const resource = 'massage';
  let hydrating = true;
  let canSave = false;
  let saveBlocked = false;
  let saveTimer = null;
  let saveInFlight = false;
  let saveQueued = false;

  function qs(selector, root){ return (root || document).querySelector(selector); }
  function qsa(selector, root){ return Array.from((root || document).querySelectorAll(selector)); }

  function status(message){
    const node = qs('#massageSaveStatus');
    if(node) node.textContent = message;
  }

  function checkboxKey(control){
    if(control.id) return 'id:' + control.id;
    if(control.hasAttribute('data-focused-area')) return 'focused:' + String(control.value || '');
    if(control.hasAttribute('data-sensory-check')) return 'sensory:' + String(control.getAttribute('data-sensory-check') || '');
    if(control.hasAttribute('data-area-check')) return 'area:' + String(control.getAttribute('data-area-check') || '');
    return '';
  }

  function checkboxForKey(key){
    if(key.startsWith('id:')) return qs('#' + CSS.escape(key.slice(3)));
    const separator = key.indexOf(':');
    if(separator < 0) return null;
    const kind = key.slice(0, separator);
    const value = key.slice(separator + 1);
    if(kind === 'focused') return qsa('[data-focused-area]').find(el => String(el.value || '') === value) || null;
    if(kind === 'sensory') return qsa('[data-sensory-check]').find(el => String(el.getAttribute('data-sensory-check') || '') === value) || null;
    if(kind === 'area') return qsa('[data-area-check]').find(el => String(el.getAttribute('data-area-check') || '') === value) || null;
    return null;
  }

  function capture(){
    const fields = {};
    qsa('#planner input[id]:not([type="checkbox"]), #planner select[id], #planner textarea[id]').forEach(control => {
      fields[control.id] = String(control.value ?? '');
    });

    const checks = {};
    qsa('#planner input[type="checkbox"]').forEach(control => {
      const key = checkboxKey(control);
      if(key) checks[key] = !!control.checked;
    });

    const areaTimes = {};
    qsa('#planner [data-area-time]').forEach(control => {
      const key = String(control.getAttribute('data-area-time') || '').trim();
      if(key) areaTimes[key] = Math.max(0, Number(control.value) || 0);
    });

    const selectedPlanner = qs('[data-planner-mode][aria-selected="true"]');
    const selectedLibrary = qs('[data-library-category][aria-selected="true"]');

    return {
      schemaVersion:1,
      plannerMode:selectedPlanner?.dataset?.plannerMode || 'provider',
      libraryCategory:selectedLibrary?.dataset?.libraryCategory || 'Massage Techniques',
      fields,
      checks,
      areaTimes,
    };
  }

  function setField(id, value){
    const control = qs('#' + CSS.escape(id));
    if(!control) return;
    const stringValue = String(value ?? '');
    if(control.tagName === 'SELECT' && !Array.from(control.options).some(option => option.value === stringValue)) return;
    control.value = stringValue;
  }

  function dispatchChange(control){
    if(control) control.dispatchEvent(new Event('change', { bubbles:true }));
  }

  function apply(documentState){
    if(!documentState || typeof documentState !== 'object') return;

    const plannerButton = qs('[data-planner-mode="' + CSS.escape(String(documentState.plannerMode || 'provider')) + '"]');
    if(plannerButton) plannerButton.click();

    const libraryButton = qsa('[data-library-category]').find(
      button => button.dataset.libraryCategory === String(documentState.libraryCategory || '')
    );
    if(libraryButton) libraryButton.click();

    const fields = documentState.fields && typeof documentState.fields === 'object' ? documentState.fields : {};

    for(const id of ['providerMassageStyle','focusedMassageStyle','massageStyle','flowStructure']){
      if(Object.prototype.hasOwnProperty.call(fields, id)){
        setField(id, fields[id]);
        dispatchChange(qs('#' + CSS.escape(id)));
      }
    }

    Object.entries(fields).forEach(([id, value]) => setField(id, value));

    qsa('#planner [data-custom-select]').forEach(dispatchChange);
    dispatchChange(qs('#flowStructure'));
    qsa('#planner [data-style-select]').forEach(dispatchChange);

    Object.entries(fields).forEach(([id, value]) => setField(id, value));

    const checks = documentState.checks && typeof documentState.checks === 'object' ? documentState.checks : {};
    Object.entries(checks).forEach(([key, checked]) => {
      const control = checkboxForKey(key);
      if(control) control.checked = checked === true;
    });

    const areaTimes = documentState.areaTimes && typeof documentState.areaTimes === 'object' ? documentState.areaTimes : {};
    Object.entries(areaTimes).forEach(([name, minutes]) => {
      const control = qsa('#planner [data-area-time]').find(
        el => String(el.getAttribute('data-area-time') || '') === name
      );
      if(control) control.value = String(Math.max(0, Number(minutes) || 0));
    });

    qsa('#planner [data-area-check]').forEach(dispatchChange);
    dispatchChange(qs('#massagePlannerForm'));
  }

  async function load(){
    if(!api || typeof api.get !== 'function'){
      hydrating = false;
      saveBlocked = true;
      status('Account saving is unavailable. No browser copy has been created.');
      return;
    }

    const result = await api.get(endpoint);
    if(result.status === 401){
      hydrating = false;
      canSave = false;
      status('Sign in to save massage preferences to your account.');
      return;
    }

    if(!result.ok || !result.data){
      hydrating = false;
      saveBlocked = true;
      status('Massage preferences could not be loaded. Saving has been stopped to protect the account copy.');
      return;
    }

    api.revisions?.remember?.(resource, result.data);
    if(result.data.found && result.data.document) apply(result.data.document);
    hydrating = false;
    canSave = true;
    status(result.data.found ? 'Massage preferences loaded from your account.' : 'Massage preferences will save to your account when changed.');
  }

  function queueSave(){
    if(hydrating || !canSave || saveBlocked) return;
    saveQueued = true;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(flushSave, 450);
  }

  async function flushSave(){
    if(hydrating || !canSave || saveBlocked || !saveQueued) return;
    if(saveInFlight) return;

    saveQueued = false;
    saveInFlight = true;
    status('Saving massage preferences…');

    const body = api.revisions?.withExpected
      ? api.revisions.withExpected(resource, { action:'save', document:capture() })
      : { action:'save', document:capture(), expectedRevision:0 };

    const result = await api.post(endpoint, body);
    saveInFlight = false;

    if(result.ok && result.data){
      api.revisions?.remember?.(resource, result.data);
      status('Massage preferences saved to your account.');
      if(saveQueued) flushSave();
      return;
    }

    if(result.status === 401){
      canSave = false;
      status('Sign in to save massage preferences to your account.');
      return;
    }

    if(result.status === 409 || result.data?.error === 'revision_conflict'){
      saveBlocked = true;
      status('Saving stopped because the account copy changed elsewhere. Refresh to load the latest account copy before editing again.');
      return;
    }

    saveBlocked = true;
    status('Massage preferences were not saved. Saving has stopped rather than risk overwriting the account copy.');
  }

  function bind(){
    const planner = qs('#planner');
    if(planner){
      planner.addEventListener('input', queueSave);
      planner.addEventListener('change', queueSave);
      planner.addEventListener('click', event => {
        if(event.target.closest('[data-planner-mode], [data-simple-clear], #clearMassagePlanner')){
          setTimeout(queueSave, 0);
        }
      });
    }

    const libraryTabs = qs('#massageLibraryTabs');
    if(libraryTabs){
      libraryTabs.addEventListener('click', event => {
        if(event.target.closest('[data-library-category]')) setTimeout(queueSave, 0);
      });
    }
  }

  bind();
  load();
})(window);

/* Baseline Lifestyle — live route, first-paint and persistence stability. */
(function(){
  'use strict';

  const BUILD = 'BASELINE_LIVE_STABILITY_20260806_3';
  if(window.__BASELINE_LIVE_STABILITY__) return;
  window.__BASELINE_LIVE_STABILITY__ = BUILD;
  try{ document.documentElement.setAttribute('data-baseline-live-stability', BUILD); }catch(_error){}

  const RECIPE_PENDING_KEY = '__baseline_pending_recipe_route_v1__';
  const FITNESS_BODY_VIEW_KEY = '__baseline_fitness_body_view_v1__';
  const BADMINTON_STORAGE_KEY = '__baseline_badminton_session_v4__';
  const BADMINTON_API = '/systems/baseline-badminton-session/api/badminton_session.php';

  function safeJson(raw, fallback){
    try{ return JSON.parse(String(raw || '')); }catch(_error){ return fallback; }
  }

  function cssEscape(value){
    const text = String(value || '');
    try{ if(window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(text); }catch(_error){}
    return text.replace(/(["\\])/g, '\\$1');
  }

  function currentRecipeRoute(){
    const match = String(location.pathname || '').match(/^\/(baseline-food-approach|baseline-natural-skincare)\/recipes\/([^/?#]+)\/?$/i);
    if(!match) return null;
    let slug = match[2];
    try{ slug = decodeURIComponent(slug); }catch(_error){}
    return { app:match[1].toLowerCase(), slug:String(slug || '').trim().toLowerCase() };
  }

  function redirectStandaloneRecipeShell(){
    const route = currentRecipeRoute();
    if(!route || !route.slug) return false;
    const standalone = document.body && (
      document.body.classList.contains('phase4b-recipe-shell') ||
      document.querySelector('.phase4b-recipe-shell, .recipe-shell-topbar')
    );
    if(!standalone) return false;
    try{ sessionStorage.setItem(RECIPE_PENDING_KEY, JSON.stringify(route)); }catch(_error){}
    const target = route.app === 'baseline-natural-skincare'
      ? '/baseline-natural-skincare/recipes'
      : '/baseline-food-approach/recipes';
    location.replace(target);
    return true;
  }

  function restorePendingRecipe(){
    let pending = null;
    try{ pending = safeJson(sessionStorage.getItem(RECIPE_PENDING_KEY), null); }catch(_error){}
    if(!pending || !pending.slug) return;
    const path = String(location.pathname || '').toLowerCase();
    const expectedBase = pending.app === 'baseline-natural-skincare'
      ? '/baseline-natural-skincare/'
      : '/baseline-food-approach/';
    if(path.indexOf(expectedBase) !== 0) return;

    let attempts = 0;
    const open = function(){
      attempts += 1;
      const selector = '[data-recipe-slug="' + cssEscape(pending.slug) + '"]';
      const card = document.querySelector(selector);
      const recipeId = card && (card.id || card.getAttribute('data-recipe-id'));
      if(card && recipeId && typeof window.BASELINE_openRecipe === 'function'){
        try{ sessionStorage.removeItem(RECIPE_PENDING_KEY); }catch(_error){}
        window.BASELINE_openRecipe(recipeId, { silentHistory:false, noScroll:true });
        return;
      }
      if(attempts < 80) window.setTimeout(open, 50);
    };
    open();
  }

  function installFastHomeNavigation(){
    document.addEventListener('click', function(event){
      if(event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
      if(!link) return;
      let url;
      try{ url = new URL(link.href, location.href); }catch(_error){ return; }
      if(url.origin !== location.origin || url.pathname !== '/home/1') return;
      if(String(location.pathname || '') === '/home/1') return;
      event.preventDefault();
      event.stopImmediatePropagation();
      location.assign('/home/1');
    }, true);
  }

  function installFitnessBodyViewMemory(){
    if(!document.body || document.body.dataset.app !== 'fitness') return;

    document.addEventListener('click', function(event){
      const button = event.target && event.target.closest ? event.target.closest('[data-body-view]') : null;
      if(!button) return;
      const view = String(button.getAttribute('data-body-view') || '').trim();
      if(!view) return;
      try{ sessionStorage.setItem(FITNESS_BODY_VIEW_KEY, view); }catch(_error){}
    }, true);

    if(!/\/baseline-fitness\/my-body\/?$/i.test(String(location.pathname || ''))) return;
    let saved = '';
    try{ saved = String(sessionStorage.getItem(FITNESS_BODY_VIEW_KEY) || ''); }catch(_error){}
    if(!saved || saved === 'overall') return;

    let attempts = 0;
    const restore = function(){
      attempts += 1;
      const button = document.querySelector('[data-body-view="' + cssEscape(saved) + '"]');
      if(button){
        const selected = button.getAttribute('aria-selected') === 'true';
        if(!selected) button.click();
        return;
      }
      if(attempts < 50) window.setTimeout(restore, 60);
    };
    window.setTimeout(restore, 0);
  }

  function markGamesStable(){
    if(!document.body || document.body.dataset.app !== 'games') return;
    document.documentElement.removeAttribute('data-baseline-games-stable');
    const startedAt = Date.now();
    const finish = function(){
      const list = document.getElementById('gamesList');
      const auth = document.getElementById('authStateNote');
      const ready = !!(
        document.documentElement.getAttribute('data-baseline-games-hub-js') &&
        list && list.children.length &&
        auth && String(auth.textContent || '').trim()
      );
      if(ready || Date.now() - startedAt > 2600){
        requestAnimationFrame(function(){
          requestAnimationFrame(function(){
            document.documentElement.setAttribute('data-baseline-games-stable','true');
          });
        });
        return;
      }
      window.setTimeout(finish, 50);
    };
    finish();
  }

  function correctVoiceConfigurationMessage(){
    if(!document.body || document.body.dataset.app !== 'fitness') return;
    const update = function(){
      const prompt = document.getElementById('voiceWorkoutPrompt');
      if(!prompt) return;
      const message = String(prompt.textContent || '').trim();
      if([
        'Enhanced voice recognition is not configured on the server.',
        'Voice recognition could not connect. Spoken responses are off, but that setting does not disable recognition.'
      ].includes(message)){
        prompt.textContent = 'Voice recognition unavailable.';
      }
    };
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList:true, subtree:true, characterData:true });
    update();
  }

  function installUnifiedFavoritesDropdown(){
    let frame = 0;
    let sourceObserver = null;
    let discoveryObserver = null;
    let observedFood = null;
    let observedSkin = null;

    function schedule(){
      if(frame) return;
      frame = window.requestAnimationFrame(function(){
        frame = 0;
        patch();
      });
    }

    function realOptions(select){
      if(!select) return [];
      return Array.from(select.options || []).filter(function(option){
        return String(option.value || '').trim() && !option.disabled;
      });
    }

    function rebuild(unified, food, skin){
      const current = String(unified.value || '');
      const groups = [
        { label:'Food', prefix:'food', source:food },
        { label:'Natural Skincare', prefix:'skincare', source:skin }
      ];
      const records = groups.map(function(group){
        return {
          label:group.label,
          prefix:group.prefix,
          options:realOptions(group.source).map(function(option){
            return { value:String(option.value || ''), label:String(option.textContent || option.value || '') };
          })
        };
      });
      const available = records.reduce(function(total, group){ return total + group.options.length; }, 0);
      const signature = JSON.stringify(records);
      if(unified.dataset.blFavoritesSignature !== signature){
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = available ? 'Choose a favorite…' : 'No favorites saved';
        unified.replaceChildren(placeholder);
        records.forEach(function(group){
          if(!group.options.length) return;
          const optgroup = document.createElement('optgroup');
          optgroup.label = group.label;
          group.options.forEach(function(record){
            const option = document.createElement('option');
            option.value = group.prefix + ':' + record.value;
            option.textContent = record.label;
            optgroup.appendChild(option);
          });
          unified.appendChild(optgroup);
        });
        unified.dataset.blFavoritesSignature = signature;
      }
      unified.disabled = !available;
      if(Array.from(unified.options).some(function(option){ return option.value === current; })) unified.value = current;
      else unified.value = '';
    }

    function observeSources(food, skin, unified){
      if(observedFood === food && observedSkin === skin && sourceObserver) return;
      if(sourceObserver) sourceObserver.disconnect();
      observedFood = food;
      observedSkin = skin;
      sourceObserver = new MutationObserver(function(){ rebuild(unified, food, skin); });
      [food, skin].filter(Boolean).forEach(function(select){
        sourceObserver.observe(select, { childList:true, subtree:true, attributes:true, attributeFilter:['disabled'] });
      });
    }

    function patch(){
      const links = document.getElementById('bl-fav-links');
      const food = document.getElementById('bl-favs-food-select');
      const skin = document.getElementById('bl-favs-skin-select');
      if(!links || !food || !skin) return;
      if(discoveryObserver){ discoveryObserver.disconnect(); discoveryObserver = null; }

      let field = links.querySelector('[data-bl-unified-favorites="true"]');
      if(!field){
        field = document.createElement('div');
        field.className = 'bl-auth-fieldgroup';
        field.dataset.blUnifiedFavorites = 'true';
        field.innerHTML = '<label for="bl-favorites-select">Favorites</label><select id="bl-favorites-select" aria-label="Favorites"></select>';
        const fitness = links.querySelector('.bl-auth-fitness-link-wrap');
        links.insertBefore(field, fitness || links.firstChild);
      }
      const unified = field.querySelector('#bl-favorites-select');
      if(!unified) return;

      [food, skin].forEach(function(select){
        const sourceField = select.closest('.bl-auth-fieldgroup');
        if(sourceField && sourceField !== field){
          sourceField.hidden = true;
          sourceField.setAttribute('aria-hidden','true');
        }
      });

      if(unified.dataset.blFavoritesBound !== 'true'){
        unified.dataset.blFavoritesBound = 'true';
        unified.addEventListener('change', function(){
          const value = String(unified.value || '');
          const divider = value.indexOf(':');
          if(divider < 1) return;
          const category = value.slice(0, divider);
          const recipeId = value.slice(divider + 1);
          const source = category === 'food' ? food : category === 'skincare' ? skin : null;
          if(source && recipeId){
            source.value = recipeId;
            source.dispatchEvent(new Event('change', { bubbles:true }));
          }
          unified.value = '';
        });
      }
      rebuild(unified, food, skin);
      observeSources(food, skin, unified);
    }

    discoveryObserver = new MutationObserver(schedule);
    discoveryObserver.observe(document.documentElement, { childList:true, subtree:true });
    [0,120,500,1200].forEach(function(delay){ window.setTimeout(schedule, delay); });
  }

  function installRoutineInterfaceRepairs(){
    if(!document.body || !['skin','fitness'].includes(String(document.body.dataset.app || ''))) return;
    let frame = 0;

    function currentOwner(){
      try{
        const snapshot = window.BASELINE_auth && typeof window.BASELINE_auth.get === 'function' ? window.BASELINE_auth.get() : null;
        if(snapshot && snapshot.authed) return String(snapshot.name || (snapshot.user && snapshot.user.name) || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
      }catch(_error){}
      return 'guest';
    }

    function skinGroupData(){
      let value = {};
      try{ value = safeJson(localStorage.getItem('__bl_skincare_routine_groups_v3__::' + currentOwner()), {}) || {}; }catch(_error){}
      return {
        groups:Array.isArray(value.groups) ? value.groups.filter(function(group){ return group && group.id && group.title; }) : [],
        assignments:value.assignments && typeof value.assignments === 'object' ? value.assignments : {}
      };
    }

    function fitnessAssignments(){
      try{
        const settings = window.BASELINE_RoutineSystem && typeof window.BASELINE_RoutineSystem.readSettings === 'function'
          ? window.BASELINE_RoutineSystem.readSettings(currentOwner())
          : {};
        return settings && settings.fitnessRoutineAssignments && typeof settings.fitnessRoutineAssignments === 'object'
          ? settings.fitnessRoutineAssignments
          : {};
      }catch(_error){ return {}; }
    }

    function injectStyle(){
      if(document.getElementById('baselineFinalRoutineRepairsCss')) return;
      const style = document.createElement('style');
      style.id = 'baselineFinalRoutineRepairsCss';
      style.textContent = `
        .bl-v4-public-card{gap:1rem!important}
        .bl-final-public-title-row{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;grid-template-rows:auto auto!important;column-gap:1rem!important;row-gap:.35rem!important;align-items:start!important}
        .bl-final-public-title-row>h2{grid-column:1!important;grid-row:1!important;margin-bottom:0!important}
        .bl-final-public-title-row>p{grid-column:1!important;grid-row:2!important;margin:0!important}
        .bl-final-public-title-row>.bl-release-public-visibility{grid-column:2!important;grid-row:1 / span 2!important;align-self:start!important;justify-self:end!important;margin:0!important;flex-wrap:nowrap!important}
        .bl-v4-public-controls,.routine-public-select{margin-top:0!important}
        .routine-log-head,.fitness-routine-log-head{display:grid!important;grid-template-columns:minmax(0,1fr) auto auto!important;align-items:start!important;gap:1rem!important;width:100%!important;max-width:100%!important;overflow:visible!important}
        .routine-log-head>div:first-child,.fitness-routine-log-head>div:first-child{min-width:0!important}
        .routine-log-head>label,.fitness-routine-log-head>label{min-width:190px!important;justify-self:end!important}
        .bl-v4-settings-button{position:static!important;inset:auto!important;display:inline-flex!important;width:auto!important;min-width:max-content!important;max-width:none!important;min-height:44px!important;align-items:center!important;justify-content:center!important;align-self:start!important;justify-self:end!important;white-space:nowrap!important;overflow:visible!important;clip:auto!important;z-index:3!important}
        .bl-v4-settings-panel{grid-column:1 / -1!important;width:100%!important}
        .bl-final-log-group-head{display:flex!important;align-items:center!important;gap:.75rem!important;flex-wrap:wrap!important}
        .bl-final-group-complete{display:inline-flex!important;align-items:center!important;gap:.5rem!important;margin-left:auto!important;font-weight:800!important;white-space:nowrap!important}
        .bl-final-group-complete input{width:1.2rem!important;height:1.2rem!important;flex:0 0 auto!important}
        @media(max-width:760px){
          .bl-final-public-title-row{grid-template-columns:1fr!important}
          .bl-final-public-title-row>.bl-release-public-visibility{grid-column:1!important;grid-row:3!important;justify-self:start!important}
          .routine-log-head,.fitness-routine-log-head{grid-template-columns:1fr!important}
          .routine-log-head>label,.fitness-routine-log-head>label,.bl-v4-settings-button{justify-self:start!important}
        }
      `;
      document.head.appendChild(style);
    }

    function patchPublicCard(){
      const app = String(document.body.dataset.app || '');
      const panel = app === 'skin'
        ? document.querySelector('[data-routine-panel="public"]')
        : document.querySelector('[data-fitness-routine-panel="public"]');
      const card = panel && panel.querySelector(app === 'skin' ? '.routine-card' : '.fitness-routine-card');
      if(!card) return;
      const header = Array.from(card.children).find(function(child){ return child.querySelector && child.querySelector('h2'); });
      const visibility = card.querySelector('.bl-release-public-visibility');
      if(!header || !visibility) return;
      header.classList.add('bl-final-public-title-row');
      if(visibility.parentElement !== header) header.appendChild(visibility);
    }

    function patchSettings(){
      document.querySelectorAll('[data-v4-settings-toggle]').forEach(function(button){
        button.type = 'button';
        button.textContent = 'Settings';
        button.hidden = false;
        button.removeAttribute('aria-hidden');
      });
    }

    function patchSkinLog(){
      const target = document.getElementById('routineLogItems');
      if(!target) return;
      const data = skinGroupData();
      const byTitle = new Map(data.groups.map(function(group, index){
        return [String(group.title).trim().toLocaleLowerCase('en-GB'), { group:group, number:index + 1 }];
      }));

      target.querySelectorAll('.routine-log-group').forEach(function(section){
        const directHeading = section.querySelector(':scope > h3');
        const head = section.querySelector(':scope > .routine-log-group-head') || (directHeading && directHeading.parentElement);
        const heading = head && head.querySelector('h3');
        const record = heading ? byTitle.get(String(heading.textContent || '').trim().toLocaleLowerCase('en-GB')) : null;
        if(!head || !heading || !record) return;

        head.classList.add('bl-final-log-group-head');
        head.querySelectorAll(':scope > .bl-v4-number[data-release-number="true"]').forEach(function(node){ node.remove(); });
        let badge = head.querySelector(':scope > .bl-v4-number[data-final-group-number="true"]');
        if(!badge){
          badge = document.createElement('span');
          badge.className = 'bl-v4-number';
          badge.dataset.finalGroupNumber = 'true';
          heading.insertAdjacentElement('beforebegin', badge);
        }
        if(badge.textContent !== String(record.number)) badge.textContent = String(record.number);
        badge.setAttribute('aria-label', record.number + '. ' + record.group.title);

        section.querySelectorAll('.routine-log-item .routine-log-check > span > .bl-v4-number').forEach(function(node){ node.remove(); });
        const boxes = Array.from(section.querySelectorAll('.routine-log-item [data-log-complete]'));
        const ids = boxes.map(function(box){ return String(box.dataset.logComplete || ''); }).filter(Boolean);
        let label = head.querySelector(':scope > .bl-final-group-complete');
        if(!label){
          label = document.createElement('label');
          label.className = 'bl-final-group-complete';
          label.innerHTML = '<input type="checkbox" data-final-group-complete="true"><span>Complete group</span>';
          head.appendChild(label);
        }
        const groupBox = label.querySelector('[data-final-group-complete]');
        if(!groupBox) return;
        const checked = boxes.filter(function(box){ return box.checked; }).length;
        groupBox.dataset.itemIds = JSON.stringify(ids);
        groupBox.checked = boxes.length > 0 && checked === boxes.length;
        groupBox.indeterminate = checked > 0 && checked < boxes.length;
        groupBox.disabled = boxes.length === 0;
        groupBox.setAttribute('aria-label', 'Mark all actions in ' + record.group.title + ' complete');
      });
    }

    function patchFitnessLog(){
      const assignments = fitnessAssignments();
      document.querySelectorAll('#fitnessRoutineLogItems [data-release-entity]').forEach(function(card){
        const key = String(card.dataset.releaseEntity || '');
        if(!assignments[key]) return;
        card.querySelectorAll('.fitness-log-completion > span > .bl-v4-number[data-release-number="true"], :scope > div > .bl-v4-number[data-release-number="true"]').forEach(function(node){ node.remove(); });
      });
    }

    function patch(){
      injectStyle();
      patchPublicCard();
      patchSettings();
      if(String(document.body.dataset.app || '') === 'skin') patchSkinLog();
      else patchFitnessLog();
    }

    function schedule(){
      if(frame) return;
      frame = window.requestAnimationFrame(function(){ frame = 0; patch(); });
    }

    function setSkinGroupCompletion(itemIds, checked){
      const remaining = Array.isArray(itemIds) ? itemIds.slice() : [];
      function next(){
        if(!remaining.length){ schedule(); return; }
        const id = String(remaining.shift() || '');
        const box = document.querySelector('#routineLogItems [data-log-complete="' + cssEscape(id) + '"]');
        if(box && box.checked !== checked){
          box.checked = checked;
          box.dispatchEvent(new Event('change', { bubbles:true }));
        }
        window.setTimeout(next, 0);
      }
      next();
    }

    document.addEventListener('change', function(event){
      const box = event.target && event.target.closest ? event.target.closest('[data-final-group-complete]') : null;
      if(!box) return;
      event.stopPropagation();
      if(typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
      setSkinGroupCompletion(safeJson(box.dataset.itemIds, []), Boolean(box.checked));
    }, true);

    document.addEventListener('click', function(event){
      const button = event.target && event.target.closest ? event.target.closest('[data-v4-settings-toggle]') : null;
      if(!button) return;
      const system = String(button.dataset.v4SettingsToggle || '');
      const before = button.getAttribute('aria-expanded');
      window.setTimeout(function(){
        const current = document.querySelector('[data-v4-settings-toggle="' + cssEscape(system) + '"]');
        const panel = document.querySelector('[data-v4-settings-panel="' + cssEscape(system) + '"]');
        if(!current || !panel || current.getAttribute('aria-expanded') !== before) return;
        panel.hidden = !panel.hidden;
        current.setAttribute('aria-expanded', panel.hidden ? 'false' : 'true');
      }, 0);
    }, true);

    const observer = new MutationObserver(schedule);
    observer.observe(document.getElementById(String(document.body.dataset.app || '') === 'skin' ? 'routine' : 'my-plan') || document.body, { childList:true, subtree:true });
    ['baseline:skincare-routine-updated','baseline:fitness-plans-updated','baseline:fitness-workout-updated','baseline:routine-settings-changed'].forEach(function(name){
      document.addEventListener(name, schedule);
    });
    [0,100,300,800,1600].forEach(function(delay){ window.setTimeout(schedule, delay); });
  }

  function installDetectWordFeedbackRepair(){
    if(!document.body || document.body.dataset.app !== 'games') return;
    if(!document.getElementById('baselineDetectWordFeedbackRepairCss')){
      const style = document.createElement('style');
      style.id = 'baselineDetectWordFeedbackRepairCss';
      style.textContent = `
        body[data-app="games"] :is(.letter-cell.correct,.word-feedback-dot--correct){background:#2F7A62!important;background-image:none!important;border-color:#83D8B9!important;color:#FFFFFF!important;-webkit-text-fill-color:#FFFFFF!important}
        body[data-app="games"] :is(.letter-cell.present,.word-feedback-dot--present){background:#A96F16!important;background-image:none!important;border-color:#F0C56B!important;color:#FFF9EA!important;-webkit-text-fill-color:#FFF9EA!important}
        body[data-app="games"] :is(.letter-cell.absent,.word-feedback-dot--absent){background:#111936!important;background-image:none!important;border-color:#5F72BC!important;color:#D7DFF6!important;-webkit-text-fill-color:#D7DFF6!important}
      `;
      document.head.appendChild(style);
    }

    let frame = 0;
    function sync(){
      frame = 0;
      const states = [
        { className:'correct', label:'Correct place' },
        { className:'present', label:'In word, different place' },
        { className:'absent', label:'Not in word' }
      ];
      states.forEach(function(state){
        document.querySelectorAll('.letter-cell.' + state.className).forEach(function(cell){
          const letter = String(cell.textContent || '').trim();
          cell.dataset.wordFeedback = state.className;
          cell.title = state.label;
          cell.setAttribute('aria-label', (letter ? letter + ': ' : '') + state.label);
        });
        document.querySelectorAll('.word-feedback-dot--' + state.className).forEach(function(dot){
          dot.dataset.wordFeedback = state.className;
          dot.title = state.label;
        });
      });
    }
    function schedule(){
      if(frame) return;
      frame = window.requestAnimationFrame(sync);
    }
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList:true, subtree:true });
    [0,150,500].forEach(function(delay){ window.setTimeout(schedule, delay); });
  }

  function installBadmintonSavedDataReconciliation(){
    if(!document.body || document.body.dataset.app !== 'badminton' || !window.fetch) return;
    let lastObserved = 0;
    let inFlight = false;
    let revision = null;
    let booted = false;

    function localState(){
      let raw = '';
      try{ raw = localStorage.getItem(BADMINTON_STORAGE_KEY) || ''; }catch(_error){}
      const parsed = safeJson(raw, null);
      return parsed && typeof parsed === 'object' ? parsed : null;
    }

    async function request(method, body){
      const options = { method:method, credentials:'same-origin', headers:{ Accept:'application/json' } };
      if(body !== undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
      }
      const response = await fetch(BADMINTON_API, options);
      const data = await response.json().catch(function(){ return { ok:false, error:'bad_json' }; });
      data.__status = response.status;
      return data;
    }

    function announceFailure(error){
      const text = 'Badminton could not save to the server' + (error ? ': ' + error : '.');
      const status = document.querySelector('[data-plan-alert], #planAlert, .plan-alert');
      if(status) status.textContent = text;
      try{ console.error(text); }catch(_error){}
    }

    async function reconcile(force){
      if(inFlight) return;
      const local = localState();
      if(!local) return;
      const updatedAt = Number(local.localUpdatedAt || 0) || 0;
      if(!force && (!booted || updatedAt <= lastObserved)){
        lastObserved = Math.max(lastObserved, updatedAt);
        booted = true;
        return;
      }
      inFlight = true;
      try{
        const remote = await request('GET');
        if(remote && remote.ok){
          if(Number.isInteger(Number(remote.revision))) revision = Number(remote.revision);
          const remoteUpdatedAt = Number(remote.state && remote.state.localUpdatedAt || 0) || 0;
          if(remoteUpdatedAt >= updatedAt){
            lastObserved = updatedAt;
            booted = true;
            return;
          }
        }
        let payload = { state:local };
        if(Number.isInteger(revision) && revision >= 0) payload.expectedRevision = revision;
        let saved = await request('POST', payload);
        if(saved && saved.error === 'revision_conflict'){
          const latest = await request('GET');
          if(latest && latest.ok && Number.isInteger(Number(latest.revision))){
            revision = Number(latest.revision);
            saved = await request('POST', { state:local, expectedRevision:revision });
          }
        }
        if(!saved || !saved.ok){
          announceFailure(saved && (saved.error || saved.__status));
          return;
        }
        if(Number.isInteger(Number(saved.revision))) revision = Number(saved.revision);
        lastObserved = updatedAt;
        booted = true;
      }catch(error){
        announceFailure(error && error.message ? error.message : 'network error');
      }finally{
        inFlight = false;
      }
    }

    const initial = localState();
    lastObserved = Number(initial && initial.localUpdatedAt || 0) || 0;
    booted = true;
    window.setInterval(function(){ reconcile(false); }, 850);
    document.addEventListener('click', function(event){
      const button = event.target && event.target.closest ? event.target.closest('[data-save-court]') : null;
      if(button) window.setTimeout(function(){ reconcile(true); }, 700);
    }, true);
  }

  function boot(){
    if(redirectStandaloneRecipeShell()) return;
    installFastHomeNavigation();
    restorePendingRecipe();
    installFitnessBodyViewMemory();
    markGamesStable();
    correctVoiceConfigurationMessage();
    installUnifiedFavoritesDropdown();
    installRoutineInterfaceRepairs();
    installDetectWordFeedbackRepair();
    installBadmintonSavedDataReconciliation();
  }

  if(document.body) boot();
  else document.addEventListener('DOMContentLoaded', boot, { once:true });
})();

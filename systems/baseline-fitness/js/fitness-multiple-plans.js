/* Baseline Fitness — multiple calisthenics plans and plan-specific progression controls. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_MULTIPLE_PLANS__) return;
  global.__BASELINE_FITNESS_MULTIPLE_PLANS__ = true;

  const API = '/systems/baseline-fitness/api';
  const SELECTED_PREFIX = '__bl_fitness_selected_plan_v1__::';
  const CREATE_PREFIX = '__bl_fitness_creating_plan_v1__::';
  const PLAN_CACHE_PREFIX = '__bl_fitness_plan_cache_v1__::';
  const VIEW_KEY = '__bl_fitness_routine_view_v2__';
  const nativeFetch = typeof global.fetch === 'function' ? global.fetch.bind(global) : null;
  let plans = [];
  let owner = 'guest';
  let observer = null;
  let patchFrame = 0;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function normaliseOwner(value) {
    return String(value || '').trim().toLocaleLowerCase('en-GB') || 'guest';
  }

  function authOwner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      return snapshot?.authed ? normaliseOwner(snapshot.name || snapshot.user?.name || '') : 'guest';
    } catch (_error) {
      return owner;
    }
  }

  function selectedKey() { return `${SELECTED_PREFIX}${normaliseOwner(owner)}`; }
  function createKey() { return `${CREATE_PREFIX}${normaliseOwner(owner)}`; }

  function selectedPlanId() {
    try { return Math.max(0, Number(global.localStorage?.getItem(selectedKey())) || 0); }
    catch (_error) { return 0; }
  }

  function setSelectedPlanId(value) {
    const id = Math.max(0, Number(value) || 0);
    try {
      if (id) global.localStorage?.setItem(selectedKey(), String(id));
      else global.localStorage?.removeItem(selectedKey());
    } catch (_error) {}
  }

  function isCreatingPlan() {
    try { return global.localStorage?.getItem(createKey()) === '1'; }
    catch (_error) { return false; }
  }

  function setCreatingPlan(value) {
    try {
      if (value) global.localStorage?.setItem(createKey(), '1');
      else global.localStorage?.removeItem(createKey());
    } catch (_error) {}
  }

  function clearPlanCaches() {
    try {
      const keys = [];
      for (let index = 0; index < global.localStorage.length; index += 1) {
        const key = global.localStorage.key(index) || '';
        if (key.startsWith(PLAN_CACHE_PREFIX)) keys.push(key);
      }
      keys.forEach((key) => global.localStorage.removeItem(key));
    } catch (_error) {}
  }

  function planName(plan, index = 0) {
    const name = String(plan?.planJson?.name || plan?.name || '').trim();
    return name || `Calisthenics Plan ${index + 1}`;
  }

  function selectedPlan() {
    const id = selectedPlanId();
    return plans.find((plan) => Number(plan.planId) === id) || plans[0] || null;
  }

  function responseJson(payload, status = 200) {
    return new Response(JSON.stringify(payload), {
      status,
      headers:{ 'Content-Type':'application/json', 'Cache-Control':'no-store' }
    });
  }

  function urlFor(input) {
    try {
      if (input instanceof Request) return new URL(input.url, global.location.href);
      return new URL(String(input), global.location.href);
    } catch (_error) {
      return null;
    }
  }

  function withUrl(input, url) {
    if (input instanceof Request) return new Request(url.toString(), input);
    return url.toString();
  }

  function readProgressionControls() {
    const values = new Map();
    $$('#exerciseList .ex-row').forEach((row) => {
      const exercise = String(row.querySelector('.ex-select')?.value || '').trim();
      const field = row.querySelector('.ex-rep-increase');
      if (exercise && field) values.set(exercise, Math.max(0, Math.min(1000, Math.round(Number(field.value) || 0))));
    });
    return values;
  }

  function enhancePlanJson(raw) {
    const plan = raw && typeof raw === 'object' ? Object.assign({}, raw) : {};
    const name = String($('#calisthenicsPlanName')?.value || plan.name || '').trim().slice(0, 100);
    plan.name = name || 'Calisthenics Plan';
    const increases = readProgressionControls();
    plan.items = Array.isArray(plan.items) ? plan.items.map((item) => {
      const copy = item && typeof item === 'object' ? Object.assign({}, item) : item;
      if (copy && increases.has(String(copy.exercise || ''))) copy.repIncrease = increases.get(String(copy.exercise || ''));
      return copy;
    }) : [];
    return plan;
  }

  async function enhancedWrite(input, init, url) {
    let nextInit = Object.assign({}, init || {});
    let body = null;
    if (typeof nextInit.body === 'string') {
      try { body = JSON.parse(nextInit.body); } catch (_error) {}
    }
    if (body && typeof body === 'object') {
      body.planJson = enhancePlanJson(body.planJson);
      nextInit.body = JSON.stringify(body);
    }
    const response = await nativeFetch(input, nextInit);
    if (response.ok) {
      let data = null;
      try { data = await response.clone().json(); } catch (_error) {}
      if (url.pathname.endsWith('/save_plan.php') && Number(data?.planId) > 0) setSelectedPlanId(data.planId);
      setCreatingPlan(false);
      clearPlanCaches();
      global.setTimeout(refreshPlans, 50);
    }
    return response;
  }

  if (nativeFetch) {
    global.fetch = async function (input, init = {}) {
      const url = urlFor(input);
      if (!url) return nativeFetch(input, init);

      if (url.pathname.endsWith('/get_plan.php') && !url.searchParams.has('name')) {
        if (isCreatingPlan()) return responseJson({ ok:true, hasPlan:false, has_plan:false, creatingPlan:true });
        const selected = selectedPlanId();
        if (selected) url.searchParams.set('planId', String(selected));
        let response = await nativeFetch(withUrl(input, url), init);
        if (selected && response.status === 404) {
          setSelectedPlanId(0);
          clearPlanCaches();
          url.searchParams.delete('planId');
          response = await nativeFetch(withUrl(input, url), init);
        }
        return response;
      }

      if (url.pathname.endsWith('/save_plan.php') || url.pathname.endsWith('/plan_update.php')) {
        return enhancedWrite(input, init, url);
      }

      if (url.pathname.endsWith('/delete_plan.php')) {
        const response = await nativeFetch(input, init);
        if (response.ok) {
          setSelectedPlanId(0);
          setCreatingPlan(false);
          clearPlanCaches();
          global.setTimeout(refreshPlans, 50);
        }
        return response;
      }

      return nativeFetch(input, init);
    };
  }

  function defaultRepIncrease(row) {
    const perSet = row.dataset.progressionType === 'leg-reps' ? 3 : 1;
    return perSet * (row.dataset.laterality === 'per-side' ? 2 : 1);
  }

  function itemForRow(row) {
    const exercise = String(row.querySelector('.ex-select')?.value || '').trim();
    return selectedPlan()?.planJson?.items?.find((item) => String(item?.exercise || '') === exercise) || null;
  }

  function ensureRepIncrease(row) {
    const definitionIsTimed = String(row.dataset.progressionType || '').includes('timed');
    let fieldWrap = row.querySelector('.ex-field-rep-increase');
    if (definitionIsTimed) {
      fieldWrap?.remove();
      return;
    }
    if (!fieldWrap) {
      fieldWrap = document.createElement('div');
      fieldWrap.className = 'field-stack ex-field-rep-increase';
      fieldWrap.innerHTML = '<label class="rep-increase-label">Rep increase each session</label><input class="ex-rep-increase field-input-fixed" type="number" min="0" max="1000" step="1" inputmode="numeric"><p class="note rep-increase-note"></p>';
      const sets = row.querySelector('.ex-field-sets');
      (sets || row.lastElementChild)?.insertAdjacentElement('afterend', fieldWrap);
    }
    const label = fieldWrap.querySelector('.rep-increase-label');
    const note = fieldWrap.querySelector('.rep-increase-note');
    const input = fieldWrap.querySelector('.ex-rep-increase');
    const perSide = row.dataset.laterality === 'per-side';
    if (label) label.textContent = perSide ? 'Total rep increase each session (both sides)' : 'Rep increase each session';
    if (note) note.textContent = perSide ? 'For example, 10 means 5 additional repetitions on each side.' : 'Applied to every set after each successful session.';
    if (input) {
      input.step = perSide ? '2' : '1';
      const exercise = String(row.querySelector('.ex-select')?.value || '');
      const item = itemForRow(row);
      const saved = Number(item?.repIncrease);
      const next = Number.isFinite(saved) && saved >= 0 ? saved : defaultRepIncrease(row);
      if (input.dataset.exercise !== exercise || !input.dataset.customised) input.value = String(next);
      input.dataset.exercise = exercise;
    }
  }

  function ensureProgressionControls() {
    $$('#exerciseList .ex-row').forEach(ensureRepIncrease);
  }

  function managerHtml() {
    const selected = selectedPlanId();
    const options = plans.map((plan, index) => {
      const progress = plan.progress || {};
      const label = `${planName(plan, index)} — ${Number(progress.done || 0)}/${Number(progress.total || plan.planJson?.sessions || 0)} sessions`;
      return `<option value="${Number(plan.planId)}"${Number(plan.planId) === selected ? ' selected' : ''}>${escapeHtml(label)}</option>`;
    }).join('');
    return `<div class="section-head-actions"><div><h2>Calisthenics Plans</h2><p class="note">Keep separate plans for different muscle groups, sports preparation or training days.</p></div><button type="button" class="action secondary" id="createCalisthenicsPlan">Create another plan</button></div>
      <label class="field-stack"><span>Open plan</span><select id="calisthenicsPlanSelect" data-native-select="true"${plans.length ? '' : ' disabled'}><option value="">${plans.length ? 'Choose a plan…' : 'No saved plans yet'}</option>${options}</select></label>`;
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  }

  function ensureManager() {
    const panel = $('[data-fitness-routine-panel="calisthenics"]');
    if (!panel) return;
    let manager = $('#calisthenicsPlanManager', panel);
    if (!manager) {
      manager = document.createElement('section');
      manager.id = 'calisthenicsPlanManager';
      manager.className = 'card fitness-calisthenics-plan-manager';
      panel.prepend(manager);
    }
    const html = managerHtml();
    if (manager.innerHTML !== html) manager.innerHTML = html;
  }

  function ensurePlanName() {
    const list = $('#exerciseList');
    if (!list) return;
    let field = $('#calisthenicsPlanName');
    if (!field) {
      const wrap = document.createElement('label');
      wrap.className = 'field-stack calisthenics-plan-name-field';
      wrap.innerHTML = '<span>Plan name</span><input id="calisthenicsPlanName" class="field-input-fixed" type="text" maxlength="100" placeholder="For example: Lower Body, Upper Body or Badminton Preparation">';
      list.insertAdjacentElement('beforebegin', wrap);
      field = wrap.querySelector('input');
    }
    if (document.activeElement !== field) {
      const plan = selectedPlan();
      const next = isCreatingPlan() ? '' : planName(plan, Math.max(0, plans.indexOf(plan)));
      if (!field.value || field.dataset.planId !== String(plan?.planId || 'new')) field.value = next;
      field.dataset.planId = String(plan?.planId || 'new');
    }
  }

  function decorateSavedPlan() {
    const title = $('#myPlanOut .my-plan-saved-head h2');
    const plan = selectedPlan();
    if (title && plan) title.textContent = `Saved plan — ${planName(plan, plans.indexOf(plan))}`;
  }

  function patch() {
    patchFrame = 0;
    ensureManager();
    ensurePlanName();
    ensureProgressionControls();
    decorateSavedPlan();
  }

  function schedulePatch() {
    if (patchFrame) return;
    patchFrame = global.requestAnimationFrame(patch);
  }

  function createPlan() {
    setCreatingPlan(true);
    setSelectedPlanId(0);
    clearPlanCaches();
    try { global.sessionStorage?.setItem(VIEW_KEY, 'calisthenics'); } catch (_error) {}
    global.location.assign('/baseline-fitness/my-routine?new-plan=1');
  }

  function openPlan(planId) {
    const id = Math.max(0, Number(planId) || 0);
    if (!id) return;
    setCreatingPlan(false);
    setSelectedPlanId(id);
    clearPlanCaches();
    try { global.sessionStorage?.setItem(VIEW_KEY, 'calisthenics'); } catch (_error) {}
    global.location.reload();
  }

  function completedDate(session) {
    const raw = Number(session?.completed_at);
    if (!raw) return '';
    const date = new Date(raw * 1000);
    const pad = (number) => String(number).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function todayIso() {
    return global.BASELINE_RoutineSystem?.todayIso?.() || new Date().toISOString().slice(0, 10);
  }

  function getPlansForDate(date) {
    const target = String(date || todayIso());
    if (target > todayIso()) return [];
    const output = [];
    plans.forEach((plan, index) => {
      const sessions = Array.isArray(plan.sessions) ? plan.sessions : [];
      sessions.filter((session) => session.status === 'done' && completedDate(session) === target).forEach((session) => {
        output.push({ planId:Number(plan.planId), planName:planName(plan, index), sessionIndex:Number(session.session_index), detail:'Completed on this date', status:'done' });
      });
      if (target === todayIso()) {
        const next = sessions.find((session) => session.status !== 'done');
        if (next && String(next.scheduled_date || '') <= target) {
          output.push({ planId:Number(plan.planId), planName:planName(plan, index), sessionIndex:Number(next.session_index), detail:String(next.scheduled_date || '') < target ? 'Overdue and available today' : 'Due today', status:'due' });
        }
      }
    });
    return output;
  }

  async function refreshPlans() {
    owner = authOwner();
    if (owner === 'guest' || !nativeFetch) {
      plans = [];
      schedulePatch();
      document.dispatchEvent(new CustomEvent('baseline:fitness-plans-updated', { detail:{ plans:[] } }));
      return [];
    }
    try {
      const response = await nativeFetch(`${API}/list_plans.php`, { credentials:'same-origin', headers:{ Accept:'application/json' } });
      const data = await response.json();
      plans = response.ok && Array.isArray(data?.plans) ? data.plans : [];
    } catch (_error) {
      plans = [];
    }
    const selected = selectedPlanId();
    if (!isCreatingPlan()) {
      if (selected && !plans.some((plan) => Number(plan.planId) === selected)) setSelectedPlanId(0);
      if (!selectedPlanId() && plans[0]) setSelectedPlanId(plans[0].planId);
    }
    schedulePatch();
    document.dispatchEvent(new CustomEvent('baseline:fitness-plans-updated', { detail:{ plans:getPlans() } }));
    return getPlans();
  }

  function getPlans() {
    return JSON.parse(JSON.stringify(plans));
  }

  document.addEventListener('click', (event) => {
    if (event.target.closest('#createCalisthenicsPlan')) { createPlan(); return; }
  });
  document.addEventListener('change', (event) => {
    const select = event.target.closest('#calisthenicsPlanSelect');
    if (select?.value) { openPlan(select.value); return; }
    const exercise = event.target.closest('#exerciseList .ex-select');
    if (exercise) global.setTimeout(() => {
      const row = exercise.closest('.ex-row');
      const input = row?.querySelector('.ex-rep-increase');
      if (input) { delete input.dataset.customised; input.dataset.exercise = ''; }
      ensureRepIncrease(row);
    }, 0);
  }, true);
  document.addEventListener('input', (event) => {
    const input = event.target.closest('.ex-rep-increase');
    if (input) input.dataset.customised = 'true';
  }, true);

  function attachAuth() {
    let attempts = 0;
    const connect = () => {
      const auth = global.BASELINE_auth;
      if (auth && typeof auth.get === 'function') {
        owner = authOwner();
        refreshPlans();
        if (typeof auth.onChange === 'function') auth.onChange(() => { owner = authOwner(); refreshPlans(); });
        return;
      }
      attempts += 1;
      if (attempts < 80) global.setTimeout(connect, 100);
    };
    connect();
  }

  global.BASELINE_fitnessPlans = Object.freeze({
    refresh:refreshPlans,
    getPlans,
    getSelectedPlanId:selectedPlanId,
    getPlansForDate,
    openPlan,
    createPlan
  });

  observer = new MutationObserver(schedulePatch);
  observer.observe(document.documentElement, { childList:true, subtree:true });
  attachAuth();
  schedulePatch();
  global.addEventListener('pagehide', () => observer?.disconnect(), { once:true });
})(typeof window !== 'undefined' ? window : globalThis);

(function(scope){
  'use strict';

  const api = scope.BASELINE_api;
  const store = scope.BASELINE_store;
  const apiBase = api.base;
  const isFile = !!api.isFile;
  const sessionKey = store.keys.session;
  const state = { ready:false, authed:false, name:'', email:'', providers:{ password:true, google:false } };
  const listeners = new Set();

  /* Server session state is the only authentication authority. Retire the old
     browser preview/session keys instead of using them to pre-authenticate UI
     or migration code before /me.php has confirmed the current account. */
  try{
    store.del(sessionKey);
    if(store.keys.users) store.del(store.keys.users);
  }catch(_e){}

  function snapshot(){
    return {
      ready:!!state.ready,
      authed:!!state.authed,
      name:String(state.name || ''),
      email:String(state.email || ''),
      providers:Object.assign({ password:true, google:false }, state.providers || {}),
    };
  }

  const stateView = {};
  Object.defineProperties(stateView, {
    ready:{ enumerable:true, get:()=>!!state.ready },
    authed:{ enumerable:true, get:()=>!!state.authed },
    name:{ enumerable:true, get:()=>String(state.name || '') },
    email:{ enumerable:true, get:()=>String(state.email || '') },
    providers:{ enumerable:true, get:()=>Object.assign({ password:true, google:false }, state.providers || {}) },
  });
  Object.freeze(stateView);

  function syncLocalSession(_user){
    /* Compatibility cleanup only. Never cache authenticated identity in
       browser storage: the server session remains authoritative. */
    try{
      store.del(sessionKey);
      if(store.keys.users) store.del(store.keys.users);
    }catch(_e){}
  }

  function emit(){
    const current = snapshot();
    listeners.forEach(listener=>{ try{ listener(current); }catch(_e){} });
    try{ scope.document.dispatchEvent(new scope.CustomEvent('baseline:auth', { detail:current })); }catch(_e){}
  }

  async function refresh(){
    if(isFile){
      state.ready = true;
      state.authed = false;
      state.name = '';
      state.email = '';
      state.providers = { password:true, google:false };
      emit();
      return snapshot();
    }

    const response = await api.json(apiBase + '/me.php');
    if(response && response.data && response.data.ok && response.data.authed){
      state.ready = true;
      state.authed = true;
      state.name = String(response.data.name || (response.data.user && response.data.user.name) || '').trim();
      state.email = String(response.data.email || (response.data.user && response.data.user.email) || '').trim();
      state.providers = Object.assign({ password:true, google:false }, response.data.providers || {});
      syncLocalSession({ authed:true, name:state.name, email:state.email });
    }else{
      state.ready = true;
      state.authed = false;
      state.name = '';
      state.email = '';
      state.providers = Object.assign({ password:true, google:false }, (response && response.data && response.data.providers) || {});
      syncLocalSession(null);
    }
    emit();
    return snapshot();
  }

  async function fetchProviders(){
    if(isFile){
      state.providers = { password:true, google:false };
      emit();
      return state.providers;
    }
    const response = await api.json(apiBase + '/auth_providers.php');
    if(response && response.data && response.data.ok){
      state.providers = Object.assign({ password:true, google:false }, response.data.providers || {});
      emit();
    }
    return Object.assign({ password:true, google:false }, state.providers || {});
  }

  async function login(identifier, password){
    identifier = String(identifier || '').trim();
    password = String(password || '');
    if(!identifier || !password){
      return { ok:false, status:400, data:{ ok:false, error:'missing_fields' } };
    }
    if(isFile){
      return { ok:false, status:0, data:{ ok:false, error:'server_required' } };
    }
    const response = await api.json(apiBase + '/login.php', { method:'POST', body:{ identifier, password } });
    if(response && response.data && response.data.ok){
      const user = response.data.user || {};
      state.ready = true;
      state.authed = true;
      state.name = String(user.name || identifier || '').trim();
      state.email = String(user.email || '').trim();
      state.providers = Object.assign({ password:true, google:false }, response.data.providers || state.providers || {});
      syncLocalSession({ authed:true, name:state.name, email:state.email });
      emit();
    }else{
      await refresh();
    }
    return response;
  }

  async function register(arg1, arg2, arg3){
    const payload = arg1 && typeof arg1 === 'object' ? {
      name:String(arg1.name || '').trim(),
      email:String(arg1.email || '').trim(),
      password:String(arg1.password || ''),
    } : {
      name:String(arg1 || '').trim(),
      email:String(arg3 || '').trim(),
      password:String(arg2 || ''),
    };

    if(!payload.name || !payload.email || !payload.password){
      return { ok:false, status:400, data:{ ok:false, error:'missing_fields' } };
    }
    if(isFile){
      return { ok:false, status:0, data:{ ok:false, error:'server_required' } };
    }

    const response = await api.json(apiBase + '/register.php', { method:'POST', body:payload });
    if(response && response.data && response.data.ok){
      const user = response.data.user || {};
      state.ready = true;
      state.authed = true;
      state.name = String(user.name || payload.name || '').trim();
      state.email = String(user.email || payload.email || '').trim();
      state.providers = Object.assign({ password:true, google:false }, response.data.providers || state.providers || {});
      syncLocalSession({ authed:true, name:state.name, email:state.email });
      emit();
    }else{
      await refresh();
    }
    return response;
  }

  async function requestPasswordReset(email){
    email = String(email || '').trim();
    if(!email) return { ok:false, status:400, data:{ ok:false, error:'missing_fields' } };
    if(isFile) return { ok:false, status:0, data:{ ok:false, error:'server_required' } };
    return api.json(apiBase + '/forgot_password.php', { method:'POST', body:{ email } });
  }

  async function verifyPasswordReset(token){
    token = String(token || '').trim();
    if(!token) return { ok:false, status:400, data:{ ok:false, error:'missing_token' } };
    if(isFile) return { ok:false, status:0, data:{ ok:false, error:'server_required' } };
    return api.json(apiBase + '/password_reset.php?token=' + encodeURIComponent(token));
  }

  async function completePasswordReset(token, password, passwordConfirm){
    token = String(token || '').trim();
    password = String(password || '');
    passwordConfirm = String(passwordConfirm || password);
    if(!token || !password) return { ok:false, status:400, data:{ ok:false, error:'missing_fields' } };
    if(isFile) return { ok:false, status:0, data:{ ok:false, error:'server_required' } };

    const response = await api.json(apiBase + '/password_reset.php', {
      method:'POST',
      body:{ token, password, passwordConfirm },
    });
    if(response && response.data && response.data.ok){
      const user = response.data.user || {};
      state.ready = true;
      state.authed = true;
      state.name = String(user.name || '').trim();
      state.email = String(user.email || '').trim();
      syncLocalSession({ authed:true, name:state.name, email:state.email });
      emit();
    }else{
      await refresh();
    }
    return response;
  }

  function startGoogleSignIn(){
    return { ok:false, status:0, data:{ ok:false, error:'google_sign_in_removed' } };
  }

  async function logout(){
    if(isFile){
      state.authed = false;
      state.name = '';
      state.email = '';
      syncLocalSession(null);
      emit();
      return { ok:false, status:0, data:{ ok:false, error:'server_required' } };
    }
    const response = await api.json(apiBase + '/logout.php', { method:'POST', body:{} });
    syncLocalSession(null);
    await refresh();
    return response;
  }

  scope.BASELINE_auth = {
    state:stateView,
    get:snapshot,
    refresh,
    fetchProviders,
    login,
    register,
    requestPasswordReset,
    verifyPasswordReset,
    completePasswordReset,
    startGoogleSignIn,
    logout,
    onChange:(listener)=>{ listeners.add(listener); return ()=>listeners.delete(listener); },
  };
})(window);

(function(global){
  'use strict';

  async function parseJsonResponse(response){
    return response.json().catch(function(){ return { ok:false, error:'bad_json' }; }).then(function(data){
      data.__status = response.status;
      return data;
    });
  }

  async function load(url, signal){
    const options = { method:'GET', credentials:'same-origin' };
    if(signal) options.signal = signal;
    const response = await fetch(url, options);
    return parseJsonResponse(response);
  }

  async function save(url, payload, signal){
    const options = {
      method:'POST',
      credentials:'same-origin',
      keepalive:true,
      headers:{ 'Content-Type':'application/json' },
      body:JSON.stringify(payload)
    };
    if(signal) options.signal = signal;
    const response = await fetch(url, options);
    return parseJsonResponse(response);
  }

  global.BASELINE_BADMINTON_SERVER = Object.freeze({
    load:load,
    save:save
  });
})(typeof window !== 'undefined' ? window : globalThis);

(function(scope){
  'use strict';

  const isFile = !!(scope.location && scope.location.protocol === 'file:');
  const base = isFile ? './api' : '/api';
  const resourceRevisions = new Map();

  function revisionNumber(value){
    const revision = Number(value);
    return Number.isInteger(revision) && revision >= 0 ? revision : null;
  }

  function rememberRevision(resource, payload){
    const key = String(resource || '').trim();
    if(!key || !payload || typeof payload !== 'object') return null;
    const revision = revisionNumber(payload.revision);
    if(revision !== null) resourceRevisions.set(key, revision);
    return resourceRevisions.has(key) ? resourceRevisions.get(key) : null;
  }

  function rememberRevisionMap(prefix, revisions){
    const root = String(prefix || '').trim();
    if(!root || !revisions || typeof revisions !== 'object') return;
    Object.entries(revisions).forEach(([name, value])=>{
      rememberRevision(`${root}:${String(name || '').trim()}`, { revision:value });
    });
  }

  function expectedRevision(resource){
    const key = String(resource || '').trim();
    return key && resourceRevisions.has(key) ? resourceRevisions.get(key) : 0;
  }

  function withExpectedRevision(resource, body){
    const payload = body && typeof body === 'object' && !Array.isArray(body) ? Object.assign({}, body) : {};
    if(!Object.prototype.hasOwnProperty.call(payload, 'expectedRevision')){
      payload.expectedRevision = expectedRevision(resource);
    }
    return payload;
  }

  function clearRevision(resource){
    const key = String(resource || '').trim();
    if(key) resourceRevisions.delete(key);
  }

  async function json(url, opts={}){
    if(isFile){
      return { ok:false, status:0, data:{ ok:false, error:'server_required' } };
    }

    const method = (opts.method || 'GET').toUpperCase();
    const init = {
      method,
      credentials: 'same-origin',
      headers: Object.assign({ 'Accept':'application/json' }, (opts.headers || {})),
    };
    if(opts.body !== undefined){
      init.headers['Content-Type'] = 'application/json';
      init.body = JSON.stringify(opts.body);
    }

    let response;
    let responseText;
    try{
      response = await scope.fetch(url, init);
      responseText = await response.text();
    }catch(_e){
      return { ok:false, status:0, data:{ ok:false, error:'network_error', endpoint:String(url || '') } };
    }

    let data = null;
    const status = response ? response.status : 0;
    const contentType = (function(){
      try{ return String(response.headers.get('content-type') || ''); }catch(_e){ return ''; }
    })();

    try{
      data = responseText ? JSON.parse(responseText) : { ok:false, error:'empty_response' };
    }catch(_e){
      const preview = String(responseText || '').replace(/\s+/g, ' ').trim().slice(0, 220);
      const looksLikeHtml = /^\s*(?:<!doctype\s+html|<html|<head|<body|<br\s*\/?\s*>|<b>)/i.test(String(responseText || ''));
      data = {
        ok:false,
        error: looksLikeHtml ? 'api_returned_html' : 'api_non_json_response',
        endpoint:String(url || ''),
        status,
        contentType,
        rawPreview:preview,
      };
      try{
        scope.console.warn('Baseline API returned non-JSON', { endpoint:String(url || ''), status, contentType, preview });
      }catch(__e){}
    }

    return { ok:!!(response && response.ok && data && data.ok), status, data };
  }

  const revisions = Object.freeze({
    remember:rememberRevision,
    rememberMap:rememberRevisionMap,
    expected:expectedRevision,
    withExpected:withExpectedRevision,
    clear:clearRevision,
  });

  scope.BASELINE_api = {
    base,
    isFile,
    json,
    get:(path)=>json(path, { method:'GET' }),
    post:(path, body)=>json(path, { method:'POST', body }),
    revisions,
  };

  /* Natural Skincare still has legacy clients that call fetch/localStorage
     directly. Load the compatibility bridge while the parser is here so it is
     installed before those clients register their DOM-ready migrations. */
  const document = scope.document;
  const app = document?.documentElement?.dataset?.app || document?.body?.dataset?.app || '';
  if(document && !isFile && app === 'skin' && document.readyState === 'loading'){
    if(!scope.__BASELINE_SKINCARE_SAVED_DATA_BRIDGE_LOADER__){
      scope.__BASELINE_SKINCARE_SAVED_DATA_BRIDGE_LOADER__ = true;
      document.write('<script src="/systems/baseline-natural-skincare/js/skincare-saved-data-bridge.js?v=SKINCARE_SLIDER_SERVER_20261011_1"><\/script>');
    }
  }

  /* Fitness Routine still contains raw fetch clients. Install the narrow
     revision bridge before those clients initialise so routine_state and
     routine_groups share one authoritative fitness-routine revision. */
  if(document && !isFile && app === 'fitness' && document.readyState === 'loading'){
    if(!scope.__BASELINE_FITNESS_ROUTINE_SAVED_DATA_BRIDGE_LOADER__){
      scope.__BASELINE_FITNESS_ROUTINE_SAVED_DATA_BRIDGE_LOADER__ = true;
      document.write('<script src="/systems/baseline-fitness/js/fitness-routine-saved-data-bridge.js?v=FITNESS_ROUTINE_SAVED_DATA_BRIDGE_20260913_1"><\/script>');
    }
  }

  function removeObsoleteUpdateFooter(){
    if(!document) return;
    const currentApp = document.documentElement?.dataset?.app || document.body?.dataset?.app || '';
    if(currentApp !== 'skin' && currentApp !== 'food') return;
    document.querySelectorAll('footer.footer').forEach((footer) => {
      if(/Baseline (?:Natural Skincare|Food Approach)\s*-\s*Updated/i.test(footer.textContent || '')) footer.remove();
    });
  }

  if(document){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', removeObsoleteUpdateFooter, { once:true });
    else removeObsoleteUpdateFooter();
  }
})(window);

(function(scope){
  'use strict';

  const isFile = !!(scope.location && scope.location.protocol === 'file:');
  const base = isFile ? './api' : '/api';

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

  scope.BASELINE_api = {
    base,
    isFile,
    json,
    get:(path)=>json(path, { method:'GET' }),
    post:(path, body)=>json(path, { method:'POST', body }),
  };

  function removeObsoleteUpdateFooter(){
    const app = document.documentElement?.dataset?.app || document.body?.dataset?.app || '';
    if(app !== 'skin' && app !== 'food') return;
    document.querySelectorAll('footer.footer').forEach((footer) => {
      if(/Baseline (?:Natural Skincare|Food Approach)\s*-\s*Updated/i.test(footer.textContent || '')) footer.remove();
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', removeObsoleteUpdateFooter, { once:true });
  else removeObsoleteUpdateFooter();
})(window);

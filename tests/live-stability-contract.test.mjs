import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync,readFileSync } from 'node:fs';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

test('retired live-stability override layer stays physically absent',()=>{
  for(const path of [
    'sitewide/js/baseline-live-stability.js',
    'sitewide/js/baseline-live-stability-core-v3.js',
    'sitewide/css/baseline-live-stability.css',
    'sitewide/js/baseline-tabs.js',
    'sitewide/js/baseline-auth-failsafe.js'
  ]) assert.equal(existsSync(url(path)),false,`${path} must stay deleted`);
});

test('Badminton has one revision-aware server writer and no browser fallback persistence',()=>{
  const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');
  const server=read('systems/baseline-badminton-session/js/badminton-session-server.js');
  const source=badminton+'\n'+server;
  assert.match(source,/expectedRevision|serverRevision/);
  assert.match(source,/revision_conflict/);
  assert.match(source,/badminton_session\.php/);
  assert.doesNotMatch(source,/localStorage|sessionStorage|indexedDB/);
});

test('clean recipe detail routes use the complete parent applications only',()=>{
  const htaccess=read('.htaccess');
  assert.ok(htaccess.includes('RewriteRule ^baseline-food-approach/recipes/([^/]+)/?$ systems/baseline-food-approach/baseline-food-approach.html [L,QSA]'));
  assert.ok(htaccess.includes('RewriteRule ^baseline-natural-skincare/recipes/([^/]+)/?$ systems/baseline-natural-skincare/baseline-natural-skincare.html [L,QSA]'));
  assert.doesNotMatch(htaccess,/baseline-natural-skincare\/recipes\/\(\[\^\/\]\+\)\/?\$ systems\/baseline-natural-skincare\/recipes\/\$1\.html/);
});

test('Fitness route generation remains canonical without a fallback tab controller',()=>{
  const fitness=read('systems/baseline-fitness/js/baseline-fitness-app.js');
  const routine=read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  const shared=read('sitewide/js/baseline-shared.js');
  assert.match(fitness,/const ROUTE_BASE = '\/baseline-fitness'/);
  assert.match(routine,/function requestedRoute\(\)/);
  assert.match(shared,/'my-body':'my-body'/);
  assert.match(shared,/library:'library'/);
  assert.equal(existsSync(url('sitewide/js/baseline-tabs.js')),false);
});

test('protected key and Charity banner geometry are owned by canonical CSS, not a stability patch',()=>{
  const css=read('sitewide/css/baseline-protected-key-placement.css');
  const charity=read('systems/charity-shop/charity-shop.php');
  assert.match(css,/> \.bl-protected-key\{order:2/);
  assert.match(css,/data-app="charity-shop"/);
  assert.match(charity,/baseline-protected-key-placement\.css/);
  assert.doesNotMatch(charity,/baseline-live-stability/);
});

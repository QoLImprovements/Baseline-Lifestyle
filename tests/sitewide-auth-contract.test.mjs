import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : path.resolve(here, '..');
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');

const entrypoints = [
  'index.html',
  'systems/baseline-food-approach/baseline-food-approach.html',
  'systems/baseline-massage/baseline-massage.html',
  'systems/baseline-natural-skincare/baseline-natural-skincare.html',
  'systems/baseline-fitness/baseline-fitness.html',
  'systems/baseline-badminton-session/baseline-badminton-session.html',
  'systems/baseline-games-hub/baseline-games-hub.html'
];

test('every primary site entry point loads the shared account runtime', () => {
  for (const entry of entrypoints) assert.match(read(entry), /\/sitewide\/js\/baseline-shared\.js\?v=/);
});

test('Fitness loads API compatibility after shared auth and before its application', () => {
  const html = read('systems/baseline-fitness/baseline-fitness.html');
  const shared = html.indexOf('/sitewide/js/baseline-shared.js');
  const authority = html.indexOf('/sitewide/js/baseline-auth-failsafe.js');
  const app = html.indexOf('/systems/baseline-fitness/js/baseline-fitness-app.js');
  assert.ok(shared > -1 && authority > shared && app > authority);
});

test('compatibility repairs root and Fitness-relative API routing without a second auth UI', () => {
  const source = read('sitewide/js/baseline-auth-failsafe.js');
  assert.match(source, /SITEWIDE_AUTH_SINGLE_OWNER_20260713_5/);
  assert.match(source, /window\.fetch=async/);
  assert.match(source, /\/sitewide\/api\//);
  assert.match(source, /baseline-fitness/);
  assert.match(source, /response\.status>=500/);
  assert.match(source, /sitewideEndpoints/);
  assert.doesNotMatch(source, /BASELINE_auth\.login/);
  assert.doesNotMatch(source, /createElement\('div'\)/);
  assert.doesNotMatch(source, /bl-auth-failsafe-form/);
});

test('Fitness auth compatibility state redirects to the single sitewide source of truth', () => {
  const shim = read('systems/baseline-fitness/api/me.php');
  assert.match(shim, /Location:\s*\/api\/me\.php/);
  assert.match(shim, /307/);
  assert.doesNotMatch(shim, /session_start\s*\(/);
});

test('server authentication session and API routing remain sitewide', () => {
  const config = read('sitewide/api/config.php');
  const htaccess = read('.htaccess');
  const login = read('sitewide/api/login.php');
  assert.match(config, /session_name\('baseline_session'\)/);
  assert.match(config, /'path'\s*=>\s*'\/'/);
  assert.match(htaccess, /RewriteRule \^api\/\(\.\*\)\$ sitewide\/api\/\$1 \[L,QSA\]/);
  assert.match(login, /bl_set_auth_session\(\$user\)/);
});

test('HTTP and JSON handling have one focused server boundary', () => {
  const config = read('sitewide/api/config.php');
  const http = read('sitewide/api/http.php');
  assert.match(config, /require_once __DIR__ \. '\/http\.php'/);
  assert.doesNotMatch(config, /function bl_(?:json|no_cache_headers|is_secure_request|require_same_origin|input_json|request_origin|site_base_path|site_url)\b/);
  for(const name of ['bl_json','bl_no_cache_headers','bl_is_secure_request','bl_require_same_origin','bl_input_json','bl_request_origin','bl_site_base_path','bl_site_url']){
    assert.match(http, new RegExp(`function ${name}\\b`), `${name} is missing from the HTTP boundary`);
  }
  assert.match(http, /register_shutdown_function/);
  assert.match(http, /BL_MAX_JSON_BYTES/);
  assert.match(http, /invalid_origin/);
  assert.match(http, /Never build security-sensitive links from an untrusted Host header/);
});

test('the canonical rewrite owns root API routes without physical shadow endpoints', () => {
  const htaccess = read('.htaccess');
  assert.match(htaccess, /RewriteRule \^api\/\(\.\*\)\$ sitewide\/api\/\$1 \[L,QSA\]/);
  for (const route of ['login','me','logout','auth_providers','register','forgot_password','password_reset']) {
    assert.equal(fs.existsSync(path.join(root, `api/${route}.php`)), false, `${route}.php must not become a root shadow endpoint`);
  }
});

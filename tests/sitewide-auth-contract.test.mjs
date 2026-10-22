import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : path.resolve(here, '..');
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');

function htmlFiles(relative=''){
  const directory = path.join(root, relative);
  const out = [];
  for(const item of fs.readdirSync(directory, { withFileTypes:true })){
    const child = path.join(relative, item.name);
    if(item.isDirectory()){
      if(['.git','node_modules','test-results'].includes(item.name)) continue;
      out.push(...htmlFiles(child));
    }else if(item.isFile() && item.name.endsWith('.html')){
      out.push(child);
    }
  }
  return out;
}

const entrypoints = [
  'index.html',
  'systems/baseline-food-approach/baseline-food-approach.html',
  'systems/baseline-massage/baseline-massage.html',
  'systems/baseline-natural-skincare/baseline-natural-skincare.html',
  'systems/baseline-psychology/baseline-psychology.html',
  'systems/baseline-fitness/baseline-fitness.html',
  'systems/baseline-badminton-session/baseline-badminton-session.html',
  'systems/baseline-recreation/baseline-recreation.html'
];

test('every page loads focused clients before the shared account runtime', () => {
  const pages = htmlFiles().filter(entry=>read(entry).includes('/sitewide/js/baseline-shared.js'));
  assert.ok(pages.length >= entrypoints.length);
  for (const entry of pages){
    const html = read(entry);
    const api = html.indexOf('/sitewide/js/baseline-api.js');
    const store = html.indexOf('/sitewide/js/baseline-store.js');
    const auth = html.indexOf('/sitewide/js/baseline-auth.js');
    const shared = html.indexOf('/sitewide/js/baseline-shared.js');
    assert.ok(api > -1 && store > api && auth > store && shared > auth, `${entry} must load API, store and auth clients before the shared runtime`);
  }
});

test('the shared controller delegates transport to the focused API client', () => {
  const shared = read('sitewide/js/baseline-shared.js');
  const api = read('sitewide/js/baseline-api.js');
  assert.match(shared, /const sitewideApi = window\.BASELINE_api/);
  assert.doesNotMatch(shared, /async function apiJson\b/);
  assert.doesNotMatch(shared, /fetch\([^\n]*(?:login|logout|register|forgot_password|password_reset|auth_providers|\/api\/)/);
  assert.match(shared, /const apiJson = sitewideApi\.json/);
  assert.match(api, /credentials:\s*'same-origin'/);
  assert.match(api, /error:'network_error'/);
  assert.match(api, /error: looksLikeHtml \? 'api_returned_html' : 'api_non_json_response'/);
  assert.doesNotMatch(api, /authState|createElement|(?:scope|window|global)\\.localStorage\\.(?:getItem|setItem|removeItem)/);
});

test('the focused store client is explicitly non-persistent and cannot become an account save authority', () => {
  const shared = read('sitewide/js/baseline-shared.js');
  const store = read('sitewide/js/baseline-store.js');
  assert.doesNotMatch(shared, /function ls(?:Read|Write|Del)\b|function localUserKey\b/);
  assert.doesNotMatch(shared, /BASELINE_store/);
  assert.match(store, /const values\s*=\s*new Map\(\)/);
  assert.match(store, /persistent:false/);
  assert.doesNotMatch(store, /localStorage|sessionStorage|indexedDB|Storage\.prototype/);
  assert.doesNotMatch(store, /authState|createElement|fetch\(/);
});

test('the shared controller delegates account state and operations to the focused auth client', () => {
  const shared = read('sitewide/js/baseline-shared.js');
  const auth = read('sitewide/js/baseline-auth.js');
  assert.match(shared, /const authClient = window\.BASELINE_auth/);
  assert.doesNotMatch(shared, /const authState = \{\s*authed:|async function auth(?:Login|Register|Logout)|function emitAuth\b/);
  for(const name of ['refresh','fetchProviders','login','register','requestPasswordReset','verifyPasswordReset','completePasswordReset','logout','onChange']){
    assert.match(auth, new RegExp(`\\b${name}\\b`), `${name} is missing from the auth client`);
  }
  assert.match(auth, /Object\.freeze\(stateView\)/);
  assert.doesNotMatch(auth, /createElement|innerHTML|classList/);
});

test('Fitness parser-loads focused API, store and auth clients before shared runtime and application', () => {
  const html = read('systems/baseline-fitness/baseline-fitness.html');
  const api = html.indexOf('/sitewide/js/baseline-api.js');
  const store = html.indexOf('/sitewide/js/baseline-store.js');
  const auth = html.indexOf('/sitewide/js/baseline-auth.js');
  const shared = html.indexOf('/sitewide/js/baseline-shared.js');
  const app = html.indexOf('/systems/baseline-fitness/js/baseline-fitness-app.js');
  assert.ok(api > -1 && store > api && auth > store && shared > auth && app > shared);
  assert.doesNotMatch(html, /baseline-auth-failsafe\.js/);
});

test('shared account forms own submission without shadow repair layers', () => {
  const shared = read('sitewide/js/baseline-shared.js');
  assert.equal(fs.existsSync(path.join(root, 'sitewide/js/baseline-auth-failsafe.js')), false);
  assert.equal(fs.existsSync(path.join(root, 'sitewide/js/baseline-form-interactions.js')), false);
  assert.match(shared, /loginForm\.addEventListener\('submit'/);
  assert.match(shared, /signupForm\.addEventListener\('submit'/);
  assert.match(shared, /recoverForm\.addEventListener\('submit'/);
  assert.match(shared, /resetForm\.addEventListener\('submit'/);
  assert.match(shared, /const authClient = window\.BASELINE_auth/);
  assert.doesNotMatch(shared, /bl-auth-failsafe-form|baseline-auth-failsafe/);
});

test('Fitness auth compatibility state redirects to the single sitewide source of truth', () => {
  const shim = read('systems/baseline-fitness/api/me.php');
  assert.match(shim, /Location:\s*\/api\/me\.php/);
  assert.match(shim, /307/);
  assert.doesNotMatch(shim, /session_start\s*\(/);
});

test('server authentication session and API routing remain sitewide', () => {
  const config = read('sitewide/api/config.php');
  const session = read('sitewide/api/session.php');
  const htaccess = read('.htaccess');
  const login = read('sitewide/api/login.php');
  assert.match(config, /require_once __DIR__ \. '\/session\.php'/);
  assert.doesNotMatch(config, /function bl_(?:session_start|set_auth_session|clear_auth_session|authed_uid|authed_name|authed_email)\b/);
  assert.match(session, /session_name\('baseline_session'\)/);
  assert.match(session, /'path'\s*=>\s*'\/'/);
  assert.match(session, /'secure'\s*=>\s*\$secure/);
  assert.match(session, /'httponly'\s*=>\s*true/);
  assert.match(session, /'samesite'\s*=>\s*'Lax'/);
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

test('account lookup, current-user validation and public payloads have one authentication boundary', () => {
  const config = read('sitewide/api/config.php');
  const auth = read('sitewide/api/authentication.php');
  assert.match(config, /require_once __DIR__ \. '\/authentication\.php'/);
  assert.doesNotMatch(config, /function bl_(?:current_user|require_user|require_user_id|normalize_email|email_is_valid|password_is_valid|user_public_payload|is_google_enabled|auth_providers_payload|google_redirect_url|find_user_by_identifier|find_user_by_email)\b/);
  for(const name of ['bl_current_user','bl_require_user','bl_require_user_id','bl_normalize_email','bl_email_is_valid','bl_password_is_valid','bl_user_public_payload','bl_is_google_enabled','bl_auth_providers_payload','bl_google_redirect_url','bl_find_user_by_identifier','bl_find_user_by_email']){
    assert.match(auth, new RegExp(`function ${name}\\b`), `${name} is missing from the authentication boundary`);
  }
  assert.match(auth, /SELECT \* FROM users WHERE id = :id LIMIT 1/);
  assert.match(auth, /SELECT \* FROM users WHERE email_normalized = :email LIMIT 1/);
  assert.match(auth, /SELECT \* FROM users WHERE lower\(name\) = lower\(:name\) LIMIT 1/);
  assert.doesNotMatch(auth, /pass_hash\s*=>|password_hash\(|schema_migrations|function bl_send_text_mail/);
});

test('outbound text-mail configuration has one focused boundary', () => {
  const config = read('sitewide/api/config.php');
  const mail = read('sitewide/api/mail.php');
  assert.match(config, /require_once __DIR__ \. '\/mail\.php'/);
  assert.doesNotMatch(config, /function bl_(?:mail_from_email|mail_from_name|send_text_mail)\b/);
  for(const name of ['bl_mail_from_email','bl_mail_from_name','bl_send_text_mail']){
    assert.match(mail, new RegExp(`function ${name}\\b`), `${name} is missing from the mail boundary`);
  }
  assert.match(mail, /Content-Type: text\/plain; charset=UTF-8/);
  assert.match(mail, /BL_MAIL_FROM_EMAIL/);
  assert.match(mail, /BL_MAIL_FROM_NAME/);
});

test('password reset token handling has one focused account recovery boundary', () => {
  const config = read('sitewide/api/config.php');
  const recovery = read('sitewide/api/account_recovery.php');
  assert.match(config, /require_once __DIR__ \. '\/account_recovery\.php'/);
  assert.doesNotMatch(config, /function bl_(?:hash_verifier|generate_selector|generate_verifier|issue_password_reset|lookup_password_reset|mask_email|complete_password_reset)\b/);
  for(const name of ['bl_hash_verifier','bl_generate_selector','bl_generate_verifier','bl_issue_password_reset','bl_lookup_password_reset','bl_mask_email','bl_complete_password_reset']){
    assert.match(recovery, new RegExp(`function ${name}\\b`), `${name} is missing from the account recovery boundary`);
  }
  assert.match(recovery, /random_bytes/);
  assert.match(recovery, /hash_equals/);
  assert.match(recovery, /password_hash/);
  assert.match(recovery, /DELETE FROM password_reset_tokens WHERE user_id = :uid/);
});

test('SQLite connection, schema migration and rate limiting have one database boundary', () => {
  const config = read('sitewide/api/config.php');
  const database = read('sitewide/api/database.php');
  assert.match(config, /require_once __DIR__ \. '\/database\.php'/);
  assert.doesNotMatch(config, /function bl_(?:db_path|table_columns|column_exists|ensure_schema|apply_core_schema|apply_schema_migration|rate_limit_allow|require_rate_limit|db)\b/);
  for(const name of ['bl_db_path','bl_table_columns','bl_column_exists','bl_ensure_schema','bl_apply_core_schema','bl_apply_schema_migration','bl_rate_limit_allow','bl_require_rate_limit','bl_db']){
    assert.match(database, new RegExp(`function ${name}\\b`), `${name} is missing from the database boundary`);
  }
  assert.match(database, /new PDO\('sqlite:' \./);
  assert.match(database, /PRAGMA user_version/);
  assert.match(database, /schema_migrations/);
  assert.match(database, /rate_limit_events/);
});

test('the canonical rewrite owns root API routes without physical shadow endpoints', () => {
  const htaccess = read('.htaccess');
  assert.match(htaccess, /RewriteRule \^api\/\(\.\*\)\$ sitewide\/api\/\$1 \[L,QSA\]/);
  for (const route of ['login','me','logout','auth_providers','register','forgot_password','password_reset']) {
    assert.equal(fs.existsSync(path.join(root, `api/${route}.php`)), false, `${route}.php must not become a root shadow endpoint`);
  }
});

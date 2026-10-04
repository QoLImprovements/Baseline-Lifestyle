import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');

test('persistent and runtime directories cannot enter a deployment commit', () => {
  const ignore = read('.gitignore');
  assert.match(ignore, /^\/Saved Data\/$/m);
  assert.match(ignore, /^\/Runtime\/$/m);
  assert.match(ignore, /^\.baseline-private\.env$/m);
  assert.equal(fs.existsSync(path.join(root, 'Saved Data')), false);
  assert.equal(fs.existsSync(path.join(root, 'Runtime')), false);
});

test('private environment fallback is bounded, permission-checked, and allowlisted', () => {
  const config = read('sitewide/api/config.php');
  const source = read('sitewide/api/private_environment.php');
  assert.match(config, /require_once __DIR__ \. '\/private_environment\.php'/);
  assert.doesNotMatch(config, /parse_ini_file|BASELINE_PRIVATE_ENV_PATH/);
  assert.match(source, /\.baseline-private\.env/);
  assert.match(source, /\(\$permissions & 0077\) !== 0/);
  assert.match(source, /\$size > 16384/);
  assert.match(source, /parse_ini_file/);
  assert.match(source, /array_fill_keys/);
  assert.match(source, /BASELINE_SAVED_DATA_PATH/);
  assert.match(source, /BASELINE_RUNTIME_PATH/);
  assert.match(source, /BL_CHARITY_SHOP_PIN/);
});

test('saved data paths require private absolute host configuration', () => {
  const source = read('sitewide/api/saved_data.php');
  assert.match(source, /BASELINE_SAVED_DATA_PATH/);
  assert.match(source, /BASELINE_RUNTIME_PATH/);
  assert.match(source, /_must_be_absolute/);
  assert.match(source, /_inside_document_root/);
  assert.match(source, /directory_is_symlink/);
  assert.doesNotMatch(source, /public_html\/Saved Data|__DIR__\s*\.\s*['"]\/Saved Data/);
});

test('saved resources preserve the agreed physical file structure', () => {
  const source = read('sitewide/api/saved_data.php');
  for(const file of ['account.json','favourites.json','binaural.json','fitness.json','voice.json','massage.json']){
    assert.ok(source.includes(`'${file}'`), `${file} is missing`);
  }
  for(const file of [
    'baseline-realm.json',
    'pairs.json',
    'detect-word.json',
    'make-24.json',
    'track-coin.json',
    'rule-shift.json',
    'darts-focused.json',
    'meridian-grove.json',
  ]){
    assert.ok(source.includes(`'${file}'`), `${file} is missing`);
  }
  assert.match(source, /sprintf\('%06d', \$userId\)/);
  assert.match(source, /'Account Index', 'accounts\.json'/);
  assert.match(source, /'Users'/);
  assert.match(source, /'Games'/);
  assert.match(source, /'Shared', 'Badminton', 'badminton\.json'/);
  assert.doesNotMatch(source, /badminton-session\.json/);
});

test('temporary and coordination files stay under Runtime', () => {
  const source = read('sitewide/api/saved_data.php');
  assert.match(source, /bl_saved_temporary_directory/);
  assert.match(source, /bl_saved_join\(bl_runtime_root\(\), 'Temporary Files'\)/);
  assert.match(source, /bl_saved_temporary_path\(\$path\)/);
  assert.match(source, /saved_data_and_runtime_must_share_filesystem/);
  assert.doesNotMatch(source, /bl_saved_join\(\$directory, 'baseline-temp-/);
  assert.match(source, /bl_saved_join\(bl_runtime_root\(\), 'Locks'\)/);
});

test('saved resources use revisions, validation, locks, and atomic replacement', () => {
  const source = read('sitewide/api/saved_data.php');
  assert.match(source, /expectedRevision/);
  assert.match(source, /revision_conflict/);
  assert.match(source, /temporary_resource_validation_failed/);
  assert.match(source, /flock\(\$handle, LOCK_EX\)/);
  assert.match(source, /rename\(\$temporary, \$path\)/);
  assert.match(source, /fsync/);
});

test('saved-data structure remains the target authority rather than a SQLite substitute', () => {
  const authority = read('sitewide/docs/SAVED_DATA_STRUCTURE_AUTHORITY_20260802.md');
  const status = read('sitewide/docs/MODERNISATION_STATUS_20260802.md');
  assert.match(authority, /Saved Data\/Users\/000001/);
  assert.match(authority, /Shared\/Badminton\/badminton\.json/);
  assert.match(authority, /one physical save file per played game/i);
  assert.match(authority, /SQLite.*migration source|migration source.*SQLite/is);
  assert.match(status, /target resource authority|target production authority/i);
  assert.match(status, /canonical resource files are authoritative/i);
  assert.match(status, /Live production Saved Data authority.*Not changed by repository work/is);
  assert.doesNotMatch(status, /Final data-authority architecture.*SQLite outside `public_html`/is);
});

test('supported migration entry points exclude authentication credentials', () => {
  const secure = read('sitewide/migration/sqlite_secure_exporter.php');
  const exportCli = read('sitewide/migration/export_sqlite_copy.php');
  const verifier = read('sitewide/migration/sqlite_export_verifier.php');
  const validation = read('sitewide/migration/sqlite_copy_validation.php');

  assert.match(secure, /intentionallyNotExportedFields/);
  assert.match(secure, /'pass_hash','google_sub'/);
  assert.doesNotMatch(secure, /passwordHash\s*=>/);
  assert.match(exportCli, /bl_secure_export_sqlite_copy/);
  assert.match(verifier, /bl_secure_export_sqlite_copy/);
  assert.match(validation, /bl_secure_export_sqlite_copy/);
  assert.doesNotMatch(exportCli, /\bbl_export_sqlite_copy\(/);
  assert.doesNotMatch(verifier, /\bbl_export_sqlite_copy\(/);
  assert.doesNotMatch(validation, /\bbl_export_sqlite_copy\(/);
});

test('environment example contains names only and no retired access-code fallback', () => {
  const example = read('.env.example');
  assert.match(example, /^BASELINE_SAVED_DATA_PATH=$/m);
  assert.match(example, /^BASELINE_RUNTIME_PATH=$/m);
  assert.match(example, /^BL_CHARITY_SHOP_PIN=$/m);
  for(const line of example.split(/\r?\n/)){
    if(!line || line.startsWith('#')) continue;
    assert.match(line, /^[A-Z0-9_]+=$/);
  }
  assert.doesNotMatch(read('sitewide/api/protected_access.php'), /BL_CHARITY_SHOP_PIN',\s*'\d+'/);
});

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

test('saved resources use stable IDs, narrow files, revisions, locks, and atomic replacement', () => {
  const source = read('sitewide/api/saved_data.php');
  for(const file of ['account.json','favourites.json','binaural.json','fitness.json','voice.json']){
    assert.ok(source.includes(`'${file}'`), `${file} is missing`);
  }
  assert.match(source, /sprintf\('%06d', \$userId\)/);
  assert.match(source, /'Games'/);
  assert.match(source, /badminton-session\.json/);
  assert.match(source, /expectedRevision/);
  assert.match(source, /revision_conflict/);
  assert.match(source, /flock\(\$handle, LOCK_EX\)/);
  assert.match(source, /rename\(\$temporary, \$path\)/);
  assert.match(source, /fsync/);
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

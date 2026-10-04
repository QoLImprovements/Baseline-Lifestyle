import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html = fs.readFileSync('systems/baseline-massage/baseline-massage.html', 'utf8');
const client = fs.readFileSync('systems/baseline-massage/js/baseline-massage-persistence.js', 'utf8');
const endpoint = fs.readFileSync('systems/baseline-massage/api/massage_data.php', 'utf8');
const savedData = fs.readFileSync('sitewide/api/saved_data.php', 'utf8');

test('Massage no longer persists application state in browser storage', () => {
  assert.doesNotMatch(html, /localStorage|sessionStorage/);
  assert.doesNotMatch(client, /localStorage|sessionStorage/);
  assert.match(html, /baseline-massage-persistence\.js/);
  assert.match(html, /id="massageSaveStatus"/);
});

test('Massage has an isolated account-scoped Saved Data resource', () => {
  assert.match(savedData, /'massage'\s*=>\s*'massage\.json'/);
  assert.match(endpoint, /bl_require_user_id\(\)/);
  assert.match(endpoint, /bl_saved_user_resource_path\(\$uid, 'massage'\)/);
  assert.match(endpoint, /bl_resource_required_revision_from_input/);
  assert.match(endpoint, /bl_resource_file_read/);
  assert.match(endpoint, /bl_resource_file_replace/);
});

test('Massage persistence is revision protected and fails closed', () => {
  assert.match(client, /revisions\?\.withExpected/);
  assert.match(client, /revisions\?\.remember/);
  assert.match(client, /revision_conflict/);
  assert.match(client, /saveBlocked = true/);
  assert.match(client, /Saving has been stopped to protect the account copy/);
  assert.match(client, /Saving stopped because the account copy changed elsewhere/);
  assert.doesNotMatch(client, /expectedRevision\s*:\s*[1-9]/);
});

test('Massage preference capture includes planner fields, checks, area timing and inner navigation', () => {
  assert.match(client, /plannerMode:/);
  assert.match(client, /libraryCategory:/);
  assert.match(client, /#planner input\[id\]/);
  assert.match(client, /#planner input\[type="checkbox"\]/);
  assert.match(client, /#planner \[data-area-time\]/);
  assert.match(client, /data-planner-mode/);
  assert.match(client, /data-library-category/);
});

test('Massage account copy wording does not promise an unimplemented provider-sharing surface', () => {
  assert.match(html, /saved to the receiver’s account rather than browser storage/);
  assert.doesNotMatch(html, /visible only to the massage provider/);
});

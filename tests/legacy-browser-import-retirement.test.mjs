import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import { collectBrowserStorageInventory } from '../tools/browser-storage-inventory.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=relative=>readFileSync(path.join(root,relative),'utf8');

test('browser import/save authorities are fully retired from production runtime',()=>{
  const inventory=collectBrowserStorageInventory(root);
  assert.equal(inventory.unreviewedOccurrenceCount,0);
  assert.deepEqual(inventory.unreviewedGroups,[]);
  assert.deepEqual(inventory.reviewedGroups.map((group)=>group.pattern),['baseline.games.music.v1']);
});

test('current system save paths remain server-authoritative and revision protected',()=>{
  const food=read('systems/baseline-food-approach/js/food-data-service.js');
  const fitness=read('systems/baseline-fitness/js/fitness-saved-data-bridge.js');
  const fitnessRoutine=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
  const skincare=read('systems/baseline-natural-skincare/js/skincare-routine.js');
  const games=read('systems/baseline-recreation/js/baseline-recreation-core.js');
  const badmintonTransport=read('systems/baseline-badminton-session/js/badminton-session-server.js');
  const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');
  const massage=read('systems/baseline-massage/js/baseline-massage-persistence.js');

  for(const source of [food,fitness,fitnessRoutine,skincare,games,badmintonTransport,badminton,massage]){
    assert.doesNotMatch(source,/localStorage|sessionStorage|indexedDB/);
  }
  assert.match(food,/expectedRevision/);
  assert.match(fitness,/expectedRevision|withExpected/);
  assert.match(fitnessRoutine,/expectedRevision|revision/);
  assert.match(skincare,/expectedRevision/);
  assert.match(games,/expectedRevision/);
  assert.match(badminton,/expectedRevision/);
  assert.match(badminton,/serverRevision/);
  assert.match(badminton,/revision_conflict/);
  assert.match(massage,/expectedRevision|revision/);
});

test('shared Badminton remains server-only with no local fallback',()=>{
  const sources=[
    'systems/baseline-badminton-session/js/baseline-badminton-session.js',
    'systems/baseline-badminton-session/js/badminton-session-server.js',
    'systems/baseline-badminton-session/js/badminton-session-state-hydration.js',
    'systems/baseline-badminton-session/js/badminton-session-hardships.js'
  ].map(read).join('\n');
  assert.doesNotMatch(sources,/localStorage|sessionStorage|indexedDB/);
  assert.match(sources,/badminton_session\.php/);
});

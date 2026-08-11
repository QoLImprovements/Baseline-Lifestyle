from pathlib import Path

path=Path('systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js')
text=path.read_text()
old="""  async function loadForAuth(snapshot) {
    const authed=Boolean(snapshot?.authed);const owner=authed?String(snapshot.name || snapshot.user?.name || '').trim():'guest';const changed=normaliseOwner(owner)!==normaliseOwner(state.owner);state.authed=authed;state.owner=owner || 'guest';if (!changed && state.loaded) return;
    const local=readGroupLocal(state.owner);if (!authed) { state.groups=local.groups;state.assignments=local.assignments;state.loaded=true;schedulePatch();return; }
    const response=await groupRequest();if (response.ok && response.hasGroups) { state.groups=normaliseGroups(response.groups);state.assignments=normaliseAssignments(response.assignments,state.groups);writeGroupLocal(); } else { state.groups=local.groups;state.assignments=local.assignments;if (state.groups.length || Object.keys(state.assignments).length) saveGroupsNow(); }
    state.loaded=true;schedulePatch();
  }
"""
new="""  async function loadForAuth(snapshot) {
    const authed=Boolean(snapshot?.authed);const owner=authed?String(snapshot.name || snapshot.user?.name || '').trim():'guest';const changed=normaliseOwner(owner)!==normaliseOwner(state.owner);state.authed=authed;state.owner=owner || 'guest';if (!changed && state.loaded) return;

    /* Cached group state is part of the first stable My Routine render. Apply it
       synchronously instead of exposing the Plan and waiting for an animation
       frame to attach group/step controls. */
    const local=readGroupLocal(state.owner);
    state.groups=local.groups;
    state.assignments=local.assignments;
    state.loaded=true;
    patch();
    if (!authed) return;

    const before=JSON.stringify({ groups:state.groups,assignments:state.assignments });
    const response=await groupRequest();
    if (response.ok && response.hasGroups) {
      state.groups=normaliseGroups(response.groups);
      state.assignments=normaliseAssignments(response.assignments,state.groups);
      writeGroupLocal();
    } else if (state.groups.length || Object.keys(state.assignments).length) {
      saveGroupsNow();
    }
    const after=JSON.stringify({ groups:state.groups,assignments:state.assignments });
    if (after!==before) patch();
  }
"""
if text.count(old)!=1:
    raise SystemExit(f'expected one loadForAuth block, found {text.count(old)}')
path.write_text(text.replace(old,new,1))

# Public View Only deliberately mirrors the current private Summary structure.
test=Path('tests/routine-system-browser.spec.js')
text=test.read_text()
old="""  await page.locator('#fitnessPublicRoutineResult [data-public-view=\"summary\"]').click();
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Purpose:');
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Technique:');
"""
new="""  await page.locator('#fitnessPublicRoutineResult [data-public-view=\"summary\"]').click();
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Benefits and practical role');
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Mobility and controlled breathing');
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Progressive bodyweight training using the saved exercise plan.');
"""
if text.count(old)!=1:
    raise SystemExit(f'expected one Public Summary assertion block, found {text.count(old)}')
test.write_text(text.replace(old,new,1))

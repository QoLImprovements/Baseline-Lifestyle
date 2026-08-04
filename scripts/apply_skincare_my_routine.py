#!/usr/bin/env python3
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f'{label}: expected one match, found {count}')
    return text.replace(old, new, 1)


html_path = ROOT / 'systems/baseline-natural-skincare/baseline-natural-skincare.html'
html = html_path.read_text()

html = replace_once(
    html,
    '<link href="/systems/baseline-natural-skincare/css/baseline-natural-skincare.css?v=SKINCARE_CANONICAL_CSS_20260712" rel="stylesheet"/>',
    '<link href="/systems/baseline-natural-skincare/css/baseline-natural-skincare.css?v=SKINCARE_CANONICAL_CSS_20260712" rel="stylesheet"/>\n<link href="/systems/baseline-natural-skincare/css/skincare-routine.css?v=SKINCARE_MY_ROUTINE_20260804_1" rel="stylesheet"/>',
    'routine stylesheet link'
)

html = replace_once(
    html,
    '<button aria-selected="false" class="tab" data-target="support">Skin Support System</button>\n</nav>',
    '<button aria-selected="false" class="tab" data-target="support">Skin Support System</button>\n<button aria-selected="false" class="tab" data-target="routine">My Routine</button>\n</nav>',
    'My Routine tab'
)

routine_section = '''<!-- MY ROUTINE -->
<section class="section" id="routine">
<div class="routine-shell">
<div class="card routine-card">
<div class="routine-topbar">
<div>
<h2>My Routine</h2>
<p class="note">Build a personal self-care plan, state how often each action belongs in it, and keep a private completion log. The plan can remain private or be made public without exposing the log.</p>
</div>
<div class="routine-privacy">
<label for="routineVisibility">Routine visibility</label>
<select id="routineVisibility" aria-describedby="routineVisibilityDetail">
<option value="private">Private — only I can see it</option>
<option value="public">Public — others can view my plan</option>
</select>
<small id="routineVisibilityDetail">Private — only you can view your routine and log.</small>
<div class="routine-auth-line"><span id="routineAuthStatus">Local draft mode.</span><button class="routine-login" id="routineLoginBtn" type="button">Log in</button></div>
</div>
</div>
<div class="divider"></div>
<div class="routine-save-status" id="routineSaveStatus" aria-live="polite"></div>
</div>

<div class="card routine-card">
<div class="routine-builder-head">
<div><h2>Routine plan</h2><p class="note">Choose an action, then set its place, frequency, benefits and any personal details.</p></div>
</div>
<div class="routine-add-row">
<select id="routineActionSelect" aria-label="Select a self-care action"><option value="">Select a self-care action…</option></select>
<button class="routine-add-button" id="addRoutineActionBtn" type="button">Add to routine</button>
</div>
<div class="routine-items" id="routineItems" aria-live="polite"></div>
</div>

<div class="routine-layout">
<div class="card routine-card">
<h2>Routine summary</h2>
<p class="note">Your actions are shown in their chosen order with their benefits and intended frequency.</p>
<div class="routine-summary" id="routineSummary" aria-live="polite"></div>
</div>

<div class="card routine-card">
<div class="routine-log-head">
<div><h2>Routine log</h2><p class="note">Record what you completed. Weekly actions remain available until their weekly target is reached.</p></div>
<div class="routine-log-date"><label for="routineLogDate">Log date</label><input id="routineLogDate" type="date"/></div>
</div>
<div class="routine-log-progress" id="routineLogProgress">0 actions due</div>
<div class="routine-log-items" id="routineLogItems" aria-live="polite"></div>
</div>
</div>

<div class="card routine-card">
<div class="routine-public-head">
<div><h2>View a public routine</h2><p class="note">Search by profile name. Only the routine plan and benefits are shown; completion logs remain private.</p></div>
</div>
<div class="routine-public-search">
<input id="publicRoutineName" type="search" maxlength="40" placeholder="Profile name" aria-label="Profile name"/>
<button class="routine-add-button" id="findPublicRoutineBtn" type="button">View routine</button>
</div>
<div class="routine-public-result" id="publicRoutineResult" aria-live="polite"></div>
</div>
</div>
</section>
'''
html = replace_once(html, '</main>', routine_section + '</main>', 'My Routine section')

html = replace_once(
    html,
    '<script src="/sitewide/js/baseline-tabs.js?v=EDIT_VERSION_20260607_NO_VISIBLE_TAB_HASHES"></script>',
    '<script src="/sitewide/js/baseline-tabs.js?v=SKINCARE_ROUTINE_ROUTE_20260804_1"></script>',
    'tab route cache key'
)
html = replace_once(
    html,
    '<script src="/sitewide/js/baseline-api.js?v=SITEWIDE_API_BOUNDARY_20260802_1"></script><script src="/sitewide/js/baseline-store.js?v=SITEWIDE_STORE_BOUNDARY_20260802_1"></script><script src="/sitewide/js/baseline-auth.js?v=SITEWIDE_AUTH_CLIENT_20260802_1"></script><script src="/sitewide/js/baseline-shared.js?v=SITEWIDE_AUTH_CLIENT_20260802_1"></script>',
    '<script src="/sitewide/js/baseline-api.js?v=SITEWIDE_API_BOUNDARY_20260802_1"></script><script src="/sitewide/js/baseline-store.js?v=SITEWIDE_STORE_BOUNDARY_20260802_1"></script><script src="/sitewide/js/baseline-auth.js?v=SITEWIDE_AUTH_CLIENT_20260802_1"></script><script src="/sitewide/js/baseline-shared.js?v=SKINCARE_ROUTINE_ROUTE_20260804_1"></script>',
    'shared route cache key'
)
html = replace_once(
    html,
    '</script>\n</body>\n</html>',
    '</script>\n<script src="/systems/baseline-natural-skincare/js/skincare-routine-model.js?v=SKINCARE_MY_ROUTINE_20260804_1"></script>\n<script src="/systems/baseline-natural-skincare/js/skincare-routine.js?v=SKINCARE_MY_ROUTINE_20260804_1"></script>\n</body>\n</html>',
    'routine scripts'
)
html_path.write_text(html)

shared_path = ROOT / 'sitewide/js/baseline-shared.js'
shared = shared_path.read_text()
shared = replace_once(
    shared,
    "'baseline-natural-skincare.html': { base:'/baseline-natural-skincare', defaultTab:'system', tabs:{ system:'system', recipes:'recipes', ingredients:'ingredient-library', support:'skin-support-system' } },",
    "'baseline-natural-skincare.html': { base:'/baseline-natural-skincare', defaultTab:'system', tabs:{ system:'system', recipes:'recipes', ingredients:'ingredient-library', support:'skin-support-system', routine:'my-routine' } },",
    'shared skincare route map'
)
shared = shared.replace('SITEWIDE_GRADIENT_ALIGNMENT_20260801_1', 'SITEWIDE_SKINCARE_ROUTINE_ROUTE_20260804_1', 1)
shared_path.write_text(shared)

tabs_path = ROOT / 'sitewide/js/baseline-tabs.js'
tabs = tabs_path.read_text()
tabs = replace_once(
    tabs,
    '"baseline-natural-skincare.html": { base:"/baseline-natural-skincare", tabs:{ system:"system", recipes:"recipes", ingredients:"ingredient-library", support:"skin-support-system" } },',
    '"baseline-natural-skincare.html": { base:"/baseline-natural-skincare", tabs:{ system:"system", recipes:"recipes", ingredients:"ingredient-library", support:"skin-support-system", routine:"my-routine" } },',
    'fallback skincare route map'
)
tabs_path.write_text(tabs)

package_path = ROOT / 'package.json'
package = json.loads(package_path.read_text())
script = package['scripts']['test:structure']
if 'tests/skincare-my-routine.test.mjs' not in script:
    script += ' tests/skincare-my-routine.test.mjs'
package['scripts']['test:structure'] = script
package_path.write_text(json.dumps(package, indent=2) + '\n')

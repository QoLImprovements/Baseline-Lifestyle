import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();
const systemNames = [
  'baseline-badminton-session',
  'baseline-fitness',
  'baseline-food-approach',
  'baseline-games-hub',
  'baseline-massage',
  'baseline-natural-skincare',
  'baseline-psychology'
];
const ownedSystemNames = [...systemNames,'charity-shop'];
const ignoredWalkDirectories = new Set(['.git','node_modules','playwright-report','test-results']);

function walk(directory, output = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes:true })) {
    if (ignoredWalkDirectories.has(entry.name)) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full, output);
    else output.push(full);
  }
  return output;
}

test('runtime systems have one canonical owner and no root shadow folders', () => {
  const forbiddenRootFolders = ['api','games','css','js','rules','scripts', ...ownedSystemNames];
  for (const shadow of forbiddenRootFolders) {
    assert.equal(fs.existsSync(path.join(root, shadow)), false, `obsolete root folder remains: ${shadow}`);
  }
  assert.equal(fs.existsSync(path.join(root, 'docs')), true, 'root docs folder is the canonical documentation home');
  for (const file of walk(path.join(root, 'docs'))) {
    assert.match(file, /\.md$/i, `docs must remain documentation-only: ${path.relative(root,file)}`);
  }
  assert.equal(fs.existsSync(path.join(root, 'systems/baseline-games-hub/games')), true);
  assert.deepEqual(
    fs.readdirSync(path.join(root, 'systems'), { withFileTypes:true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort(),
    ownedSystemNames.sort()
  );
});

test('each primary system page lives inside its owning system folder', () => {
  for (const system of systemNames) {
    assert.equal(
      fs.existsSync(path.join(root, 'systems', system, `${system}.html`)),
      true,
      `${system} is missing its canonical HTML entry`
    );
  }
});

test('Fitness My Body is routed through the canonical Fitness system', () => {
  const htaccess = fs.readFileSync(path.join(root, '.htaccess'), 'utf8');
  const canonicalRule = 'RewriteRule ^baseline-fitness/(system|workout-routine|library|exercise-library|achievements|my-plan|my-body)/?$ systems/baseline-fitness/baseline-fitness.html [L,QSA]';
  assert.ok(htaccess.includes(canonicalRule), 'Fitness My Body is missing from the canonical system route');
  assert.equal(fs.existsSync(path.join(root, 'baseline-fitness/my-body/index.php')), false);
});

test('inactive change templates are absent', () => {
  const templates = walk(root)
    .filter((file) => path.basename(file) === 'change-template.md')
    .map((file) => path.relative(root, file));
  assert.deepEqual(templates, []);
});

test('obsolete Massage route copies are absent and the canonical router is retained', () => {
  for (const name of ['system','types','library','planner','ROUTING-README.txt']) {
    assert.equal(fs.existsSync(path.join(root, 'systems/baseline-massage', name)), false, `obsolete Massage file remains: ${name}`);
  }
  const router = fs.readFileSync(path.join(root, 'systems/baseline-massage/.htaccess'), 'utf8');
  assert.match(router, /RewriteRule \^baseline-massage\\\.html\$ \/sitewide\/page-shell\.php\?page=massage \[L,QSA\]/);
});

test('runtime source contains no unresolved merge conflicts', () => {
  const sourceExtensions = new Set(['.html','.css','.js','.mjs','.cjs','.php']);
  const conflicts = [];
  for (const file of walk(root)) {
    if (!sourceExtensions.has(path.extname(file).toLowerCase())) continue;
    const source = fs.readFileSync(file, 'utf8');
    if (/^(?:<<<<<<<|=======|>>>>>>>)/m.test(source)) conflicts.push(path.relative(root,file));
  }
  assert.deepEqual(conflicts, []);
});

test('runtime code and page files do not contain exact duplicate copies', () => {
  const runtimeExtensions = new Set(['.html','.css','.js','.mjs','.cjs','.php']);
  const groups = new Map();
  for (const file of walk(root)) {
    if (!runtimeExtensions.has(path.extname(file).toLowerCase())) continue;
    const data = fs.readFileSync(file);
    if (data.length === 0) continue;
    const key = `${data.length}:${crypto.createHash('sha256').update(data).digest('hex')}`;
    const list = groups.get(key) || [];
    list.push(path.relative(root,file));
    groups.set(key,list);
  }
  const duplicates = [...groups.values()].filter((items) => items.length > 1);
  assert.deepEqual(duplicates, []);
});

test('generated development artifacts are excluded by repository rules', () => {
  const ignoredEntries = new Set(
    fs.readFileSync(path.join(root, '.gitignore'), 'utf8')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
  );
  for (const name of ['node_modules/','playwright-report/','test-results/','/Saved Data/','/Runtime/']) {
    assert.equal(ignoredEntries.has(name), true, `${name} is missing from .gitignore`);
  }
});

test('large page styling is owned by canonical system stylesheets', () => {
  const expectations = [
    ['baseline-fitness', '/systems/baseline-fitness/css/baseline-fitness.css'],
    ['baseline-food-approach', '/systems/baseline-food-approach/css/baseline-food-approach.css'],
    ['baseline-games-hub', '/systems/baseline-games-hub/css/baseline-games-hub.css'],
    ['baseline-massage', '/systems/baseline-massage/css/baseline-massage.css'],
    ['baseline-natural-skincare', '/systems/baseline-natural-skincare/css/baseline-natural-skincare.css'],
    ['baseline-psychology', '/systems/baseline-psychology/css/baseline-psychology.css']
  ];
  for (const [system, href] of expectations) {
    const html = fs.readFileSync(path.join(root, 'systems', system, `${system}.html`), 'utf8');
    assert.ok(html.includes(href), `${system} does not load its canonical stylesheet`);
    const inlineCss = [...html.matchAll(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi)]
      .reduce((total, match) => total + match[1].trim().length, 0);
    assert.ok(inlineCss < 1000, `${system} still contains a large competing inline stylesheet`);
  }
});


test('security and performance repairs stay in place', () => {
  const runtimeExtensions = new Set(['.html','.css','.js','.mjs','.cjs','.php']);
  for (const file of walk(root)) {
    if (!runtimeExtensions.has(path.extname(file).toLowerCase())) continue;
    const source = fs.readFileSync(file, 'utf8');
    assert.equal(
      /\/systems\/([^/'"]+)\/systems\/\1\//.test(source),
      false,
      `duplicated system path remains in ${path.relative(root,file)}`
    );
  }

  const fitnessHtml = fs.readFileSync(path.join(root, 'systems/baseline-fitness/baseline-fitness.html'), 'utf8');
  assert.ok(fitnessHtml.includes('/sitewide/css/baseline-voice.css?v=BASELINE_VOICE_CANONICAL_20260720_1'));
  assert.ok(fitnessHtml.includes('/sitewide/js/baseline-voice.js?v=SAVED_DATA_REVISION_CLIENT_20260823_1'));
  assert.equal(fitnessHtml.includes('/systems/baseline-fitness/css/baseline-voice.css'), false);
  assert.equal(fitnessHtml.includes('/systems/baseline-fitness/js/baseline-voice.js'), false);
  assert.equal(fs.existsSync(path.join(root, 'systems/baseline-fitness/css/baseline-voice.css')), false);
  assert.equal(fs.existsSync(path.join(root, 'systems/baseline-fitness/js/baseline-voice.js')), false);
  assert.equal(fitnessHtml.includes('/sitewide/css/baseline-recipes.css'), false);

  const massageHtml = fs.readFileSync(path.join(root, 'systems/baseline-massage/baseline-massage.html'), 'utf8');
  assert.equal(massageHtml.includes('/sitewide/css/baseline-recipes.css'), false);
  assert.equal(massageHtml.includes('/sitewide/js/baseline-tabs.js'), false);

  const homeHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.equal(homeHtml.includes('/sitewide/js/baseline-ingredient-profiles.js'), false);
  assert.equal(homeHtml.includes('/sitewide/js/baseline-tabs.js'), false);

  const forgotPassword = fs.readFileSync(path.join(root, 'sitewide/api/forgot_password.php'), 'utf8');
  assert.equal(forgotPassword.includes('resetUrl'), false);
  assert.equal(forgotPassword.includes('fallback_link'), false);
});

test('primary pages expose canonical discovery metadata and a level-one heading', () => {
  const pages = [
    ['index.html', 'https://baselinelifestyle.org/home/1'],
    ...systemNames.map((system) => [
      path.join('systems', system, `${system}.html`),
      `https://baselinelifestyle.org/${system}/${system === 'baseline-games-hub' ? 'games-hub' : 'system'}`
    ])
  ];

  for (const [relativePath, canonical] of pages) {
    const html = fs.readFileSync(path.join(root, relativePath), 'utf8');
    assert.match(html, /<meta[^>]+name=["']description["'][^>]*>/i, `${relativePath} is missing a description`);
    assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${relativePath} has the wrong canonical URL`);
    assert.match(html, /role=["']heading["'][^>]+aria-level=["']1["']/i, `${relativePath} is missing a level-one heading`);
  }
});

test('database schemas are versioned instead of rebuilt on every API request', () => {
  const config = fs.readFileSync(path.join(root, 'sitewide/api/config.php'), 'utf8');
  const database = fs.readFileSync(path.join(root, 'sitewide/api/database.php'), 'utf8');
  assert.ok(config.includes("require_once __DIR__ . '/database.php'"));
  assert.ok(database.includes('bl_apply_core_schema($pdo);'));
  assert.equal(database.includes('bl_ensure_schema($pdo);'), false);

  const fitnessSchema = fs.readFileSync(path.join(root, 'systems/baseline-fitness/api/schema.php'), 'utf8');
  const gamesSchema = fs.readFileSync(path.join(root, 'systems/baseline-games-hub/api/schema.php'), 'utf8');
  const badmintonApi = fs.readFileSync(path.join(root, 'systems/baseline-badminton-session/api/badminton_session.php'), 'utf8');
  assert.ok(fitnessSchema.includes("bl_apply_schema_migration($db, 'fitness', 1"));
  assert.ok(gamesSchema.includes("bl_apply_schema_migration($db, 'games_hub', 1"));
  assert.ok(badmintonApi.includes("bl_apply_schema_migration($db, 'badminton_session', 1"));
});


test('home index uses one six-strip system layout with the agreed order and copy', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'sitewide/css/baseline-home.css'), 'utf8');
  const themes = fs.readFileSync(path.join(root, 'sitewide/css/baseline-themes.css'), 'utf8');

  const expected = [
    ['Baseline Food Approach', 'Vegan &amp; gluten-free food system focused on health and wellbeing.'],
    ['Baseline Massage', 'Grounded bodywork for muscular tension, recovery, comfort, and regulation.'],
    ['Baseline Personal Care', 'Natural products and recipes for the body and appearance.'],
    ['Baseline Fitness', 'Structured physical training covering calisthenics, cardio, flexibility and sport.'],
    ['Baseline Badminton Session', 'Organised play with generated matchups and alterations prioritising balanced competition.'],
    ['Baseline Games Hub', 'Dedicated space for restoration, cognitive challenge and linked progression.']
  ];

  let previous = -1;
  for (const [title, descriptor] of expected) {
    const position = html.indexOf(`aria-label="${title}"`);
    assert.ok(position > previous, `${title} is missing or out of order`);
    assert.ok(html.includes(descriptor), `${title} descriptor is not the agreed copy`);
    previous = position;
  }

  assert.equal((html.match(/class="system-lane /g) || []).length, 6);
  for (const obsolete of ['home-panels','home-panel--play','view-arrow','toBadmintonView','toSystemsView','blEmbed','blEmbedFrame','baselineHomeView']) {
    assert.equal(html.includes(obsolete), false, `obsolete index view-switching markup remains: ${obsolete}`);
    assert.equal(css.includes(obsolete), false, `obsolete index view-switching CSS remains: ${obsolete}`);
  }

  assert.ok(css.includes('--home-surface:linear-gradient(90deg'));
  assert.ok(css.includes('border-bottom:2px solid #000'));
  assert.ok(css.includes('border:2px solid #000'));
  assert.ok(css.includes('gap:11px'));
  assert.ok(css.includes('min-height:78px'));
  assert.ok(themes.includes('--scroll-track: #303036;'));
  assert.ok(themes.includes('--scroll-thumb: #62626c;'));
  assert.ok(themes.includes('--scroll-thumb-hover: #777782;'));
  assert.equal(css.includes('#bl-auth-flyout'), false, 'index stylesheet must not override the shared Account flyout');
  assert.equal(css.includes('#bl-beats-flyout'), false, 'index stylesheet must not retain dead Binaural flyout rules');
});

test('primary entry pages use one version key per static CSS and JavaScript asset', () => {
  const entries = [
    'index.html',
    'systems/baseline-food-approach/baseline-food-approach.html',
    'systems/baseline-massage/baseline-massage.html',
    'systems/baseline-natural-skincare/baseline-natural-skincare.html',
    'systems/baseline-psychology/baseline-psychology.html',
    'systems/baseline-badminton-session/baseline-badminton-session.html',
    'systems/baseline-fitness/baseline-fitness.html',
    'systems/baseline-games-hub/baseline-games-hub.html',
    'systems/charity-shop/charity-shop.php'
  ];

  for (const relative of entries) {
    const source = fs.readFileSync(path.join(root, relative), 'utf8');
    for (const match of source.matchAll(/(?:src|href)=["']([^"']+\.(?:css|js)\?[^"']+)["']/gi)) {
      const asset = match[1].replaceAll('&amp;', '&');
      const query = asset.slice(asset.indexOf('?') + 1);
      const parameters = query.split('&').filter(Boolean);
      assert.equal(parameters.length, 1, relative + ' has stacked static-asset cache parameters: ' + asset);
      assert.match(parameters[0], /^v=[A-Za-z0-9._-]+$/, relative + ' static assets must use one v= build key: ' + asset);
    }
  }

  const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.match(home, /baseline-home\.css\?v=HOME_SINGLE_PAGE_20261022_1/);
});

test('Baseline Personal Care is the visible system name while the existing route stays compatible', () => {
  const retiredSystemName = ['Baseline','Natural','Skincare'].join(' ');
  const retiredFavorites = ['Baseline','Skincare','Favorites'].join(' ');
  const publicRuntimeExtensions = new Set(['.html','.css','.js','.mjs','.cjs','.php']);
  const publicRuntimeFiles = [
    path.join(root, 'index.html'),
    ...walk(path.join(root, 'sitewide')),
    ...walk(path.join(root, 'systems'))
  ].filter((file) => publicRuntimeExtensions.has(path.extname(file).toLowerCase()));

  for (const file of publicRuntimeFiles) {
    const source = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(root, file);
    assert.equal(source.includes(retiredSystemName), false, `retired visible name remains in ${relativePath}`);
    assert.equal(source.includes(retiredFavorites), false, `retired favourites label remains in ${relativePath}`);
  }

  const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const personalCare = fs.readFileSync(path.join(root, 'systems/baseline-natural-skincare/baseline-natural-skincare.html'), 'utf8');
  const shared = fs.readFileSync(path.join(root, 'sitewide/js/baseline-shared.js'), 'utf8');
  assert.ok(home.includes('Baseline Personal Care'));
  assert.ok(personalCare.includes('<title>Baseline Personal Care</title>'));
  assert.ok(personalCare.includes('aria-level="1">Baseline Personal Care</div>'));
  assert.ok(shared.includes("['/baseline-natural-skincare/system','Baseline Personal Care']"));
  assert.ok(home.includes('href="/baseline-natural-skincare/system"'), 'existing Personal Care route compatibility must be retained');
});


test('sitewide Contact control opens one themed shared flyout before Account', () => {
  const shared = fs.readFileSync(path.join(root, 'sitewide/js/baseline-shared.js'), 'utf8');
  const sitewideCss = fs.readFileSync(path.join(root, 'sitewide/css/baseline-sitewide.css'), 'utf8');
  const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

  assert.ok(shared.includes("BASELINE_CONTACT_ICON_SVG"));
  assert.ok(shared.includes("'bl-contact-toggle'"));
  assert.ok(shared.includes("ariaLabel:'Contact Baseline Lifestyle'"));
  assert.ok(shared.includes("function setupContactFlyout()"));
  assert.ok(shared.includes("fly.id = 'bl-contact-flyout'"));
  assert.ok(shared.includes("Want to ask a question, share thoughts, or suggest ideas for future additions? I’d like to hear from you."));
  assert.ok(shared.includes('class="bl-contact-email-icon"'));
  assert.ok(shared.includes("mailto:contact@baselinelifestyle.org"));
  assert.ok(shared.includes(">contact@baselinelifestyle.org</a>"));
  assert.equal(shared.includes("href:'/contact/'"), false, 'Contact must open a panel rather than navigate to a Contact page');
  assert.ok(shared.includes("control.setAttribute('aria-label', ariaLabel)"));

  const controlsStart = shared.indexOf('function ensureRightControls(container)');
  const controlsEnd = shared.indexOf('function closePagesMenu', controlsStart);
  const controls = shared.slice(controlsStart, controlsEnd);
  assert.ok(controlsStart >= 0 && controlsEnd > controlsStart);
  assert.equal((controls.match(/'bl-contact-toggle'/g) || []).length, 1, 'Contact must have one shared control owner');
  assert.ok(controls.indexOf("'bl-beats-toggle'") < controls.indexOf("'bl-contact-toggle'"));
  assert.ok(controls.indexOf("'bl-contact-toggle'") < controls.indexOf("'bl-auth-toggle'"));

  assert.ok(sitewideCss.includes('#bl-contact-toggle'));
  assert.ok(sitewideCss.includes('body[data-app="home"] #bl-contact-toggle'));
  assert.ok(sitewideCss.includes('#bl-contact-flyout .bl-contact-copy'));
  assert.ok(sitewideCss.includes('#bl-contact-flyout .bl-contact-email-row'));
  assert.ok(sitewideCss.includes('#bl-contact-flyout .bl-contact-email-icon'));
  assert.ok(sitewideCss.includes('#bl-contact-flyout .bl-contact-email'));
  assert.ok(sitewideCss.includes('body[data-app] #bl-contact-flyout .card'));
  assert.equal(sitewideCss.includes('body[data-app="home"] #bl-beats-toggle'), false, 'Home Binaural absence must be owned by shared JS, not hidden by CSS');
  assert.equal(home.includes('id="bl-contact-toggle"'), false, 'Contact must be owned by shared header generation, not duplicated in homepage markup');
  assert.equal(fs.existsSync(path.join(root, 'contact/index.html')), false, 'Contact must not have a standalone page');
});




test('desktop header utility icons have consistent breathing room and vertical alignment', () => {
  const sitewideCss = fs.readFileSync(path.join(root, 'sitewide/css/baseline-sitewide.css'), 'utf8');
  const headerCss = fs.readFileSync(path.join(root, 'sitewide/css/baseline-header-canonical.css'), 'utf8');

  assert.ok(
    sitewideCss.includes('gap:10px !important;'),
    'desktop shared header controls must keep a 10px icon-label gap'
  );
  assert.ok(
    sitewideCss.includes('flex:0 0 22px !important;'),
    'desktop utility icons must use a fixed square for optical alignment'
  );
  assert.ok(
    sitewideCss.includes('#bl-contact-toggle .bl-btn-label'),
    'Contact must use the same label alignment contract as the other utilities'
  );
  assert.ok(
    headerCss.includes('gap:10px!important;'),
    'canonical system headers must preserve the same desktop icon-label gap'
  );
  assert.ok(
    headerCss.includes('#bl-contact-toggle .bl-btn-label'),
    'canonical system headers must align Contact consistently with Account and Binaural'
  );
});
test('mobile header keeps branding visible through one consolidated utility menu', () => {
  const shared = fs.readFileSync(path.join(root, 'sitewide/js/baseline-shared.js'), 'utf8');
  const sitewideCss = fs.readFileSync(path.join(root, 'sitewide/css/baseline-sitewide.css'), 'utf8');
  const headerCss = fs.readFileSync(path.join(root, 'sitewide/css/baseline-header-canonical.css'), 'utf8');
  const homeCss = fs.readFileSync(path.join(root, 'sitewide/css/baseline-home.css'), 'utf8');
  const protectedAccessCss = fs.readFileSync(path.join(root, 'sitewide/css/baseline-protected-access.css'), 'utf8');
  const protectedKeyCss = fs.readFileSync(path.join(root, 'sitewide/css/baseline-protected-key-placement.css'), 'utf8');

  assert.ok(shared.includes("id = 'bl-mobile-actions-toggle'"));
  assert.ok(shared.includes("menu.id = 'bl-mobile-actions-menu'"));
  assert.ok(shared.includes("['blProtectedKey','Protected sections']"));
  assert.ok(shared.includes("['bl-beats-toggle','Binaural']"));
  assert.ok(shared.includes("['bl-contact-toggle','Contact']"));
  assert.ok(shared.includes("['bl-auth-toggle','Account']"));
  const accountOrder = shared.indexOf("['bl-auth-toggle','Account']");
  const protectedOrder = shared.indexOf("['blProtectedKey','Protected sections']");
  const contactOrder = shared.indexOf("['bl-contact-toggle','Contact']");
  assert.ok(accountOrder >= 0 && accountOrder < protectedOrder && protectedOrder < contactOrder, 'mobile menu order must start Account, Protected sections, Contact');
  assert.ok(shared.includes("if(document.contains(target)) target.click()"), 'menu choices must activate the existing panel controls');
  assert.ok(shared.includes("ensureMobileActionsMenu(rightHome)"));
  assert.ok(shared.includes("ensureMobileActionsMenu(right)"));

  assert.ok(sitewideCss.includes('.bl-mobile-actions-menu'));
  assert.ok(sitewideCss.includes('.bl-homebar-right > .bl-mini-btn'));
  assert.ok(
    sitewideCss.includes('@media (min-width:901px){\n  #bl-beats-toggle,\n  #bl-contact-toggle,\n  #bl-auth-toggle{'),
    'late utility visibility authority must be desktop-only so it cannot override the mobile consolidation'
  );
  assert.ok(headerCss.includes('grid-template-areas:"pages right"!important'), 'mobile system header must be one row');
  assert.ok(headerCss.includes('--homebar-h:58px!important'), 'old two-row 106px mobile header must be retired');
  assert.ok(headerCss.includes('.bl-pages-menu .bl-pages-link'));
  assert.ok(headerCss.includes('white-space:nowrap!important'), 'system names must remain on one line');
  assert.ok(homeCss.includes('grid-template-areas:"title controls"'), 'Home must preserve Baseline Lifestyle beside one utility trigger');
  assert.match(homeCss, /\.system-separator\{\s*display:none;/, 'mobile home cards must hide the desktop hyphen separator');
  assert.ok(
    protectedAccessCss.includes('@media(min-width:901px){\n  html body[data-app="home"] #bl-auth-toggle{\n    display:inline-flex!important;'),
    'Home Account visibility must be desktop-only so mobile uses the consolidated menu'
  );
  assert.ok(headerCss.includes('.bl-homebar-right > .bl-mini-btn{\n    display:none!important;'), 'system-page utility controls must not remain visibly duplicated on mobile');
  assert.ok(protectedKeyCss.includes('@media (min-width:521px)'), 'protected key first-paint flex must not override the compact mobile grid');
});


test('primary entrypoints use one cache key per shared static asset', () => {
  const entries = [
    'index.html',
    'systems/baseline-food-approach/baseline-food-approach.html',
    'systems/baseline-massage/baseline-massage.html',
    'systems/baseline-natural-skincare/baseline-natural-skincare.html',
    'systems/baseline-psychology/baseline-psychology.html',
    'systems/baseline-fitness/baseline-fitness.html',
    'systems/baseline-badminton-session/baseline-badminton-session.html',
    'systems/baseline-games-hub/baseline-games-hub.html',
    'systems/charity-shop/charity-shop.php'
  ];
  const expected = new Map([
    ['/sitewide/css/baseline-themes.css','SITEWIDE_THEMES_CSS_20261021_1'],
    ['/sitewide/css/baseline-sitewide.css','SITEWIDE_SHARED_CSS_20261021_1'],
    ['/sitewide/css/baseline-header-canonical.css','SITEWIDE_HEADER_CSS_20261021_1'],
    ['/sitewide/css/baseline-protected-access.css','PROTECTED_ACCESS_CSS_20261021_1'],
    ['/sitewide/css/baseline-protected-key-placement.css','PROTECTED_KEY_CSS_20261021_1'],
    ['/sitewide/css/baseline-ui-fixes.css','SITEWIDE_UI_FIXES_20261021_1'],
    ['/sitewide/js/baseline-api.js','SITEWIDE_API_JS_20261021_1'],
    ['/sitewide/js/baseline-auth.js','SITEWIDE_AUTH_JS_20261021_1'],
    ['/sitewide/js/baseline-shared.js','SITEWIDE_SHARED_JS_20261021_1'],
    ['/sitewide/js/baseline-public-routine-viewonly-v4.js','SITEWIDE_PUBLIC_ROUTINE_VIEWONLY_JS_20261021_1'],
    ['/sitewide/js/baseline-routine-coherence-v12.js','SITEWIDE_ROUTINE_COHERENCE_JS_20261021_1'],
    ['/sitewide/js/baseline-ingredient-profiles.js','SITEWIDE_INGREDIENT_PROFILES_JS_20261022_1']
  ]);

  for (const entry of entries) {
    const source = fs.readFileSync(path.join(root, entry), 'utf8');
    for (const [asset, version] of expected) {
      if (!source.includes(asset)) continue;
      const escaped = asset.replaceAll('/', '\\/').replaceAll('.', '\\.');
      const match = source.match(new RegExp(escaped + "(?:\\?[^\"']*)?"));
      assert.ok(match, entry + ': missing ' + asset);
      assert.equal(
        match[0].replaceAll('&amp;','&'),
        asset + '?v=' + version,
        entry + ': inconsistent cache key for ' + asset
      );
    }
  }
});


test('retired Skincare group UI stylesheet stays removed', () => {
  const retired = path.join(root, 'systems/baseline-natural-skincare/css/skincare-routine-group-ui-v3.css');
  const page = fs.readFileSync(path.join(root, 'systems/baseline-natural-skincare/baseline-natural-skincare.html'), 'utf8');
  assert.equal(fs.existsSync(retired), false, 'unreferenced Skincare group UI stylesheet must stay retired');
  assert.doesNotMatch(page, /skincare-routine-group-ui-v3\.css/);
});

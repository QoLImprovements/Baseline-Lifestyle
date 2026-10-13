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
  'baseline-natural-skincare'
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
    ['baseline-natural-skincare', '/systems/baseline-natural-skincare/css/baseline-natural-skincare.css']
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

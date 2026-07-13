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
  const forbiddenRootFolders = ['api','games','css','js','rules','docs', ...systemNames];
  for (const shadow of forbiddenRootFolders) {
    assert.equal(fs.existsSync(path.join(root, shadow)), false, `obsolete root folder remains: ${shadow}`);
  }
  assert.equal(fs.existsSync(path.join(root, 'systems/baseline-games-hub/games')), true);
  assert.deepEqual(
    fs.readdirSync(path.join(root, 'systems'), { withFileTypes:true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort(),
    systemNames
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

test('obsolete Massage route copies and local routers are absent', () => {
  for (const name of ['system','types','library','planner','.htaccess','ROUTING-README.txt']) {
    assert.equal(fs.existsSync(path.join(root, 'systems/baseline-massage', name)), false, `obsolete Massage file remains: ${name}`);
  }
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
  for (const name of ['node_modules/','playwright-report/','test-results/']) {
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

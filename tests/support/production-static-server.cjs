const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const ROOT = path.resolve(__dirname, '../..');
const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || '127.0.0.1';
const CACHE_EPOCH = '20261022_2';
const CACHE_COOKIE = `baseline_recreation_runtime_epoch=${CACHE_EPOCH}`;
const GAME_DATA_PATH = '/systems/baseline-recreation/api/games_data.php';
const FAVOURITES_PATH = '/sitewide/api/favourites.php';
const gameProfiles = new Map();

const CONTENT_TYPES = Object.freeze({
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.php': 'text/plain; charset=utf-8'
});

const RECREATION_ROUTE = /^\/baseline-recreation\/(?:system|games(?:\/(?:pairs|detect-the-word|make-the-number|track-the-coin|rule-shift|block-grid|colour-sort|darts-focused|badminton-focused|baseline-realm))?|puzzles(?:\/(?:jigsaws(?:\/[^/]+)?|crossnumber))?|concepts(?:\/[^/]+)?)\/?$/;

/* Keep this route table aligned with the public Apache clean-route contract.
   Playwright must be able to refresh a virtual route directly; otherwise a
   browser reload tests a 404 instead of the production application. */
const STATIC_ROUTE_RULES = [
  [/^\/home\/(?:1|2)\/?$/, '/index.html'],
  [/^\/baseline-food-approach\/(?:system|recipes|ingredient-library|diet-log)\/?$/, '/systems/baseline-food-approach/baseline-food-approach.html'],
  [/^\/baseline-massage\/(?:system|library|planner)\/?$/, '/systems/baseline-massage/baseline-massage.html'],
  [/^\/baseline-natural-skincare\/(?:system|recipes|ingredient-library|skin-support-system|my-routine)\/?$/, '/systems/baseline-natural-skincare/baseline-natural-skincare.html'],
  [/^\/baseline-natural-skincare\/my-routine\/(?:log|summary|plan|public)\/?$/, '/systems/baseline-natural-skincare/baseline-natural-skincare.html'],
  [/^\/baseline-badminton-session\/(?:system|game-plan|ratings-standings|players-pairs|session-history)\/?$/, '/systems/baseline-badminton-session/baseline-badminton-session.html'],
  [/^\/baseline-fitness\/(?:system|workout-routine|library|exercise-library|achievements|my-routine|my-plan|my-body)\/?$/, '/systems/baseline-fitness/baseline-fitness.html'],
  [/^\/baseline-fitness\/my-body\/(?:profile|services)\/?$/, '/systems/baseline-fitness/baseline-fitness.html'],
  [/^\/baseline-fitness\/my-routine\/(?:log|summary|public)\/?$/, '/systems/baseline-fitness/baseline-fitness.html'],
  [/^\/baseline-fitness\/my-routine\/plan(?:\/(?:calisthenics|cardio|other|sports))?\/?$/, '/systems/baseline-fitness/baseline-fitness.html']
];

const DEFAULT_REDIRECTS = new Map([
  ['/', '/home/1'],
  ['/home', '/home/1'],
  ['/baseline-food-approach', '/baseline-food-approach/system'],
  ['/baseline-massage', '/baseline-massage/system'],
  ['/baseline-massage/types-of-massage', '/baseline-massage/library'],
  ['/baseline-massage/types', '/baseline-massage/library'],
  ['/baseline-massage/massage-library', '/baseline-massage/library'],
  ['/baseline-massage/plan-my-massage', '/baseline-massage/planner'],
  ['/baseline-natural-skincare/ingredient-library/castor', '/baseline-natural-skincare/ingredient-library/castor-oil'],
  ['/baseline-natural-skincare/ingredient-library/cucumber', '/baseline-natural-skincare/ingredient-library/cucumber-seed-oil'],
  ['/baseline-natural-skincare/ingredient-library/jojoba', '/baseline-natural-skincare/ingredient-library/jojoba-oil'],
  ['/baseline-natural-skincare/ingredient-library/shea', '/baseline-natural-skincare/ingredient-library/shea-butter'],
  ['/baseline-natural-skincare/ingredient-library/lavender-essential-oil', '/baseline-natural-skincare/ingredient-library/lavender'],
  ['/baseline-natural-skincare/ingredient-library/olive-oil', '/baseline-natural-skincare/ingredient-library/olive'],
  ['/baseline-natural-skincare/ingredient-library/rose-water', '/baseline-natural-skincare/ingredient-library/rosewater'],
  ['/baseline-natural-skincare/ingredient-library/safflower-oil', '/baseline-natural-skincare/ingredient-library/safflower'],
  ['/baseline-natural-skincare/recipes/testing-shaving-gel', '/baseline-natural-skincare/recipes/calming-shave-gel'],
  ['/baseline-natural-skincare/recipes/testing-natural-tooth-brightening-powder', '/baseline-natural-skincare/recipes/tooth-polishing-powder'],
  ['/baseline-natural-skincare/recipes/testing-microcurrent-conductive-gel', '/baseline-natural-skincare/recipes/microcurrent-glide-gel'],
  ['/baseline-natural-skincare/recipes/hydrating-conductive-mist', '/baseline-natural-skincare/recipes/microcurrent-glide-gel'],
  ['/baseline-natural-skincare/recipes/testing-lip-balm', '/baseline-natural-skincare/recipes/comfort-barrier-balm'],
  ['/baseline-natural-skincare', '/baseline-natural-skincare/system'],
  ['/baseline-badminton-session', '/baseline-badminton-session/system'],
  ['/baseline-fitness', '/baseline-fitness/system'],
  ['/baseline-recreation', '/baseline-recreation/system']
]);

function safePathname(rawPathname) {
  try {
    return decodeURIComponent(rawPathname).replace(/\\/g, '/');
  } catch {
    return rawPathname.replace(/\\/g, '/');
  }
}

function mapPath(pathname) {
  if (RECREATION_ROUTE.test(pathname)) return '/systems/baseline-recreation/baseline-recreation.html';

  for (const [pattern, target] of STATIC_ROUTE_RULES) {
    if (pattern.test(pathname)) return target;
  }

  let match = pathname.match(/^\/baseline-food-approach\/ingredient-library\/([^/]+)\/?$/);
  if (match) return `/systems/baseline-food-approach/ingredients/${match[1]}.html`;
  match = pathname.match(/^\/baseline-natural-skincare\/ingredient-library\/([^/]+)\/?$/);
  if (match) return '/systems/baseline-natural-skincare/baseline-natural-skincare.html';
  match = pathname.match(/^\/baseline-food-approach\/recipes\/([^/]+)\/?$/);
  if (match) return '/systems/baseline-food-approach/baseline-food-approach.html';
  match = pathname.match(/^\/baseline-natural-skincare\/recipes\/([^/]+)\/?$/);
  if (match) return '/systems/baseline-natural-skincare/baseline-natural-skincare.html';
  match = pathname.match(/^\/baseline-food-approach\/diet-log\/([^/]+)\/?$/);
  if (match) return `/systems/baseline-food-approach/Diet Log/${match[1]}.html`;

  return pathname;
}

function localFileFor(pathname) {
  const mapped = mapPath(pathname);
  const relative = mapped.replace(/^\/+/, '');
  const candidate = path.resolve(ROOT, relative);
  if (candidate !== ROOT && !candidate.startsWith(`${ROOT}${path.sep}`)) return null;
  return candidate;
}

function applyCacheHeaders(res, extension, pathname, requestHeaders) {
  if (extension === '.html' || extension === '.php') {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('X-LiteSpeed-Cache-Control', 'no-cache');
  } else if (['.css', '.js', '.mjs'].includes(extension)) {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.setHeader('X-LiteSpeed-Cache-Control', 'no-cache');
  } else if (['.svg', '.png', '.jpg', '.jpeg', '.webp', '.woff', '.woff2'].includes(extension)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }

  const cookie = String(requestHeaders.cookie || '');
  if (RECREATION_ROUTE.test(pathname) && !cookie.split(';').map((part) => part.trim()).includes(CACHE_COOKIE)) {
    res.setHeader('Clear-Site-Data', '"cache"');
    res.setHeader('Set-Cookie', `${CACHE_COOKIE}; Path=/; Max-Age=31536000; SameSite=Lax`);
  }
}

function sendError(res, status, message) {
  const body = Buffer.from(message, 'utf8');
  res.writeHead(status, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': body.length,
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function sendJson(res, status, payload) {
  const body = Buffer.from(JSON.stringify(payload), 'utf8');
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': body.length,
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
  });
  res.end(body);
}

function sendJavaScript(res, status, source) {
  const body = Buffer.from(String(source || ''), 'utf8');
  res.writeHead(status, {
    'Content-Type': 'text/javascript; charset=utf-8',
    'Content-Length': body.length,
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
  });
  res.end(body);
}

function handleFavouritesBootstrap(req, res, requestUrl) {
  if (req.method !== 'GET' || requestUrl.searchParams.get('bootstrap') !== '1') {
    return sendJson(res, 401, { ok:false, error:'not_logged_in' });
  }
  const app = String(requestUrl.searchParams.get('app') || '');
  const payload = JSON.stringify({ ready:true, authed:false, app, ids:[] });
  return sendJavaScript(res, 200, 'window.__BASELINE_RECIPE_FAVOURITES_BOOTSTRAP__=' + payload + ';');
}

function gameProfilesObject() {
  return Object.fromEntries([...gameProfiles.entries()].map(([app, profile]) => [app, profile]));
}

function handleGameData(req, res, requestUrl) {
  if (req.method === 'GET') {
    if (requestUrl.searchParams.has('bootstrap')) {
      return sendJson(res, 200, { ok:true, authed:true, profiles:gameProfilesObject(), updated_at:{} });
    }
    const app = String(requestUrl.searchParams.get('app') || '');
    const found = gameProfiles.has(app);
    return sendJson(res, 200, { ok:true, app, found, profile:found ? gameProfiles.get(app) : {}, updated_at:0 });
  }

  if (req.method !== 'POST') return sendJson(res, 405, { ok:false, error:'method_not_allowed' });
  const chunks = [];
  req.on('data', (chunk) => chunks.push(chunk));
  req.on('end', () => {
    let payload = {};
    try { payload = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'); } catch {}
    if (payload.action === 'migrate_missing') {
      const profiles = payload.profiles && typeof payload.profiles === 'object' ? payload.profiles : {};
      for (const [app, profile] of Object.entries(profiles)) {
        if (!gameProfiles.has(app) && profile && typeof profile === 'object') gameProfiles.set(app, profile);
      }
      return sendJson(res, 200, { ok:true, profiles:gameProfilesObject(), updated_at:{} });
    }
    const app = String(payload.app || '');
    const profile = payload.profile && typeof payload.profile === 'object' ? payload.profile : {};
    if (app) gameProfiles.set(app, profile);
    return sendJson(res, 200, { ok:true, app, profile, updated_at:Math.floor(Date.now() / 1000) });
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url || '/', `http://${req.headers.host || `${HOST}:${PORT}`}`);
  let pathname = safePathname(requestUrl.pathname);
  if (pathname.length > 1) pathname = pathname.replace(/\/+$/, '');

  const malformedFitness = pathname.match(/^\/baseline-fitness\/my-routine(?:\/(?:log|summary|public|plan(?:\/(?:calisthenics|cardio|other|sports))?))?\/(system|my-plan|my-body|library|exercise-library|achievements)$/i);
  if (malformedFitness) {
    res.writeHead(302, { Location: `/baseline-fitness/${malformedFitness[1].toLowerCase()}`, 'Cache-Control':'no-store' });
    res.end();
    return;
  }

  const redirect = DEFAULT_REDIRECTS.get(pathname);
  if (redirect) {
    res.writeHead(302, { Location: redirect, 'Cache-Control':'no-store' });
    res.end();
    return;
  }

  if (pathname === GAME_DATA_PATH) return handleGameData(req, res, requestUrl);
  if (pathname === FAVOURITES_PATH) return handleFavouritesBootstrap(req, res, requestUrl);

  const filePath = localFileFor(pathname);
  if (!filePath) return sendError(res, 403, 'Forbidden');

  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) return sendError(res, 404, `Not found: ${pathname}`);
    const extension = path.extname(filePath).toLowerCase();
    const contentType = CONTENT_TYPES[extension] || 'application/octet-stream';
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('ETag', '');
    applyCacheHeaders(res, extension, requestUrl.pathname, req.headers);

    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    if (req.method !== 'GET') return sendError(res, 405, 'Method not allowed');

    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!res.headersSent) sendError(res, 500, 'Read error');
      else res.destroy();
    });
    stream.pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  process.stdout.write(`Production static test server listening on http://${HOST}:${PORT}\n`);
});

function close() {
  server.close(() => process.exit(0));
}
process.on('SIGTERM', close);
process.on('SIGINT', close);

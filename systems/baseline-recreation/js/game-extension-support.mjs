export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[character]));
}

export function clone(value) {
  try { return value && typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : null; }
  catch (_) { return null; }
}

export function ensureStylesheet(href, marker) {
  if (document.querySelector(`link[data-game-extension-style="${marker}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.dataset.gameExtensionStyle = marker;
  document.head.appendChild(link);
}

export function gameStorage() {
  const storage = globalThis.BaselineGameStorage;
  return storage && typeof storage.getProfile === 'function' ? storage : null;
}

export function loadStoredProfile(app, defaults, normalise) {
  const storage = gameStorage();
  const raw = storage?.getProfile?.(app);
  return normalise(raw || clone(defaults) || {});
}

export function saveStoredProfile(app, profile) {
  const storage = gameStorage();
  if (!storage) return false;
  storage.setTemporaryProfile?.(app, profile);
  storage.saveProfile?.(app, profile);
  return true;
}

function testingGroup(list) {
  return [...(list?.querySelectorAll('.games-list-group') || [])]
    .find(node => node.textContent.trim() === 'Testing') || null;
}

function insertGameExtensionRow(list, row, order) {
  const testing = testingGroup(list);
  const existingRows = [...list.querySelectorAll('[data-game-extension-overview-row]')]
    .filter(node => node !== row)
    .sort((a, b) => Number(a.dataset.gameExtensionOrder || 0) - Number(b.dataset.gameExtensionOrder || 0));

  const allRows = [...existingRows, row]
    .sort((a, b) => Number(a.dataset.gameExtensionOrder || 0) - Number(b.dataset.gameExtensionOrder || 0));

  allRows.forEach(node => {
    node.dataset.gameExtensionOrder = String(node === row ? order : node.dataset.gameExtensionOrder || 0);
    node.dataset.coreGameExtension = 'true';
    if (testing) list.insertBefore(node, testing);
    else list.appendChild(node);
  });
}

function overviewRow(config, progressText) {
  const wrapper = document.createElement('div');
  wrapper.className = 'game-row-wrap game-extension-overview-row';
  wrapper.dataset.gameCard = config.id;
  wrapper.dataset.gameExtensionOverviewRow = config.id;
  wrapper.dataset.gameExtensionOrder = String(config.order || 0);
  wrapper.innerHTML = `
    <button class="game-row" data-open-game-extension="${escapeHtml(config.id)}" type="button">
      <img class="game-card-art" src="${escapeHtml(config.art)}" alt="">
      <div class="game-row-copy">
        <h3>${escapeHtml(config.name)}</h3>
        <p>${escapeHtml(config.note)}</p>
      </div>
      <div class="game-row-meta">
        <strong data-game-extension-progress="${escapeHtml(config.id)}">${escapeHtml(progressText)}</strong>
        <span class="inline-note">Open game</span>
      </div>
    </button>
    <button class="game-row-info-button bl-info-button" data-bl-info-button
      data-bl-info-title="What this develops" data-bl-info-text="${escapeHtml(config.benefit)}"
      type="button" aria-label="What ${escapeHtml(config.name)} develops" aria-expanded="false"><span aria-hidden="true">i</span></button>`;
  return wrapper;
}

function showGamesSection() {
  document.querySelectorAll('.section').forEach(section => {
    const active = section.id === 'games';
    section.classList.toggle('active', active);
    if (section.id === 'games') section.hidden = !active;
  });
  document.querySelectorAll('.tab[data-target]').forEach(tab => {
    tab.setAttribute('aria-selected', String(tab.getAttribute('data-target') === 'games'));
  });
}

export function createGameExtensionShell(config) {
  let observer = null;

  function progressText() {
    try { return String(config.progressText?.() || 'Ready'); }
    catch (_) { return 'Ready'; }
  }

  function ensureOverviewEntry() {
    const list = document.getElementById('gamesList');
    if (!list) return null;
    let row = list.querySelector(`[data-game-extension-overview-row="${config.id}"]`);
    if (!row) {
      row = overviewRow(config, progressText());
      insertGameExtensionRow(list, row, config.order || 0);
    }
    const progress = row.querySelector(`[data-game-extension-progress="${config.id}"]`);
    if (progress) progress.textContent = progressText();
    return row;
  }

  function ensurePanel() {
    let panel = document.getElementById(config.panelId);
    if (panel) return panel;
    const grid = document.querySelector('#games > .grid');
    if (!grid) return null;
    const template = document.createElement('template');
    template.innerHTML = config.panelHtml().trim();
    panel = template.content.firstElementChild;
    if (!panel) return null;
    grid.appendChild(panel);
    return panel;
  }

  function open({ historyMode = 'push' } = {}) {
    const panel = ensurePanel();
    if (!panel) return null;
    showGamesSection();
    document.querySelectorAll('#games .game-panel').forEach(other => {
      const active = other === panel;
      other.classList.toggle('is-active', active);
      other.hidden = !active;
      other.setAttribute('aria-hidden', String(!active));
    });
    const games = document.getElementById('games');
    games?.classList.add('has-active-game');
    document.getElementById('gamesOverviewCard')?.setAttribute('aria-hidden', 'true');
    if (historyMode !== 'none') {
      try {
        const nextUrl = `/baseline-recreation/system/${config.id}`;
        const currentUrl = location.pathname + location.search + location.hash;
        if (currentUrl !== nextUrl) {
          const method = historyMode === 'replace' ? 'replaceState' : 'pushState';
          history[method]({ recreationGame:config.id }, '', nextUrl);
        }
      } catch (_) {}
    }
    document.documentElement.setAttribute('data-game-extension-open', config.id);
    config.onOpen?.();
    panel.querySelector('h2, h3, [tabindex="-1"]')?.focus?.({ preventScroll:true });
    return panel;
  }

  function close({ restoreOverview = true, historyMode = 'push' } = {}) {
    const panel = document.getElementById(config.panelId);
    panel?.classList.remove('is-active');
    if (panel) {
      panel.hidden = true;
      panel.setAttribute('aria-hidden', 'true');
    }
    if (document.documentElement.getAttribute('data-game-extension-open') === config.id) {
      document.documentElement.removeAttribute('data-game-extension-open');
    }
    config.onClose?.();
    if (restoreOverview) {
      document.getElementById('games')?.classList.remove('has-active-game');
      document.getElementById('gamesOverviewCard')?.removeAttribute('aria-hidden');
      if (historyMode !== 'none') {
        try {
          const nextUrl = '/baseline-recreation/games';
          const currentUrl = location.pathname + location.search + location.hash;
          if (currentUrl !== nextUrl) {
            const method = historyMode === 'replace' ? 'replaceState' : 'pushState';
            history[method]({ baselineGames:true }, '', nextUrl);
          }
        } catch (_) {}
      }
      document.querySelector(`[data-open-game-extension="${config.id}"]`)?.focus?.({ preventScroll:true });
    }
  }

  function refreshOverview() {
    ensureOverviewEntry();
  }

  function handleClick(event) {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const opener = target.closest(`[data-open-game-extension="${config.id}"]`);
    if (opener) {
      event.preventDefault();
      event.stopImmediatePropagation();
      open();
      return;
    }
    if (target.closest(`[data-close-game-extension="${config.id}"]`)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      close();
      return;
    }
    const panel = document.getElementById(config.panelId);
    if (!panel?.classList.contains('is-active')) return;
    const otherGameExtension = target.closest('[data-open-game-extension]');
    const coreGame = target.closest('[data-select-game], [data-open-darts-focused], [data-open-badminton-focused]');
    const tab = target.closest('.tab[data-target]');
    if ((otherGameExtension && otherGameExtension.getAttribute('data-open-game-extension') !== config.id) || coreGame || (tab && tab.getAttribute('data-target') !== 'games')) {
      close({ restoreOverview:false });
    }
  }

  function installObserver() {
    const list = document.getElementById('gamesList');
    if (!list || observer) return;
    observer = new MutationObserver(() => requestAnimationFrame(ensureOverviewEntry));
    observer.observe(list, { childList:true });
  }

  function routeMatches() {
    const path = String(location.pathname || '').toLowerCase().replace(/\/+$/, '');
    if (path.endsWith('/baseline-recreation/games/' + config.id)) return true;
    const hash = String(location.hash || '');
    return new URLSearchParams(hash.replace(/^#/, '')).get('game') === config.id;
  }

  function initialRouteOpen() {
    if (routeMatches()) open({ historyMode:'none' });
  }

  function syncFromBrowserHistory() {
    if (routeMatches()) {
      open({ historyMode:'none' });
      return;
    }
    const panel = document.getElementById(config.panelId);
    if (panel?.classList.contains('is-active')) close({ restoreOverview:true, historyMode:'none' });
  }

  function init() {
    ensureStylesheet(config.styleUrl, config.id);
    ensurePanel();
    ensureOverviewEntry();
    installObserver();
    document.addEventListener('click', handleClick, true);
    window.addEventListener('popstate', syncFromBrowserHistory);
    requestAnimationFrame(initialRouteOpen);
  }

  return Object.freeze({ init, open, close, ensurePanel, ensureOverviewEntry, refreshOverview });
}

export function xpNeededForLevel(level) {
  const value = Math.max(1, Math.floor(Number(level) || 1));
  return 80 + ((value - 1) * 35) + Math.floor(((value - 1) * (value - 1)) * 2.5);
}

export function awardXp(profile, amount) {
  let gain = Math.max(0, Math.floor(Number(amount) || 0));
  profile.level = Math.max(1, Math.floor(Number(profile.level) || 1));
  profile.xp = Math.max(0, Math.floor(Number(profile.xp) || 0)) + gain;
  while (profile.xp >= xpNeededForLevel(profile.level)) {
    profile.xp -= xpNeededForLevel(profile.level);
    profile.level += 1;
  }
  return profile;
}

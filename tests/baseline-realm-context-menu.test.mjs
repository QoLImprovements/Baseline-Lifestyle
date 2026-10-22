import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const inputManagerPath = 'systems/baseline-recreation/games/baseline-realm/shared/js/realm-input-manager.js';
const inputManager = fs.readFileSync(inputManagerPath, 'utf8');

test('Baseline Realm suppresses the browser context menu only inside its scene frame', () => {
  assert.equal(inputManager.includes("contextMenuSelector = '#realmSceneFrame'"), true);
  assert.equal(inputManager.includes("addEventListener('contextmenu', this.boundContextMenu, this.contextMenuEventCapture)"), true);
  assert.equal(inputManager.includes('event.target?.closest?.(this.contextMenuSelector)'), true);
  assert.equal(inputManager.includes('event.preventDefault()'), true);
  assert.equal(inputManager.includes('stopPropagation'), false);
  assert.equal(inputManager.includes("removeEventListener('contextmenu', this.boundContextMenu, this.contextMenuEventCapture || false)"), true);
});

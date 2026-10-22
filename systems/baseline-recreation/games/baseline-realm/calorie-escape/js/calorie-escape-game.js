import { worldRenderer } from './world-renderer.js';
import { obstacleRenderer } from './obstacle-renderer.js';
import { gameShell } from './game-shell.js';
import { uiMethods } from './ui-methods.js';
import { controls } from './controls.js';
import { runtimeLoop } from './runtime-loop.js';

export const calorieEscapeModules = Object.freeze({
  ...worldRenderer,
  ...obstacleRenderer,
  ...gameShell,
  ...uiMethods,
  ...controls,
  ...runtimeLoop
});

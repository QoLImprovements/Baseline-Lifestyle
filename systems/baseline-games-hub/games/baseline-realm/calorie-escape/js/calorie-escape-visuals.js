import { world } from './calorie-escape-world.js';
import { obstacleRenderer } from './calorie-escape-obstacles.js';
import { controllerMethods } from './calorie-escape-controller.js';

export const visualMethods = Object.freeze({ ...world, ...obstacleRenderer, ...controllerMethods });

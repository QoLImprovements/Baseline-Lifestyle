import { world } from './ce-world.js';
import { moduleB } from './module-b.js';
import { moduleC } from './module-c.js';

export const visualMethods = Object.freeze({ ...world, ...moduleB, ...moduleC });

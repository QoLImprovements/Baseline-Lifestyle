export const REALM_PERFORMANCE_BUDGETS = Object.freeze({
  mobile: Object.freeze({ startupMs: 3500, interactionMs: 120, frameMs: 24, transferBytes: 4_500_000 }),
  desktop: Object.freeze({ startupMs: 2200, interactionMs: 80, frameMs: 18, transferBytes: 7_000_000 })
});

function isMobileViewport(root = globalThis) {
  const width = Number(root?.innerWidth || 0);
  const coarse = Boolean(root?.matchMedia?.('(pointer: coarse)')?.matches);
  return coarse || (width > 0 && width < 900);
}

export class RealmPerformanceMonitor {
  constructor({ performanceImpl = globalThis.performance, eventBus, root = globalThis } = {}) {
    this.performance = performanceImpl;
    this.eventBus = eventBus;
    this.root = root;
    this.startedAt = this.performance?.now?.() || 0;
    this.interactions = [];
  }

  tier() {
    return isMobileViewport(this.root) ? 'mobile' : 'desktop';
  }

  budget() {
    return REALM_PERFORMANCE_BUDGETS[this.tier()];
  }

  measureInteraction(name, startedAt) {
    const durationMs = Math.max(0, (this.performance?.now?.() || 0) - Number(startedAt || 0));
    const result = { name, durationMs, budgetMs: this.budget().interactionMs, passed: durationMs <= this.budget().interactionMs };
    this.interactions.push(result);
    if (!result.passed) this.eventBus?.emit('realm:performance:violation', result);
    return result;
  }

  report() {
    const entries = this.performance?.getEntriesByType?.('resource') || [];
    const transferBytes = entries.reduce((total, entry) => total + Math.max(0, Number(entry.transferSize || 0)), 0);
    const startupMs = Math.max(0, (this.performance?.now?.() || 0) - this.startedAt);
    const budget = this.budget();
    const report = {
      tier: this.tier(),
      budget,
      startupMs,
      transferBytes,
      interactions: [...this.interactions],
      passed: startupMs <= budget.startupMs && transferBytes <= budget.transferBytes && this.interactions.every((entry) => entry.passed)
    };
    this.eventBus?.emit('realm:performance:report', report);
    return report;
  }
}

export const realmPerformanceInternals = Object.freeze({ isMobileViewport });

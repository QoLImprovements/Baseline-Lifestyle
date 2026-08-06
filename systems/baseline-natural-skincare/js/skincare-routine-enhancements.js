/* Baseline Natural Skincare — load the reusable sitewide My Routine system. */
(function (global) {
  'use strict';
  if (global.__BASELINE_SKINCARE_ROUTINE_LOADER_V16__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V16__ = true;

  function load(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function withTemporaryMutationObserver(createObserver, src) {
    const NativeObserver = global.MutationObserver;
    if (typeof NativeObserver !== 'function') return load(src);
    global.MutationObserver = createObserver(NativeObserver);
    return load(src).finally(() => {
      global.MutationObserver = NativeObserver;
    });
  }

  function loadWithRoutineMutationObserver(src) {
    const coreRenderRoots = new Set(['routineItems', 'routineSummary', 'routineLogItems']);
    const relevantMutations = (mutations) => (mutations || []).filter((mutation) => {
      const target = mutation && mutation.target;
      return Boolean(target && target.nodeType === 1 && coreRenderRoots.has(target.id));
    });

    return withTemporaryMutationObserver((NativeObserver) => class BaselineRoutineRenderObserver {
      constructor(callback) {
        this.observer = new NativeObserver((mutations, observer) => {
          const relevant = relevantMutations(mutations);
          if (relevant.length) callback(relevant, observer);
        });
      }

      observe(target, options) {
        this.observer.observe(target, options);
      }

      disconnect() {
        this.observer.disconnect();
      }

      takeRecords() {
        return relevantMutations(this.observer.takeRecords());
      }
    }, src);
  }

  function loadWithoutMutationObserver(src) {
    return withTemporaryMutationObserver(() => class BaselineQuietRoutineObserver {
      observe() {}
      disconnect() {}
      takeRecords() { return []; }
    }, src);
  }

  load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260806_2')
    /* The Skincare renderer must notice the base routine's delayed save render
       so groups, summaries and logs are reattached. The filtered observer only
       accepts replacements of the three base render roots, ignoring shared
       numbers, captions and calendar decorations to prevent rebuild loops. */
    .then(() => loadWithRoutineMutationObserver('/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260806_8'))
    /* The coherence layer remains event-driven. Its decorations must never own
       a second subtree observer or trigger a visual rebuild while being used. */
    .then(() => loadWithoutMutationObserver('/sitewide/js/baseline-routine-coherence-v4.js?v=SITEWIDE_ROUTINE_COHERENCE_20260806_10'))
    .then(() => load('/sitewide/js/baseline-skincare-routine-state-bridge-v1.js?v=SKINCARE_ROUTINE_STATE_BRIDGE_20260806_3'))
    .then(() => load('/sitewide/js/baseline-routine-coherence-events-v4.js?v=SITEWIDE_ROUTINE_COHERENCE_EVENTS_20260806_4'))
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);

const { test, expect } = require("@playwright/test");

const planPayload = {
  ok: true,
  hasPlan: true,
  planId: 91,
  planJson: {
    version: 6,
    startDate: "2026-07-01",
    frequency: "3x",
    sessions: 1,
    lengthMode: "sessions",
    days: [],
    timerStartDelay: 1,
    items: [
      {
        exercise: "Knee Push-Ups",
        baseline: 14,
        sets: 2,
        progressionType: "standard-reps",
      },
    ],
  },
  sessions: [
    {
      session_index: 1,
      scheduled_date: "2026-07-01",
      status: "planned",
      completed_at: null,
      updated_at: 0,
    },
  ],
  progress: { done: 0, total: 1, nextIndex: 1, startDate: "2026-07-01" },
};

test("voice workout can be started from the Calisthenics Routine Plan disclosure", async ({ page }) => {
  await page.addInitScript(() => {
    window.__realtimeChannels = [];
    const makeStream = () => {
      const track = { kind: "audio", enabled: true, stop() {} };
      return {
        getTracks: () => [track],
        getAudioTracks: () => [track],
        clone: () => makeStream(),
      };
    };

    class DataChannelMock {
      constructor() {
        this.readyState = "connecting";
        this.listeners = new Map();
        window.__realtimeChannels.push(this);
      }
      addEventListener(type, listener) {
        const listeners = this.listeners.get(type) || [];
        listeners.push(listener);
        this.listeners.set(type, listeners);
      }
      dispatch(type, event = {}) {
        for (const listener of this.listeners.get(type) || []) listener(event);
      }
      open() {
        this.readyState = "open";
        this.dispatch("open");
      }
      emit(event) {
        this.dispatch("message", { data: JSON.stringify(event) });
      }
      close() {
        this.readyState = "closed";
      }
    }

    window.RTCPeerConnection = class RTCPeerConnectionMock {
      constructor() {
        this.connectionState = "new";
        this.listeners = new Map();
      }
      addTrack() {}
      createDataChannel() {
        this.channel = new DataChannelMock();
        return this.channel;
      }
      addEventListener(type, listener) {
        this.listeners.set(type, listener);
      }
      async createOffer() {
        return { type: "offer", sdp: "v=0\r\nmock-offer" };
      }
      async setLocalDescription(description) {
        this.localDescription = description;
      }
      async setRemoteDescription() {
        this.connectionState = "connected";
        this.listeners.get("connectionstatechange")?.();
        setTimeout(() => this.channel.open(), 0);
      }
      close() {
        this.connectionState = "closed";
      }
    };

    window.AudioContext = class AudioContextMock {
      constructor() {
        this.state = "running";
      }
      async resume() {}
      async close() {}
      createAnalyser() {
        return {
          fftSize: 256,
          smoothingTimeConstant: 0,
          getByteTimeDomainData(data) {
            data.fill(128);
          },
        };
      }
      createMediaStreamSource() {
        return { connect() {}, disconnect() {} };
      }
    };

    window.speechSynthesis = {
      getVoices: () => [],
      speak: (utterance) => setTimeout(() => utterance.onend && utterance.onend(), 0),
      cancel: () => {},
      addEventListener: () => {},
    };
    window.SpeechSynthesisUtterance = function (text) {
      this.text = text;
    };
    Object.defineProperty(navigator, "mediaDevices", {
      configurable: true,
      value: { getUserMedia: async () => makeStream() },
    });
  });

  await page.route("**/api/me.php", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        ok: true,
        authed: true,
        name: "Voice Tester",
        user: { name: "Voice Tester" },
      }),
    }),
  );
  await page.route("**/systems/baseline-fitness/api/get_plan.php", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(planPayload),
    }),
  );
  await page.route("**/systems/baseline-fitness/api/list_plans.php", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        ok: true,
        plans: [{
          planId: planPayload.planId,
          name: "Voice Plan",
          planJson: planPayload.planJson,
          sessions: planPayload.sessions,
          progress: planPayload.progress,
        }],
      }),
    }),
  );
  await page.route("**/systems/baseline-fitness/api/fitness_state.php", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        ok: true,
        revision: 4,
        profile: {},
        activeWorkout: null,
        progressionHistory: { outcomes: [], failures: [] },
        selectedPlanId: planPayload.planId,
      }),
    }),
  );
  await page.route("**/systems/baseline-fitness/api/list_plans.php", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        ok: true,
        plans: [{
          planId: planPayload.planId,
          name: "Calisthenics Plan 1",
          planJson: planPayload.planJson,
          sessions: planPayload.sessions,
          progress: planPayload.progress,
        }],
      }),
    }),
  );
  await page.route("**/systems/baseline-fitness/api/fitness_state.php", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        ok: true,
        revision: 4,
        profile: null,
        activeWorkout: null,
        progressionHistory: { outcomes: [], failures: [] },
        selectedPlanId: planPayload.planId,
      }),
    }),
  );
  await page.route("**/systems/baseline-fitness/api/routine_state.php", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true, hasRoutine: false, visibility: "private", activities: [], logs: {} }),
    }),
  );
  await page.route("**/sitewide/api/voice_settings.php", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true, revision: 3, found: true, settings: {
        enabled: true,
        spokenResponses: true,
        language: "en-GB",
        maximumRestSeconds: 150
      } }),
    }),
  );
  await page.route("**/sitewide/api/realtime_transcription.php", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/sdp",
      body: "v=0\r\nmock-answer",
    }),
  );

  await page.goto("/baseline-fitness/my-plan", { waitUntil: "domcontentloaded" });
  await expect.poll(() => page.evaluate(() => ({ local:localStorage.length, session:sessionStorage.length }))).toEqual({ local:0, session:0 });
  await page.waitForFunction(() =>
    Boolean(
      window.BASELINE_fitnessWorkout &&
        window.BASELINE_voice &&
        window.BASELINE_fitnessVoice &&
        window.BASELINE_fitnessPlans &&
        window.BASELINE_auth,
    ),
  );
  await page.evaluate(() => window.BASELINE_auth.refresh());
  await expect.poll(() => page.evaluate(() => window.BASELINE_auth.get().authed)).toBe(true);
  await page.evaluate(() => window.BASELINE_fitnessPlans.refresh());
  await expect(page.locator("#calisthenicsPlanSelect")).toBeEnabled();
  await expect(page.locator("#calisthenicsPlanSelect")).toHaveValue("91");

  const myRoutineTab = page.locator('.tab[data-target="my-plan"]');
  await expect(myRoutineTab).toBeVisible();
  await myRoutineTab.click();

  const routinePlanTab = page.locator('[data-fitness-routine-view="plan"]');
  await expect(routinePlanTab).toBeVisible();
  await routinePlanTab.click();
  const calisthenicsCard = page.locator('details[data-fitness-plan-card="calisthenics"]');
  await expect(calisthenicsCard).toBeVisible();
  await calisthenicsCard.locator(':scope > summary').click();
  await expect(calisthenicsCard).toHaveAttribute('open', '');

  await expect(page.locator("#startVoiceWorkoutBtn")).toBeVisible();
  await page.locator("#startVoiceWorkoutBtn").click();
  await expect(page.locator("#voiceWorkoutModal")).toBeVisible();
  await expect(page.locator("#voiceWorkoutPrompt")).toContainText("Begin");
  await expect(page.locator("#voiceExerciseName")).toContainText("Knee Push-Ups");
  await page.waitForFunction(() =>
    window.__realtimeChannels?.some((channel) => channel.readyState === "open"),
  );
  await expect(page.locator("#voiceMicVisual")).toHaveAttribute("data-state", "listening");

  await page.locator("#voiceWorkoutSettingsBtn").click();
  await expect(page.locator("#bl-voice-flyout")).toBeVisible();
  await expect(page.locator("#bl-voice-close")).toBeVisible();
  await expect(page.locator("#bl-voice-settings-title")).toHaveText("Voice Control");
  await expect(page.locator(".bl-voice-intro")).toHaveText("Voice settings for workouts.");
  await expect(
    page.locator("#bl-voice-spoken").locator("xpath=following-sibling::span"),
  ).toContainText("Plays spoken workout guidance and feedback.");
  await expect(page.locator("#bl-voice-save")).toHaveText("Save & Close");

  const geometry = await page.evaluate(() => {
    const overlay = document.querySelector("#bl-voice-flyout");
    const card = document.querySelector("#bl-voice-flyout .bl-voice-settings-card");
    const workout = document.querySelector("#voiceWorkoutModal");
    const overlayRect = overlay.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    return {
      overlay: {
        left: overlayRect.left,
        top: overlayRect.top,
        right: overlayRect.right,
        bottom: overlayRect.bottom,
      },
      card: {
        left: cardRect.left,
        top: cardRect.top,
        right: cardRect.right,
        bottom: cardRect.bottom,
        scrollHeight: card.scrollHeight,
        clientHeight: card.clientHeight,
      },
      overlayZ: Number(getComputedStyle(overlay).zIndex || 0),
      workoutZ: Number(getComputedStyle(workout).zIndex || 0),
      transform: getComputedStyle(overlay).transform,
      viewport: { width: innerWidth, height: innerHeight },
    };
  });
  expect(geometry.transform).toBe("none");
  expect(geometry.overlay.left).toBeGreaterThanOrEqual(-1);
  expect(geometry.overlay.top).toBeGreaterThanOrEqual(-1);
  expect(geometry.overlay.right).toBeLessThanOrEqual(geometry.viewport.width + 1);
  expect(geometry.overlay.bottom).toBeLessThanOrEqual(geometry.viewport.height + 1);
  expect(geometry.card.left).toBeGreaterThanOrEqual(0);
  expect(geometry.card.top).toBeGreaterThanOrEqual(0);
  expect(geometry.card.right).toBeLessThanOrEqual(geometry.viewport.width);
  expect(geometry.card.bottom).toBeLessThanOrEqual(geometry.viewport.height);
  expect(geometry.card.scrollHeight).toBeLessThanOrEqual(geometry.card.clientHeight + 1);
  expect(geometry.overlayZ).toBeGreaterThan(geometry.workoutZ);

  await page.locator("#bl-voice-save").click();
  await expect(page.locator("#bl-voice-flyout")).toBeHidden();
  await page.locator("#voiceWorkoutSettingsBtn").click();
  await expect(page.locator("#bl-voice-flyout")).toBeVisible();
  await page.locator("#bl-voice-close").click();
  await expect(page.locator("#bl-voice-flyout")).toBeHidden();

  await page.evaluate(() => {
    const channel = [...window.__realtimeChannels]
      .reverse()
      .find((item) => item.readyState === "open");
    channel.emit({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "voice-command-1",
      delta: "Begin",
    });
  });

  await expect
    .poll(() => page.evaluate(() => window.BASELINE_fitnessVoice.state()))
    .toBe("awaiting_result");
  await expect(page.locator("#voiceWorkoutPrompt")).toContainText("Success or Fail");
});

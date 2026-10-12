!(function (t) {
  "use strict";
  const e = "BASELINE_FITNESS_VOICE_COUNTDOWN_20260822_1",
    i = `__${e}__`;
  if (t[i]) return;
  t[i] = !0;
  const n = Object.freeze({
      IDLE: "idle",
      BEGIN: "awaiting_begin",
      TIMING: "timing",
      RESULT: "awaiting_result",
      NUMBER: "awaiting_number",
      PAUSED: "paused",
      FINISHED: "finished",
      ERROR: "error",
    }),
    o = (t, e = document) => e.querySelector(t),
    a = {
      active: !1,
      state: n.IDLE,
      beforePause: n.IDLE,
      recognition: null,
      timer: null,
      remaining: 0,
      elapsed: 0,
      lastInstruction: "",
      handling: !1,
      meter: null,
      frame: 0,
      resultTimer: 0,
      microphoneState: "paused",
    },
    s = t.AudioContext || t.webkitAudioContext || null,
    c = t.speechSynthesis || null;
  function u(t) {
    return String(t ?? "")
      .toLowerCase()
      .replace(/[’']/g, "")
      .replace(/[^a-z0-9\s-]/g, " ")
      .replace(/-/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  const l = Object.freeze({
    async prepareMicrophone() {
      if (!t.isSecureContext) throw new Error("secure_context_required");
      if (!navigator.mediaDevices?.getUserMedia)
        throw new Error("microphone_unavailable");
      return (
        (await navigator.mediaDevices.getUserMedia({ audio: !0 }))
          .getTracks()
          .forEach((t) => t.stop()),
        !0
      );
    },
    speak: function (e) {
      const i = String(e || "").trim();
      if (!i || !c || !t.SpeechSynthesisUtterance) return Promise.resolve(!1);
      try {
        c.cancel();
      } catch (t) {}
      return new Promise((e) => {
        let n = !1;
        const o = (t) => {
          n || ((n = !0), e(Boolean(t)));
        };
        try {
          const e = new t.SpeechSynthesisUtterance(i);
          ((e.lang = "en-GB"),
            (e.onend = () => o(!0)),
            (e.onerror = () => o(!1)),
            c.speak(e),
            t.setTimeout(() => o(!1), Math.max(5e3, 180 * i.length)));
        } catch (t) {
          o(!1);
        }
      });
    },
    stopSpeaking() {
      try {
        c?.cancel?.();
      } catch (t) {}
    },
    parseNumber(t) {
      const e = u(t).match(/\b\d{1,5}\b/);
      return e ? Number(e[0]) : null;
    },
    openSettings() {},
    closeSettings() {},
  });
  function d() {
    return t.BASELINE_voice || l;
  }
  function p() {
    return t.BASELINE_fitnessWorkout || null;
  }
  function m() {
    return p()?.getCurrentContext?.() || null;
  }
  function v(t, e) {
    const i = o(t);
    i &&
      ("#voiceLastTranscript" === t && i.querySelector("#voiceMicVisual")
        ? (i.dataset.lastTranscript = String(e ?? ""))
        : (i.textContent = String(e ?? "")));
  }
  function h(t) {
    v("#voiceWorkoutPrompt", t);
  }
  function g(t) {
    const e = d()?.parseNumber?.(t);
    if (Number.isFinite(e)) return Math.max(0, Math.round(e));
    const i = u(t).match(/\b\d{1,5}\b/);
    return i ? Math.max(0, Math.round(Number(i[0]))) : null;
  }
  function selectResponsiveTranscript(t, e) {
    const i = d(),
      r = [t, ...(Array.isArray(e) ? e : [])]
        .map((t) => String(t || "").trim())
        .filter(Boolean);
    let s = i?.commandForAlternatives?.(t, e, ["stop_voice_workout", "repeat"]);
    if (s)
      return "stop_voice_workout" === s.command
        ? "stop voice workout"
        : "repeat";
    if (
      a.state === n.BEGIN &&
      (s = i?.commandForAlternatives?.(t, e, ["start", "ready"]))
    )
      return "ready" === s.command ? "ready" : "begin";
    if (
      a.state === n.RESULT &&
      (s = i?.commandForAlternatives?.(t, e, ["succeeded", "failed"]))
    )
      return s.command;
    if (a.state === n.NUMBER) {
      const n = i?.parseNumberFromAlternatives?.(t, e);
      if (n?.transcript) return n.transcript;
    }
    for (const t of r) {
      const e = u(t);
      if (/\b(stop|end|cancel)\s+(voice\s+)?workout\b|\brepeat\b/.test(e))
        return t;
      if (a.state === n.BEGIN && /\b(begin|start|ready|go)\b/.test(e))
        return "begin";
      if (
        a.state === n.RESULT &&
        /\b(success|succeeded|successful|complete|completed|fail|failed|failure)\b/.test(
          e,
        )
      )
        return t;
      if (a.state === n.NUMBER && null !== g(t)) return t;
    }
    return r[0] || "";
  }

  const REALTIME_ENDPOINT = "/sitewide/api/realtime_transcription.php";

  function realtimeTranscriptEvent(event, previous = "") {
    if (!event || typeof event !== "object") return null;
    if (
      event.type === "conversation.item.input_audio_transcription.delta" &&
      typeof event.delta === "string"
    ) {
      return {
        transcript: `${previous}${event.delta}`,
        isFinal: false,
        itemId: String(event.item_id || "default"),
      };
    }
    if (
      event.type === "conversation.item.input_audio_transcription.completed" &&
      typeof event.transcript === "string"
    ) {
      return {
        transcript: event.transcript.trim(),
        isFinal: true,
        itemId: String(event.item_id || "default"),
      };
    }
    return null;
  }

  function createRealtimeTranscription(options = {}) {
    if (!t.RTCPeerConnection) throw new Error("webrtc_unavailable");
    if (!navigator.mediaDevices?.getUserMedia)
      throw new Error("microphone_unavailable");

    let wanted = true;
    let paused = false;
    let generation = 0;
    let peer = null;
    let channel = null;
    let stream = null;
    let requestController = null;
    let reconnectTimer = 0;
    let reconnectAttempts = 0;
    let permanentlyBlocked = false;
    let browserFallback = null;
    const partials = new Map();

    function report(state, detail) {
      try {
        options.onState?.(state, detail || null);
      } catch (_error) {}
    }

    function reportError(code, error) {
      try {
        options.onError?.(code, error || null);
      } catch (_error) {}
    }

    function stopBrowserFallback() {
      try {
        browserFallback?.stop?.();
      } catch (_error) {}
      browserFallback = null;
    }

    function startBrowserFallback(reason) {
      if (browserFallback) return true;
      if (!wanted || paused) return false;
      const voice = d();
      let supported = true;
      try {
        supported = voice?.support?.().recognition !== false;
      } catch (_error) {}
      if (!supported || typeof voice?.startRecognition !== "function") return false;
      cleanupConnection();
      permanentlyBlocked = true;
      try {
        browserFallback = voice.startRecognition({
          continuous: true,
          interimResults: true,
          maxAlternatives: 5,
          phrases: [
            "begin",
            "start",
            "ready",
            "success",
            "fail",
            "repeat",
            "stop voice workout",
          ],
          onState(state, detail) {
            report(state, Object.assign({ provider: "browser", fallbackReason: reason }, detail || {}));
          },
          onTranscript(transcript, alternatives, meta) {
            options.onTranscript?.(transcript, alternatives, Object.assign({ provider: "browser" }, meta || {}));
          },
          onError(code, error) {
            reportError(code, error);
          },
        });
        report("listening", { provider: "browser", fallbackReason: reason });
        return true;
      } catch (error) {
        browserFallback = null;
        return false;
      }
    }

    function cleanupConnection() {
      if (reconnectTimer) t.clearTimeout(reconnectTimer);
      reconnectTimer = 0;
      try {
        requestController?.abort?.();
      } catch (_error) {}
      requestController = null;
      try {
        channel?.close?.();
      } catch (_error) {}
      channel = null;
      try {
        peer?.close?.();
      } catch (_error) {}
      peer = null;
      try {
        stream?.getTracks?.().forEach((track) => track.stop());
      } catch (_error) {}
      stream = null;
      partials.clear();
    }

    function scheduleReconnect() {
      if (!wanted || paused || permanentlyBlocked || browserFallback || reconnectTimer) return;
      if (reconnectAttempts >= 5) {
        permanentlyBlocked = true;
        reportError("realtime_service_unavailable");
        return;
      }
      report("reconnecting");
      const delay = Math.min(10000, 500 * 2 ** reconnectAttempts);
      reconnectAttempts += 1;
      reconnectTimer = t.setTimeout(() => {
        reconnectTimer = 0;
        connect();
      }, delay);
    }

    function handleServiceError(status, payload) {
      const serviceCode = String(payload?.error || "");
      if (status === 401 || serviceCode === "not_logged_in") {
        permanentlyBlocked = true;
        return "login_required";
      }
      if (status === 429 || serviceCode === "too_many_requests") {
        permanentlyBlocked = true;
        return "rate_limited";
      }
      if (
        serviceCode === "openai_api_key_missing" ||
        serviceCode === "curl_extension_missing"
      ) {
        permanentlyBlocked = true;
        return "enhanced_voice_not_configured";
      }
      return "realtime_service_unavailable";
    }

    function handleEvent(raw) {
      let event;
      try {
        event = JSON.parse(raw);
      } catch (_error) {
        return;
      }

      if (event.type === "input_audio_buffer.speech_started") {
        report("hearing");
        return;
      }
      if (event.type === "input_audio_buffer.speech_stopped") {
        report("transcribing");
        return;
      }

      const itemId = String(event.item_id || "default");
      const transcriptEvent = realtimeTranscriptEvent(
        event,
        partials.get(itemId) || "",
      );
      if (transcriptEvent) {
        if (transcriptEvent.isFinal) partials.delete(transcriptEvent.itemId);
        else partials.set(transcriptEvent.itemId, transcriptEvent.transcript);
        if (transcriptEvent.transcript) {
          options.onTranscript?.(transcriptEvent.transcript, [], {
            isFinal: transcriptEvent.isFinal,
            provider: "openai-realtime-with-browser-fallback",
          });
        }
        if (transcriptEvent.isFinal) report("listening");
        return;
      }

      if (
        event.type === "conversation.item.input_audio_transcription.failed" ||
        event.type === "error"
      ) {
        reportError(
          String(
            event.error?.code || event.error?.type || "transcription_failed",
          ),
          event,
        );
      }
    }

    async function connect() {
      if (!wanted || paused || permanentlyBlocked || browserFallback) return;
      const token = ++generation;
      cleanupConnection();
      report("reconnecting");

      try {
        const sourceStream = options.stream;
        stream = sourceStream?.clone
          ? sourceStream.clone()
          : await navigator.mediaDevices.getUserMedia({
              audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true,
                channelCount: 1,
              },
            });
        if (token !== generation || !wanted) return cleanupConnection();

        peer = new t.RTCPeerConnection();
        for (const track of stream.getAudioTracks())
          peer.addTrack(track, stream);
        channel = peer.createDataChannel("oai-events");
        channel.addEventListener("open", () => {
          if (token === generation && wanted && !paused) {
            reconnectAttempts = 0;
            report("listening");
          }
        });
        channel.addEventListener("message", (event) => handleEvent(event.data));
        channel.addEventListener("close", () => {
          if (token === generation) scheduleReconnect();
        });
        peer.addEventListener("connectionstatechange", () => {
          if (token !== generation) return;
          if (peer?.connectionState === "connected" && !paused)
            report("listening");
          if (["disconnected", "failed"].includes(peer?.connectionState))
            scheduleReconnect();
        });

        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);
        requestController = new AbortController();
        const response = await fetch(REALTIME_ENDPOINT, {
          method: "POST",
          credentials: "same-origin",
          headers: {
            Accept: "application/sdp, application/json",
            "Content-Type": "application/sdp",
          },
          body: offer.sdp,
          signal: requestController.signal,
        });
        requestController = null;
        if (token !== generation || !wanted) return cleanupConnection();
        if (!response.ok) {
          const payload = await response.json().catch(() => null);
          const code = handleServiceError(response.status, payload);
          cleanupConnection();
          if (
            [
              "enhanced_voice_not_configured",
              "realtime_service_unavailable",
              "rate_limited",
            ].includes(code) &&
            startBrowserFallback(code)
          )
            return;
          if (code === "realtime_service_unavailable") scheduleReconnect();
          else reportError(code, payload);
          return;
        }
        const answerSdp = await response.text();
        await peer.setRemoteDescription({ type: "answer", sdp: answerSdp });
      } catch (error) {
        if (token !== generation || error?.name === "AbortError") return;
        cleanupConnection();
        const code =
          error?.name === "NotAllowedError" || error?.name === "SecurityError"
            ? "not-allowed"
            : error?.name === "NotFoundError"
              ? "audio-capture"
              : "realtime_connection_failed";
        if (code === "not-allowed" || code === "audio-capture")
          permanentlyBlocked = true;
        if (
          code === "realtime_connection_failed" &&
          startBrowserFallback(code)
        )
          return;
        if (code === "realtime_connection_failed") scheduleReconnect();
        else reportError(code, error);
      }
    }

    const controller = Object.freeze({
      stop() {
        wanted = false;
        paused = false;
        generation += 1;
        stopBrowserFallback();
        cleanupConnection();
        report("stopped");
      },
      pause() {
        paused = true;
        if (browserFallback) {
          try {
            browserFallback.pause?.();
          } catch (_error) {}
          report("paused", { provider: "browser" });
          return;
        }
        try {
          stream?.getAudioTracks?.().forEach((track) => {
            track.enabled = false;
          });
        } catch (_error) {}
        report("paused");
      },
      resume() {
        if (!wanted) return;
        paused = false;
        if (browserFallback) {
          try {
            browserFallback.resume?.();
          } catch (_error) {}
          return;
        }
        if (peer?.connectionState === "connected") {
          try {
            stream?.getAudioTracks?.().forEach((track) => {
              track.enabled = true;
            });
          } catch (_error) {}
          report("listening");
        } else {
          connect();
        }
      },
      provider: "openai-realtime",
    });

    connect();
    return controller;
  }
  function f() {
    const t = o("#voiceWorkoutModal");
    if (!t) return;
    const e = o("#voiceListeningStatus", t);
    e &&
      (e.classList.add("voice-visually-hidden"),
      e.setAttribute("aria-live", "polite"));
    const i =
      o(".voice-workout-head", t) ||
      o("#voiceWorkoutTitle", t)?.parentElement ||
      t.firstElementChild;
    let n = o("#voiceWorkoutSettingsBtn", t);
    (n ||
      ((n = document.createElement("button")),
      (n.id = "voiceWorkoutSettingsBtn"),
      (n.type = "button"),
      n.setAttribute("aria-label", "Voice workout settings"),
      n.setAttribute("aria-expanded", "false"),
      (n.innerHTML =
        '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"></circle><path d="M19.1 13.4a7.8 7.8 0 0 0 .05-2.8l2-1.55-2-3.45-2.5 1a8.2 8.2 0 0 0-2.4-1.4L13.9 2h-4l-.4 3.2a8.2 8.2 0 0 0-2.4 1.4l-2.5-1-2 3.45 2 1.55a7.8 7.8 0 0 0 .05 2.8l-2.05 1.55 2 3.45 2.55-1a8.2 8.2 0 0 0 2.35 1.35l.4 3.25h4l.4-3.25a8.2 8.2 0 0 0 2.35-1.35l2.55 1 2-3.45-2.1-1.55Z"></path></svg><span>Settings</span>'),
      i?.appendChild(n)),
      "1" !== n.dataset.bound &&
        ((n.dataset.bound = "1"),
        n.addEventListener("click", (t) => {
          (t.preventDefault(), t.stopPropagation());
          const e = o("#bl-voice-flyout"),
            i = !e || e.hidden;
          (i ? d()?.openSettings?.() : d()?.closeSettings?.(),
            n.setAttribute("aria-expanded", String(i)));
        })));
    const a = o("#voiceLastTranscript", t);
    a &&
      (a.classList.remove("voice-visually-hidden"),
      a.classList.add("voice-mic-host"),
      a.setAttribute("aria-label", "Microphone activity"),
      o("#voiceMicVisual", a) ||
        ((a.textContent = ""),
        a.insertAdjacentHTML(
          "beforeend",
          '<div class="voice-mic-visual" id="voiceMicVisual" data-state="paused" aria-hidden="true"><span class="voice-mic-icon"><svg viewBox="0 0 24 24"><path d="M12 14.5a3.5 3.5 0 0 0 3.5-3.5V6a3.5 3.5 0 1 0-7 0v5a3.5 3.5 0 0 0 3.5 3.5Zm6-3.5a1 1 0 1 0-2 0 4 4 0 0 1-8 0 1 1 0 1 0-2 0 6 6 0 0 0 5 5.9V20H8.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2H13v-3.1A6 6 0 0 0 18 11Z"></path></svg></span><span class="voice-level-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="voice-mic-result" id="voiceMicResult"></span></div>',
        )));
  }
  function S(t) {
    a.microphoneState = t;
    const e = o("#voiceMicVisual");
    e && !e.dataset.result && (e.dataset.state = t);
    const i = o("#voiceListeningStatus");
    i &&
      (i.textContent =
        "paused" === t
          ? "Paused"
          : "error" === t
            ? "Microphone unavailable"
            : "speaking" === t
              ? "Speaking"
              : "reconnecting" === t
                ? "Reconnecting microphone…"
                : "transcribing" === t
                  ? "Understanding…"
                  : "hearing" === t
                    ? "Heard you…"
                    : "Listening");
  }
  function b(e) {
    const i = o("#voiceMicVisual"),
      n = o("#voiceMicResult");
    i &&
      n &&
      (t.clearTimeout(a.resultTimer),
      (i.dataset.result = e.toLowerCase()),
      (i.dataset.state = "result"),
      (n.textContent = e),
      (a.resultTimer = t.setTimeout(() => {
        (delete i.dataset.result,
          (n.textContent = ""),
          (i.dataset.state = a.microphoneState));
      }, 1100)));
  }
  function w() {
    (t.cancelAnimationFrame?.(a.frame), (a.frame = 0));
    try {
      a.meter?.stream?.getTracks?.().forEach((t) => t.stop());
    } catch (t) {}
    try {
      a.meter?.source?.disconnect?.();
    } catch (t) {}
    try {
      a.meter?.audio?.close?.();
    } catch (t) {}
    a.meter = null;
    const e = o("#voiceMicVisual");
    e && delete e.dataset.meter;
  }
  function k() {
    (a.timer && t.clearInterval(a.timer), (a.timer = null), (a.remaining = 0), (a.elapsed = 0));
  }
  function y(t) {
    const e = o("#voiceWorkoutTimerWrap");
    (e && (e.hidden = !1),
      v("#voiceWorkoutTimerLabel", "Time remaining"),
      v(
        "#voiceWorkoutTimer",
        `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`,
      ));
  }
  async function completeTimedHold(achieved, resultLabel = "Recorded") {
    k();
    b(resultLabel);
    p()?.recordTimedCurrentStep?.(Math.max(1, achieved), "voice");
    const context = m();
    if ((E(context), context?.allComplete || !context?.step)) {
      a.state = n.FINISHED;
      await M("Workout steps complete. Use Finish Workout to complete this session.");
      return;
    }
    await L();
  }
  function E(t = m()) {
    if (!t) return;
    const e = Math.max(0, Number(t.totalSteps) || 0),
      i = Math.max(0, Number(t.stepIndex) || 0);
    (v(
      "#voiceStepPosition",
      t.step ? `Step ${Math.min(i + 1, e)} of ${e}` : "Workout complete",
    ),
      v(
        "#voiceExerciseName",
        t.step?.label || t.step?.name || "Workout complete",
      ));
    const n = o("#voiceExerciseTarget");
    n &&
      ((n.hidden = !t.step),
      (n.textContent = t.step ? `${t.step.target} ${t.step.unit}` : ""));
  }
  async function M(t) {
    const e = String(t || "").trim();
    if (!e) return !1;
    ((a.lastInstruction = e), h(e));
    const i =
      a.active &&
      a.state !== n.PAUSED &&
      a.state !== n.ERROR &&
      a.state !== n.FINISHED;
    if (i) a.recognition?.pause?.();
    S("speaking");
    let o = !1;
    try {
      o = await d()?.speak?.(e);
    } catch (t) {}
    if (i) {
      a.recognition?.resume?.();
    }
    return Boolean(o);
  }
  function x() {
    try {
      a.recognition?.stop?.();
    } catch (t) {}
    ((a.recognition = null), S("paused"));
  }
  function T() {
    (x(),
      (a.recognition = createRealtimeTranscription({
        stream: a.meter?.stream || null,
        onState(t) {
          a.active &&
            (["listening", "hearing", "transcribing", "reconnecting"].includes(
              t,
            )
              ? S(t)
              : "paused" === t
                ? S("paused")
                : "blocked" === t
                  ? ((a.state = n.ERROR),
                    S("error"),
                    h("Microphone permission was blocked."))
                  : "error" === t && S("reconnecting"));
        },
        onTranscript(e, i) {
          const r = selectResponsiveTranscript(e, i);
          (v("#voiceLastTranscript", r),
            (async function (e) {
              if (!a.active || a.state === n.PAUSED || a.handling) return;
              a.handling = !0;
              try {
                const i = u(e);
                if (!i) return;
                if (a.state === n.TIMING && /\b(stop|done|finished)\b/.test(i))
                  return void (await completeTimedHold(a.elapsed || 1));
                if (/\b(stop|end|cancel)\s+(voice\s+)?workout\b/.test(i))
                  return void C(!1);
                if (/\brepeat\b/.test(i))
                  return void (await M(
                    a.lastInstruction ||
                      "The current instruction is shown on screen.",
                  ));
                if (a.state === n.BEGIN)
                  return void (
                    ("begin" !== i && "start" !== i && "ready" !== i) ||
                    (await (async function () {
                      const e = m();
                      if (!e?.step) return;
                      if (e.step.isTimed)
                        return (
                          k(),
                          (a.state = n.TIMING),
                          (a.elapsed = 0),
                          (a.remaining = Math.max(1, Math.round(Number(e.step.target) || 1))),
                          y(a.remaining),
                          await M(`Hold for ${a.remaining} seconds. The timer will count down and record the hold when it reaches zero.`),
                          void (a.timer = t.setInterval(async () => {
                            a.elapsed += 1;
                            a.remaining = Math.max(0, a.remaining - 1);
                            y(a.remaining);
                            if (a.remaining === 0) await completeTimedHold(e.step.target, "Complete");
                          }, 1e3))
                        );
                      ((a.state = n.RESULT),
                        await M(
                          "Complete the repetitions, then say Success or Fail.",
                        ));
                    })())
                  );
                if (a.state === n.RESULT)
                  return void (/\b(success|succeeded|successful|complete|completed)\b/.test(
                    i,
                  )
                    ? await (async function () {
                        (b("Success"),
                          await new Promise((e) => t.setTimeout(e, 420)),
                          p()?.succeedCurrentStep?.("voice"));
                        const e = m();
                        if ((E(e), e?.allComplete || !e?.step))
                          return (
                            (a.state = n.FINISHED),
                            void (await M(
                              "Workout steps complete. Use Finish Workout to complete this session.",
                            ))
                          );
                        await L();
                      })()
                    : /\b(fail|failed|failure)\b/.test(i) &&
                      (await (async function () {
                        (b("Fail"),
                          (a.state = n.NUMBER),
                          await M(
                            `Say the number of ${m()?.step?.unit || "repetitions"} you achieved.`,
                          ));
                      })()));
                if (a.state === n.NUMBER) {
                  const t = g(e);
                  null === t
                    ? await M(
                        "I did not catch the number. Please say the number again.",
                      )
                    : await (async function (t) {
                        const e = m();
                        if (!e?.step) return;
                        const i = Math.max(
                          0,
                          Math.min(
                            Math.round(t),
                            Math.round(Number(e.step.target) || t),
                          ),
                        );
                        p()?.failCurrentStep?.(i, "voice");
                        const o = m();
                        if ((E(o), o?.allComplete || !o?.step))
                          return (
                            (a.state = n.FINISHED),
                            void (await M(
                              "Workout steps complete. Use Finish Workout to complete this session.",
                            ))
                          );
                        await L();
                      })(t);
                }
              } finally {
                a.handling = !1;
              }
            })(r));
        },
        onError(t) {
          "not-allowed" === t || "service-not-allowed" === t
            ? ((a.state = n.ERROR),
              S("error"),
              h("Microphone permission is required for a voice workout."))
            : "audio-capture" === t
              ? ((a.state = n.ERROR),
                S("error"),
                h("No working microphone was found."))
              : "enhanced_voice_not_configured" === t
                ? ((a.state = n.ERROR),
                  S("error"),
                  h(
                    "Voice recognition unavailable.",
                  ))
                : "login_required" === t
                  ? ((a.state = n.ERROR),
                    S("error"),
                    h("Please log in again to use enhanced voice recognition."))
                  : "rate_limited" === t
                    ? ((a.state = n.ERROR),
                      S("error"),
                      h(
                        "Voice recognition busy. Try again shortly.",
                      ))
                    : "realtime_service_unavailable" === t
                      ? ((a.state = n.ERROR),
                        S("error"),
                        h(
                          "Voice recognition unavailable. Try again.",
                        ))
                    : "aborted" !== t && "no-speech" !== t && S("reconnecting");
        },
      })));
  }
  async function L() {
    const t = m();
    if (
      (E(t),
      (function () {
        const t = o("#voiceWorkoutTimerWrap");
        t && (t.hidden = !0);
      })(),
      !t?.step)
    )
      return (
        (a.state = n.FINISHED),
        void (await M(
          "All workout steps are complete. Use Finish Workout to complete this session.",
        ))
      );
    ((a.state = n.BEGIN), await M(t.step?.isTimed ? `When ready, say Begin. The ${t.step.target}-second timer will count down automatically.` : "When Ready, Say “Begin”."));
  }
  async function I() {
    if (a.active) return;
    const e = p(),
      i = e?.getCurrentContext?.();
    if (!e) {
      const t = o("#myPlanStatus");
      return void (
        t &&
        (t.textContent =
          "Voice workout controls are still loading. Please try again.")
      );
    }
    if (!i?.available || !i.canStart || i.planComplete) {
      const t = o("#myPlanStatus");
      return void (
        t &&
        (t.textContent = "The current workout is not available to start yet.")
      );
    }
    ((a.active = !0),
      (a.state = n.IDLE),
      (a.beforePause = n.IDLE),
      (a.lastInstruction = ""),
      k(),
      f());
    const r = o("#voiceWorkoutModal");
    (r && (r.hidden = !1),
      document.body.classList.add("voice-workout-active"),
      S("paused"),
      h("Preparing microphone…"),
      E(i));
    try {
      if (
        !t.isSecureContext &&
        location.hostname !== "localhost" &&
        location.hostname !== "127.0.0.1"
      ) {
        throw new Error("secure_context_required");
      }
      (await (async function () {
        if ((w(), !navigator.mediaDevices?.getUserMedia || !s)) return !1;
        const e = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: !0,
            noiseSuppression: !0,
            autoGainControl: !0,
            channelCount: 1,
          },
        });
        if (!a.active) return (e.getTracks().forEach((t) => t.stop()), !1);
        const i = new s();
        "suspended" === i.state && (await i.resume());
        const n = i.createAnalyser();
        ((n.fftSize = 256), (n.smoothingTimeConstant = 0.72));
        const r = i.createMediaStreamSource(e);
        r.connect(n);
        const c = new Uint8Array(n.fftSize);
        ((a.meter = {
          stream: e,
          audio: i,
          analyser: n,
          source: r,
          data: c,
          level: 0,
        }),
          o("#voiceMicVisual")?.setAttribute("data-meter", "live"));
        const u = () => {
          const e = a.meter;
          if (!e) return;
          e.analyser.getByteTimeDomainData(e.data);
          let i = 0;
          for (const t of e.data) {
            const e = (t - 128) / 128;
            i += e * e;
          }
          const n = Math.max(
            0,
            Math.min(1, 8.5 * (Math.sqrt(i / e.data.length) - 0.012)),
          );
          e.level = 0.68 * e.level + 0.32 * n;
          const r = o("#voiceMicVisual"),
            s = [
              ...document.querySelectorAll(
                "#voiceMicVisual .voice-level-bars i",
              ),
            ],
            c =
              "paused" === a.microphoneState ||
              "error" === a.microphoneState ||
              Boolean(r?.dataset.result);
          (s.forEach((t, i) => {
            const n = Math.max(0.38, 1 - Math.abs(i - 4) / 6.5),
              o = 0.78 + 0.22 * Math.sin(performance.now() / 115 + 0.9 * i),
              a = c ? 6 : 7 + 37 * e.level * n * o;
            ((t.style.height = `${Math.max(6, Math.min(44, a))}px`),
              (t.style.opacity = c
                ? "0.3"
                : String(Math.min(0.98, 0.42 + 0.55 * e.level))));
          }),
            (a.frame = t.requestAnimationFrame(u)));
        };
        return (u(), !0);
      })().catch(() => !1),
        e.startSession?.("voice"),
        E(m()),
        await L(),
        T(),
        document.dispatchEvent(
          new CustomEvent("baseline:fitness-voice-started"),
        ));
    } catch (t) {
      ((a.state = n.ERROR),
        S("error"),
        h(
          "secure_context_required" === t?.message
            ? "Voice workouts require HTTPS."
            : "Enhanced voice recognition is unavailable.",
        ));
    }
  }
  function W() {
    if (!a.active) return;
    const t = o("#pauseVoiceListeningBtn");
    if (a.state === n.PAUSED)
      return (
        (a.state = a.beforePause || n.BEGIN),
        a.recognition?.resume?.(),
        t && (t.textContent = "Pause Listening"),
        S("listening"),
        void h(a.lastInstruction || "When Ready, Say “Begin”.")
      );
    ((a.beforePause = a.state),
      (a.state = n.PAUSED),
      a.recognition?.pause?.(),
      t && (t.textContent = "Resume Listening"),
      S("paused"));
  }
  function C(e = !0) {
    if (!a.active) return !1;
    if (
      e &&
      !t.confirm(
        "Stop this voice workout? Your recorded progress will be kept.",
      )
    )
      return !1;
    ((a.active = !1),
      (a.state = n.IDLE),
      (a.beforePause = n.IDLE),
      k(),
      t.clearTimeout(a.resultTimer),
      x(),
      w());
    try {
      d()?.stopSpeaking?.();
    } catch (t) {}
    try {
      d()?.closeSettings?.();
    } catch (t) {}
    const i = o("#voiceWorkoutModal");
    (i && (i.hidden = !0),
      document.body.classList.remove("voice-workout-active"));
    const r = o("#pauseVoiceListeningBtn");
    return (
      r && (r.textContent = "Pause Listening"),
      document.dispatchEvent(new CustomEvent("baseline:fitness-voice-ended")),
      !0
    );
  }
  function B(t) {
    const e = t.target?.closest?.("button");
    if (!e) return;
    [
      "startVoiceWorkoutBtn",
      "endVoiceWorkoutBtn",
      "pauseVoiceListeningBtn",
      "repeatVoiceInstructionBtn",
    ].includes(e.id) &&
      (t.preventDefault(),
      t.stopPropagation(),
      t.stopImmediatePropagation?.(),
      "startVoiceWorkoutBtn" === e.id
        ? I()
        : "endVoiceWorkoutBtn" === e.id
          ? C(!1)
          : "pauseVoiceListeningBtn" === e.id
            ? W()
            : M(
                a.lastInstruction ||
                  "The current instruction is shown on screen.",
              ));
  }
  function R() {
    (f(),
      document.addEventListener("click", B, !0),
      document.addEventListener("baseline:fitness-workout-updated", (t) => {
        a.active &&
          (E(t.detail),
          (t.detail?.planComplete || t.detail?.allComplete) &&
            (k(), (a.state = n.FINISHED)));
      }),
      t.addEventListener("pagehide", () => C(!1)),
      t.addEventListener("baseline:page-leaving", () => C(!1)),
      document.documentElement.setAttribute(
        "data-baseline-fitness-voice-adapter",
        e,
      ));
  }
  t.BASELINE_fitnessVoice = Object.freeze({
    BUILD: e,
    STATES: n,
    start: I,
    stop: () => C(!1),
    pause: W,
    state: () => a.state,
    isActive: () => a.active,
    debug: Object.freeze({
      normalise: u,
      parseNumber: g,
      realtimeTranscriptEvent,
      realtimeEndpoint: REALTIME_ENDPOINT,
    }),
  });
  if (
    ("undefined" != typeof module &&
      module.exports &&
      (module.exports = t.BASELINE_fitnessVoice),
    "undefined" == typeof document)
  )
    return;
  "loading" === document.readyState
    ? document.addEventListener("DOMContentLoaded", R, { once: !0 })
    : R();
})("undefined" != typeof window ? window : globalThis);

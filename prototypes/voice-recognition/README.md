# Constrained workout recognition policy prototype

This prototype isolates the recognition contract from workout rules and from any speech engine. It is deliberately not loaded by the production Fitness page.

The policy exposes the vocabulary that is valid for each workout state, rejects commands from other states, enters a target-bounded number mode after `Failed`, requires `Yes` or `No` during number confirmation, and accepts `Continue` only during rest. It adds no synonyms.

The caller remains responsible for microphone capture, recognition, display, spoken feedback, short-lived state-token validation, and invoking the existing authoritative Fitness actions. Recognition output must never write saved data directly.

This is a testable Stage 9 foundation, not evidence that an offline recognizer can run on the current Hostinger plan. The current production runtime continues to use OpenAI Realtime transcription until comparative testing and a controlled integration approve a replacement.

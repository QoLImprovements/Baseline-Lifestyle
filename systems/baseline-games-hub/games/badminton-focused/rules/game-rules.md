# Badminton Focused Rules

Badminton Focused contains 15 supporting perceptual, attention, timing and tactical-decision games. It complements real badminton practice rather than simulating a full match.

## Preservation rules

1. Each listed Badminton game remains a distinct training task with its own purpose, feedback and state.
2. Difficulty tiers remain Foundation, Match and Pressure, unlocking from the individual game level.
3. Accuracy, timing, premature commitment and late-response statistics must remain tied to the task that produced them.
4. Switching Badminton games must invalidate delayed callbacks from the previous selected game.
5. Auto-Next must behave consistently after both submitted answers and automatic timed failures.
6. Hidden/background page time must not consume perceptual delays, response windows, failure deadlines or Auto-Next delays. Resume from the remaining usable time when the page becomes visible again.
7. Wait for Contact and Tempo Break must continue to distinguish premature commitment from a late response.
8. Pressure Ladder must continue to move its pressure level according to success or failure rather than resetting the ladder on every round.
9. Court zones and stable game metadata are owned by `badminton-focused-config.js`; changing runtime structure must not silently change those identities.
10. Scenario/question banks are owned by `badminton-focused-scenarios.js`; structural refactors must preserve each prompt, selectable correct answer and explanation unless the gameplay content is intentionally being revised.
11. Badminton progression and Realm contribution must not overwrite Darts, core Games Hub, or Baseline Realm mechanics.
12. Structural extraction must preserve current storage compatibility under `__bl_badminton_focused_v1__`.

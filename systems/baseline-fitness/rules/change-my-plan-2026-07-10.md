# Change: My Plan current/completed views and plan options

## Change request
Separate completed workouts from the current workout, clarify weekly frequency, and add saved-plan frequency/day controls plus plan editing.

## Rule source
Page Rules: keep Baseline Fitness behaviour within this system.

## Expected behaviour
My Plan opens on Current, Completed contains prior completed sessions, the current card is titled “Session # - Current”, Saved plan shows “Frequency: #x Weekly”, Options permits 1x/2x/3x weekly and limits selected weekdays to that frequency, and Edit plan opens Plan Generator.

## Must not break
Navigation: existing main tabs remain unchanged.
Layout: existing dark card system and responsive wrapping remain intact.
Data: completion status is preserved when dates are rescheduled.
User flow: workout step completion and final completion continue to work.

## Validation
HTML loads: checked edited structure.
Relevant JS syntax: node --check passed.
Relevant PHP lint: save_plan.php and plan_update.php passed.
Manual scenario: Current/Completed tabs, options expansion, weekday cap, and edit navigation wired.
Regression scenario: local-file storage and server API paths both updated.

# Score Submission

Each current court submits independently.

```text
one court submitted = that court greys/locks only
other current courts remain live and unchanged
all current courts submitted = move current set to finished games and generate next set
```

A submitted current court must be tracked by its current court instance/slot, not only by matchup signature.

This prevents one saved court from causing another court with a similar or rebuilt signature to count as saved.

Saving one court must not rebuild/reset the unsaved court cards or clear scores typed into another court.

If hardship options exist, a hardship selection is required.

If no further hardship options exist, the score must still be allowed to save.

The old “Result saved” badge/pill is not used. The visual confirmation is the locked grey court card.

## Render rule

Saving one current court must not call a full current-grid rebuild. The submitted card may be patched/locked, but unsaved court cards must keep their typed score values and hardship selections.

Server save responses must not overwrite the live local current-court draft state after a one-court save.


## Next-set rule

When all active current courts are submitted or confirmed as No Game, the current set is immediately moved to Finished Games and the next current set is generated automatically. There is no manual Generate Next Set button.


## Single-court vs multi-court completion

```text
If exactly one current court is active, saving that court completes the set and immediately generates the next game.

If two or more current courts are active, saving one court locks/darkens that card only. The remaining court cards stay live and keep their typed scores until they are submitted or confirmed No Game.
```

## Fresh generation rule

```text
Generate Game Plan and Generate Next Set must create fresh current courts with blank score fields and no pending hardship selection. Old scores must never carry into a newly generated court.
```


## Fresh-generation score rule

When a new current game/set is generated, every score input must start blank.

```text
new generated court = no score1, no score2, no pending hardship selection
previous submitted scores must only appear in Finished Games / Session History
previous submitted scores must never appear inside the next generated current court
```

The browser DOM must be forced to match the state after render, so stale input values cannot remain visible after a new game is generated.

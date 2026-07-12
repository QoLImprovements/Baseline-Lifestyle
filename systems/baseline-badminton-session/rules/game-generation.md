# Game Generation

Doubles day prioritises doubles.

With exactly 4 attending players and any number of available courts:

```text
create one doubles game using all four players
leave extra courts unused
do not generate filler singles or 2v1 games just to fill courts
```

2v1 is only a fallback where attendance and court logic require it.

Current court sets remain active until every current court has submitted its result.

## No unnecessary sit-outs

The generator must not bench players when available courts can keep them playing.

```text
minimum sit-outs comes before format preference
format preference breaks ties only after player use is maximised
```

With 4 attending players on doubles day, the special rule still applies: one doubles game using all four players and no filler courts.

## Court variables

Each current court may expose an expandable Edit Variables control.

If a player on that court chooses to sit out, that current court alone is rebuilt from the remaining court players plus available bench players where possible. Other live courts and their typed score drafts must remain unchanged.


## Singles day

Singles day generates singles games only. It must not generate a doubles game just because doubles would use more players on one court.

```text
Singles Day = singles games.
Doubles Day = doubles first, then 2v1 or singles only when another doubles cannot be made.
```


## Fresh current games

Generated current games must be fresh. They must not inherit score values, hardship selections, saved state, or No Game state from the previous current court.


## Current-set completion

When all active courts in the current set are submitted or confirmed as No Game, the set moves into Finished Games and the next set is generated automatically.

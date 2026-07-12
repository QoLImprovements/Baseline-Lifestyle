# Hardship System

Hardship is based on ability gaps and past results.

It is not a personal label.

```text
Ratings measure strength.
Hardship alters the rules of play.
```

The rating system and hardship ladder are separate ledgers.

## What persists

Hardship memory persists on the server side by exact competitive context.

```text
singles: player vs player
2v2: pair vs pair
2v1: pair vs solo
1v2: solo vs pair
```

The remembered ladder belongs to that exact context, not to a player or pair everywhere.

## What must not happen

Incorrect:

```text
D & F carry hardship into every game.
```

Correct:

```text
The D & F pairing may have a remembered hardship ladder against one specific opposing side/context.
That does not automatically apply to other opponents or other game types.
```

## Fluid hardship ladder

After each saved game, the hardship can move one step.

```text
If the restricted side still wins too strongly:
increase hardship one step.

If the restriction becomes too much and the restricted side loses:
reduce hardship one step.

If the game is balanced:
hold the current level.
```

If the lower-rated side wins while receiving hardship help from the higher-rated side's restriction, that does not reduce the higher-rated side's rating. It reduces the hardship ladder instead.

## Hardship options

```text
Reduce Target Area
Remove Shot Options
```

## Reduce Target Area

Limits where the restricted side may aim.

This affects the court/SVG zones.

## Remove Shot Options

Limits what shots the restricted side may use.

Example:

```text
No smashes or downward shots.
```

Once Remove Shot Options is active for the exact context, it should not remain available as another increase option. It can only be restored through the reduction path.

## Purpose

The aim is to make ability gaps visible and playable without humiliation, pretending, banter-cover, or emotional masking.

## No-option save rule

If a score would normally trigger a hardship movement but the relevant ladder has no further available option, the result must still save. The user must not be blocked by a hardship selection prompt when the interface shows no selectable hardship option.


## Score-gated hardship controls

Hardship adjustment options are only shown after a valid score has been entered for that court.

```text
no score entered = no hardship option is selectable
valid score entered = calculate and show any required hardship options
```

The interface must not auto-select Expand Target Area, Reduce Target Area, Remove Shot Options, or Restore Shot Options before a valid result exists.

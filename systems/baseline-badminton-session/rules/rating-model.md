# Rating Model

The Badminton Session has three separate rating models.

```text
Player Rating
Pair Rating
One-vs-Two Rating
```

Do not collapse these into one general rating.

## Singles

```text
Player Rating vs Player Rating
```

## Doubles / 2v2

```text
Pair Rating vs Pair Rating
```

Pair Rating belongs to the exact pair combination.

## 2v1 / 1v2

```text
Pair Rating vs One-vs-Two Rating
```

One-vs-Two Rating belongs to the solo player's ability when playing alone against a pair.

## Rating movement

Ratings are separate from hardship alterations.

The normal rating movement is:

```text
Normal loss: -0.5
Heavy loss below 12 points: -1
```

A winner normally holds rating.

A winner only rises when beating the current highest-rated entity in that rating type/context.

```text
Ordinary win: winner holds
Win over current top rating: winner may rise above the old top
```

The rating gap cap is 5 points.

```text
A losing side cannot drop more than 5 below the opponent/context they just played.
```

Examples:

```text
25 vs 25 repeated normal losses can fall to 20, then stop in that context.
25 vs 25 repeated heavy losses reach 20 faster.
18 vs 20 can fall to 15, because the cap is opponent-relative.
```

## Relationship to hardship

Ratings persist by identity.

Hardship ladders persist by exact competitive context.

```text
Ratings measure ability position.
Hardship memory decides the current alteration level for that exact context.
```

If the higher-rated/restricted side loses while hardship is active, do not punish that higher-rated side's rating. The system response is to reduce hardship instead.

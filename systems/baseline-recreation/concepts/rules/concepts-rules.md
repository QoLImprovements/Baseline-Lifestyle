# Baseline Recreation — Concepts Rules

Concepts is a first-class Baseline Recreation category alongside Games and Puzzles.

Canonical top-level route:

    /baseline-recreation/concepts

Each individual Concept receives a clean nested route:

    /baseline-recreation/concepts/<concept-slug>

## Shared Concept contract

The first implementation establishes a reusable baseline, not a rigid universal page.

Shared Concepts owns:

- library/list presentation;
- concept identity and short descriptor;
- primary media placement;
- expandable comprehensive explanation;
- significance / "why it matters" presentation;
- background / research presentation;
- optional experience-module slot;
- optional related-concepts slot;
- clean route restoration and browser history;
- responsive layout and shared visual language.

Concept-specific folders may extend this shared contract with their own CSS, JavaScript,
media and interaction patterns. They must not copy the entire shared framework merely
to create a different experience.

When changing an individual Concept, decide explicitly whether the change is:

1. a reusable improvement that belongs in concepts/shared/; or
2. a concept-specific variance that belongs in concepts/<slug>/.

Do not force later Concepts into the Stroop Effect's exact content or interaction shape.
Audio-led, simulation-led, timed visual, sequential-choice and other formats may replace
or extend optional modules while retaining the shared identity and explanatory structure.

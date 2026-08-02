# Structural Refactoring Checkpoint — 2 August 2026

## Purpose

Reduce the largest runtime files through small, behaviour-preserving pull requests. This checkpoint does not authorise a redesign, a framework rewrite, or a production persistence cutover.

## Measured starting point

Generated food-library datasets are excluded because their size is data volume rather than mixed application responsibility.

| Runtime area | Approximate size | Main concern |
| --- | ---: | --- |
| `sitewide/js/baseline-shared.js` | 275 KB | navigation, recipes, authentication, favourites, Binaural controls and shared interface behaviour are coupled |
| `systems/baseline-games-hub/js/baseline-games-hub-core.js` | 244 KB | interface control, profile progression and persistence coordination are coupled |
| `systems/baseline-badminton-session/js/baseline-badminton-session.js` | 229 KB | session planning, ratings, rendering and server-state coordination are coupled |
| `systems/baseline-games-hub/css/baseline-games-hub.css` | 268 KB | multiple established game and hub surfaces share one stylesheet authority |
| `sitewide/css/baseline-recipes.css` | 140 KB | recipe presentation, controls and responsive rules share one stylesheet authority |

## Increment 1: private environment boundary

The first change extracts the private host-configuration loader from `sitewide/api/config.php` into `sitewide/api/private_environment.php`.

This boundary is intentionally narrow:

- process environment variables remain authoritative;
- the host-only fallback remains permission-checked, size-bounded, symlink-rejecting and allowlisted;
- every existing API continues to load the same `config.php` bootstrap;
- database, session, authentication and response behaviour are unchanged;
- no secret values are added to the repository.

## Planned order

1. Add focused regression tests before each extraction.
2. Continue separating the API bootstrap into configuration, HTTP/JSON, session/authentication and database/schema responsibilities.
3. Separate pure route/state and API-client helpers from the shared site controller before moving interface rendering.
4. Extract pure Games Hub profile/progression rules before changing its interface controller.
5. Extract pure Badminton ratings and planning rules before changing rendering or shared-state coordination.
6. Split large stylesheets only along existing page/component boundaries; do not change the visual design during a structural split.

Each item should be a separate pull request or another similarly bounded increment. Substantial runtime splits require browser regression coverage first.

## Increment 2: HTTP and JSON boundary

The second change extracts shared HTTP response hardening, origin validation, bounded JSON input and site-URL construction into `sitewide/api/http.php`.

- `config.php` remains the entrypoint used by every existing API.
- The fatal-error JSON safeguard is retained.
- Non-GET same-origin validation and the 2 MiB JSON limit are retained.
- Security-sensitive links still reject untrusted public Host headers.
- Session, authentication and database behaviour remain in `config.php` for later bounded changes.
- A direct PHP contract covers configured, local, forwarded-HTTPS and untrusted-host origin behaviour.

## Increment 3: session boundary

The third change extracts session creation, cookie policy and the small signed-in session value helpers into `sitewide/api/session.php`.

- The cookie name, root path, secure detection, HTTP-only setting and `SameSite=Lax` policy are unchanged.
- Login and logout continue to call the same public helper functions through `config.php`.
- User lookup, permissions, authentication-provider logic and all database work remain outside this boundary.
- A direct PHP contract verifies secure cookie settings, session values and clearing behaviour.

## Increment 4: authentication boundary

The fourth change extracts current-user lookup, account-input validation, safe public account payloads and provider availability into `sitewide/api/authentication.php`.

- Password hashes remain server-only and are excluded from the public payload.
- Missing account records clear stale signed-in session state.
- Password reset, mail, schema migration and rate limiting remain in `config.php` for later bounded changes.
- The executable contract uses only an in-memory SQLite fixture; it never opens the production database or Saved Data.

## Increment 5: mail boundary

The fifth change extracts outbound text-mail configuration and header construction into `sitewide/api/mail.php`.

- Host-provided sender settings and the existing safe local defaults are unchanged.
- No test sends an email; the executable contract verifies configuration only.
- Account recovery continues to call the same `bl_send_text_mail()` helper.

## Increment 6: account recovery boundary

The sixth change extracts password-reset token generation, hashed-verifier lookup, email masking and password replacement into `sitewide/api/account_recovery.php`.

- Existing reset links, expiry duration and single-active-token behaviour are unchanged.
- Only the selector is searchable; the random verifier remains hashed at rest.
- Completing a reset marks its token used and restores password authentication for the account.
- The executable contract uses only an in-memory SQLite database and never opens production data.

## Fixed constraints

- SQLite remains the sole production authority for authenticated server data.
- `saved_data.php` remains an unwired foundation until migration tools and comparisons pass.
- Do not create permanent SQLite/JSON dual writers.
- Do not convert ordinary pages to React, Vue or another framework.
- Introduce Vite only after a measured benefit is demonstrated.
- Preserve existing routes, wording, manual controls and visual design.
- Do not test against live production Saved Data.

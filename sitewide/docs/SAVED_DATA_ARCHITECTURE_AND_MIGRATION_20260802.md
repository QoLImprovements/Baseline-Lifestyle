# Saved Data architecture and migration plan

## Authority rule

At every point, exactly one permanent store owns each resource. SQLite remains authoritative until that resource's cutover flag is enabled after export, validation and shadow comparison. Browser storage is either a signed-out guest store or a recoverable cache; it is never authoritative for a signed-in account.

Do not deploy, create or sync `Saved Data` from GitHub. Configure `BASELINE_SAVED_DATA_PATH` and `BASELINE_RUNTIME_PATH` as absolute server paths. Both should resolve outside the web document root and must not be children of the Git checkout/deployment target.

## Target layout

```text
Saved Data/
  Users/
    000001/
      account.json
      favourites.json
      binaural.json
      fitness.json
      voice.json
      Games/
        pairs.json
        make24.json
        detectword.json
        ninja.json
        trackcoin.json
        ruleshift.json
        dartsfocused.json
        meridiangrove.json
        hubsettings.json
  Shared/
    badminton-session.json

Runtime/
  Locks/
    <sha256-resource>.lock
    Active/
      <sha256-resource>.json
```

`000001` is derived from the immutable numeric `users.id`, padded for legibility. Renaming a user or changing their email never changes the folder. IDs are never recycled.

Each JSON file uses this outer envelope:

```json
{
  "schemaVersion": 1,
  "revision": 12,
  "updatedAt": "2026-08-02T12:00:00Z",
  "data": {}
}
```

Writes supply `expectedRevision`. A mismatch returns a conflict and performs no write. JSON is encoded and size-checked before acquiring the resource lock, written to a unique file in the target directory, flushed and synced, then atomically renamed over the target. This ensures the temporary file is on the same filesystem. Resource files use mode `0600`; created directories use `0700` subject to host policy.

## Resource schemas

The following are logical schemas. Exact optional fields must be derived from existing table columns during the exporter implementation; unknown keys are rejected or preserved only in a documented `extensions` object.

### `account.json`

```json
{
  "userId": 1,
  "name": "Display name",
  "email": "user@example.test",
  "authProvider": "password",
  "createdAt": 0,
  "updatedAt": 0
}
```

Password hashes, reset tokens, OAuth secrets and session identifiers do not belong in this file. Authentication remains in its hardened store unless a separately reviewed authentication migration is approved.

### `favourites.json`

```json
{
  "items": [
    {"itemKey": "canonical-key", "itemType": "food", "createdAt": 0}
  ]
}
```

Enforce the current uniqueness rule and deterministic order.

### `binaural.json`

```json
{
  "presets": [
    {"presetId": "stable-id", "name": "Preset", "settings": {}, "createdAt": 0, "updatedAt": 0}
  ]
}
```

Preserve every existing supported slider/setting value through explicit validation.

### `fitness.json`

```json
{
  "plans": [],
  "sessions": [],
  "achievements": [],
  "bodyProfile": null,
  "workoutProgress": null
}
```

Plans, plan sessions and achievements migrate together because their identifiers and histories are related. Local-only body/profile and in-progress data need an explicit signed-in import prompt; never silently overwrite server history.

### `voice.json`

```json
{
  "enabled": true,
  "spokenResponses": true,
  "language": "en-GB",
  "rate": 1,
  "pitch": 1,
  "volume": 1,
  "confirmNumbers": true,
  "maximumRestSeconds": 150,
  "restAnnouncements": true
}
```

No microphone audio, transcript history or API credential is stored.

### `Games/<game>.json`

```json
{
  "app": "pairs",
  "profile": {}
}
```

One file owns one canonical app key. The app key is allowlisted; arbitrary path components are rejected. Guest profiles stay separate until the signed-in user explicitly chooses to import missing data.

### `Shared/badminton-session.json`

```json
{
  "players": [],
  "courts": [],
  "matches": [],
  "ratings": {},
  "preferences": {},
  "approvedAdminUsernames": []
}
```

All current shared state remains one logical file, as requested. Every mutation requires an expected revision. Management changes retain current authorization checks. Result editing should additionally use an expiring active lease with an opaque token, heartbeat renewal and explicit release; expiry recovers from abandoned browsers.

## Migration sequence

For each resource type:

1. Freeze schema changes or record the exact SQLite schema version.
2. Create and download a database backup; record byte size and SHA-256.
3. Run a read-only exporter into a staging directory outside both production stores.
4. Validate row counts, unique keys, references, JSON bounds and canonical ordering.
5. Copy validated files to a new versioned staging root; do not overwrite live files.
6. Enable shadow reads: SQLite serves responses while the application compares normalized file output and records only redacted mismatch metadata.
7. Resolve all mismatches and test rollback.
8. Enable dual-write only if necessary and for a short, measured interval. Record revision mapping and fail closed if either authoritative write fails.
9. Cut one resource to file authority behind server configuration.
10. Verify authenticated reads/writes, guest isolation, revision conflicts, lease expiry, backup inclusion and restore.
11. Retain the original SQLite backup and a read-only rollback window.

Suggested order: voice settings, binaural presets, favourites, a low-risk game profile, remaining games, Fitness, account projection, then shared Badminton.

## Rollback

Rollback disables the resource cutover flag, stops file writes, restores SQLite authority and reconciles only revisions written after cutover. Never bulk-import files back into SQLite without a dry-run report. A rollback report must list resource, user ID, file revision, prior database timestamp, action and checksum without logging personal content.

## Inode and backup policy

The current repository already uses more than 17,000 files, mainly Food Approach records. Saved Data adds roughly five base files plus active game files per account, so account/game growth must be modelled against the real hPanel inode allowance. Runtime lock files must be deleted on lease release and expired files swept safely. Do not keep unbounded per-write backup copies beside resources.

Hostinger states that every file or directory consumes an inode, that reaching the limit prevents new file creation, and that hPanel shows current usage. Verify the actual plan values rather than assuming the current marketing tier: <https://www.hostinger.com/support/1583210-what-is-the-inode-limit-and-what-happens-when-it-is-reached/>.

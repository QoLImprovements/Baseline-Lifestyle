# Hostinger external SQLite procedure — interim migration safeguard only

## Correction

The earlier version of this document described an external SQLite file as the final Saved Data authority. That contradicted the agreed resource-based save-file structure and is withdrawn.

The permanent target is defined in:

```text
sitewide/docs/SAVED_DATA_STRUCTURE_AUTHORITY_20260802.md
```

It requires:

```text
Saved Data/
├── Account Index/
├── Users/{padded-id}/
│   ├── account.json
│   ├── favourites.json
│   ├── binaural.json
│   ├── fitness.json
│   ├── voice.json                  only when needed
│   └── Games/{one file per played game}
└── Shared/Badminton/badminton.json
```

## Permitted use of external SQLite

Moving or copying SQLite outside `public_html` may still be used as:

- an interim protection against ordinary application-file replacement;
- a verified migration source;
- a rollback snapshot during Saved Data cutover;
- a minimal protected account/authentication lookup index where the final account design requires it.

It must not be used to declare the wider Saved Data implementation complete.

## Interim safety procedure

When a protected external SQLite copy is required during migration:

1. create a fresh Hostinger backup;
2. enter a write-free maintenance window;
3. check for active `-wal`, `-shm` or `-journal` companion files;
4. copy rather than initially move the database;
5. verify the copy with `verify_external_sqlite.php`;
6. keep the original source unchanged as rollback evidence;
7. never allow both copies to receive writes;
8. do not retire resource migration work merely because the database is outside the document root.

Example verification command:

```bash
php sitewide/migration/verify_external_sqlite.php \
  --database="/home/ACCOUNT/private-migration/baseline.sqlite" \
  --document-root="/home/ACCOUNT/public_html" \
  --evidence="/home/ACCOUNT/private-migration/sqlite-evidence.json"
```

The directory name deliberately avoids implying that the database itself is the final `Saved Data` tree.

## Final cutover boundary

The final production cutover is SQLite-to-resource migration, not merely an environment-variable change. It requires:

- canonical folders and filenames;
- complete schemas;
- authenticated resource-specific readers and writers;
- revisions, atomic writes and locks;
- copied database migration;
- eligible browser-data migration;
- backup and individual-resource restore proof;
- live smoke tests;
- SQLite rollback until the new authority is proven.

The previous instruction to use:

```ini
BASELINE_DB_PATH="/home/ACCOUNT/Saved Data/Database/baseline.sqlite"
```

as the finished architecture is withdrawn. `BASELINE_DB_PATH` may remain available for the interim or account-index role, but it does not replace the agreed save files.

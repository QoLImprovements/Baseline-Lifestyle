<?php
declare(strict_types=1);

require_once __DIR__ . '/private_environment.php';

// Default local SQLite location. This file is runtime state and must not be committed.
const BL_DB_PATH = __DIR__ . '/baseline.sqlite';
const BL_DB_ENV_KEY = 'BASELINE_DB_PATH';
const BL_MAX_NAME_LEN = 40;
const BL_MAX_EMAIL_LEN = 254;
const BL_MIN_PASSWORD_LEN = 8;
const BL_RESET_TOKEN_TTL = 3600; // 1 hour
const BL_CORE_SCHEMA_VERSION = 20260720;
const BL_MAX_JSON_BYTES = 2097152; // 2 MiB
const BL_CANONICAL_ORIGIN = 'https://baselinelifestyle.org';

require_once __DIR__ . '/http.php';
require_once __DIR__ . '/database.php';
require_once __DIR__ . '/session.php';
require_once __DIR__ . '/authentication.php';
require_once __DIR__ . '/mail.php';
require_once __DIR__ . '/account_recovery.php';

function bl_now(): int {
  return time();
}

function bl_str_len(string $value): int {
  return function_exists('mb_strlen') ? (int)mb_strlen($value) : strlen($value);
}

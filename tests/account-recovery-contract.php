<?php
declare(strict_types=1);

putenv('BL_SITE_URL=https://example.test');
$_SERVER['SCRIPT_NAME'] = '/sitewide/api/password_reset.php';
$_SERVER['REMOTE_ADDR'] = '192.0.2.10';
$_SERVER['HTTP_USER_AGENT'] = 'Baseline account recovery contract';

function recovery_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

try {
  require_once dirname(__DIR__) . '/sitewide/api/config.php';

  $db = new PDO('sqlite::memory:', null, null, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);
  bl_ensure_schema($db);

  $now = bl_now();
  $db->prepare('INSERT INTO users(name, email, email_normalized, pass_hash, auth_provider, google_sub, created_at, updated_at, last_login_at) VALUES(:name,:email,:normalized,:hash,:provider,NULL,:created,:updated,NULL)')
    ->execute([
      ':name' => 'Recovery Contract',
      ':email' => 'person@example.test',
      ':normalized' => 'person@example.test',
      ':hash' => password_hash('previous-password', PASSWORD_DEFAULT),
      ':provider' => 'google',
      ':created' => $now,
      ':updated' => $now,
    ]);
  $userId = (int)$db->lastInsertId();
  $user = $db->query('SELECT * FROM users WHERE id = ' . $userId)->fetch();
  recovery_assert(is_array($user), 'fixture_user_missing');

  $issued = bl_issue_password_reset($db, $user);
  recovery_assert(substr_count((string)$issued['token'], '.') === 1, 'token_format_incorrect');
  recovery_assert(str_starts_with((string)$issued['url'], 'https://example.test/index.html?bl-reset='), 'reset_url_incorrect');
  recovery_assert((int)$issued['expires_at'] >= $now + BL_RESET_TOKEN_TTL, 'expiry_too_early');
  recovery_assert((int)$issued['expires_at'] <= bl_now() + BL_RESET_TOKEN_TTL, 'expiry_too_late');

  [$selector, $verifier] = explode('.', (string)$issued['token'], 2);
  $stored = $db->query('SELECT * FROM password_reset_tokens WHERE user_id = ' . $userId)->fetch();
  recovery_assert(is_array($stored), 'reset_not_stored');
  recovery_assert($stored['selector'] === $selector, 'selector_not_stored');
  recovery_assert($stored['verifier_hash'] === bl_hash_verifier($verifier), 'verifier_hash_incorrect');
  recovery_assert($stored['verifier_hash'] !== $verifier, 'raw_verifier_stored');
  recovery_assert($stored['requested_ip'] === '192.0.2.10', 'request_ip_missing');
  recovery_assert($stored['requested_ua'] === 'Baseline account recovery contract', 'request_ua_missing');

  recovery_assert(bl_lookup_password_reset($db, (string)$issued['token']) !== null, 'valid_token_rejected');
  recovery_assert(bl_lookup_password_reset($db, $selector . '.wrong-verifier') === null, 'wrong_verifier_accepted');

  $db->exec('UPDATE password_reset_tokens SET expires_at = ' . (bl_now() - 1) . ' WHERE id = ' . (int)$stored['id']);
  recovery_assert(bl_lookup_password_reset($db, (string)$issued['token']) === null, 'expired_token_accepted');

  $replacement = bl_issue_password_reset($db, $user);
  $count = (int)$db->query('SELECT COUNT(*) FROM password_reset_tokens WHERE user_id = ' . $userId)->fetchColumn();
  recovery_assert($count === 1, 'multiple_active_resets_retained');
  recovery_assert(bl_lookup_password_reset($db, (string)$issued['token']) === null, 'replaced_token_accepted');
  recovery_assert(bl_mask_email('person@example.test') === 'pe…@example.test', 'email_mask_incorrect');

  $resetRow = bl_lookup_password_reset($db, (string)$replacement['token']);
  recovery_assert(is_array($resetRow), 'replacement_token_rejected');
  $updated = bl_complete_password_reset($db, $resetRow, 'new-contract-password');
  recovery_assert(password_verify('new-contract-password', (string)$updated['pass_hash']), 'password_not_updated');
  recovery_assert($updated['auth_provider'] === 'password', 'provider_not_reset');
  recovery_assert((int)$updated['updated_at'] >= $now, 'updated_at_not_set');
  recovery_assert(bl_lookup_password_reset($db, (string)$replacement['token']) === null, 'used_token_accepted');

  echo "account recovery contract passed\n";
} finally {
  putenv('BL_SITE_URL');
}

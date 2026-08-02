<?php
declare(strict_types=1);

function bl_hash_verifier(string $verifier): string {
  return hash('sha256', $verifier);
}

function bl_generate_selector(): string {
  return bin2hex(random_bytes(8));
}

function bl_generate_verifier(): string {
  return bin2hex(random_bytes(32));
}

function bl_issue_password_reset(PDO $db, array $user): array {
  $selector = bl_generate_selector();
  $verifier = bl_generate_verifier();
  $token = $selector . '.' . $verifier;
  $expires = bl_now() + BL_RESET_TOKEN_TTL;
  $userId = (int)($user['id'] ?? 0);

  $db->prepare('DELETE FROM password_reset_tokens WHERE user_id = :uid')->execute([':uid' => $userId]);
  $db->prepare('INSERT INTO password_reset_tokens(user_id, selector, verifier_hash, expires_at, used_at, created_at, requested_ip, requested_ua) VALUES(:uid,:selector,:hash,:expires,NULL,:created,:ip,:ua)')
    ->execute([
      ':uid' => $userId,
      ':selector' => $selector,
      ':hash' => bl_hash_verifier($verifier),
      ':expires' => $expires,
      ':created' => bl_now(),
      ':ip' => substr((string)($_SERVER['REMOTE_ADDR'] ?? ''), 0, 64),
      ':ua' => substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 255),
    ]);

  return [
    'token' => $token,
    'url' => bl_site_url('index.html', ['bl-reset' => $token]),
    'expires_at' => $expires,
  ];
}

function bl_lookup_password_reset(PDO $db, string $token): ?array {
  $parts = explode('.', trim($token), 2);
  if(count($parts) !== 2 || $parts[0] === '' || $parts[1] === '') return null;
  [$selector, $verifier] = $parts;

  $stmt = $db->prepare('
    SELECT prt.*, u.id AS user_id, u.name, u.email, u.auth_provider
    FROM password_reset_tokens prt
    JOIN users u ON u.id = prt.user_id
    WHERE prt.selector = :selector
    LIMIT 1
  ');
  $stmt->execute([':selector' => $selector]);
  $row = $stmt->fetch();
  if(!$row) return null;
  if(!hash_equals((string)$row['verifier_hash'], bl_hash_verifier($verifier))) return null;
  if(!empty($row['used_at'])) return null;
  if((int)$row['expires_at'] < bl_now()) return null;
  return $row;
}

function bl_mask_email(string $email): string {
  $email = trim($email);
  if($email === '' || !str_contains($email, '@')) return '';
  [$local, $domain] = explode('@', $email, 2);
  $localMasked = strlen($local) <= 2 ? substr($local, 0, 1) . '…' : substr($local, 0, 2) . '…';
  return $localMasked . '@' . $domain;
}

function bl_complete_password_reset(PDO $db, array $resetRow, string $newPassword): array {
  $userId = (int)($resetRow['user_id'] ?? 0);
  if($userId <= 0) throw new RuntimeException('invalid_user');

  $hash = password_hash($newPassword, PASSWORD_DEFAULT);
  $now = bl_now();

  $db->prepare('UPDATE users SET pass_hash = :hash, auth_provider = "password", updated_at = :updated WHERE id = :id')
    ->execute([
      ':hash' => $hash,
      ':updated' => $now,
      ':id' => $userId,
    ]);

  $db->prepare('UPDATE password_reset_tokens SET used_at = :used WHERE id = :id')
    ->execute([
      ':used' => $now,
      ':id' => (int)$resetRow['id'],
    ]);

  $db->prepare('DELETE FROM password_reset_tokens WHERE user_id = :uid AND id != :id')
    ->execute([
      ':uid' => $userId,
      ':id' => (int)$resetRow['id'],
    ]);

  $stmt = $db->prepare('SELECT * FROM users WHERE id = :id LIMIT 1');
  $stmt->execute([':id' => $userId]);
  $user = $stmt->fetch();
  if(!$user) throw new RuntimeException('user_reload_failed');

  return $user;
}

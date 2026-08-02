<?php
declare(strict_types=1);

$_SERVER['HTTPS'] = 'on';
$_SERVER['HTTP_X_FORWARDED_PROTO'] = '';
$_SERVER['SCRIPT_NAME'] = '/sitewide/api/authentication-contract.php';

try{
  require_once dirname(__DIR__) . '/sitewide/api/config.php';

  $db = new PDO('sqlite::memory:', null, null, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);
  $db->exec('CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    email_normalized TEXT NOT NULL,
    auth_provider TEXT NOT NULL,
    pass_hash TEXT NOT NULL
  )');
  $stmt = $db->prepare('INSERT INTO users(id, name, email, email_normalized, auth_provider, pass_hash) VALUES(:id, :name, :email, :normalized, :provider, :hash)');
  $stmt->execute([
    ':id' => 42,
    ':name' => 'Authentication Contract',
    ':email' => 'auth@example.test',
    ':normalized' => 'auth@example.test',
    ':provider' => 'password',
    ':hash' => 'must-never-be-public',
  ]);

  bl_set_auth_session(['id'=>42, 'name'=>'Old Name', 'email'=>'old@example.test']);
  $user = bl_current_user($db);
  if(!$user || (int)$user['id'] !== 42) throw new RuntimeException('current_user_not_loaded');
  if(bl_authed_name() !== 'Authentication Contract') throw new RuntimeException('session_name_not_refreshed');
  if(bl_authed_email() !== 'auth@example.test') throw new RuntimeException('session_email_not_refreshed');

  $public = bl_user_public_payload($user);
  if($public !== [
    'id'=>42,
    'name'=>'Authentication Contract',
    'email'=>'auth@example.test',
    'provider'=>'password',
  ]) throw new RuntimeException('public_payload_incorrect');
  if(array_key_exists('pass_hash', $public)) throw new RuntimeException('password_hash_exposed');

  if(bl_normalize_email('  Person@Example.TEST ') !== 'person@example.test') throw new RuntimeException('email_normalization_incorrect');
  if(!bl_email_is_valid('person@example.test') || bl_email_is_valid('not-an-email')) throw new RuntimeException('email_validation_incorrect');
  if(!bl_password_is_valid('12345678') || bl_password_is_valid('short')) throw new RuntimeException('password_validation_incorrect');
  if(bl_auth_providers_payload() !== ['password'=>true, 'google'=>false]) throw new RuntimeException('default_provider_payload_incorrect');

  if((int)(bl_find_user_by_identifier($db, 'authentication contract')['id'] ?? 0) !== 42) throw new RuntimeException('name_lookup_failed');
  if((int)(bl_find_user_by_identifier($db, '  AUTH@EXAMPLE.TEST ')['id'] ?? 0) !== 42) throw new RuntimeException('identifier_email_lookup_failed');
  if((int)(bl_find_user_by_email($db, ' Auth@Example.Test ')['id'] ?? 0) !== 42) throw new RuntimeException('email_lookup_failed');
  if(bl_find_user_by_identifier($db, '') !== null || bl_find_user_by_email($db, '') !== null) throw new RuntimeException('empty_lookup_accepted');

  putenv('BL_SITE_URL=https://example.test');
  if(bl_google_redirect_url() !== 'https://example.test/sitewide/api/google_callback.php') throw new RuntimeException('default_google_redirect_incorrect');
  putenv('BL_GOOGLE_REDIRECT_URI=https://accounts.example.test/callback');
  if(bl_google_redirect_url() !== 'https://accounts.example.test/callback') throw new RuntimeException('configured_google_redirect_ignored');

  putenv('BL_GOOGLE_CLIENT_ID=contract-client');
  putenv('BL_GOOGLE_CLIENT_SECRET=contract-secret');
  if(bl_auth_providers_payload() !== ['password'=>true, 'google'=>true]) throw new RuntimeException('google_provider_not_enabled');

  bl_set_auth_session(['id'=>999, 'name'=>'Missing', 'email'=>'missing@example.test']);
  if(bl_current_user($db) !== null) throw new RuntimeException('missing_user_not_rejected');
  if(bl_authed_uid() !== 0) throw new RuntimeException('missing_user_session_not_cleared');

  echo "authentication contract passed\n";
}finally{
  putenv('BL_GOOGLE_CLIENT_ID');
  putenv('BL_GOOGLE_CLIENT_SECRET');
  putenv('BL_GOOGLE_REDIRECT_URI');
  putenv('BL_SITE_URL');
  if(session_status() === PHP_SESSION_ACTIVE) @session_destroy();
}

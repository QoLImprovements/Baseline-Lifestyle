<?php
declare(strict_types=1);

putenv('BL_SITE_URL=https://example.test');
$_SERVER['HTTPS'] = 'on';
$_SERVER['HTTP_X_FORWARDED_PROTO'] = '';
$_SERVER['HTTP_HOST'] = 'example.test';
$_SERVER['SCRIPT_NAME'] = '/sitewide/api/login.php';
$_SERVER['REQUEST_METHOD'] = 'POST';
$_SERVER['HTTP_ORIGIN'] = 'https://example.test';

try{
  require_once dirname(__DIR__) . '/sitewide/api/config.php';

  if(!bl_is_secure_request()) throw new RuntimeException('https_request_not_detected');
  if(bl_request_origin() !== 'https://example.test') throw new RuntimeException('configured_origin_not_used');
  if(bl_site_base_path() !== '/sitewide') throw new RuntimeException('site_base_path_incorrect');
  if(bl_site_url('index.html', ['check'=>'yes']) !== 'https://example.test/sitewide/index.html?check=yes'){
    throw new RuntimeException('site_url_incorrect');
  }

  // A matching non-GET origin must pass without emitting or terminating.
  bl_require_same_origin();

  putenv('BL_SITE_URL');
  $_SERVER['HTTPS'] = 'off';
  $_SERVER['HTTP_X_FORWARDED_PROTO'] = '';
  $_SERVER['HTTP_HOST'] = 'localhost:4173';
  if(bl_request_origin() !== 'http://localhost:4173') throw new RuntimeException('local_origin_incorrect');

  $_SERVER['HTTP_X_FORWARDED_PROTO'] = 'https';
  if(!bl_is_secure_request()) throw new RuntimeException('forwarded_https_not_detected');
  if(bl_request_origin() !== 'https://localhost:4173') throw new RuntimeException('forwarded_local_origin_incorrect');

  $_SERVER['HTTP_HOST'] = 'attacker.example';
  if(bl_request_origin() !== BL_CANONICAL_ORIGIN) throw new RuntimeException('untrusted_host_was_used');

  echo "http contract passed\n";
}finally{
  putenv('BL_SITE_URL');
}

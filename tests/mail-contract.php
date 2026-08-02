<?php
declare(strict_types=1);

putenv('BL_MAIL_FROM_EMAIL=sender@example.test');
putenv('BL_MAIL_FROM_NAME=Baseline Contract');

try{
  require_once dirname(__DIR__) . '/sitewide/api/config.php';
  if(bl_mail_from_email() !== 'sender@example.test') throw new RuntimeException('configured_mail_email_not_used');
  if(bl_mail_from_name() !== 'Baseline Contract') throw new RuntimeException('configured_mail_name_not_used');

  putenv('BL_MAIL_FROM_EMAIL');
  putenv('BL_MAIL_FROM_NAME');
  if(bl_mail_from_email() !== 'no-reply@baseline.local') throw new RuntimeException('default_mail_email_incorrect');
  if(bl_mail_from_name() !== 'Baseline Lifestyle') throw new RuntimeException('default_mail_name_incorrect');

  echo "mail contract passed\n";
}finally{
  putenv('BL_MAIL_FROM_EMAIL');
  putenv('BL_MAIL_FROM_NAME');
}

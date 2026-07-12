<?php
declare(strict_types=1);

// Compatibility route only. Authentication is owned by the sitewide account API.
// Preserve any older Fitness client request while sending it to the single source
// of truth instead of maintaining a second session implementation here.
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Location: /api/me.php', true, 307);
exit;

from pathlib import Path

path = Path('sitewide/migration/build_sqlite_rollback_copy.php')
text = path.read_text(encoding='utf-8')
old = "if(PHP_SAPI === 'cli'){\n  $options = getopt('', ['source-database:','saved-data:','output-database:','evidence:']);"
new = "if(PHP_SAPI === 'cli' && realpath((string)($_SERVER['SCRIPT_FILENAME'] ?? '')) === __FILE__){\n  $options = getopt('', ['source-database:','saved-data:','output-database:','evidence:']);"
if old not in text:
    if new in text:
        raise SystemExit(0)
    raise SystemExit('Rollback CLI guard marker not found')
path.write_text(text.replace(old, new, 1), encoding='utf-8')

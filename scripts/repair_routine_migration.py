#!/usr/bin/env python3
from pathlib import Path

path = Path(__file__).with_name('apply_routine_systems_overhaul.py')
text = path.read_text()
text = text.replace(
    "update_item = r'''  function updateItem(id, field, value) {\n    const item = itemById(id);",
    "update_item = r'''  function updateItem(control) {\n    const id = control.dataset.id;\n    const field = control.dataset.field;\n    const value = control.value;\n    const item = itemById(id);",
)
text = text.replace(
    r'r"  function updateItem\\(id, field, value\\) \\{[\\s\\S]*?\\n  \\}\\n\\n  function updateDay"',
    r'r"  function updateItem\\(control\\) \\{[\\s\\S]*?\\n  \\}\\n\\n  function updateDay"',
)
path.write_text(text)

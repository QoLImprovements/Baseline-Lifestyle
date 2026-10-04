# Page Rules

This folder holds the rules for this specific HTML page.

Keep this page's system meaning separate from other pages.

## Persistence

- Authenticated Massage preferences use the account-scoped `massage.json` Saved Data resource.
- Baseline Massage must not persist application state in `localStorage` or `sessionStorage`.
- If account data cannot be loaded, or a revision conflict occurs, saving must stop rather than overwrite the account copy.
- Do not claim provider-side sharing or visibility unless a real provider-access surface is implemented and tested.

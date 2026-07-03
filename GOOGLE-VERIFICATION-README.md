# Google Search Console — do not delete these

This site is verified in Google Search Console (property: `https://www.coconutbeach.ug/`).
Two verification methods are live; keep both so a single change can't un-verify the site:

1. **HTML file:** `public/google19f168dc5f8e530b.html` — served at the site root.
   Do NOT delete this file. Google re-checks it periodically.
2. **Meta tag:** `verification.google` in `src/app/layout.tsx` (token `2NB6…QOG0`).

After verifying, the sitemap `https://www.coconutbeach.ug/sitemap.xml` was submitted
(defined in `src/app/sitemap.ts`, 36 routes). Update that file when adding/removing pages.

Note: DNS is managed at the jolis.net panel (nameservers ns1/ns2.jolis.net), which did
NOT reliably persist TXT records — that's why verification uses the file/meta method
instead of a DNS TXT record.

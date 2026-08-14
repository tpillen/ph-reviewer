# PH Alpha 0.5.1 Central Feedback / Change Control

This release converts reviewer feedback into a formal change-order workflow.

## Reviewer behavior
Click Feedback / Change Order → enter comment → Submit Feedback.

The browser always keeps a local backup. If the central receiver is unavailable, the item remains queued for retry.

## Important deployment fact
GitHub Pages is static. It cannot itself accept and store feedback submissions. A small HTTPS receiver must therefore be deployed once.

This package includes:
- `backend/feedback-worker.js`
- `backend/schema.sql`

The example receiver is a Cloudflare Worker using a D1 database binding named `DB`.

After deployment, paste the Worker HTTPS URL into `PH_FEEDBACK_CONFIG.endpoint` inside `pa-intake-engine.html`.

Do not embed passwords, GitHub tokens, database credentials, or private secrets in browser HTML/JavaScript.

## Change-control lifecycle
New → Reviewed → Accepted / Deferred / Rejected → Development → Testing → Validated → Closed.

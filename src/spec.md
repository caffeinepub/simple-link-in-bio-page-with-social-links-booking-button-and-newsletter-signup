# Specification

## Summary
**Goal:** Deliver a simple single-page link-in-bio page with socials, a primary booking button, and a working newsletter signup backed by Motoko storage.

**Planned changes:**
- Build a single-page layout with: profile header (name, tagline, optional avatar), social link buttons, a primary Booking button, and a newsletter signup section.
- Add a single developer-editable configuration module/object for profile text, social links, booking URL, and optional footer text.
- Implement newsletter signup with client-side validation (required + email format) and inline success/error states.
- Add backend (single Motoko actor) storage and an update method to add subscriber emails with case-insensitive deduplication and created-at timestamps.
- Apply a coherent, responsive visual theme (non-blue/non-purple primary palette) across typography, spacing, buttons, and form controls.
- Include and render generated static assets for a subtle background and a default avatar from `frontend/public/assets/generated` (no backend fetching).

**User-visible outcome:** Users see a themed link-in-bio page where they can open social links and a booking link in new tabs, and submit their email to subscribe with clear validation and confirmation feedback.

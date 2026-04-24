# AGENTS.md

## Purpose

This repository powers a live personal website with existing indexed URLs. Any future update must preserve SEO-sensitive paths unless the user explicitly approves a migration plan.

## Non-negotiable rules

1. Do not rename, move, or delete existing route files in `src/pages/` without explicit user approval.
2. Do not change page paths, blog slugs, `baseUrl`, domain, or canonical behavior unless the user explicitly asks for an SEO migration.
3. If a page needs to be redesigned, update the existing file in place instead of creating a replacement route.
4. If new content is added, prefer linking from existing pages rather than replacing current URLs.
5. If a path change is ever unavoidable, stop and document the exact redirect plan before making edits.

## Preferred workflow

1. Inspect `docusaurus.config.js`, `src/pages/`, and any route-linked assets before editing.
2. Keep metadata current:
   - page titles
   - descriptions
   - keywords when relevant
3. Favor copy, layout, and styling updates over structural URL changes.
4. Preserve internal links to existing top-level pages such as `/`, `/services`, `/projects`, `/talks`, `/chat`, `/blog`, and `/contact`.
5. Run a production build after meaningful site changes when possible.

## Content guidance

1. Keep positioning current and specific.
2. Prefer concise, business-relevant copy over generic consultant language.
3. When modernizing design, preserve accessibility and mobile behavior.
4. Reuse existing assets and route structure unless there is a clear reason not to.

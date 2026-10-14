# portfolio-foundation

## Objective
Working foundation of a personal portfolio to get hired: Vite + React (JavaScript) + Tailwind CSS, minimalist dark design, single page with sections, deployable on Netlify.

## Problem / why
No project exists yet. The user needs a public site presenting him and all his projects so recruiters can see his knowledge.

## Scope
- Project scaffold, tooling, tests, Netlify config.
- Dark minimalist layout with section skeletons.
- Content data module with placeholders.

Out of scope for this feature: final copy, real project data, custom domain, i18n, analytics.

## Constraints
- Stack: React, Tailwind CSS v4 (`@tailwindcss/vite`), plain JavaScript, Vite.
- Site content in neutral professional Spanish. Code, comments, docs, commits in English.
- Conventional commits, no AI attribution. Small reviewable units.
- Do not overwrite the existing `.gitignore` or `AGENTS.md`.

## TDD
- Mode: enabled. Source: Gentle AI strict-tdd-mode in the global rules.
- Runner: Vitest + React Testing Library (chosen here; installed in T2).
- Config-only tasks (T1, T3) are checked functionally (build). Component tasks follow RED, GREEN, REFACTOR.

## Tasks
- [x] T1 Scaffold Vite + React + Tailwind v4 (manual files, keep existing `.gitignore`). Check: `npm run build` passes. Evidence: build OK (vite 8.3.4, 16 modules), built CSS contains `neutral-950`.
- [x] T2 Add Vitest + RTL with a smoke test for `App` (observed RED, then GREEN). Check: `npm test` passes. Evidence: RED `ReferenceError: document is not defined`; GREEN after jsdom + setup file (1 test passed); build still OK. No refactor needed.
- [x] T3 Add `netlify.toml` (build `npm run build`, publish `dist`, SPA redirect). Check: file matches netlify-frameworks guide (Vite section). Evidence: build/publish/redirect values identical to the guide; not yet validated by a real Netlify build (T6).
- [ ] T4 Dark theme base and page layout with section skeletons: Presentation, Education, Projects, Skills, Achievements, Contact. Check: tests per section, build passes.
- [ ] T5 Content data module (`src/data/`) with placeholder entries, sections render from data. Check: tests, build passes.
- [ ] T6 Connect repo to Netlify (user login required) and verify the first deploy.

## Acceptance criteria
- `npm run build` and `npm test` pass.
- All six sections render in dark minimalist style, responsive.
- Pushing to `main` deploys on Netlify.

## Progress
Started 2026-10-13. T1, T2, T3 done (committed locally, not pushed).

## Next step
T4.

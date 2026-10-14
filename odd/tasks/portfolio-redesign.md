# portfolio-redesign

## Objective
Replace the plain black skeleton with a richer dark design inspired by three references, keeping the site in Spanish and focused on getting hired.

## References (ideas only, never copy text, photos, or code)
- https://guidosvdev.netlify.app/ — closest structure: left-aligned hero with avatar and "available" badge, pill buttons (contact, LinkedIn, GitHub, CV), project cards with tags and Code/Preview links, achievements, education timeline, skills grouped by category, about section.
- https://skportfolio.dev/ — navy background with subtle grid, floating glass nav with initials logo, project cards with bullet points, fade-in on scroll, back-to-top button.
- https://www.jsebgc.dev/es — navy-black background, blue-to-violet gradient accent, about section with cards, contact form plus contact info.

## Problem / why
The first skeleton (feature `portfolio-foundation`, T4) is correct but feels empty. The user asked for these references explicitly.

## Scope
Visual foundation, profile data module, hero, about, projects, skills, education, achievements, contact form, motion.

Out of scope: testimonials, blog, light theme toggle (the user asked for dark), i18n, analytics, final real copy not yet provided by the user.

## Constraints
- Stack unchanged: React, Tailwind v4, plain JavaScript, Vite. Site content in neutral professional Spanish; code, comments, docs, commits in English.
- Never publish personal data the user has not provided (email, phone, CV, LinkedIn): render those links only when present in data.
- Respect `prefers-reduced-motion`. Keep accessibility: landmarks, headings, focus styles.
- Contact form uses Netlify Forms (see `.agents/skills/netlify-forms`, Vite + React AJAX pattern).
- Supersedes T5 of `portfolio-foundation` (content data module) for everything it covers.

## TDD
- Mode: enabled. Runner: Vitest + React Testing Library. Visual-only changes are also checked in the browser.

## Tasks
- [x] R1 Visual foundation: navy background with subtle grid and glow, gradient accent, floating glass header with initials logo. Check: Header tests, build, screenshot. Evidence: RED 1 failing Header test; GREEN with the rest; build OK; screenshot shows navy grid background, glass nav with gradient logo.
- [x] R2 Profile data module and Hero: avatar (initials fallback), availability badge, name, role, summary, pill links rendered only when the URL exists. Check: Hero tests, build, screenshot. Evidence: RED 6 failing Hero tests (plus logo); GREEN 20 tests in 4 files; build OK; screenshot OK. LinkedIn, CV and email stay hidden until provided. Assumption to confirm: availability badge "Disponible para trabajar" and the role text.
- [ ] R3 "Sobre mí" section.
- [ ] R4 Projects as cards from data (real GitHub repos), tech tags, Code/Demo links.
- [ ] R5 Skills grouped by category.
- [ ] R6 Education timeline and Achievements cards.
- [ ] R7 Contact section with Netlify Forms plus contact links.
- [ ] R8 Motion: fade-in on scroll (reduced-motion safe) and back-to-top button.
- [ ] R9 Responsive and keyboard check by hand; connect Netlify and verify first deploy (T6 of `portfolio-foundation`).

## Acceptance criteria
- Tests and build pass.
- Visual language matches the agreed direction on desktop and mobile.
- No personal data published without the user providing it.

## Progress
Created 2026-10-14. R1 and R2 done (committed locally, not pushed). LinkedIn URL provided by the user and wired into the profile data.

Content findings from the user's CV (kept out of the repo on purpose because it holds a phone number, a personal email, a home address and a birth date): the profile is Networks and Telecommunications with Linux automation, plus a Tigo software development bootcamp (Java, Spring Boot, REST/GraphQL, Docker, Redis, K6, Grafana, Graylog). The current hero role "Desarrollador de software" may not match; needs the user's decision. Do not publish the CV file or any of those personal data without explicit approval.

## Next step
R3 "Sobre mí". Needs the user's real text; start with a short placeholder.

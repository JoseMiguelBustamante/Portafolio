# portfolio-content

## Objective
Fill the redesigned portfolio with the user's real content: about, experience, education, projects, skills and achievements, rendered from data modules. Covers R3-R6 of `portfolio-redesign`.

## Sources
- User's CV (read-only, not copied into the repo) for profile, education, experience, skills, academic projects.
- Public metadata and READMEs of the user's GitHub repos for project descriptions and technologies.

## Constraints
- Never publish phone, personal email, home address, birth date, primary/secondary school, or the CV file.
- Do not invent facts. Descriptions come from the CV or the repos; the two thin repos (`challenge-conversor-de-monedas`, `challenge-amigo-secreto_esp-main`) get a minimal description based on their name and language.
- Site copy in neutral Spanish; code, tests, docs and commits in English.
- Components are data-driven: sections accept props with defaults from `src/data`.

## TDD
Mode enabled, Vitest + React Testing Library. Check by screenshot too.

## Tasks
- [x] C1 `Timeline` and `ProjectCard` components (tests first).
- [x] C2 "Sobre mí" and "Experiencia" sections (new), navigation and App order updated.
- [x] C3 Education and Achievements from data using `Timeline` / cards.
- [x] C4 Projects from data using `ProjectCard` (6 repos plus 3 academic projects).
- [x] C5 Skills grouped by category.
- [x] C6 Contact section uses profile links (GitHub, LinkedIn, optional email/CV).

## Assumptions to confirm with the user
- The Education entry attributes "Redes y Telecomunicaciones (egresado)" to UAGRM because the CV lists it next to that university.
- "Logros" holds CCNA I and II for now, because the CV lists no achievements. Needs the user's real achievements.
- "Experiencia" lists lab assistant (2024, 2025) and teaching assistant (2023) at UAGRM without bullets; the CV gives none.

## Acceptance criteria
- Tests and build pass; screenshot shows all sections with real content.
- No personal data beyond what is listed above is published.

## Evidence
- `npm test`: 6 files, 40 tests passing (RED observed first).
- `npm run build`: OK.
- Browser check on a private dev server: 8 regions render in order with real content; project cards render with tags and links.
- Source scan for phone, personal email, address and birth date: no matches.

## Progress
Created 2026-10-14. C1-C6 done 2026-10-14.

## Next step
Redesign R7 (contact form with Netlify Forms), then R8 (motion) and R9 (responsive check and first deploy).

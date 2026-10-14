# AGENTS.md

Personal portfolio project. Every agent working in this repository MUST use the full Gentleman stack (Gentle AI ecosystem). This is not optional and not "when convenient".

## Language

- Chat replies: match the user's language (the user writes in Spanish).
- Artifacts (code, identifiers, comments, UI copy, docs, commit messages, PR descriptions): English by default, unless the user explicitly asks otherwise for a given artifact.
- Exception: the portfolio site's visible content (UI copy, labels, project descriptions, accessibility strings) is in neutral, professional Spanish for now. Code, identifiers, comments, docs, and commits stay in English. Do not add i18n machinery until a second language is requested.

## The Gentleman stack (mandatory)

| Piece | What it is for | Rule |
| --- | --- | --- |
| Engram | Persistent memory across sessions | Follow the Engram protocol: detect project at session start, `mem_search` before repeating past work, `mem_save` proactively after every decision/bugfix/convention, `mem_session_summary` before closing. |
| ODD (Organic Driven Development) | Default workflow for every request | Runs on every request without being asked. See "ODD workflow" below. |
| SDD (`sdd-*` subagents) | Optional branch inside ODD | Only when the user explicitly requests it or accepts an SDD proposal. Never selected by file count, size, or perceived risk alone. |
| Skills | Task-specific instructions | Before replying, check `<available_skills>`. If a skill matches, read its `SKILL.md` first. Blocking requirement. |
| Skill registry | Index of installed skills | Keep `.atl/skill-registry.md` fresh (run the `skill-registry` skill after any skill change). Pass exact skill paths to subagents. |
| GGA (Gentleman Guardian Angel) | AI code review on commits | Wire it as a pre-commit hook once the repo is initialized with git. Do not bypass it. |
| Context7 | Current library/framework docs | Use it for any library, framework, or tool question instead of relying on memory. |
| Judgment Day | Blind dual adversarial review | Use before merging significant work. |

## Workflow rules

1. **Memory first.** At session start, resolve the project with `mem_current_project`, then `mem_search` for prior context on the topic.
2. **Explore before code.** Follow the ODD workflow. Substantial work gets a tracked task document before the first source write.
3. **Skills before answers.** Match the request against available skills and read them before acting.
4. **Docs before assumptions.** Verify library/framework behavior with Context7; never guess API syntax.
5. **Small, reviewable units.** Follow `work-unit-commits`: each commit is one coherent unit with its tests and docs. Use `chained-pr` when a change exceeds ~400 lines.
6. **Issue-first PRs.** Use `issue-creation` and `branch-pr` for issues and pull requests.
7. **Review gate.** Run `judgment-day` on non-trivial changes before they ship. Receipt-driven development (RDD) is enabled globally by the user (`gentle-ai review mode status`): follow the native review flow at the deliverable boundary and never bypass or disable it unless the user asks.
8. **Verify, don't agree.** Never accept a claim without checking code/docs. If the user is wrong, explain why with evidence; if you were wrong, say so with proof.

## ODD workflow (default, every request)

1. **Authorize.** Investigation, explanation, review, and planning requests are read-only. Write only when the user explicitly asks for a change.
2. **Explore.** Read existing code and requirements first, proportionate to the request.
3. **Resolve uncertainty.** Ask one focused question only for a real product decision, then stop and wait.
4. **Classify.** Substantial = two or more meaningful steps, or progress worth recovering. Small work creates no task artifacts.
5. **Track before the first write.** For substantial work, create `odd/tasks/<feature-name>.md` and its Engram mirror `odd/<feature-name>/tasks`. Tell the user in one line.
6. **Implement task by task.** Check an item off only after its outcome and checks were observed. Update the file and the mirror after each task.
7. **Close.** Report verified outcome, failed/skipped/pending checks, and next step.

- About 400 changed lines per task is a planning heuristic, not a hard cap.
- Strict TDD: flagged as enabled in the Gentle AI config, but it only applies once the project defines a test runner. When it applies: observed RED, then GREEN, then REFACTOR, never invented evidence. Record the runner here once chosen.
- RDD is on: at the deliverable boundary, run `gentle-ai review assess --cwd <repo> --json` and follow the native plan. It needs a git repository.
- Resume interrupted work with `mem_context`, then `mem_search`, then `mem_get_observation`, then the task file.

## Git conventions

- Conventional commits only (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, ...).
- Never add `Co-Authored-By` or any AI attribution to commits or PRs.
- Add `.atl/` to `.gitignore`.
- The repo MUST be a git repository so Engram resolves the project correctly (otherwise it falls back to the parent folder name).

## Documentation

- Follow `cognitive-doc-design` for READMEs, guides, and review-facing docs.
- Follow `comment-writer` for PR feedback, issue replies, and review comments.

## Project stack

- UI: React
- Styling: Tailwind CSS
- Hosting / CI-CD: GitHub (`JoseMiguelBustamante`) with Netlify continuous deployment on push to `main`
- Language: JavaScript (no TypeScript)
- Bundler: Vite
- Tests: Vitest + React Testing Library (`npm test`), required for Strict TDD Record each choice here and in Engram with `mem_save` (type `decision`), with the tradeoffs considered.

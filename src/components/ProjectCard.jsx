import TechChip from "./TechChip.jsx";
import { st, an } from "./CodeWindow.jsx";

// Build a short, URL-friendly slug from the project title for the preview path.
function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\([^)]*\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .join("-")
    .replace(/[^a-z0-9-]/g, "");
}

// Decorative, consistent code/API preview shown at the top of every card.
function CardPreview({ project }) {
  const slug = slugify(project.title) || "app";

  return (
    <div
      aria-hidden="true"
      className="border-b border-slate-800 bg-slate-950/60 px-4 py-3 font-mono text-[11px] leading-relaxed"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded bg-blue-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-blue-300">
          GET
        </span>
        <span className="text-slate-400">/api/{slug}</span>
      </div>
      <pre className="overflow-x-auto text-slate-400">
        <code>
          {"{"}
          {"\n"}
          {"  "}
          {st('"status"')}: {st('"ok"')},{"\n"}
          {"  "}
          {st('"data"')}: [{an("…")}]{"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { title, description, tags = [], category, repo, demo } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-colors hover:border-slate-600">
      <CardPreview project={project} />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          {category ? (
            <span className="shrink-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-300">
              {category}
            </span>
          ) : null}
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {tags.length ? (
          <ul aria-label="Tecnologías" className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TechChip key={tag} tag={tag} />
            ))}
          </ul>
        ) : null}

        {repo || demo ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {repo ? (
              <a
                href={repo}
                aria-label={`Código de ${title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                Ver repositorio
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {demo ? (
              <a
                href={demo}
                aria-label={`Demo de ${title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                Demo
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

const linkClass =
  "font-medium text-blue-300 underline-offset-4 transition-colors hover:text-blue-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

export default function ProjectCard({ project }) {
  const { title, description, tags = [], repo, demo } = project;

  return (
    <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-slate-700">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
      {tags.length ? (
        <ul aria-label="Tecnologías" className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      {repo || demo ? (
        <div className="mt-6 flex gap-5 text-sm">
          {repo ? (
            <a
              href={repo}
              aria-label={`Código de ${title}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Código
            </a>
          ) : null}
          {demo ? (
            <a
              href={demo}
              aria-label={`Demo de ${title}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Demo
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

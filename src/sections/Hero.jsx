import PillLink from "../components/PillLink.jsx";
import { profile as defaultProfile } from "../data/profile.js";

export default function Hero({ profile = defaultProfile }) {
  const { name, initials, role, summary, availability, photo, links } = profile;

  const externalLinks = [
    { label: "GitHub", href: links.github, icon: "github" },
    { label: "LinkedIn", href: links.linkedin, icon: "linkedin" },
    { label: "Ver CV", href: links.cv, icon: "file" },
  ].filter((link) => link.href);

  return (
    <section
      id="presentacion"
      aria-labelledby="presentacion-title"
      className="scroll-mt-28 pb-24 pt-40 sm:pt-48"
    >
      <div className="mb-8 flex flex-wrap items-center gap-4">
        {photo ? (
          <img
            src={photo}
            alt={`Foto de ${name}`}
            className="size-16 rounded-full object-cover ring-2 ring-slate-700"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid size-16 place-items-center rounded-full bg-linear-to-br from-blue-500 to-violet-500 text-lg font-semibold text-white"
          >
            {initials}
          </span>
        )}
        {availability ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-emerald-400"
            />
            {availability}
          </span>
        ) : null}
      </div>

      <h1
        id="presentacion-title"
        className="text-4xl font-semibold tracking-tight text-white sm:text-6xl"
      >
        {name}
      </h1>
      <p className="mt-3 bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-xl font-medium text-transparent sm:text-2xl">
        {role}
      </p>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
        {summary}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#contacto"
          className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          Contactarme
        </a>
        {externalLinks.map(({ label, href, icon }) => (
          <PillLink key={label} href={href} icon={icon}>
            {label}
          </PillLink>
        ))}
        {links.email ? (
          <PillLink href={`mailto:${links.email}`} icon="mail" external={false}>
            Correo
          </PillLink>
        ) : null}
      </div>
    </section>
  );
}

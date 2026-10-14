import Section from "../components/Section.jsx";
import { profile as defaultProfile } from "../data/profile.js";

const pillClass =
  "inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

export default function Contact({ profile = defaultProfile }) {
  const { links } = profile;

  const externalLinks = [
    { label: "GitHub", href: links.github },
    { label: "LinkedIn", href: links.linkedin },
    { label: "Ver CV", href: links.cv },
  ].filter((link) => link.href);

  return (
    <Section id="contacto" title="Contacto" icon="mail">
      <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
        Si quieres conversar sobre una oportunidad o conocer más de mi trabajo,
        puedes encontrarme aquí.
      </p>
      <div className="flex flex-wrap gap-3">
        {links.email ? (
          <a href={`mailto:${links.email}`} className={pillClass}>
            Correo
          </a>
        ) : null}
        {externalLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={pillClass}
          >
            {label}
          </a>
        ))}
      </div>
    </Section>
  );
}

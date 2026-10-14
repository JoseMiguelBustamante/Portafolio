import PillLink from "../components/PillLink.jsx";
import Section from "../components/Section.jsx";
import { profile as defaultProfile } from "../data/profile.js";

export default function Contact({ profile = defaultProfile }) {
  const { links } = profile;

  const externalLinks = [
    { label: "GitHub", href: links.github, icon: "github" },
    { label: "LinkedIn", href: links.linkedin, icon: "linkedin" },
    { label: "Ver CV", href: links.cv, icon: "file" },
  ].filter((link) => link.href);

  return (
    <Section id="contacto" title="Contacto" icon="mail">
      <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
        Si quieres conversar sobre una oportunidad o conocer más de mi trabajo,
        puedes encontrarme aquí.
      </p>
      <div className="flex flex-wrap gap-3">
        {links.email ? (
          <PillLink href={`mailto:${links.email}`} icon="mail" external={false}>
            Correo
          </PillLink>
        ) : null}
        {externalLinks.map(({ label, href, icon }) => (
          <PillLink key={label} href={href} icon={icon}>
            {label}
          </PillLink>
        ))}
      </div>
    </Section>
  );
}

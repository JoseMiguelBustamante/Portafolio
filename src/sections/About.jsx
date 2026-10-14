import Section from "../components/Section.jsx";
import { profile as defaultProfile } from "../data/profile.js";

export default function About({ profile = defaultProfile }) {
  const { about = [], languages = [] } = profile;

  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="space-y-5 text-lg leading-relaxed text-slate-300">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {languages.length ? (
        <div className="mt-8">
          <p className="mb-3 text-sm text-slate-500">Idiomas</p>
          <ul aria-label="Idiomas" className="flex flex-wrap gap-2">
            {languages.map((language) => (
              <li
                key={language}
                className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-sm text-slate-300"
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}

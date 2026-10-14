import Section from "../components/Section.jsx";
import { achievements } from "../data/achievements.js";

export default function Achievements({ items = achievements }) {
  return (
    <Section id="logros" title="Logros">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(({ title, issuer }) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-400">{issuer}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

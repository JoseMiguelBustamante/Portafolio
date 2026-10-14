import Section from "../components/Section.jsx";
import { skills } from "../data/skills.js";

export default function Skills({ groups = skills }) {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid gap-8 sm:grid-cols-2">
        {groups.map(({ name, items }) => (
          <div key={name}>
            <h3 className="mb-3 text-base font-semibold text-white">{name}</h3>
            <ul aria-label={name} className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

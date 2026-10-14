import Section from "../components/Section.jsx";
import Timeline from "../components/Timeline.jsx";
import { experience } from "../data/experience.js";

export default function Experience({ items = experience }) {
  return (
    <Section id="experiencia" title="Experiencia" icon="briefcase">
      <Timeline items={items} />
    </Section>
  );
}

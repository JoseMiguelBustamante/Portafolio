import Section from "../components/Section.jsx";
import Timeline from "../components/Timeline.jsx";
import { education } from "../data/education.js";

export default function Education({ items = education }) {
  return (
    <Section id="educacion" title="Educación" icon="graduation">
      <Timeline items={items} />
    </Section>
  );
}

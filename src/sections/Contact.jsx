import Section from "../components/Section.jsx";

export default function Contact() {
  return (
    <Section id="contacto" title="Contacto">
      <p className="text-neutral-400">
        Puedes ver mi código en{" "}
        <a
          href="https://github.com/JoseMiguelBustamante"
          className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}

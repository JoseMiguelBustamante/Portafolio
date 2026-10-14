import Section from "../components/Section.jsx";

export default function Contact() {
  return (
    <Section id="contacto" title="Contacto">
      <p className="text-slate-400">
        Puedes ver mi código en{" "}
        <a
          href="https://github.com/JoseMiguelBustamante"
          className="text-blue-300 underline underline-offset-4 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}

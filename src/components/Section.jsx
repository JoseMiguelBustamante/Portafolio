export default function Section({ id, title, children }) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="scroll-mt-20 border-t border-neutral-800 py-20"
    >
      <h2
        id={titleId}
        className="mb-8 text-sm font-medium uppercase tracking-widest text-neutral-500"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Section({ id, title, children }) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="scroll-mt-28 border-t border-slate-800/80 py-20"
    >
      <h2
        id={titleId}
        className="mb-8 text-sm font-medium uppercase tracking-widest text-blue-300/80"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

import Icon from "./Icon.jsx";

export default function Section({ id, title, icon, children }) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="scroll-mt-28 border-t border-slate-800/80 py-20"
    >
      <h2
        id={titleId}
        className="mb-8 flex items-center gap-2.5 text-sm font-medium uppercase tracking-widest text-blue-300/80"
      >
        {icon ? (
          <span className="flex size-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-blue-300">
            <Icon name={icon} />
          </span>
        ) : null}
        {title}
      </h2>
      {children}
    </section>
  );
}

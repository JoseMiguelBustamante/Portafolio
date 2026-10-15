// Decorative code-editor window with traffic-light chrome and a filename tab.
// Purely visual: hidden from assistive tech. Children are pre-formatted lines.
export default function CodeWindow({ filename, children, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-blue-500/5 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/60 px-4 py-2.5">
        <span className="size-3 rounded-full bg-red-400/80" />
        <span className="size-3 rounded-full bg-amber-400/80" />
        <span className="size-3 rounded-full bg-emerald-400/80" />
        {filename ? (
          <span className="ml-2 font-mono text-xs text-slate-500">{filename}</span>
        ) : null}
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
        <code>{children}</code>
      </pre>
    </div>
  );
}

// Syntax-token helpers so snippets stay readable in the markup.
export const kw = (t) => <span className="text-violet-400">{t}</span>;
export const ty = (t) => <span className="text-sky-300">{t}</span>;
export const fn = (t) => <span className="text-blue-300">{t}</span>;
export const st = (t) => <span className="text-emerald-300">{t}</span>;
export const cm = (t) => <span className="text-slate-500">{t}</span>;
export const an = (t) => <span className="text-amber-300">{t}</span>;

export default function Timeline({ items }) {
  return (
    <ol className="space-y-10 border-l border-slate-800 pl-6">
      {items.map(({ title, organization, period, details }) => (
        <li key={`${title}-${organization}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[1.9rem] top-2 size-2.5 rounded-full bg-linear-to-br from-blue-400 to-violet-400 ring-4 ring-slate-950"
          />
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{organization}</p>
          {period ? (
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-blue-300/70">
              {period}
            </p>
          ) : null}
          {details?.length ? (
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-400 marker:text-slate-600">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

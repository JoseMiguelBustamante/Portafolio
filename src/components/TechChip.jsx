import BrandIcon, { hasBrandIcon } from "./BrandIcon.jsx";

// A single technology pill: brand glyph when known, otherwise a gradient dot.
export default function TechChip({ tag }) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-800/50 px-2.5 py-1 text-xs font-medium text-slate-300">
      {hasBrandIcon(tag) ? (
        <BrandIcon tag={tag} />
      ) : (
        <span
          aria-hidden="true"
          className="size-2 rounded-full bg-linear-to-br from-blue-400 to-violet-400"
        />
      )}
      {tag}
    </li>
  );
}

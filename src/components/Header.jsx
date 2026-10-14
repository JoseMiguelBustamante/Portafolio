import { navigation } from "../data/navigation.js";
import { profile } from "../data/profile.js";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-20 px-4">
      <div className="mx-auto flex max-w-3xl items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-2 backdrop-blur-md">
        <a
          href="#presentacion"
          aria-label="Ir al inicio"
          className={`grid size-9 shrink-0 place-items-center rounded-lg bg-linear-to-br from-blue-500 to-violet-500 text-sm font-semibold text-white ${focusRing}`}
        >
          {profile.initials}
        </a>
        <nav
          aria-label="Navegación principal"
          className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto text-sm"
        >
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-white ${focusRing}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

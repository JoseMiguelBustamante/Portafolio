import { useState } from "react";
import { navigation } from "../data/navigation.js";
import { profile } from "../data/profile.js";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-20 px-4">
      <div className="mx-auto flex max-w-5xl items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-2 backdrop-blur-md">
        <a
          href="#presentacion"
          aria-label="Ir al inicio"
          className={`flex shrink-0 items-center gap-2.5 ${focusRing}`}
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg bg-linear-to-br from-blue-500 to-violet-500 text-sm font-semibold text-white"
          >
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            {profile.name}
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-3 top-full mt-2 flex-col gap-1 rounded-2xl border border-slate-800 bg-slate-950/95 p-2 text-sm backdrop-blur-md md:static md:mt-0 md:ml-auto md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}
        >
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-white ${focusRing}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`ml-auto grid size-9 shrink-0 place-items-center rounded-lg border border-slate-800 text-slate-300 transition-colors hover:text-white md:hidden ${focusRing}`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-5"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}

import { navigation } from "../data/navigation.js";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-3xl items-center gap-6 overflow-x-auto px-6 py-4 text-sm"
      >
        {navigation.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="whitespace-nowrap text-neutral-400 transition-colors hover:text-neutral-100 focus-visible:text-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

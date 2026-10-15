import PillLink from "../components/PillLink.jsx";
import BrandIcon, { hasBrandIcon } from "../components/BrandIcon.jsx";
import CodeWindow, { kw, ty, fn, st, an } from "../components/CodeWindow.jsx";
import { profile as defaultProfile } from "../data/profile.js";

export default function Hero({ profile = defaultProfile }) {
  const { name, role, summary, availability, stack = [], links } = profile;

  const externalLinks = [
    { label: "GitHub", href: links.github, icon: "github" },
    { label: "LinkedIn", href: links.linkedin, icon: "linkedin" },
    { label: "Ver CV", href: links.cv, icon: "file" },
  ].filter((link) => link.href);

  return (
    <section
      id="presentacion"
      aria-labelledby="presentacion-title"
      className="scroll-mt-28 pb-16 pt-32 sm:pt-40"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          {availability ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span
                aria-hidden="true"
                className="size-1.5 animate-pulse rounded-full bg-emerald-400"
              />
              {availability}
            </span>
          ) : null}

          <h1
            id="presentacion-title"
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            {name}
          </h1>
          <p className="mt-2 bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
            {role}
          </p>

          {stack.length ? (
            <ul
              aria-label="Stack principal"
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300"
            >
              {stack.map((tech) => (
                <li key={tech} className="inline-flex items-center gap-1.5">
                  {hasBrandIcon(tech) ? <BrandIcon tag={tech} /> : null}
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            {summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Ver proyectos
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Contactar
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {externalLinks.map(({ label, href, icon }) => (
              <PillLink key={label} href={href} icon={icon}>
                {label}
              </PillLink>
            ))}
            {links.email ? (
              <PillLink
                href={`mailto:${links.email}`}
                icon="mail"
                external={false}
              >
                Correo
              </PillLink>
            ) : null}
          </div>
        </div>

        <CodeWindow filename="ForoService.java" className="lg:justify-self-end">
          {kw("@Service")}
          {"\n"}
          {kw("public class")} {ty("ForoService")} {"{"}
          {"\n\n"}
          {"  "}
          {kw("private final")} {ty("TemaRepository")} temaRepository;
          {"\n\n"}
          {"  "}
          {kw("public")} {fn("ForoService")}({ty("TemaRepository")} repo) {"{"}
          {"\n"}
          {"    this.temaRepository = repo;"}
          {"\n"}
          {"  }"}
          {"\n\n"}
          {"  "}
          {an("@Transactional")}
          {"\n"}
          {"  "}
          {kw("public")} {ty("TemaDTO")} {fn("crearTema")}({ty("TemaRequest")} req) {"{"}
          {"\n"}
          {"    "}
          {ty("Tema")} tema = {kw("new")} {ty("Tema")}(req);
          {"\n"}
          {"    temaRepository."}
          {fn("save")}(tema);
          {"\n"}
          {"    "}
          {kw("return")} {ty("TemaDTO")}.{fn("from")}(tema);
          {"\n"}
          {"  }"}
          {"\n"}
          {"}"}
        </CodeWindow>
      </div>
    </section>
  );
}

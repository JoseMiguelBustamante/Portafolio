export default function Hero() {
  return (
    <section
      id="presentacion"
      aria-labelledby="presentacion-title"
      className="scroll-mt-20 py-24 sm:py-32"
    >
      <p className="mb-4 text-sm text-emerald-400">Hola, soy</p>
      <h1
        id="presentacion-title"
        className="text-4xl font-semibold tracking-tight text-neutral-50 sm:text-6xl"
      >
        Jose Miguel Bustamante
      </h1>
      <p className="mt-6 max-w-xl text-lg text-neutral-400">
        Desarrollador de software. Aquí reúno los proyectos que he construido y
        las tecnologías que manejo.
      </p>
      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <a
          href="#proyectos"
          className="rounded-md bg-neutral-100 px-5 py-2.5 font-medium text-neutral-950 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="rounded-md border border-neutral-700 px-5 py-2.5 font-medium text-neutral-200 transition-colors hover:border-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          Contactarme
        </a>
      </div>
    </section>
  );
}

import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Achievements from "./Achievements.jsx";
import Contact from "./Contact.jsx";

describe.each([
  ["About", About, "Sobre mí", "sobre-mi"],
  ["Experience", Experience, "Experiencia", "experiencia"],
  ["Education", Education, "Educación", "educacion"],
  ["Projects", Projects, "Proyectos", "proyectos"],
  ["Skills", Skills, "Habilidades", "habilidades"],
  ["Achievements", Achievements, "Logros", "logros"],
  ["Contact", Contact, "Contacto", "contacto"],
])("%s", (_name, Component, title, id) => {
  it(`renders a region titled "${title}" anchored at #${id}`, () => {
    render(<Component />);

    const region = screen.getByRole("region", { name: title });
    expect(region).toHaveAttribute("id", id);
    expect(
      screen.getByRole("heading", { level: 2, name: title }),
    ).toBeInTheDocument();
  });
});

describe("Decorative bullets", () => {
  it.each([
    ["About", About],
    ["Experience", Experience],
    ["Education", Education],
    ["Projects", Projects],
    ["Skills", Skills],
    ["Achievements", Achievements],
    ["Contact", Contact],
  ])("%s shows an icon next to its section title", (_name, Component) => {
    render(<Component />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument();
  });

  it.each([
    ["Projects", Projects],
    ["Skills", Skills],
    ["Achievements", Achievements],
  ])("%s shows a bullet in every subtitle", (_name, Component) => {
    render(<Component />);

    const subtitles = screen.getAllByRole("heading", { level: 3 });
    expect(subtitles.length).toBeGreaterThan(0);
    for (const subtitle of subtitles) {
      expect(
        subtitle.querySelector('[aria-hidden="true"]'),
      ).toBeInTheDocument();
    }
  });
});

describe("About content", () => {
  const profile = {
    about: ["Primer párrafo de prueba.", "Segundo párrafo de prueba."],
    languages: ["Español", "Inglés (intermedio)"],
  };

  it("renders every paragraph", () => {
    render(<About profile={profile} />);

    expect(screen.getByText("Primer párrafo de prueba.")).toBeInTheDocument();
    expect(screen.getByText("Segundo párrafo de prueba.")).toBeInTheDocument();
  });

  it("renders the spoken languages", () => {
    render(<About profile={profile} />);

    const languages = screen.getByRole("list", { name: "Idiomas" });

    expect(
      within(languages)
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(["Español", "Inglés (intermedio)"]);
  });
});

describe("Timeline-based sections", () => {
  const items = [
    { title: "Entrada uno", organization: "Organización uno" },
    { title: "Entrada dos", organization: "Organización dos" },
  ];

  it.each([
    ["Experience", Experience],
    ["Education", Education],
  ])("%s renders the entries it receives", (_name, Component) => {
    render(<Component items={items} />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Entrada uno" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Entrada dos" }),
    ).toBeInTheDocument();
  });
});

describe("Projects content", () => {
  it("renders one card per project it receives", () => {
    render(
      <Projects
        projects={[
          { title: "Proyecto A", description: "Descripción A", tags: [] },
          { title: "Proyecto B", description: "Descripción B", tags: [] },
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", { level: 3, name: "Proyecto A" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Proyecto B" }),
    ).toBeInTheDocument();
  });
});

describe("Skills content", () => {
  const groups = [
    { name: "Lenguajes", items: ["Java", "Python"] },
    { name: "Datos", items: ["PostgreSQL"] },
  ];

  it("renders a titled list per group", () => {
    render(<Skills groups={groups} />);

    const languages = screen.getByRole("list", { name: "Lenguajes" });

    expect(
      screen.getByRole("heading", { level: 3, name: "Lenguajes" }),
    ).toBeInTheDocument();
    expect(
      within(languages)
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(["Java", "Python"]);
    expect(
      within(screen.getByRole("list", { name: "Datos" }))
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(["PostgreSQL"]);
  });
});

describe("Achievements content", () => {
  it("renders each achievement with its issuer", () => {
    render(
      <Achievements
        items={[
          { title: "Logro de prueba", issuer: "Emisor de prueba" },
          { title: "Otro logro", issuer: "Otro emisor" },
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", { level: 3, name: "Logro de prueba" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Emisor de prueba")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Otro logro" }),
    ).toBeInTheDocument();
  });
});

describe("Contact content", () => {
  const baseLinks = {
    github: "https://github.com/ada",
    linkedin: "https://linkedin.com/in/ada",
    email: null,
    cv: null,
  };

  it("renders the GitHub and LinkedIn links from the profile", () => {
    render(<Contact profile={{ links: baseLinks }} />);

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/ada",
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/ada",
    );
  });

  it("shows a decorative icon in each link without changing its name", () => {
    render(
      <Contact
        profile={{ links: { ...baseLinks, email: "ada@example.com" } }}
      />,
    );

    for (const name of ["GitHub", "LinkedIn", "Correo"]) {
      const link = screen.getByRole("link", { name });
      expect(link.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument();
    }
  });

  it("renders the email only when the profile provides it", () => {
    const { rerender } = render(<Contact profile={{ links: baseLinks }} />);

    expect(
      screen.queryByRole("link", { name: "Correo" }),
    ).not.toBeInTheDocument();

    rerender(
      <Contact profile={{ links: { ...baseLinks, email: "ada@example.com" } }} />,
    );

    expect(screen.getByRole("link", { name: "Correo" })).toHaveAttribute(
      "href",
      "mailto:ada@example.com",
    );
  });
});

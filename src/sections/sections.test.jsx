import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Achievements from "./Achievements.jsx";
import Contact from "./Contact.jsx";

describe.each([
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

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "./Hero.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Achievements from "./Achievements.jsx";
import Contact from "./Contact.jsx";

describe("Hero", () => {
  it("renders the presentation region with the name as the page heading", () => {
    render(<Hero />);

    const region = screen.getByRole("region", {
      name: "Jose Miguel Bustamante",
    });
    expect(region).toHaveAttribute("id", "presentacion");
    expect(
      screen.getByRole("heading", { level: 1, name: "Jose Miguel Bustamante" }),
    ).toBeInTheDocument();
  });
});

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

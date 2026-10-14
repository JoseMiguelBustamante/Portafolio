import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header.jsx";

describe("Header", () => {
  it("renders a navigation with one anchor link per section", () => {
    render(<Header />);

    const nav = screen.getByRole("navigation", { name: "Navegación principal" });
    const links = within(nav).getAllByRole("link");

    expect(links.map((link) => [link.textContent, link.getAttribute("href")])).toEqual([
      ["Sobre mí", "#sobre-mi"],
      ["Experiencia", "#experiencia"],
      ["Educación", "#educacion"],
      ["Proyectos", "#proyectos"],
      ["Habilidades", "#habilidades"],
      ["Logros", "#logros"],
      ["Contacto", "#contacto"],
    ]);
  });

  it("renders an initials logo that links back to the top", () => {
    render(<Header />);

    const logo = screen.getByRole("link", { name: "Ir al inicio" });

    expect(logo).toHaveAttribute("href", "#presentacion");
    expect(logo).toHaveTextContent("JM");
  });

  it("keeps the logo outside the navigation landmark", () => {
    render(<Header />);

    const nav = screen.getByRole("navigation", { name: "Navegación principal" });

    expect(
      within(nav).queryByRole("link", { name: "Ir al inicio" }),
    ).not.toBeInTheDocument();
  });
});

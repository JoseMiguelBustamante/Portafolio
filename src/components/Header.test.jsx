import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header.jsx";

describe("Header", () => {
  it("renders a navigation with one anchor link per section", () => {
    render(<Header />);

    const nav = screen.getByRole("navigation", { name: "Navegación principal" });
    const links = within(nav).getAllByRole("link");

    expect(links.map((link) => [link.textContent, link.getAttribute("href")])).toEqual([
      ["Presentación", "#presentacion"],
      ["Educación", "#educacion"],
      ["Proyectos", "#proyectos"],
      ["Habilidades", "#habilidades"],
      ["Logros", "#logros"],
      ["Contacto", "#contacto"],
    ]);
  });
});

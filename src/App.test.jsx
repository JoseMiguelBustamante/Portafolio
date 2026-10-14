import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App.jsx";

describe("App", () => {
  it("renders the navigation and the main landmark", () => {
    render(<App />);

    expect(
      screen.getByRole("navigation", { name: "Navegación principal" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders the eight sections in order inside main", () => {
    render(<App />);

    const regions = screen.getAllByRole("region");

    expect(regions.map((region) => region.id)).toEqual([
      "presentacion",
      "sobre-mi",
      "experiencia",
      "educacion",
      "proyectos",
      "habilidades",
      "logros",
      "contacto",
    ]);
  });

  it("has a single level-1 heading", () => {
    render(<App />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});

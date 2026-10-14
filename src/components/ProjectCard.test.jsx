import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectCard from "./ProjectCard.jsx";

const project = {
  title: "API de prueba",
  description: "Descripción corta del proyecto de prueba.",
  tags: ["Java", "Spring Boot"],
  repo: "https://github.com/ada/api-de-prueba",
  demo: null,
};

describe("ProjectCard", () => {
  it("renders the title and the description", () => {
    render(<ProjectCard project={project} />);

    expect(
      screen.getByRole("heading", { level: 3, name: "API de prueba" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Descripción corta del proyecto de prueba."),
    ).toBeInTheDocument();
  });

  it("renders every technology tag", () => {
    render(<ProjectCard project={project} />);

    const tags = screen.getByRole("list", { name: "Tecnologías" });

    expect(
      within(tags)
        .getAllByRole("listitem")
        .map((tag) => tag.textContent),
    ).toEqual(["Java", "Spring Boot"]);
  });

  it("renders the code link when the repository exists", () => {
    render(<ProjectCard project={project} />);

    expect(
      screen.getByRole("link", { name: "Código de API de prueba" }),
    ).toHaveAttribute("href", "https://github.com/ada/api-de-prueba");
  });

  it("does not render links that are missing", () => {
    render(<ProjectCard project={project} />);

    expect(
      screen.queryByRole("link", { name: "Demo de API de prueba" }),
    ).not.toBeInTheDocument();
  });

  it("renders the demo link when it exists", () => {
    render(
      <ProjectCard
        project={{ ...project, demo: "https://api-de-prueba.example.com" }}
      />,
    );

    expect(
      screen.getByRole("link", { name: "Demo de API de prueba" }),
    ).toHaveAttribute("href", "https://api-de-prueba.example.com");
  });

  it("renders neither links nor an empty tag list for a bare project", () => {
    render(
      <ProjectCard
        project={{ title: "Solo título", description: "Texto", tags: [] }}
      />,
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("list", { name: "Tecnologías" }),
    ).not.toBeInTheDocument();
  });
});

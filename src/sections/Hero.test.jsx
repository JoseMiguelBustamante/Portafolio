import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "./Hero.jsx";

const baseProfile = {
  name: "Ada Lovelace",
  initials: "AL",
  role: "Ingeniera de software",
  summary: "Resumen de prueba para la portada.",
  availability: "Disponible para trabajar",
  photo: null,
  links: {
    github: "https://github.com/ada",
    linkedin: null,
    email: null,
    cv: null,
  },
};

describe("Hero link icons", () => {
  it("shows a decorative icon in each external link without changing its name", () => {
    render(
      <Hero
        profile={{
          ...baseProfile,
          links: {
            github: "https://github.com/ada",
            linkedin: "https://linkedin.com/in/ada",
            email: "ada@example.com",
            cv: null,
          },
        }}
      />,
    );

    for (const name of ["GitHub", "LinkedIn", "Correo"]) {
      const link = screen.getByRole("link", { name });
      expect(link.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument();
    }
  });
});

describe("Hero", () => {
  it("renders the presentation region with the name as the page heading", () => {
    render(<Hero profile={baseProfile} />);

    const region = screen.getByRole("region", { name: "Ada Lovelace" });
    expect(region).toHaveAttribute("id", "presentacion");
    expect(
      screen.getByRole("heading", { level: 1, name: "Ada Lovelace" }),
    ).toBeInTheDocument();
  });

  it("shows the role, the summary and the availability badge", () => {
    render(<Hero profile={baseProfile} />);

    expect(screen.getByText("Ingeniera de software")).toBeInTheDocument();
    expect(
      screen.getByText("Resumen de prueba para la portada."),
    ).toBeInTheDocument();
    expect(screen.getByText("Disponible para trabajar")).toBeInTheDocument();
  });

  it("hides the availability badge when there is no availability text", () => {
    render(<Hero profile={{ ...baseProfile, availability: "" }} />);

    expect(
      screen.queryByText("Disponible para trabajar"),
    ).not.toBeInTheDocument();
  });

  it("renders the primary stack with brand labels", () => {
    render(<Hero profile={{ ...baseProfile, stack: ["Java", "Linux"] }} />);

    const stack = screen.getByRole("list", { name: "Stack principal" });
    expect(
      within(stack)
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(["Java", "Linux"]);
  });

  it("renders the project and contact calls to action and the GitHub link", () => {
    render(<Hero profile={baseProfile} />);

    expect(
      screen.getByRole("link", { name: "Ver proyectos" }),
    ).toHaveAttribute("href", "#proyectos");
    expect(screen.getByRole("link", { name: "Contactar" })).toHaveAttribute(
      "href",
      "#contacto",
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/ada",
    );
  });

  it("does not render links the user has not provided", () => {
    render(<Hero profile={baseProfile} />);

    expect(
      screen.queryByRole("link", { name: "LinkedIn" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Ver CV" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Correo" }),
    ).not.toBeInTheDocument();
  });

  it("renders optional links when they are provided", () => {
    render(
      <Hero
        profile={{
          ...baseProfile,
          links: {
            github: "https://github.com/ada",
            linkedin: "https://linkedin.com/in/ada",
            email: "ada@example.com",
            cv: "/cv.pdf",
          },
        }}
      />,
    );

    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/ada",
    );
    expect(screen.getByRole("link", { name: "Correo" })).toHaveAttribute(
      "href",
      "mailto:ada@example.com",
    );
    expect(screen.getByRole("link", { name: "Ver CV" })).toHaveAttribute(
      "href",
      "/cv.pdf",
    );
  });

  it("uses the profile data module by default", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Jose Miguel Bustamante" }),
    ).toBeInTheDocument();
  });
});

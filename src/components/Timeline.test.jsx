import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Timeline from "./Timeline.jsx";

const items = [
  {
    title: "Ingeniería de prueba",
    organization: "Universidad de prueba",
    period: "2020 - 2024",
    details: ["Primer detalle", "Segundo detalle"],
  },
  {
    title: "Curso sin fechas",
    organization: "Instituto de prueba",
  },
];

describe("Timeline", () => {
  it("renders one list item per entry", () => {
    render(<Timeline items={items} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(
      screen.getByRole("heading", { level: 3, name: "Ingeniería de prueba" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Universidad de prueba")).toBeInTheDocument();
  });

  it("renders the period and the details when present", () => {
    render(<Timeline items={items} />);

    expect(screen.getByText("2020 - 2024")).toBeInTheDocument();
    expect(screen.getByText("Primer detalle")).toBeInTheDocument();
    expect(screen.getByText("Segundo detalle")).toBeInTheDocument();
  });

  it("omits the period and the details when an entry has none", () => {
    render(<Timeline items={items} />);

    const entry = screen
      .getByRole("heading", { level: 3, name: "Curso sin fechas" })
      .closest("li");

    expect(within(entry).queryByRole("list")).not.toBeInTheDocument();
    expect(within(entry).queryByText(/\d{4}/)).not.toBeInTheDocument();
  });
});

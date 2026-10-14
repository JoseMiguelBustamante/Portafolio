import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Icon, { iconNames } from "./Icon.jsx";
import Marker from "./Marker.jsx";

describe("Icon catalog", () => {
  it.each(["github", "linkedin", "file"])("includes the %s icon", (name) => {
    expect(iconNames).toContain(name);
  });
});

describe("Icon", () => {
  it.each(iconNames)("renders a decorative svg for %s", (name) => {
    const { container } = render(<Icon name={name} />);

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("focusable", "false");
  });

  it("renders nothing for an unknown name", () => {
    const { container } = render(<Icon name="does-not-exist" />);

    expect(container).toBeEmptyDOMElement();
  });
});

describe("Marker", () => {
  it("renders a decorative bullet hidden from assistive technology", () => {
    const { container } = render(<Marker />);

    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});

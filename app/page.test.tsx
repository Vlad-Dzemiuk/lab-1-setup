import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Laboratory work #1/i }),
    ).toBeInTheDocument();
  });

  it("points the source card to the lab GitHub repo in a new tab", () => {
    render(<Home />);
    const source = screen.getByRole("link", { name: /GitHub repository/i });
    expect(source).toHaveAttribute(
      "href",
      "https://github.com/Vlad-Dzemiuk/lab-1-setup",
    );
    expect(source).toHaveAttribute("target", "_blank");
  });
});

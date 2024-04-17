import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App components", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/shopping cart/i);
  });
});

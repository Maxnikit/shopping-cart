import { describe, expect, it } from "vitest";
import { render, screen } from "../test-utils";
import App from "./App";

describe("App components", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(
      /totally not a fake store/i
    );
  });
});

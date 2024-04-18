import { describe, it, expect } from "vitest";
import { render, screen } from "../../../test-utils";

import Header from "./Header";

describe("Header", () => {
  it("renders header ", () => {
    render(<Header />);
    const header = screen.getByTestId("appHeader");
    expect(header).toBeInTheDocument();
  });
});

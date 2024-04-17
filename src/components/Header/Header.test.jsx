import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it('renders header with title "Shopping Cart"', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText(/Shopping Cart/i);
    expect(titleElement).toBeInTheDocument();
  });
});

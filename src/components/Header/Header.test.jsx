import { describe, it, expect } from "vitest";
import { render } from "../../tests";

import Header from "./Header";

describe("Header", () => {
  it('renders header with title "Totally not a fake store"', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText(/totally not a fake store/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders header with link to "/"', () => {
    const { getByRole } = render(<Header />);
    const linkElement = getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/");
  });
});

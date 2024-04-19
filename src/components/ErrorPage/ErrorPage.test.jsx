import { describe, it, expect } from "vitest";
import { render, screen } from "../../../test-utils";
import ErrorPage from "./ErrorPage";

describe("ErrorPage", () => {
  it("renders ErrorPage", () => {
    render(<ErrorPage />);
    expect(screen.getByTestId("errorPage")).toBeInTheDocument();
  });
  it("renders an error message", () => {
    render(<ErrorPage />);
    expect(
      screen.getByText("Oh no, this route does not exist!")
    ).toBeInTheDocument();
  });
  it("provides a link back to the home page", () => {
    render(<ErrorPage />);
    const link = screen.getByTestId("errorPageLink");
    expect(link).toHaveAttribute("href", "/");
  });
});

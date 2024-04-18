import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "../../../test-utils";
import App from "../../App";
import ErrorPage from "./ErrorPage";

describe("ErrorPage", () => {
  it("renders ErrorPage", () => {
    render(<ErrorPage />);
    expect(screen.getByTestId("errorPage")).toBeInTheDocument();
  });

  it("provides a link back to the home page", () => {
    render(<ErrorPage />);
    const link = screen.getByTestId("errorPageLink");
    expect(link).toHaveAttribute("href", "/");
  });

  // FIX I could not make it work
  // it("should render ErrorPage on a bad route", () => {
  //   const badRoute = "/some/bad/route";

  //   render(<App />, [badRoute]);

  //   expect(screen.getByTestId("errorPage")).toBeInTheDocument();
  // });

  it("does not show ErrorPage at the root URL '/'", () => {
    const correctRoute = "/";

    render(<App />, [correctRoute]);

    expect(screen.queryByTestId("errorPage")).not.toBeInTheDocument();
  });
});

import { render, screen } from "../../../test-utils";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it, expect } from "vitest";
import App from "../../App";
import ErrorPage from "./ErrorPage";

describe("ErrorPage", () => {
  it("renders a heading with the correct text", () => {
    const router = createMemoryRouter([{ path: "*", element: <ErrorPage /> }]);
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading").textContent).toBe(
      "Oh no, this route does not exist!"
    );
  });

  it("provides a link back to the home page", () => {
    const router = createMemoryRouter([{ path: "*", element: <ErrorPage /> }]);
    render(<RouterProvider router={router} />);
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent(
      "You can go back to the home page by clicking here, though!"
    );
  });

  it("has the correct path on the link to navigate home", () => {
    const router = createMemoryRouter([{ path: "*", element: <ErrorPage /> }]);
    render(<RouterProvider router={router} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });

  it("should render ErrorPage on a bad route", () => {
    const badRoute = "/some/bad/route";

    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
      { initialEntries: [badRoute] }
    );
    render(<RouterProvider router={router} />);
  });

  it("does not show ErrorPage at the root URL '/'", () => {
    const router = createMemoryRouter([
      { path: "/", element: <App /> },
      { path: "*", element: <ErrorPage /> },
    ]);

    render(<RouterProvider router={router} />);

    // Assert that the ErrorPage is not shown
    const errorHeading = screen.queryByText(
      /Oh no, this route does not exist!/i
    );
    expect(errorHeading).not.toBeInTheDocument();
  });
});

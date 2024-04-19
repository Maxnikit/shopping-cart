import { describe, expect, it } from "vitest";
import { waitFor } from "@testing-library/react";
import { render, screen } from "../../../test-utils";

import Shop from "./Shop";
// Todo mock api. MSW?
describe("Shop", () => {
  it("renders as default page (/)", async () => {
    render(<Shop />);
    await waitFor(() => expect(screen.getByTestId("shop")).toBeInTheDocument());
  });

  it("loads and displays product", async () => {
    render(<Shop />);

    // Test loading state
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Test success state
    await screen.findByTestId("product");
    expect(screen.getByText("Test product")).toBeInTheDocument();
  });

  it("renders product with all properties", async () => {
    render(<Shop />);

    await screen.findByText("Test product");
    expect(screen.getByText("Test product")).toBeInTheDocument();
  });
});

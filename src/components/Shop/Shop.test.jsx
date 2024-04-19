import { describe, expect, it, vi } from "vitest";
import { waitFor } from "@testing-library/react";
import { render, screen } from "../../../test-utils";

import Shop from "./Shop";

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

    await waitFor(() => {
      const productElements = screen.getAllByTestId("product");
      expect(productElements.length).toBeGreaterThan(0);
    });
  });
});

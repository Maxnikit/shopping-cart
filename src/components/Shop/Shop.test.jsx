import { describe, expect, it, vi } from "vitest";
import { act, waitFor, fireEvent } from "@testing-library/react";
import { render, screen } from "../../../test-utils";
import useShopProducts from "../../queryService";

import Shop from "./Shop";

// vi.mock("./useShopProducts", () => ({
//   __esModule: true,
//   default: vi.fn(() => ({
//     allProducts: [],
//     isLoading: false,
//     error: null,
//   })),
// }));

describe("Shop", () => {
  it("renders as default page (/)", async () => {
    render(<Shop />);
    await waitFor(() => expect(screen.getByTestId("shop")).toBeInTheDocument());
  });

  it("loads and displays product", async () => {
    // const mockData = [{ id: 1, name: "Test Product" }];
    // useShopProducts.mockReturnValue({
    //   allProducts: mockData,
    //   isLoading: false,
    //   error: null,
    // });

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

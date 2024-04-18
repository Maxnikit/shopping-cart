// import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { render, screen } from "../../../test-utils";

import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  it("renders the product name", () => {
    render(<ProductCard product={{ name: "Test Product" }} />);
    const productNameElement = screen.getByText(/Test Product/i);
    expect(productNameElement).toBeInTheDocument();
  });

  it("renders the product price", () => {
    render(<ProductCard product={{ name: "Test Product", price: 9.99 }} />);
    const productPriceElement = screen.getByText(/9.99/i);
    expect(productPriceElement).toBeInTheDocument();
  });

  it("renders the product image", () => {
    render(
      <ProductCard
        product={{
          name: "Test Product",
          imageUrl: "https://example.com/test-product.jpg",
        }}
      />
    );
    const productImageElement = screen.getByAltText(/Test Product/i);
    expect(productImageElement).toBeInTheDocument();
  });
});

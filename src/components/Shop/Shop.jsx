import { Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";
import {
  getAllCategories,
  getAllProducts,
  getInCategory,
} from "../../api/getProducts";
import { useStore } from "../../stores/productStore";

const Shop = () => {
  const { updateProducts } = useStore();
  const {
    data: allProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts(),
  });

  useEffect(() => {
    updateProducts(allProducts);
  }, [allProducts]);

  if (isLoading) {
    return (
      <Flex wrap="wrap" justify="center" align="center" gap="lg">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </Flex>
    );
  }

  // to handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <Flex
      data-testid="shop"
      wrap="wrap"
      justify="center"
      align="center"
      gap="lg"
    >
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} data-testid="product" />
      ))}
    </Flex>
  );
};

export default Shop;

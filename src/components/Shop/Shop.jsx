import { Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";
import { fetchAllProducts } from "../../api/getProducts";
import { useProductStore } from "../../stores/productStore";

const Shop = () => {
  const { categoryName } = useParams();
  const { updateProducts, getAllProducts, getProductsByCategoryName } =
    useProductStore();
  const {
    data: allProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => fetchAllProducts(),
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
  let productsToShow = [];
  if (categoryName) {
    productsToShow = getProductsByCategoryName(categoryName);
  } else {
    productsToShow = getAllProducts();
  }

  return (
    <motion.div
      key={categoryName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Flex
        data-testid="shop"
        wrap="wrap"
        justify="start"
        align="start"
        gap="lg"
      >
        {productsToShow.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            data-testid="product"
          />
        ))}
      </Flex>{" "}
    </motion.div>
  );
};

export default Shop;

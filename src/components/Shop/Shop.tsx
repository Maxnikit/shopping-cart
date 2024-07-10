import { Container, Flex, Group, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "types";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";
import { fetchAllProducts } from "../../api/getProducts";
import { useProductStore } from "../../stores/productStore";
import { NoProductsFound } from "@components/Shop/NoProductsFound";

const Shop = () => {
  const { categoryName, query } = useParams();
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
    if (allProducts) {
      updateProducts(allProducts);
    }
  }, [allProducts]);

  if (isLoading) {
    return (
      <Group gap="lg">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </Group>
    );
  }

  // to handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }
  let productsToShow: Product[] | [] = [];
  if (categoryName && categoryName !== "all") {
    productsToShow = getProductsByCategoryName(categoryName);
  } else {
    productsToShow = getAllProducts();
  }

  if (query) {
    productsToShow = productsToShow.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  if (productsToShow.length === 0) {
    return <NoProductsFound />;
  }

  return (
    <motion.div
      key={categoryName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Group wrap="wrap" justify="start" align="start" gap="lg">
        {productsToShow.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            data-testid="product"
          />
        ))}
      </Group>
    </motion.div>
  );
};

export default Shop;

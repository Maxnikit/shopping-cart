import { Group } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "types";
import { NoProductsFound } from "@components/Shop/NoProductsFound";
import { sortOptions } from "@utils/constants";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";
import { fetchAllProducts } from "../../api/getProducts";
import { useProductStore } from "../../stores/productStore";
import {
  sortByCheapest,
  sortByMostExpensive,
  sortByRating,
  sortByReviewsCount,
} from "@utils/sortingMethods";
// TODO changing sorting also changes products order in store. Find out why and how. Fix it. Products should not change their order in store
const Shop = () => {
  const searchParams = useSearchParams()[0];
  const categoryName = searchParams.get("category");
  const query = searchParams.get("search");
  const order = searchParams.get("order");

  const {
    updateProducts,
    getAllProducts,
    getProductsByCategoryName,
    removeAllProducts,
  } = useProductStore();
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
      console.log("products changed", allProducts);
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
  // Spread [...originalArray] was used here because without it after sorting it changed the original
  // products array in my store
  if (categoryName && categoryName !== "all") {
    productsToShow = [...getProductsByCategoryName(categoryName)];
  } else {
    productsToShow = [...getAllProducts()];
  }
  // console.log(1, getAllProducts());
  if (query) {
    productsToShow = productsToShow.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  // console.log(2, getAllProducts());
  if (order) {
    switch (order) {
      // First cheapest
      case sortOptions[2]:
        productsToShow = sortByCheapest(productsToShow);
        break;
      // First expensive
      case sortOptions[3]:
        productsToShow = sortByMostExpensive(productsToShow);
        break;
      // By rating
      case sortOptions[1]:
        productsToShow = sortByRating(productsToShow);
        break;
      // By the number of reviews
      case sortOptions[0]:
        productsToShow = sortByReviewsCount(productsToShow);
        break;
    }
  }

  if (!order) {
    productsToShow = sortByReviewsCount(productsToShow);
  }
  // console.log(3, getAllProducts());
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

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Flex } from "@mantine/core";
import ProductCard from "../ProductCard/ProductCard";
const MainPage = () => {
  const {
    data: allProducts,
    isLoading,
    error,
  } = useQuery({
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
    queryKey: ["allProducts"],
  });

  // Show a loading message while data is fetching
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // to handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }
  console.log(allProducts);
  return (
    <Flex wrap={"wrap"} justify="center" align="center" gap="lg">
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Flex>
  );
};

export default MainPage;

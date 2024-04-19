import { Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../getProducts";
import ProductCard from "../ProductCard/ProductCard";

const Shop = () => {
  const {
    data: allProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // to handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }
  // console.log for getting 20 products
  // console.log(allProducts);
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

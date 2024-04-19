import { Flex } from "@mantine/core";
import useShopProducts from "../../queryService";
import ProductCard from "../ProductCard/ProductCard";

const Shop = () => {
  const { allProducts, isLoading, error } = useShopProducts();

  if (isLoading) {
    return <h2>Loading...</h2>;
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

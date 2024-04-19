import { useQuery } from "@tanstack/react-query";

const useShopProducts = () => {
  const {
    data: allProducts,
    isLoading,
    error,
  } = useQuery({
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
    queryKey: ["allProducts"],
  });

  return { allProducts, isLoading, error };
};

export default useShopProducts;

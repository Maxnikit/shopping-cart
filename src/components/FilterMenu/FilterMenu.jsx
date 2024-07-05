import { useQuery } from "@tanstack/react-query";
import {
  getAllCategories,
  getAllCategoriesWithInfo,
  getInCategory,
} from "../../api/getProducts";
import { Button, Stack, Title } from "@mantine/core";
import { FilterCategory } from "../FilterCategory/FilterCategory";

export function FilterMenu() {
  const {
    data: allCategoriesWithInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allCategoriesWithInfo"],
    queryFn: () => getAllCategoriesWithInfo(),
  });

  if (isLoading) {
    return <>Getting categories PLACEHOLDER</>;
  }

  // to handle error
  if (error) {
    return <div className="error">Error: cant get all categories</div>;
  }

  return (
    <Stack>
      <Title>Categories</Title>
      <Stack>
        {allCategoriesWithInfo.map(({ category, products }) => (
          <FilterCategory
            key={category}
            category={category}
            count={products.length}
          />
        ))}
      </Stack>
    </Stack>
  );
}

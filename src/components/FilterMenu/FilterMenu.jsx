import { useQuery } from "@tanstack/react-query";
import {
  getAllCategories,
  getAllCategoriesWithInfo,
  getAllProducts,
  getInCategory,
} from "../../api/getProducts";
import { Button, Stack, Title, Radio, Autocomplete } from "@mantine/core";
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
      <Autocomplete label="Search" />
      <Title>Categories</Title>
      <Radio.Group name="category" label="Select category">
        <Stack>
          <FilterCategory category="All" products={getAllProducts()} />
          {allCategoriesWithInfo.map(({ category, products }) => (
            <FilterCategory
              key={category}
              category={category}
              products={products}
            />
          ))}
        </Stack>
      </Radio.Group>
    </Stack>
  );
}

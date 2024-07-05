import { useQuery } from "@tanstack/react-query";
import {
  getAllCategories,
  getAllCategoriesWithInfo,
  getAllProducts,
  getInCategory,
} from "../../api/getProducts";
import { Button, Stack, Title, Radio, Autocomplete } from "@mantine/core";
import { FilterCategory } from "../FilterCategory/FilterCategory";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function FilterMenu({ categoryName }) {
  console.log(categoryName);
  const navigate = useNavigate();
  const [value, setValue] = useState(categoryName);
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

  function changeCategory(category) {
    if (category === "All") {
      navigate("/");
      setValue(category);
      return;
    }
    setValue(category);
    navigate(`/category/${category}`);
  }

  return (
    <Stack>
      <Autocomplete label="Search" />
      <Title>Categories</Title>
      <Radio.Group
        value={value}
        onChange={changeCategory}
        name="category"
        label="Select category"
      >
        <Stack>
          {/* TODO consider dropping allProducts in context or MobX to use value of all products here in products for proper count */}
          <FilterCategory category="All" products={[1, 2, 3]} />
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

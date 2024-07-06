import { useQuery } from "@tanstack/react-query";
import { Button, Stack, Title, Radio, Autocomplete } from "@mantine/core";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FilterCategory } from "../FilterCategory/FilterCategory";
import {
  // getAllCategories,
  getAllCategoriesWithInfo,
  getAllProducts,
  getInCategory,
} from "../../api/getProducts";
import { useStore } from "../../stores/productStore";

export function FilterMenu({ categoryName }) {
  const { getAllCategories } = useStore();
  console.log(getAllCategories());
  const categories = getAllCategories();
  // console.log(categoryName);
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
          {categories.map(({ categoryName, productCount }) => (
            <FilterCategory
              key={categoryName}
              categoryName={categoryName}
              productCount={productCount}
            />
          ))}
        </Stack>
      </Radio.Group>
    </Stack>
  );
}

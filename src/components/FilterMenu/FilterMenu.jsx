import { Stack, Title, Radio, Autocomplete } from "@mantine/core";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FilterCategory } from "../FilterCategory/FilterCategory";
import { useStore } from "../../stores/productStore";

export function FilterMenu() {
  const { getAllCategories } = useStore();
  const categories = getAllCategories();
  const { categoryName } = useParams();
  console.log(categoryName);
  const navigate = useNavigate();
  const [value, setValue] = useState(categoryName);
  if (value === undefined) {
    setValue("All");
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

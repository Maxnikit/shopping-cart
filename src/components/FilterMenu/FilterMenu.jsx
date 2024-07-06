import { Stack, Title, Radio, Autocomplete } from "@mantine/core";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FilterCategory } from "../FilterCategory/FilterCategory";
import { useStore } from "../../stores/productStore";
import { SearchBar } from "../SearchBar/SearchBar";

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
    <Stack miw="15%">
      {/* <Title order={2}>Filters</Title> */}
      <Radio.Group
        value={value}
        onChange={changeCategory}
        name="category"
        label="Select category"
      >
        <Stack mt={10}>
          {categories.map(({ categoryName, productCount }) => (
            <FilterCategory
              key={categoryName}
              categoryName={categoryName}
              productCount={productCount}
            />
          ))}
        </Stack>
      </Radio.Group>
      <SearchBar />
    </Stack>
  );
}

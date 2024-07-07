import { Stack, Radio, Paper } from "@mantine/core";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FilterCategory } from "../FilterCategory/FilterCategory";
import { useProductStore } from "../../stores/productStore";
import { SearchBar } from "../SearchBar/SearchBar";

export function FilterMenu({ fixed }) {
  const { getAllCategories } = useProductStore();
  const categories = getAllCategories();
  const { categoryName } = useParams();

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
  console.log(fixed);
  // TODO deal with fixed position for filter menu on desktop. Current variant is not working
  return (
    <Paper miw={300} pos={fixed ? "fixed" : "block"}>
      <Stack>
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
    </Paper>
  );
}

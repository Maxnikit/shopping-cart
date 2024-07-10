import { Stack, Radio, Paper, Chip } from "@mantine/core";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IconX } from "@tabler/icons-react";
import { FilterCategory } from "../FilterCategory/FilterCategory";
import { useProductStore } from "../../stores/productStore";
import { SearchBar } from "../SearchBar/SearchBar";

export function FilterMenu({ sticky }: { sticky: boolean }) {
  const { getAllCategories } = useProductStore();
  const categories = getAllCategories();
  const { categoryName, query } = useParams();

  const navigate = useNavigate();
  const [value, setValue] = useState(categoryName);
  if (value === undefined) {
    setValue("all");
  }
  function changeCategory(category: string) {
    let url = "";
    if (category) {
      url = `/shop/category/${category}`;
      setValue(category);
    }
    if (query) {
      url += `/search/${query}`;
    }
    navigate(url);
  }
  return (
    <Paper miw={300} pos={sticky ? "sticky" : "static"} top={sticky ? 80 : 0}>
      <Stack>
        <Radio.Group
          value={value}
          onChange={changeCategory}
          name="category"
          label="Select category"
        >
          <Stack mt={10}>
            {categories.map(({ categoryName: catName, productCount }) => (
              <FilterCategory
                key={catName}
                categoryName={catName}
                productCount={productCount}
              />
            ))}
          </Stack>
        </Radio.Group>
        <SearchBar />
        {query ? (
          <Chip
            onClick={() => navigate(`/shop/category/${value}`)}
            defaultChecked
            variant="filled"
            c="grape"
            icon={<IconX />}
          >
            {query}
          </Chip>
        ) : null}
      </Stack>
    </Paper>
  );
}

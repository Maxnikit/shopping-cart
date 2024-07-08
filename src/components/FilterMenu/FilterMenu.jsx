import { Stack, Radio, Paper, Button, Chip } from "@mantine/core";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FilterCategory } from "../FilterCategory/FilterCategory";
import { useProductStore } from "../../stores/productStore";
import { SearchBar } from "../SearchBar/SearchBar";
import { IconX } from "@tabler/icons-react";

export function FilterMenu({ sticky }) {
  const { getAllCategories } = useProductStore();
  const categories = getAllCategories();
  const { categoryName, query } = useParams();

  const navigate = useNavigate();
  const [value, setValue] = useState(categoryName);
  if (value === undefined) {
    setValue("all");
  }
  function changeCategory(category) {
    let url;
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

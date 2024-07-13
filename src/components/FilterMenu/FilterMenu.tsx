import { Stack, Radio, Paper, Chip } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { IconX } from "@tabler/icons-react";
import { isMobile } from "@utils/isMobile";
import { OrderSelect } from "@components/OrderSelect/OrderSelect";
import { FilterCategory } from "../FilterCategory/FilterCategory";
import { useProductStore } from "../../stores/productStore";
import { SearchBar } from "../SearchBar/SearchBar";

export function FilterMenu({ sticky }: { sticky: boolean }) {
  const { getAllCategories } = useProductStore();
  const categories = getAllCategories();
  const searchParams = useSearchParams()[0];
  const navigate = useNavigate();
  const [value, setValue] = useState(searchParams.get("category"));

  useEffect(() => {
    if (searchParams.get("category") === null) {
      setValue("all");
    }
  }, [searchParams]);

  function changeCategory(category: string) {
    if (category) {
      searchParams.set("category", category);
      setValue(category);
    }

    navigate({ pathname: "/shop", search: searchParams.toString() });
  }
  const query = searchParams.get("search");

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
        {!isMobile() ? <OrderSelect /> : null}
      </Stack>
    </Paper>
  );
}

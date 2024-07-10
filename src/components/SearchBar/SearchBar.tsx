import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useProductStore } from "@stores/productStore";
import AutocompleteExtended from "@components/AutocompleteExtended/AutocompleteExtended";
import { SearchQuery } from "types";

export function SearchBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [dropdownOpened, { close, open }] = useDisclosure();
  const { getArrayOfProductNames, getProductByName } = useProductStore();
  const productNames = getArrayOfProductNames();
  let { categoryName } = useParams();

  if (categoryName === undefined) {
    categoryName = "all";
  }
  function onOptionSelect(query: SearchQuery) {
    const product = getProductByName(query);
    if (!product) {
      return;
    }
    navigate(`/product/${product.id}`);
  }

  function onOptionSubmit(query: SearchQuery) {
    if (!query) {
      return;
    }
    navigate(`/shop/category/${categoryName}/search/${query}`);
    close();
    setValue("");
  }
  return (
    <AutocompleteExtended
      placeholder="Cotton Jacket"
      rightSection={
        <IconSearch
          cursor="pointer"
          onClick={() => onOptionSubmit(value)}
          stroke={1}
        />
      }
      limit={5}
      label="Search"
      data={productNames}
      value={value}
      onChange={setValue}
      onOptionSubmit={onOptionSelect}
      customOnNovelOptionSubmit={onOptionSubmit}
      onClick={() => open()}
      onBlur={() => close()}
      dropdownOpened={dropdownOpened}
    />
  );
}

import { Autocomplete } from "@mantine/core";
import { useState } from "react";
import { useProductStore } from "../../stores/productStore";
import AutocompleteExtended from "../AutocompleteExtended/AutocompleteExtended";
import { useNavigate, useParams } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";

export function SearchBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { getArrayOfProductNames, getProductByName } = useProductStore();
  const productNames = getArrayOfProductNames();
  let { categoryName } = useParams();

  if (categoryName === undefined) {
    categoryName = "all";
  }
  function onOptionSelect(query) {
    const product = getProductByName(query);
    navigate(`/product/${product.id}`);
  }

  function onOptionSubmit(query) {
    navigate(`category/${categoryName}/search/${query}`);
  }
  return (
    <AutocompleteExtended
      placeholder="Cotton Jacket"
      rightSection={<IconSearch stroke={1} />}
      limit={5}
      label="Search"
      data={productNames}
      value={value}
      onChange={setValue}
      onOptionSubmit={onOptionSelect}
      onNovelOptionSubmit={onOptionSubmit}
    />
  );
}

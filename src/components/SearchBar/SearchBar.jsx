import { Autocomplete } from "@mantine/core";
import { useState } from "react";
import { useProductStore } from "../../stores/productStore";
import AutocompleteExtended from "../AutocompleteExtended/AutocompleteExtended";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { getArrayOfProductNames, getProductByName } = useProductStore();
  const productNames = getArrayOfProductNames();

  function onOptionSelect(query) {
    const product = getProductByName(query);
    navigate(`/product/${product.id}`);
  }

  function onOptionSubmit(query) {
    navigate(`/search/${query}`);
  }
  return (
    <AutocompleteExtended
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

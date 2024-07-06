import { Autocomplete } from "@mantine/core";
import { useProductStore } from "../../stores/productStore";

export function SearchBar() {
  const { getArrayOfProductNames } = useProductStore();
  const productNames = getArrayOfProductNames();
  return <Autocomplete limit={5} label="Search" data={productNames} />;
}

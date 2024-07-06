import { Autocomplete } from "@mantine/core";
import { useStore } from "../../stores/productStore";

export function SearchBar() {
  const { getArrayOfProductNames } = useStore();
  const productNames = getArrayOfProductNames();
  return <Autocomplete limit={5} label="Search" data={productNames} />;
}

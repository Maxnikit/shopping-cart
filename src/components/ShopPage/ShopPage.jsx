import { Flex } from "@mantine/core";
import { useParams } from "react-router-dom";
import { FilterMenu } from "../FilterMenu/FilterMenu";
import Shop from "../Shop/Shop";

export function ShopPage() {
  const { categoryName } = useParams();

  return (
    <Flex align="start">
      <FilterMenu categoryName={categoryName} />
      <Shop category={categoryName} />
    </Flex>
  );
}

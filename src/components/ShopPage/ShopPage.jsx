import { Flex } from "@mantine/core";
import { useParams } from "react-router-dom";
import { FilterMenu } from "../FilterMenu/FilterMenu";
import Shop from "../Shop/Shop";

export function ShopPage() {
  return (
    <Flex align="start" justify={"start"} gap={"lg"}>
      <FilterMenu />
      <Shop />
    </Flex>
  );
}

import { Container, Flex, Group } from "@mantine/core";
import { FilterMenu } from "../FilterMenu/FilterMenu";
import Shop from "../Shop/Shop";

export function ShopPage() {
  return (
    <Flex align="start">
      <FilterMenu />
      <Shop />
    </Flex>
  );
}

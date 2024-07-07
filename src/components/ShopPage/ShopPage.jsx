import { Drawer, Flex, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FilterMenu } from "../FilterMenu/FilterMenu";
import Shop from "../Shop/Shop";
import { MobileFilterBar } from "../MobileFilterBar/MobileFilterBar";
import { isMobile } from "../../utils/isMobile";

export function ShopPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex align="start" justify="start" gap="lg">
      {!isMobile() ? (
        <FilterMenu />
      ) : (
        <Drawer opened={opened} onClose={close} title="Filter Drawer">
          <FilterMenu />
        </Drawer>
      )}
      <Stack>
        {isMobile() ? <MobileFilterBar openDrawer={open} /> : undefined}
        <Shop />
      </Stack>
    </Flex>
  );
}

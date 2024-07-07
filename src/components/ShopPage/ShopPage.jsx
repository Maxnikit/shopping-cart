import { Drawer, Flex, Stack, Title } from "@mantine/core";
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
        <FilterMenu sticky />
      ) : (
        <Drawer
          opened={opened}
          onClose={close}
          title={<Title order={3}>Filters</Title>}
        >
          <FilterMenu />
        </Drawer>
      )}
      <Stack w="100%">
        {isMobile() ? <MobileFilterBar openDrawer={open} /> : undefined}
        <Shop />
      </Stack>
    </Flex>
  );
}

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
      {isMobile() ? (
        // TODO MAKE TITLE BIGGER
        <Drawer opened={opened} onClose={close} title="Filters">
          <FilterMenu sticky={false} />
        </Drawer>
      ) : (
        <FilterMenu sticky />
      )}
      <Stack w="100%">
        {isMobile() ? <MobileFilterBar openDrawer={open} /> : undefined}
        <Shop />
      </Stack>
    </Flex>
  );
}

import { OrderSelect } from "@components/OrderSelect/OrderSelect";
import { Button, Group, Select } from "@mantine/core";
import { useState } from "react";

export function MobileFilterBar({ openDrawer }: { openDrawer: () => void }) {
  return (
    <Group justify="space-between">
      <Button onClick={openDrawer}>Filters</Button>
      <OrderSelect />
    </Group>
  );
}

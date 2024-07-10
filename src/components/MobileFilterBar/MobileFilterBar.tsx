import { Button } from "@mantine/core";

export function MobileFilterBar({ openDrawer }: { openDrawer: () => void }) {
  return <Button onClick={openDrawer}>Filters</Button>;
}

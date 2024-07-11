import { Button, Group, Select } from "@mantine/core";
import { useState } from "react";

const sortOptions: [string, ...string[]] = [
  "Fisrt cheapest",
  "First expensive",
  "By rating",
  "By the number of reviews",
];
export function MobileFilterBar({ openDrawer }: { openDrawer: () => void }) {
  const [value, setValue] = useState<string | null>(sortOptions[0]);

  return (
    <Group justify="space-between">
      <Button onClick={openDrawer}>Filters</Button>
      <Select value={value} onChange={setValue} data={sortOptions} />
    </Group>
  );
}

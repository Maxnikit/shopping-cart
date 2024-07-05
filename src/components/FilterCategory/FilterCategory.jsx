import { Button } from "@mantine/core";

export function FilterCategory({ category, count }) {
  console.log(category);
  return (
    <Button>
      {category} ({count})
    </Button>
  );
}

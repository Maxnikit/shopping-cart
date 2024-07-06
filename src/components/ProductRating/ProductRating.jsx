import { Group, Text } from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";

export function ProductRating({ rating }) {
  console.log(rating);
  return (
    <Group gap={5}>
      <Group gap={0}>
        <IconStarFilled color="gold" />
        <Text>{rating.rate}</Text>
      </Group>
      <Text c="dimmed">| {rating.count} reviews</Text>
    </Group>
  );
}

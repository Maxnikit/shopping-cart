import { Group, Text } from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import { Rating } from "types";

export function ProductRating({ rating }: { rating: Rating }) {
  return (
    <Group gap={4}>
      <Group gap={0}>
        <IconStarFilled color="gold" />
        <Text>{rating.rate}</Text>
      </Group>
      <Text c="dimmed" size="sm">
        | {rating.count} reviews
      </Text>
    </Group>
  );
}

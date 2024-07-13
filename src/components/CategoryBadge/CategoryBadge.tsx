import { Badge } from "@mantine/core";
import { Link } from "react-router-dom";

export function CategoryBadge({ category }: { category: string }) {
  const searchQuery = `?category=${category}`;
  return (
    <Badge
      style={{ cursor: "pointer" }}
      component={Link}
      to={{ pathname: "/shop", search: searchQuery }}
    >
      {category}
    </Badge>
  );
}

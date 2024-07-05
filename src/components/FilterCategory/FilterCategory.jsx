import { Button, Radio } from "@mantine/core";
import { Link } from "react-router-dom";

export function FilterCategory({ category, products }) {
  return (
    <Radio
      value={category}
      label={`${category} (${products.length})`}
      component={Link}
      to={`/category/${category}`}
    />
  );
}

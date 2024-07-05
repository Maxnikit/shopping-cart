import { Button, Radio, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export function FilterCategory({ category, products }) {
  const labelText = `${category.charAt(0).toUpperCase() + category.slice(1)}`;
  const itemCount = () => {
    return <Text fs="italic">products.length</Text>;
  };

  return (
    <Radio
      value={category}
      label={
        <Text fz="sm">
          {labelText}{" "}
          <Text fz="inherit" span fs="italic" c="dimmed">
            {products.length}
          </Text>
        </Text>
      }
    />
  );
}

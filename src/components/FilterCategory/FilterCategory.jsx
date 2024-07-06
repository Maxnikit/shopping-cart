import { Button, Radio, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export function FilterCategory({ categoryName, productCount }) {
  const labelText = `${
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
  }`;
  const itemCount = () => {
    return <Text fs="italic">products.length</Text>;
  };

  return (
    <Radio
      value={categoryName}
      label={
        <Text fz="sm">
          {labelText}{" "}
          <Text fz="inherit" span fs="italic" c="dimmed">
            {productCount}
          </Text>
        </Text>
      }
    />
  );
}

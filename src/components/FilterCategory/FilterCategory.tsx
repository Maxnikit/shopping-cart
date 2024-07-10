import { Radio, Text } from "@mantine/core";

export function FilterCategory({
  categoryName,
  productCount,
}: {
  categoryName: string;
  productCount: number;
}) {
  const labelText = `${
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
  }`;

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

import { Flex, Title, Container, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export function NoProductsFound() {
  return (
    <Flex direction="column" gap={20} align="center">
      <Title ta="center" order={3}>
        No products found with current filters
      </Title>
      <Button component={Link} to="/shop">
        Clean filters
      </Button>
    </Flex>
  );
}

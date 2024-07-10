import {
  Flex,
  Title,
  Container,
  Button,
  Text,
  Card,
  Stack,
} from "@mantine/core";
import { IconMoodSad } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function NoProductsFound() {
  return (
    <Card withBorder maw={500} p="lg" m="auto" ta="center">
      <Stack align="center">
        <Title>No Products Found</Title>
        <IconMoodSad width="100%" height={200} color="#AE3EC9" />
        <Text>
          Please try adjusting your filters or visit our main page to browse our
          full range of products.
        </Text>
        <Button size="md" component={Link} to="/shop">
          Shop page
        </Button>
      </Stack>
    </Card>
  );
}

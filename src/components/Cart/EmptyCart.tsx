import { Button, Card, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Card withBorder maw={500} p="lg" m="auto" ta="center">
      <Stack align="center">
        <Title order={3}>Looks like your cart is empty!</Title>
        <Text>Why not look at what we have at shop page?</Text>
        <Button size="md" component={Link} to="/shop">
          Shop page
        </Button>
      </Stack>
    </Card>
  );
};

export default EmptyCart;

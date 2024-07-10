import { Text, Title, Card, Button, Stack } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconCheck } from "@tabler/icons-react";

const Checkout = () => {
  return (
    <Card withBorder maw={500} p="lg" m="auto" ta="center">
      <Stack align="center">
        <Title>Thanks for your order!</Title>
        <IconCheck width="100%" height={200} color="#AE3EC9" />
        <Text>
          Your items will come soon. Meanwhile, you can look at what else we
          have at the shop page!
        </Text>
        <Button size="md" component={Link} to="/shop">
          Shop page
        </Button>
      </Stack>
    </Card>
  );
};
export default Checkout;

import { Text, Title, Card } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconCheck } from "@tabler/icons-react";

const Checkout = () => {
  return (
    <Card withBorder maw={500} m="auto" align="center">
      <Title>Thanks for your order!</Title>
      <IconCheck width="100%" height={200} color="#AE3EC9" />
      <Text>
        Your items will come soon. Meanwhile, you can look what else we have{" "}
        <Link to="/">here!</Link>
      </Text>
    </Card>
  );
};
export default Checkout;

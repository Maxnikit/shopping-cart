import { Stack, Text, Title } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
const EmptyCart = () => {
  return (
    <>
      <Stack align="center">
        <Title>Looks like your cart is empty!</Title>
        <Text>
          Why not look what we have <Link to="/">here?</Link>
        </Text>
      </Stack>
    </>
  );
};

export default EmptyCart;

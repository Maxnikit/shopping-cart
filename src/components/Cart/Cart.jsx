import {
  Button,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/cartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    incrementItemCount,
    decrementItemCount,
    getTotalItemCount,
    getTotalItemPrice,
  } = useCart();

  const goToCheckout = () => {
    navigate("/checkout");
    clearCart();
  };
  const getFormattedTotalCount = () => {
    const itemCount = getTotalItemCount();
    if (itemCount === 1) {
      return `${itemCount} item`;
    } else {
      return `${itemCount} items`;
    }
  };

  const emptyCartMessage = () => {
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
  const defaultCart = () => {
    return (
      <Group justify="center" align="start">
        <Stack gap={20} miw={1000}>
          {/* Temporary clean button */}
          <Button onClick={clearCart}>Clear</Button>
          {cartItems.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </Stack>

        <Paper
          shadow="sm"
          radius="md"
          p="md"
          miw={300}
          style={{ position: "sticky", top: "60px" }}
        >
          <Stack align="space-between">
            <Text c="dimmed">{getFormattedTotalCount()}</Text>
            <Group justify="space-between">
              <Title order={3}>Total: </Title>
              <Title order={3}>${getTotalItemPrice().toFixed(2)}</Title>
            </Group>
            <Button
              onClick={() => {
                goToCheckout();
              }}
              fullWidth
            >
              Buy
            </Button>
          </Stack>
        </Paper>
      </Group>
    );
  };
  console.log(cartItems);
  return <>{cartItems.length ? defaultCart() : emptyCartMessage()}</>;
};
export default Cart;

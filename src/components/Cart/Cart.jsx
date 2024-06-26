import {
  Button,
  Flex,
  Group,
  Image,
  List,
  Paper,
  Stack,
  Text,
  Title,
  Divider,
} from "@mantine/core";

import { Link } from "react-router-dom";
import { useCart } from "../../hooks/cartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
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
  console.log(cartItems);

  const getFormattedTotalCount = () => {
    const itemCount = getTotalItemCount();
    if (itemCount === 1) {
      return `${itemCount} item`;
    } else {
      return `${itemCount} items`;
    }
  };
  const productList = () => {
    return (
      <Stack gap={20} miw={1000}>
        {/* Temporary clean button */}
        <Button onClick={clearCart}>Clear</Button>
        {cartItems.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </Stack>
    );
  };
  return (
    <>
      <Group justify="center" align="start">
        {productList()}
        <Paper
          shadow="sm"
          radius="md"
          p="md"
          miw={300}
          style={{ position: "sticky", top: "60px" }}
        >
          <Stack align="space-between">
            <Text c={"dimmed"}>{getFormattedTotalCount()}</Text>
            <Group justify="space-between">
              <Title order={3}>Total: </Title>
              <Title order={3}>${getTotalItemPrice().toFixed(2)}</Title>
            </Group>
            <Link to="/checkout">
              <Button fullWidth>Buy</Button>
            </Link>
          </Stack>
        </Paper>
      </Group>
    </>
  );
};
export default Cart;

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
  } = useCart();
  console.log(cartItems);
  const productList = () => {
    return (
      <Group>
        <Button onClick={clearCart}>Clear</Button>
        <Stack gap={20}>
          {cartItems.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </Stack>
        <Paper shadow="sm" radius="md" p="md">
          <Title>Cart</Title>
        </Paper>
      </Group>
    );
  };
  return <div>{productList()}</div>;
};
export default Cart;

import { Button, Group, Paper, Stack, Text, Title } from "@mantine/core";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "./EmptyCart";
import style from "./Cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, getTotalItemCount, getTotalItemPrice } =
    useCart();

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

  const defaultCart = () => {
    return (
      <div className={style.cart}>
        <Stack>
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

          // style={{ position: "sticky", top: "60px" }}
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
      </div>
    );
  };
  return <>{cartItems.length ? defaultCart() : <EmptyCart />}</>;
};
export default Cart;

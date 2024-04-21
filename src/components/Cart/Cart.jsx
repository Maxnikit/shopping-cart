import { Button, List } from "@mantine/core";
import { useCart } from "../../hooks/cartContext";

const Cart = () => {
  const { cartItems, clearCart } = useCart();

  const itemList = () => {
    return (
      <>
        <Button onClick={clearCart}>Clear</Button>
        <List>
          {cartItems.map((item) => (
            <List.Item key={item.id}>
              {item.title} - {item.count}
            </List.Item>
          ))}
        </List>
      </>
    );
  };
  return <div>{itemList()}</div>;
};
export default Cart;

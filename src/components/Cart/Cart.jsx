import { List } from "@mantine/core";
import useShoppingCart from "../../hooks/useShoppingCart";

const Cart = () => {
  const { cartItems } = useShoppingCart();

  const itemList = () => {
    return (
      <List>
        {cartItems.map((item) => (
          <List.Item key={item.id}>
            {item.title} - {item.count}
          </List.Item>
        ))}
      </List>
    );
  };
  return <div>{itemList()}</div>;
};
export default Cart;

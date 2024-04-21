import { List } from "@mantine/core";

import { useCart } from "../../hooks/cartContext";
const Cart = () => {
  const { cartItems } = useCart();

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

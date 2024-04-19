import { List } from "@mantine/core";
import useShoppingCart from "../../hooks/userShoppingCart";

const Cart = () => {
  const { cartItems } = useShoppingCart();

  const itemList = () => {
    return (
      <List>
        {cartItems.map((item) => (
          <List.Item>
            {item.title} - {item.count}
          </List.Item>
        ))}
      </List>
    );
  };
  return <div>{itemList()}</div>;
};
export default Cart;

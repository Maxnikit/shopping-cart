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
  Card,
  Radio,
  Fieldset,
  TextInput,
  NumberInput,
} from "@mantine/core";
import { useCart } from "../../hooks/cartContext";
import { Link } from "react-router-dom";
import style from "./Checkout.module.css";
const Checkout = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    incrementItemCount,
    decrementItemCount,
    getTotalItemPrice,
  } = useCart();

  return (
    <Card withBorder maw={500} m="auto" align="center">
      <Title>Thanks for your order!</Title>
      <Text>
        Your items will come soon. Meanwhile, you can look what else we have{" "}
        <Link to="/">here!</Link>
      </Text>
    </Card>
  );
};
export default Checkout;

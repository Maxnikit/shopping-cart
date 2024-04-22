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
  Badge,
} from "@mantine/core";
import { useCart } from "../../hooks/cartContext";
import { useNavigate } from "react-router-dom";
import styles from "./CartItem.module.css";
const CartItem = ({ product }) => {
  //
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    incrementItemCount,
    decrementItemCount,
  } = useCart();
  const handleIncrement = () => {
    incrementItemCount(product.id);
  };

  const handleDecrement = () => {
    if (product.count > 1) {
      decrementItemCount(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const navigate = useNavigate();
  const goToProductPage = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <Paper shadow="sm" radius="md" p="md" h="150">
      <Group>
        <Image
          h={100}
          miw={100}
          fit="contain"
          src={product.image}
          onClick={() => goToProductPage(product.id)}
          className={styles.productImage}
        />
        <Stack style={{ flexGrow: 1 }}>
          <Title
            order={4}
            className={styles.productName}
            onClick={() => goToProductPage(product.id)}
          >
            {product.title}
          </Title>
          <Badge>{product.category}</Badge>
        </Stack>
        <Button.Group>
          <Button variant="light" color="red" onClick={() => handleDecrement()}>
            -
          </Button>

          <Button radius="md" variant="light">
            <Text size="lg">
              {product.count}{" "}
              <Text component="span" size="sm">
                {" "}
                in cart
              </Text>
            </Text>
          </Button>
          <Button
            color="green"
            variant="light"
            onClick={() => handleIncrement()}
          >
            +
          </Button>
        </Button.Group>
        <Stack>
          <Text>{product.price}</Text>
          <Button onClick={() => handleRemove()}>c</Button>
        </Stack>
      </Group>
    </Paper>
  );
};

export default CartItem;

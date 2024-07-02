import {
  Button,
  Flex,
  Box,
  Group,
  Image,
  List,
  Paper,
  Stack,
  Text,
  Title,
  Badge,
  ActionIcon,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../hooks/cartContext";
import classes from "./CartItem.module.css";

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

  const getItemPrice = () => {
    return (product.price * product.count).toFixed(2);
  };
  return (
    <Paper shadow="sm" radius="md" p="md">
      <Group>
        <Image
          fit="contain"
          src={product.image}
          onClick={() => goToProductPage(product.id)}
          className={classes.productImage}
        />
        <Stack style={{ flexGrow: 1 }}>
          <Title
            order={4}
            className={classes.productName}
            onClick={() => goToProductPage(product.id)}
          >
            {product.title}
          </Title>
          <Badge>{product.category}</Badge>
        </Stack>
        <Box className={classes.buttonsAndPriceContainer}>
          <Button.Group>
            <Button
              variant="light"
              color="red"
              onClick={() => handleDecrement()}
            >
              -
            </Button>

            <Button radius="md" variant="light">
              <Text size="lg">{product.count} </Text>
            </Button>
            <Button
              color="green"
              variant="light"
              onClick={() => handleIncrement()}
            >
              +
            </Button>
          </Button.Group>
          <Box className={classes.priceAndTrashContainer}>
            <Text>${getItemPrice()}</Text>
            <ActionIcon variant="subtle" m={0} onClick={() => handleRemove()}>
              <FontAwesomeIcon icon={faTrashCan} />
            </ActionIcon>
          </Box>
        </Box>
      </Group>
    </Paper>
  );
};

export default CartItem;

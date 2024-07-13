import {
  Button,
  Flex,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Badge,
  ActionIcon,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CartProduct } from "@customTypes/index";
import { useCartStore } from "../../stores/cartStore";
import classes from "./CartItem.module.css";
import { CategoryBadge } from "@components/CategoryBadge/CategoryBadge";

const CartItem = ({ product }: { product: CartProduct }) => {
  //
  const {
    removeFromCart,

    incrementItemCount,
    decrementItemCount,
  } = useCartStore();
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

  const getItemPrice = () => {
    return (product.price * product.count).toFixed(2);
  };
  return (
    <Paper shadow="sm" radius="md" p="md">
      <Flex direction={{ base: "column", xs: "row" }} gap={10}>
        <Group flex={1} wrap="nowrap">
          <Link to={`/product/${product.id}`}>
            <Image src={product.image} className={classes.productImage} />
          </Link>
          <Stack>
            <Text
              component={Link}
              to={`/product/${product.id}`}
              className={classes.productName}
            >
              {product.title}
            </Text>
            <CategoryBadge category={product.category} />
          </Stack>
        </Group>

        <Flex direction={{ base: "row", xs: "column" }}>
          <Button.Group flex={1}>
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
          <Flex direction={{ base: "row" }} gap={10} align="center">
            <Text flex={1} fw={600}>
              ${getItemPrice()}
            </Text>
            <ActionIcon variant="subtle" m={0} onClick={() => handleRemove()}>
              <FontAwesomeIcon icon={faTrashCan} />
            </ActionIcon>
          </Flex>
        </Flex>
      </Flex>
    </Paper>
  );
};

export default CartItem;

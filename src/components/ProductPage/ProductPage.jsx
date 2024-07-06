import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Image,
  Text,
  Button,
  Group,
  Rating,
  Title,
  Stack,
  Badge,
  Paper,
} from "@mantine/core";
import ProductPageSkeleton from "./ProductPageSkeleton";
import { useCartStore } from "../../stores/cartStore";
import { getProductById } from "../../api/getProducts";
import { ProductRating } from "../ProductRating/ProductRating";

const ProductPage = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) {
    return <ProductPageSkeleton />;
  }

  if (error) {
    return <div>Error: Failed to fetch product</div>;
  }

  return <ProductPageComponent product={product} />;
};

const ProductPageComponent = ({ product }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    incrementItemCount,
    decrementItemCount,
  } = useCartStore();

  const isProductInCart = cartItems.some((item) => item.id === product.id);

  const buyButton = () => {
    if (isProductInCart) {
      return (
        <Button.Group>
          <Button color="red" onClick={() => handleDecrement()}>
            -
          </Button>

          <Button component={Link} to="/cart" radius="md">
            <Text size="lg">{count} </Text>
          </Button>
          <Button color="green" onClick={() => handleIncrement()}>
            +
          </Button>
        </Button.Group>
      );
    }
    return (
      <Button radius="md" onClick={() => handleAddToCart()}>
        <Text>Add to Cart</Text>
      </Button>
    );
  };
  const handleIncrement = () => {
    incrementItemCount(product.id);
  };

  const handleDecrement = () => {
    if (count === 1) {
      removeFromCart(product.id);
    } else {
      decrementItemCount(product.id);
    }
  };
  const handleAddToCart = () => {
    addToCart(product);
  };
  const count = cartItems.find((item) => item.id === product.id)?.count || 0;
  const { id, title, price, description, category, image, rating } = product;
  return (
    <Paper shadow="sm" radius="md" p="md">
      <Group
        data-testid={`productPage-${id}`}
        p="md"
        justify="center"
        align="start"
        radius="lg"
        shadow="sm"
        gap={{ base: 5, xs: "md", md: "xl", xl: 50 }}
      >
        <Image w={500} mah={500} fit="contain" src={image} alt={title} />

        <Stack w={500}>
          <Title order={2}>{title}</Title>
          {/* TODO make Badge clickable and redirect to category */}
          <Badge>{category}</Badge>
          <ProductRating rating={rating} />
          <Text>{description}</Text>
          <Group align="center">
            <Text>{price}$</Text>
            {buyButton()}
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
};

export default ProductPage;

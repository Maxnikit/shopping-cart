import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Image, Text, Button, Group, Title, Stack, Badge } from "@mantine/core";
import { Product } from "@customTypes/index";
import ProductPageSkeleton from "./ProductPageSkeleton";
import { useCartStore } from "../../stores/cartStore";
import { getProductById } from "../../api/getProducts";
import { ProductRating } from "../ProductRating/ProductRating";
import { CategoryBadge } from "@components/CategoryBadge/CategoryBadge";

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

const ProductPageComponent = ({ product }: { product: Product }) => {
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
          <Button variant="light" color="red" onClick={() => handleDecrement()}>
            -
          </Button>

          <Button variant="light" component={Link} to="/cart" radius="md">
            <Text size="lg">{count} </Text>
          </Button>
          <Button
            variant="light"
            color="green"
            onClick={() => handleIncrement()}
          >
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
    <Group
      data-testid={`productPage-${id}`}
      p="md"
      justify="center"
      align="start"
    >
      <Image maw={500} mah={500} fit="contain" src={image} alt={title} />

      <Stack w={500}>
        <Title order={2}>{title}</Title>
        <CategoryBadge category={category} />
        <ProductRating rating={rating} />
        <Text>{description}</Text>
        <Group align="center">
          <Text size="xl">{price}$</Text>
          {buyButton()}
        </Group>
      </Stack>
    </Group>
  );
};

export default ProductPage;

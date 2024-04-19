import { useParams, useNavigate } from "react-router-dom";
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
} from "@mantine/core";
import useShoppingCart from "../../hooks/userShoppingCart";
import { getProductById } from "../../api/getProducts";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Failed to fetch product</div>;
  }

  return <ProductPageComponent product={product} />;
};

const ProductPageComponent = ({ product }) => {
  const navigate = useNavigate();
  const goToCart = () => {
    navigate(`/cart`);
  };

  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    incrementItemCount,
    decrementItemCount,
  } = useShoppingCart();

  const isProductInCart = cartItems.some((item) => item.id === product.id);

  const buyButton = () => {
    if (isProductInCart) {
      return (
        <Group>
          <Button
            radius="md"
            onClick={() => {
              goToCart();
            }}
            color="red"
          >
            <Text>In cart</Text>
          </Button>
          <Button onClick={() => handleIncrement()}>+</Button>
          <Button onClick={() => handleDecrement()}>-</Button>
        </Group>
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
      console.log("removing");
      removeFromCart(product.id);
    } else {
      decrementItemCount(product.id);
    }
  };
  const handleAddToCart = () => {
    addToCart(product);
  };
  const count = cartItems.find((item) => item.id === product.id)?.count || 0;
  console.log(cartItems);
  const { id, name, price, description, category, image, rating } = product;
  return (
    <>
      <Text>{count}</Text>
      <Button onClick={clearCart}>Clear cart</Button>
      <Group
        data-testid={`productPage-${id}`}
        p="md"
        justify="center"
        align="start"
        radius="lg"
        shadow="sm"
        gap={{ base: 5, xs: "md", md: "xl", xl: 50 }}
      >
        <Image maw={500} mah={500} fit="contain" src={image} alt={name} />

        <Stack w={500}>
          <Title order={2}>{name}</Title>
          <Badge>{category}</Badge>
          <Group>
            <Rating defaultValue={rating.rate} readOnly />
            <Text>{rating.count} reviews</Text>
          </Group>
          <Text>{description}</Text>
          <Group align="center">
            <Text>{price}$</Text>
            {buyButton()}
          </Group>
        </Stack>
      </Group>
    </>
  );
};

export default ProductPage;

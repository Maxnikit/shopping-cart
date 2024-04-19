import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../api/getProducts";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Flex,
  Rating,
  Grid,
  Title,
  Stack,
  Badge,
} from "@mantine/core";

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
  return (
    <>
      <Group
        p="md"
        justify="center"
        align="start"
        radius="lg"
        withBorder
        shadow="sm"
        gap={{ base: 5, xs: "md", md: "xl", xl: 50 }}
        // gap={5}
      >
        <Image
          maw={500}
          mah={500}
          fit="contain"
          src={product.image}
          alt={product.title}
        />

        <Stack w={500}>
          <Title order={2}>{product.title}</Title>
          <Badge>{product.category}</Badge>
          <Group>
            <Rating defaultValue={product.rating.rate} readOnly />
            <Text>{product.rating.count} reviews</Text>
          </Group>
          <Text>{product.description}</Text>
          <Group align="center">
            <Text>{product.price}$</Text>
            <Button radius="md">
              <Text>Add to Cart</Text>
            </Button>
          </Group>
        </Stack>
      </Group>
    </>
  );
};

export default ProductPage;

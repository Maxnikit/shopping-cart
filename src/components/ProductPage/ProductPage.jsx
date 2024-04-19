import { useParams } from "react-router-dom";
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

const ProductPageComponent = ({
  product: {
    id,
    title: name,
    description,
    category,
    price,
    image,
    rating = {
      rate: 0,
      count: 0,
    },
  },
}) => {
  return (
    <>
      <Group
        data-testid={`productPage-${id}`}
        p="md"
        justify="center"
        align="start"
        radius="lg"
        shadow="sm"
        gap={{ base: 5, xs: "md", md: "xl", xl: 50 }}
        // gap={5}
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

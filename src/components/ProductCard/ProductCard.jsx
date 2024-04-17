import { Card, Image, Text, Button, Group, Flex, Rating } from "@mantine/core";
import PropTypes from "prop-types";
const ProductCard = ({ product }) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      key={product.id}
      style={{ width: 300 }}
    >
      <Flex direction="column">
        <Card.Section>
          <Image
            src={product.image}
            height={200}
            alt={product.title}
            fit="contain"
          />
        </Card.Section>
        <Text size="lg" fw={500}>
          {product.price}$
        </Text>
        <Text fw={400} lineClamp={1}>
          {product.title}
        </Text>
        <Group>
          <Rating defaultValue={product.rating.rate} readOnly />
          <Text>{product.rating.count} reviews</Text>
        </Group>
        <Button color="blue" fullWidth mt="md" radius="md">
          {/* TODO add icon of cart */}
          <Text>Add to Cart</Text>
        </Button>
      </Flex>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  // handleAddToCart: PropTypes.func.isRequired,
  // handleRemoveFromCart: PropTypes.func.isRequired,
  // isInCart: PropTypes.bool.isRequired,
};

export default ProductCard;

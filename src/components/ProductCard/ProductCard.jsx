import { Card, Image, Text, Button, Group, Flex, Rating } from "@mantine/core";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import style from "./ProductCard.module.css";

const ProductCard = ({
  product: {
    id,
    title: name,
    price,
    image,
    rating = {
      rate: 0,
      count: 0,
    },
  },
}) => {
  const navigate = useNavigate();
  const goToProductPage = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <Card
      data-testid="product"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      key={id}
      style={{ width: 300 }}
    >
      <Flex direction="column">
        <Card.Section
          className={style.productImage}
          onClick={() => goToProductPage(id)}
        >
          <Image src={image} height={200} alt={name} fit="contain" />
        </Card.Section>
        <Text size="lg" fw={500}>
          {price}$
        </Text>
        <Text
          fw={400}
          lineClamp={1}
          data-testid="productName"
          className={style.productName}
          onClick={() => goToProductPage(id)}
        >
          {name}
        </Text>
        <Group>
          <Rating defaultValue={rating.rate} readOnly />
          <Text>{rating.count} reviews</Text>
        </Group>
        <Button fullWidth mt="md" radius="md">
          {/* TODO add icon of cart */}
          <Text>Add to Cart</Text>
        </Button>
      </Flex>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
  // handleAddToCart: PropTypes.func.isRequired,
  // handleRemoveFromCart: PropTypes.func.isRequired,
  // isInCart: PropTypes.bool.isRequired,
};

ProductCard.defaultProps = {
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  },
};
export default ProductCard;

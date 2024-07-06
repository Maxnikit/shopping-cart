import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Flex,
  Rating,
  Tooltip,
} from "@mantine/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";
import { useCartStore } from "../../stores/cartStore";

const ProductCard = ({ product }) => {
  const { id, title, price, image, rating = { rate: 0, count: 0 } } = product;

  const { cartItems, addToCart } = useCartStore();

  const isProductInCart = cartItems.some((item) => item.id === product.id);
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card
      data-testid="product"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      key={id}
      className={style.card}
    >
      <Flex direction="column">
        <Card.Section component={Link} to={`/product/${product.id}`}>
          <Image className={style.productImage} src={image} alt={title} />
        </Card.Section>
        <Text size="lg" fw={500}>
          {price}$
        </Text>
        <Tooltip label={title} openDelay={500}>
          <Text
            size="sm"
            component={Link}
            fw={400}
            lineClamp={1}
            data-testid="productName"
            to={`/product/${product.id}`}
            className={style.productName}
          >
            {title}
          </Text>
        </Tooltip>
        <Group>
          <Rating defaultValue={rating.rate} readOnly />
          <Text>{rating.count} reviews</Text>
        </Group>
        {isProductInCart ? (
          <Button
            component={Link}
            mt={10}
            radius="md"
            color="green"
            fullWidth
            to="/cart"
            className={style.inCartButton}
          >
            In cart
          </Button>
        ) : (
          <Button
            mt={10}
            radius="md"
            onClick={handleAddToCart}
            className={style.addToCartButton}
          >
            Add to Cart
          </Button>
        )}
      </Flex>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
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

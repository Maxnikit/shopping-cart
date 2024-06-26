import { Card, Image, Text, Button, Group, Flex, Rating } from "@mantine/core";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import style from "./ProductCard.module.css";
import { useCart } from "../../hooks/cartContext";

const ProductCard = ({ product }) => {
  const { id, title, price, image, rating = { rate: 0, count: 0 } } = product;

  const navigate = useNavigate();
  const goToProductPage = (productId) => {
    navigate(`/product/${productId}`);
  };
  const goToCart = () => {
    navigate(`/cart`);
  };
  const { cartItems, addToCart } = useCart();
  console.log(cartItems);
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
        <Card.Section onClick={() => goToProductPage(id)}>
          <Image className={style.productImage} src={image} alt={title} />
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
          {title}
        </Text>
        <Group>
          <Rating defaultValue={rating.rate} readOnly />
          <Text>{rating.count} reviews</Text>
        </Group>
        {isProductInCart ? (
          <Button
            radius="md"
            color="green"
            fullWidth
            onClick={() => navigate(`/cart`)}
            className={style.inCartButton}
          >
            In cart
          </Button>
        ) : (
          <Button
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

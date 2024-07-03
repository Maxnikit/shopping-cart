import { Card, Skeleton, Flex, Group } from "@mantine/core";
import style from "./ProductCard.module.css"; // Assuming you want to maintain some styling consistency

const ProductCardSkeleton = () => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={style.card}
    >
      <Flex direction="column">
        <Skeleton height={200} circle={false} className={style.productImage} />
        <Skeleton height={8} mt={10} width="80%" />
        <Skeleton height={8} mt={10} width="60%" />
        <Group position="apart" mt={10}>
          <Skeleton height={20} width="30%" />
          <Skeleton height={20} width="20%" />
        </Group>
        <Skeleton height={36} mt={10} />
      </Flex>
    </Card>
  );
};

export default ProductCardSkeleton;

import { Card, Skeleton, Flex, Group } from "@mantine/core";
import style from "./ProductCard.module.css"; // Assuming you want to maintain some styling consistency

const ProductCardSkeleton = () => {
  return (
    <Card
      shadow="sm"
      padding="sm"
      radius="md"
      withBorder
      className={style.card}
    >
      <Flex direction="column">
        <Skeleton circle={false} className={style.productImage} />
        <Skeleton height={20} mt={5} width={40} />
        <Skeleton height={8} mt={5} width="80%" />
        <Group position="apart" mt={5}>
          <Skeleton height={20} width={40} />
          <Skeleton height={20} width={60} />
        </Group>
        <Skeleton height={36} mt={10} />
      </Flex>
    </Card>
  );
};

export default ProductCardSkeleton;

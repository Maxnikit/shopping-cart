import { Paper, Group, Stack, Skeleton, Rating, Text } from "@mantine/core";

const ProductPageSkeleton = () => {
  return (
    <Paper shadow="sm" radius="md" p="md">
      <Group p="md" justify="center" align="start">
        <Skeleton w={500} h={300} />

        <Stack w={500}>
          <Skeleton height={25} />
          <Skeleton height={15} width={80} />
          <Group>
            <Rating defaultValue={0} readOnly />
            <Text>0 reviews</Text>
          </Group>
          <Skeleton height={50} />
          <Group align="center">
            <Text size="xl">0$</Text>
            <Skeleton height={25} width={100} />
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
};

export default ProductPageSkeleton;

import { Indicator } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

import { useCartStore } from "../../stores/cartStore";

export const CartIcon = () => {
  const { getTotalItemCount } = useCartStore();

  return (
    <>
      <Indicator label={getTotalItemCount()} size={20} color="grape.9">
        <IconShoppingCart />
      </Indicator>
    </>
  );
};

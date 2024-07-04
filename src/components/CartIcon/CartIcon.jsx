import { Indicator } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

import { useCart } from "../../hooks/useCart";

export const CartIcon = () => {
  const { getTotalItemCount } = useCart();

  return (
    <>
      <Indicator label={getTotalItemCount()} size={20} color="grape.9">
        <IconShoppingCart />
      </Indicator>
    </>
  );
};

import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

import { IconShoppingBag } from "@tabler/icons-react";

import { CartIcon } from "../CartIcon/CartIcon";

const links = [
  { link: "/shop", label: "Shop", icon: <IconShoppingBag /> },
  { link: "/cart", label: "Cart", icon: <CartIcon /> },
];

const NavButtons = () => {
  const items = links.map((link) => (
    <Button
      style={{ overflow: "visible" }}
      component={Link}
      variant="subtle"
      key={link.label}
      to={link.link}
      leftSection={link.icon}
    >
      {link.label}
    </Button>
  ));

  return <>{items}</>;
};

export default NavButtons;

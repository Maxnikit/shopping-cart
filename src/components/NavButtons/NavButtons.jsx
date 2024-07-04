import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

import { IconHome2, IconShoppingCart } from "@tabler/icons-react";

import classes from "./NavButtons.module.css";

const links = [
  { link: "/", label: "Home", icon: <IconHome2 /> },
  { link: "/cart", label: "Cart", icon: <IconShoppingCart /> },
];

const NavButtons = (burgerToggle) => {
  const items = links.map((link) => (
    <Button
      component={Link}
      variant="subtle"
      key={link.label}
      to={link.link}
      className={classes.link}
      leftSection={link.icon}
    >
      {link.label}
    </Button>
  ));

  return <>{items}</>;
};

export default NavButtons;

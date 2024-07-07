import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

import { IconHome2 } from "@tabler/icons-react";

import classes from "./NavButtons.module.css";
import { CartIcon } from "../CartIcon/CartIcon";

const links = [
  { link: "/", label: "Home", icon: <IconHome2 /> },
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
      className={classes.link}
      leftSection={link.icon}
    >
      {link.label}
    </Button>
  ));

  return <>{items}</>;
};

export default NavButtons;

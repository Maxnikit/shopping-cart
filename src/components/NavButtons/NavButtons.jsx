import { Button, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { IconHome2, IconShoppingCart } from "@tabler/icons-react";

import classes from "./NavButtons.module.css";

const links = [
  { link: "/", label: "Home", icon: <IconHome2 /> },
  { link: "/cart", label: "Cart", icon: <IconShoppingCart /> },
];

const NavButtons = (burgerToggle) => {
  // TODO figure out why using Link leads to 404 when clicking it or manuall typing it in URL bar.
  // Link is generally better for navBar than navigate because it is semantically correct and allows for
  // rightclick - open in new tab

  const items = links.map((link) => (
    <Button
      component={Link}
      variant="subtle"
      key={link.label}
      to={link.link}
      className={classes.link}
      leftSection={link.icon}
      // onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Button>
  ));

  return <>{items}</>;
};

export default NavButtons;

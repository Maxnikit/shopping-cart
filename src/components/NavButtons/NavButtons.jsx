import { Button, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { IconHome2, IconShoppingCart } from "@tabler/icons-react";

import classes from "./NavButtons.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/cart", label: "Cart" },
];

const NavButtons = (burgerToggle) => {
  // TODO figure out why using Link leads to 404 when clicking it or manuall typing it in URL bar.
  // Link is generally better for navBar than navigate because it is semantically correct and allows for
  // rightclick - open in new tab

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      // onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      {items}
      {/* <Button
        variant="subtle"
        onClick={() => {
          navigate(`/`);
          burgerToggle();
        }}
      >
        Shop
      </Button>
      <Button
        variant="subtle"
        leftSection={<IconShoppingCart />}
        onClick={() => {
          navigate(`/cart`);
          burgerToggle();
        }}
      >
        Cart
      </Button> */}
    </>
  );
};

export default NavButtons;

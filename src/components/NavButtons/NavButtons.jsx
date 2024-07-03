import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavButtons = (burgerToggle) => {
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />;
  return (
    <>
      <Link to="/">
        <Button variant="subtle" onClick={burgerToggle}>
          Shop
        </Button>
      </Link>
      <Link to="/cart">
        <Button variant="subtle" onClick={burgerToggle} leftSection={cartIcon}>
          Cart
        </Button>
      </Link>
    </>
  );
};

export default NavButtons;

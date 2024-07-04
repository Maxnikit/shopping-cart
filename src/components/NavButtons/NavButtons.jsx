import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavButtons = (burgerToggle) => {
  const navigate = useNavigate();
  // TODO figure out why using Link leads to 404 when clicking it or manuall typing it in URL bar.
  // Link is generally better for navBar than navigate because it is semantically correct and allows for
  // rightclick - open in new tab
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />;
  return (
    <>
      <Button
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
        leftSection={cartIcon}
        onClick={() => {
          navigate(`/cart`);
          burgerToggle();
        }}
      >
        Cart
      </Button>
    </>
  );
};

export default NavButtons;

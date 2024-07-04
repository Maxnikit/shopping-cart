import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavButtons = (burgerToggle) => {
  const navigate = useNavigate();

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

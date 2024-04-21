import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const NavButtons = () => {
  return (
    <>
      <Link to="/shop">
        <Button variant="subtle">Shop</Button>
      </Link>
      <Link to="/cart">
        <Button variant="subtle">Cart</Button>
      </Link>
    </>
  );
};

export default NavButtons;

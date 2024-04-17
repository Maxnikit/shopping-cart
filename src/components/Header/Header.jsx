import { Button, Flex, Title, Text } from "@mantine/core";

import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className={styles.header} style={{ width: "100vw" }}>
        <Flex
          justify={"space-between"}
          align={"center"}
          style={{ padding: "10px 20px" }}
        >
          <Title flex={1} order={1}>
            Totally not a{" "}
            <Text component="span" c="blue" inherit>
              fake
            </Text>{" "}
            store
          </Title>

          <Link to="/">
            <Button variant="subtle">Shop</Button>
          </Link>
          <Link to="/cart">
            <Button variant="subtle">Cart </Button>
          </Link>
        </Flex>
      </div>
    </>
  );
};
export default Header;

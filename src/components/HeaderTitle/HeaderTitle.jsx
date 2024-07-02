import { Title, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import style from "./HeaderTitle.module.css";

const HeaderTitle = () => {
  return (
    <div data-testid="appHeader" className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title flex={1} order={1} c="black" className={style.title}>
          Totally not a{" "}
          <Text
            component="span"
            inherit
            c="var(--mantine-primary-color-filled)"
          >
            fake{" "}
          </Text>
          store
        </Title>
      </Link>
    </div>
  );
};

export default HeaderTitle;

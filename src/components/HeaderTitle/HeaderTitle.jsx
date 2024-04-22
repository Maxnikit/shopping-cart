import { Title, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const HeaderTitle = () => {
  return (
    <div data-testid="appHeader" className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title flex={1} order={1} c="black">
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

import { Title, Text } from "@mantine/core";

const HeaderTitle = () => {
  return (
    <div data-testid="appHeader" className="header">
      <Title flex={1} order={1}>
        Totally not a{" "}
        <Text component="span" inherit c="var(--mantine-primary-color-filled)">
          fake{" "}
        </Text>
        store
      </Title>
    </div>
  );
};

export default HeaderTitle;

import { Stack, Tabs, Text } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import { IconShoppingBag } from "@tabler/icons-react";
import { CartIcon } from "../CartIcon/CartIcon";

const links = [
  { link: "/shop", label: "Shop", icon: <IconShoppingBag /> },
  {
    link: "/cart",
    label: "Cart",
    icon: <CartIcon />,
  },
];
export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = links.map((link) => (
    <Tabs.Tab key={link.label} value={link.link} pt={11}>
      <Stack gap={0} align="center">
        {link.icon}
        <Text size="xs">{link.label}</Text>
      </Stack>
    </Tabs.Tab>
  ));

  return (
    <Tabs
      defaultValue="/"
      inverted
      value={location.pathname}
      onChange={(value) => navigate(value ?? "/")}
    >
      <Tabs.List grow>{items}</Tabs.List>
    </Tabs>
  );
}

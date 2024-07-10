import { Tabs } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import { IconHome2 } from "@tabler/icons-react";
import { CartIcon } from "../CartIcon/CartIcon";

const links = [
  { link: "/shop", label: "Shop", icon: <IconHome2 /> },
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
    <Tabs.Tab
      size="lg"
      key={link.label}
      value={link.link}
      leftSection={link.icon}
      // p={0}
    >
      {link.label}
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

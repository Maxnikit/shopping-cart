import { Transition, Button, Group, Indicator } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconHome2, IconShoppingCart } from "@tabler/icons-react";
import { CartIcon } from "../CartIcon/CartIcon";

const links = [
  { link: "/", label: "Home", icon: <IconHome2 /> },
  {
    link: "/cart",
    label: "Cart",
    icon: <CartIcon />,
  },
];
export function BottomNavigation() {
  // const [mounted, setMounted] = useState(false);
  const items = links.map((link) => (
    <Button
      style={{ overflow: "visible" }}
      size="lg"
      component={Link}
      variant="subtle"
      key={link.label}
      to={link.link}
      //   className={classes.link}
      leftSection={link.icon}
      p={0}
    >
      {link.label}
    </Button>
  ));

  return (
    // <Transition
    //   mounted={mounted}
    //   transition="slide-up"
    //   duration={400}
    //   timingFunction="ease"
    // >
    <Group h="100%" align="center" grow>
      {items}
    </Group>

    // </Transition>
  );
}

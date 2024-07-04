import { Transition, Button, Group } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconHome2, IconShoppingCart } from "@tabler/icons-react";

const links = [
  { link: "/", label: "Home", icon: <IconHome2 /> },
  { link: "/cart", label: "Cart", icon: <IconShoppingCart /> },
];
export function BottomNavigation() {
  const [mounted, setMounted] = useState(false);
  const items = links.map((link) => (
    <Button
      component={Link}
      variant="subtle"
      key={link.label}
      to={link.link}
      //   className={classes.link}
      leftSection={link.icon}
    >
      {link.label}
    </Button>
  ));
  console.log(items);
  return (
    // <Transition
    //   mounted={mounted}
    //   transition="slide-up"
    //   duration={400}
    //   timingFunction="ease"
    // >
    <Group grow>{items}</Group>

    // </Transition>
  );
}

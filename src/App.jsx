import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { Group, AppShell, Burger } from "@mantine/core";
import HeaderTitle from "./components/HeaderTitle/HeaderTitle";
import NavButtons from "./components/NavButtons/NavButtons";
import Footer from "./components/Footer/Footer";
import "./style.css";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  // TODO Make title smaller on mobile(or header bigger)
  // TODO make it so burger closes when clicking links on mobile

  // TODO add a skeleton for loading
  // TODO add some big greencheck icon for finishing checkout?
  // TODO add credit card info for checkout and adress
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <ScrollToTop />
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            aria-label="Toggle navigation"
          />
          <Group justify="space-between" style={{ flex: 1 }}>
            <HeaderTitle />
            <Group ml="xl" gap={0} visibleFrom="sm">
              <NavButtons burgerToggle={toggle} />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <NavButtons />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      {/* <AppShell.Footer> */}
      <Footer />
      {/* </AppShell.Footer> */}
    </AppShell>
  );
}

export default App;

import "@mantine/core/styles.css";
import { Group, AppShell, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import HeaderTitle from "./components/HeaderTitle/HeaderTitle";
import NavButtons from "./components/NavButtons/NavButtons";
// import Footer from "./components/Footer/Footer";
import "./style.css";
import ScrollToTop from "./utils/scrollToTop";
import { BottomNavigation } from "./components/BottomNavigation/BottomNavigation";

function App() {
  // TODO choose more correct query
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  // TODO Improve error messages
  // TODO improve cart empty message
  // TODO add searchbar
  // TODO add filters by category, price, name and etc.
  // TODO add credit card info for checkout and adress

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{
        height: 55,
        collapsed: !isMobile,
      }}
      padding="md"
    >
      <ScrollToTop />

      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <HeaderTitle />
            <Group ml="xl" gap={0} visibleFrom="sm">
              <NavButtons />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer>
        <BottomNavigation />
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;

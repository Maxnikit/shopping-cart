import "@mantine/core/styles.css";
import { Group, AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { isMobile } from "@utils/isMobile";
import HeaderTitle from "./components/HeaderTitle/HeaderTitle";
import NavButtons from "./components/NavButtons/NavButtons";
// import Footer from "./components/Footer/Footer";
import "./style.css";
import ScrollToTop from "./utils/scrollToTop";
import { BottomNavigation } from "./components/BottomNavigation/BottomNavigation";

function App() {
  // TODO Improve error messages
  // TODO add filters by price and rating
  // TODO add credit card info for checkout and adress

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{
        height: 65,
        collapsed: !isMobile(),
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

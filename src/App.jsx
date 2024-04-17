import "./App.css";
import "@mantine/core/styles.css";
import Header from "./components/Header/Header";
import { AppShell, Burger, Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;

import "./App.css";
import "@mantine/core/styles.css";
import Header from "./components/Header/Header";
import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

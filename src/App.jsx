import "@mantine/core/styles.css";
import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

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
    // Following code was found somewhere in internet, maybe thats a better way
    // to do routing. I don't know
    // <div>
    //   <Link to="/">Home</Link>

    //   <Link to="/about">About</Link>

    //   <Routes>
    //     <Route path="/" element={<Home />} />

    //     <Route path="/about" element={<About />} />

    //     <Route path="*" element={<NoMatch />} />
    //   </Routes>
    // </div>
  );
}

export default App;

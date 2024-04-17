import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
];

export default routes;

import { Navigate } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ProductPage from "./components/ProductPage/ProductPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // TODO add homePage
      // { index: true, element: <Home /> },
      {
        index: true,
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/shop" replace />,
  },
];

export default routes;

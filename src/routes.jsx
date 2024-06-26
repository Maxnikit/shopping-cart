import { Navigate } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ProductPage from "./components/ProductPage/ProductPage";
import Checkout from "./components/Checkout/Checkout";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;

import { Navigate } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Cart from "./components/Cart/Cart";
import ProductPage from "./components/ProductPage/ProductPage";
import Checkout from "./components/Checkout/Checkout";
import { ShopPage } from "./components/ShopPage/ShopPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/shop",
        element: <ShopPage />,
        children: [
          {
            path: ":categoryName",
            element: <ShopPage />,
          },
          {
            path: ":categoryName/search/:query",
            element: <ShopPage />,
          },
        ],
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
    element: <Navigate to="/shop" />,
  },
];

export default routes;

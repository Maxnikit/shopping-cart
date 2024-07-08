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
    element: <App />, // App wraps all routes as a layout
    children: [
      { index: true, element: <Navigate to="/shop" replace /> },
      { path: "shop", element: <ShopPage /> },
      { path: "shop/category/:categoryName", element: <ShopPage /> },
      {
        path: "shop/category/:categoryName/search?/:query?",
        element: <ShopPage />,
      },
      { path: "product/:id", element: <ProductPage /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      // Other routes can be added here
    ],
  },
  // If you have paths that should render ErrorPage or other components outside of App's layout, you can add them here
];

export default routes;

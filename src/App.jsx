import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import OrderPizza from "./components/OrderPage";
import HomePage from "./components/HomePage";
import Success from "./components/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/siparis-olustur",
    element: <OrderPizza />,
  },
  {
    path: "/siparis-alindi",
    element: <Success />,
  },
]);

const App = () => {
  const [orderData, setOrderData] = useState(null);

  const handleOrderData = (d) => {
    setOrderData(d);
  };

  return <RouterProvider router={router} />;
};

export default App;

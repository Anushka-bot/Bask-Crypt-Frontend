import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Root from "./pages/Root";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Baskets from "./pages/Baskets";
import User from "./pages/User";
import Mybaskets from "./pages/Mybaskets";
import Table from "./pages/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/baskets",
    element: <Baskets />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/mybaskets",
    element: <Mybaskets />,
  },
  {
    path: "/table",
    element: <Table />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

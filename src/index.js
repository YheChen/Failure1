import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Sidescroll from "./pages/sidescroll";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: Sidescroll(),
  },
  // {
  //   path: "/",
  //   element: None,
  // },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

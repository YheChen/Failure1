import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Sidescroll from "./pages/sidescroll";
import "./index.css";
import { createBrowserRouter, RouterProvider, Root } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidescroll />,
  },
  {
    path: "/",
    element: None,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

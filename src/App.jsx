import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./../lib/router.jsx";

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
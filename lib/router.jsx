import { createBrowserRouter } from "react-router-dom";
import Home from "./../src/pages/Home";

export const gRoutes = {
  ROOT: "/",
}

export const router = createBrowserRouter([
  { path: gRoutes.ROOT, element: <Home /> },
])
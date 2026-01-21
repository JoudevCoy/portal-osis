import { createBrowserRouter } from "react-router-dom";
import Home from "./../src/pages/Home";
import Calendar from "./../src/pages/Calendar";
import Admin from "./../src/pages/Admin";

export const gRoutes = {
  ROOT: "/",
  CALENDAR: "/calendar",
  PANEL: "/admin/panel"
}

export const router = createBrowserRouter([
  { path: gRoutes.ROOT, element: <Home /> },
  { path: gRoutes.CALENDAR, element: <Calendar /> },
  { path: gRoutes.PANEL, element: <Admin /> },
])